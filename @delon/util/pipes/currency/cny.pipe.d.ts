import { PipeTransform } from '@angular/core';
import { CurrencyCNYOptions } from '@delon/util/format';
import * as i0 from "@angular/core";
/**
 * Converted into RMB notation.
 *
 * 转化成人民币表示法
 */
export declare class CurrencyCNYPipe implements PipeTransform {
    private readonly srv;
    transform(value: number | string, options?: CurrencyCNYOptions): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CurrencyCNYPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<CurrencyCNYPipe, "cny", true>;
}
