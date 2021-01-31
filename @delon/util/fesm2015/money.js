import { deepGet } from '@delon/util/other';
import { Injectable, ɵɵdefineInjectable, ɵɵinject } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';

/**
 * @fileoverview added by tsickle
 * Generated from: string.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * String formatting
 *
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
/** @type {?} */
const REGEX_STR = {
    num: `((-?\\d+\\.\\d+)|(-?\\d+)|(-?\\.\\d+))`,
    idCard: `(^\\d{15}$)|(^\\d{17}(?:[0-9]|X)$)`,
    mobile: `(0|\\+?86|17951)?(13[0-9]|15[0-9]|17[0678]|18[0-9]|14[57])[0-9]{8}`,
    url: `(((^https?:(?:\/\/)?)(?:[-;:&=\\+\\$,\\w]+@)?[A-Za-z0-9.-]+(?::\\d+)?|(?:www.|[-;:&=\\+\\$,\\w]+@)[A-Za-z0-9.-]+)((?:\/[\\+~%\\/.\\w-_]*)?\\??(?:[-\\+=&;%@.\\w_]*)#?(?:[\\w]*))?)`,
    ip: `(?:^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$)|(?:^(?:(?:[a-fA-F\\d]{1,4}:){7}(?:[a-fA-F\\d]{1,4}|:)|(?:[a-fA-F\\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|:[a-fA-F\\d]{1,4}|:)|(?:[a-fA-F\\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,2}|:)|(?:[a-fA-F\\d]{1,4}:){4}(?:(?::[a-fA-F\\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,3}|:)|(?:[a-fA-F\\d]{1,4}:){3}(?:(?::[a-fA-F\\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,4}|:)|(?:[a-fA-F\\d]{1,4}:){2}(?:(?::[a-fA-F\\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,5}|:)|(?:[a-fA-F\\d]{1,4}:){1}(?:(?::[a-fA-F\\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,6}|:)|(?::(?:(?::[a-fA-F\\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,7}|:)))(?:%[0-9a-zA-Z]{1,})?$)`,
    color: `(?:#|0x)(?:[a-f0-9]{3}|[a-f0-9]{6})\\b|(?:rgb|hsl)a?\\([^\\)]*\\)`,
    chinese: `[\u4e00-\u9fa5]+`,
};
/**
 * @param {?} str
 * @param {?=} flags
 * @return {?}
 */
function genRegex(str, flags) {
    return new RegExp(`^${str}$`, flags);
}
/** @type {?} */
const REGEX = {
    num: genRegex(REGEX_STR.num),
    idCard: genRegex(REGEX_STR.idCard, 'i'),
    mobile: genRegex(REGEX_STR.mobile),
    url: genRegex(REGEX_STR.url),
    ip: genRegex(REGEX_STR.ip),
    color: genRegex(REGEX_STR.color),
    chinese: genRegex(REGEX_STR.chinese),
};
/**
 * Wheter is number
 *
 * 是否为数字
 * @param {?} value
 * @return {?}
 */
function isNum(value) {
    return REGEX.num.test(value.toString());
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
    return REGEX.idCard.test(value);
}
/**
 * Wheter is china mobile (China)
 *
 * 是否为手机号（中国）
 * @param {?} value
 * @return {?}
 */
function isMobile(value) {
    return REGEX.mobile.test(value);
}
/**
 * Wheter is url address
 *
 * 是否URL地址
 * @param {?} url
 * @return {?}
 */
function isUrl(url) {
    return REGEX.url.test(url);
}
/**
 * Wheter is IPv4 address (Support v4, v6)
 *
 * 是否IP4地址（支持v4、v6）
 * @param {?} ip
 * @return {?}
 */
function isIp(ip) {
    return REGEX.ip.test(ip);
}
/**
 * Wheter is color
 *
 * 是否颜色代码值
 * @param {?} color
 * @return {?}
 */
function isColor(color) {
    return REGEX.color.test(color);
}
/**
 * Wheter is chinese
 *
 * 是否中文
 * @param {?} value
 * @return {?}
 */
function isChinese(value) {
    return REGEX.chinese.test(value);
}

