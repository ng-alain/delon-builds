/**
 * @fileoverview added by tsickle
 * Generated from: src/acl-guard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DelonACLConfig } from './acl.config';
import { ACLService } from './acl.service';
import * as i0 from "@angular/core";
import * as i1 from "./acl.service";
import * as i2 from "@angular/router";
import * as i3 from "./acl.config";
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
     * @param {?} options
     */
    constructor(srv, router, options) {
        this.srv = srv;
        this.router = router;
        this.options = options;
    }
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    process(data) {
        data = Object.assign({ guard: null, guard_url: this.options.guard_url }, data);
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
    { type: Router },
    { type: DelonACLConfig }
];
/** @nocollapse */ ACLGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ACLGuard_Factory() { return new ACLGuard(i0.ɵɵinject(i1.ACLService), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i3.DelonACLConfig)); }, token: ACLGuard, providedIn: "root" });
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
    /**
     * @type {?}
     * @private
     */
    ACLGuard.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLWd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FjbC8iLCJzb3VyY2VzIjpbInNyYy9hY2wtZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBeUUsTUFBTSxFQUE2QixNQUFNLGlCQUFpQixDQUFDO0FBQzNJLE9BQU8sRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FBZTNDLE1BQU0sT0FBTyxRQUFROzs7Ozs7SUFDbkIsWUFBb0IsR0FBZSxFQUFVLE1BQWMsRUFBVSxPQUF1QjtRQUF4RSxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWdCO0lBQUksQ0FBQzs7Ozs7O0lBRXpGLE9BQU8sQ0FBQyxJQUFVO1FBQ3hCLElBQUksbUJBQ0YsS0FBSyxFQUFFLElBQUksRUFDWCxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQzlCLElBQUksQ0FDUixDQUFDOztjQUNJLEtBQUssR0FBd0MsSUFBSSxDQUFDLEtBQUs7UUFDN0QsT0FBTyxDQUFDLEtBQUssSUFBSSxLQUFLLFlBQVksVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFBLEtBQUssRUFBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUMzRyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQyxFQUN6QixHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDTixJQUFJLENBQUM7Z0JBQUUsT0FBTztZQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QyxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBR0QsT0FBTyxDQUFDLEtBQVk7UUFDbEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFBLEtBQUssQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxVQUFrQyxFQUFFLEtBQTBCO1FBQzdFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7OztJQUVELFdBQVcsQ0FBQyxLQUE2QixFQUFFLE1BQWtDO1FBQzNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7O1lBL0JGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFkekIsVUFBVTtZQUw2RCxNQUFNO1lBSTdFLGNBQWM7Ozs7Ozs7O0lBaUJULHVCQUF1Qjs7Ozs7SUFBRSwwQkFBc0I7Ozs7O0lBQUUsMkJBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgQ2FuQWN0aXZhdGUsIENhbkFjdGl2YXRlQ2hpbGQsIENhbkxvYWQsIFJvdXRlLCBSb3V0ZXIsIFJvdXRlclN0YXRlU25hcHNob3QsIERhdGEgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgb2YsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEZWxvbkFDTENvbmZpZyB9IGZyb20gJy4vYWNsLmNvbmZpZyc7XG5pbXBvcnQgeyBBQ0xTZXJ2aWNlIH0gZnJvbSAnLi9hY2wuc2VydmljZSc7XG5pbXBvcnQgeyBBQ0xDYW5UeXBlIH0gZnJvbSAnLi9hY2wudHlwZSc7XG5cbi8qKlxuICogUm91dGluZyBndWFyZCBwcmV2ZW50IHVuYXV0aG9yaXplZCB1c2VycyB2aXNpdCB0aGUgcGFnZSwgW0FDTCBEb2N1bWVudF0oaHR0cHM6Ly9uZy1hbGFpbi5jb20vYWNsKS5cbiAqXG4gKiBgYGB0c1xuICogZGF0YToge1xuICogIHBhdGg6ICdob21lJyxcbiAqICBjYW5BY3RpdmF0ZTogWyBBQ0xHdWFyZCBdLFxuICogIGRhdGE6IHsgZ3VhcmQ6ICd1c2VyMScgfVxuICogfVxuICogYGBgXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQUNMR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSwgQ2FuQWN0aXZhdGVDaGlsZCwgQ2FuTG9hZCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3J2OiBBQ0xTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIG9wdGlvbnM6IERlbG9uQUNMQ29uZmlnKSB7IH1cblxuICBwcml2YXRlIHByb2Nlc3MoZGF0YTogRGF0YSk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGRhdGEgPSB7XG4gICAgICBndWFyZDogbnVsbCxcbiAgICAgIGd1YXJkX3VybDogdGhpcy5vcHRpb25zLmd1YXJkX3VybCxcbiAgICAgIC4uLmRhdGEsXG4gICAgfTtcbiAgICBjb25zdCBndWFyZDogQUNMQ2FuVHlwZSB8IE9ic2VydmFibGU8QUNMQ2FuVHlwZT4gPSBkYXRhLmd1YXJkO1xuICAgIHJldHVybiAoZ3VhcmQgJiYgZ3VhcmQgaW5zdGFuY2VvZiBPYnNlcnZhYmxlID8gZ3VhcmQgOiBvZihndWFyZCAhPSBudWxsID8gKGd1YXJkIGFzIEFDTENhblR5cGUpIDogbnVsbCkpLnBpcGUoXG4gICAgICBtYXAodiA9PiB0aGlzLnNydi5jYW4odikpLFxuICAgICAgdGFwKHYgPT4ge1xuICAgICAgICBpZiAodikgcmV0dXJuO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGRhdGEuZ3VhcmRfdXJsKTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICAvLyBsYXp5IGxvYWRpbmdcbiAgY2FuTG9hZChyb3V0ZTogUm91dGUpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKHJvdXRlLmRhdGEhKTtcbiAgfVxuICAvLyBhbGwgY2hpbGRyZW4gcm91dGVcbiAgY2FuQWN0aXZhdGVDaGlsZChjaGlsZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmNhbkFjdGl2YXRlKGNoaWxkUm91dGUsIHN0YXRlKTtcbiAgfVxuICAvLyByb3V0ZVxuICBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgX3N0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90IHwgbnVsbCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3Mocm91dGUuZGF0YSk7XG4gIH1cbn1cbiJdfQ==