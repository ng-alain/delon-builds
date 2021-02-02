import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
/**
 *  @deprecated Will be removed in 12.0.0, Pls used [cny](/util/pipes-currency/zh#cny) pipe instead
 */
export declare class NaNumberToChinesePipe implements PipeTransform {
    transform(value: number | string, rmb?: boolean, minusSymbol?: string): string;
    static ɵfac: i0.ɵɵFactoryDef<NaNumberToChinesePipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<NaNumberToChinesePipe, "n2c">;
}
