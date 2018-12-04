/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                ? ((/** @type {?} */ (guard)))
                : null)).pipe(map(function (v) { return _this.srv.can(v); }), tap(function (v) {
            if (v)
                return;
            _this.router.navigateByUrl(_this.options.guard_url);
        }));
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
        return this.process((route.data && route.data.guard) || null);
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
     * @param {?} state
     * @return {?}
     */
    ACLGuard.prototype.canActivate = 
    // route
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    function (route, state) {
        return this.process((route.data && route.data.guard) || null);
    };
    ACLGuard.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ACLGuard.ctorParameters = function () { return [
        { type: ACLService },
        { type: Router },
        { type: DelonACLConfig }
    ]; };
    /** @nocollapse */ ACLGuard.ngInjectableDef = i0.defineInjectable({ factory: function ACLGuard_Factory() { return new ACLGuard(i0.inject(i1.ACLService), i0.inject(i2.Router), i0.inject(i3.DelonACLConfig)); }, token: ACLGuard, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLWd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FjbC8iLCJzb3VyY2VzIjpbInNyYy9hY2wtZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQU1MLE1BQU0sR0FFUCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQUczQztJQUVFLGtCQUNVLEdBQWUsRUFDZixNQUFjLEVBQ2QsT0FBdUI7UUFGdkIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxZQUFPLEdBQVAsT0FBTyxDQUFnQjtJQUM3QixDQUFDOzs7OztJQUVHLDBCQUFPOzs7O0lBQWYsVUFDRSxLQUEwQztRQUQ1QyxpQkFpQkM7UUFkQyxPQUFPLENBQUMsS0FBSyxJQUFJLEtBQUssWUFBWSxVQUFVO1lBQzFDLENBQUMsQ0FBQyxLQUFLO1lBQ1AsQ0FBQyxDQUFDLEVBQUUsQ0FDRixPQUFPLEtBQUssS0FBSyxXQUFXLElBQUksS0FBSyxLQUFLLElBQUk7Z0JBQzVDLENBQUMsQ0FBQyxDQUFDLG1CQUFBLEtBQUssRUFBYyxDQUFDO2dCQUN2QixDQUFDLENBQUMsSUFBSSxDQUNULENBQ0YsQ0FBQyxJQUFJLENBQ0osR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQWYsQ0FBZSxDQUFDLEVBQ3pCLEdBQUcsQ0FBQyxVQUFBLENBQUM7WUFDSCxJQUFJLENBQUM7Z0JBQUUsT0FBTztZQUNkLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEQsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCxlQUFlOzs7Ozs7SUFDZiwwQkFBTzs7Ozs7O0lBQVAsVUFBUSxLQUFZO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBQ0QscUJBQXFCOzs7Ozs7O0lBQ3JCLG1DQUFnQjs7Ozs7OztJQUFoQixVQUNFLFVBQWtDLEVBQ2xDLEtBQTBCO1FBRTFCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNELFFBQVE7Ozs7Ozs7SUFDUiw4QkFBVzs7Ozs7OztJQUFYLFVBQ0UsS0FBNkIsRUFDN0IsS0FBMEI7UUFFMUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO0lBQ2hFLENBQUM7O2dCQTVDRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O2dCQUh6QixVQUFVO2dCQVBqQixNQUFNO2dCQU1DLGNBQWM7OzttQkFidkI7Q0E4REMsQUE3Q0QsSUE2Q0M7U0E1Q1ksUUFBUTs7O0lBRWpCLHVCQUF1Qjs7SUFDdkIsMEJBQXNCOztJQUN0QiwyQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICBDYW5BY3RpdmF0ZSxcbiAgQ2FuQWN0aXZhdGVDaGlsZCxcbiAgQ2FuTG9hZCxcbiAgUm91dGUsXG4gIFJvdXRlcixcbiAgUm91dGVyU3RhdGVTbmFwc2hvdCxcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IG9mLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRGVsb25BQ0xDb25maWcgfSBmcm9tICcuL2FjbC5jb25maWcnO1xuaW1wb3J0IHsgQUNMU2VydmljZSB9IGZyb20gJy4vYWNsLnNlcnZpY2UnO1xuaW1wb3J0IHsgQUNMQ2FuVHlwZSB9IGZyb20gJy4vYWNsLnR5cGUnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFDTEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUsIENhbkFjdGl2YXRlQ2hpbGQsIENhbkxvYWQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNydjogQUNMU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgb3B0aW9uczogRGVsb25BQ0xDb25maWcsXG4gICkgeyB9XG5cbiAgcHJpdmF0ZSBwcm9jZXNzKFxuICAgIGd1YXJkOiBBQ0xDYW5UeXBlIHwgT2JzZXJ2YWJsZTxBQ0xDYW5UeXBlPixcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIChndWFyZCAmJiBndWFyZCBpbnN0YW5jZW9mIE9ic2VydmFibGVcbiAgICAgID8gZ3VhcmRcbiAgICAgIDogb2YoXG4gICAgICAgIHR5cGVvZiBndWFyZCAhPT0gJ3VuZGVmaW5lZCcgJiYgZ3VhcmQgIT09IG51bGxcbiAgICAgICAgICA/IChndWFyZCBhcyBBQ0xDYW5UeXBlKVxuICAgICAgICAgIDogbnVsbCxcbiAgICAgIClcbiAgICApLnBpcGUoXG4gICAgICBtYXAodiA9PiB0aGlzLnNydi5jYW4odikpLFxuICAgICAgdGFwKHYgPT4ge1xuICAgICAgICBpZiAodikgcmV0dXJuO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMub3B0aW9ucy5ndWFyZF91cmwpO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIC8vIGxhenkgbG9hZGluZ1xuICBjYW5Mb2FkKHJvdXRlOiBSb3V0ZSk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3MoKHJvdXRlLmRhdGEgJiYgcm91dGUuZGF0YS5ndWFyZCkgfHwgbnVsbCk7XG4gIH1cbiAgLy8gYWxsIGNoaWxkcmVuIHJvdXRlXG4gIGNhbkFjdGl2YXRlQ2hpbGQoXG4gICAgY2hpbGRSb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCxcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuY2FuQWN0aXZhdGUoY2hpbGRSb3V0ZSwgc3RhdGUpO1xuICB9XG4gIC8vIHJvdXRlXG4gIGNhbkFjdGl2YXRlKFxuICAgIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90LFxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKChyb3V0ZS5kYXRhICYmIHJvdXRlLmRhdGEuZ3VhcmQpIHx8IG51bGwpO1xuICB9XG59XG4iXX0=