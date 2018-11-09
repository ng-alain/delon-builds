/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject, Optional } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { share } from 'rxjs/operators';
import { ACLService } from '@delon/acl';
import { ALAIN_I18N_TOKEN } from '../i18n/i18n';
import * as i0 from "@angular/core";
import * as i1 from "../i18n/i18n";
import * as i2 from "@delon/acl";
var MenuService = /** @class */ (function () {
    function MenuService(i18nSrv, aclService) {
        var _this = this;
        this.i18nSrv = i18nSrv;
        this.aclService = aclService;
        this._change$ = new BehaviorSubject([]);
        this.data = [];
        if (this.i18nSrv)
            this.i18n$ = this.i18nSrv.change.subscribe(function () { return _this.resume(); });
    }
    Object.defineProperty(MenuService.prototype, "change", {
        get: /**
         * @return {?}
         */
        function () {
            return this._change$.pipe(share());
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} callback
     * @return {?}
     */
    MenuService.prototype.visit = /**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        /** @type {?} */
        var inFn = function (list, parentMenu, depth) {
            var e_1, _a;
            try {
                for (var list_1 = tslib_1.__values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                    var item = list_1_1.value;
                    callback(item, parentMenu, depth);
                    if (item.children && item.children.length > 0) {
                        inFn(item.children, item, depth + 1);
                    }
                    else {
                        item.children = [];
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        inFn(this.data, null, 0);
    };
    /**
     * @param {?} items
     * @return {?}
     */
    MenuService.prototype.add = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        this.data = items;
        this.resume();
    };
    /**
     * 重置菜单，可能I18N、用户权限变动时需要调用刷新
     */
    /**
     * 重置菜单，可能I18N、用户权限变动时需要调用刷新
     * @param {?=} callback
     * @return {?}
     */
    MenuService.prototype.resume = /**
     * 重置菜单，可能I18N、用户权限变动时需要调用刷新
     * @param {?=} callback
     * @return {?}
     */
    function (callback) {
        var _this = this;
        /** @type {?} */
        var i = 1;
        /** @type {?} */
        var shortcuts = [];
        this.visit(function (item, parent, depth) {
            item.__id = i++;
            item.__parent = parent;
            item._depth = depth;
            if (!item.link)
                item.link = '';
            if (typeof item.linkExact === 'undefined')
                item.linkExact = false;
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
                var type = 'class';
                /** @type {?} */
                var value = item.icon;
                // compatible `anticon anticon-user`
                if (~item.icon.indexOf("anticon-")) {
                    type = 'icon';
                    value = value
                        .split('-')
                        .slice(1)
                        .join('-');
                }
                else if (/^https?:\/\//.test(item.icon)) {
                    type = 'img';
                }
                item.icon = (/** @type {?} */ ({ type: type, value: value }));
            }
            if (item.icon != null) {
                item.icon = Object.assign({ theme: 'outline', spin: false }, item.icon);
            }
            item.text =
                item.i18n && _this.i18nSrv ? _this.i18nSrv.fanyi(item.i18n) : item.text;
            // group
            item.group = item.group !== false;
            // hidden
            item._hidden = typeof item.hide === 'undefined' ? false : item.hide;
            // acl
            if (item.acl && _this.aclService) {
                item._hidden = !_this.aclService.can(item.acl);
            }
            // shortcut
            if (parent && item.shortcut === true && parent.shortcutRoot !== true) {
                shortcuts.push(item);
            }
            if (callback)
                callback(item, parent, depth);
        });
        this.loadShortcut(shortcuts);
        this._change$.next(this.data);
    };
    /**
     * 加载快捷菜单，加载位置规则如下：
     * 1、统一在下标0的节点下（即【主导航】节点下方）
     *      1、若 children 存在 【shortcutRoot: true】则最优先【推荐】这种方式
     *      2、否则查找带有【dashboard】字样链接，若存在则在此菜单的下方创建快捷入口
     *      3、否则放在0节点位置
     */
    /**
     * 加载快捷菜单，加载位置规则如下：
     * 1、统一在下标0的节点下（即【主导航】节点下方）
     *      1、若 children 存在 【shortcutRoot: true】则最优先【推荐】这种方式
     *      2、否则查找带有【dashboard】字样链接，若存在则在此菜单的下方创建快捷入口
     *      3、否则放在0节点位置
     * @param {?} shortcuts
     * @return {?}
     */
    MenuService.prototype.loadShortcut = /**
     * 加载快捷菜单，加载位置规则如下：
     * 1、统一在下标0的节点下（即【主导航】节点下方）
     *      1、若 children 存在 【shortcutRoot: true】则最优先【推荐】这种方式
     *      2、否则查找带有【dashboard】字样链接，若存在则在此菜单的下方创建快捷入口
     *      3、否则放在0节点位置
     * @param {?} shortcuts
     * @return {?}
     */
    function (shortcuts) {
        if (shortcuts.length === 0 || this.data.length === 0) {
            return;
        }
        /** @type {?} */
        var ls = this.data[0].children;
        /** @type {?} */
        var pos = ls.findIndex(function (w) { return w.shortcutRoot === true; });
        if (pos === -1) {
            pos = ls.findIndex(function (w) { return w.link.includes('dashboard'); });
            pos = (pos !== -1 ? pos : -1) + 1;
            /** @type {?} */
            var shortcutMenu = (/** @type {?} */ ({
                text: '快捷菜单',
                i18n: 'shortcut',
                icon: 'icon-rocket',
                children: [],
            }));
            this.data[0].children.splice(pos, 0, shortcutMenu);
        }
        /** @type {?} */
        var _data = this.data[0].children[pos];
        if (_data.i18n && this.i18nSrv)
            _data.text = this.i18nSrv.fanyi(_data.i18n);
        _data = Object.assign(_data, {
            shortcutRoot: true,
            _type: 3,
            __id: -1,
            _depth: 1,
            __parent: null
        });
        _data.children = shortcuts.map(function (i) {
            i._depth = 2;
            i.__parent = _data;
            return i;
        });
    };
    Object.defineProperty(MenuService.prototype, "menus", {
        get: /**
         * @return {?}
         */
        function () {
            return this.data;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 清空菜单
     */
    /**
     * 清空菜单
     * @return {?}
     */
    MenuService.prototype.clear = /**
     * 清空菜单
     * @return {?}
     */
    function () {
        this.data = [];
        this._change$.next(this.data);
    };
    /**
     * @param {?} url
     * @param {?=} recursive
     * @param {?=} cb
     * @return {?}
     */
    MenuService.prototype.getHit = /**
     * @param {?} url
     * @param {?=} recursive
     * @param {?=} cb
     * @return {?}
     */
    function (url, recursive, cb) {
        if (recursive === void 0) { recursive = false; }
        if (cb === void 0) { cb = null; }
        /** @type {?} */
        var item = null;
        while (!item && url) {
            this.visit(function (i) {
                if (cb) {
                    cb(i);
                }
                if (i.link != null && i.link === url) {
                    item = i;
                }
            });
            if (!recursive)
                break;
            url = url
                .split('/')
                .slice(0, -1)
                .join('/');
        }
        return item;
    };
    /**
     * 根据URL设置菜单 `_open` 属性
     * - 若 `recursive: true` 则会自动向上递归查找
     *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
     */
    /**
     * 根据URL设置菜单 `_open` 属性
     * - 若 `recursive: true` 则会自动向上递归查找
     *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
     * @param {?} url
     * @param {?=} recursive
     * @return {?}
     */
    MenuService.prototype.openedByUrl = /**
     * 根据URL设置菜单 `_open` 属性
     * - 若 `recursive: true` 则会自动向上递归查找
     *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
     * @param {?} url
     * @param {?=} recursive
     * @return {?}
     */
    function (url, recursive) {
        if (recursive === void 0) { recursive = false; }
        if (!url)
            return;
        /** @type {?} */
        var findItem = this.getHit(url, recursive, function (i) { return (i._open = false); });
        if (!findItem)
            return;
        do {
            findItem._open = true;
            findItem = findItem.__parent;
        } while (findItem);
    };
    /**
     * 根据url获取菜单列表
     * - 若 `recursive: true` 则会自动向上递归查找
     *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
     */
    /**
     * 根据url获取菜单列表
     * - 若 `recursive: true` 则会自动向上递归查找
     *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
     * @param {?} url
     * @param {?=} recursive
     * @return {?}
     */
    MenuService.prototype.getPathByUrl = /**
     * 根据url获取菜单列表
     * - 若 `recursive: true` 则会自动向上递归查找
     *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
     * @param {?} url
     * @param {?=} recursive
     * @return {?}
     */
    function (url, recursive) {
        if (recursive === void 0) { recursive = false; }
        /** @type {?} */
        var ret = [];
        /** @type {?} */
        var item = this.getHit(url, recursive);
        if (!item)
            return ret;
        do {
            ret.splice(0, 0, item);
            item = item.__parent;
        } while (item);
        return ret;
    };
    /**
     * @return {?}
     */
    MenuService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._change$.unsubscribe();
        if (this.i18n$)
            this.i18n$.unsubscribe();
    };
    MenuService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    MenuService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] },
        { type: ACLService, decorators: [{ type: Optional }] }
    ]; };
    /** @nocollapse */ MenuService.ngInjectableDef = i0.defineInjectable({ factory: function MenuService_Factory() { return new MenuService(i0.inject(i1.ALAIN_I18N_TOKEN, 8), i0.inject(i2.ACLService, 8)); }, token: MenuService, providedIn: "root" });
    return MenuService;
}());
export { MenuService };
if (false) {
    /** @type {?} */
    MenuService.prototype._change$;
    /** @type {?} */
    MenuService.prototype.i18n$;
    /** @type {?} */
    MenuService.prototype.data;
    /** @type {?} */
    MenuService.prototype.i18nSrv;
    /** @type {?} */
    MenuService.prototype.aclService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3NlcnZpY2VzL21lbnUvbWVudS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBNEIsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBR3hDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBb0IsTUFBTSxjQUFjLENBQUM7Ozs7QUFHbEU7SUFPRSxxQkFHVSxPQUF5QixFQUNiLFVBQXNCO1FBSjVDLGlCQVFDO1FBTFMsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFDYixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBVHBDLGFBQVEsR0FBNEIsSUFBSSxlQUFlLENBQVMsRUFBRSxDQUFDLENBQUM7UUFHcEUsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQVF4QixJQUFJLElBQUksQ0FBQyxPQUFPO1lBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLEVBQUUsRUFBYixDQUFhLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsc0JBQUksK0JBQU07Ozs7UUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNyQyxDQUFDOzs7T0FBQTs7Ozs7SUFFRCwyQkFBSzs7OztJQUFMLFVBQU0sUUFBaUU7O1lBQy9ELElBQUksR0FBRyxVQUFDLElBQVksRUFBRSxVQUFnQixFQUFFLEtBQWE7OztnQkFDekQsS0FB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USxRQUFRLEVBQUU7SUFDckIsQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7OztJQUNILGtDQUFZOzs7Ozs7OztJQUFaLFVBQWEsR0FBVyxFQUFFLFNBQWlCO1FBQWpCLDBCQUFBLEVBQUEsaUJBQWlCOztZQUNuQyxHQUFHLEdBQVcsRUFBRTs7WUFDbEIsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQztRQUV0QyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU8sR0FBRyxDQUFDO1FBRXRCLEdBQUc7WUFDRCxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdkIsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDdEIsUUFBUSxJQUFJLEVBQUU7UUFFZixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Ozs7SUFFRCxpQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLEtBQUs7WUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzNDLENBQUM7O2dCQXpPRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O2dEQVE3QixRQUFRLFlBQ1IsTUFBTSxTQUFDLGdCQUFnQjtnQkFmbkIsVUFBVSx1QkFpQmQsUUFBUTs7O3NCQXJCYjtDQW9QQyxBQTFPRCxJQTBPQztTQXpPWSxXQUFXOzs7SUFDdEIsK0JBQTRFOztJQUM1RSw0QkFBNEI7O0lBRTVCLDJCQUEwQjs7SUFHeEIsOEJBRWlDOztJQUNqQyxpQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIE9wdGlvbmFsLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQUNMU2VydmljZSB9IGZyb20gJ0BkZWxvbi9hY2wnO1xuaW1wb3J0IHsgZGVlcENvcHkgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IEFMQUlOX0kxOE5fVE9LRU4sIEFsYWluSTE4TlNlcnZpY2UgfSBmcm9tICcuLi9pMThuL2kxOG4nO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBNZW51U2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX2NoYW5nZSQ6IEJlaGF2aW9yU3ViamVjdDxNZW51W10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxNZW51W10+KFtdKTtcbiAgcHJpdmF0ZSBpMThuJDogU3Vic2NyaXB0aW9uO1xuXG4gIHByaXZhdGUgZGF0YTogTWVudVtdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pXG4gICAgcHJpdmF0ZSBpMThuU3J2OiBBbGFpbkkxOE5TZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgYWNsU2VydmljZTogQUNMU2VydmljZSxcbiAgKSB7XG4gICAgaWYgKHRoaXMuaTE4blNydilcbiAgICAgIHRoaXMuaTE4biQgPSB0aGlzLmkxOG5TcnYuY2hhbmdlLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlc3VtZSgpKTtcbiAgfVxuXG4gIGdldCBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxNZW51W10+IHtcbiAgICByZXR1cm4gdGhpcy5fY2hhbmdlJC5waXBlKHNoYXJlKCkpO1xuICB9XG5cbiAgdmlzaXQoY2FsbGJhY2s6IChpdGVtOiBNZW51LCBwYXJlbnRNZW51bTogTWVudSwgZGVwdGg/OiBudW1iZXIpID0+IHZvaWQpIHtcbiAgICBjb25zdCBpbkZuID0gKGxpc3Q6IE1lbnVbXSwgcGFyZW50TWVudTogTWVudSwgZGVwdGg6IG51bWJlcikgPT4ge1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGxpc3QpIHtcbiAgICAgICAgY2FsbGJhY2soaXRlbSwgcGFyZW50TWVudSwgZGVwdGgpO1xuICAgICAgICBpZiAoaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpbkZuKGl0ZW0uY2hpbGRyZW4sIGl0ZW0sIGRlcHRoICsgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbS5jaGlsZHJlbiA9IFtdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGluRm4odGhpcy5kYXRhLCBudWxsLCAwKTtcbiAgfVxuXG4gIGFkZChpdGVtczogTWVudVtdKSB7XG4gICAgdGhpcy5kYXRhID0gaXRlbXM7XG4gICAgdGhpcy5yZXN1bWUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDph43nva7oj5zljZXvvIzlj6/og71JMThO44CB55So5oi35p2D6ZmQ5Y+Y5Yqo5pe26ZyA6KaB6LCD55So5Yi35pawXG4gICAqL1xuICByZXN1bWUoY2FsbGJhY2s/OiAoaXRlbTogTWVudSwgcGFyZW50TWVudW06IE1lbnUsIGRlcHRoPzogbnVtYmVyKSA9PiB2b2lkKSB7XG4gICAgbGV0IGkgPSAxO1xuICAgIGNvbnN0IHNob3J0Y3V0czogTWVudVtdID0gW107XG4gICAgdGhpcy52aXNpdCgoaXRlbSwgcGFyZW50LCBkZXB0aCkgPT4ge1xuICAgICAgaXRlbS5fX2lkID0gaSsrO1xuICAgICAgaXRlbS5fX3BhcmVudCA9IHBhcmVudDtcbiAgICAgIGl0ZW0uX2RlcHRoID0gZGVwdGg7XG5cbiAgICAgIGlmICghaXRlbS5saW5rKSBpdGVtLmxpbmsgPSAnJztcbiAgICAgIGlmICh0eXBlb2YgaXRlbS5saW5rRXhhY3QgPT09ICd1bmRlZmluZWQnKSBpdGVtLmxpbmtFeGFjdCA9IGZhbHNlO1xuICAgICAgaWYgKCFpdGVtLmV4dGVybmFsTGluaykgaXRlbS5leHRlcm5hbExpbmsgPSAnJztcblxuICAgICAgLy8gYmFkZ2VcbiAgICAgIGlmIChpdGVtLmJhZGdlKSB7XG4gICAgICAgIGlmIChpdGVtLmJhZGdlRG90ICE9PSB0cnVlKSB7XG4gICAgICAgICAgaXRlbS5iYWRnZURvdCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXRlbS5iYWRnZVN0YXR1cykge1xuICAgICAgICAgIGl0ZW0uYmFkZ2VTdGF0dXMgPSAnZXJyb3InO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGl0ZW0uX3R5cGUgPSBpdGVtLmV4dGVybmFsTGluayA/IDIgOiAxO1xuICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIGl0ZW0uX3R5cGUgPSAzO1xuICAgICAgfVxuXG4gICAgICAvLyBpY29uXG4gICAgICBpZiAodHlwZW9mIGl0ZW0uaWNvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbGV0IHR5cGUgPSAnY2xhc3MnO1xuICAgICAgICBsZXQgdmFsdWUgPSBpdGVtLmljb247XG4gICAgICAgIC8vIGNvbXBhdGlibGUgYGFudGljb24gYW50aWNvbi11c2VyYFxuICAgICAgICBpZiAofml0ZW0uaWNvbi5pbmRleE9mKGBhbnRpY29uLWApKSB7XG4gICAgICAgICAgdHlwZSA9ICdpY29uJztcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlXG4gICAgICAgICAgICAuc3BsaXQoJy0nKVxuICAgICAgICAgICAgLnNsaWNlKDEpXG4gICAgICAgICAgICAuam9pbignLScpO1xuICAgICAgICB9IGVsc2UgaWYgKC9eaHR0cHM/OlxcL1xcLy8udGVzdChpdGVtLmljb24pKSB7XG4gICAgICAgICAgdHlwZSA9ICdpbWcnO1xuICAgICAgICB9XG4gICAgICAgIGl0ZW0uaWNvbiA9IHsgdHlwZSwgdmFsdWUgfSBhcyBhbnk7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbS5pY29uICE9IG51bGwpIHtcbiAgICAgICAgaXRlbS5pY29uID0gT2JqZWN0LmFzc2lnbih7IHRoZW1lOiAnb3V0bGluZScsIHNwaW46IGZhbHNlIH0sIGl0ZW0uaWNvbik7XG4gICAgICB9XG5cbiAgICAgIGl0ZW0udGV4dCA9XG4gICAgICAgIGl0ZW0uaTE4biAmJiB0aGlzLmkxOG5TcnYgPyB0aGlzLmkxOG5TcnYuZmFueWkoaXRlbS5pMThuKSA6IGl0ZW0udGV4dDtcblxuICAgICAgLy8gZ3JvdXBcbiAgICAgIGl0ZW0uZ3JvdXAgPSBpdGVtLmdyb3VwICE9PSBmYWxzZTtcblxuICAgICAgLy8gaGlkZGVuXG4gICAgICBpdGVtLl9oaWRkZW4gPSB0eXBlb2YgaXRlbS5oaWRlID09PSAndW5kZWZpbmVkJyA/IGZhbHNlIDogaXRlbS5oaWRlO1xuXG4gICAgICAvLyBhY2xcbiAgICAgIGlmIChpdGVtLmFjbCAmJiB0aGlzLmFjbFNlcnZpY2UpIHtcbiAgICAgICAgaXRlbS5faGlkZGVuID0gIXRoaXMuYWNsU2VydmljZS5jYW4oaXRlbS5hY2wpO1xuICAgICAgfVxuXG4gICAgICAvLyBzaG9ydGN1dFxuICAgICAgaWYgKHBhcmVudCAmJiBpdGVtLnNob3J0Y3V0ID09PSB0cnVlICYmIHBhcmVudC5zaG9ydGN1dFJvb3QgIT09IHRydWUpIHtcbiAgICAgICAgc2hvcnRjdXRzLnB1c2goaXRlbSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soaXRlbSwgcGFyZW50LCBkZXB0aCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmxvYWRTaG9ydGN1dChzaG9ydGN1dHMpO1xuICAgIHRoaXMuX2NoYW5nZSQubmV4dCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIOWKoOi9veW/q+aNt+iPnOWNle+8jOWKoOi9veS9jee9ruinhOWImeWmguS4i++8mlxuICAgKiAx44CB57uf5LiA5Zyo5LiL5qCHMOeahOiKgueCueS4i++8iOWNs+OAkOS4u+WvvOiIquOAkeiKgueCueS4i+aWue+8iVxuICAgKiAgICAgIDHjgIHoi6UgY2hpbGRyZW4g5a2Y5ZyoIOOAkHNob3J0Y3V0Um9vdDogdHJ1ZeOAkeWImeacgOS8mOWFiOOAkOaOqOiNkOOAkei/meenjeaWueW8j1xuICAgKiAgICAgIDLjgIHlkKbliJnmn6Xmib7luKbmnInjgJBkYXNoYm9hcmTjgJHlrZfmoLfpk77mjqXvvIzoi6XlrZjlnKjliJnlnKjmraToj5zljZXnmoTkuIvmlrnliJvlu7rlv6vmjbflhaXlj6NcbiAgICogICAgICAz44CB5ZCm5YiZ5pS+5ZyoMOiKgueCueS9jee9rlxuICAgKi9cbiAgcHJpdmF0ZSBsb2FkU2hvcnRjdXQoc2hvcnRjdXRzOiBNZW51W10pIHtcbiAgICBpZiAoc2hvcnRjdXRzLmxlbmd0aCA9PT0gMCB8fCB0aGlzLmRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbHMgPSB0aGlzLmRhdGFbMF0uY2hpbGRyZW47XG4gICAgbGV0IHBvcyA9IGxzLmZpbmRJbmRleCh3ID0+IHcuc2hvcnRjdXRSb290ID09PSB0cnVlKTtcbiAgICBpZiAocG9zID09PSAtMSkge1xuICAgICAgcG9zID0gbHMuZmluZEluZGV4KHcgPT4gdy5saW5rLmluY2x1ZGVzKCdkYXNoYm9hcmQnKSk7XG4gICAgICBwb3MgPSAocG9zICE9PSAtMSA/IHBvcyA6IC0xKSArIDE7XG4gICAgICBjb25zdCBzaG9ydGN1dE1lbnUgPSA8TWVudT57XG4gICAgICAgIHRleHQ6ICflv6vmjbfoj5zljZUnLFxuICAgICAgICBpMThuOiAnc2hvcnRjdXQnLFxuICAgICAgICBpY29uOiAnaWNvbi1yb2NrZXQnLFxuICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICB9O1xuICAgICAgdGhpcy5kYXRhWzBdLmNoaWxkcmVuLnNwbGljZShwb3MsIDAsIHNob3J0Y3V0TWVudSk7XG4gICAgfVxuICAgIGxldCBfZGF0YSA9IHRoaXMuZGF0YVswXS5jaGlsZHJlbltwb3NdO1xuICAgIGlmIChfZGF0YS5pMThuICYmIHRoaXMuaTE4blNydikgX2RhdGEudGV4dCA9IHRoaXMuaTE4blNydi5mYW55aShfZGF0YS5pMThuKTtcbiAgICBfZGF0YSA9IE9iamVjdC5hc3NpZ24oX2RhdGEsIHtcbiAgICAgIHNob3J0Y3V0Um9vdDogdHJ1ZSxcbiAgICAgIF90eXBlOiAzLFxuICAgICAgX19pZDogLTEsXG4gICAgICBfZGVwdGg6IDEsXG4gICAgICBfX3BhcmVudDogbnVsbFxuICAgIH0pO1xuICAgIF9kYXRhLmNoaWxkcmVuID0gc2hvcnRjdXRzLm1hcChpID0+IHtcbiAgICAgIGkuX2RlcHRoID0gMjtcbiAgICAgIGkuX19wYXJlbnQgPSBfZGF0YTtcbiAgICAgIHJldHVybiBpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IG1lbnVzKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cblxuICAvKipcbiAgICog5riF56m66I+c5Y2VXG4gICAqL1xuICBjbGVhcigpIHtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB0aGlzLl9jaGFuZ2UkLm5leHQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SGl0KHVybDogc3RyaW5nLCByZWN1cnNpdmUgPSBmYWxzZSwgY2I6IChpOiBNZW51KSA9PiB2b2lkID0gbnVsbCkge1xuICAgIGxldCBpdGVtOiBNZW51ID0gbnVsbDtcblxuICAgIHdoaWxlICghaXRlbSAmJiB1cmwpIHtcbiAgICAgIHRoaXMudmlzaXQoaSA9PiB7XG4gICAgICAgIGlmIChjYikge1xuICAgICAgICAgIGNiKGkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpLmxpbmsgIT0gbnVsbCAmJiBpLmxpbmsgPT09IHVybCkge1xuICAgICAgICAgIGl0ZW0gPSBpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKCFyZWN1cnNpdmUpIGJyZWFrO1xuXG4gICAgICB1cmwgPSB1cmxcbiAgICAgICAgLnNwbGl0KCcvJylcbiAgICAgICAgLnNsaWNlKDAsIC0xKVxuICAgICAgICAuam9pbignLycpO1xuICAgIH1cblxuICAgIHJldHVybiBpdGVtO1xuICB9XG5cbiAgLyoqXG4gICAqIOagueaNrlVSTOiuvue9ruiPnOWNlSBgX29wZW5gIOWxnuaAp1xuICAgKiAtIOiLpSBgcmVjdXJzaXZlOiB0cnVlYCDliJnkvJroh6rliqjlkJHkuIrpgJLlvZLmn6Xmib5cbiAgICogIC0g6I+c5Y2V5pWw5o2u5rqQ5YyF5ZCrIGAvd2FyZWDvvIzliJkgYC93YXJlLzFgIOS5n+inhuS4uiBgL3dhcmVgIOmhuVxuICAgKi9cbiAgb3BlbmVkQnlVcmwodXJsOiBzdHJpbmcsIHJlY3Vyc2l2ZSA9IGZhbHNlKSB7XG4gICAgaWYgKCF1cmwpIHJldHVybjtcblxuICAgIGxldCBmaW5kSXRlbSA9IHRoaXMuZ2V0SGl0KHVybCwgcmVjdXJzaXZlLCBpID0+IChpLl9vcGVuID0gZmFsc2UpKTtcbiAgICBpZiAoIWZpbmRJdGVtKSByZXR1cm47XG5cbiAgICBkbyB7XG4gICAgICBmaW5kSXRlbS5fb3BlbiA9IHRydWU7XG4gICAgICBmaW5kSXRlbSA9IGZpbmRJdGVtLl9fcGFyZW50O1xuICAgIH0gd2hpbGUgKGZpbmRJdGVtKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmoLnmja51cmzojrflj5boj5zljZXliJfooahcbiAgICogLSDoi6UgYHJlY3Vyc2l2ZTogdHJ1ZWAg5YiZ5Lya6Ieq5Yqo5ZCR5LiK6YCS5b2S5p+l5om+XG4gICAqICAtIOiPnOWNleaVsOaNrua6kOWMheWQqyBgL3dhcmVg77yM5YiZIGAvd2FyZS8xYCDkuZ/op4bkuLogYC93YXJlYCDpoblcbiAgICovXG4gIGdldFBhdGhCeVVybCh1cmw6IHN0cmluZywgcmVjdXJzaXZlID0gZmFsc2UpOiBNZW51W10ge1xuICAgIGNvbnN0IHJldDogTWVudVtdID0gW107XG4gICAgbGV0IGl0ZW0gPSB0aGlzLmdldEhpdCh1cmwsIHJlY3Vyc2l2ZSk7XG5cbiAgICBpZiAoIWl0ZW0pIHJldHVybiByZXQ7XG5cbiAgICBkbyB7XG4gICAgICByZXQuc3BsaWNlKDAsIDAsIGl0ZW0pO1xuICAgICAgaXRlbSA9IGl0ZW0uX19wYXJlbnQ7XG4gICAgfSB3aGlsZSAoaXRlbSk7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fY2hhbmdlJC51bnN1YnNjcmliZSgpO1xuICAgIGlmICh0aGlzLmkxOG4kKSB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==