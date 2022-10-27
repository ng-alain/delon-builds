import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, NgModule } from '@angular/core';
import { G2BaseComponent, genMiniTooltipOptions } from '@delon/chart/core';
import { InputNumber, InputBoolean } from '@delon/util/decorator';
import { CommonModule } from '@angular/common';

class G2MiniAreaComponent extends G2BaseComponent {
    constructor() {
        super(...arguments);
        // #region fields
        this.color = 'rgba(24, 144, 255, 0.2)';
        this.borderColor = '#1890FF';
        this.borderWidth = 2;
        this.height = 56;
        this.fit = true;
        this.line = false;
        this.animate = true;
        this.padding = [8, 8, 8, 8];
        this.data = [];
        this.yTooltipSuffix = '';
        this.tooltipType = 'default';
        this.clickItem = new EventEmitter();
    }
    // #endregion
    install() {
        const { el, fit, height, padding, xAxis, yAxis, yTooltipSuffix, tooltipType, line, theme, animate, color, borderColor, borderWidth } = this;
        const chart = (this._chart = new this.winG2.Chart({
            container: el.nativeElement,
            autoFit: fit,
            height,
            padding,
            theme
        }));
        chart.animate(animate);
        if (!xAxis && !yAxis) {
            chart.axis(false);
        }
        if (xAxis) {
            chart.axis('x', xAxis);
        }
        else {
            chart.axis('x', false);
        }
        if (yAxis) {
            chart.axis('y', yAxis);
        }
        else {
            chart.axis('y', false);
        }
        chart.legend(false);
        chart.tooltip(genMiniTooltipOptions(tooltipType));
        chart
            .area()
            .position('x*y')
            .color(color)
            .tooltip('x*y', (x, y) => ({ name: x, value: y + yTooltipSuffix }))
            .shape('smooth');
        if (line) {
            chart.line().position('x*y').shape('smooth').color(borderColor).size(borderWidth).tooltip(false);
        }
        chart.on(`plot:click`, (ev) => {
            const records = this._chart.getSnapRecords({ x: ev.x, y: ev.y });
            this.ngZone.run(() => this.clickItem.emit({ item: records[0]._origin, ev }));
        });
        this.ready.next(chart);
        this.changeData();
        chart.render();
    }
    changeData() {
        const { _chart, data } = this;
        if (!_chart || !Array.isArray(data) || data.length <= 0)
            return;
        _chart.changeData(data);
    }
}
G2MiniAreaComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.8", ngImport: i0, type: G2MiniAreaComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
G2MiniAreaComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.8", type: G2MiniAreaComponent, selector: "g2-mini-area", inputs: { color: "color", borderColor: "borderColor", borderWidth: "borderWidth", height: "height", fit: "fit", line: "line", animate: "animate", xAxis: "xAxis", yAxis: "yAxis", padding: "padding", data: "data", yTooltipSuffix: "yTooltipSuffix", tooltipType: "tooltipType" }, outputs: { clickItem: "clickItem" }, host: { properties: { "style.height.px": "height" } }, exportAs: ["g2MiniArea"], usesInheritance: true, ngImport: i0, template: ``, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    InputNumber()
], G2MiniAreaComponent.prototype, "borderWidth", void 0);
__decorate([
    InputNumber()
], G2MiniAreaComponent.prototype, "height", void 0);
__decorate([
    InputBoolean()
], G2MiniAreaComponent.prototype, "fit", void 0);
__decorate([
    InputBoolean()
], G2MiniAreaComponent.prototype, "line", void 0);
__decorate([
    InputBoolean()
], G2MiniAreaComponent.prototype, "animate", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.8", ngImport: i0, type: G2MiniAreaComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'g2-mini-area',
                    exportAs: 'g2MiniArea',
                    template: ``,
                    host: {
                        '[style.height.px]': 'height'
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], propDecorators: { color: [{
                type: Input
            }], borderColor: [{
                type: Input
            }], borderWidth: [{
                type: Input
            }], height: [{
                type: Input
            }], fit: [{
                type: Input
            }], line: [{
                type: Input
            }], animate: [{
                type: Input
            }], xAxis: [{
                type: Input
            }], yAxis: [{
                type: Input
            }], padding: [{
                type: Input
            }], data: [{
                type: Input
            }], yTooltipSuffix: [{
                type: Input
            }], tooltipType: [{
                type: Input
            }], clickItem: [{
                type: Output
            }] } });

const COMPONENTS = [G2MiniAreaComponent];
class G2MiniAreaModule {
}
G2MiniAreaModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.8", ngImport: i0, type: G2MiniAreaModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
G2MiniAreaModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.8", ngImport: i0, type: G2MiniAreaModule, declarations: [G2MiniAreaComponent], imports: [CommonModule], exports: [G2MiniAreaComponent] });
G2MiniAreaModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.8", ngImport: i0, type: G2MiniAreaModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.8", ngImport: i0, type: G2MiniAreaModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: COMPONENTS,
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { G2MiniAreaComponent, G2MiniAreaModule };
//# sourceMappingURL=mini-area.mjs.map
