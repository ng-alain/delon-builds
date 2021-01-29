/**
 * @fileoverview added by tsickle
 * Generated from: src/token/jwt/jwt.guard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, Injector } from '@angular/core';
import { CheckJwt, ToLogin } from '../helper';
import { DA_SERVICE_TOKEN } from '../interface';
import { JWTTokenModel } from './jwt.model';
import * as i0 from "@angular/core";
import * as i1 from "../interface";
/**
 * JWT 路由守卫, [ACL Document](https://ng-alain.com/auth/guard).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivate: [ JWTGuard ]
 * },
 * {
 *   path: 'my',
 *   canActivateChild: [JWTGuard],
 *   children: [
 *     { path: 'profile', component: MockComponent }
 *   ],
 * },
 * ```
 */
export class JWTGuard {
    /**
     * @param {?} srv
     * @param {?} injector
     */
    constructor(srv, injector) {
        this.srv = srv;
        this.injector = injector;
    }
    /**
     * @private
     * @return {?}
     */
    get cog() {
        return this.srv.options;
    }
    /**
     * @private
     * @return {?}
     */
    process() {
        /** @type {?} */
        const res = CheckJwt(this.srv.get(JWTTokenModel), (/** @type {?} */ (this.cog.token_exp_offset)));
        if (!res) {
            ToLogin(this.cog, this.injector, this.url);
        }
        return res;
    }
    // lazy loading
    /**
     * @param {?} route
     * @param {?} _segments
     * @return {?}
     */
    canLoad(route, _segments) {
        this.url = route.path;
        return this.process();
    }
    // all children route
    /**
     * @param {?} _childRoute
     * @param {?} state
     * @return {?}
     */
    canActivateChild(_childRoute, state) {
        this.url = state.url;
        return this.process();
    }
    // route
    /**
     * @param {?} _route
     * @param {?} state
     * @return {?}
     */
    canActivate(_route, state) {
        this.url = state.url;
        return this.process();
    }
}
JWTGuard.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
JWTGuard.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DA_SERVICE_TOKEN,] }] },
    { type: Injector }
];
/** @nocollapse */ JWTGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function JWTGuard_Factory() { return new JWTGuard(i0.ɵɵinject(i1.DA_SERVICE_TOKEN), i0.ɵɵinject(i0.INJECTOR)); }, token: JWTGuard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    JWTGuard.prototype.url;
    /**
     * @type {?}
     * @private
     */
    JWTGuard.prototype.srv;
    /**
     * @type {?}
     * @private
     */
    JWTGuard.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0Lmd1YXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYXV0aC9zcmMvdG9rZW4vand0L2p3dC5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc3RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQWlCLE1BQU0sY0FBYyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0I1QyxNQUFNLE9BQU8sUUFBUTs7Ozs7SUFPbkIsWUFBOEMsR0FBa0IsRUFBVSxRQUFrQjtRQUE5QyxRQUFHLEdBQUgsR0FBRyxDQUFlO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFHLENBQUM7Ozs7O0lBSmhHLElBQVksR0FBRztRQUNiLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFJTyxPQUFPOztjQUNQLEdBQUcsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQWdCLGFBQWEsQ0FBQyxFQUFFLG1CQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUMsQ0FBQztRQUM1RixJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1IsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDNUM7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Ozs7Ozs7SUFHRCxPQUFPLENBQUMsS0FBWSxFQUFFLFNBQXVCO1FBQzNDLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsV0FBbUMsRUFBRSxLQUEwQjtRQUM5RSxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Ozs7OztJQUVELFdBQVcsQ0FBQyxNQUE4QixFQUFFLEtBQTBCO1FBQ3BFLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNyQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7WUFoQ0YsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7Ozs0Q0FRbkIsTUFBTSxTQUFDLGdCQUFnQjtZQWhDVCxRQUFROzs7Ozs7OztJQTBCbkMsdUJBQWdDOzs7OztJQU1wQix1QkFBb0Q7Ozs7O0lBQUUsNEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgQ2FuQWN0aXZhdGUsIENhbkFjdGl2YXRlQ2hpbGQsIENhbkxvYWQsIFJvdXRlLCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBVcmxTZWdtZW50IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFsYWluQXV0aENvbmZpZyB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBDaGVja0p3dCwgVG9Mb2dpbiB9IGZyb20gJy4uL2hlbHBlcic7XG5pbXBvcnQgeyBEQV9TRVJWSUNFX1RPS0VOLCBJVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IEpXVFRva2VuTW9kZWwgfSBmcm9tICcuL2p3dC5tb2RlbCc7XG5cbi8qKlxuICogSldUIOi3r+eUseWuiOWNqywgW0FDTCBEb2N1bWVudF0oaHR0cHM6Ly9uZy1hbGFpbi5jb20vYXV0aC9ndWFyZCkuXG4gKlxuICogYGBgdHNcbiAqIGRhdGE6IHtcbiAqICBwYXRoOiAnaG9tZScsXG4gKiAgY2FuQWN0aXZhdGU6IFsgSldUR3VhcmQgXVxuICogfSxcbiAqIHtcbiAqICAgcGF0aDogJ215JyxcbiAqICAgY2FuQWN0aXZhdGVDaGlsZDogW0pXVEd1YXJkXSxcbiAqICAgY2hpbGRyZW46IFtcbiAqICAgICB7IHBhdGg6ICdwcm9maWxlJywgY29tcG9uZW50OiBNb2NrQ29tcG9uZW50IH1cbiAqICAgXSxcbiAqIH0sXG4gKiBgYGBcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBKV1RHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlLCBDYW5BY3RpdmF0ZUNoaWxkLCBDYW5Mb2FkIHtcbiAgcHJpdmF0ZSB1cmw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICBwcml2YXRlIGdldCBjb2coKTogQWxhaW5BdXRoQ29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy5zcnYub3B0aW9ucztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoREFfU0VSVklDRV9UT0tFTikgcHJpdmF0ZSBzcnY6IElUb2tlblNlcnZpY2UsIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7fVxuXG4gIHByaXZhdGUgcHJvY2VzcygpOiBib29sZWFuIHtcbiAgICBjb25zdCByZXMgPSBDaGVja0p3dCh0aGlzLnNydi5nZXQ8SldUVG9rZW5Nb2RlbD4oSldUVG9rZW5Nb2RlbCksIHRoaXMuY29nLnRva2VuX2V4cF9vZmZzZXQhKTtcbiAgICBpZiAoIXJlcykge1xuICAgICAgVG9Mb2dpbih0aGlzLmNvZywgdGhpcy5pbmplY3RvciwgdGhpcy51cmwpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgLy8gbGF6eSBsb2FkaW5nXG4gIGNhbkxvYWQocm91dGU6IFJvdXRlLCBfc2VnbWVudHM6IFVybFNlZ21lbnRbXSk6IGJvb2xlYW4ge1xuICAgIHRoaXMudXJsID0gcm91dGUucGF0aDtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKCk7XG4gIH1cbiAgLy8gYWxsIGNoaWxkcmVuIHJvdXRlXG4gIGNhbkFjdGl2YXRlQ2hpbGQoX2NoaWxkUm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgdGhpcy51cmwgPSBzdGF0ZS51cmw7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VzcygpO1xuICB9XG4gIC8vIHJvdXRlXG4gIGNhbkFjdGl2YXRlKF9yb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICB0aGlzLnVybCA9IHN0YXRlLnVybDtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKCk7XG4gIH1cbn1cbiJdfQ==