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
 * }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0Lmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vand0L2p3dC5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQWlCLE1BQU0sY0FBYyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFZNUM7SUFRRSxrQkFBOEMsR0FBa0IsRUFBVSxRQUFrQjtRQUE5QyxRQUFHLEdBQUgsR0FBRyxDQUFlO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFHLENBQUM7SUFKaEcsc0JBQVkseUJBQUc7Ozs7O1FBQWY7WUFDRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQzFCLENBQUM7OztPQUFBOzs7OztJQUlPLDBCQUFPOzs7O0lBQWY7O1lBQ1EsR0FBRyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBZ0IsYUFBYSxDQUFDLEVBQUUsbUJBQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBQyxDQUFDO1FBQzVGLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM1QztRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVELGVBQWU7Ozs7Ozs7SUFDZiwwQkFBTzs7Ozs7OztJQUFQLFVBQVEsS0FBWSxFQUFFLFNBQXVCO1FBQzNDLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQ0QscUJBQXFCOzs7Ozs7O0lBQ3JCLG1DQUFnQjs7Ozs7OztJQUFoQixVQUFpQixXQUFtQyxFQUFFLEtBQTBCO1FBQzlFLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNyQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQ0QsUUFBUTs7Ozs7OztJQUNSLDhCQUFXOzs7Ozs7O0lBQVgsVUFBWSxNQUE4QixFQUFFLEtBQTBCO1FBQ3BFLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNyQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDOztnQkFoQ0YsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnREFRbkIsTUFBTSxTQUFDLGdCQUFnQjtnQkF4QlQsUUFBUTs7O21CQUFyQztDQWlEQyxBQWpDRCxJQWlDQztTQWhDWSxRQUFROzs7Ozs7SUFDbkIsdUJBQWdDOzs7OztJQU1wQix1QkFBb0Q7Ozs7O0lBQUUsNEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgQ2FuQWN0aXZhdGUsIENhbkFjdGl2YXRlQ2hpbGQsIENhbkxvYWQsIFJvdXRlLCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBVcmxTZWdtZW50IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENoZWNrSnd0LCBUb0xvZ2luIH0gZnJvbSAnLi4vaGVscGVyJztcbmltcG9ydCB7IERBX1NFUlZJQ0VfVE9LRU4sIElUb2tlblNlcnZpY2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSldUVG9rZW5Nb2RlbCB9IGZyb20gJy4vand0Lm1vZGVsJztcblxuLyoqXG4gKiBKV1Qg6Lev55Sx5a6I5Y2rLCBbQUNMIERvY3VtZW50XShodHRwczovL25nLWFsYWluLmNvbS9hdXRoL2d1YXJkKS5cbiAqXG4gKiBgYGB0c1xuICogZGF0YToge1xuICogIHBhdGg6ICdob21lJyxcbiAqICBjYW5BY3RpdmF0ZTogWyBKV1RHdWFyZCBdXG4gKiB9XG4gKiBgYGBcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBKV1RHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlLCBDYW5BY3RpdmF0ZUNoaWxkLCBDYW5Mb2FkIHtcbiAgcHJpdmF0ZSB1cmw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICBwcml2YXRlIGdldCBjb2coKSB7XG4gICAgcmV0dXJuIHRoaXMuc3J2Lm9wdGlvbnM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERBX1NFUlZJQ0VfVE9LRU4pIHByaXZhdGUgc3J2OiBJVG9rZW5TZXJ2aWNlLCBwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge31cblxuICBwcml2YXRlIHByb2Nlc3MoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcmVzID0gQ2hlY2tKd3QodGhpcy5zcnYuZ2V0PEpXVFRva2VuTW9kZWw+KEpXVFRva2VuTW9kZWwpLCB0aGlzLmNvZy50b2tlbl9leHBfb2Zmc2V0ISk7XG4gICAgaWYgKCFyZXMpIHtcbiAgICAgIFRvTG9naW4odGhpcy5jb2csIHRoaXMuaW5qZWN0b3IsIHRoaXMudXJsKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIC8vIGxhenkgbG9hZGluZ1xuICBjYW5Mb2FkKHJvdXRlOiBSb3V0ZSwgX3NlZ21lbnRzOiBVcmxTZWdtZW50W10pOiBib29sZWFuIHtcbiAgICB0aGlzLnVybCA9IHJvdXRlLnBhdGg7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VzcygpO1xuICB9XG4gIC8vIGFsbCBjaGlsZHJlbiByb3V0ZVxuICBjYW5BY3RpdmF0ZUNoaWxkKF9jaGlsZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIHRoaXMudXJsID0gc3RhdGUudXJsO1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3MoKTtcbiAgfVxuICAvLyByb3V0ZVxuICBjYW5BY3RpdmF0ZShfcm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgdGhpcy51cmwgPSBzdGF0ZS51cmw7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VzcygpO1xuICB9XG59XG4iXX0=