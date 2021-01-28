import { ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, Injector, ɵɵdefineNgModule, ɵɵdefineInjector, NgModule } from '@angular/core';
import { AlainConfigService, deepCopy } from '@delon/util';
import { HttpErrorResponse, HttpResponseBase, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { throwError, of } from 'rxjs';
import { delay } from 'rxjs/operators';

class MockStatusError {
    constructor(status, error) {
        this.status = status;
        this.error = error;
    }
}

const MOCK_DEFULAT_CONFIG = {
    data: null,
    delay: 300,
    force: false,
    log: true,
    executeOtherInterceptors: true,
};

class MockService {
    constructor(cogSrv) {
        this.cached = [];
        this.config = cogSrv.merge('mock', MOCK_DEFULAT_CONFIG);
        this.applyMock();
        delete this.config.data;
    }
    // #region parse rule
    applyMock() {
        this.cached = [];
        try {
            this.realApplyMock();
        }
        catch (e) {
            this.outputError(e);
        }
    }
    realApplyMock() {
        const data = this.config.data;
        if (!data)
            return;
        Object.keys(data).forEach((key) => {
            const rules = data[key];
            if (!rules)
                return;
            Object.keys(rules).forEach((ruleKey) => {
                const value = rules[ruleKey];
                if (!(typeof value === 'function' || typeof value === 'object' || typeof value === 'string')) {
                    throw Error(`mock value of [${key}-${ruleKey}] should be function or object or string, but got ${typeof value}`);
                }
                const rule = this.genRule(ruleKey, value);
                if (['GET', 'POST', 'PUT', 'HEAD', 'DELETE', 'PATCH', 'OPTIONS'].indexOf(rule.method) === -1) {
                    throw Error(`method of ${key}-${ruleKey} is not valid`);
                }
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
        this.cached.sort((a, b) => (b.martcher || '').toString().length - (a.martcher || '').toString().length);
    }
    genRule(key, callback) {
        let method = 'GET';
        let url = key;
        if (key.indexOf(' ') > -1) {
            const splited = key.split(' ');
            method = splited[0].toLowerCase();
            url = splited[1];
        }
        let martcher = null;
        let segments = [];
        if (~url.indexOf(':')) {
            segments = url
                .split('/')
                .filter(segment => segment.startsWith(':'))
                .map(v => v.substring(1));
            const reStr = url
                .split('/')
                .map(segment => (segment.startsWith(':') ? `([^/]+)` : segment))
                .join('/');
            martcher = new RegExp(`^${reStr}`, 'i');
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
    outputError(error) {
        const filePath = error.message.split(': ')[0];
        const errors = error.stack
            .split('\n')
            .filter(line => line.trim().indexOf('at ') !== 0)
            .map(line => line.replace(`${filePath}: `, ''));
        errors.splice(1, 0, '');
        console.group();
        console.warn(`==========Failed to parse mock config.==========`);
        console.log(errors.join('\n'));
        console.groupEnd();
        throw error;
    }
    // #endregion
    getRule(method, url) {
        method = (method || 'GET').toUpperCase();
        const params = {};
        const list = this.cached.filter(w => w.method === method && (w.martcher ? w.martcher.test(url) : w.url === url));
        if (list.length === 0)
            return null;
        const ret = list.find(w => w.url === url) || list[0];
        if (ret.martcher) {
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
    clearCache() {
        this.cached = [];
    }
    get rules() {
        return this.cached;
    }
    ngOnDestroy() {
        this.clearCache();
    }
}
/** @nocollapse */ MockService.ɵfac = function MockService_Factory(t) { return new (t || MockService)(ɵɵinject(AlainConfigService)); };
/** @nocollapse */ MockService.ɵprov = ɵɵdefineInjectable({ token: MockService, factory: MockService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MockService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: AlainConfigService }]; }, null); })();

class HttpMockInterceptorHandler {
    constructor(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    handle(req) {
        return this.interceptor.intercept(req, this.next);
    }
}
class MockInterceptor {
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
                    params: rule.params,
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
                        error: e.error,
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
                body: res,
            });
        }
        if (res.body) {
            res.body = deepCopy(res.body);
        }
        if (config.log) {
            console.log(`%c👽${req.method}->${req.urlWithParams}->request`, 'background:#000;color:#bada55', req);
            console.log(`%c👽${req.method}->${req.urlWithParams}->response`, 'background:#000;color:#bada55', res);
        }
        const res$ = res instanceof HttpErrorResponse ? throwError(res) : of(res);
        if (config.executeOtherInterceptors) {
            const interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
            const lastInterceptors = interceptors.slice(interceptors.indexOf(this) + 1);
            if (lastInterceptors.length > 0) {
                const chain = lastInterceptors.reduceRight((_next, _interceptor) => new HttpMockInterceptorHandler(_next, _interceptor), {
                    handle: () => res$,
                });
                return chain.handle(req).pipe(delay(config.delay));
            }
        }
        return res$.pipe(delay(config.delay));
    }
}
/** @nocollapse */ MockInterceptor.ɵfac = function MockInterceptor_Factory(t) { return new (t || MockInterceptor)(ɵɵinject(Injector)); };
/** @nocollapse */ MockInterceptor.ɵprov = ɵɵdefineInjectable({ token: MockInterceptor, factory: MockInterceptor.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MockInterceptor, [{
        type: Injectable
    }], function () { return [{ type: Injector }]; }, null); })();

class DelonMockModule {
    static forRoot() {
        return {
            ngModule: DelonMockModule,
            providers: [{ provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true }],
        };
    }
    static forChild() {
        return {
            ngModule: DelonMockModule,
            providers: [{ provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true }],
        };
    }
}
/** @nocollapse */ DelonMockModule.ɵmod = ɵɵdefineNgModule({ type: DelonMockModule });
/** @nocollapse */ DelonMockModule.ɵinj = ɵɵdefineInjector({ factory: function DelonMockModule_Factory(t) { return new (t || DelonMockModule)(); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DelonMockModule, [{
        type: NgModule,
        args: [{}]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { DelonMockModule, MockInterceptor, MockService, MockStatusError };
//# sourceMappingURL=mock.js.map
