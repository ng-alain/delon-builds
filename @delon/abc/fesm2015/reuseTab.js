import { Component, Input, EventEmitter, Output, HostListener, Injectable, ElementRef, Directive, Injector, NgModule, ChangeDetectionStrategy, ChangeDetectorRef, Renderer2, Optional, Inject, defineInjectable, inject, INJECTOR } from '@angular/core';
import { DelonLocaleService, MenuService, ALAIN_I18N_TOKEN, DelonLocaleModule } from '@delon/theme';
import { Overlay, ConnectionPositionPair, OverlayModule } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Subscription, Subject, BehaviorSubject, combineLatest } from 'rxjs';
import { ActivatedRoute, Router, NavigationEnd, RouterModule } from '@angular/router';
import { __decorate, __metadata } from 'tslib';
import { filter, debounceTime } from 'rxjs/operators';
import { InputNumber, InputBoolean } from '@delon/util';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class ReuseTabContextMenuComponent {
    /**
     * @param {?} i18nSrv
     */
    constructor(i18nSrv) {
        this.i18nSrv = i18nSrv;
        this.close = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set i18n(value) {
        this._i18n = Object.assign({}, this.i18nSrv.getData('reuseTab'), value);
    }
    /**
     * @return {?}
     */
    get i18n() {
        return this._i18n;
    }
    /**
     * @return {?}
     */
    get includeNonCloseable() {
        return this.event.ctrlKey;
    }
    /**
     * @param {?} type
     * @param {?} item
     * @return {?}
     */
    notify(type, item) {
        this.close.next({
            type,
            item: this.item,
            includeNonCloseable: this.includeNonCloseable,
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.includeNonCloseable)
            this.item.closable = true;
    }
    /**
     * @param {?} e
     * @param {?} type
     * @return {?}
     */
    click(e, type) {
        e.preventDefault();
        e.stopPropagation();
        if (type === 'close' && !this.item.closable)
            return;
        if (type === 'closeRight' && this.item.last)
            return;
        this.notify(type, this.item);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    closeMenu(event) {
        if (event.type === 'click' && event.button === 2)
            return;
        this.notify(null, null);
    }
}
ReuseTabContextMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'reuse-tab-context-menu',
                template: "<ul nz-menu>\n  <li nz-menu-item (click)=\"click($event, 'close')\" data-type=\"close\" [nzDisabled]=\"!item.closable\" [innerHTML]=\"i18n.close\"></li>\n  <li nz-menu-item (click)=\"click($event, 'closeOther')\" data-type=\"closeOther\" [innerHTML]=\"i18n.closeOther\"></li>\n  <li nz-menu-item (click)=\"click($event, 'closeRight')\" data-type=\"closeRight\" [nzDisabled]=\"item.last\" [innerHTML]=\"i18n.closeRight\"></li>\n  <li nz-menu-item (click)=\"click($event, 'clear')\" data-type=\"clear\" [innerHTML]=\"i18n.clear\"></li>\n</ul>\n",
                preserveWhitespaces: false
            }] }
];
/** @nocollapse */
ReuseTabContextMenuComponent.ctorParameters = () => [
    { type: DelonLocaleService }
];
ReuseTabContextMenuComponent.propDecorators = {
    i18n: [{ type: Input }],
    item: [{ type: Input }],
    event: [{ type: Input }],
    close: [{ type: Output }],
    closeMenu: [{ type: HostListener, args: ['document:click', ['$event'],] }, { type: HostListener, args: ['document:contextmenu', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class ReuseTabContextService {
    /**
     * @param {?} overlay
     */
    constructor(overlay) {
        this.overlay = overlay;
        this.show = new Subject();
        this.close = new Subject();
    }
    /**
     * @return {?}
     */
    remove() {
        if (!this.ref)
            return;
        this.ref.detach();
        this.ref.dispose();
        this.ref = null;
    }
    /**
     * @param {?} context
     * @return {?}
     */
    open(context) {
        this.remove();
        const { event, item } = context;
        /** @type {?} */
        const fakeElement = new ElementRef({
            getBoundingClientRect: () => ({
                bottom: event.clientY,
                height: 0,
                left: event.clientX,
                right: event.clientX,
                top: event.clientY,
                width: 0,
            }),
        });
        /** @type {?} */
        const positions = [
            new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
        ];
        /** @type {?} */
        const positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo(fakeElement)
            .withPositions(positions);
        this.ref = this.overlay.create({
            positionStrategy,
            panelClass: 'reuse-tab__cm',
            scrollStrategy: this.overlay.scrollStrategies.close(),
        });
        /** @type {?} */
        const comp = this.ref.attach(new ComponentPortal(ReuseTabContextMenuComponent));
        /** @type {?} */
        const instance = comp.instance;
        instance.i18n = this.i18n;
        instance.item = Object.assign({}, item);
        instance.event = event;
        /** @type {?} */
        const sub$ = new Subscription();
        sub$.add(instance.close.subscribe((res) => {
            this.close.next(res);
            this.remove();
        }));
        comp.onDestroy(() => sub$.unsubscribe());
    }
}
ReuseTabContextService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ReuseTabContextService.ctorParameters = () => [
    { type: Overlay }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class ReuseTabContextComponent {
    /**
     * @param {?} srv
     */
    constructor(srv) {
        this.srv = srv;
        this.sub$ = new Subscription();
        this.change = new EventEmitter();
        this.sub$.add(srv.show.subscribe(context => this.srv.open(context)));
        this.sub$.add(srv.close.subscribe(res => this.change.emit(res)));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set i18n(value) {
        this.srv.i18n = value;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.sub$.unsubscribe();
    }
}
ReuseTabContextComponent.decorators = [
    { type: Component, args: [{
                selector: 'reuse-tab-context',
                template: ``,
                preserveWhitespaces: false
            }] }
];
/** @nocollapse */
ReuseTabContextComponent.ctorParameters = () => [
    { type: ReuseTabContextService }
];
ReuseTabContextComponent.propDecorators = {
    i18n: [{ type: Input }],
    change: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class ReuseTabContextDirective {
    /**
     * @param {?} srv
     */
    constructor(srv) {
        this.srv = srv;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onContextMenu(event) {
        this.srv.show.next({
            event,
            item: this.item,
        });
        event.preventDefault();
        event.stopPropagation();
    }
}
ReuseTabContextDirective.decorators = [
    { type: Directive, args: [{
                selector: '[reuse-tab-context-menu]',
            },] }
];
/** @nocollapse */
ReuseTabContextDirective.ctorParameters = () => [
    { type: ReuseTabContextService }
];
ReuseTabContextDirective.propDecorators = {
    item: [{ type: Input, args: ['reuse-tab-context-menu',] }],
    onContextMenu: [{ type: HostListener, args: ['contextmenu', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @enum {number} */
const ReuseTabMatchMode = {
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * 路由复用类，提供复用所需要一些基本接口
 *
 * **注：** 所有缓存数据来源于路由离开后才会产生
 */
class ReuseTabService {
    // #endregion
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
    // #region public
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
    refresh(data) {
        this._cachedChange.next({ active: 'refresh', data });
    }
    // #endregion
    // #region privates
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
        const path = (/** @type {?} */ (((future.routeConfig && future.routeConfig.path) ||
            '')));
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
/** @nocollapse */ ReuseTabService.ngInjectableDef = defineInjectable({ factory: function ReuseTabService_Factory() { return new ReuseTabService(inject(INJECTOR), inject(MenuService)); }, token: ReuseTabService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class ReuseTabComponent {
    // #endregion
    /**
     * @param {?} el
     * @param {?} srv
     * @param {?} cd
     * @param {?} router
     * @param {?} route
     * @param {?} render
     * @param {?} i18nSrv
     */
    constructor(el, srv, cd, router, route, render, i18nSrv) {
        this.srv = srv;
        this.cd = cd;
        this.router = router;
        this.route = route;
        this.render = render;
        this.i18nSrv = i18nSrv;
        this.list = [];
        this.pos = 0;
        // #region fields
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
        const route$ = this.router.events.pipe(filter(evt => evt instanceof NavigationEnd));
        this.sub$ = combineLatest(this.srv.change, route$).subscribe(([res, e]) => this.genList((/** @type {?} */ (res))));
        if (this.i18nSrv) {
            this.i18n$ = this.i18nSrv.change
                .pipe(debounceTime(100))
                .subscribe(() => this.genList());
        }
    }
    /**
     * @param {?} title
     * @return {?}
     */
    genTit(title) {
        return title.i18n && this.i18nSrv
            ? this.i18nSrv.fanyi(title.i18n)
            : title.text;
    }
    /**
     * @param {?=} notify
     * @return {?}
     */
    genList(notify) {
        /** @type {?} */
        const isClosed = notify && notify.active === 'close';
        /** @type {?} */
        const beforeClosePos = isClosed
            ? this.list.findIndex(w => w.url === notify.url)
            : -1;
        /** @type {?} */
        const ls = this.srv.items.map((item, index) => {
            return (/** @type {?} */ ({
                url: item.url,
                title: this.genTit(item.title),
                closable: this.allowClose && item.closable && this.srv.count > 0,
                index,
                active: false,
                last: false,
            }));
        });
        if (this.showCurrent) {
            /** @type {?} */
            const snapshot = this.route.snapshot;
            /** @type {?} */
            const url = this.srv.getUrl(snapshot);
            /** @type {?} */
            const idx = ls.findIndex(w => w.url === url);
            // jump directly when the current exists in the list
            // or create a new current item and jump
            if (idx !== -1 || (isClosed && notify.url === url)) {
                this.pos = isClosed
                    ? idx >= beforeClosePos
                        ? this.pos - 1
                        : this.pos
                    : idx;
            }
            else {
                /** @type {?} */
                const snapshotTrue = this.srv.getTruthRoute(snapshot);
                ls.push((/** @type {?} */ ({
                    url,
                    title: this.genTit(this.srv.getTitle(url, snapshotTrue)),
                    closable: this.allowClose &&
                        this.srv.count > 0 &&
                        this.srv.getClosable(url, snapshotTrue),
                    index: ls.length,
                    active: false,
                    last: false,
                })));
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
    }
    /**
     * @return {?}
     */
    visibility() {
        if (this.showCurrent)
            return;
        this.render.setStyle(this.el, 'display', this.list.length === 0 ? 'none' : 'block');
    }
    // #region UI
    /**
     * @param {?} res
     * @return {?}
     */
    cmChange(res) {
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
    }
    /**
     * @param {?=} dc
     * @return {?}
     */
    refStatus(dc = true) {
        if (this.list.length) {
            this.list[this.list.length - 1].last = true;
            this.list.forEach((i, idx) => (i.active = this.pos === idx));
        }
        if (dc)
            this.cd.detectChanges();
    }
    /**
     * @param {?} e
     * @param {?} index
     * @return {?}
     */
    to(e, index) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        index = Math.max(0, Math.min(index, this.list.length - 1));
        /** @type {?} */
        const item = this.list[index];
        this.router.navigateByUrl(item.url).then(res => {
            if (!res)
                return;
            this.pos = index;
            this.item = item;
            this.refStatus();
            this.change.emit(item);
        });
    }
    /**
     * @param {?} e
     * @param {?} idx
     * @param {?} includeNonCloseable
     * @return {?}
     */
    _close(e, idx, includeNonCloseable) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        /** @type {?} */
        const item = this.list[idx];
        this.srv.close(item.url, includeNonCloseable);
        this.close.emit(item);
        this.cd.detectChanges();
        return false;
    }
    // #endregion
    /**
     * @return {?}
     */
    ngOnInit() {
        this.genList();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.max)
            this.srv.max = this.max;
        if (changes.excludes)
            this.srv.excludes = this.excludes;
        if (changes.mode)
            this.srv.mode = this.mode;
        this.srv.debug = this.debug;
        this.cd.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        const { i18n$, sub$ } = this;
        sub$.unsubscribe();
        if (i18n$)
            i18n$.unsubscribe();
    }
}
ReuseTabComponent.decorators = [
    { type: Component, args: [{
                selector: 'reuse-tab',
                template: "<nz-tabset [nzSelectedIndex]=\"pos\" [nzAnimated]=\"false\" nzType=\"line\">\n  <nz-tab *ngFor=\"let i of list; let index = index\" [nzTitle]=\"titleTemplate\">\n    <ng-template #titleTemplate>\n      <span [reuse-tab-context-menu]=\"i\" (click)=\"to($event, index)\" class=\"name\">{{i.title}}</span>\n      <i *ngIf=\"i.closable\" nz-icon type=\"close\" class=\"reuse-tab__op\" (click)=\"_close($event, index, false)\"></i>\n    </ng-template>\n  </nz-tab>\n</nz-tabset>\n<reuse-tab-context [i18n]=\"i18n\" (change)=\"cmChange($event)\"></reuse-tab-context>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                providers: [ReuseTabContextService],
                host: {
                    '[class.reuse-tab]': 'true',
                }
            }] }
];
/** @nocollapse */
ReuseTabComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ReuseTabService },
    { type: ChangeDetectorRef },
    { type: Router },
    { type: ActivatedRoute },
    { type: Renderer2 },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class ReuseTabStrategy {
    /**
     * @param {?} srv
     */
    constructor(srv) {
        this.srv = srv;
    }
    /**
     * @param {?} route
     * @return {?}
     */
    shouldDetach(route) {
        return this.srv.shouldDetach(route);
    }
    /**
     * @param {?} route
     * @param {?} handle
     * @return {?}
     */
    store(route, handle) {
        this.srv.store(route, handle);
    }
    /**
     * @param {?} route
     * @return {?}
     */
    shouldAttach(route) {
        return this.srv.shouldAttach(route);
    }
    /**
     * @param {?} route
     * @return {?}
     */
    retrieve(route) {
        return this.srv.retrieve(route);
    }
    /**
     * @param {?} future
     * @param {?} curr
     * @return {?}
     */
    shouldReuseRoute(future, curr) {
        return this.srv.shouldReuseRoute(future, curr);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [ReuseTabComponent];
/** @type {?} */
const NOEXPORTS = [
    ReuseTabContextMenuComponent,
    ReuseTabContextComponent,
    ReuseTabContextDirective,
];
class ReuseTabModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: ReuseTabModule,
        };
    }
}
ReuseTabModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    DelonLocaleModule,
                    NgZorroAntdModule,
                    OverlayModule,
                ],
                declarations: [...COMPONENTS, ...NOEXPORTS],
                entryComponents: [ReuseTabContextMenuComponent],
                exports: [...COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { ReuseTabContextMenuComponent, ReuseTabContextComponent, ReuseTabContextDirective, ReuseTabContextService, ReuseTabComponent, ReuseTabService, ReuseTabStrategy, ReuseTabModule, ReuseTabMatchMode };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2VUYWIuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9hYmMvcmV1c2UtdGFiL3JldXNlLXRhYi1jb250ZXh0LW1lbnUuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL3JldXNlLXRhYi9yZXVzZS10YWItY29udGV4dC5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vYWJjL3JldXNlLXRhYi9yZXVzZS10YWItY29udGV4dC5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9hYmMvcmV1c2UtdGFiL3JldXNlLXRhYi1jb250ZXh0LmRpcmVjdGl2ZS50cyIsIm5nOi8vQGRlbG9uL2FiYy9yZXVzZS10YWIvcmV1c2UtdGFiLmludGVyZmFjZXMudHMiLCJuZzovL0BkZWxvbi9hYmMvcmV1c2UtdGFiL3JldXNlLXRhYi5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vYWJjL3JldXNlLXRhYi9yZXVzZS10YWIuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL3JldXNlLXRhYi9yZXVzZS10YWIuc3RyYXRlZ3kudHMiLCJuZzovL0BkZWxvbi9hYmMvcmV1c2UtdGFiL3JldXNlLXRhYi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPdXRwdXQsXG4gIEhvc3RMaXN0ZW5lcixcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERlbG9uTG9jYWxlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5cbmltcG9ydCB7XG4gIFJldXNlQ29udGV4dEkxOG4sXG4gIFJldXNlQ29udGV4dENsb3NlRXZlbnQsXG4gIFJldXNlSXRlbSxcbiAgQ2xvc2VUeXBlLFxufSBmcm9tICcuL3JldXNlLXRhYi5pbnRlcmZhY2VzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmV1c2UtdGFiLWNvbnRleHQtbWVudScsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXVzZS10YWItY29udGV4dC1tZW51LmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFJldXNlVGFiQ29udGV4dE1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9pMThuOiBSZXVzZUNvbnRleHRJMThuO1xuICBASW5wdXQoKVxuICBzZXQgaTE4bih2YWx1ZTogUmV1c2VDb250ZXh0STE4bikge1xuICAgIHRoaXMuX2kxOG4gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmkxOG5TcnYuZ2V0RGF0YSgncmV1c2VUYWInKSwgdmFsdWUpO1xuICB9XG4gIGdldCBpMThuKCkge1xuICAgIHJldHVybiB0aGlzLl9pMThuO1xuICB9XG5cbiAgQElucHV0KClcbiAgaXRlbTogUmV1c2VJdGVtO1xuXG4gIEBJbnB1dCgpXG4gIGV2ZW50OiBNb3VzZUV2ZW50O1xuXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8UmV1c2VDb250ZXh0Q2xvc2VFdmVudD4oKTtcblxuICBnZXQgaW5jbHVkZU5vbkNsb3NlYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ldmVudC5jdHJsS2V5O1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuU3J2OiBEZWxvbkxvY2FsZVNlcnZpY2UpIHt9XG5cbiAgcHJpdmF0ZSBub3RpZnkodHlwZTogQ2xvc2VUeXBlLCBpdGVtOiBSZXVzZUl0ZW0pIHtcbiAgICB0aGlzLmNsb3NlLm5leHQoe1xuICAgICAgdHlwZSxcbiAgICAgIGl0ZW06IHRoaXMuaXRlbSxcbiAgICAgIGluY2x1ZGVOb25DbG9zZWFibGU6IHRoaXMuaW5jbHVkZU5vbkNsb3NlYWJsZSxcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluY2x1ZGVOb25DbG9zZWFibGUpIHRoaXMuaXRlbS5jbG9zYWJsZSA9IHRydWU7XG4gIH1cblxuICBjbGljayhlOiBNb3VzZUV2ZW50LCB0eXBlOiBDbG9zZVR5cGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodHlwZSA9PT0gJ2Nsb3NlJyAmJiAhdGhpcy5pdGVtLmNsb3NhYmxlKSByZXR1cm47XG4gICAgaWYgKHR5cGUgPT09ICdjbG9zZVJpZ2h0JyAmJiB0aGlzLml0ZW0ubGFzdCkgcmV0dXJuO1xuICAgIHRoaXMubm90aWZ5KHR5cGUsIHRoaXMuaXRlbSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNvbnRleHRtZW51JywgWyckZXZlbnQnXSlcbiAgY2xvc2VNZW51KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycgJiYgZXZlbnQuYnV0dG9uID09PSAyKSByZXR1cm47XG4gICAgdGhpcy5ub3RpZnkobnVsbCwgbnVsbCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE92ZXJsYXksXG4gIE92ZXJsYXlSZWYsXG4gIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIsXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7XG4gIFJldXNlQ29udGV4dEV2ZW50LFxuICBSZXVzZUNvbnRleHRJMThuLFxuICBSZXVzZUNvbnRleHRDbG9zZUV2ZW50LFxufSBmcm9tICcuL3JldXNlLXRhYi5pbnRlcmZhY2VzJztcbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dE1lbnVDb21wb25lbnQgfSBmcm9tICcuL3JldXNlLXRhYi1jb250ZXh0LW1lbnUuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJldXNlVGFiQ29udGV4dFNlcnZpY2Uge1xuICBwcml2YXRlIHJlZjogT3ZlcmxheVJlZjtcbiAgaTE4bjogUmV1c2VDb250ZXh0STE4bjtcblxuICBzaG93OiBTdWJqZWN0PFJldXNlQ29udGV4dEV2ZW50PiA9IG5ldyBTdWJqZWN0PFJldXNlQ29udGV4dEV2ZW50PigpO1xuICBjbG9zZTogU3ViamVjdDxSZXVzZUNvbnRleHRDbG9zZUV2ZW50PiA9IG5ldyBTdWJqZWN0PFxuICAgIFJldXNlQ29udGV4dENsb3NlRXZlbnRcbiAgPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSkge31cblxuICByZW1vdmUoKSB7XG4gICAgaWYgKCF0aGlzLnJlZikgcmV0dXJuO1xuICAgIHRoaXMucmVmLmRldGFjaCgpO1xuICAgIHRoaXMucmVmLmRpc3Bvc2UoKTtcbiAgICB0aGlzLnJlZiA9IG51bGw7XG4gIH1cblxuICBvcGVuKGNvbnRleHQ6IFJldXNlQ29udGV4dEV2ZW50KSB7XG4gICAgdGhpcy5yZW1vdmUoKTtcbiAgICBjb25zdCB7IGV2ZW50LCBpdGVtIH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IGZha2VFbGVtZW50ID0gbmV3IEVsZW1lbnRSZWYoe1xuICAgICAgZ2V0Qm91bmRpbmdDbGllbnRSZWN0OiAoKTogQ2xpZW50UmVjdCA9PiAoe1xuICAgICAgICBib3R0b206IGV2ZW50LmNsaWVudFksXG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgbGVmdDogZXZlbnQuY2xpZW50WCxcbiAgICAgICAgcmlnaHQ6IGV2ZW50LmNsaWVudFgsXG4gICAgICAgIHRvcDogZXZlbnQuY2xpZW50WSxcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICB9KSxcbiAgICB9KTtcbiAgICBjb25zdCBwb3NpdGlvbnMgPSBbXG4gICAgICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcihcbiAgICAgICAgeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAnYm90dG9tJyB9LFxuICAgICAgICB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCcgfSxcbiAgICAgICksXG4gICAgICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcihcbiAgICAgICAgeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LFxuICAgICAgICB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSxcbiAgICAgICksXG4gICAgXTtcbiAgICBjb25zdCBwb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5XG4gICAgICAucG9zaXRpb24oKVxuICAgICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8oZmFrZUVsZW1lbnQpXG4gICAgICAud2l0aFBvc2l0aW9ucyhwb3NpdGlvbnMpO1xuICAgIHRoaXMucmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSh7XG4gICAgICBwb3NpdGlvblN0cmF0ZWd5LFxuICAgICAgcGFuZWxDbGFzczogJ3JldXNlLXRhYl9fY20nLFxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmNsb3NlKCksXG4gICAgfSk7XG4gICAgY29uc3QgY29tcCA9IHRoaXMucmVmLmF0dGFjaChcbiAgICAgIG5ldyBDb21wb25lbnRQb3J0YWwoUmV1c2VUYWJDb250ZXh0TWVudUNvbXBvbmVudCksXG4gICAgKTtcbiAgICBjb25zdCBpbnN0YW5jZSA9IGNvbXAuaW5zdGFuY2U7XG4gICAgaW5zdGFuY2UuaTE4biA9IHRoaXMuaTE4bjtcbiAgICBpbnN0YW5jZS5pdGVtID0geyAuLi5pdGVtIH07XG4gICAgaW5zdGFuY2UuZXZlbnQgPSBldmVudDtcblxuICAgIGNvbnN0IHN1YiQgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gICAgc3ViJC5hZGQoXG4gICAgICBpbnN0YW5jZS5jbG9zZS5zdWJzY3JpYmUoKHJlczogUmV1c2VDb250ZXh0Q2xvc2VFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLmNsb3NlLm5leHQocmVzKTtcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICAgIH0pLFxuICAgICk7XG4gICAgY29tcC5vbkRlc3Ryb3koKCkgPT4gc3ViJC51bnN1YnNjcmliZSgpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgUmV1c2VDb250ZXh0STE4biwgUmV1c2VDb250ZXh0Q2xvc2VFdmVudCB9IGZyb20gJy4vcmV1c2UtdGFiLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgUmV1c2VUYWJDb250ZXh0U2VydmljZSB9IGZyb20gJy4vcmV1c2UtdGFiLWNvbnRleHQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JldXNlLXRhYi1jb250ZXh0JyxcbiAgdGVtcGxhdGU6IGBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgUmV1c2VUYWJDb250ZXh0Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBzdWIkOiBTdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgQElucHV0KClcbiAgc2V0IGkxOG4odmFsdWU6IFJldXNlQ29udGV4dEkxOG4pIHtcbiAgICB0aGlzLnNydi5pMThuID0gdmFsdWU7XG4gIH1cblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxSZXVzZUNvbnRleHRDbG9zZUV2ZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3J2OiBSZXVzZVRhYkNvbnRleHRTZXJ2aWNlKSB7XG4gICAgdGhpcy5zdWIkLmFkZChzcnYuc2hvdy5zdWJzY3JpYmUoY29udGV4dCA9PiB0aGlzLnNydi5vcGVuKGNvbnRleHQpKSk7XG4gICAgdGhpcy5zdWIkLmFkZChzcnYuY2xvc2Uuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmNoYW5nZS5lbWl0KHJlcykpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3ViJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUmV1c2VUYWJDb250ZXh0U2VydmljZSB9IGZyb20gJy4vcmV1c2UtdGFiLWNvbnRleHQuc2VydmljZSc7XG5pbXBvcnQgeyBSZXVzZUl0ZW0gfSBmcm9tICcuL3JldXNlLXRhYi5pbnRlcmZhY2VzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3JldXNlLXRhYi1jb250ZXh0LW1lbnVdJyxcbn0pXG5leHBvcnQgY2xhc3MgUmV1c2VUYWJDb250ZXh0RGlyZWN0aXZlIHtcbiAgQElucHV0KCdyZXVzZS10YWItY29udGV4dC1tZW51JykgaXRlbTogUmV1c2VJdGVtO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3J2OiBSZXVzZVRhYkNvbnRleHRTZXJ2aWNlKSB7fVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgWyckZXZlbnQnXSlcbiAgb25Db250ZXh0TWVudShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuc3J2LnNob3cubmV4dCh7XG4gICAgICBldmVudCxcbiAgICAgIGl0ZW06IHRoaXMuaXRlbSxcbiAgICB9KTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dENvbXBvbmVudCB9IGZyb20gJy4vcmV1c2UtdGFiLWNvbnRleHQuY29tcG9uZW50JztcblxuLyoqXG4gKiDDpcKkwo3Dp8KUwqjDpcKMwrnDqcKFwo3DpsKowqHDpcK8wo9cbiAqL1xuZXhwb3J0IGVudW0gUmV1c2VUYWJNYXRjaE1vZGUge1xuICAvKipcbiAgICogw6/CvMKIw6bCjsKow6jCjcKQw6/CvMKJw6bCjMKJw6jCj8Kcw6XCjcKVIGBNZW51YCDDqcKFwo3Dp8K9wq5cbiAgICpcbiAgICogw6XCj8Kvw6XCpMKNw6fClMKow6/CvMKaXG4gICAqIC0gYHsgdGV4dDonRGFzaGJvYXJkJyB9YFxuICAgKiAtIGB7IHRleHQ6J0Rhc2hib2FyZCcsIHJldXNlOiB0cnVlIH1gXG4gICAqXG4gICAqIMOkwrjCjcOlwo/Cr8OlwqTCjcOnwpTCqMOvwrzCmlxuICAgKiAtIGB7IHRleHQ6J0Rhc2hib2FyZCcsIHJldXNlOiBmYWxzZSB9YFxuICAgKi9cbiAgTWVudSxcbiAgLyoqXG4gICAqIMOmwozCicOowo/CnMOlwo3ClSBgTWVudWAgw6XCvMK6w6XCiMK2w6nChcKNw6fCvcKuXG4gICAqXG4gICAqIMOlwo/Cr8OlwqTCjcOnwpTCqMOvwrzCmlxuICAgKiAtIGB7IHRleHQ6J0Rhc2hib2FyZCcsIHJldXNlOiB0cnVlIH1gXG4gICAqXG4gICAqIMOkwrjCjcOlwo/Cr8OlwqTCjcOnwpTCqMOvwrzCmlxuICAgKiAtIGB7IHRleHQ6J0Rhc2hib2FyZCcgfWBcbiAgICogLSBgeyB0ZXh0OidEYXNoYm9hcmQnLCByZXVzZTogZmFsc2UgfWBcbiAgICovXG4gIE1lbnVGb3JjZSxcbiAgLyoqXG4gICAqIMOlwq/CucOmwonCgMOmwpzCicOowrfCr8OnwpTCscOmwpzCicOmwpXCiMOvwrzCjMOlwo/Cr8OkwrvCpcOpwoXCjcOlwpDCiCBgZXhjbHVkZXNgIMOowr/Ch8OmwrvCpMOmwpfCoMOpwqHCu8OlwqTCjcOnwpTCqMOowrfCr8OnwpTCsVxuICAgKi9cbiAgVVJMLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlVGl0bGUge1xuICB0ZXh0OiBzdHJpbmc7XG4gIGkxOG4/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VUYWJDYWNoZWQge1xuICB0aXRsZTogUmV1c2VUaXRsZTtcblxuICB1cmw6IHN0cmluZztcblxuICAvKiogw6bCmMKvw6XCkMKmw6XChcKBw6jCrsK4w6XChcKzw6nCl8Ktw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYHRydWVgICovXG4gIGNsb3NhYmxlPzogYm9vbGVhbjtcblxuICBfc25hcHNob3Q6IEFjdGl2YXRlZFJvdXRlU25hcHNob3Q7XG5cbiAgX2hhbmRsZTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlVGFiTm90aWZ5IHtcbiAgLyoqIMOkwrrCi8OkwrvCtsOnwrHCu8Olwp7CiyAqL1xuICBhY3RpdmU6IHN0cmluZztcblxuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VJdGVtIHtcbiAgdXJsOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNsb3NhYmxlOiBib29sZWFuO1xuICBpbmRleDogbnVtYmVyO1xuICBhY3RpdmU6IGJvb2xlYW47XG4gIGxhc3Q6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VDb250ZXh0RXZlbnQge1xuICBldmVudDogTW91c2VFdmVudDtcbiAgaXRlbTogUmV1c2VJdGVtO1xuICBjb21wPzogUmV1c2VUYWJDb250ZXh0Q29tcG9uZW50O1xufVxuXG5leHBvcnQgdHlwZSBDbG9zZVR5cGUgPSAnY2xvc2UnIHwgJ2Nsb3NlT3RoZXInIHwgJ2Nsb3NlUmlnaHQnIHwgJ2NsZWFyJyB8IG51bGw7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VDb250ZXh0Q2xvc2VFdmVudCB7XG4gIHR5cGU6IENsb3NlVHlwZTtcbiAgaXRlbTogUmV1c2VJdGVtO1xuICBpbmNsdWRlTm9uQ2xvc2VhYmxlOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlQ29udGV4dEkxOG4ge1xuICBjbG9zZT86IHN0cmluZztcbiAgY2xvc2VPdGhlcj86IHN0cmluZztcbiAgY2xvc2VSaWdodD86IHN0cmluZztcbiAgY2xlYXI/OiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3ksIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICBBY3RpdmF0ZWRSb3V0ZSxcbiAgUm91dGVyLFxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBNZW51U2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQge1xuICBSZXVzZVRhYkNhY2hlZCxcbiAgUmV1c2VUYWJNYXRjaE1vZGUsXG4gIFJldXNlVGFiTm90aWZ5LFxuICBSZXVzZVRpdGxlLFxufSBmcm9tICcuL3JldXNlLXRhYi5pbnRlcmZhY2VzJztcblxuLyoqXG4gKiDDqMK3wq/Dp8KUwrHDpcKkwo3Dp8KUwqjDp8KxwrvDr8K8wozDpsKPwpDDpMK+wpvDpcKkwo3Dp8KUwqjDpsKJwoDDqcKcwoDDqMKmwoHDpMK4woDDpMK6wpvDpcKfwrrDpsKcwqzDpsKOwqXDpcKPwqNcbiAqXG4gKiAqKsOmwrPCqMOvwrzCmioqIMOmwonCgMOmwpzCicOnwrzCk8Olwq3CmMOmwpXCsMOmwo3CrsOmwp3CpcOmwrrCkMOkwrrCjsOowrfCr8OnwpTCscOnwqbCu8OlwrzCgMOlwpDCjsOmwonCjcOkwrzCmsOkwrrCp8OnwpTCn1xuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFJldXNlVGFiU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX21heCA9IDEwO1xuICBwcml2YXRlIF9kZWJ1ZyA9IGZhbHNlO1xuICBwcml2YXRlIF9tb2RlID0gUmV1c2VUYWJNYXRjaE1vZGUuTWVudTtcbiAgcHJpdmF0ZSBfZXhjbHVkZXM6IFJlZ0V4cFtdID0gW107XG4gIHByaXZhdGUgX2NhY2hlZENoYW5nZTogQmVoYXZpb3JTdWJqZWN0PFxuICAgIFJldXNlVGFiTm90aWZ5XG4gID4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFJldXNlVGFiTm90aWZ5PihudWxsKTtcbiAgcHJpdmF0ZSBfY2FjaGVkOiBSZXVzZVRhYkNhY2hlZFtdID0gW107XG4gIHByaXZhdGUgX3RpdGxlQ2FjaGVkOiB7IFt1cmw6IHN0cmluZ106IFJldXNlVGl0bGUgfSA9IHt9O1xuICBwcml2YXRlIF9jbG9zYWJsZUNhY2hlZDogeyBbdXJsOiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcbiAgcHJpdmF0ZSByZW1vdmVVcmxCdWZmZXI6IHN0cmluZztcblxuICAvLyAjcmVnaW9uIHB1YmxpY1xuXG4gIC8qKiDDpcK9wpPDpcKJwo3DqMK3wq/Dp8KUwrHDpcKcwrDDpcKdwoAgKi9cbiAgZ2V0IGN1clVybCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRVcmwodGhpcy5pbmplY3Rvci5nZXQoQWN0aXZhdGVkUm91dGUpLnNuYXBzaG90KTtcbiAgfVxuXG4gIC8qKiDDpcKFwoHDqMKuwrjDpsKcwoDDpcKkwprDpcKkwo3Dp8KUwqjDpcKkwprDpcKwwpHDpMK4wqrDqcKhwrXDqcKdwqLDr8K8wozDpcKPwpbDpcKAwrzDqMKMwoPDpcKbwrQgYDItMTAwYCAqL1xuICBzZXQgbWF4KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXggPSBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgMiksIDEwMCk7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuX2NhY2hlZC5sZW5ndGg7IGkgPiB0aGlzLl9tYXg7IGktLSkge1xuICAgICAgdGhpcy5fY2FjaGVkLnBvcCgpO1xuICAgIH1cbiAgfVxuICAvKiogw6jCrsK+w6fCvcKuw6XCjMK5w6nChcKNw6bCqMKhw6XCvMKPICovXG4gIHNldCBtb2RlKHZhbHVlOiBSZXVzZVRhYk1hdGNoTW9kZSkge1xuICAgIHRoaXMuX21vZGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZTtcbiAgfVxuICAvKiogw6jCrsK+w6fCvcKuRGVidWfDpsKowqHDpcK8wo8gKi9cbiAgc2V0IGRlYnVnKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGVidWcgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZGVidWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlYnVnO1xuICB9XG4gIC8qKiDDpsKOwpLDqcKZwqTDqMKnwoTDpcKIwpnDr8K8wozDqcKZwpAgYG1vZGU9VVJMYCAqL1xuICBzZXQgZXhjbHVkZXModmFsdWVzOiBSZWdFeHBbXSkge1xuICAgIGlmICghdmFsdWVzKSByZXR1cm47XG4gICAgdGhpcy5fZXhjbHVkZXMgPSB2YWx1ZXM7XG4gIH1cbiAgZ2V0IGV4Y2x1ZGVzKCkge1xuICAgIHJldHVybiB0aGlzLl9leGNsdWRlcztcbiAgfVxuICAvKiogw6jCjsK3w6XCj8KWw6XCt8Kyw6fCvMKTw6XCrcKYw6fCmsKEw6jCt8Kvw6fClMKxICovXG4gIGdldCBpdGVtcygpOiBSZXVzZVRhYkNhY2hlZFtdIHtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVkO1xuICB9XG4gIC8qKiDDqMKOwrfDpcKPwpbDpcK9wpPDpcKJwo3Dp8K8wpPDpcKtwpjDp8KawoTDqMK3wq/Dp8KUwrHDpsKAwrvDpsKVwrAgKi9cbiAgZ2V0IGNvdW50KCkge1xuICAgIHJldHVybiB0aGlzLl9jYWNoZWQubGVuZ3RoO1xuICB9XG4gIC8qKiDDqMKuwqLDqcKYwoXDp8K8wpPDpcKtwpjDpcKPwpjDpsKbwrTDqcKAwprDp8KfwqUgKi9cbiAgZ2V0IGNoYW5nZSgpOiBPYnNlcnZhYmxlPFJldXNlVGFiTm90aWZ5PiB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZENoYW5nZS5hc09ic2VydmFibGUoKTsgLy8gLnBpcGUoZmlsdGVyKHcgPT4gdyAhPT0gbnVsbCkpO1xuICB9XG4gIC8qKiDDqMKHwqrDpcKuwprDpMK5wonDpcK9wpPDpcKJwo3DpsKgwofDqcKiwpggKi9cbiAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcgfCBSZXVzZVRpdGxlKSB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5jdXJVcmw7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHZhbHVlID0geyB0ZXh0OiB2YWx1ZSB9O1xuICAgIHRoaXMuX3RpdGxlQ2FjaGVkW3VybF0gPSB2YWx1ZTtcbiAgICB0aGlzLmRpKCd1cGRhdGUgY3VycmVudCB0YWcgdGl0bGU6ICcsIHZhbHVlKTtcbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7XG4gICAgICBhY3RpdmU6ICd0aXRsZScsXG4gICAgICB0aXRsZTogdmFsdWUsXG4gICAgICBsaXN0OiB0aGlzLl9jYWNoZWQsXG4gICAgfSk7XG4gIH1cbiAgLyoqIMOowo7Ct8Olwo/ClsOmwozCh8Olwq7CmsOowrfCr8Olwr7ChMOnwrzCk8Olwq3CmMOmwonCgMOlwpzCqMOkwr3CjcOnwr3CrsOvwrzCjGAtMWAgw6jCocKow6fCpMK6w6bCl8Kgw6fCvMKTw6XCrcKYICovXG4gIGluZGV4KHVybDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVkLmZpbmRJbmRleCh3ID0+IHcudXJsID09PSB1cmwpO1xuICB9XG4gIC8qKiDDqMKOwrfDpcKPwpbDpsKMwofDpcKuwprDqMK3wq/DpcK+woTDp8K8wpPDpcKtwpjDpsKYwq/DpcKQwqbDpcKtwpjDpcKcwqggKi9cbiAgZXhpc3RzKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXgodXJsKSAhPT0gLTE7XG4gIH1cbiAgLyoqIMOowo7Ct8Olwo/ClsOmwozCh8Olwq7CmsOowrfCr8Olwr7ChMOnwrzCk8Olwq3CmCAqL1xuICBnZXQodXJsOiBzdHJpbmcpOiBSZXVzZVRhYkNhY2hlZCB7XG4gICAgcmV0dXJuIHVybCA/IHRoaXMuX2NhY2hlZC5maW5kKHcgPT4gdy51cmwgPT09IHVybCkgfHwgbnVsbCA6IG51bGw7XG4gIH1cbiAgcHJpdmF0ZSByZW1vdmUodXJsOiBzdHJpbmcgfCBudW1iZXIsIGluY2x1ZGVOb25DbG9zZWFibGU6IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICBjb25zdCBpZHggPSB0eXBlb2YgdXJsID09PSAnc3RyaW5nJyA/IHRoaXMuaW5kZXgodXJsKSA6IHVybDtcbiAgICBjb25zdCBpdGVtID0gaWR4ICE9PSAtMSA/IHRoaXMuX2NhY2hlZFtpZHhdIDogbnVsbDtcbiAgICBpZiAoIWl0ZW0gfHwgKCFpbmNsdWRlTm9uQ2xvc2VhYmxlICYmICFpdGVtLmNsb3NhYmxlKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgdGhpcy5kZXN0cm95KGl0ZW0uX2hhbmRsZSk7XG5cbiAgICB0aGlzLl9jYWNoZWQuc3BsaWNlKGlkeCwgMSk7XG4gICAgZGVsZXRlIHRoaXMuX3RpdGxlQ2FjaGVkW3VybF07XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIMOmwqDCucOmwo3CrlVSTMOnwqfCu8OpwpnCpMOmwqDCh8Onwq3CvlxuICAgKlxuICAgKiBAcGFyYW0gW2luY2x1ZGVOb25DbG9zZWFibGU9ZmFsc2VdIMOmwpjCr8OlwpDCpsOlwrzCusOlwojCtsOlwozChcOlwpDCq8OkwrjCjcOlwo/Cr8OlwoXCs8OpwpfCrVxuICAgKi9cbiAgY2xvc2UodXJsOiBzdHJpbmcsIGluY2x1ZGVOb25DbG9zZWFibGUgPSBmYWxzZSkge1xuICAgIHRoaXMucmVtb3ZlVXJsQnVmZmVyID0gdXJsO1xuXG4gICAgdGhpcy5yZW1vdmUodXJsLCBpbmNsdWRlTm9uQ2xvc2VhYmxlKTtcblxuICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHsgYWN0aXZlOiAnY2xvc2UnLCB1cmwsIGxpc3Q6IHRoaXMuX2NhY2hlZCB9KTtcblxuICAgIHRoaXMuZGkoJ2Nsb3NlIHRhZycsIHVybCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIMOmwrjChcOpwpnCpMOlwo/Cs8Oowr7CuVxuICAgKlxuICAgKiBAcGFyYW0gW2luY2x1ZGVOb25DbG9zZWFibGU9ZmFsc2VdIMOmwpjCr8OlwpDCpsOlwrzCusOlwojCtsOlwozChcOlwpDCq8OkwrjCjcOlwo/Cr8OlwoXCs8OpwpfCrVxuICAgKi9cbiAgY2xvc2VSaWdodCh1cmw6IHN0cmluZywgaW5jbHVkZU5vbkNsb3NlYWJsZSA9IGZhbHNlKSB7XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLmluZGV4KHVybCk7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY291bnQgLSAxOyBpID4gc3RhcnQ7IGktLSkge1xuICAgICAgdGhpcy5yZW1vdmUoaSwgaW5jbHVkZU5vbkNsb3NlYWJsZSk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW1vdmVVcmxCdWZmZXIgPSBudWxsO1xuXG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoeyBhY3RpdmU6ICdjbG9zZVJpZ2h0JywgdXJsLCBsaXN0OiB0aGlzLl9jYWNoZWQgfSk7XG5cbiAgICB0aGlzLmRpKCdjbG9zZSByaWdodCB0YWdlcycsIHVybCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIMOmwrjChcOpwpnCpMOmwonCgMOmwpzCicOnwrzCk8Olwq3CmFxuICAgKlxuICAgKiBAcGFyYW0gW2luY2x1ZGVOb25DbG9zZWFibGU9ZmFsc2VdIMOmwpjCr8OlwpDCpsOlwrzCusOlwojCtsOlwozChcOlwpDCq8OkwrjCjcOlwo/Cr8OlwoXCs8OpwpfCrVxuICAgKi9cbiAgY2xlYXIoaW5jbHVkZU5vbkNsb3NlYWJsZSA9IGZhbHNlKSB7XG4gICAgdGhpcy5fY2FjaGVkLmZvckVhY2godyA9PiB7XG4gICAgICBpZiAoIWluY2x1ZGVOb25DbG9zZWFibGUgJiYgdy5jbG9zYWJsZSkgdGhpcy5kZXN0cm95KHcuX2hhbmRsZSk7XG4gICAgfSk7XG4gICAgdGhpcy5fY2FjaGVkID0gdGhpcy5fY2FjaGVkLmZpbHRlcihcbiAgICAgIHcgPT4gIWluY2x1ZGVOb25DbG9zZWFibGUgJiYgIXcuY2xvc2FibGUsXG4gICAgKTtcblxuICAgIHRoaXMucmVtb3ZlVXJsQnVmZmVyID0gbnVsbDtcblxuICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHsgYWN0aXZlOiAnY2xlYXInLCBsaXN0OiB0aGlzLl9jYWNoZWQgfSk7XG5cbiAgICB0aGlzLmRpKCdjbGVhciBhbGwgY2F0Y2gnKTtcbiAgfVxuICAvKipcbiAgICogw6fCp8K7w6XCisKow6fCvMKTw6XCrcKYw6bClcKww6bCjcKuXG4gICAqIEBwYXJhbSB1cmwgw6jCpsKBw6fCp8K7w6XCisKow6fCmsKEVVJMw6XCnMKww6XCncKAXG4gICAqIEBwYXJhbSBwb3NpdGlvbiDDpsKWwrDDpMK9wo3Dp8K9wq7Dr8K8wozDpMK4wovDpsKgwofDpMK7wo4gYDBgIMOlwrzCgMOlwqfCi1xuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBcbiAgICogLy8gc291cmNlXG4gICAqIFsgJy9hLzEnLCAnL2EvMicsICcvYS8zJywgJy9hLzQnLCAnL2EvNScgXVxuICAgKiBtb3ZlKCcvYS8xJywgMik7XG4gICAqIC8vIG91dHB1dFxuICAgKiBbICcvYS8yJywgJy9hLzMnLCAnL2EvMScsICcvYS80JywgJy9hLzUnIF1cbiAgICogbW92ZSgnL2EvMScsIC0xKTtcbiAgICogLy8gb3V0cHV0XG4gICAqIFsgJy9hLzInLCAnL2EvMycsICcvYS80JywgJy9hLzUnLCAnL2EvMScgXVxuICAgKiBgYGBcbiAgICovXG4gIG1vdmUodXJsOiBzdHJpbmcsIHBvc2l0aW9uOiBudW1iZXIpIHtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuX2NhY2hlZC5maW5kSW5kZXgodyA9PiB3LnVybCA9PT0gdXJsKTtcbiAgICBpZiAoc3RhcnQgPT09IC0xKSByZXR1cm47XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX2NhY2hlZC5zbGljZSgpO1xuICAgIGRhdGEuc3BsaWNlKFxuICAgICAgcG9zaXRpb24gPCAwID8gZGF0YS5sZW5ndGggKyBwb3NpdGlvbiA6IHBvc2l0aW9uLFxuICAgICAgMCxcbiAgICAgIGRhdGEuc3BsaWNlKHN0YXJ0LCAxKVswXSxcbiAgICApO1xuICAgIHRoaXMuX2NhY2hlZCA9IGRhdGE7XG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoe1xuICAgICAgYWN0aXZlOiAnbW92ZScsXG4gICAgICB1cmwsXG4gICAgICBwb3NpdGlvbixcbiAgICAgIGxpc3Q6IHRoaXMuX2NhY2hlZCxcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogw6XCvMK6w6XCiMK2w6XChcKzw6nCl8Ktw6XCvcKTw6XCicKNw6jCt8Kvw6fClMKxw6/CvMKIw6XCjMKFw6XCkMKrw6TCuMKNw6XCj8Kvw6XChcKzw6nCl8Ktw6fCisK2w6bCgMKBw6/CvMKJw6/CvMKMw6XCucK2w6nCh8KNw6bClsKww6XCr8K8w6jCiMKqw6jCh8KzIGBuZXdVcmxgIMOowrfCr8OnwpTCsVxuICAgKi9cbiAgcmVwbGFjZShuZXdVcmw6IHN0cmluZykge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuY3VyVXJsO1xuICAgIGlmICh0aGlzLmV4aXN0cyh1cmwpKSB7XG4gICAgICB0aGlzLmNsb3NlKHVybCwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlVXJsQnVmZmVyID0gdXJsO1xuICAgIH1cbiAgICB0aGlzLmluamVjdG9yLmdldChSb3V0ZXIpLm5hdmlnYXRlQnlVcmwobmV3VXJsKTtcbiAgfVxuICAvKipcbiAgICogw6jCjsK3w6XCj8KWw6bCoMKHw6nCosKYw6/CvMKMw6nCocK6w6XCusKPw6XCpsKCw6TCuMKLw6/CvMKaXG4gICAqXG4gICAqIDEuIMOnwrvChMOkwrvCtsOlwobChcOkwr3Cv8OnwpTCqCBgUmV1c2VUYWJTZXJ2aWNlLnRpdGxlID0gJ25ldyB0aXRsZSdgIMOpwofCjcOmwpbCsMOmwozCh8Olwq7CmsOmwpbCh8OmwpzCrFxuICAgKiAyLiDDqMK3wq/Dp8KUwrHDqcKFwo3Dp8K9wq7DpMK4wq0gZGF0YSDDpcKxwp7DpsKAwqfDpMK4wq3DpcKMwoXDpcKQwqsgdGl0bGVJMThuID4gdGl0bGVcbiAgICogMy4gw6jCj8Kcw6XCjcKVw6bClcKww6bCjcKuw6TCuMKtIHRleHQgw6XCscKew6bCgMKnXG4gICAqXG4gICAqIEBwYXJhbSB1cmwgw6bCjMKHw6XCrsKaVVJMXG4gICAqIEBwYXJhbSByb3V0ZSDDpsKMwofDpcKuwprDqMK3wq/Dp8KUwrHDpcK/wqvDp8KFwqdcbiAgICovXG4gIGdldFRpdGxlKHVybDogc3RyaW5nLCByb3V0ZT86IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBSZXVzZVRpdGxlIHtcbiAgICBpZiAodGhpcy5fdGl0bGVDYWNoZWRbdXJsXSkgcmV0dXJuIHRoaXMuX3RpdGxlQ2FjaGVkW3VybF07XG5cbiAgICBpZiAocm91dGUgJiYgcm91dGUuZGF0YSAmJiAocm91dGUuZGF0YS50aXRsZUkxOG4gfHwgcm91dGUuZGF0YS50aXRsZSkpXG4gICAgICByZXR1cm4gPFJldXNlVGl0bGU+e1xuICAgICAgICB0ZXh0OiByb3V0ZS5kYXRhLnRpdGxlLFxuICAgICAgICBpMThuOiByb3V0ZS5kYXRhLnRpdGxlSTE4bixcbiAgICAgIH07XG5cbiAgICBjb25zdCBtZW51ID1cbiAgICAgIHRoaXMubW9kZSAhPT0gUmV1c2VUYWJNYXRjaE1vZGUuVVJMID8gdGhpcy5nZXRNZW51KHVybCkgOiBudWxsO1xuICAgIHJldHVybiBtZW51ID8geyB0ZXh0OiBtZW51LnRleHQsIGkxOG46IG1lbnUuaTE4biB9IDogeyB0ZXh0OiB1cmwgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpsK4woXDqcKZwqTDpsKgwofDqcKiwpjDp8K8wpPDpcKtwphcbiAgICovXG4gIGNsZWFyVGl0bGVDYWNoZWQoKSB7XG4gICAgdGhpcy5fdGl0bGVDYWNoZWQgPSB7fTtcbiAgfVxuICAvKiogw6jCh8Kqw6XCrsKaw6TCucKJw6XCvcKTw6XCicKNIGBjbG9zYWJsZWAgw6fCisK2w6bCgMKBICovXG4gIHNldCBjbG9zYWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuY3VyVXJsO1xuICAgIHRoaXMuX2Nsb3NhYmxlQ2FjaGVkW3VybF0gPSB2YWx1ZTtcbiAgICB0aGlzLmRpKCd1cGRhdGUgY3VycmVudCB0YWcgY2xvc2FibGU6ICcsIHZhbHVlKTtcbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7XG4gICAgICBhY3RpdmU6ICdjbG9zYWJsZScsXG4gICAgICBjbG9zYWJsZTogdmFsdWUsXG4gICAgICBsaXN0OiB0aGlzLl9jYWNoZWQsXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIMOowo7Ct8Olwo/CliBgY2xvc2FibGVgIMOnworCtsOmwoDCgcOvwrzCjMOpwqHCusOlwrrCj8OlwqbCgsOkwrjCi8OvwrzCmlxuICAgKlxuICAgKiAxLiDDp8K7woTDpMK7wrbDpcKGwoXDpMK9wr/Dp8KUwqggYFJldXNlVGFiU2VydmljZS5jbG9zYWJsZSA9IHRydWVgIMOpwofCjcOmwpbCsMOmwozCh8Olwq7CmiBgY2xvc2FibGVgIMOnworCtsOmwoDCgVxuICAgKiAyLiDDqMK3wq/Dp8KUwrHDqcKFwo3Dp8K9wq7DpMK4wq0gZGF0YSDDpcKxwp7DpsKAwqfDpMK4wq3DpcKMwoXDpcKQwqsgYHJldXNlQ2xvc2FibGVgXG4gICAqIDMuIMOowo/CnMOlwo3ClcOmwpXCsMOmwo3CrsOkwrjCrSBgcmV1c2VDbG9zYWJsZWAgw6XCscKew6bCgMKnXG4gICAqXG4gICAqIEBwYXJhbSB1cmwgw6bCjMKHw6XCrsKaVVJMXG4gICAqIEBwYXJhbSByb3V0ZSDDpsKMwofDpcKuwprDqMK3wq/Dp8KUwrHDpcK/wqvDp8KFwqdcbiAgICovXG4gIGdldENsb3NhYmxlKHVybDogc3RyaW5nLCByb3V0ZT86IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuX2Nsb3NhYmxlQ2FjaGVkW3VybF0gIT09ICd1bmRlZmluZWQnKVxuICAgICAgcmV0dXJuIHRoaXMuX2Nsb3NhYmxlQ2FjaGVkW3VybF07XG5cbiAgICBpZiAocm91dGUgJiYgcm91dGUuZGF0YSAmJiB0eXBlb2Ygcm91dGUuZGF0YS5yZXVzZUNsb3NhYmxlID09PSAnYm9vbGVhbicpXG4gICAgICByZXR1cm4gcm91dGUuZGF0YS5yZXVzZUNsb3NhYmxlO1xuXG4gICAgY29uc3QgbWVudSA9XG4gICAgICB0aGlzLm1vZGUgIT09IFJldXNlVGFiTWF0Y2hNb2RlLlVSTCA/IHRoaXMuZ2V0TWVudSh1cmwpIDogbnVsbDtcbiAgICBpZiAobWVudSAmJiB0eXBlb2YgbWVudS5yZXVzZUNsb3NhYmxlID09PSAnYm9vbGVhbicpXG4gICAgICByZXR1cm4gbWVudS5yZXVzZUNsb3NhYmxlO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIMOmwrjChcOnwqnCuiBgY2xvc2FibGVgIMOnwrzCk8Olwq3CmFxuICAgKi9cbiAgY2xlYXJDbG9zYWJsZUNhY2hlZCgpIHtcbiAgICB0aGlzLl9jbG9zYWJsZUNhY2hlZCA9IHt9O1xuICB9XG4gIGdldFRydXRoUm91dGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpIHtcbiAgICBsZXQgbmV4dCA9IHJvdXRlO1xuICAgIHdoaWxlIChuZXh0LmZpcnN0Q2hpbGQpIG5leHQgPSBuZXh0LmZpcnN0Q2hpbGQ7XG4gICAgcmV0dXJuIG5leHQ7XG4gIH1cbiAgLyoqXG4gICAqIMOmwqDCucOmwo3CrsOlwr/Cq8OnwoXCp8Oowo7Ct8Olwo/CllVSTMOlwpzCsMOlwp3CgFxuICAgKi9cbiAgZ2V0VXJsKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogc3RyaW5nIHtcbiAgICBsZXQgbmV4dCA9IHRoaXMuZ2V0VHJ1dGhSb3V0ZShyb3V0ZSk7XG4gICAgY29uc3Qgc2VnbWVudHMgPSBbXTtcbiAgICB3aGlsZSAobmV4dCkge1xuICAgICAgc2VnbWVudHMucHVzaChuZXh0LnVybC5qb2luKCcvJykpO1xuICAgICAgbmV4dCA9IG5leHQucGFyZW50O1xuICAgIH1cbiAgICBjb25zdCB1cmwgPVxuICAgICAgJy8nICtcbiAgICAgIHNlZ21lbnRzXG4gICAgICAgIC5maWx0ZXIoaSA9PiBpKVxuICAgICAgICAucmV2ZXJzZSgpXG4gICAgICAgIC5qb2luKCcvJyk7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICAvKipcbiAgICogw6bCo8KAw6bCn8Klw6XCv8Krw6fChcKnw6bCmMKvw6XCkMKmw6XChcKBw6jCrsK4w6jCosKrw6XCpMKNw6fClMKoXG4gICAqL1xuICBjYW4ocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVybChyb3V0ZSk7XG4gICAgaWYgKHVybCA9PT0gdGhpcy5yZW1vdmVVcmxCdWZmZXIpIHJldHVybiBmYWxzZTtcblxuICAgIGlmIChyb3V0ZS5kYXRhICYmIHR5cGVvZiByb3V0ZS5kYXRhLnJldXNlID09PSAnYm9vbGVhbicpXG4gICAgICByZXR1cm4gcm91dGUuZGF0YS5yZXVzZTtcblxuICAgIGlmICh0aGlzLm1vZGUgIT09IFJldXNlVGFiTWF0Y2hNb2RlLlVSTCkge1xuICAgICAgY29uc3QgbWVudSA9IHRoaXMuZ2V0TWVudSh1cmwpO1xuICAgICAgaWYgKCFtZW51KSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAodGhpcy5tb2RlID09PSBSZXVzZVRhYk1hdGNoTW9kZS5NZW51KSB7XG4gICAgICAgIGlmIChtZW51LnJldXNlID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFtZW51LnJldXNlIHx8IG1lbnUucmV1c2UgIT09IHRydWUpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXhjbHVkZXMuZmluZEluZGV4KHIgPT4gci50ZXN0KHVybCkpID09PSAtMTtcbiAgfVxuICAvKipcbiAgICogw6XCiMK3w6bClsKww6/CvMKMw6jCp8Kmw6XCj8KRw6TCuMKAw6TCuMKqIHJlZnJlc2ggw6fCscK7w6XCnsKLw6TCusKLw6TCu8K2XG4gICAqL1xuICByZWZyZXNoKGRhdGE/OiBhbnkpIHtcbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7IGFjdGl2ZTogJ3JlZnJlc2gnLCBkYXRhIH0pO1xuICB9XG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHByaXZhdGVzXG5cbiAgcHJpdmF0ZSBkZXN0cm95KF9oYW5kbGU6IGFueSkge1xuICAgIGlmIChfaGFuZGxlICYmIF9oYW5kbGUuY29tcG9uZW50UmVmICYmIF9oYW5kbGUuY29tcG9uZW50UmVmLmRlc3Ryb3kpXG4gICAgICBfaGFuZGxlLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gIH1cblxuICBwcml2YXRlIGRpKC4uLmFyZ3MpIHtcbiAgICBpZiAoIXRoaXMuZGVidWcpIHJldHVybjtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybiguLi5hcmdzKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSBtZW51U2VydmljZTogTWVudVNlcnZpY2UpIHt9XG5cbiAgcHJpdmF0ZSBnZXRNZW51KHVybDogc3RyaW5nKSB7XG4gICAgY29uc3QgbWVudXMgPSB0aGlzLm1lbnVTZXJ2aWNlLmdldFBhdGhCeVVybCh1cmwpO1xuICAgIGlmICghbWVudXMgfHwgbWVudXMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gbWVudXMucG9wKCk7XG4gIH1cblxuICBwcml2YXRlIHJ1bkhvb2sobWV0aG9kOiBzdHJpbmcsIHVybDogc3RyaW5nLCBjb21wOiBhbnkpIHtcbiAgICBpZiAoY29tcC5pbnN0YW5jZSAmJiB0eXBlb2YgY29tcC5pbnN0YW5jZVttZXRob2RdID09PSAnZnVuY3Rpb24nKVxuICAgICAgY29tcC5pbnN0YW5jZVttZXRob2RdKCk7XG4gIH1cblxuICBwcml2YXRlIGhhc0luVmFsaWRSb3V0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCkge1xuICAgIHJldHVybiAoXG4gICAgICAhcm91dGUucm91dGVDb25maWcgfHxcbiAgICAgIHJvdXRlLnJvdXRlQ29uZmlnLmxvYWRDaGlsZHJlbiB8fFxuICAgICAgcm91dGUucm91dGVDb25maWcuY2hpbGRyZW5cbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIMOlwobCs8Olwq7CmsOmwpjCr8OlwpDCpsOlwoXCgcOowq7CuMOowrfCr8OnwpTCscOlwqTCjcOnwpTCqMOvwrzCjMOowovCpSBgdHJ1ZWAgw6TCvMKaw6jCp8Kmw6XCj8KRIGBzdG9yZWBcbiAgICovXG4gIHNob3VsZERldGFjaChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmhhc0luVmFsaWRSb3V0ZShyb3V0ZSkpIHJldHVybiBmYWxzZTtcbiAgICB0aGlzLmRpKCcjc2hvdWxkRGV0YWNoJywgdGhpcy5jYW4ocm91dGUpLCB0aGlzLmdldFVybChyb3V0ZSkpO1xuICAgIHJldHVybiB0aGlzLmNhbihyb3V0ZSk7XG4gIH1cblxuICAvKipcbiAgICogw6XCrcKYw6XCgsKoXG4gICAqL1xuICBzdG9yZShfc25hcHNob3Q6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIF9oYW5kbGU6IGFueSkge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXJsKF9zbmFwc2hvdCk7XG4gICAgY29uc3QgaWR4ID0gdGhpcy5pbmRleCh1cmwpO1xuXG4gICAgY29uc3QgaXRlbTogUmV1c2VUYWJDYWNoZWQgPSB7XG4gICAgICB0aXRsZTogdGhpcy5nZXRUaXRsZSh1cmwsIF9zbmFwc2hvdCksXG4gICAgICBjbG9zYWJsZTogdGhpcy5nZXRDbG9zYWJsZSh1cmwsIF9zbmFwc2hvdCksXG4gICAgICB1cmwsXG4gICAgICBfc25hcHNob3QsXG4gICAgICBfaGFuZGxlLFxuICAgIH07XG4gICAgaWYgKGlkeCA9PT0gLTEpIHtcbiAgICAgIHRoaXMuX2NhY2hlZC5wdXNoKGl0ZW0pO1xuICAgICAgaWYgKHRoaXMuY291bnQgPiB0aGlzLl9tYXgpIHRoaXMuX2NhY2hlZC5zaGlmdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jYWNoZWRbaWR4XSA9IGl0ZW07XG4gICAgfVxuICAgIHRoaXMucmVtb3ZlVXJsQnVmZmVyID0gbnVsbDtcblxuICAgIHRoaXMuZGkoJyNzdG9yZScsIGlkeCA9PT0gLTEgPyAnW25ld10nIDogJ1tvdmVycmlkZV0nLCB1cmwpO1xuXG4gICAgaWYgKF9oYW5kbGUgJiYgX2hhbmRsZS5jb21wb25lbnRSZWYpIHtcbiAgICAgIHRoaXMucnVuSG9vaygnX29uUmV1c2VEZXN0cm95JywgdXJsLCBfaGFuZGxlLmNvbXBvbmVudFJlZik7XG4gICAgfVxuXG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoeyBhY3RpdmU6ICdhZGQnLCBpdGVtLCBsaXN0OiB0aGlzLl9jYWNoZWQgfSk7XG4gIH1cblxuICAvKipcbiAgICogw6XChsKzw6XCrsKaw6bCmMKvw6XCkMKmw6XChcKBw6jCrsK4w6XCusKUw6fClMKow6fCvMKTw6XCrcKYw6bClcKww6bCjcKuXG4gICAqL1xuICBzaG91bGRBdHRhY2gocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5oYXNJblZhbGlkUm91dGUocm91dGUpKSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRVcmwocm91dGUpO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldCh1cmwpO1xuICAgIGNvbnN0IHJldCA9ICEhKGRhdGEgJiYgZGF0YS5faGFuZGxlKTtcbiAgICB0aGlzLmRpKCcjc2hvdWxkQXR0YWNoJywgcmV0LCB1cmwpO1xuICAgIGlmIChyZXQgJiYgZGF0YS5faGFuZGxlLmNvbXBvbmVudFJlZikge1xuICAgICAgdGhpcy5ydW5Ib29rKCdfb25SZXVzZUluaXQnLCB1cmwsIGRhdGEuX2hhbmRsZS5jb21wb25lbnRSZWYpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIMOmwo/CkMOlwo/ClsOlwqTCjcOnwpTCqMOmwpXCsMOmwo3CrlxuICAgKi9cbiAgcmV0cmlldmUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiB7fSB7XG4gICAgaWYgKHRoaXMuaGFzSW5WYWxpZFJvdXRlKHJvdXRlKSkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRVcmwocm91dGUpO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldCh1cmwpO1xuICAgIGNvbnN0IHJldCA9IChkYXRhICYmIGRhdGEuX2hhbmRsZSkgfHwgbnVsbDtcbiAgICB0aGlzLmRpKCcjcmV0cmlldmUnLCB1cmwsIHJldCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpcKGwrPDpcKuwprDpsKYwq/DpcKQwqbDpcK6wpTDqMKvwqXDqMK/wpvDqMKhwozDpcKkwo3Dp8KUwqjDqMK3wq/Dp8KUwrHDpcKkwoTDp8KQwoZcbiAgICovXG4gIHNob3VsZFJldXNlUm91dGUoXG4gICAgZnV0dXJlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIGN1cnI6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICk6IGJvb2xlYW4ge1xuICAgIGxldCByZXQgPSBmdXR1cmUucm91dGVDb25maWcgPT09IGN1cnIucm91dGVDb25maWc7XG4gICAgaWYgKCFyZXQpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IHBhdGggPSAoKGZ1dHVyZS5yb3V0ZUNvbmZpZyAmJiBmdXR1cmUucm91dGVDb25maWcucGF0aCkgfHxcbiAgICAgICcnKSBhcyBzdHJpbmc7XG4gICAgaWYgKHBhdGgubGVuZ3RoID4gMCAmJiB+cGF0aC5pbmRleE9mKCc6JykpIHtcbiAgICAgIGNvbnN0IGZ1dHVyZVVybCA9IHRoaXMuZ2V0VXJsKGZ1dHVyZSk7XG4gICAgICBjb25zdCBjdXJyVXJsID0gdGhpcy5nZXRVcmwoY3Vycik7XG4gICAgICByZXQgPSBmdXR1cmVVcmwgPT09IGN1cnJVcmw7XG4gICAgfVxuICAgIHRoaXMuZGkoJz09PT09PT09PT09PT09PT09PT09PScpO1xuICAgIHRoaXMuZGkoXG4gICAgICAnI3Nob3VsZFJldXNlUm91dGUnLFxuICAgICAgcmV0LFxuICAgICAgYCR7dGhpcy5nZXRVcmwoY3Vycil9PT4ke3RoaXMuZ2V0VXJsKGZ1dHVyZSl9YCxcbiAgICAgIGZ1dHVyZSxcbiAgICAgIGN1cnIsXG4gICAgKTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fY2FjaGVkID0gW107XG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgT25DaGFuZ2VzLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25Jbml0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2UsXG4gIE9uRGVzdHJveSxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxuICBJbmplY3QsXG4gIE9wdGlvbmFsLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkVuZCwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElucHV0TnVtYmVyLCBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBBTEFJTl9JMThOX1RPS0VOLCBBbGFpbkkxOE5TZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcblxuaW1wb3J0IHsgUmV1c2VUYWJTZXJ2aWNlIH0gZnJvbSAnLi9yZXVzZS10YWIuc2VydmljZSc7XG5pbXBvcnQge1xuICBSZXVzZVRhYkNhY2hlZCxcbiAgUmV1c2VUYWJOb3RpZnksXG4gIFJldXNlVGFiTWF0Y2hNb2RlLFxuICBSZXVzZUl0ZW0sXG4gIFJldXNlQ29udGV4dEkxOG4sXG4gIFJldXNlQ29udGV4dENsb3NlRXZlbnQsXG4gIFJldXNlVGl0bGUsXG59IGZyb20gJy4vcmV1c2UtdGFiLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgUmV1c2VUYWJDb250ZXh0U2VydmljZSB9IGZyb20gJy4vcmV1c2UtdGFiLWNvbnRleHQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JldXNlLXRhYicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXVzZS10YWIuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHByb3ZpZGVyczogW1JldXNlVGFiQ29udGV4dFNlcnZpY2VdLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5yZXVzZS10YWJdJzogJ3RydWUnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBSZXVzZVRhYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBzdWIkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgaTE4biQ6IFN1YnNjcmlwdGlvbjtcbiAgbGlzdDogUmV1c2VJdGVtW10gPSBbXTtcbiAgaXRlbTogUmV1c2VJdGVtO1xuICBwb3MgPSAwO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgLyoqIMOowq7CvsOnwr3CrsOlwozCucOpwoXCjcOmwqjCocOlwrzCjyAqL1xuICBASW5wdXQoKVxuICBtb2RlOiBSZXVzZVRhYk1hdGNoTW9kZSA9IFJldXNlVGFiTWF0Y2hNb2RlLk1lbnU7XG4gIC8qKiDDqcKAwonDqcKhwrnDpsKWwofDpsKcwqzDpcKbwr3DqcKZwoXDpcKMwpYgKi9cbiAgQElucHV0KClcbiAgaTE4bjogUmV1c2VDb250ZXh0STE4bjtcbiAgLyoqIMOmwpjCr8OlwpDCpkRlYnVnw6bCqMKhw6XCvMKPICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBkZWJ1ZyA9IGZhbHNlO1xuICAvKiogw6XChcKBw6jCrsK4w6bCnMKAw6XCpMKaw6XCpMKNw6fClMKow6XCpMKaw6XCsMKRw6TCuMKqw6nCocK1w6nCncKiICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcigpXG4gIG1heDogbnVtYmVyO1xuICAvKiogw6bCjsKSw6nCmcKkw6jCp8KEw6XCiMKZw6/CvMKMw6nCmcKQIGBtb2RlPVVSTGAgKi9cbiAgQElucHV0KClcbiAgZXhjbHVkZXM6IFJlZ0V4cFtdO1xuICAvKiogw6XChcKBw6jCrsK4w6XChcKzw6nCl8KtICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBhbGxvd0Nsb3NlID0gdHJ1ZTtcbiAgLyoqIMOmwoDCu8OmwpjCr8OmwpjCvsOnwqTCusOlwr3Ck8OlwonCjcOpwqHCtSAqL1xuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgc2hvd0N1cnJlbnQgPSB0cnVlO1xuICAvKiogw6XCiMKHw6bCjcKiw6bCl8K2w6XCm8Kew6jCsMKDICovXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFJldXNlSXRlbT4oKTtcbiAgLyoqIMOlwoXCs8OpwpfCrcOlwpvCnsOowrDCgyAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPFJldXNlSXRlbT4oKTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IoXG4gICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBzcnY6IFJldXNlVGFiU2VydmljZSxcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgcmVuZGVyOiBSZW5kZXJlcjIsXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pXG4gICAgcHJpdmF0ZSBpMThuU3J2OiBBbGFpbkkxOE5TZXJ2aWNlLFxuICApIHtcbiAgICB0aGlzLmVsID0gZWwubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCByb3V0ZSQgPSB0aGlzLnJvdXRlci5ldmVudHMucGlwZShcbiAgICAgIGZpbHRlcihldnQgPT4gZXZ0IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCksXG4gICAgKTtcbiAgICB0aGlzLnN1YiQgPSBjb21iaW5lTGF0ZXN0KHRoaXMuc3J2LmNoYW5nZSwgcm91dGUkKS5zdWJzY3JpYmUoKFtyZXMsIGVdKSA9PlxuICAgICAgdGhpcy5nZW5MaXN0KHJlcyBhcyBhbnkpLFxuICAgICk7XG4gICAgaWYgKHRoaXMuaTE4blNydikge1xuICAgICAgdGhpcy5pMThuJCA9IHRoaXMuaTE4blNydi5jaGFuZ2VcbiAgICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDEwMCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5nZW5MaXN0KCkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2VuVGl0KHRpdGxlOiBSZXVzZVRpdGxlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGl0bGUuaTE4biAmJiB0aGlzLmkxOG5TcnZcbiAgICAgID8gdGhpcy5pMThuU3J2LmZhbnlpKHRpdGxlLmkxOG4pXG4gICAgICA6IHRpdGxlLnRleHQ7XG4gIH1cblxuICBwcml2YXRlIGdlbkxpc3Qobm90aWZ5PzogUmV1c2VUYWJOb3RpZnkpIHtcbiAgICBjb25zdCBpc0Nsb3NlZCA9IG5vdGlmeSAmJiBub3RpZnkuYWN0aXZlID09PSAnY2xvc2UnO1xuICAgIGNvbnN0IGJlZm9yZUNsb3NlUG9zID0gaXNDbG9zZWRcbiAgICAgID8gdGhpcy5saXN0LmZpbmRJbmRleCh3ID0+IHcudXJsID09PSBub3RpZnkudXJsKVxuICAgICAgOiAtMTtcbiAgICBjb25zdCBscyA9IHRoaXMuc3J2Lml0ZW1zLm1hcCgoaXRlbTogUmV1c2VUYWJDYWNoZWQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIHJldHVybiA8UmV1c2VJdGVtPntcbiAgICAgICAgdXJsOiBpdGVtLnVybCxcbiAgICAgICAgdGl0bGU6IHRoaXMuZ2VuVGl0KGl0ZW0udGl0bGUpLFxuICAgICAgICBjbG9zYWJsZTogdGhpcy5hbGxvd0Nsb3NlICYmIGl0ZW0uY2xvc2FibGUgJiYgdGhpcy5zcnYuY291bnQgPiAwLFxuICAgICAgICBpbmRleCxcbiAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgbGFzdDogZmFsc2UsXG4gICAgICB9O1xuICAgIH0pO1xuICAgIGlmICh0aGlzLnNob3dDdXJyZW50KSB7XG4gICAgICBjb25zdCBzbmFwc2hvdCA9IHRoaXMucm91dGUuc25hcHNob3Q7XG4gICAgICBjb25zdCB1cmwgPSB0aGlzLnNydi5nZXRVcmwoc25hcHNob3QpO1xuICAgICAgY29uc3QgaWR4ID0gbHMuZmluZEluZGV4KHcgPT4gdy51cmwgPT09IHVybCk7XG4gICAgICAvLyBqdW1wIGRpcmVjdGx5IHdoZW4gdGhlIGN1cnJlbnQgZXhpc3RzIGluIHRoZSBsaXN0XG4gICAgICAvLyBvciBjcmVhdGUgYSBuZXcgY3VycmVudCBpdGVtIGFuZCBqdW1wXG4gICAgICBpZiAoaWR4ICE9PSAtMSB8fCAoaXNDbG9zZWQgJiYgbm90aWZ5LnVybCA9PT0gdXJsKSkge1xuICAgICAgICB0aGlzLnBvcyA9IGlzQ2xvc2VkXG4gICAgICAgICAgPyBpZHggPj0gYmVmb3JlQ2xvc2VQb3NcbiAgICAgICAgICAgID8gdGhpcy5wb3MgLSAxXG4gICAgICAgICAgICA6IHRoaXMucG9zXG4gICAgICAgICAgOiBpZHg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzbmFwc2hvdFRydWUgPSB0aGlzLnNydi5nZXRUcnV0aFJvdXRlKHNuYXBzaG90KTtcbiAgICAgICAgbHMucHVzaCg8UmV1c2VJdGVtPntcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgdGl0bGU6IHRoaXMuZ2VuVGl0KHRoaXMuc3J2LmdldFRpdGxlKHVybCwgc25hcHNob3RUcnVlKSksXG4gICAgICAgICAgY2xvc2FibGU6XG4gICAgICAgICAgICB0aGlzLmFsbG93Q2xvc2UgJiZcbiAgICAgICAgICAgIHRoaXMuc3J2LmNvdW50ID4gMCAmJlxuICAgICAgICAgICAgdGhpcy5zcnYuZ2V0Q2xvc2FibGUodXJsLCBzbmFwc2hvdFRydWUpLFxuICAgICAgICAgIGluZGV4OiBscy5sZW5ndGgsXG4gICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICBsYXN0OiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucG9zID0gbHMubGVuZ3RoIC0gMTtcbiAgICAgIH1cbiAgICAgIC8vIGZpeCB1bmFibGVkIGNsb3NlIGxhc3QgaXRlbVxuICAgICAgaWYgKGxzLmxlbmd0aCA8PSAxKSBsc1swXS5jbG9zYWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMubGlzdCA9IGxzO1xuXG4gICAgaWYgKGxzLmxlbmd0aCAmJiBpc0Nsb3NlZCkge1xuICAgICAgdGhpcy50byhudWxsLCB0aGlzLnBvcyk7XG4gICAgfVxuXG4gICAgdGhpcy5yZWZTdGF0dXMoZmFsc2UpO1xuICAgIHRoaXMudmlzaWJpbGl0eSgpO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSB2aXNpYmlsaXR5KCkge1xuICAgIGlmICh0aGlzLnNob3dDdXJyZW50KSByZXR1cm47XG4gICAgdGhpcy5yZW5kZXIuc2V0U3R5bGUoXG4gICAgICB0aGlzLmVsLFxuICAgICAgJ2Rpc3BsYXknLFxuICAgICAgdGhpcy5saXN0Lmxlbmd0aCA9PT0gMCA/ICdub25lJyA6ICdibG9jaycsXG4gICAgKTtcbiAgfVxuXG4gIC8vICNyZWdpb24gVUlcblxuICBjbUNoYW5nZShyZXM6IFJldXNlQ29udGV4dENsb3NlRXZlbnQpIHtcbiAgICBzd2l0Y2ggKHJlcy50eXBlKSB7XG4gICAgICBjYXNlICdjbG9zZSc6XG4gICAgICAgIHRoaXMuX2Nsb3NlKG51bGwsIHJlcy5pdGVtLmluZGV4LCByZXMuaW5jbHVkZU5vbkNsb3NlYWJsZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2xvc2VSaWdodCc6XG4gICAgICAgIHRoaXMuc3J2LmNsb3NlUmlnaHQocmVzLml0ZW0udXJsLCByZXMuaW5jbHVkZU5vbkNsb3NlYWJsZSk7XG4gICAgICAgIHRoaXMuY2xvc2UuZW1pdChudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjbGVhcic6XG4gICAgICBjYXNlICdjbG9zZU90aGVyJzpcbiAgICAgICAgdGhpcy5zcnYuY2xlYXIocmVzLmluY2x1ZGVOb25DbG9zZWFibGUpO1xuICAgICAgICB0aGlzLmNsb3NlLmVtaXQobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJlZlN0YXR1cyhkYyA9IHRydWUpIHtcbiAgICBpZiAodGhpcy5saXN0Lmxlbmd0aCkge1xuICAgICAgdGhpcy5saXN0W3RoaXMubGlzdC5sZW5ndGggLSAxXS5sYXN0ID0gdHJ1ZTtcbiAgICAgIHRoaXMubGlzdC5mb3JFYWNoKChpLCBpZHgpID0+IChpLmFjdGl2ZSA9IHRoaXMucG9zID09PSBpZHgpKTtcbiAgICB9XG4gICAgaWYgKGRjKSB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHRvKGU6IEV2ZW50LCBpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIGluZGV4ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oaW5kZXgsIHRoaXMubGlzdC5sZW5ndGggLSAxKSk7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMubGlzdFtpbmRleF07XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChpdGVtLnVybCkudGhlbihyZXMgPT4ge1xuICAgICAgaWYgKCFyZXMpIHJldHVybjtcbiAgICAgIHRoaXMucG9zID0gaW5kZXg7XG4gICAgICB0aGlzLml0ZW0gPSBpdGVtO1xuICAgICAgdGhpcy5yZWZTdGF0dXMoKTtcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQoaXRlbSk7XG4gICAgfSk7XG4gIH1cblxuICBfY2xvc2UoZTogRXZlbnQsIGlkeDogbnVtYmVyLCBpbmNsdWRlTm9uQ2xvc2VhYmxlOiBib29sZWFuKSB7XG4gICAgaWYgKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmxpc3RbaWR4XTtcbiAgICB0aGlzLnNydi5jbG9zZShpdGVtLnVybCwgaW5jbHVkZU5vbkNsb3NlYWJsZSk7XG4gICAgdGhpcy5jbG9zZS5lbWl0KGl0ZW0pO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmdlbkxpc3QoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKFxuICAgIGNoYW5nZXM6IHsgW1AgaW4ga2V5b2YgdGhpc10/OiBTaW1wbGVDaGFuZ2UgfSAmIFNpbXBsZUNoYW5nZXMsXG4gICk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm1heCkgdGhpcy5zcnYubWF4ID0gdGhpcy5tYXg7XG4gICAgaWYgKGNoYW5nZXMuZXhjbHVkZXMpIHRoaXMuc3J2LmV4Y2x1ZGVzID0gdGhpcy5leGNsdWRlcztcbiAgICBpZiAoY2hhbmdlcy5tb2RlKSB0aGlzLnNydi5tb2RlID0gdGhpcy5tb2RlO1xuICAgIHRoaXMuc3J2LmRlYnVnID0gdGhpcy5kZWJ1ZztcblxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgY29uc3QgeyBpMThuJCwgc3ViJCB9ID0gdGhpcztcbiAgICBzdWIkLnVuc3Vic2NyaWJlKCk7XG4gICAgaWYgKGkxOG4kKSBpMThuJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBSb3V0ZVJldXNlU3RyYXRlZ3ksIEFjdGl2YXRlZFJvdXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUmV1c2VUYWJTZXJ2aWNlIH0gZnJvbSAnLi9yZXVzZS10YWIuc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBSZXVzZVRhYlN0cmF0ZWd5IGltcGxlbWVudHMgUm91dGVSZXVzZVN0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IFJldXNlVGFiU2VydmljZSkge31cblxuICBzaG91bGREZXRhY2gocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zcnYuc2hvdWxkRGV0YWNoKHJvdXRlKTtcbiAgfVxuICBzdG9yZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgaGFuZGxlOiB7fSk6IHZvaWQge1xuICAgIHRoaXMuc3J2LnN0b3JlKHJvdXRlLCBoYW5kbGUpO1xuICB9XG4gIHNob3VsZEF0dGFjaChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNydi5zaG91bGRBdHRhY2gocm91dGUpO1xuICB9XG4gIHJldHJpZXZlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KToge30ge1xuICAgIHJldHVybiB0aGlzLnNydi5yZXRyaWV2ZShyb3V0ZSk7XG4gIH1cbiAgc2hvdWxkUmV1c2VSb3V0ZShcbiAgICBmdXR1cmU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgY3VycjogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3J2LnNob3VsZFJldXNlUm91dGUoZnV0dXJlLCBjdXJyKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IE5nWm9ycm9BbnRkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5pbXBvcnQgeyBEZWxvbkxvY2FsZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5cbmltcG9ydCB7IFJldXNlVGFiQ29tcG9uZW50IH0gZnJvbSAnLi9yZXVzZS10YWIuY29tcG9uZW50JztcbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dENvbXBvbmVudCB9IGZyb20gJy4vcmV1c2UtdGFiLWNvbnRleHQuY29tcG9uZW50JztcbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dERpcmVjdGl2ZSB9IGZyb20gJy4vcmV1c2UtdGFiLWNvbnRleHQuZGlyZWN0aXZlJztcbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dE1lbnVDb21wb25lbnQgfSBmcm9tICcuL3JldXNlLXRhYi1jb250ZXh0LW1lbnUuY29tcG9uZW50JztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtSZXVzZVRhYkNvbXBvbmVudF07XG5jb25zdCBOT0VYUE9SVFMgPSBbXG4gIFJldXNlVGFiQ29udGV4dE1lbnVDb21wb25lbnQsXG4gIFJldXNlVGFiQ29udGV4dENvbXBvbmVudCxcbiAgUmV1c2VUYWJDb250ZXh0RGlyZWN0aXZlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgRGVsb25Mb2NhbGVNb2R1bGUsXG4gICAgTmdab3Jyb0FudGRNb2R1bGUsXG4gICAgT3ZlcmxheU1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UUywgLi4uTk9FWFBPUlRTXSxcbiAgZW50cnlDb21wb25lbnRzOiBbUmV1c2VUYWJDb250ZXh0TWVudUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcbn0pXG5leHBvcnQgY2xhc3MgUmV1c2VUYWJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFJldXNlVGFiTW9kdWxlLFxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZGVjb3JhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQXNCYSw0QkFBNEI7Ozs7SUF1QnZDLFlBQW9CLE9BQTJCO1FBQTNCLFlBQU8sR0FBUCxPQUFPLENBQW9CO1FBTnRDLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBMEIsQ0FBQztLQU1UOzs7OztJQXJCbkQsSUFDSSxJQUFJLENBQUMsS0FBdUI7UUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFD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