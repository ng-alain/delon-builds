/**
 * @license ng-alain(cipchk@qq.com) v11.3.1
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/util/format')) :
    typeof define === 'function' && define.amd ? define('@delon/util/pipes/currency', ['exports', '@angular/core', '@delon/util/format'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.util = global.delon.util || {}, global.delon.util.pipes = global.delon.util.pipes || {}, global.delon.util.pipes.currency = {}), global.ng.core, global.delon.util.format));
}(this, (function (exports, core, format) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: mega.pipe.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CurrencyMegaPipe = /** @class */ (function () {
        /**
         * @param {?} srv
         * @param {?} locale
         */
        function CurrencyMegaPipe(srv, locale) {
            this.srv = srv;
            this.isCN = false;
            this.isCN = locale.startsWith('zh');
        }
        /**
         * Large number format filter
         *
         * 大数据格式化
         * @param {?} value
         * @param {?=} precision
         * @return {?}
         */
        CurrencyMegaPipe.prototype.transform = function (value, precision) {
            if (precision === void 0) { precision = 2; }
            /** @type {?} */
            var res = this.srv.mega(value, { precision: precision });
            return res.value + (this.isCN ? res.unitI18n : res.unit);
        };
        return CurrencyMegaPipe;
    }());
    CurrencyMegaPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'currencyMega' },] }
    ];
    /** @nocollapse */
    CurrencyMegaPipe.ctorParameters = function () { return [
        { type: format.FormatCurrencyService },
        { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] }
    ]; };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        CurrencyMegaPipe.prototype.isCN;
        /**
         * @type {?}
         * @private
         */
        CurrencyMegaPipe.prototype.srv;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: commas.pipe.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CurrencyCommasPipe = /** @class */ (function () {
        /**
         * @param {?} srv
         */
        function CurrencyCommasPipe(srv) {
            this.srv = srv;
        }
        /**
         * Format a number with commas as thousands separators
         *
         * 用逗号将数字格式化为千位分隔符
         * @param {?} value
         * @param {?=} separator
         * @return {?}
         */
        CurrencyCommasPipe.prototype.transform = function (value, separator) {
            if (separator === void 0) { separator = ','; }
            return this.srv.commas(value, { separator: separator });
        };
        return CurrencyCommasPipe;
    }());
    CurrencyCommasPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'currencyCommas' },] }
    ];
    /** @nocollapse */
    CurrencyCommasPipe.ctorParameters = function () { return [
        { type: format.FormatCurrencyService }
    ]; };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        CurrencyCommasPipe.prototype.srv;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var PIPES = [CurrencyMegaPipe, CurrencyCommasPipe];
    var CurrencyPipeModule = /** @class */ (function () {
        function CurrencyPipeModule() {
        }
        return CurrencyPipeModule;
    }());
    CurrencyPipeModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: PIPES,
                    exports: PIPES,
                },] }
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: format-number.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.CurrencyCommasPipe = CurrencyCommasPipe;
    exports.CurrencyMegaPipe = CurrencyMegaPipe;
    exports.CurrencyPipeModule = CurrencyPipeModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=format-number.umd.js.map
