import { Component, Input, HostBinding, ViewChild, ChangeDetectionStrategy, NgZone, NgModule } from '@angular/core';
import { toNumber, toBoolean, DelonUtilModule } from '@delon/util';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class G2MiniAreaComponent {
    /**
     * @param {?} zone
     */
    constructor(zone) {
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
    /**
     * @param {?} value
     * @return {?}
     */
    set borderWidth(value) {
        this._borderWidth = toNumber(value);
    }
    /**
     * @return {?}
     */
    get height() {
        return this._height;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set height(value) {
        this._height = toNumber(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set fit(value) {
        this._fit = toBoolean(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set line(value) {
        this._line = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get animate() {
        return this._animate;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set animate(value) {
        this._animate = toBoolean(value);
    }
    /**
     * @return {?}
     */
    install() {
        if (!this.data || (this.data && this.data.length < 1))
            return;
        this.node.nativeElement.innerHTML = '';
        /** @type {?} */
        const chart = new G2.Chart({
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
        const dataConfig = {
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
            'g2-tooltip-list-item': { margin: `0px 4px` },
        });
        /** @type {?} */
        const view = chart.view();
        view.source(this.data, dataConfig);
        view
            .area()
            .position('x*y')
            .color(this.color)
            .tooltip('x*y', (x, y) => {
            return {
                name: x,
                value: y + this.yTooltipSuffix,
            };
        })
            .shape('smooth')
            .style({ fillOpacity: 1 });
        if (this._line) {
            /** @type {?} */
            const view2 = chart.view();
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
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.zone.runOutsideAngular(() => setTimeout(() => this.install()));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
    }
}
G2MiniAreaComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-mini-area',
                template: `<div #container></div>`,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
G2MiniAreaComponent.ctorParameters = () => [
    { type: NgZone }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [G2MiniAreaComponent];
class G2MiniAreaModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: G2MiniAreaModule, providers: [] };
    }
}
G2MiniAreaModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DelonUtilModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { G2MiniAreaComponent, G2MiniAreaModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1hcmVhLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vY2hhcnQvbWluaS1hcmVhL21pbmktYXJlYS5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9jaGFydC9taW5pLWFyZWEvbWluaS1hcmVhLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBIb3N0QmluZGluZyxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBPbkRlc3Ryb3ksXG4gIE9uQ2hhbmdlcyxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE5nWm9uZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0b051bWJlciwgdG9Cb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5kZWNsYXJlIHZhciBHMjogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi1taW5pLWFyZWEnLFxuICB0ZW1wbGF0ZTogYDxkaXYgI2NvbnRhaW5lcj48L2Rpdj5gLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRzJNaW5pQXJlYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKVxuICBjb2xvciA9ICdyZ2JhKDI0LCAxNDQsIDI1NSwgMC4yKSc7XG4gIEBJbnB1dCgpXG4gIGJvcmRlckNvbG9yID0gJyMxODkwRkYnO1xuICBASW5wdXQoKVxuICBzZXQgYm9yZGVyV2lkdGgodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX2JvcmRlcldpZHRoID0gdG9OdW1iZXIodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2JvcmRlcldpZHRoID0gMjtcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodC5weCcpXG4gIEBJbnB1dCgpXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgfVxuICBzZXQgaGVpZ2h0KHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9oZWlnaHQgPSB0b051bWJlcih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfaGVpZ2h0O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBmaXQodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX2ZpdCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfZml0ID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBzZXQgbGluZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fbGluZSA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfbGluZSA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBhbmltYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9hbmltYXRlO1xuICB9XG4gIHNldCBhbmltYXRlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9hbmltYXRlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9hbmltYXRlID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICB4QXhpczogYW55O1xuICBASW5wdXQoKVxuICB5QXhpczogYW55O1xuICBASW5wdXQoKVxuICBwYWRkaW5nOiBudW1iZXJbXSA9IFs4LCA4LCA4LCA4XTtcbiAgQElucHV0KClcbiAgZGF0YTogQXJyYXk8eyB4OiBudW1iZXI7IHk6IG51bWJlcjsgW2tleTogc3RyaW5nXTogYW55IH0+O1xuICBASW5wdXQoKVxuICB5VG9vbHRpcFN1ZmZpeCA9ICcnO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBAVmlld0NoaWxkKCdjb250YWluZXInKVxuICBwcml2YXRlIG5vZGU6IEVsZW1lbnRSZWY7XG5cbiAgcHJpdmF0ZSBjaGFydDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgem9uZTogTmdab25lKSB7fVxuXG4gIHByaXZhdGUgaW5zdGFsbCgpIHtcbiAgICBpZiAoIXRoaXMuZGF0YSB8fCAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5sZW5ndGggPCAxKSkgcmV0dXJuO1xuXG4gICAgdGhpcy5ub2RlLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBjaGFydCA9IG5ldyBHMi5DaGFydCh7XG4gICAgICBjb250YWluZXI6IHRoaXMubm9kZS5uYXRpdmVFbGVtZW50LFxuICAgICAgZm9yY2VGaXQ6IHRoaXMuX2ZpdCxcbiAgICAgIGhlaWdodDogK3RoaXMuaGVpZ2h0LFxuICAgICAgYW5pbWF0ZTogdGhpcy5hbmltYXRlLFxuICAgICAgcGFkZGluZzogdGhpcy5wYWRkaW5nLFxuICAgICAgbGVnZW5kOiBudWxsLFxuICAgIH0pO1xuXG4gICAgaWYgKCF0aGlzLnhBeGlzICYmICF0aGlzLnlBeGlzKSB7XG4gICAgICBjaGFydC5heGlzKGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy54QXhpcykge1xuICAgICAgY2hhcnQuYXhpcygneCcsIHRoaXMueEF4aXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGFydC5heGlzKCd4JywgZmFsc2UpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnlBeGlzKSB7XG4gICAgICBjaGFydC5heGlzKCd5JywgdGhpcy55QXhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoYXJ0LmF4aXMoJ3knLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YUNvbmZpZyA9IHtcbiAgICAgIHg6IHtcbiAgICAgICAgdHlwZTogJ2NhdCcsXG4gICAgICAgIHJhbmdlOiBbMCwgMV0sXG4gICAgICAgIHhBeGlzOiB0aGlzLnhBeGlzLFxuICAgICAgfSxcbiAgICAgIHk6IHtcbiAgICAgICAgbWluOiAwLFxuICAgICAgICB5QXhpczogdGhpcy55QXhpcyxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIGNoYXJ0LnRvb2x0aXAoe1xuICAgICAgc2hvd1RpdGxlOiBmYWxzZSxcbiAgICAgIGhpZGVNYXJrZGVyczogZmFsc2UsXG4gICAgICAnZzItdG9vbHRpcCc6IHsgcGFkZGluZzogNCB9LFxuICAgICAgJ2cyLXRvb2x0aXAtbGlzdC1pdGVtJzogeyBtYXJnaW46IGAwcHggNHB4YCB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgdmlldyA9IGNoYXJ0LnZpZXcoKTtcbiAgICB2aWV3LnNvdXJjZSh0aGlzLmRhdGEsIGRhdGFDb25maWcpO1xuXG4gICAgdmlld1xuICAgICAgLmFyZWEoKVxuICAgICAgLnBvc2l0aW9uKCd4KnknKVxuICAgICAgLmNvbG9yKHRoaXMuY29sb3IpXG4gICAgICAudG9vbHRpcCgneCp5JywgKHgsIHkpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBuYW1lOiB4LFxuICAgICAgICAgIHZhbHVlOiB5ICsgdGhpcy55VG9vbHRpcFN1ZmZpeCxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgICAuc2hhcGUoJ3Ntb290aCcpXG4gICAgICAuc3R5bGUoeyBmaWxsT3BhY2l0eTogMSB9KTtcblxuICAgIGlmICh0aGlzLl9saW5lKSB7XG4gICAgICBjb25zdCB2aWV3MiA9IGNoYXJ0LnZpZXcoKTtcbiAgICAgIHZpZXcyLnNvdXJjZSh0aGlzLmRhdGEsIGRhdGFDb25maWcpO1xuICAgICAgdmlldzJcbiAgICAgICAgLmxpbmUoKVxuICAgICAgICAucG9zaXRpb24oJ3gqeScpXG4gICAgICAgIC5jb2xvcih0aGlzLmJvcmRlckNvbG9yKVxuICAgICAgICAuc2l6ZSh0aGlzLl9ib3JkZXJXaWR0aClcbiAgICAgICAgLnNoYXBlKCdzbW9vdGgnKTtcbiAgICAgIHZpZXcyLnRvb2x0aXAoZmFsc2UpO1xuICAgIH1cbiAgICBjaGFydC5yZW5kZXIoKTtcbiAgICB0aGlzLmNoYXJ0ID0gY2hhcnQ7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmluc3RhbGwoKSkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgIHRoaXMuY2hhcnQuZGVzdHJveSgpO1xuICAgICAgdGhpcy5jaGFydCA9IG51bGw7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgRzJNaW5pQXJlYUNvbXBvbmVudCB9IGZyb20gJy4vbWluaS1hcmVhLmNvbXBvbmVudCc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbRzJNaW5pQXJlYUNvbXBvbmVudF07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIERlbG9uVXRpbE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFNdLFxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXG59KVxuZXhwb3J0IGNsYXNzIEcyTWluaUFyZWFNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4geyBuZ01vZHVsZTogRzJNaW5pQXJlYU1vZHVsZSwgcHJvdmlkZXJzOiBbXSB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztJQWtGRSxZQUFvQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTs7cUJBMUR4Qix5QkFBeUI7MkJBRW5CLFNBQVM7NEJBS0EsQ0FBQztvQkFnQlQsSUFBSTtxQkFNSCxLQUFLO3dCQVNGLElBQUk7dUJBT0gsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7OEJBSWYs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