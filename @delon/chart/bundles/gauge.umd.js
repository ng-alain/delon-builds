/**
 * @license ng-alain(cipchk@qq.com) v9.4.0
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/platform'), require('@angular/core'), require('@antv/g2'), require('@delon/util'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@delon/chart/gauge', ['exports', '@angular/cdk/platform', '@angular/core', '@antv/g2', '@delon/util', '@angular/common'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart.gauge = {}), global.ng.cdk.platform, global.ng.core, global.g2, global.delon.util, global.ng.common));
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
     * Generated from: gauge.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var G2GaugeComponent = /** @class */ (function () {
        // #endregion
        function G2GaugeComponent(el, ngZone, configSrv, platform) {
            this.el = el;
            this.ngZone = ngZone;
            this.platform = platform;
            // #region fields
            this.delay = 0;
            this.color = '#2f9cff';
            this.padding = [10, 10, 30, 10];
            configSrv.attachKey(this, 'chart', 'theme');
        }
        /**
         * @private
         * @return {?}
         */
        G2GaugeComponent.prototype.install = /**
         * @private
         * @return {?}
         */
        function () {
            // 自定义Shape 部分
            g2.registerShape('point', 'pointer', {
                draw: /**
                 * @param {?} cfg
                 * @param {?} container
                 * @return {?}
                 */
                function (cfg, container) {
                    /** @type {?} */
                    var group = container.addGroup({});
                    // 获取极坐标系下画布中心点
                    /** @type {?} */
                    var center = ((/** @type {?} */ (this))).parsePoint({ x: 0, y: 0 });
                    // 绘制指针
                    group.addShape('line', {
                        attrs: {
                            x1: center.x,
                            y1: center.y,
                            x2: cfg.x,
                            y2: cfg.y,
                            stroke: cfg.color,
                            lineWidth: 2.5,
                            lineCap: 'round',
                        },
                    });
                    group.addShape('circle', {
                        attrs: {
                            x: center.x,
                            y: center.y,
                            r: 5.75,
                            stroke: cfg.color,
                            lineWidth: 2,
                            fill: '#fff',
                        },
                    });
                    return group;
                },
            });
            var _a = this, el = _a.el, height = _a.height, padding = _a.padding, format = _a.format, theme = _a.theme;
            /** @type {?} */
            var chart = (this.chart = new g2.Chart({
                container: el.nativeElement,
                autoFit: true,
                height: height,
                padding: padding,
                theme: theme,
            }));
            chart.legend(false);
            chart.animate(false);
            chart.tooltip(false);
            chart.coordinate('polar', {
                startAngle: (-9 / 8) * Math.PI,
                endAngle: (1 / 8) * Math.PI,
                radius: 0.75,
            });
            chart.scale('value', {
                min: 0,
                max: 100,
                nice: true,
                tickCount: 6,
            });
            chart.axis('1', false);
            chart.axis('value', {
                line: null,
                label: {
                    offset: -14,
                    formatter: format,
                },
                tickLine: null,
                grid: null,
            });
            chart.point().position('value*1').shape('pointer');
            this.attachChart();
        };
        /**
         * @private
         * @return {?}
         */
        G2GaugeComponent.prototype.attachChart = /**
         * @private
         * @return {?}
         */
        function () {
            var _a = this, chart = _a.chart, percent = _a.percent, color = _a.color, bgColor = _a.bgColor, title = _a.title;
            if (!chart)
                return;
            /** @type {?} */
            var data = [{ name: title, value: percent }];
            /** @type {?} */
            var val = data[0].value;
            chart.annotation().clear(true);
            chart.geometries[0].color(color);
            // 绘制仪表盘背景
            chart.annotation().arc({
                top: false,
                start: [0, 0.95],
                end: [100, 0.95],
                style: {
                    stroke: bgColor,
                    lineWidth: 12,
                    lineDash: null,
                },
            });
            chart.annotation().arc({
                start: [0, 0.95],
                end: [data[0].value, 0.95],
                style: {
                    stroke: color,
                    lineWidth: 12,
                    lineDash: null,
                },
            });
            chart.annotation().text({
                position: ['50%', '85%'],
                content: title,
                style: {
                    fontSize: 12,
                    fill: 'rgba(0, 0, 0, 0.43)',
                    textAlign: 'center',
                },
            });
            chart.annotation().text({
                position: ['50%', '90%'],
                content: val + " %",
                style: {
                    fontSize: 20,
                    fill: 'rgba(0, 0, 0, 0.85)',
                    textAlign: 'center',
                },
                offsetY: 15,
            });
            chart.changeData(data);
        };
        /**
         * @return {?}
         */
        G2GaugeComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (!this.platform.isBrowser) {
                return;
            }
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
        G2GaugeComponent.prototype.ngOnChanges = /**
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
        G2GaugeComponent.prototype.ngOnDestroy = /**
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
        G2GaugeComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'g2-gauge',
                        exportAs: 'g2Gauge',
                        template: "",
                        host: {
                            '[class.g2-gauge]': 'true',
                        },
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        G2GaugeComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.NgZone },
            { type: util.AlainConfigService },
            { type: platform.Platform }
        ]; };
        G2GaugeComponent.propDecorators = {
            delay: [{ type: core.Input }],
            title: [{ type: core.Input }],
            height: [{ type: core.Input }],
            color: [{ type: core.Input }],
            bgColor: [{ type: core.Input }],
            format: [{ type: core.Input }],
            percent: [{ type: core.Input }],
            padding: [{ type: core.Input }],
            theme: [{ type: core.Input }]
        };
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], G2GaugeComponent.prototype, "delay", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Number)
        ], G2GaugeComponent.prototype, "height", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Number)
        ], G2GaugeComponent.prototype, "percent", void 0);
        return G2GaugeComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        G2GaugeComponent.prototype.chart;
        /** @type {?} */
        G2GaugeComponent.prototype.delay;
        /** @type {?} */
        G2GaugeComponent.prototype.title;
        /** @type {?} */
        G2GaugeComponent.prototype.height;
        /** @type {?} */
        G2GaugeComponent.prototype.color;
        /** @type {?} */
        G2GaugeComponent.prototype.bgColor;
        /** @type {?} */
        G2GaugeComponent.prototype.format;
        /** @type {?} */
        G2GaugeComponent.prototype.percent;
        /** @type {?} */
        G2GaugeComponent.prototype.padding;
        /** @type {?} */
        G2GaugeComponent.prototype.theme;
        /**
         * @type {?}
         * @private
         */
        G2GaugeComponent.prototype.el;
        /**
         * @type {?}
         * @private
         */
        G2GaugeComponent.prototype.ngZone;
        /**
         * @type {?}
         * @private
         */
        G2GaugeComponent.prototype.platform;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: gauge.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [G2GaugeComponent];
    var G2GaugeModule = /** @class */ (function () {
        function G2GaugeModule() {
        }
        G2GaugeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, util.DelonUtilModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return G2GaugeModule;
    }());

    exports.G2GaugeComponent = G2GaugeComponent;
    exports.G2GaugeModule = G2GaugeModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=gauge.umd.js.map
