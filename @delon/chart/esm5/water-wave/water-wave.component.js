/**
 * @fileoverview added by tsickle
 * Generated from: water-wave.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, NgZone, Renderer2, ViewChild, ViewEncapsulation, } from '@angular/core';
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
        this.resize$ = fromEvent(window, 'resize')
            .pipe(debounceTime(200))
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
        { type: Component, args: [{
                    selector: 'g2-water-wave',
                    exportAs: 'g2WaterWave',
                    template: "<div [ngStyle]=\"{'height.px': height, 'width.px': height, 'overflow': 'hidden'}\">\n  <canvas #container class=\"g2-water-wave__canvas\" width=\"{{height*2}}\" height=\"{{height*2}}\"></canvas>\n</div>\n<div class=\"g2-water-wave__desc\" [ngStyle]=\"{'width.px': height}\">\n  <span *ngIf=\"title\" class=\"g2-water-wave__desc-title\">\n    <ng-container *stringTemplateOutlet=\"title\">{{title}}</ng-container>\n  </span>\n  <h4 class=\"g2-water-wave__desc-percent\">{{percent}}%</h4>\n</div>\n",
                    host: { '[class.g2-water-wave]': 'true' },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
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
        node: [{ type: ViewChild, args: ['container', { static: true },] }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0ZXItd2F2ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vY2hhcnQvd2F0ZXItd2F2ZS8iLCJzb3VyY2VzIjpbIndhdGVyLXdhdmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFJTixTQUFTLEVBRVQsU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5QztJQXNCRSxhQUFhO0lBRWIsOEJBQW9CLEVBQWMsRUFBVSxRQUFtQixFQUFVLE1BQWMsRUFBVSxHQUFzQjtRQUFuRyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWQvRyxZQUFPLEdBQXdCLElBQUksQ0FBQzs7UUFNcEIsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUV6QixVQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ0gsV0FBTSxHQUFHLEdBQUcsQ0FBQztJQUtxRixDQUFDOzs7Ozs7SUFFbkgsMENBQVc7Ozs7O0lBQW5CLFVBQW9CLElBQVk7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUVwQixJQUFBLFNBQStCLEVBQTdCLG9CQUFPLEVBQUUsZ0JBQUssRUFBRSxjQUFhOztZQUUvQixJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVB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QXVCLEVBQUUsTUFBTSxFQUFFO29CQUN6QyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzs7O2dCQXZCQyxVQUFVO2dCQU1WLFNBQVM7Z0JBSlQsTUFBTTtnQkFKTixpQkFBaUI7Ozt1QkE0QmhCLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3dCQUt2QyxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7O0lBSmtCO1FBQWQsV0FBVyxFQUFFOzt1REFBVztJQUdWO1FBQWQsV0FBVyxFQUFFOzt3REFBYztJQUNiO1FBQWQsV0FBVyxFQUFFOzt5REFBaUI7SUE2SzFDLDJCQUFDO0NBQUEsQUFqTUQsSUFpTUM7U0F4TFksb0JBQW9COzs7Ozs7SUFDL0IsdUNBQTRDOzs7OztJQUM1QyxvQ0FBbUU7Ozs7O0lBQ25FLHFDQUFzQjs7SUFJdEIscUNBQWtDOztJQUNsQyxxQ0FBMkM7O0lBQzNDLHFDQUEyQjs7SUFDM0Isc0NBQXFDOztJQUNyQyx1Q0FBd0M7Ozs7O0lBSTVCLGtDQUFzQjs7Ozs7SUFBRSx3Q0FBMkI7Ozs7O0lBQUUsc0NBQXNCOzs7OztJQUFFLG1DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItd2F0ZXItd2F2ZScsXG4gIGV4cG9ydEFzOiAnZzJXYXRlcldhdmUnLFxuICB0ZW1wbGF0ZVVybDogJy4vd2F0ZXItd2F2ZS5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHsgJ1tjbGFzcy5nMi13YXRlci13YXZlXSc6ICd0cnVlJyB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEcyV2F0ZXJXYXZlQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIHByaXZhdGUgcmVzaXplJDogU3Vic2NyaXB0aW9uIHwgbnVsbCA9IG51bGw7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pIHByaXZhdGUgbm9kZTogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSB0aW1lcjogbnVtYmVyO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXkgPSAwO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGNvbG9yID0gJyMxODkwRkYnO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQgPSAxNjA7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHBlcmNlbnQ6IG51bWJlcjtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIG5nWm9uZTogTmdab25lLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgcHJpdmF0ZSByZW5kZXJDaGFydCh0eXBlOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMucmVzaXplJCkgcmV0dXJuO1xuXG4gICAgY29uc3QgeyBwZXJjZW50LCBjb2xvciwgbm9kZSB9ID0gdGhpcztcblxuICAgIGNvbnN0IGRhdGEgPSBNYXRoLm1pbihNYXRoLm1heChwZXJjZW50IC8gMTAwLCAwKSwgMTAwKTtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnRpbWVyKTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IG5vZGUubmF0aXZlRWxlbWVudCBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgY29uc3QgY2FudmFzV2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgY29uc3QgY2FudmFzSGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgICBjb25zdCByYWRpdXMgPSBjYW52YXNXaWR0aCAvIDI7XG4gICAgY29uc3QgbGluZVdpZHRoID0gMjtcbiAgICBjb25zdCBjUiA9IHJhZGl1cyAtIGxpbmVXaWR0aDtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoICogMjtcblxuICAgIGNvbnN0IGF4aXNMZW5ndGggPSBjYW52YXNXaWR0aCAtIGxpbmVXaWR0aDtcbiAgICBjb25zdCB1bml0ID0gYXhpc0xlbmd0aCAvIDg7XG4gICAgY29uc3QgcmFuZ2UgPSAwLjI7IC8vIOaMr+W5hVxuICAgIGxldCBjdXJyUmFuZ2UgPSByYW5nZTtcbiAgICBjb25zdCB4T2Zmc2V0ID0gbGluZVdpZHRoO1xuICAgIGxldCBzcCA9IDA7IC8vIOWRqOacn+WBj+enu+mHj1xuICAgIGxldCBjdXJyRGF0YSA9IDA7XG4gICAgY29uc3Qgd2F2ZXVwc3AgPSAwLjAwNTsgLy8g5rC05rOi5LiK5rao6YCf5bqmXG5cbiAgICBsZXQgYXJjU3RhY2s6IFtbbnVtYmVyLCBudW1iZXJdP10gfCBudWxsID0gW107XG4gICAgY29uc3QgYlIgPSByYWRpdXMgLSBsaW5lV2lkdGg7XG4gICAgY29uc3QgY2lyY2xlT2Zmc2V0ID0gLShNYXRoLlBJIC8gMik7XG4gICAgbGV0IGNpcmNsZUxvY2sgPSB0cnVlO1xuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXJcbiAgICBmb3IgKGxldCBpID0gY2lyY2xlT2Zmc2V0OyBpIDwgY2lyY2xlT2Zmc2V0ICsgMiAqIE1hdGguUEk7IGkgKz0gMSAvICg4ICogTWF0aC5QSSkpIHtcbiAgICAgIGFyY1N0YWNrLnB1c2goW3JhZGl1cyArIGJSICogTWF0aC5jb3MoaSksIHJhZGl1cyArIGJSICogTWF0aC5zaW4oaSldKTtcbiAgICB9XG5cbiAgICBjb25zdCBjU3RhcnRQb2ludCA9IGFyY1N0YWNrLnNoaWZ0KCkgYXMgW251bWJlciwgbnVtYmVyXTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICBjdHgubW92ZVRvKGNTdGFydFBvaW50WzBdLCBjU3RhcnRQb2ludFsxXSk7XG5cbiAgICBmdW5jdGlvbiBkcmF3U2luKCkge1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LnNhdmUoKTtcblxuICAgICAgY29uc3Qgc2luU3RhY2s6IFtbbnVtYmVyLCBudW1iZXJdP10gPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSB4T2Zmc2V0OyBpIDw9IHhPZmZzZXQgKyBheGlzTGVuZ3RoOyBpICs9IDIwIC8gYXhpc0xlbmd0aCkge1xuICAgICAgICBjb25zdCB4ID0gc3AgKyAoeE9mZnNldCArIGkpIC8gdW5pdDtcbiAgICAgICAgY29uc3QgeSA9IE1hdGguc2luKHgpICogY3VyclJhbmdlO1xuICAgICAgICBjb25zdCBkeCA9IGk7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyXG4gICAgICAgIGNvbnN0IGR5ID0gMiAqIGNSICogKDEgLSBjdXJyRGF0YSkgKyAocmFkaXVzIC0gY1IpIC0gdW5pdCAqIHk7XG5cbiAgICAgICAgY3R4LmxpbmVUbyhkeCwgZHkpO1xuICAgICAgICBzaW5TdGFjay5wdXNoKFtkeCwgZHldKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc3RhcnRQb2ludCA9IHNpblN0YWNrLnNoaWZ0KCkgYXMgW251bWJlciwgbnVtYmVyXTtcblxuICAgICAgY3R4LmxpbmVUbyh4T2Zmc2V0ICsgYXhpc0xlbmd0aCwgY2FudmFzSGVpZ2h0KTtcbiAgICAgIGN0eC5saW5lVG8oeE9mZnNldCwgY2FudmFzSGVpZ2h0KTtcbiAgICAgIGN0eC5saW5lVG8oc3RhcnRQb2ludFswXSwgc3RhcnRQb2ludFsxXSk7XG5cbiAgICAgIGNvbnN0IGdyYWRpZW50ID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIDAsIGNhbnZhc0hlaWdodCk7XG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgJyNmZmZmZmYnKTtcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCBjb2xvcik7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XG4gICAgICBjdHguZmlsbCgpO1xuICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpO1xuICAgICAgaWYgKGNpcmNsZUxvY2sgJiYgdHlwZSAhPT0gJ3VwZGF0ZScpIHtcbiAgICAgICAgaWYgKGFyY1N0YWNrIS5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCB0ZW1wID0gYXJjU3RhY2shLnNoaWZ0KCkgYXMgW251bWJlciwgbnVtYmVyXTtcbiAgICAgICAgICBjdHgubGluZVRvKHRlbXBbMF0sIHRlbXBbMV0pO1xuICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaXJjbGVMb2NrID0gZmFsc2U7XG4gICAgICAgICAgY3R4LmxpbmVUbyhjU3RhcnRQb2ludFswXSwgY1N0YXJ0UG9pbnRbMV0pO1xuICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICBhcmNTdGFjayA9IG51bGw7XG5cbiAgICAgICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW92ZXInO1xuICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoO1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyXG4gICAgICAgICAgY3R4LmFyYyhyYWRpdXMsIHJhZGl1cywgYlIsIDAsIDIgKiBNYXRoLlBJLCB0cnVlKTtcblxuICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyXG4gICAgICAgICAgY3R4LmFyYyhyYWRpdXMsIHJhZGl1cywgcmFkaXVzIC0gMyAqIGxpbmVXaWR0aCwgMCwgMiAqIE1hdGguUEksIHRydWUpO1xuXG4gICAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgICBjdHguY2xpcCgpO1xuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGRhdGEgPj0gMC44NSkge1xuICAgICAgICAgIGlmIChjdXJyUmFuZ2UgPiByYW5nZSAvIDQpIHtcbiAgICAgICAgICAgIGNvbnN0IHQgPSByYW5nZSAqIDAuMDE7XG4gICAgICAgICAgICBjdXJyUmFuZ2UgLT0gdDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YSA8PSAwLjEpIHtcbiAgICAgICAgICBpZiAoY3VyclJhbmdlIDwgcmFuZ2UgKiAxLjUpIHtcbiAgICAgICAgICAgIGNvbnN0IHQgPSByYW5nZSAqIDAuMDE7XG4gICAgICAgICAgICBjdXJyUmFuZ2UgKz0gdDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGN1cnJSYW5nZSA8PSByYW5nZSkge1xuICAgICAgICAgICAgY29uc3QgdCA9IHJhbmdlICogMC4wMTtcbiAgICAgICAgICAgIGN1cnJSYW5nZSArPSB0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY3VyclJhbmdlID49IHJhbmdlKSB7XG4gICAgICAgICAgICBjb25zdCB0ID0gcmFuZ2UgKiAwLjAxO1xuICAgICAgICAgICAgY3VyclJhbmdlIC09IHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhIC0gY3VyckRhdGEgPiAwKSB7XG4gICAgICAgICAgY3VyckRhdGEgKz0gd2F2ZXVwc3A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEgLSBjdXJyRGF0YSA8IDApIHtcbiAgICAgICAgICBjdXJyRGF0YSAtPSB3YXZldXBzcDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwICs9IDAuMDc7XG4gICAgICAgIGRyYXdTaW4oKTtcbiAgICAgIH1cbiAgICAgIHNlbGYudGltZXIgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUmFkaW8oKSB7XG4gICAgY29uc3QgeyBvZmZzZXRXaWR0aCB9ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGU7XG4gICAgY29uc3QgcmFkaW8gPSBvZmZzZXRXaWR0aCA8IHRoaXMuaGVpZ2h0ID8gb2Zmc2V0V2lkdGggLyB0aGlzLmhlaWdodCA6IDE7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgc2NhbGUoJHtyYWRpb30pYCk7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGxSZXNpemVFdmVudCgpIHtcbiAgICB0aGlzLnJlc2l6ZSQgPSBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcbiAgICAgIC5waXBlKGRlYm91bmNlVGltZSgyMDApKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZVJhZGlvKCkpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVSYWRpbygpO1xuICAgIHRoaXMuaW5zdGFsbFJlc2l6ZUV2ZW50KCk7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlbmRlckNoYXJ0KCcnKSwgdGhpcy5kZWxheSkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5yZW5kZXJDaGFydCgndXBkYXRlJykpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRpbWVyKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnRpbWVyKTtcbiAgICB9XG4gICAgdGhpcy5yZXNpemUkIS51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=