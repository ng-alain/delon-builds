/**
 * @fileoverview added by tsickle
 * Generated from: timeline.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign, __decorate, __metadata, __read, __spread } from "tslib";
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
var G2TimelineComponent = /** @class */ (function () {
    // #endregion
    function G2TimelineComponent(ngZone, configSrv) {
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
        var _a = this, node = _a.node, height = _a.height, padding = _a.padding, slider = _a.slider, maxAxis = _a.maxAxis, theme = _a.theme, mask = _a.mask;
        /** @type {?} */
        var chart = (this.chart = new Chart({
            container: node.nativeElement,
            autoFit: true,
            height: height,
            padding: padding,
            theme: theme,
        }));
        chart.axis('time', { title: null });
        chart.axis('y1', { title: null });
        for (var i = 2; i <= maxAxis; i++) {
            chart.axis("y" + i, false);
        }
        chart.line().position('time*y1');
        for (var i = 2; i <= maxAxis; i++) {
            chart.line().position("time*y" + i);
        }
        chart.tooltip({
            showCrosshairs: true,
            shared: true,
        });
        /** @type {?} */
        var sliderPadding = __assign(__assign({}, []), padding);
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
                function (val) { return format(val, mask); }),
            });
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
        var _a = this, chart = _a.chart, height = _a.height, padding = _a.padding, mask = _a.mask, titleMap = _a.titleMap, position = _a.position, colorMap = _a.colorMap, borderWidth = _a.borderWidth, maxAxis = _a.maxAxis;
        /** @type {?} */
        var data = __spread(this.data);
        if (!chart || !data || data.length <= 0)
            return;
        /** @type {?} */
        var arrAxis = __spread(Array(maxAxis)).map((/**
         * @param {?} _
         * @param {?} index
         * @return {?}
         */
        function (_, index) { return index + 1; }));
        chart.legend({
            position: position,
            custom: true,
            items: arrAxis.map((/**
             * @param {?} id
             * @return {?}
             */
            function (id) {
                /** @type {?} */
                var key = "y" + id;
                return (/** @type {?} */ ({ name: titleMap[key], value: titleMap[key], marker: { style: { fill: colorMap[key] } } }));
            })),
        });
        // border
        chart.geometries.forEach((/**
         * @param {?} v
         * @param {?} idx
         * @return {?}
         */
        function (v, idx) {
            v.color(((/** @type {?} */ (colorMap)))["y" + (idx + 1)]).size(borderWidth);
        }));
        chart.height = height;
        chart.padding = padding;
        // TODO: compatible
        if (data.find((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return !!w.x; })) != null) {
            deprecation10('g2-timeline', 'x', 'time');
            data.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                item.time = new Date((/** @type {?} */ (item.x)));
            }));
        }
        // 转换成日期类型
        data = data
            .map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            item.time = toDate((/** @type {?} */ (item.time)));
            item._time = +item.time;
            return item;
        }))
            .sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) { return a._time - b._time; }));
        /** @type {?} */
        var max = Math.max.apply(Math, __spread(arrAxis.map((/**
         * @param {?} id
         * @return {?}
         */
        function (id) { return __spread(data).sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) { return b["y" + id] - a["y" + id]; }))[0]["y" + id]; }))));
        /** @type {?} */
        var scaleOptions = {};
        arrAxis.forEach((/**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            /** @type {?} */
            var key = "y" + id;
            scaleOptions[key] = {
                alias: titleMap[key],
                max: max,
                min: 0,
            };
        }));
        chart.scale(__assign({ time: {
                type: 'time',
                mask: mask,
                range: [0, 1],
            } }, scaleOptions));
        /** @type {?} */
        var initialRange = {
            start: data[0]._time,
            end: data[data.length - 1]._time,
        };
        /** @type {?} */
        var filterData = data.filter((/**
         * @param {?} val
         * @return {?}
         */
        function (val) { return val._time >= initialRange.start && val._time <= initialRange.end; }));
        chart.changeData(filterData);
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
    };
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
    G2TimelineComponent.ctorParameters = function () { return [
        { type: NgZone },
        { type: AlainConfigService }
    ]; };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L3RpbWVsaW5lLyIsInNvdXJjZXMiOlsidGltZWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUtOLFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBUyxNQUFNLFVBQVUsQ0FBQztBQUV4QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ25HLE9BQU8sTUFBTSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBR3JDLG9DQXFCQzs7Ozs7OztJQWhCQywyQkFBVzs7Ozs7SUFJWCw4QkFBYzs7Ozs7SUFFZCw0QkFBVzs7Ozs7SUFFWCw0QkFBVzs7Ozs7SUFFWCw0QkFBWTs7Ozs7SUFFWiw0QkFBWTs7Ozs7SUFFWiw0QkFBWTs7Ozs7O0FBSWQsbUNBYUM7Ozs7OztJQVhDLDJCQUFXOzs7OztJQUVYLDJCQUFXOzs7OztJQUVYLDJCQUFZOzs7OztJQUVaLDJCQUFZOzs7OztJQUVaLDJCQUFZOzs7QUFLZDtJQTRCRSxhQUFhO0lBRWIsNkJBQW9CLE1BQWMsRUFBRSxTQUE2QjtRQUE3QyxXQUFNLEdBQU4sTUFBTSxDQUFROztRQWhCVixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRVYsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUMzQixTQUFJLEdBQXFCLEVBQUUsQ0FBQztRQUU1QixhQUFRLEdBQWtCLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxF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O0lBQzdDLDBDQUF3Qzs7SUFDeEMscUNBQXVDOztJQUN2QyxvQ0FBMkM7Ozs7O0lBSS9CLHFDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXJ0LCBUeXBlcyB9IGZyb20gJ0BhbnR2L2cyJztcbmltcG9ydCB7IEcyVGltZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgZGVwcmVjYXRpb24xMCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgdG9EYXRlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IGZvcm1hdCBmcm9tICdkYXRlLWZucy9mb3JtYXQnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBHMlRpbWVsaW5lRGF0YSB7XG4gIC8qKlxuICAgKiDml7bpl7TlgLxcbiAgICogQGRlcHJlY2F0ZWQgVXNlIGB0aW1lYCBpbnN0ZWFkXG4gICAqL1xuICB4PzogRzJUaW1lO1xuICAvKipcbiAgICog5pe26Ze05YC8XG4gICAqL1xuICB0aW1lPzogRzJUaW1lO1xuICAvKiog5oyH5qCHMeaVsOaNriAqL1xuICB5MTogbnVtYmVyO1xuICAvKiog5oyH5qCHMuaVsOaNriAqL1xuICB5MjogbnVtYmVyO1xuICAvKiog5oyH5qCHM+aVsOaNriAqL1xuICB5Mz86IG51bWJlcjtcbiAgLyoqIOaMh+aghzTmlbDmja4gKi9cbiAgeTQ/OiBudW1iZXI7XG4gIC8qKiDmjIfmoIc15pWw5o2uICovXG4gIHk1PzogbnVtYmVyO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRzJUaW1lbGluZU1hcCB7XG4gIC8qKiDmjIfmoIcxICovXG4gIHkxOiBzdHJpbmc7XG4gIC8qKiDmjIfmoIcgKi9cbiAgeTI6IHN0cmluZztcbiAgLyoqIOaMh+aghzMgKi9cbiAgeTM/OiBzdHJpbmc7XG4gIC8qKiDmjIfmoIc0ICovXG4gIHk0Pzogc3RyaW5nO1xuICAvKiog5oyH5qCHNSAqL1xuICB5NT86IHN0cmluZztcblxuICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLXRpbWVsaW5lJyxcbiAgZXhwb3J0QXM6ICdnMlRpbWVsaW5lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RpbWVsaW5lLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBHMlRpbWVsaW5lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIG5vZGU6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgY2hhcnQ6IENoYXJ0O1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXkgPSAwO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG1heEF4aXMgPSAyO1xuICBASW5wdXQoKSBkYXRhOiBHMlRpbWVsaW5lRGF0YVtdID0gW107XG4gIEBJbnB1dCgpIHRpdGxlTWFwOiBHMlRpbWVsaW5lTWFwO1xuICBASW5wdXQoKSBjb2xvck1hcDogRzJUaW1lbGluZU1hcCA9IHsgeTE6ICcjNUI4RkY5JywgeTI6ICcjNUFEOEE2JywgeTM6ICcjNUQ3MDkyJywgeTQ6ICcjRjZCRDE2JywgeTU6ICcjRTg2NDUyJyB9O1xuICBASW5wdXQoKSBtYXNrOiBzdHJpbmcgPSAnSEg6bW0nO1xuICBASW5wdXQoKSBwb3NpdGlvbjogJ3RvcCcgfCAncmlnaHQnIHwgJ2JvdHRvbScgfCAnbGVmdCcgPSAndG9wJztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgaGVpZ2h0ID0gNDUwO1xuICBASW5wdXQoKSBwYWRkaW5nOiBudW1iZXJbXSA9IFs0MCwgOCwgNjQsIDQwXTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgYm9yZGVyV2lkdGggPSAyO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2xpZGVyID0gdHJ1ZTtcbiAgQElucHV0KCkgdGhlbWU6IHN0cmluZyB8IFR5cGVzLkxvb3NlT2JqZWN0O1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nWm9uZTogTmdab25lLCBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSkge1xuICAgIGNvbmZpZ1Nydi5hdHRhY2hLZXkodGhpcywgJ2NoYXJ0JywgJ3RoZW1lJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpLCB0aGlzLmRlbGF5KSk7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGwoKSB7XG4gICAgY29uc3QgeyBub2RlLCBoZWlnaHQsIHBhZGRpbmcsIHNsaWRlciwgbWF4QXhpcywgdGhlbWUsIG1hc2sgfSA9IHRoaXM7XG4gICAgY29uc3QgY2hhcnQgPSAodGhpcy5jaGFydCA9IG5ldyBDaGFydCh7XG4gICAgICBjb250YWluZXI6IG5vZGUubmF0aXZlRWxlbWVudCxcbiAgICAgIGF1dG9GaXQ6IHRydWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBwYWRkaW5nLFxuICAgICAgdGhlbWUsXG4gICAgfSkpO1xuICAgIGNoYXJ0LmF4aXMoJ3RpbWUnLCB7IHRpdGxlOiBudWxsIH0pO1xuICAgIGNoYXJ0LmF4aXMoJ3kxJywgeyB0aXRsZTogbnVsbCB9KTtcbiAgICBmb3IgKGxldCBpID0gMjsgaSA8PSBtYXhBeGlzOyBpKyspIHtcbiAgICAgIGNoYXJ0LmF4aXMoYHkke2l9YCwgZmFsc2UpO1xuICAgIH1cblxuICAgIGNoYXJ0LmxpbmUoKS5wb3NpdGlvbigndGltZSp5MScpO1xuICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IG1heEF4aXM7IGkrKykge1xuICAgICAgY2hhcnQubGluZSgpLnBvc2l0aW9uKGB0aW1lKnkke2l9YCk7XG4gICAgfVxuXG4gICAgY2hhcnQudG9vbHRpcCh7XG4gICAgICBzaG93Q3Jvc3NoYWlyczogdHJ1ZSxcbiAgICAgIHNoYXJlZDogdHJ1ZSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHNsaWRlclBhZGRpbmcgPSB7IC4uLltdLCAuLi5wYWRkaW5nIH07XG4gICAgc2xpZGVyUGFkZGluZ1swXSA9IDA7XG4gICAgaWYgKHNsaWRlcikge1xuICAgICAgY2hhcnQub3B0aW9uKCdzbGlkZXInLCB7XG4gICAgICAgIGhlaWdodDogMjYsXG4gICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICBlbmQ6IDEsXG4gICAgICAgIHRyZW5kQ2ZnOiB7XG4gICAgICAgICAgaXNBcmVhOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgbWluTGltaXQ6IDIsXG4gICAgICAgIGZvcm1hdHRlcjogKHZhbDogRGF0ZSkgPT4gZm9ybWF0KHZhbCwgbWFzayksXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmF0dGFjaENoYXJ0KCk7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaENoYXJ0KCkge1xuICAgIGNvbnN0IHsgY2hhcnQsIGhlaWdodCwgcGFkZGluZywgbWFzaywgdGl0bGVNYXAsIHBvc2l0aW9uLCBjb2xvck1hcCwgYm9yZGVyV2lkdGgsIG1heEF4aXMgfSA9IHRoaXM7XG4gICAgbGV0IGRhdGEgPSBbLi4udGhpcy5kYXRhXTtcbiAgICBpZiAoIWNoYXJ0IHx8ICFkYXRhIHx8IGRhdGEubGVuZ3RoIDw9IDApIHJldHVybjtcblxuICAgIGNvbnN0IGFyckF4aXMgPSBbLi4uQXJyYXkobWF4QXhpcyldLm1hcCgoXywgaW5kZXgpID0+IGluZGV4ICsgMSk7XG5cbiAgICBjaGFydC5sZWdlbmQoe1xuICAgICAgcG9zaXRpb24sXG4gICAgICBjdXN0b206IHRydWUsXG4gICAgICBpdGVtczogYXJyQXhpcy5tYXAoaWQgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSBgeSR7aWR9YDtcbiAgICAgICAgcmV0dXJuIHsgbmFtZTogdGl0bGVNYXBba2V5XSwgdmFsdWU6IHRpdGxlTWFwW2tleV0sIG1hcmtlcjogeyBzdHlsZTogeyBmaWxsOiBjb2xvck1hcFtrZXldIH0gfSB9IGFzIFR5cGVzLkxlZ2VuZEl0ZW07XG4gICAgICB9KSxcbiAgICB9KTtcblxuICAgIC8vIGJvcmRlclxuICAgIGNoYXJ0Lmdlb21ldHJpZXMuZm9yRWFjaCgodiwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgIHYuY29sb3IoKGNvbG9yTWFwIGFzIE56U2FmZUFueSlbYHkke2lkeCArIDF9YF0pLnNpemUoYm9yZGVyV2lkdGgpO1xuICAgIH0pO1xuICAgIGNoYXJ0LmhlaWdodCA9IGhlaWdodDtcbiAgICBjaGFydC5wYWRkaW5nID0gcGFkZGluZztcblxuICAgIC8vIFRPRE86IGNvbXBhdGlibGVcbiAgICBpZiAoZGF0YS5maW5kKHcgPT4gISF3LngpICE9IG51bGwpIHtcbiAgICAgIGRlcHJlY2F0aW9uMTAoJ2cyLXRpbWVsaW5lJywgJ3gnLCAndGltZScpO1xuICAgICAgZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLnRpbWUgPSBuZXcgRGF0ZShpdGVtLnghKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyDovazmjaLmiJDml6XmnJ/nsbvlnotcbiAgICBkYXRhID0gZGF0YVxuICAgICAgLm1hcChpdGVtID0+IHtcbiAgICAgICAgaXRlbS50aW1lID0gdG9EYXRlKGl0ZW0udGltZSEpO1xuICAgICAgICBpdGVtLl90aW1lID0gK2l0ZW0udGltZTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICB9KVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEuX3RpbWUgLSBiLl90aW1lKTtcblxuICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KC4uLmFyckF4aXMubWFwKGlkID0+IFsuLi5kYXRhXS5zb3J0KChhLCBiKSA9PiBiW2B5JHtpZH1gXSAtIGFbYHkke2lkfWBdKVswXVtgeSR7aWR9YF0pKTtcbiAgICBjb25zdCBzY2FsZU9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIFR5cGVzLlNjYWxlT3B0aW9uPiA9IHt9O1xuICAgIGFyckF4aXMuZm9yRWFjaChpZCA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBgeSR7aWR9YDtcbiAgICAgIHNjYWxlT3B0aW9uc1trZXldID0ge1xuICAgICAgICBhbGlhczogdGl0bGVNYXBba2V5XSxcbiAgICAgICAgbWF4LFxuICAgICAgICBtaW46IDAsXG4gICAgICB9O1xuICAgIH0pO1xuICAgIGNoYXJ0LnNjYWxlKHtcbiAgICAgIHRpbWU6IHtcbiAgICAgICAgdHlwZTogJ3RpbWUnLFxuICAgICAgICBtYXNrLFxuICAgICAgICByYW5nZTogWzAsIDFdLFxuICAgICAgfSxcbiAgICAgIC4uLnNjYWxlT3B0aW9ucyxcbiAgICB9KTtcblxuICAgIGNvbnN0IGluaXRpYWxSYW5nZSA9IHtcbiAgICAgIHN0YXJ0OiBkYXRhWzBdLl90aW1lLFxuICAgICAgZW5kOiBkYXRhW2RhdGEubGVuZ3RoIC0gMV0uX3RpbWUsXG4gICAgfTtcbiAgICBjb25zdCBmaWx0ZXJEYXRhID0gZGF0YS5maWx0ZXIodmFsID0+IHZhbC5fdGltZSA+PSBpbml0aWFsUmFuZ2Uuc3RhcnQgJiYgdmFsLl90aW1lIDw9IGluaXRpYWxSYW5nZS5lbmQpO1xuICAgIGNoYXJ0LmNoYW5nZURhdGEoZmlsdGVyRGF0YSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmF0dGFjaENoYXJ0KCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuY2hhcnQuZGVzdHJveSgpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==