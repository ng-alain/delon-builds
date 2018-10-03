/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { MenuService } from '@delon/theme';
import { ReuseTabMatchMode, } from './reuse-tab.interfaces';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
/**
 * 路由复用类，提供复用所需要一些基本接口
 *
 * **注：** 所有缓存数据来源于路由离开后才会产生
 */
export class ReuseTabService {
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
        if (route && route.data && (route.data["titleI18n"] || route.data["title"]))
            return /** @type {?} */ ({
                text: route.data["title"],
                i18n: route.data["titleI18n"],
            });
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
        if (route && route.data && typeof route.data["reuseClosable"] === 'boolean')
            return route.data["reuseClosable"];
        /** @type {?} */
        const menu = this.mode !== ReuseTabMatchMode.URL ? this.getMenu(url) : null;
        if (menu && typeof menu["reuseClosable"] === 'boolean')
            return menu["reuseClosable"];
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
        if (route.data && typeof route.data["reuse"] === 'boolean')
            return route.data["reuse"];
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
    refresh(data) {
        this._cachedChange.next({ active: 'refresh', data });
    }
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
        const path = /** @type {?} */ (((future.routeConfig && future.routeConfig.path) ||
            ''));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3JldXNlLXRhYi8iLCJzb3VyY2VzIjpbInJldXNlLXRhYi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFhLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBRUwsY0FBYyxFQUNkLE1BQU0sR0FDUCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBYyxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMzQyxPQUFPLEVBRUwsaUJBQWlCLEdBR2xCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7O0FBUWhDLE1BQU07Ozs7O0lBNlVKLFlBQW9CLFFBQWtCLEVBQVUsV0FBd0I7UUFBcEQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO29CQTVVekQsRUFBRTtzQkFDQSxLQUFLO3FCQUNOLGlCQUFpQixDQUFDLElBQUk7eUJBQ1IsRUFBRTs2QkFHNUIsSUFBSSxlQUFlLENBQWlCLElBQUksQ0FBQzt1QkFDVCxFQUFFOzRCQUNnQixFQUFFOytCQUNGLEVBQUU7S0FtVW9COzs7OztJQTdUNUUsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ2hFOzs7Ozs7SUFHRCxJQUFJLEdBQUcsQ0FBQyxLQUFhO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM5QyxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FB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RTs7OztZQXBCRixRQUFRO1lBTy9CLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3ksIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICBBY3RpdmF0ZWRSb3V0ZSxcbiAgUm91dGVyLFxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBNZW51U2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQge1xuICBSZXVzZVRhYkNhY2hlZCxcbiAgUmV1c2VUYWJNYXRjaE1vZGUsXG4gIFJldXNlVGFiTm90aWZ5LFxuICBSZXVzZVRpdGxlLFxufSBmcm9tICcuL3JldXNlLXRhYi5pbnRlcmZhY2VzJztcblxuLyoqXG4gKiDot6/nlLHlpI3nlKjnsbvvvIzmj5DkvpvlpI3nlKjmiYDpnIDopoHkuIDkupvln7rmnKzmjqXlj6NcbiAqXG4gKiAqKuazqO+8mioqIOaJgOaciee8k+WtmOaVsOaNruadpea6kOS6jui3r+eUseemu+W8gOWQjuaJjeS8muS6p+eUn1xuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFJldXNlVGFiU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX21heCA9IDEwO1xuICBwcml2YXRlIF9kZWJ1ZyA9IGZhbHNlO1xuICBwcml2YXRlIF9tb2RlID0gUmV1c2VUYWJNYXRjaE1vZGUuTWVudTtcbiAgcHJpdmF0ZSBfZXhjbHVkZXM6IFJlZ0V4cFtdID0gW107XG4gIHByaXZhdGUgX2NhY2hlZENoYW5nZTogQmVoYXZpb3JTdWJqZWN0PFxuICAgIFJldXNlVGFiTm90aWZ5XG4gID4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFJldXNlVGFiTm90aWZ5PihudWxsKTtcbiAgcHJpdmF0ZSBfY2FjaGVkOiBSZXVzZVRhYkNhY2hlZFtdID0gW107XG4gIHByaXZhdGUgX3RpdGxlQ2FjaGVkOiB7IFt1cmw6IHN0cmluZ106IFJldXNlVGl0bGUgfSA9IHt9O1xuICBwcml2YXRlIF9jbG9zYWJsZUNhY2hlZDogeyBbdXJsOiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcbiAgcHJpdmF0ZSByZW1vdmVVcmxCdWZmZXI6IHN0cmluZztcblxuICAvLyByZWdpb246IHB1YmxpY1xuXG4gIC8qKiDlvZPliY3ot6/nlLHlnLDlnYAgKi9cbiAgZ2V0IGN1clVybCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRVcmwodGhpcy5pbmplY3Rvci5nZXQoQWN0aXZhdGVkUm91dGUpLnNuYXBzaG90KTtcbiAgfVxuXG4gIC8qKiDlhYHorrjmnIDlpJrlpI3nlKjlpJrlsJHkuKrpobXpnaLvvIzlj5blgLzojIPlm7QgYDItMTAwYCAqL1xuICBzZXQgbWF4KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXggPSBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgMiksIDEwMCk7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuX2NhY2hlZC5sZW5ndGg7IGkgPiB0aGlzLl9tYXg7IGktLSkge1xuICAgICAgdGhpcy5fY2FjaGVkLnBvcCgpO1xuICAgIH1cbiAgfVxuICAvKiog6K6+572u5Yy56YWN5qih5byPICovXG4gIHNldCBtb2RlKHZhbHVlOiBSZXVzZVRhYk1hdGNoTW9kZSkge1xuICAgIHRoaXMuX21vZGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZTtcbiAgfVxuICAvKiog6K6+572uRGVidWfmqKHlvI8gKi9cbiAgc2V0IGRlYnVnKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGVidWcgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZGVidWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlYnVnO1xuICB9XG4gIC8qKiDmjpLpmaTop4TliJnvvIzpmZAgYG1vZGU9VVJMYCAqL1xuICBzZXQgZXhjbHVkZXModmFsdWVzOiBSZWdFeHBbXSkge1xuICAgIGlmICghdmFsdWVzKSByZXR1cm47XG4gICAgdGhpcy5fZXhjbHVkZXMgPSB2YWx1ZXM7XG4gIH1cbiAgZ2V0IGV4Y2x1ZGVzKCkge1xuICAgIHJldHVybiB0aGlzLl9leGNsdWRlcztcbiAgfVxuICAvKiog6I635Y+W5bey57yT5a2Y55qE6Lev55SxICovXG4gIGdldCBpdGVtcygpOiBSZXVzZVRhYkNhY2hlZFtdIHtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVkO1xuICB9XG4gIC8qKiDojrflj5blvZPliY3nvJPlrZjnmoTot6/nlLHmgLvmlbAgKi9cbiAgZ2V0IGNvdW50KCkge1xuICAgIHJldHVybiB0aGlzLl9jYWNoZWQubGVuZ3RoO1xuICB9XG4gIC8qKiDorqLpmIXnvJPlrZjlj5jmm7TpgJrnn6UgKi9cbiAgZ2V0IGNoYW5nZSgpOiBPYnNlcnZhYmxlPFJldXNlVGFiTm90aWZ5PiB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZENoYW5nZS5hc09ic2VydmFibGUoKTsgLy8gLnBpcGUoZmlsdGVyKHcgPT4gdyAhPT0gbnVsbCkpO1xuICB9XG4gIC8qKiDoh6rlrprkuYnlvZPliY3moIfpopggKi9cbiAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcgfCBSZXVzZVRpdGxlKSB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5jdXJVcmw7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHZhbHVlID0geyB0ZXh0OiB2YWx1ZSB9O1xuICAgIHRoaXMuX3RpdGxlQ2FjaGVkW3VybF0gPSB2YWx1ZTtcbiAgICB0aGlzLmRpKCd1cGRhdGUgY3VycmVudCB0YWcgdGl0bGU6ICcsIHZhbHVlKTtcbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7XG4gICAgICBhY3RpdmU6ICd0aXRsZScsXG4gICAgICB0aXRsZTogdmFsdWUsXG4gICAgICBsaXN0OiB0aGlzLl9jYWNoZWQsXG4gICAgfSk7XG4gIH1cbiAgLyoqIOiOt+WPluaMh+Wumui3r+W+hOe8k+WtmOaJgOWcqOS9jee9ru+8jGAtMWAg6KGo56S65peg57yT5a2YICovXG4gIGluZGV4KHVybDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVkLmZpbmRJbmRleCh3ID0+IHcudXJsID09PSB1cmwpO1xuICB9XG4gIC8qKiDojrflj5bmjIflrprot6/lvoTnvJPlrZjmmK/lkKblrZjlnKggKi9cbiAgZXhpc3RzKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXgodXJsKSAhPT0gLTE7XG4gIH1cbiAgLyoqIOiOt+WPluaMh+Wumui3r+W+hOe8k+WtmCAqL1xuICBnZXQodXJsOiBzdHJpbmcpOiBSZXVzZVRhYkNhY2hlZCB7XG4gICAgcmV0dXJuIHVybCA/IHRoaXMuX2NhY2hlZC5maW5kKHcgPT4gdy51cmwgPT09IHVybCkgfHwgbnVsbCA6IG51bGw7XG4gIH1cbiAgcHJpdmF0ZSByZW1vdmUodXJsOiBzdHJpbmcgfCBudW1iZXIsIGluY2x1ZGVOb25DbG9zZWFibGU6IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICBjb25zdCBpZHggPSB0eXBlb2YgdXJsID09PSAnc3RyaW5nJyA/IHRoaXMuaW5kZXgodXJsKSA6IHVybDtcbiAgICBjb25zdCBpdGVtID0gaWR4ICE9PSAtMSA/IHRoaXMuX2NhY2hlZFtpZHhdIDogbnVsbDtcbiAgICBpZiAoIWl0ZW0gfHwgKCFpbmNsdWRlTm9uQ2xvc2VhYmxlICYmICFpdGVtLmNsb3NhYmxlKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgdGhpcy5kZXN0cm95KGl0ZW0uX2hhbmRsZSk7XG5cbiAgICB0aGlzLl9jYWNoZWQuc3BsaWNlKGlkeCwgMSk7XG4gICAgZGVsZXRlIHRoaXMuX3RpdGxlQ2FjaGVkW3VybF07XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIOagueaNrlVSTOenu+mZpOagh+etvlxuICAgKlxuICAgKiBAcGFyYW0gW2luY2x1ZGVOb25DbG9zZWFibGU9ZmFsc2VdIOaYr+WQpuW8uuWItuWMheWQq+S4jeWPr+WFs+mXrVxuICAgKi9cbiAgY2xvc2UodXJsOiBzdHJpbmcsIGluY2x1ZGVOb25DbG9zZWFibGUgPSBmYWxzZSkge1xuICAgIHRoaXMucmVtb3ZlVXJsQnVmZmVyID0gdXJsO1xuXG4gICAgdGhpcy5yZW1vdmUodXJsLCBpbmNsdWRlTm9uQ2xvc2VhYmxlKTtcblxuICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHsgYWN0aXZlOiAnY2xvc2UnLCB1cmwsIGxpc3Q6IHRoaXMuX2NhY2hlZCB9KTtcblxuICAgIHRoaXMuZGkoJ2Nsb3NlIHRhZycsIHVybCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIOa4hemZpOWPs+i+uVxuICAgKlxuICAgKiBAcGFyYW0gW2luY2x1ZGVOb25DbG9zZWFibGU9ZmFsc2VdIOaYr+WQpuW8uuWItuWMheWQq+S4jeWPr+WFs+mXrVxuICAgKi9cbiAgY2xvc2VSaWdodCh1cmw6IHN0cmluZywgaW5jbHVkZU5vbkNsb3NlYWJsZSA9IGZhbHNlKSB7XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLmluZGV4KHVybCk7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY291bnQgLSAxOyBpID4gc3RhcnQ7IGktLSkge1xuICAgICAgdGhpcy5yZW1vdmUoaSwgaW5jbHVkZU5vbkNsb3NlYWJsZSk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW1vdmVVcmxCdWZmZXIgPSBudWxsO1xuXG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoeyBhY3RpdmU6ICdjbG9zZVJpZ2h0JywgdXJsLCBsaXN0OiB0aGlzLl9jYWNoZWQgfSk7XG5cbiAgICB0aGlzLmRpKCdjbG9zZSByaWdodCB0YWdlcycsIHVybCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIOa4hemZpOaJgOaciee8k+WtmFxuICAgKlxuICAgKiBAcGFyYW0gW2luY2x1ZGVOb25DbG9zZWFibGU9ZmFsc2VdIOaYr+WQpuW8uuWItuWMheWQq+S4jeWPr+WFs+mXrVxuICAgKi9cbiAgY2xlYXIoaW5jbHVkZU5vbkNsb3NlYWJsZSA9IGZhbHNlKSB7XG4gICAgdGhpcy5fY2FjaGVkLmZvckVhY2godyA9PiB7XG4gICAgICBpZiAoIWluY2x1ZGVOb25DbG9zZWFibGUgJiYgdy5jbG9zYWJsZSkgdGhpcy5kZXN0cm95KHcuX2hhbmRsZSk7XG4gICAgfSk7XG4gICAgdGhpcy5fY2FjaGVkID0gdGhpcy5fY2FjaGVkLmZpbHRlcihcbiAgICAgIHcgPT4gIWluY2x1ZGVOb25DbG9zZWFibGUgJiYgIXcuY2xvc2FibGUsXG4gICAgKTtcblxuICAgIHRoaXMucmVtb3ZlVXJsQnVmZmVyID0gbnVsbDtcblxuICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHsgYWN0aXZlOiAnY2xlYXInLCBsaXN0OiB0aGlzLl9jYWNoZWQgfSk7XG5cbiAgICB0aGlzLmRpKCdjbGVhciBhbGwgY2F0Y2gnKTtcbiAgfVxuICAvKipcbiAgICog56e75Yqo57yT5a2Y5pWw5o2uXG4gICAqIEBwYXJhbSB1cmwg6KaB56e75Yqo55qEVVJM5Zyw5Z2AXG4gICAqIEBwYXJhbSBwb3NpdGlvbiDmlrDkvY3nva7vvIzkuIvmoIfku44gYDBgIOW8gOWni1xuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBcbiAgICogLy8gc291cmNlXG4gICAqIFsgJy9hLzEnLCAnL2EvMicsICcvYS8zJywgJy9hLzQnLCAnL2EvNScgXVxuICAgKiBtb3ZlKCcvYS8xJywgMik7XG4gICAqIC8vIG91dHB1dFxuICAgKiBbICcvYS8yJywgJy9hLzMnLCAnL2EvMScsICcvYS80JywgJy9hLzUnIF1cbiAgICogbW92ZSgnL2EvMScsIC0xKTtcbiAgICogLy8gb3V0cHV0XG4gICAqIFsgJy9hLzInLCAnL2EvMycsICcvYS80JywgJy9hLzUnLCAnL2EvMScgXVxuICAgKiBgYGBcbiAgICovXG4gIG1vdmUodXJsOiBzdHJpbmcsIHBvc2l0aW9uOiBudW1iZXIpIHtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuX2NhY2hlZC5maW5kSW5kZXgodyA9PiB3LnVybCA9PT0gdXJsKTtcbiAgICBpZiAoc3RhcnQgPT09IC0xKSByZXR1cm47XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX2NhY2hlZC5zbGljZSgpO1xuICAgIGRhdGEuc3BsaWNlKFxuICAgICAgcG9zaXRpb24gPCAwID8gZGF0YS5sZW5ndGggKyBwb3NpdGlvbiA6IHBvc2l0aW9uLFxuICAgICAgMCxcbiAgICAgIGRhdGEuc3BsaWNlKHN0YXJ0LCAxKVswXSxcbiAgICApO1xuICAgIHRoaXMuX2NhY2hlZCA9IGRhdGE7XG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoe1xuICAgICAgYWN0aXZlOiAnbW92ZScsXG4gICAgICB1cmwsXG4gICAgICBwb3NpdGlvbixcbiAgICAgIGxpc3Q6IHRoaXMuX2NhY2hlZCxcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICog5by65Yi25YWz6Zet5b2T5YmN6Lev55Sx77yI5YyF5ZCr5LiN5Y+v5YWz6Zet54q25oCB77yJ77yM5bm26YeN5paw5a+86Iiq6IezIGBuZXdVcmxgIOi3r+eUsVxuICAgKi9cbiAgcmVwbGFjZShuZXdVcmw6IHN0cmluZykge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuY3VyVXJsO1xuICAgIGlmICh0aGlzLmV4aXN0cyh1cmwpKSB7XG4gICAgICB0aGlzLmNsb3NlKHVybCwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlVXJsQnVmZmVyID0gdXJsO1xuICAgIH1cbiAgICB0aGlzLmluamVjdG9yLmdldChSb3V0ZXIpLm5hdmlnYXRlQnlVcmwobmV3VXJsKTtcbiAgfVxuICAvKipcbiAgICog6I635Y+W5qCH6aKY77yM6aG65bqP5aaC5LiL77yaXG4gICAqXG4gICAqIDEuIOe7hOS7tuWGheS9v+eUqCBgUmV1c2VUYWJTZXJ2aWNlLnRpdGxlID0gJ25ldyB0aXRsZSdgIOmHjeaWsOaMh+WumuaWh+acrFxuICAgKiAyLiDot6/nlLHphY3nva7kuK0gZGF0YSDlsZ7mgKfkuK3ljIXlkKsgdGl0bGVJMThuID4gdGl0bGVcbiAgICogMy4g6I+c5Y2V5pWw5o2u5LitIHRleHQg5bGe5oCnXG4gICAqXG4gICAqIEBwYXJhbSB1cmwg5oyH5a6aVVJMXG4gICAqIEBwYXJhbSByb3V0ZSDmjIflrprot6/nlLHlv6vnhadcbiAgICovXG4gIGdldFRpdGxlKHVybDogc3RyaW5nLCByb3V0ZT86IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBSZXVzZVRpdGxlIHtcbiAgICBpZiAodGhpcy5fdGl0bGVDYWNoZWRbdXJsXSkgcmV0dXJuIHRoaXMuX3RpdGxlQ2FjaGVkW3VybF07XG5cbiAgICBpZiAocm91dGUgJiYgcm91dGUuZGF0YSAmJiAocm91dGUuZGF0YS50aXRsZUkxOG4gfHwgcm91dGUuZGF0YS50aXRsZSkpXG4gICAgICByZXR1cm4gPFJldXNlVGl0bGU+e1xuICAgICAgICB0ZXh0OiByb3V0ZS5kYXRhLnRpdGxlLFxuICAgICAgICBpMThuOiByb3V0ZS5kYXRhLnRpdGxlSTE4bixcbiAgICAgIH07XG5cbiAgICBjb25zdCBtZW51ID1cbiAgICAgIHRoaXMubW9kZSAhPT0gUmV1c2VUYWJNYXRjaE1vZGUuVVJMID8gdGhpcy5nZXRNZW51KHVybCkgOiBudWxsO1xuICAgIHJldHVybiBtZW51ID8geyB0ZXh0OiBtZW51LnRleHQsIGkxOG46IG1lbnUuaTE4biB9IDogeyB0ZXh0OiB1cmwgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmuIXpmaTmoIfpopjnvJPlrZhcbiAgICovXG4gIGNsZWFyVGl0bGVDYWNoZWQoKSB7XG4gICAgdGhpcy5fdGl0bGVDYWNoZWQgPSB7fTtcbiAgfVxuICAvKiog6Ieq5a6a5LmJ5b2T5YmNIGBjbG9zYWJsZWAg54q25oCBICovXG4gIHNldCBjbG9zYWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuY3VyVXJsO1xuICAgIHRoaXMuX2Nsb3NhYmxlQ2FjaGVkW3VybF0gPSB2YWx1ZTtcbiAgICB0aGlzLmRpKCd1cGRhdGUgY3VycmVudCB0YWcgY2xvc2FibGU6ICcsIHZhbHVlKTtcbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7XG4gICAgICBhY3RpdmU6ICdjbG9zYWJsZScsXG4gICAgICBjbG9zYWJsZTogdmFsdWUsXG4gICAgICBsaXN0OiB0aGlzLl9jYWNoZWQsXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIOiOt+WPliBgY2xvc2FibGVgIOeKtuaAge+8jOmhuuW6j+WmguS4i++8mlxuICAgKlxuICAgKiAxLiDnu4Tku7blhoXkvb/nlKggYFJldXNlVGFiU2VydmljZS5jbG9zYWJsZSA9IHRydWVgIOmHjeaWsOaMh+WumiBgY2xvc2FibGVgIOeKtuaAgVxuICAgKiAyLiDot6/nlLHphY3nva7kuK0gZGF0YSDlsZ7mgKfkuK3ljIXlkKsgYHJldXNlQ2xvc2FibGVgXG4gICAqIDMuIOiPnOWNleaVsOaNruS4rSBgcmV1c2VDbG9zYWJsZWAg5bGe5oCnXG4gICAqXG4gICAqIEBwYXJhbSB1cmwg5oyH5a6aVVJMXG4gICAqIEBwYXJhbSByb3V0ZSDmjIflrprot6/nlLHlv6vnhadcbiAgICovXG4gIGdldENsb3NhYmxlKHVybDogc3RyaW5nLCByb3V0ZT86IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuX2Nsb3NhYmxlQ2FjaGVkW3VybF0gIT09ICd1bmRlZmluZWQnKVxuICAgICAgcmV0dXJuIHRoaXMuX2Nsb3NhYmxlQ2FjaGVkW3VybF07XG5cbiAgICBpZiAocm91dGUgJiYgcm91dGUuZGF0YSAmJiB0eXBlb2Ygcm91dGUuZGF0YS5yZXVzZUNsb3NhYmxlID09PSAnYm9vbGVhbicpXG4gICAgICByZXR1cm4gcm91dGUuZGF0YS5yZXVzZUNsb3NhYmxlO1xuXG4gICAgY29uc3QgbWVudSA9XG4gICAgICB0aGlzLm1vZGUgIT09IFJldXNlVGFiTWF0Y2hNb2RlLlVSTCA/IHRoaXMuZ2V0TWVudSh1cmwpIDogbnVsbDtcbiAgICBpZiAobWVudSAmJiB0eXBlb2YgbWVudS5yZXVzZUNsb3NhYmxlID09PSAnYm9vbGVhbicpXG4gICAgICByZXR1cm4gbWVudS5yZXVzZUNsb3NhYmxlO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIOa4heepuiBgY2xvc2FibGVgIOe8k+WtmFxuICAgKi9cbiAgY2xlYXJDbG9zYWJsZUNhY2hlZCgpIHtcbiAgICB0aGlzLl9jbG9zYWJsZUNhY2hlZCA9IHt9O1xuICB9XG4gIGdldFRydXRoUm91dGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpIHtcbiAgICBsZXQgbmV4dCA9IHJvdXRlO1xuICAgIHdoaWxlIChuZXh0LmZpcnN0Q2hpbGQpIG5leHQgPSBuZXh0LmZpcnN0Q2hpbGQ7XG4gICAgcmV0dXJuIG5leHQ7XG4gIH1cbiAgLyoqXG4gICAqIOagueaNruW/q+eFp+iOt+WPllVSTOWcsOWdgFxuICAgKi9cbiAgZ2V0VXJsKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogc3RyaW5nIHtcbiAgICBsZXQgbmV4dCA9IHRoaXMuZ2V0VHJ1dGhSb3V0ZShyb3V0ZSk7XG4gICAgY29uc3Qgc2VnbWVudHMgPSBbXTtcbiAgICB3aGlsZSAobmV4dCkge1xuICAgICAgc2VnbWVudHMucHVzaChuZXh0LnVybC5qb2luKCcvJykpO1xuICAgICAgbmV4dCA9IG5leHQucGFyZW50O1xuICAgIH1cbiAgICBjb25zdCB1cmwgPVxuICAgICAgJy8nICtcbiAgICAgIHNlZ21lbnRzXG4gICAgICAgIC5maWx0ZXIoaSA9PiBpKVxuICAgICAgICAucmV2ZXJzZSgpXG4gICAgICAgIC5qb2luKCcvJyk7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICAvKipcbiAgICog5qOA5p+l5b+r54Wn5piv5ZCm5YWB6K646KKr5aSN55SoXG4gICAqL1xuICBjYW4ocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVybChyb3V0ZSk7XG4gICAgaWYgKHVybCA9PT0gdGhpcy5yZW1vdmVVcmxCdWZmZXIpIHJldHVybiBmYWxzZTtcblxuICAgIGlmIChyb3V0ZS5kYXRhICYmIHR5cGVvZiByb3V0ZS5kYXRhLnJldXNlID09PSAnYm9vbGVhbicpXG4gICAgICByZXR1cm4gcm91dGUuZGF0YS5yZXVzZTtcblxuICAgIGlmICh0aGlzLm1vZGUgIT09IFJldXNlVGFiTWF0Y2hNb2RlLlVSTCkge1xuICAgICAgY29uc3QgbWVudSA9IHRoaXMuZ2V0TWVudSh1cmwpO1xuICAgICAgaWYgKCFtZW51KSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAodGhpcy5tb2RlID09PSBSZXVzZVRhYk1hdGNoTW9kZS5NZW51KSB7XG4gICAgICAgIGlmIChtZW51LnJldXNlID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFtZW51LnJldXNlIHx8IG1lbnUucmV1c2UgIT09IHRydWUpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXhjbHVkZXMuZmluZEluZGV4KHIgPT4gci50ZXN0KHVybCkpID09PSAtMTtcbiAgfVxuICAvKipcbiAgICog5Yi35paw77yM6Kem5Y+R5LiA5LiqIHJlZnJlc2gg57G75Z6L5LqL5Lu2XG4gICAqL1xuICByZWZyZXNoKGRhdGE/OiBhbnkpIHtcbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7IGFjdGl2ZTogJ3JlZnJlc2gnLCBkYXRhIH0pO1xuICB9XG4gIC8vIGVuZHJlZ2lvblxuXG4gIC8vIHJlZ2lvbjogcHJpdmF0ZXNcblxuICBwcml2YXRlIGRlc3Ryb3koX2hhbmRsZTogYW55KSB7XG4gICAgaWYgKF9oYW5kbGUgJiYgX2hhbmRsZS5jb21wb25lbnRSZWYgJiYgX2hhbmRsZS5jb21wb25lbnRSZWYuZGVzdHJveSlcbiAgICAgIF9oYW5kbGUuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgfVxuXG4gIHByaXZhdGUgZGkoLi4uYXJncykge1xuICAgIGlmICghdGhpcy5kZWJ1ZykgcmV0dXJuO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgY29uc29sZS53YXJuKC4uLmFyZ3MpO1xuICB9XG5cbiAgLy8gZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgbWVudVNlcnZpY2U6IE1lbnVTZXJ2aWNlKSB7fVxuXG4gIHByaXZhdGUgZ2V0TWVudSh1cmw6IHN0cmluZykge1xuICAgIGNvbnN0IG1lbnVzID0gdGhpcy5tZW51U2VydmljZS5nZXRQYXRoQnlVcmwodXJsKTtcbiAgICBpZiAoIW1lbnVzIHx8IG1lbnVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIG1lbnVzLnBvcCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBydW5Ib29rKG1ldGhvZDogc3RyaW5nLCB1cmw6IHN0cmluZywgY29tcDogYW55KSB7XG4gICAgaWYgKGNvbXAuaW5zdGFuY2UgJiYgdHlwZW9mIGNvbXAuaW5zdGFuY2VbbWV0aG9kXSA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgIGNvbXAuaW5zdGFuY2VbbWV0aG9kXSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNJblZhbGlkUm91dGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpIHtcbiAgICByZXR1cm4gKFxuICAgICAgIXJvdXRlLnJvdXRlQ29uZmlnIHx8XG4gICAgICByb3V0ZS5yb3V0ZUNvbmZpZy5sb2FkQ2hpbGRyZW4gfHxcbiAgICAgIHJvdXRlLnJvdXRlQ29uZmlnLmNoaWxkcmVuXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlhrPlrprmmK/lkKblhYHorrjot6/nlLHlpI3nlKjvvIzoi6UgYHRydWVgIOS8muinpuWPkSBgc3RvcmVgXG4gICAqL1xuICBzaG91bGREZXRhY2gocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5oYXNJblZhbGlkUm91dGUocm91dGUpKSByZXR1cm4gZmFsc2U7XG4gICAgdGhpcy5kaSgnI3Nob3VsZERldGFjaCcsIHRoaXMuY2FuKHJvdXRlKSwgdGhpcy5nZXRVcmwocm91dGUpKTtcbiAgICByZXR1cm4gdGhpcy5jYW4ocm91dGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIOWtmOWCqFxuICAgKi9cbiAgc3RvcmUoX3NuYXBzaG90OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBfaGFuZGxlOiBhbnkpIHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVybChfc25hcHNob3QpO1xuICAgIGNvbnN0IGlkeCA9IHRoaXMuaW5kZXgodXJsKTtcblxuICAgIGNvbnN0IGl0ZW06IFJldXNlVGFiQ2FjaGVkID0ge1xuICAgICAgdGl0bGU6IHRoaXMuZ2V0VGl0bGUodXJsLCBfc25hcHNob3QpLFxuICAgICAgY2xvc2FibGU6IHRoaXMuZ2V0Q2xvc2FibGUodXJsLCBfc25hcHNob3QpLFxuICAgICAgdXJsLFxuICAgICAgX3NuYXBzaG90LFxuICAgICAgX2hhbmRsZSxcbiAgICB9O1xuICAgIGlmIChpZHggPT09IC0xKSB7XG4gICAgICB0aGlzLl9jYWNoZWQucHVzaChpdGVtKTtcbiAgICAgIGlmICh0aGlzLmNvdW50ID4gdGhpcy5fbWF4KSB0aGlzLl9jYWNoZWQuc2hpZnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY2FjaGVkW2lkeF0gPSBpdGVtO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZVVybEJ1ZmZlciA9IG51bGw7XG5cbiAgICB0aGlzLmRpKCcjc3RvcmUnLCBpZHggPT09IC0xID8gJ1tuZXddJyA6ICdbb3ZlcnJpZGVdJywgdXJsKTtcblxuICAgIGlmIChfaGFuZGxlICYmIF9oYW5kbGUuY29tcG9uZW50UmVmKSB7XG4gICAgICB0aGlzLnJ1bkhvb2soJ19vblJldXNlRGVzdHJveScsIHVybCwgX2hhbmRsZS5jb21wb25lbnRSZWYpO1xuICAgIH1cblxuICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHsgYWN0aXZlOiAnYWRkJywgaXRlbSwgbGlzdDogdGhpcy5fY2FjaGVkIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOWGs+WumuaYr+WQpuWFgeiuuOW6lOeUqOe8k+WtmOaVsOaNrlxuICAgKi9cbiAgc2hvdWxkQXR0YWNoKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaGFzSW5WYWxpZFJvdXRlKHJvdXRlKSkgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXJsKHJvdXRlKTtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5nZXQodXJsKTtcbiAgICBjb25zdCByZXQgPSAhIShkYXRhICYmIGRhdGEuX2hhbmRsZSk7XG4gICAgdGhpcy5kaSgnI3Nob3VsZEF0dGFjaCcsIHJldCwgdXJsKTtcbiAgICBpZiAocmV0ICYmIGRhdGEuX2hhbmRsZS5jb21wb25lbnRSZWYpIHtcbiAgICAgIHRoaXMucnVuSG9vaygnX29uUmV1c2VJbml0JywgdXJsLCBkYXRhLl9oYW5kbGUuY29tcG9uZW50UmVmKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiDmj5Dlj5blpI3nlKjmlbDmja5cbiAgICovXG4gIHJldHJpZXZlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KToge30ge1xuICAgIGlmICh0aGlzLmhhc0luVmFsaWRSb3V0ZShyb3V0ZSkpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXJsKHJvdXRlKTtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5nZXQodXJsKTtcbiAgICBjb25zdCByZXQgPSAoZGF0YSAmJiBkYXRhLl9oYW5kbGUpIHx8IG51bGw7XG4gICAgdGhpcy5kaSgnI3JldHJpZXZlJywgdXJsLCByZXQpO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICog5Yaz5a6a5piv5ZCm5bqU6K+l6L+b6KGM5aSN55So6Lev55Sx5aSE55CGXG4gICAqL1xuICBzaG91bGRSZXVzZVJvdXRlKFxuICAgIGZ1dHVyZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBjdXJyOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICApOiBib29sZWFuIHtcbiAgICBsZXQgcmV0ID0gZnV0dXJlLnJvdXRlQ29uZmlnID09PSBjdXJyLnJvdXRlQ29uZmlnO1xuICAgIGlmICghcmV0KSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBwYXRoID0gKChmdXR1cmUucm91dGVDb25maWcgJiYgZnV0dXJlLnJvdXRlQ29uZmlnLnBhdGgpIHx8XG4gICAgICAnJykgYXMgc3RyaW5nO1xuICAgIGlmIChwYXRoLmxlbmd0aCA+IDAgJiYgfnBhdGguaW5kZXhPZignOicpKSB7XG4gICAgICBjb25zdCBmdXR1cmVVcmwgPSB0aGlzLmdldFVybChmdXR1cmUpO1xuICAgICAgY29uc3QgY3VyclVybCA9IHRoaXMuZ2V0VXJsKGN1cnIpO1xuICAgICAgcmV0ID0gZnV0dXJlVXJsID09PSBjdXJyVXJsO1xuICAgIH1cbiAgICB0aGlzLmRpKCc9PT09PT09PT09PT09PT09PT09PT0nKTtcbiAgICB0aGlzLmRpKFxuICAgICAgJyNzaG91bGRSZXVzZVJvdXRlJyxcbiAgICAgIHJldCxcbiAgICAgIGAke3RoaXMuZ2V0VXJsKGN1cnIpfT0+JHt0aGlzLmdldFVybChmdXR1cmUpfWAsXG4gICAgICBmdXR1cmUsXG4gICAgICBjdXJyLFxuICAgICk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2NhY2hlZCA9IFtdO1xuICAgIHRoaXMuX2NhY2hlZENoYW5nZS51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=