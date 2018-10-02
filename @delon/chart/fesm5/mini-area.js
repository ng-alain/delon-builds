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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1hcmVhLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vY2hhcnQvbWluaS1hcmVhL21pbmktYXJlYS5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9jaGFydC9taW5pLWFyZWEvbWluaS1hcmVhLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBIb3N0QmluZGluZyxcclxuICBWaWV3Q2hpbGQsXHJcbiAgRWxlbWVudFJlZixcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25DaGFuZ2VzLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIE5nWm9uZSxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgdG9OdW1iZXIsIHRvQm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuXHJcbmRlY2xhcmUgdmFyIEcyOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2cyLW1pbmktYXJlYScsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2ICNjb250YWluZXI+PC9kaXY+YCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEcyTWluaUFyZWFDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcbiAgLy8gI3JlZ2lvbiBmaWVsZHNcclxuXHJcbiAgQElucHV0KClcclxuICBjb2xvciA9ICdyZ2JhKDI0LCAxNDQsIDI1NSwgMC4yKSc7XHJcbiAgQElucHV0KClcclxuICBib3JkZXJDb2xvciA9ICcjMTg5MEZGJztcclxuICBASW5wdXQoKVxyXG4gIHNldCBib3JkZXJXaWR0aCh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLl9ib3JkZXJXaWR0aCA9IHRvTnVtYmVyKHZhbHVlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfYm9yZGVyV2lkdGggPSAyO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodC5weCcpXHJcbiAgQElucHV0KClcclxuICBnZXQgaGVpZ2h0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcclxuICB9XHJcbiAgc2V0IGhlaWdodCh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLl9oZWlnaHQgPSB0b051bWJlcih2YWx1ZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2hlaWdodDtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgZml0KHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuX2ZpdCA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2ZpdCA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGxpbmUodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5fbGluZSA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2xpbmUgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgYW5pbWF0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9hbmltYXRlO1xyXG4gIH1cclxuICBzZXQgYW5pbWF0ZSh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLl9hbmltYXRlID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfYW5pbWF0ZSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgeEF4aXM6IGFueTtcclxuICBASW5wdXQoKVxyXG4gIHlBeGlzOiBhbnk7XHJcbiAgQElucHV0KClcclxuICBwYWRkaW5nOiBudW1iZXJbXSA9IFs4LCA4LCA4LCA4XTtcclxuICBASW5wdXQoKVxyXG4gIGRhdGE6IEFycmF5PHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IFtrZXk6IHN0cmluZ106IGFueSB9PjtcclxuICBASW5wdXQoKVxyXG4gIHlUb29sdGlwU3VmZml4ID0gJyc7XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJylcclxuICBwcml2YXRlIG5vZGU6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHByaXZhdGUgY2hhcnQ6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHt9XHJcblxyXG4gIHByaXZhdGUgaW5zdGFsbCgpIHtcclxuICAgIGlmICghdGhpcy5kYXRhIHx8ICh0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLmxlbmd0aCA8IDEpKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5ub2RlLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgY29uc3QgY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xyXG4gICAgICBjb250YWluZXI6IHRoaXMubm9kZS5uYXRpdmVFbGVtZW50LFxyXG4gICAgICBmb3JjZUZpdDogdGhpcy5fZml0LFxyXG4gICAgICBoZWlnaHQ6ICt0aGlzLmhlaWdodCxcclxuICAgICAgYW5pbWF0ZTogdGhpcy5hbmltYXRlLFxyXG4gICAgICBwYWRkaW5nOiB0aGlzLnBhZGRpbmcsXHJcbiAgICAgIGxlZ2VuZDogbnVsbCxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdGhpcy54QXhpcyAmJiAhdGhpcy55QXhpcykge1xyXG4gICAgICBjaGFydC5heGlzKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy54QXhpcykge1xyXG4gICAgICBjaGFydC5heGlzKCd4JywgdGhpcy54QXhpcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjaGFydC5heGlzKCd4JywgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnlBeGlzKSB7XHJcbiAgICAgIGNoYXJ0LmF4aXMoJ3knLCB0aGlzLnlBeGlzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNoYXJ0LmF4aXMoJ3knLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0YUNvbmZpZyA9IHtcclxuICAgICAgeDoge1xyXG4gICAgICAgIHR5cGU6ICdjYXQnLFxyXG4gICAgICAgIHJhbmdlOiBbMCwgMV0sXHJcbiAgICAgICAgeEF4aXM6IHRoaXMueEF4aXMsXHJcbiAgICAgIH0sXHJcbiAgICAgIHk6IHtcclxuICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgeUF4aXM6IHRoaXMueUF4aXMsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIGNoYXJ0LnRvb2x0aXAoe1xyXG4gICAgICBzaG93VGl0bGU6IGZhbHNlLFxyXG4gICAgICBoaWRlTWFya2RlcnM6IGZhbHNlLFxyXG4gICAgICAnZzItdG9vbHRpcCc6IHsgcGFkZGluZzogNCB9LFxyXG4gICAgICAnZzItdG9vbHRpcC1saXN0LWl0ZW0nOiB7IG1hcmdpbjogYDBweCA0cHhgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB2aWV3ID0gY2hhcnQudmlldygpO1xyXG4gICAgdmlldy5zb3VyY2UodGhpcy5kYXRhLCBkYXRhQ29uZmlnKTtcclxuXHJcbiAgICB2aWV3XHJcbiAgICAgIC5hcmVhKClcclxuICAgICAgLnBvc2l0aW9uKCd4KnknKVxyXG4gICAgICAuY29sb3IodGhpcy5jb2xvcilcclxuICAgICAgLnRvb2x0aXAoJ3gqeScsICh4LCB5KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIG5hbWU6IHgsXHJcbiAgICAgICAgICB2YWx1ZTogeSArIHRoaXMueVRvb2x0aXBTdWZmaXgsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSlcclxuICAgICAgLnNoYXBlKCdzbW9vdGgnKVxyXG4gICAgICAuc3R5bGUoeyBmaWxsT3BhY2l0eTogMSB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5fbGluZSkge1xyXG4gICAgICBjb25zdCB2aWV3MiA9IGNoYXJ0LnZpZXcoKTtcclxuICAgICAgdmlldzIuc291cmNlKHRoaXMuZGF0YSwgZGF0YUNvbmZpZyk7XHJcbiAgICAgIHZpZXcyXHJcbiAgICAgICAgLmxpbmUoKVxyXG4gICAgICAgIC5wb3NpdGlvbigneCp5JylcclxuICAgICAgICAuY29sb3IodGhpcy5ib3JkZXJDb2xvcilcclxuICAgICAgICAuc2l6ZSh0aGlzLl9ib3JkZXJXaWR0aClcclxuICAgICAgICAuc2hhcGUoJ3Ntb290aCcpO1xyXG4gICAgICB2aWV3Mi50b29sdGlwKGZhbHNlKTtcclxuICAgIH1cclxuICAgIGNoYXJ0LnJlbmRlcigpO1xyXG4gICAgdGhpcy5jaGFydCA9IGNoYXJ0O1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmluc3RhbGwoKSkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5jaGFydCkge1xyXG4gICAgICB0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcclxuICAgICAgdGhpcy5jaGFydCA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuXHJcbmltcG9ydCB7IEcyTWluaUFyZWFDb21wb25lbnQgfSBmcm9tICcuL21pbmktYXJlYS5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgQ09NUE9ORU5UUyA9IFtHMk1pbmlBcmVhQ29tcG9uZW50XTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRGVsb25VdGlsTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcclxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHMk1pbmlBcmVhTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7IG5nTW9kdWxlOiBHMk1pbmlBcmVhTW9kdWxlLCBwcm92aWRlcnM6IFtdIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtJQWtGRSw2QkFBb0IsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7O3FCQTFEeEIseUJBQXlCOzJCQUVuQixTQUFTOzRCQUtBLENBQUM7b0JBZ0JULElBQUk7cUJBTUgsS0FBSzt3QkFTRixJQUFJO3VCQU9ILENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzhCQUlmLEVBQUU7S0FTaUI7SUF2RHBDLHNCQUNJLDRDQUFXOzs7OztRQURmLFVBQ2dCLEtBQVU7WUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckM7OztPQUFBO0lBR0Qsc0JBRUksdUNBQU07Ozs7UUFGVjtZQUdFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNyQjs7Ozs7UUFDRCxVQUFXLEtBQVU7WUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEM7OztPQUhBO0lBTUQsc0JBQ0ksb0NBQUc7Ozs7O1FBRFAsVUFDUSxLQUFVO1lBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlCOzs7T0FBQTtJQUdELHNCQUNJLHFDQUFJOzs7OztRQURSLFVBQ1MsS0FBVTtZQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMvQjs7O09BQUE7SUFHRCxzQkFDSSx3Q0FBTzs7OztRQURYO1lBRUUsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1NB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