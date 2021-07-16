/**
 * @license ng-alain(cipchk@qq.com) v12.0.0
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@delon/util/format')) :
    typeof define === 'function' && define.amd ? define('@delon/util/form', ['exports', '@delon/util/format'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.util = global.delon.util || {}, global.delon.util.form = {}), global.delon.util.format));
}(this, (function (exports, format) { 'use strict';

    /**
     * A set of validators for reactive forms
     *
     * 一套用于响应式表单的验证器
     */
    var _Validators = /** @class */ (function () {
        function _Validators() {
        }
        /**
         * Wheter is number
         *
         * 是否为数字
         */
        _Validators.num = function (control) {
            return format.isNum(control.value) ? null : { num: true };
        };
        /**
         * Wheter is integer
         *
         * 是否为整数
         */
        _Validators.int = function (control) {
            return format.isInt(control.value) ? null : { int: true };
        };
        /**
         * Wheter is decimal
         *
         * 是否为小数点数值
         */
        _Validators.decimal = function (control) {
            return format.isDecimal(control.value) ? null : { decimal: true };
        };
        /**
         * Wheter is People's Republic of China identity card
         *
         * 是否为中华人民共和国居民身份证
         */
        _Validators.idCard = function (control) {
            return format.isIdCard(control.value) ? null : { idCard: true };
        };
        /**
         * Wheter is china mobile (China)
         *
         * 是否为手机号（中国）
         */
        _Validators.mobile = function (control) {
            return format.isMobile(control.value) ? null : { mobile: true };
        };
        /**
         * Wheter is url address
         *
         * 是否URL地址
         */
        _Validators.url = function (control) {
            return format.isUrl(control.value) ? null : { url: true };
        };
        /**
         * Wheter is IPv4 address (Support v4, v6)
         *
         * 是否IP4地址（支持v4、v6）
         */
        _Validators.ip = function (control) {
            return format.isIp(control.value) ? null : { ip: true };
        };
        /**
         * Wheter is color
         *
         * 是否颜色代码值
         */
        _Validators.color = function (control) {
            return format.isColor(control.value) ? null : { color: true };
        };
        /**
         * Wheter is chinese
         *
         * 是否中文
         */
        _Validators.chinese = function (control) {
            return format.isChinese(control.value) ? null : { chinese: true };
        };
        return _Validators;
    }());

    /**
     * Match two control values
     *
     * 匹配两个控件值
     * ```ts
     * this.form = new FormGroup({
     *  pwd: new FormControl(''),
     *  repwd: new FormControl(''),
     * }, {
     *  validators: MatchControl('pwd', 'repwd'),
     * });
     * ```
     */
    function MatchControl(controlName, matchingControlName) {
        return function (formGroup) {
            var control = formGroup.get(controlName);
            var matchingControl = formGroup.get(matchingControlName);
            if (matchingControl.errors && !matchingControl.errors.matchControl) {
                return null;
            }
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ matchControl: true });
            }
            else {
                matchingControl.setErrors(null);
            }
            return null;
        };
    }

    /**
     * Generated bundle index. Do not edit.
     */

    exports.MatchControl = MatchControl;
    exports._Validators = _Validators;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=delon-util-form.umd.js.map
