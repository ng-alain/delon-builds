import { __decorate, __metadata } from 'tslib';
import * as i0 from '@angular/core';
import { ɵɵngDeclareComponent, ChangeDetectionStrategy, ViewEncapsulation, ɵɵgetInheritedFactory, ɵsetClassMetadata, Component, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
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
    }
    // #endregion
    install() {
        const { el, height, padding, textStyle, line, format, theme } = this;
        const chart = (this._chart = new window.G2.Chart({
            container: el.nativeElement,
            autoFit: true,
            height,
            padding,
            theme,
        }));
        chart.legend(false);
        chart.axis(false);
        chart.tooltip(false);
        chart.coordinate().transpose();
        chart
            .interval()
            .position('1*value')
            .label('value', () => ({
            formatter: format,
            style: Object.assign({}, textStyle),
        }));
        if (line) {
            chart.annotation().line({
                start: ['50%', '0%'],
                end: ['50%', '100%'],
                style: {
                    stroke: '#e8e8e8',
                    lineDash: [0, 0],
                },
            });
        }
        chart.render();
        this.attachChart();
    }
    attachChart() {
        const { _chart, height, padding, value, min, max, plusColor, minusColor, barSize } = this;
        if (!_chart)
            return;
        _chart.scale({ value: { max, min } });
        _chart.height = height;
        _chart.padding = padding;
        _chart.geometries[0].color('value', (val) => (val > 0 ? plusColor : minusColor)).size(barSize);
        _chart.changeData([{ value }]);
        _chart.render();
    }
}
/** @nocollapse */ G2SingleBarComponent.ɵfac = function G2SingleBarComponent_Factory(t) { return ɵG2SingleBarComponent_BaseFactory(t || G2SingleBarComponent); };
/** @nocollapse */ G2SingleBarComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: G2SingleBarComponent, selector: "g2-single-bar", inputs: { plusColor: "plusColor", minusColor: "minusColor", height: "height", barSize: "barSize", min: "min", max: "max", value: "value", line: "line", format: "format", padding: "padding", textStyle: "textStyle" }, host: { properties: { "style.height.px": "height" } }, exportAs: ["g2SingleBar"], usesInheritance: true, ngImport: i0, template: ``, isInline: true, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2SingleBarComponent.prototype, "height", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2SingleBarComponent.prototype, "barSize", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2SingleBarComponent.prototype, "min", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2SingleBarComponent.prototype, "max", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2SingleBarComponent.prototype, "value", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2SingleBarComponent.prototype, "line", void 0);
const ɵG2SingleBarComponent_BaseFactory = /*@__PURE__*/ ɵɵgetInheritedFactory(G2SingleBarComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(G2SingleBarComponent, [{
        type: Component,
        args: [{
                selector: 'g2-single-bar',
                exportAs: 'g2SingleBar',
                template: ``,
                host: {
                    '[style.height.px]': 'height',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, { plusColor: [{
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
        }] }); })();

const COMPONENTS = [G2SingleBarComponent];
class G2SingleBarModule {
}
/** @nocollapse */ G2SingleBarModule.ɵmod = ɵɵdefineNgModule({ type: G2SingleBarModule });
/** @nocollapse */ G2SingleBarModule.ɵinj = ɵɵdefineInjector({ factory: function G2SingleBarModule_Factory(t) { return new (t || G2SingleBarModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(G2SingleBarModule, { declarations: [G2SingleBarComponent], imports: [CommonModule], exports: [G2SingleBarComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(G2SingleBarModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { G2SingleBarComponent, G2SingleBarModule };
//# sourceMappingURL=single-bar.js.map
