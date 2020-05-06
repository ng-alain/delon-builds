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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vc2ltcGxlL3NpbXBsZS5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQWlCLE1BQU0sY0FBYyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCL0QsTUFBTSxPQUFPLFdBQVc7Ozs7O0lBT3RCLFlBQThDLEdBQWtCLEVBQVUsUUFBa0I7UUFBOUMsUUFBRyxHQUFILEdBQUcsQ0FBZTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBRyxDQUFDOzs7OztJQUpoRyxJQUFZLEdBQUc7UUFDYixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBSU8sT0FBTzs7Y0FDUCxHQUFHLEdBQUcsV0FBVyxDQUFDLG1CQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQW9CLENBQUM7UUFDM0QsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNSLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzVDO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzs7Ozs7O0lBR0QsT0FBTyxDQUFDLEtBQVksRUFBRSxTQUF1QjtRQUMzQyxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDdEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Ozs7OztJQUVELGdCQUFnQixDQUFDLFdBQW1DLEVBQUUsS0FBMEI7UUFDOUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7Ozs7SUFFRCxXQUFXLENBQUMsTUFBOEIsRUFBRSxLQUEwQjtRQUNwRSxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7O1lBaENGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7NENBUW5CLE1BQU0sU0FBQyxnQkFBZ0I7WUEvQlQsUUFBUTs7Ozs7Ozs7SUF5Qm5DLDBCQUFxQjs7Ozs7SUFNVCwwQkFBb0Q7Ozs7O0lBQUUsK0JBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgQ2FuQWN0aXZhdGUsIENhbkFjdGl2YXRlQ2hpbGQsIENhbkxvYWQsIFJvdXRlLCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBVcmxTZWdtZW50IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENoZWNrU2ltcGxlLCBUb0xvZ2luIH0gZnJvbSAnLi4vaGVscGVyJztcbmltcG9ydCB7IERBX1NFUlZJQ0VfVE9LRU4sIElUb2tlblNlcnZpY2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU2ltcGxlVG9rZW5Nb2RlbCB9IGZyb20gJy4vc2ltcGxlLm1vZGVsJztcblxuLyoqXG4gKiBTaW1wbGUg6Lev55Sx5a6I5Y2rLCBbQUNMIERvY3VtZW50XShodHRwczovL25nLWFsYWluLmNvbS9hdXRoL2d1YXJkKS5cbiAqXG4gKiBgYGB0c1xuICogZGF0YToge1xuICogIHBhdGg6ICdob21lJyxcbiAqICBjYW5BY3RpdmF0ZTogWyBTaW1wbGVHdWFyZCBdXG4gKiB9LFxuICoge1xuICogICBwYXRoOiAnbXknLFxuICogICBjYW5BY3RpdmF0ZUNoaWxkOiBbU2ltcGxlR3VhcmRdLFxuICogICBjaGlsZHJlbjogW1xuICogICAgIHsgcGF0aDogJ3Byb2ZpbGUnLCBjb21wb25lbnQ6IE1vY2tDb21wb25lbnQgfVxuICogICBdLFxuICogfSxcbiAqIGBgYFxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFNpbXBsZUd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUsIENhbkFjdGl2YXRlQ2hpbGQsIENhbkxvYWQge1xuICBwcml2YXRlIHVybD86IHN0cmluZztcblxuICBwcml2YXRlIGdldCBjb2coKSB7XG4gICAgcmV0dXJuIHRoaXMuc3J2Lm9wdGlvbnM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERBX1NFUlZJQ0VfVE9LRU4pIHByaXZhdGUgc3J2OiBJVG9rZW5TZXJ2aWNlLCBwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge31cblxuICBwcml2YXRlIHByb2Nlc3MoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcmVzID0gQ2hlY2tTaW1wbGUodGhpcy5zcnYuZ2V0KCkgYXMgU2ltcGxlVG9rZW5Nb2RlbCk7XG4gICAgaWYgKCFyZXMpIHtcbiAgICAgIFRvTG9naW4odGhpcy5jb2csIHRoaXMuaW5qZWN0b3IsIHRoaXMudXJsKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIC8vIGxhenkgbG9hZGluZ1xuICBjYW5Mb2FkKHJvdXRlOiBSb3V0ZSwgX3NlZ21lbnRzOiBVcmxTZWdtZW50W10pOiBib29sZWFuIHtcbiAgICB0aGlzLnVybCA9IHJvdXRlLnBhdGg7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VzcygpO1xuICB9XG4gIC8vIGFsbCBjaGlsZHJlbiByb3V0ZVxuICBjYW5BY3RpdmF0ZUNoaWxkKF9jaGlsZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIHRoaXMudXJsID0gc3RhdGUudXJsO1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3MoKTtcbiAgfVxuICAvLyByb3V0ZVxuICBjYW5BY3RpdmF0ZShfcm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgdGhpcy51cmwgPSBzdGF0ZS51cmw7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VzcygpO1xuICB9XG59XG4iXX0=