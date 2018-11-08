/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { HttpResponse, HttpErrorResponse, } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { DelonMockConfig } from './mock.config';
import { MockService } from './mock.service';
import { MockStatusError } from './status.error';
export class MockInterceptor {
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
        const src = this.injector.get(MockService);
        /** @type {?} */
        const config = Object.assign({
            delay: 300,
            force: false,
            log: true,
        }, this.injector.get(DelonMockConfig, null));
        /** @type {?} */
        const rule = src.getRule(req.method, req.url.split('?')[0]);
        if (!rule && !config.force) {
            return next.handle(req);
        }
        /** @type {?} */
        let res;
        switch (typeof rule.callback) {
            case 'function':
                /** @type {?} */
                const mockRequest = {
                    original: req,
                    body: req.body,
                    queryString: {},
                    headers: {},
                    params: rule.params,
                };
                /** @type {?} */
                const urlParams = req.url.split('?');
                if (urlParams.length > 1) {
                    urlParams[1].split('&').forEach(item => {
                        /** @type {?} */
                        const itemArr = item.split('=');
                        /** @type {?} */
                        const key = itemArr[0];
                        /** @type {?} */
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
                req.params
                    .keys()
                    .forEach(key => (mockRequest.queryString[key] = req.params.get(key)));
                req.headers
                    .keys()
                    .forEach(key => (mockRequest.headers[key] = req.headers.get(key)));
                try {
                    res = rule.callback.call(this, mockRequest);
                }
                catch (e) {
                    /** @type {?} */
                    let errRes;
                    if (e instanceof MockStatusError) {
                        errRes = new HttpErrorResponse({
                            url: req.url,
                            headers: req.headers,
                            status: e.status,
                            statusText: e.statusText || 'Unknown Error',
                            error: e.error,
                        });
                        if (config.log)
                            console.log(`%c 👽MOCK ${e.status} STATUS `, 'background:#000;color:#bada55', req.url, errRes, req);
                    }
                    else {
                        console.error(`Please use MockStatusError to throw status error`, e, req);
                    }
                    return new Observable((observer) => {
                        observer.error(errRes);
                    });
                }
                break;
            default:
                res = rule.callback;
                break;
        }
        /** @type {?} */
        const response = new HttpResponse({
            status: 200,
            body: res,
            url: req.url,
        });
        if (config.log) {
            console.log(`%c👽${req.method}->${req.url}->request`, 'background:#000;color:#bada55', req);
            console.log(`%c👽${req.method}->${req.url}->response`, 'background:#000;color:#bada55', response);
        }
        return of(response).pipe(delay(config.delay));
    }
}
MockInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
MockInterceptor.ctorParameters = () => [
    { type: Injector }
];
if (false) {
    /** @type {?} */
    MockInterceptor.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9tb2NrLyIsInNvdXJjZXMiOlsic3JjL21vY2suaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFPTCxZQUFZLEVBRVosaUJBQWlCLEdBRWxCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLFVBQVUsRUFBWSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXZDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUlqRCxNQUFNLE9BQU8sZUFBZTs7OztJQUMxQixZQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQUcsQ0FBQzs7Ozs7O0lBRTFDLFNBQVMsQ0FDUCxHQUFxQixFQUNyQixJQUFpQjs7Y0FRWCxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDOztjQUNwQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FDMUI7WUFDRSxLQUFLLEVBQUUsR0FBRztZQUNWLEtBQUssRUFBRSxLQUFLO1lBQ1osR0FBRyxFQUFFLElBQUk7U0FDVixFQUNELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FDekM7O2NBQ0ssSUFBSSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMs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dCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwUmVxdWVzdCxcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBTZW50RXZlbnQsXG4gIEh0dHBIZWFkZXJSZXNwb25zZSxcbiAgSHR0cFByb2dyZXNzRXZlbnQsXG4gIEh0dHBSZXNwb25zZSxcbiAgSHR0cFVzZXJFdmVudCxcbiAgSHR0cEVycm9yUmVzcG9uc2UsXG4gIEh0dHBFdmVudCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWxheSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRGVsb25Nb2NrQ29uZmlnIH0gZnJvbSAnLi9tb2NrLmNvbmZpZyc7XG5pbXBvcnQgeyBNb2NrU2VydmljZSB9IGZyb20gJy4vbW9jay5zZXJ2aWNlJztcbmltcG9ydCB7IE1vY2tTdGF0dXNFcnJvciB9IGZyb20gJy4vc3RhdHVzLmVycm9yJztcbmltcG9ydCB7IE1vY2tSZXF1ZXN0IH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTW9ja0ludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHt9XG5cbiAgaW50ZXJjZXB0KFxuICAgIHJlcTogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlcixcbiAgKTogT2JzZXJ2YWJsZTxcbiAgICB8IEh0dHBTZW50RXZlbnRcbiAgICB8IEh0dHBIZWFkZXJSZXNwb25zZVxuICAgIHwgSHR0cFByb2dyZXNzRXZlbnRcbiAgICB8IEh0dHBSZXNwb25zZTxhbnk+XG4gICAgfCBIdHRwVXNlckV2ZW50PGFueT5cbiAgPiB7XG4gICAgY29uc3Qgc3JjID0gdGhpcy5pbmplY3Rvci5nZXQoTW9ja1NlcnZpY2UpO1xuICAgIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7XG4gICAgICAgIGRlbGF5OiAzMDAsXG4gICAgICAgIGZvcmNlOiBmYWxzZSxcbiAgICAgICAgbG9nOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHRoaXMuaW5qZWN0b3IuZ2V0KERlbG9uTW9ja0NvbmZpZywgbnVsbCksXG4gICAgKTtcbiAgICBjb25zdCBydWxlID0gc3JjLmdldFJ1bGUocmVxLm1ldGhvZCwgcmVxLnVybC5zcGxpdCgnPycpWzBdKTtcbiAgICBpZiAoIXJ1bGUgJiYgIWNvbmZpZy5mb3JjZSkge1xuICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSk7XG4gICAgfVxuXG4gICAgbGV0IHJlczogYW55O1xuICAgIHN3aXRjaCAodHlwZW9mIHJ1bGUuY2FsbGJhY2spIHtcbiAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgICAgY29uc3QgbW9ja1JlcXVlc3Q6IE1vY2tSZXF1ZXN0ID0ge1xuICAgICAgICAgIG9yaWdpbmFsOiByZXEsXG4gICAgICAgICAgYm9keTogcmVxLmJvZHksXG4gICAgICAgICAgcXVlcnlTdHJpbmc6IHt9LFxuICAgICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICAgIHBhcmFtczogcnVsZS5wYXJhbXMsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHVybFBhcmFtcyA9IHJlcS51cmwuc3BsaXQoJz8nKTtcbiAgICAgICAgaWYgKHVybFBhcmFtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgdXJsUGFyYW1zWzFdLnNwbGl0KCcmJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1BcnIgPSBpdGVtLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBpdGVtQXJyWzBdO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBpdGVtQXJyWzFdO1xuICAgICAgICAgICAgLy8gaXMgYXJyYXlcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhtb2NrUmVxdWVzdC5xdWVyeVN0cmluZykuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobW9ja1JlcXVlc3QucXVlcnlTdHJpbmdba2V5XSkpIHtcbiAgICAgICAgICAgICAgICBtb2NrUmVxdWVzdC5xdWVyeVN0cmluZ1trZXldID0gW21vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nW2tleV1dO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG1vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nW2tleV0ucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBtb2NrUmVxdWVzdC5xdWVyeVN0cmluZ1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVxLnBhcmFtc1xuICAgICAgICAgIC5rZXlzKClcbiAgICAgICAgICAuZm9yRWFjaChrZXkgPT4gKG1vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nW2tleV0gPSByZXEucGFyYW1zLmdldChrZXkpKSk7XG4gICAgICAgIHJlcS5oZWFkZXJzXG4gICAgICAgICAgLmtleXMoKVxuICAgICAgICAgIC5mb3JFYWNoKGtleSA9PiAobW9ja1JlcXVlc3QuaGVhZGVyc1trZXldID0gcmVxLmhlYWRlcnMuZ2V0KGtleSkpKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlcyA9IHJ1bGUuY2FsbGJhY2suY2FsbCh0aGlzLCBtb2NrUmVxdWVzdCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBsZXQgZXJyUmVzOiBIdHRwRXJyb3JSZXNwb25zZTtcbiAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIE1vY2tTdGF0dXNFcnJvcikge1xuICAgICAgICAgICAgZXJyUmVzID0gbmV3IEh0dHBFcnJvclJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgdXJsOiByZXEudXJsLFxuICAgICAgICAgICAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcbiAgICAgICAgICAgICAgc3RhdHVzOiBlLnN0YXR1cyxcbiAgICAgICAgICAgICAgc3RhdHVzVGV4dDogZS5zdGF0dXNUZXh0IHx8ICdVbmtub3duIEVycm9yJyxcbiAgICAgICAgICAgICAgZXJyb3I6IGUuZXJyb3IsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChjb25maWcubG9nKVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICBgJWMg8J+RvU1PQ0sgJHtlLnN0YXR1c30gU1RBVFVTIGAsXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQ6IzAwMDtjb2xvcjojYmFkYTU1JyxcbiAgICAgICAgICAgICAgICByZXEudXJsLFxuICAgICAgICAgICAgICAgIGVyclJlcyxcbiAgICAgICAgICAgICAgICByZXEsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgIGBQbGVhc2UgdXNlIE1vY2tTdGF0dXNFcnJvciB0byB0aHJvdyBzdGF0dXMgZXJyb3JgLFxuICAgICAgICAgICAgICBlLFxuICAgICAgICAgICAgICByZXEsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxIdHRwRXZlbnQ8YW55Pj4pID0+IHtcbiAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVyclJlcyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXMgPSBydWxlLmNhbGxiYWNrO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCByZXNwb25zZTogSHR0cFJlc3BvbnNlPGFueT4gPSBuZXcgSHR0cFJlc3BvbnNlKHtcbiAgICAgIHN0YXR1czogMjAwLFxuICAgICAgYm9keTogcmVzLFxuICAgICAgdXJsOiByZXEudXJsLFxuICAgIH0pO1xuXG4gICAgaWYgKGNvbmZpZy5sb2cpIHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBgJWPwn5G9JHtyZXEubWV0aG9kfS0+JHtyZXEudXJsfS0+cmVxdWVzdGAsXG4gICAgICAgICdiYWNrZ3JvdW5kOiMwMDA7Y29sb3I6I2JhZGE1NScsXG4gICAgICAgIHJlcSxcbiAgICAgICk7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgYCVj8J+RvSR7cmVxLm1ldGhvZH0tPiR7cmVxLnVybH0tPnJlc3BvbnNlYCxcbiAgICAgICAgJ2JhY2tncm91bmQ6IzAwMDtjb2xvcjojYmFkYTU1JyxcbiAgICAgICAgcmVzcG9uc2UsXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gb2YocmVzcG9uc2UpLnBpcGUoZGVsYXkoY29uZmlnLmRlbGF5KSk7XG4gIH1cbn1cbiJdfQ==