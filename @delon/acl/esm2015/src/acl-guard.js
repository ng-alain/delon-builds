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
     * @param {?} guard
     * @return {?}
     */
    process(guard) {
        return (guard && guard instanceof Observable
            ? guard
            : of(typeof guard !== 'undefined' && guard !== null
                ? (/** @type {?} */ (guard))
                : null)).pipe(map(v => this.srv.can(v)), tap(v => {
            if (v)
                return;
            this.router.navigateByUrl(this.options.guard_url);
        }));
    }
    /**
     * @param {?} route
     * @return {?}
     */
    canLoad(route) {
        return this.process((route.data && route.data["guard"]) || null);
    }
    /**
     * @param {?} childRoute
     * @param {?} state
     * @return {?}
     */
    canActivateChild(childRoute, state) {
        return this.canActivate(childRoute, state);
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    canActivate(route, state) {
        return this.process((route.data && route.data["guard"]) || null);
    }
}
ACLGuard.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ACLGuard.ctorParameters = () => [
    { type: ACLService },
    { type: Router },
    { type: DelonACLConfig }
];
if (false) {
    /** @type {?} */
    ACLGuard.prototype.srv;
    /** @type {?} */
    ACLGuard.prototype.router;
    /** @type {?} */
    ACLGuard.prototype.options;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLWd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FjbC8iLCJzb3VyY2VzIjpbInNyYy9hY2wtZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFPTCxNQUFNLEdBQ1AsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRzlDLE1BQU07Ozs7OztJQUNKLFlBQ1UsS0FDQSxRQUNBO1FBRkEsUUFBRyxHQUFILEdBQUc7UUFDSCxXQUFNLEdBQU4sTUFBTTtRQUNOLFlBQU8sR0FBUCxPQUFPO0tBQ2I7Ozs7O0lBRUksT0FBTyxDQUNiLEtBQTBDO1FBRTFDLE9BQU8sQ0FBQyxLQUFLLElBQUksS0FBSyxZQUFZLFVBQVU7WUFDMUMsQ0FBQyxDQUFDLEtBQUs7WUFDUCxDQUFDLENBQUMsRUFBRSxDQUNBLE9BQU8sS0FBSyxLQUFLLFdBQVcsSUFBSSxLQUFLLEtBQUssSUFBSTtnQkFDNUMsQ0FBQyxDQUFDLG1CQUFDLEtBQW1CLEVBQUM7Z0JBQ3ZCLENBQUMsQ0FBQyxJQUFJLENBQ1QsQ0FDSixDQUFDLElBQUksQ0FDSixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUN6QixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDTixJQUFJLENBQUM7Z0JBQUUsT0FBTztZQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbkQsQ0FBQyxDQUNILENBQUM7Ozs7OztJQUlKLE9BQU8sQ0FBQyxLQUFZO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksU0FBTSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7S0FDL0Q7Ozs7OztJQUVELGdCQUFnQixDQUNkLFVBQWtDLEVBQ2xDLEtBQTBCO1FBRTFCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDNUM7Ozs7OztJQUVELFdBQVcsQ0FDVCxLQUE2QixFQUM3QixLQUEwQjtRQUUxQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLFNBQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO0tBQy9EOzs7WUE1Q0YsVUFBVTs7OztZQUpGLFVBQVU7WUFOakIsTUFBTTtZQVFDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENhbkFjdGl2YXRlLFxyXG4gIENhbkFjdGl2YXRlQ2hpbGQsXHJcbiAgQ2FuTG9hZCxcclxuICBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxyXG4gIFJvdXRlLFxyXG4gIFJvdXRlclN0YXRlU25hcHNob3QsXHJcbiAgUm91dGVyLFxyXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBBQ0xTZXJ2aWNlIH0gZnJvbSAnLi9hY2wuc2VydmljZSc7XHJcbmltcG9ydCB7IEFDTENhblR5cGUgfSBmcm9tICcuL2FjbC50eXBlJztcclxuaW1wb3J0IHsgRGVsb25BQ0xDb25maWcgfSBmcm9tICcuL2FjbC5jb25maWcnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQUNMR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSwgQ2FuQWN0aXZhdGVDaGlsZCwgQ2FuTG9hZCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHNydjogQUNMU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIG9wdGlvbnM6IERlbG9uQUNMQ29uZmlnLFxyXG4gICkge31cclxuXHJcbiAgcHJpdmF0ZSBwcm9jZXNzKFxyXG4gICAgZ3VhcmQ6IEFDTENhblR5cGUgfCBPYnNlcnZhYmxlPEFDTENhblR5cGU+LFxyXG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIChndWFyZCAmJiBndWFyZCBpbnN0YW5jZW9mIE9ic2VydmFibGVcclxuICAgICAgPyBndWFyZFxyXG4gICAgICA6IG9mKFxyXG4gICAgICAgICAgdHlwZW9mIGd1YXJkICE9PSAndW5kZWZpbmVkJyAmJiBndWFyZCAhPT0gbnVsbFxyXG4gICAgICAgICAgICA/IChndWFyZCBhcyBBQ0xDYW5UeXBlKVxyXG4gICAgICAgICAgICA6IG51bGwsXHJcbiAgICAgICAgKVxyXG4gICAgKS5waXBlKFxyXG4gICAgICBtYXAodiA9PiB0aGlzLnNydi5jYW4odikpLFxyXG4gICAgICB0YXAodiA9PiB7XHJcbiAgICAgICAgaWYgKHYpIHJldHVybjtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMub3B0aW9ucy5ndWFyZF91cmwpO1xyXG4gICAgICB9KSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyBsYXp5IGxvYWRpbmdcclxuICBjYW5Mb2FkKHJvdXRlOiBSb3V0ZSk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvY2Vzcygocm91dGUuZGF0YSAmJiByb3V0ZS5kYXRhLmd1YXJkKSB8fCBudWxsKTtcclxuICB9XHJcbiAgLy8gYWxsIGNoaWxkcmVuIHJvdXRlXHJcbiAgY2FuQWN0aXZhdGVDaGlsZChcclxuICAgIGNoaWxkUm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXHJcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCxcclxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiB0aGlzLmNhbkFjdGl2YXRlKGNoaWxkUm91dGUsIHN0YXRlKTtcclxuICB9XHJcbiAgLy8gcm91dGVcclxuICBjYW5BY3RpdmF0ZShcclxuICAgIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxyXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QsXHJcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKChyb3V0ZS5kYXRhICYmIHJvdXRlLmRhdGEuZ3VhcmQpIHx8IG51bGwpO1xyXG4gIH1cclxufVxyXG4iXX0=