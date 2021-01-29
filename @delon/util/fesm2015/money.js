import { deepGet } from '@delon/util/other';

/**
 * @fileoverview added by tsickle
 * Generated from: string.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * 字符串格式化
 * ```
 * format('this is ${name}', { name: 'asdf' })
 * // output: this is asdf
 * format('this is ${user.name}', { user: { name: 'asdf' } }, true)
 * // output: this is asdf
 * ```
 * @param {?} str
 * @param {?} obj
 * @param {?=} needDeepGet
 * @return {?}
 */
function format(str, obj, needDeepGet = false) {
    return (str || '').replace(/\${([^}]+)}/g, (/**
     * @param {?} _work
     * @param {?} key
     * @return {?}
     */
    (_work, key) => needDeepGet ? deepGet(obj, key.split('.'), '') : (obj || {})[key] || ''));
}

/**
 * @fileoverview added by tsickle
 * Generated from: validate.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Wheter is number
 *
 * 是否为数字
 * @param {?} value
 * @return {?}
 */
function isNum(value) {
    return /^((-?\d+\.\d+)|(-?\d+)|(-?\.\d+))$/.test(value.toString());
}
/**
 * Wheter is integer
 *
 * 是否为整数
 * @param {?} value
 * @return {?}
 */
function isInt(value) {
    return isNum(value) && parseInt(value.toString(), 10).toString() === value.toString();
}
/**
 * Wheter is decimal
 *
 * 是否为小数点数值
 * @param {?} value
 * @return {?}
 */
function isDecimal(value) {
    return isNum(value) && !isInt(value);
}
/**
 * Wheter is People's Republic of China identity card
 *
 * 是否为中华人民共和国居民身份证
 * @param {?} value
 * @return {?}
 */
function isIdCard(value) {
    return typeof value === 'string' && /(^\d{15}$)|(^\d{17}([0-9]|X)$)/i.test(value);
}
/**
 * Wheter is china mobile (China)
 *
 * 是否为手机号（中国）
 * @param {?} value
 * @return {?}
 */
function isMobile(value) {
    return typeof value === 'string' && /^(0|\+?86|17951)?(13[0-9]|15[0-9]|17[0678]|18[0-9]|14[57])[0-9]{8}$/.test(value);
}
/**
 * Wheter is url address
 *
 * 是否URL地址
 * @param {?} url
 * @return {?}
 */
function isUrl(url) {
    return /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/.test(url);
}

/**
 * @fileoverview added by tsickle
 * Generated from: number.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Format a number with commas as thousands separators
 *
 * 用逗号将数字格式化为千位分隔符
 * ```ts
 * 10000 => `10,000`
 * ```
 * @param {?} value
 * @param {?=} separator
 * @return {?}
 */
function commasNumber(value, separator = ',') {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}
/** @type {?} */
const MEGA_POWERS = [
    { unit: 'Q', value: Math.pow(10, 15) },
    { unit: 'T', value: Math.pow(10, 12) },
    { unit: 'B', value: Math.pow(10, 9) },
    { unit: 'M', value: Math.pow(10, 6) },
    { unit: 'K', value: 1000 },
];
/**
 * @record
 */
function MegaNumberUnitI18n() { }
if (false) {
    /** @type {?} */
    MegaNumberUnitI18n.prototype.Q;
    /** @type {?} */
    MegaNumberUnitI18n.prototype.T;
    /** @type {?} */
    MegaNumberUnitI18n.prototype.B;
    /** @type {?} */
    MegaNumberUnitI18n.prototype.M;
    /** @type {?} */
    MegaNumberUnitI18n.prototype.K;
}
/**
 * @record
 */
function MegaNumberResult() { }
if (false) {
    /** @type {?} */
    MegaNumberResult.prototype.raw;
    /** @type {?} */
    MegaNumberResult.prototype.value;
    /** @type {?} */
    MegaNumberResult.prototype.unit;
    /** @type {?} */
    MegaNumberResult.prototype.unitI18n;
}
/**
 * Large number format filter
 *
 * 大数据格式化
 * ```ts
 * 1000 => { value: '1', unit: 'K', unitI18n: '千' }
 * 12456 => { value: '12.46', unit: 'K', unitI18n: '千' }
 * ```
 * @param {?} value
 * @param {?=} precision
 * @param {?=} unitI18n
 * @return {?}
 */
function megaNumber(value, precision = 2, unitI18n = { Q: '京', T: '兆', B: '亿', M: '万', K: '千' }) {
    /** @type {?} */
    const num = parseFloat(value.toString());
    /** @type {?} */
    const res = { raw: value, value: '', unit: '', unitI18n: '' };
    if (isNaN(num) || num === 0) {
        res.value = value.toString();
        return res;
    }
    /** @type {?} */
    let abs = Math.abs(+value);
    /** @type {?} */
    const rounder = Math.pow(10, (/** @type {?} */ (precision)));
    /** @type {?} */
    const isNegative = num < 0;
    for (const p of MEGA_POWERS) {
        /** @type {?} */
        let reduced = abs / p.value;
        reduced = Math.round(reduced * rounder) / rounder;
        if (reduced >= 1) {
            abs = reduced;
            res.unit = p.unit;
            break;
        }
    }
    res.value = (isNegative ? '-' : '') + abs;
    res.unitI18n = ((/** @type {?} */ (unitI18n)))[res.unit];
    return res;
}

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: money.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MEGA_POWERS, commasNumber, format, isDecimal, isIdCard, isInt, isMobile, isNum, isUrl, megaNumber };
//# sourceMappingURL=money.js.map
