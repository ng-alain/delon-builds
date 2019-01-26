/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, NgZone, Renderer2, ViewChild, } from '@angular/core';
import { InputNumber } from '@delon/util';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
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
     * @param {?} type
     * @return {?}
     */
    G2WaterWaveComponent.prototype.renderChart = /**
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
        var cStartPoint = arcStack.shift();
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
            var startPoint = sinStack.shift();
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
     * @return {?}
     */
    G2WaterWaveComponent.prototype.updateRadio = /**
     * @return {?}
     */
    function () {
        var offsetWidth = this.el.nativeElement.parentNode.offsetWidth;
        /** @type {?} */
        var radio = offsetWidth < this.height ? offsetWidth / this.height : 1;
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
        this.resize$ = fromEvent(window, 'resize')
            .pipe(debounceTime(200))
            .subscribe(function () { return _this.updateRadio(); });
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
        this.ngZone.runOutsideAngular(function () { return setTimeout(function () { return _this.renderChart(''); }, _this.delay); });
    };
    /**
     * @return {?}
     */
    G2WaterWaveComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () { return _this.renderChart('update'); });
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
        this.resize$.unsubscribe();
    };
    G2WaterWaveComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-water-wave',
                    template: "<div [ngStyle]=\"{'height.px': height, 'width.px': height, 'overflow': 'hidden'}\">\n  <canvas #container class=\"g2-water-wave__canvas\" width=\"{{height*2}}\" height=\"{{height*2}}\"></canvas>\n</div>\n<div class=\"g2-water-wave__desc\" [ngStyle]=\"{'width.px': height}\">\n  <span *ngIf=\"title\" class=\"g2-water-wave__desc-title\">\n    <ng-container *stringTemplateOutlet=\"title\">{{title}}</ng-container>\n  </span>\n  <h4 class=\"g2-water-wave__desc-percent\">{{percent}}%</h4>\n</div>\n",
                    host: { '[class.g2-water-wave]': 'true' },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    G2WaterWaveComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NgZone },
        { type: ChangeDetectorRef }
    ]; };
    G2WaterWaveComponent.propDecorators = {
        node: [{ type: ViewChild, args: ['container',] }],
        delay: [{ type: Input }],
        title: [{ type: Input }],
        color: [{ type: Input }],
        height: [{ type: Input }],
        percent: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2WaterWaveComponent.prototype, "delay", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2WaterWaveComponent.prototype, "height", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Number)
    ], G2WaterWaveComponent.prototype, "percent", void 0);
    return G2WaterWaveComponent;
}());
export { G2WaterWaveComponent };
if (false) {
    /** @type {?} */
    G2WaterWaveComponent.prototype.resize$;
    /** @type {?} */
    G2WaterWaveComponent.prototype.node;
    /** @type {?} */
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
    /** @type {?} */
    G2WaterWaveComponent.prototype.el;
    /** @type {?} */
    G2WaterWaveComponent.prototype.renderer;
    /** @type {?} */
    G2WaterWaveComponent.prototype.ngZone;
    /** @type {?} */
    G2WaterWaveComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0ZXItd2F2ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vY2hhcnQvd2F0ZXItd2F2ZS8iLCJzb3VyY2VzIjpbIndhdGVyLXdhdmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUlOLFNBQVMsRUFFVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUM7SUFtQkUsYUFBYTtJQUViLDhCQUNVLEVBQWMsRUFDZCxRQUFtQixFQUNuQixNQUFjLEVBQ2QsR0FBc0I7UUFIdEIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBbEJ4QixZQUFPLEdBQWlCLElBQUksQ0FBQzs7UUFNYixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRXpCLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDSCxXQUFNLEdBQUcsR0FBRyxDQUFDO0lBVWxDLENBQUM7Ozs7O0lBRUksMENBQVc7Ozs7SUFBbkIsVUFBb0IsSUFBWTtRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBRXBCLElBQUEsU0FBK0IsRUFBN0Isb0JBQU8sRUFBRSxnQkFBSyxFQUFFLGNBQWE7O1lBRS9CLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFB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O3dCQUtyQixLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7O0lBSmtCO1FBQWQsV0FBVyxFQUFFOzt1REFBVztJQUdWO1FBQWQsV0FBVyxFQUFFOzt3REFBYztJQUNiO1FBQWQsV0FBVyxFQUFFOzt5REFBaUI7SUFrTDFDLDJCQUFDO0NBQUEsQUFuTUQsSUFtTUM7U0E3TFksb0JBQW9COzs7SUFDL0IsdUNBQXFDOztJQUNyQyxvQ0FBaUQ7O0lBQ2pELHFDQUFzQjs7SUFJdEIscUNBQWtDOztJQUNsQyxxQ0FBMkM7O0lBQzNDLHFDQUEyQjs7SUFDM0Isc0NBQXFDOztJQUNyQyx1Q0FBd0M7O0lBS3RDLGtDQUFzQjs7SUFDdEIsd0NBQTJCOztJQUMzQixzQ0FBc0I7O0lBQ3RCLG1DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi13YXRlci13YXZlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dhdGVyLXdhdmUuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7ICdbY2xhc3MuZzItd2F0ZXItd2F2ZV0nOiAndHJ1ZScgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEcyV2F0ZXJXYXZlQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIHByaXZhdGUgcmVzaXplJDogU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJykgcHJpdmF0ZSBub2RlOiBFbGVtZW50UmVmO1xuICBwcml2YXRlIHRpbWVyOiBudW1iZXI7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBkZWxheSA9IDA7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgY29sb3IgPSAnIzE4OTBGRic7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGhlaWdodCA9IDE2MDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgcGVyY2VudDogbnVtYmVyO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgKSB7fVxuXG4gIHByaXZhdGUgcmVuZGVyQ2hhcnQodHlwZTogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLnJlc2l6ZSQpIHJldHVybjtcblxuICAgIGNvbnN0IHsgcGVyY2VudCwgY29sb3IsIG5vZGUgfSA9IHRoaXM7XG5cbiAgICBjb25zdCBkYXRhID0gTWF0aC5taW4oTWF0aC5tYXgocGVyY2VudCAvIDEwMCwgMCksIDEwMCk7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy50aW1lcik7XG5cbiAgICBjb25zdCBjYW52YXMgPSBub2RlLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY29uc3QgY2FudmFzV2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgY29uc3QgY2FudmFzSGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgICBjb25zdCByYWRpdXMgPSBjYW52YXNXaWR0aCAvIDI7XG4gICAgY29uc3QgbGluZVdpZHRoID0gMjtcbiAgICBjb25zdCBjUiA9IHJhZGl1cyAtIGxpbmVXaWR0aDtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoICogMjtcblxuICAgIGNvbnN0IGF4aXNMZW5ndGggPSBjYW52YXNXaWR0aCAtIGxpbmVXaWR0aDtcbiAgICBjb25zdCB1bml0ID0gYXhpc0xlbmd0aCAvIDg7XG4gICAgY29uc3QgcmFuZ2UgPSAwLjI7IC8vIOaMr+W5hVxuICAgIGxldCBjdXJyUmFuZ2UgPSByYW5nZTtcbiAgICBjb25zdCB4T2Zmc2V0ID0gbGluZVdpZHRoO1xuICAgIGxldCBzcCA9IDA7IC8vIOWRqOacn+WBj+enu+mHj1xuICAgIGxldCBjdXJyRGF0YSA9IDA7XG4gICAgY29uc3Qgd2F2ZXVwc3AgPSAwLjAwNTsgLy8g5rC05rOi5LiK5rao6YCf5bqmXG5cbiAgICBsZXQgYXJjU3RhY2sgPSBbXTtcbiAgICBjb25zdCBiUiA9IHJhZGl1cyAtIGxpbmVXaWR0aDtcbiAgICBjb25zdCBjaXJjbGVPZmZzZXQgPSAtKE1hdGguUEkgLyAyKTtcbiAgICBsZXQgY2lyY2xlTG9jayA9IHRydWU7XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6YmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlclxuICAgIGZvciAobGV0IGkgPSBjaXJjbGVPZmZzZXQ7IGkgPCBjaXJjbGVPZmZzZXQgKyAyICogTWF0aC5QSTsgaSArPSAxIC8gKDggKiBNYXRoLlBJKSkge1xuICAgICAgYXJjU3RhY2sucHVzaChbcmFkaXVzICsgYlIgKiBNYXRoLmNvcyhpKSwgcmFkaXVzICsgYlIgKiBNYXRoLnNpbihpKV0pO1xuICAgIH1cblxuICAgIGNvbnN0IGNTdGFydFBvaW50ID0gYXJjU3RhY2suc2hpZnQoKTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICBjdHgubW92ZVRvKGNTdGFydFBvaW50WzBdLCBjU3RhcnRQb2ludFsxXSk7XG5cbiAgICBmdW5jdGlvbiBkcmF3U2luKCkge1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LnNhdmUoKTtcblxuICAgICAgY29uc3Qgc2luU3RhY2sgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSB4T2Zmc2V0OyBpIDw9IHhPZmZzZXQgKyBheGlzTGVuZ3RoOyBpICs9IDIwIC8gYXhpc0xlbmd0aCkge1xuICAgICAgICBjb25zdCB4ID0gc3AgKyAoeE9mZnNldCArIGkpIC8gdW5pdDtcbiAgICAgICAgY29uc3QgeSA9IE1hdGguc2luKHgpICogY3VyclJhbmdlO1xuICAgICAgICBjb25zdCBkeCA9IGk7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyXG4gICAgICAgIGNvbnN0IGR5ID0gMiAqIGNSICogKDEgLSBjdXJyRGF0YSkgKyAocmFkaXVzIC0gY1IpIC0gdW5pdCAqIHk7XG5cbiAgICAgICAgY3R4LmxpbmVUbyhkeCwgZHkpO1xuICAgICAgICBzaW5TdGFjay5wdXNoKFtkeCwgZHldKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc3RhcnRQb2ludCA9IHNpblN0YWNrLnNoaWZ0KCk7XG5cbiAgICAgIGN0eC5saW5lVG8oeE9mZnNldCArIGF4aXNMZW5ndGgsIGNhbnZhc0hlaWdodCk7XG4gICAgICBjdHgubGluZVRvKHhPZmZzZXQsIGNhbnZhc0hlaWdodCk7XG4gICAgICBjdHgubGluZVRvKHN0YXJ0UG9pbnRbMF0sIHN0YXJ0UG9pbnRbMV0pO1xuXG4gICAgICBjb25zdCBncmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCAwLCBjYW52YXNIZWlnaHQpO1xuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsICcjZmZmZmZmJyk7XG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgY29sb3IpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KTtcbiAgICAgIGlmIChjaXJjbGVMb2NrICYmIHR5cGUgIT09ICd1cGRhdGUnKSB7XG4gICAgICAgIGlmIChhcmNTdGFjay5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCB0ZW1wID0gYXJjU3RhY2suc2hpZnQoKTtcbiAgICAgICAgICBjdHgubGluZVRvKHRlbXBbMF0sIHRlbXBbMV0pO1xuICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaXJjbGVMb2NrID0gZmFsc2U7XG4gICAgICAgICAgY3R4LmxpbmVUbyhjU3RhcnRQb2ludFswXSwgY1N0YXJ0UG9pbnRbMV0pO1xuICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICBhcmNTdGFjayA9IG51bGw7XG5cbiAgICAgICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW92ZXInO1xuICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoO1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyXG4gICAgICAgICAgY3R4LmFyYyhyYWRpdXMsIHJhZGl1cywgYlIsIDAsIDIgKiBNYXRoLlBJLCB0cnVlKTtcblxuICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyXG4gICAgICAgICAgY3R4LmFyYyhyYWRpdXMsIHJhZGl1cywgcmFkaXVzIC0gMyAqIGxpbmVXaWR0aCwgMCwgMiAqIE1hdGguUEksIHRydWUpO1xuXG4gICAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgICBjdHguY2xpcCgpO1xuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGRhdGEgPj0gMC44NSkge1xuICAgICAgICAgIGlmIChjdXJyUmFuZ2UgPiByYW5nZSAvIDQpIHtcbiAgICAgICAgICAgIGNvbnN0IHQgPSByYW5nZSAqIDAuMDE7XG4gICAgICAgICAgICBjdXJyUmFuZ2UgLT0gdDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YSA8PSAwLjEpIHtcbiAgICAgICAgICBpZiAoY3VyclJhbmdlIDwgcmFuZ2UgKiAxLjUpIHtcbiAgICAgICAgICAgIGNvbnN0IHQgPSByYW5nZSAqIDAuMDE7XG4gICAgICAgICAgICBjdXJyUmFuZ2UgKz0gdDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGN1cnJSYW5nZSA8PSByYW5nZSkge1xuICAgICAgICAgICAgY29uc3QgdCA9IHJhbmdlICogMC4wMTtcbiAgICAgICAgICAgIGN1cnJSYW5nZSArPSB0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY3VyclJhbmdlID49IHJhbmdlKSB7XG4gICAgICAgICAgICBjb25zdCB0ID0gcmFuZ2UgKiAwLjAxO1xuICAgICAgICAgICAgY3VyclJhbmdlIC09IHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhIC0gY3VyckRhdGEgPiAwKSB7XG4gICAgICAgICAgY3VyckRhdGEgKz0gd2F2ZXVwc3A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEgLSBjdXJyRGF0YSA8IDApIHtcbiAgICAgICAgICBjdXJyRGF0YSAtPSB3YXZldXBzcDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwICs9IDAuMDc7XG4gICAgICAgIGRyYXdTaW4oKTtcbiAgICAgIH1cbiAgICAgIHNlbGYudGltZXIgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUmFkaW8oKSB7XG4gICAgY29uc3QgeyBvZmZzZXRXaWR0aCB9ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGU7XG4gICAgY29uc3QgcmFkaW8gPSBvZmZzZXRXaWR0aCA8IHRoaXMuaGVpZ2h0ID8gb2Zmc2V0V2lkdGggLyB0aGlzLmhlaWdodCA6IDE7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgc2NhbGUoJHtyYWRpb30pYCk7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGxSZXNpemVFdmVudCgpIHtcbiAgICB0aGlzLnJlc2l6ZSQgPSBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcbiAgICAgIC5waXBlKGRlYm91bmNlVGltZSgyMDApKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZVJhZGlvKCkpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVSYWRpbygpO1xuICAgIHRoaXMuaW5zdGFsbFJlc2l6ZUV2ZW50KCk7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlbmRlckNoYXJ0KCcnKSwgdGhpcy5kZWxheSkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5yZW5kZXJDaGFydCgndXBkYXRlJykpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRpbWVyKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnRpbWVyKTtcbiAgICB9XG4gICAgdGhpcy5yZXNpemUkLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==