/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// tslint:disable:no-any
import { HttpErrorResponse, } from '@angular/common/http';
import { Injector, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { _HttpClient } from '@delon/theme';
import { DelonAuthConfig } from '../auth.config';
import { ToLogin } from './helper';
import { DA_SERVICE_TOKEN } from './interface';
/**
 * @abstract
 */
var BaseInterceptor = /** @class */ (function () {
    function BaseInterceptor(injector) {
        this.injector = injector;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    BaseInterceptor.prototype.intercept = /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    function (req, next) {
        var e_1, _a;
        /** @type {?} */
        var options = tslib_1.__assign({}, new DelonAuthConfig(), this.injector.get(DelonAuthConfig, null));
        if (options.ignores) {
            try {
                for (var _b = tslib_1.__values((/** @type {?} */ (options.ignores))), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    if (item.test(req.url))
                        return next.handle(req);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        if (options.allow_anonymous_key &&
            (req.params.has(options.allow_anonymous_key) || new RegExp("[?|&]" + options.allow_anonymous_key + "=[^&]+").test(req.urlWithParams))) {
            return next.handle(req);
        }
        if (this.isAuth(options)) {
            req = this.setReq(req, options);
        }
        else {
            ((/** @type {?} */ (this.injector.get(DA_SERVICE_TOKEN)))).referrer = req;
            ToLogin(options, this.injector);
            // Unable to guarantee interceptor execution order
            // So cancel the loading state as much as possible
            /** @type {?} */
            var hc = this.injector.get(_HttpClient, null);
            if (hc)
                hc.end();
            // Interrupt Http request, so need to generate a new Observable
            return new Observable(function (observer) {
                /** @type {?} */
                var res = new HttpErrorResponse({
                    url: req.url,
                    headers: req.headers,
                    status: 401,
                    statusText: "From Auth Intercept --> https://ng-alain.com/docs/auth",
                });
                observer.error(res);
            });
        }
        return next.handle(req);
    };
    /** @nocollapse */
    BaseInterceptor.ctorParameters = function () { return [
        { type: Injector, decorators: [{ type: Optional }] }
    ]; };
    return BaseInterceptor;
}());
export { BaseInterceptor };
if (false) {
    /** @type {?} */
    BaseInterceptor.prototype.model;
    /** @type {?} */
    BaseInterceptor.prototype.injector;
    /**
     * @abstract
     * @param {?} options
     * @return {?}
     */
    BaseInterceptor.prototype.isAuth = function (options) { };
    /**
     * @abstract
     * @param {?} req
     * @param {?} options
     * @return {?}
     */
    BaseInterceptor.prototype.setReq = function (req, options) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hdXRoLyIsInNvdXJjZXMiOlsic3JjL3Rva2VuL2Jhc2UuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUNMLGlCQUFpQixHQUtsQixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7QUFFNUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNuQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQWUsTUFBTSxhQUFhLENBQUM7Ozs7QUFHNUQ7SUFDRSx5QkFBa0MsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFJLENBQUM7Ozs7OztJQVF6RCxtQ0FBUzs7Ozs7SUFBVCxVQUFVLEdBQXFCLEVBQUUsSUFBaUI7OztZQUMxQyxPQUFPLHdCQUFRLElBQUksZUFBZSxFQUFFLEVBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFFO1FBQ3pGLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTs7Z0JBQ25CLCtCQUFtQixtQkFBQSxPQUFPLENBQUMsT0FBTyxFQUFZLDZDQUFFO29CQUEzQyxJQUFNLElBQUksV0FBQTtvQkFDYixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQzt3QkFBRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ2pEOzs7Ozs7Ozs7U0FDRjtRQUVELElBQ0UsT0FBTyxDQUFDLG1CQUFtQjtZQUMzQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLFVBQVMsT0FBTyxDQUFDLG1CQUFtQixXQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQ2pJO1lBQ0EsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3hCLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNqQzthQUFNO1lBQ0wsQ0FBQyxtQkFBQSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFnQixDQUFDLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUNyRSxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7OztnQkFHMUIsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUM7WUFDL0MsSUFBSSxFQUFFO2dCQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNqQiwrREFBK0Q7WUFDL0QsT0FBTyxJQUFJLFVBQVUsQ0FBQyxVQUFDLFFBQWtDOztvQkFDakQsR0FBRyxHQUFHLElBQUksaUJBQWlCLENBQUM7b0JBQ2hDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRztvQkFDWixPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU87b0JBQ3BCLE1BQU0sRUFBRSxHQUFHO29CQUNYLFVBQVUsRUFBRSx3REFBd0Q7aUJBQ3JFLENBQUM7Z0JBQ0YsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QixDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7OztnQkF2RE0sUUFBUSx1QkFXRixRQUFROztJQTZDdkIsc0JBQUM7Q0FBQSxBQTlDRCxJQThDQztTQTlDcUIsZUFBZTs7O0lBR25DLGdDQUE2Qjs7SUFGakIsbUNBQXdDOzs7Ozs7SUFJcEQsMERBQW1EOzs7Ozs7O0lBRW5ELCtEQUFtRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm5vLWFueVxuaW1wb3J0IHtcbiAgSHR0cEVycm9yUmVzcG9uc2UsXG4gIEh0dHBFdmVudCxcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cFJlcXVlc3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdG9yLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgX0h0dHBDbGllbnQgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuXG5pbXBvcnQgeyBEZWxvbkF1dGhDb25maWcgfSBmcm9tICcuLi9hdXRoLmNvbmZpZyc7XG5pbXBvcnQgeyBUb0xvZ2luIH0gZnJvbSAnLi9oZWxwZXInO1xuaW1wb3J0IHsgREFfU0VSVklDRV9UT0tFTiwgSVRva2VuTW9kZWwgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBUb2tlblNlcnZpY2UgfSBmcm9tICcuL3Rva2VuLnNlcnZpY2UnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3RvcikgeyB9XG5cbiAgcHJvdGVjdGVkIG1vZGVsOiBJVG9rZW5Nb2RlbDtcblxuICBhYnN0cmFjdCBpc0F1dGgob3B0aW9uczogRGVsb25BdXRoQ29uZmlnKTogYm9vbGVhbjtcblxuICBhYnN0cmFjdCBzZXRSZXEocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBvcHRpb25zOiBEZWxvbkF1dGhDb25maWcpOiBIdHRwUmVxdWVzdDxhbnk+O1xuXG4gIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7IC4uLm5ldyBEZWxvbkF1dGhDb25maWcoKSwgLi4udGhpcy5pbmplY3Rvci5nZXQoRGVsb25BdXRoQ29uZmlnLCBudWxsKSB9O1xuICAgIGlmIChvcHRpb25zLmlnbm9yZXMpIHtcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBvcHRpb25zLmlnbm9yZXMgYXMgUmVnRXhwW10pIHtcbiAgICAgICAgaWYgKGl0ZW0udGVzdChyZXEudXJsKSkgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgb3B0aW9ucy5hbGxvd19hbm9ueW1vdXNfa2V5ICYmXG4gICAgICAocmVxLnBhcmFtcy5oYXMob3B0aW9ucy5hbGxvd19hbm9ueW1vdXNfa2V5KSB8fCBuZXcgUmVnRXhwKGBbXFw/fCZdJHtvcHRpb25zLmFsbG93X2Fub255bW91c19rZXl9PVteJl0rYCkudGVzdChyZXEudXJsV2l0aFBhcmFtcykpXG4gICAgKSB7XG4gICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0F1dGgob3B0aW9ucykpIHtcbiAgICAgIHJlcSA9IHRoaXMuc2V0UmVxKHJlcSwgb3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICh0aGlzLmluamVjdG9yLmdldChEQV9TRVJWSUNFX1RPS0VOKSBhcyBUb2tlblNlcnZpY2UpLnJlZmVycmVyID0gcmVxO1xuICAgICAgVG9Mb2dpbihvcHRpb25zLCB0aGlzLmluamVjdG9yKTtcbiAgICAgIC8vIFVuYWJsZSB0byBndWFyYW50ZWUgaW50ZXJjZXB0b3IgZXhlY3V0aW9uIG9yZGVyXG4gICAgICAvLyBTbyBjYW5jZWwgdGhlIGxvYWRpbmcgc3RhdGUgYXMgbXVjaCBhcyBwb3NzaWJsZVxuICAgICAgY29uc3QgaGMgPSB0aGlzLmluamVjdG9yLmdldChfSHR0cENsaWVudCwgbnVsbCk7XG4gICAgICBpZiAoaGMpIGhjLmVuZCgpO1xuICAgICAgLy8gSW50ZXJydXB0IEh0dHAgcmVxdWVzdCwgc28gbmVlZCB0byBnZW5lcmF0ZSBhIG5ldyBPYnNlcnZhYmxlXG4gICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxIdHRwRXZlbnQ8YW55Pj4pID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0gbmV3IEh0dHBFcnJvclJlc3BvbnNlKHtcbiAgICAgICAgICB1cmw6IHJlcS51cmwsXG4gICAgICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXG4gICAgICAgICAgc3RhdHVzOiA0MDEsXG4gICAgICAgICAgc3RhdHVzVGV4dDogYEZyb20gQXV0aCBJbnRlcmNlcHQgLS0+IGh0dHBzOi8vbmctYWxhaW4uY29tL2RvY3MvYXV0aGAsXG4gICAgICAgIH0pO1xuICAgICAgICBvYnNlcnZlci5lcnJvcihyZXMpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xuICB9XG59XG4iXX0=