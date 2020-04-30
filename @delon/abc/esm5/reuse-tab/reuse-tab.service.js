/**
 * @fileoverview added by tsickle
 * Generated from: reuse-tab.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __read, __spread } from "tslib";
import { Injectable, Injector } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router, ROUTER_CONFIGURATION, } from '@angular/router';
import { MenuService, ScrollService } from '@delon/theme';
import { BehaviorSubject } from 'rxjs';
import { ReuseTabMatchMode } from './reuse-tab.interfaces';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
/**
 * 路由复用类，提供复用所需要一些基本接口
 *
 * **注：** 所有缓存数据来源于路由离开后才会产生
 */
var ReuseTabService = /** @class */ (function () {
    // #endregion
    function ReuseTabService(injector, menuService) {
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
        this.mode = ReuseTabMatchMode.Menu;
        /**
         * 排除规则，限 `mode=URL`
         */
        this.excludes = [];
    }
    Object.defineProperty(ReuseTabService.prototype, "snapshot", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.injector.get(ActivatedRoute).snapshot;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReuseTabService.prototype, "inited", {
        // #region public
        get: 
        // #region public
        /**
         * @return {?}
         */
        function () {
            return this._inited;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReuseTabService.prototype, "curUrl", {
        /** 当前路由地址 */
        get: /**
         * 当前路由地址
         * @return {?}
         */
        function () {
            return this.getUrl(this.snapshot);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReuseTabService.prototype, "max", {
        /** 允许最多复用多少个页面，取值范围 `2-100`，值发生变更时会强制关闭且忽略可关闭条件 */
        set: /**
         * 允许最多复用多少个页面，取值范围 `2-100`，值发生变更时会强制关闭且忽略可关闭条件
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._max = Math.min(Math.max(value, 2), 100);
            for (var i = this._cached.length; i > this._max; i--) {
                this._cached.pop();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReuseTabService.prototype, "keepingScroll", {
        get: /**
         * @return {?}
         */
        function () {
            return this._keepingScroll;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._keepingScroll = value;
            this.initScroll();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReuseTabService.prototype, "items", {
        /** 获取已缓存的路由 */
        get: /**
         * 获取已缓存的路由
         * @return {?}
         */
        function () {
            return this._cached;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReuseTabService.prototype, "count", {
        /** 获取当前缓存的路由总数 */
        get: /**
         * 获取当前缓存的路由总数
         * @return {?}
         */
        function () {
            return this._cached.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReuseTabService.prototype, "change", {
        /** 订阅缓存变更通知 */
        get: /**
         * 订阅缓存变更通知
         * @return {?}
         */
        function () {
            return this._cachedChange.asObservable(); // .pipe(filter(w => w !== null));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReuseTabService.prototype, "title", {
        /** 自定义当前标题 */
        set: /**
         * 自定义当前标题
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var url = this.curUrl;
            if (typeof value === 'string')
                value = { text: value };
            this._titleCached[url] = value;
            this.di('update current tag title: ', value);
            this._cachedChange.next({
                active: 'title',
                url: url,
                title: value,
                list: this._cached,
            });
        },
        enumerable: true,
        configurable: true
    });
    /** 获取指定路径缓存所在位置，`-1` 表示无缓存 */
    /**
     * 获取指定路径缓存所在位置，`-1` 表示无缓存
     * @param {?} url
     * @return {?}
     */
    ReuseTabService.prototype.index = /**
     * 获取指定路径缓存所在位置，`-1` 表示无缓存
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return this._cached.findIndex((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.url === url; }));
    };
    /** 获取指定路径缓存是否存在 */
    /**
     * 获取指定路径缓存是否存在
     * @param {?} url
     * @return {?}
     */
    ReuseTabService.prototype.exists = /**
     * 获取指定路径缓存是否存在
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return this.index(url) !== -1;
    };
    /** 获取指定路径缓存 */
    /**
     * 获取指定路径缓存
     * @param {?=} url
     * @return {?}
     */
    ReuseTabService.prototype.get = /**
     * 获取指定路径缓存
     * @param {?=} url
     * @return {?}
     */
    function (url) {
        return url ? this._cached.find((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.url === url; })) || null : null;
    };
    /**
     * @private
     * @param {?} url
     * @param {?} includeNonCloseable
     * @return {?}
     */
    ReuseTabService.prototype.remove = /**
     * @private
     * @param {?} url
     * @param {?} includeNonCloseable
     * @return {?}
     */
    function (url, includeNonCloseable) {
        /** @type {?} */
        var idx = typeof url === 'string' ? this.index(url) : url;
        /** @type {?} */
        var item = idx !== -1 ? this._cached[idx] : null;
        if (!item || (!includeNonCloseable && !item.closable))
            return false;
        this.destroy(item._handle);
        this._cached.splice(idx, 1);
        delete this._titleCached[url];
        return true;
    };
    /**
     * 根据URL移除标签
     *
     * @param [includeNonCloseable=false] 是否强制包含不可关闭
     */
    /**
     * 根据URL移除标签
     *
     * @param {?} url
     * @param {?=} includeNonCloseable
     * @return {?}
     */
    ReuseTabService.prototype.close = /**
     * 根据URL移除标签
     *
     * @param {?} url
     * @param {?=} includeNonCloseable
     * @return {?}
     */
    function (url, includeNonCloseable) {
        if (includeNonCloseable === void 0) { includeNonCloseable = false; }
        this.removeUrlBuffer = url;
        this.remove(url, includeNonCloseable);
        this._cachedChange.next({ active: 'close', url: url, list: this._cached });
        this.di('close tag', url);
        return true;
    };
    /**
     * 清除右边
     *
     * @param [includeNonCloseable=false] 是否强制包含不可关闭
     */
    /**
     * 清除右边
     *
     * @param {?} url
     * @param {?=} includeNonCloseable
     * @return {?}
     */
    ReuseTabService.prototype.closeRight = /**
     * 清除右边
     *
     * @param {?} url
     * @param {?=} includeNonCloseable
     * @return {?}
     */
    function (url, includeNonCloseable) {
        if (includeNonCloseable === void 0) { includeNonCloseable = false; }
        /** @type {?} */
        var start = this.index(url);
        for (var i = this.count - 1; i > start; i--) {
            this.remove(i, includeNonCloseable);
        }
        this.removeUrlBuffer = null;
        this._cachedChange.next({ active: 'closeRight', url: url, list: this._cached });
        this.di('close right tages', url);
        return true;
    };
    /**
     * 清除所有缓存
     *
     * @param [includeNonCloseable=false] 是否强制包含不可关闭
     */
    /**
     * 清除所有缓存
     *
     * @param {?=} includeNonCloseable
     * @return {?}
     */
    ReuseTabService.prototype.clear = /**
     * 清除所有缓存
     *
     * @param {?=} includeNonCloseable
     * @return {?}
     */
    function (includeNonCloseable) {
        var _this = this;
        if (includeNonCloseable === void 0) { includeNonCloseable = false; }
        this._cached.forEach((/**
         * @param {?} w
         * @return {?}
         */
        function (w) {
            if (!includeNonCloseable && w.closable)
                _this.destroy(w._handle);
        }));
        this._cached = this._cached.filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return !includeNonCloseable && !w.closable; }));
        this.removeUrlBuffer = null;
        this._cachedChange.next({ active: 'clear', list: this._cached });
        this.di('clear all catch');
    };
    /**
     * 移动缓存数据
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
    ReuseTabService.prototype.move = /**
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
    function (url, position) {
        /** @type {?} */
        var start = this._cached.findIndex((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.url === url; }));
        if (start === -1)
            return;
        /** @type {?} */
        var data = this._cached.slice();
        data.splice(position < 0 ? data.length + position : position, 0, data.splice(start, 1)[0]);
        this._cached = data;
        this._cachedChange.next({
            active: 'move',
            url: url,
            position: position,
            list: this._cached,
        });
    };
    /**
     * 强制关闭当前路由（包含不可关闭状态），并重新导航至 `newUrl` 路由
     */
    /**
     * 强制关闭当前路由（包含不可关闭状态），并重新导航至 `newUrl` 路由
     * @param {?} newUrl
     * @return {?}
     */
    ReuseTabService.prototype.replace = /**
     * 强制关闭当前路由（包含不可关闭状态），并重新导航至 `newUrl` 路由
     * @param {?} newUrl
     * @return {?}
     */
    function (newUrl) {
        /** @type {?} */
        var url = this.curUrl;
        if (this.exists(url)) {
            this.close(url, true);
        }
        else {
            this.removeUrlBuffer = url;
        }
        this.injector.get(Router).navigateByUrl(newUrl);
    };
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
    ReuseTabService.prototype.getTitle = /**
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
    function (url, route) {
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
        var menu = this.getMenu(url);
        return menu ? { text: menu.text, i18n: menu.i18n } : { text: url };
    };
    /**
     * 清除标题缓存
     */
    /**
     * 清除标题缓存
     * @return {?}
     */
    ReuseTabService.prototype.clearTitleCached = /**
     * 清除标题缓存
     * @return {?}
     */
    function () {
        this._titleCached = {};
    };
    Object.defineProperty(ReuseTabService.prototype, "closable", {
        /** 自定义当前 `closable` 状态 */
        set: /**
         * 自定义当前 `closable` 状态
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var url = this.curUrl;
            this._closableCached[url] = value;
            this.di('update current tag closable: ', value);
            this._cachedChange.next({
                active: 'closable',
                closable: value,
                list: this._cached,
            });
        },
        enumerable: true,
        configurable: true
    });
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
    ReuseTabService.prototype.getClosable = /**
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
    function (url, route) {
        if (typeof this._closableCached[url] !== 'undefined')
            return this._closableCached[url];
        if (route && route.data && typeof route.data.reuseClosable === 'boolean')
            return route.data.reuseClosable;
        /** @type {?} */
        var menu = this.mode !== ReuseTabMatchMode.URL ? this.getMenu(url) : null;
        if (menu && typeof menu.reuseClosable === 'boolean')
            return menu.reuseClosable;
        return true;
    };
    /**
     * 清空 `closable` 缓存
     */
    /**
     * 清空 `closable` 缓存
     * @return {?}
     */
    ReuseTabService.prototype.clearClosableCached = /**
     * 清空 `closable` 缓存
     * @return {?}
     */
    function () {
        this._closableCached = {};
    };
    /**
     * @param {?} route
     * @return {?}
     */
    ReuseTabService.prototype.getTruthRoute = /**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        /** @type {?} */
        var next = route;
        while (next.firstChild)
            next = next.firstChild;
        return next;
    };
    /**
     * 根据快照获取URL地址
     */
    /**
     * 根据快照获取URL地址
     * @param {?} route
     * @return {?}
     */
    ReuseTabService.prototype.getUrl = /**
     * 根据快照获取URL地址
     * @param {?} route
     * @return {?}
     */
    function (route) {
        /** @type {?} */
        var next = this.getTruthRoute(route);
        /** @type {?} */
        var segments = [];
        while (next) {
            segments.push(next.url.join('/'));
            next = (/** @type {?} */ (next.parent));
        }
        /** @type {?} */
        var url = '/' +
            segments
                .filter((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return i; }))
                .reverse()
                .join('/');
        return url;
    };
    /**
     * 检查快照是否允许被复用
     */
    /**
     * 检查快照是否允许被复用
     * @param {?} route
     * @return {?}
     */
    ReuseTabService.prototype.can = /**
     * 检查快照是否允许被复用
     * @param {?} route
     * @return {?}
     */
    function (route) {
        /** @type {?} */
        var url = this.getUrl(route);
        if (url === this.removeUrlBuffer)
            return false;
        if (route.data && typeof route.data.reuse === 'boolean')
            return route.data.reuse;
        if (this.mode !== ReuseTabMatchMode.URL) {
            /** @type {?} */
            var menu = this.getMenu(url);
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
        return this.excludes.findIndex((/**
         * @param {?} r
         * @return {?}
         */
        function (r) { return r.test(url); })) === -1;
    };
    /**
     * 刷新，触发一个 refresh 类型事件
     */
    /**
     * 刷新，触发一个 refresh 类型事件
     * @param {?=} data
     * @return {?}
     */
    ReuseTabService.prototype.refresh = /**
     * 刷新，触发一个 refresh 类型事件
     * @param {?=} data
     * @return {?}
     */
    function (data) {
        this._cachedChange.next({ active: 'refresh', data: data });
    };
    // #endregion
    // #region privates
    // #endregion
    // #region privates
    /**
     * @private
     * @param {?} _handle
     * @return {?}
     */
    ReuseTabService.prototype.destroy = 
    // #endregion
    // #region privates
    /**
     * @private
     * @param {?} _handle
     * @return {?}
     */
    function (_handle) {
        if (_handle && _handle.componentRef && _handle.componentRef.destroy)
            _handle.componentRef.destroy();
    };
    /**
     * @private
     * @param {...?} args
     * @return {?}
     */
    ReuseTabService.prototype.di = /**
     * @private
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.debug)
            return;
        // tslint:disable-next-line:no-console
        console.warn.apply(console, __spread(args));
    };
    /**
     * @return {?}
     */
    ReuseTabService.prototype.init = /**
     * @return {?}
     */
    function () {
        this.initScroll();
        this._inited = true;
    };
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    ReuseTabService.prototype.getMenu = /**
     * @private
     * @param {?} url
     * @return {?}
     */
    function (url) {
        /** @type {?} */
        var menus = this.menuService.getPathByUrl(url);
        if (!menus || menus.length === 0)
            return null;
        return menus.pop();
    };
    /**
     * @param {?} method
     * @param {?} comp
     * @return {?}
     */
    ReuseTabService.prototype.runHook = /**
     * @param {?} method
     * @param {?} comp
     * @return {?}
     */
    function (method, comp) {
        if (typeof comp === 'number') {
            /** @type {?} */
            var item = this._cached[comp];
            comp = item._handle.componentRef;
        }
        if (comp.instance && typeof comp.instance[method] === 'function')
            comp.instance[method]();
    };
    /**
     * @private
     * @param {?} route
     * @return {?}
     */
    ReuseTabService.prototype.hasInValidRoute = /**
     * @private
     * @param {?} route
     * @return {?}
     */
    function (route) {
        return !route.routeConfig || route.routeConfig.loadChildren || route.routeConfig.children;
    };
    /**
     * 决定是否允许路由复用，若 `true` 会触发 `store`
     */
    /**
     * 决定是否允许路由复用，若 `true` 会触发 `store`
     * @param {?} route
     * @return {?}
     */
    ReuseTabService.prototype.shouldDetach = /**
     * 决定是否允许路由复用，若 `true` 会触发 `store`
     * @param {?} route
     * @return {?}
     */
    function (route) {
        if (this.hasInValidRoute(route))
            return false;
        this.di('#shouldDetach', this.can(route), this.getUrl(route));
        return this.can(route);
    };
    /**
     * 存储
     */
    /**
     * 存储
     * @param {?} _snapshot
     * @param {?} _handle
     * @return {?}
     */
    ReuseTabService.prototype.store = /**
     * 存储
     * @param {?} _snapshot
     * @param {?} _handle
     * @return {?}
     */
    function (_snapshot, _handle) {
        /** @type {?} */
        var url = this.getUrl(_snapshot);
        /** @type {?} */
        var idx = this.index(url);
        /** @type {?} */
        var isAdd = idx === -1;
        /** @type {?} */
        var item = {
            title: this.getTitle(url, _snapshot),
            closable: this.getClosable(url, _snapshot),
            position: this.getKeepingScroll(url, _snapshot) ? this.positionBuffer[url] : null,
            url: url,
            _snapshot: _snapshot,
            _handle: _handle,
        };
        if (isAdd) {
            if (this.count >= this._max) {
                // Get the oldest closable location
                /** @type {?} */
                var closeIdx = this._cached.findIndex((/**
                 * @param {?} w
                 * @return {?}
                 */
                function (w) { return (/** @type {?} */ (w.closable)); }));
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
            this._cachedChange.next({ active: 'override', item: item, list: this._cached });
        }
    };
    /**
     * 决定是否允许应用缓存数据
     */
    /**
     * 决定是否允许应用缓存数据
     * @param {?} route
     * @return {?}
     */
    ReuseTabService.prototype.shouldAttach = /**
     * 决定是否允许应用缓存数据
     * @param {?} route
     * @return {?}
     */
    function (route) {
        if (this.hasInValidRoute(route))
            return false;
        /** @type {?} */
        var url = this.getUrl(route);
        /** @type {?} */
        var data = this.get(url);
        /** @type {?} */
        var ret = !!(data && data._handle);
        this.di('#shouldAttach', ret, url);
        if (ret) {
            /** @type {?} */
            var compRef = (/** @type {?} */ (data))._handle.componentRef;
            if (compRef) {
                this.compInstance = compRef;
                this.runHook('_onReuseInit', compRef);
            }
        }
        else {
            this._cachedChange.next({ active: 'add', url: url, list: this._cached });
        }
        return ret;
    };
    /**
     * 提取复用数据
     */
    /**
     * 提取复用数据
     * @param {?} route
     * @return {?}
     */
    ReuseTabService.prototype.retrieve = /**
     * 提取复用数据
     * @param {?} route
     * @return {?}
     */
    function (route) {
        if (this.hasInValidRoute(route))
            return null;
        /** @type {?} */
        var url = this.getUrl(route);
        /** @type {?} */
        var data = this.get(url);
        /** @type {?} */
        var ret = (data && data._handle) || null;
        this.di('#retrieve', url, ret);
        return ret;
    };
    /**
     * 决定是否应该进行复用路由处理
     */
    /**
     * 决定是否应该进行复用路由处理
     * @param {?} future
     * @param {?} curr
     * @return {?}
     */
    ReuseTabService.prototype.shouldReuseRoute = /**
     * 决定是否应该进行复用路由处理
     * @param {?} future
     * @param {?} curr
     * @return {?}
     */
    function (future, curr) {
        /** @type {?} */
        var ret = future.routeConfig === curr.routeConfig;
        if (!ret)
            return false;
        /** @type {?} */
        var path = (/** @type {?} */ (((future.routeConfig && future.routeConfig.path) || '')));
        if (path.length > 0 && ~path.indexOf(':')) {
            /** @type {?} */
            var futureUrl = this.getUrl(future);
            /** @type {?} */
            var currUrl = this.getUrl(curr);
            ret = futureUrl === currUrl;
        }
        this.di('=====================');
        this.di('#shouldReuseRoute', ret, this.getUrl(curr) + "=>" + this.getUrl(future), future, curr);
        return ret;
    };
    // #region scroll
    /**
     * 获取 `keepingScroll` 状态，顺序如下：
     *
     * 1. 路由配置中 data 属性中包含 `keepingScroll`
     * 2. 菜单数据中 `keepingScroll` 属性
     * 3. 组件 `keepingScroll` 值
     */
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
    ReuseTabService.prototype.getKeepingScroll = 
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
    function (url, route) {
        if (route && route.data && typeof route.data.keepingScroll === 'boolean')
            return route.data.keepingScroll;
        /** @type {?} */
        var menu = this.mode !== ReuseTabMatchMode.URL ? this.getMenu(url) : null;
        if (menu && typeof menu.keepingScroll === 'boolean')
            return menu.keepingScroll;
        return this.keepingScroll;
    };
    Object.defineProperty(ReuseTabService.prototype, "isDisabledInRouter", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var routerConfig = this.injector.get(ROUTER_CONFIGURATION, (/** @type {?} */ ({})));
            return routerConfig.scrollPositionRestoration === 'disabled';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReuseTabService.prototype, "ss", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.injector.get(ScrollService);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    ReuseTabService.prototype.initScroll = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._router$) {
            this._router$.unsubscribe();
        }
        this._router$ = this.injector.get(Router).events.subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (e instanceof NavigationStart) {
                /** @type {?} */
                var url = _this.curUrl;
                if (_this.getKeepingScroll(url, _this.getTruthRoute(_this.snapshot))) {
                    _this.positionBuffer[url] = _this.ss.getScrollPosition(_this.keepingScrollContainer);
                }
                else {
                    delete _this.positionBuffer[url];
                }
            }
            else if (e instanceof NavigationEnd) {
                /** @type {?} */
                var url = _this.curUrl;
                /** @type {?} */
                var item_1 = _this.get(url);
                if (item_1 && item_1.position && _this.getKeepingScroll(url, _this.getTruthRoute(_this.snapshot))) {
                    if (_this.isDisabledInRouter) {
                        _this.ss.scrollToPosition(_this.keepingScrollContainer, item_1.position);
                    }
                    else {
                        setTimeout((/**
                         * @return {?}
                         */
                        function () { return _this.ss.scrollToPosition(_this.keepingScrollContainer, (/** @type {?} */ (item_1.position))); }), 1);
                    }
                }
            }
        }));
    };
    // #endregion
    // #endregion
    /**
     * @return {?}
     */
    ReuseTabService.prototype.ngOnDestroy = 
    // #endregion
    /**
     * @return {?}
     */
    function () {
        var _a = this, _cachedChange = _a._cachedChange, _router$ = _a._router$;
        this.clear();
        this._cached = [];
        _cachedChange.complete();
        if (_router$) {
            _router$.unsubscribe();
        }
    };
    ReuseTabService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ReuseTabService.ctorParameters = function () { return [
        { type: Injector },
        { type: MenuService }
    ]; };
    /** @nocollapse */ ReuseTabService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ReuseTabService_Factory() { return new ReuseTabService(i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.MenuService)); }, token: ReuseTabService, providedIn: "root" });
    return ReuseTabService;
}());
export { ReuseTabService };
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
    ReuseTabService.prototype.compInstance;
    /** @type {?} */
    ReuseTabService.prototype.debug;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3JldXNlLXRhYi8iLCJzb3VyY2VzIjpbInJldXNlLXRhYi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFDTCxjQUFjLEVBR2QsYUFBYSxFQUNiLGVBQWUsRUFDZixNQUFNLEVBQ04sb0JBQW9CLEdBQ3JCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFMUQsT0FBTyxFQUFFLGVBQWUsRUFBOEIsTUFBTSxNQUFNLENBQUM7QUFDbkUsT0FBTyxFQUFrQixpQkFBaUIsRUFBOEIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7QUFPdkc7SUFpVUUsYUFBYTtJQUViLHlCQUFvQixRQUFrQixFQUFVLFdBQXdCO1FBQXBELGFBQVEsR0FBUixRQUFRLENBQVU7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQWpVaEUsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsa0JBQWEsR0FBRyxJQUFJLGVBQWUsQ0FBd0IsSUFBSSxDQUFDLENBQUM7UUFDakUsWUFBTyxHQUFxQixFQUFFLENBQUM7UUFDL0IsaUJBQVksR0FBa0MsRUFBRSxDQUFDO1FBQ2pELG9CQUFlLEdBQStCLEVBQUUsQ0FBQztRQUdqRCxtQkFBYyxHQUF3QyxFQUFFLENBQUM7UUFFakUsVUFBSyxHQUFHLEtBQUssQ0FBQztRQUNkLFNBQUksR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7Ozs7UUFFOUIsYUFBUSxHQUFhLEVBQUUsQ0FBQztJQW1UbUQsQ0FBQztJQWpUNUUsc0JBQVkscUNBQVE7Ozs7O1FBQXBC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LGdDQUFhLEVBQUUsc0JBQWlCO1FBQ3hDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUV6QixJQUFJLFFBQVEsRUFBRTtZQUNaLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7O2dCQWhnQkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkFwQmIsUUFBUTtnQkFVcEIsV0FBVzs7OzBCQVZwQjtDQXFoQkMsQUFqZ0JELElBaWdCQztTQWhnQlksZUFBZTs7Ozs7O0lBQzFCLGtDQUF3Qjs7Ozs7SUFDeEIsK0JBQWtCOzs7OztJQUNsQix5Q0FBK0I7Ozs7O0lBQy9CLHdDQUF5RTs7Ozs7SUFDekUsa0NBQXVDOzs7OztJQUN2Qyx1Q0FBeUQ7Ozs7O0lBQ3pELDBDQUF5RDs7Ozs7SUFDekQsbUNBQWlDOzs7OztJQUNqQywwQ0FBdUM7Ozs7O0lBQ3ZDLHlDQUFpRTs7SUFDakUsdUNBQWtCOztJQUNsQixnQ0FBYzs7SUFDZCwrQkFBOEI7Ozs7O0lBRTlCLG1DQUF3Qjs7SUErQnhCLGlEQUFnQzs7Ozs7SUFvUnBCLG1DQUEwQjs7Ozs7SUFBRSxzQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBY3RpdmF0ZWRSb3V0ZSxcbiAgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgRXh0cmFPcHRpb25zLFxuICBOYXZpZ2F0aW9uRW5kLFxuICBOYXZpZ2F0aW9uU3RhcnQsXG4gIFJvdXRlcixcbiAgUk9VVEVSX0NPTkZJR1VSQVRJT04sXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNZW51U2VydmljZSwgU2Nyb2xsU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBVbnN1YnNjcmliYWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUmV1c2VUYWJDYWNoZWQsIFJldXNlVGFiTWF0Y2hNb2RlLCBSZXVzZVRhYk5vdGlmeSwgUmV1c2VUaXRsZSB9IGZyb20gJy4vcmV1c2UtdGFiLmludGVyZmFjZXMnO1xuXG4vKipcbiAqIOi3r+eUseWkjeeUqOexu++8jOaPkOS+m+WkjeeUqOaJgOmcgOimgeS4gOS6m+WfuuacrOaOpeWPo1xuICpcbiAqICoq5rOo77yaKiog5omA5pyJ57yT5a2Y5pWw5o2u5p2l5rqQ5LqO6Lev55Sx56a75byA5ZCO5omN5Lya5Lqn55SfXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgUmV1c2VUYWJTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfaW5pdGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX21heCA9IDEwO1xuICBwcml2YXRlIF9rZWVwaW5nU2Nyb2xsID0gZmFsc2U7XG4gIHByaXZhdGUgX2NhY2hlZENoYW5nZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8UmV1c2VUYWJOb3RpZnkgfCBudWxsPihudWxsKTtcbiAgcHJpdmF0ZSBfY2FjaGVkOiBSZXVzZVRhYkNhY2hlZFtdID0gW107XG4gIHByaXZhdGUgX3RpdGxlQ2FjaGVkOiB7IFt1cmw6IHN0cmluZ106IFJldXNlVGl0bGUgfSA9IHt9O1xuICBwcml2YXRlIF9jbG9zYWJsZUNhY2hlZDogeyBbdXJsOiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcbiAgcHJpdmF0ZSBfcm91dGVyJDogVW5zdWJzY3JpYmFibGU7XG4gIHByaXZhdGUgcmVtb3ZlVXJsQnVmZmVyOiBzdHJpbmcgfCBudWxsO1xuICBwcml2YXRlIHBvc2l0aW9uQnVmZmVyOiB7IFt1cmw6IHN0cmluZ106IFtudW1iZXIsIG51bWJlcl0gfSA9IHt9O1xuICBjb21wSW5zdGFuY2U6IGFueTtcbiAgZGVidWcgPSBmYWxzZTtcbiAgbW9kZSA9IFJldXNlVGFiTWF0Y2hNb2RlLk1lbnU7XG4gIC8qKiDmjpLpmaTop4TliJnvvIzpmZAgYG1vZGU9VVJMYCAqL1xuICBleGNsdWRlczogUmVnRXhwW10gPSBbXTtcblxuICBwcml2YXRlIGdldCBzbmFwc2hvdCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQoQWN0aXZhdGVkUm91dGUpLnNuYXBzaG90O1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBwdWJsaWNcblxuICBnZXQgaW5pdGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9pbml0ZWQ7XG4gIH1cblxuICAvKiog5b2T5YmN6Lev55Sx5Zyw5Z2AICovXG4gIGdldCBjdXJVcmwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VXJsKHRoaXMuc25hcHNob3QpO1xuICB9XG5cbiAgLyoqIOWFgeiuuOacgOWkmuWkjeeUqOWkmuWwkeS4qumhtemdou+8jOWPluWAvOiMg+WbtCBgMi0xMDBg77yM5YC85Y+R55Sf5Y+Y5pu05pe25Lya5by65Yi25YWz6Zet5LiU5b+955Wl5Y+v5YWz6Zet5p2h5Lu2ICovXG4gIHNldCBtYXgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21heCA9IE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCAyKSwgMTAwKTtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5fY2FjaGVkLmxlbmd0aDsgaSA+IHRoaXMuX21heDsgaS0tKSB7XG4gICAgICB0aGlzLl9jYWNoZWQucG9wKCk7XG4gICAgfVxuICB9XG4gIHNldCBrZWVwaW5nU2Nyb2xsKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fa2VlcGluZ1Njcm9sbCA9IHZhbHVlO1xuICAgIHRoaXMuaW5pdFNjcm9sbCgpO1xuICB9XG4gIGdldCBrZWVwaW5nU2Nyb2xsKCkge1xuICAgIHJldHVybiB0aGlzLl9rZWVwaW5nU2Nyb2xsO1xuICB9XG4gIGtlZXBpbmdTY3JvbGxDb250YWluZXI6IEVsZW1lbnQ7XG4gIC8qKiDojrflj5blt7LnvJPlrZjnmoTot6/nlLEgKi9cbiAgZ2V0IGl0ZW1zKCk6IFJldXNlVGFiQ2FjaGVkW10ge1xuICAgIHJldHVybiB0aGlzLl9jYWNoZWQ7XG4gIH1cbiAgLyoqIOiOt+WPluW9k+WJjee8k+WtmOeahOi3r+eUseaAu+aVsCAqL1xuICBnZXQgY291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZC5sZW5ndGg7XG4gIH1cbiAgLyoqIOiuoumYhee8k+WtmOWPmOabtOmAmuefpSAqL1xuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8UmV1c2VUYWJOb3RpZnkgfCBudWxsPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZENoYW5nZS5hc09ic2VydmFibGUoKTsgLy8gLnBpcGUoZmlsdGVyKHcgPT4gdyAhPT0gbnVsbCkpO1xuICB9XG4gIC8qKiDoh6rlrprkuYnlvZPliY3moIfpopggKi9cbiAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcgfCBSZXVzZVRpdGxlKSB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5jdXJVcmw7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHZhbHVlID0geyB0ZXh0OiB2YWx1ZSB9O1xuICAgIHRoaXMuX3RpdGxlQ2FjaGVkW3VybF0gPSB2YWx1ZTtcbiAgICB0aGlzLmRpKCd1cGRhdGUgY3VycmVudCB0YWcgdGl0bGU6ICcsIHZhbHVlKTtcbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7XG4gICAgICBhY3RpdmU6ICd0aXRsZScsXG4gICAgICB1cmwsXG4gICAgICB0aXRsZTogdmFsdWUsXG4gICAgICBsaXN0OiB0aGlzLl9jYWNoZWQsXG4gICAgfSk7XG4gIH1cbiAgLyoqIOiOt+WPluaMh+Wumui3r+W+hOe8k+WtmOaJgOWcqOS9jee9ru+8jGAtMWAg6KGo56S65peg57yT5a2YICovXG4gIGluZGV4KHVybDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVkLmZpbmRJbmRleCh3ID0+IHcudXJsID09PSB1cmwpO1xuICB9XG4gIC8qKiDojrflj5bmjIflrprot6/lvoTnvJPlrZjmmK/lkKblrZjlnKggKi9cbiAgZXhpc3RzKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXgodXJsKSAhPT0gLTE7XG4gIH1cbiAgLyoqIOiOt+WPluaMh+Wumui3r+W+hOe8k+WtmCAqL1xuICBnZXQodXJsPzogc3RyaW5nKTogUmV1c2VUYWJDYWNoZWQgfCBudWxsIHtcbiAgICByZXR1cm4gdXJsID8gdGhpcy5fY2FjaGVkLmZpbmQodyA9PiB3LnVybCA9PT0gdXJsKSB8fCBudWxsIDogbnVsbDtcbiAgfVxuICBwcml2YXRlIHJlbW92ZSh1cmw6IHN0cmluZyB8IG51bWJlciwgaW5jbHVkZU5vbkNsb3NlYWJsZTogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlkeCA9IHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnID8gdGhpcy5pbmRleCh1cmwpIDogdXJsO1xuICAgIGNvbnN0IGl0ZW0gPSBpZHggIT09IC0xID8gdGhpcy5fY2FjaGVkW2lkeF0gOiBudWxsO1xuICAgIGlmICghaXRlbSB8fCAoIWluY2x1ZGVOb25DbG9zZWFibGUgJiYgIWl0ZW0uY2xvc2FibGUpKSByZXR1cm4gZmFsc2U7XG5cbiAgICB0aGlzLmRlc3Ryb3koaXRlbS5faGFuZGxlKTtcblxuICAgIHRoaXMuX2NhY2hlZC5zcGxpY2UoaWR4LCAxKTtcbiAgICBkZWxldGUgdGhpcy5fdGl0bGVDYWNoZWRbdXJsXTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICog5qC55o2uVVJM56e76Zmk5qCH562+XG4gICAqXG4gICAqIEBwYXJhbSBbaW5jbHVkZU5vbkNsb3NlYWJsZT1mYWxzZV0g5piv5ZCm5by65Yi25YyF5ZCr5LiN5Y+v5YWz6ZetXG4gICAqL1xuICBjbG9zZSh1cmw6IHN0cmluZywgaW5jbHVkZU5vbkNsb3NlYWJsZSA9IGZhbHNlKSB7XG4gICAgdGhpcy5yZW1vdmVVcmxCdWZmZXIgPSB1cmw7XG5cbiAgICB0aGlzLnJlbW92ZSh1cmwsIGluY2x1ZGVOb25DbG9zZWFibGUpO1xuXG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoeyBhY3RpdmU6ICdjbG9zZScsIHVybCwgbGlzdDogdGhpcy5fY2FjaGVkIH0pO1xuXG4gICAgdGhpcy5kaSgnY2xvc2UgdGFnJywgdXJsKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICog5riF6Zmk5Y+z6L65XG4gICAqXG4gICAqIEBwYXJhbSBbaW5jbHVkZU5vbkNsb3NlYWJsZT1mYWxzZV0g5piv5ZCm5by65Yi25YyF5ZCr5LiN5Y+v5YWz6ZetXG4gICAqL1xuICBjbG9zZVJpZ2h0KHVybDogc3RyaW5nLCBpbmNsdWRlTm9uQ2xvc2VhYmxlID0gZmFsc2UpIHtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuaW5kZXgodXJsKTtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jb3VudCAtIDE7IGkgPiBzdGFydDsgaS0tKSB7XG4gICAgICB0aGlzLnJlbW92ZShpLCBpbmNsdWRlTm9uQ2xvc2VhYmxlKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbW92ZVVybEJ1ZmZlciA9IG51bGw7XG5cbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7IGFjdGl2ZTogJ2Nsb3NlUmlnaHQnLCB1cmwsIGxpc3Q6IHRoaXMuX2NhY2hlZCB9KTtcblxuICAgIHRoaXMuZGkoJ2Nsb3NlIHJpZ2h0IHRhZ2VzJywgdXJsKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICog5riF6Zmk5omA5pyJ57yT5a2YXG4gICAqXG4gICAqIEBwYXJhbSBbaW5jbHVkZU5vbkNsb3NlYWJsZT1mYWxzZV0g5piv5ZCm5by65Yi25YyF5ZCr5LiN5Y+v5YWz6ZetXG4gICAqL1xuICBjbGVhcihpbmNsdWRlTm9uQ2xvc2VhYmxlID0gZmFsc2UpIHtcbiAgICB0aGlzLl9jYWNoZWQuZm9yRWFjaCh3ID0+IHtcbiAgICAgIGlmICghaW5jbHVkZU5vbkNsb3NlYWJsZSAmJiB3LmNsb3NhYmxlKSB0aGlzLmRlc3Ryb3kody5faGFuZGxlKTtcbiAgICB9KTtcbiAgICB0aGlzLl9jYWNoZWQgPSB0aGlzLl9jYWNoZWQuZmlsdGVyKHcgPT4gIWluY2x1ZGVOb25DbG9zZWFibGUgJiYgIXcuY2xvc2FibGUpO1xuXG4gICAgdGhpcy5yZW1vdmVVcmxCdWZmZXIgPSBudWxsO1xuXG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoeyBhY3RpdmU6ICdjbGVhcicsIGxpc3Q6IHRoaXMuX2NhY2hlZCB9KTtcblxuICAgIHRoaXMuZGkoJ2NsZWFyIGFsbCBjYXRjaCcpO1xuICB9XG4gIC8qKlxuICAgKiDnp7vliqjnvJPlrZjmlbDmja5cbiAgICogQHBhcmFtIHVybCDopoHnp7vliqjnmoRVUkzlnLDlnYBcbiAgICogQHBhcmFtIHBvc2l0aW9uIOaWsOS9jee9ru+8jOS4i+agh+S7jiBgMGAg5byA5aeLXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYFxuICAgKiAvLyBzb3VyY2VcbiAgICogWyAnL2EvMScsICcvYS8yJywgJy9hLzMnLCAnL2EvNCcsICcvYS81JyBdXG4gICAqIG1vdmUoJy9hLzEnLCAyKTtcbiAgICogLy8gb3V0cHV0XG4gICAqIFsgJy9hLzInLCAnL2EvMycsICcvYS8xJywgJy9hLzQnLCAnL2EvNScgXVxuICAgKiBtb3ZlKCcvYS8xJywgLTEpO1xuICAgKiAvLyBvdXRwdXRcbiAgICogWyAnL2EvMicsICcvYS8zJywgJy9hLzQnLCAnL2EvNScsICcvYS8xJyBdXG4gICAqIGBgYFxuICAgKi9cbiAgbW92ZSh1cmw6IHN0cmluZywgcG9zaXRpb246IG51bWJlcikge1xuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5fY2FjaGVkLmZpbmRJbmRleCh3ID0+IHcudXJsID09PSB1cmwpO1xuICAgIGlmIChzdGFydCA9PT0gLTEpIHJldHVybjtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5fY2FjaGVkLnNsaWNlKCk7XG4gICAgZGF0YS5zcGxpY2UocG9zaXRpb24gPCAwID8gZGF0YS5sZW5ndGggKyBwb3NpdGlvbiA6IHBvc2l0aW9uLCAwLCBkYXRhLnNwbGljZShzdGFydCwgMSlbMF0pO1xuICAgIHRoaXMuX2NhY2hlZCA9IGRhdGE7XG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoe1xuICAgICAgYWN0aXZlOiAnbW92ZScsXG4gICAgICB1cmwsXG4gICAgICBwb3NpdGlvbixcbiAgICAgIGxpc3Q6IHRoaXMuX2NhY2hlZCxcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICog5by65Yi25YWz6Zet5b2T5YmN6Lev55Sx77yI5YyF5ZCr5LiN5Y+v5YWz6Zet54q25oCB77yJ77yM5bm26YeN5paw5a+86Iiq6IezIGBuZXdVcmxgIOi3r+eUsVxuICAgKi9cbiAgcmVwbGFjZShuZXdVcmw6IHN0cmluZykge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuY3VyVXJsO1xuICAgIGlmICh0aGlzLmV4aXN0cyh1cmwpKSB7XG4gICAgICB0aGlzLmNsb3NlKHVybCwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlVXJsQnVmZmVyID0gdXJsO1xuICAgIH1cbiAgICB0aGlzLmluamVjdG9yLmdldDxSb3V0ZXI+KFJvdXRlcikubmF2aWdhdGVCeVVybChuZXdVcmwpO1xuICB9XG4gIC8qKlxuICAgKiDojrflj5bmoIfpopjvvIzpobrluo/lpoLkuIvvvJpcbiAgICpcbiAgICogMS4g57uE5Lu25YaF5L2/55SoIGBSZXVzZVRhYlNlcnZpY2UudGl0bGUgPSAnbmV3IHRpdGxlJ2Ag6YeN5paw5oyH5a6a5paH5pysXG4gICAqIDIuIOi3r+eUsemFjee9ruS4rSBkYXRhIOWxnuaAp+S4reWMheWQqyB0aXRsZUkxOG4gPiB0aXRsZVxuICAgKiAzLiDoj5zljZXmlbDmja7kuK0gdGV4dCDlsZ7mgKdcbiAgICpcbiAgICogQHBhcmFtIHVybCDmjIflrppVUkxcbiAgICogQHBhcmFtIHJvdXRlIOaMh+Wumui3r+eUseW/q+eFp1xuICAgKi9cbiAgZ2V0VGl0bGUodXJsOiBzdHJpbmcsIHJvdXRlPzogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IFJldXNlVGl0bGUge1xuICAgIGlmICh0aGlzLl90aXRsZUNhY2hlZFt1cmxdKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdGl0bGVDYWNoZWRbdXJsXTtcbiAgICB9XG5cbiAgICBpZiAocm91dGUgJiYgcm91dGUuZGF0YSAmJiAocm91dGUuZGF0YS50aXRsZUkxOG4gfHwgcm91dGUuZGF0YS50aXRsZSkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRleHQ6IHJvdXRlLmRhdGEudGl0bGUsXG4gICAgICAgIGkxOG46IHJvdXRlLmRhdGEudGl0bGVJMThuLFxuICAgICAgfSBhcyBSZXVzZVRpdGxlO1xuICAgIH1cblxuICAgIGNvbnN0IG1lbnUgPSB0aGlzLmdldE1lbnUodXJsKTtcbiAgICByZXR1cm4gbWVudSA/IHsgdGV4dDogbWVudS50ZXh0LCBpMThuOiBtZW51LmkxOG4gfSA6IHsgdGV4dDogdXJsIH07XG4gIH1cblxuICAvKipcbiAgICog5riF6Zmk5qCH6aKY57yT5a2YXG4gICAqL1xuICBjbGVhclRpdGxlQ2FjaGVkKCkge1xuICAgIHRoaXMuX3RpdGxlQ2FjaGVkID0ge307XG4gIH1cbiAgLyoqIOiHquWumuS5ieW9k+WJjSBgY2xvc2FibGVgIOeKtuaAgSAqL1xuICBzZXQgY2xvc2FibGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmN1clVybDtcbiAgICB0aGlzLl9jbG9zYWJsZUNhY2hlZFt1cmxdID0gdmFsdWU7XG4gICAgdGhpcy5kaSgndXBkYXRlIGN1cnJlbnQgdGFnIGNsb3NhYmxlOiAnLCB2YWx1ZSk7XG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoe1xuICAgICAgYWN0aXZlOiAnY2xvc2FibGUnLFxuICAgICAgY2xvc2FibGU6IHZhbHVlLFxuICAgICAgbGlzdDogdGhpcy5fY2FjaGVkLFxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiDojrflj5YgYGNsb3NhYmxlYCDnirbmgIHvvIzpobrluo/lpoLkuIvvvJpcbiAgICpcbiAgICogMS4g57uE5Lu25YaF5L2/55SoIGBSZXVzZVRhYlNlcnZpY2UuY2xvc2FibGUgPSB0cnVlYCDph43mlrDmjIflrpogYGNsb3NhYmxlYCDnirbmgIFcbiAgICogMi4g6Lev55Sx6YWN572u5LitIGRhdGEg5bGe5oCn5Lit5YyF5ZCrIGByZXVzZUNsb3NhYmxlYFxuICAgKiAzLiDoj5zljZXmlbDmja7kuK0gYHJldXNlQ2xvc2FibGVgIOWxnuaAp1xuICAgKlxuICAgKiBAcGFyYW0gdXJsIOaMh+WumlVSTFxuICAgKiBAcGFyYW0gcm91dGUg5oyH5a6a6Lev55Sx5b+r54WnXG4gICAqL1xuICBnZXRDbG9zYWJsZSh1cmw6IHN0cmluZywgcm91dGU/OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLl9jbG9zYWJsZUNhY2hlZFt1cmxdICE9PSAndW5kZWZpbmVkJykgcmV0dXJuIHRoaXMuX2Nsb3NhYmxlQ2FjaGVkW3VybF07XG5cbiAgICBpZiAocm91dGUgJiYgcm91dGUuZGF0YSAmJiB0eXBlb2Ygcm91dGUuZGF0YS5yZXVzZUNsb3NhYmxlID09PSAnYm9vbGVhbicpIHJldHVybiByb3V0ZS5kYXRhLnJldXNlQ2xvc2FibGU7XG5cbiAgICBjb25zdCBtZW51ID0gdGhpcy5tb2RlICE9PSBSZXVzZVRhYk1hdGNoTW9kZS5VUkwgPyB0aGlzLmdldE1lbnUodXJsKSA6IG51bGw7XG4gICAgaWYgKG1lbnUgJiYgdHlwZW9mIG1lbnUucmV1c2VDbG9zYWJsZSA9PT0gJ2Jvb2xlYW4nKSByZXR1cm4gbWVudS5yZXVzZUNsb3NhYmxlO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIOa4heepuiBgY2xvc2FibGVgIOe8k+WtmFxuICAgKi9cbiAgY2xlYXJDbG9zYWJsZUNhY2hlZCgpIHtcbiAgICB0aGlzLl9jbG9zYWJsZUNhY2hlZCA9IHt9O1xuICB9XG4gIGdldFRydXRoUm91dGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpIHtcbiAgICBsZXQgbmV4dCA9IHJvdXRlO1xuICAgIHdoaWxlIChuZXh0LmZpcnN0Q2hpbGQpIG5leHQgPSBuZXh0LmZpcnN0Q2hpbGQ7XG4gICAgcmV0dXJuIG5leHQ7XG4gIH1cbiAgLyoqXG4gICAqIOagueaNruW/q+eFp+iOt+WPllVSTOWcsOWdgFxuICAgKi9cbiAgZ2V0VXJsKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogc3RyaW5nIHtcbiAgICBsZXQgbmV4dCA9IHRoaXMuZ2V0VHJ1dGhSb3V0ZShyb3V0ZSk7XG4gICAgY29uc3Qgc2VnbWVudHM6IHN0cmluZ1tdID0gW107XG4gICAgd2hpbGUgKG5leHQpIHtcbiAgICAgIHNlZ21lbnRzLnB1c2gobmV4dC51cmwuam9pbignLycpKTtcbiAgICAgIG5leHQgPSBuZXh0LnBhcmVudCE7XG4gICAgfVxuICAgIGNvbnN0IHVybCA9XG4gICAgICAnLycgK1xuICAgICAgc2VnbWVudHNcbiAgICAgICAgLmZpbHRlcihpID0+IGkpXG4gICAgICAgIC5yZXZlcnNlKClcbiAgICAgICAgLmpvaW4oJy8nKTtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIC8qKlxuICAgKiDmo4Dmn6Xlv6vnhafmmK/lkKblhYHorrjooqvlpI3nlKhcbiAgICovXG4gIGNhbihyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXJsKHJvdXRlKTtcbiAgICBpZiAodXJsID09PSB0aGlzLnJlbW92ZVVybEJ1ZmZlcikgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKHJvdXRlLmRhdGEgJiYgdHlwZW9mIHJvdXRlLmRhdGEucmV1c2UgPT09ICdib29sZWFuJykgcmV0dXJuIHJvdXRlLmRhdGEucmV1c2U7XG5cbiAgICBpZiAodGhpcy5tb2RlICE9PSBSZXVzZVRhYk1hdGNoTW9kZS5VUkwpIHtcbiAgICAgIGNvbnN0IG1lbnUgPSB0aGlzLmdldE1lbnUodXJsKTtcbiAgICAgIGlmICghbWVudSkgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKHRoaXMubW9kZSA9PT0gUmV1c2VUYWJNYXRjaE1vZGUuTWVudSkge1xuICAgICAgICBpZiAobWVudS5yZXVzZSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghbWVudS5yZXVzZSB8fCBtZW51LnJldXNlICE9PSB0cnVlKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZXhjbHVkZXMuZmluZEluZGV4KHIgPT4gci50ZXN0KHVybCkpID09PSAtMTtcbiAgfVxuICAvKipcbiAgICog5Yi35paw77yM6Kem5Y+R5LiA5LiqIHJlZnJlc2gg57G75Z6L5LqL5Lu2XG4gICAqL1xuICByZWZyZXNoKGRhdGE/OiBhbnkpIHtcbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7IGFjdGl2ZTogJ3JlZnJlc2gnLCBkYXRhIH0pO1xuICB9XG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHByaXZhdGVzXG5cbiAgcHJpdmF0ZSBkZXN0cm95KF9oYW5kbGU6IGFueSkge1xuICAgIGlmIChfaGFuZGxlICYmIF9oYW5kbGUuY29tcG9uZW50UmVmICYmIF9oYW5kbGUuY29tcG9uZW50UmVmLmRlc3Ryb3kpIF9oYW5kbGUuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgfVxuXG4gIHByaXZhdGUgZGkoLi4uYXJnczogTnpTYWZlQW55W10pIHtcbiAgICBpZiAoIXRoaXMuZGVidWcpIHJldHVybjtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybiguLi5hcmdzKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSBtZW51U2VydmljZTogTWVudVNlcnZpY2UpIHt9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmluaXRTY3JvbGwoKTtcbiAgICB0aGlzLl9pbml0ZWQgPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRNZW51KHVybDogc3RyaW5nKSB7XG4gICAgY29uc3QgbWVudXMgPSB0aGlzLm1lbnVTZXJ2aWNlLmdldFBhdGhCeVVybCh1cmwpO1xuICAgIGlmICghbWVudXMgfHwgbWVudXMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gbWVudXMucG9wKCk7XG4gIH1cblxuICBydW5Ib29rKG1ldGhvZDogJ19vblJldXNlSW5pdCcgfCAnX29uUmV1c2VEZXN0cm95JywgY29tcDogYW55KSB7XG4gICAgaWYgKHR5cGVvZiBjb21wID09PSAnbnVtYmVyJykge1xuICAgICAgY29uc3QgaXRlbSA9IHRoaXMuX2NhY2hlZFtjb21wXTtcbiAgICAgIGNvbXAgPSBpdGVtLl9oYW5kbGUuY29tcG9uZW50UmVmO1xuICAgIH1cbiAgICBpZiAoY29tcC5pbnN0YW5jZSAmJiB0eXBlb2YgY29tcC5pbnN0YW5jZVttZXRob2RdID09PSAnZnVuY3Rpb24nKSBjb21wLmluc3RhbmNlW21ldGhvZF0oKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFzSW5WYWxpZFJvdXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KSB7XG4gICAgcmV0dXJuICFyb3V0ZS5yb3V0ZUNvbmZpZyB8fCByb3V0ZS5yb3V0ZUNvbmZpZy5sb2FkQ2hpbGRyZW4gfHwgcm91dGUucm91dGVDb25maWcuY2hpbGRyZW47XG4gIH1cblxuICAvKipcbiAgICog5Yaz5a6a5piv5ZCm5YWB6K646Lev55Sx5aSN55So77yM6IulIGB0cnVlYCDkvJrop6blj5EgYHN0b3JlYFxuICAgKi9cbiAgc2hvdWxkRGV0YWNoKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaGFzSW5WYWxpZFJvdXRlKHJvdXRlKSkgcmV0dXJuIGZhbHNlO1xuICAgIHRoaXMuZGkoJyNzaG91bGREZXRhY2gnLCB0aGlzLmNhbihyb3V0ZSksIHRoaXMuZ2V0VXJsKHJvdXRlKSk7XG4gICAgcmV0dXJuIHRoaXMuY2FuKHJvdXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlrZjlgqhcbiAgICovXG4gIHN0b3JlKF9zbmFwc2hvdDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgX2hhbmRsZTogYW55KSB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRVcmwoX3NuYXBzaG90KTtcbiAgICBjb25zdCBpZHggPSB0aGlzLmluZGV4KHVybCk7XG4gICAgY29uc3QgaXNBZGQgPSBpZHggPT09IC0xO1xuXG4gICAgY29uc3QgaXRlbTogUmV1c2VUYWJDYWNoZWQgPSB7XG4gICAgICB0aXRsZTogdGhpcy5nZXRUaXRsZSh1cmwsIF9zbmFwc2hvdCksXG4gICAgICBjbG9zYWJsZTogdGhpcy5nZXRDbG9zYWJsZSh1cmwsIF9zbmFwc2hvdCksXG4gICAgICBwb3NpdGlvbjogdGhpcy5nZXRLZWVwaW5nU2Nyb2xsKHVybCwgX3NuYXBzaG90KSA/IHRoaXMucG9zaXRpb25CdWZmZXJbdXJsXSA6IG51bGwsXG4gICAgICB1cmwsXG4gICAgICBfc25hcHNob3QsXG4gICAgICBfaGFuZGxlLFxuICAgIH07XG4gICAgaWYgKGlzQWRkKSB7XG4gICAgICBpZiAodGhpcy5jb3VudCA+PSB0aGlzLl9tYXgpIHtcbiAgICAgICAgLy8gR2V0IHRoZSBvbGRlc3QgY2xvc2FibGUgbG9jYXRpb25cbiAgICAgICAgY29uc3QgY2xvc2VJZHggPSB0aGlzLl9jYWNoZWQuZmluZEluZGV4KHcgPT4gdy5jbG9zYWJsZSEpO1xuICAgICAgICBpZiAoY2xvc2VJZHggIT09IC0xKSB0aGlzLnJlbW92ZShjbG9zZUlkeCwgZmFsc2UpO1xuICAgICAgfVxuICAgICAgdGhpcy5fY2FjaGVkLnB1c2goaXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NhY2hlZFtpZHhdID0gaXRlbTtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVVcmxCdWZmZXIgPSBudWxsO1xuXG4gICAgdGhpcy5kaSgnI3N0b3JlJywgaXNBZGQgPyAnW25ld10nIDogJ1tvdmVycmlkZV0nLCB1cmwpO1xuXG4gICAgaWYgKF9oYW5kbGUgJiYgX2hhbmRsZS5jb21wb25lbnRSZWYpIHtcbiAgICAgIHRoaXMucnVuSG9vaygnX29uUmV1c2VEZXN0cm95JywgX2hhbmRsZS5jb21wb25lbnRSZWYpO1xuICAgIH1cblxuICAgIGlmICghaXNBZGQpIHtcbiAgICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHsgYWN0aXZlOiAnb3ZlcnJpZGUnLCBpdGVtLCBsaXN0OiB0aGlzLl9jYWNoZWQgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOWGs+WumuaYr+WQpuWFgeiuuOW6lOeUqOe8k+WtmOaVsOaNrlxuICAgKi9cbiAgc2hvdWxkQXR0YWNoKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaGFzSW5WYWxpZFJvdXRlKHJvdXRlKSkgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXJsKHJvdXRlKTtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5nZXQodXJsKTtcbiAgICBjb25zdCByZXQgPSAhIShkYXRhICYmIGRhdGEuX2hhbmRsZSk7XG4gICAgdGhpcy5kaSgnI3Nob3VsZEF0dGFjaCcsIHJldCwgdXJsKTtcbiAgICBpZiAocmV0KSB7XG4gICAgICBjb25zdCBjb21wUmVmID0gZGF0YSEuX2hhbmRsZS5jb21wb25lbnRSZWY7XG4gICAgICBpZiAoY29tcFJlZikge1xuICAgICAgICB0aGlzLmNvbXBJbnN0YW5jZSA9IGNvbXBSZWY7XG4gICAgICAgIHRoaXMucnVuSG9vaygnX29uUmV1c2VJbml0JywgY29tcFJlZik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHsgYWN0aXZlOiAnYWRkJywgdXJsLCBsaXN0OiB0aGlzLl9jYWNoZWQgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICog5o+Q5Y+W5aSN55So5pWw5o2uXG4gICAqL1xuICByZXRyaWV2ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IHt9IHwgbnVsbCB7XG4gICAgaWYgKHRoaXMuaGFzSW5WYWxpZFJvdXRlKHJvdXRlKSkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRVcmwocm91dGUpO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldCh1cmwpO1xuICAgIGNvbnN0IHJldCA9IChkYXRhICYmIGRhdGEuX2hhbmRsZSkgfHwgbnVsbDtcbiAgICB0aGlzLmRpKCcjcmV0cmlldmUnLCB1cmwsIHJldCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiDlhrPlrprmmK/lkKblupTor6Xov5vooYzlpI3nlKjot6/nlLHlpITnkIZcbiAgICovXG4gIHNob3VsZFJldXNlUm91dGUoZnV0dXJlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBjdXJyOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgbGV0IHJldCA9IGZ1dHVyZS5yb3V0ZUNvbmZpZyA9PT0gY3Vyci5yb3V0ZUNvbmZpZztcbiAgICBpZiAoIXJldCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgcGF0aCA9ICgoZnV0dXJlLnJvdXRlQ29uZmlnICYmIGZ1dHVyZS5yb3V0ZUNvbmZpZy5wYXRoKSB8fCAnJykgYXMgc3RyaW5nO1xuICAgIGlmIChwYXRoLmxlbmd0aCA+IDAgJiYgfnBhdGguaW5kZXhPZignOicpKSB7XG4gICAgICBjb25zdCBmdXR1cmVVcmwgPSB0aGlzLmdldFVybChmdXR1cmUpO1xuICAgICAgY29uc3QgY3VyclVybCA9IHRoaXMuZ2V0VXJsKGN1cnIpO1xuICAgICAgcmV0ID0gZnV0dXJlVXJsID09PSBjdXJyVXJsO1xuICAgIH1cbiAgICB0aGlzLmRpKCc9PT09PT09PT09PT09PT09PT09PT0nKTtcbiAgICB0aGlzLmRpKCcjc2hvdWxkUmV1c2VSb3V0ZScsIHJldCwgYCR7dGhpcy5nZXRVcmwoY3Vycil9PT4ke3RoaXMuZ2V0VXJsKGZ1dHVyZSl9YCwgZnV0dXJlLCBjdXJyKTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBzY3JvbGxcblxuICAvKipcbiAgICog6I635Y+WIGBrZWVwaW5nU2Nyb2xsYCDnirbmgIHvvIzpobrluo/lpoLkuIvvvJpcbiAgICpcbiAgICogMS4g6Lev55Sx6YWN572u5LitIGRhdGEg5bGe5oCn5Lit5YyF5ZCrIGBrZWVwaW5nU2Nyb2xsYFxuICAgKiAyLiDoj5zljZXmlbDmja7kuK0gYGtlZXBpbmdTY3JvbGxgIOWxnuaAp1xuICAgKiAzLiDnu4Tku7YgYGtlZXBpbmdTY3JvbGxgIOWAvFxuICAgKi9cbiAgZ2V0S2VlcGluZ1Njcm9sbCh1cmw6IHN0cmluZywgcm91dGU/OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgaWYgKHJvdXRlICYmIHJvdXRlLmRhdGEgJiYgdHlwZW9mIHJvdXRlLmRhdGEua2VlcGluZ1Njcm9sbCA9PT0gJ2Jvb2xlYW4nKSByZXR1cm4gcm91dGUuZGF0YS5rZWVwaW5nU2Nyb2xsO1xuXG4gICAgY29uc3QgbWVudSA9IHRoaXMubW9kZSAhPT0gUmV1c2VUYWJNYXRjaE1vZGUuVVJMID8gdGhpcy5nZXRNZW51KHVybCkgOiBudWxsO1xuICAgIGlmIChtZW51ICYmIHR5cGVvZiBtZW51LmtlZXBpbmdTY3JvbGwgPT09ICdib29sZWFuJykgcmV0dXJuIG1lbnUua2VlcGluZ1Njcm9sbDtcblxuICAgIHJldHVybiB0aGlzLmtlZXBpbmdTY3JvbGw7XG4gIH1cblxuICBwcml2YXRlIGdldCBpc0Rpc2FibGVkSW5Sb3V0ZXIoKTogYm9vbGVhbiB7XG4gICAgY29uc3Qgcm91dGVyQ29uZmlnID0gdGhpcy5pbmplY3Rvci5nZXQ8RXh0cmFPcHRpb25zPihST1VURVJfQ09ORklHVVJBVElPTiwge30gYXMgYW55KTtcbiAgICByZXR1cm4gcm91dGVyQ29uZmlnLnNjcm9sbFBvc2l0aW9uUmVzdG9yYXRpb24gPT09ICdkaXNhYmxlZCc7XG4gIH1cblxuICBwcml2YXRlIGdldCBzcygpOiBTY3JvbGxTZXJ2aWNlIHtcbiAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQoU2Nyb2xsU2VydmljZSk7XG4gIH1cblxuICBwcml2YXRlIGluaXRTY3JvbGwoKSB7XG4gICAgaWYgKHRoaXMuX3JvdXRlciQpIHtcbiAgICAgIHRoaXMuX3JvdXRlciQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9yb3V0ZXIkID0gdGhpcy5pbmplY3Rvci5nZXQ8Um91dGVyPihSb3V0ZXIpLmV2ZW50cy5zdWJzY3JpYmUoZSA9PiB7XG4gICAgICBpZiAoZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCkge1xuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLmN1clVybDtcbiAgICAgICAgaWYgKHRoaXMuZ2V0S2VlcGluZ1Njcm9sbCh1cmwsIHRoaXMuZ2V0VHJ1dGhSb3V0ZSh0aGlzLnNuYXBzaG90KSkpIHtcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uQnVmZmVyW3VybF0gPSB0aGlzLnNzLmdldFNjcm9sbFBvc2l0aW9uKHRoaXMua2VlcGluZ1Njcm9sbENvbnRhaW5lcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMucG9zaXRpb25CdWZmZXJbdXJsXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkge1xuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLmN1clVybDtcbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuZ2V0KHVybCk7XG4gICAgICAgIGlmIChpdGVtICYmIGl0ZW0ucG9zaXRpb24gJiYgdGhpcy5nZXRLZWVwaW5nU2Nyb2xsKHVybCwgdGhpcy5nZXRUcnV0aFJvdXRlKHRoaXMuc25hcHNob3QpKSkge1xuICAgICAgICAgIGlmICh0aGlzLmlzRGlzYWJsZWRJblJvdXRlcikge1xuICAgICAgICAgICAgdGhpcy5zcy5zY3JvbGxUb1Bvc2l0aW9uKHRoaXMua2VlcGluZ1Njcm9sbENvbnRhaW5lciwgaXRlbS5wb3NpdGlvbik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zcy5zY3JvbGxUb1Bvc2l0aW9uKHRoaXMua2VlcGluZ1Njcm9sbENvbnRhaW5lciwgaXRlbS5wb3NpdGlvbiEpLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IF9jYWNoZWRDaGFuZ2UsIF9yb3V0ZXIkIH0gPSB0aGlzO1xuICAgIHRoaXMuY2xlYXIoKTtcbiAgICB0aGlzLl9jYWNoZWQgPSBbXTtcbiAgICBfY2FjaGVkQ2hhbmdlLmNvbXBsZXRlKCk7XG5cbiAgICBpZiAoX3JvdXRlciQpIHtcbiAgICAgIF9yb3V0ZXIkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=