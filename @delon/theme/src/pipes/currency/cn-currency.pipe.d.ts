import { CurrencyPipe } from '@angular/common';
/**
 * @see https://ng-alain.com/docs/service-pipe#%E8%B4%A7%E5%B8%81-_currenty
 */
export declare class CNCurrencyPipe extends CurrencyPipe {
    transform(value: any, currencyCode?: string, display?: 'code' | 'symbol' | 'symbol-narrow' | boolean, digits?: string): string | null;
}
