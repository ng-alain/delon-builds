import { Injector } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanMatch, Route, RouterStateSnapshot } from '@angular/router';
import { ITokenService } from '../interface';
import * as i0 from "@angular/core";
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
export declare class SimpleGuard implements CanActivate, CanActivateChild, CanMatch {
    private srv;
    private injector;
    private url?;
    private get cog();
    constructor(srv: ITokenService, injector: Injector);
    private process;
    canMatch(route: Route): boolean;
    canActivateChild(_childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean;
    canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SimpleGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SimpleGuard>;
}
