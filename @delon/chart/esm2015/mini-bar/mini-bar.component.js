/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// tslint:disable:no-any
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, NgZone, } from '@angular/core';
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
export class G2MiniBarComponent {
    // #endregion
    /**
     * @param {?} el
     * @param {?} ngZone
     */
    constructor(el, ngZone) {
        this.el = el;
        this.ngZone = ngZone;
        // #region fields
        this.delay = 0;
        this.color = '#1890FF';
        this.height = 0;
        this.borderWidth = 5;
        this.padding = [8, 8, 8, 8];
        this.data = [];
        this.yTooltipSuffix = '';
        this.tooltipType = 'default';
    }
    /**
     * @return {?}
     */
    install() {
        const { el, height, padding, yTooltipSuffix, tooltipType } = this;
        /** @type {?} */
        const chart = (this.chart = new G2.Chart({
            container: el.nativeElement,
            forceFit: true,
            height,
            padding,
        }));
        chart.source([], {
            x: {
                type: 'cat',
            },
            y: {
                min: 0,
            },
        });
        chart.legend(false);
        chart.axis(false);
        chart.tooltip({
            type: tooltipType === 'mini' ? 'mini' : null,
            showTitle: false,
            hideMarkders: false,
            crosshairs: false,
            'g2-tooltip': { padding: 4 },
            'g2-tooltip-list-item': { margin: `0px 4px` },
        });
        chart
            .interval()
            .position('x*y')
            .tooltip('x*y', (x, y) => ({ name: x, value: y + yTooltipSuffix }));
        chart.render();
        this.attachChart();
    }
    /**
     * @return {?}
     */
    attachChart() {
        const { chart, height, padding, data, color, borderWidth } = this;
        if (!chart || !data || data.length <= 0)
            return;
        chart
            .get('geoms')[0]
            .size(borderWidth)
            .color(color);
        chart.set('height', height);
        chart.set('padding', padding);
        chart.changeData(data);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.ngZone.runOutsideAngular(() => setTimeout(() => this.install(), this.delay));
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.ngZone.runOutsideAngular(() => this.attachChart());
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.chart) {
            this.ngZone.runOutsideAngular(() => this.chart.destroy());
        }
    }
}
G2MiniBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-mini-bar',
                template: ``,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
