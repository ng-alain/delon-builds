import { CanActivateChildFn, CanActivateFn, CanMatchFn } from '@angular/router';
import * as i0 from "@angular/core";
export declare class AuthSimpleGuardService {
    private readonly srv;
    process(url?: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthSimpleGuardService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthSimpleGuardService>;
}
/**
 * Simple 路由守卫, [ACL Document](https://ng-alain.com/auth/guard).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivate: [ authSimpleCanActivate ],
 *  data: { guard: 'user1' }
 * }
 * ```
 */
export declare const authSimpleCanActivate: CanActivateFn;
/**
 * Simple 路由守卫, [ACL Document](https://ng-alain.com/auth/guard).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivateChild: [ authSimpleCanActivateChild ],
 *  data: { guard: 'user1' }
 * }
 * ```
 */
export declare const authSimpleCanActivateChild: CanActivateChildFn;
/**
 * Simple 路由守卫, [ACL Document](https://ng-alain.com/auth/guard).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canMatch: [ authSimpleCanMatch ],
 *  data: { guard: 'user1' }
 * }
 * ```
 */
export declare const authSimpleCanMatch: CanMatchFn;
