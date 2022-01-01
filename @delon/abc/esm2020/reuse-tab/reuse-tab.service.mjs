import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router, ROUTER_CONFIGURATION } from '@angular/router';
import { BehaviorSubject, timer } from 'rxjs';
import { ScrollService } from '@delon/util/browser';
import { ReuseTabMatchMode } from './reuse-tab.interfaces';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
export class ReuseTabService {
    // #endregion
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
        this.removeUrlBuffer = null;
        this.positionBuffer = {};
        this.debug = false;
        this.routeParamMatchMode = 'strict';
        this.mode = ReuseTabMatchMode.Menu;
        /** 排除规则，限 `mode=URL` */
        this.excludes = [];
    }
    get snapshot() {
        return this.injector.get(ActivatedRoute).snapshot;
    }
    // #region public
    /**
     * Get init status
     *
     * 是否已经初始化完成
     */
    get inited() {
        return this._inited;
    }
    /**
     * Current routing address
     *
     * 当前路由地址
     */
    get curUrl() {
        return this.getUrl(this.snapshot);
    }
    /**
     * 允许最多复用多少个页面，取值范围 `2-100`，值发生变更时会强制关闭且忽略可关闭条件
     */
    set max(value) {
        this._max = Math.min(Math.max(value, 2), 100);
        for (let i = this._cached.length; i > this._max; i--) {
            this._cached.pop();
        }
    }
    set keepingScroll(value) {
        this._keepingScroll = value;
        this.initScroll();
    }
    get keepingScroll() {
        return this._keepingScroll;
    }
    /** 获取已缓存的路由 */
    get items() {
        return this._cached;
    }
    /** 获取当前缓存的路由总数 */
    get count() {
        return this._cached.length;
    }
    /** 订阅缓存变更通知 */
    get change() {
        return this._cachedChange.asObservable(); // .pipe(filter(w => w !== null));
    }
    /** 自定义当前标题 */
    set title(value) {
        const url = this.curUrl;
        if (typeof value === 'string')
            value = { text: value };
        this._titleCached[url] = value;
        this.di('update current tag title: ', value);
        this._cachedChange.next({
            active: 'title',
            url,
            title: value,
            list: this._cached
        });
    }
    /** 获取指定路径缓存所在位置，`-1` 表示无缓存 */
    index(url) {
        return this._cached.findIndex(w => w.url === url);
    }
    /** 获取指定路径缓存是否存在 */
    exists(url) {
        return this.index(url) !== -1;
    }
    /** 获取指定路径缓存 */
    get(url) {
        return url ? this._cached.find(w => w.url === url) || null : null;
    }
    remove(url, includeNonCloseable) {
        const idx = typeof url === 'string' ? this.index(url) : url;
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
     * @param [includeNonCloseable=false] 是否强制包含不可关闭
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
     * @param [includeNonCloseable=false] 是否强制包含不可关闭
     */
    closeRight(url, includeNonCloseable = false) {
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
     * @param [includeNonCloseable=false] 是否强制包含不可关闭
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
     *
     * @param url 要移动的URL地址
     * @param position 新位置，下标从 `0` 开始
     *
     * @example
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
     */
    move(url, position) {
        const start = this._cached.findIndex(w => w.url === url);
        if (start === -1)
            return;
        const data = this._cached.slice();
        data.splice(position < 0 ? data.length + position : position, 0, data.splice(start, 1)[0]);
        this._cached = data;
        this._cachedChange.next({
            active: 'move',
            url,
            position,
            list: this._cached
        });
    }
    /**
     * 强制关闭当前路由（包含不可关闭状态），并重新导航至 `newUrl` 路由
     */
    replace(newUrl) {
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
     * @param url 指定URL
     * @param route 指定路由快照
     */
    getTitle(url, route) {
        if (this._titleCached[url]) {
            return this._titleCached[url];
        }
        if (route && route.data && (route.data.titleI18n || route.data.title)) {
            return {
                text: route.data.title,
                i18n: route.data.titleI18n
            };
        }
        const menu = this.getMenu(url);
        return menu ? { text: menu.text, i18n: menu.i18n } : { text: url };
    }
    /**
     * 清除标题缓存
     */
    clearTitleCached() {
        this._titleCached = {};
    }
    /** 自定义当前 `closable` 状态 */
    set closable(value) {
        const url = this.curUrl;
        this._closableCached[url] = value;
        this.di('update current tag closable: ', value);
        this._cachedChange.next({
            active: 'closable',
            closable: value,
            list: this._cached
        });
    }
    /**
     * 获取 `closable` 状态，顺序如下：
     *
     * 1. 组件内使用 `ReuseTabService.closable = true` 重新指定 `closable` 状态
     * 2. 路由配置中 data 属性中包含 `reuseClosable`
     * 3. 菜单数据中 `reuseClosable` 属性
     *
     * @param url 指定URL
     * @param route 指定路由快照
     */
    getClosable(url, route) {
        if (typeof this._closableCached[url] !== 'undefined')
            return this._closableCached[url];
        if (route && route.data && typeof route.data.reuseClosable === 'boolean')
            return route.data.reuseClosable;
        const menu = this.mode !== ReuseTabMatchMode.URL ? this.getMenu(url) : null;
        if (menu && typeof menu.reuseClosable === 'boolean')
            return menu.reuseClosable;
        return true;
    }
    /**
     * 清空 `closable` 缓存
     */
    clearClosableCached() {
        this._closableCached = {};
    }
    getTruthRoute(route) {
        let next = route;
        while (next.firstChild)
            next = next.firstChild;
        return next;
    }
    /**
     * 根据快照获取URL地址
     */
    getUrl(route) {
        let next = this.getTruthRoute(route);
        const segments = [];
        while (next) {
            segments.push(next.url.join('/'));
            next = next.parent;
        }
        const url = `/${segments
            .filter(i => i)
            .reverse()
            .join('/')}`;
        return url;
    }
    /**
     * 检查快照是否允许被复用
     */
    can(route) {
        const url = this.getUrl(route);
        if (url === this.removeUrlBuffer)
            return false;
        if (route.data && typeof route.data.reuse === 'boolean')
            return route.data.reuse;
        if (this.mode !== ReuseTabMatchMode.URL) {
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
    isExclude(url) {
        return this.excludes.findIndex(r => r.test(url)) !== -1;
    }
    /**
     * 刷新，触发一个 refresh 类型事件
     */
    refresh(data) {
        this._cachedChange.next({ active: 'refresh', data });
    }
    // #endregion
    // #region privates
    destroy(_handle) {
        if (_handle && _handle.componentRef && _handle.componentRef.destroy)
            _handle.componentRef.destroy();
    }
    di(...args) {
        if (!this.debug)
            return;
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            console.warn(...args);
        }
    }
    init() {
        this.initScroll();
        this._inited = true;
    }
    getMenu(url) {
        const menus = this.menuService.getPathByUrl(url);
        if (!menus || menus.length === 0)
            return null;
        return menus.pop();
    }
    runHook(method, comp, type = 'init') {
        if (typeof comp === 'number') {
            const item = this._cached[comp];
            comp = item._handle.componentRef;
        }
        if (comp == null || !comp.instance) {
            return;
        }
        const compThis = comp.instance;
        const fn = compThis[method];
        if (typeof fn !== 'function') {
            return;
        }
        if (method === '_onReuseInit') {
            fn.call(compThis, type);
        }
        else {
            fn.call(compThis);
        }
    }
    hasInValidRoute(route) {
        return !route.routeConfig || !!route.routeConfig.loadChildren || !!route.routeConfig.children;
    }
    /**
     * 决定是否允许路由复用，若 `true` 会触发 `store`
     */
    shouldDetach(route) {
        if (this.hasInValidRoute(route))
            return false;
        this.di('#shouldDetach', this.can(route), this.getUrl(route));
        return this.can(route);
    }
    /**
     * 存储
     */
    store(_snapshot, _handle) {
        const url = this.getUrl(_snapshot);
        const idx = this.index(url);
        const isAdd = idx === -1;
        const item = {
            title: this.getTitle(url, _snapshot),
            closable: this.getClosable(url, _snapshot),
            position: this.getKeepingScroll(url, _snapshot) ? this.positionBuffer[url] : null,
            url,
            _snapshot,
            _handle
        };
        if (isAdd) {
            if (this.count >= this._max) {
                // Get the oldest closable location
                const closeIdx = this._cached.findIndex(w => w.closable);
                if (closeIdx !== -1)
                    this.remove(closeIdx, false);
            }
            this._cached.push(item);
        }
        else {
            // Current handler is null when activate routes
            // For better reliability, we need to wait for the component to be attached before call _onReuseInit
            const cahcedComponentRef = this._cached[idx]._handle?.componentRef;
            if (_handle == null && cahcedComponentRef != null) {
                timer(100).subscribe(() => this.runHook('_onReuseInit', cahcedComponentRef));
            }
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
     */
    shouldAttach(route) {
        if (this.hasInValidRoute(route))
            return false;
        const url = this.getUrl(route);
        const data = this.get(url);
        const ret = !!(data && data._handle);
        this.di('#shouldAttach', ret, url);
        if (!ret) {
            this._cachedChange.next({ active: 'add', url, list: this._cached });
        }
        return ret;
    }
    /**
     * 提取复用数据
     */
    retrieve(route) {
        if (this.hasInValidRoute(route))
            return null;
        const url = this.getUrl(route);
        const data = this.get(url);
        const ret = (data && data._handle) || null;
        this.di('#retrieve', url, ret);
        return ret;
    }
    /**
     * 决定是否应该进行复用路由处理
     */
    shouldReuseRoute(future, curr) {
        let ret = future.routeConfig === curr.routeConfig;
        if (!ret)
            return false;
        const path = ((future.routeConfig && future.routeConfig.path) || '');
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
     */
    getKeepingScroll(url, route) {
        if (route && route.data && typeof route.data.keepingScroll === 'boolean')
            return route.data.keepingScroll;
        const menu = this.mode !== ReuseTabMatchMode.URL ? this.getMenu(url) : null;
        if (menu && typeof menu.keepingScroll === 'boolean')
            return menu.keepingScroll;
        return this.keepingScroll;
    }
    get isDisabledInRouter() {
        const routerConfig = this.injector.get(ROUTER_CONFIGURATION, {});
        return routerConfig.scrollPositionRestoration === 'disabled';
    }
    get ss() {
        return this.injector.get(ScrollService);
    }
    initScroll() {
        if (this._router$) {
            this._router$.unsubscribe();
        }
        this._router$ = this.injector.get(Router).events.subscribe(e => {
            if (e instanceof NavigationStart) {
                const url = this.curUrl;
                if (this.getKeepingScroll(url, this.getTruthRoute(this.snapshot))) {
                    this.positionBuffer[url] = this.ss.getScrollPosition(this.keepingScrollContainer);
                }
                else {
                    delete this.positionBuffer[url];
                }
            }
            else if (e instanceof NavigationEnd) {
                const url = this.curUrl;
                const item = this.get(url);
                if (item && item.position && this.getKeepingScroll(url, this.getTruthRoute(this.snapshot))) {
                    if (this.isDisabledInRouter) {
                        this.ss.scrollToPosition(this.keepingScrollContainer, item.position);
                    }
                    else {
                        setTimeout(() => this.ss.scrollToPosition(this.keepingScrollContainer, item.position), 1);
                    }
                }
            }
        });
    }
    // #endregion
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
ReuseTabService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ReuseTabService, deps: [{ token: i0.Injector }, { token: i1.MenuService }], target: i0.ɵɵFactoryTarget.Injectable });
ReuseTabService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ReuseTabService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ReuseTabService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.MenuService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvcmV1c2UtdGFiL3JldXNlLXRhYi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFDTCxjQUFjLEVBR2QsYUFBYSxFQUNiLGVBQWUsRUFDZixNQUFNLEVBQ04sb0JBQW9CLEVBQ3JCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGVBQWUsRUFBYyxLQUFLLEVBQWtCLE1BQU0sTUFBTSxDQUFDO0FBRzFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUdwRCxPQUFPLEVBS0wsaUJBQWlCLEVBSWxCLE1BQU0sd0JBQXdCLENBQUM7OztBQUdoQyxNQUFNLE9BQU8sZUFBZTtJQWlWMUIsYUFBYTtJQUViLFlBQW9CLFFBQWtCLEVBQVUsV0FBd0I7UUFBcEQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBbFZoRSxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixrQkFBYSxHQUFHLElBQUksZUFBZSxDQUF3QixJQUFJLENBQUMsQ0FBQztRQUNqRSxZQUFPLEdBQXFCLEVBQUUsQ0FBQztRQUMvQixpQkFBWSxHQUFrQyxFQUFFLENBQUM7UUFDakQsb0JBQWUsR0FBK0IsRUFBRSxDQUFDO1FBRWpELG9CQUFlLEdBQWtCLElBQUksQ0FBQztRQUN0QyxtQkFBYyxHQUF3QyxFQUFFLENBQUM7UUFFakUsVUFBSyxHQUFHLEtBQUssQ0FBQztRQUNkLHdCQUFtQixHQUFnQyxRQUFRLENBQUM7UUFDNUQsU0FBSSxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQztRQUM5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LElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUV6QixJQUFJLFFBQVEsRUFBRTtZQUNaLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7OzRHQWxpQlUsZUFBZTtnSEFBZixlQUFlLGNBREYsTUFBTTsyRkFDbkIsZUFBZTtrQkFEM0IsVUFBVTttQkFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBY3RpdmF0ZWRSb3V0ZSxcbiAgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgRXh0cmFPcHRpb25zLFxuICBOYXZpZ2F0aW9uRW5kLFxuICBOYXZpZ2F0aW9uU3RhcnQsXG4gIFJvdXRlcixcbiAgUk9VVEVSX0NPTkZJR1VSQVRJT05cbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgdGltZXIsIFVuc3Vic2NyaWJhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE1lbnUsIE1lbnVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IFNjcm9sbFNlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9icm93c2VyJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHtcbiAgUmV1c2VDb21wb25lbnRSZWYsXG4gIFJldXNlSG9va09uUmV1c2VJbml0VHlwZSxcbiAgUmV1c2VIb29rVHlwZXMsXG4gIFJldXNlVGFiQ2FjaGVkLFxuICBSZXVzZVRhYk1hdGNoTW9kZSxcbiAgUmV1c2VUYWJOb3RpZnksXG4gIFJldXNlVGFiUm91dGVQYXJhbU1hdGNoTW9kZSxcbiAgUmV1c2VUaXRsZVxufSBmcm9tICcuL3JldXNlLXRhYi5pbnRlcmZhY2VzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBSZXVzZVRhYlNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9pbml0ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbWF4ID0gMTA7XG4gIHByaXZhdGUgX2tlZXBpbmdTY3JvbGwgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY2FjaGVkQ2hhbmdlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxSZXVzZVRhYk5vdGlmeSB8IG51bGw+KG51bGwpO1xuICBwcml2YXRlIF9jYWNoZWQ6IFJldXNlVGFiQ2FjaGVkW10gPSBbXTtcbiAgcHJpdmF0ZSBfdGl0bGVDYWNoZWQ6IHsgW3VybDogc3RyaW5nXTogUmV1c2VUaXRsZSB9ID0ge307XG4gIHByaXZhdGUgX2Nsb3NhYmxlQ2FjaGVkOiB7IFt1cmw6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xuICBwcml2YXRlIF9yb3V0ZXIkPzogVW5zdWJzY3JpYmFibGU7XG4gIHByaXZhdGUgcmVtb3ZlVXJsQnVmZmVyOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBwb3NpdGlvbkJ1ZmZlcjogeyBbdXJsOiBzdHJpbmddOiBbbnVtYmVyLCBudW1iZXJdIH0gPSB7fTtcbiAgY29tcG9uZW50UmVmPzogUmV1c2VDb21wb25lbnRSZWY7XG4gIGRlYnVnID0gZmFsc2U7XG4gIHJvdXRlUGFyYW1NYXRjaE1vZGU6IFJldXNlVGFiUm91dGVQYXJhbU1hdGNoTW9kZSA9ICdzdHJpY3QnO1xuICBtb2RlID0gUmV1c2VUYWJNYXRjaE1vZGUuTWVudTtcbiAgLyoqIOaOkumZpOinhOWIme+8jOmZkCBgbW9kZT1VUkxgICovXG4gIGV4Y2x1ZGVzOiBSZWdFeHBbXSA9IFtdO1xuXG4gIHByaXZhdGUgZ2V0IHNuYXBzaG90KCk6IEFjdGl2YXRlZFJvdXRlU25hcHNob3Qge1xuICAgIHJldHVybiB0aGlzLmluamVjdG9yLmdldChBY3RpdmF0ZWRSb3V0ZSkuc25hcHNob3Q7XG4gIH1cblxuICAvLyAjcmVnaW9uIHB1YmxpY1xuXG4gIC8qKlxuICAgKiBHZXQgaW5pdCBzdGF0dXNcbiAgICpcbiAgICog5piv5ZCm5bey57uP5Yid5aeL5YyW5a6M5oiQXG4gICAqL1xuICBnZXQgaW5pdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pbml0ZWQ7XG4gIH1cblxuICAvKipcbiAgICogQ3VycmVudCByb3V0aW5nIGFkZHJlc3NcbiAgICpcbiAgICog5b2T5YmN6Lev55Sx5Zyw5Z2AXG4gICAqL1xuICBnZXQgY3VyVXJsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VXJsKHRoaXMuc25hcHNob3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIOWFgeiuuOacgOWkmuWkjeeUqOWkmuWwkeS4qumhtemdou+8jOWPluWAvOiMg+WbtCBgMi0xMDBg77yM5YC85Y+R55Sf5Y+Y5pu05pe25Lya5by65Yi25YWz6Zet5LiU5b+955Wl5Y+v5YWz6Zet5p2h5Lu2XG4gICAqL1xuICBzZXQgbWF4KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXggPSBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgMiksIDEwMCk7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuX2NhY2hlZC5sZW5ndGg7IGkgPiB0aGlzLl9tYXg7IGktLSkge1xuICAgICAgdGhpcy5fY2FjaGVkLnBvcCgpO1xuICAgIH1cbiAgfVxuICBzZXQga2VlcGluZ1Njcm9sbCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2tlZXBpbmdTY3JvbGwgPSB2YWx1ZTtcbiAgICB0aGlzLmluaXRTY3JvbGwoKTtcbiAgfVxuICBnZXQga2VlcGluZ1Njcm9sbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fa2VlcGluZ1Njcm9sbDtcbiAgfVxuICBrZWVwaW5nU2Nyb2xsQ29udGFpbmVyPzogRWxlbWVudDtcbiAgLyoqIOiOt+WPluW3sue8k+WtmOeahOi3r+eUsSAqL1xuICBnZXQgaXRlbXMoKTogUmV1c2VUYWJDYWNoZWRbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZDtcbiAgfVxuICAvKiog6I635Y+W5b2T5YmN57yT5a2Y55qE6Lev55Sx5oC75pWwICovXG4gIGdldCBjb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jYWNoZWQubGVuZ3RoO1xuICB9XG4gIC8qKiDorqLpmIXnvJPlrZjlj5jmm7TpgJrnn6UgKi9cbiAgZ2V0IGNoYW5nZSgpOiBPYnNlcnZhYmxlPFJldXNlVGFiTm90aWZ5IHwgbnVsbD4ge1xuICAgIHJldHVybiB0aGlzLl9jYWNoZWRDaGFuZ2UuYXNPYnNlcnZhYmxlKCk7IC8vIC5waXBlKGZpbHRlcih3ID0+IHcgIT09IG51bGwpKTtcbiAgfVxuICAvKiog6Ieq5a6a5LmJ5b2T5YmN5qCH6aKYICovXG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgUmV1c2VUaXRsZSkge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuY3VyVXJsO1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB2YWx1ZSA9IHsgdGV4dDogdmFsdWUgfTtcbiAgICB0aGlzLl90aXRsZUNhY2hlZFt1cmxdID0gdmFsdWU7XG4gICAgdGhpcy5kaSgndXBkYXRlIGN1cnJlbnQgdGFnIHRpdGxlOiAnLCB2YWx1ZSk7XG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoe1xuICAgICAgYWN0aXZlOiAndGl0bGUnLFxuICAgICAgdXJsLFxuICAgICAgdGl0bGU6IHZhbHVlLFxuICAgICAgbGlzdDogdGhpcy5fY2FjaGVkXG4gICAgfSk7XG4gIH1cbiAgLyoqIOiOt+WPluaMh+Wumui3r+W+hOe8k+WtmOaJgOWcqOS9jee9ru+8jGAtMWAg6KGo56S65peg57yT5a2YICovXG4gIGluZGV4KHVybDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVkLmZpbmRJbmRleCh3ID0+IHcudXJsID09PSB1cmwpO1xuICB9XG4gIC8qKiDojrflj5bmjIflrprot6/lvoTnvJPlrZjmmK/lkKblrZjlnKggKi9cbiAgZXhpc3RzKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXgodXJsKSAhPT0gLTE7XG4gIH1cbiAgLyoqIOiOt+WPluaMh+Wumui3r+W+hOe8k+WtmCAqL1xuICBnZXQodXJsPzogc3RyaW5nKTogUmV1c2VUYWJDYWNoZWQgfCBudWxsIHtcbiAgICByZXR1cm4gdXJsID8gdGhpcy5fY2FjaGVkLmZpbmQodyA9PiB3LnVybCA9PT0gdXJsKSB8fCBudWxsIDogbnVsbDtcbiAgfVxuICBwcml2YXRlIHJlbW92ZSh1cmw6IHN0cmluZyB8IG51bWJlciwgaW5jbHVkZU5vbkNsb3NlYWJsZTogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlkeCA9IHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnID8gdGhpcy5pbmRleCh1cmwpIDogdXJsO1xuICAgIGNvbnN0IGl0ZW0gPSBpZHggIT09IC0xID8gdGhpcy5fY2FjaGVkW2lkeF0gOiBudWxsO1xuICAgIGlmICghaXRlbSB8fCAoIWluY2x1ZGVOb25DbG9zZWFibGUgJiYgIWl0ZW0uY2xvc2FibGUpKSByZXR1cm4gZmFsc2U7XG5cbiAgICB0aGlzLmRlc3Ryb3koaXRlbS5faGFuZGxlKTtcblxuICAgIHRoaXMuX2NhY2hlZC5zcGxpY2UoaWR4LCAxKTtcbiAgICBkZWxldGUgdGhpcy5fdGl0bGVDYWNoZWRbdXJsXTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICog5qC55o2uVVJM56e76Zmk5qCH562+XG4gICAqXG4gICAqIEBwYXJhbSBbaW5jbHVkZU5vbkNsb3NlYWJsZT1mYWxzZV0g5piv5ZCm5by65Yi25YyF5ZCr5LiN5Y+v5YWz6ZetXG4gICAqL1xuICBjbG9zZSh1cmw6IHN0cmluZywgaW5jbHVkZU5vbkNsb3NlYWJsZTogYm9vbGVhbiA9IGZhbHNlKTogYm9vbGVhbiB7XG4gICAgdGhpcy5yZW1vdmVVcmxCdWZmZXIgPSB1cmw7XG5cbiAgICB0aGlzLnJlbW92ZSh1cmwsIGluY2x1ZGVOb25DbG9zZWFibGUpO1xuXG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoeyBhY3RpdmU6ICdjbG9zZScsIHVybCwgbGlzdDogdGhpcy5fY2FjaGVkIH0pO1xuXG4gICAgdGhpcy5kaSgnY2xvc2UgdGFnJywgdXJsKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICog5riF6Zmk5Y+z6L65XG4gICAqXG4gICAqIEBwYXJhbSBbaW5jbHVkZU5vbkNsb3NlYWJsZT1mYWxzZV0g5piv5ZCm5by65Yi25YyF5ZCr5LiN5Y+v5YWz6ZetXG4gICAqL1xuICBjbG9zZVJpZ2h0KHVybDogc3RyaW5nLCBpbmNsdWRlTm9uQ2xvc2VhYmxlOiBib29sZWFuID0gZmFsc2UpOiBib29sZWFuIHtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuaW5kZXgodXJsKTtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jb3VudCAtIDE7IGkgPiBzdGFydDsgaS0tKSB7XG4gICAgICB0aGlzLnJlbW92ZShpLCBpbmNsdWRlTm9uQ2xvc2VhYmxlKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbW92ZVVybEJ1ZmZlciA9IG51bGw7XG5cbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7IGFjdGl2ZTogJ2Nsb3NlUmlnaHQnLCB1cmwsIGxpc3Q6IHRoaXMuX2NhY2hlZCB9KTtcblxuICAgIHRoaXMuZGkoJ2Nsb3NlIHJpZ2h0IHRhZ2VzJywgdXJsKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICog5riF6Zmk5omA5pyJ57yT5a2YXG4gICAqXG4gICAqIEBwYXJhbSBbaW5jbHVkZU5vbkNsb3NlYWJsZT1mYWxzZV0g5piv5ZCm5by65Yi25YyF5ZCr5LiN5Y+v5YWz6ZetXG4gICAqL1xuICBjbGVhcihpbmNsdWRlTm9uQ2xvc2VhYmxlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICB0aGlzLl9jYWNoZWQuZm9yRWFjaCh3ID0+IHtcbiAgICAgIGlmICghaW5jbHVkZU5vbkNsb3NlYWJsZSAmJiB3LmNsb3NhYmxlKSB0aGlzLmRlc3Ryb3kody5faGFuZGxlKTtcbiAgICB9KTtcbiAgICB0aGlzLl9jYWNoZWQgPSB0aGlzLl9jYWNoZWQuZmlsdGVyKHcgPT4gIWluY2x1ZGVOb25DbG9zZWFibGUgJiYgIXcuY2xvc2FibGUpO1xuXG4gICAgdGhpcy5yZW1vdmVVcmxCdWZmZXIgPSBudWxsO1xuXG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoeyBhY3RpdmU6ICdjbGVhcicsIGxpc3Q6IHRoaXMuX2NhY2hlZCB9KTtcblxuICAgIHRoaXMuZGkoJ2NsZWFyIGFsbCBjYXRjaCcpO1xuICB9XG4gIC8qKlxuICAgKiDnp7vliqjnvJPlrZjmlbDmja5cbiAgICpcbiAgICogQHBhcmFtIHVybCDopoHnp7vliqjnmoRVUkzlnLDlnYBcbiAgICogQHBhcmFtIHBvc2l0aW9uIOaWsOS9jee9ru+8jOS4i+agh+S7jiBgMGAg5byA5aeLXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYFxuICAgKiAvLyBzb3VyY2VcbiAgICogWyAnL2EvMScsICcvYS8yJywgJy9hLzMnLCAnL2EvNCcsICcvYS81JyBdXG4gICAqIG1vdmUoJy9hLzEnLCAyKTtcbiAgICogLy8gb3V0cHV0XG4gICAqIFsgJy9hLzInLCAnL2EvMycsICcvYS8xJywgJy9hLzQnLCAnL2EvNScgXVxuICAgKiBtb3ZlKCcvYS8xJywgLTEpO1xuICAgKiAvLyBvdXRwdXRcbiAgICogWyAnL2EvMicsICcvYS8zJywgJy9hLzQnLCAnL2EvNScsICcvYS8xJyBdXG4gICAqIGBgYFxuICAgKi9cbiAgbW92ZSh1cmw6IHN0cmluZywgcG9zaXRpb246IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5fY2FjaGVkLmZpbmRJbmRleCh3ID0+IHcudXJsID09PSB1cmwpO1xuICAgIGlmIChzdGFydCA9PT0gLTEpIHJldHVybjtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5fY2FjaGVkLnNsaWNlKCk7XG4gICAgZGF0YS5zcGxpY2UocG9zaXRpb24gPCAwID8gZGF0YS5sZW5ndGggKyBwb3NpdGlvbiA6IHBvc2l0aW9uLCAwLCBkYXRhLnNwbGljZShzdGFydCwgMSlbMF0pO1xuICAgIHRoaXMuX2NhY2hlZCA9IGRhdGE7XG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoe1xuICAgICAgYWN0aXZlOiAnbW92ZScsXG4gICAgICB1cmwsXG4gICAgICBwb3NpdGlvbixcbiAgICAgIGxpc3Q6IHRoaXMuX2NhY2hlZFxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiDlvLrliLblhbPpl63lvZPliY3ot6/nlLHvvIjljIXlkKvkuI3lj6/lhbPpl63nirbmgIHvvInvvIzlubbph43mlrDlr7zoiKroh7MgYG5ld1VybGAg6Lev55SxXG4gICAqL1xuICByZXBsYWNlKG5ld1VybDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5jdXJVcmw7XG4gICAgaWYgKHRoaXMuZXhpc3RzKHVybCkpIHtcbiAgICAgIHRoaXMuY2xvc2UodXJsLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVVcmxCdWZmZXIgPSB1cmw7XG4gICAgfVxuICAgIHRoaXMuaW5qZWN0b3IuZ2V0PFJvdXRlcj4oUm91dGVyKS5uYXZpZ2F0ZUJ5VXJsKG5ld1VybCk7XG4gIH1cbiAgLyoqXG4gICAqIOiOt+WPluagh+mimO+8jOmhuuW6j+WmguS4i++8mlxuICAgKlxuICAgKiAxLiDnu4Tku7blhoXkvb/nlKggYFJldXNlVGFiU2VydmljZS50aXRsZSA9ICduZXcgdGl0bGUnYCDph43mlrDmjIflrprmlofmnKxcbiAgICogMi4g6Lev55Sx6YWN572u5LitIGRhdGEg5bGe5oCn5Lit5YyF5ZCrIHRpdGxlSTE4biA+IHRpdGxlXG4gICAqIDMuIOiPnOWNleaVsOaNruS4rSB0ZXh0IOWxnuaAp1xuICAgKlxuICAgKiBAcGFyYW0gdXJsIOaMh+WumlVSTFxuICAgKiBAcGFyYW0gcm91dGUg5oyH5a6a6Lev55Sx5b+r54WnXG4gICAqL1xuICBnZXRUaXRsZSh1cmw6IHN0cmluZywgcm91dGU/OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogUmV1c2VUaXRsZSB7XG4gICAgaWYgKHRoaXMuX3RpdGxlQ2FjaGVkW3VybF0pIHtcbiAgICAgIHJldHVybiB0aGlzLl90aXRsZUNhY2hlZFt1cmxdO1xuICAgIH1cblxuICAgIGlmIChyb3V0ZSAmJiByb3V0ZS5kYXRhICYmIChyb3V0ZS5kYXRhLnRpdGxlSTE4biB8fCByb3V0ZS5kYXRhLnRpdGxlKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dDogcm91dGUuZGF0YS50aXRsZSxcbiAgICAgICAgaTE4bjogcm91dGUuZGF0YS50aXRsZUkxOG5cbiAgICAgIH0gYXMgUmV1c2VUaXRsZTtcbiAgICB9XG5cbiAgICBjb25zdCBtZW51ID0gdGhpcy5nZXRNZW51KHVybCk7XG4gICAgcmV0dXJuIG1lbnUgPyB7IHRleHQ6IG1lbnUudGV4dCwgaTE4bjogbWVudS5pMThuIH0gOiB7IHRleHQ6IHVybCB9O1xuICB9XG5cbiAgLyoqXG4gICAqIOa4hemZpOagh+mimOe8k+WtmFxuICAgKi9cbiAgY2xlYXJUaXRsZUNhY2hlZCgpOiB2b2lkIHtcbiAgICB0aGlzLl90aXRsZUNhY2hlZCA9IHt9O1xuICB9XG4gIC8qKiDoh6rlrprkuYnlvZPliY0gYGNsb3NhYmxlYCDnirbmgIEgKi9cbiAgc2V0IGNsb3NhYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5jdXJVcmw7XG4gICAgdGhpcy5fY2xvc2FibGVDYWNoZWRbdXJsXSA9IHZhbHVlO1xuICAgIHRoaXMuZGkoJ3VwZGF0ZSBjdXJyZW50IHRhZyBjbG9zYWJsZTogJywgdmFsdWUpO1xuICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHtcbiAgICAgIGFjdGl2ZTogJ2Nsb3NhYmxlJyxcbiAgICAgIGNsb3NhYmxlOiB2YWx1ZSxcbiAgICAgIGxpc3Q6IHRoaXMuX2NhY2hlZFxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiDojrflj5YgYGNsb3NhYmxlYCDnirbmgIHvvIzpobrluo/lpoLkuIvvvJpcbiAgICpcbiAgICogMS4g57uE5Lu25YaF5L2/55SoIGBSZXVzZVRhYlNlcnZpY2UuY2xvc2FibGUgPSB0cnVlYCDph43mlrDmjIflrpogYGNsb3NhYmxlYCDnirbmgIFcbiAgICogMi4g6Lev55Sx6YWN572u5LitIGRhdGEg5bGe5oCn5Lit5YyF5ZCrIGByZXVzZUNsb3NhYmxlYFxuICAgKiAzLiDoj5zljZXmlbDmja7kuK0gYHJldXNlQ2xvc2FibGVgIOWxnuaAp1xuICAgKlxuICAgKiBAcGFyYW0gdXJsIOaMh+WumlVSTFxuICAgKiBAcGFyYW0gcm91dGUg5oyH5a6a6Lev55Sx5b+r54WnXG4gICAqL1xuICBnZXRDbG9zYWJsZSh1cmw6IHN0cmluZywgcm91dGU/OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLl9jbG9zYWJsZUNhY2hlZFt1cmxdICE9PSAndW5kZWZpbmVkJykgcmV0dXJuIHRoaXMuX2Nsb3NhYmxlQ2FjaGVkW3VybF07XG5cbiAgICBpZiAocm91dGUgJiYgcm91dGUuZGF0YSAmJiB0eXBlb2Ygcm91dGUuZGF0YS5yZXVzZUNsb3NhYmxlID09PSAnYm9vbGVhbicpIHJldHVybiByb3V0ZS5kYXRhLnJldXNlQ2xvc2FibGU7XG5cbiAgICBjb25zdCBtZW51ID0gdGhpcy5tb2RlICE9PSBSZXVzZVRhYk1hdGNoTW9kZS5VUkwgPyB0aGlzLmdldE1lbnUodXJsKSA6IG51bGw7XG4gICAgaWYgKG1lbnUgJiYgdHlwZW9mIG1lbnUucmV1c2VDbG9zYWJsZSA9PT0gJ2Jvb2xlYW4nKSByZXR1cm4gbWVudS5yZXVzZUNsb3NhYmxlO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIOa4heepuiBgY2xvc2FibGVgIOe8k+WtmFxuICAgKi9cbiAgY2xlYXJDbG9zYWJsZUNhY2hlZCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jbG9zYWJsZUNhY2hlZCA9IHt9O1xuICB9XG4gIGdldFRydXRoUm91dGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IHtcbiAgICBsZXQgbmV4dCA9IHJvdXRlO1xuICAgIHdoaWxlIChuZXh0LmZpcnN0Q2hpbGQpIG5leHQgPSBuZXh0LmZpcnN0Q2hpbGQ7XG4gICAgcmV0dXJuIG5leHQ7XG4gIH1cbiAgLyoqXG4gICAqIOagueaNruW/q+eFp+iOt+WPllVSTOWcsOWdgFxuICAgKi9cbiAgZ2V0VXJsKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogc3RyaW5nIHtcbiAgICBsZXQgbmV4dCA9IHRoaXMuZ2V0VHJ1dGhSb3V0ZShyb3V0ZSk7XG4gICAgY29uc3Qgc2VnbWVudHM6IHN0cmluZ1tdID0gW107XG4gICAgd2hpbGUgKG5leHQpIHtcbiAgICAgIHNlZ21lbnRzLnB1c2gobmV4dC51cmwuam9pbignLycpKTtcbiAgICAgIG5leHQgPSBuZXh0LnBhcmVudCE7XG4gICAgfVxuICAgIGNvbnN0IHVybCA9IGAvJHtzZWdtZW50c1xuICAgICAgLmZpbHRlcihpID0+IGkpXG4gICAgICAucmV2ZXJzZSgpXG4gICAgICAuam9pbignLycpfWA7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICAvKipcbiAgICog5qOA5p+l5b+r54Wn5piv5ZCm5YWB6K646KKr5aSN55SoXG4gICAqL1xuICBjYW4ocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVybChyb3V0ZSk7XG4gICAgaWYgKHVybCA9PT0gdGhpcy5yZW1vdmVVcmxCdWZmZXIpIHJldHVybiBmYWxzZTtcblxuICAgIGlmIChyb3V0ZS5kYXRhICYmIHR5cGVvZiByb3V0ZS5kYXRhLnJldXNlID09PSAnYm9vbGVhbicpIHJldHVybiByb3V0ZS5kYXRhLnJldXNlO1xuXG4gICAgaWYgKHRoaXMubW9kZSAhPT0gUmV1c2VUYWJNYXRjaE1vZGUuVVJMKSB7XG4gICAgICBjb25zdCBtZW51ID0gdGhpcy5nZXRNZW51KHVybCk7XG4gICAgICBpZiAoIW1lbnUpIHJldHVybiBmYWxzZTtcbiAgICAgIGlmICh0aGlzLm1vZGUgPT09IFJldXNlVGFiTWF0Y2hNb2RlLk1lbnUpIHtcbiAgICAgICAgaWYgKG1lbnUucmV1c2UgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIW1lbnUucmV1c2UgfHwgbWVudS5yZXVzZSAhPT0gdHJ1ZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiAhdGhpcy5pc0V4Y2x1ZGUodXJsKTtcbiAgfVxuXG4gIGlzRXhjbHVkZSh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmV4Y2x1ZGVzLmZpbmRJbmRleChyID0+IHIudGVzdCh1cmwpKSAhPT0gLTE7XG4gIH1cblxuICAvKipcbiAgICog5Yi35paw77yM6Kem5Y+R5LiA5LiqIHJlZnJlc2gg57G75Z6L5LqL5Lu2XG4gICAqL1xuICByZWZyZXNoKGRhdGE/OiBOelNhZmVBbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7IGFjdGl2ZTogJ3JlZnJlc2gnLCBkYXRhIH0pO1xuICB9XG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHByaXZhdGVzXG5cbiAgcHJpdmF0ZSBkZXN0cm95KF9oYW5kbGU6IE56U2FmZUFueSk6IHZvaWQge1xuICAgIGlmIChfaGFuZGxlICYmIF9oYW5kbGUuY29tcG9uZW50UmVmICYmIF9oYW5kbGUuY29tcG9uZW50UmVmLmRlc3Ryb3kpIF9oYW5kbGUuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgfVxuXG4gIHByaXZhdGUgZGkoLi4uYXJnczogTnpTYWZlQW55W10pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZGVidWcpIHJldHVybjtcbiAgICBpZiAodHlwZW9mIG5nRGV2TW9kZSA9PT0gJ3VuZGVmaW5lZCcgfHwgbmdEZXZNb2RlKSB7XG4gICAgICBjb25zb2xlLndhcm4oLi4uYXJncyk7XG4gICAgfVxuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLCBwcml2YXRlIG1lbnVTZXJ2aWNlOiBNZW51U2VydmljZSkge31cblxuICBpbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdFNjcm9sbCgpO1xuICAgIHRoaXMuX2luaXRlZCA9IHRydWU7XG4gIH1cblxuICBwcml2YXRlIGdldE1lbnUodXJsOiBzdHJpbmcpOiBNZW51IHwgbnVsbCB8IHVuZGVmaW5lZCB7XG4gICAgY29uc3QgbWVudXMgPSB0aGlzLm1lbnVTZXJ2aWNlLmdldFBhdGhCeVVybCh1cmwpO1xuICAgIGlmICghbWVudXMgfHwgbWVudXMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gbWVudXMucG9wKCk7XG4gIH1cblxuICBydW5Ib29rKFxuICAgIG1ldGhvZDogUmV1c2VIb29rVHlwZXMsXG4gICAgY29tcDogUmV1c2VDb21wb25lbnRSZWYgfCBudW1iZXIgfCB1bmRlZmluZWQsXG4gICAgdHlwZTogUmV1c2VIb29rT25SZXVzZUluaXRUeXBlID0gJ2luaXQnXG4gICk6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgY29tcCA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLl9jYWNoZWRbY29tcF07XG4gICAgICBjb21wID0gaXRlbS5faGFuZGxlLmNvbXBvbmVudFJlZjtcbiAgICB9XG4gICAgaWYgKGNvbXAgPT0gbnVsbCB8fCAhY29tcC5pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjb21wVGhpcyA9IGNvbXAuaW5zdGFuY2U7XG4gICAgY29uc3QgZm4gPSBjb21wVGhpc1ttZXRob2RdO1xuICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG1ldGhvZCA9PT0gJ19vblJldXNlSW5pdCcpIHtcbiAgICAgIGZuLmNhbGwoY29tcFRoaXMsIHR5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAoZm4gYXMgKCkgPT4gdm9pZCkuY2FsbChjb21wVGhpcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYXNJblZhbGlkUm91dGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXJvdXRlLnJvdXRlQ29uZmlnIHx8ICEhcm91dGUucm91dGVDb25maWcubG9hZENoaWxkcmVuIHx8ICEhcm91dGUucm91dGVDb25maWcuY2hpbGRyZW47XG4gIH1cblxuICAvKipcbiAgICog5Yaz5a6a5piv5ZCm5YWB6K646Lev55Sx5aSN55So77yM6IulIGB0cnVlYCDkvJrop6blj5EgYHN0b3JlYFxuICAgKi9cbiAgc2hvdWxkRGV0YWNoKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaGFzSW5WYWxpZFJvdXRlKHJvdXRlKSkgcmV0dXJuIGZhbHNlO1xuICAgIHRoaXMuZGkoJyNzaG91bGREZXRhY2gnLCB0aGlzLmNhbihyb3V0ZSksIHRoaXMuZ2V0VXJsKHJvdXRlKSk7XG4gICAgcmV0dXJuIHRoaXMuY2FuKHJvdXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlrZjlgqhcbiAgICovXG4gIHN0b3JlKF9zbmFwc2hvdDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgX2hhbmRsZTogTnpTYWZlQW55KTogdm9pZCB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRVcmwoX3NuYXBzaG90KTtcbiAgICBjb25zdCBpZHggPSB0aGlzLmluZGV4KHVybCk7XG4gICAgY29uc3QgaXNBZGQgPSBpZHggPT09IC0xO1xuXG4gICAgY29uc3QgaXRlbTogUmV1c2VUYWJDYWNoZWQgPSB7XG4gICAgICB0aXRsZTogdGhpcy5nZXRUaXRsZSh1cmwsIF9zbmFwc2hvdCksXG4gICAgICBjbG9zYWJsZTogdGhpcy5nZXRDbG9zYWJsZSh1cmwsIF9zbmFwc2hvdCksXG4gICAgICBwb3NpdGlvbjogdGhpcy5nZXRLZWVwaW5nU2Nyb2xsKHVybCwgX3NuYXBzaG90KSA/IHRoaXMucG9zaXRpb25CdWZmZXJbdXJsXSA6IG51bGwsXG4gICAgICB1cmwsXG4gICAgICBfc25hcHNob3QsXG4gICAgICBfaGFuZGxlXG4gICAgfTtcbiAgICBpZiAoaXNBZGQpIHtcbiAgICAgIGlmICh0aGlzLmNvdW50ID49IHRoaXMuX21heCkge1xuICAgICAgICAvLyBHZXQgdGhlIG9sZGVzdCBjbG9zYWJsZSBsb2NhdGlvblxuICAgICAgICBjb25zdCBjbG9zZUlkeCA9IHRoaXMuX2NhY2hlZC5maW5kSW5kZXgodyA9PiB3LmNsb3NhYmxlISk7XG4gICAgICAgIGlmIChjbG9zZUlkeCAhPT0gLTEpIHRoaXMucmVtb3ZlKGNsb3NlSWR4LCBmYWxzZSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9jYWNoZWQucHVzaChpdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ3VycmVudCBoYW5kbGVyIGlzIG51bGwgd2hlbiBhY3RpdmF0ZSByb3V0ZXNcbiAgICAgIC8vIEZvciBiZXR0ZXIgcmVsaWFiaWxpdHksIHdlIG5lZWQgdG8gd2FpdCBmb3IgdGhlIGNvbXBvbmVudCB0byBiZSBhdHRhY2hlZCBiZWZvcmUgY2FsbCBfb25SZXVzZUluaXRcbiAgICAgIGNvbnN0IGNhaGNlZENvbXBvbmVudFJlZiA9IHRoaXMuX2NhY2hlZFtpZHhdLl9oYW5kbGU/LmNvbXBvbmVudFJlZjtcbiAgICAgIGlmIChfaGFuZGxlID09IG51bGwgJiYgY2FoY2VkQ29tcG9uZW50UmVmICE9IG51bGwpIHtcbiAgICAgICAgdGltZXIoMTAwKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5ydW5Ib29rKCdfb25SZXVzZUluaXQnLCBjYWhjZWRDb21wb25lbnRSZWYpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NhY2hlZFtpZHhdID0gaXRlbTtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVVcmxCdWZmZXIgPSBudWxsO1xuXG4gICAgdGhpcy5kaSgnI3N0b3JlJywgaXNBZGQgPyAnW25ld10nIDogJ1tvdmVycmlkZV0nLCB1cmwpO1xuXG4gICAgaWYgKF9oYW5kbGUgJiYgX2hhbmRsZS5jb21wb25lbnRSZWYpIHtcbiAgICAgIHRoaXMucnVuSG9vaygnX29uUmV1c2VEZXN0cm95JywgX2hhbmRsZS5jb21wb25lbnRSZWYpO1xuICAgIH1cblxuICAgIGlmICghaXNBZGQpIHtcbiAgICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHsgYWN0aXZlOiAnb3ZlcnJpZGUnLCBpdGVtLCBsaXN0OiB0aGlzLl9jYWNoZWQgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOWGs+WumuaYr+WQpuWFgeiuuOW6lOeUqOe8k+WtmOaVsOaNrlxuICAgKi9cbiAgc2hvdWxkQXR0YWNoKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaGFzSW5WYWxpZFJvdXRlKHJvdXRlKSkgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXJsKHJvdXRlKTtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5nZXQodXJsKTtcbiAgICBjb25zdCByZXQgPSAhIShkYXRhICYmIGRhdGEuX2hhbmRsZSk7XG4gICAgdGhpcy5kaSgnI3Nob3VsZEF0dGFjaCcsIHJldCwgdXJsKTtcbiAgICBpZiAoIXJldCkge1xuICAgICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoeyBhY3RpdmU6ICdhZGQnLCB1cmwsIGxpc3Q6IHRoaXMuX2NhY2hlZCB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiDmj5Dlj5blpI3nlKjmlbDmja5cbiAgICovXG4gIHJldHJpZXZlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogTnpTYWZlQW55IHwgbnVsbCB7XG4gICAgaWYgKHRoaXMuaGFzSW5WYWxpZFJvdXRlKHJvdXRlKSkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRVcmwocm91dGUpO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldCh1cmwpO1xuICAgIGNvbnN0IHJldCA9IChkYXRhICYmIGRhdGEuX2hhbmRsZSkgfHwgbnVsbDtcbiAgICB0aGlzLmRpKCcjcmV0cmlldmUnLCB1cmwsIHJldCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiDlhrPlrprmmK/lkKblupTor6Xov5vooYzlpI3nlKjot6/nlLHlpITnkIZcbiAgICovXG4gIHNob3VsZFJldXNlUm91dGUoZnV0dXJlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBjdXJyOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgbGV0IHJldCA9IGZ1dHVyZS5yb3V0ZUNvbmZpZyA9PT0gY3Vyci5yb3V0ZUNvbmZpZztcbiAgICBpZiAoIXJldCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgcGF0aCA9ICgoZnV0dXJlLnJvdXRlQ29uZmlnICYmIGZ1dHVyZS5yb3V0ZUNvbmZpZy5wYXRoKSB8fCAnJykgYXMgc3RyaW5nO1xuICAgIGlmIChwYXRoLmxlbmd0aCA+IDAgJiYgfnBhdGguaW5kZXhPZignOicpKSB7XG4gICAgICBpZiAodGhpcy5yb3V0ZVBhcmFtTWF0Y2hNb2RlID09PSAnc3RyaWN0Jykge1xuICAgICAgICByZXQgPSB0aGlzLmdldFVybChmdXR1cmUpID09PSB0aGlzLmdldFVybChjdXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldCA9IHBhdGggPT09ICgoY3Vyci5yb3V0ZUNvbmZpZyAmJiBjdXJyLnJvdXRlQ29uZmlnLnBhdGgpIHx8ICcnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5kaSgnPT09PT09PT09PT09PT09PT09PT09Jyk7XG4gICAgdGhpcy5kaSgnI3Nob3VsZFJldXNlUm91dGUnLCByZXQsIGAke3RoaXMuZ2V0VXJsKGN1cnIpfT0+JHt0aGlzLmdldFVybChmdXR1cmUpfWAsIGZ1dHVyZSwgY3Vycik7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vICNyZWdpb24gc2Nyb2xsXG5cbiAgLyoqXG4gICAqIOiOt+WPliBga2VlcGluZ1Njcm9sbGAg54q25oCB77yM6aG65bqP5aaC5LiL77yaXG4gICAqXG4gICAqIDEuIOi3r+eUsemFjee9ruS4rSBkYXRhIOWxnuaAp+S4reWMheWQqyBga2VlcGluZ1Njcm9sbGBcbiAgICogMi4g6I+c5Y2V5pWw5o2u5LitIGBrZWVwaW5nU2Nyb2xsYCDlsZ7mgKdcbiAgICogMy4g57uE5Lu2IGBrZWVwaW5nU2Nyb2xsYCDlgLxcbiAgICovXG4gIGdldEtlZXBpbmdTY3JvbGwodXJsOiBzdHJpbmcsIHJvdXRlPzogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIGlmIChyb3V0ZSAmJiByb3V0ZS5kYXRhICYmIHR5cGVvZiByb3V0ZS5kYXRhLmtlZXBpbmdTY3JvbGwgPT09ICdib29sZWFuJykgcmV0dXJuIHJvdXRlLmRhdGEua2VlcGluZ1Njcm9sbDtcblxuICAgIGNvbnN0IG1lbnUgPSB0aGlzLm1vZGUgIT09IFJldXNlVGFiTWF0Y2hNb2RlLlVSTCA/IHRoaXMuZ2V0TWVudSh1cmwpIDogbnVsbDtcbiAgICBpZiAobWVudSAmJiB0eXBlb2YgbWVudS5rZWVwaW5nU2Nyb2xsID09PSAnYm9vbGVhbicpIHJldHVybiBtZW51LmtlZXBpbmdTY3JvbGw7XG5cbiAgICByZXR1cm4gdGhpcy5rZWVwaW5nU2Nyb2xsO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgaXNEaXNhYmxlZEluUm91dGVyKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJvdXRlckNvbmZpZyA9IHRoaXMuaW5qZWN0b3IuZ2V0PEV4dHJhT3B0aW9ucz4oUk9VVEVSX0NPTkZJR1VSQVRJT04sIHt9IGFzIE56U2FmZUFueSk7XG4gICAgcmV0dXJuIHJvdXRlckNvbmZpZy5zY3JvbGxQb3NpdGlvblJlc3RvcmF0aW9uID09PSAnZGlzYWJsZWQnO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgc3MoKTogU2Nyb2xsU2VydmljZSB7XG4gICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0KFNjcm9sbFNlcnZpY2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0U2Nyb2xsKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9yb3V0ZXIkKSB7XG4gICAgICB0aGlzLl9yb3V0ZXIkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fcm91dGVyJCA9IHRoaXMuaW5qZWN0b3IuZ2V0PFJvdXRlcj4oUm91dGVyKS5ldmVudHMuc3Vic2NyaWJlKGUgPT4ge1xuICAgICAgaWYgKGUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQpIHtcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5jdXJVcmw7XG4gICAgICAgIGlmICh0aGlzLmdldEtlZXBpbmdTY3JvbGwodXJsLCB0aGlzLmdldFRydXRoUm91dGUodGhpcy5zbmFwc2hvdCkpKSB7XG4gICAgICAgICAgdGhpcy5wb3NpdGlvbkJ1ZmZlclt1cmxdID0gdGhpcy5zcy5nZXRTY3JvbGxQb3NpdGlvbih0aGlzLmtlZXBpbmdTY3JvbGxDb250YWluZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLnBvc2l0aW9uQnVmZmVyW3VybF07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5jdXJVcmw7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmdldCh1cmwpO1xuICAgICAgICBpZiAoaXRlbSAmJiBpdGVtLnBvc2l0aW9uICYmIHRoaXMuZ2V0S2VlcGluZ1Njcm9sbCh1cmwsIHRoaXMuZ2V0VHJ1dGhSb3V0ZSh0aGlzLnNuYXBzaG90KSkpIHtcbiAgICAgICAgICBpZiAodGhpcy5pc0Rpc2FibGVkSW5Sb3V0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc3Muc2Nyb2xsVG9Qb3NpdGlvbih0aGlzLmtlZXBpbmdTY3JvbGxDb250YWluZXIsIGl0ZW0ucG9zaXRpb24pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc3Muc2Nyb2xsVG9Qb3NpdGlvbih0aGlzLmtlZXBpbmdTY3JvbGxDb250YWluZXIsIGl0ZW0ucG9zaXRpb24hKSwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgY29uc3QgeyBfY2FjaGVkQ2hhbmdlLCBfcm91dGVyJCB9ID0gdGhpcztcbiAgICB0aGlzLmNsZWFyKCk7XG4gICAgdGhpcy5fY2FjaGVkID0gW107XG4gICAgX2NhY2hlZENoYW5nZS5jb21wbGV0ZSgpO1xuXG4gICAgaWYgKF9yb3V0ZXIkKSB7XG4gICAgICBfcm91dGVyJC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19