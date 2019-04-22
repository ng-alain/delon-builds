/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router, } from '@angular/router';
import { of, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DelonACLConfig } from './acl.config';
import { ACLService } from './acl.service';
import * as i0 from "@angular/core";
import * as i1 from "./acl.service";
import * as i2 from "@angular/router";
import * as i3 from "./acl.config";
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
     * @param {?} guard
     * @return {?}
     */
    process(guard) {
        return (guard && guard instanceof Observable
            ? guard
            : of(typeof guard !== 'undefined' && guard !== null ? ((/** @type {?} */ (guard))) : null)).pipe(map((/**
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
            this.router.navigateByUrl((/** @type {?} */ (this.options.guard_url)));
        })));
    }
    // lazy loading
    /**
     * @param {?} route
     * @return {?}
     */
    canLoad(route) {
        return this.process((route.data && route.data.guard) || null);
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
     * @param {?} state
     * @return {?}
     */
    canActivate(route, state) {
        return this.process((route.data && route.data.guard) || null);
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
/** @nocollapse */ ACLGuard.ngInjectableDef = i0.defineInjectable({ factory: function ACLGuard_Factory() { return new ACLGuard(i0.inject(i1.ACLService), i0.inject(i2.Router), i0.inject(i3.DelonACLConfig)); }, token: ACLGuard, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLWd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FjbC8iLCJzb3VyY2VzIjpbInNyYy9hY2wtZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQU1MLE1BQU0sR0FFUCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQUkzQyxNQUFNLE9BQU8sUUFBUTs7Ozs7O0lBQ25CLFlBQW9CLEdBQWUsRUFBVSxNQUFjLEVBQVUsT0FBdUI7UUFBeEUsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtJQUFHLENBQUM7Ozs7OztJQUV4RixPQUFPLENBQUMsS0FBMEM7UUFDeEQsT0FBTyxDQUFDLEtBQUssSUFBSSxLQUFLLFlBQVksVUFBVTtZQUMxQyxDQUFDLENBQUMsS0FBSztZQUNQLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxLQUFLLEtBQUssV0FBVyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQUEsS0FBSyxFQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQ3BGLENBQUMsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDLEVBQ3pCLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRTtZQUNOLElBQUksQ0FBQztnQkFBRSxPQUFPO1lBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsbUJBQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDO1FBQ3JELENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7SUFHRCxPQUFPLENBQUMsS0FBWTtRQUNsQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Ozs7OztJQUVELGdCQUFnQixDQUNkLFVBQWtDLEVBQ2xDLEtBQTBCO1FBRTFCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7OztJQUVELFdBQVcsQ0FBQyxLQUE2QixFQUFFLEtBQWlDO1FBQzFFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7WUEvQkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztZQUh6QixVQUFVO1lBUGpCLE1BQU07WUFNQyxjQUFjOzs7Ozs7OztJQU1ULHVCQUF1Qjs7Ozs7SUFBRSwwQkFBc0I7Ozs7O0lBQUUsMkJBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgQ2FuQWN0aXZhdGUsXG4gIENhbkFjdGl2YXRlQ2hpbGQsXG4gIENhbkxvYWQsXG4gIFJvdXRlLFxuICBSb3V0ZXIsXG4gIFJvdXRlclN0YXRlU25hcHNob3QsXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBvZiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERlbG9uQUNMQ29uZmlnIH0gZnJvbSAnLi9hY2wuY29uZmlnJztcbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICcuL2FjbC5zZXJ2aWNlJztcbmltcG9ydCB7IEFDTENhblR5cGUgfSBmcm9tICcuL2FjbC50eXBlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBQ0xHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlLCBDYW5BY3RpdmF0ZUNoaWxkLCBDYW5Mb2FkIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IEFDTFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgb3B0aW9uczogRGVsb25BQ0xDb25maWcpIHt9XG5cbiAgcHJpdmF0ZSBwcm9jZXNzKGd1YXJkOiBBQ0xDYW5UeXBlIHwgT2JzZXJ2YWJsZTxBQ0xDYW5UeXBlPik6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiAoZ3VhcmQgJiYgZ3VhcmQgaW5zdGFuY2VvZiBPYnNlcnZhYmxlXG4gICAgICA/IGd1YXJkXG4gICAgICA6IG9mKHR5cGVvZiBndWFyZCAhPT0gJ3VuZGVmaW5lZCcgJiYgZ3VhcmQgIT09IG51bGwgPyAoZ3VhcmQgYXMgQUNMQ2FuVHlwZSkgOiBudWxsKVxuICAgICkucGlwZShcbiAgICAgIG1hcCh2ID0+IHRoaXMuc3J2LmNhbih2KSksXG4gICAgICB0YXAodiA9PiB7XG4gICAgICAgIGlmICh2KSByZXR1cm47XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy5vcHRpb25zLmd1YXJkX3VybCEpO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIC8vIGxhenkgbG9hZGluZ1xuICBjYW5Mb2FkKHJvdXRlOiBSb3V0ZSk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3MoKHJvdXRlLmRhdGEgJiYgcm91dGUuZGF0YS5ndWFyZCkgfHwgbnVsbCk7XG4gIH1cbiAgLy8gYWxsIGNoaWxkcmVuIHJvdXRlXG4gIGNhbkFjdGl2YXRlQ2hpbGQoXG4gICAgY2hpbGRSb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCxcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuY2FuQWN0aXZhdGUoY2hpbGRSb3V0ZSwgc3RhdGUpO1xuICB9XG4gIC8vIHJvdXRlXG4gIGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCB8IG51bGwpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKChyb3V0ZS5kYXRhICYmIHJvdXRlLmRhdGEuZ3VhcmQpIHx8IG51bGwpO1xuICB9XG59XG4iXX0=