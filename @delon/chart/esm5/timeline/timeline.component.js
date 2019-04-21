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
                    exportAs: 'g2Timeline',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L3RpbWVsaW5lLyIsInNvdXJjZXMiOlsidGltZWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBS04sU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBTXhEO0lBQUE7SUFRQSxDQUFDO0lBQUQscUJBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQzs7Ozs7OztJQU5DLDJCQUEwQjs7Ozs7SUFFMUIsNEJBQVc7Ozs7O0lBRVgsNEJBQVc7OztBQUliO0lBMEJFLGFBQWE7SUFFYiw2QkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7O1FBZFYsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUV6QixTQUFJLEdBQXFCLEVBQUUsQ0FBQztRQUU1QixhQUFRLEdBQStCLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUM7UUFDeEUsU0FBSSxHQUFXLE9BQU8sQ0FBQztRQUN2QixhQUFRLEdBQXdDLEtBQUssQ0FBQztRQUN2QyxXQUFNLEdBQUcsR0FBRyxDQUFDO1FBQzVCLFlBQU8sR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3RCLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsV0FBTSxHQUFHLElBQUksQ0FBQztJQUlGLENBQUM7Ozs7SUFFdEMsc0NBQVE7OztJQUFSO1FBQUEsaUJBRUM7UUFEQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQjs7O1FBQUMsY0FBTSxPQUFBLFVBQVU7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FB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LGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkE1QkMsTUFBTTs7O3VCQThCTCxTQUFTLFNBQUMsV0FBVzs2QkFDckIsU0FBUyxTQUFDLGlCQUFpQjt3QkFNM0IsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7OEJBQ0wsS0FBSzt5QkFDTCxLQUFLOztJQVZrQjtRQUFkLFdBQVcsRUFBRTs7c0RBQVc7SUFPVjtRQUFkLFdBQVcsRUFBRTs7dURBQWM7SUFFYjtRQUFkLFdBQVcsRUFBRTs7NERBQWlCO0lBQ2Y7UUFBZixZQUFZLEVBQUU7O3VEQUFlO0lBeUp6QywwQkFBQztDQUFBLEFBakxELElBaUxDO1NBM0tZLG1CQUFtQjs7Ozs7O0lBQzlCLG1DQUFpRDs7Ozs7SUFDakQseUNBQTZEOzs7OztJQUM3RCxvQ0FBbUI7Ozs7O0lBQ25CLHNDQUFxQjs7SUFJckIsb0NBQWtDOztJQUNsQyxvQ0FBMkM7O0lBQzNDLG1DQUFxQzs7SUFDckMsdUNBQThDOztJQUM5Qyx1Q0FBaUY7O0lBQ2pGLG1DQUFnQzs7SUFDaEMsdUNBQStEOztJQUMvRCxxQ0FBcUM7O0lBQ3JDLHNDQUE4Qzs7SUFDOUMsMENBQXdDOztJQUN4QyxxQ0FBdUM7Ozs7O0lBSTNCLHFDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuZGVjbGFyZSB2YXIgRzI6IGFueTtcbmRlY2xhcmUgdmFyIERhdGFTZXQ6IGFueTtcbmRlY2xhcmUgdmFyIFNsaWRlcjogYW55O1xuXG5leHBvcnQgY2xhc3MgRzJUaW1lbGluZURhdGEge1xuICAvKiog6Z2eIGBEYXRlYCDmoLzlvI/vvIzoh6rliqjkvb/nlKggYG5ldyBEYXRlYCDovazmjaLvvIzlm6DmraTvvIzmlK/mjIHml7bpl7TmoLzlvI/lrZfnrKbkuLLjgIHmlbDlrZflnovml7bpl7TmiLMgKi9cbiAgeDogRGF0ZSB8IHN0cmluZyB8IG51bWJlcjtcbiAgLyoqIOaMh+aghzHmlbDmja4gKi9cbiAgeTE6IG51bWJlcjtcbiAgLyoqIOaMh+aghzLmlbDmja4gKi9cbiAgeTI6IG51bWJlcjtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi10aW1lbGluZScsXG4gIGV4cG9ydEFzOiAnZzJUaW1lbGluZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lbGluZS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBHMlRpbWVsaW5lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicpIHByaXZhdGUgbm9kZTogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnc2xpZGVyQ29udGFpbmVyJykgcHJpdmF0ZSBzbGlkZXJOb2RlOiBFbGVtZW50UmVmO1xuICBwcml2YXRlIGNoYXJ0OiBhbnk7XG4gIHByaXZhdGUgX3NsaWRlcjogYW55O1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXkgPSAwO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGRhdGE6IEcyVGltZWxpbmVEYXRhW10gPSBbXTtcbiAgQElucHV0KCkgdGl0bGVNYXA6IHsgeTE6IHN0cmluZzsgeTI6IHN0cmluZyB9O1xuICBASW5wdXQoKSBjb2xvck1hcDogeyB5MTogc3RyaW5nOyB5Mjogc3RyaW5nIH0gPSB7IHkxOiAnIzE4OTBGRicsIHkyOiAnIzJGQzI1QicgfTtcbiAgQElucHV0KCkgbWFzazogc3RyaW5nID0gJ0hIOm1tJztcbiAgQElucHV0KCkgcG9zaXRpb246ICd0b3AnIHwgJ3JpZ2h0JyB8ICdib3R0b20nIHwgJ2xlZnQnID0gJ3RvcCc7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGhlaWdodCA9IDQwMDtcbiAgQElucHV0KCkgcGFkZGluZzogbnVtYmVyW10gPSBbNjAsIDIwLCA0MCwgNDBdO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBib3JkZXJXaWR0aCA9IDI7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzbGlkZXIgPSB0cnVlO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nWm9uZTogTmdab25lKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnN0YWxsKCksIHRoaXMuZGVsYXkpKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5zdGFsbCgpIHtcbiAgICBjb25zdCB7IG5vZGUsIHNsaWRlck5vZGUsIGhlaWdodCwgcGFkZGluZywgbWFzaywgc2xpZGVyIH0gPSB0aGlzO1xuICAgIGNvbnN0IGNoYXJ0ID0gKHRoaXMuY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xuICAgICAgY29udGFpbmVyOiBub2RlLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBmb3JjZUZpdDogdHJ1ZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIHBhZGRpbmcsXG4gICAgfSkpO1xuICAgIGNoYXJ0LmF4aXMoJ3gnLCB7IHRpdGxlOiBmYWxzZSB9KTtcbiAgICBjaGFydC5heGlzKCd5MScsIHsgdGl0bGU6IGZhbHNlIH0pO1xuICAgIGNoYXJ0LmF4aXMoJ3kyJywgZmFsc2UpO1xuXG4gICAgY2hhcnQubGluZSgpLnBvc2l0aW9uKCd4KnkxJyk7XG4gICAgY2hhcnQubGluZSgpLnBvc2l0aW9uKCd4KnkyJyk7XG5cbiAgICBjaGFydC5yZW5kZXIoKTtcblxuICAgIGNvbnN0IHNsaWRlclBhZGRpbmcgPSB7IC4uLltdLCAuLi5wYWRkaW5nIH07XG4gICAgc2xpZGVyUGFkZGluZ1swXSA9IDA7XG4gICAgaWYgKHNsaWRlcikge1xuICAgICAgY29uc3QgX3NsaWRlciA9ICh0aGlzLl9zbGlkZXIgPSBuZXcgU2xpZGVyKHtcbiAgICAgICAgY29udGFpbmVyOiBzbGlkZXJOb2RlLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIHdpZHRoOiAnYXV0bycsXG4gICAgICAgIGhlaWdodDogMjYsXG4gICAgICAgIHBhZGRpbmc6IHNsaWRlclBhZGRpbmcsXG4gICAgICAgIHNjYWxlczoge1xuICAgICAgICAgIHg6IHtcbiAgICAgICAgICAgIHR5cGU6ICd0aW1lJyxcbiAgICAgICAgICAgIHRpY2tJbnRlcnZhbDogNjAgKiA2MCAqIDEwMDAsXG4gICAgICAgICAgICByYW5nZTogWzAsIDFdLFxuICAgICAgICAgICAgbWFzayxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBiYWNrZ3JvdW5kQ2hhcnQ6IHtcbiAgICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgIH0sXG4gICAgICAgIHhBeGlzOiAneCcsXG4gICAgICAgIHlBeGlzOiAneTEnLFxuICAgICAgICBkYXRhOiBbXSxcbiAgICAgIH0pKTtcblxuICAgICAgX3NsaWRlci5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLmF0dGFjaENoYXJ0KCk7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaENoYXJ0KCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoYXJ0LFxuICAgICAgX3NsaWRlcixcbiAgICAgIHNsaWRlcixcbiAgICAgIGhlaWdodCxcbiAgICAgIHBhZGRpbmcsXG4gICAgICBkYXRhLFxuICAgICAgbWFzayxcbiAgICAgIHRpdGxlTWFwLFxuICAgICAgcG9zaXRpb24sXG4gICAgICBjb2xvck1hcCxcbiAgICAgIGJvcmRlcldpZHRoLFxuICAgIH0gPSB0aGlzO1xuICAgIGlmICghY2hhcnQgfHwgIWRhdGEgfHwgZGF0YS5sZW5ndGggPD0gMCkgcmV0dXJuO1xuXG4gICAgY2hhcnQubGVnZW5kKHtcbiAgICAgIHBvc2l0aW9uLFxuICAgICAgY3VzdG9tOiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbeyB2YWx1ZTogdGl0bGVNYXAueTEsIGZpbGw6IGNvbG9yTWFwLnkxIH0sIHsgdmFsdWU6IHRpdGxlTWFwLnkyLCBmaWxsOiBjb2xvck1hcC55MiB9XSxcbiAgICB9KTtcblxuICAgIC8vIGJvcmRlclxuICAgIGNoYXJ0LmdldCgnZ2VvbXMnKS5mb3JFYWNoKCh2LCBpZHgpID0+IHtcbiAgICAgIHYuY29sb3IoY29sb3JNYXBbYHkke2lkeCArIDF9YF0pLnNpemUoYm9yZGVyV2lkdGgpO1xuICAgIH0pO1xuICAgIGNoYXJ0LnNldCgnaGVpZ2h0JywgaGVpZ2h0KTtcbiAgICBjaGFydC5zZXQoJ3BhZGRpbmcnLCBwYWRkaW5nKTtcblxuICAgIGRhdGFcbiAgICAgIC5maWx0ZXIodiA9PiAhKHYueCBpbnN0YW5jZW9mIE51bWJlcikpXG4gICAgICAuZm9yRWFjaCh2ID0+IHtcbiAgICAgICAgdi54ID0gK25ldyBEYXRlKHYueCk7XG4gICAgICB9KTtcbiAgICBkYXRhLnNvcnQoKGEsIGIpID0+ICthLnggLSArYi54KTtcbiAgICBjb25zdCBtYXggPSBNYXRoLm1heChcbiAgICAgIFsuLi5kYXRhXS5zb3J0KChhLCBiKSA9PiBiLnkxIC0gYS55MSlbMF0ueTEsXG4gICAgICBbLi4uZGF0YV0uc29ydCgoYSwgYikgPT4gYi55MiAtIGEueTIpWzBdLnkyLFxuICAgICk7XG4gICAgY29uc3QgZHMgPSBuZXcgRGF0YVNldCh7XG4gICAgICBzdGF0ZToge1xuICAgICAgICBzdGFydDogZGF0YVswXS54LFxuICAgICAgICBlbmQ6IGRhdGFbZGF0YS5sZW5ndGggLSAxXS54LFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjb25zdCBkdiA9IGRzLmNyZWF0ZVZpZXcoKTtcbiAgICBkdi5zb3VyY2UoZGF0YSkudHJhbnNmb3JtKHtcbiAgICAgIHR5cGU6ICdmaWx0ZXInLFxuICAgICAgY2FsbGJhY2s6ICh2YWw6IEcyVGltZWxpbmVEYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpbWUgPSArdmFsLng7XG4gICAgICAgIHJldHVybiB0aW1lID49IGRzLnN0YXRlLnN0YXJ0ICYmIHRpbWUgPD0gZHMuc3RhdGUuZW5kO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBjaGFydC5zb3VyY2UoZHYsIHtcbiAgICAgIHg6IHtcbiAgICAgICAgdHlwZTogJ3RpbWVDYXQnLFxuICAgICAgICBtYXNrLFxuICAgICAgICByYW5nZTogWzAsIDFdLFxuICAgICAgfSxcbiAgICAgIHkxOiB7XG4gICAgICAgIGFsaWFzOiB0aXRsZU1hcC55MSxcbiAgICAgICAgbWF4LFxuICAgICAgICBtaW46IDAsXG4gICAgICB9LFxuICAgICAgeTI6IHtcbiAgICAgICAgYWxpYXM6IHRpdGxlTWFwLnkyLFxuICAgICAgICBtYXgsXG4gICAgICAgIG1pbjogMCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY2hhcnQucmVwYWludCgpO1xuXG4gICAgaWYgKHNsaWRlcikge1xuICAgICAgX3NsaWRlci5zdGFydCA9IGRzLnN0YXRlLnN0YXJ0O1xuICAgICAgX3NsaWRlci5lbmQgPSBkcy5zdGF0ZS5lbmQ7XG4gICAgICBfc2xpZGVyLm9uQ2hhbmdlID0gKHsgc3RhcnRWYWx1ZSwgZW5kVmFsdWUgfSkgPT4ge1xuICAgICAgICBkcy5zZXRTdGF0ZSgnc3RhcnQnLCBzdGFydFZhbHVlKTtcbiAgICAgICAgZHMuc2V0U3RhdGUoJ2VuZCcsIGVuZFZhbHVlKTtcbiAgICAgIH07XG4gICAgICBfc2xpZGVyLmNoYW5nZURhdGEoZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5hdHRhY2hDaGFydCgpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmNoYXJ0LmRlc3Ryb3koKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zbGlkZXIpIHtcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuX3NsaWRlci5kZXN0cm95KCkpO1xuICAgIH1cbiAgfVxufVxuIl19