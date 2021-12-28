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
BaseInterceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: BaseInterceptor, deps: [{ token: i0.Injector, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
BaseInterceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: BaseInterceptor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: BaseInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.Injector, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2F1dGgvc3JjL3Rva2VuL2Jhc2UuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLGlCQUFpQixFQUlqQixVQUFVLEVBRVYsaUJBQWlCLEVBQ2xCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLFVBQVUsRUFBWSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQztBQUU1QyxPQUFPLEVBQW1CLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHekUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxVQUFVLENBQUM7O0FBR25DLE1BQU0sMEJBQTBCO0lBQzlCLFlBQW9CLElBQWlCLEVBQVUsV0FBNEI7UUFBdkQsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtJQUFHLENBQUM7SUFFL0UsTUFBTSxDQUFDLEdBQTJCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRCxDQUFDO0NBQ0Y7QUFHRCxNQUFNLE9BQWdCLGVBQWU7SUFDbkMsWUFBa0MsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFHLENBQUM7SUFReEQsU0FBUyxDQUFDLEdBQTJCLEVBQUUsSUFBaUI7UUFDdEQsTUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQUNuRSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxD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Qy9CLE1BQU0sS0FBSyxHQUFHLGdCQUFnQixDQUFDLFdBQVcsQ0FDeEMsQ0FBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLEVBQUUsQ0FBQyxJQUFJLDBCQUEwQixDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsRUFDNUU7d0JBQ0UsTUFBTSxFQUFFLENBQUMsQ0FBeUIsRUFBRSxFQUFFLENBQUMsSUFBSTtxQkFDNUMsQ0FDRixDQUFDO29CQUNGLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDMUI7YUFDRjtZQUNELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7NEdBcEVtQixlQUFlO2dIQUFmLGVBQWU7MkZBQWYsZUFBZTtrQkFEcEMsVUFBVTs7MEJBRUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEh0dHBFcnJvclJlc3BvbnNlLFxuICBIdHRwRXZlbnQsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBQYXJhbXMsXG4gIEh0dHBSZXF1ZXN0LFxuICBIVFRQX0lOVEVSQ0VQVE9SU1xufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEFsYWluQXV0aENvbmZpZywgQWxhaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgbWVyZ2VDb25maWcgfSBmcm9tICcuLi9hdXRoLmNvbmZpZyc7XG5pbXBvcnQgeyBUb0xvZ2luIH0gZnJvbSAnLi9oZWxwZXInO1xuaW1wb3J0IHsgSVRva2VuTW9kZWwgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbmNsYXNzIEh0dHBBdXRoSW50ZXJjZXB0b3JIYW5kbGVyIGltcGxlbWVudHMgSHR0cEhhbmRsZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5leHQ6IEh0dHBIYW5kbGVyLCBwcml2YXRlIGludGVyY2VwdG9yOiBIdHRwSW50ZXJjZXB0b3IpIHt9XG5cbiAgaGFuZGxlKHJlcTogSHR0cFJlcXVlc3Q8TnpTYWZlQW55Pik6IE9ic2VydmFibGU8SHR0cEV2ZW50PE56U2FmZUFueT4+IHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcmNlcHRvci5pbnRlcmNlcHQocmVxLCB0aGlzLm5leHQpO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yKSB7fVxuXG4gIHByb3RlY3RlZCBtb2RlbDogSVRva2VuTW9kZWw7XG5cbiAgYWJzdHJhY3QgaXNBdXRoKG9wdGlvbnM6IEFsYWluQXV0aENvbmZpZyk6IGJvb2xlYW47XG5cbiAgYWJzdHJhY3Qgc2V0UmVxKHJlcTogSHR0cFJlcXVlc3Q8TnpTYWZlQW55Piwgb3B0aW9uczogQWxhaW5BdXRoQ29uZmlnKTogSHR0cFJlcXVlc3Q8TnpTYWZlQW55PjtcblxuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxOelNhZmVBbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PE56U2FmZUFueT4+IHtcbiAgICBjb25zdCBvcHRpb25zID0gbWVyZ2VDb25maWcodGhpcy5pbmplY3Rvci5nZXQoQWxhaW5Db25maWdTZXJ2aWNlKSk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucy5pZ25vcmVzKSkge1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIG9wdGlvbnMuaWdub3Jlcykge1xuICAgICAgICBpZiAoaXRlbS50ZXN0KHJlcS51cmwpKSByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpbmdvcmVLZXkgPSBvcHRpb25zLmFsbG93X2Fub255bW91c19rZXkhO1xuICAgIGxldCBpbmdvcmVkID0gZmFsc2U7XG4gICAgbGV0IHBhcmFtcyA9IHJlcS5wYXJhbXM7XG4gICAgbGV0IHVybCA9IHJlcS51cmw7XG4gICAgaWYgKHJlcS5wYXJhbXMuaGFzKGluZ29yZUtleSkpIHtcbiAgICAgIHBhcmFtcyA9IHJlcS5wYXJhbXMuZGVsZXRlKGluZ29yZUtleSk7XG4gICAgICBpbmdvcmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3QgdXJsQXJyID0gcmVxLnVybC5zcGxpdCgnPycpO1xuICAgIGlmICh1cmxBcnIubGVuZ3RoID4gMSkge1xuICAgICAgY29uc3QgcXVlcnlTdHJpbmdQYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7IGZyb21TdHJpbmc6IHVybEFyclsxXSB9KTtcbiAgICAgIGlmIChxdWVyeVN0cmluZ1BhcmFtcy5oYXMoaW5nb3JlS2V5KSkge1xuICAgICAgICBjb25zdCBxdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nUGFyYW1zLmRlbGV0ZShpbmdvcmVLZXkpLnRvU3RyaW5nKCk7XG4gICAgICAgIHVybCA9IHF1ZXJ5U3RyaW5nLmxlbmd0aCA+IDAgPyBgJHt1cmxBcnJbMF19PyR7cXVlcnlTdHJpbmd9YCA6IHVybEFyclswXTtcbiAgICAgICAgaW5nb3JlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpbmdvcmVkKSB7XG4gICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxLmNsb25lKHsgcGFyYW1zLCB1cmwgfSkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQXV0aChvcHRpb25zKSkge1xuICAgICAgcmVxID0gdGhpcy5zZXRSZXEocmVxLCBvcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgVG9Mb2dpbihvcHRpb25zLCB0aGlzLmluamVjdG9yKTtcbiAgICAgIC8vIEludGVycnVwdCBIdHRwIHJlcXVlc3QsIHNvIG5lZWQgdG8gZ2VuZXJhdGUgYSBuZXcgT2JzZXJ2YWJsZVxuICAgICAgY29uc3QgZXJyJCA9IG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8SHR0cEV2ZW50PE56U2FmZUFueT4+KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcyA9IG5ldyBIdHRwRXJyb3JSZXNwb25zZSh7XG4gICAgICAgICAgdXJsOiByZXEudXJsLFxuICAgICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLFxuICAgICAgICAgIHN0YXR1czogNDAxLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IGDmnaXoh6ogQGRlbG9uL2F1dGgg55qE5oum5oiq77yM5omA6K+35rGCVVJM5pyq5o6I5p2D77yM6Iul5piv55m75b2VQVBJ5Y+v5Yqg5YWlIFt1cmw/X2FsbG93X2Fub255bW91cz10cnVlXSDmnaXooajnpLrlv73nlaXmoKHpqozvvIzmm7TlpJrmlrnms5Xor7flj4LogIPvvJogaHR0cHM6Ly9uZy1hbGFpbi5jb20vYXV0aC9nZXR0aW5nLXN0YXJ0ZWQjQWxhaW5BdXRoQ29uZmlnXFxuVGhlIGludGVyY2VwdGlvbiBmcm9tIEBkZWxvbi9hdXRoLCB0aGUgcmVxdWVzdGVkIFVSTCBpcyBub3QgYXV0aG9yaXplZC4gSWYgdGhlIGxvZ2luIEFQSSBjYW4gYWRkIFt1cmw/X2FsbG93X2Fub255bW91cz10cnVlXSB0byBpZ25vcmUgdGhlIGNoZWNrLCBwbGVhc2UgcmVmZXIgdG86IGh0dHBzOi8vbmctYWxhaW4uY29tL2F1dGgvZ2V0dGluZy1zdGFydGVkI0FsYWluQXV0aENvbmZpZ2BcbiAgICAgICAgfSk7XG4gICAgICAgIG9ic2VydmVyLmVycm9yKHJlcyk7XG4gICAgICB9KTtcbiAgICAgIGlmIChvcHRpb25zLmV4ZWN1dGVPdGhlckludGVyY2VwdG9ycykge1xuICAgICAgICBjb25zdCBpbnRlcmNlcHRvcnMgPSB0aGlzLmluamVjdG9yLmdldChIVFRQX0lOVEVSQ0VQVE9SUywgW10pO1xuICAgICAgICBjb25zdCBsYXN0SW50ZXJjZXB0b3JzID0gaW50ZXJjZXB0b3JzLnNsaWNlKGludGVyY2VwdG9ycy5pbmRleE9mKHRoaXMpICsgMSk7XG4gICAgICAgIGlmIChsYXN0SW50ZXJjZXB0b3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBjaGFpbiA9IGxhc3RJbnRlcmNlcHRvcnMucmVkdWNlUmlnaHQoXG4gICAgICAgICAgICAoX25leHQsIF9pbnRlcmNlcHRvcikgPT4gbmV3IEh0dHBBdXRoSW50ZXJjZXB0b3JIYW5kbGVyKF9uZXh0LCBfaW50ZXJjZXB0b3IpLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBoYW5kbGU6IChfOiBIdHRwUmVxdWVzdDxOelNhZmVBbnk+KSA9PiBlcnIkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgICByZXR1cm4gY2hhaW4uaGFuZGxlKHJlcSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBlcnIkO1xuICAgIH1cbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbiAgfVxufVxuIl19