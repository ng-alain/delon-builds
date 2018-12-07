/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// tslint:disable:no-any
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, } from '@angular/core';
import { InputBoolean, InputNumber } from '@delon/util';
var G2SingleBarComponent = /** @class */ (function () {
    // #endregion
    function G2SingleBarComponent(el) {
        this.el = el;
        // #region fields
        this.delay = 0;
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
    /**
     * @return {?}
     */
    G2SingleBarComponent.prototype.install = /**
     * @return {?}
     */
    function () {
        var _a = this, el = _a.el, height = _a.height, padding = _a.padding, textStyle = _a.textStyle, line = _a.line, format = _a.format;
        /** @type {?} */
        var chart = this.chart = new G2.Chart({
            container: el.nativeElement,
            forceFit: true,
            height: height,
            padding: padding,
        });
        chart.legend(false);
        chart.axis(false);
        chart.tooltip({ type: 'mini' });
        chart.coord()
            .transpose();
        chart
            .interval()
            .position('1*value')
            .opacity(1)
            .label('value', function (val) { return ({
            formatter: format,
            offset: val > 0 ? 10 : -10,
            textStyle: tslib_1.__assign({}, textStyle, { textAlign: val > 0 ? 'start' : 'end' }),
        }); });
        if (line) {
            chart.guide().line({
                start: ['50%', '0%'],
                end: ['50%', '100%'],
                lineStyle: {
                    stroke: '#e8e8e8',
                    lineDash: [0, 0],
                },
            });
        }
        chart.render();
        this.attachChart();
    };
    /**
     * @return {?}
     */
    G2SingleBarComponent.prototype.attachChart = /**
     * @return {?}
     */
    function () {
        var _a = this, chart = _a.chart, height = _a.height, padding = _a.padding, value = _a.value, min = _a.min, max = _a.max, plusColor = _a.plusColor, minusColor = _a.minusColor, barSize = _a.barSize;
        if (!chart)
            return;
        chart.source([{ value: value }], { value: { max: max, min: min } });
        chart.set('height', height);
        chart.set('padding', padding);
        chart
            .get('geoms')[0]
            .color('value', function (val) { return val > 0 ? plusColor : minusColor; })
            .size(barSize);
        chart.repaint();
    };
    /**
     * @return {?}
     */
    G2SingleBarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () { return _this.install(); }, this.delay);
    };
    /**
     * @return {?}
     */
    G2SingleBarComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.attachChart();
    };
    /**
     * @return {?}
     */
    G2SingleBarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.chart) {
            this.chart.destroy();
        }
    };
    G2SingleBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-single-bar',
                    template: "",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    G2SingleBarComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    G2SingleBarComponent.propDecorators = {
        delay: [{ type: Input }],
        plusColor: [{ type: Input }],
        minusColor: [{ type: Input }],
        height: [{ type: HostBinding, args: ['style.height.px',] }, { type: Input }],
        barSize: [{ type: Input }],
        min: [{ type: Input }],
        max: [{ type: Input }],
        value: [{ type: Input }],
        line: [{ type: Input }],
        format: [{ type: Input }],
        padding: [{ type: Input }],
        textStyle: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2SingleBarComponent.prototype, "delay", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2SingleBarComponent.prototype, "height", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2SingleBarComponent.prototype, "barSize", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2SingleBarComponent.prototype, "min", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2SingleBarComponent.prototype, "max", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2SingleBarComponent.prototype, "value", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], G2SingleBarComponent.prototype, "line", void 0);
    return G2SingleBarComponent;
}());
export { G2SingleBarComponent };
if (false) {
    /** @type {?} */
    G2SingleBarComponent.prototype.chart;
    /** @type {?} */
    G2SingleBarComponent.prototype.delay;
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
    /** @type {?} */
    G2SingleBarComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vY2hhcnQvc2luZ2xlLWJhci8iLCJzb3VyY2VzIjpbInNpbmdsZS1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxHQUlOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSXhEO0lBdUJFLGFBQWE7SUFFYiw4QkFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7O1FBZlYsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUN6QixjQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLGVBQVUsR0FBRyxTQUFTLENBQUM7UUFDd0IsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUM1QyxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsUUFBRyxHQUFHLENBQUMsQ0FBQztRQUNSLFFBQUcsR0FBRyxHQUFHLENBQUM7UUFDVixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUU3QixZQUFPLEdBQVEsQ0FBQyxDQUFDO1FBQ2pCLGNBQVMsR0FBUSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDO0lBSXZCLENBQUM7Ozs7SUFFL0Isc0NBQU87OztJQUFmO1FBQ1EsSUFBQSxTQUF1RCxFQUFyRCxVQUFFLEVBQUUsa0JBQU0sRUFBRSxvQkFBTyxFQUFFLHdCQUFTLEVBQUUsY0FBSSxFQUFFLGtCQUFlOztZQUN2RCxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDdEMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxhQUFhO1lBQzNCLFFBQVEsRUFBRSxJQUFJ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QUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN0QjtJQUNILENBQUM7O2dCQTlGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSxFQUFFO29CQUNaLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFmQyxVQUFVOzs7d0JBcUJULEtBQUs7NEJBQ0wsS0FBSzs2QkFDTCxLQUFLO3lCQUNMLFdBQVcsU0FBQyxpQkFBaUIsY0FBRyxLQUFLOzBCQUNyQyxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLOzRCQUNMLEtBQUs7O0lBWGtCO1FBQWQsV0FBVyxFQUFFOzt1REFBVztJQUdzQjtRQUFkLFdBQVcsRUFBRTs7d0RBQWE7SUFDNUM7UUFBZCxXQUFXLEVBQUU7O3lEQUFjO0lBQ2I7UUFBZCxXQUFXLEVBQUU7O3FEQUFTO0lBQ1I7UUFBZCxXQUFXLEVBQUU7O3FEQUFXO0lBQ1Y7UUFBZCxXQUFXLEVBQUU7O3VEQUFXO0lBQ1Q7UUFBZixZQUFZLEVBQUU7O3NEQUFjO0lBNkV4QywyQkFBQztDQUFBLEFBL0ZELElBK0ZDO1NBMUZZLG9CQUFvQjs7O0lBQy9CLHFDQUFtQjs7SUFJbkIscUNBQWtDOztJQUNsQyx5Q0FBK0I7O0lBQy9CLDBDQUFnQzs7SUFDaEMsc0NBQW9FOztJQUNwRSx1Q0FBcUM7O0lBQ3JDLG1DQUFnQzs7SUFDaEMsbUNBQWtDOztJQUNsQyxxQ0FBa0M7O0lBQ2xDLG9DQUFzQzs7SUFDdEMsc0NBQW9FOztJQUNwRSx1Q0FBMEI7O0lBQzFCLHlDQUE2RDs7SUFJakQsa0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuZGVjbGFyZSB2YXIgRzI6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItc2luZ2xlLWJhcicsXG4gIHRlbXBsYXRlOiBgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEcyU2luZ2xlQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgY2hhcnQ6IGFueTtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGRlbGF5ID0gMDtcbiAgQElucHV0KCkgcGx1c0NvbG9yID0gJyM0MGE5ZmYnO1xuICBASW5wdXQoKSBtaW51c0NvbG9yID0gJyNmZjRkNGYnO1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodC5weCcpIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGhlaWdodCA9IDYwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBiYXJTaXplID0gMzA7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG1pbiA9IDA7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG1heCA9IDEwMDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgdmFsdWUgPSAwO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbGluZSA9IGZhbHNlO1xuICBASW5wdXQoKSBmb3JtYXQ6ICh2YWx1ZTogbnVtYmVyLCBpdGVtOiB7fSwgaW5kZXg6IG51bWJlcikgPT4gc3RyaW5nO1xuICBASW5wdXQoKSBwYWRkaW5nOiBhbnkgPSAwO1xuICBASW5wdXQoKSB0ZXh0U3R5bGU6IGFueSA9IHsgZm9udFNpemU6IDEyLCBjb2xvcjogJyM1OTU5NTknIH07XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIHByaXZhdGUgaW5zdGFsbCgpIHtcbiAgICBjb25zdCB7IGVsLCBoZWlnaHQsIHBhZGRpbmcsIHRleHRTdHlsZSwgbGluZSwgZm9ybWF0IH0gPSB0aGlzO1xuICAgIGNvbnN0IGNoYXJ0ID0gdGhpcy5jaGFydCA9IG5ldyBHMi5DaGFydCh7XG4gICAgICBjb250YWluZXI6IGVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBmb3JjZUZpdDogdHJ1ZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIHBhZGRpbmcsXG4gICAgfSk7XG4gICAgY2hhcnQubGVnZW5kKGZhbHNlKTtcbiAgICBjaGFydC5heGlzKGZhbHNlKTtcbiAgICBjaGFydC50b29sdGlwKHsgdHlwZTogJ21pbmknIH0pO1xuICAgIGNoYXJ0LmNvb3JkKClcbiAgICAgICAgIC50cmFuc3Bvc2UoKTtcbiAgICBjaGFydFxuICAgICAgLmludGVydmFsKClcbiAgICAgIC5wb3NpdGlvbignMSp2YWx1ZScpXG4gICAgICAub3BhY2l0eSgxKVxuICAgICAgLmxhYmVsKCd2YWx1ZScsIHZhbCA9PiAoe1xuICAgICAgICBmb3JtYXR0ZXI6IGZvcm1hdCxcbiAgICAgICAgb2Zmc2V0OiB2YWwgPiAwID8gMTAgOiAtMTAsXG4gICAgICAgIHRleHRTdHlsZToge1xuICAgICAgICAgIC4uLnRleHRTdHlsZSxcbiAgICAgICAgICB0ZXh0QWxpZ246IHZhbCA+IDAgPyAnc3RhcnQnIDogJ2VuZCcsXG4gICAgICAgIH0sXG4gICAgICB9KSk7XG5cbiAgICBpZiAobGluZSkge1xuICAgICAgY2hhcnQuZ3VpZGUoKS5saW5lKHtcbiAgICAgICAgc3RhcnQ6IFsnNTAlJywgJzAlJ10sXG4gICAgICAgIGVuZDogWyc1MCUnLCAnMTAwJSddLFxuICAgICAgICBsaW5lU3R5bGU6IHtcbiAgICAgICAgICBzdHJva2U6ICcjZThlOGU4JyxcbiAgICAgICAgICBsaW5lRGFzaDogWzAsIDBdLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hhcnQucmVuZGVyKCk7XG5cbiAgICB0aGlzLmF0dGFjaENoYXJ0KCk7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaENoYXJ0KCkge1xuICAgIGNvbnN0IHsgY2hhcnQsIGhlaWdodCwgcGFkZGluZywgdmFsdWUsIG1pbiwgbWF4LCBwbHVzQ29sb3IsIG1pbnVzQ29sb3IsIGJhclNpemUgfSA9IHRoaXM7XG4gICAgaWYgKCFjaGFydCkgcmV0dXJuO1xuICAgIGNoYXJ0LnNvdXJjZShbeyB2YWx1ZSB9XSwgeyB2YWx1ZTogeyBtYXgsIG1pbiB9IH0pO1xuICAgIGNoYXJ0LnNldCgnaGVpZ2h0JywgaGVpZ2h0KTtcbiAgICBjaGFydC5zZXQoJ3BhZGRpbmcnLCBwYWRkaW5nKTtcbiAgICBjaGFydFxuICAgICAgLmdldCgnZ2VvbXMnKVswXVxuICAgICAgLmNvbG9yKCd2YWx1ZScsIHZhbCA9PiB2YWwgPiAwID8gcGx1c0NvbG9yIDogbWludXNDb2xvcilcbiAgICAgIC5zaXplKGJhclNpemUpO1xuICAgIGNoYXJ0LnJlcGFpbnQoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnN0YWxsKCksIHRoaXMuZGVsYXkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5hdHRhY2hDaGFydCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgIHRoaXMuY2hhcnQuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxufVxuIl19