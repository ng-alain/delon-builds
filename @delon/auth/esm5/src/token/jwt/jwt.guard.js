/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, Inject, Injector } from '@angular/core';
import { DA_SERVICE_TOKEN } from '../interface';
import { JWTTokenModel } from './jwt.model';
import { DelonAuthConfig } from '../../auth.config';
import { CheckJwt, ToLogin } from '../helper';
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
    /**
     * @return {?}
     */
    JWTGuard.prototype.canLoad = /**
     * @return {?}
     */
    function () {
        return this.process();
    };
    // all children route
    /**
     * @return {?}
     */
    JWTGuard.prototype.canActivateChild = /**
     * @return {?}
     */
    function () {
        return this.process();
    };
    // route
    /**
     * @return {?}
     */
    JWTGuard.prototype.canActivate = /**
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0Lmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vand0L2p3dC5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBaUIsTUFBTSxjQUFjLENBQUM7QUFDL0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7O0lBSzVDLGtCQUNvQyxHQUFrQixFQUM1QyxVQUNSLEdBQW9CO1FBRmMsUUFBRyxHQUFILEdBQUcsQ0FBZTtRQUM1QyxhQUFRLEdBQVIsUUFBUTtRQUdoQixJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxlQUFlLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUN0RDs7OztJQUVPLDBCQUFPOzs7OztRQUNiLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQWdCLGFBQWEsQ0FBQyxFQUMxQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUMxQixDQUFDO1FBQ0YsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNSLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNsQztRQUNELE9BQU8sR0FBRyxDQUFDOztJQUdiLGVBQWU7Ozs7SUFDZiwwQkFBTzs7O0lBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUN2QjtJQUNELHFCQUFxQjs7OztJQUNyQixtQ0FBZ0I7OztJQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ3ZCO0lBQ0QsUUFBUTs7OztJQUNSLDhCQUFXOzs7SUFBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ3ZCOztnQkFqQ0YsVUFBVTs7OztnREFJTixNQUFNLFNBQUMsZ0JBQWdCO2dCQVhDLFFBQVE7Z0JBSTVCLGVBQWU7O21CQUp4Qjs7U0FRYSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgQ2FuQWN0aXZhdGVDaGlsZCwgQ2FuTG9hZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IERBX1NFUlZJQ0VfVE9LRU4sIElUb2tlblNlcnZpY2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBKV1RUb2tlbk1vZGVsIH0gZnJvbSAnLi9qd3QubW9kZWwnO1xyXG5pbXBvcnQgeyBEZWxvbkF1dGhDb25maWcgfSBmcm9tICcuLi8uLi9hdXRoLmNvbmZpZyc7XHJcbmltcG9ydCB7IENoZWNrSnd0LCBUb0xvZ2luIH0gZnJvbSAnLi4vaGVscGVyJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEpXVEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUsIENhbkFjdGl2YXRlQ2hpbGQsIENhbkxvYWQge1xyXG4gIHByaXZhdGUgY29nOiBEZWxvbkF1dGhDb25maWc7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KERBX1NFUlZJQ0VfVE9LRU4pIHByaXZhdGUgc3J2OiBJVG9rZW5TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICBjb2c6IERlbG9uQXV0aENvbmZpZyxcclxuICApIHtcclxuICAgIHRoaXMuY29nID0gT2JqZWN0LmFzc2lnbihuZXcgRGVsb25BdXRoQ29uZmlnKCksIGNvZyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHByb2Nlc3MoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCByZXMgPSBDaGVja0p3dChcclxuICAgICAgdGhpcy5zcnYuZ2V0PEpXVFRva2VuTW9kZWw+KEpXVFRva2VuTW9kZWwpLFxyXG4gICAgICB0aGlzLmNvZy50b2tlbl9leHBfb2Zmc2V0LFxyXG4gICAgKTtcclxuICAgIGlmICghcmVzKSB7XHJcbiAgICAgIFRvTG9naW4odGhpcy5jb2csIHRoaXMuaW5qZWN0b3IpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIC8vIGxhenkgbG9hZGluZ1xyXG4gIGNhbkxvYWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKCk7XHJcbiAgfVxyXG4gIC8vIGFsbCBjaGlsZHJlbiByb3V0ZVxyXG4gIGNhbkFjdGl2YXRlQ2hpbGQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKCk7XHJcbiAgfVxyXG4gIC8vIHJvdXRlXHJcbiAgY2FuQWN0aXZhdGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==