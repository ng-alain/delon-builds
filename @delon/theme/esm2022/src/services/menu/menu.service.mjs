import { Inject, Injectable, Optional } from '@angular/core';
import { BehaviorSubject, share } from 'rxjs';
import { ALAIN_I18N_TOKEN } from '../i18n/i18n';
import * as i0 from "@angular/core";
import * as i1 from "@delon/acl";
/**
 * 菜单服务，[在线文档](https://ng-alain.com/theme/menu)
 */
class MenuService {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: MenuService, deps: [{ token: ALAIN_I18N_TOKEN, optional: true }, { token: i1.ACLService, optional: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: MenuService, providedIn: 'root' }); }
}
export { MenuService };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: MenuService, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvc3JjL3NlcnZpY2VzL21lbnUvbWVudS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFhLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUE0QixLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFLeEUsT0FBTyxFQUFvQixnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7O0FBR2xFOztHQUVHO0FBQ0gsTUFDYSxXQUFXO0lBU3RCLFlBR1UsT0FBeUIsRUFDYixVQUFzQjtRQURsQyxZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUNiLGVBQVUsR0FBVixVQUFVLENBQVk7UUFacEMsYUFBUSxHQUE0QixJQUFJLGVBQWUsQ0FBUyxFQUFFLENBQUMsQ0FBQztRQUVwRSxTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQzFCOztXQUVHO1FBQ0gsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFRbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFJRCxLQUFLLENBQUMsSUFBWSxFQUFFLFFBQXdFO1FBQzFGLE1BQU0sSUFBSSxHQUFHLENBQUMsSUFBWSxFQUFFLFVBQXVCLEVBQUUsS0FBYSxFQUFRLEVBQUU7WUFDMUUsS0FBSyxNQUFNLElBQUksSUFBSSxJQUFJLEVBQUU7Z0JBQ3ZCLFFBQVEsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNsQyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUN0QztxQkFBTTtvQkFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztpQkFDcEI7YUFDRjtRQUNILENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxHQUFHLENBQUMsS0FBYTtRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRU8sT0FBTyxDQUFDLElBQWU7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZO1lBQUUsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFFL0MsUUFBUTtRQUNSLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2FBQ3ZCO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO2FBQzVCO1NBQ0Y7UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7U0FDcEI7UUFFRCxPQUFPO1FBQ1AsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ2pDLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQztZQUNuQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3RCLG9DQUFvQztZQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ2xDLElBQUksR0FBRyxNQUFNLENBQUM7Z0JBQ2QsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUM3QztpQkFBTSxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN6QyxJQUFJLEdBQUcsS0FBSyxDQUFDO2FBQ2Q7WUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBZSxDQUFDO1NBQzFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTtZQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUksSUFBSSxDQUFDLElBQWlCLEVBQUUsQ0FBQztTQUMzRTtRQUVELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFbEYsUUFBUTtRQUNSLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUM7UUFFbEMsU0FBUztRQUNULElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXBFLFdBQVc7UUFDWCxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUU3RSxNQUFNO1FBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBRXJGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNwRCxDQUFDO0lBT0QsTUFBTSxDQUFDLFFBQXlFO1FBQzlFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLE1BQU0sU0FBUyxHQUFXLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFlLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3ZELElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRW5CLFdBQVc7WUFDWCxJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksSUFBSSxNQUFNLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRTtnQkFDcEUsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN0QjtZQUVELElBQUksUUFBUTtnQkFBRSxRQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSyxZQUFZLENBQUMsU0FBc0I7UUFDekMsSUFBSSxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDcEQsT0FBTztTQUNSO1FBRUQsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUF1QixDQUFDO1FBQ2hELElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQyxDQUFDO1FBQ3JELElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2QsR0FBRyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELEdBQUcsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQyxNQUFNLFlBQVksR0FBRztnQkFDbkIsSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLElBQUksRUFBRSxhQUFhO2dCQUNuQixRQUFRLEVBQUUsRUFBRTthQUNBLENBQUM7WUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQztTQUNyRDtRQUNELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVFLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUMzQixZQUFZLEVBQUUsSUFBSTtZQUNsQixHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ1AsT0FBTyxFQUFFLElBQUk7WUFDYixNQUFNLEVBQUUsQ0FBQztTQUNHLENBQUMsQ0FBQztRQUNoQixLQUFLLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDakMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDYixDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNsQixPQUFPLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsS0FBSztRQUNILElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBSSxDQUFDLE9Bc0JKO1FBQ0MsTUFBTSxHQUFHLEdBQUcsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsR0FBRyxPQUFPLEVBQUUsQ0FBQztRQUNoRSxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ25CLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDOUI7UUFFRCxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBRWxCLElBQUksSUFBSSxHQUFnQixJQUFJLENBQUM7UUFFN0IsT0FBTyxDQUFDLElBQUksSUFBSSxHQUFHLEVBQUU7WUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3BDLElBQUksR0FBRyxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFO29CQUM1QixPQUFPO2lCQUNSO2dCQUNELElBQUksR0FBRyxDQUFDLEVBQUUsRUFBRTtvQkFDVixNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN0QixJQUFJLENBQUMsSUFBSSxJQUFJLE9BQU8sR0FBRyxLQUFLLFNBQVMsSUFBSSxHQUFHLEVBQUU7d0JBQzVDLElBQUksR0FBRyxDQUFDLENBQUM7cUJBQ1Y7aUJBQ0Y7Z0JBQ0QsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRTtvQkFDcEMsSUFBSSxHQUFHLENBQUMsQ0FBQztpQkFDVjtZQUNILENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTO2dCQUFFLE1BQU07WUFFMUIsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNyQixHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QjtpQkFBTTtnQkFDTCxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzdDO1NBQ0Y7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsWUFBWSxDQUFDLEdBQVcsRUFBRSxZQUFxQixLQUFLO1FBQ2xELE1BQU0sR0FBRyxHQUFXLEVBQUUsQ0FBQztRQUN2QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFjLENBQUM7UUFFdEQsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPLEdBQUcsQ0FBQztRQUV0QixHQUFHO1lBQ0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3ZCLElBQUksR0FBRyxJQUFJLENBQUMsT0FBUSxDQUFDO1NBQ3RCLFFBQVEsSUFBSSxFQUFFO1FBRWYsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQ7O09BRUc7SUFDSCxPQUFPLENBQUMsR0FBVztRQUNqQixJQUFJLEdBQUcsR0FBZ0IsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRTtZQUMzQixJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUU7Z0JBQ25DLEdBQUcsR0FBRyxJQUFJLENBQUM7YUFDWjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQ7O09BRUc7SUFDSCxPQUFPLENBQUMsR0FBa0IsRUFBRSxLQUFXLEVBQUUsT0FBNEI7UUFDbkUsTUFBTSxJQUFJLEdBQUcsT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDL0QsSUFBSSxJQUFJLElBQUksSUFBSTtZQUFFLE9BQU87UUFFekIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbkIsSUFBSSxPQUFPLEVBQUUsSUFBSSxLQUFLLEtBQUs7WUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSSxDQUFDLFNBQStCLEVBQUUsT0FBNEI7UUFDaEUsSUFBSSxJQUFJLEdBQUcsT0FBTyxTQUFTLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNyRixJQUFJLElBQUksSUFBSSxJQUFJO1lBQUUsT0FBTztRQUV6QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFZLEVBQUUsRUFBRTtZQUN0QyxDQUFDLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVk7Z0JBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7UUFFSCxHQUFHO1lBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDckIsUUFBUSxJQUFJLEVBQUU7UUFDZixJQUFJLE9BQU8sRUFBRSxJQUFJLEtBQUssS0FBSztZQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsT0FBTyxDQUFDLE1BQWdCO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELFVBQVUsQ0FBQyxTQUErQixFQUFFLE9BQWlEO1FBQzNGLElBQUksSUFBSSxHQUFHLE9BQU8sU0FBUyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDckYsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQVksRUFBRSxFQUFFO2dCQUN0QyxDQUFDLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDcEIsQ0FBQyxDQUFDLElBQUksR0FBRyxPQUFPLEVBQUUsU0FBUyxLQUFLLElBQUksQ0FBQztZQUN2QyxDQUFDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBWSxFQUFFLEVBQUU7b0JBQ3RDLElBQUksQ0FBQyxLQUFLLElBQUk7d0JBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7Z0JBQ2pDLENBQUMsQ0FBQyxDQUFDO2dCQUNILElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ3pCLE9BQU8sS0FBSyxFQUFFO29CQUNaLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNsQixLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztpQkFDdkI7YUFDRjtZQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxPQUFPLEVBQUUsSUFBSSxLQUFLLEtBQUs7WUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDM0IsQ0FBQzs4R0FsVlUsV0FBVyxrQkFXWixnQkFBZ0I7a0hBWGYsV0FBVyxjQURFLE1BQU07O1NBQ25CLFdBQVc7MkZBQVgsV0FBVztrQkFEdkIsVUFBVTttQkFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OzBCQVc3QixRQUFROzswQkFDUixNQUFNOzJCQUFDLGdCQUFnQjs7MEJBRXZCLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9uRGVzdHJveSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCBzaGFyZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBQ0xTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL2FjbCc7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IEFsYWluSTE4TlNlcnZpY2UsIEFMQUlOX0kxOE5fVE9LRU4gfSBmcm9tICcuLi9pMThuL2kxOG4nO1xuaW1wb3J0IHsgTWVudSwgTWVudUljb24sIE1lbnVJbm5lciB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuLyoqXG4gKiDoj5zljZXmnI3liqHvvIxb5Zyo57q/5paH5qGjXShodHRwczovL25nLWFsYWluLmNvbS90aGVtZS9tZW51KVxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE1lbnVTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfY2hhbmdlJDogQmVoYXZpb3JTdWJqZWN0PE1lbnVbXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE1lbnVbXT4oW10pO1xuICBwcml2YXRlIGkxOG4kOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgZGF0YTogTWVudVtdID0gW107XG4gIC8qKlxuICAgKiDmmK/lkKblrozlhajlj5fmjqfoj5zljZXmiZPlvIDnirbmgIHvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBvcGVuU3RyaWN0bHkgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTilcbiAgICBwcml2YXRlIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBhY2xTZXJ2aWNlOiBBQ0xTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuaTE4biQgPSB0aGlzLmkxOG5TcnYuY2hhbmdlLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlc3VtZSgpKTtcbiAgfVxuXG4gIGdldCBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxNZW51W10+IHtcbiAgICByZXR1cm4gdGhpcy5fY2hhbmdlJC5waXBlKHNoYXJlKCkpO1xuICB9XG5cbiAgZ2V0IG1lbnVzKCk6IE1lbnVbXSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuXG4gIHZpc2l0PFQgZXh0ZW5kcyBNZW51ID0gTWVudT4oZGF0YTogVFtdLCBjYWxsYmFjazogKGl0ZW06IFQsIHBhcmVudE1lbnVtOiBUIHwgbnVsbCwgZGVwdGg/OiBudW1iZXIpID0+IHZvaWQpOiB2b2lkO1xuICB2aXNpdChkYXRhOiBNZW51W10sIGNhbGxiYWNrOiAoaXRlbTogTWVudSwgcGFyZW50TWVudW06IE1lbnUgfCBudWxsLCBkZXB0aD86IG51bWJlcikgPT4gdm9pZCk6IHZvaWQ7XG4gIHZpc2l0KGRhdGE6IE1lbnVbXSwgY2FsbGJhY2s6IChpdGVtOiBNZW51LCBwYXJlbnRNZW51bTogTWVudSB8IG51bGwsIGRlcHRoPzogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgY29uc3QgaW5GbiA9IChsaXN0OiBNZW51W10sIHBhcmVudE1lbnU6IE1lbnUgfCBudWxsLCBkZXB0aDogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGlzdCkge1xuICAgICAgICBjYWxsYmFjayhpdGVtLCBwYXJlbnRNZW51LCBkZXB0aCk7XG4gICAgICAgIGlmIChpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGluRm4oaXRlbS5jaGlsZHJlbiwgaXRlbSwgZGVwdGggKyAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLmNoaWxkcmVuID0gW107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaW5GbihkYXRhLCBudWxsLCAwKTtcbiAgfVxuXG4gIGFkZChpdGVtczogTWVudVtdKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhID0gaXRlbXM7XG4gICAgdGhpcy5yZXN1bWUoKTtcbiAgfVxuXG4gIHByaXZhdGUgZml4SXRlbShpdGVtOiBNZW51SW5uZXIpOiB2b2lkIHtcbiAgICBpdGVtLl9hY2xSZXN1bHQgPSB0cnVlO1xuXG4gICAgaWYgKCFpdGVtLmxpbmspIGl0ZW0ubGluayA9ICcnO1xuICAgIGlmICghaXRlbS5leHRlcm5hbExpbmspIGl0ZW0uZXh0ZXJuYWxMaW5rID0gJyc7XG5cbiAgICAvLyBiYWRnZVxuICAgIGlmIChpdGVtLmJhZGdlKSB7XG4gICAgICBpZiAoaXRlbS5iYWRnZURvdCAhPT0gdHJ1ZSkge1xuICAgICAgICBpdGVtLmJhZGdlRG90ID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoIWl0ZW0uYmFkZ2VTdGF0dXMpIHtcbiAgICAgICAgaXRlbS5iYWRnZVN0YXR1cyA9ICdlcnJvcic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW0uY2hpbGRyZW4pKSB7XG4gICAgICBpdGVtLmNoaWxkcmVuID0gW107XG4gICAgfVxuXG4gICAgLy8gaWNvblxuICAgIGlmICh0eXBlb2YgaXRlbS5pY29uID09PSAnc3RyaW5nJykge1xuICAgICAgbGV0IHR5cGUgPSAnY2xhc3MnO1xuICAgICAgbGV0IHZhbHVlID0gaXRlbS5pY29uO1xuICAgICAgLy8gY29tcGF0aWJsZSBgYW50aWNvbiBhbnRpY29uLXVzZXJgXG4gICAgICBpZiAofml0ZW0uaWNvbi5pbmRleE9mKGBhbnRpY29uLWApKSB7XG4gICAgICAgIHR5cGUgPSAnaWNvbic7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJy0nKS5zbGljZSgxKS5qb2luKCctJyk7XG4gICAgICB9IGVsc2UgaWYgKC9eaHR0cHM/OlxcL1xcLy8udGVzdChpdGVtLmljb24pKSB7XG4gICAgICAgIHR5cGUgPSAnaW1nJztcbiAgICAgIH1cbiAgICAgIGl0ZW0uaWNvbiA9IHsgdHlwZSwgdmFsdWUgfSBhcyBOelNhZmVBbnk7XG4gICAgfVxuICAgIGlmIChpdGVtLmljb24gIT0gbnVsbCkge1xuICAgICAgaXRlbS5pY29uID0geyB0aGVtZTogJ291dGxpbmUnLCBzcGluOiBmYWxzZSwgLi4uKGl0ZW0uaWNvbiBhcyBNZW51SWNvbikgfTtcbiAgICB9XG5cbiAgICBpdGVtLnRleHQgPSBpdGVtLmkxOG4gJiYgdGhpcy5pMThuU3J2ID8gdGhpcy5pMThuU3J2LmZhbnlpKGl0ZW0uaTE4bikgOiBpdGVtLnRleHQ7XG5cbiAgICAvLyBncm91cFxuICAgIGl0ZW0uZ3JvdXAgPSBpdGVtLmdyb3VwICE9PSBmYWxzZTtcblxuICAgIC8vIGhpZGRlblxuICAgIGl0ZW0uX2hpZGRlbiA9IHR5cGVvZiBpdGVtLmhpZGUgPT09ICd1bmRlZmluZWQnID8gZmFsc2UgOiBpdGVtLmhpZGU7XG5cbiAgICAvLyBkaXNhYmxlZFxuICAgIGl0ZW0uZGlzYWJsZWQgPSB0eXBlb2YgaXRlbS5kaXNhYmxlZCA9PT0gJ3VuZGVmaW5lZCcgPyBmYWxzZSA6IGl0ZW0uZGlzYWJsZWQ7XG5cbiAgICAvLyBhY2xcbiAgICBpdGVtLl9hY2xSZXN1bHQgPSBpdGVtLmFjbCAmJiB0aGlzLmFjbFNlcnZpY2UgPyB0aGlzLmFjbFNlcnZpY2UuY2FuKGl0ZW0uYWNsKSA6IHRydWU7XG5cbiAgICBpdGVtLm9wZW4gPSBpdGVtLm9wZW4gIT0gbnVsbCA/IGl0ZW0ub3BlbiA6IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIOmHjee9ruiPnOWNle+8jOWPr+iDvUkxOE7jgIHnlKjmiLfmnYPpmZDlj5jliqjml7bpnIDopoHosIPnlKjliLfmlrBcbiAgICovXG4gIHJlc3VtZTxUIGV4dGVuZHMgTWVudSA9IE1lbnU+KGNhbGxiYWNrPzogKGl0ZW06IFQsIHBhcmVudE1lbnVtOiBUIHwgbnVsbCwgZGVwdGg/OiBudW1iZXIpID0+IHZvaWQpOiB2b2lkO1xuICByZXN1bWUoY2FsbGJhY2s/OiAoaXRlbTogTWVudSwgcGFyZW50TWVudW06IE1lbnUgfCBudWxsLCBkZXB0aD86IG51bWJlcikgPT4gdm9pZCk6IHZvaWQ7XG4gIHJlc3VtZShjYWxsYmFjaz86IChpdGVtOiBNZW51LCBwYXJlbnRNZW51bTogTWVudSB8IG51bGwsIGRlcHRoPzogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgbGV0IGkgPSAxO1xuICAgIGNvbnN0IHNob3J0Y3V0czogTWVudVtdID0gW107XG4gICAgdGhpcy52aXNpdCh0aGlzLmRhdGEsIChpdGVtOiBNZW51SW5uZXIsIHBhcmVudCwgZGVwdGgpID0+IHtcbiAgICAgIGl0ZW0uX2lkID0gaSsrO1xuICAgICAgaXRlbS5fcGFyZW50ID0gcGFyZW50O1xuICAgICAgaXRlbS5fZGVwdGggPSBkZXB0aDtcbiAgICAgIHRoaXMuZml4SXRlbShpdGVtKTtcblxuICAgICAgLy8gc2hvcnRjdXRcbiAgICAgIGlmIChwYXJlbnQgJiYgaXRlbS5zaG9ydGN1dCA9PT0gdHJ1ZSAmJiBwYXJlbnQuc2hvcnRjdXRSb290ICE9PSB0cnVlKSB7XG4gICAgICAgIHNob3J0Y3V0cy5wdXNoKGl0ZW0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGl0ZW0sIHBhcmVudCwgZGVwdGgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5sb2FkU2hvcnRjdXQoc2hvcnRjdXRzKTtcbiAgICB0aGlzLl9jaGFuZ2UkLm5leHQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDliqDovb3lv6vmjbfoj5zljZXvvIzliqDovb3kvY3nva7op4TliJnlpoLkuIvvvJpcbiAgICogMeOAgee7n+S4gOWcqOS4i+aghzDnmoToioLngrnkuIvvvIjljbPjgJDkuLvlr7zoiKrjgJHoioLngrnkuIvmlrnvvIlcbiAgICogICAgICAx44CB6IulIGNoaWxkcmVuIOWtmOWcqCDjgJBzaG9ydGN1dFJvb3Q6IHRydWXjgJHliJnmnIDkvJjlhYjjgJDmjqjojZDjgJHov5nnp43mlrnlvI9cbiAgICogICAgICAy44CB5ZCm5YiZ5p+l5om+5bim5pyJ44CQZGFzaGJvYXJk44CR5a2X5qC36ZO+5o6l77yM6Iul5a2Y5Zyo5YiZ5Zyo5q2k6I+c5Y2V55qE5LiL5pa55Yib5bu65b+r5o235YWl5Y+jXG4gICAqICAgICAgM+OAgeWQpuWImeaUvuWcqDDoioLngrnkvY3nva5cbiAgICovXG4gIHByaXZhdGUgbG9hZFNob3J0Y3V0KHNob3J0Y3V0czogTWVudUlubmVyW10pOiB2b2lkIHtcbiAgICBpZiAoc2hvcnRjdXRzLmxlbmd0aCA9PT0gMCB8fCB0aGlzLmRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbHMgPSB0aGlzLmRhdGFbMF0uY2hpbGRyZW4gYXMgTWVudUlubmVyW107XG4gICAgbGV0IHBvcyA9IGxzLmZpbmRJbmRleCh3ID0+IHcuc2hvcnRjdXRSb290ID09PSB0cnVlKTtcbiAgICBpZiAocG9zID09PSAtMSkge1xuICAgICAgcG9zID0gbHMuZmluZEluZGV4KHcgPT4gdy5saW5rIS5pbmNsdWRlcygnZGFzaGJvYXJkJykpO1xuICAgICAgcG9zID0gKHBvcyAhPT0gLTEgPyBwb3MgOiAtMSkgKyAxO1xuICAgICAgY29uc3Qgc2hvcnRjdXRNZW51ID0ge1xuICAgICAgICB0ZXh0OiAn5b+r5o236I+c5Y2VJyxcbiAgICAgICAgaTE4bjogJ3Nob3J0Y3V0JyxcbiAgICAgICAgaWNvbjogJ2ljb24tcm9ja2V0JyxcbiAgICAgICAgY2hpbGRyZW46IFtdXG4gICAgICB9IGFzIE1lbnVJbm5lcjtcbiAgICAgIHRoaXMuZGF0YVswXS5jaGlsZHJlbiEuc3BsaWNlKHBvcywgMCwgc2hvcnRjdXRNZW51KTtcbiAgICB9XG4gICAgbGV0IF9kYXRhID0gdGhpcy5kYXRhWzBdLmNoaWxkcmVuIVtwb3NdO1xuICAgIGlmIChfZGF0YS5pMThuICYmIHRoaXMuaTE4blNydikgX2RhdGEudGV4dCA9IHRoaXMuaTE4blNydi5mYW55aShfZGF0YS5pMThuKTtcbiAgICBfZGF0YSA9IE9iamVjdC5hc3NpZ24oX2RhdGEsIHtcbiAgICAgIHNob3J0Y3V0Um9vdDogdHJ1ZSxcbiAgICAgIF9pZDogLTEsXG4gICAgICBfcGFyZW50OiBudWxsLFxuICAgICAgX2RlcHRoOiAxXG4gICAgfSBhcyBNZW51SW5uZXIpO1xuICAgIF9kYXRhLmNoaWxkcmVuID0gc2hvcnRjdXRzLm1hcChpID0+IHtcbiAgICAgIGkuX2RlcHRoID0gMjtcbiAgICAgIGkuX3BhcmVudCA9IF9kYXRhO1xuICAgICAgcmV0dXJuIGk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog5riF56m66I+c5Y2VXG4gICAqL1xuICBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB0aGlzLl9jaGFuZ2UkLm5leHQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgYHVybGAgb3IgYGtleWAgdG8gZmluZCBtZW51c1xuICAgKlxuICAgKiDliKnnlKggYHVybGAg5oiWIGBrZXlgIOafpeaJvuiPnOWNlVxuICAgKi9cbiAgZmluZChvcHRpb25zOiB7XG4gICAga2V5Pzogc3RyaW5nIHwgbnVsbDtcbiAgICB1cmw/OiBzdHJpbmcgfCBudWxsO1xuICAgIHJlY3Vyc2l2ZT86IGJvb2xlYW4gfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFdoZW4gdGhlIGNhbGxiYWNrIHJldHVybnMgYSBCb29sZWFuIHR5cGUsIGl0IG1lYW5zIHRoZSBjdXN0b20gdmFsaWRhdGlvbiByZXN1bHRcbiAgICAgKlxuICAgICAqIOW9k+Wbnuiwg+i/lOWbnuS4gOS4quW4g+WwlOexu+Wei+aXtu+8jOihqOekuuiHquWumuS5ieagoemqjOe7k+aenFxuICAgICAqL1xuICAgIGNiPzogKChpOiBNZW51KSA9PiBib29sZWFuIHwgbnVsbCkgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFVzZSB0aGUgY3VycmVudCBtZW51IGRhdGEgYnkgZGVmYXVsdFxuICAgICAqXG4gICAgICog6buY6K6k5L2/55So5b2T5YmN6I+c5Y2V5pWw5o2uXG4gICAgICovXG4gICAgZGF0YT86IE1lbnVbXSB8IG51bGw7XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0byBpZ25vcmUgaGlkZSBpdGVtcywgZGVmYXVsdDogYGZhbHNlYFxuICAgICAqXG4gICAgICog5piv5ZCm5b+955Wl6ZqQ6JeP55qE6aG577yM6buY6K6k77yaYGZhbHNlYFxuICAgICAqL1xuICAgIGlnbm9yZUhpZGU/OiBib29sZWFuO1xuICB9KTogTWVudSB8IG51bGwge1xuICAgIGNvbnN0IG9wdCA9IHsgcmVjdXJzaXZlOiBmYWxzZSwgaWdub3JlSGlkZTogZmFsc2UsIC4uLm9wdGlvbnMgfTtcbiAgICBpZiAob3B0LmtleSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRJdGVtKG9wdC5rZXkpO1xuICAgIH1cblxuICAgIGxldCB1cmwgPSBvcHQudXJsO1xuXG4gICAgbGV0IGl0ZW06IE1lbnUgfCBudWxsID0gbnVsbDtcblxuICAgIHdoaWxlICghaXRlbSAmJiB1cmwpIHtcbiAgICAgIHRoaXMudmlzaXQob3B0LmRhdGEgPz8gdGhpcy5kYXRhLCBpID0+IHtcbiAgICAgICAgaWYgKG9wdC5pZ25vcmVIaWRlICYmIGkuaGlkZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0LmNiKSB7XG4gICAgICAgICAgY29uc3QgcmVzID0gb3B0LmNiKGkpO1xuICAgICAgICAgIGlmICghaXRlbSAmJiB0eXBlb2YgcmVzID09PSAnYm9vbGVhbicgJiYgcmVzKSB7XG4gICAgICAgICAgICBpdGVtID0gaTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkubGluayAhPSBudWxsICYmIGkubGluayA9PT0gdXJsKSB7XG4gICAgICAgICAgaXRlbSA9IGk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIW9wdC5yZWN1cnNpdmUpIGJyZWFrO1xuXG4gICAgICBpZiAoL1s/O10vZy50ZXN0KHVybCkpIHtcbiAgICAgICAgdXJsID0gdXJsLnNwbGl0KC9bPztdL2cpWzBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXJsID0gdXJsLnNwbGl0KCcvJykuc2xpY2UoMCwgLTEpLmpvaW4oJy8nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmoLnmja51cmzojrflj5boj5zljZXliJfooahcbiAgICogLSDoi6UgYHJlY3Vyc2l2ZTogdHJ1ZWAg5YiZ5Lya6Ieq5Yqo5ZCR5LiK6YCS5b2S5p+l5om+XG4gICAqICAtIOiPnOWNleaVsOaNrua6kOWMheWQqyBgL3dhcmVg77yM5YiZIGAvd2FyZS8xYCDkuZ/op4bkuLogYC93YXJlYCDpoblcbiAgICovXG4gIGdldFBhdGhCeVVybCh1cmw6IHN0cmluZywgcmVjdXJzaXZlOiBib29sZWFuID0gZmFsc2UpOiBNZW51W10ge1xuICAgIGNvbnN0IHJldDogTWVudVtdID0gW107XG4gICAgbGV0IGl0ZW0gPSB0aGlzLmZpbmQoeyB1cmwsIHJlY3Vyc2l2ZSB9KSBhcyBNZW51SW5uZXI7XG5cbiAgICBpZiAoIWl0ZW0pIHJldHVybiByZXQ7XG5cbiAgICBkbyB7XG4gICAgICByZXQuc3BsaWNlKDAsIDAsIGl0ZW0pO1xuICAgICAgaXRlbSA9IGl0ZW0uX3BhcmVudCE7XG4gICAgfSB3aGlsZSAoaXRlbSk7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBtZW51IGJhc2VkIG9uIGBrZXlgXG4gICAqL1xuICBnZXRJdGVtKGtleTogc3RyaW5nKTogTWVudSB8IG51bGwge1xuICAgIGxldCByZXM6IE1lbnUgfCBudWxsID0gbnVsbDtcbiAgICB0aGlzLnZpc2l0KHRoaXMuZGF0YSwgaXRlbSA9PiB7XG4gICAgICBpZiAocmVzID09IG51bGwgJiYgaXRlbS5rZXkgPT09IGtleSkge1xuICAgICAgICByZXMgPSBpdGVtO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0IG1lbnUgYmFzZWQgb24gYGtleWBcbiAgICovXG4gIHNldEl0ZW0oa2V5OiBzdHJpbmcgfCBNZW51LCB2YWx1ZTogTWVudSwgb3B0aW9ucz86IHsgZW1pdD86IGJvb2xlYW4gfSk6IHZvaWQge1xuICAgIGNvbnN0IGl0ZW0gPSB0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyA/IHRoaXMuZ2V0SXRlbShrZXkpIDoga2V5O1xuICAgIGlmIChpdGVtID09IG51bGwpIHJldHVybjtcblxuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKGsgPT4ge1xuICAgICAgaXRlbVtrXSA9IHZhbHVlW2tdO1xuICAgIH0pO1xuICAgIHRoaXMuZml4SXRlbShpdGVtKTtcblxuICAgIGlmIChvcHRpb25zPy5lbWl0ICE9PSBmYWxzZSkgdGhpcy5fY2hhbmdlJC5uZXh0KHRoaXMuZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogT3BlbiBtZW51IGJhc2VkIG9uIGBrZXlgIG9yIG1lbnUgb2JqZWN0XG4gICAqL1xuICBvcGVuKGtleU9ySXRlbTogc3RyaW5nIHwgTWVudSB8IG51bGwsIG9wdGlvbnM/OiB7IGVtaXQ/OiBib29sZWFuIH0pOiB2b2lkIHtcbiAgICBsZXQgaXRlbSA9IHR5cGVvZiBrZXlPckl0ZW0gPT09ICdzdHJpbmcnID8gdGhpcy5maW5kKHsga2V5OiBrZXlPckl0ZW0gfSkgOiBrZXlPckl0ZW07XG4gICAgaWYgKGl0ZW0gPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgdGhpcy52aXNpdCh0aGlzLm1lbnVzLCAoaTogTWVudUlubmVyKSA9PiB7XG4gICAgICBpLl9zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgaWYgKCF0aGlzLm9wZW5TdHJpY3RseSkgaS5vcGVuID0gZmFsc2U7XG4gICAgfSk7XG5cbiAgICBkbyB7XG4gICAgICBpdGVtLl9zZWxlY3RlZCA9IHRydWU7XG4gICAgICBpdGVtLm9wZW4gPSB0cnVlO1xuICAgICAgaXRlbSA9IGl0ZW0uX3BhcmVudDtcbiAgICB9IHdoaWxlIChpdGVtKTtcbiAgICBpZiAob3B0aW9ucz8uZW1pdCAhPT0gZmFsc2UpIHRoaXMuX2NoYW5nZSQubmV4dCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgb3BlbkFsbChzdGF0dXM/OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy50b2dnbGVPcGVuKG51bGwsIHsgYWxsU3RhdHVzOiBzdGF0dXMgfSk7XG4gIH1cblxuICB0b2dnbGVPcGVuKGtleU9ySXRlbTogc3RyaW5nIHwgTWVudSB8IG51bGwsIG9wdGlvbnM/OiB7IGFsbFN0YXR1cz86IGJvb2xlYW47IGVtaXQ/OiBib29sZWFuIH0pOiB2b2lkIHtcbiAgICBsZXQgaXRlbSA9IHR5cGVvZiBrZXlPckl0ZW0gPT09ICdzdHJpbmcnID8gdGhpcy5maW5kKHsga2V5OiBrZXlPckl0ZW0gfSkgOiBrZXlPckl0ZW07XG4gICAgaWYgKGl0ZW0gPT0gbnVsbCkge1xuICAgICAgdGhpcy52aXNpdCh0aGlzLm1lbnVzLCAoaTogTWVudUlubmVyKSA9PiB7XG4gICAgICAgIGkuX3NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIGkub3BlbiA9IG9wdGlvbnM/LmFsbFN0YXR1cyA9PT0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMub3BlblN0cmljdGx5KSB7XG4gICAgICAgIHRoaXMudmlzaXQodGhpcy5tZW51cywgKGk6IE1lbnVJbm5lcikgPT4ge1xuICAgICAgICAgIGlmIChpICE9PSBpdGVtKSBpLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBwSXRlbSA9IGl0ZW0uX3BhcmVudDtcbiAgICAgICAgd2hpbGUgKHBJdGVtKSB7XG4gICAgICAgICAgcEl0ZW0ub3BlbiA9IHRydWU7XG4gICAgICAgICAgcEl0ZW0gPSBwSXRlbS5fcGFyZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpdGVtLm9wZW4gPSAhaXRlbS5vcGVuO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucz8uZW1pdCAhPT0gZmFsc2UpIHRoaXMuX2NoYW5nZSQubmV4dCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fY2hhbmdlJC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuaTE4biQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19