/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// tslint:disable:no-any
import { HttpErrorResponse, } from '@angular/common/http';
import { Injector, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { _HttpClient } from '@delon/theme';
import { DelonAuthConfig } from '../auth.config';
import { ToLogin } from './helper';
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
        var options = Object.assign(new DelonAuthConfig(), this.injector.get(DelonAuthConfig, null));
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
            (req.params.has(options.allow_anonymous_key) ||
                this.injector
                    .get(Router)
                    .parseUrl(req.urlWithParams)
                    .queryParamMap.has(options.allow_anonymous_key))) {
            return next.handle(req);
        }
        if (this.isAuth(options)) {
            req = this.setReq(req, options);
        }
        else {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hdXRoLyIsInNvdXJjZXMiOlsic3JjL3Rva2VuL2Jhc2UuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUNMLGlCQUFpQixHQVVsQixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sTUFBTSxDQUFDO0FBRTVDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7QUFHbkM7SUFDRSx5QkFBa0MsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFJLENBQUM7Ozs7OztJQVd6RCxtQ0FBUzs7Ozs7SUFBVCxVQUNFLEdBQXFCLEVBQ3JCLElBQWlCOzs7WUFRWCxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FDM0IsSUFBSSxlQUFlLEVBQUUsRUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUN6QztRQUNELElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTs7Z0JBQ25CLCtCQUFtQixtQkFBQSxPQUFPLENBQUMsT0FBTyxFQUFZLDZDQUFFO29CQUEzQyxJQUFNLElBQUksV0FBQTtvQkFDYixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQzt3QkFBRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ2pEOzs7Ozs7Ozs7U0FDRjtRQUVELElBQ0UsT0FBTyxDQUFDLG1CQUFtQjtZQUMzQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLFFBQVE7cUJBQ1YsR0FBRyxDQUFDLE1BQU0sQ0FBQztxQkFDWCxRQUFRLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztxQkFDM0IsYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUNwRDtZQUNBLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN6QjtRQUVELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN4QixHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDakM7YUFBTTtZQUNMLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7O2dCQUcxQixFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQztZQUMvQyxJQUFJLEVBQUU7Z0JBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLCtEQUErRDtZQUMvRCxPQUFPLElBQUksVUFBVSxDQUFDLFVBQUMsUUFBa0M7O29CQUNqRCxHQUFHLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQztvQkFDaEMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHO29CQUNaLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTztvQkFDcEIsTUFBTSxFQUFFLEdBQUc7b0JBQ1gsVUFBVSxFQUFFLHdEQUF3RDtpQkFDckUsQ0FBQztnQkFDRixRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7O2dCQXpFTSxRQUFRLHVCQVdGLFFBQVE7O0lBK0R2QixzQkFBQztDQUFBLEFBaEVELElBZ0VDO1NBaEVxQixlQUFlOzs7SUFHbkMsZ0NBQTZCOztJQUZqQixtQ0FBd0M7Ozs7OztJQUlwRCwwREFBbUQ7Ozs7Ozs7SUFFbkQsK0RBR29CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XG5pbXBvcnQge1xuICBIdHRwRXJyb3JSZXNwb25zZSxcbiAgSHR0cEV2ZW50LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEhlYWRlclJlc3BvbnNlLFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBQcm9ncmVzc0V2ZW50LFxuICBIdHRwUmVxdWVzdCxcbiAgSHR0cFJlc3BvbnNlLFxuICBIdHRwU2VudEV2ZW50LFxuICBIdHRwVXNlckV2ZW50LFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RvciwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBfSHR0cENsaWVudCB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5cbmltcG9ydCB7IERlbG9uQXV0aENvbmZpZyB9IGZyb20gJy4uL2F1dGguY29uZmlnJztcbmltcG9ydCB7IFRvTG9naW4gfSBmcm9tICcuL2hlbHBlcic7XG5pbXBvcnQgeyBJVG9rZW5Nb2RlbCB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IpIHsgfVxuXG4gIHByb3RlY3RlZCBtb2RlbDogSVRva2VuTW9kZWw7XG5cbiAgYWJzdHJhY3QgaXNBdXRoKG9wdGlvbnM6IERlbG9uQXV0aENvbmZpZyk6IGJvb2xlYW47XG5cbiAgYWJzdHJhY3Qgc2V0UmVxKFxuICAgIHJlcTogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBvcHRpb25zOiBEZWxvbkF1dGhDb25maWcsXG4gICk6IEh0dHBSZXF1ZXN0PGFueT47XG5cbiAgaW50ZXJjZXB0KFxuICAgIHJlcTogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlcixcbiAgKTogT2JzZXJ2YWJsZTxcbiAgfCBIdHRwU2VudEV2ZW50XG4gIHwgSHR0cEhlYWRlclJlc3BvbnNlXG4gIHwgSHR0cFByb2dyZXNzRXZlbnRcbiAgfCBIdHRwUmVzcG9uc2U8YW55PlxuICB8IEh0dHBVc2VyRXZlbnQ8YW55PlxuICA+IHtcbiAgICBjb25zdCBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIG5ldyBEZWxvbkF1dGhDb25maWcoKSxcbiAgICAgIHRoaXMuaW5qZWN0b3IuZ2V0KERlbG9uQXV0aENvbmZpZywgbnVsbCksXG4gICAgKTtcbiAgICBpZiAob3B0aW9ucy5pZ25vcmVzKSB7XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygb3B0aW9ucy5pZ25vcmVzIGFzIFJlZ0V4cFtdKSB7XG4gICAgICAgIGlmIChpdGVtLnRlc3QocmVxLnVybCkpIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIG9wdGlvbnMuYWxsb3dfYW5vbnltb3VzX2tleSAmJlxuICAgICAgKHJlcS5wYXJhbXMuaGFzKG9wdGlvbnMuYWxsb3dfYW5vbnltb3VzX2tleSkgfHxcbiAgICAgICAgdGhpcy5pbmplY3RvclxuICAgICAgICAgIC5nZXQoUm91dGVyKVxuICAgICAgICAgIC5wYXJzZVVybChyZXEudXJsV2l0aFBhcmFtcylcbiAgICAgICAgICAucXVlcnlQYXJhbU1hcC5oYXMob3B0aW9ucy5hbGxvd19hbm9ueW1vdXNfa2V5KSlcbiAgICApIHtcbiAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQXV0aChvcHRpb25zKSkge1xuICAgICAgcmVxID0gdGhpcy5zZXRSZXEocmVxLCBvcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgVG9Mb2dpbihvcHRpb25zLCB0aGlzLmluamVjdG9yKTtcbiAgICAgIC8vIFVuYWJsZSB0byBndWFyYW50ZWUgaW50ZXJjZXB0b3IgZXhlY3V0aW9uIG9yZGVyXG4gICAgICAvLyBTbyBjYW5jZWwgdGhlIGxvYWRpbmcgc3RhdGUgYXMgbXVjaCBhcyBwb3NzaWJsZVxuICAgICAgY29uc3QgaGMgPSB0aGlzLmluamVjdG9yLmdldChfSHR0cENsaWVudCwgbnVsbCk7XG4gICAgICBpZiAoaGMpIGhjLmVuZCgpO1xuICAgICAgLy8gSW50ZXJydXB0IEh0dHAgcmVxdWVzdCwgc28gbmVlZCB0byBnZW5lcmF0ZSBhIG5ldyBPYnNlcnZhYmxlXG4gICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxIdHRwRXZlbnQ8YW55Pj4pID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0gbmV3IEh0dHBFcnJvclJlc3BvbnNlKHtcbiAgICAgICAgICB1cmw6IHJlcS51cmwsXG4gICAgICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXG4gICAgICAgICAgc3RhdHVzOiA0MDEsXG4gICAgICAgICAgc3RhdHVzVGV4dDogYEZyb20gQXV0aCBJbnRlcmNlcHQgLS0+IGh0dHBzOi8vbmctYWxhaW4uY29tL2RvY3MvYXV0aGAsXG4gICAgICAgIH0pO1xuICAgICAgICBvYnNlcnZlci5lcnJvcihyZXMpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xuICB9XG59XG4iXX0=