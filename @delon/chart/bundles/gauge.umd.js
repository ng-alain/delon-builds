/**
 * @license ng-alain(cipchk@qq.com) v11.3.1
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/chart/core'), require('@delon/util/decorator'), require('@angular/common'), require('ng-zorro-antd/skeleton')) :
    typeof define === 'function' && define.amd ? define('@delon/chart/gauge', ['exports', '@angular/core', '@delon/chart/core', '@delon/util/decorator', '@angular/common', 'ng-zorro-antd/skeleton'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart.gauge = {}), global.ng.core, global.delon.chart.core, global.decorator, global.ng.common, global.i2));
}(this, (function (exports, i0, core, decorator, i1, i2) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

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

    var G2GaugeComponent = /** @class */ (function (_super) {
        __extends(G2GaugeComponent, _super);
        function G2GaugeComponent() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.color = '#2f9cff';
            _this.padding = [10, 10, 30, 10];
            return _this;
        }
        // #endregion
        G2GaugeComponent.prototype.install = function () {
            // 自定义Shape 部分
            window.G2.registerShape('point', 'pointer', {
                // tslint:disable-next-line: typedef
                draw: function (cfg, container) {
                    var group = container.addGroup({});
                    // 获取极坐标系下画布中心点
                    var center = this.parsePoint({ x: 0, y: 0 });
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
            var chart = (this._chart = new window.G2.Chart({
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
        G2GaugeComponent.prototype.attachChart = function () {
            var _a = this, _chart = _a._chart, percent = _a.percent, color = _a.color, bgColor = _a.bgColor, title = _a.title;
            if (!_chart)
                return;
            var data = [{ name: title, value: percent }];
            var val = data[0].value;
            _chart.annotation().clear(true);
            _chart.geometries[0].color(color);
            // 绘制仪表盘背景
            _chart.annotation().arc({
                top: false,
                start: [0, 0.95],
                end: [100, 0.95],
                style: {
                    stroke: bgColor,
                    lineWidth: 12,
                    lineDash: null,
                },
            });
            _chart.annotation().arc({
                start: [0, 0.95],
                end: [data[0].value, 0.95],
                style: {
                    stroke: color,
                    lineWidth: 12,
                    lineDash: null,
                },
            });
            _chart.annotation().text({
                position: ['50%', '85%'],
                content: title,
                style: {
                    fontSize: 12,
                    fill: 'rgba(0, 0, 0, 0.43)',
                    textAlign: 'center',
                },
            });
            _chart.annotation().text({
                position: ['50%', '90%'],
                content: val + " %",
                style: {
                    fontSize: 20,
                    fill: 'rgba(0, 0, 0, 0.85)',
                    textAlign: 'center',
                },
                offsetY: 15,
            });
            _chart.changeData(data);
            _chart.render();
        };
        return G2GaugeComponent;
    }(core.G2BaseComponent));
    /** @nocollapse */ G2GaugeComponent.ɵfac = function G2GaugeComponent_Factory(t) { return ɵG2GaugeComponent_BaseFactory(t || G2GaugeComponent); };
    /** @nocollapse */ G2GaugeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: G2GaugeComponent, selector: "g2-gauge", inputs: { title: "title", height: "height", color: "color", bgColor: "bgColor", format: "format", percent: "percent", padding: "padding" }, host: { properties: { "class.g2-gauge": "true" } }, exportAs: ["g2Gauge"], usesInheritance: true, ngImport: i0__namespace, template: "<nz-skeleton *ngIf=\"!loaded\"></nz-skeleton>", isInline: true, directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
    __decorate([
        decorator.InputNumber(),
        __metadata("design:type", Number)
    ], G2GaugeComponent.prototype, "height", void 0);
    __decorate([
        decorator.InputNumber(),
        __metadata("design:type", Number)
    ], G2GaugeComponent.prototype, "percent", void 0);
    var ɵG2GaugeComponent_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(G2GaugeComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(G2GaugeComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'g2-gauge',
                        exportAs: 'g2Gauge',
                        template: "<nz-skeleton *ngIf=\"!loaded\"></nz-skeleton>",
                        host: {
                            '[class.g2-gauge]': 'true',
                        },
                        preserveWhitespaces: false,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], null, { title: [{
                    type: i0.Input
                }], height: [{
                    type: i0.Input
                }], color: [{
                    type: i0.Input
                }], bgColor: [{
                    type: i0.Input
                }], format: [{
                    type: i0.Input
                }], percent: [{
                    type: i0.Input
                }], padding: [{
                    type: i0.Input
                }] });
    })();

    var COMPONENTS = [G2GaugeComponent];
    var G2GaugeModule = /** @class */ (function () {
        function G2GaugeModule() {
        }
        return G2GaugeModule;
    }());
    /** @nocollapse */ G2GaugeModule.ɵmod = i0.ɵɵdefineNgModule({ type: G2GaugeModule });
    /** @nocollapse */ G2GaugeModule.ɵinj = i0.ɵɵdefineInjector({ factory: function G2GaugeModule_Factory(t) { return new (t || G2GaugeModule)(); }, imports: [[i1.CommonModule, i2.NzSkeletonModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(G2GaugeModule, { declarations: [G2GaugeComponent], imports: [i1.CommonModule, i2.NzSkeletonModule], exports: [G2GaugeComponent] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(G2GaugeModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.CommonModule, i2.NzSkeletonModule],
                        declarations: COMPONENTS,
                        exports: COMPONENTS,
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.G2GaugeComponent = G2GaugeComponent;
    exports.G2GaugeModule = G2GaugeModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=gauge.umd.js.map
