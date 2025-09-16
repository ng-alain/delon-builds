import * as i0 from '@angular/core';
import { InjectionToken, makeEnvironmentProviders, inject, Injectable } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { HttpErrorResponse, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { of, from, isObservable, map, switchMap, throwError, delay as delay$1 } from 'rxjs';
import { deepCopy } from '@delon/util/other';

class MockStatusError {
    status;
    error;
    statusText;
    constructor(status, error) {
        this.status = status;
        this.error = error;
    }
}

const MOCK_DEFULAT_CONFIG = {
    delay: 300,
    force: false,
    log: true
};

const DELON_MOCK_CONFIG = new InjectionToken('alain-mock-config');
function provideMockConfig(config) {
    return makeEnvironmentProviders([{ provide: DELON_MOCK_CONFIG, useValue: config }]);
}

class MockService {
    cogSrv = inject(AlainConfigService);
    options = inject(DELON_MOCK_CONFIG, { optional: true });
    cached = [];
    config;
    constructor() {
        this.config = this.cogSrv.merge('mock', MOCK_DEFULAT_CONFIG);
        this.setData(this.options?.data);
    }
    /**
     * Reset request data
     *
     * 重新设置请求数据
     */
    setData(data) {
        this.applyMock(data);
    }
    // #region parse rule
    applyMock(data) {
        this.cached = [];
        try {
            this.realApplyMock(data);
        }
        catch (e) {
            this.outputError(e);
        }
    }
    realApplyMock(data) {
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
            method: method.toUpperCase()
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
            callback: ret.callback
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: MockService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: MockService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: MockService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [] });

const mockInterceptor = (req, next) => {
    const src = inject(MockService);
    const config = src.config;
    const rule = src.getRule(req.method, req.url.split('?')[0]);
    if (!rule && !config.force) {
        return next(req);
    }
    let res$;
    switch (typeof rule.callback) {
        case 'function': {
            const mockRequest = {
                original: req,
                body: req.body,
                queryString: {},
                headers: {},
                params: rule.params
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
                const fnRes = rule.callback.call(this, mockRequest);
                res$ = isObservable(fnRes) ? fnRes : from(Promise.resolve(fnRes));
            }
            catch (e) {
                res$ = of(new HttpErrorResponse({
                    url: req.url,
                    headers: req.headers,
                    status: e instanceof MockStatusError ? e.status : 400,
                    statusText: e.statusText || 'Unknown Error',
                    error: e.error
                }));
            }
            break;
        }
        default:
            res$ = of(rule.callback);
            break;
    }
    res$ = res$.pipe(map(res => {
        return res instanceof HttpResponseBase
            ? res
            : new HttpResponse({
                status: 200,
                url: req.url,
                body: deepCopy(res)
            });
    }), map((res) => {
        const anyRes = res;
        if (anyRes.body) {
            anyRes.body = deepCopy(anyRes.body);
        }
        if (config.log) {
            console.log(`%c👽${req.method}->${req.urlWithParams}->request`, 'background:#000;color:#bada55', req);
            console.log(`%c👽${req.method}->${req.urlWithParams}->response`, 'background:#000;color:#bada55', res);
        }
        return res;
    }), switchMap((res) => (res instanceof HttpErrorResponse ? throwError(() => res) : of(res))));
    return res$.pipe(delay$1(config.delay));
};

/**
 * Used to simulate delays
 */
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
/**
 * Return a random number
 */
function r(min = 1, max = 100) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Generated bundle index. Do not edit.
 */

export { DELON_MOCK_CONFIG, MockService, MockStatusError, delay, mockInterceptor, provideMockConfig, r };
//# sourceMappingURL=mock.mjs.map
