/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
                    urlParams[1].split('&').forEach((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) {
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
                    }));
                }
                req.params.keys().forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) { return (mockRequest_1.queryString[key] = req.params.get(key)); }));
                req.headers.keys().forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) { return (mockRequest_1.headers[key] = req.headers.get(key)); }));
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
                var chain = lastInterceptors.reduceRight((/**
                 * @param {?} _next
                 * @param {?} _interceptor
                 * @return {?}
                 */
                function (_next, _interceptor) { return new HttpMockInterceptorHandler(_next, _interceptor); }), (/** @type {?} */ ({
                    handle: (/**
                     * @return {?}
                     */
                    function () { return res$; }),
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
    /**
     * @type {?}
     * @private
     */
    MockInterceptor.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9tb2NrLyIsInNvdXJjZXMiOlsic3JjL21vY2suaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsaUJBQWlCLEVBS2pCLFlBQVksRUFDWixnQkFBZ0IsRUFDaEIsaUJBQWlCLEdBQ2xCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3ZDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRDtJQUNFLG9DQUFvQixJQUFpQixFQUFVLFdBQTRCO1FBQXZELFNBQUksR0FBSixJQUFJLENBQWE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBaUI7SUFBRyxDQUFDOzs7OztJQUUvRSwyQ0FBTTs7OztJQUFOLFVBQU8sR0FBcUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDSCxpQ0FBQztBQUFELENBQUMsQUFORCxJQU1DOzs7Ozs7SUFMYSwwQ0FBeUI7Ozs7O0lBQUUsaURBQW9DOztBQU83RTtJQUVFLHlCQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQUcsQ0FBQzs7Ozs7O0lBRTFDLG1DQUFTOzs7OztJQUFULFVBQVUsR0FBcUIsRUFBRSxJQUFpQjs7WUFDMUMsR0FBRyxH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LENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztRQUV6RSxJQUFJLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRTs7Z0JBQzdCLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLENBQUM7O2dCQUN2RCxnQkFBZ0IsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzNFLElBQUksZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs7b0JBQ3pCLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxXQUFXOzs7OztnQkFDeEMsVUFBQyxLQUFLLEVBQUUsWUFBWSxJQUFLLE9BQUEsSUFBSSwwQkFBMEIsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLEVBQW5ELENBQW1ELEdBQzVFLG1CQUFBO29CQUNFLE1BQU07OztvQkFBRSxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQTtpQkFDbkIsRUFBZSxDQUNqQjtnQkFDRCxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNwRDtTQUNGO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDOztnQkFsR0YsVUFBVTs7OztnQkFqQlUsUUFBUTs7SUFvSDdCLHNCQUFDO0NBQUEsQUFuR0QsSUFtR0M7U0FsR1ksZUFBZTs7Ozs7O0lBQ2QsbUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSHR0cEJhY2tlbmQsXG4gIEh0dHBFcnJvclJlc3BvbnNlLFxuICBIdHRwRXZlbnQsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBSZXF1ZXN0LFxuICBIdHRwUmVzcG9uc2UsXG4gIEh0dHBSZXNwb25zZUJhc2UsXG4gIEhUVFBfSU5URVJDRVBUT1JTLFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgb2YsIHRocm93RXJyb3IsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlbGF5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBNb2NrUmVxdWVzdCB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IERlbG9uTW9ja0NvbmZpZyB9IGZyb20gJy4vbW9jay5jb25maWcnO1xuaW1wb3J0IHsgTW9ja1NlcnZpY2UgfSBmcm9tICcuL21vY2suc2VydmljZSc7XG5pbXBvcnQgeyBNb2NrU3RhdHVzRXJyb3IgfSBmcm9tICcuL3N0YXR1cy5lcnJvcic7XG5cbmNsYXNzIEh0dHBNb2NrSW50ZXJjZXB0b3JIYW5kbGVyIGltcGxlbWVudHMgSHR0cEhhbmRsZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5leHQ6IEh0dHBIYW5kbGVyLCBwcml2YXRlIGludGVyY2VwdG9yOiBIdHRwSW50ZXJjZXB0b3IpIHt9XG5cbiAgaGFuZGxlKHJlcTogSHR0cFJlcXVlc3Q8YW55Pik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcmNlcHRvci5pbnRlcmNlcHQocmVxLCB0aGlzLm5leHQpO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNb2NrSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge31cblxuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICBjb25zdCBzcmMgPSB0aGlzLmluamVjdG9yLmdldChNb2NrU2VydmljZSk7XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgZGVsYXk6IDMwMCxcbiAgICAgIGZvcmNlOiBmYWxzZSxcbiAgICAgIGxvZzogdHJ1ZSxcbiAgICAgIGV4ZWN1dGVPdGhlckludGVyY2VwdG9yczogdHJ1ZSxcbiAgICAgIC4uLnRoaXMuaW5qZWN0b3IuZ2V0KERlbG9uTW9ja0NvbmZpZywgbnVsbCksXG4gICAgfTtcbiAgICBjb25zdCBydWxlID0gc3JjLmdldFJ1bGUocmVxLm1ldGhvZCwgcmVxLnVybC5zcGxpdCgnPycpWzBdKTtcbiAgICBpZiAoIXJ1bGUgJiYgIWNvbmZpZy5mb3JjZSkge1xuICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSk7XG4gICAgfVxuXG4gICAgbGV0IHJlczogYW55O1xuICAgIHN3aXRjaCAodHlwZW9mIHJ1bGUuY2FsbGJhY2spIHtcbiAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgICAgY29uc3QgbW9ja1JlcXVlc3Q6IE1vY2tSZXF1ZXN0ID0ge1xuICAgICAgICAgIG9yaWdpbmFsOiByZXEsXG4gICAgICAgICAgYm9keTogcmVxLmJvZHksXG4gICAgICAgICAgcXVlcnlTdHJpbmc6IHt9LFxuICAgICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICAgIHBhcmFtczogcnVsZS5wYXJhbXMsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHVybFBhcmFtcyA9IHJlcS51cmwuc3BsaXQoJz8nKTtcbiAgICAgICAgaWYgKHVybFBhcmFtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgdXJsUGFyYW1zWzFdLnNwbGl0KCcmJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1BcnIgPSBpdGVtLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBpdGVtQXJyWzBdO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBpdGVtQXJyWzFdO1xuICAgICAgICAgICAgLy8gaXMgYXJyYXlcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhtb2NrUmVxdWVzdC5xdWVyeVN0cmluZykuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobW9ja1JlcXVlc3QucXVlcnlTdHJpbmdba2V5XSkpIHtcbiAgICAgICAgICAgICAgICBtb2NrUmVxdWVzdC5xdWVyeVN0cmluZ1trZXldID0gW21vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nW2tleV1dO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG1vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nW2tleV0ucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBtb2NrUmVxdWVzdC5xdWVyeVN0cmluZ1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVxLnBhcmFtcy5rZXlzKCkuZm9yRWFjaChrZXkgPT4gKG1vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nW2tleV0gPSByZXEucGFyYW1zLmdldChrZXkpKSk7XG4gICAgICAgIHJlcS5oZWFkZXJzLmtleXMoKS5mb3JFYWNoKGtleSA9PiAobW9ja1JlcXVlc3QuaGVhZGVyc1trZXldID0gcmVxLmhlYWRlcnMuZ2V0KGtleSkpKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlcyA9IHJ1bGUuY2FsbGJhY2suY2FsbCh0aGlzLCBtb2NrUmVxdWVzdCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXMgPSBuZXcgSHR0cEVycm9yUmVzcG9uc2Uoe1xuICAgICAgICAgICAgdXJsOiByZXEudXJsLFxuICAgICAgICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXG4gICAgICAgICAgICBzdGF0dXM6IDQwMCxcbiAgICAgICAgICAgIHN0YXR1c1RleHQ6IGUuc3RhdHVzVGV4dCB8fCAnVW5rbm93biBFcnJvcicsXG4gICAgICAgICAgICBlcnJvcjogZS5lcnJvcixcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIE1vY2tTdGF0dXNFcnJvcikge1xuICAgICAgICAgICAgcmVzLnN0YXR1cyA9IGUuc3RhdHVzO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJlcyA9IHJ1bGUuY2FsbGJhY2s7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmICghKHJlcyBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZUJhc2UpKSB7XG4gICAgICByZXMgPSBuZXcgSHR0cFJlc3BvbnNlKHtcbiAgICAgICAgc3RhdHVzOiAyMDAsXG4gICAgICAgIHVybDogcmVxLnVybCxcbiAgICAgICAgYm9keTogcmVzLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5sb2cpIHtcbiAgICAgIGNvbnNvbGUubG9nKGAlY/Cfkb0ke3JlcS5tZXRob2R9LT4ke3JlcS51cmx9LT5yZXF1ZXN0YCwgJ2JhY2tncm91bmQ6IzAwMDtjb2xvcjojYmFkYTU1JywgcmVxKTtcbiAgICAgIGNvbnNvbGUubG9nKGAlY/Cfkb0ke3JlcS5tZXRob2R9LT4ke3JlcS51cmx9LT5yZXNwb25zZWAsICdiYWNrZ3JvdW5kOiMwMDA7Y29sb3I6I2JhZGE1NScsIHJlcyk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzJCA9IHJlcyBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlID8gdGhyb3dFcnJvcihyZXMpIDogb2YocmVzKTtcblxuICAgIGlmIChjb25maWcuZXhlY3V0ZU90aGVySW50ZXJjZXB0b3JzKSB7XG4gICAgICBjb25zdCBpbnRlcmNlcHRvcnMgPSB0aGlzLmluamVjdG9yLmdldChIVFRQX0lOVEVSQ0VQVE9SUywgW10pO1xuICAgICAgY29uc3QgbGFzdEludGVyY2VwdG9ycyA9IGludGVyY2VwdG9ycy5zbGljZShpbnRlcmNlcHRvcnMuaW5kZXhPZih0aGlzKSArIDEpO1xuICAgICAgaWYgKGxhc3RJbnRlcmNlcHRvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBjaGFpbiA9IGxhc3RJbnRlcmNlcHRvcnMucmVkdWNlUmlnaHQoXG4gICAgICAgICAgKF9uZXh0LCBfaW50ZXJjZXB0b3IpID0+IG5ldyBIdHRwTW9ja0ludGVyY2VwdG9ySGFuZGxlcihfbmV4dCwgX2ludGVyY2VwdG9yKSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBoYW5kbGU6ICgpID0+IHJlcyQsXG4gICAgICAgICAgfSBhcyBIdHRwQmFja2VuZCxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGNoYWluLmhhbmRsZShyZXEpLnBpcGUoZGVsYXkoY29uZmlnLmRlbGF5KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcyQucGlwZShkZWxheShjb25maWcuZGVsYXkpKTtcbiAgfVxufVxuIl19