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
var ACLGuard = /** @class */ (function () {
    function ACLGuard(srv, router, options) {
        this.srv = srv;
        this.router = router;
        this.options = options;
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
        data = __assign({ guard: null, guard_url: this.options.guard_url }, data);
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
        { type: Router },
        { type: DelonACLConfig }
    ]; };
    /** @nocollapse */ ACLGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function ACLGuard_Factory() { return new ACLGuard(i0.ɵɵinject(i1.ACLService), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i3.DelonACLConfig)); }, token: ACLGuard, providedIn: "root" });
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
    /**
     * @type {?}
     * @private
     */
    ACLGuard.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLWd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FjbC8iLCJzb3VyY2VzIjpbInNyYy9hY2wtZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQStFLE1BQU0sRUFBdUIsTUFBTSxpQkFBaUIsQ0FBQztBQUMzSSxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQWMzQztJQUVFLGtCQUFvQixHQUFlLEVBQVUsTUFBYyxFQUFVLE9BQXVCO1FBQXhFLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7SUFBRyxDQUFDOzs7Ozs7SUFFeEYsMEJBQU87Ozs7O0lBQWYsVUFBZ0IsSUFBVTtRQUExQixpQkFjQztRQWJDLElBQUksY0FDRixLQUFLLEVBQUUsSUFBSSxFQUNYLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsSUFDOUIsSUFBSSxDQUNSLENBQUM7O1lBQ0ksS0FBSyxHQUF3QyxJQUFJLENBQUMsS0FBSztRQUM3RCxPQUFPLENBQUMsS0FBSyxJQUFJLEtBQUssWUFBWSxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQUEsS0FBSyxFQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQzNHLEdBQUc7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFmLENBQWUsRUFBQyxFQUN6QixHQUFHOzs7O1FBQUMsVUFBQSxDQUFDO1lBQ0gsSUFBSSxDQUFDO2dCQUFFLE9BQU87WUFDZCxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCxlQUFlOzs7Ozs7SUFDZiwwQkFBTzs7Ozs7O0lBQVAsVUFBUSxLQUFZO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBQSxLQUFLLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0QscUJBQXFCOzs7Ozs7O0lBQ3JCLG1DQUFnQjs7Ozs7OztJQUFoQixVQUFpQixVQUFrQyxFQUFFLEtBQTBCO1FBQzdFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNELFFBQVE7Ozs7Ozs7SUFDUiw4QkFBVzs7Ozs7OztJQUFYLFVBQVksS0FBNkIsRUFBRSxNQUFrQztRQUMzRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7O2dCQS9CRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O2dCQWR6QixVQUFVO2dCQUptRSxNQUFNO2dCQUduRixjQUFjOzs7bUJBSnZCO0NBbURDLEFBaENELElBZ0NDO1NBL0JZLFFBQVE7Ozs7OztJQUNQLHVCQUF1Qjs7Ozs7SUFBRSwwQkFBc0I7Ozs7O0lBQUUsMkJBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgQ2FuQWN0aXZhdGUsIENhbkFjdGl2YXRlQ2hpbGQsIENhbkxvYWQsIERhdGEsIFJvdXRlLCBSb3V0ZXIsIFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRGVsb25BQ0xDb25maWcgfSBmcm9tICcuL2FjbC5jb25maWcnO1xuaW1wb3J0IHsgQUNMU2VydmljZSB9IGZyb20gJy4vYWNsLnNlcnZpY2UnO1xuaW1wb3J0IHsgQUNMQ2FuVHlwZSB9IGZyb20gJy4vYWNsLnR5cGUnO1xuXG4vKipcbiAqIFJvdXRpbmcgZ3VhcmQgcHJldmVudCB1bmF1dGhvcml6ZWQgdXNlcnMgdmlzaXQgdGhlIHBhZ2UsIFtBQ0wgRG9jdW1lbnRdKGh0dHBzOi8vbmctYWxhaW4uY29tL2FjbCkuXG4gKlxuICogYGBgdHNcbiAqIGRhdGE6IHtcbiAqICBwYXRoOiAnaG9tZScsXG4gKiAgY2FuQWN0aXZhdGU6IFsgQUNMR3VhcmQgXSxcbiAqICBkYXRhOiB7IGd1YXJkOiAndXNlcjEnIH1cbiAqIH1cbiAqIGBgYFxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFDTEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUsIENhbkFjdGl2YXRlQ2hpbGQsIENhbkxvYWQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNydjogQUNMU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBvcHRpb25zOiBEZWxvbkFDTENvbmZpZykge31cblxuICBwcml2YXRlIHByb2Nlc3MoZGF0YTogRGF0YSk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGRhdGEgPSB7XG4gICAgICBndWFyZDogbnVsbCxcbiAgICAgIGd1YXJkX3VybDogdGhpcy5vcHRpb25zLmd1YXJkX3VybCxcbiAgICAgIC4uLmRhdGEsXG4gICAgfTtcbiAgICBjb25zdCBndWFyZDogQUNMQ2FuVHlwZSB8IE9ic2VydmFibGU8QUNMQ2FuVHlwZT4gPSBkYXRhLmd1YXJkO1xuICAgIHJldHVybiAoZ3VhcmQgJiYgZ3VhcmQgaW5zdGFuY2VvZiBPYnNlcnZhYmxlID8gZ3VhcmQgOiBvZihndWFyZCAhPSBudWxsID8gKGd1YXJkIGFzIEFDTENhblR5cGUpIDogbnVsbCkpLnBpcGUoXG4gICAgICBtYXAodiA9PiB0aGlzLnNydi5jYW4odikpLFxuICAgICAgdGFwKHYgPT4ge1xuICAgICAgICBpZiAodikgcmV0dXJuO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGRhdGEuZ3VhcmRfdXJsKTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICAvLyBsYXp5IGxvYWRpbmdcbiAgY2FuTG9hZChyb3V0ZTogUm91dGUpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKHJvdXRlLmRhdGEhKTtcbiAgfVxuICAvLyBhbGwgY2hpbGRyZW4gcm91dGVcbiAgY2FuQWN0aXZhdGVDaGlsZChjaGlsZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmNhbkFjdGl2YXRlKGNoaWxkUm91dGUsIHN0YXRlKTtcbiAgfVxuICAvLyByb3V0ZVxuICBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgX3N0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90IHwgbnVsbCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3Mocm91dGUuZGF0YSk7XG4gIH1cbn1cbiJdfQ==