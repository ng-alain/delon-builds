/**
 * @deprecated Will be removed in 12.0.0, Pls used [price](https://ng-alain.com/util/pipes-currency/en?#price) pipe instead
 */
export declare class CNCurrencyPipe {
    private readonly ngCurrencyPipe;
    constructor(locale: string);
    transform(value: any, currencyCode?: string, display?: 'code' | 'symbol' | 'symbol-narrow' | boolean, digits?: string): string | null;
}
