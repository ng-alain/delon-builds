/**
 * @license ng-alain(cipchk@qq.com) v2.0.0-beta.5-549f25f
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
        // #endregion
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
            // #region public
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
                        template: "<nz-tabset [nzSelectedIndex]=\"pos\" [nzAnimated]=\"false\" nzType=\"line\">\n  <nz-tab *ngFor=\"let i of list; let index = index\" [nzTitle]=\"titleTemplate\">\n    <ng-template #titleTemplate>\n      <span [reuse-tab-context-menu]=\"i\" (click)=\"to($event, index)\" class=\"name\">{{i.title}}</span>\n      <i *ngIf=\"i.closable\" nz-icon type=\"close\" class=\"reuse-tab__op\" (click)=\"_close($event, index, false)\"></i>\n    </ng-template>\n  </nz-tab>\n</nz-tabset>\n<reuse-tab-context [i18n]=\"i18n\" (change)=\"cmChange($event)\"></reuse-tab-context>\n",
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2VUYWIudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vYWJjL3JldXNlLXRhYi9yZXVzZS10YWItY29udGV4dC1tZW51LmNvbXBvbmVudC50cyIsIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL0BkZWxvbi9hYmMvcmV1c2UtdGFiL3JldXNlLXRhYi1jb250ZXh0LnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi9hYmMvcmV1c2UtdGFiL3JldXNlLXRhYi1jb250ZXh0LmNvbXBvbmVudC50cyIsIm5nOi8vQGRlbG9uL2FiYy9yZXVzZS10YWIvcmV1c2UtdGFiLWNvbnRleHQuZGlyZWN0aXZlLnRzIiwibmc6Ly9AZGVsb24vYWJjL3JldXNlLXRhYi9yZXVzZS10YWIuaW50ZXJmYWNlcy50cyIsIm5nOi8vQGRlbG9uL2FiYy9yZXVzZS10YWIvcmV1c2UtdGFiLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi9hYmMvcmV1c2UtdGFiL3JldXNlLXRhYi5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9hYmMvcmV1c2UtdGFiL3JldXNlLXRhYi5zdHJhdGVneS50cyIsIm5nOi8vQGRlbG9uL2FiYy9yZXVzZS10YWIvcmV1c2UtdGFiLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dCxcbiAgSG9zdExpc3RlbmVyLFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGVsb25Mb2NhbGVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcblxuaW1wb3J0IHtcbiAgUmV1c2VDb250ZXh0STE4bixcbiAgUmV1c2VDb250ZXh0Q2xvc2VFdmVudCxcbiAgUmV1c2VJdGVtLFxuICBDbG9zZVR5cGUsXG59IGZyb20gJy4vcmV1c2UtdGFiLmludGVyZmFjZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyZXVzZS10YWItY29udGV4dC1tZW51JyxcbiAgdGVtcGxhdGU6IGBcbiAgPHVsIG56LW1lbnU+XG4gICAgICA8bGkgbnotbWVudS1pdGVtIChjbGljayk9XCJjbGljaygkZXZlbnQsICdjbG9zZScpXCIgZGF0YS10eXBlPVwiY2xvc2VcIiBbbnpEaXNhYmxlZF09XCIhaXRlbS5jbG9zYWJsZVwiIFtpbm5lckhUTUxdPVwiaTE4bi5jbG9zZVwiPjwvbGk+XG4gICAgICA8bGkgbnotbWVudS1pdGVtIChjbGljayk9XCJjbGljaygkZXZlbnQsICdjbG9zZU90aGVyJylcIiBkYXRhLXR5cGU9XCJjbG9zZU90aGVyXCIgW2lubmVySFRNTF09XCJpMThuLmNsb3NlT3RoZXJcIj48L2xpPlxuICAgICAgPGxpIG56LW1lbnUtaXRlbSAoY2xpY2spPVwiY2xpY2soJGV2ZW50LCAnY2xvc2VSaWdodCcpXCIgZGF0YS10eXBlPVwiY2xvc2VSaWdodFwiIFtuekRpc2FibGVkXT1cIml0ZW0ubGFzdFwiIFtpbm5lckhUTUxdPVwiaTE4bi5jbG9zZVJpZ2h0XCI+PC9saT5cbiAgICAgIDxsaSBuei1tZW51LWl0ZW0gKGNsaWNrKT1cImNsaWNrKCRldmVudCwgJ2NsZWFyJylcIiBkYXRhLXR5cGU9XCJjbGVhclwiIFtpbm5lckhUTUxdPVwiaTE4bi5jbGVhclwiPjwvbGk+XG4gIDwvdWw+YCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFJldXNlVGFiQ29udGV4dE1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9pMThuOiBSZXVzZUNvbnRleHRJMThuO1xuICBASW5wdXQoKVxuICBzZXQgaTE4bih2YWx1ZTogUmV1c2VDb250ZXh0STE4bikge1xuICAgIHRoaXMuX2kxOG4gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmkxOG5TcnYuZ2V0RGF0YSgncmV1c2VUYWInKSwgdmFsdWUpO1xuICB9XG4gIGdldCBpMThuKCkge1xuICAgIHJldHVybiB0aGlzLl9pMThuO1xuICB9XG5cbiAgQElucHV0KClcbiAgaXRlbTogUmV1c2VJdGVtO1xuXG4gIEBJbnB1dCgpXG4gIGV2ZW50OiBNb3VzZUV2ZW50O1xuXG4gIEBPdXRwdXQoKVxuICBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8UmV1c2VDb250ZXh0Q2xvc2VFdmVudD4oKTtcblxuICBnZXQgaW5jbHVkZU5vbkNsb3NlYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ldmVudC5jdHJsS2V5O1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuU3J2OiBEZWxvbkxvY2FsZVNlcnZpY2UpIHt9XG5cbiAgcHJpdmF0ZSBub3RpZnkodHlwZTogQ2xvc2VUeXBlLCBpdGVtOiBSZXVzZUl0ZW0pIHtcbiAgICB0aGlzLmNsb3NlLm5leHQoe1xuICAgICAgdHlwZSxcbiAgICAgIGl0ZW06IHRoaXMuaXRlbSxcbiAgICAgIGluY2x1ZGVOb25DbG9zZWFibGU6IHRoaXMuaW5jbHVkZU5vbkNsb3NlYWJsZSxcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluY2x1ZGVOb25DbG9zZWFibGUpIHRoaXMuaXRlbS5jbG9zYWJsZSA9IHRydWU7XG4gIH1cblxuICBjbGljayhlOiBNb3VzZUV2ZW50LCB0eXBlOiBDbG9zZVR5cGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodHlwZSA9PT0gJ2Nsb3NlJyAmJiAhdGhpcy5pdGVtLmNsb3NhYmxlKSByZXR1cm47XG4gICAgaWYgKHR5cGUgPT09ICdjbG9zZVJpZ2h0JyAmJiB0aGlzLml0ZW0ubGFzdCkgcmV0dXJuO1xuICAgIHRoaXMubm90aWZ5KHR5cGUsIHRoaXMuaXRlbSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNvbnRleHRtZW51JywgWyckZXZlbnQnXSlcbiAgY2xvc2VNZW51KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycgJiYgZXZlbnQuYnV0dG9uID09PSAyKSByZXR1cm47XG4gICAgdGhpcy5ub3RpZnkobnVsbCwgbnVsbCk7XG4gIH1cbn1cbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgT3ZlcmxheSxcbiAgT3ZlcmxheVJlZixcbiAgQ29ubmVjdGlvblBvc2l0aW9uUGFpcixcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtcbiAgUmV1c2VDb250ZXh0RXZlbnQsXG4gIFJldXNlQ29udGV4dEkxOG4sXG4gIFJldXNlQ29udGV4dENsb3NlRXZlbnQsXG59IGZyb20gJy4vcmV1c2UtdGFiLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgUmV1c2VUYWJDb250ZXh0TWVudUNvbXBvbmVudCB9IGZyb20gJy4vcmV1c2UtdGFiLWNvbnRleHQtbWVudS5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmV1c2VUYWJDb250ZXh0U2VydmljZSB7XG4gIHByaXZhdGUgcmVmOiBPdmVybGF5UmVmO1xuICBpMThuOiBSZXVzZUNvbnRleHRJMThuO1xuXG4gIHNob3c6IFN1YmplY3Q8UmV1c2VDb250ZXh0RXZlbnQ+ID0gbmV3IFN1YmplY3Q8UmV1c2VDb250ZXh0RXZlbnQ+KCk7XG4gIGNsb3NlOiBTdWJqZWN0PFJldXNlQ29udGV4dENsb3NlRXZlbnQ+ID0gbmV3IFN1YmplY3Q8XG4gICAgUmV1c2VDb250ZXh0Q2xvc2VFdmVudFxuICA+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5KSB7fVxuXG4gIHJlbW92ZSgpIHtcbiAgICBpZiAoIXRoaXMucmVmKSByZXR1cm47XG4gICAgdGhpcy5yZWYuZGV0YWNoKCk7XG4gICAgdGhpcy5yZWYuZGlzcG9zZSgpO1xuICAgIHRoaXMucmVmID0gbnVsbDtcbiAgfVxuXG4gIG9wZW4oY29udGV4dDogUmV1c2VDb250ZXh0RXZlbnQpIHtcbiAgICB0aGlzLnJlbW92ZSgpO1xuICAgIGNvbnN0IHsgZXZlbnQsIGl0ZW0gfSA9IGNvbnRleHQ7XG4gICAgY29uc3QgZmFrZUVsZW1lbnQgPSBuZXcgRWxlbWVudFJlZih7XG4gICAgICBnZXRCb3VuZGluZ0NsaWVudFJlY3Q6ICgpOiBDbGllbnRSZWN0ID0+ICh7XG4gICAgICAgIGJvdHRvbTogZXZlbnQuY2xpZW50WSxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBsZWZ0OiBldmVudC5jbGllbnRYLFxuICAgICAgICByaWdodDogZXZlbnQuY2xpZW50WCxcbiAgICAgICAgdG9wOiBldmVudC5jbGllbnRZLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgIH0pLFxuICAgIH0pO1xuICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtcbiAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKFxuICAgICAgICB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdib3R0b20nIH0sXG4gICAgICAgIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAndG9wJyB9LFxuICAgICAgKSxcbiAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKFxuICAgICAgICB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnIH0sXG4gICAgICAgIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAnYm90dG9tJyB9LFxuICAgICAgKSxcbiAgICBdO1xuICAgIGNvbnN0IHBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXlcbiAgICAgIC5wb3NpdGlvbigpXG4gICAgICAuZmxleGlibGVDb25uZWN0ZWRUbyhmYWtlRWxlbWVudClcbiAgICAgIC53aXRoUG9zaXRpb25zKHBvc2l0aW9ucyk7XG4gICAgdGhpcy5yZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKHtcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3ksXG4gICAgICBwYW5lbENsYXNzOiAncmV1c2UtdGFiX19jbScsXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuY2xvc2UoKSxcbiAgICB9KTtcbiAgICBjb25zdCBjb21wID0gdGhpcy5yZWYuYXR0YWNoKFxuICAgICAgbmV3IENvbXBvbmVudFBvcnRhbChSZXVzZVRhYkNvbnRleHRNZW51Q29tcG9uZW50KSxcbiAgICApO1xuICAgIGNvbnN0IGluc3RhbmNlID0gY29tcC5pbnN0YW5jZTtcbiAgICBpbnN0YW5jZS5pMThuID0gdGhpcy5pMThuO1xuICAgIGluc3RhbmNlLml0ZW0gPSB7IC4uLml0ZW0gfTtcbiAgICBpbnN0YW5jZS5ldmVudCA9IGV2ZW50O1xuXG4gICAgY29uc3Qgc3ViJCA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgICBzdWIkLmFkZChcbiAgICAgIGluc3RhbmNlLmNsb3NlLnN1YnNjcmliZSgocmVzOiBSZXVzZUNvbnRleHRDbG9zZUV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuY2xvc2UubmV4dChyZXMpO1xuICAgICAgICB0aGlzLnJlbW92ZSgpO1xuICAgICAgfSksXG4gICAgKTtcbiAgICBjb21wLm9uRGVzdHJveSgoKSA9PiBzdWIkLnVuc3Vic2NyaWJlKCkpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBSZXVzZUNvbnRleHRJMThuLCBSZXVzZUNvbnRleHRDbG9zZUV2ZW50IH0gZnJvbSAnLi9yZXVzZS10YWIuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBSZXVzZVRhYkNvbnRleHRTZXJ2aWNlIH0gZnJvbSAnLi9yZXVzZS10YWItY29udGV4dC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmV1c2UtdGFiLWNvbnRleHQnLFxuICB0ZW1wbGF0ZTogYGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBSZXVzZVRhYkNvbnRleHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHN1YiQ6IFN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBASW5wdXQoKVxuICBzZXQgaTE4bih2YWx1ZTogUmV1c2VDb250ZXh0STE4bikge1xuICAgIHRoaXMuc3J2LmkxOG4gPSB2YWx1ZTtcbiAgfVxuXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFJldXNlQ29udGV4dENsb3NlRXZlbnQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IFJldXNlVGFiQ29udGV4dFNlcnZpY2UpIHtcbiAgICB0aGlzLnN1YiQuYWRkKHNydi5zaG93LnN1YnNjcmliZShjb250ZXh0ID0+IHRoaXMuc3J2Lm9wZW4oY29udGV4dCkpKTtcbiAgICB0aGlzLnN1YiQuYWRkKHNydi5jbG9zZS5zdWJzY3JpYmUocmVzID0+IHRoaXMuY2hhbmdlLmVtaXQocmVzKSkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWIkLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBSZXVzZVRhYkNvbnRleHRTZXJ2aWNlIH0gZnJvbSAnLi9yZXVzZS10YWItY29udGV4dC5zZXJ2aWNlJztcbmltcG9ydCB7IFJldXNlSXRlbSB9IGZyb20gJy4vcmV1c2UtdGFiLmludGVyZmFjZXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbcmV1c2UtdGFiLWNvbnRleHQtbWVudV0nLFxufSlcbmV4cG9ydCBjbGFzcyBSZXVzZVRhYkNvbnRleHREaXJlY3RpdmUge1xuICBASW5wdXQoJ3JldXNlLXRhYi1jb250ZXh0LW1lbnUnKSBpdGVtOiBSZXVzZUl0ZW07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IFJldXNlVGFiQ29udGV4dFNlcnZpY2UpIHt9XG5cbiAgQEhvc3RMaXN0ZW5lcignY29udGV4dG1lbnUnLCBbJyRldmVudCddKVxuICBvbkNvbnRleHRNZW51KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5zcnYuc2hvdy5uZXh0KHtcbiAgICAgIGV2ZW50LFxuICAgICAgaXRlbTogdGhpcy5pdGVtLFxuICAgIH0pO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUmV1c2VUYWJDb250ZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9yZXVzZS10YWItY29udGV4dC5jb21wb25lbnQnO1xuXG4vKipcbiAqIMOlwqTCjcOnwpTCqMOlwozCucOpwoXCjcOmwqjCocOlwrzCj1xuICovXG5leHBvcnQgZW51bSBSZXVzZVRhYk1hdGNoTW9kZSB7XG4gIC8qKlxuICAgKiDDr8K8wojDpsKOwqjDqMKNwpDDr8K8wonDpsKMwonDqMKPwpzDpcKNwpUgYE1lbnVgIMOpwoXCjcOnwr3CrlxuICAgKlxuICAgKiDDpcKPwq/DpcKkwo3Dp8KUwqjDr8K8wppcbiAgICogLSBgeyB0ZXh0OidEYXNoYm9hcmQnIH1gXG4gICAqIC0gYHsgdGV4dDonRGFzaGJvYXJkJywgcmV1c2U6IHRydWUgfWBcbiAgICpcbiAgICogw6TCuMKNw6XCj8Kvw6XCpMKNw6fClMKow6/CvMKaXG4gICAqIC0gYHsgdGV4dDonRGFzaGJvYXJkJywgcmV1c2U6IGZhbHNlIH1gXG4gICAqL1xuICBNZW51LFxuICAvKipcbiAgICogw6bCjMKJw6jCj8Kcw6XCjcKVIGBNZW51YCDDpcK8wrrDpcKIwrbDqcKFwo3Dp8K9wq5cbiAgICpcbiAgICogw6XCj8Kvw6XCpMKNw6fClMKow6/CvMKaXG4gICAqIC0gYHsgdGV4dDonRGFzaGJvYXJkJywgcmV1c2U6IHRydWUgfWBcbiAgICpcbiAgICogw6TCuMKNw6XCj8Kvw6XCpMKNw6fClMKow6/CvMKaXG4gICAqIC0gYHsgdGV4dDonRGFzaGJvYXJkJyB9YFxuICAgKiAtIGB7IHRleHQ6J0Rhc2hib2FyZCcsIHJldXNlOiBmYWxzZSB9YFxuICAgKi9cbiAgTWVudUZvcmNlLFxuICAvKipcbiAgICogw6XCr8K5w6bCicKAw6bCnMKJw6jCt8Kvw6fClMKxw6bCnMKJw6bClcKIw6/CvMKMw6XCj8Kvw6TCu8Klw6nChcKNw6XCkMKIIGBleGNsdWRlc2Agw6jCv8KHw6bCu8Kkw6bCl8Kgw6nCocK7w6XCpMKNw6fClMKow6jCt8Kvw6fClMKxXG4gICAqL1xuICBVUkwsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VUaXRsZSB7XG4gIHRleHQ6IHN0cmluZztcbiAgaTE4bj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXVzZVRhYkNhY2hlZCB7XG4gIHRpdGxlOiBSZXVzZVRpdGxlO1xuXG4gIHVybDogc3RyaW5nO1xuXG4gIC8qKiDDpsKYwq/DpcKQwqbDpcKFwoHDqMKuwrjDpcKFwrPDqcKXwq3Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgdHJ1ZWAgKi9cbiAgY2xvc2FibGU/OiBib29sZWFuO1xuXG4gIF9zbmFwc2hvdDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdDtcblxuICBfaGFuZGxlOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VUYWJOb3RpZnkge1xuICAvKiogw6TCusKLw6TCu8K2w6fCscK7w6XCnsKLICovXG4gIGFjdGl2ZTogc3RyaW5nO1xuXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXVzZUl0ZW0ge1xuICB1cmw6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgY2xvc2FibGU6IGJvb2xlYW47XG4gIGluZGV4OiBudW1iZXI7XG4gIGFjdGl2ZTogYm9vbGVhbjtcbiAgbGFzdDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXVzZUNvbnRleHRFdmVudCB7XG4gIGV2ZW50OiBNb3VzZUV2ZW50O1xuICBpdGVtOiBSZXVzZUl0ZW07XG4gIGNvbXA/OiBSZXVzZVRhYkNvbnRleHRDb21wb25lbnQ7XG59XG5cbmV4cG9ydCB0eXBlIENsb3NlVHlwZSA9ICdjbG9zZScgfCAnY2xvc2VPdGhlcicgfCAnY2xvc2VSaWdodCcgfCAnY2xlYXInIHwgbnVsbDtcblxuZXhwb3J0IGludGVyZmFjZSBSZXVzZUNvbnRleHRDbG9zZUV2ZW50IHtcbiAgdHlwZTogQ2xvc2VUeXBlO1xuICBpdGVtOiBSZXVzZUl0ZW07XG4gIGluY2x1ZGVOb25DbG9zZWFibGU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VDb250ZXh0STE4biB7XG4gIGNsb3NlPzogc3RyaW5nO1xuICBjbG9zZU90aGVyPzogc3RyaW5nO1xuICBjbG9zZVJpZ2h0Pzogc3RyaW5nO1xuICBjbGVhcj86IHN0cmluZztcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gIEFjdGl2YXRlZFJvdXRlLFxuICBSb3V0ZXIsXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1lbnVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7XG4gIFJldXNlVGFiQ2FjaGVkLFxuICBSZXVzZVRhYk1hdGNoTW9kZSxcbiAgUmV1c2VUYWJOb3RpZnksXG4gIFJldXNlVGl0bGUsXG59IGZyb20gJy4vcmV1c2UtdGFiLmludGVyZmFjZXMnO1xuXG4vKipcbiAqIMOowrfCr8OnwpTCscOlwqTCjcOnwpTCqMOnwrHCu8OvwrzCjMOmwo/CkMOkwr7Cm8OlwqTCjcOnwpTCqMOmwonCgMOpwpzCgMOowqbCgcOkwrjCgMOkwrrCm8Olwp/CusOmwpzCrMOmwo7CpcOlwo/Co1xuICpcbiAqICoqw6bCs8Kow6/CvMKaKiogw6bCicKAw6bCnMKJw6fCvMKTw6XCrcKYw6bClcKww6bCjcKuw6bCncKlw6bCusKQw6TCusKOw6jCt8Kvw6fClMKxw6fCpsK7w6XCvMKAw6XCkMKOw6bCicKNw6TCvMKaw6TCusKnw6fClMKfXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgUmV1c2VUYWJTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfbWF4ID0gMTA7XG4gIHByaXZhdGUgX2RlYnVnID0gZmFsc2U7XG4gIHByaXZhdGUgX21vZGUgPSBSZXVzZVRhYk1hdGNoTW9kZS5NZW51O1xuICBwcml2YXRlIF9leGNsdWRlczogUmVnRXhwW10gPSBbXTtcbiAgcHJpdmF0ZSBfY2FjaGVkQ2hhbmdlOiBCZWhhdmlvclN1YmplY3Q8XG4gICAgUmV1c2VUYWJOb3RpZnlcbiAgPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8UmV1c2VUYWJOb3RpZnk+KG51bGwpO1xuICBwcml2YXRlIF9jYWNoZWQ6IFJldXNlVGFiQ2FjaGVkW10gPSBbXTtcbiAgcHJpdmF0ZSBfdGl0bGVDYWNoZWQ6IHsgW3VybDogc3RyaW5nXTogUmV1c2VUaXRsZSB9ID0ge307XG4gIHByaXZhdGUgX2Nsb3NhYmxlQ2FjaGVkOiB7IFt1cmw6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xuICBwcml2YXRlIHJlbW92ZVVybEJ1ZmZlcjogc3RyaW5nO1xuXG4gIC8vICNyZWdpb24gcHVibGljXG5cbiAgLyoqIMOlwr3Ck8OlwonCjcOowrfCr8OnwpTCscOlwpzCsMOlwp3CgCAqL1xuICBnZXQgY3VyVXJsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFVybCh0aGlzLmluamVjdG9yLmdldChBY3RpdmF0ZWRSb3V0ZSkuc25hcHNob3QpO1xuICB9XG5cbiAgLyoqIMOlwoXCgcOowq7CuMOmwpzCgMOlwqTCmsOlwqTCjcOnwpTCqMOlwqTCmsOlwrDCkcOkwrjCqsOpwqHCtcOpwp3CosOvwrzCjMOlwo/ClsOlwoDCvMOowozCg8OlwpvCtCBgMi0xMDBgICovXG4gIHNldCBtYXgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21heCA9IE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCAyKSwgMTAwKTtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5fY2FjaGVkLmxlbmd0aDsgaSA+IHRoaXMuX21heDsgaS0tKSB7XG4gICAgICB0aGlzLl9jYWNoZWQucG9wKCk7XG4gICAgfVxuICB9XG4gIC8qKiDDqMKuwr7Dp8K9wq7DpcKMwrnDqcKFwo3DpsKowqHDpcK8wo8gKi9cbiAgc2V0IG1vZGUodmFsdWU6IFJldXNlVGFiTWF0Y2hNb2RlKSB7XG4gICAgdGhpcy5fbW9kZSA9IHZhbHVlO1xuICB9XG4gIGdldCBtb2RlKCkge1xuICAgIHJldHVybiB0aGlzLl9tb2RlO1xuICB9XG4gIC8qKiDDqMKuwr7Dp8K9wq5EZWJ1Z8OmwqjCocOlwrzCjyAqL1xuICBzZXQgZGVidWcodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kZWJ1ZyA9IHZhbHVlO1xuICB9XG4gIGdldCBkZWJ1ZygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVidWc7XG4gIH1cbiAgLyoqIMOmwo7CksOpwpnCpMOowqfChMOlwojCmcOvwrzCjMOpwpnCkCBgbW9kZT1VUkxgICovXG4gIHNldCBleGNsdWRlcyh2YWx1ZXM6IFJlZ0V4cFtdKSB7XG4gICAgaWYgKCF2YWx1ZXMpIHJldHVybjtcbiAgICB0aGlzLl9leGNsdWRlcyA9IHZhbHVlcztcbiAgfVxuICBnZXQgZXhjbHVkZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4Y2x1ZGVzO1xuICB9XG4gIC8qKiDDqMKOwrfDpcKPwpbDpcK3wrLDp8K8wpPDpcKtwpjDp8KawoTDqMK3wq/Dp8KUwrEgKi9cbiAgZ2V0IGl0ZW1zKCk6IFJldXNlVGFiQ2FjaGVkW10ge1xuICAgIHJldHVybiB0aGlzLl9jYWNoZWQ7XG4gIH1cbiAgLyoqIMOowo7Ct8Olwo/ClsOlwr3Ck8OlwonCjcOnwrzCk8Olwq3CmMOnwprChMOowrfCr8OnwpTCscOmwoDCu8OmwpXCsCAqL1xuICBnZXQgY291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZC5sZW5ndGg7XG4gIH1cbiAgLyoqIMOowq7CosOpwpjChcOnwrzCk8Olwq3CmMOlwo/CmMOmwpvCtMOpwoDCmsOnwp/CpSAqL1xuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8UmV1c2VUYWJOb3RpZnk+IHtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVkQ2hhbmdlLmFzT2JzZXJ2YWJsZSgpOyAvLyAucGlwZShmaWx0ZXIodyA9PiB3ICE9PSBudWxsKSk7XG4gIH1cbiAgLyoqIMOowofCqsOlwq7CmsOkwrnCicOlwr3Ck8OlwonCjcOmwqDCh8OpwqLCmCAqL1xuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IFJldXNlVGl0bGUpIHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmN1clVybDtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykgdmFsdWUgPSB7IHRleHQ6IHZhbHVlIH07XG4gICAgdGhpcy5fdGl0bGVDYWNoZWRbdXJsXSA9IHZhbHVlO1xuICAgIHRoaXMuZGkoJ3VwZGF0ZSBjdXJyZW50IHRhZyB0aXRsZTogJywgdmFsdWUpO1xuICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHtcbiAgICAgIGFjdGl2ZTogJ3RpdGxlJyxcbiAgICAgIHRpdGxlOiB2YWx1ZSxcbiAgICAgIGxpc3Q6IHRoaXMuX2NhY2hlZCxcbiAgICB9KTtcbiAgfVxuICAvKiogw6jCjsK3w6XCj8KWw6bCjMKHw6XCrsKaw6jCt8Kvw6XCvsKEw6fCvMKTw6XCrcKYw6bCicKAw6XCnMKow6TCvcKNw6fCvcKuw6/CvMKMYC0xYCDDqMKhwqjDp8KkwrrDpsKXwqDDp8K8wpPDpcKtwpggKi9cbiAgaW5kZXgodXJsOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jYWNoZWQuZmluZEluZGV4KHcgPT4gdy51cmwgPT09IHVybCk7XG4gIH1cbiAgLyoqIMOowo7Ct8Olwo/ClsOmwozCh8Olwq7CmsOowrfCr8Olwr7ChMOnwrzCk8Olwq3CmMOmwpjCr8OlwpDCpsOlwq3CmMOlwpzCqCAqL1xuICBleGlzdHModXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleCh1cmwpICE9PSAtMTtcbiAgfVxuICAvKiogw6jCjsK3w6XCj8KWw6bCjMKHw6XCrsKaw6jCt8Kvw6XCvsKEw6fCvMKTw6XCrcKYICovXG4gIGdldCh1cmw6IHN0cmluZyk6IFJldXNlVGFiQ2FjaGVkIHtcbiAgICByZXR1cm4gdXJsID8gdGhpcy5fY2FjaGVkLmZpbmQodyA9PiB3LnVybCA9PT0gdXJsKSB8fCBudWxsIDogbnVsbDtcbiAgfVxuICBwcml2YXRlIHJlbW92ZSh1cmw6IHN0cmluZyB8IG51bWJlciwgaW5jbHVkZU5vbkNsb3NlYWJsZTogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlkeCA9IHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnID8gdGhpcy5pbmRleCh1cmwpIDogdXJsO1xuICAgIGNvbnN0IGl0ZW0gPSBpZHggIT09IC0xID8gdGhpcy5fY2FjaGVkW2lkeF0gOiBudWxsO1xuICAgIGlmICghaXRlbSB8fCAoIWluY2x1ZGVOb25DbG9zZWFibGUgJiYgIWl0ZW0uY2xvc2FibGUpKSByZXR1cm4gZmFsc2U7XG5cbiAgICB0aGlzLmRlc3Ryb3koaXRlbS5faGFuZGxlKTtcblxuICAgIHRoaXMuX2NhY2hlZC5zcGxpY2UoaWR4LCAxKTtcbiAgICBkZWxldGUgdGhpcy5fdGl0bGVDYWNoZWRbdXJsXTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICogw6bCoMK5w6bCjcKuVVJMw6fCp8K7w6nCmcKkw6bCoMKHw6fCrcK+XG4gICAqXG4gICAqIEBwYXJhbSBbaW5jbHVkZU5vbkNsb3NlYWJsZT1mYWxzZV0gw6bCmMKvw6XCkMKmw6XCvMK6w6XCiMK2w6XCjMKFw6XCkMKrw6TCuMKNw6XCj8Kvw6XChcKzw6nCl8KtXG4gICAqL1xuICBjbG9zZSh1cmw6IHN0cmluZywgaW5jbHVkZU5vbkNsb3NlYWJsZSA9IGZhbHNlKSB7XG4gICAgdGhpcy5yZW1vdmVVcmxCdWZmZXIgPSB1cmw7XG5cbiAgICB0aGlzLnJlbW92ZSh1cmwsIGluY2x1ZGVOb25DbG9zZWFibGUpO1xuXG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoeyBhY3RpdmU6ICdjbG9zZScsIHVybCwgbGlzdDogdGhpcy5fY2FjaGVkIH0pO1xuXG4gICAgdGhpcy5kaSgnY2xvc2UgdGFnJywgdXJsKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICogw6bCuMKFw6nCmcKkw6XCj8Kzw6jCvsK5XG4gICAqXG4gICAqIEBwYXJhbSBbaW5jbHVkZU5vbkNsb3NlYWJsZT1mYWxzZV0gw6bCmMKvw6XCkMKmw6XCvMK6w6XCiMK2w6XCjMKFw6XCkMKrw6TCuMKNw6XCj8Kvw6XChcKzw6nCl8KtXG4gICAqL1xuICBjbG9zZVJpZ2h0KHVybDogc3RyaW5nLCBpbmNsdWRlTm9uQ2xvc2VhYmxlID0gZmFsc2UpIHtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuaW5kZXgodXJsKTtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jb3VudCAtIDE7IGkgPiBzdGFydDsgaS0tKSB7XG4gICAgICB0aGlzLnJlbW92ZShpLCBpbmNsdWRlTm9uQ2xvc2VhYmxlKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbW92ZVVybEJ1ZmZlciA9IG51bGw7XG5cbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7IGFjdGl2ZTogJ2Nsb3NlUmlnaHQnLCB1cmwsIGxpc3Q6IHRoaXMuX2NhY2hlZCB9KTtcblxuICAgIHRoaXMuZGkoJ2Nsb3NlIHJpZ2h0IHRhZ2VzJywgdXJsKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICogw6bCuMKFw6nCmcKkw6bCicKAw6bCnMKJw6fCvMKTw6XCrcKYXG4gICAqXG4gICAqIEBwYXJhbSBbaW5jbHVkZU5vbkNsb3NlYWJsZT1mYWxzZV0gw6bCmMKvw6XCkMKmw6XCvMK6w6XCiMK2w6XCjMKFw6XCkMKrw6TCuMKNw6XCj8Kvw6XChcKzw6nCl8KtXG4gICAqL1xuICBjbGVhcihpbmNsdWRlTm9uQ2xvc2VhYmxlID0gZmFsc2UpIHtcbiAgICB0aGlzLl9jYWNoZWQuZm9yRWFjaCh3ID0+IHtcbiAgICAgIGlmICghaW5jbHVkZU5vbkNsb3NlYWJsZSAmJiB3LmNsb3NhYmxlKSB0aGlzLmRlc3Ryb3kody5faGFuZGxlKTtcbiAgICB9KTtcbiAgICB0aGlzLl9jYWNoZWQgPSB0aGlzLl9jYWNoZWQuZmlsdGVyKFxuICAgICAgdyA9PiAhaW5jbHVkZU5vbkNsb3NlYWJsZSAmJiAhdy5jbG9zYWJsZSxcbiAgICApO1xuXG4gICAgdGhpcy5yZW1vdmVVcmxCdWZmZXIgPSBudWxsO1xuXG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoeyBhY3RpdmU6ICdjbGVhcicsIGxpc3Q6IHRoaXMuX2NhY2hlZCB9KTtcblxuICAgIHRoaXMuZGkoJ2NsZWFyIGFsbCBjYXRjaCcpO1xuICB9XG4gIC8qKlxuICAgKiDDp8KnwrvDpcKKwqjDp8K8wpPDpcKtwpjDpsKVwrDDpsKNwq5cbiAgICogQHBhcmFtIHVybCDDqMKmwoHDp8KnwrvDpcKKwqjDp8KawoRVUkzDpcKcwrDDpcKdwoBcbiAgICogQHBhcmFtIHBvc2l0aW9uIMOmwpbCsMOkwr3CjcOnwr3CrsOvwrzCjMOkwrjCi8OmwqDCh8OkwrvCjiBgMGAgw6XCvMKAw6XCp8KLXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYFxuICAgKiAvLyBzb3VyY2VcbiAgICogWyAnL2EvMScsICcvYS8yJywgJy9hLzMnLCAnL2EvNCcsICcvYS81JyBdXG4gICAqIG1vdmUoJy9hLzEnLCAyKTtcbiAgICogLy8gb3V0cHV0XG4gICAqIFsgJy9hLzInLCAnL2EvMycsICcvYS8xJywgJy9hLzQnLCAnL2EvNScgXVxuICAgKiBtb3ZlKCcvYS8xJywgLTEpO1xuICAgKiAvLyBvdXRwdXRcbiAgICogWyAnL2EvMicsICcvYS8zJywgJy9hLzQnLCAnL2EvNScsICcvYS8xJyBdXG4gICAqIGBgYFxuICAgKi9cbiAgbW92ZSh1cmw6IHN0cmluZywgcG9zaXRpb246IG51bWJlcikge1xuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5fY2FjaGVkLmZpbmRJbmRleCh3ID0+IHcudXJsID09PSB1cmwpO1xuICAgIGlmIChzdGFydCA9PT0gLTEpIHJldHVybjtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5fY2FjaGVkLnNsaWNlKCk7XG4gICAgZGF0YS5zcGxpY2UoXG4gICAgICBwb3NpdGlvbiA8IDAgPyBkYXRhLmxlbmd0aCArIHBvc2l0aW9uIDogcG9zaXRpb24sXG4gICAgICAwLFxuICAgICAgZGF0YS5zcGxpY2Uoc3RhcnQsIDEpWzBdLFxuICAgICk7XG4gICAgdGhpcy5fY2FjaGVkID0gZGF0YTtcbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7XG4gICAgICBhY3RpdmU6ICdtb3ZlJyxcbiAgICAgIHVybCxcbiAgICAgIHBvc2l0aW9uLFxuICAgICAgbGlzdDogdGhpcy5fY2FjaGVkLFxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiDDpcK8wrrDpcKIwrbDpcKFwrPDqcKXwq3DpcK9wpPDpcKJwo3DqMK3wq/Dp8KUwrHDr8K8wojDpcKMwoXDpcKQwqvDpMK4wo3DpcKPwq/DpcKFwrPDqcKXwq3Dp8KKwrbDpsKAwoHDr8K8wonDr8K8wozDpcK5wrbDqcKHwo3DpsKWwrDDpcKvwrzDqMKIwqrDqMKHwrMgYG5ld1VybGAgw6jCt8Kvw6fClMKxXG4gICAqL1xuICByZXBsYWNlKG5ld1VybDogc3RyaW5nKSB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5jdXJVcmw7XG4gICAgaWYgKHRoaXMuZXhpc3RzKHVybCkpIHtcbiAgICAgIHRoaXMuY2xvc2UodXJsLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVVcmxCdWZmZXIgPSB1cmw7XG4gICAgfVxuICAgIHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlcikubmF2aWdhdGVCeVVybChuZXdVcmwpO1xuICB9XG4gIC8qKlxuICAgKiDDqMKOwrfDpcKPwpbDpsKgwofDqcKiwpjDr8K8wozDqcKhwrrDpcK6wo/DpcKmwoLDpMK4wovDr8K8wppcbiAgICpcbiAgICogMS4gw6fCu8KEw6TCu8K2w6XChsKFw6TCvcK/w6fClMKoIGBSZXVzZVRhYlNlcnZpY2UudGl0bGUgPSAnbmV3IHRpdGxlJ2Agw6nCh8KNw6bClsKww6bCjMKHw6XCrsKaw6bClsKHw6bCnMKsXG4gICAqIDIuIMOowrfCr8OnwpTCscOpwoXCjcOnwr3CrsOkwrjCrSBkYXRhIMOlwrHCnsOmwoDCp8OkwrjCrcOlwozChcOlwpDCqyB0aXRsZUkxOG4gPiB0aXRsZVxuICAgKiAzLiDDqMKPwpzDpcKNwpXDpsKVwrDDpsKNwq7DpMK4wq0gdGV4dCDDpcKxwp7DpsKAwqdcbiAgICpcbiAgICogQHBhcmFtIHVybCDDpsKMwofDpcKuwppVUkxcbiAgICogQHBhcmFtIHJvdXRlIMOmwozCh8Olwq7CmsOowrfCr8OnwpTCscOlwr/Cq8OnwoXCp1xuICAgKi9cbiAgZ2V0VGl0bGUodXJsOiBzdHJpbmcsIHJvdXRlPzogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IFJldXNlVGl0bGUge1xuICAgIGlmICh0aGlzLl90aXRsZUNhY2hlZFt1cmxdKSByZXR1cm4gdGhpcy5fdGl0bGVDYWNoZWRbdXJsXTtcblxuICAgIGlmIChyb3V0ZSAmJiByb3V0ZS5kYXRhICYmIChyb3V0ZS5kYXRhLnRpdGxlSTE4biB8fCByb3V0ZS5kYXRhLnRpdGxlKSlcbiAgICAgIHJldHVybiA8UmV1c2VUaXRsZT57XG4gICAgICAgIHRleHQ6IHJvdXRlLmRhdGEudGl0bGUsXG4gICAgICAgIGkxOG46IHJvdXRlLmRhdGEudGl0bGVJMThuLFxuICAgICAgfTtcblxuICAgIGNvbnN0IG1lbnUgPVxuICAgICAgdGhpcy5tb2RlICE9PSBSZXVzZVRhYk1hdGNoTW9kZS5VUkwgPyB0aGlzLmdldE1lbnUodXJsKSA6IG51bGw7XG4gICAgcmV0dXJuIG1lbnUgPyB7IHRleHQ6IG1lbnUudGV4dCwgaTE4bjogbWVudS5pMThuIH0gOiB7IHRleHQ6IHVybCB9O1xuICB9XG5cbiAgLyoqXG4gICAqIMOmwrjChcOpwpnCpMOmwqDCh8OpwqLCmMOnwrzCk8Olwq3CmFxuICAgKi9cbiAgY2xlYXJUaXRsZUNhY2hlZCgpIHtcbiAgICB0aGlzLl90aXRsZUNhY2hlZCA9IHt9O1xuICB9XG4gIC8qKiDDqMKHwqrDpcKuwprDpMK5wonDpcK9wpPDpcKJwo0gYGNsb3NhYmxlYCDDp8KKwrbDpsKAwoEgKi9cbiAgc2V0IGNsb3NhYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5jdXJVcmw7XG4gICAgdGhpcy5fY2xvc2FibGVDYWNoZWRbdXJsXSA9IHZhbHVlO1xuICAgIHRoaXMuZGkoJ3VwZGF0ZSBjdXJyZW50IHRhZyBjbG9zYWJsZTogJywgdmFsdWUpO1xuICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHtcbiAgICAgIGFjdGl2ZTogJ2Nsb3NhYmxlJyxcbiAgICAgIGNsb3NhYmxlOiB2YWx1ZSxcbiAgICAgIGxpc3Q6IHRoaXMuX2NhY2hlZCxcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogw6jCjsK3w6XCj8KWIGBjbG9zYWJsZWAgw6fCisK2w6bCgMKBw6/CvMKMw6nCocK6w6XCusKPw6XCpsKCw6TCuMKLw6/CvMKaXG4gICAqXG4gICAqIDEuIMOnwrvChMOkwrvCtsOlwobChcOkwr3Cv8OnwpTCqCBgUmV1c2VUYWJTZXJ2aWNlLmNsb3NhYmxlID0gdHJ1ZWAgw6nCh8KNw6bClsKww6bCjMKHw6XCrsKaIGBjbG9zYWJsZWAgw6fCisK2w6bCgMKBXG4gICAqIDIuIMOowrfCr8OnwpTCscOpwoXCjcOnwr3CrsOkwrjCrSBkYXRhIMOlwrHCnsOmwoDCp8OkwrjCrcOlwozChcOlwpDCqyBgcmV1c2VDbG9zYWJsZWBcbiAgICogMy4gw6jCj8Kcw6XCjcKVw6bClcKww6bCjcKuw6TCuMKtIGByZXVzZUNsb3NhYmxlYCDDpcKxwp7DpsKAwqdcbiAgICpcbiAgICogQHBhcmFtIHVybCDDpsKMwofDpcKuwppVUkxcbiAgICogQHBhcmFtIHJvdXRlIMOmwozCh8Olwq7CmsOowrfCr8OnwpTCscOlwr/Cq8OnwoXCp1xuICAgKi9cbiAgZ2V0Q2xvc2FibGUodXJsOiBzdHJpbmcsIHJvdXRlPzogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIGlmICh0eXBlb2YgdGhpcy5fY2xvc2FibGVDYWNoZWRbdXJsXSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICByZXR1cm4gdGhpcy5fY2xvc2FibGVDYWNoZWRbdXJsXTtcblxuICAgIGlmIChyb3V0ZSAmJiByb3V0ZS5kYXRhICYmIHR5cGVvZiByb3V0ZS5kYXRhLnJldXNlQ2xvc2FibGUgPT09ICdib29sZWFuJylcbiAgICAgIHJldHVybiByb3V0ZS5kYXRhLnJldXNlQ2xvc2FibGU7XG5cbiAgICBjb25zdCBtZW51ID1cbiAgICAgIHRoaXMubW9kZSAhPT0gUmV1c2VUYWJNYXRjaE1vZGUuVVJMID8gdGhpcy5nZXRNZW51KHVybCkgOiBudWxsO1xuICAgIGlmIChtZW51ICYmIHR5cGVvZiBtZW51LnJldXNlQ2xvc2FibGUgPT09ICdib29sZWFuJylcbiAgICAgIHJldHVybiBtZW51LnJldXNlQ2xvc2FibGU7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICogw6bCuMKFw6fCqcK6IGBjbG9zYWJsZWAgw6fCvMKTw6XCrcKYXG4gICAqL1xuICBjbGVhckNsb3NhYmxlQ2FjaGVkKCkge1xuICAgIHRoaXMuX2Nsb3NhYmxlQ2FjaGVkID0ge307XG4gIH1cbiAgZ2V0VHJ1dGhSb3V0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCkge1xuICAgIGxldCBuZXh0ID0gcm91dGU7XG4gICAgd2hpbGUgKG5leHQuZmlyc3RDaGlsZCkgbmV4dCA9IG5leHQuZmlyc3RDaGlsZDtcbiAgICByZXR1cm4gbmV4dDtcbiAgfVxuICAvKipcbiAgICogw6bCoMK5w6bCjcKuw6XCv8Krw6fChcKnw6jCjsK3w6XCj8KWVVJMw6XCnMKww6XCncKAXG4gICAqL1xuICBnZXRVcmwocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBzdHJpbmcge1xuICAgIGxldCBuZXh0ID0gdGhpcy5nZXRUcnV0aFJvdXRlKHJvdXRlKTtcbiAgICBjb25zdCBzZWdtZW50cyA9IFtdO1xuICAgIHdoaWxlIChuZXh0KSB7XG4gICAgICBzZWdtZW50cy5wdXNoKG5leHQudXJsLmpvaW4oJy8nKSk7XG4gICAgICBuZXh0ID0gbmV4dC5wYXJlbnQ7XG4gICAgfVxuICAgIGNvbnN0IHVybCA9XG4gICAgICAnLycgK1xuICAgICAgc2VnbWVudHNcbiAgICAgICAgLmZpbHRlcihpID0+IGkpXG4gICAgICAgIC5yZXZlcnNlKClcbiAgICAgICAgLmpvaW4oJy8nKTtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIC8qKlxuICAgKiDDpsKjwoDDpsKfwqXDpcK/wqvDp8KFwqfDpsKYwq/DpcKQwqbDpcKFwoHDqMKuwrjDqMKiwqvDpcKkwo3Dp8KUwqhcbiAgICovXG4gIGNhbihyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXJsKHJvdXRlKTtcbiAgICBpZiAodXJsID09PSB0aGlzLnJlbW92ZVVybEJ1ZmZlcikgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKHJvdXRlLmRhdGEgJiYgdHlwZW9mIHJvdXRlLmRhdGEucmV1c2UgPT09ICdib29sZWFuJylcbiAgICAgIHJldHVybiByb3V0ZS5kYXRhLnJldXNlO1xuXG4gICAgaWYgKHRoaXMubW9kZSAhPT0gUmV1c2VUYWJNYXRjaE1vZGUuVVJMKSB7XG4gICAgICBjb25zdCBtZW51ID0gdGhpcy5nZXRNZW51KHVybCk7XG4gICAgICBpZiAoIW1lbnUpIHJldHVybiBmYWxzZTtcbiAgICAgIGlmICh0aGlzLm1vZGUgPT09IFJldXNlVGFiTWF0Y2hNb2RlLk1lbnUpIHtcbiAgICAgICAgaWYgKG1lbnUucmV1c2UgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIW1lbnUucmV1c2UgfHwgbWVudS5yZXVzZSAhPT0gdHJ1ZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9leGNsdWRlcy5maW5kSW5kZXgociA9PiByLnRlc3QodXJsKSkgPT09IC0xO1xuICB9XG4gIC8qKlxuICAgKiDDpcKIwrfDpsKWwrDDr8K8wozDqMKnwqbDpcKPwpHDpMK4woDDpMK4wqogcmVmcmVzaCDDp8KxwrvDpcKewovDpMK6wovDpMK7wrZcbiAgICovXG4gIHJlZnJlc2goZGF0YT86IGFueSkge1xuICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHsgYWN0aXZlOiAncmVmcmVzaCcsIGRhdGEgfSk7XG4gIH1cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gcHJpdmF0ZXNcblxuICBwcml2YXRlIGRlc3Ryb3koX2hhbmRsZTogYW55KSB7XG4gICAgaWYgKF9oYW5kbGUgJiYgX2hhbmRsZS5jb21wb25lbnRSZWYgJiYgX2hhbmRsZS5jb21wb25lbnRSZWYuZGVzdHJveSlcbiAgICAgIF9oYW5kbGUuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgfVxuXG4gIHByaXZhdGUgZGkoLi4uYXJncykge1xuICAgIGlmICghdGhpcy5kZWJ1ZykgcmV0dXJuO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgY29uc29sZS53YXJuKC4uLmFyZ3MpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLCBwcml2YXRlIG1lbnVTZXJ2aWNlOiBNZW51U2VydmljZSkge31cblxuICBwcml2YXRlIGdldE1lbnUodXJsOiBzdHJpbmcpIHtcbiAgICBjb25zdCBtZW51cyA9IHRoaXMubWVudVNlcnZpY2UuZ2V0UGF0aEJ5VXJsKHVybCk7XG4gICAgaWYgKCFtZW51cyB8fCBtZW51cy5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuICAgIHJldHVybiBtZW51cy5wb3AoKTtcbiAgfVxuXG4gIHByaXZhdGUgcnVuSG9vayhtZXRob2Q6IHN0cmluZywgdXJsOiBzdHJpbmcsIGNvbXA6IGFueSkge1xuICAgIGlmIChjb21wLmluc3RhbmNlICYmIHR5cGVvZiBjb21wLmluc3RhbmNlW21ldGhvZF0gPT09ICdmdW5jdGlvbicpXG4gICAgICBjb21wLmluc3RhbmNlW21ldGhvZF0oKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFzSW5WYWxpZFJvdXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICFyb3V0ZS5yb3V0ZUNvbmZpZyB8fFxuICAgICAgcm91dGUucm91dGVDb25maWcubG9hZENoaWxkcmVuIHx8XG4gICAgICByb3V0ZS5yb3V0ZUNvbmZpZy5jaGlsZHJlblxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogw6XChsKzw6XCrsKaw6bCmMKvw6XCkMKmw6XChcKBw6jCrsK4w6jCt8Kvw6fClMKxw6XCpMKNw6fClMKow6/CvMKMw6jCi8KlIGB0cnVlYCDDpMK8wprDqMKnwqbDpcKPwpEgYHN0b3JlYFxuICAgKi9cbiAgc2hvdWxkRGV0YWNoKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaGFzSW5WYWxpZFJvdXRlKHJvdXRlKSkgcmV0dXJuIGZhbHNlO1xuICAgIHRoaXMuZGkoJyNzaG91bGREZXRhY2gnLCB0aGlzLmNhbihyb3V0ZSksIHRoaXMuZ2V0VXJsKHJvdXRlKSk7XG4gICAgcmV0dXJuIHRoaXMuY2FuKHJvdXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpcKtwpjDpcKCwqhcbiAgICovXG4gIHN0b3JlKF9zbmFwc2hvdDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgX2hhbmRsZTogYW55KSB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRVcmwoX3NuYXBzaG90KTtcbiAgICBjb25zdCBpZHggPSB0aGlzLmluZGV4KHVybCk7XG5cbiAgICBjb25zdCBpdGVtOiBSZXVzZVRhYkNhY2hlZCA9IHtcbiAgICAgIHRpdGxlOiB0aGlzLmdldFRpdGxlKHVybCwgX3NuYXBzaG90KSxcbiAgICAgIGNsb3NhYmxlOiB0aGlzLmdldENsb3NhYmxlKHVybCwgX3NuYXBzaG90KSxcbiAgICAgIHVybCxcbiAgICAgIF9zbmFwc2hvdCxcbiAgICAgIF9oYW5kbGUsXG4gICAgfTtcbiAgICBpZiAoaWR4ID09PSAtMSkge1xuICAgICAgdGhpcy5fY2FjaGVkLnB1c2goaXRlbSk7XG4gICAgICBpZiAodGhpcy5jb3VudCA+IHRoaXMuX21heCkgdGhpcy5fY2FjaGVkLnNoaWZ0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NhY2hlZFtpZHhdID0gaXRlbTtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVVcmxCdWZmZXIgPSBudWxsO1xuXG4gICAgdGhpcy5kaSgnI3N0b3JlJywgaWR4ID09PSAtMSA/ICdbbmV3XScgOiAnW292ZXJyaWRlXScsIHVybCk7XG5cbiAgICBpZiAoX2hhbmRsZSAmJiBfaGFuZGxlLmNvbXBvbmVudFJlZikge1xuICAgICAgdGhpcy5ydW5Ib29rKCdfb25SZXVzZURlc3Ryb3knLCB1cmwsIF9oYW5kbGUuY29tcG9uZW50UmVmKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7IGFjdGl2ZTogJ2FkZCcsIGl0ZW0sIGxpc3Q6IHRoaXMuX2NhY2hlZCB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpcKGwrPDpcKuwprDpsKYwq/DpcKQwqbDpcKFwoHDqMKuwrjDpcK6wpTDp8KUwqjDp8K8wpPDpcKtwpjDpsKVwrDDpsKNwq5cbiAgICovXG4gIHNob3VsZEF0dGFjaChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmhhc0luVmFsaWRSb3V0ZShyb3V0ZSkpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVybChyb3V0ZSk7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0KHVybCk7XG4gICAgY29uc3QgcmV0ID0gISEoZGF0YSAmJiBkYXRhLl9oYW5kbGUpO1xuICAgIHRoaXMuZGkoJyNzaG91bGRBdHRhY2gnLCByZXQsIHVybCk7XG4gICAgaWYgKHJldCAmJiBkYXRhLl9oYW5kbGUuY29tcG9uZW50UmVmKSB7XG4gICAgICB0aGlzLnJ1bkhvb2soJ19vblJldXNlSW5pdCcsIHVybCwgZGF0YS5faGFuZGxlLmNvbXBvbmVudFJlZik7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICogw6bCj8KQw6XCj8KWw6XCpMKNw6fClMKow6bClcKww6bCjcKuXG4gICAqL1xuICByZXRyaWV2ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IHt9IHtcbiAgICBpZiAodGhpcy5oYXNJblZhbGlkUm91dGUocm91dGUpKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVybChyb3V0ZSk7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0KHVybCk7XG4gICAgY29uc3QgcmV0ID0gKGRhdGEgJiYgZGF0YS5faGFuZGxlKSB8fCBudWxsO1xuICAgIHRoaXMuZGkoJyNyZXRyaWV2ZScsIHVybCwgcmV0KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIMOlwobCs8Olwq7CmsOmwpjCr8OlwpDCpsOlwrrClMOowq/CpcOowr/Cm8OowqHCjMOlwqTCjcOnwpTCqMOowrfCr8OnwpTCscOlwqTChMOnwpDChlxuICAgKi9cbiAgc2hvdWxkUmV1c2VSb3V0ZShcbiAgICBmdXR1cmU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgY3VycjogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgKTogYm9vbGVhbiB7XG4gICAgbGV0IHJldCA9IGZ1dHVyZS5yb3V0ZUNvbmZpZyA9PT0gY3Vyci5yb3V0ZUNvbmZpZztcbiAgICBpZiAoIXJldCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgcGF0aCA9ICgoZnV0dXJlLnJvdXRlQ29uZmlnICYmIGZ1dHVyZS5yb3V0ZUNvbmZpZy5wYXRoKSB8fFxuICAgICAgJycpIGFzIHN0cmluZztcbiAgICBpZiAocGF0aC5sZW5ndGggPiAwICYmIH5wYXRoLmluZGV4T2YoJzonKSkge1xuICAgICAgY29uc3QgZnV0dXJlVXJsID0gdGhpcy5nZXRVcmwoZnV0dXJlKTtcbiAgICAgIGNvbnN0IGN1cnJVcmwgPSB0aGlzLmdldFVybChjdXJyKTtcbiAgICAgIHJldCA9IGZ1dHVyZVVybCA9PT0gY3VyclVybDtcbiAgICB9XG4gICAgdGhpcy5kaSgnPT09PT09PT09PT09PT09PT09PT09Jyk7XG4gICAgdGhpcy5kaShcbiAgICAgICcjc2hvdWxkUmV1c2VSb3V0ZScsXG4gICAgICByZXQsXG4gICAgICBgJHt0aGlzLmdldFVybChjdXJyKX09PiR7dGhpcy5nZXRVcmwoZnV0dXJlKX1gLFxuICAgICAgZnV0dXJlLFxuICAgICAgY3VycixcbiAgICApO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9jYWNoZWQgPSBbXTtcbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBPbkNoYW5nZXMsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkluaXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZSxcbiAgT25EZXN0cm95LFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIEluamVjdCxcbiAgT3B0aW9uYWwsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRW5kLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIsIElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IEFMQUlOX0kxOE5fVE9LRU4sIEFsYWluSTE4TlNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuXG5pbXBvcnQgeyBSZXVzZVRhYlNlcnZpY2UgfSBmcm9tICcuL3JldXNlLXRhYi5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIFJldXNlVGFiQ2FjaGVkLFxuICBSZXVzZVRhYk5vdGlmeSxcbiAgUmV1c2VUYWJNYXRjaE1vZGUsXG4gIFJldXNlSXRlbSxcbiAgUmV1c2VDb250ZXh0STE4bixcbiAgUmV1c2VDb250ZXh0Q2xvc2VFdmVudCxcbiAgUmV1c2VUaXRsZSxcbn0gZnJvbSAnLi9yZXVzZS10YWIuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBSZXVzZVRhYkNvbnRleHRTZXJ2aWNlIH0gZnJvbSAnLi9yZXVzZS10YWItY29udGV4dC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmV1c2UtdGFiJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JldXNlLXRhYi5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgcHJvdmlkZXJzOiBbUmV1c2VUYWJDb250ZXh0U2VydmljZV0sXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnJldXNlLXRhYl0nOiAndHJ1ZScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIFJldXNlVGFiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIHN1YiQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBpMThuJDogU3Vic2NyaXB0aW9uO1xuICBsaXN0OiBSZXVzZUl0ZW1bXSA9IFtdO1xuICBpdGVtOiBSZXVzZUl0ZW07XG4gIHBvcyA9IDA7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICAvKiogw6jCrsK+w6fCvcKuw6XCjMK5w6nChcKNw6bCqMKhw6XCvMKPICovXG4gIEBJbnB1dCgpXG4gIG1vZGU6IFJldXNlVGFiTWF0Y2hNb2RlID0gUmV1c2VUYWJNYXRjaE1vZGUuTWVudTtcbiAgLyoqIMOpwoDCicOpwqHCucOmwpbCh8OmwpzCrMOlwpvCvcOpwpnChcOlwozCliAqL1xuICBASW5wdXQoKVxuICBpMThuOiBSZXVzZUNvbnRleHRJMThuO1xuICAvKiogw6bCmMKvw6XCkMKmRGVidWfDpsKowqHDpcK8wo8gKi9cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIGRlYnVnID0gZmFsc2U7XG4gIC8qKiDDpcKFwoHDqMKuwrjDpsKcwoDDpcKkwprDpcKkwo3Dp8KUwqjDpcKkwprDpcKwwpHDpMK4wqrDqcKhwrXDqcKdwqIgKi9cbiAgQElucHV0KClcbiAgQElucHV0TnVtYmVyKClcbiAgbWF4OiBudW1iZXI7XG4gIC8qKiDDpsKOwpLDqcKZwqTDqMKnwoTDpcKIwpnDr8K8wozDqcKZwpAgYG1vZGU9VVJMYCAqL1xuICBASW5wdXQoKVxuICBleGNsdWRlczogUmVnRXhwW107XG4gIC8qKiDDpcKFwoHDqMKuwrjDpcKFwrPDqcKXwq0gKi9cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIGFsbG93Q2xvc2UgPSB0cnVlO1xuICAvKiogw6bCgMK7w6bCmMKvw6bCmMK+w6fCpMK6w6XCvcKTw6XCicKNw6nCocK1ICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBzaG93Q3VycmVudCA9IHRydWU7XG4gIC8qKiDDpcKIwofDpsKNwqLDpsKXwrbDpcKbwp7DqMKwwoMgKi9cbiAgQE91dHB1dCgpXG4gIGNoYW5nZTogRXZlbnRFbWl0dGVyPFJldXNlSXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyPFJldXNlSXRlbT4oKTtcbiAgLyoqIMOlwoXCs8OpwpfCrcOlwpvCnsOowrDCgyAqL1xuICBAT3V0cHV0KClcbiAgY2xvc2U6IEV2ZW50RW1pdHRlcjxSZXVzZUl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcjxSZXVzZUl0ZW0+KCk7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgc3J2OiBSZXVzZVRhYlNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHJlbmRlcjogUmVuZGVyZXIyLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKVxuICAgIHByaXZhdGUgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcbiAgKSB7XG4gICAgdGhpcy5lbCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3Qgcm91dGUkID0gdGhpcy5yb3V0ZXIuZXZlbnRzLnBpcGUoXG4gICAgICBmaWx0ZXIoZXZ0ID0+IGV2dCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLFxuICAgICk7XG4gICAgdGhpcy5zdWIkID0gY29tYmluZUxhdGVzdCh0aGlzLnNydi5jaGFuZ2UsIHJvdXRlJCkuc3Vic2NyaWJlKChbcmVzLCBlXSkgPT5cbiAgICAgIHRoaXMuZ2VuTGlzdChyZXMgYXMgYW55KSxcbiAgICApO1xuICAgIGlmICh0aGlzLmkxOG5TcnYpIHtcbiAgICAgIHRoaXMuaTE4biQgPSB0aGlzLmkxOG5TcnYuY2hhbmdlXG4gICAgICAgIC5waXBlKGRlYm91bmNlVGltZSgxMDApKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuZ2VuTGlzdCgpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdlblRpdCh0aXRsZTogUmV1c2VUaXRsZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRpdGxlLmkxOG4gJiYgdGhpcy5pMThuU3J2XG4gICAgICA/IHRoaXMuaTE4blNydi5mYW55aSh0aXRsZS5pMThuKVxuICAgICAgOiB0aXRsZS50ZXh0O1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5MaXN0KG5vdGlmeT86IFJldXNlVGFiTm90aWZ5KSB7XG4gICAgY29uc3QgaXNDbG9zZWQgPSBub3RpZnkgJiYgbm90aWZ5LmFjdGl2ZSA9PT0gJ2Nsb3NlJztcbiAgICBjb25zdCBiZWZvcmVDbG9zZVBvcyA9IGlzQ2xvc2VkXG4gICAgICA/IHRoaXMubGlzdC5maW5kSW5kZXgodyA9PiB3LnVybCA9PT0gbm90aWZ5LnVybClcbiAgICAgIDogLTE7XG4gICAgY29uc3QgbHMgPSB0aGlzLnNydi5pdGVtcy5tYXAoKGl0ZW06IFJldXNlVGFiQ2FjaGVkLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICByZXR1cm4gPFJldXNlSXRlbT57XG4gICAgICAgIHVybDogaXRlbS51cmwsXG4gICAgICAgIHRpdGxlOiB0aGlzLmdlblRpdChpdGVtLnRpdGxlKSxcbiAgICAgICAgY2xvc2FibGU6IHRoaXMuYWxsb3dDbG9zZSAmJiBpdGVtLmNsb3NhYmxlICYmIHRoaXMuc3J2LmNvdW50ID4gMCxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIGxhc3Q6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5zaG93Q3VycmVudCkge1xuICAgICAgY29uc3Qgc25hcHNob3QgPSB0aGlzLnJvdXRlLnNuYXBzaG90O1xuICAgICAgY29uc3QgdXJsID0gdGhpcy5zcnYuZ2V0VXJsKHNuYXBzaG90KTtcbiAgICAgIGNvbnN0IGlkeCA9IGxzLmZpbmRJbmRleCh3ID0+IHcudXJsID09PSB1cmwpO1xuICAgICAgLy8ganVtcCBkaXJlY3RseSB3aGVuIHRoZSBjdXJyZW50IGV4aXN0cyBpbiB0aGUgbGlzdFxuICAgICAgLy8gb3IgY3JlYXRlIGEgbmV3IGN1cnJlbnQgaXRlbSBhbmQganVtcFxuICAgICAgaWYgKGlkeCAhPT0gLTEgfHwgKGlzQ2xvc2VkICYmIG5vdGlmeS51cmwgPT09IHVybCkpIHtcbiAgICAgICAgdGhpcy5wb3MgPSBpc0Nsb3NlZFxuICAgICAgICAgID8gaWR4ID49IGJlZm9yZUNsb3NlUG9zXG4gICAgICAgICAgICA/IHRoaXMucG9zIC0gMVxuICAgICAgICAgICAgOiB0aGlzLnBvc1xuICAgICAgICAgIDogaWR4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc25hcHNob3RUcnVlID0gdGhpcy5zcnYuZ2V0VHJ1dGhSb3V0ZShzbmFwc2hvdCk7XG4gICAgICAgIGxzLnB1c2goPFJldXNlSXRlbT57XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIHRpdGxlOiB0aGlzLmdlblRpdCh0aGlzLnNydi5nZXRUaXRsZSh1cmwsIHNuYXBzaG90VHJ1ZSkpLFxuICAgICAgICAgIGNsb3NhYmxlOlxuICAgICAgICAgICAgdGhpcy5hbGxvd0Nsb3NlICYmXG4gICAgICAgICAgICB0aGlzLnNydi5jb3VudCA+IDAgJiZcbiAgICAgICAgICAgIHRoaXMuc3J2LmdldENsb3NhYmxlKHVybCwgc25hcHNob3RUcnVlKSxcbiAgICAgICAgICBpbmRleDogbHMubGVuZ3RoLFxuICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgbGFzdDogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnBvcyA9IGxzLmxlbmd0aCAtIDE7XG4gICAgICB9XG4gICAgICAvLyBmaXggdW5hYmxlZCBjbG9zZSBsYXN0IGl0ZW1cbiAgICAgIGlmIChscy5sZW5ndGggPD0gMSkgbHNbMF0uY2xvc2FibGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLmxpc3QgPSBscztcblxuICAgIGlmIChscy5sZW5ndGggJiYgaXNDbG9zZWQpIHtcbiAgICAgIHRoaXMudG8obnVsbCwgdGhpcy5wb3MpO1xuICAgIH1cblxuICAgIHRoaXMucmVmU3RhdHVzKGZhbHNlKTtcbiAgICB0aGlzLnZpc2liaWxpdHkoKTtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgdmlzaWJpbGl0eSgpIHtcbiAgICBpZiAodGhpcy5zaG93Q3VycmVudCkgcmV0dXJuO1xuICAgIHRoaXMucmVuZGVyLnNldFN0eWxlKFxuICAgICAgdGhpcy5lbCxcbiAgICAgICdkaXNwbGF5JyxcbiAgICAgIHRoaXMubGlzdC5sZW5ndGggPT09IDAgPyAnbm9uZScgOiAnYmxvY2snLFxuICAgICk7XG4gIH1cblxuICAvLyAjcmVnaW9uIFVJXG5cbiAgY21DaGFuZ2UocmVzOiBSZXVzZUNvbnRleHRDbG9zZUV2ZW50KSB7XG4gICAgc3dpdGNoIChyZXMudHlwZSkge1xuICAgICAgY2FzZSAnY2xvc2UnOlxuICAgICAgICB0aGlzLl9jbG9zZShudWxsLCByZXMuaXRlbS5pbmRleCwgcmVzLmluY2x1ZGVOb25DbG9zZWFibGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Nsb3NlUmlnaHQnOlxuICAgICAgICB0aGlzLnNydi5jbG9zZVJpZ2h0KHJlcy5pdGVtLnVybCwgcmVzLmluY2x1ZGVOb25DbG9zZWFibGUpO1xuICAgICAgICB0aGlzLmNsb3NlLmVtaXQobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2xlYXInOlxuICAgICAgY2FzZSAnY2xvc2VPdGhlcic6XG4gICAgICAgIHRoaXMuc3J2LmNsZWFyKHJlcy5pbmNsdWRlTm9uQ2xvc2VhYmxlKTtcbiAgICAgICAgdGhpcy5jbG9zZS5lbWl0KG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZWZTdGF0dXMoZGMgPSB0cnVlKSB7XG4gICAgaWYgKHRoaXMubGlzdC5sZW5ndGgpIHtcbiAgICAgIHRoaXMubGlzdFt0aGlzLmxpc3QubGVuZ3RoIC0gMV0ubGFzdCA9IHRydWU7XG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaCgoaSwgaWR4KSA9PiAoaS5hY3RpdmUgPSB0aGlzLnBvcyA9PT0gaWR4KSk7XG4gICAgfVxuICAgIGlmIChkYykgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICB0byhlOiBFdmVudCwgaW5kZXg6IG51bWJlcikge1xuICAgIGlmIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICBpbmRleCA9IE1hdGgubWF4KDAsIE1hdGgubWluKGluZGV4LCB0aGlzLmxpc3QubGVuZ3RoIC0gMSkpO1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmxpc3RbaW5kZXhdO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoaXRlbS51cmwpLnRoZW4ocmVzID0+IHtcbiAgICAgIGlmICghcmVzKSByZXR1cm47XG4gICAgICB0aGlzLnBvcyA9IGluZGV4O1xuICAgICAgdGhpcy5pdGVtID0gaXRlbTtcbiAgICAgIHRoaXMucmVmU3RhdHVzKCk7XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KGl0ZW0pO1xuICAgIH0pO1xuICB9XG5cbiAgX2Nsb3NlKGU6IEV2ZW50LCBpZHg6IG51bWJlciwgaW5jbHVkZU5vbkNsb3NlYWJsZTogYm9vbGVhbikge1xuICAgIGlmIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICBjb25zdCBpdGVtID0gdGhpcy5saXN0W2lkeF07XG4gICAgdGhpcy5zcnYuY2xvc2UoaXRlbS51cmwsIGluY2x1ZGVOb25DbG9zZWFibGUpO1xuICAgIHRoaXMuY2xvc2UuZW1pdChpdGVtKTtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5nZW5MaXN0KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhcbiAgICBjaGFuZ2VzOiB7IFtQIGluIGtleW9mIHRoaXNdPzogU2ltcGxlQ2hhbmdlIH0gJiBTaW1wbGVDaGFuZ2VzLFxuICApOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5tYXgpIHRoaXMuc3J2Lm1heCA9IHRoaXMubWF4O1xuICAgIGlmIChjaGFuZ2VzLmV4Y2x1ZGVzKSB0aGlzLnNydi5leGNsdWRlcyA9IHRoaXMuZXhjbHVkZXM7XG4gICAgaWYgKGNoYW5nZXMubW9kZSkgdGhpcy5zcnYubW9kZSA9IHRoaXMubW9kZTtcbiAgICB0aGlzLnNydi5kZWJ1ZyA9IHRoaXMuZGVidWc7XG5cbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgaTE4biQsIHN1YiQgfSA9IHRoaXM7XG4gICAgc3ViJC51bnN1YnNjcmliZSgpO1xuICAgIGlmIChpMThuJCkgaTE4biQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUm91dGVSZXVzZVN0cmF0ZWd5LCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJldXNlVGFiU2VydmljZSB9IGZyb20gJy4vcmV1c2UtdGFiLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgUmV1c2VUYWJTdHJhdGVneSBpbXBsZW1lbnRzIFJvdXRlUmV1c2VTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3J2OiBSZXVzZVRhYlNlcnZpY2UpIHt9XG5cbiAgc2hvdWxkRGV0YWNoKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3J2LnNob3VsZERldGFjaChyb3V0ZSk7XG4gIH1cbiAgc3RvcmUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIGhhbmRsZToge30pOiB2b2lkIHtcbiAgICB0aGlzLnNydi5zdG9yZShyb3V0ZSwgaGFuZGxlKTtcbiAgfVxuICBzaG91bGRBdHRhY2gocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zcnYuc2hvdWxkQXR0YWNoKHJvdXRlKTtcbiAgfVxuICByZXRyaWV2ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IHt9IHtcbiAgICByZXR1cm4gdGhpcy5zcnYucmV0cmlldmUocm91dGUpO1xuICB9XG4gIHNob3VsZFJldXNlUm91dGUoXG4gICAgZnV0dXJlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIGN1cnI6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNydi5zaG91bGRSZXVzZVJvdXRlKGZ1dHVyZSwgY3Vycik7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBOZ1pvcnJvQW50ZE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuaW1wb3J0IHsgRGVsb25Mb2NhbGVNb2R1bGUgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuXG5pbXBvcnQgeyBSZXVzZVRhYkNvbXBvbmVudCB9IGZyb20gJy4vcmV1c2UtdGFiLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXVzZVRhYkNvbnRleHRDb21wb25lbnQgfSBmcm9tICcuL3JldXNlLXRhYi1jb250ZXh0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXVzZVRhYkNvbnRleHREaXJlY3RpdmUgfSBmcm9tICcuL3JldXNlLXRhYi1jb250ZXh0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBSZXVzZVRhYkNvbnRleHRNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9yZXVzZS10YWItY29udGV4dC1tZW51LmNvbXBvbmVudCc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbUmV1c2VUYWJDb21wb25lbnRdO1xuY29uc3QgTk9FWFBPUlRTID0gW1xuICBSZXVzZVRhYkNvbnRleHRNZW51Q29tcG9uZW50LFxuICBSZXVzZVRhYkNvbnRleHRDb21wb25lbnQsXG4gIFJldXNlVGFiQ29udGV4dERpcmVjdGl2ZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIERlbG9uTG9jYWxlTW9kdWxlLFxuICAgIE5nWm9ycm9BbnRkTW9kdWxlLFxuICAgIE92ZXJsYXlNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFMsIC4uLk5PRVhQT1JUU10sXG4gIGVudHJ5Q29tcG9uZW50czogW1JldXNlVGFiQ29udGV4dE1lbnVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXG59KVxuZXhwb3J0IGNsYXNzIFJldXNlVGFiTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBSZXVzZVRhYk1vZHVsZSxcbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVyIiwiQ29tcG9uZW50IiwiRGVsb25Mb2NhbGVTZXJ2aWNlIiwiSW5wdXQiLCJPdXRwdXQiLCJIb3N0TGlzdGVuZXIiLCJvdmVybGF5IiwiU3ViamVjdCIsIkVsZW1lbnRSZWYiLCJDb25uZWN0aW9uUG9zaXRpb25QYWlyIiwiQ29tcG9uZW50UG9ydGFsIiwiU3Vic2NyaXB0aW9uIiwiSW5qZWN0YWJsZSIsIk92ZXJsYXkiLCJEaXJlY3RpdmUiLCJCZWhhdmlvclN1YmplY3QiLCJBY3RpdmF0ZWRSb3V0ZSIsIlJvdXRlciIsIkluamVjdG9yIiwiTWVudVNlcnZpY2UiLCJyb3V0ZXIiLCJmaWx0ZXIiLCJOYXZpZ2F0aW9uRW5kIiwiY29tYmluZUxhdGVzdCIsImRlYm91bmNlVGltZSIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJSZW5kZXJlcjIiLCJPcHRpb25hbCIsIkluamVjdCIsIkFMQUlOX0kxOE5fVE9LRU4iLCJJbnB1dEJvb2xlYW4iLCJJbnB1dE51bWJlciIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiUm91dGVyTW9kdWxlIiwiRGVsb25Mb2NhbGVNb2R1bGUiLCJOZ1pvcnJvQW50ZE1vZHVsZSIsIk92ZXJsYXlNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQW1ERSxzQ0FBb0IsT0FBMkI7WUFBM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7eUJBTnZDLElBQUlBLGVBQVksRUFBMEI7U0FNQztRQXJCbkQsc0JBQ0ksOENBQUk7OztnQkFHUjtnQkFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDbkI7Ozs7Z0JBTkQsVUFDUyxLQUF1QjtnQkFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUN6RTs7O1dBQUE7UUFjRCxzQkFBSSw2REFBbUI7OztnQkFBdkI7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQzthQUMzQjs7O1dBQUE7Ozs7OztRQUlPLDZDQUFNOzs7OztzQkFBQyxJQUFlLEVBQUUsSUFBZTtnQkFD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