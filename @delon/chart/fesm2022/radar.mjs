import * as i0 from '@angular/core';
import { EventEmitter, numberAttribute, booleanAttribute, Output, Input, ViewEncapsulation, ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { G2BaseComponent } from '@delon/chart/core';
import { NzStringTemplateOutletDirective, NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzRowDirective, NzColDirective, NzGridModule } from 'ng-zorro-antd/grid';
import { NzSkeletonComponent, NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { CommonModule } from '@angular/common';

class G2RadarComponent extends G2BaseComponent {
    legendData = [];
    // #region fields
    title;
    height = 0;
    padding = [44, 30, 16, 30];
    hasLegend = true;
    tickCount = 4;
    data = [];
    colors = ['#1890FF', '#FACC14', '#2FC25B', '#8543E0', '#F04864', '#13C2C2', '#fa8c16', '#a0d911'];
    clickItem = new EventEmitter();
    // #endregion
    getHeight() {
        return this.height - (this.hasLegend ? 80 : 22);
    }
    install() {
        const { node, padding, theme, tickCount } = this;
        const chart = (this._chart = new this.winG2.Chart({
            container: node.nativeElement,
            autoFit: true,
            height: this.getHeight(),
            padding,
            theme
        }));
        chart.coordinate('polar');
        chart.legend(false);
        chart.axis('label', {
            line: null,
            label: {
                offset: 8
            },
            grid: {
                line: {
                    style: {
                        stroke: '#e9e9e9',
                        lineWidth: 1,
                        lineDash: [0, 0]
                    }
                }
            }
        });
        chart.axis('value', {
            grid: {
                line: {
                    type: 'polygon',
                    style: {
                        stroke: '#e9e9e9',
                        lineWidth: 1,
                        lineDash: [0, 0]
                    }
                }
            }
        });
        chart.scale({
            value: {
                min: 0,
                tickCount
            }
        });
        chart.filter('name', (name) => {
            const legendItem = this.legendData.find(w => w.name === name);
            return legendItem ? legendItem.checked !== false : true;
        });
        chart.line().position('label*value').color('name', this.colors);
        chart.point().position('label*value').shape('circle').size(3);
        chart.on(`point:click`, (ev) => {
            this.ngZone.run(() => this.clickItem.emit({ item: ev.data?.data, ev }));
        });
        this.ready.next(chart);
        this.changeData();
        chart.render();
    }
    changeData() {
        const { _chart, data } = this;
        if (!_chart || !Array.isArray(data) || data.length <= 0)
            return;
        _chart.changeData(data);
        this.ngZone.run(() => this.genLegend());
    }
    genLegend() {
        const { hasLegend, cdr, _chart } = this;
        if (!hasLegend)
            return;
        this.legendData = _chart.geometries[0].dataArray.map(item => {
            const origin = item[0]._origin;
            const result = {
                name: origin.name,
                color: item[0].color,
                checked: true,
                value: item.reduce((p, n) => p + n._origin.value, 0)
            };
            return result;
        });
        cdr.detectChanges();
    }
    _click(i) {
        const { legendData, _chart } = this;
        legendData[i].checked = !legendData[i].checked;
        _chart.render(true);
    }
    onChanges() {
        this.legendData.forEach(i => (i.checked = true));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: G2RadarComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.3.15", type: G2RadarComponent, isStandalone: true, selector: "g2-radar", inputs: { title: "title", height: ["height", "height", numberAttribute], padding: "padding", hasLegend: ["hasLegend", "hasLegend", booleanAttribute], tickCount: ["tickCount", "tickCount", numberAttribute], data: "data", colors: "colors" }, outputs: { clickItem: "clickItem" }, host: { properties: { "style.height.px": "height", "class.g2-radar": "true" } }, exportAs: ["g2Radar"], usesInheritance: true, ngImport: i0, template: "@if (!loaded) {\n  <nz-skeleton />\n}\n<ng-container *nzStringTemplateOutlet=\"title\">\n  <h4>{{ title }}</h4>\n</ng-container>\n<div #container></div>\n@if (hasLegend) {\n  <div nz-row class=\"g2-radar__legend\">\n    @for (i of legendData; track $index) {\n      <div nz-col [nzSpan]=\"24 / legendData.length\" (click)=\"_click($index)\" class=\"g2-radar__legend-item\">\n        <i class=\"g2-radar__legend-dot\" [style]=\"{ 'background-color': !i.checked ? '#aaa' : i.color }\"></i>\n        {{ i.name }}\n        <h6 class=\"g2-radar__legend-title\">{{ i.value }}</h6>\n      </div>\n    }\n  </div>\n}\n", dependencies: [{ kind: "component", type: NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "directive", type: NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter"], exportAs: ["nzRow"] }, { kind: "directive", type: NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], exportAs: ["nzCol"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: G2RadarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'g2-radar', exportAs: 'g2Radar', host: {
                        '[style.height.px]': 'height',
                        '[class.g2-radar]': 'true'
                    }, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, imports: [NzSkeletonComponent, NzStringTemplateOutletDirective, NzRowDirective, NzColDirective], template: "@if (!loaded) {\n  <nz-skeleton />\n}\n<ng-container *nzStringTemplateOutlet=\"title\">\n  <h4>{{ title }}</h4>\n</ng-container>\n<div #container></div>\n@if (hasLegend) {\n  <div nz-row class=\"g2-radar__legend\">\n    @for (i of legendData; track $index) {\n      <div nz-col [nzSpan]=\"24 / legendData.length\" (click)=\"_click($index)\" class=\"g2-radar__legend-item\">\n        <i class=\"g2-radar__legend-dot\" [style]=\"{ 'background-color': !i.checked ? '#aaa' : i.color }\"></i>\n        {{ i.name }}\n        <h6 class=\"g2-radar__legend-title\">{{ i.value }}</h6>\n      </div>\n    }\n  </div>\n}\n" }]
        }], propDecorators: { title: [{
                type: Input
            }], height: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], padding: [{
                type: Input
            }], hasLegend: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], tickCount: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], data: [{
                type: Input
            }], colors: [{
                type: Input
            }], clickItem: [{
                type: Output
            }] } });

const COMPONENTS = [G2RadarComponent];
class G2RadarModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: G2RadarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.15", ngImport: i0, type: G2RadarModule, imports: [CommonModule, NzGridModule, NzOutletModule, NzSkeletonModule, G2RadarComponent], exports: [G2RadarComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: G2RadarModule, imports: [CommonModule, NzGridModule, NzOutletModule, NzSkeletonModule, COMPONENTS] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: G2RadarModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, NzGridModule, NzOutletModule, NzSkeletonModule, ...COMPONENTS],
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { G2RadarComponent, G2RadarModule };
//# sourceMappingURL=radar.mjs.map
