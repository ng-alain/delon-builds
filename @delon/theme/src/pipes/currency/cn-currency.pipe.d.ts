/**
 * [Document](https://ng-alain.com/theme/currency)
 * @deprecated Will be removed in 12.0.0, Pls used `_currency2` instead
 */
export declare class CNCurrencyPipe {
    private readonly ngCurrencyPipe;
    constructor(locale: string);
    transform(value: any, currencyCode?: string, display?: 'code' | 'symbol' | 'symbol-narrow' | boolean, digits?: string): string | null;
}
