/**
 * @fileoverview added by tsickle
 * Generated from: timeline.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, ViewChild, ViewEncapsulation, } from '@angular/core';
import { Chart } from '@antv/g2';
import { deprecation10, InputBoolean, InputNumber } from '@delon/util';
export class G2TimelineData {
}
if (false) {
    /**
     * 时间值
     * @deprecated Use `time` instead
     * @type {?}
     */
    G2TimelineData.prototype.x;
    /**
     * 时间值
     * @type {?}
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
    /* Skipping unhandled member: [key: string]: any;*/
}
export class G2TimelineComponent {
    // #endregion
    /**
     * @param {?} ngZone
     */
    constructor(ngZone) {
        this.ngZone = ngZone;
        // #region fields
        this.delay = 0;
        this.data = [];
        this.colorMap = { y1: '#1890FF', y2: '#2FC25B' };
        this.mask = 'HH:mm';
        this.position = 'top';
        this.height = 450;
        this.padding = [60, 20, 64, 40];
        this.borderWidth = 2;
        this.slider = true;
        this.initialRange = null;
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
        const { node, height, padding, slider } = this;
        /** @type {?} */
        const chart = (this.chart = new Chart({
            container: node.nativeElement,
            autoFit: true,
            height,
            padding,
        }));
        chart.axis('time', { title: null });
        chart.axis('y1', { title: null });
        chart.axis('y2', false);
        chart.line().position('time*y1');
        chart.line().position('time*y2');
        /** @type {?} */
        const sliderPadding = Object.assign(Object.assign({}, []), padding);
        sliderPadding[0] = 0;
        if (slider) {
            chart.option('slider', {
                height: 26,
                start: 0.1,
                end: 0.8,
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
        const { chart, height, padding, data, mask, titleMap, position, colorMap, borderWidth } = this;
        if (!chart || !data || data.length <= 0)
            return;
        chart.legend({
            position,
            custom: true,
            items: [
                { name: titleMap.y1, value: titleMap.y1, marker: { style: { fill: colorMap.y1 } } },
                { name: titleMap.y1, value: titleMap.y2, marker: { style: { fill: colorMap.y2 } } },
            ],
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
        /** @type {?} */
        const max = Math.max(data.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => b.y1 - a.y1))[0].y1, data.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => b.y2 - a.y2))[0].y2);
        chart.scale({
            time: {
                type: 'time',
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
        /** @type {?} */
        const initialRange = Object.assign({ start: new Date((/** @type {?} */ (data[0].time))), end: new Date((/** @type {?} */ (data[data.length - 1].time))) }, this.initialRange);
        chart.changeData(data.filter((/**
         * @param {?} val
         * @return {?}
         */
        (val) => {
            /** @type {?} */
            const time = +new Date((/** @type {?} */ (val.time)));
            return time >= +initialRange.start && time <= +initialRange.end;
        })));
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
    { type: NgZone }
];
G2TimelineComponent.propDecorators = {
    node: [{ type: ViewChild, args: ['container', { static: false },] }],
    delay: [{ type: Input }],
    title: [{ type: Input }],
    data: [{ type: Input }],
    titleMap: [{ type: Input }],
    colorMap: [{ type: Input }],
    mask: [{ type: Input }],
    position: [{ type: Input }],
    height: [{ type: Input }],
    padding: [{ type: Input }],
    borderWidth: [{ type: Input }],
    slider: [{ type: Input }],
    initialRange: [{ type: Input }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2TimelineComponent.prototype, "delay", void 0);
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
    G2TimelineComponent.prototype.initialRange;
    /**
     * @type {?}
     * @private
     */
    G2TimelineComponent.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L3RpbWVsaW5lLyIsInNvdXJjZXMiOlsidGltZWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUtOLFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNqQyxPQUFPLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHdkUsTUFBTSxPQUFPLGNBQWM7Q0FlMUI7Ozs7Ozs7SUFWQywyQkFBMkI7Ozs7O0lBSTNCLDhCQUE4Qjs7Ozs7SUFFOUIsNEJBQVc7Ozs7O0lBRVgsNEJBQVc7OztBQVliLE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBcUI5QixZQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTs7UUFmVixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRXpCLFNBQUksR0FBcUIsRUFBRSxDQUFDO1FBRTVCLGFBQVEsR0FBK0IsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQztRQUN4RSxTQUFJLEdBQVcsT0FBTyxDQUFDO1FBQ3ZCLGFBQVEsR0FBd0MsS0FBSyxDQUFDO1FBQ3ZDLFdBQU0sR0FBRyxHQUFHLENBQUM7UUFDNUIsWUFBTyxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEIsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDZixXQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzlCLGlCQUFZLEdBQXNDLElBQUksQ0FBQztJQUkzQixDQUFDOzs7O0lBRXRDLFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQjs7O1FBQUMsR0FBRyxFQUFFLENBQUMsVUFBVTs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDO0lBQ3BGLENBQUM7Ozs7O0lBRU8sT0FBTztjQUNQLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSTs7Y0FDeEMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQztZQUNwQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDN0IsT0FBTyxFQUFFLElBQUk7WUFDYixNQUFNO1lBQ04sT0FBTztTQUNSLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDcEMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNsQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7O2NBRTNCLGFBQWEsbUNBQVEsRUFBRSxHQUFLLE9BQU8sQ0FBRTtRQUMzQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksTUFBTSxFQUFFO1lBQ1YsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7Z0JBQ3JCLE1BQU0sRUFBRSxFQUFFO2dCQUNWLEtBQUssRUFBRSxHQUFHO2dCQUNWLEdBQUcsRUFBRSxHQUFHO2dCQUNSLFFBQVEsRUFBRTtvQkFDUixNQUFNLEVBQUUsS0FBSztpQkFDZDtnQkFDRCxRQUFRLEVBQUUsQ0FBQzthQUdaLENBQUMsQ0FBQztTQUNKO1FBRUQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRU8sV0FBVztjQUNYLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsR0FBRyxJQUFJO1FBQzlGLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDO1lBQUUsT0FBTztRQUVoRCxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ1gsUUFBUTtZQUNSLE1BQU0sRUFBRSxJQUFJO1lBQ1osS0FBSyxFQUFFO2dCQUNMLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFO2dCQUNuRixFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRTthQUNwRjtTQUNGLENBQUMsQ0FBQztRQUVILFNBQVM7UUFDVCxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBVyxFQUFFLEVBQUU7WUFDMUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLG1CQUFBLFFBQVEsRUFBYSxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNwRSxDQUFDLEVBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRXhCLG1CQUFtQjtRQUNuQixJQUFJLElBQUksQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLElBQUksRUFBRTtZQUNqQyxhQUFhLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsT0FBTzs7OztZQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLG1CQUFBLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQ2hDLENBQUMsRUFBQyxDQUFDO1NBQ0o7O2NBRUssR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7Ozs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUk7Ozs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDcEcsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUNWLElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJO2dCQUNKLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDZDtZQUNELEVBQUUsRUFBRTtnQkFDRixLQUFLLEVBQUUsUUFBUSxDQUFDLEVBQUU7Z0JBQ2xCLEdBQUc7Z0JBQ0gsR0FBRyxFQUFFLENBQUM7YUFDUDtZQUNELEVBQUUsRUFBRTtnQkFDRixLQUFLLEVBQUUsUUFBUSxDQUFDLEVBQUU7Z0JBQ2xCLEdBQUc7Z0JBQ0gsR0FBRyxFQUFFLENBQUM7YUFDUDtTQUNGLENBQUMsQ0FBQzs7Y0FDRyxZQUFZLG1CQUNoQixLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUMsbUJBQUEsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBQyxDQUFDLEVBQzlCLEdBQUcsRUFBRSxJQUFJLElBQUksQ0FBQyxtQkFBQSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxJQUN2QyxJQUFJLENBQUMsWUFBWSxDQUNyQjtRQUNELEtBQUssQ0FBQyxVQUFVLENBQ2QsSUFBSSxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLEdBQW1CLEVBQUUsRUFBRTs7a0JBQzVCLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLG1CQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUMsQ0FBQztZQUNqQyxPQUFPLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQztRQUNsRSxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQjs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFDLENBQUM7SUFDMUQsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQjs7O1lBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBQyxDQUFDO1NBQzNEO0lBQ0gsQ0FBQzs7O1lBeElGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLDZIQUF3QztnQkFDeEMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7O1lBcENDLE1BQU07OzttQkFzQ0wsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7b0JBS3hDLEtBQUs7b0JBQ0wsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUs7cUJBQ0wsS0FBSztzQkFDTCxLQUFLOzBCQUNMLEtBQUs7cUJBQ0wsS0FBSzsyQkFDTCxLQUFLOztBQVhrQjtJQUFkLFdBQVcsRUFBRTs7a0RBQVc7QUFPVjtJQUFkLFdBQVcsRUFBRTs7bURBQWM7QUFFYjtJQUFkLFdBQVcsRUFBRTs7d0RBQWlCO0FBQ2Y7SUFBZixZQUFZLEVBQUU7O21EQUFlOzs7Ozs7SUFmdkMsbUNBQW9FOzs7OztJQUNwRSxvQ0FBcUI7O0lBSXJCLG9DQUFrQzs7SUFDbEMsb0NBQTJDOztJQUMzQyxtQ0FBcUM7O0lBQ3JDLHVDQUE4Qzs7SUFDOUMsdUNBQWlGOztJQUNqRixtQ0FBZ0M7O0lBQ2hDLHVDQUErRDs7SUFDL0QscUNBQXFDOztJQUNyQyxzQ0FBOEM7O0lBQzlDLDBDQUF3Qzs7SUFDeEMscUNBQXVDOztJQUN2QywyQ0FBZ0U7Ozs7O0lBSXBELHFDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXJ0IH0gZnJvbSAnQGFudHYvZzInO1xuaW1wb3J0IHsgZGVwcmVjYXRpb24xMCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBHMlRpbWVsaW5lRGF0YSB7XG4gIC8qKlxuICAgKiDml7bpl7TlgLxcbiAgICogQGRlcHJlY2F0ZWQgVXNlIGB0aW1lYCBpbnN0ZWFkXG4gICAqL1xuICB4PzogRGF0ZSB8IHN0cmluZyB8IG51bWJlcjtcbiAgLyoqXG4gICAqIOaXtumXtOWAvFxuICAgKi9cbiAgdGltZT86IERhdGUgfCBzdHJpbmcgfCBudW1iZXI7XG4gIC8qKiDmjIfmoIcx5pWw5o2uICovXG4gIHkxOiBudW1iZXI7XG4gIC8qKiDmjIfmoIcy5pWw5o2uICovXG4gIHkyOiBudW1iZXI7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItdGltZWxpbmUnLFxuICBleHBvcnRBczogJ2cyVGltZWxpbmUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGltZWxpbmUuY29tcG9uZW50Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEcyVGltZWxpbmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pIHByaXZhdGUgbm9kZTogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBjaGFydDogQ2hhcnQ7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBkZWxheSA9IDA7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgZGF0YTogRzJUaW1lbGluZURhdGFbXSA9IFtdO1xuICBASW5wdXQoKSB0aXRsZU1hcDogeyB5MTogc3RyaW5nOyB5Mjogc3RyaW5nIH07XG4gIEBJbnB1dCgpIGNvbG9yTWFwOiB7IHkxOiBzdHJpbmc7IHkyOiBzdHJpbmcgfSA9IHsgeTE6ICcjMTg5MEZGJywgeTI6ICcjMkZDMjVCJyB9O1xuICBASW5wdXQoKSBtYXNrOiBzdHJpbmcgPSAnSEg6bW0nO1xuICBASW5wdXQoKSBwb3NpdGlvbjogJ3RvcCcgfCAncmlnaHQnIHwgJ2JvdHRvbScgfCAnbGVmdCcgPSAndG9wJztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgaGVpZ2h0ID0gNDUwO1xuICBASW5wdXQoKSBwYWRkaW5nOiBudW1iZXJbXSA9IFs2MCwgMjAsIDY0LCA0MF07XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGJvcmRlcldpZHRoID0gMjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNsaWRlciA9IHRydWU7XG4gIEBJbnB1dCgpIGluaXRpYWxSYW5nZTogeyBzdGFydDogRGF0ZTsgZW5kOiBEYXRlIH0gfCBudWxsID0gbnVsbDtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpLCB0aGlzLmRlbGF5KSk7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGwoKSB7XG4gICAgY29uc3QgeyBub2RlLCBoZWlnaHQsIHBhZGRpbmcsIHNsaWRlciB9ID0gdGhpcztcbiAgICBjb25zdCBjaGFydCA9ICh0aGlzLmNoYXJ0ID0gbmV3IENoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogbm9kZS5uYXRpdmVFbGVtZW50LFxuICAgICAgYXV0b0ZpdDogdHJ1ZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIHBhZGRpbmcsXG4gICAgfSkpO1xuICAgIGNoYXJ0LmF4aXMoJ3RpbWUnLCB7IHRpdGxlOiBudWxsIH0pO1xuICAgIGNoYXJ0LmF4aXMoJ3kxJywgeyB0aXRsZTogbnVsbCB9KTtcbiAgICBjaGFydC5heGlzKCd5MicsIGZhbHNlKTtcblxuICAgIGNoYXJ0LmxpbmUoKS5wb3NpdGlvbigndGltZSp5MScpO1xuICAgIGNoYXJ0LmxpbmUoKS5wb3NpdGlvbigndGltZSp5MicpO1xuXG4gICAgY29uc3Qgc2xpZGVyUGFkZGluZyA9IHsgLi4uW10sIC4uLnBhZGRpbmcgfTtcbiAgICBzbGlkZXJQYWRkaW5nWzBdID0gMDtcbiAgICBpZiAoc2xpZGVyKSB7XG4gICAgICBjaGFydC5vcHRpb24oJ3NsaWRlcicsIHtcbiAgICAgICAgaGVpZ2h0OiAyNixcbiAgICAgICAgc3RhcnQ6IDAuMSxcbiAgICAgICAgZW5kOiAwLjgsXG4gICAgICAgIHRyZW5kQ2ZnOiB7XG4gICAgICAgICAgaXNBcmVhOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgbWluTGltaXQ6IDIsXG4gICAgICAgIC8vIFRyYWNraW5nIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnR2aXMvRzIvaXNzdWVzLzIzMzJcbiAgICAgICAgLy8gbWFzayxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuYXR0YWNoQ2hhcnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoQ2hhcnQoKSB7XG4gICAgY29uc3QgeyBjaGFydCwgaGVpZ2h0LCBwYWRkaW5nLCBkYXRhLCBtYXNrLCB0aXRsZU1hcCwgcG9zaXRpb24sIGNvbG9yTWFwLCBib3JkZXJXaWR0aCB9ID0gdGhpcztcbiAgICBpZiAoIWNoYXJ0IHx8ICFkYXRhIHx8IGRhdGEubGVuZ3RoIDw9IDApIHJldHVybjtcblxuICAgIGNoYXJ0LmxlZ2VuZCh7XG4gICAgICBwb3NpdGlvbixcbiAgICAgIGN1c3RvbTogdHJ1ZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgbmFtZTogdGl0bGVNYXAueTEsIHZhbHVlOiB0aXRsZU1hcC55MSwgbWFya2VyOiB7IHN0eWxlOiB7IGZpbGw6IGNvbG9yTWFwLnkxIH0gfSB9LFxuICAgICAgICB7IG5hbWU6IHRpdGxlTWFwLnkxLCB2YWx1ZTogdGl0bGVNYXAueTIsIG1hcmtlcjogeyBzdHlsZTogeyBmaWxsOiBjb2xvck1hcC55MiB9IH0gfSxcbiAgICAgIF0sXG4gICAgfSk7XG5cbiAgICAvLyBib3JkZXJcbiAgICBjaGFydC5nZW9tZXRyaWVzLmZvckVhY2goKHYsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICB2LmNvbG9yKChjb2xvck1hcCBhcyBOelNhZmVBbnkpW2B5JHtpZHggKyAxfWBdKS5zaXplKGJvcmRlcldpZHRoKTtcbiAgICB9KTtcbiAgICBjaGFydC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgY2hhcnQucGFkZGluZyA9IHBhZGRpbmc7XG5cbiAgICAvLyBUT0RPOiBjb21wYXRpYmxlXG4gICAgaWYgKGRhdGEuZmluZCh3ID0+ICEhdy54KSAhPSBudWxsKSB7XG4gICAgICBkZXByZWNhdGlvbjEwKCdnMi10aW1lbGluZScsICd4JywgJ3RpbWUnKTtcbiAgICAgIGRhdGEuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS50aW1lID0gbmV3IERhdGUoaXRlbS54ISk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBtYXggPSBNYXRoLm1heChkYXRhLnNvcnQoKGEsIGIpID0+IGIueTEgLSBhLnkxKVswXS55MSwgZGF0YS5zb3J0KChhLCBiKSA9PiBiLnkyIC0gYS55MilbMF0ueTIpO1xuICAgIGNoYXJ0LnNjYWxlKHtcbiAgICAgIHRpbWU6IHtcbiAgICAgICAgdHlwZTogJ3RpbWUnLFxuICAgICAgICBtYXNrLFxuICAgICAgICByYW5nZTogWzAsIDFdLFxuICAgICAgfSxcbiAgICAgIHkxOiB7XG4gICAgICAgIGFsaWFzOiB0aXRsZU1hcC55MSxcbiAgICAgICAgbWF4LFxuICAgICAgICBtaW46IDAsXG4gICAgICB9LFxuICAgICAgeTI6IHtcbiAgICAgICAgYWxpYXM6IHRpdGxlTWFwLnkyLFxuICAgICAgICBtYXgsXG4gICAgICAgIG1pbjogMCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY29uc3QgaW5pdGlhbFJhbmdlID0ge1xuICAgICAgc3RhcnQ6IG5ldyBEYXRlKGRhdGFbMF0udGltZSEpLFxuICAgICAgZW5kOiBuZXcgRGF0ZShkYXRhW2RhdGEubGVuZ3RoIC0gMV0udGltZSEpLFxuICAgICAgLi4udGhpcy5pbml0aWFsUmFuZ2UsXG4gICAgfTtcbiAgICBjaGFydC5jaGFuZ2VEYXRhKFxuICAgICAgZGF0YS5maWx0ZXIoKHZhbDogRzJUaW1lbGluZURhdGEpID0+IHtcbiAgICAgICAgY29uc3QgdGltZSA9ICtuZXcgRGF0ZSh2YWwudGltZSEpO1xuICAgICAgICByZXR1cm4gdGltZSA+PSAraW5pdGlhbFJhbmdlLnN0YXJ0ICYmIHRpbWUgPD0gK2luaXRpYWxSYW5nZS5lbmQ7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5hdHRhY2hDaGFydCgpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmNoYXJ0LmRlc3Ryb3koKSk7XG4gICAgfVxuICB9XG59XG4iXX0=