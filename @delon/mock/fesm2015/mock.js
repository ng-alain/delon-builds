import { Injectable, Injector, NgModule } from '@angular/core';
import { HttpResponse, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            segments = /** @type {?} */ ((url)).split('/').filter(segment => segment.startsWith(':')).map(v => v.substring(1));
            /** @type {?} */
            const reStr = /** @type {?} */ ((url)).split('/').map(segment => (segment.startsWith(':') ? `([^/]+)` : segment)).join('/');
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { MockStatusError, MockService, MockInterceptor, DelonMockConfig, DelonMockModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL21vY2svc3JjL3N0YXR1cy5lcnJvci50cyIsIm5nOi8vQGRlbG9uL21vY2svc3JjL21vY2suY29uZmlnLnRzIiwibmc6Ly9AZGVsb24vbW9jay9zcmMvbW9jay5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vbW9jay9zcmMvbW9jay5pbnRlcmNlcHRvci50cyIsIm5nOi8vQGRlbG9uL21vY2svc3JjL21vY2subW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBNb2NrU3RhdHVzRXJyb3Ige1xyXG4gIHN0YXR1c1RleHQ6IHN0cmluZztcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3RhdHVzOiBudW1iZXIsIHB1YmxpYyBlcnJvcj86IGFueSkge31cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgRGVsb25Nb2NrQ29uZmlnIHtcclxuICAvKiogw6jCp8KEw6XCiMKZw6XCrsKaw6TCucKJw6bClcKww6bCjcKuICovXHJcbiAgZGF0YTogYW55O1xyXG4gIC8qKiDDqMKvwrfDpsKxwoLDpcK7wrbDqMK/wp/Dr8K8wozDpcKNwpXDpMK9wo3Dr8K8wprDpsKvwqvDp8KnwpLDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgMzAwYCAqL1xyXG4gIGRlbGF5PyA9IDMwMDtcclxuICAvKiogw6bCmMKvw6XCkMKmw6XCvMK6w6XCiMK2w6bCicKAw6bCnMKJw6jCr8K3w6bCscKCw6nCg8K9TW9ja8OvwrzCjGB0cnVlYCDDqMKhwqjDp8KkwrrDpcK9wpPDqMKvwrfDpsKxwoLDp8KawoRVUkzDpMK4wo3DpcKtwpjDpcKcwqjDpsKXwrbDp8KbwrTDpsKOwqXDqMK/wpTDpcKbwp4gNDA0IMOpwpTCmcOowq/Cr8OvwrzCjGBmYWxzZWAgw6jCocKow6fCpMK6w6bCnMKqw6XCkcK9w6TCuMKtw6bCl8K2w6XCj8KRw6nCgMKBw6fCnMKfw6XCrsKeSFRUUMOowq/Ct8OmwrHCgiAqL1xyXG4gIGZvcmNlPyA9IGZhbHNlO1xyXG4gIC8qKiDDpsKYwq/DpcKQwqbDpsKJwpPDpcKNwrAgTW9jayDDqMKvwrfDpsKxwoLDpMK/wqHDpsKBwq/Dr8K8wozDpcK8wqXDqMKhwqXDpsK1wo/DqMKnwojDpcKZwqjDpsKXwqBOZXR3b3Jrw6TCv8Khw6bCgcKvICovXHJcbiAgbG9nPyA9IHRydWU7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERlbG9uTW9ja0NvbmZpZyB9IGZyb20gJy4vbW9jay5jb25maWcnO1xyXG5pbXBvcnQgeyBNb2NrQ2FjaGVkUnVsZSwgTW9ja1J1bGUgfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNb2NrU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBjYWNoZWQ6IE1vY2tDYWNoZWRSdWxlW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWc6IERlbG9uTW9ja0NvbmZpZykge1xyXG4gICAgdGhpcy5hcHBseU1vY2soKTtcclxuICAgIGRlbGV0ZSB0aGlzLmNvbmZpZy5kYXRhO1xyXG4gIH1cclxuXHJcbiAgLy8gcmVnaW9uOiBwYXJzZSBydWxlXHJcblxyXG4gIHByaXZhdGUgYXBwbHlNb2NrKCkge1xyXG4gICAgdGhpcy5jYWNoZWQgPSBbXTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMucmVhbEFwcGx5TW9jaygpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB0aGlzLm91dHB1dEVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWFsQXBwbHlNb2NrKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29uZmlnLmRhdGE7XHJcbiAgICBpZiAoIWRhdGEpIHJldHVybjtcclxuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJ1bGVzID0gZGF0YVtrZXldO1xyXG4gICAgICBpZiAoIXJ1bGVzKSByZXR1cm47XHJcbiAgICAgIE9iamVjdC5rZXlzKHJ1bGVzKS5mb3JFYWNoKChydWxlS2V5OiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1bGVzW3J1bGVLZXldO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICEoXHJcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyB8fFxyXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnIHx8XHJcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcclxuICAgICAgICAgIClcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRocm93IEVycm9yKFxyXG4gICAgICAgICAgICBgbW9jayB2YWx1ZSBvZiBbJHtrZXl9LSR7cnVsZUtleX1dIHNob3VsZCBiZSBmdW5jdGlvbiBvciBvYmplY3Qgb3Igc3RyaW5nLCBidXQgZ290ICR7dHlwZW9mIHZhbHVlfWAsXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBydWxlID0gdGhpcy5nZW5SdWxlKHJ1bGVLZXksIHZhbHVlKTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBbJ0dFVCcsICdQT1NUJywgJ1BVVCcsICdIRUFEJywgJ0RFTEVURScsICdQQVRDSCcsICdPUFRJT05TJ10uaW5kZXhPZihcclxuICAgICAgICAgICAgcnVsZS5tZXRob2QsXHJcbiAgICAgICAgICApID09PSAtMVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhyb3cgRXJyb3IoYG1ldGhvZCBvZiAke2tleX0tJHtydWxlS2V5fSBpcyBub3QgdmFsaWRgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuY2FjaGVkLmZpbmQoXHJcbiAgICAgICAgICB3ID0+IHcudXJsID09PSBydWxlLnVybCAmJiB3Lm1ldGhvZCA9PT0gcnVsZS5tZXRob2QsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgICAgaXRlbS5jYWxsYmFjayA9IHJ1bGUuY2FsbGJhY2s7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY2FjaGVkLnB1c2gocnVsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgLy8gcmVndWxhciBvcmRlcmluZ1xyXG4gICAgdGhpcy5jYWNoZWQuc29ydChcclxuICAgICAgKGEsIGIpID0+XHJcbiAgICAgICAgKGIubWFydGNoZXIgfHwgJycpLnRvU3RyaW5nKCkubGVuZ3RoIC1cclxuICAgICAgICAoYS5tYXJ0Y2hlciB8fCAnJykudG9TdHJpbmcoKS5sZW5ndGgsXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5SdWxlKGtleTogc3RyaW5nLCBjYWxsYmFjazogYW55KTogTW9ja0NhY2hlZFJ1bGUge1xyXG4gICAgbGV0IG1ldGhvZCA9ICdHRVQnO1xyXG4gICAgbGV0IHVybCA9IGtleTtcclxuXHJcbiAgICBpZiAoa2V5LmluZGV4T2YoJyAnKSA+IC0xKSB7XHJcbiAgICAgIGNvbnN0IHNwbGl0ZWQgPSBrZXkuc3BsaXQoJyAnKTtcclxuICAgICAgbWV0aG9kID0gc3BsaXRlZFswXS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICB1cmwgPSBzcGxpdGVkWzFdO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBtYXJ0Y2hlcjogUmVnRXhwID0gbnVsbDtcclxuICAgIGxldCBzZWdtZW50czogc3RyaW5nW10gPSBbXTtcclxuICAgIGlmICh+dXJsLmluZGV4T2YoJzonKSkge1xyXG4gICAgICBzZWdtZW50cyA9IHVybCFcclxuICAgICAgICAuc3BsaXQoJy8nKVxyXG4gICAgICAgIC5maWx0ZXIoc2VnbWVudCA9PiBzZWdtZW50LnN0YXJ0c1dpdGgoJzonKSlcclxuICAgICAgICAubWFwKHYgPT4gdi5zdWJzdHJpbmcoMSkpO1xyXG4gICAgICBjb25zdCByZVN0ciA9IHVybCFcclxuICAgICAgICAuc3BsaXQoJy8nKVxyXG4gICAgICAgIC5tYXAoc2VnbWVudCA9PiAoc2VnbWVudC5zdGFydHNXaXRoKCc6JykgPyBgKFteL10rKWAgOiBzZWdtZW50KSlcclxuICAgICAgICAuam9pbignLycpO1xyXG4gICAgICBtYXJ0Y2hlciA9IG5ldyBSZWdFeHAocmVTdHIsICdpJyk7XHJcbiAgICB9IGVsc2UgaWYgKC8oXFwoW14pXStcXCkpL2kudGVzdCh1cmwpKSB7XHJcbiAgICAgIG1hcnRjaGVyID0gbmV3IFJlZ0V4cCh1cmwsICdpJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXJsLFxyXG4gICAgICBtYXJ0Y2hlcixcclxuICAgICAgc2VnbWVudHMsXHJcbiAgICAgIGNhbGxiYWNrLFxyXG4gICAgICBtZXRob2Q6IG1ldGhvZC50b1VwcGVyQ2FzZSgpLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb3V0cHV0RXJyb3IoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc3QgZmlsZVBhdGggPSBlcnJvci5tZXNzYWdlLnNwbGl0KCc6ICcpWzBdO1xyXG4gICAgY29uc3QgZXJyb3JzID0gZXJyb3Iuc3RhY2tcclxuICAgICAgLnNwbGl0KCdcXG4nKVxyXG4gICAgICAuZmlsdGVyKGxpbmUgPT4gbGluZS50cmltKCkuaW5kZXhPZignYXQgJykgIT09IDApXHJcbiAgICAgIC5tYXAobGluZSA9PiBsaW5lLnJlcGxhY2UoYCR7ZmlsZVBhdGh9OiBgLCAnJykpO1xyXG4gICAgZXJyb3JzLnNwbGljZSgxLCAwLCBbJyddKTtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwKCk7XHJcbiAgICBjb25zb2xlLndhcm4oYD09PT09PT09PT1GYWlsZWQgdG8gcGFyc2UgbW9jayBjb25maWcuPT09PT09PT09PWApO1xyXG4gICAgY29uc29sZS5sb2coZXJyb3JzLmpvaW4oJ1xcbicpKTtcclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxuXHJcbiAgICB0aHJvdyBlcnJvcjtcclxuICB9XHJcblxyXG4gIC8vIGVuZHJlZ2lvblxyXG5cclxuICBnZXRSdWxlKG1ldGhvZDogc3RyaW5nLCB1cmw6IHN0cmluZyk6IE1vY2tSdWxlIHtcclxuICAgIG1ldGhvZCA9IChtZXRob2QgfHwgJ0dFVCcpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICBjb25zdCBwYXJhbXM6IGFueSA9IHt9O1xyXG4gICAgY29uc3QgbGlzdCA9XHJcbiAgICAgIHRoaXMuY2FjaGVkLmZpbHRlcihcclxuICAgICAgICB3ID0+XHJcbiAgICAgICAgICB3Lm1ldGhvZCA9PT0gbWV0aG9kICYmXHJcbiAgICAgICAgICAody5tYXJ0Y2hlciA/IHcubWFydGNoZXIudGVzdCh1cmwpIDogdy51cmwgPT09IHVybCksXHJcbiAgICAgICk7XHJcbiAgICBpZiAobGlzdC5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xyXG4gICAgY29uc3QgcmV0ID0gbGlzdC5maW5kKHcgPT4gdy51cmwgPT09IHVybCkgfHwgbGlzdFswXTtcclxuICAgIGlmIChyZXQubWFydGNoZXIpIHtcclxuICAgICAgY29uc3QgZXhlY0FyciA9IHJldC5tYXJ0Y2hlci5leGVjKHVybCk7XHJcbiAgICAgIGV4ZWNBcnIuc2xpY2UoMSkubWFwKCh2YWx1ZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgcGFyYW1zW3JldC5zZWdtZW50c1tpbmRleF1dID0gdmFsdWU7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXJsLFxyXG4gICAgICBtZXRob2Q6IHJldC5tZXRob2QsXHJcbiAgICAgIHBhcmFtcyxcclxuICAgICAgY2FsbGJhY2s6IHJldC5jYWxsYmFjayxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjbGVhckNhY2hlKCkge1xyXG4gICAgdGhpcy5jYWNoZWQgPSBbXTtcclxuICB9XHJcblxyXG4gIGdldCBydWxlcygpIHtcclxuICAgIHJldHVybiB0aGlzLmNhY2hlZDtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGVhckNhY2hlKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgSHR0cEludGVyY2VwdG9yLFxyXG4gIEh0dHBSZXF1ZXN0LFxyXG4gIEh0dHBIYW5kbGVyLFxyXG4gIEh0dHBTZW50RXZlbnQsXHJcbiAgSHR0cEhlYWRlclJlc3BvbnNlLFxyXG4gIEh0dHBQcm9ncmVzc0V2ZW50LFxyXG4gIEh0dHBSZXNwb25zZSxcclxuICBIdHRwVXNlckV2ZW50LFxyXG4gIEh0dHBFcnJvclJlc3BvbnNlLFxyXG4gIEh0dHBFdmVudCxcclxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWxheSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IERlbG9uTW9ja0NvbmZpZyB9IGZyb20gJy4vbW9jay5jb25maWcnO1xyXG5pbXBvcnQgeyBNb2NrU2VydmljZSB9IGZyb20gJy4vbW9jay5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTW9ja1N0YXR1c0Vycm9yIH0gZnJvbSAnLi9zdGF0dXMuZXJyb3InO1xyXG5pbXBvcnQgeyBNb2NrUmVxdWVzdCB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1vY2tJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHt9XHJcblxyXG4gIGludGVyY2VwdChcclxuICAgIHJlcTogSHR0cFJlcXVlc3Q8YW55PixcclxuICAgIG5leHQ6IEh0dHBIYW5kbGVyLFxyXG4gICk6IE9ic2VydmFibGU8XHJcbiAgICB8IEh0dHBTZW50RXZlbnRcclxuICAgIHwgSHR0cEhlYWRlclJlc3BvbnNlXHJcbiAgICB8IEh0dHBQcm9ncmVzc0V2ZW50XHJcbiAgICB8IEh0dHBSZXNwb25zZTxhbnk+XHJcbiAgICB8IEh0dHBVc2VyRXZlbnQ8YW55PlxyXG4gID4ge1xyXG4gICAgY29uc3Qgc3JjID0gdGhpcy5pbmplY3Rvci5nZXQoTW9ja1NlcnZpY2UpO1xyXG4gICAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAge1xyXG4gICAgICAgIGRlbGF5OiAzMDAsXHJcbiAgICAgICAgZm9yY2U6IGZhbHNlLFxyXG4gICAgICAgIGxvZzogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgdGhpcy5pbmplY3Rvci5nZXQoRGVsb25Nb2NrQ29uZmlnLCBudWxsKSxcclxuICAgICk7XHJcbiAgICBjb25zdCBydWxlID0gc3JjLmdldFJ1bGUocmVxLm1ldGhvZCwgcmVxLnVybC5zcGxpdCgnPycpWzBdKTtcclxuICAgIGlmICghcnVsZSAmJiAhY29uZmlnLmZvcmNlKSB7XHJcbiAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCByZXM6IGFueTtcclxuICAgIHN3aXRjaCAodHlwZW9mIHJ1bGUuY2FsbGJhY2spIHtcclxuICAgICAgY2FzZSAnZnVuY3Rpb24nOlxyXG4gICAgICAgIGNvbnN0IG1vY2tSZXF1ZXN0OiBNb2NrUmVxdWVzdCA9IHtcclxuICAgICAgICAgIG9yaWdpbmFsOiByZXEsXHJcbiAgICAgICAgICBib2R5OiByZXEuYm9keSxcclxuICAgICAgICAgIHF1ZXJ5U3RyaW5nOiB7fSxcclxuICAgICAgICAgIGhlYWRlcnM6IHt9LFxyXG4gICAgICAgICAgcGFyYW1zOiBydWxlLnBhcmFtcyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHVybFBhcmFtcyA9IHJlcS51cmwuc3BsaXQoJz8nKTtcclxuICAgICAgICBpZiAodXJsUGFyYW1zLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgIHVybFBhcmFtc1sxXS5zcGxpdCgnJicpLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1BcnIgPSBpdGVtLnNwbGl0KCc9Jyk7XHJcbiAgICAgICAgICAgIG1vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nW2l0ZW1BcnJbMF1dID0gaXRlbUFyclsxXTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXEucGFyYW1zXHJcbiAgICAgICAgICAua2V5cygpXHJcbiAgICAgICAgICAuZm9yRWFjaChrZXkgPT4gKG1vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nW2tleV0gPSByZXEucGFyYW1zLmdldChrZXkpKSk7XHJcbiAgICAgICAgcmVxLmhlYWRlcnNcclxuICAgICAgICAgIC5rZXlzKClcclxuICAgICAgICAgIC5mb3JFYWNoKGtleSA9PiAobW9ja1JlcXVlc3QuaGVhZGVyc1trZXldID0gcmVxLmhlYWRlcnMuZ2V0KGtleSkpKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHJlcyA9IHJ1bGUuY2FsbGJhY2suY2FsbCh0aGlzLCBtb2NrUmVxdWVzdCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgbGV0IGVyclJlczogSHR0cEVycm9yUmVzcG9uc2U7XHJcbiAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIE1vY2tTdGF0dXNFcnJvcikge1xyXG4gICAgICAgICAgICBlcnJSZXMgPSBuZXcgSHR0cEVycm9yUmVzcG9uc2Uoe1xyXG4gICAgICAgICAgICAgIHVybDogcmVxLnVybCxcclxuICAgICAgICAgICAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcclxuICAgICAgICAgICAgICBzdGF0dXM6IGUuc3RhdHVzLFxyXG4gICAgICAgICAgICAgIHN0YXR1c1RleHQ6IGUuc3RhdHVzVGV4dCB8fCAnVW5rbm93biBFcnJvcicsXHJcbiAgICAgICAgICAgICAgZXJyb3I6IGUuZXJyb3IsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmxvZylcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgIGAlYyDDsMKfwpHCvU1PQ0sgJHtlLnN0YXR1c30gU1RBVFVTIGAsXHJcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZDojMDAwO2NvbG9yOiNiYWRhNTUnLFxyXG4gICAgICAgICAgICAgICAgcmVxLnVybCxcclxuICAgICAgICAgICAgICAgIGVyclJlcyxcclxuICAgICAgICAgICAgICAgIHJlcSxcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICAgICAgICBgUGxlYXNlIHVzZSBNb2NrU3RhdHVzRXJyb3IgdG8gdGhyb3cgc3RhdHVzIGVycm9yYCxcclxuICAgICAgICAgICAgICBlLFxyXG4gICAgICAgICAgICAgIHJlcSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPEh0dHBFdmVudDxhbnk+PikgPT4ge1xyXG4gICAgICAgICAgICBvYnNlcnZlci5lcnJvcihlcnJSZXMpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJlcyA9IHJ1bGUuY2FsbGJhY2s7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2U6IEh0dHBSZXNwb25zZTxhbnk+ID0gbmV3IEh0dHBSZXNwb25zZSh7XHJcbiAgICAgIHN0YXR1czogMjAwLFxyXG4gICAgICBib2R5OiByZXMsXHJcbiAgICAgIHVybDogcmVxLnVybCxcclxuICAgIH0pO1xyXG4gICAgaWYgKGNvbmZpZy5sb2cpXHJcbiAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICclYyDDsMKfwpHCvU1PQ0sgJyxcclxuICAgICAgICAnYmFja2dyb3VuZDojMDAwO2NvbG9yOiNiYWRhNTUnLFxyXG4gICAgICAgIHJlcS51cmwsXHJcbiAgICAgICAgcmVzcG9uc2UsXHJcbiAgICAgICAgcmVxLFxyXG4gICAgICApO1xyXG4gICAgcmV0dXJuIG9mKHJlc3BvbnNlKS5waXBlKGRlbGF5KGNvbmZpZy5kZWxheSkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbmltcG9ydCB7IERlbG9uTW9ja0NvbmZpZyB9IGZyb20gJy4vbW9jay5jb25maWcnO1xyXG5pbXBvcnQgeyBNb2NrU2VydmljZSB9IGZyb20gJy4vbW9jay5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTW9ja0ludGVyY2VwdG9yIH0gZnJvbSAnLi9tb2NrLmludGVyY2VwdG9yJztcclxuXHJcbkBOZ01vZHVsZSh7fSlcclxuZXhwb3J0IGNsYXNzIERlbG9uTW9ja01vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBEZWxvbk1vY2tDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBEZWxvbk1vY2tNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIE1vY2tTZXJ2aWNlLFxyXG4gICAgICAgIHsgcHJvdmlkZTogRGVsb25Nb2NrQ29uZmlnLCB1c2VWYWx1ZTogY29uZmlnIH0sXHJcbiAgICAgICAgeyBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUywgdXNlQ2xhc3M6IE1vY2tJbnRlcmNlcHRvciwgbXVsdGk6IHRydWUgfSxcclxuICAgICAgXSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZm9yQ2hpbGQoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogRGVsb25Nb2NrTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogTW9ja0ludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZSB9LFxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7OztJQUVFLFlBQW1CLE1BQWMsRUFBUyxLQUFXO1FBQWxDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFNO0tBQUk7Q0FDMUQ7Ozs7OztBQ0hEOzs7OztxQkFJVyxHQUFHOzs7O3FCQUVILEtBQUs7Ozs7bUJBRVAsSUFBSTs7Q0FDWjs7Ozs7O0FDVEQ7Ozs7SUFRRSxZQUFvQixNQUF1QjtRQUF2QixXQUFNLEdBQU4sTUFBTSxDQUFpQjtzQkFGUixFQUFFO1FBR25DLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0tBQ3pCOzs7O0lBSU8sU0FBUztRQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUk7WUFDRixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckI7Ozs7O0lBR0ssYUFBYTs7UUFDbkIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0s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