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
         * @param {?=} options
         * @return {?}
         */
        CurrencyMegaPipe.prototype.transform = function (value, options) {
            /** @type {?} */
            var res = this.srv.mega(value, options);
            return res.value + (this.isCN ? res.unitI18n : res.unit);
        };
        return CurrencyMegaPipe;
    }());
    CurrencyMegaPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'mega' },] }
    ];
    /** @nocollapse */
    CurrencyMegaPipe.ctorParameters = function () { return [
        { type: format.CurrencyService },
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
     * Generated from: price.pipe.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CurrencyPricePipe = /** @class */ (function () {
        /**
         * @param {?} srv
         */
        function CurrencyPricePipe(srv) {
            this.srv = srv;
        }
        /**
         * Format a number with commas as thousands separators
         *
         * 格式化货币，用逗号将数字格式化为千位分隔符
         * ```ts
         * 10000 => `10,000`
         * 10000.567 => `10,000.57`
         * ```
         * @param {?} value
         * @param {?=} options
         * @return {?}
         */
        CurrencyPricePipe.prototype.transform = function (value, options) {
            return this.srv.format(value, options);
        };
        return CurrencyPricePipe;
    }());
    CurrencyPricePipe.decorators = [
        { type: core.Pipe, args: [{ name: 'price' },] }
    ];
    /** @nocollapse */
    CurrencyPricePipe.ctorParameters = function () { return [
        { type: format.CurrencyService }
    ]; };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        CurrencyPricePipe.prototype.srv;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: cny.pipe.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CurrencyCNYPipe = /** @class */ (function () {
        /**
         * @param {?} srv
         */
        function CurrencyCNYPipe(srv) {
            this.srv = srv;
        }
        /**
         * Converted into RMB notation.
         *
         * 转化成人民币表示法
         * @param {?} value
         * @param {?=} options
         * @return {?}
         */
        CurrencyCNYPipe.prototype.transform = function (value, options) {
            return this.srv.cny(value, options);
        };
        return CurrencyCNYPipe;
    }());
    CurrencyCNYPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'cny' },] }
    ];
    /** @nocollapse */
    CurrencyCNYPipe.ctorParameters = function () { return [
        { type: format.CurrencyService }
    ]; };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        CurrencyCNYPipe.prototype.srv;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var PIPES = [CurrencyMegaPipe, CurrencyPricePipe, CurrencyCNYPipe];
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

    exports.CurrencyMegaPipe = CurrencyMegaPipe;
    exports.CurrencyPipeModule = CurrencyPipeModule;
    exports.CurrencyPricePipe = CurrencyPricePipe;
    exports.ɵa = CurrencyCNYPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=format-number.umd.js.map
