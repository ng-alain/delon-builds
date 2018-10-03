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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vc2ltcGxlL3NpbXBsZS5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBaUIsTUFBTSxjQUFjLENBQUM7QUFDL0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztJQU1sRCxxQkFDb0MsR0FBa0IsRUFDNUMsVUFDUixHQUFvQjtRQUZjLFFBQUcsR0FBSCxHQUFHLENBQWU7UUFDNUMsYUFBUSxHQUFSLFFBQVE7UUFHaEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksZUFBZSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDdEQ7Ozs7SUFFTyw2QkFBTzs7Ozs7UUFDYixJQUFNLEdBQUcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbEM7UUFDRCxPQUFPLEdBQUcsQ0FBQzs7SUFHYixlQUFlOzs7O0lBQ2YsNkJBQU87OztJQUFQO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDdkI7SUFDRCxxQkFBcUI7Ozs7SUFDckIsc0NBQWdCOzs7SUFBaEI7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUN2QjtJQUNELFFBQVE7Ozs7SUFDUixpQ0FBVzs7O0lBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUN2Qjs7Z0JBL0JGLFVBQVU7Ozs7Z0RBS04sTUFBTSxTQUFDLGdCQUFnQjtnQkFYQyxRQUFRO2dCQUk1QixlQUFlOztzQkFKeEI7O1NBT2EsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBDYW5BY3RpdmF0ZUNoaWxkLCBDYW5Mb2FkIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IERBX1NFUlZJQ0VfVE9LRU4sIElUb2tlblNlcnZpY2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ2hlY2tTaW1wbGUsIFRvTG9naW4gfSBmcm9tICcuLi9oZWxwZXInO1xuaW1wb3J0IHsgRGVsb25BdXRoQ29uZmlnIH0gZnJvbSAnLi4vLi4vYXV0aC5jb25maWcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2ltcGxlR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSwgQ2FuQWN0aXZhdGVDaGlsZCwgQ2FuTG9hZCB7XG4gIHByaXZhdGUgY29nOiBEZWxvbkF1dGhDb25maWc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChEQV9TRVJWSUNFX1RPS0VOKSBwcml2YXRlIHNydjogSVRva2VuU2VydmljZSxcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBjb2c6IERlbG9uQXV0aENvbmZpZyxcbiAgKSB7XG4gICAgdGhpcy5jb2cgPSBPYmplY3QuYXNzaWduKG5ldyBEZWxvbkF1dGhDb25maWcoKSwgY29nKTtcbiAgfVxuXG4gIHByaXZhdGUgcHJvY2VzcygpOiBib29sZWFuIHtcbiAgICBjb25zdCByZXMgPSBDaGVja1NpbXBsZSh0aGlzLnNydi5nZXQoKSk7XG4gICAgaWYgKCFyZXMpIHtcbiAgICAgIFRvTG9naW4odGhpcy5jb2csIHRoaXMuaW5qZWN0b3IpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgLy8gbGF6eSBsb2FkaW5nXG4gIGNhbkxvYWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VzcygpO1xuICB9XG4gIC8vIGFsbCBjaGlsZHJlbiByb3V0ZVxuICBjYW5BY3RpdmF0ZUNoaWxkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3MoKTtcbiAgfVxuICAvLyByb3V0ZVxuICBjYW5BY3RpdmF0ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKCk7XG4gIH1cbn1cbiJdfQ==