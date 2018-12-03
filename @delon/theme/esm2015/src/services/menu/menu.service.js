/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Inject, Injectable, Optional } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { share } from 'rxjs/operators';
import { ACLService } from '@delon/acl';
import { ALAIN_I18N_TOKEN } from '../i18n/i18n';
import * as i0 from "@angular/core";
import * as i1 from "../i18n/i18n";
import * as i2 from "@delon/acl";
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
        if (this.i18nSrv)
            this.i18n$ = this.i18nSrv.change.subscribe(() => this.resume());
    }
    /**
     * @return {?}
     */
    get change() {
        return this._change$.pipe(share());
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    visit(callback) {
        /** @type {?} */
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
        inFn(this.data, null, 0);
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
        this.visit((item, parent, depth) => {
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
                let type = 'class';
                /** @type {?} */
                let value = item.icon;
                // compatible `anticon anticon-user`
                if (~item.icon.indexOf(`anticon-`)) {
                    type = 'icon';
                    value = value
                        .split('-')
                        .slice(1)
                        .join('-');
                }
                else if (/^https?:\/\//.test(item.icon)) {
                    type = 'img';
                }
                // tslint:disable-next-line:no-any
                item.icon = (/** @type {?} */ ({ type, value }));
            }
            if (item.icon != null) {
                item.icon = Object.assign({ theme: 'outline', spin: false }, ((/** @type {?} */ (item.icon))));
            }
            item.text =
                item.i18n && this.i18nSrv ? this.i18nSrv.fanyi(item.i18n) : item.text;
            // group
            item.group = item.group !== false;
            // hidden
            item._hidden = typeof item.hide === 'undefined' ? false : item.hide;
            // acl
            if (item.acl && this.aclService) {
                item._hidden = !this.aclService.can(item.acl);
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
    }
    /**
     * 加载快捷菜单，加载位置规则如下：
     * 1、统一在下标0的节点下（即【主导航】节点下方）
     *      1、若 children 存在 【shortcutRoot: true】则最优先【推荐】这种方式
     *      2、否则查找带有【dashboard】字样链接，若存在则在此菜单的下方创建快捷入口
     *      3、否则放在0节点位置
     * @param {?} shortcuts
     * @return {?}
     */
    loadShortcut(shortcuts) {
        if (shortcuts.length === 0 || this.data.length === 0) {
            return;
        }
        /** @type {?} */
        const ls = this.data[0].children;
        /** @type {?} */
        let pos = ls.findIndex(w => w.shortcutRoot === true);
        if (pos === -1) {
            pos = ls.findIndex(w => w.link.includes('dashboard'));
            pos = (pos !== -1 ? pos : -1) + 1;
            /** @type {?} */
            const shortcutMenu = (/** @type {?} */ ({
                text: '快捷菜单',
                i18n: 'shortcut',
                icon: 'icon-rocket',
                children: [],
            }));
            this.data[0].children.splice(pos, 0, shortcutMenu);
        }
        /** @type {?} */
        let _data = this.data[0].children[pos];
        if (_data.i18n && this.i18nSrv)
            _data.text = this.i18nSrv.fanyi(_data.i18n);
        _data = Object.assign({}, _data, { shortcutRoot: true, _type: 3, __id: -1, _depth: 1, __parent: null });
        _data.children = shortcuts.map(i => {
            i._depth = 2;
            i.__parent = _data;
            return i;
        });
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
     * @param {?} url
     * @param {?=} recursive
     * @param {?=} cb
     * @return {?}
     */
    getHit(url, recursive = false, cb = null) {
        /** @type {?} */
        let item = null;
        while (!item && url) {
            this.visit(i => {
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
        let findItem = this.getHit(url, recursive, i => (i._open = false));
        if (!findItem)
            return;
        do {
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
        let item = this.getHit(url, recursive);
        if (!item)
            return ret;
        do {
            ret.splice(0, 0, item);
            item = item.__parent;
        } while (item);
        return ret;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._change$.unsubscribe();
        if (this.i18n$)
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
/** @nocollapse */ MenuService.ngInjectableDef = i0.defineInjectable({ factory: function MenuService_Factory() { return new MenuService(i0.inject(i1.ALAIN_I18N_TOKEN, 8), i0.inject(i2.ACLService, 8)); }, token: MenuService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3NlcnZpY2VzL21lbnUvbWVudS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBYSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBNEIsTUFBTSxNQUFNLENBQUM7QUFDakUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXZDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFeEMsT0FBTyxFQUFvQixnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQUlsRSxNQUFNLE9BQU8sV0FBVzs7Ozs7SUFNdEIsWUFHVSxPQUF5QixFQUNiLFVBQXNCO1FBRGxDLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBQ2IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVRwQyxhQUFRLEdBQTRCLElBQUksZUFBZSxDQUFTLEVBQUUsQ0FBQyxDQUFDO1FBR3BFLFNBQUksR0FBVyxFQUFFLENBQUM7UUFReEIsSUFBSSxJQUFJLENBQUMsT0FBTztZQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFRCxLQUFLLENBQUMsUUFBaUU7O2NBQy9ELElBQUksR0FBRyxDQUFDLElBQVksRUFBRSxVQUFnQixFQUFFLEtBQWEsRUFBRSxFQUFFO1lBQzdELEtBQUssTUFBTSxJQUFJLElB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dEIsUUFBUSxJQUFJLEVBQUU7UUFFZixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxLQUFLO1lBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQyxDQUFDOzs7WUEzT0YsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7Ozs0Q0FRN0IsUUFBUSxZQUNSLE1BQU0sU0FBQyxnQkFBZ0I7WUFkbkIsVUFBVSx1QkFnQmQsUUFBUTs7Ozs7SUFUWCwrQkFBNEU7O0lBQzVFLDRCQUE0Qjs7SUFFNUIsMkJBQTBCOztJQUd4Qiw4QkFFaUM7O0lBQ2pDLGlDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT25EZXN0cm95LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHNoYXJlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBBQ0xTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL2FjbCc7XG5cbmltcG9ydCB7IEFsYWluSTE4TlNlcnZpY2UsIEFMQUlOX0kxOE5fVE9LRU4gfSBmcm9tICcuLi9pMThuL2kxOG4nO1xuaW1wb3J0IHsgTWVudSwgTWVudUljb24gfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTWVudVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9jaGFuZ2UkOiBCZWhhdmlvclN1YmplY3Q8TWVudVtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TWVudVtdPihbXSk7XG4gIHByaXZhdGUgaTE4biQ6IFN1YnNjcmlwdGlvbjtcblxuICBwcml2YXRlIGRhdGE6IE1lbnVbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKVxuICAgIHByaXZhdGUgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGFjbFNlcnZpY2U6IEFDTFNlcnZpY2UsXG4gICkge1xuICAgIGlmICh0aGlzLmkxOG5TcnYpXG4gICAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuU3J2LmNoYW5nZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZXN1bWUoKSk7XG4gIH1cblxuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8TWVudVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYW5nZSQucGlwZShzaGFyZSgpKTtcbiAgfVxuXG4gIHZpc2l0KGNhbGxiYWNrOiAoaXRlbTogTWVudSwgcGFyZW50TWVudW06IE1lbnUsIGRlcHRoPzogbnVtYmVyKSA9PiB2b2lkKSB7XG4gICAgY29uc3QgaW5GbiA9IChsaXN0OiBNZW51W10sIHBhcmVudE1lbnU6IE1lbnUsIGRlcHRoOiBudW1iZXIpID0+IHtcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBsaXN0KSB7XG4gICAgICAgIGNhbGxiYWNrKGl0ZW0sIHBhcmVudE1lbnUsIGRlcHRoKTtcbiAgICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaW5GbihpdGVtLmNoaWxkcmVuLCBpdGVtLCBkZXB0aCArIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW0uY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpbkZuKHRoaXMuZGF0YSwgbnVsbCwgMCk7XG4gIH1cblxuICBhZGQoaXRlbXM6IE1lbnVbXSkge1xuICAgIHRoaXMuZGF0YSA9IGl0ZW1zO1xuICAgIHRoaXMucmVzdW1lKCk7XG4gIH1cblxuICAvKipcbiAgICog6YeN572u6I+c5Y2V77yM5Y+v6IO9STE4TuOAgeeUqOaIt+adg+mZkOWPmOWKqOaXtumcgOimgeiwg+eUqOWIt+aWsFxuICAgKi9cbiAgcmVzdW1lKGNhbGxiYWNrPzogKGl0ZW06IE1lbnUsIHBhcmVudE1lbnVtOiBNZW51LCBkZXB0aD86IG51bWJlcikgPT4gdm9pZCkge1xuICAgIGxldCBpID0gMTtcbiAgICBjb25zdCBzaG9ydGN1dHM6IE1lbnVbXSA9IFtdO1xuICAgIHRoaXMudmlzaXQoKGl0ZW0sIHBhcmVudCwgZGVwdGgpID0+IHtcbiAgICAgIGl0ZW0uX19pZCA9IGkrKztcbiAgICAgIGl0ZW0uX19wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICBpdGVtLl9kZXB0aCA9IGRlcHRoO1xuXG4gICAgICBpZiAoIWl0ZW0ubGluaykgaXRlbS5saW5rID0gJyc7XG4gICAgICBpZiAodHlwZW9mIGl0ZW0ubGlua0V4YWN0ID09PSAndW5kZWZpbmVkJykgaXRlbS5saW5rRXhhY3QgPSBmYWxzZTtcbiAgICAgIGlmICghaXRlbS5leHRlcm5hbExpbmspIGl0ZW0uZXh0ZXJuYWxMaW5rID0gJyc7XG5cbiAgICAgIC8vIGJhZGdlXG4gICAgICBpZiAoaXRlbS5iYWRnZSkge1xuICAgICAgICBpZiAoaXRlbS5iYWRnZURvdCAhPT0gdHJ1ZSkge1xuICAgICAgICAgIGl0ZW0uYmFkZ2VEb3QgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWl0ZW0uYmFkZ2VTdGF0dXMpIHtcbiAgICAgICAgICBpdGVtLmJhZGdlU3RhdHVzID0gJ2Vycm9yJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpdGVtLl90eXBlID0gaXRlbS5leHRlcm5hbExpbmsgPyAyIDogMTtcbiAgICAgIGlmIChpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBpdGVtLl90eXBlID0gMztcbiAgICAgIH1cblxuICAgICAgLy8gaWNvblxuICAgICAgaWYgKHR5cGVvZiBpdGVtLmljb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGxldCB0eXBlID0gJ2NsYXNzJztcbiAgICAgICAgbGV0IHZhbHVlID0gaXRlbS5pY29uO1xuICAgICAgICAvLyBjb21wYXRpYmxlIGBhbnRpY29uIGFudGljb24tdXNlcmBcbiAgICAgICAgaWYgKH5pdGVtLmljb24uaW5kZXhPZihgYW50aWNvbi1gKSkge1xuICAgICAgICAgIHR5cGUgPSAnaWNvbic7XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZVxuICAgICAgICAgICAgLnNwbGl0KCctJylcbiAgICAgICAgICAgIC5zbGljZSgxKVxuICAgICAgICAgICAgLmpvaW4oJy0nKTtcbiAgICAgICAgfSBlbHNlIGlmICgvXmh0dHBzPzpcXC9cXC8vLnRlc3QoaXRlbS5pY29uKSkge1xuICAgICAgICAgIHR5cGUgPSAnaW1nJztcbiAgICAgICAgfVxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAgIGl0ZW0uaWNvbiA9IHsgdHlwZSwgdmFsdWUgfSBhcyBhbnk7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbS5pY29uICE9IG51bGwpIHtcbiAgICAgICAgaXRlbS5pY29uID0geyB0aGVtZTogJ291dGxpbmUnLCBzcGluOiBmYWxzZSwgLi4uKGl0ZW0uaWNvbiBhcyBNZW51SWNvbikgfTtcbiAgICAgIH1cblxuICAgICAgaXRlbS50ZXh0ID1cbiAgICAgICAgaXRlbS5pMThuICYmIHRoaXMuaTE4blNydiA/IHRoaXMuaTE4blNydi5mYW55aShpdGVtLmkxOG4pIDogaXRlbS50ZXh0O1xuXG4gICAgICAvLyBncm91cFxuICAgICAgaXRlbS5ncm91cCA9IGl0ZW0uZ3JvdXAgIT09IGZhbHNlO1xuXG4gICAgICAvLyBoaWRkZW5cbiAgICAgIGl0ZW0uX2hpZGRlbiA9IHR5cGVvZiBpdGVtLmhpZGUgPT09ICd1bmRlZmluZWQnID8gZmFsc2UgOiBpdGVtLmhpZGU7XG5cbiAgICAgIC8vIGFjbFxuICAgICAgaWYgKGl0ZW0uYWNsICYmIHRoaXMuYWNsU2VydmljZSkge1xuICAgICAgICBpdGVtLl9oaWRkZW4gPSAhdGhpcy5hY2xTZXJ2aWNlLmNhbihpdGVtLmFjbCk7XG4gICAgICB9XG5cbiAgICAgIC8vIHNob3J0Y3V0XG4gICAgICBpZiAocGFyZW50ICYmIGl0ZW0uc2hvcnRjdXQgPT09IHRydWUgJiYgcGFyZW50LnNob3J0Y3V0Um9vdCAhPT0gdHJ1ZSkge1xuICAgICAgICBzaG9ydGN1dHMucHVzaChpdGVtKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhpdGVtLCBwYXJlbnQsIGRlcHRoKTtcbiAgICB9KTtcblxuICAgIHRoaXMubG9hZFNob3J0Y3V0KHNob3J0Y3V0cyk7XG4gICAgdGhpcy5fY2hhbmdlJC5uZXh0KHRoaXMuZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICog5Yqg6L295b+r5o236I+c5Y2V77yM5Yqg6L295L2N572u6KeE5YiZ5aaC5LiL77yaXG4gICAqIDHjgIHnu5/kuIDlnKjkuIvmoIcw55qE6IqC54K55LiL77yI5Y2z44CQ5Li75a+86Iiq44CR6IqC54K55LiL5pa577yJXG4gICAqICAgICAgMeOAgeiLpSBjaGlsZHJlbiDlrZjlnKgg44CQc2hvcnRjdXRSb290OiB0cnVl44CR5YiZ5pyA5LyY5YWI44CQ5o6o6I2Q44CR6L+Z56eN5pa55byPXG4gICAqICAgICAgMuOAgeWQpuWImeafpeaJvuW4puacieOAkGRhc2hib2FyZOOAkeWtl+agt+mTvuaOpe+8jOiLpeWtmOWcqOWImeWcqOatpOiPnOWNleeahOS4i+aWueWIm+W7uuW/q+aNt+WFpeWPo1xuICAgKiAgICAgIDPjgIHlkKbliJnmlL7lnKgw6IqC54K55L2N572uXG4gICAqL1xuICBwcml2YXRlIGxvYWRTaG9ydGN1dChzaG9ydGN1dHM6IE1lbnVbXSkge1xuICAgIGlmIChzaG9ydGN1dHMubGVuZ3RoID09PSAwIHx8IHRoaXMuZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBscyA9IHRoaXMuZGF0YVswXS5jaGlsZHJlbjtcbiAgICBsZXQgcG9zID0gbHMuZmluZEluZGV4KHcgPT4gdy5zaG9ydGN1dFJvb3QgPT09IHRydWUpO1xuICAgIGlmIChwb3MgPT09IC0xKSB7XG4gICAgICBwb3MgPSBscy5maW5kSW5kZXgodyA9PiB3LmxpbmsuaW5jbHVkZXMoJ2Rhc2hib2FyZCcpKTtcbiAgICAgIHBvcyA9IChwb3MgIT09IC0xID8gcG9zIDogLTEpICsgMTtcbiAgICAgIGNvbnN0IHNob3J0Y3V0TWVudSA9IHtcbiAgICAgICAgdGV4dDogJ+W/q+aNt+iPnOWNlScsXG4gICAgICAgIGkxOG46ICdzaG9ydGN1dCcsXG4gICAgICAgIGljb246ICdpY29uLXJvY2tldCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgIH0gYXMgTWVudTtcbiAgICAgIHRoaXMuZGF0YVswXS5jaGlsZHJlbi5zcGxpY2UocG9zLCAwLCBzaG9ydGN1dE1lbnUpO1xuICAgIH1cbiAgICBsZXQgX2RhdGEgPSB0aGlzLmRhdGFbMF0uY2hpbGRyZW5bcG9zXTtcbiAgICBpZiAoX2RhdGEuaTE4biAmJiB0aGlzLmkxOG5TcnYpIF9kYXRhLnRleHQgPSB0aGlzLmkxOG5TcnYuZmFueWkoX2RhdGEuaTE4bik7XG4gICAgX2RhdGEgPSB7XG4gICAgICAuLi5fZGF0YSxcbiAgICAgIHNob3J0Y3V0Um9vdDogdHJ1ZSxcbiAgICAgIF90eXBlOiAzLFxuICAgICAgX19pZDogLTEsXG4gICAgICBfZGVwdGg6IDEsXG4gICAgICBfX3BhcmVudDogbnVsbCxcbiAgICB9O1xuICAgIF9kYXRhLmNoaWxkcmVuID0gc2hvcnRjdXRzLm1hcChpID0+IHtcbiAgICAgIGkuX2RlcHRoID0gMjtcbiAgICAgIGkuX19wYXJlbnQgPSBfZGF0YTtcbiAgICAgIHJldHVybiBpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IG1lbnVzKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cblxuICAvKipcbiAgICog5riF56m66I+c5Y2VXG4gICAqL1xuICBjbGVhcigpIHtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB0aGlzLl9jaGFuZ2UkLm5leHQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SGl0KHVybDogc3RyaW5nLCByZWN1cnNpdmUgPSBmYWxzZSwgY2I6IChpOiBNZW51KSA9PiB2b2lkID0gbnVsbCkge1xuICAgIGxldCBpdGVtOiBNZW51ID0gbnVsbDtcblxuICAgIHdoaWxlICghaXRlbSAmJiB1cmwpIHtcbiAgICAgIHRoaXMudmlzaXQoaSA9PiB7XG4gICAgICAgIGlmIChjYikge1xuICAgICAgICAgIGNiKGkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpLmxpbmsgIT0gbnVsbCAmJiBpLmxpbmsgPT09IHVybCkge1xuICAgICAgICAgIGl0ZW0gPSBpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKCFyZWN1cnNpdmUpIGJyZWFrO1xuXG4gICAgICB1cmwgPSB1cmxcbiAgICAgICAgLnNwbGl0KCcvJylcbiAgICAgICAgLnNsaWNlKDAsIC0xKVxuICAgICAgICAuam9pbignLycpO1xuICAgIH1cblxuICAgIHJldHVybiBpdGVtO1xuICB9XG5cbiAgLyoqXG4gICAqIOagueaNrlVSTOiuvue9ruiPnOWNlSBgX29wZW5gIOWxnuaAp1xuICAgKiAtIOiLpSBgcmVjdXJzaXZlOiB0cnVlYCDliJnkvJroh6rliqjlkJHkuIrpgJLlvZLmn6Xmib5cbiAgICogIC0g6I+c5Y2V5pWw5o2u5rqQ5YyF5ZCrIGAvd2FyZWDvvIzliJkgYC93YXJlLzFgIOS5n+inhuS4uiBgL3dhcmVgIOmhuVxuICAgKi9cbiAgb3BlbmVkQnlVcmwodXJsOiBzdHJpbmcsIHJlY3Vyc2l2ZSA9IGZhbHNlKSB7XG4gICAgaWYgKCF1cmwpIHJldHVybjtcblxuICAgIGxldCBmaW5kSXRlbSA9IHRoaXMuZ2V0SGl0KHVybCwgcmVjdXJzaXZlLCBpID0+IChpLl9vcGVuID0gZmFsc2UpKTtcbiAgICBpZiAoIWZpbmRJdGVtKSByZXR1cm47XG5cbiAgICBkbyB7XG4gICAgICBmaW5kSXRlbS5fb3BlbiA9IHRydWU7XG4gICAgICBmaW5kSXRlbSA9IGZpbmRJdGVtLl9fcGFyZW50O1xuICAgIH0gd2hpbGUgKGZpbmRJdGVtKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmoLnmja51cmzojrflj5boj5zljZXliJfooahcbiAgICogLSDoi6UgYHJlY3Vyc2l2ZTogdHJ1ZWAg5YiZ5Lya6Ieq5Yqo5ZCR5LiK6YCS5b2S5p+l5om+XG4gICAqICAtIOiPnOWNleaVsOaNrua6kOWMheWQqyBgL3dhcmVg77yM5YiZIGAvd2FyZS8xYCDkuZ/op4bkuLogYC93YXJlYCDpoblcbiAgICovXG4gIGdldFBhdGhCeVVybCh1cmw6IHN0cmluZywgcmVjdXJzaXZlID0gZmFsc2UpOiBNZW51W10ge1xuICAgIGNvbnN0IHJldDogTWVudVtdID0gW107XG4gICAgbGV0IGl0ZW0gPSB0aGlzLmdldEhpdCh1cmwsIHJlY3Vyc2l2ZSk7XG5cbiAgICBpZiAoIWl0ZW0pIHJldHVybiByZXQ7XG5cbiAgICBkbyB7XG4gICAgICByZXQuc3BsaWNlKDAsIDAsIGl0ZW0pO1xuICAgICAgaXRlbSA9IGl0ZW0uX19wYXJlbnQ7XG4gICAgfSB3aGlsZSAoaXRlbSk7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fY2hhbmdlJC51bnN1YnNjcmliZSgpO1xuICAgIGlmICh0aGlzLmkxOG4kKSB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==