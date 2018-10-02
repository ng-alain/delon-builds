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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3JldXNlLXRhYi8iLCJzb3VyY2VzIjpbInJldXNlLXRhYi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFhLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBRUwsY0FBYyxFQUNkLE1BQU0sR0FDUCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBYyxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMzQyxPQUFPLEVBRUwsaUJBQWlCLEdBR2xCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7O0FBUWhDLE1BQU07Ozs7O0lBNlVKLFlBQW9CLFFBQWtCLEVBQVUsV0FBd0I7UUFBcEQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO29CQTVVekQsRUFBRTtzQkFDQSxLQUFLO3FCQUNOLGlCQUFpQixDQUFDLElBQUk7eUJBQ1IsRUFBRTs2QkFHNUIsSUFBSSxlQUFlLENBQWlCLElBQUksQ0FBQzt1QkFDVCxFQUFFOzRCQUNnQixFQUFFOytCQUNGLEVBQUU7S0FtVW9COzs7OztJQTdUNUUsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ2hFOzs7Ozs7SUFHRCxJQUFJLEdBQUcsQ0FBQyxLQUFhO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM5QyxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FB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RTs7OztZQXBCRixRQUFRO1lBTy9CLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3ksIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcclxuICBBY3RpdmF0ZWRSb3V0ZSxcclxuICBSb3V0ZXIsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE1lbnVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcclxuaW1wb3J0IHtcclxuICBSZXVzZVRhYkNhY2hlZCxcclxuICBSZXVzZVRhYk1hdGNoTW9kZSxcclxuICBSZXVzZVRhYk5vdGlmeSxcclxuICBSZXVzZVRpdGxlLFxyXG59IGZyb20gJy4vcmV1c2UtdGFiLmludGVyZmFjZXMnO1xyXG5cclxuLyoqXHJcbiAqIOi3r+eUseWkjeeUqOexu++8jOaPkOS+m+WkjeeUqOaJgOmcgOimgeS4gOS6m+WfuuacrOaOpeWPo1xyXG4gKlxyXG4gKiAqKuazqO+8mioqIOaJgOaciee8k+WtmOaVsOaNruadpea6kOS6jui3r+eUseemu+W8gOWQjuaJjeS8muS6p+eUn1xyXG4gKi9cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIFJldXNlVGFiU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBfbWF4ID0gMTA7XHJcbiAgcHJpdmF0ZSBfZGVidWcgPSBmYWxzZTtcclxuICBwcml2YXRlIF9tb2RlID0gUmV1c2VUYWJNYXRjaE1vZGUuTWVudTtcclxuICBwcml2YXRlIF9leGNsdWRlczogUmVnRXhwW10gPSBbXTtcclxuICBwcml2YXRlIF9jYWNoZWRDaGFuZ2U6IEJlaGF2aW9yU3ViamVjdDxcclxuICAgIFJldXNlVGFiTm90aWZ5XHJcbiAgPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8UmV1c2VUYWJOb3RpZnk+KG51bGwpO1xyXG4gIHByaXZhdGUgX2NhY2hlZDogUmV1c2VUYWJDYWNoZWRbXSA9IFtdO1xyXG4gIHByaXZhdGUgX3RpdGxlQ2FjaGVkOiB7IFt1cmw6IHN0cmluZ106IFJldXNlVGl0bGUgfSA9IHt9O1xyXG4gIHByaXZhdGUgX2Nsb3NhYmxlQ2FjaGVkOiB7IFt1cmw6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xyXG4gIHByaXZhdGUgcmVtb3ZlVXJsQnVmZmVyOiBzdHJpbmc7XHJcblxyXG4gIC8vIHJlZ2lvbjogcHVibGljXHJcblxyXG4gIC8qKiDlvZPliY3ot6/nlLHlnLDlnYAgKi9cclxuICBnZXQgY3VyVXJsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0VXJsKHRoaXMuaW5qZWN0b3IuZ2V0KEFjdGl2YXRlZFJvdXRlKS5zbmFwc2hvdCk7XHJcbiAgfVxyXG5cclxuICAvKiog5YWB6K645pyA5aSa5aSN55So5aSa5bCR5Liq6aG16Z2i77yM5Y+W5YC86IyD5Zu0IGAyLTEwMGAgKi9cclxuICBzZXQgbWF4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX21heCA9IE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCAyKSwgMTAwKTtcclxuICAgIGZvciAobGV0IGkgPSB0aGlzLl9jYWNoZWQubGVuZ3RoOyBpID4gdGhpcy5fbWF4OyBpLS0pIHtcclxuICAgICAgdGhpcy5fY2FjaGVkLnBvcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuICAvKiog6K6+572u5Yy56YWN5qih5byPICovXHJcbiAgc2V0IG1vZGUodmFsdWU6IFJldXNlVGFiTWF0Y2hNb2RlKSB7XHJcbiAgICB0aGlzLl9tb2RlID0gdmFsdWU7XHJcbiAgfVxyXG4gIGdldCBtb2RlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX21vZGU7XHJcbiAgfVxyXG4gIC8qKiDorr7nva5EZWJ1Z+aooeW8jyAqL1xyXG4gIHNldCBkZWJ1Zyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fZGVidWcgPSB2YWx1ZTtcclxuICB9XHJcbiAgZ2V0IGRlYnVnKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlYnVnO1xyXG4gIH1cclxuICAvKiog5o6S6Zmk6KeE5YiZ77yM6ZmQIGBtb2RlPVVSTGAgKi9cclxuICBzZXQgZXhjbHVkZXModmFsdWVzOiBSZWdFeHBbXSkge1xyXG4gICAgaWYgKCF2YWx1ZXMpIHJldHVybjtcclxuICAgIHRoaXMuX2V4Y2x1ZGVzID0gdmFsdWVzO1xyXG4gIH1cclxuICBnZXQgZXhjbHVkZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZXhjbHVkZXM7XHJcbiAgfVxyXG4gIC8qKiDojrflj5blt7LnvJPlrZjnmoTot6/nlLEgKi9cclxuICBnZXQgaXRlbXMoKTogUmV1c2VUYWJDYWNoZWRbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVkO1xyXG4gIH1cclxuICAvKiog6I635Y+W5b2T5YmN57yT5a2Y55qE6Lev55Sx5oC75pWwICovXHJcbiAgZ2V0IGNvdW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZC5sZW5ndGg7XHJcbiAgfVxyXG4gIC8qKiDorqLpmIXnvJPlrZjlj5jmm7TpgJrnn6UgKi9cclxuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8UmV1c2VUYWJOb3RpZnk+IHtcclxuICAgIHJldHVybiB0aGlzLl9jYWNoZWRDaGFuZ2UuYXNPYnNlcnZhYmxlKCk7IC8vIC5waXBlKGZpbHRlcih3ID0+IHcgIT09IG51bGwpKTtcclxuICB9XHJcbiAgLyoqIOiHquWumuS5ieW9k+WJjeagh+mimCAqL1xyXG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgUmV1c2VUaXRsZSkge1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5jdXJVcmw7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykgdmFsdWUgPSB7IHRleHQ6IHZhbHVlIH07XHJcbiAgICB0aGlzLl90aXRsZUNhY2hlZFt1cmxdID0gdmFsdWU7XHJcbiAgICB0aGlzLmRpKCd1cGRhdGUgY3VycmVudCB0YWcgdGl0bGU6ICcsIHZhbHVlKTtcclxuICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHtcclxuICAgICAgYWN0aXZlOiAndGl0bGUnLFxyXG4gICAgICB0aXRsZTogdmFsdWUsXHJcbiAgICAgIGxpc3Q6IHRoaXMuX2NhY2hlZCxcclxuICAgIH0pO1xyXG4gIH1cclxuICAvKiog6I635Y+W5oyH5a6a6Lev5b6E57yT5a2Y5omA5Zyo5L2N572u77yMYC0xYCDooajnpLrml6DnvJPlrZggKi9cclxuICBpbmRleCh1cmw6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVkLmZpbmRJbmRleCh3ID0+IHcudXJsID09PSB1cmwpO1xyXG4gIH1cclxuICAvKiog6I635Y+W5oyH5a6a6Lev5b6E57yT5a2Y5piv5ZCm5a2Y5ZyoICovXHJcbiAgZXhpc3RzKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pbmRleCh1cmwpICE9PSAtMTtcclxuICB9XHJcbiAgLyoqIOiOt+WPluaMh+Wumui3r+W+hOe8k+WtmCAqL1xyXG4gIGdldCh1cmw6IHN0cmluZyk6IFJldXNlVGFiQ2FjaGVkIHtcclxuICAgIHJldHVybiB1cmwgPyB0aGlzLl9jYWNoZWQuZmluZCh3ID0+IHcudXJsID09PSB1cmwpIHx8IG51bGwgOiBudWxsO1xyXG4gIH1cclxuICBwcml2YXRlIHJlbW92ZSh1cmw6IHN0cmluZyB8IG51bWJlciwgaW5jbHVkZU5vbkNsb3NlYWJsZTogYm9vbGVhbik6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgaWR4ID0gdHlwZW9mIHVybCA9PT0gJ3N0cmluZycgPyB0aGlzLmluZGV4KHVybCkgOiB1cmw7XHJcbiAgICBjb25zdCBpdGVtID0gaWR4ICE9PSAtMSA/IHRoaXMuX2NhY2hlZFtpZHhdIDogbnVsbDtcclxuICAgIGlmICghaXRlbSB8fCAoIWluY2x1ZGVOb25DbG9zZWFibGUgJiYgIWl0ZW0uY2xvc2FibGUpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5kZXN0cm95KGl0ZW0uX2hhbmRsZSk7XHJcblxyXG4gICAgdGhpcy5fY2FjaGVkLnNwbGljZShpZHgsIDEpO1xyXG4gICAgZGVsZXRlIHRoaXMuX3RpdGxlQ2FjaGVkW3VybF07XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICog5qC55o2uVVJM56e76Zmk5qCH562+XHJcbiAgICpcclxuICAgKiBAcGFyYW0gW2luY2x1ZGVOb25DbG9zZWFibGU9ZmFsc2VdIOaYr+WQpuW8uuWItuWMheWQq+S4jeWPr+WFs+mXrVxyXG4gICAqL1xyXG4gIGNsb3NlKHVybDogc3RyaW5nLCBpbmNsdWRlTm9uQ2xvc2VhYmxlID0gZmFsc2UpIHtcclxuICAgIHRoaXMucmVtb3ZlVXJsQnVmZmVyID0gdXJsO1xyXG5cclxuICAgIHRoaXMucmVtb3ZlKHVybCwgaW5jbHVkZU5vbkNsb3NlYWJsZSk7XHJcblxyXG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoeyBhY3RpdmU6ICdjbG9zZScsIHVybCwgbGlzdDogdGhpcy5fY2FjaGVkIH0pO1xyXG5cclxuICAgIHRoaXMuZGkoJ2Nsb3NlIHRhZycsIHVybCk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICog5riF6Zmk5Y+z6L65XHJcbiAgICpcclxuICAgKiBAcGFyYW0gW2luY2x1ZGVOb25DbG9zZWFibGU9ZmFsc2VdIOaYr+WQpuW8uuWItuWMheWQq+S4jeWPr+WFs+mXrVxyXG4gICAqL1xyXG4gIGNsb3NlUmlnaHQodXJsOiBzdHJpbmcsIGluY2x1ZGVOb25DbG9zZWFibGUgPSBmYWxzZSkge1xyXG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLmluZGV4KHVybCk7XHJcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jb3VudCAtIDE7IGkgPiBzdGFydDsgaS0tKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlKGksIGluY2x1ZGVOb25DbG9zZWFibGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVtb3ZlVXJsQnVmZmVyID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7IGFjdGl2ZTogJ2Nsb3NlUmlnaHQnLCB1cmwsIGxpc3Q6IHRoaXMuX2NhY2hlZCB9KTtcclxuXHJcbiAgICB0aGlzLmRpKCdjbG9zZSByaWdodCB0YWdlcycsIHVybCk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICog5riF6Zmk5omA5pyJ57yT5a2YXHJcbiAgICpcclxuICAgKiBAcGFyYW0gW2luY2x1ZGVOb25DbG9zZWFibGU9ZmFsc2VdIOaYr+WQpuW8uuWItuWMheWQq+S4jeWPr+WFs+mXrVxyXG4gICAqL1xyXG4gIGNsZWFyKGluY2x1ZGVOb25DbG9zZWFibGUgPSBmYWxzZSkge1xyXG4gICAgdGhpcy5fY2FjaGVkLmZvckVhY2godyA9PiB7XHJcbiAgICAgIGlmICghaW5jbHVkZU5vbkNsb3NlYWJsZSAmJiB3LmNsb3NhYmxlKSB0aGlzLmRlc3Ryb3kody5faGFuZGxlKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fY2FjaGVkID0gdGhpcy5fY2FjaGVkLmZpbHRlcihcclxuICAgICAgdyA9PiAhaW5jbHVkZU5vbkNsb3NlYWJsZSAmJiAhdy5jbG9zYWJsZSxcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5yZW1vdmVVcmxCdWZmZXIgPSBudWxsO1xyXG5cclxuICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHsgYWN0aXZlOiAnY2xlYXInLCBsaXN0OiB0aGlzLl9jYWNoZWQgfSk7XHJcblxyXG4gICAgdGhpcy5kaSgnY2xlYXIgYWxsIGNhdGNoJyk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIOenu+WKqOe8k+WtmOaVsOaNrlxyXG4gICAqIEBwYXJhbSB1cmwg6KaB56e75Yqo55qEVVJM5Zyw5Z2AXHJcbiAgICogQHBhcmFtIHBvc2l0aW9uIOaWsOS9jee9ru+8jOS4i+agh+S7jiBgMGAg5byA5aeLXHJcbiAgICpcclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIGBgYFxyXG4gICAqIC8vIHNvdXJjZVxyXG4gICAqIFsgJy9hLzEnLCAnL2EvMicsICcvYS8zJywgJy9hLzQnLCAnL2EvNScgXVxyXG4gICAqIG1vdmUoJy9hLzEnLCAyKTtcclxuICAgKiAvLyBvdXRwdXRcclxuICAgKiBbICcvYS8yJywgJy9hLzMnLCAnL2EvMScsICcvYS80JywgJy9hLzUnIF1cclxuICAgKiBtb3ZlKCcvYS8xJywgLTEpO1xyXG4gICAqIC8vIG91dHB1dFxyXG4gICAqIFsgJy9hLzInLCAnL2EvMycsICcvYS80JywgJy9hLzUnLCAnL2EvMScgXVxyXG4gICAqIGBgYFxyXG4gICAqL1xyXG4gIG1vdmUodXJsOiBzdHJpbmcsIHBvc2l0aW9uOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5fY2FjaGVkLmZpbmRJbmRleCh3ID0+IHcudXJsID09PSB1cmwpO1xyXG4gICAgaWYgKHN0YXJ0ID09PSAtMSkgcmV0dXJuO1xyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX2NhY2hlZC5zbGljZSgpO1xyXG4gICAgZGF0YS5zcGxpY2UoXHJcbiAgICAgIHBvc2l0aW9uIDwgMCA/IGRhdGEubGVuZ3RoICsgcG9zaXRpb24gOiBwb3NpdGlvbixcclxuICAgICAgMCxcclxuICAgICAgZGF0YS5zcGxpY2Uoc3RhcnQsIDEpWzBdLFxyXG4gICAgKTtcclxuICAgIHRoaXMuX2NhY2hlZCA9IGRhdGE7XHJcbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7XHJcbiAgICAgIGFjdGl2ZTogJ21vdmUnLFxyXG4gICAgICB1cmwsXHJcbiAgICAgIHBvc2l0aW9uLFxyXG4gICAgICBsaXN0OiB0aGlzLl9jYWNoZWQsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICog5by65Yi25YWz6Zet5b2T5YmN6Lev55Sx77yI5YyF5ZCr5LiN5Y+v5YWz6Zet54q25oCB77yJ77yM5bm26YeN5paw5a+86Iiq6IezIGBuZXdVcmxgIOi3r+eUsVxyXG4gICAqL1xyXG4gIHJlcGxhY2UobmV3VXJsOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMuY3VyVXJsO1xyXG4gICAgaWYgKHRoaXMuZXhpc3RzKHVybCkpIHtcclxuICAgICAgdGhpcy5jbG9zZSh1cmwsIHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW1vdmVVcmxCdWZmZXIgPSB1cmw7XHJcbiAgICB9XHJcbiAgICB0aGlzLmluamVjdG9yLmdldChSb3V0ZXIpLm5hdmlnYXRlQnlVcmwobmV3VXJsKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICog6I635Y+W5qCH6aKY77yM6aG65bqP5aaC5LiL77yaXHJcbiAgICpcclxuICAgKiAxLiDnu4Tku7blhoXkvb/nlKggYFJldXNlVGFiU2VydmljZS50aXRsZSA9ICduZXcgdGl0bGUnYCDph43mlrDmjIflrprmlofmnKxcclxuICAgKiAyLiDot6/nlLHphY3nva7kuK0gZGF0YSDlsZ7mgKfkuK3ljIXlkKsgdGl0bGVJMThuID4gdGl0bGVcclxuICAgKiAzLiDoj5zljZXmlbDmja7kuK0gdGV4dCDlsZ7mgKdcclxuICAgKlxyXG4gICAqIEBwYXJhbSB1cmwg5oyH5a6aVVJMXHJcbiAgICogQHBhcmFtIHJvdXRlIOaMh+Wumui3r+eUseW/q+eFp1xyXG4gICAqL1xyXG4gIGdldFRpdGxlKHVybDogc3RyaW5nLCByb3V0ZT86IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBSZXVzZVRpdGxlIHtcclxuICAgIGlmICh0aGlzLl90aXRsZUNhY2hlZFt1cmxdKSByZXR1cm4gdGhpcy5fdGl0bGVDYWNoZWRbdXJsXTtcclxuXHJcbiAgICBpZiAocm91dGUgJiYgcm91dGUuZGF0YSAmJiAocm91dGUuZGF0YS50aXRsZUkxOG4gfHwgcm91dGUuZGF0YS50aXRsZSkpXHJcbiAgICAgIHJldHVybiA8UmV1c2VUaXRsZT57XHJcbiAgICAgICAgdGV4dDogcm91dGUuZGF0YS50aXRsZSxcclxuICAgICAgICBpMThuOiByb3V0ZS5kYXRhLnRpdGxlSTE4bixcclxuICAgICAgfTtcclxuXHJcbiAgICBjb25zdCBtZW51ID1cclxuICAgICAgdGhpcy5tb2RlICE9PSBSZXVzZVRhYk1hdGNoTW9kZS5VUkwgPyB0aGlzLmdldE1lbnUodXJsKSA6IG51bGw7XHJcbiAgICByZXR1cm4gbWVudSA/IHsgdGV4dDogbWVudS50ZXh0LCBpMThuOiBtZW51LmkxOG4gfSA6IHsgdGV4dDogdXJsIH07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmuIXpmaTmoIfpopjnvJPlrZhcclxuICAgKi9cclxuICBjbGVhclRpdGxlQ2FjaGVkKCkge1xyXG4gICAgdGhpcy5fdGl0bGVDYWNoZWQgPSB7fTtcclxuICB9XHJcbiAgLyoqIOiHquWumuS5ieW9k+WJjSBgY2xvc2FibGVgIOeKtuaAgSAqL1xyXG4gIHNldCBjbG9zYWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5jdXJVcmw7XHJcbiAgICB0aGlzLl9jbG9zYWJsZUNhY2hlZFt1cmxdID0gdmFsdWU7XHJcbiAgICB0aGlzLmRpKCd1cGRhdGUgY3VycmVudCB0YWcgY2xvc2FibGU6ICcsIHZhbHVlKTtcclxuICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHtcclxuICAgICAgYWN0aXZlOiAnY2xvc2FibGUnLFxyXG4gICAgICBjbG9zYWJsZTogdmFsdWUsXHJcbiAgICAgIGxpc3Q6IHRoaXMuX2NhY2hlZCxcclxuICAgIH0pO1xyXG4gIH1cclxuICAvKipcclxuICAgKiDojrflj5YgYGNsb3NhYmxlYCDnirbmgIHvvIzpobrluo/lpoLkuIvvvJpcclxuICAgKlxyXG4gICAqIDEuIOe7hOS7tuWGheS9v+eUqCBgUmV1c2VUYWJTZXJ2aWNlLmNsb3NhYmxlID0gdHJ1ZWAg6YeN5paw5oyH5a6aIGBjbG9zYWJsZWAg54q25oCBXHJcbiAgICogMi4g6Lev55Sx6YWN572u5LitIGRhdGEg5bGe5oCn5Lit5YyF5ZCrIGByZXVzZUNsb3NhYmxlYFxyXG4gICAqIDMuIOiPnOWNleaVsOaNruS4rSBgcmV1c2VDbG9zYWJsZWAg5bGe5oCnXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdXJsIOaMh+WumlVSTFxyXG4gICAqIEBwYXJhbSByb3V0ZSDmjIflrprot6/nlLHlv6vnhadcclxuICAgKi9cclxuICBnZXRDbG9zYWJsZSh1cmw6IHN0cmluZywgcm91dGU/OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMuX2Nsb3NhYmxlQ2FjaGVkW3VybF0gIT09ICd1bmRlZmluZWQnKVxyXG4gICAgICByZXR1cm4gdGhpcy5fY2xvc2FibGVDYWNoZWRbdXJsXTtcclxuXHJcbiAgICBpZiAocm91dGUgJiYgcm91dGUuZGF0YSAmJiB0eXBlb2Ygcm91dGUuZGF0YS5yZXVzZUNsb3NhYmxlID09PSAnYm9vbGVhbicpXHJcbiAgICAgIHJldHVybiByb3V0ZS5kYXRhLnJldXNlQ2xvc2FibGU7XHJcblxyXG4gICAgY29uc3QgbWVudSA9XHJcbiAgICAgIHRoaXMubW9kZSAhPT0gUmV1c2VUYWJNYXRjaE1vZGUuVVJMID8gdGhpcy5nZXRNZW51KHVybCkgOiBudWxsO1xyXG4gICAgaWYgKG1lbnUgJiYgdHlwZW9mIG1lbnUucmV1c2VDbG9zYWJsZSA9PT0gJ2Jvb2xlYW4nKVxyXG4gICAgICByZXR1cm4gbWVudS5yZXVzZUNsb3NhYmxlO1xyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICAvKipcclxuICAgKiDmuIXnqbogYGNsb3NhYmxlYCDnvJPlrZhcclxuICAgKi9cclxuICBjbGVhckNsb3NhYmxlQ2FjaGVkKCkge1xyXG4gICAgdGhpcy5fY2xvc2FibGVDYWNoZWQgPSB7fTtcclxuICB9XHJcbiAgZ2V0VHJ1dGhSb3V0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCkge1xyXG4gICAgbGV0IG5leHQgPSByb3V0ZTtcclxuICAgIHdoaWxlIChuZXh0LmZpcnN0Q2hpbGQpIG5leHQgPSBuZXh0LmZpcnN0Q2hpbGQ7XHJcbiAgICByZXR1cm4gbmV4dDtcclxuICB9XHJcbiAgLyoqXHJcbiAgICog5qC55o2u5b+r54Wn6I635Y+WVVJM5Zyw5Z2AXHJcbiAgICovXHJcbiAgZ2V0VXJsKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogc3RyaW5nIHtcclxuICAgIGxldCBuZXh0ID0gdGhpcy5nZXRUcnV0aFJvdXRlKHJvdXRlKTtcclxuICAgIGNvbnN0IHNlZ21lbnRzID0gW107XHJcbiAgICB3aGlsZSAobmV4dCkge1xyXG4gICAgICBzZWdtZW50cy5wdXNoKG5leHQudXJsLmpvaW4oJy8nKSk7XHJcbiAgICAgIG5leHQgPSBuZXh0LnBhcmVudDtcclxuICAgIH1cclxuICAgIGNvbnN0IHVybCA9XHJcbiAgICAgICcvJyArXHJcbiAgICAgIHNlZ21lbnRzXHJcbiAgICAgICAgLmZpbHRlcihpID0+IGkpXHJcbiAgICAgICAgLnJldmVyc2UoKVxyXG4gICAgICAgIC5qb2luKCcvJyk7XHJcbiAgICByZXR1cm4gdXJsO1xyXG4gIH1cclxuICAvKipcclxuICAgKiDmo4Dmn6Xlv6vnhafmmK/lkKblhYHorrjooqvlpI3nlKhcclxuICAgKi9cclxuICBjYW4ocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXJsKHJvdXRlKTtcclxuICAgIGlmICh1cmwgPT09IHRoaXMucmVtb3ZlVXJsQnVmZmVyKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgaWYgKHJvdXRlLmRhdGEgJiYgdHlwZW9mIHJvdXRlLmRhdGEucmV1c2UgPT09ICdib29sZWFuJylcclxuICAgICAgcmV0dXJuIHJvdXRlLmRhdGEucmV1c2U7XHJcblxyXG4gICAgaWYgKHRoaXMubW9kZSAhPT0gUmV1c2VUYWJNYXRjaE1vZGUuVVJMKSB7XHJcbiAgICAgIGNvbnN0IG1lbnUgPSB0aGlzLmdldE1lbnUodXJsKTtcclxuICAgICAgaWYgKCFtZW51KSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIGlmICh0aGlzLm1vZGUgPT09IFJldXNlVGFiTWF0Y2hNb2RlLk1lbnUpIHtcclxuICAgICAgICBpZiAobWVudS5yZXVzZSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIW1lbnUucmV1c2UgfHwgbWVudS5yZXVzZSAhPT0gdHJ1ZSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX2V4Y2x1ZGVzLmZpbmRJbmRleChyID0+IHIudGVzdCh1cmwpKSA9PT0gLTE7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIOWIt+aWsO+8jOinpuWPkeS4gOS4qiByZWZyZXNoIOexu+Wei+S6i+S7tlxyXG4gICAqL1xyXG4gIHJlZnJlc2goZGF0YT86IGFueSkge1xyXG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoeyBhY3RpdmU6ICdyZWZyZXNoJywgZGF0YSB9KTtcclxuICB9XHJcbiAgLy8gZW5kcmVnaW9uXHJcblxyXG4gIC8vIHJlZ2lvbjogcHJpdmF0ZXNcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95KF9oYW5kbGU6IGFueSkge1xyXG4gICAgaWYgKF9oYW5kbGUgJiYgX2hhbmRsZS5jb21wb25lbnRSZWYgJiYgX2hhbmRsZS5jb21wb25lbnRSZWYuZGVzdHJveSlcclxuICAgICAgX2hhbmRsZS5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkaSguLi5hcmdzKSB7XHJcbiAgICBpZiAoIXRoaXMuZGVidWcpIHJldHVybjtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXHJcbiAgICBjb25zb2xlLndhcm4oLi4uYXJncyk7XHJcbiAgfVxyXG5cclxuICAvLyBlbmRyZWdpb25cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgbWVudVNlcnZpY2U6IE1lbnVTZXJ2aWNlKSB7fVxyXG5cclxuICBwcml2YXRlIGdldE1lbnUodXJsOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IG1lbnVzID0gdGhpcy5tZW51U2VydmljZS5nZXRQYXRoQnlVcmwodXJsKTtcclxuICAgIGlmICghbWVudXMgfHwgbWVudXMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcclxuICAgIHJldHVybiBtZW51cy5wb3AoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcnVuSG9vayhtZXRob2Q6IHN0cmluZywgdXJsOiBzdHJpbmcsIGNvbXA6IGFueSkge1xyXG4gICAgaWYgKGNvbXAuaW5zdGFuY2UgJiYgdHlwZW9mIGNvbXAuaW5zdGFuY2VbbWV0aG9kXSA9PT0gJ2Z1bmN0aW9uJylcclxuICAgICAgY29tcC5pbnN0YW5jZVttZXRob2RdKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhc0luVmFsaWRSb3V0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgIXJvdXRlLnJvdXRlQ29uZmlnIHx8XHJcbiAgICAgIHJvdXRlLnJvdXRlQ29uZmlnLmxvYWRDaGlsZHJlbiB8fFxyXG4gICAgICByb3V0ZS5yb3V0ZUNvbmZpZy5jaGlsZHJlblxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWGs+WumuaYr+WQpuWFgeiuuOi3r+eUseWkjeeUqO+8jOiLpSBgdHJ1ZWAg5Lya6Kem5Y+RIGBzdG9yZWBcclxuICAgKi9cclxuICBzaG91bGREZXRhY2gocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmhhc0luVmFsaWRSb3V0ZShyb3V0ZSkpIHJldHVybiBmYWxzZTtcclxuICAgIHRoaXMuZGkoJyNzaG91bGREZXRhY2gnLCB0aGlzLmNhbihyb3V0ZSksIHRoaXMuZ2V0VXJsKHJvdXRlKSk7XHJcbiAgICByZXR1cm4gdGhpcy5jYW4ocm91dGUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5a2Y5YKoXHJcbiAgICovXHJcbiAgc3RvcmUoX3NuYXBzaG90OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBfaGFuZGxlOiBhbnkpIHtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXJsKF9zbmFwc2hvdCk7XHJcbiAgICBjb25zdCBpZHggPSB0aGlzLmluZGV4KHVybCk7XHJcblxyXG4gICAgY29uc3QgaXRlbTogUmV1c2VUYWJDYWNoZWQgPSB7XHJcbiAgICAgIHRpdGxlOiB0aGlzLmdldFRpdGxlKHVybCwgX3NuYXBzaG90KSxcclxuICAgICAgY2xvc2FibGU6IHRoaXMuZ2V0Q2xvc2FibGUodXJsLCBfc25hcHNob3QpLFxyXG4gICAgICB1cmwsXHJcbiAgICAgIF9zbmFwc2hvdCxcclxuICAgICAgX2hhbmRsZSxcclxuICAgIH07XHJcbiAgICBpZiAoaWR4ID09PSAtMSkge1xyXG4gICAgICB0aGlzLl9jYWNoZWQucHVzaChpdGVtKTtcclxuICAgICAgaWYgKHRoaXMuY291bnQgPiB0aGlzLl9tYXgpIHRoaXMuX2NhY2hlZC5zaGlmdCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fY2FjaGVkW2lkeF0gPSBpdGVtO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZW1vdmVVcmxCdWZmZXIgPSBudWxsO1xyXG5cclxuICAgIHRoaXMuZGkoJyNzdG9yZScsIGlkeCA9PT0gLTEgPyAnW25ld10nIDogJ1tvdmVycmlkZV0nLCB1cmwpO1xyXG5cclxuICAgIGlmIChfaGFuZGxlICYmIF9oYW5kbGUuY29tcG9uZW50UmVmKSB7XHJcbiAgICAgIHRoaXMucnVuSG9vaygnX29uUmV1c2VEZXN0cm95JywgdXJsLCBfaGFuZGxlLmNvbXBvbmVudFJlZik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoeyBhY3RpdmU6ICdhZGQnLCBpdGVtLCBsaXN0OiB0aGlzLl9jYWNoZWQgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlhrPlrprmmK/lkKblhYHorrjlupTnlKjnvJPlrZjmlbDmja5cclxuICAgKi9cclxuICBzaG91bGRBdHRhY2gocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmhhc0luVmFsaWRSb3V0ZShyb3V0ZSkpIHJldHVybiBmYWxzZTtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXJsKHJvdXRlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldCh1cmwpO1xyXG4gICAgY29uc3QgcmV0ID0gISEoZGF0YSAmJiBkYXRhLl9oYW5kbGUpO1xyXG4gICAgdGhpcy5kaSgnI3Nob3VsZEF0dGFjaCcsIHJldCwgdXJsKTtcclxuICAgIGlmIChyZXQgJiYgZGF0YS5faGFuZGxlLmNvbXBvbmVudFJlZikge1xyXG4gICAgICB0aGlzLnJ1bkhvb2soJ19vblJldXNlSW5pdCcsIHVybCwgZGF0YS5faGFuZGxlLmNvbXBvbmVudFJlZik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5o+Q5Y+W5aSN55So5pWw5o2uXHJcbiAgICovXHJcbiAgcmV0cmlldmUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiB7fSB7XHJcbiAgICBpZiAodGhpcy5oYXNJblZhbGlkUm91dGUocm91dGUpKSByZXR1cm4gbnVsbDtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXJsKHJvdXRlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldCh1cmwpO1xyXG4gICAgY29uc3QgcmV0ID0gKGRhdGEgJiYgZGF0YS5faGFuZGxlKSB8fCBudWxsO1xyXG4gICAgdGhpcy5kaSgnI3JldHJpZXZlJywgdXJsLCByZXQpO1xyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWGs+WumuaYr+WQpuW6lOivpei/m+ihjOWkjeeUqOi3r+eUseWkhOeQhlxyXG4gICAqL1xyXG4gIHNob3VsZFJldXNlUm91dGUoXHJcbiAgICBmdXR1cmU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXHJcbiAgICBjdXJyOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxyXG4gICk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IHJldCA9IGZ1dHVyZS5yb3V0ZUNvbmZpZyA9PT0gY3Vyci5yb3V0ZUNvbmZpZztcclxuICAgIGlmICghcmV0KSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgcGF0aCA9ICgoZnV0dXJlLnJvdXRlQ29uZmlnICYmIGZ1dHVyZS5yb3V0ZUNvbmZpZy5wYXRoKSB8fFxyXG4gICAgICAnJykgYXMgc3RyaW5nO1xyXG4gICAgaWYgKHBhdGgubGVuZ3RoID4gMCAmJiB+cGF0aC5pbmRleE9mKCc6JykpIHtcclxuICAgICAgY29uc3QgZnV0dXJlVXJsID0gdGhpcy5nZXRVcmwoZnV0dXJlKTtcclxuICAgICAgY29uc3QgY3VyclVybCA9IHRoaXMuZ2V0VXJsKGN1cnIpO1xyXG4gICAgICByZXQgPSBmdXR1cmVVcmwgPT09IGN1cnJVcmw7XHJcbiAgICB9XHJcbiAgICB0aGlzLmRpKCc9PT09PT09PT09PT09PT09PT09PT0nKTtcclxuICAgIHRoaXMuZGkoXHJcbiAgICAgICcjc2hvdWxkUmV1c2VSb3V0ZScsXHJcbiAgICAgIHJldCxcclxuICAgICAgYCR7dGhpcy5nZXRVcmwoY3Vycil9PT4ke3RoaXMuZ2V0VXJsKGZ1dHVyZSl9YCxcclxuICAgICAgZnV0dXJlLFxyXG4gICAgICBjdXJyLFxyXG4gICAgKTtcclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2NhY2hlZCA9IFtdO1xyXG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==