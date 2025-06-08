import * as i0 from '@angular/core';
import { EventEmitter, numberAttribute, booleanAttribute, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, NgModule } from '@angular/core';
import { G2BaseComponent, genMiniTooltipOptions } from '@delon/chart/core';
import { CommonModule } from '@angular/common';

class G2MiniAreaComponent extends G2BaseComponent {
    // #region fields
    color = 'rgba(24, 144, 255, 0.2)';
    borderColor = '#1890FF';
    borderWidth = 2;
    height = 56;
    fit = true;
    line = false;
    animate = true;
    xAxis;
    yAxis;
    padding = [8, 8, 8, 8];
    data = [];
    yTooltipSuffix = '';
    tooltipType = 'default';
    clickItem = new EventEmitter();
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: G2MiniAreaComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "19.2.6", type: G2MiniAreaComponent, isStandalone: true, selector: "g2-mini-area", inputs: { color: "color", borderColor: "borderColor", borderWidth: ["borderWidth", "borderWidth", numberAttribute], height: ["height", "height", numberAttribute], fit: ["fit", "fit", booleanAttribute], line: ["line", "line", booleanAttribute], animate: ["animate", "animate", booleanAttribute], xAxis: "xAxis", yAxis: "yAxis", padding: "padding", data: "data", yTooltipSuffix: "yTooltipSuffix", tooltipType: "tooltipType" }, outputs: { clickItem: "clickItem" }, host: { properties: { "style.height.px": "height" } }, exportAs: ["g2MiniArea"], usesInheritance: true, ngImport: i0, template: ``, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: G2MiniAreaComponent, decorators: [{
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
                type: Input,
                args: [{ transform: numberAttribute }]
            }], height: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], fit: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], line: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], animate: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: G2MiniAreaModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.6", ngImport: i0, type: G2MiniAreaModule, imports: [CommonModule, G2MiniAreaComponent], exports: [G2MiniAreaComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: G2MiniAreaModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: G2MiniAreaModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ...COMPONENTS],
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { G2MiniAreaComponent, G2MiniAreaModule };
//# sourceMappingURL=mini-area.mjs.map
