/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable, Injector } from '@angular/core';
import { DelonAuthConfig } from '../../auth.config';
import { CheckJwt, ToLogin } from '../helper';
import { DA_SERVICE_TOKEN } from '../interface';
import { JWTTokenModel } from './jwt.model';
import * as i0 from "@angular/core";
import * as i1 from "../interface";
import * as i2 from "../../auth.config";
var JWTGuard = /** @class */ (function () {
    function JWTGuard(srv, injector, cog) {
        this.srv = srv;
        this.injector = injector;
        this.cog = tslib_1.__assign({}, new DelonAuthConfig(), cog);
    }
    /**
     * @return {?}
     */
    JWTGuard.prototype.process = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var res = CheckJwt(this.srv.get(JWTTokenModel), this.cog.token_exp_offset);
        if (!res) {
            ToLogin(this.cog, this.injector, this.url);
        }
        return res;
    };
    // lazy loading
    // lazy loading
    /**
     * @param {?} route
     * @param {?} segments
     * @return {?}
     */
    JWTGuard.prototype.canLoad = 
    // lazy loading
    /**
     * @param {?} route
     * @param {?} segments
     * @return {?}
     */
    function (route, segments) {
        this.url = route.path;
        return this.process();
    };
    // all children route
    // all children route
    /**
     * @param {?} childRoute
     * @param {?} state
     * @return {?}
     */
    JWTGuard.prototype.canActivateChild = 
    // all children route
    /**
     * @param {?} childRoute
     * @param {?} state
     * @return {?}
     */
    function (childRoute, state) {
        this.url = state.url;
        return this.process();
    };
    // route
    // route
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    JWTGuard.prototype.canActivate = 
    // route
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    function (route, state) {
        this.url = state.url;
        return this.process();
    };
    JWTGuard.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    JWTGuard.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DA_SERVICE_TOKEN,] }] },
        { type: Injector },
        { type: DelonAuthConfig }
    ]; };
    /** @nocollapse */ JWTGuard.ngInjectableDef = i0.defineInjectable({ factory: function JWTGuard_Factory() { return new JWTGuard(i0.inject(i1.DA_SERVICE_TOKEN), i0.inject(i0.INJECTOR), i0.inject(i2.DelonAuthConfig)); }, token: JWTGuard, providedIn: "root" });
    return JWTGuard;
}());
export { JWTGuard };
if (false) {
    /** @type {?} */
    JWTGuard.prototype.cog;
    /** @type {?} */
    JWTGuard.prototype.url;
    /** @type {?} */
    JWTGuard.prototype.srv;
    /** @type {?} */
    JWTGuard.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0Lmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vand0L2p3dC5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVU3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFpQixNQUFNLGNBQWMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7O0FBRTVDO0lBS0Usa0JBQ29DLEdBQWtCLEVBQzVDLFFBQWtCLEVBQzFCLEdBQW9CO1FBRmMsUUFBRyxHQUFILEdBQUcsQ0FBZTtRQUM1QyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBRzFCLElBQUksQ0FBQyxHQUFHLHdCQUFRLElBQUksZUFBZSxFQUFFLEVBQUssR0FBRyxDQUFFLENBQUM7SUFDbEQsQ0FBQzs7OztJQUVPLDBCQUFPOzs7SUFBZjs7WUFDUSxHQUFHLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFnQixhQUFhLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDO1FBQzNGLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM1QztRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVELGVBQWU7Ozs7Ozs7SUFDZiwwQkFBTzs7Ozs7OztJQUFQLFVBQVEsS0FBWSxFQUFFLFFBQXNCO1FBQzFDLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQ0QscUJBQXFCOzs7Ozs7O0lBQ3JCLG1DQUFnQjs7Ozs7OztJQUFoQixVQUFpQixVQUFrQyxFQUFFLEtBQTBCO1FBQzdFLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNyQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQ0QsUUFBUTs7Ozs7OztJQUNSLDhCQUFXOzs7Ozs7O0lBQVgsVUFBWSxLQUE2QixFQUFFLEtBQTBCO1FBQ25FLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNyQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDOztnQkFuQ0YsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnREFNN0IsTUFBTSxTQUFDLGdCQUFnQjtnQkFyQkMsUUFBUTtnQkFVNUIsZUFBZTs7O21CQVZ4QjtDQW1EQyxBQXBDRCxJQW9DQztTQW5DWSxRQUFROzs7SUFDbkIsdUJBQTZCOztJQUM3Qix1QkFBb0I7O0lBR2xCLHVCQUFvRDs7SUFDcEQsNEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgQ2FuQWN0aXZhdGUsXG4gIENhbkFjdGl2YXRlQ2hpbGQsXG4gIENhbkxvYWQsXG4gIFJvdXRlLFxuICBSb3V0ZXJTdGF0ZVNuYXBzaG90LFxuICBVcmxTZWdtZW50LFxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRGVsb25BdXRoQ29uZmlnIH0gZnJvbSAnLi4vLi4vYXV0aC5jb25maWcnO1xuaW1wb3J0IHsgQ2hlY2tKd3QsIFRvTG9naW4gfSBmcm9tICcuLi9oZWxwZXInO1xuaW1wb3J0IHsgREFfU0VSVklDRV9UT0tFTiwgSVRva2VuU2VydmljZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBKV1RUb2tlbk1vZGVsIH0gZnJvbSAnLi9qd3QubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEpXVEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUsIENhbkFjdGl2YXRlQ2hpbGQsIENhbkxvYWQge1xuICBwcml2YXRlIGNvZzogRGVsb25BdXRoQ29uZmlnO1xuICBwcml2YXRlIHVybDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoREFfU0VSVklDRV9UT0tFTikgcHJpdmF0ZSBzcnY6IElUb2tlblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgY29nOiBEZWxvbkF1dGhDb25maWcsXG4gICkge1xuICAgIHRoaXMuY29nID0geyAuLi5uZXcgRGVsb25BdXRoQ29uZmlnKCksIC4uLmNvZyB9O1xuICB9XG5cbiAgcHJpdmF0ZSBwcm9jZXNzKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJlcyA9IENoZWNrSnd0KHRoaXMuc3J2LmdldDxKV1RUb2tlbk1vZGVsPihKV1RUb2tlbk1vZGVsKSwgdGhpcy5jb2cudG9rZW5fZXhwX29mZnNldCk7XG4gICAgaWYgKCFyZXMpIHtcbiAgICAgIFRvTG9naW4odGhpcy5jb2csIHRoaXMuaW5qZWN0b3IsIHRoaXMudXJsKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIC8vIGxhenkgbG9hZGluZ1xuICBjYW5Mb2FkKHJvdXRlOiBSb3V0ZSwgc2VnbWVudHM6IFVybFNlZ21lbnRbXSk6IGJvb2xlYW4ge1xuICAgIHRoaXMudXJsID0gcm91dGUucGF0aDtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKCk7XG4gIH1cbiAgLy8gYWxsIGNoaWxkcmVuIHJvdXRlXG4gIGNhbkFjdGl2YXRlQ2hpbGQoY2hpbGRSb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICB0aGlzLnVybCA9IHN0YXRlLnVybDtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKCk7XG4gIH1cbiAgLy8gcm91dGVcbiAgY2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgdGhpcy51cmwgPSBzdGF0ZS51cmw7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VzcygpO1xuICB9XG59XG4iXX0=