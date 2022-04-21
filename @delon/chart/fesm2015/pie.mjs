import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, NgModule } from '@angular/core';
import { G2BaseComponent } from '@delon/chart/core';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import * as i1 from 'ng-zorro-antd/skeleton';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import * as i2 from 'ng-zorro-antd/divider';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i4 from 'ng-zorro-antd/core/outlet';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';

class G2PieComponent extends G2BaseComponent {
    constructor() {
        super(...arguments);
        this.legendData = [];
        this.isPercent = false;
        // #region fields
        this.animate = true;
        this.color = 'rgba(24, 144, 255, 0.85)';
        this.height = 0;
        this.hasLegend = false;
        this.inner = 0.75;
        this.padding = [12, 0, 12, 0];
        this.tooltip = true;
        this.lineWidth = 0;
        this.blockMaxWidth = 380;
        this.select = true;
        this.data = [];
        this.interaction = 'none';
        this.ratio = {
            text: '占比',
            inverse: '反比',
            color: '',
            inverseColor: '#F0F2F5'
        };
        this.clickItem = new EventEmitter();
        // #endregion
        this.block = false;
    }
    fixData() {
        const { percent, color } = this;
        this.isPercent = percent != null;
        if (!this.isPercent) {
            return;
        }
        this.select = false;
        this.tooltip = false;
        const { text, inverse, color: textColor, inverseColor } = this.ratio;
        this.percentColor = (value) => (value === text ? textColor || color : inverseColor);
        this.data = [
            {
                x: text,
                y: percent
            },
            {
                x: inverse,
                y: 100 - percent
            }
        ];
    }
    updateBlock() {
        this.block = this._chart && this.hasLegend && this.el.nativeElement.clientWidth <= this.blockMaxWidth;
        this.cdr.detectChanges();
    }
    install() {
        const { node, height, padding, tooltip, inner, hasLegend, interaction, theme, animate, lineWidth, isPercent, percentColor, colors } = this;
        const chart = (this._chart = new this.winG2.Chart({
            container: node.nativeElement,
            autoFit: true,
            height,
            padding,
            theme
        }));
        chart.animate(animate);
        if (!tooltip) {
            chart.tooltip(false);
        }
        else {
            chart.tooltip({
                showTitle: false,
                showMarkers: false
            });
        }
        if (interaction !== 'none') {
            chart.interaction(interaction);
        }
        chart.axis(false).legend(false).coordinate('theta', { innerRadius: inner });
        chart.filter('x', (_val, item) => item.checked !== false);
        chart
            .interval()
            .adjust('stack')
            .position('y')
            .style({ lineWidth, stroke: '#fff' })
            .color('x', isPercent ? percentColor : colors)
            .tooltip('x*percent', (name, p) => ({
            name,
            value: `${hasLegend ? p : (p * 100).toFixed(2)} %`
        }))
            .state({});
        chart.scale({
            x: {
                type: 'cat',
                range: [0, 1]
            }
        });
        chart
            .on(`interval:click`, (ev) => {
            this.ngZone.run(() => { var _a; return this.clickItem.emit({ item: (_a = ev.data) === null || _a === void 0 ? void 0 : _a.data, ev }); });
        })
            .on('afterrender', () => {
            this.ngZone.run(() => this.updateBlock());
        });
        this.ready.next(chart);
        this.changeData();
        chart.render();
    }
    changeData() {
        const { _chart, data } = this;
        if (!_chart || !Array.isArray(data) || data.length <= 0)
            return;
        // 转化 percent
        const totalSum = data.reduce((cur, item) => cur + item.y, 0);
        for (const item of data) {
            item.percent = totalSum === 0 ? 0 : item.y / totalSum;
        }
        _chart.changeData(data);
        this.ngZone.run(() => this.genLegend());
    }
    genLegend() {
        const { hasLegend, isPercent, cdr, _chart } = this;
        if (!hasLegend || isPercent)
            return;
        this.legendData = _chart.geometries[0].dataArray.map((item) => {
            const origin = item[0]._origin;
            origin.color = item[0].color;
            origin.checked = true;
            origin.percent = (origin.percent * 100).toFixed(2);
            return origin;
        });
        cdr.detectChanges();
    }
    _click(i) {
        const { legendData, _chart } = this;
        legendData[i].checked = !legendData[i].checked;
        _chart.render(true);
    }
    onChanges() {
        this.fixData();
    }
}
G2PieComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.4", ngImport: i0, type: G2PieComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
G2PieComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.4", type: G2PieComponent, selector: "g2-pie", inputs: { animate: "animate", color: "color", subTitle: "subTitle", total: "total", height: "height", hasLegend: "hasLegend", inner: "inner", padding: "padding", percent: "percent", tooltip: "tooltip", lineWidth: "lineWidth", blockMaxWidth: "blockMaxWidth", select: "select", valueFormat: "valueFormat", data: "data", colors: "colors", interaction: "interaction", ratio: "ratio" }, outputs: { clickItem: "clickItem" }, host: { properties: { "class.g2-pie": "true", "class.g2-pie__legend-has": "hasLegend", "class.g2-pie__legend-block": "block", "class.g2-pie__mini": "isPercent" } }, exportAs: ["g2Pie"], usesInheritance: true, ngImport: i0, template: "<nz-skeleton *ngIf=\"!loaded\"></nz-skeleton>\n<div class=\"g2-pie__chart\">\n  <div #container></div>\n  <div *ngIf=\"subTitle || total\" class=\"g2-pie__total\">\n    <h4 *ngIf=\"subTitle\" class=\"g2-pie__total-title\">\n      <ng-container *nzStringTemplateOutlet=\"subTitle\">\n        <div [innerHTML]=\"subTitle\"></div>\n      </ng-container>\n    </h4>\n    <div *ngIf=\"total\" class=\"g2-pie__total-stat\">\n      <ng-container *nzStringTemplateOutlet=\"total\">\n        <div [innerHTML]=\"total\"></div>\n      </ng-container>\n    </div>\n  </div>\n</div>\n<ul *ngIf=\"hasLegend && legendData?.length\" class=\"g2-pie__legend\">\n  <li *ngFor=\"let item of legendData; let index = index\" (click)=\"_click(index)\" class=\"g2-pie__legend-item\">\n    <span class=\"g2-pie__legend-dot\" [ngStyle]=\"{ 'background-color': !item.checked ? '#aaa' : item.color }\"></span>\n    <span class=\"g2-pie__legend-title\">{{ item.x }}</span>\n    <nz-divider nzType=\"vertical\"></nz-divider>\n    <span class=\"g2-pie__legend-percent\">{{ item.percent }}%</span>\n    <span class=\"g2-pie__legend-value\" [innerHTML]=\"valueFormat ? valueFormat(item.y) : item.y\"></span>\n  </li>\n</ul>\n", components: [{ type: i1.NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }, { type: i2.NzDividerComponent, selector: "nz-divider", inputs: ["nzText", "nzType", "nzOrientation", "nzDashed", "nzPlain"], exportAs: ["nzDivider"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    InputBoolean()
], G2PieComponent.prototype, "animate", void 0);
__decorate([
    InputNumber()
], G2PieComponent.prototype, "height", void 0);
__decorate([
    InputBoolean()
], G2PieComponent.prototype, "hasLegend", void 0);
__decorate([
    InputNumber()
], G2PieComponent.prototype, "percent", void 0);
__decorate([
    InputBoolean()
], G2PieComponent.prototype, "tooltip", void 0);
__decorate([
    InputNumber()
], G2PieComponent.prototype, "lineWidth", void 0);
__decorate([
    InputNumber()
], G2PieComponent.prototype, "blockMaxWidth", void 0);
__decorate([
    InputBoolean()
], G2PieComponent.prototype, "select", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.4", ngImport: i0, type: G2PieComponent, decorators: [{
            type: Component,
            args: [{ selector: 'g2-pie', exportAs: 'g2Pie', host: {
                        '[class.g2-pie]': 'true',
                        '[class.g2-pie__legend-has]': 'hasLegend',
                        '[class.g2-pie__legend-block]': 'block',
                        '[class.g2-pie__mini]': 'isPercent'
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<nz-skeleton *ngIf=\"!loaded\"></nz-skeleton>\n<div class=\"g2-pie__chart\">\n  <div #container></div>\n  <div *ngIf=\"subTitle || total\" class=\"g2-pie__total\">\n    <h4 *ngIf=\"subTitle\" class=\"g2-pie__total-title\">\n      <ng-container *nzStringTemplateOutlet=\"subTitle\">\n        <div [innerHTML]=\"subTitle\"></div>\n      </ng-container>\n    </h4>\n    <div *ngIf=\"total\" class=\"g2-pie__total-stat\">\n      <ng-container *nzStringTemplateOutlet=\"total\">\n        <div [innerHTML]=\"total\"></div>\n      </ng-container>\n    </div>\n  </div>\n</div>\n<ul *ngIf=\"hasLegend && legendData?.length\" class=\"g2-pie__legend\">\n  <li *ngFor=\"let item of legendData; let index = index\" (click)=\"_click(index)\" class=\"g2-pie__legend-item\">\n    <span class=\"g2-pie__legend-dot\" [ngStyle]=\"{ 'background-color': !item.checked ? '#aaa' : item.color }\"></span>\n    <span class=\"g2-pie__legend-title\">{{ item.x }}</span>\n    <nz-divider nzType=\"vertical\"></nz-divider>\n    <span class=\"g2-pie__legend-percent\">{{ item.percent }}%</span>\n    <span class=\"g2-pie__legend-value\" [innerHTML]=\"valueFormat ? valueFormat(item.y) : item.y\"></span>\n  </li>\n</ul>\n" }]
        }], propDecorators: { animate: [{
                type: Input
            }], color: [{
                type: Input
            }], subTitle: [{
                type: Input
            }], total: [{
                type: Input
            }], height: [{
                type: Input
            }], hasLegend: [{
                type: Input
            }], inner: [{
                type: Input
            }], padding: [{
                type: Input
            }], percent: [{
                type: Input
            }], tooltip: [{
                type: Input
            }], lineWidth: [{
                type: Input
            }], blockMaxWidth: [{
                type: Input
            }], select: [{
                type: Input
            }], valueFormat: [{
                type: Input
            }], data: [{
                type: Input
            }], colors: [{
                type: Input
            }], interaction: [{
                type: Input
            }], ratio: [{
                type: Input
            }], clickItem: [{
                type: Output
            }] } });

const COMPONENTS = [G2PieComponent];
class G2PieModule {
}
G2PieModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.4", ngImport: i0, type: G2PieModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
G2PieModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.4", ngImport: i0, type: G2PieModule, declarations: [G2PieComponent], imports: [CommonModule, NzDividerModule, NzOutletModule, NzSkeletonModule], exports: [G2PieComponent] });
G2PieModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.4", ngImport: i0, type: G2PieModule, imports: [[CommonModule, NzDividerModule, NzOutletModule, NzSkeletonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.4", ngImport: i0, type: G2PieModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, NzDividerModule, NzOutletModule, NzSkeletonModule],
                    declarations: COMPONENTS,
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { G2PieComponent, G2PieModule };
//# sourceMappingURL=pie.mjs.map
