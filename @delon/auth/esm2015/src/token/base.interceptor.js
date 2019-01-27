/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
// tslint:disable:no-any
import { HttpErrorResponse, HTTP_INTERCEPTORS, } from '@angular/common/http';
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
    /** @type {?} */
    HttpAuthInterceptorHandler.prototype.next;
    /** @type {?} */
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
        const options = Object.assign({}, new DelonAuthConfig(), this.injector.get(DelonAuthConfig, null));
        if (options.ignores) {
            for (const item of (/** @type {?} */ (options.ignores))) {
                if (item.test(req.url))
                    return next.handle(req);
            }
        }
        if (options.allow_anonymous_key &&
            (req.params.has(options.allow_anonymous_key) ||
                new RegExp(`[\?|&]${options.allow_anonymous_key}=[^&]+`).test(req.urlWithParams))) {
            return next.handle(req);
        }
        if (this.isAuth(options)) {
            req = this.setReq(req, options);
        }
        else {
            ToLogin(options, this.injector, req.urlWithParams);
            // Interrupt Http request, so need to generate a new Observable
            /** @type {?} */
            const err$ = new Observable((observer) => {
                /** @type {?} */
                const res = new HttpErrorResponse({
                    url: req.url,
                    headers: req.headers,
                    status: 401,
                    statusText: `From Auth Intercept --> https://ng-alain.com/docs/auth`,
                });
                observer.error(res);
            });
            if (options.executeOtherInterceptors) {
                /** @type {?} */
                const interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
                /** @type {?} */
                const lastInterceptors = interceptors.slice(interceptors.indexOf(this) + 1);
                if (lastInterceptors.length > 0) {
                    /** @type {?} */
                    const chain = lastInterceptors.reduceRight((_next, _interceptor) => new HttpAuthInterceptorHandler(_next, _interceptor), { handle: (_) => err$ });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hdXRoLyIsInNvdXJjZXMiOlsic3JjL3Rva2VuL2Jhc2UuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQ0wsaUJBQWlCLEVBS2pCLGlCQUFpQixHQUNsQixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7QUFFNUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFHbkMsTUFBTSwwQkFBMEI7Ozs7O0lBQzlCLFlBQW9CLElBQWlCLEVBQVUsV0FBNEI7UUFBdkQsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtJQUFHLENBQUM7Ozs7O0lBRS9FLE1BQU0sQ0FBQyxHQUFxQjtRQUMxQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEQsQ0FBQztDQUNGOzs7SUFMYSwwQ0FBeUI7O0lBQUUsaURBQW9DOzs7OztBQU83RSxNQUFNLE9BQWdCLGVBQWU7Ozs7SUFDbkMsWUFBa0MsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFHLENBQUM7Ozs7OztJQVF4RCxTQUFTLENBQUMsR0FBcUIsRUFBRSxJQUFpQjs7Y0FDMUMsT0FBTyxxQkFBUSxJQUFJLGVBQWUsRUFBRSxFQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBRTtRQUN6RixJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDbkIsS0FBSyxNQUFNLElBQUksSUFBSSxtQkFBQSxPQUFPLENBQUMsT0FBTyxFQUFZLEVBQUU7Z0JBQzlDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO29CQUFFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNqRDtTQUNGO1FBRUQsSUFDRSxPQUFPLENBQUMsbUJBQW1CO1lBQzNCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDO2dCQUMxQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLE9BQU8sQ0FBQyxtQkFBbUIsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUNuRjtZQUNBLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN6QjtRQUVELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN4QixHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDakM7YUFBTTtZQUNMLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7OztrQkFFN0MsSUFBSSxHQUFHLElBQUksVUFBVSxDQUFDLENBQUMsUUFBa0MsRUFBRSxFQUFFOztzQkFDM0QsR0FBRyxHQUFHLElBQUksaUJBQWlCLENBQUM7b0JBQ2hDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRztvQkFDWixPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU87b0JBQ3BCLE1BQU0sRUFBRSxHQUFHO29CQUNYLFVBQVUsRUFBRSx3REFBd0Q7aUJBQ3JFLENBQUM7Z0JBQ0YsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QixDQUFDLENBQUM7WUFDRixJQUFJLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRTs7c0JBQzlCLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLENBQUM7O3NCQUN2RCxnQkFBZ0IsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMzRSxJQUFJLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7OzBCQUN6QixLQUFLLEdBQUcsZ0JBQWdCLENBQUMsV0FBVyxDQUN4QyxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksMEJBQTBCLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxFQUM1RSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQW1CLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxDQUMxQztvQkFDRCxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQzFCO2FBQ0Y7WUFDRCxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7WUFwRU0sUUFBUSx1QkFnQkYsUUFBUTs7OztJQUVyQixnQ0FBNkI7O0lBRmpCLG1DQUF3Qzs7Ozs7O0lBSXBELDBEQUFtRDs7Ozs7OztJQUVuRCwrREFBbUYiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpuby1hbnlcbmltcG9ydCB7XG4gIEh0dHBFcnJvclJlc3BvbnNlLFxuICBIdHRwRXZlbnQsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBSZXF1ZXN0LFxuICBIVFRQX0lOVEVSQ0VQVE9SUyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0b3IsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEZWxvbkF1dGhDb25maWcgfSBmcm9tICcuLi9hdXRoLmNvbmZpZyc7XG5pbXBvcnQgeyBUb0xvZ2luIH0gZnJvbSAnLi9oZWxwZXInO1xuaW1wb3J0IHsgSVRva2VuTW9kZWwgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbmNsYXNzIEh0dHBBdXRoSW50ZXJjZXB0b3JIYW5kbGVyIGltcGxlbWVudHMgSHR0cEhhbmRsZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5leHQ6IEh0dHBIYW5kbGVyLCBwcml2YXRlIGludGVyY2VwdG9yOiBIdHRwSW50ZXJjZXB0b3IpIHt9XG5cbiAgaGFuZGxlKHJlcTogSHR0cFJlcXVlc3Q8YW55Pik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcmNlcHRvci5pbnRlcmNlcHQocmVxLCB0aGlzLm5leHQpO1xuICB9XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yKSB7fVxuXG4gIHByb3RlY3RlZCBtb2RlbDogSVRva2VuTW9kZWw7XG5cbiAgYWJzdHJhY3QgaXNBdXRoKG9wdGlvbnM6IERlbG9uQXV0aENvbmZpZyk6IGJvb2xlYW47XG5cbiAgYWJzdHJhY3Qgc2V0UmVxKHJlcTogSHR0cFJlcXVlc3Q8YW55Piwgb3B0aW9uczogRGVsb25BdXRoQ29uZmlnKTogSHR0cFJlcXVlc3Q8YW55PjtcblxuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICBjb25zdCBvcHRpb25zID0geyAuLi5uZXcgRGVsb25BdXRoQ29uZmlnKCksIC4uLnRoaXMuaW5qZWN0b3IuZ2V0KERlbG9uQXV0aENvbmZpZywgbnVsbCkgfTtcbiAgICBpZiAob3B0aW9ucy5pZ25vcmVzKSB7XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygb3B0aW9ucy5pZ25vcmVzIGFzIFJlZ0V4cFtdKSB7XG4gICAgICAgIGlmIChpdGVtLnRlc3QocmVxLnVybCkpIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIG9wdGlvbnMuYWxsb3dfYW5vbnltb3VzX2tleSAmJlxuICAgICAgKHJlcS5wYXJhbXMuaGFzKG9wdGlvbnMuYWxsb3dfYW5vbnltb3VzX2tleSkgfHxcbiAgICAgICAgbmV3IFJlZ0V4cChgW1xcP3wmXSR7b3B0aW9ucy5hbGxvd19hbm9ueW1vdXNfa2V5fT1bXiZdK2ApLnRlc3QocmVxLnVybFdpdGhQYXJhbXMpKVxuICAgICkge1xuICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNBdXRoKG9wdGlvbnMpKSB7XG4gICAgICByZXEgPSB0aGlzLnNldFJlcShyZXEsIG9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBUb0xvZ2luKG9wdGlvbnMsIHRoaXMuaW5qZWN0b3IsIHJlcS51cmxXaXRoUGFyYW1zKTtcbiAgICAgIC8vIEludGVycnVwdCBIdHRwIHJlcXVlc3QsIHNvIG5lZWQgdG8gZ2VuZXJhdGUgYSBuZXcgT2JzZXJ2YWJsZVxuICAgICAgY29uc3QgZXJyJCA9IG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8SHR0cEV2ZW50PGFueT4+KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcyA9IG5ldyBIdHRwRXJyb3JSZXNwb25zZSh7XG4gICAgICAgICAgdXJsOiByZXEudXJsLFxuICAgICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLFxuICAgICAgICAgIHN0YXR1czogNDAxLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IGBGcm9tIEF1dGggSW50ZXJjZXB0IC0tPiBodHRwczovL25nLWFsYWluLmNvbS9kb2NzL2F1dGhgLFxuICAgICAgICB9KTtcbiAgICAgICAgb2JzZXJ2ZXIuZXJyb3IocmVzKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKG9wdGlvbnMuZXhlY3V0ZU90aGVySW50ZXJjZXB0b3JzKSB7XG4gICAgICAgIGNvbnN0IGludGVyY2VwdG9ycyA9IHRoaXMuaW5qZWN0b3IuZ2V0KEhUVFBfSU5URVJDRVBUT1JTLCBbXSk7XG4gICAgICAgIGNvbnN0IGxhc3RJbnRlcmNlcHRvcnMgPSBpbnRlcmNlcHRvcnMuc2xpY2UoaW50ZXJjZXB0b3JzLmluZGV4T2YodGhpcykgKyAxKTtcbiAgICAgICAgaWYgKGxhc3RJbnRlcmNlcHRvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IGNoYWluID0gbGFzdEludGVyY2VwdG9ycy5yZWR1Y2VSaWdodChcbiAgICAgICAgICAgIChfbmV4dCwgX2ludGVyY2VwdG9yKSA9PiBuZXcgSHR0cEF1dGhJbnRlcmNlcHRvckhhbmRsZXIoX25leHQsIF9pbnRlcmNlcHRvciksXG4gICAgICAgICAgICB7IGhhbmRsZTogKF86IEh0dHBSZXF1ZXN0PGFueT4pID0+IGVyciQgfSxcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybiBjaGFpbi5oYW5kbGUocmVxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVyciQ7XG4gICAgfVxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xuICB9XG59XG4iXX0=