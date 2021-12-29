import { Injector } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { ITokenService } from '../interface';
/**
 * Simple 路由守卫, [ACL Document](https://ng-alain.com/auth/guard).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivate: [ SimpleGuard ]
 * },
 * {
 *   path: 'my',
 *   canActivateChild: [SimpleGuard],
 *   children: [
 *     { path: 'profile', component: MockComponent }
 *   ],
 * },
 * ```
 */
export declare class SimpleGuard implements CanActivate, CanActivateChild, CanLoad {
    private srv;
    private injector;
    private url?;
    private get cog();
    constructor(srv: ITokenService, injector: Injector);
    private process;
    canLoad(route: Route, _segments: UrlSegment[]): boolean;
    canActivateChild(_childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean;
    canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean;
}
