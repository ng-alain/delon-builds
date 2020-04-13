/**
 * @fileoverview added by tsickle
 * Generated from: mini-area.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, ViewEncapsulation, } from '@angular/core';
import { Chart } from '@antv/g2';
import { InputBoolean, InputNumber } from '@delon/util';
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
    function G2MiniAreaComponent(el, ngZone) {
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
        var _a = this, el = _a.el, fit = _a.fit, height = _a.height, padding = _a.padding, xAxis = _a.xAxis, yAxis = _a.yAxis, yTooltipSuffix = _a.yTooltipSuffix, tooltipType = _a.tooltipType, line = _a.line;
        /** @type {?} */
        var chart = (this.chart = new Chart({
            container: el.nativeElement,
            autoFit: fit,
            height: height,
            padding: padding,
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
        { type: NgZone }
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
        tooltipType: [{ type: Input }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1hcmVhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC9taW5pLWFyZWEvIiwic291cmNlcyI6WyJtaW5pLWFyZWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUlOLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRWpDLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7O0FBRXhELG9DQUlDOzs7SUFIQywyQkFBTzs7SUFDUCwyQkFBTzs7O0FBSVQ7SUErQkUsYUFBYTtJQUViLDZCQUFvQixFQUFjLEVBQVUsTUFBYztRQUF0QyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTs7UUFqQmxDLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDekIsVUFBSyxHQUFHLHlCQUF5QixDQUFDO1FBQ2xDLGdCQUFXLEdBQUcsU0FBUyxDQUFDO1FBQ1QsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNYLFFBQUcsR0FBRyxJQUFJLENBQUM7UUFDWCxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2IsWUFBTyxHQUFHLElBQUksQ0FBQztRQUcvQixZQUFPLEdBQStCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkQsU0FBSSxHQUFxQixFQUFFLENBQUM7UUFDNUIsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDcEIsZ0JBQVcsR0FBdUIsU0FBUyxDQUFDO0lBSVEsQ0FBQzs7Ozs7SUFFdEQscUNBQU87Ozs7SUFBZjtRQUNRLElBQUEsU0FBb0YsRUFBbEYsVUFBRSxFQUFFLFlBQUcsRUFBRSxrQkFBTSxFQUFFLG9CQUFPLEVBQUUsZ0JBQUssRUFBRSxnQkFBSyxFQUFFLGtDQUFjLEVBQUUsNEJBQVcsRUFBRSxjQUFhOztZQUNwRixLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDO1lBQ3BDLFNBQVMsRUFBRSxFQUFFLENBQUMsYUFBYTtZQUMzQixPQUFPLEVBQUUsR0FBRztZQUNaLE1BQU0sUUFBQTtZQUNOLE9BQU8sU0FBQTtTQUNSLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDcEIsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQjtRQUVELElBQUksS0FBSyxFQUFFO1lBQ1QsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDeEI7YUFBTTtZQUNMLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxLQUFLLEVBQUU7WUFDVCxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN4QjthQUFNO1lBQ0wsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDeEI7UUFFRCxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDOztZQUNkLGFBQWEsR0FBa0I7WUFDbkMsU0FBUyxFQUFFLEtBQUs7WUFDaEIsV0FBVyxFQUFFLElBQUk7WUFDakIsU0FBUyxFQUFFLElBQUk7WUFDZixTQUFTLEVBQUU7Z0JBQ1QsWUFBWSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTtnQkFDaEMsa0JBQWtCLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFO2dCQUN2QyxzQkFBc0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7YUFDMUM7U0FDRjtRQUNELElBQUksV0FBVyxLQUFLLE1BQU0sRUFBRTtZQUMxQixhQUFhLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUMvQixtQkFBQSxhQUFhLENBQUMsU0FBUyxFQUFDLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxDQUFDO1lBQy9HLGFBQWEsQ0FBQyxPQUFPLEdBQUcsa0JBQWtCLENBQUM7WUFDM0MsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDMUI7UUFDRCxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRTdCLEtBQUs7YUFDRixJQUFJLEVBQUU7YUFDTixRQUFRLENBQUMsS0FBSyxDQUFDO2FBQ2YsT0FBTyxDQUFDLEtBQUs7Ozs7O1FBQUUsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxjQUFjLEVBQUUsQ0FBQyxFQUF4QyxDQUF3QyxFQUFDO2FBQ2xFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVuQixJQUFJLElBQUksRUFBRTtZQUNSLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3RDtRQUVELEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVmLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVPLHlDQUFXOzs7O0lBQW5CO1FBQ1EsSUFBQSxTQUE0RixFQUExRixnQkFBSyxFQUFFLGNBQUksRUFBRSxZQUFHLEVBQUUsa0JBQU0sRUFBRSxvQkFBTyxFQUFFLG9CQUFPLEVBQUUsY0FBSSxFQUFFLGdCQUFLLEVBQUUsNEJBQVcsRUFBRSw0QkFBb0I7UUFDbEcsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUN2QyxPQUFPO1NBQ1I7O1lBRUssS0FBSyxHQUFHLEtBQUssQ0FBQyxVQUFVO1FBQzlCLEtBQUssQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFkLENBQWMsRUFBQyxDQUFDO1FBQ25DLElBQUksSUFBSSxFQUFFO1lBQ1IsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDL0M7UUFFRCxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNwQixLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN0QixLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRXhCLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELHNDQUFROzs7SUFBUjtRQUFBLGlCQUVDO1FBREMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUI7OztRQUFDLGNBQU0sT0FBQSxVQUFVOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sRUFBRSxFQUFkLENBQWMsR0FBRSxLQUFJLENBQUMsS0FBSyxDQUFDLEVBQTVDLENBQTRDLEVBQUMsQ0FBQztJQUNwRixDQUFDOzs7O0lBRUQseUNBQVc7OztJQUFYO1FBQUEsaUJBRUM7UUFEQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQjs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxXQUFXLEVBQUUsRUFBbEIsQ0FBa0IsRUFBQyxDQUFDO0lBQzFELENBQUM7Ozs7SUFFRCx5Q0FBVzs7O0lBQVg7UUFBQSxpQkFJQztRQUhDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCOzs7WUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBcEIsQ0FBb0IsRUFBQyxDQUFDO1NBQzNEO0lBQ0gsQ0FBQzs7Z0JBOUhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSxFQUFFO29CQUNaLElBQUksRUFBRTt3QkFDSixtQkFBbUIsRUFBRSxRQUFRO3FCQUM5QjtvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzs7O2dCQTVCQyxVQUFVO2dCQUVWLE1BQU07Ozt3QkFnQ0wsS0FBSzt3QkFDTCxLQUFLOzhCQUNMLEtBQUs7OEJBQ0wsS0FBSzt5QkFDTCxLQUFLO3NCQUNMLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxLQUFLO3VCQUNMLEtBQUs7aUNBQ0wsS0FBSzs4QkFDTCxLQUFLOztJQWJrQjtRQUFkLFdBQVcsRUFBRTs7c0RBQVc7SUFHVjtRQUFkLFdBQVcsRUFBRTs7NERBQWlCO0lBQ2hCO1FBQWQsV0FBVyxFQUFFOzt1REFBYTtJQUNYO1FBQWYsWUFBWSxFQUFFOztvREFBWTtJQUNYO1FBQWYsWUFBWSxFQUFFOztxREFBYztJQUNiO1FBQWYsWUFBWSxFQUFFOzt3REFBZ0I7SUF3RzFDLDBCQUFDO0NBQUEsQUEvSEQsSUErSEM7U0FwSFksbUJBQW1COzs7Ozs7SUFDOUIsb0NBQXFCOztJQUlyQixvQ0FBa0M7O0lBQ2xDLG9DQUEyQzs7SUFDM0MsMENBQWlDOztJQUNqQywwQ0FBd0M7O0lBQ3hDLHFDQUFvQzs7SUFDcEMsa0NBQW9DOztJQUNwQyxtQ0FBc0M7O0lBQ3RDLHNDQUF3Qzs7SUFDeEMsb0NBQW9COztJQUNwQixvQ0FBb0I7O0lBQ3BCLHNDQUE0RDs7SUFDNUQsbUNBQXFDOztJQUNyQyw2Q0FBNkI7O0lBQzdCLDBDQUFxRDs7Ozs7SUFJekMsaUNBQXNCOzs7OztJQUFFLHFDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXJ0IH0gZnJvbSAnQGFudHYvZzInO1xuaW1wb3J0IHsgVG9vbHRpcE9wdGlvbiB9IGZyb20gJ0BhbnR2L2cyL2xpYi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuZXhwb3J0IGludGVyZmFjZSBHMk1pbmlBcmVhRGF0YSB7XG4gIHg6IGFueTtcbiAgeTogYW55O1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLW1pbmktYXJlYScsXG4gIGV4cG9ydEFzOiAnZzJNaW5pQXJlYScsXG4gIHRlbXBsYXRlOiBgYCxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUuaGVpZ2h0LnB4XSc6ICdoZWlnaHQnLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEcyTWluaUFyZWFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBjaGFydDogQ2hhcnQ7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBkZWxheSA9IDA7XG4gIEBJbnB1dCgpIGNvbG9yID0gJ3JnYmEoMjQsIDE0NCwgMjU1LCAwLjIpJztcbiAgQElucHV0KCkgYm9yZGVyQ29sb3IgPSAnIzE4OTBGRic7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGJvcmRlcldpZHRoID0gMjtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgaGVpZ2h0ID0gNTY7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBmaXQgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbGluZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYW5pbWF0ZSA9IHRydWU7XG4gIEBJbnB1dCgpIHhBeGlzOiBhbnk7XG4gIEBJbnB1dCgpIHlBeGlzOiBhbnk7XG4gIEBJbnB1dCgpIHBhZGRpbmc6IG51bWJlciB8IG51bWJlcltdIHwgJ2F1dG8nID0gWzgsIDgsIDgsIDhdO1xuICBASW5wdXQoKSBkYXRhOiBHMk1pbmlBcmVhRGF0YVtdID0gW107XG4gIEBJbnB1dCgpIHlUb29sdGlwU3VmZml4ID0gJyc7XG4gIEBJbnB1dCgpIHRvb2x0aXBUeXBlOiAnbWluaScgfCAnZGVmYXVsdCcgPSAnZGVmYXVsdCc7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHt9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsKCkge1xuICAgIGNvbnN0IHsgZWwsIGZpdCwgaGVpZ2h0LCBwYWRkaW5nLCB4QXhpcywgeUF4aXMsIHlUb29sdGlwU3VmZml4LCB0b29sdGlwVHlwZSwgbGluZSB9ID0gdGhpcztcbiAgICBjb25zdCBjaGFydCA9ICh0aGlzLmNoYXJ0ID0gbmV3IENoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIGF1dG9GaXQ6IGZpdCxcbiAgICAgIGhlaWdodCxcbiAgICAgIHBhZGRpbmcsXG4gICAgfSkpO1xuXG4gICAgaWYgKCF4QXhpcyAmJiAheUF4aXMpIHtcbiAgICAgIGNoYXJ0LmF4aXMoZmFsc2UpO1xuICAgIH1cblxuICAgIGlmICh4QXhpcykge1xuICAgICAgY2hhcnQuYXhpcygneCcsIHhBeGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hhcnQuYXhpcygneCcsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAoeUF4aXMpIHtcbiAgICAgIGNoYXJ0LmF4aXMoJ3knLCB5QXhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoYXJ0LmF4aXMoJ3knLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgY2hhcnQubGVnZW5kKGZhbHNlKTtcbiAgICBjb25zdCB0b29sdGlwT3B0aW9uOiBUb29sdGlwT3B0aW9uID0ge1xuICAgICAgc2hvd1RpdGxlOiBmYWxzZSxcbiAgICAgIHNob3dNYXJrZXJzOiB0cnVlLFxuICAgICAgZW50ZXJhYmxlOiB0cnVlLFxuICAgICAgZG9tU3R5bGVzOiB7XG4gICAgICAgICdnMi10b29sdGlwJzogeyBwYWRkaW5nOiAnMHB4JyB9LFxuICAgICAgICAnZzItdG9vbHRpcC10aXRsZSc6IHsgZGlzcGxheTogJ25vbmUnIH0sXG4gICAgICAgICdnMi10b29sdGlwLWxpc3QtaXRlbSc6IHsgbWFyZ2luOiAnNHB4JyB9LFxuICAgICAgfSxcbiAgICB9O1xuICAgIGlmICh0b29sdGlwVHlwZSA9PT0gJ21pbmknKSB7XG4gICAgICB0b29sdGlwT3B0aW9uLnBvc2l0aW9uID0gJ3RvcCc7XG4gICAgICB0b29sdGlwT3B0aW9uLmRvbVN0eWxlcyFbJ2cyLXRvb2x0aXAnXSA9IHsgcGFkZGluZzogJzBweCcsIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JywgYm94U2hhZG93OiAnbm9uZScgfTtcbiAgICAgIHRvb2x0aXBPcHRpb24uaXRlbVRwbCA9IGA8bGk+e3ZhbHVlfTwvbGk+YDtcbiAgICAgIHRvb2x0aXBPcHRpb24ub2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgY2hhcnQudG9vbHRpcCh0b29sdGlwT3B0aW9uKTtcblxuICAgIGNoYXJ0XG4gICAgICAuYXJlYSgpXG4gICAgICAucG9zaXRpb24oJ3gqeScpXG4gICAgICAudG9vbHRpcCgneCp5JywgKHgsIHkpID0+ICh7IG5hbWU6IHgsIHZhbHVlOiB5ICsgeVRvb2x0aXBTdWZmaXggfSkpXG4gICAgICAuc2hhcGUoJ3Ntb290aCcpO1xuXG4gICAgaWYgKGxpbmUpIHtcbiAgICAgIGNoYXJ0LmxpbmUoKS5wb3NpdGlvbigneCp5Jykuc2hhcGUoJ3Ntb290aCcpLnRvb2x0aXAoZmFsc2UpO1xuICAgIH1cblxuICAgIGNoYXJ0LnJlbmRlcigpO1xuXG4gICAgdGhpcy5hdHRhY2hDaGFydCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hDaGFydCgpIHtcbiAgICBjb25zdCB7IGNoYXJ0LCBsaW5lLCBmaXQsIGhlaWdodCwgYW5pbWF0ZSwgcGFkZGluZywgZGF0YSwgY29sb3IsIGJvcmRlckNvbG9yLCBib3JkZXJXaWR0aCB9ID0gdGhpcztcbiAgICBpZiAoIWNoYXJ0IHx8ICFkYXRhIHx8IGRhdGEubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBnZW9tcyA9IGNoYXJ0Lmdlb21ldHJpZXM7XG4gICAgZ2VvbXMuZm9yRWFjaChnID0+IGcuY29sb3IoY29sb3IpKTtcbiAgICBpZiAobGluZSkge1xuICAgICAgZ2VvbXNbMV0uY29sb3IoYm9yZGVyQ29sb3IpLnNpemUoYm9yZGVyV2lkdGgpO1xuICAgIH1cblxuICAgIGNoYXJ0LmF1dG9GaXQgPSBmaXQ7XG4gICAgY2hhcnQuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIGNoYXJ0LmFuaW1hdGUoYW5pbWF0ZSk7XG4gICAgY2hhcnQucGFkZGluZyA9IHBhZGRpbmc7XG5cbiAgICBjaGFydC5jaGFuZ2VEYXRhKGRhdGEpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmluc3RhbGwoKSwgdGhpcy5kZWxheSkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5hdHRhY2hDaGFydCgpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmNoYXJ0LmRlc3Ryb3koKSk7XG4gICAgfVxuICB9XG59XG4iXX0=