import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, NgModule } from '@angular/core';
import { G2BaseComponent } from '@delon/chart/core';
import { InputNumber, InputBoolean } from '@delon/util/decorator';
import { CommonModule } from '@angular/common';

class G2SingleBarComponent extends G2BaseComponent {
    constructor() {
        super(...arguments);
        // #region fields
        this.plusColor = '#40a9ff';
        this.minusColor = '#ff4d4f';
        this.height = 60;
        this.barSize = 30;
        this.min = 0;
        this.max = 100;
        this.value = 0;
        this.line = false;
        this.padding = 0;
        this.textStyle = { fontSize: 12, color: '#595959' };
        this.onlyChangeData = (changes) => {
            return Object.keys(changes).length === 1 && !!changes.value;
        };
    }
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
    changeData() {
        const { _chart, value } = this;
        if (!_chart)
            return;
        _chart.changeData([{ value }]);
    }
}
G2SingleBarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.10", ngImport: i0, type: G2SingleBarComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
G2SingleBarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.10", type: G2SingleBarComponent, selector: "g2-single-bar", inputs: { plusColor: "plusColor", minusColor: "minusColor", height: "height", barSize: "barSize", min: "min", max: "max", value: "value", line: "line", format: "format", padding: "padding", textStyle: "textStyle" }, host: { properties: { "style.height.px": "height" } }, exportAs: ["g2SingleBar"], usesInheritance: true, ngImport: i0, template: ``, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    InputNumber()
], G2SingleBarComponent.prototype, "height", void 0);
__decorate([
    InputNumber()
], G2SingleBarComponent.prototype, "barSize", void 0);
__decorate([
    InputNumber()
], G2SingleBarComponent.prototype, "min", void 0);
__decorate([
    InputNumber()
], G2SingleBarComponent.prototype, "max", void 0);
__decorate([
    InputNumber()
], G2SingleBarComponent.prototype, "value", void 0);
__decorate([
    InputBoolean()
], G2SingleBarComponent.prototype, "line", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.10", ngImport: i0, type: G2SingleBarComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'g2-single-bar',
                    exportAs: 'g2SingleBar',
                    template: ``,
                    host: {
                        '[style.height.px]': 'height'
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], propDecorators: { plusColor: [{
                type: Input
            }], minusColor: [{
                type: Input
            }], height: [{
                type: Input
            }], barSize: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], value: [{
                type: Input
            }], line: [{
                type: Input
            }], format: [{
                type: Input
            }], padding: [{
                type: Input
            }], textStyle: [{
                type: Input
            }] } });

const COMPONENTS = [G2SingleBarComponent];
class G2SingleBarModule {
}
G2SingleBarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.10", ngImport: i0, type: G2SingleBarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
G2SingleBarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.10", ngImport: i0, type: G2SingleBarModule, declarations: [G2SingleBarComponent], imports: [CommonModule], exports: [G2SingleBarComponent] });
G2SingleBarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.10", ngImport: i0, type: G2SingleBarModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.10", ngImport: i0, type: G2SingleBarModule, decorators: [{
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

export { G2SingleBarComponent, G2SingleBarModule };
//# sourceMappingURL=single-bar.mjs.map
