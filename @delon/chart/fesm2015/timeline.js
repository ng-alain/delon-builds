import { __decorate, __metadata } from 'tslib';
import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, NgModule } from '@angular/core';
import { G2BaseComponent } from '@delon/chart/core';
import { toDate } from '@delon/util/date-time';
import { InputNumber, InputBoolean } from '@delon/util/decorator';
import { format } from 'date-fns';
import { CommonModule } from '@angular/common';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

class G2TimelineComponent extends G2BaseComponent {
    constructor() {
        super(...arguments);
        this.maxAxis = 2;
        this.data = [];
        this.colorMap = { y1: '#5B8FF9', y2: '#5AD8A6', y3: '#5D7092', y4: '#F6BD16', y5: '#E86452' };
        this.mask = 'HH:mm';
        this.maskSlider = 'HH:mm';
        this.position = 'top';
        this.height = 450;
        this.padding = [40, 8, 64, 40];
        this.borderWidth = 2;
        this.slider = true;
        this.clickItem = new EventEmitter();
    }
    // #endregion
    onChanges(changes) {
        const tm = changes.titleMap;
        if (tm && !tm.firstChange && tm.currentValue !== tm.previousValue) {
            this.destroyChart();
            this._install();
        }
    }
    _install() {
        const { node, height, padding, slider, maxAxis, theme, maskSlider } = this;
        const chart = (this._chart = new window.G2.Chart({
            container: node.nativeElement,
            autoFit: true,
            height,
            padding,
            theme,
        }));
        chart.axis('time', { title: null });
        chart.axis('y1', { title: null });
        for (let i = 2; i <= maxAxis; i++) {
            chart.axis(`y${i}`, false);
        }
        chart.line().position('time*y1');
        for (let i = 2; i <= maxAxis; i++) {
            chart.line().position(`time*y${i}`);
        }
        chart.tooltip({
            showCrosshairs: true,
            shared: true,
        });
        const sliderPadding = Object.assign(Object.assign({}, []), padding);
        sliderPadding[0] = 0;
        if (slider) {
            chart.option('slider', {
                height: 26,
                start: 0,
                end: 1,
                trendCfg: {
                    isArea: false,
                },
                minLimit: 2,
                formatter: (val) => format(val, maskSlider),
            });
        }
        chart.on(`plot:click`, (ev) => {
            const records = this._chart.getSnapRecords({ x: ev.x, y: ev.y });
            this.ngZone.run(() => this.clickItem.emit({ item: records[0]._origin, ev }));
        });
        chart.on(`legend-item:click`, (ev) => {
            var _a;
            const item = (_a = ev === null || ev === void 0 ? void 0 : ev.target) === null || _a === void 0 ? void 0 : _a.get('delegateObject').item;
            const id = item === null || item === void 0 ? void 0 : item.id;
            const line = chart.geometries.find(w => w.getAttribute('position').getFields()[1] === id);
            if (line) {
                line.changeVisible(!item.unchecked);
            }
        });
    }
    install() {
        this._install();
        this.attachChart();
    }
    attachChart() {
        const { _chart, height, padding, mask, titleMap, position, colorMap, borderWidth, maxAxis } = this;
        let data = [...this.data];
        if (!_chart || !data || data.length <= 0)
            return;
        const arrAxis = [...Array(maxAxis)].map((_, index) => index + 1);
        _chart.legend({
            position,
            custom: true,
            items: arrAxis.map(id => {
                const key = `y${id}`;
                return { id: key, name: titleMap[key], value: key, marker: { style: { fill: colorMap[key] } } };
            }),
        });
        // border
        _chart.geometries.forEach((v, idx) => {
            v.color(colorMap[`y${idx + 1}`]).size(borderWidth);
        });
        _chart.height = height;
        _chart.padding = padding;
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
                alias: titleMap[key],
                max,
                min: 0,
            };
        });
        _chart.scale(Object.assign({ time: {
                type: 'time',
                mask,
                range: [0, 1],
            } }, scaleOptions));
        const initialRange = {
            start: data[0]._time,
            end: data[data.length - 1]._time,
        };
        const filterData = data.filter(val => val._time >= initialRange.start && val._time <= initialRange.end);
        _chart.changeData(filterData);
        _chart.render(true);
    }
}
G2TimelineComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-timeline',
                exportAs: 'g2Timeline',
                template: `
    <ng-container *nzStringTemplateOutlet="title">
      <h4>{{ title }}</h4>
    </ng-container>
    <nz-skeleton *ngIf="!loaded"></nz-skeleton>
    <div #container></div>
  `,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
G2TimelineComponent.propDecorators = {
    title: [{ type: Input }],
    maxAxis: [{ type: Input }],
    data: [{ type: Input }],
    titleMap: [{ type: Input }],
    colorMap: [{ type: Input }],
    mask: [{ type: Input }],
    maskSlider: [{ type: Input }],
    position: [{ type: Input }],
    height: [{ type: Input }],
    padding: [{ type: Input }],
    borderWidth: [{ type: Input }],
    slider: [{ type: Input }],
    clickItem: [{ type: Output }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2TimelineComponent.prototype, "maxAxis", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2TimelineComponent.prototype, "height", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2TimelineComponent.prototype, "borderWidth", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2TimelineComponent.prototype, "slider", void 0);

const COMPONENTS = [G2TimelineComponent];
class G2TimelineModule {
}
G2TimelineModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, NzOutletModule, NzSkeletonModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { G2TimelineComponent, G2TimelineModule };
//# sourceMappingURL=timeline.js.map
