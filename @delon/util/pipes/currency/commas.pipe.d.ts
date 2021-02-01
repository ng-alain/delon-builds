import { PipeTransform } from '@angular/core';
import { CurrencyCommasOptions, CurrencyService } from '@delon/util/format';
export declare class CurrencyCommasPipe implements PipeTransform {
    private srv;
    constructor(srv: CurrencyService);
    /**
     * Format a number with commas as thousands separators
     *
     * 用逗号将数字格式化为千位分隔符
     */
    transform(value: number | string, options?: CurrencyCommasOptions): string;
}
