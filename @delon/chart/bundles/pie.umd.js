/**
 * @license ng-alain(cipchk@qq.com) v10.0.0-beta.5
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/platform'), require('@angular/core'), require('@antv/g2'), require('@delon/util'), require('@angular/common'), require('ng-zorro-antd/core/outlet'), require('ng-zorro-antd/divider')) :
    typeof define === 'function' && define.amd ? define('@delon/chart/pie', ['exports', '@angular/cdk/platform', '@angular/core', '@antv/g2', '@delon/util', '@angular/common', 'ng-zorro-antd/core/outlet', 'ng-zorro-antd/divider'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart.pie = {}), global.ng.cdk.platform, global.ng.core, global.g2, global.delon.util, global.ng.common, global['ng-zorro-antd/core/outlet'], global['ng-zorro-antd/divider']));
}(this, (function (exports, platform, core, g2, util, common, outlet, divider) { 'use strict';

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
    /**
     * @record
     */
    function G2PieClickItem() { }
    if (false) {
        /** @type {?} */
        G2PieClickItem.prototype.item;
        /** @type {?} */
        G2PieClickItem.prototype.ev;
    }
    var G2PieComponent = /** @class */ (function () {
        /**
         * @param {?} el
         * @param {?} ngZone
         * @param {?} cdr
         * @param {?} configSrv
         * @param {?} platform
         */
        function G2PieComponent(el, ngZone, cdr, configSrv, platform) {
            this.el = el;
            this.ngZone = ngZone;
            this.cdr = cdr;
            this.platform = platform;
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
            this.blockMaxWidth = 380;
            this.select = true;
            this.data = [];
            this.interaction = 'none';
            this.clickItem = new core.EventEmitter();
            configSrv.attachKey(this, 'chart', 'theme');
        }
        Object.defineProperty(G2PieComponent.prototype, "block", {
            // #endregion
            /**
             * @return {?}
             */
            get: function () {
                return this.hasLegend && this.el.nativeElement.clientWidth <= this.blockMaxWidth;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(G2PieComponent.prototype, "chart", {
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
        G2PieComponent.prototype.fixData = function () {
            var _b = this, percent = _b.percent, color = _b.color;
            this.isPercent = percent != null;
            if (this.isPercent) {
                this.select = false;
                this.tooltip = false;
                this.percentColor = ( /**
                 * @param {?} value
                 * @return {?}
                 */function (value) { return (value === '占比' ? color || 'rgba(24, 144, 255, 0.85)' : '#F0F2F5'); });
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
        G2PieComponent.prototype.install = function () {
            var _this = this;
            var _b = this, node = _b.node, height = _b.height, padding = _b.padding, tooltip = _b.tooltip, inner = _b.inner, hasLegend = _b.hasLegend, interaction = _b.interaction, theme = _b.theme;
            /** @type {?} */
            var chart = (this._chart = new g2.Chart({
                container: node.nativeElement,
                autoFit: true,
                height: height,
                padding: padding,
                theme: theme,
            }));
            if (!tooltip) {
                chart.tooltip(false);
            }
            else {
                chart.tooltip({
                    showTitle: false,
                    showMarkers: false,
                });
            }
            if (interaction !== 'none') {
                chart.interaction(interaction);
            }
            chart.axis(false).legend(false).coordinate('theta', { innerRadius: inner });
            chart.filter('x', ( /**
             * @param {?} _val
             * @param {?} item
             * @return {?}
             */function (_val, item) { return item.checked !== false; }));
            chart
                .interval()
                .adjust('stack')
                .position('y')
                .tooltip('x*percent', ( /**
         * @param {?} name
         * @param {?} p
         * @return {?}
         */function (name, p) { return ({
                name: name,
                value: (hasLegend ? p : (p * 100).toFixed(2)) + " %",
            }); }))
                .state({});
            chart.on("interval:click", ( /**
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
         * @private
         * @return {?}
         */
        G2PieComponent.prototype.attachChart = function () {
            var e_1, _b;
            var _this = this;
            var _c = this, _chart = _c._chart, height = _c.height, padding = _c.padding, animate = _c.animate, data = _c.data, lineWidth = _c.lineWidth, isPercent = _c.isPercent, percentColor = _c.percentColor, colors = _c.colors;
            if (!_chart)
                return;
            _chart.height = height;
            _chart.padding = padding;
            _chart.animate(animate);
            _chart.geometries[0].style({ lineWidth: lineWidth, stroke: '#fff' }).color('x', isPercent ? percentColor : colors);
            _chart.scale({
                x: {
                    type: 'cat',
                    range: [0, 1],
                },
            });
            // 转化 percent
            /** @type {?} */
            var totalSum = data.reduce(( /**
             * @param {?} cur
             * @param {?} item
             * @return {?}
             */function (cur, item) { return cur + item.y; }), 0);
            try {
                for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                    var item = data_1_1.value;
                    item.percent = totalSum === 0 ? 0 : item.y / totalSum;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (data_1_1 && !data_1_1.done && (_b = data_1.return)) _b.call(data_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            _chart.changeData(data);
            this.ngZone.run(( /**
             * @return {?}
             */function () { return _this.genLegend(); }));
        };
        /**
         * @private
         * @return {?}
         */
        G2PieComponent.prototype.genLegend = function () {
            var _b = this, hasLegend = _b.hasLegend, isPercent = _b.isPercent, cdr = _b.cdr, _chart = _b._chart;
            if (!hasLegend || isPercent)
                return;
            this.legendData = _chart.geometries[0].dataArray.map(( /**
             * @param {?} item
             * @return {?}
             */function (item) {
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
        G2PieComponent.prototype._click = function (i) {
            var _b = this, legendData = _b.legendData, _chart = _b._chart;
            legendData[i].checked = !legendData[i].checked;
            _chart.render();
        };
        /**
         * @return {?}
         */
        G2PieComponent.prototype.ngOnInit = function () {
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
        G2PieComponent.prototype.ngOnChanges = function () {
            var _this = this;
            this.fixData();
            this.ngZone.runOutsideAngular(( /**
             * @return {?}
             */function () { return _this.attachChart(); }));
        };
        /**
         * @return {?}
         */
        G2PieComponent.prototype.ngOnDestroy = function () {
            var _this = this;
            if (this._chart) {
                this.ngZone.runOutsideAngular(( /**
                 * @return {?}
                 */function () { return _this._chart.destroy(); }));
            }
        };
        return G2PieComponent;
    }());
    G2PieComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'g2-pie',
                    exportAs: 'g2Pie',
                    template: "<div class=\"g2-pie__chart\">\n  <div #container></div>\n  <div *ngIf=\"subTitle || total\" class=\"g2-pie__total\">\n    <h4 *ngIf=\"subTitle\" class=\"g2-pie__total-title\">\n      <ng-container *nzStringTemplateOutlet=\"subTitle\">\n        <div [innerHTML]=\"subTitle\"></div>\n      </ng-container>\n    </h4>\n    <div *ngIf=\"total\" class=\"g2-pie__total-stat\">\n      <ng-container *nzStringTemplateOutlet=\"total\">\n        <div [innerHTML]=\"total\"></div>\n      </ng-container>\n    </div>\n  </div>\n</div>\n<ul *ngIf=\"hasLegend && legendData?.length\" class=\"g2-pie__legend\">\n  <li *ngFor=\"let item of legendData; let index = index\" (click)=\"_click(index)\" class=\"g2-pie__legend-item\">\n    <span class=\"g2-pie__legend-dot\" [ngStyle]=\"{ 'background-color': !item.checked ? '#aaa' : item.color }\"></span>\n    <span class=\"g2-pie__legend-title\">{{ item.x }}</span>\n    <nz-divider nzType=\"vertical\"></nz-divider>\n    <span class=\"g2-pie__legend-percent\">{{ item.percent }}%</span>\n    <span class=\"g2-pie__legend-value\" [innerHTML]=\"valueFormat ? valueFormat(item.y) : item.y\"></span>\n  </li>\n</ul>\n",
                    host: {
                        '[class.g2-pie]': 'true',
                        '[class.g2-pie__legend-has]': 'hasLegend',
                        '[class.g2-pie__legend-block]': 'block',
                        '[class.g2-pie__mini]': 'isPercent',
                    },
                    preserveWhitespaces: false,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    G2PieComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.NgZone },
        { type: core.ChangeDetectorRef },
        { type: util.AlainConfigService },
        { type: platform.Platform }
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
        blockMaxWidth: [{ type: core.Input }],
        select: [{ type: core.Input }],
        valueFormat: [{ type: core.Input }],
        data: [{ type: core.Input }],
        colors: [{ type: core.Input }],
        interaction: [{ type: core.Input }],
        theme: [{ type: core.Input }],
        clickItem: [{ type: core.Output }]
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
        util.InputNumber(),
        __metadata("design:type", Object)
    ], G2PieComponent.prototype, "blockMaxWidth", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], G2PieComponent.prototype, "select", void 0);
    if (false) {
        /** @type {?} */
        G2PieComponent.ngAcceptInputType_delay;
        /** @type {?} */
        G2PieComponent.ngAcceptInputType_height;
        /** @type {?} */
        G2PieComponent.ngAcceptInputType_animate;
        /** @type {?} */
        G2PieComponent.ngAcceptInputType_hasLegend;
        /** @type {?} */
        G2PieComponent.ngAcceptInputType_percent;
        /** @type {?} */
        G2PieComponent.ngAcceptInputType_tooltip;
        /** @type {?} */
        G2PieComponent.ngAcceptInputType_lineWidth;
        /** @type {?} */
        G2PieComponent.ngAcceptInputType_blockMaxWidth;
        /** @type {?} */
        G2PieComponent.ngAcceptInputType_select;
        /**
         * @type {?}
         * @private
         */
        G2PieComponent.prototype.node;
        /**
         * @type {?}
         * @private
         */
        G2PieComponent.prototype._chart;
        /**
         * @type {?}
         * @private
         */
        G2PieComponent.prototype.percentColor;
        /** @type {?} */
        G2PieComponent.prototype.legendData;
        /** @type {?} */
        G2PieComponent.prototype.isPercent;
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
        G2PieComponent.prototype.blockMaxWidth;
        /** @type {?} */
        G2PieComponent.prototype.select;
        /** @type {?} */
        G2PieComponent.prototype.valueFormat;
        /** @type {?} */
        G2PieComponent.prototype.data;
        /** @type {?} */
        G2PieComponent.prototype.colors;
        /** @type {?} */
        G2PieComponent.prototype.interaction;
        /** @type {?} */
        G2PieComponent.prototype.theme;
        /** @type {?} */
        G2PieComponent.prototype.clickItem;
        /**
         * @type {?}
         * @private
         */
        G2PieComponent.prototype.el;
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
        /**
         * @type {?}
         * @private
         */
        G2PieComponent.prototype.platform;
    }

    /** @type {?} */
    var COMPONENTS = [G2PieComponent];
    var G2PieModule = /** @class */ (function () {
        function G2PieModule() {
        }
        return G2PieModule;
    }());
    G2PieModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule, util.DelonUtilModule, divider.NzDividerModule, outlet.NzOutletModule],
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
     * Generated from: pie.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.G2PieComponent = G2PieComponent;
    exports.G2PieModule = G2PieModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pie.umd.js.map