/**
 * @fileoverview added by tsickle
 * Generated from: currency.types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function CurrencyMegaOptions() { }
if (false) {
    /**
     * 精度，默认：`2`
     * @type {?|undefined}
     */
    CurrencyMegaOptions.prototype.precision;
    /**
     * 单位国际化，默认：`{Q: '京', T: '兆', B: '亿', M: '万', K: '千',}`
     * @type {?|undefined}
     */
    CurrencyMegaOptions.prototype.unitI18n;
}
/**
 * @record
 */
function CurrencyMegaResult() { }
if (false) {
    /** @type {?} */
    CurrencyMegaResult.prototype.raw;
    /** @type {?} */
    CurrencyMegaResult.prototype.value;
    /** @type {?} */
    CurrencyMegaResult.prototype.unit;
    /** @type {?} */
    CurrencyMegaResult.prototype.unitI18n;
}
/** @type {?} */
const CurrencyMega_Powers = [
    { unit: 'Q', value: Math.pow(10, 15) },
    { unit: 'T', value: Math.pow(10, 12) },
    { unit: 'B', value: Math.pow(10, 9) },
    { unit: 'M', value: Math.pow(10, 6) },
    { unit: 'K', value: 1000 },
];
/**
 * @record
 */
function CurrencyMegaUnitI18n() { }
if (false) {
    /** @type {?} */
    CurrencyMegaUnitI18n.prototype.Q;
    /** @type {?} */
    CurrencyMegaUnitI18n.prototype.T;
    /** @type {?} */
    CurrencyMegaUnitI18n.prototype.B;
    /** @type {?} */
    CurrencyMegaUnitI18n.prototype.M;
    /** @type {?} */
    CurrencyMegaUnitI18n.prototype.K;
}
/**
 * @record
 */
function CurrencyCNYOptions() { }
if (false) {
    /**
     * Whether to return to uppercase notation, default: `true`
     *
     * 是否返回大写表示法，默认：`true`
     * @type {?|undefined}
     */
    CurrencyCNYOptions.prototype.inWords;
    /**
     * Specify negative sign, default: `negative`
     *
     * 指定负数符号，默认：`负`
     * @type {?|undefined}
     */
    CurrencyCNYOptions.prototype.minusSymbol;
    /**
     * Throws an exception when the passed value is invalid. Default: `false`
     *
     * 当传递值无效数值时抛出异常，默认：`false`
     * @type {?|undefined}
     */
    CurrencyCNYOptions.prototype.validThrow;
}

