/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injector, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { _HttpClient } from '@delon/theme';
import { DelonAuthConfig } from '../auth.config';
import { ToLogin } from './helper';
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
        const options = Object.assign(new DelonAuthConfig(), this.injector.get(DelonAuthConfig, null));
        if (options.ignores) {
            for (const item of /** @type {?} */ (options.ignores)) {
                if (item.test(req.url))
                    return next.handle(req);
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
            /** @type {?} */
            const hc = this.injector.get(_HttpClient, null);
            if (hc)
                hc.end();
            return new Observable((observer) => {
                /** @type {?} */
                const res = new HttpErrorResponse({
                    status: 401,
                    statusText: `From Simple Intercept --> https://ng-alain.com/docs/auth`,
                });
                observer.error(res);
            });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hdXRoLyIsInNvdXJjZXMiOlsic3JjL3Rva2VuL2Jhc2UuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBVUwsaUJBQWlCLEdBQ2xCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQztBQUU1QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7O0FBRW5DLE1BQU07Ozs7SUFDSixZQUFrQyxRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0tBQUk7Ozs7OztJQVd4RCxTQUFTLENBQ1AsR0FBcUIsRUFDckIsSUFBaUI7O1FBUWpCLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQzNCLElBQUksZUFBZSxFQUFFLEVBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FDekMsQ0FBQztRQUNGLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNuQixLQUFLLE1BQU0sSUFBSSxzQkFBSSxPQUFPLENBQUMsT0FBbUIsR0FBRTtnQkFDOUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7b0JBQUUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2pEO1NBQ0Y7UUFFRCxJQUNFLE9BQU8sQ0FBQyxtQkFBbUI7WUFDM0IsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxRQUFRO3FCQUNWLEdBQUcsQ0FBQyxNQUFNLENBQUM7cUJBQ1gsUUFBUSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7cUJBQzNCLGFBQWEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFDcEQ7WUFDQSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDekI7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDeEIsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ2pDO2FBQU07WUFDTCxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7WUFFaEMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2hELElBQUksRUFBRTtnQkFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDakIsT0FBTyxJQUFJLFVBQVUsQ0FBQyxDQUFDLFFBQWtDLEVBQUUsRUFBRTs7Z0JBQzNELE1BQU0sR0FBRyxHQUFHLElBQUksaUJBQWlCLENBQUM7b0JBQ2hDLE1BQU0sRUFBRSxHQUFHO29CQUNYLFVBQVUsRUFBRSwwREFBMEQ7aUJBQ3ZFLENBQUMsQ0FBQztnQkFDSCxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3JCLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3pCOzs7O1lBakZNLFFBQVEsdUJBdUJGLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RvciwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtcclxuICBIdHRwSW50ZXJjZXB0b3IsXHJcbiAgSHR0cFJlcXVlc3QsXHJcbiAgSHR0cEhhbmRsZXIsXHJcbiAgSHR0cFNlbnRFdmVudCxcclxuICBIdHRwSGVhZGVyUmVzcG9uc2UsXHJcbiAgSHR0cFByb2dyZXNzRXZlbnQsXHJcbiAgSHR0cFJlc3BvbnNlLFxyXG4gIEh0dHBVc2VyRXZlbnQsXHJcbiAgSHR0cEV2ZW50LFxyXG4gIEh0dHBFcnJvclJlc3BvbnNlLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IF9IdHRwQ2xpZW50IH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcclxuXHJcbmltcG9ydCB7IElUb2tlbk1vZGVsIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBEZWxvbkF1dGhDb25maWcgfSBmcm9tICcuLi9hdXRoLmNvbmZpZyc7XHJcbmltcG9ydCB7IFRvTG9naW4gfSBmcm9tICcuL2hlbHBlcic7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yKSB7fVxyXG5cclxuICBwcm90ZWN0ZWQgbW9kZWw6IElUb2tlbk1vZGVsO1xyXG5cclxuICBhYnN0cmFjdCBpc0F1dGgob3B0aW9uczogRGVsb25BdXRoQ29uZmlnKTogYm9vbGVhbjtcclxuXHJcbiAgYWJzdHJhY3Qgc2V0UmVxKFxyXG4gICAgcmVxOiBIdHRwUmVxdWVzdDxhbnk+LFxyXG4gICAgb3B0aW9uczogRGVsb25BdXRoQ29uZmlnLFxyXG4gICk6IEh0dHBSZXF1ZXN0PGFueT47XHJcblxyXG4gIGludGVyY2VwdChcclxuICAgIHJlcTogSHR0cFJlcXVlc3Q8YW55PixcclxuICAgIG5leHQ6IEh0dHBIYW5kbGVyLFxyXG4gICk6IE9ic2VydmFibGU8XHJcbiAgICB8IEh0dHBTZW50RXZlbnRcclxuICAgIHwgSHR0cEhlYWRlclJlc3BvbnNlXHJcbiAgICB8IEh0dHBQcm9ncmVzc0V2ZW50XHJcbiAgICB8IEh0dHBSZXNwb25zZTxhbnk+XHJcbiAgICB8IEh0dHBVc2VyRXZlbnQ8YW55PlxyXG4gID4ge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXHJcbiAgICAgIG5ldyBEZWxvbkF1dGhDb25maWcoKSxcclxuICAgICAgdGhpcy5pbmplY3Rvci5nZXQoRGVsb25BdXRoQ29uZmlnLCBudWxsKSxcclxuICAgICk7XHJcbiAgICBpZiAob3B0aW9ucy5pZ25vcmVzKSB7XHJcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBvcHRpb25zLmlnbm9yZXMgYXMgUmVnRXhwW10pIHtcclxuICAgICAgICBpZiAoaXRlbS50ZXN0KHJlcS51cmwpKSByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChcclxuICAgICAgb3B0aW9ucy5hbGxvd19hbm9ueW1vdXNfa2V5ICYmXHJcbiAgICAgIChyZXEucGFyYW1zLmhhcyhvcHRpb25zLmFsbG93X2Fub255bW91c19rZXkpIHx8XHJcbiAgICAgICAgdGhpcy5pbmplY3RvclxyXG4gICAgICAgICAgLmdldChSb3V0ZXIpXHJcbiAgICAgICAgICAucGFyc2VVcmwocmVxLnVybFdpdGhQYXJhbXMpXHJcbiAgICAgICAgICAucXVlcnlQYXJhbU1hcC5oYXMob3B0aW9ucy5hbGxvd19hbm9ueW1vdXNfa2V5KSlcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pc0F1dGgob3B0aW9ucykpIHtcclxuICAgICAgcmVxID0gdGhpcy5zZXRSZXEocmVxLCBvcHRpb25zKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIFRvTG9naW4ob3B0aW9ucywgdGhpcy5pbmplY3Rvcik7XHJcbiAgICAgIC8vIG9ic2VydmVyLmVycm9y77ya5Lya5a+85YCS5ZCO57ut5oum5oiq5Zmo5peg5rOV6Kem5Y+R77yM5Zug5q2k77yM6ZyA6KaB5aSE55CGIGBfSHR0cENsaWVudGAg54q25oCB6Zeu6aKYXHJcbiAgICAgIGNvbnN0IGhjID0gdGhpcy5pbmplY3Rvci5nZXQoX0h0dHBDbGllbnQsIG51bGwpO1xyXG4gICAgICBpZiAoaGMpIGhjLmVuZCgpO1xyXG4gICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxIdHRwRXZlbnQ8YW55Pj4pID0+IHtcclxuICAgICAgICBjb25zdCByZXMgPSBuZXcgSHR0cEVycm9yUmVzcG9uc2Uoe1xyXG4gICAgICAgICAgc3RhdHVzOiA0MDEsXHJcbiAgICAgICAgICBzdGF0dXNUZXh0OiBgRnJvbSBTaW1wbGUgSW50ZXJjZXB0IC0tPiBodHRwczovL25nLWFsYWluLmNvbS9kb2NzL2F1dGhgLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG9ic2VydmVyLmVycm9yKHJlcyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==