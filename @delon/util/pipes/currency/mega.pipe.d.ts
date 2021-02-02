import { PipeTransform } from '@angular/core';
import { CurrencyMegaOptions, CurrencyService } from '@delon/util/format';
import * as i0 from "@angular/core";
export declare class CurrencyMegaPipe implements PipeTransform {
    private srv;
    private isCN;
    constructor(srv: CurrencyService, locale: string);
    /**
     * Large number format filter
     *
     * 大数据格式化
     */
    transform(value: number | string, options?: CurrencyMegaOptions): string;
    static ɵfac: i0.ɵɵFactoryDef<CurrencyMegaPipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<CurrencyMegaPipe, "mega">;
}
