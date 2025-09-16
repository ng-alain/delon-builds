import * as i0 from '@angular/core';
import { EventEmitter, booleanAttribute, numberAttribute, Output, Input, ViewEncapsulation, ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { G2BaseComponent } from '@delon/chart/core';
import { NzStringTemplateOutletDirective, NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzDividerComponent, NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSkeletonComponent, NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { CommonModule } from '@angular/common';

class G2PieComponent extends G2BaseComponent {
    percentColor;
    legendData = [];
    isPercent = false;
    // #region fields
    animate = true;
    color = 'rgba(24, 144, 255, 0.85)';
    subTitle;
    total;
    height = 0;
    hasLegend = false;
    inner = 0.75;
    padding = [12, 0, 12, 0];
    percent;
    tooltip = true;
    lineWidth = 0;
    blockMaxWidth = 380;
    select = true;
    valueFormat;
    data = [];
    colors;
    interaction = 'none';
    ratio = {
        text: '占比',
        inverse: '反比',
        color: '',
        inverseColor: '#F0F2F5'
    };
    clickItem = new EventEmitter();
    // #endregion
    block = false;
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
            this.ngZone.run(() => this.clickItem.emit({ item: ev.data?.data, ev }));
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: G2PieComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.1.2", type: G2PieComponent, isStandalone: true, selector: "g2-pie", inputs: { animate: ["animate", "animate", booleanAttribute], color: "color", subTitle: "subTitle", total: "total", height: ["height", "height", numberAttribute], hasLegend: ["hasLegend", "hasLegend", booleanAttribute], inner: "inner", padding: "padding", percent: ["percent", "percent", numberAttribute], tooltip: ["tooltip", "tooltip", booleanAttribute], lineWidth: ["lineWidth", "lineWidth", numberAttribute], blockMaxWidth: ["blockMaxWidth", "blockMaxWidth", numberAttribute], select: ["select", "select", booleanAttribute], valueFormat: "valueFormat", data: "data", colors: "colors", interaction: "interaction", ratio: "ratio" }, outputs: { clickItem: "clickItem" }, host: { properties: { "class.g2-pie": "true", "class.g2-pie__legend-has": "hasLegend", "class.g2-pie__legend-block": "block", "class.g2-pie__mini": "isPercent" } }, exportAs: ["g2Pie"], usesInheritance: true, ngImport: i0, template: "@if (!loaded) {\n  <nz-skeleton />\n}\n<div class=\"g2-pie__chart\">\n  <div #container></div>\n  @if (subTitle || total) {\n    <div class=\"g2-pie__total\">\n      @if (subTitle) {\n        <h4 class=\"g2-pie__total-title\">\n          <ng-container *nzStringTemplateOutlet=\"subTitle\">\n            <div [innerHTML]=\"subTitle\"></div>\n          </ng-container>\n        </h4>\n      }\n      @if (total) {\n        <div class=\"g2-pie__total-stat\">\n          <ng-container *nzStringTemplateOutlet=\"total\">\n            <div [innerHTML]=\"total\"></div>\n          </ng-container>\n        </div>\n      }\n    </div>\n  }\n</div>\n@if (hasLegend && legendData.length > 0) {\n  <ul class=\"g2-pie__legend\">\n    @for (item of legendData; track $index) {\n      <li (click)=\"_click($index)\" class=\"g2-pie__legend-item\">\n        <span class=\"g2-pie__legend-dot\" [style]=\"{ 'background-color': !item.checked ? '#aaa' : item.color }\"></span>\n        <span class=\"g2-pie__legend-title\">{{ item.x }}</span>\n        <nz-divider nzType=\"vertical\" />\n        <span class=\"g2-pie__legend-percent\">{{ item.percent }}%</span>\n        <span class=\"g2-pie__legend-value\" [innerHTML]=\"valueFormat ? valueFormat(item.y) : item.y\"></span>\n      </li>\n    }\n  </ul>\n}\n", dependencies: [{ kind: "component", type: NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "component", type: NzDividerComponent, selector: "nz-divider", inputs: ["nzText", "nzType", "nzOrientation", "nzVariant", "nzDashed", "nzPlain"], exportAs: ["nzDivider"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: G2PieComponent, decorators: [{
            type: Component,
            args: [{ selector: 'g2-pie', exportAs: 'g2Pie', host: {
                        '[class.g2-pie]': 'true',
                        '[class.g2-pie__legend-has]': 'hasLegend',
                        '[class.g2-pie__legend-block]': 'block',
                        '[class.g2-pie__mini]': 'isPercent'
                    }, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, imports: [NzSkeletonComponent, NzStringTemplateOutletDirective, NzDividerComponent], template: "@if (!loaded) {\n  <nz-skeleton />\n}\n<div class=\"g2-pie__chart\">\n  <div #container></div>\n  @if (subTitle || total) {\n    <div class=\"g2-pie__total\">\n      @if (subTitle) {\n        <h4 class=\"g2-pie__total-title\">\n          <ng-container *nzStringTemplateOutlet=\"subTitle\">\n            <div [innerHTML]=\"subTitle\"></div>\n          </ng-container>\n        </h4>\n      }\n      @if (total) {\n        <div class=\"g2-pie__total-stat\">\n          <ng-container *nzStringTemplateOutlet=\"total\">\n            <div [innerHTML]=\"total\"></div>\n          </ng-container>\n        </div>\n      }\n    </div>\n  }\n</div>\n@if (hasLegend && legendData.length > 0) {\n  <ul class=\"g2-pie__legend\">\n    @for (item of legendData; track $index) {\n      <li (click)=\"_click($index)\" class=\"g2-pie__legend-item\">\n        <span class=\"g2-pie__legend-dot\" [style]=\"{ 'background-color': !item.checked ? '#aaa' : item.color }\"></span>\n        <span class=\"g2-pie__legend-title\">{{ item.x }}</span>\n        <nz-divider nzType=\"vertical\" />\n        <span class=\"g2-pie__legend-percent\">{{ item.percent }}%</span>\n        <span class=\"g2-pie__legend-value\" [innerHTML]=\"valueFormat ? valueFormat(item.y) : item.y\"></span>\n      </li>\n    }\n  </ul>\n}\n" }]
        }], propDecorators: { animate: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], color: [{
                type: Input
            }], subTitle: [{
                type: Input
            }], total: [{
                type: Input
            }], height: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], hasLegend: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], inner: [{
                type: Input
            }], padding: [{
                type: Input
            }], percent: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], tooltip: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], lineWidth: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], blockMaxWidth: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], select: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: G2PieModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.2", ngImport: i0, type: G2PieModule, imports: [CommonModule, NzDividerModule, NzOutletModule, NzSkeletonModule, G2PieComponent], exports: [G2PieComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: G2PieModule, imports: [CommonModule, NzDividerModule, NzOutletModule, NzSkeletonModule, COMPONENTS] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: G2PieModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, NzDividerModule, NzOutletModule, NzSkeletonModule, ...COMPONENTS],
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { G2PieComponent, G2PieModule };
//# sourceMappingURL=pie.mjs.map
