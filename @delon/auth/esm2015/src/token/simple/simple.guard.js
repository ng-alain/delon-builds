/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, Inject, Injector } from '@angular/core';
import { DA_SERVICE_TOKEN } from '../interface';
import { CheckSimple, ToLogin } from '../helper';
import { DelonAuthConfig } from '../../auth.config';
export class SimpleGuard {
    /**
     * @param {?} srv
     * @param {?} injector
     * @param {?} cog
     */
    constructor(srv, injector, cog) {
        this.srv = srv;
        this.injector = injector;
        this.cog = Object.assign(new DelonAuthConfig(), cog);
    }
    /**
     * @return {?}
     */
    process() {
        /** @type {?} */
        const res = CheckSimple(this.srv.get());
        if (!res) {
            ToLogin(this.cog, this.injector);
        }
        return res;
    }
    /**
     * @return {?}
     */
    canLoad() {
        return this.process();
    }
    /**
     * @return {?}
     */
    canActivateChild() {
        return this.process();
    }
    /**
     * @return {?}
     */
    canActivate() {
        return this.process();
    }
}
SimpleGuard.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SimpleGuard.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DA_SERVICE_TOKEN,] }] },
    { type: Injector },
    { type: DelonAuthConfig }
];
if (false) {
    /** @type {?} */
    SimpleGuard.prototype.cog;
    /** @type {?} */
    SimpleGuard.prototype.srv;
    /** @type {?} */
    SimpleGuard.prototype.injector;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vc2ltcGxlL3NpbXBsZS5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBaUIsTUFBTSxjQUFjLENBQUM7QUFDL0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR3BELE1BQU07Ozs7OztJQUdKLFlBQ29DLEdBQWtCLEVBQzVDLFVBQ1IsR0FBb0I7UUFGYyxRQUFHLEdBQUgsR0FBRyxDQUFlO1FBQzVDLGFBQVEsR0FBUixRQUFRO1FBR2hCLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLGVBQWUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ3REOzs7O0lBRU8sT0FBTzs7UUFDYixNQUFNLEdBQUcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbEM7UUFDRCxPQUFPLEdBQUcsQ0FBQzs7Ozs7SUFJYixPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDdkI7Ozs7SUFFRCxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUN2Qjs7OztJQUVELFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUN2Qjs7O1lBL0JGLFVBQVU7Ozs7NENBS04sTUFBTSxTQUFDLGdCQUFnQjtZQVhDLFFBQVE7WUFJNUIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIENhbkFjdGl2YXRlQ2hpbGQsIENhbkxvYWQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBEQV9TRVJWSUNFX1RPS0VOLCBJVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgQ2hlY2tTaW1wbGUsIFRvTG9naW4gfSBmcm9tICcuLi9oZWxwZXInO1xyXG5pbXBvcnQgeyBEZWxvbkF1dGhDb25maWcgfSBmcm9tICcuLi8uLi9hdXRoLmNvbmZpZyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTaW1wbGVHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlLCBDYW5BY3RpdmF0ZUNoaWxkLCBDYW5Mb2FkIHtcclxuICBwcml2YXRlIGNvZzogRGVsb25BdXRoQ29uZmlnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoREFfU0VSVklDRV9UT0tFTikgcHJpdmF0ZSBzcnY6IElUb2tlblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcclxuICAgIGNvZzogRGVsb25BdXRoQ29uZmlnLFxyXG4gICkge1xyXG4gICAgdGhpcy5jb2cgPSBPYmplY3QuYXNzaWduKG5ldyBEZWxvbkF1dGhDb25maWcoKSwgY29nKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHJvY2VzcygpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHJlcyA9IENoZWNrU2ltcGxlKHRoaXMuc3J2LmdldCgpKTtcclxuICAgIGlmICghcmVzKSB7XHJcbiAgICAgIFRvTG9naW4odGhpcy5jb2csIHRoaXMuaW5qZWN0b3IpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIC8vIGxhenkgbG9hZGluZ1xyXG4gIGNhbkxvYWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKCk7XHJcbiAgfVxyXG4gIC8vIGFsbCBjaGlsZHJlbiByb3V0ZVxyXG4gIGNhbkFjdGl2YXRlQ2hpbGQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKCk7XHJcbiAgfVxyXG4gIC8vIHJvdXRlXHJcbiAgY2FuQWN0aXZhdGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==