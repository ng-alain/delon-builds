import { PipeTransform } from '@angular/core';
import { CurrencyCNYOptions, CurrencyService } from '@delon/util/format';
export declare class CurrencyCNYPipe implements PipeTransform {
    private srv;
    constructor(srv: CurrencyService);
    /**
     * Converted into RMB notation.
     *
     * 转化成人民币表示法
     */
    transform(value: number | string, options?: CurrencyCNYOptions): string;
}
