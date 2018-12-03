/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
// tslint:disable:no-any
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, NgZone, ViewChild, } from '@angular/core';
import { toBoolean, toNumber } from '@delon/util';
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
            'showTitle': false,
            'hideMarkders': false,
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
export { G2MiniAreaComponent };
if (false) {
    /** @type {?} */
    G2MiniAreaComponent.prototype.color;
    /** @type {?} */
    G2MiniAreaComponent.prototype.borderColor;
    /** @type {?} */
    G2MiniAreaComponent.prototype._borderWidth;
    /** @type {?} */
    G2MiniAreaComponent.prototype._height;
    /** @type {?} */
    G2MiniAreaComponent.prototype._fit;
    /** @type {?} */
    G2MiniAreaComponent.prototype._line;
    /** @type {?} */
    G2MiniAreaComponent.prototype._animate;
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
    G2MiniAreaComponent.prototype.node;
    /** @type {?} */
    G2MiniAreaComponent.prototype.chart;
    /** @type {?} */
    G2MiniAreaComponent.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1hcmVhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC9taW5pLWFyZWEvIiwic291cmNlcyI6WyJtaW5pLWFyZWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUdOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUlsRDtJQW1FRSw2QkFBb0IsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7O1FBMURoQyxVQUFLLEdBQUcseUJBQXlCLENBQUM7UUFFbEMsZ0JBQVcsR0FBRyxTQUFTLENBQUM7UUFLaEIsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFnQmpCLFNBQUksR0FBRyxJQUFJLENBQUM7UUFNWixVQUFLLEdBQUcsS0FBSyxDQUFDO1FBU2QsYUFBUSxHQUFHLElBQUksQ0FBQztRQU94QixZQUFPLEdBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUlqQyxtQkFBYyxHQUFHLEVBQUUsQ0FBQztJQVNnQixDQUFDO0lBdkRyQyxzQkFDSSw0Q0FBVzs7Ozs7UUFEZixVQUNnQixLQUFVO1lBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBR0Qsc0JBRUksdUNBQU07Ozs7UUFGVjtZQUdFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDOzs7OztRQUNELFVBQVcsS0FBVTtZQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxDQUFDOzs7T0FIQTtJQU1ELHNCQUNJLG9DQUFH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O0lBQ0gsQ0FBQzs7Z0JBOUpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQWJDLE1BQU07Ozt3QkFpQkwsS0FBSzs4QkFFTCxLQUFLOzhCQUVMLEtBQUs7eUJBTUwsV0FBVyxTQUFDLGlCQUFpQixjQUM3QixLQUFLO3NCQVNMLEtBQUs7dUJBTUwsS0FBSzswQkFNTCxLQUFLO3dCQVNMLEtBQUs7d0JBRUwsS0FBSzswQkFFTCxLQUFLO3VCQUVMLEtBQUs7aUNBRUwsS0FBSzt1QkFLTCxTQUFTLFNBQUMsV0FBVzs7SUFpR3hCLDBCQUFDO0NBQUEsQUEvSkQsSUErSkM7U0ExSlksbUJBQW1COzs7SUFHOUIsb0NBQ2tDOztJQUNsQywwQ0FDd0I7O0lBS3hCLDJDQUF5Qjs7SUFVekIsc0NBQWdCOztJQU1oQixtQ0FBb0I7O0lBTXBCLG9DQUFzQjs7SUFTdEIsdUNBQXdCOztJQUV4QixvQ0FDVzs7SUFDWCxvQ0FDVzs7SUFDWCxzQ0FDaUM7O0lBQ2pDLG1DQUMwRDs7SUFDMUQsNkNBQ29COztJQUlwQixtQ0FDeUI7O0lBRXpCLG9DQUFtQjs7SUFFUCxtQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpuby1hbnlcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRvQm9vbGVhbiwgdG9OdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmRlY2xhcmUgdmFyIEcyOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLW1pbmktYXJlYScsXG4gIHRlbXBsYXRlOiBgPGRpdiAjY29udGFpbmVyPjwvZGl2PmAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBHMk1pbmlBcmVhQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpXG4gIGNvbG9yID0gJ3JnYmEoMjQsIDE0NCwgMjU1LCAwLjIpJztcbiAgQElucHV0KClcbiAgYm9yZGVyQ29sb3IgPSAnIzE4OTBGRic7XG4gIEBJbnB1dCgpXG4gIHNldCBib3JkZXJXaWR0aCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fYm9yZGVyV2lkdGggPSB0b051bWJlcih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfYm9yZGVyV2lkdGggPSAyO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0LnB4JylcbiAgQElucHV0KClcbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xuICB9XG4gIHNldCBoZWlnaHQodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX2hlaWdodCA9IHRvTnVtYmVyKHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9oZWlnaHQ7XG5cbiAgQElucHV0KClcbiAgc2V0IGZpdCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fZml0ID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9maXQgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBsaW5lKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9saW5lID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9saW5lID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgZ2V0IGFuaW1hdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FuaW1hdGU7XG4gIH1cbiAgc2V0IGFuaW1hdGUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX2FuaW1hdGUgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2FuaW1hdGUgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHhBeGlzOiBhbnk7XG4gIEBJbnB1dCgpXG4gIHlBeGlzOiBhbnk7XG4gIEBJbnB1dCgpXG4gIHBhZGRpbmc6IG51bWJlcltdID0gWzgsIDgsIDgsIDhdO1xuICBASW5wdXQoKVxuICBkYXRhOiBBcnJheTx7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBba2V5OiBzdHJpbmddOiBhbnkgfT47XG4gIEBJbnB1dCgpXG4gIHlUb29sdGlwU3VmZml4ID0gJyc7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicpXG4gIHByaXZhdGUgbm9kZTogRWxlbWVudFJlZjtcblxuICBwcml2YXRlIGNoYXJ0OiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHsgfVxuXG4gIHByaXZhdGUgaW5zdGFsbCgpIHtcbiAgICBpZiAoIXRoaXMuZGF0YSB8fCAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5sZW5ndGggPCAxKSkgcmV0dXJuO1xuXG4gICAgdGhpcy5ub2RlLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBjaGFydCA9IG5ldyBHMi5DaGFydCh7XG4gICAgICBjb250YWluZXI6IHRoaXMubm9kZS5uYXRpdmVFbGVtZW50LFxuICAgICAgZm9yY2VGaXQ6IHRoaXMuX2ZpdCxcbiAgICAgIGhlaWdodDogK3RoaXMuaGVpZ2h0LFxuICAgICAgYW5pbWF0ZTogdGhpcy5hbmltYXRlLFxuICAgICAgcGFkZGluZzogdGhpcy5wYWRkaW5nLFxuICAgICAgbGVnZW5kOiBudWxsLFxuICAgIH0pO1xuXG4gICAgaWYgKCF0aGlzLnhBeGlzICYmICF0aGlzLnlBeGlzKSB7XG4gICAgICBjaGFydC5heGlzKGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy54QXhpcykge1xuICAgICAgY2hhcnQuYXhpcygneCcsIHRoaXMueEF4aXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGFydC5heGlzKCd4JywgZmFsc2UpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnlBeGlzKSB7XG4gICAgICBjaGFydC5heGlzKCd5JywgdGhpcy55QXhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoYXJ0LmF4aXMoJ3knLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YUNvbmZpZyA9IHtcbiAgICAgIHg6IHtcbiAgICAgICAgdHlwZTogJ2NhdCcsXG4gICAgICAgIHJhbmdlOiBbMCwgMV0sXG4gICAgICAgIHhBeGlzOiB0aGlzLnhBeGlzLFxuICAgICAgfSxcbiAgICAgIHk6IHtcbiAgICAgICAgbWluOiAwLFxuICAgICAgICB5QXhpczogdGhpcy55QXhpcyxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIGNoYXJ0LnRvb2x0aXAoe1xuICAgICAgJ3Nob3dUaXRsZSc6IGZhbHNlLFxuICAgICAgJ2hpZGVNYXJrZGVycyc6IGZhbHNlLFxuICAgICAgJ2cyLXRvb2x0aXAnOiB7IHBhZGRpbmc6IDQgfSxcbiAgICAgICdnMi10b29sdGlwLWxpc3QtaXRlbSc6IHsgbWFyZ2luOiBgMHB4IDRweGAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHZpZXcgPSBjaGFydC52aWV3KCk7XG4gICAgdmlldy5zb3VyY2UodGhpcy5kYXRhLCBkYXRhQ29uZmlnKTtcblxuICAgIHZpZXdcbiAgICAgIC5hcmVhKClcbiAgICAgIC5wb3NpdGlvbigneCp5JylcbiAgICAgIC5jb2xvcih0aGlzLmNvbG9yKVxuICAgICAgLnRvb2x0aXAoJ3gqeScsICh4LCB5KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbmFtZTogeCxcbiAgICAgICAgICB2YWx1ZTogeSArIHRoaXMueVRvb2x0aXBTdWZmaXgsXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICAgLnNoYXBlKCdzbW9vdGgnKVxuICAgICAgLnN0eWxlKHsgZmlsbE9wYWNpdHk6IDEgfSk7XG5cbiAgICBpZiAodGhpcy5fbGluZSkge1xuICAgICAgY29uc3QgdmlldzIgPSBjaGFydC52aWV3KCk7XG4gICAgICB2aWV3Mi5zb3VyY2UodGhpcy5kYXRhLCBkYXRhQ29uZmlnKTtcbiAgICAgIHZpZXcyXG4gICAgICAgIC5saW5lKClcbiAgICAgICAgLnBvc2l0aW9uKCd4KnknKVxuICAgICAgICAuY29sb3IodGhpcy5ib3JkZXJDb2xvcilcbiAgICAgICAgLnNpemUodGhpcy5fYm9yZGVyV2lkdGgpXG4gICAgICAgIC5zaGFwZSgnc21vb3RoJyk7XG4gICAgICB2aWV3Mi50b29sdGlwKGZhbHNlKTtcbiAgICB9XG4gICAgY2hhcnQucmVuZGVyKCk7XG4gICAgdGhpcy5jaGFydCA9IGNoYXJ0O1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnN0YWxsKCkpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICB0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuY2hhcnQgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuIl19