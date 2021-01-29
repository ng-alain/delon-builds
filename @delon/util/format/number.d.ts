/**
 * Format a number with commas as thousands separators
 *
 * 用逗号将数字格式化为千位分隔符
 * ```ts
 * 10000 => `10,000`
 * ```
 */
export declare function commasNumber(value: number | string, separator?: string): string;
export declare const MEGA_POWERS: {
    unit: string;
    value: number;
}[];
export interface MegaNumberUnitI18n {
    Q: string;
    T: string;
    B: string;
    M: string;
    K: string;
}
export interface MegaNumberResult {
    raw: number | string;
    value: string;
    unit: string;
    unitI18n: string;
}
/**
 * Large number format filter
 *
 * 大数据格式化
 * ```ts
 * 1000 => { value: '1', unit: 'K', unitI18n: '千' }
 * 12456 => { value: '12.46', unit: 'K', unitI18n: '千' }
 * ```
 */
export declare function megaNumber(value: number | string, precision?: number, unitI18n?: MegaNumberUnitI18n): MegaNumberResult;
