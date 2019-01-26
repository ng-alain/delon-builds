/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// tslint:disable:no-any
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, NgZone, } from '@angular/core';
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
export class G2MiniAreaComponent {
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
     * @return {?}
     */
    install() {
        const { el, fit, height, padding, xAxis, yAxis, yTooltipSuffix, tooltipType, line } = this;
        /** @type {?} */
        const chart = (this.chart = new G2.Chart({
            container: el.nativeElement,
            forceFit: fit,
            height,
            padding,
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
            'g2-tooltip-list-item': { margin: `0px 4px` },
        });
        chart
            .area()
            .position('x*y')
            .tooltip('x*y', (x, y) => ({ name: x, value: y + yTooltipSuffix }))
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
    }
    /**
     * @return {?}
     */
    attachChart() {
        const { chart, line, fit, height, animate, padding, data, color, borderColor, borderWidth, } = this;
        if (!chart || !data || data.length <= 0) {
            return;
        }
        /** @type {?} */
        const geoms = chart.get('geoms');
        geoms.forEach(g => g.color(color));
        if (line) {
            geoms[1].color(borderColor).size(borderWidth);
        }
        chart.set('forceFit', fit);
        chart.set('height', height);
        chart.set('animate', animate);
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
G2MiniAreaComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-mini-area',
                template: ``,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
G2MiniAreaComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone }
];
G2MiniAreaComponent.propDecorators = {
    delay: [{ type: Input }],
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
if (false) {
    /** @type {?} */
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
    /** @type {?} */
    G2MiniAreaComponent.prototype.el;
    /** @type {?} */
    G2MiniAreaComponent.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1hcmVhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC9taW5pLWFyZWEvIiwic291cmNlcyI6WyJtaW5pLWFyZWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sR0FJUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7OztBQUl4RCxvQ0FJQzs7O0lBSEMsMkJBQU87O0lBQ1AsMkJBQU87OztBQVNULE1BQU0sT0FBTyxtQkFBbUI7Ozs7OztJQXNCOUIsWUFBb0IsRUFBYyxFQUFVLE1BQWM7UUFBdEMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7O1FBakJsQyxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLFVBQUssR0FBRyx5QkFBeUIsQ0FBQztRQUNsQyxnQkFBVyxHQUFHLFNBQVMsQ0FBQztRQUNULGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2dCLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDM0MsUUFBRyxHQUFHLElBQUksQ0FBQztRQUNYLFNBQUksR0FBRyxLQUFLLENBQUM7UUFDYixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBRy9CLFlBQU8sR0FBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLFNBQUksR0FBcUIsRUFBRSxDQUFDO1FBQzVCLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGdCQUFXLEdBQXVCLFNBQVMsQ0FBQztJQUlRLENBQUM7Ozs7SUFFdEQsT0FBTztjQUNQLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUs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QUNMLEtBQUs7NkJBQ0wsS0FBSzswQkFDTCxLQUFLOztBQWJrQjtJQUFkLFdBQVcsRUFBRTs7a0RBQVc7QUFHVjtJQUFkLFdBQVcsRUFBRTs7d0RBQWlCO0FBQ2dCO0lBQWQsV0FBVyxFQUFFOzttREFBYTtBQUMzQztJQUFmLFlBQVksRUFBRTs7Z0RBQVk7QUFDWDtJQUFmLFlBQVksRUFBRTs7aURBQWM7QUFDYjtJQUFmLFlBQVksRUFBRTs7b0RBQWdCOzs7SUFYeEMsb0NBQW1COztJQUluQixvQ0FBa0M7O0lBQ2xDLG9DQUEyQzs7SUFDM0MsMENBQWlDOztJQUNqQywwQ0FBd0M7O0lBQ3hDLHFDQUFvRTs7SUFDcEUsa0NBQW9DOztJQUNwQyxtQ0FBc0M7O0lBQ3RDLHNDQUF3Qzs7SUFDeEMsb0NBQW9COztJQUNwQixvQ0FBb0I7O0lBQ3BCLHNDQUEwQzs7SUFDMUMsbUNBQXFDOztJQUNyQyw2Q0FBNkI7O0lBQzdCLDBDQUFxRDs7SUFJekMsaUNBQXNCOztJQUFFLHFDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm5vLWFueVxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuZGVjbGFyZSB2YXIgRzI6IGFueTtcblxuZXhwb3J0IGludGVyZmFjZSBHMk1pbmlBcmVhRGF0YSB7XG4gIHg6IGFueTtcbiAgeTogYW55O1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLW1pbmktYXJlYScsXG4gIHRlbXBsYXRlOiBgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEcyTWluaUFyZWFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBjaGFydDogYW55O1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXkgPSAwO1xuICBASW5wdXQoKSBjb2xvciA9ICdyZ2JhKDI0LCAxNDQsIDI1NSwgMC4yKSc7XG4gIEBJbnB1dCgpIGJvcmRlckNvbG9yID0gJyMxODkwRkYnO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBib3JkZXJXaWR0aCA9IDI7XG4gIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0LnB4JykgQElucHV0KCkgQElucHV0TnVtYmVyKCkgaGVpZ2h0ID0gNTY7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBmaXQgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbGluZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYW5pbWF0ZSA9IHRydWU7XG4gIEBJbnB1dCgpIHhBeGlzOiBhbnk7XG4gIEBJbnB1dCgpIHlBeGlzOiBhbnk7XG4gIEBJbnB1dCgpIHBhZGRpbmc6IG51bWJlcltdID0gWzgsIDgsIDgsIDhdO1xuICBASW5wdXQoKSBkYXRhOiBHMk1pbmlBcmVhRGF0YVtdID0gW107XG4gIEBJbnB1dCgpIHlUb29sdGlwU3VmZml4ID0gJyc7XG4gIEBJbnB1dCgpIHRvb2x0aXBUeXBlOiAnbWluaScgfCAnZGVmYXVsdCcgPSAnZGVmYXVsdCc7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHt9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsKCkge1xuICAgIGNvbnN0IHsgZWwsIGZpdCwgaGVpZ2h0LCBwYWRkaW5nLCB4QXhpcywgeUF4aXMsIHlUb29sdGlwU3VmZml4LCB0b29sdGlwVHlwZSwgbGluZSB9ID0gdGhpcztcbiAgICBjb25zdCBjaGFydCA9ICh0aGlzLmNoYXJ0ID0gbmV3IEcyLkNoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIGZvcmNlRml0OiBmaXQsXG4gICAgICBoZWlnaHQsXG4gICAgICBwYWRkaW5nLFxuICAgIH0pKTtcblxuICAgIGlmICgheEF4aXMgJiYgIXlBeGlzKSB7XG4gICAgICBjaGFydC5heGlzKGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAoeEF4aXMpIHtcbiAgICAgIGNoYXJ0LmF4aXMoJ3gnLCB4QXhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoYXJ0LmF4aXMoJ3gnLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKHlBeGlzKSB7XG4gICAgICBjaGFydC5heGlzKCd5JywgeUF4aXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGFydC5heGlzKCd5JywgZmFsc2UpO1xuICAgIH1cblxuICAgIGNoYXJ0LmxlZ2VuZChmYWxzZSk7XG4gICAgY2hhcnQudG9vbHRpcCh7XG4gICAgICB0eXBlOiB0b29sdGlwVHlwZSA9PT0gJ21pbmknID8gJ21pbmknIDogbnVsbCxcbiAgICAgIHNob3dUaXRsZTogZmFsc2UsXG4gICAgICBoaWRlTWFya2RlcnM6IGZhbHNlLFxuICAgICAgJ2cyLXRvb2x0aXAnOiB7IHBhZGRpbmc6IDQgfSxcbiAgICAgICdnMi10b29sdGlwLWxpc3QtaXRlbSc6IHsgbWFyZ2luOiBgMHB4IDRweGAgfSxcbiAgICB9KTtcblxuICAgIGNoYXJ0XG4gICAgICAuYXJlYSgpXG4gICAgICAucG9zaXRpb24oJ3gqeScpXG4gICAgICAudG9vbHRpcCgneCp5JywgKHgsIHkpID0+ICh7IG5hbWU6IHgsIHZhbHVlOiB5ICsgeVRvb2x0aXBTdWZmaXggfSkpXG4gICAgICAuc2hhcGUoJ3Ntb290aCcpXG4gICAgICAub3BhY2l0eSgxKTtcblxuICAgIGlmIChsaW5lKSB7XG4gICAgICBjaGFydFxuICAgICAgICAubGluZSgpXG4gICAgICAgIC5wb3NpdGlvbigneCp5JylcbiAgICAgICAgLnNoYXBlKCdzbW9vdGgnKVxuICAgICAgICAub3BhY2l0eSgxKVxuICAgICAgICAudG9vbHRpcChmYWxzZSk7XG4gICAgfVxuXG4gICAgY2hhcnQucmVuZGVyKCk7XG5cbiAgICB0aGlzLmF0dGFjaENoYXJ0KCk7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaENoYXJ0KCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoYXJ0LFxuICAgICAgbGluZSxcbiAgICAgIGZpdCxcbiAgICAgIGhlaWdodCxcbiAgICAgIGFuaW1hdGUsXG4gICAgICBwYWRkaW5nLFxuICAgICAgZGF0YSxcbiAgICAgIGNvbG9yLFxuICAgICAgYm9yZGVyQ29sb3IsXG4gICAgICBib3JkZXJXaWR0aCxcbiAgICB9ID0gdGhpcztcbiAgICBpZiAoIWNoYXJ0IHx8ICFkYXRhIHx8IGRhdGEubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBnZW9tcyA9IGNoYXJ0LmdldCgnZ2VvbXMnKTtcbiAgICBnZW9tcy5mb3JFYWNoKGcgPT4gZy5jb2xvcihjb2xvcikpO1xuICAgIGlmIChsaW5lKSB7XG4gICAgICBnZW9tc1sxXS5jb2xvcihib3JkZXJDb2xvcikuc2l6ZShib3JkZXJXaWR0aCk7XG4gICAgfVxuXG4gICAgY2hhcnQuc2V0KCdmb3JjZUZpdCcsIGZpdCk7XG4gICAgY2hhcnQuc2V0KCdoZWlnaHQnLCBoZWlnaHQpO1xuICAgIGNoYXJ0LnNldCgnYW5pbWF0ZScsIGFuaW1hdGUpO1xuICAgIGNoYXJ0LnNldCgncGFkZGluZycsIHBhZGRpbmcpO1xuXG4gICAgY2hhcnQuY2hhbmdlRGF0YShkYXRhKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnN0YWxsKCksIHRoaXMuZGVsYXkpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuYXR0YWNoQ2hhcnQoKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jaGFydCkge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5jaGFydC5kZXN0cm95KCkpO1xuICAgIH1cbiAgfVxufVxuIl19