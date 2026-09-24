import * as i0 from '@angular/core';
import { input, numberAttribute, booleanAttribute, output, ViewEncapsulation, ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { format } from 'date-fns';
import { G2BaseComponent } from '@delon/chart/core';
import { toDate } from '@delon/util/date-time';
import { NzStringTemplateOutletDirective, NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzSkeletonComponent, NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { CommonModule } from '@angular/common';

class G2TimelineComponent extends G2BaseComponent {
    // #region fields
    title = input(/* @ts-ignore */
    ...(ngDevMode ? [undefined, { debugName: "title" }] : /* istanbul ignore next */ []));
    maxAxis = input(2, { ...(ngDevMode ? { debugName: "maxAxis" } : /* istanbul ignore next */ {}), transform: numberAttribute });
    data = input([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "data" }] : /* istanbul ignore next */ []));
    titleMap = input(/* @ts-ignore */
    ...(ngDevMode ? [undefined, { debugName: "titleMap" }] : /* istanbul ignore next */ []));
    colorMap = input({
        y1: '#5B8FF9',
        y2: '#5AD8A6',
        y3: '#5D7092',
        y4: '#F6BD16',
        y5: '#E86452'
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "colorMap" }] : /* istanbul ignore next */ []));
    mask = input('HH:mm', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "mask" }] : /* istanbul ignore next */ []));
    maskSlider = input('HH:mm', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "maskSlider" }] : /* istanbul ignore next */ []));
    position = input('top', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "position" }] : /* istanbul ignore next */ []));
    height = input(450, { ...(ngDevMode ? { debugName: "height" } : /* istanbul ignore next */ {}), transform: numberAttribute });
    padding = input([40, 8, 64, 40], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "padding" }] : /* istanbul ignore next */ []));
    borderWidth = input(2, { ...(ngDevMode ? { debugName: "borderWidth" } : /* istanbul ignore next */ {}), transform: numberAttribute });
    slider = input(true, { ...(ngDevMode ? { debugName: "slider" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    clickItem = output();
    // #endregion
    /** 等价旧 onlyChangeData：除 titleMap 外，其余输入变更都只需更新数据 */
    isDataOnly(changed) {
        return !changed.includes(this.titleMap);
    }
    install() {
        const { node, height, padding, slider, maxAxis, theme, maskSlider } = this;
        const chart = (this._chart = new this.winG2.Chart({
            container: node().nativeElement,
            autoFit: true,
            height: height(),
            padding: padding(),
            theme: theme()
        }));
        chart.axis('time', { title: null });
        chart.axis('y1', { title: null });
        for (let i = 2; i <= maxAxis(); i++) {
            chart.axis(`y${i}`, false);
        }
        chart.line().position('time*y1');
        for (let i = 2; i <= maxAxis(); i++) {
            chart.line().position(`time*y${i}`);
        }
        chart.tooltip({
            showCrosshairs: true,
            shared: true
        });
        const sliderPadding = { ...[], ...padding() };
        sliderPadding[0] = 0;
        if (slider()) {
            chart.option('slider', {
                height: 26,
                start: 0,
                end: 1,
                trendCfg: {
                    isArea: false
                },
                minLimit: 2,
                formatter: (val) => format(val, maskSlider())
            });
        }
        chart.on(`plot:click`, (ev) => {
            const records = this._chart.getSnapRecords({ x: ev.x, y: ev.y });
            this.clickItem.emit({ item: records[0]._origin, ev });
        });
        chart.on(`legend-item:click`, (ev) => {
            const item = ev?.target?.get('delegateObject').item;
            const id = item?.id;
            const line = chart.geometries.find(w => w.getAttribute('position').getFields()[1] === id);
            if (line) {
                line.changeVisible(!item.unchecked);
            }
        });
        this.ready.emit(chart);
        this.changeData();
        chart.render();
    }
    changeData() {
        const { _chart, height, padding, mask, titleMap, position, colorMap, borderWidth, maxAxis } = this;
        let data = [...this.data()];
        if (!_chart || data.length <= 0)
            return;
        const arrAxis = [...Array(maxAxis())].map((_, index) => index + 1);
        _chart.legend({
            position: position(),
            custom: true,
            items: arrAxis.map(id => {
                const key = `y${id}`;
                return {
                    id: key,
                    name: titleMap()[key],
                    value: key,
                    marker: { style: { fill: colorMap()[key] } }
                };
            })
        });
        // border
        _chart.geometries.forEach((v, idx) => {
            v.color(colorMap()[`y${idx + 1}`]).size(borderWidth());
        });
        _chart.height = height();
        _chart.padding = padding();
        // 转换成日期类型
        data = data
            .map(item => {
            item.time = toDate(item.time);
            item._time = +item.time;
            return item;
        })
            .sort((a, b) => a._time - b._time);
        const max = Math.max(...arrAxis.map(id => [...data].sort((a, b) => b[`y${id}`] - a[`y${id}`])[0][`y${id}`]));
        const scaleOptions = {};
        arrAxis.forEach(id => {
            const key = `y${id}`;
            scaleOptions[key] = {
                alias: titleMap()[key],
                max,
                min: 0
            };
        });
        _chart.scale({
            time: {
                type: 'time',
                mask: mask(),
                range: [0, 1]
            },
            ...scaleOptions
        });
        const initialRange = {
            start: data[0]._time,
            end: data[data.length - 1]._time
        };
        const filterData = data.filter(val => val._time >= initialRange.start && val._time <= initialRange.end);
        _chart.changeData(filterData);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: G2TimelineComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "22.1.7", type: G2TimelineComponent, isStandalone: true, selector: "g2-timeline", inputs: { title: { classPropertyName: "title", publicName: "title", isSignal: true, isRequired: false, transformFunction: null }, maxAxis: { classPropertyName: "maxAxis", publicName: "maxAxis", isSignal: true, isRequired: false, transformFunction: null }, data: { classPropertyName: "data", publicName: "data", isSignal: true, isRequired: false, transformFunction: null }, titleMap: { classPropertyName: "titleMap", publicName: "titleMap", isSignal: true, isRequired: false, transformFunction: null }, colorMap: { classPropertyName: "colorMap", publicName: "colorMap", isSignal: true, isRequired: false, transformFunction: null }, mask: { classPropertyName: "mask", publicName: "mask", isSignal: true, isRequired: false, transformFunction: null }, maskSlider: { classPropertyName: "maskSlider", publicName: "maskSlider", isSignal: true, isRequired: false, transformFunction: null }, position: { classPropertyName: "position", publicName: "position", isSignal: true, isRequired: false, transformFunction: null }, height: { classPropertyName: "height", publicName: "height", isSignal: true, isRequired: false, transformFunction: null }, padding: { classPropertyName: "padding", publicName: "padding", isSignal: true, isRequired: false, transformFunction: null }, borderWidth: { classPropertyName: "borderWidth", publicName: "borderWidth", isSignal: true, isRequired: false, transformFunction: null }, slider: { classPropertyName: "slider", publicName: "slider", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { clickItem: "clickItem" }, exportAs: ["g2Timeline"], usesInheritance: true, ngImport: i0, template: `
    <ng-container *nzStringTemplateOutlet="title()">
      <h4>{{ title() }}</h4>
    </ng-container>
    @if (!loaded()) {
      <nz-skeleton />
    }
    <div #container></div>
  `, isInline: true, dependencies: [{ kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "component", type: NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: G2TimelineComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'g2-timeline',
                    exportAs: 'g2Timeline',
                    template: `
    <ng-container *nzStringTemplateOutlet="title()">
      <h4>{{ title() }}</h4>
    </ng-container>
    @if (!loaded()) {
      <nz-skeleton />
    }
    <div #container></div>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    imports: [NzStringTemplateOutletDirective, NzSkeletonComponent]
                }]
        }], propDecorators: { title: [{ type: i0.Input, args: [{ isSignal: true, alias: "title", required: false }] }], maxAxis: [{ type: i0.Input, args: [{ isSignal: true, alias: "maxAxis", required: false }] }], data: [{ type: i0.Input, args: [{ isSignal: true, alias: "data", required: false }] }], titleMap: [{ type: i0.Input, args: [{ isSignal: true, alias: "titleMap", required: false }] }], colorMap: [{ type: i0.Input, args: [{ isSignal: true, alias: "colorMap", required: false }] }], mask: [{ type: i0.Input, args: [{ isSignal: true, alias: "mask", required: false }] }], maskSlider: [{ type: i0.Input, args: [{ isSignal: true, alias: "maskSlider", required: false }] }], position: [{ type: i0.Input, args: [{ isSignal: true, alias: "position", required: false }] }], height: [{ type: i0.Input, args: [{ isSignal: true, alias: "height", required: false }] }], padding: [{ type: i0.Input, args: [{ isSignal: true, alias: "padding", required: false }] }], borderWidth: [{ type: i0.Input, args: [{ isSignal: true, alias: "borderWidth", required: false }] }], slider: [{ type: i0.Input, args: [{ isSignal: true, alias: "slider", required: false }] }], clickItem: [{ type: i0.Output, args: ["clickItem"] }] } });

const COMPONENTS = [G2TimelineComponent];
class G2TimelineModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: G2TimelineModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "22.1.7", ngImport: i0, type: G2TimelineModule, imports: [CommonModule, NzOutletModule, NzSkeletonModule, G2TimelineComponent], exports: [G2TimelineComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: G2TimelineModule, imports: [CommonModule, NzOutletModule, NzSkeletonModule, COMPONENTS] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: G2TimelineModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, NzOutletModule, NzSkeletonModule, ...COMPONENTS],
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { G2TimelineComponent, G2TimelineModule };
//# sourceMappingURL=timeline.mjs.map
