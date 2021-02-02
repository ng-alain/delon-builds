import { AlainConfigService } from '@delon/util/config';
import { CurrencyCNYOptions, CurrencyFormatOptions, CurrencyMegaOptions, CurrencyMegaResult } from './currency.types';
import * as i0 from "@angular/core";
export declare class CurrencyService {
    private locale;
    private c;
    constructor(cog: AlainConfigService, locale: string);
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
    static ɵfac: i0.ɵɵFactoryDef<CurrencyService, never>;
    static ɵprov: i0.ɵɵInjectableDef<CurrencyService>;
}
