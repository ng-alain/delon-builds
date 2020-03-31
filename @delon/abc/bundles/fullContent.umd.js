/**
 * @license ng-alain(cipchk@qq.com) v8.9.0
 * (c) 2019 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/router'), require('@delon/util'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/full-content', ['exports', '@angular/common', '@angular/core', '@angular/router', '@delon/util', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc['full-content'] = {}), global.ng.common, global.ng.core, global.ng.router, global.delon.util, global.rxjs, global.rxjs.operators));
}(this, (function (exports, common, core, router, util, rxjs, operators) { 'use strict';

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
     * Generated from: full-content.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FullContentService = /** @class */ (function () {
        function FullContentService() {
            this._change = new rxjs.BehaviorSubject(null);
        }
        /** 切换全屏工作区状态 */
        /**
         * 切换全屏工作区状态
         * @return {?}
         */
        FullContentService.prototype.toggle = /**
         * 切换全屏工作区状态
         * @return {?}
         */
        function () {
            this._change.next(true);
        };
        Object.defineProperty(FullContentService.prototype, "change", {
            get: /**
             * @return {?}
             */
            function () {
                return this._change.pipe(operators.share());
            },
            enumerable: true,
            configurable: true
        });
        FullContentService.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ FullContentService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function FullContentService_Factory() { return new FullContentService(); }, token: FullContentService, providedIn: "root" });
        return FullContentService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        FullContentService.prototype._change;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: full-content.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var wrapCls = "full-content__body";
    /** @type {?} */
    var openedCls = "full-content__opened";
    /** @type {?} */
    var hideTitleCls = "full-content__hidden-title";
    var FullContentComponent = /** @class */ (function () {
        // #endregion
        function FullContentComponent(el, cdr, srv, router, doc) {
            this.el = el;
            this.cdr = cdr;
            this.srv = srv;
            this.router = router;
            this.doc = doc;
            this.inited = false;
            this.id = "_full-content-" + Math.random()
                .toString(36)
                .substring(2);
            this.scroll$ = null;
            this._height = 0;
            this.hideTitle = true;
            this.padding = 24;
            this.fullscreenChange = new core.EventEmitter();
        }
        /**
         * @private
         * @return {?}
         */
        FullContentComponent.prototype.updateCls = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var clss = this.bodyEl.classList;
            if (this.fullscreen) {
                clss.add(openedCls);
                if (this.hideTitle) {
                    clss.add(hideTitleCls);
                }
            }
            else {
                clss.remove(openedCls);
                if (this.hideTitle) {
                    clss.remove(hideTitleCls);
                }
            }
        };
        /**
         * @private
         * @return {?}
         */
        FullContentComponent.prototype.update = /**
         * @private
         * @return {?}
         */
        function () {
            this.updateCls();
            this.updateHeight();
            this.fullscreenChange.emit(this.fullscreen);
        };
        /**
         * @private
         * @return {?}
         */
        FullContentComponent.prototype.updateHeight = /**
         * @private
         * @return {?}
         */
        function () {
            this._height =
                this.bodyEl.getBoundingClientRect().height -
                    ((/** @type {?} */ (this.el.nativeElement))).getBoundingClientRect().top -
                    this.padding;
            this.cdr.detectChanges();
        };
        /**
         * @private
         * @return {?}
         */
        FullContentComponent.prototype.removeInBody = /**
         * @private
         * @return {?}
         */
        function () {
            this.bodyEl.classList.remove(wrapCls, openedCls, hideTitleCls);
        };
        /**
         * @return {?}
         */
        FullContentComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.inited = true;
            this.bodyEl = this.doc.querySelector('body');
            this.bodyEl.classList.add(wrapCls);
            ((/** @type {?} */ (this.el.nativeElement))).id = this.id;
            this.updateCls();
            // when window resize
            this.scroll$ = rxjs.fromEvent(window, 'resize')
                .pipe(operators.debounceTime(200))
                .subscribe((/**
             * @return {?}
             */
            function () { return _this.updateHeight(); }));
            // when servier changed
            this.srv$ = this.srv.change.pipe(operators.filter((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return res !== null; }))).subscribe((/**
             * @return {?}
             */
            function () { return _this.toggle(); }));
            // when router changed
            this.route$ = this.router.events
                .pipe(operators.filter((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return e instanceof router.ActivationStart || e instanceof router.ActivationEnd; })), operators.debounceTime(200))
                .subscribe((/**
             * @return {?}
             */
            function () {
                if (!!_this.doc.querySelector('#' + _this.id)) {
                    _this.bodyEl.classList.add(wrapCls);
                    _this.updateCls();
                }
                else {
                    _this.removeInBody();
                }
            }));
        };
        /**
         * @return {?}
         */
        FullContentComponent.prototype.toggle = /**
         * @return {?}
         */
        function () {
            this.fullscreen = !this.fullscreen;
            this.update();
            this.updateHeight();
        };
        /**
         * @return {?}
         */
        FullContentComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            setTimeout((/**
             * @return {?}
             */
            function () { return _this.updateHeight(); }));
        };
        /**
         * @return {?}
         */
        FullContentComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            if (this.inited)
                this.update();
        };
        /**
         * @return {?}
         */
        FullContentComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.removeInBody();
            (/** @type {?} */ (this.scroll$)).unsubscribe();
            this.srv$.unsubscribe();
            this.route$.unsubscribe();
        };
        FullContentComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'full-content',
                        exportAs: 'fullContent',
                        template: "\n    <ng-content></ng-content>\n  ",
                        host: {
                            '[class.full-content]': 'true',
                            '[style.height.px]': '_height',
                        },
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        FullContentComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef },
            { type: FullContentService },
            { type: router.Router },
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
        ]; };
        FullContentComponent.propDecorators = {
            fullscreen: [{ type: core.Input }],
            hideTitle: [{ type: core.Input }],
            padding: [{ type: core.Input }],
            fullscreenChange: [{ type: core.Output }]
        };
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Boolean)
        ], FullContentComponent.prototype, "fullscreen", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], FullContentComponent.prototype, "hideTitle", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], FullContentComponent.prototype, "padding", void 0);
        return FullContentComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        FullContentComponent.prototype.bodyEl;
        /**
         * @type {?}
         * @private
         */
        FullContentComponent.prototype.inited;
        /**
         * @type {?}
         * @private
         */
        FullContentComponent.prototype.srv$;
        /**
         * @type {?}
         * @private
         */
        FullContentComponent.prototype.route$;
        /**
         * @type {?}
         * @private
         */
        FullContentComponent.prototype.id;
        /**
         * @type {?}
         * @private
         */
        FullContentComponent.prototype.scroll$;
        /** @type {?} */
        FullContentComponent.prototype._height;
        /** @type {?} */
        FullContentComponent.prototype.fullscreen;
        /** @type {?} */
        FullContentComponent.prototype.hideTitle;
        /** @type {?} */
        FullContentComponent.prototype.padding;
        /** @type {?} */
        FullContentComponent.prototype.fullscreenChange;
        /**
         * @type {?}
         * @private
         */
        FullContentComponent.prototype.el;
        /**
         * @type {?}
         * @private
         */
        FullContentComponent.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        FullContentComponent.prototype.srv;
        /**
         * @type {?}
         * @private
         */
        FullContentComponent.prototype.router;
        /**
         * @type {?}
         * @private
         */
        FullContentComponent.prototype.doc;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: full-content-toggle.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FullContentToggleDirective = /** @class */ (function () {
        function FullContentToggleDirective(parent) {
            this.parent = parent;
        }
        /**
         * @return {?}
         */
        FullContentToggleDirective.prototype._click = /**
         * @return {?}
         */
        function () {
            this.parent.toggle();
        };
        FullContentToggleDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[full-toggle]',
                        exportAs: 'fullToggle',
                        host: {
                            '(click)': '_click()',
                        },
                    },] }
        ];
        /** @nocollapse */
        FullContentToggleDirective.ctorParameters = function () { return [
            { type: FullContentComponent }
        ]; };
        return FullContentToggleDirective;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        FullContentToggleDirective.prototype.parent;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: full-content.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [FullContentComponent, FullContentToggleDirective];
    var FullContentModule = /** @class */ (function () {
        function FullContentModule() {
        }
        FullContentModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, util.DelonUtilModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return FullContentModule;
    }());

    exports.FullContentComponent = FullContentComponent;
    exports.FullContentModule = FullContentModule;
    exports.FullContentService = FullContentService;
    exports.FullContentToggleDirective = FullContentToggleDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fullContent.umd.js.map
