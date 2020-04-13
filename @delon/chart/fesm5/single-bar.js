import { __assign, __decorate, __metadata, __spread } from 'tslib';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, NgZone, Input, NgModule } from '@angular/core';
import { Chart } from '@antv/g2';
import { InputNumber, InputBoolean, DelonUtilModule } from '@delon/util';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: single-bar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var G2SingleBarComponent = /** @class */ (function () {
    // #endregion
    function G2SingleBarComponent(el, ngZone) {
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
     * @private
     * @return {?}
     */
    G2SingleBarComponent.prototype.install = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = this, el = _a.el, height = _a.height, padding = _a.padding, textStyle = _a.textStyle, line = _a.line, format = _a.format;
        /** @type {?} */
        var chart = (this.chart = new Chart({
            container: el.nativeElement,
            autoFit: true,
            height: height,
            padding: padding,
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
            chart.guide().line({
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
        { type: NgZone }
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
}

/**
 * @fileoverview added by tsickle
 * Generated from: single-bar.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: single-bar.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { G2SingleBarComponent, G2SingleBarModule };
//# sourceMappingURL=single-bar.js.map
