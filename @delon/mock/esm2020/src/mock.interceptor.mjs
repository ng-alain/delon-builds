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
        const res$ = res instanceof HttpErrorResponse ? throwError(() => res) : of(res);
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
MockInterceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: MockInterceptor, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.Injectable });
MockInterceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: MockInterceptor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: MockInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL21vY2svc3JjL21vY2suaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLGlCQUFpQixFQUtqQixZQUFZLEVBQ1osZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNsQixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFjLEVBQUUsRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXZDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUk3QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUVqRCxNQUFNLDBCQUEwQjtJQUM5QixZQUFvQixJQUFpQixFQUFVLFdBQTRCO1FBQXZELFNBQUksR0FBSixJQUFJLENBQWE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBaUI7SUFBRyxDQUFDO0lBRS9FLE1BQU0sQ0FBQyxHQUEyQjtRQUNoQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEQsQ0FBQztDQUNGO0FBR0QsTUFBTSxPQUFPLGVBQWU7SUFDMUIsWUFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFHLENBQUM7SUFFMUMsU0FBUyxDQUFDLEdBQTJCLEVBQUUsSUFBaUI7UUFDdEQsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDM0MsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUMxQixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUMxQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDekI7UUFFRCxJQUFJLEdBQWMsQ0FBQztRQUNuQixRQUFRLE9BQU8sSUFBSyxDQUFDLFFBQVEsRUFBRTtZQUM3QixLQUFLLFVBQVU7Z0JBQ2IsTUFBTSxXQUFXLEdBQWdCO29CQUMvQixRQUFRLEVBQUUsR0FBRztvQkFDYixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUk7b0JBQ2QsV0FBVyxFQUFFLEVBQUU7b0JBQ2YsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsTUFBTSxFQUFFLElBQUssQ0FBQyxNQUFNO2lCQUNyQixDQUFDO2dCQUNGLE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNyQyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUN4QixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTt3QkFDckMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDaEMsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN2QixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3pCLFdBQVc7d0JBQ1gsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7NEJBQ3RELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQ0FDaEQsV0FBVyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs2QkFDL0Q7NEJBQ0QsV0FBVyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7eUJBQzFDOzZCQUFNOzRCQUNMLFdBQVcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO3lCQUN0QztvQkFDSCxDQUFDLENBQUMsQ0FBQztpQkFDSjtnQkFDRCxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZGLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFckYsSUFBSTtvQkFDRixHQUFHLEdBQUcsSUFBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO2lCQUM5QztnQkFBQyxPQUFPLENBQVksRUFBRTtvQkFDckIsR0FBRyxHQUFHLElBQUksaUJBQWlCLENBQUM7d0JBQzFCLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRzt3QkFDWixPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU87d0JBQ3BCLE1BQU0sRUFBRSxDQUFDLFlBQVksZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHO3dCQUNyRCxVQUFVLEVBQUUsQ0FBQyxDQUFDLFVBQVUsSUFBSSxlQUFlO3dCQUMzQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUs7cUJBQ2YsQ0FBQyxDQUFDO2lCQUNKO2dCQUNELE1BQU07WUFDUjtnQkFDRSxHQUFHLEdBQUcsSUFBSyxDQUFDLFFBQVEsQ0FBQztnQkFDckIsTUFBTTtTQUNUO1FBRUQsSUFBSSxDQUFDLENBQUMsR0FBRyxZQUFZLGdCQUFnQixDQUFDLEVBQUU7WUFDdEMsR0FBRyxHQUFHLElBQUksWUFBWSxDQUFDO2dCQUNyQixNQUFNLEVBQUUsR0FBRztnQkFDWCxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUc7Z0JBQ1osSUFBSSxFQUFFLEdBQUc7YUFDVixDQUFDLENBQUM7U0FDSjtRQUVELElBQUksR0FBRyxDQUFDLElBQUksRUFBRTtZQUNaLEdBQUcsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMvQjtRQUVELElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxhQUFhLFdBQVcsRUFBRSwrQkFBK0IsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN0RyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsYUFBYSxZQUFZLEVBQUUsK0JBQStCLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDeEc7UUFFRCxNQUFNLElBQUksR0FBRyxHQUFHLFlBQVksaUJBQWlCLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWhGLElBQUksTUFBTSxDQUFDLHdCQUF3QixFQUFFO1lBQ25DLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzlELE1BQU0sZ0JBQWdCLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzVFLElBQUksZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDL0IsTUFBTSxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsV0FBVyxDQUN4QyxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksMEJBQTBCLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxFQUM1RTtvQkFDRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSTtpQkFDSixDQUNqQixDQUFDO2dCQUNGLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFNLENBQUMsQ0FBQyxDQUFDO2FBQ3JEO1NBQ0Y7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7OzRHQTVGVSxlQUFlO2dIQUFmLGVBQWU7MkZBQWYsZUFBZTtrQkFEM0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEh0dHBCYWNrZW5kLFxuICBIdHRwRXJyb3JSZXNwb25zZSxcbiAgSHR0cEV2ZW50LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwUmVxdWVzdCxcbiAgSHR0cFJlc3BvbnNlLFxuICBIdHRwUmVzcG9uc2VCYXNlLFxuICBIVFRQX0lOVEVSQ0VQVE9SU1xufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlbGF5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBkZWVwQ29weSB9IGZyb20gJ0BkZWxvbi91dGlsL290aGVyJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgTW9ja1JlcXVlc3QgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBNb2NrU2VydmljZSB9IGZyb20gJy4vbW9jay5zZXJ2aWNlJztcbmltcG9ydCB7IE1vY2tTdGF0dXNFcnJvciB9IGZyb20gJy4vc3RhdHVzLmVycm9yJztcblxuY2xhc3MgSHR0cE1vY2tJbnRlcmNlcHRvckhhbmRsZXIgaW1wbGVtZW50cyBIdHRwSGFuZGxlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmV4dDogSHR0cEhhbmRsZXIsIHByaXZhdGUgaW50ZXJjZXB0b3I6IEh0dHBJbnRlcmNlcHRvcikge31cblxuICBoYW5kbGUocmVxOiBIdHRwUmVxdWVzdDxOelNhZmVBbnk+KTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8TnpTYWZlQW55Pj4ge1xuICAgIHJldHVybiB0aGlzLmludGVyY2VwdG9yLmludGVyY2VwdChyZXEsIHRoaXMubmV4dCk7XG4gIH1cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1vY2tJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7fVxuXG4gIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PE56U2FmZUFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8TnpTYWZlQW55Pj4ge1xuICAgIGNvbnN0IHNyYyA9IHRoaXMuaW5qZWN0b3IuZ2V0KE1vY2tTZXJ2aWNlKTtcbiAgICBjb25zdCBjb25maWcgPSBzcmMuY29uZmlnO1xuICAgIGNvbnN0IHJ1bGUgPSBzcmMuZ2V0UnVsZShyZXEubWV0aG9kLCByZXEudXJsLnNwbGl0KCc/JylbMF0pO1xuICAgIGlmICghcnVsZSAmJiAhY29uZmlnLmZvcmNlKSB7XG4gICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbiAgICB9XG5cbiAgICBsZXQgcmVzOiBOelNhZmVBbnk7XG4gICAgc3dpdGNoICh0eXBlb2YgcnVsZSEuY2FsbGJhY2spIHtcbiAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgICAgY29uc3QgbW9ja1JlcXVlc3Q6IE1vY2tSZXF1ZXN0ID0ge1xuICAgICAgICAgIG9yaWdpbmFsOiByZXEsXG4gICAgICAgICAgYm9keTogcmVxLmJvZHksXG4gICAgICAgICAgcXVlcnlTdHJpbmc6IHt9LFxuICAgICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICAgIHBhcmFtczogcnVsZSEucGFyYW1zXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHVybFBhcmFtcyA9IHJlcS51cmwuc3BsaXQoJz8nKTtcbiAgICAgICAgaWYgKHVybFBhcmFtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgdXJsUGFyYW1zWzFdLnNwbGl0KCcmJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1BcnIgPSBpdGVtLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBpdGVtQXJyWzBdO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBpdGVtQXJyWzFdO1xuICAgICAgICAgICAgLy8gaXMgYXJyYXlcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhtb2NrUmVxdWVzdC5xdWVyeVN0cmluZykuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobW9ja1JlcXVlc3QucXVlcnlTdHJpbmdba2V5XSkpIHtcbiAgICAgICAgICAgICAgICBtb2NrUmVxdWVzdC5xdWVyeVN0cmluZ1trZXldID0gW21vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nW2tleV1dO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG1vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nW2tleV0ucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBtb2NrUmVxdWVzdC5xdWVyeVN0cmluZ1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVxLnBhcmFtcy5rZXlzKCkuZm9yRWFjaChrZXkgPT4gKG1vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nW2tleV0gPSByZXEucGFyYW1zLmdldChrZXkpKSk7XG4gICAgICAgIHJlcS5oZWFkZXJzLmtleXMoKS5mb3JFYWNoKGtleSA9PiAobW9ja1JlcXVlc3QuaGVhZGVyc1trZXldID0gcmVxLmhlYWRlcnMuZ2V0KGtleSkpKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlcyA9IHJ1bGUhLmNhbGxiYWNrLmNhbGwodGhpcywgbW9ja1JlcXVlc3QpO1xuICAgICAgICB9IGNhdGNoIChlOiBOelNhZmVBbnkpIHtcbiAgICAgICAgICByZXMgPSBuZXcgSHR0cEVycm9yUmVzcG9uc2Uoe1xuICAgICAgICAgICAgdXJsOiByZXEudXJsLFxuICAgICAgICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXG4gICAgICAgICAgICBzdGF0dXM6IGUgaW5zdGFuY2VvZiBNb2NrU3RhdHVzRXJyb3IgPyBlLnN0YXR1cyA6IDQwMCxcbiAgICAgICAgICAgIHN0YXR1c1RleHQ6IGUuc3RhdHVzVGV4dCB8fCAnVW5rbm93biBFcnJvcicsXG4gICAgICAgICAgICBlcnJvcjogZS5lcnJvclxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmVzID0gcnVsZSEuY2FsbGJhY2s7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmICghKHJlcyBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZUJhc2UpKSB7XG4gICAgICByZXMgPSBuZXcgSHR0cFJlc3BvbnNlKHtcbiAgICAgICAgc3RhdHVzOiAyMDAsXG4gICAgICAgIHVybDogcmVxLnVybCxcbiAgICAgICAgYm9keTogcmVzXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVzLmJvZHkpIHtcbiAgICAgIHJlcy5ib2R5ID0gZGVlcENvcHkocmVzLmJvZHkpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcubG9nKSB7XG4gICAgICBjb25zb2xlLmxvZyhgJWPwn5G9JHtyZXEubWV0aG9kfS0+JHtyZXEudXJsV2l0aFBhcmFtc30tPnJlcXVlc3RgLCAnYmFja2dyb3VuZDojMDAwO2NvbG9yOiNiYWRhNTUnLCByZXEpO1xuICAgICAgY29uc29sZS5sb2coYCVj8J+RvSR7cmVxLm1ldGhvZH0tPiR7cmVxLnVybFdpdGhQYXJhbXN9LT5yZXNwb25zZWAsICdiYWNrZ3JvdW5kOiMwMDA7Y29sb3I6I2JhZGE1NScsIHJlcyk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzJCA9IHJlcyBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlID8gdGhyb3dFcnJvcigoKSA9PiByZXMpIDogb2YocmVzKTtcblxuICAgIGlmIChjb25maWcuZXhlY3V0ZU90aGVySW50ZXJjZXB0b3JzKSB7XG4gICAgICBjb25zdCBpbnRlcmNlcHRvcnMgPSB0aGlzLmluamVjdG9yLmdldChIVFRQX0lOVEVSQ0VQVE9SUywgW10pO1xuICAgICAgY29uc3QgbGFzdEludGVyY2VwdG9ycyA9IGludGVyY2VwdG9ycy5zbGljZShpbnRlcmNlcHRvcnMuaW5kZXhPZih0aGlzKSArIDEpO1xuICAgICAgaWYgKGxhc3RJbnRlcmNlcHRvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBjaGFpbiA9IGxhc3RJbnRlcmNlcHRvcnMucmVkdWNlUmlnaHQoXG4gICAgICAgICAgKF9uZXh0LCBfaW50ZXJjZXB0b3IpID0+IG5ldyBIdHRwTW9ja0ludGVyY2VwdG9ySGFuZGxlcihfbmV4dCwgX2ludGVyY2VwdG9yKSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBoYW5kbGU6ICgpID0+IHJlcyRcbiAgICAgICAgICB9IGFzIEh0dHBCYWNrZW5kXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBjaGFpbi5oYW5kbGUocmVxKS5waXBlKGRlbGF5KGNvbmZpZy5kZWxheSEpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzJC5waXBlKGRlbGF5KGNvbmZpZy5kZWxheSEpKTtcbiAgfVxufVxuIl19