/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, Inject, Injector } from '@angular/core';
import { DA_SERVICE_TOKEN } from '../interface';
import { CheckSimple, ToLogin } from '../helper';
import { DelonAuthConfig } from '../../auth.config';
var SimpleGuard = /** @class */ (function () {
    function SimpleGuard(srv, injector, cog) {
        this.srv = srv;
        this.injector = injector;
        this.cog = Object.assign(new DelonAuthConfig(), cog);
    }
    /**
     * @return {?}
     */
    SimpleGuard.prototype.process = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var res = CheckSimple(this.srv.get());
        if (!res) {
            ToLogin(this.cog, this.injector);
        }
        return res;
    };
    // lazy loading
    /**
     * @return {?}
     */
    SimpleGuard.prototype.canLoad = /**
     * @return {?}
     */
    function () {
        return this.process();
    };
    // all children route
    /**
     * @return {?}
     */
    SimpleGuard.prototype.canActivateChild = /**
     * @return {?}
     */
    function () {
        return this.process();
    };
    // route
    /**
     * @return {?}
     */
    SimpleGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        return this.process();
    };
    SimpleGuard.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SimpleGuard.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DA_SERVICE_TOKEN,] }] },
        { type: Injector },
        { type: DelonAuthConfig }
    ]; };
    return SimpleGuard;
}());
export { SimpleGuard };
if (false) {
    /** @type {?} */
    SimpleGuard.prototype.cog;
    /** @type {?} */
    SimpleGuard.prototype.srv;
    /** @type {?} */
    SimpleGuard.prototype.injector;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vc2ltcGxlL3NpbXBsZS5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBaUIsTUFBTSxjQUFjLENBQUM7QUFDL0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztJQU1sRCxxQkFDb0MsR0FBa0IsRUFDNUMsVUFDUixHQUFvQjtRQUZjLFFBQUcsR0FBSCxHQUFHLENBQWU7UUFDNUMsYUFBUSxHQUFSLFFBQVE7UUFHaEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksZUFBZSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDdEQ7Ozs7SUFFTyw2QkFBTzs7Ozs7UUFDYixJQUFNLEdBQUcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbEM7UUFDRCxPQUFPLEdBQUcsQ0FBQzs7SUFHYixlQUFlOzs7O0lBQ2YsNkJBQU87OztJQUFQO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDdkI7SUFDRCxxQkFBcUI7Ozs7SUFDckIsc0NBQWdCOzs7SUFBaEI7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUN2QjtJQUNELFFBQVE7Ozs7SUFDUixpQ0FBVzs7O0lBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUN2Qjs7Z0JBL0JGLFVBQVU7Ozs7Z0RBS04sTUFBTSxTQUFDLGdCQUFnQjtnQkFYQyxRQUFRO2dCQUk1QixlQUFlOztzQkFKeEI7O1NBT2EsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIENhbkFjdGl2YXRlQ2hpbGQsIENhbkxvYWQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBEQV9TRVJWSUNFX1RPS0VOLCBJVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgQ2hlY2tTaW1wbGUsIFRvTG9naW4gfSBmcm9tICcuLi9oZWxwZXInO1xyXG5pbXBvcnQgeyBEZWxvbkF1dGhDb25maWcgfSBmcm9tICcuLi8uLi9hdXRoLmNvbmZpZyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTaW1wbGVHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlLCBDYW5BY3RpdmF0ZUNoaWxkLCBDYW5Mb2FkIHtcclxuICBwcml2YXRlIGNvZzogRGVsb25BdXRoQ29uZmlnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoREFfU0VSVklDRV9UT0tFTikgcHJpdmF0ZSBzcnY6IElUb2tlblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcclxuICAgIGNvZzogRGVsb25BdXRoQ29uZmlnLFxyXG4gICkge1xyXG4gICAgdGhpcy5jb2cgPSBPYmplY3QuYXNzaWduKG5ldyBEZWxvbkF1dGhDb25maWcoKSwgY29nKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHJvY2VzcygpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHJlcyA9IENoZWNrU2ltcGxlKHRoaXMuc3J2LmdldCgpKTtcclxuICAgIGlmICghcmVzKSB7XHJcbiAgICAgIFRvTG9naW4odGhpcy5jb2csIHRoaXMuaW5qZWN0b3IpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIC8vIGxhenkgbG9hZGluZ1xyXG4gIGNhbkxvYWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKCk7XHJcbiAgfVxyXG4gIC8vIGFsbCBjaGlsZHJlbiByb3V0ZVxyXG4gIGNhbkFjdGl2YXRlQ2hpbGQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKCk7XHJcbiAgfVxyXG4gIC8vIHJvdXRlXHJcbiAgY2FuQWN0aXZhdGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==