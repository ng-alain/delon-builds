import { PipeTransform } from '@angular/core';
import { CurrencyService } from '@delon/util/format';
export declare class CurrencyMegaPipe implements PipeTransform {
    private srv;
    private isCN;
    constructor(srv: CurrencyService, locale: string);
    /**
     * Large number format filter
     *
     * 大数据格式化
     */
    transform(value: number | string, precision?: number): string;
}
