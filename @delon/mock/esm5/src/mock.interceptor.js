/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { HttpResponse, HttpErrorResponse, } from '@angular/common/http';
import { Observable, of } from 'rxjs';
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
        var config = Object.assign({
            delay: 300,
            force: false,
            log: true,
        }, this.injector.get(DelonMockConfig, null));
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
                    var errRes_1 = void 0;
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
        var response = new HttpResponse({
            status: 200,
            body: res,
            url: req.url,
        });
        if (config.log) {
            console.log("%c\uD83D\uDC7D" + req.method + "->" + req.url + "->request", 'background:#000;color:#bada55', req);
            console.log("%c\uD83D\uDC7D" + req.method + "->" + req.url + "->response", 'background:#000;color:#bada55', response);
        }
        /** @type {?} */
        var hc = this.injector.get(_HttpClient, null);
        if (hc) {
            hc.begin();
        }
        return of(response).pipe(delay(config.delay), tap(function () {
            if (hc) {
                hc.end();
            }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9tb2NrLyIsInNvdXJjZXMiOlsic3JjL21vY2suaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFPTCxZQUFZLEVBRVosaUJBQWlCLEdBRWxCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLFVBQVUsRUFBWSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7SUFLL0MseUJBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7S0FBSTs7Ozs7O0lBRTFDLG1DQUFTOzs7OztJQUFULFVBQ0UsR0FBcUIsRUFDckIsSUFBaUI7O1FBUWpCLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDOztRQUMzQyxJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUMxQjtZQUNFLEtBQUssRUFBRSxHQUFHO1lBQ1YsS0FBSyxFQUFFLEtBQUs7WUFDWixHQUFHLEVBQUUsSUFBSTtTQUNWLEVBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUN6QyxDQUFDOztRQUNGLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMs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QUN6QywrQkFBK0IsRUFDL0IsUUFBUSxDQUNULENBQUM7U0FDSDs7UUFDRCxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEQsSUFBSSxFQUFFLEVBQUU7WUFDTixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDWjtRQUNELE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDdEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFDbkIsR0FBRyxDQUFDO1lBQ0YsSUFBSSxFQUFFLEVBQUU7Z0JBQ04sRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ1Y7U0FDRixDQUFDLENBQ0gsQ0FBQztLQUNIOztnQkFsSUYsVUFBVTs7OztnQkF2QlUsUUFBUTs7MEJBQTdCOztTQXdCYSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cFJlcXVlc3QsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwU2VudEV2ZW50LFxuICBIdHRwSGVhZGVyUmVzcG9uc2UsXG4gIEh0dHBQcm9ncmVzc0V2ZW50LFxuICBIdHRwUmVzcG9uc2UsXG4gIEh0dHBVc2VyRXZlbnQsXG4gIEh0dHBFcnJvclJlc3BvbnNlLFxuICBIdHRwRXZlbnQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVsYXksIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgX0h0dHBDbGllbnQgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuXG5pbXBvcnQgeyBEZWxvbk1vY2tDb25maWcgfSBmcm9tICcuL21vY2suY29uZmlnJztcbmltcG9ydCB7IE1vY2tTZXJ2aWNlIH0gZnJvbSAnLi9tb2NrLnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9ja1N0YXR1c0Vycm9yIH0gZnJvbSAnLi9zdGF0dXMuZXJyb3InO1xuaW1wb3J0IHsgTW9ja1JlcXVlc3QgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNb2NrSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge31cblxuICBpbnRlcmNlcHQoXG4gICAgcmVxOiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyLFxuICApOiBPYnNlcnZhYmxlPFxuICAgIHwgSHR0cFNlbnRFdmVudFxuICAgIHwgSHR0cEhlYWRlclJlc3BvbnNlXG4gICAgfCBIdHRwUHJvZ3Jlc3NFdmVudFxuICAgIHwgSHR0cFJlc3BvbnNlPGFueT5cbiAgICB8IEh0dHBVc2VyRXZlbnQ8YW55PlxuICA+IHtcbiAgICBjb25zdCBzcmMgPSB0aGlzLmluamVjdG9yLmdldChNb2NrU2VydmljZSk7XG4gICAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHtcbiAgICAgICAgZGVsYXk6IDMwMCxcbiAgICAgICAgZm9yY2U6IGZhbHNlLFxuICAgICAgICBsb2c6IHRydWUsXG4gICAgICB9LFxuICAgICAgdGhpcy5pbmplY3Rvci5nZXQoRGVsb25Nb2NrQ29uZmlnLCBudWxsKSxcbiAgICApO1xuICAgIGNvbnN0IHJ1bGUgPSBzcmMuZ2V0UnVsZShyZXEubWV0aG9kLCByZXEudXJsLnNwbGl0KCc/JylbMF0pO1xuICAgIGlmICghcnVsZSAmJiAhY29uZmlnLmZvcmNlKSB7XG4gICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbiAgICB9XG5cbiAgICBsZXQgcmVzOiBhbnk7XG4gICAgc3dpdGNoICh0eXBlb2YgcnVsZS5jYWxsYmFjaykge1xuICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgICBjb25zdCBtb2NrUmVxdWVzdDogTW9ja1JlcXVlc3QgPSB7XG4gICAgICAgICAgb3JpZ2luYWw6IHJlcSxcbiAgICAgICAgICBib2R5OiByZXEuYm9keSxcbiAgICAgICAgICBxdWVyeVN0cmluZzoge30sXG4gICAgICAgICAgaGVhZGVyczoge30sXG4gICAgICAgICAgcGFyYW1zOiBydWxlLnBhcmFtcyxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgdXJsUGFyYW1zID0gcmVxLnVybC5zcGxpdCgnPycpO1xuICAgICAgICBpZiAodXJsUGFyYW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICB1cmxQYXJhbXNbMV0uc3BsaXQoJyYnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbUFyciA9IGl0ZW0uc3BsaXQoJz0nKTtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGl0ZW1BcnJbMF07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGl0ZW1BcnJbMV07XG4gICAgICAgICAgICAvLyBpcyBhcnJheVxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKG1vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nKS5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShtb2NrUmVxdWVzdC5xdWVyeVN0cmluZ1trZXldKSkge1xuICAgICAgICAgICAgICAgIG1vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nW2tleV0gPSBbbW9ja1JlcXVlc3QucXVlcnlTdHJpbmdba2V5XV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbW9ja1JlcXVlc3QucXVlcnlTdHJpbmdba2V5XS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG1vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXEucGFyYW1zXG4gICAgICAgICAgLmtleXMoKVxuICAgICAgICAgIC5mb3JFYWNoKGtleSA9PiAobW9ja1JlcXVlc3QucXVlcnlTdHJpbmdba2V5XSA9IHJlcS5wYXJhbXMuZ2V0KGtleSkpKTtcbiAgICAgICAgcmVxLmhlYWRlcnNcbiAgICAgICAgICAua2V5cygpXG4gICAgICAgICAgLmZvckVhY2goa2V5ID0+IChtb2NrUmVxdWVzdC5oZWFkZXJzW2tleV0gPSByZXEuaGVhZGVycy5nZXQoa2V5KSkpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzID0gcnVsZS5jYWxsYmFjay5jYWxsKHRoaXMsIG1vY2tSZXF1ZXN0KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGxldCBlcnJSZXM6IEh0dHBFcnJvclJlc3BvbnNlO1xuICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgTW9ja1N0YXR1c0Vycm9yKSB7XG4gICAgICAgICAgICBlcnJSZXMgPSBuZXcgSHR0cEVycm9yUmVzcG9uc2Uoe1xuICAgICAgICAgICAgICB1cmw6IHJlcS51cmwsXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLFxuICAgICAgICAgICAgICBzdGF0dXM6IGUuc3RhdHVzLFxuICAgICAgICAgICAgICBzdGF0dXNUZXh0OiBlLnN0YXR1c1RleHQgfHwgJ1Vua25vd24gRXJyb3InLFxuICAgICAgICAgICAgICBlcnJvcjogZS5lcnJvcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGNvbmZpZy5sb2cpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgIGAlY/CfkoAke3JlcS5tZXRob2R9LT4ke3JlcS51cmx9YCxcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZDojMDAwO2NvbG9yOiNiYWRhNTUnLFxuICAgICAgICAgICAgICAgIGVyclJlcyxcbiAgICAgICAgICAgICAgICByZXEsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICBgJWPwn5KAJHtyZXEubWV0aG9kfS0+JHtyZXEudXJsfWAsXG4gICAgICAgICAgICAgICdiYWNrZ3JvdW5kOiMwMDA7Y29sb3I6I2JhZGE1NScsXG4gICAgICAgICAgICAgIGBQbGVhc2UgdXNlIE1vY2tTdGF0dXNFcnJvciB0byB0aHJvdyBzdGF0dXMgZXJyb3JgLFxuICAgICAgICAgICAgICBlLFxuICAgICAgICAgICAgICByZXEsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxIdHRwRXZlbnQ8YW55Pj4pID0+IHtcbiAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVyclJlcyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXMgPSBydWxlLmNhbGxiYWNrO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCByZXNwb25zZTogSHR0cFJlc3BvbnNlPGFueT4gPSBuZXcgSHR0cFJlc3BvbnNlKHtcbiAgICAgIHN0YXR1czogMjAwLFxuICAgICAgYm9keTogcmVzLFxuICAgICAgdXJsOiByZXEudXJsLFxuICAgIH0pO1xuXG4gICAgaWYgKGNvbmZpZy5sb2cpIHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBgJWPwn5G9JHtyZXEubWV0aG9kfS0+JHtyZXEudXJsfS0+cmVxdWVzdGAsXG4gICAgICAgICdiYWNrZ3JvdW5kOiMwMDA7Y29sb3I6I2JhZGE1NScsXG4gICAgICAgIHJlcSxcbiAgICAgICk7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgYCVj8J+RvSR7cmVxLm1ldGhvZH0tPiR7cmVxLnVybH0tPnJlc3BvbnNlYCxcbiAgICAgICAgJ2JhY2tncm91bmQ6IzAwMDtjb2xvcjojYmFkYTU1JyxcbiAgICAgICAgcmVzcG9uc2UsXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCBoYyA9IHRoaXMuaW5qZWN0b3IuZ2V0KF9IdHRwQ2xpZW50LCBudWxsKTtcbiAgICBpZiAoaGMpIHtcbiAgICAgIGhjLmJlZ2luKCk7XG4gICAgfVxuICAgIHJldHVybiBvZihyZXNwb25zZSkucGlwZShcbiAgICAgIGRlbGF5KGNvbmZpZy5kZWxheSksXG4gICAgICB0YXAoKCkgPT4ge1xuICAgICAgICBpZiAoaGMpIHtcbiAgICAgICAgICBoYy5lbmQoKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgKTtcbiAgfVxufVxuIl19