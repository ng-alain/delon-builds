import { NumberToChineseOptions } from './number-to-chinese.interfaces';
/**
 * @deprecated Will be removed in 12.0.0, Pls used `CurrencyService.cny` instead
 */
export declare function numberToChinese(value: number | string, rmb?: boolean, options?: NumberToChineseOptions): string;
