/**
 * @fileoverview added by tsickle
 * Generated from: timeline.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, ViewChild, ViewEncapsulation, } from '@angular/core';
import { Chart } from '@antv/g2';
import { AlainConfigService, deprecation10, InputBoolean, InputNumber, toDate } from '@delon/util';
import format from 'date-fns/format';
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
        const { node, height, padding, slider, maxAxis, theme, mask } = this;
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
                formatter: (/**
                 * @param {?} val
                 * @return {?}
                 */
                (val) => format(val, mask)),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L3RpbWVsaW5lLyIsInNvdXJjZXMiOlsidGltZWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUtOLFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUdqQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ25HLE9BQU8sTUFBTSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBR3JDLG9DQXFCQzs7Ozs7OztJQWhCQywyQkFBVzs7Ozs7SUFJWCw4QkFBYzs7Ozs7SUFFZCw0QkFBVzs7Ozs7SUFFWCw0QkFBVzs7Ozs7SUFFWCw0QkFBWTs7Ozs7SUFFWiw0QkFBWTs7Ozs7SUFFWiw0QkFBWTs7Ozs7O0FBSWQsbUNBYUM7Ozs7OztJQVhDLDJCQUFXOzs7OztJQUVYLDJCQUFXOzs7OztJQUVYLDJCQUFZOzs7OztJQUVaLDJCQUFZOzs7OztJQUVaLDJCQUFZOzs7QUFhZCxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7SUFzQjlCLFlBQW9CLE1BQWMsRUFBRSxTQUE2QjtRQUE3QyxXQUFNLEdBQU4sTUFBTSxDQUFROztRQWhCVixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRVYsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUMzQixTQUFJLEdBQXFCLEVBQUUsQ0FBQztRQUU1QixhQUFRLEdBQWtCLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFF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LEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBQyxDQUFDO1NBQzNEO0lBQ0gsQ0FBQzs7O1lBM0pGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLDZIQUF3QztnQkFDeEMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7O1lBNURDLE1BQU07WUFXQyxrQkFBa0I7OzttQkFtRHhCLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO29CQUt4QyxLQUFLO29CQUNMLEtBQUs7c0JBQ0wsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUs7cUJBQ0wsS0FBSztzQkFDTCxLQUFLOzBCQUNMLEtBQUs7cUJBQ0wsS0FBSztvQkFDTCxLQUFLOztBQVprQjtJQUFkLFdBQVcsRUFBRTs7a0RBQVc7QUFFVjtJQUFkLFdBQVcsRUFBRTs7b0RBQWE7QUFNWjtJQUFkLFdBQVcsRUFBRTs7bURBQWM7QUFFYjtJQUFkLFdBQVcsRUFBRTs7d0RBQWlCO0FBQ2Y7SUFBZixZQUFZLEVBQUU7O21EQUFlOzs7Ozs7SUFoQnZDLG1DQUFvRTs7Ozs7SUFDcEUsb0NBQXFCOztJQUlyQixvQ0FBa0M7O0lBQ2xDLG9DQUEyQzs7SUFDM0Msc0NBQW9DOztJQUNwQyxtQ0FBcUM7O0lBQ3JDLHVDQUFpQzs7SUFDakMsdUNBQWlIOztJQUNqSCxtQ0FBZ0M7O0lBQ2hDLHVDQUErRDs7SUFDL0QscUNBQXFDOztJQUNyQyxzQ0FBNkM7O0lBQzdDLDBDQUF3Qzs7SUFDeEMscUNBQXVDOztJQUN2QyxvQ0FBcUM7Ozs7O0lBSXpCLHFDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXJ0IH0gZnJvbSAnQGFudHYvZzInO1xuaW1wb3J0IHsgTGVnZW5kSXRlbSwgTG9vc2VPYmplY3QsIFNjYWxlT3B0aW9uIH0gZnJvbSAnQGFudHYvZzIvbGliL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBHMlRpbWUgfSBmcm9tICdAZGVsb24vY2hhcnQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIGRlcHJlY2F0aW9uMTAsIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIHRvRGF0ZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0JztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRzJUaW1lbGluZURhdGEge1xuICAvKipcbiAgICog5pe26Ze05YC8XG4gICAqIEBkZXByZWNhdGVkIFVzZSBgdGltZWAgaW5zdGVhZFxuICAgKi9cbiAgeD86IEcyVGltZTtcbiAgLyoqXG4gICAqIOaXtumXtOWAvFxuICAgKi9cbiAgdGltZT86IEcyVGltZTtcbiAgLyoqIOaMh+aghzHmlbDmja4gKi9cbiAgeTE6IG51bWJlcjtcbiAgLyoqIOaMh+aghzLmlbDmja4gKi9cbiAgeTI6IG51bWJlcjtcbiAgLyoqIOaMh+aghzPmlbDmja4gKi9cbiAgeTM/OiBudW1iZXI7XG4gIC8qKiDmjIfmoIc05pWw5o2uICovXG4gIHk0PzogbnVtYmVyO1xuICAvKiog5oyH5qCHNeaVsOaNriAqL1xuICB5NT86IG51bWJlcjtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEcyVGltZWxpbmVNYXAge1xuICAvKiog5oyH5qCHMSAqL1xuICB5MTogc3RyaW5nO1xuICAvKiog5oyH5qCHICovXG4gIHkyOiBzdHJpbmc7XG4gIC8qKiDmjIfmoIczICovXG4gIHkzPzogc3RyaW5nO1xuICAvKiog5oyH5qCHNCAqL1xuICB5ND86IHN0cmluZztcbiAgLyoqIOaMh+aghzUgKi9cbiAgeTU/OiBzdHJpbmc7XG5cbiAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi10aW1lbGluZScsXG4gIGV4cG9ydEFzOiAnZzJUaW1lbGluZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lbGluZS5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRzJUaW1lbGluZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHN0YXRpYzogZmFsc2UgfSkgcHJpdmF0ZSBub2RlOiBFbGVtZW50UmVmO1xuICBwcml2YXRlIGNoYXJ0OiBDaGFydDtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGRlbGF5ID0gMDtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBtYXhBeGlzID0gMjtcbiAgQElucHV0KCkgZGF0YTogRzJUaW1lbGluZURhdGFbXSA9IFtdO1xuICBASW5wdXQoKSB0aXRsZU1hcDogRzJUaW1lbGluZU1hcDtcbiAgQElucHV0KCkgY29sb3JNYXA6IEcyVGltZWxpbmVNYXAgPSB7IHkxOiAnIzVCOEZGOScsIHkyOiAnIzVBRDhBNicsIHkzOiAnIzVENzA5MicsIHk0OiAnI0Y2QkQxNicsIHk1OiAnI0U4NjQ1MicgfTtcbiAgQElucHV0KCkgbWFzazogc3RyaW5nID0gJ0hIOm1tJztcbiAgQElucHV0KCkgcG9zaXRpb246ICd0b3AnIHwgJ3JpZ2h0JyB8ICdib3R0b20nIHwgJ2xlZnQnID0gJ3RvcCc7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGhlaWdodCA9IDQ1MDtcbiAgQElucHV0KCkgcGFkZGluZzogbnVtYmVyW10gPSBbNDAsIDgsIDY0LCA0MF07XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGJvcmRlcldpZHRoID0gMjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNsaWRlciA9IHRydWU7XG4gIEBJbnB1dCgpIHRoZW1lOiBzdHJpbmcgfCBMb29zZU9iamVjdDtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UpIHtcbiAgICBjb25maWdTcnYuYXR0YWNoS2V5KHRoaXMsICdjaGFydCcsICd0aGVtZScpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmluc3RhbGwoKSwgdGhpcy5kZWxheSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsKCkge1xuICAgIGNvbnN0IHsgbm9kZSwgaGVpZ2h0LCBwYWRkaW5nLCBzbGlkZXIsIG1heEF4aXMsIHRoZW1lLCBtYXNrIH0gPSB0aGlzO1xuICAgIGNvbnN0IGNoYXJ0ID0gKHRoaXMuY2hhcnQgPSBuZXcgQ2hhcnQoe1xuICAgICAgY29udGFpbmVyOiBub2RlLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBhdXRvRml0OiB0cnVlLFxuICAgICAgaGVpZ2h0LFxuICAgICAgcGFkZGluZyxcbiAgICAgIHRoZW1lLFxuICAgIH0pKTtcbiAgICBjaGFydC5heGlzKCd0aW1lJywgeyB0aXRsZTogbnVsbCB9KTtcbiAgICBjaGFydC5heGlzKCd5MScsIHsgdGl0bGU6IG51bGwgfSk7XG4gICAgZm9yIChsZXQgaSA9IDI7IGkgPD0gbWF4QXhpczsgaSsrKSB7XG4gICAgICBjaGFydC5heGlzKGB5JHtpfWAsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBjaGFydC5saW5lKCkucG9zaXRpb24oJ3RpbWUqeTEnKTtcbiAgICBmb3IgKGxldCBpID0gMjsgaSA8PSBtYXhBeGlzOyBpKyspIHtcbiAgICAgIGNoYXJ0LmxpbmUoKS5wb3NpdGlvbihgdGltZSp5JHtpfWApO1xuICAgIH1cblxuICAgIGNoYXJ0LnRvb2x0aXAoe1xuICAgICAgc2hvd0Nyb3NzaGFpcnM6IHRydWUsXG4gICAgICBzaGFyZWQ6IHRydWUsXG4gICAgfSk7XG5cbiAgICBjb25zdCBzbGlkZXJQYWRkaW5nID0geyAuLi5bXSwgLi4ucGFkZGluZyB9O1xuICAgIHNsaWRlclBhZGRpbmdbMF0gPSAwO1xuICAgIGlmIChzbGlkZXIpIHtcbiAgICAgIGNoYXJ0Lm9wdGlvbignc2xpZGVyJywge1xuICAgICAgICBoZWlnaHQ6IDI2LFxuICAgICAgICBzdGFydDogMCxcbiAgICAgICAgZW5kOiAxLFxuICAgICAgICB0cmVuZENmZzoge1xuICAgICAgICAgIGlzQXJlYTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIG1pbkxpbWl0OiAyLFxuICAgICAgICBmb3JtYXR0ZXI6ICh2YWw6IERhdGUpID0+IGZvcm1hdCh2YWwsIG1hc2spLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5hdHRhY2hDaGFydCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hDaGFydCgpIHtcbiAgICBjb25zdCB7IGNoYXJ0LCBoZWlnaHQsIHBhZGRpbmcsIG1hc2ssIHRpdGxlTWFwLCBwb3NpdGlvbiwgY29sb3JNYXAsIGJvcmRlcldpZHRoLCBtYXhBeGlzIH0gPSB0aGlzO1xuICAgIGxldCBkYXRhID0gWy4uLnRoaXMuZGF0YV07XG4gICAgaWYgKCFjaGFydCB8fCAhZGF0YSB8fCBkYXRhLmxlbmd0aCA8PSAwKSByZXR1cm47XG5cbiAgICBjb25zdCBhcnJBeGlzID0gWy4uLkFycmF5KG1heEF4aXMpXS5tYXAoKF8sIGluZGV4KSA9PiBpbmRleCArIDEpO1xuXG4gICAgY2hhcnQubGVnZW5kKHtcbiAgICAgIHBvc2l0aW9uLFxuICAgICAgY3VzdG9tOiB0cnVlLFxuICAgICAgaXRlbXM6IGFyckF4aXMubWFwKGlkID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gYHkke2lkfWA7XG4gICAgICAgIHJldHVybiB7IG5hbWU6IHRpdGxlTWFwW2tleV0sIHZhbHVlOiB0aXRsZU1hcFtrZXldLCBtYXJrZXI6IHsgc3R5bGU6IHsgZmlsbDogY29sb3JNYXBba2V5XSB9IH0gfSBhcyBMZWdlbmRJdGVtO1xuICAgICAgfSksXG4gICAgfSk7XG5cbiAgICAvLyBib3JkZXJcbiAgICBjaGFydC5nZW9tZXRyaWVzLmZvckVhY2goKHYsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICB2LmNvbG9yKChjb2xvck1hcCBhcyBOelNhZmVBbnkpW2B5JHtpZHggKyAxfWBdKS5zaXplKGJvcmRlcldpZHRoKTtcbiAgICB9KTtcbiAgICBjaGFydC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgY2hhcnQucGFkZGluZyA9IHBhZGRpbmc7XG5cbiAgICAvLyBUT0RPOiBjb21wYXRpYmxlXG4gICAgaWYgKGRhdGEuZmluZCh3ID0+ICEhdy54KSAhPSBudWxsKSB7XG4gICAgICBkZXByZWNhdGlvbjEwKCdnMi10aW1lbGluZScsICd4JywgJ3RpbWUnKTtcbiAgICAgIGRhdGEuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS50aW1lID0gbmV3IERhdGUoaXRlbS54ISk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8g6L2s5o2i5oiQ5pel5pyf57G75Z6LXG4gICAgZGF0YSA9IGRhdGFcbiAgICAgIC5tYXAoaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0udGltZSA9IHRvRGF0ZShpdGVtLnRpbWUhKTtcbiAgICAgICAgaXRlbS5fdGltZSA9ICtpdGVtLnRpbWU7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLl90aW1lIC0gYi5fdGltZSk7XG5cbiAgICBjb25zdCBtYXggPSBNYXRoLm1heCguLi5hcnJBeGlzLm1hcChpZCA9PiBbLi4uZGF0YV0uc29ydCgoYSwgYikgPT4gYltgeSR7aWR9YF0gLSBhW2B5JHtpZH1gXSlbMF1bYHkke2lkfWBdKSk7XG4gICAgY29uc3Qgc2NhbGVPcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCBTY2FsZU9wdGlvbj4gPSB7fTtcbiAgICBhcnJBeGlzLmZvckVhY2goaWQgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gYHkke2lkfWA7XG4gICAgICBzY2FsZU9wdGlvbnNba2V5XSA9IHtcbiAgICAgICAgYWxpYXM6IHRpdGxlTWFwW2tleV0sXG4gICAgICAgIG1heCxcbiAgICAgICAgbWluOiAwLFxuICAgICAgfTtcbiAgICB9KTtcbiAgICBjaGFydC5zY2FsZSh7XG4gICAgICB0aW1lOiB7XG4gICAgICAgIHR5cGU6ICd0aW1lJyxcbiAgICAgICAgbWFzayxcbiAgICAgICAgcmFuZ2U6IFswLCAxXSxcbiAgICAgIH0sXG4gICAgICAuLi5zY2FsZU9wdGlvbnMsXG4gICAgfSk7XG5cbiAgICBjb25zdCBpbml0aWFsUmFuZ2UgPSB7XG4gICAgICBzdGFydDogZGF0YVswXS5fdGltZSxcbiAgICAgIGVuZDogZGF0YVtkYXRhLmxlbmd0aCAtIDFdLl90aW1lLFxuICAgIH07XG4gICAgY29uc3QgZmlsdGVyRGF0YSA9IGRhdGEuZmlsdGVyKHZhbCA9PiB2YWwuX3RpbWUgPj0gaW5pdGlhbFJhbmdlLnN0YXJ0ICYmIHZhbC5fdGltZSA8PSBpbml0aWFsUmFuZ2UuZW5kKTtcbiAgICBjaGFydC5jaGFuZ2VEYXRhKGZpbHRlckRhdGEpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5hdHRhY2hDaGFydCgpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmNoYXJ0LmRlc3Ryb3koKSk7XG4gICAgfVxuICB9XG59XG4iXX0=