/**
 * @fileoverview added by tsickle
 * Generated from: currency.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CurrencyService {
    /**
     * @param {?} cog
     */
    constructor(cog) {
        this.c = (/** @type {?} */ (cog.merge('utilFormat', {})));
    }
    /**
     * Format a number with commas as thousands separators
     *
     * 用逗号将数字格式化为千位分隔符
     * ```ts
     * 10000 => `10,000`
     * ```
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    commas(value, options) {
        var _a;
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, (_a = options === null || options === void 0 ? void 0 : options.separator) !== null && _a !== void 0 ? _a : ',');
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
     * @param {?=} options
     * @return {?}
     */
    mega(value, options) {
        options = Object.assign(Object.assign({ precision: 2, unitI18n: { Q: '京', T: '兆', B: '亿', M: '万', K: '千' } }, this.c.currencyMegaUnit), options);
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
        const rounder = Math.pow(10, (/** @type {?} */ (options.precision)));
        /** @type {?} */
        const isNegative = num < 0;
        for (const p of CurrencyMega_Powers) {
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
        res.unitI18n = ((/** @type {?} */ (options.unitI18n)))[res.unit];
        return res;
    }
    /**
     * Converted into RMB notation.
     *
     * 转化成人民币表示法
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    cny(value, options) {
        options = Object.assign({ inWords: true, minusSymbol: '负', validThrow: false }, options);
        if (typeof value === 'number') {
            value = value.toString();
        }
        if (!/^-?\d+(\.\d+)?$/.test(value) && options.validThrow) {
            throw new Error(`${value} is invalid number type`);
        }
        /** @type {?} */
        let integer;
        /** @type {?} */
        let decimal;
        [integer, decimal] = value.split('.');
        /** @type {?} */
        let symbol = '';
        if (integer.startsWith('-')) {
            symbol = (/** @type {?} */ (options.minusSymbol));
            integer = integer.substr(1);
        }
        if (/^-?\d+$/.test(value)) {
            decimal = null;
        }
        integer = (+integer).toString();
        /** @type {?} */
        const inWords = options.inWords;
        /** @type {?} */
        const unit = {
            num: inWords
                ? ['', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖', '点']
                : ['', '一', '二', '三', '四', '五', '六', '七', '八', '九', '点'],
            radice: inWords
                ? ['', '拾', '佰', '仟', '万', '拾', '佰', '仟', '亿', '拾', '佰', '仟', '万亿', '拾', '佰', '仟', '兆', '拾', '佰', '仟']
                : ['', '十', '百', '千', '万', '十', '百', '千', '亿', '十', '百', '千', '万亿', '十', '百', '千', '兆', '十', '百', '千'],
            dec: ['角', '分', '厘', '毫'],
        };
        if (inWords) {
            value = (+value).toFixed(5).toString();
        }
        /** @type {?} */
        let integerRes = '';
        /** @type {?} */
        const integerCount = integer.length;
        if (integer === '0' || integerCount === 0) {
            integerRes = '零';
        }
        else {
            /** @type {?} */
            let cnDesc = '';
            for (let i = 0; i < integerCount; i++) {
                /** @type {?} */
                const n = +integer[i];
                /** @type {?} */
                const j = integerCount - i - 1;
                /** @type {?} */
                const isZero = i > 1 && n !== 0 && integer[i - 1] === '0';
                /** @type {?} */
                const cnZero = isZero ? '零' : '';
                /** @type {?} */
                const isEmpptyUnit = (n === 0 && j % 4 !== 0) || integer.substr(i - 3, 4) === '0000';
                /** @type {?} */
                const descMark = cnDesc;
                /** @type {?} */
                let cnNum = unit.num[n];
                cnDesc = isEmpptyUnit ? '' : unit.radice[j];
                // 第一位是一十
                if (i === 0 && cnNum === '一' && cnDesc === '十')
                    cnNum = '';
                /** @type {?} */
                const isChangeEr = n > 1 &&
                    cnNum === '二' && // 去除首位
                    ['', '十', '百'].indexOf(cnDesc) === -1 && // 不读两\两十\两百
                    descMark !== '十';
                if (isChangeEr)
                    cnNum = '两';
                integerRes += cnZero + cnNum + cnDesc;
            }
        }
        // 小数部分拼接
        /** @type {?} */
        let decimalRes = '';
        /** @type {?} */
        const decimalCount = decimal ? decimal.toString().length : 0;
        if (decimal === null) {
            decimalRes = inWords ? '整' : '';
        }
        else if (decimal === '0') {
            decimalRes = '零';
        }
        else {
            for (let i = 0; i < decimalCount; i++) {
                if (inWords && i > unit.dec.length - 1)
                    break;
                /** @type {?} */
                const n = decimal[i];
                /** @type {?} */
                const cnZero = n === '0' ? '零' : '';
                /** @type {?} */
                const cnNum = unit.num[+n];
                /** @type {?} */
                const cnDesc = inWords ? unit.dec[i] : '';
                decimalRes += cnZero + cnNum + cnDesc;
            }
        }
        /** @type {?} */
        const ret = symbol +
            (inWords
                ? integerRes + (decimalRes === '零' ? '元整' : `元${decimalRes}`)
                : integerRes + (decimalRes === '' ? '' : `点${decimalRes}`));
        return ret;
    }
}
CurrencyService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
CurrencyService.ctorParameters = () => [
    { type: AlainConfigService }
];
/** @nocollapse */ CurrencyService.ɵprov = ɵɵdefineInjectable({ factory: function CurrencyService_Factory() { return new CurrencyService(ɵɵinject(AlainConfigService)); }, token: CurrencyService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    CurrencyService.prototype.c;
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

export { CurrencyMega_Powers, CurrencyService, REGEX, REGEX_STR, format, isChinese, isColor, isDecimal, isIdCard, isInt, isIp, isMobile, isNum, isUrl };
//# sourceMappingURL=money.js.map
