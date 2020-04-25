/**
 * @fileoverview added by tsickle
 * Generated from: src/acl-guard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign } from "tslib";
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
var ACLGuard = /** @class */ (function () {
    function ACLGuard(srv, router) {
        this.srv = srv;
        this.router = router;
    }
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    ACLGuard.prototype.process = /**
     * @private
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        data = __assign({ guard: null, guard_url: this.srv.guard_url }, data);
        /** @type {?} */
        var guard = data.guard;
        return (guard && guard instanceof Observable ? guard : of(guard != null ? ((/** @type {?} */ (guard))) : null)).pipe(map((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return _this.srv.can(v); })), tap((/**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (v)
                return;
            _this.router.navigateByUrl(data.guard_url);
        })));
    };
    // lazy loading
    // lazy loading
    /**
     * @param {?} route
     * @return {?}
     */
    ACLGuard.prototype.canLoad = 
    // lazy loading
    /**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        return this.process((/** @type {?} */ (route.data)));
    };
    // all children route
    // all children route
    /**
     * @param {?} childRoute
     * @param {?} state
     * @return {?}
     */
    ACLGuard.prototype.canActivateChild = 
    // all children route
    /**
     * @param {?} childRoute
     * @param {?} state
     * @return {?}
     */
    function (childRoute, state) {
        return this.canActivate(childRoute, state);
    };
    // route
    // route
    /**
     * @param {?} route
     * @param {?} _state
     * @return {?}
     */
    ACLGuard.prototype.canActivate = 
    // route
    /**
     * @param {?} route
     * @param {?} _state
     * @return {?}
     */
    function (route, _state) {
        return this.process(route.data);
    };
    ACLGuard.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ACLGuard.ctorParameters = function () { return [
        { type: ACLService },
        { type: Router }
    ]; };
    /** @nocollapse */ ACLGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function ACLGuard_Factory() { return new ACLGuard(i0.ɵɵinject(i1.ACLService), i0.ɵɵinject(i2.Router)); }, token: ACLGuard, providedIn: "root" });
    return ACLGuard;
}());
export { ACLGuard };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLWd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FjbC8iLCJzb3VyY2VzIjpbInNyYy9hY2wtZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQStFLE1BQU0sRUFBdUIsTUFBTSxpQkFBaUIsQ0FBQztBQUMzSSxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWMzQztJQUVFLGtCQUFvQixHQUFlLEVBQVUsTUFBYztRQUF2QyxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7Ozs7OztJQUV2RCwwQkFBTzs7Ozs7SUFBZixVQUFnQixJQUFVO1FBQTFCLGlCQWNDO1FBYkMsSUFBSSxjQUNGLEtBQUssRUFBRSxJQUFJLEVBQ1gsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxJQUMxQixJQUFJLENBQ1IsQ0FBQzs7WUFDSSxLQUFLLEdBQXdDLElBQUksQ0FBQyxLQUFLO1FBQzdELE9BQU8sQ0FBQyxLQUFLLElBQUksS0FBSyxZQUFZLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBQSxLQUFLLEVBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDM0csR0FBRzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQWYsQ0FBZSxFQUFDLEVBQ3pCLEdBQUc7Ozs7UUFBQyxVQUFBLENBQUM7WUFDSCxJQUFJLENBQUM7Z0JBQUUsT0FBTztZQUNkLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QyxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELGVBQWU7Ozs7OztJQUNmLDBCQUFPOzs7Ozs7SUFBUCxVQUFRLEtBQVk7UUFDbEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFBLEtBQUssQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDRCxxQkFBcUI7Ozs7Ozs7SUFDckIsbUNBQWdCOzs7Ozs7O0lBQWhCLFVBQWlCLFVBQWtDLEVBQUUsS0FBMEI7UUFDN0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsUUFBUTs7Ozs7OztJQUNSLDhCQUFXOzs7Ozs7O0lBQVgsVUFBWSxLQUE2QixFQUFFLE1BQWtDO1FBQzNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Z0JBL0JGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBZHpCLFVBQVU7Z0JBSG1FLE1BQU07OzttQkFENUY7Q0FrREMsQUFoQ0QsSUFnQ0M7U0EvQlksUUFBUTs7Ozs7O0lBQ1AsdUJBQXVCOzs7OztJQUFFLDBCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIENhbkFjdGl2YXRlLCBDYW5BY3RpdmF0ZUNoaWxkLCBDYW5Mb2FkLCBEYXRhLCBSb3V0ZSwgUm91dGVyLCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICcuL2FjbC5zZXJ2aWNlJztcbmltcG9ydCB7IEFDTENhblR5cGUgfSBmcm9tICcuL2FjbC50eXBlJztcblxuLyoqXG4gKiBSb3V0aW5nIGd1YXJkIHByZXZlbnQgdW5hdXRob3JpemVkIHVzZXJzIHZpc2l0IHRoZSBwYWdlLCBbQUNMIERvY3VtZW50XShodHRwczovL25nLWFsYWluLmNvbS9hY2wpLlxuICpcbiAqIGBgYHRzXG4gKiBkYXRhOiB7XG4gKiAgcGF0aDogJ2hvbWUnLFxuICogIGNhbkFjdGl2YXRlOiBbIEFDTEd1YXJkIF0sXG4gKiAgZGF0YTogeyBndWFyZDogJ3VzZXIxJyB9XG4gKiB9XG4gKiBgYGBcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBQ0xHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlLCBDYW5BY3RpdmF0ZUNoaWxkLCBDYW5Mb2FkIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IEFDTFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgcHJpdmF0ZSBwcm9jZXNzKGRhdGE6IERhdGEpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICBkYXRhID0ge1xuICAgICAgZ3VhcmQ6IG51bGwsXG4gICAgICBndWFyZF91cmw6IHRoaXMuc3J2Lmd1YXJkX3VybCxcbiAgICAgIC4uLmRhdGEsXG4gICAgfTtcbiAgICBjb25zdCBndWFyZDogQUNMQ2FuVHlwZSB8IE9ic2VydmFibGU8QUNMQ2FuVHlwZT4gPSBkYXRhLmd1YXJkO1xuICAgIHJldHVybiAoZ3VhcmQgJiYgZ3VhcmQgaW5zdGFuY2VvZiBPYnNlcnZhYmxlID8gZ3VhcmQgOiBvZihndWFyZCAhPSBudWxsID8gKGd1YXJkIGFzIEFDTENhblR5cGUpIDogbnVsbCkpLnBpcGUoXG4gICAgICBtYXAodiA9PiB0aGlzLnNydi5jYW4odikpLFxuICAgICAgdGFwKHYgPT4ge1xuICAgICAgICBpZiAodikgcmV0dXJuO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGRhdGEuZ3VhcmRfdXJsKTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICAvLyBsYXp5IGxvYWRpbmdcbiAgY2FuTG9hZChyb3V0ZTogUm91dGUpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKHJvdXRlLmRhdGEhKTtcbiAgfVxuICAvLyBhbGwgY2hpbGRyZW4gcm91dGVcbiAgY2FuQWN0aXZhdGVDaGlsZChjaGlsZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmNhbkFjdGl2YXRlKGNoaWxkUm91dGUsIHN0YXRlKTtcbiAgfVxuICAvLyByb3V0ZVxuICBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgX3N0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90IHwgbnVsbCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3Mocm91dGUuZGF0YSk7XG4gIH1cbn1cbiJdfQ==