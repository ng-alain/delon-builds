/**
 * @license ng-alain(cipchk@qq.com) v11.3.1
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/util/format')) :
    typeof define === 'function' && define.amd ? define('@delon/util/pipes/format-number', ['exports', '@angular/core', '@delon/util/format'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.util = global.delon.util || {}, global.delon.util.pipes = global.delon.util.pipes || {}, global.delon.util.pipes['format-number'] = {}), global.ng.core, global.delon.util.format));
}(this, (function (exports, core, format) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: mega.pipe.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MegaNumberPipe = /** @class */ (function () {
        /**
         * @param {?} locale
         */
        function MegaNumberPipe(locale) {
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
        MegaNumberPipe.prototype.transform = function (value, precision) {
            if (precision === void 0) { precision = 2; }
            /** @type {?} */
            var res = format.megaNumber(value, precision);
            return res.value + (this.isCN ? res.unitI18n : res.unit);
        };
        return MegaNumberPipe;
    }());
    MegaNumberPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'megaNumber' },] }
    ];
    /** @nocollapse */
    MegaNumberPipe.ctorParameters = function () { return [
        { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] }
    ]; };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        MegaNumberPipe.prototype.isCN;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: commas.pipe.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CommasNumberPipe = /** @class */ (function () {
        function CommasNumberPipe() {
        }
        /**
         * Format a number with commas as thousands separators
         *
         * 用逗号将数字格式化为千位分隔符
         * @param {?} value
         * @param {?=} separator
         * @return {?}
         */
        CommasNumberPipe.prototype.transform = function (value, separator) {
            if (separator === void 0) { separator = ','; }
            return format.commasNumber(value, separator);
        };
        return CommasNumberPipe;
    }());
    CommasNumberPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'commasNumber' },] }
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var PIPES = [MegaNumberPipe, CommasNumberPipe];
    var FormatNumberPipeModule = /** @class */ (function () {
        function FormatNumberPipeModule() {
        }
        return FormatNumberPipeModule;
    }());
    FormatNumberPipeModule.decorators = [
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

    exports.CommasNumberPipe = CommasNumberPipe;
    exports.FormatNumberPipeModule = FormatNumberPipeModule;
    exports.MegaNumberPipe = MegaNumberPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=format-number.umd.js.map
