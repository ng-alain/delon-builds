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
        this.updateRadio();
        const { percent, color, node } = this;
        /** @type {?} */
        const data = Math.min(Math.max(percent / 100, 0), 100);
        /** @type {?} */
        const self = this;
        cancelAnimationFrame(this.timer);
        /** @type {?} */
        const canvas = (/** @type {?} */ (node.nativeElement));
        /** @type {?} */
        const ctx = (/** @type {?} */ (canvas.getContext('2d')));
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
        const cStartPoint = (/** @type {?} */ (arcStack.shift()));
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
            const startPoint = (/** @type {?} */ (sinStack.shift()));
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
                if ((/** @type {?} */ (arcStack)).length) {
                    /** @type {?} */
                    const temp = (/** @type {?} */ ((/** @type {?} */ (arcStack)).shift()));
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
        (/** @type {?} */ (this.resize$)).unsubscribe();
    }
}
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
G2WaterWaveComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NgZone },
    { type: ChangeDetectorRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0ZXItd2F2ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vY2hhcnQvd2F0ZXItd2F2ZS8iLCJzb3VyY2VzIjpbIndhdGVyLXdhdmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFJTixTQUFTLEVBRVQsU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVc5QyxNQUFNLE9BQU8sb0JBQW9COzs7Ozs7OztJQWUvQixZQUFvQixFQUFjLEVBQVUsUUFBbUIsRUFBVSxNQUFjLEVBQVUsR0FBc0I7UUFBbkcsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFkL0csWUFBTyxHQUF3QixJQUFJLENBQUM7O1FBTXBCLFVBQUssR0FBRyxDQUFDLENBQUM7UUFFekIsVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUNILFdBQU0sR0FBRyxHQUFHLENBQUM7SUFLc0YsQ0FBQzs7Ozs7O0lBRXBILFdBQVcsQ0FBQyxJQUFZO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFFMUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2NBRWIsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLElBQUk7O2NBRS9CLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUks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QUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7WUF2QkMsVUFBVTtZQU1WLFNBQVM7WUFKVCxNQUFNO1lBSk4saUJBQWlCOzs7bUJBNEJoQixTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtvQkFLdkMsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7cUJBQ0wsS0FBSztzQkFDTCxLQUFLOztBQUprQjtJQUFkLFdBQVcsRUFBRTs7bURBQVc7QUFHVjtJQUFkLFdBQVcsRUFBRTs7b0RBQWM7QUFDYjtJQUFkLFdBQVcsRUFBRTs7cURBQWlCOzs7Ozs7SUFWeEMsdUNBQTRDOzs7OztJQUM1QyxvQ0FBbUU7Ozs7O0lBQ25FLHFDQUFzQjs7SUFJdEIscUNBQWtDOztJQUNsQyxxQ0FBMkM7O0lBQzNDLHFDQUEyQjs7SUFDM0Isc0NBQXFDOztJQUNyQyx1Q0FBd0M7Ozs7O0lBSTVCLGtDQUFzQjs7Ozs7SUFBRSx3Q0FBMkI7Ozs7O0lBQUUsc0NBQXNCOzs7OztJQUFFLG1DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItd2F0ZXItd2F2ZScsXG4gIGV4cG9ydEFzOiAnZzJXYXRlcldhdmUnLFxuICB0ZW1wbGF0ZVVybDogJy4vd2F0ZXItd2F2ZS5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHsgJ1tjbGFzcy5nMi13YXRlci13YXZlXSc6ICd0cnVlJyB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEcyV2F0ZXJXYXZlQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIHByaXZhdGUgcmVzaXplJDogU3Vic2NyaXB0aW9uIHwgbnVsbCA9IG51bGw7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pIHByaXZhdGUgbm9kZTogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSB0aW1lcjogbnVtYmVyO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXkgPSAwO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGNvbG9yID0gJyMxODkwRkYnO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQgPSAxNjA7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHBlcmNlbnQ6IG51bWJlcjtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIG5nWm9uZTogTmdab25lLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gIHByaXZhdGUgcmVuZGVyQ2hhcnQodHlwZTogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLnJlc2l6ZSQpIHJldHVybjtcblxuICAgIHRoaXMudXBkYXRlUmFkaW8oKTtcblxuICAgIGNvbnN0IHsgcGVyY2VudCwgY29sb3IsIG5vZGUgfSA9IHRoaXM7XG5cbiAgICBjb25zdCBkYXRhID0gTWF0aC5taW4oTWF0aC5tYXgocGVyY2VudCAvIDEwMCwgMCksIDEwMCk7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy50aW1lcik7XG5cbiAgICBjb25zdCBjYW52YXMgPSBub2RlLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJykgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIGNvbnN0IGNhbnZhc1dpZHRoID0gY2FudmFzLndpZHRoO1xuICAgIGNvbnN0IGNhbnZhc0hlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgY29uc3QgcmFkaXVzID0gY2FudmFzV2lkdGggLyAyO1xuICAgIGNvbnN0IGxpbmVXaWR0aCA9IDI7XG4gICAgY29uc3QgY1IgPSByYWRpdXMgLSBsaW5lV2lkdGg7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aCAqIDI7XG5cbiAgICBjb25zdCBheGlzTGVuZ3RoID0gY2FudmFzV2lkdGggLSBsaW5lV2lkdGg7XG4gICAgY29uc3QgdW5pdCA9IGF4aXNMZW5ndGggLyA4O1xuICAgIGNvbnN0IHJhbmdlID0gMC4yOyAvLyDmjK/luYVcbiAgICBsZXQgY3VyclJhbmdlID0gcmFuZ2U7XG4gICAgY29uc3QgeE9mZnNldCA9IGxpbmVXaWR0aDtcbiAgICBsZXQgc3AgPSAwOyAvLyDlkajmnJ/lgY/np7vph49cbiAgICBsZXQgY3VyckRhdGEgPSAwO1xuICAgIGNvbnN0IHdhdmV1cHNwID0gMC4wMDU7IC8vIOawtOazouS4iua2qOmAn+W6plxuXG4gICAgbGV0IGFyY1N0YWNrOiBbW251bWJlciwgbnVtYmVyXT9dIHwgbnVsbCA9IFtdO1xuICAgIGNvbnN0IGJSID0gcmFkaXVzIC0gbGluZVdpZHRoO1xuICAgIGNvbnN0IGNpcmNsZU9mZnNldCA9IC0oTWF0aC5QSSAvIDIpO1xuICAgIGxldCBjaXJjbGVMb2NrID0gdHJ1ZTtcblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyXG4gICAgZm9yIChsZXQgaSA9IGNpcmNsZU9mZnNldDsgaSA8IGNpcmNsZU9mZnNldCArIDIgKiBNYXRoLlBJOyBpICs9IDEgLyAoOCAqIE1hdGguUEkpKSB7XG4gICAgICBhcmNTdGFjay5wdXNoKFtyYWRpdXMgKyBiUiAqIE1hdGguY29zKGkpLCByYWRpdXMgKyBiUiAqIE1hdGguc2luKGkpXSk7XG4gICAgfVxuXG4gICAgY29uc3QgY1N0YXJ0UG9pbnQgPSBhcmNTdGFjay5zaGlmdCgpIGFzIFtudW1iZXIsIG51bWJlcl07XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgY3R4Lm1vdmVUbyhjU3RhcnRQb2ludFswXSwgY1N0YXJ0UG9pbnRbMV0pO1xuXG4gICAgZnVuY3Rpb24gZHJhd1NpbigpIHtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5zYXZlKCk7XG5cbiAgICAgIGNvbnN0IHNpblN0YWNrOiBbW251bWJlciwgbnVtYmVyXT9dID0gW107XG4gICAgICBmb3IgKGxldCBpID0geE9mZnNldDsgaSA8PSB4T2Zmc2V0ICsgYXhpc0xlbmd0aDsgaSArPSAyMCAvIGF4aXNMZW5ndGgpIHtcbiAgICAgICAgY29uc3QgeCA9IHNwICsgKHhPZmZzZXQgKyBpKSAvIHVuaXQ7XG4gICAgICAgIGNvbnN0IHkgPSBNYXRoLnNpbih4KSAqIGN1cnJSYW5nZTtcbiAgICAgICAgY29uc3QgZHggPSBpO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6YmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlclxuICAgICAgICBjb25zdCBkeSA9IDIgKiBjUiAqICgxIC0gY3VyckRhdGEpICsgKHJhZGl1cyAtIGNSKSAtIHVuaXQgKiB5O1xuXG4gICAgICAgIGN0eC5saW5lVG8oZHgsIGR5KTtcbiAgICAgICAgc2luU3RhY2sucHVzaChbZHgsIGR5XSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN0YXJ0UG9pbnQgPSBzaW5TdGFjay5zaGlmdCgpIGFzIFtudW1iZXIsIG51bWJlcl07XG5cbiAgICAgIGN0eC5saW5lVG8oeE9mZnNldCArIGF4aXNMZW5ndGgsIGNhbnZhc0hlaWdodCk7XG4gICAgICBjdHgubGluZVRvKHhPZmZzZXQsIGNhbnZhc0hlaWdodCk7XG4gICAgICBjdHgubGluZVRvKHN0YXJ0UG9pbnRbMF0sIHN0YXJ0UG9pbnRbMV0pO1xuXG4gICAgICBjb25zdCBncmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCAwLCBjYW52YXNIZWlnaHQpO1xuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsICcjZmZmZmZmJyk7XG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgY29sb3IpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KTtcbiAgICAgIGlmIChjaXJjbGVMb2NrICYmIHR5cGUgIT09ICd1cGRhdGUnKSB7XG4gICAgICAgIGlmIChhcmNTdGFjayEubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgdGVtcCA9IGFyY1N0YWNrIS5zaGlmdCgpIGFzIFtudW1iZXIsIG51bWJlcl07XG4gICAgICAgICAgY3R4LmxpbmVUbyh0ZW1wWzBdLCB0ZW1wWzFdKTtcbiAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2lyY2xlTG9jayA9IGZhbHNlO1xuICAgICAgICAgIGN0eC5saW5lVG8oY1N0YXJ0UG9pbnRbMF0sIGNTdGFydFBvaW50WzFdKTtcbiAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgYXJjU3RhY2sgPSBudWxsO1xuXG4gICAgICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1vdmVyJztcbiAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6YmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlclxuICAgICAgICAgIGN0eC5hcmMocmFkaXVzLCByYWRpdXMsIGJSLCAwLCAyICogTWF0aC5QSSwgdHJ1ZSk7XG5cbiAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6YmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlclxuICAgICAgICAgIGN0eC5hcmMocmFkaXVzLCByYWRpdXMsIHJhZGl1cyAtIDMgKiBsaW5lV2lkdGgsIDAsIDIgKiBNYXRoLlBJLCB0cnVlKTtcblxuICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgICAgICAgY3R4LmNsaXAoKTtcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChkYXRhID49IDAuODUpIHtcbiAgICAgICAgICBpZiAoY3VyclJhbmdlID4gcmFuZ2UgLyA0KSB7XG4gICAgICAgICAgICBjb25zdCB0ID0gcmFuZ2UgKiAwLjAxO1xuICAgICAgICAgICAgY3VyclJhbmdlIC09IHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGRhdGEgPD0gMC4xKSB7XG4gICAgICAgICAgaWYgKGN1cnJSYW5nZSA8IHJhbmdlICogMS41KSB7XG4gICAgICAgICAgICBjb25zdCB0ID0gcmFuZ2UgKiAwLjAxO1xuICAgICAgICAgICAgY3VyclJhbmdlICs9IHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChjdXJyUmFuZ2UgPD0gcmFuZ2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHQgPSByYW5nZSAqIDAuMDE7XG4gICAgICAgICAgICBjdXJyUmFuZ2UgKz0gdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGN1cnJSYW5nZSA+PSByYW5nZSkge1xuICAgICAgICAgICAgY29uc3QgdCA9IHJhbmdlICogMC4wMTtcbiAgICAgICAgICAgIGN1cnJSYW5nZSAtPSB0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YSAtIGN1cnJEYXRhID4gMCkge1xuICAgICAgICAgIGN1cnJEYXRhICs9IHdhdmV1cHNwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhIC0gY3VyckRhdGEgPCAwKSB7XG4gICAgICAgICAgY3VyckRhdGEgLT0gd2F2ZXVwc3A7XG4gICAgICAgIH1cblxuICAgICAgICBzcCArPSAwLjA3O1xuICAgICAgICBkcmF3U2luKCk7XG4gICAgICB9XG4gICAgICBzZWxmLnRpbWVyID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgfVxuXG4gICAgcmVuZGVyKCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVJhZGlvKCkge1xuICAgIGNvbnN0IHsgb2Zmc2V0V2lkdGggfSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlO1xuICAgIGNvbnN0IHJhZGlvID0gb2Zmc2V0V2lkdGggPCB0aGlzLmhlaWdodCA/IG9mZnNldFdpZHRoIC8gdGhpcy5oZWlnaHQgOiAxO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgYHNjYWxlKCR7cmFkaW99KWApO1xuICB9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsUmVzaXplRXZlbnQoKSB7XG4gICAgdGhpcy5yZXNpemUkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUoMjAwKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVSYWRpbygpKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5zdGFsbFJlc2l6ZUV2ZW50KCk7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlbmRlckNoYXJ0KCcnKSwgdGhpcy5kZWxheSkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5yZW5kZXJDaGFydCgndXBkYXRlJykpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRpbWVyKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnRpbWVyKTtcbiAgICB9XG4gICAgdGhpcy5yZXNpemUkIS51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=