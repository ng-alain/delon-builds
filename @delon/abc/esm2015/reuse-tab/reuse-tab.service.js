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
     * @param {?=} type
     * @return {?}
     */
    runHook(method, comp, type = 'init') {
        if (typeof comp === 'number') {
            /** @type {?} */
            const item = this._cached[comp];
            comp = item._handle.componentRef;
        }
        if (comp == null || !comp.instance) {
            return;
        }
        /** @type {?} */
        const fn = comp.instance[method];
        if (typeof fn !== 'function') {
            return;
        }
        if (method === '_onReuseInit') {
            fn(type);
        }
        else {
            ((/** @type {?} */ (fn)))();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdnN0cy93b3JrLzEvcy9wYWNrYWdlcy9hYmMvcmV1c2UtdGFiLyIsInNvdXJjZXMiOlsicmV1c2UtdGFiLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQ0wsY0FBYyxFQUdkLGFBQWEsRUFDYixlQUFlLEVBQ2YsTUFBTSxFQUNOLG9CQUFvQixHQUNyQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBUSxXQUFXLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRWhFLE9BQU8sRUFBRSxlQUFlLEVBQThCLE1BQU0sTUFBTSxDQUFDO0FBQ25FLE9BQU8sRUFLTCxpQkFBaUIsR0FJbEIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7QUFRaEMsTUFBTSxPQUFPLGVBQWU7Ozs7OztJQXdVMUIsWUFBb0IsUUFBa0IsRUFBVSxXQUF3QjtRQUFwRCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUF2VWhFLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLGtCQUFhLEdBQUcsSUFBSSxlQUFlLENBQXdCLElBQUksQ0FBQyxDQUFDO1FBQ2pFLFlBQU8sR0FBcUIsRUFBRSxDQUFDO1FBQy9CLGlCQUFZLEdBQWtDLEVBQUUsQ0FBQztRQUNqRCxvQkFBZSxHQUErQixFQUFFLENBQUM7UUFHakQsbUJBQWMsR0FBd0MsRUFBRSxDQUFDO1FBRWpFLFVBQUssR0FBRyxLQUFLLENBQUM7UUFDZCx3QkFBbUIsR0FBZ0MsUUFBUSxDQUFDO1FBQzVELFNBQUksR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7Ozs7UUFFOUIsYUFBUSxH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QUcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLG1CQUFBLElBQUksQ0FBQyxRQUFRLEVBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO3FCQUM1RjtpQkFDRjthQUNGO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUlELFdBQVc7Y0FDSCxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJO1FBQ3hDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUV6QixJQUFJLFFBQVEsRUFBRTtZQUNaLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7OztZQW5oQkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztZQTdCYixRQUFRO1lBVWQsV0FBVzs7Ozs7Ozs7SUFxQnhCLGtDQUF3Qjs7Ozs7SUFDeEIsK0JBQWtCOzs7OztJQUNsQix5Q0FBK0I7Ozs7O0lBQy9CLHdDQUF5RTs7Ozs7SUFDekUsa0NBQXVDOzs7OztJQUN2Qyx1Q0FBeUQ7Ozs7O0lBQ3pELDBDQUF5RDs7Ozs7SUFDekQsbUNBQWlDOzs7OztJQUNqQywwQ0FBdUM7Ozs7O0lBQ3ZDLHlDQUFpRTs7SUFDakUsdUNBQWdDOztJQUNoQyxnQ0FBYzs7SUFDZCw4Q0FBNEQ7O0lBQzVELCtCQUE4Qjs7Ozs7SUFFOUIsbUNBQXdCOztJQStCeEIsaURBQWdDOzs7OztJQXlScEIsbUNBQTBCOzs7OztJQUFFLHNDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFjdGl2YXRlZFJvdXRlLFxuICBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICBFeHRyYU9wdGlvbnMsXG4gIE5hdmlnYXRpb25FbmQsXG4gIE5hdmlnYXRpb25TdGFydCxcbiAgUm91dGVyLFxuICBST1VURVJfQ09ORklHVVJBVElPTixcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1lbnUsIE1lbnVTZXJ2aWNlLCBTY3JvbGxTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFVuc3Vic2NyaWJhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBSZXVzZUNvbXBvbmVudFJlZixcbiAgUmV1c2VIb29rT25SZXVzZUluaXRUeXBlLFxuICBSZXVzZUhvb2tUeXBlcyxcbiAgUmV1c2VUYWJDYWNoZWQsXG4gIFJldXNlVGFiTWF0Y2hNb2RlLFxuICBSZXVzZVRhYk5vdGlmeSxcbiAgUmV1c2VUYWJSb3V0ZVBhcmFtTWF0Y2hNb2RlLFxuICBSZXVzZVRpdGxlLFxufSBmcm9tICcuL3JldXNlLXRhYi5pbnRlcmZhY2VzJztcblxuLyoqXG4gKiDot6/nlLHlpI3nlKjnsbvvvIzmj5DkvpvlpI3nlKjmiYDpnIDopoHkuIDkupvln7rmnKzmjqXlj6NcbiAqXG4gKiAqKuazqO+8mioqIOaJgOaciee8k+WtmOaVsOaNruadpea6kOS6jui3r+eUseemu+W8gOWQjuaJjeS8muS6p+eUn1xuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFJldXNlVGFiU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX2luaXRlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9tYXggPSAxMDtcbiAgcHJpdmF0ZSBfa2VlcGluZ1Njcm9sbCA9IGZhbHNlO1xuICBwcml2YXRlIF9jYWNoZWRDaGFuZ2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFJldXNlVGFiTm90aWZ5IHwgbnVsbD4obnVsbCk7XG4gIHByaXZhdGUgX2NhY2hlZDogUmV1c2VUYWJDYWNoZWRbXSA9IFtdO1xuICBwcml2YXRlIF90aXRsZUNhY2hlZDogeyBbdXJsOiBzdHJpbmddOiBSZXVzZVRpdGxlIH0gPSB7fTtcbiAgcHJpdmF0ZSBfY2xvc2FibGVDYWNoZWQ6IHsgW3VybDogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XG4gIHByaXZhdGUgX3JvdXRlciQ6IFVuc3Vic2NyaWJhYmxlO1xuICBwcml2YXRlIHJlbW92ZVVybEJ1ZmZlcjogc3RyaW5nIHwgbnVsbDtcbiAgcHJpdmF0ZSBwb3NpdGlvbkJ1ZmZlcjogeyBbdXJsOiBzdHJpbmddOiBbbnVtYmVyLCBudW1iZXJdIH0gPSB7fTtcbiAgY29tcG9uZW50UmVmOiBSZXVzZUNvbXBvbmVudFJlZjtcbiAgZGVidWcgPSBmYWxzZTtcbiAgcm91dGVQYXJhbU1hdGNoTW9kZTogUmV1c2VUYWJSb3V0ZVBhcmFtTWF0Y2hNb2RlID0gJ3N0cmljdCc7XG4gIG1vZGUgPSBSZXVzZVRhYk1hdGNoTW9kZS5NZW51O1xuICAvKiog5o6S6Zmk6KeE5YiZ77yM6ZmQIGBtb2RlPVVSTGAgKi9cbiAgZXhjbHVkZXM6IFJlZ0V4cFtdID0gW107XG5cbiAgcHJpdmF0ZSBnZXQgc25hcHNob3QoKTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCB7XG4gICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0KEFjdGl2YXRlZFJvdXRlKS5zbmFwc2hvdDtcbiAgfVxuXG4gIC8vICNyZWdpb24gcHVibGljXG5cbiAgZ2V0IGluaXRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faW5pdGVkO1xuICB9XG5cbiAgLyoqIOW9k+WJjei3r+eUseWcsOWdgCAqL1xuICBnZXQgY3VyVXJsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VXJsKHRoaXMuc25hcHNob3QpO1xuICB9XG5cbiAgLyoqIOWFgeiuuOacgOWkmuWkjeeUqOWkmuWwkeS4qumhtemdou+8jOWPluWAvOiMg+WbtCBgMi0xMDBg77yM5YC85Y+R55Sf5Y+Y5pu05pe25Lya5by65Yi25YWz6Zet5LiU5b+955Wl5Y+v5YWz6Zet5p2h5Lu2ICovXG4gIHNldCBtYXgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21heCA9IE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCAyKSwgMTAwKTtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5fY2FjaGVkLmxlbmd0aDsgaSA+IHRoaXMuX21heDsgaS0tKSB7XG4gICAgICB0aGlzLl9jYWNoZWQucG9wKCk7XG4gICAgfVxuICB9XG4gIHNldCBrZWVwaW5nU2Nyb2xsKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fa2VlcGluZ1Njcm9sbCA9IHZhbHVlO1xuICAgIHRoaXMuaW5pdFNjcm9sbCgpO1xuICB9XG4gIGdldCBrZWVwaW5nU2Nyb2xsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9rZWVwaW5nU2Nyb2xsO1xuICB9XG4gIGtlZXBpbmdTY3JvbGxDb250YWluZXI6IEVsZW1lbnQ7XG4gIC8qKiDojrflj5blt7LnvJPlrZjnmoTot6/nlLEgKi9cbiAgZ2V0IGl0ZW1zKCk6IFJldXNlVGFiQ2FjaGVkW10ge1xuICAgIHJldHVybiB0aGlzLl9jYWNoZWQ7XG4gIH1cbiAgLyoqIOiOt+WPluW9k+WJjee8k+WtmOeahOi3r+eUseaAu+aVsCAqL1xuICBnZXQgY291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVkLmxlbmd0aDtcbiAgfVxuICAvKiog6K6i6ZiF57yT5a2Y5Y+Y5pu06YCa55+lICovXG4gIGdldCBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxSZXVzZVRhYk5vdGlmeSB8IG51bGw+IHtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVkQ2hhbmdlLmFzT2JzZXJ2YWJsZSgpOyAvLyAucGlwZShmaWx0ZXIodyA9PiB3ICE9PSBudWxsKSk7XG4gIH1cbiAgLyoqIOiHquWumuS5ieW9k+WJjeagh+mimCAqL1xuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IFJldXNlVGl0bGUpIHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmN1clVybDtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykgdmFsdWUgPSB7IHRleHQ6IHZhbHVlIH07XG4gICAgdGhpcy5fdGl0bGVDYWNoZWRbdXJsXSA9IHZhbHVlO1xuICAgIHRoaXMuZGkoJ3VwZGF0ZSBjdXJyZW50IHRhZyB0aXRsZTogJywgdmFsdWUpO1xuICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHtcbiAgICAgIGFjdGl2ZTogJ3RpdGxlJyxcbiAgICAgIHVybCxcbiAgICAgIHRpdGxlOiB2YWx1ZSxcbiAgICAgIGxpc3Q6IHRoaXMuX2NhY2hlZCxcbiAgICB9KTtcbiAgfVxuICAvKiog6I635Y+W5oyH5a6a6Lev5b6E57yT5a2Y5omA5Zyo5L2N572u77yMYC0xYCDooajnpLrml6DnvJPlrZggKi9cbiAgaW5kZXgodXJsOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jYWNoZWQuZmluZEluZGV4KHcgPT4gdy51cmwgPT09IHVybCk7XG4gIH1cbiAgLyoqIOiOt+WPluaMh+Wumui3r+W+hOe8k+WtmOaYr+WQpuWtmOWcqCAqL1xuICBleGlzdHModXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleCh1cmwpICE9PSAtMTtcbiAgfVxuICAvKiog6I635Y+W5oyH5a6a6Lev5b6E57yT5a2YICovXG4gIGdldCh1cmw/OiBzdHJpbmcpOiBSZXVzZVRhYkNhY2hlZCB8IG51bGwge1xuICAgIHJldHVybiB1cmwgPyB0aGlzLl9jYWNoZWQuZmluZCh3ID0+IHcudXJsID09PSB1cmwpIHx8IG51bGwgOiBudWxsO1xuICB9XG4gIHByaXZhdGUgcmVtb3ZlKHVybDogc3RyaW5nIHwgbnVtYmVyLCBpbmNsdWRlTm9uQ2xvc2VhYmxlOiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaWR4ID0gdHlwZW9mIHVybCA9PT0gJ3N0cmluZycgPyB0aGlzLmluZGV4KHVybCkgOiB1cmw7XG4gICAgY29uc3QgaXRlbSA9IGlkeCAhPT0gLTEgPyB0aGlzLl9jYWNoZWRbaWR4XSA6IG51bGw7XG4gICAgaWYgKCFpdGVtIHx8ICghaW5jbHVkZU5vbkNsb3NlYWJsZSAmJiAhaXRlbS5jbG9zYWJsZSkpIHJldHVybiBmYWxzZTtcblxuICAgIHRoaXMuZGVzdHJveShpdGVtLl9oYW5kbGUpO1xuXG4gICAgdGhpcy5fY2FjaGVkLnNwbGljZShpZHgsIDEpO1xuICAgIGRlbGV0ZSB0aGlzLl90aXRsZUNhY2hlZFt1cmxdO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiDmoLnmja5VUkznp7vpmaTmoIfnrb5cbiAgICpcbiAgICogQHBhcmFtIFtpbmNsdWRlTm9uQ2xvc2VhYmxlPWZhbHNlXSDmmK/lkKblvLrliLbljIXlkKvkuI3lj6/lhbPpl61cbiAgICovXG4gIGNsb3NlKHVybDogc3RyaW5nLCBpbmNsdWRlTm9uQ2xvc2VhYmxlOiBib29sZWFuID0gZmFsc2UpOiBib29sZWFuIHtcbiAgICB0aGlzLnJlbW92ZVVybEJ1ZmZlciA9IHVybDtcblxuICAgIHRoaXMucmVtb3ZlKHVybCwgaW5jbHVkZU5vbkNsb3NlYWJsZSk7XG5cbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7IGFjdGl2ZTogJ2Nsb3NlJywgdXJsLCBsaXN0OiB0aGlzLl9jYWNoZWQgfSk7XG5cbiAgICB0aGlzLmRpKCdjbG9zZSB0YWcnLCB1cmwpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiDmuIXpmaTlj7PovrlcbiAgICpcbiAgICogQHBhcmFtIFtpbmNsdWRlTm9uQ2xvc2VhYmxlPWZhbHNlXSDmmK/lkKblvLrliLbljIXlkKvkuI3lj6/lhbPpl61cbiAgICovXG4gIGNsb3NlUmlnaHQodXJsOiBzdHJpbmcsIGluY2x1ZGVOb25DbG9zZWFibGU6IGJvb2xlYW4gPSBmYWxzZSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5pbmRleCh1cmwpO1xuICAgIGZvciAobGV0IGkgPSB0aGlzLmNvdW50IC0gMTsgaSA+IHN0YXJ0OyBpLS0pIHtcbiAgICAgIHRoaXMucmVtb3ZlKGksIGluY2x1ZGVOb25DbG9zZWFibGUpO1xuICAgIH1cblxuICAgIHRoaXMucmVtb3ZlVXJsQnVmZmVyID0gbnVsbDtcblxuICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHsgYWN0aXZlOiAnY2xvc2VSaWdodCcsIHVybCwgbGlzdDogdGhpcy5fY2FjaGVkIH0pO1xuXG4gICAgdGhpcy5kaSgnY2xvc2UgcmlnaHQgdGFnZXMnLCB1cmwpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiDmuIXpmaTmiYDmnInnvJPlrZhcbiAgICpcbiAgICogQHBhcmFtIFtpbmNsdWRlTm9uQ2xvc2VhYmxlPWZhbHNlXSDmmK/lkKblvLrliLbljIXlkKvkuI3lj6/lhbPpl61cbiAgICovXG4gIGNsZWFyKGluY2x1ZGVOb25DbG9zZWFibGU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIHRoaXMuX2NhY2hlZC5mb3JFYWNoKHcgPT4ge1xuICAgICAgaWYgKCFpbmNsdWRlTm9uQ2xvc2VhYmxlICYmIHcuY2xvc2FibGUpIHRoaXMuZGVzdHJveSh3Ll9oYW5kbGUpO1xuICAgIH0pO1xuICAgIHRoaXMuX2NhY2hlZCA9IHRoaXMuX2NhY2hlZC5maWx0ZXIodyA9PiAhaW5jbHVkZU5vbkNsb3NlYWJsZSAmJiAhdy5jbG9zYWJsZSk7XG5cbiAgICB0aGlzLnJlbW92ZVVybEJ1ZmZlciA9IG51bGw7XG5cbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7IGFjdGl2ZTogJ2NsZWFyJywgbGlzdDogdGhpcy5fY2FjaGVkIH0pO1xuXG4gICAgdGhpcy5kaSgnY2xlYXIgYWxsIGNhdGNoJyk7XG4gIH1cbiAgLyoqXG4gICAqIOenu+WKqOe8k+WtmOaVsOaNrlxuICAgKiBAcGFyYW0gdXJsIOimgeenu+WKqOeahFVSTOWcsOWdgFxuICAgKiBAcGFyYW0gcG9zaXRpb24g5paw5L2N572u77yM5LiL5qCH5LuOIGAwYCDlvIDlp4tcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgXG4gICAqIC8vIHNvdXJjZVxuICAgKiBbICcvYS8xJywgJy9hLzInLCAnL2EvMycsICcvYS80JywgJy9hLzUnIF1cbiAgICogbW92ZSgnL2EvMScsIDIpO1xuICAgKiAvLyBvdXRwdXRcbiAgICogWyAnL2EvMicsICcvYS8zJywgJy9hLzEnLCAnL2EvNCcsICcvYS81JyBdXG4gICAqIG1vdmUoJy9hLzEnLCAtMSk7XG4gICAqIC8vIG91dHB1dFxuICAgKiBbICcvYS8yJywgJy9hLzMnLCAnL2EvNCcsICcvYS81JywgJy9hLzEnIF1cbiAgICogYGBgXG4gICAqL1xuICBtb3ZlKHVybDogc3RyaW5nLCBwb3NpdGlvbjogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9jYWNoZWQuZmluZEluZGV4KHcgPT4gdy51cmwgPT09IHVybCk7XG4gICAgaWYgKHN0YXJ0ID09PSAtMSkgcmV0dXJuO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9jYWNoZWQuc2xpY2UoKTtcbiAgICBkYXRhLnNwbGljZShwb3NpdGlvbiA8IDAgPyBkYXRhLmxlbmd0aCArIHBvc2l0aW9uIDogcG9zaXRpb24sIDAsIGRhdGEuc3BsaWNlKHN0YXJ0LCAxKVswXSk7XG4gICAgdGhpcy5fY2FjaGVkID0gZGF0YTtcbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7XG4gICAgICBhY3RpdmU6ICdtb3ZlJyxcbiAgICAgIHVybCxcbiAgICAgIHBvc2l0aW9uLFxuICAgICAgbGlzdDogdGhpcy5fY2FjaGVkLFxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiDlvLrliLblhbPpl63lvZPliY3ot6/nlLHvvIjljIXlkKvkuI3lj6/lhbPpl63nirbmgIHvvInvvIzlubbph43mlrDlr7zoiKroh7MgYG5ld1VybGAg6Lev55SxXG4gICAqL1xuICByZXBsYWNlKG5ld1VybDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5jdXJVcmw7XG4gICAgaWYgKHRoaXMuZXhpc3RzKHVybCkpIHtcbiAgICAgIHRoaXMuY2xvc2UodXJsLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVVcmxCdWZmZXIgPSB1cmw7XG4gICAgfVxuICAgIHRoaXMuaW5qZWN0b3IuZ2V0PFJvdXRlcj4oUm91dGVyKS5uYXZpZ2F0ZUJ5VXJsKG5ld1VybCk7XG4gIH1cbiAgLyoqXG4gICAqIOiOt+WPluagh+mimO+8jOmhuuW6j+WmguS4i++8mlxuICAgKlxuICAgKiAxLiDnu4Tku7blhoXkvb/nlKggYFJldXNlVGFiU2VydmljZS50aXRsZSA9ICduZXcgdGl0bGUnYCDph43mlrDmjIflrprmlofmnKxcbiAgICogMi4g6Lev55Sx6YWN572u5LitIGRhdGEg5bGe5oCn5Lit5YyF5ZCrIHRpdGxlSTE4biA+IHRpdGxlXG4gICAqIDMuIOiPnOWNleaVsOaNruS4rSB0ZXh0IOWxnuaAp1xuICAgKlxuICAgKiBAcGFyYW0gdXJsIOaMh+WumlVSTFxuICAgKiBAcGFyYW0gcm91dGUg5oyH5a6a6Lev55Sx5b+r54WnXG4gICAqL1xuICBnZXRUaXRsZSh1cmw6IHN0cmluZywgcm91dGU/OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogUmV1c2VUaXRsZSB7XG4gICAgaWYgKHRoaXMuX3RpdGxlQ2FjaGVkW3VybF0pIHtcbiAgICAgIHJldHVybiB0aGlzLl90aXRsZUNhY2hlZFt1cmxdO1xuICAgIH1cblxuICAgIGlmIChyb3V0ZSAmJiByb3V0ZS5kYXRhICYmIChyb3V0ZS5kYXRhLnRpdGxlSTE4biB8fCByb3V0ZS5kYXRhLnRpdGxlKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dDogcm91dGUuZGF0YS50aXRsZSxcbiAgICAgICAgaTE4bjogcm91dGUuZGF0YS50aXRsZUkxOG4sXG4gICAgICB9IGFzIFJldXNlVGl0bGU7XG4gICAgfVxuXG4gICAgY29uc3QgbWVudSA9IHRoaXMuZ2V0TWVudSh1cmwpO1xuICAgIHJldHVybiBtZW51ID8geyB0ZXh0OiBtZW51LnRleHQsIGkxOG46IG1lbnUuaTE4biB9IDogeyB0ZXh0OiB1cmwgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmuIXpmaTmoIfpopjnvJPlrZhcbiAgICovXG4gIGNsZWFyVGl0bGVDYWNoZWQoKTogdm9pZCB7XG4gICAgdGhpcy5fdGl0bGVDYWNoZWQgPSB7fTtcbiAgfVxuICAvKiog6Ieq5a6a5LmJ5b2T5YmNIGBjbG9zYWJsZWAg54q25oCBICovXG4gIHNldCBjbG9zYWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuY3VyVXJsO1xuICAgIHRoaXMuX2Nsb3NhYmxlQ2FjaGVkW3VybF0gPSB2YWx1ZTtcbiAgICB0aGlzLmRpKCd1cGRhdGUgY3VycmVudCB0YWcgY2xvc2FibGU6ICcsIHZhbHVlKTtcbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7XG4gICAgICBhY3RpdmU6ICdjbG9zYWJsZScsXG4gICAgICBjbG9zYWJsZTogdmFsdWUsXG4gICAgICBsaXN0OiB0aGlzLl9jYWNoZWQsXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIOiOt+WPliBgY2xvc2FibGVgIOeKtuaAge+8jOmhuuW6j+WmguS4i++8mlxuICAgKlxuICAgKiAxLiDnu4Tku7blhoXkvb/nlKggYFJldXNlVGFiU2VydmljZS5jbG9zYWJsZSA9IHRydWVgIOmHjeaWsOaMh+WumiBgY2xvc2FibGVgIOeKtuaAgVxuICAgKiAyLiDot6/nlLHphY3nva7kuK0gZGF0YSDlsZ7mgKfkuK3ljIXlkKsgYHJldXNlQ2xvc2FibGVgXG4gICAqIDMuIOiPnOWNleaVsOaNruS4rSBgcmV1c2VDbG9zYWJsZWAg5bGe5oCnXG4gICAqXG4gICAqIEBwYXJhbSB1cmwg5oyH5a6aVVJMXG4gICAqIEBwYXJhbSByb3V0ZSDmjIflrprot6/nlLHlv6vnhadcbiAgICovXG4gIGdldENsb3NhYmxlKHVybDogc3RyaW5nLCByb3V0ZT86IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuX2Nsb3NhYmxlQ2FjaGVkW3VybF0gIT09ICd1bmRlZmluZWQnKSByZXR1cm4gdGhpcy5fY2xvc2FibGVDYWNoZWRbdXJsXTtcblxuICAgIGlmIChyb3V0ZSAmJiByb3V0ZS5kYXRhICYmIHR5cGVvZiByb3V0ZS5kYXRhLnJldXNlQ2xvc2FibGUgPT09ICdib29sZWFuJykgcmV0dXJuIHJvdXRlLmRhdGEucmV1c2VDbG9zYWJsZTtcblxuICAgIGNvbnN0IG1lbnUgPSB0aGlzLm1vZGUgIT09IFJldXNlVGFiTWF0Y2hNb2RlLlVSTCA/IHRoaXMuZ2V0TWVudSh1cmwpIDogbnVsbDtcbiAgICBpZiAobWVudSAmJiB0eXBlb2YgbWVudS5yZXVzZUNsb3NhYmxlID09PSAnYm9vbGVhbicpIHJldHVybiBtZW51LnJldXNlQ2xvc2FibGU7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICog5riF56m6IGBjbG9zYWJsZWAg57yT5a2YXG4gICAqL1xuICBjbGVhckNsb3NhYmxlQ2FjaGVkKCk6IHZvaWQge1xuICAgIHRoaXMuX2Nsb3NhYmxlQ2FjaGVkID0ge307XG4gIH1cbiAgZ2V0VHJ1dGhSb3V0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IEFjdGl2YXRlZFJvdXRlU25hcHNob3Qge1xuICAgIGxldCBuZXh0ID0gcm91dGU7XG4gICAgd2hpbGUgKG5leHQuZmlyc3RDaGlsZCkgbmV4dCA9IG5leHQuZmlyc3RDaGlsZDtcbiAgICByZXR1cm4gbmV4dDtcbiAgfVxuICAvKipcbiAgICog5qC55o2u5b+r54Wn6I635Y+WVVJM5Zyw5Z2AXG4gICAqL1xuICBnZXRVcmwocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBzdHJpbmcge1xuICAgIGxldCBuZXh0ID0gdGhpcy5nZXRUcnV0aFJvdXRlKHJvdXRlKTtcbiAgICBjb25zdCBzZWdtZW50czogc3RyaW5nW10gPSBbXTtcbiAgICB3aGlsZSAobmV4dCkge1xuICAgICAgc2VnbWVudHMucHVzaChuZXh0LnVybC5qb2luKCcvJykpO1xuICAgICAgbmV4dCA9IG5leHQucGFyZW50ITtcbiAgICB9XG4gICAgY29uc3QgdXJsID1cbiAgICAgICcvJyArXG4gICAgICBzZWdtZW50c1xuICAgICAgICAuZmlsdGVyKGkgPT4gaSlcbiAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAuam9pbignLycpO1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgLyoqXG4gICAqIOajgOafpeW/q+eFp+aYr+WQpuWFgeiuuOiiq+WkjeeUqFxuICAgKi9cbiAgY2FuKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRVcmwocm91dGUpO1xuICAgIGlmICh1cmwgPT09IHRoaXMucmVtb3ZlVXJsQnVmZmVyKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAocm91dGUuZGF0YSAmJiB0eXBlb2Ygcm91dGUuZGF0YS5yZXVzZSA9PT0gJ2Jvb2xlYW4nKSByZXR1cm4gcm91dGUuZGF0YS5yZXVzZTtcblxuICAgIGlmICh0aGlzLm1vZGUgIT09IFJldXNlVGFiTWF0Y2hNb2RlLlVSTCkge1xuICAgICAgY29uc3QgbWVudSA9IHRoaXMuZ2V0TWVudSh1cmwpO1xuICAgICAgaWYgKCFtZW51KSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAodGhpcy5tb2RlID09PSBSZXVzZVRhYk1hdGNoTW9kZS5NZW51KSB7XG4gICAgICAgIGlmIChtZW51LnJldXNlID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFtZW51LnJldXNlIHx8IG1lbnUucmV1c2UgIT09IHRydWUpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gIXRoaXMuaXNFeGNsdWRlKHVybCk7XG4gIH1cblxuICBpc0V4Y2x1ZGUodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5leGNsdWRlcy5maW5kSW5kZXgociA9PiByLnRlc3QodXJsKSkgIT09IC0xO1xuICB9XG5cbiAgLyoqXG4gICAqIOWIt+aWsO+8jOinpuWPkeS4gOS4qiByZWZyZXNoIOexu+Wei+S6i+S7tlxuICAgKi9cbiAgcmVmcmVzaChkYXRhPzogYW55KTogdm9pZCB7XG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoeyBhY3RpdmU6ICdyZWZyZXNoJywgZGF0YSB9KTtcbiAgfVxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBwcml2YXRlc1xuXG4gIHByaXZhdGUgZGVzdHJveShfaGFuZGxlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoX2hhbmRsZSAmJiBfaGFuZGxlLmNvbXBvbmVudFJlZiAmJiBfaGFuZGxlLmNvbXBvbmVudFJlZi5kZXN0cm95KSBfaGFuZGxlLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gIH1cblxuICBwcml2YXRlIGRpKC4uLmFyZ3M6IE56U2FmZUFueVtdKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRlYnVnKSByZXR1cm47XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oLi4uYXJncyk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgbWVudVNlcnZpY2U6IE1lbnVTZXJ2aWNlKSB7fVxuXG4gIGluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0U2Nyb2xsKCk7XG4gICAgdGhpcy5faW5pdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TWVudSh1cmw6IHN0cmluZyk6IE1lbnUgfCBudWxsIHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCBtZW51cyA9IHRoaXMubWVudVNlcnZpY2UuZ2V0UGF0aEJ5VXJsKHVybCk7XG4gICAgaWYgKCFtZW51cyB8fCBtZW51cy5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuICAgIHJldHVybiBtZW51cy5wb3AoKTtcbiAgfVxuXG4gIHJ1bkhvb2sobWV0aG9kOiBSZXVzZUhvb2tUeXBlcywgY29tcDogUmV1c2VDb21wb25lbnRSZWYgfCBudW1iZXIsIHR5cGU6IFJldXNlSG9va09uUmV1c2VJbml0VHlwZSA9ICdpbml0Jyk6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgY29tcCA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLl9jYWNoZWRbY29tcF07XG4gICAgICBjb21wID0gaXRlbS5faGFuZGxlLmNvbXBvbmVudFJlZjtcbiAgICB9XG4gICAgaWYgKGNvbXAgPT0gbnVsbCB8fCAhY29tcC5pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBmbiA9IGNvbXAuaW5zdGFuY2VbbWV0aG9kXTtcbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChtZXRob2QgPT09ICdfb25SZXVzZUluaXQnKSB7XG4gICAgICBmbih0eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgKGZuIGFzICgpID0+IHZvaWQpKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYXNJblZhbGlkUm91dGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXJvdXRlLnJvdXRlQ29uZmlnIHx8ICEhcm91dGUucm91dGVDb25maWcubG9hZENoaWxkcmVuIHx8ICEhcm91dGUucm91dGVDb25maWcuY2hpbGRyZW47XG4gIH1cblxuICAvKipcbiAgICog5Yaz5a6a5piv5ZCm5YWB6K646Lev55Sx5aSN55So77yM6IulIGB0cnVlYCDkvJrop6blj5EgYHN0b3JlYFxuICAgKi9cbiAgc2hvdWxkRGV0YWNoKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaGFzSW5WYWxpZFJvdXRlKHJvdXRlKSkgcmV0dXJuIGZhbHNlO1xuICAgIHRoaXMuZGkoJyNzaG91bGREZXRhY2gnLCB0aGlzLmNhbihyb3V0ZSksIHRoaXMuZ2V0VXJsKHJvdXRlKSk7XG4gICAgcmV0dXJuIHRoaXMuY2FuKHJvdXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlrZjlgqhcbiAgICovXG4gIHN0b3JlKF9zbmFwc2hvdDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgX2hhbmRsZTogYW55KTogdm9pZCB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRVcmwoX3NuYXBzaG90KTtcbiAgICBjb25zdCBpZHggPSB0aGlzLmluZGV4KHVybCk7XG4gICAgY29uc3QgaXNBZGQgPSBpZHggPT09IC0xO1xuXG4gICAgY29uc3QgaXRlbTogUmV1c2VUYWJDYWNoZWQgPSB7XG4gICAgICB0aXRsZTogdGhpcy5nZXRUaXRsZSh1cmwsIF9zbmFwc2hvdCksXG4gICAgICBjbG9zYWJsZTogdGhpcy5nZXRDbG9zYWJsZSh1cmwsIF9zbmFwc2hvdCksXG4gICAgICBwb3NpdGlvbjogdGhpcy5nZXRLZWVwaW5nU2Nyb2xsKHVybCwgX3NuYXBzaG90KSA/IHRoaXMucG9zaXRpb25CdWZmZXJbdXJsXSA6IG51bGwsXG4gICAgICB1cmwsXG4gICAgICBfc25hcHNob3QsXG4gICAgICBfaGFuZGxlLFxuICAgIH07XG4gICAgaWYgKGlzQWRkKSB7XG4gICAgICBpZiAodGhpcy5jb3VudCA+PSB0aGlzLl9tYXgpIHtcbiAgICAgICAgLy8gR2V0IHRoZSBvbGRlc3QgY2xvc2FibGUgbG9jYXRpb25cbiAgICAgICAgY29uc3QgY2xvc2VJZHggPSB0aGlzLl9jYWNoZWQuZmluZEluZGV4KHcgPT4gdy5jbG9zYWJsZSEpO1xuICAgICAgICBpZiAoY2xvc2VJZHggIT09IC0xKSB0aGlzLnJlbW92ZShjbG9zZUlkeCwgZmFsc2UpO1xuICAgICAgfVxuICAgICAgdGhpcy5fY2FjaGVkLnB1c2goaXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NhY2hlZFtpZHhdID0gaXRlbTtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVVcmxCdWZmZXIgPSBudWxsO1xuXG4gICAgdGhpcy5kaSgnI3N0b3JlJywgaXNBZGQgPyAnW25ld10nIDogJ1tvdmVycmlkZV0nLCB1cmwpO1xuXG4gICAgaWYgKF9oYW5kbGUgJiYgX2hhbmRsZS5jb21wb25lbnRSZWYpIHtcbiAgICAgIHRoaXMucnVuSG9vaygnX29uUmV1c2VEZXN0cm95JywgX2hhbmRsZS5jb21wb25lbnRSZWYpO1xuICAgIH1cblxuICAgIGlmICghaXNBZGQpIHtcbiAgICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHsgYWN0aXZlOiAnb3ZlcnJpZGUnLCBpdGVtLCBsaXN0OiB0aGlzLl9jYWNoZWQgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOWGs+WumuaYr+WQpuWFgeiuuOW6lOeUqOe8k+WtmOaVsOaNrlxuICAgKi9cbiAgc2hvdWxkQXR0YWNoKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaGFzSW5WYWxpZFJvdXRlKHJvdXRlKSkgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXJsKHJvdXRlKTtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5nZXQodXJsKTtcbiAgICBjb25zdCByZXQgPSAhIShkYXRhICYmIGRhdGEuX2hhbmRsZSk7XG4gICAgdGhpcy5kaSgnI3Nob3VsZEF0dGFjaCcsIHJldCwgdXJsKTtcbiAgICBpZiAocmV0KSB7XG4gICAgICBjb25zdCBjb21wUmVmID0gZGF0YSEuX2hhbmRsZS5jb21wb25lbnRSZWY7XG4gICAgICBpZiAoY29tcFJlZikge1xuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZiA9IGNvbXBSZWY7XG4gICAgICAgIHRoaXMucnVuSG9vaygnX29uUmV1c2VJbml0JywgY29tcFJlZik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHsgYWN0aXZlOiAnYWRkJywgdXJsLCBsaXN0OiB0aGlzLl9jYWNoZWQgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICog5o+Q5Y+W5aSN55So5pWw5o2uXG4gICAqL1xuICByZXRyaWV2ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IHt9IHwgbnVsbCB7XG4gICAgaWYgKHRoaXMuaGFzSW5WYWxpZFJvdXRlKHJvdXRlKSkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRVcmwocm91dGUpO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldCh1cmwpO1xuICAgIGNvbnN0IHJldCA9IChkYXRhICYmIGRhdGEuX2hhbmRsZSkgfHwgbnVsbDtcbiAgICB0aGlzLmRpKCcjcmV0cmlldmUnLCB1cmwsIHJldCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiDlhrPlrprmmK/lkKblupTor6Xov5vooYzlpI3nlKjot6/nlLHlpITnkIZcbiAgICovXG4gIHNob3VsZFJldXNlUm91dGUoZnV0dXJlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBjdXJyOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgbGV0IHJldCA9IGZ1dHVyZS5yb3V0ZUNvbmZpZyA9PT0gY3Vyci5yb3V0ZUNvbmZpZztcbiAgICBpZiAoIXJldCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgcGF0aCA9ICgoZnV0dXJlLnJvdXRlQ29uZmlnICYmIGZ1dHVyZS5yb3V0ZUNvbmZpZy5wYXRoKSB8fCAnJykgYXMgc3RyaW5nO1xuICAgIGlmIChwYXRoLmxlbmd0aCA+IDAgJiYgfnBhdGguaW5kZXhPZignOicpKSB7XG4gICAgICBpZiAodGhpcy5yb3V0ZVBhcmFtTWF0Y2hNb2RlID09PSAnc3RyaWN0Jykge1xuICAgICAgICByZXQgPSB0aGlzLmdldFVybChmdXR1cmUpID09PSB0aGlzLmdldFVybChjdXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldCA9IHBhdGggPT09ICgoY3Vyci5yb3V0ZUNvbmZpZyAmJiBjdXJyLnJvdXRlQ29uZmlnLnBhdGgpIHx8ICcnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5kaSgnPT09PT09PT09PT09PT09PT09PT09Jyk7XG4gICAgdGhpcy5kaSgnI3Nob3VsZFJldXNlUm91dGUnLCByZXQsIGAke3RoaXMuZ2V0VXJsKGN1cnIpfT0+JHt0aGlzLmdldFVybChmdXR1cmUpfWAsIGZ1dHVyZSwgY3Vycik7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vICNyZWdpb24gc2Nyb2xsXG5cbiAgLyoqXG4gICAqIOiOt+WPliBga2VlcGluZ1Njcm9sbGAg54q25oCB77yM6aG65bqP5aaC5LiL77yaXG4gICAqXG4gICAqIDEuIOi3r+eUsemFjee9ruS4rSBkYXRhIOWxnuaAp+S4reWMheWQqyBga2VlcGluZ1Njcm9sbGBcbiAgICogMi4g6I+c5Y2V5pWw5o2u5LitIGBrZWVwaW5nU2Nyb2xsYCDlsZ7mgKdcbiAgICogMy4g57uE5Lu2IGBrZWVwaW5nU2Nyb2xsYCDlgLxcbiAgICovXG4gIGdldEtlZXBpbmdTY3JvbGwodXJsOiBzdHJpbmcsIHJvdXRlPzogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIGlmIChyb3V0ZSAmJiByb3V0ZS5kYXRhICYmIHR5cGVvZiByb3V0ZS5kYXRhLmtlZXBpbmdTY3JvbGwgPT09ICdib29sZWFuJykgcmV0dXJuIHJvdXRlLmRhdGEua2VlcGluZ1Njcm9sbDtcblxuICAgIGNvbnN0IG1lbnUgPSB0aGlzLm1vZGUgIT09IFJldXNlVGFiTWF0Y2hNb2RlLlVSTCA/IHRoaXMuZ2V0TWVudSh1cmwpIDogbnVsbDtcbiAgICBpZiAobWVudSAmJiB0eXBlb2YgbWVudS5rZWVwaW5nU2Nyb2xsID09PSAnYm9vbGVhbicpIHJldHVybiBtZW51LmtlZXBpbmdTY3JvbGw7XG5cbiAgICByZXR1cm4gdGhpcy5rZWVwaW5nU2Nyb2xsO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgaXNEaXNhYmxlZEluUm91dGVyKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJvdXRlckNvbmZpZyA9IHRoaXMuaW5qZWN0b3IuZ2V0PEV4dHJhT3B0aW9ucz4oUk9VVEVSX0NPTkZJR1VSQVRJT04sIHt9IGFzIGFueSk7XG4gICAgcmV0dXJuIHJvdXRlckNvbmZpZy5zY3JvbGxQb3NpdGlvblJlc3RvcmF0aW9uID09PSAnZGlzYWJsZWQnO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgc3MoKTogU2Nyb2xsU2VydmljZSB7XG4gICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0KFNjcm9sbFNlcnZpY2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0U2Nyb2xsKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9yb3V0ZXIkKSB7XG4gICAgICB0aGlzLl9yb3V0ZXIkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fcm91dGVyJCA9IHRoaXMuaW5qZWN0b3IuZ2V0PFJvdXRlcj4oUm91dGVyKS5ldmVudHMuc3Vic2NyaWJlKGUgPT4ge1xuICAgICAgaWYgKGUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQpIHtcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5jdXJVcmw7XG4gICAgICAgIGlmICh0aGlzLmdldEtlZXBpbmdTY3JvbGwodXJsLCB0aGlzLmdldFRydXRoUm91dGUodGhpcy5zbmFwc2hvdCkpKSB7XG4gICAgICAgICAgdGhpcy5wb3NpdGlvbkJ1ZmZlclt1cmxdID0gdGhpcy5zcy5nZXRTY3JvbGxQb3NpdGlvbih0aGlzLmtlZXBpbmdTY3JvbGxDb250YWluZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLnBvc2l0aW9uQnVmZmVyW3VybF07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5jdXJVcmw7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmdldCh1cmwpO1xuICAgICAgICBpZiAoaXRlbSAmJiBpdGVtLnBvc2l0aW9uICYmIHRoaXMuZ2V0S2VlcGluZ1Njcm9sbCh1cmwsIHRoaXMuZ2V0VHJ1dGhSb3V0ZSh0aGlzLnNuYXBzaG90KSkpIHtcbiAgICAgICAgICBpZiAodGhpcy5pc0Rpc2FibGVkSW5Sb3V0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc3Muc2Nyb2xsVG9Qb3NpdGlvbih0aGlzLmtlZXBpbmdTY3JvbGxDb250YWluZXIsIGl0ZW0ucG9zaXRpb24pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc3Muc2Nyb2xsVG9Qb3NpdGlvbih0aGlzLmtlZXBpbmdTY3JvbGxDb250YWluZXIsIGl0ZW0ucG9zaXRpb24hKSwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgY29uc3QgeyBfY2FjaGVkQ2hhbmdlLCBfcm91dGVyJCB9ID0gdGhpcztcbiAgICB0aGlzLmNsZWFyKCk7XG4gICAgdGhpcy5fY2FjaGVkID0gW107XG4gICAgX2NhY2hlZENoYW5nZS5jb21wbGV0ZSgpO1xuXG4gICAgaWYgKF9yb3V0ZXIkKSB7XG4gICAgICBfcm91dGVyJC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19