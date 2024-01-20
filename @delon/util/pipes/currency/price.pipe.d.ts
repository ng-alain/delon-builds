import { PipeTransform } from '@angular/core';
import { CurrencyFormatOptions } from '@delon/util/format';
import * as i0 from "@angular/core";
/**
 * Format a number with commas as thousands separators
 *
 * 格式化货币，用逗号将数字格式化为千位分隔符
 * ```ts
 * 10000 => `10,000`
 * 10000.567 => `10,000.57`
 * ```
 */
export declare class CurrencyPricePipe implements PipeTransform {
    private readonly srv;
    transform(value: number | string, options?: CurrencyFormatOptions): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CurrencyPricePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<CurrencyPricePipe, "price", true>;
}
