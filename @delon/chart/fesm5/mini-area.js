import { Component, Input, HostBinding, ViewChild, ChangeDetectionStrategy, NgZone, NgModule } from '@angular/core';
import { toNumber, toBoolean, DelonUtilModule } from '@delon/util';
import { __spread } from 'tslib';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var G2MiniAreaComponent = /** @class */ (function () {
    function G2MiniAreaComponent(zone) {
        this.zone = zone;
        // #region fields
        this.color = 'rgba(24, 144, 255, 0.2)';
        this.borderColor = '#1890FF';
        this._borderWidth = 2;
        this._fit = true;
        this._line = false;
        this._animate = true;
        this.padding = [8, 8, 8, 8];
        this.yTooltipSuffix = '';
    }
    Object.defineProperty(G2MiniAreaComponent.prototype, "borderWidth", {
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
    Object.defineProperty(G2MiniAreaComponent.prototype, "height", {
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
    Object.defineProperty(G2MiniAreaComponent.prototype, "fit", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._fit = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G2MiniAreaComponent.prototype, "line", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._line = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G2MiniAreaComponent.prototype, "animate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._animate;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._animate = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    G2MiniAreaComponent.prototype.install = /**
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
            forceFit: this._fit,
            height: +this.height,
            animate: this.animate,
            padding: this.padding,
            legend: null,
        });
        if (!this.xAxis && !this.yAxis) {
            chart.axis(false);
        }
        if (this.xAxis) {
            chart.axis('x', this.xAxis);
        }
        else {
            chart.axis('x', false);
        }
        if (this.yAxis) {
            chart.axis('y', this.yAxis);
        }
        else {
            chart.axis('y', false);
        }
        /** @type {?} */
        var dataConfig = {
            x: {
                type: 'cat',
                range: [0, 1],
                xAxis: this.xAxis,
            },
            y: {
                min: 0,
                yAxis: this.yAxis,
            },
        };
        chart.tooltip({
            showTitle: false,
            hideMarkders: false,
            'g2-tooltip': { padding: 4 },
            'g2-tooltip-list-item': { margin: "0px 4px" },
        });
        /** @type {?} */
        var view = chart.view();
        view.source(this.data, dataConfig);
        view
            .area()
            .position('x*y')
            .color(this.color)
            .tooltip('x*y', function (x, y) {
            return {
                name: x,
                value: y + _this.yTooltipSuffix,
            };
        })
            .shape('smooth')
            .style({ fillOpacity: 1 });
        if (this._line) {
            /** @type {?} */
            var view2 = chart.view();
            view2.source(this.data, dataConfig);
            view2
                .line()
                .position('x*y')
                .color(this.borderColor)
                .size(this._borderWidth)
                .shape('smooth');
            view2.tooltip(false);
        }
        chart.render();
        this.chart = chart;
    };
    /**
     * @return {?}
     */
    G2MiniAreaComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.runOutsideAngular(function () { return setTimeout(function () { return _this.install(); }); });
    };
    /**
     * @return {?}
     */
    G2MiniAreaComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
    };
    G2MiniAreaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-mini-area',
                    template: "<div #container></div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    G2MiniAreaComponent.ctorParameters = function () { return [
        { type: NgZone }
    ]; };
    G2MiniAreaComponent.propDecorators = {
        color: [{ type: Input }],
        borderColor: [{ type: Input }],
        borderWidth: [{ type: Input }],
        height: [{ type: HostBinding, args: ['style.height.px',] }, { type: Input }],
        fit: [{ type: Input }],
        line: [{ type: Input }],
        animate: [{ type: Input }],
        xAxis: [{ type: Input }],
        yAxis: [{ type: Input }],
        padding: [{ type: Input }],
        data: [{ type: Input }],
        yTooltipSuffix: [{ type: Input }],
        node: [{ type: ViewChild, args: ['container',] }]
    };
    return G2MiniAreaComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [G2MiniAreaComponent];
