/**
 * @license ng-alain(cipchk@qq.com) v11.3.1
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/chart/core'), require('@delon/util/decorator'), require('@angular/common'), require('ng-zorro-antd/core/outlet'), require('ng-zorro-antd/grid'), require('ng-zorro-antd/skeleton')) :
    typeof define === 'function' && define.amd ? define('@delon/chart/radar', ['exports', '@angular/core', '@delon/chart/core', '@delon/util/decorator', '@angular/common', 'ng-zorro-antd/core/outlet', 'ng-zorro-antd/grid', 'ng-zorro-antd/skeleton'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart.radar = {}), global.ng.core, global.delon.chart.core, global.decorator, global.ng.common, global['ng-zorro-antd/core/outlet'], global['ng-zorro-antd/grid'], global.skeleton));
}(this, (function (exports, core, core$1, decorator, common, outlet, grid, skeleton) { 'use strict';

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
     * @record
     */
    function G2RadarData() { }
    if (false) {
        /** @type {?} */
        G2RadarData.prototype.name;
        /** @type {?} */
        G2RadarData.prototype.label;
        /** @type {?} */
        G2RadarData.prototype.value;
        /* Skipping unhandled member: [key: string]: any;*/
    }
    /**
     * @record
     */
    function G2RadarClickItem() { }
    if (false) {
        /** @type {?} */
        G2RadarClickItem.prototype.item;
        /** @type {?} */
        G2RadarClickItem.prototype.ev;
    }
    var G2RadarComponent = /** @class */ (function (_super) {
        __extends(G2RadarComponent, _super);
        function G2RadarComponent() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.legendData = [];
            _this.height = 0;
            _this.padding = [44, 30, 16, 30];
            _this.hasLegend = true;
            _this.tickCount = 4;
            _this.data = [];
            _this.colors = ['#1890FF', '#FACC14', '#2FC25B', '#8543E0', '#F04864', '#13C2C2', '#fa8c16', '#a0d911'];
            _this.clickItem = new core.EventEmitter();
            return _this;
        }
        // #endregion
        /**
         * @private
         * @return {?}
         */
        G2RadarComponent.prototype.getHeight = function () {
            return this.height - (this.hasLegend ? 80 : 22);
        };
        /**
         * @return {?}
         */
        G2RadarComponent.prototype.install = function () {
            var _this = this;
            var _b = this, node = _b.node, padding = _b.padding, theme = _b.theme;
            /** @type {?} */
            var chart = (this._chart = new (( /** @type {?} */(window))).G2.Chart({
                container: node.nativeElement,
                autoFit: true,
                height: this.getHeight(),
                padding: padding,
                theme: theme,
            }));
            chart.coordinate('polar');
            chart.legend(false);
            chart.axis('label', {
                line: null,
                label: {
                    offset: 8,
                },
                grid: {
                    line: {
                        style: {
                            stroke: '#e9e9e9',
                            lineWidth: 1,
                            lineDash: [0, 0],
                        },
                    },
                },
            });
            chart.axis('value', {
                grid: {
                    line: {
                        type: 'polygon',
                        style: {
                            stroke: '#e9e9e9',
                            lineWidth: 1,
                            lineDash: [0, 0],
                        },
                    },
                },
            });
            chart.filter('name', ( /**
             * @param {?} name
             * @return {?}
             */function (name) {
                /** @type {?} */
                var legendItem = _this.legendData.find(( /**
                 * @param {?} w
                 * @return {?}
                 */function (/**
                 * @param {?} w
                 * @return {?}
                 */ w) { return w.name === name; }));
                return legendItem ? legendItem.checked !== false : true;
            }));
            chart.line().position('label*value');
            chart.point().position('label*value').shape('circle').size(3);
            chart.render();
            chart.on("point:click", ( /**
             * @param {?} ev
             * @return {?}
             */function (ev) {
                _this.ngZone.run(( /**
                 * @return {?}
                 */function () { var _a; return _this.clickItem.emit({ item: (_a = ev.data) === null || _a === void 0 ? void 0 : _a.data, ev: ev }); }));
            }));
            this.attachChart();
        };
        /**
         * @return {?}
         */
        G2RadarComponent.prototype.attachChart = function () {
            var _this = this;
            var _b = this, _chart = _b._chart, padding = _b.padding, data = _b.data, colors = _b.colors, tickCount = _b.tickCount;
            if (!_chart || !data || data.length <= 0)
                return;
            _chart.height = this.getHeight();
            _chart.padding = padding;
            _chart.scale({
                value: {
                    min: 0,
                    tickCount: tickCount,
                },
            });
            _chart.geometries.forEach(( /**
             * @param {?} g
             * @return {?}
             */function (/**
             * @param {?} g
             * @return {?}
             */ g) { return g.color('name', colors); }));
            _chart.changeData(data);
            _chart.render();
            this.ngZone.run(( /**
             * @return {?}
             */function () { return _this.genLegend(); }));
        };
        /**
         * @private
         * @return {?}
         */
        G2RadarComponent.prototype.genLegend = function () {
            var _b = this, hasLegend = _b.hasLegend, cdr = _b.cdr, _chart = _b._chart;
            if (!hasLegend)
                return;
            this.legendData = _chart.geometries[0].dataArray.map(( /**
             * @param {?} item
             * @return {?}
             */function (/**
             * @param {?} item
             * @return {?}
             */ item) {
                /** @type {?} */
                var origin = item[0]._origin;
                /** @type {?} */
                var result = {
                    name: origin.name,
                    color: item[0].color,
                    checked: true,
                    value: item.reduce(( /**
                     * @param {?} p
                     * @param {?} n
                     * @return {?}
                     */function (p, n) { return p + n._origin.value; }), 0),
                };
                return result;
            }));
            cdr.detectChanges();
        };
        /**
         * @param {?} i
         * @return {?}
         */
        G2RadarComponent.prototype._click = function (i) {
            var _b = this, legendData = _b.legendData, _chart = _b._chart;
            legendData[i].checked = !legendData[i].checked;
            _chart.render();
        };
        /**
         * @return {?}
         */
        G2RadarComponent.prototype.onChanges = function () {
            this.legendData.forEach(( /**
             * @param {?} i
             * @return {?}
             */function (/**
             * @param {?} i
             * @return {?}
             */ i) { return (i.checked = true); }));
        };
        return G2RadarComponent;
    }(core$1.G2BaseComponent));
    G2RadarComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'g2-radar',
                    exportAs: 'g2Radar',
                    template: "<nz-skeleton *ngIf=\"!loaded\"></nz-skeleton>\n<ng-container *nzStringTemplateOutlet=\"title\">\n  <h4>{{ title }}</h4>\n</ng-container>\n<div #container></div>\n<div nz-row class=\"g2-radar__legend\" *ngIf=\"hasLegend\">\n  <div nz-col [nzSpan]=\"24 / legendData.length\" *ngFor=\"let i of legendData; let idx = index\" (click)=\"_click(idx)\" class=\"g2-radar__legend-item\">\n    <i class=\"g2-radar__legend-dot\" [ngStyle]=\"{ 'background-color': !i.checked ? '#aaa' : i.color }\"></i>\n    {{ i.name }}\n    <h6 class=\"g2-radar__legend-title\">{{ i.value }}</h6>\n  </div>\n</div>\n",
                    host: {
                        '[style.height.px]': 'height',
                        '[class.g2-radar]': 'true',
                    },
                    preserveWhitespaces: false,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None
                }] }
    ];
    G2RadarComponent.propDecorators = {
        title: [{ type: core.Input }],
        height: [{ type: core.Input }],
        padding: [{ type: core.Input }],
        hasLegend: [{ type: core.Input }],
        tickCount: [{ type: core.Input }],
        data: [{ type: core.Input }],
        colors: [{ type: core.Input }],
        clickItem: [{ type: core.Output }]
    };
    __decorate([
        decorator.InputNumber(),
        __metadata("design:type", Object)
    ], G2RadarComponent.prototype, "height", void 0);
    __decorate([
        decorator.InputBoolean(),
        __metadata("design:type", Object)
    ], G2RadarComponent.prototype, "hasLegend", void 0);
    __decorate([
        decorator.InputNumber(),
        __metadata("design:type", Object)
    ], G2RadarComponent.prototype, "tickCount", void 0);
    if (false) {
        /** @type {?} */
        G2RadarComponent.ngAcceptInputType_height;
        /** @type {?} */
        G2RadarComponent.ngAcceptInputType_hasLegend;
        /** @type {?} */
        G2RadarComponent.ngAcceptInputType_tickCount;
        /** @type {?} */
        G2RadarComponent.prototype.legendData;
        /** @type {?} */
        G2RadarComponent.prototype.title;
        /** @type {?} */
        G2RadarComponent.prototype.height;
        /** @type {?} */
        G2RadarComponent.prototype.padding;
        /** @type {?} */
        G2RadarComponent.prototype.hasLegend;
        /** @type {?} */
        G2RadarComponent.prototype.tickCount;
        /** @type {?} */
        G2RadarComponent.prototype.data;
        /** @type {?} */
        G2RadarComponent.prototype.colors;
        /** @type {?} */
        G2RadarComponent.prototype.clickItem;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: radar.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [G2RadarComponent];
    var G2RadarModule = /** @class */ (function () {
        function G2RadarModule() {
        }
        return G2RadarModule;
    }());
    G2RadarModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule, grid.NzGridModule, outlet.NzOutletModule, skeleton.NzSkeletonModule],
                    declarations: COMPONENTS,
                    exports: COMPONENTS,
                },] }
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: public_api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: radar.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.G2RadarComponent = G2RadarComponent;
    exports.G2RadarModule = G2RadarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=radar.umd.js.map
