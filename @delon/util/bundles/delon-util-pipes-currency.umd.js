/**
 * @license ng-alain(cipchk@qq.com) v11.3.1
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/util/format')) :
    typeof define === 'function' && define.amd ? define('@delon/util/pipes/currency', ['exports', '@angular/core', '@delon/util/format'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.util = global.delon.util || {}, global.delon.util.pipes = global.delon.util.pipes || {}, global.delon.util.pipes.currency = {}), global.ng.core, global.delon.util.format));
}(this, (function (exports, i0, i1) { 'use strict';

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
    /** @nocollapse */ CurrencyMegaPipe.ɵfac = function CurrencyMegaPipe_Factory(t) { return new (t || CurrencyMegaPipe)(i0.ɵɵdirectiveInject(i1.CurrencyService), i0.ɵɵdirectiveInject(i0.LOCALE_ID)); };
    /** @nocollapse */ CurrencyMegaPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "mega", type: CurrencyMegaPipe, pure: true });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CurrencyMegaPipe, [{
                type: i0.Pipe,
                args: [{ name: 'mega' }]
            }], function () {
            return [{ type: i1.CurrencyService }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i0.LOCALE_ID]
                        }] }];
        }, null);
    })();

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
    /** @nocollapse */ CurrencyPricePipe.ɵfac = function CurrencyPricePipe_Factory(t) { return new (t || CurrencyPricePipe)(i0.ɵɵdirectiveInject(i1.CurrencyService)); };
    /** @nocollapse */ CurrencyPricePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "price", type: CurrencyPricePipe, pure: true });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CurrencyPricePipe, [{
                type: i0.Pipe,
                args: [{ name: 'price' }]
            }], function () { return [{ type: i1.CurrencyService }]; }, null);
    })();

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
    /** @nocollapse */ CurrencyCNYPipe.ɵfac = function CurrencyCNYPipe_Factory(t) { return new (t || CurrencyCNYPipe)(i0.ɵɵdirectiveInject(i1.CurrencyService)); };
    /** @nocollapse */ CurrencyCNYPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "cny", type: CurrencyCNYPipe, pure: true });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CurrencyCNYPipe, [{
                type: i0.Pipe,
                args: [{ name: 'cny' }]
            }], function () { return [{ type: i1.CurrencyService }]; }, null);
    })();

    var PIPES = [CurrencyMegaPipe, CurrencyPricePipe, CurrencyCNYPipe];
    var CurrencyPipeModule = /** @class */ (function () {
        function CurrencyPipeModule() {
        }
        return CurrencyPipeModule;
    }());
    /** @nocollapse */ CurrencyPipeModule.ɵmod = i0.ɵɵdefineNgModule({ type: CurrencyPipeModule });
    /** @nocollapse */ CurrencyPipeModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CurrencyPipeModule_Factory(t) { return new (t || CurrencyPipeModule)(); } });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CurrencyPipeModule, { declarations: [CurrencyMegaPipe, CurrencyPricePipe, CurrencyCNYPipe], exports: [CurrencyMegaPipe, CurrencyPricePipe, CurrencyCNYPipe] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CurrencyPipeModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: PIPES,
                        exports: PIPES,
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CurrencyCNYPipe = CurrencyCNYPipe;
    exports.CurrencyMegaPipe = CurrencyMegaPipe;
    exports.CurrencyPipeModule = CurrencyPipeModule;
    exports.CurrencyPricePipe = CurrencyPricePipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=delon-util-pipes-currency.umd.js.map
