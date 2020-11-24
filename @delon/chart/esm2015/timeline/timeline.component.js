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
        chart.on(`legend-item:click`, (/**
         * @param {?} ev
         * @return {?}
         */
        (ev) => {
            var _a;
            /** @type {?} */
            const item = (_a = ev === null || ev === void 0 ? void 0 : ev.target) === null || _a === void 0 ? void 0 : _a.get('delegateObject').item;
            /** @type {?} */
            const id = item === null || item === void 0 ? void 0 : item.id;
            /** @type {?} */
            const line = chart.geometries.find((/**
             * @param {?} w
             * @return {?}
             */
            w => w.getAttribute('position').getFields()[1] === id));
            if (line) {
                line.changeVisible(!item.unchecked);
            }
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
                return (/** @type {?} */ ({ id: key, name: titleMap[key], value: key, marker: { style: { fill: colorMap[key] } } }));
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
        _chart.changeData(filterData);
        _chart.render();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NoYXJ0L3RpbWVsaW5lLyIsInNvdXJjZXMiOlsidGltZWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBSU4sTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBZ0IsTUFBTSxVQUFVLENBQUM7QUFFL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFnQixZQUFZLEVBQUUsV0FBVyxFQUFlLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMvRyxPQUFPLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQzs7OztBQUdyQyxvQ0FnQkM7Ozs7OztJQVpDLDhCQUFjOzs7OztJQUVkLDRCQUFXOzs7OztJQUVYLDRCQUFXOzs7OztJQUVYLDRCQUFZOzs7OztJQUVaLDRCQUFZOzs7OztJQUVaLDRCQUFZOzs7Ozs7QUFJZCxtQ0FhQzs7Ozs7O0lBWEMsMkJBQVc7Ozs7O0lBRVgsMkJBQVc7Ozs7O0lBRVgsMkJBQVk7Ozs7O0lBRVosMkJBQVk7Ozs7O0lBRVosMkJBQVk7Ozs7OztBQUtkLHlDQUdDOzs7SUFGQyxtQ0FBcUI7O0lBQ3JCLGlDQUFVOztBQVdaLE1BQU0sT0FBTyxtQkFBbUI7Ozs7Ozs7SUFrQzlCLFlBQW9CLE1BQWMsRUFBRSxTQUE2QixFQUFVLFFBQWtCO1FBQXpFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBeUMsYUFBUSxHQUFSLFFBQVEsQ0FBVTs7UUFsQnJFLFVBQUssR0FBRyxDQUFDLENBQUM7UUFFVixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLFNBQUksR0FBcUIsRUFBRSxDQUFDO1FBRTVCLGFBQVEsR0FBa0IsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQztRQUN4RyxTQUFJLEdBQVcsT0FBTyxDQUFDO1FBQ3ZCLGVBQVUsR0FBVyxPQUFPLENBQUM7UUFDN0IsYUFBUSxHQUF3QyxLQUFLLENBQUM7UUFDdkMsV0FBTSxHQUFHLEdBQUcsQ0FBQztRQUM1QixZQUFPLEdBQWEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNyQixnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNmLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFFN0IsY0FBUyxHQUFHLElBQUksWUFBWSxFQUF1QixDQUFDO1FBSzVELFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7O0lBMUJELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7O0lBMEJELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDNUIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUI7OztRQUFDLEdBQUcsRUFBRSxDQUFDLFVBQVU7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQztJQUNwRixDQUFDOzs7OztJQUVPLE9BQU87Y0FDUCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxHQUFHLElBQUk7O2NBQ3BFLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxLQUFLLENBQUM7WUFDckMsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQzdCLE9BQU8sRUFBRSxJQUFJO1lBQ2IsTUFBTTtZQUNOLE9BQU87WUFDUCxLQUFLO1NBQ04sQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNwQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzVCO1FBRUQsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3JDO1FBRUQsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNaLGNBQWMsRUFBRSxJQUFJO1lBQ3BCLE1BQU0sRUFBRSxJQUFJO1NBQ2IsQ0FBQyxDQUFDOztjQUVHLGFBQWEsbUNBQVEsRUFBRSxHQUFLLE9BQU8sQ0FBRTtRQUMzQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksTUFBTSxFQUFFO1lBQ1YsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7Z0JBQ3JCLE1BQU0sRUFBRSxFQUFFO2dCQUNWLEtBQUssRUFBRSxDQUFDO2dCQUNSLEdBQUcsRUFBRSxDQUFDO2dCQUNOLFFBQVEsRUFBRTtvQkFDUixNQUFNLEVBQUUsS0FBSztpQkFDZDtnQkFDRCxRQUFRLEVBQUUsQ0FBQztnQkFDWCxTQUFTOzs7O2dCQUFFLENBQUMsR0FBUyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFBO2FBQ2xELENBQUMsQ0FBQztTQUNKO1FBRUQsS0FBSyxDQUFDLEVBQUUsQ0FBQyxZQUFZOzs7O1FBQUUsQ0FBQyxFQUFTLEVBQUUsRUFBRTs7a0JBQzdCLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDaEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHOzs7WUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUMsQ0FBQztRQUMvRSxDQUFDLEVBQUMsQ0FBQztRQUVILEtBQUssQ0FBQyxFQUFFLENBQUMsbUJBQW1COzs7O1FBQUUsQ0FBQyxFQUFTLEVBQUUsRUFBRTs7O2tCQUNwQyxJQUFJLFNBQUcsRUFBRSxhQUFGLEVBQUUsdUJBQUYsRUFBRSxDQUFFLE1BQU0sMENBQUUsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUk7O2tCQUM3QyxFQUFFLEdBQUcsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLEVBQUU7O2tCQUNiLElBQUksR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFDO1lBQ3pGLElBQUksSUFBSSxFQUFFO2dCQUNSLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDckM7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVPLFdBQVc7Y0FDWCxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLEdBQUcsSUFBSTs7WUFDOUYsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDO1lBQUUsT0FBTzs7Y0FFM0MsT0FBTyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHOzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBQztRQUVoRSxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ1osUUFBUTtZQUNSLE1BQU0sRUFBRSxJQUFJO1lBQ1osS0FBSyxFQUFFLE9BQU8sQ0FBQyxHQUFHOzs7O1lBQUMsRUFBRSxDQUFDLEVBQUU7O3NCQUNoQixHQUFHLEdBQUcsSUFBSSxFQUFFLEVBQUU7Z0JBQ3BCLE9BQU8sbUJBQUEsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFvQixDQUFDO1lBQ3RILENBQUMsRUFBQztTQUNILENBQUMsQ0FBQztRQUVILFNBQVM7UUFDVCxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBVyxFQUFFLEVBQUU7WUFDM0MsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLG1CQUFBLFFBQVEsRUFBYSxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNwRSxDQUFDLEVBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRXpCLFVBQVU7UUFDVixJQUFJLEdBQUcsSUFBSTthQUNSLEdBQUc7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRTtZQUNWLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLG1CQUFBLElBQUksQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3hCLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQyxFQUFDO2FBQ0QsSUFBSTs7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBQyxDQUFDOztjQUUvQixHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFHOzs7O1FBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSTs7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBQyxDQUFDOztjQUN0RyxZQUFZLEdBQXNDLEVBQUU7UUFDMUQsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxFQUFFLENBQUMsRUFBRTs7a0JBQ2IsR0FBRyxHQUFHLElBQUksRUFBRSxFQUFFO1lBQ3BCLFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRztnQkFDbEIsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUM7Z0JBQ3BCLEdBQUc7Z0JBQ0gsR0FBRyxFQUFFLENBQUM7YUFDUCxDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsS0FBSyxpQkFDVixJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSTtnQkFDSixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ2QsSUFDRSxZQUFZLEVBQ2YsQ0FBQzs7Y0FFRyxZQUFZLEdBQUc7WUFDbkIsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQ3BCLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLO1NBQ2pDOztjQUNLLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTTs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxZQUFZLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxLQUFLLElBQUksWUFBWSxDQUFDLEdBQUcsRUFBQztRQUN2RyxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUMsQ0FBQztJQUMxRCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCOzs7WUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFDLENBQUM7U0FDNUQ7SUFDSCxDQUFDOzs7WUFsTEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsK0hBQXdDO2dCQUN4QyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7WUE1REMsTUFBTTtZQVdDLGtCQUFrQjtZQWxCbEIsUUFBUTs7O21CQTJFZCxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtvQkFTeEMsS0FBSztvQkFDTCxLQUFLO3NCQUNMLEtBQUs7bUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7bUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLEtBQUs7cUJBQ0wsS0FBSztzQkFDTCxLQUFLOzBCQUNMLEtBQUs7cUJBQ0wsS0FBSztvQkFDTCxLQUFLO3dCQUNMLE1BQU07O0FBZGlCO0lBQWQsV0FBVyxFQUFFOztrREFBVztBQUVWO0lBQWQsV0FBVyxFQUFFOztvREFBYTtBQU9aO0lBQWQsV0FBVyxFQUFFOzttREFBYztBQUViO0lBQWQsV0FBVyxFQUFFOzt3REFBaUI7QUFDZjtJQUFmLFlBQVksRUFBRTs7bURBQWU7OztJQTNCdkMsNENBQTRDOztJQUM1Qyw2Q0FBNkM7O0lBQzdDLDhDQUE4Qzs7SUFDOUMsa0RBQWtEOztJQUNsRCw2Q0FBOEM7Ozs7O0lBRTlDLG1DQUFvRTs7Ozs7SUFDcEUscUNBQXNCOztJQVF0QixvQ0FBa0M7O0lBQ2xDLG9DQUEyQzs7SUFDM0Msc0NBQW9DOztJQUNwQyxtQ0FBcUM7O0lBQ3JDLHVDQUFpQzs7SUFDakMsdUNBQWlIOztJQUNqSCxtQ0FBZ0M7O0lBQ2hDLHlDQUFzQzs7SUFDdEMsdUNBQStEOztJQUMvRCxxQ0FBcUM7O0lBQ3JDLHNDQUE2Qzs7SUFDN0MsMENBQXdDOztJQUN4QyxxQ0FBdUM7O0lBQ3ZDLG9DQUEyQzs7SUFDM0Msd0NBQThEOzs7OztJQUlsRCxxQ0FBc0I7Ozs7O0lBQWlDLHVDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydCwgRXZlbnQsIFR5cGVzIH0gZnJvbSAnQGFudHYvZzInO1xuaW1wb3J0IHsgRzJUaW1lIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L2NvcmUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBCb29sZWFuSW5wdXQsIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIE51bWJlcklucHV0LCB0b0RhdGUgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgZm9ybWF0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEcyVGltZWxpbmVEYXRhIHtcbiAgLyoqXG4gICAqIOaXtumXtOWAvFxuICAgKi9cbiAgdGltZT86IEcyVGltZTtcbiAgLyoqIOaMh+aghzHmlbDmja4gKi9cbiAgeTE6IG51bWJlcjtcbiAgLyoqIOaMh+aghzLmlbDmja4gKi9cbiAgeTI6IG51bWJlcjtcbiAgLyoqIOaMh+aghzPmlbDmja4gKi9cbiAgeTM/OiBudW1iZXI7XG4gIC8qKiDmjIfmoIc05pWw5o2uICovXG4gIHk0PzogbnVtYmVyO1xuICAvKiog5oyH5qCHNeaVsOaNriAqL1xuICB5NT86IG51bWJlcjtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEcyVGltZWxpbmVNYXAge1xuICAvKiog5oyH5qCHMSAqL1xuICB5MTogc3RyaW5nO1xuICAvKiog5oyH5qCHICovXG4gIHkyOiBzdHJpbmc7XG4gIC8qKiDmjIfmoIczICovXG4gIHkzPzogc3RyaW5nO1xuICAvKiog5oyH5qCHNCAqL1xuICB5ND86IHN0cmluZztcbiAgLyoqIOaMh+aghzUgKi9cbiAgeTU/OiBzdHJpbmc7XG5cbiAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEcyVGltZWxpbmVDbGlja0l0ZW0ge1xuICBpdGVtOiBHMlRpbWVsaW5lRGF0YTtcbiAgZXY6IEV2ZW50O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi10aW1lbGluZScsXG4gIGV4cG9ydEFzOiAnZzJUaW1lbGluZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lbGluZS5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRzJUaW1lbGluZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGVsYXk6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaGVpZ2h0OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX21heEF4aXM6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYm9yZGVyV2lkdGg6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2xpZGVyOiBCb29sZWFuSW5wdXQ7XG5cbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pIHByaXZhdGUgbm9kZTogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBfY2hhcnQ6IENoYXJ0O1xuXG4gIGdldCBjaGFydCgpOiBDaGFydCB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYXJ0O1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBkZWxheSA9IDA7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbWF4QXhpcyA9IDI7XG4gIEBJbnB1dCgpIGRhdGE6IEcyVGltZWxpbmVEYXRhW10gPSBbXTtcbiAgQElucHV0KCkgdGl0bGVNYXA6IEcyVGltZWxpbmVNYXA7XG4gIEBJbnB1dCgpIGNvbG9yTWFwOiBHMlRpbWVsaW5lTWFwID0geyB5MTogJyM1QjhGRjknLCB5MjogJyM1QUQ4QTYnLCB5MzogJyM1RDcwOTInLCB5NDogJyNGNkJEMTYnLCB5NTogJyNFODY0NTInIH07XG4gIEBJbnB1dCgpIG1hc2s6IHN0cmluZyA9ICdISDptbSc7XG4gIEBJbnB1dCgpIG1hc2tTbGlkZXI6IHN0cmluZyA9ICdISDptbSc7XG4gIEBJbnB1dCgpIHBvc2l0aW9uOiAndG9wJyB8ICdyaWdodCcgfCAnYm90dG9tJyB8ICdsZWZ0JyA9ICd0b3AnO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQgPSA0NTA7XG4gIEBJbnB1dCgpIHBhZGRpbmc6IG51bWJlcltdID0gWzQwLCA4LCA2NCwgNDBdO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBib3JkZXJXaWR0aCA9IDI7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzbGlkZXIgPSB0cnVlO1xuICBASW5wdXQoKSB0aGVtZTogc3RyaW5nIHwgVHlwZXMuTG9vc2VPYmplY3Q7XG4gIEBPdXRwdXQoKSBjbGlja0l0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyPEcyVGltZWxpbmVDbGlja0l0ZW0+KCk7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLCBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSkge1xuICAgIGNvbmZpZ1Nydi5hdHRhY2hLZXkodGhpcywgJ2NoYXJ0JywgJ3RoZW1lJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnN0YWxsKCksIHRoaXMuZGVsYXkpKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5zdGFsbCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IG5vZGUsIGhlaWdodCwgcGFkZGluZywgc2xpZGVyLCBtYXhBeGlzLCB0aGVtZSwgbWFza1NsaWRlciB9ID0gdGhpcztcbiAgICBjb25zdCBjaGFydCA9ICh0aGlzLl9jaGFydCA9IG5ldyBDaGFydCh7XG4gICAgICBjb250YWluZXI6IG5vZGUubmF0aXZlRWxlbWVudCxcbiAgICAgIGF1dG9GaXQ6IHRydWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBwYWRkaW5nLFxuICAgICAgdGhlbWUsXG4gICAgfSkpO1xuICAgIGNoYXJ0LmF4aXMoJ3RpbWUnLCB7IHRpdGxlOiBudWxsIH0pO1xuICAgIGNoYXJ0LmF4aXMoJ3kxJywgeyB0aXRsZTogbnVsbCB9KTtcbiAgICBmb3IgKGxldCBpID0gMjsgaSA8PSBtYXhBeGlzOyBpKyspIHtcbiAgICAgIGNoYXJ0LmF4aXMoYHkke2l9YCwgZmFsc2UpO1xuICAgIH1cblxuICAgIGNoYXJ0LmxpbmUoKS5wb3NpdGlvbigndGltZSp5MScpO1xuICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IG1heEF4aXM7IGkrKykge1xuICAgICAgY2hhcnQubGluZSgpLnBvc2l0aW9uKGB0aW1lKnkke2l9YCk7XG4gICAgfVxuXG4gICAgY2hhcnQudG9vbHRpcCh7XG4gICAgICBzaG93Q3Jvc3NoYWlyczogdHJ1ZSxcbiAgICAgIHNoYXJlZDogdHJ1ZSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHNsaWRlclBhZGRpbmcgPSB7IC4uLltdLCAuLi5wYWRkaW5nIH07XG4gICAgc2xpZGVyUGFkZGluZ1swXSA9IDA7XG4gICAgaWYgKHNsaWRlcikge1xuICAgICAgY2hhcnQub3B0aW9uKCdzbGlkZXInLCB7XG4gICAgICAgIGhlaWdodDogMjYsXG4gICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICBlbmQ6IDEsXG4gICAgICAgIHRyZW5kQ2ZnOiB7XG4gICAgICAgICAgaXNBcmVhOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgbWluTGltaXQ6IDIsXG4gICAgICAgIGZvcm1hdHRlcjogKHZhbDogRGF0ZSkgPT4gZm9ybWF0KHZhbCwgbWFza1NsaWRlciksXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjaGFydC5vbihgcGxvdDpjbGlja2AsIChldjogRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHJlY29yZHMgPSB0aGlzLl9jaGFydC5nZXRTbmFwUmVjb3Jkcyh7IHg6IGV2LngsIHk6IGV2LnkgfSk7XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5jbGlja0l0ZW0uZW1pdCh7IGl0ZW06IHJlY29yZHNbMF0uX29yaWdpbiwgZXYgfSkpO1xuICAgIH0pO1xuXG4gICAgY2hhcnQub24oYGxlZ2VuZC1pdGVtOmNsaWNrYCwgKGV2OiBFdmVudCkgPT4ge1xuICAgICAgY29uc3QgaXRlbSA9IGV2Py50YXJnZXQ/LmdldCgnZGVsZWdhdGVPYmplY3QnKS5pdGVtO1xuICAgICAgY29uc3QgaWQgPSBpdGVtPy5pZDtcbiAgICAgIGNvbnN0IGxpbmUgPSBjaGFydC5nZW9tZXRyaWVzLmZpbmQodyA9PiB3LmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5nZXRGaWVsZHMoKVsxXSA9PT0gaWQpO1xuICAgICAgaWYgKGxpbmUpIHtcbiAgICAgICAgbGluZS5jaGFuZ2VWaXNpYmxlKCFpdGVtLnVuY2hlY2tlZCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmF0dGFjaENoYXJ0KCk7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaENoYXJ0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgX2NoYXJ0LCBoZWlnaHQsIHBhZGRpbmcsIG1hc2ssIHRpdGxlTWFwLCBwb3NpdGlvbiwgY29sb3JNYXAsIGJvcmRlcldpZHRoLCBtYXhBeGlzIH0gPSB0aGlzO1xuICAgIGxldCBkYXRhID0gWy4uLnRoaXMuZGF0YV07XG4gICAgaWYgKCFfY2hhcnQgfHwgIWRhdGEgfHwgZGF0YS5sZW5ndGggPD0gMCkgcmV0dXJuO1xuXG4gICAgY29uc3QgYXJyQXhpcyA9IFsuLi5BcnJheShtYXhBeGlzKV0ubWFwKChfLCBpbmRleCkgPT4gaW5kZXggKyAxKTtcblxuICAgIF9jaGFydC5sZWdlbmQoe1xuICAgICAgcG9zaXRpb24sXG4gICAgICBjdXN0b206IHRydWUsXG4gICAgICBpdGVtczogYXJyQXhpcy5tYXAoaWQgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSBgeSR7aWR9YDtcbiAgICAgICAgcmV0dXJuIHsgaWQ6IGtleSwgbmFtZTogdGl0bGVNYXBba2V5XSwgdmFsdWU6IGtleSwgbWFya2VyOiB7IHN0eWxlOiB7IGZpbGw6IGNvbG9yTWFwW2tleV0gfSB9IH0gYXMgVHlwZXMuTGVnZW5kSXRlbTtcbiAgICAgIH0pLFxuICAgIH0pO1xuXG4gICAgLy8gYm9yZGVyXG4gICAgX2NoYXJ0Lmdlb21ldHJpZXMuZm9yRWFjaCgodiwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgIHYuY29sb3IoKGNvbG9yTWFwIGFzIE56U2FmZUFueSlbYHkke2lkeCArIDF9YF0pLnNpemUoYm9yZGVyV2lkdGgpO1xuICAgIH0pO1xuICAgIF9jaGFydC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgX2NoYXJ0LnBhZGRpbmcgPSBwYWRkaW5nO1xuXG4gICAgLy8g6L2s5o2i5oiQ5pel5pyf57G75Z6LXG4gICAgZGF0YSA9IGRhdGFcbiAgICAgIC5tYXAoaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0udGltZSA9IHRvRGF0ZShpdGVtLnRpbWUhKTtcbiAgICAgICAgaXRlbS5fdGltZSA9ICtpdGVtLnRpbWU7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLl90aW1lIC0gYi5fdGltZSk7XG5cbiAgICBjb25zdCBtYXggPSBNYXRoLm1heCguLi5hcnJBeGlzLm1hcChpZCA9PiBbLi4uZGF0YV0uc29ydCgoYSwgYikgPT4gYltgeSR7aWR9YF0gLSBhW2B5JHtpZH1gXSlbMF1bYHkke2lkfWBdKSk7XG4gICAgY29uc3Qgc2NhbGVPcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCBUeXBlcy5TY2FsZU9wdGlvbj4gPSB7fTtcbiAgICBhcnJBeGlzLmZvckVhY2goaWQgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gYHkke2lkfWA7XG4gICAgICBzY2FsZU9wdGlvbnNba2V5XSA9IHtcbiAgICAgICAgYWxpYXM6IHRpdGxlTWFwW2tleV0sXG4gICAgICAgIG1heCxcbiAgICAgICAgbWluOiAwLFxuICAgICAgfTtcbiAgICB9KTtcbiAgICBfY2hhcnQuc2NhbGUoe1xuICAgICAgdGltZToge1xuICAgICAgICB0eXBlOiAndGltZScsXG4gICAgICAgIG1hc2ssXG4gICAgICAgIHJhbmdlOiBbMCwgMV0sXG4gICAgICB9LFxuICAgICAgLi4uc2NhbGVPcHRpb25zLFxuICAgIH0pO1xuXG4gICAgY29uc3QgaW5pdGlhbFJhbmdlID0ge1xuICAgICAgc3RhcnQ6IGRhdGFbMF0uX3RpbWUsXG4gICAgICBlbmQ6IGRhdGFbZGF0YS5sZW5ndGggLSAxXS5fdGltZSxcbiAgICB9O1xuICAgIGNvbnN0IGZpbHRlckRhdGEgPSBkYXRhLmZpbHRlcih2YWwgPT4gdmFsLl90aW1lID49IGluaXRpYWxSYW5nZS5zdGFydCAmJiB2YWwuX3RpbWUgPD0gaW5pdGlhbFJhbmdlLmVuZCk7XG4gICAgX2NoYXJ0LmNoYW5nZURhdGEoZmlsdGVyRGF0YSk7XG4gICAgX2NoYXJ0LnJlbmRlcigpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5hdHRhY2hDaGFydCgpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9jaGFydCkge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5fY2hhcnQuZGVzdHJveSgpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==