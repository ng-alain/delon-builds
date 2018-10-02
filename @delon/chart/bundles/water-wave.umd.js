/**
 * @license ng-alain(cipchk@qq.com) v2.0.0-beta.3-ed90aa6
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@delon/util'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@delon/chart/water-wave', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@delon/util', '@angular/common'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart['water-wave'] = {}),global.ng.core,global.rxjs,global.rxjs.operators,global.delon.util,global.ng.common));
}(this, (function (exports,core,rxjs,operators,util,common) { 'use strict';

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0ZXItd2F2ZS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9jaGFydC93YXRlci13YXZlL3dhdGVyLXdhdmUuY29tcG9uZW50LnRzIiwibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQGRlbG9uL2NoYXJ0L3dhdGVyLXdhdmUvd2F0ZXItd2F2ZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBOZ1pvbmUsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgT25Jbml0LFxyXG4gIFJlbmRlcmVyMixcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyB0b051bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZzItd2F0ZXItd2F2ZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8ZGl2IFtuZ1N0eWxlXT1cInsnaGVpZ2h0LnB4JzogaGVpZ2h0LCAnd2lkdGgucHgnOiBoZWlnaHQsICdvdmVyZmxvdyc6ICdoaWRkZW4nfVwiPlxyXG4gICAgPGNhbnZhcyAjY29udGFpbmVyIGNsYXNzPVwiZzItd2F0ZXItd2F2ZV9fY2FudmFzXCIgd2lkdGg9XCJ7e2hlaWdodCoyfX1cIiBoZWlnaHQ9XCJ7e2hlaWdodCoyfX1cIj48L2NhbnZhcz5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiZzItd2F0ZXItd2F2ZV9fZGVzY1wiIFtuZ1N0eWxlXT1cInsnd2lkdGgucHgnOiBoZWlnaHR9XCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiX3RpdGxlOyBlbHNlIF90aXRsZVRwbFwiPjxzcGFuIGNsYXNzPVwiZzItd2F0ZXItd2F2ZV9fZGVzYy10aXRsZVwiPnt7X3RpdGxlfX08L3NwYW4+PC9uZy1jb250YWluZXI+XHJcbiAgICA8aDQgY2xhc3M9XCJnMi13YXRlci13YXZlX19kZXNjLXBlcmNlbnRcIj57e3BlcmNlbnR9fSU8L2g0PlxyXG4gIDwvZGl2PmAsXHJcbiAgaG9zdDogeyAnW2NsYXNzLmcyLXdhdGVyLXdhdmVdJzogJ3RydWUnIH0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHMldhdGVyV2F2ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBPbkluaXQge1xyXG4gIC8vICNyZWdpb24gZmllbGRzXHJcblxyXG4gIF90aXRsZSA9ICcnO1xyXG4gIF90aXRsZVRwbDogVGVtcGxhdGVSZWY8YW55PjtcclxuICBASW5wdXQoKVxyXG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy5fdGl0bGUgPSBudWxsO1xyXG4gICAgICB0aGlzLl90aXRsZVRwbCA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY29sb3IgPSAnIzE4OTBGRic7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGhlaWdodCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XHJcbiAgfVxyXG4gIHNldCBoZWlnaHQodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5faGVpZ2h0ID0gdG9OdW1iZXIodmFsdWUpO1xyXG4gIH1cclxuICBwcml2YXRlIF9oZWlnaHQgPSAxNjA7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHBlcmNlbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGVyY2VudDtcclxuICB9XHJcbiAgc2V0IHBlcmNlbnQodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5fcGVyY2VudCA9IHRvTnVtYmVyKHZhbHVlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfcGVyY2VudDogbnVtYmVyO1xyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIHByaXZhdGUgcmVzaXplJDogU3Vic2NyaXB0aW9uID0gbnVsbDtcclxuICBAVmlld0NoaWxkKCdjb250YWluZXInKVxyXG4gIHByaXZhdGUgbm9kZTogRWxlbWVudFJlZjtcclxuXHJcbiAgcHJpdmF0ZSBpbml0RmxhZyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgdGltZXI6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcclxuICApIHt9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyQ2hhcnQoKSB7XHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5wZXJjZW50IC8gMTAwO1xyXG4gICAgaWYgKCFkYXRhKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5ub2RlLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBjb25zdCBzZWxmID0gdGhpcztcclxuXHJcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLm5vZGUubmF0aXZlRWxlbWVudCBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgIGNvbnN0IGNhbnZhc1dpZHRoID0gY2FudmFzLndpZHRoO1xyXG4gICAgY29uc3QgY2FudmFzSGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcclxuICAgIGNvbnN0IHJhZGl1cyA9IGNhbnZhc1dpZHRoIC8gMjtcclxuICAgIGNvbnN0IGxpbmVXaWR0aCA9IDI7XHJcbiAgICBjb25zdCBjUiA9IHJhZGl1cyAtIGxpbmVXaWR0aDtcclxuXHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoICogMjtcclxuXHJcbiAgICBjb25zdCBheGlzTGVuZ3RoID0gY2FudmFzV2lkdGggLSBsaW5lV2lkdGg7XHJcbiAgICBjb25zdCB1bml0ID0gYXhpc0xlbmd0aCAvIDg7XHJcbiAgICBjb25zdCByYW5nZSA9IDAuMjsgLy8gw6bCjMKvw6XCucKFXHJcbiAgICBsZXQgY3VyclJhbmdlID0gcmFuZ2U7XHJcbiAgICBjb25zdCB4T2Zmc2V0ID0gbGluZVdpZHRoO1xyXG4gICAgbGV0IHNwID0gMDsgLy8gw6XCkcKow6bCnMKfw6XCgcKPw6fCp8K7w6nCh8KPXHJcbiAgICBsZXQgY3VyckRhdGEgPSAwO1xyXG4gICAgY29uc3Qgd2F2ZXVwc3AgPSAwLjAwNTsgLy8gw6bCsMK0w6bCs8Kiw6TCuMKKw6bCtsKow6nCgMKfw6XCusKmXHJcblxyXG4gICAgbGV0IGFyY1N0YWNrID0gW107XHJcbiAgICBjb25zdCBiUiA9IHJhZGl1cyAtIGxpbmVXaWR0aDtcclxuICAgIGNvbnN0IGNpcmNsZU9mZnNldCA9IC0oTWF0aC5QSSAvIDIpO1xyXG4gICAgbGV0IGNpcmNsZUxvY2sgPSB0cnVlO1xyXG5cclxuICAgIGZvciAoXHJcbiAgICAgIGxldCBpID0gY2lyY2xlT2Zmc2V0O1xyXG4gICAgICBpIDwgY2lyY2xlT2Zmc2V0ICsgMiAqIE1hdGguUEk7XHJcbiAgICAgIGkgKz0gMSAvICg4ICogTWF0aC5QSSlcclxuICAgICkge1xyXG4gICAgICBhcmNTdGFjay5wdXNoKFtyYWRpdXMgKyBiUiAqIE1hdGguY29zKGkpLCByYWRpdXMgKyBiUiAqIE1hdGguc2luKGkpXSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY1N0YXJ0UG9pbnQgPSBhcmNTdGFjay5zaGlmdCgpO1xyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgIGN0eC5tb3ZlVG8oY1N0YXJ0UG9pbnRbMF0sIGNTdGFydFBvaW50WzFdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBkcmF3U2luKCkge1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5zYXZlKCk7XHJcblxyXG4gICAgICBjb25zdCBzaW5TdGFjayA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0geE9mZnNldDsgaSA8PSB4T2Zmc2V0ICsgYXhpc0xlbmd0aDsgaSArPSAyMCAvIGF4aXNMZW5ndGgpIHtcclxuICAgICAgICBjb25zdCB4ID0gc3AgKyAoeE9mZnNldCArIGkpIC8gdW5pdDtcclxuICAgICAgICBjb25zdCB5ID0gTWF0aC5zaW4oeCkgKiBjdXJyUmFuZ2U7XHJcbiAgICAgICAgY29uc3QgZHggPSBpO1xyXG4gICAgICAgIGNvbnN0IGR5ID0gMiAqIGNSICogKDEgLSBjdXJyRGF0YSkgKyAocmFkaXVzIC0gY1IpIC0gdW5pdCAqIHk7XHJcblxyXG4gICAgICAgIGN0eC5saW5lVG8oZHgsIGR5KTtcclxuICAgICAgICBzaW5TdGFjay5wdXNoKFtkeCwgZHldKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3Qgc3RhcnRQb2ludCA9IHNpblN0YWNrLnNoaWZ0KCk7XHJcblxyXG4gICAgICBjdHgubGluZVRvKHhPZmZzZXQgKyBheGlzTGVuZ3RoLCBjYW52YXNIZWlnaHQpO1xyXG4gICAgICBjdHgubGluZVRvKHhPZmZzZXQsIGNhbnZhc0hlaWdodCk7XHJcbiAgICAgIGN0eC5saW5lVG8oc3RhcnRQb2ludFswXSwgc3RhcnRQb2ludFsxXSk7XHJcblxyXG4gICAgICBjb25zdCBncmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCAwLCBjYW52YXNIZWlnaHQpO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgJyNmZmZmZmYnKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsICcjMTg5MEZGJyk7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBncmFkaWVudDtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW5kZXIoKSB7XHJcbiAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCk7XHJcbiAgICAgIGlmIChjaXJjbGVMb2NrKSB7XHJcbiAgICAgICAgaWYgKGFyY1N0YWNrLmxlbmd0aCkge1xyXG4gICAgICAgICAgY29uc3QgdGVtcCA9IGFyY1N0YWNrLnNoaWZ0KCk7XHJcbiAgICAgICAgICBjdHgubGluZVRvKHRlbXBbMF0sIHRlbXBbMV0pO1xyXG4gICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjaXJjbGVMb2NrID0gZmFsc2U7XHJcbiAgICAgICAgICBjdHgubGluZVRvKGNTdGFydFBvaW50WzBdLCBjU3RhcnRQb2ludFsxXSk7XHJcbiAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgICBhcmNTdGFjayA9IG51bGw7XHJcblxyXG4gICAgICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1vdmVyJztcclxuICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgIGN0eC5saW5lV2lkdGggPSBsaW5lV2lkdGg7XHJcbiAgICAgICAgICBjdHguYXJjKHJhZGl1cywgcmFkaXVzLCBiUiwgMCwgMiAqIE1hdGguUEksIHRydWUpO1xyXG5cclxuICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgICBjdHguYXJjKHJhZGl1cywgcmFkaXVzLCByYWRpdXMgLSAzICogbGluZVdpZHRoLCAwLCAyICogTWF0aC5QSSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICAgIGN0eC5jbGlwKCk7XHJcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJyMxODkwRkYnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoZGF0YSA+PSAwLjg1KSB7XHJcbiAgICAgICAgICBpZiAoY3VyclJhbmdlID4gcmFuZ2UgLyA0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHQgPSByYW5nZSAqIDAuMDE7XHJcbiAgICAgICAgICAgIGN1cnJSYW5nZSAtPSB0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YSA8PSAwLjEpIHtcclxuICAgICAgICAgIGlmIChjdXJyUmFuZ2UgPCByYW5nZSAqIDEuNSkge1xyXG4gICAgICAgICAgICBjb25zdCB0ID0gcmFuZ2UgKiAwLjAxO1xyXG4gICAgICAgICAgICBjdXJyUmFuZ2UgKz0gdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKGN1cnJSYW5nZSA8PSByYW5nZSkge1xyXG4gICAgICAgICAgICBjb25zdCB0ID0gcmFuZ2UgKiAwLjAxO1xyXG4gICAgICAgICAgICBjdXJyUmFuZ2UgKz0gdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChjdXJyUmFuZ2UgPj0gcmFuZ2UpIHtcclxuICAgICAgICAgICAgY29uc3QgdCA9IHJhbmdlICogMC4wMTtcclxuICAgICAgICAgICAgY3VyclJhbmdlIC09IHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRhIC0gY3VyckRhdGEgPiAwKSB7XHJcbiAgICAgICAgICBjdXJyRGF0YSArPSB3YXZldXBzcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRhdGEgLSBjdXJyRGF0YSA8IDApIHtcclxuICAgICAgICAgIGN1cnJEYXRhIC09IHdhdmV1cHNwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3AgKz0gMC4wNztcclxuICAgICAgICBkcmF3U2luKCk7XHJcbiAgICAgIH1cclxuICAgICAgc2VsZi50aW1lciA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVSYWRpbyhyYWRpbzogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICd0cmFuc2Zvcm0nLFxyXG4gICAgICBgc2NhbGUoJHtyYWRpb30pYCxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluc3RhbGxSZXNpemVFdmVudCgpIHtcclxuICAgIGlmICh0aGlzLnJlc2l6ZSQpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLnJlc2l6ZSQgPSBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcclxuICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDUwMCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZXNpemUoKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc2l6ZSgpIHtcclxuICAgIGNvbnN0IHsgb2Zmc2V0V2lkdGggfSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlO1xyXG4gICAgdGhpcy51cGRhdGVSYWRpbyhvZmZzZXRXaWR0aCA8IHRoaXMuaGVpZ2h0ID8gb2Zmc2V0V2lkdGggLyB0aGlzLmhlaWdodCA6IDEpO1xyXG4gICAgdGhpcy5yZW5kZXJDaGFydCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmluaXRGbGFnID0gdHJ1ZTtcclxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgdGhpcy51cGRhdGVSYWRpbygxKTtcclxuICAgICAgdGhpcy5pbnN0YWxsUmVzaXplRXZlbnQoKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlc2l6ZSgpLCAxMzApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmluaXRGbGFnKSB7XHJcbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5yZW5kZXJDaGFydCgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudGltZXIpIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMudGltZXIpO1xyXG4gICAgaWYgKHRoaXMucmVzaXplJCkgdGhpcy5yZXNpemUkLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG59XHJcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgRzJXYXRlcldhdmVDb21wb25lbnQgfSBmcm9tICcuL3dhdGVyLXdhdmUuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IENPTVBPTkVOVFMgPSBbRzJXYXRlcldhdmVDb21wb25lbnRdO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBEZWxvblV0aWxNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFNdLFxyXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEcyV2F0ZXJXYXZlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7IG5nTW9kdWxlOiBHMldhdGVyV2F2ZU1vZHVsZSwgcHJvdmlkZXJzOiBbXSB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiVGVtcGxhdGVSZWYiLCJ0b051bWJlciIsImZyb21FdmVudCIsImRlYm91bmNlVGltZSIsIkNvbXBvbmVudCIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiRWxlbWVudFJlZiIsIlJlbmRlcmVyMiIsIkNoYW5nZURldGVjdG9yUmVmIiwiTmdab25lIiwiSW5wdXQiLCJWaWV3Q2hpbGQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkRlbG9uVXRpbE1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBNkVFLDhCQUNVLElBQ0EsVUFDQSxJQUNBO1lBSEEsT0FBRSxHQUFGLEVBQUU7WUFDRixhQUFRLEdBQVIsUUFBUTtZQUNSLE9BQUUsR0FBRixFQUFFO1lBQ0YsU0FBSSxHQUFKLElBQUk7OzBCQTlDTCxFQUFFO3lCQWFILFNBQVM7MkJBU0MsR0FBRzsyQkFhVyxJQUFJOzRCQUlqQixLQUFLO1NBUXBCO1FBN0NKLHNCQUNJLHVDQUFLOzs7O2dCQURULFVBQ1UsS0FBZ0M7Z0JBQ3hDLElBQUksS0FBSyxZQUFZQSxnQkFBVyxFQUFFO29CQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7aUJBQ3hCO3FCQUFNO29CQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2lCQUNyQjthQUNGOzs7V0FBQTtRQUtELHNCQUNJLHdDQUFNOzs7Z0JBRFY7Z0JBRUUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ3JCOzs7O2dCQUNELFVBQVcsS0FBVTtnQkFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBR0MsYUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2hDOzs7V0FIQTtRQU1ELHNCQUNJLHlDQUFPOzs7Z0JBRFg7Z0JBRUUsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQ3RCOzs7O2dCQUNELFVBQVksS0FBVTtnQkFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBR0EsYUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2pDOzs7V0FIQTs7OztRQXNCTywwQ0FBVzs7Ozs7Z0JBQ2pCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO2dCQUNoQyxJQUFJLENB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