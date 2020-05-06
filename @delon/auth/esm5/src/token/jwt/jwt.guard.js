/**
 * @fileoverview added by tsickle
 * Generated from: src/token/jwt/jwt.guard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
var JWTGuard = /** @class */ (function () {
    function JWTGuard(srv, injector) {
        this.srv = srv;
        this.injector = injector;
    }
    Object.defineProperty(JWTGuard.prototype, "cog", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.srv.options;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    JWTGuard.prototype.process = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var res = CheckJwt(this.srv.get(JWTTokenModel), (/** @type {?} */ (this.cog.token_exp_offset)));
        if (!res) {
            ToLogin(this.cog, this.injector, this.url);
        }
        return res;
    };
    // lazy loading
    // lazy loading
    /**
     * @param {?} route
     * @param {?} _segments
     * @return {?}
     */
    JWTGuard.prototype.canLoad = 
    // lazy loading
    /**
     * @param {?} route
     * @param {?} _segments
     * @return {?}
     */
    function (route, _segments) {
        this.url = route.path;
        return this.process();
    };
    // all children route
    // all children route
    /**
     * @param {?} _childRoute
     * @param {?} state
     * @return {?}
     */
    JWTGuard.prototype.canActivateChild = 
    // all children route
    /**
     * @param {?} _childRoute
     * @param {?} state
     * @return {?}
     */
    function (_childRoute, state) {
        this.url = state.url;
        return this.process();
    };
    // route
    // route
    /**
     * @param {?} _route
     * @param {?} state
     * @return {?}
     */
    JWTGuard.prototype.canActivate = 
    // route
    /**
     * @param {?} _route
     * @param {?} state
     * @return {?}
     */
    function (_route, state) {
        this.url = state.url;
        return this.process();
    };
    JWTGuard.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    JWTGuard.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DA_SERVICE_TOKEN,] }] },
        { type: Injector }
    ]; };
    /** @nocollapse */ JWTGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function JWTGuard_Factory() { return new JWTGuard(i0.ɵɵinject(i1.DA_SERVICE_TOKEN), i0.ɵɵinject(i0.INJECTOR)); }, token: JWTGuard, providedIn: "root" });
    return JWTGuard;
}());
export { JWTGuard };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0Lmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vand0L2p3dC5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQWlCLE1BQU0sY0FBYyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUI1QztJQVFFLGtCQUE4QyxHQUFrQixFQUFVLFFBQWtCO1FBQTlDLFFBQUcsR0FBSCxHQUFHLENBQWU7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQUcsQ0FBQztJQUpoRyxzQkFBWSx5QkFBRzs7Ozs7UUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7Ozs7O0lBSU8sMEJBQU87Ozs7SUFBZjs7WUFDUSxHQUFHLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFnQixhQUFhLENBQUMsRUFBRSxtQkFBQSxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFDLENBQUM7UUFDNUYsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNSLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzVDO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsZUFBZTs7Ozs7OztJQUNmLDBCQUFPOzs7Ozs7O0lBQVAsVUFBUSxLQUFZLEVBQUUsU0FBdUI7UUFDM0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFDRCxxQkFBcUI7Ozs7Ozs7SUFDckIsbUNBQWdCOzs7Ozs7O0lBQWhCLFVBQWlCLFdBQW1DLEVBQUUsS0FBMEI7UUFDOUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFDRCxRQUFROzs7Ozs7O0lBQ1IsOEJBQVc7Ozs7Ozs7SUFBWCxVQUFZLE1BQThCLEVBQUUsS0FBMEI7UUFDcEUsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7O2dCQWhDRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O2dEQVFuQixNQUFNLFNBQUMsZ0JBQWdCO2dCQS9CVCxRQUFROzs7bUJBQXJDO0NBd0RDLEFBakNELElBaUNDO1NBaENZLFFBQVE7Ozs7OztJQUNuQix1QkFBZ0M7Ozs7O0lBTXBCLHVCQUFvRDs7Ozs7SUFBRSw0QkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBDYW5BY3RpdmF0ZSwgQ2FuQWN0aXZhdGVDaGlsZCwgQ2FuTG9hZCwgUm91dGUsIFJvdXRlclN0YXRlU25hcHNob3QsIFVybFNlZ21lbnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ2hlY2tKd3QsIFRvTG9naW4gfSBmcm9tICcuLi9oZWxwZXInO1xuaW1wb3J0IHsgREFfU0VSVklDRV9UT0tFTiwgSVRva2VuU2VydmljZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBKV1RUb2tlbk1vZGVsIH0gZnJvbSAnLi9qd3QubW9kZWwnO1xuXG4vKipcbiAqIEpXVCDot6/nlLHlrojljassIFtBQ0wgRG9jdW1lbnRdKGh0dHBzOi8vbmctYWxhaW4uY29tL2F1dGgvZ3VhcmQpLlxuICpcbiAqIGBgYHRzXG4gKiBkYXRhOiB7XG4gKiAgcGF0aDogJ2hvbWUnLFxuICogIGNhbkFjdGl2YXRlOiBbIEpXVEd1YXJkIF1cbiAqIH0sXG4gKiB7XG4gKiAgIHBhdGg6ICdteScsXG4gKiAgIGNhbkFjdGl2YXRlQ2hpbGQ6IFtKV1RHdWFyZF0sXG4gKiAgIGNoaWxkcmVuOiBbXG4gKiAgICAgeyBwYXRoOiAncHJvZmlsZScsIGNvbXBvbmVudDogTW9ja0NvbXBvbmVudCB9XG4gKiAgIF0sXG4gKiB9LFxuICogYGBgXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgSldUR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSwgQ2FuQWN0aXZhdGVDaGlsZCwgQ2FuTG9hZCB7XG4gIHByaXZhdGUgdXJsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgcHJpdmF0ZSBnZXQgY29nKCkge1xuICAgIHJldHVybiB0aGlzLnNydi5vcHRpb25zO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChEQV9TRVJWSUNFX1RPS0VOKSBwcml2YXRlIHNydjogSVRva2VuU2VydmljZSwgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHt9XG5cbiAgcHJpdmF0ZSBwcm9jZXNzKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJlcyA9IENoZWNrSnd0KHRoaXMuc3J2LmdldDxKV1RUb2tlbk1vZGVsPihKV1RUb2tlbk1vZGVsKSwgdGhpcy5jb2cudG9rZW5fZXhwX29mZnNldCEpO1xuICAgIGlmICghcmVzKSB7XG4gICAgICBUb0xvZ2luKHRoaXMuY29nLCB0aGlzLmluamVjdG9yLCB0aGlzLnVybCk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvLyBsYXp5IGxvYWRpbmdcbiAgY2FuTG9hZChyb3V0ZTogUm91dGUsIF9zZWdtZW50czogVXJsU2VnbWVudFtdKTogYm9vbGVhbiB7XG4gICAgdGhpcy51cmwgPSByb3V0ZS5wYXRoO1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3MoKTtcbiAgfVxuICAvLyBhbGwgY2hpbGRyZW4gcm91dGVcbiAgY2FuQWN0aXZhdGVDaGlsZChfY2hpbGRSb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICB0aGlzLnVybCA9IHN0YXRlLnVybDtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKCk7XG4gIH1cbiAgLy8gcm91dGVcbiAgY2FuQWN0aXZhdGUoX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIHRoaXMudXJsID0gc3RhdGUudXJsO1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3MoKTtcbiAgfVxufVxuIl19