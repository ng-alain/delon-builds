import { Component, Input, EventEmitter, Output, HostListener, Injectable, ElementRef, Directive, Injector, ChangeDetectionStrategy, ChangeDetectorRef, Renderer2, Optional, Inject, defineInjectable, inject, INJECTOR, NgModule } from '@angular/core';
import { DelonLocaleService, MenuService, ALAIN_I18N_TOKEN, DelonLocaleModule } from '@delon/theme';
import { __read, __decorate, __metadata, __spread, __assign } from 'tslib';
import { Overlay, ConnectionPositionPair, OverlayModule } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Subscription, Subject, BehaviorSubject, combineLatest } from 'rxjs';
import { ActivatedRoute, Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter, debounceTime } from 'rxjs/operators';
import { InputNumber, InputBoolean } from '@delon/util';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ReuseTabContextMenuComponent = /** @class */ (function () {
    function ReuseTabContextMenuComponent(i18nSrv) {
        this.i18nSrv = i18nSrv;
        this.close = new EventEmitter();
    }
    Object.defineProperty(ReuseTabContextMenuComponent.prototype, "i18n", {
        get: /**
         * @return {?}
         */
        function () {
            return this._i18n;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._i18n = Object.assign({}, this.i18nSrv.getData('reuseTab'), value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReuseTabContextMenuComponent.prototype, "includeNonCloseable", {
        get: /**
         * @return {?}
         */
        function () {
            return this.event.ctrlKey;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} type
     * @param {?} item
     * @return {?}
     */
    ReuseTabContextMenuComponent.prototype.notify = /**
     * @param {?} type
     * @param {?} item
     * @return {?}
     */
    function (type, item) {
        this.close.next({
            type: type,
            item: this.item,
            includeNonCloseable: this.includeNonCloseable,
        });
    };
    /**
     * @return {?}
     */
    ReuseTabContextMenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.includeNonCloseable)
            this.item.closable = true;
    };
    /**
     * @param {?} e
     * @param {?} type
     * @return {?}
     */
    ReuseTabContextMenuComponent.prototype.click = /**
     * @param {?} e
     * @param {?} type
     * @return {?}
     */
    function (e, type) {
        e.preventDefault();
        e.stopPropagation();
        if (type === 'close' && !this.item.closable)
            return;
        if (type === 'closeRight' && this.item.last)
            return;
        this.notify(type, this.item);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ReuseTabContextMenuComponent.prototype.closeMenu = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.type === 'click' && event.button === 2)
            return;
        this.notify(null, null);
    };
    ReuseTabContextMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'reuse-tab-context-menu',
                    template: "\n  <ul nz-menu>\n      <li nz-menu-item (click)=\"click($event, 'close')\" data-type=\"close\" [nzDisabled]=\"!item.closable\" [innerHTML]=\"i18n.close\"></li>\n      <li nz-menu-item (click)=\"click($event, 'closeOther')\" data-type=\"closeOther\" [innerHTML]=\"i18n.closeOther\"></li>\n      <li nz-menu-item (click)=\"click($event, 'closeRight')\" data-type=\"closeRight\" [nzDisabled]=\"item.last\" [innerHTML]=\"i18n.closeRight\"></li>\n      <li nz-menu-item (click)=\"click($event, 'clear')\" data-type=\"clear\" [innerHTML]=\"i18n.clear\"></li>\n  </ul>",
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    ReuseTabContextMenuComponent.ctorParameters = function () { return [
        { type: DelonLocaleService }
    ]; };
    ReuseTabContextMenuComponent.propDecorators = {
        i18n: [{ type: Input }],
        item: [{ type: Input }],
        event: [{ type: Input }],
        close: [{ type: Output }],
        closeMenu: [{ type: HostListener, args: ['document:click', ['$event'],] }, { type: HostListener, args: ['document:contextmenu', ['$event'],] }]
    };
    return ReuseTabContextMenuComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ReuseTabContextService = /** @class */ (function () {
    function ReuseTabContextService(overlay) {
        this.overlay = overlay;
        this.show = new Subject();
        this.close = new Subject();
    }
    /**
     * @return {?}
     */
    ReuseTabContextService.prototype.remove = /**
     * @return {?}
     */
    function () {
        if (!this.ref)
            return;
        this.ref.detach();
        this.ref.dispose();
        this.ref = null;
    };
    /**
     * @param {?} context
     * @return {?}
     */
    ReuseTabContextService.prototype.open = /**
     * @param {?} context
     * @return {?}
     */
    function (context) {
        var _this = this;
        this.remove();
        var event = context.event, item = context.item;
        /** @type {?} */
        var fakeElement = new ElementRef({
            getBoundingClientRect: function () { return ({
                bottom: event.clientY,
                height: 0,
                left: event.clientX,
                right: event.clientX,
                top: event.clientY,
                width: 0,
            }); },
        });
        /** @type {?} */
        var positions = [
            new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
        ];
        /** @type {?} */
        var positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo(fakeElement)
            .withPositions(positions);
        this.ref = this.overlay.create({
            positionStrategy: positionStrategy,
            panelClass: 'reuse-tab__cm',
            scrollStrategy: this.overlay.scrollStrategies.close(),
        });
        /** @type {?} */
        var comp = this.ref.attach(new ComponentPortal(ReuseTabContextMenuComponent));
        /** @type {?} */
        var instance = comp.instance;
        instance.i18n = this.i18n;
        instance.item = __assign({}, item);
        instance.event = event;
        /** @type {?} */
        var sub$ = new Subscription();
        sub$.add(instance.close.subscribe(function (res) {
            _this.close.next(res);
            _this.remove();
        }));
        comp.onDestroy(function () { return sub$.unsubscribe(); });
    };
    ReuseTabContextService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ReuseTabContextService.ctorParameters = function () { return [
        { type: Overlay }
    ]; };
    return ReuseTabContextService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ReuseTabContextComponent = /** @class */ (function () {
    function ReuseTabContextComponent(srv) {
        var _this = this;
        this.srv = srv;
        this.sub$ = new Subscription();
        this.change = new EventEmitter();
        this.sub$.add(srv.show.subscribe(function (context) { return _this.srv.open(context); }));
        this.sub$.add(srv.close.subscribe(function (res) { return _this.change.emit(res); }));
    }
    Object.defineProperty(ReuseTabContextComponent.prototype, "i18n", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.srv.i18n = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ReuseTabContextComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.sub$.unsubscribe();
    };
    ReuseTabContextComponent.decorators = [
        { type: Component, args: [{
                    selector: 'reuse-tab-context',
                    template: "",
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    ReuseTabContextComponent.ctorParameters = function () { return [
        { type: ReuseTabContextService }
    ]; };
    ReuseTabContextComponent.propDecorators = {
        i18n: [{ type: Input }],
        change: [{ type: Output }]
    };
    return ReuseTabContextComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ReuseTabContextDirective = /** @class */ (function () {
    function ReuseTabContextDirective(srv) {
        this.srv = srv;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ReuseTabContextDirective.prototype.onContextMenu = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.srv.show.next({
            event: event,
            item: this.item,
        });
        event.preventDefault();
        event.stopPropagation();
    };
    ReuseTabContextDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[reuse-tab-context-menu]',
                },] }
    ];
    /** @nocollapse */
    ReuseTabContextDirective.ctorParameters = function () { return [
        { type: ReuseTabContextService }
    ]; };
    ReuseTabContextDirective.propDecorators = {
        item: [{ type: Input, args: ['reuse-tab-context-menu',] }],
        onContextMenu: [{ type: HostListener, args: ['contextmenu', ['$event'],] }]
    };
    return ReuseTabContextDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {number} */
var ReuseTabMatchMode = {
    /**
       * （推荐）按菜单 `Menu` 配置
       *
       * 可复用：
       * - `{ text:'Dashboard' }`
       * - `{ text:'Dashboard', reuse: true }`
       *
       * 不可复用：
       * - `{ text:'Dashboard', reuse: false }`
       */
    Menu: 0,
    /**
       * 按菜单 `Menu` 强制配置
       *
       * 可复用：
       * - `{ text:'Dashboard', reuse: true }`
       *
       * 不可复用：
       * - `{ text:'Dashboard' }`
       * - `{ text:'Dashboard', reuse: false }`
       */
    MenuForce: 1,
    /**
       * 对所有路由有效，可以配合 `excludes` 过滤无须复用路由
       */
    URL: 2,
};
ReuseTabMatchMode[ReuseTabMatchMode.Menu] = 'Menu';
ReuseTabMatchMode[ReuseTabMatchMode.MenuForce] = 'MenuForce';
ReuseTabMatchMode[ReuseTabMatchMode.URL] = 'URL';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * 路由复用类，提供复用所需要一些基本接口
 *
 * **注：** 所有缓存数据来源于路由离开后才会产生
 */
var ReuseTabService = /** @class */ (function () {
    // endregion
    function ReuseTabService(injector, menuService) {
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
    Object.defineProperty(ReuseTabService.prototype, "curUrl", {
        // region: public
        /** 当前路由地址 */
        get: /**
         * 当前路由地址
         * @return {?}
         */
        function () {
            return this.getUrl(this.injector.get(ActivatedRoute).snapshot);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReuseTabService.prototype, "max", {
        /** 允许最多复用多少个页面，取值范围 `2-100` */
        set: /**
         * 允许最多复用多少个页面，取值范围 `2-100`
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
    Object.defineProperty(ReuseTabService.prototype, "mode", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mode;
        },
        /** 设置匹配模式 */
        set: /**
         * 设置匹配模式
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._mode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReuseTabService.prototype, "debug", {
        get: /**
         * @return {?}
         */
        function () {
            return this._debug;
        },
        /** 设置Debug模式 */
        set: /**
         * 设置Debug模式
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._debug = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReuseTabService.prototype, "excludes", {
        get: /**
         * @return {?}
         */
        function () {
            return this._excludes;
        },
        /** 排除规则，限 `mode=URL` */
        set: /**
         * 排除规则，限 `mode=URL`
         * @param {?} values
         * @return {?}
         */
        function (values) {
            if (!values)
                return;
            this._excludes = values;
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
        return this._cached.findIndex(function (w) { return w.url === url; });
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
     * @param {?} url
     * @return {?}
     */
    ReuseTabService.prototype.get = /**
     * 获取指定路径缓存
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return url ? this._cached.find(function (w) { return w.url === url; }) || null : null;
    };
    /**
     * @param {?} url
     * @param {?} includeNonCloseable
     * @return {?}
     */
    ReuseTabService.prototype.remove = /**
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
        this._cached.forEach(function (w) {
            if (!includeNonCloseable && w.closable)
                _this.destroy(w._handle);
        });
        this._cached = this._cached.filter(function (w) { return !includeNonCloseable && !w.closable; });
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
        var start = this._cached.findIndex(function (w) { return w.url === url; });
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
        if (this._titleCached[url])
            return this._titleCached[url];
        if (route && route.data && (route.data["titleI18n"] || route.data["title"]))
            return /** @type {?} */ ({
                text: route.data["title"],
                i18n: route.data["titleI18n"],
            });
        /** @type {?} */
        var menu = this.mode !== ReuseTabMatchMode.URL ? this.getMenu(url) : null;
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
        if (route && route.data && typeof route.data["reuseClosable"] === 'boolean')
            return route.data["reuseClosable"];
        /** @type {?} */
        var menu = this.mode !== ReuseTabMatchMode.URL ? this.getMenu(url) : null;
        if (menu && typeof menu["reuseClosable"] === 'boolean')
            return menu["reuseClosable"];
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
            next = next.parent;
        }
        /** @type {?} */
        var url = '/' +
            segments
                .filter(function (i) { return i; })
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
        if (route.data && typeof route.data["reuse"] === 'boolean')
            return route.data["reuse"];
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
        return this._excludes.findIndex(function (r) { return r.test(url); }) === -1;
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
    /**
     * @param {?} _handle
     * @return {?}
     */
    ReuseTabService.prototype.destroy = /**
     * @param {?} _handle
     * @return {?}
     */
    function (_handle) {
        if (_handle && _handle.componentRef && _handle.componentRef.destroy)
            _handle.componentRef.destroy();
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    ReuseTabService.prototype.di = /**
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
     * @param {?} url
     * @return {?}
     */
    ReuseTabService.prototype.getMenu = /**
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
     * @param {?} url
     * @param {?} comp
     * @return {?}
     */
    ReuseTabService.prototype.runHook = /**
     * @param {?} method
     * @param {?} url
     * @param {?} comp
     * @return {?}
     */
    function (method, url, comp) {
        if (comp.instance && typeof comp.instance[method] === 'function')
            comp.instance[method]();
    };
    /**
     * @param {?} route
     * @return {?}
     */
    ReuseTabService.prototype.hasInValidRoute = /**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        return (!route.routeConfig ||
            route.routeConfig.loadChildren ||
            route.routeConfig.children);
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
        var item = {
            title: this.getTitle(url, _snapshot),
            closable: this.getClosable(url, _snapshot),
            url: url,
            _snapshot: _snapshot,
            _handle: _handle,
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
        this._cachedChange.next({ active: 'add', item: item, list: this._cached });
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
        if (ret && data._handle.componentRef) {
            this.runHook('_onReuseInit', url, data._handle.componentRef);
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
        var path = /** @type {?} */ (((future.routeConfig && future.routeConfig.path) ||
            ''));
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
    /**
     * @return {?}
     */
    ReuseTabService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._cached = [];
        this._cachedChange.unsubscribe();
    };
    ReuseTabService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ReuseTabService.ctorParameters = function () { return [
        { type: Injector },
        { type: MenuService }
    ]; };
    /** @nocollapse */ ReuseTabService.ngInjectableDef = defineInjectable({ factory: function ReuseTabService_Factory() { return new ReuseTabService(inject(INJECTOR), inject(MenuService)); }, token: ReuseTabService, providedIn: "root" });
    return ReuseTabService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ReuseTabComponent = /** @class */ (function () {
    // #endregion
    function ReuseTabComponent(el, srv, cd, router, route, render, i18nSrv) {
        var _this = this;
        this.srv = srv;
        this.cd = cd;
        this.router = router;
        this.route = route;
        this.render = render;
        this.i18nSrv = i18nSrv;
        this.list = [];
        this.pos = 0;
        /**
         * 设置匹配模式
         */
        this.mode = ReuseTabMatchMode.Menu;
        /**
         * 是否Debug模式
         */
        this.debug = false;
        /**
         * 允许关闭
         */
        this.allowClose = true;
        /**
         * 总是显示当前页
         */
        this.showCurrent = true;
        /**
         * 切换时回调
         */
        this.change = new EventEmitter();
        /**
         * 关闭回调
         */
        this.close = new EventEmitter();
        this.el = el.nativeElement;
        /** @type {?} */
        var route$ = this.router.events.pipe(filter(function (evt) { return evt instanceof NavigationEnd; }));
        this.sub$ = combineLatest(this.srv.change, route$).subscribe(function (_a) {
            var _b = __read(_a, 2), res = _b[0], e = _b[1];
            return _this.genList(/** @type {?} */ (res));
        });
        if (this.i18nSrv) {
            this.i18n$ = this.i18nSrv.change
                .pipe(debounceTime(100))
                .subscribe(function () { return _this.genList(); });
        }
    }
    /**
     * @param {?} title
     * @return {?}
     */
    ReuseTabComponent.prototype.genTit = /**
     * @param {?} title
     * @return {?}
     */
    function (title) {
        return title.i18n && this.i18nSrv
            ? this.i18nSrv.fanyi(title.i18n)
            : title.text;
    };
    /**
     * @param {?=} notify
     * @return {?}
     */
    ReuseTabComponent.prototype.genList = /**
     * @param {?=} notify
     * @return {?}
     */
    function (notify) {
        var _this = this;
        /** @type {?} */
        var isClosed = notify && notify.active === 'close';
        /** @type {?} */
        var beforeClosePos = isClosed
            ? this.list.findIndex(function (w) { return w.url === notify["url"]; })
            : -1;
        /** @type {?} */
        var ls = this.srv.items.map(function (item, index) {
            return /** @type {?} */ ({
                url: item.url,
                title: _this.genTit(item.title),
                closable: _this.allowClose && item.closable && _this.srv.count > 0,
                index: index,
                active: false,
                last: false,
            });
        });
        if (this.showCurrent) {
            /** @type {?} */
            var snapshot = this.route.snapshot;
            /** @type {?} */
            var url_1 = this.srv.getUrl(snapshot);
            /** @type {?} */
            var idx = ls.findIndex(function (w) { return w.url === url_1; });
            // jump directly when the current exists in the list
            // or create a new current item and jump
            if (idx !== -1 || (isClosed && notify["url"] === url_1)) {
                this.pos = isClosed
                    ? idx >= beforeClosePos
                        ? this.pos - 1
                        : this.pos
                    : idx;
            }
            else {
                /** @type {?} */
                var snapshotTrue = this.srv.getTruthRoute(snapshot);
                ls.push(/** @type {?} */ ({
                    url: url_1,
                    title: this.genTit(this.srv.getTitle(url_1, snapshotTrue)),
                    closable: this.allowClose &&
                        this.srv.count > 0 &&
                        this.srv.getClosable(url_1, snapshotTrue),
                    index: ls.length,
                    active: false,
                    last: false,
                }));
                this.pos = ls.length - 1;
            }
            // fix unabled close last item
            if (ls.length <= 1)
                ls[0].closable = false;
        }
        this.list = ls;
        if (ls.length && isClosed) {
            this.to(null, this.pos);
        }
        this.refStatus(false);
        this.visibility();
        this.cd.detectChanges();
    };
    /**
     * @return {?}
     */
    ReuseTabComponent.prototype.visibility = /**
     * @return {?}
     */
    function () {
        if (this.showCurrent)
            return;
        this.render.setStyle(this.el, 'display', this.list.length === 0 ? 'none' : 'block');
    };
    // #region UI
    /**
     * @param {?} res
     * @return {?}
     */
    ReuseTabComponent.prototype.cmChange = /**
     * @param {?} res
     * @return {?}
     */
    function (res) {
        switch (res.type) {
            case 'close':
                this._close(null, res.item.index, res.includeNonCloseable);
                break;
            case 'closeRight':
                this.srv.closeRight(res.item.url, res.includeNonCloseable);
                this.close.emit(null);
                break;
            case 'clear':
            case 'closeOther':
                this.srv.clear(res.includeNonCloseable);
                this.close.emit(null);
                break;
        }
    };
    /**
     * @param {?=} dc
     * @return {?}
     */
    ReuseTabComponent.prototype.refStatus = /**
     * @param {?=} dc
     * @return {?}
     */
    function (dc) {
        var _this = this;
        if (dc === void 0) { dc = true; }
        if (this.list.length) {
            this.list[this.list.length - 1].last = true;
            this.list.forEach(function (i, idx) { return (i.active = _this.pos === idx); });
        }
        if (dc)
            this.cd.detectChanges();
    };
    /**
     * @param {?} e
     * @param {?} index
     * @return {?}
     */
    ReuseTabComponent.prototype.to = /**
     * @param {?} e
     * @param {?} index
     * @return {?}
     */
    function (e, index) {
        var _this = this;
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        index = Math.max(0, Math.min(index, this.list.length - 1));
        /** @type {?} */
        var item = this.list[index];
        this.router.navigateByUrl(item.url).then(function (res) {
            if (!res)
                return;
            _this.pos = index;
            _this.item = item;
            _this.refStatus();
            _this.change.emit(item);
        });
    };
    /**
     * @param {?} e
     * @param {?} idx
     * @param {?} includeNonCloseable
     * @return {?}
     */
    ReuseTabComponent.prototype._close = /**
     * @param {?} e
     * @param {?} idx
     * @param {?} includeNonCloseable
     * @return {?}
     */
    function (e, idx, includeNonCloseable) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        /** @type {?} */
        var item = this.list[idx];
        this.srv.close(item.url, includeNonCloseable);
        this.close.emit(item);
        this.cd.detectChanges();
        return false;
    };
    // #endregion
    /**
     * @return {?}
     */
    ReuseTabComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.genList();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ReuseTabComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.max)
            this.srv.max = this.max;
        if (changes.excludes)
            this.srv.excludes = this.excludes;
        if (changes.mode)
            this.srv.mode = this.mode;
        this.srv.debug = this.debug;
        this.cd.detectChanges();
    };
    /**
     * @return {?}
     */
    ReuseTabComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _a = this, i18n$ = _a.i18n$, sub$ = _a.sub$;
        sub$.unsubscribe();
        if (i18n$)
            i18n$.unsubscribe();
    };
    ReuseTabComponent.decorators = [
        { type: Component, args: [{
                    selector: 'reuse-tab',
                    template: "<nz-tabset [nzSelectedIndex]=\"pos\" [nzAnimated]=\"false\" nzType=\"line\">\r\n  <nz-tab *ngFor=\"let i of list; let index = index\" [nzTitle]=\"titleTemplate\">\r\n    <ng-template #titleTemplate>\r\n      <span [reuse-tab-context-menu]=\"i\" (click)=\"to($event, index)\" class=\"name\">{{i.title}}</span>\r\n      <i *ngIf=\"i.closable\" class=\"anticon anticon-close op\" (click)=\"_close($event, index, false)\"></i>\r\n    </ng-template>\r\n  </nz-tab>\r\n</nz-tabset>\r\n<reuse-tab-context [i18n]=\"i18n\" (change)=\"cmChange($event)\"></reuse-tab-context>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    providers: [ReuseTabContextService],
                    host: {
                        '[class.reuse-tab]': 'true',
                    }
                }] }
    ];
    /** @nocollapse */
    ReuseTabComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ReuseTabService },
        { type: ChangeDetectorRef },
        { type: Router },
        { type: ActivatedRoute },
        { type: Renderer2 },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] }
    ]; };
    ReuseTabComponent.propDecorators = {
        mode: [{ type: Input }],
        i18n: [{ type: Input }],
        debug: [{ type: Input }],
        max: [{ type: Input }],
        excludes: [{ type: Input }],
        allowClose: [{ type: Input }],
        showCurrent: [{ type: Input }],
        change: [{ type: Output }],
        close: [{ type: Output }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], ReuseTabComponent.prototype, "debug", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], ReuseTabComponent.prototype, "max", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], ReuseTabComponent.prototype, "allowClose", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], ReuseTabComponent.prototype, "showCurrent", void 0);
    return ReuseTabComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ReuseTabStrategy = /** @class */ (function () {
    function ReuseTabStrategy(srv) {
        this.srv = srv;
    }
    /**
     * @param {?} route
     * @return {?}
     */
    ReuseTabStrategy.prototype.shouldDetach = /**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        return this.srv.shouldDetach(route);
    };
    /**
     * @param {?} route
     * @param {?} handle
     * @return {?}
     */
    ReuseTabStrategy.prototype.store = /**
     * @param {?} route
     * @param {?} handle
     * @return {?}
     */
    function (route, handle) {
        this.srv.store(route, handle);
    };
    /**
     * @param {?} route
     * @return {?}
     */
    ReuseTabStrategy.prototype.shouldAttach = /**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        return this.srv.shouldAttach(route);
    };
    /**
     * @param {?} route
     * @return {?}
     */
    ReuseTabStrategy.prototype.retrieve = /**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        return this.srv.retrieve(route);
    };
    /**
     * @param {?} future
     * @param {?} curr
     * @return {?}
     */
    ReuseTabStrategy.prototype.shouldReuseRoute = /**
     * @param {?} future
     * @param {?} curr
     * @return {?}
     */
    function (future, curr) {
        return this.srv.shouldReuseRoute(future, curr);
    };
    return ReuseTabStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [ReuseTabComponent];
/** @type {?} */
var NOEXPORTS = [
    ReuseTabContextMenuComponent,
    ReuseTabContextComponent,
    ReuseTabContextDirective,
];
var ReuseTabModule = /** @class */ (function () {
    function ReuseTabModule() {
    }
    /**
     * @return {?}
     */
    ReuseTabModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: ReuseTabModule,
        };
    };
    ReuseTabModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        DelonLocaleModule,
                        NgZorroAntdModule,
                        OverlayModule,
                    ],
                    declarations: __spread(COMPONENTS, NOEXPORTS),
                    entryComponents: [ReuseTabContextMenuComponent],
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return ReuseTabModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { ReuseTabContextMenuComponent, ReuseTabContextComponent, ReuseTabContextDirective, ReuseTabContextService, ReuseTabComponent, ReuseTabService, ReuseTabStrategy, ReuseTabModule, ReuseTabMatchMode };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2VUYWIuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9hYmMvcmV1c2UtdGFiL3JldXNlLXRhYi1jb250ZXh0LW1lbnUuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL3JldXNlLXRhYi9yZXVzZS10YWItY29udGV4dC5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vYWJjL3JldXNlLXRhYi9yZXVzZS10YWItY29udGV4dC5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9hYmMvcmV1c2UtdGFiL3JldXNlLXRhYi1jb250ZXh0LmRpcmVjdGl2ZS50cyIsIm5nOi8vQGRlbG9uL2FiYy9yZXVzZS10YWIvcmV1c2UtdGFiLmludGVyZmFjZXMudHMiLCJuZzovL0BkZWxvbi9hYmMvcmV1c2UtdGFiL3JldXNlLXRhYi5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vYWJjL3JldXNlLXRhYi9yZXVzZS10YWIuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL3JldXNlLXRhYi9yZXVzZS10YWIuc3RyYXRlZ3kudHMiLCJuZzovL0BkZWxvbi9hYmMvcmV1c2UtdGFiL3JldXNlLXRhYi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE91dHB1dCxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgT25Jbml0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEZWxvbkxvY2FsZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBSZXVzZUNvbnRleHRJMThuLFxyXG4gIFJldXNlQ29udGV4dENsb3NlRXZlbnQsXHJcbiAgUmV1c2VJdGVtLFxyXG4gIENsb3NlVHlwZSxcclxufSBmcm9tICcuL3JldXNlLXRhYi5pbnRlcmZhY2VzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncmV1c2UtdGFiLWNvbnRleHQtbWVudScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8dWwgbnotbWVudT5cclxuICAgICAgPGxpIG56LW1lbnUtaXRlbSAoY2xpY2spPVwiY2xpY2soJGV2ZW50LCAnY2xvc2UnKVwiIGRhdGEtdHlwZT1cImNsb3NlXCIgW256RGlzYWJsZWRdPVwiIWl0ZW0uY2xvc2FibGVcIiBbaW5uZXJIVE1MXT1cImkxOG4uY2xvc2VcIj48L2xpPlxyXG4gICAgICA8bGkgbnotbWVudS1pdGVtIChjbGljayk9XCJjbGljaygkZXZlbnQsICdjbG9zZU90aGVyJylcIiBkYXRhLXR5cGU9XCJjbG9zZU90aGVyXCIgW2lubmVySFRNTF09XCJpMThuLmNsb3NlT3RoZXJcIj48L2xpPlxyXG4gICAgICA8bGkgbnotbWVudS1pdGVtIChjbGljayk9XCJjbGljaygkZXZlbnQsICdjbG9zZVJpZ2h0JylcIiBkYXRhLXR5cGU9XCJjbG9zZVJpZ2h0XCIgW256RGlzYWJsZWRdPVwiaXRlbS5sYXN0XCIgW2lubmVySFRNTF09XCJpMThuLmNsb3NlUmlnaHRcIj48L2xpPlxyXG4gICAgICA8bGkgbnotbWVudS1pdGVtIChjbGljayk9XCJjbGljaygkZXZlbnQsICdjbGVhcicpXCIgZGF0YS10eXBlPVwiY2xlYXJcIiBbaW5uZXJIVE1MXT1cImkxOG4uY2xlYXJcIj48L2xpPlxyXG4gIDwvdWw+YCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJldXNlVGFiQ29udGV4dE1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHByaXZhdGUgX2kxOG46IFJldXNlQ29udGV4dEkxOG47XHJcbiAgQElucHV0KClcclxuICBzZXQgaTE4bih2YWx1ZTogUmV1c2VDb250ZXh0STE4bikge1xyXG4gICAgdGhpcy5faTE4biA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuaTE4blNydi5nZXREYXRhKCdyZXVzZVRhYicpLCB2YWx1ZSk7XHJcbiAgfVxyXG4gIGdldCBpMThuKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2kxOG47XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIGl0ZW06IFJldXNlSXRlbTtcclxuXHJcbiAgQElucHV0KClcclxuICBldmVudDogTW91c2VFdmVudDtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPFJldXNlQ29udGV4dENsb3NlRXZlbnQ+KCk7XHJcblxyXG4gIGdldCBpbmNsdWRlTm9uQ2xvc2VhYmxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZXZlbnQuY3RybEtleTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4blNydjogRGVsb25Mb2NhbGVTZXJ2aWNlKSB7fVxyXG5cclxuICBwcml2YXRlIG5vdGlmeSh0eXBlOiBDbG9zZVR5cGUsIGl0ZW06IFJldXNlSXRlbSkge1xyXG4gICAgdGhpcy5jbG9zZS5uZXh0KHtcclxuICAgICAgdHlwZSxcclxuICAgICAgaXRlbTogdGhpcy5pdGVtLFxyXG4gICAgICBpbmNsdWRlTm9uQ2xvc2VhYmxlOiB0aGlzLmluY2x1ZGVOb25DbG9zZWFibGUsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5jbHVkZU5vbkNsb3NlYWJsZSkgdGhpcy5pdGVtLmNsb3NhYmxlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGNsaWNrKGU6IE1vdXNlRXZlbnQsIHR5cGU6IENsb3NlVHlwZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGlmICh0eXBlID09PSAnY2xvc2UnICYmICF0aGlzLml0ZW0uY2xvc2FibGUpIHJldHVybjtcclxuICAgIGlmICh0eXBlID09PSAnY2xvc2VSaWdodCcgJiYgdGhpcy5pdGVtLmxhc3QpIHJldHVybjtcclxuICAgIHRoaXMubm90aWZ5KHR5cGUsIHRoaXMuaXRlbSk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y29udGV4dG1lbnUnLCBbJyRldmVudCddKVxyXG4gIGNsb3NlTWVudShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycgJiYgZXZlbnQuYnV0dG9uID09PSAyKSByZXR1cm47XHJcbiAgICB0aGlzLm5vdGlmeShudWxsLCBudWxsKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIE92ZXJsYXksXHJcbiAgT3ZlcmxheVJlZixcclxuICBDb25uZWN0aW9uUG9zaXRpb25QYWlyLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBSZXVzZUNvbnRleHRFdmVudCxcclxuICBSZXVzZUNvbnRleHRJMThuLFxyXG4gIFJldXNlQ29udGV4dENsb3NlRXZlbnQsXHJcbn0gZnJvbSAnLi9yZXVzZS10YWIuaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dE1lbnVDb21wb25lbnQgfSBmcm9tICcuL3JldXNlLXRhYi1jb250ZXh0LW1lbnUuY29tcG9uZW50JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJldXNlVGFiQ29udGV4dFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcmVmOiBPdmVybGF5UmVmO1xyXG4gIGkxOG46IFJldXNlQ29udGV4dEkxOG47XHJcblxyXG4gIHNob3c6IFN1YmplY3Q8UmV1c2VDb250ZXh0RXZlbnQ+ID0gbmV3IFN1YmplY3Q8UmV1c2VDb250ZXh0RXZlbnQ+KCk7XHJcbiAgY2xvc2U6IFN1YmplY3Q8UmV1c2VDb250ZXh0Q2xvc2VFdmVudD4gPSBuZXcgU3ViamVjdDxcclxuICAgIFJldXNlQ29udGV4dENsb3NlRXZlbnRcclxuICA+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSkge31cclxuXHJcbiAgcmVtb3ZlKCkge1xyXG4gICAgaWYgKCF0aGlzLnJlZikgcmV0dXJuO1xyXG4gICAgdGhpcy5yZWYuZGV0YWNoKCk7XHJcbiAgICB0aGlzLnJlZi5kaXNwb3NlKCk7XHJcbiAgICB0aGlzLnJlZiA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBvcGVuKGNvbnRleHQ6IFJldXNlQ29udGV4dEV2ZW50KSB7XHJcbiAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgY29uc3QgeyBldmVudCwgaXRlbSB9ID0gY29udGV4dDtcclxuICAgIGNvbnN0IGZha2VFbGVtZW50ID0gbmV3IEVsZW1lbnRSZWYoe1xyXG4gICAgICBnZXRCb3VuZGluZ0NsaWVudFJlY3Q6ICgpOiBDbGllbnRSZWN0ID0+ICh7XHJcbiAgICAgICAgYm90dG9tOiBldmVudC5jbGllbnRZLFxyXG4gICAgICAgIGhlaWdodDogMCxcclxuICAgICAgICBsZWZ0OiBldmVudC5jbGllbnRYLFxyXG4gICAgICAgIHJpZ2h0OiBldmVudC5jbGllbnRYLFxyXG4gICAgICAgIHRvcDogZXZlbnQuY2xpZW50WSxcclxuICAgICAgICB3aWR0aDogMCxcclxuICAgICAgfSksXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtcclxuICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoXHJcbiAgICAgICAgeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAnYm90dG9tJyB9LFxyXG4gICAgICAgIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAndG9wJyB9LFxyXG4gICAgICApLFxyXG4gICAgICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcihcclxuICAgICAgICB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnIH0sXHJcbiAgICAgICAgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdib3R0b20nIH0sXHJcbiAgICAgICksXHJcbiAgICBdO1xyXG4gICAgY29uc3QgcG9zaXRpb25TdHJhdGVneSA9IHRoaXMub3ZlcmxheVxyXG4gICAgICAucG9zaXRpb24oKVxyXG4gICAgICAuZmxleGlibGVDb25uZWN0ZWRUbyhmYWtlRWxlbWVudClcclxuICAgICAgLndpdGhQb3NpdGlvbnMocG9zaXRpb25zKTtcclxuICAgIHRoaXMucmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSh7XHJcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3ksXHJcbiAgICAgIHBhbmVsQ2xhc3M6ICdyZXVzZS10YWJfX2NtJyxcclxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmNsb3NlKCksXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNvbXAgPSB0aGlzLnJlZi5hdHRhY2goXHJcbiAgICAgIG5ldyBDb21wb25lbnRQb3J0YWwoUmV1c2VUYWJDb250ZXh0TWVudUNvbXBvbmVudCksXHJcbiAgICApO1xyXG4gICAgY29uc3QgaW5zdGFuY2UgPSBjb21wLmluc3RhbmNlO1xyXG4gICAgaW5zdGFuY2UuaTE4biA9IHRoaXMuaTE4bjtcclxuICAgIGluc3RhbmNlLml0ZW0gPSB7IC4uLml0ZW0gfTtcclxuICAgIGluc3RhbmNlLmV2ZW50ID0gZXZlbnQ7XHJcblxyXG4gICAgY29uc3Qgc3ViJCA9IG5ldyBTdWJzY3JpcHRpb24oKTtcclxuICAgIHN1YiQuYWRkKFxyXG4gICAgICBpbnN0YW5jZS5jbG9zZS5zdWJzY3JpYmUoKHJlczogUmV1c2VDb250ZXh0Q2xvc2VFdmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xvc2UubmV4dChyZXMpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgIH0pLFxyXG4gICAgKTtcclxuICAgIGNvbXAub25EZXN0cm95KCgpID0+IHN1YiQudW5zdWJzY3JpYmUoKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT25EZXN0cm95LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IFJldXNlQ29udGV4dEkxOG4sIFJldXNlQ29udGV4dENsb3NlRXZlbnQgfSBmcm9tICcuL3JldXNlLXRhYi5pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgUmV1c2VUYWJDb250ZXh0U2VydmljZSB9IGZyb20gJy4vcmV1c2UtdGFiLWNvbnRleHQuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3JldXNlLXRhYi1jb250ZXh0JyxcclxuICB0ZW1wbGF0ZTogYGAsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXVzZVRhYkNvbnRleHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgc3ViJDogU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBpMThuKHZhbHVlOiBSZXVzZUNvbnRleHRJMThuKSB7XHJcbiAgICB0aGlzLnNydi5pMThuID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxSZXVzZUNvbnRleHRDbG9zZUV2ZW50PigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNydjogUmV1c2VUYWJDb250ZXh0U2VydmljZSkge1xyXG4gICAgdGhpcy5zdWIkLmFkZChzcnYuc2hvdy5zdWJzY3JpYmUoY29udGV4dCA9PiB0aGlzLnNydi5vcGVuKGNvbnRleHQpKSk7XHJcbiAgICB0aGlzLnN1YiQuYWRkKHNydi5jbG9zZS5zdWJzY3JpYmUocmVzID0+IHRoaXMuY2hhbmdlLmVtaXQocmVzKSkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnN1YiQudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBSZXVzZVRhYkNvbnRleHRTZXJ2aWNlIH0gZnJvbSAnLi9yZXVzZS10YWItY29udGV4dC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUmV1c2VJdGVtIH0gZnJvbSAnLi9yZXVzZS10YWIuaW50ZXJmYWNlcyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tyZXVzZS10YWItY29udGV4dC1tZW51XScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXVzZVRhYkNvbnRleHREaXJlY3RpdmUge1xyXG4gIEBJbnB1dCgncmV1c2UtdGFiLWNvbnRleHQtbWVudScpIGl0ZW06IFJldXNlSXRlbTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IFJldXNlVGFiQ29udGV4dFNlcnZpY2UpIHt9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgWyckZXZlbnQnXSlcclxuICBvbkNvbnRleHRNZW51KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLnNydi5zaG93Lm5leHQoe1xyXG4gICAgICBldmVudCxcclxuICAgICAgaXRlbTogdGhpcy5pdGVtLFxyXG4gICAgfSk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBSZXVzZVRhYkNvbnRleHRDb21wb25lbnQgfSBmcm9tICcuL3JldXNlLXRhYi1jb250ZXh0LmNvbXBvbmVudCc7XHJcblxyXG4vKipcclxuICogw6XCpMKNw6fClMKow6XCjMK5w6nChcKNw6bCqMKhw6XCvMKPXHJcbiAqL1xyXG5leHBvcnQgZW51bSBSZXVzZVRhYk1hdGNoTW9kZSB7XHJcbiAgLyoqXHJcbiAgICogw6/CvMKIw6bCjsKow6jCjcKQw6/CvMKJw6bCjMKJw6jCj8Kcw6XCjcKVIGBNZW51YCDDqcKFwo3Dp8K9wq5cclxuICAgKlxyXG4gICAqIMOlwo/Cr8OlwqTCjcOnwpTCqMOvwrzCmlxyXG4gICAqIC0gYHsgdGV4dDonRGFzaGJvYXJkJyB9YFxyXG4gICAqIC0gYHsgdGV4dDonRGFzaGJvYXJkJywgcmV1c2U6IHRydWUgfWBcclxuICAgKlxyXG4gICAqIMOkwrjCjcOlwo/Cr8OlwqTCjcOnwpTCqMOvwrzCmlxyXG4gICAqIC0gYHsgdGV4dDonRGFzaGJvYXJkJywgcmV1c2U6IGZhbHNlIH1gXHJcbiAgICovXHJcbiAgTWVudSxcclxuICAvKipcclxuICAgKiDDpsKMwonDqMKPwpzDpcKNwpUgYE1lbnVgIMOlwrzCusOlwojCtsOpwoXCjcOnwr3CrlxyXG4gICAqXHJcbiAgICogw6XCj8Kvw6XCpMKNw6fClMKow6/CvMKaXHJcbiAgICogLSBgeyB0ZXh0OidEYXNoYm9hcmQnLCByZXVzZTogdHJ1ZSB9YFxyXG4gICAqXHJcbiAgICogw6TCuMKNw6XCj8Kvw6XCpMKNw6fClMKow6/CvMKaXHJcbiAgICogLSBgeyB0ZXh0OidEYXNoYm9hcmQnIH1gXHJcbiAgICogLSBgeyB0ZXh0OidEYXNoYm9hcmQnLCByZXVzZTogZmFsc2UgfWBcclxuICAgKi9cclxuICBNZW51Rm9yY2UsXHJcbiAgLyoqXHJcbiAgICogw6XCr8K5w6bCicKAw6bCnMKJw6jCt8Kvw6fClMKxw6bCnMKJw6bClcKIw6/CvMKMw6XCj8Kvw6TCu8Klw6nChcKNw6XCkMKIIGBleGNsdWRlc2Agw6jCv8KHw6bCu8Kkw6bCl8Kgw6nCocK7w6XCpMKNw6fClMKow6jCt8Kvw6fClMKxXHJcbiAgICovXHJcbiAgVVJMLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlVGl0bGUge1xyXG4gIHRleHQ6IHN0cmluZztcclxuICBpMThuPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlVGFiQ2FjaGVkIHtcclxuICB0aXRsZTogUmV1c2VUaXRsZTtcclxuXHJcbiAgdXJsOiBzdHJpbmc7XHJcblxyXG4gIC8qKiDDpsKYwq/DpcKQwqbDpcKFwoHDqMKuwrjDpcKFwrPDqcKXwq3Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgdHJ1ZWAgKi9cclxuICBjbG9zYWJsZT86IGJvb2xlYW47XHJcblxyXG4gIF9zbmFwc2hvdDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdDtcclxuXHJcbiAgX2hhbmRsZTogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlVGFiTm90aWZ5IHtcclxuICAvKiogw6TCusKLw6TCu8K2w6fCscK7w6XCnsKLICovXHJcbiAgYWN0aXZlOiBzdHJpbmc7XHJcblxyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXVzZUl0ZW0ge1xyXG4gIHVybDogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgY2xvc2FibGU6IGJvb2xlYW47XHJcbiAgaW5kZXg6IG51bWJlcjtcclxuICBhY3RpdmU6IGJvb2xlYW47XHJcbiAgbGFzdDogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXVzZUNvbnRleHRFdmVudCB7XHJcbiAgZXZlbnQ6IE1vdXNlRXZlbnQ7XHJcbiAgaXRlbTogUmV1c2VJdGVtO1xyXG4gIGNvbXA/OiBSZXVzZVRhYkNvbnRleHRDb21wb25lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIENsb3NlVHlwZSA9ICdjbG9zZScgfCAnY2xvc2VPdGhlcicgfCAnY2xvc2VSaWdodCcgfCAnY2xlYXInIHwgbnVsbDtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VDb250ZXh0Q2xvc2VFdmVudCB7XHJcbiAgdHlwZTogQ2xvc2VUeXBlO1xyXG4gIGl0ZW06IFJldXNlSXRlbTtcclxuICBpbmNsdWRlTm9uQ2xvc2VhYmxlOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlQ29udGV4dEkxOG4ge1xyXG4gIGNsb3NlPzogc3RyaW5nO1xyXG4gIGNsb3NlT3RoZXI/OiBzdHJpbmc7XHJcbiAgY2xvc2VSaWdodD86IHN0cmluZztcclxuICBjbGVhcj86IHN0cmluZztcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3ksIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcclxuICBBY3RpdmF0ZWRSb3V0ZSxcclxuICBSb3V0ZXIsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE1lbnVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcclxuaW1wb3J0IHtcclxuICBSZXVzZVRhYkNhY2hlZCxcclxuICBSZXVzZVRhYk1hdGNoTW9kZSxcclxuICBSZXVzZVRhYk5vdGlmeSxcclxuICBSZXVzZVRpdGxlLFxyXG59IGZyb20gJy4vcmV1c2UtdGFiLmludGVyZmFjZXMnO1xyXG5cclxuLyoqXHJcbiAqIMOowrfCr8OnwpTCscOlwqTCjcOnwpTCqMOnwrHCu8OvwrzCjMOmwo/CkMOkwr7Cm8OlwqTCjcOnwpTCqMOmwonCgMOpwpzCgMOowqbCgcOkwrjCgMOkwrrCm8Olwp/CusOmwpzCrMOmwo7CpcOlwo/Co1xyXG4gKlxyXG4gKiAqKsOmwrPCqMOvwrzCmioqIMOmwonCgMOmwpzCicOnwrzCk8Olwq3CmMOmwpXCsMOmwo3CrsOmwp3CpcOmwrrCkMOkwrrCjsOowrfCr8OnwpTCscOnwqbCu8OlwrzCgMOlwpDCjsOmwonCjcOkwrzCmsOkwrrCp8OnwpTCn1xyXG4gKi9cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIFJldXNlVGFiU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBfbWF4ID0gMTA7XHJcbiAgcHJpdmF0ZSBfZGVidWcgPSBmYWxzZTtcclxuICBwcml2YXRlIF9tb2RlID0gUmV1c2VUYWJNYXRjaE1vZGUuTWVudTtcclxuICBwcml2YXRlIF9leGNsdWRlczogUmVnRXhwW10gPSBbXTtcclxuICBwcml2YXRlIF9jYWNoZWRDaGFuZ2U6IEJlaGF2aW9yU3ViamVjdDxcclxuICAgIFJldXNlVGFiTm90aWZ5XHJcbiAgPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8UmV1c2VUYWJOb3RpZnk+KG51bGwpO1xyXG4gIHByaXZhdGUgX2NhY2hlZDogUmV1c2VUYWJDYWNoZWRbXSA9IFtdO1xyXG4gIHByaXZhdGUgX3RpdGxlQ2FjaGVkOiB7IFt1cmw6IHN0cmluZ106IFJldXNlVGl0bGUgfSA9IHt9O1xyXG4gIHByaXZhdGUgX2Nsb3NhYmxlQ2FjaGVkOiB7IFt1cmw6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xyXG4gIHByaXZhdGUgcmVtb3ZlVXJsQnVmZmVyOiBzdHJpbmc7XHJcblxyXG4gIC8vIHJlZ2lvbjogcHVibGljXHJcblxyXG4gIC8qKiDDpcK9wpPDpcKJwo3DqMK3wq/Dp8KUwrHDpcKcwrDDpcKdwoAgKi9cclxuICBnZXQgY3VyVXJsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0VXJsKHRoaXMuaW5qZWN0b3IuZ2V0KEFjdGl2YXRlZFJvdXRlKS5zbmFwc2hvdCk7XHJcbiAgfVxyXG5cclxuICAvKiogw6XChcKBw6jCrsK4w6bCnMKAw6XCpMKaw6XCpMKNw6fClMKow6XCpMKaw6XCsMKRw6TCuMKqw6nCocK1w6nCncKiw6/CvMKMw6XCj8KWw6XCgMK8w6jCjMKDw6XCm8K0IGAyLTEwMGAgKi9cclxuICBzZXQgbWF4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX21heCA9IE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCAyKSwgMTAwKTtcclxuICAgIGZvciAobGV0IGkgPSB0aGlzLl9jYWNoZWQubGVuZ3RoOyBpID4gdGhpcy5fbWF4OyBpLS0pIHtcclxuICAgICAgdGhpcy5fY2FjaGVkLnBvcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuICAvKiogw6jCrsK+w6fCvcKuw6XCjMK5w6nChcKNw6bCqMKhw6XCvMKPICovXHJcbiAgc2V0IG1vZGUodmFsdWU6IFJldXNlVGFiTWF0Y2hNb2RlKSB7XHJcbiAgICB0aGlzLl9tb2RlID0gdmFsdWU7XHJcbiAgfVxyXG4gIGdldCBtb2RlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX21vZGU7XHJcbiAgfVxyXG4gIC8qKiDDqMKuwr7Dp8K9wq5EZWJ1Z8OmwqjCocOlwrzCjyAqL1xyXG4gIHNldCBkZWJ1Zyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fZGVidWcgPSB2YWx1ZTtcclxuICB9XHJcbiAgZ2V0IGRlYnVnKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlYnVnO1xyXG4gIH1cclxuICAvKiogw6bCjsKSw6nCmcKkw6jCp8KEw6XCiMKZw6/CvMKMw6nCmcKQIGBtb2RlPVVSTGAgKi9cclxuICBzZXQgZXhjbHVkZXModmFsdWVzOiBSZWdFeHBbXSkge1xyXG4gICAgaWYgKCF2YWx1ZXMpIHJldHVybjtcclxuICAgIHRoaXMuX2V4Y2x1ZGVzID0gdmFsdWVzO1xyXG4gIH1cclxuICBnZXQgZXhjbHVkZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZXhjbHVkZXM7XHJcbiAgfVxyXG4gIC8qKiDDqMKOwrfDpcKPwpbDpcK3wrLDp8K8wpPDpcKtwpjDp8KawoTDqMK3wq/Dp8KUwrEgKi9cclxuICBnZXQgaXRlbXMoKTogUmV1c2VUYWJDYWNoZWRbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVkO1xyXG4gIH1cclxuICAvKiogw6jCjsK3w6XCj8KWw6XCvcKTw6XCicKNw6fCvMKTw6XCrcKYw6fCmsKEw6jCt8Kvw6fClMKxw6bCgMK7w6bClcKwICovXHJcbiAgZ2V0IGNvdW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZC5sZW5ndGg7XHJcbiAgfVxyXG4gIC8qKiDDqMKuwqLDqcKYwoXDp8K8wpPDpcKtwpjDpcKPwpjDpsKbwrTDqcKAwprDp8KfwqUgKi9cclxuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8UmV1c2VUYWJOb3RpZnk+IHtcclxuICAgIHJldHVybiB0aGlzLl9jYWNoZWRDaGFuZ2UuYXNPYnNlcnZhYmxlKCk7IC8vIC5waXBlKGZpbHRlcih3ID0+IHcgIT09IG51bGwpKTtcclxuICB9XHJcbiAgLyoqIMOowofCqsOlwq7CmsOkwrnCicOlwr3Ck8OlwonCjcOmwqDCh8OpwqLCmCAqL1xyXG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgUmV1c2VUaXRsZSkge1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5jdXJVcmw7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykgdmFsdWUgPSB7IHRleHQ6IHZhbHVlIH07XHJcbiAgICB0aGlzLl90aXRsZUNhY2hlZFt1cmxdID0gdmFsdWU7XHJcbiAgICB0aGlzLmRpKCd1cGRhdGUgY3VycmVudCB0YWcgdGl0bGU6ICcsIHZhbHVlKTtcclxuICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHtcclxuICAgICAgYWN0aXZlOiAndGl0bGUnLFxyXG4gICAgICB0aXRsZTogdmFsdWUsXHJcbiAgICAgIGxpc3Q6IHRoaXMuX2NhY2hlZCxcclxuICAgIH0pO1xyXG4gIH1cclxuICAvKiogw6jCjsK3w6XCj8KWw6bCjMKHw6XCrsKaw6jCt8Kvw6XCvsKEw6fCvMKTw6XCrcKYw6bCicKAw6XCnMKow6TCvcKNw6fCvcKuw6/CvMKMYC0xYCDDqMKhwqjDp8KkwrrDpsKXwqDDp8K8wpPDpcKtwpggKi9cclxuICBpbmRleCh1cmw6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVkLmZpbmRJbmRleCh3ID0+IHcudXJsID09PSB1cmwpO1xyXG4gIH1cclxuICAvKiogw6jCjsK3w6XCj8KWw6bCjMKHw6XCrsKaw6jCt8Kvw6XCvsKEw6fCvMKTw6XCrcKYw6bCmMKvw6XCkMKmw6XCrcKYw6XCnMKoICovXHJcbiAgZXhpc3RzKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pbmRleCh1cmwpICE9PSAtMTtcclxuICB9XHJcbiAgLyoqIMOowo7Ct8Olwo/ClsOmwozCh8Olwq7CmsOowrfCr8Olwr7ChMOnwrzCk8Olwq3CmCAqL1xyXG4gIGdldCh1cmw6IHN0cmluZyk6IFJldXNlVGFiQ2FjaGVkIHtcclxuICAgIHJldHVybiB1cmwgPyB0aGlzLl9jYWNoZWQuZmluZCh3ID0+IHcudXJsID09PSB1cmwpIHx8IG51bGwgOiBudWxsO1xyXG4gIH1cclxuICBwcml2YXRlIHJlbW92ZSh1cmw6IHN0cmluZyB8IG51bWJlciwgaW5jbHVkZU5vbkNsb3NlYWJsZTogYm9vbGVhbik6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgaWR4ID0gdHlwZW9mIHVybCA9PT0gJ3N0cmluZycgPyB0aGlzLmluZGV4KHVybCkgOiB1cmw7XHJcbiAgICBjb25zdCBpdGVtID0gaWR4ICE9PSAtMSA/IHRoaXMuX2NhY2hlZFtpZHhdIDogbnVsbDtcclxuICAgIGlmICghaXRlbSB8fCAoIWluY2x1ZGVOb25DbG9zZWFibGUgJiYgIWl0ZW0uY2xvc2FibGUpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5kZXN0cm95KGl0ZW0uX2hhbmRsZSk7XHJcblxyXG4gICAgdGhpcy5fY2FjaGVkLnNwbGljZShpZHgsIDEpO1xyXG4gICAgZGVsZXRlIHRoaXMuX3RpdGxlQ2FjaGVkW3VybF07XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogw6bCoMK5w6bCjcKuVVJMw6fCp8K7w6nCmcKkw6bCoMKHw6fCrcK+XHJcbiAgICpcclxuICAgKiBAcGFyYW0gW2luY2x1ZGVOb25DbG9zZWFibGU9ZmFsc2VdIMOmwpjCr8OlwpDCpsOlwrzCusOlwojCtsOlwozChcOlwpDCq8OkwrjCjcOlwo/Cr8OlwoXCs8OpwpfCrVxyXG4gICAqL1xyXG4gIGNsb3NlKHVybDogc3RyaW5nLCBpbmNsdWRlTm9uQ2xvc2VhYmxlID0gZmFsc2UpIHtcclxuICAgIHRoaXMucmVtb3ZlVXJsQnVmZmVyID0gdXJsO1xyXG5cclxuICAgIHRoaXMucmVtb3ZlKHVybCwgaW5jbHVkZU5vbkNsb3NlYWJsZSk7XHJcblxyXG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoeyBhY3RpdmU6ICdjbG9zZScsIHVybCwgbGlzdDogdGhpcy5fY2FjaGVkIH0pO1xyXG5cclxuICAgIHRoaXMuZGkoJ2Nsb3NlIHRhZycsIHVybCk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogw6bCuMKFw6nCmcKkw6XCj8Kzw6jCvsK5XHJcbiAgICpcclxuICAgKiBAcGFyYW0gW2luY2x1ZGVOb25DbG9zZWFibGU9ZmFsc2VdIMOmwpjCr8OlwpDCpsOlwrzCusOlwojCtsOlwozChcOlwpDCq8OkwrjCjcOlwo/Cr8OlwoXCs8OpwpfCrVxyXG4gICAqL1xyXG4gIGNsb3NlUmlnaHQodXJsOiBzdHJpbmcsIGluY2x1ZGVOb25DbG9zZWFibGUgPSBmYWxzZSkge1xyXG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLmluZGV4KHVybCk7XHJcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jb3VudCAtIDE7IGkgPiBzdGFydDsgaS0tKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlKGksIGluY2x1ZGVOb25DbG9zZWFibGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVtb3ZlVXJsQnVmZmVyID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7IGFjdGl2ZTogJ2Nsb3NlUmlnaHQnLCB1cmwsIGxpc3Q6IHRoaXMuX2NhY2hlZCB9KTtcclxuXHJcbiAgICB0aGlzLmRpKCdjbG9zZSByaWdodCB0YWdlcycsIHVybCk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogw6bCuMKFw6nCmcKkw6bCicKAw6bCnMKJw6fCvMKTw6XCrcKYXHJcbiAgICpcclxuICAgKiBAcGFyYW0gW2luY2x1ZGVOb25DbG9zZWFibGU9ZmFsc2VdIMOmwpjCr8OlwpDCpsOlwrzCusOlwojCtsOlwozChcOlwpDCq8OkwrjCjcOlwo/Cr8OlwoXCs8OpwpfCrVxyXG4gICAqL1xyXG4gIGNsZWFyKGluY2x1ZGVOb25DbG9zZWFibGUgPSBmYWxzZSkge1xyXG4gICAgdGhpcy5fY2FjaGVkLmZvckVhY2godyA9PiB7XHJcbiAgICAgIGlmICghaW5jbHVkZU5vbkNsb3NlYWJsZSAmJiB3LmNsb3NhYmxlKSB0aGlzLmRlc3Ryb3kody5faGFuZGxlKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fY2FjaGVkID0gdGhpcy5fY2FjaGVkLmZpbHRlcihcclxuICAgICAgdyA9PiAhaW5jbHVkZU5vbkNsb3NlYWJsZSAmJiAhdy5jbG9zYWJsZSxcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5yZW1vdmVVcmxCdWZmZXIgPSBudWxsO1xyXG5cclxuICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHsgYWN0aXZlOiAnY2xlYXInLCBsaXN0OiB0aGlzLl9jYWNoZWQgfSk7XHJcblxyXG4gICAgdGhpcy5kaSgnY2xlYXIgYWxsIGNhdGNoJyk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIMOnwqfCu8OlworCqMOnwrzCk8Olwq3CmMOmwpXCsMOmwo3CrlxyXG4gICAqIEBwYXJhbSB1cmwgw6jCpsKBw6fCp8K7w6XCisKow6fCmsKEVVJMw6XCnMKww6XCncKAXHJcbiAgICogQHBhcmFtIHBvc2l0aW9uIMOmwpbCsMOkwr3CjcOnwr3CrsOvwrzCjMOkwrjCi8OmwqDCh8OkwrvCjiBgMGAgw6XCvMKAw6XCp8KLXHJcbiAgICpcclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIGBgYFxyXG4gICAqIC8vIHNvdXJjZVxyXG4gICAqIFsgJy9hLzEnLCAnL2EvMicsICcvYS8zJywgJy9hLzQnLCAnL2EvNScgXVxyXG4gICAqIG1vdmUoJy9hLzEnLCAyKTtcclxuICAgKiAvLyBvdXRwdXRcclxuICAgKiBbICcvYS8yJywgJy9hLzMnLCAnL2EvMScsICcvYS80JywgJy9hLzUnIF1cclxuICAgKiBtb3ZlKCcvYS8xJywgLTEpO1xyXG4gICAqIC8vIG91dHB1dFxyXG4gICAqIFsgJy9hLzInLCAnL2EvMycsICcvYS80JywgJy9hLzUnLCAnL2EvMScgXVxyXG4gICAqIGBgYFxyXG4gICAqL1xyXG4gIG1vdmUodXJsOiBzdHJpbmcsIHBvc2l0aW9uOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5fY2FjaGVkLmZpbmRJbmRleCh3ID0+IHcudXJsID09PSB1cmwpO1xyXG4gICAgaWYgKHN0YXJ0ID09PSAtMSkgcmV0dXJuO1xyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX2NhY2hlZC5zbGljZSgpO1xyXG4gICAgZGF0YS5zcGxpY2UoXHJcbiAgICAgIHBvc2l0aW9uIDwgMCA/IGRhdGEubGVuZ3RoICsgcG9zaXRpb24gOiBwb3NpdGlvbixcclxuICAgICAgMCxcclxuICAgICAgZGF0YS5zcGxpY2Uoc3RhcnQsIDEpWzBdLFxyXG4gICAgKTtcclxuICAgIHRoaXMuX2NhY2hlZCA9IGRhdGE7XHJcbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7XHJcbiAgICAgIGFjdGl2ZTogJ21vdmUnLFxyXG4gICAgICB1cmwsXHJcbiAgICAgIHBvc2l0aW9uLFxyXG4gICAgICBsaXN0OiB0aGlzLl9jYWNoZWQsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogw6XCvMK6w6XCiMK2w6XChcKzw6nCl8Ktw6XCvcKTw6XCicKNw6jCt8Kvw6fClMKxw6/CvMKIw6XCjMKFw6XCkMKrw6TCuMKNw6XCj8Kvw6XChcKzw6nCl8Ktw6fCisK2w6bCgMKBw6/CvMKJw6/CvMKMw6XCucK2w6nCh8KNw6bClsKww6XCr8K8w6jCiMKqw6jCh8KzIGBuZXdVcmxgIMOowrfCr8OnwpTCsVxyXG4gICAqL1xyXG4gIHJlcGxhY2UobmV3VXJsOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMuY3VyVXJsO1xyXG4gICAgaWYgKHRoaXMuZXhpc3RzKHVybCkpIHtcclxuICAgICAgdGhpcy5jbG9zZSh1cmwsIHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW1vdmVVcmxCdWZmZXIgPSB1cmw7XHJcbiAgICB9XHJcbiAgICB0aGlzLmluamVjdG9yLmdldChSb3V0ZXIpLm5hdmlnYXRlQnlVcmwobmV3VXJsKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogw6jCjsK3w6XCj8KWw6bCoMKHw6nCosKYw6/CvMKMw6nCocK6w6XCusKPw6XCpsKCw6TCuMKLw6/CvMKaXHJcbiAgICpcclxuICAgKiAxLiDDp8K7woTDpMK7wrbDpcKGwoXDpMK9wr/Dp8KUwqggYFJldXNlVGFiU2VydmljZS50aXRsZSA9ICduZXcgdGl0bGUnYCDDqcKHwo3DpsKWwrDDpsKMwofDpcKuwprDpsKWwofDpsKcwqxcclxuICAgKiAyLiDDqMK3wq/Dp8KUwrHDqcKFwo3Dp8K9wq7DpMK4wq0gZGF0YSDDpcKxwp7DpsKAwqfDpMK4wq3DpcKMwoXDpcKQwqsgdGl0bGVJMThuID4gdGl0bGVcclxuICAgKiAzLiDDqMKPwpzDpcKNwpXDpsKVwrDDpsKNwq7DpMK4wq0gdGV4dCDDpcKxwp7DpsKAwqdcclxuICAgKlxyXG4gICAqIEBwYXJhbSB1cmwgw6bCjMKHw6XCrsKaVVJMXHJcbiAgICogQHBhcmFtIHJvdXRlIMOmwozCh8Olwq7CmsOowrfCr8OnwpTCscOlwr/Cq8OnwoXCp1xyXG4gICAqL1xyXG4gIGdldFRpdGxlKHVybDogc3RyaW5nLCByb3V0ZT86IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBSZXVzZVRpdGxlIHtcclxuICAgIGlmICh0aGlzLl90aXRsZUNhY2hlZFt1cmxdKSByZXR1cm4gdGhpcy5fdGl0bGVDYWNoZWRbdXJsXTtcclxuXHJcbiAgICBpZiAocm91dGUgJiYgcm91dGUuZGF0YSAmJiAocm91dGUuZGF0YS50aXRsZUkxOG4gfHwgcm91dGUuZGF0YS50aXRsZSkpXHJcbiAgICAgIHJldHVybiA8UmV1c2VUaXRsZT57XHJcbiAgICAgICAgdGV4dDogcm91dGUuZGF0YS50aXRsZSxcclxuICAgICAgICBpMThuOiByb3V0ZS5kYXRhLnRpdGxlSTE4bixcclxuICAgICAgfTtcclxuXHJcbiAgICBjb25zdCBtZW51ID1cclxuICAgICAgdGhpcy5tb2RlICE9PSBSZXVzZVRhYk1hdGNoTW9kZS5VUkwgPyB0aGlzLmdldE1lbnUodXJsKSA6IG51bGw7XHJcbiAgICByZXR1cm4gbWVudSA/IHsgdGV4dDogbWVudS50ZXh0LCBpMThuOiBtZW51LmkxOG4gfSA6IHsgdGV4dDogdXJsIH07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDpsK4woXDqcKZwqTDpsKgwofDqcKiwpjDp8K8wpPDpcKtwphcclxuICAgKi9cclxuICBjbGVhclRpdGxlQ2FjaGVkKCkge1xyXG4gICAgdGhpcy5fdGl0bGVDYWNoZWQgPSB7fTtcclxuICB9XHJcbiAgLyoqIMOowofCqsOlwq7CmsOkwrnCicOlwr3Ck8OlwonCjSBgY2xvc2FibGVgIMOnworCtsOmwoDCgSAqL1xyXG4gIHNldCBjbG9zYWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5jdXJVcmw7XHJcbiAgICB0aGlzLl9jbG9zYWJsZUNhY2hlZFt1cmxdID0gdmFsdWU7XHJcbiAgICB0aGlzLmRpKCd1cGRhdGUgY3VycmVudCB0YWcgY2xvc2FibGU6ICcsIHZhbHVlKTtcclxuICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHtcclxuICAgICAgYWN0aXZlOiAnY2xvc2FibGUnLFxyXG4gICAgICBjbG9zYWJsZTogdmFsdWUsXHJcbiAgICAgIGxpc3Q6IHRoaXMuX2NhY2hlZCxcclxuICAgIH0pO1xyXG4gIH1cclxuICAvKipcclxuICAgKiDDqMKOwrfDpcKPwpYgYGNsb3NhYmxlYCDDp8KKwrbDpsKAwoHDr8K8wozDqcKhwrrDpcK6wo/DpcKmwoLDpMK4wovDr8K8wppcclxuICAgKlxyXG4gICAqIDEuIMOnwrvChMOkwrvCtsOlwobChcOkwr3Cv8OnwpTCqCBgUmV1c2VUYWJTZXJ2aWNlLmNsb3NhYmxlID0gdHJ1ZWAgw6nCh8KNw6bClsKww6bCjMKHw6XCrsKaIGBjbG9zYWJsZWAgw6fCisK2w6bCgMKBXHJcbiAgICogMi4gw6jCt8Kvw6fClMKxw6nChcKNw6fCvcKuw6TCuMKtIGRhdGEgw6XCscKew6bCgMKnw6TCuMKtw6XCjMKFw6XCkMKrIGByZXVzZUNsb3NhYmxlYFxyXG4gICAqIDMuIMOowo/CnMOlwo3ClcOmwpXCsMOmwo3CrsOkwrjCrSBgcmV1c2VDbG9zYWJsZWAgw6XCscKew6bCgMKnXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdXJsIMOmwozCh8Olwq7CmlVSTFxyXG4gICAqIEBwYXJhbSByb3V0ZSDDpsKMwofDpcKuwprDqMK3wq/Dp8KUwrHDpcK/wqvDp8KFwqdcclxuICAgKi9cclxuICBnZXRDbG9zYWJsZSh1cmw6IHN0cmluZywgcm91dGU/OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMuX2Nsb3NhYmxlQ2FjaGVkW3VybF0gIT09ICd1bmRlZmluZWQnKVxyXG4gICAgICByZXR1cm4gdGhpcy5fY2xvc2FibGVDYWNoZWRbdXJsXTtcclxuXHJcbiAgICBpZiAocm91dGUgJiYgcm91dGUuZGF0YSAmJiB0eXBlb2Ygcm91dGUuZGF0YS5yZXVzZUNsb3NhYmxlID09PSAnYm9vbGVhbicpXHJcbiAgICAgIHJldHVybiByb3V0ZS5kYXRhLnJldXNlQ2xvc2FibGU7XHJcblxyXG4gICAgY29uc3QgbWVudSA9XHJcbiAgICAgIHRoaXMubW9kZSAhPT0gUmV1c2VUYWJNYXRjaE1vZGUuVVJMID8gdGhpcy5nZXRNZW51KHVybCkgOiBudWxsO1xyXG4gICAgaWYgKG1lbnUgJiYgdHlwZW9mIG1lbnUucmV1c2VDbG9zYWJsZSA9PT0gJ2Jvb2xlYW4nKVxyXG4gICAgICByZXR1cm4gbWVudS5yZXVzZUNsb3NhYmxlO1xyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICAvKipcclxuICAgKiDDpsK4woXDp8KpwrogYGNsb3NhYmxlYCDDp8K8wpPDpcKtwphcclxuICAgKi9cclxuICBjbGVhckNsb3NhYmxlQ2FjaGVkKCkge1xyXG4gICAgdGhpcy5fY2xvc2FibGVDYWNoZWQgPSB7fTtcclxuICB9XHJcbiAgZ2V0VHJ1dGhSb3V0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCkge1xyXG4gICAgbGV0IG5leHQgPSByb3V0ZTtcclxuICAgIHdoaWxlIChuZXh0LmZpcnN0Q2hpbGQpIG5leHQgPSBuZXh0LmZpcnN0Q2hpbGQ7XHJcbiAgICByZXR1cm4gbmV4dDtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogw6bCoMK5w6bCjcKuw6XCv8Krw6fChcKnw6jCjsK3w6XCj8KWVVJMw6XCnMKww6XCncKAXHJcbiAgICovXHJcbiAgZ2V0VXJsKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogc3RyaW5nIHtcclxuICAgIGxldCBuZXh0ID0gdGhpcy5nZXRUcnV0aFJvdXRlKHJvdXRlKTtcclxuICAgIGNvbnN0IHNlZ21lbnRzID0gW107XHJcbiAgICB3aGlsZSAobmV4dCkge1xyXG4gICAgICBzZWdtZW50cy5wdXNoKG5leHQudXJsLmpvaW4oJy8nKSk7XHJcbiAgICAgIG5leHQgPSBuZXh0LnBhcmVudDtcclxuICAgIH1cclxuICAgIGNvbnN0IHVybCA9XHJcbiAgICAgICcvJyArXHJcbiAgICAgIHNlZ21lbnRzXHJcbiAgICAgICAgLmZpbHRlcihpID0+IGkpXHJcbiAgICAgICAgLnJldmVyc2UoKVxyXG4gICAgICAgIC5qb2luKCcvJyk7XHJcbiAgICByZXR1cm4gdXJsO1xyXG4gIH1cclxuICAvKipcclxuICAgKiDDpsKjwoDDpsKfwqXDpcK/wqvDp8KFwqfDpsKYwq/DpcKQwqbDpcKFwoHDqMKuwrjDqMKiwqvDpcKkwo3Dp8KUwqhcclxuICAgKi9cclxuICBjYW4ocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXJsKHJvdXRlKTtcclxuICAgIGlmICh1cmwgPT09IHRoaXMucmVtb3ZlVXJsQnVmZmVyKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgaWYgKHJvdXRlLmRhdGEgJiYgdHlwZW9mIHJvdXRlLmRhdGEucmV1c2UgPT09ICdib29sZWFuJylcclxuICAgICAgcmV0dXJuIHJvdXRlLmRhdGEucmV1c2U7XHJcblxyXG4gICAgaWYgKHRoaXMubW9kZSAhPT0gUmV1c2VUYWJNYXRjaE1vZGUuVVJMKSB7XHJcbiAgICAgIGNvbnN0IG1lbnUgPSB0aGlzLmdldE1lbnUodXJsKTtcclxuICAgICAgaWYgKCFtZW51KSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIGlmICh0aGlzLm1vZGUgPT09IFJldXNlVGFiTWF0Y2hNb2RlLk1lbnUpIHtcclxuICAgICAgICBpZiAobWVudS5yZXVzZSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIW1lbnUucmV1c2UgfHwgbWVudS5yZXVzZSAhPT0gdHJ1ZSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX2V4Y2x1ZGVzLmZpbmRJbmRleChyID0+IHIudGVzdCh1cmwpKSA9PT0gLTE7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIMOlwojCt8OmwpbCsMOvwrzCjMOowqfCpsOlwo/CkcOkwrjCgMOkwrjCqiByZWZyZXNoIMOnwrHCu8Olwp7Ci8OkwrrCi8OkwrvCtlxyXG4gICAqL1xyXG4gIHJlZnJlc2goZGF0YT86IGFueSkge1xyXG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoeyBhY3RpdmU6ICdyZWZyZXNoJywgZGF0YSB9KTtcclxuICB9XHJcbiAgLy8gZW5kcmVnaW9uXHJcblxyXG4gIC8vIHJlZ2lvbjogcHJpdmF0ZXNcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95KF9oYW5kbGU6IGFueSkge1xyXG4gICAgaWYgKF9oYW5kbGUgJiYgX2hhbmRsZS5jb21wb25lbnRSZWYgJiYgX2hhbmRsZS5jb21wb25lbnRSZWYuZGVzdHJveSlcclxuICAgICAgX2hhbmRsZS5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkaSguLi5hcmdzKSB7XHJcbiAgICBpZiAoIXRoaXMuZGVidWcpIHJldHVybjtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXHJcbiAgICBjb25zb2xlLndhcm4oLi4uYXJncyk7XHJcbiAgfVxyXG5cclxuICAvLyBlbmRyZWdpb25cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgbWVudVNlcnZpY2U6IE1lbnVTZXJ2aWNlKSB7fVxyXG5cclxuICBwcml2YXRlIGdldE1lbnUodXJsOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IG1lbnVzID0gdGhpcy5tZW51U2VydmljZS5nZXRQYXRoQnlVcmwodXJsKTtcclxuICAgIGlmICghbWVudXMgfHwgbWVudXMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcclxuICAgIHJldHVybiBtZW51cy5wb3AoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcnVuSG9vayhtZXRob2Q6IHN0cmluZywgdXJsOiBzdHJpbmcsIGNvbXA6IGFueSkge1xyXG4gICAgaWYgKGNvbXAuaW5zdGFuY2UgJiYgdHlwZW9mIGNvbXAuaW5zdGFuY2VbbWV0aG9kXSA9PT0gJ2Z1bmN0aW9uJylcclxuICAgICAgY29tcC5pbnN0YW5jZVttZXRob2RdKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhc0luVmFsaWRSb3V0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgIXJvdXRlLnJvdXRlQ29uZmlnIHx8XHJcbiAgICAgIHJvdXRlLnJvdXRlQ29uZmlnLmxvYWRDaGlsZHJlbiB8fFxyXG4gICAgICByb3V0ZS5yb3V0ZUNvbmZpZy5jaGlsZHJlblxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOlwobCs8Olwq7CmsOmwpjCr8OlwpDCpsOlwoXCgcOowq7CuMOowrfCr8OnwpTCscOlwqTCjcOnwpTCqMOvwrzCjMOowovCpSBgdHJ1ZWAgw6TCvMKaw6jCp8Kmw6XCj8KRIGBzdG9yZWBcclxuICAgKi9cclxuICBzaG91bGREZXRhY2gocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmhhc0luVmFsaWRSb3V0ZShyb3V0ZSkpIHJldHVybiBmYWxzZTtcclxuICAgIHRoaXMuZGkoJyNzaG91bGREZXRhY2gnLCB0aGlzLmNhbihyb3V0ZSksIHRoaXMuZ2V0VXJsKHJvdXRlKSk7XHJcbiAgICByZXR1cm4gdGhpcy5jYW4ocm91dGUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogw6XCrcKYw6XCgsKoXHJcbiAgICovXHJcbiAgc3RvcmUoX3NuYXBzaG90OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBfaGFuZGxlOiBhbnkpIHtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXJsKF9zbmFwc2hvdCk7XHJcbiAgICBjb25zdCBpZHggPSB0aGlzLmluZGV4KHVybCk7XHJcblxyXG4gICAgY29uc3QgaXRlbTogUmV1c2VUYWJDYWNoZWQgPSB7XHJcbiAgICAgIHRpdGxlOiB0aGlzLmdldFRpdGxlKHVybCwgX3NuYXBzaG90KSxcclxuICAgICAgY2xvc2FibGU6IHRoaXMuZ2V0Q2xvc2FibGUodXJsLCBfc25hcHNob3QpLFxyXG4gICAgICB1cmwsXHJcbiAgICAgIF9zbmFwc2hvdCxcclxuICAgICAgX2hhbmRsZSxcclxuICAgIH07XHJcbiAgICBpZiAoaWR4ID09PSAtMSkge1xyXG4gICAgICB0aGlzLl9jYWNoZWQucHVzaChpdGVtKTtcclxuICAgICAgaWYgKHRoaXMuY291bnQgPiB0aGlzLl9tYXgpIHRoaXMuX2NhY2hlZC5zaGlmdCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fY2FjaGVkW2lkeF0gPSBpdGVtO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZW1vdmVVcmxCdWZmZXIgPSBudWxsO1xyXG5cclxuICAgIHRoaXMuZGkoJyNzdG9yZScsIGlkeCA9PT0gLTEgPyAnW25ld10nIDogJ1tvdmVycmlkZV0nLCB1cmwpO1xyXG5cclxuICAgIGlmIChfaGFuZGxlICYmIF9oYW5kbGUuY29tcG9uZW50UmVmKSB7XHJcbiAgICAgIHRoaXMucnVuSG9vaygnX29uUmV1c2VEZXN0cm95JywgdXJsLCBfaGFuZGxlLmNvbXBvbmVudFJlZik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoeyBhY3RpdmU6ICdhZGQnLCBpdGVtLCBsaXN0OiB0aGlzLl9jYWNoZWQgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDpcKGwrPDpcKuwprDpsKYwq/DpcKQwqbDpcKFwoHDqMKuwrjDpcK6wpTDp8KUwqjDp8K8wpPDpcKtwpjDpsKVwrDDpsKNwq5cclxuICAgKi9cclxuICBzaG91bGRBdHRhY2gocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmhhc0luVmFsaWRSb3V0ZShyb3V0ZSkpIHJldHVybiBmYWxzZTtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXJsKHJvdXRlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldCh1cmwpO1xyXG4gICAgY29uc3QgcmV0ID0gISEoZGF0YSAmJiBkYXRhLl9oYW5kbGUpO1xyXG4gICAgdGhpcy5kaSgnI3Nob3VsZEF0dGFjaCcsIHJldCwgdXJsKTtcclxuICAgIGlmIChyZXQgJiYgZGF0YS5faGFuZGxlLmNvbXBvbmVudFJlZikge1xyXG4gICAgICB0aGlzLnJ1bkhvb2soJ19vblJldXNlSW5pdCcsIHVybCwgZGF0YS5faGFuZGxlLmNvbXBvbmVudFJlZik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogw6bCj8KQw6XCj8KWw6XCpMKNw6fClMKow6bClcKww6bCjcKuXHJcbiAgICovXHJcbiAgcmV0cmlldmUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiB7fSB7XHJcbiAgICBpZiAodGhpcy5oYXNJblZhbGlkUm91dGUocm91dGUpKSByZXR1cm4gbnVsbDtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXJsKHJvdXRlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldCh1cmwpO1xyXG4gICAgY29uc3QgcmV0ID0gKGRhdGEgJiYgZGF0YS5faGFuZGxlKSB8fCBudWxsO1xyXG4gICAgdGhpcy5kaSgnI3JldHJpZXZlJywgdXJsLCByZXQpO1xyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOlwobCs8Olwq7CmsOmwpjCr8OlwpDCpsOlwrrClMOowq/CpcOowr/Cm8OowqHCjMOlwqTCjcOnwpTCqMOowrfCr8OnwpTCscOlwqTChMOnwpDChlxyXG4gICAqL1xyXG4gIHNob3VsZFJldXNlUm91dGUoXHJcbiAgICBmdXR1cmU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXHJcbiAgICBjdXJyOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxyXG4gICk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IHJldCA9IGZ1dHVyZS5yb3V0ZUNvbmZpZyA9PT0gY3Vyci5yb3V0ZUNvbmZpZztcclxuICAgIGlmICghcmV0KSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgcGF0aCA9ICgoZnV0dXJlLnJvdXRlQ29uZmlnICYmIGZ1dHVyZS5yb3V0ZUNvbmZpZy5wYXRoKSB8fFxyXG4gICAgICAnJykgYXMgc3RyaW5nO1xyXG4gICAgaWYgKHBhdGgubGVuZ3RoID4gMCAmJiB+cGF0aC5pbmRleE9mKCc6JykpIHtcclxuICAgICAgY29uc3QgZnV0dXJlVXJsID0gdGhpcy5nZXRVcmwoZnV0dXJlKTtcclxuICAgICAgY29uc3QgY3VyclVybCA9IHRoaXMuZ2V0VXJsKGN1cnIpO1xyXG4gICAgICByZXQgPSBmdXR1cmVVcmwgPT09IGN1cnJVcmw7XHJcbiAgICB9XHJcbiAgICB0aGlzLmRpKCc9PT09PT09PT09PT09PT09PT09PT0nKTtcclxuICAgIHRoaXMuZGkoXHJcbiAgICAgICcjc2hvdWxkUmV1c2VSb3V0ZScsXHJcbiAgICAgIHJldCxcclxuICAgICAgYCR7dGhpcy5nZXRVcmwoY3Vycil9PT4ke3RoaXMuZ2V0VXJsKGZ1dHVyZSl9YCxcclxuICAgICAgZnV0dXJlLFxyXG4gICAgICBjdXJyLFxyXG4gICAgKTtcclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2NhY2hlZCA9IFtdO1xyXG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE9uSW5pdCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZSxcclxuICBPbkRlc3Ryb3ksXHJcbiAgRWxlbWVudFJlZixcclxuICBSZW5kZXJlcjIsXHJcbiAgSW5qZWN0LFxyXG4gIE9wdGlvbmFsLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FbmQsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciwgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBJbnB1dE51bWJlciwgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5pbXBvcnQgeyBBTEFJTl9JMThOX1RPS0VOLCBBbGFpbkkxOE5TZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcclxuXHJcbmltcG9ydCB7IFJldXNlVGFiU2VydmljZSB9IGZyb20gJy4vcmV1c2UtdGFiLnNlcnZpY2UnO1xyXG5pbXBvcnQge1xyXG4gIFJldXNlVGFiQ2FjaGVkLFxyXG4gIFJldXNlVGFiTm90aWZ5LFxyXG4gIFJldXNlVGFiTWF0Y2hNb2RlLFxyXG4gIFJldXNlSXRlbSxcclxuICBSZXVzZUNvbnRleHRJMThuLFxyXG4gIFJldXNlQ29udGV4dENsb3NlRXZlbnQsXHJcbiAgUmV1c2VUaXRsZSxcclxufSBmcm9tICcuL3JldXNlLXRhYi5pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgUmV1c2VUYWJDb250ZXh0U2VydmljZSB9IGZyb20gJy4vcmV1c2UtdGFiLWNvbnRleHQuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3JldXNlLXRhYicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3JldXNlLXRhYi5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgcHJvdmlkZXJzOiBbUmV1c2VUYWJDb250ZXh0U2VydmljZV0sXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5yZXVzZS10YWJdJzogJ3RydWUnLFxyXG4gIH0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXVzZVRhYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgc3ViJDogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgaTE4biQ6IFN1YnNjcmlwdGlvbjtcclxuICBsaXN0OiBSZXVzZUl0ZW1bXSA9IFtdO1xyXG4gIGl0ZW06IFJldXNlSXRlbTtcclxuICBwb3MgPSAwO1xyXG5cclxuICAvLyAjcmVnaW9uIGZpZWxkc1xyXG5cclxuICAvKiogw6jCrsK+w6fCvcKuw6XCjMK5w6nChcKNw6bCqMKhw6XCvMKPICovXHJcbiAgQElucHV0KClcclxuICBtb2RlOiBSZXVzZVRhYk1hdGNoTW9kZSA9IFJldXNlVGFiTWF0Y2hNb2RlLk1lbnU7XHJcbiAgLyoqIMOpwoDCicOpwqHCucOmwpbCh8OmwpzCrMOlwpvCvcOpwpnChcOlwozCliAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgaTE4bjogUmV1c2VDb250ZXh0STE4bjtcclxuICAvKiogw6bCmMKvw6XCkMKmRGVidWfDpsKowqHDpcK8wo8gKi9cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dEJvb2xlYW4oKVxyXG4gIGRlYnVnID0gZmFsc2U7XHJcbiAgLyoqIMOlwoXCgcOowq7CuMOmwpzCgMOlwqTCmsOlwqTCjcOnwpTCqMOlwqTCmsOlwrDCkcOkwrjCqsOpwqHCtcOpwp3CoiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0TnVtYmVyKClcclxuICBtYXg6IG51bWJlcjtcclxuICAvKiogw6bCjsKSw6nCmcKkw6jCp8KEw6XCiMKZw6/CvMKMw6nCmcKQIGBtb2RlPVVSTGAgKi9cclxuICBASW5wdXQoKVxyXG4gIGV4Y2x1ZGVzOiBSZWdFeHBbXTtcclxuICAvKiogw6XChcKBw6jCrsK4w6XChcKzw6nCl8KtICovXHJcbiAgQElucHV0KClcclxuICBASW5wdXRCb29sZWFuKClcclxuICBhbGxvd0Nsb3NlID0gdHJ1ZTtcclxuICAvKiogw6bCgMK7w6bCmMKvw6bCmMK+w6fCpMK6w6XCvcKTw6XCicKNw6nCocK1ICovXHJcbiAgQElucHV0KClcclxuICBASW5wdXRCb29sZWFuKClcclxuICBzaG93Q3VycmVudCA9IHRydWU7XHJcbiAgLyoqIMOlwojCh8Omwo3CosOmwpfCtsOlwpvCnsOowrDCgyAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIGNoYW5nZTogRXZlbnRFbWl0dGVyPFJldXNlSXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyPFJldXNlSXRlbT4oKTtcclxuICAvKiogw6XChcKzw6nCl8Ktw6XCm8Kew6jCsMKDICovXHJcbiAgQE91dHB1dCgpXHJcbiAgY2xvc2U6IEV2ZW50RW1pdHRlcjxSZXVzZUl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcjxSZXVzZUl0ZW0+KCk7XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBlbDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgc3J2OiBSZXVzZVRhYlNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgcmVuZGVyOiBSZW5kZXJlcjIsXHJcbiAgICBAT3B0aW9uYWwoKVxyXG4gICAgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKVxyXG4gICAgcHJpdmF0ZSBpMThuU3J2OiBBbGFpbkkxOE5TZXJ2aWNlLFxyXG4gICkge1xyXG4gICAgdGhpcy5lbCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBjb25zdCByb3V0ZSQgPSB0aGlzLnJvdXRlci5ldmVudHMucGlwZShcclxuICAgICAgZmlsdGVyKGV2dCA9PiBldnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSxcclxuICAgICk7XHJcbiAgICB0aGlzLnN1YiQgPSBjb21iaW5lTGF0ZXN0KHRoaXMuc3J2LmNoYW5nZSwgcm91dGUkKS5zdWJzY3JpYmUoKFtyZXMsIGVdKSA9PlxyXG4gICAgICB0aGlzLmdlbkxpc3QocmVzIGFzIGFueSksXHJcbiAgICApO1xyXG4gICAgaWYgKHRoaXMuaTE4blNydikge1xyXG4gICAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuU3J2LmNoYW5nZVxyXG4gICAgICAgIC5waXBlKGRlYm91bmNlVGltZSgxMDApKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5nZW5MaXN0KCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5UaXQodGl0bGU6IFJldXNlVGl0bGUpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRpdGxlLmkxOG4gJiYgdGhpcy5pMThuU3J2XHJcbiAgICAgID8gdGhpcy5pMThuU3J2LmZhbnlpKHRpdGxlLmkxOG4pXHJcbiAgICAgIDogdGl0bGUudGV4dDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2VuTGlzdChub3RpZnk/OiBSZXVzZVRhYk5vdGlmeSkge1xyXG4gICAgY29uc3QgaXNDbG9zZWQgPSBub3RpZnkgJiYgbm90aWZ5LmFjdGl2ZSA9PT0gJ2Nsb3NlJztcclxuICAgIGNvbnN0IGJlZm9yZUNsb3NlUG9zID0gaXNDbG9zZWRcclxuICAgICAgPyB0aGlzLmxpc3QuZmluZEluZGV4KHcgPT4gdy51cmwgPT09IG5vdGlmeS51cmwpXHJcbiAgICAgIDogLTE7XHJcbiAgICBjb25zdCBscyA9IHRoaXMuc3J2Lml0ZW1zLm1hcCgoaXRlbTogUmV1c2VUYWJDYWNoZWQsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgcmV0dXJuIDxSZXVzZUl0ZW0+e1xyXG4gICAgICAgIHVybDogaXRlbS51cmwsXHJcbiAgICAgICAgdGl0bGU6IHRoaXMuZ2VuVGl0KGl0ZW0udGl0bGUpLFxyXG4gICAgICAgIGNsb3NhYmxlOiB0aGlzLmFsbG93Q2xvc2UgJiYgaXRlbS5jbG9zYWJsZSAmJiB0aGlzLnNydi5jb3VudCA+IDAsXHJcbiAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgYWN0aXZlOiBmYWxzZSxcclxuICAgICAgICBsYXN0OiBmYWxzZSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgaWYgKHRoaXMuc2hvd0N1cnJlbnQpIHtcclxuICAgICAgY29uc3Qgc25hcHNob3QgPSB0aGlzLnJvdXRlLnNuYXBzaG90O1xyXG4gICAgICBjb25zdCB1cmwgPSB0aGlzLnNydi5nZXRVcmwoc25hcHNob3QpO1xyXG4gICAgICBjb25zdCBpZHggPSBscy5maW5kSW5kZXgodyA9PiB3LnVybCA9PT0gdXJsKTtcclxuICAgICAgLy8ganVtcCBkaXJlY3RseSB3aGVuIHRoZSBjdXJyZW50IGV4aXN0cyBpbiB0aGUgbGlzdFxyXG4gICAgICAvLyBvciBjcmVhdGUgYSBuZXcgY3VycmVudCBpdGVtIGFuZCBqdW1wXHJcbiAgICAgIGlmIChpZHggIT09IC0xIHx8IChpc0Nsb3NlZCAmJiBub3RpZnkudXJsID09PSB1cmwpKSB7XHJcbiAgICAgICAgdGhpcy5wb3MgPSBpc0Nsb3NlZFxyXG4gICAgICAgICAgPyBpZHggPj0gYmVmb3JlQ2xvc2VQb3NcclxuICAgICAgICAgICAgPyB0aGlzLnBvcyAtIDFcclxuICAgICAgICAgICAgOiB0aGlzLnBvc1xyXG4gICAgICAgICAgOiBpZHg7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3Qgc25hcHNob3RUcnVlID0gdGhpcy5zcnYuZ2V0VHJ1dGhSb3V0ZShzbmFwc2hvdCk7XHJcbiAgICAgICAgbHMucHVzaCg8UmV1c2VJdGVtPntcclxuICAgICAgICAgIHVybCxcclxuICAgICAgICAgIHRpdGxlOiB0aGlzLmdlblRpdCh0aGlzLnNydi5nZXRUaXRsZSh1cmwsIHNuYXBzaG90VHJ1ZSkpLFxyXG4gICAgICAgICAgY2xvc2FibGU6XHJcbiAgICAgICAgICAgIHRoaXMuYWxsb3dDbG9zZSAmJlxyXG4gICAgICAgICAgICB0aGlzLnNydi5jb3VudCA+IDAgJiZcclxuICAgICAgICAgICAgdGhpcy5zcnYuZ2V0Q2xvc2FibGUodXJsLCBzbmFwc2hvdFRydWUpLFxyXG4gICAgICAgICAgaW5kZXg6IGxzLmxlbmd0aCxcclxuICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICBsYXN0OiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBvcyA9IGxzLmxlbmd0aCAtIDE7XHJcbiAgICAgIH1cclxuICAgICAgLy8gZml4IHVuYWJsZWQgY2xvc2UgbGFzdCBpdGVtXHJcbiAgICAgIGlmIChscy5sZW5ndGggPD0gMSkgbHNbMF0uY2xvc2FibGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxpc3QgPSBscztcclxuXHJcbiAgICBpZiAobHMubGVuZ3RoICYmIGlzQ2xvc2VkKSB7XHJcbiAgICAgIHRoaXMudG8obnVsbCwgdGhpcy5wb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVmU3RhdHVzKGZhbHNlKTtcclxuICAgIHRoaXMudmlzaWJpbGl0eSgpO1xyXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZpc2liaWxpdHkoKSB7XHJcbiAgICBpZiAodGhpcy5zaG93Q3VycmVudCkgcmV0dXJuO1xyXG4gICAgdGhpcy5yZW5kZXIuc2V0U3R5bGUoXHJcbiAgICAgIHRoaXMuZWwsXHJcbiAgICAgICdkaXNwbGF5JyxcclxuICAgICAgdGhpcy5saXN0Lmxlbmd0aCA9PT0gMCA/ICdub25lJyA6ICdibG9jaycsXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gI3JlZ2lvbiBVSVxyXG5cclxuICBjbUNoYW5nZShyZXM6IFJldXNlQ29udGV4dENsb3NlRXZlbnQpIHtcclxuICAgIHN3aXRjaCAocmVzLnR5cGUpIHtcclxuICAgICAgY2FzZSAnY2xvc2UnOlxyXG4gICAgICAgIHRoaXMuX2Nsb3NlKG51bGwsIHJlcy5pdGVtLmluZGV4LCByZXMuaW5jbHVkZU5vbkNsb3NlYWJsZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2Nsb3NlUmlnaHQnOlxyXG4gICAgICAgIHRoaXMuc3J2LmNsb3NlUmlnaHQocmVzLml0ZW0udXJsLCByZXMuaW5jbHVkZU5vbkNsb3NlYWJsZSk7XHJcbiAgICAgICAgdGhpcy5jbG9zZS5lbWl0KG51bGwpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdjbGVhcic6XHJcbiAgICAgIGNhc2UgJ2Nsb3NlT3RoZXInOlxyXG4gICAgICAgIHRoaXMuc3J2LmNsZWFyKHJlcy5pbmNsdWRlTm9uQ2xvc2VhYmxlKTtcclxuICAgICAgICB0aGlzLmNsb3NlLmVtaXQobnVsbCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWZTdGF0dXMoZGMgPSB0cnVlKSB7XHJcbiAgICBpZiAodGhpcy5saXN0Lmxlbmd0aCkge1xyXG4gICAgICB0aGlzLmxpc3RbdGhpcy5saXN0Lmxlbmd0aCAtIDFdLmxhc3QgPSB0cnVlO1xyXG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaCgoaSwgaWR4KSA9PiAoaS5hY3RpdmUgPSB0aGlzLnBvcyA9PT0gaWR4KSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZGMpIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgdG8oZTogRXZlbnQsIGluZGV4OiBudW1iZXIpIHtcclxuICAgIGlmIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICAgIGluZGV4ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oaW5kZXgsIHRoaXMubGlzdC5sZW5ndGggLSAxKSk7XHJcbiAgICBjb25zdCBpdGVtID0gdGhpcy5saXN0W2luZGV4XTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoaXRlbS51cmwpLnRoZW4ocmVzID0+IHtcclxuICAgICAgaWYgKCFyZXMpIHJldHVybjtcclxuICAgICAgdGhpcy5wb3MgPSBpbmRleDtcclxuICAgICAgdGhpcy5pdGVtID0gaXRlbTtcclxuICAgICAgdGhpcy5yZWZTdGF0dXMoKTtcclxuICAgICAgdGhpcy5jaGFuZ2UuZW1pdChpdGVtKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX2Nsb3NlKGU6IEV2ZW50LCBpZHg6IG51bWJlciwgaW5jbHVkZU5vbkNsb3NlYWJsZTogYm9vbGVhbikge1xyXG4gICAgaWYgKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaXRlbSA9IHRoaXMubGlzdFtpZHhdO1xyXG4gICAgdGhpcy5zcnYuY2xvc2UoaXRlbS51cmwsIGluY2x1ZGVOb25DbG9zZWFibGUpO1xyXG4gICAgdGhpcy5jbG9zZS5lbWl0KGl0ZW0pO1xyXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5nZW5MaXN0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhcclxuICAgIGNoYW5nZXM6IHsgW1AgaW4ga2V5b2YgdGhpc10/OiBTaW1wbGVDaGFuZ2UgfSAmIFNpbXBsZUNoYW5nZXMsXHJcbiAgKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5tYXgpIHRoaXMuc3J2Lm1heCA9IHRoaXMubWF4O1xyXG4gICAgaWYgKGNoYW5nZXMuZXhjbHVkZXMpIHRoaXMuc3J2LmV4Y2x1ZGVzID0gdGhpcy5leGNsdWRlcztcclxuICAgIGlmIChjaGFuZ2VzLm1vZGUpIHRoaXMuc3J2Lm1vZGUgPSB0aGlzLm1vZGU7XHJcbiAgICB0aGlzLnNydi5kZWJ1ZyA9IHRoaXMuZGVidWc7XHJcblxyXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgaTE4biQsIHN1YiQgfSA9IHRoaXM7XHJcbiAgICBzdWIkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICBpZiAoaTE4biQpIGkxOG4kLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFJvdXRlUmV1c2VTdHJhdGVneSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFJldXNlVGFiU2VydmljZSB9IGZyb20gJy4vcmV1c2UtdGFiLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJldXNlVGFiU3RyYXRlZ3kgaW1wbGVtZW50cyBSb3V0ZVJldXNlU3RyYXRlZ3kge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3J2OiBSZXVzZVRhYlNlcnZpY2UpIHt9XHJcblxyXG4gIHNob3VsZERldGFjaChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3J2LnNob3VsZERldGFjaChyb3V0ZSk7XHJcbiAgfVxyXG4gIHN0b3JlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBoYW5kbGU6IHt9KTogdm9pZCB7XHJcbiAgICB0aGlzLnNydi5zdG9yZShyb3V0ZSwgaGFuZGxlKTtcclxuICB9XHJcbiAgc2hvdWxkQXR0YWNoKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zcnYuc2hvdWxkQXR0YWNoKHJvdXRlKTtcclxuICB9XHJcbiAgcmV0cmlldmUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiB7fSB7XHJcbiAgICByZXR1cm4gdGhpcy5zcnYucmV0cmlldmUocm91dGUpO1xyXG4gIH1cclxuICBzaG91bGRSZXVzZVJvdXRlKFxyXG4gICAgZnV0dXJlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxyXG4gICAgY3VycjogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcclxuICApOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnNydi5zaG91bGRSZXVzZVJvdXRlKGZ1dHVyZSwgY3Vycik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IE5nWm9ycm9BbnRkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XHJcbmltcG9ydCB7IERlbG9uTG9jYWxlTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcclxuXHJcbmltcG9ydCB7IFJldXNlVGFiQ29tcG9uZW50IH0gZnJvbSAnLi9yZXVzZS10YWIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmV1c2VUYWJDb250ZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9yZXVzZS10YWItY29udGV4dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSZXVzZVRhYkNvbnRleHREaXJlY3RpdmUgfSBmcm9tICcuL3JldXNlLXRhYi1jb250ZXh0LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dE1lbnVDb21wb25lbnQgfSBmcm9tICcuL3JldXNlLXRhYi1jb250ZXh0LW1lbnUuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IENPTVBPTkVOVFMgPSBbUmV1c2VUYWJDb21wb25lbnRdO1xyXG5jb25zdCBOT0VYUE9SVFMgPSBbXHJcbiAgUmV1c2VUYWJDb250ZXh0TWVudUNvbXBvbmVudCxcclxuICBSZXVzZVRhYkNvbnRleHRDb21wb25lbnQsXHJcbiAgUmV1c2VUYWJDb250ZXh0RGlyZWN0aXZlLFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBSb3V0ZXJNb2R1bGUsXHJcbiAgICBEZWxvbkxvY2FsZU1vZHVsZSxcclxuICAgIE5nWm9ycm9BbnRkTW9kdWxlLFxyXG4gICAgT3ZlcmxheU1vZHVsZSxcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFMsIC4uLk5PRVhQT1JUU10sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbUmV1c2VUYWJDb250ZXh0TWVudUNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmV1c2VUYWJNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFJldXNlVGFiTW9kdWxlLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQW1ERSxzQ0FBb0IsT0FBMkI7UUFBM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7cUJBTnZDLElBQUksWUFBWSxFQUEwQjtLQU1DO0lBckJuRCxzQkFDSSw4Q0FBSTs7OztRQUdSO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ25COzs7OztRQU5ELFVBQ1MsS0FBdUI7WUFDOUIsSUFBSSxD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