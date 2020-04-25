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
export class SimpleGuard {
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
        const res = CheckSimple((/** @type {?} */ (this.srv.get())));
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
SimpleGuard.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
SimpleGuard.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DA_SERVICE_TOKEN,] }] },
    { type: Injector }
];
/** @nocollapse */ SimpleGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function SimpleGuard_Factory() { return new SimpleGuard(i0.ɵɵinject(i1.DA_SERVICE_TOKEN), i0.ɵɵinject(i0.INJECTOR)); }, token: SimpleGuard, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vc2ltcGxlL3NpbXBsZS5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQWlCLE1BQU0sY0FBYyxDQUFDOzs7Ozs7Ozs7Ozs7O0FBYy9ELE1BQU0sT0FBTyxXQUFXOzs7OztJQU90QixZQUE4QyxHQUFrQixFQUFVLFFBQWtCO1FBQTlDLFFBQUcsR0FBSCxHQUFHLENBQWU7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQUcsQ0FBQzs7Ozs7SUFKaEcsSUFBWSxHQUFHO1FBQ2IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUMxQixDQUFDOzs7OztJQUlPLE9BQU87O2NBQ1AsR0FBRyxHQUFHLFdBQVcsQ0FBQyxtQkFBQSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFvQixDQUFDO1FBQzNELElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM1QztRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7Ozs7OztJQUdELE9BQU8sQ0FBQyxLQUFZLEVBQUUsU0FBdUI7UUFDM0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxXQUFtQyxFQUFFLEtBQTBCO1FBQzlFLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNyQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7Ozs7O0lBRUQsV0FBVyxDQUFDLE1BQThCLEVBQUUsS0FBMEI7UUFDcEUsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7OztZQWhDRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7OzRDQVFuQixNQUFNLFNBQUMsZ0JBQWdCO1lBeEJULFFBQVE7Ozs7Ozs7O0lBa0JuQywwQkFBcUI7Ozs7O0lBTVQsMEJBQW9EOzs7OztJQUFFLCtCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIENhbkFjdGl2YXRlLCBDYW5BY3RpdmF0ZUNoaWxkLCBDYW5Mb2FkLCBSb3V0ZSwgUm91dGVyU3RhdGVTbmFwc2hvdCwgVXJsU2VnbWVudCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDaGVja1NpbXBsZSwgVG9Mb2dpbiB9IGZyb20gJy4uL2hlbHBlcic7XG5pbXBvcnQgeyBEQV9TRVJWSUNFX1RPS0VOLCBJVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNpbXBsZVRva2VuTW9kZWwgfSBmcm9tICcuL3NpbXBsZS5tb2RlbCc7XG5cbi8qKlxuICogU2ltcGxlIOi3r+eUseWuiOWNqywgW0FDTCBEb2N1bWVudF0oaHR0cHM6Ly9uZy1hbGFpbi5jb20vYXV0aC9ndWFyZCkuXG4gKlxuICogYGBgdHNcbiAqIGRhdGE6IHtcbiAqICBwYXRoOiAnaG9tZScsXG4gKiAgY2FuQWN0aXZhdGU6IFsgU2ltcGxlR3VhcmQgXVxuICogfVxuICogYGBgXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgU2ltcGxlR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSwgQ2FuQWN0aXZhdGVDaGlsZCwgQ2FuTG9hZCB7XG4gIHByaXZhdGUgdXJsPzogc3RyaW5nO1xuXG4gIHByaXZhdGUgZ2V0IGNvZygpIHtcbiAgICByZXR1cm4gdGhpcy5zcnYub3B0aW9ucztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoREFfU0VSVklDRV9UT0tFTikgcHJpdmF0ZSBzcnY6IElUb2tlblNlcnZpY2UsIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7fVxuXG4gIHByaXZhdGUgcHJvY2VzcygpOiBib29sZWFuIHtcbiAgICBjb25zdCByZXMgPSBDaGVja1NpbXBsZSh0aGlzLnNydi5nZXQoKSBhcyBTaW1wbGVUb2tlbk1vZGVsKTtcbiAgICBpZiAoIXJlcykge1xuICAgICAgVG9Mb2dpbih0aGlzLmNvZywgdGhpcy5pbmplY3RvciwgdGhpcy51cmwpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgLy8gbGF6eSBsb2FkaW5nXG4gIGNhbkxvYWQocm91dGU6IFJvdXRlLCBfc2VnbWVudHM6IFVybFNlZ21lbnRbXSk6IGJvb2xlYW4ge1xuICAgIHRoaXMudXJsID0gcm91dGUucGF0aDtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKCk7XG4gIH1cbiAgLy8gYWxsIGNoaWxkcmVuIHJvdXRlXG4gIGNhbkFjdGl2YXRlQ2hpbGQoX2NoaWxkUm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgdGhpcy51cmwgPSBzdGF0ZS51cmw7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VzcygpO1xuICB9XG4gIC8vIHJvdXRlXG4gIGNhbkFjdGl2YXRlKF9yb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICB0aGlzLnVybCA9IHN0YXRlLnVybDtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKCk7XG4gIH1cbn1cbiJdfQ==