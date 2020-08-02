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
        return !route.routeConfig || !!route.routeConfig.loadChildren || !!route.routeConfig.children;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvcmV1c2UtdGFiL3JldXNlLXRhYi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUNMLGNBQWMsRUFHZCxhQUFhLEVBQ2IsZUFBZSxFQUNmLE1BQU0sRUFDTixvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQVEsV0FBVyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUVoRSxPQUFPLEVBQUUsZUFBZSxFQUE4QixNQUFNLE1BQU0sQ0FBQztBQUNuRSxPQUFPLEVBSUwsaUJBQWlCLEdBSWxCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7O0FBUWhDLE1BQU0sT0FBTyxlQUFlOzs7Ozs7SUF3VTFCLFlBQW9CLFFBQWtCLEVBQVUsV0FBd0I7UUFBcEQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBdlVoRSxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixrQkFBYSxHQUFHLElBQUksZUFBZSxDQUF3QixJQUFJLENBQUMsQ0FBQztRQUNqRSxZQUFPLEdBQXFCLEVBQUUsQ0FBQztRQUMvQixpQkFBWSxHQUFrQyxFQUFFLENBQUM7UUFDakQsb0JBQWUsR0FBK0IsRUFBRSxDQUFDO1FBR2pELG1CQUFjLEdBQXdDLEVBQUUsQ0FBQztRQUVqRSxVQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2Qsd0JBQW1CLEdBQWdDLFFBQVEsQ0FBQztRQUM1RCxTQUFJLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDOzs7O1FBRTlCLGFBQVEsR0FBYSxF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YUFDRjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFJRCxXQUFXO2NBQ0gsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSTtRQUN4QyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFekIsSUFBSSxRQUFRLEVBQUU7WUFDWixRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDOzs7WUE3Z0JGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUE1QmIsUUFBUTtZQVVkLFdBQVc7Ozs7Ozs7O0lBb0J4QixrQ0FBd0I7Ozs7O0lBQ3hCLCtCQUFrQjs7Ozs7SUFDbEIseUNBQStCOzs7OztJQUMvQix3Q0FBeUU7Ozs7O0lBQ3pFLGtDQUF1Qzs7Ozs7SUFDdkMsdUNBQXlEOzs7OztJQUN6RCwwQ0FBeUQ7Ozs7O0lBQ3pELG1DQUFpQzs7Ozs7SUFDakMsMENBQXVDOzs7OztJQUN2Qyx5Q0FBaUU7O0lBQ2pFLHVDQUFnQzs7SUFDaEMsZ0NBQWM7O0lBQ2QsOENBQTREOztJQUM1RCwrQkFBOEI7Ozs7O0lBRTlCLG1DQUF3Qjs7SUErQnhCLGlEQUFnQzs7Ozs7SUF5UnBCLG1DQUEwQjs7Ozs7SUFBRSxzQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBY3RpdmF0ZWRSb3V0ZSxcbiAgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgRXh0cmFPcHRpb25zLFxuICBOYXZpZ2F0aW9uRW5kLFxuICBOYXZpZ2F0aW9uU3RhcnQsXG4gIFJvdXRlcixcbiAgUk9VVEVSX0NPTkZJR1VSQVRJT04sXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNZW51LCBNZW51U2VydmljZSwgU2Nyb2xsU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBVbnN1YnNjcmliYWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgUmV1c2VDb21wb25lbnRSZWYsXG4gIFJldXNlSG9va1R5cGVzLFxuICBSZXVzZVRhYkNhY2hlZCxcbiAgUmV1c2VUYWJNYXRjaE1vZGUsXG4gIFJldXNlVGFiTm90aWZ5LFxuICBSZXVzZVRhYlJvdXRlUGFyYW1NYXRjaE1vZGUsXG4gIFJldXNlVGl0bGUsXG59IGZyb20gJy4vcmV1c2UtdGFiLmludGVyZmFjZXMnO1xuXG4vKipcbiAqIOi3r+eUseWkjeeUqOexu++8jOaPkOS+m+WkjeeUqOaJgOmcgOimgeS4gOS6m+WfuuacrOaOpeWPo1xuICpcbiAqICoq5rOo77yaKiog5omA5pyJ57yT5a2Y5pWw5o2u5p2l5rqQ5LqO6Lev55Sx56a75byA5ZCO5omN5Lya5Lqn55SfXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgUmV1c2VUYWJTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfaW5pdGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX21heCA9IDEwO1xuICBwcml2YXRlIF9rZWVwaW5nU2Nyb2xsID0gZmFsc2U7XG4gIHByaXZhdGUgX2NhY2hlZENoYW5nZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8UmV1c2VUYWJOb3RpZnkgfCBudWxsPihudWxsKTtcbiAgcHJpdmF0ZSBfY2FjaGVkOiBSZXVzZVRhYkNhY2hlZFtdID0gW107XG4gIHByaXZhdGUgX3RpdGxlQ2FjaGVkOiB7IFt1cmw6IHN0cmluZ106IFJldXNlVGl0bGUgfSA9IHt9O1xuICBwcml2YXRlIF9jbG9zYWJsZUNhY2hlZDogeyBbdXJsOiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcbiAgcHJpdmF0ZSBfcm91dGVyJDogVW5zdWJzY3JpYmFibGU7XG4gIHByaXZhdGUgcmVtb3ZlVXJsQnVmZmVyOiBzdHJpbmcgfCBudWxsO1xuICBwcml2YXRlIHBvc2l0aW9uQnVmZmVyOiB7IFt1cmw6IHN0cmluZ106IFtudW1iZXIsIG51bWJlcl0gfSA9IHt9O1xuICBjb21wb25lbnRSZWY6IFJldXNlQ29tcG9uZW50UmVmO1xuICBkZWJ1ZyA9IGZhbHNlO1xuICByb3V0ZVBhcmFtTWF0Y2hNb2RlOiBSZXVzZVRhYlJvdXRlUGFyYW1NYXRjaE1vZGUgPSAnc3RyaWN0JztcbiAgbW9kZSA9IFJldXNlVGFiTWF0Y2hNb2RlLk1lbnU7XG4gIC8qKiDmjpLpmaTop4TliJnvvIzpmZAgYG1vZGU9VVJMYCAqL1xuICBleGNsdWRlczogUmVnRXhwW10gPSBbXTtcblxuICBwcml2YXRlIGdldCBzbmFwc2hvdCgpOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IHtcbiAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQoQWN0aXZhdGVkUm91dGUpLnNuYXBzaG90O1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBwdWJsaWNcblxuICBnZXQgaW5pdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pbml0ZWQ7XG4gIH1cblxuICAvKiog5b2T5YmN6Lev55Sx5Zyw5Z2AICovXG4gIGdldCBjdXJVcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5nZXRVcmwodGhpcy5zbmFwc2hvdCk7XG4gIH1cblxuICAvKiog5YWB6K645pyA5aSa5aSN55So5aSa5bCR5Liq6aG16Z2i77yM5Y+W5YC86IyD5Zu0IGAyLTEwMGDvvIzlgLzlj5HnlJ/lj5jmm7Tml7bkvJrlvLrliLblhbPpl63kuJTlv73nlaXlj6/lhbPpl63mnaHku7YgKi9cbiAgc2V0IG1heCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4ID0gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIDIpLCAxMDApO1xuICAgIGZvciAobGV0IGkgPSB0aGlzLl9jYWNoZWQubGVuZ3RoOyBpID4gdGhpcy5fbWF4OyBpLS0pIHtcbiAgICAgIHRoaXMuX2NhY2hlZC5wb3AoKTtcbiAgICB9XG4gIH1cbiAgc2V0IGtlZXBpbmdTY3JvbGwodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9rZWVwaW5nU2Nyb2xsID0gdmFsdWU7XG4gICAgdGhpcy5pbml0U2Nyb2xsKCk7XG4gIH1cbiAgZ2V0IGtlZXBpbmdTY3JvbGwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2tlZXBpbmdTY3JvbGw7XG4gIH1cbiAga2VlcGluZ1Njcm9sbENvbnRhaW5lcjogRWxlbWVudDtcbiAgLyoqIOiOt+WPluW3sue8k+WtmOeahOi3r+eUsSAqL1xuICBnZXQgaXRlbXMoKTogUmV1c2VUYWJDYWNoZWRbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZDtcbiAgfVxuICAvKiog6I635Y+W5b2T5YmN57yT5a2Y55qE6Lev55Sx5oC75pWwICovXG4gIGdldCBjb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jYWNoZWQubGVuZ3RoO1xuICB9XG4gIC8qKiDorqLpmIXnvJPlrZjlj5jmm7TpgJrnn6UgKi9cbiAgZ2V0IGNoYW5nZSgpOiBPYnNlcnZhYmxlPFJldXNlVGFiTm90aWZ5IHwgbnVsbD4ge1xuICAgIHJldHVybiB0aGlzLl9jYWNoZWRDaGFuZ2UuYXNPYnNlcnZhYmxlKCk7IC8vIC5waXBlKGZpbHRlcih3ID0+IHcgIT09IG51bGwpKTtcbiAgfVxuICAvKiog6Ieq5a6a5LmJ5b2T5YmN5qCH6aKYICovXG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgUmV1c2VUaXRsZSkge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuY3VyVXJsO1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB2YWx1ZSA9IHsgdGV4dDogdmFsdWUgfTtcbiAgICB0aGlzLl90aXRsZUNhY2hlZFt1cmxdID0gdmFsdWU7XG4gICAgdGhpcy5kaSgndXBkYXRlIGN1cnJlbnQgdGFnIHRpdGxlOiAnLCB2YWx1ZSk7XG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoe1xuICAgICAgYWN0aXZlOiAndGl0bGUnLFxuICAgICAgdXJsLFxuICAgICAgdGl0bGU6IHZhbHVlLFxuICAgICAgbGlzdDogdGhpcy5fY2FjaGVkLFxuICAgIH0pO1xuICB9XG4gIC8qKiDojrflj5bmjIflrprot6/lvoTnvJPlrZjmiYDlnKjkvY3nva7vvIxgLTFgIOihqOekuuaXoOe8k+WtmCAqL1xuICBpbmRleCh1cmw6IHN0cmluZyk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZC5maW5kSW5kZXgodyA9PiB3LnVybCA9PT0gdXJsKTtcbiAgfVxuICAvKiog6I635Y+W5oyH5a6a6Lev5b6E57yT5a2Y5piv5ZCm5a2Y5ZyoICovXG4gIGV4aXN0cyh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmluZGV4KHVybCkgIT09IC0xO1xuICB9XG4gIC8qKiDojrflj5bmjIflrprot6/lvoTnvJPlrZggKi9cbiAgZ2V0KHVybD86IHN0cmluZyk6IFJldXNlVGFiQ2FjaGVkIHwgbnVsbCB7XG4gICAgcmV0dXJuIHVybCA/IHRoaXMuX2NhY2hlZC5maW5kKHcgPT4gdy51cmwgPT09IHVybCkgfHwgbnVsbCA6IG51bGw7XG4gIH1cbiAgcHJpdmF0ZSByZW1vdmUodXJsOiBzdHJpbmcgfCBudW1iZXIsIGluY2x1ZGVOb25DbG9zZWFibGU6IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICBjb25zdCBpZHggPSB0eXBlb2YgdXJsID09PSAnc3RyaW5nJyA/IHRoaXMuaW5kZXgodXJsKSA6IHVybDtcbiAgICBjb25zdCBpdGVtID0gaWR4ICE9PSAtMSA/IHRoaXMuX2NhY2hlZFtpZHhdIDogbnVsbDtcbiAgICBpZiAoIWl0ZW0gfHwgKCFpbmNsdWRlTm9uQ2xvc2VhYmxlICYmICFpdGVtLmNsb3NhYmxlKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgdGhpcy5kZXN0cm95KGl0ZW0uX2hhbmRsZSk7XG5cbiAgICB0aGlzLl9jYWNoZWQuc3BsaWNlKGlkeCwgMSk7XG4gICAgZGVsZXRlIHRoaXMuX3RpdGxlQ2FjaGVkW3VybF07XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIOagueaNrlVSTOenu+mZpOagh+etvlxuICAgKlxuICAgKiBAcGFyYW0gW2luY2x1ZGVOb25DbG9zZWFibGU9ZmFsc2VdIOaYr+WQpuW8uuWItuWMheWQq+S4jeWPr+WFs+mXrVxuICAgKi9cbiAgY2xvc2UodXJsOiBzdHJpbmcsIGluY2x1ZGVOb25DbG9zZWFibGU6IGJvb2xlYW4gPSBmYWxzZSk6IGJvb2xlYW4ge1xuICAgIHRoaXMucmVtb3ZlVXJsQnVmZmVyID0gdXJsO1xuXG4gICAgdGhpcy5yZW1vdmUodXJsLCBpbmNsdWRlTm9uQ2xvc2VhYmxlKTtcblxuICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHsgYWN0aXZlOiAnY2xvc2UnLCB1cmwsIGxpc3Q6IHRoaXMuX2NhY2hlZCB9KTtcblxuICAgIHRoaXMuZGkoJ2Nsb3NlIHRhZycsIHVybCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIOa4hemZpOWPs+i+uVxuICAgKlxuICAgKiBAcGFyYW0gW2luY2x1ZGVOb25DbG9zZWFibGU9ZmFsc2VdIOaYr+WQpuW8uuWItuWMheWQq+S4jeWPr+WFs+mXrVxuICAgKi9cbiAgY2xvc2VSaWdodCh1cmw6IHN0cmluZywgaW5jbHVkZU5vbkNsb3NlYWJsZTogYm9vbGVhbiA9IGZhbHNlKTogYm9vbGVhbiB7XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLmluZGV4KHVybCk7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY291bnQgLSAxOyBpID4gc3RhcnQ7IGktLSkge1xuICAgICAgdGhpcy5yZW1vdmUoaSwgaW5jbHVkZU5vbkNsb3NlYWJsZSk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW1vdmVVcmxCdWZmZXIgPSBudWxsO1xuXG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoeyBhY3RpdmU6ICdjbG9zZVJpZ2h0JywgdXJsLCBsaXN0OiB0aGlzLl9jYWNoZWQgfSk7XG5cbiAgICB0aGlzLmRpKCdjbG9zZSByaWdodCB0YWdlcycsIHVybCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIOa4hemZpOaJgOaciee8k+WtmFxuICAgKlxuICAgKiBAcGFyYW0gW2luY2x1ZGVOb25DbG9zZWFibGU9ZmFsc2VdIOaYr+WQpuW8uuWItuWMheWQq+S4jeWPr+WFs+mXrVxuICAgKi9cbiAgY2xlYXIoaW5jbHVkZU5vbkNsb3NlYWJsZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5fY2FjaGVkLmZvckVhY2godyA9PiB7XG4gICAgICBpZiAoIWluY2x1ZGVOb25DbG9zZWFibGUgJiYgdy5jbG9zYWJsZSkgdGhpcy5kZXN0cm95KHcuX2hhbmRsZSk7XG4gICAgfSk7XG4gICAgdGhpcy5fY2FjaGVkID0gdGhpcy5fY2FjaGVkLmZpbHRlcih3ID0+ICFpbmNsdWRlTm9uQ2xvc2VhYmxlICYmICF3LmNsb3NhYmxlKTtcblxuICAgIHRoaXMucmVtb3ZlVXJsQnVmZmVyID0gbnVsbDtcblxuICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHsgYWN0aXZlOiAnY2xlYXInLCBsaXN0OiB0aGlzLl9jYWNoZWQgfSk7XG5cbiAgICB0aGlzLmRpKCdjbGVhciBhbGwgY2F0Y2gnKTtcbiAgfVxuICAvKipcbiAgICog56e75Yqo57yT5a2Y5pWw5o2uXG4gICAqIEBwYXJhbSB1cmwg6KaB56e75Yqo55qEVVJM5Zyw5Z2AXG4gICAqIEBwYXJhbSBwb3NpdGlvbiDmlrDkvY3nva7vvIzkuIvmoIfku44gYDBgIOW8gOWni1xuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBcbiAgICogLy8gc291cmNlXG4gICAqIFsgJy9hLzEnLCAnL2EvMicsICcvYS8zJywgJy9hLzQnLCAnL2EvNScgXVxuICAgKiBtb3ZlKCcvYS8xJywgMik7XG4gICAqIC8vIG91dHB1dFxuICAgKiBbICcvYS8yJywgJy9hLzMnLCAnL2EvMScsICcvYS80JywgJy9hLzUnIF1cbiAgICogbW92ZSgnL2EvMScsIC0xKTtcbiAgICogLy8gb3V0cHV0XG4gICAqIFsgJy9hLzInLCAnL2EvMycsICcvYS80JywgJy9hLzUnLCAnL2EvMScgXVxuICAgKiBgYGBcbiAgICovXG4gIG1vdmUodXJsOiBzdHJpbmcsIHBvc2l0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuX2NhY2hlZC5maW5kSW5kZXgodyA9PiB3LnVybCA9PT0gdXJsKTtcbiAgICBpZiAoc3RhcnQgPT09IC0xKSByZXR1cm47XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX2NhY2hlZC5zbGljZSgpO1xuICAgIGRhdGEuc3BsaWNlKHBvc2l0aW9uIDwgMCA/IGRhdGEubGVuZ3RoICsgcG9zaXRpb24gOiBwb3NpdGlvbiwgMCwgZGF0YS5zcGxpY2Uoc3RhcnQsIDEpWzBdKTtcbiAgICB0aGlzLl9jYWNoZWQgPSBkYXRhO1xuICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHtcbiAgICAgIGFjdGl2ZTogJ21vdmUnLFxuICAgICAgdXJsLFxuICAgICAgcG9zaXRpb24sXG4gICAgICBsaXN0OiB0aGlzLl9jYWNoZWQsXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIOW8uuWItuWFs+mXreW9k+WJjei3r+eUse+8iOWMheWQq+S4jeWPr+WFs+mXreeKtuaAge+8ie+8jOW5tumHjeaWsOWvvOiIquiHsyBgbmV3VXJsYCDot6/nlLFcbiAgICovXG4gIHJlcGxhY2UobmV3VXJsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmN1clVybDtcbiAgICBpZiAodGhpcy5leGlzdHModXJsKSkge1xuICAgICAgdGhpcy5jbG9zZSh1cmwsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZVVybEJ1ZmZlciA9IHVybDtcbiAgICB9XG4gICAgdGhpcy5pbmplY3Rvci5nZXQ8Um91dGVyPihSb3V0ZXIpLm5hdmlnYXRlQnlVcmwobmV3VXJsKTtcbiAgfVxuICAvKipcbiAgICog6I635Y+W5qCH6aKY77yM6aG65bqP5aaC5LiL77yaXG4gICAqXG4gICAqIDEuIOe7hOS7tuWGheS9v+eUqCBgUmV1c2VUYWJTZXJ2aWNlLnRpdGxlID0gJ25ldyB0aXRsZSdgIOmHjeaWsOaMh+WumuaWh+acrFxuICAgKiAyLiDot6/nlLHphY3nva7kuK0gZGF0YSDlsZ7mgKfkuK3ljIXlkKsgdGl0bGVJMThuID4gdGl0bGVcbiAgICogMy4g6I+c5Y2V5pWw5o2u5LitIHRleHQg5bGe5oCnXG4gICAqXG4gICAqIEBwYXJhbSB1cmwg5oyH5a6aVVJMXG4gICAqIEBwYXJhbSByb3V0ZSDmjIflrprot6/nlLHlv6vnhadcbiAgICovXG4gIGdldFRpdGxlKHVybDogc3RyaW5nLCByb3V0ZT86IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBSZXVzZVRpdGxlIHtcbiAgICBpZiAodGhpcy5fdGl0bGVDYWNoZWRbdXJsXSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlQ2FjaGVkW3VybF07XG4gICAgfVxuXG4gICAgaWYgKHJvdXRlICYmIHJvdXRlLmRhdGEgJiYgKHJvdXRlLmRhdGEudGl0bGVJMThuIHx8IHJvdXRlLmRhdGEudGl0bGUpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZXh0OiByb3V0ZS5kYXRhLnRpdGxlLFxuICAgICAgICBpMThuOiByb3V0ZS5kYXRhLnRpdGxlSTE4bixcbiAgICAgIH0gYXMgUmV1c2VUaXRsZTtcbiAgICB9XG5cbiAgICBjb25zdCBtZW51ID0gdGhpcy5nZXRNZW51KHVybCk7XG4gICAgcmV0dXJuIG1lbnUgPyB7IHRleHQ6IG1lbnUudGV4dCwgaTE4bjogbWVudS5pMThuIH0gOiB7IHRleHQ6IHVybCB9O1xuICB9XG5cbiAgLyoqXG4gICAqIOa4hemZpOagh+mimOe8k+WtmFxuICAgKi9cbiAgY2xlYXJUaXRsZUNhY2hlZCgpOiB2b2lkIHtcbiAgICB0aGlzLl90aXRsZUNhY2hlZCA9IHt9O1xuICB9XG4gIC8qKiDoh6rlrprkuYnlvZPliY0gYGNsb3NhYmxlYCDnirbmgIEgKi9cbiAgc2V0IGNsb3NhYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5jdXJVcmw7XG4gICAgdGhpcy5fY2xvc2FibGVDYWNoZWRbdXJsXSA9IHZhbHVlO1xuICAgIHRoaXMuZGkoJ3VwZGF0ZSBjdXJyZW50IHRhZyBjbG9zYWJsZTogJywgdmFsdWUpO1xuICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHtcbiAgICAgIGFjdGl2ZTogJ2Nsb3NhYmxlJyxcbiAgICAgIGNsb3NhYmxlOiB2YWx1ZSxcbiAgICAgIGxpc3Q6IHRoaXMuX2NhY2hlZCxcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICog6I635Y+WIGBjbG9zYWJsZWAg54q25oCB77yM6aG65bqP5aaC5LiL77yaXG4gICAqXG4gICAqIDEuIOe7hOS7tuWGheS9v+eUqCBgUmV1c2VUYWJTZXJ2aWNlLmNsb3NhYmxlID0gdHJ1ZWAg6YeN5paw5oyH5a6aIGBjbG9zYWJsZWAg54q25oCBXG4gICAqIDIuIOi3r+eUsemFjee9ruS4rSBkYXRhIOWxnuaAp+S4reWMheWQqyBgcmV1c2VDbG9zYWJsZWBcbiAgICogMy4g6I+c5Y2V5pWw5o2u5LitIGByZXVzZUNsb3NhYmxlYCDlsZ7mgKdcbiAgICpcbiAgICogQHBhcmFtIHVybCDmjIflrppVUkxcbiAgICogQHBhcmFtIHJvdXRlIOaMh+Wumui3r+eUseW/q+eFp1xuICAgKi9cbiAgZ2V0Q2xvc2FibGUodXJsOiBzdHJpbmcsIHJvdXRlPzogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIGlmICh0eXBlb2YgdGhpcy5fY2xvc2FibGVDYWNoZWRbdXJsXSAhPT0gJ3VuZGVmaW5lZCcpIHJldHVybiB0aGlzLl9jbG9zYWJsZUNhY2hlZFt1cmxdO1xuXG4gICAgaWYgKHJvdXRlICYmIHJvdXRlLmRhdGEgJiYgdHlwZW9mIHJvdXRlLmRhdGEucmV1c2VDbG9zYWJsZSA9PT0gJ2Jvb2xlYW4nKSByZXR1cm4gcm91dGUuZGF0YS5yZXVzZUNsb3NhYmxlO1xuXG4gICAgY29uc3QgbWVudSA9IHRoaXMubW9kZSAhPT0gUmV1c2VUYWJNYXRjaE1vZGUuVVJMID8gdGhpcy5nZXRNZW51KHVybCkgOiBudWxsO1xuICAgIGlmIChtZW51ICYmIHR5cGVvZiBtZW51LnJldXNlQ2xvc2FibGUgPT09ICdib29sZWFuJykgcmV0dXJuIG1lbnUucmV1c2VDbG9zYWJsZTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiDmuIXnqbogYGNsb3NhYmxlYCDnvJPlrZhcbiAgICovXG4gIGNsZWFyQ2xvc2FibGVDYWNoZWQoKTogdm9pZCB7XG4gICAgdGhpcy5fY2xvc2FibGVDYWNoZWQgPSB7fTtcbiAgfVxuICBnZXRUcnV0aFJvdXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCB7XG4gICAgbGV0IG5leHQgPSByb3V0ZTtcbiAgICB3aGlsZSAobmV4dC5maXJzdENoaWxkKSBuZXh0ID0gbmV4dC5maXJzdENoaWxkO1xuICAgIHJldHVybiBuZXh0O1xuICB9XG4gIC8qKlxuICAgKiDmoLnmja7lv6vnhafojrflj5ZVUkzlnLDlnYBcbiAgICovXG4gIGdldFVybChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IHN0cmluZyB7XG4gICAgbGV0IG5leHQgPSB0aGlzLmdldFRydXRoUm91dGUocm91dGUpO1xuICAgIGNvbnN0IHNlZ21lbnRzOiBzdHJpbmdbXSA9IFtdO1xuICAgIHdoaWxlIChuZXh0KSB7XG4gICAgICBzZWdtZW50cy5wdXNoKG5leHQudXJsLmpvaW4oJy8nKSk7XG4gICAgICBuZXh0ID0gbmV4dC5wYXJlbnQhO1xuICAgIH1cbiAgICBjb25zdCB1cmwgPVxuICAgICAgJy8nICtcbiAgICAgIHNlZ21lbnRzXG4gICAgICAgIC5maWx0ZXIoaSA9PiBpKVxuICAgICAgICAucmV2ZXJzZSgpXG4gICAgICAgIC5qb2luKCcvJyk7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICAvKipcbiAgICog5qOA5p+l5b+r54Wn5piv5ZCm5YWB6K646KKr5aSN55SoXG4gICAqL1xuICBjYW4ocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVybChyb3V0ZSk7XG4gICAgaWYgKHVybCA9PT0gdGhpcy5yZW1vdmVVcmxCdWZmZXIpIHJldHVybiBmYWxzZTtcblxuICAgIGlmIChyb3V0ZS5kYXRhICYmIHR5cGVvZiByb3V0ZS5kYXRhLnJldXNlID09PSAnYm9vbGVhbicpIHJldHVybiByb3V0ZS5kYXRhLnJldXNlO1xuXG4gICAgaWYgKHRoaXMubW9kZSAhPT0gUmV1c2VUYWJNYXRjaE1vZGUuVVJMKSB7XG4gICAgICBjb25zdCBtZW51ID0gdGhpcy5nZXRNZW51KHVybCk7XG4gICAgICBpZiAoIW1lbnUpIHJldHVybiBmYWxzZTtcbiAgICAgIGlmICh0aGlzLm1vZGUgPT09IFJldXNlVGFiTWF0Y2hNb2RlLk1lbnUpIHtcbiAgICAgICAgaWYgKG1lbnUucmV1c2UgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIW1lbnUucmV1c2UgfHwgbWVudS5yZXVzZSAhPT0gdHJ1ZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiAhdGhpcy5pc0V4Y2x1ZGUodXJsKTtcbiAgfVxuXG4gIGlzRXhjbHVkZSh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmV4Y2x1ZGVzLmZpbmRJbmRleChyID0+IHIudGVzdCh1cmwpKSAhPT0gLTE7XG4gIH1cblxuICAvKipcbiAgICog5Yi35paw77yM6Kem5Y+R5LiA5LiqIHJlZnJlc2gg57G75Z6L5LqL5Lu2XG4gICAqL1xuICByZWZyZXNoKGRhdGE/OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7IGFjdGl2ZTogJ3JlZnJlc2gnLCBkYXRhIH0pO1xuICB9XG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHByaXZhdGVzXG5cbiAgcHJpdmF0ZSBkZXN0cm95KF9oYW5kbGU6IGFueSk6IHZvaWQge1xuICAgIGlmIChfaGFuZGxlICYmIF9oYW5kbGUuY29tcG9uZW50UmVmICYmIF9oYW5kbGUuY29tcG9uZW50UmVmLmRlc3Ryb3kpIF9oYW5kbGUuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgfVxuXG4gIHByaXZhdGUgZGkoLi4uYXJnczogTnpTYWZlQW55W10pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZGVidWcpIHJldHVybjtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybiguLi5hcmdzKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSBtZW51U2VydmljZTogTWVudVNlcnZpY2UpIHt9XG5cbiAgaW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRTY3JvbGwoKTtcbiAgICB0aGlzLl9pbml0ZWQgPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRNZW51KHVybDogc3RyaW5nKTogTWVudSB8IG51bGwgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IG1lbnVzID0gdGhpcy5tZW51U2VydmljZS5nZXRQYXRoQnlVcmwodXJsKTtcbiAgICBpZiAoIW1lbnVzIHx8IG1lbnVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIG1lbnVzLnBvcCgpO1xuICB9XG5cbiAgcnVuSG9vayhtZXRob2Q6IFJldXNlSG9va1R5cGVzLCBjb21wOiBSZXVzZUNvbXBvbmVudFJlZiB8IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgY29tcCA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLl9jYWNoZWRbY29tcF07XG4gICAgICBjb21wID0gaXRlbS5faGFuZGxlLmNvbXBvbmVudFJlZjtcbiAgICB9XG4gICAgaWYgKGNvbXAgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY29tcC5pbnN0YW5jZSAmJiB0eXBlb2YgY29tcC5pbnN0YW5jZVttZXRob2RdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wLmluc3RhbmNlW21ldGhvZF0oKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhc0luVmFsaWRSb3V0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhcm91dGUucm91dGVDb25maWcgfHwgISFyb3V0ZS5yb3V0ZUNvbmZpZy5sb2FkQ2hpbGRyZW4gfHwgISFyb3V0ZS5yb3V0ZUNvbmZpZy5jaGlsZHJlbjtcbiAgfVxuXG4gIC8qKlxuICAgKiDlhrPlrprmmK/lkKblhYHorrjot6/nlLHlpI3nlKjvvIzoi6UgYHRydWVgIOS8muinpuWPkSBgc3RvcmVgXG4gICAqL1xuICBzaG91bGREZXRhY2gocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5oYXNJblZhbGlkUm91dGUocm91dGUpKSByZXR1cm4gZmFsc2U7XG4gICAgdGhpcy5kaSgnI3Nob3VsZERldGFjaCcsIHRoaXMuY2FuKHJvdXRlKSwgdGhpcy5nZXRVcmwocm91dGUpKTtcbiAgICByZXR1cm4gdGhpcy5jYW4ocm91dGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIOWtmOWCqFxuICAgKi9cbiAgc3RvcmUoX3NuYXBzaG90OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBfaGFuZGxlOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVybChfc25hcHNob3QpO1xuICAgIGNvbnN0IGlkeCA9IHRoaXMuaW5kZXgodXJsKTtcbiAgICBjb25zdCBpc0FkZCA9IGlkeCA9PT0gLTE7XG5cbiAgICBjb25zdCBpdGVtOiBSZXVzZVRhYkNhY2hlZCA9IHtcbiAgICAgIHRpdGxlOiB0aGlzLmdldFRpdGxlKHVybCwgX3NuYXBzaG90KSxcbiAgICAgIGNsb3NhYmxlOiB0aGlzLmdldENsb3NhYmxlKHVybCwgX3NuYXBzaG90KSxcbiAgICAgIHBvc2l0aW9uOiB0aGlzLmdldEtlZXBpbmdTY3JvbGwodXJsLCBfc25hcHNob3QpID8gdGhpcy5wb3NpdGlvbkJ1ZmZlclt1cmxdIDogbnVsbCxcbiAgICAgIHVybCxcbiAgICAgIF9zbmFwc2hvdCxcbiAgICAgIF9oYW5kbGUsXG4gICAgfTtcbiAgICBpZiAoaXNBZGQpIHtcbiAgICAgIGlmICh0aGlzLmNvdW50ID49IHRoaXMuX21heCkge1xuICAgICAgICAvLyBHZXQgdGhlIG9sZGVzdCBjbG9zYWJsZSBsb2NhdGlvblxuICAgICAgICBjb25zdCBjbG9zZUlkeCA9IHRoaXMuX2NhY2hlZC5maW5kSW5kZXgodyA9PiB3LmNsb3NhYmxlISk7XG4gICAgICAgIGlmIChjbG9zZUlkeCAhPT0gLTEpIHRoaXMucmVtb3ZlKGNsb3NlSWR4LCBmYWxzZSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9jYWNoZWQucHVzaChpdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY2FjaGVkW2lkeF0gPSBpdGVtO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZVVybEJ1ZmZlciA9IG51bGw7XG5cbiAgICB0aGlzLmRpKCcjc3RvcmUnLCBpc0FkZCA/ICdbbmV3XScgOiAnW292ZXJyaWRlXScsIHVybCk7XG5cbiAgICBpZiAoX2hhbmRsZSAmJiBfaGFuZGxlLmNvbXBvbmVudFJlZikge1xuICAgICAgdGhpcy5ydW5Ib29rKCdfb25SZXVzZURlc3Ryb3knLCBfaGFuZGxlLmNvbXBvbmVudFJlZik7XG4gICAgfVxuXG4gICAgaWYgKCFpc0FkZCkge1xuICAgICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoeyBhY3RpdmU6ICdvdmVycmlkZScsIGl0ZW0sIGxpc3Q6IHRoaXMuX2NhY2hlZCB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5Yaz5a6a5piv5ZCm5YWB6K645bqU55So57yT5a2Y5pWw5o2uXG4gICAqL1xuICBzaG91bGRBdHRhY2gocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5oYXNJblZhbGlkUm91dGUocm91dGUpKSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRVcmwocm91dGUpO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldCh1cmwpO1xuICAgIGNvbnN0IHJldCA9ICEhKGRhdGEgJiYgZGF0YS5faGFuZGxlKTtcbiAgICB0aGlzLmRpKCcjc2hvdWxkQXR0YWNoJywgcmV0LCB1cmwpO1xuICAgIGlmIChyZXQpIHtcbiAgICAgIGNvbnN0IGNvbXBSZWYgPSBkYXRhIS5faGFuZGxlLmNvbXBvbmVudFJlZjtcbiAgICAgIGlmIChjb21wUmVmKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVmID0gY29tcFJlZjtcbiAgICAgICAgdGhpcy5ydW5Ib29rKCdfb25SZXVzZUluaXQnLCBjb21wUmVmKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoeyBhY3RpdmU6ICdhZGQnLCB1cmwsIGxpc3Q6IHRoaXMuX2NhY2hlZCB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiDmj5Dlj5blpI3nlKjmlbDmja5cbiAgICovXG4gIHJldHJpZXZlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KToge30gfCBudWxsIHtcbiAgICBpZiAodGhpcy5oYXNJblZhbGlkUm91dGUocm91dGUpKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVybChyb3V0ZSk7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0KHVybCk7XG4gICAgY29uc3QgcmV0ID0gKGRhdGEgJiYgZGF0YS5faGFuZGxlKSB8fCBudWxsO1xuICAgIHRoaXMuZGkoJyNyZXRyaWV2ZScsIHVybCwgcmV0KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIOWGs+WumuaYr+WQpuW6lOivpei/m+ihjOWkjeeUqOi3r+eUseWkhOeQhlxuICAgKi9cbiAgc2hvdWxkUmV1c2VSb3V0ZShmdXR1cmU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIGN1cnI6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICBsZXQgcmV0ID0gZnV0dXJlLnJvdXRlQ29uZmlnID09PSBjdXJyLnJvdXRlQ29uZmlnO1xuICAgIGlmICghcmV0KSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBwYXRoID0gKChmdXR1cmUucm91dGVDb25maWcgJiYgZnV0dXJlLnJvdXRlQ29uZmlnLnBhdGgpIHx8ICcnKSBhcyBzdHJpbmc7XG4gICAgaWYgKHBhdGgubGVuZ3RoID4gMCAmJiB+cGF0aC5pbmRleE9mKCc6JykpIHtcbiAgICAgIGlmICh0aGlzLnJvdXRlUGFyYW1NYXRjaE1vZGUgPT09ICdzdHJpY3QnKSB7XG4gICAgICAgIHJldCA9IHRoaXMuZ2V0VXJsKGZ1dHVyZSkgPT09IHRoaXMuZ2V0VXJsKGN1cnIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0ID0gcGF0aCA9PT0gKChjdXJyLnJvdXRlQ29uZmlnICYmIGN1cnIucm91dGVDb25maWcucGF0aCkgfHwgJycpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmRpKCc9PT09PT09PT09PT09PT09PT09PT0nKTtcbiAgICB0aGlzLmRpKCcjc2hvdWxkUmV1c2VSb3V0ZScsIHJldCwgYCR7dGhpcy5nZXRVcmwoY3Vycil9PT4ke3RoaXMuZ2V0VXJsKGZ1dHVyZSl9YCwgZnV0dXJlLCBjdXJyKTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBzY3JvbGxcblxuICAvKipcbiAgICog6I635Y+WIGBrZWVwaW5nU2Nyb2xsYCDnirbmgIHvvIzpobrluo/lpoLkuIvvvJpcbiAgICpcbiAgICogMS4g6Lev55Sx6YWN572u5LitIGRhdGEg5bGe5oCn5Lit5YyF5ZCrIGBrZWVwaW5nU2Nyb2xsYFxuICAgKiAyLiDoj5zljZXmlbDmja7kuK0gYGtlZXBpbmdTY3JvbGxgIOWxnuaAp1xuICAgKiAzLiDnu4Tku7YgYGtlZXBpbmdTY3JvbGxgIOWAvFxuICAgKi9cbiAgZ2V0S2VlcGluZ1Njcm9sbCh1cmw6IHN0cmluZywgcm91dGU/OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgaWYgKHJvdXRlICYmIHJvdXRlLmRhdGEgJiYgdHlwZW9mIHJvdXRlLmRhdGEua2VlcGluZ1Njcm9sbCA9PT0gJ2Jvb2xlYW4nKSByZXR1cm4gcm91dGUuZGF0YS5rZWVwaW5nU2Nyb2xsO1xuXG4gICAgY29uc3QgbWVudSA9IHRoaXMubW9kZSAhPT0gUmV1c2VUYWJNYXRjaE1vZGUuVVJMID8gdGhpcy5nZXRNZW51KHVybCkgOiBudWxsO1xuICAgIGlmIChtZW51ICYmIHR5cGVvZiBtZW51LmtlZXBpbmdTY3JvbGwgPT09ICdib29sZWFuJykgcmV0dXJuIG1lbnUua2VlcGluZ1Njcm9sbDtcblxuICAgIHJldHVybiB0aGlzLmtlZXBpbmdTY3JvbGw7XG4gIH1cblxuICBwcml2YXRlIGdldCBpc0Rpc2FibGVkSW5Sb3V0ZXIoKTogYm9vbGVhbiB7XG4gICAgY29uc3Qgcm91dGVyQ29uZmlnID0gdGhpcy5pbmplY3Rvci5nZXQ8RXh0cmFPcHRpb25zPihST1VURVJfQ09ORklHVVJBVElPTiwge30gYXMgYW55KTtcbiAgICByZXR1cm4gcm91dGVyQ29uZmlnLnNjcm9sbFBvc2l0aW9uUmVzdG9yYXRpb24gPT09ICdkaXNhYmxlZCc7XG4gIH1cblxuICBwcml2YXRlIGdldCBzcygpOiBTY3JvbGxTZXJ2aWNlIHtcbiAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQoU2Nyb2xsU2VydmljZSk7XG4gIH1cblxuICBwcml2YXRlIGluaXRTY3JvbGwoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3JvdXRlciQpIHtcbiAgICAgIHRoaXMuX3JvdXRlciQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9yb3V0ZXIkID0gdGhpcy5pbmplY3Rvci5nZXQ8Um91dGVyPihSb3V0ZXIpLmV2ZW50cy5zdWJzY3JpYmUoZSA9PiB7XG4gICAgICBpZiAoZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCkge1xuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLmN1clVybDtcbiAgICAgICAgaWYgKHRoaXMuZ2V0S2VlcGluZ1Njcm9sbCh1cmwsIHRoaXMuZ2V0VHJ1dGhSb3V0ZSh0aGlzLnNuYXBzaG90KSkpIHtcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uQnVmZmVyW3VybF0gPSB0aGlzLnNzLmdldFNjcm9sbFBvc2l0aW9uKHRoaXMua2VlcGluZ1Njcm9sbENvbnRhaW5lcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMucG9zaXRpb25CdWZmZXJbdXJsXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkge1xuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLmN1clVybDtcbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuZ2V0KHVybCk7XG4gICAgICAgIGlmIChpdGVtICYmIGl0ZW0ucG9zaXRpb24gJiYgdGhpcy5nZXRLZWVwaW5nU2Nyb2xsKHVybCwgdGhpcy5nZXRUcnV0aFJvdXRlKHRoaXMuc25hcHNob3QpKSkge1xuICAgICAgICAgIGlmICh0aGlzLmlzRGlzYWJsZWRJblJvdXRlcikge1xuICAgICAgICAgICAgdGhpcy5zcy5zY3JvbGxUb1Bvc2l0aW9uKHRoaXMua2VlcGluZ1Njcm9sbENvbnRhaW5lciwgaXRlbS5wb3NpdGlvbik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zcy5zY3JvbGxUb1Bvc2l0aW9uKHRoaXMua2VlcGluZ1Njcm9sbENvbnRhaW5lciwgaXRlbS5wb3NpdGlvbiEpLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IF9jYWNoZWRDaGFuZ2UsIF9yb3V0ZXIkIH0gPSB0aGlzO1xuICAgIHRoaXMuY2xlYXIoKTtcbiAgICB0aGlzLl9jYWNoZWQgPSBbXTtcbiAgICBfY2FjaGVkQ2hhbmdlLmNvbXBsZXRlKCk7XG5cbiAgICBpZiAoX3JvdXRlciQpIHtcbiAgICAgIF9yb3V0ZXIkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=