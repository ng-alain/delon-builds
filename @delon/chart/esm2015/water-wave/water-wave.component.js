import { __decorate, __metadata } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, NgZone, Renderer2, ViewChild, ViewEncapsulation, } from '@angular/core';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/platform";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/core/outlet";
export class G2WaterWaveComponent {
    // #endregion
    constructor(el, renderer, ngZone, cdr, platform) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.cdr = cdr;
        this.platform = platform;
        this.resize$ = null;
        // #region fields
        this.animate = true;
        this.delay = 0;
        this.color = '#1890FF';
        this.height = 160;
    }
    renderChart(isUpdate) {
        if (!this.resize$)
            return;
        this.updateRadio();
        const { percent, color, node, animate } = this;
        const data = Math.min(Math.max(percent / 100, 0), 100);
        const self = this;
        cancelAnimationFrame(this.timer);
        const canvas = node.nativeElement;
        const ctx = canvas.getContext('2d');
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        const radius = canvasWidth / 2;
        const lineWidth = 2;
        const cR = radius - lineWidth;
        ctx.beginPath();
        ctx.lineWidth = lineWidth * 2;
        const axisLength = canvasWidth - lineWidth;
        const unit = axisLength / 8;
        const xOffset = lineWidth;
        let sp = 0; // 周期偏移量
        const range = 0.2; // 振幅
        let currRange = range;
        let currData = 0;
        const waveupsp = animate ? 0.005 : 0.015; // 水波上涨速度
        let arcStack = [];
        const bR = radius - lineWidth;
        const circleOffset = -(Math.PI / 2);
        let circleLock = true;
        // tslint:disable-next-line:binary-expression-operand-order
        for (let i = circleOffset; i < circleOffset + 2 * Math.PI; i += 1 / (8 * Math.PI)) {
            arcStack.push([radius + bR * Math.cos(i), radius + bR * Math.sin(i)]);
        }
        const cStartPoint = arcStack.shift();
        ctx.strokeStyle = color;
        ctx.moveTo(cStartPoint[0], cStartPoint[1]);
        function drawSin() {
            ctx.beginPath();
            ctx.save();
            const sinStack = [];
            for (let i = xOffset; i <= xOffset + axisLength; i += 20 / axisLength) {
                const x = sp + (xOffset + i) / unit;
                const y = Math.sin(x) * currRange;
                const dx = i;
                // tslint:disable-next-line:binary-expression-operand-order
                const dy = 2 * cR * (1 - currData) + (radius - cR) - unit * y;
                ctx.lineTo(dx, dy);
                sinStack.push([dx, dy]);
            }
            const startPoint = sinStack.shift();
            ctx.lineTo(xOffset + axisLength, canvasHeight);
            ctx.lineTo(xOffset, canvasHeight);
            ctx.lineTo(startPoint[0], startPoint[1]);
            const gradient = ctx.createLinearGradient(0, 0, 0, canvasHeight);
            gradient.addColorStop(0, '#ffffff');
            gradient.addColorStop(1, color);
            ctx.fillStyle = gradient;
            ctx.fill();
            ctx.restore();
        }
        function render() {
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            if (circleLock && !isUpdate) {
                if (arcStack.length) {
                    if (animate) {
                        const temp = arcStack.shift();
                        ctx.lineTo(temp[0], temp[1]);
                        ctx.stroke();
                    }
                    else {
                        for (const temp of arcStack) {
                            ctx.lineTo(temp[0], temp[1]);
                            ctx.stroke();
                        }
                        arcStack = [];
                    }
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
                        const t = range * 0.01;
                        currRange -= t;
                    }
                }
                else if (data <= 0.1) {
                    if (currRange < range * 1.5) {
                        const t = range * 0.01;
                        currRange += t;
                    }
                }
                else {
                    if (currRange <= range) {
                        const t = range * 0.01;
                        currRange += t;
                    }
                    if (currRange >= range) {
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
        // drawSin();
    }
    updateRadio() {
        const { offsetWidth } = this.el.nativeElement.parentNode;
        const radio = offsetWidth < this.height ? offsetWidth / this.height : 1;
        this.renderer.setStyle(this.el.nativeElement, 'transform', `scale(${radio})`);
    }
    render() {
        this.renderChart(false);
    }
    installResizeEvent() {
        this.resize$ = fromEvent(window, 'resize')
            .pipe(debounceTime(200))
            .subscribe(() => this.updateRadio());
    }
    ngOnInit() {
        if (!this.platform.isBrowser) {
            return;
        }
        this.installResizeEvent();
        this.ngZone.runOutsideAngular(() => setTimeout(() => this.render(), this.delay));
    }
    ngOnChanges() {
        this.ngZone.runOutsideAngular(() => this.renderChart(true));
        this.cdr.detectChanges();
    }
    ngOnDestroy() {
        if (this.timer) {
            cancelAnimationFrame(this.timer);
        }
        if (this.resize$) {
            this.resize$.unsubscribe();
        }
    }
}
/** @nocollapse */ G2WaterWaveComponent.ɵfac = function G2WaterWaveComponent_Factory(t) { return new (t || G2WaterWaveComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.Platform)); };
/** @nocollapse */ G2WaterWaveComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: G2WaterWaveComponent, selector: "g2-water-wave", inputs: { animate: "animate", delay: "delay", title: "title", color: "color", height: "height", percent: "percent" }, host: { properties: { "class.g2-water-wave": "true" } }, viewQueries: [{ propertyName: "node", first: true, predicate: ["container"], emitDistinctChangesOnly: false, descendants: true, static: true }], exportAs: ["g2WaterWave"], usesOnChanges: true, ngImport: i0, template: "<div [ngStyle]=\"{ 'height.px': height, 'width.px': height, overflow: 'hidden' }\">\n  <canvas #container class=\"g2-water-wave__canvas\" width=\"{{ height * 2 }}\" height=\"{{ height * 2 }}\"></canvas>\n</div>\n<div class=\"g2-water-wave__desc\" [ngStyle]=\"{ 'width.px': height }\">\n  <span *ngIf=\"title\" class=\"g2-water-wave__desc-title\">\n    <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n  </span>\n  <h4 class=\"g2-water-wave__desc-percent\">{{ percent }}%</h4>\n</div>\n", directives: [{ type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2WaterWaveComponent.prototype, "animate", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2WaterWaveComponent.prototype, "delay", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2WaterWaveComponent.prototype, "height", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], G2WaterWaveComponent.prototype, "percent", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(G2WaterWaveComponent, [{
        type: Component,
        args: [{
                selector: 'g2-water-wave',
                exportAs: 'g2WaterWave',
                templateUrl: './water-wave.component.html',
                host: { '[class.g2-water-wave]': 'true' },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }, { type: i0.ChangeDetectorRef }, { type: i1.Platform }]; }, { node: [{
            type: ViewChild,
            args: ['container', { static: true }]
        }], animate: [{
            type: Input
        }], delay: [{
            type: Input
        }], title: [{
            type: Input
        }], color: [{
            type: Input
        }], height: [{
            type: Input
        }], percent: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0ZXItd2F2ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jaGFydC93YXRlci13YXZlL3dhdGVyLXdhdmUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvd2F0ZXItd2F2ZS93YXRlci13YXZlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUlOLFNBQVMsRUFFVCxTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxNQUFNLHVCQUF1QixDQUFDO0FBQzdGLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFXOUMsTUFBTSxPQUFPLG9CQUFvQjtJQW1CL0IsYUFBYTtJQUViLFlBQ1UsRUFBYyxFQUNkLFFBQW1CLEVBQ25CLE1BQWMsRUFDZCxHQUFzQixFQUN0QixRQUFrQjtRQUpsQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQXBCcEIsWUFBTyxHQUF3QixJQUFJLENBQUM7UUFJNUMsaUJBQWlCO1FBRVEsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNoQixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRXpCLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDSCxXQUFN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akI3QixvQkFBb0I7Y0FUaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUUsYUFBYTtnQkFDdkIsV0FBVyxFQUFFLDZCQUE2QjtnQkFDMUMsSUFBSSxFQUFFLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxFQUFFO2dCQUN6QyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7aUtBUW1ELElBQUk7a0JBQXJELFNBQVM7bUJBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUtmLE9BQU87a0JBQS9CLEtBQUs7WUFDa0IsS0FBSztrQkFBNUIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNrQixNQUFNO2tCQUE3QixLQUFLO1lBQ2tCLE9BQU87a0JBQTlCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIE51bWJlcklucHV0IH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLXdhdGVyLXdhdmUnLFxuICBleHBvcnRBczogJ2cyV2F0ZXJXYXZlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dhdGVyLXdhdmUuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7ICdbY2xhc3MuZzItd2F0ZXItd2F2ZV0nOiAndHJ1ZScgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBHMldhdGVyV2F2ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBPbkluaXQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYW5pbWF0ZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGVsYXk6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaGVpZ2h0OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3BlcmNlbnQ6IE51bWJlcklucHV0O1xuXG4gIHByaXZhdGUgcmVzaXplJDogU3Vic2NyaXB0aW9uIHwgbnVsbCA9IG51bGw7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pIHByaXZhdGUgbm9kZTogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSB0aW1lcjogbnVtYmVyO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGFuaW1hdGUgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBkZWxheSA9IDA7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgY29sb3IgPSAnIzE4OTBGRic7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGhlaWdodCA9IDE2MDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgcGVyY2VudDogbnVtYmVyO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgKSB7fVxuXG4gIHByaXZhdGUgcmVuZGVyQ2hhcnQoaXNVcGRhdGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucmVzaXplJCkgcmV0dXJuO1xuXG4gICAgdGhpcy51cGRhdGVSYWRpbygpO1xuXG4gICAgY29uc3QgeyBwZXJjZW50LCBjb2xvciwgbm9kZSwgYW5pbWF0ZSB9ID0gdGhpcztcblxuICAgIGNvbnN0IGRhdGEgPSBNYXRoLm1pbihNYXRoLm1heChwZXJjZW50IC8gMTAwLCAwKSwgMTAwKTtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnRpbWVyKTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IG5vZGUubmF0aXZlRWxlbWVudCBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgY29uc3QgY2FudmFzV2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgY29uc3QgY2FudmFzSGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgICBjb25zdCByYWRpdXMgPSBjYW52YXNXaWR0aCAvIDI7XG4gICAgY29uc3QgbGluZVdpZHRoID0gMjtcbiAgICBjb25zdCBjUiA9IHJhZGl1cyAtIGxpbmVXaWR0aDtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoICogMjtcblxuICAgIGNvbnN0IGF4aXNMZW5ndGggPSBjYW52YXNXaWR0aCAtIGxpbmVXaWR0aDtcbiAgICBjb25zdCB1bml0ID0gYXhpc0xlbmd0aCAvIDg7XG4gICAgY29uc3QgeE9mZnNldCA9IGxpbmVXaWR0aDtcbiAgICBsZXQgc3AgPSAwOyAvLyDlkajmnJ/lgY/np7vph49cbiAgICBjb25zdCByYW5nZSA9IDAuMjsgLy8g5oyv5bmFXG4gICAgbGV0IGN1cnJSYW5nZSA9IHJhbmdlO1xuICAgIGxldCBjdXJyRGF0YSA9IDA7XG4gICAgY29uc3Qgd2F2ZXVwc3AgPSBhbmltYXRlID8gMC4wMDUgOiAwLjAxNTsgLy8g5rC05rOi5LiK5rao6YCf5bqmXG5cbiAgICBsZXQgYXJjU3RhY2s6IFtbbnVtYmVyLCBudW1iZXJdP10gfCBudWxsID0gW107XG4gICAgY29uc3QgYlIgPSByYWRpdXMgLSBsaW5lV2lkdGg7XG4gICAgY29uc3QgY2lyY2xlT2Zmc2V0ID0gLShNYXRoLlBJIC8gMik7XG4gICAgbGV0IGNpcmNsZUxvY2sgPSB0cnVlO1xuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXJcbiAgICBmb3IgKGxldCBpID0gY2lyY2xlT2Zmc2V0OyBpIDwgY2lyY2xlT2Zmc2V0ICsgMiAqIE1hdGguUEk7IGkgKz0gMSAvICg4ICogTWF0aC5QSSkpIHtcbiAgICAgIGFyY1N0YWNrLnB1c2goW3JhZGl1cyArIGJSICogTWF0aC5jb3MoaSksIHJhZGl1cyArIGJSICogTWF0aC5zaW4oaSldKTtcbiAgICB9XG5cbiAgICBjb25zdCBjU3RhcnRQb2ludCA9IGFyY1N0YWNrLnNoaWZ0KCkgYXMgW251bWJlciwgbnVtYmVyXTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICBjdHgubW92ZVRvKGNTdGFydFBvaW50WzBdLCBjU3RhcnRQb2ludFsxXSk7XG5cbiAgICBmdW5jdGlvbiBkcmF3U2luKCk6IHZvaWQge1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LnNhdmUoKTtcblxuICAgICAgY29uc3Qgc2luU3RhY2s6IFtbbnVtYmVyLCBudW1iZXJdP10gPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSB4T2Zmc2V0OyBpIDw9IHhPZmZzZXQgKyBheGlzTGVuZ3RoOyBpICs9IDIwIC8gYXhpc0xlbmd0aCkge1xuICAgICAgICBjb25zdCB4ID0gc3AgKyAoeE9mZnNldCArIGkpIC8gdW5pdDtcbiAgICAgICAgY29uc3QgeSA9IE1hdGguc2luKHgpICogY3VyclJhbmdlO1xuICAgICAgICBjb25zdCBkeCA9IGk7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyXG4gICAgICAgIGNvbnN0IGR5ID0gMiAqIGNSICogKDEgLSBjdXJyRGF0YSkgKyAocmFkaXVzIC0gY1IpIC0gdW5pdCAqIHk7XG5cbiAgICAgICAgY3R4LmxpbmVUbyhkeCwgZHkpO1xuICAgICAgICBzaW5TdGFjay5wdXNoKFtkeCwgZHldKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc3RhcnRQb2ludCA9IHNpblN0YWNrLnNoaWZ0KCkgYXMgW251bWJlciwgbnVtYmVyXTtcblxuICAgICAgY3R4LmxpbmVUbyh4T2Zmc2V0ICsgYXhpc0xlbmd0aCwgY2FudmFzSGVpZ2h0KTtcbiAgICAgIGN0eC5saW5lVG8oeE9mZnNldCwgY2FudmFzSGVpZ2h0KTtcbiAgICAgIGN0eC5saW5lVG8oc3RhcnRQb2ludFswXSwgc3RhcnRQb2ludFsxXSk7XG5cbiAgICAgIGNvbnN0IGdyYWRpZW50ID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIDAsIGNhbnZhc0hlaWdodCk7XG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgJyNmZmZmZmYnKTtcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCBjb2xvcik7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XG4gICAgICBjdHguZmlsbCgpO1xuICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXIoKTogdm9pZCB7XG4gICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpO1xuICAgICAgaWYgKGNpcmNsZUxvY2sgJiYgIWlzVXBkYXRlKSB7XG4gICAgICAgIGlmIChhcmNTdGFjayEubGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKGFuaW1hdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBhcmNTdGFjayEuc2hpZnQoKSBhcyBbbnVtYmVyLCBudW1iZXJdO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0ZW1wWzBdLCB0ZW1wWzFdKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChjb25zdCB0ZW1wIG9mIGFyY1N0YWNrISkge1xuICAgICAgICAgICAgICBjdHgubGluZVRvKHRlbXAhWzBdLCB0ZW1wIVsxXSk7XG4gICAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFyY1N0YWNrID0gW107XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNpcmNsZUxvY2sgPSBmYWxzZTtcbiAgICAgICAgICBjdHgubGluZVRvKGNTdGFydFBvaW50WzBdLCBjU3RhcnRQb2ludFsxXSk7XG4gICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgIGFyY1N0YWNrID0gbnVsbDtcblxuICAgICAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3Zlcic7XG4gICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgIGN0eC5saW5lV2lkdGggPSBsaW5lV2lkdGg7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXJcbiAgICAgICAgICBjdHguYXJjKHJhZGl1cywgcmFkaXVzLCBiUiwgMCwgMiAqIE1hdGguUEksIHRydWUpO1xuXG4gICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXJcbiAgICAgICAgICBjdHguYXJjKHJhZGl1cywgcmFkaXVzLCByYWRpdXMgLSAzICogbGluZVdpZHRoLCAwLCAyICogTWF0aC5QSSwgdHJ1ZSk7XG5cbiAgICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgICAgICAgIGN0eC5jbGlwKCk7XG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZGF0YSA+PSAwLjg1KSB7XG4gICAgICAgICAgaWYgKGN1cnJSYW5nZSA+IHJhbmdlIC8gNCkge1xuICAgICAgICAgICAgY29uc3QgdCA9IHJhbmdlICogMC4wMTtcbiAgICAgICAgICAgIGN1cnJSYW5nZSAtPSB0O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkYXRhIDw9IDAuMSkge1xuICAgICAgICAgIGlmIChjdXJyUmFuZ2UgPCByYW5nZSAqIDEuNSkge1xuICAgICAgICAgICAgY29uc3QgdCA9IHJhbmdlICogMC4wMTtcbiAgICAgICAgICAgIGN1cnJSYW5nZSArPSB0O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoY3VyclJhbmdlIDw9IHJhbmdlKSB7XG4gICAgICAgICAgICBjb25zdCB0ID0gcmFuZ2UgKiAwLjAxO1xuICAgICAgICAgICAgY3VyclJhbmdlICs9IHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjdXJyUmFuZ2UgPj0gcmFuZ2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHQgPSByYW5nZSAqIDAuMDE7XG4gICAgICAgICAgICBjdXJyUmFuZ2UgLT0gdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEgLSBjdXJyRGF0YSA+IDApIHtcbiAgICAgICAgICBjdXJyRGF0YSArPSB3YXZldXBzcDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YSAtIGN1cnJEYXRhIDwgMCkge1xuICAgICAgICAgIGN1cnJEYXRhIC09IHdhdmV1cHNwO1xuICAgICAgICB9XG5cbiAgICAgICAgc3AgKz0gMC4wNztcbiAgICAgICAgZHJhd1NpbigpO1xuICAgICAgfVxuICAgICAgc2VsZi50aW1lciA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgIH1cblxuICAgIHJlbmRlcigpO1xuICAgIC8vIGRyYXdTaW4oKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUmFkaW8oKTogdm9pZCB7XG4gICAgY29uc3QgeyBvZmZzZXRXaWR0aCB9ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGU7XG4gICAgY29uc3QgcmFkaW8gPSBvZmZzZXRXaWR0aCA8IHRoaXMuaGVpZ2h0ID8gb2Zmc2V0V2lkdGggLyB0aGlzLmhlaWdodCA6IDE7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgc2NhbGUoJHtyYWRpb30pYCk7XG4gIH1cblxuICByZW5kZXIoKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJDaGFydChmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGxSZXNpemVFdmVudCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlc2l6ZSQgPSBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcbiAgICAgIC5waXBlKGRlYm91bmNlVGltZSgyMDApKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZVJhZGlvKCkpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmluc3RhbGxSZXNpemVFdmVudCgpO1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZW5kZXIoKSwgdGhpcy5kZWxheSkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5yZW5kZXJDaGFydCh0cnVlKSk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGltZXIpIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMudGltZXIpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZXNpemUkKSB7XG4gICAgICB0aGlzLnJlc2l6ZSQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXYgW25nU3R5bGVdPVwieyAnaGVpZ2h0LnB4JzogaGVpZ2h0LCAnd2lkdGgucHgnOiBoZWlnaHQsIG92ZXJmbG93OiAnaGlkZGVuJyB9XCI+XG4gIDxjYW52YXMgI2NvbnRhaW5lciBjbGFzcz1cImcyLXdhdGVyLXdhdmVfX2NhbnZhc1wiIHdpZHRoPVwie3sgaGVpZ2h0ICogMiB9fVwiIGhlaWdodD1cInt7IGhlaWdodCAqIDIgfX1cIj48L2NhbnZhcz5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImcyLXdhdGVyLXdhdmVfX2Rlc2NcIiBbbmdTdHlsZV09XCJ7ICd3aWR0aC5weCc6IGhlaWdodCB9XCI+XG4gIDxzcGFuICpuZ0lmPVwidGl0bGVcIiBjbGFzcz1cImcyLXdhdGVyLXdhdmVfX2Rlc2MtdGl0bGVcIj5cbiAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwidGl0bGVcIj57eyB0aXRsZSB9fTwvbmctY29udGFpbmVyPlxuICA8L3NwYW4+XG4gIDxoNCBjbGFzcz1cImcyLXdhdGVyLXdhdmVfX2Rlc2MtcGVyY2VudFwiPnt7IHBlcmNlbnQgfX0lPC9oND5cbjwvZGl2PlxuIl19