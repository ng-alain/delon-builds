export interface FormatCurrencyMegaOptions {
    /**
     * 精度，默认：`2`
     */
    precision?: number;
    /**
     * 单位国际化，默认：`{Q: '京', T: '兆', B: '亿', M: '万', K: '千',}`
     */
    unitI18n?: FormatCurrencyMegaUnitI18n;
}
export interface FormatCurrencyMegaResult {
    raw: number | string;
    value: string;
    unit: string;
    unitI18n: string;
}
export declare const FormatCurrencyMega_Powers: {
    unit: string;
    value: number;
}[];
export interface FormatCurrencyMegaUnitI18n {
    Q: string;
    T: string;
    B: string;
    M: string;
    K: string;
}
