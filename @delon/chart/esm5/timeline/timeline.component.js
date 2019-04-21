/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, ViewChild, } from '@angular/core';
import { InputBoolean, InputNumber } from '@delon/util';
var G2TimelineData = /** @class */ (function () {
    function G2TimelineData() {
    }
    return G2TimelineData;
}());
export { G2TimelineData };
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
var G2TimelineComponent = /** @class */ (function () {
    // #endregion
    function G2TimelineComponent(ngZone) {
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
    G2TimelineComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () { return setTimeout((/**
         * @return {?}
         */
        function () { return _this.install(); }), _this.delay); }));
    };
    /**
     * @private
     * @return {?}
     */
    G2TimelineComponent.prototype.install = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = this, node = _a.node, sliderNode = _a.sliderNode, height = _a.height, padding = _a.padding, mask = _a.mask, slider = _a.slider;
        /** @type {?} */
        var chart = (this.chart = new G2.Chart({
            container: node.nativeElement,
            forceFit: true,
            height: height,
            padding: padding,
        }));
        chart.axis('x', { title: false });
        chart.axis('y1', { title: false });
        chart.axis('y2', false);
        chart.line().position('x*y1');
        chart.line().position('x*y2');
        chart.render();
        /** @type {?} */
        var sliderPadding = tslib_1.__assign({}, [], padding);
        sliderPadding[0] = 0;
        if (slider) {
            /** @type {?} */
            var _slider = (this._slider = new Slider({
                container: sliderNode.nativeElement,
                width: 'auto',
                height: 26,
                padding: sliderPadding,
                scales: {
                    x: {
                        type: 'time',
                        tickInterval: 60 * 60 * 1000,
                        range: [0, 1],
                        mask: mask,
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
    };
    /**
     * @private
     * @return {?}
     */
    G2TimelineComponent.prototype.attachChart = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = this, chart = _a.chart, _slider = _a._slider, slider = _a.slider, height = _a.height, padding = _a.padding, data = _a.data, mask = _a.mask, titleMap = _a.titleMap, position = _a.position, colorMap = _a.colorMap, borderWidth = _a.borderWidth;
        if (!chart || !data || data.length <= 0)
            return;
        chart.legend({
            position: position,
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
        function (v, idx) {
            v.color(colorMap["y" + (idx + 1)]).size(borderWidth);
        }));
        chart.set('height', height);
        chart.set('padding', padding);
        data
            .filter((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return !(v.x instanceof Number); }))
            .forEach((/**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            v.x = +new Date(v.x);
        }));
        data.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) { return +a.x - +b.x; }));
        /** @type {?} */
        var max = Math.max(tslib_1.__spread(data).sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) { return b.y1 - a.y1; }))[0].y1, tslib_1.__spread(data).sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) { return b.y2 - a.y2; }))[0].y2);
        /** @type {?} */
        var ds = new DataSet({
            state: {
                start: data[0].x,
                end: data[data.length - 1].x,
            },
        });
        /** @type {?} */
        var dv = ds.createView();
        dv.source(data).transform({
            type: 'filter',
            callback: (/**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                /** @type {?} */
                var time = +val.x;
                return time >= ds.state.start && time <= ds.state.end;
            }),
        });
        chart.source(dv, {
            x: {
                type: 'timeCat',
                mask: mask,
                range: [0, 1],
            },
            y1: {
                alias: titleMap.y1,
                max: max,
                min: 0,
            },
            y2: {
                alias: titleMap.y2,
                max: max,
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
            function (_a) {
                var startValue = _a.startValue, endValue = _a.endValue;
                ds.setState('start', startValue);
                ds.setState('end', endValue);
            });
            _slider.changeData(data);
        }
    };
    /**
     * @return {?}
     */
    G2TimelineComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () { return _this.attachChart(); }));
    };
    /**
     * @return {?}
     */
    G2TimelineComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.chart) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () { return _this.chart.destroy(); }));
        }
        if (this._slider) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () { return _this._slider.destroy(); }));
        }
    };
    G2TimelineComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-timeline',
                    template: "<ng-container *stringTemplateOutlet=\"title\">\n  <h4>{{title}}</h4>\n</ng-container>\n<div #container></div>\n<div #sliderContainer\n     *ngIf=\"slider\"></div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    G2TimelineComponent.ctorParameters = function () { return [
        { type: NgZone }
    ]; };
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
    return G2TimelineComponent;
}());
export { G2TimelineComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L3RpbWVsaW5lLyIsInNvdXJjZXMiOlsidGltZWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBS04sU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBTXhEO0lBQUE7SUFRQSxDQUFDO0lBQUQscUJBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQzs7Ozs7OztJQU5DLDJCQUEwQjs7Ozs7SUFFMUIsNEJBQVc7Ozs7O0lBRVgsNEJBQVc7OztBQUliO0lBeUJFLGFBQWE7SUFFYiw2QkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7O1FBZFYsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUV6QixTQUFJLEdBQXFCLEVBQUUsQ0FBQztRQUU1QixhQUFRLEdBQStCLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUM7UUFDeEUsU0FBSSxHQUFXLE9BQU8sQ0FBQztRQUN2QixhQUFRLEdBQXdDLEtBQUssQ0FBQztRQUN2QyxXQUFNLEdBQUcsR0FBRyxDQUFDO1FBQzVCLFlBQU8sR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3RCLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsV0FBTSxHQUFHLElBQUksQ0FBQztJQUlGLENBQUM7Ozs7SUFFdEMsc0NBQVE7OztJQUFSO1FBQUEsaUJBRUM7UUFEQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQjs7O1FBQUMsY0FBTSxPQUFBLFVBQVU7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FB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QUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBM0JDLE1BQU07Ozt1QkE2QkwsU0FBUyxTQUFDLFdBQVc7NkJBQ3JCLFNBQVMsU0FBQyxpQkFBaUI7d0JBTTNCLEtBQUs7d0JBQ0wsS0FBSzt1QkFDTCxLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSzt1QkFDTCxLQUFLOzJCQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLOzhCQUNMLEtBQUs7eUJBQ0wsS0FBSzs7SUFWa0I7UUFBZCxXQUFXLEVBQUU7O3NEQUFXO0lBT1Y7UUFBZCxXQUFXLEVBQUU7O3VEQUFjO0lBRWI7UUFBZCxXQUFXLEVBQUU7OzREQUFpQjtJQUNmO1FBQWYsWUFBWSxFQUFFOzt1REFBZTtJQTBJekMsMEJBQUM7Q0FBQSxBQWpLRCxJQWlLQztTQTVKWSxtQkFBbUI7Ozs7OztJQUM5QixtQ0FBaUQ7Ozs7O0lBQ2pELHlDQUE2RDs7Ozs7SUFDN0Qsb0NBQW1COzs7OztJQUNuQixzQ0FBcUI7O0lBSXJCLG9DQUFrQzs7SUFDbEMsb0NBQTJDOztJQUMzQyxtQ0FBcUM7O0lBQ3JDLHVDQUE4Qzs7SUFDOUMsdUNBQWlGOztJQUNqRixtQ0FBZ0M7O0lBQ2hDLHVDQUErRDs7SUFDL0QscUNBQXFDOztJQUNyQyxzQ0FBOEM7O0lBQzlDLDBDQUF3Qzs7SUFDeEMscUNBQXVDOzs7OztJQUkzQixxQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmRlY2xhcmUgdmFyIEcyOiBhbnk7XG5kZWNsYXJlIHZhciBEYXRhU2V0OiBhbnk7XG5kZWNsYXJlIHZhciBTbGlkZXI6IGFueTtcblxuZXhwb3J0IGNsYXNzIEcyVGltZWxpbmVEYXRhIHtcbiAgLyoqIOmdniBgRGF0ZWAg5qC85byP77yM6Ieq5Yqo5L2/55SoIGBuZXcgRGF0ZWAg6L2s5o2i77yM5Zug5q2k77yM5pSv5oyB5pe26Ze05qC85byP5a2X56ym5Liy44CB5pWw5a2X5Z6L5pe26Ze05oizICovXG4gIHg6IERhdGUgfCBzdHJpbmcgfCBudW1iZXI7XG4gIC8qKiDmjIfmoIcx5pWw5o2uICovXG4gIHkxOiBudW1iZXI7XG4gIC8qKiDmjIfmoIcy5pWw5o2uICovXG4gIHkyOiBudW1iZXI7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItdGltZWxpbmUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGltZWxpbmUuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRzJUaW1lbGluZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICBAVmlld0NoaWxkKCdjb250YWluZXInKSBwcml2YXRlIG5vZGU6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3NsaWRlckNvbnRhaW5lcicpIHByaXZhdGUgc2xpZGVyTm9kZTogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBjaGFydDogYW55O1xuICBwcml2YXRlIF9zbGlkZXI6IGFueTtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGRlbGF5ID0gMDtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBkYXRhOiBHMlRpbWVsaW5lRGF0YVtdID0gW107XG4gIEBJbnB1dCgpIHRpdGxlTWFwOiB7IHkxOiBzdHJpbmc7IHkyOiBzdHJpbmcgfTtcbiAgQElucHV0KCkgY29sb3JNYXA6IHsgeTE6IHN0cmluZzsgeTI6IHN0cmluZyB9ID0geyB5MTogJyMxODkwRkYnLCB5MjogJyMyRkMyNUInIH07XG4gIEBJbnB1dCgpIG1hc2s6IHN0cmluZyA9ICdISDptbSc7XG4gIEBJbnB1dCgpIHBvc2l0aW9uOiAndG9wJyB8ICdyaWdodCcgfCAnYm90dG9tJyB8ICdsZWZ0JyA9ICd0b3AnO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQgPSA0MDA7XG4gIEBJbnB1dCgpIHBhZGRpbmc6IG51bWJlcltdID0gWzYwLCAyMCwgNDAsIDQwXTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgYm9yZGVyV2lkdGggPSAyO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2xpZGVyID0gdHJ1ZTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpLCB0aGlzLmRlbGF5KSk7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGwoKSB7XG4gICAgY29uc3QgeyBub2RlLCBzbGlkZXJOb2RlLCBoZWlnaHQsIHBhZGRpbmcsIG1hc2ssIHNsaWRlciB9ID0gdGhpcztcbiAgICBjb25zdCBjaGFydCA9ICh0aGlzLmNoYXJ0ID0gbmV3IEcyLkNoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogbm9kZS5uYXRpdmVFbGVtZW50LFxuICAgICAgZm9yY2VGaXQ6IHRydWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBwYWRkaW5nLFxuICAgIH0pKTtcbiAgICBjaGFydC5heGlzKCd4JywgeyB0aXRsZTogZmFsc2UgfSk7XG4gICAgY2hhcnQuYXhpcygneTEnLCB7IHRpdGxlOiBmYWxzZSB9KTtcbiAgICBjaGFydC5heGlzKCd5MicsIGZhbHNlKTtcblxuICAgIGNoYXJ0LmxpbmUoKS5wb3NpdGlvbigneCp5MScpO1xuICAgIGNoYXJ0LmxpbmUoKS5wb3NpdGlvbigneCp5MicpO1xuXG4gICAgY2hhcnQucmVuZGVyKCk7XG5cbiAgICBjb25zdCBzbGlkZXJQYWRkaW5nID0geyAuLi5bXSwgLi4ucGFkZGluZyB9O1xuICAgIHNsaWRlclBhZGRpbmdbMF0gPSAwO1xuICAgIGlmIChzbGlkZXIpIHtcbiAgICAgIGNvbnN0IF9zbGlkZXIgPSAodGhpcy5fc2xpZGVyID0gbmV3IFNsaWRlcih7XG4gICAgICAgIGNvbnRhaW5lcjogc2xpZGVyTm9kZS5uYXRpdmVFbGVtZW50LFxuICAgICAgICB3aWR0aDogJ2F1dG8nLFxuICAgICAgICBoZWlnaHQ6IDI2LFxuICAgICAgICBwYWRkaW5nOiBzbGlkZXJQYWRkaW5nLFxuICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICB4OiB7XG4gICAgICAgICAgICB0eXBlOiAndGltZScsXG4gICAgICAgICAgICB0aWNrSW50ZXJ2YWw6IDYwICogNjAgKiAxMDAwLFxuICAgICAgICAgICAgcmFuZ2U6IFswLCAxXSxcbiAgICAgICAgICAgIG1hc2ssXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYmFja2dyb3VuZENoYXJ0OiB7XG4gICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICB9LFxuICAgICAgICB4QXhpczogJ3gnLFxuICAgICAgICB5QXhpczogJ3kxJyxcbiAgICAgICAgZGF0YTogW10sXG4gICAgICB9KSk7XG5cbiAgICAgIF9zbGlkZXIucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgdGhpcy5hdHRhY2hDaGFydCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hDaGFydCgpIHtcbiAgICBjb25zdCB7IGNoYXJ0LCBfc2xpZGVyLCBzbGlkZXIsIGhlaWdodCwgcGFkZGluZywgZGF0YSwgbWFzaywgdGl0bGVNYXAsIHBvc2l0aW9uLCBjb2xvck1hcCwgYm9yZGVyV2lkdGggfSA9IHRoaXM7XG4gICAgaWYgKCFjaGFydCB8fCAhZGF0YSB8fCBkYXRhLmxlbmd0aCA8PSAwKSByZXR1cm47XG5cbiAgICBjaGFydC5sZWdlbmQoe1xuICAgICAgcG9zaXRpb24sXG4gICAgICBjdXN0b206IHRydWUsXG4gICAgICBjbGlja2FibGU6IGZhbHNlLFxuICAgICAgaXRlbXM6IFt7IHZhbHVlOiB0aXRsZU1hcC55MSwgZmlsbDogY29sb3JNYXAueTEgfSwgeyB2YWx1ZTogdGl0bGVNYXAueTIsIGZpbGw6IGNvbG9yTWFwLnkyIH1dLFxuICAgIH0pO1xuXG4gICAgLy8gYm9yZGVyXG4gICAgY2hhcnQuZ2V0KCdnZW9tcycpLmZvckVhY2goKHYsIGlkeCkgPT4ge1xuICAgICAgdi5jb2xvcihjb2xvck1hcFtgeSR7aWR4ICsgMX1gXSkuc2l6ZShib3JkZXJXaWR0aCk7XG4gICAgfSk7XG4gICAgY2hhcnQuc2V0KCdoZWlnaHQnLCBoZWlnaHQpO1xuICAgIGNoYXJ0LnNldCgncGFkZGluZycsIHBhZGRpbmcpO1xuXG4gICAgZGF0YVxuICAgICAgLmZpbHRlcih2ID0+ICEodi54IGluc3RhbmNlb2YgTnVtYmVyKSlcbiAgICAgIC5mb3JFYWNoKHYgPT4ge1xuICAgICAgICB2LnggPSArbmV3IERhdGUodi54KTtcbiAgICAgIH0pO1xuICAgIGRhdGEuc29ydCgoYSwgYikgPT4gK2EueCAtICtiLngpO1xuICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KFsuLi5kYXRhXS5zb3J0KChhLCBiKSA9PiBiLnkxIC0gYS55MSlbMF0ueTEsIFsuLi5kYXRhXS5zb3J0KChhLCBiKSA9PiBiLnkyIC0gYS55MilbMF0ueTIpO1xuICAgIGNvbnN0IGRzID0gbmV3IERhdGFTZXQoe1xuICAgICAgc3RhdGU6IHtcbiAgICAgICAgc3RhcnQ6IGRhdGFbMF0ueCxcbiAgICAgICAgZW5kOiBkYXRhW2RhdGEubGVuZ3RoIC0gMV0ueCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY29uc3QgZHYgPSBkcy5jcmVhdGVWaWV3KCk7XG4gICAgZHYuc291cmNlKGRhdGEpLnRyYW5zZm9ybSh7XG4gICAgICB0eXBlOiAnZmlsdGVyJyxcbiAgICAgIGNhbGxiYWNrOiAodmFsOiBHMlRpbWVsaW5lRGF0YSkgPT4ge1xuICAgICAgICBjb25zdCB0aW1lID0gK3ZhbC54O1xuICAgICAgICByZXR1cm4gdGltZSA+PSBkcy5zdGF0ZS5zdGFydCAmJiB0aW1lIDw9IGRzLnN0YXRlLmVuZDtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY2hhcnQuc291cmNlKGR2LCB7XG4gICAgICB4OiB7XG4gICAgICAgIHR5cGU6ICd0aW1lQ2F0JyxcbiAgICAgICAgbWFzayxcbiAgICAgICAgcmFuZ2U6IFswLCAxXSxcbiAgICAgIH0sXG4gICAgICB5MToge1xuICAgICAgICBhbGlhczogdGl0bGVNYXAueTEsXG4gICAgICAgIG1heCxcbiAgICAgICAgbWluOiAwLFxuICAgICAgfSxcbiAgICAgIHkyOiB7XG4gICAgICAgIGFsaWFzOiB0aXRsZU1hcC55MixcbiAgICAgICAgbWF4LFxuICAgICAgICBtaW46IDAsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNoYXJ0LnJlcGFpbnQoKTtcblxuICAgIGlmIChzbGlkZXIpIHtcbiAgICAgIF9zbGlkZXIuc3RhcnQgPSBkcy5zdGF0ZS5zdGFydDtcbiAgICAgIF9zbGlkZXIuZW5kID0gZHMuc3RhdGUuZW5kO1xuICAgICAgX3NsaWRlci5vbkNoYW5nZSA9ICh7IHN0YXJ0VmFsdWUsIGVuZFZhbHVlIH0pID0+IHtcbiAgICAgICAgZHMuc2V0U3RhdGUoJ3N0YXJ0Jywgc3RhcnRWYWx1ZSk7XG4gICAgICAgIGRzLnNldFN0YXRlKCdlbmQnLCBlbmRWYWx1ZSk7XG4gICAgICB9O1xuICAgICAgX3NsaWRlci5jaGFuZ2VEYXRhKGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuYXR0YWNoQ2hhcnQoKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jaGFydCkge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5jaGFydC5kZXN0cm95KCkpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2xpZGVyKSB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLl9zbGlkZXIuZGVzdHJveSgpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==