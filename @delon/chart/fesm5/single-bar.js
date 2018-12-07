import { __assign, __decorate, __metadata, __spread } from 'tslib';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, NgModule } from '@angular/core';
import { InputBoolean, InputNumber, DelonUtilModule } from '@delon/util';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
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
            textStyle: __assign({}, textStyle, { textAlign: val > 0 ? 'start' : 'end' }),
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [G2SingleBarComponent];
var G2SingleBarModule = /** @class */ (function () {
    function G2SingleBarModule() {
    }
    G2SingleBarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, DelonUtilModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return G2SingleBarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { G2SingleBarComponent, G2SingleBarModule };

//# sourceMappingURL=single-bar.js.map