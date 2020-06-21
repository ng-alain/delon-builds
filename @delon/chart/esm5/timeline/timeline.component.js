/**
 * @fileoverview added by tsickle
 * Generated from: timeline.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign, __decorate, __metadata, __read, __spread } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, NgZone, Output, ViewChild, ViewEncapsulation, } from '@angular/core';
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
        this.clickItem = new EventEmitter();
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
        var _this = this;
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
        chart.on("plot:click", (/**
         * @param {?} ev
         * @return {?}
         */
        function (ev) {
            /** @type {?} */
            var records = _this.chart.getSnapRecords({ x: ev.x, y: ev.y });
            _this.ngZone.run((/**
             * @return {?}
             */
            function () { return _this.clickItem.emit({ item: records[0]._origin, ev: ev }); }));
        }));
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
    /** @type {?} */
    G2TimelineComponent.prototype.clickItem;
    /**
     * @type {?}
     * @private
     */
    G2TimelineComponent.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L3RpbWVsaW5lLyIsInNvdXJjZXMiOlsidGltZWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFJTixNQUFNLEVBRU4sU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFnQixNQUFNLFVBQVUsQ0FBQztBQUUvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ25HLE9BQU8sTUFBTSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBR3JDLG9DQXFCQzs7Ozs7OztJQWhCQywyQkFBVzs7Ozs7SUFJWCw4QkFBYzs7Ozs7SUFFZCw0QkFBVzs7Ozs7SUFFWCw0QkFBVzs7Ozs7SUFFWCw0QkFBWTs7Ozs7SUFFWiw0QkFBWTs7Ozs7SUFFWiw0QkFBWTs7Ozs7O0FBSWQsbUNBYUM7Ozs7OztJQVhDLDJCQUFXOzs7OztJQUVYLDJCQUFXOzs7OztJQUVYLDJCQUFZOzs7OztJQUVaLDJCQUFZOzs7OztJQUVaLDJCQUFZOzs7Ozs7QUFLZCx5Q0FHQzs7O0lBRkMsbUNBQXFCOztJQUNyQixpQ0FBVTs7QUFHWjtJQTZCRSxhQUFhO0lBRWIsNkJBQW9CLE1BQWMsRUFBRSxTQUE2QjtRQUE3QyxXQUFNLEdBQU4sTUFBTSxDQUFROztRQWpCVixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRVYsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUMzQixTQUFJLEdBQXFCLEVBQUUsQ0FBQztRQUU1QixhQUFRLEdBQWtCLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FB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QUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7OEJBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7NEJBQ0wsTUFBTTs7SUFiaUI7UUFBZCxXQUFXLEVBQUU7O3NEQUFXO0lBRVY7UUFBZCxXQUFXLEVBQUU7O3dEQUFhO0lBTVo7UUFBZCxXQUFXLEVBQUU7O3VEQUFjO0lBRWI7UUFBZCxXQUFXLEVBQUU7OzREQUFpQjtJQUNmO1FBQWYsWUFBWSxFQUFFOzt1REFBZTtJQXlJekMsMEJBQUM7Q0FBQSxBQWxLRCxJQWtLQztTQTFKWSxtQkFBbUI7Ozs7OztJQUM5QixtQ0FBb0U7Ozs7O0lBQ3BFLG9DQUFxQjs7SUFJckIsb0NBQWtDOztJQUNsQyxvQ0FBMkM7O0lBQzNDLHNDQUFvQzs7SUFDcEMsbUNBQXFDOztJQUNyQyx1Q0FBaUM7O0lBQ2pDLHVDQUFpSDs7SUFDakgsbUNBQWdDOztJQUNoQyx1Q0FBK0Q7O0lBQy9ELHFDQUFxQzs7SUFDckMsc0NBQTZDOztJQUM3QywwQ0FBd0M7O0lBQ3hDLHFDQUF1Qzs7SUFDdkMsb0NBQTJDOztJQUMzQyx3Q0FBOEQ7Ozs7O0lBSWxELHFDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydCwgRXZlbnQsIFR5cGVzIH0gZnJvbSAnQGFudHYvZzInO1xuaW1wb3J0IHsgRzJUaW1lIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L2NvcmUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBkZXByZWNhdGlvbjEwLCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCB0b0RhdGUgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgZm9ybWF0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEcyVGltZWxpbmVEYXRhIHtcbiAgLyoqXG4gICAqIOaXtumXtOWAvFxuICAgKiBAZGVwcmVjYXRlZCBVc2UgYHRpbWVgIGluc3RlYWRcbiAgICovXG4gIHg/OiBHMlRpbWU7XG4gIC8qKlxuICAgKiDml7bpl7TlgLxcbiAgICovXG4gIHRpbWU/OiBHMlRpbWU7XG4gIC8qKiDmjIfmoIcx5pWw5o2uICovXG4gIHkxOiBudW1iZXI7XG4gIC8qKiDmjIfmoIcy5pWw5o2uICovXG4gIHkyOiBudW1iZXI7XG4gIC8qKiDmjIfmoIcz5pWw5o2uICovXG4gIHkzPzogbnVtYmVyO1xuICAvKiog5oyH5qCHNOaVsOaNriAqL1xuICB5ND86IG51bWJlcjtcbiAgLyoqIOaMh+aghzXmlbDmja4gKi9cbiAgeTU/OiBudW1iZXI7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHMlRpbWVsaW5lTWFwIHtcbiAgLyoqIOaMh+aghzEgKi9cbiAgeTE6IHN0cmluZztcbiAgLyoqIOaMh+aghyAqL1xuICB5Mjogc3RyaW5nO1xuICAvKiog5oyH5qCHMyAqL1xuICB5Mz86IHN0cmluZztcbiAgLyoqIOaMh+aghzQgKi9cbiAgeTQ/OiBzdHJpbmc7XG4gIC8qKiDmjIfmoIc1ICovXG4gIHk1Pzogc3RyaW5nO1xuXG4gIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHMlRpbWVsaW5lQ2xpY2tJdGVtIHtcbiAgaXRlbTogRzJUaW1lbGluZURhdGE7XG4gIGV2OiBFdmVudDtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItdGltZWxpbmUnLFxuICBleHBvcnRBczogJ2cyVGltZWxpbmUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGltZWxpbmUuY29tcG9uZW50Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEcyVGltZWxpbmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pIHByaXZhdGUgbm9kZTogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBjaGFydDogQ2hhcnQ7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBkZWxheSA9IDA7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbWF4QXhpcyA9IDI7XG4gIEBJbnB1dCgpIGRhdGE6IEcyVGltZWxpbmVEYXRhW10gPSBbXTtcbiAgQElucHV0KCkgdGl0bGVNYXA6IEcyVGltZWxpbmVNYXA7XG4gIEBJbnB1dCgpIGNvbG9yTWFwOiBHMlRpbWVsaW5lTWFwID0geyB5MTogJyM1QjhGRjknLCB5MjogJyM1QUQ4QTYnLCB5MzogJyM1RDcwOTInLCB5NDogJyNGNkJEMTYnLCB5NTogJyNFODY0NTInIH07XG4gIEBJbnB1dCgpIG1hc2s6IHN0cmluZyA9ICdISDptbSc7XG4gIEBJbnB1dCgpIHBvc2l0aW9uOiAndG9wJyB8ICdyaWdodCcgfCAnYm90dG9tJyB8ICdsZWZ0JyA9ICd0b3AnO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQgPSA0NTA7XG4gIEBJbnB1dCgpIHBhZGRpbmc6IG51bWJlcltdID0gWzQwLCA4LCA2NCwgNDBdO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBib3JkZXJXaWR0aCA9IDI7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzbGlkZXIgPSB0cnVlO1xuICBASW5wdXQoKSB0aGVtZTogc3RyaW5nIHwgVHlwZXMuTG9vc2VPYmplY3Q7XG4gIEBPdXRwdXQoKSBjbGlja0l0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyPEcyVGltZWxpbmVDbGlja0l0ZW0+KCk7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlKSB7XG4gICAgY29uZmlnU3J2LmF0dGFjaEtleSh0aGlzLCAnY2hhcnQnLCAndGhlbWUnKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnN0YWxsKCksIHRoaXMuZGVsYXkpKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5zdGFsbCgpIHtcbiAgICBjb25zdCB7IG5vZGUsIGhlaWdodCwgcGFkZGluZywgc2xpZGVyLCBtYXhBeGlzLCB0aGVtZSwgbWFzayB9ID0gdGhpcztcbiAgICBjb25zdCBjaGFydCA9ICh0aGlzLmNoYXJ0ID0gbmV3IENoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogbm9kZS5uYXRpdmVFbGVtZW50LFxuICAgICAgYXV0b0ZpdDogdHJ1ZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIHBhZGRpbmcsXG4gICAgICB0aGVtZSxcbiAgICB9KSk7XG4gICAgY2hhcnQuYXhpcygndGltZScsIHsgdGl0bGU6IG51bGwgfSk7XG4gICAgY2hhcnQuYXhpcygneTEnLCB7IHRpdGxlOiBudWxsIH0pO1xuICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IG1heEF4aXM7IGkrKykge1xuICAgICAgY2hhcnQuYXhpcyhgeSR7aX1gLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgY2hhcnQubGluZSgpLnBvc2l0aW9uKCd0aW1lKnkxJyk7XG4gICAgZm9yIChsZXQgaSA9IDI7IGkgPD0gbWF4QXhpczsgaSsrKSB7XG4gICAgICBjaGFydC5saW5lKCkucG9zaXRpb24oYHRpbWUqeSR7aX1gKTtcbiAgICB9XG5cbiAgICBjaGFydC50b29sdGlwKHtcbiAgICAgIHNob3dDcm9zc2hhaXJzOiB0cnVlLFxuICAgICAgc2hhcmVkOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgY29uc3Qgc2xpZGVyUGFkZGluZyA9IHsgLi4uW10sIC4uLnBhZGRpbmcgfTtcbiAgICBzbGlkZXJQYWRkaW5nWzBdID0gMDtcbiAgICBpZiAoc2xpZGVyKSB7XG4gICAgICBjaGFydC5vcHRpb24oJ3NsaWRlcicsIHtcbiAgICAgICAgaGVpZ2h0OiAyNixcbiAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgIGVuZDogMSxcbiAgICAgICAgdHJlbmRDZmc6IHtcbiAgICAgICAgICBpc0FyZWE6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBtaW5MaW1pdDogMixcbiAgICAgICAgZm9ybWF0dGVyOiAodmFsOiBEYXRlKSA9PiBmb3JtYXQodmFsLCBtYXNrKSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoYXJ0Lm9uKGBwbG90OmNsaWNrYCwgKGV2OiBFdmVudCkgPT4ge1xuICAgICAgY29uc3QgcmVjb3JkcyA9IHRoaXMuY2hhcnQuZ2V0U25hcFJlY29yZHMoeyB4OiBldi54LCB5OiBldi55IH0pO1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuY2xpY2tJdGVtLmVtaXQoeyBpdGVtOiByZWNvcmRzWzBdLl9vcmlnaW4sIGV2IH0pKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXR0YWNoQ2hhcnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoQ2hhcnQoKSB7XG4gICAgY29uc3QgeyBjaGFydCwgaGVpZ2h0LCBwYWRkaW5nLCBtYXNrLCB0aXRsZU1hcCwgcG9zaXRpb24sIGNvbG9yTWFwLCBib3JkZXJXaWR0aCwgbWF4QXhpcyB9ID0gdGhpcztcbiAgICBsZXQgZGF0YSA9IFsuLi50aGlzLmRhdGFdO1xuICAgIGlmICghY2hhcnQgfHwgIWRhdGEgfHwgZGF0YS5sZW5ndGggPD0gMCkgcmV0dXJuO1xuXG4gICAgY29uc3QgYXJyQXhpcyA9IFsuLi5BcnJheShtYXhBeGlzKV0ubWFwKChfLCBpbmRleCkgPT4gaW5kZXggKyAxKTtcblxuICAgIGNoYXJ0LmxlZ2VuZCh7XG4gICAgICBwb3NpdGlvbixcbiAgICAgIGN1c3RvbTogdHJ1ZSxcbiAgICAgIGl0ZW1zOiBhcnJBeGlzLm1hcChpZCA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IGB5JHtpZH1gO1xuICAgICAgICByZXR1cm4geyBuYW1lOiB0aXRsZU1hcFtrZXldLCB2YWx1ZTogdGl0bGVNYXBba2V5XSwgbWFya2VyOiB7IHN0eWxlOiB7IGZpbGw6IGNvbG9yTWFwW2tleV0gfSB9IH0gYXMgVHlwZXMuTGVnZW5kSXRlbTtcbiAgICAgIH0pLFxuICAgIH0pO1xuXG4gICAgLy8gYm9yZGVyXG4gICAgY2hhcnQuZ2VvbWV0cmllcy5mb3JFYWNoKCh2LCBpZHg6IG51bWJlcikgPT4ge1xuICAgICAgdi5jb2xvcigoY29sb3JNYXAgYXMgTnpTYWZlQW55KVtgeSR7aWR4ICsgMX1gXSkuc2l6ZShib3JkZXJXaWR0aCk7XG4gICAgfSk7XG4gICAgY2hhcnQuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIGNoYXJ0LnBhZGRpbmcgPSBwYWRkaW5nO1xuXG4gICAgLy8gVE9ETzogY29tcGF0aWJsZVxuICAgIGlmIChkYXRhLmZpbmQodyA9PiAhIXcueCkgIT0gbnVsbCkge1xuICAgICAgZGVwcmVjYXRpb24xMCgnZzItdGltZWxpbmUnLCAneCcsICd0aW1lJyk7XG4gICAgICBkYXRhLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0udGltZSA9IG5ldyBEYXRlKGl0ZW0ueCEpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIOi9rOaNouaIkOaXpeacn+exu+Wei1xuICAgIGRhdGEgPSBkYXRhXG4gICAgICAubWFwKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLnRpbWUgPSB0b0RhdGUoaXRlbS50aW1lISk7XG4gICAgICAgIGl0ZW0uX3RpbWUgPSAraXRlbS50aW1lO1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH0pXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5fdGltZSAtIGIuX3RpbWUpO1xuXG4gICAgY29uc3QgbWF4ID0gTWF0aC5tYXgoLi4uYXJyQXhpcy5tYXAoaWQgPT4gWy4uLmRhdGFdLnNvcnQoKGEsIGIpID0+IGJbYHkke2lkfWBdIC0gYVtgeSR7aWR9YF0pWzBdW2B5JHtpZH1gXSkpO1xuICAgIGNvbnN0IHNjYWxlT3B0aW9uczogUmVjb3JkPHN0cmluZywgVHlwZXMuU2NhbGVPcHRpb24+ID0ge307XG4gICAgYXJyQXhpcy5mb3JFYWNoKGlkID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IGB5JHtpZH1gO1xuICAgICAgc2NhbGVPcHRpb25zW2tleV0gPSB7XG4gICAgICAgIGFsaWFzOiB0aXRsZU1hcFtrZXldLFxuICAgICAgICBtYXgsXG4gICAgICAgIG1pbjogMCxcbiAgICAgIH07XG4gICAgfSk7XG4gICAgY2hhcnQuc2NhbGUoe1xuICAgICAgdGltZToge1xuICAgICAgICB0eXBlOiAndGltZScsXG4gICAgICAgIG1hc2ssXG4gICAgICAgIHJhbmdlOiBbMCwgMV0sXG4gICAgICB9LFxuICAgICAgLi4uc2NhbGVPcHRpb25zLFxuICAgIH0pO1xuXG4gICAgY29uc3QgaW5pdGlhbFJhbmdlID0ge1xuICAgICAgc3RhcnQ6IGRhdGFbMF0uX3RpbWUsXG4gICAgICBlbmQ6IGRhdGFbZGF0YS5sZW5ndGggLSAxXS5fdGltZSxcbiAgICB9O1xuICAgIGNvbnN0IGZpbHRlckRhdGEgPSBkYXRhLmZpbHRlcih2YWwgPT4gdmFsLl90aW1lID49IGluaXRpYWxSYW5nZS5zdGFydCAmJiB2YWwuX3RpbWUgPD0gaW5pdGlhbFJhbmdlLmVuZCk7XG4gICAgY2hhcnQuY2hhbmdlRGF0YShmaWx0ZXJEYXRhKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuYXR0YWNoQ2hhcnQoKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jaGFydCkge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5jaGFydC5kZXN0cm95KCkpO1xuICAgIH1cbiAgfVxufVxuIl19