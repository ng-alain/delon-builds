/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// tslint:disable:no-any
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, } from '@angular/core';
import { InputNumber } from '@delon/util';
export class G2TimelineData {
}
if (false) {
    /**
     * 非 `Date` 格式，自动使用 `new Date` 转换，因此，支持时间格式字符串、数字型时间戳
     * @type {?}
     */
    G2TimelineData.prototype.x;
    /**
     * 指标1数据
     * @type {?}
     */
    G2TimelineData.prototype.y1;
    /**
     * 指标2数据
     * @type {?}
     */
    G2TimelineData.prototype.y2;
    /* Skipping unhandled member: [key: string]: any;*/
}
export class G2TimelineComponent {
    constructor() {
        // #region fields
        this.delay = 0;
        this.data = [];
        this.colorMap = { y1: '#1890FF', y2: '#2FC25B' };
        this.mask = 'HH:mm';
        this.position = 'top';
        this.height = 400;
        this.padding = [60, 20, 40, 40];
        this.borderWidth = 2;
    }
    // #endregion
    /**
     * @return {?}
     */
    ngOnInit() {
        setTimeout(() => this.install(), this.delay);
    }
    /**
     * @return {?}
     */
    install() {
        const { node, sliderNode, height, padding, mask } = this;
        /** @type {?} */
        const chart = this.chart = new G2.Chart({
            container: node.nativeElement,
            forceFit: true,
            height,
            padding,
        });
        chart.axis('x', { title: false });
        chart.axis('y1', { title: false });
        chart.axis('y2', false);
        chart.line().position('x*y1');
        chart.line().position('x*y2');
        chart.render();
        /** @type {?} */
        const sliderPadding = Object.assign({}, [], padding);
        sliderPadding[0] = 0;
        /** @type {?} */
        const slider = this.slider = new Slider({
            container: sliderNode.nativeElement,
            width: 'auto',
            height: 26,
            padding: sliderPadding,
            scales: {
                x: {
                    type: 'time',
                    tickCount: 16,
                    mask,
                },
            },
            backgroundChart: {
                type: 'line',
            },
            xAxis: 'x',
            yAxis: 'y1',
            data: [],
        });
        slider.render();
        this.attachChart();
    }
    /**
     * @return {?}
     */
    attachChart() {
        const { chart, slider, height, padding, data, mask, titleMap, position, colorMap, borderWidth } = this;
        if (!chart)
            return;
        chart.legend({
            position,
            custom: true,
            clickable: false,
            items: [
                { value: titleMap.y1, fill: colorMap.y1 },
                { value: titleMap.y2, fill: colorMap.y2 },
            ],
        });
        // border
        chart.get('geoms').forEach((v, idx) => {
            v.color(colorMap[`y${idx + 1}`]).size(borderWidth);
        });
        data.filter(v => !(v.x instanceof Number)).forEach(v => {
            v.x = +new Date(v.x);
        });
        chart.set('height', height);
        chart.set('padding', padding);
        /** @type {?} */
        const MAX = 8;
        /** @type {?} */
        const begin = Math.ceil(data.length > MAX ? (data.length - MAX) / 2 : 0);
        /** @type {?} */
        const ds = new DataSet({
            state: {
                start: data[begin - 1].x,
                end: data[begin - 1 + MAX].x,
            },
        });
        /** @type {?} */
        const dv = ds.createView().source(data);
        dv.source(data).transform({
            type: 'filter',
            callback: (val) => {
                /** @type {?} */
                const time = +val.x;
                return time >= ds.state.start && time <= ds.state.end;
            },
        });
        /** @type {?} */
        let max;
        if (data[0] && data[0].y1 && data[0].y2) {
            max = Math.max(data.sort((a, b) => b.y1 - a.y1)[0].y1, data.sort((a, b) => b.y2 - a.y2)[0].y2);
        }
        chart.source(dv, {
            x: {
                type: 'timeCat',
                tickCount: MAX,
                mask,
                range: [0, 1],
            },
            y1: {
                alias: titleMap.y1,
                max,
                min: 0,
            },
            y2: {
                alias: titleMap.y2,
                max,
                min: 0,
            },
        });
        chart.repaint();
        slider.start = new Date(ds.state.start);
        slider.end = new Date(ds.state.end);
        slider.onChange = ({ startValue, endValue }) => {
            ds.setState('start', startValue);
            ds.setState('end', endValue);
        },
            slider.changeData(data);
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.attachChart();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.chart)
            this.chart.destroy();
        if (this.slider)
            this.slider.destroy();
    }
}
G2TimelineComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-timeline',
                template: "<ng-container *stringTemplateOutlet=\"title\"><h4>{{title}}</h4></ng-container>\n<div #container></div>\n<div #slider></div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
