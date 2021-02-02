import { __decorate, __metadata } from 'tslib';
import * as i0 from '@angular/core';
import { EventEmitter, ɵɵngDeclareComponent, ChangeDetectionStrategy, ViewEncapsulation, ɵɵgetInheritedFactory, ɵsetClassMetadata, Component, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { G2BaseComponent } from '@delon/chart/core';
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
        const { el, fit, height, padding, xAxis, yAxis, yTooltipSuffix, tooltipType, line, theme } = this;
        const chart = (this._chart = new window.G2.Chart({
            container: el.nativeElement,
            autoFit: fit,
            height,
            padding,
            theme,
        }));
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
        const tooltipOption = {
            showTitle: false,
            showMarkers: true,
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
            .area()
            .position('x*y')
            .tooltip('x*y', (x, y) => ({ name: x, value: y + yTooltipSuffix }))
            .shape('smooth');
        if (line) {
            chart.line().position('x*y').shape('smooth').tooltip(false);
        }
        chart.on(`plot:click`, (ev) => {
            const records = this._chart.getSnapRecords({ x: ev.x, y: ev.y });
            this.ngZone.run(() => this.clickItem.emit({ item: records[0]._origin, ev }));
        });
        chart.render();
        this.attachChart();
    }
    attachChart() {
        const { _chart, line, fit, height, animate, padding, data, color, borderColor, borderWidth } = this;
        if (!_chart || !data || data.length <= 0) {
            return;
        }
        const geoms = _chart.geometries;
        geoms.forEach(g => g.color(color));
        if (line) {
            geoms[1].color(borderColor).size(borderWidth);
        }
        _chart.autoFit = fit;
        _chart.height = height;
        _chart.animate(animate);
        _chart.padding = padding;
        _chart.changeData(data);
        _chart.render();
    }
}
/** @nocollapse */ G2MiniAreaComponent.ɵfac = function G2MiniAreaComponent_Factory(t) { return ɵG2MiniAreaComponent_BaseFactory(t || G2MiniAreaComponent); };
/** @nocollapse */ G2MiniAreaComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: G2MiniAreaComponent, selector: "g2-mini-area", inputs: { color: "color", borderColor: "borderColor", borderWidth: "borderWidth", height: "height", fit: "fit", line: "line", animate: "animate", xAxis: "xAxis", yAxis: "yAxis", padding: "padding", data: "data", yTooltipSuffix: "yTooltipSuffix", tooltipType: "tooltipType" }, outputs: { clickItem: "clickItem" }, host: { properties: { "style.height.px": "height" } }, exportAs: ["g2MiniArea"], usesInheritance: true, ngImport: i0, template: ``, isInline: true, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2MiniAreaComponent.prototype, "borderWidth", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2MiniAreaComponent.prototype, "height", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2MiniAreaComponent.prototype, "fit", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2MiniAreaComponent.prototype, "line", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2MiniAreaComponent.prototype, "animate", void 0);
const ɵG2MiniAreaComponent_BaseFactory = /*@__PURE__*/ ɵɵgetInheritedFactory(G2MiniAreaComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(G2MiniAreaComponent, [{
        type: Component,
        args: [{
                selector: 'g2-mini-area',
                exportAs: 'g2MiniArea',
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
        }] }); })();

const COMPONENTS = [G2MiniAreaComponent];
class G2MiniAreaModule {
}
/** @nocollapse */ G2MiniAreaModule.ɵmod = ɵɵdefineNgModule({ type: G2MiniAreaModule });
/** @nocollapse */ G2MiniAreaModule.ɵinj = ɵɵdefineInjector({ factory: function G2MiniAreaModule_Factory(t) { return new (t || G2MiniAreaModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(G2MiniAreaModule, { declarations: [G2MiniAreaComponent], imports: [CommonModule], exports: [G2MiniAreaComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(G2MiniAreaModule, [{
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

export { G2MiniAreaComponent, G2MiniAreaModule };
//# sourceMappingURL=mini-area.js.map
