import { Injector } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { DelonAuthConfig } from '../../auth.config';
import { ITokenService } from '../interface';
/**
 * JWT 路由守卫, [ACL Document](https://ng-alain.com/auth/guard).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivate: [ JWTGuard ]
 * }
 * ```
 */
export declare class JWTGuard implements CanActivate, CanActivateChild, CanLoad {
    private srv;
    private injector;
    private cog;
    private url;
    constructor(srv: ITokenService, injector: Injector, cog: DelonAuthConfig);
    private process;
    canLoad(route: Route, _segments: UrlSegment[]): boolean;
    canActivateChild(_childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean;
    canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean;
}
