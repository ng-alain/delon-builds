/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { ViewportScroller } from '@angular/common';
import { Injectable, Injector } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router, ROUTER_CONFIGURATION } from '@angular/router';
import { MenuService } from '@delon/theme';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ReuseTabMatchMode, } from './reuse-tab.interfaces';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@delon/theme";
/**
 * 路由复用类，提供复用所需要一些基本接口
 *
 * **注：** 所有缓存数据来源于路由离开后才会产生
 */
export class ReuseTabService {
    // #endregion
    /**
     * @param {?} injector
     * @param {?} router
     * @param {?} menuService
     */
    constructor(injector, router, menuService) {
        this.injector = injector;
        this.router = router;
        this.menuService = menuService;
        this._max = 10;
        this._keepingScroll = true;
        this._debug = false;
        this._mode = ReuseTabMatchMode.Menu;
        this._excludes = [];
        this._cachedChange = new BehaviorSubject(null);
        this._cached = [];
        this._titleCached = {};
        this._closableCached = {};
        this.positionBuffer = [0, 0];
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
        const url = '/' + segments.filter(i => i).reverse().join('/');
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
     * @return {?}
     */
    init() {
        this.initScroll();
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
            position: (/** @type {?} */ (this.positionBuffer.slice(0))),
            url,
            _snapshot,
            _handle,
        };
        if (idx === -1) {
            if (this.count >= this._max) {
                // Get the oldest closable location
                /** @type {?} */
                const closeIdx = this._cached.findIndex(w => w.closable);
                if (closeIdx !== -1)
                    this.remove(closeIdx, false);
            }
            this._cached.push(item);
        }
        else {
            this._cached[idx] = item;
        }
        this.removeUrlBuffer = null;
        this.positionBuffer = [0, 0];
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
        const path = (/** @type {?} */ (((future.routeConfig && future.routeConfig.path) || '')));
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
    // #region scroll
    /**
     * @return {?}
     */
    isValidScroll() {
        /** @type {?} */
        const routerConfig = this.injector.get(ROUTER_CONFIGURATION, (/** @type {?} */ ({})));
        return routerConfig.scrollPositionRestoration == null || routerConfig.scrollPositionRestoration === 'disabled';
    }
    /**
     * @return {?}
     */
    get vs() {
        return this.injector.get(ViewportScroller);
    }
    /**
     * @return {?}
     */
    initScroll() {
        if (this._router$) {
            this._router$.unsubscribe();
        }
        if (!this.keepingScroll) {
            return;
        }
        this._router$ = this.router.events.pipe(filter(() => this.isValidScroll())).subscribe(e => {
            if (e instanceof NavigationStart) {
                this.positionBuffer = this.vs.getScrollPosition();
            }
            else if (e instanceof NavigationEnd) {
                /** @type {?} */
                const item = this.get(this.curUrl);
                if (item && item.position) {
                    this.vs.scrollToPosition(item.position);
                }
            }
        });
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
    { type: Router },
    { type: MenuService }
];
/** @nocollapse */ ReuseTabService.ngInjectableDef = i0.defineInjectable({ factory: function ReuseTabService_Factory() { return new ReuseTabService(i0.inject(i0.INJECTOR), i0.inject(i1.Router), i0.inject(i2.MenuService)); }, token: ReuseTabService, providedIn: "root" });
if (false) {
    /** @type {?} */
    ReuseTabService.prototype._max;
    /** @type {?} */
    ReuseTabService.prototype._keepingScroll;
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
    ReuseTabService.prototype._router$;
    /** @type {?} */
    ReuseTabService.prototype.removeUrlBuffer;
    /** @type {?} */
    ReuseTabService.prototype.positionBuffer;
    /** @type {?} */
    ReuseTabService.prototype.injector;
    /** @type {?} */
    ReuseTabService.prototype.router;
    /** @type {?} */
    ReuseTabService.prototype.menuService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3JldXNlLXRhYi8iLCJzb3VyY2VzIjpbInJldXNlLXRhYi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsY0FBYyxFQUF3QyxhQUFhLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3JKLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBOEIsTUFBTSxNQUFNLENBQUM7QUFDbkUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFFTCxpQkFBaUIsR0FHbEIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7O0FBUWhDLE1BQU0sT0FBTyxlQUFlOzs7Ozs7O0lBa1YxQixZQUFvQixRQUFrQixFQUFXLE1BQWMsRUFBVSxXQUF3QjtRQUE3RSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVcsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBalZ6RixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFVBQUssR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7UUFDL0IsY0FBUyxHQUFhLEVBQUUsQ0FBQztRQUN6QixrQkFBYSxHQUFvQyxJQUFJLGVBQWUsQ0FBaUIsSUFBSSxDQUFDLENBQUM7UUFDM0YsWUFBTyxHQUFxQixFQUFFLENBQUM7UUFDL0IsaUJBQVksR0FBa0MsRUFBRSxDQUFDO1FBQ2pELG9CQUFlLEdBQStCLEVBQUUsQ0FBQztRQUdqRCxtQkFBYyxHQUF1QixDQUFFLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBQztJQXNVK0MsQ0FBQzs7Ozs7O0lBalV0RyxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7O0lBR0QsSUFBSSxHQUFHLENBQUMsS0FBYTtRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDOUMsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsSUFBSSxJQUFJLENBQUMsS0FBd0I7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQzs7OztJQUNELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7Ozs7SUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFjO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFDRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFDRCxJQUFJLGFBQWEsQ0FBQyxLQUFjO1FBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7O0lBQ0QsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7Ozs7OztJQUVELElBQUksUUFBUSxDQUFDLE1BQWdCO1FBQzNCLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztJQUMxQixDQUFDOzs7O0lBQ0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUM3QixDQUFDOzs7OztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLGtDQUFrQztJQUM5RSxDQUFDOzs7Ozs7SUFFRCxJQUFJLEtBQUssQ0FBQyxLQUEwQjs7Y0FDNUIsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNO1FBQ3ZCLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUTtZQUFFLEtBQUssR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUN2RCxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUMvQixJQUFJLENBQUMsRUFBRSxDQUFDLDRCQUE0QixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1lBQ3RCLE1BQU0sRUFBRSxPQUFPO1lBQ2YsS0FBSyxFQUFFLEtBQUs7WUFDWixJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDbkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRUQsS0FBSyxDQUFDLEdBQVc7UUFDZixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsR0FBVztRQUNoQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7O0lBRUQsR0FBRyxDQUFDLEdBQVc7UUFDYixPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3BFLENBQUM7Ozs7OztJQUNPLE1BQU0sQ0FBQyxHQUFvQixFQUFFLG1CQUE0Qjs7Y0FDekQsR0FBRyxHQUFHLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRzs7Y0FDckQsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUNsRCxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUVwRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUzQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7Ozs7SUFNRCxLQUFLLENBQUMsR0FBVyxFQUFFLG1CQUFtQixHQUFHLEtBQUs7UUFDNUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUM7UUFFM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUV0QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUV0RSxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMxQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7Ozs7O0lBTUQsVUFBVSxDQUFDLEdBQVcsRUFBRSxtQkFBbUIsR0FBRyxLQUFLOztjQUMzQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDN0IsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLG1CQUFtQixDQUFDLENBQUM7U0FDckM7UUFFRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUU1QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUUzRSxJQUFJLENBQUMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7OztJQU1ELEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxLQUFLO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLENBQUMsUUFBUTtnQkFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRSxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQ2hDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQ3pDLENBQUM7UUFFRixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUU1QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBRWpFLElBQUksQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBa0JELElBQUksQ0FBQyxHQUFXLEVBQUUsUUFBZ0I7O2NBQzFCLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDO1FBQ3hELElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQztZQUFFLE9BQU87O2NBQ25CLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTtRQUNqQyxJQUFJLENBQUMsTUFBTSxDQUNULFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQ2hELENBQUMsRUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDekIsQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1lBQ3RCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsR0FBRztZQUNILFFBQVE7WUFDUixJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDbkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBSUQsT0FBTyxDQUFDLE1BQWM7O2NBQ2QsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNO1FBQ3ZCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN2QjthQUFNO1lBQ0wsSUFBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUM7U0FDNUI7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7Ozs7Ozs7O0lBV0QsUUFBUSxDQUFDLEdBQVcsRUFBRSxLQUE4QjtRQUNsRCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTFELElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNuRSxPQUFPLG1CQUFBO2dCQUNMLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUs7Z0JBQ3RCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVM7YUFDM0IsRUFBYyxDQUFDOztjQUVaLElBQUksR0FDUixJQUFJLENBQUMsSUFBSSxLQUFLLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUNoRSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNyRSxDQUFDOzs7OztJQUtELGdCQUFnQjtRQUNkLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7OztJQUVELElBQUksUUFBUSxDQUFDLEtBQWM7O2NBQ25CLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTTtRQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNsQyxJQUFJLENBQUMsRUFBRSxDQUFDLCtCQUErQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1lBQ3RCLE1BQU0sRUFBRSxVQUFVO1lBQ2xCLFFBQVEsRUFBRSxLQUFLO1lBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7Ozs7OztJQVdELFdBQVcsQ0FBQyxHQUFXLEVBQUUsS0FBOEI7UUFDckQsSUFBSSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEtBQUssV0FBVztZQUNsRCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFbkMsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxLQUFLLFNBQVM7WUFDdEUsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQzs7Y0FFNUIsSUFBSSxHQUNSLElBQUksQ0FBQyxJQUFJLEtBQUssaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBQ2hFLElBQUksSUFBSSxJQUFJLE9BQU8sSUFBSSxDQUFDLGFBQWEsS0FBSyxTQUFTO1lBQ2pELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUU1QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBSUQsbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBQ0QsYUFBYSxDQUFDLEtBQTZCOztZQUNyQyxJQUFJLEdBQUcsS0FBSztRQUNoQixPQUFPLElBQUksQ0FBQyxVQUFVO1lBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDL0MsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7Ozs7SUFJRCxNQUFNLENBQUMsS0FBNkI7O1lBQzlCLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQzs7Y0FDOUIsUUFBUSxHQUFHLEVBQUU7UUFDbkIsT0FBTyxJQUFJLEVBQUU7WUFDWCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDcEI7O2NBQ0ssR0FBRyxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUM3RCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Ozs7OztJQUlELEdBQUcsQ0FBQyxLQUE2Qjs7Y0FDekIsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzlCLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxlQUFlO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFFL0MsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUztZQUNyRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRTFCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUU7O2tCQUNqQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDOUIsSUFBSSxDQUFDLElBQUk7Z0JBQUUsT0FBTyxLQUFLLENBQUM7WUFDeEIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLGlCQUFpQixDQUFDLElBQUksRUFBRTtnQkFDeEMsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUs7b0JBQUUsT0FBTyxLQUFLLENBQUM7YUFDeEM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJO29CQUFFLE9BQU8sS0FBSyxDQUFDO2FBQ3REO1lBQ0QsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7OztJQUtELE9BQU8sQ0FBQyxJQUFVO1FBQ2hCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7Ozs7O0lBTU8sT0FBTyxDQUFDLE9BQVk7UUFDMUIsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLFlBQVksSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU87WUFDakUsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVPLEVBQUUsQ0FBQyxHQUFHLElBQUk7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTztRQUN4QixzQ0FBc0M7UUFDdEMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFNRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRU8sT0FBTyxDQUFDLEdBQVc7O2NBQ25CLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUM7UUFDaEQsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQztRQUM5QyxPQUFPLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7Ozs7OztJQUdPLE9BQU8sQ0FBQyxNQUFjLEVBQUUsR0FBVyxFQUFFLElBQVM7UUFDcEQsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxVQUFVO1lBQzlELElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVPLGVBQWUsQ0FBQyxLQUE2QjtRQUNuRCxPQUFPLENBQ0wsQ0FBQyxLQUFLLENBQUMsV0FBVztZQUNsQixLQUFLLENBQUMsV0FBVyxDQUFDLFlBQVk7WUFDOUIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQzNCLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFLRCxZQUFZLENBQUMsS0FBNkI7UUFDeEMsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQzlDLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzlELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7Ozs7OztJQU1ELEtBQUssQ0FBQyxTQUFpQyxFQUFFLE9BQVk7O2NBQzdDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQzs7Y0FDNUIsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztjQUVyQixJQUFJLEdBQW1CO1lBQzNCLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUM7WUFDcEMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQztZQUMxQyxRQUFRLEVBQUUsbUJBQUEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQXNCO1lBQzVELEdBQUc7WUFDSCxTQUFTO1lBQ1QsT0FBTztTQUNSO1FBQ0QsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDZCxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTs7O3NCQUVyQixRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO2dCQUN4RCxJQUFJLFFBQVEsS0FBSyxDQUFDLENBQUM7b0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDbkQ7WUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6QjthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDMUI7UUFDRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDO1FBRS9CLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFNUQsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtZQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDNUQ7UUFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7Ozs7SUFLRCxZQUFZLENBQUMsS0FBNkI7UUFDeEMsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU8sS0FBSyxDQUFDOztjQUN4QyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7O2NBQ3hCLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQzs7Y0FDcEIsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNuQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRTtZQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM5RDtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7Ozs7O0lBS0QsUUFBUSxDQUFDLEtBQTZCO1FBQ3BDLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQzs7Y0FDdkMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDOztjQUN4QixJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7O2NBQ3BCLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSTtRQUMxQyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDL0IsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzs7Ozs7O0lBS0QsZ0JBQWdCLENBQUMsTUFBOEIsRUFBRSxJQUE0Qjs7WUFDdkUsR0FBRyxHQUFHLE1BQU0sQ0FBQyxXQUFXLEtBQUssSUFBSSxDQUFDLFdBQVc7UUFDakQsSUFBSSxDQUFDLEdBQUc7WUFBRSxPQUFPLEtBQUssQ0FBQzs7Y0FFakIsSUFBSSxHQUFHLG1CQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQVU7UUFDOUUsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7O2tCQUNuQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7O2tCQUMvQixPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDakMsR0FBRyxHQUFHLFNBQVMsS0FBSyxPQUFPLENBQUM7U0FDN0I7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLEVBQUUsQ0FDTCxtQkFBbUIsRUFDbkIsR0FBRyxFQUNILEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQzlDLE1BQU0sRUFDTixJQUFJLENBQ0wsQ0FBQztRQUNGLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7Ozs7SUFJTyxhQUFhOztjQUNiLFlBQVksR0FBaUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsbUJBQUEsRUFBRSxFQUFPLENBQUM7UUFDckYsT0FBTyxZQUFZLENBQUMseUJBQXlCLElBQUksSUFBSSxJQUFJLFlBQVksQ0FBQyx5QkFBeUIsS0FBSyxVQUFVLENBQUM7SUFDakgsQ0FBQzs7OztJQUVELElBQVksRUFBRTtRQUNaLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBRU8sVUFBVTtRQUNoQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM3QjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3ZCLE9BQVE7U0FDVDtRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN4RixJQUFJLENBQUMsWUFBWSxlQUFlLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2FBQ25EO2lCQUFNLElBQUksQ0FBQyxZQUFZLGFBQWEsRUFBRTs7c0JBQy9CLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQ2xDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUN6QzthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUlELFdBQVc7Y0FDSCxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJO1FBQ3hDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUV6QixJQUFJLFFBQVEsRUFBRTtZQUNaLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7OztZQTFmRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBakJiLFFBQVE7WUFDa0UsTUFBTTtZQUM1RixXQUFXOzs7OztJQWlCbEIsK0JBQWtCOztJQUNsQix5Q0FBOEI7O0lBQzlCLGlDQUF1Qjs7SUFDdkIsZ0NBQXVDOztJQUN2QyxvQ0FBaUM7O0lBQ2pDLHdDQUFtRzs7SUFDbkcsa0NBQXVDOztJQUN2Qyx1Q0FBeUQ7O0lBQ3pELDBDQUF5RDs7SUFDekQsbUNBQW1DOztJQUNuQywwQ0FBZ0M7O0lBQ2hDLHlDQUFzRDs7SUFzVTFDLG1DQUEwQjs7SUFBRyxpQ0FBc0I7O0lBQUUsc0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmlld3BvcnRTY3JvbGxlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgRXh0cmFPcHRpb25zLCBOYXZpZ2F0aW9uRW5kLCBOYXZpZ2F0aW9uU3RhcnQsIFJvdXRlciwgUk9VVEVSX0NPTkZJR1VSQVRJT04gfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTWVudVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBVbnN1YnNjcmliYWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgUmV1c2VUYWJDYWNoZWQsXG4gIFJldXNlVGFiTWF0Y2hNb2RlLFxuICBSZXVzZVRhYk5vdGlmeSxcbiAgUmV1c2VUaXRsZSxcbn0gZnJvbSAnLi9yZXVzZS10YWIuaW50ZXJmYWNlcyc7XG5cbi8qKlxuICog6Lev55Sx5aSN55So57G777yM5o+Q5L6b5aSN55So5omA6ZyA6KaB5LiA5Lqb5Z+65pys5o6l5Y+jXG4gKlxuICogKirms6jvvJoqKiDmiYDmnInnvJPlrZjmlbDmja7mnaXmupDkuo7ot6/nlLHnprvlvIDlkI7miY3kvJrkuqfnlJ9cbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBSZXVzZVRhYlNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9tYXggPSAxMDtcbiAgcHJpdmF0ZSBfa2VlcGluZ1Njcm9sbCA9IHRydWU7XG4gIHByaXZhdGUgX2RlYnVnID0gZmFsc2U7XG4gIHByaXZhdGUgX21vZGUgPSBSZXVzZVRhYk1hdGNoTW9kZS5NZW51O1xuICBwcml2YXRlIF9leGNsdWRlczogUmVnRXhwW10gPSBbXTtcbiAgcHJpdmF0ZSBfY2FjaGVkQ2hhbmdlOiBCZWhhdmlvclN1YmplY3Q8UmV1c2VUYWJOb3RpZnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxSZXVzZVRhYk5vdGlmeT4obnVsbCk7XG4gIHByaXZhdGUgX2NhY2hlZDogUmV1c2VUYWJDYWNoZWRbXSA9IFtdO1xuICBwcml2YXRlIF90aXRsZUNhY2hlZDogeyBbdXJsOiBzdHJpbmddOiBSZXVzZVRpdGxlIH0gPSB7fTtcbiAgcHJpdmF0ZSBfY2xvc2FibGVDYWNoZWQ6IHsgW3VybDogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XG4gIHByaXZhdGUgX3JvdXRlciQgITogVW5zdWJzY3JpYmFibGU7XG4gIHByaXZhdGUgcmVtb3ZlVXJsQnVmZmVyOiBzdHJpbmc7XG4gIHByaXZhdGUgcG9zaXRpb25CdWZmZXI6IFsgbnVtYmVyLCBudW1iZXIgXSA9IFsgMCwgMCBdO1xuXG4gIC8vICNyZWdpb24gcHVibGljXG5cbiAgLyoqIOW9k+WJjei3r+eUseWcsOWdgCAqL1xuICBnZXQgY3VyVXJsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFVybCh0aGlzLmluamVjdG9yLmdldChBY3RpdmF0ZWRSb3V0ZSkuc25hcHNob3QpO1xuICB9XG5cbiAgLyoqIOWFgeiuuOacgOWkmuWkjeeUqOWkmuWwkeS4qumhtemdou+8jOWPluWAvOiMg+WbtCBgMi0xMDBg77yM5YC85Y+R55Sf5Y+Y5pu05pe25Lya5by65Yi25YWz6Zet5LiU5b+955Wl5Y+v5YWz6Zet5p2h5Lu2ICovXG4gIHNldCBtYXgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21heCA9IE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCAyKSwgMTAwKTtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5fY2FjaGVkLmxlbmd0aDsgaSA+IHRoaXMuX21heDsgaS0tKSB7XG4gICAgICB0aGlzLl9jYWNoZWQucG9wKCk7XG4gICAgfVxuICB9XG4gIC8qKiDorr7nva7ljLnphY3mqKHlvI8gKi9cbiAgc2V0IG1vZGUodmFsdWU6IFJldXNlVGFiTWF0Y2hNb2RlKSB7XG4gICAgdGhpcy5fbW9kZSA9IHZhbHVlO1xuICB9XG4gIGdldCBtb2RlKCkge1xuICAgIHJldHVybiB0aGlzLl9tb2RlO1xuICB9XG4gIC8qKiDorr7nva5EZWJ1Z+aooeW8jyAqL1xuICBzZXQgZGVidWcodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kZWJ1ZyA9IHZhbHVlO1xuICB9XG4gIGdldCBkZWJ1ZygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVidWc7XG4gIH1cbiAgc2V0IGtlZXBpbmdTY3JvbGwodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9rZWVwaW5nU2Nyb2xsID0gdmFsdWU7XG4gICAgdGhpcy5pbml0U2Nyb2xsKCk7XG4gIH1cbiAgZ2V0IGtlZXBpbmdTY3JvbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2tlZXBpbmdTY3JvbGw7XG4gIH1cbiAgLyoqIOaOkumZpOinhOWIme+8jOmZkCBgbW9kZT1VUkxgICovXG4gIHNldCBleGNsdWRlcyh2YWx1ZXM6IFJlZ0V4cFtdKSB7XG4gICAgaWYgKCF2YWx1ZXMpIHJldHVybjtcbiAgICB0aGlzLl9leGNsdWRlcyA9IHZhbHVlcztcbiAgfVxuICBnZXQgZXhjbHVkZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4Y2x1ZGVzO1xuICB9XG4gIC8qKiDojrflj5blt7LnvJPlrZjnmoTot6/nlLEgKi9cbiAgZ2V0IGl0ZW1zKCk6IFJldXNlVGFiQ2FjaGVkW10ge1xuICAgIHJldHVybiB0aGlzLl9jYWNoZWQ7XG4gIH1cbiAgLyoqIOiOt+WPluW9k+WJjee8k+WtmOeahOi3r+eUseaAu+aVsCAqL1xuICBnZXQgY291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZC5sZW5ndGg7XG4gIH1cbiAgLyoqIOiuoumYhee8k+WtmOWPmOabtOmAmuefpSAqL1xuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8UmV1c2VUYWJOb3RpZnk+IHtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVkQ2hhbmdlLmFzT2JzZXJ2YWJsZSgpOyAvLyAucGlwZShmaWx0ZXIodyA9PiB3ICE9PSBudWxsKSk7XG4gIH1cbiAgLyoqIOiHquWumuS5ieW9k+WJjeagh+mimCAqL1xuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IFJldXNlVGl0bGUpIHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmN1clVybDtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykgdmFsdWUgPSB7IHRleHQ6IHZhbHVlIH07XG4gICAgdGhpcy5fdGl0bGVDYWNoZWRbdXJsXSA9IHZhbHVlO1xuICAgIHRoaXMuZGkoJ3VwZGF0ZSBjdXJyZW50IHRhZyB0aXRsZTogJywgdmFsdWUpO1xuICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHtcbiAgICAgIGFjdGl2ZTogJ3RpdGxlJyxcbiAgICAgIHRpdGxlOiB2YWx1ZSxcbiAgICAgIGxpc3Q6IHRoaXMuX2NhY2hlZCxcbiAgICB9KTtcbiAgfVxuICAvKiog6I635Y+W5oyH5a6a6Lev5b6E57yT5a2Y5omA5Zyo5L2N572u77yMYC0xYCDooajnpLrml6DnvJPlrZggKi9cbiAgaW5kZXgodXJsOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jYWNoZWQuZmluZEluZGV4KHcgPT4gdy51cmwgPT09IHVybCk7XG4gIH1cbiAgLyoqIOiOt+WPluaMh+Wumui3r+W+hOe8k+WtmOaYr+WQpuWtmOWcqCAqL1xuICBleGlzdHModXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleCh1cmwpICE9PSAtMTtcbiAgfVxuICAvKiog6I635Y+W5oyH5a6a6Lev5b6E57yT5a2YICovXG4gIGdldCh1cmw6IHN0cmluZyk6IFJldXNlVGFiQ2FjaGVkIHtcbiAgICByZXR1cm4gdXJsID8gdGhpcy5fY2FjaGVkLmZpbmQodyA9PiB3LnVybCA9PT0gdXJsKSB8fCBudWxsIDogbnVsbDtcbiAgfVxuICBwcml2YXRlIHJlbW92ZSh1cmw6IHN0cmluZyB8IG51bWJlciwgaW5jbHVkZU5vbkNsb3NlYWJsZTogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlkeCA9IHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnID8gdGhpcy5pbmRleCh1cmwpIDogdXJsO1xuICAgIGNvbnN0IGl0ZW0gPSBpZHggIT09IC0xID8gdGhpcy5fY2FjaGVkW2lkeF0gOiBudWxsO1xuICAgIGlmICghaXRlbSB8fCAoIWluY2x1ZGVOb25DbG9zZWFibGUgJiYgIWl0ZW0uY2xvc2FibGUpKSByZXR1cm4gZmFsc2U7XG5cbiAgICB0aGlzLmRlc3Ryb3koaXRlbS5faGFuZGxlKTtcblxuICAgIHRoaXMuX2NhY2hlZC5zcGxpY2UoaWR4LCAxKTtcbiAgICBkZWxldGUgdGhpcy5fdGl0bGVDYWNoZWRbdXJsXTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICog5qC55o2uVVJM56e76Zmk5qCH562+XG4gICAqXG4gICAqIEBwYXJhbSBbaW5jbHVkZU5vbkNsb3NlYWJsZT1mYWxzZV0g5piv5ZCm5by65Yi25YyF5ZCr5LiN5Y+v5YWz6ZetXG4gICAqL1xuICBjbG9zZSh1cmw6IHN0cmluZywgaW5jbHVkZU5vbkNsb3NlYWJsZSA9IGZhbHNlKSB7XG4gICAgdGhpcy5yZW1vdmVVcmxCdWZmZXIgPSB1cmw7XG5cbiAgICB0aGlzLnJlbW92ZSh1cmwsIGluY2x1ZGVOb25DbG9zZWFibGUpO1xuXG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoeyBhY3RpdmU6ICdjbG9zZScsIHVybCwgbGlzdDogdGhpcy5fY2FjaGVkIH0pO1xuXG4gICAgdGhpcy5kaSgnY2xvc2UgdGFnJywgdXJsKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICog5riF6Zmk5Y+z6L65XG4gICAqXG4gICAqIEBwYXJhbSBbaW5jbHVkZU5vbkNsb3NlYWJsZT1mYWxzZV0g5piv5ZCm5by65Yi25YyF5ZCr5LiN5Y+v5YWz6ZetXG4gICAqL1xuICBjbG9zZVJpZ2h0KHVybDogc3RyaW5nLCBpbmNsdWRlTm9uQ2xvc2VhYmxlID0gZmFsc2UpIHtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuaW5kZXgodXJsKTtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jb3VudCAtIDE7IGkgPiBzdGFydDsgaS0tKSB7XG4gICAgICB0aGlzLnJlbW92ZShpLCBpbmNsdWRlTm9uQ2xvc2VhYmxlKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbW92ZVVybEJ1ZmZlciA9IG51bGw7XG5cbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7IGFjdGl2ZTogJ2Nsb3NlUmlnaHQnLCB1cmwsIGxpc3Q6IHRoaXMuX2NhY2hlZCB9KTtcblxuICAgIHRoaXMuZGkoJ2Nsb3NlIHJpZ2h0IHRhZ2VzJywgdXJsKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICog5riF6Zmk5omA5pyJ57yT5a2YXG4gICAqXG4gICAqIEBwYXJhbSBbaW5jbHVkZU5vbkNsb3NlYWJsZT1mYWxzZV0g5piv5ZCm5by65Yi25YyF5ZCr5LiN5Y+v5YWz6ZetXG4gICAqL1xuICBjbGVhcihpbmNsdWRlTm9uQ2xvc2VhYmxlID0gZmFsc2UpIHtcbiAgICB0aGlzLl9jYWNoZWQuZm9yRWFjaCh3ID0+IHtcbiAgICAgIGlmICghaW5jbHVkZU5vbkNsb3NlYWJsZSAmJiB3LmNsb3NhYmxlKSB0aGlzLmRlc3Ryb3kody5faGFuZGxlKTtcbiAgICB9KTtcbiAgICB0aGlzLl9jYWNoZWQgPSB0aGlzLl9jYWNoZWQuZmlsdGVyKFxuICAgICAgdyA9PiAhaW5jbHVkZU5vbkNsb3NlYWJsZSAmJiAhdy5jbG9zYWJsZSxcbiAgICApO1xuXG4gICAgdGhpcy5yZW1vdmVVcmxCdWZmZXIgPSBudWxsO1xuXG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoeyBhY3RpdmU6ICdjbGVhcicsIGxpc3Q6IHRoaXMuX2NhY2hlZCB9KTtcblxuICAgIHRoaXMuZGkoJ2NsZWFyIGFsbCBjYXRjaCcpO1xuICB9XG4gIC8qKlxuICAgKiDnp7vliqjnvJPlrZjmlbDmja5cbiAgICogQHBhcmFtIHVybCDopoHnp7vliqjnmoRVUkzlnLDlnYBcbiAgICogQHBhcmFtIHBvc2l0aW9uIOaWsOS9jee9ru+8jOS4i+agh+S7jiBgMGAg5byA5aeLXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYFxuICAgKiAvLyBzb3VyY2VcbiAgICogWyAnL2EvMScsICcvYS8yJywgJy9hLzMnLCAnL2EvNCcsICcvYS81JyBdXG4gICAqIG1vdmUoJy9hLzEnLCAyKTtcbiAgICogLy8gb3V0cHV0XG4gICAqIFsgJy9hLzInLCAnL2EvMycsICcvYS8xJywgJy9hLzQnLCAnL2EvNScgXVxuICAgKiBtb3ZlKCcvYS8xJywgLTEpO1xuICAgKiAvLyBvdXRwdXRcbiAgICogWyAnL2EvMicsICcvYS8zJywgJy9hLzQnLCAnL2EvNScsICcvYS8xJyBdXG4gICAqIGBgYFxuICAgKi9cbiAgbW92ZSh1cmw6IHN0cmluZywgcG9zaXRpb246IG51bWJlcikge1xuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5fY2FjaGVkLmZpbmRJbmRleCh3ID0+IHcudXJsID09PSB1cmwpO1xuICAgIGlmIChzdGFydCA9PT0gLTEpIHJldHVybjtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5fY2FjaGVkLnNsaWNlKCk7XG4gICAgZGF0YS5zcGxpY2UoXG4gICAgICBwb3NpdGlvbiA8IDAgPyBkYXRhLmxlbmd0aCArIHBvc2l0aW9uIDogcG9zaXRpb24sXG4gICAgICAwLFxuICAgICAgZGF0YS5zcGxpY2Uoc3RhcnQsIDEpWzBdLFxuICAgICk7XG4gICAgdGhpcy5fY2FjaGVkID0gZGF0YTtcbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7XG4gICAgICBhY3RpdmU6ICdtb3ZlJyxcbiAgICAgIHVybCxcbiAgICAgIHBvc2l0aW9uLFxuICAgICAgbGlzdDogdGhpcy5fY2FjaGVkLFxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiDlvLrliLblhbPpl63lvZPliY3ot6/nlLHvvIjljIXlkKvkuI3lj6/lhbPpl63nirbmgIHvvInvvIzlubbph43mlrDlr7zoiKroh7MgYG5ld1VybGAg6Lev55SxXG4gICAqL1xuICByZXBsYWNlKG5ld1VybDogc3RyaW5nKSB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5jdXJVcmw7XG4gICAgaWYgKHRoaXMuZXhpc3RzKHVybCkpIHtcbiAgICAgIHRoaXMuY2xvc2UodXJsLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVVcmxCdWZmZXIgPSB1cmw7XG4gICAgfVxuICAgIHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlcikubmF2aWdhdGVCeVVybChuZXdVcmwpO1xuICB9XG4gIC8qKlxuICAgKiDojrflj5bmoIfpopjvvIzpobrluo/lpoLkuIvvvJpcbiAgICpcbiAgICogMS4g57uE5Lu25YaF5L2/55SoIGBSZXVzZVRhYlNlcnZpY2UudGl0bGUgPSAnbmV3IHRpdGxlJ2Ag6YeN5paw5oyH5a6a5paH5pysXG4gICAqIDIuIOi3r+eUsemFjee9ruS4rSBkYXRhIOWxnuaAp+S4reWMheWQqyB0aXRsZUkxOG4gPiB0aXRsZVxuICAgKiAzLiDoj5zljZXmlbDmja7kuK0gdGV4dCDlsZ7mgKdcbiAgICpcbiAgICogQHBhcmFtIHVybCDmjIflrppVUkxcbiAgICogQHBhcmFtIHJvdXRlIOaMh+Wumui3r+eUseW/q+eFp1xuICAgKi9cbiAgZ2V0VGl0bGUodXJsOiBzdHJpbmcsIHJvdXRlPzogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IFJldXNlVGl0bGUge1xuICAgIGlmICh0aGlzLl90aXRsZUNhY2hlZFt1cmxdKSByZXR1cm4gdGhpcy5fdGl0bGVDYWNoZWRbdXJsXTtcblxuICAgIGlmIChyb3V0ZSAmJiByb3V0ZS5kYXRhICYmIChyb3V0ZS5kYXRhLnRpdGxlSTE4biB8fCByb3V0ZS5kYXRhLnRpdGxlKSlcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRleHQ6IHJvdXRlLmRhdGEudGl0bGUsXG4gICAgICAgIGkxOG46IHJvdXRlLmRhdGEudGl0bGVJMThuLFxuICAgICAgfSBhcyBSZXVzZVRpdGxlO1xuXG4gICAgY29uc3QgbWVudSA9XG4gICAgICB0aGlzLm1vZGUgIT09IFJldXNlVGFiTWF0Y2hNb2RlLlVSTCA/IHRoaXMuZ2V0TWVudSh1cmwpIDogbnVsbDtcbiAgICByZXR1cm4gbWVudSA/IHsgdGV4dDogbWVudS50ZXh0LCBpMThuOiBtZW51LmkxOG4gfSA6IHsgdGV4dDogdXJsIH07XG4gIH1cblxuICAvKipcbiAgICog5riF6Zmk5qCH6aKY57yT5a2YXG4gICAqL1xuICBjbGVhclRpdGxlQ2FjaGVkKCkge1xuICAgIHRoaXMuX3RpdGxlQ2FjaGVkID0ge307XG4gIH1cbiAgLyoqIOiHquWumuS5ieW9k+WJjSBgY2xvc2FibGVgIOeKtuaAgSAqL1xuICBzZXQgY2xvc2FibGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmN1clVybDtcbiAgICB0aGlzLl9jbG9zYWJsZUNhY2hlZFt1cmxdID0gdmFsdWU7XG4gICAgdGhpcy5kaSgndXBkYXRlIGN1cnJlbnQgdGFnIGNsb3NhYmxlOiAnLCB2YWx1ZSk7XG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoe1xuICAgICAgYWN0aXZlOiAnY2xvc2FibGUnLFxuICAgICAgY2xvc2FibGU6IHZhbHVlLFxuICAgICAgbGlzdDogdGhpcy5fY2FjaGVkLFxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiDojrflj5YgYGNsb3NhYmxlYCDnirbmgIHvvIzpobrluo/lpoLkuIvvvJpcbiAgICpcbiAgICogMS4g57uE5Lu25YaF5L2/55SoIGBSZXVzZVRhYlNlcnZpY2UuY2xvc2FibGUgPSB0cnVlYCDph43mlrDmjIflrpogYGNsb3NhYmxlYCDnirbmgIFcbiAgICogMi4g6Lev55Sx6YWN572u5LitIGRhdGEg5bGe5oCn5Lit5YyF5ZCrIGByZXVzZUNsb3NhYmxlYFxuICAgKiAzLiDoj5zljZXmlbDmja7kuK0gYHJldXNlQ2xvc2FibGVgIOWxnuaAp1xuICAgKlxuICAgKiBAcGFyYW0gdXJsIOaMh+WumlVSTFxuICAgKiBAcGFyYW0gcm91dGUg5oyH5a6a6Lev55Sx5b+r54WnXG4gICAqL1xuICBnZXRDbG9zYWJsZSh1cmw6IHN0cmluZywgcm91dGU/OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLl9jbG9zYWJsZUNhY2hlZFt1cmxdICE9PSAndW5kZWZpbmVkJylcbiAgICAgIHJldHVybiB0aGlzLl9jbG9zYWJsZUNhY2hlZFt1cmxdO1xuXG4gICAgaWYgKHJvdXRlICYmIHJvdXRlLmRhdGEgJiYgdHlwZW9mIHJvdXRlLmRhdGEucmV1c2VDbG9zYWJsZSA9PT0gJ2Jvb2xlYW4nKVxuICAgICAgcmV0dXJuIHJvdXRlLmRhdGEucmV1c2VDbG9zYWJsZTtcblxuICAgIGNvbnN0IG1lbnUgPVxuICAgICAgdGhpcy5tb2RlICE9PSBSZXVzZVRhYk1hdGNoTW9kZS5VUkwgPyB0aGlzLmdldE1lbnUodXJsKSA6IG51bGw7XG4gICAgaWYgKG1lbnUgJiYgdHlwZW9mIG1lbnUucmV1c2VDbG9zYWJsZSA9PT0gJ2Jvb2xlYW4nKVxuICAgICAgcmV0dXJuIG1lbnUucmV1c2VDbG9zYWJsZTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiDmuIXnqbogYGNsb3NhYmxlYCDnvJPlrZhcbiAgICovXG4gIGNsZWFyQ2xvc2FibGVDYWNoZWQoKSB7XG4gICAgdGhpcy5fY2xvc2FibGVDYWNoZWQgPSB7fTtcbiAgfVxuICBnZXRUcnV0aFJvdXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KSB7XG4gICAgbGV0IG5leHQgPSByb3V0ZTtcbiAgICB3aGlsZSAobmV4dC5maXJzdENoaWxkKSBuZXh0ID0gbmV4dC5maXJzdENoaWxkO1xuICAgIHJldHVybiBuZXh0O1xuICB9XG4gIC8qKlxuICAgKiDmoLnmja7lv6vnhafojrflj5ZVUkzlnLDlnYBcbiAgICovXG4gIGdldFVybChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IHN0cmluZyB7XG4gICAgbGV0IG5leHQgPSB0aGlzLmdldFRydXRoUm91dGUocm91dGUpO1xuICAgIGNvbnN0IHNlZ21lbnRzID0gW107XG4gICAgd2hpbGUgKG5leHQpIHtcbiAgICAgIHNlZ21lbnRzLnB1c2gobmV4dC51cmwuam9pbignLycpKTtcbiAgICAgIG5leHQgPSBuZXh0LnBhcmVudDtcbiAgICB9XG4gICAgY29uc3QgdXJsID0gJy8nICsgc2VnbWVudHMuZmlsdGVyKGkgPT4gaSkucmV2ZXJzZSgpLmpvaW4oJy8nKTtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIC8qKlxuICAgKiDmo4Dmn6Xlv6vnhafmmK/lkKblhYHorrjooqvlpI3nlKhcbiAgICovXG4gIGNhbihyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXJsKHJvdXRlKTtcbiAgICBpZiAodXJsID09PSB0aGlzLnJlbW92ZVVybEJ1ZmZlcikgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKHJvdXRlLmRhdGEgJiYgdHlwZW9mIHJvdXRlLmRhdGEucmV1c2UgPT09ICdib29sZWFuJylcbiAgICAgIHJldHVybiByb3V0ZS5kYXRhLnJldXNlO1xuXG4gICAgaWYgKHRoaXMubW9kZSAhPT0gUmV1c2VUYWJNYXRjaE1vZGUuVVJMKSB7XG4gICAgICBjb25zdCBtZW51ID0gdGhpcy5nZXRNZW51KHVybCk7XG4gICAgICBpZiAoIW1lbnUpIHJldHVybiBmYWxzZTtcbiAgICAgIGlmICh0aGlzLm1vZGUgPT09IFJldXNlVGFiTWF0Y2hNb2RlLk1lbnUpIHtcbiAgICAgICAgaWYgKG1lbnUucmV1c2UgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIW1lbnUucmV1c2UgfHwgbWVudS5yZXVzZSAhPT0gdHJ1ZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9leGNsdWRlcy5maW5kSW5kZXgociA9PiByLnRlc3QodXJsKSkgPT09IC0xO1xuICB9XG4gIC8qKlxuICAgKiDliLfmlrDvvIzop6blj5HkuIDkuKogcmVmcmVzaCDnsbvlnovkuovku7ZcbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgcmVmcmVzaChkYXRhPzogYW55KSB7XG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoeyBhY3RpdmU6ICdyZWZyZXNoJywgZGF0YSB9KTtcbiAgfVxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBwcml2YXRlc1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgcHJpdmF0ZSBkZXN0cm95KF9oYW5kbGU6IGFueSkge1xuICAgIGlmIChfaGFuZGxlICYmIF9oYW5kbGUuY29tcG9uZW50UmVmICYmIF9oYW5kbGUuY29tcG9uZW50UmVmLmRlc3Ryb3kpXG4gICAgICBfaGFuZGxlLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gIH1cblxuICBwcml2YXRlIGRpKC4uLmFyZ3MpIHtcbiAgICBpZiAoIXRoaXMuZGVidWcpIHJldHVybjtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybiguLi5hcmdzKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3RvciwgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgbWVudVNlcnZpY2U6IE1lbnVTZXJ2aWNlKSB7IH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuaW5pdFNjcm9sbCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRNZW51KHVybDogc3RyaW5nKSB7XG4gICAgY29uc3QgbWVudXMgPSB0aGlzLm1lbnVTZXJ2aWNlLmdldFBhdGhCeVVybCh1cmwpO1xuICAgIGlmICghbWVudXMgfHwgbWVudXMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gbWVudXMucG9wKCk7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHByaXZhdGUgcnVuSG9vayhtZXRob2Q6IHN0cmluZywgdXJsOiBzdHJpbmcsIGNvbXA6IGFueSkge1xuICAgIGlmIChjb21wLmluc3RhbmNlICYmIHR5cGVvZiBjb21wLmluc3RhbmNlW21ldGhvZF0gPT09ICdmdW5jdGlvbicpXG4gICAgICBjb21wLmluc3RhbmNlW21ldGhvZF0oKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFzSW5WYWxpZFJvdXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICFyb3V0ZS5yb3V0ZUNvbmZpZyB8fFxuICAgICAgcm91dGUucm91dGVDb25maWcubG9hZENoaWxkcmVuIHx8XG4gICAgICByb3V0ZS5yb3V0ZUNvbmZpZy5jaGlsZHJlblxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICog5Yaz5a6a5piv5ZCm5YWB6K646Lev55Sx5aSN55So77yM6IulIGB0cnVlYCDkvJrop6blj5EgYHN0b3JlYFxuICAgKi9cbiAgc2hvdWxkRGV0YWNoKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaGFzSW5WYWxpZFJvdXRlKHJvdXRlKSkgcmV0dXJuIGZhbHNlO1xuICAgIHRoaXMuZGkoJyNzaG91bGREZXRhY2gnLCB0aGlzLmNhbihyb3V0ZSksIHRoaXMuZ2V0VXJsKHJvdXRlKSk7XG4gICAgcmV0dXJuIHRoaXMuY2FuKHJvdXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlrZjlgqhcbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgc3RvcmUoX3NuYXBzaG90OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBfaGFuZGxlOiBhbnkpIHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVybChfc25hcHNob3QpO1xuICAgIGNvbnN0IGlkeCA9IHRoaXMuaW5kZXgodXJsKTtcblxuICAgIGNvbnN0IGl0ZW06IFJldXNlVGFiQ2FjaGVkID0ge1xuICAgICAgdGl0bGU6IHRoaXMuZ2V0VGl0bGUodXJsLCBfc25hcHNob3QpLFxuICAgICAgY2xvc2FibGU6IHRoaXMuZ2V0Q2xvc2FibGUodXJsLCBfc25hcHNob3QpLFxuICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb25CdWZmZXIuc2xpY2UoMCkgYXMgWyBudW1iZXIsIG51bWJlciBdLFxuICAgICAgdXJsLFxuICAgICAgX3NuYXBzaG90LFxuICAgICAgX2hhbmRsZSxcbiAgICB9O1xuICAgIGlmIChpZHggPT09IC0xKSB7XG4gICAgICBpZiAodGhpcy5jb3VudCA+PSB0aGlzLl9tYXgpIHtcbiAgICAgICAgLy8gR2V0IHRoZSBvbGRlc3QgY2xvc2FibGUgbG9jYXRpb25cbiAgICAgICAgY29uc3QgY2xvc2VJZHggPSB0aGlzLl9jYWNoZWQuZmluZEluZGV4KHcgPT4gdy5jbG9zYWJsZSk7XG4gICAgICAgIGlmIChjbG9zZUlkeCAhPT0gLTEpIHRoaXMucmVtb3ZlKGNsb3NlSWR4LCBmYWxzZSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9jYWNoZWQucHVzaChpdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY2FjaGVkW2lkeF0gPSBpdGVtO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZVVybEJ1ZmZlciA9IG51bGw7XG4gICAgdGhpcy5wb3NpdGlvbkJ1ZmZlciA9IFsgMCwgMCBdO1xuXG4gICAgdGhpcy5kaSgnI3N0b3JlJywgaWR4ID09PSAtMSA/ICdbbmV3XScgOiAnW292ZXJyaWRlXScsIHVybCk7XG5cbiAgICBpZiAoX2hhbmRsZSAmJiBfaGFuZGxlLmNvbXBvbmVudFJlZikge1xuICAgICAgdGhpcy5ydW5Ib29rKCdfb25SZXVzZURlc3Ryb3knLCB1cmwsIF9oYW5kbGUuY29tcG9uZW50UmVmKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7IGFjdGl2ZTogJ2FkZCcsIGl0ZW0sIGxpc3Q6IHRoaXMuX2NhY2hlZCB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlhrPlrprmmK/lkKblhYHorrjlupTnlKjnvJPlrZjmlbDmja5cbiAgICovXG4gIHNob3VsZEF0dGFjaChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmhhc0luVmFsaWRSb3V0ZShyb3V0ZSkpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVybChyb3V0ZSk7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0KHVybCk7XG4gICAgY29uc3QgcmV0ID0gISEoZGF0YSAmJiBkYXRhLl9oYW5kbGUpO1xuICAgIHRoaXMuZGkoJyNzaG91bGRBdHRhY2gnLCByZXQsIHVybCk7XG4gICAgaWYgKHJldCAmJiBkYXRhLl9oYW5kbGUuY29tcG9uZW50UmVmKSB7XG4gICAgICB0aGlzLnJ1bkhvb2soJ19vblJldXNlSW5pdCcsIHVybCwgZGF0YS5faGFuZGxlLmNvbXBvbmVudFJlZik7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICog5o+Q5Y+W5aSN55So5pWw5o2uXG4gICAqL1xuICByZXRyaWV2ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IHt9IHtcbiAgICBpZiAodGhpcy5oYXNJblZhbGlkUm91dGUocm91dGUpKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVybChyb3V0ZSk7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0KHVybCk7XG4gICAgY29uc3QgcmV0ID0gKGRhdGEgJiYgZGF0YS5faGFuZGxlKSB8fCBudWxsO1xuICAgIHRoaXMuZGkoJyNyZXRyaWV2ZScsIHVybCwgcmV0KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIOWGs+WumuaYr+WQpuW6lOivpei/m+ihjOWkjeeUqOi3r+eUseWkhOeQhlxuICAgKi9cbiAgc2hvdWxkUmV1c2VSb3V0ZShmdXR1cmU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIGN1cnI6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICBsZXQgcmV0ID0gZnV0dXJlLnJvdXRlQ29uZmlnID09PSBjdXJyLnJvdXRlQ29uZmlnO1xuICAgIGlmICghcmV0KSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBwYXRoID0gKChmdXR1cmUucm91dGVDb25maWcgJiYgZnV0dXJlLnJvdXRlQ29uZmlnLnBhdGgpIHx8ICcnKSBhcyBzdHJpbmc7XG4gICAgaWYgKHBhdGgubGVuZ3RoID4gMCAmJiB+cGF0aC5pbmRleE9mKCc6JykpIHtcbiAgICAgIGNvbnN0IGZ1dHVyZVVybCA9IHRoaXMuZ2V0VXJsKGZ1dHVyZSk7XG4gICAgICBjb25zdCBjdXJyVXJsID0gdGhpcy5nZXRVcmwoY3Vycik7XG4gICAgICByZXQgPSBmdXR1cmVVcmwgPT09IGN1cnJVcmw7XG4gICAgfVxuICAgIHRoaXMuZGkoJz09PT09PT09PT09PT09PT09PT09PScpO1xuICAgIHRoaXMuZGkoXG4gICAgICAnI3Nob3VsZFJldXNlUm91dGUnLFxuICAgICAgcmV0LFxuICAgICAgYCR7dGhpcy5nZXRVcmwoY3Vycil9PT4ke3RoaXMuZ2V0VXJsKGZ1dHVyZSl9YCxcbiAgICAgIGZ1dHVyZSxcbiAgICAgIGN1cnIsXG4gICAgKTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBzY3JvbGxcblxuICBwcml2YXRlIGlzVmFsaWRTY3JvbGwoKTogYm9vbGVhbiB7XG4gICAgY29uc3Qgcm91dGVyQ29uZmlnOiBFeHRyYU9wdGlvbnMgPSB0aGlzLmluamVjdG9yLmdldChST1VURVJfQ09ORklHVVJBVElPTiwge30gYXMgYW55KTtcbiAgICByZXR1cm4gcm91dGVyQ29uZmlnLnNjcm9sbFBvc2l0aW9uUmVzdG9yYXRpb24gPT0gbnVsbCB8fCByb3V0ZXJDb25maWcuc2Nyb2xsUG9zaXRpb25SZXN0b3JhdGlvbiA9PT0gJ2Rpc2FibGVkJztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IHZzKCk6IFZpZXdwb3J0U2Nyb2xsZXIge1xuICAgIHJldHVybiB0aGlzLmluamVjdG9yLmdldChWaWV3cG9ydFNjcm9sbGVyKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdFNjcm9sbCgpIHtcbiAgICBpZiAodGhpcy5fcm91dGVyJCkge1xuICAgICAgdGhpcy5fcm91dGVyJC51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5rZWVwaW5nU2Nyb2xsKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cblxuICAgIHRoaXMuX3JvdXRlciQgPSB0aGlzLnJvdXRlci5ldmVudHMucGlwZShmaWx0ZXIoKCkgPT4gdGhpcy5pc1ZhbGlkU2Nyb2xsKCkpKS5zdWJzY3JpYmUoZSA9PiB7XG4gICAgICBpZiAoZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uQnVmZmVyID0gdGhpcy52cy5nZXRTY3JvbGxQb3NpdGlvbigpO1xuICAgICAgfSBlbHNlIGlmIChlIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkge1xuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5nZXQodGhpcy5jdXJVcmwpO1xuICAgICAgICBpZiAoaXRlbSAmJiBpdGVtLnBvc2l0aW9uKSB7XG4gICAgICAgICAgdGhpcy52cy5zY3JvbGxUb1Bvc2l0aW9uKGl0ZW0ucG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgY29uc3QgeyBfY2FjaGVkQ2hhbmdlLCBfcm91dGVyJCB9ID0gdGhpcztcbiAgICB0aGlzLmNsZWFyKCk7XG4gICAgdGhpcy5fY2FjaGVkID0gW107XG4gICAgX2NhY2hlZENoYW5nZS5jb21wbGV0ZSgpO1xuXG4gICAgaWYgKF9yb3V0ZXIkKSB7XG4gICAgICBfcm91dGVyJC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19