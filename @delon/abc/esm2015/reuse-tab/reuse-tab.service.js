/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { MenuService } from '@delon/theme';
import { BehaviorSubject } from 'rxjs';
import { ReuseTabMatchMode, } from './reuse-tab.interfaces';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
/**
 * 路由复用类，提供复用所需要一些基本接口
 *
 * **注：** 所有缓存数据来源于路由离开后才会产生
 */
export class ReuseTabService {
    // #endregion
    /**
     * @param {?} injector
     * @param {?} menuService
     */
    constructor(injector, menuService) {
        this.injector = injector;
        this.menuService = menuService;
        this._max = 10;
        this._debug = false;
        this._mode = ReuseTabMatchMode.Menu;
        this._excludes = [];
        this._cachedChange = new BehaviorSubject(null);
        this._cached = [];
        this._titleCached = {};
        this._closableCached = {};
    }
    // #region public
    /**
     * 当前路由地址
     * @return {?}
     */
    get curUrl() {
        return this.getUrl(this.injector.get(ActivatedRoute).snapshot);
    }
    /**
     * 允许最多复用多少个页面，取值范围 `2-100`
     * @param {?} value
     * @return {?}
     */
    set max(value) {
        this._max = Math.min(Math.max(value, 2), 100);
        for (let i = this._cached.length; i > this._max; i--) {
            this._cached.pop();
        }
    }
    /**
     * 设置匹配模式
     * @param {?} value
     * @return {?}
     */
    set mode(value) {
        this._mode = value;
    }
    /**
     * @return {?}
     */
    get mode() {
        return this._mode;
    }
    /**
     * 设置Debug模式
     * @param {?} value
     * @return {?}
     */
    set debug(value) {
        this._debug = value;
    }
    /**
     * @return {?}
     */
    get debug() {
        return this._debug;
    }
    /**
     * 排除规则，限 `mode=URL`
     * @param {?} values
     * @return {?}
     */
    set excludes(values) {
        if (!values)
            return;
        this._excludes = values;
    }
    /**
     * @return {?}
     */
    get excludes() {
        return this._excludes;
    }
    /**
     * 获取已缓存的路由
     * @return {?}
     */
    get items() {
        return this._cached;
    }
    /**
     * 获取当前缓存的路由总数
     * @return {?}
     */
    get count() {
        return this._cached.length;
    }
    /**
     * 订阅缓存变更通知
     * @return {?}
     */
    get change() {
        return this._cachedChange.asObservable(); // .pipe(filter(w => w !== null));
    }
    /**
     * 自定义当前标题
     * @param {?} value
     * @return {?}
     */
    set title(value) {
        /** @type {?} */
        const url = this.curUrl;
        if (typeof value === 'string')
            value = { text: value };
        this._titleCached[url] = value;
        this.di('update current tag title: ', value);
        this._cachedChange.next({
            active: 'title',
            title: value,
            list: this._cached,
        });
    }
    /**
     * 获取指定路径缓存所在位置，`-1` 表示无缓存
     * @param {?} url
     * @return {?}
     */
    index(url) {
        return this._cached.findIndex(w => w.url === url);
    }
    /**
     * 获取指定路径缓存是否存在
     * @param {?} url
     * @return {?}
     */
    exists(url) {
        return this.index(url) !== -1;
    }
    /**
     * 获取指定路径缓存
     * @param {?} url
     * @return {?}
     */
    get(url) {
        return url ? this._cached.find(w => w.url === url) || null : null;
    }
    /**
     * @param {?} url
     * @param {?} includeNonCloseable
     * @return {?}
     */
    remove(url, includeNonCloseable) {
        /** @type {?} */
        const idx = typeof url === 'string' ? this.index(url) : url;
        /** @type {?} */
        const item = idx !== -1 ? this._cached[idx] : null;
        if (!item || (!includeNonCloseable && !item.closable))
            return false;
        this.destroy(item._handle);
        this._cached.splice(idx, 1);
        delete this._titleCached[url];
        return true;
    }
    /**
     * 根据URL移除标签
     *
     * @param {?} url
     * @param {?=} includeNonCloseable
     * @return {?}
     */
    close(url, includeNonCloseable = false) {
        this.removeUrlBuffer = url;
        this.remove(url, includeNonCloseable);
        this._cachedChange.next({ active: 'close', url, list: this._cached });
        this.di('close tag', url);
        return true;
    }
    /**
     * 清除右边
     *
     * @param {?} url
     * @param {?=} includeNonCloseable
     * @return {?}
     */
    closeRight(url, includeNonCloseable = false) {
        /** @type {?} */
        const start = this.index(url);
        for (let i = this.count - 1; i > start; i--) {
            this.remove(i, includeNonCloseable);
        }
        this.removeUrlBuffer = null;
        this._cachedChange.next({ active: 'closeRight', url, list: this._cached });
        this.di('close right tages', url);
        return true;
    }
    /**
     * 清除所有缓存
     *
     * @param {?=} includeNonCloseable
     * @return {?}
     */
    clear(includeNonCloseable = false) {
        this._cached.forEach(w => {
            if (!includeNonCloseable && w.closable)
                this.destroy(w._handle);
        });
        this._cached = this._cached.filter(w => !includeNonCloseable && !w.closable);
        this.removeUrlBuffer = null;
        this._cachedChange.next({ active: 'clear', list: this._cached });
        this.di('clear all catch');
    }
    /**
     * 移动缓存数据
     * \@example
     * ```
     * // source
     * [ '/a/1', '/a/2', '/a/3', '/a/4', '/a/5' ]
     * move('/a/1', 2);
     * // output
     * [ '/a/2', '/a/3', '/a/1', '/a/4', '/a/5' ]
     * move('/a/1', -1);
     * // output
     * [ '/a/2', '/a/3', '/a/4', '/a/5', '/a/1' ]
     * ```
     * @param {?} url 要移动的URL地址
     * @param {?} position 新位置，下标从 `0` 开始
     *
     * @return {?}
     */
    move(url, position) {
        /** @type {?} */
        const start = this._cached.findIndex(w => w.url === url);
        if (start === -1)
            return;
        /** @type {?} */
        const data = this._cached.slice();
        data.splice(position < 0 ? data.length + position : position, 0, data.splice(start, 1)[0]);
        this._cached = data;
        this._cachedChange.next({
            active: 'move',
            url,
            position,
            list: this._cached,
        });
    }
    /**
     * 强制关闭当前路由（包含不可关闭状态），并重新导航至 `newUrl` 路由
     * @param {?} newUrl
     * @return {?}
     */
    replace(newUrl) {
        /** @type {?} */
        const url = this.curUrl;
        if (this.exists(url)) {
            this.close(url, true);
        }
        else {
            this.removeUrlBuffer = url;
        }
        this.injector.get(Router).navigateByUrl(newUrl);
    }
    /**
     * 获取标题，顺序如下：
     *
     * 1. 组件内使用 `ReuseTabService.title = 'new title'` 重新指定文本
     * 2. 路由配置中 data 属性中包含 titleI18n > title
     * 3. 菜单数据中 text 属性
     *
     * @param {?} url 指定URL
     * @param {?=} route 指定路由快照
     * @return {?}
     */
    getTitle(url, route) {
        if (this._titleCached[url])
            return this._titleCached[url];
        if (route && route.data && (route.data.titleI18n || route.data.title))
            return (/** @type {?} */ ({
                text: route.data.title,
                i18n: route.data.titleI18n,
            }));
        /** @type {?} */
        const menu = this.mode !== ReuseTabMatchMode.URL ? this.getMenu(url) : null;
        return menu ? { text: menu.text, i18n: menu.i18n } : { text: url };
    }
    /**
     * 清除标题缓存
     * @return {?}
     */
    clearTitleCached() {
        this._titleCached = {};
    }
    /**
     * 自定义当前 `closable` 状态
     * @param {?} value
     * @return {?}
     */
    set closable(value) {
        /** @type {?} */
        const url = this.curUrl;
        this._closableCached[url] = value;
        this.di('update current tag closable: ', value);
        this._cachedChange.next({
            active: 'closable',
            closable: value,
            list: this._cached,
        });
    }
    /**
     * 获取 `closable` 状态，顺序如下：
     *
     * 1. 组件内使用 `ReuseTabService.closable = true` 重新指定 `closable` 状态
     * 2. 路由配置中 data 属性中包含 `reuseClosable`
     * 3. 菜单数据中 `reuseClosable` 属性
     *
     * @param {?} url 指定URL
     * @param {?=} route 指定路由快照
     * @return {?}
     */
    getClosable(url, route) {
        if (typeof this._closableCached[url] !== 'undefined')
            return this._closableCached[url];
        if (route && route.data && typeof route.data.reuseClosable === 'boolean')
            return route.data.reuseClosable;
        /** @type {?} */
        const menu = this.mode !== ReuseTabMatchMode.URL ? this.getMenu(url) : null;
        if (menu && typeof menu.reuseClosable === 'boolean')
            return menu.reuseClosable;
        return true;
    }
    /**
     * 清空 `closable` 缓存
     * @return {?}
     */
    clearClosableCached() {
        this._closableCached = {};
    }
    /**
     * @param {?} route
     * @return {?}
     */
    getTruthRoute(route) {
        /** @type {?} */
        let next = route;
        while (next.firstChild)
            next = next.firstChild;
        return next;
    }
    /**
     * 根据快照获取URL地址
     * @param {?} route
     * @return {?}
     */
    getUrl(route) {
        /** @type {?} */
        let next = this.getTruthRoute(route);
        /** @type {?} */
        const segments = [];
        while (next) {
            segments.push(next.url.join('/'));
            next = next.parent;
        }
        /** @type {?} */
        const url = '/' +
            segments
                .filter(i => i)
                .reverse()
                .join('/');
        return url;
    }
    /**
     * 检查快照是否允许被复用
     * @param {?} route
     * @return {?}
     */
    can(route) {
        /** @type {?} */
        const url = this.getUrl(route);
        if (url === this.removeUrlBuffer)
            return false;
        if (route.data && typeof route.data.reuse === 'boolean')
            return route.data.reuse;
        if (this.mode !== ReuseTabMatchMode.URL) {
            /** @type {?} */
            const menu = this.getMenu(url);
            if (!menu)
                return false;
            if (this.mode === ReuseTabMatchMode.Menu) {
                if (menu.reuse === false)
                    return false;
            }
            else {
                if (!menu.reuse || menu.reuse !== true)
                    return false;
            }
            return true;
        }
        return this._excludes.findIndex(r => r.test(url)) === -1;
    }
    /**
     * 刷新，触发一个 refresh 类型事件
     * @param {?=} data
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    refresh(data) {
        this._cachedChange.next({ active: 'refresh', data });
    }
    // #endregion
    // #region privates
    // tslint:disable-next-line:no-any
    /**
     * @param {?} _handle
     * @return {?}
     */
    destroy(_handle) {
        if (_handle && _handle.componentRef && _handle.componentRef.destroy)
            _handle.componentRef.destroy();
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    di(...args) {
        if (!this.debug)
            return;
        // tslint:disable-next-line:no-console
        console.warn(...args);
    }
    /**
     * @param {?} url
     * @return {?}
     */
    getMenu(url) {
        /** @type {?} */
        const menus = this.menuService.getPathByUrl(url);
        if (!menus || menus.length === 0)
            return null;
        return menus.pop();
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {?} method
     * @param {?} url
     * @param {?} comp
     * @return {?}
     */
    runHook(method, url, comp) {
        if (comp.instance && typeof comp.instance[method] === 'function')
            comp.instance[method]();
    }
    /**
     * @param {?} route
     * @return {?}
     */
    hasInValidRoute(route) {
        return (!route.routeConfig ||
            route.routeConfig.loadChildren ||
            route.routeConfig.children);
    }
    /**
     * 决定是否允许路由复用，若 `true` 会触发 `store`
     * @param {?} route
     * @return {?}
     */
    shouldDetach(route) {
        if (this.hasInValidRoute(route))
            return false;
        this.di('#shouldDetach', this.can(route), this.getUrl(route));
        return this.can(route);
    }
    /**
     * 存储
     * @param {?} _snapshot
     * @param {?} _handle
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    store(_snapshot, _handle) {
        /** @type {?} */
        const url = this.getUrl(_snapshot);
        /** @type {?} */
        const idx = this.index(url);
        /** @type {?} */
        const item = {
            title: this.getTitle(url, _snapshot),
            closable: this.getClosable(url, _snapshot),
            url,
            _snapshot,
            _handle,
        };
        if (idx === -1) {
            this._cached.push(item);
            if (this.count > this._max)
                this._cached.shift();
        }
        else {
            this._cached[idx] = item;
        }
        this.removeUrlBuffer = null;
        this.di('#store', idx === -1 ? '[new]' : '[override]', url);
        if (_handle && _handle.componentRef) {
            this.runHook('_onReuseDestroy', url, _handle.componentRef);
        }
        this._cachedChange.next({ active: 'add', item, list: this._cached });
    }
    /**
     * 决定是否允许应用缓存数据
     * @param {?} route
     * @return {?}
     */
    shouldAttach(route) {
        if (this.hasInValidRoute(route))
            return false;
        /** @type {?} */
        const url = this.getUrl(route);
        /** @type {?} */
        const data = this.get(url);
        /** @type {?} */
        const ret = !!(data && data._handle);
        this.di('#shouldAttach', ret, url);
        if (ret && data._handle.componentRef) {
            this.runHook('_onReuseInit', url, data._handle.componentRef);
        }
        return ret;
    }
    /**
     * 提取复用数据
     * @param {?} route
     * @return {?}
     */
    retrieve(route) {
        if (this.hasInValidRoute(route))
            return null;
        /** @type {?} */
        const url = this.getUrl(route);
        /** @type {?} */
        const data = this.get(url);
        /** @type {?} */
        const ret = (data && data._handle) || null;
        this.di('#retrieve', url, ret);
        return ret;
    }
    /**
     * 决定是否应该进行复用路由处理
     * @param {?} future
     * @param {?} curr
     * @return {?}
     */
    shouldReuseRoute(future, curr) {
        /** @type {?} */
        let ret = future.routeConfig === curr.routeConfig;
        if (!ret)
            return false;
        /** @type {?} */
        const path = (/** @type {?} */ (((future.routeConfig && future.routeConfig.path) ||
            '')));
        if (path.length > 0 && ~path.indexOf(':')) {
            /** @type {?} */
            const futureUrl = this.getUrl(future);
            /** @type {?} */
            const currUrl = this.getUrl(curr);
            ret = futureUrl === currUrl;
        }
        this.di('=====================');
        this.di('#shouldReuseRoute', ret, `${this.getUrl(curr)}=>${this.getUrl(future)}`, future, curr);
        return ret;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._cached = [];
        this._cachedChange.unsubscribe();
    }
}
ReuseTabService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ReuseTabService.ctorParameters = () => [
    { type: Injector },
    { type: MenuService }
];
/** @nocollapse */ ReuseTabService.ngInjectableDef = i0.defineInjectable({ factory: function ReuseTabService_Factory() { return new ReuseTabService(i0.inject(i0.INJECTOR), i0.inject(i1.MenuService)); }, token: ReuseTabService, providedIn: "root" });
if (false) {
    /** @type {?} */
    ReuseTabService.prototype._max;
    /** @type {?} */
    ReuseTabService.prototype._debug;
    /** @type {?} */
    ReuseTabService.prototype._mode;
    /** @type {?} */
    ReuseTabService.prototype._excludes;
    /** @type {?} */
    ReuseTabService.prototype._cachedChange;
    /** @type {?} */
    ReuseTabService.prototype._cached;
    /** @type {?} */
    ReuseTabService.prototype._titleCached;
    /** @type {?} */
    ReuseTabService.prototype._closableCached;
    /** @type {?} */
    ReuseTabService.prototype.removeUrlBuffer;
    /** @type {?} */
    ReuseTabService.prototype.injector;
    /** @type {?} */
    ReuseTabService.prototype.menuService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3JldXNlLXRhYi8iLCJzb3VyY2VzIjpbInJldXNlLXRhYi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQ0wsY0FBYyxFQUVkLE1BQU0sR0FDUCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBRUwsaUJBQWlCLEdBR2xCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7O0FBUWhDLE1BQU0sT0FBTyxlQUFlOzs7Ozs7SUErVTFCLFlBQW9CLFFBQWtCLEVBQVUsV0FBd0I7UUFBcEQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBOVVoRSxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFVBQUssR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7UUFDL0IsY0FBUyxHQUFhLEVBQUUsQ0FBQztRQUN6QixrQkFBYSxHQUVmLElBQUksZUFBZSxDQUFpQixJQUFJLENBQUMsQ0FBQztRQUN4QyxZQUFPLEdBQXFCLEVBQUUsQ0FBQztRQUMvQixpQkFBWSxHQUFrQyxFQUFFLENBQUM7UUFDakQsb0JBQWUsR0FBK0IsRUFBRSxDQUFDO0lBcVVtQixDQUFDOzs7Ozs7SUEvVDdFLElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7Ozs7SUFHRCxJQUFJLEdBQUcsQ0FBQyxL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TixJQUFJLENBQ0wsQ0FBQztRQUNGLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25DLENBQUM7OztZQXpjRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBcEJiLFFBQVE7WUFNcEIsV0FBVzs7Ozs7SUFnQmxCLCtCQUFrQjs7SUFDbEIsaUNBQXVCOztJQUN2QixnQ0FBdUM7O0lBQ3ZDLG9DQUFpQzs7SUFDakMsd0NBRWdEOztJQUNoRCxrQ0FBdUM7O0lBQ3ZDLHVDQUF5RDs7SUFDekQsMENBQXlEOztJQUN6RCwwQ0FBZ0M7O0lBb1VwQixtQ0FBMEI7O0lBQUUsc0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWN0aXZhdGVkUm91dGUsXG4gIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gIFJvdXRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1lbnVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgUmV1c2VUYWJDYWNoZWQsXG4gIFJldXNlVGFiTWF0Y2hNb2RlLFxuICBSZXVzZVRhYk5vdGlmeSxcbiAgUmV1c2VUaXRsZSxcbn0gZnJvbSAnLi9yZXVzZS10YWIuaW50ZXJmYWNlcyc7XG5cbi8qKlxuICog6Lev55Sx5aSN55So57G777yM5o+Q5L6b5aSN55So5omA6ZyA6KaB5LiA5Lqb5Z+65pys5o6l5Y+jXG4gKlxuICogKirms6jvvJoqKiDmiYDmnInnvJPlrZjmlbDmja7mnaXmupDkuo7ot6/nlLHnprvlvIDlkI7miY3kvJrkuqfnlJ9cbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBSZXVzZVRhYlNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9tYXggPSAxMDtcbiAgcHJpdmF0ZSBfZGVidWcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbW9kZSA9IFJldXNlVGFiTWF0Y2hNb2RlLk1lbnU7XG4gIHByaXZhdGUgX2V4Y2x1ZGVzOiBSZWdFeHBbXSA9IFtdO1xuICBwcml2YXRlIF9jYWNoZWRDaGFuZ2U6IEJlaGF2aW9yU3ViamVjdDxcbiAgICBSZXVzZVRhYk5vdGlmeVxuICAgID4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFJldXNlVGFiTm90aWZ5PihudWxsKTtcbiAgcHJpdmF0ZSBfY2FjaGVkOiBSZXVzZVRhYkNhY2hlZFtdID0gW107XG4gIHByaXZhdGUgX3RpdGxlQ2FjaGVkOiB7IFt1cmw6IHN0cmluZ106IFJldXNlVGl0bGUgfSA9IHt9O1xuICBwcml2YXRlIF9jbG9zYWJsZUNhY2hlZDogeyBbdXJsOiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcbiAgcHJpdmF0ZSByZW1vdmVVcmxCdWZmZXI6IHN0cmluZztcblxuICAvLyAjcmVnaW9uIHB1YmxpY1xuXG4gIC8qKiDlvZPliY3ot6/nlLHlnLDlnYAgKi9cbiAgZ2V0IGN1clVybCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRVcmwodGhpcy5pbmplY3Rvci5nZXQoQWN0aXZhdGVkUm91dGUpLnNuYXBzaG90KTtcbiAgfVxuXG4gIC8qKiDlhYHorrjmnIDlpJrlpI3nlKjlpJrlsJHkuKrpobXpnaLvvIzlj5blgLzojIPlm7QgYDItMTAwYCAqL1xuICBzZXQgbWF4KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXggPSBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgMiksIDEwMCk7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuX2NhY2hlZC5sZW5ndGg7IGkgPiB0aGlzLl9tYXg7IGktLSkge1xuICAgICAgdGhpcy5fY2FjaGVkLnBvcCgpO1xuICAgIH1cbiAgfVxuICAvKiog6K6+572u5Yy56YWN5qih5byPICovXG4gIHNldCBtb2RlKHZhbHVlOiBSZXVzZVRhYk1hdGNoTW9kZSkge1xuICAgIHRoaXMuX21vZGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZTtcbiAgfVxuICAvKiog6K6+572uRGVidWfmqKHlvI8gKi9cbiAgc2V0IGRlYnVnKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGVidWcgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZGVidWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlYnVnO1xuICB9XG4gIC8qKiDmjpLpmaTop4TliJnvvIzpmZAgYG1vZGU9VVJMYCAqL1xuICBzZXQgZXhjbHVkZXModmFsdWVzOiBSZWdFeHBbXSkge1xuICAgIGlmICghdmFsdWVzKSByZXR1cm47XG4gICAgdGhpcy5fZXhjbHVkZXMgPSB2YWx1ZXM7XG4gIH1cbiAgZ2V0IGV4Y2x1ZGVzKCkge1xuICAgIHJldHVybiB0aGlzLl9leGNsdWRlcztcbiAgfVxuICAvKiog6I635Y+W5bey57yT5a2Y55qE6Lev55SxICovXG4gIGdldCBpdGVtcygpOiBSZXVzZVRhYkNhY2hlZFtdIHtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVkO1xuICB9XG4gIC8qKiDojrflj5blvZPliY3nvJPlrZjnmoTot6/nlLHmgLvmlbAgKi9cbiAgZ2V0IGNvdW50KCkge1xuICAgIHJldHVybiB0aGlzLl9jYWNoZWQubGVuZ3RoO1xuICB9XG4gIC8qKiDorqLpmIXnvJPlrZjlj5jmm7TpgJrnn6UgKi9cbiAgZ2V0IGNoYW5nZSgpOiBPYnNlcnZhYmxlPFJldXNlVGFiTm90aWZ5PiB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZENoYW5nZS5hc09ic2VydmFibGUoKTsgLy8gLnBpcGUoZmlsdGVyKHcgPT4gdyAhPT0gbnVsbCkpO1xuICB9XG4gIC8qKiDoh6rlrprkuYnlvZPliY3moIfpopggKi9cbiAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcgfCBSZXVzZVRpdGxlKSB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5jdXJVcmw7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHZhbHVlID0geyB0ZXh0OiB2YWx1ZSB9O1xuICAgIHRoaXMuX3RpdGxlQ2FjaGVkW3VybF0gPSB2YWx1ZTtcbiAgICB0aGlzLmRpKCd1cGRhdGUgY3VycmVudCB0YWcgdGl0bGU6ICcsIHZhbHVlKTtcbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7XG4gICAgICBhY3RpdmU6ICd0aXRsZScsXG4gICAgICB0aXRsZTogdmFsdWUsXG4gICAgICBsaXN0OiB0aGlzLl9jYWNoZWQsXG4gICAgfSk7XG4gIH1cbiAgLyoqIOiOt+WPluaMh+Wumui3r+W+hOe8k+WtmOaJgOWcqOS9jee9ru+8jGAtMWAg6KGo56S65peg57yT5a2YICovXG4gIGluZGV4KHVybDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVkLmZpbmRJbmRleCh3ID0+IHcudXJsID09PSB1cmwpO1xuICB9XG4gIC8qKiDojrflj5bmjIflrprot6/lvoTnvJPlrZjmmK/lkKblrZjlnKggKi9cbiAgZXhpc3RzKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXgodXJsKSAhPT0gLTE7XG4gIH1cbiAgLyoqIOiOt+WPluaMh+Wumui3r+W+hOe8k+WtmCAqL1xuICBnZXQodXJsOiBzdHJpbmcpOiBSZXVzZVRhYkNhY2hlZCB7XG4gICAgcmV0dXJuIHVybCA/IHRoaXMuX2NhY2hlZC5maW5kKHcgPT4gdy51cmwgPT09IHVybCkgfHwgbnVsbCA6IG51bGw7XG4gIH1cbiAgcHJpdmF0ZSByZW1vdmUodXJsOiBzdHJpbmcgfCBudW1iZXIsIGluY2x1ZGVOb25DbG9zZWFibGU6IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICBjb25zdCBpZHggPSB0eXBlb2YgdXJsID09PSAnc3RyaW5nJyA/IHRoaXMuaW5kZXgodXJsKSA6IHVybDtcbiAgICBjb25zdCBpdGVtID0gaWR4ICE9PSAtMSA/IHRoaXMuX2NhY2hlZFtpZHhdIDogbnVsbDtcbiAgICBpZiAoIWl0ZW0gfHwgKCFpbmNsdWRlTm9uQ2xvc2VhYmxlICYmICFpdGVtLmNsb3NhYmxlKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgdGhpcy5kZXN0cm95KGl0ZW0uX2hhbmRsZSk7XG5cbiAgICB0aGlzLl9jYWNoZWQuc3BsaWNlKGlkeCwgMSk7XG4gICAgZGVsZXRlIHRoaXMuX3RpdGxlQ2FjaGVkW3VybF07XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIOagueaNrlVSTOenu+mZpOagh+etvlxuICAgKlxuICAgKiBAcGFyYW0gW2luY2x1ZGVOb25DbG9zZWFibGU9ZmFsc2VdIOaYr+WQpuW8uuWItuWMheWQq+S4jeWPr+WFs+mXrVxuICAgKi9cbiAgY2xvc2UodXJsOiBzdHJpbmcsIGluY2x1ZGVOb25DbG9zZWFibGUgPSBmYWxzZSkge1xuICAgIHRoaXMucmVtb3ZlVXJsQnVmZmVyID0gdXJsO1xuXG4gICAgdGhpcy5yZW1vdmUodXJsLCBpbmNsdWRlTm9uQ2xvc2VhYmxlKTtcblxuICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHsgYWN0aXZlOiAnY2xvc2UnLCB1cmwsIGxpc3Q6IHRoaXMuX2NhY2hlZCB9KTtcblxuICAgIHRoaXMuZGkoJ2Nsb3NlIHRhZycsIHVybCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIOa4hemZpOWPs+i+uVxuICAgKlxuICAgKiBAcGFyYW0gW2luY2x1ZGVOb25DbG9zZWFibGU9ZmFsc2VdIOaYr+WQpuW8uuWItuWMheWQq+S4jeWPr+WFs+mXrVxuICAgKi9cbiAgY2xvc2VSaWdodCh1cmw6IHN0cmluZywgaW5jbHVkZU5vbkNsb3NlYWJsZSA9IGZhbHNlKSB7XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLmluZGV4KHVybCk7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY291bnQgLSAxOyBpID4gc3RhcnQ7IGktLSkge1xuICAgICAgdGhpcy5yZW1vdmUoaSwgaW5jbHVkZU5vbkNsb3NlYWJsZSk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW1vdmVVcmxCdWZmZXIgPSBudWxsO1xuXG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoeyBhY3RpdmU6ICdjbG9zZVJpZ2h0JywgdXJsLCBsaXN0OiB0aGlzLl9jYWNoZWQgfSk7XG5cbiAgICB0aGlzLmRpKCdjbG9zZSByaWdodCB0YWdlcycsIHVybCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIOa4hemZpOaJgOaciee8k+WtmFxuICAgKlxuICAgKiBAcGFyYW0gW2luY2x1ZGVOb25DbG9zZWFibGU9ZmFsc2VdIOaYr+WQpuW8uuWItuWMheWQq+S4jeWPr+WFs+mXrVxuICAgKi9cbiAgY2xlYXIoaW5jbHVkZU5vbkNsb3NlYWJsZSA9IGZhbHNlKSB7XG4gICAgdGhpcy5fY2FjaGVkLmZvckVhY2godyA9PiB7XG4gICAgICBpZiAoIWluY2x1ZGVOb25DbG9zZWFibGUgJiYgdy5jbG9zYWJsZSkgdGhpcy5kZXN0cm95KHcuX2hhbmRsZSk7XG4gICAgfSk7XG4gICAgdGhpcy5fY2FjaGVkID0gdGhpcy5fY2FjaGVkLmZpbHRlcihcbiAgICAgIHcgPT4gIWluY2x1ZGVOb25DbG9zZWFibGUgJiYgIXcuY2xvc2FibGUsXG4gICAgKTtcblxuICAgIHRoaXMucmVtb3ZlVXJsQnVmZmVyID0gbnVsbDtcblxuICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHsgYWN0aXZlOiAnY2xlYXInLCBsaXN0OiB0aGlzLl9jYWNoZWQgfSk7XG5cbiAgICB0aGlzLmRpKCdjbGVhciBhbGwgY2F0Y2gnKTtcbiAgfVxuICAvKipcbiAgICog56e75Yqo57yT5a2Y5pWw5o2uXG4gICAqIEBwYXJhbSB1cmwg6KaB56e75Yqo55qEVVJM5Zyw5Z2AXG4gICAqIEBwYXJhbSBwb3NpdGlvbiDmlrDkvY3nva7vvIzkuIvmoIfku44gYDBgIOW8gOWni1xuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBcbiAgICogLy8gc291cmNlXG4gICAqIFsgJy9hLzEnLCAnL2EvMicsICcvYS8zJywgJy9hLzQnLCAnL2EvNScgXVxuICAgKiBtb3ZlKCcvYS8xJywgMik7XG4gICAqIC8vIG91dHB1dFxuICAgKiBbICcvYS8yJywgJy9hLzMnLCAnL2EvMScsICcvYS80JywgJy9hLzUnIF1cbiAgICogbW92ZSgnL2EvMScsIC0xKTtcbiAgICogLy8gb3V0cHV0XG4gICAqIFsgJy9hLzInLCAnL2EvMycsICcvYS80JywgJy9hLzUnLCAnL2EvMScgXVxuICAgKiBgYGBcbiAgICovXG4gIG1vdmUodXJsOiBzdHJpbmcsIHBvc2l0aW9uOiBudW1iZXIpIHtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuX2NhY2hlZC5maW5kSW5kZXgodyA9PiB3LnVybCA9PT0gdXJsKTtcbiAgICBpZiAoc3RhcnQgPT09IC0xKSByZXR1cm47XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX2NhY2hlZC5zbGljZSgpO1xuICAgIGRhdGEuc3BsaWNlKFxuICAgICAgcG9zaXRpb24gPCAwID8gZGF0YS5sZW5ndGggKyBwb3NpdGlvbiA6IHBvc2l0aW9uLFxuICAgICAgMCxcbiAgICAgIGRhdGEuc3BsaWNlKHN0YXJ0LCAxKVswXSxcbiAgICApO1xuICAgIHRoaXMuX2NhY2hlZCA9IGRhdGE7XG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoe1xuICAgICAgYWN0aXZlOiAnbW92ZScsXG4gICAgICB1cmwsXG4gICAgICBwb3NpdGlvbixcbiAgICAgIGxpc3Q6IHRoaXMuX2NhY2hlZCxcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICog5by65Yi25YWz6Zet5b2T5YmN6Lev55Sx77yI5YyF5ZCr5LiN5Y+v5YWz6Zet54q25oCB77yJ77yM5bm26YeN5paw5a+86Iiq6IezIGBuZXdVcmxgIOi3r+eUsVxuICAgKi9cbiAgcmVwbGFjZShuZXdVcmw6IHN0cmluZykge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuY3VyVXJsO1xuICAgIGlmICh0aGlzLmV4aXN0cyh1cmwpKSB7XG4gICAgICB0aGlzLmNsb3NlKHVybCwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlVXJsQnVmZmVyID0gdXJsO1xuICAgIH1cbiAgICB0aGlzLmluamVjdG9yLmdldChSb3V0ZXIpLm5hdmlnYXRlQnlVcmwobmV3VXJsKTtcbiAgfVxuICAvKipcbiAgICog6I635Y+W5qCH6aKY77yM6aG65bqP5aaC5LiL77yaXG4gICAqXG4gICAqIDEuIOe7hOS7tuWGheS9v+eUqCBgUmV1c2VUYWJTZXJ2aWNlLnRpdGxlID0gJ25ldyB0aXRsZSdgIOmHjeaWsOaMh+WumuaWh+acrFxuICAgKiAyLiDot6/nlLHphY3nva7kuK0gZGF0YSDlsZ7mgKfkuK3ljIXlkKsgdGl0bGVJMThuID4gdGl0bGVcbiAgICogMy4g6I+c5Y2V5pWw5o2u5LitIHRleHQg5bGe5oCnXG4gICAqXG4gICAqIEBwYXJhbSB1cmwg5oyH5a6aVVJMXG4gICAqIEBwYXJhbSByb3V0ZSDmjIflrprot6/nlLHlv6vnhadcbiAgICovXG4gIGdldFRpdGxlKHVybDogc3RyaW5nLCByb3V0ZT86IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBSZXVzZVRpdGxlIHtcbiAgICBpZiAodGhpcy5fdGl0bGVDYWNoZWRbdXJsXSkgcmV0dXJuIHRoaXMuX3RpdGxlQ2FjaGVkW3VybF07XG5cbiAgICBpZiAocm91dGUgJiYgcm91dGUuZGF0YSAmJiAocm91dGUuZGF0YS50aXRsZUkxOG4gfHwgcm91dGUuZGF0YS50aXRsZSkpXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZXh0OiByb3V0ZS5kYXRhLnRpdGxlLFxuICAgICAgICBpMThuOiByb3V0ZS5kYXRhLnRpdGxlSTE4bixcbiAgICAgIH0gYXMgUmV1c2VUaXRsZTtcblxuICAgIGNvbnN0IG1lbnUgPVxuICAgICAgdGhpcy5tb2RlICE9PSBSZXVzZVRhYk1hdGNoTW9kZS5VUkwgPyB0aGlzLmdldE1lbnUodXJsKSA6IG51bGw7XG4gICAgcmV0dXJuIG1lbnUgPyB7IHRleHQ6IG1lbnUudGV4dCwgaTE4bjogbWVudS5pMThuIH0gOiB7IHRleHQ6IHVybCB9O1xuICB9XG5cbiAgLyoqXG4gICAqIOa4hemZpOagh+mimOe8k+WtmFxuICAgKi9cbiAgY2xlYXJUaXRsZUNhY2hlZCgpIHtcbiAgICB0aGlzLl90aXRsZUNhY2hlZCA9IHt9O1xuICB9XG4gIC8qKiDoh6rlrprkuYnlvZPliY0gYGNsb3NhYmxlYCDnirbmgIEgKi9cbiAgc2V0IGNsb3NhYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5jdXJVcmw7XG4gICAgdGhpcy5fY2xvc2FibGVDYWNoZWRbdXJsXSA9IHZhbHVlO1xuICAgIHRoaXMuZGkoJ3VwZGF0ZSBjdXJyZW50IHRhZyBjbG9zYWJsZTogJywgdmFsdWUpO1xuICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHtcbiAgICAgIGFjdGl2ZTogJ2Nsb3NhYmxlJyxcbiAgICAgIGNsb3NhYmxlOiB2YWx1ZSxcbiAgICAgIGxpc3Q6IHRoaXMuX2NhY2hlZCxcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICog6I635Y+WIGBjbG9zYWJsZWAg54q25oCB77yM6aG65bqP5aaC5LiL77yaXG4gICAqXG4gICAqIDEuIOe7hOS7tuWGheS9v+eUqCBgUmV1c2VUYWJTZXJ2aWNlLmNsb3NhYmxlID0gdHJ1ZWAg6YeN5paw5oyH5a6aIGBjbG9zYWJsZWAg54q25oCBXG4gICAqIDIuIOi3r+eUsemFjee9ruS4rSBkYXRhIOWxnuaAp+S4reWMheWQqyBgcmV1c2VDbG9zYWJsZWBcbiAgICogMy4g6I+c5Y2V5pWw5o2u5LitIGByZXVzZUNsb3NhYmxlYCDlsZ7mgKdcbiAgICpcbiAgICogQHBhcmFtIHVybCDmjIflrppVUkxcbiAgICogQHBhcmFtIHJvdXRlIOaMh+Wumui3r+eUseW/q+eFp1xuICAgKi9cbiAgZ2V0Q2xvc2FibGUodXJsOiBzdHJpbmcsIHJvdXRlPzogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIGlmICh0eXBlb2YgdGhpcy5fY2xvc2FibGVDYWNoZWRbdXJsXSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICByZXR1cm4gdGhpcy5fY2xvc2FibGVDYWNoZWRbdXJsXTtcblxuICAgIGlmIChyb3V0ZSAmJiByb3V0ZS5kYXRhICYmIHR5cGVvZiByb3V0ZS5kYXRhLnJldXNlQ2xvc2FibGUgPT09ICdib29sZWFuJylcbiAgICAgIHJldHVybiByb3V0ZS5kYXRhLnJldXNlQ2xvc2FibGU7XG5cbiAgICBjb25zdCBtZW51ID1cbiAgICAgIHRoaXMubW9kZSAhPT0gUmV1c2VUYWJNYXRjaE1vZGUuVVJMID8gdGhpcy5nZXRNZW51KHVybCkgOiBudWxsO1xuICAgIGlmIChtZW51ICYmIHR5cGVvZiBtZW51LnJldXNlQ2xvc2FibGUgPT09ICdib29sZWFuJylcbiAgICAgIHJldHVybiBtZW51LnJldXNlQ2xvc2FibGU7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICog5riF56m6IGBjbG9zYWJsZWAg57yT5a2YXG4gICAqL1xuICBjbGVhckNsb3NhYmxlQ2FjaGVkKCkge1xuICAgIHRoaXMuX2Nsb3NhYmxlQ2FjaGVkID0ge307XG4gIH1cbiAgZ2V0VHJ1dGhSb3V0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCkge1xuICAgIGxldCBuZXh0ID0gcm91dGU7XG4gICAgd2hpbGUgKG5leHQuZmlyc3RDaGlsZCkgbmV4dCA9IG5leHQuZmlyc3RDaGlsZDtcbiAgICByZXR1cm4gbmV4dDtcbiAgfVxuICAvKipcbiAgICog5qC55o2u5b+r54Wn6I635Y+WVVJM5Zyw5Z2AXG4gICAqL1xuICBnZXRVcmwocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBzdHJpbmcge1xuICAgIGxldCBuZXh0ID0gdGhpcy5nZXRUcnV0aFJvdXRlKHJvdXRlKTtcbiAgICBjb25zdCBzZWdtZW50cyA9IFtdO1xuICAgIHdoaWxlIChuZXh0KSB7XG4gICAgICBzZWdtZW50cy5wdXNoKG5leHQudXJsLmpvaW4oJy8nKSk7XG4gICAgICBuZXh0ID0gbmV4dC5wYXJlbnQ7XG4gICAgfVxuICAgIGNvbnN0IHVybCA9XG4gICAgICAnLycgK1xuICAgICAgc2VnbWVudHNcbiAgICAgICAgLmZpbHRlcihpID0+IGkpXG4gICAgICAgIC5yZXZlcnNlKClcbiAgICAgICAgLmpvaW4oJy8nKTtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIC8qKlxuICAgKiDmo4Dmn6Xlv6vnhafmmK/lkKblhYHorrjooqvlpI3nlKhcbiAgICovXG4gIGNhbihyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXJsKHJvdXRlKTtcbiAgICBpZiAodXJsID09PSB0aGlzLnJlbW92ZVVybEJ1ZmZlcikgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKHJvdXRlLmRhdGEgJiYgdHlwZW9mIHJvdXRlLmRhdGEucmV1c2UgPT09ICdib29sZWFuJylcbiAgICAgIHJldHVybiByb3V0ZS5kYXRhLnJldXNlO1xuXG4gICAgaWYgKHRoaXMubW9kZSAhPT0gUmV1c2VUYWJNYXRjaE1vZGUuVVJMKSB7XG4gICAgICBjb25zdCBtZW51ID0gdGhpcy5nZXRNZW51KHVybCk7XG4gICAgICBpZiAoIW1lbnUpIHJldHVybiBmYWxzZTtcbiAgICAgIGlmICh0aGlzLm1vZGUgPT09IFJldXNlVGFiTWF0Y2hNb2RlLk1lbnUpIHtcbiAgICAgICAgaWYgKG1lbnUucmV1c2UgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIW1lbnUucmV1c2UgfHwgbWVudS5yZXVzZSAhPT0gdHJ1ZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9leGNsdWRlcy5maW5kSW5kZXgociA9PiByLnRlc3QodXJsKSkgPT09IC0xO1xuICB9XG4gIC8qKlxuICAgKiDliLfmlrDvvIzop6blj5HkuIDkuKogcmVmcmVzaCDnsbvlnovkuovku7ZcbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgcmVmcmVzaChkYXRhPzogYW55KSB7XG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoeyBhY3RpdmU6ICdyZWZyZXNoJywgZGF0YSB9KTtcbiAgfVxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBwcml2YXRlc1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgcHJpdmF0ZSBkZXN0cm95KF9oYW5kbGU6IGFueSkge1xuICAgIGlmIChfaGFuZGxlICYmIF9oYW5kbGUuY29tcG9uZW50UmVmICYmIF9oYW5kbGUuY29tcG9uZW50UmVmLmRlc3Ryb3kpXG4gICAgICBfaGFuZGxlLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gIH1cblxuICBwcml2YXRlIGRpKC4uLmFyZ3MpIHtcbiAgICBpZiAoIXRoaXMuZGVidWcpIHJldHVybjtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybiguLi5hcmdzKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSBtZW51U2VydmljZTogTWVudVNlcnZpY2UpIHsgfVxuXG4gIHByaXZhdGUgZ2V0TWVudSh1cmw6IHN0cmluZykge1xuICAgIGNvbnN0IG1lbnVzID0gdGhpcy5tZW51U2VydmljZS5nZXRQYXRoQnlVcmwodXJsKTtcbiAgICBpZiAoIW1lbnVzIHx8IG1lbnVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIG1lbnVzLnBvcCgpO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBwcml2YXRlIHJ1bkhvb2sobWV0aG9kOiBzdHJpbmcsIHVybDogc3RyaW5nLCBjb21wOiBhbnkpIHtcbiAgICBpZiAoY29tcC5pbnN0YW5jZSAmJiB0eXBlb2YgY29tcC5pbnN0YW5jZVttZXRob2RdID09PSAnZnVuY3Rpb24nKVxuICAgICAgY29tcC5pbnN0YW5jZVttZXRob2RdKCk7XG4gIH1cblxuICBwcml2YXRlIGhhc0luVmFsaWRSb3V0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCkge1xuICAgIHJldHVybiAoXG4gICAgICAhcm91dGUucm91dGVDb25maWcgfHxcbiAgICAgIHJvdXRlLnJvdXRlQ29uZmlnLmxvYWRDaGlsZHJlbiB8fFxuICAgICAgcm91dGUucm91dGVDb25maWcuY2hpbGRyZW5cbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIOWGs+WumuaYr+WQpuWFgeiuuOi3r+eUseWkjeeUqO+8jOiLpSBgdHJ1ZWAg5Lya6Kem5Y+RIGBzdG9yZWBcbiAgICovXG4gIHNob3VsZERldGFjaChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmhhc0luVmFsaWRSb3V0ZShyb3V0ZSkpIHJldHVybiBmYWxzZTtcbiAgICB0aGlzLmRpKCcjc2hvdWxkRGV0YWNoJywgdGhpcy5jYW4ocm91dGUpLCB0aGlzLmdldFVybChyb3V0ZSkpO1xuICAgIHJldHVybiB0aGlzLmNhbihyb3V0ZSk7XG4gIH1cblxuICAvKipcbiAgICog5a2Y5YKoXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHN0b3JlKF9zbmFwc2hvdDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgX2hhbmRsZTogYW55KSB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRVcmwoX3NuYXBzaG90KTtcbiAgICBjb25zdCBpZHggPSB0aGlzLmluZGV4KHVybCk7XG5cbiAgICBjb25zdCBpdGVtOiBSZXVzZVRhYkNhY2hlZCA9IHtcbiAgICAgIHRpdGxlOiB0aGlzLmdldFRpdGxlKHVybCwgX3NuYXBzaG90KSxcbiAgICAgIGNsb3NhYmxlOiB0aGlzLmdldENsb3NhYmxlKHVybCwgX3NuYXBzaG90KSxcbiAgICAgIHVybCxcbiAgICAgIF9zbmFwc2hvdCxcbiAgICAgIF9oYW5kbGUsXG4gICAgfTtcbiAgICBpZiAoaWR4ID09PSAtMSkge1xuICAgICAgdGhpcy5fY2FjaGVkLnB1c2goaXRlbSk7XG4gICAgICBpZiAodGhpcy5jb3VudCA+IHRoaXMuX21heCkgdGhpcy5fY2FjaGVkLnNoaWZ0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NhY2hlZFtpZHhdID0gaXRlbTtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVVcmxCdWZmZXIgPSBudWxsO1xuXG4gICAgdGhpcy5kaSgnI3N0b3JlJywgaWR4ID09PSAtMSA/ICdbbmV3XScgOiAnW292ZXJyaWRlXScsIHVybCk7XG5cbiAgICBpZiAoX2hhbmRsZSAmJiBfaGFuZGxlLmNvbXBvbmVudFJlZikge1xuICAgICAgdGhpcy5ydW5Ib29rKCdfb25SZXVzZURlc3Ryb3knLCB1cmwsIF9oYW5kbGUuY29tcG9uZW50UmVmKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7IGFjdGl2ZTogJ2FkZCcsIGl0ZW0sIGxpc3Q6IHRoaXMuX2NhY2hlZCB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlhrPlrprmmK/lkKblhYHorrjlupTnlKjnvJPlrZjmlbDmja5cbiAgICovXG4gIHNob3VsZEF0dGFjaChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmhhc0luVmFsaWRSb3V0ZShyb3V0ZSkpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVybChyb3V0ZSk7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0KHVybCk7XG4gICAgY29uc3QgcmV0ID0gISEoZGF0YSAmJiBkYXRhLl9oYW5kbGUpO1xuICAgIHRoaXMuZGkoJyNzaG91bGRBdHRhY2gnLCByZXQsIHVybCk7XG4gICAgaWYgKHJldCAmJiBkYXRhLl9oYW5kbGUuY29tcG9uZW50UmVmKSB7XG4gICAgICB0aGlzLnJ1bkhvb2soJ19vblJldXNlSW5pdCcsIHVybCwgZGF0YS5faGFuZGxlLmNvbXBvbmVudFJlZik7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICog5o+Q5Y+W5aSN55So5pWw5o2uXG4gICAqL1xuICByZXRyaWV2ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IHt9IHtcbiAgICBpZiAodGhpcy5oYXNJblZhbGlkUm91dGUocm91dGUpKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVybChyb3V0ZSk7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0KHVybCk7XG4gICAgY29uc3QgcmV0ID0gKGRhdGEgJiYgZGF0YS5faGFuZGxlKSB8fCBudWxsO1xuICAgIHRoaXMuZGkoJyNyZXRyaWV2ZScsIHVybCwgcmV0KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIOWGs+WumuaYr+WQpuW6lOivpei/m+ihjOWkjeeUqOi3r+eUseWkhOeQhlxuICAgKi9cbiAgc2hvdWxkUmV1c2VSb3V0ZShcbiAgICBmdXR1cmU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgY3VycjogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgKTogYm9vbGVhbiB7XG4gICAgbGV0IHJldCA9IGZ1dHVyZS5yb3V0ZUNvbmZpZyA9PT0gY3Vyci5yb3V0ZUNvbmZpZztcbiAgICBpZiAoIXJldCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgcGF0aCA9ICgoZnV0dXJlLnJvdXRlQ29uZmlnICYmIGZ1dHVyZS5yb3V0ZUNvbmZpZy5wYXRoKSB8fFxuICAgICAgJycpIGFzIHN0cmluZztcbiAgICBpZiAocGF0aC5sZW5ndGggPiAwICYmIH5wYXRoLmluZGV4T2YoJzonKSkge1xuICAgICAgY29uc3QgZnV0dXJlVXJsID0gdGhpcy5nZXRVcmwoZnV0dXJlKTtcbiAgICAgIGNvbnN0IGN1cnJVcmwgPSB0aGlzLmdldFVybChjdXJyKTtcbiAgICAgIHJldCA9IGZ1dHVyZVVybCA9PT0gY3VyclVybDtcbiAgICB9XG4gICAgdGhpcy5kaSgnPT09PT09PT09PT09PT09PT09PT09Jyk7XG4gICAgdGhpcy5kaShcbiAgICAgICcjc2hvdWxkUmV1c2VSb3V0ZScsXG4gICAgICByZXQsXG4gICAgICBgJHt0aGlzLmdldFVybChjdXJyKX09PiR7dGhpcy5nZXRVcmwoZnV0dXJlKX1gLFxuICAgICAgZnV0dXJlLFxuICAgICAgY3VycixcbiAgICApO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9jYWNoZWQgPSBbXTtcbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19