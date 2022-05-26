import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
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
}
G2WaterWaveComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.10", ngImport: i0, type: G2WaterWaveComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }, { token: i0.ChangeDetectorRef }, { token: i1.Platform }], target: i0.ɵɵFactoryTarget.Component });
G2WaterWaveComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.10", type: G2WaterWaveComponent, selector: "g2-water-wave", inputs: { animate: "animate", delay: "delay", title: "title", color: "color", height: "height", percent: "percent" }, host: { properties: { "class.g2-water-wave": "true" } }, viewQueries: [{ propertyName: "node", first: true, predicate: ["container"], descendants: true, static: true }], exportAs: ["g2WaterWave"], usesOnChanges: true, ngImport: i0, template: "<div [ngStyle]=\"{ 'height.px': height, 'width.px': height, overflow: 'hidden' }\">\n  <canvas #container class=\"g2-water-wave__canvas\" width=\"{{ height * 2 }}\" height=\"{{ height * 2 }}\"></canvas>\n</div>\n<div class=\"g2-water-wave__desc\" [ngStyle]=\"{ 'width.px': height }\">\n  <span *ngIf=\"title\" class=\"g2-water-wave__desc-title\">\n    <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n  </span>\n  <h4 class=\"g2-water-wave__desc-percent\">{{ percent }}%</h4>\n</div>\n", directives: [{ type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.10", ngImport: i0, type: G2WaterWaveComponent, decorators: [{
            type: Component,
            args: [{ selector: 'g2-water-wave', exportAs: 'g2WaterWave', host: { '[class.g2-water-wave]': 'true' }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div [ngStyle]=\"{ 'height.px': height, 'width.px': height, overflow: 'hidden' }\">\n  <canvas #container class=\"g2-water-wave__canvas\" width=\"{{ height * 2 }}\" height=\"{{ height * 2 }}\"></canvas>\n</div>\n<div class=\"g2-water-wave__desc\" [ngStyle]=\"{ 'width.px': height }\">\n  <span *ngIf=\"title\" class=\"g2-water-wave__desc-title\">\n    <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n  </span>\n  <h4 class=\"g2-water-wave__desc-percent\">{{ percent }}%</h4>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }, { type: i0.ChangeDetectorRef }, { type: i1.Platform }]; }, propDecorators: { node: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0ZXItd2F2ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jaGFydC93YXRlci13YXZlL3dhdGVyLXdhdmUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvd2F0ZXItd2F2ZS93YXRlci13YXZlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxLQUFLLEVBT0wsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUMsT0FBTyxFQUFnQixZQUFZLEVBQUUsV0FBVyxFQUFlLE1BQU0sdUJBQXVCLENBQUM7Ozs7O0FBVzdGLE1BQU0sT0FBTyxvQkFBb0I7SUFtQi9CLGFBQWE7SUFFYixZQUNVLEVBQWMsRUFDZCxRQUFtQixFQUNuQixNQUFjLEVBQ2QsR0FBc0IsRUFDdEIsUUFBa0I7UUFKbEIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFwQnBCLFlBQU8sR0FBd0IsSUFBSSxDQUFDO1FBSTVDLGlCQUFpQjtRQUVRLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDaEIsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUV6QixVQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ0gsV0FBTSxHQUFHLEdBQUcsQ0FBQztJQVdsQyxDQUFDO0lBRUksV0FBVyxDQUFDLFFBQWlCO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTztZQUFFLE9B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SUFBSTtxTUFTYSxJQUFJO3NCQUFyRCxTQUFTO3VCQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBS2YsT0FBTztzQkFBL0IsS0FBSztnQkFDa0IsS0FBSztzQkFBNUIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNrQixNQUFNO3NCQUE3QixLQUFLO2dCQUNrQixPQUFPO3NCQUE5QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIE51bWJlcklucHV0IH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItd2F0ZXItd2F2ZScsXG4gIGV4cG9ydEFzOiAnZzJXYXRlcldhdmUnLFxuICB0ZW1wbGF0ZVVybDogJy4vd2F0ZXItd2F2ZS5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHsgJ1tjbGFzcy5nMi13YXRlci13YXZlXSc6ICd0cnVlJyB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRzJXYXRlcldhdmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2FuaW1hdGU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2RlbGF5OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2hlaWdodDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9wZXJjZW50OiBOdW1iZXJJbnB1dDtcblxuICBwcml2YXRlIHJlc2l6ZSQ6IFN1YnNjcmlwdGlvbiB8IG51bGwgPSBudWxsO1xuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIG5vZGUhOiBFbGVtZW50UmVmO1xuICBwcml2YXRlIHRpbWVyITogbnVtYmVyO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGFuaW1hdGUgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBkZWxheSA9IDA7XG4gIEBJbnB1dCgpIHRpdGxlPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICBASW5wdXQoKSBjb2xvciA9ICcjMTg5MEZGJztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgaGVpZ2h0ID0gMTYwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBwZXJjZW50PzogbnVtYmVyO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybVxuICApIHt9XG5cbiAgcHJpdmF0ZSByZW5kZXJDaGFydChpc1VwZGF0ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghdGhpcy5yZXNpemUkKSByZXR1cm47XG5cbiAgICB0aGlzLnVwZGF0ZVJhZGlvKCk7XG5cbiAgICBjb25zdCB7IHBlcmNlbnQsIGNvbG9yLCBub2RlLCBhbmltYXRlIH0gPSB0aGlzO1xuXG4gICAgY29uc3QgZGF0YSA9IE1hdGgubWluKE1hdGgubWF4KHBlcmNlbnQhIC8gMTAwLCAwKSwgMTAwKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXRoaXMtYWxpYXNcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnRpbWVyKTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IG5vZGUubmF0aXZlRWxlbWVudCBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgY29uc3QgY2FudmFzV2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgY29uc3QgY2FudmFzSGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgICBjb25zdCByYWRpdXMgPSBjYW52YXNXaWR0aCAvIDI7XG4gICAgY29uc3QgbGluZVdpZHRoID0gMjtcbiAgICBjb25zdCBjUiA9IHJhZGl1cyAtIGxpbmVXaWR0aDtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoICogMjtcblxuICAgIGNvbnN0IGF4aXNMZW5ndGggPSBjYW52YXNXaWR0aCAtIGxpbmVXaWR0aDtcbiAgICBjb25zdCB1bml0ID0gYXhpc0xlbmd0aCAvIDg7XG4gICAgY29uc3QgeE9mZnNldCA9IGxpbmVXaWR0aDtcbiAgICBsZXQgc3AgPSAwOyAvLyDlkajmnJ/lgY/np7vph49cbiAgICBjb25zdCByYW5nZSA9IDAuMjsgLy8g5oyv5bmFXG4gICAgbGV0IGN1cnJSYW5nZSA9IHJhbmdlO1xuICAgIGxldCBjdXJyRGF0YSA9IDA7XG4gICAgY29uc3Qgd2F2ZXVwc3AgPSBhbmltYXRlID8gMC4wMDUgOiAwLjAxNTsgLy8g5rC05rOi5LiK5rao6YCf5bqmXG5cbiAgICBsZXQgYXJjU3RhY2s6IFtbbnVtYmVyLCBudW1iZXJdP10gfCBudWxsID0gW107XG4gICAgY29uc3QgYlIgPSByYWRpdXMgLSBsaW5lV2lkdGg7XG4gICAgY29uc3QgY2lyY2xlT2Zmc2V0ID0gLShNYXRoLlBJIC8gMik7XG4gICAgbGV0IGNpcmNsZUxvY2sgPSB0cnVlO1xuXG4gICAgZm9yIChsZXQgaSA9IGNpcmNsZU9mZnNldDsgaSA8IGNpcmNsZU9mZnNldCArIDIgKiBNYXRoLlBJOyBpICs9IDEgLyAoOCAqIE1hdGguUEkpKSB7XG4gICAgICBhcmNTdGFjay5wdXNoKFtyYWRpdXMgKyBiUiAqIE1hdGguY29zKGkpLCByYWRpdXMgKyBiUiAqIE1hdGguc2luKGkpXSk7XG4gICAgfVxuXG4gICAgY29uc3QgY1N0YXJ0UG9pbnQgPSBhcmNTdGFjay5zaGlmdCgpIGFzIFtudW1iZXIsIG51bWJlcl07XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgY3R4Lm1vdmVUbyhjU3RhcnRQb2ludFswXSwgY1N0YXJ0UG9pbnRbMV0pO1xuXG4gICAgZnVuY3Rpb24gZHJhd1NpbigpOiB2b2lkIHtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5zYXZlKCk7XG5cbiAgICAgIGNvbnN0IHNpblN0YWNrOiBbW251bWJlciwgbnVtYmVyXT9dID0gW107XG4gICAgICBmb3IgKGxldCBpID0geE9mZnNldDsgaSA8PSB4T2Zmc2V0ICsgYXhpc0xlbmd0aDsgaSArPSAyMCAvIGF4aXNMZW5ndGgpIHtcbiAgICAgICAgY29uc3QgeCA9IHNwICsgKHhPZmZzZXQgKyBpKSAvIHVuaXQ7XG4gICAgICAgIGNvbnN0IHkgPSBNYXRoLnNpbih4KSAqIGN1cnJSYW5nZTtcbiAgICAgICAgY29uc3QgZHggPSBpO1xuICAgICAgICBjb25zdCBkeSA9IDIgKiBjUiAqICgxIC0gY3VyckRhdGEpICsgKHJhZGl1cyAtIGNSKSAtIHVuaXQgKiB5O1xuXG4gICAgICAgIGN0eC5saW5lVG8oZHgsIGR5KTtcbiAgICAgICAgc2luU3RhY2sucHVzaChbZHgsIGR5XSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN0YXJ0UG9pbnQgPSBzaW5TdGFjay5zaGlmdCgpIGFzIFtudW1iZXIsIG51bWJlcl07XG5cbiAgICAgIGN0eC5saW5lVG8oeE9mZnNldCArIGF4aXNMZW5ndGgsIGNhbnZhc0hlaWdodCk7XG4gICAgICBjdHgubGluZVRvKHhPZmZzZXQsIGNhbnZhc0hlaWdodCk7XG4gICAgICBjdHgubGluZVRvKHN0YXJ0UG9pbnRbMF0sIHN0YXJ0UG9pbnRbMV0pO1xuXG4gICAgICBjb25zdCBncmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCAwLCBjYW52YXNIZWlnaHQpO1xuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsICcjZmZmZmZmJyk7XG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgY29sb3IpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyKCk6IHZvaWQge1xuICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KTtcbiAgICAgIGlmIChjaXJjbGVMb2NrICYmICFpc1VwZGF0ZSkge1xuICAgICAgICBpZiAoYXJjU3RhY2shLmxlbmd0aCkge1xuICAgICAgICAgIGlmIChhbmltYXRlKSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gYXJjU3RhY2shLnNoaWZ0KCkgYXMgW251bWJlciwgbnVtYmVyXTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGVtcFswXSwgdGVtcFsxXSk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdGVtcCBvZiBhcmNTdGFjayEpIHtcbiAgICAgICAgICAgICAgY3R4LmxpbmVUbyh0ZW1wIVswXSwgdGVtcCFbMV0pO1xuICAgICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcmNTdGFjayA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaXJjbGVMb2NrID0gZmFsc2U7XG4gICAgICAgICAgY3R4LmxpbmVUbyhjU3RhcnRQb2ludFswXSwgY1N0YXJ0UG9pbnRbMV0pO1xuICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICBhcmNTdGFjayA9IG51bGw7XG5cbiAgICAgICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW92ZXInO1xuICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoO1xuICAgICAgICAgIGN0eC5hcmMocmFkaXVzLCByYWRpdXMsIGJSLCAwLCAyICogTWF0aC5QSSwgdHJ1ZSk7XG5cbiAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgICBjdHguYXJjKHJhZGl1cywgcmFkaXVzLCByYWRpdXMgLSAzICogbGluZVdpZHRoLCAwLCAyICogTWF0aC5QSSwgdHJ1ZSk7XG5cbiAgICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgICAgICAgIGN0eC5jbGlwKCk7XG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZGF0YSA+PSAwLjg1KSB7XG4gICAgICAgICAgaWYgKGN1cnJSYW5nZSA+IHJhbmdlIC8gNCkge1xuICAgICAgICAgICAgY29uc3QgdCA9IHJhbmdlICogMC4wMTtcbiAgICAgICAgICAgIGN1cnJSYW5nZSAtPSB0O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkYXRhIDw9IDAuMSkge1xuICAgICAgICAgIGlmIChjdXJyUmFuZ2UgPCByYW5nZSAqIDEuNSkge1xuICAgICAgICAgICAgY29uc3QgdCA9IHJhbmdlICogMC4wMTtcbiAgICAgICAgICAgIGN1cnJSYW5nZSArPSB0O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoY3VyclJhbmdlIDw9IHJhbmdlKSB7XG4gICAgICAgICAgICBjb25zdCB0ID0gcmFuZ2UgKiAwLjAxO1xuICAgICAgICAgICAgY3VyclJhbmdlICs9IHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjdXJyUmFuZ2UgPj0gcmFuZ2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHQgPSByYW5nZSAqIDAuMDE7XG4gICAgICAgICAgICBjdXJyUmFuZ2UgLT0gdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEgLSBjdXJyRGF0YSA+IDApIHtcbiAgICAgICAgICBjdXJyRGF0YSArPSB3YXZldXBzcDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YSAtIGN1cnJEYXRhIDwgMCkge1xuICAgICAgICAgIGN1cnJEYXRhIC09IHdhdmV1cHNwO1xuICAgICAgICB9XG5cbiAgICAgICAgc3AgKz0gMC4wNztcbiAgICAgICAgZHJhd1NpbigpO1xuICAgICAgfVxuICAgICAgc2VsZi50aW1lciA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgIH1cblxuICAgIHJlbmRlcigpO1xuICAgIC8vIGRyYXdTaW4oKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUmFkaW8oKTogdm9pZCB7XG4gICAgY29uc3QgeyBvZmZzZXRXaWR0aCB9ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGU7XG4gICAgY29uc3QgcmFkaW8gPSBvZmZzZXRXaWR0aCA8IHRoaXMuaGVpZ2h0ID8gb2Zmc2V0V2lkdGggLyB0aGlzLmhlaWdodCA6IDE7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgc2NhbGUoJHtyYWRpb30pYCk7XG4gIH1cblxuICByZW5kZXIoKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJDaGFydChmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGxSZXNpemVFdmVudCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlc2l6ZSQgPSBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcbiAgICAgIC5waXBlKGRlYm91bmNlVGltZSgyMDApKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZVJhZGlvKCkpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmluc3RhbGxSZXNpemVFdmVudCgpO1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZW5kZXIoKSwgdGhpcy5kZWxheSkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5yZW5kZXJDaGFydCh0cnVlKSk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGltZXIpIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMudGltZXIpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZXNpemUkKSB7XG4gICAgICB0aGlzLnJlc2l6ZSQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXYgW25nU3R5bGVdPVwieyAnaGVpZ2h0LnB4JzogaGVpZ2h0LCAnd2lkdGgucHgnOiBoZWlnaHQsIG92ZXJmbG93OiAnaGlkZGVuJyB9XCI+XG4gIDxjYW52YXMgI2NvbnRhaW5lciBjbGFzcz1cImcyLXdhdGVyLXdhdmVfX2NhbnZhc1wiIHdpZHRoPVwie3sgaGVpZ2h0ICogMiB9fVwiIGhlaWdodD1cInt7IGhlaWdodCAqIDIgfX1cIj48L2NhbnZhcz5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImcyLXdhdGVyLXdhdmVfX2Rlc2NcIiBbbmdTdHlsZV09XCJ7ICd3aWR0aC5weCc6IGhlaWdodCB9XCI+XG4gIDxzcGFuICpuZ0lmPVwidGl0bGVcIiBjbGFzcz1cImcyLXdhdGVyLXdhdmVfX2Rlc2MtdGl0bGVcIj5cbiAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwidGl0bGVcIj57eyB0aXRsZSB9fTwvbmctY29udGFpbmVyPlxuICA8L3NwYW4+XG4gIDxoNCBjbGFzcz1cImcyLXdhdGVyLXdhdmVfX2Rlc2MtcGVyY2VudFwiPnt7IHBlcmNlbnQgfX0lPC9oND5cbjwvZGl2PlxuIl19