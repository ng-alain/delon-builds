/**
 * @license ng-alain(cipchk@qq.com) v2.0.1
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('rxjs/operators'), require('@angular/core'), require('@angular/common'), require('@delon/util')) :
    typeof define === 'function' && define.amd ? define('@delon/chart/water-wave', ['exports', 'rxjs', 'rxjs/operators', '@angular/core', '@angular/common', '@delon/util'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart['water-wave'] = {}),global.rxjs,global.rxjs.operators,global.ng.core,global.ng.common,global.delon.util));
}(this, (function (exports,rxjs,operators,core,common,util) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var G2WaterWaveComponent = /** @class */ (function () {
        function G2WaterWaveComponent(el, renderer, cd, zone) {
            this.el = el;
            this.renderer = renderer;
            this.cd = cd;
            this.zone = zone;
            // #region fields
            this._title = '';
            this.color = '#1890FF';
            this._height = 160;
            this.resize$ = null;
            this.initFlag = false;
        }
        Object.defineProperty(G2WaterWaveComponent.prototype, "title", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value instanceof core.TemplateRef) {
                    this._title = null;
                    this._titleTpl = value;
                }
                else {
                    this._title = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(G2WaterWaveComponent.prototype, "height", {
            get: /**
             * @return {?}
             */ function () {
                return this._height;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._height = util.toNumber(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(G2WaterWaveComponent.prototype, "percent", {
            get: /**
             * @return {?}
             */ function () {
                return this._percent;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._percent = util.toNumber(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        G2WaterWaveComponent.prototype.renderChart = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var data = this.percent / 100;
                if (!data)
                    return;
                this.node.nativeElement.innerHTML = '';
                /** @type {?} */
                var self = this;
                /** @type {?} */
                var canvas = /** @type {?} */ (this.node.nativeElement);
                /** @type {?} */
                var ctx = canvas.getContext('2d');
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
                /** @type {?} */
                var currRange = range;
                /** @type {?} */
                var xOffset = lineWidth;
                /** @type {?} */
                var sp = 0;
                /** @type {?} */
                var currData = 0;
                /** @type {?} */
                var waveupsp = 0.005;
                /** @type {?} */
                var arcStack = [];
                /** @type {?} */
                var bR = radius - lineWidth;
                /** @type {?} */
                var circleOffset = -(Math.PI / 2);
                /** @type {?} */
                var circleLock = true;
                for (var i = circleOffset; i < circleOffset + 2 * Math.PI; i += 1 / (8 * Math.PI)) {
                    arcStack.push([radius + bR * Math.cos(i), radius + bR * Math.sin(i)]);
                }
                /** @type {?} */
                var cStartPoint = arcStack.shift();
                ctx.strokeStyle = this.color;
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
                        /** @type {?} */
                        var dy = 2 * cR * (1 - currData) + (radius - cR) - unit * y;
                        ctx.lineTo(dx, dy);
                        sinStack.push([dx, dy]);
                    }
                    /** @type {?} */
                    var startPoint = sinStack.shift();
                    ctx.lineTo(xOffset + axisLength, canvasHeight);
                    ctx.lineTo(xOffset, canvasHeight);
                    ctx.lineTo(startPoint[0], startPoint[1]);
                    /** @type {?} */
                    var gradient = ctx.createLinearGradient(0, 0, 0, canvasHeight);
                    gradient.addColorStop(0, '#ffffff');
                    gradient.addColorStop(1, '#1890FF');
                    ctx.fillStyle = gradient;
                    ctx.fill();
                    ctx.restore();
                }
                /**
                 * @return {?}
                 */
                function render() {
                    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
                    if (circleLock) {
                        if (arcStack.length) {
                            /** @type {?} */
                            var temp = arcStack.shift();
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
                            ctx.arc(radius, radius, bR, 0, 2 * Math.PI, true);
                            ctx.beginPath();
                            ctx.save();
                            ctx.arc(radius, radius, radius - 3 * lineWidth, 0, 2 * Math.PI, true);
                            ctx.restore();
                            ctx.clip();
                            ctx.fillStyle = '#1890FF';
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
         * @param {?} radio
         * @return {?}
         */
        G2WaterWaveComponent.prototype.updateRadio = /**
         * @param {?} radio
         * @return {?}
         */
            function (radio) {
                this.renderer.setStyle(this.el.nativeElement, 'transform', "scale(" + radio + ")");
            };
        /**
         * @return {?}
         */
        G2WaterWaveComponent.prototype.installResizeEvent = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.resize$)
                    return;
                this.resize$ = rxjs.fromEvent(window, 'resize')
                    .pipe(operators.debounceTime(500))
                    .subscribe(function () { return _this.resize(); });
            };
        /**
         * @return {?}
         */
        G2WaterWaveComponent.prototype.resize = /**
         * @return {?}
         */
            function () {
                var offsetWidth = this.el.nativeElement.parentNode.offsetWidth;
                this.updateRadio(offsetWidth < this.height ? offsetWidth / this.height : 1);
                this.renderChart();
            };
        /**
         * @return {?}
         */
        G2WaterWaveComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.initFlag = true;
                this.cd.detectChanges();
                this.zone.runOutsideAngular(function () {
                    _this.updateRadio(1);
                    _this.installResizeEvent();
                    setTimeout(function () { return _this.resize(); }, 130);
                });
            };
        /**
         * @return {?}
         */
        G2WaterWaveComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.initFlag) {
                    this.cd.detectChanges();
                    this.zone.runOutsideAngular(function () { return _this.renderChart(); });
                }
            };
        /**
         * @return {?}
         */
        G2WaterWaveComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.timer)
                    cancelAnimationFrame(this.timer);
                if (this.resize$)
                    this.resize$.unsubscribe();
            };
        G2WaterWaveComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'g2-water-wave',
                        template: "\n  <div [ngStyle]=\"{'height.px': height, 'width.px': height, 'overflow': 'hidden'}\">\n    <canvas #container class=\"g2-water-wave__canvas\" width=\"{{height*2}}\" height=\"{{height*2}}\"></canvas>\n  </div>\n  <div class=\"g2-water-wave__desc\" [ngStyle]=\"{'width.px': height}\">\n    <ng-container *ngIf=\"_title; else _titleTpl\"><span class=\"g2-water-wave__desc-title\">{{_title}}</span></ng-container>\n    <h4 class=\"g2-water-wave__desc-percent\">{{percent}}%</h4>\n  </div>",
                        host: { '[class.g2-water-wave]': 'true' },
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        preserveWhitespaces: false
                    }] }
        ];
        /** @nocollapse */
        G2WaterWaveComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: core.ChangeDetectorRef },
                { type: core.NgZone }
            ];
        };
        G2WaterWaveComponent.propDecorators = {
            title: [{ type: core.Input }],
            color: [{ type: core.Input }],
            height: [{ type: core.Input }],
            percent: [{ type: core.Input }],
            node: [{ type: core.ViewChild, args: ['container',] }]
        };
        return G2WaterWaveComponent;
    }());

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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [G2WaterWaveComponent];
    var G2WaterWaveModule = /** @class */ (function () {
        function G2WaterWaveModule() {
        }
        /**
         * @return {?}
         */
        G2WaterWaveModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: G2WaterWaveModule, providers: [] };
            };
        G2WaterWaveModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, util.DelonUtilModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return G2WaterWaveModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.G2WaterWaveComponent = G2WaterWaveComponent;
    exports.G2WaterWaveModule = G2WaterWaveModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=water-wave.umd.js.map