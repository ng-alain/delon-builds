/**
 * @fileoverview added by tsickle
 * Generated from: src/services/menu/menu.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, Optional } from '@angular/core';
import { ACLService } from '@delon/acl';
import { BehaviorSubject } from 'rxjs';
import { share } from 'rxjs/operators';
import { ALAIN_I18N_TOKEN } from '../i18n/i18n';
import * as i0 from "@angular/core";
import * as i1 from "../i18n/i18n";
import * as i2 from "@delon/acl";
/**
 * 菜单服务，[在线文档](https://ng-alain.com/theme/menu)
 */
export class MenuService {
    /**
     * @param {?} i18nSrv
     * @param {?} aclService
     */
    constructor(i18nSrv, aclService) {
        this.i18nSrv = i18nSrv;
        this.aclService = aclService;
        this._change$ = new BehaviorSubject([]);
        this.data = [];
        this.i18n$ = this.i18nSrv.change.subscribe((/**
         * @return {?}
         */
        () => this.resume()));
    }
    /**
     * @return {?}
     */
    get change() {
        return this._change$.pipe(share());
    }
    /**
     * @param {?} data
     * @param {?} callback
     * @return {?}
     */
    visit(data, callback) {
        /** @type {?} */
        const inFn = (/**
         * @param {?} list
         * @param {?} parentMenu
         * @param {?} depth
         * @return {?}
         */
        (list, parentMenu, depth) => {
            for (const item of list) {
                callback(item, parentMenu, depth);
                if (item.children && item.children.length > 0) {
                    inFn(item.children, item, depth + 1);
                }
                else {
                    item.children = [];
                }
            }
        });
        inFn(data, null, 0);
    }
    /**
     * @param {?} items
     * @return {?}
     */
    add(items) {
        this.data = items;
        this.resume();
    }
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
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
            /** @type {?} */
            let type = 'class';
            /** @type {?} */
            let value = item.icon;
            // compatible `anticon anticon-user`
            if (~item.icon.indexOf(`anticon-`)) {
                type = 'icon';
                value = value.split('-').slice(1).join('-');
            }
            else if (/^https?:\/\//.test(item.icon)) {
                type = 'img';
            }
            item.icon = (/** @type {?} */ ({ type, value }));
        }
        if (item.icon != null) {
            item.icon = Object.assign({ theme: 'outline', spin: false }, ((/** @type {?} */ (item.icon))));
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
    }
    /**
     * 重置菜单，可能I18N、用户权限变动时需要调用刷新
     * @param {?=} callback
     * @return {?}
     */
    resume(callback) {
        /** @type {?} */
        let i = 1;
        /** @type {?} */
        const shortcuts = [];
        this.visit(this.data, (/**
         * @param {?} item
         * @param {?} parent
         * @param {?} depth
         * @return {?}
         */
        (item, parent, depth) => {
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
        }));
        this.loadShortcut(shortcuts);
        this._change$.next(this.data);
    }
    /**
     * 加载快捷菜单，加载位置规则如下：
     * 1、统一在下标0的节点下（即【主导航】节点下方）
     *      1、若 children 存在 【shortcutRoot: true】则最优先【推荐】这种方式
     *      2、否则查找带有【dashboard】字样链接，若存在则在此菜单的下方创建快捷入口
     *      3、否则放在0节点位置
     * @private
     * @param {?} shortcuts
     * @return {?}
     */
    loadShortcut(shortcuts) {
        if (shortcuts.length === 0 || this.data.length === 0) {
            return;
        }
        /** @type {?} */
        const ls = (/** @type {?} */ (this.data[0].children));
        /** @type {?} */
        let pos = ls.findIndex((/**
         * @param {?} w
         * @return {?}
         */
        w => w.shortcutRoot === true));
        if (pos === -1) {
            pos = ls.findIndex((/**
             * @param {?} w
             * @return {?}
             */
            w => (/** @type {?} */ (w.link)).includes('dashboard')));
            pos = (pos !== -1 ? pos : -1) + 1;
            /** @type {?} */
            const shortcutMenu = (/** @type {?} */ ({
                text: '快捷菜单',
                i18n: 'shortcut',
                icon: 'icon-rocket',
                children: [],
            }));
            (/** @type {?} */ (this.data[0].children)).splice(pos, 0, shortcutMenu);
        }
        /** @type {?} */
        let _data = (/** @type {?} */ (this.data[0].children))[pos];
        if (_data.i18n && this.i18nSrv)
            _data.text = this.i18nSrv.fanyi(_data.i18n);
        // tslint:disable-next-line:prefer-object-spread
        _data = Object.assign(_data, (/** @type {?} */ ({
            shortcutRoot: true,
            _id: -1,
            _parent: null,
            _depth: 1,
        })));
        _data.children = shortcuts.map((/**
         * @param {?} i
         * @return {?}
         */
        i => {
            i._depth = 2;
            i._parent = _data;
            return i;
        }));
    }
    /**
     * @return {?}
     */
    get menus() {
        return this.data;
    }
    /**
     * 清空菜单
     * @return {?}
     */
    clear() {
        this.data = [];
        this._change$.next(this.data);
    }
    /**
     * @param {?} data
     * @param {?} url
     * @param {?=} recursive
     * @param {?=} cb
     * @return {?}
     */
    getHit(data, url, recursive = false, cb = null) {
        /** @type {?} */
        let item = null;
        while (!item && url) {
            this.visit(data, (/**
             * @param {?} i
             * @return {?}
             */
            i => {
                if (cb) {
                    cb(i);
                }
                if (i.link != null && i.link === url) {
                    item = i;
                }
            }));
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
     * 根据URL设置菜单 `_open` 属性
     * - 若 `recursive: true` 则会自动向上递归查找
     *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
     * @param {?} url
     * @param {?=} recursive
     * @return {?}
     */
    openedByUrl(url, recursive = false) {
        if (!url)
            return;
        /** @type {?} */
        let findItem = this.getHit(this.data, url, recursive, (/**
         * @param {?} i
         * @return {?}
         */
        i => {
            i._selected = false;
            i._open = false;
        }));
        if (findItem == null)
            return;
        do {
            findItem._selected = true;
            findItem._open = true;
            findItem = (/** @type {?} */ (findItem._parent));
        } while (findItem);
    }
    /**
     * 根据url获取菜单列表
     * - 若 `recursive: true` 则会自动向上递归查找
     *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
     * @param {?} url
     * @param {?=} recursive
     * @return {?}
     */
    getPathByUrl(url, recursive = false) {
        /** @type {?} */
        const ret = [];
        /** @type {?} */
        let item = this.getHit(this.data, url, recursive);
        if (!item)
            return ret;
        do {
            ret.splice(0, 0, item);
            item = (/** @type {?} */ (item._parent));
        } while (item);
        return ret;
    }
    /**
     * Get menu based on `key`
     * @param {?} key
     * @return {?}
     */
    getItem(key) {
        /** @type {?} */
        let res = null;
        this.visit(this.data, (/**
         * @param {?} item
         * @return {?}
         */
        item => {
            if (res == null && item.key === key) {
                res = item;
            }
        }));
        return res;
    }
    /**
     * Set menu based on `key`
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    setItem(key, value) {
        /** @type {?} */
        const item = this.getItem(key);
        if (item == null)
            return;
        Object.keys(value).forEach((/**
         * @param {?} k
         * @return {?}
         */
        k => {
            item[k] = value[k];
        }));
        this.fixItem(item);
        this._change$.next(this.data);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._change$.unsubscribe();
        this.i18n$.unsubscribe();
    }
}
MenuService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
MenuService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] },
    { type: ACLService, decorators: [{ type: Optional }] }
];
/** @nocollapse */ MenuService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MenuService_Factory() { return new MenuService(i0.ɵɵinject(i1.ALAIN_I18N_TOKEN, 8), i0.ɵɵinject(i2.ACLService, 8)); }, token: MenuService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    MenuService.prototype._change$;
    /**
     * @type {?}
     * @private
     */
    MenuService.prototype.i18n$;
    /**
     * @type {?}
     * @private
     */
    MenuService.prototype.data;
    /**
     * @type {?}
     * @private
     */
    MenuService.prototype.i18nSrv;
    /**
     * @type {?}
     * @private
     */
    MenuService.prototype.aclService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvc3JjL3NlcnZpY2VzL21lbnUvbWVudS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQWEsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDeEMsT0FBTyxFQUFFLGVBQWUsRUFBNEIsTUFBTSxNQUFNLENBQUM7QUFDakUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZDLE9BQU8sRUFBb0IsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7Ozs7QUFPbEUsTUFBTSxPQUFPLFdBQVc7Ozs7O0lBTXRCLFlBR1UsT0FBeUIsRUFDYixVQUFzQjtRQURsQyxZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUNiLGVBQVUsR0FBVixVQUFVLENBQVk7UUFUcEMsYUFBUSxHQUE0QixJQUFJLGVBQWUsQ0FBUyxFQUFFLENBQUMsQ0FBQztRQUdwRSxTQUFJLEdBQVcsRUFBRSxDQUFDO1FBUXhCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFDLENBQUM7SUFDbEUsQ0FBQzs7OztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7SUFFRCxLQUFLLENBQUMsSUFBWSxFQUFFLFFBQXdFOztjQUNwRixJQUFJOzs7Ozs7UUFBRyxDQUFDLElBQVksRUFBRSxVQUF1QixFQUFFLEtBQWEsRUFBRSxFQUFFO1lBQ3BFLEtB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QUFLLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzNCLENBQUM7OztZQXpRRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7OzRDQVE3QixRQUFRLFlBQ1IsTUFBTSxTQUFDLGdCQUFnQjtZQWxCbkIsVUFBVSx1QkFvQmQsUUFBUTs7Ozs7Ozs7SUFUWCwrQkFBNEU7Ozs7O0lBQzVFLDRCQUE0Qjs7Ozs7SUFFNUIsMkJBQTBCOzs7OztJQUd4Qiw4QkFFaUM7Ozs7O0lBQ2pDLGlDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT25EZXN0cm95LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQUNMU2VydmljZSB9IGZyb20gJ0BkZWxvbi9hY2wnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHNoYXJlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQWxhaW5JMThOU2VydmljZSwgQUxBSU5fSTE4Tl9UT0tFTiB9IGZyb20gJy4uL2kxOG4vaTE4bic7XG5pbXBvcnQgeyBNZW51LCBNZW51SWNvbiB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuLyoqXG4gKiDoj5zljZXmnI3liqHvvIxb5Zyo57q/5paH5qGjXShodHRwczovL25nLWFsYWluLmNvbS90aGVtZS9tZW51KVxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE1lbnVTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfY2hhbmdlJDogQmVoYXZpb3JTdWJqZWN0PE1lbnVbXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE1lbnVbXT4oW10pO1xuICBwcml2YXRlIGkxOG4kOiBTdWJzY3JpcHRpb247XG5cbiAgcHJpdmF0ZSBkYXRhOiBNZW51W10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTilcbiAgICBwcml2YXRlIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBhY2xTZXJ2aWNlOiBBQ0xTZXJ2aWNlLFxuICApIHtcbiAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuU3J2LmNoYW5nZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZXN1bWUoKSk7XG4gIH1cblxuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8TWVudVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYW5nZSQucGlwZShzaGFyZSgpKTtcbiAgfVxuXG4gIHZpc2l0KGRhdGE6IE1lbnVbXSwgY2FsbGJhY2s6IChpdGVtOiBNZW51LCBwYXJlbnRNZW51bTogTWVudSB8IG51bGwsIGRlcHRoPzogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgY29uc3QgaW5GbiA9IChsaXN0OiBNZW51W10sIHBhcmVudE1lbnU6IE1lbnUgfCBudWxsLCBkZXB0aDogbnVtYmVyKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGlzdCkge1xuICAgICAgICBjYWxsYmFjayhpdGVtLCBwYXJlbnRNZW51LCBkZXB0aCk7XG4gICAgICAgIGlmIChpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGluRm4oaXRlbS5jaGlsZHJlbiwgaXRlbSwgZGVwdGggKyAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLmNoaWxkcmVuID0gW107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaW5GbihkYXRhLCBudWxsLCAwKTtcbiAgfVxuXG4gIGFkZChpdGVtczogTWVudVtdKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhID0gaXRlbXM7XG4gICAgdGhpcy5yZXN1bWUoKTtcbiAgfVxuXG4gIHByaXZhdGUgZml4SXRlbShpdGVtOiBNZW51KTogdm9pZCB7XG4gICAgaXRlbS5fYWNsUmVzdWx0ID0gdHJ1ZTtcblxuICAgIGlmICghaXRlbS5saW5rKSBpdGVtLmxpbmsgPSAnJztcbiAgICBpZiAoIWl0ZW0uZXh0ZXJuYWxMaW5rKSBpdGVtLmV4dGVybmFsTGluayA9ICcnO1xuXG4gICAgLy8gYmFkZ2VcbiAgICBpZiAoaXRlbS5iYWRnZSkge1xuICAgICAgaWYgKGl0ZW0uYmFkZ2VEb3QgIT09IHRydWUpIHtcbiAgICAgICAgaXRlbS5iYWRnZURvdCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKCFpdGVtLmJhZGdlU3RhdHVzKSB7XG4gICAgICAgIGl0ZW0uYmFkZ2VTdGF0dXMgPSAnZXJyb3InO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtLmNoaWxkcmVuKSkge1xuICAgICAgaXRlbS5jaGlsZHJlbiA9IFtdO1xuICAgIH1cblxuICAgIC8vIGljb25cbiAgICBpZiAodHlwZW9mIGl0ZW0uaWNvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGxldCB0eXBlID0gJ2NsYXNzJztcbiAgICAgIGxldCB2YWx1ZSA9IGl0ZW0uaWNvbjtcbiAgICAgIC8vIGNvbXBhdGlibGUgYGFudGljb24gYW50aWNvbi11c2VyYFxuICAgICAgaWYgKH5pdGVtLmljb24uaW5kZXhPZihgYW50aWNvbi1gKSkge1xuICAgICAgICB0eXBlID0gJ2ljb24nO1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCctJykuc2xpY2UoMSkuam9pbignLScpO1xuICAgICAgfSBlbHNlIGlmICgvXmh0dHBzPzpcXC9cXC8vLnRlc3QoaXRlbS5pY29uKSkge1xuICAgICAgICB0eXBlID0gJ2ltZyc7XG4gICAgICB9XG4gICAgICBpdGVtLmljb24gPSB7IHR5cGUsIHZhbHVlIH0gYXMgYW55O1xuICAgIH1cbiAgICBpZiAoaXRlbS5pY29uICE9IG51bGwpIHtcbiAgICAgIGl0ZW0uaWNvbiA9IHsgdGhlbWU6ICdvdXRsaW5lJywgc3BpbjogZmFsc2UsIC4uLihpdGVtLmljb24gYXMgTWVudUljb24pIH07XG4gICAgfVxuXG4gICAgaXRlbS50ZXh0ID0gaXRlbS5pMThuICYmIHRoaXMuaTE4blNydiA/IHRoaXMuaTE4blNydi5mYW55aShpdGVtLmkxOG4pIDogaXRlbS50ZXh0O1xuXG4gICAgLy8gZ3JvdXBcbiAgICBpdGVtLmdyb3VwID0gaXRlbS5ncm91cCAhPT0gZmFsc2U7XG5cbiAgICAvLyBoaWRkZW5cbiAgICBpdGVtLl9oaWRkZW4gPSB0eXBlb2YgaXRlbS5oaWRlID09PSAndW5kZWZpbmVkJyA/IGZhbHNlIDogaXRlbS5oaWRlO1xuXG4gICAgLy8gZGlzYWJsZWRcbiAgICBpdGVtLmRpc2FibGVkID0gdHlwZW9mIGl0ZW0uZGlzYWJsZWQgPT09ICd1bmRlZmluZWQnID8gZmFsc2UgOiBpdGVtLmRpc2FibGVkO1xuXG4gICAgLy8gYWNsXG4gICAgaXRlbS5fYWNsUmVzdWx0ID0gaXRlbS5hY2wgJiYgdGhpcy5hY2xTZXJ2aWNlID8gdGhpcy5hY2xTZXJ2aWNlLmNhbihpdGVtLmFjbCkgOiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIOmHjee9ruiPnOWNle+8jOWPr+iDvUkxOE7jgIHnlKjmiLfmnYPpmZDlj5jliqjml7bpnIDopoHosIPnlKjliLfmlrBcbiAgICovXG4gIHJlc3VtZShjYWxsYmFjaz86IChpdGVtOiBNZW51LCBwYXJlbnRNZW51bTogTWVudSB8IG51bGwsIGRlcHRoPzogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgbGV0IGkgPSAxO1xuICAgIGNvbnN0IHNob3J0Y3V0czogTWVudVtdID0gW107XG4gICAgdGhpcy52aXNpdCh0aGlzLmRhdGEsIChpdGVtLCBwYXJlbnQsIGRlcHRoKSA9PiB7XG4gICAgICBpdGVtLl9pZCA9IGkrKztcbiAgICAgIGl0ZW0uX3BhcmVudCA9IHBhcmVudDtcbiAgICAgIGl0ZW0uX2RlcHRoID0gZGVwdGg7XG4gICAgICB0aGlzLmZpeEl0ZW0oaXRlbSk7XG5cbiAgICAgIC8vIHNob3J0Y3V0XG4gICAgICBpZiAocGFyZW50ICYmIGl0ZW0uc2hvcnRjdXQgPT09IHRydWUgJiYgcGFyZW50LnNob3J0Y3V0Um9vdCAhPT0gdHJ1ZSkge1xuICAgICAgICBzaG9ydGN1dHMucHVzaChpdGVtKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhpdGVtLCBwYXJlbnQsIGRlcHRoKTtcbiAgICB9KTtcblxuICAgIHRoaXMubG9hZFNob3J0Y3V0KHNob3J0Y3V0cyk7XG4gICAgdGhpcy5fY2hhbmdlJC5uZXh0KHRoaXMuZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICog5Yqg6L295b+r5o236I+c5Y2V77yM5Yqg6L295L2N572u6KeE5YiZ5aaC5LiL77yaXG4gICAqIDHjgIHnu5/kuIDlnKjkuIvmoIcw55qE6IqC54K55LiL77yI5Y2z44CQ5Li75a+86Iiq44CR6IqC54K55LiL5pa577yJXG4gICAqICAgICAgMeOAgeiLpSBjaGlsZHJlbiDlrZjlnKgg44CQc2hvcnRjdXRSb290OiB0cnVl44CR5YiZ5pyA5LyY5YWI44CQ5o6o6I2Q44CR6L+Z56eN5pa55byPXG4gICAqICAgICAgMuOAgeWQpuWImeafpeaJvuW4puacieOAkGRhc2hib2FyZOOAkeWtl+agt+mTvuaOpe+8jOiLpeWtmOWcqOWImeWcqOatpOiPnOWNleeahOS4i+aWueWIm+W7uuW/q+aNt+WFpeWPo1xuICAgKiAgICAgIDPjgIHlkKbliJnmlL7lnKgw6IqC54K55L2N572uXG4gICAqL1xuICBwcml2YXRlIGxvYWRTaG9ydGN1dChzaG9ydGN1dHM6IE1lbnVbXSk6IHZvaWQge1xuICAgIGlmIChzaG9ydGN1dHMubGVuZ3RoID09PSAwIHx8IHRoaXMuZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBscyA9IHRoaXMuZGF0YVswXS5jaGlsZHJlbiBhcyBNZW51W107XG4gICAgbGV0IHBvcyA9IGxzLmZpbmRJbmRleCh3ID0+IHcuc2hvcnRjdXRSb290ID09PSB0cnVlKTtcbiAgICBpZiAocG9zID09PSAtMSkge1xuICAgICAgcG9zID0gbHMuZmluZEluZGV4KHcgPT4gdy5saW5rIS5pbmNsdWRlcygnZGFzaGJvYXJkJykpO1xuICAgICAgcG9zID0gKHBvcyAhPT0gLTEgPyBwb3MgOiAtMSkgKyAxO1xuICAgICAgY29uc3Qgc2hvcnRjdXRNZW51ID0ge1xuICAgICAgICB0ZXh0OiAn5b+r5o236I+c5Y2VJyxcbiAgICAgICAgaTE4bjogJ3Nob3J0Y3V0JyxcbiAgICAgICAgaWNvbjogJ2ljb24tcm9ja2V0JyxcbiAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgfSBhcyBNZW51O1xuICAgICAgdGhpcy5kYXRhWzBdLmNoaWxkcmVuIS5zcGxpY2UocG9zLCAwLCBzaG9ydGN1dE1lbnUpO1xuICAgIH1cbiAgICBsZXQgX2RhdGEgPSB0aGlzLmRhdGFbMF0uY2hpbGRyZW4hW3Bvc107XG4gICAgaWYgKF9kYXRhLmkxOG4gJiYgdGhpcy5pMThuU3J2KSBfZGF0YS50ZXh0ID0gdGhpcy5pMThuU3J2LmZhbnlpKF9kYXRhLmkxOG4pO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcmVmZXItb2JqZWN0LXNwcmVhZFxuICAgIF9kYXRhID0gT2JqZWN0LmFzc2lnbihfZGF0YSwge1xuICAgICAgc2hvcnRjdXRSb290OiB0cnVlLFxuICAgICAgX2lkOiAtMSxcbiAgICAgIF9wYXJlbnQ6IG51bGwsXG4gICAgICBfZGVwdGg6IDEsXG4gICAgfSBhcyBNZW51KTtcbiAgICBfZGF0YS5jaGlsZHJlbiA9IHNob3J0Y3V0cy5tYXAoaSA9PiB7XG4gICAgICBpLl9kZXB0aCA9IDI7XG4gICAgICBpLl9wYXJlbnQgPSBfZGF0YTtcbiAgICAgIHJldHVybiBpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IG1lbnVzKCk6IE1lbnVbXSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmuIXnqbroj5zljZVcbiAgICovXG4gIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIHRoaXMuX2NoYW5nZSQubmV4dCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgZ2V0SGl0KGRhdGE6IE1lbnVbXSwgdXJsOiBzdHJpbmcsIHJlY3Vyc2l2ZTogYm9vbGVhbiA9IGZhbHNlLCBjYjogKChpOiBNZW51KSA9PiB2b2lkKSB8IG51bGwgPSBudWxsKTogTWVudSB8IG51bGwge1xuICAgIGxldCBpdGVtOiBNZW51IHwgbnVsbCA9IG51bGw7XG5cbiAgICB3aGlsZSAoIWl0ZW0gJiYgdXJsKSB7XG4gICAgICB0aGlzLnZpc2l0KGRhdGEsIGkgPT4ge1xuICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICBjYihpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaS5saW5rICE9IG51bGwgJiYgaS5saW5rID09PSB1cmwpIHtcbiAgICAgICAgICBpdGVtID0gaTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICghcmVjdXJzaXZlKSBicmVhaztcblxuICAgICAgaWYgKC9bPztdL2cudGVzdCh1cmwpKSB7XG4gICAgICAgIHVybCA9IHVybC5zcGxpdCgvWz87XS9nKVswXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVybCA9IHVybC5zcGxpdCgnLycpLnNsaWNlKDAsIC0xKS5qb2luKCcvJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICAvKipcbiAgICog5qC55o2uVVJM6K6+572u6I+c5Y2VIGBfb3BlbmAg5bGe5oCnXG4gICAqIC0g6IulIGByZWN1cnNpdmU6IHRydWVgIOWImeS8muiHquWKqOWQkeS4iumAkuW9kuafpeaJvlxuICAgKiAgLSDoj5zljZXmlbDmja7mupDljIXlkKsgYC93YXJlYO+8jOWImSBgL3dhcmUvMWAg5Lmf6KeG5Li6IGAvd2FyZWAg6aG5XG4gICAqL1xuICBvcGVuZWRCeVVybCh1cmw6IHN0cmluZyB8IG51bGwsIHJlY3Vyc2l2ZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgaWYgKCF1cmwpIHJldHVybjtcblxuICAgIGxldCBmaW5kSXRlbSA9IHRoaXMuZ2V0SGl0KHRoaXMuZGF0YSwgdXJsLCByZWN1cnNpdmUsIGkgPT4ge1xuICAgICAgaS5fc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIGkuX29wZW4gPSBmYWxzZTtcbiAgICB9KTtcbiAgICBpZiAoZmluZEl0ZW0gPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgZG8ge1xuICAgICAgZmluZEl0ZW0uX3NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIGZpbmRJdGVtLl9vcGVuID0gdHJ1ZTtcbiAgICAgIGZpbmRJdGVtID0gZmluZEl0ZW0uX3BhcmVudCE7XG4gICAgfSB3aGlsZSAoZmluZEl0ZW0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOagueaNrnVybOiOt+WPluiPnOWNleWIl+ihqFxuICAgKiAtIOiLpSBgcmVjdXJzaXZlOiB0cnVlYCDliJnkvJroh6rliqjlkJHkuIrpgJLlvZLmn6Xmib5cbiAgICogIC0g6I+c5Y2V5pWw5o2u5rqQ5YyF5ZCrIGAvd2FyZWDvvIzliJkgYC93YXJlLzFgIOS5n+inhuS4uiBgL3dhcmVgIOmhuVxuICAgKi9cbiAgZ2V0UGF0aEJ5VXJsKHVybDogc3RyaW5nLCByZWN1cnNpdmU6IGJvb2xlYW4gPSBmYWxzZSk6IE1lbnVbXSB7XG4gICAgY29uc3QgcmV0OiBNZW51W10gPSBbXTtcbiAgICBsZXQgaXRlbSA9IHRoaXMuZ2V0SGl0KHRoaXMuZGF0YSwgdXJsLCByZWN1cnNpdmUpO1xuXG4gICAgaWYgKCFpdGVtKSByZXR1cm4gcmV0O1xuXG4gICAgZG8ge1xuICAgICAgcmV0LnNwbGljZSgwLCAwLCBpdGVtKTtcbiAgICAgIGl0ZW0gPSBpdGVtLl9wYXJlbnQhO1xuICAgIH0gd2hpbGUgKGl0ZW0pO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbWVudSBiYXNlZCBvbiBga2V5YFxuICAgKi9cbiAgZ2V0SXRlbShrZXk6IHN0cmluZyk6IE1lbnUgfCBudWxsIHtcbiAgICBsZXQgcmVzOiBNZW51IHwgbnVsbCA9IG51bGw7XG4gICAgdGhpcy52aXNpdCh0aGlzLmRhdGEsIGl0ZW0gPT4ge1xuICAgICAgaWYgKHJlcyA9PSBudWxsICYmIGl0ZW0ua2V5ID09PSBrZXkpIHtcbiAgICAgICAgcmVzID0gaXRlbTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBtZW51IGJhc2VkIG9uIGBrZXlgXG4gICAqL1xuICBzZXRJdGVtKGtleTogc3RyaW5nLCB2YWx1ZTogTWVudSk6IHZvaWQge1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmdldEl0ZW0oa2V5KTtcbiAgICBpZiAoaXRlbSA9PSBudWxsKSByZXR1cm47XG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaChrID0+IHtcbiAgICAgIGl0ZW1ba10gPSB2YWx1ZVtrXTtcbiAgICB9KTtcbiAgICB0aGlzLmZpeEl0ZW0oaXRlbSk7XG5cbiAgICB0aGlzLl9jaGFuZ2UkLm5leHQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2NoYW5nZSQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==