export type CurrencyStartingUnit = 'yuan' | 'cent';
export interface CurrencyStartingUnitOptions {
    /**
     * The starting unit of the value, `yuan` means 元, `cent` means 分, default: `yuan`
     *
     * 值的起始单位，`yuan` 元，`cent` 分，默认：`yuan`
     */
    startingUnit?: CurrencyStartingUnit;
}
export interface CurrencyFormatOptions extends CurrencyStartingUnitOptions {
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
export interface CurrencyMegaOptions extends CurrencyStartingUnitOptions {
    /**
     * 精度，默认：`2`
     */
    precision?: number;
    /**
     * 单位国际化，默认：`{Q: '京', T: '兆', B: '亿', M: '万', K: '千',}`
     */
    unitI18n?: CurrencyMegaUnitI18n;
}
export interface CurrencyMegaResult {
    raw: number | string;
    value: string;
    unit: string;
    unitI18n: string;
}
export declare const CurrencyMega_Powers: {
    unit: string;
    value: number;
}[];
export interface CurrencyMegaUnitI18n {
    Q: string;
    T: string;
    B: string;
    M: string;
    K: string;
}
export interface CurrencyCNYOptions extends CurrencyStartingUnitOptions {
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
