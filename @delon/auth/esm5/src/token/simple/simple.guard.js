/**
 * @fileoverview added by tsickle
 * Generated from: src/token/simple/simple.guard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, Injector } from '@angular/core';
import { CheckSimple, ToLogin } from '../helper';
import { DA_SERVICE_TOKEN } from '../interface';
import * as i0 from "@angular/core";
import * as i1 from "../interface";
/**
 * Simple 路由守卫, [ACL Document](https://ng-alain.com/auth/guard).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivate: [ SimpleGuard ]
 * }
 * ```
 */
var SimpleGuard = /** @class */ (function () {
    function SimpleGuard(srv, injector) {
        this.srv = srv;
        this.injector = injector;
    }
    Object.defineProperty(SimpleGuard.prototype, "cog", {
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
    SimpleGuard.prototype.process = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var res = CheckSimple((/** @type {?} */ (this.srv.get())));
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
    SimpleGuard.prototype.canLoad = 
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
    SimpleGuard.prototype.canActivateChild = 
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
    SimpleGuard.prototype.canActivate = 
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
    SimpleGuard.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    SimpleGuard.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DA_SERVICE_TOKEN,] }] },
        { type: Injector }
    ]; };
    /** @nocollapse */ SimpleGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function SimpleGuard_Factory() { return new SimpleGuard(i0.ɵɵinject(i1.DA_SERVICE_TOKEN), i0.ɵɵinject(i0.INJECTOR)); }, token: SimpleGuard, providedIn: "root" });
    return SimpleGuard;
}());
export { SimpleGuard };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SimpleGuard.prototype.url;
    /**
     * @type {?}
     * @private
     */
    SimpleGuard.prototype.srv;
    /**
     * @type {?}
     * @private
     */
    SimpleGuard.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vc2ltcGxlL3NpbXBsZS5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQWlCLE1BQU0sY0FBYyxDQUFDOzs7Ozs7Ozs7Ozs7O0FBYS9EO0lBUUUscUJBQThDLEdBQWtCLEVBQVUsUUFBa0I7UUFBOUMsUUFBRyxHQUFILEdBQUcsQ0FBZTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBRyxDQUFDO0lBSmhHLHNCQUFZLDRCQUFHOzs7OztRQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztRQUMxQixDQUFDOzs7T0FBQTs7Ozs7SUFJTyw2QkFBTzs7OztJQUFmOztZQUNRLEdBQUcsR0FBRyxXQUFXLENBQUMsbUJBQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBb0IsQ0FBQztRQUMzRCxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1IsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDNUM7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxlQUFlOzs7Ozs7O0lBQ2YsNkJBQU87Ozs7Ozs7SUFBUCxVQUFRLEtBQVksRUFBRSxTQUF1QjtRQUMzQyxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDdEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUNELHFCQUFxQjs7Ozs7OztJQUNyQixzQ0FBZ0I7Ozs7Ozs7SUFBaEIsVUFBaUIsV0FBbUMsRUFBRSxLQUEwQjtRQUM5RSxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUNELFFBQVE7Ozs7Ozs7SUFDUixpQ0FBVzs7Ozs7OztJQUFYLFVBQVksTUFBOEIsRUFBRSxLQUEwQjtRQUNwRSxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Z0JBaENGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0RBUW5CLE1BQU0sU0FBQyxnQkFBZ0I7Z0JBeEJULFFBQVE7OztzQkFBckM7Q0FpREMsQUFqQ0QsSUFpQ0M7U0FoQ1ksV0FBVzs7Ozs7O0lBQ3RCLDBCQUFxQjs7Ozs7SUFNVCwwQkFBb0Q7Ozs7O0lBQUUsK0JBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgQ2FuQWN0aXZhdGUsIENhbkFjdGl2YXRlQ2hpbGQsIENhbkxvYWQsIFJvdXRlLCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBVcmxTZWdtZW50IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENoZWNrU2ltcGxlLCBUb0xvZ2luIH0gZnJvbSAnLi4vaGVscGVyJztcbmltcG9ydCB7IERBX1NFUlZJQ0VfVE9LRU4sIElUb2tlblNlcnZpY2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU2ltcGxlVG9rZW5Nb2RlbCB9IGZyb20gJy4vc2ltcGxlLm1vZGVsJztcblxuLyoqXG4gKiBTaW1wbGUg6Lev55Sx5a6I5Y2rLCBbQUNMIERvY3VtZW50XShodHRwczovL25nLWFsYWluLmNvbS9hdXRoL2d1YXJkKS5cbiAqXG4gKiBgYGB0c1xuICogZGF0YToge1xuICogIHBhdGg6ICdob21lJyxcbiAqICBjYW5BY3RpdmF0ZTogWyBTaW1wbGVHdWFyZCBdXG4gKiB9XG4gKiBgYGBcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBTaW1wbGVHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlLCBDYW5BY3RpdmF0ZUNoaWxkLCBDYW5Mb2FkIHtcbiAgcHJpdmF0ZSB1cmw/OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBnZXQgY29nKCkge1xuICAgIHJldHVybiB0aGlzLnNydi5vcHRpb25zO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChEQV9TRVJWSUNFX1RPS0VOKSBwcml2YXRlIHNydjogSVRva2VuU2VydmljZSwgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHt9XG5cbiAgcHJpdmF0ZSBwcm9jZXNzKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJlcyA9IENoZWNrU2ltcGxlKHRoaXMuc3J2LmdldCgpIGFzIFNpbXBsZVRva2VuTW9kZWwpO1xuICAgIGlmICghcmVzKSB7XG4gICAgICBUb0xvZ2luKHRoaXMuY29nLCB0aGlzLmluamVjdG9yLCB0aGlzLnVybCk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvLyBsYXp5IGxvYWRpbmdcbiAgY2FuTG9hZChyb3V0ZTogUm91dGUsIF9zZWdtZW50czogVXJsU2VnbWVudFtdKTogYm9vbGVhbiB7XG4gICAgdGhpcy51cmwgPSByb3V0ZS5wYXRoO1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3MoKTtcbiAgfVxuICAvLyBhbGwgY2hpbGRyZW4gcm91dGVcbiAgY2FuQWN0aXZhdGVDaGlsZChfY2hpbGRSb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICB0aGlzLnVybCA9IHN0YXRlLnVybDtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKCk7XG4gIH1cbiAgLy8gcm91dGVcbiAgY2FuQWN0aXZhdGUoX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIHRoaXMudXJsID0gc3RhdGUudXJsO1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3MoKTtcbiAgfVxufVxuIl19