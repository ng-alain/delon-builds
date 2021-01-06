/**
 * @see https://ng-alain.com/theme/currency
 */
export declare class CNCurrencyPipe {
    private readonly ngCurrencyPipe;
    constructor(locale: string);
    transform(value: any, currencyCode?: string, display?: 'code' | 'symbol' | 'symbol-narrow' | boolean, digits?: string): string | null;
}