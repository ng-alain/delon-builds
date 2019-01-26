/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// tslint:disable:no-any
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, NgZone, } from '@angular/core';
import { InputBoolean, InputNumber } from '@delon/util';
export class G2SingleBarComponent {
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
    install() {
        const { el, height, padding, textStyle, line, format } = this;
        /** @type {?} */
        const chart = (this.chart = new G2.Chart({
            container: el.nativeElement,
            forceFit: true,
            height,
            padding,
        }));
        chart.legend(false);
        chart.axis(false);
        chart.tooltip({ type: 'mini' });
        chart.coord().transpose();
        chart
            .interval()
            .position('1*value')
            .opacity(1)
            .label('value', val => ({
            formatter: format,
            offset: val > 0 ? 10 : -10,
            textStyle: Object.assign({}, textStyle, { textAlign: val > 0 ? 'start' : 'end' }),
        }));
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
    }
    /**
     * @return {?}
     */
    attachChart() {
        const { chart, height, padding, value, min, max, plusColor, minusColor, barSize } = this;
        if (!chart)
            return;
        chart.source([{ value }], { value: { max, min } });
        chart.set('height', height);
        chart.set('padding', padding);
        chart
            .get('geoms')[0]
            .color('value', val => (val > 0 ? plusColor : minusColor))
            .size(barSize);
        chart.repaint();
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
G2SingleBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-single-bar',
                template: ``,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
G2SingleBarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone }
];
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
    /** @type {?} */
    G2SingleBarComponent.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vY2hhcnQvc2luZ2xlLWJhci8iLCJzb3VyY2VzIjpbInNpbmdsZS1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sR0FJUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQVN4RCxNQUFNLE9BQU8sb0JBQW9COzs7Ozs7SUFvQi9CLFlBQW9CLEVBQWMsRUFBVSxNQUFjO1FBQXRDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFROztRQWZsQyxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLGNBQVMsR0FBRyxTQUFTLENBQUM7UUFDdEIsZUFBVSxHQUFHLFNBQVMsQ0FBQztRQUN3QixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQzVDLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixRQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1IsUUFBRyxHQUFHLEdBQUcsQ0FBQztRQUNWLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVCxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBRTdCLFlBQU8sR0FBUSxDQUFDLENBQUM7UUFDakIsY0FBUyxHQUFRLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUM7SUFJQSxDQUFDOzs7O0lBRXRELE9BQU87Y0FDUCxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSTs7Y0FDdkQsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENB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XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmRlY2xhcmUgdmFyIEcyOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLXNpbmdsZS1iYXInLFxuICB0ZW1wbGF0ZTogYGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBHMlNpbmdsZUJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGNoYXJ0OiBhbnk7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBkZWxheSA9IDA7XG4gIEBJbnB1dCgpIHBsdXNDb2xvciA9ICcjNDBhOWZmJztcbiAgQElucHV0KCkgbWludXNDb2xvciA9ICcjZmY0ZDRmJztcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5oZWlnaHQucHgnKSBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQgPSA2MDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgYmFyU2l6ZSA9IDMwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBtaW4gPSAwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBtYXggPSAxMDA7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHZhbHVlID0gMDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxpbmUgPSBmYWxzZTtcbiAgQElucHV0KCkgZm9ybWF0OiAodmFsdWU6IG51bWJlciwgaXRlbToge30sIGluZGV4OiBudW1iZXIpID0+IHN0cmluZztcbiAgQElucHV0KCkgcGFkZGluZzogYW55ID0gMDtcbiAgQElucHV0KCkgdGV4dFN0eWxlOiBhbnkgPSB7IGZvbnRTaXplOiAxMiwgY29sb3I6ICcjNTk1OTU5JyB9O1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7fVxuXG4gIHByaXZhdGUgaW5zdGFsbCgpIHtcbiAgICBjb25zdCB7IGVsLCBoZWlnaHQsIHBhZGRpbmcsIHRleHRTdHlsZSwgbGluZSwgZm9ybWF0IH0gPSB0aGlzO1xuICAgIGNvbnN0IGNoYXJ0ID0gKHRoaXMuY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xuICAgICAgY29udGFpbmVyOiBlbC5uYXRpdmVFbGVtZW50LFxuICAgICAgZm9yY2VGaXQ6IHRydWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBwYWRkaW5nLFxuICAgIH0pKTtcbiAgICBjaGFydC5sZWdlbmQoZmFsc2UpO1xuICAgIGNoYXJ0LmF4aXMoZmFsc2UpO1xuICAgIGNoYXJ0LnRvb2x0aXAoeyB0eXBlOiAnbWluaScgfSk7XG4gICAgY2hhcnQuY29vcmQoKS50cmFuc3Bvc2UoKTtcbiAgICBjaGFydFxuICAgICAgLmludGVydmFsKClcbiAgICAgIC5wb3NpdGlvbignMSp2YWx1ZScpXG4gICAgICAub3BhY2l0eSgxKVxuICAgICAgLmxhYmVsKCd2YWx1ZScsIHZhbCA9PiAoe1xuICAgICAgICBmb3JtYXR0ZXI6IGZvcm1hdCxcbiAgICAgICAgb2Zmc2V0OiB2YWwgPiAwID8gMTAgOiAtMTAsXG4gICAgICAgIHRleHRTdHlsZToge1xuICAgICAgICAgIC4uLnRleHRTdHlsZSxcbiAgICAgICAgICB0ZXh0QWxpZ246IHZhbCA+IDAgPyAnc3RhcnQnIDogJ2VuZCcsXG4gICAgICAgIH0sXG4gICAgICB9KSk7XG5cbiAgICBpZiAobGluZSkge1xuICAgICAgY2hhcnQuZ3VpZGUoKS5saW5lKHtcbiAgICAgICAgc3RhcnQ6IFsnNTAlJywgJzAlJ10sXG4gICAgICAgIGVuZDogWyc1MCUnLCAnMTAwJSddLFxuICAgICAgICBsaW5lU3R5bGU6IHtcbiAgICAgICAgICBzdHJva2U6ICcjZThlOGU4JyxcbiAgICAgICAgICBsaW5lRGFzaDogWzAsIDBdLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hhcnQucmVuZGVyKCk7XG5cbiAgICB0aGlzLmF0dGFjaENoYXJ0KCk7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaENoYXJ0KCkge1xuICAgIGNvbnN0IHsgY2hhcnQsIGhlaWdodCwgcGFkZGluZywgdmFsdWUsIG1pbiwgbWF4LCBwbHVzQ29sb3IsIG1pbnVzQ29sb3IsIGJhclNpemUgfSA9IHRoaXM7XG4gICAgaWYgKCFjaGFydCkgcmV0dXJuO1xuICAgIGNoYXJ0LnNvdXJjZShbeyB2YWx1ZSB9XSwgeyB2YWx1ZTogeyBtYXgsIG1pbiB9IH0pO1xuICAgIGNoYXJ0LnNldCgnaGVpZ2h0JywgaGVpZ2h0KTtcbiAgICBjaGFydC5zZXQoJ3BhZGRpbmcnLCBwYWRkaW5nKTtcbiAgICBjaGFydFxuICAgICAgLmdldCgnZ2VvbXMnKVswXVxuICAgICAgLmNvbG9yKCd2YWx1ZScsIHZhbCA9PiAodmFsID4gMCA/IHBsdXNDb2xvciA6IG1pbnVzQ29sb3IpKVxuICAgICAgLnNpemUoYmFyU2l6ZSk7XG4gICAgY2hhcnQucmVwYWludCgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmluc3RhbGwoKSwgdGhpcy5kZWxheSkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5hdHRhY2hDaGFydCgpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmNoYXJ0LmRlc3Ryb3koKSk7XG4gICAgfVxuICB9XG59XG4iXX0=