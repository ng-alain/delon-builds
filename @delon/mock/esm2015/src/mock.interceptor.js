import { HttpErrorResponse, HttpResponse, HttpResponseBase, HTTP_INTERCEPTORS, } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { deepCopy } from '@delon/util/other';
import { of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
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
                    params: rule.params,
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
                        error: e.error,
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
                body: res,
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
                    handle: () => res$,
                });
                return chain.handle(req).pipe(delay(config.delay));
            }
        }
        return res$.pipe(delay(config.delay));
    }
}
/** @nocollapse */ MockInterceptor.ɵfac = function MockInterceptor_Factory(t) { return new (t || MockInterceptor)(i0.ɵɵinject(i0.Injector)); };
/** @nocollapse */ MockInterceptor.ɵprov = i0.ɵɵdefineInjectable({ token: MockInterceptor, factory: MockInterceptor.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MockInterceptor, [{
        type: Injectable
    }], function () { return [{ type: i0.Injector }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL21vY2svc3JjL21vY2suaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLGlCQUFpQixFQUtqQixZQUFZLEVBQ1osZ0JBQWdCLEVBQ2hCLGlCQUFpQixHQUNsQixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM3QyxPQUFPLEVBQWMsRUFBRSxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdkMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFakQsTUFBTSwwQkFBMEI7SUFDOUIsWUFBb0IsSUFBaUIsRUFBVSxXQUE0QjtRQUF2RCxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO0lBQUcsQ0FBQztJQUUvRSxNQUFNLENBQUMsR0FBcUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BELENBQUM7Q0FDRjtBQUdELE1BQU0sT0FBTyxlQUFlO0lBQzFCLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBRyxDQUFDO0lBRTFDLFNBQVMsQ0FBQyxHQUFxQixFQUFFLElBQWlCO1FBQ2hELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFD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d0JBQXdCLEVBQUU7WUFDbkMsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDOUQsTUFBTSxnQkFBZ0IsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDNUUsSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUMvQixNQUFNLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLEVBQUUsQ0FBQyxJQUFJLDBCQUEwQixDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsRUFBRTtvQkFDdkgsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUk7aUJBQ0osQ0FBQyxDQUFDO2dCQUNsQixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBTSxDQUFDLENBQUMsQ0FBQzthQUNyRDtTQUNGO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBTSxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDOztpR0F6RlUsZUFBZTswRUFBZixlQUFlLFdBQWYsZUFBZTt1RkFBZixlQUFlO2NBRDNCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBIdHRwQmFja2VuZCxcbiAgSHR0cEVycm9yUmVzcG9uc2UsXG4gIEh0dHBFdmVudCxcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cFJlcXVlc3QsXG4gIEh0dHBSZXNwb25zZSxcbiAgSHR0cFJlc3BvbnNlQmFzZSxcbiAgSFRUUF9JTlRFUkNFUFRPUlMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZWVwQ29weSB9IGZyb20gJ0BkZWxvbi91dGlsL290aGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWxheSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE1vY2tSZXF1ZXN0IH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTW9ja1NlcnZpY2UgfSBmcm9tICcuL21vY2suc2VydmljZSc7XG5pbXBvcnQgeyBNb2NrU3RhdHVzRXJyb3IgfSBmcm9tICcuL3N0YXR1cy5lcnJvcic7XG5cbmNsYXNzIEh0dHBNb2NrSW50ZXJjZXB0b3JIYW5kbGVyIGltcGxlbWVudHMgSHR0cEhhbmRsZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5leHQ6IEh0dHBIYW5kbGVyLCBwcml2YXRlIGludGVyY2VwdG9yOiBIdHRwSW50ZXJjZXB0b3IpIHt9XG5cbiAgaGFuZGxlKHJlcTogSHR0cFJlcXVlc3Q8YW55Pik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcmNlcHRvci5pbnRlcmNlcHQocmVxLCB0aGlzLm5leHQpO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNb2NrSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge31cblxuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICBjb25zdCBzcmMgPSB0aGlzLmluamVjdG9yLmdldChNb2NrU2VydmljZSk7XG4gICAgY29uc3QgY29uZmlnID0gc3JjLmNvbmZpZztcbiAgICBjb25zdCBydWxlID0gc3JjLmdldFJ1bGUocmVxLm1ldGhvZCwgcmVxLnVybC5zcGxpdCgnPycpWzBdKTtcbiAgICBpZiAoIXJ1bGUgJiYgIWNvbmZpZy5mb3JjZSkge1xuICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSk7XG4gICAgfVxuXG4gICAgbGV0IHJlczogYW55O1xuICAgIHN3aXRjaCAodHlwZW9mIHJ1bGUhLmNhbGxiYWNrKSB7XG4gICAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICAgIGNvbnN0IG1vY2tSZXF1ZXN0OiBNb2NrUmVxdWVzdCA9IHtcbiAgICAgICAgICBvcmlnaW5hbDogcmVxLFxuICAgICAgICAgIGJvZHk6IHJlcS5ib2R5LFxuICAgICAgICAgIHF1ZXJ5U3RyaW5nOiB7fSxcbiAgICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgICBwYXJhbXM6IHJ1bGUhLnBhcmFtcyxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgdXJsUGFyYW1zID0gcmVxLnVybC5zcGxpdCgnPycpO1xuICAgICAgICBpZiAodXJsUGFyYW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICB1cmxQYXJhbXNbMV0uc3BsaXQoJyYnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbUFyciA9IGl0ZW0uc3BsaXQoJz0nKTtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGl0ZW1BcnJbMF07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGl0ZW1BcnJbMV07XG4gICAgICAgICAgICAvLyBpcyBhcnJheVxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKG1vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nKS5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShtb2NrUmVxdWVzdC5xdWVyeVN0cmluZ1trZXldKSkge1xuICAgICAgICAgICAgICAgIG1vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nW2tleV0gPSBbbW9ja1JlcXVlc3QucXVlcnlTdHJpbmdba2V5XV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbW9ja1JlcXVlc3QucXVlcnlTdHJpbmdba2V5XS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG1vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXEucGFyYW1zLmtleXMoKS5mb3JFYWNoKGtleSA9PiAobW9ja1JlcXVlc3QucXVlcnlTdHJpbmdba2V5XSA9IHJlcS5wYXJhbXMuZ2V0KGtleSkpKTtcbiAgICAgICAgcmVxLmhlYWRlcnMua2V5cygpLmZvckVhY2goa2V5ID0+IChtb2NrUmVxdWVzdC5oZWFkZXJzW2tleV0gPSByZXEuaGVhZGVycy5nZXQoa2V5KSkpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzID0gcnVsZSEuY2FsbGJhY2suY2FsbCh0aGlzLCBtb2NrUmVxdWVzdCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXMgPSBuZXcgSHR0cEVycm9yUmVzcG9uc2Uoe1xuICAgICAgICAgICAgdXJsOiByZXEudXJsLFxuICAgICAgICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXG4gICAgICAgICAgICBzdGF0dXM6IGUgaW5zdGFuY2VvZiBNb2NrU3RhdHVzRXJyb3IgPyBlLnN0YXR1cyA6IDQwMCxcbiAgICAgICAgICAgIHN0YXR1c1RleHQ6IGUuc3RhdHVzVGV4dCB8fCAnVW5rbm93biBFcnJvcicsXG4gICAgICAgICAgICBlcnJvcjogZS5lcnJvcixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJlcyA9IHJ1bGUhLmNhbGxiYWNrO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoIShyZXMgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2VCYXNlKSkge1xuICAgICAgcmVzID0gbmV3IEh0dHBSZXNwb25zZSh7XG4gICAgICAgIHN0YXR1czogMjAwLFxuICAgICAgICB1cmw6IHJlcS51cmwsXG4gICAgICAgIGJvZHk6IHJlcyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXMuYm9keSkge1xuICAgICAgcmVzLmJvZHkgPSBkZWVwQ29weShyZXMuYm9keSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5sb2cpIHtcbiAgICAgIGNvbnNvbGUubG9nKGAlY/Cfkb0ke3JlcS5tZXRob2R9LT4ke3JlcS51cmxXaXRoUGFyYW1zfS0+cmVxdWVzdGAsICdiYWNrZ3JvdW5kOiMwMDA7Y29sb3I6I2JhZGE1NScsIHJlcSk7XG4gICAgICBjb25zb2xlLmxvZyhgJWPwn5G9JHtyZXEubWV0aG9kfS0+JHtyZXEudXJsV2l0aFBhcmFtc30tPnJlc3BvbnNlYCwgJ2JhY2tncm91bmQ6IzAwMDtjb2xvcjojYmFkYTU1JywgcmVzKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXMkID0gcmVzIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UgPyB0aHJvd0Vycm9yKHJlcykgOiBvZihyZXMpO1xuXG4gICAgaWYgKGNvbmZpZy5leGVjdXRlT3RoZXJJbnRlcmNlcHRvcnMpIHtcbiAgICAgIGNvbnN0IGludGVyY2VwdG9ycyA9IHRoaXMuaW5qZWN0b3IuZ2V0KEhUVFBfSU5URVJDRVBUT1JTLCBbXSk7XG4gICAgICBjb25zdCBsYXN0SW50ZXJjZXB0b3JzID0gaW50ZXJjZXB0b3JzLnNsaWNlKGludGVyY2VwdG9ycy5pbmRleE9mKHRoaXMpICsgMSk7XG4gICAgICBpZiAobGFzdEludGVyY2VwdG9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGNoYWluID0gbGFzdEludGVyY2VwdG9ycy5yZWR1Y2VSaWdodCgoX25leHQsIF9pbnRlcmNlcHRvcikgPT4gbmV3IEh0dHBNb2NrSW50ZXJjZXB0b3JIYW5kbGVyKF9uZXh0LCBfaW50ZXJjZXB0b3IpLCB7XG4gICAgICAgICAgaGFuZGxlOiAoKSA9PiByZXMkLFxuICAgICAgICB9IGFzIEh0dHBCYWNrZW5kKTtcbiAgICAgICAgcmV0dXJuIGNoYWluLmhhbmRsZShyZXEpLnBpcGUoZGVsYXkoY29uZmlnLmRlbGF5ISkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXMkLnBpcGUoZGVsYXkoY29uZmlnLmRlbGF5ISkpO1xuICB9XG59XG4iXX0=