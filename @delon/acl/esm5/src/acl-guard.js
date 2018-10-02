/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Router, } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ACLService } from './acl.service';
import { DelonACLConfig } from './acl.config';
var ACLGuard = /** @class */ (function () {
    function ACLGuard(srv, router, options) {
        this.srv = srv;
        this.router = router;
        this.options = options;
    }
    /**
     * @param {?} guard
     * @return {?}
     */
    ACLGuard.prototype.process = /**
     * @param {?} guard
     * @return {?}
     */
    function (guard) {
        var _this = this;
        return (guard && guard instanceof Observable
            ? guard
            : of(typeof guard !== 'undefined' && guard !== null
                ? (/** @type {?} */ (guard))
                : null)).pipe(map(function (v) { return _this.srv.can(v); }), tap(function (v) {
            if (v)
                return;
            _this.router.navigateByUrl(_this.options.guard_url);
        }));
    };
    // lazy loading
    /**
     * @param {?} route
     * @return {?}
     */
    ACLGuard.prototype.canLoad = /**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        return this.process((route.data && route.data["guard"]) || null);
    };
    // all children route
    /**
     * @param {?} childRoute
     * @param {?} state
     * @return {?}
     */
    ACLGuard.prototype.canActivateChild = /**
     * @param {?} childRoute
     * @param {?} state
     * @return {?}
     */
    function (childRoute, state) {
        return this.canActivate(childRoute, state);
    };
    // route
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    ACLGuard.prototype.canActivate = /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    function (route, state) {
        return this.process((route.data && route.data["guard"]) || null);
    };
    ACLGuard.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ACLGuard.ctorParameters = function () { return [
        { type: ACLService },
        { type: Router },
        { type: DelonACLConfig }
    ]; };
    return ACLGuard;
}());
export { ACLGuard };
if (false) {
    /** @type {?} */
    ACLGuard.prototype.srv;
    /** @type {?} */
    ACLGuard.prototype.router;
    /** @type {?} */
    ACLGuard.prototype.options;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLWd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FjbC8iLCJzb3VyY2VzIjpbInNyYy9hY2wtZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFPTCxNQUFNLEdBQ1AsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDOztJQUk1QyxrQkFDVSxLQUNBLFFBQ0E7UUFGQSxRQUFHLEdBQUgsR0FBRztRQUNILFdBQU0sR0FBTixNQUFNO1FBQ04sWUFBTyxHQUFQLE9BQU87S0FDYjs7Ozs7SUFFSSwwQkFBTzs7OztjQUNiLEtBQTBDOztRQUUxQyxPQUFPLENBQUMsS0FBSyxJQUFJLEtBQUssWUFBWSxVQUFVO1lBQzFDLENBQUMsQ0FBQyxLQUFLO1lBQ1AsQ0FBQyxDQUFDLEVBQUUsQ0FDQSxPQUFPLEtBQUssS0FBSyxXQUFXLElBQUksS0FBSyxLQUFLLElBQUk7Z0JBQzVDLENBQUMsQ0FBQyxtQkFBQyxLQUFtQixFQUFDO2dCQUN2QixDQUFDLENBQUMsSUFBSSxDQUNULENBQ0osQ0FBQyxJQUFJLENBQ0osR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQWYsQ0FBZSxDQUFDLEVBQ3pCLEdBQUcsQ0FBQyxVQUFBLENBQUM7WUFDSCxJQUFJLENBQUM7Z0JBQUUsT0FBTztZQUNkLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbkQsQ0FBQyxDQUNILENBQUM7O0lBR0osZUFBZTs7Ozs7SUFDZiwwQkFBTzs7OztJQUFQLFVBQVEsS0FBWTtRQUNsQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLFNBQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO0tBQy9EO0lBQ0QscUJBQXFCOzs7Ozs7SUFDckIsbUNBQWdCOzs7OztJQUFoQixVQUNFLFVBQWtDLEVBQ2xDLEtBQTBCO1FBRTFCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDNUM7SUFDRCxRQUFROzs7Ozs7SUFDUiw4QkFBVzs7Ozs7SUFBWCxVQUNFLEtBQTZCLEVBQzdCLEtBQTBCO1FBRTFCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksU0FBTSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7S0FDL0Q7O2dCQTVDRixVQUFVOzs7O2dCQUpGLFVBQVU7Z0JBTmpCLE1BQU07Z0JBUUMsY0FBYzs7bUJBZnZCOztTQWtCYSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDYW5BY3RpdmF0ZSxcclxuICBDYW5BY3RpdmF0ZUNoaWxkLFxyXG4gIENhbkxvYWQsXHJcbiAgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcclxuICBSb3V0ZSxcclxuICBSb3V0ZXJTdGF0ZVNuYXBzaG90LFxyXG4gIFJvdXRlcixcclxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgQUNMU2VydmljZSB9IGZyb20gJy4vYWNsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBQ0xDYW5UeXBlIH0gZnJvbSAnLi9hY2wudHlwZSc7XHJcbmltcG9ydCB7IERlbG9uQUNMQ29uZmlnIH0gZnJvbSAnLi9hY2wuY29uZmlnJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFDTEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUsIENhbkFjdGl2YXRlQ2hpbGQsIENhbkxvYWQge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBzcnY6IEFDTFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBvcHRpb25zOiBEZWxvbkFDTENvbmZpZyxcclxuICApIHt9XHJcblxyXG4gIHByaXZhdGUgcHJvY2VzcyhcclxuICAgIGd1YXJkOiBBQ0xDYW5UeXBlIHwgT2JzZXJ2YWJsZTxBQ0xDYW5UeXBlPixcclxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiAoZ3VhcmQgJiYgZ3VhcmQgaW5zdGFuY2VvZiBPYnNlcnZhYmxlXHJcbiAgICAgID8gZ3VhcmRcclxuICAgICAgOiBvZihcclxuICAgICAgICAgIHR5cGVvZiBndWFyZCAhPT0gJ3VuZGVmaW5lZCcgJiYgZ3VhcmQgIT09IG51bGxcclxuICAgICAgICAgICAgPyAoZ3VhcmQgYXMgQUNMQ2FuVHlwZSlcclxuICAgICAgICAgICAgOiBudWxsLFxyXG4gICAgICAgIClcclxuICAgICkucGlwZShcclxuICAgICAgbWFwKHYgPT4gdGhpcy5zcnYuY2FuKHYpKSxcclxuICAgICAgdGFwKHYgPT4ge1xyXG4gICAgICAgIGlmICh2KSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCh0aGlzLm9wdGlvbnMuZ3VhcmRfdXJsKTtcclxuICAgICAgfSksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gbGF6eSBsb2FkaW5nXHJcbiAgY2FuTG9hZChyb3V0ZTogUm91dGUpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiB0aGlzLnByb2Nlc3MoKHJvdXRlLmRhdGEgJiYgcm91dGUuZGF0YS5ndWFyZCkgfHwgbnVsbCk7XHJcbiAgfVxyXG4gIC8vIGFsbCBjaGlsZHJlbiByb3V0ZVxyXG4gIGNhbkFjdGl2YXRlQ2hpbGQoXHJcbiAgICBjaGlsZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxyXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QsXHJcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm4gdGhpcy5jYW5BY3RpdmF0ZShjaGlsZFJvdXRlLCBzdGF0ZSk7XHJcbiAgfVxyXG4gIC8vIHJvdXRlXHJcbiAgY2FuQWN0aXZhdGUoXHJcbiAgICByb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcclxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90LFxyXG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvY2Vzcygocm91dGUuZGF0YSAmJiByb3V0ZS5kYXRhLmd1YXJkKSB8fCBudWxsKTtcclxuICB9XHJcbn1cclxuIl19