import { HttpErrorResponse, HttpParams, HTTP_INTERCEPTORS, } from '@angular/common/http';
import { Injectable, Injector, Optional } from '@angular/core';
import { AlainConfigService } from '@delon/util';
import { Observable } from 'rxjs';
import { mergeConfig } from '../auth.config';
import { ToLogin } from './helper';
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
                const res = new HttpErrorResponse({
                    url: req.url,
                    headers: req.headers,
                    status: 401,
                    statusText: `来自 @delon/auth 的拦截，所请求URL未授权，若是登录API可加入 [url?_allow_anonymous=true] 来表示忽略校验，更多方法请参考： https://ng-alain.com/auth/getting-started#AlainAuthConfig\nThe interception from @delon/auth, the requested URL is not authorized. If the login API can add [url?_allow_anonymous=true] to ignore the check, please refer to: https://ng-alain.com/auth/getting-started#AlainAuthConfig`,
                });
                observer.error(res);
            });
            if (options.executeOtherInterceptors) {
                const interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
                const lastInterceptors = interceptors.slice(interceptors.indexOf(this) + 1);
                if (lastInterceptors.length > 0) {
                    const chain = lastInterceptors.reduceRight((_next, _interceptor) => new HttpAuthInterceptorHandler(_next, _interceptor), {
                        handle: (_) => err$,
                    });
                    return chain.handle(req);
                }
            }
            return err$;
        }
        return next.handle(req);
    }
}
BaseInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BaseInterceptor.ctorParameters = () => [
    { type: Injector, decorators: [{ type: Optional }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2F1dGgvc3JjL3Rva2VuL2Jhc2UuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLGlCQUFpQixFQUlqQixVQUFVLEVBRVYsaUJBQWlCLEdBQ2xCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFBbUIsa0JBQWtCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDbEUsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQztBQUM1QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUduQyxNQUFNLDBCQUEwQjtJQUM5QixZQUFvQixJQUFpQixFQUFVLFdBQTRCO1FBQXZELFNBQUksR0FBSixJQUFJLENBQWE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBaUI7SUFBRyxDQUFDO0lBRS9FLE1BQU0sQ0FBQyxHQUFxQjtRQUMxQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEQsQ0FBQztDQUNGO0FBR0QsTUFBTSxPQUFnQixlQUFlO0lBQ25DLFlBQWtDLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBRyxDQUFDO0lBUXhELFNBQVMsQ0FBQyxHQUFxQixFQUFFLElBQWlCO1FBQ2hELE1BQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFD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QUFFO29CQUMvQixNQUFNLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLEVBQUUsQ0FBQyxJQUFJLDBCQUEwQixDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsRUFBRTt3QkFDdkgsTUFBTSxFQUFFLENBQUMsQ0FBbUIsRUFBRSxFQUFFLENBQUMsSUFBSTtxQkFDdEMsQ0FBQyxDQUFDO29CQUNILE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDMUI7YUFDRjtZQUNELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7O1lBbEVGLFVBQVU7Ozs7WUFmVSxRQUFRLHVCQWlCZCxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSHR0cEVycm9yUmVzcG9uc2UsXG4gIEh0dHBFdmVudCxcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cFBhcmFtcyxcbiAgSHR0cFJlcXVlc3QsXG4gIEhUVFBfSU5URVJDRVBUT1JTLFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsYWluQXV0aENvbmZpZywgQWxhaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1lcmdlQ29uZmlnIH0gZnJvbSAnLi4vYXV0aC5jb25maWcnO1xuaW1wb3J0IHsgVG9Mb2dpbiB9IGZyb20gJy4vaGVscGVyJztcbmltcG9ydCB7IElUb2tlbk1vZGVsIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5jbGFzcyBIdHRwQXV0aEludGVyY2VwdG9ySGFuZGxlciBpbXBsZW1lbnRzIEh0dHBIYW5kbGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZXh0OiBIdHRwSGFuZGxlciwgcHJpdmF0ZSBpbnRlcmNlcHRvcjogSHR0cEludGVyY2VwdG9yKSB7fVxuXG4gIGhhbmRsZShyZXE6IEh0dHBSZXF1ZXN0PGFueT4pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJjZXB0b3IuaW50ZXJjZXB0KHJlcSwgdGhpcy5uZXh0KTtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3Rvcikge31cblxuICBwcm90ZWN0ZWQgbW9kZWw6IElUb2tlbk1vZGVsO1xuXG4gIGFic3RyYWN0IGlzQXV0aChvcHRpb25zOiBBbGFpbkF1dGhDb25maWcpOiBib29sZWFuO1xuXG4gIGFic3RyYWN0IHNldFJlcShyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG9wdGlvbnM6IEFsYWluQXV0aENvbmZpZyk6IEh0dHBSZXF1ZXN0PGFueT47XG5cbiAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IG1lcmdlQ29uZmlnKHRoaXMuaW5qZWN0b3IuZ2V0KEFsYWluQ29uZmlnU2VydmljZSkpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMuaWdub3JlcykpIHtcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBvcHRpb25zLmlnbm9yZXMpIHtcbiAgICAgICAgaWYgKGl0ZW0udGVzdChyZXEudXJsKSkgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW5nb3JlS2V5ID0gb3B0aW9ucy5hbGxvd19hbm9ueW1vdXNfa2V5ITtcbiAgICBsZXQgaW5nb3JlZCA9IGZhbHNlO1xuICAgIGxldCBwYXJhbXMgPSByZXEucGFyYW1zO1xuICAgIGxldCB1cmwgPSByZXEudXJsO1xuICAgIGlmIChyZXEucGFyYW1zLmhhcyhpbmdvcmVLZXkpKSB7XG4gICAgICBwYXJhbXMgPSByZXEucGFyYW1zLmRlbGV0ZShpbmdvcmVLZXkpO1xuICAgICAgaW5nb3JlZCA9IHRydWU7XG4gICAgfVxuICAgIGNvbnN0IHVybEFyciA9IHJlcS51cmwuc3BsaXQoJz8nKTtcbiAgICBpZiAodXJsQXJyLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nUGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoeyBmcm9tU3RyaW5nOiB1cmxBcnJbMV0gfSk7XG4gICAgICBpZiAocXVlcnlTdHJpbmdQYXJhbXMuaGFzKGluZ29yZUtleSkpIHtcbiAgICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPSBxdWVyeVN0cmluZ1BhcmFtcy5kZWxldGUoaW5nb3JlS2V5KS50b1N0cmluZygpO1xuICAgICAgICB1cmwgPSBxdWVyeVN0cmluZy5sZW5ndGggPiAwID8gYCR7dXJsQXJyWzBdfT8ke3F1ZXJ5U3RyaW5nfWAgOiB1cmxBcnJbMF07XG4gICAgICAgIGluZ29yZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaW5nb3JlZCkge1xuICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcS5jbG9uZSh7IHBhcmFtcywgdXJsIH0pKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0F1dGgob3B0aW9ucykpIHtcbiAgICAgIHJlcSA9IHRoaXMuc2V0UmVxKHJlcSwgb3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFRvTG9naW4ob3B0aW9ucywgdGhpcy5pbmplY3Rvcik7XG4gICAgICAvLyBJbnRlcnJ1cHQgSHR0cCByZXF1ZXN0LCBzbyBuZWVkIHRvIGdlbmVyYXRlIGEgbmV3IE9ic2VydmFibGVcbiAgICAgIGNvbnN0IGVyciQgPSBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPEh0dHBFdmVudDxhbnk+PikgPT4ge1xuICAgICAgICBjb25zdCByZXMgPSBuZXcgSHR0cEVycm9yUmVzcG9uc2Uoe1xuICAgICAgICAgIHVybDogcmVxLnVybCxcbiAgICAgICAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcbiAgICAgICAgICBzdGF0dXM6IDQwMSxcbiAgICAgICAgICBzdGF0dXNUZXh0OiBg5p2l6IeqIEBkZWxvbi9hdXRoIOeahOaLpuaIqu+8jOaJgOivt+axglVSTOacquaOiOadg++8jOiLpeaYr+eZu+W9lUFQSeWPr+WKoOWFpSBbdXJsP19hbGxvd19hbm9ueW1vdXM9dHJ1ZV0g5p2l6KGo56S65b+955Wl5qCh6aqM77yM5pu05aSa5pa55rOV6K+35Y+C6ICD77yaIGh0dHBzOi8vbmctYWxhaW4uY29tL2F1dGgvZ2V0dGluZy1zdGFydGVkI0FsYWluQXV0aENvbmZpZ1xcblRoZSBpbnRlcmNlcHRpb24gZnJvbSBAZGVsb24vYXV0aCwgdGhlIHJlcXVlc3RlZCBVUkwgaXMgbm90IGF1dGhvcml6ZWQuIElmIHRoZSBsb2dpbiBBUEkgY2FuIGFkZCBbdXJsP19hbGxvd19hbm9ueW1vdXM9dHJ1ZV0gdG8gaWdub3JlIHRoZSBjaGVjaywgcGxlYXNlIHJlZmVyIHRvOiBodHRwczovL25nLWFsYWluLmNvbS9hdXRoL2dldHRpbmctc3RhcnRlZCNBbGFpbkF1dGhDb25maWdgLFxuICAgICAgICB9KTtcbiAgICAgICAgb2JzZXJ2ZXIuZXJyb3IocmVzKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKG9wdGlvbnMuZXhlY3V0ZU90aGVySW50ZXJjZXB0b3JzKSB7XG4gICAgICAgIGNvbnN0IGludGVyY2VwdG9ycyA9IHRoaXMuaW5qZWN0b3IuZ2V0KEhUVFBfSU5URVJDRVBUT1JTLCBbXSk7XG4gICAgICAgIGNvbnN0IGxhc3RJbnRlcmNlcHRvcnMgPSBpbnRlcmNlcHRvcnMuc2xpY2UoaW50ZXJjZXB0b3JzLmluZGV4T2YodGhpcykgKyAxKTtcbiAgICAgICAgaWYgKGxhc3RJbnRlcmNlcHRvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IGNoYWluID0gbGFzdEludGVyY2VwdG9ycy5yZWR1Y2VSaWdodCgoX25leHQsIF9pbnRlcmNlcHRvcikgPT4gbmV3IEh0dHBBdXRoSW50ZXJjZXB0b3JIYW5kbGVyKF9uZXh0LCBfaW50ZXJjZXB0b3IpLCB7XG4gICAgICAgICAgICBoYW5kbGU6IChfOiBIdHRwUmVxdWVzdDxhbnk+KSA9PiBlcnIkLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBjaGFpbi5oYW5kbGUocmVxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVyciQ7XG4gICAgfVxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xuICB9XG59XG4iXX0=