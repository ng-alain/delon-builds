/**
 * @license ng-alain(cipchk@qq.com) v8.9.3
 * (c) 2019 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/theme'), require('rxjs'), require('@angular/cdk/overlay'), require('@angular/cdk/portal'), require('@angular/common'), require('@angular/router'), require('@delon/util'), require('rxjs/operators'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/menu'), require('ng-zorro-antd/tabs')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/reuse-tab', ['exports', '@angular/core', '@delon/theme', 'rxjs', '@angular/cdk/overlay', '@angular/cdk/portal', '@angular/common', '@angular/router', '@delon/util', 'rxjs/operators', 'ng-zorro-antd/icon', 'ng-zorro-antd/menu', 'ng-zorro-antd/tabs'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc['reuse-tab'] = {}), global.ng.core, global.delon.theme, global.rxjs, global.ng.cdk.overlay, global.ng.cdk.portal, global.ng.common, global.ng.router, global.delon.util, global.rxjs.operators, global['ng-zorro-antd/icon'], global['ng-zorro-antd/menu'], global['ng-zorro-antd/tabs']));
}(this, (function (exports, core, theme, rxjs, overlay, portal, common, router, util, operators, icon, menu, tabs) { 'use strict';

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

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
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
     * @fileoverview added by tsickle
     * Generated from: reuse-tab-context-menu.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ReuseTabContextMenuComponent = /** @class */ (function () {
        function ReuseTabContextMenuComponent(i18nSrv) {
            this.i18nSrv = i18nSrv;
            this.close = new core.EventEmitter();
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
                this._i18n = __assign({}, this.i18nSrv.getData('reuseTab'), value);
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
         * @private
         * @param {?} type
         * @return {?}
         */
        ReuseTabContextMenuComponent.prototype.notify = /**
         * @private
         * @param {?} type
         * @return {?}
         */
        function (type) {
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
         * @param {?=} custom
         * @return {?}
         */
        ReuseTabContextMenuComponent.prototype.click = /**
         * @param {?} e
         * @param {?} type
         * @param {?=} custom
         * @return {?}
         */
        function (e, type, custom) {
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
        /**
         * @param {?} custom
         * @return {?}
         */
        ReuseTabContextMenuComponent.prototype.isDisabled = /**
         * @param {?} custom
         * @return {?}
         */
        function (custom) {
            return custom.disabled ? custom.disabled(this.item) : false;
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
            this.notify(null);
        };
        ReuseTabContextMenuComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'reuse-tab-context-menu',
                        template: "<ul nz-menu>\n  <li nz-menu-item\n      (click)=\"click($event, 'close')\"\n      data-type=\"close\"\n      [nzDisabled]=\"!item.closable\"\n      [innerHTML]=\"i18n.close\"></li>\n  <li nz-menu-item\n      (click)=\"click($event, 'closeOther')\"\n      data-type=\"closeOther\"\n      [innerHTML]=\"i18n.closeOther\"></li>\n  <li nz-menu-item\n      (click)=\"click($event, 'closeRight')\"\n      data-type=\"closeRight\"\n      [nzDisabled]=\"item.last\"\n      [innerHTML]=\"i18n.closeRight\"></li>\n  <li nz-menu-item\n      (click)=\"click($event, 'clear')\"\n      data-type=\"clear\"\n      [innerHTML]=\"i18n.clear\"></li>\n  <ng-container *ngIf=\"customContextMenu!.length > 0\">\n    <li nz-menu-divider></li>\n    <li *ngFor=\"let i of customContextMenu\"\n        nz-menu-item\n        [attr.data-type]=\"i.id\"\n        [nzDisabled]=\"isDisabled(i)\"\n        (click)=\"click($event, 'custom', i)\"\n        [innerHTML]=\"i.title\"></li>\n  </ng-container>\n</ul>\n",
                        host: {
                            '(document:click)': 'closeMenu($event)',
                            '(document:contextmenu)': 'closeMenu($event)',
                        },
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        ReuseTabContextMenuComponent.ctorParameters = function () { return [
            { type: theme.DelonLocaleService }
        ]; };
        ReuseTabContextMenuComponent.propDecorators = {
            i18n: [{ type: core.Input }],
            item: [{ type: core.Input }],
            event: [{ type: core.Input }],
            customContextMenu: [{ type: core.Input }],
            close: [{ type: core.Output }]
        };
        return ReuseTabContextMenuComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ReuseTabContextMenuComponent.prototype._i18n;
        /** @type {?} */
        ReuseTabContextMenuComponent.prototype.item;
        /** @type {?} */
        ReuseTabContextMenuComponent.prototype.event;
        /** @type {?} */
        ReuseTabContextMenuComponent.prototype.customContextMenu;
        /** @type {?} */
        ReuseTabContextMenuComponent.prototype.close;
        /**
         * @type {?}
         * @private
         */
        ReuseTabContextMenuComponent.prototype.i18nSrv;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: reuse-tab-context.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ReuseTabContextService = /** @class */ (function () {
        function ReuseTabContextService(overlay) {
            this.overlay = overlay;
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
            var event = context.event, item = context.item, customContextMenu = context.customContextMenu;
            /** @type {?} */
            var fakeElement = new core.ElementRef({
                getBoundingClientRect: (/**
                 * @return {?}
                 */
                function () { return ({
                    bottom: event.clientY,
                    height: 0,
                    left: event.clientX,
                    right: event.clientX,
                    top: event.clientY,
                    width: 0,
                }); }),
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
            instance.customContextMenu = (/** @type {?} */ (customContextMenu));
            instance.event = event;
            /** @type {?} */
            var sub$ = new rxjs.Subscription();
            sub$.add(instance.close.subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                _this.close.next(res);
                _this.remove();
            })));
            comp.onDestroy((/**
             * @return {?}
             */
            function () { return sub$.unsubscribe(); }));
        };
        ReuseTabContextService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        ReuseTabContextService.ctorParameters = function () { return [
            { type: overlay.Overlay }
        ]; };
        return ReuseTabContextService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ReuseTabContextService.prototype.ref;
        /** @type {?} */
        ReuseTabContextService.prototype.i18n;
        /** @type {?} */
        ReuseTabContextService.prototype.show;
        /** @type {?} */
        ReuseTabContextService.prototype.close;
        /**
         * @type {?}
         * @private
         */
        ReuseTabContextService.prototype.overlay;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: reuse-tab-context.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ReuseTabContextComponent = /** @class */ (function () {
        function ReuseTabContextComponent(srv) {
            var _this = this;
            this.srv = srv;
            this.sub$ = new rxjs.Subscription();
            this.change = new core.EventEmitter();
            this.sub$.add(srv.show.subscribe((/**
             * @param {?} context
             * @return {?}
             */
            function (context) { return _this.srv.open(context); })));
            this.sub$.add(srv.close.subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return _this.change.emit(res); })));
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
            { type: core.Component, args: [{
                        selector: 'reuse-tab-context',
                        template: ""
                    }] }
        ];
        /** @nocollapse */
        ReuseTabContextComponent.ctorParameters = function () { return [
            { type: ReuseTabContextService }
        ]; };
        ReuseTabContextComponent.propDecorators = {
            i18n: [{ type: core.Input }],
            change: [{ type: core.Output }]
        };
        return ReuseTabContextComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ReuseTabContextComponent.prototype.sub$;
        /** @type {?} */
        ReuseTabContextComponent.prototype.change;
        /**
         * @type {?}
         * @private
         */
        ReuseTabContextComponent.prototype.srv;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: reuse-tab-context.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ReuseTabContextDirective = /** @class */ (function () {
        function ReuseTabContextDirective(srv) {
            this.srv = srv;
        }
        /**
         * @param {?} event
         * @return {?}
         */
        ReuseTabContextDirective.prototype._onContextMenu = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.srv.show.next({
                event: event,
                item: this.item,
                customContextMenu: this.customContextMenu,
            });
            event.preventDefault();
            event.stopPropagation();
        };
        ReuseTabContextDirective.decorators = [
            { type: core.Directive, args: [{
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
            item: [{ type: core.Input, args: ['reuse-tab-context-menu',] }],
            customContextMenu: [{ type: core.Input }]
        };
        return ReuseTabContextDirective;
    }());
    if (false) {
        /** @type {?} */
        ReuseTabContextDirective.prototype.item;
        /** @type {?} */
        ReuseTabContextDirective.prototype.customContextMenu;
        /**
         * @type {?}
         * @private
         */
        ReuseTabContextDirective.prototype.srv;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: reuse-tab.interfaces.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @record
     */
    function ReuseTitle() { }
    if (false) {
        /** @type {?|undefined} */
        ReuseTitle.prototype.text;
        /** @type {?|undefined} */
        ReuseTitle.prototype.i18n;
    }
    /**
     * @record
     */
    function ReuseTabCached() { }
    if (false) {
        /** @type {?} */
        ReuseTabCached.prototype.title;
        /** @type {?} */
        ReuseTabCached.prototype.url;
        /**
         * 是否允许关闭，默认：`true`
         * @type {?|undefined}
         */
        ReuseTabCached.prototype.closable;
        /**
         * 当前滚动条位置
         * @type {?|undefined}
         */
        ReuseTabCached.prototype.position;
        /** @type {?} */
        ReuseTabCached.prototype._snapshot;
        /** @type {?} */
        ReuseTabCached.prototype._handle;
    }
    /**
     * @record
     */
    function ReuseTabNotify() { }
    if (false) {
        /**
         * 事件类型
         * @type {?}
         */
        ReuseTabNotify.prototype.active;
        /* Skipping unhandled member: [key: string]: any;*/
    }
    /**
     * @record
     */
    function ReuseItem() { }
    if (false) {
        /** @type {?} */
        ReuseItem.prototype.url;
        /** @type {?} */
        ReuseItem.prototype.title;
        /** @type {?} */
        ReuseItem.prototype.closable;
        /** @type {?} */
        ReuseItem.prototype.index;
        /** @type {?} */
        ReuseItem.prototype.active;
        /** @type {?} */
        ReuseItem.prototype.last;
    }
    /**
     * @record
     */
    function ReuseContextEvent() { }
    if (false) {
        /** @type {?} */
        ReuseContextEvent.prototype.event;
        /** @type {?} */
        ReuseContextEvent.prototype.item;
        /** @type {?|undefined} */
        ReuseContextEvent.prototype.comp;
        /** @type {?|undefined} */
        ReuseContextEvent.prototype.customContextMenu;
    }
    /**
     * @record
     */
    function ReuseContextCloseEvent() { }
    if (false) {
        /** @type {?} */
        ReuseContextCloseEvent.prototype.type;
        /** @type {?} */
        ReuseContextCloseEvent.prototype.item;
        /** @type {?} */
        ReuseContextCloseEvent.prototype.includeNonCloseable;
    }
    /**
     * @record
     */
    function ReuseContextI18n() { }
    if (false) {
        /** @type {?|undefined} */
        ReuseContextI18n.prototype.close;
        /** @type {?|undefined} */
        ReuseContextI18n.prototype.closeOther;
        /** @type {?|undefined} */
        ReuseContextI18n.prototype.closeRight;
        /** @type {?|undefined} */
        ReuseContextI18n.prototype.clear;
    }
    /**
     * @record
     */
    function ReuseCustomContextMenu() { }
    if (false) {
        /** @type {?} */
        ReuseCustomContextMenu.prototype.id;
        /** @type {?} */
        ReuseCustomContextMenu.prototype.title;
        /** @type {?} */
        ReuseCustomContextMenu.prototype.fn;
        /** @type {?|undefined} */
        ReuseCustomContextMenu.prototype.disabled;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: reuse-tab.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            this._inited = false;
            this._max = 10;
            this._keepingScroll = false;
            this._cachedChange = new rxjs.BehaviorSubject(null);
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
                return this.injector.get(router.ActivatedRoute).snapshot;
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
         * @private
         * @param {?} method
         * @param {?} _url
         * @param {?} comp
         * @return {?}
         */
        ReuseTabService.prototype.runHook = /**
         * @private
         * @param {?} method
         * @param {?} _url
         * @param {?} comp
         * @return {?}
         */
        function (method, _url, comp) {
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
            var item = {
                title: this.getTitle(url, _snapshot),
                closable: this.getClosable(url, _snapshot),
                position: this.getKeepingScroll(url, _snapshot) ? this.positionBuffer[url] : null,
                url: url,
                _snapshot: _snapshot,
                _handle: _handle,
            };
            if (idx === -1) {
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
            if (ret && (/** @type {?} */ (data))._handle.componentRef) {
                this.runHook('_onReuseInit', url, (/** @type {?} */ (data))._handle.componentRef);
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
                var routerConfig = this.injector.get(router.ROUTER_CONFIGURATION, (/** @type {?} */ ({})));
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
                return this.injector.get(theme.ScrollService);
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
            this._router$ = this.injector.get(router.Router).events.subscribe((/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                if (e instanceof router.NavigationStart) {
                    /** @type {?} */
                    var url = _this.curUrl;
                    if (_this.getKeepingScroll(url, _this.getTruthRoute(_this.snapshot))) {
                        _this.positionBuffer[url] = _this.ss.getScrollPosition(_this.keepingScrollContainer);
                    }
                    else {
                        delete _this.positionBuffer[url];
                    }
                }
                else if (e instanceof router.NavigationEnd) {
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
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        ReuseTabService.ctorParameters = function () { return [
            { type: core.Injector },
            { type: theme.MenuService }
        ]; };
        /** @nocollapse */ ReuseTabService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ReuseTabService_Factory() { return new ReuseTabService(core.ɵɵinject(core.INJECTOR), core.ɵɵinject(theme.MenuService)); }, token: ReuseTabService, providedIn: "root" });
        return ReuseTabService;
    }());
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

    /**
     * @fileoverview added by tsickle
     * Generated from: reuse-tab.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ReuseTabComponent = /** @class */ (function () {
        // #endregion
        function ReuseTabComponent(el, srv, cdr, router, route, render, i18nSrv, doc) {
            this.srv = srv;
            this.cdr = cdr;
            this.router = router;
            this.route = route;
            this.render = render;
            this.i18nSrv = i18nSrv;
            this.doc = doc;
            this.unsubscribe$ = new rxjs.Subject();
            this.list = [];
            this.pos = 0;
            // #region fields
            this.mode = ReuseTabMatchMode.Menu;
            this.debug = false;
            this.allowClose = true;
            this.showCurrent = true;
            this.keepingScroll = false;
            this.customContextMenu = [];
            this.tabType = 'line';
            this.change = new core.EventEmitter();
            this.close = new core.EventEmitter();
            this.el = el.nativeElement;
        }
        Object.defineProperty(ReuseTabComponent.prototype, "keepingScrollContainer", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._keepingScrollContainer = typeof value === 'string' ? this.doc.querySelector(value) : value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * @param {?} title
         * @return {?}
         */
        ReuseTabComponent.prototype.genTit = /**
         * @private
         * @param {?} title
         * @return {?}
         */
        function (title) {
            return title.i18n && this.i18nSrv ? this.i18nSrv.fanyi(title.i18n) : (/** @type {?} */ (title.text));
        };
        /**
         * @private
         * @param {?=} notify
         * @return {?}
         */
        ReuseTabComponent.prototype.genList = /**
         * @private
         * @param {?=} notify
         * @return {?}
         */
        function (notify) {
            var _this = this;
            /** @type {?} */
            var isClosed = notify && notify.active === 'close';
            /** @type {?} */
            var beforeClosePos = isClosed ? this.list.findIndex((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.url === (/** @type {?} */ (notify)).url; })) : -1;
            /** @type {?} */
            var ls = this.srv.items.map((/**
             * @param {?} item
             * @param {?} index
             * @return {?}
             */
            function (item, index) {
                return (/** @type {?} */ ({
                    url: item.url,
                    title: _this.genTit(item.title),
                    closable: _this.allowClose && item.closable && _this.srv.count > 0,
                    index: index,
                    active: false,
                    last: false,
                }));
            }));
            if (this.showCurrent) {
                /** @type {?} */
                var snapshot = this.route.snapshot;
                /** @type {?} */
                var url_1 = this.srv.getUrl(snapshot);
                /** @type {?} */
                var idx = ls.findIndex((/**
                 * @param {?} w
                 * @return {?}
                 */
                function (w) { return w.url === url_1; }));
                // jump directly when the current exists in the list
                // or create a new current item and jump
                if (idx !== -1 || (isClosed && (/** @type {?} */ (notify)).url === url_1)) {
                    this.pos = isClosed ? (idx >= beforeClosePos ? this.pos - 1 : this.pos) : idx;
                }
                else {
                    /** @type {?} */
                    var snapshotTrue = this.srv.getTruthRoute(snapshot);
                    ls.push((/** @type {?} */ ({
                        url: url_1,
                        title: this.genTit(this.srv.getTitle(url_1, snapshotTrue)),
                        closable: this.allowClose && this.srv.count > 0 && this.srv.getClosable(url_1, snapshotTrue),
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
                this.to(this.pos);
            }
            this.refStatus(false);
            this.visibility();
            this.cdr.detectChanges();
        };
        /**
         * @private
         * @return {?}
         */
        ReuseTabComponent.prototype.visibility = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.showCurrent)
                return;
            this.render.setStyle(this.el, 'display', this.list.length === 0 ? 'none' : 'block');
        };
        Object.defineProperty(ReuseTabComponent.prototype, "acitveIndex", {
            // #region UI
            get: 
            // #region UI
            /**
             * @private
             * @return {?}
             */
            function () {
                return (/** @type {?} */ (this.list.find((/**
                 * @param {?} w
                 * @return {?}
                 */
                function (w) { return w.active; })))).index;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} res
         * @return {?}
         */
        ReuseTabComponent.prototype.cmChange = /**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            var _this = this;
            /** @type {?} */
            var fn = null;
            switch (res.type) {
                case 'close':
                    this._close(null, res.item.index, res.includeNonCloseable);
                    break;
                case 'closeRight':
                    fn = (/**
                     * @return {?}
                     */
                    function () {
                        _this.srv.closeRight(res.item.url, res.includeNonCloseable);
                        _this.close.emit(null);
                    });
                    break;
                case 'clear':
                case 'closeOther':
                    fn = (/**
                     * @return {?}
                     */
                    function () {
                        _this.srv.clear(res.includeNonCloseable);
                        _this.close.emit(null);
                    });
                    break;
            }
            if (!fn) {
                return;
            }
            if (!res.item.active && res.item.index <= this.acitveIndex) {
                this.to(res.item.index, fn);
            }
            else {
                fn();
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
                this.list.forEach((/**
                 * @param {?} i
                 * @param {?} idx
                 * @return {?}
                 */
                function (i, idx) { return (i.active = _this.pos === idx); }));
            }
            if (dc)
                this.cdr.detectChanges();
        };
        /**
         * @param {?} index
         * @param {?=} cb
         * @return {?}
         */
        ReuseTabComponent.prototype.to = /**
         * @param {?} index
         * @param {?=} cb
         * @return {?}
         */
        function (index, cb) {
            var _this = this;
            index = Math.max(0, Math.min(index, this.list.length - 1));
            /** @type {?} */
            var item = this.list[index];
            this.router.navigateByUrl(item.url).then((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                if (!res)
                    return;
                _this.pos = index;
                _this.item = item;
                _this.refStatus();
                _this.change.emit(item);
                if (cb) {
                    cb();
                }
            }));
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
            if (e != null) {
                e.preventDefault();
                e.stopPropagation();
            }
            /** @type {?} */
            var item = this.list[idx];
            this.srv.close(item.url, includeNonCloseable);
            this.close.emit(item);
            this.cdr.detectChanges();
            return false;
        };
        // #endregion
        // #endregion
        /**
         * @return {?}
         */
        ReuseTabComponent.prototype.ngOnInit = 
        // #endregion
        /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.router.events
                .pipe(operators.takeUntil(this.unsubscribe$), operators.filter((/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return evt instanceof router.NavigationEnd; })))
                .subscribe((/**
             * @return {?}
             */
            function () { return _this.genList(); }));
            this.srv.change.pipe(operators.takeUntil(this.unsubscribe$)).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return _this.genList((/** @type {?} */ (res))); }));
            this.i18nSrv.change
                .pipe(operators.filter((/**
             * @return {?}
             */
            function () { return _this.srv.inited; })), operators.takeUntil(this.unsubscribe$), operators.debounceTime(100))
                .subscribe((/**
             * @return {?}
             */
            function () { return _this.genList(); }));
            this.genList();
            this.srv.init();
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
            if (changes.keepingScroll) {
                this.srv.keepingScroll = this.keepingScroll;
                this.srv.keepingScrollContainer = this._keepingScrollContainer;
            }
            this.srv.debug = this.debug;
            this.cdr.detectChanges();
        };
        /**
         * @return {?}
         */
        ReuseTabComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            var unsubscribe$ = this.unsubscribe$;
            unsubscribe$.next();
            unsubscribe$.complete();
        };
        ReuseTabComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'reuse-tab',
                        exportAs: 'reuseTab',
                        template: "<nz-tabset [nzSelectedIndex]=\"pos\"\n  [nzAnimated]=\"false\" [nzType]=\"tabType\"\n  [nzTabBarExtraContent]=\"tabBarExtraContent\"\n  [nzTabBarGutter]=\"tabBarGutter\"\n  [nzTabBarStyle]=\"tabBarStyle\">\n  <nz-tab *ngFor=\"let i of list; let index = index\" [nzTitle]=\"titleTemplate\" (nzClick)=\"to(index)\">\n    <ng-template #titleTemplate>\n      <div [reuse-tab-context-menu]=\"i\" [customContextMenu]=\"customContextMenu\" class=\"reuse-tab__name\" [attr.title]=\"i.title\">\n        <span [class.reuse-tab__name-width]=\"tabMaxWidth\" [style.max-width.px]=\"tabMaxWidth\">\n          {{i.title}}\n        </span>\n      </div>\n      <i *ngIf=\"i.closable\" nz-icon nzType=\"close\" class=\"reuse-tab__op\" (click)=\"_close($event, index, false)\"></i>\n    </ng-template>\n  </nz-tab>\n</nz-tabset>\n<reuse-tab-context [i18n]=\"i18n\" (change)=\"cmChange($event)\"></reuse-tab-context>\n",
                        host: {
                            '[class.reuse-tab]': 'true',
                            '[class.reuse-tab__line]': "tabType === 'line'",
                            '[class.reuse-tab__card]': "tabType === 'card'",
                        },
                        providers: [ReuseTabContextService],
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        ReuseTabComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: ReuseTabService },
            { type: core.ChangeDetectorRef },
            { type: router.Router },
            { type: router.ActivatedRoute },
            { type: core.Renderer2 },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [theme.ALAIN_I18N_TOKEN,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
        ]; };
        ReuseTabComponent.propDecorators = {
            mode: [{ type: core.Input }],
            i18n: [{ type: core.Input }],
            debug: [{ type: core.Input }],
            max: [{ type: core.Input }],
            tabMaxWidth: [{ type: core.Input }],
            excludes: [{ type: core.Input }],
            allowClose: [{ type: core.Input }],
            showCurrent: [{ type: core.Input }],
            keepingScroll: [{ type: core.Input }],
            keepingScrollContainer: [{ type: core.Input }],
            customContextMenu: [{ type: core.Input }],
            tabBarExtraContent: [{ type: core.Input }],
            tabBarGutter: [{ type: core.Input }],
            tabBarStyle: [{ type: core.Input }],
            tabType: [{ type: core.Input }],
            change: [{ type: core.Output }],
            close: [{ type: core.Output }]
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
            util.InputNumber(),
            __metadata("design:type", Number)
        ], ReuseTabComponent.prototype, "tabMaxWidth", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], ReuseTabComponent.prototype, "allowClose", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], ReuseTabComponent.prototype, "showCurrent", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], ReuseTabComponent.prototype, "keepingScroll", void 0);
        return ReuseTabComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ReuseTabComponent.prototype.el;
        /**
         * @type {?}
         * @private
         */
        ReuseTabComponent.prototype.unsubscribe$;
        /**
         * @type {?}
         * @private
         */
        ReuseTabComponent.prototype._keepingScrollContainer;
        /** @type {?} */
        ReuseTabComponent.prototype.list;
        /** @type {?} */
        ReuseTabComponent.prototype.item;
        /** @type {?} */
        ReuseTabComponent.prototype.pos;
        /** @type {?} */
        ReuseTabComponent.prototype.mode;
        /** @type {?} */
        ReuseTabComponent.prototype.i18n;
        /** @type {?} */
        ReuseTabComponent.prototype.debug;
        /** @type {?} */
        ReuseTabComponent.prototype.max;
        /** @type {?} */
        ReuseTabComponent.prototype.tabMaxWidth;
        /** @type {?} */
        ReuseTabComponent.prototype.excludes;
        /** @type {?} */
        ReuseTabComponent.prototype.allowClose;
        /** @type {?} */
        ReuseTabComponent.prototype.showCurrent;
        /** @type {?} */
        ReuseTabComponent.prototype.keepingScroll;
        /** @type {?} */
        ReuseTabComponent.prototype.customContextMenu;
        /** @type {?} */
        ReuseTabComponent.prototype.tabBarExtraContent;
        /** @type {?} */
        ReuseTabComponent.prototype.tabBarGutter;
        /** @type {?} */
        ReuseTabComponent.prototype.tabBarStyle;
        /** @type {?} */
        ReuseTabComponent.prototype.tabType;
        /** @type {?} */
        ReuseTabComponent.prototype.change;
        /** @type {?} */
        ReuseTabComponent.prototype.close;
        /**
         * @type {?}
         * @private
         */
        ReuseTabComponent.prototype.srv;
        /**
         * @type {?}
         * @private
         */
        ReuseTabComponent.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        ReuseTabComponent.prototype.router;
        /**
         * @type {?}
         * @private
         */
        ReuseTabComponent.prototype.route;
        /**
         * @type {?}
         * @private
         */
        ReuseTabComponent.prototype.render;
        /**
         * @type {?}
         * @private
         */
        ReuseTabComponent.prototype.i18nSrv;
        /**
         * @type {?}
         * @private
         */
        ReuseTabComponent.prototype.doc;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: reuse-tab.strategy.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ReuseTabStrategy.prototype.srv;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: reuse-tab.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [ReuseTabComponent];
    /** @type {?} */
    var NOEXPORTS = [ReuseTabContextMenuComponent, ReuseTabContextComponent, ReuseTabContextDirective];
    var ReuseTabModule = /** @class */ (function () {
        function ReuseTabModule() {
        }
        ReuseTabModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, router.RouterModule, theme.DelonLocaleModule, menu.NzMenuModule, tabs.NzTabsModule, icon.NzIconModule, overlay.OverlayModule],
                        declarations: __spread(COMPONENTS, NOEXPORTS),
                        entryComponents: [ReuseTabContextMenuComponent],
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return ReuseTabModule;
    }());

    exports.ReuseTabComponent = ReuseTabComponent;
    exports.ReuseTabContextComponent = ReuseTabContextComponent;
    exports.ReuseTabContextDirective = ReuseTabContextDirective;
    exports.ReuseTabContextMenuComponent = ReuseTabContextMenuComponent;
    exports.ReuseTabContextService = ReuseTabContextService;
    exports.ReuseTabMatchMode = ReuseTabMatchMode;
    exports.ReuseTabModule = ReuseTabModule;
    exports.ReuseTabService = ReuseTabService;
    exports.ReuseTabStrategy = ReuseTabStrategy;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=reuseTab.umd.js.map
