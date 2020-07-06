/**
 * @license ng-alain(cipchk@qq.com) v9.5.2
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@delon/theme'), require('@delon/util'), require('ng-zorro-antd/button'), require('ng-zorro-antd/core/no-animation'), require('ng-zorro-antd/core/outlet'), require('ng-zorro-antd/popover'), require('@angular/cdk/platform')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/onboarding', ['exports', '@angular/common', '@angular/core', '@delon/theme', '@delon/util', 'ng-zorro-antd/button', 'ng-zorro-antd/core/no-animation', 'ng-zorro-antd/core/outlet', 'ng-zorro-antd/popover', '@angular/cdk/platform'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.onboarding = {}), global.ng.common, global.ng.core, global.delon.theme, global.delon.util, global['ng-zorro-antd/button'], global['ng-zorro-antd/core/no-animation'], global['ng-zorro-antd/core/outlet'], global['ng-zorro-antd/popover'], global.ng.cdk.platform));
}(this, (function (exports, common, core, theme, util, button, noAnimation, outlet, popover, platform) { 'use strict';

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

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
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
     * Generated from: onboarding.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function OnboardingLightData() { }
    if (false) {
        /** @type {?} */
        OnboardingLightData.prototype.el;
        /** @type {?} */
        OnboardingLightData.prototype.top;
        /** @type {?} */
        OnboardingLightData.prototype.left;
        /** @type {?} */
        OnboardingLightData.prototype.width;
        /** @type {?} */
        OnboardingLightData.prototype.height;
        /** @type {?} */
        OnboardingLightData.prototype.clientHeight;
        /** @type {?} */
        OnboardingLightData.prototype.clientWidth;
    }
    var OnboardingComponent = /** @class */ (function () {
        function OnboardingComponent(el, doc, platform, cdr) {
            this.el = el;
            this.doc = doc;
            this.platform = platform;
            this.cdr = cdr;
            this.active = 0;
            this.max = 0;
            this.op = new core.EventEmitter();
            this.visible = false;
        }
        Object.defineProperty(OnboardingComponent.prototype, "first", {
            get: /**
             * @return {?}
             */
            function () {
                return this.active === 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OnboardingComponent.prototype, "last", {
            get: /**
             * @return {?}
             */
            function () {
                return this.active === this.max - 1;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * @return {?}
         */
        OnboardingComponent.prototype._getDoc = /**
         * @private
         * @return {?}
         */
        function () {
            return this.doc;
        };
        /**
         * @private
         * @return {?}
         */
        OnboardingComponent.prototype._getWin = /**
         * @private
         * @return {?}
         */
        function () {
            return this._getDoc().defaultView || window;
        };
        /**
         * @private
         * @return {?}
         */
        OnboardingComponent.prototype.getLightData = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var doc = this._getDoc();
            /** @type {?} */
            var win = this._getWin();
            /** @type {?} */
            var el = (/** @type {?} */ (doc.querySelector(this.item.selectors)));
            if (!el) {
                return null;
            }
            /** @type {?} */
            var scrollTop = win.pageYOffset || doc.documentElement.scrollTop || doc.body.scrollTop;
            /** @type {?} */
            var scrollLeft = win.pageXOffset || doc.documentElement.scrollLeft || doc.body.scrollLeft;
            /** @type {?} */
            var rect = el.getBoundingClientRect();
            /** @type {?} */
            var top = rect.top + scrollTop;
            /** @type {?} */
            var left = rect.left + scrollLeft;
            /** @type {?} */
            var padding = 8;
            /** @type {?} */
            var needPadding = top > padding && left > padding;
            /** @type {?} */
            var offsetPos = needPadding ? padding : 0;
            /** @type {?} */
            var offsetWH = needPadding ? padding * 2 : 0;
            return {
                top: top - offsetPos,
                left: left - offsetPos,
                width: rect.width + offsetWH,
                height: rect.height + offsetWH,
                el: el,
                clientWidth: doc.body.clientWidth,
                clientHeight: doc.body.clientHeight,
            };
        };
        /**
         * @private
         * @param {?} pos
         * @return {?}
         */
        OnboardingComponent.prototype.scroll = /**
         * @private
         * @param {?} pos
         * @return {?}
         */
        function (pos) {
            this.prevSelectorEl = pos.el;
            /** @type {?} */
            var scrollY = pos.top - (pos.clientHeight - pos.height) / 2;
            this._getWin().scrollTo({ top: scrollY });
            this.updatePrevElStatus(true);
            this.setVisible(true);
        };
        /**
         * @param {?=} options
         * @return {?}
         */
        OnboardingComponent.prototype.updatePosition = /**
         * @param {?=} options
         * @return {?}
         */
        function (options) {
            var _this = this;
            if (options === void 0) { options = { time: 300 }; }
            if (!this.platform.isBrowser) {
                return;
            }
            /** @type {?} */
            var pos = this.getLightData();
            if (pos == null) {
                this.setVisible(false);
                return;
            }
            /** @type {?} */
            var lightStyle = ((/** @type {?} */ (this.el.nativeElement.querySelector('.onboarding__light')))).style;
            lightStyle.top = pos.top + "px";
            lightStyle.left = pos.left + "px";
            lightStyle.width = pos.width + "px";
            lightStyle.height = pos.height + "px";
            this.updatePrevElStatus(false);
            this.setVisible(false);
            if (options.time === 0 || !this.config.animation) {
                this.scroll(pos);
                return;
            }
            this.time = setTimeout((/**
             * @return {?}
             */
            function () { return _this.scroll(pos); }), options.time);
        };
        /**
         * @private
         * @param {?} status
         * @return {?}
         */
        OnboardingComponent.prototype.setVisible = /**
         * @private
         * @param {?} status
         * @return {?}
         */
        function (status) {
            this.visible = status;
            this.cdr.detectChanges();
        };
        /**
         * @private
         * @param {?} status
         * @return {?}
         */
        OnboardingComponent.prototype.updatePrevElStatus = /**
         * @private
         * @param {?} status
         * @return {?}
         */
        function (status) {
            if (this.prevSelectorEl) {
                this.prevSelectorEl.classList[status ? 'add' : 'remove']('onboarding__light-el');
            }
        };
        /**
         * @param {?} type
         * @return {?}
         */
        OnboardingComponent.prototype.to = /**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            this.op.emit(type);
        };
        /**
         * @return {?}
         */
        OnboardingComponent.prototype.handleMask = /**
         * @return {?}
         */
        function () {
            if (this.config.maskClosable === true) {
                this.to('done');
            }
        };
        /**
         * @return {?}
         */
        OnboardingComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            clearTimeout(this.time);
            this.updatePrevElStatus(false);
        };
        OnboardingComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'onboarding',
                        template: "<div *ngIf=\"visible && config.mask\" class=\"onboarding__mask\" (click)=\"handleMask()\"></div>\n<div\n  *ngIf=\"item\"\n  class=\"onboarding__light\"\n  [class.onboarding__light-ant]=\"config.animation\"\n  [class.onboarding__light-hide]=\"!visible\"\n  nz-popover\n  [nzPopoverTitle]=\"item.title\"\n  [nzPopoverContent]=\"content\"\n  [nzVisible]=\"visible\"\n  [nzPopoverTrigger]=\"null\"\n  [nzPopoverPlacement]=\"item.position\"\n  [nzNoAnimation]=\"true\"\n  [nzOverlayClassName]=\"item.className\"\n  [nzOverlayStyle]=\"{ 'max-width.px': item.width }\"\n></div>\n<ng-template #content>\n  <ng-container *nzStringTemplateOutlet=\"item.content\">{{ item.content }}</ng-container>\n  <div class=\"flex-center-between onboarding__footer\">\n    <span class=\"onboarding__total\">\n      <ng-container *ngIf=\"config.showTotal\">{{ active + 1 }}/{{ max }}</ng-container>\n    </span>\n    <div class=\"onboarding__btns\">\n      <a *ngIf=\"!last && item.skip !== null\" nz-button nzType=\"link\" (click)=\"to('skip')\" nzSize=\"small\" data-btnType=\"skip\">\n        <ng-container *nzStringTemplateOutlet=\"item.skip\">{{ item.skip }}</ng-container>\n      </a>\n      <a *ngIf=\"!first && item.prev !== null\" nz-button (click)=\"to('prev')\" nzSize=\"small\" data-btnType=\"prev\">\n        <ng-container *nzStringTemplateOutlet=\"item.prev\">{{ item.prev }}</ng-container>\n      </a>\n      <a *ngIf=\"!last && item.next !== null\" nz-button (click)=\"to('next')\" nzType=\"primary\" nzSize=\"small\" data-btnType=\"next\">\n        <ng-container *nzStringTemplateOutlet=\"item.next\">{{ item.next }}</ng-container>\n      </a>\n      <a *ngIf=\"last && item.done !== null\" nz-button (click)=\"to('done')\" nzType=\"primary\" nzSize=\"small\" data-btnType=\"done\">\n        <ng-container *nzStringTemplateOutlet=\"item.done\">{{ item.done }}</ng-container>\n      </a>\n    </div>\n  </div>\n</ng-template>\n",
                        host: {
                            '[class.onboarding]': "true",
                            '[attr.data-onboarding-active]': "active",
                        },
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        OnboardingComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: platform.Platform },
            { type: core.ChangeDetectorRef }
        ]; };
        return OnboardingComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        OnboardingComponent.prototype.time;
        /**
         * @type {?}
         * @private
         */
        OnboardingComponent.prototype.prevSelectorEl;
        /** @type {?} */
        OnboardingComponent.prototype.config;
        /** @type {?} */
        OnboardingComponent.prototype.item;
        /** @type {?} */
        OnboardingComponent.prototype.active;
        /** @type {?} */
        OnboardingComponent.prototype.max;
        /** @type {?} */
        OnboardingComponent.prototype.op;
        /** @type {?} */
        OnboardingComponent.prototype.visible;
        /**
         * @type {?}
         * @private
         */
        OnboardingComponent.prototype.el;
        /**
         * @type {?}
         * @private
         */
        OnboardingComponent.prototype.doc;
        /**
         * @type {?}
         * @private
         */
        OnboardingComponent.prototype.platform;
        /**
         * @type {?}
         * @private
         */
        OnboardingComponent.prototype.cdr;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: onboarding.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OnboardingModule = /** @class */ (function () {
        function OnboardingModule() {
        }
        OnboardingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, theme.DelonLocaleModule, util.DelonUtilModule, popover.NzPopoverModule, outlet.NzOutletModule, button.NzButtonModule, noAnimation.NzNoAnimationModule],
                        declarations: [OnboardingComponent],
                        entryComponents: [OnboardingComponent],
                    },] }
        ];
        return OnboardingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: onboarding.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OnboardingService = /** @class */ (function () {
        function OnboardingService(i18n, appRef, resolver, injector, doc) {
            this.i18n = i18n;
            this.appRef = appRef;
            this.resolver = resolver;
            this.injector = injector;
            this.doc = doc;
            this.active = 0;
        }
        /**
         * @private
         * @return {?}
         */
        OnboardingService.prototype._getDoc = /**
         * @private
         * @return {?}
         */
        function () {
            return this.doc;
        };
        /**
         * @private
         * @return {?}
         */
        OnboardingService.prototype.attach = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var compRef = (this.compRef = this.resolver.resolveComponentFactory(OnboardingComponent).create(this.injector));
            this.appRef.attachView(compRef.hostView);
            /** @type {?} */
            var compNode = ((/** @type {?} */ (compRef.hostView))).rootNodes[0];
            /** @type {?} */
            var doc = this._getDoc();
            /** @type {?} */
            var cdk = (/** @type {?} */ (doc.querySelector('.cdk-overlay-container')));
            if (cdk) {
                doc.body.insertBefore(compNode, cdk);
            }
            else {
                doc.body.appendChild(compNode);
            }
            this.op$ = this.compRef.instance.op.subscribe((/**
             * @param {?} type
             * @return {?}
             */
            function (type) {
                switch (type) {
                    case 'next':
                        _this.next();
                        break;
                    case 'prev':
                        _this.prev();
                        break;
                    default:
                        _this.done();
                        break;
                }
            }));
        };
        /**
         * @private
         * @return {?}
         */
        OnboardingService.prototype.destroy = /**
         * @private
         * @return {?}
         */
        function () {
            this.appRef.detachView(this.compRef.hostView);
            this.compRef.destroy();
            this.op$.unsubscribe();
        };
        /**
         * @private
         * @param {?=} cleanTime
         * @return {?}
         */
        OnboardingService.prototype.showItem = /**
         * @private
         * @param {?=} cleanTime
         * @return {?}
         */
        function (cleanTime) {
            var _this = this;
            if (cleanTime === void 0) { cleanTime = false; }
            /** @type {?} */
            var items = (/** @type {?} */ (this.config.items));
            /** @type {?} */
            var item = (/** @type {?} */ (__assign(__assign({ position: 'bottomLeft' }, this.i18n.getData('onboarding')), items[this.active])));
            Object.assign(this.compRef.instance, { item: item, config: this.config, active: this.active, max: items.length });
            setTimeout((/**
             * @return {?}
             */
            function () { return _this.compRef.instance.updatePosition({ time: cleanTime ? 0 : 300 }); }));
        };
        /**
         * @param {?} config
         * @return {?}
         */
        OnboardingService.prototype.start = /**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            this.config = __assign({ items: [], mask: true, maskClosable: true, animation: false, showTotal: false }, config);
            this.active = 0;
            this.attach();
            this.showItem(true);
        };
        /**
         * @return {?}
         */
        OnboardingService.prototype.next = /**
         * @return {?}
         */
        function () {
            if (this.active + 1 >= (/** @type {?} */ (this.config.items)).length) {
                this.done();
                return;
            }
            ++this.active;
            this.showItem();
        };
        /**
         * @return {?}
         */
        OnboardingService.prototype.prev = /**
         * @return {?}
         */
        function () {
            if (this.active - 1 < 0) {
                return;
            }
            --this.active;
            this.showItem();
        };
        /**
         * @return {?}
         */
        OnboardingService.prototype.done = /**
         * @return {?}
         */
        function () {
            this.destroy();
        };
        /**
         * @return {?}
         */
        OnboardingService.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy();
        };
        OnboardingService.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        OnboardingService.ctorParameters = function () { return [
            { type: theme.DelonLocaleService },
            { type: core.ApplicationRef },
            { type: core.ComponentFactoryResolver },
            { type: core.Injector },
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
        ]; };
        /** @nocollapse */ OnboardingService.ɵprov = core.ɵɵdefineInjectable({ factory: function OnboardingService_Factory() { return new OnboardingService(core.ɵɵinject(theme.DelonLocaleService), core.ɵɵinject(core.ApplicationRef), core.ɵɵinject(core.ComponentFactoryResolver), core.ɵɵinject(core.INJECTOR), core.ɵɵinject(common.DOCUMENT)); }, token: OnboardingService, providedIn: "root" });
        return OnboardingService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        OnboardingService.prototype.compRef;
        /**
         * @type {?}
         * @private
         */
        OnboardingService.prototype.op$;
        /**
         * @type {?}
         * @private
         */
        OnboardingService.prototype.config;
        /**
         * @type {?}
         * @private
         */
        OnboardingService.prototype.active;
        /**
         * @type {?}
         * @private
         */
        OnboardingService.prototype.i18n;
        /**
         * @type {?}
         * @private
         */
        OnboardingService.prototype.appRef;
        /**
         * @type {?}
         * @private
         */
        OnboardingService.prototype.resolver;
        /**
         * @type {?}
         * @private
         */
        OnboardingService.prototype.injector;
        /**
         * @type {?}
         * @private
         */
        OnboardingService.prototype.doc;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: onboarding.types.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function OnboardingConfig() { }
    if (false) {
        /**
         * Onboarding items
         * @type {?|undefined}
         */
        OnboardingConfig.prototype.items;
        /**
         * Whether to show mask or not, Default: `true`
         * @type {?|undefined}
         */
        OnboardingConfig.prototype.mask;
        /**
         * Clicking on the mask (area outside the onboarding) to close the onboarding or not, Default: `true`
         * @type {?|undefined}
         */
        OnboardingConfig.prototype.maskClosable;
        /**
         * Whether to animate, Default: `false`
         * @type {?|undefined}
         */
        OnboardingConfig.prototype.animation;
        /**
         * Whether to show total, Default: `true`
         * @type {?|undefined}
         */
        OnboardingConfig.prototype.showTotal;
    }
    /**
     * @record
     */
    function OnboardingItem() { }
    if (false) {
        /**
         * The CSS selector, which identifies the html element you want to describe
         * @type {?}
         */
        OnboardingItem.prototype.selectors;
        /**
         * Positioning of the selector element, relative to the contents of the children, Default: `bottomLeft`
         * @type {?|undefined}
         */
        OnboardingItem.prototype.position;
        /**
         * Class name of the panel
         * @type {?|undefined}
         */
        OnboardingItem.prototype.className;
        /**
         * Width of the panel
         * @type {?|undefined}
         */
        OnboardingItem.prototype.width;
        /**
         * Title text of the panel
         * @type {?|undefined}
         */
        OnboardingItem.prototype.title;
        /**
         * Content text of the panel
         * @type {?|undefined}
         */
        OnboardingItem.prototype.content;
        /**
         * Skip button of the panel
         * - `null` Don't show
         * @type {?|undefined}
         */
        OnboardingItem.prototype.skip;
        /**
         * Prev button of the panel
         * - `null` Don't show
         * @type {?|undefined}
         */
        OnboardingItem.prototype.prev;
        /**
         * Next button of the panel
         * - `null` Don't show
         * @type {?|undefined}
         */
        OnboardingItem.prototype.next;
        /**
         * Done button of the panel
         * - `null` Don't show
         * @type {?|undefined}
         */
        OnboardingItem.prototype.done;
    }

    exports.OnboardingModule = OnboardingModule;
    exports.OnboardingService = OnboardingService;
    exports.ɵOnboardingComponent = OnboardingComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=onboarding.umd.js.map