var G2MiniAreaModule = /** @class */ (function () {
    function G2MiniAreaModule() {
    }
    /**
     * @return {?}
     */
    G2MiniAreaModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: G2MiniAreaModule, providers: [] };
    };
    G2MiniAreaModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, DelonUtilModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return G2MiniAreaModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { G2MiniAreaComponent, G2MiniAreaModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1hcmVhLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vY2hhcnQvbWluaS1hcmVhL21pbmktYXJlYS5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9jaGFydC9taW5pLWFyZWEvbWluaS1hcmVhLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBIb3N0QmluZGluZyxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBPbkRlc3Ryb3ksXG4gIE9uQ2hhbmdlcyxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE5nWm9uZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0b051bWJlciwgdG9Cb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5kZWNsYXJlIHZhciBHMjogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi1taW5pLWFyZWEnLFxuICB0ZW1wbGF0ZTogYDxkaXYgI2NvbnRhaW5lcj48L2Rpdj5gLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRzJNaW5pQXJlYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKVxuICBjb2xvciA9ICdyZ2JhKDI0LCAxNDQsIDI1NSwgMC4yKSc7XG4gIEBJbnB1dCgpXG4gIGJvcmRlckNvbG9yID0gJyMxODkwRkYnO1xuICBASW5wdXQoKVxuICBzZXQgYm9yZGVyV2lkdGgodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX2JvcmRlcldpZHRoID0gdG9OdW1iZXIodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2JvcmRlcldpZHRoID0gMjtcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodC5weCcpXG4gIEBJbnB1dCgpXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgfVxuICBzZXQgaGVpZ2h0KHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9oZWlnaHQgPSB0b051bWJlcih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfaGVpZ2h0O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBmaXQodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX2ZpdCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfZml0ID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBzZXQgbGluZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fbGluZSA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfbGluZSA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBhbmltYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9hbmltYXRlO1xuICB9XG4gIHNldCBhbmltYXRlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9hbmltYXRlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9hbmltYXRlID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICB4QXhpczogYW55O1xuICBASW5wdXQoKVxuICB5QXhpczogYW55O1xuICBASW5wdXQoKVxuICBwYWRkaW5nOiBudW1iZXJbXSA9IFs4LCA4LCA4LCA4XTtcbiAgQElucHV0KClcbiAgZGF0YTogQXJyYXk8eyB4OiBudW1iZXI7IHk6IG51bWJlcjsgW2tleTogc3RyaW5nXTogYW55IH0+O1xuICBASW5wdXQoKVxuICB5VG9vbHRpcFN1ZmZpeCA9ICcnO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBAVmlld0NoaWxkKCdjb250YWluZXInKVxuICBwcml2YXRlIG5vZGU6IEVsZW1lbnRSZWY7XG5cbiAgcHJpdmF0ZSBjaGFydDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgem9uZTogTmdab25lKSB7fVxuXG4gIHByaXZhdGUgaW5zdGFsbCgpIHtcbiAgICBpZiAoIXRoaXMuZGF0YSB8fCAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5sZW5ndGggPCAxKSkgcmV0dXJuO1xuXG4gICAgdGhpcy5ub2RlLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBjaGFydCA9IG5ldyBHMi5DaGFydCh7XG4gICAgICBjb250YWluZXI6IHRoaXMubm9kZS5uYXRpdmVFbGVtZW50LFxuICAgICAgZm9yY2VGaXQ6IHRoaXMuX2ZpdCxcbiAgICAgIGhlaWdodDogK3RoaXMuaGVpZ2h0LFxuICAgICAgYW5pbWF0ZTogdGhpcy5hbmltYXRlLFxuICAgICAgcGFkZGluZzogdGhpcy5wYWRkaW5nLFxuICAgICAgbGVnZW5kOiBudWxsLFxuICAgIH0pO1xuXG4gICAgaWYgKCF0aGlzLnhBeGlzICYmICF0aGlzLnlBeGlzKSB7XG4gICAgICBjaGFydC5heGlzKGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy54QXhpcykge1xuICAgICAgY2hhcnQuYXhpcygneCcsIHRoaXMueEF4aXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGFydC5heGlzKCd4JywgZmFsc2UpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnlBeGlzKSB7XG4gICAgICBjaGFydC5heGlzKCd5JywgdGhpcy55QXhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoYXJ0LmF4aXMoJ3knLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YUNvbmZpZyA9IHtcbiAgICAgIHg6IHtcbiAgICAgICAgdHlwZTogJ2NhdCcsXG4gICAgICAgIHJhbmdlOiBbMCwgMV0sXG4gICAgICAgIHhBeGlzOiB0aGlzLnhBeGlzLFxuICAgICAgfSxcbiAgICAgIHk6IHtcbiAgICAgICAgbWluOiAwLFxuICAgICAgICB5QXhpczogdGhpcy55QXhpcyxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIGNoYXJ0LnRvb2x0aXAoe1xuICAgICAgc2hvd1RpdGxlOiBmYWxzZSxcbiAgICAgIGhpZGVNYXJrZGVyczogZmFsc2UsXG4gICAgICAnZzItdG9vbHRpcCc6IHsgcGFkZGluZzogNCB9LFxuICAgICAgJ2cyLXRvb2x0aXAtbGlzdC1pdGVtJzogeyBtYXJnaW46IGAwcHggNHB4YCB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgdmlldyA9IGNoYXJ0LnZpZXcoKTtcbiAgICB2aWV3LnNvdXJjZSh0aGlzLmRhdGEsIGRhdGFDb25maWcpO1xuXG4gICAgdmlld1xuICAgICAgLmFyZWEoKVxuICAgICAgLnBvc2l0aW9uKCd4KnknKVxuICAgICAgLmNvbG9yKHRoaXMuY29sb3IpXG4gICAgICAudG9vbHRpcCgneCp5JywgKHgsIHkpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBuYW1lOiB4LFxuICAgICAgICAgIHZhbHVlOiB5ICsgdGhpcy55VG9vbHRpcFN1ZmZpeCxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgICAuc2hhcGUoJ3Ntb290aCcpXG4gICAgICAuc3R5bGUoeyBmaWxsT3BhY2l0eTogMSB9KTtcblxuICAgIGlmICh0aGlzLl9saW5lKSB7XG4gICAgICBjb25zdCB2aWV3MiA9IGNoYXJ0LnZpZXcoKTtcbiAgICAgIHZpZXcyLnNvdXJjZSh0aGlzLmRhdGEsIGRhdGFDb25maWcpO1xuICAgICAgdmlldzJcbiAgICAgICAgLmxpbmUoKVxuICAgICAgICAucG9zaXRpb24oJ3gqeScpXG4gICAgICAgIC5jb2xvcih0aGlzLmJvcmRlckNvbG9yKVxuICAgICAgICAuc2l6ZSh0aGlzLl9ib3JkZXJXaWR0aClcbiAgICAgICAgLnNoYXBlKCdzbW9vdGgnKTtcbiAgICAgIHZpZXcyLnRvb2x0aXAoZmFsc2UpO1xuICAgIH1cbiAgICBjaGFydC5yZW5kZXIoKTtcbiAgICB0aGlzLmNoYXJ0ID0gY2hhcnQ7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmluc3RhbGwoKSkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgIHRoaXMuY2hhcnQuZGVzdHJveSgpO1xuICAgICAgdGhpcy5jaGFydCA9IG51bGw7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgRzJNaW5pQXJlYUNvbXBvbmVudCB9IGZyb20gJy4vbWluaS1hcmVhLmNvbXBvbmVudCc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbRzJNaW5pQXJlYUNvbXBvbmVudF07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIERlbG9uVXRpbE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFNdLFxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXG59KVxuZXhwb3J0IGNsYXNzIEcyTWluaUFyZWFNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4geyBuZ01vZHVsZTogRzJNaW5pQXJlYU1vZHVsZSwgcHJvdmlkZXJzOiBbXSB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7SUFrRkUsNkJBQW9CLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFROztxQkExRHhCLHlCQUF5QjsyQkFFbkIsU0FBUzs0QkFLQSxDQUFDO29CQWdCVCxJQUFJO3FCQU1ILEtBQUs7d0JBU0YsSUFBSTt1QkFPSCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzs4QkFJZixFQUFFO0tBU2lCO0lBdkRwQyxzQkFDSSw0Q0FBVzs7Ozs7UUFEZixVQUNnQixLQUFVO1lBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3JDOzs7T0FBQTtJQUdELHNCQUVJLHVDQUFNOzs7O1FBRlY7WUFHRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDckI7Ozs7O1FBQ0QsVUFBVyxLQUFVO1lBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2hDOzs7T0FIQTtJQU1ELHNCQUNJLG9DQUFHOzs7OztRQURQLFVBQ1EsS0FBVTtZQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM5Qjs7O09BQUE7SUFHRCxzQkFDSSxxQ0FBSTs7Ozs7UUFEUixVQUNTLEtBQVU7WUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0I7OztPQUFBO0lBR0Qsc0JBQ0ksd0NBQU87Ozs7UUFEWDtZQUVFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN0Qjs7Ozs7UUFDRCxVQUFZLEtBQVU7WUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEM7OztPQUhBOzs7O0lBMEJPLHFDQUFPOzs7OztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQUUsT0FBTztRQUU5RCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDOztRQUV2QyxJQUFNLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDekIsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYTtZQUNsQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDbkIsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDcEIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixNQUFNLEVBQUUsSUFBSTtTQUNiLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUM5QixLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25CO1FBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdCO2FBQU07WUFDTCxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN4QjtRQUVELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QjthQUFNO1lBQ0wsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDeEI7O1FBRUQsSUFBTSxVQUFVLEdBQUc7WUFDakIsQ0FBQyxFQUFFO2dCQUNELElBQUksRUFBRSxLQUFLO2dCQUNYLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ2IsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2FBQ2xCO1lBQ0QsQ0FBQyxFQUFFO2dCQUNELEdBQUcsRUFBRSxDQUFDO2dCQUNOLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSzthQUNsQjtTQUNGLENBQUM7UUFFRixLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ1osU0FBUyxFQUFFLEtBQUs7WUFDaEIsWUFBWSxFQUFFLEtBQUs7WUFDbkIsWUFBWSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRTtZQUM1QixzQkFBc0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUU7U0FDOUMsQ0FBQyxDQUFDOztRQUVILElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFbkMsSUFBSTthQUNELElBQUksRUFBRTthQUNOLFFBQVEsQ0FBQyxLQUFLLENBQUM7YUFDZixLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNqQixPQUFPLENBQUMsS0FBSyxFQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDbkIsT0FBTztnQkFDTCxJQUFJLEVBQUUsQ0FBQztnQkFDUCxLQUFLLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxjQUFjO2FBQy9CLENBQUM7U0FDSCxDQUFDO2FBQ0QsS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUNmLEtBQUssQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTdCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTs7WUFDZCxJQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDM0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ3BDLEtBQUs7aUJBQ0YsSUFBSSxFQUFFO2lCQUNOLFFBQVEsQ0FBQyxLQUFLLENBQUM7aUJBQ2YsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7aUJBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO2lCQUN2QixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjtRQUNELEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDOzs7OztJQUdyQix5Q0FBVzs7O0lBQVg7UUFBQSxpQkFFQztRQURDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBTSxPQUFBLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sRUFBRSxHQUFBLENBQUMsR0FBQSxDQUFDLENBQUM7S0FDckU7Ozs7SUFFRCx5Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ25CO0tBQ0Y7O2dCQTlKRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFWQyxNQUFNOzs7d0JBY0wsS0FBSzs4QkFFTCxLQUFLOzhCQUVMLEtBQUs7eUJBTUwsV0FBVyxTQUFDLGlCQUFpQixjQUM3QixLQUFLO3NCQVNMLEtBQUs7dUJBTUwsS0FBSzswQkFNTCxLQUFLO3dCQVNMLEtBQUs7d0JBRUwsS0FBSzswQkFFTCxLQUFLO3VCQUVMLEtBQUs7aUNBRUwsS0FBSzt1QkFLTCxTQUFTLFNBQUMsV0FBVzs7OEJBN0V4Qjs7Ozs7Ozs7QUNNQSxJQUFNLFVBQVUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7Ozs7Ozs7SUFRaEMsd0JBQU87OztJQUFkO1FBQ0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUM7S0FDdEQ7O2dCQVJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDO29CQUN4QyxZQUFZLFdBQU0sVUFBVSxDQUFDO29CQUM3QixPQUFPLFdBQU0sVUFBVSxDQUFDO2lCQUN6Qjs7MkJBWkQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==