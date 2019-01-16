/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// tslint:disable:no-any
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
        this.ngZone.runOutsideAngular(function () { return setTimeout(function () { return _this.install(); }, _this.delay); });
    };
    /**
     * @return {?}
     */
    G2TimelineComponent.prototype.install = /**
     * @return {?}
     */
    function () {
        var _a = this, node = _a.node, sliderNode = _a.sliderNode, height = _a.height, padding = _a.padding, mask = _a.mask, slider = _a.slider;
        /** @type {?} */
        var chart = this.chart = new G2.Chart({
            container: node.nativeElement,
            forceFit: true,
            height: height,
            padding: padding,
        });
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
            var _slider = this._slider = new Slider({
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
            });
            _slider.render();
        }
        this.attachChart();
    };
    /**
     * @return {?}
     */
    G2TimelineComponent.prototype.attachChart = /**
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
            items: [
                { value: titleMap.y1, fill: colorMap.y1 },
                { value: titleMap.y2, fill: colorMap.y2 },
            ],
        });
        // border
        chart.get('geoms').forEach(function (v, idx) {
            v.color(colorMap["y" + (idx + 1)]).size(borderWidth);
        });
        chart.set('height', height);
        chart.set('padding', padding);
        data.filter(function (v) { return !(v.x instanceof Number); }).forEach(function (v) {
            v.x = +new Date(v.x);
        });
        data.sort(function (a, b) { return +a.x - +b.x; });
        /** @type {?} */
        var max;
        if (data[0] && data[0].y1 && data[0].y2) {
            max = Math.max(tslib_1.__spread(data).sort(function (a, b) { return b.y1 - a.y1; })[0].y1, tslib_1.__spread(data).sort(function (a, b) { return b.y2 - a.y2; })[0].y2);
        }
        /** @type {?} */
        var ds = new DataSet({
            state: {
                start: data[0].x,
                end: data[data.length - 1].x,
            },
        });
        /** @type {?} */
        var dv = ds.createView();
        dv.source(data)
            .transform({
            type: 'filter',
            callback: function (val) {
                /** @type {?} */
                var time = +val.x;
                return time >= ds.state.start && time <= ds.state.end;
            },
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
            _slider.onChange = function (_a) {
                var startValue = _a.startValue, endValue = _a.endValue;
                ds.setState('start', startValue);
                ds.setState('end', endValue);
            };
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
        this.ngZone.runOutsideAngular(function () { return _this.attachChart(); });
    };
    /**
     * @return {?}
     */
    G2TimelineComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.chart)
            this.chart.destroy();
        if (this._slider)
            this._slider.destroy();
    };
    G2TimelineComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-timeline',
                    template: "<ng-container *stringTemplateOutlet=\"title\"><h4>{{title}}</h4></ng-container>\n<div #container></div>\n<div #sliderContainer *ngIf=\"slider\"></div>\n",
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
    /** @type {?} */
    G2TimelineComponent.prototype.node;
    /** @type {?} */
    G2TimelineComponent.prototype.sliderNode;
    /** @type {?} */
    G2TimelineComponent.prototype.chart;
    /** @type {?} */
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
    /** @type {?} */
    G2TimelineComponent.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L3RpbWVsaW5lLyIsInNvdXJjZXMiOlsidGltZWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUtOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU14RDtJQUFBO0lBUUEsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7Ozs7Ozs7SUFOQywyQkFBMEI7Ozs7O0lBRTFCLDRCQUFXOzs7OztJQUVYLDRCQUFXOzs7QUFJYjtJQTBCRSxhQUFhO0lBRWIsNkJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFROztRQWRWLFVBQUssR0FBRyxDQUFDLENBQUM7UUFFekIsU0FBSSxHQUFxQixFQUFFLENBQUM7UUFFNUIsYUFBUSxHQUErQixFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDO1FBQ3hFLFNBQUksR0FBVyxPQUFPLENBQUM7UUFDdkIsYUFBUSxHQUF3QyxLQUFLLENBQUM7UUFDdkMsV0FBTSxHQUFHLEdBQUcsQ0FBQztRQUM1QixZQUFPLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0QixnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNmLFdBQU0sR0FBRyxJQUFJLENBQUM7SUFJRixDQUFDOzs7O0lBRXRDLHNDQUFROzs7SUFBUjtRQUFBLGlCQUVDO1FBREMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxjQUFNLE9BQUEsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxF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QUNMLEtBQUs7dUJBQ0wsS0FBSzsyQkFDTCxLQUFLOzJCQUNMLEtBQUs7dUJBQ0wsS0FBSzsyQkFDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzs4QkFDTCxLQUFLO3lCQUNMLEtBQUs7O0lBVmtCO1FBQWQsV0FBVyxFQUFFOztzREFBVztJQU9WO1FBQWQsV0FBVyxFQUFFOzt1REFBYztJQUViO1FBQWQsV0FBVyxFQUFFOzs0REFBaUI7SUFDZjtRQUFmLFlBQVksRUFBRTs7dURBQWU7SUErSXpDLDBCQUFDO0NBQUEsQUF2S0QsSUF1S0M7U0FsS1ksbUJBQW1COzs7SUFFOUIsbUNBQWlEOztJQUNqRCx5Q0FBNkQ7O0lBQzdELG9DQUFtQjs7SUFDbkIsc0NBQXFCOztJQUlyQixvQ0FBa0M7O0lBQ2xDLG9DQUEyQzs7SUFDM0MsbUNBQXFDOztJQUNyQyx1Q0FBOEM7O0lBQzlDLHVDQUFpRjs7SUFDakYsbUNBQWdDOztJQUNoQyx1Q0FBK0Q7O0lBQy9ELHFDQUFxQzs7SUFDckMsc0NBQThDOztJQUM5QywwQ0FBd0M7O0lBQ3hDLHFDQUF1Qzs7SUFJM0IscUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmRlY2xhcmUgdmFyIEcyOiBhbnk7XG5kZWNsYXJlIHZhciBEYXRhU2V0OiBhbnk7XG5kZWNsYXJlIHZhciBTbGlkZXI6IGFueTtcblxuZXhwb3J0IGNsYXNzIEcyVGltZWxpbmVEYXRhIHtcbiAgLyoqIOmdniBgRGF0ZWAg5qC85byP77yM6Ieq5Yqo5L2/55SoIGBuZXcgRGF0ZWAg6L2s5o2i77yM5Zug5q2k77yM5pSv5oyB5pe26Ze05qC85byP5a2X56ym5Liy44CB5pWw5a2X5Z6L5pe26Ze05oizICovXG4gIHg6IERhdGUgfCBzdHJpbmcgfCBudW1iZXI7XG4gIC8qKiDmjIfmoIcx5pWw5o2uICovXG4gIHkxOiBudW1iZXI7XG4gIC8qKiDmjIfmoIcy5pWw5o2uICovXG4gIHkyOiBudW1iZXI7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItdGltZWxpbmUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGltZWxpbmUuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRzJUaW1lbGluZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicpIHByaXZhdGUgbm9kZTogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnc2xpZGVyQ29udGFpbmVyJykgcHJpdmF0ZSBzbGlkZXJOb2RlOiBFbGVtZW50UmVmO1xuICBwcml2YXRlIGNoYXJ0OiBhbnk7XG4gIHByaXZhdGUgX3NsaWRlcjogYW55O1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXkgPSAwO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGRhdGE6IEcyVGltZWxpbmVEYXRhW10gPSBbXTtcbiAgQElucHV0KCkgdGl0bGVNYXA6IHsgeTE6IHN0cmluZzsgeTI6IHN0cmluZyB9O1xuICBASW5wdXQoKSBjb2xvck1hcDogeyB5MTogc3RyaW5nOyB5Mjogc3RyaW5nIH0gPSB7IHkxOiAnIzE4OTBGRicsIHkyOiAnIzJGQzI1QicgfTtcbiAgQElucHV0KCkgbWFzazogc3RyaW5nID0gJ0hIOm1tJztcbiAgQElucHV0KCkgcG9zaXRpb246ICd0b3AnIHwgJ3JpZ2h0JyB8ICdib3R0b20nIHwgJ2xlZnQnID0gJ3RvcCc7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGhlaWdodCA9IDQwMDtcbiAgQElucHV0KCkgcGFkZGluZzogbnVtYmVyW10gPSBbNjAsIDIwLCA0MCwgNDBdO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBib3JkZXJXaWR0aCA9IDI7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzbGlkZXIgPSB0cnVlO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nWm9uZTogTmdab25lKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnN0YWxsKCksIHRoaXMuZGVsYXkpKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5zdGFsbCgpIHtcbiAgICBjb25zdCB7IG5vZGUsIHNsaWRlck5vZGUsIGhlaWdodCwgcGFkZGluZywgbWFzaywgc2xpZGVyIH0gPSB0aGlzO1xuICAgIGNvbnN0IGNoYXJ0ID0gdGhpcy5jaGFydCA9IG5ldyBHMi5DaGFydCh7XG4gICAgICBjb250YWluZXI6IG5vZGUubmF0aXZlRWxlbWVudCxcbiAgICAgIGZvcmNlRml0OiB0cnVlLFxuICAgICAgaGVpZ2h0LFxuICAgICAgcGFkZGluZyxcbiAgICB9KTtcbiAgICBjaGFydC5heGlzKCd4JywgeyB0aXRsZTogZmFsc2UgfSk7XG4gICAgY2hhcnQuYXhpcygneTEnLCB7IHRpdGxlOiBmYWxzZSB9KTtcbiAgICBjaGFydC5heGlzKCd5MicsIGZhbHNlKTtcblxuICAgIGNoYXJ0LmxpbmUoKS5wb3NpdGlvbigneCp5MScpO1xuICAgIGNoYXJ0LmxpbmUoKS5wb3NpdGlvbigneCp5MicpO1xuXG4gICAgY2hhcnQucmVuZGVyKCk7XG5cbiAgICBjb25zdCBzbGlkZXJQYWRkaW5nID0geyAuLi5bXSwgLi4ucGFkZGluZyB9O1xuICAgIHNsaWRlclBhZGRpbmdbMF0gPSAwO1xuICAgIGlmIChzbGlkZXIpIHtcbiAgICAgIGNvbnN0IF9zbGlkZXIgPSB0aGlzLl9zbGlkZXIgPSBuZXcgU2xpZGVyKHtcbiAgICAgICAgY29udGFpbmVyOiBzbGlkZXJOb2RlLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIHdpZHRoOiAnYXV0bycsXG4gICAgICAgIGhlaWdodDogMjYsXG4gICAgICAgIHBhZGRpbmc6IHNsaWRlclBhZGRpbmcsXG4gICAgICAgIHNjYWxlczoge1xuICAgICAgICAgIHg6IHtcbiAgICAgICAgICAgIHR5cGU6ICd0aW1lJyxcbiAgICAgICAgICAgIHRpY2tJbnRlcnZhbDogNjAgKiA2MCAqIDEwMDAsXG4gICAgICAgICAgICByYW5nZTogWzAsIDFdLFxuICAgICAgICAgICAgbWFzayxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBiYWNrZ3JvdW5kQ2hhcnQ6IHtcbiAgICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgIH0sXG4gICAgICAgIHhBeGlzOiAneCcsXG4gICAgICAgIHlBeGlzOiAneTEnLFxuICAgICAgICBkYXRhOiBbXSxcbiAgICAgIH0pO1xuXG4gICAgICBfc2xpZGVyLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHRoaXMuYXR0YWNoQ2hhcnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoQ2hhcnQoKSB7XG4gICAgY29uc3QgeyBjaGFydCwgX3NsaWRlciwgc2xpZGVyLCBoZWlnaHQsIHBhZGRpbmcsIGRhdGEsIG1hc2ssIHRpdGxlTWFwLCBwb3NpdGlvbiwgY29sb3JNYXAsIGJvcmRlcldpZHRoIH0gPSB0aGlzO1xuICAgIGlmICghY2hhcnQgfHwgIWRhdGEgfHwgZGF0YS5sZW5ndGggPD0gMCkgcmV0dXJuIDtcblxuICAgIGNoYXJ0LmxlZ2VuZCh7XG4gICAgICBwb3NpdGlvbixcbiAgICAgIGN1c3RvbTogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHZhbHVlOiB0aXRsZU1hcC55MSwgZmlsbDogY29sb3JNYXAueTEgfSxcbiAgICAgICAgeyB2YWx1ZTogdGl0bGVNYXAueTIsIGZpbGw6IGNvbG9yTWFwLnkyIH0sXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgLy8gYm9yZGVyXG4gICAgY2hhcnQuZ2V0KCdnZW9tcycpLmZvckVhY2goKHYsIGlkeCkgPT4ge1xuICAgICAgdi5jb2xvcihjb2xvck1hcFtgeSR7aWR4ICsgMX1gXSkuc2l6ZShib3JkZXJXaWR0aCk7XG4gICAgfSk7XG4gICAgY2hhcnQuc2V0KCdoZWlnaHQnLCBoZWlnaHQpO1xuICAgIGNoYXJ0LnNldCgncGFkZGluZycsIHBhZGRpbmcpO1xuXG4gICAgZGF0YS5maWx0ZXIodiA9PiAhKHYueCBpbnN0YW5jZW9mIE51bWJlcikpLmZvckVhY2godiA9PiB7XG4gICAgICB2LnggPSArbmV3IERhdGUodi54KTtcbiAgICB9KTtcbiAgICBkYXRhLnNvcnQoKGEsIGIpID0+ICthLnggLSArYi54KTtcbiAgICBsZXQgbWF4O1xuICAgIGlmIChkYXRhWzBdICYmIGRhdGFbMF0ueTEgJiYgZGF0YVswXS55Mikge1xuICAgICAgbWF4ID0gTWF0aC5tYXgoXG4gICAgICAgIFsuLi5kYXRhXS5zb3J0KChhLCBiKSA9PiBiLnkxIC0gYS55MSlbMF0ueTEsXG4gICAgICAgIFsuLi5kYXRhXS5zb3J0KChhLCBiKSA9PiBiLnkyIC0gYS55MilbMF0ueTIsXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCBkcyA9IG5ldyBEYXRhU2V0KHtcbiAgICAgIHN0YXRlOiB7XG4gICAgICAgIHN0YXJ0OiBkYXRhWzBdLngsXG4gICAgICAgIGVuZDogZGF0YVtkYXRhLmxlbmd0aCAtIDFdLngsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IGR2ID0gZHMuY3JlYXRlVmlldygpO1xuICAgIGR2LnNvdXJjZShkYXRhKVxuICAgICAgLnRyYW5zZm9ybSh7XG4gICAgICAgIHR5cGU6ICdmaWx0ZXInLFxuICAgICAgICBjYWxsYmFjazogKHZhbDogRzJUaW1lbGluZURhdGEpID0+IHtcbiAgICAgICAgICBjb25zdCB0aW1lID0gK3ZhbC54O1xuICAgICAgICAgIHJldHVybiB0aW1lID49IGRzLnN0YXRlLnN0YXJ0ICYmIHRpbWUgPD0gZHMuc3RhdGUuZW5kO1xuICAgICAgICB9LFxuICAgICAgfSlcbiAgICA7XG4gICAgY2hhcnQuc291cmNlKGR2LCB7XG4gICAgICB4OiB7XG4gICAgICAgIHR5cGU6ICd0aW1lQ2F0JyxcbiAgICAgICAgbWFzayxcbiAgICAgICAgcmFuZ2U6IFswLCAxXSxcbiAgICAgIH0sXG4gICAgICB5MToge1xuICAgICAgICBhbGlhczogdGl0bGVNYXAueTEsXG4gICAgICAgIG1heCxcbiAgICAgICAgbWluOiAwLFxuICAgICAgfSxcbiAgICAgIHkyOiB7XG4gICAgICAgIGFsaWFzOiB0aXRsZU1hcC55MixcbiAgICAgICAgbWF4LFxuICAgICAgICBtaW46IDAsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNoYXJ0LnJlcGFpbnQoKTtcblxuICAgIGlmIChzbGlkZXIpIHtcbiAgICAgIF9zbGlkZXIuc3RhcnQgPSBkcy5zdGF0ZS5zdGFydDtcbiAgICAgIF9zbGlkZXIuZW5kID0gZHMuc3RhdGUuZW5kO1xuICAgICAgX3NsaWRlci5vbkNoYW5nZSA9ICh7IHN0YXJ0VmFsdWUsIGVuZFZhbHVlIH0pID0+IHtcbiAgICAgICAgZHMuc2V0U3RhdGUoJ3N0YXJ0Jywgc3RhcnRWYWx1ZSk7XG4gICAgICAgIGRzLnNldFN0YXRlKCdlbmQnLCBlbmRWYWx1ZSk7XG4gICAgICB9O1xuICAgICAgX3NsaWRlci5jaGFuZ2VEYXRhKGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuYXR0YWNoQ2hhcnQoKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jaGFydCkgdGhpcy5jaGFydC5kZXN0cm95KCk7XG4gICAgaWYgKHRoaXMuX3NsaWRlcikgdGhpcy5fc2xpZGVyLmRlc3Ryb3koKTtcbiAgfVxufVxuIl19