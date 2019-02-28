/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, NgZone, Renderer2, ViewChild, } from '@angular/core';
import { InputNumber } from '@delon/util';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
export class G2WaterWaveComponent {
    // #endregion
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} ngZone
     * @param {?} cdr
     */
    constructor(el, renderer, ngZone, cdr) {
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
    renderChart(type) {
        if (!this.resize$)
            return;
        const { percent, color, node } = this;
        /** @type {?} */
        const data = Math.min(Math.max(percent / 100, 0), 100);
        /** @type {?} */
        const self = this;
        cancelAnimationFrame(this.timer);
        /** @type {?} */
        const canvas = (/** @type {?} */ (node.nativeElement));
        /** @type {?} */
        const ctx = canvas.getContext('2d');
        /** @type {?} */
        const canvasWidth = canvas.width;
        /** @type {?} */
        const canvasHeight = canvas.height;
        /** @type {?} */
        const radius = canvasWidth / 2;
        /** @type {?} */
        const lineWidth = 2;
        /** @type {?} */
        const cR = radius - lineWidth;
        ctx.beginPath();
        ctx.lineWidth = lineWidth * 2;
        /** @type {?} */
        const axisLength = canvasWidth - lineWidth;
        /** @type {?} */
        const unit = axisLength / 8;
        /** @type {?} */
        const range = 0.2;
        // 振幅
        /** @type {?} */
        let currRange = range;
        /** @type {?} */
        const xOffset = lineWidth;
        /** @type {?} */
        let sp = 0;
        // 周期偏移量
        /** @type {?} */
        let currData = 0;
        /** @type {?} */
        const waveupsp = 0.005;
        // 水波上涨速度
        /** @type {?} */
        let arcStack = [];
        /** @type {?} */
        const bR = radius - lineWidth;
        /** @type {?} */
        const circleOffset = -(Math.PI / 2);
        /** @type {?} */
        let circleLock = true;
        // tslint:disable-next-line:binary-expression-operand-order
        for (let i = circleOffset; i < circleOffset + 2 * Math.PI; i += 1 / (8 * Math.PI)) {
            arcStack.push([radius + bR * Math.cos(i), radius + bR * Math.sin(i)]);
        }
        /** @type {?} */
        const cStartPoint = arcStack.shift();
        ctx.strokeStyle = color;
        ctx.moveTo(cStartPoint[0], cStartPoint[1]);
        /**
         * @return {?}
         */
        function drawSin() {
            ctx.beginPath();
            ctx.save();
            /** @type {?} */
            const sinStack = [];
            for (let i = xOffset; i <= xOffset + axisLength; i += 20 / axisLength) {
                /** @type {?} */
                const x = sp + (xOffset + i) / unit;
                /** @type {?} */
                const y = Math.sin(x) * currRange;
                /** @type {?} */
                const dx = i;
                // tslint:disable-next-line:binary-expression-operand-order
                /** @type {?} */
                const dy = 2 * cR * (1 - currData) + (radius - cR) - unit * y;
                ctx.lineTo(dx, dy);
                sinStack.push([dx, dy]);
            }
            /** @type {?} */
            const startPoint = sinStack.shift();
            ctx.lineTo(xOffset + axisLength, canvasHeight);
            ctx.lineTo(xOffset, canvasHeight);
            ctx.lineTo(startPoint[0], startPoint[1]);
            /** @type {?} */
            const gradient = ctx.createLinearGradient(0, 0, 0, canvasHeight);
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
                    const temp = arcStack.shift();
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
                        const t = range * 0.01;
                        currRange -= t;
                    }
                }
                else if (data <= 0.1) {
                    if (currRange < range * 1.5) {
                        /** @type {?} */
                        const t = range * 0.01;
                        currRange += t;
                    }
                }
                else {
                    if (currRange <= range) {
                        /** @type {?} */
                        const t = range * 0.01;
                        currRange += t;
                    }
                    if (currRange >= range) {
                        /** @type {?} */
                        const t = range * 0.01;
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
    }
    /**
     * @private
     * @return {?}
     */
    updateRadio() {
        const { offsetWidth } = this.el.nativeElement.parentNode;
        /** @type {?} */
        const radio = offsetWidth < this.height ? offsetWidth / this.height : 1;
        this.renderer.setStyle(this.el.nativeElement, 'transform', `scale(${radio})`);
    }
    /**
     * @private
     * @return {?}
     */
    installResizeEvent() {
        this.resize$ = fromEvent(window, 'resize')
            .pipe(debounceTime(200))
            .subscribe((/**
         * @return {?}
         */
        () => this.updateRadio()));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateRadio();
        this.installResizeEvent();
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => setTimeout((/**
         * @return {?}
         */
        () => this.renderChart('')), this.delay)));
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => this.renderChart('update')));
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.timer) {
            cancelAnimationFrame(this.timer);
        }
        this.resize$.unsubscribe();
    }
}
G2WaterWaveComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-water-wave',
                template: "<div [ngStyle]=\"{'height.px': height, 'width.px': height, 'overflow': 'hidden'}\">\n  <canvas #container class=\"g2-water-wave__canvas\" width=\"{{height*2}}\" height=\"{{height*2}}\"></canvas>\n</div>\n<div class=\"g2-water-wave__desc\" [ngStyle]=\"{'width.px': height}\">\n  <span *ngIf=\"title\" class=\"g2-water-wave__desc-title\">\n    <ng-container *stringTemplateOutlet=\"title\">{{title}}</ng-container>\n  </span>\n  <h4 class=\"g2-water-wave__desc-percent\">{{percent}}%</h4>\n</div>\n",
                host: { '[class.g2-water-wave]': 'true' },
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
G2WaterWaveComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NgZone },
    { type: ChangeDetectorRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0ZXItd2F2ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vY2hhcnQvd2F0ZXItd2F2ZS8iLCJzb3VyY2VzIjpbIndhdGVyLXdhdmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUlOLFNBQVMsRUFFVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFROUMsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7Ozs7SUFlL0IsWUFDVSxFQUFjLEVBQ2QsUUFBbUIsRUFDbkIsTUFBYyxFQUNkLEdBQXNCO1FBSHRCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWxCeEIsWUFBTyxHQUFpQixJQUFJLENBQUM7O1FBTWIsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUV6QixVQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ0gsV0FBTSxHQUFHLEdBQUcsQ0FBQztJQVVsQyxDQUFDOzs7Ozs7SUFFSSxXQUFXLENBQUMsSUFBWTtRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPO2NBRXBCLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJOztjQUUvQixJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFD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QkFDTCxLQUFLOztBQUprQjtJQUFkLFdBQVcsRUFBRTs7bURBQVc7QUFHVjtJQUFkLFdBQVcsRUFBRTs7b0RBQWM7QUFDYjtJQUFkLFdBQVcsRUFBRTs7cURBQWlCOzs7Ozs7SUFWeEMsdUNBQXFDOzs7OztJQUNyQyxvQ0FBaUQ7Ozs7O0lBQ2pELHFDQUFzQjs7SUFJdEIscUNBQWtDOztJQUNsQyxxQ0FBMkM7O0lBQzNDLHFDQUEyQjs7SUFDM0Isc0NBQXFDOztJQUNyQyx1Q0FBd0M7Ozs7O0lBS3RDLGtDQUFzQjs7Ozs7SUFDdEIsd0NBQTJCOzs7OztJQUMzQixzQ0FBc0I7Ozs7O0lBQ3RCLG1DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi13YXRlci13YXZlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dhdGVyLXdhdmUuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7ICdbY2xhc3MuZzItd2F0ZXItd2F2ZV0nOiAndHJ1ZScgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEcyV2F0ZXJXYXZlQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIHByaXZhdGUgcmVzaXplJDogU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJykgcHJpdmF0ZSBub2RlOiBFbGVtZW50UmVmO1xuICBwcml2YXRlIHRpbWVyOiBudW1iZXI7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBkZWxheSA9IDA7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgY29sb3IgPSAnIzE4OTBGRic7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGhlaWdodCA9IDE2MDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgcGVyY2VudDogbnVtYmVyO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgKSB7fVxuXG4gIHByaXZhdGUgcmVuZGVyQ2hhcnQodHlwZTogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLnJlc2l6ZSQpIHJldHVybjtcblxuICAgIGNvbnN0IHsgcGVyY2VudCwgY29sb3IsIG5vZGUgfSA9IHRoaXM7XG5cbiAgICBjb25zdCBkYXRhID0gTWF0aC5taW4oTWF0aC5tYXgocGVyY2VudCAvIDEwMCwgMCksIDEwMCk7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy50aW1lcik7XG5cbiAgICBjb25zdCBjYW52YXMgPSBub2RlLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY29uc3QgY2FudmFzV2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgY29uc3QgY2FudmFzSGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgICBjb25zdCByYWRpdXMgPSBjYW52YXNXaWR0aCAvIDI7XG4gICAgY29uc3QgbGluZVdpZHRoID0gMjtcbiAgICBjb25zdCBjUiA9IHJhZGl1cyAtIGxpbmVXaWR0aDtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoICogMjtcblxuICAgIGNvbnN0IGF4aXNMZW5ndGggPSBjYW52YXNXaWR0aCAtIGxpbmVXaWR0aDtcbiAgICBjb25zdCB1bml0ID0gYXhpc0xlbmd0aCAvIDg7XG4gICAgY29uc3QgcmFuZ2UgPSAwLjI7IC8vIOaMr+W5hVxuICAgIGxldCBjdXJyUmFuZ2UgPSByYW5nZTtcbiAgICBjb25zdCB4T2Zmc2V0ID0gbGluZVdpZHRoO1xuICAgIGxldCBzcCA9IDA7IC8vIOWRqOacn+WBj+enu+mHj1xuICAgIGxldCBjdXJyRGF0YSA9IDA7XG4gICAgY29uc3Qgd2F2ZXVwc3AgPSAwLjAwNTsgLy8g5rC05rOi5LiK5rao6YCf5bqmXG5cbiAgICBsZXQgYXJjU3RhY2sgPSBbXTtcbiAgICBjb25zdCBiUiA9IHJhZGl1cyAtIGxpbmVXaWR0aDtcbiAgICBjb25zdCBjaXJjbGVPZmZzZXQgPSAtKE1hdGguUEkgLyAyKTtcbiAgICBsZXQgY2lyY2xlTG9jayA9IHRydWU7XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6YmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlclxuICAgIGZvciAobGV0IGkgPSBjaXJjbGVPZmZzZXQ7IGkgPCBjaXJjbGVPZmZzZXQgKyAyICogTWF0aC5QSTsgaSArPSAxIC8gKDggKiBNYXRoLlBJKSkge1xuICAgICAgYXJjU3RhY2sucHVzaChbcmFkaXVzICsgYlIgKiBNYXRoLmNvcyhpKSwgcmFkaXVzICsgYlIgKiBNYXRoLnNpbihpKV0pO1xuICAgIH1cblxuICAgIGNvbnN0IGNTdGFydFBvaW50ID0gYXJjU3RhY2suc2hpZnQoKTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICBjdHgubW92ZVRvKGNTdGFydFBvaW50WzBdLCBjU3RhcnRQb2ludFsxXSk7XG5cbiAgICBmdW5jdGlvbiBkcmF3U2luKCkge1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LnNhdmUoKTtcblxuICAgICAgY29uc3Qgc2luU3RhY2sgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSB4T2Zmc2V0OyBpIDw9IHhPZmZzZXQgKyBheGlzTGVuZ3RoOyBpICs9IDIwIC8gYXhpc0xlbmd0aCkge1xuICAgICAgICBjb25zdCB4ID0gc3AgKyAoeE9mZnNldCArIGkpIC8gdW5pdDtcbiAgICAgICAgY29uc3QgeSA9IE1hdGguc2luKHgpICogY3VyclJhbmdlO1xuICAgICAgICBjb25zdCBkeCA9IGk7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyXG4gICAgICAgIGNvbnN0IGR5ID0gMiAqIGNSICogKDEgLSBjdXJyRGF0YSkgKyAocmFkaXVzIC0gY1IpIC0gdW5pdCAqIHk7XG5cbiAgICAgICAgY3R4LmxpbmVUbyhkeCwgZHkpO1xuICAgICAgICBzaW5TdGFjay5wdXNoKFtkeCwgZHldKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc3RhcnRQb2ludCA9IHNpblN0YWNrLnNoaWZ0KCk7XG5cbiAgICAgIGN0eC5saW5lVG8oeE9mZnNldCArIGF4aXNMZW5ndGgsIGNhbnZhc0hlaWdodCk7XG4gICAgICBjdHgubGluZVRvKHhPZmZzZXQsIGNhbnZhc0hlaWdodCk7XG4gICAgICBjdHgubGluZVRvKHN0YXJ0UG9pbnRbMF0sIHN0YXJ0UG9pbnRbMV0pO1xuXG4gICAgICBjb25zdCBncmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCAwLCBjYW52YXNIZWlnaHQpO1xuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsICcjZmZmZmZmJyk7XG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgY29sb3IpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KTtcbiAgICAgIGlmIChjaXJjbGVMb2NrICYmIHR5cGUgIT09ICd1cGRhdGUnKSB7XG4gICAgICAgIGlmIChhcmNTdGFjay5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCB0ZW1wID0gYXJjU3RhY2suc2hpZnQoKTtcbiAgICAgICAgICBjdHgubGluZVRvKHRlbXBbMF0sIHRlbXBbMV0pO1xuICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaXJjbGVMb2NrID0gZmFsc2U7XG4gICAgICAgICAgY3R4LmxpbmVUbyhjU3RhcnRQb2ludFswXSwgY1N0YXJ0UG9pbnRbMV0pO1xuICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICBhcmNTdGFjayA9IG51bGw7XG5cbiAgICAgICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW92ZXInO1xuICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoO1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyXG4gICAgICAgICAgY3R4LmFyYyhyYWRpdXMsIHJhZGl1cywgYlIsIDAsIDIgKiBNYXRoLlBJLCB0cnVlKTtcblxuICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyXG4gICAgICAgICAgY3R4LmFyYyhyYWRpdXMsIHJhZGl1cywgcmFkaXVzIC0gMyAqIGxpbmVXaWR0aCwgMCwgMiAqIE1hdGguUEksIHRydWUpO1xuXG4gICAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgICBjdHguY2xpcCgpO1xuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGRhdGEgPj0gMC44NSkge1xuICAgICAgICAgIGlmIChjdXJyUmFuZ2UgPiByYW5nZSAvIDQpIHtcbiAgICAgICAgICAgIGNvbnN0IHQgPSByYW5nZSAqIDAuMDE7XG4gICAgICAgICAgICBjdXJyUmFuZ2UgLT0gdDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YSA8PSAwLjEpIHtcbiAgICAgICAgICBpZiAoY3VyclJhbmdlIDwgcmFuZ2UgKiAxLjUpIHtcbiAgICAgICAgICAgIGNvbnN0IHQgPSByYW5nZSAqIDAuMDE7XG4gICAgICAgICAgICBjdXJyUmFuZ2UgKz0gdDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGN1cnJSYW5nZSA8PSByYW5nZSkge1xuICAgICAgICAgICAgY29uc3QgdCA9IHJhbmdlICogMC4wMTtcbiAgICAgICAgICAgIGN1cnJSYW5nZSArPSB0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY3VyclJhbmdlID49IHJhbmdlKSB7XG4gICAgICAgICAgICBjb25zdCB0ID0gcmFuZ2UgKiAwLjAxO1xuICAgICAgICAgICAgY3VyclJhbmdlIC09IHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhIC0gY3VyckRhdGEgPiAwKSB7XG4gICAgICAgICAgY3VyckRhdGEgKz0gd2F2ZXVwc3A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEgLSBjdXJyRGF0YSA8IDApIHtcbiAgICAgICAgICBjdXJyRGF0YSAtPSB3YXZldXBzcDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwICs9IDAuMDc7XG4gICAgICAgIGRyYXdTaW4oKTtcbiAgICAgIH1cbiAgICAgIHNlbGYudGltZXIgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUmFkaW8oKSB7XG4gICAgY29uc3QgeyBvZmZzZXRXaWR0aCB9ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGU7XG4gICAgY29uc3QgcmFkaW8gPSBvZmZzZXRXaWR0aCA8IHRoaXMuaGVpZ2h0ID8gb2Zmc2V0V2lkdGggLyB0aGlzLmhlaWdodCA6IDE7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgc2NhbGUoJHtyYWRpb30pYCk7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGxSZXNpemVFdmVudCgpIHtcbiAgICB0aGlzLnJlc2l6ZSQgPSBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcbiAgICAgIC5waXBlKGRlYm91bmNlVGltZSgyMDApKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZVJhZGlvKCkpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVSYWRpbygpO1xuICAgIHRoaXMuaW5zdGFsbFJlc2l6ZUV2ZW50KCk7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlbmRlckNoYXJ0KCcnKSwgdGhpcy5kZWxheSkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5yZW5kZXJDaGFydCgndXBkYXRlJykpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRpbWVyKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnRpbWVyKTtcbiAgICB9XG4gICAgdGhpcy5yZXNpemUkLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==