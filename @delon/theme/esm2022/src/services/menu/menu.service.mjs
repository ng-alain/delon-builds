import { Inject, Injectable, Optional } from '@angular/core';
import { BehaviorSubject, share } from 'rxjs';
import { ALAIN_I18N_TOKEN } from '../i18n/i18n';
import * as i0 from "@angular/core";
import * as i1 from "@delon/acl";
/**
 * 菜单服务，[在线文档](https://ng-alain.com/theme/menu)
 */
export class MenuService {
    constructor(i18nSrv, aclService) {
        this.i18nSrv = i18nSrv;
        this.aclService = aclService;
        this._change$ = new BehaviorSubject([]);
        this.data = [];
        /**
         * 是否完全受控菜单打开状态，默认：`false`
         */
        this.openStrictly = false;
        this.i18n$ = this.i18nSrv.change.subscribe(() => this.resume());
    }
    get change() {
        return this._change$.pipe(share());
    }
    get menus() {
        return this.data;
    }
    visit(data, callback) {
        const inFn = (list, parentMenu, depth) => {
            for (const item of list) {
                callback(item, parentMenu, depth);
                if (item.children && item.children.length > 0) {
                    inFn(item.children, item, depth + 1);
                }
                else {
                    item.children = [];
                }
            }
        };
        inFn(data, null, 0);
    }
    add(items) {
        this.data = items;
        this.resume();
    }
    fixItem(item) {
        item._aclResult = true;
        if (!item.link)
            item.link = '';
        if (!item.externalLink)
            item.externalLink = '';
        // badge
        if (item.badge) {
            if (item.badgeDot !== true) {
                item.badgeDot = false;
            }
            if (!item.badgeStatus) {
                item.badgeStatus = 'error';
            }
        }
        if (!Array.isArray(item.children)) {
            item.children = [];
        }
        // icon
        if (typeof item.icon === 'string') {
            let type = 'class';
            let value = item.icon;
            // compatible `anticon anticon-user`
            if (~item.icon.indexOf(`anticon-`)) {
                type = 'icon';
                value = value.split('-').slice(1).join('-');
            }
            else if (/^https?:\/\//.test(item.icon)) {
                type = 'img';
            }
            item.icon = { type, value };
        }
        if (item.icon != null) {
            item.icon = { theme: 'outline', spin: false, ...item.icon };
        }
        item.text = item.i18n && this.i18nSrv ? this.i18nSrv.fanyi(item.i18n) : item.text;
        // group
        item.group = item.group !== false;
        // hidden
        item._hidden = typeof item.hide === 'undefined' ? false : item.hide;
        // disabled
        item.disabled = typeof item.disabled === 'undefined' ? false : item.disabled;
        // acl
        item._aclResult = item.acl && this.aclService ? this.aclService.can(item.acl) : true;
        item.open = item.open != null ? item.open : false;
    }
    resume(callback) {
        let i = 1;
        const shortcuts = [];
        this.visit(this.data, (item, parent, depth) => {
            item._id = i++;
            item._parent = parent;
            item._depth = depth;
            this.fixItem(item);
            // shortcut
            if (parent && item.shortcut === true && parent.shortcutRoot !== true) {
                shortcuts.push(item);
            }
            if (callback)
                callback(item, parent, depth);
        });
        this.loadShortcut(shortcuts);
        this._change$.next(this.data);
    }
    /**
     * 加载快捷菜单，加载位置规则如下：
     * 1、统一在下标0的节点下（即【主导航】节点下方）
     *      1、若 children 存在 【shortcutRoot: true】则最优先【推荐】这种方式
     *      2、否则查找带有【dashboard】字样链接，若存在则在此菜单的下方创建快捷入口
     *      3、否则放在0节点位置
     */
    loadShortcut(shortcuts) {
        if (shortcuts.length === 0 || this.data.length === 0) {
            return;
        }
        const ls = this.data[0].children;
        let pos = ls.findIndex(w => w.shortcutRoot === true);
        if (pos === -1) {
            pos = ls.findIndex(w => w.link.includes('dashboard'));
            pos = (pos !== -1 ? pos : -1) + 1;
            const shortcutMenu = {
                text: '快捷菜单',
                i18n: 'shortcut',
                icon: 'icon-rocket',
                children: []
            };
            this.data[0].children.splice(pos, 0, shortcutMenu);
        }
        let _data = this.data[0].children[pos];
        if (_data.i18n && this.i18nSrv)
            _data.text = this.i18nSrv.fanyi(_data.i18n);
        _data = Object.assign(_data, {
            shortcutRoot: true,
            _id: -1,
            _parent: null,
            _depth: 1
        });
        _data.children = shortcuts.map(i => {
            i._depth = 2;
            i._parent = _data;
            return i;
        });
    }
    /**
     * 清空菜单
     */
    clear() {
        this.data = [];
        this._change$.next(this.data);
    }
    /**
     * Use `url` or `key` to find menus
     *
     * 利用 `url` 或 `key` 查找菜单
     */
    find(options) {
        const opt = { recursive: false, ignoreHide: false, ...options };
        if (opt.key != null) {
            return this.getItem(opt.key);
        }
        let url = opt.url;
        let item = null;
        while (!item && url) {
            this.visit(opt.data ?? this.data, i => {
                if (opt.ignoreHide && i.hide) {
                    return;
                }
                if (opt.cb) {
                    const res = opt.cb(i);
                    if (!item && typeof res === 'boolean' && res) {
                        item = i;
                    }
                }
                if (i.link != null && i.link === url) {
                    item = i;
                }
            });
            if (!opt.recursive)
                break;
            if (/[?;]/g.test(url)) {
                url = url.split(/[?;]/g)[0];
            }
            else {
                url = url.split('/').slice(0, -1).join('/');
            }
        }
        return item;
    }
    /**
     * 根据url获取菜单列表
     * - 若 `recursive: true` 则会自动向上递归查找
     *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
     */
    getPathByUrl(url, recursive = false) {
        const ret = [];
        let item = this.find({ url, recursive });
        if (!item)
            return ret;
        do {
            ret.splice(0, 0, item);
            item = item._parent;
        } while (item);
        return ret;
    }
    /**
     * Get menu based on `key`
     */
    getItem(key) {
        let res = null;
        this.visit(this.data, item => {
            if (res == null && item.key === key) {
                res = item;
            }
        });
        return res;
    }
    /**
     * Set menu based on `key`
     */
    setItem(key, value, options) {
        const item = typeof key === 'string' ? this.getItem(key) : key;
        if (item == null)
            return;
        Object.keys(value).forEach(k => {
            item[k] = value[k];
        });
        this.fixItem(item);
        if (options?.emit !== false)
            this._change$.next(this.data);
    }
    /**
     * Open menu based on `key` or menu object
     */
    open(keyOrItem, options) {
        let item = typeof keyOrItem === 'string' ? this.find({ key: keyOrItem }) : keyOrItem;
        if (item == null)
            return;
        this.visit(this.menus, (i) => {
            i._selected = false;
            if (!this.openStrictly)
                i.open = false;
        });
        do {
            item._selected = true;
            item.open = true;
            item = item._parent;
        } while (item);
        if (options?.emit !== false)
            this._change$.next(this.data);
    }
    openAll(status) {
        this.toggleOpen(null, { allStatus: status });
    }
    toggleOpen(keyOrItem, options) {
        let item = typeof keyOrItem === 'string' ? this.find({ key: keyOrItem }) : keyOrItem;
        if (item == null) {
            this.visit(this.menus, (i) => {
                i._selected = false;
                i.open = options?.allStatus === true;
            });
        }
        else {
            if (!this.openStrictly) {
                this.visit(this.menus, (i) => {
                    if (i !== item)
                        i.open = false;
                });
                let pItem = item._parent;
                while (pItem) {
                    pItem.open = true;
                    pItem = pItem._parent;
                }
            }
            item.open = !item.open;
        }
        if (options?.emit !== false)
            this._change$.next(this.data);
    }
    ngOnDestroy() {
        this._change$.unsubscribe();
        this.i18n$.unsubscribe();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: MenuService, deps: [{ token: ALAIN_I18N_TOKEN, optional: true }, { token: i1.ACLService, optional: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: MenuService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: MenuService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [ALAIN_I18N_TOKEN]
                }] }, { type: i1.ACLService, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvc3JjL3NlcnZpY2VzL21lbnUvbWVudS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFhLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUE0QixLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFNeEUsT0FBTyxFQUFvQixnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7O0FBRWxFOztHQUVHO0FBRUgsTUFBTSxPQUFPLFdBQVc7SUFTdEIsWUFHVSxPQUF5QixFQUNiLFVBQXNCO1FBRGxDLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBQ2IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVpwQyxhQUFRLEdBQTRCLElBQUksZUFBZSxDQUFTLEVBQUUsQ0FBQyxDQUFDO1FBRXBFLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDMUI7O1dBRUc7UUFDSCxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQVFuQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUlELEtBQUssQ0FBQyxJQUFZLEVBQUUsUUFBd0U7UUFDMUYsTUFBTSxJQUFJLEdBQUcsQ0FBQyxJQUFZLEVBQUUsVUFBdUIsRUFBRSxLQUFhLEVBQVEsRUFBRTtZQUMxRSxLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksRUFBRTtnQkFDdkIsUUFBUSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2xDLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQ3RDO3FCQUFNO29CQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO2lCQUNwQjthQUNGO1FBQ0gsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELEdBQUcsQ0FBQyxLQUFhO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFTyxPQUFPLENBQUMsSUFBZTtRQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUV2QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVk7WUFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUUvQyxRQUFRO1FBQ1IsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtnQkFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7YUFDdkI7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7YUFDNUI7U0FDRjtRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztTQUNwQjtRQUVELE9BQU87UUFDUCxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDakMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDO1lBQ25CLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDdEIsb0NBQW9DO1lBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDbEMsSUFBSSxHQUFHLE1BQU0sQ0FBQztnQkFDZCxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzdDO2lCQUFNLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3pDLElBQUksR0FBRyxLQUFLLENBQUM7YUFDZDtZQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFlLENBQUM7U0FDMUM7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBSSxJQUFJLENBQUMsSUFBaUIsRUFBRSxDQUFDO1NBQzNFO1FBRUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUVsRixRQUFRO1FBQ1IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQztRQUVsQyxTQUFTO1FBQ1QsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFcEUsV0FBVztRQUNYLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRTdFLE1BQU07UUFDTixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFFckYsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3BELENBQUM7SUFPRCxNQUFNLENBQUMsUUFBeUU7UUFDOUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsTUFBTSxTQUFTLEdBQVcsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQWUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDdkQsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFbkIsV0FBVztZQUNYLElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxJQUFJLE1BQU0sQ0FBQyxZQUFZLEtBQUssSUFBSSxFQUFFO2dCQUNwRSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3RCO1lBRUQsSUFBSSxRQUFRO2dCQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNLLFlBQVksQ0FBQyxTQUFzQjtRQUN6QyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNwRCxPQUFPO1NBQ1I7UUFFRCxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQXVCLENBQUM7UUFDaEQsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFDLENBQUM7UUFDckQsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDZCxHQUFHLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDdkQsR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sWUFBWSxHQUFHO2dCQUNuQixJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLFFBQVEsRUFBRSxFQUFFO2FBQ0EsQ0FBQztZQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQ3JEO1FBQ0QsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEMsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUUsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQzNCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDUCxPQUFPLEVBQUUsSUFBSTtZQUNiLE1BQU0sRUFBRSxDQUFDO1NBQ0csQ0FBQyxDQUFDO1FBQ2hCLEtBQUssQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNqQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNiLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxLQUFLO1FBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFJLENBQUMsT0FzQko7UUFDQyxNQUFNLEdBQUcsR0FBRyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxHQUFHLE9BQU8sRUFBRSxDQUFDO1FBQ2hFLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFDbkIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM5QjtRQUVELElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFFbEIsSUFBSSxJQUFJLEdBQWdCLElBQUksQ0FBQztRQUU3QixPQUFPLENBQUMsSUFBSSxJQUFJLEdBQUcsRUFBRTtZQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDcEMsSUFBSSxHQUFHLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUU7b0JBQzVCLE9BQU87aUJBQ1I7Z0JBQ0QsSUFBSSxHQUFHLENBQUMsRUFBRSxFQUFFO29CQUNWLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxJQUFJLElBQUksT0FBTyxHQUFHLEtBQUssU0FBUyxJQUFJLEdBQUcsRUFBRTt3QkFDNUMsSUFBSSxHQUFHLENBQUMsQ0FBQztxQkFDVjtpQkFDRjtnQkFDRCxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFO29CQUNwQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO2lCQUNWO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVM7Z0JBQUUsTUFBTTtZQUUxQixJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3JCLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdCO2lCQUFNO2dCQUNMLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDN0M7U0FDRjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxZQUFZLENBQUMsR0FBVyxFQUFFLFlBQXFCLEtBQUs7UUFDbEQsTUFBTSxHQUFHLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQWMsQ0FBQztRQUV0RCxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU8sR0FBRyxDQUFDO1FBRXRCLEdBQUc7WUFDRCxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdkIsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFRLENBQUM7U0FDdEIsUUFBUSxJQUFJLEVBQUU7UUFFZixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRDs7T0FFRztJQUNILE9BQU8sQ0FBQyxHQUFXO1FBQ2pCLElBQUksR0FBRyxHQUFnQixJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQzNCLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRTtnQkFDbkMsR0FBRyxHQUFHLElBQUksQ0FBQzthQUNaO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRDs7T0FFRztJQUNILE9BQU8sQ0FBQyxHQUFrQixFQUFFLEtBQVcsRUFBRSxPQUE0QjtRQUNuRSxNQUFNLElBQUksR0FBRyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUMvRCxJQUFJLElBQUksSUFBSSxJQUFJO1lBQUUsT0FBTztRQUV6QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVuQixJQUFJLE9BQU8sRUFBRSxJQUFJLEtBQUssS0FBSztZQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJLENBQUMsU0FBK0IsRUFBRSxPQUE0QjtRQUNoRSxJQUFJLElBQUksR0FBRyxPQUFPLFNBQVMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3JGLElBQUksSUFBSSxJQUFJLElBQUk7WUFBRSxPQUFPO1FBRXpCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQVksRUFBRSxFQUFFO1lBQ3RDLENBQUMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWTtnQkFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztRQUVILEdBQUc7WUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNyQixRQUFRLElBQUksRUFBRTtRQUNmLElBQUksT0FBTyxFQUFFLElBQUksS0FBSyxLQUFLO1lBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxPQUFPLENBQUMsTUFBZ0I7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsVUFBVSxDQUFDLFNBQStCLEVBQUUsT0FBaUQ7UUFDM0YsSUFBSSxJQUFJLEdBQUcsT0FBTyxTQUFTLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNyRixJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBWSxFQUFFLEVBQUU7Z0JBQ3RDLENBQUMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUNwQixDQUFDLENBQUMsSUFBSSxHQUFHLE9BQU8sRUFBRSxTQUFTLEtBQUssSUFBSSxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFZLEVBQUUsRUFBRTtvQkFDdEMsSUFBSSxDQUFDLEtBQUssSUFBSTt3QkFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztnQkFDakMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDekIsT0FBTyxLQUFLLEVBQUU7b0JBQ1osS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2xCLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO2lCQUN2QjthQUNGO1lBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDeEI7UUFDRCxJQUFJLE9BQU8sRUFBRSxJQUFJLEtBQUssS0FBSztZQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQixDQUFDOytHQWxWVSxXQUFXLGtCQVdaLGdCQUFnQjttSEFYZixXQUFXLGNBREUsTUFBTTs7NEZBQ25CLFdBQVc7a0JBRHZCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzswQkFXN0IsUUFBUTs7MEJBQ1IsTUFBTTsyQkFBQyxnQkFBZ0I7OzBCQUV2QixRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPbkRlc3Ryb3ksIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgc2hhcmUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQUNMU2VydmljZSB9IGZyb20gJ0BkZWxvbi9hY2wnO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBNZW51LCBNZW51SWNvbiwgTWVudUlubmVyIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQWxhaW5JMThOU2VydmljZSwgQUxBSU5fSTE4Tl9UT0tFTiB9IGZyb20gJy4uL2kxOG4vaTE4bic7XG5cbi8qKlxuICog6I+c5Y2V5pyN5Yqh77yMW+WcqOe6v+aWh+aho10oaHR0cHM6Ly9uZy1hbGFpbi5jb20vdGhlbWUvbWVudSlcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBNZW51U2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX2NoYW5nZSQ6IEJlaGF2aW9yU3ViamVjdDxNZW51W10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxNZW51W10+KFtdKTtcbiAgcHJpdmF0ZSBpMThuJDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGRhdGE6IE1lbnVbXSA9IFtdO1xuICAvKipcbiAgICog5piv5ZCm5a6M5YWo5Y+X5o6n6I+c5Y2V5omT5byA54q25oCB77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgb3BlblN0cmljdGx5ID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pXG4gICAgcHJpdmF0ZSBpMThuU3J2OiBBbGFpbkkxOE5TZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgYWNsU2VydmljZTogQUNMU2VydmljZVxuICApIHtcbiAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuU3J2LmNoYW5nZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZXN1bWUoKSk7XG4gIH1cblxuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8TWVudVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYW5nZSQucGlwZShzaGFyZSgpKTtcbiAgfVxuXG4gIGdldCBtZW51cygpOiBNZW51W10ge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cblxuICB2aXNpdDxUIGV4dGVuZHMgTWVudSA9IE1lbnU+KGRhdGE6IFRbXSwgY2FsbGJhY2s6IChpdGVtOiBULCBwYXJlbnRNZW51bTogVCB8IG51bGwsIGRlcHRoPzogbnVtYmVyKSA9PiB2b2lkKTogdm9pZDtcbiAgdmlzaXQoZGF0YTogTWVudVtdLCBjYWxsYmFjazogKGl0ZW06IE1lbnUsIHBhcmVudE1lbnVtOiBNZW51IHwgbnVsbCwgZGVwdGg/OiBudW1iZXIpID0+IHZvaWQpOiB2b2lkO1xuICB2aXNpdChkYXRhOiBNZW51W10sIGNhbGxiYWNrOiAoaXRlbTogTWVudSwgcGFyZW50TWVudW06IE1lbnUgfCBudWxsLCBkZXB0aD86IG51bWJlcikgPT4gdm9pZCk6IHZvaWQge1xuICAgIGNvbnN0IGluRm4gPSAobGlzdDogTWVudVtdLCBwYXJlbnRNZW51OiBNZW51IHwgbnVsbCwgZGVwdGg6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGxpc3QpIHtcbiAgICAgICAgY2FsbGJhY2soaXRlbSwgcGFyZW50TWVudSwgZGVwdGgpO1xuICAgICAgICBpZiAoaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpbkZuKGl0ZW0uY2hpbGRyZW4sIGl0ZW0sIGRlcHRoICsgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbS5jaGlsZHJlbiA9IFtdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGluRm4oZGF0YSwgbnVsbCwgMCk7XG4gIH1cblxuICBhZGQoaXRlbXM6IE1lbnVbXSk6IHZvaWQge1xuICAgIHRoaXMuZGF0YSA9IGl0ZW1zO1xuICAgIHRoaXMucmVzdW1lKCk7XG4gIH1cblxuICBwcml2YXRlIGZpeEl0ZW0oaXRlbTogTWVudUlubmVyKTogdm9pZCB7XG4gICAgaXRlbS5fYWNsUmVzdWx0ID0gdHJ1ZTtcblxuICAgIGlmICghaXRlbS5saW5rKSBpdGVtLmxpbmsgPSAnJztcbiAgICBpZiAoIWl0ZW0uZXh0ZXJuYWxMaW5rKSBpdGVtLmV4dGVybmFsTGluayA9ICcnO1xuXG4gICAgLy8gYmFkZ2VcbiAgICBpZiAoaXRlbS5iYWRnZSkge1xuICAgICAgaWYgKGl0ZW0uYmFkZ2VEb3QgIT09IHRydWUpIHtcbiAgICAgICAgaXRlbS5iYWRnZURvdCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKCFpdGVtLmJhZGdlU3RhdHVzKSB7XG4gICAgICAgIGl0ZW0uYmFkZ2VTdGF0dXMgPSAnZXJyb3InO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtLmNoaWxkcmVuKSkge1xuICAgICAgaXRlbS5jaGlsZHJlbiA9IFtdO1xuICAgIH1cblxuICAgIC8vIGljb25cbiAgICBpZiAodHlwZW9mIGl0ZW0uaWNvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGxldCB0eXBlID0gJ2NsYXNzJztcbiAgICAgIGxldCB2YWx1ZSA9IGl0ZW0uaWNvbjtcbiAgICAgIC8vIGNvbXBhdGlibGUgYGFudGljb24gYW50aWNvbi11c2VyYFxuICAgICAgaWYgKH5pdGVtLmljb24uaW5kZXhPZihgYW50aWNvbi1gKSkge1xuICAgICAgICB0eXBlID0gJ2ljb24nO1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCctJykuc2xpY2UoMSkuam9pbignLScpO1xuICAgICAgfSBlbHNlIGlmICgvXmh0dHBzPzpcXC9cXC8vLnRlc3QoaXRlbS5pY29uKSkge1xuICAgICAgICB0eXBlID0gJ2ltZyc7XG4gICAgICB9XG4gICAgICBpdGVtLmljb24gPSB7IHR5cGUsIHZhbHVlIH0gYXMgTnpTYWZlQW55O1xuICAgIH1cbiAgICBpZiAoaXRlbS5pY29uICE9IG51bGwpIHtcbiAgICAgIGl0ZW0uaWNvbiA9IHsgdGhlbWU6ICdvdXRsaW5lJywgc3BpbjogZmFsc2UsIC4uLihpdGVtLmljb24gYXMgTWVudUljb24pIH07XG4gICAgfVxuXG4gICAgaXRlbS50ZXh0ID0gaXRlbS5pMThuICYmIHRoaXMuaTE4blNydiA/IHRoaXMuaTE4blNydi5mYW55aShpdGVtLmkxOG4pIDogaXRlbS50ZXh0O1xuXG4gICAgLy8gZ3JvdXBcbiAgICBpdGVtLmdyb3VwID0gaXRlbS5ncm91cCAhPT0gZmFsc2U7XG5cbiAgICAvLyBoaWRkZW5cbiAgICBpdGVtLl9oaWRkZW4gPSB0eXBlb2YgaXRlbS5oaWRlID09PSAndW5kZWZpbmVkJyA/IGZhbHNlIDogaXRlbS5oaWRlO1xuXG4gICAgLy8gZGlzYWJsZWRcbiAgICBpdGVtLmRpc2FibGVkID0gdHlwZW9mIGl0ZW0uZGlzYWJsZWQgPT09ICd1bmRlZmluZWQnID8gZmFsc2UgOiBpdGVtLmRpc2FibGVkO1xuXG4gICAgLy8gYWNsXG4gICAgaXRlbS5fYWNsUmVzdWx0ID0gaXRlbS5hY2wgJiYgdGhpcy5hY2xTZXJ2aWNlID8gdGhpcy5hY2xTZXJ2aWNlLmNhbihpdGVtLmFjbCkgOiB0cnVlO1xuXG4gICAgaXRlbS5vcGVuID0gaXRlbS5vcGVuICE9IG51bGwgPyBpdGVtLm9wZW4gOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDph43nva7oj5zljZXvvIzlj6/og71JMThO44CB55So5oi35p2D6ZmQ5Y+Y5Yqo5pe26ZyA6KaB6LCD55So5Yi35pawXG4gICAqL1xuICByZXN1bWU8VCBleHRlbmRzIE1lbnUgPSBNZW51PihjYWxsYmFjaz86IChpdGVtOiBULCBwYXJlbnRNZW51bTogVCB8IG51bGwsIGRlcHRoPzogbnVtYmVyKSA9PiB2b2lkKTogdm9pZDtcbiAgcmVzdW1lKGNhbGxiYWNrPzogKGl0ZW06IE1lbnUsIHBhcmVudE1lbnVtOiBNZW51IHwgbnVsbCwgZGVwdGg/OiBudW1iZXIpID0+IHZvaWQpOiB2b2lkO1xuICByZXN1bWUoY2FsbGJhY2s/OiAoaXRlbTogTWVudSwgcGFyZW50TWVudW06IE1lbnUgfCBudWxsLCBkZXB0aD86IG51bWJlcikgPT4gdm9pZCk6IHZvaWQge1xuICAgIGxldCBpID0gMTtcbiAgICBjb25zdCBzaG9ydGN1dHM6IE1lbnVbXSA9IFtdO1xuICAgIHRoaXMudmlzaXQodGhpcy5kYXRhLCAoaXRlbTogTWVudUlubmVyLCBwYXJlbnQsIGRlcHRoKSA9PiB7XG4gICAgICBpdGVtLl9pZCA9IGkrKztcbiAgICAgIGl0ZW0uX3BhcmVudCA9IHBhcmVudDtcbiAgICAgIGl0ZW0uX2RlcHRoID0gZGVwdGg7XG4gICAgICB0aGlzLmZpeEl0ZW0oaXRlbSk7XG5cbiAgICAgIC8vIHNob3J0Y3V0XG4gICAgICBpZiAocGFyZW50ICYmIGl0ZW0uc2hvcnRjdXQgPT09IHRydWUgJiYgcGFyZW50LnNob3J0Y3V0Um9vdCAhPT0gdHJ1ZSkge1xuICAgICAgICBzaG9ydGN1dHMucHVzaChpdGVtKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhpdGVtLCBwYXJlbnQsIGRlcHRoKTtcbiAgICB9KTtcblxuICAgIHRoaXMubG9hZFNob3J0Y3V0KHNob3J0Y3V0cyk7XG4gICAgdGhpcy5fY2hhbmdlJC5uZXh0KHRoaXMuZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICog5Yqg6L295b+r5o236I+c5Y2V77yM5Yqg6L295L2N572u6KeE5YiZ5aaC5LiL77yaXG4gICAqIDHjgIHnu5/kuIDlnKjkuIvmoIcw55qE6IqC54K55LiL77yI5Y2z44CQ5Li75a+86Iiq44CR6IqC54K55LiL5pa577yJXG4gICAqICAgICAgMeOAgeiLpSBjaGlsZHJlbiDlrZjlnKgg44CQc2hvcnRjdXRSb290OiB0cnVl44CR5YiZ5pyA5LyY5YWI44CQ5o6o6I2Q44CR6L+Z56eN5pa55byPXG4gICAqICAgICAgMuOAgeWQpuWImeafpeaJvuW4puacieOAkGRhc2hib2FyZOOAkeWtl+agt+mTvuaOpe+8jOiLpeWtmOWcqOWImeWcqOatpOiPnOWNleeahOS4i+aWueWIm+W7uuW/q+aNt+WFpeWPo1xuICAgKiAgICAgIDPjgIHlkKbliJnmlL7lnKgw6IqC54K55L2N572uXG4gICAqL1xuICBwcml2YXRlIGxvYWRTaG9ydGN1dChzaG9ydGN1dHM6IE1lbnVJbm5lcltdKTogdm9pZCB7XG4gICAgaWYgKHNob3J0Y3V0cy5sZW5ndGggPT09IDAgfHwgdGhpcy5kYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGxzID0gdGhpcy5kYXRhWzBdLmNoaWxkcmVuIGFzIE1lbnVJbm5lcltdO1xuICAgIGxldCBwb3MgPSBscy5maW5kSW5kZXgodyA9PiB3LnNob3J0Y3V0Um9vdCA9PT0gdHJ1ZSk7XG4gICAgaWYgKHBvcyA9PT0gLTEpIHtcbiAgICAgIHBvcyA9IGxzLmZpbmRJbmRleCh3ID0+IHcubGluayEuaW5jbHVkZXMoJ2Rhc2hib2FyZCcpKTtcbiAgICAgIHBvcyA9IChwb3MgIT09IC0xID8gcG9zIDogLTEpICsgMTtcbiAgICAgIGNvbnN0IHNob3J0Y3V0TWVudSA9IHtcbiAgICAgICAgdGV4dDogJ+W/q+aNt+iPnOWNlScsXG4gICAgICAgIGkxOG46ICdzaG9ydGN1dCcsXG4gICAgICAgIGljb246ICdpY29uLXJvY2tldCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgfSBhcyBNZW51SW5uZXI7XG4gICAgICB0aGlzLmRhdGFbMF0uY2hpbGRyZW4hLnNwbGljZShwb3MsIDAsIHNob3J0Y3V0TWVudSk7XG4gICAgfVxuICAgIGxldCBfZGF0YSA9IHRoaXMuZGF0YVswXS5jaGlsZHJlbiFbcG9zXTtcbiAgICBpZiAoX2RhdGEuaTE4biAmJiB0aGlzLmkxOG5TcnYpIF9kYXRhLnRleHQgPSB0aGlzLmkxOG5TcnYuZmFueWkoX2RhdGEuaTE4bik7XG4gICAgX2RhdGEgPSBPYmplY3QuYXNzaWduKF9kYXRhLCB7XG4gICAgICBzaG9ydGN1dFJvb3Q6IHRydWUsXG4gICAgICBfaWQ6IC0xLFxuICAgICAgX3BhcmVudDogbnVsbCxcbiAgICAgIF9kZXB0aDogMVxuICAgIH0gYXMgTWVudUlubmVyKTtcbiAgICBfZGF0YS5jaGlsZHJlbiA9IHNob3J0Y3V0cy5tYXAoaSA9PiB7XG4gICAgICBpLl9kZXB0aCA9IDI7XG4gICAgICBpLl9wYXJlbnQgPSBfZGF0YTtcbiAgICAgIHJldHVybiBpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOa4heepuuiPnOWNlVxuICAgKi9cbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy5fY2hhbmdlJC5uZXh0KHRoaXMuZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogVXNlIGB1cmxgIG9yIGBrZXlgIHRvIGZpbmQgbWVudXNcbiAgICpcbiAgICog5Yip55SoIGB1cmxgIOaIliBga2V5YCDmn6Xmib7oj5zljZVcbiAgICovXG4gIGZpbmQob3B0aW9uczoge1xuICAgIGtleT86IHN0cmluZyB8IG51bGw7XG4gICAgdXJsPzogc3RyaW5nIHwgbnVsbDtcbiAgICByZWN1cnNpdmU/OiBib29sZWFuIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBXaGVuIHRoZSBjYWxsYmFjayByZXR1cm5zIGEgQm9vbGVhbiB0eXBlLCBpdCBtZWFucyB0aGUgY3VzdG9tIHZhbGlkYXRpb24gcmVzdWx0XG4gICAgICpcbiAgICAgKiDlvZPlm57osIPov5Tlm57kuIDkuKrluIPlsJTnsbvlnovml7bvvIzooajnpLroh6rlrprkuYnmoKHpqoznu5PmnpxcbiAgICAgKi9cbiAgICBjYj86ICgoaTogTWVudSkgPT4gYm9vbGVhbiB8IG51bGwpIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBVc2UgdGhlIGN1cnJlbnQgbWVudSBkYXRhIGJ5IGRlZmF1bHRcbiAgICAgKlxuICAgICAqIOm7mOiupOS9v+eUqOW9k+WJjeiPnOWNleaVsOaNrlxuICAgICAqL1xuICAgIGRhdGE/OiBNZW51W10gfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdG8gaWdub3JlIGhpZGUgaXRlbXMsIGRlZmF1bHQ6IGBmYWxzZWBcbiAgICAgKlxuICAgICAqIOaYr+WQpuW/veeVpemakOiXj+eahOmhue+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICAgKi9cbiAgICBpZ25vcmVIaWRlPzogYm9vbGVhbjtcbiAgfSk6IE1lbnUgfCBudWxsIHtcbiAgICBjb25zdCBvcHQgPSB7IHJlY3Vyc2l2ZTogZmFsc2UsIGlnbm9yZUhpZGU6IGZhbHNlLCAuLi5vcHRpb25zIH07XG4gICAgaWYgKG9wdC5rZXkgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0SXRlbShvcHQua2V5KTtcbiAgICB9XG5cbiAgICBsZXQgdXJsID0gb3B0LnVybDtcblxuICAgIGxldCBpdGVtOiBNZW51IHwgbnVsbCA9IG51bGw7XG5cbiAgICB3aGlsZSAoIWl0ZW0gJiYgdXJsKSB7XG4gICAgICB0aGlzLnZpc2l0KG9wdC5kYXRhID8/IHRoaXMuZGF0YSwgaSA9PiB7XG4gICAgICAgIGlmIChvcHQuaWdub3JlSGlkZSAmJiBpLmhpZGUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdC5jYikge1xuICAgICAgICAgIGNvbnN0IHJlcyA9IG9wdC5jYihpKTtcbiAgICAgICAgICBpZiAoIWl0ZW0gJiYgdHlwZW9mIHJlcyA9PT0gJ2Jvb2xlYW4nICYmIHJlcykge1xuICAgICAgICAgICAgaXRlbSA9IGk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpLmxpbmsgIT0gbnVsbCAmJiBpLmxpbmsgPT09IHVybCkge1xuICAgICAgICAgIGl0ZW0gPSBpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKCFvcHQucmVjdXJzaXZlKSBicmVhaztcblxuICAgICAgaWYgKC9bPztdL2cudGVzdCh1cmwpKSB7XG4gICAgICAgIHVybCA9IHVybC5zcGxpdCgvWz87XS9nKVswXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVybCA9IHVybC5zcGxpdCgnLycpLnNsaWNlKDAsIC0xKS5qb2luKCcvJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICAvKipcbiAgICog5qC55o2udXJs6I635Y+W6I+c5Y2V5YiX6KGoXG4gICAqIC0g6IulIGByZWN1cnNpdmU6IHRydWVgIOWImeS8muiHquWKqOWQkeS4iumAkuW9kuafpeaJvlxuICAgKiAgLSDoj5zljZXmlbDmja7mupDljIXlkKsgYC93YXJlYO+8jOWImSBgL3dhcmUvMWAg5Lmf6KeG5Li6IGAvd2FyZWAg6aG5XG4gICAqL1xuICBnZXRQYXRoQnlVcmwodXJsOiBzdHJpbmcsIHJlY3Vyc2l2ZTogYm9vbGVhbiA9IGZhbHNlKTogTWVudVtdIHtcbiAgICBjb25zdCByZXQ6IE1lbnVbXSA9IFtdO1xuICAgIGxldCBpdGVtID0gdGhpcy5maW5kKHsgdXJsLCByZWN1cnNpdmUgfSkgYXMgTWVudUlubmVyO1xuXG4gICAgaWYgKCFpdGVtKSByZXR1cm4gcmV0O1xuXG4gICAgZG8ge1xuICAgICAgcmV0LnNwbGljZSgwLCAwLCBpdGVtKTtcbiAgICAgIGl0ZW0gPSBpdGVtLl9wYXJlbnQhO1xuICAgIH0gd2hpbGUgKGl0ZW0pO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbWVudSBiYXNlZCBvbiBga2V5YFxuICAgKi9cbiAgZ2V0SXRlbShrZXk6IHN0cmluZyk6IE1lbnUgfCBudWxsIHtcbiAgICBsZXQgcmVzOiBNZW51IHwgbnVsbCA9IG51bGw7XG4gICAgdGhpcy52aXNpdCh0aGlzLmRhdGEsIGl0ZW0gPT4ge1xuICAgICAgaWYgKHJlcyA9PSBudWxsICYmIGl0ZW0ua2V5ID09PSBrZXkpIHtcbiAgICAgICAgcmVzID0gaXRlbTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBtZW51IGJhc2VkIG9uIGBrZXlgXG4gICAqL1xuICBzZXRJdGVtKGtleTogc3RyaW5nIHwgTWVudSwgdmFsdWU6IE1lbnUsIG9wdGlvbnM/OiB7IGVtaXQ/OiBib29sZWFuIH0pOiB2b2lkIHtcbiAgICBjb25zdCBpdGVtID0gdHlwZW9mIGtleSA9PT0gJ3N0cmluZycgPyB0aGlzLmdldEl0ZW0oa2V5KSA6IGtleTtcbiAgICBpZiAoaXRlbSA9PSBudWxsKSByZXR1cm47XG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaChrID0+IHtcbiAgICAgIGl0ZW1ba10gPSB2YWx1ZVtrXTtcbiAgICB9KTtcbiAgICB0aGlzLmZpeEl0ZW0oaXRlbSk7XG5cbiAgICBpZiAob3B0aW9ucz8uZW1pdCAhPT0gZmFsc2UpIHRoaXMuX2NoYW5nZSQubmV4dCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW4gbWVudSBiYXNlZCBvbiBga2V5YCBvciBtZW51IG9iamVjdFxuICAgKi9cbiAgb3BlbihrZXlPckl0ZW06IHN0cmluZyB8IE1lbnUgfCBudWxsLCBvcHRpb25zPzogeyBlbWl0PzogYm9vbGVhbiB9KTogdm9pZCB7XG4gICAgbGV0IGl0ZW0gPSB0eXBlb2Yga2V5T3JJdGVtID09PSAnc3RyaW5nJyA/IHRoaXMuZmluZCh7IGtleToga2V5T3JJdGVtIH0pIDoga2V5T3JJdGVtO1xuICAgIGlmIChpdGVtID09IG51bGwpIHJldHVybjtcblxuICAgIHRoaXMudmlzaXQodGhpcy5tZW51cywgKGk6IE1lbnVJbm5lcikgPT4ge1xuICAgICAgaS5fc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIGlmICghdGhpcy5vcGVuU3RyaWN0bHkpIGkub3BlbiA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgZG8ge1xuICAgICAgaXRlbS5fc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgaXRlbS5vcGVuID0gdHJ1ZTtcbiAgICAgIGl0ZW0gPSBpdGVtLl9wYXJlbnQ7XG4gICAgfSB3aGlsZSAoaXRlbSk7XG4gICAgaWYgKG9wdGlvbnM/LmVtaXQgIT09IGZhbHNlKSB0aGlzLl9jaGFuZ2UkLm5leHQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIG9wZW5BbGwoc3RhdHVzPzogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMudG9nZ2xlT3BlbihudWxsLCB7IGFsbFN0YXR1czogc3RhdHVzIH0pO1xuICB9XG5cbiAgdG9nZ2xlT3BlbihrZXlPckl0ZW06IHN0cmluZyB8IE1lbnUgfCBudWxsLCBvcHRpb25zPzogeyBhbGxTdGF0dXM/OiBib29sZWFuOyBlbWl0PzogYm9vbGVhbiB9KTogdm9pZCB7XG4gICAgbGV0IGl0ZW0gPSB0eXBlb2Yga2V5T3JJdGVtID09PSAnc3RyaW5nJyA/IHRoaXMuZmluZCh7IGtleToga2V5T3JJdGVtIH0pIDoga2V5T3JJdGVtO1xuICAgIGlmIChpdGVtID09IG51bGwpIHtcbiAgICAgIHRoaXMudmlzaXQodGhpcy5tZW51cywgKGk6IE1lbnVJbm5lcikgPT4ge1xuICAgICAgICBpLl9zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICBpLm9wZW4gPSBvcHRpb25zPy5hbGxTdGF0dXMgPT09IHRydWU7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF0aGlzLm9wZW5TdHJpY3RseSkge1xuICAgICAgICB0aGlzLnZpc2l0KHRoaXMubWVudXMsIChpOiBNZW51SW5uZXIpID0+IHtcbiAgICAgICAgICBpZiAoaSAhPT0gaXRlbSkgaS5vcGVuID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgcEl0ZW0gPSBpdGVtLl9wYXJlbnQ7XG4gICAgICAgIHdoaWxlIChwSXRlbSkge1xuICAgICAgICAgIHBJdGVtLm9wZW4gPSB0cnVlO1xuICAgICAgICAgIHBJdGVtID0gcEl0ZW0uX3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaXRlbS5vcGVuID0gIWl0ZW0ub3BlbjtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnM/LmVtaXQgIT09IGZhbHNlKSB0aGlzLl9jaGFuZ2UkLm5leHQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2NoYW5nZSQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==