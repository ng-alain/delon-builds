import { Injectable, Injector, NgModule } from '@angular/core';
import { HttpResponse, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { _HttpClient } from '@delon/theme';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class MockStatusError {
    /**
     * @param {?} status
     * @param {?=} error
     */
    constructor(status, error) {
        this.status = status;
        this.error = error;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class DelonMockConfig {
    constructor() {
        /**
         * 请求延迟，单位：毫秒，默认：`300`
         */
        this.delay = 300;
        /**
         * 是否强制所有请求都Mock，`true` 表示当请求的URL不存在时直接返回 404 错误，`false` 表示未命中时发送真实HTTP请求
         */
        this.force = false;
        /**
         * 是否打印 Mock 请求信息，弥补浏览器无Network信息
         */
        this.log = true;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class MockService {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
        this.cached = [];
        this.applyMock();
        delete this.config.data;
    }
    // #region parse rule
    /**
     * @return {?}
     */
    applyMock() {
        this.cached = [];
        try {
            this.realApplyMock();
        }
        catch (e) {
            this.outputError(e);
        }
    }
    /**
     * @return {?}
     */
    realApplyMock() {
        /** @type {?} */
        const data = this.config.data;
        if (!data)
            return;
        Object.keys(data).forEach((key) => {
            /** @type {?} */
            const rules = data[key];
            if (!rules)
                return;
            Object.keys(rules).forEach((ruleKey) => {
                /** @type {?} */
                const value = rules[ruleKey];
                if (!(typeof value === 'function' ||
                    typeof value === 'object' ||
                    typeof value === 'string')) {
                    throw Error(`mock value of [${key}-${ruleKey}] should be function or object or string, but got ${typeof value}`);
                }
                /** @type {?} */
                const rule = this.genRule(ruleKey, value);
                if (['GET', 'POST', 'PUT', 'HEAD', 'DELETE', 'PATCH', 'OPTIONS'].indexOf(rule.method) === -1) {
                    throw Error(`method of ${key}-${ruleKey} is not valid`);
                }
                /** @type {?} */
                const item = this.cached.find(w => w.url === rule.url && w.method === rule.method);
                if (item) {
                    item.callback = rule.callback;
                }
                else {
                    this.cached.push(rule);
                }
            });
        });
        // regular ordering
        this.cached.sort((a, b) => (b.martcher || '').toString().length -
            (a.martcher || '').toString().length);
    }
    /**
     * @param {?} key
     * @param {?} callback
     * @return {?}
     */
    genRule(key, callback) {
        /** @type {?} */
        let method = 'GET';
        /** @type {?} */
        let url = key;
        if (key.indexOf(' ') > -1) {
            /** @type {?} */
            const splited = key.split(' ');
            method = splited[0].toLowerCase();
            url = splited[1];
        }
        /** @type {?} */
        let martcher = null;
        /** @type {?} */
        let segments = [];
        if (~url.indexOf(':')) {
            segments = (/** @type {?} */ (url)).split('/')
                .filter(segment => segment.startsWith(':'))
                .map(v => v.substring(1));
            /** @type {?} */
            const reStr = (/** @type {?} */ (url)).split('/')
                .map(segment => (segment.startsWith(':') ? `([^/]+)` : segment))
                .join('/');
            martcher = new RegExp(reStr, 'i');
        }
        else if (/(\([^)]+\))/i.test(url)) {
            martcher = new RegExp(url, 'i');
        }
        return {
            url,
            martcher,
            segments,
            callback,
            method: method.toUpperCase(),
        };
    }
    /**
     * @param {?} error
     * @return {?}
     */
    outputError(error) {
        /** @type {?} */
        const filePath = error.message.split(': ')[0];
        /** @type {?} */
        const errors = error.stack
            .split('\n')
            .filter(line => line.trim().indexOf('at ') !== 0)
            .map(line => line.replace(`${filePath}: `, ''));
        errors.splice(1, 0, ['']);
        console.group();
        console.warn(`==========Failed to parse mock config.==========`);
        console.log(errors.join('\n'));
        console.groupEnd();
        throw error;
    }
    // #endregion
    /**
     * @param {?} method
     * @param {?} url
     * @return {?}
     */
    getRule(method, url) {
        method = (method || 'GET').toUpperCase();
        /** @type {?} */
        const params = {};
        /** @type {?} */
        const list = this.cached.filter(w => w.method === method &&
            (w.martcher ? w.martcher.test(url) : w.url === url));
        if (list.length === 0)
            return null;
        /** @type {?} */
        const ret = list.find(w => w.url === url) || list[0];
        if (ret.martcher) {
            /** @type {?} */
            const execArr = ret.martcher.exec(url);
            execArr.slice(1).map((value, index) => {
                params[ret.segments[index]] = value;
            });
        }
        return {
            url,
            method: ret.method,
            params,
            callback: ret.callback,
        };
    }
    /**
     * @return {?}
     */
    clearCache() {
        this.cached = [];
    }
    /**
     * @return {?}
     */
    get rules() {
        return this.cached;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.clearCache();
    }
}
MockService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
MockService.ctorParameters = () => [
    { type: DelonMockConfig }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class MockInterceptor {
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
                            console.log(`%c💀${req.method}->${req.url}`, 'background:#000;color:#bada55', errRes, req);
                    }
                    else {
                        console.log(`%c💀${req.method}->${req.url}`, 'background:#000;color:#bada55', `Please use MockStatusError to throw status error`, e, req);
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
        /** @type {?} */
        const hc = this.injector.get(_HttpClient, null);
        if (hc) {
            hc.begin();
        }
        return of(response).pipe(delay(config.delay), tap(() => {
            if (hc) {
                hc.end();
            }
        }));
    }
}
MockInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
MockInterceptor.ctorParameters = () => [
    { type: Injector }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class DelonMockModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: DelonMockModule,
            providers: [
                MockService,
                { provide: DelonMockConfig, useValue: config },
                { provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true },
            ],
        };
    }
    /**
     * @return {?}
     */
    static forChild() {
        return {
            ngModule: DelonMockModule,
            providers: [
                { provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true },
            ],
        };
    }
}
DelonMockModule.decorators = [
    { type: NgModule, args: [{},] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { MockStatusError, MockService, MockInterceptor, DelonMockConfig, DelonMockModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL21vY2svc3JjL3N0YXR1cy5lcnJvci50cyIsIm5nOi8vQGRlbG9uL21vY2svc3JjL21vY2suY29uZmlnLnRzIiwibmc6Ly9AZGVsb24vbW9jay9zcmMvbW9jay5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vbW9jay9zcmMvbW9jay5pbnRlcmNlcHRvci50cyIsIm5nOi8vQGRlbG9uL21vY2svc3JjL21vY2subW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBNb2NrU3RhdHVzRXJyb3Ige1xuICBzdGF0dXNUZXh0OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzdGF0dXM6IG51bWJlciwgcHVibGljIGVycm9yPzogYW55KSB7fVxufVxuIiwiZXhwb3J0IGNsYXNzIERlbG9uTW9ja0NvbmZpZyB7XG4gIC8qKiDDqMKnwoTDpcKIwpnDpcKuwprDpMK5wonDpsKVwrDDpsKNwq4gKi9cbiAgZGF0YTogYW55O1xuICAvKiogw6jCr8K3w6bCscKCw6XCu8K2w6jCv8Kfw6/CvMKMw6XCjcKVw6TCvcKNw6/CvMKaw6bCr8Krw6fCp8KSw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYDMwMGAgKi9cbiAgZGVsYXk/ID0gMzAwO1xuICAvKiogw6bCmMKvw6XCkMKmw6XCvMK6w6XCiMK2w6bCicKAw6bCnMKJw6jCr8K3w6bCscKCw6nCg8K9TW9ja8OvwrzCjGB0cnVlYCDDqMKhwqjDp8KkwrrDpcK9wpPDqMKvwrfDpsKxwoLDp8KawoRVUkzDpMK4wo3DpcKtwpjDpcKcwqjDpsKXwrbDp8KbwrTDpsKOwqXDqMK/wpTDpcKbwp4gNDA0IMOpwpTCmcOowq/Cr8OvwrzCjGBmYWxzZWAgw6jCocKow6fCpMK6w6bCnMKqw6XCkcK9w6TCuMKtw6bCl8K2w6XCj8KRw6nCgMKBw6fCnMKfw6XCrsKeSFRUUMOowq/Ct8OmwrHCgiAqL1xuICBmb3JjZT8gPSBmYWxzZTtcbiAgLyoqIMOmwpjCr8OlwpDCpsOmwonCk8Olwo3CsCBNb2NrIMOowq/Ct8OmwrHCgsOkwr/CocOmwoHCr8OvwrzCjMOlwrzCpcOowqHCpcOmwrXCj8OowqfCiMOlwpnCqMOmwpfCoE5ldHdvcmvDpMK/wqHDpsKBwq8gKi9cbiAgbG9nPyA9IHRydWU7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERlbG9uTW9ja0NvbmZpZyB9IGZyb20gJy4vbW9jay5jb25maWcnO1xuaW1wb3J0IHsgTW9ja0NhY2hlZFJ1bGUsIE1vY2tSdWxlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTW9ja1NlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGNhY2hlZDogTW9ja0NhY2hlZFJ1bGVbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnOiBEZWxvbk1vY2tDb25maWcpIHtcbiAgICB0aGlzLmFwcGx5TW9jaygpO1xuICAgIGRlbGV0ZSB0aGlzLmNvbmZpZy5kYXRhO1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBwYXJzZSBydWxlXG5cbiAgcHJpdmF0ZSBhcHBseU1vY2soKSB7XG4gICAgdGhpcy5jYWNoZWQgPSBbXTtcbiAgICB0cnkge1xuICAgICAgdGhpcy5yZWFsQXBwbHlNb2NrKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5vdXRwdXRFcnJvcihlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlYWxBcHBseU1vY2soKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29uZmlnLmRhdGE7XG4gICAgaWYgKCFkYXRhKSByZXR1cm47XG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHJ1bGVzID0gZGF0YVtrZXldO1xuICAgICAgaWYgKCFydWxlcykgcmV0dXJuO1xuICAgICAgT2JqZWN0LmtleXMocnVsZXMpLmZvckVhY2goKHJ1bGVLZXk6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1bGVzW3J1bGVLZXldO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIShcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyB8fFxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fFxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgICAgICBgbW9jayB2YWx1ZSBvZiBbJHtrZXl9LSR7cnVsZUtleX1dIHNob3VsZCBiZSBmdW5jdGlvbiBvciBvYmplY3Qgb3Igc3RyaW5nLCBidXQgZ290ICR7dHlwZW9mIHZhbHVlfWAsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBydWxlID0gdGhpcy5nZW5SdWxlKHJ1bGVLZXksIHZhbHVlKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIFsnR0VUJywgJ1BPU1QnLCAnUFVUJywgJ0hFQUQnLCAnREVMRVRFJywgJ1BBVENIJywgJ09QVElPTlMnXS5pbmRleE9mKFxuICAgICAgICAgICAgcnVsZS5tZXRob2QsXG4gICAgICAgICAgKSA9PT0gLTFcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoYG1ldGhvZCBvZiAke2tleX0tJHtydWxlS2V5fSBpcyBub3QgdmFsaWRgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5jYWNoZWQuZmluZChcbiAgICAgICAgICB3ID0+IHcudXJsID09PSBydWxlLnVybCAmJiB3Lm1ldGhvZCA9PT0gcnVsZS5tZXRob2QsXG4gICAgICAgICk7XG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgaXRlbS5jYWxsYmFjayA9IHJ1bGUuY2FsbGJhY2s7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jYWNoZWQucHVzaChydWxlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gcmVndWxhciBvcmRlcmluZ1xuICAgIHRoaXMuY2FjaGVkLnNvcnQoXG4gICAgICAoYSwgYikgPT5cbiAgICAgICAgKGIubWFydGNoZXIgfHwgJycpLnRvU3RyaW5nKCkubGVuZ3RoIC1cbiAgICAgICAgKGEubWFydGNoZXIgfHwgJycpLnRvU3RyaW5nKCkubGVuZ3RoLFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdlblJ1bGUoa2V5OiBzdHJpbmcsIGNhbGxiYWNrOiBhbnkpOiBNb2NrQ2FjaGVkUnVsZSB7XG4gICAgbGV0IG1ldGhvZCA9ICdHRVQnO1xuICAgIGxldCB1cmwgPSBrZXk7XG5cbiAgICBpZiAoa2V5LmluZGV4T2YoJyAnKSA+IC0xKSB7XG4gICAgICBjb25zdCBzcGxpdGVkID0ga2V5LnNwbGl0KCcgJyk7XG4gICAgICBtZXRob2QgPSBzcGxpdGVkWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICB1cmwgPSBzcGxpdGVkWzFdO1xuICAgIH1cblxuICAgIGxldCBtYXJ0Y2hlcjogUmVnRXhwID0gbnVsbDtcbiAgICBsZXQgc2VnbWVudHM6IHN0cmluZ1tdID0gW107XG4gICAgaWYgKH51cmwuaW5kZXhPZignOicpKSB7XG4gICAgICBzZWdtZW50cyA9IHVybCFcbiAgICAgICAgLnNwbGl0KCcvJylcbiAgICAgICAgLmZpbHRlcihzZWdtZW50ID0+IHNlZ21lbnQuc3RhcnRzV2l0aCgnOicpKVxuICAgICAgICAubWFwKHYgPT4gdi5zdWJzdHJpbmcoMSkpO1xuICAgICAgY29uc3QgcmVTdHIgPSB1cmwhXG4gICAgICAgIC5zcGxpdCgnLycpXG4gICAgICAgIC5tYXAoc2VnbWVudCA9PiAoc2VnbWVudC5zdGFydHNXaXRoKCc6JykgPyBgKFteL10rKWAgOiBzZWdtZW50KSlcbiAgICAgICAgLmpvaW4oJy8nKTtcbiAgICAgIG1hcnRjaGVyID0gbmV3IFJlZ0V4cChyZVN0ciwgJ2knKTtcbiAgICB9IGVsc2UgaWYgKC8oXFwoW14pXStcXCkpL2kudGVzdCh1cmwpKSB7XG4gICAgICBtYXJ0Y2hlciA9IG5ldyBSZWdFeHAodXJsLCAnaScpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB1cmwsXG4gICAgICBtYXJ0Y2hlcixcbiAgICAgIHNlZ21lbnRzLFxuICAgICAgY2FsbGJhY2ssXG4gICAgICBtZXRob2Q6IG1ldGhvZC50b1VwcGVyQ2FzZSgpLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIG91dHB1dEVycm9yKGVycm9yOiBhbnkpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGVycm9yLm1lc3NhZ2Uuc3BsaXQoJzogJylbMF07XG4gICAgY29uc3QgZXJyb3JzID0gZXJyb3Iuc3RhY2tcbiAgICAgIC5zcGxpdCgnXFxuJylcbiAgICAgIC5maWx0ZXIobGluZSA9PiBsaW5lLnRyaW0oKS5pbmRleE9mKCdhdCAnKSAhPT0gMClcbiAgICAgIC5tYXAobGluZSA9PiBsaW5lLnJlcGxhY2UoYCR7ZmlsZVBhdGh9OiBgLCAnJykpO1xuICAgIGVycm9ycy5zcGxpY2UoMSwgMCwgWycnXSk7XG5cbiAgICBjb25zb2xlLmdyb3VwKCk7XG4gICAgY29uc29sZS53YXJuKGA9PT09PT09PT09RmFpbGVkIHRvIHBhcnNlIG1vY2sgY29uZmlnLj09PT09PT09PT1gKTtcbiAgICBjb25zb2xlLmxvZyhlcnJvcnMuam9pbignXFxuJykpO1xuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcblxuICAgIHRocm93IGVycm9yO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGdldFJ1bGUobWV0aG9kOiBzdHJpbmcsIHVybDogc3RyaW5nKTogTW9ja1J1bGUge1xuICAgIG1ldGhvZCA9IChtZXRob2QgfHwgJ0dFVCcpLnRvVXBwZXJDYXNlKCk7XG4gICAgY29uc3QgcGFyYW1zOiBhbnkgPSB7fTtcbiAgICBjb25zdCBsaXN0ID1cbiAgICAgIHRoaXMuY2FjaGVkLmZpbHRlcihcbiAgICAgICAgdyA9PlxuICAgICAgICAgIHcubWV0aG9kID09PSBtZXRob2QgJiZcbiAgICAgICAgICAody5tYXJ0Y2hlciA/IHcubWFydGNoZXIudGVzdCh1cmwpIDogdy51cmwgPT09IHVybCksXG4gICAgICApO1xuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgcmV0ID0gbGlzdC5maW5kKHcgPT4gdy51cmwgPT09IHVybCkgfHwgbGlzdFswXTtcbiAgICBpZiAocmV0Lm1hcnRjaGVyKSB7XG4gICAgICBjb25zdCBleGVjQXJyID0gcmV0Lm1hcnRjaGVyLmV4ZWModXJsKTtcbiAgICAgIGV4ZWNBcnIuc2xpY2UoMSkubWFwKCh2YWx1ZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIHBhcmFtc1tyZXQuc2VnbWVudHNbaW5kZXhdXSA9IHZhbHVlO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB1cmwsXG4gICAgICBtZXRob2Q6IHJldC5tZXRob2QsXG4gICAgICBwYXJhbXMsXG4gICAgICBjYWxsYmFjazogcmV0LmNhbGxiYWNrLFxuICAgIH07XG4gIH1cblxuICBjbGVhckNhY2hlKCkge1xuICAgIHRoaXMuY2FjaGVkID0gW107XG4gIH1cblxuICBnZXQgcnVsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FjaGVkO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckNhY2hlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBSZXF1ZXN0LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cFNlbnRFdmVudCxcbiAgSHR0cEhlYWRlclJlc3BvbnNlLFxuICBIdHRwUHJvZ3Jlc3NFdmVudCxcbiAgSHR0cFJlc3BvbnNlLFxuICBIdHRwVXNlckV2ZW50LFxuICBIdHRwRXJyb3JSZXNwb25zZSxcbiAgSHR0cEV2ZW50LFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlbGF5LCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IF9IdHRwQ2xpZW50IH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcblxuaW1wb3J0IHsgRGVsb25Nb2NrQ29uZmlnIH0gZnJvbSAnLi9tb2NrLmNvbmZpZyc7XG5pbXBvcnQgeyBNb2NrU2VydmljZSB9IGZyb20gJy4vbW9jay5zZXJ2aWNlJztcbmltcG9ydCB7IE1vY2tTdGF0dXNFcnJvciB9IGZyb20gJy4vc3RhdHVzLmVycm9yJztcbmltcG9ydCB7IE1vY2tSZXF1ZXN0IH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTW9ja0ludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHt9XG5cbiAgaW50ZXJjZXB0KFxuICAgIHJlcTogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlcixcbiAgKTogT2JzZXJ2YWJsZTxcbiAgICB8IEh0dHBTZW50RXZlbnRcbiAgICB8IEh0dHBIZWFkZXJSZXNwb25zZVxuICAgIHwgSHR0cFByb2dyZXNzRXZlbnRcbiAgICB8IEh0dHBSZXNwb25zZTxhbnk+XG4gICAgfCBIdHRwVXNlckV2ZW50PGFueT5cbiAgPiB7XG4gICAgY29uc3Qgc3JjID0gdGhpcy5pbmplY3Rvci5nZXQoTW9ja1NlcnZpY2UpO1xuICAgIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7XG4gICAgICAgIGRlbGF5OiAzMDAsXG4gICAgICAgIGZvcmNlOiBmYWxzZSxcbiAgICAgICAgbG9nOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHRoaXMuaW5qZWN0b3IuZ2V0KERlbG9uTW9ja0NvbmZpZywgbnVsbCksXG4gICAgKTtcbiAgICBjb25zdCBydWxlID0gc3JjLmdldFJ1bGUocmVxLm1ldGhvZCwgcmVxLnVybC5zcGxpdCgnPycpWzBdKTtcbiAgICBpZiAoIXJ1bGUgJiYgIWNvbmZpZy5mb3JjZSkge1xuICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSk7XG4gICAgfVxuXG4gICAgbGV0IHJlczogYW55O1xuICAgIHN3aXRjaCAodHlwZW9mIHJ1bGUuY2FsbGJhY2spIHtcbiAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgICAgY29uc3QgbW9ja1JlcXVlc3Q6IE1vY2tSZXF1ZXN0ID0ge1xuICAgICAgICAgIG9yaWdpbmFsOiByZXEsXG4gICAgICAgICAgYm9keTogcmVxLmJvZHksXG4gICAgICAgICAgcXVlcnlTdHJpbmc6IHt9LFxuICAgICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICAgIHBhcmFtczogcnVsZS5wYXJhbXMsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHVybFBhcmFtcyA9IHJlcS51cmwuc3BsaXQoJz8nKTtcbiAgICAgICAgaWYgKHVybFBhcmFtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgdXJsUGFyYW1zWzFdLnNwbGl0KCcmJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1BcnIgPSBpdGVtLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBpdGVtQXJyWzBdO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBpdGVtQXJyWzFdO1xuICAgICAgICAgICAgLy8gaXMgYXJyYXlcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhtb2NrUmVxdWVzdC5xdWVyeVN0cmluZykuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobW9ja1JlcXVlc3QucXVlcnlTdHJpbmdba2V5XSkpIHtcbiAgICAgICAgICAgICAgICBtb2NrUmVxdWVzdC5xdWVyeVN0cmluZ1trZXldID0gW21vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nW2tleV1dO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG1vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nW2tleV0ucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBtb2NrUmVxdWVzdC5xdWVyeVN0cmluZ1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVxLnBhcmFtc1xuICAgICAgICAgIC5rZXlzKClcbiAgICAgICAgICAuZm9yRWFjaChrZXkgPT4gKG1vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nW2tleV0gPSByZXEucGFyYW1zLmdldChrZXkpKSk7XG4gICAgICAgIHJlcS5oZWFkZXJzXG4gICAgICAgICAgLmtleXMoKVxuICAgICAgICAgIC5mb3JFYWNoKGtleSA9PiAobW9ja1JlcXVlc3QuaGVhZGVyc1trZXldID0gcmVxLmhlYWRlcnMuZ2V0KGtleSkpKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlcyA9IHJ1bGUuY2FsbGJhY2suY2FsbCh0aGlzLCBtb2NrUmVxdWVzdCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBsZXQgZXJyUmVzOiBIdHRwRXJyb3JSZXNwb25zZTtcbiAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIE1vY2tTdGF0dXNFcnJvcikge1xuICAgICAgICAgICAgZXJyUmVzID0gbmV3IEh0dHBFcnJvclJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgdXJsOiByZXEudXJsLFxuICAgICAgICAgICAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcbiAgICAgICAgICAgICAgc3RhdHVzOiBlLnN0YXR1cyxcbiAgICAgICAgICAgICAgc3RhdHVzVGV4dDogZS5zdGF0dXNUZXh0IHx8ICdVbmtub3duIEVycm9yJyxcbiAgICAgICAgICAgICAgZXJyb3I6IGUuZXJyb3IsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChjb25maWcubG9nKVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICBgJWPDsMKfwpLCgCR7cmVxLm1ldGhvZH0tPiR7cmVxLnVybH1gLFxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kOiMwMDA7Y29sb3I6I2JhZGE1NScsXG4gICAgICAgICAgICAgICAgZXJyUmVzLFxuICAgICAgICAgICAgICAgIHJlcSxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgIGAlY8Owwp/CksKAJHtyZXEubWV0aG9kfS0+JHtyZXEudXJsfWAsXG4gICAgICAgICAgICAgICdiYWNrZ3JvdW5kOiMwMDA7Y29sb3I6I2JhZGE1NScsXG4gICAgICAgICAgICAgIGBQbGVhc2UgdXNlIE1vY2tTdGF0dXNFcnJvciB0byB0aHJvdyBzdGF0dXMgZXJyb3JgLFxuICAgICAgICAgICAgICBlLFxuICAgICAgICAgICAgICByZXEsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxIdHRwRXZlbnQ8YW55Pj4pID0+IHtcbiAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVyclJlcyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXMgPSBydWxlLmNhbGxiYWNrO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCByZXNwb25zZTogSHR0cFJlc3BvbnNlPGFueT4gPSBuZXcgSHR0cFJlc3BvbnNlKHtcbiAgICAgIHN0YXR1czogMjAwLFxuICAgICAgYm9keTogcmVzLFxuICAgICAgdXJsOiByZXEudXJsLFxuICAgIH0pO1xuXG4gICAgaWYgKGNvbmZpZy5sb2cpIHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBgJWPDsMKfwpHCvSR7cmVxLm1ldGhvZH0tPiR7cmVxLnVybH0tPnJlcXVlc3RgLFxuICAgICAgICAnYmFja2dyb3VuZDojMDAwO2NvbG9yOiNiYWRhNTUnLFxuICAgICAgICByZXEsXG4gICAgICApO1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIGAlY8Owwp/CkcK9JHtyZXEubWV0aG9kfS0+JHtyZXEudXJsfS0+cmVzcG9uc2VgLFxuICAgICAgICAnYmFja2dyb3VuZDojMDAwO2NvbG9yOiNiYWRhNTUnLFxuICAgICAgICByZXNwb25zZSxcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IGhjID0gdGhpcy5pbmplY3Rvci5nZXQoX0h0dHBDbGllbnQsIG51bGwpO1xuICAgIGlmIChoYykge1xuICAgICAgaGMuYmVnaW4oKTtcbiAgICB9XG4gICAgcmV0dXJuIG9mKHJlc3BvbnNlKS5waXBlKFxuICAgICAgZGVsYXkoY29uZmlnLmRlbGF5KSxcbiAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgIGlmIChoYykge1xuICAgICAgICAgIGhjLmVuZCgpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IERlbG9uTW9ja0NvbmZpZyB9IGZyb20gJy4vbW9jay5jb25maWcnO1xuaW1wb3J0IHsgTW9ja1NlcnZpY2UgfSBmcm9tICcuL21vY2suc2VydmljZSc7XG5pbXBvcnQgeyBNb2NrSW50ZXJjZXB0b3IgfSBmcm9tICcuL21vY2suaW50ZXJjZXB0b3InO1xuXG5ATmdNb2R1bGUoe30pXG5leHBvcnQgY2xhc3MgRGVsb25Nb2NrTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBEZWxvbk1vY2tDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERlbG9uTW9ja01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBNb2NrU2VydmljZSxcbiAgICAgICAgeyBwcm92aWRlOiBEZWxvbk1vY2tDb25maWcsIHVzZVZhbHVlOiBjb25maWcgfSxcbiAgICAgICAgeyBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUywgdXNlQ2xhc3M6IE1vY2tJbnRlcmNlcHRvciwgbXVsdGk6IHRydWUgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JDaGlsZCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERlbG9uTW9ja01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogTW9ja0ludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZSB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBYSxlQUFlOzs7OztJQUUxQixZQUFtQixNQUFjLEVBQVMsS0FBVztRQUFsQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBTTtLQUFJO0NBQzFEOzs7Ozs7QUNIRCxNQUFhLGVBQWU7SUFBNUI7Ozs7UUFJRSxVQUFLLEdBQUksR0FBRyxDQUFDOzs7O1FBRWIsVUFBSyxHQUFJLEtBQUssQ0FBQzs7OztRQUVmLFFBQUcsR0FBSSxJQUFJLENBQUM7S0FDYjtDQUFBOzs7Ozs7QUNURCxNQUthLFdBQVc7Ozs7SUFHdEIsWUFBb0IsTUFBdUI7UUFBdkIs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