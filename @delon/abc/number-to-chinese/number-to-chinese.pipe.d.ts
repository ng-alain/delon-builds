import { PipeTransform } from '@angular/core';
/**
 *  @deprecated Will be removed in 13.0.0, Pls used `currencyCNY` instead
 */
export declare class NaNumberToChinesePipe implements PipeTransform {
    transform(value: number | string, rmb?: boolean, minusSymbol?: string): string;
}
