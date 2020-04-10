/**
 * @license ng-alain(cipchk@qq.com) v9.0.0-alpha.1
 * (c) 2019 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/util'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('ng-zorro-antd/divider')) :
    typeof define === 'function' && define.amd ? define('@delon/chart/pie', ['exports', '@angular/core', '@delon/util', 'rxjs', 'rxjs/operators', '@angular/common', 'ng-zorro-antd/divider'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart.pie = {}), global.ng.core, global.delon.util, global.rxjs, global.rxjs.operators, global.ng.common, global['ng-zorro-antd/divider']));
}(this, (function (exports, core, util, rxjs, operators, common, divider) { 'use strict';

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
     * Generated from: pie.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function G2PieData() { }
    if (false) {
        /** @type {?} */
        G2PieData.prototype.x;
        /** @type {?} */
        G2PieData.prototype.y;
        /* Skipping unhandled member: [key: string]: any;*/
    }
    var G2PieComponent = /** @class */ (function () {
        // #endregion
        function G2PieComponent(el, rend, ngZone, cdr) {
            this.el = el;
            this.rend = rend;
            this.ngZone = ngZone;
            this.cdr = cdr;
            this.legendData = [];
            // #region fields
            this.delay = 0;
            this.animate = true;
            this.color = 'rgba(24, 144, 255, 0.85)';
            this.height = 0;
            this.hasLegend = false;
            this.inner = 0.75;
            this.padding = [12, 0, 12, 0];
            this.tooltip = true;
            this.lineWidth = 0;
            this.select = true;
            this.data = [];
        }
        /**
         * @private
         * @return {?}
         */
        G2PieComponent.prototype.setCls = /**
         * @private
         * @return {?}
         */
        function () {
            var _a = this, el = _a.el, rend = _a.rend, hasLegend = _a.hasLegend, isPercent = _a.isPercent;
            /** @type {?} */
            var ne = (/** @type {?} */ (el.nativeElement));
            util.updateHostClass(ne, rend, {
                'g2-pie': true,
                'g2-pie__legend-has': hasLegend,
                'g2-pie__legend-block': hasLegend && ne.clientWidth <= 380,
                'g2-pie__mini': isPercent,
            }, true);
        };
        /**
         * @private
         * @return {?}
         */
        G2PieComponent.prototype.fixData = /**
         * @private
         * @return {?}
         */
        function () {
            var _a = this, percent = _a.percent, color = _a.color;
            this.isPercent = percent != null;
            if (this.isPercent) {
                this.select = false;
                this.tooltip = false;
                this.percentColor = (/**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) { return (value === '占比' ? color || 'rgba(24, 144, 255, 0.85)' : '#F0F2F5'); });
                this.data = [
                    {
                        x: '占比',
                        y: percent,
                    },
                    {
                        x: '反比',
                        y: 100 - percent,
                    },
                ];
            }
        };
        /**
         * @private
         * @return {?}
         */
        G2PieComponent.prototype.install = /**
         * @private
         * @return {?}
         */
        function () {
            this.setCls();
            var _a = this, node = _a.node, height = _a.height, padding = _a.padding, animate = _a.animate, tooltip = _a.tooltip, inner = _a.inner, hasLegend = _a.hasLegend;
            /** @type {?} */
            var chart = (this.chart = new G2.Chart({
                container: node.nativeElement,
                forceFit: true,
                height: height,
                padding: padding,
                animate: animate,
            }));
            if (!tooltip) {
                chart.tooltip(false);
            }
            else {
                chart.tooltip({
                    showTitle: false,
                    itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value} %</li>',
                });
            }
            chart.axis(false);
            chart.legend(false);
            chart.coord('theta', { innerRadius: inner });
            chart.filter('x', (/**
             * @param {?} _val
             * @param {?} item
             * @return {?}
             */
            function (_val, item) { return item.checked !== false; }));
            chart
                .intervalStack()
                .position('y')
                .tooltip('x*percent', (/**
             * @param {?} name
             * @param {?} p
             * @return {?}
             */
            function (name, p) { return ({
                name: name,
                // 由于 hasLegend 会优先处理为百分比格式，因此无需要在 tooltip 中重新转换
                value: hasLegend ? p : (p * 100).toFixed(2),
            }); }))
                .select(this.select);
            chart.render();
            this.attachChart();
        };
        /**
         * @private
         * @return {?}
         */
        G2PieComponent.prototype.attachChart = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            var _a = this, chart = _a.chart, height = _a.height, padding = _a.padding, animate = _a.animate, data = _a.data, lineWidth = _a.lineWidth, isPercent = _a.isPercent, percentColor = _a.percentColor, colors = _a.colors;
            if (!chart)
                return;
            chart.set('height', height);
            chart.set('padding', padding);
            chart.set('animate', animate);
            chart
                .get('geoms')[0]
                .style({ lineWidth: lineWidth, stroke: '#fff' })
                .color('x', isPercent ? percentColor : colors);
            /** @type {?} */
            var dv = new DataSet.DataView();
            dv.source(data).transform({
                type: 'percent',
                field: 'y',
                dimension: 'x',
                as: 'percent',
            });
            chart.source(dv, {
                x: {
                    type: 'cat',
                    range: [0, 1],
                },
            });
            chart.repaint();
            this.ngZone.run((/**
             * @return {?}
             */
            function () { return _this.genLegend(); }));
        };
        /**
         * @private
         * @return {?}
         */
        G2PieComponent.prototype.genLegend = /**
         * @private
         * @return {?}
         */
        function () {
            var _a = this, hasLegend = _a.hasLegend, isPercent = _a.isPercent, cdr = _a.cdr, chart = _a.chart;
            if (!hasLegend || isPercent)
                return;
            this.legendData = chart
                .get('geoms')[0]
                .get('dataArray')
                .map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                /** @type {?} */
                var origin = item[0]._origin;
                origin.color = item[0].color;
                origin.checked = true;
                origin.percent = (origin.percent * 100).toFixed(2);
                return origin;
            }));
            cdr.detectChanges();
        };
        /**
         * @param {?} i
         * @return {?}
         */
        G2PieComponent.prototype._click = /**
         * @param {?} i
         * @return {?}
         */
        function (i) {
            var _a = this, legendData = _a.legendData, chart = _a.chart;
            legendData[i].checked = !legendData[i].checked;
            chart.repaint();
        };
        /**
         * @private
         * @return {?}
         */
        G2PieComponent.prototype.installResizeEvent = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.resize$ || !this.hasLegend)
                return;
            this.resize$ = rxjs.fromEvent(window, 'resize')
                .pipe(operators.debounceTime(200))
                .subscribe((/**
             * @return {?}
             */
            function () { return _this.setCls(); }));
        };
        /**
         * @return {?}
         */
        G2PieComponent.prototype.ngOnInit = /**
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
        G2PieComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.fixData();
            this.setCls();
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () { return _this.attachChart(); }));
            this.installResizeEvent();
        };
        /**
         * @return {?}
         */
        G2PieComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.resize$) {
                this.resize$.unsubscribe();
            }
            if (this.chart) {
                this.ngZone.runOutsideAngular((/**
                 * @return {?}
                 */
                function () { return _this.chart.destroy(); }));
            }
        };
        G2PieComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'g2-pie',
                        exportAs: 'g2Pie',
                        template: "<div class=\"g2-pie__chart\">\n  <div #container></div>\n  <div *ngIf=\"subTitle || total\"\n       class=\"g2-pie__total\">\n    <h4 *ngIf=\"subTitle\"\n        class=\"g2-pie__total-title\">\n      <ng-container *stringTemplateOutlet=\"subTitle\">\n        <div [innerHTML]=\"subTitle\"></div>\n      </ng-container>\n    </h4>\n    <div *ngIf=\"total\"\n         class=\"g2-pie__total-stat\">\n      <ng-container *stringTemplateOutlet=\"total\">\n        <div [innerHTML]=\"total\"></div>\n      </ng-container>\n    </div>\n  </div>\n</div>\n<ul *ngIf=\"hasLegend && legendData?.length\"\n    class=\"g2-pie__legend\">\n  <li *ngFor=\"let item of legendData; let index = index\"\n      (click)=\"_click(index)\"\n      class=\"g2-pie__legend-item\">\n    <span class=\"g2-pie__legend-dot\"\n          [ngStyle]=\"{'background-color': !item.checked ? '#aaa' : item.color}\"></span>\n    <span class=\"g2-pie__legend-title\">{{item.x}}</span>\n    <nz-divider nzType=\"vertical\"></nz-divider>\n    <span class=\"g2-pie__legend-percent\">{{item.percent}}%</span>\n    <span class=\"g2-pie__legend-value\"\n          [innerHTML]=\"valueFormat ? valueFormat(item.y) : item.y\"></span>\n  </li>\n</ul>\n",
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        G2PieComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: core.NgZone },
            { type: core.ChangeDetectorRef }
        ]; };
        G2PieComponent.propDecorators = {
            node: [{ type: core.ViewChild, args: ['container', { static: true },] }],
            delay: [{ type: core.Input }],
            animate: [{ type: core.Input }],
            color: [{ type: core.Input }],
            subTitle: [{ type: core.Input }],
            total: [{ type: core.Input }],
            height: [{ type: core.Input }],
            hasLegend: [{ type: core.Input }],
            inner: [{ type: core.Input }],
            padding: [{ type: core.Input }],
            percent: [{ type: core.Input }],
            tooltip: [{ type: core.Input }],
            lineWidth: [{ type: core.Input }],
            select: [{ type: core.Input }],
            valueFormat: [{ type: core.Input }],
            data: [{ type: core.Input }],
            colors: [{ type: core.Input }]
        };
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], G2PieComponent.prototype, "delay", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], G2PieComponent.prototype, "animate", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], G2PieComponent.prototype, "height", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], G2PieComponent.prototype, "hasLegend", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Number)
        ], G2PieComponent.prototype, "percent", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], G2PieComponent.prototype, "tooltip", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], G2PieComponent.prototype, "lineWidth", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], G2PieComponent.prototype, "select", void 0);
        return G2PieComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        G2PieComponent.prototype.resize$;
        /**
         * @type {?}
         * @private
         */
        G2PieComponent.prototype.node;
        /**
         * @type {?}
         * @private
         */
        G2PieComponent.prototype.chart;
        /**
         * @type {?}
         * @private
         */
        G2PieComponent.prototype.isPercent;
        /**
         * @type {?}
         * @private
         */
        G2PieComponent.prototype.percentColor;
        /** @type {?} */
        G2PieComponent.prototype.legendData;
        /** @type {?} */
        G2PieComponent.prototype.delay;
        /** @type {?} */
        G2PieComponent.prototype.animate;
        /** @type {?} */
        G2PieComponent.prototype.color;
        /** @type {?} */
        G2PieComponent.prototype.subTitle;
        /** @type {?} */
        G2PieComponent.prototype.total;
        /** @type {?} */
        G2PieComponent.prototype.height;
        /** @type {?} */
        G2PieComponent.prototype.hasLegend;
        /** @type {?} */
        G2PieComponent.prototype.inner;
        /** @type {?} */
        G2PieComponent.prototype.padding;
        /** @type {?} */
        G2PieComponent.prototype.percent;
        /** @type {?} */
        G2PieComponent.prototype.tooltip;
        /** @type {?} */
        G2PieComponent.prototype.lineWidth;
        /** @type {?} */
        G2PieComponent.prototype.select;
        /** @type {?} */
        G2PieComponent.prototype.valueFormat;
        /** @type {?} */
        G2PieComponent.prototype.data;
        /** @type {?} */
        G2PieComponent.prototype.colors;
        /**
         * @type {?}
         * @private
         */
        G2PieComponent.prototype.el;
        /**
         * @type {?}
         * @private
         */
        G2PieComponent.prototype.rend;
        /**
         * @type {?}
         * @private
         */
        G2PieComponent.prototype.ngZone;
        /**
         * @type {?}
         * @private
         */
        G2PieComponent.prototype.cdr;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: pie.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [G2PieComponent];
    var G2PieModule = /** @class */ (function () {
        function G2PieModule() {
        }
        G2PieModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, util.DelonUtilModule, divider.NzDividerModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return G2PieModule;
    }());

    exports.G2PieComponent = G2PieComponent;
    exports.G2PieModule = G2PieModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pie.umd.js.map
