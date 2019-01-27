/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// tslint:disable:no-any
import { HttpErrorResponse, HttpResponse, HttpResponseBase, HTTP_INTERCEPTORS, } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { DelonMockConfig } from './mock.config';
import { MockService } from './mock.service';
import { MockStatusError } from './status.error';
var HttpMockInterceptorHandler = /** @class */ (function () {
    function HttpMockInterceptorHandler(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    /**
     * @param {?} req
     * @return {?}
     */
    HttpMockInterceptorHandler.prototype.handle = /**
     * @param {?} req
     * @return {?}
     */
    function (req) {
        return this.interceptor.intercept(req, this.next);
    };
    return HttpMockInterceptorHandler;
}());
if (false) {
    /** @type {?} */
    HttpMockInterceptorHandler.prototype.next;
    /** @type {?} */
    HttpMockInterceptorHandler.prototype.interceptor;
}
var MockInterceptor = /** @class */ (function () {
    function MockInterceptor(injector) {
        this.injector = injector;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    MockInterceptor.prototype.intercept = /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    function (req, next) {
        /** @type {?} */
        var src = this.injector.get(MockService);
        /** @type {?} */
        var config = tslib_1.__assign({ delay: 300, force: false, log: true, executeOtherInterceptors: true }, this.injector.get(DelonMockConfig, null));
        /** @type {?} */
        var rule = src.getRule(req.method, req.url.split('?')[0]);
        if (!rule && !config.force) {
            return next.handle(req);
        }
        /** @type {?} */
        var res;
        switch (typeof rule.callback) {
            case 'function':
                /** @type {?} */
                var mockRequest_1 = {
                    original: req,
                    body: req.body,
                    queryString: {},
                    headers: {},
                    params: rule.params,
                };
                /** @type {?} */
                var urlParams = req.url.split('?');
                if (urlParams.length > 1) {
                    urlParams[1].split('&').forEach(function (item) {
                        /** @type {?} */
                        var itemArr = item.split('=');
                        /** @type {?} */
                        var key = itemArr[0];
                        /** @type {?} */
                        var value = itemArr[1];
                        // is array
                        if (Object.keys(mockRequest_1.queryString).includes(key)) {
                            if (!Array.isArray(mockRequest_1.queryString[key])) {
                                mockRequest_1.queryString[key] = [mockRequest_1.queryString[key]];
                            }
                            mockRequest_1.queryString[key].push(value);
                        }
                        else {
                            mockRequest_1.queryString[key] = value;
                        }
                    });
                }
                req.params.keys().forEach(function (key) { return (mockRequest_1.queryString[key] = req.params.get(key)); });
                req.headers.keys().forEach(function (key) { return (mockRequest_1.headers[key] = req.headers.get(key)); });
                try {
                    res = rule.callback.call(this, mockRequest_1);
                }
                catch (e) {
                    res = new HttpErrorResponse({
                        url: req.url,
                        headers: req.headers,
                        status: 400,
                        statusText: e.statusText || 'Unknown Error',
                        error: e.error,
                    });
                    if (e instanceof MockStatusError) {
                        res.status = e.status;
                    }
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
        if (config.log) {
            console.log("%c\uD83D\uDC7D" + req.method + "->" + req.url + "->request", 'background:#000;color:#bada55', req);
            console.log("%c\uD83D\uDC7D" + req.method + "->" + req.url + "->response", 'background:#000;color:#bada55', res);
        }
        /** @type {?} */
        var res$ = res instanceof HttpErrorResponse ? throwError(res) : of(res);
        if (config.executeOtherInterceptors) {
            /** @type {?} */
            var interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
            /** @type {?} */
            var lastInterceptors = interceptors.slice(interceptors.indexOf(this) + 1);
            if (lastInterceptors.length > 0) {
                /** @type {?} */
                var chain = lastInterceptors.reduceRight(function (_next, _interceptor) { return new HttpMockInterceptorHandler(_next, _interceptor); }, (/** @type {?} */ ({
                    handle: function () { return res$; },
                })));
                return chain.handle(req).pipe(delay(config.delay));
            }
        }
        return res$.pipe(delay(config.delay));
    };
    MockInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    MockInterceptor.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    return MockInterceptor;
}());
export { MockInterceptor };
if (false) {
    /** @type {?} */
    MockInterceptor.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9tb2NrLyIsInNvdXJjZXMiOlsic3JjL21vY2suaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUVMLGlCQUFpQixFQUtqQixZQUFZLEVBQ1osZ0JBQWdCLEVBQ2hCLGlCQUFpQixHQUNsQixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd2QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakQ7SUFDRSxvQ0FBb0IsSUFBaUIsRUFBVSxXQUE0QjtRQUF2RCxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO0lBQUcsQ0FBQzs7Ozs7SUFFL0UsMkNBQU07Ozs7SUFBTixVQUFPLEdBQXFCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ0gsaUNBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQzs7O0lBTGEsMENBQXlCOztJQUFFLGlEQUFvQzs7QUFPN0U7SUFFRSx5QkFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFHLENBQUM7Ozs7OztJQUUxQyxtQ0FBUzs7Ozs7SUFBVCxVQUFVLEdBQXFCLEVBQUUsSUFBaUI7O1lBQzFDLEdBQUcsR0FBRyxJ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QUFHLENBQUM7UUFFekUsSUFBSSxNQUFNLENBQUMsd0JBQXdCLEVBQUU7O2dCQUM3QixZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDOztnQkFDdkQsZ0JBQWdCLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMzRSxJQUFJLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7O29CQUN6QixLQUFLLEdBQUcsZ0JBQWdCLENBQUMsV0FBVyxDQUN4QyxVQUFDLEtBQUssRUFBRSxZQUFZLElBQUssT0FBQSxJQUFJLDBCQUEwQixDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsRUFBbkQsQ0FBbUQsRUFDNUUsbUJBQUE7b0JBQ0UsTUFBTSxFQUFFLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSTtpQkFDbkIsRUFBZSxDQUNqQjtnQkFDRCxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNwRDtTQUNGO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDOztnQkFsR0YsVUFBVTs7OztnQkFqQlUsUUFBUTs7SUFvSDdCLHNCQUFDO0NBQUEsQUFuR0QsSUFtR0M7U0FsR1ksZUFBZTs7O0lBQ2QsbUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XG5pbXBvcnQge1xuICBIdHRwQmFja2VuZCxcbiAgSHR0cEVycm9yUmVzcG9uc2UsXG4gIEh0dHBFdmVudCxcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cFJlcXVlc3QsXG4gIEh0dHBSZXNwb25zZSxcbiAgSHR0cFJlc3BvbnNlQmFzZSxcbiAgSFRUUF9JTlRFUkNFUFRPUlMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBvZiwgdGhyb3dFcnJvciwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVsYXkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE1vY2tSZXF1ZXN0IH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGVsb25Nb2NrQ29uZmlnIH0gZnJvbSAnLi9tb2NrLmNvbmZpZyc7XG5pbXBvcnQgeyBNb2NrU2VydmljZSB9IGZyb20gJy4vbW9jay5zZXJ2aWNlJztcbmltcG9ydCB7IE1vY2tTdGF0dXNFcnJvciB9IGZyb20gJy4vc3RhdHVzLmVycm9yJztcblxuY2xhc3MgSHR0cE1vY2tJbnRlcmNlcHRvckhhbmRsZXIgaW1wbGVtZW50cyBIdHRwSGFuZGxlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmV4dDogSHR0cEhhbmRsZXIsIHByaXZhdGUgaW50ZXJjZXB0b3I6IEh0dHBJbnRlcmNlcHRvcikge31cblxuICBoYW5kbGUocmVxOiBIdHRwUmVxdWVzdDxhbnk+KTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIHJldHVybiB0aGlzLmludGVyY2VwdG9yLmludGVyY2VwdChyZXEsIHRoaXMubmV4dCk7XG4gIH1cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1vY2tJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7fVxuXG4gIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIGNvbnN0IHNyYyA9IHRoaXMuaW5qZWN0b3IuZ2V0KE1vY2tTZXJ2aWNlKTtcbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICBkZWxheTogMzAwLFxuICAgICAgZm9yY2U6IGZhbHNlLFxuICAgICAgbG9nOiB0cnVlLFxuICAgICAgZXhlY3V0ZU90aGVySW50ZXJjZXB0b3JzOiB0cnVlLFxuICAgICAgLi4udGhpcy5pbmplY3Rvci5nZXQoRGVsb25Nb2NrQ29uZmlnLCBudWxsKSxcbiAgICB9O1xuICAgIGNvbnN0IHJ1bGUgPSBzcmMuZ2V0UnVsZShyZXEubWV0aG9kLCByZXEudXJsLnNwbGl0KCc/JylbMF0pO1xuICAgIGlmICghcnVsZSAmJiAhY29uZmlnLmZvcmNlKSB7XG4gICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbiAgICB9XG5cbiAgICBsZXQgcmVzOiBhbnk7XG4gICAgc3dpdGNoICh0eXBlb2YgcnVsZS5jYWxsYmFjaykge1xuICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgICBjb25zdCBtb2NrUmVxdWVzdDogTW9ja1JlcXVlc3QgPSB7XG4gICAgICAgICAgb3JpZ2luYWw6IHJlcSxcbiAgICAgICAgICBib2R5OiByZXEuYm9keSxcbiAgICAgICAgICBxdWVyeVN0cmluZzoge30sXG4gICAgICAgICAgaGVhZGVyczoge30sXG4gICAgICAgICAgcGFyYW1zOiBydWxlLnBhcmFtcyxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgdXJsUGFyYW1zID0gcmVxLnVybC5zcGxpdCgnPycpO1xuICAgICAgICBpZiAodXJsUGFyYW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICB1cmxQYXJhbXNbMV0uc3BsaXQoJyYnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbUFyciA9IGl0ZW0uc3BsaXQoJz0nKTtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGl0ZW1BcnJbMF07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGl0ZW1BcnJbMV07XG4gICAgICAgICAgICAvLyBpcyBhcnJheVxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKG1vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nKS5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShtb2NrUmVxdWVzdC5xdWVyeVN0cmluZ1trZXldKSkge1xuICAgICAgICAgICAgICAgIG1vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nW2tleV0gPSBbbW9ja1JlcXVlc3QucXVlcnlTdHJpbmdba2V5XV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbW9ja1JlcXVlc3QucXVlcnlTdHJpbmdba2V5XS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG1vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXEucGFyYW1zLmtleXMoKS5mb3JFYWNoKGtleSA9PiAobW9ja1JlcXVlc3QucXVlcnlTdHJpbmdba2V5XSA9IHJlcS5wYXJhbXMuZ2V0KGtleSkpKTtcbiAgICAgICAgcmVxLmhlYWRlcnMua2V5cygpLmZvckVhY2goa2V5ID0+IChtb2NrUmVxdWVzdC5oZWFkZXJzW2tleV0gPSByZXEuaGVhZGVycy5nZXQoa2V5KSkpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzID0gcnVsZS5jYWxsYmFjay5jYWxsKHRoaXMsIG1vY2tSZXF1ZXN0KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJlcyA9IG5ldyBIdHRwRXJyb3JSZXNwb25zZSh7XG4gICAgICAgICAgICB1cmw6IHJlcS51cmwsXG4gICAgICAgICAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcbiAgICAgICAgICAgIHN0YXR1czogNDAwLFxuICAgICAgICAgICAgc3RhdHVzVGV4dDogZS5zdGF0dXNUZXh0IHx8ICdVbmtub3duIEVycm9yJyxcbiAgICAgICAgICAgIGVycm9yOiBlLmVycm9yLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgTW9ja1N0YXR1c0Vycm9yKSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzID0gZS5zdGF0dXM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmVzID0gcnVsZS5jYWxsYmFjaztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKCEocmVzIGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlQmFzZSkpIHtcbiAgICAgIHJlcyA9IG5ldyBIdHRwUmVzcG9uc2Uoe1xuICAgICAgICBzdGF0dXM6IDIwMCxcbiAgICAgICAgdXJsOiByZXEudXJsLFxuICAgICAgICBib2R5OiByZXMsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmxvZykge1xuICAgICAgY29uc29sZS5sb2coYCVj8J+RvSR7cmVxLm1ldGhvZH0tPiR7cmVxLnVybH0tPnJlcXVlc3RgLCAnYmFja2dyb3VuZDojMDAwO2NvbG9yOiNiYWRhNTUnLCByZXEpO1xuICAgICAgY29uc29sZS5sb2coYCVj8J+RvSR7cmVxLm1ldGhvZH0tPiR7cmVxLnVybH0tPnJlc3BvbnNlYCwgJ2JhY2tncm91bmQ6IzAwMDtjb2xvcjojYmFkYTU1JywgcmVzKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXMkID0gcmVzIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UgPyB0aHJvd0Vycm9yKHJlcykgOiBvZihyZXMpO1xuXG4gICAgaWYgKGNvbmZpZy5leGVjdXRlT3RoZXJJbnRlcmNlcHRvcnMpIHtcbiAgICAgIGNvbnN0IGludGVyY2VwdG9ycyA9IHRoaXMuaW5qZWN0b3IuZ2V0KEhUVFBfSU5URVJDRVBUT1JTLCBbXSk7XG4gICAgICBjb25zdCBsYXN0SW50ZXJjZXB0b3JzID0gaW50ZXJjZXB0b3JzLnNsaWNlKGludGVyY2VwdG9ycy5pbmRleE9mKHRoaXMpICsgMSk7XG4gICAgICBpZiAobGFzdEludGVyY2VwdG9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGNoYWluID0gbGFzdEludGVyY2VwdG9ycy5yZWR1Y2VSaWdodChcbiAgICAgICAgICAoX25leHQsIF9pbnRlcmNlcHRvcikgPT4gbmV3IEh0dHBNb2NrSW50ZXJjZXB0b3JIYW5kbGVyKF9uZXh0LCBfaW50ZXJjZXB0b3IpLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGhhbmRsZTogKCkgPT4gcmVzJCxcbiAgICAgICAgICB9IGFzIEh0dHBCYWNrZW5kLFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gY2hhaW4uaGFuZGxlKHJlcSkucGlwZShkZWxheShjb25maWcuZGVsYXkpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzJC5waXBlKGRlbGF5KGNvbmZpZy5kZWxheSkpO1xuICB9XG59XG4iXX0=