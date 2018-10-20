import { Component, Input, EventEmitter, Output, HostListener, Injectable, ElementRef, Directive, Injector, NgModule, defineInjectable, inject, INJECTOR, ChangeDetectionStrategy, ChangeDetectorRef, Renderer2, Optional, Inject } from '@angular/core';
import { DelonLocaleService, MenuService, DelonLocaleModule, ALAIN_I18N_TOKEN } from '@delon/theme';
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                template: `
  <ul nz-menu>
      <li nz-menu-item (click)="click($event, 'close')" data-type="close" [nzDisabled]="!item.closable" [innerHTML]="i18n.close"></li>
      <li nz-menu-item (click)="click($event, 'closeOther')" data-type="closeOther" [innerHTML]="i18n.closeOther"></li>
      <li nz-menu-item (click)="click($event, 'closeRight')" data-type="closeRight" [nzDisabled]="item.last" [innerHTML]="i18n.closeRight"></li>
      <li nz-menu-item (click)="click($event, 'clear')" data-type="clear" [innerHTML]="i18n.clear"></li>
  </ul>`,
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * 路由复用类，提供复用所需要一些基本接口
 *
 * **注：** 所有缓存数据来源于路由离开后才会产生
 */
class ReuseTabService {
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
/** @nocollapse */ ReuseTabService.ngInjectableDef = defineInjectable({ factory: function ReuseTabService_Factory() { return new ReuseTabService(inject(INJECTOR), inject(MenuService)); }, token: ReuseTabService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ReuseTabComponent {
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
        this.sub$ = combineLatest(this.srv.change, route$).subscribe(([res, e]) => this.genList(/** @type {?} */ (res)));
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
            ? this.list.findIndex(w => w.url === notify["url"])
            : -1;
        /** @type {?} */
        const ls = this.srv.items.map((item, index) => {
            return /** @type {?} */ ({
                url: item.url,
                title: this.genTit(item.title),
                closable: this.allowClose && item.closable && this.srv.count > 0,
                index,
                active: false,
                last: false,
            });
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
            if (idx !== -1 || (isClosed && notify["url"] === url)) {
                this.pos = isClosed
                    ? idx >= beforeClosePos
                        ? this.pos - 1
                        : this.pos
                    : idx;
            }
            else {
                /** @type {?} */
                const snapshotTrue = this.srv.getTruthRoute(snapshot);
                ls.push(/** @type {?} */ ({
                    url,
                    title: this.genTit(this.srv.getTitle(url, snapshotTrue)),
                    closable: this.allowClose &&
                        this.srv.count > 0 &&
                        this.srv.getClosable(url, snapshotTrue),
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
    }
    /**
     * @return {?}
     */
    visibility() {
        if (this.showCurrent)
            return;
        this.render.setStyle(this.el, 'display', this.list.length === 0 ? 'none' : 'block');
    }
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
                template: "<nz-tabset [nzSelectedIndex]=\"pos\" [nzAnimated]=\"false\" nzType=\"line\">\n  <nz-tab *ngFor=\"let i of list; let index = index\" [nzTitle]=\"titleTemplate\">\n    <ng-template #titleTemplate>\n      <span [reuse-tab-context-menu]=\"i\" (click)=\"to($event, index)\" class=\"name\">{{i.title}}</span>\n      <i *ngIf=\"i.closable\" class=\"anticon anticon-close op\" (click)=\"_close($event, index, false)\"></i>\n    </ng-template>\n  </nz-tab>\n</nz-tabset>\n<reuse-tab-context [i18n]=\"i18n\" (change)=\"cmChange($event)\"></reuse-tab-context>\n",
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { ReuseTabContextMenuComponent, ReuseTabContextComponent, ReuseTabContextDirective, ReuseTabContextService, ReuseTabComponent, ReuseTabService, ReuseTabStrategy, ReuseTabModule, ReuseTabMatchMode };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2VUYWIuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9hYmMvcmV1c2UtdGFiL3JldXNlLXRhYi1jb250ZXh0LW1lbnUuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL3JldXNlLXRhYi9yZXVzZS10YWItY29udGV4dC5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vYWJjL3JldXNlLXRhYi9yZXVzZS10YWItY29udGV4dC5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9hYmMvcmV1c2UtdGFiL3JldXNlLXRhYi1jb250ZXh0LmRpcmVjdGl2ZS50cyIsIm5nOi8vQGRlbG9uL2FiYy9yZXVzZS10YWIvcmV1c2UtdGFiLmludGVyZmFjZXMudHMiLCJuZzovL0BkZWxvbi9hYmMvcmV1c2UtdGFiL3JldXNlLXRhYi5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vYWJjL3JldXNlLXRhYi9yZXVzZS10YWIuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL3JldXNlLXRhYi9yZXVzZS10YWIuc3RyYXRlZ3kudHMiLCJuZzovL0BkZWxvbi9hYmMvcmV1c2UtdGFiL3JldXNlLXRhYi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPdXRwdXQsXG4gIEhvc3RMaXN0ZW5lcixcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERlbG9uTG9jYWxlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5cbmltcG9ydCB7XG4gIFJldXNlQ29udGV4dEkxOG4sXG4gIFJldXNlQ29udGV4dENsb3NlRXZlbnQsXG4gIFJldXNlSXRlbSxcbiAgQ2xvc2VUeXBlLFxufSBmcm9tICcuL3JldXNlLXRhYi5pbnRlcmZhY2VzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmV1c2UtdGFiLWNvbnRleHQtbWVudScsXG4gIHRlbXBsYXRlOiBgXG4gIDx1bCBuei1tZW51PlxuICAgICAgPGxpIG56LW1lbnUtaXRlbSAoY2xpY2spPVwiY2xpY2soJGV2ZW50LCAnY2xvc2UnKVwiIGRhdGEtdHlwZT1cImNsb3NlXCIgW256RGlzYWJsZWRdPVwiIWl0ZW0uY2xvc2FibGVcIiBbaW5uZXJIVE1MXT1cImkxOG4uY2xvc2VcIj48L2xpPlxuICAgICAgPGxpIG56LW1lbnUtaXRlbSAoY2xpY2spPVwiY2xpY2soJGV2ZW50LCAnY2xvc2VPdGhlcicpXCIgZGF0YS10eXBlPVwiY2xvc2VPdGhlclwiIFtpbm5lckhUTUxdPVwiaTE4bi5jbG9zZU90aGVyXCI+PC9saT5cbiAgICAgIDxsaSBuei1tZW51LWl0ZW0gKGNsaWNrKT1cImNsaWNrKCRldmVudCwgJ2Nsb3NlUmlnaHQnKVwiIGRhdGEtdHlwZT1cImNsb3NlUmlnaHRcIiBbbnpEaXNhYmxlZF09XCJpdGVtLmxhc3RcIiBbaW5uZXJIVE1MXT1cImkxOG4uY2xvc2VSaWdodFwiPjwvbGk+XG4gICAgICA8bGkgbnotbWVudS1pdGVtIChjbGljayk9XCJjbGljaygkZXZlbnQsICdjbGVhcicpXCIgZGF0YS10eXBlPVwiY2xlYXJcIiBbaW5uZXJIVE1MXT1cImkxOG4uY2xlYXJcIj48L2xpPlxuICA8L3VsPmAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBSZXVzZVRhYkNvbnRleHRNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfaTE4bjogUmV1c2VDb250ZXh0STE4bjtcbiAgQElucHV0KClcbiAgc2V0IGkxOG4odmFsdWU6IFJldXNlQ29udGV4dEkxOG4pIHtcbiAgICB0aGlzLl9pMThuID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5pMThuU3J2LmdldERhdGEoJ3JldXNlVGFiJyksIHZhbHVlKTtcbiAgfVxuICBnZXQgaTE4bigpIHtcbiAgICByZXR1cm4gdGhpcy5faTE4bjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGl0ZW06IFJldXNlSXRlbTtcblxuICBASW5wdXQoKVxuICBldmVudDogTW91c2VFdmVudDtcblxuICBAT3V0cHV0KClcbiAgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPFJldXNlQ29udGV4dENsb3NlRXZlbnQ+KCk7XG5cbiAgZ2V0IGluY2x1ZGVOb25DbG9zZWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnQuY3RybEtleTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4blNydjogRGVsb25Mb2NhbGVTZXJ2aWNlKSB7fVxuXG4gIHByaXZhdGUgbm90aWZ5KHR5cGU6IENsb3NlVHlwZSwgaXRlbTogUmV1c2VJdGVtKSB7XG4gICAgdGhpcy5jbG9zZS5uZXh0KHtcbiAgICAgIHR5cGUsXG4gICAgICBpdGVtOiB0aGlzLml0ZW0sXG4gICAgICBpbmNsdWRlTm9uQ2xvc2VhYmxlOiB0aGlzLmluY2x1ZGVOb25DbG9zZWFibGUsXG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbmNsdWRlTm9uQ2xvc2VhYmxlKSB0aGlzLml0ZW0uY2xvc2FibGUgPSB0cnVlO1xuICB9XG5cbiAgY2xpY2soZTogTW91c2VFdmVudCwgdHlwZTogQ2xvc2VUeXBlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHR5cGUgPT09ICdjbG9zZScgJiYgIXRoaXMuaXRlbS5jbG9zYWJsZSkgcmV0dXJuO1xuICAgIGlmICh0eXBlID09PSAnY2xvc2VSaWdodCcgJiYgdGhpcy5pdGVtLmxhc3QpIHJldHVybjtcbiAgICB0aGlzLm5vdGlmeSh0eXBlLCB0aGlzLml0ZW0pO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjb250ZXh0bWVudScsIFsnJGV2ZW50J10pXG4gIGNsb3NlTWVudShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudC50eXBlID09PSAnY2xpY2snICYmIGV2ZW50LmJ1dHRvbiA9PT0gMikgcmV0dXJuO1xuICAgIHRoaXMubm90aWZ5KG51bGwsIG51bGwpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBPdmVybGF5LFxuICBPdmVybGF5UmVmLFxuICBDb25uZWN0aW9uUG9zaXRpb25QYWlyLFxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1xuICBSZXVzZUNvbnRleHRFdmVudCxcbiAgUmV1c2VDb250ZXh0STE4bixcbiAgUmV1c2VDb250ZXh0Q2xvc2VFdmVudCxcbn0gZnJvbSAnLi9yZXVzZS10YWIuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBSZXVzZVRhYkNvbnRleHRNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9yZXVzZS10YWItY29udGV4dC1tZW51LmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZXVzZVRhYkNvbnRleHRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSByZWY6IE92ZXJsYXlSZWY7XG4gIGkxOG46IFJldXNlQ29udGV4dEkxOG47XG5cbiAgc2hvdzogU3ViamVjdDxSZXVzZUNvbnRleHRFdmVudD4gPSBuZXcgU3ViamVjdDxSZXVzZUNvbnRleHRFdmVudD4oKTtcbiAgY2xvc2U6IFN1YmplY3Q8UmV1c2VDb250ZXh0Q2xvc2VFdmVudD4gPSBuZXcgU3ViamVjdDxcbiAgICBSZXVzZUNvbnRleHRDbG9zZUV2ZW50XG4gID4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXkpIHt9XG5cbiAgcmVtb3ZlKCkge1xuICAgIGlmICghdGhpcy5yZWYpIHJldHVybjtcbiAgICB0aGlzLnJlZi5kZXRhY2goKTtcbiAgICB0aGlzLnJlZi5kaXNwb3NlKCk7XG4gICAgdGhpcy5yZWYgPSBudWxsO1xuICB9XG5cbiAgb3Blbihjb250ZXh0OiBSZXVzZUNvbnRleHRFdmVudCkge1xuICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgY29uc3QgeyBldmVudCwgaXRlbSB9ID0gY29udGV4dDtcbiAgICBjb25zdCBmYWtlRWxlbWVudCA9IG5ldyBFbGVtZW50UmVmKHtcbiAgICAgIGdldEJvdW5kaW5nQ2xpZW50UmVjdDogKCk6IENsaWVudFJlY3QgPT4gKHtcbiAgICAgICAgYm90dG9tOiBldmVudC5jbGllbnRZLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIGxlZnQ6IGV2ZW50LmNsaWVudFgsXG4gICAgICAgIHJpZ2h0OiBldmVudC5jbGllbnRYLFxuICAgICAgICB0b3A6IGV2ZW50LmNsaWVudFksXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgfSksXG4gICAgfSk7XG4gICAgY29uc3QgcG9zaXRpb25zID0gW1xuICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoXG4gICAgICAgIHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ2JvdHRvbScgfSxcbiAgICAgICAgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICd0b3AnIH0sXG4gICAgICApLFxuICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoXG4gICAgICAgIHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcgfSxcbiAgICAgICAgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdib3R0b20nIH0sXG4gICAgICApLFxuICAgIF07XG4gICAgY29uc3QgcG9zaXRpb25TdHJhdGVneSA9IHRoaXMub3ZlcmxheVxuICAgICAgLnBvc2l0aW9uKClcbiAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKGZha2VFbGVtZW50KVxuICAgICAgLndpdGhQb3NpdGlvbnMocG9zaXRpb25zKTtcbiAgICB0aGlzLnJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoe1xuICAgICAgcG9zaXRpb25TdHJhdGVneSxcbiAgICAgIHBhbmVsQ2xhc3M6ICdyZXVzZS10YWJfX2NtJyxcbiAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5jbG9zZSgpLFxuICAgIH0pO1xuICAgIGNvbnN0IGNvbXAgPSB0aGlzLnJlZi5hdHRhY2goXG4gICAgICBuZXcgQ29tcG9uZW50UG9ydGFsKFJldXNlVGFiQ29udGV4dE1lbnVDb21wb25lbnQpLFxuICAgICk7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBjb21wLmluc3RhbmNlO1xuICAgIGluc3RhbmNlLmkxOG4gPSB0aGlzLmkxOG47XG4gICAgaW5zdGFuY2UuaXRlbSA9IHsgLi4uaXRlbSB9O1xuICAgIGluc3RhbmNlLmV2ZW50ID0gZXZlbnQ7XG5cbiAgICBjb25zdCBzdWIkID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICAgIHN1YiQuYWRkKFxuICAgICAgaW5zdGFuY2UuY2xvc2Uuc3Vic2NyaWJlKChyZXM6IFJldXNlQ29udGV4dENsb3NlRXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5jbG9zZS5uZXh0KHJlcyk7XG4gICAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgICB9KSxcbiAgICApO1xuICAgIGNvbXAub25EZXN0cm95KCgpID0+IHN1YiQudW5zdWJzY3JpYmUoKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFJldXNlQ29udGV4dEkxOG4sIFJldXNlQ29udGV4dENsb3NlRXZlbnQgfSBmcm9tICcuL3JldXNlLXRhYi5pbnRlcmZhY2VzJztcbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dFNlcnZpY2UgfSBmcm9tICcuL3JldXNlLXRhYi1jb250ZXh0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyZXVzZS10YWItY29udGV4dCcsXG4gIHRlbXBsYXRlOiBgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFJldXNlVGFiQ29udGV4dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgc3ViJDogU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBpMThuKHZhbHVlOiBSZXVzZUNvbnRleHRJMThuKSB7XG4gICAgdGhpcy5zcnYuaTE4biA9IHZhbHVlO1xuICB9XG5cbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8UmV1c2VDb250ZXh0Q2xvc2VFdmVudD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNydjogUmV1c2VUYWJDb250ZXh0U2VydmljZSkge1xuICAgIHRoaXMuc3ViJC5hZGQoc3J2LnNob3cuc3Vic2NyaWJlKGNvbnRleHQgPT4gdGhpcy5zcnYub3Blbihjb250ZXh0KSkpO1xuICAgIHRoaXMuc3ViJC5hZGQoc3J2LmNsb3NlLnN1YnNjcmliZShyZXMgPT4gdGhpcy5jaGFuZ2UuZW1pdChyZXMpKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YiQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dFNlcnZpY2UgfSBmcm9tICcuL3JldXNlLXRhYi1jb250ZXh0LnNlcnZpY2UnO1xuaW1wb3J0IHsgUmV1c2VJdGVtIH0gZnJvbSAnLi9yZXVzZS10YWIuaW50ZXJmYWNlcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tyZXVzZS10YWItY29udGV4dC1tZW51XScsXG59KVxuZXhwb3J0IGNsYXNzIFJldXNlVGFiQ29udGV4dERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgncmV1c2UtdGFiLWNvbnRleHQtbWVudScpIGl0ZW06IFJldXNlSXRlbTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNydjogUmV1c2VUYWJDb250ZXh0U2VydmljZSkge31cblxuICBASG9zdExpc3RlbmVyKCdjb250ZXh0bWVudScsIFsnJGV2ZW50J10pXG4gIG9uQ29udGV4dE1lbnUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLnNydi5zaG93Lm5leHQoe1xuICAgICAgZXZlbnQsXG4gICAgICBpdGVtOiB0aGlzLml0ZW0sXG4gICAgfSk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSZXVzZVRhYkNvbnRleHRDb21wb25lbnQgfSBmcm9tICcuL3JldXNlLXRhYi1jb250ZXh0LmNvbXBvbmVudCc7XG5cbi8qKlxuICogw6XCpMKNw6fClMKow6XCjMK5w6nChcKNw6bCqMKhw6XCvMKPXG4gKi9cbmV4cG9ydCBlbnVtIFJldXNlVGFiTWF0Y2hNb2RlIHtcbiAgLyoqXG4gICAqIMOvwrzCiMOmwo7CqMOowo3CkMOvwrzCicOmwozCicOowo/CnMOlwo3ClSBgTWVudWAgw6nChcKNw6fCvcKuXG4gICAqXG4gICAqIMOlwo/Cr8OlwqTCjcOnwpTCqMOvwrzCmlxuICAgKiAtIGB7IHRleHQ6J0Rhc2hib2FyZCcgfWBcbiAgICogLSBgeyB0ZXh0OidEYXNoYm9hcmQnLCByZXVzZTogdHJ1ZSB9YFxuICAgKlxuICAgKiDDpMK4wo3DpcKPwq/DpcKkwo3Dp8KUwqjDr8K8wppcbiAgICogLSBgeyB0ZXh0OidEYXNoYm9hcmQnLCByZXVzZTogZmFsc2UgfWBcbiAgICovXG4gIE1lbnUsXG4gIC8qKlxuICAgKiDDpsKMwonDqMKPwpzDpcKNwpUgYE1lbnVgIMOlwrzCusOlwojCtsOpwoXCjcOnwr3CrlxuICAgKlxuICAgKiDDpcKPwq/DpcKkwo3Dp8KUwqjDr8K8wppcbiAgICogLSBgeyB0ZXh0OidEYXNoYm9hcmQnLCByZXVzZTogdHJ1ZSB9YFxuICAgKlxuICAgKiDDpMK4wo3DpcKPwq/DpcKkwo3Dp8KUwqjDr8K8wppcbiAgICogLSBgeyB0ZXh0OidEYXNoYm9hcmQnIH1gXG4gICAqIC0gYHsgdGV4dDonRGFzaGJvYXJkJywgcmV1c2U6IGZhbHNlIH1gXG4gICAqL1xuICBNZW51Rm9yY2UsXG4gIC8qKlxuICAgKiDDpcKvwrnDpsKJwoDDpsKcwonDqMK3wq/Dp8KUwrHDpsKcwonDpsKVwojDr8K8wozDpcKPwq/DpMK7wqXDqcKFwo3DpcKQwoggYGV4Y2x1ZGVzYCDDqMK/wofDpsK7wqTDpsKXwqDDqcKhwrvDpcKkwo3Dp8KUwqjDqMK3wq/Dp8KUwrFcbiAgICovXG4gIFVSTCxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXVzZVRpdGxlIHtcbiAgdGV4dDogc3RyaW5nO1xuICBpMThuPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlVGFiQ2FjaGVkIHtcbiAgdGl0bGU6IFJldXNlVGl0bGU7XG5cbiAgdXJsOiBzdHJpbmc7XG5cbiAgLyoqIMOmwpjCr8OlwpDCpsOlwoXCgcOowq7CuMOlwoXCs8OpwpfCrcOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmB0cnVlYCAqL1xuICBjbG9zYWJsZT86IGJvb2xlYW47XG5cbiAgX3NuYXBzaG90OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90O1xuXG4gIF9oYW5kbGU6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXVzZVRhYk5vdGlmeSB7XG4gIC8qKiDDpMK6wovDpMK7wrbDp8KxwrvDpcKewosgKi9cbiAgYWN0aXZlOiBzdHJpbmc7XG5cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlSXRlbSB7XG4gIHVybDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBjbG9zYWJsZTogYm9vbGVhbjtcbiAgaW5kZXg6IG51bWJlcjtcbiAgYWN0aXZlOiBib29sZWFuO1xuICBsYXN0OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlQ29udGV4dEV2ZW50IHtcbiAgZXZlbnQ6IE1vdXNlRXZlbnQ7XG4gIGl0ZW06IFJldXNlSXRlbTtcbiAgY29tcD86IFJldXNlVGFiQ29udGV4dENvbXBvbmVudDtcbn1cblxuZXhwb3J0IHR5cGUgQ2xvc2VUeXBlID0gJ2Nsb3NlJyB8ICdjbG9zZU90aGVyJyB8ICdjbG9zZVJpZ2h0JyB8ICdjbGVhcicgfCBudWxsO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlQ29udGV4dENsb3NlRXZlbnQge1xuICB0eXBlOiBDbG9zZVR5cGU7XG4gIGl0ZW06IFJldXNlSXRlbTtcbiAgaW5jbHVkZU5vbkNsb3NlYWJsZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXVzZUNvbnRleHRJMThuIHtcbiAgY2xvc2U/OiBzdHJpbmc7XG4gIGNsb3NlT3RoZXI/OiBzdHJpbmc7XG4gIGNsb3NlUmlnaHQ/OiBzdHJpbmc7XG4gIGNsZWFyPzogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgQWN0aXZhdGVkUm91dGUsXG4gIFJvdXRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTWVudVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHtcbiAgUmV1c2VUYWJDYWNoZWQsXG4gIFJldXNlVGFiTWF0Y2hNb2RlLFxuICBSZXVzZVRhYk5vdGlmeSxcbiAgUmV1c2VUaXRsZSxcbn0gZnJvbSAnLi9yZXVzZS10YWIuaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogw6jCt8Kvw6fClMKxw6XCpMKNw6fClMKow6fCscK7w6/CvMKMw6bCj8KQw6TCvsKbw6XCpMKNw6fClMKow6bCicKAw6nCnMKAw6jCpsKBw6TCuMKAw6TCusKbw6XCn8K6w6bCnMKsw6bCjsKlw6XCj8KjXG4gKlxuICogKirDpsKzwqjDr8K8wpoqKiDDpsKJwoDDpsKcwonDp8K8wpPDpcKtwpjDpsKVwrDDpsKNwq7DpsKdwqXDpsK6wpDDpMK6wo7DqMK3wq/Dp8KUwrHDp8KmwrvDpcK8woDDpcKQwo7DpsKJwo3DpMK8wprDpMK6wqfDp8KUwp9cbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBSZXVzZVRhYlNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9tYXggPSAxMDtcbiAgcHJpdmF0ZSBfZGVidWcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbW9kZSA9IFJldXNlVGFiTWF0Y2hNb2RlLk1lbnU7XG4gIHByaXZhdGUgX2V4Y2x1ZGVzOiBSZWdFeHBbXSA9IFtdO1xuICBwcml2YXRlIF9jYWNoZWRDaGFuZ2U6IEJlaGF2aW9yU3ViamVjdDxcbiAgICBSZXVzZVRhYk5vdGlmeVxuICA+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxSZXVzZVRhYk5vdGlmeT4obnVsbCk7XG4gIHByaXZhdGUgX2NhY2hlZDogUmV1c2VUYWJDYWNoZWRbXSA9IFtdO1xuICBwcml2YXRlIF90aXRsZUNhY2hlZDogeyBbdXJsOiBzdHJpbmddOiBSZXVzZVRpdGxlIH0gPSB7fTtcbiAgcHJpdmF0ZSBfY2xvc2FibGVDYWNoZWQ6IHsgW3VybDogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XG4gIHByaXZhdGUgcmVtb3ZlVXJsQnVmZmVyOiBzdHJpbmc7XG5cbiAgLy8gcmVnaW9uOiBwdWJsaWNcblxuICAvKiogw6XCvcKTw6XCicKNw6jCt8Kvw6fClMKxw6XCnMKww6XCncKAICovXG4gIGdldCBjdXJVcmwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VXJsKHRoaXMuaW5qZWN0b3IuZ2V0KEFjdGl2YXRlZFJvdXRlKS5zbmFwc2hvdCk7XG4gIH1cblxuICAvKiogw6XChcKBw6jCrsK4w6bCnMKAw6XCpMKaw6XCpMKNw6fClMKow6XCpMKaw6XCsMKRw6TCuMKqw6nCocK1w6nCncKiw6/CvMKMw6XCj8KWw6XCgMK8w6jCjMKDw6XCm8K0IGAyLTEwMGAgKi9cbiAgc2V0IG1heCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4ID0gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIDIpLCAxMDApO1xuICAgIGZvciAobGV0IGkgPSB0aGlzLl9jYWNoZWQubGVuZ3RoOyBpID4gdGhpcy5fbWF4OyBpLS0pIHtcbiAgICAgIHRoaXMuX2NhY2hlZC5wb3AoKTtcbiAgICB9XG4gIH1cbiAgLyoqIMOowq7CvsOnwr3CrsOlwozCucOpwoXCjcOmwqjCocOlwrzCjyAqL1xuICBzZXQgbW9kZSh2YWx1ZTogUmV1c2VUYWJNYXRjaE1vZGUpIHtcbiAgICB0aGlzLl9tb2RlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGU7XG4gIH1cbiAgLyoqIMOowq7CvsOnwr3CrkRlYnVnw6bCqMKhw6XCvMKPICovXG4gIHNldCBkZWJ1Zyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2RlYnVnID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGRlYnVnKCkge1xuICAgIHJldHVybiB0aGlzLl9kZWJ1ZztcbiAgfVxuICAvKiogw6bCjsKSw6nCmcKkw6jCp8KEw6XCiMKZw6/CvMKMw6nCmcKQIGBtb2RlPVVSTGAgKi9cbiAgc2V0IGV4Y2x1ZGVzKHZhbHVlczogUmVnRXhwW10pIHtcbiAgICBpZiAoIXZhbHVlcykgcmV0dXJuO1xuICAgIHRoaXMuX2V4Y2x1ZGVzID0gdmFsdWVzO1xuICB9XG4gIGdldCBleGNsdWRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fZXhjbHVkZXM7XG4gIH1cbiAgLyoqIMOowo7Ct8Olwo/ClsOlwrfCssOnwrzCk8Olwq3CmMOnwprChMOowrfCr8OnwpTCsSAqL1xuICBnZXQgaXRlbXMoKTogUmV1c2VUYWJDYWNoZWRbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZDtcbiAgfVxuICAvKiogw6jCjsK3w6XCj8KWw6XCvcKTw6XCicKNw6fCvMKTw6XCrcKYw6fCmsKEw6jCt8Kvw6fClMKxw6bCgMK7w6bClcKwICovXG4gIGdldCBjb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVkLmxlbmd0aDtcbiAgfVxuICAvKiogw6jCrsKiw6nCmMKFw6fCvMKTw6XCrcKYw6XCj8KYw6bCm8K0w6nCgMKaw6fCn8KlICovXG4gIGdldCBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxSZXVzZVRhYk5vdGlmeT4ge1xuICAgIHJldHVybiB0aGlzLl9jYWNoZWRDaGFuZ2UuYXNPYnNlcnZhYmxlKCk7IC8vIC5waXBlKGZpbHRlcih3ID0+IHcgIT09IG51bGwpKTtcbiAgfVxuICAvKiogw6jCh8Kqw6XCrsKaw6TCucKJw6XCvcKTw6XCicKNw6bCoMKHw6nCosKYICovXG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgUmV1c2VUaXRsZSkge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuY3VyVXJsO1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB2YWx1ZSA9IHsgdGV4dDogdmFsdWUgfTtcbiAgICB0aGlzLl90aXRsZUNhY2hlZFt1cmxdID0gdmFsdWU7XG4gICAgdGhpcy5kaSgndXBkYXRlIGN1cnJlbnQgdGFnIHRpdGxlOiAnLCB2YWx1ZSk7XG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoe1xuICAgICAgYWN0aXZlOiAndGl0bGUnLFxuICAgICAgdGl0bGU6IHZhbHVlLFxuICAgICAgbGlzdDogdGhpcy5fY2FjaGVkLFxuICAgIH0pO1xuICB9XG4gIC8qKiDDqMKOwrfDpcKPwpbDpsKMwofDpcKuwprDqMK3wq/DpcK+woTDp8K8wpPDpcKtwpjDpsKJwoDDpcKcwqjDpMK9wo3Dp8K9wq7Dr8K8woxgLTFgIMOowqHCqMOnwqTCusOmwpfCoMOnwrzCk8Olwq3CmCAqL1xuICBpbmRleCh1cmw6IHN0cmluZyk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZC5maW5kSW5kZXgodyA9PiB3LnVybCA9PT0gdXJsKTtcbiAgfVxuICAvKiogw6jCjsK3w6XCj8KWw6bCjMKHw6XCrsKaw6jCt8Kvw6XCvsKEw6fCvMKTw6XCrcKYw6bCmMKvw6XCkMKmw6XCrcKYw6XCnMKoICovXG4gIGV4aXN0cyh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmluZGV4KHVybCkgIT09IC0xO1xuICB9XG4gIC8qKiDDqMKOwrfDpcKPwpbDpsKMwofDpcKuwprDqMK3wq/DpcK+woTDp8K8wpPDpcKtwpggKi9cbiAgZ2V0KHVybDogc3RyaW5nKTogUmV1c2VUYWJDYWNoZWQge1xuICAgIHJldHVybiB1cmwgPyB0aGlzLl9jYWNoZWQuZmluZCh3ID0+IHcudXJsID09PSB1cmwpIHx8IG51bGwgOiBudWxsO1xuICB9XG4gIHByaXZhdGUgcmVtb3ZlKHVybDogc3RyaW5nIHwgbnVtYmVyLCBpbmNsdWRlTm9uQ2xvc2VhYmxlOiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaWR4ID0gdHlwZW9mIHVybCA9PT0gJ3N0cmluZycgPyB0aGlzLmluZGV4KHVybCkgOiB1cmw7XG4gICAgY29uc3QgaXRlbSA9IGlkeCAhPT0gLTEgPyB0aGlzLl9jYWNoZWRbaWR4XSA6IG51bGw7XG4gICAgaWYgKCFpdGVtIHx8ICghaW5jbHVkZU5vbkNsb3NlYWJsZSAmJiAhaXRlbS5jbG9zYWJsZSkpIHJldHVybiBmYWxzZTtcblxuICAgIHRoaXMuZGVzdHJveShpdGVtLl9oYW5kbGUpO1xuXG4gICAgdGhpcy5fY2FjaGVkLnNwbGljZShpZHgsIDEpO1xuICAgIGRlbGV0ZSB0aGlzLl90aXRsZUNhY2hlZFt1cmxdO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiDDpsKgwrnDpsKNwq5VUkzDp8KnwrvDqcKZwqTDpsKgwofDp8Ktwr5cbiAgICpcbiAgICogQHBhcmFtIFtpbmNsdWRlTm9uQ2xvc2VhYmxlPWZhbHNlXSDDpsKYwq/DpcKQwqbDpcK8wrrDpcKIwrbDpcKMwoXDpcKQwqvDpMK4wo3DpcKPwq/DpcKFwrPDqcKXwq1cbiAgICovXG4gIGNsb3NlKHVybDogc3RyaW5nLCBpbmNsdWRlTm9uQ2xvc2VhYmxlID0gZmFsc2UpIHtcbiAgICB0aGlzLnJlbW92ZVVybEJ1ZmZlciA9IHVybDtcblxuICAgIHRoaXMucmVtb3ZlKHVybCwgaW5jbHVkZU5vbkNsb3NlYWJsZSk7XG5cbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7IGFjdGl2ZTogJ2Nsb3NlJywgdXJsLCBsaXN0OiB0aGlzLl9jYWNoZWQgfSk7XG5cbiAgICB0aGlzLmRpKCdjbG9zZSB0YWcnLCB1cmwpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiDDpsK4woXDqcKZwqTDpcKPwrPDqMK+wrlcbiAgICpcbiAgICogQHBhcmFtIFtpbmNsdWRlTm9uQ2xvc2VhYmxlPWZhbHNlXSDDpsKYwq/DpcKQwqbDpcK8wrrDpcKIwrbDpcKMwoXDpcKQwqvDpMK4wo3DpcKPwq/DpcKFwrPDqcKXwq1cbiAgICovXG4gIGNsb3NlUmlnaHQodXJsOiBzdHJpbmcsIGluY2x1ZGVOb25DbG9zZWFibGUgPSBmYWxzZSkge1xuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5pbmRleCh1cmwpO1xuICAgIGZvciAobGV0IGkgPSB0aGlzLmNvdW50IC0gMTsgaSA+IHN0YXJ0OyBpLS0pIHtcbiAgICAgIHRoaXMucmVtb3ZlKGksIGluY2x1ZGVOb25DbG9zZWFibGUpO1xuICAgIH1cblxuICAgIHRoaXMucmVtb3ZlVXJsQnVmZmVyID0gbnVsbDtcblxuICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHsgYWN0aXZlOiAnY2xvc2VSaWdodCcsIHVybCwgbGlzdDogdGhpcy5fY2FjaGVkIH0pO1xuXG4gICAgdGhpcy5kaSgnY2xvc2UgcmlnaHQgdGFnZXMnLCB1cmwpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiDDpsK4woXDqcKZwqTDpsKJwoDDpsKcwonDp8K8wpPDpcKtwphcbiAgICpcbiAgICogQHBhcmFtIFtpbmNsdWRlTm9uQ2xvc2VhYmxlPWZhbHNlXSDDpsKYwq/DpcKQwqbDpcK8wrrDpcKIwrbDpcKMwoXDpcKQwqvDpMK4wo3DpcKPwq/DpcKFwrPDqcKXwq1cbiAgICovXG4gIGNsZWFyKGluY2x1ZGVOb25DbG9zZWFibGUgPSBmYWxzZSkge1xuICAgIHRoaXMuX2NhY2hlZC5mb3JFYWNoKHcgPT4ge1xuICAgICAgaWYgKCFpbmNsdWRlTm9uQ2xvc2VhYmxlICYmIHcuY2xvc2FibGUpIHRoaXMuZGVzdHJveSh3Ll9oYW5kbGUpO1xuICAgIH0pO1xuICAgIHRoaXMuX2NhY2hlZCA9IHRoaXMuX2NhY2hlZC5maWx0ZXIoXG4gICAgICB3ID0+ICFpbmNsdWRlTm9uQ2xvc2VhYmxlICYmICF3LmNsb3NhYmxlLFxuICAgICk7XG5cbiAgICB0aGlzLnJlbW92ZVVybEJ1ZmZlciA9IG51bGw7XG5cbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7IGFjdGl2ZTogJ2NsZWFyJywgbGlzdDogdGhpcy5fY2FjaGVkIH0pO1xuXG4gICAgdGhpcy5kaSgnY2xlYXIgYWxsIGNhdGNoJyk7XG4gIH1cbiAgLyoqXG4gICAqIMOnwqfCu8OlworCqMOnwrzCk8Olwq3CmMOmwpXCsMOmwo3CrlxuICAgKiBAcGFyYW0gdXJsIMOowqbCgcOnwqfCu8OlworCqMOnwprChFVSTMOlwpzCsMOlwp3CgFxuICAgKiBAcGFyYW0gcG9zaXRpb24gw6bClsKww6TCvcKNw6fCvcKuw6/CvMKMw6TCuMKLw6bCoMKHw6TCu8KOIGAwYCDDpcK8woDDpcKnwotcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgXG4gICAqIC8vIHNvdXJjZVxuICAgKiBbICcvYS8xJywgJy9hLzInLCAnL2EvMycsICcvYS80JywgJy9hLzUnIF1cbiAgICogbW92ZSgnL2EvMScsIDIpO1xuICAgKiAvLyBvdXRwdXRcbiAgICogWyAnL2EvMicsICcvYS8zJywgJy9hLzEnLCAnL2EvNCcsICcvYS81JyBdXG4gICAqIG1vdmUoJy9hLzEnLCAtMSk7XG4gICAqIC8vIG91dHB1dFxuICAgKiBbICcvYS8yJywgJy9hLzMnLCAnL2EvNCcsICcvYS81JywgJy9hLzEnIF1cbiAgICogYGBgXG4gICAqL1xuICBtb3ZlKHVybDogc3RyaW5nLCBwb3NpdGlvbjogbnVtYmVyKSB7XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9jYWNoZWQuZmluZEluZGV4KHcgPT4gdy51cmwgPT09IHVybCk7XG4gICAgaWYgKHN0YXJ0ID09PSAtMSkgcmV0dXJuO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9jYWNoZWQuc2xpY2UoKTtcbiAgICBkYXRhLnNwbGljZShcbiAgICAgIHBvc2l0aW9uIDwgMCA/IGRhdGEubGVuZ3RoICsgcG9zaXRpb24gOiBwb3NpdGlvbixcbiAgICAgIDAsXG4gICAgICBkYXRhLnNwbGljZShzdGFydCwgMSlbMF0sXG4gICAgKTtcbiAgICB0aGlzLl9jYWNoZWQgPSBkYXRhO1xuICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHtcbiAgICAgIGFjdGl2ZTogJ21vdmUnLFxuICAgICAgdXJsLFxuICAgICAgcG9zaXRpb24sXG4gICAgICBsaXN0OiB0aGlzLl9jYWNoZWQsXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIMOlwrzCusOlwojCtsOlwoXCs8OpwpfCrcOlwr3Ck8OlwonCjcOowrfCr8OnwpTCscOvwrzCiMOlwozChcOlwpDCq8OkwrjCjcOlwo/Cr8OlwoXCs8OpwpfCrcOnworCtsOmwoDCgcOvwrzCicOvwrzCjMOlwrnCtsOpwofCjcOmwpbCsMOlwq/CvMOowojCqsOowofCsyBgbmV3VXJsYCDDqMK3wq/Dp8KUwrFcbiAgICovXG4gIHJlcGxhY2UobmV3VXJsOiBzdHJpbmcpIHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmN1clVybDtcbiAgICBpZiAodGhpcy5leGlzdHModXJsKSkge1xuICAgICAgdGhpcy5jbG9zZSh1cmwsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZVVybEJ1ZmZlciA9IHVybDtcbiAgICB9XG4gICAgdGhpcy5pbmplY3Rvci5nZXQoUm91dGVyKS5uYXZpZ2F0ZUJ5VXJsKG5ld1VybCk7XG4gIH1cbiAgLyoqXG4gICAqIMOowo7Ct8Olwo/ClsOmwqDCh8OpwqLCmMOvwrzCjMOpwqHCusOlwrrCj8OlwqbCgsOkwrjCi8OvwrzCmlxuICAgKlxuICAgKiAxLiDDp8K7woTDpMK7wrbDpcKGwoXDpMK9wr/Dp8KUwqggYFJldXNlVGFiU2VydmljZS50aXRsZSA9ICduZXcgdGl0bGUnYCDDqcKHwo3DpsKWwrDDpsKMwofDpcKuwprDpsKWwofDpsKcwqxcbiAgICogMi4gw6jCt8Kvw6fClMKxw6nChcKNw6fCvcKuw6TCuMKtIGRhdGEgw6XCscKew6bCgMKnw6TCuMKtw6XCjMKFw6XCkMKrIHRpdGxlSTE4biA+IHRpdGxlXG4gICAqIDMuIMOowo/CnMOlwo3ClcOmwpXCsMOmwo3CrsOkwrjCrSB0ZXh0IMOlwrHCnsOmwoDCp1xuICAgKlxuICAgKiBAcGFyYW0gdXJsIMOmwozCh8Olwq7CmlVSTFxuICAgKiBAcGFyYW0gcm91dGUgw6bCjMKHw6XCrsKaw6jCt8Kvw6fClMKxw6XCv8Krw6fChcKnXG4gICAqL1xuICBnZXRUaXRsZSh1cmw6IHN0cmluZywgcm91dGU/OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogUmV1c2VUaXRsZSB7XG4gICAgaWYgKHRoaXMuX3RpdGxlQ2FjaGVkW3VybF0pIHJldHVybiB0aGlzLl90aXRsZUNhY2hlZFt1cmxdO1xuXG4gICAgaWYgKHJvdXRlICYmIHJvdXRlLmRhdGEgJiYgKHJvdXRlLmRhdGEudGl0bGVJMThuIHx8IHJvdXRlLmRhdGEudGl0bGUpKVxuICAgICAgcmV0dXJuIDxSZXVzZVRpdGxlPntcbiAgICAgICAgdGV4dDogcm91dGUuZGF0YS50aXRsZSxcbiAgICAgICAgaTE4bjogcm91dGUuZGF0YS50aXRsZUkxOG4sXG4gICAgICB9O1xuXG4gICAgY29uc3QgbWVudSA9XG4gICAgICB0aGlzLm1vZGUgIT09IFJldXNlVGFiTWF0Y2hNb2RlLlVSTCA/IHRoaXMuZ2V0TWVudSh1cmwpIDogbnVsbDtcbiAgICByZXR1cm4gbWVudSA/IHsgdGV4dDogbWVudS50ZXh0LCBpMThuOiBtZW51LmkxOG4gfSA6IHsgdGV4dDogdXJsIH07XG4gIH1cblxuICAvKipcbiAgICogw6bCuMKFw6nCmcKkw6bCoMKHw6nCosKYw6fCvMKTw6XCrcKYXG4gICAqL1xuICBjbGVhclRpdGxlQ2FjaGVkKCkge1xuICAgIHRoaXMuX3RpdGxlQ2FjaGVkID0ge307XG4gIH1cbiAgLyoqIMOowofCqsOlwq7CmsOkwrnCicOlwr3Ck8OlwonCjSBgY2xvc2FibGVgIMOnworCtsOmwoDCgSAqL1xuICBzZXQgY2xvc2FibGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmN1clVybDtcbiAgICB0aGlzLl9jbG9zYWJsZUNhY2hlZFt1cmxdID0gdmFsdWU7XG4gICAgdGhpcy5kaSgndXBkYXRlIGN1cnJlbnQgdGFnIGNsb3NhYmxlOiAnLCB2YWx1ZSk7XG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoe1xuICAgICAgYWN0aXZlOiAnY2xvc2FibGUnLFxuICAgICAgY2xvc2FibGU6IHZhbHVlLFxuICAgICAgbGlzdDogdGhpcy5fY2FjaGVkLFxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiDDqMKOwrfDpcKPwpYgYGNsb3NhYmxlYCDDp8KKwrbDpsKAwoHDr8K8wozDqcKhwrrDpcK6wo/DpcKmwoLDpMK4wovDr8K8wppcbiAgICpcbiAgICogMS4gw6fCu8KEw6TCu8K2w6XChsKFw6TCvcK/w6fClMKoIGBSZXVzZVRhYlNlcnZpY2UuY2xvc2FibGUgPSB0cnVlYCDDqcKHwo3DpsKWwrDDpsKMwofDpcKuwpogYGNsb3NhYmxlYCDDp8KKwrbDpsKAwoFcbiAgICogMi4gw6jCt8Kvw6fClMKxw6nChcKNw6fCvcKuw6TCuMKtIGRhdGEgw6XCscKew6bCgMKnw6TCuMKtw6XCjMKFw6XCkMKrIGByZXVzZUNsb3NhYmxlYFxuICAgKiAzLiDDqMKPwpzDpcKNwpXDpsKVwrDDpsKNwq7DpMK4wq0gYHJldXNlQ2xvc2FibGVgIMOlwrHCnsOmwoDCp1xuICAgKlxuICAgKiBAcGFyYW0gdXJsIMOmwozCh8Olwq7CmlVSTFxuICAgKiBAcGFyYW0gcm91dGUgw6bCjMKHw6XCrsKaw6jCt8Kvw6fClMKxw6XCv8Krw6fChcKnXG4gICAqL1xuICBnZXRDbG9zYWJsZSh1cmw6IHN0cmluZywgcm91dGU/OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLl9jbG9zYWJsZUNhY2hlZFt1cmxdICE9PSAndW5kZWZpbmVkJylcbiAgICAgIHJldHVybiB0aGlzLl9jbG9zYWJsZUNhY2hlZFt1cmxdO1xuXG4gICAgaWYgKHJvdXRlICYmIHJvdXRlLmRhdGEgJiYgdHlwZW9mIHJvdXRlLmRhdGEucmV1c2VDbG9zYWJsZSA9PT0gJ2Jvb2xlYW4nKVxuICAgICAgcmV0dXJuIHJvdXRlLmRhdGEucmV1c2VDbG9zYWJsZTtcblxuICAgIGNvbnN0IG1lbnUgPVxuICAgICAgdGhpcy5tb2RlICE9PSBSZXVzZVRhYk1hdGNoTW9kZS5VUkwgPyB0aGlzLmdldE1lbnUodXJsKSA6IG51bGw7XG4gICAgaWYgKG1lbnUgJiYgdHlwZW9mIG1lbnUucmV1c2VDbG9zYWJsZSA9PT0gJ2Jvb2xlYW4nKVxuICAgICAgcmV0dXJuIG1lbnUucmV1c2VDbG9zYWJsZTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiDDpsK4woXDp8KpwrogYGNsb3NhYmxlYCDDp8K8wpPDpcKtwphcbiAgICovXG4gIGNsZWFyQ2xvc2FibGVDYWNoZWQoKSB7XG4gICAgdGhpcy5fY2xvc2FibGVDYWNoZWQgPSB7fTtcbiAgfVxuICBnZXRUcnV0aFJvdXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KSB7XG4gICAgbGV0IG5leHQgPSByb3V0ZTtcbiAgICB3aGlsZSAobmV4dC5maXJzdENoaWxkKSBuZXh0ID0gbmV4dC5maXJzdENoaWxkO1xuICAgIHJldHVybiBuZXh0O1xuICB9XG4gIC8qKlxuICAgKiDDpsKgwrnDpsKNwq7DpcK/wqvDp8KFwqfDqMKOwrfDpcKPwpZVUkzDpcKcwrDDpcKdwoBcbiAgICovXG4gIGdldFVybChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IHN0cmluZyB7XG4gICAgbGV0IG5leHQgPSB0aGlzLmdldFRydXRoUm91dGUocm91dGUpO1xuICAgIGNvbnN0IHNlZ21lbnRzID0gW107XG4gICAgd2hpbGUgKG5leHQpIHtcbiAgICAgIHNlZ21lbnRzLnB1c2gobmV4dC51cmwuam9pbignLycpKTtcbiAgICAgIG5leHQgPSBuZXh0LnBhcmVudDtcbiAgICB9XG4gICAgY29uc3QgdXJsID1cbiAgICAgICcvJyArXG4gICAgICBzZWdtZW50c1xuICAgICAgICAuZmlsdGVyKGkgPT4gaSlcbiAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAuam9pbignLycpO1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgLyoqXG4gICAqIMOmwqPCgMOmwp/CpcOlwr/Cq8OnwoXCp8OmwpjCr8OlwpDCpsOlwoXCgcOowq7CuMOowqLCq8OlwqTCjcOnwpTCqFxuICAgKi9cbiAgY2FuKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRVcmwocm91dGUpO1xuICAgIGlmICh1cmwgPT09IHRoaXMucmVtb3ZlVXJsQnVmZmVyKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAocm91dGUuZGF0YSAmJiB0eXBlb2Ygcm91dGUuZGF0YS5yZXVzZSA9PT0gJ2Jvb2xlYW4nKVxuICAgICAgcmV0dXJuIHJvdXRlLmRhdGEucmV1c2U7XG5cbiAgICBpZiAodGhpcy5tb2RlICE9PSBSZXVzZVRhYk1hdGNoTW9kZS5VUkwpIHtcbiAgICAgIGNvbnN0IG1lbnUgPSB0aGlzLmdldE1lbnUodXJsKTtcbiAgICAgIGlmICghbWVudSkgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKHRoaXMubW9kZSA9PT0gUmV1c2VUYWJNYXRjaE1vZGUuTWVudSkge1xuICAgICAgICBpZiAobWVudS5yZXVzZSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghbWVudS5yZXVzZSB8fCBtZW51LnJldXNlICE9PSB0cnVlKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2V4Y2x1ZGVzLmZpbmRJbmRleChyID0+IHIudGVzdCh1cmwpKSA9PT0gLTE7XG4gIH1cbiAgLyoqXG4gICAqIMOlwojCt8OmwpbCsMOvwrzCjMOowqfCpsOlwo/CkcOkwrjCgMOkwrjCqiByZWZyZXNoIMOnwrHCu8Olwp7Ci8OkwrrCi8OkwrvCtlxuICAgKi9cbiAgcmVmcmVzaChkYXRhPzogYW55KSB7XG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoeyBhY3RpdmU6ICdyZWZyZXNoJywgZGF0YSB9KTtcbiAgfVxuICAvLyBlbmRyZWdpb25cblxuICAvLyByZWdpb246IHByaXZhdGVzXG5cbiAgcHJpdmF0ZSBkZXN0cm95KF9oYW5kbGU6IGFueSkge1xuICAgIGlmIChfaGFuZGxlICYmIF9oYW5kbGUuY29tcG9uZW50UmVmICYmIF9oYW5kbGUuY29tcG9uZW50UmVmLmRlc3Ryb3kpXG4gICAgICBfaGFuZGxlLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gIH1cblxuICBwcml2YXRlIGRpKC4uLmFyZ3MpIHtcbiAgICBpZiAoIXRoaXMuZGVidWcpIHJldHVybjtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybiguLi5hcmdzKTtcbiAgfVxuXG4gIC8vIGVuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLCBwcml2YXRlIG1lbnVTZXJ2aWNlOiBNZW51U2VydmljZSkge31cblxuICBwcml2YXRlIGdldE1lbnUodXJsOiBzdHJpbmcpIHtcbiAgICBjb25zdCBtZW51cyA9IHRoaXMubWVudVNlcnZpY2UuZ2V0UGF0aEJ5VXJsKHVybCk7XG4gICAgaWYgKCFtZW51cyB8fCBtZW51cy5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuICAgIHJldHVybiBtZW51cy5wb3AoKTtcbiAgfVxuXG4gIHByaXZhdGUgcnVuSG9vayhtZXRob2Q6IHN0cmluZywgdXJsOiBzdHJpbmcsIGNvbXA6IGFueSkge1xuICAgIGlmIChjb21wLmluc3RhbmNlICYmIHR5cGVvZiBjb21wLmluc3RhbmNlW21ldGhvZF0gPT09ICdmdW5jdGlvbicpXG4gICAgICBjb21wLmluc3RhbmNlW21ldGhvZF0oKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFzSW5WYWxpZFJvdXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICFyb3V0ZS5yb3V0ZUNvbmZpZyB8fFxuICAgICAgcm91dGUucm91dGVDb25maWcubG9hZENoaWxkcmVuIHx8XG4gICAgICByb3V0ZS5yb3V0ZUNvbmZpZy5jaGlsZHJlblxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogw6XChsKzw6XCrsKaw6bCmMKvw6XCkMKmw6XChcKBw6jCrsK4w6jCt8Kvw6fClMKxw6XCpMKNw6fClMKow6/CvMKMw6jCi8KlIGB0cnVlYCDDpMK8wprDqMKnwqbDpcKPwpEgYHN0b3JlYFxuICAgKi9cbiAgc2hvdWxkRGV0YWNoKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaGFzSW5WYWxpZFJvdXRlKHJvdXRlKSkgcmV0dXJuIGZhbHNlO1xuICAgIHRoaXMuZGkoJyNzaG91bGREZXRhY2gnLCB0aGlzLmNhbihyb3V0ZSksIHRoaXMuZ2V0VXJsKHJvdXRlKSk7XG4gICAgcmV0dXJuIHRoaXMuY2FuKHJvdXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpcKtwpjDpcKCwqhcbiAgICovXG4gIHN0b3JlKF9zbmFwc2hvdDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgX2hhbmRsZTogYW55KSB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRVcmwoX3NuYXBzaG90KTtcbiAgICBjb25zdCBpZHggPSB0aGlzLmluZGV4KHVybCk7XG5cbiAgICBjb25zdCBpdGVtOiBSZXVzZVRhYkNhY2hlZCA9IHtcbiAgICAgIHRpdGxlOiB0aGlzLmdldFRpdGxlKHVybCwgX3NuYXBzaG90KSxcbiAgICAgIGNsb3NhYmxlOiB0aGlzLmdldENsb3NhYmxlKHVybCwgX3NuYXBzaG90KSxcbiAgICAgIHVybCxcbiAgICAgIF9zbmFwc2hvdCxcbiAgICAgIF9oYW5kbGUsXG4gICAgfTtcbiAgICBpZiAoaWR4ID09PSAtMSkge1xuICAgICAgdGhpcy5fY2FjaGVkLnB1c2goaXRlbSk7XG4gICAgICBpZiAodGhpcy5jb3VudCA+IHRoaXMuX21heCkgdGhpcy5fY2FjaGVkLnNoaWZ0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NhY2hlZFtpZHhdID0gaXRlbTtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVVcmxCdWZmZXIgPSBudWxsO1xuXG4gICAgdGhpcy5kaSgnI3N0b3JlJywgaWR4ID09PSAtMSA/ICdbbmV3XScgOiAnW292ZXJyaWRlXScsIHVybCk7XG5cbiAgICBpZiAoX2hhbmRsZSAmJiBfaGFuZGxlLmNvbXBvbmVudFJlZikge1xuICAgICAgdGhpcy5ydW5Ib29rKCdfb25SZXVzZURlc3Ryb3knLCB1cmwsIF9oYW5kbGUuY29tcG9uZW50UmVmKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7IGFjdGl2ZTogJ2FkZCcsIGl0ZW0sIGxpc3Q6IHRoaXMuX2NhY2hlZCB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpcKGwrPDpcKuwprDpsKYwq/DpcKQwqbDpcKFwoHDqMKuwrjDpcK6wpTDp8KUwqjDp8K8wpPDpcKtwpjDpsKVwrDDpsKNwq5cbiAgICovXG4gIHNob3VsZEF0dGFjaChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmhhc0luVmFsaWRSb3V0ZShyb3V0ZSkpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVybChyb3V0ZSk7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0KHVybCk7XG4gICAgY29uc3QgcmV0ID0gISEoZGF0YSAmJiBkYXRhLl9oYW5kbGUpO1xuICAgIHRoaXMuZGkoJyNzaG91bGRBdHRhY2gnLCByZXQsIHVybCk7XG4gICAgaWYgKHJldCAmJiBkYXRhLl9oYW5kbGUuY29tcG9uZW50UmVmKSB7XG4gICAgICB0aGlzLnJ1bkhvb2soJ19vblJldXNlSW5pdCcsIHVybCwgZGF0YS5faGFuZGxlLmNvbXBvbmVudFJlZik7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICogw6bCj8KQw6XCj8KWw6XCpMKNw6fClMKow6bClcKww6bCjcKuXG4gICAqL1xuICByZXRyaWV2ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IHt9IHtcbiAgICBpZiAodGhpcy5oYXNJblZhbGlkUm91dGUocm91dGUpKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVybChyb3V0ZSk7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0KHVybCk7XG4gICAgY29uc3QgcmV0ID0gKGRhdGEgJiYgZGF0YS5faGFuZGxlKSB8fCBudWxsO1xuICAgIHRoaXMuZGkoJyNyZXRyaWV2ZScsIHVybCwgcmV0KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIMOlwobCs8Olwq7CmsOmwpjCr8OlwpDCpsOlwrrClMOowq/CpcOowr/Cm8OowqHCjMOlwqTCjcOnwpTCqMOowrfCr8OnwpTCscOlwqTChMOnwpDChlxuICAgKi9cbiAgc2hvdWxkUmV1c2VSb3V0ZShcbiAgICBmdXR1cmU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgY3VycjogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgKTogYm9vbGVhbiB7XG4gICAgbGV0IHJldCA9IGZ1dHVyZS5yb3V0ZUNvbmZpZyA9PT0gY3Vyci5yb3V0ZUNvbmZpZztcbiAgICBpZiAoIXJldCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgcGF0aCA9ICgoZnV0dXJlLnJvdXRlQ29uZmlnICYmIGZ1dHVyZS5yb3V0ZUNvbmZpZy5wYXRoKSB8fFxuICAgICAgJycpIGFzIHN0cmluZztcbiAgICBpZiAocGF0aC5sZW5ndGggPiAwICYmIH5wYXRoLmluZGV4T2YoJzonKSkge1xuICAgICAgY29uc3QgZnV0dXJlVXJsID0gdGhpcy5nZXRVcmwoZnV0dXJlKTtcbiAgICAgIGNvbnN0IGN1cnJVcmwgPSB0aGlzLmdldFVybChjdXJyKTtcbiAgICAgIHJldCA9IGZ1dHVyZVVybCA9PT0gY3VyclVybDtcbiAgICB9XG4gICAgdGhpcy5kaSgnPT09PT09PT09PT09PT09PT09PT09Jyk7XG4gICAgdGhpcy5kaShcbiAgICAgICcjc2hvdWxkUmV1c2VSb3V0ZScsXG4gICAgICByZXQsXG4gICAgICBgJHt0aGlzLmdldFVybChjdXJyKX09PiR7dGhpcy5nZXRVcmwoZnV0dXJlKX1gLFxuICAgICAgZnV0dXJlLFxuICAgICAgY3VycixcbiAgICApO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9jYWNoZWQgPSBbXTtcbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBPbkNoYW5nZXMsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkluaXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZSxcbiAgT25EZXN0cm95LFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIEluamVjdCxcbiAgT3B0aW9uYWwsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRW5kLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIsIElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IEFMQUlOX0kxOE5fVE9LRU4sIEFsYWluSTE4TlNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuXG5pbXBvcnQgeyBSZXVzZVRhYlNlcnZpY2UgfSBmcm9tICcuL3JldXNlLXRhYi5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIFJldXNlVGFiQ2FjaGVkLFxuICBSZXVzZVRhYk5vdGlmeSxcbiAgUmV1c2VUYWJNYXRjaE1vZGUsXG4gIFJldXNlSXRlbSxcbiAgUmV1c2VDb250ZXh0STE4bixcbiAgUmV1c2VDb250ZXh0Q2xvc2VFdmVudCxcbiAgUmV1c2VUaXRsZSxcbn0gZnJvbSAnLi9yZXVzZS10YWIuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBSZXVzZVRhYkNvbnRleHRTZXJ2aWNlIH0gZnJvbSAnLi9yZXVzZS10YWItY29udGV4dC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmV1c2UtdGFiJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JldXNlLXRhYi5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgcHJvdmlkZXJzOiBbUmV1c2VUYWJDb250ZXh0U2VydmljZV0sXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnJldXNlLXRhYl0nOiAndHJ1ZScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIFJldXNlVGFiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIHN1YiQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBpMThuJDogU3Vic2NyaXB0aW9uO1xuICBsaXN0OiBSZXVzZUl0ZW1bXSA9IFtdO1xuICBpdGVtOiBSZXVzZUl0ZW07XG4gIHBvcyA9IDA7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICAvKiogw6jCrsK+w6fCvcKuw6XCjMK5w6nChcKNw6bCqMKhw6XCvMKPICovXG4gIEBJbnB1dCgpXG4gIG1vZGU6IFJldXNlVGFiTWF0Y2hNb2RlID0gUmV1c2VUYWJNYXRjaE1vZGUuTWVudTtcbiAgLyoqIMOpwoDCicOpwqHCucOmwpbCh8OmwpzCrMOlwpvCvcOpwpnChcOlwozCliAqL1xuICBASW5wdXQoKVxuICBpMThuOiBSZXVzZUNvbnRleHRJMThuO1xuICAvKiogw6bCmMKvw6XCkMKmRGVidWfDpsKowqHDpcK8wo8gKi9cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIGRlYnVnID0gZmFsc2U7XG4gIC8qKiDDpcKFwoHDqMKuwrjDpsKcwoDDpcKkwprDpcKkwo3Dp8KUwqjDpcKkwprDpcKwwpHDpMK4wqrDqcKhwrXDqcKdwqIgKi9cbiAgQElucHV0KClcbiAgQElucHV0TnVtYmVyKClcbiAgbWF4OiBudW1iZXI7XG4gIC8qKiDDpsKOwpLDqcKZwqTDqMKnwoTDpcKIwpnDr8K8wozDqcKZwpAgYG1vZGU9VVJMYCAqL1xuICBASW5wdXQoKVxuICBleGNsdWRlczogUmVnRXhwW107XG4gIC8qKiDDpcKFwoHDqMKuwrjDpcKFwrPDqcKXwq0gKi9cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIGFsbG93Q2xvc2UgPSB0cnVlO1xuICAvKiogw6bCgMK7w6bCmMKvw6bCmMK+w6fCpMK6w6XCvcKTw6XCicKNw6nCocK1ICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBzaG93Q3VycmVudCA9IHRydWU7XG4gIC8qKiDDpcKIwofDpsKNwqLDpsKXwrbDpcKbwp7DqMKwwoMgKi9cbiAgQE91dHB1dCgpXG4gIGNoYW5nZTogRXZlbnRFbWl0dGVyPFJldXNlSXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyPFJldXNlSXRlbT4oKTtcbiAgLyoqIMOlwoXCs8OpwpfCrcOlwpvCnsOowrDCgyAqL1xuICBAT3V0cHV0KClcbiAgY2xvc2U6IEV2ZW50RW1pdHRlcjxSZXVzZUl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcjxSZXVzZUl0ZW0+KCk7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgc3J2OiBSZXVzZVRhYlNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHJlbmRlcjogUmVuZGVyZXIyLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKVxuICAgIHByaXZhdGUgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcbiAgKSB7XG4gICAgdGhpcy5lbCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3Qgcm91dGUkID0gdGhpcy5yb3V0ZXIuZXZlbnRzLnBpcGUoXG4gICAgICBmaWx0ZXIoZXZ0ID0+IGV2dCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLFxuICAgICk7XG4gICAgdGhpcy5zdWIkID0gY29tYmluZUxhdGVzdCh0aGlzLnNydi5jaGFuZ2UsIHJvdXRlJCkuc3Vic2NyaWJlKChbcmVzLCBlXSkgPT5cbiAgICAgIHRoaXMuZ2VuTGlzdChyZXMgYXMgYW55KSxcbiAgICApO1xuICAgIGlmICh0aGlzLmkxOG5TcnYpIHtcbiAgICAgIHRoaXMuaTE4biQgPSB0aGlzLmkxOG5TcnYuY2hhbmdlXG4gICAgICAgIC5waXBlKGRlYm91bmNlVGltZSgxMDApKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuZ2VuTGlzdCgpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdlblRpdCh0aXRsZTogUmV1c2VUaXRsZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRpdGxlLmkxOG4gJiYgdGhpcy5pMThuU3J2XG4gICAgICA/IHRoaXMuaTE4blNydi5mYW55aSh0aXRsZS5pMThuKVxuICAgICAgOiB0aXRsZS50ZXh0O1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5MaXN0KG5vdGlmeT86IFJldXNlVGFiTm90aWZ5KSB7XG4gICAgY29uc3QgaXNDbG9zZWQgPSBub3RpZnkgJiYgbm90aWZ5LmFjdGl2ZSA9PT0gJ2Nsb3NlJztcbiAgICBjb25zdCBiZWZvcmVDbG9zZVBvcyA9IGlzQ2xvc2VkXG4gICAgICA/IHRoaXMubGlzdC5maW5kSW5kZXgodyA9PiB3LnVybCA9PT0gbm90aWZ5LnVybClcbiAgICAgIDogLTE7XG4gICAgY29uc3QgbHMgPSB0aGlzLnNydi5pdGVtcy5tYXAoKGl0ZW06IFJldXNlVGFiQ2FjaGVkLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICByZXR1cm4gPFJldXNlSXRlbT57XG4gICAgICAgIHVybDogaXRlbS51cmwsXG4gICAgICAgIHRpdGxlOiB0aGlzLmdlblRpdChpdGVtLnRpdGxlKSxcbiAgICAgICAgY2xvc2FibGU6IHRoaXMuYWxsb3dDbG9zZSAmJiBpdGVtLmNsb3NhYmxlICYmIHRoaXMuc3J2LmNvdW50ID4gMCxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIGxhc3Q6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5zaG93Q3VycmVudCkge1xuICAgICAgY29uc3Qgc25hcHNob3QgPSB0aGlzLnJvdXRlLnNuYXBzaG90O1xuICAgICAgY29uc3QgdXJsID0gdGhpcy5zcnYuZ2V0VXJsKHNuYXBzaG90KTtcbiAgICAgIGNvbnN0IGlkeCA9IGxzLmZpbmRJbmRleCh3ID0+IHcudXJsID09PSB1cmwpO1xuICAgICAgLy8ganVtcCBkaXJlY3RseSB3aGVuIHRoZSBjdXJyZW50IGV4aXN0cyBpbiB0aGUgbGlzdFxuICAgICAgLy8gb3IgY3JlYXRlIGEgbmV3IGN1cnJlbnQgaXRlbSBhbmQganVtcFxuICAgICAgaWYgKGlkeCAhPT0gLTEgfHwgKGlzQ2xvc2VkICYmIG5vdGlmeS51cmwgPT09IHVybCkpIHtcbiAgICAgICAgdGhpcy5wb3MgPSBpc0Nsb3NlZFxuICAgICAgICAgID8gaWR4ID49IGJlZm9yZUNsb3NlUG9zXG4gICAgICAgICAgICA/IHRoaXMucG9zIC0gMVxuICAgICAgICAgICAgOiB0aGlzLnBvc1xuICAgICAgICAgIDogaWR4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc25hcHNob3RUcnVlID0gdGhpcy5zcnYuZ2V0VHJ1dGhSb3V0ZShzbmFwc2hvdCk7XG4gICAgICAgIGxzLnB1c2goPFJldXNlSXRlbT57XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIHRpdGxlOiB0aGlzLmdlblRpdCh0aGlzLnNydi5nZXRUaXRsZSh1cmwsIHNuYXBzaG90VHJ1ZSkpLFxuICAgICAgICAgIGNsb3NhYmxlOlxuICAgICAgICAgICAgdGhpcy5hbGxvd0Nsb3NlICYmXG4gICAgICAgICAgICB0aGlzLnNydi5jb3VudCA+IDAgJiZcbiAgICAgICAgICAgIHRoaXMuc3J2LmdldENsb3NhYmxlKHVybCwgc25hcHNob3RUcnVlKSxcbiAgICAgICAgICBpbmRleDogbHMubGVuZ3RoLFxuICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgbGFzdDogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnBvcyA9IGxzLmxlbmd0aCAtIDE7XG4gICAgICB9XG4gICAgICAvLyBmaXggdW5hYmxlZCBjbG9zZSBsYXN0IGl0ZW1cbiAgICAgIGlmIChscy5sZW5ndGggPD0gMSkgbHNbMF0uY2xvc2FibGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLmxpc3QgPSBscztcblxuICAgIGlmIChscy5sZW5ndGggJiYgaXNDbG9zZWQpIHtcbiAgICAgIHRoaXMudG8obnVsbCwgdGhpcy5wb3MpO1xuICAgIH1cblxuICAgIHRoaXMucmVmU3RhdHVzKGZhbHNlKTtcbiAgICB0aGlzLnZpc2liaWxpdHkoKTtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgdmlzaWJpbGl0eSgpIHtcbiAgICBpZiAodGhpcy5zaG93Q3VycmVudCkgcmV0dXJuO1xuICAgIHRoaXMucmVuZGVyLnNldFN0eWxlKFxuICAgICAgdGhpcy5lbCxcbiAgICAgICdkaXNwbGF5JyxcbiAgICAgIHRoaXMubGlzdC5sZW5ndGggPT09IDAgPyAnbm9uZScgOiAnYmxvY2snLFxuICAgICk7XG4gIH1cblxuICAvLyAjcmVnaW9uIFVJXG5cbiAgY21DaGFuZ2UocmVzOiBSZXVzZUNvbnRleHRDbG9zZUV2ZW50KSB7XG4gICAgc3dpdGNoIChyZXMudHlwZSkge1xuICAgICAgY2FzZSAnY2xvc2UnOlxuICAgICAgICB0aGlzLl9jbG9zZShudWxsLCByZXMuaXRlbS5pbmRleCwgcmVzLmluY2x1ZGVOb25DbG9zZWFibGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Nsb3NlUmlnaHQnOlxuICAgICAgICB0aGlzLnNydi5jbG9zZVJpZ2h0KHJlcy5pdGVtLnVybCwgcmVzLmluY2x1ZGVOb25DbG9zZWFibGUpO1xuICAgICAgICB0aGlzLmNsb3NlLmVtaXQobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2xlYXInOlxuICAgICAgY2FzZSAnY2xvc2VPdGhlcic6XG4gICAgICAgIHRoaXMuc3J2LmNsZWFyKHJlcy5pbmNsdWRlTm9uQ2xvc2VhYmxlKTtcbiAgICAgICAgdGhpcy5jbG9zZS5lbWl0KG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZWZTdGF0dXMoZGMgPSB0cnVlKSB7XG4gICAgaWYgKHRoaXMubGlzdC5sZW5ndGgpIHtcbiAgICAgIHRoaXMubGlzdFt0aGlzLmxpc3QubGVuZ3RoIC0gMV0ubGFzdCA9IHRydWU7XG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaCgoaSwgaWR4KSA9PiAoaS5hY3RpdmUgPSB0aGlzLnBvcyA9PT0gaWR4KSk7XG4gICAgfVxuICAgIGlmIChkYykgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICB0byhlOiBFdmVudCwgaW5kZXg6IG51bWJlcikge1xuICAgIGlmIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICBpbmRleCA9IE1hdGgubWF4KDAsIE1hdGgubWluKGluZGV4LCB0aGlzLmxpc3QubGVuZ3RoIC0gMSkpO1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmxpc3RbaW5kZXhdO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoaXRlbS51cmwpLnRoZW4ocmVzID0+IHtcbiAgICAgIGlmICghcmVzKSByZXR1cm47XG4gICAgICB0aGlzLnBvcyA9IGluZGV4O1xuICAgICAgdGhpcy5pdGVtID0gaXRlbTtcbiAgICAgIHRoaXMucmVmU3RhdHVzKCk7XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KGl0ZW0pO1xuICAgIH0pO1xuICB9XG5cbiAgX2Nsb3NlKGU6IEV2ZW50LCBpZHg6IG51bWJlciwgaW5jbHVkZU5vbkNsb3NlYWJsZTogYm9vbGVhbikge1xuICAgIGlmIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICBjb25zdCBpdGVtID0gdGhpcy5saXN0W2lkeF07XG4gICAgdGhpcy5zcnYuY2xvc2UoaXRlbS51cmwsIGluY2x1ZGVOb25DbG9zZWFibGUpO1xuICAgIHRoaXMuY2xvc2UuZW1pdChpdGVtKTtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5nZW5MaXN0KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhcbiAgICBjaGFuZ2VzOiB7IFtQIGluIGtleW9mIHRoaXNdPzogU2ltcGxlQ2hhbmdlIH0gJiBTaW1wbGVDaGFuZ2VzLFxuICApOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5tYXgpIHRoaXMuc3J2Lm1heCA9IHRoaXMubWF4O1xuICAgIGlmIChjaGFuZ2VzLmV4Y2x1ZGVzKSB0aGlzLnNydi5leGNsdWRlcyA9IHRoaXMuZXhjbHVkZXM7XG4gICAgaWYgKGNoYW5nZXMubW9kZSkgdGhpcy5zcnYubW9kZSA9IHRoaXMubW9kZTtcbiAgICB0aGlzLnNydi5kZWJ1ZyA9IHRoaXMuZGVidWc7XG5cbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgaTE4biQsIHN1YiQgfSA9IHRoaXM7XG4gICAgc3ViJC51bnN1YnNjcmliZSgpO1xuICAgIGlmIChpMThuJCkgaTE4biQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUm91dGVSZXVzZVN0cmF0ZWd5LCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJldXNlVGFiU2VydmljZSB9IGZyb20gJy4vcmV1c2UtdGFiLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgUmV1c2VUYWJTdHJhdGVneSBpbXBsZW1lbnRzIFJvdXRlUmV1c2VTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3J2OiBSZXVzZVRhYlNlcnZpY2UpIHt9XG5cbiAgc2hvdWxkRGV0YWNoKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3J2LnNob3VsZERldGFjaChyb3V0ZSk7XG4gIH1cbiAgc3RvcmUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIGhhbmRsZToge30pOiB2b2lkIHtcbiAgICB0aGlzLnNydi5zdG9yZShyb3V0ZSwgaGFuZGxlKTtcbiAgfVxuICBzaG91bGRBdHRhY2gocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zcnYuc2hvdWxkQXR0YWNoKHJvdXRlKTtcbiAgfVxuICByZXRyaWV2ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IHt9IHtcbiAgICByZXR1cm4gdGhpcy5zcnYucmV0cmlldmUocm91dGUpO1xuICB9XG4gIHNob3VsZFJldXNlUm91dGUoXG4gICAgZnV0dXJlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIGN1cnI6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNydi5zaG91bGRSZXVzZVJvdXRlKGZ1dHVyZSwgY3Vycik7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBOZ1pvcnJvQW50ZE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuaW1wb3J0IHsgRGVsb25Mb2NhbGVNb2R1bGUgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuXG5pbXBvcnQgeyBSZXVzZVRhYkNvbXBvbmVudCB9IGZyb20gJy4vcmV1c2UtdGFiLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXVzZVRhYkNvbnRleHRDb21wb25lbnQgfSBmcm9tICcuL3JldXNlLXRhYi1jb250ZXh0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXVzZVRhYkNvbnRleHREaXJlY3RpdmUgfSBmcm9tICcuL3JldXNlLXRhYi1jb250ZXh0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBSZXVzZVRhYkNvbnRleHRNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9yZXVzZS10YWItY29udGV4dC1tZW51LmNvbXBvbmVudCc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbUmV1c2VUYWJDb21wb25lbnRdO1xuY29uc3QgTk9FWFBPUlRTID0gW1xuICBSZXVzZVRhYkNvbnRleHRNZW51Q29tcG9uZW50LFxuICBSZXVzZVRhYkNvbnRleHRDb21wb25lbnQsXG4gIFJldXNlVGFiQ29udGV4dERpcmVjdGl2ZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIERlbG9uTG9jYWxlTW9kdWxlLFxuICAgIE5nWm9ycm9BbnRkTW9kdWxlLFxuICAgIE92ZXJsYXlNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFMsIC4uLk5PRVhQT1JUU10sXG4gIGVudHJ5Q29tcG9uZW50czogW1JldXNlVGFiQ29udGV4dE1lbnVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXG59KVxuZXhwb3J0IGNsYXNzIFJldXNlVGFiTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBSZXVzZVRhYk1vZHVsZSxcbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0lBbURFLFlBQW9CLE9BQTJCO1FBQTNCLFlBQU8sR0FBUCxPQUFPLENBQW9CO3FCQU52QyxJQUFJLFlBQVksRUFBMEI7S0FNQzs7Ozs7SUFyQm5ELElBQ0ksSUFBSSxDQUFDLEtBQXVCO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDekU7Ozs7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDbkI7Ozs7SUFXRCxJQUFJLG1CQUFtQjtRQUNyQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0tBQzNCOzs7Ozs7SUFJTyxNQUFNLENBQUMsSUFBZSxFQUFFLElBQWU7UUFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDZCxJQUFJO1lBQ0osSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLG1CQUFtQjtTQUM5QyxDQUFDLENBQUM7Ozs7O0lBR0wsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLG1CQUFtQjtZQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztL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