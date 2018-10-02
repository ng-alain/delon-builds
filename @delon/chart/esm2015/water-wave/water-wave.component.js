/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        const canvas = /** @type {?} */ (this.node.nativeElement);
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
        /** @type {?} */
        let currRange = range;
        /** @type {?} */
        const xOffset = lineWidth;
        /** @type {?} */
        let sp = 0;
        /** @type {?} */
        let currData = 0;
        /** @type {?} */
        const waveupsp = 0.005;
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
                template: `
  <div [ngStyle]="{'height.px': height, 'width.px': height, 'overflow': 'hidden'}">
    <canvas #container class="g2-water-wave__canvas" width="{{height*2}}" height="{{height*2}}"></canvas>
  </div>
  <div class="g2-water-wave__desc" [ngStyle]="{'width.px': height}">
    <ng-container *ngIf="_title; else _titleTpl"><span class="g2-water-wave__desc-title">{{_title}}</span></ng-container>
    <h4 class="g2-water-wave__desc-percent">{{percent}}%</h4>
  </div>`,
                host: { '[class.g2-water-wave]': 'true' },
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0ZXItd2F2ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vY2hhcnQvd2F0ZXItd2F2ZS8iLCJzb3VyY2VzIjpbIndhdGVyLXdhdmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUdWLE1BQU0sRUFDTixXQUFXLEVBRVgsU0FBUyxFQUNULHVCQUF1QixFQUN2QixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFnQixTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFnQnZDLE1BQU07Ozs7Ozs7SUE2Q0osWUFDVSxJQUNBLFVBQ0EsSUFDQTtRQUhBLE9BQUUsR0FBRixFQUFFO1FBQ0YsYUFBUSxHQUFSLFFBQVE7UUFDUixPQUFFLEdBQUYsRUFBRTtRQUNGLFNBQUksR0FBSixJQUFJOztzQkE5Q0wsRUFBRTtxQkFhSCxTQUFTO3VCQVNDLEdBQUc7dUJBYVcsSUFBSTt3QkFJakIsS0FBSztLQVFwQjs7Ozs7SUE3Q0osSUFDSSxLQUFLLENBQUMsS0FBZ0M7UUFDeEMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQ3hCO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQjtLQUNGOzs7O0lBS0QsSUFDSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQ3JCOzs7OztJQUNELElBQUksTUFBTSxDQUFDLEtBQVU7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFR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SSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDMUIsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN0QyxDQUFDLENBQUM7S0FDSjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZEO0tBQ0Y7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsS0FBSztZQUFFLG9CQUFvQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRCxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUM5Qzs7O1lBclBGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFOzs7Ozs7O1NBT0g7Z0JBQ1AsSUFBSSxFQUFFLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxFQUFFO2dCQUN6QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsbUJBQW1CLEVBQUUsS0FBSzthQUMzQjs7OztZQTNCQyxVQUFVO1lBTVYsU0FBUztZQUVULGlCQUFpQjtZQUxqQixNQUFNOzs7b0JBOEJMLEtBQUs7b0JBVUwsS0FBSztxQkFHTCxLQUFLO3NCQVNMLEtBQUs7bUJBWUwsU0FBUyxTQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgRWxlbWVudFJlZixcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE5nWm9uZSxcclxuICBUZW1wbGF0ZVJlZixcclxuICBPbkluaXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IHRvTnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnMi13YXRlci13YXZlJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXYgW25nU3R5bGVdPVwieydoZWlnaHQucHgnOiBoZWlnaHQsICd3aWR0aC5weCc6IGhlaWdodCwgJ292ZXJmbG93JzogJ2hpZGRlbid9XCI+XHJcbiAgICA8Y2FudmFzICNjb250YWluZXIgY2xhc3M9XCJnMi13YXRlci13YXZlX19jYW52YXNcIiB3aWR0aD1cInt7aGVpZ2h0KjJ9fVwiIGhlaWdodD1cInt7aGVpZ2h0KjJ9fVwiPjwvY2FudmFzPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJnMi13YXRlci13YXZlX19kZXNjXCIgW25nU3R5bGVdPVwieyd3aWR0aC5weCc6IGhlaWdodH1cIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJfdGl0bGU7IGVsc2UgX3RpdGxlVHBsXCI+PHNwYW4gY2xhc3M9XCJnMi13YXRlci13YXZlX19kZXNjLXRpdGxlXCI+e3tfdGl0bGV9fTwvc3Bhbj48L25nLWNvbnRhaW5lcj5cclxuICAgIDxoNCBjbGFzcz1cImcyLXdhdGVyLXdhdmVfX2Rlc2MtcGVyY2VudFwiPnt7cGVyY2VudH19JTwvaDQ+XHJcbiAgPC9kaXY+YCxcclxuICBob3N0OiB7ICdbY2xhc3MuZzItd2F0ZXItd2F2ZV0nOiAndHJ1ZScgfSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEcyV2F0ZXJXYXZlQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIE9uSW5pdCB7XHJcbiAgLy8gI3JlZ2lvbiBmaWVsZHNcclxuXHJcbiAgX3RpdGxlID0gJyc7XHJcbiAgX3RpdGxlVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLl90aXRsZSA9IG51bGw7XHJcbiAgICAgIHRoaXMuX3RpdGxlVHBsID0gdmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBjb2xvciA9ICcjMTg5MEZGJztcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgaGVpZ2h0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcclxuICB9XHJcbiAgc2V0IGhlaWdodCh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLl9oZWlnaHQgPSB0b051bWJlcih2YWx1ZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2hlaWdodCA9IDE2MDtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgcGVyY2VudCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9wZXJjZW50O1xyXG4gIH1cclxuICBzZXQgcGVyY2VudCh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLl9wZXJjZW50ID0gdG9OdW1iZXIodmFsdWUpO1xyXG4gIH1cclxuICBwcml2YXRlIF9wZXJjZW50OiBudW1iZXI7XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgcHJpdmF0ZSByZXNpemUkOiBTdWJzY3JpcHRpb24gPSBudWxsO1xyXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicpXHJcbiAgcHJpdmF0ZSBub2RlOiBFbGVtZW50UmVmO1xyXG5cclxuICBwcml2YXRlIGluaXRGbGFnID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSB0aW1lcjogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgem9uZTogTmdab25lLFxyXG4gICkge31cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJDaGFydCgpIHtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnBlcmNlbnQgLyAxMDA7XHJcbiAgICBpZiAoIWRhdGEpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLm5vZGUubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMubm9kZS5uYXRpdmVFbGVtZW50IGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgY29uc3QgY2FudmFzV2lkdGggPSBjYW52YXMud2lkdGg7XHJcbiAgICBjb25zdCBjYW52YXNIZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xyXG4gICAgY29uc3QgcmFkaXVzID0gY2FudmFzV2lkdGggLyAyO1xyXG4gICAgY29uc3QgbGluZVdpZHRoID0gMjtcclxuICAgIGNvbnN0IGNSID0gcmFkaXVzIC0gbGluZVdpZHRoO1xyXG5cclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5saW5lV2lkdGggPSBsaW5lV2lkdGggKiAyO1xyXG5cclxuICAgIGNvbnN0IGF4aXNMZW5ndGggPSBjYW52YXNXaWR0aCAtIGxpbmVXaWR0aDtcclxuICAgIGNvbnN0IHVuaXQgPSBheGlzTGVuZ3RoIC8gODtcclxuICAgIGNvbnN0IHJhbmdlID0gMC4yOyAvLyDmjK/luYVcclxuICAgIGxldCBjdXJyUmFuZ2UgPSByYW5nZTtcclxuICAgIGNvbnN0IHhPZmZzZXQgPSBsaW5lV2lkdGg7XHJcbiAgICBsZXQgc3AgPSAwOyAvLyDlkajmnJ/lgY/np7vph49cclxuICAgIGxldCBjdXJyRGF0YSA9IDA7XHJcbiAgICBjb25zdCB3YXZldXBzcCA9IDAuMDA1OyAvLyDmsLTms6LkuIrmtqjpgJ/luqZcclxuXHJcbiAgICBsZXQgYXJjU3RhY2sgPSBbXTtcclxuICAgIGNvbnN0IGJSID0gcmFkaXVzIC0gbGluZVdpZHRoO1xyXG4gICAgY29uc3QgY2lyY2xlT2Zmc2V0ID0gLShNYXRoLlBJIC8gMik7XHJcbiAgICBsZXQgY2lyY2xlTG9jayA9IHRydWU7XHJcblxyXG4gICAgZm9yIChcclxuICAgICAgbGV0IGkgPSBjaXJjbGVPZmZzZXQ7XHJcbiAgICAgIGkgPCBjaXJjbGVPZmZzZXQgKyAyICogTWF0aC5QSTtcclxuICAgICAgaSArPSAxIC8gKDggKiBNYXRoLlBJKVxyXG4gICAgKSB7XHJcbiAgICAgIGFyY1N0YWNrLnB1c2goW3JhZGl1cyArIGJSICogTWF0aC5jb3MoaSksIHJhZGl1cyArIGJSICogTWF0aC5zaW4oaSldKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjU3RhcnRQb2ludCA9IGFyY1N0YWNrLnNoaWZ0KCk7XHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG4gICAgY3R4Lm1vdmVUbyhjU3RhcnRQb2ludFswXSwgY1N0YXJ0UG9pbnRbMV0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGRyYXdTaW4oKSB7XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4LnNhdmUoKTtcclxuXHJcbiAgICAgIGNvbnN0IHNpblN0YWNrID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSB4T2Zmc2V0OyBpIDw9IHhPZmZzZXQgKyBheGlzTGVuZ3RoOyBpICs9IDIwIC8gYXhpc0xlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IHggPSBzcCArICh4T2Zmc2V0ICsgaSkgLyB1bml0O1xyXG4gICAgICAgIGNvbnN0IHkgPSBNYXRoLnNpbih4KSAqIGN1cnJSYW5nZTtcclxuICAgICAgICBjb25zdCBkeCA9IGk7XHJcbiAgICAgICAgY29uc3QgZHkgPSAyICogY1IgKiAoMSAtIGN1cnJEYXRhKSArIChyYWRpdXMgLSBjUikgLSB1bml0ICogeTtcclxuXHJcbiAgICAgICAgY3R4LmxpbmVUbyhkeCwgZHkpO1xyXG4gICAgICAgIHNpblN0YWNrLnB1c2goW2R4LCBkeV0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBzdGFydFBvaW50ID0gc2luU3RhY2suc2hpZnQoKTtcclxuXHJcbiAgICAgIGN0eC5saW5lVG8oeE9mZnNldCArIGF4aXNMZW5ndGgsIGNhbnZhc0hlaWdodCk7XHJcbiAgICAgIGN0eC5saW5lVG8oeE9mZnNldCwgY2FudmFzSGVpZ2h0KTtcclxuICAgICAgY3R4LmxpbmVUbyhzdGFydFBvaW50WzBdLCBzdGFydFBvaW50WzFdKTtcclxuXHJcbiAgICAgIGNvbnN0IGdyYWRpZW50ID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIDAsIGNhbnZhc0hlaWdodCk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCAnI2ZmZmZmZicpO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgJyMxODkwRkYnKTtcclxuICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xyXG4gICAgICBjdHguZmlsbCgpO1xyXG4gICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcclxuICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KTtcclxuICAgICAgaWYgKGNpcmNsZUxvY2spIHtcclxuICAgICAgICBpZiAoYXJjU3RhY2subGVuZ3RoKSB7XHJcbiAgICAgICAgICBjb25zdCB0ZW1wID0gYXJjU3RhY2suc2hpZnQoKTtcclxuICAgICAgICAgIGN0eC5saW5lVG8odGVtcFswXSwgdGVtcFsxXSk7XHJcbiAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNpcmNsZUxvY2sgPSBmYWxzZTtcclxuICAgICAgICAgIGN0eC5saW5lVG8oY1N0YXJ0UG9pbnRbMF0sIGNTdGFydFBvaW50WzFdKTtcclxuICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICAgIGFyY1N0YWNrID0gbnVsbDtcclxuXHJcbiAgICAgICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW92ZXInO1xyXG4gICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcclxuICAgICAgICAgIGN0eC5hcmMocmFkaXVzLCByYWRpdXMsIGJSLCAwLCAyICogTWF0aC5QSSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICAgIGN0eC5hcmMocmFkaXVzLCByYWRpdXMsIHJhZGl1cyAtIDMgKiBsaW5lV2lkdGgsIDAsIDIgKiBNYXRoLlBJLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICAgICAgY3R4LmNsaXAoKTtcclxuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAnIzE4OTBGRic7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChkYXRhID49IDAuODUpIHtcclxuICAgICAgICAgIGlmIChjdXJyUmFuZ2UgPiByYW5nZSAvIDQpIHtcclxuICAgICAgICAgICAgY29uc3QgdCA9IHJhbmdlICogMC4wMTtcclxuICAgICAgICAgICAgY3VyclJhbmdlIC09IHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhIDw9IDAuMSkge1xyXG4gICAgICAgICAgaWYgKGN1cnJSYW5nZSA8IHJhbmdlICogMS41KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHQgPSByYW5nZSAqIDAuMDE7XHJcbiAgICAgICAgICAgIGN1cnJSYW5nZSArPSB0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoY3VyclJhbmdlIDw9IHJhbmdlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHQgPSByYW5nZSAqIDAuMDE7XHJcbiAgICAgICAgICAgIGN1cnJSYW5nZSArPSB0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGN1cnJSYW5nZSA+PSByYW5nZSkge1xyXG4gICAgICAgICAgICBjb25zdCB0ID0gcmFuZ2UgKiAwLjAxO1xyXG4gICAgICAgICAgICBjdXJyUmFuZ2UgLT0gdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRhdGEgLSBjdXJyRGF0YSA+IDApIHtcclxuICAgICAgICAgIGN1cnJEYXRhICs9IHdhdmV1cHNwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGF0YSAtIGN1cnJEYXRhIDwgMCkge1xyXG4gICAgICAgICAgY3VyckRhdGEgLT0gd2F2ZXVwc3A7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzcCArPSAwLjA3O1xyXG4gICAgICAgIGRyYXdTaW4oKTtcclxuICAgICAgfVxyXG4gICAgICBzZWxmLnRpbWVyID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZVJhZGlvKHJhZGlvOiBudW1iZXIpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcclxuICAgICAgJ3RyYW5zZm9ybScsXHJcbiAgICAgIGBzY2FsZSgke3JhZGlvfSlgLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5zdGFsbFJlc2l6ZUV2ZW50KCkge1xyXG4gICAgaWYgKHRoaXMucmVzaXplJCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMucmVzaXplJCA9IGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxyXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUoNTAwKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlc2l6ZSgpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzaXplKCkge1xyXG4gICAgY29uc3QgeyBvZmZzZXRXaWR0aCB9ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGU7XHJcbiAgICB0aGlzLnVwZGF0ZVJhZGlvKG9mZnNldFdpZHRoIDwgdGhpcy5oZWlnaHQgPyBvZmZzZXRXaWR0aCAvIHRoaXMuaGVpZ2h0IDogMSk7XHJcbiAgICB0aGlzLnJlbmRlckNoYXJ0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5pdEZsYWcgPSB0cnVlO1xyXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICB0aGlzLnVwZGF0ZVJhZGlvKDEpO1xyXG4gICAgICB0aGlzLmluc3RhbGxSZXNpemVFdmVudCgpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmVzaXplKCksIDEzMCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5pdEZsYWcpIHtcclxuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLnJlbmRlckNoYXJ0KCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50aW1lcikgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy50aW1lcik7XHJcbiAgICBpZiAodGhpcy5yZXNpemUkKSB0aGlzLnJlc2l6ZSQudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuIl19