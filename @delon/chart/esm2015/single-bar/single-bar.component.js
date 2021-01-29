/**
 * @fileoverview added by tsickle
 * Generated from: single-bar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { G2BaseComponent } from '@delon/chart/core';
import { InputBoolean, InputNumber } from '@delon/util/other';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jaGFydC9zaW5nbGUtYmFyL3NpbmdsZS1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQWdCLFlBQVksRUFBRSxXQUFXLEVBQWUsTUFBTSxtQkFBbUIsQ0FBQztBQWF6RixNQUFNLE9BQU8sb0JBQXFCLFNBQVEsZUFBZTtJQVh6RDs7O1FBcUJXLGNBQVMsR0FBRyxTQUFTLENBQUM7UUFDdEIsZUFBVSxHQUFHLFNBQVMsQ0FBQztRQUNSLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsUUFBRyxHQUFHLENBQUMsQ0FBQztRQUNSLFFBQUcsR0FBRyxHQUFHLENBQUM7UUFDVixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUU3QixZQUFPLEdBQStCLENBQUMsQ0FBQztRQUN4QyxjQUFTLEdBQVEsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQztJQXFEL0QsQ0FBQzs7Ozs7SUFqREMsT0FBTztjQUNDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSTs7Y0FDOUQsS0FBSyxHQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQy9ELFNB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QUFXO0FBQ1Y7SUFBZCxXQUFXLEVBQUU7O21EQUFXO0FBQ1Q7SUFBZixZQUFZLEVBQUU7O2tEQUFjOzs7SUFoQnRDLDhDQUE2Qzs7SUFDN0MsK0NBQThDOztJQUM5QywyQ0FBMEM7O0lBQzFDLDJDQUEwQzs7SUFDMUMsNkNBQTRDOztJQUM1Qyw0Q0FBNEM7O0lBSTVDLHlDQUErQjs7SUFDL0IsMENBQWdDOztJQUNoQyxzQ0FBb0M7O0lBQ3BDLHVDQUFxQzs7SUFDckMsbUNBQWdDOztJQUNoQyxtQ0FBa0M7O0lBQ2xDLHFDQUFrQzs7SUFDbEMsb0NBQXNDOztJQUN0QyxzQ0FBb0U7O0lBQ3BFLHVDQUFpRDs7SUFDakQseUNBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydCB9IGZyb20gJ0BhbnR2L2cyJztcbmltcG9ydCB7IEcyQmFzZUNvbXBvbmVudCB9IGZyb20gJ0BkZWxvbi9jaGFydC9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbC9vdGhlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLXNpbmdsZS1iYXInLFxuICBleHBvcnRBczogJ2cyU2luZ2xlQmFyJyxcbiAgdGVtcGxhdGU6IGBgLFxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS5oZWlnaHQucHhdJzogJ2hlaWdodCcsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRzJTaW5nbGVCYXJDb21wb25lbnQgZXh0ZW5kcyBHMkJhc2VDb21wb25lbnQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaGVpZ2h0OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2JhclNpemU6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbWluOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX21heDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV92YWx1ZTogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9saW5lOiBCb29sZWFuSW5wdXQ7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBwbHVzQ29sb3IgPSAnIzQwYTlmZic7XG4gIEBJbnB1dCgpIG1pbnVzQ29sb3IgPSAnI2ZmNGQ0Zic7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGhlaWdodCA9IDYwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBiYXJTaXplID0gMzA7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG1pbiA9IDA7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG1heCA9IDEwMDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgdmFsdWUgPSAwO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbGluZSA9IGZhbHNlO1xuICBASW5wdXQoKSBmb3JtYXQ6ICh2YWx1ZTogbnVtYmVyLCBpdGVtOiB7fSwgaW5kZXg6IG51bWJlcikgPT4gc3RyaW5nO1xuICBASW5wdXQoKSBwYWRkaW5nOiBudW1iZXIgfCBudW1iZXJbXSB8ICdhdXRvJyA9IDA7XG4gIEBJbnB1dCgpIHRleHRTdHlsZTogYW55ID0geyBmb250U2l6ZTogMTIsIGNvbG9yOiAnIzU5NTk1OScgfTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgaW5zdGFsbCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGVsLCBoZWlnaHQsIHBhZGRpbmcsIHRleHRTdHlsZSwgbGluZSwgZm9ybWF0LCB0aGVtZSB9ID0gdGhpcztcbiAgICBjb25zdCBjaGFydDogQ2hhcnQgPSAodGhpcy5fY2hhcnQgPSBuZXcgKHdpbmRvdyBhcyBhbnkpLkcyLkNoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIGF1dG9GaXQ6IHRydWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBwYWRkaW5nLFxuICAgICAgdGhlbWUsXG4gICAgfSkpO1xuICAgIGNoYXJ0LmxlZ2VuZChmYWxzZSk7XG4gICAgY2hhcnQuYXhpcyhmYWxzZSk7XG4gICAgY2hhcnQudG9vbHRpcChmYWxzZSk7XG4gICAgY2hhcnQuY29vcmRpbmF0ZSgpLnRyYW5zcG9zZSgpO1xuICAgIGNoYXJ0XG4gICAgICAuaW50ZXJ2YWwoKVxuICAgICAgLnBvc2l0aW9uKCcxKnZhbHVlJylcbiAgICAgIC5sYWJlbCgndmFsdWUnLCAoKSA9PiAoe1xuICAgICAgICBmb3JtYXR0ZXI6IGZvcm1hdCxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAuLi50ZXh0U3R5bGUsXG4gICAgICAgIH0sXG4gICAgICB9KSk7XG5cbiAgICBpZiAobGluZSkge1xuICAgICAgY2hhcnQuYW5ub3RhdGlvbigpLmxpbmUoe1xuICAgICAgICBzdGFydDogWyc1MCUnLCAnMCUnXSxcbiAgICAgICAgZW5kOiBbJzUwJScsICcxMDAlJ10sXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgc3Ryb2tlOiAnI2U4ZThlOCcsXG4gICAgICAgICAgbGluZURhc2g6IFswLCAwXSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoYXJ0LnJlbmRlcigpO1xuXG4gICAgdGhpcy5hdHRhY2hDaGFydCgpO1xuICB9XG5cbiAgYXR0YWNoQ2hhcnQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBfY2hhcnQsIGhlaWdodCwgcGFkZGluZywgdmFsdWUsIG1pbiwgbWF4LCBwbHVzQ29sb3IsIG1pbnVzQ29sb3IsIGJhclNpemUgfSA9IHRoaXM7XG4gICAgaWYgKCFfY2hhcnQpIHJldHVybjtcbiAgICBfY2hhcnQuc2NhbGUoeyB2YWx1ZTogeyBtYXgsIG1pbiB9IH0pO1xuICAgIF9jaGFydC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgX2NoYXJ0LnBhZGRpbmcgPSBwYWRkaW5nO1xuICAgIF9jaGFydC5nZW9tZXRyaWVzWzBdLmNvbG9yKCd2YWx1ZScsICh2YWw6IG51bWJlcikgPT4gKHZhbCA+IDAgPyBwbHVzQ29sb3IgOiBtaW51c0NvbG9yKSkuc2l6ZShiYXJTaXplKTtcbiAgICBfY2hhcnQuY2hhbmdlRGF0YShbeyB2YWx1ZSB9XSk7XG4gICAgX2NoYXJ0LnJlbmRlcigpO1xuICB9XG59XG4iXX0=