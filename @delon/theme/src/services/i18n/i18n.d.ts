import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
export interface AlainI18NService {
    [key: string]: any;
    use(lang: string): void;
    getLangs(): any[];
    fanyi(key: string): any;
    readonly change: Observable<string>;
}
export declare const ALAIN_I18N_TOKEN: InjectionToken<AlainI18NService>;
export declare class AlainI18NServiceFake implements AlainI18NService {
    private change$;
    readonly change: Observable<string>;
    use(lang: string): void;
    getLangs(): any[];
    fanyi(key: string): string;
}
