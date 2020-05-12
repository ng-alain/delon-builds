/**
 * @fileoverview added by tsickle
 * Generated from: single-bar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, ViewEncapsulation, } from '@angular/core';
import { InputBoolean, InputNumber } from '@delon/util';
var G2SingleBarComponent = /** @class */ (function () {
    // #endregion
    function G2SingleBarComponent(el, ngZone) {
        this.el = el;
        this.ngZone = ngZone;
        // #region fields
        this.delay = 0;
        this.plusColor = '#40a9ff';
        this.minusColor = '#ff4d4f';
        this.height = 60;
        this.barSize = 30;
        this.min = 0;
        this.max = 100;
        this.value = 0;
        this.line = false;
        this.padding = 0;
        this.textStyle = { fontSize: 12, color: '#595959' };
    }
    /**
     * @private
     * @return {?}
     */
    G2SingleBarComponent.prototype.install = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = this, el = _a.el, height = _a.height, padding = _a.padding, textStyle = _a.textStyle, line = _a.line, format = _a.format;
        /** @type {?} */
        var chart = (this.chart = new G2.Chart({
            container: el.nativeElement,
            forceFit: true,
            height: height,
            padding: padding,
        }));
        chart.legend(false);
        chart.axis(false);
        chart.tooltip({ type: 'mini' });
        chart.coord().transpose();
        chart
            .interval()
            .position('1*value')
            .opacity(1)
            .label('value', (/**
         * @param {?} val
         * @return {?}
         */
        function (val) { return ({
            formatter: format,
            offset: val > 0 ? 10 : -10,
            textStyle: tslib_1.__assign({}, textStyle, { textAlign: val > 0 ? 'start' : 'end' }),
        }); }));
        if (line) {
            chart.guide().line({
                start: ['50%', '0%'],
                end: ['50%', '100%'],
                lineStyle: {
                    stroke: '#e8e8e8',
                    lineDash: [0, 0],
                },
            });
        }
        chart.render();
        this.attachChart();
    };
    /**
     * @private
     * @return {?}
     */
    G2SingleBarComponent.prototype.attachChart = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = this, chart = _a.chart, height = _a.height, padding = _a.padding, value = _a.value, min = _a.min, max = _a.max, plusColor = _a.plusColor, minusColor = _a.minusColor, barSize = _a.barSize;
        if (!chart)
            return;
        chart.source([{ value: value }], { value: { max: max, min: min } });
        chart.set('height', height);
        chart.set('padding', padding);
        chart
            .get('geoms')[0]
            .color('value', (/**
         * @param {?} val
         * @return {?}
         */
        function (val) { return (val > 0 ? plusColor : minusColor); }))
            .size(barSize);
        chart.repaint();
    };
    /**
     * @return {?}
     */
    G2SingleBarComponent.prototype.ngOnInit = /**
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
    G2SingleBarComponent.prototype.ngOnChanges = /**
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
    G2SingleBarComponent.prototype.ngOnDestroy = /**
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
    G2SingleBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-single-bar',
                    exportAs: 'g2SingleBar',
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
    G2SingleBarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone }
    ]; };
    G2SingleBarComponent.propDecorators = {
        delay: [{ type: Input }],
        plusColor: [{ type: Input }],
        minusColor: [{ type: Input }],
        height: [{ type: Input }],
        barSize: [{ type: Input }],
        min: [{ type: Input }],
        max: [{ type: Input }],
        value: [{ type: Input }],
        line: [{ type: Input }],
        format: [{ type: Input }],
        padding: [{ type: Input }],
        textStyle: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2SingleBarComponent.prototype, "delay", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2SingleBarComponent.prototype, "height", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2SingleBarComponent.prototype, "barSize", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2SingleBarComponent.prototype, "min", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2SingleBarComponent.prototype, "max", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2SingleBarComponent.prototype, "value", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], G2SingleBarComponent.prototype, "line", void 0);
    return G2SingleBarComponent;
}());
export { G2SingleBarComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    G2SingleBarComponent.prototype.chart;
    /** @type {?} */
    G2SingleBarComponent.prototype.delay;
    /** @type {?} */
    G2SingleBarComponent.prototype.plusColor;
    /** @type {?} */
    G2SingleBarComponent.prototype.minusColor;
    /** @type {?} */
    G2SingleBarComponent.prototype.height;
    /** @type {?} */
    G2SingleBarComponent.prototype.barSize;
    /** @type {?} */
    G2SingleBarComponent.prototype.min;
    /** @type {?} */
    G2SingleBarComponent.prototype.max;
    /** @type {?} */
    G2SingleBarComponent.prototype.value;
    /** @type {?} */
    G2SingleBarComponent.prototype.line;
    /** @type {?} */
    G2SingleBarComponent.prototype.format;
    /** @type {?} */
    G2SingleBarComponent.prototype.padding;
    /** @type {?} */
    G2SingleBarComponent.prototype.textStyle;
    /**
     * @type {?}
     * @private
     */
    G2SingleBarComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    G2SingleBarComponent.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vY2hhcnQvc2luZ2xlLWJhci8iLCJzb3VyY2VzIjpbInNpbmdsZS1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUlOLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUl4RDtJQTZCRSxhQUFhO0lBRWIsOEJBQW9CLEVBQWMsRUFBVSxNQUFjO1FBQXRDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFROztRQWZsQyxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLGNBQVMsR0FBRyxTQUFTLENBQUM7UUFDdEIsZUFBVSxHQUFHLFNBQVMsQ0FBQztRQUNSLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsUUFBRyxHQUFHLENBQUMsQ0FBQztRQUNSLFFBQUcsR0FBRyxHQUFHLENBQUM7UUFDVixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUU3QixZQUFPLEdBQVEsQ0FBQyxDQUFDO1FBQ2pCLGNBQVMsR0FBUSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDO0lBSUEsQ0FBQzs7Ozs7SUFFdEQsc0NBQU87Ozs7SUFBZjtRQUNRLElBQUEsU0FBdUQsRUFBckQsVUFBRSxFQUFFLGtCQUFNLEVBQUUsb0JBQU8sRUFBRSx3QkFBUyxFQUFFLGNBQUksRUFBRSxrQkFBZTs7WUFDdkQsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDdkMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxhQUFhO1lBQzNCLFFBQVEsRUFBRSxJQUFJO1lBQ2QsTUFBTSxRQUFBO1lBQ04sT0FBTyxTQUFBO1NBQ1IsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQixLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xCLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNoQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDMUIsS0FBSzthQUNGLFFBQVEsRUFBRTthQUNWLFFBQVEsQ0FBQyxTQUFTLENBQUM7YUFDbkIsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUNWLEtBQUssQ0FBQyxPQUFPOzs7O1FBQUUsVUFBQSxHQUFHLElBQUksT0FBQSxDQUFDO1lBQ3RCLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMxQixTQUFTLHVCQUNKLFNBQVMsSUFDWixTQUFTLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQ3JDO1NBQ0YsQ0FBQyxFQVBxQixDQU9yQixFQUFDLENBQUM7UUFFTixJQUFJLElBQUksRUFBRTtZQUNSLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUM7Z0JBQ3BCLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7Z0JBQ3BCLFNBQVMsRUFBRTtvQkFDVCxNQUFNLEVBQUUsU0FBUztvQkFDakIsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDakI7YUFDRixDQUFDLENBQUM7U0FDSjtRQUVELEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVmLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVPLDBDQUFXOzs7O0lBQW5CO1FBQ1EsSUFBQSxTQUFrRixFQUFoRixnQkFBSyxFQUFFLGtCQUFNLEVBQUUsb0JBQU8sRUFBRSxnQkFBSyxFQUFFLFlBQUcsRUFBRSxZQUFHLEVBQUUsd0JBQVMsRUFBRSwwQkFBVSxFQUFFLG9CQUFnQjtRQUN4RixJQUFJLENBQUMsS0FBSztZQUFFLE9BQU87UUFDbkIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsR0FBRyxLQUFBLEVBQUUsR0FBRyxLQUFBLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbkQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDNUIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDOUIsS0FBSzthQUNGLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDZixLQUFLLENBQUMsT0FBTzs7OztRQUFFLFVBQUEsR0FBRyxJQUFJLE9BQUEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFsQyxDQUFrQyxFQUFDO2FBQ3pELElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQixLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELHVDQUFROzs7SUFBUjtRQUFBLGlCQUVDO1FBREMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUI7OztRQUFDLGNBQU0sT0FBQSxVQUFVOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sRUFBRSxFQUFkLENBQWMsR0FBRSxLQUFJLENBQUMsS0FBSyxDQUFDLEVBQTVDLENBQTRDLEVBQUMsQ0FBQztJQUNwRixDQUFDOzs7O0lBRUQsMENBQVc7OztJQUFYO1FBQUEsaUJBRUM7UUFEQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQjs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxXQUFXLEVBQUUsRUFBbEIsQ0FBa0IsRUFBQyxDQUFDO0lBQzFELENBQUM7Ozs7SUFFRCwwQ0FBVzs7O0lBQVg7UUFBQSxpQkFJQztRQUhDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCOzs7WUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBcEIsQ0FBb0IsRUFBQyxDQUFDO1NBQzNEO0lBQ0gsQ0FBQzs7Z0JBbkdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSxFQUFFO29CQUNaLElBQUksRUFBRTt3QkFDSixtQkFBbUIsRUFBRSxRQUFRO3FCQUM5QjtvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzs7O2dCQXRCQyxVQUFVO2dCQUVWLE1BQU07Ozt3QkEwQkwsS0FBSzs0QkFDTCxLQUFLOzZCQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLOzRCQUNMLEtBQUs7O0lBWGtCO1FBQWQsV0FBVyxFQUFFOzt1REFBVztJQUdWO1FBQWQsV0FBVyxFQUFFOzt3REFBYTtJQUNaO1FBQWQsV0FBVyxFQUFFOzt5REFBYztJQUNiO1FBQWQsV0FBVyxFQUFFOztxREFBUztJQUNSO1FBQWQsV0FBVyxFQUFFOztxREFBVztJQUNWO1FBQWQsV0FBVyxFQUFFOzt1REFBVztJQUNUO1FBQWYsWUFBWSxFQUFFOztzREFBYztJQTRFeEMsMkJBQUM7Q0FBQSxBQXBHRCxJQW9HQztTQXpGWSxvQkFBb0I7Ozs7OztJQUMvQixxQ0FBbUI7O0lBSW5CLHFDQUFrQzs7SUFDbEMseUNBQStCOztJQUMvQiwwQ0FBZ0M7O0lBQ2hDLHNDQUFvQzs7SUFDcEMsdUNBQXFDOztJQUNyQyxtQ0FBZ0M7O0lBQ2hDLG1DQUFrQzs7SUFDbEMscUNBQWtDOztJQUNsQyxvQ0FBc0M7O0lBQ3RDLHNDQUFvRTs7SUFDcEUsdUNBQTBCOztJQUMxQix5Q0FBNkQ7Ozs7O0lBSWpELGtDQUFzQjs7Ozs7SUFBRSxzQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5kZWNsYXJlIHZhciBHMjogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi1zaW5nbGUtYmFyJyxcbiAgZXhwb3J0QXM6ICdnMlNpbmdsZUJhcicsXG4gIHRlbXBsYXRlOiBgYCxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUuaGVpZ2h0LnB4XSc6ICdoZWlnaHQnLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEcyU2luZ2xlQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgY2hhcnQ6IGFueTtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGRlbGF5ID0gMDtcbiAgQElucHV0KCkgcGx1c0NvbG9yID0gJyM0MGE5ZmYnO1xuICBASW5wdXQoKSBtaW51c0NvbG9yID0gJyNmZjRkNGYnO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQgPSA2MDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgYmFyU2l6ZSA9IDMwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBtaW4gPSAwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBtYXggPSAxMDA7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHZhbHVlID0gMDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxpbmUgPSBmYWxzZTtcbiAgQElucHV0KCkgZm9ybWF0OiAodmFsdWU6IG51bWJlciwgaXRlbToge30sIGluZGV4OiBudW1iZXIpID0+IHN0cmluZztcbiAgQElucHV0KCkgcGFkZGluZzogYW55ID0gMDtcbiAgQElucHV0KCkgdGV4dFN0eWxlOiBhbnkgPSB7IGZvbnRTaXplOiAxMiwgY29sb3I6ICcjNTk1OTU5JyB9O1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7fVxuXG4gIHByaXZhdGUgaW5zdGFsbCgpIHtcbiAgICBjb25zdCB7IGVsLCBoZWlnaHQsIHBhZGRpbmcsIHRleHRTdHlsZSwgbGluZSwgZm9ybWF0IH0gPSB0aGlzO1xuICAgIGNvbnN0IGNoYXJ0ID0gKHRoaXMuY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xuICAgICAgY29udGFpbmVyOiBlbC5uYXRpdmVFbGVtZW50LFxuICAgICAgZm9yY2VGaXQ6IHRydWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBwYWRkaW5nLFxuICAgIH0pKTtcbiAgICBjaGFydC5sZWdlbmQoZmFsc2UpO1xuICAgIGNoYXJ0LmF4aXMoZmFsc2UpO1xuICAgIGNoYXJ0LnRvb2x0aXAoeyB0eXBlOiAnbWluaScgfSk7XG4gICAgY2hhcnQuY29vcmQoKS50cmFuc3Bvc2UoKTtcbiAgICBjaGFydFxuICAgICAgLmludGVydmFsKClcbiAgICAgIC5wb3NpdGlvbignMSp2YWx1ZScpXG4gICAgICAub3BhY2l0eSgxKVxuICAgICAgLmxhYmVsKCd2YWx1ZScsIHZhbCA9PiAoe1xuICAgICAgICBmb3JtYXR0ZXI6IGZvcm1hdCxcbiAgICAgICAgb2Zmc2V0OiB2YWwgPiAwID8gMTAgOiAtMTAsXG4gICAgICAgIHRleHRTdHlsZToge1xuICAgICAgICAgIC4uLnRleHRTdHlsZSxcbiAgICAgICAgICB0ZXh0QWxpZ246IHZhbCA+IDAgPyAnc3RhcnQnIDogJ2VuZCcsXG4gICAgICAgIH0sXG4gICAgICB9KSk7XG5cbiAgICBpZiAobGluZSkge1xuICAgICAgY2hhcnQuZ3VpZGUoKS5saW5lKHtcbiAgICAgICAgc3RhcnQ6IFsnNTAlJywgJzAlJ10sXG4gICAgICAgIGVuZDogWyc1MCUnLCAnMTAwJSddLFxuICAgICAgICBsaW5lU3R5bGU6IHtcbiAgICAgICAgICBzdHJva2U6ICcjZThlOGU4JyxcbiAgICAgICAgICBsaW5lRGFzaDogWzAsIDBdLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hhcnQucmVuZGVyKCk7XG5cbiAgICB0aGlzLmF0dGFjaENoYXJ0KCk7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaENoYXJ0KCkge1xuICAgIGNvbnN0IHsgY2hhcnQsIGhlaWdodCwgcGFkZGluZywgdmFsdWUsIG1pbiwgbWF4LCBwbHVzQ29sb3IsIG1pbnVzQ29sb3IsIGJhclNpemUgfSA9IHRoaXM7XG4gICAgaWYgKCFjaGFydCkgcmV0dXJuO1xuICAgIGNoYXJ0LnNvdXJjZShbeyB2YWx1ZSB9XSwgeyB2YWx1ZTogeyBtYXgsIG1pbiB9IH0pO1xuICAgIGNoYXJ0LnNldCgnaGVpZ2h0JywgaGVpZ2h0KTtcbiAgICBjaGFydC5zZXQoJ3BhZGRpbmcnLCBwYWRkaW5nKTtcbiAgICBjaGFydFxuICAgICAgLmdldCgnZ2VvbXMnKVswXVxuICAgICAgLmNvbG9yKCd2YWx1ZScsIHZhbCA9PiAodmFsID4gMCA/IHBsdXNDb2xvciA6IG1pbnVzQ29sb3IpKVxuICAgICAgLnNpemUoYmFyU2l6ZSk7XG4gICAgY2hhcnQucmVwYWludCgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmluc3RhbGwoKSwgdGhpcy5kZWxheSkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5hdHRhY2hDaGFydCgpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmNoYXJ0LmRlc3Ryb3koKSk7XG4gICAgfVxuICB9XG59XG4iXX0=