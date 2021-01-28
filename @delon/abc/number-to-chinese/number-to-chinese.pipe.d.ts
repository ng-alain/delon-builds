import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NaNumberToChinesePipe implements PipeTransform {
    transform(value: number | string, rmb?: boolean, minusSymbol?: string): string;
    static ɵfac: i0.ɵɵFactoryDef<NaNumberToChinesePipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<NaNumberToChinesePipe, "n2c">;
}
