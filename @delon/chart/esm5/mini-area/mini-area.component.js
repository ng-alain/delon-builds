/**
 * @fileoverview added by tsickle
 * Generated from: mini-area.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, NgZone, Output, ViewEncapsulation, } from '@angular/core';
import { Chart } from '@antv/g2';
import { AlainConfigService, InputBoolean, InputNumber } from '@delon/util';
/**
 * @record
 */
export function G2MiniAreaData() { }
if (false) {
    /** @type {?} */
    G2MiniAreaData.prototype.x;
    /** @type {?} */
    G2MiniAreaData.prototype.y;
    /* Skipping unhandled member: [key: string]: any;*/
}
/**
 * @record
 */
export function G2MiniAreaClickItem() { }
if (false) {
    /** @type {?} */
    G2MiniAreaClickItem.prototype.item;
    /** @type {?} */
    G2MiniAreaClickItem.prototype.ev;
}
var G2MiniAreaComponent = /** @class */ (function () {
    // #endregion
    function G2MiniAreaComponent(el, ngZone, configSrv) {
        this.el = el;
        this.ngZone = ngZone;
        // #region fields
        this.delay = 0;
        this.color = 'rgba(24, 144, 255, 0.2)';
        this.borderColor = '#1890FF';
        this.borderWidth = 2;
        this.height = 56;
        this.fit = true;
        this.line = false;
        this.animate = true;
        this.padding = [8, 8, 8, 8];
        this.data = [];
        this.yTooltipSuffix = '';
        this.tooltipType = 'default';
        this.clickItem = new EventEmitter();
        configSrv.attachKey(this, 'chart', 'theme');
    }
    /**
     * @private
     * @return {?}
     */
    G2MiniAreaComponent.prototype.install = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        var _a = this, el = _a.el, fit = _a.fit, height = _a.height, padding = _a.padding, xAxis = _a.xAxis, yAxis = _a.yAxis, yTooltipSuffix = _a.yTooltipSuffix, tooltipType = _a.tooltipType, line = _a.line, theme = _a.theme;
        /** @type {?} */
        var chart = (this.chart = new Chart({
            container: el.nativeElement,
            autoFit: fit,
            height: height,
            padding: padding,
            theme: theme,
        }));
        if (!xAxis && !yAxis) {
            chart.axis(false);
        }
        if (xAxis) {
            chart.axis('x', xAxis);
        }
        else {
            chart.axis('x', false);
        }
        if (yAxis) {
            chart.axis('y', yAxis);
        }
        else {
            chart.axis('y', false);
        }
        chart.legend(false);
        /** @type {?} */
        var tooltipOption = {
            showTitle: false,
            showMarkers: true,
            enterable: true,
            domStyles: {
                'g2-tooltip': { padding: '0px' },
                'g2-tooltip-title': { display: 'none' },
                'g2-tooltip-list-item': { margin: '4px' },
            },
        };
        if (tooltipType === 'mini') {
            tooltipOption.position = 'top';
            (/** @type {?} */ (tooltipOption.domStyles))['g2-tooltip'] = { padding: '0px', backgroundColor: 'transparent', boxShadow: 'none' };
            tooltipOption.itemTpl = "<li>{value}</li>";
            tooltipOption.offset = 0;
        }
        chart.tooltip(tooltipOption);
        chart
            .area()
            .position('x*y')
            .tooltip('x*y', (/**
         * @param {?} x
         * @param {?} y
         * @return {?}
         */
        function (x, y) { return ({ name: x, value: y + yTooltipSuffix }); }))
            .shape('smooth');
        if (line) {
            chart.line().position('x*y').shape('smooth').tooltip(false);
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
        chart.render();
        this.attachChart();
    };
    /**
     * @private
     * @return {?}
     */
    G2MiniAreaComponent.prototype.attachChart = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = this, chart = _a.chart, line = _a.line, fit = _a.fit, height = _a.height, animate = _a.animate, padding = _a.padding, data = _a.data, color = _a.color, borderColor = _a.borderColor, borderWidth = _a.borderWidth;
        if (!chart || !data || data.length <= 0) {
            return;
        }
        /** @type {?} */
        var geoms = chart.geometries;
        geoms.forEach((/**
         * @param {?} g
         * @return {?}
         */
        function (g) { return g.color(color); }));
        if (line) {
            geoms[1].color(borderColor).size(borderWidth);
        }
        chart.autoFit = fit;
        chart.height = height;
        chart.animate(animate);
        chart.padding = padding;
        chart.changeData(data);
    };
    /**
     * @return {?}
     */
    G2MiniAreaComponent.prototype.ngOnInit = /**
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
     * @return {?}
     */
    G2MiniAreaComponent.prototype.ngOnChanges = /**
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
    G2MiniAreaComponent.prototype.ngOnDestroy = /**
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
    G2MiniAreaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-mini-area',
                    exportAs: 'g2MiniArea',
                    template: "",
                    host: {
                        '[style.height.px]': 'height',
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    G2MiniAreaComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: AlainConfigService }
    ]; };
    G2MiniAreaComponent.propDecorators = {
        delay: [{ type: Input }],
        color: [{ type: Input }],
        borderColor: [{ type: Input }],
        borderWidth: [{ type: Input }],
        height: [{ type: Input }],
        fit: [{ type: Input }],
        line: [{ type: Input }],
        animate: [{ type: Input }],
        xAxis: [{ type: Input }],
        yAxis: [{ type: Input }],
        padding: [{ type: Input }],
        data: [{ type: Input }],
        yTooltipSuffix: [{ type: Input }],
        tooltipType: [{ type: Input }],
        theme: [{ type: Input }],
        clickItem: [{ type: Output }]
    };
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], G2MiniAreaComponent.prototype, "delay", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], G2MiniAreaComponent.prototype, "borderWidth", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], G2MiniAreaComponent.prototype, "height", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], G2MiniAreaComponent.prototype, "fit", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], G2MiniAreaComponent.prototype, "line", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], G2MiniAreaComponent.prototype, "animate", void 0);
    return G2MiniAreaComponent;
}());
export { G2MiniAreaComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    G2MiniAreaComponent.prototype.chart;
    /** @type {?} */
    G2MiniAreaComponent.prototype.delay;
    /** @type {?} */
    G2MiniAreaComponent.prototype.color;
    /** @type {?} */
    G2MiniAreaComponent.prototype.borderColor;
    /** @type {?} */
    G2MiniAreaComponent.prototype.borderWidth;
    /** @type {?} */
    G2MiniAreaComponent.prototype.height;
    /** @type {?} */
    G2MiniAreaComponent.prototype.fit;
    /** @type {?} */
    G2MiniAreaComponent.prototype.line;
    /** @type {?} */
    G2MiniAreaComponent.prototype.animate;
    /** @type {?} */
    G2MiniAreaComponent.prototype.xAxis;
    /** @type {?} */
    G2MiniAreaComponent.prototype.yAxis;
    /** @type {?} */
    G2MiniAreaComponent.prototype.padding;
    /** @type {?} */
    G2MiniAreaComponent.prototype.data;
    /** @type {?} */
    G2MiniAreaComponent.prototype.yTooltipSuffix;
    /** @type {?} */
    G2MiniAreaComponent.prototype.tooltipType;
    /** @type {?} */
    G2MiniAreaComponent.prototype.theme;
    /** @type {?} */
    G2MiniAreaComponent.prototype.clickItem;
    /**
     * @type {?}
     * @private
     */
    G2MiniAreaComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    G2MiniAreaComponent.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1hcmVhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC9taW5pLWFyZWEvIiwic291cmNlcyI6WyJtaW5pLWFyZWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFJTixNQUFNLEVBQ04saUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQWdCLE1BQU0sVUFBVSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7O0FBRTVFLG9DQUlDOzs7SUFIQywyQkFBTzs7SUFDUCwyQkFBTzs7Ozs7O0FBSVQseUNBR0M7OztJQUZDLG1DQUFxQjs7SUFDckIsaUNBQVU7O0FBR1o7SUFpQ0UsYUFBYTtJQUViLDZCQUFvQixFQUFjLEVBQVUsTUFBYyxFQUFFLFNBQTZCO1FBQXJFLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFROztRQW5CbEMsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUN6QixVQUFLLEdBQUcseUJBQXlCLENBQUM7UUFDbEMsZ0JBQVcsR0FBRyxTQUFTLENBQUM7UUFDVCxnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1gsUUFBRyxHQUFHLElBQUksQ0FBQztRQUNYLFNBQUksR0FBRyxLQUFLLENBQUM7UUFDYixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBRy9CLFlBQU8sR0FBK0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuRCxTQUFJLEdBQXFCLEVBQUUsQ0FBQztRQUM1QixtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNw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Q0MsVUFBVTtnQkFHVixNQUFNO2dCQVFDLGtCQUFrQjs7O3dCQTZCeEIsS0FBSzt3QkFDTCxLQUFLOzhCQUNMLEtBQUs7OEJBQ0wsS0FBSzt5QkFDTCxLQUFLO3NCQUNMLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxLQUFLO3VCQUNMLEtBQUs7aUNBQ0wsS0FBSzs4QkFDTCxLQUFLO3dCQUNMLEtBQUs7NEJBQ0wsTUFBTTs7SUFmaUI7UUFBZCxXQUFXLEVBQUU7O3NEQUFXO0lBR1Y7UUFBZCxXQUFXLEVBQUU7OzREQUFpQjtJQUNoQjtRQUFkLFdBQVcsRUFBRTs7dURBQWE7SUFDWDtRQUFmLFlBQVksRUFBRTs7b0RBQVk7SUFDWDtRQUFmLFlBQVksRUFBRTs7cURBQWM7SUFDYjtRQUFmLFlBQVksRUFBRTs7d0RBQWdCO0lBa0gxQywwQkFBQztDQUFBLEFBeklELElBeUlDO1NBOUhZLG1CQUFtQjs7Ozs7O0lBQzlCLG9DQUFxQjs7SUFJckIsb0NBQWtDOztJQUNsQyxvQ0FBMkM7O0lBQzNDLDBDQUFpQzs7SUFDakMsMENBQXdDOztJQUN4QyxxQ0FBb0M7O0lBQ3BDLGtDQUFvQzs7SUFDcEMsbUNBQXNDOztJQUN0QyxzQ0FBd0M7O0lBQ3hDLG9DQUFvQjs7SUFDcEIsb0NBQW9COztJQUNwQixzQ0FBNEQ7O0lBQzVELG1DQUFxQzs7SUFDckMsNkNBQTZCOztJQUM3QiwwQ0FBcUQ7O0lBQ3JELG9DQUEyQzs7SUFDM0Msd0NBQThEOzs7OztJQUlsRCxpQ0FBc0I7Ozs7O0lBQUUscUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXJ0LCBFdmVudCwgVHlwZXMgfSBmcm9tICdAYW50di9nMic7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRzJNaW5pQXJlYURhdGEge1xuICB4OiBhbnk7XG4gIHk6IGFueTtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEcyTWluaUFyZWFDbGlja0l0ZW0ge1xuICBpdGVtOiBHMk1pbmlBcmVhRGF0YTtcbiAgZXY6IEV2ZW50O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi1taW5pLWFyZWEnLFxuICBleHBvcnRBczogJ2cyTWluaUFyZWEnLFxuICB0ZW1wbGF0ZTogYGAsXG4gIGhvc3Q6IHtcbiAgICAnW3N0eWxlLmhlaWdodC5weF0nOiAnaGVpZ2h0JyxcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBHMk1pbmlBcmVhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgY2hhcnQ6IENoYXJ0O1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXkgPSAwO1xuICBASW5wdXQoKSBjb2xvciA9ICdyZ2JhKDI0LCAxNDQsIDI1NSwgMC4yKSc7XG4gIEBJbnB1dCgpIGJvcmRlckNvbG9yID0gJyMxODkwRkYnO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBib3JkZXJXaWR0aCA9IDI7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGhlaWdodCA9IDU2O1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZml0ID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxpbmUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGFuaW1hdGUgPSB0cnVlO1xuICBASW5wdXQoKSB4QXhpczogYW55O1xuICBASW5wdXQoKSB5QXhpczogYW55O1xuICBASW5wdXQoKSBwYWRkaW5nOiBudW1iZXIgfCBudW1iZXJbXSB8ICdhdXRvJyA9IFs4LCA4LCA4LCA4XTtcbiAgQElucHV0KCkgZGF0YTogRzJNaW5pQXJlYURhdGFbXSA9IFtdO1xuICBASW5wdXQoKSB5VG9vbHRpcFN1ZmZpeCA9ICcnO1xuICBASW5wdXQoKSB0b29sdGlwVHlwZTogJ21pbmknIHwgJ2RlZmF1bHQnID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSB0aGVtZTogc3RyaW5nIHwgVHlwZXMuTG9vc2VPYmplY3Q7XG4gIEBPdXRwdXQoKSBjbGlja0l0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyPEcyTWluaUFyZWFDbGlja0l0ZW0+KCk7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlKSB7XG4gICAgY29uZmlnU3J2LmF0dGFjaEtleSh0aGlzLCAnY2hhcnQnLCAndGhlbWUnKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5zdGFsbCgpIHtcbiAgICBjb25zdCB7IGVsLCBmaXQsIGhlaWdodCwgcGFkZGluZywgeEF4aXMsIHlBeGlzLCB5VG9vbHRpcFN1ZmZpeCwgdG9vbHRpcFR5cGUsIGxpbmUsIHRoZW1lIH0gPSB0aGlzO1xuICAgIGNvbnN0IGNoYXJ0ID0gKHRoaXMuY2hhcnQgPSBuZXcgQ2hhcnQoe1xuICAgICAgY29udGFpbmVyOiBlbC5uYXRpdmVFbGVtZW50LFxuICAgICAgYXV0b0ZpdDogZml0LFxuICAgICAgaGVpZ2h0LFxuICAgICAgcGFkZGluZyxcbiAgICAgIHRoZW1lLFxuICAgIH0pKTtcblxuICAgIGlmICgheEF4aXMgJiYgIXlBeGlzKSB7XG4gICAgICBjaGFydC5heGlzKGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAoeEF4aXMpIHtcbiAgICAgIGNoYXJ0LmF4aXMoJ3gnLCB4QXhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoYXJ0LmF4aXMoJ3gnLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKHlBeGlzKSB7XG4gICAgICBjaGFydC5heGlzKCd5JywgeUF4aXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGFydC5heGlzKCd5JywgZmFsc2UpO1xuICAgIH1cblxuICAgIGNoYXJ0LmxlZ2VuZChmYWxzZSk7XG4gICAgY29uc3QgdG9vbHRpcE9wdGlvbjogVHlwZXMuVG9vbHRpcE9wdGlvbiA9IHtcbiAgICAgIHNob3dUaXRsZTogZmFsc2UsXG4gICAgICBzaG93TWFya2VyczogdHJ1ZSxcbiAgICAgIGVudGVyYWJsZTogdHJ1ZSxcbiAgICAgIGRvbVN0eWxlczoge1xuICAgICAgICAnZzItdG9vbHRpcCc6IHsgcGFkZGluZzogJzBweCcgfSxcbiAgICAgICAgJ2cyLXRvb2x0aXAtdGl0bGUnOiB7IGRpc3BsYXk6ICdub25lJyB9LFxuICAgICAgICAnZzItdG9vbHRpcC1saXN0LWl0ZW0nOiB7IG1hcmdpbjogJzRweCcgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICBpZiAodG9vbHRpcFR5cGUgPT09ICdtaW5pJykge1xuICAgICAgdG9vbHRpcE9wdGlvbi5wb3NpdGlvbiA9ICd0b3AnO1xuICAgICAgdG9vbHRpcE9wdGlvbi5kb21TdHlsZXMhWydnMi10b29sdGlwJ10gPSB7IHBhZGRpbmc6ICcwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsIGJveFNoYWRvdzogJ25vbmUnIH07XG4gICAgICB0b29sdGlwT3B0aW9uLml0ZW1UcGwgPSBgPGxpPnt2YWx1ZX08L2xpPmA7XG4gICAgICB0b29sdGlwT3B0aW9uLm9mZnNldCA9IDA7XG4gICAgfVxuICAgIGNoYXJ0LnRvb2x0aXAodG9vbHRpcE9wdGlvbik7XG5cbiAgICBjaGFydFxuICAgICAgLmFyZWEoKVxuICAgICAgLnBvc2l0aW9uKCd4KnknKVxuICAgICAgLnRvb2x0aXAoJ3gqeScsICh4LCB5KSA9PiAoeyBuYW1lOiB4LCB2YWx1ZTogeSArIHlUb29sdGlwU3VmZml4IH0pKVxuICAgICAgLnNoYXBlKCdzbW9vdGgnKTtcblxuICAgIGlmIChsaW5lKSB7XG4gICAgICBjaGFydC5saW5lKCkucG9zaXRpb24oJ3gqeScpLnNoYXBlKCdzbW9vdGgnKS50b29sdGlwKGZhbHNlKTtcbiAgICB9XG5cbiAgICBjaGFydC5vbihgcGxvdDpjbGlja2AsIChldjogRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHJlY29yZHMgPSB0aGlzLmNoYXJ0LmdldFNuYXBSZWNvcmRzKHsgeDogZXYueCwgeTogZXYueSB9KTtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLmNsaWNrSXRlbS5lbWl0KHsgaXRlbTogcmVjb3Jkc1swXS5fb3JpZ2luLCBldiB9KSk7XG4gICAgfSk7XG5cbiAgICBjaGFydC5yZW5kZXIoKTtcblxuICAgIHRoaXMuYXR0YWNoQ2hhcnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoQ2hhcnQoKSB7XG4gICAgY29uc3QgeyBjaGFydCwgbGluZSwgZml0LCBoZWlnaHQsIGFuaW1hdGUsIHBhZGRpbmcsIGRhdGEsIGNvbG9yLCBib3JkZXJDb2xvciwgYm9yZGVyV2lkdGggfSA9IHRoaXM7XG4gICAgaWYgKCFjaGFydCB8fCAhZGF0YSB8fCBkYXRhLmxlbmd0aCA8PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZ2VvbXMgPSBjaGFydC5nZW9tZXRyaWVzO1xuICAgIGdlb21zLmZvckVhY2goZyA9PiBnLmNvbG9yKGNvbG9yKSk7XG4gICAgaWYgKGxpbmUpIHtcbiAgICAgIGdlb21zWzFdLmNvbG9yKGJvcmRlckNvbG9yKS5zaXplKGJvcmRlcldpZHRoKTtcbiAgICB9XG5cbiAgICBjaGFydC5hdXRvRml0ID0gZml0O1xuICAgIGNoYXJ0LmhlaWdodCA9IGhlaWdodDtcbiAgICBjaGFydC5hbmltYXRlKGFuaW1hdGUpO1xuICAgIGNoYXJ0LnBhZGRpbmcgPSBwYWRkaW5nO1xuXG4gICAgY2hhcnQuY2hhbmdlRGF0YShkYXRhKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnN0YWxsKCksIHRoaXMuZGVsYXkpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuYXR0YWNoQ2hhcnQoKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jaGFydCkge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5jaGFydC5kZXN0cm95KCkpO1xuICAgIH1cbiAgfVxufVxuIl19