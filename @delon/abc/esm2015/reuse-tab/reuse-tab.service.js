/**
 * @fileoverview added by tsickle
 * Generated from: reuse-tab.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router, ROUTER_CONFIGURATION, } from '@angular/router';
import { MenuService, ScrollService } from '@delon/theme';
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
        this._inited = false;
        this._max = 10;
        this._keepingScroll = false;
        this._cachedChange = new BehaviorSubject(null);
        this._cached = [];
        this._titleCached = {};
        this._closableCached = {};
        this.positionBuffer = {};
        this.debug = false;
        this.routeParamMatchMode = 'strict';
        this.mode = ReuseTabMatchMode.Menu;
        /**
         * 排除规则，限 `mode=URL`
         */
        this.excludes = [];
    }
    /**
     * @private
     * @return {?}
     */
    get snapshot() {
        return this.injector.get(ActivatedRoute).snapshot;
    }
    // #region public
    /**
     * @return {?}
     */
    get inited() {
        return this._inited;
    }
    /**
     * 当前路由地址
     * @return {?}
     */
    get curUrl() {
        return this.getUrl(this.snapshot);
    }
    /**
     * 允许最多复用多少个页面，取值范围 `2-100`，值发生变更时会强制关闭且忽略可关闭条件
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
     * @param {?} value
     * @return {?}
     */
    set keepingScroll(value) {
        this._keepingScroll = value;
        this.initScroll();
    }
    /**
     * @return {?}
     */
    get keepingScroll() {
        return this._keepingScroll;
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
            url,
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
        return this._cached.findIndex((/**
         * @param {?} w
         * @return {?}
         */
        w => w.url === url));
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
     * @param {?=} url
     * @return {?}
     */
    get(url) {
        return url ? this._cached.find((/**
         * @param {?} w
         * @return {?}
         */
        w => w.url === url)) || null : null;
    }
    /**
     * @private
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
        this._cached.forEach((/**
         * @param {?} w
         * @return {?}
         */
        w => {
            if (!includeNonCloseable && w.closable)
                this.destroy(w._handle);
        }));
        this._cached = this._cached.filter((/**
         * @param {?} w
         * @return {?}
         */
        w => !includeNonCloseable && !w.closable));
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
        const start = this._cached.findIndex((/**
         * @param {?} w
         * @return {?}
         */
        w => w.url === url));
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
        if (this._titleCached[url]) {
            return this._titleCached[url];
        }
        if (route && route.data && (route.data.titleI18n || route.data.title)) {
            return (/** @type {?} */ ({
                text: route.data.title,
                i18n: route.data.titleI18n,
            }));
        }
        /** @type {?} */
        const menu = this.getMenu(url);
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
            next = (/** @type {?} */ (next.parent));
        }
        /** @type {?} */
        const url = '/' +
            segments
                .filter((/**
             * @param {?} i
             * @return {?}
             */
            i => i))
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
        return !this.isExclude(url);
    }
    /**
     * @param {?} url
     * @return {?}
     */
    isExclude(url) {
        return this.excludes.findIndex((/**
         * @param {?} r
         * @return {?}
         */
        r => r.test(url))) !== -1;
    }
    /**
     * 刷新，触发一个 refresh 类型事件
     * @param {?=} data
     * @return {?}
     */
    refresh(data) {
        this._cachedChange.next({ active: 'refresh', data });
    }
    // #endregion
    // #region privates
    /**
     * @private
     * @param {?} _handle
     * @return {?}
     */
    destroy(_handle) {
        if (_handle && _handle.componentRef && _handle.componentRef.destroy)
            _handle.componentRef.destroy();
    }
    /**
     * @private
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
     * @return {?}
     */
    init() {
        this.initScroll();
        this._inited = true;
    }
    /**
     * @private
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
    /**
     * @param {?} method
     * @param {?} comp
     * @return {?}
     */
    runHook(method, comp) {
        if (typeof comp === 'number') {
            /** @type {?} */
            const item = this._cached[comp];
            comp = item._handle.componentRef;
        }
        if (comp == null) {
            return;
        }
        if (comp.instance && typeof comp.instance[method] === 'function') {
            comp.instance[method]();
        }
    }
    /**
     * @private
     * @param {?} route
     * @return {?}
     */
    hasInValidRoute(route) {
        return !route.routeConfig || route.routeConfig.loadChildren || route.routeConfig.children;
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
    store(_snapshot, _handle) {
        /** @type {?} */
        const url = this.getUrl(_snapshot);
        /** @type {?} */
        const idx = this.index(url);
        /** @type {?} */
        const isAdd = idx === -1;
        /** @type {?} */
        const item = {
            title: this.getTitle(url, _snapshot),
            closable: this.getClosable(url, _snapshot),
            position: this.getKeepingScroll(url, _snapshot) ? this.positionBuffer[url] : null,
            url,
            _snapshot,
            _handle,
        };
        if (isAdd) {
            if (this.count >= this._max) {
                // Get the oldest closable location
                /** @type {?} */
                const closeIdx = this._cached.findIndex((/**
                 * @param {?} w
                 * @return {?}
                 */
                w => (/** @type {?} */ (w.closable))));
                if (closeIdx !== -1)
                    this.remove(closeIdx, false);
            }
            this._cached.push(item);
        }
        else {
            this._cached[idx] = item;
        }
        this.removeUrlBuffer = null;
        this.di('#store', isAdd ? '[new]' : '[override]', url);
        if (_handle && _handle.componentRef) {
            this.runHook('_onReuseDestroy', _handle.componentRef);
        }
        if (!isAdd) {
            this._cachedChange.next({ active: 'override', item, list: this._cached });
        }
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
        if (ret) {
            /** @type {?} */
            const compRef = (/** @type {?} */ (data))._handle.componentRef;
            if (compRef) {
                this.componentRef = compRef;
                this.runHook('_onReuseInit', compRef);
            }
        }
        else {
            this._cachedChange.next({ active: 'add', url, list: this._cached });
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
        const path = (/** @type {?} */ (((future.routeConfig && future.routeConfig.path) || '')));
        if (path.length > 0 && ~path.indexOf(':')) {
            if (this.routeParamMatchMode === 'strict') {
                ret = this.getUrl(future) === this.getUrl(curr);
            }
            else {
                ret = path === ((curr.routeConfig && curr.routeConfig.path) || '');
            }
        }
        this.di('=====================');
        this.di('#shouldReuseRoute', ret, `${this.getUrl(curr)}=>${this.getUrl(future)}`, future, curr);
        return ret;
    }
    // #region scroll
    /**
     * 获取 `keepingScroll` 状态，顺序如下：
     *
     * 1. 路由配置中 data 属性中包含 `keepingScroll`
     * 2. 菜单数据中 `keepingScroll` 属性
     * 3. 组件 `keepingScroll` 值
     * @param {?} url
     * @param {?=} route
     * @return {?}
     */
    getKeepingScroll(url, route) {
        if (route && route.data && typeof route.data.keepingScroll === 'boolean')
            return route.data.keepingScroll;
        /** @type {?} */
        const menu = this.mode !== ReuseTabMatchMode.URL ? this.getMenu(url) : null;
        if (menu && typeof menu.keepingScroll === 'boolean')
            return menu.keepingScroll;
        return this.keepingScroll;
    }
    /**
     * @private
     * @return {?}
     */
    get isDisabledInRouter() {
        /** @type {?} */
        const routerConfig = this.injector.get(ROUTER_CONFIGURATION, (/** @type {?} */ ({})));
        return routerConfig.scrollPositionRestoration === 'disabled';
    }
    /**
     * @private
     * @return {?}
     */
    get ss() {
        return this.injector.get(ScrollService);
    }
    /**
     * @private
     * @return {?}
     */
    initScroll() {
        if (this._router$) {
            this._router$.unsubscribe();
        }
        this._router$ = this.injector.get(Router).events.subscribe((/**
         * @param {?} e
         * @return {?}
         */
        e => {
            if (e instanceof NavigationStart) {
                /** @type {?} */
                const url = this.curUrl;
                if (this.getKeepingScroll(url, this.getTruthRoute(this.snapshot))) {
                    this.positionBuffer[url] = this.ss.getScrollPosition(this.keepingScrollContainer);
                }
                else {
                    delete this.positionBuffer[url];
                }
            }
            else if (e instanceof NavigationEnd) {
                /** @type {?} */
                const url = this.curUrl;
                /** @type {?} */
                const item = this.get(url);
                if (item && item.position && this.getKeepingScroll(url, this.getTruthRoute(this.snapshot))) {
                    if (this.isDisabledInRouter) {
                        this.ss.scrollToPosition(this.keepingScrollContainer, item.position);
                    }
                    else {
                        setTimeout((/**
                         * @return {?}
                         */
                        () => this.ss.scrollToPosition(this.keepingScrollContainer, (/** @type {?} */ (item.position)))), 1);
                    }
                }
            }
        }));
    }
    // #endregion
    /**
     * @return {?}
     */
    ngOnDestroy() {
        const { _cachedChange, _router$ } = this;
        this.clear();
        this._cached = [];
        _cachedChange.complete();
        if (_router$) {
            _router$.unsubscribe();
        }
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
/** @nocollapse */ ReuseTabService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ReuseTabService_Factory() { return new ReuseTabService(i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.MenuService)); }, token: ReuseTabService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ReuseTabService.prototype._inited;
    /**
     * @type {?}
     * @private
     */
    ReuseTabService.prototype._max;
    /**
     * @type {?}
     * @private
     */
    ReuseTabService.prototype._keepingScroll;
    /**
     * @type {?}
     * @private
     */
    ReuseTabService.prototype._cachedChange;
    /**
     * @type {?}
     * @private
     */
    ReuseTabService.prototype._cached;
    /**
     * @type {?}
     * @private
     */
    ReuseTabService.prototype._titleCached;
    /**
     * @type {?}
     * @private
     */
    ReuseTabService.prototype._closableCached;
    /**
     * @type {?}
     * @private
     */
    ReuseTabService.prototype._router$;
    /**
     * @type {?}
     * @private
     */
    ReuseTabService.prototype.removeUrlBuffer;
    /**
     * @type {?}
     * @private
     */
    ReuseTabService.prototype.positionBuffer;
    /** @type {?} */
    ReuseTabService.prototype.componentRef;
    /** @type {?} */
    ReuseTabService.prototype.debug;
    /** @type {?} */
    ReuseTabService.prototype.routeParamMatchMode;
    /** @type {?} */
    ReuseTabService.prototype.mode;
    /**
     * 排除规则，限 `mode=URL`
     * @type {?}
     */
    ReuseTabService.prototype.excludes;
    /** @type {?} */
    ReuseTabService.prototype.keepingScrollContainer;
    /**
     * @type {?}
     * @private
     */
    ReuseTabService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    ReuseTabService.prototype.menuService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvcmV1c2UtdGFiL3JldXNlLXRhYi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUNMLGNBQWMsRUFHZCxhQUFhLEVBQ2IsZUFBZSxFQUNmLE1BQU0sRUFDTixvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUUxRCxPQUFPLEVBQUUsZUFBZSxFQUE4QixNQUFNLE1BQU0sQ0FBQztBQUNuRSxPQUFPLEVBSUwsaUJBQWlCLEdBSWxCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7O0FBUWhDLE1BQU0sT0FBTyxlQUFlOzs7Ozs7SUF3VTFCLFlBQW9CLFFBQWtCLEVBQVUsV0FBd0I7UUFBcEQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBdlVoRSxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixrQkFBYSxHQUFHLElBQUksZUFBZSxDQUF3QixJQUFJLENBQUMsQ0FBQztRQUNqRSxZQUFPLEdBQXFCLEVBQUUsQ0FBQztRQUMvQixpQkFBWSxHQUFrQyxFQUFFLENBQUM7UUFDakQsb0JBQWUsR0FBK0IsRUFBRSxDQUFDO1FBR2pELG1CQUFjLEdBQXdDLEVBQUUsQ0FBQztRQUVqRSxVQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2Qsd0JBQW1CLEdBQWdDLFFBQVEsQ0FBQztRQUM1RCxTQUFJLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDOzs7O1FBRTlCLGFBQVEsR0FBYSxF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UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBSUQsV0FBVztjQUNILEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUk7UUFDeEMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXpCLElBQUksUUFBUSxFQUFFO1lBQ1osUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzs7O1lBN2dCRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBNUJiLFFBQVE7WUFVcEIsV0FBVzs7Ozs7Ozs7SUFvQmxCLGtDQUF3Qjs7Ozs7SUFDeEIsK0JBQWtCOzs7OztJQUNsQix5Q0FBK0I7Ozs7O0lBQy9CLHdDQUF5RTs7Ozs7SUFDekUsa0NBQXVDOzs7OztJQUN2Qyx1Q0FBeUQ7Ozs7O0lBQ3pELDBDQUF5RDs7Ozs7SUFDekQsbUNBQWlDOzs7OztJQUNqQywwQ0FBdUM7Ozs7O0lBQ3ZDLHlDQUFpRTs7SUFDakUsdUNBQWdDOztJQUNoQyxnQ0FBYzs7SUFDZCw4Q0FBNEQ7O0lBQzVELCtCQUE4Qjs7Ozs7SUFFOUIsbUNBQXdCOztJQStCeEIsaURBQWdDOzs7OztJQXlScEIsbUNBQTBCOzs7OztJQUFFLHNDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFjdGl2YXRlZFJvdXRlLFxuICBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICBFeHRyYU9wdGlvbnMsXG4gIE5hdmlnYXRpb25FbmQsXG4gIE5hdmlnYXRpb25TdGFydCxcbiAgUm91dGVyLFxuICBST1VURVJfQ09ORklHVVJBVElPTixcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1lbnVTZXJ2aWNlLCBTY3JvbGxTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFVuc3Vic2NyaWJhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBSZXVzZUNvbXBvbmVudFJlZixcbiAgUmV1c2VIb29rVHlwZXMsXG4gIFJldXNlVGFiQ2FjaGVkLFxuICBSZXVzZVRhYk1hdGNoTW9kZSxcbiAgUmV1c2VUYWJOb3RpZnksXG4gIFJldXNlVGFiUm91dGVQYXJhbU1hdGNoTW9kZSxcbiAgUmV1c2VUaXRsZSxcbn0gZnJvbSAnLi9yZXVzZS10YWIuaW50ZXJmYWNlcyc7XG5cbi8qKlxuICog6Lev55Sx5aSN55So57G777yM5o+Q5L6b5aSN55So5omA6ZyA6KaB5LiA5Lqb5Z+65pys5o6l5Y+jXG4gKlxuICogKirms6jvvJoqKiDmiYDmnInnvJPlrZjmlbDmja7mnaXmupDkuo7ot6/nlLHnprvlvIDlkI7miY3kvJrkuqfnlJ9cbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBSZXVzZVRhYlNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9pbml0ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbWF4ID0gMTA7XG4gIHByaXZhdGUgX2tlZXBpbmdTY3JvbGwgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY2FjaGVkQ2hhbmdlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxSZXVzZVRhYk5vdGlmeSB8IG51bGw+KG51bGwpO1xuICBwcml2YXRlIF9jYWNoZWQ6IFJldXNlVGFiQ2FjaGVkW10gPSBbXTtcbiAgcHJpdmF0ZSBfdGl0bGVDYWNoZWQ6IHsgW3VybDogc3RyaW5nXTogUmV1c2VUaXRsZSB9ID0ge307XG4gIHByaXZhdGUgX2Nsb3NhYmxlQ2FjaGVkOiB7IFt1cmw6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xuICBwcml2YXRlIF9yb3V0ZXIkOiBVbnN1YnNjcmliYWJsZTtcbiAgcHJpdmF0ZSByZW1vdmVVcmxCdWZmZXI6IHN0cmluZyB8IG51bGw7XG4gIHByaXZhdGUgcG9zaXRpb25CdWZmZXI6IHsgW3VybDogc3RyaW5nXTogW251bWJlciwgbnVtYmVyXSB9ID0ge307XG4gIGNvbXBvbmVudFJlZjogUmV1c2VDb21wb25lbnRSZWY7XG4gIGRlYnVnID0gZmFsc2U7XG4gIHJvdXRlUGFyYW1NYXRjaE1vZGU6IFJldXNlVGFiUm91dGVQYXJhbU1hdGNoTW9kZSA9ICdzdHJpY3QnO1xuICBtb2RlID0gUmV1c2VUYWJNYXRjaE1vZGUuTWVudTtcbiAgLyoqIOaOkumZpOinhOWIme+8jOmZkCBgbW9kZT1VUkxgICovXG4gIGV4Y2x1ZGVzOiBSZWdFeHBbXSA9IFtdO1xuXG4gIHByaXZhdGUgZ2V0IHNuYXBzaG90KCkge1xuICAgIHJldHVybiB0aGlzLmluamVjdG9yLmdldChBY3RpdmF0ZWRSb3V0ZSkuc25hcHNob3Q7XG4gIH1cblxuICAvLyAjcmVnaW9uIHB1YmxpY1xuXG4gIGdldCBpbml0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luaXRlZDtcbiAgfVxuXG4gIC8qKiDlvZPliY3ot6/nlLHlnLDlnYAgKi9cbiAgZ2V0IGN1clVybCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRVcmwodGhpcy5zbmFwc2hvdCk7XG4gIH1cblxuICAvKiog5YWB6K645pyA5aSa5aSN55So5aSa5bCR5Liq6aG16Z2i77yM5Y+W5YC86IyD5Zu0IGAyLTEwMGDvvIzlgLzlj5HnlJ/lj5jmm7Tml7bkvJrlvLrliLblhbPpl63kuJTlv73nlaXlj6/lhbPpl63mnaHku7YgKi9cbiAgc2V0IG1heCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4ID0gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIDIpLCAxMDApO1xuICAgIGZvciAobGV0IGkgPSB0aGlzLl9jYWNoZWQubGVuZ3RoOyBpID4gdGhpcy5fbWF4OyBpLS0pIHtcbiAgICAgIHRoaXMuX2NhY2hlZC5wb3AoKTtcbiAgICB9XG4gIH1cbiAgc2V0IGtlZXBpbmdTY3JvbGwodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9rZWVwaW5nU2Nyb2xsID0gdmFsdWU7XG4gICAgdGhpcy5pbml0U2Nyb2xsKCk7XG4gIH1cbiAgZ2V0IGtlZXBpbmdTY3JvbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2tlZXBpbmdTY3JvbGw7XG4gIH1cbiAga2VlcGluZ1Njcm9sbENvbnRhaW5lcjogRWxlbWVudDtcbiAgLyoqIOiOt+WPluW3sue8k+WtmOeahOi3r+eUsSAqL1xuICBnZXQgaXRlbXMoKTogUmV1c2VUYWJDYWNoZWRbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZDtcbiAgfVxuICAvKiog6I635Y+W5b2T5YmN57yT5a2Y55qE6Lev55Sx5oC75pWwICovXG4gIGdldCBjb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVkLmxlbmd0aDtcbiAgfVxuICAvKiog6K6i6ZiF57yT5a2Y5Y+Y5pu06YCa55+lICovXG4gIGdldCBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxSZXVzZVRhYk5vdGlmeSB8IG51bGw+IHtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVkQ2hhbmdlLmFzT2JzZXJ2YWJsZSgpOyAvLyAucGlwZShmaWx0ZXIodyA9PiB3ICE9PSBudWxsKSk7XG4gIH1cbiAgLyoqIOiHquWumuS5ieW9k+WJjeagh+mimCAqL1xuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IFJldXNlVGl0bGUpIHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmN1clVybDtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykgdmFsdWUgPSB7IHRleHQ6IHZhbHVlIH07XG4gICAgdGhpcy5fdGl0bGVDYWNoZWRbdXJsXSA9IHZhbHVlO1xuICAgIHRoaXMuZGkoJ3VwZGF0ZSBjdXJyZW50IHRhZyB0aXRsZTogJywgdmFsdWUpO1xuICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHtcbiAgICAgIGFjdGl2ZTogJ3RpdGxlJyxcbiAgICAgIHVybCxcbiAgICAgIHRpdGxlOiB2YWx1ZSxcbiAgICAgIGxpc3Q6IHRoaXMuX2NhY2hlZCxcbiAgICB9KTtcbiAgfVxuICAvKiog6I635Y+W5oyH5a6a6Lev5b6E57yT5a2Y5omA5Zyo5L2N572u77yMYC0xYCDooajnpLrml6DnvJPlrZggKi9cbiAgaW5kZXgodXJsOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jYWNoZWQuZmluZEluZGV4KHcgPT4gdy51cmwgPT09IHVybCk7XG4gIH1cbiAgLyoqIOiOt+WPluaMh+Wumui3r+W+hOe8k+WtmOaYr+WQpuWtmOWcqCAqL1xuICBleGlzdHModXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleCh1cmwpICE9PSAtMTtcbiAgfVxuICAvKiog6I635Y+W5oyH5a6a6Lev5b6E57yT5a2YICovXG4gIGdldCh1cmw/OiBzdHJpbmcpOiBSZXVzZVRhYkNhY2hlZCB8IG51bGwge1xuICAgIHJldHVybiB1cmwgPyB0aGlzLl9jYWNoZWQuZmluZCh3ID0+IHcudXJsID09PSB1cmwpIHx8IG51bGwgOiBudWxsO1xuICB9XG4gIHByaXZhdGUgcmVtb3ZlKHVybDogc3RyaW5nIHwgbnVtYmVyLCBpbmNsdWRlTm9uQ2xvc2VhYmxlOiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaWR4ID0gdHlwZW9mIHVybCA9PT0gJ3N0cmluZycgPyB0aGlzLmluZGV4KHVybCkgOiB1cmw7XG4gICAgY29uc3QgaXRlbSA9IGlkeCAhPT0gLTEgPyB0aGlzLl9jYWNoZWRbaWR4XSA6IG51bGw7XG4gICAgaWYgKCFpdGVtIHx8ICghaW5jbHVkZU5vbkNsb3NlYWJsZSAmJiAhaXRlbS5jbG9zYWJsZSkpIHJldHVybiBmYWxzZTtcblxuICAgIHRoaXMuZGVzdHJveShpdGVtLl9oYW5kbGUpO1xuXG4gICAgdGhpcy5fY2FjaGVkLnNwbGljZShpZHgsIDEpO1xuICAgIGRlbGV0ZSB0aGlzLl90aXRsZUNhY2hlZFt1cmxdO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiDmoLnmja5VUkznp7vpmaTmoIfnrb5cbiAgICpcbiAgICogQHBhcmFtIFtpbmNsdWRlTm9uQ2xvc2VhYmxlPWZhbHNlXSDmmK/lkKblvLrliLbljIXlkKvkuI3lj6/lhbPpl61cbiAgICovXG4gIGNsb3NlKHVybDogc3RyaW5nLCBpbmNsdWRlTm9uQ2xvc2VhYmxlID0gZmFsc2UpIHtcbiAgICB0aGlzLnJlbW92ZVVybEJ1ZmZlciA9IHVybDtcblxuICAgIHRoaXMucmVtb3ZlKHVybCwgaW5jbHVkZU5vbkNsb3NlYWJsZSk7XG5cbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7IGFjdGl2ZTogJ2Nsb3NlJywgdXJsLCBsaXN0OiB0aGlzLl9jYWNoZWQgfSk7XG5cbiAgICB0aGlzLmRpKCdjbG9zZSB0YWcnLCB1cmwpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiDmuIXpmaTlj7PovrlcbiAgICpcbiAgICogQHBhcmFtIFtpbmNsdWRlTm9uQ2xvc2VhYmxlPWZhbHNlXSDmmK/lkKblvLrliLbljIXlkKvkuI3lj6/lhbPpl61cbiAgICovXG4gIGNsb3NlUmlnaHQodXJsOiBzdHJpbmcsIGluY2x1ZGVOb25DbG9zZWFibGUgPSBmYWxzZSkge1xuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5pbmRleCh1cmwpO1xuICAgIGZvciAobGV0IGkgPSB0aGlzLmNvdW50IC0gMTsgaSA+IHN0YXJ0OyBpLS0pIHtcbiAgICAgIHRoaXMucmVtb3ZlKGksIGluY2x1ZGVOb25DbG9zZWFibGUpO1xuICAgIH1cblxuICAgIHRoaXMucmVtb3ZlVXJsQnVmZmVyID0gbnVsbDtcblxuICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHsgYWN0aXZlOiAnY2xvc2VSaWdodCcsIHVybCwgbGlzdDogdGhpcy5fY2FjaGVkIH0pO1xuXG4gICAgdGhpcy5kaSgnY2xvc2UgcmlnaHQgdGFnZXMnLCB1cmwpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiDmuIXpmaTmiYDmnInnvJPlrZhcbiAgICpcbiAgICogQHBhcmFtIFtpbmNsdWRlTm9uQ2xvc2VhYmxlPWZhbHNlXSDmmK/lkKblvLrliLbljIXlkKvkuI3lj6/lhbPpl61cbiAgICovXG4gIGNsZWFyKGluY2x1ZGVOb25DbG9zZWFibGUgPSBmYWxzZSkge1xuICAgIHRoaXMuX2NhY2hlZC5mb3JFYWNoKHcgPT4ge1xuICAgICAgaWYgKCFpbmNsdWRlTm9uQ2xvc2VhYmxlICYmIHcuY2xvc2FibGUpIHRoaXMuZGVzdHJveSh3Ll9oYW5kbGUpO1xuICAgIH0pO1xuICAgIHRoaXMuX2NhY2hlZCA9IHRoaXMuX2NhY2hlZC5maWx0ZXIodyA9PiAhaW5jbHVkZU5vbkNsb3NlYWJsZSAmJiAhdy5jbG9zYWJsZSk7XG5cbiAgICB0aGlzLnJlbW92ZVVybEJ1ZmZlciA9IG51bGw7XG5cbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7IGFjdGl2ZTogJ2NsZWFyJywgbGlzdDogdGhpcy5fY2FjaGVkIH0pO1xuXG4gICAgdGhpcy5kaSgnY2xlYXIgYWxsIGNhdGNoJyk7XG4gIH1cbiAgLyoqXG4gICAqIOenu+WKqOe8k+WtmOaVsOaNrlxuICAgKiBAcGFyYW0gdXJsIOimgeenu+WKqOeahFVSTOWcsOWdgFxuICAgKiBAcGFyYW0gcG9zaXRpb24g5paw5L2N572u77yM5LiL5qCH5LuOIGAwYCDlvIDlp4tcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgXG4gICAqIC8vIHNvdXJjZVxuICAgKiBbICcvYS8xJywgJy9hLzInLCAnL2EvMycsICcvYS80JywgJy9hLzUnIF1cbiAgICogbW92ZSgnL2EvMScsIDIpO1xuICAgKiAvLyBvdXRwdXRcbiAgICogWyAnL2EvMicsICcvYS8zJywgJy9hLzEnLCAnL2EvNCcsICcvYS81JyBdXG4gICAqIG1vdmUoJy9hLzEnLCAtMSk7XG4gICAqIC8vIG91dHB1dFxuICAgKiBbICcvYS8yJywgJy9hLzMnLCAnL2EvNCcsICcvYS81JywgJy9hLzEnIF1cbiAgICogYGBgXG4gICAqL1xuICBtb3ZlKHVybDogc3RyaW5nLCBwb3NpdGlvbjogbnVtYmVyKSB7XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9jYWNoZWQuZmluZEluZGV4KHcgPT4gdy51cmwgPT09IHVybCk7XG4gICAgaWYgKHN0YXJ0ID09PSAtMSkgcmV0dXJuO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9jYWNoZWQuc2xpY2UoKTtcbiAgICBkYXRhLnNwbGljZShwb3NpdGlvbiA8IDAgPyBkYXRhLmxlbmd0aCArIHBvc2l0aW9uIDogcG9zaXRpb24sIDAsIGRhdGEuc3BsaWNlKHN0YXJ0LCAxKVswXSk7XG4gICAgdGhpcy5fY2FjaGVkID0gZGF0YTtcbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7XG4gICAgICBhY3RpdmU6ICdtb3ZlJyxcbiAgICAgIHVybCxcbiAgICAgIHBvc2l0aW9uLFxuICAgICAgbGlzdDogdGhpcy5fY2FjaGVkLFxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiDlvLrliLblhbPpl63lvZPliY3ot6/nlLHvvIjljIXlkKvkuI3lj6/lhbPpl63nirbmgIHvvInvvIzlubbph43mlrDlr7zoiKroh7MgYG5ld1VybGAg6Lev55SxXG4gICAqL1xuICByZXBsYWNlKG5ld1VybDogc3RyaW5nKSB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5jdXJVcmw7XG4gICAgaWYgKHRoaXMuZXhpc3RzKHVybCkpIHtcbiAgICAgIHRoaXMuY2xvc2UodXJsLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVVcmxCdWZmZXIgPSB1cmw7XG4gICAgfVxuICAgIHRoaXMuaW5qZWN0b3IuZ2V0PFJvdXRlcj4oUm91dGVyKS5uYXZpZ2F0ZUJ5VXJsKG5ld1VybCk7XG4gIH1cbiAgLyoqXG4gICAqIOiOt+WPluagh+mimO+8jOmhuuW6j+WmguS4i++8mlxuICAgKlxuICAgKiAxLiDnu4Tku7blhoXkvb/nlKggYFJldXNlVGFiU2VydmljZS50aXRsZSA9ICduZXcgdGl0bGUnYCDph43mlrDmjIflrprmlofmnKxcbiAgICogMi4g6Lev55Sx6YWN572u5LitIGRhdGEg5bGe5oCn5Lit5YyF5ZCrIHRpdGxlSTE4biA+IHRpdGxlXG4gICAqIDMuIOiPnOWNleaVsOaNruS4rSB0ZXh0IOWxnuaAp1xuICAgKlxuICAgKiBAcGFyYW0gdXJsIOaMh+WumlVSTFxuICAgKiBAcGFyYW0gcm91dGUg5oyH5a6a6Lev55Sx5b+r54WnXG4gICAqL1xuICBnZXRUaXRsZSh1cmw6IHN0cmluZywgcm91dGU/OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogUmV1c2VUaXRsZSB7XG4gICAgaWYgKHRoaXMuX3RpdGxlQ2FjaGVkW3VybF0pIHtcbiAgICAgIHJldHVybiB0aGlzLl90aXRsZUNhY2hlZFt1cmxdO1xuICAgIH1cblxuICAgIGlmIChyb3V0ZSAmJiByb3V0ZS5kYXRhICYmIChyb3V0ZS5kYXRhLnRpdGxlSTE4biB8fCByb3V0ZS5kYXRhLnRpdGxlKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dDogcm91dGUuZGF0YS50aXRsZSxcbiAgICAgICAgaTE4bjogcm91dGUuZGF0YS50aXRsZUkxOG4sXG4gICAgICB9IGFzIFJldXNlVGl0bGU7XG4gICAgfVxuXG4gICAgY29uc3QgbWVudSA9IHRoaXMuZ2V0TWVudSh1cmwpO1xuICAgIHJldHVybiBtZW51ID8geyB0ZXh0OiBtZW51LnRleHQsIGkxOG46IG1lbnUuaTE4biB9IDogeyB0ZXh0OiB1cmwgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmuIXpmaTmoIfpopjnvJPlrZhcbiAgICovXG4gIGNsZWFyVGl0bGVDYWNoZWQoKSB7XG4gICAgdGhpcy5fdGl0bGVDYWNoZWQgPSB7fTtcbiAgfVxuICAvKiog6Ieq5a6a5LmJ5b2T5YmNIGBjbG9zYWJsZWAg54q25oCBICovXG4gIHNldCBjbG9zYWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuY3VyVXJsO1xuICAgIHRoaXMuX2Nsb3NhYmxlQ2FjaGVkW3VybF0gPSB2YWx1ZTtcbiAgICB0aGlzLmRpKCd1cGRhdGUgY3VycmVudCB0YWcgY2xvc2FibGU6ICcsIHZhbHVlKTtcbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7XG4gICAgICBhY3RpdmU6ICdjbG9zYWJsZScsXG4gICAgICBjbG9zYWJsZTogdmFsdWUsXG4gICAgICBsaXN0OiB0aGlzLl9jYWNoZWQsXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIOiOt+WPliBgY2xvc2FibGVgIOeKtuaAge+8jOmhuuW6j+WmguS4i++8mlxuICAgKlxuICAgKiAxLiDnu4Tku7blhoXkvb/nlKggYFJldXNlVGFiU2VydmljZS5jbG9zYWJsZSA9IHRydWVgIOmHjeaWsOaMh+WumiBgY2xvc2FibGVgIOeKtuaAgVxuICAgKiAyLiDot6/nlLHphY3nva7kuK0gZGF0YSDlsZ7mgKfkuK3ljIXlkKsgYHJldXNlQ2xvc2FibGVgXG4gICAqIDMuIOiPnOWNleaVsOaNruS4rSBgcmV1c2VDbG9zYWJsZWAg5bGe5oCnXG4gICAqXG4gICAqIEBwYXJhbSB1cmwg5oyH5a6aVVJMXG4gICAqIEBwYXJhbSByb3V0ZSDmjIflrprot6/nlLHlv6vnhadcbiAgICovXG4gIGdldENsb3NhYmxlKHVybDogc3RyaW5nLCByb3V0ZT86IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuX2Nsb3NhYmxlQ2FjaGVkW3VybF0gIT09ICd1bmRlZmluZWQnKSByZXR1cm4gdGhpcy5fY2xvc2FibGVDYWNoZWRbdXJsXTtcblxuICAgIGlmIChyb3V0ZSAmJiByb3V0ZS5kYXRhICYmIHR5cGVvZiByb3V0ZS5kYXRhLnJldXNlQ2xvc2FibGUgPT09ICdib29sZWFuJykgcmV0dXJuIHJvdXRlLmRhdGEucmV1c2VDbG9zYWJsZTtcblxuICAgIGNvbnN0IG1lbnUgPSB0aGlzLm1vZGUgIT09IFJldXNlVGFiTWF0Y2hNb2RlLlVSTCA/IHRoaXMuZ2V0TWVudSh1cmwpIDogbnVsbDtcbiAgICBpZiAobWVudSAmJiB0eXBlb2YgbWVudS5yZXVzZUNsb3NhYmxlID09PSAnYm9vbGVhbicpIHJldHVybiBtZW51LnJldXNlQ2xvc2FibGU7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICog5riF56m6IGBjbG9zYWJsZWAg57yT5a2YXG4gICAqL1xuICBjbGVhckNsb3NhYmxlQ2FjaGVkKCkge1xuICAgIHRoaXMuX2Nsb3NhYmxlQ2FjaGVkID0ge307XG4gIH1cbiAgZ2V0VHJ1dGhSb3V0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCkge1xuICAgIGxldCBuZXh0ID0gcm91dGU7XG4gICAgd2hpbGUgKG5leHQuZmlyc3RDaGlsZCkgbmV4dCA9IG5leHQuZmlyc3RDaGlsZDtcbiAgICByZXR1cm4gbmV4dDtcbiAgfVxuICAvKipcbiAgICog5qC55o2u5b+r54Wn6I635Y+WVVJM5Zyw5Z2AXG4gICAqL1xuICBnZXRVcmwocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBzdHJpbmcge1xuICAgIGxldCBuZXh0ID0gdGhpcy5nZXRUcnV0aFJvdXRlKHJvdXRlKTtcbiAgICBjb25zdCBzZWdtZW50czogc3RyaW5nW10gPSBbXTtcbiAgICB3aGlsZSAobmV4dCkge1xuICAgICAgc2VnbWVudHMucHVzaChuZXh0LnVybC5qb2luKCcvJykpO1xuICAgICAgbmV4dCA9IG5leHQucGFyZW50ITtcbiAgICB9XG4gICAgY29uc3QgdXJsID1cbiAgICAgICcvJyArXG4gICAgICBzZWdtZW50c1xuICAgICAgICAuZmlsdGVyKGkgPT4gaSlcbiAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAuam9pbignLycpO1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgLyoqXG4gICAqIOajgOafpeW/q+eFp+aYr+WQpuWFgeiuuOiiq+WkjeeUqFxuICAgKi9cbiAgY2FuKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRVcmwocm91dGUpO1xuICAgIGlmICh1cmwgPT09IHRoaXMucmVtb3ZlVXJsQnVmZmVyKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAocm91dGUuZGF0YSAmJiB0eXBlb2Ygcm91dGUuZGF0YS5yZXVzZSA9PT0gJ2Jvb2xlYW4nKSByZXR1cm4gcm91dGUuZGF0YS5yZXVzZTtcblxuICAgIGlmICh0aGlzLm1vZGUgIT09IFJldXNlVGFiTWF0Y2hNb2RlLlVSTCkge1xuICAgICAgY29uc3QgbWVudSA9IHRoaXMuZ2V0TWVudSh1cmwpO1xuICAgICAgaWYgKCFtZW51KSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAodGhpcy5tb2RlID09PSBSZXVzZVRhYk1hdGNoTW9kZS5NZW51KSB7XG4gICAgICAgIGlmIChtZW51LnJldXNlID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFtZW51LnJldXNlIHx8IG1lbnUucmV1c2UgIT09IHRydWUpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gIXRoaXMuaXNFeGNsdWRlKHVybCk7XG4gIH1cblxuICBpc0V4Y2x1ZGUodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5leGNsdWRlcy5maW5kSW5kZXgociA9PiByLnRlc3QodXJsKSkgIT09IC0xO1xuICB9XG5cbiAgLyoqXG4gICAqIOWIt+aWsO+8jOinpuWPkeS4gOS4qiByZWZyZXNoIOexu+Wei+S6i+S7tlxuICAgKi9cbiAgcmVmcmVzaChkYXRhPzogYW55KSB7XG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoeyBhY3RpdmU6ICdyZWZyZXNoJywgZGF0YSB9KTtcbiAgfVxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBwcml2YXRlc1xuXG4gIHByaXZhdGUgZGVzdHJveShfaGFuZGxlOiBhbnkpIHtcbiAgICBpZiAoX2hhbmRsZSAmJiBfaGFuZGxlLmNvbXBvbmVudFJlZiAmJiBfaGFuZGxlLmNvbXBvbmVudFJlZi5kZXN0cm95KSBfaGFuZGxlLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gIH1cblxuICBwcml2YXRlIGRpKC4uLmFyZ3M6IE56U2FmZUFueVtdKSB7XG4gICAgaWYgKCF0aGlzLmRlYnVnKSByZXR1cm47XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oLi4uYXJncyk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgbWVudVNlcnZpY2U6IE1lbnVTZXJ2aWNlKSB7fVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5pbml0U2Nyb2xsKCk7XG4gICAgdGhpcy5faW5pdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TWVudSh1cmw6IHN0cmluZykge1xuICAgIGNvbnN0IG1lbnVzID0gdGhpcy5tZW51U2VydmljZS5nZXRQYXRoQnlVcmwodXJsKTtcbiAgICBpZiAoIW1lbnVzIHx8IG1lbnVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIG1lbnVzLnBvcCgpO1xuICB9XG5cbiAgcnVuSG9vayhtZXRob2Q6IFJldXNlSG9va1R5cGVzLCBjb21wOiBSZXVzZUNvbXBvbmVudFJlZiB8IG51bWJlcikge1xuICAgIGlmICh0eXBlb2YgY29tcCA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLl9jYWNoZWRbY29tcF07XG4gICAgICBjb21wID0gaXRlbS5faGFuZGxlLmNvbXBvbmVudFJlZjtcbiAgICB9XG4gICAgaWYgKGNvbXAgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY29tcC5pbnN0YW5jZSAmJiB0eXBlb2YgY29tcC5pbnN0YW5jZVttZXRob2RdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wLmluc3RhbmNlW21ldGhvZF0oKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhc0luVmFsaWRSb3V0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCkge1xuICAgIHJldHVybiAhcm91dGUucm91dGVDb25maWcgfHwgcm91dGUucm91dGVDb25maWcubG9hZENoaWxkcmVuIHx8IHJvdXRlLnJvdXRlQ29uZmlnLmNoaWxkcmVuO1xuICB9XG5cbiAgLyoqXG4gICAqIOWGs+WumuaYr+WQpuWFgeiuuOi3r+eUseWkjeeUqO+8jOiLpSBgdHJ1ZWAg5Lya6Kem5Y+RIGBzdG9yZWBcbiAgICovXG4gIHNob3VsZERldGFjaChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmhhc0luVmFsaWRSb3V0ZShyb3V0ZSkpIHJldHVybiBmYWxzZTtcbiAgICB0aGlzLmRpKCcjc2hvdWxkRGV0YWNoJywgdGhpcy5jYW4ocm91dGUpLCB0aGlzLmdldFVybChyb3V0ZSkpO1xuICAgIHJldHVybiB0aGlzLmNhbihyb3V0ZSk7XG4gIH1cblxuICAvKipcbiAgICog5a2Y5YKoXG4gICAqL1xuICBzdG9yZShfc25hcHNob3Q6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIF9oYW5kbGU6IGFueSkge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXJsKF9zbmFwc2hvdCk7XG4gICAgY29uc3QgaWR4ID0gdGhpcy5pbmRleCh1cmwpO1xuICAgIGNvbnN0IGlzQWRkID0gaWR4ID09PSAtMTtcblxuICAgIGNvbnN0IGl0ZW06IFJldXNlVGFiQ2FjaGVkID0ge1xuICAgICAgdGl0bGU6IHRoaXMuZ2V0VGl0bGUodXJsLCBfc25hcHNob3QpLFxuICAgICAgY2xvc2FibGU6IHRoaXMuZ2V0Q2xvc2FibGUodXJsLCBfc25hcHNob3QpLFxuICAgICAgcG9zaXRpb246IHRoaXMuZ2V0S2VlcGluZ1Njcm9sbCh1cmwsIF9zbmFwc2hvdCkgPyB0aGlzLnBvc2l0aW9uQnVmZmVyW3VybF0gOiBudWxsLFxuICAgICAgdXJsLFxuICAgICAgX3NuYXBzaG90LFxuICAgICAgX2hhbmRsZSxcbiAgICB9O1xuICAgIGlmIChpc0FkZCkge1xuICAgICAgaWYgKHRoaXMuY291bnQgPj0gdGhpcy5fbWF4KSB7XG4gICAgICAgIC8vIEdldCB0aGUgb2xkZXN0IGNsb3NhYmxlIGxvY2F0aW9uXG4gICAgICAgIGNvbnN0IGNsb3NlSWR4ID0gdGhpcy5fY2FjaGVkLmZpbmRJbmRleCh3ID0+IHcuY2xvc2FibGUhKTtcbiAgICAgICAgaWYgKGNsb3NlSWR4ICE9PSAtMSkgdGhpcy5yZW1vdmUoY2xvc2VJZHgsIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NhY2hlZC5wdXNoKGl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jYWNoZWRbaWR4XSA9IGl0ZW07XG4gICAgfVxuICAgIHRoaXMucmVtb3ZlVXJsQnVmZmVyID0gbnVsbDtcblxuICAgIHRoaXMuZGkoJyNzdG9yZScsIGlzQWRkID8gJ1tuZXddJyA6ICdbb3ZlcnJpZGVdJywgdXJsKTtcblxuICAgIGlmIChfaGFuZGxlICYmIF9oYW5kbGUuY29tcG9uZW50UmVmKSB7XG4gICAgICB0aGlzLnJ1bkhvb2soJ19vblJldXNlRGVzdHJveScsIF9oYW5kbGUuY29tcG9uZW50UmVmKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzQWRkKSB7XG4gICAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7IGFjdGl2ZTogJ292ZXJyaWRlJywgaXRlbSwgbGlzdDogdGhpcy5fY2FjaGVkIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDlhrPlrprmmK/lkKblhYHorrjlupTnlKjnvJPlrZjmlbDmja5cbiAgICovXG4gIHNob3VsZEF0dGFjaChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmhhc0luVmFsaWRSb3V0ZShyb3V0ZSkpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVybChyb3V0ZSk7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0KHVybCk7XG4gICAgY29uc3QgcmV0ID0gISEoZGF0YSAmJiBkYXRhLl9oYW5kbGUpO1xuICAgIHRoaXMuZGkoJyNzaG91bGRBdHRhY2gnLCByZXQsIHVybCk7XG4gICAgaWYgKHJldCkge1xuICAgICAgY29uc3QgY29tcFJlZiA9IGRhdGEhLl9oYW5kbGUuY29tcG9uZW50UmVmO1xuICAgICAgaWYgKGNvbXBSZWYpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWYgPSBjb21wUmVmO1xuICAgICAgICB0aGlzLnJ1bkhvb2soJ19vblJldXNlSW5pdCcsIGNvbXBSZWYpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7IGFjdGl2ZTogJ2FkZCcsIHVybCwgbGlzdDogdGhpcy5fY2FjaGVkIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIOaPkOWPluWkjeeUqOaVsOaNrlxuICAgKi9cbiAgcmV0cmlldmUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiB7fSB8IG51bGwge1xuICAgIGlmICh0aGlzLmhhc0luVmFsaWRSb3V0ZShyb3V0ZSkpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXJsKHJvdXRlKTtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5nZXQodXJsKTtcbiAgICBjb25zdCByZXQgPSAoZGF0YSAmJiBkYXRhLl9oYW5kbGUpIHx8IG51bGw7XG4gICAgdGhpcy5kaSgnI3JldHJpZXZlJywgdXJsLCByZXQpO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICog5Yaz5a6a5piv5ZCm5bqU6K+l6L+b6KGM5aSN55So6Lev55Sx5aSE55CGXG4gICAqL1xuICBzaG91bGRSZXVzZVJvdXRlKGZ1dHVyZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgY3VycjogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIGxldCByZXQgPSBmdXR1cmUucm91dGVDb25maWcgPT09IGN1cnIucm91dGVDb25maWc7XG4gICAgaWYgKCFyZXQpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IHBhdGggPSAoKGZ1dHVyZS5yb3V0ZUNvbmZpZyAmJiBmdXR1cmUucm91dGVDb25maWcucGF0aCkgfHwgJycpIGFzIHN0cmluZztcbiAgICBpZiAocGF0aC5sZW5ndGggPiAwICYmIH5wYXRoLmluZGV4T2YoJzonKSkge1xuICAgICAgaWYgKHRoaXMucm91dGVQYXJhbU1hdGNoTW9kZSA9PT0gJ3N0cmljdCcpIHtcbiAgICAgICAgcmV0ID0gdGhpcy5nZXRVcmwoZnV0dXJlKSA9PT0gdGhpcy5nZXRVcmwoY3Vycik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXQgPSBwYXRoID09PSAoKGN1cnIucm91dGVDb25maWcgJiYgY3Vyci5yb3V0ZUNvbmZpZy5wYXRoKSB8fCAnJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZGkoJz09PT09PT09PT09PT09PT09PT09PScpO1xuICAgIHRoaXMuZGkoJyNzaG91bGRSZXVzZVJvdXRlJywgcmV0LCBgJHt0aGlzLmdldFVybChjdXJyKX09PiR7dGhpcy5nZXRVcmwoZnV0dXJlKX1gLCBmdXR1cmUsIGN1cnIpO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvLyAjcmVnaW9uIHNjcm9sbFxuXG4gIC8qKlxuICAgKiDojrflj5YgYGtlZXBpbmdTY3JvbGxgIOeKtuaAge+8jOmhuuW6j+WmguS4i++8mlxuICAgKlxuICAgKiAxLiDot6/nlLHphY3nva7kuK0gZGF0YSDlsZ7mgKfkuK3ljIXlkKsgYGtlZXBpbmdTY3JvbGxgXG4gICAqIDIuIOiPnOWNleaVsOaNruS4rSBga2VlcGluZ1Njcm9sbGAg5bGe5oCnXG4gICAqIDMuIOe7hOS7tiBga2VlcGluZ1Njcm9sbGAg5YC8XG4gICAqL1xuICBnZXRLZWVwaW5nU2Nyb2xsKHVybDogc3RyaW5nLCByb3V0ZT86IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICBpZiAocm91dGUgJiYgcm91dGUuZGF0YSAmJiB0eXBlb2Ygcm91dGUuZGF0YS5rZWVwaW5nU2Nyb2xsID09PSAnYm9vbGVhbicpIHJldHVybiByb3V0ZS5kYXRhLmtlZXBpbmdTY3JvbGw7XG5cbiAgICBjb25zdCBtZW51ID0gdGhpcy5tb2RlICE9PSBSZXVzZVRhYk1hdGNoTW9kZS5VUkwgPyB0aGlzLmdldE1lbnUodXJsKSA6IG51bGw7XG4gICAgaWYgKG1lbnUgJiYgdHlwZW9mIG1lbnUua2VlcGluZ1Njcm9sbCA9PT0gJ2Jvb2xlYW4nKSByZXR1cm4gbWVudS5rZWVwaW5nU2Nyb2xsO1xuXG4gICAgcmV0dXJuIHRoaXMua2VlcGluZ1Njcm9sbDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGlzRGlzYWJsZWRJblJvdXRlcigpOiBib29sZWFuIHtcbiAgICBjb25zdCByb3V0ZXJDb25maWcgPSB0aGlzLmluamVjdG9yLmdldDxFeHRyYU9wdGlvbnM+KFJPVVRFUl9DT05GSUdVUkFUSU9OLCB7fSBhcyBhbnkpO1xuICAgIHJldHVybiByb3V0ZXJDb25maWcuc2Nyb2xsUG9zaXRpb25SZXN0b3JhdGlvbiA9PT0gJ2Rpc2FibGVkJztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IHNzKCk6IFNjcm9sbFNlcnZpY2Uge1xuICAgIHJldHVybiB0aGlzLmluamVjdG9yLmdldChTY3JvbGxTZXJ2aWNlKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdFNjcm9sbCgpIHtcbiAgICBpZiAodGhpcy5fcm91dGVyJCkge1xuICAgICAgdGhpcy5fcm91dGVyJC51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHRoaXMuX3JvdXRlciQgPSB0aGlzLmluamVjdG9yLmdldDxSb3V0ZXI+KFJvdXRlcikuZXZlbnRzLnN1YnNjcmliZShlID0+IHtcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0KSB7XG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuY3VyVXJsO1xuICAgICAgICBpZiAodGhpcy5nZXRLZWVwaW5nU2Nyb2xsKHVybCwgdGhpcy5nZXRUcnV0aFJvdXRlKHRoaXMuc25hcHNob3QpKSkge1xuICAgICAgICAgIHRoaXMucG9zaXRpb25CdWZmZXJbdXJsXSA9IHRoaXMuc3MuZ2V0U2Nyb2xsUG9zaXRpb24odGhpcy5rZWVwaW5nU2Nyb2xsQ29udGFpbmVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgdGhpcy5wb3NpdGlvbkJ1ZmZlclt1cmxdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuY3VyVXJsO1xuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5nZXQodXJsKTtcbiAgICAgICAgaWYgKGl0ZW0gJiYgaXRlbS5wb3NpdGlvbiAmJiB0aGlzLmdldEtlZXBpbmdTY3JvbGwodXJsLCB0aGlzLmdldFRydXRoUm91dGUodGhpcy5zbmFwc2hvdCkpKSB7XG4gICAgICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZEluUm91dGVyKSB7XG4gICAgICAgICAgICB0aGlzLnNzLnNjcm9sbFRvUG9zaXRpb24odGhpcy5rZWVwaW5nU2Nyb2xsQ29udGFpbmVyLCBpdGVtLnBvc2l0aW9uKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNzLnNjcm9sbFRvUG9zaXRpb24odGhpcy5rZWVwaW5nU2Nyb2xsQ29udGFpbmVyLCBpdGVtLnBvc2l0aW9uISksIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgX2NhY2hlZENoYW5nZSwgX3JvdXRlciQgfSA9IHRoaXM7XG4gICAgdGhpcy5jbGVhcigpO1xuICAgIHRoaXMuX2NhY2hlZCA9IFtdO1xuICAgIF9jYWNoZWRDaGFuZ2UuY29tcGxldGUoKTtcblxuICAgIGlmIChfcm91dGVyJCkge1xuICAgICAgX3JvdXRlciQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==