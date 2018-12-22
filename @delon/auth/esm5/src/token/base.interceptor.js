/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// tslint:disable:no-any
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
    /** @type {?} */
    HttpAuthInterceptorHandler.prototype.next;
    /** @type {?} */
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
            ToLogin(options, this.injector, req.urlWithParams);
            // Interrupt Http request, so need to generate a new Observable
            /** @type {?} */
            var err$_1 = new Observable(function (observer) {
                /** @type {?} */
                var res = new HttpErrorResponse({
                    url: req.url,
                    headers: req.headers,
                    status: 401,
                    statusText: "From Auth Intercept --> https://ng-alain.com/docs/auth",
                });
                observer.error(res);
            });
            if (options.executeOtherInterceptors) {
                /** @type {?} */
                var interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
                /** @type {?} */
                var lastInterceptors = interceptors.slice(interceptors.indexOf(this) + 1);
                if (lastInterceptors.length > 0) {
                    /** @type {?} */
                    var chain = lastInterceptors.reduceRight(function (_next, _interceptor) { return new HttpAuthInterceptorHandler(_next, _interceptor); }, { handle: function (_) { return err$_1; } });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hdXRoLyIsInNvdXJjZXMiOlsic3JjL3Rva2VuL2Jhc2UuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLGlCQUFpQixFQUF3RCxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xJLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7QUFFNUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFHbkM7SUFDRSxvQ0FBb0IsSUFBaUIsRUFBVSxXQUE0QjtRQUF2RCxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO0lBQUksQ0FBQzs7Ozs7SUFFaEYsMkNBQU07Ozs7SUFBTixVQUFPLEdBQXFCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ0gsaUNBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQzs7O0lBTGEsMENBQXlCOztJQUFFLGlEQUFvQzs7Ozs7QUFPN0U7SUFDRSx5QkFBa0MsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFJLENBQUM7Ozs7OztJQVF6RCxtQ0FBUzs7Ozs7SUFBVCxVQUFVLEdBQXFCLEVBQUUsSUFBaUI7OztZQUMxQyxPQUFPLHdCQUFRLElBQUksZUFBZSxFQUFFLEVBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFFO1FBQ3pGLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTs7Z0JBQ25CLCtCQUFtQixtQkFBQSxPQUFPLENBQUMsT0FBTyxFQUFZLDZDQUFFO29CQUEzQyxJQUFNLElBQUksV0FBQTtvQkFDYixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQzt3QkFBRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ2pEOzs7Ozs7Ozs7U0FDRjtRQUVELElBQ0UsT0FBTyxDQUFDLG1CQUFtQjtZQUMzQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLFVBQVMsT0FBTyxDQUFDLG1CQUFtQixXQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQ2pJO1lBQ0EsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3hCLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNqQzthQUFNO1lBQ0wsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQzs7O2dCQUU3QyxNQUFJLEdBQUcsSUFBSSxVQUFVLENBQUMsVUFBQyxRQUFrQzs7b0JBQ3ZELEdBQUcsR0FBRyxJQUFJLGlCQUFpQixDQUFDO29CQUNoQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUc7b0JBQ1osT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPO29CQUNwQixNQUFNLEVBQUUsR0FBRztvQkFDWCxVQUFVLEVBQUUsd0RBQXdEO2lCQUNyRSxDQUFDO2dCQUNGLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEIsQ0FBQyxDQUFDO1lBQ0YsSUFBSSxPQUFPLENBQUMsd0JBQXdCLEVBQUU7O29CQUM5QixZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDOztvQkFDdkQsZ0JBQWdCLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDM0UsSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOzt3QkFDekIsS0FBSyxHQUFHLGdCQUFnQixDQUFDLFdBQVcsQ0FDeEMsVUFBQyxLQUFLLEVBQUUsWUFBWSxJQUFLLE9BQUEsSUFBSSwwQkFBMEIsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLEVBQW5ELENBQW1ELEVBQzVFLEVBQUUsTUFBTSxFQUFFLFVBQUMsQ0FBbUIsSUFBSyxPQUFBLE1BQUksRUFBSixDQUFJLEVBQUUsQ0FDMUM7b0JBQ0QsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUMxQjthQUNGO1lBQ0QsT0FBTyxNQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7Z0JBbkVNLFFBQVEsdUJBZ0JGLFFBQVE7O0lBb0R2QixzQkFBQztDQUFBLEFBckRELElBcURDO1NBckRxQixlQUFlOzs7SUFHbkMsZ0NBQTZCOztJQUZqQixtQ0FBd0M7Ozs7OztJQUlwRCwwREFBbUQ7Ozs7Ozs7SUFFbkQsK0RBQW1GIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XG5pbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cEV2ZW50LCBIdHRwSGFuZGxlciwgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVxdWVzdCwgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RvciwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERlbG9uQXV0aENvbmZpZyB9IGZyb20gJy4uL2F1dGguY29uZmlnJztcbmltcG9ydCB7IFRvTG9naW4gfSBmcm9tICcuL2hlbHBlcic7XG5pbXBvcnQgeyBJVG9rZW5Nb2RlbCB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuY2xhc3MgSHR0cEF1dGhJbnRlcmNlcHRvckhhbmRsZXIgaW1wbGVtZW50cyBIdHRwSGFuZGxlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmV4dDogSHR0cEhhbmRsZXIsIHByaXZhdGUgaW50ZXJjZXB0b3I6IEh0dHBJbnRlcmNlcHRvcikgeyB9XG5cbiAgaGFuZGxlKHJlcTogSHR0cFJlcXVlc3Q8YW55Pik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcmNlcHRvci5pbnRlcmNlcHQocmVxLCB0aGlzLm5leHQpO1xuICB9XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yKSB7IH1cblxuICBwcm90ZWN0ZWQgbW9kZWw6IElUb2tlbk1vZGVsO1xuXG4gIGFic3RyYWN0IGlzQXV0aChvcHRpb25zOiBEZWxvbkF1dGhDb25maWcpOiBib29sZWFuO1xuXG4gIGFic3RyYWN0IHNldFJlcShyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG9wdGlvbnM6IERlbG9uQXV0aENvbmZpZyk6IEh0dHBSZXF1ZXN0PGFueT47XG5cbiAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHsgLi4ubmV3IERlbG9uQXV0aENvbmZpZygpLCAuLi50aGlzLmluamVjdG9yLmdldChEZWxvbkF1dGhDb25maWcsIG51bGwpIH07XG4gICAgaWYgKG9wdGlvbnMuaWdub3Jlcykge1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIG9wdGlvbnMuaWdub3JlcyBhcyBSZWdFeHBbXSkge1xuICAgICAgICBpZiAoaXRlbS50ZXN0KHJlcS51cmwpKSByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBvcHRpb25zLmFsbG93X2Fub255bW91c19rZXkgJiZcbiAgICAgIChyZXEucGFyYW1zLmhhcyhvcHRpb25zLmFsbG93X2Fub255bW91c19rZXkpIHx8IG5ldyBSZWdFeHAoYFtcXD98Jl0ke29wdGlvbnMuYWxsb3dfYW5vbnltb3VzX2tleX09W14mXStgKS50ZXN0KHJlcS51cmxXaXRoUGFyYW1zKSlcbiAgICApIHtcbiAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQXV0aChvcHRpb25zKSkge1xuICAgICAgcmVxID0gdGhpcy5zZXRSZXEocmVxLCBvcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgVG9Mb2dpbihvcHRpb25zLCB0aGlzLmluamVjdG9yLCByZXEudXJsV2l0aFBhcmFtcyk7XG4gICAgICAvLyBJbnRlcnJ1cHQgSHR0cCByZXF1ZXN0LCBzbyBuZWVkIHRvIGdlbmVyYXRlIGEgbmV3IE9ic2VydmFibGVcbiAgICAgIGNvbnN0IGVyciQgPSBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPEh0dHBFdmVudDxhbnk+PikgPT4ge1xuICAgICAgICBjb25zdCByZXMgPSBuZXcgSHR0cEVycm9yUmVzcG9uc2Uoe1xuICAgICAgICAgIHVybDogcmVxLnVybCxcbiAgICAgICAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcbiAgICAgICAgICBzdGF0dXM6IDQwMSxcbiAgICAgICAgICBzdGF0dXNUZXh0OiBgRnJvbSBBdXRoIEludGVyY2VwdCAtLT4gaHR0cHM6Ly9uZy1hbGFpbi5jb20vZG9jcy9hdXRoYCxcbiAgICAgICAgfSk7XG4gICAgICAgIG9ic2VydmVyLmVycm9yKHJlcyk7XG4gICAgICB9KTtcbiAgICAgIGlmIChvcHRpb25zLmV4ZWN1dGVPdGhlckludGVyY2VwdG9ycykge1xuICAgICAgICBjb25zdCBpbnRlcmNlcHRvcnMgPSB0aGlzLmluamVjdG9yLmdldChIVFRQX0lOVEVSQ0VQVE9SUywgW10pO1xuICAgICAgICBjb25zdCBsYXN0SW50ZXJjZXB0b3JzID0gaW50ZXJjZXB0b3JzLnNsaWNlKGludGVyY2VwdG9ycy5pbmRleE9mKHRoaXMpICsgMSk7XG4gICAgICAgIGlmIChsYXN0SW50ZXJjZXB0b3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBjaGFpbiA9IGxhc3RJbnRlcmNlcHRvcnMucmVkdWNlUmlnaHQoXG4gICAgICAgICAgICAoX25leHQsIF9pbnRlcmNlcHRvcikgPT4gbmV3IEh0dHBBdXRoSW50ZXJjZXB0b3JIYW5kbGVyKF9uZXh0LCBfaW50ZXJjZXB0b3IpLFxuICAgICAgICAgICAgeyBoYW5kbGU6IChfOiBIdHRwUmVxdWVzdDxhbnk+KSA9PiBlcnIkIH0sXG4gICAgICAgICAgKTtcbiAgICAgICAgICByZXR1cm4gY2hhaW4uaGFuZGxlKHJlcSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBlcnIkO1xuICAgIH1cbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbiAgfVxufVxuIl19