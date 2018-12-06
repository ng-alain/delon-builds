/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// tslint:disable:no-any
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, } from '@angular/core';
import { InputNumber } from '@delon/util';
/**
 * @record
 */
export function G2MiniBarData() { }
if (false) {
    /** @type {?} */
    G2MiniBarData.prototype.x;
    /** @type {?} */
    G2MiniBarData.prototype.y;
    /* Skipping unhandled member: [key: string]: any;*/
}
var G2MiniBarComponent = /** @class */ (function () {
    // #endregion
    function G2MiniBarComponent(el) {
        this.el = el;
        // #region fields
        this.delay = 0;
        this.color = '#1890FF';
        this.height = 0;
        this.borderWidth = 5;
        this.padding = [8, 8, 8, 8];
        this.data = [];
        this.yTooltipSuffix = '';
    }
    /**
     * @return {?}
     */
    G2MiniBarComponent.prototype.install = /**
     * @return {?}
     */
    function () {
        var _a = this, el = _a.el, height = _a.height, padding = _a.padding, data = _a.data, color = _a.color, borderWidth = _a.borderWidth, yTooltipSuffix = _a.yTooltipSuffix;
        /** @type {?} */
        var chart = this.chart = new G2.Chart({
            container: el.nativeElement,
            forceFit: true,
            height: height,
            padding: padding,
            legend: null,
        });
        chart.axis(false);
        chart.source(data, {
            x: {
                type: 'cat',
            },
            y: {
                min: 0,
            },
        });
        chart.tooltip({
            'showTitle': false,
            'hideMarkders': false,
            'crosshairs': false,
            'g2-tooltip': { padding: 4 },
            'g2-tooltip-list-item': { margin: "0px 4px" },
        });
        chart
            .interval()
            .position('x*y')
            .size(borderWidth)
            .color(color)
            .tooltip('x*y', function (x, y) {
            return {
                name: x,
                value: y + yTooltipSuffix,
            };
        });
        chart.render();
        this.chart = chart;
    };
    /**
     * @return {?}
     */
    G2MiniBarComponent.prototype.attachChart = /**
     * @return {?}
     */
    function () {
        var _a = this, chart = _a.chart, height = _a.height, padding = _a.padding, data = _a.data, color = _a.color, borderWidth = _a.borderWidth;
        if (!chart)
            return;
        chart.changeData(data).get('geoms')[0].size(borderWidth).color(color);
        chart.set('height', height);
        chart.set('padding', padding);
        chart.repaint();
    };
    /**
     * @return {?}
     */
    G2MiniBarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () { return _this.install(); }, this.delay);
    };
    /**
     * @return {?}
     */
    G2MiniBarComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.attachChart();
    };
    /**
     * @return {?}
     */
    G2MiniBarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.chart) {
            this.chart.destroy();
        }
    };
    G2MiniBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-mini-bar',
                    template: "",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    G2MiniBarComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    G2MiniBarComponent.propDecorators = {
        delay: [{ type: Input }],
        color: [{ type: Input }],
        height: [{ type: HostBinding, args: ['style.height.px',] }, { type: Input }],
        borderWidth: [{ type: Input }],
        padding: [{ type: Input }],
        data: [{ type: Input }],
        yTooltipSuffix: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2MiniBarComponent.prototype, "delay", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2MiniBarComponent.prototype, "height", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2MiniBarComponent.prototype, "borderWidth", void 0);
    return G2MiniBarComponent;
}());
export { G2MiniBarComponent };
if (false) {
    /** @type {?} */
    G2MiniBarComponent.prototype.chart;
    /** @type {?} */
    G2MiniBarComponent.prototype.delay;
    /** @type {?} */
    G2MiniBarComponent.prototype.color;
    /** @type {?} */
    G2MiniBarComponent.prototype.height;
    /** @type {?} */
    G2MiniBarComponent.prototype.borderWidth;
    /** @type {?} */
    G2MiniBarComponent.prototype.padding;
    /** @type {?} */
    G2MiniBarComponent.prototype.data;
    /** @type {?} */
    G2MiniBarComponent.prototype.yTooltipSuffix;
    /** @type {?} */
    G2MiniBarComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L21pbmktYmFyLyIsInNvdXJjZXMiOlsibWluaS1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxHQUlOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7QUFJMUMsbUNBSUM7OztJQUhDLDBCQUFPOztJQUNQLDBCQUFPOzs7QUFJVDtJQWtCRSxhQUFhO0lBRWIsNEJBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZOztRQVZWLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDekIsVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUM2QixXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLFlBQU8sR0FBMkIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvQyxTQUFJLEdBQW9CLEVBQUUsQ0FBQztRQUMzQixtQkFBYyxHQUFHLEVBQUUsQ0FBQztJQUlTLENBQUM7Ozs7SUFFL0Isb0NBQU87OztJQUFmO1FBQ1EsSUFBQSxTQUF3RSxFQUF0RSxVQUFFLEVBQUUsa0JBQU0sRUFBRSxvQkFBTyxFQUFFLGNBQUksRUFBRSxnQkFBSyxFQUFFLDRCQUFXLEVBQUUsa0NBQXVCOztZQUN4RSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDdEMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxhQUFhO1lBQzNCLFFBQVEsRUFBRSxJQUFJO1lBQ2QsTUFBTSxRQUFBO1lBQ04sT0FBTyxTQUFBO1lBQ1AsTUFBTSxFQUFFLElBQUk7U0FDYixDQUFD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QUF3Qzs7SUFDeEMscUNBQXdEOztJQUN4RCxrQ0FBb0M7O0lBQ3BDLDRDQUE2Qjs7SUFJakIsZ0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmRlY2xhcmUgdmFyIEcyOiBhbnk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRzJNaW5pQmFyRGF0YSB7XG4gIHg6IGFueTtcbiAgeTogYW55O1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLW1pbmktYmFyJyxcbiAgdGVtcGxhdGU6IGBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRzJNaW5pQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgY2hhcnQ6IGFueTtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGRlbGF5ID0gMDtcbiAgQElucHV0KCkgY29sb3IgPSAnIzE4OTBGRic7XG4gIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0LnB4JykgQElucHV0KCkgQElucHV0TnVtYmVyKCkgaGVpZ2h0ID0gMDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgYm9yZGVyV2lkdGggPSA1O1xuICBASW5wdXQoKSBwYWRkaW5nOiBBcnJheTxzdHJpbmcgfCBudW1iZXI+ID0gWzgsIDgsIDgsIDhdO1xuICBASW5wdXQoKSBkYXRhOiBHMk1pbmlCYXJEYXRhW10gPSBbXTtcbiAgQElucHV0KCkgeVRvb2x0aXBTdWZmaXggPSAnJztcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikgeyB9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsKCkge1xuICAgIGNvbnN0IHsgZWwsIGhlaWdodCwgcGFkZGluZywgZGF0YSwgY29sb3IsIGJvcmRlcldpZHRoLCB5VG9vbHRpcFN1ZmZpeCB9ID0gdGhpcztcbiAgICBjb25zdCBjaGFydCA9IHRoaXMuY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xuICAgICAgY29udGFpbmVyOiBlbC5uYXRpdmVFbGVtZW50LFxuICAgICAgZm9yY2VGaXQ6IHRydWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBwYWRkaW5nLFxuICAgICAgbGVnZW5kOiBudWxsLFxuICAgIH0pO1xuXG4gICAgY2hhcnQuYXhpcyhmYWxzZSk7XG5cbiAgICBjaGFydC5zb3VyY2UoZGF0YSwge1xuICAgICAgeDoge1xuICAgICAgICB0eXBlOiAnY2F0JyxcbiAgICAgIH0sXG4gICAgICB5OiB7XG4gICAgICAgIG1pbjogMCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjaGFydC50b29sdGlwKHtcbiAgICAgICdzaG93VGl0bGUnOiBmYWxzZSxcbiAgICAgICdoaWRlTWFya2RlcnMnOiBmYWxzZSxcbiAgICAgICdjcm9zc2hhaXJzJzogZmFsc2UsXG4gICAgICAnZzItdG9vbHRpcCc6IHsgcGFkZGluZzogNCB9LFxuICAgICAgJ2cyLXRvb2x0aXAtbGlzdC1pdGVtJzogeyBtYXJnaW46IGAwcHggNHB4YCB9LFxuICAgIH0pO1xuICAgIGNoYXJ0XG4gICAgICAuaW50ZXJ2YWwoKVxuICAgICAgLnBvc2l0aW9uKCd4KnknKVxuICAgICAgLnNpemUoYm9yZGVyV2lkdGgpXG4gICAgICAuY29sb3IoY29sb3IpXG4gICAgICAudG9vbHRpcCgneCp5JywgKHgsIHkpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBuYW1lOiB4LFxuICAgICAgICAgIHZhbHVlOiB5ICsgeVRvb2x0aXBTdWZmaXgsXG4gICAgICAgIH07XG4gICAgICB9KTtcblxuICAgIGNoYXJ0LnJlbmRlcigpO1xuXG4gICAgdGhpcy5jaGFydCA9IGNoYXJ0O1xuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hDaGFydCgpIHtcbiAgICBjb25zdCB7IGNoYXJ0LCBoZWlnaHQsIHBhZGRpbmcsIGRhdGEsIGNvbG9yLCBib3JkZXJXaWR0aCB9ID0gdGhpcztcbiAgICBpZiAoIWNoYXJ0KSByZXR1cm47XG4gICAgY2hhcnQuY2hhbmdlRGF0YShkYXRhKS5nZXQoJ2dlb21zJylbMF0uc2l6ZShib3JkZXJXaWR0aCkuY29sb3IoY29sb3IpO1xuICAgIGNoYXJ0LnNldCgnaGVpZ2h0JywgaGVpZ2h0KTtcbiAgICBjaGFydC5zZXQoJ3BhZGRpbmcnLCBwYWRkaW5nKTtcbiAgICBjaGFydC5yZXBhaW50KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpLCB0aGlzLmRlbGF5KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuYXR0YWNoQ2hhcnQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICB0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==