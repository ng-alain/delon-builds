import { ActivatedRouteSnapshot, RouteReuseStrategy } from '@angular/router';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
export declare class ReuseTabStrategy implements RouteReuseStrategy {
    private readonly srv;
    shouldDetach(route: ActivatedRouteSnapshot): boolean;
    store(route: ActivatedRouteSnapshot, handle: unknown): void;
    shouldAttach(route: ActivatedRouteSnapshot): boolean;
    retrieve(route: ActivatedRouteSnapshot): NzSafeAny | null;
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean;
}
