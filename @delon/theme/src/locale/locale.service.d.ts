import { Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { FullLocaleData, LocaleData } from './locale.types';
import * as i0 from "@angular/core";
export declare class DelonLocaleService {
    private _locale;
    private change$;
    constructor(locale: FullLocaleData | null);
    get change(): Observable<FullLocaleData>;
    setLocale(locale: FullLocaleData): void;
    get locale(): FullLocaleData;
    getData(path: keyof FullLocaleData): LocaleData;
    static ɵfac: i0.ɵɵFactoryDeclaration<DelonLocaleService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DelonLocaleService>;
}
export declare function DELON_LOCALE_SERVICE_PROVIDER_FACTORY(exist: DelonLocaleService, locale: FullLocaleData): DelonLocaleService;
export declare const DELON_LOCALE_SERVICE_PROVIDER: Provider;
