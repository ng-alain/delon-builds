import * as i0 from '@angular/core';
import { inject, ElementRef, Renderer2, DestroyRef, viewChild, input, booleanAttribute, numberAttribute, afterNextRender, ViewEncapsulation, ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent, debounceTime } from 'rxjs';
import { watchInputs } from '@delon/chart/core';
import { NzStringTemplateOutletDirective, NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { CommonModule } from '@angular/common';

class G2WaterWaveComponent {
    el = inject(ElementRef).nativeElement;
    renderer = inject(Renderer2);
    destroyRef = inject(DestroyRef);
    node = viewChild.required('container', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "node" }] : /* istanbul ignore next */ []));
    timer = 0;
    started = false;
    destroyed = false;
    animate = input(true, { ...(ngDevMode ? { debugName: "animate" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    delay = input(0, { ...(ngDevMode ? { debugName: "delay" } : /* istanbul ignore next */ {}), transform: numberAttribute });
    title = input(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "title" }] : /* istanbul ignore next */ []));
    color = input('#1890FF', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "color" }] : /* istanbul ignore next */ []));
    height = input(160, { ...(ngDevMode ? { debugName: "height" } : /* istanbul ignore next */ {}), transform: numberAttribute });
    percent = input(/* @ts-ignore */
    ...(ngDevMode ? [undefined, { debugName: "percent" }] : /* istanbul ignore next */ []));
    constructor() {
        // 输入变更 → 重绘（isUpdate = true）
        watchInputs(this, () => {
            if (this.started) {
                this.renderChart(true);
            }
        });
        afterNextRender(() => {
            fromEvent(window, 'resize')
                .pipe(takeUntilDestroyed(this.destroyRef), debounceTime(200))
                .subscribe(() => this.updateRadio());
            // 同基类 `load()`：这里必须用 setTimeout，不能用 rxjs 一次性 `timer()`
            // （后者底层是 setInterval，`flush()` 不驱动它）。
            setTimeout(() => {
                if (!this.destroyed) {
                    this.started = true;
                    this.render();
                }
            }, this.delay());
        });
    }
    renderChart(isUpdate) {
        this.updateRadio();
        const percent = this.percent();
        const color = this.color();
        const animate = this.animate();
        const data = Math.min(Math.max(percent / 100, 0), 100);
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        cancelAnimationFrame(this.timer);
        const canvas = this.node().nativeElement;
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
        const { offsetWidth } = this.el.parentNode;
        const radio = offsetWidth < this.height() ? offsetWidth / this.height() : 1;
        this.renderer.setStyle(this.el, 'transform', `scale(${radio})`);
    }
    render() {
        this.renderChart(false);
    }
    ngOnDestroy() {
        this.destroyed = true;
        if (this.timer) {
            cancelAnimationFrame(this.timer);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: G2WaterWaveComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "22.1.7", type: G2WaterWaveComponent, isStandalone: true, selector: "g2-water-wave", inputs: { animate: { classPropertyName: "animate", publicName: "animate", isSignal: true, isRequired: false, transformFunction: null }, delay: { classPropertyName: "delay", publicName: "delay", isSignal: true, isRequired: false, transformFunction: null }, title: { classPropertyName: "title", publicName: "title", isSignal: true, isRequired: false, transformFunction: null }, color: { classPropertyName: "color", publicName: "color", isSignal: true, isRequired: false, transformFunction: null }, height: { classPropertyName: "height", publicName: "height", isSignal: true, isRequired: false, transformFunction: null }, percent: { classPropertyName: "percent", publicName: "percent", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "class.g2-water-wave": "true" } }, viewQueries: [{ propertyName: "node", first: true, predicate: ["container"], descendants: true, isSignal: true }], exportAs: ["g2WaterWave"], ngImport: i0, template: "<div [style]=\"{ height: height() + 'px', width: height() + 'px', overflow: 'hidden' }\">\n  <canvas #container class=\"g2-water-wave__canvas\" [attr.width]=\"height() * 2\" [attr.height]=\"height() * 2\"></canvas>\n</div>\n<div class=\"g2-water-wave__desc\" [style]=\"{ width: height() + 'px' }\">\n  @if (title()) {\n    <span class=\"g2-water-wave__desc-title\">\n      <ng-container *nzStringTemplateOutlet=\"title()\">{{ title() }}</ng-container>\n    </span>\n  }\n  <h4 class=\"g2-water-wave__desc-percent\">{{ percent() }}%</h4>\n</div>\n", dependencies: [{ kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: G2WaterWaveComponent, decorators: [{
            type: Component,
            args: [{ selector: 'g2-water-wave', exportAs: 'g2WaterWave', host: { '[class.g2-water-wave]': 'true' }, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, imports: [NzStringTemplateOutletDirective], template: "<div [style]=\"{ height: height() + 'px', width: height() + 'px', overflow: 'hidden' }\">\n  <canvas #container class=\"g2-water-wave__canvas\" [attr.width]=\"height() * 2\" [attr.height]=\"height() * 2\"></canvas>\n</div>\n<div class=\"g2-water-wave__desc\" [style]=\"{ width: height() + 'px' }\">\n  @if (title()) {\n    <span class=\"g2-water-wave__desc-title\">\n      <ng-container *nzStringTemplateOutlet=\"title()\">{{ title() }}</ng-container>\n    </span>\n  }\n  <h4 class=\"g2-water-wave__desc-percent\">{{ percent() }}%</h4>\n</div>\n" }]
        }], ctorParameters: () => [], propDecorators: { node: [{ type: i0.ViewChild, args: ['container', { isSignal: true }] }], animate: [{ type: i0.Input, args: [{ isSignal: true, alias: "animate", required: false }] }], delay: [{ type: i0.Input, args: [{ isSignal: true, alias: "delay", required: false }] }], title: [{ type: i0.Input, args: [{ isSignal: true, alias: "title", required: false }] }], color: [{ type: i0.Input, args: [{ isSignal: true, alias: "color", required: false }] }], height: [{ type: i0.Input, args: [{ isSignal: true, alias: "height", required: false }] }], percent: [{ type: i0.Input, args: [{ isSignal: true, alias: "percent", required: false }] }] } });

const COMPONENTS = [G2WaterWaveComponent];
class G2WaterWaveModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: G2WaterWaveModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "22.1.7", ngImport: i0, type: G2WaterWaveModule, imports: [CommonModule, NzOutletModule, G2WaterWaveComponent], exports: [G2WaterWaveComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: G2WaterWaveModule, imports: [CommonModule, NzOutletModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: G2WaterWaveModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, NzOutletModule, ...COMPONENTS],
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { G2WaterWaveComponent, G2WaterWaveModule };
//# sourceMappingURL=water-wave.mjs.map
