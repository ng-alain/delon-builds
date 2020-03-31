/**
 * @license ng-alain(cipchk@qq.com) v8.9.0
 * (c) 2019 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/util'), require('rxjs'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@delon/chart/water-wave', ['exports', '@angular/core', '@delon/util', 'rxjs', 'rxjs/operators', '@angular/common'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart['water-wave'] = {}), global.ng.core, global.delon.util, global.rxjs, global.rxjs.operators, global.ng.common));
}(this, (function (exports, core, util, rxjs, operators, common) { 'use strict';

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
     * Generated from: water-wave.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var G2WaterWaveComponent = /** @class */ (function () {
        // #endregion
        function G2WaterWaveComponent(el, renderer, ngZone, cdr) {
            this.el = el;
            this.renderer = renderer;
            this.ngZone = ngZone;
            this.cdr = cdr;
            this.resize$ = null;
            // #region fields
            this.delay = 0;
            this.color = '#1890FF';
            this.height = 160;
        }
        /**
         * @private
         * @param {?} type
         * @return {?}
         */
        G2WaterWaveComponent.prototype.renderChart = /**
         * @private
         * @param {?} type
         * @return {?}
         */
        function (type) {
            if (!this.resize$)
                return;
            this.updateRadio();
            var _a = this, percent = _a.percent, color = _a.color, node = _a.node;
            /** @type {?} */
            var data = Math.min(Math.max(percent / 100, 0), 100);
            /** @type {?} */
            var self = this;
            cancelAnimationFrame(this.timer);
            /** @type {?} */
            var canvas = (/** @type {?} */ (node.nativeElement));
            /** @type {?} */
            var ctx = (/** @type {?} */ (canvas.getContext('2d')));
            /** @type {?} */
            var canvasWidth = canvas.width;
            /** @type {?} */
            var canvasHeight = canvas.height;
            /** @type {?} */
            var radius = canvasWidth / 2;
            /** @type {?} */
            var lineWidth = 2;
            /** @type {?} */
            var cR = radius - lineWidth;
            ctx.beginPath();
            ctx.lineWidth = lineWidth * 2;
            /** @type {?} */
            var axisLength = canvasWidth - lineWidth;
            /** @type {?} */
            var unit = axisLength / 8;
            /** @type {?} */
            var range = 0.2;
            // 振幅
            /** @type {?} */
            var currRange = range;
            /** @type {?} */
            var xOffset = lineWidth;
            /** @type {?} */
            var sp = 0;
            // 周期偏移量
            /** @type {?} */
            var currData = 0;
            /** @type {?} */
            var waveupsp = 0.005;
            // 水波上涨速度
            /** @type {?} */
            var arcStack = [];
            /** @type {?} */
            var bR = radius - lineWidth;
            /** @type {?} */
            var circleOffset = -(Math.PI / 2);
            /** @type {?} */
            var circleLock = true;
            // tslint:disable-next-line:binary-expression-operand-order
            for (var i = circleOffset; i < circleOffset + 2 * Math.PI; i += 1 / (8 * Math.PI)) {
                arcStack.push([radius + bR * Math.cos(i), radius + bR * Math.sin(i)]);
            }
            /** @type {?} */
            var cStartPoint = (/** @type {?} */ (arcStack.shift()));
            ctx.strokeStyle = color;
            ctx.moveTo(cStartPoint[0], cStartPoint[1]);
            /**
             * @return {?}
             */
            function drawSin() {
                ctx.beginPath();
                ctx.save();
                /** @type {?} */
                var sinStack = [];
                for (var i = xOffset; i <= xOffset + axisLength; i += 20 / axisLength) {
                    /** @type {?} */
                    var x = sp + (xOffset + i) / unit;
                    /** @type {?} */
                    var y = Math.sin(x) * currRange;
                    /** @type {?} */
                    var dx = i;
                    // tslint:disable-next-line:binary-expression-operand-order
                    /** @type {?} */
                    var dy = 2 * cR * (1 - currData) + (radius - cR) - unit * y;
                    ctx.lineTo(dx, dy);
                    sinStack.push([dx, dy]);
                }
                /** @type {?} */
                var startPoint = (/** @type {?} */ (sinStack.shift()));
                ctx.lineTo(xOffset + axisLength, canvasHeight);
                ctx.lineTo(xOffset, canvasHeight);
                ctx.lineTo(startPoint[0], startPoint[1]);
                /** @type {?} */
                var gradient = ctx.createLinearGradient(0, 0, 0, canvasHeight);
                gradient.addColorStop(0, '#ffffff');
                gradient.addColorStop(1, color);
                ctx.fillStyle = gradient;
                ctx.fill();
                ctx.restore();
            }
            /**
             * @return {?}
             */
            function render() {
                ctx.clearRect(0, 0, canvasWidth, canvasHeight);
                if (circleLock && type !== 'update') {
                    if ((/** @type {?} */ (arcStack)).length) {
                        /** @type {?} */
                        var temp = (/** @type {?} */ ((/** @type {?} */ (arcStack)).shift()));
                        ctx.lineTo(temp[0], temp[1]);
                        ctx.stroke();
                    }
                    else {
                        circleLock = false;
                        ctx.lineTo(cStartPoint[0], cStartPoint[1]);
                        ctx.stroke();
                        arcStack = null;
                        ctx.globalCompositeOperation = 'destination-over';
                        ctx.beginPath();
                        ctx.lineWidth = lineWidth;
                        // tslint:disable-next-line:binary-expression-operand-order
                        ctx.arc(radius, radius, bR, 0, 2 * Math.PI, true);
                        ctx.beginPath();
                        ctx.save();
                        // tslint:disable-next-line:binary-expression-operand-order
                        ctx.arc(radius, radius, radius - 3 * lineWidth, 0, 2 * Math.PI, true);
                        ctx.restore();
                        ctx.clip();
                        ctx.fillStyle = color;
                    }
                }
                else {
                    if (data >= 0.85) {
                        if (currRange > range / 4) {
                            /** @type {?} */
                            var t = range * 0.01;
                            currRange -= t;
                        }
                    }
                    else if (data <= 0.1) {
                        if (currRange < range * 1.5) {
                            /** @type {?} */
                            var t = range * 0.01;
                            currRange += t;
                        }
                    }
                    else {
                        if (currRange <= range) {
                            /** @type {?} */
                            var t = range * 0.01;
                            currRange += t;
                        }
                        if (currRange >= range) {
                            /** @type {?} */
                            var t = range * 0.01;
                            currRange -= t;
                        }
                    }
                    if (data - currData > 0) {
                        currData += waveupsp;
                    }
                    if (data - currData < 0) {
                        currData -= waveupsp;
                    }
                    sp += 0.07;
                    drawSin();
                }
                self.timer = requestAnimationFrame(render);
            }
            render();
        };
        /**
         * @private
         * @return {?}
         */
        G2WaterWaveComponent.prototype.updateRadio = /**
         * @private
         * @return {?}
         */
        function () {
            var offsetWidth = this.el.nativeElement.parentNode.offsetWidth;
            /** @type {?} */
            var radio = offsetWidth < this.height ? offsetWidth / this.height : 1;
            this.renderer.setStyle(this.el.nativeElement, 'transform', "scale(" + radio + ")");
        };
        /**
         * @private
         * @return {?}
         */
        G2WaterWaveComponent.prototype.installResizeEvent = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this.resize$ = rxjs.fromEvent(window, 'resize')
                .pipe(operators.debounceTime(200))
                .subscribe((/**
             * @return {?}
             */
            function () { return _this.updateRadio(); }));
        };
        /**
         * @return {?}
         */
        G2WaterWaveComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.installResizeEvent();
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () { return setTimeout((/**
             * @return {?}
             */
            function () { return _this.renderChart(''); }), _this.delay); }));
        };
        /**
         * @return {?}
         */
        G2WaterWaveComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () { return _this.renderChart('update'); }));
            this.cdr.detectChanges();
        };
        /**
         * @return {?}
         */
        G2WaterWaveComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            if (this.timer) {
                cancelAnimationFrame(this.timer);
            }
            (/** @type {?} */ (this.resize$)).unsubscribe();
        };
        G2WaterWaveComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'g2-water-wave',
                        exportAs: 'g2WaterWave',
                        template: "<div [ngStyle]=\"{'height.px': height, 'width.px': height, 'overflow': 'hidden'}\">\n  <canvas #container class=\"g2-water-wave__canvas\" width=\"{{height*2}}\" height=\"{{height*2}}\"></canvas>\n</div>\n<div class=\"g2-water-wave__desc\" [ngStyle]=\"{'width.px': height}\">\n  <span *ngIf=\"title\" class=\"g2-water-wave__desc-title\">\n    <ng-container *stringTemplateOutlet=\"title\">{{title}}</ng-container>\n  </span>\n  <h4 class=\"g2-water-wave__desc-percent\">{{percent}}%</h4>\n</div>\n",
                        host: { '[class.g2-water-wave]': 'true' },
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        G2WaterWaveComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: core.NgZone },
            { type: core.ChangeDetectorRef }
        ]; };
        G2WaterWaveComponent.propDecorators = {
            node: [{ type: core.ViewChild, args: ['container', { static: true },] }],
            delay: [{ type: core.Input }],
            title: [{ type: core.Input }],
            color: [{ type: core.Input }],
            height: [{ type: core.Input }],
            percent: [{ type: core.Input }]
        };
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], G2WaterWaveComponent.prototype, "delay", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], G2WaterWaveComponent.prototype, "height", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Number)
        ], G2WaterWaveComponent.prototype, "percent", void 0);
        return G2WaterWaveComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        G2WaterWaveComponent.prototype.resize$;
        /**
         * @type {?}
         * @private
         */
        G2WaterWaveComponent.prototype.node;
        /**
         * @type {?}
         * @private
         */
        G2WaterWaveComponent.prototype.timer;
        /** @type {?} */
        G2WaterWaveComponent.prototype.delay;
        /** @type {?} */
        G2WaterWaveComponent.prototype.title;
        /** @type {?} */
        G2WaterWaveComponent.prototype.color;
        /** @type {?} */
        G2WaterWaveComponent.prototype.height;
        /** @type {?} */
        G2WaterWaveComponent.prototype.percent;
        /**
         * @type {?}
         * @private
         */
        G2WaterWaveComponent.prototype.el;
        /**
         * @type {?}
         * @private
         */
        G2WaterWaveComponent.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        G2WaterWaveComponent.prototype.ngZone;
        /**
         * @type {?}
         * @private
         */
        G2WaterWaveComponent.prototype.cdr;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: water-wave.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [G2WaterWaveComponent];
    var G2WaterWaveModule = /** @class */ (function () {
        function G2WaterWaveModule() {
        }
        G2WaterWaveModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, util.DelonUtilModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return G2WaterWaveModule;
    }());

    exports.G2WaterWaveComponent = G2WaterWaveComponent;
    exports.G2WaterWaveModule = G2WaterWaveModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=water-wave.umd.js.map
