/**
 * @fileoverview added by tsickle
 * Generated from: timeline.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, NgZone, Output, ViewChild, ViewEncapsulation, } from '@angular/core';
import { Chart } from '@antv/g2';
import { AlainConfigService, InputBoolean, InputNumber, toDate } from '@delon/util';
import format from 'date-fns/format';
/**
 * @record
 */
export function G2TimelineData() { }
if (false) {
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
/**
 * @record
 */
export function G2TimelineClickItem() { }
if (false) {
    /** @type {?} */
    G2TimelineClickItem.prototype.item;
    /** @type {?} */
    G2TimelineClickItem.prototype.ev;
}
export class G2TimelineComponent {
    // #endregion
    /**
     * @param {?} ngZone
     * @param {?} configSrv
     * @param {?} platform
     */
    constructor(ngZone, configSrv, platform) {
        this.ngZone = ngZone;
        this.platform = platform;
        // #region fields
        this.delay = 0;
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
        configSrv.attachKey(this, 'chart', 'theme');
    }
    /**
     * @return {?}
     */
    get chart() {
        return this._chart;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.platform.isBrowser) {
            return;
        }
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
        const { node, height, padding, slider, maxAxis, theme, maskSlider } = this;
        /** @type {?} */
        const chart = (this._chart = new Chart({
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
                (val) => format(val, maskSlider)),
            });
        }
        chart.on(`plot:click`, (/**
         * @param {?} ev
         * @return {?}
         */
        (ev) => {
            /** @type {?} */
            const records = this._chart.getSnapRecords({ x: ev.x, y: ev.y });
            this.ngZone.run((/**
             * @return {?}
             */
            () => this.clickItem.emit({ item: records[0]._origin, ev })));
        }));
        this.attachChart();
    }
    /**
     * @private
     * @return {?}
     */
    attachChart() {
        const { _chart, height, padding, mask, titleMap, position, colorMap, borderWidth, maxAxis } = this;
        /** @type {?} */
        let data = [...this.data];
        if (!_chart || !data || data.length <= 0)
            return;
        /** @type {?} */
        const arrAxis = [...Array(maxAxis)].map((/**
         * @param {?} _
         * @param {?} index
         * @return {?}
         */
        (_, index) => index + 1));
        _chart.legend({
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
        _chart.geometries.forEach((/**
         * @param {?} v
         * @param {?} idx
         * @return {?}
         */
        (v, idx) => {
            v.color(((/** @type {?} */ (colorMap)))[`y${idx + 1}`]).size(borderWidth);
        }));
        _chart.height = height;
        _chart.padding = padding;
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
        _chart.scale(Object.assign({ time: {
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
        console.log(filterData);
        _chart.changeData(filterData);
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
        if (this._chart) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => this._chart.destroy()));
        }
    }
}
G2TimelineComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-timeline',
                exportAs: 'g2Timeline',
                template: "<ng-container *nzStringTemplateOutlet=\"title\">\n  <h4>{{ title }}</h4>\n</ng-container>\n<div #container></div>\n",
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
G2TimelineComponent.ctorParameters = () => [
    { type: NgZone },
    { type: AlainConfigService },
    { type: Platform }
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
    maskSlider: [{ type: Input }],
    position: [{ type: Input }],
    height: [{ type: Input }],
    padding: [{ type: Input }],
    borderWidth: [{ type: Input }],
    slider: [{ type: Input }],
    theme: [{ type: Input }],
    clickItem: [{ type: Output }]
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
    /** @type {?} */
    G2TimelineComponent.ngAcceptInputType_delay;
    /** @type {?} */
    G2TimelineComponent.ngAcceptInputType_height;
    /** @type {?} */
    G2TimelineComponent.ngAcceptInputType_maxAxis;
    /** @type {?} */
    G2TimelineComponent.ngAcceptInputType_borderWidth;
    /** @type {?} */
    G2TimelineComponent.ngAcceptInputType_slider;
    /**
     * @type {?}
     * @private
     */
    G2TimelineComponent.prototype.node;
    /**
     * @type {?}
     * @private
     */
    G2TimelineComponent.prototype._chart;
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
    G2TimelineComponent.prototype.maskSlider;
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
    /** @type {?} */
    G2TimelineComponent.prototype.clickItem;
    /**
     * @type {?}
     * @private
     */
    G2TimelineComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    G2TimelineComponent.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBSU4sTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBZ0IsTUFBTSxVQUFVLENBQUM7QUFFL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFnQixZQUFZLEVBQUUsV0FBVyxFQUFlLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMvRyxPQUFPLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQzs7OztBQUdyQyxvQ0FnQkM7Ozs7OztJQVpDLDhCQUFjOzs7OztJQUVkLDRCQUFXOzs7OztJQUVYLDRCQUFXOzs7OztJQUVYLDRCQUFZOzs7OztJQUVaLDRCQUFZOzs7OztJQUVaLDRCQUFZOzs7Ozs7QUFJZCxtQ0FhQzs7Ozs7O0lBWEMsMkJBQVc7Ozs7O0lBRVgsMkJBQVc7Ozs7O0lBRVgsMkJBQVk7Ozs7O0lBRVosMkJBQVk7Ozs7O0lBRVosMkJBQVk7Ozs7OztBQUtkLHlDQUdDOzs7SUFGQyxtQ0FBcUI7O0lBQ3JCLGlDQUFVOztBQVdaLE1BQU0sT0FBTyxtQkFBbUI7Ozs7Ozs7SUFrQzlCLFlBQW9CLE1BQWMsRUFBRSxTQUE2QixFQUFVLFFBQWtCO1FBQXpFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBeUMsYUFBUSxHQUFSLFFBQVEsQ0FBVTs7UUFsQnJFLFVBQUssR0FBRyxDQUFDLENBQUM7UUFFVixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FB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QUU7O2tEQUFXO0FBRVY7SUFBZCxXQUFXLEVBQUU7O29EQUFhO0FBT1o7SUFBZCxXQUFXLEVBQUU7O21EQUFjO0FBRWI7SUFBZCxXQUFXLEVBQUU7O3dEQUFpQjtBQUNmO0lBQWYsWUFBWSxFQUFFOzttREFBZTs7O0lBM0J2Qyw0Q0FBNEM7O0lBQzVDLDZDQUE2Qzs7SUFDN0MsOENBQThDOztJQUM5QyxrREFBa0Q7O0lBQ2xELDZDQUE4Qzs7Ozs7SUFFOUMsbUNBQW9FOzs7OztJQUNwRSxxQ0FBc0I7O0lBUXRCLG9DQUFrQzs7SUFDbEMsb0NBQTJDOztJQUMzQyxzQ0FBb0M7O0lBQ3BDLG1DQUFxQzs7SUFDckMsdUNBQWlDOztJQUNqQyx1Q0FBaUg7O0lBQ2pILG1DQUFnQzs7SUFDaEMseUNBQXNDOztJQUN0Qyx1Q0FBK0Q7O0lBQy9ELHFDQUFxQzs7SUFDckMsc0NBQTZDOztJQUM3QywwQ0FBd0M7O0lBQ3hDLHFDQUF1Qzs7SUFDdkMsb0NBQTJDOztJQUMzQyx3Q0FBOEQ7Ozs7O0lBSWxELHFDQUFzQjs7Ozs7SUFBaUMsdUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXJ0LCBFdmVudCwgVHlwZXMgfSBmcm9tICdAYW50di9nMic7XG5pbXBvcnQgeyBHMlRpbWUgfSBmcm9tICdAZGVsb24vY2hhcnQvY29yZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQsIHRvRGF0ZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0JztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRzJUaW1lbGluZURhdGEge1xuICAvKipcbiAgICog5pe26Ze05YC8XG4gICAqL1xuICB0aW1lPzogRzJUaW1lO1xuICAvKiog5oyH5qCHMeaVsOaNriAqL1xuICB5MTogbnVtYmVyO1xuICAvKiog5oyH5qCHMuaVsOaNriAqL1xuICB5MjogbnVtYmVyO1xuICAvKiog5oyH5qCHM+aVsOaNriAqL1xuICB5Mz86IG51bWJlcjtcbiAgLyoqIOaMh+aghzTmlbDmja4gKi9cbiAgeTQ/OiBudW1iZXI7XG4gIC8qKiDmjIfmoIc15pWw5o2uICovXG4gIHk1PzogbnVtYmVyO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRzJUaW1lbGluZU1hcCB7XG4gIC8qKiDmjIfmoIcxICovXG4gIHkxOiBzdHJpbmc7XG4gIC8qKiDmjIfmoIcgKi9cbiAgeTI6IHN0cmluZztcbiAgLyoqIOaMh+aghzMgKi9cbiAgeTM/OiBzdHJpbmc7XG4gIC8qKiDmjIfmoIc0ICovXG4gIHk0Pzogc3RyaW5nO1xuICAvKiog5oyH5qCHNSAqL1xuICB5NT86IHN0cmluZztcblxuICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRzJUaW1lbGluZUNsaWNrSXRlbSB7XG4gIGl0ZW06IEcyVGltZWxpbmVEYXRhO1xuICBldjogRXZlbnQ7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLXRpbWVsaW5lJyxcbiAgZXhwb3J0QXM6ICdnMlRpbWVsaW5lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RpbWVsaW5lLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBHMlRpbWVsaW5lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kZWxheTogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9oZWlnaHQ6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbWF4QXhpczogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9ib3JkZXJXaWR0aDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zbGlkZXI6IEJvb2xlYW5JbnB1dDtcblxuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHN0YXRpYzogZmFsc2UgfSkgcHJpdmF0ZSBub2RlOiBFbGVtZW50UmVmO1xuICBwcml2YXRlIF9jaGFydDogQ2hhcnQ7XG5cbiAgZ2V0IGNoYXJ0KCk6IENoYXJ0IHtcbiAgICByZXR1cm4gdGhpcy5fY2hhcnQ7XG4gIH1cblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGRlbGF5ID0gMDtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBtYXhBeGlzID0gMjtcbiAgQElucHV0KCkgZGF0YTogRzJUaW1lbGluZURhdGFbXSA9IFtdO1xuICBASW5wdXQoKSB0aXRsZU1hcDogRzJUaW1lbGluZU1hcDtcbiAgQElucHV0KCkgY29sb3JNYXA6IEcyVGltZWxpbmVNYXAgPSB7IHkxOiAnIzVCOEZGOScsIHkyOiAnIzVBRDhBNicsIHkzOiAnIzVENzA5MicsIHk0OiAnI0Y2QkQxNicsIHk1OiAnI0U4NjQ1MicgfTtcbiAgQElucHV0KCkgbWFzazogc3RyaW5nID0gJ0hIOm1tJztcbiAgQElucHV0KCkgbWFza1NsaWRlcjogc3RyaW5nID0gJ0hIOm1tJztcbiAgQElucHV0KCkgcG9zaXRpb246ICd0b3AnIHwgJ3JpZ2h0JyB8ICdib3R0b20nIHwgJ2xlZnQnID0gJ3RvcCc7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGhlaWdodCA9IDQ1MDtcbiAgQElucHV0KCkgcGFkZGluZzogbnVtYmVyW10gPSBbNDAsIDgsIDY0LCA0MF07XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGJvcmRlcldpZHRoID0gMjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNsaWRlciA9IHRydWU7XG4gIEBJbnB1dCgpIHRoZW1lOiBzdHJpbmcgfCBUeXBlcy5Mb29zZU9iamVjdDtcbiAgQE91dHB1dCgpIGNsaWNrSXRlbSA9IG5ldyBFdmVudEVtaXR0ZXI8RzJUaW1lbGluZUNsaWNrSXRlbT4oKTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtKSB7XG4gICAgY29uZmlnU3J2LmF0dGFjaEtleSh0aGlzLCAnY2hhcnQnLCAndGhlbWUnKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmluc3RhbGwoKSwgdGhpcy5kZWxheSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgbm9kZSwgaGVpZ2h0LCBwYWRkaW5nLCBzbGlkZXIsIG1heEF4aXMsIHRoZW1lLCBtYXNrU2xpZGVyIH0gPSB0aGlzO1xuICAgIGNvbnN0IGNoYXJ0ID0gKHRoaXMuX2NoYXJ0ID0gbmV3IENoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogbm9kZS5uYXRpdmVFbGVtZW50LFxuICAgICAgYXV0b0ZpdDogdHJ1ZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIHBhZGRpbmcsXG4gICAgICB0aGVtZSxcbiAgICB9KSk7XG4gICAgY2hhcnQuYXhpcygndGltZScsIHsgdGl0bGU6IG51bGwgfSk7XG4gICAgY2hhcnQuYXhpcygneTEnLCB7IHRpdGxlOiBudWxsIH0pO1xuICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IG1heEF4aXM7IGkrKykge1xuICAgICAgY2hhcnQuYXhpcyhgeSR7aX1gLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgY2hhcnQubGluZSgpLnBvc2l0aW9uKCd0aW1lKnkxJyk7XG4gICAgZm9yIChsZXQgaSA9IDI7IGkgPD0gbWF4QXhpczsgaSsrKSB7XG4gICAgICBjaGFydC5saW5lKCkucG9zaXRpb24oYHRpbWUqeSR7aX1gKTtcbiAgICB9XG5cbiAgICBjaGFydC50b29sdGlwKHtcbiAgICAgIHNob3dDcm9zc2hhaXJzOiB0cnVlLFxuICAgICAgc2hhcmVkOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgY29uc3Qgc2xpZGVyUGFkZGluZyA9IHsgLi4uW10sIC4uLnBhZGRpbmcgfTtcbiAgICBzbGlkZXJQYWRkaW5nWzBdID0gMDtcbiAgICBpZiAoc2xpZGVyKSB7XG4gICAgICBjaGFydC5vcHRpb24oJ3NsaWRlcicsIHtcbiAgICAgICAgaGVpZ2h0OiAyNixcbiAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgIGVuZDogMSxcbiAgICAgICAgdHJlbmRDZmc6IHtcbiAgICAgICAgICBpc0FyZWE6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBtaW5MaW1pdDogMixcbiAgICAgICAgZm9ybWF0dGVyOiAodmFsOiBEYXRlKSA9PiBmb3JtYXQodmFsLCBtYXNrU2xpZGVyKSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoYXJ0Lm9uKGBwbG90OmNsaWNrYCwgKGV2OiBFdmVudCkgPT4ge1xuICAgICAgY29uc3QgcmVjb3JkcyA9IHRoaXMuX2NoYXJ0LmdldFNuYXBSZWNvcmRzKHsgeDogZXYueCwgeTogZXYueSB9KTtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLmNsaWNrSXRlbS5lbWl0KHsgaXRlbTogcmVjb3Jkc1swXS5fb3JpZ2luLCBldiB9KSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmF0dGFjaENoYXJ0KCk7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaENoYXJ0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgX2NoYXJ0LCBoZWlnaHQsIHBhZGRpbmcsIG1hc2ssIHRpdGxlTWFwLCBwb3NpdGlvbiwgY29sb3JNYXAsIGJvcmRlcldpZHRoLCBtYXhBeGlzIH0gPSB0aGlzO1xuICAgIGxldCBkYXRhID0gWy4uLnRoaXMuZGF0YV07XG4gICAgaWYgKCFfY2hhcnQgfHwgIWRhdGEgfHwgZGF0YS5sZW5ndGggPD0gMCkgcmV0dXJuO1xuXG4gICAgY29uc3QgYXJyQXhpcyA9IFsuLi5BcnJheShtYXhBeGlzKV0ubWFwKChfLCBpbmRleCkgPT4gaW5kZXggKyAxKTtcblxuICAgIF9jaGFydC5sZWdlbmQoe1xuICAgICAgcG9zaXRpb24sXG4gICAgICBjdXN0b206IHRydWUsXG4gICAgICBpdGVtczogYXJyQXhpcy5tYXAoaWQgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSBgeSR7aWR9YDtcbiAgICAgICAgcmV0dXJuIHsgbmFtZTogdGl0bGVNYXBba2V5XSwgdmFsdWU6IHRpdGxlTWFwW2tleV0sIG1hcmtlcjogeyBzdHlsZTogeyBmaWxsOiBjb2xvck1hcFtrZXldIH0gfSB9IGFzIFR5cGVzLkxlZ2VuZEl0ZW07XG4gICAgICB9KSxcbiAgICB9KTtcblxuICAgIC8vIGJvcmRlclxuICAgIF9jaGFydC5nZW9tZXRyaWVzLmZvckVhY2goKHYsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICB2LmNvbG9yKChjb2xvck1hcCBhcyBOelNhZmVBbnkpW2B5JHtpZHggKyAxfWBdKS5zaXplKGJvcmRlcldpZHRoKTtcbiAgICB9KTtcbiAgICBfY2hhcnQuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIF9jaGFydC5wYWRkaW5nID0gcGFkZGluZztcblxuICAgIC8vIOi9rOaNouaIkOaXpeacn+exu+Wei1xuICAgIGRhdGEgPSBkYXRhXG4gICAgICAubWFwKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLnRpbWUgPSB0b0RhdGUoaXRlbS50aW1lISk7XG4gICAgICAgIGl0ZW0uX3RpbWUgPSAraXRlbS50aW1lO1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH0pXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5fdGltZSAtIGIuX3RpbWUpO1xuXG4gICAgY29uc3QgbWF4ID0gTWF0aC5tYXgoLi4uYXJyQXhpcy5tYXAoaWQgPT4gWy4uLmRhdGFdLnNvcnQoKGEsIGIpID0+IGJbYHkke2lkfWBdIC0gYVtgeSR7aWR9YF0pWzBdW2B5JHtpZH1gXSkpO1xuICAgIGNvbnN0IHNjYWxlT3B0aW9uczogUmVjb3JkPHN0cmluZywgVHlwZXMuU2NhbGVPcHRpb24+ID0ge307XG4gICAgYXJyQXhpcy5mb3JFYWNoKGlkID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IGB5JHtpZH1gO1xuICAgICAgc2NhbGVPcHRpb25zW2tleV0gPSB7XG4gICAgICAgIGFsaWFzOiB0aXRsZU1hcFtrZXldLFxuICAgICAgICBtYXgsXG4gICAgICAgIG1pbjogMCxcbiAgICAgIH07XG4gICAgfSk7XG4gICAgX2NoYXJ0LnNjYWxlKHtcbiAgICAgIHRpbWU6IHtcbiAgICAgICAgdHlwZTogJ3RpbWUnLFxuICAgICAgICBtYXNrLFxuICAgICAgICByYW5nZTogWzAsIDFdLFxuICAgICAgfSxcbiAgICAgIC4uLnNjYWxlT3B0aW9ucyxcbiAgICB9KTtcblxuICAgIGNvbnN0IGluaXRpYWxSYW5nZSA9IHtcbiAgICAgIHN0YXJ0OiBkYXRhWzBdLl90aW1lLFxuICAgICAgZW5kOiBkYXRhW2RhdGEubGVuZ3RoIC0gMV0uX3RpbWUsXG4gICAgfTtcbiAgICBjb25zdCBmaWx0ZXJEYXRhID0gZGF0YS5maWx0ZXIodmFsID0+IHZhbC5fdGltZSA+PSBpbml0aWFsUmFuZ2Uuc3RhcnQgJiYgdmFsLl90aW1lIDw9IGluaXRpYWxSYW5nZS5lbmQpO1xuICAgIGNvbnNvbGUubG9nKGZpbHRlckRhdGEpO1xuICAgIF9jaGFydC5jaGFuZ2VEYXRhKGZpbHRlckRhdGEpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5hdHRhY2hDaGFydCgpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9jaGFydCkge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5fY2hhcnQuZGVzdHJveSgpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==