/**
 * @license ng-alain(cipchk@qq.com) v11.6.0
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/theme'), require('rxjs'), require('@angular/cdk/overlay'), require('@angular/cdk/portal'), require('@angular/common'), require('@angular/router'), require('@delon/util/decorator'), require('rxjs/operators'), require('@delon/util/browser'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/menu'), require('ng-zorro-antd/tabs')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/reuse-tab', ['exports', '@angular/core', '@delon/theme', 'rxjs', '@angular/cdk/overlay', '@angular/cdk/portal', '@angular/common', '@angular/router', '@delon/util/decorator', 'rxjs/operators', '@delon/util/browser', 'ng-zorro-antd/icon', 'ng-zorro-antd/menu', 'ng-zorro-antd/tabs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc['reuse-tab'] = {}), global.ng.core, global.delon.theme, global.rxjs, global.ng.cdk.overlay, global.ng.cdk.portal, global.ng.common, global.ng.router, global.decorator, global.rxjs.operators, global.browser, global['ng-zorro-antd/icon'], global['ng-zorro-antd/menu'], global['ng-zorro-antd/tabs']));
}(this, (function (exports, i0, i1, rxjs, overlay, portal, common, router, decorator, operators, browser, icon, menu, tabs) { 'use strict';

    var ReuseTabContextMenuComponent = /** @class */ (function () {
        function ReuseTabContextMenuComponent(i18nSrv) {
            this.i18nSrv = i18nSrv;
            this.close = new i0.EventEmitter();
        }
        Object.defineProperty(ReuseTabContextMenuComponent.prototype, "i18n", {
            get: function () {
                return this._i18n;
            },
            set: function (value) {
                this._i18n = Object.assign(Object.assign({}, this.i18nSrv.getData('reuseTab')), value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ReuseTabContextMenuComponent.prototype, "includeNonCloseable", {
            get: function () {
                return this.event.ctrlKey;
            },
            enumerable: false,
            configurable: true
        });
        ReuseTabContextMenuComponent.prototype.notify = function (type) {
            this.close.next({
                type: type,
                item: this.item,
                includeNonCloseable: this.includeNonCloseable,
            });
        };
        ReuseTabContextMenuComponent.prototype.ngOnInit = function () {
            if (this.includeNonCloseable)
                this.item.closable = true;
        };
        ReuseTabContextMenuComponent.prototype.click = function (e, type, custom) {
            e.preventDefault();
            e.stopPropagation();
            if (type === 'close' && !this.item.closable)
                return;
            if (type === 'closeRight' && this.item.last)
                return;
            if (custom) {
                if (this.isDisabled(custom))
                    return;
                custom.fn(this.item, custom);
            }
            this.notify(type);
        };
        ReuseTabContextMenuComponent.prototype.isDisabled = function (custom) {
            return custom.disabled ? custom.disabled(this.item) : false;
        };
        ReuseTabContextMenuComponent.prototype.closeMenu = function (event) {
            if (event.type === 'click' && event.button === 2)
                return;
            this.notify(null);
        };
        return ReuseTabContextMenuComponent;
    }());
    ReuseTabContextMenuComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'reuse-tab-context-menu',
                    template: "<ul nz-menu>\n  <li nz-menu-item (click)=\"click($event, 'refresh')\" data-type=\"refresh\" [innerHTML]=\"i18n.refresh\"></li>\n  <li nz-menu-item (click)=\"click($event, 'close')\" data-type=\"close\" [nzDisabled]=\"!item.closable\" [innerHTML]=\"i18n.close\"></li>\n  <li nz-menu-item (click)=\"click($event, 'closeOther')\" data-type=\"closeOther\" [innerHTML]=\"i18n.closeOther\"></li>\n  <li nz-menu-item (click)=\"click($event, 'closeRight')\" data-type=\"closeRight\" [nzDisabled]=\"item.last\" [innerHTML]=\"i18n.closeRight\"></li>\n  <ng-container *ngIf=\"customContextMenu!.length > 0\">\n    <li nz-menu-divider></li>\n    <li\n      *ngFor=\"let i of customContextMenu\"\n      nz-menu-item\n      [attr.data-type]=\"i.id\"\n      [nzDisabled]=\"isDisabled(i)\"\n      (click)=\"click($event, 'custom', i)\"\n      [innerHTML]=\"i.title\"\n    ></li>\n  </ng-container>\n</ul>\n",
                    host: {
                        '(document:click)': 'closeMenu($event)',
                        '(document:contextmenu)': 'closeMenu($event)',
                    },
                    preserveWhitespaces: false,
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    /** @nocollapse */
    ReuseTabContextMenuComponent.ctorParameters = function () { return [
        { type: i1.DelonLocaleService }
    ]; };
    ReuseTabContextMenuComponent.propDecorators = {
        i18n: [{ type: i0.Input }],
        item: [{ type: i0.Input }],
        event: [{ type: i0.Input }],
        customContextMenu: [{ type: i0.Input }],
        close: [{ type: i0.Output }]
    };

    var ReuseTabContextService = /** @class */ (function () {
        function ReuseTabContextService(overlay) {
            this.overlay = overlay;
            this.show = new rxjs.Subject();
            this.close = new rxjs.Subject();
        }
        ReuseTabContextService.prototype.remove = function () {
            if (!this.ref)
                return;
            this.ref.detach();
            this.ref.dispose();
            this.ref = null;
        };
        ReuseTabContextService.prototype.open = function (context) {
            var _this = this;
            this.remove();
            var event = context.event, item = context.item, customContextMenu = context.customContextMenu;
            var fakeElement = new i0.ElementRef({
                getBoundingClientRect: function () { return ({
                    bottom: event.clientY,
                    height: 0,
                    left: event.clientX,
                    right: event.clientX,
                    top: event.clientY,
                    width: 0,
                }); },
            });
            var positions = [
                new overlay.ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
                new overlay.ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
            ];
            var positionStrategy = this.overlay.position().flexibleConnectedTo(fakeElement).withPositions(positions);
            this.ref = this.overlay.create({
                positionStrategy: positionStrategy,
                panelClass: 'reuse-tab__cm',
                scrollStrategy: this.overlay.scrollStrategies.close(),
            });
            var comp = this.ref.attach(new portal.ComponentPortal(ReuseTabContextMenuComponent));
            var instance = comp.instance;
            instance.i18n = this.i18n;
            instance.item = Object.assign({}, item);
            instance.customContextMenu = customContextMenu;
            instance.event = event;
            var sub$ = new rxjs.Subscription();
            sub$.add(instance.close.subscribe(function (res) {
                _this.close.next(res);
                _this.remove();
            }));
            comp.onDestroy(function () { return sub$.unsubscribe(); });
        };
        return ReuseTabContextService;
    }());
    ReuseTabContextService.decorators = [
        { type: i0.Injectable }
    ];
    /** @nocollapse */
    ReuseTabContextService.ctorParameters = function () { return [
        { type: overlay.Overlay }
    ]; };

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
            set: function (value) {
                this.srv.i18n = value;
            },
            enumerable: false,
            configurable: true
        });
        ReuseTabContextComponent.prototype.ngOnDestroy = function () {
            this.sub$.unsubscribe();
        };
        return ReuseTabContextComponent;
    }());
    ReuseTabContextComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'reuse-tab-context',
                    template: ""
                },] }
    ];
    /** @nocollapse */
    ReuseTabContextComponent.ctorParameters = function () { return [
        { type: ReuseTabContextService }
    ]; };
    ReuseTabContextComponent.propDecorators = {
        i18n: [{ type: i0.Input }],
        change: [{ type: i0.Output }]
    };

    var ReuseTabContextDirective = /** @class */ (function () {
        function ReuseTabContextDirective(srv) {
            this.srv = srv;
        }
        ReuseTabContextDirective.prototype._onContextMenu = function (event) {
            this.srv.show.next({
                event: event,
                item: this.item,
                customContextMenu: this.customContextMenu,
            });
            event.preventDefault();
            event.stopPropagation();
        };
        return ReuseTabContextDirective;
    }());
    ReuseTabContextDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: '[reuse-tab-context-menu]',
                    exportAs: 'reuseTabContextMenu',
                    host: {
                        '(contextmenu)': '_onContextMenu($event)',
                    },
                },] }
    ];
    /** @nocollapse */
    ReuseTabContextDirective.ctorParameters = function () { return [
        { type: ReuseTabContextService }
    ]; };
    ReuseTabContextDirective.propDecorators = {
        item: [{ type: i0.Input, args: ['reuse-tab-context-menu',] }],
        customContextMenu: [{ type: i0.Input }]
    };

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
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
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
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
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * 复用匹配模式
     */
    (function (ReuseTabMatchMode) {
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
        ReuseTabMatchMode[ReuseTabMatchMode["Menu"] = 0] = "Menu";
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
        ReuseTabMatchMode[ReuseTabMatchMode["MenuForce"] = 1] = "MenuForce";
        /**
         * 对所有路由有效，可以配合 `excludes` 过滤无须复用路由
         */
        ReuseTabMatchMode[ReuseTabMatchMode["URL"] = 2] = "URL";
    })(exports.ReuseTabMatchMode || (exports.ReuseTabMatchMode = {}));

    var ReuseTabService = /** @class */ (function () {
        // #endregion
        function ReuseTabService(injector, menuService) {
            this.injector = injector;
            this.menuService = menuService;
            this._inited = false;
            this._max = 10;
            this._keepingScroll = false;
            this._cachedChange = new rxjs.BehaviorSubject(null);
            this._cached = [];
            this._titleCached = {};
            this._closableCached = {};
            this.positionBuffer = {};
            this.debug = false;
            this.routeParamMatchMode = 'strict';
            this.mode = exports.ReuseTabMatchMode.Menu;
            /** 排除规则，限 `mode=URL` */
            this.excludes = [];
        }
        Object.defineProperty(ReuseTabService.prototype, "snapshot", {
            get: function () {
                return this.injector.get(router.ActivatedRoute).snapshot;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ReuseTabService.prototype, "inited", {
            // #region public
            /**
             * Get init status
             *
             * 是否已经初始化完成
             */
            get: function () {
                return this._inited;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ReuseTabService.prototype, "curUrl", {
            /**
             * Current routing address
             *
             * 当前路由地址
             */
            get: function () {
                return this.getUrl(this.snapshot);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ReuseTabService.prototype, "max", {
            /**
             * 允许最多复用多少个页面，取值范围 `2-100`，值发生变更时会强制关闭且忽略可关闭条件
             */
            set: function (value) {
                this._max = Math.min(Math.max(value, 2), 100);
                for (var i = this._cached.length; i > this._max; i--) {
                    this._cached.pop();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ReuseTabService.prototype, "keepingScroll", {
            get: function () {
                return this._keepingScroll;
            },
            set: function (value) {
                this._keepingScroll = value;
                this.initScroll();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ReuseTabService.prototype, "items", {
            /** 获取已缓存的路由 */
            get: function () {
                return this._cached;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ReuseTabService.prototype, "count", {
            /** 获取当前缓存的路由总数 */
            get: function () {
                return this._cached.length;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ReuseTabService.prototype, "change", {
            /** 订阅缓存变更通知 */
            get: function () {
                return this._cachedChange.asObservable(); // .pipe(filter(w => w !== null));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ReuseTabService.prototype, "title", {
            /** 自定义当前标题 */
            set: function (value) {
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
            enumerable: false,
            configurable: true
        });
        /** 获取指定路径缓存所在位置，`-1` 表示无缓存 */
        ReuseTabService.prototype.index = function (url) {
            return this._cached.findIndex(function (w) { return w.url === url; });
        };
        /** 获取指定路径缓存是否存在 */
        ReuseTabService.prototype.exists = function (url) {
            return this.index(url) !== -1;
        };
        /** 获取指定路径缓存 */
        ReuseTabService.prototype.get = function (url) {
            return url ? this._cached.find(function (w) { return w.url === url; }) || null : null;
        };
        ReuseTabService.prototype.remove = function (url, includeNonCloseable) {
            var idx = typeof url === 'string' ? this.index(url) : url;
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
        ReuseTabService.prototype.close = function (url, includeNonCloseable) {
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
        ReuseTabService.prototype.closeRight = function (url, includeNonCloseable) {
            if (includeNonCloseable === void 0) { includeNonCloseable = false; }
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
        ReuseTabService.prototype.clear = function (includeNonCloseable) {
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
        ReuseTabService.prototype.move = function (url, position) {
            var start = this._cached.findIndex(function (w) { return w.url === url; });
            if (start === -1)
                return;
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
        ReuseTabService.prototype.replace = function (newUrl) {
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
        ReuseTabService.prototype.getTitle = function (url, route) {
            if (this._titleCached[url]) {
                return this._titleCached[url];
            }
            if (route && route.data && (route.data.titleI18n || route.data.title)) {
                return {
                    text: route.data.title,
                    i18n: route.data.titleI18n,
                };
            }
            var menu = this.getMenu(url);
            return menu ? { text: menu.text, i18n: menu.i18n } : { text: url };
        };
        /**
         * 清除标题缓存
         */
        ReuseTabService.prototype.clearTitleCached = function () {
            this._titleCached = {};
        };
        Object.defineProperty(ReuseTabService.prototype, "closable", {
            /** 自定义当前 `closable` 状态 */
            set: function (value) {
                var url = this.curUrl;
                this._closableCached[url] = value;
                this.di('update current tag closable: ', value);
                this._cachedChange.next({
                    active: 'closable',
                    closable: value,
                    list: this._cached,
                });
            },
            enumerable: false,
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
        ReuseTabService.prototype.getClosable = function (url, route) {
            if (typeof this._closableCached[url] !== 'undefined')
                return this._closableCached[url];
            if (route && route.data && typeof route.data.reuseClosable === 'boolean')
                return route.data.reuseClosable;
            var menu = this.mode !== exports.ReuseTabMatchMode.URL ? this.getMenu(url) : null;
            if (menu && typeof menu.reuseClosable === 'boolean')
                return menu.reuseClosable;
            return true;
        };
        /**
         * 清空 `closable` 缓存
         */
        ReuseTabService.prototype.clearClosableCached = function () {
            this._closableCached = {};
        };
        ReuseTabService.prototype.getTruthRoute = function (route) {
            var next = route;
            while (next.firstChild)
                next = next.firstChild;
            return next;
        };
        /**
         * 根据快照获取URL地址
         */
        ReuseTabService.prototype.getUrl = function (route) {
            var next = this.getTruthRoute(route);
            var segments = [];
            while (next) {
                segments.push(next.url.join('/'));
                next = next.parent;
            }
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
        ReuseTabService.prototype.can = function (route) {
            var url = this.getUrl(route);
            if (url === this.removeUrlBuffer)
                return false;
            if (route.data && typeof route.data.reuse === 'boolean')
                return route.data.reuse;
            if (this.mode !== exports.ReuseTabMatchMode.URL) {
                var menu = this.getMenu(url);
                if (!menu)
                    return false;
                if (this.mode === exports.ReuseTabMatchMode.Menu) {
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
        };
        ReuseTabService.prototype.isExclude = function (url) {
            return this.excludes.findIndex(function (r) { return r.test(url); }) !== -1;
        };
        /**
         * 刷新，触发一个 refresh 类型事件
         */
        ReuseTabService.prototype.refresh = function (data) {
            this._cachedChange.next({ active: 'refresh', data: data });
        };
        // #endregion
        // #region privates
        ReuseTabService.prototype.destroy = function (_handle) {
            if (_handle && _handle.componentRef && _handle.componentRef.destroy)
                _handle.componentRef.destroy();
        };
        ReuseTabService.prototype.di = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!this.debug)
                return;
            // tslint:disable-next-line:no-console
            console.warn.apply(console, __spread(args));
        };
        ReuseTabService.prototype.init = function () {
            this.initScroll();
            this._inited = true;
        };
        ReuseTabService.prototype.getMenu = function (url) {
            var menus = this.menuService.getPathByUrl(url);
            if (!menus || menus.length === 0)
                return null;
            return menus.pop();
        };
        ReuseTabService.prototype.runHook = function (method, comp, type) {
            if (type === void 0) { type = 'init'; }
            if (typeof comp === 'number') {
                var item = this._cached[comp];
                comp = item._handle.componentRef;
            }
            var compThis = comp.instance;
            if (comp == null || !compThis) {
                return;
            }
            var fn = compThis[method];
            if (typeof fn !== 'function') {
                return;
            }
            if (method === '_onReuseInit') {
                fn.call(compThis, type);
            }
            else {
                fn.call(compThis);
            }
        };
        ReuseTabService.prototype.hasInValidRoute = function (route) {
            return !route.routeConfig || !!route.routeConfig.loadChildren || !!route.routeConfig.children;
        };
        /**
         * 决定是否允许路由复用，若 `true` 会触发 `store`
         */
        ReuseTabService.prototype.shouldDetach = function (route) {
            if (this.hasInValidRoute(route))
                return false;
            this.di('#shouldDetach', this.can(route), this.getUrl(route));
            return this.can(route);
        };
        /**
         * 存储
         */
        ReuseTabService.prototype.store = function (_snapshot, _handle) {
            var url = this.getUrl(_snapshot);
            var idx = this.index(url);
            var isAdd = idx === -1;
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
                    var closeIdx = this._cached.findIndex(function (w) { return w.closable; });
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
        ReuseTabService.prototype.shouldAttach = function (route) {
            if (this.hasInValidRoute(route))
                return false;
            var url = this.getUrl(route);
            var data = this.get(url);
            var ret = !!(data && data._handle);
            this.di('#shouldAttach', ret, url);
            if (ret) {
                var compRef = data._handle.componentRef;
                if (compRef) {
                    this.componentRef = compRef;
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
        ReuseTabService.prototype.retrieve = function (route) {
            if (this.hasInValidRoute(route))
                return null;
            var url = this.getUrl(route);
            var data = this.get(url);
            var ret = (data && data._handle) || null;
            this.di('#retrieve', url, ret);
            return ret;
        };
        /**
         * 决定是否应该进行复用路由处理
         */
        ReuseTabService.prototype.shouldReuseRoute = function (future, curr) {
            var ret = future.routeConfig === curr.routeConfig;
            if (!ret)
                return false;
            var path = ((future.routeConfig && future.routeConfig.path) || '');
            if (path.length > 0 && ~path.indexOf(':')) {
                if (this.routeParamMatchMode === 'strict') {
                    ret = this.getUrl(future) === this.getUrl(curr);
                }
                else {
                    ret = path === ((curr.routeConfig && curr.routeConfig.path) || '');
                }
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
        ReuseTabService.prototype.getKeepingScroll = function (url, route) {
            if (route && route.data && typeof route.data.keepingScroll === 'boolean')
                return route.data.keepingScroll;
            var menu = this.mode !== exports.ReuseTabMatchMode.URL ? this.getMenu(url) : null;
            if (menu && typeof menu.keepingScroll === 'boolean')
                return menu.keepingScroll;
            return this.keepingScroll;
        };
        Object.defineProperty(ReuseTabService.prototype, "isDisabledInRouter", {
            get: function () {
                var routerConfig = this.injector.get(router.ROUTER_CONFIGURATION, {});
                return routerConfig.scrollPositionRestoration === 'disabled';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ReuseTabService.prototype, "ss", {
            get: function () {
                return this.injector.get(browser.ScrollService);
            },
            enumerable: false,
            configurable: true
        });
        ReuseTabService.prototype.initScroll = function () {
            var _this = this;
            if (this._router$) {
                this._router$.unsubscribe();
            }
            this._router$ = this.injector.get(router.Router).events.subscribe(function (e) {
                if (e instanceof router.NavigationStart) {
                    var url = _this.curUrl;
                    if (_this.getKeepingScroll(url, _this.getTruthRoute(_this.snapshot))) {
                        _this.positionBuffer[url] = _this.ss.getScrollPosition(_this.keepingScrollContainer);
                    }
                    else {
                        delete _this.positionBuffer[url];
                    }
                }
                else if (e instanceof router.NavigationEnd) {
                    var url = _this.curUrl;
                    var item_1 = _this.get(url);
                    if (item_1 && item_1.position && _this.getKeepingScroll(url, _this.getTruthRoute(_this.snapshot))) {
                        if (_this.isDisabledInRouter) {
                            _this.ss.scrollToPosition(_this.keepingScrollContainer, item_1.position);
                        }
                        else {
                            setTimeout(function () { return _this.ss.scrollToPosition(_this.keepingScrollContainer, item_1.position); }, 1);
                        }
                    }
                }
            });
        };
        // #endregion
        ReuseTabService.prototype.ngOnDestroy = function () {
            var _a = this, _cachedChange = _a._cachedChange, _router$ = _a._router$;
            this.clear();
            this._cached = [];
            _cachedChange.complete();
            if (_router$) {
                _router$.unsubscribe();
            }
        };
        return ReuseTabService;
    }());
    /** @nocollapse */ ReuseTabService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ReuseTabService_Factory() { return new ReuseTabService(i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.MenuService)); }, token: ReuseTabService, providedIn: "root" });
    ReuseTabService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ReuseTabService.ctorParameters = function () { return [
        { type: i0.Injector },
        { type: i1.MenuService }
    ]; };

    var ReuseTabComponent = /** @class */ (function () {
        // #endregion
        function ReuseTabComponent(srv, cdr, router, route, i18nSrv, doc) {
            this.srv = srv;
            this.cdr = cdr;
            this.router = router;
            this.route = route;
            this.i18nSrv = i18nSrv;
            this.doc = doc;
            this.unsubscribe$ = new rxjs.Subject();
            this.updatePos$ = new rxjs.Subject();
            this.list = [];
            this.pos = 0;
            // #region fields
            this.mode = exports.ReuseTabMatchMode.Menu;
            this.debug = false;
            this.allowClose = true;
            this.keepingScroll = false;
            this.customContextMenu = [];
            this.tabType = 'line';
            this.routeParamMatchMode = 'strict';
            this.change = new i0.EventEmitter();
            this.close = new i0.EventEmitter();
        }
        Object.defineProperty(ReuseTabComponent.prototype, "keepingScrollContainer", {
            set: function (value) {
                this._keepingScrollContainer = typeof value === 'string' ? this.doc.querySelector(value) : value;
            },
            enumerable: false,
            configurable: true
        });
        ReuseTabComponent.prototype.genTit = function (title) {
            return title.i18n && this.i18nSrv ? this.i18nSrv.fanyi(title.i18n) : title.text;
        };
        Object.defineProperty(ReuseTabComponent.prototype, "curUrl", {
            get: function () {
                return this.srv.getUrl(this.route.snapshot);
            },
            enumerable: false,
            configurable: true
        });
        ReuseTabComponent.prototype.genCurItem = function () {
            var url = this.curUrl;
            var snapshotTrue = this.srv.getTruthRoute(this.route.snapshot);
            return {
                url: url,
                title: this.genTit(this.srv.getTitle(url, snapshotTrue)),
                closable: this.allowClose && this.srv.count > 0 && this.srv.getClosable(url, snapshotTrue),
                active: false,
                last: false,
                index: 0,
            };
        };
        ReuseTabComponent.prototype.genList = function (notify) {
            var _this = this;
            var ls = this.srv.items.map(function (item, index) { return ({
                url: item.url,
                title: _this.genTit(item.title),
                closable: _this.allowClose && item.closable && _this.srv.count > 0,
                index: index,
                active: false,
                last: false,
            }); });
            var url = this.curUrl;
            var addCurrent = ls.findIndex(function (w) { return w.url === url; }) === -1;
            if (notify && notify.active === 'close' && notify.url === url) {
                addCurrent = false;
                var toPos = 0;
                var curItem = this.list.find(function (w) { return w.url === url; });
                if (curItem.index === ls.length) {
                    // When closed is last
                    toPos = ls.length - 1;
                }
                else if (curItem.index < ls.length) {
                    // Should be actived next tab when closed is middle
                    toPos = Math.max(0, curItem.index);
                }
                this.router.navigateByUrl(ls[toPos].url);
            }
            if (addCurrent) {
                ls.push(this.genCurItem());
            }
            ls.forEach(function (item, index) { return (item.index = index); });
            if (ls.length === 1) {
                ls[0].closable = false;
            }
            this.list = ls;
            this.cdr.detectChanges();
            this.updatePos$.next();
        };
        ReuseTabComponent.prototype.updateTitle = function (res) {
            var item = this.list.find(function (w) { return w.url === res.url; });
            if (!item)
                return;
            item.title = this.genTit(res.title);
            this.cdr.detectChanges();
        };
        ReuseTabComponent.prototype.refresh = function (item) {
            this.srv.runHook('_onReuseInit', this.pos === item.index ? this.srv.componentRef : item.index, 'refresh');
        };
        // #region UI
        ReuseTabComponent.prototype.contextMenuChange = function (res) {
            var _this = this;
            var fn = null;
            switch (res.type) {
                case 'refresh':
                    this.refresh(res.item);
                    break;
                case 'close':
                    this._close(null, res.item.index, res.includeNonCloseable);
                    break;
                case 'closeRight':
                    fn = function () {
                        _this.srv.closeRight(res.item.url, res.includeNonCloseable);
                        _this.close.emit(null);
                    };
                    break;
                case 'closeOther':
                    fn = function () {
                        _this.srv.clear(res.includeNonCloseable);
                        _this.close.emit(null);
                    };
                    break;
            }
            if (!fn) {
                return;
            }
            if (!res.item.active && res.item.index <= this.list.find(function (w) { return w.active; }).index) {
                this._to(res.item.index, fn);
            }
            else {
                fn();
            }
        };
        ReuseTabComponent.prototype._to = function (index, cb) {
            var _this = this;
            index = Math.max(0, Math.min(index, this.list.length - 1));
            var item = this.list[index];
            this.router.navigateByUrl(item.url).then(function (res) {
                if (!res)
                    return;
                _this.item = item;
                _this.change.emit(item);
                if (cb) {
                    cb();
                }
            });
        };
        ReuseTabComponent.prototype._close = function (e, idx, includeNonCloseable) {
            if (e != null) {
                e.preventDefault();
                e.stopPropagation();
            }
            var item = this.list[idx];
            this.srv.close(item.url, includeNonCloseable);
            this.close.emit(item);
            this.cdr.detectChanges();
            return false;
        };
        ReuseTabComponent.prototype.activate = function (instance) {
            this.srv.componentRef = { instance: instance };
        };
        // #endregion
        ReuseTabComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.updatePos$.pipe(operators.takeUntil(this.unsubscribe$), operators.debounceTime(50)).subscribe(function () {
                var url = _this.srv.getUrl(_this.route.snapshot);
                var ls = _this.list.filter(function (w) { return w.url === url || !_this.srv.isExclude(w.url); });
                if (ls.length === 0) {
                    return;
                }
                var last = ls[ls.length - 1];
                var item = ls.find(function (w) { return w.url === url; });
                last.last = true;
                var pos = item == null ? last.index : item.index;
                ls.forEach(function (i, idx) { return (i.active = pos === idx); });
                _this.pos = pos;
                // TODO: 目前无法知道为什么 `pos` 无法通过 `nzSelectedIndex` 生效，因此强制使用组件实例的方式来修改，这种方式是安全的
                // https://github.com/ng-alain/ng-alain/issues/1736
                _this.tabset.nzSelectedIndex = pos;
                _this.list = ls;
                _this.cdr.detectChanges();
            });
            this.srv.change.pipe(operators.takeUntil(this.unsubscribe$)).subscribe(function (res) {
                var _a;
                switch (res === null || res === void 0 ? void 0 : res.active) {
                    case 'title':
                        _this.updateTitle(res);
                        return;
                    case 'override':
                        if (((_a = res === null || res === void 0 ? void 0 : res.list) === null || _a === void 0 ? void 0 : _a.length) === _this.list.length) {
                            _this.updatePos$.next();
                            return;
                        }
                        break;
                }
                _this.genList(res);
            });
            this.i18nSrv.change
                .pipe(operators.filter(function () { return _this.srv.inited; }), operators.takeUntil(this.unsubscribe$), operators.debounceTime(100))
                .subscribe(function () { return _this.genList({ active: 'title' }); });
            this.srv.init();
        };
        ReuseTabComponent.prototype.ngOnChanges = function (changes) {
            if (changes.max)
                this.srv.max = this.max;
            if (changes.excludes)
                this.srv.excludes = this.excludes;
            if (changes.mode)
                this.srv.mode = this.mode;
            if (changes.routeParamMatchMode)
                this.srv.routeParamMatchMode = this.routeParamMatchMode;
            if (changes.keepingScroll) {
                this.srv.keepingScroll = this.keepingScroll;
                this.srv.keepingScrollContainer = this._keepingScrollContainer;
            }
            this.srv.debug = this.debug;
            this.cdr.detectChanges();
        };
        ReuseTabComponent.prototype.ngOnDestroy = function () {
            var unsubscribe$ = this.unsubscribe$;
            unsubscribe$.next();
            unsubscribe$.complete();
        };
        return ReuseTabComponent;
    }());
    ReuseTabComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'reuse-tab, [reuse-tab]',
                    exportAs: 'reuseTab',
                    template: "<nz-tabset\n  #tabset\n  [nzSelectedIndex]=\"pos\"\n  [nzAnimated]=\"false\"\n  [nzType]=\"tabType\"\n  [nzTabBarExtraContent]=\"tabBarExtraContent\"\n  [nzTabBarGutter]=\"tabBarGutter\"\n  [nzTabBarStyle]=\"tabBarStyle\"\n>\n  <nz-tab *ngFor=\"let i of list; let index = index\" [nzTitle]=\"titleTemplate\" (nzClick)=\"_to(index)\">\n    <ng-template #titleTemplate>\n      <div [reuse-tab-context-menu]=\"i\" [customContextMenu]=\"customContextMenu\" class=\"reuse-tab__name\" [attr.title]=\"i.title\">\n        <span [class.reuse-tab__name-width]=\"tabMaxWidth\" [style.max-width.px]=\"tabMaxWidth\">\n          {{ i.title }}\n        </span>\n      </div>\n      <i *ngIf=\"i.closable\" nz-icon nzType=\"close\" class=\"reuse-tab__op\" (click)=\"_close($event, index, false)\"></i>\n    </ng-template>\n  </nz-tab>\n</nz-tabset>\n<reuse-tab-context [i18n]=\"i18n\" (change)=\"contextMenuChange($event)\"></reuse-tab-context>\n",
                    host: {
                        '[class.reuse-tab]': 'true',
                        '[class.reuse-tab__line]': "tabType === 'line'",
                        '[class.reuse-tab__card]': "tabType === 'card'",
                    },
                    providers: [ReuseTabContextService],
                    preserveWhitespaces: false,
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    /** @nocollapse */
    ReuseTabComponent.ctorParameters = function () { return [
        { type: ReuseTabService },
        { type: i0.ChangeDetectorRef },
        { type: router.Router },
        { type: router.ActivatedRoute },
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [i1.ALAIN_I18N_TOKEN,] }] },
        { type: undefined, decorators: [{ type: i0.Inject, args: [common.DOCUMENT,] }] }
    ]; };
    ReuseTabComponent.propDecorators = {
        tabset: [{ type: i0.ViewChild, args: ['tabset',] }],
        mode: [{ type: i0.Input }],
        i18n: [{ type: i0.Input }],
        debug: [{ type: i0.Input }],
        max: [{ type: i0.Input }],
        tabMaxWidth: [{ type: i0.Input }],
        excludes: [{ type: i0.Input }],
        allowClose: [{ type: i0.Input }],
        keepingScroll: [{ type: i0.Input }],
        keepingScrollContainer: [{ type: i0.Input }],
        customContextMenu: [{ type: i0.Input }],
        tabBarExtraContent: [{ type: i0.Input }],
        tabBarGutter: [{ type: i0.Input }],
        tabBarStyle: [{ type: i0.Input }],
        tabType: [{ type: i0.Input }],
        routeParamMatchMode: [{ type: i0.Input }],
        change: [{ type: i0.Output }],
        close: [{ type: i0.Output }]
    };
    __decorate([
        decorator.InputBoolean(),
        __metadata("design:type", Object)
    ], ReuseTabComponent.prototype, "debug", void 0);
    __decorate([
        decorator.InputNumber(),
        __metadata("design:type", Number)
    ], ReuseTabComponent.prototype, "max", void 0);
    __decorate([
        decorator.InputNumber(),
        __metadata("design:type", Number)
    ], ReuseTabComponent.prototype, "tabMaxWidth", void 0);
    __decorate([
        decorator.InputBoolean(),
        __metadata("design:type", Object)
    ], ReuseTabComponent.prototype, "allowClose", void 0);
    __decorate([
        decorator.InputBoolean(),
        __metadata("design:type", Object)
    ], ReuseTabComponent.prototype, "keepingScroll", void 0);

    var ReuseTabStrategy = /** @class */ (function () {
        function ReuseTabStrategy(srv) {
            this.srv = srv;
        }
        ReuseTabStrategy.prototype.shouldDetach = function (route) {
            return this.srv.shouldDetach(route);
        };
        ReuseTabStrategy.prototype.store = function (route, handle) {
            this.srv.store(route, handle);
        };
        ReuseTabStrategy.prototype.shouldAttach = function (route) {
            return this.srv.shouldAttach(route);
        };
        ReuseTabStrategy.prototype.retrieve = function (route) {
            return this.srv.retrieve(route);
        };
        ReuseTabStrategy.prototype.shouldReuseRoute = function (future, curr) {
            return this.srv.shouldReuseRoute(future, curr);
        };
        return ReuseTabStrategy;
    }());

    var COMPONENTS = [ReuseTabComponent];
    var NOEXPORTS = [ReuseTabContextMenuComponent, ReuseTabContextComponent, ReuseTabContextDirective];
    var ReuseTabModule = /** @class */ (function () {
        function ReuseTabModule() {
        }
        return ReuseTabModule;
    }());
    ReuseTabModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule, router.RouterModule, i1.DelonLocaleModule, menu.NzMenuModule, tabs.NzTabsModule, icon.NzIconModule, overlay.OverlayModule],
                    declarations: __spread(COMPONENTS, NOEXPORTS),
                    exports: COMPONENTS,
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ReuseTabComponent = ReuseTabComponent;
    exports.ReuseTabContextComponent = ReuseTabContextComponent;
    exports.ReuseTabContextDirective = ReuseTabContextDirective;
    exports.ReuseTabContextMenuComponent = ReuseTabContextMenuComponent;
    exports.ReuseTabContextService = ReuseTabContextService;
    exports.ReuseTabModule = ReuseTabModule;
    exports.ReuseTabService = ReuseTabService;
    exports.ReuseTabStrategy = ReuseTabStrategy;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=reuseTab.umd.js.map
