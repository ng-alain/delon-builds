/**
 * @fileoverview added by tsickle
 * Generated from: single-bar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { G2BaseComponent } from '@delon/chart/core';
import { InputBoolean, InputNumber } from '@delon/util';
export class G2SingleBarComponent extends G2BaseComponent {
    constructor() {
        super(...arguments);
        // #region fields
        this.plusColor = '#40a9ff';
        this.minusColor = '#ff4d4f';
        this.height = 60;
        this.barSize = 30;
        this.min = 0;
        this.max = 100;
        this.value = 0;
        this.line = false;
        this.padding = 0;
        this.textStyle = { fontSize: 12, color: '#595959' };
    }
    // #endregion
    /**
     * @return {?}
     */
    install() {
        const { el, height, padding, textStyle, line, format, theme } = this;
        /** @type {?} */
        const chart = (this._chart = new ((/** @type {?} */ (window))).G2.Chart({
            container: el.nativeElement,
            autoFit: true,
            height,
            padding,
            theme,
        }));
        chart.legend(false);
        chart.axis(false);
        chart.tooltip(false);
        chart.coordinate().transpose();
        chart
            .interval()
            .position('1*value')
            .label('value', (/**
         * @return {?}
         */
        () => ({
            formatter: format,
            style: Object.assign({}, textStyle),
        })));
        if (line) {
            chart.annotation().line({
                start: ['50%', '0%'],
                end: ['50%', '100%'],
                style: {
                    stroke: '#e8e8e8',
                    lineDash: [0, 0],
                },
            });
        }
        chart.render();
        this.attachChart();
    }
    /**
     * @return {?}
     */
    attachChart() {
        const { _chart, height, padding, value, min, max, plusColor, minusColor, barSize } = this;
        if (!_chart)
            return;
        _chart.scale({ value: { max, min } });
        _chart.height = height;
        _chart.padding = padding;
        _chart.geometries[0].color('value', (/**
         * @param {?} val
         * @return {?}
         */
        (val) => (val > 0 ? plusColor : minusColor))).size(barSize);
        _chart.changeData([{ value }]);
        _chart.render();
    }
}
G2SingleBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-single-bar',
                exportAs: 'g2SingleBar',
                template: ``,
                host: {
                    '[style.height.px]': 'height',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
G2SingleBarComponent.propDecorators = {
    plusColor: [{ type: Input }],
    minusColor: [{ type: Input }],
    height: [{ type: Input }],
    barSize: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    value: [{ type: Input }],
    line: [{ type: Input }],
    format: [{ type: Input }],
    padding: [{ type: Input }],
    textStyle: [{ type: Input }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2SingleBarComponent.prototype, "height", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2SingleBarComponent.prototype, "barSize", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2SingleBarComponent.prototype, "min", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2SingleBarComponent.prototype, "max", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2SingleBarComponent.prototype, "value", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2SingleBarComponent.prototype, "line", void 0);
if (false) {
    /** @type {?} */
    G2SingleBarComponent.ngAcceptInputType_height;
    /** @type {?} */
    G2SingleBarComponent.ngAcceptInputType_barSize;
    /** @type {?} */
    G2SingleBarComponent.ngAcceptInputType_min;
    /** @type {?} */
    G2SingleBarComponent.ngAcceptInputType_max;
    /** @type {?} */
    G2SingleBarComponent.ngAcceptInputType_value;
    /** @type {?} */
    G2SingleBarComponent.ngAcceptInputType_line;
    /** @type {?} */
    G2SingleBarComponent.prototype.plusColor;
    /** @type {?} */
    G2SingleBarComponent.prototype.minusColor;
    /** @type {?} */
    G2SingleBarComponent.prototype.height;
    /** @type {?} */
    G2SingleBarComponent.prototype.barSize;
    /** @type {?} */
    G2SingleBarComponent.prototype.min;
    /** @type {?} */
    G2SingleBarComponent.prototype.max;
    /** @type {?} */
    G2SingleBarComponent.prototype.value;
    /** @type {?} */
    G2SingleBarComponent.prototype.line;
    /** @type {?} */
    G2SingleBarComponent.prototype.format;
    /** @type {?} */
    G2SingleBarComponent.prototype.padding;
    /** @type {?} */
    G2SingleBarComponent.prototype.textStyle;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jaGFydC9zaW5nbGUtYmFyL3NpbmdsZS1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQWdCLFlBQVksRUFBRSxXQUFXLEVBQWUsTUFBTSxhQUFhLENBQUM7QUFhbkYsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGVBQWU7SUFYekQ7OztRQXFCVyxjQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLGVBQVUsR0FBRyxTQUFTLENBQUM7UUFDUixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLFFBQUcsR0FBRyxDQUFDLENBQUM7UUFDUixRQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ1YsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNULFNBQUksR0FBRyxLQUFLLENBQUM7UUFFN0IsWUFBTyxHQUErQixDQUFDLENBQUM7UUFDeEMsY0FBUyxHQUFRLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUM7SUFxRC9ELENBQUM7Ozs7O0lBakRDLE9BQU87Y0FDQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUk7O2NBQzlELEtBQUssR0FBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUMvRCxTQUFT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VztBQUNWO0lBQWQsV0FBVyxFQUFFOzttREFBVztBQUNUO0lBQWYsWUFBWSxFQUFFOztrREFBYzs7O0lBaEJ0Qyw4Q0FBNkM7O0lBQzdDLCtDQUE4Qzs7SUFDOUMsMkNBQTBDOztJQUMxQywyQ0FBMEM7O0lBQzFDLDZDQUE0Qzs7SUFDNUMsNENBQTRDOztJQUk1Qyx5Q0FBK0I7O0lBQy9CLDBDQUFnQzs7SUFDaEMsc0NBQW9DOztJQUNwQyx1Q0FBcUM7O0lBQ3JDLG1DQUFnQzs7SUFDaEMsbUNBQWtDOztJQUNsQyxxQ0FBa0M7O0lBQ2xDLG9DQUFzQzs7SUFDdEMsc0NBQW9FOztJQUNwRSx1Q0FBaUQ7O0lBQ2pELHlDQUE2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnQgfSBmcm9tICdAYW50di9nMic7XG5pbXBvcnQgeyBHMkJhc2VDb21wb25lbnQgfSBmcm9tICdAZGVsb24vY2hhcnQvY29yZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIE51bWJlcklucHV0IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi1zaW5nbGUtYmFyJyxcbiAgZXhwb3J0QXM6ICdnMlNpbmdsZUJhcicsXG4gIHRlbXBsYXRlOiBgYCxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUuaGVpZ2h0LnB4XSc6ICdoZWlnaHQnLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEcyU2luZ2xlQmFyQ29tcG9uZW50IGV4dGVuZHMgRzJCYXNlQ29tcG9uZW50IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2hlaWdodDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9iYXJTaXplOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX21pbjogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9tYXg6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdmFsdWU6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbGluZTogQm9vbGVhbklucHV0O1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgcGx1c0NvbG9yID0gJyM0MGE5ZmYnO1xuICBASW5wdXQoKSBtaW51c0NvbG9yID0gJyNmZjRkNGYnO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQgPSA2MDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgYmFyU2l6ZSA9IDMwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBtaW4gPSAwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBtYXggPSAxMDA7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHZhbHVlID0gMDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxpbmUgPSBmYWxzZTtcbiAgQElucHV0KCkgZm9ybWF0OiAodmFsdWU6IG51bWJlciwgaXRlbToge30sIGluZGV4OiBudW1iZXIpID0+IHN0cmluZztcbiAgQElucHV0KCkgcGFkZGluZzogbnVtYmVyIHwgbnVtYmVyW10gfCAnYXV0bycgPSAwO1xuICBASW5wdXQoKSB0ZXh0U3R5bGU6IGFueSA9IHsgZm9udFNpemU6IDEyLCBjb2xvcjogJyM1OTU5NTknIH07XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGluc3RhbGwoKTogdm9pZCB7XG4gICAgY29uc3QgeyBlbCwgaGVpZ2h0LCBwYWRkaW5nLCB0ZXh0U3R5bGUsIGxpbmUsIGZvcm1hdCwgdGhlbWUgfSA9IHRoaXM7XG4gICAgY29uc3QgY2hhcnQ6IENoYXJ0ID0gKHRoaXMuX2NoYXJ0ID0gbmV3ICh3aW5kb3cgYXMgYW55KS5HMi5DaGFydCh7XG4gICAgICBjb250YWluZXI6IGVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBhdXRvRml0OiB0cnVlLFxuICAgICAgaGVpZ2h0LFxuICAgICAgcGFkZGluZyxcbiAgICAgIHRoZW1lLFxuICAgIH0pKTtcbiAgICBjaGFydC5sZWdlbmQoZmFsc2UpO1xuICAgIGNoYXJ0LmF4aXMoZmFsc2UpO1xuICAgIGNoYXJ0LnRvb2x0aXAoZmFsc2UpO1xuICAgIGNoYXJ0LmNvb3JkaW5hdGUoKS50cmFuc3Bvc2UoKTtcbiAgICBjaGFydFxuICAgICAgLmludGVydmFsKClcbiAgICAgIC5wb3NpdGlvbignMSp2YWx1ZScpXG4gICAgICAubGFiZWwoJ3ZhbHVlJywgKCkgPT4gKHtcbiAgICAgICAgZm9ybWF0dGVyOiBmb3JtYXQsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgLi4udGV4dFN0eWxlLFxuICAgICAgICB9LFxuICAgICAgfSkpO1xuXG4gICAgaWYgKGxpbmUpIHtcbiAgICAgIGNoYXJ0LmFubm90YXRpb24oKS5saW5lKHtcbiAgICAgICAgc3RhcnQ6IFsnNTAlJywgJzAlJ10sXG4gICAgICAgIGVuZDogWyc1MCUnLCAnMTAwJSddLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHN0cm9rZTogJyNlOGU4ZTgnLFxuICAgICAgICAgIGxpbmVEYXNoOiBbMCwgMF0sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjaGFydC5yZW5kZXIoKTtcblxuICAgIHRoaXMuYXR0YWNoQ2hhcnQoKTtcbiAgfVxuXG4gIGF0dGFjaENoYXJ0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgX2NoYXJ0LCBoZWlnaHQsIHBhZGRpbmcsIHZhbHVlLCBtaW4sIG1heCwgcGx1c0NvbG9yLCBtaW51c0NvbG9yLCBiYXJTaXplIH0gPSB0aGlzO1xuICAgIGlmICghX2NoYXJ0KSByZXR1cm47XG4gICAgX2NoYXJ0LnNjYWxlKHsgdmFsdWU6IHsgbWF4LCBtaW4gfSB9KTtcbiAgICBfY2hhcnQuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIF9jaGFydC5wYWRkaW5nID0gcGFkZGluZztcbiAgICBfY2hhcnQuZ2VvbWV0cmllc1swXS5jb2xvcigndmFsdWUnLCAodmFsOiBudW1iZXIpID0+ICh2YWwgPiAwID8gcGx1c0NvbG9yIDogbWludXNDb2xvcikpLnNpemUoYmFyU2l6ZSk7XG4gICAgX2NoYXJ0LmNoYW5nZURhdGEoW3sgdmFsdWUgfV0pO1xuICAgIF9jaGFydC5yZW5kZXIoKTtcbiAgfVxufVxuIl19