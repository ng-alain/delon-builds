/**
 * @license ng-alain(cipchk@qq.com) v11.0.0-rc.0
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/platform'), require('@angular/core'), require('@antv/g2'), require('@delon/util'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@delon/chart/single-bar', ['exports', '@angular/cdk/platform', '@angular/core', '@antv/g2', '@delon/util', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart['single-bar'] = {}), global.ng.cdk.platform, global.ng.core, global.g2, global.delon.util, global.ng.common));
}(this, (function (exports, platform, core, g2, util, common) { 'use strict';

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
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
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
     * @fileoverview added by tsickle
     * Generated from: single-bar.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var G2SingleBarComponent = /** @class */ (function () {
        // #endregion
        /**
         * @param {?} el
         * @param {?} ngZone
         * @param {?} configSrv
         * @param {?} platform
         */
        function G2SingleBarComponent(el, ngZone, configSrv, platform) {
            this.el = el;
            this.ngZone = ngZone;
            this.platform = platform;
            // #region fields
            this.delay = 0;
            this.plusColor = '#40a9ff';
            this.minusColor = '#ff4d4f';
            this.height = 60;
            this.barSize = 30;
            this.min = 0;
            this.max = 100;
            this.value = 0;
            this.line = false;
            this.padding = 0;
            this.textStyle = { fontSize: 12, color: '#595959' };
            configSrv.attachKey(this, 'chart', 'theme');
        }
        Object.defineProperty(G2SingleBarComponent.prototype, "chart", {
            /**
             * @return {?}
             */
            get: function () {
                return this._chart;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @private
         * @return {?}
         */
        G2SingleBarComponent.prototype.install = function () {
            var _a = this, el = _a.el, height = _a.height, padding = _a.padding, textStyle = _a.textStyle, line = _a.line, format = _a.format, theme = _a.theme;
            /** @type {?} */
            var chart = (this._chart = new g2.Chart({
                container: el.nativeElement,
                autoFit: true,
                height: height,
                padding: padding,
                theme: theme,
            }));
            chart.legend(false);
            chart.axis(false);
            chart.tooltip(false);
            chart.coordinate().transpose();
            chart
                .interval()
                .position('1*value')
                .label('value', ( /**
         * @return {?}
         */function () { return ({
                formatter: format,
                style: Object.assign({}, textStyle),
            }); }));
            if (line) {
                chart.annotation().line({
                    start: ['50%', '0%'],
                    end: ['50%', '100%'],
                    style: {
                        stroke: '#e8e8e8',
                        lineDash: [0, 0],
                    },
                });
            }
            chart.render();
            this.attachChart();
        };
        /**
         * @private
         * @return {?}
         */
        G2SingleBarComponent.prototype.attachChart = function () {
            var _a = this, _chart = _a._chart, height = _a.height, padding = _a.padding, value = _a.value, min = _a.min, max = _a.max, plusColor = _a.plusColor, minusColor = _a.minusColor, barSize = _a.barSize;
            if (!_chart)
                return;
            _chart.scale({ value: { max: max, min: min } });
            _chart.height = height;
            _chart.padding = padding;
            _chart.geometries[0].color('value', ( /**
             * @param {?} val
             * @return {?}
             */function (val) { return (val > 0 ? plusColor : minusColor); })).size(barSize);
            _chart.changeData([{ value: value }]);
            _chart.render();
        };
        /**
         * @return {?}
         */
        G2SingleBarComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (!this.platform.isBrowser) {
                return;
            }
            this.ngZone.runOutsideAngular(( /**
             * @return {?}
             */function () { return setTimeout(( /**
             * @return {?}
             */function () { return _this.install(); }), _this.delay); }));
        };
        /**
         * @return {?}
         */
        G2SingleBarComponent.prototype.ngOnChanges = function () {
            var _this = this;
            this.ngZone.runOutsideAngular(( /**
             * @return {?}
             */function () { return _this.attachChart(); }));
        };
        /**
         * @return {?}
         */
        G2SingleBarComponent.prototype.ngOnDestroy = function () {
            var _this = this;
            if (this._chart) {
                this.ngZone.runOutsideAngular(( /**
                 * @return {?}
                 */function () { return _this._chart.destroy(); }));
            }
        };
        return G2SingleBarComponent;
    }());
    G2SingleBarComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'g2-single-bar',
                    exportAs: 'g2SingleBar',
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
    G2SingleBarComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.NgZone },
        { type: util.AlainConfigService },
        { type: platform.Platform }
    ]; };
    G2SingleBarComponent.propDecorators = {
        delay: [{ type: core.Input }],
        plusColor: [{ type: core.Input }],
        minusColor: [{ type: core.Input }],
        height: [{ type: core.Input }],
        barSize: [{ type: core.Input }],
        min: [{ type: core.Input }],
        max: [{ type: core.Input }],
        value: [{ type: core.Input }],
        line: [{ type: core.Input }],
        format: [{ type: core.Input }],
        padding: [{ type: core.Input }],
        textStyle: [{ type: core.Input }],
        theme: [{ type: core.Input }]
    };
    __decorate([
        util.InputNumber(),
        __metadata("design:type", Object)
    ], G2SingleBarComponent.prototype, "delay", void 0);
    __decorate([
        util.InputNumber(),
        __metadata("design:type", Object)
    ], G2SingleBarComponent.prototype, "height", void 0);
    __decorate([
        util.InputNumber(),
        __metadata("design:type", Object)
    ], G2SingleBarComponent.prototype, "barSize", void 0);
    __decorate([
        util.InputNumber(),
        __metadata("design:type", Object)
    ], G2SingleBarComponent.prototype, "min", void 0);
    __decorate([
        util.InputNumber(),
        __metadata("design:type", Object)
    ], G2SingleBarComponent.prototype, "max", void 0);
    __decorate([
        util.InputNumber(),
        __metadata("design:type", Object)
    ], G2SingleBarComponent.prototype, "value", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], G2SingleBarComponent.prototype, "line", void 0);
    if (false) {
        /** @type {?} */
        G2SingleBarComponent.ngAcceptInputType_delay;
        /** @type {?} */
        G2SingleBarComponent.ngAcceptInputType_height;
        /** @type {?} */
        G2SingleBarComponent.ngAcceptInputType_barSize;
        /** @type {?} */
        G2SingleBarComponent.ngAcceptInputType_min;
        /** @type {?} */
        G2SingleBarComponent.ngAcceptInputType_max;
        /** @type {?} */
        G2SingleBarComponent.ngAcceptInputType_value;
        /** @type {?} */
        G2SingleBarComponent.ngAcceptInputType_line;
        /**
         * @type {?}
         * @private
         */
        G2SingleBarComponent.prototype._chart;
        /** @type {?} */
        G2SingleBarComponent.prototype.delay;
        /** @type {?} */
        G2SingleBarComponent.prototype.plusColor;
        /** @type {?} */
        G2SingleBarComponent.prototype.minusColor;
        /** @type {?} */
        G2SingleBarComponent.prototype.height;
        /** @type {?} */
        G2SingleBarComponent.prototype.barSize;
        /** @type {?} */
        G2SingleBarComponent.prototype.min;
        /** @type {?} */
        G2SingleBarComponent.prototype.max;
        /** @type {?} */
        G2SingleBarComponent.prototype.value;
        /** @type {?} */
        G2SingleBarComponent.prototype.line;
        /** @type {?} */
        G2SingleBarComponent.prototype.format;
        /** @type {?} */
        G2SingleBarComponent.prototype.padding;
        /** @type {?} */
        G2SingleBarComponent.prototype.textStyle;
        /** @type {?} */
        G2SingleBarComponent.prototype.theme;
        /**
         * @type {?}
         * @private
         */
        G2SingleBarComponent.prototype.el;
        /**
         * @type {?}
         * @private
         */
        G2SingleBarComponent.prototype.ngZone;
        /**
         * @type {?}
         * @private
         */
        G2SingleBarComponent.prototype.platform;
    }

    /** @type {?} */
    var COMPONENTS = [G2SingleBarComponent];
    var G2SingleBarModule = /** @class */ (function () {
        function G2SingleBarModule() {
        }
        return G2SingleBarModule;
    }());
    G2SingleBarModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule, util.DelonUtilModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: public_api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: single-bar.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.G2SingleBarComponent = G2SingleBarComponent;
    exports.G2SingleBarModule = G2SingleBarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=single-bar.umd.js.map
