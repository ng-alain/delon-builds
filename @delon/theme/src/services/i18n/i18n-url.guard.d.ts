import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AlainConfigService } from '@delon/util/config';
import { AlainI18NService } from './i18n';
import * as i0 from "@angular/core";
export declare class AlainI18NGuard implements CanActivate, CanActivateChild {
    private i18nSrv;
    private cogSrv;
    constructor(i18nSrv: AlainI18NService, cogSrv: AlainConfigService);
    private resolve;
    canActivateChild(childRoute: ActivatedRouteSnapshot, _: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>;
    canActivate(route: ActivatedRouteSnapshot, _: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlainI18NGuard, [{ optional: true; }, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AlainI18NGuard>;
}