G2TimelineComponent.propDecorators = {
    node: [{ type: ViewChild, args: ['container',] }],
    sliderNode: [{ type: ViewChild, args: ['slider',] }],
    delay: [{ type: Input }],
    title: [{ type: Input }],
    data: [{ type: Input }],
    titleMap: [{ type: Input }],
    colorMap: [{ type: Input }],
    mask: [{ type: Input }],
    position: [{ type: Input }],
    height: [{ type: Input }],
    padding: [{ type: Input }],
    borderWidth: [{ type: Input }]
};
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], G2TimelineComponent.prototype, "delay", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], G2TimelineComponent.prototype, "height", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], G2TimelineComponent.prototype, "borderWidth", void 0);
if (false) {
    /** @type {?} */
    G2TimelineComponent.prototype.node;
    /** @type {?} */
    G2TimelineComponent.prototype.sliderNode;
    /** @type {?} */
    G2TimelineComponent.prototype.chart;
    /** @type {?} */
    G2TimelineComponent.prototype.slider;
    /** @type {?} */
    G2TimelineComponent.prototype.delay;
    /** @type {?} */
    G2TimelineComponent.prototype.title;
    /** @type {?} */
    G2TimelineComponent.prototype.data;
    /** @type {?} */
    G2TimelineComponent.prototype.titleMap;
    /** @type {?} */
    G2TimelineComponent.prototype.colorMap;
    /** @type {?} */
    G2TimelineComponent.prototype.mask;
    /** @type {?} */
    G2TimelineComponent.prototype.position;
    /** @type {?} */
    G2TimelineComponent.prototype.height;
    /** @type {?} */
    G2TimelineComponent.prototype.padding;
    /** @type {?} */
    G2TimelineComponent.prototype.borderWidth;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L3RpbWVsaW5lLyIsInNvdXJjZXMiOlsidGltZWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBS0wsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFNMUMsTUFBTSxPQUFPLGNBQWM7Q0FRMUI7Ozs7OztJQU5DLDJCQUEwQjs7Ozs7SUFFMUIsNEJBQVc7Ozs7O0lBRVgsNEJBQVc7OztBQVNiLE1BQU0sT0FBTyxtQkFBbUI7SUFMaEM7O1FBYzBCLFVBQUssR0FBRyxDQUFDLENBQUM7UUFFekIsU0FBSSxHQUFxQixFQUFFLENBQUM7UUFFNUIsYUFBUSxHQUErQixFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDO1FBQ3hFLFNBQUksR0FBVyxPQUFPLENBQUM7UUFDdkIsYUFBUSxHQUF3QyxLQUFLLENBQUM7UUFDdkMsV0FBTSxHQUFHLEdBQUcsQ0FBQztRQUM1QixZQUFPLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0QixnQkFBVyxHQUFHLENBQUMsQ0FBQztJQTJJMUMsQ0FBQzs7Ozs7SUF2SUMsUUFBUTtRQUNOLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7SUFFTyxPQUFPO2NBQ1AsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSTs7Y0FDbEQsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ3RDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUM3QixRQUFRLEVBQUUsSUFBSTtZQUNkLE1BQU07WUFDTixPQUFPO1NBQ1IsQ0FBQztRQUNGLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDbEMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNuQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlCLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFOUIsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDOztjQUVULGFBQWEscUJBQVEsRUFBRSxFQUFLLE9BQU8sQ0FBRTtRQUMzQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztjQUNmLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDO1lBQ3RDLFNBQVMsRUFBRSxVQUFVLENBQUMsYUFBYTtZQUNuQyxLQUFLLEVBQUUsTUFBTTtZQUNiLE1BQU0sRUFBRSxFQUFFO1lBQ1YsT0FBTyxFQUFFLGFBQWE7WUFDdEIsTUFBTSxFQUFFO2dCQUNOLENBQUMsRUFBRTtvQkFDRCxJQUFJLEVBQUUsTUFBTTtvQkFDWixTQUFTLEVBQUUsRUFBRTtvQkFDYixJQUFJO2lCQUNMO2FBQ0Y7WUFDRCxlQUFlLEVBQUU7Z0JBQ2YsSUFBSSxFQUFFLE1BQU07YUFDYjtZQUNELEtBQUssRUFBRSxHQUFHO1lBQ1YsS0FBSyxFQUFFLElBQUk7WUFDWCxJQUFJLEVBQUUsRUFBRTtTQUNULENBQUM7UUFFRixNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFaEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFTyxXQUFXO2NBQ1gsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsR0FBRyxJQUFJO1FBQ3RHLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBUTtRQUVwQixLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ1gsUUFBUTtZQUNSLE1BQU0sRUFBRSxJQUFJO1lBQ1osU0FBUyxFQUFFLEtBQUs7WUFDaEIsS0FBSyxFQUFFO2dCQUNMLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3pDLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUU7YUFDMUM7U0FDRixDQUFDLENBQUM7UUFFSCxTQUFTO1FBQ1QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDcEMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNyRCxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBRUgsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDNUIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7O2NBRXhCLEdBQUcsR0FBRyxDQUFDOztjQUNQLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O2NBRWxFLEVBQUUsR0FBRyxJQUFJLE9BQU8sQ0FBQztZQUNyQixLQUFLLEVBQUU7Z0JBQ0wsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDN0I7U0FDRixDQUFDOztjQUNJLEVBQUUsR0FBRyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN2QyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUN4QixJQUFJLEVBQUUsUUFBUTtZQUNkLFFBQVEsRUFBRSxDQUFDLEdBQW1CLEVBQUUsRUFBRTs7c0JBQzFCLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixPQUFPLElBQUksSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDeEQsQ0FBQztTQUNGLENBQUMsQ0FBQzs7WUFDQyxHQUFHO1FBQ1AsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ3ZDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQ3ZDLENBQUM7U0FDSDtRQUNELEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFO1lBQ2YsQ0FBQyxFQUFFO2dCQUNELElBQUksRUFBRSxTQUFTO2dCQUNmLFNBQVMsRUFBRSxHQUFHO2dCQUNkLElBQUk7Z0JBQ0osS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNkO1lBQ0QsRUFBRSxFQUFFO2dCQUNGLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBRTtnQkFDbEIsR0FBRztnQkFDSCxHQUFHLEVBQUUsQ0FBQzthQUNQO1lBQ0QsRUFBRSxFQUFFO2dCQUNGLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBRTtnQkFDbEIsR0FBRztnQkFDSCxHQUFHLEVBQUUsQ0FBQzthQUNQO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWhCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEMsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7WUFDN0MsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDakMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDL0IsQ0FBQztZQUNELE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxLQUFLO1lBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNyQyxJQUFJLElBQUksQ0FBQyxNQUFNO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN6QyxDQUFDOzs7WUFqS0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QiwwSUFBd0M7Z0JBQ3hDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7bUJBR0UsU0FBUyxTQUFDLFdBQVc7eUJBQ3JCLFNBQVMsU0FBQyxRQUFRO29CQU1sQixLQUFLO29CQUNMLEtBQUs7bUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7bUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3FCQUNMLEtBQUs7c0JBQ0wsS0FBSzswQkFDTCxLQUFLOztBQVRrQjtJQUFkLFdBQVcsRUFBRTs7a0RBQVc7QUFPVjtJQUFkLFdBQVcsRUFBRTs7bURBQWM7QUFFYjtJQUFkLFdBQVcsRUFBRTs7d0RBQWlCOzs7SUFoQnhDLG1DQUFpRDs7SUFDakQseUNBQW9EOztJQUNwRCxvQ0FBbUI7O0lBQ25CLHFDQUFvQjs7SUFJcEIsb0NBQWtDOztJQUNsQyxvQ0FBMkM7O0lBQzNDLG1DQUFxQzs7SUFDckMsdUNBQThDOztJQUM5Qyx1Q0FBaUY7O0lBQ2pGLG1DQUFnQzs7SUFDaEMsdUNBQStEOztJQUMvRCxxQ0FBcUM7O0lBQ3JDLHNDQUE4Qzs7SUFDOUMsMENBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuZGVjbGFyZSB2YXIgRzI6IGFueTtcbmRlY2xhcmUgdmFyIERhdGFTZXQ6IGFueTtcbmRlY2xhcmUgdmFyIFNsaWRlcjogYW55O1xuXG5leHBvcnQgY2xhc3MgRzJUaW1lbGluZURhdGEge1xuICAvKiog6Z2eIGBEYXRlYCDmoLzlvI/vvIzoh6rliqjkvb/nlKggYG5ldyBEYXRlYCDovazmjaLvvIzlm6DmraTvvIzmlK/mjIHml7bpl7TmoLzlvI/lrZfnrKbkuLLjgIHmlbDlrZflnovml7bpl7TmiLMgKi9cbiAgeDogRGF0ZSB8IHN0cmluZyB8IG51bWJlcjtcbiAgLyoqIOaMh+aghzHmlbDmja4gKi9cbiAgeTE6IG51bWJlcjtcbiAgLyoqIOaMh+aghzLmlbDmja4gKi9cbiAgeTI6IG51bWJlcjtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi10aW1lbGluZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lbGluZS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBHMlRpbWVsaW5lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG5cbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJykgcHJpdmF0ZSBub2RlOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdzbGlkZXInKSBwcml2YXRlIHNsaWRlck5vZGU6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgY2hhcnQ6IGFueTtcbiAgcHJpdmF0ZSBzbGlkZXI6IGFueTtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGRlbGF5ID0gMDtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBkYXRhOiBHMlRpbWVsaW5lRGF0YVtdID0gW107XG4gIEBJbnB1dCgpIHRpdGxlTWFwOiB7IHkxOiBzdHJpbmc7IHkyOiBzdHJpbmcgfTtcbiAgQElucHV0KCkgY29sb3JNYXA6IHsgeTE6IHN0cmluZzsgeTI6IHN0cmluZyB9ID0geyB5MTogJyMxODkwRkYnLCB5MjogJyMyRkMyNUInIH07XG4gIEBJbnB1dCgpIG1hc2s6IHN0cmluZyA9ICdISDptbSc7XG4gIEBJbnB1dCgpIHBvc2l0aW9uOiAndG9wJyB8ICdyaWdodCcgfCAnYm90dG9tJyB8ICdsZWZ0JyA9ICd0b3AnO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQgPSA0MDA7XG4gIEBJbnB1dCgpIHBhZGRpbmc6IG51bWJlcltdID0gWzYwLCAyMCwgNDAsIDQwXTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgYm9yZGVyV2lkdGggPSAyO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpLCB0aGlzLmRlbGF5KTtcbiAgfVxuXG4gIHByaXZhdGUgaW5zdGFsbCgpIHtcbiAgICBjb25zdCB7IG5vZGUsIHNsaWRlck5vZGUsIGhlaWdodCwgcGFkZGluZywgbWFzayB9ID0gdGhpcztcbiAgICBjb25zdCBjaGFydCA9IHRoaXMuY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xuICAgICAgY29udGFpbmVyOiBub2RlLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBmb3JjZUZpdDogdHJ1ZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIHBhZGRpbmcsXG4gICAgfSk7XG4gICAgY2hhcnQuYXhpcygneCcsIHsgdGl0bGU6IGZhbHNlIH0pO1xuICAgIGNoYXJ0LmF4aXMoJ3kxJywgeyB0aXRsZTogZmFsc2UgfSk7XG4gICAgY2hhcnQuYXhpcygneTInLCBmYWxzZSk7XG5cbiAgICBjaGFydC5saW5lKCkucG9zaXRpb24oJ3gqeTEnKTtcbiAgICBjaGFydC5saW5lKCkucG9zaXRpb24oJ3gqeTInKTtcblxuICAgIGNoYXJ0LnJlbmRlcigpO1xuXG4gICAgY29uc3Qgc2xpZGVyUGFkZGluZyA9IHsgLi4uW10sIC4uLnBhZGRpbmcgfTtcbiAgICBzbGlkZXJQYWRkaW5nWzBdID0gMDtcbiAgICBjb25zdCBzbGlkZXIgPSB0aGlzLnNsaWRlciA9IG5ldyBTbGlkZXIoe1xuICAgICAgY29udGFpbmVyOiBzbGlkZXJOb2RlLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB3aWR0aDogJ2F1dG8nLFxuICAgICAgaGVpZ2h0OiAyNixcbiAgICAgIHBhZGRpbmc6IHNsaWRlclBhZGRpbmcsXG4gICAgICBzY2FsZXM6IHtcbiAgICAgICAgeDoge1xuICAgICAgICAgIHR5cGU6ICd0aW1lJyxcbiAgICAgICAgICB0aWNrQ291bnQ6IDE2LFxuICAgICAgICAgIG1hc2ssXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYmFja2dyb3VuZENoYXJ0OiB7XG4gICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgIH0sXG4gICAgICB4QXhpczogJ3gnLFxuICAgICAgeUF4aXM6ICd5MScsXG4gICAgICBkYXRhOiBbXSxcbiAgICB9KTtcblxuICAgIHNsaWRlci5yZW5kZXIoKTtcblxuICAgIHRoaXMuYXR0YWNoQ2hhcnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoQ2hhcnQoKSB7XG4gICAgY29uc3QgeyBjaGFydCwgc2xpZGVyLCBoZWlnaHQsIHBhZGRpbmcsIGRhdGEsIG1hc2ssIHRpdGxlTWFwLCBwb3NpdGlvbiwgY29sb3JNYXAsIGJvcmRlcldpZHRoIH0gPSB0aGlzO1xuICAgIGlmICghY2hhcnQpIHJldHVybiA7XG5cbiAgICBjaGFydC5sZWdlbmQoe1xuICAgICAgcG9zaXRpb24sXG4gICAgICBjdXN0b206IHRydWUsXG4gICAgICBjbGlja2FibGU6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB2YWx1ZTogdGl0bGVNYXAueTEsIGZpbGw6IGNvbG9yTWFwLnkxIH0sXG4gICAgICAgIHsgdmFsdWU6IHRpdGxlTWFwLnkyLCBmaWxsOiBjb2xvck1hcC55MiB9LFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIC8vIGJvcmRlclxuICAgIGNoYXJ0LmdldCgnZ2VvbXMnKS5mb3JFYWNoKCh2LCBpZHgpID0+IHtcbiAgICAgIHYuY29sb3IoY29sb3JNYXBbYHkke2lkeCArIDF9YF0pLnNpemUoYm9yZGVyV2lkdGgpO1xuICAgIH0pO1xuXG4gICAgZGF0YS5maWx0ZXIodiA9PiAhKHYueCBpbnN0YW5jZW9mIE51bWJlcikpLmZvckVhY2godiA9PiB7XG4gICAgICB2LnggPSArbmV3IERhdGUodi54KTtcbiAgICB9KTtcblxuICAgIGNoYXJ0LnNldCgnaGVpZ2h0JywgaGVpZ2h0KTtcbiAgICBjaGFydC5zZXQoJ3BhZGRpbmcnLCBwYWRkaW5nKTtcblxuICAgIGNvbnN0IE1BWCA9IDg7XG4gICAgY29uc3QgYmVnaW4gPSBNYXRoLmNlaWwoZGF0YS5sZW5ndGggPiBNQVggPyAoZGF0YS5sZW5ndGggLSBNQVgpIC8gMiA6IDApO1xuXG4gICAgY29uc3QgZHMgPSBuZXcgRGF0YVNldCh7XG4gICAgICBzdGF0ZToge1xuICAgICAgICBzdGFydDogZGF0YVtiZWdpbiAtIDFdLngsXG4gICAgICAgIGVuZDogZGF0YVtiZWdpbiAtIDEgKyBNQVhdLngsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IGR2ID0gZHMuY3JlYXRlVmlldygpLnNvdXJjZShkYXRhKTtcbiAgICBkdi5zb3VyY2UoZGF0YSkudHJhbnNmb3JtKHtcbiAgICAgIHR5cGU6ICdmaWx0ZXInLFxuICAgICAgY2FsbGJhY2s6ICh2YWw6IEcyVGltZWxpbmVEYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpbWUgPSArdmFsLng7IC8vICHms6jmhI/vvJrml7bpl7TmoLzlvI/vvIzlu7rorq7ovazmjaLkuLrml7bpl7TmiLPov5vooYzmr5TovoNcbiAgICAgICAgcmV0dXJuIHRpbWUgPj0gZHMuc3RhdGUuc3RhcnQgJiYgdGltZSA8PSBkcy5zdGF0ZS5lbmQ7XG4gICAgICB9LFxuICAgIH0pO1xuICAgIGxldCBtYXg7XG4gICAgaWYgKGRhdGFbMF0gJiYgZGF0YVswXS55MSAmJiBkYXRhWzBdLnkyKSB7XG4gICAgICBtYXggPSBNYXRoLm1heChcbiAgICAgICAgZGF0YS5zb3J0KChhLCBiKSA9PiBiLnkxIC0gYS55MSlbMF0ueTEsXG4gICAgICAgIGRhdGEuc29ydCgoYSwgYikgPT4gYi55MiAtIGEueTIpWzBdLnkyLFxuICAgICAgKTtcbiAgICB9XG4gICAgY2hhcnQuc291cmNlKGR2LCB7XG4gICAgICB4OiB7XG4gICAgICAgIHR5cGU6ICd0aW1lQ2F0JyxcbiAgICAgICAgdGlja0NvdW50OiBNQVgsXG4gICAgICAgIG1hc2ssXG4gICAgICAgIHJhbmdlOiBbMCwgMV0sXG4gICAgICB9LFxuICAgICAgeTE6IHtcbiAgICAgICAgYWxpYXM6IHRpdGxlTWFwLnkxLFxuICAgICAgICBtYXgsXG4gICAgICAgIG1pbjogMCxcbiAgICAgIH0sXG4gICAgICB5Mjoge1xuICAgICAgICBhbGlhczogdGl0bGVNYXAueTIsXG4gICAgICAgIG1heCxcbiAgICAgICAgbWluOiAwLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjaGFydC5yZXBhaW50KCk7XG5cbiAgICBzbGlkZXIuc3RhcnQgPSBuZXcgRGF0ZShkcy5zdGF0ZS5zdGFydCk7XG4gICAgc2xpZGVyLmVuZCA9IG5ldyBEYXRlKGRzLnN0YXRlLmVuZCk7XG4gICAgc2xpZGVyLm9uQ2hhbmdlID0gKHsgc3RhcnRWYWx1ZSwgZW5kVmFsdWUgfSkgPT4ge1xuICAgICAgZHMuc2V0U3RhdGUoJ3N0YXJ0Jywgc3RhcnRWYWx1ZSk7XG4gICAgICBkcy5zZXRTdGF0ZSgnZW5kJywgZW5kVmFsdWUpO1xuICAgIH0sXG4gICAgc2xpZGVyLmNoYW5nZURhdGEoZGF0YSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmF0dGFjaENoYXJ0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jaGFydCkgdGhpcy5jaGFydC5kZXN0cm95KCk7XG4gICAgaWYgKHRoaXMuc2xpZGVyKSB0aGlzLnNsaWRlci5kZXN0cm95KCk7XG4gIH1cbn1cbiJdfQ==