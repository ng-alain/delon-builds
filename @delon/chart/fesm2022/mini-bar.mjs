import * as i0 from '@angular/core';
import { input, numberAttribute, output, ViewEncapsulation, ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { G2BaseComponent, genMiniTooltipOptions } from '@delon/chart/core';
import { CommonModule } from '@angular/common';

class G2MiniBarComponent extends G2BaseComponent {
    // #region fields
    color = input('#1890FF', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "color" }] : /* istanbul ignore next */ []));
    height = input(0, { ...(ngDevMode ? { debugName: "height" } : /* istanbul ignore next */ {}), transform: numberAttribute });
    borderWidth = input(5, { ...(ngDevMode ? { debugName: "borderWidth" } : /* istanbul ignore next */ {}), transform: numberAttribute });
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
        const { el, height, padding, yTooltipSuffix, tooltipType, theme, color, borderWidth } = this;
        const chart = (this._chart = new this.winG2.Chart({
            container: el.nativeElement,
            autoFit: true,
            height: height(),
            padding: padding(),
            theme: theme()
        }));
        chart.scale({
            x: {
                type: 'cat'
            },
            y: {
                min: 0
            }
        });
        chart.legend(false);
        chart.axis(false);
        chart.tooltip(genMiniTooltipOptions(tooltipType(), { showCrosshairs: false }));
        chart
            .interval()
            .position('x*y')
            .color('x*y', (x, y) => {
            const colorItem = this.data().find(w => w.x === x && w.y === y);
            return colorItem && colorItem.color ? colorItem.color : color();
        })
            .size(borderWidth())
            .tooltip('x*y', (x, y) => ({ name: x, value: y + yTooltipSuffix() }));
        chart.on(`interval:click`, (ev) => {
            this.clickItem.emit({ item: ev.data?.data, ev });
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: G2MiniBarComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "22.1.7", type: G2MiniBarComponent, isStandalone: true, selector: "g2-mini-bar", inputs: { color: { classPropertyName: "color", publicName: "color", isSignal: true, isRequired: false, transformFunction: null }, height: { classPropertyName: "height", publicName: "height", isSignal: true, isRequired: false, transformFunction: null }, borderWidth: { classPropertyName: "borderWidth", publicName: "borderWidth", isSignal: true, isRequired: false, transformFunction: null }, padding: { classPropertyName: "padding", publicName: "padding", isSignal: true, isRequired: false, transformFunction: null }, data: { classPropertyName: "data", publicName: "data", isSignal: true, isRequired: false, transformFunction: null }, yTooltipSuffix: { classPropertyName: "yTooltipSuffix", publicName: "yTooltipSuffix", isSignal: true, isRequired: false, transformFunction: null }, tooltipType: { classPropertyName: "tooltipType", publicName: "tooltipType", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { clickItem: "clickItem" }, host: { properties: { "style.height.px": "height()" } }, exportAs: ["g2MiniBar"], usesInheritance: true, ngImport: i0, template: ``, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: G2MiniBarComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'g2-mini-bar',
                    exportAs: 'g2MiniBar',
                    template: ``,
                    host: {
                        '[style.height.px]': 'height()'
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], propDecorators: { color: [{ type: i0.Input, args: [{ isSignal: true, alias: "color", required: false }] }], height: [{ type: i0.Input, args: [{ isSignal: true, alias: "height", required: false }] }], borderWidth: [{ type: i0.Input, args: [{ isSignal: true, alias: "borderWidth", required: false }] }], padding: [{ type: i0.Input, args: [{ isSignal: true, alias: "padding", required: false }] }], data: [{ type: i0.Input, args: [{ isSignal: true, alias: "data", required: false }] }], yTooltipSuffix: [{ type: i0.Input, args: [{ isSignal: true, alias: "yTooltipSuffix", required: false }] }], tooltipType: [{ type: i0.Input, args: [{ isSignal: true, alias: "tooltipType", required: false }] }], clickItem: [{ type: i0.Output, args: ["clickItem"] }] } });

const COMPONENTS = [G2MiniBarComponent];
class G2MiniBarModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: G2MiniBarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "22.1.7", ngImport: i0, type: G2MiniBarModule, imports: [CommonModule, G2MiniBarComponent], exports: [G2MiniBarComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: G2MiniBarModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: G2MiniBarModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ...COMPONENTS],
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { G2MiniBarComponent, G2MiniBarModule };
//# sourceMappingURL=mini-bar.mjs.map
