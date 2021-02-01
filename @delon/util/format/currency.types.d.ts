export declare type CurrencyStartingUnit = 'yuan' | 'cent';
export interface CurrencyStartingUnitOptions {
    /**
     * Starting unit, default: `yuan`
     *
     * 起始单位，默认：`yuan`
     */
    startingUnit?: CurrencyStartingUnit;
}
export interface CurrencyFormatOptions extends CurrencyStartingUnitOptions {
    /**
     * 精度，默认：`2`
     */
    precision?: number;
}
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
