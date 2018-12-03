/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, NgZone, TemplateRef, Renderer2, ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { toNumber } from '@delon/util';
export class G2WaterWaveComponent {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} cd
     * @param {?} zone
     */
    constructor(el, renderer, cd, zone) {
        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this.zone = zone;
        // #region fields
        this._title = '';
        this.color = '#1890FF';
        this._height = 160;
        // #endregion
        this.resize$ = null;
        this.initFlag = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set title(value) {
        if (value instanceof TemplateRef) {
            this._title = null;
            this._titleTpl = value;
        }
        else {
            this._title = value;
        }
    }
    /**
     * @return {?}
     */
    get height() {
        return this._height;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set height(value) {
        this._height = toNumber(value);
    }
    /**
     * @return {?}
     */
    get percent() {
        return this._percent;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set percent(value) {
        this._percent = toNumber(value);
    }
    /**
     * @return {?}
     */
    renderChart() {
        /** @type {?} */
        const data = this.percent / 100;
        if (!data)
            return;
        this.node.nativeElement.innerHTML = '';
        /** @type {?} */
        const self = this;
        /** @type {?} */
        const canvas = (/** @type {?} */ (this.node.nativeElement));
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
        for (let i = circleOffset; i < circleOffset + 2 * Math.PI; i += 1 / (8 * Math.PI)) {
            arcStack.push([radius + bR * Math.cos(i), radius + bR * Math.sin(i)]);
        }
        /** @type {?} */
        const cStartPoint = arcStack.shift();
        ctx.strokeStyle = this.color;
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
     * @param {?} radio
     * @return {?}
     */
    updateRadio(radio) {
        this.renderer.setStyle(this.el.nativeElement, 'transform', `scale(${radio})`);
    }
    /**
     * @return {?}
     */
    installResizeEvent() {
        if (this.resize$)
            return;
        this.resize$ = fromEvent(window, 'resize')
            .pipe(debounceTime(500))
            .subscribe(() => this.resize());
    }
    /**
     * @return {?}
     */
    resize() {
        const { offsetWidth } = this.el.nativeElement.parentNode;
        this.updateRadio(offsetWidth < this.height ? offsetWidth / this.height : 1);
        this.renderChart();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initFlag = true;
        this.cd.detectChanges();
        this.zone.runOutsideAngular(() => {
            this.updateRadio(1);
            this.installResizeEvent();
            setTimeout(() => this.resize(), 130);
        });
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.initFlag) {
            this.cd.detectChanges();
            this.zone.runOutsideAngular(() => this.renderChart());
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.timer)
            cancelAnimationFrame(this.timer);
        if (this.resize$)
            this.resize$.unsubscribe();
    }
}
G2WaterWaveComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-water-wave',
                template: "<div [ngStyle]=\"{'height.px': height, 'width.px': height, 'overflow': 'hidden'}\">\n  <canvas #container class=\"g2-water-wave__canvas\" width=\"{{height*2}}\" height=\"{{height*2}}\"></canvas>\n</div>\n<div class=\"g2-water-wave__desc\" [ngStyle]=\"{'width.px': height}\">\n  <ng-container *ngIf=\"_title; else _titleTpl\"><span class=\"g2-water-wave__desc-title\">{{_title}}</span></ng-container>\n  <h4 class=\"g2-water-wave__desc-percent\">{{percent}}%</h4>\n</div>\n",
                host: { '[class.g2-water-wave]': 'true' },
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
G2WaterWaveComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: NgZone }
];
G2WaterWaveComponent.propDecorators = {
    title: [{ type: Input }],
    color: [{ type: Input }],
    height: [{ type: Input }],
    percent: [{ type: Input }],
    node: [{ type: ViewChild, args: ['container',] }]
};
if (false) {
    /** @type {?} */
    G2WaterWaveComponent.prototype._title;
    /** @type {?} */
    G2WaterWaveComponent.prototype._titleTpl;
    /** @type {?} */
    G2WaterWaveComponent.prototype.color;
    /** @type {?} */
    G2WaterWaveComponent.prototype._height;
    /** @type {?} */
    G2WaterWaveComponent.prototype._percent;
    /** @type {?} */
    G2WaterWaveComponent.prototype.resize$;
    /** @type {?} */
    G2WaterWaveComponent.prototype.node;
    /** @type {?} */
    G2WaterWaveComponent.prototype.initFlag;
    /** @type {?} */
    G2WaterWaveComponent.prototype.timer;
    /** @type {?} */
    G2WaterWaveComponent.prototype.el;
    /** @type {?} */
    G2WaterWaveComponent.prototype.renderer;
    /** @type {?} */
    G2WaterWaveComponent.prototype.cd;
    /** @type {?} */
    G2WaterWaveComponent.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0ZXItd2F2ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vY2hhcnQvd2F0ZXItd2F2ZS8iLCJzb3VyY2VzIjpbIndhdGVyLXdhdmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUdWLE1BQU0sRUFDTixXQUFXLEVBRVgsU0FBUyxFQUNULHVCQUF1QixFQUN2QixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFnQixTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFRdkMsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7OztJQTZDL0IsWUFDVSxFQUFjLEVBQ2QsUUFBbUIsRUFDbkIsRUFBcUIsRUFDckIsSUFBWTtRQUhaLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQ3JCLFNBQUksR0FBSixJQUFJLENBQVE7O1FBOUN0QixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBYVosVUFBSyxHQUFHLFNBQVMsQ0FBQztRQVNWLFlBQU8sR0FBRyxHQUFHLENBQUM7O1FBYWQsWUFBTyxHQUFpQixJQUFJLENBQUM7UUFJN0IsYUFBUSxHQUFHLEtBQUssQ0FBQztJQVF0QixDQUFDOzs7OztJQTdDSixJQUNJLEtBQUssQ0FBQyxLQUFnQztRQUN4QyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDeEI7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEdB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QUM7SUFDTCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7U0FDdkQ7SUFDSCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLEtBQUs7WUFBRSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakQsSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDL0MsQ0FBQzs7O1lBN09GLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsb2VBQTBDO2dCQUMxQyxJQUFJLEVBQUUsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLEVBQUU7Z0JBQ3pDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBbkJDLFVBQVU7WUFNVixTQUFTO1lBRVQsaUJBQWlCO1lBTGpCLE1BQU07OztvQkFzQkwsS0FBSztvQkFVTCxLQUFLO3FCQUdMLEtBQUs7c0JBU0wsS0FBSzttQkFZTCxTQUFTLFNBQUMsV0FBVzs7OztJQXBDdEIsc0NBQVk7O0lBQ1oseUNBQTRCOztJQVc1QixxQ0FDa0I7O0lBU2xCLHVDQUFzQjs7SUFTdEIsd0NBQXlCOztJQUl6Qix1Q0FBcUM7O0lBQ3JDLG9DQUN5Qjs7SUFFekIsd0NBQXlCOztJQUN6QixxQ0FBbUI7O0lBR2pCLGtDQUFzQjs7SUFDdEIsd0NBQTJCOztJQUMzQixrQ0FBNkI7O0lBQzdCLG9DQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgT25EZXN0cm95LFxuICBPbkNoYW5nZXMsXG4gIE5nWm9uZSxcbiAgVGVtcGxhdGVSZWYsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IHRvTnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi13YXRlci13YXZlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dhdGVyLXdhdmUuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7ICdbY2xhc3MuZzItd2F0ZXItd2F2ZV0nOiAndHJ1ZScgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEcyV2F0ZXJXYXZlQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgX3RpdGxlID0gJyc7XG4gIF90aXRsZVRwbDogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KClcbiAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX3RpdGxlID0gbnVsbDtcbiAgICAgIHRoaXMuX3RpdGxlVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgY29sb3IgPSAnIzE4OTBGRic7XG5cbiAgQElucHV0KClcbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xuICB9XG4gIHNldCBoZWlnaHQodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX2hlaWdodCA9IHRvTnVtYmVyKHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9oZWlnaHQgPSAxNjA7XG5cbiAgQElucHV0KClcbiAgZ2V0IHBlcmNlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BlcmNlbnQ7XG4gIH1cbiAgc2V0IHBlcmNlbnQodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3BlcmNlbnQgPSB0b051bWJlcih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfcGVyY2VudDogbnVtYmVyO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBwcml2YXRlIHJlc2l6ZSQ6IFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicpXG4gIHByaXZhdGUgbm9kZTogRWxlbWVudFJlZjtcblxuICBwcml2YXRlIGluaXRGbGFnID0gZmFsc2U7XG4gIHByaXZhdGUgdGltZXI6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgKSB7fVxuXG4gIHByaXZhdGUgcmVuZGVyQ2hhcnQoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMucGVyY2VudCAvIDEwMDtcbiAgICBpZiAoIWRhdGEpIHJldHVybjtcblxuICAgIHRoaXMubm9kZS5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5ub2RlLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBjb25zdCBjYW52YXNXaWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICBjb25zdCBjYW52YXNIZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICAgIGNvbnN0IHJhZGl1cyA9IGNhbnZhc1dpZHRoIC8gMjtcbiAgICBjb25zdCBsaW5lV2lkdGggPSAyO1xuICAgIGNvbnN0IGNSID0gcmFkaXVzIC0gbGluZVdpZHRoO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5saW5lV2lkdGggPSBsaW5lV2lkdGggKiAyO1xuXG4gICAgY29uc3QgYXhpc0xlbmd0aCA9IGNhbnZhc1dpZHRoIC0gbGluZVdpZHRoO1xuICAgIGNvbnN0IHVuaXQgPSBheGlzTGVuZ3RoIC8gODtcbiAgICBjb25zdCByYW5nZSA9IDAuMjsgLy8g5oyv5bmFXG4gICAgbGV0IGN1cnJSYW5nZSA9IHJhbmdlO1xuICAgIGNvbnN0IHhPZmZzZXQgPSBsaW5lV2lkdGg7XG4gICAgbGV0IHNwID0gMDsgLy8g5ZGo5pyf5YGP56e76YePXG4gICAgbGV0IGN1cnJEYXRhID0gMDtcbiAgICBjb25zdCB3YXZldXBzcCA9IDAuMDA1OyAvLyDmsLTms6LkuIrmtqjpgJ/luqZcblxuICAgIGxldCBhcmNTdGFjayA9IFtdO1xuICAgIGNvbnN0IGJSID0gcmFkaXVzIC0gbGluZVdpZHRoO1xuICAgIGNvbnN0IGNpcmNsZU9mZnNldCA9IC0oTWF0aC5QSSAvIDIpO1xuICAgIGxldCBjaXJjbGVMb2NrID0gdHJ1ZTtcblxuICAgIGZvciAoXG4gICAgICBsZXQgaSA9IGNpcmNsZU9mZnNldDtcbiAgICAgIGkgPCBjaXJjbGVPZmZzZXQgKyAyICogTWF0aC5QSTtcbiAgICAgIGkgKz0gMSAvICg4ICogTWF0aC5QSSlcbiAgICApIHtcbiAgICAgIGFyY1N0YWNrLnB1c2goW3JhZGl1cyArIGJSICogTWF0aC5jb3MoaSksIHJhZGl1cyArIGJSICogTWF0aC5zaW4oaSldKTtcbiAgICB9XG5cbiAgICBjb25zdCBjU3RhcnRQb2ludCA9IGFyY1N0YWNrLnNoaWZ0KCk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICBjdHgubW92ZVRvKGNTdGFydFBvaW50WzBdLCBjU3RhcnRQb2ludFsxXSk7XG5cbiAgICBmdW5jdGlvbiBkcmF3U2luKCkge1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LnNhdmUoKTtcblxuICAgICAgY29uc3Qgc2luU3RhY2sgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSB4T2Zmc2V0OyBpIDw9IHhPZmZzZXQgKyBheGlzTGVuZ3RoOyBpICs9IDIwIC8gYXhpc0xlbmd0aCkge1xuICAgICAgICBjb25zdCB4ID0gc3AgKyAoeE9mZnNldCArIGkpIC8gdW5pdDtcbiAgICAgICAgY29uc3QgeSA9IE1hdGguc2luKHgpICogY3VyclJhbmdlO1xuICAgICAgICBjb25zdCBkeCA9IGk7XG4gICAgICAgIGNvbnN0IGR5ID0gMiAqIGNSICogKDEgLSBjdXJyRGF0YSkgKyAocmFkaXVzIC0gY1IpIC0gdW5pdCAqIHk7XG5cbiAgICAgICAgY3R4LmxpbmVUbyhkeCwgZHkpO1xuICAgICAgICBzaW5TdGFjay5wdXNoKFtkeCwgZHldKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc3RhcnRQb2ludCA9IHNpblN0YWNrLnNoaWZ0KCk7XG5cbiAgICAgIGN0eC5saW5lVG8oeE9mZnNldCArIGF4aXNMZW5ndGgsIGNhbnZhc0hlaWdodCk7XG4gICAgICBjdHgubGluZVRvKHhPZmZzZXQsIGNhbnZhc0hlaWdodCk7XG4gICAgICBjdHgubGluZVRvKHN0YXJ0UG9pbnRbMF0sIHN0YXJ0UG9pbnRbMV0pO1xuXG4gICAgICBjb25zdCBncmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCAwLCBjYW52YXNIZWlnaHQpO1xuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsICcjZmZmZmZmJyk7XG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgJyMxODkwRkYnKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBncmFkaWVudDtcbiAgICAgIGN0eC5maWxsKCk7XG4gICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCk7XG4gICAgICBpZiAoY2lyY2xlTG9jaykge1xuICAgICAgICBpZiAoYXJjU3RhY2subGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgdGVtcCA9IGFyY1N0YWNrLnNoaWZ0KCk7XG4gICAgICAgICAgY3R4LmxpbmVUbyh0ZW1wWzBdLCB0ZW1wWzFdKTtcbiAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2lyY2xlTG9jayA9IGZhbHNlO1xuICAgICAgICAgIGN0eC5saW5lVG8oY1N0YXJ0UG9pbnRbMF0sIGNTdGFydFBvaW50WzFdKTtcbiAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgYXJjU3RhY2sgPSBudWxsO1xuXG4gICAgICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1vdmVyJztcbiAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcbiAgICAgICAgICBjdHguYXJjKHJhZGl1cywgcmFkaXVzLCBiUiwgMCwgMiAqIE1hdGguUEksIHRydWUpO1xuXG4gICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgICAgY3R4LmFyYyhyYWRpdXMsIHJhZGl1cywgcmFkaXVzIC0gMyAqIGxpbmVXaWR0aCwgMCwgMiAqIE1hdGguUEksIHRydWUpO1xuXG4gICAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgICBjdHguY2xpcCgpO1xuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAnIzE4OTBGRic7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChkYXRhID49IDAuODUpIHtcbiAgICAgICAgICBpZiAoY3VyclJhbmdlID4gcmFuZ2UgLyA0KSB7XG4gICAgICAgICAgICBjb25zdCB0ID0gcmFuZ2UgKiAwLjAxO1xuICAgICAgICAgICAgY3VyclJhbmdlIC09IHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGRhdGEgPD0gMC4xKSB7XG4gICAgICAgICAgaWYgKGN1cnJSYW5nZSA8IHJhbmdlICogMS41KSB7XG4gICAgICAgICAgICBjb25zdCB0ID0gcmFuZ2UgKiAwLjAxO1xuICAgICAgICAgICAgY3VyclJhbmdlICs9IHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChjdXJyUmFuZ2UgPD0gcmFuZ2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHQgPSByYW5nZSAqIDAuMDE7XG4gICAgICAgICAgICBjdXJyUmFuZ2UgKz0gdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGN1cnJSYW5nZSA+PSByYW5nZSkge1xuICAgICAgICAgICAgY29uc3QgdCA9IHJhbmdlICogMC4wMTtcbiAgICAgICAgICAgIGN1cnJSYW5nZSAtPSB0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YSAtIGN1cnJEYXRhID4gMCkge1xuICAgICAgICAgIGN1cnJEYXRhICs9IHdhdmV1cHNwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhIC0gY3VyckRhdGEgPCAwKSB7XG4gICAgICAgICAgY3VyckRhdGEgLT0gd2F2ZXVwc3A7XG4gICAgICAgIH1cblxuICAgICAgICBzcCArPSAwLjA3O1xuICAgICAgICBkcmF3U2luKCk7XG4gICAgICB9XG4gICAgICBzZWxmLnRpbWVyID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgfVxuXG4gICAgcmVuZGVyKCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVJhZGlvKHJhZGlvOiBudW1iZXIpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgJ3RyYW5zZm9ybScsXG4gICAgICBgc2NhbGUoJHtyYWRpb30pYCxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsUmVzaXplRXZlbnQoKSB7XG4gICAgaWYgKHRoaXMucmVzaXplJCkgcmV0dXJuO1xuXG4gICAgdGhpcy5yZXNpemUkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUoNTAwKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZXNpemUoKSk7XG4gIH1cblxuICBwcml2YXRlIHJlc2l6ZSgpIHtcbiAgICBjb25zdCB7IG9mZnNldFdpZHRoIH0gPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICB0aGlzLnVwZGF0ZVJhZGlvKG9mZnNldFdpZHRoIDwgdGhpcy5oZWlnaHQgPyBvZmZzZXRXaWR0aCAvIHRoaXMuaGVpZ2h0IDogMSk7XG4gICAgdGhpcy5yZW5kZXJDaGFydCgpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0RmxhZyA9IHRydWU7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlUmFkaW8oMSk7XG4gICAgICB0aGlzLmluc3RhbGxSZXNpemVFdmVudCgpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlc2l6ZSgpLCAxMzApO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5pdEZsYWcpIHtcbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMucmVuZGVyQ2hhcnQoKSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGltZXIpIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMudGltZXIpO1xuICAgIGlmICh0aGlzLnJlc2l6ZSQpIHRoaXMucmVzaXplJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=