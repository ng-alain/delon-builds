import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn } from '@angular/router';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class AlainI18NGuardService {
    private readonly i18nSrv;
    private readonly cogSrv;
    process(route: ActivatedRouteSnapshot): Observable<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlainI18NGuardService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AlainI18NGuardService>;
}
/**
 * Internationalization guard, automatically recognizes the language in Url and triggers the `ALAIN_I18N_TOKEN.use` method
 *
 * 国际化守卫，自动识别Url中的语言，并触发 `ALAIN_I18N_TOKEN.use` 方法
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivate: [ alainI18nCanActivate ]
 * }
 * ```
 */
export declare const alainI18nCanActivate: CanActivateFn;
/**
 * Internationalization guard, automatically recognizes the language in Url and triggers the `ALAIN_I18N_TOKEN.use` method
 *
 * 国际化守卫，自动识别Url中的语言，并触发 `ALAIN_I18N_TOKEN.use` 方法
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivateChild: [ alainI18nCanActivateChild ]
 * }
 * ```
 */
export declare const alainI18nCanActivateChild: CanActivateChildFn;
