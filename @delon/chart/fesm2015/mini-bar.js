import { __decorate, __metadata } from 'tslib';
import * as i0 from '@angular/core';
import { EventEmitter, ɵɵngDeclareComponent, ChangeDetectionStrategy, ViewEncapsulation, ɵɵgetInheritedFactory, ɵsetClassMetadata, Component, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { G2BaseComponent } from '@delon/chart/core';
import { InputNumber } from '@delon/util/decorator';
import { CommonModule } from '@angular/common';

class G2MiniBarComponent extends G2BaseComponent {
    constructor() {
        super(...arguments);
        // #region fields
        this.color = '#1890FF';
        this.height = 0;
        this.borderWidth = 5;
        this.padding = [8, 8, 8, 8];
        this.data = [];
        this.yTooltipSuffix = '';
        this.tooltipType = 'default';
        this.clickItem = new EventEmitter();
    }
    // #endregion
    install() {
        const { el, height, padding, yTooltipSuffix, tooltipType, theme } = this;
        const chart = (this._chart = new window.G2.Chart({
            container: el.nativeElement,
            autoFit: true,
            height,
            padding,
            theme,
        }));
        chart.scale({
            x: {
                type: 'cat',
            },
            y: {
                min: 0,
            },
        });
        chart.legend(false);
        chart.axis(false);
        const tooltipOption = {
            showTitle: false,
            showMarkers: true,
            showCrosshairs: false,
            enterable: true,
            domStyles: {
                'g2-tooltip': { padding: '0px' },
                'g2-tooltip-title': { display: 'none' },
                'g2-tooltip-list-item': { margin: '4px' },
            },
        };
        if (tooltipType === 'mini') {
            tooltipOption.position = 'top';
            tooltipOption.domStyles['g2-tooltip'] = { padding: '0px', backgroundColor: 'transparent', boxShadow: 'none' };
            tooltipOption.itemTpl = `<li>{value}</li>`;
            tooltipOption.offset = 0;
        }
        chart.tooltip(tooltipOption);
        chart
            .interval()
            .position('x*y')
            .tooltip('x*y', (x, y) => ({ name: x, value: y + yTooltipSuffix }));
        chart.on(`interval:click`, (ev) => {
            this.ngZone.run(() => { var _a; return this.clickItem.emit({ item: (_a = ev.data) === null || _a === void 0 ? void 0 : _a.data, ev }); });
        });
        chart.render();
        this.attachChart();
    }
    attachChart() {
        const { _chart, height, padding, data, color, borderWidth } = this;
        if (!_chart || !data || data.length <= 0)
            return;
        _chart.geometries[0].size(borderWidth).color(color);
        _chart.height = height;
        _chart.padding = padding;
        _chart.changeData(data);
        _chart.render();
    }
}
/** @nocollapse */ G2MiniBarComponent.ɵfac = function G2MiniBarComponent_Factory(t) { return ɵG2MiniBarComponent_BaseFactory(t || G2MiniBarComponent); };
/** @nocollapse */ G2MiniBarComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: G2MiniBarComponent, selector: "g2-mini-bar", inputs: { color: "color", height: "height", borderWidth: "borderWidth", padding: "padding", data: "data", yTooltipSuffix: "yTooltipSuffix", tooltipType: "tooltipType" }, outputs: { clickItem: "clickItem" }, host: { properties: { "style.height.px": "height" } }, exportAs: ["g2MiniBar"], usesInheritance: true, ngImport: i0, template: ``, isInline: true, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2MiniBarComponent.prototype, "height", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2MiniBarComponent.prototype, "borderWidth", void 0);
const ɵG2MiniBarComponent_BaseFactory = /*@__PURE__*/ ɵɵgetInheritedFactory(G2MiniBarComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(G2MiniBarComponent, [{
        type: Component,
        args: [{
                selector: 'g2-mini-bar',
                exportAs: 'g2MiniBar',
                template: ``,
                host: {
                    '[style.height.px]': 'height',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, { color: [{
            type: Input
        }], height: [{
            type: Input
        }], borderWidth: [{
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
        }] }); })();

const COMPONENTS = [G2MiniBarComponent];
class G2MiniBarModule {
}
/** @nocollapse */ G2MiniBarModule.ɵmod = ɵɵdefineNgModule({ type: G2MiniBarModule });
/** @nocollapse */ G2MiniBarModule.ɵinj = ɵɵdefineInjector({ factory: function G2MiniBarModule_Factory(t) { return new (t || G2MiniBarModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(G2MiniBarModule, { declarations: [G2MiniBarComponent], imports: [CommonModule], exports: [G2MiniBarComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(G2MiniBarModule, [{
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

export { G2MiniBarComponent, G2MiniBarModule };
//# sourceMappingURL=mini-bar.js.map
