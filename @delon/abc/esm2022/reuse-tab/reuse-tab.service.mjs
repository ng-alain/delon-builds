import { Inject, Injectable, Optional } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router, ROUTER_CONFIGURATION } from '@angular/router';
import { BehaviorSubject, timer } from 'rxjs';
import { ScrollService } from '@delon/util/browser';
import { ReuseTabMatchMode } from './reuse-tab.interfaces';
import { REUSE_TAB_STORAGE_KEY, REUSE_TAB_STORAGE_STATE } from './reuse-tab.state';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
class ReuseTabService {
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
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!this.debug)
                return;
            console.warn(...args);
        }
    }
    // #endregion
    constructor(injector, menuService, stateKey, stateSrv) {
        this.injector = injector;
        this.menuService = menuService;
        this.stateKey = stateKey;
        this.stateSrv = stateSrv;
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
        this.storageState = false;
    }
    init() {
        this.initScroll();
        this._inited = true;
        this.loadState();
    }
    loadState() {
        if (!this.storageState)
            return;
        this._cached = this.stateSrv.get(this.stateKey).map(v => ({
            title: { text: v.title },
            url: v.url,
            position: v.position
        }));
        this._cachedChange.next({ active: 'loadState' });
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
            comp = item._handle?.componentRef;
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: ReuseTabService, deps: [{ token: i0.Injector }, { token: i1.MenuService }, { token: REUSE_TAB_STORAGE_KEY, optional: true }, { token: REUSE_TAB_STORAGE_STATE, optional: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: ReuseTabService, providedIn: 'root' }); }
}
export { ReuseTabService };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: ReuseTabService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.MenuService }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [REUSE_TAB_STORAGE_KEY]
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [REUSE_TAB_STORAGE_STATE]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvcmV1c2UtdGFiL3JldXNlLXRhYi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUNMLGNBQWMsRUFHZCxhQUFhLEVBQ2IsZUFBZSxFQUNmLE1BQU0sRUFDTixvQkFBb0IsRUFDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsZUFBZSxFQUFjLEtBQUssRUFBa0IsTUFBTSxNQUFNLENBQUM7QUFHMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBR3BELE9BQU8sRUFLTCxpQkFBaUIsRUFJbEIsTUFBTSx3QkFBd0IsQ0FBQztBQUNoQyxPQUFPLEVBQXdCLHFCQUFxQixFQUFFLHVCQUF1QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7OztBQUV6RyxNQUNhLGVBQWU7SUFtQjFCLElBQVksUUFBUTtRQUNsQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUNwRCxDQUFDO0lBRUQsaUJBQWlCO0lBRWpCOzs7O09BSUc7SUFDSCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7T0FFRztJQUNILElBQUksR0FBRyxDQUFDLEtBQWE7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFF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QUFJLE1BQU07MkJBQUMsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciwgT25EZXN0cm95LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWN0aXZhdGVkUm91dGUsXG4gIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gIEV4dHJhT3B0aW9ucyxcbiAgTmF2aWdhdGlvbkVuZCxcbiAgTmF2aWdhdGlvblN0YXJ0LFxuICBSb3V0ZXIsXG4gIFJPVVRFUl9DT05GSUdVUkFUSU9OXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIHRpbWVyLCBVbnN1YnNjcmliYWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBNZW51LCBNZW51U2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBTY3JvbGxTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvYnJvd3Nlcic7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7XG4gIFJldXNlQ29tcG9uZW50UmVmLFxuICBSZXVzZUhvb2tPblJldXNlSW5pdFR5cGUsXG4gIFJldXNlSG9va1R5cGVzLFxuICBSZXVzZVRhYkNhY2hlZCxcbiAgUmV1c2VUYWJNYXRjaE1vZGUsXG4gIFJldXNlVGFiTm90aWZ5LFxuICBSZXVzZVRhYlJvdXRlUGFyYW1NYXRjaE1vZGUsXG4gIFJldXNlVGl0bGVcbn0gZnJvbSAnLi9yZXVzZS10YWIuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBSZXVzZVRhYlN0b3JhZ2VTdGF0ZSwgUkVVU0VfVEFCX1NUT1JBR0VfS0VZLCBSRVVTRV9UQUJfU1RPUkFHRV9TVEFURSB9IGZyb20gJy4vcmV1c2UtdGFiLnN0YXRlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBSZXVzZVRhYlNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9pbml0ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbWF4ID0gMTA7XG4gIHByaXZhdGUgX2tlZXBpbmdTY3JvbGwgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY2FjaGVkQ2hhbmdlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxSZXVzZVRhYk5vdGlmeSB8IG51bGw+KG51bGwpO1xuICBwcml2YXRlIF9jYWNoZWQ6IFJldXNlVGFiQ2FjaGVkW10gPSBbXTtcbiAgcHJpdmF0ZSBfdGl0bGVDYWNoZWQ6IHsgW3VybDogc3RyaW5nXTogUmV1c2VUaXRsZSB9ID0ge307XG4gIHByaXZhdGUgX2Nsb3NhYmxlQ2FjaGVkOiB7IFt1cmw6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xuICBwcml2YXRlIF9yb3V0ZXIkPzogVW5zdWJzY3JpYmFibGU7XG4gIHByaXZhdGUgcmVtb3ZlVXJsQnVmZmVyOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBwb3NpdGlvbkJ1ZmZlcjogeyBbdXJsOiBzdHJpbmddOiBbbnVtYmVyLCBudW1iZXJdIH0gPSB7fTtcbiAgY29tcG9uZW50UmVmPzogUmV1c2VDb21wb25lbnRSZWY7XG4gIGRlYnVnID0gZmFsc2U7XG4gIHJvdXRlUGFyYW1NYXRjaE1vZGU6IFJldXNlVGFiUm91dGVQYXJhbU1hdGNoTW9kZSA9ICdzdHJpY3QnO1xuICBtb2RlID0gUmV1c2VUYWJNYXRjaE1vZGUuTWVudTtcbiAgLyoqIOaOkumZpOinhOWIme+8jOmZkCBgbW9kZT1VUkxgICovXG4gIGV4Y2x1ZGVzOiBSZWdFeHBbXSA9IFtdO1xuICBzdG9yYWdlU3RhdGUgPSBmYWxzZTtcblxuICBwcml2YXRlIGdldCBzbmFwc2hvdCgpOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IHtcbiAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQoQWN0aXZhdGVkUm91dGUpLnNuYXBzaG90O1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBwdWJsaWNcblxuICAvKipcbiAgICogR2V0IGluaXQgc3RhdHVzXG4gICAqXG4gICAqIOaYr+WQpuW3sue7j+WIneWni+WMluWujOaIkFxuICAgKi9cbiAgZ2V0IGluaXRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faW5pdGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEN1cnJlbnQgcm91dGluZyBhZGRyZXNzXG4gICAqXG4gICAqIOW9k+WJjei3r+eUseWcsOWdgFxuICAgKi9cbiAgZ2V0IGN1clVybCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmdldFVybCh0aGlzLnNuYXBzaG90KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlhYHorrjmnIDlpJrlpI3nlKjlpJrlsJHkuKrpobXpnaLvvIzlj5blgLzojIPlm7QgYDItMTAwYO+8jOWAvOWPkeeUn+WPmOabtOaXtuS8muW8uuWItuWFs+mXreS4lOW/veeVpeWPr+WFs+mXreadoeS7tlxuICAgKi9cbiAgc2V0IG1heCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4ID0gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIDIpLCAxMDApO1xuICAgIGZvciAobGV0IGkgPSB0aGlzLl9jYWNoZWQubGVuZ3RoOyBpID4gdGhpcy5fbWF4OyBpLS0pIHtcbiAgICAgIHRoaXMuX2NhY2hlZC5wb3AoKTtcbiAgICB9XG4gIH1cbiAgc2V0IGtlZXBpbmdTY3JvbGwodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9rZWVwaW5nU2Nyb2xsID0gdmFsdWU7XG4gICAgdGhpcy5pbml0U2Nyb2xsKCk7XG4gIH1cbiAgZ2V0IGtlZXBpbmdTY3JvbGwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2tlZXBpbmdTY3JvbGw7XG4gIH1cbiAga2VlcGluZ1Njcm9sbENvbnRhaW5lcj86IEVsZW1lbnQ7XG4gIC8qKiDojrflj5blt7LnvJPlrZjnmoTot6/nlLEgKi9cbiAgZ2V0IGl0ZW1zKCk6IFJldXNlVGFiQ2FjaGVkW10ge1xuICAgIHJldHVybiB0aGlzLl9jYWNoZWQ7XG4gIH1cbiAgLyoqIOiOt+WPluW9k+WJjee8k+WtmOeahOi3r+eUseaAu+aVsCAqL1xuICBnZXQgY291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVkLmxlbmd0aDtcbiAgfVxuICAvKiog6K6i6ZiF57yT5a2Y5Y+Y5pu06YCa55+lICovXG4gIGdldCBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxSZXVzZVRhYk5vdGlmeSB8IG51bGw+IHtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVkQ2hhbmdlLmFzT2JzZXJ2YWJsZSgpOyAvLyAucGlwZShmaWx0ZXIodyA9PiB3ICE9PSBudWxsKSk7XG4gIH1cbiAgLyoqIOiHquWumuS5ieW9k+WJjeagh+mimCAqL1xuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IFJldXNlVGl0bGUpIHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmN1clVybDtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykgdmFsdWUgPSB7IHRleHQ6IHZhbHVlIH07XG4gICAgdGhpcy5fdGl0bGVDYWNoZWRbdXJsXSA9IHZhbHVlO1xuICAgIHRoaXMuZGkoJ3VwZGF0ZSBjdXJyZW50IHRhZyB0aXRsZTogJywgdmFsdWUpO1xuICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHtcbiAgICAgIGFjdGl2ZTogJ3RpdGxlJyxcbiAgICAgIHVybCxcbiAgICAgIHRpdGxlOiB2YWx1ZSxcbiAgICAgIGxpc3Q6IHRoaXMuX2NhY2hlZFxuICAgIH0pO1xuICB9XG4gIC8qKiDojrflj5bmjIflrprot6/lvoTnvJPlrZjmiYDlnKjkvY3nva7vvIxgLTFgIOihqOekuuaXoOe8k+WtmCAqL1xuICBpbmRleCh1cmw6IHN0cmluZyk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZC5maW5kSW5kZXgodyA9PiB3LnVybCA9PT0gdXJsKTtcbiAgfVxuICAvKiog6I635Y+W5oyH5a6a6Lev5b6E57yT5a2Y5piv5ZCm5a2Y5ZyoICovXG4gIGV4aXN0cyh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmluZGV4KHVybCkgIT09IC0xO1xuICB9XG4gIC8qKiDojrflj5bmjIflrprot6/lvoTnvJPlrZggKi9cbiAgZ2V0KHVybD86IHN0cmluZyk6IFJldXNlVGFiQ2FjaGVkIHwgbnVsbCB7XG4gICAgcmV0dXJuIHVybCA/IHRoaXMuX2NhY2hlZC5maW5kKHcgPT4gdy51cmwgPT09IHVybCkgfHwgbnVsbCA6IG51bGw7XG4gIH1cbiAgcHJpdmF0ZSByZW1vdmUodXJsOiBzdHJpbmcgfCBudW1iZXIsIGluY2x1ZGVOb25DbG9zZWFibGU6IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICBjb25zdCBpZHggPSB0eXBlb2YgdXJsID09PSAnc3RyaW5nJyA/IHRoaXMuaW5kZXgodXJsKSA6IHVybDtcbiAgICBjb25zdCBpdGVtID0gaWR4ICE9PSAtMSA/IHRoaXMuX2NhY2hlZFtpZHhdIDogbnVsbDtcbiAgICBpZiAoIWl0ZW0gfHwgKCFpbmNsdWRlTm9uQ2xvc2VhYmxlICYmICFpdGVtLmNsb3NhYmxlKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgdGhpcy5kZXN0cm95KGl0ZW0uX2hhbmRsZSk7XG5cbiAgICB0aGlzLl9jYWNoZWQuc3BsaWNlKGlkeCwgMSk7XG4gICAgZGVsZXRlIHRoaXMuX3RpdGxlQ2FjaGVkW3VybF07XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIOagueaNrlVSTOenu+mZpOagh+etvlxuICAgKlxuICAgKiBAcGFyYW0gW2luY2x1ZGVOb25DbG9zZWFibGU9ZmFsc2VdIOaYr+WQpuW8uuWItuWMheWQq+S4jeWPr+WFs+mXrVxuICAgKi9cbiAgY2xvc2UodXJsOiBzdHJpbmcsIGluY2x1ZGVOb25DbG9zZWFibGU6IGJvb2xlYW4gPSBmYWxzZSk6IGJvb2xlYW4ge1xuICAgIHRoaXMucmVtb3ZlVXJsQnVmZmVyID0gdXJsO1xuXG4gICAgdGhpcy5yZW1vdmUodXJsLCBpbmNsdWRlTm9uQ2xvc2VhYmxlKTtcblxuICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHsgYWN0aXZlOiAnY2xvc2UnLCB1cmwsIGxpc3Q6IHRoaXMuX2NhY2hlZCB9KTtcblxuICAgIHRoaXMuZGkoJ2Nsb3NlIHRhZycsIHVybCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIOa4hemZpOWPs+i+uVxuICAgKlxuICAgKiBAcGFyYW0gW2luY2x1ZGVOb25DbG9zZWFibGU9ZmFsc2VdIOaYr+WQpuW8uuWItuWMheWQq+S4jeWPr+WFs+mXrVxuICAgKi9cbiAgY2xvc2VSaWdodCh1cmw6IHN0cmluZywgaW5jbHVkZU5vbkNsb3NlYWJsZTogYm9vbGVhbiA9IGZhbHNlKTogYm9vbGVhbiB7XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLmluZGV4KHVybCk7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY291bnQgLSAxOyBpID4gc3RhcnQ7IGktLSkge1xuICAgICAgdGhpcy5yZW1vdmUoaSwgaW5jbHVkZU5vbkNsb3NlYWJsZSk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW1vdmVVcmxCdWZmZXIgPSBudWxsO1xuXG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoeyBhY3RpdmU6ICdjbG9zZVJpZ2h0JywgdXJsLCBsaXN0OiB0aGlzLl9jYWNoZWQgfSk7XG5cbiAgICB0aGlzLmRpKCdjbG9zZSByaWdodCB0YWdlcycsIHVybCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIOa4hemZpOaJgOaciee8k+WtmFxuICAgKlxuICAgKiBAcGFyYW0gW2luY2x1ZGVOb25DbG9zZWFibGU9ZmFsc2VdIOaYr+WQpuW8uuWItuWMheWQq+S4jeWPr+WFs+mXrVxuICAgKi9cbiAgY2xlYXIoaW5jbHVkZU5vbkNsb3NlYWJsZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5fY2FjaGVkLmZvckVhY2godyA9PiB7XG4gICAgICBpZiAoIWluY2x1ZGVOb25DbG9zZWFibGUgJiYgdy5jbG9zYWJsZSkgdGhpcy5kZXN0cm95KHcuX2hhbmRsZSk7XG4gICAgfSk7XG4gICAgdGhpcy5fY2FjaGVkID0gdGhpcy5fY2FjaGVkLmZpbHRlcih3ID0+ICFpbmNsdWRlTm9uQ2xvc2VhYmxlICYmICF3LmNsb3NhYmxlKTtcblxuICAgIHRoaXMucmVtb3ZlVXJsQnVmZmVyID0gbnVsbDtcblxuICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHsgYWN0aXZlOiAnY2xlYXInLCBsaXN0OiB0aGlzLl9jYWNoZWQgfSk7XG5cbiAgICB0aGlzLmRpKCdjbGVhciBhbGwgY2F0Y2gnKTtcbiAgfVxuICAvKipcbiAgICog56e75Yqo57yT5a2Y5pWw5o2uXG4gICAqXG4gICAqIEBwYXJhbSB1cmwg6KaB56e75Yqo55qEVVJM5Zyw5Z2AXG4gICAqIEBwYXJhbSBwb3NpdGlvbiDmlrDkvY3nva7vvIzkuIvmoIfku44gYDBgIOW8gOWni1xuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBcbiAgICogLy8gc291cmNlXG4gICAqIFsgJy9hLzEnLCAnL2EvMicsICcvYS8zJywgJy9hLzQnLCAnL2EvNScgXVxuICAgKiBtb3ZlKCcvYS8xJywgMik7XG4gICAqIC8vIG91dHB1dFxuICAgKiBbICcvYS8yJywgJy9hLzMnLCAnL2EvMScsICcvYS80JywgJy9hLzUnIF1cbiAgICogbW92ZSgnL2EvMScsIC0xKTtcbiAgICogLy8gb3V0cHV0XG4gICAqIFsgJy9hLzInLCAnL2EvMycsICcvYS80JywgJy9hLzUnLCAnL2EvMScgXVxuICAgKiBgYGBcbiAgICovXG4gIG1vdmUodXJsOiBzdHJpbmcsIHBvc2l0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuX2NhY2hlZC5maW5kSW5kZXgodyA9PiB3LnVybCA9PT0gdXJsKTtcbiAgICBpZiAoc3RhcnQgPT09IC0xKSByZXR1cm47XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX2NhY2hlZC5zbGljZSgpO1xuICAgIGRhdGEuc3BsaWNlKHBvc2l0aW9uIDwgMCA/IGRhdGEubGVuZ3RoICsgcG9zaXRpb24gOiBwb3NpdGlvbiwgMCwgZGF0YS5zcGxpY2Uoc3RhcnQsIDEpWzBdKTtcbiAgICB0aGlzLl9jYWNoZWQgPSBkYXRhO1xuICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHtcbiAgICAgIGFjdGl2ZTogJ21vdmUnLFxuICAgICAgdXJsLFxuICAgICAgcG9zaXRpb24sXG4gICAgICBsaXN0OiB0aGlzLl9jYWNoZWRcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICog5by65Yi25YWz6Zet5b2T5YmN6Lev55Sx77yI5YyF5ZCr5LiN5Y+v5YWz6Zet54q25oCB77yJ77yM5bm26YeN5paw5a+86Iiq6IezIGBuZXdVcmxgIOi3r+eUsVxuICAgKi9cbiAgcmVwbGFjZShuZXdVcmw6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuY3VyVXJsO1xuICAgIGlmICh0aGlzLmV4aXN0cyh1cmwpKSB7XG4gICAgICB0aGlzLmNsb3NlKHVybCwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlVXJsQnVmZmVyID0gdXJsO1xuICAgIH1cbiAgICB0aGlzLmluamVjdG9yLmdldDxSb3V0ZXI+KFJvdXRlcikubmF2aWdhdGVCeVVybChuZXdVcmwpO1xuICB9XG4gIC8qKlxuICAgKiDojrflj5bmoIfpopjvvIzpobrluo/lpoLkuIvvvJpcbiAgICpcbiAgICogMS4g57uE5Lu25YaF5L2/55SoIGBSZXVzZVRhYlNlcnZpY2UudGl0bGUgPSAnbmV3IHRpdGxlJ2Ag6YeN5paw5oyH5a6a5paH5pysXG4gICAqIDIuIOi3r+eUsemFjee9ruS4rSBkYXRhIOWxnuaAp+S4reWMheWQqyB0aXRsZUkxOG4gPiB0aXRsZVxuICAgKiAzLiDoj5zljZXmlbDmja7kuK0gdGV4dCDlsZ7mgKdcbiAgICpcbiAgICogQHBhcmFtIHVybCDmjIflrppVUkxcbiAgICogQHBhcmFtIHJvdXRlIOaMh+Wumui3r+eUseW/q+eFp1xuICAgKi9cbiAgZ2V0VGl0bGUodXJsOiBzdHJpbmcsIHJvdXRlPzogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IFJldXNlVGl0bGUge1xuICAgIGlmICh0aGlzLl90aXRsZUNhY2hlZFt1cmxdKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdGl0bGVDYWNoZWRbdXJsXTtcbiAgICB9XG5cbiAgICBpZiAocm91dGUgJiYgcm91dGUuZGF0YSAmJiAocm91dGUuZGF0YS50aXRsZUkxOG4gfHwgcm91dGUuZGF0YS50aXRsZSkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRleHQ6IHJvdXRlLmRhdGEudGl0bGUsXG4gICAgICAgIGkxOG46IHJvdXRlLmRhdGEudGl0bGVJMThuXG4gICAgICB9IGFzIFJldXNlVGl0bGU7XG4gICAgfVxuXG4gICAgY29uc3QgbWVudSA9IHRoaXMuZ2V0TWVudSh1cmwpO1xuICAgIHJldHVybiBtZW51ID8geyB0ZXh0OiBtZW51LnRleHQsIGkxOG46IG1lbnUuaTE4biB9IDogeyB0ZXh0OiB1cmwgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmuIXpmaTmoIfpopjnvJPlrZhcbiAgICovXG4gIGNsZWFyVGl0bGVDYWNoZWQoKTogdm9pZCB7XG4gICAgdGhpcy5fdGl0bGVDYWNoZWQgPSB7fTtcbiAgfVxuICAvKiog6Ieq5a6a5LmJ5b2T5YmNIGBjbG9zYWJsZWAg54q25oCBICovXG4gIHNldCBjbG9zYWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuY3VyVXJsO1xuICAgIHRoaXMuX2Nsb3NhYmxlQ2FjaGVkW3VybF0gPSB2YWx1ZTtcbiAgICB0aGlzLmRpKCd1cGRhdGUgY3VycmVudCB0YWcgY2xvc2FibGU6ICcsIHZhbHVlKTtcbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7XG4gICAgICBhY3RpdmU6ICdjbG9zYWJsZScsXG4gICAgICBjbG9zYWJsZTogdmFsdWUsXG4gICAgICBsaXN0OiB0aGlzLl9jYWNoZWRcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICog6I635Y+WIGBjbG9zYWJsZWAg54q25oCB77yM6aG65bqP5aaC5LiL77yaXG4gICAqXG4gICAqIDEuIOe7hOS7tuWGheS9v+eUqCBgUmV1c2VUYWJTZXJ2aWNlLmNsb3NhYmxlID0gdHJ1ZWAg6YeN5paw5oyH5a6aIGBjbG9zYWJsZWAg54q25oCBXG4gICAqIDIuIOi3r+eUsemFjee9ruS4rSBkYXRhIOWxnuaAp+S4reWMheWQqyBgcmV1c2VDbG9zYWJsZWBcbiAgICogMy4g6I+c5Y2V5pWw5o2u5LitIGByZXVzZUNsb3NhYmxlYCDlsZ7mgKdcbiAgICpcbiAgICogQHBhcmFtIHVybCDmjIflrppVUkxcbiAgICogQHBhcmFtIHJvdXRlIOaMh+Wumui3r+eUseW/q+eFp1xuICAgKi9cbiAgZ2V0Q2xvc2FibGUodXJsOiBzdHJpbmcsIHJvdXRlPzogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIGlmICh0eXBlb2YgdGhpcy5fY2xvc2FibGVDYWNoZWRbdXJsXSAhPT0gJ3VuZGVmaW5lZCcpIHJldHVybiB0aGlzLl9jbG9zYWJsZUNhY2hlZFt1cmxdO1xuXG4gICAgaWYgKHJvdXRlICYmIHJvdXRlLmRhdGEgJiYgdHlwZW9mIHJvdXRlLmRhdGEucmV1c2VDbG9zYWJsZSA9PT0gJ2Jvb2xlYW4nKSByZXR1cm4gcm91dGUuZGF0YS5yZXVzZUNsb3NhYmxlO1xuXG4gICAgY29uc3QgbWVudSA9IHRoaXMubW9kZSAhPT0gUmV1c2VUYWJNYXRjaE1vZGUuVVJMID8gdGhpcy5nZXRNZW51KHVybCkgOiBudWxsO1xuICAgIGlmIChtZW51ICYmIHR5cGVvZiBtZW51LnJldXNlQ2xvc2FibGUgPT09ICdib29sZWFuJykgcmV0dXJuIG1lbnUucmV1c2VDbG9zYWJsZTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiDmuIXnqbogYGNsb3NhYmxlYCDnvJPlrZhcbiAgICovXG4gIGNsZWFyQ2xvc2FibGVDYWNoZWQoKTogdm9pZCB7XG4gICAgdGhpcy5fY2xvc2FibGVDYWNoZWQgPSB7fTtcbiAgfVxuICBnZXRUcnV0aFJvdXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCB7XG4gICAgbGV0IG5leHQgPSByb3V0ZTtcbiAgICB3aGlsZSAobmV4dC5maXJzdENoaWxkKSBuZXh0ID0gbmV4dC5maXJzdENoaWxkO1xuICAgIHJldHVybiBuZXh0O1xuICB9XG4gIC8qKlxuICAgKiDmoLnmja7lv6vnhafojrflj5ZVUkzlnLDlnYBcbiAgICovXG4gIGdldFVybChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IHN0cmluZyB7XG4gICAgbGV0IG5leHQgPSB0aGlzLmdldFRydXRoUm91dGUocm91dGUpO1xuICAgIGNvbnN0IHNlZ21lbnRzOiBzdHJpbmdbXSA9IFtdO1xuICAgIHdoaWxlIChuZXh0KSB7XG4gICAgICBzZWdtZW50cy5wdXNoKG5leHQudXJsLmpvaW4oJy8nKSk7XG4gICAgICBuZXh0ID0gbmV4dC5wYXJlbnQhO1xuICAgIH1cbiAgICBjb25zdCB1cmwgPSBgLyR7c2VnbWVudHNcbiAgICAgIC5maWx0ZXIoaSA9PiBpKVxuICAgICAgLnJldmVyc2UoKVxuICAgICAgLmpvaW4oJy8nKX1gO1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgLyoqXG4gICAqIOajgOafpeW/q+eFp+aYr+WQpuWFgeiuuOiiq+WkjeeUqFxuICAgKi9cbiAgY2FuKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRVcmwocm91dGUpO1xuICAgIGlmICh1cmwgPT09IHRoaXMucmVtb3ZlVXJsQnVmZmVyKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAocm91dGUuZGF0YSAmJiB0eXBlb2Ygcm91dGUuZGF0YS5yZXVzZSA9PT0gJ2Jvb2xlYW4nKSByZXR1cm4gcm91dGUuZGF0YS5yZXVzZTtcblxuICAgIGlmICh0aGlzLm1vZGUgIT09IFJldXNlVGFiTWF0Y2hNb2RlLlVSTCkge1xuICAgICAgY29uc3QgbWVudSA9IHRoaXMuZ2V0TWVudSh1cmwpO1xuICAgICAgaWYgKCFtZW51KSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAodGhpcy5tb2RlID09PSBSZXVzZVRhYk1hdGNoTW9kZS5NZW51KSB7XG4gICAgICAgIGlmIChtZW51LnJldXNlID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFtZW51LnJldXNlIHx8IG1lbnUucmV1c2UgIT09IHRydWUpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gIXRoaXMuaXNFeGNsdWRlKHVybCk7XG4gIH1cblxuICBpc0V4Y2x1ZGUodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5leGNsdWRlcy5maW5kSW5kZXgociA9PiByLnRlc3QodXJsKSkgIT09IC0xO1xuICB9XG5cbiAgLyoqXG4gICAqIOWIt+aWsO+8jOinpuWPkeS4gOS4qiByZWZyZXNoIOexu+Wei+S6i+S7tlxuICAgKi9cbiAgcmVmcmVzaChkYXRhPzogTnpTYWZlQW55KTogdm9pZCB7XG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoeyBhY3RpdmU6ICdyZWZyZXNoJywgZGF0YSB9KTtcbiAgfVxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBwcml2YXRlc1xuXG4gIHByaXZhdGUgZGVzdHJveShfaGFuZGxlOiBOelNhZmVBbnkpOiB2b2lkIHtcbiAgICBpZiAoX2hhbmRsZSAmJiBfaGFuZGxlLmNvbXBvbmVudFJlZiAmJiBfaGFuZGxlLmNvbXBvbmVudFJlZi5kZXN0cm95KSBfaGFuZGxlLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gIH1cblxuICBwcml2YXRlIGRpKC4uLmFyZ3M6IE56U2FmZUFueVtdKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiBuZ0Rldk1vZGUgPT09ICd1bmRlZmluZWQnIHx8IG5nRGV2TW9kZSkge1xuICAgICAgaWYgKCF0aGlzLmRlYnVnKSByZXR1cm47XG4gICAgICBjb25zb2xlLndhcm4oLi4uYXJncyk7XG4gICAgfVxuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgbWVudVNlcnZpY2U6IE1lbnVTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoUkVVU0VfVEFCX1NUT1JBR0VfS0VZKSBwcml2YXRlIHN0YXRlS2V5OiBzdHJpbmcsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChSRVVTRV9UQUJfU1RPUkFHRV9TVEFURSkgcHJpdmF0ZSBzdGF0ZVNydjogUmV1c2VUYWJTdG9yYWdlU3RhdGVcbiAgKSB7fVxuXG4gIGluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0U2Nyb2xsKCk7XG4gICAgdGhpcy5faW5pdGVkID0gdHJ1ZTtcbiAgICB0aGlzLmxvYWRTdGF0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkU3RhdGUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnN0b3JhZ2VTdGF0ZSkgcmV0dXJuO1xuXG4gICAgdGhpcy5fY2FjaGVkID0gdGhpcy5zdGF0ZVNydi5nZXQodGhpcy5zdGF0ZUtleSkubWFwKHYgPT4gKHtcbiAgICAgIHRpdGxlOiB7IHRleHQ6IHYudGl0bGUgfSxcbiAgICAgIHVybDogdi51cmwsXG4gICAgICBwb3NpdGlvbjogdi5wb3NpdGlvblxuICAgIH0pKTtcbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7IGFjdGl2ZTogJ2xvYWRTdGF0ZScgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldE1lbnUodXJsOiBzdHJpbmcpOiBNZW51IHwgbnVsbCB8IHVuZGVmaW5lZCB7XG4gICAgY29uc3QgbWVudXMgPSB0aGlzLm1lbnVTZXJ2aWNlLmdldFBhdGhCeVVybCh1cmwpO1xuICAgIGlmICghbWVudXMgfHwgbWVudXMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gbWVudXMucG9wKCk7XG4gIH1cblxuICBydW5Ib29rKFxuICAgIG1ldGhvZDogUmV1c2VIb29rVHlwZXMsXG4gICAgY29tcDogUmV1c2VDb21wb25lbnRSZWYgfCBudW1iZXIgfCB1bmRlZmluZWQsXG4gICAgdHlwZTogUmV1c2VIb29rT25SZXVzZUluaXRUeXBlID0gJ2luaXQnXG4gICk6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgY29tcCA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLl9jYWNoZWRbY29tcF07XG4gICAgICBjb21wID0gaXRlbS5faGFuZGxlPy5jb21wb25lbnRSZWY7XG4gICAgfVxuICAgIGlmIChjb21wID09IG51bGwgfHwgIWNvbXAuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY29tcFRoaXMgPSBjb21wLmluc3RhbmNlO1xuICAgIGNvbnN0IGZuID0gY29tcFRoaXNbbWV0aG9kXTtcbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChtZXRob2QgPT09ICdfb25SZXVzZUluaXQnKSB7XG4gICAgICBmbi5jYWxsKGNvbXBUaGlzLCB0eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgKGZuIGFzICgpID0+IHZvaWQpLmNhbGwoY29tcFRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFzSW5WYWxpZFJvdXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICFyb3V0ZS5yb3V0ZUNvbmZpZyB8fCAhIXJvdXRlLnJvdXRlQ29uZmlnLmxvYWRDaGlsZHJlbiB8fCAhIXJvdXRlLnJvdXRlQ29uZmlnLmNoaWxkcmVuO1xuICB9XG5cbiAgLyoqXG4gICAqIOWGs+WumuaYr+WQpuWFgeiuuOi3r+eUseWkjeeUqO+8jOiLpSBgdHJ1ZWAg5Lya6Kem5Y+RIGBzdG9yZWBcbiAgICovXG4gIHNob3VsZERldGFjaChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmhhc0luVmFsaWRSb3V0ZShyb3V0ZSkpIHJldHVybiBmYWxzZTtcbiAgICB0aGlzLmRpKCcjc2hvdWxkRGV0YWNoJywgdGhpcy5jYW4ocm91dGUpLCB0aGlzLmdldFVybChyb3V0ZSkpO1xuICAgIHJldHVybiB0aGlzLmNhbihyb3V0ZSk7XG4gIH1cblxuICAvKipcbiAgICog5a2Y5YKoXG4gICAqL1xuICBzdG9yZShfc25hcHNob3Q6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIF9oYW5kbGU6IE56U2FmZUFueSk6IHZvaWQge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXJsKF9zbmFwc2hvdCk7XG4gICAgY29uc3QgaWR4ID0gdGhpcy5pbmRleCh1cmwpO1xuICAgIGNvbnN0IGlzQWRkID0gaWR4ID09PSAtMTtcblxuICAgIGNvbnN0IGl0ZW06IFJldXNlVGFiQ2FjaGVkID0ge1xuICAgICAgdGl0bGU6IHRoaXMuZ2V0VGl0bGUodXJsLCBfc25hcHNob3QpLFxuICAgICAgY2xvc2FibGU6IHRoaXMuZ2V0Q2xvc2FibGUodXJsLCBfc25hcHNob3QpLFxuICAgICAgcG9zaXRpb246IHRoaXMuZ2V0S2VlcGluZ1Njcm9sbCh1cmwsIF9zbmFwc2hvdCkgPyB0aGlzLnBvc2l0aW9uQnVmZmVyW3VybF0gOiBudWxsLFxuICAgICAgdXJsLFxuICAgICAgX3NuYXBzaG90LFxuICAgICAgX2hhbmRsZVxuICAgIH07XG4gICAgaWYgKGlzQWRkKSB7XG4gICAgICBpZiAodGhpcy5jb3VudCA+PSB0aGlzLl9tYXgpIHtcbiAgICAgICAgLy8gR2V0IHRoZSBvbGRlc3QgY2xvc2FibGUgbG9jYXRpb25cbiAgICAgICAgY29uc3QgY2xvc2VJZHggPSB0aGlzLl9jYWNoZWQuZmluZEluZGV4KHcgPT4gdy5jbG9zYWJsZSEpO1xuICAgICAgICBpZiAoY2xvc2VJZHggIT09IC0xKSB0aGlzLnJlbW92ZShjbG9zZUlkeCwgZmFsc2UpO1xuICAgICAgfVxuICAgICAgdGhpcy5fY2FjaGVkLnB1c2goaXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEN1cnJlbnQgaGFuZGxlciBpcyBudWxsIHdoZW4gYWN0aXZhdGUgcm91dGVzXG4gICAgICAvLyBGb3IgYmV0dGVyIHJlbGlhYmlsaXR5LCB3ZSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBjb21wb25lbnQgdG8gYmUgYXR0YWNoZWQgYmVmb3JlIGNhbGwgX29uUmV1c2VJbml0XG4gICAgICBjb25zdCBjYWhjZWRDb21wb25lbnRSZWYgPSB0aGlzLl9jYWNoZWRbaWR4XS5faGFuZGxlPy5jb21wb25lbnRSZWY7XG4gICAgICBpZiAoX2hhbmRsZSA9PSBudWxsICYmIGNhaGNlZENvbXBvbmVudFJlZiAhPSBudWxsKSB7XG4gICAgICAgIHRpbWVyKDEwMCkuc3Vic2NyaWJlKCgpID0+IHRoaXMucnVuSG9vaygnX29uUmV1c2VJbml0JywgY2FoY2VkQ29tcG9uZW50UmVmKSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9jYWNoZWRbaWR4XSA9IGl0ZW07XG4gICAgfVxuICAgIHRoaXMucmVtb3ZlVXJsQnVmZmVyID0gbnVsbDtcblxuICAgIHRoaXMuZGkoJyNzdG9yZScsIGlzQWRkID8gJ1tuZXddJyA6ICdbb3ZlcnJpZGVdJywgdXJsKTtcblxuICAgIGlmIChfaGFuZGxlICYmIF9oYW5kbGUuY29tcG9uZW50UmVmKSB7XG4gICAgICB0aGlzLnJ1bkhvb2soJ19vblJldXNlRGVzdHJveScsIF9oYW5kbGUuY29tcG9uZW50UmVmKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzQWRkKSB7XG4gICAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7IGFjdGl2ZTogJ292ZXJyaWRlJywgaXRlbSwgbGlzdDogdGhpcy5fY2FjaGVkIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDlhrPlrprmmK/lkKblhYHorrjlupTnlKjnvJPlrZjmlbDmja5cbiAgICovXG4gIHNob3VsZEF0dGFjaChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmhhc0luVmFsaWRSb3V0ZShyb3V0ZSkpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVybChyb3V0ZSk7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0KHVybCk7XG4gICAgY29uc3QgcmV0ID0gISEoZGF0YSAmJiBkYXRhLl9oYW5kbGUpO1xuICAgIHRoaXMuZGkoJyNzaG91bGRBdHRhY2gnLCByZXQsIHVybCk7XG4gICAgaWYgKCFyZXQpIHtcbiAgICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHsgYWN0aXZlOiAnYWRkJywgdXJsLCBsaXN0OiB0aGlzLl9jYWNoZWQgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICog5o+Q5Y+W5aSN55So5pWw5o2uXG4gICAqL1xuICByZXRyaWV2ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IE56U2FmZUFueSB8IG51bGwge1xuICAgIGlmICh0aGlzLmhhc0luVmFsaWRSb3V0ZShyb3V0ZSkpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXJsKHJvdXRlKTtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5nZXQodXJsKTtcbiAgICBjb25zdCByZXQgPSAoZGF0YSAmJiBkYXRhLl9oYW5kbGUpIHx8IG51bGw7XG4gICAgdGhpcy5kaSgnI3JldHJpZXZlJywgdXJsLCByZXQpO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICog5Yaz5a6a5piv5ZCm5bqU6K+l6L+b6KGM5aSN55So6Lev55Sx5aSE55CGXG4gICAqL1xuICBzaG91bGRSZXVzZVJvdXRlKGZ1dHVyZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgY3VycjogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIGxldCByZXQgPSBmdXR1cmUucm91dGVDb25maWcgPT09IGN1cnIucm91dGVDb25maWc7XG4gICAgaWYgKCFyZXQpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IHBhdGggPSAoKGZ1dHVyZS5yb3V0ZUNvbmZpZyAmJiBmdXR1cmUucm91dGVDb25maWcucGF0aCkgfHwgJycpIGFzIHN0cmluZztcbiAgICBpZiAocGF0aC5sZW5ndGggPiAwICYmIH5wYXRoLmluZGV4T2YoJzonKSkge1xuICAgICAgaWYgKHRoaXMucm91dGVQYXJhbU1hdGNoTW9kZSA9PT0gJ3N0cmljdCcpIHtcbiAgICAgICAgcmV0ID0gdGhpcy5nZXRVcmwoZnV0dXJlKSA9PT0gdGhpcy5nZXRVcmwoY3Vycik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXQgPSBwYXRoID09PSAoKGN1cnIucm91dGVDb25maWcgJiYgY3Vyci5yb3V0ZUNvbmZpZy5wYXRoKSB8fCAnJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZGkoJz09PT09PT09PT09PT09PT09PT09PScpO1xuICAgIHRoaXMuZGkoJyNzaG91bGRSZXVzZVJvdXRlJywgcmV0LCBgJHt0aGlzLmdldFVybChjdXJyKX09PiR7dGhpcy5nZXRVcmwoZnV0dXJlKX1gLCBmdXR1cmUsIGN1cnIpO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvLyAjcmVnaW9uIHNjcm9sbFxuXG4gIC8qKlxuICAgKiDojrflj5YgYGtlZXBpbmdTY3JvbGxgIOeKtuaAge+8jOmhuuW6j+WmguS4i++8mlxuICAgKlxuICAgKiAxLiDot6/nlLHphY3nva7kuK0gZGF0YSDlsZ7mgKfkuK3ljIXlkKsgYGtlZXBpbmdTY3JvbGxgXG4gICAqIDIuIOiPnOWNleaVsOaNruS4rSBga2VlcGluZ1Njcm9sbGAg5bGe5oCnXG4gICAqIDMuIOe7hOS7tiBga2VlcGluZ1Njcm9sbGAg5YC8XG4gICAqL1xuICBnZXRLZWVwaW5nU2Nyb2xsKHVybDogc3RyaW5nLCByb3V0ZT86IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICBpZiAocm91dGUgJiYgcm91dGUuZGF0YSAmJiB0eXBlb2Ygcm91dGUuZGF0YS5rZWVwaW5nU2Nyb2xsID09PSAnYm9vbGVhbicpIHJldHVybiByb3V0ZS5kYXRhLmtlZXBpbmdTY3JvbGw7XG5cbiAgICBjb25zdCBtZW51ID0gdGhpcy5tb2RlICE9PSBSZXVzZVRhYk1hdGNoTW9kZS5VUkwgPyB0aGlzLmdldE1lbnUodXJsKSA6IG51bGw7XG4gICAgaWYgKG1lbnUgJiYgdHlwZW9mIG1lbnUua2VlcGluZ1Njcm9sbCA9PT0gJ2Jvb2xlYW4nKSByZXR1cm4gbWVudS5rZWVwaW5nU2Nyb2xsO1xuXG4gICAgcmV0dXJuIHRoaXMua2VlcGluZ1Njcm9sbDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGlzRGlzYWJsZWRJblJvdXRlcigpOiBib29sZWFuIHtcbiAgICBjb25zdCByb3V0ZXJDb25maWcgPSB0aGlzLmluamVjdG9yLmdldDxFeHRyYU9wdGlvbnM+KFJPVVRFUl9DT05GSUdVUkFUSU9OLCB7fSBhcyBOelNhZmVBbnkpO1xuICAgIHJldHVybiByb3V0ZXJDb25maWcuc2Nyb2xsUG9zaXRpb25SZXN0b3JhdGlvbiA9PT0gJ2Rpc2FibGVkJztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IHNzKCk6IFNjcm9sbFNlcnZpY2Uge1xuICAgIHJldHVybiB0aGlzLmluamVjdG9yLmdldChTY3JvbGxTZXJ2aWNlKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdFNjcm9sbCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fcm91dGVyJCkge1xuICAgICAgdGhpcy5fcm91dGVyJC51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHRoaXMuX3JvdXRlciQgPSB0aGlzLmluamVjdG9yLmdldDxSb3V0ZXI+KFJvdXRlcikuZXZlbnRzLnN1YnNjcmliZShlID0+IHtcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0KSB7XG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuY3VyVXJsO1xuICAgICAgICBpZiAodGhpcy5nZXRLZWVwaW5nU2Nyb2xsKHVybCwgdGhpcy5nZXRUcnV0aFJvdXRlKHRoaXMuc25hcHNob3QpKSkge1xuICAgICAgICAgIHRoaXMucG9zaXRpb25CdWZmZXJbdXJsXSA9IHRoaXMuc3MuZ2V0U2Nyb2xsUG9zaXRpb24odGhpcy5rZWVwaW5nU2Nyb2xsQ29udGFpbmVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgdGhpcy5wb3NpdGlvbkJ1ZmZlclt1cmxdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuY3VyVXJsO1xuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5nZXQodXJsKTtcbiAgICAgICAgaWYgKGl0ZW0gJiYgaXRlbS5wb3NpdGlvbiAmJiB0aGlzLmdldEtlZXBpbmdTY3JvbGwodXJsLCB0aGlzLmdldFRydXRoUm91dGUodGhpcy5zbmFwc2hvdCkpKSB7XG4gICAgICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZEluUm91dGVyKSB7XG4gICAgICAgICAgICB0aGlzLnNzLnNjcm9sbFRvUG9zaXRpb24odGhpcy5rZWVwaW5nU2Nyb2xsQ29udGFpbmVyLCBpdGVtLnBvc2l0aW9uKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNzLnNjcm9sbFRvUG9zaXRpb24odGhpcy5rZWVwaW5nU2Nyb2xsQ29udGFpbmVyLCBpdGVtLnBvc2l0aW9uISksIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgX2NhY2hlZENoYW5nZSwgX3JvdXRlciQgfSA9IHRoaXM7XG4gICAgdGhpcy5jbGVhcigpO1xuICAgIHRoaXMuX2NhY2hlZCA9IFtdO1xuICAgIF9jYWNoZWRDaGFuZ2UuY29tcGxldGUoKTtcblxuICAgIGlmIChfcm91dGVyJCkge1xuICAgICAgX3JvdXRlciQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==