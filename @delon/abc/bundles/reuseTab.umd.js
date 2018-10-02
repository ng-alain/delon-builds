/**
 * @license ng-alain(cipchk@qq.com) v2.0.0-beta.3-ed90aa6
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
                        template: "<nz-tabset [nzSelectedIndex]=\"pos\" [nzAnimated]=\"false\" nzType=\"line\">\r\n  <nz-tab *ngFor=\"let i of list; let index = index\" [nzTitle]=\"titleTemplate\">\r\n    <ng-template #titleTemplate>\r\n      <span [reuse-tab-context-menu]=\"i\" (click)=\"to($event, index)\" class=\"name\">{{i.title}}</span>\r\n      <i *ngIf=\"i.closable\" class=\"anticon anticon-close op\" (click)=\"_close($event, index, false)\"></i>\r\n    </ng-template>\r\n  </nz-tab>\r\n</nz-tabset>\r\n<reuse-tab-context [i18n]=\"i18n\" (change)=\"cmChange($event)\"></reuse-tab-context>\r\n",
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2VUYWIudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vYWJjL3JldXNlLXRhYi9yZXVzZS10YWItY29udGV4dC1tZW51LmNvbXBvbmVudC50cyIsIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL0BkZWxvbi9hYmMvcmV1c2UtdGFiL3JldXNlLXRhYi1jb250ZXh0LnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi9hYmMvcmV1c2UtdGFiL3JldXNlLXRhYi1jb250ZXh0LmNvbXBvbmVudC50cyIsIm5nOi8vQGRlbG9uL2FiYy9yZXVzZS10YWIvcmV1c2UtdGFiLWNvbnRleHQuZGlyZWN0aXZlLnRzIiwibmc6Ly9AZGVsb24vYWJjL3JldXNlLXRhYi9yZXVzZS10YWIuaW50ZXJmYWNlcy50cyIsIm5nOi8vQGRlbG9uL2FiYy9yZXVzZS10YWIvcmV1c2UtdGFiLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi9hYmMvcmV1c2UtdGFiL3JldXNlLXRhYi5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9hYmMvcmV1c2UtdGFiL3JldXNlLXRhYi5zdHJhdGVneS50cyIsIm5nOi8vQGRlbG9uL2FiYy9yZXVzZS10YWIvcmV1c2UtdGFiLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT3V0cHV0LFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBPbkluaXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERlbG9uTG9jYWxlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIFJldXNlQ29udGV4dEkxOG4sXHJcbiAgUmV1c2VDb250ZXh0Q2xvc2VFdmVudCxcclxuICBSZXVzZUl0ZW0sXHJcbiAgQ2xvc2VUeXBlLFxyXG59IGZyb20gJy4vcmV1c2UtdGFiLmludGVyZmFjZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdyZXVzZS10YWItY29udGV4dC1tZW51JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDx1bCBuei1tZW51PlxyXG4gICAgICA8bGkgbnotbWVudS1pdGVtIChjbGljayk9XCJjbGljaygkZXZlbnQsICdjbG9zZScpXCIgZGF0YS10eXBlPVwiY2xvc2VcIiBbbnpEaXNhYmxlZF09XCIhaXRlbS5jbG9zYWJsZVwiIFtpbm5lckhUTUxdPVwiaTE4bi5jbG9zZVwiPjwvbGk+XHJcbiAgICAgIDxsaSBuei1tZW51LWl0ZW0gKGNsaWNrKT1cImNsaWNrKCRldmVudCwgJ2Nsb3NlT3RoZXInKVwiIGRhdGEtdHlwZT1cImNsb3NlT3RoZXJcIiBbaW5uZXJIVE1MXT1cImkxOG4uY2xvc2VPdGhlclwiPjwvbGk+XHJcbiAgICAgIDxsaSBuei1tZW51LWl0ZW0gKGNsaWNrKT1cImNsaWNrKCRldmVudCwgJ2Nsb3NlUmlnaHQnKVwiIGRhdGEtdHlwZT1cImNsb3NlUmlnaHRcIiBbbnpEaXNhYmxlZF09XCJpdGVtLmxhc3RcIiBbaW5uZXJIVE1MXT1cImkxOG4uY2xvc2VSaWdodFwiPjwvbGk+XHJcbiAgICAgIDxsaSBuei1tZW51LWl0ZW0gKGNsaWNrKT1cImNsaWNrKCRldmVudCwgJ2NsZWFyJylcIiBkYXRhLXR5cGU9XCJjbGVhclwiIFtpbm5lckhUTUxdPVwiaTE4bi5jbGVhclwiPjwvbGk+XHJcbiAgPC91bD5gLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmV1c2VUYWJDb250ZXh0TWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHJpdmF0ZSBfaTE4bjogUmV1c2VDb250ZXh0STE4bjtcclxuICBASW5wdXQoKVxyXG4gIHNldCBpMThuKHZhbHVlOiBSZXVzZUNvbnRleHRJMThuKSB7XHJcbiAgICB0aGlzLl9pMThuID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5pMThuU3J2LmdldERhdGEoJ3JldXNlVGFiJyksIHZhbHVlKTtcclxuICB9XHJcbiAgZ2V0IGkxOG4oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faTE4bjtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgaXRlbTogUmV1c2VJdGVtO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGV2ZW50OiBNb3VzZUV2ZW50O1xyXG5cclxuICBAT3V0cHV0KClcclxuICBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8UmV1c2VDb250ZXh0Q2xvc2VFdmVudD4oKTtcclxuXHJcbiAgZ2V0IGluY2x1ZGVOb25DbG9zZWFibGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ldmVudC5jdHJsS2V5O1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuU3J2OiBEZWxvbkxvY2FsZVNlcnZpY2UpIHt9XHJcblxyXG4gIHByaXZhdGUgbm90aWZ5KHR5cGU6IENsb3NlVHlwZSwgaXRlbTogUmV1c2VJdGVtKSB7XHJcbiAgICB0aGlzLmNsb3NlLm5leHQoe1xyXG4gICAgICB0eXBlLFxyXG4gICAgICBpdGVtOiB0aGlzLml0ZW0sXHJcbiAgICAgIGluY2x1ZGVOb25DbG9zZWFibGU6IHRoaXMuaW5jbHVkZU5vbkNsb3NlYWJsZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbmNsdWRlTm9uQ2xvc2VhYmxlKSB0aGlzLml0ZW0uY2xvc2FibGUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgY2xpY2soZTogTW91c2VFdmVudCwgdHlwZTogQ2xvc2VUeXBlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaWYgKHR5cGUgPT09ICdjbG9zZScgJiYgIXRoaXMuaXRlbS5jbG9zYWJsZSkgcmV0dXJuO1xyXG4gICAgaWYgKHR5cGUgPT09ICdjbG9zZVJpZ2h0JyAmJiB0aGlzLml0ZW0ubGFzdCkgcmV0dXJuO1xyXG4gICAgdGhpcy5ub3RpZnkodHlwZSwgdGhpcy5pdGVtKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSlcclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjb250ZXh0bWVudScsIFsnJGV2ZW50J10pXHJcbiAgY2xvc2VNZW51KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2NsaWNrJyAmJiBldmVudC5idXR0b24gPT09IDIpIHJldHVybjtcclxuICAgIHRoaXMubm90aWZ5KG51bGwsIG51bGwpO1xyXG4gIH1cclxufVxyXG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBPdmVybGF5LFxyXG4gIE92ZXJsYXlSZWYsXHJcbiAgQ29ubmVjdGlvblBvc2l0aW9uUGFpcixcclxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgUmV1c2VDb250ZXh0RXZlbnQsXHJcbiAgUmV1c2VDb250ZXh0STE4bixcclxuICBSZXVzZUNvbnRleHRDbG9zZUV2ZW50LFxyXG59IGZyb20gJy4vcmV1c2UtdGFiLmludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBSZXVzZVRhYkNvbnRleHRNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9yZXVzZS10YWItY29udGV4dC1tZW51LmNvbXBvbmVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBSZXVzZVRhYkNvbnRleHRTZXJ2aWNlIHtcclxuICBwcml2YXRlIHJlZjogT3ZlcmxheVJlZjtcclxuICBpMThuOiBSZXVzZUNvbnRleHRJMThuO1xyXG5cclxuICBzaG93OiBTdWJqZWN0PFJldXNlQ29udGV4dEV2ZW50PiA9IG5ldyBTdWJqZWN0PFJldXNlQ29udGV4dEV2ZW50PigpO1xyXG4gIGNsb3NlOiBTdWJqZWN0PFJldXNlQ29udGV4dENsb3NlRXZlbnQ+ID0gbmV3IFN1YmplY3Q8XHJcbiAgICBSZXVzZUNvbnRleHRDbG9zZUV2ZW50XHJcbiAgPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXkpIHt9XHJcblxyXG4gIHJlbW92ZSgpIHtcclxuICAgIGlmICghdGhpcy5yZWYpIHJldHVybjtcclxuICAgIHRoaXMucmVmLmRldGFjaCgpO1xyXG4gICAgdGhpcy5yZWYuZGlzcG9zZSgpO1xyXG4gICAgdGhpcy5yZWYgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgb3Blbihjb250ZXh0OiBSZXVzZUNvbnRleHRFdmVudCkge1xyXG4gICAgdGhpcy5yZW1vdmUoKTtcclxuICAgIGNvbnN0IHsgZXZlbnQsIGl0ZW0gfSA9IGNvbnRleHQ7XHJcbiAgICBjb25zdCBmYWtlRWxlbWVudCA9IG5ldyBFbGVtZW50UmVmKHtcclxuICAgICAgZ2V0Qm91bmRpbmdDbGllbnRSZWN0OiAoKTogQ2xpZW50UmVjdCA9PiAoe1xyXG4gICAgICAgIGJvdHRvbTogZXZlbnQuY2xpZW50WSxcclxuICAgICAgICBoZWlnaHQ6IDAsXHJcbiAgICAgICAgbGVmdDogZXZlbnQuY2xpZW50WCxcclxuICAgICAgICByaWdodDogZXZlbnQuY2xpZW50WCxcclxuICAgICAgICB0b3A6IGV2ZW50LmNsaWVudFksXHJcbiAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgIH0pLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBwb3NpdGlvbnMgPSBbXHJcbiAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKFxyXG4gICAgICAgIHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ2JvdHRvbScgfSxcclxuICAgICAgICB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCcgfSxcclxuICAgICAgKSxcclxuICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoXHJcbiAgICAgICAgeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LFxyXG4gICAgICAgIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAnYm90dG9tJyB9LFxyXG4gICAgICApLFxyXG4gICAgXTtcclxuICAgIGNvbnN0IHBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXlcclxuICAgICAgLnBvc2l0aW9uKClcclxuICAgICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8oZmFrZUVsZW1lbnQpXHJcbiAgICAgIC53aXRoUG9zaXRpb25zKHBvc2l0aW9ucyk7XHJcbiAgICB0aGlzLnJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoe1xyXG4gICAgICBwb3NpdGlvblN0cmF0ZWd5LFxyXG4gICAgICBwYW5lbENsYXNzOiAncmV1c2UtdGFiX19jbScsXHJcbiAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5jbG9zZSgpLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBjb21wID0gdGhpcy5yZWYuYXR0YWNoKFxyXG4gICAgICBuZXcgQ29tcG9uZW50UG9ydGFsKFJldXNlVGFiQ29udGV4dE1lbnVDb21wb25lbnQpLFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGluc3RhbmNlID0gY29tcC5pbnN0YW5jZTtcclxuICAgIGluc3RhbmNlLmkxOG4gPSB0aGlzLmkxOG47XHJcbiAgICBpbnN0YW5jZS5pdGVtID0geyAuLi5pdGVtIH07XHJcbiAgICBpbnN0YW5jZS5ldmVudCA9IGV2ZW50O1xyXG5cclxuICAgIGNvbnN0IHN1YiQgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcbiAgICBzdWIkLmFkZChcclxuICAgICAgaW5zdGFuY2UuY2xvc2Uuc3Vic2NyaWJlKChyZXM6IFJldXNlQ29udGV4dENsb3NlRXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLmNsb3NlLm5leHQocmVzKTtcclxuICAgICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICB9KSxcclxuICAgICk7XHJcbiAgICBjb21wLm9uRGVzdHJveSgoKSA9PiBzdWIkLnVuc3Vic2NyaWJlKCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE9uRGVzdHJveSxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBSZXVzZUNvbnRleHRJMThuLCBSZXVzZUNvbnRleHRDbG9zZUV2ZW50IH0gZnJvbSAnLi9yZXVzZS10YWIuaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dFNlcnZpY2UgfSBmcm9tICcuL3JldXNlLXRhYi1jb250ZXh0LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdyZXVzZS10YWItY29udGV4dCcsXHJcbiAgdGVtcGxhdGU6IGBgLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmV1c2VUYWJDb250ZXh0Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBwcml2YXRlIHN1YiQ6IFN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgaTE4bih2YWx1ZTogUmV1c2VDb250ZXh0STE4bikge1xyXG4gICAgdGhpcy5zcnYuaTE4biA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8UmV1c2VDb250ZXh0Q2xvc2VFdmVudD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IFJldXNlVGFiQ29udGV4dFNlcnZpY2UpIHtcclxuICAgIHRoaXMuc3ViJC5hZGQoc3J2LnNob3cuc3Vic2NyaWJlKGNvbnRleHQgPT4gdGhpcy5zcnYub3Blbihjb250ZXh0KSkpO1xyXG4gICAgdGhpcy5zdWIkLmFkZChzcnYuY2xvc2Uuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmNoYW5nZS5lbWl0KHJlcykpKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zdWIkLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUmV1c2VUYWJDb250ZXh0U2VydmljZSB9IGZyb20gJy4vcmV1c2UtdGFiLWNvbnRleHQuc2VydmljZSc7XHJcbmltcG9ydCB7IFJldXNlSXRlbSB9IGZyb20gJy4vcmV1c2UtdGFiLmludGVyZmFjZXMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbcmV1c2UtdGFiLWNvbnRleHQtbWVudV0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmV1c2VUYWJDb250ZXh0RGlyZWN0aXZlIHtcclxuICBASW5wdXQoJ3JldXNlLXRhYi1jb250ZXh0LW1lbnUnKSBpdGVtOiBSZXVzZUl0ZW07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3J2OiBSZXVzZVRhYkNvbnRleHRTZXJ2aWNlKSB7fVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjb250ZXh0bWVudScsIFsnJGV2ZW50J10pXHJcbiAgb25Db250ZXh0TWVudShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5zcnYuc2hvdy5uZXh0KHtcclxuICAgICAgZXZlbnQsXHJcbiAgICAgIGl0ZW06IHRoaXMuaXRlbSxcclxuICAgIH0pO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUmV1c2VUYWJDb250ZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9yZXVzZS10YWItY29udGV4dC5jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIMOlwqTCjcOnwpTCqMOlwozCucOpwoXCjcOmwqjCocOlwrzCj1xyXG4gKi9cclxuZXhwb3J0IGVudW0gUmV1c2VUYWJNYXRjaE1vZGUge1xyXG4gIC8qKlxyXG4gICAqIMOvwrzCiMOmwo7CqMOowo3CkMOvwrzCicOmwozCicOowo/CnMOlwo3ClSBgTWVudWAgw6nChcKNw6fCvcKuXHJcbiAgICpcclxuICAgKiDDpcKPwq/DpcKkwo3Dp8KUwqjDr8K8wppcclxuICAgKiAtIGB7IHRleHQ6J0Rhc2hib2FyZCcgfWBcclxuICAgKiAtIGB7IHRleHQ6J0Rhc2hib2FyZCcsIHJldXNlOiB0cnVlIH1gXHJcbiAgICpcclxuICAgKiDDpMK4wo3DpcKPwq/DpcKkwo3Dp8KUwqjDr8K8wppcclxuICAgKiAtIGB7IHRleHQ6J0Rhc2hib2FyZCcsIHJldXNlOiBmYWxzZSB9YFxyXG4gICAqL1xyXG4gIE1lbnUsXHJcbiAgLyoqXHJcbiAgICogw6bCjMKJw6jCj8Kcw6XCjcKVIGBNZW51YCDDpcK8wrrDpcKIwrbDqcKFwo3Dp8K9wq5cclxuICAgKlxyXG4gICAqIMOlwo/Cr8OlwqTCjcOnwpTCqMOvwrzCmlxyXG4gICAqIC0gYHsgdGV4dDonRGFzaGJvYXJkJywgcmV1c2U6IHRydWUgfWBcclxuICAgKlxyXG4gICAqIMOkwrjCjcOlwo/Cr8OlwqTCjcOnwpTCqMOvwrzCmlxyXG4gICAqIC0gYHsgdGV4dDonRGFzaGJvYXJkJyB9YFxyXG4gICAqIC0gYHsgdGV4dDonRGFzaGJvYXJkJywgcmV1c2U6IGZhbHNlIH1gXHJcbiAgICovXHJcbiAgTWVudUZvcmNlLFxyXG4gIC8qKlxyXG4gICAqIMOlwq/CucOmwonCgMOmwpzCicOowrfCr8OnwpTCscOmwpzCicOmwpXCiMOvwrzCjMOlwo/Cr8OkwrvCpcOpwoXCjcOlwpDCiCBgZXhjbHVkZXNgIMOowr/Ch8OmwrvCpMOmwpfCoMOpwqHCu8OlwqTCjcOnwpTCqMOowrfCr8OnwpTCsVxyXG4gICAqL1xyXG4gIFVSTCxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXVzZVRpdGxlIHtcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgaTE4bj86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXVzZVRhYkNhY2hlZCB7XHJcbiAgdGl0bGU6IFJldXNlVGl0bGU7XHJcblxyXG4gIHVybDogc3RyaW5nO1xyXG5cclxuICAvKiogw6bCmMKvw6XCkMKmw6XChcKBw6jCrsK4w6XChcKzw6nCl8Ktw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYHRydWVgICovXHJcbiAgY2xvc2FibGU/OiBib29sZWFuO1xyXG5cclxuICBfc25hcHNob3Q6IEFjdGl2YXRlZFJvdXRlU25hcHNob3Q7XHJcblxyXG4gIF9oYW5kbGU6IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXVzZVRhYk5vdGlmeSB7XHJcbiAgLyoqIMOkwrrCi8OkwrvCtsOnwrHCu8Olwp7CiyAqL1xyXG4gIGFjdGl2ZTogc3RyaW5nO1xyXG5cclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VJdGVtIHtcclxuICB1cmw6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGNsb3NhYmxlOiBib29sZWFuO1xyXG4gIGluZGV4OiBudW1iZXI7XHJcbiAgYWN0aXZlOiBib29sZWFuO1xyXG4gIGxhc3Q6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VDb250ZXh0RXZlbnQge1xyXG4gIGV2ZW50OiBNb3VzZUV2ZW50O1xyXG4gIGl0ZW06IFJldXNlSXRlbTtcclxuICBjb21wPzogUmV1c2VUYWJDb250ZXh0Q29tcG9uZW50O1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBDbG9zZVR5cGUgPSAnY2xvc2UnIHwgJ2Nsb3NlT3RoZXInIHwgJ2Nsb3NlUmlnaHQnIHwgJ2NsZWFyJyB8IG51bGw7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlQ29udGV4dENsb3NlRXZlbnQge1xyXG4gIHR5cGU6IENsb3NlVHlwZTtcclxuICBpdGVtOiBSZXVzZUl0ZW07XHJcbiAgaW5jbHVkZU5vbkNsb3NlYWJsZTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXVzZUNvbnRleHRJMThuIHtcclxuICBjbG9zZT86IHN0cmluZztcclxuICBjbG9zZU90aGVyPzogc3RyaW5nO1xyXG4gIGNsb3NlUmlnaHQ/OiBzdHJpbmc7XHJcbiAgY2xlYXI/OiBzdHJpbmc7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXHJcbiAgQWN0aXZhdGVkUm91dGUsXHJcbiAgUm91dGVyLFxyXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBNZW51U2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcbmltcG9ydCB7XHJcbiAgUmV1c2VUYWJDYWNoZWQsXHJcbiAgUmV1c2VUYWJNYXRjaE1vZGUsXHJcbiAgUmV1c2VUYWJOb3RpZnksXHJcbiAgUmV1c2VUaXRsZSxcclxufSBmcm9tICcuL3JldXNlLXRhYi5pbnRlcmZhY2VzJztcclxuXHJcbi8qKlxyXG4gKiDDqMK3wq/Dp8KUwrHDpcKkwo3Dp8KUwqjDp8KxwrvDr8K8wozDpsKPwpDDpMK+wpvDpcKkwo3Dp8KUwqjDpsKJwoDDqcKcwoDDqMKmwoHDpMK4woDDpMK6wpvDpcKfwrrDpsKcwqzDpsKOwqXDpcKPwqNcclxuICpcclxuICogKirDpsKzwqjDr8K8wpoqKiDDpsKJwoDDpsKcwonDp8K8wpPDpcKtwpjDpsKVwrDDpsKNwq7DpsKdwqXDpsK6wpDDpMK6wo7DqMK3wq/Dp8KUwrHDp8KmwrvDpcK8woDDpcKQwo7DpsKJwo3DpMK8wprDpMK6wqfDp8KUwp9cclxuICovXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBSZXVzZVRhYlNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgX21heCA9IDEwO1xyXG4gIHByaXZhdGUgX2RlYnVnID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfbW9kZSA9IFJldXNlVGFiTWF0Y2hNb2RlLk1lbnU7XHJcbiAgcHJpdmF0ZSBfZXhjbHVkZXM6IFJlZ0V4cFtdID0gW107XHJcbiAgcHJpdmF0ZSBfY2FjaGVkQ2hhbmdlOiBCZWhhdmlvclN1YmplY3Q8XHJcbiAgICBSZXVzZVRhYk5vdGlmeVxyXG4gID4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFJldXNlVGFiTm90aWZ5PihudWxsKTtcclxuICBwcml2YXRlIF9jYWNoZWQ6IFJldXNlVGFiQ2FjaGVkW10gPSBbXTtcclxuICBwcml2YXRlIF90aXRsZUNhY2hlZDogeyBbdXJsOiBzdHJpbmddOiBSZXVzZVRpdGxlIH0gPSB7fTtcclxuICBwcml2YXRlIF9jbG9zYWJsZUNhY2hlZDogeyBbdXJsOiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcclxuICBwcml2YXRlIHJlbW92ZVVybEJ1ZmZlcjogc3RyaW5nO1xyXG5cclxuICAvLyByZWdpb246IHB1YmxpY1xyXG5cclxuICAvKiogw6XCvcKTw6XCicKNw6jCt8Kvw6fClMKxw6XCnMKww6XCncKAICovXHJcbiAgZ2V0IGN1clVybCgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldFVybCh0aGlzLmluamVjdG9yLmdldChBY3RpdmF0ZWRSb3V0ZSkuc25hcHNob3QpO1xyXG4gIH1cclxuXHJcbiAgLyoqIMOlwoXCgcOowq7CuMOmwpzCgMOlwqTCmsOlwqTCjcOnwpTCqMOlwqTCmsOlwrDCkcOkwrjCqsOpwqHCtcOpwp3CosOvwrzCjMOlwo/ClsOlwoDCvMOowozCg8OlwpvCtCBgMi0xMDBgICovXHJcbiAgc2V0IG1heCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9tYXggPSBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgMiksIDEwMCk7XHJcbiAgICBmb3IgKGxldCBpID0gdGhpcy5fY2FjaGVkLmxlbmd0aDsgaSA+IHRoaXMuX21heDsgaS0tKSB7XHJcbiAgICAgIHRoaXMuX2NhY2hlZC5wb3AoKTtcclxuICAgIH1cclxuICB9XHJcbiAgLyoqIMOowq7CvsOnwr3CrsOlwozCucOpwoXCjcOmwqjCocOlwrzCjyAqL1xyXG4gIHNldCBtb2RlKHZhbHVlOiBSZXVzZVRhYk1hdGNoTW9kZSkge1xyXG4gICAgdGhpcy5fbW9kZSA9IHZhbHVlO1xyXG4gIH1cclxuICBnZXQgbW9kZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9tb2RlO1xyXG4gIH1cclxuICAvKiogw6jCrsK+w6fCvcKuRGVidWfDpsKowqHDpcK8wo8gKi9cclxuICBzZXQgZGVidWcodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2RlYnVnID0gdmFsdWU7XHJcbiAgfVxyXG4gIGdldCBkZWJ1ZygpIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWJ1ZztcclxuICB9XHJcbiAgLyoqIMOmwo7CksOpwpnCpMOowqfChMOlwojCmcOvwrzCjMOpwpnCkCBgbW9kZT1VUkxgICovXHJcbiAgc2V0IGV4Y2x1ZGVzKHZhbHVlczogUmVnRXhwW10pIHtcclxuICAgIGlmICghdmFsdWVzKSByZXR1cm47XHJcbiAgICB0aGlzLl9leGNsdWRlcyA9IHZhbHVlcztcclxuICB9XHJcbiAgZ2V0IGV4Y2x1ZGVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2V4Y2x1ZGVzO1xyXG4gIH1cclxuICAvKiogw6jCjsK3w6XCj8KWw6XCt8Kyw6fCvMKTw6XCrcKYw6fCmsKEw6jCt8Kvw6fClMKxICovXHJcbiAgZ2V0IGl0ZW1zKCk6IFJldXNlVGFiQ2FjaGVkW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZDtcclxuICB9XHJcbiAgLyoqIMOowo7Ct8Olwo/ClsOlwr3Ck8OlwonCjcOnwrzCk8Olwq3CmMOnwprChMOowrfCr8OnwpTCscOmwoDCu8OmwpXCsCAqL1xyXG4gIGdldCBjb3VudCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jYWNoZWQubGVuZ3RoO1xyXG4gIH1cclxuICAvKiogw6jCrsKiw6nCmMKFw6fCvMKTw6XCrcKYw6XCj8KYw6bCm8K0w6nCgMKaw6fCn8KlICovXHJcbiAgZ2V0IGNoYW5nZSgpOiBPYnNlcnZhYmxlPFJldXNlVGFiTm90aWZ5PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVkQ2hhbmdlLmFzT2JzZXJ2YWJsZSgpOyAvLyAucGlwZShmaWx0ZXIodyA9PiB3ICE9PSBudWxsKSk7XHJcbiAgfVxyXG4gIC8qKiDDqMKHwqrDpcKuwprDpMK5wonDpcK9wpPDpcKJwo3DpsKgwofDqcKiwpggKi9cclxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IFJldXNlVGl0bGUpIHtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMuY3VyVXJsO1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHZhbHVlID0geyB0ZXh0OiB2YWx1ZSB9O1xyXG4gICAgdGhpcy5fdGl0bGVDYWNoZWRbdXJsXSA9IHZhbHVlO1xyXG4gICAgdGhpcy5kaSgndXBkYXRlIGN1cnJlbnQgdGFnIHRpdGxlOiAnLCB2YWx1ZSk7XHJcbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7XHJcbiAgICAgIGFjdGl2ZTogJ3RpdGxlJyxcclxuICAgICAgdGl0bGU6IHZhbHVlLFxyXG4gICAgICBsaXN0OiB0aGlzLl9jYWNoZWQsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgLyoqIMOowo7Ct8Olwo/ClsOmwozCh8Olwq7CmsOowrfCr8Olwr7ChMOnwrzCk8Olwq3CmMOmwonCgMOlwpzCqMOkwr3CjcOnwr3CrsOvwrzCjGAtMWAgw6jCocKow6fCpMK6w6bCl8Kgw6fCvMKTw6XCrcKYICovXHJcbiAgaW5kZXgodXJsOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZC5maW5kSW5kZXgodyA9PiB3LnVybCA9PT0gdXJsKTtcclxuICB9XHJcbiAgLyoqIMOowo7Ct8Olwo/ClsOmwozCh8Olwq7CmsOowrfCr8Olwr7ChMOnwrzCk8Olwq3CmMOmwpjCr8OlwpDCpsOlwq3CmMOlwpzCqCAqL1xyXG4gIGV4aXN0cyh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5kZXgodXJsKSAhPT0gLTE7XHJcbiAgfVxyXG4gIC8qKiDDqMKOwrfDpcKPwpbDpsKMwofDpcKuwprDqMK3wq/DpcK+woTDp8K8wpPDpcKtwpggKi9cclxuICBnZXQodXJsOiBzdHJpbmcpOiBSZXVzZVRhYkNhY2hlZCB7XHJcbiAgICByZXR1cm4gdXJsID8gdGhpcy5fY2FjaGVkLmZpbmQodyA9PiB3LnVybCA9PT0gdXJsKSB8fCBudWxsIDogbnVsbDtcclxuICB9XHJcbiAgcHJpdmF0ZSByZW1vdmUodXJsOiBzdHJpbmcgfCBudW1iZXIsIGluY2x1ZGVOb25DbG9zZWFibGU6IGJvb2xlYW4pOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGlkeCA9IHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnID8gdGhpcy5pbmRleCh1cmwpIDogdXJsO1xyXG4gICAgY29uc3QgaXRlbSA9IGlkeCAhPT0gLTEgPyB0aGlzLl9jYWNoZWRbaWR4XSA6IG51bGw7XHJcbiAgICBpZiAoIWl0ZW0gfHwgKCFpbmNsdWRlTm9uQ2xvc2VhYmxlICYmICFpdGVtLmNsb3NhYmxlKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIHRoaXMuZGVzdHJveShpdGVtLl9oYW5kbGUpO1xyXG5cclxuICAgIHRoaXMuX2NhY2hlZC5zcGxpY2UoaWR4LCAxKTtcclxuICAgIGRlbGV0ZSB0aGlzLl90aXRsZUNhY2hlZFt1cmxdO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIMOmwqDCucOmwo3CrlVSTMOnwqfCu8OpwpnCpMOmwqDCh8Onwq3CvlxyXG4gICAqXHJcbiAgICogQHBhcmFtIFtpbmNsdWRlTm9uQ2xvc2VhYmxlPWZhbHNlXSDDpsKYwq/DpcKQwqbDpcK8wrrDpcKIwrbDpcKMwoXDpcKQwqvDpMK4wo3DpcKPwq/DpcKFwrPDqcKXwq1cclxuICAgKi9cclxuICBjbG9zZSh1cmw6IHN0cmluZywgaW5jbHVkZU5vbkNsb3NlYWJsZSA9IGZhbHNlKSB7XHJcbiAgICB0aGlzLnJlbW92ZVVybEJ1ZmZlciA9IHVybDtcclxuXHJcbiAgICB0aGlzLnJlbW92ZSh1cmwsIGluY2x1ZGVOb25DbG9zZWFibGUpO1xyXG5cclxuICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHsgYWN0aXZlOiAnY2xvc2UnLCB1cmwsIGxpc3Q6IHRoaXMuX2NhY2hlZCB9KTtcclxuXHJcbiAgICB0aGlzLmRpKCdjbG9zZSB0YWcnLCB1cmwpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIMOmwrjChcOpwpnCpMOlwo/Cs8Oowr7CuVxyXG4gICAqXHJcbiAgICogQHBhcmFtIFtpbmNsdWRlTm9uQ2xvc2VhYmxlPWZhbHNlXSDDpsKYwq/DpcKQwqbDpcK8wrrDpcKIwrbDpcKMwoXDpcKQwqvDpMK4wo3DpcKPwq/DpcKFwrPDqcKXwq1cclxuICAgKi9cclxuICBjbG9zZVJpZ2h0KHVybDogc3RyaW5nLCBpbmNsdWRlTm9uQ2xvc2VhYmxlID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5pbmRleCh1cmwpO1xyXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY291bnQgLSAxOyBpID4gc3RhcnQ7IGktLSkge1xyXG4gICAgICB0aGlzLnJlbW92ZShpLCBpbmNsdWRlTm9uQ2xvc2VhYmxlKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlbW92ZVVybEJ1ZmZlciA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoeyBhY3RpdmU6ICdjbG9zZVJpZ2h0JywgdXJsLCBsaXN0OiB0aGlzLl9jYWNoZWQgfSk7XHJcblxyXG4gICAgdGhpcy5kaSgnY2xvc2UgcmlnaHQgdGFnZXMnLCB1cmwpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIMOmwrjChcOpwpnCpMOmwonCgMOmwpzCicOnwrzCk8Olwq3CmFxyXG4gICAqXHJcbiAgICogQHBhcmFtIFtpbmNsdWRlTm9uQ2xvc2VhYmxlPWZhbHNlXSDDpsKYwq/DpcKQwqbDpcK8wrrDpcKIwrbDpcKMwoXDpcKQwqvDpMK4wo3DpcKPwq/DpcKFwrPDqcKXwq1cclxuICAgKi9cclxuICBjbGVhcihpbmNsdWRlTm9uQ2xvc2VhYmxlID0gZmFsc2UpIHtcclxuICAgIHRoaXMuX2NhY2hlZC5mb3JFYWNoKHcgPT4ge1xyXG4gICAgICBpZiAoIWluY2x1ZGVOb25DbG9zZWFibGUgJiYgdy5jbG9zYWJsZSkgdGhpcy5kZXN0cm95KHcuX2hhbmRsZSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX2NhY2hlZCA9IHRoaXMuX2NhY2hlZC5maWx0ZXIoXHJcbiAgICAgIHcgPT4gIWluY2x1ZGVOb25DbG9zZWFibGUgJiYgIXcuY2xvc2FibGUsXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMucmVtb3ZlVXJsQnVmZmVyID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7IGFjdGl2ZTogJ2NsZWFyJywgbGlzdDogdGhpcy5fY2FjaGVkIH0pO1xyXG5cclxuICAgIHRoaXMuZGkoJ2NsZWFyIGFsbCBjYXRjaCcpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiDDp8KnwrvDpcKKwqjDp8K8wpPDpcKtwpjDpsKVwrDDpsKNwq5cclxuICAgKiBAcGFyYW0gdXJsIMOowqbCgcOnwqfCu8OlworCqMOnwprChFVSTMOlwpzCsMOlwp3CgFxyXG4gICAqIEBwYXJhbSBwb3NpdGlvbiDDpsKWwrDDpMK9wo3Dp8K9wq7Dr8K8wozDpMK4wovDpsKgwofDpMK7wo4gYDBgIMOlwrzCgMOlwqfCi1xyXG4gICAqXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiBgYGBcclxuICAgKiAvLyBzb3VyY2VcclxuICAgKiBbICcvYS8xJywgJy9hLzInLCAnL2EvMycsICcvYS80JywgJy9hLzUnIF1cclxuICAgKiBtb3ZlKCcvYS8xJywgMik7XHJcbiAgICogLy8gb3V0cHV0XHJcbiAgICogWyAnL2EvMicsICcvYS8zJywgJy9hLzEnLCAnL2EvNCcsICcvYS81JyBdXHJcbiAgICogbW92ZSgnL2EvMScsIC0xKTtcclxuICAgKiAvLyBvdXRwdXRcclxuICAgKiBbICcvYS8yJywgJy9hLzMnLCAnL2EvNCcsICcvYS81JywgJy9hLzEnIF1cclxuICAgKiBgYGBcclxuICAgKi9cclxuICBtb3ZlKHVybDogc3RyaW5nLCBwb3NpdGlvbjogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuX2NhY2hlZC5maW5kSW5kZXgodyA9PiB3LnVybCA9PT0gdXJsKTtcclxuICAgIGlmIChzdGFydCA9PT0gLTEpIHJldHVybjtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9jYWNoZWQuc2xpY2UoKTtcclxuICAgIGRhdGEuc3BsaWNlKFxyXG4gICAgICBwb3NpdGlvbiA8IDAgPyBkYXRhLmxlbmd0aCArIHBvc2l0aW9uIDogcG9zaXRpb24sXHJcbiAgICAgIDAsXHJcbiAgICAgIGRhdGEuc3BsaWNlKHN0YXJ0LCAxKVswXSxcclxuICAgICk7XHJcbiAgICB0aGlzLl9jYWNoZWQgPSBkYXRhO1xyXG4gICAgdGhpcy5fY2FjaGVkQ2hhbmdlLm5leHQoe1xyXG4gICAgICBhY3RpdmU6ICdtb3ZlJyxcclxuICAgICAgdXJsLFxyXG4gICAgICBwb3NpdGlvbixcclxuICAgICAgbGlzdDogdGhpcy5fY2FjaGVkLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIMOlwrzCusOlwojCtsOlwoXCs8OpwpfCrcOlwr3Ck8OlwonCjcOowrfCr8OnwpTCscOvwrzCiMOlwozChcOlwpDCq8OkwrjCjcOlwo/Cr8OlwoXCs8OpwpfCrcOnworCtsOmwoDCgcOvwrzCicOvwrzCjMOlwrnCtsOpwofCjcOmwpbCsMOlwq/CvMOowojCqsOowofCsyBgbmV3VXJsYCDDqMK3wq/Dp8KUwrFcclxuICAgKi9cclxuICByZXBsYWNlKG5ld1VybDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLmN1clVybDtcclxuICAgIGlmICh0aGlzLmV4aXN0cyh1cmwpKSB7XHJcbiAgICAgIHRoaXMuY2xvc2UodXJsLCB0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlVXJsQnVmZmVyID0gdXJsO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pbmplY3Rvci5nZXQoUm91dGVyKS5uYXZpZ2F0ZUJ5VXJsKG5ld1VybCk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIMOowo7Ct8Olwo/ClsOmwqDCh8OpwqLCmMOvwrzCjMOpwqHCusOlwrrCj8OlwqbCgsOkwrjCi8OvwrzCmlxyXG4gICAqXHJcbiAgICogMS4gw6fCu8KEw6TCu8K2w6XChsKFw6TCvcK/w6fClMKoIGBSZXVzZVRhYlNlcnZpY2UudGl0bGUgPSAnbmV3IHRpdGxlJ2Agw6nCh8KNw6bClsKww6bCjMKHw6XCrsKaw6bClsKHw6bCnMKsXHJcbiAgICogMi4gw6jCt8Kvw6fClMKxw6nChcKNw6fCvcKuw6TCuMKtIGRhdGEgw6XCscKew6bCgMKnw6TCuMKtw6XCjMKFw6XCkMKrIHRpdGxlSTE4biA+IHRpdGxlXHJcbiAgICogMy4gw6jCj8Kcw6XCjcKVw6bClcKww6bCjcKuw6TCuMKtIHRleHQgw6XCscKew6bCgMKnXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdXJsIMOmwozCh8Olwq7CmlVSTFxyXG4gICAqIEBwYXJhbSByb3V0ZSDDpsKMwofDpcKuwprDqMK3wq/Dp8KUwrHDpcK/wqvDp8KFwqdcclxuICAgKi9cclxuICBnZXRUaXRsZSh1cmw6IHN0cmluZywgcm91dGU/OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogUmV1c2VUaXRsZSB7XHJcbiAgICBpZiAodGhpcy5fdGl0bGVDYWNoZWRbdXJsXSkgcmV0dXJuIHRoaXMuX3RpdGxlQ2FjaGVkW3VybF07XHJcblxyXG4gICAgaWYgKHJvdXRlICYmIHJvdXRlLmRhdGEgJiYgKHJvdXRlLmRhdGEudGl0bGVJMThuIHx8IHJvdXRlLmRhdGEudGl0bGUpKVxyXG4gICAgICByZXR1cm4gPFJldXNlVGl0bGU+e1xyXG4gICAgICAgIHRleHQ6IHJvdXRlLmRhdGEudGl0bGUsXHJcbiAgICAgICAgaTE4bjogcm91dGUuZGF0YS50aXRsZUkxOG4sXHJcbiAgICAgIH07XHJcblxyXG4gICAgY29uc3QgbWVudSA9XHJcbiAgICAgIHRoaXMubW9kZSAhPT0gUmV1c2VUYWJNYXRjaE1vZGUuVVJMID8gdGhpcy5nZXRNZW51KHVybCkgOiBudWxsO1xyXG4gICAgcmV0dXJuIG1lbnUgPyB7IHRleHQ6IG1lbnUudGV4dCwgaTE4bjogbWVudS5pMThuIH0gOiB7IHRleHQ6IHVybCB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogw6bCuMKFw6nCmcKkw6bCoMKHw6nCosKYw6fCvMKTw6XCrcKYXHJcbiAgICovXHJcbiAgY2xlYXJUaXRsZUNhY2hlZCgpIHtcclxuICAgIHRoaXMuX3RpdGxlQ2FjaGVkID0ge307XHJcbiAgfVxyXG4gIC8qKiDDqMKHwqrDpcKuwprDpMK5wonDpcK9wpPDpcKJwo0gYGNsb3NhYmxlYCDDp8KKwrbDpsKAwoEgKi9cclxuICBzZXQgY2xvc2FibGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMuY3VyVXJsO1xyXG4gICAgdGhpcy5fY2xvc2FibGVDYWNoZWRbdXJsXSA9IHZhbHVlO1xyXG4gICAgdGhpcy5kaSgndXBkYXRlIGN1cnJlbnQgdGFnIGNsb3NhYmxlOiAnLCB2YWx1ZSk7XHJcbiAgICB0aGlzLl9jYWNoZWRDaGFuZ2UubmV4dCh7XHJcbiAgICAgIGFjdGl2ZTogJ2Nsb3NhYmxlJyxcclxuICAgICAgY2xvc2FibGU6IHZhbHVlLFxyXG4gICAgICBsaXN0OiB0aGlzLl9jYWNoZWQsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogw6jCjsK3w6XCj8KWIGBjbG9zYWJsZWAgw6fCisK2w6bCgMKBw6/CvMKMw6nCocK6w6XCusKPw6XCpsKCw6TCuMKLw6/CvMKaXHJcbiAgICpcclxuICAgKiAxLiDDp8K7woTDpMK7wrbDpcKGwoXDpMK9wr/Dp8KUwqggYFJldXNlVGFiU2VydmljZS5jbG9zYWJsZSA9IHRydWVgIMOpwofCjcOmwpbCsMOmwozCh8Olwq7CmiBgY2xvc2FibGVgIMOnworCtsOmwoDCgVxyXG4gICAqIDIuIMOowrfCr8OnwpTCscOpwoXCjcOnwr3CrsOkwrjCrSBkYXRhIMOlwrHCnsOmwoDCp8OkwrjCrcOlwozChcOlwpDCqyBgcmV1c2VDbG9zYWJsZWBcclxuICAgKiAzLiDDqMKPwpzDpcKNwpXDpsKVwrDDpsKNwq7DpMK4wq0gYHJldXNlQ2xvc2FibGVgIMOlwrHCnsOmwoDCp1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHVybCDDpsKMwofDpcKuwppVUkxcclxuICAgKiBAcGFyYW0gcm91dGUgw6bCjMKHw6XCrsKaw6jCt8Kvw6fClMKxw6XCv8Krw6fChcKnXHJcbiAgICovXHJcbiAgZ2V0Q2xvc2FibGUodXJsOiBzdHJpbmcsIHJvdXRlPzogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLl9jbG9zYWJsZUNhY2hlZFt1cmxdICE9PSAndW5kZWZpbmVkJylcclxuICAgICAgcmV0dXJuIHRoaXMuX2Nsb3NhYmxlQ2FjaGVkW3VybF07XHJcblxyXG4gICAgaWYgKHJvdXRlICYmIHJvdXRlLmRhdGEgJiYgdHlwZW9mIHJvdXRlLmRhdGEucmV1c2VDbG9zYWJsZSA9PT0gJ2Jvb2xlYW4nKVxyXG4gICAgICByZXR1cm4gcm91dGUuZGF0YS5yZXVzZUNsb3NhYmxlO1xyXG5cclxuICAgIGNvbnN0IG1lbnUgPVxyXG4gICAgICB0aGlzLm1vZGUgIT09IFJldXNlVGFiTWF0Y2hNb2RlLlVSTCA/IHRoaXMuZ2V0TWVudSh1cmwpIDogbnVsbDtcclxuICAgIGlmIChtZW51ICYmIHR5cGVvZiBtZW51LnJldXNlQ2xvc2FibGUgPT09ICdib29sZWFuJylcclxuICAgICAgcmV0dXJuIG1lbnUucmV1c2VDbG9zYWJsZTtcclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogw6bCuMKFw6fCqcK6IGBjbG9zYWJsZWAgw6fCvMKTw6XCrcKYXHJcbiAgICovXHJcbiAgY2xlYXJDbG9zYWJsZUNhY2hlZCgpIHtcclxuICAgIHRoaXMuX2Nsb3NhYmxlQ2FjaGVkID0ge307XHJcbiAgfVxyXG4gIGdldFRydXRoUm91dGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpIHtcclxuICAgIGxldCBuZXh0ID0gcm91dGU7XHJcbiAgICB3aGlsZSAobmV4dC5maXJzdENoaWxkKSBuZXh0ID0gbmV4dC5maXJzdENoaWxkO1xyXG4gICAgcmV0dXJuIG5leHQ7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIMOmwqDCucOmwo3CrsOlwr/Cq8OnwoXCp8Oowo7Ct8Olwo/CllVSTMOlwpzCsMOlwp3CgFxyXG4gICAqL1xyXG4gIGdldFVybChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IHN0cmluZyB7XHJcbiAgICBsZXQgbmV4dCA9IHRoaXMuZ2V0VHJ1dGhSb3V0ZShyb3V0ZSk7XHJcbiAgICBjb25zdCBzZWdtZW50cyA9IFtdO1xyXG4gICAgd2hpbGUgKG5leHQpIHtcclxuICAgICAgc2VnbWVudHMucHVzaChuZXh0LnVybC5qb2luKCcvJykpO1xyXG4gICAgICBuZXh0ID0gbmV4dC5wYXJlbnQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCB1cmwgPVxyXG4gICAgICAnLycgK1xyXG4gICAgICBzZWdtZW50c1xyXG4gICAgICAgIC5maWx0ZXIoaSA9PiBpKVxyXG4gICAgICAgIC5yZXZlcnNlKClcclxuICAgICAgICAuam9pbignLycpO1xyXG4gICAgcmV0dXJuIHVybDtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogw6bCo8KAw6bCn8Klw6XCv8Krw6fChcKnw6bCmMKvw6XCkMKmw6XChcKBw6jCrsK4w6jCosKrw6XCpMKNw6fClMKoXHJcbiAgICovXHJcbiAgY2FuKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVybChyb3V0ZSk7XHJcbiAgICBpZiAodXJsID09PSB0aGlzLnJlbW92ZVVybEJ1ZmZlcikgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGlmIChyb3V0ZS5kYXRhICYmIHR5cGVvZiByb3V0ZS5kYXRhLnJldXNlID09PSAnYm9vbGVhbicpXHJcbiAgICAgIHJldHVybiByb3V0ZS5kYXRhLnJldXNlO1xyXG5cclxuICAgIGlmICh0aGlzLm1vZGUgIT09IFJldXNlVGFiTWF0Y2hNb2RlLlVSTCkge1xyXG4gICAgICBjb25zdCBtZW51ID0gdGhpcy5nZXRNZW51KHVybCk7XHJcbiAgICAgIGlmICghbWVudSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBpZiAodGhpcy5tb2RlID09PSBSZXVzZVRhYk1hdGNoTW9kZS5NZW51KSB7XHJcbiAgICAgICAgaWYgKG1lbnUucmV1c2UgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCFtZW51LnJldXNlIHx8IG1lbnUucmV1c2UgIT09IHRydWUpIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9leGNsdWRlcy5maW5kSW5kZXgociA9PiByLnRlc3QodXJsKSkgPT09IC0xO1xyXG4gIH1cclxuICAvKipcclxuICAgKiDDpcKIwrfDpsKWwrDDr8K8wozDqMKnwqbDpcKPwpHDpMK4woDDpMK4wqogcmVmcmVzaCDDp8KxwrvDpcKewovDpMK6wovDpMK7wrZcclxuICAgKi9cclxuICByZWZyZXNoKGRhdGE/OiBhbnkpIHtcclxuICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHsgYWN0aXZlOiAncmVmcmVzaCcsIGRhdGEgfSk7XHJcbiAgfVxyXG4gIC8vIGVuZHJlZ2lvblxyXG5cclxuICAvLyByZWdpb246IHByaXZhdGVzXHJcblxyXG4gIHByaXZhdGUgZGVzdHJveShfaGFuZGxlOiBhbnkpIHtcclxuICAgIGlmIChfaGFuZGxlICYmIF9oYW5kbGUuY29tcG9uZW50UmVmICYmIF9oYW5kbGUuY29tcG9uZW50UmVmLmRlc3Ryb3kpXHJcbiAgICAgIF9oYW5kbGUuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGkoLi4uYXJncykge1xyXG4gICAgaWYgKCF0aGlzLmRlYnVnKSByZXR1cm47XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxyXG4gICAgY29uc29sZS53YXJuKC4uLmFyZ3MpO1xyXG4gIH1cclxuXHJcbiAgLy8gZW5kcmVnaW9uXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLCBwcml2YXRlIG1lbnVTZXJ2aWNlOiBNZW51U2VydmljZSkge31cclxuXHJcbiAgcHJpdmF0ZSBnZXRNZW51KHVybDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBtZW51cyA9IHRoaXMubWVudVNlcnZpY2UuZ2V0UGF0aEJ5VXJsKHVybCk7XHJcbiAgICBpZiAoIW1lbnVzIHx8IG1lbnVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XHJcbiAgICByZXR1cm4gbWVudXMucG9wKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJ1bkhvb2sobWV0aG9kOiBzdHJpbmcsIHVybDogc3RyaW5nLCBjb21wOiBhbnkpIHtcclxuICAgIGlmIChjb21wLmluc3RhbmNlICYmIHR5cGVvZiBjb21wLmluc3RhbmNlW21ldGhvZF0gPT09ICdmdW5jdGlvbicpXHJcbiAgICAgIGNvbXAuaW5zdGFuY2VbbWV0aG9kXSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYXNJblZhbGlkUm91dGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICFyb3V0ZS5yb3V0ZUNvbmZpZyB8fFxyXG4gICAgICByb3V0ZS5yb3V0ZUNvbmZpZy5sb2FkQ2hpbGRyZW4gfHxcclxuICAgICAgcm91dGUucm91dGVDb25maWcuY2hpbGRyZW5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDpcKGwrPDpcKuwprDpsKYwq/DpcKQwqbDpcKFwoHDqMKuwrjDqMK3wq/Dp8KUwrHDpcKkwo3Dp8KUwqjDr8K8wozDqMKLwqUgYHRydWVgIMOkwrzCmsOowqfCpsOlwo/CkSBgc3RvcmVgXHJcbiAgICovXHJcbiAgc2hvdWxkRGV0YWNoKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5oYXNJblZhbGlkUm91dGUocm91dGUpKSByZXR1cm4gZmFsc2U7XHJcbiAgICB0aGlzLmRpKCcjc2hvdWxkRGV0YWNoJywgdGhpcy5jYW4ocm91dGUpLCB0aGlzLmdldFVybChyb3V0ZSkpO1xyXG4gICAgcmV0dXJuIHRoaXMuY2FuKHJvdXRlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOlwq3CmMOlwoLCqFxyXG4gICAqL1xyXG4gIHN0b3JlKF9zbmFwc2hvdDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgX2hhbmRsZTogYW55KSB7XHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVybChfc25hcHNob3QpO1xyXG4gICAgY29uc3QgaWR4ID0gdGhpcy5pbmRleCh1cmwpO1xyXG5cclxuICAgIGNvbnN0IGl0ZW06IFJldXNlVGFiQ2FjaGVkID0ge1xyXG4gICAgICB0aXRsZTogdGhpcy5nZXRUaXRsZSh1cmwsIF9zbmFwc2hvdCksXHJcbiAgICAgIGNsb3NhYmxlOiB0aGlzLmdldENsb3NhYmxlKHVybCwgX3NuYXBzaG90KSxcclxuICAgICAgdXJsLFxyXG4gICAgICBfc25hcHNob3QsXHJcbiAgICAgIF9oYW5kbGUsXHJcbiAgICB9O1xyXG4gICAgaWYgKGlkeCA9PT0gLTEpIHtcclxuICAgICAgdGhpcy5fY2FjaGVkLnB1c2goaXRlbSk7XHJcbiAgICAgIGlmICh0aGlzLmNvdW50ID4gdGhpcy5fbWF4KSB0aGlzLl9jYWNoZWQuc2hpZnQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2NhY2hlZFtpZHhdID0gaXRlbTtcclxuICAgIH1cclxuICAgIHRoaXMucmVtb3ZlVXJsQnVmZmVyID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLmRpKCcjc3RvcmUnLCBpZHggPT09IC0xID8gJ1tuZXddJyA6ICdbb3ZlcnJpZGVdJywgdXJsKTtcclxuXHJcbiAgICBpZiAoX2hhbmRsZSAmJiBfaGFuZGxlLmNvbXBvbmVudFJlZikge1xyXG4gICAgICB0aGlzLnJ1bkhvb2soJ19vblJldXNlRGVzdHJveScsIHVybCwgX2hhbmRsZS5jb21wb25lbnRSZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2NhY2hlZENoYW5nZS5uZXh0KHsgYWN0aXZlOiAnYWRkJywgaXRlbSwgbGlzdDogdGhpcy5fY2FjaGVkIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogw6XChsKzw6XCrsKaw6bCmMKvw6XCkMKmw6XChcKBw6jCrsK4w6XCusKUw6fClMKow6fCvMKTw6XCrcKYw6bClcKww6bCjcKuXHJcbiAgICovXHJcbiAgc2hvdWxkQXR0YWNoKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5oYXNJblZhbGlkUm91dGUocm91dGUpKSByZXR1cm4gZmFsc2U7XHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVybChyb3V0ZSk7XHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5nZXQodXJsKTtcclxuICAgIGNvbnN0IHJldCA9ICEhKGRhdGEgJiYgZGF0YS5faGFuZGxlKTtcclxuICAgIHRoaXMuZGkoJyNzaG91bGRBdHRhY2gnLCByZXQsIHVybCk7XHJcbiAgICBpZiAocmV0ICYmIGRhdGEuX2hhbmRsZS5jb21wb25lbnRSZWYpIHtcclxuICAgICAgdGhpcy5ydW5Ib29rKCdfb25SZXVzZUluaXQnLCB1cmwsIGRhdGEuX2hhbmRsZS5jb21wb25lbnRSZWYpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOmwo/CkMOlwo/ClsOlwqTCjcOnwpTCqMOmwpXCsMOmwo3CrlxyXG4gICAqL1xyXG4gIHJldHJpZXZlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KToge30ge1xyXG4gICAgaWYgKHRoaXMuaGFzSW5WYWxpZFJvdXRlKHJvdXRlKSkgcmV0dXJuIG51bGw7XHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVybChyb3V0ZSk7XHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5nZXQodXJsKTtcclxuICAgIGNvbnN0IHJldCA9IChkYXRhICYmIGRhdGEuX2hhbmRsZSkgfHwgbnVsbDtcclxuICAgIHRoaXMuZGkoJyNyZXRyaWV2ZScsIHVybCwgcmV0KTtcclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDpcKGwrPDpcKuwprDpsKYwq/DpcKQwqbDpcK6wpTDqMKvwqXDqMK/wpvDqMKhwozDpcKkwo3Dp8KUwqjDqMK3wq/Dp8KUwrHDpcKkwoTDp8KQwoZcclxuICAgKi9cclxuICBzaG91bGRSZXVzZVJvdXRlKFxyXG4gICAgZnV0dXJlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxyXG4gICAgY3VycjogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcclxuICApOiBib29sZWFuIHtcclxuICAgIGxldCByZXQgPSBmdXR1cmUucm91dGVDb25maWcgPT09IGN1cnIucm91dGVDb25maWc7XHJcbiAgICBpZiAoIXJldCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IHBhdGggPSAoKGZ1dHVyZS5yb3V0ZUNvbmZpZyAmJiBmdXR1cmUucm91dGVDb25maWcucGF0aCkgfHxcclxuICAgICAgJycpIGFzIHN0cmluZztcclxuICAgIGlmIChwYXRoLmxlbmd0aCA+IDAgJiYgfnBhdGguaW5kZXhPZignOicpKSB7XHJcbiAgICAgIGNvbnN0IGZ1dHVyZVVybCA9IHRoaXMuZ2V0VXJsKGZ1dHVyZSk7XHJcbiAgICAgIGNvbnN0IGN1cnJVcmwgPSB0aGlzLmdldFVybChjdXJyKTtcclxuICAgICAgcmV0ID0gZnV0dXJlVXJsID09PSBjdXJyVXJsO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kaSgnPT09PT09PT09PT09PT09PT09PT09Jyk7XHJcbiAgICB0aGlzLmRpKFxyXG4gICAgICAnI3Nob3VsZFJldXNlUm91dGUnLFxyXG4gICAgICByZXQsXHJcbiAgICAgIGAke3RoaXMuZ2V0VXJsKGN1cnIpfT0+JHt0aGlzLmdldFVybChmdXR1cmUpfWAsXHJcbiAgICAgIGZ1dHVyZSxcclxuICAgICAgY3VycixcclxuICAgICk7XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jYWNoZWQgPSBbXTtcclxuICAgIHRoaXMuX2NhY2hlZENoYW5nZS51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPbkluaXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2UsXHJcbiAgT25EZXN0cm95LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIEluamVjdCxcclxuICBPcHRpb25hbCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRW5kLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgSW5wdXROdW1iZXIsIElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuaW1wb3J0IHsgQUxBSU5fSTE4Tl9UT0tFTiwgQWxhaW5JMThOU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcblxyXG5pbXBvcnQgeyBSZXVzZVRhYlNlcnZpY2UgfSBmcm9tICcuL3JldXNlLXRhYi5zZXJ2aWNlJztcclxuaW1wb3J0IHtcclxuICBSZXVzZVRhYkNhY2hlZCxcclxuICBSZXVzZVRhYk5vdGlmeSxcclxuICBSZXVzZVRhYk1hdGNoTW9kZSxcclxuICBSZXVzZUl0ZW0sXHJcbiAgUmV1c2VDb250ZXh0STE4bixcclxuICBSZXVzZUNvbnRleHRDbG9zZUV2ZW50LFxyXG4gIFJldXNlVGl0bGUsXHJcbn0gZnJvbSAnLi9yZXVzZS10YWIuaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dFNlcnZpY2UgfSBmcm9tICcuL3JldXNlLXRhYi1jb250ZXh0LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdyZXVzZS10YWInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXVzZS10YWIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHByb3ZpZGVyczogW1JldXNlVGFiQ29udGV4dFNlcnZpY2VdLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MucmV1c2UtdGFiXSc6ICd0cnVlJyxcclxuICB9LFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmV1c2VUYWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIHN1YiQ6IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIGkxOG4kOiBTdWJzY3JpcHRpb247XHJcbiAgbGlzdDogUmV1c2VJdGVtW10gPSBbXTtcclxuICBpdGVtOiBSZXVzZUl0ZW07XHJcbiAgcG9zID0gMDtcclxuXHJcbiAgLy8gI3JlZ2lvbiBmaWVsZHNcclxuXHJcbiAgLyoqIMOowq7CvsOnwr3CrsOlwozCucOpwoXCjcOmwqjCocOlwrzCjyAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgbW9kZTogUmV1c2VUYWJNYXRjaE1vZGUgPSBSZXVzZVRhYk1hdGNoTW9kZS5NZW51O1xyXG4gIC8qKiDDqcKAwonDqcKhwrnDpsKWwofDpsKcwqzDpcKbwr3DqcKZwoXDpcKMwpYgKi9cclxuICBASW5wdXQoKVxyXG4gIGkxOG46IFJldXNlQ29udGV4dEkxOG47XHJcbiAgLyoqIMOmwpjCr8OlwpDCpkRlYnVnw6bCqMKhw6XCvMKPICovXHJcbiAgQElucHV0KClcclxuICBASW5wdXRCb29sZWFuKClcclxuICBkZWJ1ZyA9IGZhbHNlO1xyXG4gIC8qKiDDpcKFwoHDqMKuwrjDpsKcwoDDpcKkwprDpcKkwo3Dp8KUwqjDpcKkwprDpcKwwpHDpMK4wqrDqcKhwrXDqcKdwqIgKi9cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dE51bWJlcigpXHJcbiAgbWF4OiBudW1iZXI7XHJcbiAgLyoqIMOmwo7CksOpwpnCpMOowqfChMOlwojCmcOvwrzCjMOpwpnCkCBgbW9kZT1VUkxgICovXHJcbiAgQElucHV0KClcclxuICBleGNsdWRlczogUmVnRXhwW107XHJcbiAgLyoqIMOlwoXCgcOowq7CuMOlwoXCs8OpwpfCrSAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0Qm9vbGVhbigpXHJcbiAgYWxsb3dDbG9zZSA9IHRydWU7XHJcbiAgLyoqIMOmwoDCu8OmwpjCr8OmwpjCvsOnwqTCusOlwr3Ck8OlwonCjcOpwqHCtSAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0Qm9vbGVhbigpXHJcbiAgc2hvd0N1cnJlbnQgPSB0cnVlO1xyXG4gIC8qKiDDpcKIwofDpsKNwqLDpsKXwrbDpcKbwp7DqMKwwoMgKi9cclxuICBAT3V0cHV0KClcclxuICBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxSZXVzZUl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcjxSZXVzZUl0ZW0+KCk7XHJcbiAgLyoqIMOlwoXCs8OpwpfCrcOlwpvCnsOowrDCgyAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIGNsb3NlOiBFdmVudEVtaXR0ZXI8UmV1c2VJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXI8UmV1c2VJdGVtPigpO1xyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZWw6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHNydjogUmV1c2VUYWJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIHJlbmRlcjogUmVuZGVyZXIyLFxyXG4gICAgQE9wdGlvbmFsKClcclxuICAgIEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTilcclxuICAgIHByaXZhdGUgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcclxuICApIHtcclxuICAgIHRoaXMuZWwgPSBlbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgY29uc3Qgcm91dGUkID0gdGhpcy5yb3V0ZXIuZXZlbnRzLnBpcGUoXHJcbiAgICAgIGZpbHRlcihldnQgPT4gZXZ0IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCksXHJcbiAgICApO1xyXG4gICAgdGhpcy5zdWIkID0gY29tYmluZUxhdGVzdCh0aGlzLnNydi5jaGFuZ2UsIHJvdXRlJCkuc3Vic2NyaWJlKChbcmVzLCBlXSkgPT5cclxuICAgICAgdGhpcy5nZW5MaXN0KHJlcyBhcyBhbnkpLFxyXG4gICAgKTtcclxuICAgIGlmICh0aGlzLmkxOG5TcnYpIHtcclxuICAgICAgdGhpcy5pMThuJCA9IHRoaXMuaTE4blNydi5jaGFuZ2VcclxuICAgICAgICAucGlwZShkZWJvdW5jZVRpbWUoMTAwKSlcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuZ2VuTGlzdCgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2VuVGl0KHRpdGxlOiBSZXVzZVRpdGxlKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aXRsZS5pMThuICYmIHRoaXMuaTE4blNydlxyXG4gICAgICA/IHRoaXMuaTE4blNydi5mYW55aSh0aXRsZS5pMThuKVxyXG4gICAgICA6IHRpdGxlLnRleHQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdlbkxpc3Qobm90aWZ5PzogUmV1c2VUYWJOb3RpZnkpIHtcclxuICAgIGNvbnN0IGlzQ2xvc2VkID0gbm90aWZ5ICYmIG5vdGlmeS5hY3RpdmUgPT09ICdjbG9zZSc7XHJcbiAgICBjb25zdCBiZWZvcmVDbG9zZVBvcyA9IGlzQ2xvc2VkXHJcbiAgICAgID8gdGhpcy5saXN0LmZpbmRJbmRleCh3ID0+IHcudXJsID09PSBub3RpZnkudXJsKVxyXG4gICAgICA6IC0xO1xyXG4gICAgY29uc3QgbHMgPSB0aGlzLnNydi5pdGVtcy5tYXAoKGl0ZW06IFJldXNlVGFiQ2FjaGVkLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIHJldHVybiA8UmV1c2VJdGVtPntcclxuICAgICAgICB1cmw6IGl0ZW0udXJsLFxyXG4gICAgICAgIHRpdGxlOiB0aGlzLmdlblRpdChpdGVtLnRpdGxlKSxcclxuICAgICAgICBjbG9zYWJsZTogdGhpcy5hbGxvd0Nsb3NlICYmIGl0ZW0uY2xvc2FibGUgJiYgdGhpcy5zcnYuY291bnQgPiAwLFxyXG4gICAgICAgIGluZGV4LFxyXG4gICAgICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgbGFzdDogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIGlmICh0aGlzLnNob3dDdXJyZW50KSB7XHJcbiAgICAgIGNvbnN0IHNuYXBzaG90ID0gdGhpcy5yb3V0ZS5zbmFwc2hvdDtcclxuICAgICAgY29uc3QgdXJsID0gdGhpcy5zcnYuZ2V0VXJsKHNuYXBzaG90KTtcclxuICAgICAgY29uc3QgaWR4ID0gbHMuZmluZEluZGV4KHcgPT4gdy51cmwgPT09IHVybCk7XHJcbiAgICAgIC8vIGp1bXAgZGlyZWN0bHkgd2hlbiB0aGUgY3VycmVudCBleGlzdHMgaW4gdGhlIGxpc3RcclxuICAgICAgLy8gb3IgY3JlYXRlIGEgbmV3IGN1cnJlbnQgaXRlbSBhbmQganVtcFxyXG4gICAgICBpZiAoaWR4ICE9PSAtMSB8fCAoaXNDbG9zZWQgJiYgbm90aWZ5LnVybCA9PT0gdXJsKSkge1xyXG4gICAgICAgIHRoaXMucG9zID0gaXNDbG9zZWRcclxuICAgICAgICAgID8gaWR4ID49IGJlZm9yZUNsb3NlUG9zXHJcbiAgICAgICAgICAgID8gdGhpcy5wb3MgLSAxXHJcbiAgICAgICAgICAgIDogdGhpcy5wb3NcclxuICAgICAgICAgIDogaWR4O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHNuYXBzaG90VHJ1ZSA9IHRoaXMuc3J2LmdldFRydXRoUm91dGUoc25hcHNob3QpO1xyXG4gICAgICAgIGxzLnB1c2goPFJldXNlSXRlbT57XHJcbiAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICB0aXRsZTogdGhpcy5nZW5UaXQodGhpcy5zcnYuZ2V0VGl0bGUodXJsLCBzbmFwc2hvdFRydWUpKSxcclxuICAgICAgICAgIGNsb3NhYmxlOlxyXG4gICAgICAgICAgICB0aGlzLmFsbG93Q2xvc2UgJiZcclxuICAgICAgICAgICAgdGhpcy5zcnYuY291bnQgPiAwICYmXHJcbiAgICAgICAgICAgIHRoaXMuc3J2LmdldENsb3NhYmxlKHVybCwgc25hcHNob3RUcnVlKSxcclxuICAgICAgICAgIGluZGV4OiBscy5sZW5ndGgsXHJcbiAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgbGFzdDogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wb3MgPSBscy5sZW5ndGggLSAxO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGZpeCB1bmFibGVkIGNsb3NlIGxhc3QgaXRlbVxyXG4gICAgICBpZiAobHMubGVuZ3RoIDw9IDEpIGxzWzBdLmNsb3NhYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5saXN0ID0gbHM7XHJcblxyXG4gICAgaWYgKGxzLmxlbmd0aCAmJiBpc0Nsb3NlZCkge1xyXG4gICAgICB0aGlzLnRvKG51bGwsIHRoaXMucG9zKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlZlN0YXR1cyhmYWxzZSk7XHJcbiAgICB0aGlzLnZpc2liaWxpdHkoKTtcclxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2aXNpYmlsaXR5KCkge1xyXG4gICAgaWYgKHRoaXMuc2hvd0N1cnJlbnQpIHJldHVybjtcclxuICAgIHRoaXMucmVuZGVyLnNldFN0eWxlKFxyXG4gICAgICB0aGlzLmVsLFxyXG4gICAgICAnZGlzcGxheScsXHJcbiAgICAgIHRoaXMubGlzdC5sZW5ndGggPT09IDAgPyAnbm9uZScgOiAnYmxvY2snLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vICNyZWdpb24gVUlcclxuXHJcbiAgY21DaGFuZ2UocmVzOiBSZXVzZUNvbnRleHRDbG9zZUV2ZW50KSB7XHJcbiAgICBzd2l0Y2ggKHJlcy50eXBlKSB7XHJcbiAgICAgIGNhc2UgJ2Nsb3NlJzpcclxuICAgICAgICB0aGlzLl9jbG9zZShudWxsLCByZXMuaXRlbS5pbmRleCwgcmVzLmluY2x1ZGVOb25DbG9zZWFibGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdjbG9zZVJpZ2h0JzpcclxuICAgICAgICB0aGlzLnNydi5jbG9zZVJpZ2h0KHJlcy5pdGVtLnVybCwgcmVzLmluY2x1ZGVOb25DbG9zZWFibGUpO1xyXG4gICAgICAgIHRoaXMuY2xvc2UuZW1pdChudWxsKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnY2xlYXInOlxyXG4gICAgICBjYXNlICdjbG9zZU90aGVyJzpcclxuICAgICAgICB0aGlzLnNydi5jbGVhcihyZXMuaW5jbHVkZU5vbkNsb3NlYWJsZSk7XHJcbiAgICAgICAgdGhpcy5jbG9zZS5lbWl0KG51bGwpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVmU3RhdHVzKGRjID0gdHJ1ZSkge1xyXG4gICAgaWYgKHRoaXMubGlzdC5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5saXN0W3RoaXMubGlzdC5sZW5ndGggLSAxXS5sYXN0ID0gdHJ1ZTtcclxuICAgICAgdGhpcy5saXN0LmZvckVhY2goKGksIGlkeCkgPT4gKGkuYWN0aXZlID0gdGhpcy5wb3MgPT09IGlkeCkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGRjKSB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHRvKGU6IEV2ZW50LCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICBpZiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBpbmRleCA9IE1hdGgubWF4KDAsIE1hdGgubWluKGluZGV4LCB0aGlzLmxpc3QubGVuZ3RoIC0gMSkpO1xyXG4gICAgY29uc3QgaXRlbSA9IHRoaXMubGlzdFtpbmRleF07XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGl0ZW0udXJsKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGlmICghcmVzKSByZXR1cm47XHJcbiAgICAgIHRoaXMucG9zID0gaW5kZXg7XHJcbiAgICAgIHRoaXMuaXRlbSA9IGl0ZW07XHJcbiAgICAgIHRoaXMucmVmU3RhdHVzKCk7XHJcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQoaXRlbSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9jbG9zZShlOiBFdmVudCwgaWR4OiBudW1iZXIsIGluY2x1ZGVOb25DbG9zZWFibGU6IGJvb2xlYW4pIHtcclxuICAgIGlmIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmxpc3RbaWR4XTtcclxuICAgIHRoaXMuc3J2LmNsb3NlKGl0ZW0udXJsLCBpbmNsdWRlTm9uQ2xvc2VhYmxlKTtcclxuICAgIHRoaXMuY2xvc2UuZW1pdChpdGVtKTtcclxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZ2VuTGlzdCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoXHJcbiAgICBjaGFuZ2VzOiB7IFtQIGluIGtleW9mIHRoaXNdPzogU2ltcGxlQ2hhbmdlIH0gJiBTaW1wbGVDaGFuZ2VzLFxyXG4gICk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubWF4KSB0aGlzLnNydi5tYXggPSB0aGlzLm1heDtcclxuICAgIGlmIChjaGFuZ2VzLmV4Y2x1ZGVzKSB0aGlzLnNydi5leGNsdWRlcyA9IHRoaXMuZXhjbHVkZXM7XHJcbiAgICBpZiAoY2hhbmdlcy5tb2RlKSB0aGlzLnNydi5tb2RlID0gdGhpcy5tb2RlO1xyXG4gICAgdGhpcy5zcnYuZGVidWcgPSB0aGlzLmRlYnVnO1xyXG5cclxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IGkxOG4kLCBzdWIkIH0gPSB0aGlzO1xyXG4gICAgc3ViJC51bnN1YnNjcmliZSgpO1xyXG4gICAgaWYgKGkxOG4kKSBpMThuJC51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBSb3V0ZVJldXNlU3RyYXRlZ3ksIEFjdGl2YXRlZFJvdXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBSZXVzZVRhYlNlcnZpY2UgfSBmcm9tICcuL3JldXNlLXRhYi5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBSZXVzZVRhYlN0cmF0ZWd5IGltcGxlbWVudHMgUm91dGVSZXVzZVN0cmF0ZWd5IHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNydjogUmV1c2VUYWJTZXJ2aWNlKSB7fVxyXG5cclxuICBzaG91bGREZXRhY2gocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnNydi5zaG91bGREZXRhY2gocm91dGUpO1xyXG4gIH1cclxuICBzdG9yZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgaGFuZGxlOiB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5zcnYuc3RvcmUocm91dGUsIGhhbmRsZSk7XHJcbiAgfVxyXG4gIHNob3VsZEF0dGFjaChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3J2LnNob3VsZEF0dGFjaChyb3V0ZSk7XHJcbiAgfVxyXG4gIHJldHJpZXZlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KToge30ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3J2LnJldHJpZXZlKHJvdXRlKTtcclxuICB9XHJcbiAgc2hvdWxkUmV1c2VSb3V0ZShcclxuICAgIGZ1dHVyZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcclxuICAgIGN1cnI6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXHJcbiAgKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zcnYuc2hvdWxkUmV1c2VSb3V0ZShmdXR1cmUsIGN1cnIpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBOZ1pvcnJvQW50ZE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5pbXBvcnQgeyBEZWxvbkxvY2FsZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcblxyXG5pbXBvcnQgeyBSZXVzZVRhYkNvbXBvbmVudCB9IGZyb20gJy4vcmV1c2UtdGFiLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dENvbXBvbmVudCB9IGZyb20gJy4vcmV1c2UtdGFiLWNvbnRleHQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmV1c2VUYWJDb250ZXh0RGlyZWN0aXZlIH0gZnJvbSAnLi9yZXVzZS10YWItY29udGV4dC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBSZXVzZVRhYkNvbnRleHRNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9yZXVzZS10YWItY29udGV4dC1tZW51LmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBDT01QT05FTlRTID0gW1JldXNlVGFiQ29tcG9uZW50XTtcclxuY29uc3QgTk9FWFBPUlRTID0gW1xyXG4gIFJldXNlVGFiQ29udGV4dE1lbnVDb21wb25lbnQsXHJcbiAgUmV1c2VUYWJDb250ZXh0Q29tcG9uZW50LFxyXG4gIFJldXNlVGFiQ29udGV4dERpcmVjdGl2ZSxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG4gICAgRGVsb25Mb2NhbGVNb2R1bGUsXHJcbiAgICBOZ1pvcnJvQW50ZE1vZHVsZSxcclxuICAgIE92ZXJsYXlNb2R1bGUsXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTLCAuLi5OT0VYUE9SVFNdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1JldXNlVGFiQ29udGV4dE1lbnVDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJldXNlVGFiTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBSZXVzZVRhYk1vZHVsZSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJFdmVudEVtaXR0ZXIiLCJDb21wb25lbnQiLCJEZWxvbkxvY2FsZVNlcnZpY2UiLCJJbnB1dCIsIk91dHB1dCIsIkhvc3RMaXN0ZW5lciIsIm92ZXJsYXkiLCJTdWJqZWN0IiwiRWxlbWVudFJlZiIsIkNvbm5lY3Rpb25Qb3NpdGlvblBhaXIiLCJDb21wb25lbnRQb3J0YWwiLCJTdWJzY3JpcHRpb24iLCJJbmplY3RhYmxlIiwiT3ZlcmxheSIsIkRpcmVjdGl2ZSIsIkJlaGF2aW9yU3ViamVjdCIsIkFjdGl2YXRlZFJvdXRlIiwiUm91dGVyIiwiSW5qZWN0b3IiLCJNZW51U2VydmljZSIsInJvdXRlciIsImZpbHRlciIsIk5hdmlnYXRpb25FbmQiLCJjb21iaW5lTGF0ZXN0IiwiZGVib3VuY2VUaW1lIiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJDaGFuZ2VEZXRlY3RvclJlZiIsIlJlbmRlcmVyMiIsIk9wdGlvbmFsIiwiSW5qZWN0IiwiQUxBSU5fSTE4Tl9UT0tFTiIsIklucHV0Qm9vbGVhbiIsIklucHV0TnVtYmVyIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJSb3V0ZXJNb2R1bGUiLCJEZWxvbkxvY2FsZU1vZHVsZSIsIk5nWm9ycm9BbnRkTW9kdWxlIiwiT3ZlcmxheU1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7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