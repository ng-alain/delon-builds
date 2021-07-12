import { ActivatedRouteSnapshot, RouteReuseStrategy } from '@angular/router';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { ReuseTabService } from './reuse-tab.service';
export declare class ReuseTabStrategy implements RouteReuseStrategy {
    private srv;
    constructor(srv: ReuseTabService);
    shouldDetach(route: ActivatedRouteSnapshot): boolean;
    store(route: ActivatedRouteSnapshot, handle: unknown): void;
    shouldAttach(route: ActivatedRouteSnapshot): boolean;
    retrieve(route: ActivatedRouteSnapshot): NzSafeAny | null;
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean;
}
