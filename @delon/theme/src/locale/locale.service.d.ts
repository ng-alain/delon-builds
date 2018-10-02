import { Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { LocaleData } from './locale.types';
export declare class DelonLocaleService {
    private _locale;
    private change$;
    constructor(locale: LocaleData);
    readonly change: Observable<LocaleData>;
    setLocale(locale: LocaleData): void;
    readonly locale: LocaleData;
    getData(path: string): any;
}
export declare function DELON_LOCALE_SERVICE_PROVIDER_FACTORY(exist: DelonLocaleService, locale: LocaleData): DelonLocaleService;
export declare const DELON_LOCALE_SERVICE_PROVIDER: Provider;
