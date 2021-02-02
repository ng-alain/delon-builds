import { PipeTransform } from '@angular/core';
import { CurrencyCNYOptions, CurrencyService } from '@delon/util/format';
import * as i0 from "@angular/core";
export declare class CurrencyCNYPipe implements PipeTransform {
    private srv;
    constructor(srv: CurrencyService);
    /**
     * Converted into RMB notation.
     *
     * 转化成人民币表示法
     */
    transform(value: number | string, options?: CurrencyCNYOptions): string;
    static ɵfac: i0.ɵɵFactoryDef<CurrencyCNYPipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<CurrencyCNYPipe, "cny">;
}
