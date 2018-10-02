/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                        mockRequest.queryString[itemArr[0]] = itemArr[1];
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
        if (config.log)
            console.log('%c 👽MOCK ', 'background:#000;color:#bada55', req.url, response, req);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9tb2NrLyIsInNvdXJjZXMiOlsic3JjL21vY2suaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFPTCxZQUFZLEVBRVosaUJBQWlCLEdBRWxCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLFVBQVUsRUFBWSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXZDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUlqRCxNQUFNOzs7O0lBQ0osWUFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtLQUFJOzs7Ozs7SUFFMUMsU0FBUyxDQUNQLEdBQXFCLEVBQ3JCLElBQWlCOztRQVFqQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7UUFDM0MsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FDMUI7WUFDRSxLQUFLLEVBQUUsR0FBRztZQUNWLEtBQUssRUFBRSxLQUFLO1lBQ1osR0FBRyxFQUFFLElBQUk7U0FDVixFQUNELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FDekMsQ0FBQzs7UUFDRixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMs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QUNFLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNwQixNQUFNO1NBQ1Q7O1FBRUQsTUFBTSxRQUFRLEdBQXNCLElBQUksWUFBWSxDQUFDO1lBQ25ELE1BQU0sRUFBRSxHQUFHO1lBQ1gsSUFBSSxFQUFFLEdBQUc7WUFDVCxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUc7U0FDYixDQUFDLENBQUM7UUFDSCxJQUFJLE1BQU0sQ0FBQyxHQUFHO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FDVCxZQUFZLEVBQ1osK0JBQStCLEVBQy9CLEdBQUcsQ0FBQyxHQUFHLEVBQ1AsUUFBUSxFQUNSLEdBQUcsQ0FDSixDQUFDO1FBQ0osT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUMvQzs7O1lBdkdGLFVBQVU7Ozs7WUFyQlUsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgSHR0cEludGVyY2VwdG9yLFxyXG4gIEh0dHBSZXF1ZXN0LFxyXG4gIEh0dHBIYW5kbGVyLFxyXG4gIEh0dHBTZW50RXZlbnQsXHJcbiAgSHR0cEhlYWRlclJlc3BvbnNlLFxyXG4gIEh0dHBQcm9ncmVzc0V2ZW50LFxyXG4gIEh0dHBSZXNwb25zZSxcclxuICBIdHRwVXNlckV2ZW50LFxyXG4gIEh0dHBFcnJvclJlc3BvbnNlLFxyXG4gIEh0dHBFdmVudCxcclxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWxheSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IERlbG9uTW9ja0NvbmZpZyB9IGZyb20gJy4vbW9jay5jb25maWcnO1xyXG5pbXBvcnQgeyBNb2NrU2VydmljZSB9IGZyb20gJy4vbW9jay5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTW9ja1N0YXR1c0Vycm9yIH0gZnJvbSAnLi9zdGF0dXMuZXJyb3InO1xyXG5pbXBvcnQgeyBNb2NrUmVxdWVzdCB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1vY2tJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHt9XHJcblxyXG4gIGludGVyY2VwdChcclxuICAgIHJlcTogSHR0cFJlcXVlc3Q8YW55PixcclxuICAgIG5leHQ6IEh0dHBIYW5kbGVyLFxyXG4gICk6IE9ic2VydmFibGU8XHJcbiAgICB8IEh0dHBTZW50RXZlbnRcclxuICAgIHwgSHR0cEhlYWRlclJlc3BvbnNlXHJcbiAgICB8IEh0dHBQcm9ncmVzc0V2ZW50XHJcbiAgICB8IEh0dHBSZXNwb25zZTxhbnk+XHJcbiAgICB8IEh0dHBVc2VyRXZlbnQ8YW55PlxyXG4gID4ge1xyXG4gICAgY29uc3Qgc3JjID0gdGhpcy5pbmplY3Rvci5nZXQoTW9ja1NlcnZpY2UpO1xyXG4gICAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAge1xyXG4gICAgICAgIGRlbGF5OiAzMDAsXHJcbiAgICAgICAgZm9yY2U6IGZhbHNlLFxyXG4gICAgICAgIGxvZzogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgdGhpcy5pbmplY3Rvci5nZXQoRGVsb25Nb2NrQ29uZmlnLCBudWxsKSxcclxuICAgICk7XHJcbiAgICBjb25zdCBydWxlID0gc3JjLmdldFJ1bGUocmVxLm1ldGhvZCwgcmVxLnVybC5zcGxpdCgnPycpWzBdKTtcclxuICAgIGlmICghcnVsZSAmJiAhY29uZmlnLmZvcmNlKSB7XHJcbiAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCByZXM6IGFueTtcclxuICAgIHN3aXRjaCAodHlwZW9mIHJ1bGUuY2FsbGJhY2spIHtcclxuICAgICAgY2FzZSAnZnVuY3Rpb24nOlxyXG4gICAgICAgIGNvbnN0IG1vY2tSZXF1ZXN0OiBNb2NrUmVxdWVzdCA9IHtcclxuICAgICAgICAgIG9yaWdpbmFsOiByZXEsXHJcbiAgICAgICAgICBib2R5OiByZXEuYm9keSxcclxuICAgICAgICAgIHF1ZXJ5U3RyaW5nOiB7fSxcclxuICAgICAgICAgIGhlYWRlcnM6IHt9LFxyXG4gICAgICAgICAgcGFyYW1zOiBydWxlLnBhcmFtcyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHVybFBhcmFtcyA9IHJlcS51cmwuc3BsaXQoJz8nKTtcclxuICAgICAgICBpZiAodXJsUGFyYW1zLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgIHVybFBhcmFtc1sxXS5zcGxpdCgnJicpLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1BcnIgPSBpdGVtLnNwbGl0KCc9Jyk7XHJcbiAgICAgICAgICAgIG1vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nW2l0ZW1BcnJbMF1dID0gaXRlbUFyclsxXTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXEucGFyYW1zXHJcbiAgICAgICAgICAua2V5cygpXHJcbiAgICAgICAgICAuZm9yRWFjaChrZXkgPT4gKG1vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nW2tleV0gPSByZXEucGFyYW1zLmdldChrZXkpKSk7XHJcbiAgICAgICAgcmVxLmhlYWRlcnNcclxuICAgICAgICAgIC5rZXlzKClcclxuICAgICAgICAgIC5mb3JFYWNoKGtleSA9PiAobW9ja1JlcXVlc3QuaGVhZGVyc1trZXldID0gcmVxLmhlYWRlcnMuZ2V0KGtleSkpKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHJlcyA9IHJ1bGUuY2FsbGJhY2suY2FsbCh0aGlzLCBtb2NrUmVxdWVzdCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgbGV0IGVyclJlczogSHR0cEVycm9yUmVzcG9uc2U7XHJcbiAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIE1vY2tTdGF0dXNFcnJvcikge1xyXG4gICAgICAgICAgICBlcnJSZXMgPSBuZXcgSHR0cEVycm9yUmVzcG9uc2Uoe1xyXG4gICAgICAgICAgICAgIHVybDogcmVxLnVybCxcclxuICAgICAgICAgICAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcclxuICAgICAgICAgICAgICBzdGF0dXM6IGUuc3RhdHVzLFxyXG4gICAgICAgICAgICAgIHN0YXR1c1RleHQ6IGUuc3RhdHVzVGV4dCB8fCAnVW5rbm93biBFcnJvcicsXHJcbiAgICAgICAgICAgICAgZXJyb3I6IGUuZXJyb3IsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmxvZylcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgIGAlYyDwn5G9TU9DSyAke2Uuc3RhdHVzfSBTVEFUVVMgYCxcclxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kOiMwMDA7Y29sb3I6I2JhZGE1NScsXHJcbiAgICAgICAgICAgICAgICByZXEudXJsLFxyXG4gICAgICAgICAgICAgICAgZXJyUmVzLFxyXG4gICAgICAgICAgICAgICAgcmVxLFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICAgICAgICAgIGBQbGVhc2UgdXNlIE1vY2tTdGF0dXNFcnJvciB0byB0aHJvdyBzdGF0dXMgZXJyb3JgLFxyXG4gICAgICAgICAgICAgIGUsXHJcbiAgICAgICAgICAgICAgcmVxLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8SHR0cEV2ZW50PGFueT4+KSA9PiB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVyclJlcyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmVzID0gcnVsZS5jYWxsYmFjaztcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXNwb25zZTogSHR0cFJlc3BvbnNlPGFueT4gPSBuZXcgSHR0cFJlc3BvbnNlKHtcclxuICAgICAgc3RhdHVzOiAyMDAsXHJcbiAgICAgIGJvZHk6IHJlcyxcclxuICAgICAgdXJsOiByZXEudXJsLFxyXG4gICAgfSk7XHJcbiAgICBpZiAoY29uZmlnLmxvZylcclxuICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgJyVjIPCfkb1NT0NLICcsXHJcbiAgICAgICAgJ2JhY2tncm91bmQ6IzAwMDtjb2xvcjojYmFkYTU1JyxcclxuICAgICAgICByZXEudXJsLFxyXG4gICAgICAgIHJlc3BvbnNlLFxyXG4gICAgICAgIHJlcSxcclxuICAgICAgKTtcclxuICAgIHJldHVybiBvZihyZXNwb25zZSkucGlwZShkZWxheShjb25maWcuZGVsYXkpKTtcclxuICB9XHJcbn1cclxuIl19