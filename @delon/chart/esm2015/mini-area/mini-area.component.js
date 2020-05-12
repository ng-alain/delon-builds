/**
 * @fileoverview added by tsickle
 * Generated from: mini-area.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, ViewEncapsulation, } from '@angular/core';
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
     * @private
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
            .tooltip('x*y', (/**
         * @param {?} x
         * @param {?} y
         * @return {?}
         */
        (x, y) => ({ name: x, value: y + yTooltipSuffix })))
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
     * @private
     * @return {?}
     */
    attachChart() {
        const { chart, line, fit, height, animate, padding, data, color, borderColor, borderWidth } = this;
        if (!chart || !data || data.length <= 0) {
            return;
        }
        /** @type {?} */
        const geoms = chart.get('geoms');
        geoms.forEach((/**
         * @param {?} g
         * @return {?}
         */
        g => g.color(color)));
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
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => setTimeout((/**
         * @return {?}
         */
        () => this.install()), this.delay)));
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => this.attachChart()));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.chart) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => this.chart.destroy()));
        }
    }
}
G2MiniAreaComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-mini-area',
                exportAs: 'g2MiniArea',
                template: ``,
                host: {
                    '[style.height.px]': 'height',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1hcmVhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC9taW5pLWFyZWEvIiwic291cmNlcyI6WyJtaW5pLWFyZWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUlOLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7OztBQUl4RCxvQ0FJQzs7O0lBSEMsMkJBQU87O0lBQ1AsMkJBQU87OztBQWVULE1BQU0sT0FBTyxtQkFBbUI7Ozs7OztJQXNCOUIsWUFBb0IsRUFBYyxFQUFVLE1BQWM7UUFBdEMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7O1FBakJsQyxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLFVBQUssR0FBRyx5QkFBeUIsQ0FBQztRQUNsQyxnQkFBVyxHQUFHLFNBQVMsQ0FBQztRQUNULGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWCxRQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ1gsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNiLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFHL0IsWUFBTyxHQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakMsU0FBSSxHQUFxQixFQUFFLENBQUM7UUFDNUIsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDcEIsZ0JBQVcsR0FBdUIsU0FBUyxDQUFDO0lBSVEsQ0FBQzs7Ozs7SUFFdEQsT0FBTztjQUNQLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVB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QkFnQ0wsS0FBSztvQkFDTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSztxQkFDTCxLQUFLO2tCQUNMLEtBQUs7bUJBQ0wsS0FBSztzQkFDTCxLQUFLO29CQUNMLEtBQUs7b0JBQ0wsS0FBSztzQkFDTCxLQUFLO21CQUNMLEtBQUs7NkJBQ0wsS0FBSzswQkFDTCxLQUFLOztBQWJrQjtJQUFkLFdBQVcsRUFBRTs7a0RBQVc7QUFHVjtJQUFkLFdBQVcsRUFBRTs7d0RBQWlCO0FBQ2hCO0lBQWQsV0FBVyxFQUFFOzttREFBYTtBQUNYO0lBQWYsWUFBWSxFQUFFOztnREFBWTtBQUNYO0lBQWYsWUFBWSxFQUFFOztpREFBYztBQUNiO0lBQWYsWUFBWSxFQUFFOztvREFBZ0I7Ozs7OztJQVh4QyxvQ0FBbUI7O0lBSW5CLG9DQUFrQzs7SUFDbEMsb0NBQTJDOztJQUMzQywwQ0FBaUM7O0lBQ2pDLDBDQUF3Qzs7SUFDeEMscUNBQW9DOztJQUNwQyxrQ0FBb0M7O0lBQ3BDLG1DQUFzQzs7SUFDdEMsc0NBQXdDOztJQUN4QyxvQ0FBb0I7O0lBQ3BCLG9DQUFvQjs7SUFDcEIsc0NBQTBDOztJQUMxQyxtQ0FBcUM7O0lBQ3JDLDZDQUE2Qjs7SUFDN0IsMENBQXFEOzs7OztJQUl6QyxpQ0FBc0I7Ozs7O0lBQUUscUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuZGVjbGFyZSB2YXIgRzI6IGFueTtcblxuZXhwb3J0IGludGVyZmFjZSBHMk1pbmlBcmVhRGF0YSB7XG4gIHg6IGFueTtcbiAgeTogYW55O1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLW1pbmktYXJlYScsXG4gIGV4cG9ydEFzOiAnZzJNaW5pQXJlYScsXG4gIHRlbXBsYXRlOiBgYCxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUuaGVpZ2h0LnB4XSc6ICdoZWlnaHQnLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEcyTWluaUFyZWFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBjaGFydDogYW55O1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXkgPSAwO1xuICBASW5wdXQoKSBjb2xvciA9ICdyZ2JhKDI0LCAxNDQsIDI1NSwgMC4yKSc7XG4gIEBJbnB1dCgpIGJvcmRlckNvbG9yID0gJyMxODkwRkYnO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBib3JkZXJXaWR0aCA9IDI7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGhlaWdodCA9IDU2O1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZml0ID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxpbmUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGFuaW1hdGUgPSB0cnVlO1xuICBASW5wdXQoKSB4QXhpczogYW55O1xuICBASW5wdXQoKSB5QXhpczogYW55O1xuICBASW5wdXQoKSBwYWRkaW5nOiBudW1iZXJbXSA9IFs4LCA4LCA4LCA4XTtcbiAgQElucHV0KCkgZGF0YTogRzJNaW5pQXJlYURhdGFbXSA9IFtdO1xuICBASW5wdXQoKSB5VG9vbHRpcFN1ZmZpeCA9ICcnO1xuICBASW5wdXQoKSB0b29sdGlwVHlwZTogJ21pbmknIHwgJ2RlZmF1bHQnID0gJ2RlZmF1bHQnO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7fVxuXG4gIHByaXZhdGUgaW5zdGFsbCgpIHtcbiAgICBjb25zdCB7IGVsLCBmaXQsIGhlaWdodCwgcGFkZGluZywgeEF4aXMsIHlBeGlzLCB5VG9vbHRpcFN1ZmZpeCwgdG9vbHRpcFR5cGUsIGxpbmUgfSA9IHRoaXM7XG4gICAgY29uc3QgY2hhcnQgPSAodGhpcy5jaGFydCA9IG5ldyBHMi5DaGFydCh7XG4gICAgICBjb250YWluZXI6IGVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBmb3JjZUZpdDogZml0LFxuICAgICAgaGVpZ2h0LFxuICAgICAgcGFkZGluZyxcbiAgICB9KSk7XG5cbiAgICBpZiAoIXhBeGlzICYmICF5QXhpcykge1xuICAgICAgY2hhcnQuYXhpcyhmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKHhBeGlzKSB7XG4gICAgICBjaGFydC5heGlzKCd4JywgeEF4aXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGFydC5heGlzKCd4JywgZmFsc2UpO1xuICAgIH1cblxuICAgIGlmICh5QXhpcykge1xuICAgICAgY2hhcnQuYXhpcygneScsIHlBeGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hhcnQuYXhpcygneScsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBjaGFydC5sZWdlbmQoZmFsc2UpO1xuICAgIGNoYXJ0LnRvb2x0aXAoe1xuICAgICAgdHlwZTogdG9vbHRpcFR5cGUgPT09ICdtaW5pJyA/ICdtaW5pJyA6IG51bGwsXG4gICAgICBzaG93VGl0bGU6IGZhbHNlLFxuICAgICAgaGlkZU1hcmtkZXJzOiBmYWxzZSxcbiAgICAgICdnMi10b29sdGlwJzogeyBwYWRkaW5nOiA0IH0sXG4gICAgICAnZzItdG9vbHRpcC1saXN0LWl0ZW0nOiB7IG1hcmdpbjogYDBweCA0cHhgIH0sXG4gICAgfSk7XG5cbiAgICBjaGFydFxuICAgICAgLmFyZWEoKVxuICAgICAgLnBvc2l0aW9uKCd4KnknKVxuICAgICAgLnRvb2x0aXAoJ3gqeScsICh4LCB5KSA9PiAoeyBuYW1lOiB4LCB2YWx1ZTogeSArIHlUb29sdGlwU3VmZml4IH0pKVxuICAgICAgLnNoYXBlKCdzbW9vdGgnKVxuICAgICAgLm9wYWNpdHkoMSk7XG5cbiAgICBpZiAobGluZSkge1xuICAgICAgY2hhcnRcbiAgICAgICAgLmxpbmUoKVxuICAgICAgICAucG9zaXRpb24oJ3gqeScpXG4gICAgICAgIC5zaGFwZSgnc21vb3RoJylcbiAgICAgICAgLm9wYWNpdHkoMSlcbiAgICAgICAgLnRvb2x0aXAoZmFsc2UpO1xuICAgIH1cblxuICAgIGNoYXJ0LnJlbmRlcigpO1xuXG4gICAgdGhpcy5hdHRhY2hDaGFydCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hDaGFydCgpIHtcbiAgICBjb25zdCB7IGNoYXJ0LCBsaW5lLCBmaXQsIGhlaWdodCwgYW5pbWF0ZSwgcGFkZGluZywgZGF0YSwgY29sb3IsIGJvcmRlckNvbG9yLCBib3JkZXJXaWR0aCB9ID0gdGhpcztcbiAgICBpZiAoIWNoYXJ0IHx8ICFkYXRhIHx8IGRhdGEubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBnZW9tcyA9IGNoYXJ0LmdldCgnZ2VvbXMnKTtcbiAgICBnZW9tcy5mb3JFYWNoKGcgPT4gZy5jb2xvcihjb2xvcikpO1xuICAgIGlmIChsaW5lKSB7XG4gICAgICBnZW9tc1sxXS5jb2xvcihib3JkZXJDb2xvcikuc2l6ZShib3JkZXJXaWR0aCk7XG4gICAgfVxuXG4gICAgY2hhcnQuc2V0KCdmb3JjZUZpdCcsIGZpdCk7XG4gICAgY2hhcnQuc2V0KCdoZWlnaHQnLCBoZWlnaHQpO1xuICAgIGNoYXJ0LnNldCgnYW5pbWF0ZScsIGFuaW1hdGUpO1xuICAgIGNoYXJ0LnNldCgncGFkZGluZycsIHBhZGRpbmcpO1xuXG4gICAgY2hhcnQuY2hhbmdlRGF0YShkYXRhKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnN0YWxsKCksIHRoaXMuZGVsYXkpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuYXR0YWNoQ2hhcnQoKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jaGFydCkge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5jaGFydC5kZXN0cm95KCkpO1xuICAgIH1cbiAgfVxufVxuIl19