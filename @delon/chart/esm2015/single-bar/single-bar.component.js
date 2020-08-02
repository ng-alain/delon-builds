/**
 * @fileoverview added by tsickle
 * Generated from: single-bar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, ViewEncapsulation, } from '@angular/core';
import { Chart } from '@antv/g2';
import { AlainConfigService, InputBoolean, InputNumber } from '@delon/util';
export class G2SingleBarComponent {
    // #endregion
    /**
     * @param {?} el
     * @param {?} ngZone
     * @param {?} configSrv
     * @param {?} platform
     */
    constructor(el, ngZone, configSrv, platform) {
        this.el = el;
        this.ngZone = ngZone;
        this.platform = platform;
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
        configSrv.attachKey(this, 'chart', 'theme');
    }
    /**
     * @return {?}
     */
    get chart() {
        return this._chart;
    }
    /**
     * @private
     * @return {?}
     */
    install() {
        const { el, height, padding, textStyle, line, format, theme } = this;
        /** @type {?} */
        const chart = (this._chart = new Chart({
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
     * @private
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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.platform.isBrowser) {
            return;
        }
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
        if (this._chart) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => this._chart.destroy()));
        }
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
/** @nocollapse */
G2SingleBarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: AlainConfigService },
    { type: Platform }
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
    textStyle: [{ type: Input }],
    theme: [{ type: Input }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2SingleBarComponent.prototype, "delay", void 0);
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
    /**
     * @type {?}
     * @private
     */
    G2SingleBarComponent.prototype._chart;
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
    G2SingleBarComponent.prototype.theme;
    /**
     * @type {?}
     * @private
     */
    G2SingleBarComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    G2SingleBarComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    G2SingleBarComponent.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jaGFydC9zaW5nbGUtYmFyL3NpbmdsZS1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFJTixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBUyxNQUFNLFVBQVUsQ0FBQztBQUN4QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQWE1RSxNQUFNLE9BQU8sb0JBQW9COzs7Ozs7OztJQXlCL0IsWUFBb0IsRUFBYyxFQUFVLE1BQWMsRUFBRSxTQUE2QixFQUFVLFFBQWtCO1FBQWpHLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQXlDLGFBQVEsR0FBUixRQUFRLENBQVU7O1FBaEI3RixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLGNBQVMsR0FBRyxTQUFTLENBQUM7UUFDdEIsZUFBVSxHQUFHLFNBQVMsQ0FBQztRQUNSLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsUUFBRyxHQUFHLENBQUMsQ0FBQztRQUNSLFFBQUcsR0FBRyxHQUFHLENBQUM7UUFDVixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUU3QixZQUFPLEdBQStCLENBQUMsQ0FBQztRQUN4QyxjQUFTLEdBQVEsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQztRQU0zRCxT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Yzs7Ozs7O0lBaEJ0QyxzQ0FBc0I7O0lBUXRCLHFDQUFrQzs7SUFDbEMseUNBQStCOztJQUMvQiwwQ0FBZ0M7O0lBQ2hDLHNDQUFvQzs7SUFDcEMsdUNBQXFDOztJQUNyQyxtQ0FBZ0M7O0lBQ2hDLG1DQUFrQzs7SUFDbEMscUNBQWtDOztJQUNsQyxvQ0FBc0M7O0lBQ3RDLHNDQUFvRTs7SUFDcEUsdUNBQWlEOztJQUNqRCx5Q0FBNkQ7O0lBQzdELHFDQUEyQzs7Ozs7SUFJL0Isa0NBQXNCOzs7OztJQUFFLHNDQUFzQjs7Ozs7SUFBaUMsd0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnQsIFR5cGVzIH0gZnJvbSAnQGFudHYvZzInO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi1zaW5nbGUtYmFyJyxcbiAgZXhwb3J0QXM6ICdnMlNpbmdsZUJhcicsXG4gIHRlbXBsYXRlOiBgYCxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUuaGVpZ2h0LnB4XSc6ICdoZWlnaHQnLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEcyU2luZ2xlQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX2NoYXJ0OiBDaGFydDtcblxuICBnZXQgY2hhcnQoKTogQ2hhcnQge1xuICAgIHJldHVybiB0aGlzLl9jaGFydDtcbiAgfVxuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXkgPSAwO1xuICBASW5wdXQoKSBwbHVzQ29sb3IgPSAnIzQwYTlmZic7XG4gIEBJbnB1dCgpIG1pbnVzQ29sb3IgPSAnI2ZmNGQ0Zic7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGhlaWdodCA9IDYwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBiYXJTaXplID0gMzA7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG1pbiA9IDA7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG1heCA9IDEwMDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgdmFsdWUgPSAwO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbGluZSA9IGZhbHNlO1xuICBASW5wdXQoKSBmb3JtYXQ6ICh2YWx1ZTogbnVtYmVyLCBpdGVtOiB7fSwgaW5kZXg6IG51bWJlcikgPT4gc3RyaW5nO1xuICBASW5wdXQoKSBwYWRkaW5nOiBudW1iZXIgfCBudW1iZXJbXSB8ICdhdXRvJyA9IDA7XG4gIEBJbnB1dCgpIHRleHRTdHlsZTogYW55ID0geyBmb250U2l6ZTogMTIsIGNvbG9yOiAnIzU5NTk1OScgfTtcbiAgQElucHV0KCkgdGhlbWU6IHN0cmluZyB8IFR5cGVzLkxvb3NlT2JqZWN0O1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIG5nWm9uZTogTmdab25lLCBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSwgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0pIHtcbiAgICBjb25maWdTcnYuYXR0YWNoS2V5KHRoaXMsICdjaGFydCcsICd0aGVtZScpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgZWwsIGhlaWdodCwgcGFkZGluZywgdGV4dFN0eWxlLCBsaW5lLCBmb3JtYXQsIHRoZW1lIH0gPSB0aGlzO1xuICAgIGNvbnN0IGNoYXJ0ID0gKHRoaXMuX2NoYXJ0ID0gbmV3IENoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIGF1dG9GaXQ6IHRydWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBwYWRkaW5nLFxuICAgICAgdGhlbWUsXG4gICAgfSkpO1xuICAgIGNoYXJ0LmxlZ2VuZChmYWxzZSk7XG4gICAgY2hhcnQuYXhpcyhmYWxzZSk7XG4gICAgY2hhcnQudG9vbHRpcChmYWxzZSk7XG4gICAgY2hhcnQuY29vcmRpbmF0ZSgpLnRyYW5zcG9zZSgpO1xuICAgIGNoYXJ0XG4gICAgICAuaW50ZXJ2YWwoKVxuICAgICAgLnBvc2l0aW9uKCcxKnZhbHVlJylcbiAgICAgIC5sYWJlbCgndmFsdWUnLCAoKSA9PiAoe1xuICAgICAgICBmb3JtYXR0ZXI6IGZvcm1hdCxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAuLi50ZXh0U3R5bGUsXG4gICAgICAgIH0sXG4gICAgICB9KSk7XG5cbiAgICBpZiAobGluZSkge1xuICAgICAgY2hhcnQuYW5ub3RhdGlvbigpLmxpbmUoe1xuICAgICAgICBzdGFydDogWyc1MCUnLCAnMCUnXSxcbiAgICAgICAgZW5kOiBbJzUwJScsICcxMDAlJ10sXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgc3Ryb2tlOiAnI2U4ZThlOCcsXG4gICAgICAgICAgbGluZURhc2g6IFswLCAwXSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoYXJ0LnJlbmRlcigpO1xuXG4gICAgdGhpcy5hdHRhY2hDaGFydCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hDaGFydCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IF9jaGFydCwgaGVpZ2h0LCBwYWRkaW5nLCB2YWx1ZSwgbWluLCBtYXgsIHBsdXNDb2xvciwgbWludXNDb2xvciwgYmFyU2l6ZSB9ID0gdGhpcztcbiAgICBpZiAoIV9jaGFydCkgcmV0dXJuO1xuICAgIF9jaGFydC5zY2FsZSh7IHZhbHVlOiB7IG1heCwgbWluIH0gfSk7XG4gICAgX2NoYXJ0LmhlaWdodCA9IGhlaWdodDtcbiAgICBfY2hhcnQucGFkZGluZyA9IHBhZGRpbmc7XG4gICAgX2NoYXJ0Lmdlb21ldHJpZXNbMF0uY29sb3IoJ3ZhbHVlJywgKHZhbDogbnVtYmVyKSA9PiAodmFsID4gMCA/IHBsdXNDb2xvciA6IG1pbnVzQ29sb3IpKS5zaXplKGJhclNpemUpO1xuICAgIF9jaGFydC5jaGFuZ2VEYXRhKFt7IHZhbHVlIH1dKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmluc3RhbGwoKSwgdGhpcy5kZWxheSkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5hdHRhY2hDaGFydCgpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9jaGFydCkge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5fY2hhcnQuZGVzdHJveSgpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==