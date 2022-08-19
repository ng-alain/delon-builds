/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpErrorResponse, HttpParams, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { AlainConfigService } from '@delon/util/config';
import { mergeConfig } from '../auth.config';
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
                    statusText: `来自 @delon/auth 的拦截，所请求URL未授权，若是登录API可加入 [url?_allow_anonymous=true] 来表示忽略校验，更多方法请参考： https://ng-alain.com/auth/getting-started#AlainAuthConfig\nThe interception from @delon/auth, the requested URL is not authorized. If the login API can add [url?_allow_anonymous=true] to ignore the check, please refer to: https://ng-alain.com/auth/getting-started#AlainAuthConfig`
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
BaseInterceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: BaseInterceptor, deps: [{ token: i0.Injector, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
BaseInterceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: BaseInterceptor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: BaseInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.Injector, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2F1dGgvc3JjL3Rva2VuL2Jhc2UuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdURBQXVEO0FBQ3ZELE9BQU8sRUFDTCxpQkFBaUIsRUFJakIsVUFBVSxFQUVWLGlCQUFpQixFQUNsQixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxVQUFVLEVBQVksUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7QUFFNUMsT0FBTyxFQUFtQixrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sVUFBVSxDQUFDOztBQUduQyxNQUFNLDBCQUEwQjtJQUM5QixZQUFvQixJQUFpQixFQUFVLFdBQTRCO1FBQXZELFNBQUksR0FBSixJQUFJLENBQWE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBaUI7SUFBRyxDQUFDO0lBRS9FLE1BQU0sQ0FBQyxHQUFxQjtRQUMxQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEQsQ0FBQztDQUNGO0FBR0QsTUFBTSxPQUFnQixlQUFlO0lBQ25DLFlBQWtDLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBRyxDQUFDO0lBUXhELFNBQVMsQ0FBQyxHQUFxQixFQUFFLElBQWlCO1FBQ2hELE1BQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxLQUFLLENBQUMsT0FB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Q0FBQyxFQUFFO29CQUMvQixNQUFNLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxXQUFXLENBQ3hDLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxFQUFFLENBQUMsSUFBSSwwQkFBMEIsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLEVBQzVFO3dCQUNFLE1BQU0sRUFBRSxDQUFDLENBQW1CLEVBQUUsRUFBRSxDQUFDLElBQUk7cUJBQ3RDLENBQ0YsQ0FBQztvQkFDRixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQzFCO2FBQ0Y7WUFDRCxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7OzRHQXBFbUIsZUFBZTtnSEFBZixlQUFlOzJGQUFmLGVBQWU7a0JBRHBDLFVBQVU7OzBCQUVJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5pbXBvcnQge1xuICBIdHRwRXJyb3JSZXNwb25zZSxcbiAgSHR0cEV2ZW50LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwUGFyYW1zLFxuICBIdHRwUmVxdWVzdCxcbiAgSFRUUF9JTlRFUkNFUFRPUlNcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBbGFpbkF1dGhDb25maWcsIEFsYWluQ29uZmlnU2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5cbmltcG9ydCB7IG1lcmdlQ29uZmlnIH0gZnJvbSAnLi4vYXV0aC5jb25maWcnO1xuaW1wb3J0IHsgVG9Mb2dpbiB9IGZyb20gJy4vaGVscGVyJztcbmltcG9ydCB7IElUb2tlbk1vZGVsIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5jbGFzcyBIdHRwQXV0aEludGVyY2VwdG9ySGFuZGxlciBpbXBsZW1lbnRzIEh0dHBIYW5kbGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZXh0OiBIdHRwSGFuZGxlciwgcHJpdmF0ZSBpbnRlcmNlcHRvcjogSHR0cEludGVyY2VwdG9yKSB7fVxuXG4gIGhhbmRsZShyZXE6IEh0dHBSZXF1ZXN0PGFueT4pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJjZXB0b3IuaW50ZXJjZXB0KHJlcSwgdGhpcy5uZXh0KTtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3Rvcikge31cblxuICBwcm90ZWN0ZWQgbW9kZWwhOiBJVG9rZW5Nb2RlbDtcblxuICBhYnN0cmFjdCBpc0F1dGgob3B0aW9uczogQWxhaW5BdXRoQ29uZmlnKTogYm9vbGVhbjtcblxuICBhYnN0cmFjdCBzZXRSZXEocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBvcHRpb25zOiBBbGFpbkF1dGhDb25maWcpOiBIdHRwUmVxdWVzdDxhbnk+O1xuXG4gIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBtZXJnZUNvbmZpZyh0aGlzLmluamVjdG9yLmdldChBbGFpbkNvbmZpZ1NlcnZpY2UpKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zLmlnbm9yZXMpKSB7XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygb3B0aW9ucy5pZ25vcmVzKSB7XG4gICAgICAgIGlmIChpdGVtLnRlc3QocmVxLnVybCkpIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGluZ29yZUtleSA9IG9wdGlvbnMuYWxsb3dfYW5vbnltb3VzX2tleSE7XG4gICAgbGV0IGluZ29yZWQgPSBmYWxzZTtcbiAgICBsZXQgcGFyYW1zID0gcmVxLnBhcmFtcztcbiAgICBsZXQgdXJsID0gcmVxLnVybDtcbiAgICBpZiAocmVxLnBhcmFtcy5oYXMoaW5nb3JlS2V5KSkge1xuICAgICAgcGFyYW1zID0gcmVxLnBhcmFtcy5kZWxldGUoaW5nb3JlS2V5KTtcbiAgICAgIGluZ29yZWQgPSB0cnVlO1xuICAgIH1cbiAgICBjb25zdCB1cmxBcnIgPSByZXEudXJsLnNwbGl0KCc/Jyk7XG4gICAgaWYgKHVybEFyci5sZW5ndGggPiAxKSB7XG4gICAgICBjb25zdCBxdWVyeVN0cmluZ1BhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHsgZnJvbVN0cmluZzogdXJsQXJyWzFdIH0pO1xuICAgICAgaWYgKHF1ZXJ5U3RyaW5nUGFyYW1zLmhhcyhpbmdvcmVLZXkpKSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gcXVlcnlTdHJpbmdQYXJhbXMuZGVsZXRlKGluZ29yZUtleSkudG9TdHJpbmcoKTtcbiAgICAgICAgdXJsID0gcXVlcnlTdHJpbmcubGVuZ3RoID4gMCA/IGAke3VybEFyclswXX0/JHtxdWVyeVN0cmluZ31gIDogdXJsQXJyWzBdO1xuICAgICAgICBpbmdvcmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGluZ29yZWQpIHtcbiAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEuY2xvbmUoeyBwYXJhbXMsIHVybCB9KSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNBdXRoKG9wdGlvbnMpKSB7XG4gICAgICByZXEgPSB0aGlzLnNldFJlcShyZXEsIG9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBUb0xvZ2luKG9wdGlvbnMsIHRoaXMuaW5qZWN0b3IpO1xuICAgICAgLy8gSW50ZXJydXB0IEh0dHAgcmVxdWVzdCwgc28gbmVlZCB0byBnZW5lcmF0ZSBhIG5ldyBPYnNlcnZhYmxlXG4gICAgICBjb25zdCBlcnIkID0gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxIdHRwRXZlbnQ8YW55Pj4pID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0gbmV3IEh0dHBFcnJvclJlc3BvbnNlKHtcbiAgICAgICAgICB1cmw6IHJlcS51cmwsXG4gICAgICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXG4gICAgICAgICAgc3RhdHVzOiA0MDEsXG4gICAgICAgICAgc3RhdHVzVGV4dDogYOadpeiHqiBAZGVsb24vYXV0aCDnmoTmi6bmiKrvvIzmiYDor7fmsYJVUkzmnKrmjojmnYPvvIzoi6XmmK/nmbvlvZVBUEnlj6/liqDlhaUgW3VybD9fYWxsb3dfYW5vbnltb3VzPXRydWVdIOadpeihqOekuuW/veeVpeagoemqjO+8jOabtOWkmuaWueazleivt+WPguiAg++8miBodHRwczovL25nLWFsYWluLmNvbS9hdXRoL2dldHRpbmctc3RhcnRlZCNBbGFpbkF1dGhDb25maWdcXG5UaGUgaW50ZXJjZXB0aW9uIGZyb20gQGRlbG9uL2F1dGgsIHRoZSByZXF1ZXN0ZWQgVVJMIGlzIG5vdCBhdXRob3JpemVkLiBJZiB0aGUgbG9naW4gQVBJIGNhbiBhZGQgW3VybD9fYWxsb3dfYW5vbnltb3VzPXRydWVdIHRvIGlnbm9yZSB0aGUgY2hlY2ssIHBsZWFzZSByZWZlciB0bzogaHR0cHM6Ly9uZy1hbGFpbi5jb20vYXV0aC9nZXR0aW5nLXN0YXJ0ZWQjQWxhaW5BdXRoQ29uZmlnYFxuICAgICAgICB9KTtcbiAgICAgICAgb2JzZXJ2ZXIuZXJyb3IocmVzKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKG9wdGlvbnMuZXhlY3V0ZU90aGVySW50ZXJjZXB0b3JzKSB7XG4gICAgICAgIGNvbnN0IGludGVyY2VwdG9ycyA9IHRoaXMuaW5qZWN0b3IuZ2V0KEhUVFBfSU5URVJDRVBUT1JTLCBbXSk7XG4gICAgICAgIGNvbnN0IGxhc3RJbnRlcmNlcHRvcnMgPSBpbnRlcmNlcHRvcnMuc2xpY2UoaW50ZXJjZXB0b3JzLmluZGV4T2YodGhpcykgKyAxKTtcbiAgICAgICAgaWYgKGxhc3RJbnRlcmNlcHRvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IGNoYWluID0gbGFzdEludGVyY2VwdG9ycy5yZWR1Y2VSaWdodChcbiAgICAgICAgICAgIChfbmV4dCwgX2ludGVyY2VwdG9yKSA9PiBuZXcgSHR0cEF1dGhJbnRlcmNlcHRvckhhbmRsZXIoX25leHQsIF9pbnRlcmNlcHRvciksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGhhbmRsZTogKF86IEh0dHBSZXF1ZXN0PGFueT4pID0+IGVyciRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybiBjaGFpbi5oYW5kbGUocmVxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVyciQ7XG4gICAgfVxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xuICB9XG59XG4iXX0=