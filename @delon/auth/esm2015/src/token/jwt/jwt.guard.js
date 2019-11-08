/**
 * @fileoverview added by tsickle
 * Generated from: src/token/jwt/jwt.guard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, Injector } from '@angular/core';
import { DelonAuthConfig } from '../../auth.config';
import { CheckJwt, ToLogin } from '../helper';
import { DA_SERVICE_TOKEN } from '../interface';
import { JWTTokenModel } from './jwt.model';
import * as i0 from "@angular/core";
import * as i1 from "../interface";
import * as i2 from "../../auth.config";
export class JWTGuard {
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
        const res = CheckJwt(this.srv.get(JWTTokenModel), (/** @type {?} */ (this.cog.token_exp_offset)));
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
JWTGuard.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
JWTGuard.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DA_SERVICE_TOKEN,] }] },
    { type: Injector },
    { type: DelonAuthConfig }
];
/** @nocollapse */ JWTGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function JWTGuard_Factory() { return new JWTGuard(i0.ɵɵinject(i1.DA_SERVICE_TOKEN), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i2.DelonAuthConfig)); }, token: JWTGuard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    JWTGuard.prototype.cog;
    /**
     * @type {?}
     * @private
     */
    JWTGuard.prototype.url;
    /**
     * @type {?}
     * @private
     */
    JWTGuard.prototype.srv;
    /**
     * @type {?}
     * @private
     */
    JWTGuard.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0Lmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vand0L2p3dC5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVU3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFpQixNQUFNLGNBQWMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7O0FBRzVDLE1BQU0sT0FBTyxRQUFROzs7Ozs7SUFJbkIsWUFBOEMsR0FBa0IsRUFBVSxRQUFrQixFQUFFLEdBQW9CO1FBQXBFLFFBQUcsR0FBSCxHQUFHLENBQWU7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQzFGLElBQUksQ0FBQyxHQUFHLHFCQUFRLElBQUksZUFBZSxFQUFFLEVBQUssR0FBRyxDQUFFLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFFTyxPQUFPOztjQUNQLEdBQUcsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQWdCLGFBQWEsQ0FBQyxFQUFFLG1CQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUMsQ0FBQztRQUM1RixJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1IsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDNUM7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Ozs7Ozs7SUFHRCxPQUFPLENBQUMsS0FBWSxFQUFFLFNBQXVCO1FBQzNDLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsV0FBbUMsRUFBRSxLQUEwQjtRQUM5RSxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Ozs7OztJQUVELFdBQVcsQ0FBQyxNQUE4QixFQUFFLEtBQTBCO1FBQ3BFLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNyQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7WUEvQkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7Ozs0Q0FLbkIsTUFBTSxTQUFDLGdCQUFnQjtZQXBCVCxRQUFRO1lBVTVCLGVBQWU7Ozs7Ozs7O0lBT3RCLHVCQUE2Qjs7Ozs7SUFDN0IsdUJBQWdDOzs7OztJQUVwQix1QkFBb0Q7Ozs7O0lBQUUsNEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgQ2FuQWN0aXZhdGUsXG4gIENhbkFjdGl2YXRlQ2hpbGQsXG4gIENhbkxvYWQsXG4gIFJvdXRlLFxuICBSb3V0ZXJTdGF0ZVNuYXBzaG90LFxuICBVcmxTZWdtZW50LFxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRGVsb25BdXRoQ29uZmlnIH0gZnJvbSAnLi4vLi4vYXV0aC5jb25maWcnO1xuaW1wb3J0IHsgQ2hlY2tKd3QsIFRvTG9naW4gfSBmcm9tICcuLi9oZWxwZXInO1xuaW1wb3J0IHsgREFfU0VSVklDRV9UT0tFTiwgSVRva2VuU2VydmljZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBKV1RUb2tlbk1vZGVsIH0gZnJvbSAnLi9qd3QubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEpXVEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUsIENhbkFjdGl2YXRlQ2hpbGQsIENhbkxvYWQge1xuICBwcml2YXRlIGNvZzogRGVsb25BdXRoQ29uZmlnO1xuICBwcml2YXRlIHVybDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoREFfU0VSVklDRV9UT0tFTikgcHJpdmF0ZSBzcnY6IElUb2tlblNlcnZpY2UsIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLCBjb2c6IERlbG9uQXV0aENvbmZpZykge1xuICAgIHRoaXMuY29nID0geyAuLi5uZXcgRGVsb25BdXRoQ29uZmlnKCksIC4uLmNvZyB9O1xuICB9XG5cbiAgcHJpdmF0ZSBwcm9jZXNzKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJlcyA9IENoZWNrSnd0KHRoaXMuc3J2LmdldDxKV1RUb2tlbk1vZGVsPihKV1RUb2tlbk1vZGVsKSwgdGhpcy5jb2cudG9rZW5fZXhwX29mZnNldCEpO1xuICAgIGlmICghcmVzKSB7XG4gICAgICBUb0xvZ2luKHRoaXMuY29nLCB0aGlzLmluamVjdG9yLCB0aGlzLnVybCk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvLyBsYXp5IGxvYWRpbmdcbiAgY2FuTG9hZChyb3V0ZTogUm91dGUsIF9zZWdtZW50czogVXJsU2VnbWVudFtdKTogYm9vbGVhbiB7XG4gICAgdGhpcy51cmwgPSByb3V0ZS5wYXRoO1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3MoKTtcbiAgfVxuICAvLyBhbGwgY2hpbGRyZW4gcm91dGVcbiAgY2FuQWN0aXZhdGVDaGlsZChfY2hpbGRSb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICB0aGlzLnVybCA9IHN0YXRlLnVybDtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKCk7XG4gIH1cbiAgLy8gcm91dGVcbiAgY2FuQWN0aXZhdGUoX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIHRoaXMudXJsID0gc3RhdGUudXJsO1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3MoKTtcbiAgfVxufVxuIl19