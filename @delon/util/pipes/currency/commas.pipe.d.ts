import { PipeTransform } from '@angular/core';
import { FormatCurrencyService } from '@delon/util/format';
export declare class CurrencyCommasPipe implements PipeTransform {
    private srv;
    constructor(srv: FormatCurrencyService);
    /**
     * Format a number with commas as thousands separators
     *
     * 用逗号将数字格式化为千位分隔符
     */
    transform(value: number | string, separator?: string): string;
}
