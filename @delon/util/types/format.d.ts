import { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i0 from '@angular/core';

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
 */
declare function format(str: string | null | undefined, obj: NzSafeAny | null | undefined, needDeepGet?: boolean): string;
interface FormatMaskOption {
    mask: string;
    tokens?: Record<string, FormatMaskToken>;
}
interface FormatMaskToken {
    pattern: RegExp;
    default?: NzSafeAny;
    transform?: (char: string) => string;
}
/**
 * Format mask
 *
 * 格式化掩码
 *
 * | 字符 | 描述 |
 * | --- | --- |
 * | `0` | 任意数字，若该位置字符不符合，则默认为 `0` 填充 |
 * | `9` | 任意数字 |
 * | `#` | 任意字符 |
 * | `U` | 转换大写 |
 * | `L` | 转换小写 |
 * | `*` | 转换为 `*` 字符 |
 *
 * ```ts
 * formatMask('123', '(###)') => (123)
 * formatMask('15900000000', '999****9999') => 159****0000
 * ```
 */
declare function formatMask(value: string, option: string | FormatMaskOption): string;

declare const REGEX_STR: {
    num: string;
    idCard: string;
    mobile: string;
    url: string;
    ip: string;
    color: string;
    chinese: string;
};
declare const REGEX: {
    num: RegExp;
    idCard: RegExp;
    mobile: RegExp;
    url: RegExp;
    ip: RegExp;
    color: RegExp;
    chinese: RegExp;
};
/**
 * Wheter is number
 *
 * 是否为数字
 */
declare function isNum(value: string | number): boolean;
/**
 * Wheter is integer
 *
 * 是否为整数
 */
declare function isInt(value: string | number): boolean;
/**
 * Wheter is decimal
 *
 * 是否为小数点数值
 */
declare function isDecimal(value: string | number): boolean;
/**
 * Wheter is People's Republic of China identity card
 *
 * 是否为中华人民共和国居民身份证
 */
declare function isIdCard(value: string): boolean;
/**
 * Wheter is china mobile (China)
 *
 * 是否为手机号（中国）
 */
declare function isMobile(value: string): boolean;
/**
 * Wheter is url address
 *
 * 是否URL地址
 */
declare function isUrl(url: string): boolean;
/**
 * Wheter is IPv4 address (Support v4, v6)
 *
 * 是否IP4地址（支持v4、v6）
 */
declare function isIp(ip: string): boolean;
/**
 * Wheter is color
 *
 * 是否颜色代码值
 */
declare function isColor(color: string): boolean;
/**
 * Wheter is chinese
 *
 * 是否中文
 */
declare function isChinese(value: string): boolean;

type CurrencyStartingUnit = 'yuan' | 'cent';
interface CurrencyStartingUnitOptions {
    /**
     * The starting unit of the value, `yuan` means 元, `cent` means 分, default: `yuan`
     *
     * 值的起始单位，`yuan` 元，`cent` 分，默认：`yuan`
     */
    startingUnit?: CurrencyStartingUnit;
}
interface CurrencyFormatOptions extends CurrencyStartingUnitOptions {
    /**
     * Using `DEFAULT_CURRENCY_CODE` when value is `true
     *
     * 是否使用 `CurrencyPipe` 来替代
     */
    useAngular?: boolean;
    /**
     * 精度，默认：`2`
     */
    precision?: number;
    /**
     * 是否忽略精度 `.0` 或 `.00` 结尾的字符，默认：`true`
     */
    ingoreZeroPrecision?: boolean;
    /**
     * Use anguar `currency` pipe parse when is set, pls refer to [document](https://angular.io/api/common/CurrencyPipe)
     *
     * 若指定则表示使用 Angular 自带的 `currency` 管道来解析，见[文档](https://angular.cn/api/common/CurrencyPipe)
     */
    ngCurrency?: {
        display: 'code' | 'symbol' | 'symbol-narrow';
        currencyCode?: string;
        digitsInfo?: string;
        locale?: string;
    };
}
/**
 * Large number format filter, [Document](https://ng-alain.com/util/format/en#mega)
 *
 * 大数据格式化，[文档](https://ng-alain.com/util/format/en#mega)
 */
interface CurrencyMegaOptions extends CurrencyStartingUnitOptions {
    /**
     * 精度，默认：`2`
     */
    precision?: number;
    /**
     * 单位国际化，默认：`{Q: '京', T: '兆', B: '亿', M: '万', K: '千',}`
     */
    unitI18n?: CurrencyMegaUnitI18n;
}
interface CurrencyMegaResult {
    raw: number | string;
    value: string;
    unit: string;
    unitI18n: string;
}
declare const CurrencyMega_Powers: {
    unit: string;
    value: number;
}[];
interface CurrencyMegaUnitI18n {
    Q: string;
    T: string;
    B: string;
    M: string;
    K: string;
}
interface CurrencyCNYOptions extends CurrencyStartingUnitOptions {
    /**
     * Whether to return to uppercase notation, default: `true`
     *
     * 是否返回大写表示法，默认：`true`
     */
    inWords?: boolean;
    /**
     * Specify negative sign, default: `negative`
     *
     * 指定负数符号，默认：`负`
     */
    minusSymbol?: string;
}

declare class CurrencyService {
    private readonly locale;
    private readonly defCurrencyCode;
    private readonly cogSrv;
    private c;
    private readonly currencyPipe;
    constructor();
    /**
     * Format a number with commas as thousands separators
     *
     * 格式化货币，用逗号将数字格式化为千位分隔符
     * ```ts
     * 10000 => `10,000`
     * 10000.567 => `10,000.57`
     * ```
     */
    format(value: number | string, options?: CurrencyFormatOptions): string;
    /**
     * Large number format filter
     *
     * 大数据格式化
     * ```ts
     * 1000 => { value: '1', unit: 'K', unitI18n: '千' }
     * 12456 => { value: '12.46', unit: 'K', unitI18n: '千' }
     * ```
     */
    mega(value: number | string, options?: CurrencyMegaOptions): CurrencyMegaResult;
    /**
     * Converted into RMB notation.
     *
     * 转化成人民币表示法
     */
    cny(value: number | string, options?: CurrencyCNYOptions): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CurrencyService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CurrencyService>;
}

export { CurrencyMega_Powers, CurrencyService, REGEX, REGEX_STR, format, formatMask, isChinese, isColor, isDecimal, isIdCard, isInt, isIp, isMobile, isNum, isUrl };
export type { CurrencyCNYOptions, CurrencyFormatOptions, CurrencyMegaOptions, CurrencyMegaResult, CurrencyMegaUnitI18n, CurrencyStartingUnit, CurrencyStartingUnitOptions, FormatMaskOption, FormatMaskToken };
