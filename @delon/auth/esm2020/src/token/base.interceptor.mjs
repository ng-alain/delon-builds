/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpErrorResponse, HttpParams, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { AlainConfigService } from '@delon/util/config';
import { mergeConfig } from '../auth.config';
import { ALLOW_ANONYMOUS } from '../token';
import { ToLogin } from './helper';
import * as i0 from "@angular/core";
class HttpAuthInterceptorHandler {
    constructor(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    handle(req) {
        return this.interceptor.intercept(req, this.next);
    }
}
export class BaseInterceptor {
    constructor(injector) {
        this.injector = injector;
    }
    intercept(req, next) {
        const options = mergeConfig(this.injector.get(AlainConfigService));
        if (Array.isArray(options.ignores)) {
            for (const item of options.ignores) {
                if (item.test(req.url))
                    return next.handle(req);
            }
        }
        if (req.context.get(ALLOW_ANONYMOUS))
            return next.handle(req);
        const ingoreKey = options.allow_anonymous_key;
        let ingored = false;
        let params = req.params;
        let url = req.url;
        if (req.params.has(ingoreKey)) {
            params = req.params.delete(ingoreKey);
            ingored = true;
        }
        const urlArr = req.url.split('?');
        if (urlArr.length > 1) {
            const queryStringParams = new HttpParams({ fromString: urlArr[1] });
            if (queryStringParams.has(ingoreKey)) {
                const queryString = queryStringParams.delete(ingoreKey).toString();
                url = queryString.length > 0 ? `${urlArr[0]}?${queryString}` : urlArr[0];
                ingored = true;
            }
        }
        if (ingored) {
            return next.handle(req.clone({ params, url }));
        }
        if (this.isAuth(options)) {
            req = this.setReq(req, options);
        }
        else {
            ToLogin(options, this.injector);
            // Interrupt Http request, so need to generate a new Observable
            const err$ = new Observable((observer) => {
                let statusText = '';
                if (typeof ngDevMode === 'undefined' || ngDevMode) {
                    statusText = `来自 @delon/auth 的拦截，所请求URL未授权，若是登录API可加入 [url?_allow_anonymous=true] 来表示忽略校验，更多方法请参考： https://ng-alain.com/auth/getting-started#AlainAuthConfig\nThe interception from @delon/auth, the requested URL is not authorized. If the login API can add [url?_allow_anonymous=true] to ignore the check, please refer to: https://ng-alain.com/auth/getting-started#AlainAuthConfig`;
                }
                const res = new HttpErrorResponse({
                    url: req.url,
                    headers: req.headers,
                    status: 401,
                    statusText
                });
                observer.error(res);
            });
            if (options.executeOtherInterceptors) {
                const interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
                const lastInterceptors = interceptors.slice(interceptors.indexOf(this) + 1);
                if (lastInterceptors.length > 0) {
                    const chain = lastInterceptors.reduceRight((_next, _interceptor) => new HttpAuthInterceptorHandler(_next, _interceptor), {
                        handle: (_) => err$
                    });
                    return chain.handle(req);
                }
            }
            return err$;
        }
        return next.handle(req);
    }
}
BaseInterceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: BaseInterceptor, deps: [{ token: i0.Injector, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
BaseInterceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: BaseInterceptor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: BaseInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.Injector, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2F1dGgvc3JjL3Rva2VuL2Jhc2UuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdURBQXVEO0FBQ3ZELE9BQU8sRUFDTCxpQkFBaUIsRUFJakIsVUFBVSxFQUVWLGlCQUFpQixFQUNsQixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxVQUFVLEVBQVksUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7QUFFNUMsT0FBTyxFQUFtQixrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxVQUFVLENBQUM7O0FBR25DLE1BQU0sMEJBQTBCO0lBQzlCLFlBQW9CLElBQWlCLEVBQVUsV0FBNEI7UUFBdkQsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtJQUFHLENBQUM7SUFFL0UsTUFBTSxDQUFDLEdBQXFCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRCxDQUFDO0NBQ0Y7QUFHRCxNQUFNLE9BQWdCLGVBQWU7SUFDbkMsWUFBa0MsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFHLENBQUM7SUFReEQsU0FBUyxDQUFDLEdBQXFCLEVBQUUsSUFBaUI7UUFDaEQsTUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGtCQUFr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QUNILElBQUksT0FBTyxDQUFDLHdCQUF3QixFQUFFO2dCQUNwQyxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDOUQsTUFBTSxnQkFBZ0IsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzVFLElBQUksZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDL0IsTUFBTSxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsV0FBVyxDQUN4QyxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksMEJBQTBCLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxFQUM1RTt3QkFDRSxNQUFNLEVBQUUsQ0FBQyxDQUFtQixFQUFFLEVBQUUsQ0FBQyxJQUFJO3FCQUN0QyxDQUNGLENBQUM7b0JBQ0YsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUMxQjthQUNGO1lBQ0QsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDOzs0R0F6RW1CLGVBQWU7Z0hBQWYsZUFBZTsyRkFBZixlQUFlO2tCQURwQyxVQUFVOzswQkFFSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuaW1wb3J0IHtcbiAgSHR0cEVycm9yUmVzcG9uc2UsXG4gIEh0dHBFdmVudCxcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cFBhcmFtcyxcbiAgSHR0cFJlcXVlc3QsXG4gIEhUVFBfSU5URVJDRVBUT1JTXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQWxhaW5BdXRoQ29uZmlnLCBBbGFpbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuXG5pbXBvcnQgeyBtZXJnZUNvbmZpZyB9IGZyb20gJy4uL2F1dGguY29uZmlnJztcbmltcG9ydCB7IEFMTE9XX0FOT05ZTU9VUyB9IGZyb20gJy4uL3Rva2VuJztcbmltcG9ydCB7IFRvTG9naW4gfSBmcm9tICcuL2hlbHBlcic7XG5pbXBvcnQgeyBJVG9rZW5Nb2RlbCB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuY2xhc3MgSHR0cEF1dGhJbnRlcmNlcHRvckhhbmRsZXIgaW1wbGVtZW50cyBIdHRwSGFuZGxlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmV4dDogSHR0cEhhbmRsZXIsIHByaXZhdGUgaW50ZXJjZXB0b3I6IEh0dHBJbnRlcmNlcHRvcikge31cblxuICBoYW5kbGUocmVxOiBIdHRwUmVxdWVzdDxhbnk+KTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIHJldHVybiB0aGlzLmludGVyY2VwdG9yLmludGVyY2VwdChyZXEsIHRoaXMubmV4dCk7XG4gIH1cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IpIHt9XG5cbiAgcHJvdGVjdGVkIG1vZGVsITogSVRva2VuTW9kZWw7XG5cbiAgYWJzdHJhY3QgaXNBdXRoKG9wdGlvbnM6IEFsYWluQXV0aENvbmZpZyk6IGJvb2xlYW47XG5cbiAgYWJzdHJhY3Qgc2V0UmVxKHJlcTogSHR0cFJlcXVlc3Q8YW55Piwgb3B0aW9uczogQWxhaW5BdXRoQ29uZmlnKTogSHR0cFJlcXVlc3Q8YW55PjtcblxuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICBjb25zdCBvcHRpb25zID0gbWVyZ2VDb25maWcodGhpcy5pbmplY3Rvci5nZXQoQWxhaW5Db25maWdTZXJ2aWNlKSk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucy5pZ25vcmVzKSkge1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIG9wdGlvbnMuaWdub3Jlcykge1xuICAgICAgICBpZiAoaXRlbS50ZXN0KHJlcS51cmwpKSByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJlcS5jb250ZXh0LmdldChBTExPV19BTk9OWU1PVVMpKSByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcblxuICAgIGNvbnN0IGluZ29yZUtleSA9IG9wdGlvbnMuYWxsb3dfYW5vbnltb3VzX2tleSE7XG4gICAgbGV0IGluZ29yZWQgPSBmYWxzZTtcbiAgICBsZXQgcGFyYW1zID0gcmVxLnBhcmFtcztcbiAgICBsZXQgdXJsID0gcmVxLnVybDtcbiAgICBpZiAocmVxLnBhcmFtcy5oYXMoaW5nb3JlS2V5KSkge1xuICAgICAgcGFyYW1zID0gcmVxLnBhcmFtcy5kZWxldGUoaW5nb3JlS2V5KTtcbiAgICAgIGluZ29yZWQgPSB0cnVlO1xuICAgIH1cbiAgICBjb25zdCB1cmxBcnIgPSByZXEudXJsLnNwbGl0KCc/Jyk7XG4gICAgaWYgKHVybEFyci5sZW5ndGggPiAxKSB7XG4gICAgICBjb25zdCBxdWVyeVN0cmluZ1BhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHsgZnJvbVN0cmluZzogdXJsQXJyWzFdIH0pO1xuICAgICAgaWYgKHF1ZXJ5U3RyaW5nUGFyYW1zLmhhcyhpbmdvcmVLZXkpKSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gcXVlcnlTdHJpbmdQYXJhbXMuZGVsZXRlKGluZ29yZUtleSkudG9TdHJpbmcoKTtcbiAgICAgICAgdXJsID0gcXVlcnlTdHJpbmcubGVuZ3RoID4gMCA/IGAke3VybEFyclswXX0/JHtxdWVyeVN0cmluZ31gIDogdXJsQXJyWzBdO1xuICAgICAgICBpbmdvcmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGluZ29yZWQpIHtcbiAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEuY2xvbmUoeyBwYXJhbXMsIHVybCB9KSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNBdXRoKG9wdGlvbnMpKSB7XG4gICAgICByZXEgPSB0aGlzLnNldFJlcShyZXEsIG9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBUb0xvZ2luKG9wdGlvbnMsIHRoaXMuaW5qZWN0b3IpO1xuICAgICAgLy8gSW50ZXJydXB0IEh0dHAgcmVxdWVzdCwgc28gbmVlZCB0byBnZW5lcmF0ZSBhIG5ldyBPYnNlcnZhYmxlXG4gICAgICBjb25zdCBlcnIkID0gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxIdHRwRXZlbnQ8YW55Pj4pID0+IHtcbiAgICAgICAgbGV0IHN0YXR1c1RleHQgPSAnJztcbiAgICAgICAgaWYgKHR5cGVvZiBuZ0Rldk1vZGUgPT09ICd1bmRlZmluZWQnIHx8IG5nRGV2TW9kZSkge1xuICAgICAgICAgIHN0YXR1c1RleHQgPSBg5p2l6IeqIEBkZWxvbi9hdXRoIOeahOaLpuaIqu+8jOaJgOivt+axglVSTOacquaOiOadg++8jOiLpeaYr+eZu+W9lUFQSeWPr+WKoOWFpSBbdXJsP19hbGxvd19hbm9ueW1vdXM9dHJ1ZV0g5p2l6KGo56S65b+955Wl5qCh6aqM77yM5pu05aSa5pa55rOV6K+35Y+C6ICD77yaIGh0dHBzOi8vbmctYWxhaW4uY29tL2F1dGgvZ2V0dGluZy1zdGFydGVkI0FsYWluQXV0aENvbmZpZ1xcblRoZSBpbnRlcmNlcHRpb24gZnJvbSBAZGVsb24vYXV0aCwgdGhlIHJlcXVlc3RlZCBVUkwgaXMgbm90IGF1dGhvcml6ZWQuIElmIHRoZSBsb2dpbiBBUEkgY2FuIGFkZCBbdXJsP19hbGxvd19hbm9ueW1vdXM9dHJ1ZV0gdG8gaWdub3JlIHRoZSBjaGVjaywgcGxlYXNlIHJlZmVyIHRvOiBodHRwczovL25nLWFsYWluLmNvbS9hdXRoL2dldHRpbmctc3RhcnRlZCNBbGFpbkF1dGhDb25maWdgO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlcyA9IG5ldyBIdHRwRXJyb3JSZXNwb25zZSh7XG4gICAgICAgICAgdXJsOiByZXEudXJsLFxuICAgICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLFxuICAgICAgICAgIHN0YXR1czogNDAxLFxuICAgICAgICAgIHN0YXR1c1RleHRcbiAgICAgICAgfSk7XG4gICAgICAgIG9ic2VydmVyLmVycm9yKHJlcyk7XG4gICAgICB9KTtcbiAgICAgIGlmIChvcHRpb25zLmV4ZWN1dGVPdGhlckludGVyY2VwdG9ycykge1xuICAgICAgICBjb25zdCBpbnRlcmNlcHRvcnMgPSB0aGlzLmluamVjdG9yLmdldChIVFRQX0lOVEVSQ0VQVE9SUywgW10pO1xuICAgICAgICBjb25zdCBsYXN0SW50ZXJjZXB0b3JzID0gaW50ZXJjZXB0b3JzLnNsaWNlKGludGVyY2VwdG9ycy5pbmRleE9mKHRoaXMpICsgMSk7XG4gICAgICAgIGlmIChsYXN0SW50ZXJjZXB0b3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBjaGFpbiA9IGxhc3RJbnRlcmNlcHRvcnMucmVkdWNlUmlnaHQoXG4gICAgICAgICAgICAoX25leHQsIF9pbnRlcmNlcHRvcikgPT4gbmV3IEh0dHBBdXRoSW50ZXJjZXB0b3JIYW5kbGVyKF9uZXh0LCBfaW50ZXJjZXB0b3IpLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBoYW5kbGU6IChfOiBIdHRwUmVxdWVzdDxhbnk+KSA9PiBlcnIkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgICByZXR1cm4gY2hhaW4uaGFuZGxlKHJlcSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBlcnIkO1xuICAgIH1cbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbiAgfVxufVxuIl19