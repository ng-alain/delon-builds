/**
 * @license ng-alain(cipchk@qq.com) v11.6.0
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/util/format')) :
    typeof define === 'function' && define.amd ? define('@delon/util/pipes/currency', ['exports', '@angular/core', '@delon/util/format'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.util = global.delon.util || {}, global.delon.util.pipes = global.delon.util.pipes || {}, global.delon.util.pipes.currency = {}), global.ng.core, global.delon.util.format));
}(this, (function (exports, core, format) { 'use strict';

    var CurrencyMegaPipe = /** @class */ (function () {
        function CurrencyMegaPipe(srv, locale) {
            this.srv = srv;
            this.isCN = false;
            this.isCN = locale.startsWith('zh');
        }
        /**
         * Large number format filter
         *
         * 大数据格式化
         */
        CurrencyMegaPipe.prototype.transform = function (value, options) {
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

    var CurrencyPricePipe = /** @class */ (function () {
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

    var CurrencyCNYPipe = /** @class */ (function () {
        function CurrencyCNYPipe(srv) {
            this.srv = srv;
        }
        /**
         * Converted into RMB notation.
         *
         * 转化成人民币表示法
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
     * Generated bundle index. Do not edit.
     */

    exports.CurrencyMegaPipe = CurrencyMegaPipe;
    exports.CurrencyPipeModule = CurrencyPipeModule;
    exports.CurrencyPricePipe = CurrencyPricePipe;
    exports.ɵa = CurrencyCNYPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=delon-util-pipes-currency.umd.js.map
