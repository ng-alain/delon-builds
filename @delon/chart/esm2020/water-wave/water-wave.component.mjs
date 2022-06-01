import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { fromEvent, debounceTime } from 'rxjs';
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
G2WaterWaveComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: G2WaterWaveComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }, { token: i0.ChangeDetectorRef }, { token: i1.Platform }], target: i0.ɵɵFactoryTarget.Component });
G2WaterWaveComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: G2WaterWaveComponent, selector: "g2-water-wave", inputs: { animate: "animate", delay: "delay", title: "title", color: "color", height: "height", percent: "percent" }, host: { properties: { "class.g2-water-wave": "true" } }, viewQueries: [{ propertyName: "node", first: true, predicate: ["container"], descendants: true, static: true }], exportAs: ["g2WaterWave"], usesOnChanges: true, ngImport: i0, template: "<div [ngStyle]=\"{ 'height.px': height, 'width.px': height, overflow: 'hidden' }\">\n  <canvas #container class=\"g2-water-wave__canvas\" width=\"{{ height * 2 }}\" height=\"{{ height * 2 }}\"></canvas>\n</div>\n<div class=\"g2-water-wave__desc\" [ngStyle]=\"{ 'width.px': height }\">\n  <span *ngIf=\"title\" class=\"g2-water-wave__desc-title\">\n    <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n  </span>\n  <h4 class=\"g2-water-wave__desc-percent\">{{ percent }}%</h4>\n</div>\n", directives: [{ type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: G2WaterWaveComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0ZXItd2F2ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jaGFydC93YXRlci13YXZlL3dhdGVyLXdhdmUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvd2F0ZXItd2F2ZS93YXRlci13YXZlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxLQUFLLEVBT0wsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFnQixZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFN0QsT0FBTyxFQUFnQixZQUFZLEVBQUUsV0FBVyxFQUFlLE1BQU0sdUJBQXVCLENBQUM7Ozs7O0FBVzdGLE1BQU0sT0FBTyxvQkFBb0I7SUFtQi9CLGFBQWE7SUFFYixZQUNVLEVBQWMsRUFDZCxRQUFtQixFQUNuQixNQUFjLEVBQ2QsR0FBc0IsRUFDdEIsUUFBa0I7UUFKbEIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFwQnBCLFlBQU8sR0FBd0IsSUFBSSxDQUFDO1FBSTVDLGlCQUFpQjtRQUVRLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDaEIsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUV6QixVQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ0gsV0FBTSxHQUFHLEdBQUcsQ0FBQztJQVdsQyxDQUFDO0lBRUksV0FBVyxDQUFDLFFBQWlCO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFFMUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFD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LFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBS2YsT0FBTztzQkFBL0IsS0FBSztnQkFDa0IsS0FBSztzQkFBNUIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNrQixNQUFNO3NCQUE3QixLQUFLO2dCQUNrQixPQUFPO3NCQUE5QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiwgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi13YXRlci13YXZlJyxcbiAgZXhwb3J0QXM6ICdnMldhdGVyV2F2ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi93YXRlci13YXZlLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDogeyAnW2NsYXNzLmcyLXdhdGVyLXdhdmVdJzogJ3RydWUnIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBHMldhdGVyV2F2ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBPbkluaXQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYW5pbWF0ZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGVsYXk6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaGVpZ2h0OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3BlcmNlbnQ6IE51bWJlcklucHV0O1xuXG4gIHByaXZhdGUgcmVzaXplJDogU3Vic2NyaXB0aW9uIHwgbnVsbCA9IG51bGw7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pIHByaXZhdGUgbm9kZSE6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgdGltZXIhOiBudW1iZXI7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYW5pbWF0ZSA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGRlbGF5ID0gMDtcbiAgQElucHV0KCkgdGl0bGU/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGw7XG4gIEBJbnB1dCgpIGNvbG9yID0gJyMxODkwRkYnO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQgPSAxNjA7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHBlcmNlbnQ/OiBudW1iZXI7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtXG4gICkge31cblxuICBwcml2YXRlIHJlbmRlckNoYXJ0KGlzVXBkYXRlOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnJlc2l6ZSQpIHJldHVybjtcblxuICAgIHRoaXMudXBkYXRlUmFkaW8oKTtcblxuICAgIGNvbnN0IHsgcGVyY2VudCwgY29sb3IsIG5vZGUsIGFuaW1hdGUgfSA9IHRoaXM7XG5cbiAgICBjb25zdCBkYXRhID0gTWF0aC5taW4oTWF0aC5tYXgocGVyY2VudCEgLyAxMDAsIDApLCAxMDApO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdGhpcy1hbGlhc1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMudGltZXIpO1xuXG4gICAgY29uc3QgY2FudmFzID0gbm9kZS5uYXRpdmVFbGVtZW50IGFzIEhUTUxDYW52YXNFbGVtZW50O1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBjb25zdCBjYW52YXNXaWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICBjb25zdCBjYW52YXNIZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICAgIGNvbnN0IHJhZGl1cyA9IGNhbnZhc1dpZHRoIC8gMjtcbiAgICBjb25zdCBsaW5lV2lkdGggPSAyO1xuICAgIGNvbnN0IGNSID0gcmFkaXVzIC0gbGluZVdpZHRoO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5saW5lV2lkdGggPSBsaW5lV2lkdGggKiAyO1xuXG4gICAgY29uc3QgYXhpc0xlbmd0aCA9IGNhbnZhc1dpZHRoIC0gbGluZVdpZHRoO1xuICAgIGNvbnN0IHVuaXQgPSBheGlzTGVuZ3RoIC8gODtcbiAgICBjb25zdCB4T2Zmc2V0ID0gbGluZVdpZHRoO1xuICAgIGxldCBzcCA9IDA7IC8vIOWRqOacn+WBj+enu+mHj1xuICAgIGNvbnN0IHJhbmdlID0gMC4yOyAvLyDmjK/luYVcbiAgICBsZXQgY3VyclJhbmdlID0gcmFuZ2U7XG4gICAgbGV0IGN1cnJEYXRhID0gMDtcbiAgICBjb25zdCB3YXZldXBzcCA9IGFuaW1hdGUgPyAwLjAwNSA6IDAuMDE1OyAvLyDmsLTms6LkuIrmtqjpgJ/luqZcblxuICAgIGxldCBhcmNTdGFjazogW1tudW1iZXIsIG51bWJlcl0/XSB8IG51bGwgPSBbXTtcbiAgICBjb25zdCBiUiA9IHJhZGl1cyAtIGxpbmVXaWR0aDtcbiAgICBjb25zdCBjaXJjbGVPZmZzZXQgPSAtKE1hdGguUEkgLyAyKTtcbiAgICBsZXQgY2lyY2xlTG9jayA9IHRydWU7XG5cbiAgICBmb3IgKGxldCBpID0gY2lyY2xlT2Zmc2V0OyBpIDwgY2lyY2xlT2Zmc2V0ICsgMiAqIE1hdGguUEk7IGkgKz0gMSAvICg4ICogTWF0aC5QSSkpIHtcbiAgICAgIGFyY1N0YWNrLnB1c2goW3JhZGl1cyArIGJSICogTWF0aC5jb3MoaSksIHJhZGl1cyArIGJSICogTWF0aC5zaW4oaSldKTtcbiAgICB9XG5cbiAgICBjb25zdCBjU3RhcnRQb2ludCA9IGFyY1N0YWNrLnNoaWZ0KCkgYXMgW251bWJlciwgbnVtYmVyXTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICBjdHgubW92ZVRvKGNTdGFydFBvaW50WzBdLCBjU3RhcnRQb2ludFsxXSk7XG5cbiAgICBmdW5jdGlvbiBkcmF3U2luKCk6IHZvaWQge1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LnNhdmUoKTtcblxuICAgICAgY29uc3Qgc2luU3RhY2s6IFtbbnVtYmVyLCBudW1iZXJdP10gPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSB4T2Zmc2V0OyBpIDw9IHhPZmZzZXQgKyBheGlzTGVuZ3RoOyBpICs9IDIwIC8gYXhpc0xlbmd0aCkge1xuICAgICAgICBjb25zdCB4ID0gc3AgKyAoeE9mZnNldCArIGkpIC8gdW5pdDtcbiAgICAgICAgY29uc3QgeSA9IE1hdGguc2luKHgpICogY3VyclJhbmdlO1xuICAgICAgICBjb25zdCBkeCA9IGk7XG4gICAgICAgIGNvbnN0IGR5ID0gMiAqIGNSICogKDEgLSBjdXJyRGF0YSkgKyAocmFkaXVzIC0gY1IpIC0gdW5pdCAqIHk7XG5cbiAgICAgICAgY3R4LmxpbmVUbyhkeCwgZHkpO1xuICAgICAgICBzaW5TdGFjay5wdXNoKFtkeCwgZHldKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc3RhcnRQb2ludCA9IHNpblN0YWNrLnNoaWZ0KCkgYXMgW251bWJlciwgbnVtYmVyXTtcblxuICAgICAgY3R4LmxpbmVUbyh4T2Zmc2V0ICsgYXhpc0xlbmd0aCwgY2FudmFzSGVpZ2h0KTtcbiAgICAgIGN0eC5saW5lVG8oeE9mZnNldCwgY2FudmFzSGVpZ2h0KTtcbiAgICAgIGN0eC5saW5lVG8oc3RhcnRQb2ludFswXSwgc3RhcnRQb2ludFsxXSk7XG5cbiAgICAgIGNvbnN0IGdyYWRpZW50ID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIDAsIGNhbnZhc0hlaWdodCk7XG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgJyNmZmZmZmYnKTtcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCBjb2xvcik7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XG4gICAgICBjdHguZmlsbCgpO1xuICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXIoKTogdm9pZCB7XG4gICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpO1xuICAgICAgaWYgKGNpcmNsZUxvY2sgJiYgIWlzVXBkYXRlKSB7XG4gICAgICAgIGlmIChhcmNTdGFjayEubGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKGFuaW1hdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBhcmNTdGFjayEuc2hpZnQoKSBhcyBbbnVtYmVyLCBudW1iZXJdO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0ZW1wWzBdLCB0ZW1wWzFdKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChjb25zdCB0ZW1wIG9mIGFyY1N0YWNrISkge1xuICAgICAgICAgICAgICBjdHgubGluZVRvKHRlbXAhWzBdLCB0ZW1wIVsxXSk7XG4gICAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFyY1N0YWNrID0gW107XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNpcmNsZUxvY2sgPSBmYWxzZTtcbiAgICAgICAgICBjdHgubGluZVRvKGNTdGFydFBvaW50WzBdLCBjU3RhcnRQb2ludFsxXSk7XG4gICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgIGFyY1N0YWNrID0gbnVsbDtcblxuICAgICAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3Zlcic7XG4gICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgIGN0eC5saW5lV2lkdGggPSBsaW5lV2lkdGg7XG4gICAgICAgICAgY3R4LmFyYyhyYWRpdXMsIHJhZGl1cywgYlIsIDAsIDIgKiBNYXRoLlBJLCB0cnVlKTtcblxuICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICAgIGN0eC5hcmMocmFkaXVzLCByYWRpdXMsIHJhZGl1cyAtIDMgKiBsaW5lV2lkdGgsIDAsIDIgKiBNYXRoLlBJLCB0cnVlKTtcblxuICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgICAgICAgY3R4LmNsaXAoKTtcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChkYXRhID49IDAuODUpIHtcbiAgICAgICAgICBpZiAoY3VyclJhbmdlID4gcmFuZ2UgLyA0KSB7XG4gICAgICAgICAgICBjb25zdCB0ID0gcmFuZ2UgKiAwLjAxO1xuICAgICAgICAgICAgY3VyclJhbmdlIC09IHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGRhdGEgPD0gMC4xKSB7XG4gICAgICAgICAgaWYgKGN1cnJSYW5nZSA8IHJhbmdlICogMS41KSB7XG4gICAgICAgICAgICBjb25zdCB0ID0gcmFuZ2UgKiAwLjAxO1xuICAgICAgICAgICAgY3VyclJhbmdlICs9IHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChjdXJyUmFuZ2UgPD0gcmFuZ2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHQgPSByYW5nZSAqIDAuMDE7XG4gICAgICAgICAgICBjdXJyUmFuZ2UgKz0gdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGN1cnJSYW5nZSA+PSByYW5nZSkge1xuICAgICAgICAgICAgY29uc3QgdCA9IHJhbmdlICogMC4wMTtcbiAgICAgICAgICAgIGN1cnJSYW5nZSAtPSB0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YSAtIGN1cnJEYXRhID4gMCkge1xuICAgICAgICAgIGN1cnJEYXRhICs9IHdhdmV1cHNwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhIC0gY3VyckRhdGEgPCAwKSB7XG4gICAgICAgICAgY3VyckRhdGEgLT0gd2F2ZXVwc3A7XG4gICAgICAgIH1cblxuICAgICAgICBzcCArPSAwLjA3O1xuICAgICAgICBkcmF3U2luKCk7XG4gICAgICB9XG4gICAgICBzZWxmLnRpbWVyID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgfVxuXG4gICAgcmVuZGVyKCk7XG4gICAgLy8gZHJhd1NpbigpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVSYWRpbygpOiB2b2lkIHtcbiAgICBjb25zdCB7IG9mZnNldFdpZHRoIH0gPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICBjb25zdCByYWRpbyA9IG9mZnNldFdpZHRoIDwgdGhpcy5oZWlnaHQgPyBvZmZzZXRXaWR0aCAvIHRoaXMuaGVpZ2h0IDogMTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIGBzY2FsZSgke3JhZGlvfSlgKTtcbiAgfVxuXG4gIHJlbmRlcigpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlckNoYXJ0KGZhbHNlKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5zdGFsbFJlc2l6ZUV2ZW50KCk6IHZvaWQge1xuICAgIHRoaXMucmVzaXplJCA9IGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxuICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDIwMCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlUmFkaW8oKSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaW5zdGFsbFJlc2l6ZUV2ZW50KCk7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlbmRlcigpLCB0aGlzLmRlbGF5KSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLnJlbmRlckNoYXJ0KHRydWUpKTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50aW1lcikge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy50aW1lcik7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlc2l6ZSQpIHtcbiAgICAgIHRoaXMucmVzaXplJC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIiwiPGRpdiBbbmdTdHlsZV09XCJ7ICdoZWlnaHQucHgnOiBoZWlnaHQsICd3aWR0aC5weCc6IGhlaWdodCwgb3ZlcmZsb3c6ICdoaWRkZW4nIH1cIj5cbiAgPGNhbnZhcyAjY29udGFpbmVyIGNsYXNzPVwiZzItd2F0ZXItd2F2ZV9fY2FudmFzXCIgd2lkdGg9XCJ7eyBoZWlnaHQgKiAyIH19XCIgaGVpZ2h0PVwie3sgaGVpZ2h0ICogMiB9fVwiPjwvY2FudmFzPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiZzItd2F0ZXItd2F2ZV9fZGVzY1wiIFtuZ1N0eWxlXT1cInsgJ3dpZHRoLnB4JzogaGVpZ2h0IH1cIj5cbiAgPHNwYW4gKm5nSWY9XCJ0aXRsZVwiIGNsYXNzPVwiZzItd2F0ZXItd2F2ZV9fZGVzYy10aXRsZVwiPlxuICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJ0aXRsZVwiPnt7IHRpdGxlIH19PC9uZy1jb250YWluZXI+XG4gIDwvc3Bhbj5cbiAgPGg0IGNsYXNzPVwiZzItd2F0ZXItd2F2ZV9fZGVzYy1wZXJjZW50XCI+e3sgcGVyY2VudCB9fSU8L2g0PlxuPC9kaXY+XG4iXX0=