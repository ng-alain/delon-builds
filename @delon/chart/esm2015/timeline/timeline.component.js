/**
 * @fileoverview added by tsickle
 * Generated from: timeline.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, ViewChild, ViewEncapsulation, } from '@angular/core';
import { Chart } from '@antv/g2';
import { AlainConfigService, deprecation10, InputBoolean, InputNumber, toDate } from '@delon/util';
/**
 * @record
 */
export function G2TimelineData() { }
if (false) {
    /**
     * 时间值
     * @deprecated Use `time` instead
     * @type {?|undefined}
     */
    G2TimelineData.prototype.x;
    /**
     * 时间值
     * @type {?|undefined}
     */
    G2TimelineData.prototype.time;
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
    /**
     * 指标3数据
     * @type {?|undefined}
     */
    G2TimelineData.prototype.y3;
    /**
     * 指标4数据
     * @type {?|undefined}
     */
    G2TimelineData.prototype.y4;
    /**
     * 指标5数据
     * @type {?|undefined}
     */
    G2TimelineData.prototype.y5;
    /* Skipping unhandled member: [key: string]: any;*/
}
/**
 * @record
 */
export function G2TimelineMap() { }
if (false) {
    /**
     * 指标1
     * @type {?}
     */
    G2TimelineMap.prototype.y1;
    /**
     * 指标
     * @type {?}
     */
    G2TimelineMap.prototype.y2;
    /**
     * 指标3
     * @type {?|undefined}
     */
    G2TimelineMap.prototype.y3;
    /**
     * 指标4
     * @type {?|undefined}
     */
    G2TimelineMap.prototype.y4;
    /**
     * 指标5
     * @type {?|undefined}
     */
    G2TimelineMap.prototype.y5;
    /* Skipping unhandled member: [key: string]: string | undefined;*/
}
export class G2TimelineComponent {
    // #endregion
    /**
     * @param {?} ngZone
     * @param {?} configSrv
     */
    constructor(ngZone, configSrv) {
        this.ngZone = ngZone;
        // #region fields
        this.delay = 0;
        this.maxAxis = 2;
        this.data = [];
        this.colorMap = { y1: '#5B8FF9', y2: '#5AD8A6', y3: '#5D7092', y4: '#F6BD16', y5: '#E86452' };
        this.mask = 'HH:mm';
        this.position = 'top';
        this.height = 450;
        this.padding = [40, 8, 64, 40];
        this.borderWidth = 2;
        this.slider = true;
        configSrv.attachKey(this, 'chart', 'theme');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => setTimeout((/**
         * @return {?}
         */
        () => this.install()), this.delay)));
    }
    /**
     * @private
     * @return {?}
     */
    install() {
        const { node, height, padding, slider, maxAxis, theme } = this;
        /** @type {?} */
        const chart = (this.chart = new Chart({
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
        /** @type {?} */
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
            });
        }
        this.attachChart();
    }
    /**
     * @private
     * @return {?}
     */
    attachChart() {
        const { chart, height, padding, mask, titleMap, position, colorMap, borderWidth, maxAxis } = this;
        /** @type {?} */
        let data = [...this.data];
        if (!chart || !data || data.length <= 0)
            return;
        /** @type {?} */
        const arrAxis = [...Array(maxAxis)].map((/**
         * @param {?} _
         * @param {?} index
         * @return {?}
         */
        (_, index) => index + 1));
        chart.legend({
            position,
            custom: true,
            items: arrAxis.map((/**
             * @param {?} id
             * @return {?}
             */
            id => {
                /** @type {?} */
                const key = `y${id}`;
                return (/** @type {?} */ ({ name: titleMap[key], value: titleMap[key], marker: { style: { fill: colorMap[key] } } }));
            })),
        });
        // border
        chart.geometries.forEach((/**
         * @param {?} v
         * @param {?} idx
         * @return {?}
         */
        (v, idx) => {
            v.color(((/** @type {?} */ (colorMap)))[`y${idx + 1}`]).size(borderWidth);
        }));
        chart.height = height;
        chart.padding = padding;
        // TODO: compatible
        if (data.find((/**
         * @param {?} w
         * @return {?}
         */
        w => !!w.x)) != null) {
            deprecation10('g2-timeline', 'x', 'time');
            data.forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                item.time = new Date((/** @type {?} */ (item.x)));
            }));
        }
        // 转换成日期类型
        data = data
            .map((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            item.time = toDate((/** @type {?} */ (item.time)));
            item._time = +item.time;
            return item;
        }))
            .sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => a._time - b._time));
        /** @type {?} */
        const max = Math.max(...arrAxis.map((/**
         * @param {?} id
         * @return {?}
         */
        id => [...data].sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => b[`y${id}`] - a[`y${id}`]))[0][`y${id}`])));
        /** @type {?} */
        const scaleOptions = {};
        arrAxis.forEach((/**
         * @param {?} id
         * @return {?}
         */
        id => {
            /** @type {?} */
            const key = `y${id}`;
            scaleOptions[key] = {
                alias: titleMap[key],
                max,
                min: 0,
            };
        }));
        chart.scale(Object.assign({ time: {
                type: 'time',
                mask,
                range: [0, 1],
            } }, scaleOptions));
        /** @type {?} */
        const initialRange = {
            start: data[0]._time,
            end: data[data.length - 1]._time,
        };
        /** @type {?} */
        const filterData = data.filter((/**
         * @param {?} val
         * @return {?}
         */
        val => val._time >= initialRange.start && val._time <= initialRange.end));
        chart.changeData(filterData);
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => this.attachChart()));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.chart) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => this.chart.destroy()));
        }
    }
}
G2TimelineComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-timeline',
                exportAs: 'g2Timeline',
                template: "<ng-container *nzStringTemplateOutlet=\"title\">\n  <h4>{{title}}</h4>\n</ng-container>\n<div #container></div>\n",
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
G2TimelineComponent.ctorParameters = () => [
    { type: NgZone },
    { type: AlainConfigService }
];
G2TimelineComponent.propDecorators = {
    node: [{ type: ViewChild, args: ['container', { static: false },] }],
    delay: [{ type: Input }],
    title: [{ type: Input }],
    maxAxis: [{ type: Input }],
    data: [{ type: Input }],
    titleMap: [{ type: Input }],
    colorMap: [{ type: Input }],
    mask: [{ type: Input }],
    position: [{ type: Input }],
    height: [{ type: Input }],
    padding: [{ type: Input }],
    borderWidth: [{ type: Input }],
    slider: [{ type: Input }],
    theme: [{ type: Input }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2TimelineComponent.prototype, "delay", void 0);
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    G2TimelineComponent.prototype.node;
    /**
     * @type {?}
     * @private
     */
    G2TimelineComponent.prototype.chart;
    /** @type {?} */
    G2TimelineComponent.prototype.delay;
    /** @type {?} */
    G2TimelineComponent.prototype.title;
    /** @type {?} */
    G2TimelineComponent.prototype.maxAxis;
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
    /** @type {?} */
    G2TimelineComponent.prototype.slider;
    /** @type {?} */
    G2TimelineComponent.prototype.theme;
    /**
     * @type {?}
     * @private
     */
    G2TimelineComponent.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L3RpbWVsaW5lLyIsInNvdXJjZXMiOlsidGltZWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUtOLFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUdqQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7O0FBR25HLG9DQXFCQzs7Ozs7OztJQWhCQywyQkFBVzs7Ozs7SUFJWCw4QkFBYzs7Ozs7SUFFZCw0QkFBVzs7Ozs7SUFFWCw0QkFBVzs7Ozs7SUFFWCw0QkFBWTs7Ozs7SUFFWiw0QkFBWTs7Ozs7SUFFWiw0QkFBWTs7Ozs7O0FBSWQsbUNBYUM7Ozs7OztJQVhDLDJCQUFXOzs7OztJQUVYLDJCQUFXOzs7OztJQUVYLDJCQUFZOzs7OztJQUVaLDJCQUFZOzs7OztJQUVaLDJCQUFZOzs7QUFhZCxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7SUFzQjlCLFlBQW9CLE1BQWMsRUFBRSxTQUE2QjtRQUE3QyxXQUFNLEdBQU4sTUFBTSxDQUFROztRQWhCVixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRVYsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUMzQixTQUFJLEdBQXFCLEVBQUUsQ0FBQztRQUU1QixhQUFRLEdBQWtCLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUM7UUFDeEcsU0FBSSxHQUFXLE9BQU8sQ0FBQztRQUN2QixhQUFRLEdBQXdDLEtBQUssQ0FBQztRQUN2QyxXQUFNLEdBQUcsR0FBRyxDQUFDO1FBQzVCLFlBQU8sR0FBYSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3JCLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsV0FBTSxHQUFHLElBQUksQ0FBQztRQU1yQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQjs7O1FBQUMsR0FBRyxFQUFFLENBQUMsVUFBVTs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDO0lBQ3BGLENBQUM7Ozs7O0lBRU8sT0FBTztjQUNQLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJOztjQUN4RCxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDO1lBQ3BDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUM3QixPQUFPLEVBQUUsSUFBSTtZQUNiLE1BQU07WUFDTixPQUFPO1lBQ1AsS0FBSztTQUNOLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDcEMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNsQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM1QjtRQUVELEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNyQztRQUVELEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDWixjQUFjLEVBQUUsSUFBSTtZQUNwQixNQUFNLEVBQUUsSUFBSTtTQUNiLENBQUMsQ0FBQzs7Y0FFRyxhQUFhLG1DQUFRLEVBQUUsR0FBSyxPQUFPLENBQUU7UUFDM0MsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLE1BQU0sRUFBRTtZQUNWLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO2dCQUNyQixNQUFNLEVBQUUsRUFBRTtnQkFDVixLQUFLLEVBQUUsQ0FBQztnQkFDUixHQUFHLEVBQUUsQ0FBQztnQkFDTixRQUFRLEVBQUU7b0JBQ1IsTUFBTSxFQUFFLEtBQUs7aUJBQ2Q7Z0JBQ0QsUUFBUSxFQUFFLENBQUM7YUFHWixDQUFDLENBQUM7U0FDSjtRQUVELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVPLFdBQVc7Y0FDWCxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLEdBQUcsSUFBSTs7WUFDN0YsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDO1lBQUUsT0FBTzs7Y0FFMUMsT0FBTyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHOzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBQztRQUVoRSxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ1gsUUFBUTtZQUNSLE1BQU0sRUFBRSxJQUFJO1lBQ1osS0FBSyxFQUFFLE9BQU8sQ0FBQyxHQUFHOzs7O1lBQUMsRUFBRSxDQUFDLEVBQUU7O3NCQUNoQixHQUFHLEdBQUcsSUFBSSxFQUFFLEVBQUU7Z0JBQ3BCLE9BQU8sbUJBQUEsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBYyxDQUFDO1lBQ2pILENBQUMsRUFBQztTQUNILENBQUMsQ0FBQztRQUVILFNBQVM7UUFDVCxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBVyxFQUFFLEVBQUU7WUFDMUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLG1CQUFBLFFBQVEsRUFBYSxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNwRSxDQUFDLEVBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRXhCLG1CQUFtQjtRQUNuQixJQUFJLElBQUksQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLElBQUksRUFBRTtZQUNqQyxhQUFhLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsT0FBTzs7OztZQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLG1CQUFBLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQ2hDLENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFDRCxVQUFVO1FBQ1YsSUFBSSxHQUFHLElBQUk7YUFDUixHQUFHOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxtQkFBQSxJQUFJLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN4QixPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsRUFBQzthQUNELElBQUk7Ozs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUMsQ0FBQzs7Y0FFL0IsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRzs7OztRQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUk7Ozs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUMsQ0FBQzs7Y0FDdEcsWUFBWSxHQUFnQyxFQUFFO1FBQ3BELE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsRUFBRSxDQUFDLEVBQUU7O2tCQUNiLEdBQUcsR0FBRyxJQUFJLEVBQUUsRUFBRTtZQUNwQixZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUc7Z0JBQ2xCLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDO2dCQUNwQixHQUFHO2dCQUNILEdBQUcsRUFBRSxDQUFDO2FBQ1AsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLEtBQUssaUJBQ1QsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUk7Z0JBQ0osS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNkLElBQ0UsWUFBWSxFQUNmLENBQUM7O2NBRUcsWUFBWSxHQUFHO1lBQ25CLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSztZQUNwQixHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSztTQUNqQzs7Y0FDSyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU07Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksWUFBWSxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsS0FBSyxJQUFJLFlBQVksQ0FBQyxHQUFHLEVBQUM7UUFDdkcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUMsQ0FBQztJQUMxRCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCOzs7WUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFDLENBQUM7U0FDM0Q7SUFDSCxDQUFDOzs7WUE1SkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsNkhBQXdDO2dCQUN4QyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7WUEzREMsTUFBTTtZQVdDLGtCQUFrQjs7O21CQWtEeEIsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7b0JBS3hDLEtBQUs7b0JBQ0wsS0FBSztzQkFDTCxLQUFLO21CQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO21CQUNMLEtBQUs7dUJBQ0wsS0FBSztxQkFDTCxLQUFLO3NCQUNMLEtBQUs7MEJBQ0wsS0FBSztxQkFDTCxLQUFLO29CQUNMLEtBQUs7O0FBWmtCO0lBQWQsV0FBVyxFQUFFOztrREFBVztBQUVWO0lBQWQsV0FBVyxFQUFFOztvREFBYTtBQU1aO0lBQWQsV0FBVyxFQUFFOzttREFBYztBQUViO0lBQWQsV0FBVyxFQUFFOzt3REFBaUI7QUFDZjtJQUFmLFlBQVksRUFBRTs7bURBQWU7Ozs7OztJQWhCdkMsbUNBQW9FOzs7OztJQUNwRSxvQ0FBcUI7O0lBSXJCLG9DQUFrQzs7SUFDbEMsb0NBQTJDOztJQUMzQyxzQ0FBb0M7O0lBQ3BDLG1DQUFxQzs7SUFDckMsdUNBQWlDOztJQUNqQyx1Q0FBaUg7O0lBQ2pILG1DQUFnQzs7SUFDaEMsdUNBQStEOztJQUMvRCxxQ0FBcUM7O0lBQ3JDLHNDQUE2Qzs7SUFDN0MsMENBQXdDOztJQUN4QyxxQ0FBdUM7O0lBQ3ZDLG9DQUFxQzs7Ozs7SUFJekIscUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnQgfSBmcm9tICdAYW50di9nMic7XG5pbXBvcnQgeyBMZWdlbmRJdGVtLCBMb29zZU9iamVjdCwgU2NhbGVPcHRpb24gfSBmcm9tICdAYW50di9nMi9saWIvaW50ZXJmYWNlJztcbmltcG9ydCB7IEcyVGltZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgZGVwcmVjYXRpb24xMCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgdG9EYXRlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBHMlRpbWVsaW5lRGF0YSB7XG4gIC8qKlxuICAgKiDml7bpl7TlgLxcbiAgICogQGRlcHJlY2F0ZWQgVXNlIGB0aW1lYCBpbnN0ZWFkXG4gICAqL1xuICB4PzogRzJUaW1lO1xuICAvKipcbiAgICog5pe26Ze05YC8XG4gICAqL1xuICB0aW1lPzogRzJUaW1lO1xuICAvKiog5oyH5qCHMeaVsOaNriAqL1xuICB5MTogbnVtYmVyO1xuICAvKiog5oyH5qCHMuaVsOaNriAqL1xuICB5MjogbnVtYmVyO1xuICAvKiog5oyH5qCHM+aVsOaNriAqL1xuICB5Mz86IG51bWJlcjtcbiAgLyoqIOaMh+aghzTmlbDmja4gKi9cbiAgeTQ/OiBudW1iZXI7XG4gIC8qKiDmjIfmoIc15pWw5o2uICovXG4gIHk1PzogbnVtYmVyO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRzJUaW1lbGluZU1hcCB7XG4gIC8qKiDmjIfmoIcxICovXG4gIHkxOiBzdHJpbmc7XG4gIC8qKiDmjIfmoIcgKi9cbiAgeTI6IHN0cmluZztcbiAgLyoqIOaMh+aghzMgKi9cbiAgeTM/OiBzdHJpbmc7XG4gIC8qKiDmjIfmoIc0ICovXG4gIHk0Pzogc3RyaW5nO1xuICAvKiog5oyH5qCHNSAqL1xuICB5NT86IHN0cmluZztcblxuICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLXRpbWVsaW5lJyxcbiAgZXhwb3J0QXM6ICdnMlRpbWVsaW5lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RpbWVsaW5lLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBHMlRpbWVsaW5lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIG5vZGU6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgY2hhcnQ6IENoYXJ0O1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXkgPSAwO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG1heEF4aXMgPSAyO1xuICBASW5wdXQoKSBkYXRhOiBHMlRpbWVsaW5lRGF0YVtdID0gW107XG4gIEBJbnB1dCgpIHRpdGxlTWFwOiBHMlRpbWVsaW5lTWFwO1xuICBASW5wdXQoKSBjb2xvck1hcDogRzJUaW1lbGluZU1hcCA9IHsgeTE6ICcjNUI4RkY5JywgeTI6ICcjNUFEOEE2JywgeTM6ICcjNUQ3MDkyJywgeTQ6ICcjRjZCRDE2JywgeTU6ICcjRTg2NDUyJyB9O1xuICBASW5wdXQoKSBtYXNrOiBzdHJpbmcgPSAnSEg6bW0nO1xuICBASW5wdXQoKSBwb3NpdGlvbjogJ3RvcCcgfCAncmlnaHQnIHwgJ2JvdHRvbScgfCAnbGVmdCcgPSAndG9wJztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgaGVpZ2h0ID0gNDUwO1xuICBASW5wdXQoKSBwYWRkaW5nOiBudW1iZXJbXSA9IFs0MCwgOCwgNjQsIDQwXTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgYm9yZGVyV2lkdGggPSAyO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2xpZGVyID0gdHJ1ZTtcbiAgQElucHV0KCkgdGhlbWU6IHN0cmluZyB8IExvb3NlT2JqZWN0O1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nWm9uZTogTmdab25lLCBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSkge1xuICAgIGNvbmZpZ1Nydi5hdHRhY2hLZXkodGhpcywgJ2NoYXJ0JywgJ3RoZW1lJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpLCB0aGlzLmRlbGF5KSk7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGwoKSB7XG4gICAgY29uc3QgeyBub2RlLCBoZWlnaHQsIHBhZGRpbmcsIHNsaWRlciwgbWF4QXhpcywgdGhlbWUgfSA9IHRoaXM7XG4gICAgY29uc3QgY2hhcnQgPSAodGhpcy5jaGFydCA9IG5ldyBDaGFydCh7XG4gICAgICBjb250YWluZXI6IG5vZGUubmF0aXZlRWxlbWVudCxcbiAgICAgIGF1dG9GaXQ6IHRydWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBwYWRkaW5nLFxuICAgICAgdGhlbWUsXG4gICAgfSkpO1xuICAgIGNoYXJ0LmF4aXMoJ3RpbWUnLCB7IHRpdGxlOiBudWxsIH0pO1xuICAgIGNoYXJ0LmF4aXMoJ3kxJywgeyB0aXRsZTogbnVsbCB9KTtcbiAgICBmb3IgKGxldCBpID0gMjsgaSA8PSBtYXhBeGlzOyBpKyspIHtcbiAgICAgIGNoYXJ0LmF4aXMoYHkke2l9YCwgZmFsc2UpO1xuICAgIH1cblxuICAgIGNoYXJ0LmxpbmUoKS5wb3NpdGlvbigndGltZSp5MScpO1xuICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IG1heEF4aXM7IGkrKykge1xuICAgICAgY2hhcnQubGluZSgpLnBvc2l0aW9uKGB0aW1lKnkke2l9YCk7XG4gICAgfVxuXG4gICAgY2hhcnQudG9vbHRpcCh7XG4gICAgICBzaG93Q3Jvc3NoYWlyczogdHJ1ZSxcbiAgICAgIHNoYXJlZDogdHJ1ZSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHNsaWRlclBhZGRpbmcgPSB7IC4uLltdLCAuLi5wYWRkaW5nIH07XG4gICAgc2xpZGVyUGFkZGluZ1swXSA9IDA7XG4gICAgaWYgKHNsaWRlcikge1xuICAgICAgY2hhcnQub3B0aW9uKCdzbGlkZXInLCB7XG4gICAgICAgIGhlaWdodDogMjYsXG4gICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICBlbmQ6IDEsXG4gICAgICAgIHRyZW5kQ2ZnOiB7XG4gICAgICAgICAgaXNBcmVhOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgbWluTGltaXQ6IDIsXG4gICAgICAgIC8vIFRyYWNraW5nIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnR2aXMvRzIvaXNzdWVzLzIzMzJcbiAgICAgICAgLy8gbWFzayxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuYXR0YWNoQ2hhcnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoQ2hhcnQoKSB7XG4gICAgY29uc3QgeyBjaGFydCwgaGVpZ2h0LCBwYWRkaW5nLCBtYXNrLCB0aXRsZU1hcCwgcG9zaXRpb24sIGNvbG9yTWFwLCBib3JkZXJXaWR0aCwgbWF4QXhpcyB9ID0gdGhpcztcbiAgICBsZXQgZGF0YSA9IFsuLi50aGlzLmRhdGFdO1xuICAgIGlmICghY2hhcnQgfHwgIWRhdGEgfHwgZGF0YS5sZW5ndGggPD0gMCkgcmV0dXJuO1xuXG4gICAgY29uc3QgYXJyQXhpcyA9IFsuLi5BcnJheShtYXhBeGlzKV0ubWFwKChfLCBpbmRleCkgPT4gaW5kZXggKyAxKTtcblxuICAgIGNoYXJ0LmxlZ2VuZCh7XG4gICAgICBwb3NpdGlvbixcbiAgICAgIGN1c3RvbTogdHJ1ZSxcbiAgICAgIGl0ZW1zOiBhcnJBeGlzLm1hcChpZCA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IGB5JHtpZH1gO1xuICAgICAgICByZXR1cm4geyBuYW1lOiB0aXRsZU1hcFtrZXldLCB2YWx1ZTogdGl0bGVNYXBba2V5XSwgbWFya2VyOiB7IHN0eWxlOiB7IGZpbGw6IGNvbG9yTWFwW2tleV0gfSB9IH0gYXMgTGVnZW5kSXRlbTtcbiAgICAgIH0pLFxuICAgIH0pO1xuXG4gICAgLy8gYm9yZGVyXG4gICAgY2hhcnQuZ2VvbWV0cmllcy5mb3JFYWNoKCh2LCBpZHg6IG51bWJlcikgPT4ge1xuICAgICAgdi5jb2xvcigoY29sb3JNYXAgYXMgTnpTYWZlQW55KVtgeSR7aWR4ICsgMX1gXSkuc2l6ZShib3JkZXJXaWR0aCk7XG4gICAgfSk7XG4gICAgY2hhcnQuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIGNoYXJ0LnBhZGRpbmcgPSBwYWRkaW5nO1xuXG4gICAgLy8gVE9ETzogY29tcGF0aWJsZVxuICAgIGlmIChkYXRhLmZpbmQodyA9PiAhIXcueCkgIT0gbnVsbCkge1xuICAgICAgZGVwcmVjYXRpb24xMCgnZzItdGltZWxpbmUnLCAneCcsICd0aW1lJyk7XG4gICAgICBkYXRhLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0udGltZSA9IG5ldyBEYXRlKGl0ZW0ueCEpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIOi9rOaNouaIkOaXpeacn+exu+Wei1xuICAgIGRhdGEgPSBkYXRhXG4gICAgICAubWFwKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLnRpbWUgPSB0b0RhdGUoaXRlbS50aW1lISk7XG4gICAgICAgIGl0ZW0uX3RpbWUgPSAraXRlbS50aW1lO1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH0pXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5fdGltZSAtIGIuX3RpbWUpO1xuXG4gICAgY29uc3QgbWF4ID0gTWF0aC5tYXgoLi4uYXJyQXhpcy5tYXAoaWQgPT4gWy4uLmRhdGFdLnNvcnQoKGEsIGIpID0+IGJbYHkke2lkfWBdIC0gYVtgeSR7aWR9YF0pWzBdW2B5JHtpZH1gXSkpO1xuICAgIGNvbnN0IHNjYWxlT3B0aW9uczogUmVjb3JkPHN0cmluZywgU2NhbGVPcHRpb24+ID0ge307XG4gICAgYXJyQXhpcy5mb3JFYWNoKGlkID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IGB5JHtpZH1gO1xuICAgICAgc2NhbGVPcHRpb25zW2tleV0gPSB7XG4gICAgICAgIGFsaWFzOiB0aXRsZU1hcFtrZXldLFxuICAgICAgICBtYXgsXG4gICAgICAgIG1pbjogMCxcbiAgICAgIH07XG4gICAgfSk7XG4gICAgY2hhcnQuc2NhbGUoe1xuICAgICAgdGltZToge1xuICAgICAgICB0eXBlOiAndGltZScsXG4gICAgICAgIG1hc2ssXG4gICAgICAgIHJhbmdlOiBbMCwgMV0sXG4gICAgICB9LFxuICAgICAgLi4uc2NhbGVPcHRpb25zLFxuICAgIH0pO1xuXG4gICAgY29uc3QgaW5pdGlhbFJhbmdlID0ge1xuICAgICAgc3RhcnQ6IGRhdGFbMF0uX3RpbWUsXG4gICAgICBlbmQ6IGRhdGFbZGF0YS5sZW5ndGggLSAxXS5fdGltZSxcbiAgICB9O1xuICAgIGNvbnN0IGZpbHRlckRhdGEgPSBkYXRhLmZpbHRlcih2YWwgPT4gdmFsLl90aW1lID49IGluaXRpYWxSYW5nZS5zdGFydCAmJiB2YWwuX3RpbWUgPD0gaW5pdGlhbFJhbmdlLmVuZCk7XG4gICAgY2hhcnQuY2hhbmdlRGF0YShmaWx0ZXJEYXRhKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuYXR0YWNoQ2hhcnQoKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jaGFydCkge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5jaGFydC5kZXN0cm95KCkpO1xuICAgIH1cbiAgfVxufVxuIl19