import { Injector } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ACLService } from './acl.service';
import type { ACLGuardData } from './acl.type';
import * as i0 from "@angular/core";
export declare class ACLGuardService {
    private srv;
    private router;
    private injector;
    constructor(srv: ACLService, router: Router, injector: Injector);
    process(data?: ACLGuardData): Observable<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ACLGuardService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ACLGuardService>;
}
/**
 * Routing guard prevent unauthorized users visit the page, [ACL Document](https://ng-alain.com/acl).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivate: [ aclCanActivate ],
 *  data: { guard: 'user1' }
 * }
 * ```
 */
export declare const aclCanActivate: CanActivateFn;
/**
 * Routing guard prevent unauthorized users visit the page, [ACL Document](https://ng-alain.com/acl).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivateChild: [ aclCanActivateChild ],
 *  data: { guard: 'user1' }
 * }
 * ```
 */
export declare const aclCanActivateChild: CanActivateChildFn;
/**
 * Routing guard prevent unauthorized users visit the page, [ACL Document](https://ng-alain.com/acl).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canMatch: [ aclCanMatch ],
 *  data: { guard: 'user1' }
 * }
 * ```
 */
export declare const aclCanMatch: CanMatchFn;
