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
 * },
 * {
 *   path: 'my',
 *   canActivateChild: [SimpleGuard],
 *   children: [
 *     { path: 'profile', component: MockComponent }
 *   ],
 * },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vc2ltcGxlL3NpbXBsZS5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQWlCLE1BQU0sY0FBYyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CL0Q7SUFRRSxxQkFBOEMsR0FBa0IsRUFBVSxRQUFrQjtRQUE5QyxRQUFHLEdBQUgsR0FBRyxDQUFlO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFHLENBQUM7SUFKaEcsc0JBQVksNEJBQUc7Ozs7O1FBQWY7WUFDRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQzFCLENBQUM7OztPQUFBOzs7OztJQUlPLDZCQUFPOzs7O0lBQWY7O1lBQ1EsR0FBRyxHQUFHLFdBQVcsQ0FBQyxtQkFBQSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFvQixDQUFDO1FBQzNELElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM1QztRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVELGVBQWU7Ozs7Ozs7SUFDZiw2QkFBTzs7Ozs7OztJQUFQLFVBQVEsS0FBWSxFQUFFLFNBQXVCO1FBQzNDLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQ0QscUJBQXFCOzs7Ozs7O0lBQ3JCLHNDQUFnQjs7Ozs7OztJQUFoQixVQUFpQixXQUFtQyxFQUFFLEtBQTBCO1FBQzlFLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNyQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQ0QsUUFBUTs7Ozs7OztJQUNSLGlDQUFXOzs7Ozs7O0lBQVgsVUFBWSxNQUE4QixFQUFFLEtBQTBCO1FBQ3BFLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNyQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDOztnQkFoQ0YsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnREFRbkIsTUFBTSxTQUFDLGdCQUFnQjtnQkEvQlQsUUFBUTs7O3NCQUFyQztDQXdEQyxBQWpDRCxJQWlDQztTQWhDWSxXQUFXOzs7Ozs7SUFDdEIsMEJBQXFCOzs7OztJQU1ULDBCQUFvRDs7Ozs7SUFBRSwrQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBDYW5BY3RpdmF0ZSwgQ2FuQWN0aXZhdGVDaGlsZCwgQ2FuTG9hZCwgUm91dGUsIFJvdXRlclN0YXRlU25hcHNob3QsIFVybFNlZ21lbnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ2hlY2tTaW1wbGUsIFRvTG9naW4gfSBmcm9tICcuLi9oZWxwZXInO1xuaW1wb3J0IHsgREFfU0VSVklDRV9UT0tFTiwgSVRva2VuU2VydmljZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBTaW1wbGVUb2tlbk1vZGVsIH0gZnJvbSAnLi9zaW1wbGUubW9kZWwnO1xuXG4vKipcbiAqIFNpbXBsZSDot6/nlLHlrojljassIFtBQ0wgRG9jdW1lbnRdKGh0dHBzOi8vbmctYWxhaW4uY29tL2F1dGgvZ3VhcmQpLlxuICpcbiAqIGBgYHRzXG4gKiBkYXRhOiB7XG4gKiAgcGF0aDogJ2hvbWUnLFxuICogIGNhbkFjdGl2YXRlOiBbIFNpbXBsZUd1YXJkIF1cbiAqIH0sXG4gKiB7XG4gKiAgIHBhdGg6ICdteScsXG4gKiAgIGNhbkFjdGl2YXRlQ2hpbGQ6IFtTaW1wbGVHdWFyZF0sXG4gKiAgIGNoaWxkcmVuOiBbXG4gKiAgICAgeyBwYXRoOiAncHJvZmlsZScsIGNvbXBvbmVudDogTW9ja0NvbXBvbmVudCB9XG4gKiAgIF0sXG4gKiB9LFxuICogYGBgXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgU2ltcGxlR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSwgQ2FuQWN0aXZhdGVDaGlsZCwgQ2FuTG9hZCB7XG4gIHByaXZhdGUgdXJsPzogc3RyaW5nO1xuXG4gIHByaXZhdGUgZ2V0IGNvZygpIHtcbiAgICByZXR1cm4gdGhpcy5zcnYub3B0aW9ucztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoREFfU0VSVklDRV9UT0tFTikgcHJpdmF0ZSBzcnY6IElUb2tlblNlcnZpY2UsIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7fVxuXG4gIHByaXZhdGUgcHJvY2VzcygpOiBib29sZWFuIHtcbiAgICBjb25zdCByZXMgPSBDaGVja1NpbXBsZSh0aGlzLnNydi5nZXQoKSBhcyBTaW1wbGVUb2tlbk1vZGVsKTtcbiAgICBpZiAoIXJlcykge1xuICAgICAgVG9Mb2dpbih0aGlzLmNvZywgdGhpcy5pbmplY3RvciwgdGhpcy51cmwpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgLy8gbGF6eSBsb2FkaW5nXG4gIGNhbkxvYWQocm91dGU6IFJvdXRlLCBfc2VnbWVudHM6IFVybFNlZ21lbnRbXSk6IGJvb2xlYW4ge1xuICAgIHRoaXMudXJsID0gcm91dGUucGF0aDtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKCk7XG4gIH1cbiAgLy8gYWxsIGNoaWxkcmVuIHJvdXRlXG4gIGNhbkFjdGl2YXRlQ2hpbGQoX2NoaWxkUm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgdGhpcy51cmwgPSBzdGF0ZS51cmw7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VzcygpO1xuICB9XG4gIC8vIHJvdXRlXG4gIGNhbkFjdGl2YXRlKF9yb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICB0aGlzLnVybCA9IHN0YXRlLnVybDtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKCk7XG4gIH1cbn1cbiJdfQ==