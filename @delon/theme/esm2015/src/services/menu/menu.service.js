/**
 * @fileoverview added by tsickle
 * Generated from: src/services/menu/menu.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            item.__id = i++;
            item.__parent = parent;
            item._depth = depth;
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
            item._type = item.externalLink ? 2 : 1;
            if (item.children && item.children.length > 0) {
                item._type = 3;
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
        _data = Object.assign(_data, {
            shortcutRoot: true,
            __id: -1,
            __parent: null,
            _type: 3,
            _depth: 1,
        });
        _data.children = shortcuts.map((/**
         * @param {?} i
         * @return {?}
         */
        i => {
            i._depth = 2;
            i.__parent = _data;
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
            url = url.split('/').slice(0, -1).join('/');
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
            findItem = findItem.__parent;
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
            item = item.__parent;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3NlcnZpY2VzL21lbnUvbWVudS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQWEsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDeEMsT0FBTyxFQUFFLGVBQWUsRUFBNEIsTUFBTSxNQUFNLENBQUM7QUFDakUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBb0IsTUFBTSxjQUFjLENBQUM7Ozs7Ozs7QUFPbEUsTUFBTSxPQUFPLFdBQVc7Ozs7O0lBTXRCLFlBR1UsT0FBeUIsRUFDYixVQUFzQjtRQURsQyxZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUNiLGVBQVUsR0FBVixVQUFVLENBQVk7UUFUcEMsYUFBUSxHQUE0QixJQUFJLGVBQWUsQ0FBUyxFQUFFLENBQUMsQ0FBQztRQUdwRSxTQUFJLEdBQVcsRUFBRSxDQUFDO1FBUXhCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFDLENBQUM7SUFDbEUsQ0FBQzs7OztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7SUFFRCxLQUFLLENBQUMsSUFBWSxFQUFFLFFBQXdFOztjQUNwRixJQUFJOzs7Ozs7UUFBRyxDQUFDLElBQVksRUFBRSxVQUF1QixFQUFFLEtBQWEsRUFBRSxFQUFFO1lBQ3BFLEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxFQUFFO2dCQUN2QixRQUFRLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDbEMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDdEM7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7aUJBQ3BCO2FBQ0Y7UUFDSCxDQUFDLENBQUE7UUFFRCxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELEdBQUcsQ0FBQyxLQUFhO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7OztJQUtELE1BQU0sQ0FBQyxRQUF5RTs7WUFDMUUsQ0FBQyxHQUFHLENBQUM7O2NBQ0gsU0FBUyxHQUFXLEVBQUU7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSTs7Ozs7O1FBQUUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQzVDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFFcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO2dCQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWTtnQkFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztZQUUvQyxRQUFRO1lBQ1IsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNkLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7b0JBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2lCQUN2QjtnQkFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtvQkFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7aUJBQzVCO2FBQ0Y7WUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzdDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2FBQ2hCO1lBRUQsT0FBTztZQUNQLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTs7b0JBQzdCLElBQUksR0FBRyxPQUFPOztvQkFDZCxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUk7Z0JBQ3JCLG9DQUFvQztnQkFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUNsQyxJQUFJLEdBQUcsTUFBTSxDQUFDO29CQUNkLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQzdDO3FCQUFNLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ3pDLElBQUksR0FBRyxLQUFLLENBQUM7aUJBQ2Q7Z0JBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxtQkFBQSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBTyxDQUFDO2FBQ3BDO1lBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTtnQkFDckIsSUFBSSxDQUFDLElBQUksbUJBQUssS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxJQUFLLENBQUMsbUJBQUEsSUFBSSxDQUFDLElBQUksRUFBWSxDQUFDLENBQUUsQ0FBQzthQUMzRTtZQUVELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFFbEYsUUFBUTtZQUNSLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUM7WUFFbEMsU0FBUztZQUNULElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBRXBFLFdBQVc7WUFDWCxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUU3RSxNQUFNO1lBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBRXJGLFdBQVc7WUFDWCxJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksSUFBSSxNQUFNLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRTtnQkFDcEUsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN0QjtZQUVELElBQUksUUFBUTtnQkFBRSxRQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM5QyxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7Ozs7Ozs7O0lBU08sWUFBWSxDQUFDLFNBQWlCO1FBQ3BDLElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3BELE9BQU87U0FDUjs7Y0FFSyxFQUFFLEdBQUcsbUJBQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQVU7O1lBQ3RDLEdBQUcsR0FBRyxFQUFFLENBQUMsU0FBUzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksS0FBSyxJQUFJLEVBQUM7UUFDcEQsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDZCxHQUFHLEdBQUcsRUFBRSxDQUFDLFNBQVM7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLG1CQUFBLENBQUMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUMsQ0FBQztZQUN2RCxHQUFHLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7O2tCQUM1QixZQUFZLEdBQUcsbUJBQUE7Z0JBQ25CLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxVQUFVO2dCQUNoQixJQUFJLEVBQUUsYUFBYTtnQkFDbkIsUUFBUSxFQUFFLEVBQUU7YUFDYixFQUFRO1lBQ1QsbUJBQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQztTQUNyRDs7WUFDRyxLQUFLLEdBQUcsbUJBQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUMsQ0FBQyxHQUFHLENBQUM7UUFDdkMsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUUsZ0RBQWdEO1FBQ2hELEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUMzQixZQUFZLEVBQUUsSUFBSTtZQUNsQixJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ1IsUUFBUSxFQUFFLElBQUk7WUFDZCxLQUFLLEVBQUUsQ0FBQztZQUNSLE1BQU0sRUFBRSxDQUFDO1NBQ1YsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2pDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2IsQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDbkIsT0FBTyxDQUFDLENBQUM7UUFDWCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFLRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7Ozs7SUFFRCxNQUFNLENBQUMsSUFBWSxFQUFFLEdBQVcsRUFBRSxTQUFTLEdBQUcsS0FBSyxFQUFFLEtBQWlDLElBQUk7O1lBQ3BGLElBQUksR0FBZ0IsSUFBSTtRQUU1QixPQUFPLENBQUMsSUFBSSxJQUFJLEdBQUcsRUFBRTtZQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7Ozs7WUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDbkIsSUFBSSxFQUFFLEVBQUU7b0JBQ04sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNQO2dCQUNELElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxHQUFHLEVBQUU7b0JBQ3BDLElBQUksR0FBRyxDQUFDLENBQUM7aUJBQ1Y7WUFDSCxDQUFDLEVBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxTQUFTO2dCQUFFLE1BQU07WUFFdEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM3QztRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7Ozs7O0lBT0QsV0FBVyxDQUFDLEdBQWtCLEVBQUUsU0FBUyxHQUFHLEtBQUs7UUFDL0MsSUFBSSxDQUFDLEdBQUc7WUFBRSxPQUFPOztZQUViLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFNBQVM7Ozs7UUFBRSxDQUFDLENBQUMsRUFBRTtZQUN4RCxDQUFDLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUNwQixDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNsQixDQUFDLEVBQUM7UUFDRixJQUFJLFFBQVEsSUFBSSxJQUFJO1lBQUUsT0FBTztRQUU3QixHQUFHO1lBQ0QsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDMUIsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDdEIsUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7U0FDOUIsUUFBUSxRQUFRLEVBQUU7SUFDckIsQ0FBQzs7Ozs7Ozs7O0lBT0QsWUFBWSxDQUFDLEdBQVcsRUFBRSxTQUFTLEdBQUcsS0FBSzs7Y0FDbkMsR0FBRyxHQUFXLEVBQUU7O1lBQ2xCLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQztRQUVqRCxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU8sR0FBRyxDQUFDO1FBRXRCLEdBQUc7WUFDRCxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdkIsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDdEIsUUFBUSxJQUFJLEVBQUU7UUFFZixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Ozs7OztJQUtELE9BQU8sQ0FBQyxHQUFXOztZQUNiLEdBQUcsR0FBZ0IsSUFBSTtRQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJOzs7O1FBQUUsSUFBSSxDQUFDLEVBQUU7WUFDM0IsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFFO2dCQUNuQyxHQUFHLEdBQUcsSUFBSSxDQUFDO2FBQ1o7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7Ozs7OztJQUtELE9BQU8sQ0FBQyxHQUFXLEVBQUUsS0FBVzs7Y0FDeEIsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQzlCLElBQUksSUFBSSxJQUFJLElBQUk7WUFBRSxPQUFPO1FBRXpCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7O1lBalFGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7NENBUTdCLFFBQVEsWUFDUixNQUFNLFNBQUMsZ0JBQWdCO1lBbEJuQixVQUFVLHVCQW9CZCxRQUFROzs7Ozs7OztJQVRYLCtCQUE0RTs7Ozs7SUFDNUUsNEJBQTRCOzs7OztJQUU1QiwyQkFBMEI7Ozs7O0lBR3hCLDhCQUVpQzs7Ozs7SUFDakMsaUNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPbkRlc3Ryb3ksIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBQ0xTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL2FjbCc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBTEFJTl9JMThOX1RPS0VOLCBBbGFpbkkxOE5TZXJ2aWNlIH0gZnJvbSAnLi4vaTE4bi9pMThuJztcbmltcG9ydCB7IE1lbnUsIE1lbnVJY29uIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG4vKipcbiAqIOiPnOWNleacjeWKoe+8jFvlnKjnur/mlofmoaNdKGh0dHBzOi8vbmctYWxhaW4uY29tL3RoZW1lL21lbnUpXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTWVudVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9jaGFuZ2UkOiBCZWhhdmlvclN1YmplY3Q8TWVudVtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TWVudVtdPihbXSk7XG4gIHByaXZhdGUgaTE4biQ6IFN1YnNjcmlwdGlvbjtcblxuICBwcml2YXRlIGRhdGE6IE1lbnVbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKVxuICAgIHByaXZhdGUgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGFjbFNlcnZpY2U6IEFDTFNlcnZpY2UsXG4gICkge1xuICAgIHRoaXMuaTE4biQgPSB0aGlzLmkxOG5TcnYuY2hhbmdlLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlc3VtZSgpKTtcbiAgfVxuXG4gIGdldCBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxNZW51W10+IHtcbiAgICByZXR1cm4gdGhpcy5fY2hhbmdlJC5waXBlKHNoYXJlKCkpO1xuICB9XG5cbiAgdmlzaXQoZGF0YTogTWVudVtdLCBjYWxsYmFjazogKGl0ZW06IE1lbnUsIHBhcmVudE1lbnVtOiBNZW51IHwgbnVsbCwgZGVwdGg/OiBudW1iZXIpID0+IHZvaWQpIHtcbiAgICBjb25zdCBpbkZuID0gKGxpc3Q6IE1lbnVbXSwgcGFyZW50TWVudTogTWVudSB8IG51bGwsIGRlcHRoOiBudW1iZXIpID0+IHtcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBsaXN0KSB7XG4gICAgICAgIGNhbGxiYWNrKGl0ZW0sIHBhcmVudE1lbnUsIGRlcHRoKTtcbiAgICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaW5GbihpdGVtLmNoaWxkcmVuLCBpdGVtLCBkZXB0aCArIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW0uY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpbkZuKGRhdGEsIG51bGwsIDApO1xuICB9XG5cbiAgYWRkKGl0ZW1zOiBNZW51W10pIHtcbiAgICB0aGlzLmRhdGEgPSBpdGVtcztcbiAgICB0aGlzLnJlc3VtZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOmHjee9ruiPnOWNle+8jOWPr+iDvUkxOE7jgIHnlKjmiLfmnYPpmZDlj5jliqjml7bpnIDopoHosIPnlKjliLfmlrBcbiAgICovXG4gIHJlc3VtZShjYWxsYmFjaz86IChpdGVtOiBNZW51LCBwYXJlbnRNZW51bTogTWVudSB8IG51bGwsIGRlcHRoPzogbnVtYmVyKSA9PiB2b2lkKSB7XG4gICAgbGV0IGkgPSAxO1xuICAgIGNvbnN0IHNob3J0Y3V0czogTWVudVtdID0gW107XG4gICAgdGhpcy52aXNpdCh0aGlzLmRhdGEsIChpdGVtLCBwYXJlbnQsIGRlcHRoKSA9PiB7XG4gICAgICBpdGVtLl9faWQgPSBpKys7XG4gICAgICBpdGVtLl9fcGFyZW50ID0gcGFyZW50O1xuICAgICAgaXRlbS5fZGVwdGggPSBkZXB0aDtcblxuICAgICAgaWYgKCFpdGVtLmxpbmspIGl0ZW0ubGluayA9ICcnO1xuICAgICAgaWYgKCFpdGVtLmV4dGVybmFsTGluaykgaXRlbS5leHRlcm5hbExpbmsgPSAnJztcblxuICAgICAgLy8gYmFkZ2VcbiAgICAgIGlmIChpdGVtLmJhZGdlKSB7XG4gICAgICAgIGlmIChpdGVtLmJhZGdlRG90ICE9PSB0cnVlKSB7XG4gICAgICAgICAgaXRlbS5iYWRnZURvdCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXRlbS5iYWRnZVN0YXR1cykge1xuICAgICAgICAgIGl0ZW0uYmFkZ2VTdGF0dXMgPSAnZXJyb3InO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGl0ZW0uX3R5cGUgPSBpdGVtLmV4dGVybmFsTGluayA/IDIgOiAxO1xuICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIGl0ZW0uX3R5cGUgPSAzO1xuICAgICAgfVxuXG4gICAgICAvLyBpY29uXG4gICAgICBpZiAodHlwZW9mIGl0ZW0uaWNvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbGV0IHR5cGUgPSAnY2xhc3MnO1xuICAgICAgICBsZXQgdmFsdWUgPSBpdGVtLmljb247XG4gICAgICAgIC8vIGNvbXBhdGlibGUgYGFudGljb24gYW50aWNvbi11c2VyYFxuICAgICAgICBpZiAofml0ZW0uaWNvbi5pbmRleE9mKGBhbnRpY29uLWApKSB7XG4gICAgICAgICAgdHlwZSA9ICdpY29uJztcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCctJykuc2xpY2UoMSkuam9pbignLScpO1xuICAgICAgICB9IGVsc2UgaWYgKC9eaHR0cHM/OlxcL1xcLy8udGVzdChpdGVtLmljb24pKSB7XG4gICAgICAgICAgdHlwZSA9ICdpbWcnO1xuICAgICAgICB9XG4gICAgICAgIGl0ZW0uaWNvbiA9IHsgdHlwZSwgdmFsdWUgfSBhcyBhbnk7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbS5pY29uICE9IG51bGwpIHtcbiAgICAgICAgaXRlbS5pY29uID0geyB0aGVtZTogJ291dGxpbmUnLCBzcGluOiBmYWxzZSwgLi4uKGl0ZW0uaWNvbiBhcyBNZW51SWNvbikgfTtcbiAgICAgIH1cblxuICAgICAgaXRlbS50ZXh0ID0gaXRlbS5pMThuICYmIHRoaXMuaTE4blNydiA/IHRoaXMuaTE4blNydi5mYW55aShpdGVtLmkxOG4pIDogaXRlbS50ZXh0O1xuXG4gICAgICAvLyBncm91cFxuICAgICAgaXRlbS5ncm91cCA9IGl0ZW0uZ3JvdXAgIT09IGZhbHNlO1xuXG4gICAgICAvLyBoaWRkZW5cbiAgICAgIGl0ZW0uX2hpZGRlbiA9IHR5cGVvZiBpdGVtLmhpZGUgPT09ICd1bmRlZmluZWQnID8gZmFsc2UgOiBpdGVtLmhpZGU7XG5cbiAgICAgIC8vIGRpc2FibGVkXG4gICAgICBpdGVtLmRpc2FibGVkID0gdHlwZW9mIGl0ZW0uZGlzYWJsZWQgPT09ICd1bmRlZmluZWQnID8gZmFsc2UgOiBpdGVtLmRpc2FibGVkO1xuXG4gICAgICAvLyBhY2xcbiAgICAgIGl0ZW0uX2FjbFJlc3VsdCA9IGl0ZW0uYWNsICYmIHRoaXMuYWNsU2VydmljZSA/IHRoaXMuYWNsU2VydmljZS5jYW4oaXRlbS5hY2wpIDogdHJ1ZTtcblxuICAgICAgLy8gc2hvcnRjdXRcbiAgICAgIGlmIChwYXJlbnQgJiYgaXRlbS5zaG9ydGN1dCA9PT0gdHJ1ZSAmJiBwYXJlbnQuc2hvcnRjdXRSb290ICE9PSB0cnVlKSB7XG4gICAgICAgIHNob3J0Y3V0cy5wdXNoKGl0ZW0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGl0ZW0sIHBhcmVudCwgZGVwdGgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5sb2FkU2hvcnRjdXQoc2hvcnRjdXRzKTtcbiAgICB0aGlzLl9jaGFuZ2UkLm5leHQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDliqDovb3lv6vmjbfoj5zljZXvvIzliqDovb3kvY3nva7op4TliJnlpoLkuIvvvJpcbiAgICogMeOAgee7n+S4gOWcqOS4i+aghzDnmoToioLngrnkuIvvvIjljbPjgJDkuLvlr7zoiKrjgJHoioLngrnkuIvmlrnvvIlcbiAgICogICAgICAx44CB6IulIGNoaWxkcmVuIOWtmOWcqCDjgJBzaG9ydGN1dFJvb3Q6IHRydWXjgJHliJnmnIDkvJjlhYjjgJDmjqjojZDjgJHov5nnp43mlrnlvI9cbiAgICogICAgICAy44CB5ZCm5YiZ5p+l5om+5bim5pyJ44CQZGFzaGJvYXJk44CR5a2X5qC36ZO+5o6l77yM6Iul5a2Y5Zyo5YiZ5Zyo5q2k6I+c5Y2V55qE5LiL5pa55Yib5bu65b+r5o235YWl5Y+jXG4gICAqICAgICAgM+OAgeWQpuWImeaUvuWcqDDoioLngrnkvY3nva5cbiAgICovXG4gIHByaXZhdGUgbG9hZFNob3J0Y3V0KHNob3J0Y3V0czogTWVudVtdKSB7XG4gICAgaWYgKHNob3J0Y3V0cy5sZW5ndGggPT09IDAgfHwgdGhpcy5kYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGxzID0gdGhpcy5kYXRhWzBdLmNoaWxkcmVuIGFzIE1lbnVbXTtcbiAgICBsZXQgcG9zID0gbHMuZmluZEluZGV4KHcgPT4gdy5zaG9ydGN1dFJvb3QgPT09IHRydWUpO1xuICAgIGlmIChwb3MgPT09IC0xKSB7XG4gICAgICBwb3MgPSBscy5maW5kSW5kZXgodyA9PiB3LmxpbmshLmluY2x1ZGVzKCdkYXNoYm9hcmQnKSk7XG4gICAgICBwb3MgPSAocG9zICE9PSAtMSA/IHBvcyA6IC0xKSArIDE7XG4gICAgICBjb25zdCBzaG9ydGN1dE1lbnUgPSB7XG4gICAgICAgIHRleHQ6ICflv6vmjbfoj5zljZUnLFxuICAgICAgICBpMThuOiAnc2hvcnRjdXQnLFxuICAgICAgICBpY29uOiAnaWNvbi1yb2NrZXQnLFxuICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICB9IGFzIE1lbnU7XG4gICAgICB0aGlzLmRhdGFbMF0uY2hpbGRyZW4hLnNwbGljZShwb3MsIDAsIHNob3J0Y3V0TWVudSk7XG4gICAgfVxuICAgIGxldCBfZGF0YSA9IHRoaXMuZGF0YVswXS5jaGlsZHJlbiFbcG9zXTtcbiAgICBpZiAoX2RhdGEuaTE4biAmJiB0aGlzLmkxOG5TcnYpIF9kYXRhLnRleHQgPSB0aGlzLmkxOG5TcnYuZmFueWkoX2RhdGEuaTE4bik7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1vYmplY3Qtc3ByZWFkXG4gICAgX2RhdGEgPSBPYmplY3QuYXNzaWduKF9kYXRhLCB7XG4gICAgICBzaG9ydGN1dFJvb3Q6IHRydWUsXG4gICAgICBfX2lkOiAtMSxcbiAgICAgIF9fcGFyZW50OiBudWxsLFxuICAgICAgX3R5cGU6IDMsXG4gICAgICBfZGVwdGg6IDEsXG4gICAgfSk7XG4gICAgX2RhdGEuY2hpbGRyZW4gPSBzaG9ydGN1dHMubWFwKGkgPT4ge1xuICAgICAgaS5fZGVwdGggPSAyO1xuICAgICAgaS5fX3BhcmVudCA9IF9kYXRhO1xuICAgICAgcmV0dXJuIGk7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgbWVudXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmuIXnqbroj5zljZVcbiAgICovXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIHRoaXMuX2NoYW5nZSQubmV4dCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgZ2V0SGl0KGRhdGE6IE1lbnVbXSwgdXJsOiBzdHJpbmcsIHJlY3Vyc2l2ZSA9IGZhbHNlLCBjYjogKChpOiBNZW51KSA9PiB2b2lkKSB8IG51bGwgPSBudWxsKTogTWVudSB8IG51bGwge1xuICAgIGxldCBpdGVtOiBNZW51IHwgbnVsbCA9IG51bGw7XG5cbiAgICB3aGlsZSAoIWl0ZW0gJiYgdXJsKSB7XG4gICAgICB0aGlzLnZpc2l0KGRhdGEsIGkgPT4ge1xuICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICBjYihpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaS5saW5rICE9IG51bGwgJiYgaS5saW5rID09PSB1cmwpIHtcbiAgICAgICAgICBpdGVtID0gaTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICghcmVjdXJzaXZlKSBicmVhaztcblxuICAgICAgdXJsID0gdXJsLnNwbGl0KCcvJykuc2xpY2UoMCwgLTEpLmpvaW4oJy8nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmoLnmja5VUkzorr7nva7oj5zljZUgYF9vcGVuYCDlsZ7mgKdcbiAgICogLSDoi6UgYHJlY3Vyc2l2ZTogdHJ1ZWAg5YiZ5Lya6Ieq5Yqo5ZCR5LiK6YCS5b2S5p+l5om+XG4gICAqICAtIOiPnOWNleaVsOaNrua6kOWMheWQqyBgL3dhcmVg77yM5YiZIGAvd2FyZS8xYCDkuZ/op4bkuLogYC93YXJlYCDpoblcbiAgICovXG4gIG9wZW5lZEJ5VXJsKHVybDogc3RyaW5nIHwgbnVsbCwgcmVjdXJzaXZlID0gZmFsc2UpIHtcbiAgICBpZiAoIXVybCkgcmV0dXJuO1xuXG4gICAgbGV0IGZpbmRJdGVtID0gdGhpcy5nZXRIaXQodGhpcy5kYXRhLCB1cmwsIHJlY3Vyc2l2ZSwgaSA9PiB7XG4gICAgICBpLl9zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgaS5fb3BlbiA9IGZhbHNlO1xuICAgIH0pO1xuICAgIGlmIChmaW5kSXRlbSA9PSBudWxsKSByZXR1cm47XG5cbiAgICBkbyB7XG4gICAgICBmaW5kSXRlbS5fc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgZmluZEl0ZW0uX29wZW4gPSB0cnVlO1xuICAgICAgZmluZEl0ZW0gPSBmaW5kSXRlbS5fX3BhcmVudDtcbiAgICB9IHdoaWxlIChmaW5kSXRlbSk7XG4gIH1cblxuICAvKipcbiAgICog5qC55o2udXJs6I635Y+W6I+c5Y2V5YiX6KGoXG4gICAqIC0g6IulIGByZWN1cnNpdmU6IHRydWVgIOWImeS8muiHquWKqOWQkeS4iumAkuW9kuafpeaJvlxuICAgKiAgLSDoj5zljZXmlbDmja7mupDljIXlkKsgYC93YXJlYO+8jOWImSBgL3dhcmUvMWAg5Lmf6KeG5Li6IGAvd2FyZWAg6aG5XG4gICAqL1xuICBnZXRQYXRoQnlVcmwodXJsOiBzdHJpbmcsIHJlY3Vyc2l2ZSA9IGZhbHNlKTogTWVudVtdIHtcbiAgICBjb25zdCByZXQ6IE1lbnVbXSA9IFtdO1xuICAgIGxldCBpdGVtID0gdGhpcy5nZXRIaXQodGhpcy5kYXRhLCB1cmwsIHJlY3Vyc2l2ZSk7XG5cbiAgICBpZiAoIWl0ZW0pIHJldHVybiByZXQ7XG5cbiAgICBkbyB7XG4gICAgICByZXQuc3BsaWNlKDAsIDAsIGl0ZW0pO1xuICAgICAgaXRlbSA9IGl0ZW0uX19wYXJlbnQ7XG4gICAgfSB3aGlsZSAoaXRlbSk7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBtZW51IGJhc2VkIG9uIGBrZXlgXG4gICAqL1xuICBnZXRJdGVtKGtleTogc3RyaW5nKTogTWVudSB8IG51bGwge1xuICAgIGxldCByZXM6IE1lbnUgfCBudWxsID0gbnVsbDtcbiAgICB0aGlzLnZpc2l0KHRoaXMuZGF0YSwgaXRlbSA9PiB7XG4gICAgICBpZiAocmVzID09IG51bGwgJiYgaXRlbS5rZXkgPT09IGtleSkge1xuICAgICAgICByZXMgPSBpdGVtO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0IG1lbnUgYmFzZWQgb24gYGtleWBcbiAgICovXG4gIHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBNZW51KTogdm9pZCB7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuZ2V0SXRlbShrZXkpO1xuICAgIGlmIChpdGVtID09IG51bGwpIHJldHVybjtcblxuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKGsgPT4ge1xuICAgICAgaXRlbVtrXSA9IHZhbHVlW2tdO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fY2hhbmdlJC5uZXh0KHRoaXMuZGF0YSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9jaGFuZ2UkLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5pMThuJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=