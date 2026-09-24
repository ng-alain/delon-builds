import * as i0 from '@angular/core';
import { signal, computed, input, booleanAttribute, numberAttribute, output, ViewEncapsulation, ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { G2BaseComponent } from '@delon/chart/core';
import { NzStringTemplateOutletDirective, NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzDividerComponent, NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSkeletonComponent, NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { CommonModule } from '@angular/common';

class G2PieComponent extends G2BaseComponent {
    legendData = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "legendData" }] : /* istanbul ignore next */ []));
    block = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "block" }] : /* istanbul ignore next */ []));
    /** percent 模式下为迷你图（旧 fixData() 的副作用改为派生量） */
    isPercent = computed(() => this.percent() != null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "isPercent" }] : /* istanbul ignore next */ []));
    runTooltip = computed(() => (this.isPercent() ? false : this.tooltip()), /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "runTooltip" }] : /* istanbul ignore next */ []));
    percentColor = computed(() => {
        const { text, color, inverseColor } = this.ratio();
        return (value) => (value === text ? (color ?? this.color()) : inverseColor);
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "percentColor" }] : /* istanbul ignore next */ []));
    /** percent 模式下 data 由 percent / ratio 派生 */
    runData = computed(() => {
        const percent = this.percent();
        if (percent == null) {
            return this.data();
        }
        const { text, inverse } = this.ratio();
        return [
            { x: text, y: percent },
            { x: inverse, y: 100 - percent }
        ];
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "runData" }] : /* istanbul ignore next */ []));
    // #region fields
    animate = input(true, { ...(ngDevMode ? { debugName: "animate" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    color = input('rgba(24, 144, 255, 0.85)', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "color" }] : /* istanbul ignore next */ []));
    subTitle = input(/* @ts-ignore */
    ...(ngDevMode ? [undefined, { debugName: "subTitle" }] : /* istanbul ignore next */ []));
    total = input(/* @ts-ignore */
    ...(ngDevMode ? [undefined, { debugName: "total" }] : /* istanbul ignore next */ []));
    height = input(0, { ...(ngDevMode ? { debugName: "height" } : /* istanbul ignore next */ {}), transform: numberAttribute });
    hasLegend = input(false, { ...(ngDevMode ? { debugName: "hasLegend" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    inner = input(0.75, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "inner" }] : /* istanbul ignore next */ []));
    padding = input([12, 0, 12, 0], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "padding" }] : /* istanbul ignore next */ []));
    percent = input(undefined, { ...(ngDevMode ? { debugName: "percent" } : /* istanbul ignore next */ {}), transform: numberAttribute });
    tooltip = input(true, { ...(ngDevMode ? { debugName: "tooltip" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    lineWidth = input(0, { ...(ngDevMode ? { debugName: "lineWidth" } : /* istanbul ignore next */ {}), transform: numberAttribute });
    blockMaxWidth = input(380, { ...(ngDevMode ? { debugName: "blockMaxWidth" } : /* istanbul ignore next */ {}), transform: numberAttribute });
    select = input(true, { ...(ngDevMode ? { debugName: "select" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    valueFormat = input(/* @ts-ignore */
    ...(ngDevMode ? [undefined, { debugName: "valueFormat" }] : /* istanbul ignore next */ []));
    data = input([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "data" }] : /* istanbul ignore next */ []));
    colors = input(/* @ts-ignore */
    ...(ngDevMode ? [undefined, { debugName: "colors" }] : /* istanbul ignore next */ []));
    interaction = input('none', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "interaction" }] : /* istanbul ignore next */ []));
    ratio = input({
        text: '占比',
        inverse: '反比',
        color: '',
        inverseColor: '#F0F2F5'
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "ratio" }] : /* istanbul ignore next */ []));
    clickItem = output();
    // #endregion
    updateBlock() {
        this.block.set(!!this._chart && this.hasLegend() && this.el.nativeElement.clientWidth <= this.blockMaxWidth());
    }
    install() {
        const { node, height, padding, inner, hasLegend, interaction, theme, animate, lineWidth, isPercent, percentColor, colors } = this;
        const chart = (this._chart = new this.winG2.Chart({
            container: node().nativeElement,
            autoFit: true,
            height: height(),
            padding: padding(),
            theme: theme()
        }));
        chart.animate(animate());
        if (!this.runTooltip()) {
            chart.tooltip(false);
        }
        else {
            chart.tooltip({
                showTitle: false,
                showMarkers: false
            });
        }
        if (interaction() !== 'none') {
            chart.interaction(interaction());
        }
        chart.axis(false).legend(false).coordinate('theta', { innerRadius: inner() });
        chart.filter('x', (_val, item) => item.checked !== false);
        chart
            .interval()
            .adjust('stack')
            .position('y')
            .style({ lineWidth: lineWidth(), stroke: '#fff' })
            .color('x', isPercent() ? percentColor() : colors())
            .tooltip('x*percent', (name, p) => ({
            name,
            value: `${hasLegend() ? p : (p * 100).toFixed(2)} %`
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
            this.clickItem.emit({ item: ev.data?.data, ev });
        })
            .on('afterrender', () => this.updateBlock());
        this.ready.emit(chart);
        this.changeData();
        chart.render();
    }
    changeData() {
        const { _chart } = this;
        const data = this.runData();
        if (!_chart || !Array.isArray(data) || data.length <= 0)
            return;
        // 转化 percent
        const totalSum = data.reduce((cur, item) => cur + item.y, 0);
        for (const item of data) {
            item.percent = totalSum === 0 ? 0 : item.y / totalSum;
        }
        _chart.changeData(data);
        this.genLegend();
    }
    genLegend() {
        const { hasLegend, isPercent, _chart } = this;
        if (!hasLegend() || isPercent())
            return;
        this.legendData.set(_chart.geometries[0].dataArray.map((item) => {
            const origin = item[0]._origin;
            origin.color = item[0].color;
            origin.checked = true;
            origin.percent = (origin.percent * 100).toFixed(2);
            return origin;
        }));
    }
    _click(i) {
        const legendData = this.legendData();
        legendData[i].checked = !legendData[i].checked;
        this._chart.render(true);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: G2PieComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "22.1.7", type: G2PieComponent, isStandalone: true, selector: "g2-pie", inputs: { animate: { classPropertyName: "animate", publicName: "animate", isSignal: true, isRequired: false, transformFunction: null }, color: { classPropertyName: "color", publicName: "color", isSignal: true, isRequired: false, transformFunction: null }, subTitle: { classPropertyName: "subTitle", publicName: "subTitle", isSignal: true, isRequired: false, transformFunction: null }, total: { classPropertyName: "total", publicName: "total", isSignal: true, isRequired: false, transformFunction: null }, height: { classPropertyName: "height", publicName: "height", isSignal: true, isRequired: false, transformFunction: null }, hasLegend: { classPropertyName: "hasLegend", publicName: "hasLegend", isSignal: true, isRequired: false, transformFunction: null }, inner: { classPropertyName: "inner", publicName: "inner", isSignal: true, isRequired: false, transformFunction: null }, padding: { classPropertyName: "padding", publicName: "padding", isSignal: true, isRequired: false, transformFunction: null }, percent: { classPropertyName: "percent", publicName: "percent", isSignal: true, isRequired: false, transformFunction: null }, tooltip: { classPropertyName: "tooltip", publicName: "tooltip", isSignal: true, isRequired: false, transformFunction: null }, lineWidth: { classPropertyName: "lineWidth", publicName: "lineWidth", isSignal: true, isRequired: false, transformFunction: null }, blockMaxWidth: { classPropertyName: "blockMaxWidth", publicName: "blockMaxWidth", isSignal: true, isRequired: false, transformFunction: null }, select: { classPropertyName: "select", publicName: "select", isSignal: true, isRequired: false, transformFunction: null }, valueFormat: { classPropertyName: "valueFormat", publicName: "valueFormat", isSignal: true, isRequired: false, transformFunction: null }, data: { classPropertyName: "data", publicName: "data", isSignal: true, isRequired: false, transformFunction: null }, colors: { classPropertyName: "colors", publicName: "colors", isSignal: true, isRequired: false, transformFunction: null }, interaction: { classPropertyName: "interaction", publicName: "interaction", isSignal: true, isRequired: false, transformFunction: null }, ratio: { classPropertyName: "ratio", publicName: "ratio", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { clickItem: "clickItem" }, host: { properties: { "class.g2-pie": "true", "class.g2-pie__legend-has": "hasLegend()", "class.g2-pie__legend-block": "block()", "class.g2-pie__mini": "isPercent()" } }, exportAs: ["g2Pie"], usesInheritance: true, ngImport: i0, template: "@if (!loaded()) {\n  <nz-skeleton />\n}\n<div class=\"g2-pie__chart\">\n  <div #container></div>\n  @if (subTitle() || total()) {\n    <div class=\"g2-pie__total\">\n      @if (subTitle()) {\n        <h4 class=\"g2-pie__total-title\">\n          <ng-container *nzStringTemplateOutlet=\"subTitle()\">\n            <div [innerHTML]=\"subTitle()\"></div>\n          </ng-container>\n        </h4>\n      }\n      @if (total()) {\n        <div class=\"g2-pie__total-stat\">\n          <ng-container *nzStringTemplateOutlet=\"total()\">\n            <div [innerHTML]=\"total()\"></div>\n          </ng-container>\n        </div>\n      }\n    </div>\n  }\n</div>\n@if (hasLegend() && legendData().length > 0) {\n  <ul class=\"g2-pie__legend\">\n    @for (item of legendData(); track $index) {\n      <li (click)=\"_click($index)\" class=\"g2-pie__legend-item\">\n        <span class=\"g2-pie__legend-dot\" [style]=\"{ 'background-color': !item.checked ? '#aaa' : item.color }\"></span>\n        <span class=\"g2-pie__legend-title\">{{ item.x }}</span>\n        <nz-divider nzType=\"vertical\" />\n        <span class=\"g2-pie__legend-percent\">{{ item.percent }}%</span>\n        @let vf = valueFormat();\n        <span class=\"g2-pie__legend-value\" [innerHTML]=\"vf ? vf(item.y) : item.y\"></span>\n      </li>\n    }\n  </ul>\n}\n", dependencies: [{ kind: "component", type: NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "component", type: NzDividerComponent, selector: "nz-divider", inputs: ["nzText", "nzType", "nzOrientation", "nzVariant", "nzSize", "nzDashed", "nzPlain"], exportAs: ["nzDivider"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: G2PieComponent, decorators: [{
            type: Component,
            args: [{ selector: 'g2-pie', exportAs: 'g2Pie', host: {
                        '[class.g2-pie]': 'true',
                        '[class.g2-pie__legend-has]': 'hasLegend()',
                        '[class.g2-pie__legend-block]': 'block()',
                        '[class.g2-pie__mini]': 'isPercent()'
                    }, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, imports: [NzSkeletonComponent, NzStringTemplateOutletDirective, NzDividerComponent], template: "@if (!loaded()) {\n  <nz-skeleton />\n}\n<div class=\"g2-pie__chart\">\n  <div #container></div>\n  @if (subTitle() || total()) {\n    <div class=\"g2-pie__total\">\n      @if (subTitle()) {\n        <h4 class=\"g2-pie__total-title\">\n          <ng-container *nzStringTemplateOutlet=\"subTitle()\">\n            <div [innerHTML]=\"subTitle()\"></div>\n          </ng-container>\n        </h4>\n      }\n      @if (total()) {\n        <div class=\"g2-pie__total-stat\">\n          <ng-container *nzStringTemplateOutlet=\"total()\">\n            <div [innerHTML]=\"total()\"></div>\n          </ng-container>\n        </div>\n      }\n    </div>\n  }\n</div>\n@if (hasLegend() && legendData().length > 0) {\n  <ul class=\"g2-pie__legend\">\n    @for (item of legendData(); track $index) {\n      <li (click)=\"_click($index)\" class=\"g2-pie__legend-item\">\n        <span class=\"g2-pie__legend-dot\" [style]=\"{ 'background-color': !item.checked ? '#aaa' : item.color }\"></span>\n        <span class=\"g2-pie__legend-title\">{{ item.x }}</span>\n        <nz-divider nzType=\"vertical\" />\n        <span class=\"g2-pie__legend-percent\">{{ item.percent }}%</span>\n        @let vf = valueFormat();\n        <span class=\"g2-pie__legend-value\" [innerHTML]=\"vf ? vf(item.y) : item.y\"></span>\n      </li>\n    }\n  </ul>\n}\n" }]
        }], propDecorators: { animate: [{ type: i0.Input, args: [{ isSignal: true, alias: "animate", required: false }] }], color: [{ type: i0.Input, args: [{ isSignal: true, alias: "color", required: false }] }], subTitle: [{ type: i0.Input, args: [{ isSignal: true, alias: "subTitle", required: false }] }], total: [{ type: i0.Input, args: [{ isSignal: true, alias: "total", required: false }] }], height: [{ type: i0.Input, args: [{ isSignal: true, alias: "height", required: false }] }], hasLegend: [{ type: i0.Input, args: [{ isSignal: true, alias: "hasLegend", required: false }] }], inner: [{ type: i0.Input, args: [{ isSignal: true, alias: "inner", required: false }] }], padding: [{ type: i0.Input, args: [{ isSignal: true, alias: "padding", required: false }] }], percent: [{ type: i0.Input, args: [{ isSignal: true, alias: "percent", required: false }] }], tooltip: [{ type: i0.Input, args: [{ isSignal: true, alias: "tooltip", required: false }] }], lineWidth: [{ type: i0.Input, args: [{ isSignal: true, alias: "lineWidth", required: false }] }], blockMaxWidth: [{ type: i0.Input, args: [{ isSignal: true, alias: "blockMaxWidth", required: false }] }], select: [{ type: i0.Input, args: [{ isSignal: true, alias: "select", required: false }] }], valueFormat: [{ type: i0.Input, args: [{ isSignal: true, alias: "valueFormat", required: false }] }], data: [{ type: i0.Input, args: [{ isSignal: true, alias: "data", required: false }] }], colors: [{ type: i0.Input, args: [{ isSignal: true, alias: "colors", required: false }] }], interaction: [{ type: i0.Input, args: [{ isSignal: true, alias: "interaction", required: false }] }], ratio: [{ type: i0.Input, args: [{ isSignal: true, alias: "ratio", required: false }] }], clickItem: [{ type: i0.Output, args: ["clickItem"] }] } });

const COMPONENTS = [G2PieComponent];
class G2PieModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: G2PieModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "22.1.7", ngImport: i0, type: G2PieModule, imports: [CommonModule, NzDividerModule, NzOutletModule, NzSkeletonModule, G2PieComponent], exports: [G2PieComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: G2PieModule, imports: [CommonModule, NzDividerModule, NzOutletModule, NzSkeletonModule, COMPONENTS] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: G2PieModule, decorators: [{
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
