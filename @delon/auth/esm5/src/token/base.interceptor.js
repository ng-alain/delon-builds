/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HttpErrorResponse, HTTP_INTERCEPTORS, } from '@angular/common/http';
import { Injector, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { DelonAuthConfig } from '../auth.config';
import { ToLogin } from './helper';
var HttpAuthInterceptorHandler = /** @class */ (function () {
    function HttpAuthInterceptorHandler(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    /**
     * @param {?} req
     * @return {?}
     */
    HttpAuthInterceptorHandler.prototype.handle = /**
     * @param {?} req
     * @return {?}
     */
    function (req) {
        return this.interceptor.intercept(req, this.next);
    };
    return HttpAuthInterceptorHandler;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    HttpAuthInterceptorHandler.prototype.next;
    /**
     * @type {?}
     * @private
     */
    HttpAuthInterceptorHandler.prototype.interceptor;
}
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
        var options = tslib_1.__assign({}, new DelonAuthConfig(), this.injector.get(DelonAuthConfig, undefined));
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
                new RegExp("[?|&]" + options.allow_anonymous_key + "=[^&]+").test(req.urlWithParams))) {
            return next.handle(req);
        }
        if (this.isAuth(options)) {
            req = this.setReq(req, options);
        }
        else {
            ToLogin(options, this.injector, req.urlWithParams);
            // Interrupt Http request, so need to generate a new Observable
            /** @type {?} */
            var err$_1 = new Observable((/**
             * @param {?} observer
             * @return {?}
             */
            function (observer) {
                /** @type {?} */
                var res = new HttpErrorResponse({
                    url: req.url,
                    headers: req.headers,
                    status: 401,
                    statusText: "From Auth Intercept --> https://ng-alain.com/docs/auth",
                });
                observer.error(res);
            }));
            if (options.executeOtherInterceptors) {
                /** @type {?} */
                var interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
                /** @type {?} */
                var lastInterceptors = interceptors.slice(interceptors.indexOf(this) + 1);
                if (lastInterceptors.length > 0) {
                    /** @type {?} */
                    var chain = lastInterceptors.reduceRight((/**
                     * @param {?} _next
                     * @param {?} _interceptor
                     * @return {?}
                     */
                    function (_next, _interceptor) { return new HttpAuthInterceptorHandler(_next, _interceptor); }), { handle: (/**
                         * @param {?} _
                         * @return {?}
                         */
                        function (_) { return err$_1; }) });
                    return chain.handle(req);
                }
            }
            return err$_1;
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
    /**
     * @type {?}
     * @protected
     */
    BaseInterceptor.prototype.model;
    /**
     * @type {?}
     * @protected
     */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hdXRoLyIsInNvdXJjZXMiOlsic3JjL3Rva2VuL2Jhc2UuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBS2pCLGlCQUFpQixHQUNsQixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7QUFFNUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFHbkM7SUFDRSxvQ0FBb0IsSUFBaUIsRUFBVSxXQUE0QjtRQUF2RCxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO0lBQUcsQ0FBQzs7Ozs7SUFFL0UsMkNBQU07Ozs7SUFBTixVQUFPLEdBQXFCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ0gsaUNBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQzs7Ozs7O0lBTGEsMENBQXlCOzs7OztJQUFFLGlEQUFvQzs7Ozs7QUFPN0U7SUFDRSx5QkFBa0MsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFHLENBQUM7Ozs7OztJQVF4RCxtQ0FBUzs7Ozs7SUFBVCxVQUFVLEdBQXFCLEVBQUUsSUFBaUI7OztZQUMxQyxPQUFPLHdCQUFRLElBQUksZUFBZSxFQUFFLEVBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQWtCLGVBQWUsRUFBRSxTQUFTLENBQUMsQ0FBRTtRQUMvRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7O2dCQUNuQiwrQkFBbUIsbUJBQUEsT0FBTyxDQUFDLE9BQU8sRUFBWSw2Q0FBRTtvQkFBM0MsSUFBTSxJQUFJLFdBQUE7b0JBQ2IsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7d0JBQUUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNqRDs7Ozs7Ozs7O1NBQ0Y7UUFFRCxJQUNFLE9BQU8sQ0FBQyxtQkFBbUI7WUFDM0IsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUM7Z0JBQzFDLElBQUksTUFBTSxDQUFDLFVBQVMsT0FBTyxDQUFDLG1CQUFtQixXQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQ25GO1lBQ0EsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3hCLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNqQzthQUFNO1lBQ0wsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQzs7O2dCQUU3QyxNQUFJLEdBQUcsSUFBSSxVQUFVOzs7O1lBQUMsVUFBQyxRQUFrQzs7b0JBQ3ZELEdBQUcsR0FBRyxJQUFJLGlCQUFpQixDQUFDO29CQUNoQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUc7b0JBQ1osT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPO29CQUNwQixNQUFNLEVBQUUsR0FBRztvQkFDWCxVQUFVLEVBQUUsd0RBQXdEO2lCQUNyRSxDQUFDO2dCQUNGLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEIsQ0FBQyxFQUFDO1lBQ0YsSUFBSSxPQUFPLENBQUMsd0JBQXdCLEVBQUU7O29CQUM5QixZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDOztvQkFDdkQsZ0JBQWdCLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDM0UsSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOzt3QkFDekIsS0FBSyxHQUFHLGdCQUFnQixDQUFDLFdBQVc7Ozs7O29CQUN4QyxVQUFDLEtBQUssRUFBRSxZQUFZLElBQUssT0FBQSxJQUFJLDBCQUEwQixDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsRUFBbkQsQ0FBbUQsR0FDNUUsRUFBRSxNQUFNOzs7O3dCQUFFLFVBQUMsQ0FBbUIsSUFBSyxPQUFBLE1BQUksRUFBSixDQUFJLENBQUEsRUFBRSxDQUMxQztvQkFDRCxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQzFCO2FBQ0Y7WUFDRCxPQUFPLE1BQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7OztnQkFwRU0sUUFBUSx1QkFnQkYsUUFBUTs7SUFxRHZCLHNCQUFDO0NBQUEsQUF0REQsSUFzREM7U0F0RHFCLGVBQWU7Ozs7OztJQUduQyxnQ0FBNkI7Ozs7O0lBRmpCLG1DQUF3Qzs7Ozs7O0lBSXBELDBEQUFtRDs7Ozs7OztJQUVuRCwrREFBbUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBIdHRwRXJyb3JSZXNwb25zZSxcbiAgSHR0cEV2ZW50LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwUmVxdWVzdCxcbiAgSFRUUF9JTlRFUkNFUFRPUlMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdG9yLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGVsb25BdXRoQ29uZmlnIH0gZnJvbSAnLi4vYXV0aC5jb25maWcnO1xuaW1wb3J0IHsgVG9Mb2dpbiB9IGZyb20gJy4vaGVscGVyJztcbmltcG9ydCB7IElUb2tlbk1vZGVsIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5jbGFzcyBIdHRwQXV0aEludGVyY2VwdG9ySGFuZGxlciBpbXBsZW1lbnRzIEh0dHBIYW5kbGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZXh0OiBIdHRwSGFuZGxlciwgcHJpdmF0ZSBpbnRlcmNlcHRvcjogSHR0cEludGVyY2VwdG9yKSB7fVxuXG4gIGhhbmRsZShyZXE6IEh0dHBSZXF1ZXN0PGFueT4pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJjZXB0b3IuaW50ZXJjZXB0KHJlcSwgdGhpcy5uZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3Rvcikge31cblxuICBwcm90ZWN0ZWQgbW9kZWw6IElUb2tlbk1vZGVsO1xuXG4gIGFic3RyYWN0IGlzQXV0aChvcHRpb25zOiBEZWxvbkF1dGhDb25maWcpOiBib29sZWFuO1xuXG4gIGFic3RyYWN0IHNldFJlcShyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG9wdGlvbnM6IERlbG9uQXV0aENvbmZpZyk6IEh0dHBSZXF1ZXN0PGFueT47XG5cbiAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHsgLi4ubmV3IERlbG9uQXV0aENvbmZpZygpLCAuLi50aGlzLmluamVjdG9yLmdldDxEZWxvbkF1dGhDb25maWc+KERlbG9uQXV0aENvbmZpZywgdW5kZWZpbmVkKSB9O1xuICAgIGlmIChvcHRpb25zLmlnbm9yZXMpIHtcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBvcHRpb25zLmlnbm9yZXMgYXMgUmVnRXhwW10pIHtcbiAgICAgICAgaWYgKGl0ZW0udGVzdChyZXEudXJsKSkgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgb3B0aW9ucy5hbGxvd19hbm9ueW1vdXNfa2V5ICYmXG4gICAgICAocmVxLnBhcmFtcy5oYXMob3B0aW9ucy5hbGxvd19hbm9ueW1vdXNfa2V5KSB8fFxuICAgICAgICBuZXcgUmVnRXhwKGBbXFw/fCZdJHtvcHRpb25zLmFsbG93X2Fub255bW91c19rZXl9PVteJl0rYCkudGVzdChyZXEudXJsV2l0aFBhcmFtcykpXG4gICAgKSB7XG4gICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0F1dGgob3B0aW9ucykpIHtcbiAgICAgIHJlcSA9IHRoaXMuc2V0UmVxKHJlcSwgb3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFRvTG9naW4ob3B0aW9ucywgdGhpcy5pbmplY3RvciwgcmVxLnVybFdpdGhQYXJhbXMpO1xuICAgICAgLy8gSW50ZXJydXB0IEh0dHAgcmVxdWVzdCwgc28gbmVlZCB0byBnZW5lcmF0ZSBhIG5ldyBPYnNlcnZhYmxlXG4gICAgICBjb25zdCBlcnIkID0gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxIdHRwRXZlbnQ8YW55Pj4pID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0gbmV3IEh0dHBFcnJvclJlc3BvbnNlKHtcbiAgICAgICAgICB1cmw6IHJlcS51cmwsXG4gICAgICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXG4gICAgICAgICAgc3RhdHVzOiA0MDEsXG4gICAgICAgICAgc3RhdHVzVGV4dDogYEZyb20gQXV0aCBJbnRlcmNlcHQgLS0+IGh0dHBzOi8vbmctYWxhaW4uY29tL2RvY3MvYXV0aGAsXG4gICAgICAgIH0pO1xuICAgICAgICBvYnNlcnZlci5lcnJvcihyZXMpO1xuICAgICAgfSk7XG4gICAgICBpZiAob3B0aW9ucy5leGVjdXRlT3RoZXJJbnRlcmNlcHRvcnMpIHtcbiAgICAgICAgY29uc3QgaW50ZXJjZXB0b3JzID0gdGhpcy5pbmplY3Rvci5nZXQoSFRUUF9JTlRFUkNFUFRPUlMsIFtdKTtcbiAgICAgICAgY29uc3QgbGFzdEludGVyY2VwdG9ycyA9IGludGVyY2VwdG9ycy5zbGljZShpbnRlcmNlcHRvcnMuaW5kZXhPZih0aGlzKSArIDEpO1xuICAgICAgICBpZiAobGFzdEludGVyY2VwdG9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3QgY2hhaW4gPSBsYXN0SW50ZXJjZXB0b3JzLnJlZHVjZVJpZ2h0KFxuICAgICAgICAgICAgKF9uZXh0LCBfaW50ZXJjZXB0b3IpID0+IG5ldyBIdHRwQXV0aEludGVyY2VwdG9ySGFuZGxlcihfbmV4dCwgX2ludGVyY2VwdG9yKSxcbiAgICAgICAgICAgIHsgaGFuZGxlOiAoXzogSHR0cFJlcXVlc3Q8YW55PikgPT4gZXJyJCB9LFxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuIGNoYWluLmhhbmRsZShyZXEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZXJyJDtcbiAgICB9XG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSk7XG4gIH1cbn1cbiJdfQ==