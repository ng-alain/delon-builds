import { __decorate, __metadata, __spread } from 'tslib';
import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { DelonLocaleService, DelonLocaleModule } from '@delon/theme';
import { toNumber, InputNumber, DelonUtilModule } from '@delon/util';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var G2ProgressComponent = /** @class */ (function () {
    function G2ProgressComponent(i18n) {
        this.i18n = i18n;
        this.color = '#1890FF';
    }
    Object.defineProperty(G2ProgressComponent.prototype, "target", {
        get: /**
         * @return {?}
         */
        function () {
            return this._target;
        },
        // tslint:disable-next-line:no-any
        set: 
        // tslint:disable-next-line:no-any
        /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._target = Math.min(Math.max(toNumber(value), 0), 100);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G2ProgressComponent.prototype, "percent", {
        get: /**
         * @return {?}
         */
        function () {
            return this._percent;
        },
        // tslint:disable-next-line:no-any
        set: 
        // tslint:disable-next-line:no-any
        /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._percent = Math.min(Math.max(toNumber(value), 0), 100);
        },
        enumerable: true,
        configurable: true
    });
    G2ProgressComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-mini-progress',
                    template: "<nz-tooltip [nzTitle]=\"i18n.getData('miniProgress').target + target + '%'\">\n  <div nz-tooltip class=\"g2-mini-progress__target\" [ngStyle]=\"{'left.%': target}\">\n    <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{'background-color': color}\"></span>\n    <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{'background-color': color}\"></span>\n  </div>\n</nz-tooltip>\n<div class=\"g2-mini-progress__wrap\">\n  <div class=\"g2-mini-progress__value\" [ngStyle]=\"{'background-color': color, 'width.%': percent, 'height.px':strokeWidth}\"></div>\n</div>\n",
                    host: { '[class.g2-mini-progress]': 'true' }
                }] }
    ];
    /** @nocollapse */
    G2ProgressComponent.ctorParameters = function () { return [
        { type: DelonLocaleService }
    ]; };
    G2ProgressComponent.propDecorators = {
        color: [{ type: Input }],
        target: [{ type: Input }],
        strokeWidth: [{ type: Input }],
        percent: [{ type: Input }]
    };
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], G2ProgressComponent.prototype, "strokeWidth", void 0);
    return G2ProgressComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [G2ProgressComponent];
var G2MiniProgressModule = /** @class */ (function () {
    function G2MiniProgressModule() {
    }
    /**
     * @return {?}
     */
    G2MiniProgressModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: G2MiniProgressModule, providers: [] };
    };
    G2MiniProgressModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, DelonUtilModule, DelonLocaleModule, NgZorroAntdModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return G2MiniProgressModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { G2ProgressComponent, G2MiniProgressModule };

//# sourceMappingURL=mini-progress.js.map