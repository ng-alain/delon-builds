import { isNum, isInt, isDecimal, isIdCard, isMobile, isUrl } from '@delon/util/format';

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
class _Validators {
    /**
     * Wheter is number
     *
     * 是否为数字
     * @param {?} control
     * @return {?}
     */
    static num(control) {
        return isNum(control.value) ? null : { num: true };
    }
    /**
     * Wheter is integer
     *
     * 是否为整数
     * @param {?} control
     * @return {?}
     */
    static int(control) {
        return isInt(control.value) ? null : { int: true };
    }
    /**
     * Wheter is decimal
     *
     * 是否为小数点数值
     * @param {?} control
     * @return {?}
     */
    static decimal(control) {
        return isDecimal(control.value) ? null : { decimal: true };
    }
    /**
     * Wheter is People's Republic of China identity card
     *
     * 是否为中华人民共和国居民身份证
     * @param {?} control
     * @return {?}
     */
    static idCard(control) {
        return isIdCard(control.value) ? null : { idCard: true };
    }
    /**
     * Wheter is china mobile (China)
     *
     * 是否为手机号（中国）
     * @param {?} control
     * @return {?}
     */
    static mobile(control) {
        return isMobile(control.value) ? null : { mobile: true };
    }
    /**
     * Wheter is url address
     *
     * 是否URL地址
     * @param {?} control
     * @return {?}
     */
    static url(control) {
        return isUrl(control.value) ? null : { url: true };
    }
}

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

export { _Validators };
//# sourceMappingURL=forms.js.map
