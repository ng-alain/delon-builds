import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ACLService } from './acl.service';
import * as i0 from "@angular/core";
/**
 * Routing guard prevent unauthorized users visit the page, [ACL Document](https://ng-alain.com/acl).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivate: [ ACLGuard ],
 *  data: { guard: 'user1' }
 * }
 * ```
 */
export declare class ACLGuard implements CanActivate, CanActivateChild, CanLoad {
    private srv;
    private router;
    constructor(srv: ACLService, router: Router);
    private process;
    canLoad(route: Route): Observable<boolean>;
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>;
    canActivate(route: ActivatedRouteSnapshot, _state: RouterStateSnapshot | null): Observable<boolean>;
    static ɵfac: i0.ɵɵFactoryDef<ACLGuard, never>;
    static ɵprov: i0.ɵɵInjectableDef<ACLGuard>;
}
