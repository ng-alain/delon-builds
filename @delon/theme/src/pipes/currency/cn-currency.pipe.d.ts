import * as i0 from "@angular/core";
/**
 * [Document](https://ng-alain.com/theme/currency)
 */
export declare class CNCurrencyPipe {
    private readonly ngCurrencyPipe;
    constructor(locale: string);
    transform(value: any, currencyCode?: string, display?: 'code' | 'symbol' | 'symbol-narrow' | boolean, digits?: string): string | null;
    static ɵfac: i0.ɵɵFactoryDef<CNCurrencyPipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<CNCurrencyPipe, "_currency">;
}
