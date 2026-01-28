import * as i0 from '@angular/core';
import { booleanAttribute, numberAttribute, Input, ViewEncapsulation, ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { G2BaseComponent } from '@delon/chart/core';
import { CommonModule } from '@angular/common';

class G2SingleBarComponent extends G2BaseComponent {
    // #region fields
    plusColor = '#40a9ff';
    minusColor = '#ff4d4f';
    height = 60;
    barSize = 30;
    min = 0;
    max = 100;
    value = 0;
    line = false;
    format;
    padding = 0;
    textStyle = { fontSize: 12, color: '#595959' };
    // #endregion
    install() {
        const { el, height, padding, textStyle, line, format, theme, min, max, plusColor, minusColor, barSize } = this;
        const chart = (this._chart = new this.winG2.Chart({
            container: el.nativeElement,
            autoFit: true,
            height,
            padding,
            theme
        }));
        chart.legend(false);
        chart.axis(false);
        chart.scale({ value: { max, min } });
        chart.tooltip(false);
        chart.coordinate().transpose();
        chart
            .interval()
            .position('1*value')
            .color('value', (val) => (val > 0 ? plusColor : minusColor))
            .size(barSize)
            .label('value', () => ({
            formatter: format,
            style: {
                ...textStyle
            }
        }));
        if (line) {
            chart.annotation().line({
                start: ['50%', '0%'],
                end: ['50%', '100%'],
                style: {
                    stroke: '#e8e8e8',
                    lineDash: [0, 0]
                }
            });
        }
        this.ready.next(chart);
        this.changeData();
        chart.render();
    }
    onlyChangeData = (changes) => {
        return Object.keys(changes).length === 1 && !!changes.value;
    };
    changeData() {
        const { _chart, value } = this;
        if (!_chart)
            return;
        _chart.changeData([{ value }]);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.1", ngImport: i0, type: G2SingleBarComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "21.1.1", type: G2SingleBarComponent, isStandalone: true, selector: "g2-single-bar", inputs: { plusColor: "plusColor", minusColor: "minusColor", height: ["height", "height", numberAttribute], barSize: ["barSize", "barSize", numberAttribute], min: ["min", "min", numberAttribute], max: ["max", "max", numberAttribute], value: ["value", "value", numberAttribute], line: ["line", "line", booleanAttribute], format: "format", padding: "padding", textStyle: "textStyle" }, host: { properties: { "style.height.px": "height" } }, exportAs: ["g2SingleBar"], usesInheritance: true, ngImport: i0, template: ``, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.1", ngImport: i0, type: G2SingleBarComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'g2-single-bar',
                    exportAs: 'g2SingleBar',
                    template: ``,
                    host: {
                        '[style.height.px]': 'height'
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], propDecorators: { plusColor: [{
                type: Input
            }], minusColor: [{
                type: Input
            }], height: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], barSize: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], min: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], max: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], value: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], line: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], format: [{
                type: Input
            }], padding: [{
                type: Input
            }], textStyle: [{
                type: Input
            }] } });

const COMPONENTS = [G2SingleBarComponent];
class G2SingleBarModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.1", ngImport: i0, type: G2SingleBarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "21.1.1", ngImport: i0, type: G2SingleBarModule, imports: [CommonModule, G2SingleBarComponent], exports: [G2SingleBarComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "21.1.1", ngImport: i0, type: G2SingleBarModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.1", ngImport: i0, type: G2SingleBarModule, decorators: [{
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
