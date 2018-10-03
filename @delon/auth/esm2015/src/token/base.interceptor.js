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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hdXRoLyIsInNvdXJjZXMiOlsic3JjL3Rva2VuL2Jhc2UuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBVUwsaUJBQWlCLEdBQ2xCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQztBQUU1QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7O0FBRW5DLE1BQU07Ozs7SUFDSixZQUFrQyxRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0tBQUk7Ozs7OztJQVd4RCxTQUFTLENBQ1AsR0FBcUIsRUFDckIsSUFBaUI7O1FBUWpCLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQzNCLElBQUksZUFBZSxFQUFFLEVBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FDekMsQ0FBQztRQUNGLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNuQixLQUFLLE1BQU0sSUFBSSxzQkFBSSxPQUFPLENBQUMsT0FBbUIsR0FBRTtnQkFDOUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7b0JBQUUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2pEO1NBQ0Y7UUFFRCxJQUNFLE9BQU8sQ0FBQyxtQkFBbUI7WUFDM0IsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxRQUFRO3FCQUNWLEdBQUcsQ0FBQyxNQUFNLENBQUM7cUJBQ1gsUUFBUSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7cUJBQzNCLGFBQWEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFDcEQ7WUFDQSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDekI7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDeEIsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ2pDO2FBQU07WUFDTCxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7WUFFaEMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2hELElBQUksRUFBRTtnQkFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDakIsT0FBTyxJQUFJLFVBQVUsQ0FBQyxDQUFDLFFBQWtDLEVBQUUsRUFBRTs7Z0JBQzNELE1BQU0sR0FBRyxHQUFHLElBQUksaUJBQWlCLENBQUM7b0JBQ2hDLE1BQU0sRUFBRSxHQUFHO29CQUNYLFVBQVUsRUFBRSwwREFBMEQ7aUJBQ3ZFLENBQUMsQ0FBQztnQkFDSCxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3JCLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3pCOzs7O1lBakZNLFFBQVEsdUJBdUJGLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RvciwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBSZXF1ZXN0LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cFNlbnRFdmVudCxcbiAgSHR0cEhlYWRlclJlc3BvbnNlLFxuICBIdHRwUHJvZ3Jlc3NFdmVudCxcbiAgSHR0cFJlc3BvbnNlLFxuICBIdHRwVXNlckV2ZW50LFxuICBIdHRwRXZlbnQsXG4gIEh0dHBFcnJvclJlc3BvbnNlLFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBfSHR0cENsaWVudCB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5cbmltcG9ydCB7IElUb2tlbk1vZGVsIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGVsb25BdXRoQ29uZmlnIH0gZnJvbSAnLi4vYXV0aC5jb25maWcnO1xuaW1wb3J0IHsgVG9Mb2dpbiB9IGZyb20gJy4vaGVscGVyJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IpIHt9XG5cbiAgcHJvdGVjdGVkIG1vZGVsOiBJVG9rZW5Nb2RlbDtcblxuICBhYnN0cmFjdCBpc0F1dGgob3B0aW9uczogRGVsb25BdXRoQ29uZmlnKTogYm9vbGVhbjtcblxuICBhYnN0cmFjdCBzZXRSZXEoXG4gICAgcmVxOiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG9wdGlvbnM6IERlbG9uQXV0aENvbmZpZyxcbiAgKTogSHR0cFJlcXVlc3Q8YW55PjtcblxuICBpbnRlcmNlcHQoXG4gICAgcmVxOiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyLFxuICApOiBPYnNlcnZhYmxlPFxuICAgIHwgSHR0cFNlbnRFdmVudFxuICAgIHwgSHR0cEhlYWRlclJlc3BvbnNlXG4gICAgfCBIdHRwUHJvZ3Jlc3NFdmVudFxuICAgIHwgSHR0cFJlc3BvbnNlPGFueT5cbiAgICB8IEh0dHBVc2VyRXZlbnQ8YW55PlxuICA+IHtcbiAgICBjb25zdCBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIG5ldyBEZWxvbkF1dGhDb25maWcoKSxcbiAgICAgIHRoaXMuaW5qZWN0b3IuZ2V0KERlbG9uQXV0aENvbmZpZywgbnVsbCksXG4gICAgKTtcbiAgICBpZiAob3B0aW9ucy5pZ25vcmVzKSB7XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygb3B0aW9ucy5pZ25vcmVzIGFzIFJlZ0V4cFtdKSB7XG4gICAgICAgIGlmIChpdGVtLnRlc3QocmVxLnVybCkpIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIG9wdGlvbnMuYWxsb3dfYW5vbnltb3VzX2tleSAmJlxuICAgICAgKHJlcS5wYXJhbXMuaGFzKG9wdGlvbnMuYWxsb3dfYW5vbnltb3VzX2tleSkgfHxcbiAgICAgICAgdGhpcy5pbmplY3RvclxuICAgICAgICAgIC5nZXQoUm91dGVyKVxuICAgICAgICAgIC5wYXJzZVVybChyZXEudXJsV2l0aFBhcmFtcylcbiAgICAgICAgICAucXVlcnlQYXJhbU1hcC5oYXMob3B0aW9ucy5hbGxvd19hbm9ueW1vdXNfa2V5KSlcbiAgICApIHtcbiAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQXV0aChvcHRpb25zKSkge1xuICAgICAgcmVxID0gdGhpcy5zZXRSZXEocmVxLCBvcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgVG9Mb2dpbihvcHRpb25zLCB0aGlzLmluamVjdG9yKTtcbiAgICAgIC8vIG9ic2VydmVyLmVycm9y77ya5Lya5a+85YCS5ZCO57ut5oum5oiq5Zmo5peg5rOV6Kem5Y+R77yM5Zug5q2k77yM6ZyA6KaB5aSE55CGIGBfSHR0cENsaWVudGAg54q25oCB6Zeu6aKYXG4gICAgICBjb25zdCBoYyA9IHRoaXMuaW5qZWN0b3IuZ2V0KF9IdHRwQ2xpZW50LCBudWxsKTtcbiAgICAgIGlmIChoYykgaGMuZW5kKCk7XG4gICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxIdHRwRXZlbnQ8YW55Pj4pID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0gbmV3IEh0dHBFcnJvclJlc3BvbnNlKHtcbiAgICAgICAgICBzdGF0dXM6IDQwMSxcbiAgICAgICAgICBzdGF0dXNUZXh0OiBgRnJvbSBTaW1wbGUgSW50ZXJjZXB0IC0tPiBodHRwczovL25nLWFsYWluLmNvbS9kb2NzL2F1dGhgLFxuICAgICAgICB9KTtcbiAgICAgICAgb2JzZXJ2ZXIuZXJyb3IocmVzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbiAgfVxufVxuIl19