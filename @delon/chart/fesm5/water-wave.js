import { Component, Input, ViewChild, ElementRef, NgZone, TemplateRef, Renderer2, ChangeDetectionStrategy, ChangeDetectorRef, NgModule } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { toNumber, DelonUtilModule } from '@delon/util';
import { __spread } from 'tslib';
import { CommonModule } from '@angular/common';

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
         */
        function (value) {
            if (value instanceof TemplateRef) {
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
         */
        function () {
            return this._height;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._height = toNumber(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G2WaterWaveComponent.prototype, "percent", {
        get: /**
         * @return {?}
         */
        function () {
            return this._percent;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._percent = toNumber(value);
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
        this.resize$ = fromEvent(window, 'resize')
            .pipe(debounceTime(500))
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
        { type: Component, args: [{
                    selector: 'g2-water-wave',
                    template: "\n  <div [ngStyle]=\"{'height.px': height, 'width.px': height, 'overflow': 'hidden'}\">\n    <canvas #container class=\"g2-water-wave__canvas\" width=\"{{height*2}}\" height=\"{{height*2}}\"></canvas>\n  </div>\n  <div class=\"g2-water-wave__desc\" [ngStyle]=\"{'width.px': height}\">\n    <ng-container *ngIf=\"_title; else _titleTpl\"><span class=\"g2-water-wave__desc-title\">{{_title}}</span></ng-container>\n    <h4 class=\"g2-water-wave__desc-percent\">{{percent}}%</h4>\n  </div>",
                    host: { '[class.g2-water-wave]': 'true' },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    G2WaterWaveComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: NgZone }
    ]; };
    G2WaterWaveComponent.propDecorators = {
        title: [{ type: Input }],
        color: [{ type: Input }],
        height: [{ type: Input }],
        percent: [{ type: Input }],
        node: [{ type: ViewChild, args: ['container',] }]
    };
    return G2WaterWaveComponent;
}());

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
        { type: NgModule, args: [{
                    imports: [CommonModule, DelonUtilModule],
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

export { G2WaterWaveComponent, G2WaterWaveModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0ZXItd2F2ZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2NoYXJ0L3dhdGVyLXdhdmUvd2F0ZXItd2F2ZS5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9jaGFydC93YXRlci13YXZlL3dhdGVyLXdhdmUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBFbGVtZW50UmVmLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkNoYW5nZXMsXHJcbiAgTmdab25lLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIE9uSW5pdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgdG9OdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2cyLXdhdGVyLXdhdmUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBbbmdTdHlsZV09XCJ7J2hlaWdodC5weCc6IGhlaWdodCwgJ3dpZHRoLnB4JzogaGVpZ2h0LCAnb3ZlcmZsb3cnOiAnaGlkZGVuJ31cIj5cclxuICAgIDxjYW52YXMgI2NvbnRhaW5lciBjbGFzcz1cImcyLXdhdGVyLXdhdmVfX2NhbnZhc1wiIHdpZHRoPVwie3toZWlnaHQqMn19XCIgaGVpZ2h0PVwie3toZWlnaHQqMn19XCI+PC9jYW52YXM+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImcyLXdhdGVyLXdhdmVfX2Rlc2NcIiBbbmdTdHlsZV09XCJ7J3dpZHRoLnB4JzogaGVpZ2h0fVwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIl90aXRsZTsgZWxzZSBfdGl0bGVUcGxcIj48c3BhbiBjbGFzcz1cImcyLXdhdGVyLXdhdmVfX2Rlc2MtdGl0bGVcIj57e190aXRsZX19PC9zcGFuPjwvbmctY29udGFpbmVyPlxyXG4gICAgPGg0IGNsYXNzPVwiZzItd2F0ZXItd2F2ZV9fZGVzYy1wZXJjZW50XCI+e3twZXJjZW50fX0lPC9oND5cclxuICA8L2Rpdj5gLFxyXG4gIGhvc3Q6IHsgJ1tjbGFzcy5nMi13YXRlci13YXZlXSc6ICd0cnVlJyB9LFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRzJXYXRlcldhdmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgT25Jbml0IHtcclxuICAvLyAjcmVnaW9uIGZpZWxkc1xyXG5cclxuICBfdGl0bGUgPSAnJztcclxuICBfdGl0bGVUcGw6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQElucHV0KClcclxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMuX3RpdGxlID0gbnVsbDtcclxuICAgICAgdGhpcy5fdGl0bGVUcGwgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIGNvbG9yID0gJyMxODkwRkYnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCBoZWlnaHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xyXG4gIH1cclxuICBzZXQgaGVpZ2h0KHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuX2hlaWdodCA9IHRvTnVtYmVyKHZhbHVlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfaGVpZ2h0ID0gMTYwO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCBwZXJjZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BlcmNlbnQ7XHJcbiAgfVxyXG4gIHNldCBwZXJjZW50KHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuX3BlcmNlbnQgPSB0b051bWJlcih2YWx1ZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX3BlcmNlbnQ6IG51bWJlcjtcclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICBwcml2YXRlIHJlc2l6ZSQ6IFN1YnNjcmlwdGlvbiA9IG51bGw7XHJcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJylcclxuICBwcml2YXRlIG5vZGU6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHByaXZhdGUgaW5pdEZsYWcgPSBmYWxzZTtcclxuICBwcml2YXRlIHRpbWVyOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXHJcbiAgKSB7fVxyXG5cclxuICBwcml2YXRlIHJlbmRlckNoYXJ0KCkge1xyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMucGVyY2VudCAvIDEwMDtcclxuICAgIGlmICghZGF0YSkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMubm9kZS5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5ub2RlLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICBjb25zdCBjYW52YXNXaWR0aCA9IGNhbnZhcy53aWR0aDtcclxuICAgIGNvbnN0IGNhbnZhc0hlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XHJcbiAgICBjb25zdCByYWRpdXMgPSBjYW52YXNXaWR0aCAvIDI7XHJcbiAgICBjb25zdCBsaW5lV2lkdGggPSAyO1xyXG4gICAgY29uc3QgY1IgPSByYWRpdXMgLSBsaW5lV2lkdGg7XHJcblxyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aCAqIDI7XHJcblxyXG4gICAgY29uc3QgYXhpc0xlbmd0aCA9IGNhbnZhc1dpZHRoIC0gbGluZVdpZHRoO1xyXG4gICAgY29uc3QgdW5pdCA9IGF4aXNMZW5ndGggLyA4O1xyXG4gICAgY29uc3QgcmFuZ2UgPSAwLjI7IC8vIMOmwozCr8OlwrnChVxyXG4gICAgbGV0IGN1cnJSYW5nZSA9IHJhbmdlO1xyXG4gICAgY29uc3QgeE9mZnNldCA9IGxpbmVXaWR0aDtcclxuICAgIGxldCBzcCA9IDA7IC8vIMOlwpHCqMOmwpzCn8OlwoHCj8OnwqfCu8OpwofCj1xyXG4gICAgbGV0IGN1cnJEYXRhID0gMDtcclxuICAgIGNvbnN0IHdhdmV1cHNwID0gMC4wMDU7IC8vIMOmwrDCtMOmwrPCosOkwrjCisOmwrbCqMOpwoDCn8OlwrrCplxyXG5cclxuICAgIGxldCBhcmNTdGFjayA9IFtdO1xyXG4gICAgY29uc3QgYlIgPSByYWRpdXMgLSBsaW5lV2lkdGg7XHJcbiAgICBjb25zdCBjaXJjbGVPZmZzZXQgPSAtKE1hdGguUEkgLyAyKTtcclxuICAgIGxldCBjaXJjbGVMb2NrID0gdHJ1ZTtcclxuXHJcbiAgICBmb3IgKFxyXG4gICAgICBsZXQgaSA9IGNpcmNsZU9mZnNldDtcclxuICAgICAgaSA8IGNpcmNsZU9mZnNldCArIDIgKiBNYXRoLlBJO1xyXG4gICAgICBpICs9IDEgLyAoOCAqIE1hdGguUEkpXHJcbiAgICApIHtcclxuICAgICAgYXJjU3RhY2sucHVzaChbcmFkaXVzICsgYlIgKiBNYXRoLmNvcyhpKSwgcmFkaXVzICsgYlIgKiBNYXRoLnNpbihpKV0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNTdGFydFBvaW50ID0gYXJjU3RhY2suc2hpZnQoKTtcclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICBjdHgubW92ZVRvKGNTdGFydFBvaW50WzBdLCBjU3RhcnRQb2ludFsxXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZHJhd1NpbigpIHtcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHguc2F2ZSgpO1xyXG5cclxuICAgICAgY29uc3Qgc2luU3RhY2sgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IHhPZmZzZXQ7IGkgPD0geE9mZnNldCArIGF4aXNMZW5ndGg7IGkgKz0gMjAgLyBheGlzTGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IHNwICsgKHhPZmZzZXQgKyBpKSAvIHVuaXQ7XHJcbiAgICAgICAgY29uc3QgeSA9IE1hdGguc2luKHgpICogY3VyclJhbmdlO1xyXG4gICAgICAgIGNvbnN0IGR4ID0gaTtcclxuICAgICAgICBjb25zdCBkeSA9IDIgKiBjUiAqICgxIC0gY3VyckRhdGEpICsgKHJhZGl1cyAtIGNSKSAtIHVuaXQgKiB5O1xyXG5cclxuICAgICAgICBjdHgubGluZVRvKGR4LCBkeSk7XHJcbiAgICAgICAgc2luU3RhY2sucHVzaChbZHgsIGR5XSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHN0YXJ0UG9pbnQgPSBzaW5TdGFjay5zaGlmdCgpO1xyXG5cclxuICAgICAgY3R4LmxpbmVUbyh4T2Zmc2V0ICsgYXhpc0xlbmd0aCwgY2FudmFzSGVpZ2h0KTtcclxuICAgICAgY3R4LmxpbmVUbyh4T2Zmc2V0LCBjYW52YXNIZWlnaHQpO1xyXG4gICAgICBjdHgubGluZVRvKHN0YXJ0UG9pbnRbMF0sIHN0YXJ0UG9pbnRbMV0pO1xyXG5cclxuICAgICAgY29uc3QgZ3JhZGllbnQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgMCwgY2FudmFzSGVpZ2h0KTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsICcjZmZmZmZmJyk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCAnIzE4OTBGRicpO1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XHJcbiAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVuZGVyKCkge1xyXG4gICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpO1xyXG4gICAgICBpZiAoY2lyY2xlTG9jaykge1xyXG4gICAgICAgIGlmIChhcmNTdGFjay5sZW5ndGgpIHtcclxuICAgICAgICAgIGNvbnN0IHRlbXAgPSBhcmNTdGFjay5zaGlmdCgpO1xyXG4gICAgICAgICAgY3R4LmxpbmVUbyh0ZW1wWzBdLCB0ZW1wWzFdKTtcclxuICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY2lyY2xlTG9jayA9IGZhbHNlO1xyXG4gICAgICAgICAgY3R4LmxpbmVUbyhjU3RhcnRQb2ludFswXSwgY1N0YXJ0UG9pbnRbMV0pO1xyXG4gICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgICAgYXJjU3RhY2sgPSBudWxsO1xyXG5cclxuICAgICAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3Zlcic7XHJcbiAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoO1xyXG4gICAgICAgICAgY3R4LmFyYyhyYWRpdXMsIHJhZGl1cywgYlIsIDAsIDIgKiBNYXRoLlBJLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgICAgY3R4LmFyYyhyYWRpdXMsIHJhZGl1cywgcmFkaXVzIC0gMyAqIGxpbmVXaWR0aCwgMCwgMiAqIE1hdGguUEksIHRydWUpO1xyXG5cclxuICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgICBjdHguY2xpcCgpO1xyXG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjMTg5MEZGJztcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGRhdGEgPj0gMC44NSkge1xyXG4gICAgICAgICAgaWYgKGN1cnJSYW5nZSA+IHJhbmdlIC8gNCkge1xyXG4gICAgICAgICAgICBjb25zdCB0ID0gcmFuZ2UgKiAwLjAxO1xyXG4gICAgICAgICAgICBjdXJyUmFuZ2UgLT0gdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGRhdGEgPD0gMC4xKSB7XHJcbiAgICAgICAgICBpZiAoY3VyclJhbmdlIDwgcmFuZ2UgKiAxLjUpIHtcclxuICAgICAgICAgICAgY29uc3QgdCA9IHJhbmdlICogMC4wMTtcclxuICAgICAgICAgICAgY3VyclJhbmdlICs9IHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChjdXJyUmFuZ2UgPD0gcmFuZ2UpIHtcclxuICAgICAgICAgICAgY29uc3QgdCA9IHJhbmdlICogMC4wMTtcclxuICAgICAgICAgICAgY3VyclJhbmdlICs9IHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoY3VyclJhbmdlID49IHJhbmdlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHQgPSByYW5nZSAqIDAuMDE7XHJcbiAgICAgICAgICAgIGN1cnJSYW5nZSAtPSB0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGF0YSAtIGN1cnJEYXRhID4gMCkge1xyXG4gICAgICAgICAgY3VyckRhdGEgKz0gd2F2ZXVwc3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRhIC0gY3VyckRhdGEgPCAwKSB7XHJcbiAgICAgICAgICBjdXJyRGF0YSAtPSB3YXZldXBzcDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNwICs9IDAuMDc7XHJcbiAgICAgICAgZHJhd1NpbigpO1xyXG4gICAgICB9XHJcbiAgICAgIHNlbGYudGltZXIgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlUmFkaW8ocmFkaW86IG51bWJlcikge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAndHJhbnNmb3JtJyxcclxuICAgICAgYHNjYWxlKCR7cmFkaW99KWAsXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbnN0YWxsUmVzaXplRXZlbnQoKSB7XHJcbiAgICBpZiAodGhpcy5yZXNpemUkKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5yZXNpemUkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpXHJcbiAgICAgIC5waXBlKGRlYm91bmNlVGltZSg1MDApKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVzaXplKCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZXNpemUoKSB7XHJcbiAgICBjb25zdCB7IG9mZnNldFdpZHRoIH0gPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZTtcclxuICAgIHRoaXMudXBkYXRlUmFkaW8ob2Zmc2V0V2lkdGggPCB0aGlzLmhlaWdodCA/IG9mZnNldFdpZHRoIC8gdGhpcy5oZWlnaHQgOiAxKTtcclxuICAgIHRoaXMucmVuZGVyQ2hhcnQoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbml0RmxhZyA9IHRydWU7XHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIHRoaXMudXBkYXRlUmFkaW8oMSk7XHJcbiAgICAgIHRoaXMuaW5zdGFsbFJlc2l6ZUV2ZW50KCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZXNpemUoKSwgMTMwKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbml0RmxhZykge1xyXG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMucmVuZGVyQ2hhcnQoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRpbWVyKSBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnRpbWVyKTtcclxuICAgIGlmICh0aGlzLnJlc2l6ZSQpIHRoaXMucmVzaXplJC51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBEZWxvblV0aWxNb2R1bGUgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBHMldhdGVyV2F2ZUNvbXBvbmVudCB9IGZyb20gJy4vd2F0ZXItd2F2ZS5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgQ09NUE9ORU5UUyA9IFtHMldhdGVyV2F2ZUNvbXBvbmVudF07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIERlbG9uVXRpbE1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXHJcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRzJXYXRlcldhdmVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IEcyV2F0ZXJXYXZlTW9kdWxlLCBwcm92aWRlcnM6IFtdIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0lBNkVFLDhCQUNVLElBQ0EsVUFDQSxJQUNBO1FBSEEsT0FBRSxHQUFGLEVBQUU7UUFDRixhQUFRLEdBQVIsUUFBUTtRQUNSLE9BQUUsR0FBRixFQUFFO1FBQ0YsU0FBSSxHQUFKLElBQUk7O3NCQTlDTCxFQUFFO3FCQWFILFNBQVM7dUJBU0MsR0FBRzt1QkFhVyxJQUFJO3dCQUlqQixLQUFLO0tBUXBCO0lBN0NKLHNCQUNJLHVDQUFLOzs7OztRQURULFVBQ1UsS0FBZ0M7WUFDeEMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDeEI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDckI7U0FDRjs7O09BQUE7SUFLRCxzQkFDSSx3Q0FBTTs7OztRQURWO1lBRUUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3JCOzs7OztRQUNELFVBQVcsS0FBVTtZQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQzs7O09BSEE7SUFNRCxzQkFDSSx5Q0FBTzs7OztRQURYO1lBRUUsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3RCOzs7OztRQUNELFVB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