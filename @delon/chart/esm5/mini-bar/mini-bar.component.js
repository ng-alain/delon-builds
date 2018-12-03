/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// tslint:disable:no-any
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, NgZone, ViewChild, } from '@angular/core';
import { InputNumber } from '@delon/util';
var G2MiniBarComponent = /** @class */ (function () {
    function G2MiniBarComponent(zone) {
        this.zone = zone;
        // #region fields
        this.color = '#1890FF';
        this.height = 0;
        this.borderWidth = 5;
        this.padding = [8, 8, 8, 8];
        this.yTooltipSuffix = '';
    }
    /**
     * @return {?}
     */
    G2MiniBarComponent.prototype.install = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.data || (this.data && this.data.length < 1))
            return;
        this.node.nativeElement.innerHTML = '';
        /** @type {?} */
        var chart = new G2.Chart({
            container: this.node.nativeElement,
            forceFit: true,
            height: +this.height,
            padding: this.padding,
            legend: null,
        });
        chart.axis(false);
        chart.source(this.data, {
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
            .size(this.borderWidth)
            .color(this.color)
            .tooltip('x*y', function (x, y) {
            return {
                name: x,
                value: y + _this.yTooltipSuffix,
            };
        });
        chart.render();
        this.chart = chart;
    };
    /**
     * @return {?}
     */
    G2MiniBarComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.runOutsideAngular(function () { return setTimeout(function () { return _this.install(); }); });
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
            this.chart = null;
        }
    };
    G2MiniBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-mini-bar',
                    template: "<div #container></div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    G2MiniBarComponent.ctorParameters = function () { return [
        { type: NgZone }
    ]; };
    G2MiniBarComponent.propDecorators = {
        color: [{ type: Input }],
        height: [{ type: HostBinding, args: ['style.height.px',] }, { type: Input }],
        borderWidth: [{ type: Input }],
        padding: [{ type: Input }],
        data: [{ type: Input }],
        yTooltipSuffix: [{ type: Input }],
        node: [{ type: ViewChild, args: ['container',] }]
    };
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
    G2MiniBarComponent.prototype.node;
    /** @type {?} */
    G2MiniBarComponent.prototype.chart;
    /** @type {?} */
    G2MiniBarComponent.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L21pbmktYmFyLyIsInNvdXJjZXMiOlsibWluaS1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sRUFHTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUkxQztJQWdDRSw0QkFBb0IsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7O1FBdkJoQyxVQUFLLEdBQUcsU0FBUyxDQUFDO1FBR00sV0FBTSxHQUFHLENBQUMsQ0FBQztRQUVYLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBR3hDLFlBQU8sR0FBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBTWpDLG1CQUFjLEdBQUcsRUFBRSxDQUFDO0lBU2dCLENBQUM7Ozs7SUFFN0Isb0NBQU87OztJQUFmO1FBQUEsaUJBOENDO1FBN0NDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFBRSxPQUFPO1FBRTlELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7O1lBRWpDLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDekIsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYTtZQUNsQyxRQUFRLEVBQUUsSUFBSTtZQUNkLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQ3BCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixNQUFNLEVBQUUsSUFBSTtTQUNiLENBQUM7UUFFRixLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWxCLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUN0QixDQUFDLEVBQUU7Z0JBQ0QsSUFBSSxFQUFFLEtBQUs7YUFDWjtZQUNELENBQUMsRUFBRTtnQkFDRCxHQUFHLEVBQUUsQ0FBQzthQUNQO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNaLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLGNBQWMsRUFBRSxLQUFLO1lBQ3JCLFlBQVksRUFBRSxLQUFLO1lBQ25CLFlBQVksRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7WUFDNUIsc0JBQXNCLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFO1NBQzlDLENBQUMsQ0FBQztRQUNILEtBQUs7YUFDRixRQUFRLEVBQUU7YUFDVixRQUFRLENBQUMsS0FBSyxDQUFDO2FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDdEIsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDakIsT0FBTyxDQUFDLEtBQUssRUFBRSxVQUFDLENBQUMsRUFBRSxDQUFDO1lBQ25CLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLENBQUM7Z0JBQ1AsS0FBSyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsY0FBYzthQUMvQixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFFTCxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFZixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsd0NBQVc7OztJQUFYO1FBQUEsaUJBRUM7UUFEQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQU0sT0FBQSxVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLEVBQUUsRUFBZCxDQUFjLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7Ozs7SUFFRCx3Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQzs7Z0JBM0ZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQWJDLE1BQU07Ozt3QkFpQkwsS0FBSzt5QkFHTCxXQUFXLFNBQUMsaUJBQWlCLGNBQzdCLEtBQUs7OEJBRUwsS0FBSzswQkFFTCxLQUFLO3VCQUdMLEtBQUs7aUNBR0wsS0FBSzt1QkFLTCxTQUFTLFNBQUMsV0FBVzs7SUFmRTtRQUFkLFdBQVcsRUFBRTs7c0RBQVk7SUFFWDtRQUFkLFdBQVcsRUFBRTs7MkRBQWlCO0lBOEUxQyx5QkFBQztDQUFBLEFBNUZELElBNEZDO1NBdkZZLGtCQUFrQjs7O0lBRzdCLG1DQUNrQjs7SUFFbEIsb0NBQ21DOztJQUVuQyx5Q0FBd0M7O0lBRXhDLHFDQUNpQzs7SUFFakMsa0NBQzBEOztJQUUxRCw0Q0FDb0I7O0lBSXBCLGtDQUN5Qjs7SUFFekIsbUNBQW1COztJQUVQLGtDQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm5vLWFueVxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmRlY2xhcmUgdmFyIEcyOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLW1pbmktYmFyJyxcbiAgdGVtcGxhdGU6IGA8ZGl2ICNjb250YWluZXI+PC9kaXY+YCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEcyTWluaUJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKVxuICBjb2xvciA9ICcjMTg5MEZGJztcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodC5weCcpXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGhlaWdodCA9IDA7XG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgYm9yZGVyV2lkdGggPSA1O1xuXG4gIEBJbnB1dCgpXG4gIHBhZGRpbmc6IG51bWJlcltdID0gWzgsIDgsIDgsIDhdO1xuXG4gIEBJbnB1dCgpXG4gIGRhdGE6IEFycmF5PHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IFtrZXk6IHN0cmluZ106IGFueSB9PjtcblxuICBASW5wdXQoKVxuICB5VG9vbHRpcFN1ZmZpeCA9ICcnO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBAVmlld0NoaWxkKCdjb250YWluZXInKVxuICBwcml2YXRlIG5vZGU6IEVsZW1lbnRSZWY7XG5cbiAgcHJpdmF0ZSBjaGFydDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgem9uZTogTmdab25lKSB7IH1cblxuICBwcml2YXRlIGluc3RhbGwoKSB7XG4gICAgaWYgKCF0aGlzLmRhdGEgfHwgKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEubGVuZ3RoIDwgMSkpIHJldHVybjtcblxuICAgIHRoaXMubm9kZS5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xuICAgICAgY29udGFpbmVyOiB0aGlzLm5vZGUubmF0aXZlRWxlbWVudCxcbiAgICAgIGZvcmNlRml0OiB0cnVlLFxuICAgICAgaGVpZ2h0OiArdGhpcy5oZWlnaHQsXG4gICAgICBwYWRkaW5nOiB0aGlzLnBhZGRpbmcsXG4gICAgICBsZWdlbmQ6IG51bGwsXG4gICAgfSk7XG5cbiAgICBjaGFydC5heGlzKGZhbHNlKTtcblxuICAgIGNoYXJ0LnNvdXJjZSh0aGlzLmRhdGEsIHtcbiAgICAgIHg6IHtcbiAgICAgICAgdHlwZTogJ2NhdCcsXG4gICAgICB9LFxuICAgICAgeToge1xuICAgICAgICBtaW46IDAsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY2hhcnQudG9vbHRpcCh7XG4gICAgICAnc2hvd1RpdGxlJzogZmFsc2UsXG4gICAgICAnaGlkZU1hcmtkZXJzJzogZmFsc2UsXG4gICAgICAnY3Jvc3NoYWlycyc6IGZhbHNlLFxuICAgICAgJ2cyLXRvb2x0aXAnOiB7IHBhZGRpbmc6IDQgfSxcbiAgICAgICdnMi10b29sdGlwLWxpc3QtaXRlbSc6IHsgbWFyZ2luOiBgMHB4IDRweGAgfSxcbiAgICB9KTtcbiAgICBjaGFydFxuICAgICAgLmludGVydmFsKClcbiAgICAgIC5wb3NpdGlvbigneCp5JylcbiAgICAgIC5zaXplKHRoaXMuYm9yZGVyV2lkdGgpXG4gICAgICAuY29sb3IodGhpcy5jb2xvcilcbiAgICAgIC50b29sdGlwKCd4KnknLCAoeCwgeSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG5hbWU6IHgsXG4gICAgICAgICAgdmFsdWU6IHkgKyB0aGlzLnlUb29sdGlwU3VmZml4LFxuICAgICAgICB9O1xuICAgICAgfSk7XG5cbiAgICBjaGFydC5yZW5kZXIoKTtcblxuICAgIHRoaXMuY2hhcnQgPSBjaGFydDtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jaGFydCkge1xuICAgICAgdGhpcy5jaGFydC5kZXN0cm95KCk7XG4gICAgICB0aGlzLmNoYXJ0ID0gbnVsbDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==