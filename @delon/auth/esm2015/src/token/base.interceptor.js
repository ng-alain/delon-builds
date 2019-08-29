/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injector, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { DelonAuthConfig } from '../auth.config';
import { ToLogin } from './helper';
class HttpAuthInterceptorHandler {
    /**
     * @param {?} next
     * @param {?} interceptor
     */
    constructor(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    /**
     * @param {?} req
     * @return {?}
     */
    handle(req) {
        return this.interceptor.intercept(req, this.next);
    }
}
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
export class BaseInterceptor {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        /** @type {?} */
        const options = Object.assign({}, new DelonAuthConfig(), this.injector.get(DelonAuthConfig, undefined));
        if (options.ignores) {
            for (const item of (/** @type {?} */ (options.ignores))) {
                if (item.test(req.url))
                    return next.handle(req);
            }
        }
        if (options.allow_anonymous_key &&
            (req.params.has(options.allow_anonymous_key) || new RegExp(`[\?|&]${options.allow_anonymous_key}=[^&]+`).test(req.urlWithParams))) {
            return next.handle(req);
        }
        if (this.isAuth(options)) {
            req = this.setReq(req, options);
        }
        else {
            ToLogin(options, this.injector);
            // Interrupt Http request, so need to generate a new Observable
            /** @type {?} */
            const err$ = new Observable((/**
             * @param {?} observer
             * @return {?}
             */
            (observer) => {
                /** @type {?} */
                const res = new HttpErrorResponse({
                    url: req.url,
                    headers: req.headers,
                    status: 401,
                    statusText: `来自 @delon/auth 的拦截，所请求URL未授权，若是登录API可加入 [url?_allow_anonymous=true] 来表示忽略校验，更多方法请参考： https://ng-alain.com/auth/getting-started#DelonAuthConfig\nThe interception from @delon/auth, the requested URL is not authorized. If the login API can add [url?_allow_anonymous=true] to ignore the check, please refer to: https://ng-alain.com/auth/getting-started#DelonAuthConfig`,
                });
                observer.error(res);
            }));
            if (options.executeOtherInterceptors) {
                /** @type {?} */
                const interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
                /** @type {?} */
                const lastInterceptors = interceptors.slice(interceptors.indexOf(this) + 1);
                if (lastInterceptors.length > 0) {
                    /** @type {?} */
                    const chain = lastInterceptors.reduceRight((/**
                     * @param {?} _next
                     * @param {?} _interceptor
                     * @return {?}
                     */
                    (_next, _interceptor) => new HttpAuthInterceptorHandler(_next, _interceptor)), {
                        handle: (/**
                         * @param {?} _
                         * @return {?}
                         */
                        (_) => err$),
                    });
                    return chain.handle(req);
                }
            }
            return err$;
        }
        return next.handle(req);
    }
}
/** @nocollapse */
BaseInterceptor.ctorParameters = () => [
    { type: Injector, decorators: [{ type: Optional }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hdXRoLyIsInNvdXJjZXMiOlsic3JjL3Rva2VuL2Jhc2UuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0QsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsSSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sTUFBTSxDQUFDO0FBRTVDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBR25DLE1BQU0sMEJBQTBCOzs7OztJQUM5QixZQUFvQixJQUFpQixFQUFVLFdBQTRCO1FBQXZELFNBQUksR0FBSixJQUFJLENBQWE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBaUI7SUFBRyxDQUFDOzs7OztJQUUvRSxNQUFNLENBQUMsR0FBcUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BELENBQUM7Q0FDRjs7Ozs7O0lBTGEsMENBQXlCOzs7OztJQUFFLGlEQUFvQzs7Ozs7QUFPN0UsTUFBTSxPQUFnQixlQUFlOzs7O0lBQ25DLFlBQWtDLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBRyxDQUFDOzs7Ozs7SUFReEQsU0FBUyxDQUFDLEdBQXFCLEVBQUUsSUFBaUI7O2NBQzFDLE9BQU8scUJBQVEsSUFBSSxlQUFlLEVBQUUsRUFBSyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBa0IsZUFBZSxFQUFFLFNBQVMsQ0FBQyxDQUFFO1FBQy9HLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNuQixLQUFLLE1BQU0sSUFBSSxJQUFJLG1CQUFBLE9BQU8sQ0FBQyxPQUFPLEVBQVksRUFBRTtnQkFDOUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7b0JBQUUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2pEO1NBQ0Y7UUFFRCxJQUNFLE9BQU8sQ0FBQyxtQkFBbUI7WUFDM0IsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxTQUFTLE9BQU8sQ0FBQyxtQkFBbUIsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUNqSTtZQUNBLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN6QjtRQUVELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN4QixHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDakM7YUFBTTtZQUNMLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7a0JBRTFCLElBQUksR0FBRyxJQUFJLFVBQVU7Ozs7WUFBQyxDQUFDLFFBQWtDLEVBQUUsRUFBRTs7c0JBQzNELEdBQUcsR0FBRyxJQUFJLGlCQUFpQixDQUFDO29CQUNoQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUc7b0JBQ1osT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPO29CQUNwQixNQUFNLEVBQUUsR0FBRztvQkFDWCxVQUFVLEVBQUUsOFdBQThXO2lCQUMzWCxDQUFDO2dCQUNGLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEIsQ0FBQyxFQUFDO1lBQ0YsSUFBSSxPQUFPLENBQUMsd0JBQXdCLEVBQUU7O3NCQUM5QixZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDOztzQkFDdkQsZ0JBQWdCLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDM0UsSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOzswQkFDekIsS0FBSyxHQUFHLGdCQUFnQixDQUFDLFdBQVc7Ozs7O29CQUFDLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxFQUFFLENBQUMsSUFBSSwwQkFBMEIsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLEdBQUU7d0JBQ3ZILE1BQU07Ozs7d0JBQUUsQ0FBQyxDQUFtQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUE7cUJBQ3RDLENBQUM7b0JBQ0YsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUMxQjthQUNGO1lBQ0QsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7O1lBbEVNLFFBQVEsdUJBZ0JGLFFBQVE7Ozs7Ozs7SUFFckIsZ0NBQTZCOzs7OztJQUZqQixtQ0FBd0M7Ozs7OztJQUlwRCwwREFBbUQ7Ozs7Ozs7SUFFbkQsK0RBQW1GIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBFdmVudCwgSHR0cEhhbmRsZXIsIEh0dHBJbnRlcmNlcHRvciwgSHR0cFJlcXVlc3QsIEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0b3IsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEZWxvbkF1dGhDb25maWcgfSBmcm9tICcuLi9hdXRoLmNvbmZpZyc7XG5pbXBvcnQgeyBUb0xvZ2luIH0gZnJvbSAnLi9oZWxwZXInO1xuaW1wb3J0IHsgSVRva2VuTW9kZWwgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbmNsYXNzIEh0dHBBdXRoSW50ZXJjZXB0b3JIYW5kbGVyIGltcGxlbWVudHMgSHR0cEhhbmRsZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5leHQ6IEh0dHBIYW5kbGVyLCBwcml2YXRlIGludGVyY2VwdG9yOiBIdHRwSW50ZXJjZXB0b3IpIHt9XG5cbiAgaGFuZGxlKHJlcTogSHR0cFJlcXVlc3Q8YW55Pik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcmNlcHRvci5pbnRlcmNlcHQocmVxLCB0aGlzLm5leHQpO1xuICB9XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yKSB7fVxuXG4gIHByb3RlY3RlZCBtb2RlbDogSVRva2VuTW9kZWw7XG5cbiAgYWJzdHJhY3QgaXNBdXRoKG9wdGlvbnM6IERlbG9uQXV0aENvbmZpZyk6IGJvb2xlYW47XG5cbiAgYWJzdHJhY3Qgc2V0UmVxKHJlcTogSHR0cFJlcXVlc3Q8YW55Piwgb3B0aW9uczogRGVsb25BdXRoQ29uZmlnKTogSHR0cFJlcXVlc3Q8YW55PjtcblxuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICBjb25zdCBvcHRpb25zID0geyAuLi5uZXcgRGVsb25BdXRoQ29uZmlnKCksIC4uLnRoaXMuaW5qZWN0b3IuZ2V0PERlbG9uQXV0aENvbmZpZz4oRGVsb25BdXRoQ29uZmlnLCB1bmRlZmluZWQpIH07XG4gICAgaWYgKG9wdGlvbnMuaWdub3Jlcykge1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIG9wdGlvbnMuaWdub3JlcyBhcyBSZWdFeHBbXSkge1xuICAgICAgICBpZiAoaXRlbS50ZXN0KHJlcS51cmwpKSByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBvcHRpb25zLmFsbG93X2Fub255bW91c19rZXkgJiZcbiAgICAgIChyZXEucGFyYW1zLmhhcyhvcHRpb25zLmFsbG93X2Fub255bW91c19rZXkpIHx8IG5ldyBSZWdFeHAoYFtcXD98Jl0ke29wdGlvbnMuYWxsb3dfYW5vbnltb3VzX2tleX09W14mXStgKS50ZXN0KHJlcS51cmxXaXRoUGFyYW1zKSlcbiAgICApIHtcbiAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQXV0aChvcHRpb25zKSkge1xuICAgICAgcmVxID0gdGhpcy5zZXRSZXEocmVxLCBvcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgVG9Mb2dpbihvcHRpb25zLCB0aGlzLmluamVjdG9yKTtcbiAgICAgIC8vIEludGVycnVwdCBIdHRwIHJlcXVlc3QsIHNvIG5lZWQgdG8gZ2VuZXJhdGUgYSBuZXcgT2JzZXJ2YWJsZVxuICAgICAgY29uc3QgZXJyJCA9IG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8SHR0cEV2ZW50PGFueT4+KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcyA9IG5ldyBIdHRwRXJyb3JSZXNwb25zZSh7XG4gICAgICAgICAgdXJsOiByZXEudXJsLFxuICAgICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLFxuICAgICAgICAgIHN0YXR1czogNDAxLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IGDmnaXoh6ogQGRlbG9uL2F1dGgg55qE5oum5oiq77yM5omA6K+35rGCVVJM5pyq5o6I5p2D77yM6Iul5piv55m75b2VQVBJ5Y+v5Yqg5YWlIFt1cmw/X2FsbG93X2Fub255bW91cz10cnVlXSDmnaXooajnpLrlv73nlaXmoKHpqozvvIzmm7TlpJrmlrnms5Xor7flj4LogIPvvJogaHR0cHM6Ly9uZy1hbGFpbi5jb20vYXV0aC9nZXR0aW5nLXN0YXJ0ZWQjRGVsb25BdXRoQ29uZmlnXFxuVGhlIGludGVyY2VwdGlvbiBmcm9tIEBkZWxvbi9hdXRoLCB0aGUgcmVxdWVzdGVkIFVSTCBpcyBub3QgYXV0aG9yaXplZC4gSWYgdGhlIGxvZ2luIEFQSSBjYW4gYWRkIFt1cmw/X2FsbG93X2Fub255bW91cz10cnVlXSB0byBpZ25vcmUgdGhlIGNoZWNrLCBwbGVhc2UgcmVmZXIgdG86IGh0dHBzOi8vbmctYWxhaW4uY29tL2F1dGgvZ2V0dGluZy1zdGFydGVkI0RlbG9uQXV0aENvbmZpZ2AsXG4gICAgICAgIH0pO1xuICAgICAgICBvYnNlcnZlci5lcnJvcihyZXMpO1xuICAgICAgfSk7XG4gICAgICBpZiAob3B0aW9ucy5leGVjdXRlT3RoZXJJbnRlcmNlcHRvcnMpIHtcbiAgICAgICAgY29uc3QgaW50ZXJjZXB0b3JzID0gdGhpcy5pbmplY3Rvci5nZXQoSFRUUF9JTlRFUkNFUFRPUlMsIFtdKTtcbiAgICAgICAgY29uc3QgbGFzdEludGVyY2VwdG9ycyA9IGludGVyY2VwdG9ycy5zbGljZShpbnRlcmNlcHRvcnMuaW5kZXhPZih0aGlzKSArIDEpO1xuICAgICAgICBpZiAobGFzdEludGVyY2VwdG9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3QgY2hhaW4gPSBsYXN0SW50ZXJjZXB0b3JzLnJlZHVjZVJpZ2h0KChfbmV4dCwgX2ludGVyY2VwdG9yKSA9PiBuZXcgSHR0cEF1dGhJbnRlcmNlcHRvckhhbmRsZXIoX25leHQsIF9pbnRlcmNlcHRvciksIHtcbiAgICAgICAgICAgIGhhbmRsZTogKF86IEh0dHBSZXF1ZXN0PGFueT4pID0+IGVyciQsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIGNoYWluLmhhbmRsZShyZXEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZXJyJDtcbiAgICB9XG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSk7XG4gIH1cbn1cbiJdfQ==