/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, ViewChild, } from '@angular/core';
import { InputBoolean, InputNumber } from '@delon/util';
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
        this.height = 400;
        this.padding = [60, 20, 40, 40];
        this.borderWidth = 2;
        this.slider = true;
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
        const { node, sliderNode, height, padding, mask, slider } = this;
        /** @type {?} */
        const chart = (this.chart = new G2.Chart({
            container: node.nativeElement,
            forceFit: true,
            height,
            padding,
        }));
        chart.axis('x', { title: false });
        chart.axis('y1', { title: false });
        chart.axis('y2', false);
        chart.line().position('x*y1');
        chart.line().position('x*y2');
        chart.render();
        /** @type {?} */
        const sliderPadding = Object.assign({}, [], padding);
        sliderPadding[0] = 0;
        if (slider) {
            /** @type {?} */
            const _slider = (this._slider = new Slider({
                container: sliderNode.nativeElement,
                width: 'auto',
                height: 26,
                padding: sliderPadding,
                scales: {
                    x: {
                        type: 'time',
                        tickInterval: 60 * 60 * 1000,
                        range: [0, 1],
                        mask,
                    },
                },
                backgroundChart: {
                    type: 'line',
                },
                xAxis: 'x',
                yAxis: 'y1',
                data: [],
            }));
            _slider.render();
        }
        this.attachChart();
    }
    /**
     * @private
     * @return {?}
     */
    attachChart() {
        const { chart, _slider, slider, height, padding, data, mask, titleMap, position, colorMap, borderWidth, } = this;
        if (!chart || !data || data.length <= 0)
            return;
        chart.legend({
            position,
            custom: true,
            clickable: false,
            items: [{ value: titleMap.y1, fill: colorMap.y1 }, { value: titleMap.y2, fill: colorMap.y2 }],
        });
        // border
        chart.get('geoms').forEach((/**
         * @param {?} v
         * @param {?} idx
         * @return {?}
         */
        (v, idx) => {
            v.color(colorMap[`y${idx + 1}`]).size(borderWidth);
        }));
        chart.set('height', height);
        chart.set('padding', padding);
        data
            .filter((/**
         * @param {?} v
         * @return {?}
         */
        v => !(v.x instanceof Number)))
            .forEach((/**
         * @param {?} v
         * @return {?}
         */
        v => {
            v.x = +new Date(v.x);
        }));
        data.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => +a.x - +b.x));
        /** @type {?} */
        const max = Math.max([...data].sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => b.y1 - a.y1))[0].y1, [...data].sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => b.y2 - a.y2))[0].y2);
        /** @type {?} */
        const ds = new DataSet({
            state: {
                start: data[0].x,
                end: data[data.length - 1].x,
            },
        });
        /** @type {?} */
        const dv = ds.createView();
        dv.source(data).transform({
            type: 'filter',
            callback: (/**
             * @param {?} val
             * @return {?}
             */
            (val) => {
                /** @type {?} */
                const time = +val.x;
                return time >= ds.state.start && time <= ds.state.end;
            }),
        });
        chart.source(dv, {
            x: {
                type: 'timeCat',
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
        if (slider) {
            _slider.start = ds.state.start;
            _slider.end = ds.state.end;
            _slider.onChange = (/**
             * @param {?} __0
             * @return {?}
             */
            ({ startValue, endValue }) => {
                ds.setState('start', startValue);
                ds.setState('end', endValue);
            });
            _slider.changeData(data);
        }
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
        if (this._slider) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => this._slider.destroy()));
        }
    }
}
G2TimelineComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-timeline',
                template: "<ng-container *stringTemplateOutlet=\"title\">\n  <h4>{{title}}</h4>\n</ng-container>\n<div #container></div>\n<div #sliderContainer\n     *ngIf=\"slider\"></div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
