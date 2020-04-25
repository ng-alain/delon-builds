/**
 * @fileoverview added by tsickle
 * Generated from: mini-area.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, ViewEncapsulation, } from '@angular/core';
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
        theme: [{ type: Input }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1hcmVhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC9taW5pLWFyZWEvIiwic291cmNlcyI6WyJtaW5pLWFyZWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUlOLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRWpDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7O0FBRTVFLG9DQUlDOzs7SUFIQywyQkFBTzs7SUFDUCwyQkFBTzs7O0FBSVQ7SUFnQ0UsYUFBYTtJQUViLDZCQUFvQixFQUFjLEVBQVUsTUFBYyxFQUFFLFNBQTZCO1FBQXJFLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFROztRQWxCbEMsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUN6QixVQUFLLEdBQUcseUJBQXlCLENBQUM7UUFDbEMsZ0JBQVcsR0FBRyxTQUFTLENBQUM7UUFDVCxnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1gsUUFBRyxHQUFHLElBQUksQ0FBQztRQUNYLFNBQUksR0FBRyxLQUFLLENBQUM7UUFDYixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBRy9CLFlBQU8sR0FBK0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuRCxTQUFJLEdBQXFCLEVBQUUsQ0FBQztRQUM1QixtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQixnQkFBVyxHQUF1QixTQUFTLENBQUM7UUFNbkQsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsT0FB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OztJQUNqQywwQ0FBd0M7O0lBQ3hDLHFDQUFvQzs7SUFDcEMsa0NBQW9DOztJQUNwQyxtQ0FBc0M7O0lBQ3RDLHNDQUF3Qzs7SUFDeEMsb0NBQW9COztJQUNwQixvQ0FBb0I7O0lBQ3BCLHNDQUE0RDs7SUFDNUQsbUNBQXFDOztJQUNyQyw2Q0FBNkI7O0lBQzdCLDBDQUFxRDs7SUFDckQsb0NBQXFDOzs7OztJQUl6QixpQ0FBc0I7Ozs7O0lBQUUscUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnQgfSBmcm9tICdAYW50di9nMic7XG5pbXBvcnQgeyBMb29zZU9iamVjdCwgVG9vbHRpcE9wdGlvbiB9IGZyb20gJ0BhbnR2L2cyL2xpYi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEcyTWluaUFyZWFEYXRhIHtcbiAgeDogYW55O1xuICB5OiBhbnk7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItbWluaS1hcmVhJyxcbiAgZXhwb3J0QXM6ICdnMk1pbmlBcmVhJyxcbiAgdGVtcGxhdGU6IGBgLFxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS5oZWlnaHQucHhdJzogJ2hlaWdodCcsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRzJNaW5pQXJlYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGNoYXJ0OiBDaGFydDtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGRlbGF5ID0gMDtcbiAgQElucHV0KCkgY29sb3IgPSAncmdiYSgyNCwgMTQ0LCAyNTUsIDAuMiknO1xuICBASW5wdXQoKSBib3JkZXJDb2xvciA9ICcjMTg5MEZGJztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgYm9yZGVyV2lkdGggPSAyO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQgPSA1NjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGZpdCA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsaW5lID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhbmltYXRlID0gdHJ1ZTtcbiAgQElucHV0KCkgeEF4aXM6IGFueTtcbiAgQElucHV0KCkgeUF4aXM6IGFueTtcbiAgQElucHV0KCkgcGFkZGluZzogbnVtYmVyIHwgbnVtYmVyW10gfCAnYXV0bycgPSBbOCwgOCwgOCwgOF07XG4gIEBJbnB1dCgpIGRhdGE6IEcyTWluaUFyZWFEYXRhW10gPSBbXTtcbiAgQElucHV0KCkgeVRvb2x0aXBTdWZmaXggPSAnJztcbiAgQElucHV0KCkgdG9vbHRpcFR5cGU6ICdtaW5pJyB8ICdkZWZhdWx0JyA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgdGhlbWU6IHN0cmluZyB8IExvb3NlT2JqZWN0O1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIG5nWm9uZTogTmdab25lLCBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSkge1xuICAgIGNvbmZpZ1Nydi5hdHRhY2hLZXkodGhpcywgJ2NoYXJ0JywgJ3RoZW1lJyk7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGwoKSB7XG4gICAgY29uc3QgeyBlbCwgZml0LCBoZWlnaHQsIHBhZGRpbmcsIHhBeGlzLCB5QXhpcywgeVRvb2x0aXBTdWZmaXgsIHRvb2x0aXBUeXBlLCBsaW5lLCB0aGVtZSB9ID0gdGhpcztcbiAgICBjb25zdCBjaGFydCA9ICh0aGlzLmNoYXJ0ID0gbmV3IENoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIGF1dG9GaXQ6IGZpdCxcbiAgICAgIGhlaWdodCxcbiAgICAgIHBhZGRpbmcsXG4gICAgICB0aGVtZSxcbiAgICB9KSk7XG5cbiAgICBpZiAoIXhBeGlzICYmICF5QXhpcykge1xuICAgICAgY2hhcnQuYXhpcyhmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKHhBeGlzKSB7XG4gICAgICBjaGFydC5heGlzKCd4JywgeEF4aXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGFydC5heGlzKCd4JywgZmFsc2UpO1xuICAgIH1cblxuICAgIGlmICh5QXhpcykge1xuICAgICAgY2hhcnQuYXhpcygneScsIHlBeGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hhcnQuYXhpcygneScsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBjaGFydC5sZWdlbmQoZmFsc2UpO1xuICAgIGNvbnN0IHRvb2x0aXBPcHRpb246IFRvb2x0aXBPcHRpb24gPSB7XG4gICAgICBzaG93VGl0bGU6IGZhbHNlLFxuICAgICAgc2hvd01hcmtlcnM6IHRydWUsXG4gICAgICBlbnRlcmFibGU6IHRydWUsXG4gICAgICBkb21TdHlsZXM6IHtcbiAgICAgICAgJ2cyLXRvb2x0aXAnOiB7IHBhZGRpbmc6ICcwcHgnIH0sXG4gICAgICAgICdnMi10b29sdGlwLXRpdGxlJzogeyBkaXNwbGF5OiAnbm9uZScgfSxcbiAgICAgICAgJ2cyLXRvb2x0aXAtbGlzdC1pdGVtJzogeyBtYXJnaW46ICc0cHgnIH0sXG4gICAgICB9LFxuICAgIH07XG4gICAgaWYgKHRvb2x0aXBUeXBlID09PSAnbWluaScpIHtcbiAgICAgIHRvb2x0aXBPcHRpb24ucG9zaXRpb24gPSAndG9wJztcbiAgICAgIHRvb2x0aXBPcHRpb24uZG9tU3R5bGVzIVsnZzItdG9vbHRpcCddID0geyBwYWRkaW5nOiAnMHB4JywgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLCBib3hTaGFkb3c6ICdub25lJyB9O1xuICAgICAgdG9vbHRpcE9wdGlvbi5pdGVtVHBsID0gYDxsaT57dmFsdWV9PC9saT5gO1xuICAgICAgdG9vbHRpcE9wdGlvbi5vZmZzZXQgPSAwO1xuICAgIH1cbiAgICBjaGFydC50b29sdGlwKHRvb2x0aXBPcHRpb24pO1xuXG4gICAgY2hhcnRcbiAgICAgIC5hcmVhKClcbiAgICAgIC5wb3NpdGlvbigneCp5JylcbiAgICAgIC50b29sdGlwKCd4KnknLCAoeCwgeSkgPT4gKHsgbmFtZTogeCwgdmFsdWU6IHkgKyB5VG9vbHRpcFN1ZmZpeCB9KSlcbiAgICAgIC5zaGFwZSgnc21vb3RoJyk7XG5cbiAgICBpZiAobGluZSkge1xuICAgICAgY2hhcnQubGluZSgpLnBvc2l0aW9uKCd4KnknKS5zaGFwZSgnc21vb3RoJykudG9vbHRpcChmYWxzZSk7XG4gICAgfVxuXG4gICAgY2hhcnQucmVuZGVyKCk7XG5cbiAgICB0aGlzLmF0dGFjaENoYXJ0KCk7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaENoYXJ0KCkge1xuICAgIGNvbnN0IHsgY2hhcnQsIGxpbmUsIGZpdCwgaGVpZ2h0LCBhbmltYXRlLCBwYWRkaW5nLCBkYXRhLCBjb2xvciwgYm9yZGVyQ29sb3IsIGJvcmRlcldpZHRoIH0gPSB0aGlzO1xuICAgIGlmICghY2hhcnQgfHwgIWRhdGEgfHwgZGF0YS5sZW5ndGggPD0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGdlb21zID0gY2hhcnQuZ2VvbWV0cmllcztcbiAgICBnZW9tcy5mb3JFYWNoKGcgPT4gZy5jb2xvcihjb2xvcikpO1xuICAgIGlmIChsaW5lKSB7XG4gICAgICBnZW9tc1sxXS5jb2xvcihib3JkZXJDb2xvcikuc2l6ZShib3JkZXJXaWR0aCk7XG4gICAgfVxuXG4gICAgY2hhcnQuYXV0b0ZpdCA9IGZpdDtcbiAgICBjaGFydC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgY2hhcnQuYW5pbWF0ZShhbmltYXRlKTtcbiAgICBjaGFydC5wYWRkaW5nID0gcGFkZGluZztcblxuICAgIGNoYXJ0LmNoYW5nZURhdGEoZGF0YSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpLCB0aGlzLmRlbGF5KSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmF0dGFjaENoYXJ0KCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuY2hhcnQuZGVzdHJveSgpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==