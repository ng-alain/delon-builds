/**
 * @license ng-alain(cipchk@qq.com) v11.3.1
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@delon/util/format')) :
    typeof define === 'function' && define.amd ? define('@delon/util/form', ['exports', '@delon/util/format'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.util = global.delon.util || {}, global.delon.util.form = {}), global.delon.util.format));
}(this, (function (exports, format) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: validators.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * A set of validators for reactive forms
     *
     * 一套用于响应式表单的验证器
     */
    // tslint:disable-next-line:class-name
    var _Validators = /** @class */ (function () {
        function _Validators() {
        }
        /**
         * Wheter is number
         *
         * 是否为数字
         * @param {?} control
         * @return {?}
         */
        _Validators.num = function (control) {
            return format.isNum(control.value) ? null : { num: true };
        };
        /**
         * Wheter is integer
         *
         * 是否为整数
         * @param {?} control
         * @return {?}
         */
        _Validators.int = function (control) {
            return format.isInt(control.value) ? null : { int: true };
        };
        /**
         * Wheter is decimal
         *
         * 是否为小数点数值
         * @param {?} control
         * @return {?}
         */
        _Validators.decimal = function (control) {
            return format.isDecimal(control.value) ? null : { decimal: true };
        };
        /**
         * Wheter is People's Republic of China identity card
         *
         * 是否为中华人民共和国居民身份证
         * @param {?} control
         * @return {?}
         */
        _Validators.idCard = function (control) {
            return format.isIdCard(control.value) ? null : { idCard: true };
        };
        /**
         * Wheter is china mobile (China)
         *
         * 是否为手机号（中国）
         * @param {?} control
         * @return {?}
         */
        _Validators.mobile = function (control) {
            return format.isMobile(control.value) ? null : { mobile: true };
        };
        /**
         * Wheter is url address
         *
         * 是否URL地址
         * @param {?} control
         * @return {?}
         */
        _Validators.url = function (control) {
            return format.isUrl(control.value) ? null : { url: true };
        };
        /**
         * Wheter is IPv4 address (Support v4, v6)
         *
         * 是否IP4地址（支持v4、v6）
         * @param {?} control
         * @return {?}
         */
        _Validators.ip = function (control) {
            return format.isIp(control.value) ? null : { ip: true };
        };
        /**
         * Wheter is color
         *
         * 是否颜色代码值
         * @param {?} control
         * @return {?}
         */
        _Validators.color = function (control) {
            return format.isColor(control.value) ? null : { color: true };
        };
        /**
         * Wheter is chinese
         *
         * 是否中文
         * @param {?} control
         * @return {?}
         */
        _Validators.chinese = function (control) {
            return format.isChinese(control.value) ? null : { chinese: true };
        };
        return _Validators;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: public_api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: forms.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports._Validators = _Validators;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=forms.umd.js.map
