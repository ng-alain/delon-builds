import { HttpErrorResponse, HttpResponse, HttpResponseBase, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { deepCopy } from '@delon/util/other';
import { MockService } from './mock.service';
import { MockStatusError } from './status.error';
import * as i0 from "@angular/core";
class HttpMockInterceptorHandler {
    constructor(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    handle(req) {
        return this.interceptor.intercept(req, this.next);
    }
}
export class MockInterceptor {
    constructor(injector) {
        this.injector = injector;
    }
    intercept(req, next) {
        const src = this.injector.get(MockService);
        const config = src.config;
        const rule = src.getRule(req.method, req.url.split('?')[0]);
        if (!rule && !config.force) {
            return next.handle(req);
        }
        let res;
        switch (typeof rule.callback) {
            case 'function':
                const mockRequest = {
                    original: req,
                    body: req.body,
                    queryString: {},
                    headers: {},
                    params: rule.params
                };
                const urlParams = req.url.split('?');
                if (urlParams.length > 1) {
                    urlParams[1].split('&').forEach(item => {
                        const itemArr = item.split('=');
                        const key = itemArr[0];
                        const value = itemArr[1];
                        // is array
                        if (Object.keys(mockRequest.queryString).includes(key)) {
                            if (!Array.isArray(mockRequest.queryString[key])) {
                                mockRequest.queryString[key] = [mockRequest.queryString[key]];
                            }
                            mockRequest.queryString[key].push(value);
                        }
                        else {
                            mockRequest.queryString[key] = value;
                        }
                    });
                }
                req.params.keys().forEach(key => (mockRequest.queryString[key] = req.params.get(key)));
                req.headers.keys().forEach(key => (mockRequest.headers[key] = req.headers.get(key)));
                try {
                    res = rule.callback.call(this, mockRequest);
                }
                catch (e) {
                    res = new HttpErrorResponse({
                        url: req.url,
                        headers: req.headers,
                        status: e instanceof MockStatusError ? e.status : 400,
                        statusText: e.statusText || 'Unknown Error',
                        error: e.error
                    });
                }
                break;
            default:
                res = rule.callback;
                break;
        }
        if (!(res instanceof HttpResponseBase)) {
            res = new HttpResponse({
                status: 200,
                url: req.url,
                body: res
            });
        }
        if (res.body) {
            res.body = deepCopy(res.body);
        }
        if (config.log) {
            console.log(`%c👽${req.method}->${req.urlWithParams}->request`, 'background:#000;color:#bada55', req);
            console.log(`%c👽${req.method}->${req.urlWithParams}->response`, 'background:#000;color:#bada55', res);
        }
        const res$ = res instanceof HttpErrorResponse ? throwError(res) : of(res);
        if (config.executeOtherInterceptors) {
            const interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
            const lastInterceptors = interceptors.slice(interceptors.indexOf(this) + 1);
            if (lastInterceptors.length > 0) {
                const chain = lastInterceptors.reduceRight((_next, _interceptor) => new HttpMockInterceptorHandler(_next, _interceptor), {
                    handle: () => res$
                });
                return chain.handle(req).pipe(delay(config.delay));
            }
        }
        return res$.pipe(delay(config.delay));
    }
}
MockInterceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: MockInterceptor, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.Injectable });
MockInterceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: MockInterceptor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: MockInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL21vY2svc3JjL21vY2suaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLGlCQUFpQixFQUtqQixZQUFZLEVBQ1osZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNsQixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFjLEVBQUUsRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXZDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUk3QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUVqRCxNQUFNLDBCQUEwQjtJQUM5QixZQUFvQixJQUFpQixFQUFVLFdBQTRCO1FBQXZELFNBQUksR0FBSixJQUFJLENBQWE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBaUI7SUFBRyxDQUFDO0lBRS9FLE1BQU0sQ0FBQyxHQUEyQjtRQUNoQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEQsQ0FBQztDQUNGO0FBR0QsTUFBTSxPQUFPLGVBQWU7SUFDMUIsWUFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFHLENBQUM7SUFFMUMsU0FBUyxDQUFDLEdBQTJCLEVBQUUsSUFBaUI7UUFDdEQsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDM0MsTUFB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QUU7WUFDbkMsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDOUQsTUFBTSxnQkFBZ0IsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDNUUsSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUMvQixNQUFNLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxXQUFXLENBQ3hDLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxFQUFFLENBQUMsSUFBSSwwQkFBMEIsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLEVBQzVFO29CQUNFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJO2lCQUNKLENBQ2pCLENBQUM7Z0JBQ0YsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQU0sQ0FBQyxDQUFDLENBQUM7YUFDckQ7U0FDRjtRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQU0sQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7NEdBNUZVLGVBQWU7Z0hBQWYsZUFBZTsyRkFBZixlQUFlO2tCQUQzQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSHR0cEJhY2tlbmQsXG4gIEh0dHBFcnJvclJlc3BvbnNlLFxuICBIdHRwRXZlbnQsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBSZXF1ZXN0LFxuICBIdHRwUmVzcG9uc2UsXG4gIEh0dHBSZXNwb25zZUJhc2UsXG4gIEhUVFBfSU5URVJDRVBUT1JTXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVsYXkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IGRlZXBDb3B5IH0gZnJvbSAnQGRlbG9uL3V0aWwvb3RoZXInO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBNb2NrUmVxdWVzdCB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IE1vY2tTZXJ2aWNlIH0gZnJvbSAnLi9tb2NrLnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9ja1N0YXR1c0Vycm9yIH0gZnJvbSAnLi9zdGF0dXMuZXJyb3InO1xuXG5jbGFzcyBIdHRwTW9ja0ludGVyY2VwdG9ySGFuZGxlciBpbXBsZW1lbnRzIEh0dHBIYW5kbGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZXh0OiBIdHRwSGFuZGxlciwgcHJpdmF0ZSBpbnRlcmNlcHRvcjogSHR0cEludGVyY2VwdG9yKSB7fVxuXG4gIGhhbmRsZShyZXE6IEh0dHBSZXF1ZXN0PE56U2FmZUFueT4pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxOelNhZmVBbnk+PiB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJjZXB0b3IuaW50ZXJjZXB0KHJlcSwgdGhpcy5uZXh0KTtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTW9ja0ludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHt9XG5cbiAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8TnpTYWZlQW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxOelNhZmVBbnk+PiB7XG4gICAgY29uc3Qgc3JjID0gdGhpcy5pbmplY3Rvci5nZXQoTW9ja1NlcnZpY2UpO1xuICAgIGNvbnN0IGNvbmZpZyA9IHNyYy5jb25maWc7XG4gICAgY29uc3QgcnVsZSA9IHNyYy5nZXRSdWxlKHJlcS5tZXRob2QsIHJlcS51cmwuc3BsaXQoJz8nKVswXSk7XG4gICAgaWYgKCFydWxlICYmICFjb25maWcuZm9yY2UpIHtcbiAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xuICAgIH1cblxuICAgIGxldCByZXM6IE56U2FmZUFueTtcbiAgICBzd2l0Y2ggKHR5cGVvZiBydWxlIS5jYWxsYmFjaykge1xuICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgICBjb25zdCBtb2NrUmVxdWVzdDogTW9ja1JlcXVlc3QgPSB7XG4gICAgICAgICAgb3JpZ2luYWw6IHJlcSxcbiAgICAgICAgICBib2R5OiByZXEuYm9keSxcbiAgICAgICAgICBxdWVyeVN0cmluZzoge30sXG4gICAgICAgICAgaGVhZGVyczoge30sXG4gICAgICAgICAgcGFyYW1zOiBydWxlIS5wYXJhbXNcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgdXJsUGFyYW1zID0gcmVxLnVybC5zcGxpdCgnPycpO1xuICAgICAgICBpZiAodXJsUGFyYW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICB1cmxQYXJhbXNbMV0uc3BsaXQoJyYnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbUFyciA9IGl0ZW0uc3BsaXQoJz0nKTtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGl0ZW1BcnJbMF07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGl0ZW1BcnJbMV07XG4gICAgICAgICAgICAvLyBpcyBhcnJheVxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKG1vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nKS5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShtb2NrUmVxdWVzdC5xdWVyeVN0cmluZ1trZXldKSkge1xuICAgICAgICAgICAgICAgIG1vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nW2tleV0gPSBbbW9ja1JlcXVlc3QucXVlcnlTdHJpbmdba2V5XV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbW9ja1JlcXVlc3QucXVlcnlTdHJpbmdba2V5XS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG1vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXEucGFyYW1zLmtleXMoKS5mb3JFYWNoKGtleSA9PiAobW9ja1JlcXVlc3QucXVlcnlTdHJpbmdba2V5XSA9IHJlcS5wYXJhbXMuZ2V0KGtleSkpKTtcbiAgICAgICAgcmVxLmhlYWRlcnMua2V5cygpLmZvckVhY2goa2V5ID0+IChtb2NrUmVxdWVzdC5oZWFkZXJzW2tleV0gPSByZXEuaGVhZGVycy5nZXQoa2V5KSkpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzID0gcnVsZSEuY2FsbGJhY2suY2FsbCh0aGlzLCBtb2NrUmVxdWVzdCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXMgPSBuZXcgSHR0cEVycm9yUmVzcG9uc2Uoe1xuICAgICAgICAgICAgdXJsOiByZXEudXJsLFxuICAgICAgICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXG4gICAgICAgICAgICBzdGF0dXM6IGUgaW5zdGFuY2VvZiBNb2NrU3RhdHVzRXJyb3IgPyBlLnN0YXR1cyA6IDQwMCxcbiAgICAgICAgICAgIHN0YXR1c1RleHQ6IGUuc3RhdHVzVGV4dCB8fCAnVW5rbm93biBFcnJvcicsXG4gICAgICAgICAgICBlcnJvcjogZS5lcnJvclxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmVzID0gcnVsZSEuY2FsbGJhY2s7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmICghKHJlcyBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZUJhc2UpKSB7XG4gICAgICByZXMgPSBuZXcgSHR0cFJlc3BvbnNlKHtcbiAgICAgICAgc3RhdHVzOiAyMDAsXG4gICAgICAgIHVybDogcmVxLnVybCxcbiAgICAgICAgYm9keTogcmVzXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVzLmJvZHkpIHtcbiAgICAgIHJlcy5ib2R5ID0gZGVlcENvcHkocmVzLmJvZHkpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcubG9nKSB7XG4gICAgICBjb25zb2xlLmxvZyhgJWPwn5G9JHtyZXEubWV0aG9kfS0+JHtyZXEudXJsV2l0aFBhcmFtc30tPnJlcXVlc3RgLCAnYmFja2dyb3VuZDojMDAwO2NvbG9yOiNiYWRhNTUnLCByZXEpO1xuICAgICAgY29uc29sZS5sb2coYCVj8J+RvSR7cmVxLm1ldGhvZH0tPiR7cmVxLnVybFdpdGhQYXJhbXN9LT5yZXNwb25zZWAsICdiYWNrZ3JvdW5kOiMwMDA7Y29sb3I6I2JhZGE1NScsIHJlcyk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzJCA9IHJlcyBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlID8gdGhyb3dFcnJvcihyZXMpIDogb2YocmVzKTtcblxuICAgIGlmIChjb25maWcuZXhlY3V0ZU90aGVySW50ZXJjZXB0b3JzKSB7XG4gICAgICBjb25zdCBpbnRlcmNlcHRvcnMgPSB0aGlzLmluamVjdG9yLmdldChIVFRQX0lOVEVSQ0VQVE9SUywgW10pO1xuICAgICAgY29uc3QgbGFzdEludGVyY2VwdG9ycyA9IGludGVyY2VwdG9ycy5zbGljZShpbnRlcmNlcHRvcnMuaW5kZXhPZih0aGlzKSArIDEpO1xuICAgICAgaWYgKGxhc3RJbnRlcmNlcHRvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBjaGFpbiA9IGxhc3RJbnRlcmNlcHRvcnMucmVkdWNlUmlnaHQoXG4gICAgICAgICAgKF9uZXh0LCBfaW50ZXJjZXB0b3IpID0+IG5ldyBIdHRwTW9ja0ludGVyY2VwdG9ySGFuZGxlcihfbmV4dCwgX2ludGVyY2VwdG9yKSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBoYW5kbGU6ICgpID0+IHJlcyRcbiAgICAgICAgICB9IGFzIEh0dHBCYWNrZW5kXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBjaGFpbi5oYW5kbGUocmVxKS5waXBlKGRlbGF5KGNvbmZpZy5kZWxheSEpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzJC5waXBlKGRlbGF5KGNvbmZpZy5kZWxheSEpKTtcbiAgfVxufVxuIl19