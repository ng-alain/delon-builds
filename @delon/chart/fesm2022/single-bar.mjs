import * as i0 from '@angular/core';
import { input, numberAttribute, booleanAttribute, ViewEncapsulation, ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { G2BaseComponent } from '@delon/chart/core';
import { CommonModule } from '@angular/common';

class G2SingleBarComponent extends G2BaseComponent {
    // #region fields
    plusColor = input('#40a9ff', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "plusColor" }] : /* istanbul ignore next */ []));
    minusColor = input('#ff4d4f', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "minusColor" }] : /* istanbul ignore next */ []));
    height = input(60, { ...(ngDevMode ? { debugName: "height" } : /* istanbul ignore next */ {}), transform: numberAttribute });
    barSize = input(30, { ...(ngDevMode ? { debugName: "barSize" } : /* istanbul ignore next */ {}), transform: numberAttribute });
    min = input(0, { ...(ngDevMode ? { debugName: "min" } : /* istanbul ignore next */ {}), transform: numberAttribute });
    max = input(100, { ...(ngDevMode ? { debugName: "max" } : /* istanbul ignore next */ {}), transform: numberAttribute });
    value = input(0, { ...(ngDevMode ? { debugName: "value" } : /* istanbul ignore next */ {}), transform: numberAttribute });
    line = input(false, { ...(ngDevMode ? { debugName: "line" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    format = input(/* @ts-ignore */
    ...(ngDevMode ? [undefined, { debugName: "format" }] : /* istanbul ignore next */ []));
    padding = input(0, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "padding" }] : /* istanbul ignore next */ []));
    textStyle = input({ fontSize: 12, color: '#595959' }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "textStyle" }] : /* istanbul ignore next */ []));
    // #endregion
    install() {
        const { el, height, padding, textStyle, line, format, theme, min, max, plusColor, minusColor, barSize } = this;
        const chart = (this._chart = new this.winG2.Chart({
            container: el.nativeElement,
            autoFit: true,
            height: height(),
            padding: padding(),
            theme: theme()
        }));
        chart.legend(false);
        chart.axis(false);
        chart.scale({ value: { max: max(), min: min() } });
        chart.tooltip(false);
        chart.coordinate().transpose();
        chart
            .interval()
            .position('1*value')
            .color('value', (val) => (val > 0 ? plusColor() : minusColor()))
            .size(barSize())
            .label('value', () => ({
            formatter: format(),
            style: {
                ...textStyle()
            }
        }));
        if (line()) {
            chart.annotation().line({
                start: ['50%', '0%'],
                end: ['50%', '100%'],
                style: {
                    stroke: '#e8e8e8',
                    lineDash: [0, 0]
                }
            });
        }
        this.ready.emit(chart);
        this.changeData();
        chart.render();
    }
    /** 等价旧 onlyChangeData：仅 value 变更时平滑更新 */
    isDataOnly(changed) {
        // `Object.is` 按引用比较（对信号对象与 `===` 等价），避免 `no-uncalled-signals` 误报
        return changed.length === 1 && Object.is(changed[0], this.value);
    }
    changeData() {
        const { _chart, value } = this;
        if (!_chart)
            return;
        _chart.changeData([{ value: value() }]);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: G2SingleBarComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "22.1.7", type: G2SingleBarComponent, isStandalone: true, selector: "g2-single-bar", inputs: { plusColor: { classPropertyName: "plusColor", publicName: "plusColor", isSignal: true, isRequired: false, transformFunction: null }, minusColor: { classPropertyName: "minusColor", publicName: "minusColor", isSignal: true, isRequired: false, transformFunction: null }, height: { classPropertyName: "height", publicName: "height", isSignal: true, isRequired: false, transformFunction: null }, barSize: { classPropertyName: "barSize", publicName: "barSize", isSignal: true, isRequired: false, transformFunction: null }, min: { classPropertyName: "min", publicName: "min", isSignal: true, isRequired: false, transformFunction: null }, max: { classPropertyName: "max", publicName: "max", isSignal: true, isRequired: false, transformFunction: null }, value: { classPropertyName: "value", publicName: "value", isSignal: true, isRequired: false, transformFunction: null }, line: { classPropertyName: "line", publicName: "line", isSignal: true, isRequired: false, transformFunction: null }, format: { classPropertyName: "format", publicName: "format", isSignal: true, isRequired: false, transformFunction: null }, padding: { classPropertyName: "padding", publicName: "padding", isSignal: true, isRequired: false, transformFunction: null }, textStyle: { classPropertyName: "textStyle", publicName: "textStyle", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "style.height.px": "height()" } }, exportAs: ["g2SingleBar"], usesInheritance: true, ngImport: i0, template: ``, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: G2SingleBarComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'g2-single-bar',
                    exportAs: 'g2SingleBar',
                    template: ``,
                    host: {
                        '[style.height.px]': 'height()'
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], propDecorators: { plusColor: [{ type: i0.Input, args: [{ isSignal: true, alias: "plusColor", required: false }] }], minusColor: [{ type: i0.Input, args: [{ isSignal: true, alias: "minusColor", required: false }] }], height: [{ type: i0.Input, args: [{ isSignal: true, alias: "height", required: false }] }], barSize: [{ type: i0.Input, args: [{ isSignal: true, alias: "barSize", required: false }] }], min: [{ type: i0.Input, args: [{ isSignal: true, alias: "min", required: false }] }], max: [{ type: i0.Input, args: [{ isSignal: true, alias: "max", required: false }] }], value: [{ type: i0.Input, args: [{ isSignal: true, alias: "value", required: false }] }], line: [{ type: i0.Input, args: [{ isSignal: true, alias: "line", required: false }] }], format: [{ type: i0.Input, args: [{ isSignal: true, alias: "format", required: false }] }], padding: [{ type: i0.Input, args: [{ isSignal: true, alias: "padding", required: false }] }], textStyle: [{ type: i0.Input, args: [{ isSignal: true, alias: "textStyle", required: false }] }] } });

const COMPONENTS = [G2SingleBarComponent];
class G2SingleBarModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: G2SingleBarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "22.1.7", ngImport: i0, type: G2SingleBarModule, imports: [CommonModule, G2SingleBarComponent], exports: [G2SingleBarComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: G2SingleBarModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: G2SingleBarModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ...COMPONENTS],
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { G2SingleBarComponent, G2SingleBarModule };
//# sourceMappingURL=single-bar.mjs.map
