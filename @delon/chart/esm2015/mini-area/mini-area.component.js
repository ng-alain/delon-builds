/**
 * @fileoverview added by tsickle
 * Generated from: mini-area.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { G2BaseComponent } from '@delon/chart/core';
import { InputBoolean, InputNumber } from '@delon/util/other';
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
/**
 * @record
 */
export function G2MiniAreaClickItem() { }
if (false) {
    /** @type {?} */
    G2MiniAreaClickItem.prototype.item;
    /** @type {?} */
    G2MiniAreaClickItem.prototype.ev;
}
export class G2MiniAreaComponent extends G2BaseComponent {
    constructor() {
        super(...arguments);
        // #region fields
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
        this.clickItem = new EventEmitter();
    }
    // #endregion
    /**
     * @return {?}
     */
    install() {
        const { el, fit, height, padding, xAxis, yAxis, yTooltipSuffix, tooltipType, line, theme } = this;
        /** @type {?} */
        const chart = (this._chart = new ((/** @type {?} */ (window))).G2.Chart({
            container: el.nativeElement,
            autoFit: fit,
            height,
            padding,
            theme,
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
        /** @type {?} */
        const tooltipOption = {
            showTitle: false,
            showMarkers: true,
            enterable: true,
            domStyles: {
                'g2-tooltip': { padding: '0px' },
                'g2-tooltip-title': { display: 'none' },
                'g2-tooltip-list-item': { margin: '4px' },
            },
        };
        if (tooltipType === 'mini') {
            tooltipOption.position = 'top';
            (/** @type {?} */ (tooltipOption.domStyles))['g2-tooltip'] = { padding: '0px', backgroundColor: 'transparent', boxShadow: 'none' };
            tooltipOption.itemTpl = `<li>{value}</li>`;
            tooltipOption.offset = 0;
        }
        chart.tooltip(tooltipOption);
        chart
            .area()
            .position('x*y')
            .tooltip('x*y', (/**
         * @param {?} x
         * @param {?} y
         * @return {?}
         */
        (x, y) => ({ name: x, value: y + yTooltipSuffix })))
            .shape('smooth');
        if (line) {
            chart.line().position('x*y').shape('smooth').tooltip(false);
        }
        chart.on(`plot:click`, (/**
         * @param {?} ev
         * @return {?}
         */
        (ev) => {
            /** @type {?} */
            const records = this._chart.getSnapRecords({ x: ev.x, y: ev.y });
            this.ngZone.run((/**
             * @return {?}
             */
            () => this.clickItem.emit({ item: records[0]._origin, ev })));
        }));
        chart.render();
        this.attachChart();
    }
    /**
     * @return {?}
     */
    attachChart() {
        const { _chart, line, fit, height, animate, padding, data, color, borderColor, borderWidth } = this;
        if (!_chart || !data || data.length <= 0) {
            return;
        }
        /** @type {?} */
        const geoms = _chart.geometries;
        geoms.forEach((/**
         * @param {?} g
         * @return {?}
         */
        g => g.color(color)));
        if (line) {
            geoms[1].color(borderColor).size(borderWidth);
        }
        _chart.autoFit = fit;
        _chart.height = height;
        _chart.animate(animate);
        _chart.padding = padding;
        _chart.changeData(data);
        _chart.render();
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
G2MiniAreaComponent.propDecorators = {
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
    tooltipType: [{ type: Input }],
    clickItem: [{ type: Output }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2MiniAreaComponent.prototype, "borderWidth", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2MiniAreaComponent.prototype, "height", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2MiniAreaComponent.prototype, "fit", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2MiniAreaComponent.prototype, "line", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2MiniAreaComponent.prototype, "animate", void 0);
if (false) {
    /** @type {?} */
    G2MiniAreaComponent.ngAcceptInputType_borderWidth;
    /** @type {?} */
    G2MiniAreaComponent.ngAcceptInputType_height;
    /** @type {?} */
    G2MiniAreaComponent.ngAcceptInputType_fit;
    /** @type {?} */
    G2MiniAreaComponent.ngAcceptInputType_line;
    /** @type {?} */
    G2MiniAreaComponent.ngAcceptInputType_animate;
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
    G2MiniAreaComponent.prototype.clickItem;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1hcmVhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NoYXJ0L21pbmktYXJlYS9taW5pLWFyZWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkgsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBRXpGLG9DQUlDOzs7SUFIQywyQkFBTzs7SUFDUCwyQkFBTzs7Ozs7O0FBSVQseUNBR0M7OztJQUZDLG1DQUFxQjs7SUFDckIsaUNBQVU7O0FBY1osTUFBTSxPQUFPLG1CQUFvQixTQUFRLGVBQWU7SUFYeEQ7OztRQW9CVyxVQUFLLEdBQUcseUJBQXlCLENBQUM7UUFDbEMsZ0JBQVcsR0FBRyxTQUFTLENBQUM7UUFDVCxnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1gsUUFBRyxHQUFHLElBQUksQ0FBQztRQUNYLFNBQUksR0FBRyxLQUFLLENBQUM7UUFDYixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBRy9CLFlBQU8sR0FBK0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuRCxTQUFJLEdBQXFCLEVBQUUsQ0FBQztRQUM1QixtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQixnQkFBVyxHQUF1QixTQUFTLENBQUM7UUFDM0MsY0FBUyxHQUFHLElBQUksWUFBWSxFQUF1QixDQUFDO0lBeUZoRSxDQUFDOzs7OztJQXJGQyxPQUFPO2NBQ0MsRUFBRSxFQUFFLEVBQUUsR0FB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LFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsRUFBRTtnQkFDWixJQUFJLEVBQUU7b0JBQ0osbUJBQW1CLEVBQUUsUUFBUTtpQkFDOUI7Z0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7b0JBVUUsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7cUJBQ0wsS0FBSztrQkFDTCxLQUFLO21CQUNMLEtBQUs7c0JBQ0wsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7c0JBQ0wsS0FBSzttQkFDTCxLQUFLOzZCQUNMLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxNQUFNOztBQVhpQjtJQUFkLFdBQVcsRUFBRTs7d0RBQWlCO0FBQ2hCO0lBQWQsV0FBVyxFQUFFOzttREFBYTtBQUNYO0lBQWYsWUFBWSxFQUFFOztnREFBWTtBQUNYO0lBQWYsWUFBWSxFQUFFOztpREFBYztBQUNiO0lBQWYsWUFBWSxFQUFFOztvREFBZ0I7OztJQWR4QyxrREFBa0Q7O0lBQ2xELDZDQUE2Qzs7SUFDN0MsMENBQTJDOztJQUMzQywyQ0FBNEM7O0lBQzVDLDhDQUErQzs7SUFJL0Msb0NBQTJDOztJQUMzQywwQ0FBaUM7O0lBQ2pDLDBDQUF3Qzs7SUFDeEMscUNBQW9DOztJQUNwQyxrQ0FBb0M7O0lBQ3BDLG1DQUFzQzs7SUFDdEMsc0NBQXdDOztJQUN4QyxvQ0FBb0I7O0lBQ3BCLG9DQUFvQjs7SUFDcEIsc0NBQTREOztJQUM1RCxtQ0FBcUM7O0lBQ3JDLDZDQUE2Qjs7SUFDN0IsMENBQXFEOztJQUNyRCx3Q0FBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydCwgRXZlbnQsIFR5cGVzIH0gZnJvbSAnQGFudHYvZzInO1xuaW1wb3J0IHsgRzJCYXNlQ29tcG9uZW50IH0gZnJvbSAnQGRlbG9uL2NoYXJ0L2NvcmUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCB9IGZyb20gJ0BkZWxvbi91dGlsL290aGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBHMk1pbmlBcmVhRGF0YSB7XG4gIHg6IGFueTtcbiAgeTogYW55O1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRzJNaW5pQXJlYUNsaWNrSXRlbSB7XG4gIGl0ZW06IEcyTWluaUFyZWFEYXRhO1xuICBldjogRXZlbnQ7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLW1pbmktYXJlYScsXG4gIGV4cG9ydEFzOiAnZzJNaW5pQXJlYScsXG4gIHRlbXBsYXRlOiBgYCxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUuaGVpZ2h0LnB4XSc6ICdoZWlnaHQnLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEcyTWluaUFyZWFDb21wb25lbnQgZXh0ZW5kcyBHMkJhc2VDb21wb25lbnQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYm9yZGVyV2lkdGg6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaGVpZ2h0OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2ZpdDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbGluZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYW5pbWF0ZTogQm9vbGVhbklucHV0O1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgY29sb3IgPSAncmdiYSgyNCwgMTQ0LCAyNTUsIDAuMiknO1xuICBASW5wdXQoKSBib3JkZXJDb2xvciA9ICcjMTg5MEZGJztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgYm9yZGVyV2lkdGggPSAyO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQgPSA1NjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGZpdCA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsaW5lID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhbmltYXRlID0gdHJ1ZTtcbiAgQElucHV0KCkgeEF4aXM6IGFueTtcbiAgQElucHV0KCkgeUF4aXM6IGFueTtcbiAgQElucHV0KCkgcGFkZGluZzogbnVtYmVyIHwgbnVtYmVyW10gfCAnYXV0bycgPSBbOCwgOCwgOCwgOF07XG4gIEBJbnB1dCgpIGRhdGE6IEcyTWluaUFyZWFEYXRhW10gPSBbXTtcbiAgQElucHV0KCkgeVRvb2x0aXBTdWZmaXggPSAnJztcbiAgQElucHV0KCkgdG9vbHRpcFR5cGU6ICdtaW5pJyB8ICdkZWZhdWx0JyA9ICdkZWZhdWx0JztcbiAgQE91dHB1dCgpIGNsaWNrSXRlbSA9IG5ldyBFdmVudEVtaXR0ZXI8RzJNaW5pQXJlYUNsaWNrSXRlbT4oKTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgaW5zdGFsbCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGVsLCBmaXQsIGhlaWdodCwgcGFkZGluZywgeEF4aXMsIHlBeGlzLCB5VG9vbHRpcFN1ZmZpeCwgdG9vbHRpcFR5cGUsIGxpbmUsIHRoZW1lIH0gPSB0aGlzO1xuICAgIGNvbnN0IGNoYXJ0OiBDaGFydCA9ICh0aGlzLl9jaGFydCA9IG5ldyAod2luZG93IGFzIGFueSkuRzIuQ2hhcnQoe1xuICAgICAgY29udGFpbmVyOiBlbC5uYXRpdmVFbGVtZW50LFxuICAgICAgYXV0b0ZpdDogZml0LFxuICAgICAgaGVpZ2h0LFxuICAgICAgcGFkZGluZyxcbiAgICAgIHRoZW1lLFxuICAgIH0pKTtcblxuICAgIGlmICgheEF4aXMgJiYgIXlBeGlzKSB7XG4gICAgICBjaGFydC5heGlzKGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAoeEF4aXMpIHtcbiAgICAgIGNoYXJ0LmF4aXMoJ3gnLCB4QXhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoYXJ0LmF4aXMoJ3gnLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKHlBeGlzKSB7XG4gICAgICBjaGFydC5heGlzKCd5JywgeUF4aXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGFydC5heGlzKCd5JywgZmFsc2UpO1xuICAgIH1cblxuICAgIGNoYXJ0LmxlZ2VuZChmYWxzZSk7XG4gICAgY29uc3QgdG9vbHRpcE9wdGlvbjogVHlwZXMuVG9vbHRpcE9wdGlvbiA9IHtcbiAgICAgIHNob3dUaXRsZTogZmFsc2UsXG4gICAgICBzaG93TWFya2VyczogdHJ1ZSxcbiAgICAgIGVudGVyYWJsZTogdHJ1ZSxcbiAgICAgIGRvbVN0eWxlczoge1xuICAgICAgICAnZzItdG9vbHRpcCc6IHsgcGFkZGluZzogJzBweCcgfSxcbiAgICAgICAgJ2cyLXRvb2x0aXAtdGl0bGUnOiB7IGRpc3BsYXk6ICdub25lJyB9LFxuICAgICAgICAnZzItdG9vbHRpcC1saXN0LWl0ZW0nOiB7IG1hcmdpbjogJzRweCcgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICBpZiAodG9vbHRpcFR5cGUgPT09ICdtaW5pJykge1xuICAgICAgdG9vbHRpcE9wdGlvbi5wb3NpdGlvbiA9ICd0b3AnO1xuICAgICAgdG9vbHRpcE9wdGlvbi5kb21TdHlsZXMhWydnMi10b29sdGlwJ10gPSB7IHBhZGRpbmc6ICcwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsIGJveFNoYWRvdzogJ25vbmUnIH07XG4gICAgICB0b29sdGlwT3B0aW9uLml0ZW1UcGwgPSBgPGxpPnt2YWx1ZX08L2xpPmA7XG4gICAgICB0b29sdGlwT3B0aW9uLm9mZnNldCA9IDA7XG4gICAgfVxuICAgIGNoYXJ0LnRvb2x0aXAodG9vbHRpcE9wdGlvbik7XG5cbiAgICBjaGFydFxuICAgICAgLmFyZWEoKVxuICAgICAgLnBvc2l0aW9uKCd4KnknKVxuICAgICAgLnRvb2x0aXAoJ3gqeScsICh4LCB5KSA9PiAoeyBuYW1lOiB4LCB2YWx1ZTogeSArIHlUb29sdGlwU3VmZml4IH0pKVxuICAgICAgLnNoYXBlKCdzbW9vdGgnKTtcblxuICAgIGlmIChsaW5lKSB7XG4gICAgICBjaGFydC5saW5lKCkucG9zaXRpb24oJ3gqeScpLnNoYXBlKCdzbW9vdGgnKS50b29sdGlwKGZhbHNlKTtcbiAgICB9XG5cbiAgICBjaGFydC5vbihgcGxvdDpjbGlja2AsIChldjogRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHJlY29yZHMgPSB0aGlzLl9jaGFydC5nZXRTbmFwUmVjb3Jkcyh7IHg6IGV2LngsIHk6IGV2LnkgfSk7XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5jbGlja0l0ZW0uZW1pdCh7IGl0ZW06IHJlY29yZHNbMF0uX29yaWdpbiwgZXYgfSkpO1xuICAgIH0pO1xuXG4gICAgY2hhcnQucmVuZGVyKCk7XG5cbiAgICB0aGlzLmF0dGFjaENoYXJ0KCk7XG4gIH1cblxuICBhdHRhY2hDaGFydCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IF9jaGFydCwgbGluZSwgZml0LCBoZWlnaHQsIGFuaW1hdGUsIHBhZGRpbmcsIGRhdGEsIGNvbG9yLCBib3JkZXJDb2xvciwgYm9yZGVyV2lkdGggfSA9IHRoaXM7XG4gICAgaWYgKCFfY2hhcnQgfHwgIWRhdGEgfHwgZGF0YS5sZW5ndGggPD0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGdlb21zID0gX2NoYXJ0Lmdlb21ldHJpZXM7XG4gICAgZ2VvbXMuZm9yRWFjaChnID0+IGcuY29sb3IoY29sb3IpKTtcbiAgICBpZiAobGluZSkge1xuICAgICAgZ2VvbXNbMV0uY29sb3IoYm9yZGVyQ29sb3IpLnNpemUoYm9yZGVyV2lkdGgpO1xuICAgIH1cblxuICAgIF9jaGFydC5hdXRvRml0ID0gZml0O1xuICAgIF9jaGFydC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgX2NoYXJ0LmFuaW1hdGUoYW5pbWF0ZSk7XG4gICAgX2NoYXJ0LnBhZGRpbmcgPSBwYWRkaW5nO1xuXG4gICAgX2NoYXJ0LmNoYW5nZURhdGEoZGF0YSk7XG4gICAgX2NoYXJ0LnJlbmRlcigpO1xuICB9XG59XG4iXX0=