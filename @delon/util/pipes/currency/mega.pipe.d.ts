import { PipeTransform } from '@angular/core';
import { CurrencyMegaOptions } from '@delon/util/format';
import * as i0 from "@angular/core";
/**
 * Large number format filter
 *
 * 大数据格式化
 */
export declare class CurrencyMegaPipe implements PipeTransform {
    private readonly srv;
    private isCN;
    transform(value: number | string, options?: CurrencyMegaOptions): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CurrencyMegaPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<CurrencyMegaPipe, "mega", true>;
}
