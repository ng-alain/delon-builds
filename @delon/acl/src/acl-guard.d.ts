import { CanActivate, CanActivateChild, CanLoad, ActivatedRouteSnapshot, Route, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ACLService } from './acl.service';
import { DelonACLConfig } from './acl.config';
export declare class ACLGuard implements CanActivate, CanActivateChild, CanLoad {
    private srv;
    private router;
    private options;
    constructor(srv: ACLService, router: Router, options: DelonACLConfig);
    private process;
    canLoad(route: Route): Observable<boolean>;
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>;
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>;
}
