/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, } from '@angular/core';
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
                host: {
                    '[style.height.px]': 'height',
                },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vY2hhcnQvc2luZ2xlLWJhci8iLCJzb3VyY2VzIjpbInNpbmdsZS1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEdBSVAsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFZeEQsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7O0lBb0IvQixZQUFvQixFQUFjLEVBQVUsTUFBYztRQUF0QyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTs7UUFmbEMsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUN6QixjQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLGVBQVUsR0FBRyxTQUFTLENBQUM7UUFDUixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLFFBQUcsR0FBRyxDQUFDLENBQUM7UUFDUixRQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ1YsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNULFNBQUksR0FBRyxLQUFLLENBQUM7UUFFN0IsWUFBTyxHQUFRLENBQUMsQ0FBQztRQUNqQixjQUFTLEdBQVEsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQztJQUlBLENBQUM7Ozs7SUFFdEQsT0FBTztjQUNQLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJOztjQUN2RCxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN2QyxTQUFT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blN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuZGVjbGFyZSB2YXIgRzI6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItc2luZ2xlLWJhcicsXG4gIHRlbXBsYXRlOiBgYCxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUuaGVpZ2h0LnB4XSc6ICdoZWlnaHQnLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRzJTaW5nbGVCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBjaGFydDogYW55O1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXkgPSAwO1xuICBASW5wdXQoKSBwbHVzQ29sb3IgPSAnIzQwYTlmZic7XG4gIEBJbnB1dCgpIG1pbnVzQ29sb3IgPSAnI2ZmNGQ0Zic7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGhlaWdodCA9IDYwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBiYXJTaXplID0gMzA7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG1pbiA9IDA7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG1heCA9IDEwMDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgdmFsdWUgPSAwO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbGluZSA9IGZhbHNlO1xuICBASW5wdXQoKSBmb3JtYXQ6ICh2YWx1ZTogbnVtYmVyLCBpdGVtOiB7fSwgaW5kZXg6IG51bWJlcikgPT4gc3RyaW5nO1xuICBASW5wdXQoKSBwYWRkaW5nOiBhbnkgPSAwO1xuICBASW5wdXQoKSB0ZXh0U3R5bGU6IGFueSA9IHsgZm9udFNpemU6IDEyLCBjb2xvcjogJyM1OTU5NTknIH07XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHt9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsKCkge1xuICAgIGNvbnN0IHsgZWwsIGhlaWdodCwgcGFkZGluZywgdGV4dFN0eWxlLCBsaW5lLCBmb3JtYXQgfSA9IHRoaXM7XG4gICAgY29uc3QgY2hhcnQgPSAodGhpcy5jaGFydCA9IG5ldyBHMi5DaGFydCh7XG4gICAgICBjb250YWluZXI6IGVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBmb3JjZUZpdDogdHJ1ZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIHBhZGRpbmcsXG4gICAgfSkpO1xuICAgIGNoYXJ0LmxlZ2VuZChmYWxzZSk7XG4gICAgY2hhcnQuYXhpcyhmYWxzZSk7XG4gICAgY2hhcnQudG9vbHRpcCh7IHR5cGU6ICdtaW5pJyB9KTtcbiAgICBjaGFydC5jb29yZCgpLnRyYW5zcG9zZSgpO1xuICAgIGNoYXJ0XG4gICAgICAuaW50ZXJ2YWwoKVxuICAgICAgLnBvc2l0aW9uKCcxKnZhbHVlJylcbiAgICAgIC5vcGFjaXR5KDEpXG4gICAgICAubGFiZWwoJ3ZhbHVlJywgdmFsID0+ICh7XG4gICAgICAgIGZvcm1hdHRlcjogZm9ybWF0LFxuICAgICAgICBvZmZzZXQ6IHZhbCA+IDAgPyAxMCA6IC0xMCxcbiAgICAgICAgdGV4dFN0eWxlOiB7XG4gICAgICAgICAgLi4udGV4dFN0eWxlLFxuICAgICAgICAgIHRleHRBbGlnbjogdmFsID4gMCA/ICdzdGFydCcgOiAnZW5kJyxcbiAgICAgICAgfSxcbiAgICAgIH0pKTtcblxuICAgIGlmIChsaW5lKSB7XG4gICAgICBjaGFydC5ndWlkZSgpLmxpbmUoe1xuICAgICAgICBzdGFydDogWyc1MCUnLCAnMCUnXSxcbiAgICAgICAgZW5kOiBbJzUwJScsICcxMDAlJ10sXG4gICAgICAgIGxpbmVTdHlsZToge1xuICAgICAgICAgIHN0cm9rZTogJyNlOGU4ZTgnLFxuICAgICAgICAgIGxpbmVEYXNoOiBbMCwgMF0sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjaGFydC5yZW5kZXIoKTtcblxuICAgIHRoaXMuYXR0YWNoQ2hhcnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoQ2hhcnQoKSB7XG4gICAgY29uc3QgeyBjaGFydCwgaGVpZ2h0LCBwYWRkaW5nLCB2YWx1ZSwgbWluLCBtYXgsIHBsdXNDb2xvciwgbWludXNDb2xvciwgYmFyU2l6ZSB9ID0gdGhpcztcbiAgICBpZiAoIWNoYXJ0KSByZXR1cm47XG4gICAgY2hhcnQuc291cmNlKFt7IHZhbHVlIH1dLCB7IHZhbHVlOiB7IG1heCwgbWluIH0gfSk7XG4gICAgY2hhcnQuc2V0KCdoZWlnaHQnLCBoZWlnaHQpO1xuICAgIGNoYXJ0LnNldCgncGFkZGluZycsIHBhZGRpbmcpO1xuICAgIGNoYXJ0XG4gICAgICAuZ2V0KCdnZW9tcycpWzBdXG4gICAgICAuY29sb3IoJ3ZhbHVlJywgdmFsID0+ICh2YWwgPiAwID8gcGx1c0NvbG9yIDogbWludXNDb2xvcikpXG4gICAgICAuc2l6ZShiYXJTaXplKTtcbiAgICBjaGFydC5yZXBhaW50KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpLCB0aGlzLmRlbGF5KSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmF0dGFjaENoYXJ0KCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuY2hhcnQuZGVzdHJveSgpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==