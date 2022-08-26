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
        const opt = { recursive: false, ...options };
        if (opt.key != null) {
            return this.getItem(opt.key);
        }
        let url = opt.url;
        let item = null;
        while (!item && url) {
            this.visit(opt.data ?? this.data, i => {
                if (opt.cb) {
                    opt.cb(i);
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
    /**
     * @deprecated Will be removed in 15.0.0, Pls used `find` instead
     */
    getHit(data, url, recursive = false, cb = null) {
        let item = null;
        while (!item && url) {
            this.visit(data, i => {
                if (cb) {
                    cb(i);
                }
                if (i.link != null && i.link === url) {
                    item = i;
                }
            });
            if (!recursive)
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
     * @deprecated Will be removed in 15.0.0, Pls used `find` and `setItem` instead
     *
     * 根据URL设置菜单 `_open` 属性
     * - 若 `recursive: true` 则会自动向上递归查找
     *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
     */
    openedByUrl(url, recursive = false) {
        if (!url)
            return;
        let findItem = this.getHit(this.data, url, recursive, (i) => {
            i._selected = false;
            i._open = false;
        });
        if (findItem == null)
            return;
        do {
            findItem._selected = true;
            findItem._open = true;
            findItem = findItem._parent;
        } while (findItem);
    }
}
MenuService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: MenuService, deps: [{ token: ALAIN_I18N_TOKEN, optional: true }, { token: i1.ACLService, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
MenuService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: MenuService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: MenuService, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvc3JjL3NlcnZpY2VzL21lbnUvbWVudS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFhLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUE0QixLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFLeEUsT0FBTyxFQUFvQixnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7O0FBR2xFOztHQUVHO0FBRUgsTUFBTSxPQUFPLFdBQVc7SUFTdEIsWUFHVSxPQUF5QixFQUNiLFVBQXNCO1FBRGxDLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBQ2IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVpwQyxhQUFRLEdBQTRCLElBQUksZUFBZSxDQUFTLEVBQUUsQ0FBQyxDQUFDO1FBRXBFLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDMUI7O1dBRUc7UUFDSCxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQVFuQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUlELEtBQUssQ0FBQyxJQUFZLEVBQUUsUUFBd0U7UUFDMUYsTUFBTSxJQUFJLEdBQUcsQ0FBQyxJQUFZLEVBQUUsVUFBdUIsRUFBRSxLQUFhLEVBQVEsRUFBRTtZ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Q0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQVksRUFBRSxFQUFFO1lBQ3JFLENBQUMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLENBQUMsQ0FBYyxDQUFDO1FBQ2hCLElBQUksUUFBUSxJQUFJLElBQUk7WUFBRSxPQUFPO1FBRTdCLEdBQUc7WUFDRCxRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUMxQixRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUN0QixRQUFRLEdBQUcsUUFBUSxDQUFDLE9BQVEsQ0FBQztTQUM5QixRQUFRLFFBQVEsRUFBRTtJQUNyQixDQUFDOzt3R0FwWFUsV0FBVyxrQkFXWixnQkFBZ0I7NEdBWGYsV0FBVyxjQURFLE1BQU07MkZBQ25CLFdBQVc7a0JBRHZCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzswQkFXN0IsUUFBUTs7MEJBQ1IsTUFBTTsyQkFBQyxnQkFBZ0I7OzBCQUV2QixRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPbkRlc3Ryb3ksIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgc2hhcmUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQUNMU2VydmljZSB9IGZyb20gJ0BkZWxvbi9hY2wnO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBBbGFpbkkxOE5TZXJ2aWNlLCBBTEFJTl9JMThOX1RPS0VOIH0gZnJvbSAnLi4vaTE4bi9pMThuJztcbmltcG9ydCB7IE1lbnUsIE1lbnVJY29uLCBNZW51SW5uZXIgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbi8qKlxuICog6I+c5Y2V5pyN5Yqh77yMW+WcqOe6v+aWh+aho10oaHR0cHM6Ly9uZy1hbGFpbi5jb20vdGhlbWUvbWVudSlcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBNZW51U2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX2NoYW5nZSQ6IEJlaGF2aW9yU3ViamVjdDxNZW51W10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxNZW51W10+KFtdKTtcbiAgcHJpdmF0ZSBpMThuJDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGRhdGE6IE1lbnVbXSA9IFtdO1xuICAvKipcbiAgICog5piv5ZCm5a6M5YWo5Y+X5o6n6I+c5Y2V5omT5byA54q25oCB77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgb3BlblN0cmljdGx5ID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pXG4gICAgcHJpdmF0ZSBpMThuU3J2OiBBbGFpbkkxOE5TZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgYWNsU2VydmljZTogQUNMU2VydmljZVxuICApIHtcbiAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuU3J2LmNoYW5nZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZXN1bWUoKSk7XG4gIH1cblxuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8TWVudVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYW5nZSQucGlwZShzaGFyZSgpKTtcbiAgfVxuXG4gIGdldCBtZW51cygpOiBNZW51W10ge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cblxuICB2aXNpdDxUIGV4dGVuZHMgTWVudSA9IE1lbnU+KGRhdGE6IFRbXSwgY2FsbGJhY2s6IChpdGVtOiBULCBwYXJlbnRNZW51bTogVCB8IG51bGwsIGRlcHRoPzogbnVtYmVyKSA9PiB2b2lkKTogdm9pZDtcbiAgdmlzaXQoZGF0YTogTWVudVtdLCBjYWxsYmFjazogKGl0ZW06IE1lbnUsIHBhcmVudE1lbnVtOiBNZW51IHwgbnVsbCwgZGVwdGg/OiBudW1iZXIpID0+IHZvaWQpOiB2b2lkO1xuICB2aXNpdChkYXRhOiBNZW51W10sIGNhbGxiYWNrOiAoaXRlbTogTWVudSwgcGFyZW50TWVudW06IE1lbnUgfCBudWxsLCBkZXB0aD86IG51bWJlcikgPT4gdm9pZCk6IHZvaWQge1xuICAgIGNvbnN0IGluRm4gPSAobGlzdDogTWVudVtdLCBwYXJlbnRNZW51OiBNZW51IHwgbnVsbCwgZGVwdGg6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGxpc3QpIHtcbiAgICAgICAgY2FsbGJhY2soaXRlbSwgcGFyZW50TWVudSwgZGVwdGgpO1xuICAgICAgICBpZiAoaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpbkZuKGl0ZW0uY2hpbGRyZW4sIGl0ZW0sIGRlcHRoICsgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbS5jaGlsZHJlbiA9IFtdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGluRm4oZGF0YSwgbnVsbCwgMCk7XG4gIH1cblxuICBhZGQoaXRlbXM6IE1lbnVbXSk6IHZvaWQge1xuICAgIHRoaXMuZGF0YSA9IGl0ZW1zO1xuICAgIHRoaXMucmVzdW1lKCk7XG4gIH1cblxuICBwcml2YXRlIGZpeEl0ZW0oaXRlbTogTWVudUlubmVyKTogdm9pZCB7XG4gICAgaXRlbS5fYWNsUmVzdWx0ID0gdHJ1ZTtcblxuICAgIGlmICghaXRlbS5saW5rKSBpdGVtLmxpbmsgPSAnJztcbiAgICBpZiAoIWl0ZW0uZXh0ZXJuYWxMaW5rKSBpdGVtLmV4dGVybmFsTGluayA9ICcnO1xuXG4gICAgLy8gYmFkZ2VcbiAgICBpZiAoaXRlbS5iYWRnZSkge1xuICAgICAgaWYgKGl0ZW0uYmFkZ2VEb3QgIT09IHRydWUpIHtcbiAgICAgICAgaXRlbS5iYWRnZURvdCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKCFpdGVtLmJhZGdlU3RhdHVzKSB7XG4gICAgICAgIGl0ZW0uYmFkZ2VTdGF0dXMgPSAnZXJyb3InO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtLmNoaWxkcmVuKSkge1xuICAgICAgaXRlbS5jaGlsZHJlbiA9IFtdO1xuICAgIH1cblxuICAgIC8vIGljb25cbiAgICBpZiAodHlwZW9mIGl0ZW0uaWNvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGxldCB0eXBlID0gJ2NsYXNzJztcbiAgICAgIGxldCB2YWx1ZSA9IGl0ZW0uaWNvbjtcbiAgICAgIC8vIGNvbXBhdGlibGUgYGFudGljb24gYW50aWNvbi11c2VyYFxuICAgICAgaWYgKH5pdGVtLmljb24uaW5kZXhPZihgYW50aWNvbi1gKSkge1xuICAgICAgICB0eXBlID0gJ2ljb24nO1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCctJykuc2xpY2UoMSkuam9pbignLScpO1xuICAgICAgfSBlbHNlIGlmICgvXmh0dHBzPzpcXC9cXC8vLnRlc3QoaXRlbS5pY29uKSkge1xuICAgICAgICB0eXBlID0gJ2ltZyc7XG4gICAgICB9XG4gICAgICBpdGVtLmljb24gPSB7IHR5cGUsIHZhbHVlIH0gYXMgTnpTYWZlQW55O1xuICAgIH1cbiAgICBpZiAoaXRlbS5pY29uICE9IG51bGwpIHtcbiAgICAgIGl0ZW0uaWNvbiA9IHsgdGhlbWU6ICdvdXRsaW5lJywgc3BpbjogZmFsc2UsIC4uLihpdGVtLmljb24gYXMgTWVudUljb24pIH07XG4gICAgfVxuXG4gICAgaXRlbS50ZXh0ID0gaXRlbS5pMThuICYmIHRoaXMuaTE4blNydiA/IHRoaXMuaTE4blNydi5mYW55aShpdGVtLmkxOG4pIDogaXRlbS50ZXh0O1xuXG4gICAgLy8gZ3JvdXBcbiAgICBpdGVtLmdyb3VwID0gaXRlbS5ncm91cCAhPT0gZmFsc2U7XG5cbiAgICAvLyBoaWRkZW5cbiAgICBpdGVtLl9oaWRkZW4gPSB0eXBlb2YgaXRlbS5oaWRlID09PSAndW5kZWZpbmVkJyA/IGZhbHNlIDogaXRlbS5oaWRlO1xuXG4gICAgLy8gZGlzYWJsZWRcbiAgICBpdGVtLmRpc2FibGVkID0gdHlwZW9mIGl0ZW0uZGlzYWJsZWQgPT09ICd1bmRlZmluZWQnID8gZmFsc2UgOiBpdGVtLmRpc2FibGVkO1xuXG4gICAgLy8gYWNsXG4gICAgaXRlbS5fYWNsUmVzdWx0ID0gaXRlbS5hY2wgJiYgdGhpcy5hY2xTZXJ2aWNlID8gdGhpcy5hY2xTZXJ2aWNlLmNhbihpdGVtLmFjbCkgOiB0cnVlO1xuXG4gICAgaXRlbS5vcGVuID0gaXRlbS5vcGVuICE9IG51bGwgPyBpdGVtLm9wZW4gOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDph43nva7oj5zljZXvvIzlj6/og71JMThO44CB55So5oi35p2D6ZmQ5Y+Y5Yqo5pe26ZyA6KaB6LCD55So5Yi35pawXG4gICAqL1xuICByZXN1bWU8VCBleHRlbmRzIE1lbnUgPSBNZW51PihjYWxsYmFjaz86IChpdGVtOiBULCBwYXJlbnRNZW51bTogVCB8IG51bGwsIGRlcHRoPzogbnVtYmVyKSA9PiB2b2lkKTogdm9pZDtcbiAgcmVzdW1lKGNhbGxiYWNrPzogKGl0ZW06IE1lbnUsIHBhcmVudE1lbnVtOiBNZW51IHwgbnVsbCwgZGVwdGg/OiBudW1iZXIpID0+IHZvaWQpOiB2b2lkO1xuICByZXN1bWUoY2FsbGJhY2s/OiAoaXRlbTogTWVudSwgcGFyZW50TWVudW06IE1lbnUgfCBudWxsLCBkZXB0aD86IG51bWJlcikgPT4gdm9pZCk6IHZvaWQge1xuICAgIGxldCBpID0gMTtcbiAgICBjb25zdCBzaG9ydGN1dHM6IE1lbnVbXSA9IFtdO1xuICAgIHRoaXMudmlzaXQodGhpcy5kYXRhLCAoaXRlbTogTWVudUlubmVyLCBwYXJlbnQsIGRlcHRoKSA9PiB7XG4gICAgICBpdGVtLl9pZCA9IGkrKztcbiAgICAgIGl0ZW0uX3BhcmVudCA9IHBhcmVudDtcbiAgICAgIGl0ZW0uX2RlcHRoID0gZGVwdGg7XG4gICAgICB0aGlzLmZpeEl0ZW0oaXRlbSk7XG5cbiAgICAgIC8vIHNob3J0Y3V0XG4gICAgICBpZiAocGFyZW50ICYmIGl0ZW0uc2hvcnRjdXQgPT09IHRydWUgJiYgcGFyZW50LnNob3J0Y3V0Um9vdCAhPT0gdHJ1ZSkge1xuICAgICAgICBzaG9ydGN1dHMucHVzaChpdGVtKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhpdGVtLCBwYXJlbnQsIGRlcHRoKTtcbiAgICB9KTtcblxuICAgIHRoaXMubG9hZFNob3J0Y3V0KHNob3J0Y3V0cyk7XG4gICAgdGhpcy5fY2hhbmdlJC5uZXh0KHRoaXMuZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICog5Yqg6L295b+r5o236I+c5Y2V77yM5Yqg6L295L2N572u6KeE5YiZ5aaC5LiL77yaXG4gICAqIDHjgIHnu5/kuIDlnKjkuIvmoIcw55qE6IqC54K55LiL77yI5Y2z44CQ5Li75a+86Iiq44CR6IqC54K55LiL5pa577yJXG4gICAqICAgICAgMeOAgeiLpSBjaGlsZHJlbiDlrZjlnKgg44CQc2hvcnRjdXRSb290OiB0cnVl44CR5YiZ5pyA5LyY5YWI44CQ5o6o6I2Q44CR6L+Z56eN5pa55byPXG4gICAqICAgICAgMuOAgeWQpuWImeafpeaJvuW4puacieOAkGRhc2hib2FyZOOAkeWtl+agt+mTvuaOpe+8jOiLpeWtmOWcqOWImeWcqOatpOiPnOWNleeahOS4i+aWueWIm+W7uuW/q+aNt+WFpeWPo1xuICAgKiAgICAgIDPjgIHlkKbliJnmlL7lnKgw6IqC54K55L2N572uXG4gICAqL1xuICBwcml2YXRlIGxvYWRTaG9ydGN1dChzaG9ydGN1dHM6IE1lbnVJbm5lcltdKTogdm9pZCB7XG4gICAgaWYgKHNob3J0Y3V0cy5sZW5ndGggPT09IDAgfHwgdGhpcy5kYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGxzID0gdGhpcy5kYXRhWzBdLmNoaWxkcmVuIGFzIE1lbnVJbm5lcltdO1xuICAgIGxldCBwb3MgPSBscy5maW5kSW5kZXgodyA9PiB3LnNob3J0Y3V0Um9vdCA9PT0gdHJ1ZSk7XG4gICAgaWYgKHBvcyA9PT0gLTEpIHtcbiAgICAgIHBvcyA9IGxzLmZpbmRJbmRleCh3ID0+IHcubGluayEuaW5jbHVkZXMoJ2Rhc2hib2FyZCcpKTtcbiAgICAgIHBvcyA9IChwb3MgIT09IC0xID8gcG9zIDogLTEpICsgMTtcbiAgICAgIGNvbnN0IHNob3J0Y3V0TWVudSA9IHtcbiAgICAgICAgdGV4dDogJ+W/q+aNt+iPnOWNlScsXG4gICAgICAgIGkxOG46ICdzaG9ydGN1dCcsXG4gICAgICAgIGljb246ICdpY29uLXJvY2tldCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgfSBhcyBNZW51SW5uZXI7XG4gICAgICB0aGlzLmRhdGFbMF0uY2hpbGRyZW4hLnNwbGljZShwb3MsIDAsIHNob3J0Y3V0TWVudSk7XG4gICAgfVxuICAgIGxldCBfZGF0YSA9IHRoaXMuZGF0YVswXS5jaGlsZHJlbiFbcG9zXTtcbiAgICBpZiAoX2RhdGEuaTE4biAmJiB0aGlzLmkxOG5TcnYpIF9kYXRhLnRleHQgPSB0aGlzLmkxOG5TcnYuZmFueWkoX2RhdGEuaTE4bik7XG4gICAgX2RhdGEgPSBPYmplY3QuYXNzaWduKF9kYXRhLCB7XG4gICAgICBzaG9ydGN1dFJvb3Q6IHRydWUsXG4gICAgICBfaWQ6IC0xLFxuICAgICAgX3BhcmVudDogbnVsbCxcbiAgICAgIF9kZXB0aDogMVxuICAgIH0gYXMgTWVudUlubmVyKTtcbiAgICBfZGF0YS5jaGlsZHJlbiA9IHNob3J0Y3V0cy5tYXAoaSA9PiB7XG4gICAgICBpLl9kZXB0aCA9IDI7XG4gICAgICBpLl9wYXJlbnQgPSBfZGF0YTtcbiAgICAgIHJldHVybiBpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOa4heepuuiPnOWNlVxuICAgKi9cbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy5fY2hhbmdlJC5uZXh0KHRoaXMuZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogVXNlIGB1cmxgIG9yIGBrZXlgIHRvIGZpbmQgbWVudXNcbiAgICpcbiAgICog5Yip55SoIGB1cmxgIOaIliBga2V5YCDmn6Xmib7oj5zljZVcbiAgICovXG4gIGZpbmQob3B0aW9uczoge1xuICAgIGtleT86IHN0cmluZyB8IG51bGw7XG4gICAgdXJsPzogc3RyaW5nIHwgbnVsbDtcbiAgICByZWN1cnNpdmU/OiBib29sZWFuIHwgbnVsbDtcbiAgICBjYj86ICgoaTogTWVudSkgPT4gdm9pZCkgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFVzZSB0aGUgY3VycmVudCBtZW51IGRhdGEgYnkgZGVmYXVsdFxuICAgICAqXG4gICAgICog6buY6K6k5L2/55So5b2T5YmN6I+c5Y2V5pWw5o2uXG4gICAgICovXG4gICAgZGF0YT86IE1lbnVbXSB8IG51bGw7XG4gIH0pOiBNZW51IHwgbnVsbCB7XG4gICAgY29uc3Qgb3B0ID0geyByZWN1cnNpdmU6IGZhbHNlLCAuLi5vcHRpb25zIH07XG4gICAgaWYgKG9wdC5rZXkgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0SXRlbShvcHQua2V5KTtcbiAgICB9XG5cbiAgICBsZXQgdXJsID0gb3B0LnVybDtcblxuICAgIGxldCBpdGVtOiBNZW51IHwgbnVsbCA9IG51bGw7XG5cbiAgICB3aGlsZSAoIWl0ZW0gJiYgdXJsKSB7XG4gICAgICB0aGlzLnZpc2l0KG9wdC5kYXRhID8/IHRoaXMuZGF0YSwgaSA9PiB7XG4gICAgICAgIGlmIChvcHQuY2IpIHtcbiAgICAgICAgICBvcHQuY2IoaSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkubGluayAhPSBudWxsICYmIGkubGluayA9PT0gdXJsKSB7XG4gICAgICAgICAgaXRlbSA9IGk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIW9wdC5yZWN1cnNpdmUpIGJyZWFrO1xuXG4gICAgICBpZiAoL1s/O10vZy50ZXN0KHVybCkpIHtcbiAgICAgICAgdXJsID0gdXJsLnNwbGl0KC9bPztdL2cpWzBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXJsID0gdXJsLnNwbGl0KCcvJykuc2xpY2UoMCwgLTEpLmpvaW4oJy8nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmoLnmja51cmzojrflj5boj5zljZXliJfooahcbiAgICogLSDoi6UgYHJlY3Vyc2l2ZTogdHJ1ZWAg5YiZ5Lya6Ieq5Yqo5ZCR5LiK6YCS5b2S5p+l5om+XG4gICAqICAtIOiPnOWNleaVsOaNrua6kOWMheWQqyBgL3dhcmVg77yM5YiZIGAvd2FyZS8xYCDkuZ/op4bkuLogYC93YXJlYCDpoblcbiAgICovXG4gIGdldFBhdGhCeVVybCh1cmw6IHN0cmluZywgcmVjdXJzaXZlOiBib29sZWFuID0gZmFsc2UpOiBNZW51W10ge1xuICAgIGNvbnN0IHJldDogTWVudVtdID0gW107XG4gICAgbGV0IGl0ZW0gPSB0aGlzLmZpbmQoeyB1cmwsIHJlY3Vyc2l2ZSB9KSBhcyBNZW51SW5uZXI7XG5cbiAgICBpZiAoIWl0ZW0pIHJldHVybiByZXQ7XG5cbiAgICBkbyB7XG4gICAgICByZXQuc3BsaWNlKDAsIDAsIGl0ZW0pO1xuICAgICAgaXRlbSA9IGl0ZW0uX3BhcmVudCE7XG4gICAgfSB3aGlsZSAoaXRlbSk7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBtZW51IGJhc2VkIG9uIGBrZXlgXG4gICAqL1xuICBnZXRJdGVtKGtleTogc3RyaW5nKTogTWVudSB8IG51bGwge1xuICAgIGxldCByZXM6IE1lbnUgfCBudWxsID0gbnVsbDtcbiAgICB0aGlzLnZpc2l0KHRoaXMuZGF0YSwgaXRlbSA9PiB7XG4gICAgICBpZiAocmVzID09IG51bGwgJiYgaXRlbS5rZXkgPT09IGtleSkge1xuICAgICAgICByZXMgPSBpdGVtO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0IG1lbnUgYmFzZWQgb24gYGtleWBcbiAgICovXG4gIHNldEl0ZW0oa2V5OiBzdHJpbmcgfCBNZW51LCB2YWx1ZTogTWVudSwgb3B0aW9ucz86IHsgZW1pdD86IGJvb2xlYW4gfSk6IHZvaWQge1xuICAgIGNvbnN0IGl0ZW0gPSB0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyA/IHRoaXMuZ2V0SXRlbShrZXkpIDoga2V5O1xuICAgIGlmIChpdGVtID09IG51bGwpIHJldHVybjtcblxuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKGsgPT4ge1xuICAgICAgaXRlbVtrXSA9IHZhbHVlW2tdO1xuICAgIH0pO1xuICAgIHRoaXMuZml4SXRlbShpdGVtKTtcblxuICAgIGlmIChvcHRpb25zPy5lbWl0ICE9PSBmYWxzZSkgdGhpcy5fY2hhbmdlJC5uZXh0KHRoaXMuZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogT3BlbiBtZW51IGJhc2VkIG9uIGBrZXlgIG9yIG1lbnUgb2JqZWN0XG4gICAqL1xuICBvcGVuKGtleU9ySXRlbTogc3RyaW5nIHwgTWVudSB8IG51bGwsIG9wdGlvbnM/OiB7IGVtaXQ/OiBib29sZWFuIH0pOiB2b2lkIHtcbiAgICBsZXQgaXRlbSA9IHR5cGVvZiBrZXlPckl0ZW0gPT09ICdzdHJpbmcnID8gdGhpcy5maW5kKHsga2V5OiBrZXlPckl0ZW0gfSkgOiBrZXlPckl0ZW07XG4gICAgaWYgKGl0ZW0gPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgdGhpcy52aXNpdCh0aGlzLm1lbnVzLCAoaTogTWVudUlubmVyKSA9PiB7XG4gICAgICBpLl9zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgaWYgKCF0aGlzLm9wZW5TdHJpY3RseSkgaS5vcGVuID0gZmFsc2U7XG4gICAgfSk7XG5cbiAgICBkbyB7XG4gICAgICBpdGVtLl9zZWxlY3RlZCA9IHRydWU7XG4gICAgICBpdGVtLm9wZW4gPSB0cnVlO1xuICAgICAgaXRlbSA9IGl0ZW0uX3BhcmVudDtcbiAgICB9IHdoaWxlIChpdGVtKTtcbiAgICBpZiAob3B0aW9ucz8uZW1pdCAhPT0gZmFsc2UpIHRoaXMuX2NoYW5nZSQubmV4dCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgb3BlbkFsbChzdGF0dXM/OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy50b2dnbGVPcGVuKG51bGwsIHsgYWxsU3RhdHVzOiBzdGF0dXMgfSk7XG4gIH1cblxuICB0b2dnbGVPcGVuKGtleU9ySXRlbTogc3RyaW5nIHwgTWVudSB8IG51bGwsIG9wdGlvbnM/OiB7IGFsbFN0YXR1cz86IGJvb2xlYW47IGVtaXQ/OiBib29sZWFuIH0pOiB2b2lkIHtcbiAgICBsZXQgaXRlbSA9IHR5cGVvZiBrZXlPckl0ZW0gPT09ICdzdHJpbmcnID8gdGhpcy5maW5kKHsga2V5OiBrZXlPckl0ZW0gfSkgOiBrZXlPckl0ZW07XG4gICAgaWYgKGl0ZW0gPT0gbnVsbCkge1xuICAgICAgdGhpcy52aXNpdCh0aGlzLm1lbnVzLCAoaTogTWVudUlubmVyKSA9PiB7XG4gICAgICAgIGkuX3NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIGkub3BlbiA9IG9wdGlvbnM/LmFsbFN0YXR1cyA9PT0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMub3BlblN0cmljdGx5KSB7XG4gICAgICAgIHRoaXMudmlzaXQodGhpcy5tZW51cywgKGk6IE1lbnVJbm5lcikgPT4ge1xuICAgICAgICAgIGlmIChpICE9PSBpdGVtKSBpLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBwSXRlbSA9IGl0ZW0uX3BhcmVudDtcbiAgICAgICAgd2hpbGUgKHBJdGVtKSB7XG4gICAgICAgICAgcEl0ZW0ub3BlbiA9IHRydWU7XG4gICAgICAgICAgcEl0ZW0gPSBwSXRlbS5fcGFyZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpdGVtLm9wZW4gPSAhaXRlbS5vcGVuO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucz8uZW1pdCAhPT0gZmFsc2UpIHRoaXMuX2NoYW5nZSQubmV4dCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fY2hhbmdlJC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuaTE4biQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBXaWxsIGJlIHJlbW92ZWQgaW4gMTUuMC4wLCBQbHMgdXNlZCBgZmluZGAgaW5zdGVhZFxuICAgKi9cbiAgZ2V0SGl0KGRhdGE6IE1lbnVbXSwgdXJsOiBzdHJpbmcsIHJlY3Vyc2l2ZTogYm9vbGVhbiA9IGZhbHNlLCBjYjogKChpOiBNZW51KSA9PiB2b2lkKSB8IG51bGwgPSBudWxsKTogTWVudSB8IG51bGwge1xuICAgIGxldCBpdGVtOiBNZW51IHwgbnVsbCA9IG51bGw7XG5cbiAgICB3aGlsZSAoIWl0ZW0gJiYgdXJsKSB7XG4gICAgICB0aGlzLnZpc2l0KGRhdGEsIGkgPT4ge1xuICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICBjYihpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaS5saW5rICE9IG51bGwgJiYgaS5saW5rID09PSB1cmwpIHtcbiAgICAgICAgICBpdGVtID0gaTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICghcmVjdXJzaXZlKSBicmVhaztcblxuICAgICAgaWYgKC9bPztdL2cudGVzdCh1cmwpKSB7XG4gICAgICAgIHVybCA9IHVybC5zcGxpdCgvWz87XS9nKVswXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVybCA9IHVybC5zcGxpdCgnLycpLnNsaWNlKDAsIC0xKS5qb2luKCcvJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgV2lsbCBiZSByZW1vdmVkIGluIDE1LjAuMCwgUGxzIHVzZWQgYGZpbmRgIGFuZCBgc2V0SXRlbWAgaW5zdGVhZFxuICAgKlxuICAgKiDmoLnmja5VUkzorr7nva7oj5zljZUgYF9vcGVuYCDlsZ7mgKdcbiAgICogLSDoi6UgYHJlY3Vyc2l2ZTogdHJ1ZWAg5YiZ5Lya6Ieq5Yqo5ZCR5LiK6YCS5b2S5p+l5om+XG4gICAqICAtIOiPnOWNleaVsOaNrua6kOWMheWQqyBgL3dhcmVg77yM5YiZIGAvd2FyZS8xYCDkuZ/op4bkuLogYC93YXJlYCDpoblcbiAgICovXG4gIG9wZW5lZEJ5VXJsKHVybDogc3RyaW5nIHwgbnVsbCwgcmVjdXJzaXZlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBpZiAoIXVybCkgcmV0dXJuO1xuXG4gICAgbGV0IGZpbmRJdGVtID0gdGhpcy5nZXRIaXQodGhpcy5kYXRhLCB1cmwsIHJlY3Vyc2l2ZSwgKGk6IE1lbnVJbm5lcikgPT4ge1xuICAgICAgaS5fc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIGkuX29wZW4gPSBmYWxzZTtcbiAgICB9KSBhcyBNZW51SW5uZXI7XG4gICAgaWYgKGZpbmRJdGVtID09IG51bGwpIHJldHVybjtcblxuICAgIGRvIHtcbiAgICAgIGZpbmRJdGVtLl9zZWxlY3RlZCA9IHRydWU7XG4gICAgICBmaW5kSXRlbS5fb3BlbiA9IHRydWU7XG4gICAgICBmaW5kSXRlbSA9IGZpbmRJdGVtLl9wYXJlbnQhO1xuICAgIH0gd2hpbGUgKGZpbmRJdGVtKTtcbiAgfVxufVxuIl19