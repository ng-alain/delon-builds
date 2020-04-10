/**
 * @fileoverview added by tsickle
 * Generated from: timeline.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign, __decorate, __metadata, __read, __spread } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, ViewChild, ViewEncapsulation, } from '@angular/core';
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
        var sliderPadding = __assign(__assign({}, []), padding);
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
            items: [
                { value: titleMap.y1, fill: colorMap.y1 },
                { value: titleMap.y2, fill: colorMap.y2 },
            ],
        });
        // border
        chart.get('geoms').forEach((/**
         * @param {?} v
         * @param {?} idx
         * @return {?}
         */
        function (v, idx) {
            v.color(((/** @type {?} */ (colorMap)))["y" + (idx + 1)]).size(borderWidth);
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
        var max = Math.max(__spread(data).sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) { return b.y1 - a.y1; }))[0].y1, __spread(data).sort((/**
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
             * @param {?} res
             * @return {?}
             */
            function (res) {
                ds.setState('start', res.startValue);
                ds.setState('end', res.endValue);
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
                    template: "<ng-container *stringTemplateOutlet=\"title\">\n  <h4>{{title}}</h4>\n</ng-container>\n<div #container></div>\n<div #sliderContainer *ngIf=\"slider\"></div>\n",
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    G2TimelineComponent.ctorParameters = function () { return [
        { type: NgZone }
    ]; };
    G2TimelineComponent.propDecorators = {
        node: [{ type: ViewChild, args: ['container', { static: false },] }],
        sliderNode: [{ type: ViewChild, args: ['sliderContainer', { static: false },] }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L3RpbWVsaW5lLyIsInNvdXJjZXMiOlsidGltZWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUtOLFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFPeEQ7SUFBQTtJQVFBLENBQUM7SUFBRCxxQkFBQztBQUFELENBQUMsQUFSRCxJQVFDOzs7Ozs7O0lBTkMsMkJBQTBCOzs7OztJQUUxQiw0QkFBVzs7Ozs7SUFFWCw0QkFBVzs7O0FBSWI7SUE0QkUsYUFBYTtJQUViLDZCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTs7UUFkVixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRXpCLFNBQUksR0FBcUIsRUFBRSxDQUFDO1FBRTVCLGFBQVEsR0FBK0IsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQztRQUN4RSxTQUFJLEdBQVcsT0FBTyxDQUFDO1FBQ3ZCLGFBQVEsR0FBd0MsS0FBSyxDQUFDO1FBQ3ZDLFdBQU0sR0FBRyxHQUFHLENBQUM7UUFDNUIsWUFBTyxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEIsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDZixXQUFNLEdBQUcsSUFBSSxDQUFDO0lBSUYsQ0FBQzs7OztJQUV0QyxzQ0FBUTs7O0lBQVI7UUFBQSxpQkFFQztRQURDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCOzs7UUFBQyxjQUFNLE9BQUEsVUFBVTs7O1FBQUMsY0FBTSxPQUFB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QVEsRUFBRSxZQUFZO29CQUN0QiwwS0FBd0M7b0JBQ3hDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7Ozs7Z0JBaENDLE1BQU07Ozt1QkFrQ0wsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7NkJBQ3hDLFNBQVMsU0FBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7d0JBTTlDLEtBQUs7d0JBQ0wsS0FBSzt1QkFDTCxLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSzt1QkFDTCxLQUFLOzJCQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLOzhCQUNMLEtBQUs7eUJBQ0wsS0FBSzs7SUFWa0I7UUFBZCxXQUFXLEVBQUU7O3NEQUFXO0lBT1Y7UUFBZCxXQUFXLEVBQUU7O3VEQUFjO0lBRWI7UUFBZCxXQUFXLEVBQUU7OzREQUFpQjtJQUNmO1FBQWYsWUFBWSxFQUFFOzt1REFBZTtJQTZJekMsMEJBQUM7Q0FBQSxBQXZLRCxJQXVLQztTQS9KWSxtQkFBbUI7Ozs7OztJQUM5QixtQ0FBb0U7Ozs7O0lBQ3BFLHlDQUFnRjs7Ozs7SUFDaEYsb0NBQW1COzs7OztJQUNuQixzQ0FBcUI7O0lBSXJCLG9DQUFrQzs7SUFDbEMsb0NBQTJDOztJQUMzQyxtQ0FBcUM7O0lBQ3JDLHVDQUE4Qzs7SUFDOUMsdUNBQWlGOztJQUNqRixtQ0FBZ0M7O0lBQ2hDLHVDQUErRDs7SUFDL0QscUNBQXFDOztJQUNyQyxzQ0FBOEM7O0lBQzlDLDBDQUF3Qzs7SUFDeEMscUNBQXVDOzs7OztJQUkzQixxQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuZGVjbGFyZSB2YXIgRzI6IGFueTtcbmRlY2xhcmUgdmFyIERhdGFTZXQ6IGFueTtcbmRlY2xhcmUgdmFyIFNsaWRlcjogYW55O1xuXG5leHBvcnQgY2xhc3MgRzJUaW1lbGluZURhdGEge1xuICAvKiog6Z2eIGBEYXRlYCDmoLzlvI/vvIzoh6rliqjkvb/nlKggYG5ldyBEYXRlYCDovazmjaLvvIzlm6DmraTvvIzmlK/mjIHml7bpl7TmoLzlvI/lrZfnrKbkuLLjgIHmlbDlrZflnovml7bpl7TmiLMgKi9cbiAgeDogRGF0ZSB8IHN0cmluZyB8IG51bWJlcjtcbiAgLyoqIOaMh+aghzHmlbDmja4gKi9cbiAgeTE6IG51bWJlcjtcbiAgLyoqIOaMh+aghzLmlbDmja4gKi9cbiAgeTI6IG51bWJlcjtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi10aW1lbGluZScsXG4gIGV4cG9ydEFzOiAnZzJUaW1lbGluZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lbGluZS5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRzJUaW1lbGluZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHN0YXRpYzogZmFsc2UgfSkgcHJpdmF0ZSBub2RlOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdzbGlkZXJDb250YWluZXInLCB7IHN0YXRpYzogZmFsc2UgfSkgcHJpdmF0ZSBzbGlkZXJOb2RlOiBFbGVtZW50UmVmO1xuICBwcml2YXRlIGNoYXJ0OiBhbnk7XG4gIHByaXZhdGUgX3NsaWRlcjogYW55O1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXkgPSAwO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGRhdGE6IEcyVGltZWxpbmVEYXRhW10gPSBbXTtcbiAgQElucHV0KCkgdGl0bGVNYXA6IHsgeTE6IHN0cmluZzsgeTI6IHN0cmluZyB9O1xuICBASW5wdXQoKSBjb2xvck1hcDogeyB5MTogc3RyaW5nOyB5Mjogc3RyaW5nIH0gPSB7IHkxOiAnIzE4OTBGRicsIHkyOiAnIzJGQzI1QicgfTtcbiAgQElucHV0KCkgbWFzazogc3RyaW5nID0gJ0hIOm1tJztcbiAgQElucHV0KCkgcG9zaXRpb246ICd0b3AnIHwgJ3JpZ2h0JyB8ICdib3R0b20nIHwgJ2xlZnQnID0gJ3RvcCc7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGhlaWdodCA9IDQwMDtcbiAgQElucHV0KCkgcGFkZGluZzogbnVtYmVyW10gPSBbNjAsIDIwLCA0MCwgNDBdO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBib3JkZXJXaWR0aCA9IDI7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzbGlkZXIgPSB0cnVlO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nWm9uZTogTmdab25lKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnN0YWxsKCksIHRoaXMuZGVsYXkpKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5zdGFsbCgpIHtcbiAgICBjb25zdCB7IG5vZGUsIHNsaWRlck5vZGUsIGhlaWdodCwgcGFkZGluZywgbWFzaywgc2xpZGVyIH0gPSB0aGlzO1xuICAgIGNvbnN0IGNoYXJ0ID0gKHRoaXMuY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xuICAgICAgY29udGFpbmVyOiBub2RlLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBmb3JjZUZpdDogdHJ1ZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIHBhZGRpbmcsXG4gICAgfSkpO1xuICAgIGNoYXJ0LmF4aXMoJ3gnLCB7IHRpdGxlOiBmYWxzZSB9KTtcbiAgICBjaGFydC5heGlzKCd5MScsIHsgdGl0bGU6IGZhbHNlIH0pO1xuICAgIGNoYXJ0LmF4aXMoJ3kyJywgZmFsc2UpO1xuXG4gICAgY2hhcnQubGluZSgpLnBvc2l0aW9uKCd4KnkxJyk7XG4gICAgY2hhcnQubGluZSgpLnBvc2l0aW9uKCd4KnkyJyk7XG5cbiAgICBjaGFydC5yZW5kZXIoKTtcblxuICAgIGNvbnN0IHNsaWRlclBhZGRpbmcgPSB7IC4uLltdLCAuLi5wYWRkaW5nIH07XG4gICAgc2xpZGVyUGFkZGluZ1swXSA9IDA7XG4gICAgaWYgKHNsaWRlcikge1xuICAgICAgY29uc3QgX3NsaWRlciA9ICh0aGlzLl9zbGlkZXIgPSBuZXcgU2xpZGVyKHtcbiAgICAgICAgY29udGFpbmVyOiBzbGlkZXJOb2RlLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIHdpZHRoOiAnYXV0bycsXG4gICAgICAgIGhlaWdodDogMjYsXG4gICAgICAgIHBhZGRpbmc6IHNsaWRlclBhZGRpbmcsXG4gICAgICAgIHNjYWxlczoge1xuICAgICAgICAgIHg6IHtcbiAgICAgICAgICAgIHR5cGU6ICd0aW1lJyxcbiAgICAgICAgICAgIHRpY2tJbnRlcnZhbDogNjAgKiA2MCAqIDEwMDAsXG4gICAgICAgICAgICByYW5nZTogWzAsIDFdLFxuICAgICAgICAgICAgbWFzayxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBiYWNrZ3JvdW5kQ2hhcnQ6IHtcbiAgICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgIH0sXG4gICAgICAgIHhBeGlzOiAneCcsXG4gICAgICAgIHlBeGlzOiAneTEnLFxuICAgICAgICBkYXRhOiBbXSxcbiAgICAgIH0pKTtcblxuICAgICAgX3NsaWRlci5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLmF0dGFjaENoYXJ0KCk7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaENoYXJ0KCkge1xuICAgIGNvbnN0IHsgY2hhcnQsIF9zbGlkZXIsIHNsaWRlciwgaGVpZ2h0LCBwYWRkaW5nLCBkYXRhLCBtYXNrLCB0aXRsZU1hcCwgcG9zaXRpb24sIGNvbG9yTWFwLCBib3JkZXJXaWR0aCB9ID0gdGhpcztcbiAgICBpZiAoIWNoYXJ0IHx8ICFkYXRhIHx8IGRhdGEubGVuZ3RoIDw9IDApIHJldHVybjtcblxuICAgIGNoYXJ0LmxlZ2VuZCh7XG4gICAgICBwb3NpdGlvbixcbiAgICAgIGN1c3RvbTogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHZhbHVlOiB0aXRsZU1hcC55MSwgZmlsbDogY29sb3JNYXAueTEgfSxcbiAgICAgICAgeyB2YWx1ZTogdGl0bGVNYXAueTIsIGZpbGw6IGNvbG9yTWFwLnkyIH0sXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgLy8gYm9yZGVyXG4gICAgY2hhcnQuZ2V0KCdnZW9tcycpLmZvckVhY2goKHY6IE56U2FmZUFueSwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgIHYuY29sb3IoKGNvbG9yTWFwIGFzIE56U2FmZUFueSlbYHkke2lkeCArIDF9YF0pLnNpemUoYm9yZGVyV2lkdGgpO1xuICAgIH0pO1xuICAgIGNoYXJ0LnNldCgnaGVpZ2h0JywgaGVpZ2h0KTtcbiAgICBjaGFydC5zZXQoJ3BhZGRpbmcnLCBwYWRkaW5nKTtcblxuICAgIGRhdGFcbiAgICAgIC5maWx0ZXIodiA9PiAhKHYueCBpbnN0YW5jZW9mIE51bWJlcikpXG4gICAgICAuZm9yRWFjaCh2ID0+IHtcbiAgICAgICAgdi54ID0gK25ldyBEYXRlKHYueCk7XG4gICAgICB9KTtcbiAgICBkYXRhLnNvcnQoKGEsIGIpID0+ICthLnggLSArYi54KTtcbiAgICBjb25zdCBtYXggPSBNYXRoLm1heChbLi4uZGF0YV0uc29ydCgoYSwgYikgPT4gYi55MSAtIGEueTEpWzBdLnkxLCBbLi4uZGF0YV0uc29ydCgoYSwgYikgPT4gYi55MiAtIGEueTIpWzBdLnkyKTtcbiAgICBjb25zdCBkcyA9IG5ldyBEYXRhU2V0KHtcbiAgICAgIHN0YXRlOiB7XG4gICAgICAgIHN0YXJ0OiBkYXRhWzBdLngsXG4gICAgICAgIGVuZDogZGF0YVtkYXRhLmxlbmd0aCAtIDFdLngsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IGR2ID0gZHMuY3JlYXRlVmlldygpO1xuICAgIGR2LnNvdXJjZShkYXRhKS50cmFuc2Zvcm0oe1xuICAgICAgdHlwZTogJ2ZpbHRlcicsXG4gICAgICBjYWxsYmFjazogKHZhbDogRzJUaW1lbGluZURhdGEpID0+IHtcbiAgICAgICAgY29uc3QgdGltZSA9ICt2YWwueDtcbiAgICAgICAgcmV0dXJuIHRpbWUgPj0gZHMuc3RhdGUuc3RhcnQgJiYgdGltZSA8PSBkcy5zdGF0ZS5lbmQ7XG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNoYXJ0LnNvdXJjZShkdiwge1xuICAgICAgeDoge1xuICAgICAgICB0eXBlOiAndGltZUNhdCcsXG4gICAgICAgIG1hc2ssXG4gICAgICAgIHJhbmdlOiBbMCwgMV0sXG4gICAgICB9LFxuICAgICAgeTE6IHtcbiAgICAgICAgYWxpYXM6IHRpdGxlTWFwLnkxLFxuICAgICAgICBtYXgsXG4gICAgICAgIG1pbjogMCxcbiAgICAgIH0sXG4gICAgICB5Mjoge1xuICAgICAgICBhbGlhczogdGl0bGVNYXAueTIsXG4gICAgICAgIG1heCxcbiAgICAgICAgbWluOiAwLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjaGFydC5yZXBhaW50KCk7XG5cbiAgICBpZiAoc2xpZGVyKSB7XG4gICAgICBfc2xpZGVyLnN0YXJ0ID0gZHMuc3RhdGUuc3RhcnQ7XG4gICAgICBfc2xpZGVyLmVuZCA9IGRzLnN0YXRlLmVuZDtcbiAgICAgIF9zbGlkZXIub25DaGFuZ2UgPSAocmVzOiBOelNhZmVBbnkpID0+IHtcbiAgICAgICAgZHMuc2V0U3RhdGUoJ3N0YXJ0JywgcmVzLnN0YXJ0VmFsdWUpO1xuICAgICAgICBkcy5zZXRTdGF0ZSgnZW5kJywgcmVzLmVuZFZhbHVlKTtcbiAgICAgIH07XG4gICAgICBfc2xpZGVyLmNoYW5nZURhdGEoZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5hdHRhY2hDaGFydCgpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmNoYXJ0LmRlc3Ryb3koKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zbGlkZXIpIHtcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuX3NsaWRlci5kZXN0cm95KCkpO1xuICAgIH1cbiAgfVxufVxuIl19