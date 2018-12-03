/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Inject, Injectable, Injector } from '@angular/core';
import { DelonAuthConfig } from '../../auth.config';
import { CheckJwt, ToLogin } from '../helper';
import { DA_SERVICE_TOKEN } from '../interface';
import { JWTTokenModel } from './jwt.model';
var JWTGuard = /** @class */ (function () {
    function JWTGuard(srv, injector, cog) {
        this.srv = srv;
        this.injector = injector;
        this.cog = Object.assign(new DelonAuthConfig(), cog);
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
            ToLogin(this.cog, this.injector);
        }
        return res;
    };
    // lazy loading
    // lazy loading
    /**
     * @return {?}
     */
    JWTGuard.prototype.canLoad = 
    // lazy loading
    /**
     * @return {?}
     */
    function () {
        return this.process();
    };
    // all children route
    // all children route
    /**
     * @return {?}
     */
    JWTGuard.prototype.canActivateChild = 
    // all children route
    /**
     * @return {?}
     */
    function () {
        return this.process();
    };
    // route
    // route
    /**
     * @return {?}
     */
    JWTGuard.prototype.canActivate = 
    // route
    /**
     * @return {?}
     */
    function () {
        return this.process();
    };
    JWTGuard.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    JWTGuard.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DA_SERVICE_TOKEN,] }] },
        { type: Injector },
        { type: DelonAuthConfig }
    ]; };
    return JWTGuard;
}());
export { JWTGuard };
if (false) {
    /** @type {?} */
    JWTGuard.prototype.cog;
    /** @type {?} */
    JWTGuard.prototype.srv;
    /** @type {?} */
    JWTGuard.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0Lmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vand0L2p3dC5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQWlCLE1BQU0sY0FBYyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUM7SUFHRSxrQkFDb0MsR0FBa0IsRUFDNUMsUUFBa0IsRUFDMUIsR0FBb0I7UUFGYyxRQUFHLEdBQUgsR0FBRyxDQUFlO1FBQzVDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFHMUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksZUFBZSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7OztJQUVPLDBCQUFPOzs7SUFBZjs7WUFDUSxHQUFHLEdBQUcsUUFBUSxDQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBZ0IsYUFBYSxDQUFDLEVBQzFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQzFCO1FBQ0QsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNSLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNsQztRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVELGVBQWU7Ozs7O0lBQ2YsMEJBQU87Ozs7O0lBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQ0QscUJBQXFCOzs7OztJQUNyQixtQ0FBZ0I7Ozs7O0lBQWhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUNELFFBQVE7Ozs7O0lBQ1IsOEJBQVc7Ozs7O0lBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDOztnQkFqQ0YsVUFBVTs7OztnREFJTixNQUFNLFNBQUMsZ0JBQWdCO2dCQVhDLFFBQVE7Z0JBRTVCLGVBQWU7O0lBdUN4QixlQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7U0FqQ1ksUUFBUTs7O0lBQ25CLHVCQUE2Qjs7SUFFM0IsdUJBQW9EOztJQUNwRCw0QkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgQ2FuQWN0aXZhdGVDaGlsZCwgQ2FuTG9hZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEZWxvbkF1dGhDb25maWcgfSBmcm9tICcuLi8uLi9hdXRoLmNvbmZpZyc7XG5pbXBvcnQgeyBDaGVja0p3dCwgVG9Mb2dpbiB9IGZyb20gJy4uL2hlbHBlcic7XG5pbXBvcnQgeyBEQV9TRVJWSUNFX1RPS0VOLCBJVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IEpXVFRva2VuTW9kZWwgfSBmcm9tICcuL2p3dC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKV1RHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlLCBDYW5BY3RpdmF0ZUNoaWxkLCBDYW5Mb2FkIHtcbiAgcHJpdmF0ZSBjb2c6IERlbG9uQXV0aENvbmZpZztcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChEQV9TRVJWSUNFX1RPS0VOKSBwcml2YXRlIHNydjogSVRva2VuU2VydmljZSxcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBjb2c6IERlbG9uQXV0aENvbmZpZyxcbiAgKSB7XG4gICAgdGhpcy5jb2cgPSBPYmplY3QuYXNzaWduKG5ldyBEZWxvbkF1dGhDb25maWcoKSwgY29nKTtcbiAgfVxuXG4gIHByaXZhdGUgcHJvY2VzcygpOiBib29sZWFuIHtcbiAgICBjb25zdCByZXMgPSBDaGVja0p3dChcbiAgICAgIHRoaXMuc3J2LmdldDxKV1RUb2tlbk1vZGVsPihKV1RUb2tlbk1vZGVsKSxcbiAgICAgIHRoaXMuY29nLnRva2VuX2V4cF9vZmZzZXQsXG4gICAgKTtcbiAgICBpZiAoIXJlcykge1xuICAgICAgVG9Mb2dpbih0aGlzLmNvZywgdGhpcy5pbmplY3Rvcik7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvLyBsYXp5IGxvYWRpbmdcbiAgY2FuTG9hZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKCk7XG4gIH1cbiAgLy8gYWxsIGNoaWxkcmVuIHJvdXRlXG4gIGNhbkFjdGl2YXRlQ2hpbGQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VzcygpO1xuICB9XG4gIC8vIHJvdXRlXG4gIGNhbkFjdGl2YXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3MoKTtcbiAgfVxufVxuIl19