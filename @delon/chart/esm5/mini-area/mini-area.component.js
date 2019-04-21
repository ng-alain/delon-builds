/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, } from '@angular/core';
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
        var chart = (this.chart = new G2.Chart({
            container: el.nativeElement,
            forceFit: fit,
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
        chart.tooltip({
            type: tooltipType === 'mini' ? 'mini' : null,
            showTitle: false,
            hideMarkders: false,
            'g2-tooltip': { padding: 4 },
            'g2-tooltip-list-item': { margin: "0px 4px" },
        });
        chart
            .area()
            .position('x*y')
            .tooltip('x*y', (/**
         * @param {?} x
         * @param {?} y
         * @return {?}
         */
        function (x, y) { return ({ name: x, value: y + yTooltipSuffix }); }))
            .shape('smooth')
            .opacity(1);
        if (line) {
            chart
                .line()
                .position('x*y')
                .shape('smooth')
                .opacity(1)
                .tooltip(false);
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
        var geoms = chart.get('geoms');
        geoms.forEach((/**
         * @param {?} g
         * @return {?}
         */
        function (g) { return g.color(color); }));
        if (line) {
            geoms[1].color(borderColor).size(borderWidth);
        }
        chart.set('forceFit', fit);
        chart.set('height', height);
        chart.set('animate', animate);
        chart.set('padding', padding);
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
                    changeDetection: ChangeDetectionStrategy.OnPush
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
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2MiniAreaComponent.prototype, "delay", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2MiniAreaComponent.prototype, "borderWidth", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2MiniAreaComponent.prototype, "height", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], G2MiniAreaComponent.prototype, "fit", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], G2MiniAreaComponent.prototype, "line", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1hcmVhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC9taW5pLWFyZWEvIiwic291cmNlcyI6WyJtaW5pLWFyZWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEdBSVAsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7QUFJeEQsb0NBSUM7OztJQUhDLDJCQUFPOztJQUNQLDJCQUFPOzs7QUFJVDtJQTZCRSxhQUFhO0lBRWIsNkJBQW9CLEVBQWMsRUFBVSxNQUFjO1FBQXRDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFROztRQWpCbEMsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUN6QixVQUFLLEdBQUcseUJBQXlCLENBQUM7UUFDbEMsZ0JBQVcsR0FBRyxTQUFTLENBQUM7UUFDVCxnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1gsUUFBRyxHQUFHLElBQUksQ0FBQztRQUNYLFNBQUksR0FBRyxLQUFLLENBQUM7UUFDYixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBRy9CLFlBQU8sR0FBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLFNBQUksR0FBcUIsRUFBRSxDQUFDO1FBQzVCLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGdCQUFXLEdBQXVCLFNBQVMsQ0FBQztJQUlRLENBQUM7Ozs7O0lBRXRELHFDQUFPOzs7O0lBQWY7UUFDUSxJQUFBLFNBQW9GLEVBQWxGLFVBQUUsRUFBRSxZQUFHLEVBQUUsa0JBQU0sRUFBRSxvQkFBTyxFQUFFLGdCQUFLLEVBQUUsZ0JBQUssRUFB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QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkF6QkMsVUFBVTtnQkFFVixNQUFNOzs7d0JBNkJMLEtBQUs7d0JBQ0wsS0FBSzs4QkFDTCxLQUFLOzhCQUNMLEtBQUs7eUJBQ0wsS0FBSztzQkFDTCxLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzt1QkFDTCxLQUFLO2lDQUNMLEtBQUs7OEJBQ0wsS0FBSzs7SUFia0I7UUFBZCxXQUFXLEVBQUU7O3NEQUFXO0lBR1Y7UUFBZCxXQUFXLEVBQUU7OzREQUFpQjtJQUNoQjtRQUFkLFdBQVcsRUFBRTs7dURBQWE7SUFDWDtRQUFmLFlBQVksRUFBRTs7b0RBQVk7SUFDWDtRQUFmLFlBQVksRUFBRTs7cURBQWM7SUFDYjtRQUFmLFlBQVksRUFBRTs7d0RBQWdCO0lBK0cxQywwQkFBQztDQUFBLEFBcElELElBb0lDO1NBM0hZLG1CQUFtQjs7Ozs7O0lBQzlCLG9DQUFtQjs7SUFJbkIsb0NBQWtDOztJQUNsQyxvQ0FBMkM7O0lBQzNDLDBDQUFpQzs7SUFDakMsMENBQXdDOztJQUN4QyxxQ0FBb0M7O0lBQ3BDLGtDQUFvQzs7SUFDcEMsbUNBQXNDOztJQUN0QyxzQ0FBd0M7O0lBQ3hDLG9DQUFvQjs7SUFDcEIsb0NBQW9COztJQUNwQixzQ0FBMEM7O0lBQzFDLG1DQUFxQzs7SUFDckMsNkNBQTZCOztJQUM3QiwwQ0FBcUQ7Ozs7O0lBSXpDLGlDQUFzQjs7Ozs7SUFBRSxxQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmRlY2xhcmUgdmFyIEcyOiBhbnk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRzJNaW5pQXJlYURhdGEge1xuICB4OiBhbnk7XG4gIHk6IGFueTtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi1taW5pLWFyZWEnLFxuICBleHBvcnRBczogJ2cyTWluaUFyZWEnLFxuICB0ZW1wbGF0ZTogYGAsXG4gIGhvc3Q6IHtcbiAgICAnW3N0eWxlLmhlaWdodC5weF0nOiAnaGVpZ2h0JyxcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEcyTWluaUFyZWFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBjaGFydDogYW55O1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXkgPSAwO1xuICBASW5wdXQoKSBjb2xvciA9ICdyZ2JhKDI0LCAxNDQsIDI1NSwgMC4yKSc7XG4gIEBJbnB1dCgpIGJvcmRlckNvbG9yID0gJyMxODkwRkYnO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBib3JkZXJXaWR0aCA9IDI7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGhlaWdodCA9IDU2O1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZml0ID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxpbmUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGFuaW1hdGUgPSB0cnVlO1xuICBASW5wdXQoKSB4QXhpczogYW55O1xuICBASW5wdXQoKSB5QXhpczogYW55O1xuICBASW5wdXQoKSBwYWRkaW5nOiBudW1iZXJbXSA9IFs4LCA4LCA4LCA4XTtcbiAgQElucHV0KCkgZGF0YTogRzJNaW5pQXJlYURhdGFbXSA9IFtdO1xuICBASW5wdXQoKSB5VG9vbHRpcFN1ZmZpeCA9ICcnO1xuICBASW5wdXQoKSB0b29sdGlwVHlwZTogJ21pbmknIHwgJ2RlZmF1bHQnID0gJ2RlZmF1bHQnO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7fVxuXG4gIHByaXZhdGUgaW5zdGFsbCgpIHtcbiAgICBjb25zdCB7IGVsLCBmaXQsIGhlaWdodCwgcGFkZGluZywgeEF4aXMsIHlBeGlzLCB5VG9vbHRpcFN1ZmZpeCwgdG9vbHRpcFR5cGUsIGxpbmUgfSA9IHRoaXM7XG4gICAgY29uc3QgY2hhcnQgPSAodGhpcy5jaGFydCA9IG5ldyBHMi5DaGFydCh7XG4gICAgICBjb250YWluZXI6IGVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBmb3JjZUZpdDogZml0LFxuICAgICAgaGVpZ2h0LFxuICAgICAgcGFkZGluZyxcbiAgICB9KSk7XG5cbiAgICBpZiAoIXhBeGlzICYmICF5QXhpcykge1xuICAgICAgY2hhcnQuYXhpcyhmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKHhBeGlzKSB7XG4gICAgICBjaGFydC5heGlzKCd4JywgeEF4aXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGFydC5heGlzKCd4JywgZmFsc2UpO1xuICAgIH1cblxuICAgIGlmICh5QXhpcykge1xuICAgICAgY2hhcnQuYXhpcygneScsIHlBeGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hhcnQuYXhpcygneScsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBjaGFydC5sZWdlbmQoZmFsc2UpO1xuICAgIGNoYXJ0LnRvb2x0aXAoe1xuICAgICAgdHlwZTogdG9vbHRpcFR5cGUgPT09ICdtaW5pJyA/ICdtaW5pJyA6IG51bGwsXG4gICAgICBzaG93VGl0bGU6IGZhbHNlLFxuICAgICAgaGlkZU1hcmtkZXJzOiBmYWxzZSxcbiAgICAgICdnMi10b29sdGlwJzogeyBwYWRkaW5nOiA0IH0sXG4gICAgICAnZzItdG9vbHRpcC1saXN0LWl0ZW0nOiB7IG1hcmdpbjogYDBweCA0cHhgIH0sXG4gICAgfSk7XG5cbiAgICBjaGFydFxuICAgICAgLmFyZWEoKVxuICAgICAgLnBvc2l0aW9uKCd4KnknKVxuICAgICAgLnRvb2x0aXAoJ3gqeScsICh4LCB5KSA9PiAoeyBuYW1lOiB4LCB2YWx1ZTogeSArIHlUb29sdGlwU3VmZml4IH0pKVxuICAgICAgLnNoYXBlKCdzbW9vdGgnKVxuICAgICAgLm9wYWNpdHkoMSk7XG5cbiAgICBpZiAobGluZSkge1xuICAgICAgY2hhcnRcbiAgICAgICAgLmxpbmUoKVxuICAgICAgICAucG9zaXRpb24oJ3gqeScpXG4gICAgICAgIC5zaGFwZSgnc21vb3RoJylcbiAgICAgICAgLm9wYWNpdHkoMSlcbiAgICAgICAgLnRvb2x0aXAoZmFsc2UpO1xuICAgIH1cblxuICAgIGNoYXJ0LnJlbmRlcigpO1xuXG4gICAgdGhpcy5hdHRhY2hDaGFydCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hDaGFydCgpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGFydCxcbiAgICAgIGxpbmUsXG4gICAgICBmaXQsXG4gICAgICBoZWlnaHQsXG4gICAgICBhbmltYXRlLFxuICAgICAgcGFkZGluZyxcbiAgICAgIGRhdGEsXG4gICAgICBjb2xvcixcbiAgICAgIGJvcmRlckNvbG9yLFxuICAgICAgYm9yZGVyV2lkdGgsXG4gICAgfSA9IHRoaXM7XG4gICAgaWYgKCFjaGFydCB8fCAhZGF0YSB8fCBkYXRhLmxlbmd0aCA8PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZ2VvbXMgPSBjaGFydC5nZXQoJ2dlb21zJyk7XG4gICAgZ2VvbXMuZm9yRWFjaChnID0+IGcuY29sb3IoY29sb3IpKTtcbiAgICBpZiAobGluZSkge1xuICAgICAgZ2VvbXNbMV0uY29sb3IoYm9yZGVyQ29sb3IpLnNpemUoYm9yZGVyV2lkdGgpO1xuICAgIH1cblxuICAgIGNoYXJ0LnNldCgnZm9yY2VGaXQnLCBmaXQpO1xuICAgIGNoYXJ0LnNldCgnaGVpZ2h0JywgaGVpZ2h0KTtcbiAgICBjaGFydC5zZXQoJ2FuaW1hdGUnLCBhbmltYXRlKTtcbiAgICBjaGFydC5zZXQoJ3BhZGRpbmcnLCBwYWRkaW5nKTtcblxuICAgIGNoYXJ0LmNoYW5nZURhdGEoZGF0YSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpLCB0aGlzLmRlbGF5KSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmF0dGFjaENoYXJ0KCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuY2hhcnQuZGVzdHJveSgpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==