/**
 * @license ng-alain(cipchk@qq.com) v7.3.0
 * (c) 2019 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/util'), require('rxjs'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@delon/chart/water-wave', ['exports', '@angular/core', '@delon/util', 'rxjs', 'rxjs/operators', '@angular/common'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart['water-wave'] = {}), global.ng.core, global.delon.util, global.rxjs, global.rxjs.operators, global.ng.common));
}(this, function (exports, core, util, rxjs, operators, common) { 'use strict';

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

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            this.updateRadio();
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
                        changeDetection: core.ChangeDetectionStrategy.OnPush
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
            node: [{ type: core.ViewChild, args: ['container',] }],
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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

}));
//# sourceMappingURL=water-wave.umd.js.map
