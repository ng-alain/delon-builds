/**
 * @fileoverview added by tsickle
 * Generated from: src/acl-guard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ACLService } from './acl.service';
import * as i0 from "@angular/core";
import * as i1 from "./acl.service";
import * as i2 from "@angular/router";
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
export class ACLGuard {
    /**
     * @param {?} srv
     * @param {?} router
     */
    constructor(srv, router) {
        this.srv = srv;
        this.router = router;
    }
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    process(data) {
        data = Object.assign({ guard: null, guard_url: this.srv.guard_url }, data);
        /** @type {?} */
        const guard = data.guard;
        return (guard && guard instanceof Observable ? guard : of(guard != null ? ((/** @type {?} */ (guard))) : null)).pipe(map((/**
         * @param {?} v
         * @return {?}
         */
        v => this.srv.can(v))), tap((/**
         * @param {?} v
         * @return {?}
         */
        v => {
            if (v)
                return;
            this.router.navigateByUrl(data.guard_url);
        })));
    }
    // lazy loading
    /**
     * @param {?} route
     * @return {?}
     */
    canLoad(route) {
        return this.process((/** @type {?} */ (route.data)));
    }
    // all children route
    /**
     * @param {?} childRoute
     * @param {?} state
     * @return {?}
     */
    canActivateChild(childRoute, state) {
        return this.canActivate(childRoute, state);
    }
    // route
    /**
     * @param {?} route
     * @param {?} _state
     * @return {?}
     */
    canActivate(route, _state) {
        return this.process(route.data);
    }
}
ACLGuard.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ACLGuard.ctorParameters = () => [
    { type: ACLService },
    { type: Router }
];
/** @nocollapse */ ACLGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function ACLGuard_Factory() { return new ACLGuard(i0.ɵɵinject(i1.ACLService), i0.ɵɵinject(i2.Router)); }, token: ACLGuard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ACLGuard.prototype.srv;
    /**
     * @type {?}
     * @private
     */
    ACLGuard.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLWd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FjbC8iLCJzb3VyY2VzIjpbInNyYy9hY2wtZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBK0UsTUFBTSxFQUF1QixNQUFNLGlCQUFpQixDQUFDO0FBQzNJLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBZTNDLE1BQU0sT0FBTyxRQUFROzs7OztJQUNuQixZQUFvQixHQUFlLEVBQVUsTUFBYztRQUF2QyxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7Ozs7OztJQUV2RCxPQUFPLENBQUMsSUFBVTtRQUN4QixJQUFJLG1CQUNGLEtBQUssRUFBRSxJQUFJLEVBQ1gsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxJQUMxQixJQUFJLENBQ1IsQ0FBQzs7Y0FDSSxLQUFLLEdBQXdDLElBQUksQ0FBQyxLQUFLO1FBQzdELE9BQU8sQ0FBQyxLQUFLLElBQUksS0FBSyxZQUFZLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBQSxLQUFLLEVBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDM0csR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUMsRUFDekIsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ04sSUFBSSxDQUFDO2dCQUFFLE9BQU87WUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUdELE9BQU8sQ0FBQyxLQUFZO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBQSxLQUFLLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsVUFBa0MsRUFBRSxLQUEwQjtRQUM3RSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7Ozs7SUFFRCxXQUFXLENBQUMsS0FBNkIsRUFBRSxNQUFrQztRQUMzRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7OztZQS9CRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBZHpCLFVBQVU7WUFIbUUsTUFBTTs7Ozs7Ozs7SUFtQjlFLHVCQUF1Qjs7Ozs7SUFBRSwwQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBDYW5BY3RpdmF0ZSwgQ2FuQWN0aXZhdGVDaGlsZCwgQ2FuTG9hZCwgRGF0YSwgUm91dGUsIFJvdXRlciwgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBQ0xTZXJ2aWNlIH0gZnJvbSAnLi9hY2wuc2VydmljZSc7XG5pbXBvcnQgeyBBQ0xDYW5UeXBlIH0gZnJvbSAnLi9hY2wudHlwZSc7XG5cbi8qKlxuICogUm91dGluZyBndWFyZCBwcmV2ZW50IHVuYXV0aG9yaXplZCB1c2VycyB2aXNpdCB0aGUgcGFnZSwgW0FDTCBEb2N1bWVudF0oaHR0cHM6Ly9uZy1hbGFpbi5jb20vYWNsKS5cbiAqXG4gKiBgYGB0c1xuICogZGF0YToge1xuICogIHBhdGg6ICdob21lJyxcbiAqICBjYW5BY3RpdmF0ZTogWyBBQ0xHdWFyZCBdLFxuICogIGRhdGE6IHsgZ3VhcmQ6ICd1c2VyMScgfVxuICogfVxuICogYGBgXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQUNMR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSwgQ2FuQWN0aXZhdGVDaGlsZCwgQ2FuTG9hZCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3J2OiBBQ0xTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxuXG4gIHByaXZhdGUgcHJvY2VzcyhkYXRhOiBEYXRhKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgZGF0YSA9IHtcbiAgICAgIGd1YXJkOiBudWxsLFxuICAgICAgZ3VhcmRfdXJsOiB0aGlzLnNydi5ndWFyZF91cmwsXG4gICAgICAuLi5kYXRhLFxuICAgIH07XG4gICAgY29uc3QgZ3VhcmQ6IEFDTENhblR5cGUgfCBPYnNlcnZhYmxlPEFDTENhblR5cGU+ID0gZGF0YS5ndWFyZDtcbiAgICByZXR1cm4gKGd1YXJkICYmIGd1YXJkIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSA/IGd1YXJkIDogb2YoZ3VhcmQgIT0gbnVsbCA/IChndWFyZCBhcyBBQ0xDYW5UeXBlKSA6IG51bGwpKS5waXBlKFxuICAgICAgbWFwKHYgPT4gdGhpcy5zcnYuY2FuKHYpKSxcbiAgICAgIHRhcCh2ID0+IHtcbiAgICAgICAgaWYgKHYpIHJldHVybjtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChkYXRhLmd1YXJkX3VybCk7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgLy8gbGF6eSBsb2FkaW5nXG4gIGNhbkxvYWQocm91dGU6IFJvdXRlKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2Vzcyhyb3V0ZS5kYXRhISk7XG4gIH1cbiAgLy8gYWxsIGNoaWxkcmVuIHJvdXRlXG4gIGNhbkFjdGl2YXRlQ2hpbGQoY2hpbGRSb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5jYW5BY3RpdmF0ZShjaGlsZFJvdXRlLCBzdGF0ZSk7XG4gIH1cbiAgLy8gcm91dGVcbiAgY2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIF9zdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCB8IG51bGwpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKHJvdXRlLmRhdGEpO1xuICB9XG59XG4iXX0=