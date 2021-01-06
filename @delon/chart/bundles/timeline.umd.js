/**
 * @license ng-alain(cipchk@qq.com) v11.1.0
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/chart/core'), require('@delon/util'), require('date-fns/format'), require('@angular/common'), require('ng-zorro-antd/core/outlet'), require('ng-zorro-antd/skeleton')) :
    typeof define === 'function' && define.amd ? define('@delon/chart/timeline', ['exports', '@angular/core', '@delon/chart/core', '@delon/util', 'date-fns/format', '@angular/common', 'ng-zorro-antd/core/outlet', 'ng-zorro-antd/skeleton'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart.timeline = {}), global.ng.core, global.delon.chart.core, global.delon.util, global.format, global.ng.common, global['ng-zorro-antd/core/outlet'], global.skeleton));
}(this, (function (exports, core, core$1, util, format, common, outlet, skeleton) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var format__default = /*#__PURE__*/_interopDefaultLegacy(format);

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
    function G2TimelineData() { }
    if (false) {
        /**
         * 时间值
         * @type {?|undefined}
         */
        G2TimelineData.prototype.time;
        /**
         * 指标1数据
         * @type {?}
         */
        G2TimelineData.prototype.y1;
        /**
         * 指标2数据
         * @type {?}
         */
        G2TimelineData.prototype.y2;
        /**
         * 指标3数据
         * @type {?|undefined}
         */
        G2TimelineData.prototype.y3;
        /**
         * 指标4数据
         * @type {?|undefined}
         */
        G2TimelineData.prototype.y4;
        /**
         * 指标5数据
         * @type {?|undefined}
         */
        G2TimelineData.prototype.y5;
        /* Skipping unhandled member: [key: string]: any;*/
    }
    /**
     * @record
     */
    function G2TimelineMap() { }
    if (false) {
        /**
         * 指标1
         * @type {?}
         */
        G2TimelineMap.prototype.y1;
        /**
         * 指标
         * @type {?}
         */
        G2TimelineMap.prototype.y2;
        /**
         * 指标3
         * @type {?|undefined}
         */
        G2TimelineMap.prototype.y3;
        /**
         * 指标4
         * @type {?|undefined}
         */
        G2TimelineMap.prototype.y4;
        /**
         * 指标5
         * @type {?|undefined}
         */
        G2TimelineMap.prototype.y5;
        /* Skipping unhandled member: [key: string]: string | undefined;*/
    }
    /**
     * @record
     */
    function G2TimelineClickItem() { }
    if (false) {
        /** @type {?} */
        G2TimelineClickItem.prototype.item;
        /** @type {?} */
        G2TimelineClickItem.prototype.ev;
    }
    var G2TimelineComponent = /** @class */ (function (_super) {
        __extends(G2TimelineComponent, _super);
        function G2TimelineComponent() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.maxAxis = 2;
            _this.data = [];
            _this.colorMap = { y1: '#5B8FF9', y2: '#5AD8A6', y3: '#5D7092', y4: '#F6BD16', y5: '#E86452' };
            _this.mask = 'HH:mm';
            _this.maskSlider = 'HH:mm';
            _this.position = 'top';
            _this.height = 450;
            _this.padding = [40, 8, 64, 40];
            _this.borderWidth = 2;
            _this.slider = true;
            _this.clickItem = new core.EventEmitter();
            return _this;
        }
        // #endregion
        /**
         * @return {?}
         */
        G2TimelineComponent.prototype.install = function () {
            var _this = this;
            var _b = this, node = _b.node, height = _b.height, padding = _b.padding, slider = _b.slider, maxAxis = _b.maxAxis, theme = _b.theme, maskSlider = _b.maskSlider;
            /** @type {?} */
            var chart = (this._chart = new (( /** @type {?} */(window))).G2.Chart({
                container: node.nativeElement,
                autoFit: true,
                height: height,
                padding: padding,
                theme: theme,
            }));
            chart.axis('time', { title: null });
            chart.axis('y1', { title: null });
            for (var i = 2; i <= maxAxis; i++) {
                chart.axis("y" + i, false);
            }
            chart.line().position('time*y1');
            for (var i = 2; i <= maxAxis; i++) {
                chart.line().position("time*y" + i);
            }
            chart.tooltip({
                showCrosshairs: true,
                shared: true,
            });
            /** @type {?} */
            var sliderPadding = Object.assign(Object.assign({}, []), padding);
            sliderPadding[0] = 0;
            if (slider) {
                chart.option('slider', {
                    height: 26,
                    start: 0,
                    end: 1,
                    trendCfg: {
                        isArea: false,
                    },
                    minLimit: 2,
                    formatter: ( /**
                     * @param {?} val
                     * @return {?}
                     */function (val) { return format__default['default'](val, maskSlider); }),
                });
            }
            chart.on("plot:click", ( /**
             * @param {?} ev
             * @return {?}
             */function (ev) {
                /** @type {?} */
                var records = _this._chart.getSnapRecords({ x: ev.x, y: ev.y });
                _this.ngZone.run(( /**
                 * @return {?}
                 */function () { return _this.clickItem.emit({ item: records[0]._origin, ev: ev }); }));
            }));
            chart.on("legend-item:click", ( /**
             * @param {?} ev
             * @return {?}
             */function (ev) {
                var _a;
                /** @type {?} */
                var item = (_a = ev === null || ev === void 0 ? void 0 : ev.target) === null || _a === void 0 ? void 0 : _a.get('delegateObject').item;
                /** @type {?} */
                var id = item === null || item === void 0 ? void 0 : item.id;
                /** @type {?} */
                var line = chart.geometries.find(( /**
                 * @param {?} w
                 * @return {?}
                 */function (/**
                 * @param {?} w
                 * @return {?}
                 */ w) { return w.getAttribute('position').getFields()[1] === id; }));
                if (line) {
                    line.changeVisible(!item.unchecked);
                }
            }));
            this.attachChart();
        };
        /**
         * @return {?}
         */
        G2TimelineComponent.prototype.attachChart = function () {
            var _b = this, _chart = _b._chart, height = _b.height, padding = _b.padding, mask = _b.mask, titleMap = _b.titleMap, position = _b.position, colorMap = _b.colorMap, borderWidth = _b.borderWidth, maxAxis = _b.maxAxis;
            /** @type {?} */
            var data = __spread(this.data);
            if (!_chart || !data || data.length <= 0)
                return;
            /** @type {?} */
            var arrAxis = __spread(Array(maxAxis)).map(( /**
             * @param {?} _
             * @param {?} index
             * @return {?}
             */function (_, index) { return index + 1; }));
            _chart.legend({
                position: position,
                custom: true,
                items: arrAxis.map(( /**
                 * @param {?} id
                 * @return {?}
                 */function (/**
                 * @param {?} id
                 * @return {?}
                 */ id) {
                    /** @type {?} */
                    var key = "y" + id;
                    return ( /** @type {?} */({ id: key, name: titleMap[key], value: key, marker: { style: { fill: colorMap[key] } } }));
                })),
            });
            // border
            _chart.geometries.forEach(( /**
             * @param {?} v
             * @param {?} idx
             * @return {?}
             */function (v, idx) {
                v.color((( /** @type {?} */(colorMap)))["y" + (idx + 1)]).size(borderWidth);
            }));
            _chart.height = height;
            _chart.padding = padding;
            // 转换成日期类型
            data = data
                .map(( /**
         * @param {?} item
         * @return {?}
         */function (/**
         * @param {?} item
         * @return {?}
         */ item) {
                item.time = util.toDate(( /** @type {?} */(item.time)));
                item._time = +item.time;
                return item;
            }))
                .sort(( /**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */function (a, b) { return a._time - b._time; }));
            /** @type {?} */
            var max = Math.max.apply(Math, __spread(arrAxis.map(( /**
             * @param {?} id
             * @return {?}
             */function (/**
             * @param {?} id
             * @return {?}
             */ id) { return __spread(data).sort(( /**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */function (a, b) { return b["y" + id] - a["y" + id]; }))[0]["y" + id]; }))));
            /** @type {?} */
            var scaleOptions = {};
            arrAxis.forEach(( /**
             * @param {?} id
             * @return {?}
             */function (/**
             * @param {?} id
             * @return {?}
             */ id) {
                /** @type {?} */
                var key = "y" + id;
                scaleOptions[key] = {
                    alias: titleMap[key],
                    max: max,
                    min: 0,
                };
            }));
            _chart.scale(Object.assign({ time: {
                    type: 'time',
                    mask: mask,
                    range: [0, 1],
                } }, scaleOptions));
            /** @type {?} */
            var initialRange = {
                start: data[0]._time,
                end: data[data.length - 1]._time,
            };
            /** @type {?} */
            var filterData = data.filter(( /**
             * @param {?} val
             * @return {?}
             */function (/**
             * @param {?} val
             * @return {?}
             */ val) { return val._time >= initialRange.start && val._time <= initialRange.end; }));
            _chart.changeData(filterData);
            _chart.render();
        };
        return G2TimelineComponent;
    }(core$1.G2BaseComponent));
    G2TimelineComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'g2-timeline',
                    exportAs: 'g2Timeline',
                    template: "\n    <ng-container *nzStringTemplateOutlet=\"title\">\n      <h4>{{ title }}</h4>\n    </ng-container>\n    <nz-skeleton *ngIf=\"!loaded\"></nz-skeleton>\n    <div #container></div>\n  ",
                    preserveWhitespaces: false,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None
                }] }
    ];
    G2TimelineComponent.propDecorators = {
        title: [{ type: core.Input }],
        maxAxis: [{ type: core.Input }],
        data: [{ type: core.Input }],
        titleMap: [{ type: core.Input }],
        colorMap: [{ type: core.Input }],
        mask: [{ type: core.Input }],
        maskSlider: [{ type: core.Input }],
        position: [{ type: core.Input }],
        height: [{ type: core.Input }],
        padding: [{ type: core.Input }],
        borderWidth: [{ type: core.Input }],
        slider: [{ type: core.Input }],
        clickItem: [{ type: core.Output }]
    };
    __decorate([
        util.InputNumber(),
        __metadata("design:type", Object)
    ], G2TimelineComponent.prototype, "maxAxis", void 0);
    __decorate([
        util.InputNumber(),
        __metadata("design:type", Object)
    ], G2TimelineComponent.prototype, "height", void 0);
    __decorate([
        util.InputNumber(),
        __metadata("design:type", Object)
    ], G2TimelineComponent.prototype, "borderWidth", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], G2TimelineComponent.prototype, "slider", void 0);
    if (false) {
        /** @type {?} */
        G2TimelineComponent.ngAcceptInputType_height;
        /** @type {?} */
        G2TimelineComponent.ngAcceptInputType_maxAxis;
        /** @type {?} */
        G2TimelineComponent.ngAcceptInputType_borderWidth;
        /** @type {?} */
        G2TimelineComponent.ngAcceptInputType_slider;
        /** @type {?} */
        G2TimelineComponent.prototype.title;
        /** @type {?} */
        G2TimelineComponent.prototype.maxAxis;
        /** @type {?} */
        G2TimelineComponent.prototype.data;
        /** @type {?} */
        G2TimelineComponent.prototype.titleMap;
        /** @type {?} */
        G2TimelineComponent.prototype.colorMap;
        /** @type {?} */
        G2TimelineComponent.prototype.mask;
        /** @type {?} */
        G2TimelineComponent.prototype.maskSlider;
        /** @type {?} */
        G2TimelineComponent.prototype.position;
        /** @type {?} */
        G2TimelineComponent.prototype.height;
        /** @type {?} */
        G2TimelineComponent.prototype.padding;
        /** @type {?} */
        G2TimelineComponent.prototype.borderWidth;
        /** @type {?} */
        G2TimelineComponent.prototype.slider;
        /** @type {?} */
        G2TimelineComponent.prototype.clickItem;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: timeline.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [G2TimelineComponent];
    var G2TimelineModule = /** @class */ (function () {
        function G2TimelineModule() {
        }
        return G2TimelineModule;
    }());
    G2TimelineModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule, util.DelonUtilModule, outlet.NzOutletModule, skeleton.NzSkeletonModule],
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
     * Generated from: timeline.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.G2TimelineComponent = G2TimelineComponent;
    exports.G2TimelineModule = G2TimelineModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=timeline.umd.js.map
