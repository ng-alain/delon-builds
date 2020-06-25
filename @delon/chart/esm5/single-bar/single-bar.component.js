/**
 * @fileoverview added by tsickle
 * Generated from: single-bar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign, __decorate, __metadata } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, ViewEncapsulation, } from '@angular/core';
import { Chart } from '@antv/g2';
import { AlainConfigService, InputBoolean, InputNumber } from '@delon/util';
var G2SingleBarComponent = /** @class */ (function () {
    // #endregion
    function G2SingleBarComponent(el, ngZone, configSrv, platform) {
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
     * @private
     * @return {?}
     */
    G2SingleBarComponent.prototype.install = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = this, el = _a.el, height = _a.height, padding = _a.padding, textStyle = _a.textStyle, line = _a.line, format = _a.format, theme = _a.theme;
        /** @type {?} */
        var chart = (this.chart = new Chart({
            container: el.nativeElement,
            autoFit: true,
            height: height,
            padding: padding,
            theme: theme,
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
        function () { return ({
            formatter: format,
            style: __assign({}, textStyle),
        }); }));
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
    };
    /**
     * @private
     * @return {?}
     */
    G2SingleBarComponent.prototype.attachChart = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = this, chart = _a.chart, height = _a.height, padding = _a.padding, value = _a.value, min = _a.min, max = _a.max, plusColor = _a.plusColor, minusColor = _a.minusColor, barSize = _a.barSize;
        if (!chart)
            return;
        chart.scale({ value: { max: max, min: min } });
        chart.height = height;
        chart.padding = padding;
        chart.geometries[0].color('value', (/**
         * @param {?} val
         * @return {?}
         */
        function (val) { return (val > 0 ? plusColor : minusColor); })).size(barSize);
        chart.changeData([{ value: value }]);
    };
    /**
     * @return {?}
     */
    G2SingleBarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.platform.isBrowser) {
            return;
        }
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () { return setTimeout((/**
         * @return {?}
         */
        function () { return _this.install(); }), _this.delay); }));
    };
    /**
     * @return {?}
     */
    G2SingleBarComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () { return _this.attachChart(); }));
    };
    /**
     * @return {?}
     */
    G2SingleBarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.chart) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () { return _this.chart.destroy(); }));
        }
    };
    G2SingleBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-single-bar',
                    exportAs: 'g2SingleBar',
                    template: "",
                    host: {
                        '[style.height.px]': 'height',
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    G2SingleBarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: AlainConfigService },
        { type: Platform }
    ]; };
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
    return G2SingleBarComponent;
}());
export { G2SingleBarComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vY2hhcnQvc2luZ2xlLWJhci8iLCJzb3VyY2VzIjpbInNpbmdsZS1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFJTixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBUyxNQUFNLFVBQVUsQ0FBQztBQUN4QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1RTtJQThCRSxhQUFhO0lBRWIsOEJBQW9CLEVBQWMsRUFBVSxNQUFjLEVBQUUsU0FBNkIsRUFBVSxRQUFrQjtRQUFqRyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUF5QyxhQUFRLEdBQVIsUUFBUSxDQUFVOztRQWhCN0YsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUN6QixjQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLGVBQVUsR0FBRyxTQUFTLENBQUM7UUFDUixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLFFBQUcsR0FBRyxDQUFDLENBQUM7UUFDUixRQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ1YsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNULFNBQUksR0FBRyxLQUFLLENBQUM7UUFFN0IsWUFBTyxHQUErQixDQUFDLENBQUM7UUFDeEMsY0FBUyxHQUFRLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUM7UUFNM0QsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVB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LFdBQVcsRUFBRTs7cURBQVc7SUFDVjtRQUFkLFdBQVcsRUFBRTs7dURBQVc7SUFDVDtRQUFmLFlBQVksRUFBRTs7c0RBQWM7SUE2RXhDLDJCQUFDO0NBQUEsQUFyR0QsSUFxR0M7U0ExRlksb0JBQW9COzs7Ozs7SUFDL0IscUNBQXFCOztJQUlyQixxQ0FBa0M7O0lBQ2xDLHlDQUErQjs7SUFDL0IsMENBQWdDOztJQUNoQyxzQ0FBb0M7O0lBQ3BDLHVDQUFxQzs7SUFDckMsbUNBQWdDOztJQUNoQyxtQ0FBa0M7O0lBQ2xDLHFDQUFrQzs7SUFDbEMsb0NBQXNDOztJQUN0QyxzQ0FBb0U7O0lBQ3BFLHVDQUFpRDs7SUFDakQseUNBQTZEOztJQUM3RCxxQ0FBMkM7Ozs7O0lBSS9CLGtDQUFzQjs7Ozs7SUFBRSxzQ0FBc0I7Ozs7O0lBQWlDLHdDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXJ0LCBUeXBlcyB9IGZyb20gJ0BhbnR2L2cyJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItc2luZ2xlLWJhcicsXG4gIGV4cG9ydEFzOiAnZzJTaW5nbGVCYXInLFxuICB0ZW1wbGF0ZTogYGAsXG4gIGhvc3Q6IHtcbiAgICAnW3N0eWxlLmhlaWdodC5weF0nOiAnaGVpZ2h0JyxcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBHMlNpbmdsZUJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGNoYXJ0OiBDaGFydDtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGRlbGF5ID0gMDtcbiAgQElucHV0KCkgcGx1c0NvbG9yID0gJyM0MGE5ZmYnO1xuICBASW5wdXQoKSBtaW51c0NvbG9yID0gJyNmZjRkNGYnO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQgPSA2MDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgYmFyU2l6ZSA9IDMwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBtaW4gPSAwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBtYXggPSAxMDA7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHZhbHVlID0gMDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxpbmUgPSBmYWxzZTtcbiAgQElucHV0KCkgZm9ybWF0OiAodmFsdWU6IG51bWJlciwgaXRlbToge30sIGluZGV4OiBudW1iZXIpID0+IHN0cmluZztcbiAgQElucHV0KCkgcGFkZGluZzogbnVtYmVyIHwgbnVtYmVyW10gfCAnYXV0bycgPSAwO1xuICBASW5wdXQoKSB0ZXh0U3R5bGU6IGFueSA9IHsgZm9udFNpemU6IDEyLCBjb2xvcjogJyM1OTU5NTknIH07XG4gIEBJbnB1dCgpIHRoZW1lOiBzdHJpbmcgfCBUeXBlcy5Mb29zZU9iamVjdDtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtKSB7XG4gICAgY29uZmlnU3J2LmF0dGFjaEtleSh0aGlzLCAnY2hhcnQnLCAndGhlbWUnKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5zdGFsbCgpIHtcbiAgICBjb25zdCB7IGVsLCBoZWlnaHQsIHBhZGRpbmcsIHRleHRTdHlsZSwgbGluZSwgZm9ybWF0LCB0aGVtZSB9ID0gdGhpcztcbiAgICBjb25zdCBjaGFydCA9ICh0aGlzLmNoYXJ0ID0gbmV3IENoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIGF1dG9GaXQ6IHRydWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBwYWRkaW5nLFxuICAgICAgdGhlbWUsXG4gICAgfSkpO1xuICAgIGNoYXJ0LmxlZ2VuZChmYWxzZSk7XG4gICAgY2hhcnQuYXhpcyhmYWxzZSk7XG4gICAgY2hhcnQudG9vbHRpcChmYWxzZSk7XG4gICAgY2hhcnQuY29vcmRpbmF0ZSgpLnRyYW5zcG9zZSgpO1xuICAgIGNoYXJ0XG4gICAgICAuaW50ZXJ2YWwoKVxuICAgICAgLnBvc2l0aW9uKCcxKnZhbHVlJylcbiAgICAgIC5sYWJlbCgndmFsdWUnLCAoKSA9PiAoe1xuICAgICAgICBmb3JtYXR0ZXI6IGZvcm1hdCxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAuLi50ZXh0U3R5bGUsXG4gICAgICAgIH0sXG4gICAgICB9KSk7XG5cbiAgICBpZiAobGluZSkge1xuICAgICAgY2hhcnQuYW5ub3RhdGlvbigpLmxpbmUoe1xuICAgICAgICBzdGFydDogWyc1MCUnLCAnMCUnXSxcbiAgICAgICAgZW5kOiBbJzUwJScsICcxMDAlJ10sXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgc3Ryb2tlOiAnI2U4ZThlOCcsXG4gICAgICAgICAgbGluZURhc2g6IFswLCAwXSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoYXJ0LnJlbmRlcigpO1xuXG4gICAgdGhpcy5hdHRhY2hDaGFydCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hDaGFydCgpIHtcbiAgICBjb25zdCB7IGNoYXJ0LCBoZWlnaHQsIHBhZGRpbmcsIHZhbHVlLCBtaW4sIG1heCwgcGx1c0NvbG9yLCBtaW51c0NvbG9yLCBiYXJTaXplIH0gPSB0aGlzO1xuICAgIGlmICghY2hhcnQpIHJldHVybjtcbiAgICBjaGFydC5zY2FsZSh7IHZhbHVlOiB7IG1heCwgbWluIH0gfSk7XG4gICAgY2hhcnQuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIGNoYXJ0LnBhZGRpbmcgPSBwYWRkaW5nO1xuICAgIGNoYXJ0Lmdlb21ldHJpZXNbMF0uY29sb3IoJ3ZhbHVlJywgKHZhbDogbnVtYmVyKSA9PiAodmFsID4gMCA/IHBsdXNDb2xvciA6IG1pbnVzQ29sb3IpKS5zaXplKGJhclNpemUpO1xuICAgIGNoYXJ0LmNoYW5nZURhdGEoW3sgdmFsdWUgfV0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpLCB0aGlzLmRlbGF5KSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmF0dGFjaENoYXJ0KCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuY2hhcnQuZGVzdHJveSgpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==