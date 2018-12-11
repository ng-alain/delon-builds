/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// tslint:disable:no-any
import { HttpErrorResponse, HttpResponse, } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { _HttpClient } from '@delon/theme';
import { DelonMockConfig } from './mock.config';
import { MockService } from './mock.service';
import { MockStatusError } from './status.error';
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
        var config = tslib_1.__assign({ delay: 300, force: false, log: true }, this.injector.get(DelonMockConfig, null));
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
                req.params
                    .keys()
                    .forEach(function (key) { return (mockRequest_1.queryString[key] = req.params.get(key)); });
                req.headers
                    .keys()
                    .forEach(function (key) { return (mockRequest_1.headers[key] = req.headers.get(key)); });
                try {
                    res = rule.callback.call(this, mockRequest_1);
                }
                catch (e) {
                    /** @type {?} */
                    var errRes_1;
                    if (e instanceof MockStatusError) {
                        errRes_1 = new HttpErrorResponse({
                            url: req.url,
                            headers: req.headers,
                            status: e.status,
                            statusText: e.statusText || 'Unknown Error',
                            error: e.error,
                        });
                        if (config.log)
                            console.log("%c\uD83D\uDC80" + req.method + "->" + req.url, 'background:#000;color:#bada55', errRes_1, req);
                    }
                    else {
                        console.log("%c\uD83D\uDC80" + req.method + "->" + req.url, 'background:#000;color:#bada55', "Please use MockStatusError to throw status error", e, req);
                    }
                    return new Observable(function (observer) {
                        observer.error(errRes_1);
                    });
                }
                break;
            default:
                res = rule.callback;
                break;
        }
        /** @type {?} */
        var response = res instanceof HttpResponse ?
            res :
            new HttpResponse({
                status: 200,
                url: req.url,
                body: res,
            });
        if (config.log) {
            console.log("%c\uD83D\uDC7D" + req.method + "->" + req.url + "->request", 'background:#000;color:#bada55', req);
            console.log("%c\uD83D\uDC7D" + req.method + "->" + req.url + "->response", 'background:#000;color:#bada55', response);
        }
        /** @type {?} */
        var hc = this.injector.get(_HttpClient, null);
        if (hc)
            hc.begin();
        return of(response).pipe(delay(config.delay), tap(function () {
            if (hc)
                hc.end();
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9tb2NrLyIsInNvdXJjZXMiOlsic3JjL21vY2suaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUNMLGlCQUFpQixFQUtqQixZQUFZLEdBQ2IsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFHM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpEO0lBRUUseUJBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBSSxDQUFDOzs7Ozs7SUFFM0MsbUNBQVM7Ozs7O0lBQVQsVUFBVSxHQUFxQixFQUFFLElBQWlCOztZQUMxQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDOztZQUNwQyxNQUFNLHNCQUNWLEtBQUssRUFBRSxHQUFHLEVBQ1YsS0FBSyxFQUFFLEtBQUssRUFDWixHQUFHLEVBQUUsSUFBSSxJQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FDNUM7O1lBQ0ssSUFBSSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUss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LFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQztRQUMvQyxJQUFJLEVBQUU7WUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUN0QixLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUNuQixHQUFHLENBQUM7WUFDRixJQUFJLEVBQUU7Z0JBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOztnQkFuR0YsVUFBVTs7OztnQkFYVSxRQUFROztJQStHN0Isc0JBQUM7Q0FBQSxBQXBHRCxJQW9HQztTQW5HWSxlQUFlOzs7SUFDZCxtQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpuby1hbnlcbmltcG9ydCB7XG4gIEh0dHBFcnJvclJlc3BvbnNlLFxuICBIdHRwRXZlbnQsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBSZXF1ZXN0LFxuICBIdHRwUmVzcG9uc2UsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBvZiwgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlbGF5LCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IF9IdHRwQ2xpZW50IH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcblxuaW1wb3J0IHsgTW9ja1JlcXVlc3QgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBEZWxvbk1vY2tDb25maWcgfSBmcm9tICcuL21vY2suY29uZmlnJztcbmltcG9ydCB7IE1vY2tTZXJ2aWNlIH0gZnJvbSAnLi9tb2NrLnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9ja1N0YXR1c0Vycm9yIH0gZnJvbSAnLi9zdGF0dXMuZXJyb3InO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTW9ja0ludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHsgfVxuXG4gIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIGNvbnN0IHNyYyA9IHRoaXMuaW5qZWN0b3IuZ2V0KE1vY2tTZXJ2aWNlKTtcbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICBkZWxheTogMzAwLFxuICAgICAgZm9yY2U6IGZhbHNlLFxuICAgICAgbG9nOiB0cnVlLFxuICAgICAgLi4udGhpcy5pbmplY3Rvci5nZXQoRGVsb25Nb2NrQ29uZmlnLCBudWxsKSxcbiAgICB9O1xuICAgIGNvbnN0IHJ1bGUgPSBzcmMuZ2V0UnVsZShyZXEubWV0aG9kLCByZXEudXJsLnNwbGl0KCc/JylbMF0pO1xuICAgIGlmICghcnVsZSAmJiAhY29uZmlnLmZvcmNlKSB7XG4gICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbiAgICB9XG5cbiAgICBsZXQgcmVzOiBhbnk7XG4gICAgc3dpdGNoICh0eXBlb2YgcnVsZS5jYWxsYmFjaykge1xuICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgICBjb25zdCBtb2NrUmVxdWVzdDogTW9ja1JlcXVlc3QgPSB7XG4gICAgICAgICAgb3JpZ2luYWw6IHJlcSxcbiAgICAgICAgICBib2R5OiByZXEuYm9keSxcbiAgICAgICAgICBxdWVyeVN0cmluZzoge30sXG4gICAgICAgICAgaGVhZGVyczoge30sXG4gICAgICAgICAgcGFyYW1zOiBydWxlLnBhcmFtcyxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgdXJsUGFyYW1zID0gcmVxLnVybC5zcGxpdCgnPycpO1xuICAgICAgICBpZiAodXJsUGFyYW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICB1cmxQYXJhbXNbMV0uc3BsaXQoJyYnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbUFyciA9IGl0ZW0uc3BsaXQoJz0nKTtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGl0ZW1BcnJbMF07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGl0ZW1BcnJbMV07XG4gICAgICAgICAgICAvLyBpcyBhcnJheVxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKG1vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nKS5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShtb2NrUmVxdWVzdC5xdWVyeVN0cmluZ1trZXldKSkge1xuICAgICAgICAgICAgICAgIG1vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nW2tleV0gPSBbbW9ja1JlcXVlc3QucXVlcnlTdHJpbmdba2V5XV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbW9ja1JlcXVlc3QucXVlcnlTdHJpbmdba2V5XS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG1vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXEucGFyYW1zXG4gICAgICAgICAgLmtleXMoKVxuICAgICAgICAgIC5mb3JFYWNoKGtleSA9PiAobW9ja1JlcXVlc3QucXVlcnlTdHJpbmdba2V5XSA9IHJlcS5wYXJhbXMuZ2V0KGtleSkpKTtcbiAgICAgICAgcmVxLmhlYWRlcnNcbiAgICAgICAgICAua2V5cygpXG4gICAgICAgICAgLmZvckVhY2goa2V5ID0+IChtb2NrUmVxdWVzdC5oZWFkZXJzW2tleV0gPSByZXEuaGVhZGVycy5nZXQoa2V5KSkpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzID0gcnVsZS5jYWxsYmFjay5jYWxsKHRoaXMsIG1vY2tSZXF1ZXN0KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGxldCBlcnJSZXM6IEh0dHBFcnJvclJlc3BvbnNlO1xuICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgTW9ja1N0YXR1c0Vycm9yKSB7XG4gICAgICAgICAgICBlcnJSZXMgPSBuZXcgSHR0cEVycm9yUmVzcG9uc2Uoe1xuICAgICAgICAgICAgICB1cmw6IHJlcS51cmwsXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLFxuICAgICAgICAgICAgICBzdGF0dXM6IGUuc3RhdHVzLFxuICAgICAgICAgICAgICBzdGF0dXNUZXh0OiBlLnN0YXR1c1RleHQgfHwgJ1Vua25vd24gRXJyb3InLFxuICAgICAgICAgICAgICBlcnJvcjogZS5lcnJvcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGNvbmZpZy5sb2cpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlY/CfkoAke3JlcS5tZXRob2R9LT4ke3JlcS51cmx9YCwgJ2JhY2tncm91bmQ6IzAwMDtjb2xvcjojYmFkYTU1JywgZXJyUmVzLCByZXEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJWPwn5KAJHtyZXEubWV0aG9kfS0+JHtyZXEudXJsfWAsICdiYWNrZ3JvdW5kOiMwMDA7Y29sb3I6I2JhZGE1NScsIGBQbGVhc2UgdXNlIE1vY2tTdGF0dXNFcnJvciB0byB0aHJvdyBzdGF0dXMgZXJyb3JgLCBlLCByZXEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxIdHRwRXZlbnQ8YW55Pj4pID0+IHtcbiAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVyclJlcyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXMgPSBydWxlLmNhbGxiYWNrO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCByZXNwb25zZSA9XG4gICAgICByZXMgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UgP1xuICAgICAgICByZXMgOlxuICAgICAgICBuZXcgSHR0cFJlc3BvbnNlKHtcbiAgICAgICAgICBzdGF0dXM6IDIwMCxcbiAgICAgICAgICB1cmw6IHJlcS51cmwsXG4gICAgICAgICAgYm9keTogcmVzLFxuICAgICAgICB9KTtcblxuICAgIGlmIChjb25maWcubG9nKSB7XG4gICAgICBjb25zb2xlLmxvZyhgJWPwn5G9JHtyZXEubWV0aG9kfS0+JHtyZXEudXJsfS0+cmVxdWVzdGAsICdiYWNrZ3JvdW5kOiMwMDA7Y29sb3I6I2JhZGE1NScsIHJlcSk7XG4gICAgICBjb25zb2xlLmxvZyhgJWPwn5G9JHtyZXEubWV0aG9kfS0+JHtyZXEudXJsfS0+cmVzcG9uc2VgLCAnYmFja2dyb3VuZDojMDAwO2NvbG9yOiNiYWRhNTUnLCByZXNwb25zZSk7XG4gICAgfVxuICAgIGNvbnN0IGhjID0gdGhpcy5pbmplY3Rvci5nZXQoX0h0dHBDbGllbnQsIG51bGwpO1xuICAgIGlmIChoYykgaGMuYmVnaW4oKTtcbiAgICByZXR1cm4gb2YocmVzcG9uc2UpLnBpcGUoXG4gICAgICBkZWxheShjb25maWcuZGVsYXkpLFxuICAgICAgdGFwKCgpID0+IHtcbiAgICAgICAgaWYgKGhjKSBoYy5lbmQoKTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cbn1cbiJdfQ==