G2TimelineComponent.ctorParameters = () => [
    { type: NgZone }
];
G2TimelineComponent.propDecorators = {
    node: [{ type: ViewChild, args: ['container',] }],
    sliderNode: [{ type: ViewChild, args: ['sliderContainer',] }],
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
    slider: [{ type: Input }]
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
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
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
    G2TimelineComponent.prototype.sliderNode;
    /**
     * @type {?}
     * @private
     */
    G2TimelineComponent.prototype.chart;
    /**
     * @type {?}
     * @private
     */
    G2TimelineComponent.prototype._slider;
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
    /**
     * @type {?}
     * @private
     */
    G2TimelineComponent.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L3RpbWVsaW5lLyIsInNvdXJjZXMiOlsidGltZWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBS04sU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBTXhELE1BQU0sT0FBTyxjQUFjO0NBUTFCOzs7Ozs7SUFOQywyQkFBMEI7Ozs7O0lBRTFCLDRCQUFXOzs7OztJQUVYLDRCQUFXOzs7QUFTYixNQUFNLE9BQU8sbUJBQW1COzs7OztJQXNCOUIsWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7O1FBZFYsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUV6QixTQUFJLEdBQXFCLEVBQUUsQ0FBQztRQUU1QixhQUFRLEdBQStCLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUM7UUFDeEUsU0FBSSxHQUFXLE9BQU8sQ0FBQztRQUN2QixhQUFRLEdBQXdDLEtBQUssQ0FBQztRQUN2QyxXQUFNLEdBQUcsR0FBRyxDQUFDO1FBQzVCLFlBQU8sR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3RCLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsV0FBTSxHQUFHLElBQUksQ0FBQztJQUlGLENBQUM7Ozs7SUFFdEMsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxVQUFVOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUUsSUFBSSxDQUFDLEtB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QUNMLEtBQUs7cUJBQ0wsS0FBSztzQkFDTCxLQUFLOzBCQUNMLEtBQUs7cUJBQ0wsS0FBSzs7QUFWa0I7SUFBZCxXQUFXLEVBQUU7O2tEQUFXO0FBT1Y7SUFBZCxXQUFXLEVBQUU7O21EQUFjO0FBRWI7SUFBZCxXQUFXLEVBQUU7O3dEQUFpQjtBQUNmO0lBQWYsWUFBWSxFQUFFOzttREFBZTs7Ozs7O0lBakJ2QyxtQ0FBaUQ7Ozs7O0lBQ2pELHlDQUE2RDs7Ozs7SUFDN0Qsb0NBQW1COzs7OztJQUNuQixzQ0FBcUI7O0lBSXJCLG9DQUFrQzs7SUFDbEMsb0NBQTJDOztJQUMzQyxtQ0FBcUM7O0lBQ3JDLHVDQUE4Qzs7SUFDOUMsdUNBQWlGOztJQUNqRixtQ0FBZ0M7O0lBQ2hDLHVDQUErRDs7SUFDL0QscUNBQXFDOztJQUNyQyxzQ0FBOEM7O0lBQzlDLDBDQUF3Qzs7SUFDeEMscUNBQXVDOzs7OztJQUkzQixxQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmRlY2xhcmUgdmFyIEcyOiBhbnk7XG5kZWNsYXJlIHZhciBEYXRhU2V0OiBhbnk7XG5kZWNsYXJlIHZhciBTbGlkZXI6IGFueTtcblxuZXhwb3J0IGNsYXNzIEcyVGltZWxpbmVEYXRhIHtcbiAgLyoqIOmdniBgRGF0ZWAg5qC85byP77yM6Ieq5Yqo5L2/55SoIGBuZXcgRGF0ZWAg6L2s5o2i77yM5Zug5q2k77yM5pSv5oyB5pe26Ze05qC85byP5a2X56ym5Liy44CB5pWw5a2X5Z6L5pe26Ze05oizICovXG4gIHg6IERhdGUgfCBzdHJpbmcgfCBudW1iZXI7XG4gIC8qKiDmjIfmoIcx5pWw5o2uICovXG4gIHkxOiBudW1iZXI7XG4gIC8qKiDmjIfmoIcy5pWw5o2uICovXG4gIHkyOiBudW1iZXI7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItdGltZWxpbmUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGltZWxpbmUuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRzJUaW1lbGluZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICBAVmlld0NoaWxkKCdjb250YWluZXInKSBwcml2YXRlIG5vZGU6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3NsaWRlckNvbnRhaW5lcicpIHByaXZhdGUgc2xpZGVyTm9kZTogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBjaGFydDogYW55O1xuICBwcml2YXRlIF9zbGlkZXI6IGFueTtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGRlbGF5ID0gMDtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBkYXRhOiBHMlRpbWVsaW5lRGF0YVtdID0gW107XG4gIEBJbnB1dCgpIHRpdGxlTWFwOiB7IHkxOiBzdHJpbmc7IHkyOiBzdHJpbmcgfTtcbiAgQElucHV0KCkgY29sb3JNYXA6IHsgeTE6IHN0cmluZzsgeTI6IHN0cmluZyB9ID0geyB5MTogJyMxODkwRkYnLCB5MjogJyMyRkMyNUInIH07XG4gIEBJbnB1dCgpIG1hc2s6IHN0cmluZyA9ICdISDptbSc7XG4gIEBJbnB1dCgpIHBvc2l0aW9uOiAndG9wJyB8ICdyaWdodCcgfCAnYm90dG9tJyB8ICdsZWZ0JyA9ICd0b3AnO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQgPSA0MDA7XG4gIEBJbnB1dCgpIHBhZGRpbmc6IG51bWJlcltdID0gWzYwLCAyMCwgNDAsIDQwXTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgYm9yZGVyV2lkdGggPSAyO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2xpZGVyID0gdHJ1ZTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpLCB0aGlzLmRlbGF5KSk7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGwoKSB7XG4gICAgY29uc3QgeyBub2RlLCBzbGlkZXJOb2RlLCBoZWlnaHQsIHBhZGRpbmcsIG1hc2ssIHNsaWRlciB9ID0gdGhpcztcbiAgICBjb25zdCBjaGFydCA9ICh0aGlzLmNoYXJ0ID0gbmV3IEcyLkNoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogbm9kZS5uYXRpdmVFbGVtZW50LFxuICAgICAgZm9yY2VGaXQ6IHRydWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBwYWRkaW5nLFxuICAgIH0pKTtcbiAgICBjaGFydC5heGlzKCd4JywgeyB0aXRsZTogZmFsc2UgfSk7XG4gICAgY2hhcnQuYXhpcygneTEnLCB7IHRpdGxlOiBmYWxzZSB9KTtcbiAgICBjaGFydC5heGlzKCd5MicsIGZhbHNlKTtcblxuICAgIGNoYXJ0LmxpbmUoKS5wb3NpdGlvbigneCp5MScpO1xuICAgIGNoYXJ0LmxpbmUoKS5wb3NpdGlvbigneCp5MicpO1xuXG4gICAgY2hhcnQucmVuZGVyKCk7XG5cbiAgICBjb25zdCBzbGlkZXJQYWRkaW5nID0geyAuLi5bXSwgLi4ucGFkZGluZyB9O1xuICAgIHNsaWRlclBhZGRpbmdbMF0gPSAwO1xuICAgIGlmIChzbGlkZXIpIHtcbiAgICAgIGNvbnN0IF9zbGlkZXIgPSAodGhpcy5fc2xpZGVyID0gbmV3IFNsaWRlcih7XG4gICAgICAgIGNvbnRhaW5lcjogc2xpZGVyTm9kZS5uYXRpdmVFbGVtZW50LFxuICAgICAgICB3aWR0aDogJ2F1dG8nLFxuICAgICAgICBoZWlnaHQ6IDI2LFxuICAgICAgICBwYWRkaW5nOiBzbGlkZXJQYWRkaW5nLFxuICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICB4OiB7XG4gICAgICAgICAgICB0eXBlOiAndGltZScsXG4gICAgICAgICAgICB0aWNrSW50ZXJ2YWw6IDYwICogNjAgKiAxMDAwLFxuICAgICAgICAgICAgcmFuZ2U6IFswLCAxXSxcbiAgICAgICAgICAgIG1hc2ssXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYmFja2dyb3VuZENoYXJ0OiB7XG4gICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICB9LFxuICAgICAgICB4QXhpczogJ3gnLFxuICAgICAgICB5QXhpczogJ3kxJyxcbiAgICAgICAgZGF0YTogW10sXG4gICAgICB9KSk7XG5cbiAgICAgIF9zbGlkZXIucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgdGhpcy5hdHRhY2hDaGFydCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hDaGFydCgpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGFydCxcbiAgICAgIF9zbGlkZXIsXG4gICAgICBzbGlkZXIsXG4gICAgICBoZWlnaHQsXG4gICAgICBwYWRkaW5nLFxuICAgICAgZGF0YSxcbiAgICAgIG1hc2ssXG4gICAgICB0aXRsZU1hcCxcbiAgICAgIHBvc2l0aW9uLFxuICAgICAgY29sb3JNYXAsXG4gICAgICBib3JkZXJXaWR0aCxcbiAgICB9ID0gdGhpcztcbiAgICBpZiAoIWNoYXJ0IHx8ICFkYXRhIHx8IGRhdGEubGVuZ3RoIDw9IDApIHJldHVybjtcblxuICAgIGNoYXJ0LmxlZ2VuZCh7XG4gICAgICBwb3NpdGlvbixcbiAgICAgIGN1c3RvbTogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogZmFsc2UsXG4gICAgICBpdGVtczogW3sgdmFsdWU6IHRpdGxlTWFwLnkxLCBmaWxsOiBjb2xvck1hcC55MSB9LCB7IHZhbHVlOiB0aXRsZU1hcC55MiwgZmlsbDogY29sb3JNYXAueTIgfV0sXG4gICAgfSk7XG5cbiAgICAvLyBib3JkZXJcbiAgICBjaGFydC5nZXQoJ2dlb21zJykuZm9yRWFjaCgodiwgaWR4KSA9PiB7XG4gICAgICB2LmNvbG9yKGNvbG9yTWFwW2B5JHtpZHggKyAxfWBdKS5zaXplKGJvcmRlcldpZHRoKTtcbiAgICB9KTtcbiAgICBjaGFydC5zZXQoJ2hlaWdodCcsIGhlaWdodCk7XG4gICAgY2hhcnQuc2V0KCdwYWRkaW5nJywgcGFkZGluZyk7XG5cbiAgICBkYXRhXG4gICAgICAuZmlsdGVyKHYgPT4gISh2LnggaW5zdGFuY2VvZiBOdW1iZXIpKVxuICAgICAgLmZvckVhY2godiA9PiB7XG4gICAgICAgIHYueCA9ICtuZXcgRGF0ZSh2LngpO1xuICAgICAgfSk7XG4gICAgZGF0YS5zb3J0KChhLCBiKSA9PiArYS54IC0gK2IueCk7XG4gICAgY29uc3QgbWF4ID0gTWF0aC5tYXgoXG4gICAgICBbLi4uZGF0YV0uc29ydCgoYSwgYikgPT4gYi55MSAtIGEueTEpWzBdLnkxLFxuICAgICAgWy4uLmRhdGFdLnNvcnQoKGEsIGIpID0+IGIueTIgLSBhLnkyKVswXS55MixcbiAgICApO1xuICAgIGNvbnN0IGRzID0gbmV3IERhdGFTZXQoe1xuICAgICAgc3RhdGU6IHtcbiAgICAgICAgc3RhcnQ6IGRhdGFbMF0ueCxcbiAgICAgICAgZW5kOiBkYXRhW2RhdGEubGVuZ3RoIC0gMV0ueCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY29uc3QgZHYgPSBkcy5jcmVhdGVWaWV3KCk7XG4gICAgZHYuc291cmNlKGRhdGEpLnRyYW5zZm9ybSh7XG4gICAgICB0eXBlOiAnZmlsdGVyJyxcbiAgICAgIGNhbGxiYWNrOiAodmFsOiBHMlRpbWVsaW5lRGF0YSkgPT4ge1xuICAgICAgICBjb25zdCB0aW1lID0gK3ZhbC54O1xuICAgICAgICByZXR1cm4gdGltZSA+PSBkcy5zdGF0ZS5zdGFydCAmJiB0aW1lIDw9IGRzLnN0YXRlLmVuZDtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY2hhcnQuc291cmNlKGR2LCB7XG4gICAgICB4OiB7XG4gICAgICAgIHR5cGU6ICd0aW1lQ2F0JyxcbiAgICAgICAgbWFzayxcbiAgICAgICAgcmFuZ2U6IFswLCAxXSxcbiAgICAgIH0sXG4gICAgICB5MToge1xuICAgICAgICBhbGlhczogdGl0bGVNYXAueTEsXG4gICAgICAgIG1heCxcbiAgICAgICAgbWluOiAwLFxuICAgICAgfSxcbiAgICAgIHkyOiB7XG4gICAgICAgIGFsaWFzOiB0aXRsZU1hcC55MixcbiAgICAgICAgbWF4LFxuICAgICAgICBtaW46IDAsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNoYXJ0LnJlcGFpbnQoKTtcblxuICAgIGlmIChzbGlkZXIpIHtcbiAgICAgIF9zbGlkZXIuc3RhcnQgPSBkcy5zdGF0ZS5zdGFydDtcbiAgICAgIF9zbGlkZXIuZW5kID0gZHMuc3RhdGUuZW5kO1xuICAgICAgX3NsaWRlci5vbkNoYW5nZSA9ICh7IHN0YXJ0VmFsdWUsIGVuZFZhbHVlIH0pID0+IHtcbiAgICAgICAgZHMuc2V0U3RhdGUoJ3N0YXJ0Jywgc3RhcnRWYWx1ZSk7XG4gICAgICAgIGRzLnNldFN0YXRlKCdlbmQnLCBlbmRWYWx1ZSk7XG4gICAgICB9O1xuICAgICAgX3NsaWRlci5jaGFuZ2VEYXRhKGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuYXR0YWNoQ2hhcnQoKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jaGFydCkge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5jaGFydC5kZXN0cm95KCkpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2xpZGVyKSB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLl9zbGlkZXIuZGVzdHJveSgpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==