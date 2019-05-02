/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, Injector } from '@angular/core';
import { DelonAuthConfig } from '../../auth.config';
import { CheckSimple, ToLogin } from '../helper';
import { DA_SERVICE_TOKEN } from '../interface';
import * as i0 from "@angular/core";
import * as i1 from "../interface";
import * as i2 from "../../auth.config";
export class SimpleGuard {
    /**
     * @param {?} srv
     * @param {?} injector
     * @param {?} cog
     */
    constructor(srv, injector, cog) {
        this.srv = srv;
        this.injector = injector;
        this.cog = Object.assign({}, new DelonAuthConfig(), cog);
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
     * @param {?} segments
     * @return {?}
     */
    canLoad(route, segments) {
        this.url = route.path;
        return this.process();
    }
    // all children route
    /**
     * @param {?} childRoute
     * @param {?} state
     * @return {?}
     */
    canActivateChild(childRoute, state) {
        this.url = state.url;
        return this.process();
    }
    // route
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    canActivate(route, state) {
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
    { type: Injector },
    { type: DelonAuthConfig }
];
/** @nocollapse */ SimpleGuard.ngInjectableDef = i0.defineInjectable({ factory: function SimpleGuard_Factory() { return new SimpleGuard(i0.inject(i1.DA_SERVICE_TOKEN), i0.inject(i0.INJECTOR), i0.inject(i2.DelonAuthConfig)); }, token: SimpleGuard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SimpleGuard.prototype.cog;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vc2ltcGxlL3NpbXBsZS5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBVTdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQWlCLE1BQU0sY0FBYyxDQUFDOzs7O0FBSS9ELE1BQU0sT0FBTyxXQUFXOzs7Ozs7SUFJdEIsWUFBOEMsR0FBa0IsRUFBVSxRQUFrQixFQUFFLEdBQW9CO1FBQXBFLFFBQUcsR0FBSCxHQUFHLENBQWU7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQzFGLElBQUksQ0FBQyxHQUFHLHFCQUFRLElBQUksZUFBZSxFQUFFLEVBQUssR0FBRyxDQUFFLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFFTyxPQUFPOztjQUNQLEdBQUcsR0FBRyxXQUFXLENBQUMsbUJBQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBb0IsQ0FBQztRQUMzRCxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1IsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDNUM7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Ozs7Ozs7SUFHRCxPQUFPLENBQUMsS0FBWSxFQUFFLFFBQXNCO1FBQzFDLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsVUFBa0MsRUFBRSxLQUEwQjtRQUM3RSxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Ozs7OztJQUVELFdBQVcsQ0FBQyxLQUE2QixFQUFFLEtBQTBCO1FBQ25FLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNyQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7WUEvQkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7Ozs0Q0FLbkIsTUFBTSxTQUFDLGdCQUFnQjtZQXBCVCxRQUFRO1lBVTVCLGVBQWU7Ozs7Ozs7O0lBT3RCLDBCQUE2Qjs7Ozs7SUFDN0IsMEJBQXVDOzs7OztJQUUzQiwwQkFBb0Q7Ozs7O0lBQUUsK0JBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgQ2FuQWN0aXZhdGUsXG4gIENhbkFjdGl2YXRlQ2hpbGQsXG4gIENhbkxvYWQsXG4gIFJvdXRlLFxuICBSb3V0ZXJTdGF0ZVNuYXBzaG90LFxuICBVcmxTZWdtZW50LFxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRGVsb25BdXRoQ29uZmlnIH0gZnJvbSAnLi4vLi4vYXV0aC5jb25maWcnO1xuaW1wb3J0IHsgQ2hlY2tTaW1wbGUsIFRvTG9naW4gfSBmcm9tICcuLi9oZWxwZXInO1xuaW1wb3J0IHsgREFfU0VSVklDRV9UT0tFTiwgSVRva2VuU2VydmljZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBTaW1wbGVUb2tlbk1vZGVsIH0gZnJvbSAnLi9zaW1wbGUubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFNpbXBsZUd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUsIENhbkFjdGl2YXRlQ2hpbGQsIENhbkxvYWQge1xuICBwcml2YXRlIGNvZzogRGVsb25BdXRoQ29uZmlnO1xuICBwcml2YXRlIHVybDogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERBX1NFUlZJQ0VfVE9LRU4pIHByaXZhdGUgc3J2OiBJVG9rZW5TZXJ2aWNlLCBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvciwgY29nOiBEZWxvbkF1dGhDb25maWcpIHtcbiAgICB0aGlzLmNvZyA9IHsgLi4ubmV3IERlbG9uQXV0aENvbmZpZygpLCAuLi5jb2cgfTtcbiAgfVxuXG4gIHByaXZhdGUgcHJvY2VzcygpOiBib29sZWFuIHtcbiAgICBjb25zdCByZXMgPSBDaGVja1NpbXBsZSh0aGlzLnNydi5nZXQoKSBhcyBTaW1wbGVUb2tlbk1vZGVsKTtcbiAgICBpZiAoIXJlcykge1xuICAgICAgVG9Mb2dpbih0aGlzLmNvZywgdGhpcy5pbmplY3RvciwgdGhpcy51cmwpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgLy8gbGF6eSBsb2FkaW5nXG4gIGNhbkxvYWQocm91dGU6IFJvdXRlLCBzZWdtZW50czogVXJsU2VnbWVudFtdKTogYm9vbGVhbiB7XG4gICAgdGhpcy51cmwgPSByb3V0ZS5wYXRoO1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3MoKTtcbiAgfVxuICAvLyBhbGwgY2hpbGRyZW4gcm91dGVcbiAgY2FuQWN0aXZhdGVDaGlsZChjaGlsZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIHRoaXMudXJsID0gc3RhdGUudXJsO1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3MoKTtcbiAgfVxuICAvLyByb3V0ZVxuICBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICB0aGlzLnVybCA9IHN0YXRlLnVybDtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKCk7XG4gIH1cbn1cbiJdfQ==