G2MiniBarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone }
];
G2MiniBarComponent.propDecorators = {
    delay: [{ type: Input }],
    color: [{ type: Input }],
    height: [{ type: HostBinding, args: ['style.height.px',] }, { type: Input }],
    borderWidth: [{ type: Input }],
    padding: [{ type: Input }],
    data: [{ type: Input }],
    yTooltipSuffix: [{ type: Input }],
    tooltipType: [{ type: Input }]
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
    G2MiniBarComponent.prototype.tooltipType;
    /** @type {?} */
    G2MiniBarComponent.prototype.el;
    /** @type {?} */
    G2MiniBarComponent.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L21pbmktYmFyLyIsInNvdXJjZXMiOlsibWluaS1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sR0FJUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7O0FBSTFDLG1DQUlDOzs7SUFIQywwQkFBTzs7SUFDUCwwQkFBTzs7O0FBU1QsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7O0lBZ0I3QixZQUFvQixFQUFjLEVBQVUsTUFBYztRQUF0QyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTs7UUFYbEMsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUN6QixVQUFLLEdBQUcsU0FBUyxDQUFDO1FBQzZCLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFDM0MsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDL0IsWUFBTyxHQUEyQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9DLFNBQUksR0FBb0IsRUFBRSxDQUFDO1FBQzNCLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGdCQUFXLEdBQXVCLFNBQVMsQ0FBQztJQUlRLENBQUM7Ozs7SUFFdEQsT0FBTztjQUNQLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxHQUFHLElBQUk7O2NBQzNELEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ3ZDLFNBQVMsRUFBRSxFQUFFLENBQUMsYUFBYTtZQUMzQixRQUFRLEVBQUUsSUFB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QUs7c0JBQ0wsS0FBSzttQkFDTCxLQUFLOzZCQUNMLEtBQUs7MEJBQ0wsS0FBSzs7QUFQa0I7SUFBZCxXQUFXLEVBQUU7O2lEQUFXO0FBRXNCO0lBQWQsV0FBVyxFQUFFOztrREFBWTtBQUMzQztJQUFkLFdBQVcsRUFBRTs7dURBQWlCOzs7SUFQeEMsbUNBQW1COztJQUluQixtQ0FBa0M7O0lBQ2xDLG1DQUEyQjs7SUFDM0Isb0NBQW1FOztJQUNuRSx5Q0FBd0M7O0lBQ3hDLHFDQUF3RDs7SUFDeEQsa0NBQW9DOztJQUNwQyw0Q0FBNkI7O0lBQzdCLHlDQUFxRDs7SUFJekMsZ0NBQXNCOztJQUFFLG9DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm5vLWFueVxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmRlY2xhcmUgdmFyIEcyOiBhbnk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRzJNaW5pQmFyRGF0YSB7XG4gIHg6IGFueTtcbiAgeTogYW55O1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLW1pbmktYmFyJyxcbiAgdGVtcGxhdGU6IGBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRzJNaW5pQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgY2hhcnQ6IGFueTtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGRlbGF5ID0gMDtcbiAgQElucHV0KCkgY29sb3IgPSAnIzE4OTBGRic7XG4gIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0LnB4JykgQElucHV0KCkgQElucHV0TnVtYmVyKCkgaGVpZ2h0ID0gMDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgYm9yZGVyV2lkdGggPSA1O1xuICBASW5wdXQoKSBwYWRkaW5nOiBBcnJheTxzdHJpbmcgfCBudW1iZXI+ID0gWzgsIDgsIDgsIDhdO1xuICBASW5wdXQoKSBkYXRhOiBHMk1pbmlCYXJEYXRhW10gPSBbXTtcbiAgQElucHV0KCkgeVRvb2x0aXBTdWZmaXggPSAnJztcbiAgQElucHV0KCkgdG9vbHRpcFR5cGU6ICdtaW5pJyB8ICdkZWZhdWx0JyA9ICdkZWZhdWx0JztcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge31cblxuICBwcml2YXRlIGluc3RhbGwoKSB7XG4gICAgY29uc3QgeyBlbCwgaGVpZ2h0LCBwYWRkaW5nLCB5VG9vbHRpcFN1ZmZpeCwgdG9vbHRpcFR5cGUgfSA9IHRoaXM7XG4gICAgY29uc3QgY2hhcnQgPSAodGhpcy5jaGFydCA9IG5ldyBHMi5DaGFydCh7XG4gICAgICBjb250YWluZXI6IGVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBmb3JjZUZpdDogdHJ1ZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIHBhZGRpbmcsXG4gICAgfSkpO1xuICAgIGNoYXJ0LnNvdXJjZShbXSwge1xuICAgICAgeDoge1xuICAgICAgICB0eXBlOiAnY2F0JyxcbiAgICAgIH0sXG4gICAgICB5OiB7XG4gICAgICAgIG1pbjogMCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY2hhcnQubGVnZW5kKGZhbHNlKTtcbiAgICBjaGFydC5heGlzKGZhbHNlKTtcbiAgICBjaGFydC50b29sdGlwKHtcbiAgICAgIHR5cGU6IHRvb2x0aXBUeXBlID09PSAnbWluaScgPyAnbWluaScgOiBudWxsLFxuICAgICAgc2hvd1RpdGxlOiBmYWxzZSxcbiAgICAgIGhpZGVNYXJrZGVyczogZmFsc2UsXG4gICAgICBjcm9zc2hhaXJzOiBmYWxzZSxcbiAgICAgICdnMi10b29sdGlwJzogeyBwYWRkaW5nOiA0IH0sXG4gICAgICAnZzItdG9vbHRpcC1saXN0LWl0ZW0nOiB7IG1hcmdpbjogYDBweCA0cHhgIH0sXG4gICAgfSk7XG4gICAgY2hhcnRcbiAgICAgIC5pbnRlcnZhbCgpXG4gICAgICAucG9zaXRpb24oJ3gqeScpXG4gICAgICAudG9vbHRpcCgneCp5JywgKHgsIHkpID0+ICh7IG5hbWU6IHgsIHZhbHVlOiB5ICsgeVRvb2x0aXBTdWZmaXggfSkpO1xuXG4gICAgY2hhcnQucmVuZGVyKCk7XG5cbiAgICB0aGlzLmF0dGFjaENoYXJ0KCk7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaENoYXJ0KCkge1xuICAgIGNvbnN0IHsgY2hhcnQsIGhlaWdodCwgcGFkZGluZywgZGF0YSwgY29sb3IsIGJvcmRlcldpZHRoIH0gPSB0aGlzO1xuICAgIGlmICghY2hhcnQgfHwgIWRhdGEgfHwgZGF0YS5sZW5ndGggPD0gMCkgcmV0dXJuO1xuICAgIGNoYXJ0XG4gICAgICAuZ2V0KCdnZW9tcycpWzBdXG4gICAgICAuc2l6ZShib3JkZXJXaWR0aClcbiAgICAgIC5jb2xvcihjb2xvcik7XG4gICAgY2hhcnQuc2V0KCdoZWlnaHQnLCBoZWlnaHQpO1xuICAgIGNoYXJ0LnNldCgncGFkZGluZycsIHBhZGRpbmcpO1xuICAgIGNoYXJ0LmNoYW5nZURhdGEoZGF0YSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpLCB0aGlzLmRlbGF5KSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmF0dGFjaENoYXJ0KCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuY2hhcnQuZGVzdHJveSgpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==