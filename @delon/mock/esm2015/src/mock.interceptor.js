/**
 * @fileoverview added by tsickle
 * Generated from: src/mock.interceptor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpErrorResponse, HttpResponse, HttpResponseBase, HTTP_INTERCEPTORS, } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { DelonMockConfig } from './mock.config';
import { MockService } from './mock.service';
import { MockStatusError } from './status.error';
class HttpMockInterceptorHandler {
    /**
     * @param {?} next
     * @param {?} interceptor
     */
    constructor(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    /**
     * @param {?} req
     * @return {?}
     */
    handle(req) {
        return this.interceptor.intercept(req, this.next);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    HttpMockInterceptorHandler.prototype.next;
    /**
     * @type {?}
     * @private
     */
    HttpMockInterceptorHandler.prototype.interceptor;
}
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
        const config = Object.assign({ delay: 300, force: false, log: true, executeOtherInterceptors: true }, this.injector.get(DelonMockConfig));
        /** @type {?} */
        const rule = src.getRule(req.method, req.url.split('?')[0]);
        if (!rule && !config.force) {
            return next.handle(req);
        }
        /** @type {?} */
        let res;
        switch (typeof (/** @type {?} */ (rule)).callback) {
            case 'function':
                /** @type {?} */
                const mockRequest = {
                    original: req,
                    body: req.body,
                    queryString: {},
                    headers: {},
                    params: (/** @type {?} */ (rule)).params,
                };
                /** @type {?} */
                const urlParams = req.url.split('?');
                if (urlParams.length > 1) {
                    urlParams[1].split('&').forEach((/**
                     * @param {?} item
                     * @return {?}
                     */
                    item => {
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
                    }));
                }
                req.params.keys().forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                key => (mockRequest.queryString[key] = req.params.get(key))));
                req.headers.keys().forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                key => (mockRequest.headers[key] = req.headers.get(key))));
                try {
                    res = (/** @type {?} */ (rule)).callback.call(this, mockRequest);
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
                res = (/** @type {?} */ (rule)).callback;
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
            console.log(`%c👽${req.method}->${req.url}->request`, 'background:#000;color:#bada55', req);
            console.log(`%c👽${req.method}->${req.url}->response`, 'background:#000;color:#bada55', res);
        }
        /** @type {?} */
        const res$ = res instanceof HttpErrorResponse ? throwError(res) : of(res);
        if (config.executeOtherInterceptors) {
            /** @type {?} */
            const interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
            /** @type {?} */
            const lastInterceptors = interceptors.slice(interceptors.indexOf(this) + 1);
            if (lastInterceptors.length > 0) {
                /** @type {?} */
                const chain = lastInterceptors.reduceRight((/**
                 * @param {?} _next
                 * @param {?} _interceptor
                 * @return {?}
                 */
                (_next, _interceptor) => new HttpMockInterceptorHandler(_next, _interceptor)), (/** @type {?} */ ({
                    handle: (/**
                     * @return {?}
                     */
                    () => res$),
                })));
                return chain.handle(req).pipe(delay(config.delay));
            }
        }
        return res$.pipe(delay(config.delay));
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
    /**
     * @type {?}
     * @private
     */
    MockInterceptor.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9tb2NrLyIsInNvdXJjZXMiOlsic3JjL21vY2suaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsaUJBQWlCLEVBS2pCLFlBQVksRUFDWixnQkFBZ0IsRUFDaEIsaUJBQWlCLEdBQ2xCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3ZDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRCxNQUFNLDBCQUEwQjs7Ozs7SUFDOUIsWUFBb0IsSUFBaUIsRUFBVSxXQUE0QjtRQUF2RCxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO0lBQUcsQ0FBQzs7Ozs7SUFFL0UsTUFBTSxDQUFDLEdBQXFCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRCxDQUFDO0NBQ0Y7Ozs7OztJQUxhLDBDQUF5Qjs7Ozs7SUFBRSxpREFBb0M7O0FBUTdFLE1BQU0sT0FBTyxlQUFlOzs7O0lBQzFCLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBRyxDQUFDOzs7Ozs7SUFFMUMsU0FBUyxDQUFDLEdBQXFCLEVBQUUsSUFBaUI7O2NBQzFDLEdBQUcsR0FBRyxJQUFJLENB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QUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztRQUV6RSxJQUFJLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRTs7a0JBQzdCLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLENBQUM7O2tCQUN2RCxnQkFBZ0IsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzNFLElBQUksZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs7c0JBQ3pCLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxXQUFXOzs7OztnQkFDeEMsQ0FBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLEVBQUUsQ0FBQyxJQUFJLDBCQUEwQixDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsR0FDNUUsbUJBQUE7b0JBQ0UsTUFBTTs7O29CQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQTtpQkFDbkIsRUFBZSxDQUNqQjtnQkFDRCxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNwRDtTQUNGO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7WUFsR0YsVUFBVTs7OztZQWpCVSxRQUFROzs7Ozs7O0lBbUJmLG1DQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEh0dHBCYWNrZW5kLFxuICBIdHRwRXJyb3JSZXNwb25zZSxcbiAgSHR0cEV2ZW50LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwUmVxdWVzdCxcbiAgSHR0cFJlc3BvbnNlLFxuICBIdHRwUmVzcG9uc2VCYXNlLFxuICBIVFRQX0lOVEVSQ0VQVE9SUyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG9mLCB0aHJvd0Vycm9yLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWxheSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTW9ja1JlcXVlc3QgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBEZWxvbk1vY2tDb25maWcgfSBmcm9tICcuL21vY2suY29uZmlnJztcbmltcG9ydCB7IE1vY2tTZXJ2aWNlIH0gZnJvbSAnLi9tb2NrLnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9ja1N0YXR1c0Vycm9yIH0gZnJvbSAnLi9zdGF0dXMuZXJyb3InO1xuXG5jbGFzcyBIdHRwTW9ja0ludGVyY2VwdG9ySGFuZGxlciBpbXBsZW1lbnRzIEh0dHBIYW5kbGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZXh0OiBIdHRwSGFuZGxlciwgcHJpdmF0ZSBpbnRlcmNlcHRvcjogSHR0cEludGVyY2VwdG9yKSB7fVxuXG4gIGhhbmRsZShyZXE6IEh0dHBSZXF1ZXN0PGFueT4pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJjZXB0b3IuaW50ZXJjZXB0KHJlcSwgdGhpcy5uZXh0KTtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTW9ja0ludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHt9XG5cbiAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgY29uc3Qgc3JjID0gdGhpcy5pbmplY3Rvci5nZXQ8TW9ja1NlcnZpY2U+KE1vY2tTZXJ2aWNlKTtcbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICBkZWxheTogMzAwLFxuICAgICAgZm9yY2U6IGZhbHNlLFxuICAgICAgbG9nOiB0cnVlLFxuICAgICAgZXhlY3V0ZU90aGVySW50ZXJjZXB0b3JzOiB0cnVlLFxuICAgICAgLi4udGhpcy5pbmplY3Rvci5nZXQ8RGVsb25Nb2NrQ29uZmlnPihEZWxvbk1vY2tDb25maWcpLFxuICAgIH07XG4gICAgY29uc3QgcnVsZSA9IHNyYy5nZXRSdWxlKHJlcS5tZXRob2QsIHJlcS51cmwuc3BsaXQoJz8nKVswXSk7XG4gICAgaWYgKCFydWxlICYmICFjb25maWcuZm9yY2UpIHtcbiAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xuICAgIH1cblxuICAgIGxldCByZXM6IGFueTtcbiAgICBzd2l0Y2ggKHR5cGVvZiBydWxlIS5jYWxsYmFjaykge1xuICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgICBjb25zdCBtb2NrUmVxdWVzdDogTW9ja1JlcXVlc3QgPSB7XG4gICAgICAgICAgb3JpZ2luYWw6IHJlcSxcbiAgICAgICAgICBib2R5OiByZXEuYm9keSxcbiAgICAgICAgICBxdWVyeVN0cmluZzoge30sXG4gICAgICAgICAgaGVhZGVyczoge30sXG4gICAgICAgICAgcGFyYW1zOiBydWxlIS5wYXJhbXMsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHVybFBhcmFtcyA9IHJlcS51cmwuc3BsaXQoJz8nKTtcbiAgICAgICAgaWYgKHVybFBhcmFtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgdXJsUGFyYW1zWzFdLnNwbGl0KCcmJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1BcnIgPSBpdGVtLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBpdGVtQXJyWzBdO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBpdGVtQXJyWzFdO1xuICAgICAgICAgICAgLy8gaXMgYXJyYXlcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhtb2NrUmVxdWVzdC5xdWVyeVN0cmluZykuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobW9ja1JlcXVlc3QucXVlcnlTdHJpbmdba2V5XSkpIHtcbiAgICAgICAgICAgICAgICBtb2NrUmVxdWVzdC5xdWVyeVN0cmluZ1trZXldID0gW21vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nW2tleV1dO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG1vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nW2tleV0ucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBtb2NrUmVxdWVzdC5xdWVyeVN0cmluZ1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVxLnBhcmFtcy5rZXlzKCkuZm9yRWFjaChrZXkgPT4gKG1vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nW2tleV0gPSByZXEucGFyYW1zLmdldChrZXkpKSk7XG4gICAgICAgIHJlcS5oZWFkZXJzLmtleXMoKS5mb3JFYWNoKGtleSA9PiAobW9ja1JlcXVlc3QuaGVhZGVyc1trZXldID0gcmVxLmhlYWRlcnMuZ2V0KGtleSkpKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlcyA9IHJ1bGUhLmNhbGxiYWNrLmNhbGwodGhpcywgbW9ja1JlcXVlc3QpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmVzID0gbmV3IEh0dHBFcnJvclJlc3BvbnNlKHtcbiAgICAgICAgICAgIHVybDogcmVxLnVybCxcbiAgICAgICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLFxuICAgICAgICAgICAgc3RhdHVzOiA0MDAsXG4gICAgICAgICAgICBzdGF0dXNUZXh0OiBlLnN0YXR1c1RleHQgfHwgJ1Vua25vd24gRXJyb3InLFxuICAgICAgICAgICAgZXJyb3I6IGUuZXJyb3IsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBNb2NrU3RhdHVzRXJyb3IpIHtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMgPSBlLnN0YXR1cztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXMgPSBydWxlIS5jYWxsYmFjaztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKCEocmVzIGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlQmFzZSkpIHtcbiAgICAgIHJlcyA9IG5ldyBIdHRwUmVzcG9uc2Uoe1xuICAgICAgICBzdGF0dXM6IDIwMCxcbiAgICAgICAgdXJsOiByZXEudXJsLFxuICAgICAgICBib2R5OiByZXMsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmxvZykge1xuICAgICAgY29uc29sZS5sb2coYCVj8J+RvSR7cmVxLm1ldGhvZH0tPiR7cmVxLnVybH0tPnJlcXVlc3RgLCAnYmFja2dyb3VuZDojMDAwO2NvbG9yOiNiYWRhNTUnLCByZXEpO1xuICAgICAgY29uc29sZS5sb2coYCVj8J+RvSR7cmVxLm1ldGhvZH0tPiR7cmVxLnVybH0tPnJlc3BvbnNlYCwgJ2JhY2tncm91bmQ6IzAwMDtjb2xvcjojYmFkYTU1JywgcmVzKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXMkID0gcmVzIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UgPyB0aHJvd0Vycm9yKHJlcykgOiBvZihyZXMpO1xuXG4gICAgaWYgKGNvbmZpZy5leGVjdXRlT3RoZXJJbnRlcmNlcHRvcnMpIHtcbiAgICAgIGNvbnN0IGludGVyY2VwdG9ycyA9IHRoaXMuaW5qZWN0b3IuZ2V0KEhUVFBfSU5URVJDRVBUT1JTLCBbXSk7XG4gICAgICBjb25zdCBsYXN0SW50ZXJjZXB0b3JzID0gaW50ZXJjZXB0b3JzLnNsaWNlKGludGVyY2VwdG9ycy5pbmRleE9mKHRoaXMpICsgMSk7XG4gICAgICBpZiAobGFzdEludGVyY2VwdG9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGNoYWluID0gbGFzdEludGVyY2VwdG9ycy5yZWR1Y2VSaWdodChcbiAgICAgICAgICAoX25leHQsIF9pbnRlcmNlcHRvcikgPT4gbmV3IEh0dHBNb2NrSW50ZXJjZXB0b3JIYW5kbGVyKF9uZXh0LCBfaW50ZXJjZXB0b3IpLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGhhbmRsZTogKCkgPT4gcmVzJCxcbiAgICAgICAgICB9IGFzIEh0dHBCYWNrZW5kLFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gY2hhaW4uaGFuZGxlKHJlcSkucGlwZShkZWxheShjb25maWcuZGVsYXkpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzJC5waXBlKGRlbGF5KGNvbmZpZy5kZWxheSkpO1xuICB9XG59XG4iXX0=