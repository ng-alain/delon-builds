import { Component, Input, HostBinding, ViewChild, ChangeDetectionStrategy, NgZone, NgModule } from '@angular/core';
import { toNumber, DelonUtilModule } from '@delon/util';
import { __spread } from 'tslib';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var G2MiniBarComponent = /** @class */ (function () {
    function G2MiniBarComponent(zone) {
        this.zone = zone;
        // #region fields
        this.color = '#1890FF';
        this._height = 0;
        this._borderWidth = 5;
        this.padding = [8, 8, 8, 8];
        this.yTooltipSuffix = '';
    }
    Object.defineProperty(G2MiniBarComponent.prototype, "height", {
        get: /**
         * @return {?}
         */
        function () {
            return this._height;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._height = toNumber(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G2MiniBarComponent.prototype, "borderWidth", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._borderWidth = toNumber(value);
        },
        enumerable: true,
        configurable: true
    });
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
            showTitle: false,
            hideMarkders: false,
            crosshairs: false,
            'g2-tooltip': { padding: 4 },
            'g2-tooltip-list-item': { margin: "0px 4px" },
        });
        chart
            .interval()
            .position('x*y')
            .size(this._borderWidth)
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
    return G2MiniBarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [G2MiniBarComponent];
var G2MiniBarModule = /** @class */ (function () {
    function G2MiniBarModule() {
    }
    /**
     * @return {?}
     */
    G2MiniBarModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: G2MiniBarModule, providers: [] };
    };
    G2MiniBarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, DelonUtilModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return G2MiniBarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { G2MiniBarComponent, G2MiniBarModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1iYXIuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9jaGFydC9taW5pLWJhci9taW5pLWJhci5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9jaGFydC9taW5pLWJhci9taW5pLWJhci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgSG9zdEJpbmRpbmcsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgT25EZXN0cm95LFxuICBPbkNoYW5nZXMsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBOZ1pvbmUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdG9OdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmRlY2xhcmUgdmFyIEcyOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLW1pbmktYmFyJyxcbiAgdGVtcGxhdGU6IGA8ZGl2ICNjb250YWluZXI+PC9kaXY+YCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEcyTWluaUJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKVxuICBjb2xvciA9ICcjMTg5MEZGJztcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodC5weCcpXG4gIEBJbnB1dCgpXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgfVxuICBzZXQgaGVpZ2h0KHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9oZWlnaHQgPSB0b051bWJlcih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfaGVpZ2h0ID0gMDtcblxuICBASW5wdXQoKVxuICBzZXQgYm9yZGVyV2lkdGgodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX2JvcmRlcldpZHRoID0gdG9OdW1iZXIodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2JvcmRlcldpZHRoID0gNTtcblxuICBASW5wdXQoKVxuICBwYWRkaW5nOiBudW1iZXJbXSA9IFs4LCA4LCA4LCA4XTtcblxuICBASW5wdXQoKVxuICBkYXRhOiBBcnJheTx7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBba2V5OiBzdHJpbmddOiBhbnkgfT47XG5cbiAgQElucHV0KClcbiAgeVRvb2x0aXBTdWZmaXggPSAnJztcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJylcbiAgcHJpdmF0ZSBub2RlOiBFbGVtZW50UmVmO1xuXG4gIHByaXZhdGUgY2hhcnQ6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IE5nWm9uZSkge31cblxuICBwcml2YXRlIGluc3RhbGwoKSB7XG4gICAgaWYgKCF0aGlzLmRhdGEgfHwgKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEubGVuZ3RoIDwgMSkpIHJldHVybjtcblxuICAgIHRoaXMubm9kZS5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xuICAgICAgY29udGFpbmVyOiB0aGlzLm5vZGUubmF0aXZlRWxlbWVudCxcbiAgICAgIGZvcmNlRml0OiB0cnVlLFxuICAgICAgaGVpZ2h0OiArdGhpcy5oZWlnaHQsXG4gICAgICBwYWRkaW5nOiB0aGlzLnBhZGRpbmcsXG4gICAgICBsZWdlbmQ6IG51bGwsXG4gICAgfSk7XG5cbiAgICBjaGFydC5heGlzKGZhbHNlKTtcblxuICAgIGNoYXJ0LnNvdXJjZSh0aGlzLmRhdGEsIHtcbiAgICAgIHg6IHtcbiAgICAgICAgdHlwZTogJ2NhdCcsXG4gICAgICB9LFxuICAgICAgeToge1xuICAgICAgICBtaW46IDAsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY2hhcnQudG9vbHRpcCh7XG4gICAgICBzaG93VGl0bGU6IGZhbHNlLFxuICAgICAgaGlkZU1hcmtkZXJzOiBmYWxzZSxcbiAgICAgIGNyb3NzaGFpcnM6IGZhbHNlLFxuICAgICAgJ2cyLXRvb2x0aXAnOiB7IHBhZGRpbmc6IDQgfSxcbiAgICAgICdnMi10b29sdGlwLWxpc3QtaXRlbSc6IHsgbWFyZ2luOiBgMHB4IDRweGAgfSxcbiAgICB9KTtcbiAgICBjaGFydFxuICAgICAgLmludGVydmFsKClcbiAgICAgIC5wb3NpdGlvbigneCp5JylcbiAgICAgIC5zaXplKHRoaXMuX2JvcmRlcldpZHRoKVxuICAgICAgLmNvbG9yKHRoaXMuY29sb3IpXG4gICAgICAudG9vbHRpcCgneCp5JywgKHgsIHkpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBuYW1lOiB4LFxuICAgICAgICAgIHZhbHVlOiB5ICsgdGhpcy55VG9vbHRpcFN1ZmZpeCxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgY2hhcnQucmVuZGVyKCk7XG5cbiAgICB0aGlzLmNoYXJ0ID0gY2hhcnQ7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmluc3RhbGwoKSkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgIHRoaXMuY2hhcnQuZGVzdHJveSgpO1xuICAgICAgdGhpcy5jaGFydCA9IG51bGw7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgRzJNaW5pQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9taW5pLWJhci5jb21wb25lbnQnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW0cyTWluaUJhckNvbXBvbmVudF07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIERlbG9uVXRpbE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFNdLFxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXG59KVxuZXhwb3J0IGNsYXNzIEcyTWluaUJhck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7IG5nTW9kdWxlOiBHMk1pbmlCYXJNb2R1bGUsIHByb3ZpZGVyczogW10gfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0lBMERFLDRCQUFvQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTs7UUFsQ2hDLFVBQUssR0FBRyxTQUFTLENBQUM7UUFVVixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBTVosaUJBQVksR0FBRyxDQUFDLENBQUM7UUFHekIsWUFBTyxHQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFNakMsbUJBQWMsR0FBRyxFQUFFLENBQUM7S0FTZ0I7SUFoQ3BDLHNCQUVJLHNDQUFNOzs7O1FBRlY7WUFHRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDckI7Ozs7O1FBQ0QsVUFBVyxLQUFVO1lBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2hDOzs7T0FIQTtJQU1ELHNCQUNJLDJDQUFXOzs7OztRQURmLFVBQ2dCLEtBQVU7WUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckM7OztPQUFBOzs7O0lBcUJPLG9DQUFPOzs7SUFBZjtRQUFBLGlCQThDQztRQTdDQyxJQUFJLENB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