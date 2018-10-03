/**
 * @license ng-alain(cipchk@qq.com) v2.0.0-beta.3-969f29b
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/theme'), require('@angular/cdk/overlay'), require('@angular/cdk/portal'), require('rxjs'), require('@angular/router'), require('rxjs/operators'), require('@delon/util'), require('@angular/common'), require('ng-zorro-antd')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/reuse-tab', ['exports', '@angular/core', '@delon/theme', '@angular/cdk/overlay', '@angular/cdk/portal', 'rxjs', '@angular/router', 'rxjs/operators', '@delon/util', '@angular/common', 'ng-zorro-antd'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc['reuse-tab'] = {}),global.ng.core,global.delon.theme,global.ng.cdk.overlay,global.ng.cdk.portal,global.rxjs,global.ng.router,global.rxjs.operators,global.delon.util,global.ng.common,global.ngZorro.antd));
}(this, (function (exports,i0,i1,overlay,portal,rxjs,router,operators,util,common,ngZorroAntd) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ReuseTabContextMenuComponent = /** @class */ (function () {
        function ReuseTabContextMenuComponent(i18nSrv) {
            this.i18nSrv = i18nSrv;
            this.close = new i0.EventEmitter();
        }
        Object.defineProperty(ReuseTabContextMenuComponent.prototype, "i18n", {
            get: /**
             * @return {?}
             */ function () {
                return this._i18n;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._i18n = Object.assign({}, this.i18nSrv.getData('reuseTab'), value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ReuseTabContextMenuComponent.prototype, "includeNonCloseable", {
            get: /**
             * @return {?}
             */ function () {
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
            { type: i0.Component, args: [{
                        selector: 'reuse-tab-context-menu',
                        template: "\n  <ul nz-menu>\n      <li nz-menu-item (click)=\"click($event, 'close')\" data-type=\"close\" [nzDisabled]=\"!item.closable\" [innerHTML]=\"i18n.close\"></li>\n      <li nz-menu-item (click)=\"click($event, 'closeOther')\" data-type=\"closeOther\" [innerHTML]=\"i18n.closeOther\"></li>\n      <li nz-menu-item (click)=\"click($event, 'closeRight')\" data-type=\"closeRight\" [nzDisabled]=\"item.last\" [innerHTML]=\"i18n.closeRight\"></li>\n      <li nz-menu-item (click)=\"click($event, 'clear')\" data-type=\"clear\" [innerHTML]=\"i18n.clear\"></li>\n  </ul>",
                        preserveWhitespaces: false
                    }] }
        ];
        /** @nocollapse */
        ReuseTabContextMenuComponent.ctorParameters = function () {
            return [
                { type: i1.DelonLocaleService }
            ];
        };
        ReuseTabContextMenuComponent.propDecorators = {
            i18n: [{ type: i0.Input }],
            item: [{ type: i0.Input }],
            event: [{ type: i0.Input }],
            close: [{ type: i0.Output }],
            closeMenu: [{ type: i0.HostListener, args: ['document:click', ['$event'],] }, { type: i0.HostListener, args: ['document:contextmenu', ['$event'],] }]
        };
        return ReuseTabContextMenuComponent;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ReuseTabContextService = /** @class */ (function () {
        function ReuseTabContextService(overlay$$1) {
            this.overlay = overlay$$1;
            this.show = new rxjs.Subject();
            this.close = new rxjs.Subject();
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
                var fakeElement = new i0.ElementRef({
                    getBoundingClientRect: function () {
                        return ({
                            bottom: event.clientY,
                            height: 0,
                            left: event.clientX,
                            right: event.clientX,
                            top: event.clientY,
                            width: 0,
                        });
                    },
                });
                /** @type {?} */
                var positions = [
                    new overlay.ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
                    new overlay.ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
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
                var comp = this.ref.attach(new portal.ComponentPortal(ReuseTabContextMenuComponent));
                /** @type {?} */
                var instance = comp.instance;
                instance.i18n = this.i18n;
                instance.item = __assign({}, item);
                instance.event = event;
                /** @type {?} */
                var sub$ = new rxjs.Subscription();
                sub$.add(instance.close.subscribe(function (res) {
                    _this.close.next(res);
                    _this.remove();
                }));
                comp.onDestroy(function () { return sub$.unsubscribe(); });
            };
        ReuseTabContextService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        ReuseTabContextService.ctorParameters = function () {
            return [
                { type: overlay.Overlay }
            ];
        };
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
            this.sub$ = new rxjs.Subscription();
            this.change = new i0.EventEmitter();
            this.sub$.add(srv.show.subscribe(function (context) { return _this.srv.open(context); }));
            this.sub$.add(srv.close.subscribe(function (res) { return _this.change.emit(res); }));
        }
        Object.defineProperty(ReuseTabContextComponent.prototype, "i18n", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
            { type: i0.Component, args: [{
                        selector: 'reuse-tab-context',
                        template: "",
                        preserveWhitespaces: false
                    }] }
        ];
        /** @nocollapse */
        ReuseTabContextComponent.ctorParameters = function () {
            return [
                { type: ReuseTabContextService }
            ];
        };
        ReuseTabContextComponent.propDecorators = {
            i18n: [{ type: i0.Input }],
            change: [{ type: i0.Output }]
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
            { type: i0.Directive, args: [{
                        selector: '[reuse-tab-context-menu]',
                    },] }
        ];
        /** @nocollapse */
        ReuseTabContextDirective.ctorParameters = function () {
            return [
                { type: ReuseTabContextService }
            ];
        };
        ReuseTabContextDirective.propDecorators = {
            item: [{ type: i0.Input, args: ['reuse-tab-context-menu',] }],
            onContextMenu: [{ type: i0.HostListener, args: ['contextmenu', ['$event'],] }]
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
            this._cachedChange = new rxjs.BehaviorSubject(null);
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
             */ function () {
                return this.getUrl(this.injector.get(router.ActivatedRoute).snapshot);
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
             */ function (value) {
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
             */ function () {
                return this._mode;
            },
            /** 设置匹配模式 */
            set: /**
             * 设置匹配模式
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._mode = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ReuseTabService.prototype, "debug", {
            get: /**
             * @return {?}
             */ function () {
                return this._debug;
            },
            /** 设置Debug模式 */
            set: /**
             * 设置Debug模式
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._debug = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ReuseTabService.prototype, "excludes", {
            get: /**
             * @return {?}
             */ function () {
                return this._excludes;
            },
            /** 排除规则，限 `mode=URL` */
            set: /**
             * 排除规则，限 `mode=URL`
             * @param {?} values
             * @return {?}
             */ function (values) {
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
             */ function () {
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
             */ function () {
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
             */ function () {
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
             */ function (value) {
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
                if (includeNonCloseable === void 0) {
                    includeNonCloseable = false;
                }
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
                if (includeNonCloseable === void 0) {
                    includeNonCloseable = false;
                }
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
                if (includeNonCloseable === void 0) {
                    includeNonCloseable = false;
                }
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
                this.injector.get(router.Router).navigateByUrl(newUrl);
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
             */ function (value) {
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
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        ReuseTabService.ctorParameters = function () {
            return [
                { type: i0.Injector },
                { type: i1.MenuService }
            ];
        };
        /** @nocollapse */ ReuseTabService.ngInjectableDef = i0.defineInjectable({ factory: function ReuseTabService_Factory() { return new ReuseTabService(i0.inject(i0.INJECTOR), i0.inject(i1.MenuService)); }, token: ReuseTabService, providedIn: "root" });
        return ReuseTabService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ReuseTabComponent = /** @class */ (function () {
        // #endregion
        function ReuseTabComponent(el, srv, cd, router$$1, route, render, i18nSrv) {
            var _this = this;
            this.srv = srv;
            this.cd = cd;
            this.router = router$$1;
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
            this.change = new i0.EventEmitter();
            /**
             * 关闭回调
             */
            this.close = new i0.EventEmitter();
            this.el = el.nativeElement;
            /** @type {?} */
            var route$ = this.router.events.pipe(operators.filter(function (evt) { return evt instanceof router.NavigationEnd; }));
            this.sub$ = rxjs.combineLatest(this.srv.change, route$).subscribe(function (_a) {
                var _b = __read(_a, 2), res = _b[0], e = _b[1];
                return _this.genList(/** @type {?} */ (res));
            });
            if (this.i18nSrv) {
                this.i18n$ = this.i18nSrv.change
                    .pipe(operators.debounceTime(100))
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
                if (dc === void 0) {
                    dc = true;
                }
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
            { type: i0.Component, args: [{
                        selector: 'reuse-tab',
                        template: "<nz-tabset [nzSelectedIndex]=\"pos\" [nzAnimated]=\"false\" nzType=\"line\">\n  <nz-tab *ngFor=\"let i of list; let index = index\" [nzTitle]=\"titleTemplate\">\n    <ng-template #titleTemplate>\n      <span [reuse-tab-context-menu]=\"i\" (click)=\"to($event, index)\" class=\"name\">{{i.title}}</span>\n      <i *ngIf=\"i.closable\" class=\"anticon anticon-close op\" (click)=\"_close($event, index, false)\"></i>\n    </ng-template>\n  </nz-tab>\n</nz-tabset>\n<reuse-tab-context [i18n]=\"i18n\" (change)=\"cmChange($event)\"></reuse-tab-context>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        preserveWhitespaces: false,
                        providers: [ReuseTabContextService],
                        host: {
                            '[class.reuse-tab]': 'true',
                        }
                    }] }
        ];
        /** @nocollapse */
        ReuseTabComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: ReuseTabService },
                { type: i0.ChangeDetectorRef },
                { type: router.Router },
                { type: router.ActivatedRoute },
                { type: i0.Renderer2 },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [i1.ALAIN_I18N_TOKEN,] }] }
            ];
        };
        ReuseTabComponent.propDecorators = {
            mode: [{ type: i0.Input }],
            i18n: [{ type: i0.Input }],
            debug: [{ type: i0.Input }],
            max: [{ type: i0.Input }],
            excludes: [{ type: i0.Input }],
            allowClose: [{ type: i0.Input }],
            showCurrent: [{ type: i0.Input }],
            change: [{ type: i0.Output }],
            close: [{ type: i0.Output }]
        };
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], ReuseTabComponent.prototype, "debug", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Number)
        ], ReuseTabComponent.prototype, "max", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], ReuseTabComponent.prototype, "allowClose", void 0);
        __decorate([
            util.InputBoolean(),
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
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            router.RouterModule,
                            i1.DelonLocaleModule,
                            ngZorroAntd.NgZorroAntdModule,
                            overlay.OverlayModule,
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

    exports.ReuseTabContextMenuComponent = ReuseTabContextMenuComponent;
    exports.ReuseTabContextComponent = ReuseTabContextComponent;
    exports.ReuseTabContextDirective = ReuseTabContextDirective;
    exports.ReuseTabContextService = ReuseTabContextService;
    exports.ReuseTabComponent = ReuseTabComponent;
    exports.ReuseTabService = ReuseTabService;
    exports.ReuseTabStrategy = ReuseTabStrategy;
    exports.ReuseTabModule = ReuseTabModule;
    exports.ReuseTabMatchMode = ReuseTabMatchMode;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2VUYWIudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vYWJjL3JldXNlLXRhYi9yZXVzZS10YWItY29udGV4dC1tZW51LmNvbXBvbmVudC50cyIsIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL0BkZWxvbi9hYmMvcmV1c2UtdGFiL3JldXNlLXRhYi1jb250ZXh0LnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi9hYmMvcmV1c2UtdGFiL3JldXNlLXRhYi1jb250ZXh0LmNvbXBvbmVudC50cyIsIm5nOi8vQGRlbG9uL2FiYy9yZXVzZS10YWIvcmV1c2UtdGFiLWNvbnRleHQuZGlyZWN0aXZlLnRzIiwibmc6Ly9AZGVsb24vYWJjL3JldXNlLXRhYi9yZXVzZS10YWIuaW50ZXJmYWNlcy50cyIsIm5nOi8vQGRlbG9uL2FiYy9yZXVzZS10YWIvcmV1c2UtdGFiLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi9hYmMvcmV1c2UtdGFiL3JldXNlLXRhYi5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9hYmMvcmV1c2UtdGFiL3JldXNlLXRhYi5zdHJhdGVneS50cyIsIm5nOi8vQGRlbG9uL2FiYy9yZXVzZS10YWIvcmV1c2UtdGFiLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dCxcbiAgSG9zdExpc3RlbmVyLFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGVsb25Mb2NhbGVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcblxuaW1wb3J0IHtcbiAgUmV1c2VDb250ZXh0STE4bixcbiAgUmV1c2VDb250ZXh0Q2xvc2VFdmVudCxcbiAgUmV1c2VJdGVtLFxuICBDbG9zZVR5cGUsXG59IGZyb20gJy4vcmV1c2UtdGFiLmludGVyZmFjZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyZXVzZS10YWItY29udGV4dC1tZW51JyxcbiAgdGVtcGxhdGU6IGBcbiAgPHVsIG56LW1lbnU+XG4gICAgICA8bGkgbnotbWVudS1pdGVtIChjbGljayk9XCJjbGljaygkZXZlbnQsICdjbG9zZScpXCIgZGF0YS10eXBlPVwiY2xvc2VcIiBbbnpEaXNhYmxlZF09XCIhaXRlbS5jbG9zYWJsZVwiIFtpbm5lckhUTUxdPVwiaTE4bi5jbG9zZVwiPjwvbGk+XG4gICAgICA8bGkgbnotbWVudS1pdGVtIChjbGljayk9XCJjbGljaygkZXZlbnQsICdjbG9zZU90aGVyJylcIiBkYXRhLXR5cGU9XCJjbG9zZU90aGVyXCIgW2lubmVySFRNTF09XCJpMThuLmNsb3NlT3RoZXJcIj48L2xpPlxuICAgICAgPGxpIG56LW1lbnUtaXRlbSAoY2xpY2spPVwiY2xpY2soJGV2ZW50LCAnY2xvc2VSaWdodCcpXCIgZGF0YS10eXBlPVwiY2xvc2VSaWdodFwiIFtuekRpc2FibGVkXT1cIml0ZW0ubGFzdFwiIFtpbm5lckhUTUxdPVwiaTE4bi5jbG9zZVJpZ2h0XCI+PC9saT5cbiAgICAgIDxsaSBuei1tZW51LWl0ZW0gKGNsaWNrKT1cImNsaWNrKCRldmVudCwgJ2NsZWFyJylcIiBkYXRhLXR5cGU9XCJjbGVhclwiIFtpbm5lckhUTUxdPVwiaTE4bi5jbGVhclwiPjwvbGk+XG4gIDwvdWw+YCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFJldXNlVGFiQ29udGV4dE1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9pMThuOiBSZXVzZUNvbnRleHRJMThuO1xuICBASW5wdXQoKVxuICBzZXQgaTE4bih2YWx1ZTogUmV1c2VDb250ZXh0STE4bikge1xuICAgIHRoaXMuX2kxOG4gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmkxOG5TcnYuZ2V0RGF0YSgncmV1c2VUYWInKSwgdmFsdWUpO1xuICB9XG4gIGdldCBpMThuKCkge1xuICAgIHJldHVybiB0aGlzLl9pMThuO1xuICB9XG5cbiAgQElucHV0KClcbiAgaXRlbTogUmV1c2VJdGVtO1xuXG4gIEBJbnB1dCgpXG4gIGV2ZW50OiBNb3VzZUV2ZW50O1xuXG4gIEBPdXRwdXQoKVxuICBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8UmV1c2VDb250ZXh0Q2xvc2VFdmVudD4oKTtcblxuICBnZXQgaW5jbHVkZU5vbkNsb3NlYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ldmVudC5jdHJsS2V5O1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuU3J2OiBEZWxvbkxvY2FsZVNlcnZpY2UpIHt9XG5cbiAgcHJpdmF0ZSBub3RpZnkodHlwZTogQ2xvc2VUeXBlLCBpdGVtOiBSZXVzZUl0ZW0pIHtcbiAgICB0aGlzLmNsb3NlLm5leHQoe1xuICAgICAgdHlwZSxcbiAgICAgIGl0ZW06IHRoaXMuaXRlbSxcbiAgICAgIGluY2x1ZGVOb25DbG9zZWFibGU6IHRoaXMuaW5jbHVkZU5vbkNsb3NlYWJsZSxcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluY2x1ZGVOb25DbG9zZWFibGUpIHRoaXMuaXRlbS5jbG9zYWJsZSA9IHRydWU7XG4gIH1cblxuICBjbGljayhlOiBNb3VzZUV2ZW50LCB0eXBlOiBDbG9zZVR5cGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodHlwZSA9PT0gJ2Nsb3NlJyAmJiAhdGhpcy5pdGVtLmNsb3NhYmxlKSByZXR1cm47XG4gICAgaWYgKHR5cGUgPT09ICdjbG9zZVJpZ2h0JyAmJiB0aGlzLml0ZW0ubGFzdCkgcmV0dXJuO1xuICAgIHRoaXMubm90aWZ5KHR5cGUsIHRoaXMuaXRlbSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNvbnRleHRtZW51JywgWyckZXZlbnQnXSlcbiAgY2xvc2VNZW51KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycgJiYgZXZlbnQuYnV0dG9uID09PSAyKSByZXR1cm47XG4gICAgdGhpcy5ub3RpZnkobnVsbCwgbnVsbCk7XG4gIH1cbn1cbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgT3ZlcmxheSxcbiAgT3ZlcmxheVJlZixcbiAgQ29ubmVjdGlvblBvc2l0aW9uUGFpcixcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtcbiAgUmV1c2VDb250ZXh0RXZlbnQsXG4gIFJldXNlQ29udGV4dEkxOG4sXG4gIFJldXNlQ29udGV4dENsb3NlRXZlbnQsXG59IGZyb20gJy4vcmV1c2UtdGFiLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgUmV1c2VUYWJDb250ZXh0TWVudUNvbXBvbmVudCB9IGZyb20gJy4vcmV1c2UtdGFiLWNvbnRleHQtbWVudS5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmV1c2VUYWJDb250ZXh0U2VydmljZSB7XG4gIHByaXZhdGUgcmVmOiBPdmVybGF5UmVmO1xuICBpMThuOiBSZXVzZUNvbnRleHRJMThuO1xuXG4gIHNob3c6IFN1YmplY3Q8UmV1c2VDb250ZXh0RXZlbnQ+ID0gbmV3IFN1YmplY3Q8UmV1c2VDb250ZXh0RXZlbnQ+KCk7XG4gIGNsb3NlOiBTdWJqZWN0PFJldXNlQ29udGV4dENsb3NlRXZlbnQ+ID0gbmV3IFN1YmplY3Q8XG4gICAgUmV1c2VDb250ZXh0Q2xvc2VFdmVudFxuICA+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5KSB7fVxuXG4gIHJlbW92ZSgpIHtcbiAgICBpZiAoIXRoaXMucmVmKSByZXR1cm47XG4gICAgdGhpcy5yZWYuZGV0YWNoKCk7XG4gICAgdGhpcy5yZWYuZGlzcG9zZSgpO1xuICAgIHRoaXMucmVmID0gbnVsbDtcbiAgfVxuXG4gIG9wZW4oY29udGV4dDogUmV1c2VDb250ZXh0RXZlbnQpIHtcbiAgICB0aGlzLnJlbW92ZSgpO1xuICAgIGNvbnN0IHsgZXZlbnQsIGl0ZW0gfSA9IGNvbnRleHQ7XG4gICAgY29uc3QgZmFrZUVsZW1lbnQgPSBuZXcgRWxlbWVudFJlZih7XG4gICAgICBnZXRCb3VuZGluZ0NsaWVudFJlY3Q6ICgpOiBDbGllbnRSZWN0ID0+ICh7XG4gICAgICAgIGJvdHRvbTogZXZlbnQuY2xpZW50WSxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBsZWZ0OiBldmVudC5jbGllbnRYLFxuICAgICAgICByaWdodDogZXZlbnQuY2xpZW50WCxcbiAgICAgICAgdG9wOiBldmVudC5jbGllbnRZLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgIH0pLFxuICAgIH0pO1xuICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtcbiAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKFxuICAgICAgICB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdib3R0b20nIH0sXG4gICAgICAgIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAndG9wJyB9LFxuICAgICAgKSxcbiAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKFxuICAgICAgICB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnIH0sXG4gICAgICAgIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAnYm90dG9tJyB9LFxuICAgICAgKSxcbiAgICBdO1xuICAgIGNvbnN0IHBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXlcbiAgICAgIC5wb3NpdGlvbigpXG4gICAgICAuZmxleGlibGVDb25uZWN0ZWRUbyhmYWtlRWxlbWVudClcbiAgICAgIC53aXRoUG9zaXRpb25zKHBvc2l0aW9ucyk7XG4gICAgdGhpcy5yZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKHtcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3ksXG4gICAgICBwYW5lbENsYXNzOiAncmV1c2UtdGFiX19jbScsXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuY2xvc2UoKSxcbiAgICB9KTtcbiAgICBjb25zdCBjb21wID0gdGhpcy5yZWYuYXR0YWNoKFxuICAgICAgbmV3IENvbXBvbmVudFBvcnRhbChSZXVzZVRhYkNvbnRleHRNZW51Q29tcG9uZW50KSxcbiAgICApO1xuICAgIGNvbnN0IGluc3RhbmNlID0gY29tcC5pbnN0YW5jZTtcbiAgICBpbnN0YW5jZS5pMThuID0gdGhpcy5pMThuO1xuICAgIGluc3RhbmNlLml0ZW0gPSB7IC4uLml0ZW0gfTtcbiAgICBpbnN0YW5jZS5ldmVudCA9IGV2ZW50O1xuXG4gICAgY29uc3Qgc3ViJCA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgICBzdWIkLmFkZChcbiAgICAgIGluc3RhbmNlLmNsb3NlLnN1YnNjcmliZSgocmVzOiBSZXVzZUNvbnRleHRDbG9zZUV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuY2xvc2UubmV4dChyZXMpO1xuICAgICAgICB0aGlzLnJlbW92ZSgpO1xuICAgICAgfSksXG4gICAgKTtcbiAgICBjb21wLm9uRGVzdHJveSgoKSA9PiBzdWIkLnVuc3Vic2NyaWJlKCkpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBSZXVzZUNvbnRleHRJMThuLCBSZXVzZUNvbnRleHRDbG9zZUV2ZW50IH0gZnJvbSAnLi9yZXVzZS10YWIuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBSZXVzZVRhYkNvbnRleHRTZXJ2aWNlIH0gZnJvbSAnLi9yZXVzZS10YWItY29udGV4dC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmV1c2UtdGFiLWNvbnRleHQnLFxuICB0ZW1wbGF0ZTogYGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBSZXVzZVRhYkNvbnRleHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHN1YiQ6IFN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBASW5wdXQoKVxuICBzZXQgaTE4bih2YWx1ZTogUmV1c2VDb250ZXh0STE4bikge1xuICAgIHRoaXMuc3J2LmkxOG4gPSB2YWx1ZTtcbiAgfVxuXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFJldXNlQ29udGV4dENsb3NlRXZlbnQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IFJldXNlVGFiQ29udGV4dFNlcnZpY2UpIHtcbiAgICB0aGlzLnN1YiQuYWRkKHNydi5zaG93LnN1YnNjcmliZShjb250ZXh0ID0+IHRoaXMuc3J2Lm9wZW4oY29udGV4dCkpKTtcbiAgICB0aGlzLnN1YiQuYWRkKHNydi5jbG9zZS5zdWJzY3JpYmUocmVzID0+IHRoaXMuY2hhbmdlLmVtaXQocmVzKSkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWIkLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBSZXVzZVRhYkNvbnRleHRTZXJ2aWNlIH0gZnJvbSAnLi9yZXVzZS10YWItY29udGV4dC5zZXJ2aWNlJztcbmltcG9ydCB7IFJldXNlSXRlbSB9IGZyb20gJy4vcmV1c2UtdGFiLmludGVyZmFjZXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbcmV1c2UtdGFiLWNvbnRleHQtbWVudV0nLFxufSlcbmV4cG9ydCBjbGFzcyBSZXVzZVRhYkNvbnRleHREaXJlY3RpdmUge1xuICBASW5wdXQoJ3JldXNlLXRhYi1jb250ZXh0LW1lbnUnKSBpdGVtOiBSZXVzZUl0ZW07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IFJldXNlVGFiQ29udGV4dFNlcnZpY2UpIHt9XG5cbiAgQEhvc3RMaXN0ZW5lcignY29udGV4dG1lbnUnLCBbJyRldmVudCddKVxuICBvbkNvbnRleHRNZW51KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5zcnYuc2hvdy5uZXh0KHtcbiAgICAgIGV2ZW50LFxuICAgICAgaXRlbTogdGhpcy5pdGVtLFxuICAgIH0pO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUmV1c2VUYWJDb250ZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9yZXVzZS10YWItY29udGV4dC5jb21wb25lbnQnO1xuXG4vKipcbiAqIMOlwqTCjcOnwpTCqMOlwozCucOpwoXCjcOmwqjCocOlwrzCj1xuICovXG5leHBvcnQgZW51bSBSZXVzZVRhYk1hdGNoTW9kZSB7XG4gIC8qKlxuICAgKiDDr8K8wojDpsKOwqjDqMKNwpDDr8K8wonDpsKMwonDqMKPwpzDpcKNwpUgYE1lbnVgIMOpwoXCjcOnwr3CrlxuICAgKlxuICAgKiDDpcKPwq/DpcKkwo3Dp8KUwqjDr8K8wppcbiAgICogLSBgeyB0ZXh0OidEYXNoYm9hcmQnIH1gXG4gICAqIC0gYHsgdGV4dDonRGFzaGJvYXJkJywgcmV1c2U6IHRydWUgfWBcbiAgICpcbiAgICogw6TCuMKNw6XCj8Kvw6XCpMKNw6fClMKow6/CvMKaXG4gICAqIC0gYHsgdGV4dDonRGFzaGJvYXJkJywgcmV1c2U6IGZhbHNlIH1gXG4gICAqL1xuICBNZW51LFxuICAvKipcbiAgICogw6bCjMKJw6jCj8Kcw6XCjcKVIGBNZW51YCDDpcK8wrrDpcKIwrbDqcKFwo3Dp8K9wq5cbiAgICpcbiAgICogw6XCj8Kvw6XCpMKNw6fClMKow6/CvMKaXG4gICAqIC0gYHsgdGV4dDonRGFzaGJvYXJkJywgcmV1c2U6IHRydWUgfWBcbiAgICpcbiAgICogw6TCuMKNw6XCj8Kvw6XCpMKNw6fClMKow6/CvMKaXG4gICAqIC0gYHsgdGV4dDonRGFzaGJvYXJkJyB9YFxuICAgKiAtIGB7IHRleHQ6J0Rhc2hib2FyZCcsIHJldXNlOiBmYWxzZSB9YFxuICAgKi9cbiAgTWVudUZvcmNlLFxuICAvKipcbiAgICogw6XCr8K5w6bCicKAw6bCnMKJw6jCt8Kvw6fClMKxw6bCnMKJw6bClcKIw6/CvMKMw6XCj8Kvw6TCu8Klw6nChcKNw6XCkMKIIGBleGNsdWRlc2Agw6jCv8KHw6bCu8Kkw6bCl8Kgw6nCocK7w6XCpMKNw6fClMKow6jCt8Kvw6fClMKxXG4gICAqL1xuICBVUkwsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VUaXRsZSB7XG4gIHRleHQ6IHN0cmluZztcbiAgaTE4bj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXVzZVRhYkNhY2hlZCB7XG4gIHRpdGxlOiBSZXVzZVRpdGxlO1xuXG4gIHVybDogc3RyaW5nO1xuXG4gIC8qKiDDpsKYwq/DpcKQwqbDpcKFwoHDqMKuwrjDpcKFwrPDqcKXwq3Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgdHJ1ZWAgKi9cbiAgY2xvc2FibGU/OiBib29sZWFuO1xuXG4gIF9zbmFwc2hvdDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdDtcblxuICBfaGFuZGxlOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VUYWJOb3RpZnkge1xuICAvKiogw6TCusKLw6TCu8K2w6fCscK7w6XCnsKLICovXG4gIGFjdGl2ZTogc3RyaW5nO1xuXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXVzZUl0ZW0ge1xuICB1cmw6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgY2xvc2FibGU6IGJvb2xlYW47XG4gIGluZGV4OiBudW1iZXI7XG4gIGFjdGl2ZTogYm9vbGVhbjtcbiAgbGFzdDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXVzZUNvbnRleHRFdmVudCB7XG4gIGV2ZW50OiBNb3VzZUV2ZW50O1xuICBpdGVtOiBSZXVzZUl0ZW07XG4gIGNvbXA/OiBSZXVzZVRhYkNvbnRleHRDb21wb25lbnQ7XG59XG5cbmV4cG9ydCB0eXBlIENsb3NlVHlwZSA9ICdjbG9zZScgfCAnY2xvc2VPdGhlcicgfCAnY2xvc2VSaWdodCcgfCAnY2xlYXInIHwgbnVsbDtcblxuZXhwb3J0IGludGVyZmFjZSBSZXVzZUNvbnRleHRDbG9zZUV2ZW50IHtcbiAgdHlwZTogQ2xvc2VUeXBlO1xuICBpdGVtOiBSZXVzZUl0ZW07XG4gIGluY2x1ZGVOb25DbG9zZWFibGU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VDb250ZXh0STE4biB7XG4gIGNsb3NlPzogc3RyaW5nO1xuICBjbG9zZU90aGVyPzogc3RyaW5nO1xuICBjbG9zZVJpZ2h0Pzogc3RyaW5nO1xuICBjbGVhcj86IHN0cmluZztcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gIEFjdGl2YXRlZFJvdXRlLFxuICBSb3V0ZXIsXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1lbnVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7XG4gIFJldXNlVGFiQ2FjaGVkLFxuICBSZXVzZVRhYk1hdGNoTW9kZSxcbiAgUmV1c2VUYWJOb3RpZnksXG4gIFJldXNlVGl0bGUsXG59IGZyb20gJy4vcmV1c2UtdGFiLmludGVyZmFjZXMnO1xuXG4vKipcbiAqIMOowrfCr8OnwpTCscOlwqTCjcOnwpTCqMOnwrHCu8OvwrzCjMOmwo/CkMOkwr7Cm8OlwqTCjcOnwpTCqMOmwonCgMOpwpzCgMOowqbCgcOkwrjCgMOkwrrCm8Olwp/CusOmwpzCrMOmwo7CpcOlwo/Co1xuICpcbiAqICoqw6bCs8Kow6/CvMKaKiogw6bCicKAw6bCnMKJw6fCvMKTw6XCrcKYw6bClcKww6bCjcKuw6bCncKlw6bCusKQw6TCusKOw6jCt8Kvw6fClMKxw6fCpsK7w6XCvMKAw6XCkMKOw6bCicKNw6TCvMKaw6TCusKnw6fClMKfXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgUmV1c2VUYWJTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfbWF4ID0gMTA7XG4gIHByaXZhdGUgX2RlYnVnID0gZmFsc2U7XG4gIHByaXZhdGUgX21vZGUgPSBSZXVzZVRhYk1hdGNoTW9kZS5NZW51O1xuICBwcml2YXRlIF9leGNsdWRlczogUmVnRXhwW10gPSBbXTtcbiAgcHJpdmF0ZSBfY2FjaGVkQ2hhbmdlOiBCZWhhdmlvclN1YmplY3Q8XG4gICAgUmV1c2VUYWJOb3RpZnlcbiAgPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8UmV1c2VUYWJOb3RpZnk+KG51bGwpO1xuICBwcml2YXRlIF9jYWNoZWQ6IFJldXNlVGFiQ2FjaGVkW10gPSBbXTtcbiAgcHJpdmF0ZSBfdGl0bGVDYWNoZWQ6IHsgW3VybDogc3RyaW5nXTogUmV1c2VUaXRsZSB9ID0ge307XG4gIHByaXZhdGUgX2Nsb3NhYmxlQ2FjaGVkOiB7IFt1cmw6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xuICBwcml2YXRlIHJlbW92ZVVybEJ1ZmZlcjogc3RyaW5nO1xuXG4gIC8vIHJlZ2lvbjogcHVibGljXG5cbiAgLyoqIMOlwr3Ck8OlwonCjcOowrfCr8OnwpTCscOlwpzCsMOlwp3CgCAqL1xuICBnZXQgY3VyVXJsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFVybCh0aGlzLmluamVjdG9yLmdldChBY3RpdmF0ZWRSb3V0ZSkuc25hcHNob3QpO1xuICB9XG5cbiAgLyoqIMOlwoXCgcOowq7CuMOmwpzCgMOlwqTCmsOlwqTCjcOnwpTCqMOlwqTCmsOlwrDCkcOkwrjCqsOpwqHCtcOpwp3CosOvwrzCjMOlwo/ClsOlwoDCvMOowozCg8OlwpvCtCBgMi0xMDBgICovXG4gIHNldCBtYXgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21heCA9IE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCAyKSwgMTAwKTtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5fY2FjaGVkLmxlbmd0aDsgaSA+IHRoaXMuX21heDsgaS0tKSB7XG4gICAgICB0aGlzLl9jYWNoZWQucG9wKCk7XG4gICAgfVxuICB9XG4gIC8qKiDDqMKuwr7Dp8K9wq7DpcKMwrnDqcKFwo3DpsKowqHDpcK8wo8gKi9cbiAgc2V0IG1vZGUodmFsdWU6IFJldXNlVGFiTWF0Y2hNb2RlKSB7XG4gICAgdGhpcy5fbW9kZSA9IHZhbHVlO1xuICB9XG4gIGdldCBtb2RlKCkge1xuICAgIHJldHVybiB0aGlzLl9tb2RlO1xuICB9XG4gIC8qKiDDqMKuwr7Dp8K9wq5EZWJ1Z8OmwqjCocOlwrzCjyAqL1xuICBzZXQgZGVidWcodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kZWJ1ZyA9IHZhbHVlO1xuICB9XG4gIGdldCBkZWJ1ZygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVidWc7XG4gIH1cbiAgLyoqIMOmwo7CksOpwpnCpMOowqfChMOlwojCmcOvwrzCjMOpwpnCkCBgbW9kZT1VUkxgICovXG4gIHNldCBleGNsdWRlcyh2YWx1ZXM6IFJlZ0V4cFtdKSB7XG4gICAgaWYgKCF2YWx1ZXMpIHJldHVybjtcbiAgICB0aGlzLl9leGNsdWRlcyA9IHZhbHVlcztcbiAgfVxuICBnZXQgZXhjbHVkZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4Y2x1ZGVzO1xuICB9XG4gIC8qKiDDqMKOwrfDpcKPwpbDpcK3wrLDp8K8wpPDpcKtwpjDp8KawoTDqMK3wq/Dp8KUwrEgKi9cbiAgZ2V0IGl0ZW1zKCk6IFJldXNlVGFiQ2FjaGVkW10ge1xuICAgIHJldHVybiB0aGlzLl9jYWNoZWQ7XG4gIH1cbiAgLyoqIMOowo7Ct8Olwo/ClsOlwr3Ck8OlwonCjcOnwrzCk8Olwq3CmMOnwprChMOowrfCr8OnwpTCscOmwoDCu8OmwpXCsCAqL1xuICBnZXQgY291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZC5sZW5ndGg7XG4gIH1cbiAgLyoqIMOowq7CosOpwpjChcOnwrzCk8Olwq3CmMOlwo/CmMOmwpvCtMOpwoDCmsOnwp/CpSAqL1xuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8UmV1c2VUYWJOb3RpZnk+IHtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVkQ2hhbmdlLmFzT2JzZXJ2YWJsZSgpOyAvLyAucGlwZShmaWx0ZXIodyA9PiB3ICE9PSBudWxsKSk7XG4gIH1cbiAgLyoqIMOowofCqsOlwq7CmsOkwrnCicOlwr3Ck8OlwonCjcOmwqDCh8OpwqLCmCAqL1xuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IFJldXNlVGl0bGUpIHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmN1clVybDtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykgdmFsdWUgPSB7IHRleHQ6IHZhbHVlIH07XG4gICAgdGhpcy5fdGl0bGVDYWNoZWRbdXJsXSA9IHZhbHVlO1xuICAgIHRoaXMuZGkoJ3VwZGF0ZSBjdXJyZW50IHRhZyB0aXRsZTogJywgdmFsdWUpO1xuICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHtcbiAgICAgIGFjdGl2ZTogJ3RpdGxlJyxcbiAgICAgIHRpdGxlOiB2YWx1ZSxcbiAgICAgIGxpc3Q6IHRoaXMuX2NhY2hlZCxcbiAgICB9KTtcbiAgfVxuICAvKiogw6jCjsK3w6XCj8KWw6bCjMKHw6XCrsKaw6jCt8Kvw6XCvsKEw6fCvMKTw6XCrcKYw6bCicKAw6XCnMKow6TCvcKNw6fCvcKuw6/CvMKMYC0xYCDDqMKhwqjDp8KkwrrDpsKXwqDDp8K8wpPDpcKtwpggKi9cbiAgaW5kZXgodXJsOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jYWNoZWQuZmluZEluZGV4KHcgPT4gdy51cmwgPT09IHVybCk7XG4gIH1cbiAgLyoqIMOowo7Ct8Olwo/ClsOmwozCh8Olwq7CmsOowrfCr8Olwr7ChMOnwrzCk8Olwq3CmMOmwpjCr8OlwpDCpsOlwq3CmMOlwpzCqCAqL1xuICBleGlzdHModXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleCh1cmwpICE9PSAtMTtcbiAgfVxuICAvKiogw6jCjsK3w6XCj8KWw6bCjMKHw6XCrsKaw6jCt8Kvw6XCvsKEw6fCvMKTw6XCrcKYICovXG4gIGdldCh1cmw6IHN0cmluZyk6IFJldXNlVGFiQ2FjaGVkIHtcbiAgICByZXR1cm4gdXJsID8gdGhpcy5fY2FjaGVkLmZpbmQodyA9PiB3LnVybCA9PT0gdXJsKSB8fCBudWxsIDogbnVsbDtcbiAgfVxuICBwcml2YXRlIHJlbW92ZSh1cmw6IHN0cmluZyB8IG51bWJlciwgaW5jbHVkZU5vbkNsb3NlYWJsZTogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlkeCA9IHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnID8gdGhpcy5pbmRleCh1cmwpIDogdXJsO1xuICAgIGNvbnN0IGl0ZW0gPSBpZHggIT09IC0xID8gdGhpcy5fY2FjaGVkW2lkeF0gOiBudWxsO1xuICAgIGlmICghaXRlbSB8fCAoIWluY2x1ZGVOb25DbG9zZWFibGUgJiYgIWl0ZW0uY2xvc2FibGUpKSByZXR1cm4gZmFsc2U7XG5cbiAgICB0aGlzLmRlc3Ryb3koaXRlbS5faGFuZGxlKTtcblxuICAgIHRoaXMuX2NhY2hlZC5zcGxpY2UoaWR4LCAxKTtcbiAgICBkZWxldGUgdGhpcy5fdGl0bGVDYWNoZWRbdXJsXTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICogw6bCoMK5w6bCjcKuVVJMw6fCp8K7w6nCmcKkw6bCoMKHw6fCrcK+XG4gICAqXG4gICAqIEBwYXJhbSBbaW5jbHVkZU5vbkNsb3NlYWJsZT1mYWxzZV0gw6bCmMKvw6XCkMKmw6XCvMK6w6XCiMK2w6XCjMKFw6XCkMKrw6TCuMKNw6XCj8Kvw6XChcKzw6nCl8KtXG4gICAqL1xuICBjbG9zZSh1cmw6IHN0cmluZywgaW5jbHVkZU5vbkNsb3NlYWJsZSA9IGZhbHNlKSB7XG4gICAgdGhpcy5yZW1vdmVVcmxCdWZmZXIgPSB1cmw7XG5cbiAgICB0aGlzLnJlbW92ZSh1cmwsIGluY2x1ZGVOb25DbG9zZWFibGUpO1xuXG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoeyBhY3RpdmU6ICdjbG9zZScsIHVybCwgbGlzdDogdGhpcy5fY2FjaGVkIH0pO1xuXG4gICAgdGhpcy5kaSgnY2xvc2UgdGFnJywgdXJsKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICogw6bCuMKFw6nCmcKkw6XCj8Kzw6jCvsK5XG4gICAqXG4gICAqIEBwYXJhbSBbaW5jbHVkZU5vbkNsb3NlYWJsZT1mYWxzZV0gw6bCmMKvw6XCkMKmw6XCvMK6w6XCiMK2w6XCjMKFw6XCkMKrw6TCuMKNw6XCj8Kvw6XChcKzw6nCl8KtXG4gICAqL1xuICBjbG9zZVJpZ2h0KHVybDogc3RyaW5nLCBpbmNsdWRlTm9uQ2xvc2VhYmxlID0gZmFsc2UpIHtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuaW5kZXgodXJsKTtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jb3VudCAtIDE7IGkgPiBzdGFydDsgaS0tKSB7XG4gICAgICB0aGlzLnJlbW92ZShpLCBpbmNsdWRlTm9uQ2xvc2VhYmxlKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbW92ZVVybEJ1ZmZlciA9IG51bGw7XG5cbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7IGFjdGl2ZTogJ2Nsb3NlUmlnaHQnLCB1cmwsIGxpc3Q6IHRoaXMuX2NhY2hlZCB9KTtcblxuICAgIHRoaXMuZGkoJ2Nsb3NlIHJpZ2h0IHRhZ2VzJywgdXJsKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICogw6bCuMKFw6nCmcKkw6bCicKAw6bCnMKJw6fCvMKTw6XCrcKYXG4gICAqXG4gICAqIEBwYXJhbSBbaW5jbHVkZU5vbkNsb3NlYWJsZT1mYWxzZV0gw6bCmMKvw6XCkMKmw6XCvMK6w6XCiMK2w6XCjMKFw6XCkMKrw6TCuMKNw6XCj8Kvw6XChcKzw6nCl8KtXG4gICAqL1xuICBjbGVhcihpbmNsdWRlTm9uQ2xvc2VhYmxlID0gZmFsc2UpIHtcbiAgICB0aGlzLl9jYWNoZWQuZm9yRWFjaCh3ID0+IHtcbiAgICAgIGlmICghaW5jbHVkZU5vbkNsb3NlYWJsZSAmJiB3LmNsb3NhYmxlKSB0aGlzLmRlc3Ryb3kody5faGFuZGxlKTtcbiAgICB9KTtcbiAgICB0aGlzLl9jYWNoZWQgPSB0aGlzLl9jYWNoZWQuZmlsdGVyKFxuICAgICAgdyA9PiAhaW5jbHVkZU5vbkNsb3NlYWJsZSAmJiAhdy5jbG9zYWJsZSxcbiAgICApO1xuXG4gICAgdGhpcy5yZW1vdmVVcmxCdWZmZXIgPSBudWxsO1xuXG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoeyBhY3RpdmU6ICdjbGVhcicsIGxpc3Q6IHRoaXMuX2NhY2hlZCB9KTtcblxuICAgIHRoaXMuZGkoJ2NsZWFyIGFsbCBjYXRjaCcpO1xuICB9XG4gIC8qKlxuICAgKiDDp8KnwrvDpcKKwqjDp8K8wpPDpcKtwpjDpsKVwrDDpsKNwq5cbiAgICogQHBhcmFtIHVybCDDqMKmwoHDp8KnwrvDpcKKwqjDp8KawoRVUkzDpcKcwrDDpcKdwoBcbiAgICogQHBhcmFtIHBvc2l0aW9uIMOmwpbCsMOkwr3CjcOnwr3CrsOvwrzCjMOkwrjCi8OmwqDCh8OkwrvCjiBgMGAgw6XCvMKAw6XCp8KLXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYFxuICAgKiAvLyBzb3VyY2VcbiAgICogWyAnL2EvMScsICcvYS8yJywgJy9hLzMnLCAnL2EvNCcsICcvYS81JyBdXG4gICAqIG1vdmUoJy9hLzEnLCAyKTtcbiAgICogLy8gb3V0cHV0XG4gICAqIFsgJy9hLzInLCAnL2EvMycsICcvYS8xJywgJy9hLzQnLCAnL2EvNScgXVxuICAgKiBtb3ZlKCcvYS8xJywgLTEpO1xuICAgKiAvLyBvdXRwdXRcbiAgICogWyAnL2EvMicsICcvYS8zJywgJy9hLzQnLCAnL2EvNScsICcvYS8xJyBdXG4gICAqIGBgYFxuICAgKi9cbiAgbW92ZSh1cmw6IHN0cmluZywgcG9zaXRpb246IG51bWJlcikge1xuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5fY2FjaGVkLmZpbmRJbmRleCh3ID0+IHcudXJsID09PSB1cmwpO1xuICAgIGlmIChzdGFydCA9PT0gLTEpIHJldHVybjtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5fY2FjaGVkLnNsaWNlKCk7XG4gICAgZGF0YS5zcGxpY2UoXG4gICAgICBwb3NpdGlvbiA8IDAgPyBkYXRhLmxlbmd0aCArIHBvc2l0aW9uIDogcG9zaXRpb24sXG4gICAgICAwLFxuICAgICAgZGF0YS5zcGxpY2Uoc3RhcnQsIDEpWzBdLFxuICAgICk7XG4gICAgdGhpcy5fY2FjaGVkID0gZGF0YTtcbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7XG4gICAgICBhY3RpdmU6ICdtb3ZlJyxcbiAgICAgIHVybCxcbiAgICAgIHBvc2l0aW9uLFxuICAgICAgbGlzdDogdGhpcy5fY2FjaGVkLFxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiDDpcK8wrrDpcKIwrbDpcKFwrPDqcKXwq3DpcK9wpPDpcKJwo3DqMK3wq/Dp8KUwrHDr8K8wojDpcKMwoXDpcKQwqvDpMK4wo3DpcKPwq/DpcKFwrPDqcKXwq3Dp8KKwrbDpsKAwoHDr8K8wonDr8K8wozDpcK5wrbDqcKHwo3DpsKWwrDDpcKvwrzDqMKIwqrDqMKHwrMgYG5ld1VybGAgw6jCt8Kvw6fClMKxXG4gICAqL1xuICByZXBsYWNlKG5ld1VybDogc3RyaW5nKSB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5jdXJVcmw7XG4gICAgaWYgKHRoaXMuZXhpc3RzKHVybCkpIHtcbiAgICAgIHRoaXMuY2xvc2UodXJsLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVVcmxCdWZmZXIgPSB1cmw7XG4gICAgfVxuICAgIHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlcikubmF2aWdhdGVCeVVybChuZXdVcmwpO1xuICB9XG4gIC8qKlxuICAgKiDDqMKOwrfDpcKPwpbDpsKgwofDqcKiwpjDr8K8wozDqcKhwrrDpcK6wo/DpcKmwoLDpMK4wovDr8K8wppcbiAgICpcbiAgICogMS4gw6fCu8KEw6TCu8K2w6XChsKFw6TCvcK/w6fClMKoIGBSZXVzZVRhYlNlcnZpY2UudGl0bGUgPSAnbmV3IHRpdGxlJ2Agw6nCh8KNw6bClsKww6bCjMKHw6XCrsKaw6bClsKHw6bCnMKsXG4gICAqIDIuIMOowrfCr8OnwpTCscOpwoXCjcOnwr3CrsOkwrjCrSBkYXRhIMOlwrHCnsOmwoDCp8OkwrjCrcOlwozChcOlwpDCqyB0aXRsZUkxOG4gPiB0aXRsZVxuICAgKiAzLiDDqMKPwpzDpcKNwpXDpsKVwrDDpsKNwq7DpMK4wq0gdGV4dCDDpcKxwp7DpsKAwqdcbiAgICpcbiAgICogQHBhcmFtIHVybCDDpsKMwofDpcKuwppVUkxcbiAgICogQHBhcmFtIHJvdXRlIMOmwozCh8Olwq7CmsOowrfCr8OnwpTCscOlwr/Cq8OnwoXCp1xuICAgKi9cbiAgZ2V0VGl0bGUodXJsOiBzdHJpbmcsIHJvdXRlPzogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IFJldXNlVGl0bGUge1xuICAgIGlmICh0aGlzLl90aXRsZUNhY2hlZFt1cmxdKSByZXR1cm4gdGhpcy5fdGl0bGVDYWNoZWRbdXJsXTtcblxuICAgIGlmIChyb3V0ZSAmJiByb3V0ZS5kYXRhICYmIChyb3V0ZS5kYXRhLnRpdGxlSTE4biB8fCByb3V0ZS5kYXRhLnRpdGxlKSlcbiAgICAgIHJldHVybiA8UmV1c2VUaXRsZT57XG4gICAgICAgIHRleHQ6IHJvdXRlLmRhdGEudGl0bGUsXG4gICAgICAgIGkxOG46IHJvdXRlLmRhdGEudGl0bGVJMThuLFxuICAgICAgfTtcblxuICAgIGNvbnN0IG1lbnUgPVxuICAgICAgdGhpcy5tb2RlICE9PSBSZXVzZVRhYk1hdGNoTW9kZS5VUkwgPyB0aGlzLmdldE1lbnUodXJsKSA6IG51bGw7XG4gICAgcmV0dXJuIG1lbnUgPyB7IHRleHQ6IG1lbnUudGV4dCwgaTE4bjogbWVudS5pMThuIH0gOiB7IHRleHQ6IHVybCB9O1xuICB9XG5cbiAgLyoqXG4gICAqIMOmwrjChcOpwpnCpMOmwqDCh8OpwqLCmMOnwrzCk8Olwq3CmFxuICAgKi9cbiAgY2xlYXJUaXRsZUNhY2hlZCgpIHtcbiAgICB0aGlzLl90aXRsZUNhY2hlZCA9IHt9O1xuICB9XG4gIC8qKiDDqMKHwqrDpcKuwprDpMK5wonDpcK9wpPDpcKJwo0gYGNsb3NhYmxlYCDDp8KKwrbDpsKAwoEgKi9cbiAgc2V0IGNsb3NhYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5jdXJVcmw7XG4gICAgdGhpcy5fY2xvc2FibGVDYWNoZWRbdXJsXSA9IHZhbHVlO1xuICAgIHRoaXMuZGkoJ3VwZGF0ZSBjdXJyZW50IHRhZyBjbG9zYWJsZTogJywgdmFsdWUpO1xuICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHtcbiAgICAgIGFjdGl2ZTogJ2Nsb3NhYmxlJyxcbiAgICAgIGNsb3NhYmxlOiB2YWx1ZSxcbiAgICAgIGxpc3Q6IHRoaXMuX2NhY2hlZCxcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogw6jCjsK3w6XCj8KWIGBjbG9zYWJsZWAgw6fCisK2w6bCgMKBw6/CvMKMw6nCocK6w6XCusKPw6XCpsKCw6TCuMKLw6/CvMKaXG4gICAqXG4gICAqIDEuIMOnwrvChMOkwrvCtsOlwobChcOkwr3Cv8OnwpTCqCBgUmV1c2VUYWJTZXJ2aWNlLmNsb3NhYmxlID0gdHJ1ZWAgw6nCh8KNw6bClsKww6bCjMKHw6XCrsKaIGBjbG9zYWJsZWAgw6fCisK2w6bCgMKBXG4gICAqIDIuIMOowrfCr8OnwpTCscOpwoXCjcOnwr3CrsOkwrjCrSBkYXRhIMOlwrHCnsOmwoDCp8OkwrjCrcOlwozChcOlwpDCqyBgcmV1c2VDbG9zYWJsZWBcbiAgICogMy4gw6jCj8Kcw6XCjcKVw6bClcKww6bCjcKuw6TCuMKtIGByZXVzZUNsb3NhYmxlYCDDpcKxwp7DpsKAwqdcbiAgICpcbiAgICogQHBhcmFtIHVybCDDpsKMwofDpcKuwppVUkxcbiAgICogQHBhcmFtIHJvdXRlIMOmwozCh8Olwq7CmsOowrfCr8OnwpTCscOlwr/Cq8OnwoXCp1xuICAgKi9cbiAgZ2V0Q2xvc2FibGUodXJsOiBzdHJpbmcsIHJvdXRlPzogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIGlmICh0eXBlb2YgdGhpcy5fY2xvc2FibGVDYWNoZWRbdXJsXSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICByZXR1cm4gdGhpcy5fY2xvc2FibGVDYWNoZWRbdXJsXTtcblxuICAgIGlmIChyb3V0ZSAmJiByb3V0ZS5kYXRhICYmIHR5cGVvZiByb3V0ZS5kYXRhLnJldXNlQ2xvc2FibGUgPT09ICdib29sZWFuJylcbiAgICAgIHJldHVybiByb3V0ZS5kYXRhLnJldXNlQ2xvc2FibGU7XG5cbiAgICBjb25zdCBtZW51ID1cbiAgICAgIHRoaXMubW9kZSAhPT0gUmV1c2VUYWJNYXRjaE1vZGUuVVJMID8gdGhpcy5nZXRNZW51KHVybCkgOiBudWxsO1xuICAgIGlmIChtZW51ICYmIHR5cGVvZiBtZW51LnJldXNlQ2xvc2FibGUgPT09ICdib29sZWFuJylcbiAgICAgIHJldHVybiBtZW51LnJldXNlQ2xvc2FibGU7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICogw6bCuMKFw6fCqcK6IGBjbG9zYWJsZWAgw6fCvMKTw6XCrcKYXG4gICAqL1xuICBjbGVhckNsb3NhYmxlQ2FjaGVkKCkge1xuICAgIHRoaXMuX2Nsb3NhYmxlQ2FjaGVkID0ge307XG4gIH1cbiAgZ2V0VHJ1dGhSb3V0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCkge1xuICAgIGxldCBuZXh0ID0gcm91dGU7XG4gICAgd2hpbGUgKG5leHQuZmlyc3RDaGlsZCkgbmV4dCA9IG5leHQuZmlyc3RDaGlsZDtcbiAgICByZXR1cm4gbmV4dDtcbiAgfVxuICAvKipcbiAgICogw6bCoMK5w6bCjcKuw6XCv8Krw6fChcKnw6jCjsK3w6XCj8KWVVJMw6XCnMKww6XCncKAXG4gICAqL1xuICBnZXRVcmwocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBzdHJpbmcge1xuICAgIGxldCBuZXh0ID0gdGhpcy5nZXRUcnV0aFJvdXRlKHJvdXRlKTtcbiAgICBjb25zdCBzZWdtZW50cyA9IFtdO1xuICAgIHdoaWxlIChuZXh0KSB7XG4gICAgICBzZWdtZW50cy5wdXNoKG5leHQudXJsLmpvaW4oJy8nKSk7XG4gICAgICBuZXh0ID0gbmV4dC5wYXJlbnQ7XG4gICAgfVxuICAgIGNvbnN0IHVybCA9XG4gICAgICAnLycgK1xuICAgICAgc2VnbWVudHNcbiAgICAgICAgLmZpbHRlcihpID0+IGkpXG4gICAgICAgIC5yZXZlcnNlKClcbiAgICAgICAgLmpvaW4oJy8nKTtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIC8qKlxuICAgKiDDpsKjwoDDpsKfwqXDpcK/wqvDp8KFwqfDpsKYwq/DpcKQwqbDpcKFwoHDqMKuwrjDqMKiwqvDpcKkwo3Dp8KUwqhcbiAgICovXG4gIGNhbihyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXJsKHJvdXRlKTtcbiAgICBpZiAodXJsID09PSB0aGlzLnJlbW92ZVVybEJ1ZmZlcikgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKHJvdXRlLmRhdGEgJiYgdHlwZW9mIHJvdXRlLmRhdGEucmV1c2UgPT09ICdib29sZWFuJylcbiAgICAgIHJldHVybiByb3V0ZS5kYXRhLnJldXNlO1xuXG4gICAgaWYgKHRoaXMubW9kZSAhPT0gUmV1c2VUYWJNYXRjaE1vZGUuVVJMKSB7XG4gICAgICBjb25zdCBtZW51ID0gdGhpcy5nZXRNZW51KHVybCk7XG4gICAgICBpZiAoIW1lbnUpIHJldHVybiBmYWxzZTtcbiAgICAgIGlmICh0aGlzLm1vZGUgPT09IFJldXNlVGFiTWF0Y2hNb2RlLk1lbnUpIHtcbiAgICAgICAgaWYgKG1lbnUucmV1c2UgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIW1lbnUucmV1c2UgfHwgbWVudS5yZXVzZSAhPT0gdHJ1ZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9leGNsdWRlcy5maW5kSW5kZXgociA9PiByLnRlc3QodXJsKSkgPT09IC0xO1xuICB9XG4gIC8qKlxuICAgKiDDpcKIwrfDpsKWwrDDr8K8wozDqMKnwqbDpcKPwpHDpMK4woDDpMK4wqogcmVmcmVzaCDDp8KxwrvDpcKewovDpMK6wovDpMK7wrZcbiAgICovXG4gIHJlZnJlc2goZGF0YT86IGFueSkge1xuICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHsgYWN0aXZlOiAncmVmcmVzaCcsIGRhdGEgfSk7XG4gIH1cbiAgLy8gZW5kcmVnaW9uXG5cbiAgLy8gcmVnaW9uOiBwcml2YXRlc1xuXG4gIHByaXZhdGUgZGVzdHJveShfaGFuZGxlOiBhbnkpIHtcbiAgICBpZiAoX2hhbmRsZSAmJiBfaGFuZGxlLmNvbXBvbmVudFJlZiAmJiBfaGFuZGxlLmNvbXBvbmVudFJlZi5kZXN0cm95KVxuICAgICAgX2hhbmRsZS5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBkaSguLi5hcmdzKSB7XG4gICAgaWYgKCF0aGlzLmRlYnVnKSByZXR1cm47XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oLi4uYXJncyk7XG4gIH1cblxuICAvLyBlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSBtZW51U2VydmljZTogTWVudVNlcnZpY2UpIHt9XG5cbiAgcHJpdmF0ZSBnZXRNZW51KHVybDogc3RyaW5nKSB7XG4gICAgY29uc3QgbWVudXMgPSB0aGlzLm1lbnVTZXJ2aWNlLmdldFBhdGhCeVVybCh1cmwpO1xuICAgIGlmICghbWVudXMgfHwgbWVudXMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gbWVudXMucG9wKCk7XG4gIH1cblxuICBwcml2YXRlIHJ1bkhvb2sobWV0aG9kOiBzdHJpbmcsIHVybDogc3RyaW5nLCBjb21wOiBhbnkpIHtcbiAgICBpZiAoY29tcC5pbnN0YW5jZSAmJiB0eXBlb2YgY29tcC5pbnN0YW5jZVttZXRob2RdID09PSAnZnVuY3Rpb24nKVxuICAgICAgY29tcC5pbnN0YW5jZVttZXRob2RdKCk7XG4gIH1cblxuICBwcml2YXRlIGhhc0luVmFsaWRSb3V0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCkge1xuICAgIHJldHVybiAoXG4gICAgICAhcm91dGUucm91dGVDb25maWcgfHxcbiAgICAgIHJvdXRlLnJvdXRlQ29uZmlnLmxvYWRDaGlsZHJlbiB8fFxuICAgICAgcm91dGUucm91dGVDb25maWcuY2hpbGRyZW5cbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIMOlwobCs8Olwq7CmsOmwpjCr8OlwpDCpsOlwoXCgcOowq7CuMOowrfCr8OnwpTCscOlwqTCjcOnwpTCqMOvwrzCjMOowovCpSBgdHJ1ZWAgw6TCvMKaw6jCp8Kmw6XCj8KRIGBzdG9yZWBcbiAgICovXG4gIHNob3VsZERldGFjaChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmhhc0luVmFsaWRSb3V0ZShyb3V0ZSkpIHJldHVybiBmYWxzZTtcbiAgICB0aGlzLmRpKCcjc2hvdWxkRGV0YWNoJywgdGhpcy5jYW4ocm91dGUpLCB0aGlzLmdldFVybChyb3V0ZSkpO1xuICAgIHJldHVybiB0aGlzLmNhbihyb3V0ZSk7XG4gIH1cblxuICAvKipcbiAgICogw6XCrcKYw6XCgsKoXG4gICAqL1xuICBzdG9yZShfc25hcHNob3Q6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIF9oYW5kbGU6IGFueSkge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXJsKF9zbmFwc2hvdCk7XG4gICAgY29uc3QgaWR4ID0gdGhpcy5pbmRleCh1cmwpO1xuXG4gICAgY29uc3QgaXRlbTogUmV1c2VUYWJDYWNoZWQgPSB7XG4gICAgICB0aXRsZTogdGhpcy5nZXRUaXRsZSh1cmwsIF9zbmFwc2hvdCksXG4gICAgICBjbG9zYWJsZTogdGhpcy5nZXRDbG9zYWJsZSh1cmwsIF9zbmFwc2hvdCksXG4gICAgICB1cmwsXG4gICAgICBfc25hcHNob3QsXG4gICAgICBfaGFuZGxlLFxuICAgIH07XG4gICAgaWYgKGlkeCA9PT0gLTEpIHtcbiAgICAgIHRoaXMuX2NhY2hlZC5wdXNoKGl0ZW0pO1xuICAgICAgaWYgKHRoaXMuY291bnQgPiB0aGlzLl9tYXgpIHRoaXMuX2NhY2hlZC5zaGlmdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jYWNoZWRbaWR4XSA9IGl0ZW07XG4gICAgfVxuICAgIHRoaXMucmVtb3ZlVXJsQnVmZmVyID0gbnVsbDtcblxuICAgIHRoaXMuZGkoJyNzdG9yZScsIGlkeCA9PT0gLTEgPyAnW25ld10nIDogJ1tvdmVycmlkZV0nLCB1cmwpO1xuXG4gICAgaWYgKF9oYW5kbGUgJiYgX2hhbmRsZS5jb21wb25lbnRSZWYpIHtcbiAgICAgIHRoaXMucnVuSG9vaygnX29uUmV1c2VEZXN0cm95JywgdXJsLCBfaGFuZGxlLmNvbXBvbmVudFJlZik7XG4gICAgfVxuXG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoeyBhY3RpdmU6ICdhZGQnLCBpdGVtLCBsaXN0OiB0aGlzLl9jYWNoZWQgfSk7XG4gIH1cblxuICAvKipcbiAgICogw6XChsKzw6XCrsKaw6bCmMKvw6XCkMKmw6XChcKBw6jCrsK4w6XCusKUw6fClMKow6fCvMKTw6XCrcKYw6bClcKww6bCjcKuXG4gICAqL1xuICBzaG91bGRBdHRhY2gocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5oYXNJblZhbGlkUm91dGUocm91dGUpKSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRVcmwocm91dGUpO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldCh1cmwpO1xuICAgIGNvbnN0IHJldCA9ICEhKGRhdGEgJiYgZGF0YS5faGFuZGxlKTtcbiAgICB0aGlzLmRpKCcjc2hvdWxkQXR0YWNoJywgcmV0LCB1cmwpO1xuICAgIGlmIChyZXQgJiYgZGF0YS5faGFuZGxlLmNvbXBvbmVudFJlZikge1xuICAgICAgdGhpcy5ydW5Ib29rKCdfb25SZXVzZUluaXQnLCB1cmwsIGRhdGEuX2hhbmRsZS5jb21wb25lbnRSZWYpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIMOmwo/CkMOlwo/ClsOlwqTCjcOnwpTCqMOmwpXCsMOmwo3CrlxuICAgKi9cbiAgcmV0cmlldmUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiB7fSB7XG4gICAgaWYgKHRoaXMuaGFzSW5WYWxpZFJvdXRlKHJvdXRlKSkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRVcmwocm91dGUpO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldCh1cmwpO1xuICAgIGNvbnN0IHJldCA9IChkYXRhICYmIGRhdGEuX2hhbmRsZSkgfHwgbnVsbDtcbiAgICB0aGlzLmRpKCcjcmV0cmlldmUnLCB1cmwsIHJldCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpcKGwrPDpcKuwprDpsKYwq/DpcKQwqbDpcK6wpTDqMKvwqXDqMK/wpvDqMKhwozDpcKkwo3Dp8KUwqjDqMK3wq/Dp8KUwrHDpcKkwoTDp8KQwoZcbiAgICovXG4gIHNob3VsZFJldXNlUm91dGUoXG4gICAgZnV0dXJlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIGN1cnI6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICk6IGJvb2xlYW4ge1xuICAgIGxldCByZXQgPSBmdXR1cmUucm91dGVDb25maWcgPT09IGN1cnIucm91dGVDb25maWc7XG4gICAgaWYgKCFyZXQpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IHBhdGggPSAoKGZ1dHVyZS5yb3V0ZUNvbmZpZyAmJiBmdXR1cmUucm91dGVDb25maWcucGF0aCkgfHxcbiAgICAgICcnKSBhcyBzdHJpbmc7XG4gICAgaWYgKHBhdGgubGVuZ3RoID4gMCAmJiB+cGF0aC5pbmRleE9mKCc6JykpIHtcbiAgICAgIGNvbnN0IGZ1dHVyZVVybCA9IHRoaXMuZ2V0VXJsKGZ1dHVyZSk7XG4gICAgICBjb25zdCBjdXJyVXJsID0gdGhpcy5nZXRVcmwoY3Vycik7XG4gICAgICByZXQgPSBmdXR1cmVVcmwgPT09IGN1cnJVcmw7XG4gICAgfVxuICAgIHRoaXMuZGkoJz09PT09PT09PT09PT09PT09PT09PScpO1xuICAgIHRoaXMuZGkoXG4gICAgICAnI3Nob3VsZFJldXNlUm91dGUnLFxuICAgICAgcmV0LFxuICAgICAgYCR7dGhpcy5nZXRVcmwoY3Vycil9PT4ke3RoaXMuZ2V0VXJsKGZ1dHVyZSl9YCxcbiAgICAgIGZ1dHVyZSxcbiAgICAgIGN1cnIsXG4gICAgKTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fY2FjaGVkID0gW107XG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgT25DaGFuZ2VzLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25Jbml0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2UsXG4gIE9uRGVzdHJveSxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxuICBJbmplY3QsXG4gIE9wdGlvbmFsLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkVuZCwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElucHV0TnVtYmVyLCBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBBTEFJTl9JMThOX1RPS0VOLCBBbGFpbkkxOE5TZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcblxuaW1wb3J0IHsgUmV1c2VUYWJTZXJ2aWNlIH0gZnJvbSAnLi9yZXVzZS10YWIuc2VydmljZSc7XG5pbXBvcnQge1xuICBSZXVzZVRhYkNhY2hlZCxcbiAgUmV1c2VUYWJOb3RpZnksXG4gIFJldXNlVGFiTWF0Y2hNb2RlLFxuICBSZXVzZUl0ZW0sXG4gIFJldXNlQ29udGV4dEkxOG4sXG4gIFJldXNlQ29udGV4dENsb3NlRXZlbnQsXG4gIFJldXNlVGl0bGUsXG59IGZyb20gJy4vcmV1c2UtdGFiLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgUmV1c2VUYWJDb250ZXh0U2VydmljZSB9IGZyb20gJy4vcmV1c2UtdGFiLWNvbnRleHQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JldXNlLXRhYicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXVzZS10YWIuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHByb3ZpZGVyczogW1JldXNlVGFiQ29udGV4dFNlcnZpY2VdLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5yZXVzZS10YWJdJzogJ3RydWUnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBSZXVzZVRhYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBzdWIkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgaTE4biQ6IFN1YnNjcmlwdGlvbjtcbiAgbGlzdDogUmV1c2VJdGVtW10gPSBbXTtcbiAgaXRlbTogUmV1c2VJdGVtO1xuICBwb3MgPSAwO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgLyoqIMOowq7CvsOnwr3CrsOlwozCucOpwoXCjcOmwqjCocOlwrzCjyAqL1xuICBASW5wdXQoKVxuICBtb2RlOiBSZXVzZVRhYk1hdGNoTW9kZSA9IFJldXNlVGFiTWF0Y2hNb2RlLk1lbnU7XG4gIC8qKiDDqcKAwonDqcKhwrnDpsKWwofDpsKcwqzDpcKbwr3DqcKZwoXDpcKMwpYgKi9cbiAgQElucHV0KClcbiAgaTE4bjogUmV1c2VDb250ZXh0STE4bjtcbiAgLyoqIMOmwpjCr8OlwpDCpkRlYnVnw6bCqMKhw6XCvMKPICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBkZWJ1ZyA9IGZhbHNlO1xuICAvKiogw6XChcKBw6jCrsK4w6bCnMKAw6XCpMKaw6XCpMKNw6fClMKow6XCpMKaw6XCsMKRw6TCuMKqw6nCocK1w6nCncKiICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcigpXG4gIG1heDogbnVtYmVyO1xuICAvKiogw6bCjsKSw6nCmcKkw6jCp8KEw6XCiMKZw6/CvMKMw6nCmcKQIGBtb2RlPVVSTGAgKi9cbiAgQElucHV0KClcbiAgZXhjbHVkZXM6IFJlZ0V4cFtdO1xuICAvKiogw6XChcKBw6jCrsK4w6XChcKzw6nCl8KtICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBhbGxvd0Nsb3NlID0gdHJ1ZTtcbiAgLyoqIMOmwoDCu8OmwpjCr8OmwpjCvsOnwqTCusOlwr3Ck8OlwonCjcOpwqHCtSAqL1xuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgc2hvd0N1cnJlbnQgPSB0cnVlO1xuICAvKiogw6XCiMKHw6bCjcKiw6bCl8K2w6XCm8Kew6jCsMKDICovXG4gIEBPdXRwdXQoKVxuICBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxSZXVzZUl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcjxSZXVzZUl0ZW0+KCk7XG4gIC8qKiDDpcKFwrPDqcKXwq3DpcKbwp7DqMKwwoMgKi9cbiAgQE91dHB1dCgpXG4gIGNsb3NlOiBFdmVudEVtaXR0ZXI8UmV1c2VJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXI8UmV1c2VJdGVtPigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihcbiAgICBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHNydjogUmV1c2VUYWJTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSByZW5kZXI6IFJlbmRlcmVyMixcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTilcbiAgICBwcml2YXRlIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXG4gICkge1xuICAgIHRoaXMuZWwgPSBlbC5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHJvdXRlJCA9IHRoaXMucm91dGVyLmV2ZW50cy5waXBlKFxuICAgICAgZmlsdGVyKGV2dCA9PiBldnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSxcbiAgICApO1xuICAgIHRoaXMuc3ViJCA9IGNvbWJpbmVMYXRlc3QodGhpcy5zcnYuY2hhbmdlLCByb3V0ZSQpLnN1YnNjcmliZSgoW3JlcywgZV0pID0+XG4gICAgICB0aGlzLmdlbkxpc3QocmVzIGFzIGFueSksXG4gICAgKTtcbiAgICBpZiAodGhpcy5pMThuU3J2KSB7XG4gICAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuU3J2LmNoYW5nZVxuICAgICAgICAucGlwZShkZWJvdW5jZVRpbWUoMTAwKSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmdlbkxpc3QoKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZW5UaXQodGl0bGU6IFJldXNlVGl0bGUpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aXRsZS5pMThuICYmIHRoaXMuaTE4blNydlxuICAgICAgPyB0aGlzLmkxOG5TcnYuZmFueWkodGl0bGUuaTE4bilcbiAgICAgIDogdGl0bGUudGV4dDtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuTGlzdChub3RpZnk/OiBSZXVzZVRhYk5vdGlmeSkge1xuICAgIGNvbnN0IGlzQ2xvc2VkID0gbm90aWZ5ICYmIG5vdGlmeS5hY3RpdmUgPT09ICdjbG9zZSc7XG4gICAgY29uc3QgYmVmb3JlQ2xvc2VQb3MgPSBpc0Nsb3NlZFxuICAgICAgPyB0aGlzLmxpc3QuZmluZEluZGV4KHcgPT4gdy51cmwgPT09IG5vdGlmeS51cmwpXG4gICAgICA6IC0xO1xuICAgIGNvbnN0IGxzID0gdGhpcy5zcnYuaXRlbXMubWFwKChpdGVtOiBSZXVzZVRhYkNhY2hlZCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgcmV0dXJuIDxSZXVzZUl0ZW0+e1xuICAgICAgICB1cmw6IGl0ZW0udXJsLFxuICAgICAgICB0aXRsZTogdGhpcy5nZW5UaXQoaXRlbS50aXRsZSksXG4gICAgICAgIGNsb3NhYmxlOiB0aGlzLmFsbG93Q2xvc2UgJiYgaXRlbS5jbG9zYWJsZSAmJiB0aGlzLnNydi5jb3VudCA+IDAsXG4gICAgICAgIGluZGV4LFxuICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICBsYXN0OiBmYWxzZSxcbiAgICAgIH07XG4gICAgfSk7XG4gICAgaWYgKHRoaXMuc2hvd0N1cnJlbnQpIHtcbiAgICAgIGNvbnN0IHNuYXBzaG90ID0gdGhpcy5yb3V0ZS5zbmFwc2hvdDtcbiAgICAgIGNvbnN0IHVybCA9IHRoaXMuc3J2LmdldFVybChzbmFwc2hvdCk7XG4gICAgICBjb25zdCBpZHggPSBscy5maW5kSW5kZXgodyA9PiB3LnVybCA9PT0gdXJsKTtcbiAgICAgIC8vIGp1bXAgZGlyZWN0bHkgd2hlbiB0aGUgY3VycmVudCBleGlzdHMgaW4gdGhlIGxpc3RcbiAgICAgIC8vIG9yIGNyZWF0ZSBhIG5ldyBjdXJyZW50IGl0ZW0gYW5kIGp1bXBcbiAgICAgIGlmIChpZHggIT09IC0xIHx8IChpc0Nsb3NlZCAmJiBub3RpZnkudXJsID09PSB1cmwpKSB7XG4gICAgICAgIHRoaXMucG9zID0gaXNDbG9zZWRcbiAgICAgICAgICA/IGlkeCA+PSBiZWZvcmVDbG9zZVBvc1xuICAgICAgICAgICAgPyB0aGlzLnBvcyAtIDFcbiAgICAgICAgICAgIDogdGhpcy5wb3NcbiAgICAgICAgICA6IGlkeDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHNuYXBzaG90VHJ1ZSA9IHRoaXMuc3J2LmdldFRydXRoUm91dGUoc25hcHNob3QpO1xuICAgICAgICBscy5wdXNoKDxSZXVzZUl0ZW0+e1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICB0aXRsZTogdGhpcy5nZW5UaXQodGhpcy5zcnYuZ2V0VGl0bGUodXJsLCBzbmFwc2hvdFRydWUpKSxcbiAgICAgICAgICBjbG9zYWJsZTpcbiAgICAgICAgICAgIHRoaXMuYWxsb3dDbG9zZSAmJlxuICAgICAgICAgICAgdGhpcy5zcnYuY291bnQgPiAwICYmXG4gICAgICAgICAgICB0aGlzLnNydi5nZXRDbG9zYWJsZSh1cmwsIHNuYXBzaG90VHJ1ZSksXG4gICAgICAgICAgaW5kZXg6IGxzLmxlbmd0aCxcbiAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgIGxhc3Q6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wb3MgPSBscy5sZW5ndGggLSAxO1xuICAgICAgfVxuICAgICAgLy8gZml4IHVuYWJsZWQgY2xvc2UgbGFzdCBpdGVtXG4gICAgICBpZiAobHMubGVuZ3RoIDw9IDEpIGxzWzBdLmNsb3NhYmxlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5saXN0ID0gbHM7XG5cbiAgICBpZiAobHMubGVuZ3RoICYmIGlzQ2xvc2VkKSB7XG4gICAgICB0aGlzLnRvKG51bGwsIHRoaXMucG9zKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlZlN0YXR1cyhmYWxzZSk7XG4gICAgdGhpcy52aXNpYmlsaXR5KCk7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIHZpc2liaWxpdHkoKSB7XG4gICAgaWYgKHRoaXMuc2hvd0N1cnJlbnQpIHJldHVybjtcbiAgICB0aGlzLnJlbmRlci5zZXRTdHlsZShcbiAgICAgIHRoaXMuZWwsXG4gICAgICAnZGlzcGxheScsXG4gICAgICB0aGlzLmxpc3QubGVuZ3RoID09PSAwID8gJ25vbmUnIDogJ2Jsb2NrJyxcbiAgICApO1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBVSVxuXG4gIGNtQ2hhbmdlKHJlczogUmV1c2VDb250ZXh0Q2xvc2VFdmVudCkge1xuICAgIHN3aXRjaCAocmVzLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2Nsb3NlJzpcbiAgICAgICAgdGhpcy5fY2xvc2UobnVsbCwgcmVzLml0ZW0uaW5kZXgsIHJlcy5pbmNsdWRlTm9uQ2xvc2VhYmxlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjbG9zZVJpZ2h0JzpcbiAgICAgICAgdGhpcy5zcnYuY2xvc2VSaWdodChyZXMuaXRlbS51cmwsIHJlcy5pbmNsdWRlTm9uQ2xvc2VhYmxlKTtcbiAgICAgICAgdGhpcy5jbG9zZS5lbWl0KG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NsZWFyJzpcbiAgICAgIGNhc2UgJ2Nsb3NlT3RoZXInOlxuICAgICAgICB0aGlzLnNydi5jbGVhcihyZXMuaW5jbHVkZU5vbkNsb3NlYWJsZSk7XG4gICAgICAgIHRoaXMuY2xvc2UuZW1pdChudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmVmU3RhdHVzKGRjID0gdHJ1ZSkge1xuICAgIGlmICh0aGlzLmxpc3QubGVuZ3RoKSB7XG4gICAgICB0aGlzLmxpc3RbdGhpcy5saXN0Lmxlbmd0aCAtIDFdLmxhc3QgPSB0cnVlO1xuICAgICAgdGhpcy5saXN0LmZvckVhY2goKGksIGlkeCkgPT4gKGkuYWN0aXZlID0gdGhpcy5wb3MgPT09IGlkeCkpO1xuICAgIH1cbiAgICBpZiAoZGMpIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgdG8oZTogRXZlbnQsIGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgaW5kZXggPSBNYXRoLm1heCgwLCBNYXRoLm1pbihpbmRleCwgdGhpcy5saXN0Lmxlbmd0aCAtIDEpKTtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5saXN0W2luZGV4XTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGl0ZW0udXJsKS50aGVuKHJlcyA9PiB7XG4gICAgICBpZiAoIXJlcykgcmV0dXJuO1xuICAgICAgdGhpcy5wb3MgPSBpbmRleDtcbiAgICAgIHRoaXMuaXRlbSA9IGl0ZW07XG4gICAgICB0aGlzLnJlZlN0YXR1cygpO1xuICAgICAgdGhpcy5jaGFuZ2UuZW1pdChpdGVtKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9jbG9zZShlOiBFdmVudCwgaWR4OiBudW1iZXIsIGluY2x1ZGVOb25DbG9zZWFibGU6IGJvb2xlYW4pIHtcbiAgICBpZiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgY29uc3QgaXRlbSA9IHRoaXMubGlzdFtpZHhdO1xuICAgIHRoaXMuc3J2LmNsb3NlKGl0ZW0udXJsLCBpbmNsdWRlTm9uQ2xvc2VhYmxlKTtcbiAgICB0aGlzLmNsb3NlLmVtaXQoaXRlbSk7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZ2VuTGlzdCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoXG4gICAgY2hhbmdlczogeyBbUCBpbiBrZXlvZiB0aGlzXT86IFNpbXBsZUNoYW5nZSB9ICYgU2ltcGxlQ2hhbmdlcyxcbiAgKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubWF4KSB0aGlzLnNydi5tYXggPSB0aGlzLm1heDtcbiAgICBpZiAoY2hhbmdlcy5leGNsdWRlcykgdGhpcy5zcnYuZXhjbHVkZXMgPSB0aGlzLmV4Y2x1ZGVzO1xuICAgIGlmIChjaGFuZ2VzLm1vZGUpIHRoaXMuc3J2Lm1vZGUgPSB0aGlzLm1vZGU7XG4gICAgdGhpcy5zcnYuZGVidWcgPSB0aGlzLmRlYnVnO1xuXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGkxOG4kLCBzdWIkIH0gPSB0aGlzO1xuICAgIHN1YiQudW5zdWJzY3JpYmUoKTtcbiAgICBpZiAoaTE4biQpIGkxOG4kLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFJvdXRlUmV1c2VTdHJhdGVneSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSZXVzZVRhYlNlcnZpY2UgfSBmcm9tICcuL3JldXNlLXRhYi5zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIFJldXNlVGFiU3RyYXRlZ3kgaW1wbGVtZW50cyBSb3V0ZVJldXNlU3RyYXRlZ3kge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNydjogUmV1c2VUYWJTZXJ2aWNlKSB7fVxuXG4gIHNob3VsZERldGFjaChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNydi5zaG91bGREZXRhY2gocm91dGUpO1xuICB9XG4gIHN0b3JlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBoYW5kbGU6IHt9KTogdm9pZCB7XG4gICAgdGhpcy5zcnYuc3RvcmUocm91dGUsIGhhbmRsZSk7XG4gIH1cbiAgc2hvdWxkQXR0YWNoKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3J2LnNob3VsZEF0dGFjaChyb3V0ZSk7XG4gIH1cbiAgcmV0cmlldmUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiB7fSB7XG4gICAgcmV0dXJuIHRoaXMuc3J2LnJldHJpZXZlKHJvdXRlKTtcbiAgfVxuICBzaG91bGRSZXVzZVJvdXRlKFxuICAgIGZ1dHVyZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBjdXJyOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICApOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zcnYuc2hvdWxkUmV1c2VSb3V0ZShmdXR1cmUsIGN1cnIpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgTmdab3Jyb0FudGRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcbmltcG9ydCB7IERlbG9uTG9jYWxlTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcblxuaW1wb3J0IHsgUmV1c2VUYWJDb21wb25lbnQgfSBmcm9tICcuL3JldXNlLXRhYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmV1c2VUYWJDb250ZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9yZXVzZS10YWItY29udGV4dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmV1c2VUYWJDb250ZXh0RGlyZWN0aXZlIH0gZnJvbSAnLi9yZXVzZS10YWItY29udGV4dC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUmV1c2VUYWJDb250ZXh0TWVudUNvbXBvbmVudCB9IGZyb20gJy4vcmV1c2UtdGFiLWNvbnRleHQtbWVudS5jb21wb25lbnQnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW1JldXNlVGFiQ29tcG9uZW50XTtcbmNvbnN0IE5PRVhQT1JUUyA9IFtcbiAgUmV1c2VUYWJDb250ZXh0TWVudUNvbXBvbmVudCxcbiAgUmV1c2VUYWJDb250ZXh0Q29tcG9uZW50LFxuICBSZXVzZVRhYkNvbnRleHREaXJlY3RpdmUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBEZWxvbkxvY2FsZU1vZHVsZSxcbiAgICBOZ1pvcnJvQW50ZE1vZHVsZSxcbiAgICBPdmVybGF5TW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTLCAuLi5OT0VYUE9SVFNdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtSZXVzZVRhYkNvbnRleHRNZW51Q29tcG9uZW50XSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxufSlcbmV4cG9ydCBjbGFzcyBSZXVzZVRhYk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogUmV1c2VUYWJNb2R1bGUsXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkV2ZW50RW1pdHRlciIsIkNvbXBvbmVudCIsIkRlbG9uTG9jYWxlU2VydmljZSIsIklucHV0IiwiT3V0cHV0IiwiSG9zdExpc3RlbmVyIiwib3ZlcmxheSIsIlN1YmplY3QiLCJFbGVtZW50UmVmIiwiQ29ubmVjdGlvblBvc2l0aW9uUGFpciIsIkNvbXBvbmVudFBvcnRhbCIsIlN1YnNjcmlwdGlvbiIsIkluamVjdGFibGUiLCJPdmVybGF5IiwiRGlyZWN0aXZlIiwiQmVoYXZpb3JTdWJqZWN0IiwiQWN0aXZhdGVkUm91dGUiLCJSb3V0ZXIiLCJJbmplY3RvciIsIk1lbnVTZXJ2aWNlIiwicm91dGVyIiwiZmlsdGVyIiwiTmF2aWdhdGlvbkVuZCIsImNvbWJpbmVMYXRlc3QiLCJkZWJvdW5jZVRpbWUiLCJDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSIsIkNoYW5nZURldGVjdG9yUmVmIiwiUmVuZGVyZXIyIiwiT3B0aW9uYWwiLCJJbmplY3QiLCJBTEFJTl9JMThOX1RPS0VOIiwiSW5wdXRCb29sZWFuIiwiSW5wdXROdW1iZXIiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIlJvdXRlck1vZHVsZSIsIkRlbG9uTG9jYWxlTW9kdWxlIiwiTmdab3Jyb0FudGRNb2R1bGUiLCJPdmVybGF5TW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFtREUsc0NBQW9CLE9BQTJCO1lBQTNCLFlBQU8sR0FBUCxPQUFPLENBQW9CO3lCQU52QyxJQUFJQSxlQUFZLEVBQTBCO1NBTUM7UUFyQm5ELHNCQUNJLDhDQUFJOzs7Z0JBR1I7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ25COzs7O2dCQU5ELFVBQ1MsS0FBdUI7Z0JBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDekU7OztXQUFBO1FBY0Qsc0JBQUksNkRBQW1COzs7Z0JBQXZCO2dCQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7YUFDM0I7OztXQUFBOzs7Ozs7UUFJTyw2Q0FBTTs7Ozs7c0JBQUMsSUFBZSxFQUFFLElBQWU7Z0JBQzdD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