import * as i0 from '@angular/core';
import { input, numberAttribute, booleanAttribute, output, ViewEncapsulation, ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { G2BaseComponent, genMiniTooltipOptions } from '@delon/chart/core';
import { CommonModule } from '@angular/common';

class G2MiniAreaComponent extends G2BaseComponent {
    // #region fields
    color = input('rgba(24, 144, 255, 0.2)', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "color" }] : /* istanbul ignore next */ []));
    borderColor = input('#1890FF', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "borderColor" }] : /* istanbul ignore next */ []));
    borderWidth = input(2, { ...(ngDevMode ? { debugName: "borderWidth" } : /* istanbul ignore next */ {}), transform: numberAttribute });
    height = input(56, { ...(ngDevMode ? { debugName: "height" } : /* istanbul ignore next */ {}), transform: numberAttribute });
    fit = input(true, { ...(ngDevMode ? { debugName: "fit" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    line = input(false, { ...(ngDevMode ? { debugName: "line" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    animate = input(true, { ...(ngDevMode ? { debugName: "animate" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    xAxis = input(/* @ts-ignore */
    ...(ngDevMode ? [undefined, { debugName: "xAxis" }] : /* istanbul ignore next */ []));
    yAxis = input(/* @ts-ignore */
    ...(ngDevMode ? [undefined, { debugName: "yAxis" }] : /* istanbul ignore next */ []));
    padding = input([8, 8, 8, 8], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "padding" }] : /* istanbul ignore next */ []));
    data = input([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "data" }] : /* istanbul ignore next */ []));
    yTooltipSuffix = input('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "yTooltipSuffix" }] : /* istanbul ignore next */ []));
    tooltipType = input('default', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "tooltipType" }] : /* istanbul ignore next */ []));
    clickItem = output();
    // #endregion
    install() {
        const { el, fit, height, padding, xAxis, yAxis, yTooltipSuffix, tooltipType, line, theme, animate, color, borderColor, borderWidth } = this;
        const chart = (this._chart = new this.winG2.Chart({
            container: el.nativeElement,
            autoFit: fit(),
            height: height(),
            padding: padding(),
            theme: theme()
        }));
        chart.animate(animate());
        if (!xAxis() && !yAxis()) {
            chart.axis(false);
        }
        if (xAxis()) {
            chart.axis('x', xAxis());
        }
        else {
            chart.axis('x', false);
        }
        if (yAxis()) {
            chart.axis('y', yAxis());
        }
        else {
            chart.axis('y', false);
        }
        chart.legend(false);
        chart.tooltip(genMiniTooltipOptions(tooltipType()));
        chart
            .area()
            .position('x*y')
            .color(color())
            .tooltip('x*y', (x, y) => ({ name: x, value: y + yTooltipSuffix() }))
            .shape('smooth');
        if (line()) {
            chart.line().position('x*y').shape('smooth').color(borderColor()).size(borderWidth()).tooltip(false);
        }
        chart.on(`plot:click`, (ev) => {
            const records = this._chart.getSnapRecords({ x: ev.x, y: ev.y });
            this.clickItem.emit({ item: records[0]._origin, ev });
        });
        this.ready.emit(chart);
        this.changeData();
        chart.render();
    }
    changeData() {
        const { _chart, data } = this;
        if (!_chart || !Array.isArray(data()) || data().length <= 0)
            return;
        _chart.changeData(data());
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: G2MiniAreaComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "22.1.7", type: G2MiniAreaComponent, isStandalone: true, selector: "g2-mini-area", inputs: { color: { classPropertyName: "color", publicName: "color", isSignal: true, isRequired: false, transformFunction: null }, borderColor: { classPropertyName: "borderColor", publicName: "borderColor", isSignal: true, isRequired: false, transformFunction: null }, borderWidth: { classPropertyName: "borderWidth", publicName: "borderWidth", isSignal: true, isRequired: false, transformFunction: null }, height: { classPropertyName: "height", publicName: "height", isSignal: true, isRequired: false, transformFunction: null }, fit: { classPropertyName: "fit", publicName: "fit", isSignal: true, isRequired: false, transformFunction: null }, line: { classPropertyName: "line", publicName: "line", isSignal: true, isRequired: false, transformFunction: null }, animate: { classPropertyName: "animate", publicName: "animate", isSignal: true, isRequired: false, transformFunction: null }, xAxis: { classPropertyName: "xAxis", publicName: "xAxis", isSignal: true, isRequired: false, transformFunction: null }, yAxis: { classPropertyName: "yAxis", publicName: "yAxis", isSignal: true, isRequired: false, transformFunction: null }, padding: { classPropertyName: "padding", publicName: "padding", isSignal: true, isRequired: false, transformFunction: null }, data: { classPropertyName: "data", publicName: "data", isSignal: true, isRequired: false, transformFunction: null }, yTooltipSuffix: { classPropertyName: "yTooltipSuffix", publicName: "yTooltipSuffix", isSignal: true, isRequired: false, transformFunction: null }, tooltipType: { classPropertyName: "tooltipType", publicName: "tooltipType", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { clickItem: "clickItem" }, host: { properties: { "style.height.px": "height()" } }, exportAs: ["g2MiniArea"], usesInheritance: true, ngImport: i0, template: ``, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: G2MiniAreaComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'g2-mini-area',
                    exportAs: 'g2MiniArea',
                    template: ``,
                    host: {
                        '[style.height.px]': 'height()'
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], propDecorators: { color: [{ type: i0.Input, args: [{ isSignal: true, alias: "color", required: false }] }], borderColor: [{ type: i0.Input, args: [{ isSignal: true, alias: "borderColor", required: false }] }], borderWidth: [{ type: i0.Input, args: [{ isSignal: true, alias: "borderWidth", required: false }] }], height: [{ type: i0.Input, args: [{ isSignal: true, alias: "height", required: false }] }], fit: [{ type: i0.Input, args: [{ isSignal: true, alias: "fit", required: false }] }], line: [{ type: i0.Input, args: [{ isSignal: true, alias: "line", required: false }] }], animate: [{ type: i0.Input, args: [{ isSignal: true, alias: "animate", required: false }] }], xAxis: [{ type: i0.Input, args: [{ isSignal: true, alias: "xAxis", required: false }] }], yAxis: [{ type: i0.Input, args: [{ isSignal: true, alias: "yAxis", required: false }] }], padding: [{ type: i0.Input, args: [{ isSignal: true, alias: "padding", required: false }] }], data: [{ type: i0.Input, args: [{ isSignal: true, alias: "data", required: false }] }], yTooltipSuffix: [{ type: i0.Input, args: [{ isSignal: true, alias: "yTooltipSuffix", required: false }] }], tooltipType: [{ type: i0.Input, args: [{ isSignal: true, alias: "tooltipType", required: false }] }], clickItem: [{ type: i0.Output, args: ["clickItem"] }] } });

const COMPONENTS = [G2MiniAreaComponent];
class G2MiniAreaModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: G2MiniAreaModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "22.1.7", ngImport: i0, type: G2MiniAreaModule, imports: [CommonModule, G2MiniAreaComponent], exports: [G2MiniAreaComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: G2MiniAreaModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: G2MiniAreaModule, decorators: [{
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
