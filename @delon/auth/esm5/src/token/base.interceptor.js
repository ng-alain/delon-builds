/**
 * @fileoverview added by tsickle
 * Generated from: src/token/base.interceptor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
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
            (req.params.has(options.allow_anonymous_key) || new RegExp("[?|&]" + options.allow_anonymous_key + "=[^&]+").test(req.urlWithParams))) {
            return next.handle(req);
        }
        if (this.isAuth(options)) {
            req = this.setReq(req, options);
        }
        else {
            ToLogin(options, this.injector);
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
                    statusText: "\u6765\u81EA @delon/auth \u7684\u62E6\u622A\uFF0C\u6240\u8BF7\u6C42URL\u672A\u6388\u6743\uFF0C\u82E5\u662F\u767B\u5F55API\u53EF\u52A0\u5165 [url?_allow_anonymous=true] \u6765\u8868\u793A\u5FFD\u7565\u6821\u9A8C\uFF0C\u66F4\u591A\u65B9\u6CD5\u8BF7\u53C2\u8003\uFF1A https://ng-alain.com/auth/getting-started#DelonAuthConfig\nThe interception from @delon/auth, the requested URL is not authorized. If the login API can add [url?_allow_anonymous=true] to ignore the check, please refer to: https://ng-alain.com/auth/getting-started#DelonAuthConfig",
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
                    function (_next, _interceptor) { return new HttpAuthInterceptorHandler(_next, _interceptor); }), {
                        handle: (/**
                         * @param {?} _
                         * @return {?}
                         */
                        function (_) { return err$_1; }),
                    });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hdXRoLyIsInNvdXJjZXMiOlsic3JjL3Rva2VuL2Jhc2UuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUF3RCxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xJLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7QUFFNUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFHbkM7SUFDRSxvQ0FBb0IsSUFBaUIsRUFBVSxXQUE0QjtRQUF2RCxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO0lBQUcsQ0FBQzs7Ozs7SUFFL0UsMkNBQU07Ozs7SUFBTixVQUFPLEdBQXFCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ0gsaUNBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQzs7Ozs7O0lBTGEsMENBQXlCOzs7OztJQUFFLGlEQUFvQzs7Ozs7QUFPN0U7SUFDRSx5QkFBa0MsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFHLENBQUM7Ozs7OztJQVF4RCxtQ0FBUzs7Ozs7SUFBVCxVQUFVLEdBQXFCLEVBQUUsSUFBaUI7OztZQUMxQyxPQUFPLHdCQUFRLElBQUksZUFBZSxFQUFFLEVBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQWtCLGVBQWUsRUFBRSxTQUFTLENBQUMsQ0FBRTtRQUMvRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7O2dCQUNuQiwrQkFBbUIsbUJBQUEsT0FBTyxDQUFDLE9BQU8sRUFBWSw2Q0FBRTtvQkFBM0MsSUFBTSxJQUFJLFdBQUE7b0JBQ2IsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7d0JBQUUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNqRDs7Ozs7Ozs7O1NBQ0Y7UUFFRCxJQUNFLE9BQU8sQ0FBQyxtQkFBbUI7WUFDM0IsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxVQUFTLE9BQU8sQ0FBQyxtQkFBbUIsV0FBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUNqSTtZQUNBLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN6QjtRQUVELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN4QixHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDakM7YUFBTTtZQUNMLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7Z0JBRTFCLE1BQUksR0FBRyxJQUFJLFVBQVU7Ozs7WUFBQyxVQUFDLFFBQWtDOztvQkFDdkQsR0FBRyxHQUFHLElBQUksaUJBQWlCLENBQUM7b0JBQ2hDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRztvQkFDWixPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU87b0JBQ3BCLE1BQU0sRUFBRSxHQUFHO29CQUNYLFVBQVUsRUFBRSxraUJBQThXO2lCQUMzWCxDQUFDO2dCQUNGLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEIsQ0FBQyxFQUFDO1lBQ0YsSUFBSSxPQUFPLENBQUMsd0JBQXdCLEVBQUU7O29CQUM5QixZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDOztvQkFDdkQsZ0JBQWdCLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDM0UsSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOzt3QkFDekIsS0FBSyxHQUFHLGdCQUFnQixDQUFDLFdBQVc7Ozs7O29CQUFDLFVBQUMsS0FBSyxFQUFFLFlBQVksSUFBSyxPQUFBLElBQUksMEJBQTBCLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxFQUFuRCxDQUFtRCxHQUFFO3dCQUN2SCxNQUFNOzs7O3dCQUFFLFVBQUMsQ0FBbUIsSUFBSyxPQUFBLE1BQUksRUFBSixDQUFJLENBQUE7cUJBQ3RDLENBQUM7b0JBQ0YsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUMxQjthQUNGO1lBQ0QsT0FBTyxNQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7Z0JBbEVNLFFBQVEsdUJBZ0JGLFFBQVE7O0lBbUR2QixzQkFBQztDQUFBLEFBcERELElBb0RDO1NBcERxQixlQUFlOzs7Ozs7SUFHbkMsZ0NBQTZCOzs7OztJQUZqQixtQ0FBd0M7Ozs7OztJQUlwRCwwREFBbUQ7Ozs7Ozs7SUFFbkQsK0RBQW1GIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBFdmVudCwgSHR0cEhhbmRsZXIsIEh0dHBJbnRlcmNlcHRvciwgSHR0cFJlcXVlc3QsIEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0b3IsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEZWxvbkF1dGhDb25maWcgfSBmcm9tICcuLi9hdXRoLmNvbmZpZyc7XG5pbXBvcnQgeyBUb0xvZ2luIH0gZnJvbSAnLi9oZWxwZXInO1xuaW1wb3J0IHsgSVRva2VuTW9kZWwgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbmNsYXNzIEh0dHBBdXRoSW50ZXJjZXB0b3JIYW5kbGVyIGltcGxlbWVudHMgSHR0cEhhbmRsZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5leHQ6IEh0dHBIYW5kbGVyLCBwcml2YXRlIGludGVyY2VwdG9yOiBIdHRwSW50ZXJjZXB0b3IpIHt9XG5cbiAgaGFuZGxlKHJlcTogSHR0cFJlcXVlc3Q8YW55Pik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcmNlcHRvci5pbnRlcmNlcHQocmVxLCB0aGlzLm5leHQpO1xuICB9XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yKSB7fVxuXG4gIHByb3RlY3RlZCBtb2RlbDogSVRva2VuTW9kZWw7XG5cbiAgYWJzdHJhY3QgaXNBdXRoKG9wdGlvbnM6IERlbG9uQXV0aENvbmZpZyk6IGJvb2xlYW47XG5cbiAgYWJzdHJhY3Qgc2V0UmVxKHJlcTogSHR0cFJlcXVlc3Q8YW55Piwgb3B0aW9uczogRGVsb25BdXRoQ29uZmlnKTogSHR0cFJlcXVlc3Q8YW55PjtcblxuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICBjb25zdCBvcHRpb25zID0geyAuLi5uZXcgRGVsb25BdXRoQ29uZmlnKCksIC4uLnRoaXMuaW5qZWN0b3IuZ2V0PERlbG9uQXV0aENvbmZpZz4oRGVsb25BdXRoQ29uZmlnLCB1bmRlZmluZWQpIH07XG4gICAgaWYgKG9wdGlvbnMuaWdub3Jlcykge1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIG9wdGlvbnMuaWdub3JlcyBhcyBSZWdFeHBbXSkge1xuICAgICAgICBpZiAoaXRlbS50ZXN0KHJlcS51cmwpKSByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBvcHRpb25zLmFsbG93X2Fub255bW91c19rZXkgJiZcbiAgICAgIChyZXEucGFyYW1zLmhhcyhvcHRpb25zLmFsbG93X2Fub255bW91c19rZXkpIHx8IG5ldyBSZWdFeHAoYFtcXD98Jl0ke29wdGlvbnMuYWxsb3dfYW5vbnltb3VzX2tleX09W14mXStgKS50ZXN0KHJlcS51cmxXaXRoUGFyYW1zKSlcbiAgICApIHtcbiAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQXV0aChvcHRpb25zKSkge1xuICAgICAgcmVxID0gdGhpcy5zZXRSZXEocmVxLCBvcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgVG9Mb2dpbihvcHRpb25zLCB0aGlzLmluamVjdG9yKTtcbiAgICAgIC8vIEludGVycnVwdCBIdHRwIHJlcXVlc3QsIHNvIG5lZWQgdG8gZ2VuZXJhdGUgYSBuZXcgT2JzZXJ2YWJsZVxuICAgICAgY29uc3QgZXJyJCA9IG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8SHR0cEV2ZW50PGFueT4+KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcyA9IG5ldyBIdHRwRXJyb3JSZXNwb25zZSh7XG4gICAgICAgICAgdXJsOiByZXEudXJsLFxuICAgICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLFxuICAgICAgICAgIHN0YXR1czogNDAxLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IGDmnaXoh6ogQGRlbG9uL2F1dGgg55qE5oum5oiq77yM5omA6K+35rGCVVJM5pyq5o6I5p2D77yM6Iul5piv55m75b2VQVBJ5Y+v5Yqg5YWlIFt1cmw/X2FsbG93X2Fub255bW91cz10cnVlXSDmnaXooajnpLrlv73nlaXmoKHpqozvvIzmm7TlpJrmlrnms5Xor7flj4LogIPvvJogaHR0cHM6Ly9uZy1hbGFpbi5jb20vYXV0aC9nZXR0aW5nLXN0YXJ0ZWQjRGVsb25BdXRoQ29uZmlnXFxuVGhlIGludGVyY2VwdGlvbiBmcm9tIEBkZWxvbi9hdXRoLCB0aGUgcmVxdWVzdGVkIFVSTCBpcyBub3QgYXV0aG9yaXplZC4gSWYgdGhlIGxvZ2luIEFQSSBjYW4gYWRkIFt1cmw/X2FsbG93X2Fub255bW91cz10cnVlXSB0byBpZ25vcmUgdGhlIGNoZWNrLCBwbGVhc2UgcmVmZXIgdG86IGh0dHBzOi8vbmctYWxhaW4uY29tL2F1dGgvZ2V0dGluZy1zdGFydGVkI0RlbG9uQXV0aENvbmZpZ2AsXG4gICAgICAgIH0pO1xuICAgICAgICBvYnNlcnZlci5lcnJvcihyZXMpO1xuICAgICAgfSk7XG4gICAgICBpZiAob3B0aW9ucy5leGVjdXRlT3RoZXJJbnRlcmNlcHRvcnMpIHtcbiAgICAgICAgY29uc3QgaW50ZXJjZXB0b3JzID0gdGhpcy5pbmplY3Rvci5nZXQoSFRUUF9JTlRFUkNFUFRPUlMsIFtdKTtcbiAgICAgICAgY29uc3QgbGFzdEludGVyY2VwdG9ycyA9IGludGVyY2VwdG9ycy5zbGljZShpbnRlcmNlcHRvcnMuaW5kZXhPZih0aGlzKSArIDEpO1xuICAgICAgICBpZiAobGFzdEludGVyY2VwdG9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3QgY2hhaW4gPSBsYXN0SW50ZXJjZXB0b3JzLnJlZHVjZVJpZ2h0KChfbmV4dCwgX2ludGVyY2VwdG9yKSA9PiBuZXcgSHR0cEF1dGhJbnRlcmNlcHRvckhhbmRsZXIoX25leHQsIF9pbnRlcmNlcHRvciksIHtcbiAgICAgICAgICAgIGhhbmRsZTogKF86IEh0dHBSZXF1ZXN0PGFueT4pID0+IGVyciQsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIGNoYWluLmhhbmRsZShyZXEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZXJyJDtcbiAgICB9XG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSk7XG4gIH1cbn1cbiJdfQ==