/**
 * @license ng-alain(cipchk@qq.com) v8.9.0
 * (c) 2019 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/util'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@delon/chart/mini-bar', ['exports', '@angular/core', '@delon/util', '@angular/common'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart['mini-bar'] = {}), global.ng.core, global.delon.util, global.ng.common));
}(this, (function (exports, core, util, common) { 'use strict';

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
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
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

    /**
     * @fileoverview added by tsickle
     * Generated from: mini-bar.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function G2MiniBarData() { }
    if (false) {
        /** @type {?} */
        G2MiniBarData.prototype.x;
        /** @type {?} */
        G2MiniBarData.prototype.y;
        /* Skipping unhandled member: [key: string]: any;*/
    }
    var G2MiniBarComponent = /** @class */ (function () {
        // #endregion
        function G2MiniBarComponent(el, ngZone) {
            this.el = el;
            this.ngZone = ngZone;
            // #region fields
            this.delay = 0;
            this.color = '#1890FF';
            this.height = 0;
            this.borderWidth = 5;
            this.padding = [8, 8, 8, 8];
            this.data = [];
            this.yTooltipSuffix = '';
            this.tooltipType = 'default';
        }
        /**
         * @private
         * @return {?}
         */
        G2MiniBarComponent.prototype.install = /**
         * @private
         * @return {?}
         */
        function () {
            var _a = this, el = _a.el, height = _a.height, padding = _a.padding, yTooltipSuffix = _a.yTooltipSuffix, tooltipType = _a.tooltipType;
            /** @type {?} */
            var chart = (this.chart = new G2.Chart({
                container: el.nativeElement,
                forceFit: true,
                height: height,
                padding: padding,
            }));
            chart.source([], {
                x: {
                    type: 'cat',
                },
                y: {
                    min: 0,
                },
            });
            chart.legend(false);
            chart.axis(false);
            chart.tooltip({
                type: tooltipType === 'mini' ? 'mini' : null,
                showTitle: false,
                hideMarkders: false,
                crosshairs: false,
                'g2-tooltip': { padding: 4 },
                'g2-tooltip-list-item': { margin: "0px 4px" },
            });
            chart
                .interval()
                .position('x*y')
                .tooltip('x*y', (/**
             * @param {?} x
             * @param {?} y
             * @return {?}
             */
            function (x, y) { return ({ name: x, value: y + yTooltipSuffix }); }));
            chart.render();
            this.attachChart();
        };
        /**
         * @private
         * @return {?}
         */
        G2MiniBarComponent.prototype.attachChart = /**
         * @private
         * @return {?}
         */
        function () {
            var _a = this, chart = _a.chart, height = _a.height, padding = _a.padding, data = _a.data, color = _a.color, borderWidth = _a.borderWidth;
            if (!chart || !data || data.length <= 0)
                return;
            chart
                .get('geoms')[0]
                .size(borderWidth)
                .color(color);
            chart.set('height', height);
            chart.set('padding', padding);
            chart.changeData(data);
        };
        /**
         * @return {?}
         */
        G2MiniBarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () { return setTimeout((/**
             * @return {?}
             */
            function () { return _this.install(); }), _this.delay); }));
        };
        /**
         * @return {?}
         */
        G2MiniBarComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () { return _this.attachChart(); }));
        };
        /**
         * @return {?}
         */
        G2MiniBarComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.chart) {
                this.ngZone.runOutsideAngular((/**
                 * @return {?}
                 */
                function () { return _this.chart.destroy(); }));
            }
        };
        G2MiniBarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'g2-mini-bar',
                        exportAs: 'g2MiniBar',
                        template: "",
                        host: {
                            '[style.height.px]': 'height',
                        },
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        G2MiniBarComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.NgZone }
        ]; };
        G2MiniBarComponent.propDecorators = {
            delay: [{ type: core.Input }],
            color: [{ type: core.Input }],
            height: [{ type: core.Input }],
            borderWidth: [{ type: core.Input }],
            padding: [{ type: core.Input }],
            data: [{ type: core.Input }],
            yTooltipSuffix: [{ type: core.Input }],
            tooltipType: [{ type: core.Input }]
        };
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], G2MiniBarComponent.prototype, "delay", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], G2MiniBarComponent.prototype, "height", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], G2MiniBarComponent.prototype, "borderWidth", void 0);
        return G2MiniBarComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        G2MiniBarComponent.prototype.chart;
        /** @type {?} */
        G2MiniBarComponent.prototype.delay;
        /** @type {?} */
        G2MiniBarComponent.prototype.color;
        /** @type {?} */
        G2MiniBarComponent.prototype.height;
        /** @type {?} */
        G2MiniBarComponent.prototype.borderWidth;
        /** @type {?} */
        G2MiniBarComponent.prototype.padding;
        /** @type {?} */
        G2MiniBarComponent.prototype.data;
        /** @type {?} */
        G2MiniBarComponent.prototype.yTooltipSuffix;
        /** @type {?} */
        G2MiniBarComponent.prototype.tooltipType;
        /**
         * @type {?}
         * @private
         */
        G2MiniBarComponent.prototype.el;
        /**
         * @type {?}
         * @private
         */
        G2MiniBarComponent.prototype.ngZone;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: mini-bar.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [G2MiniBarComponent];
    var G2MiniBarModule = /** @class */ (function () {
        function G2MiniBarModule() {
        }
        G2MiniBarModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, util.DelonUtilModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return G2MiniBarModule;
    }());

    exports.G2MiniBarComponent = G2MiniBarComponent;
    exports.G2MiniBarModule = G2MiniBarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=mini-bar.umd.js.map
