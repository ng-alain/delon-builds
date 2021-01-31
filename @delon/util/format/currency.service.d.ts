import { AlainConfigService } from '@delon/util/config';
import { CurrencyCNYOptions, CurrencyMegaOptions, CurrencyMegaResult } from './currency.types';
export declare class CurrencyService {
    private c;
    constructor(cog: AlainConfigService);
    /**
     * Format a number with commas as thousands separators
     *
     * 用逗号将数字格式化为千位分隔符
     * ```ts
     * 10000 => `10,000`
     * ```
     */
    commas(value: number | string, options?: {
        separator?: string;
    }): string;
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
}
