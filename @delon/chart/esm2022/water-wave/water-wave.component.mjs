import { __decorate } from "tslib";
import { NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { fromEvent, debounceTime } from 'rxjs';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/platform";
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
        // eslint-disable-next-line @typescript-eslint/no-this-alias
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
                    ctx.arc(radius, radius, bR, 0, 2 * Math.PI, true);
                    ctx.beginPath();
                    ctx.save();
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: G2WaterWaveComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }, { token: i0.ChangeDetectorRef }, { token: i1.Platform }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.9", type: G2WaterWaveComponent, isStandalone: true, selector: "g2-water-wave", inputs: { animate: "animate", delay: "delay", title: "title", color: "color", height: "height", percent: "percent" }, host: { properties: { "class.g2-water-wave": "true" } }, viewQueries: [{ propertyName: "node", first: true, predicate: ["container"], descendants: true, static: true }], exportAs: ["g2WaterWave"], usesOnChanges: true, ngImport: i0, template: "<div [ngStyle]=\"{ 'height.px': height, 'width.px': height, overflow: 'hidden' }\">\n  <canvas #container class=\"g2-water-wave__canvas\" width=\"{{ height * 2 }}\" height=\"{{ height * 2 }}\"></canvas>\n</div>\n<div class=\"g2-water-wave__desc\" [ngStyle]=\"{ 'width.px': height }\">\n  @if (title) {\n    <span class=\"g2-water-wave__desc-title\">\n      <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n    </span>\n  }\n  <h4 class=\"g2-water-wave__desc-percent\">{{ percent }}%</h4>\n</div>\n", dependencies: [{ kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputBoolean()
], G2WaterWaveComponent.prototype, "animate", void 0);
__decorate([
    InputNumber()
], G2WaterWaveComponent.prototype, "delay", void 0);
__decorate([
    InputNumber()
], G2WaterWaveComponent.prototype, "height", void 0);
__decorate([
    InputNumber()
], G2WaterWaveComponent.prototype, "percent", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: G2WaterWaveComponent, decorators: [{
            type: Component,
            args: [{ selector: 'g2-water-wave', exportAs: 'g2WaterWave', host: { '[class.g2-water-wave]': 'true' }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, standalone: true, imports: [NgStyle, NzStringTemplateOutletDirective], template: "<div [ngStyle]=\"{ 'height.px': height, 'width.px': height, overflow: 'hidden' }\">\n  <canvas #container class=\"g2-water-wave__canvas\" width=\"{{ height * 2 }}\" height=\"{{ height * 2 }}\"></canvas>\n</div>\n<div class=\"g2-water-wave__desc\" [ngStyle]=\"{ 'width.px': height }\">\n  @if (title) {\n    <span class=\"g2-water-wave__desc-title\">\n      <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n    </span>\n  }\n  <h4 class=\"g2-water-wave__desc-percent\">{{ percent }}%</h4>\n</div>\n" }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }, { type: i0.ChangeDetectorRef }, { type: i1.Platform }], propDecorators: { node: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0ZXItd2F2ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jaGFydC93YXRlci13YXZlL3dhdGVyLXdhdmUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvd2F0ZXItd2F2ZS93YXRlci13YXZlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDMUMsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsS0FBSyxFQU9MLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTdELE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxNQUFNLHVCQUF1QixDQUFDO0FBQzdGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7QUFhNUUsTUFBTSxPQUFPLG9CQUFvQjtJQW1CL0IsYUFBYTtJQUViLFlBQ1UsRUFBYyxFQUNkLFFBQW1CLEVBQ25CLE1BQWMsRUFDZCxHQUFzQixFQUN0QixRQUFrQjtRQUpsQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQXBCcEIsWUFBTyxHQUF3QixJQUFJLENBQUM7UUFJNUMsaUJBQWlCO1FBRVEsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNoQixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRXpCLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDSCxXQUFNLEdBQUcsR0FBRyxDQUFDO0lBV2xDLENBQUM7SUFFSSxX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LHVCQUF1QixFQUFFLE1BQU0sRUFBRSx1QkFDcEIsS0FBSyxtQkFDVCx1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJLGNBQ3pCLElBQUksV0FDUCxDQUFDLE9BQU8sRUFBRSwrQkFBK0IsQ0FBQzttTEFTRCxJQUFJO3NCQUFyRCxTQUFTO3VCQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBS2YsT0FBTztzQkFBL0IsS0FBSztnQkFDa0IsS0FBSztzQkFBNUIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNrQixNQUFNO3NCQUE3QixLQUFLO2dCQUNrQixPQUFPO3NCQUE5QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgTmdTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3Vic2NyaXB0aW9uLCBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgeyBOelN0cmluZ1RlbXBsYXRlT3V0bGV0RGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL291dGxldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLXdhdGVyLXdhdmUnLFxuICBleHBvcnRBczogJ2cyV2F0ZXJXYXZlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dhdGVyLXdhdmUuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7ICdbY2xhc3MuZzItd2F0ZXItd2F2ZV0nOiAndHJ1ZScgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTmdTdHlsZSwgTnpTdHJpbmdUZW1wbGF0ZU91dGxldERpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgRzJXYXRlcldhdmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2FuaW1hdGU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2RlbGF5OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2hlaWdodDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9wZXJjZW50OiBOdW1iZXJJbnB1dDtcblxuICBwcml2YXRlIHJlc2l6ZSQ6IFN1YnNjcmlwdGlvbiB8IG51bGwgPSBudWxsO1xuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIG5vZGUhOiBFbGVtZW50UmVmO1xuICBwcml2YXRlIHRpbWVyITogbnVtYmVyO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGFuaW1hdGUgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBkZWxheSA9IDA7XG4gIEBJbnB1dCgpIHRpdGxlPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICBASW5wdXQoKSBjb2xvciA9ICcjMTg5MEZGJztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgaGVpZ2h0ID0gMTYwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBwZXJjZW50PzogbnVtYmVyO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybVxuICApIHt9XG5cbiAgcHJpdmF0ZSByZW5kZXJDaGFydChpc1VwZGF0ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghdGhpcy5yZXNpemUkKSByZXR1cm47XG5cbiAgICB0aGlzLnVwZGF0ZVJhZGlvKCk7XG5cbiAgICBjb25zdCB7IHBlcmNlbnQsIGNvbG9yLCBub2RlLCBhbmltYXRlIH0gPSB0aGlzO1xuXG4gICAgY29uc3QgZGF0YSA9IE1hdGgubWluKE1hdGgubWF4KHBlcmNlbnQhIC8gMTAwLCAwKSwgMTAwKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXRoaXMtYWxpYXNcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnRpbWVyKTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IG5vZGUubmF0aXZlRWxlbWVudCBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgY29uc3QgY2FudmFzV2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgY29uc3QgY2FudmFzSGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgICBjb25zdCByYWRpdXMgPSBjYW52YXNXaWR0aCAvIDI7XG4gICAgY29uc3QgbGluZVdpZHRoID0gMjtcbiAgICBjb25zdCBjUiA9IHJhZGl1cyAtIGxpbmVXaWR0aDtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoICogMjtcblxuICAgIGNvbnN0IGF4aXNMZW5ndGggPSBjYW52YXNXaWR0aCAtIGxpbmVXaWR0aDtcbiAgICBjb25zdCB1bml0ID0gYXhpc0xlbmd0aCAvIDg7XG4gICAgY29uc3QgeE9mZnNldCA9IGxpbmVXaWR0aDtcbiAgICBsZXQgc3AgPSAwOyAvLyDlkajmnJ/lgY/np7vph49cbiAgICBjb25zdCByYW5nZSA9IDAuMjsgLy8g5oyv5bmFXG4gICAgbGV0IGN1cnJSYW5nZSA9IHJhbmdlO1xuICAgIGxldCBjdXJyRGF0YSA9IDA7XG4gICAgY29uc3Qgd2F2ZXVwc3AgPSBhbmltYXRlID8gMC4wMDUgOiAwLjAxNTsgLy8g5rC05rOi5LiK5rao6YCf5bqmXG5cbiAgICBsZXQgYXJjU3RhY2s6IFtbbnVtYmVyLCBudW1iZXJdP10gfCBudWxsID0gW107XG4gICAgY29uc3QgYlIgPSByYWRpdXMgLSBsaW5lV2lkdGg7XG4gICAgY29uc3QgY2lyY2xlT2Zmc2V0ID0gLShNYXRoLlBJIC8gMik7XG4gICAgbGV0IGNpcmNsZUxvY2sgPSB0cnVlO1xuXG4gICAgZm9yIChsZXQgaSA9IGNpcmNsZU9mZnNldDsgaSA8IGNpcmNsZU9mZnNldCArIDIgKiBNYXRoLlBJOyBpICs9IDEgLyAoOCAqIE1hdGguUEkpKSB7XG4gICAgICBhcmNTdGFjay5wdXNoKFtyYWRpdXMgKyBiUiAqIE1hdGguY29zKGkpLCByYWRpdXMgKyBiUiAqIE1hdGguc2luKGkpXSk7XG4gICAgfVxuXG4gICAgY29uc3QgY1N0YXJ0UG9pbnQgPSBhcmNTdGFjay5zaGlmdCgpIGFzIFtudW1iZXIsIG51bWJlcl07XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgY3R4Lm1vdmVUbyhjU3RhcnRQb2ludFswXSwgY1N0YXJ0UG9pbnRbMV0pO1xuXG4gICAgZnVuY3Rpb24gZHJhd1NpbigpOiB2b2lkIHtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5zYXZlKCk7XG5cbiAgICAgIGNvbnN0IHNpblN0YWNrOiBbW251bWJlciwgbnVtYmVyXT9dID0gW107XG4gICAgICBmb3IgKGxldCBpID0geE9mZnNldDsgaSA8PSB4T2Zmc2V0ICsgYXhpc0xlbmd0aDsgaSArPSAyMCAvIGF4aXNMZW5ndGgpIHtcbiAgICAgICAgY29uc3QgeCA9IHNwICsgKHhPZmZzZXQgKyBpKSAvIHVuaXQ7XG4gICAgICAgIGNvbnN0IHkgPSBNYXRoLnNpbih4KSAqIGN1cnJSYW5nZTtcbiAgICAgICAgY29uc3QgZHggPSBpO1xuICAgICAgICBjb25zdCBkeSA9IDIgKiBjUiAqICgxIC0gY3VyckRhdGEpICsgKHJhZGl1cyAtIGNSKSAtIHVuaXQgKiB5O1xuXG4gICAgICAgIGN0eC5saW5lVG8oZHgsIGR5KTtcbiAgICAgICAgc2luU3RhY2sucHVzaChbZHgsIGR5XSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN0YXJ0UG9pbnQgPSBzaW5TdGFjay5zaGlmdCgpIGFzIFtudW1iZXIsIG51bWJlcl07XG5cbiAgICAgIGN0eC5saW5lVG8oeE9mZnNldCArIGF4aXNMZW5ndGgsIGNhbnZhc0hlaWdodCk7XG4gICAgICBjdHgubGluZVRvKHhPZmZzZXQsIGNhbnZhc0hlaWdodCk7XG4gICAgICBjdHgubGluZVRvKHN0YXJ0UG9pbnRbMF0sIHN0YXJ0UG9pbnRbMV0pO1xuXG4gICAgICBjb25zdCBncmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCAwLCBjYW52YXNIZWlnaHQpO1xuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsICcjZmZmZmZmJyk7XG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgY29sb3IpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyKCk6IHZvaWQge1xuICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KTtcbiAgICAgIGlmIChjaXJjbGVMb2NrICYmICFpc1VwZGF0ZSkge1xuICAgICAgICBpZiAoYXJjU3RhY2shLmxlbmd0aCkge1xuICAgICAgICAgIGlmIChhbmltYXRlKSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gYXJjU3RhY2shLnNoaWZ0KCkgYXMgW251bWJlciwgbnVtYmVyXTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGVtcFswXSwgdGVtcFsxXSk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdGVtcCBvZiBhcmNTdGFjayEpIHtcbiAgICAgICAgICAgICAgY3R4LmxpbmVUbyh0ZW1wIVswXSwgdGVtcCFbMV0pO1xuICAgICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcmNTdGFjayA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaXJjbGVMb2NrID0gZmFsc2U7XG4gICAgICAgICAgY3R4LmxpbmVUbyhjU3RhcnRQb2ludFswXSwgY1N0YXJ0UG9pbnRbMV0pO1xuICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICBhcmNTdGFjayA9IG51bGw7XG5cbiAgICAgICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW92ZXInO1xuICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoO1xuICAgICAgICAgIGN0eC5hcmMocmFkaXVzLCByYWRpdXMsIGJSLCAwLCAyICogTWF0aC5QSSwgdHJ1ZSk7XG5cbiAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgICBjdHguYXJjKHJhZGl1cywgcmFkaXVzLCByYWRpdXMgLSAzICogbGluZVdpZHRoLCAwLCAyICogTWF0aC5QSSwgdHJ1ZSk7XG5cbiAgICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgICAgICAgIGN0eC5jbGlwKCk7XG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZGF0YSA+PSAwLjg1KSB7XG4gICAgICAgICAgaWYgKGN1cnJSYW5nZSA+IHJhbmdlIC8gNCkge1xuICAgICAgICAgICAgY29uc3QgdCA9IHJhbmdlICogMC4wMTtcbiAgICAgICAgICAgIGN1cnJSYW5nZSAtPSB0O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkYXRhIDw9IDAuMSkge1xuICAgICAgICAgIGlmIChjdXJyUmFuZ2UgPCByYW5nZSAqIDEuNSkge1xuICAgICAgICAgICAgY29uc3QgdCA9IHJhbmdlICogMC4wMTtcbiAgICAgICAgICAgIGN1cnJSYW5nZSArPSB0O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoY3VyclJhbmdlIDw9IHJhbmdlKSB7XG4gICAgICAgICAgICBjb25zdCB0ID0gcmFuZ2UgKiAwLjAxO1xuICAgICAgICAgICAgY3VyclJhbmdlICs9IHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjdXJyUmFuZ2UgPj0gcmFuZ2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHQgPSByYW5nZSAqIDAuMDE7XG4gICAgICAgICAgICBjdXJyUmFuZ2UgLT0gdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEgLSBjdXJyRGF0YSA+IDApIHtcbiAgICAgICAgICBjdXJyRGF0YSArPSB3YXZldXBzcDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YSAtIGN1cnJEYXRhIDwgMCkge1xuICAgICAgICAgIGN1cnJEYXRhIC09IHdhdmV1cHNwO1xuICAgICAgICB9XG5cbiAgICAgICAgc3AgKz0gMC4wNztcbiAgICAgICAgZHJhd1NpbigpO1xuICAgICAgfVxuICAgICAgc2VsZi50aW1lciA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgIH1cblxuICAgIHJlbmRlcigpO1xuICAgIC8vIGRyYXdTaW4oKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUmFkaW8oKTogdm9pZCB7XG4gICAgY29uc3QgeyBvZmZzZXRXaWR0aCB9ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGU7XG4gICAgY29uc3QgcmFkaW8gPSBvZmZzZXRXaWR0aCA8IHRoaXMuaGVpZ2h0ID8gb2Zmc2V0V2lkdGggLyB0aGlzLmhlaWdodCA6IDE7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgc2NhbGUoJHtyYWRpb30pYCk7XG4gIH1cblxuICByZW5kZXIoKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJDaGFydChmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGxSZXNpemVFdmVudCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlc2l6ZSQgPSBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcbiAgICAgIC5waXBlKGRlYm91bmNlVGltZSgyMDApKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZVJhZGlvKCkpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmluc3RhbGxSZXNpemVFdmVudCgpO1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZW5kZXIoKSwgdGhpcy5kZWxheSkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5yZW5kZXJDaGFydCh0cnVlKSk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGltZXIpIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMudGltZXIpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZXNpemUkKSB7XG4gICAgICB0aGlzLnJlc2l6ZSQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXYgW25nU3R5bGVdPVwieyAnaGVpZ2h0LnB4JzogaGVpZ2h0LCAnd2lkdGgucHgnOiBoZWlnaHQsIG92ZXJmbG93OiAnaGlkZGVuJyB9XCI+XG4gIDxjYW52YXMgI2NvbnRhaW5lciBjbGFzcz1cImcyLXdhdGVyLXdhdmVfX2NhbnZhc1wiIHdpZHRoPVwie3sgaGVpZ2h0ICogMiB9fVwiIGhlaWdodD1cInt7IGhlaWdodCAqIDIgfX1cIj48L2NhbnZhcz5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImcyLXdhdGVyLXdhdmVfX2Rlc2NcIiBbbmdTdHlsZV09XCJ7ICd3aWR0aC5weCc6IGhlaWdodCB9XCI+XG4gIEBpZiAodGl0bGUpIHtcbiAgICA8c3BhbiBjbGFzcz1cImcyLXdhdGVyLXdhdmVfX2Rlc2MtdGl0bGVcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJ0aXRsZVwiPnt7IHRpdGxlIH19PC9uZy1jb250YWluZXI+XG4gICAgPC9zcGFuPlxuICB9XG4gIDxoNCBjbGFzcz1cImcyLXdhdGVyLXdhdmVfX2Rlc2MtcGVyY2VudFwiPnt7IHBlcmNlbnQgfX0lPC9oND5cbjwvZGl2PlxuIl19