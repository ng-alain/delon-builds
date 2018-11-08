import { Injectable, Injector, NgModule } from '@angular/core';
import { HttpResponse, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MockStatusError = /** @class */ (function () {
    function MockStatusError(status, error) {
        this.status = status;
        this.error = error;
    }
    return MockStatusError;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DelonMockConfig = /** @class */ (function () {
    function DelonMockConfig() {
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
    return DelonMockConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MockService = /** @class */ (function () {
    function MockService(config) {
        this.config = config;
        this.cached = [];
        this.applyMock();
        delete this.config.data;
    }
    /**
     * @return {?}
     */
    MockService.prototype.applyMock = /**
     * @return {?}
     */
    function () {
        this.cached = [];
        try {
            this.realApplyMock();
        }
        catch (e) {
            this.outputError(e);
        }
    };
    /**
     * @return {?}
     */
    MockService.prototype.realApplyMock = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var data = this.config.data;
        if (!data)
            return;
        Object.keys(data).forEach(function (key) {
            /** @type {?} */
            var rules = data[key];
            if (!rules)
                return;
            Object.keys(rules).forEach(function (ruleKey) {
                /** @type {?} */
                var value = rules[ruleKey];
                if (!(typeof value === 'function' ||
                    typeof value === 'object' ||
                    typeof value === 'string')) {
                    throw Error("mock value of [" + key + "-" + ruleKey + "] should be function or object or string, but got " + typeof value);
                }
                /** @type {?} */
                var rule = _this.genRule(ruleKey, value);
                if (['GET', 'POST', 'PUT', 'HEAD', 'DELETE', 'PATCH', 'OPTIONS'].indexOf(rule.method) === -1) {
                    throw Error("method of " + key + "-" + ruleKey + " is not valid");
                }
                /** @type {?} */
                var item = _this.cached.find(function (w) { return w.url === rule.url && w.method === rule.method; });
                if (item) {
                    item.callback = rule.callback;
                }
                else {
                    _this.cached.push(rule);
                }
            });
        });
        // regular ordering
        this.cached.sort(function (a, b) {
            return (b.martcher || '').toString().length -
                (a.martcher || '').toString().length;
        });
    };
    /**
     * @param {?} key
     * @param {?} callback
     * @return {?}
     */
    MockService.prototype.genRule = /**
     * @param {?} key
     * @param {?} callback
     * @return {?}
     */
    function (key, callback) {
        /** @type {?} */
        var method = 'GET';
        /** @type {?} */
        var url = key;
        if (key.indexOf(' ') > -1) {
            /** @type {?} */
            var splited = key.split(' ');
            method = splited[0].toLowerCase();
            url = splited[1];
        }
        /** @type {?} */
        var martcher = null;
        /** @type {?} */
        var segments = [];
        if (~url.indexOf(':')) {
            segments = /** @type {?} */ ((url)).split('/').filter(function (segment) { return segment.startsWith(':'); }).map(function (v) { return v.substring(1); });
            /** @type {?} */
            var reStr = /** @type {?} */ ((url)).split('/').map(function (segment) { return (segment.startsWith(':') ? "([^/]+)" : segment); }).join('/');
            martcher = new RegExp(reStr, 'i');
        }
        else if (/(\([^)]+\))/i.test(url)) {
            martcher = new RegExp(url, 'i');
        }
        return {
            url: url,
            martcher: martcher,
            segments: segments,
            callback: callback,
            method: method.toUpperCase(),
        };
    };
    /**
     * @param {?} error
     * @return {?}
     */
    MockService.prototype.outputError = /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        /** @type {?} */
        var filePath = error.message.split(': ')[0];
        /** @type {?} */
        var errors = error.stack
            .split('\n')
            .filter(function (line) { return line.trim().indexOf('at ') !== 0; })
            .map(function (line) { return line.replace(filePath + ": ", ''); });
        errors.splice(1, 0, ['']);
        console.group();
        console.warn("==========Failed to parse mock config.==========");
        console.log(errors.join('\n'));
        console.groupEnd();
        throw error;
    };
    // #endregion
    /**
     * @param {?} method
     * @param {?} url
     * @return {?}
     */
    MockService.prototype.getRule = /**
     * @param {?} method
     * @param {?} url
     * @return {?}
     */
    function (method, url) {
        method = (method || 'GET').toUpperCase();
        /** @type {?} */
        var params = {};
        /** @type {?} */
        var list = this.cached.filter(function (w) {
            return w.method === method &&
                (w.martcher ? w.martcher.test(url) : w.url === url);
        });
        if (list.length === 0)
            return null;
        /** @type {?} */
        var ret = list.find(function (w) { return w.url === url; }) || list[0];
        if (ret.martcher) {
            /** @type {?} */
            var execArr = ret.martcher.exec(url);
            execArr.slice(1).map(function (value, index) {
                params[ret.segments[index]] = value;
            });
        }
        return {
            url: url,
            method: ret.method,
            params: params,
            callback: ret.callback,
        };
    };
    /**
     * @return {?}
     */
    MockService.prototype.clearCache = /**
     * @return {?}
     */
    function () {
        this.cached = [];
    };
    Object.defineProperty(MockService.prototype, "rules", {
        get: /**
         * @return {?}
         */
        function () {
            return this.cached;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MockService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.clearCache();
    };
    MockService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    MockService.ctorParameters = function () { return [
        { type: DelonMockConfig }
    ]; };
    return MockService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
                            console.log("%c \uD83D\uDC7DMOCK " + e.status + " STATUS ", 'background:#000;color:#bada55', req.url, errRes_1, req);
                    }
                    else {
                        console.error("Please use MockStatusError to throw status error", e, req);
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
        if (config.log)
            console.log('%c 👽MOCK ', 'background:#000;color:#bada55', req.url, response, req);
        return of(response).pipe(delay(config.delay));
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DelonMockModule = /** @class */ (function () {
    function DelonMockModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    DelonMockModule.forRoot = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: DelonMockModule,
            providers: [
                MockService,
                { provide: DelonMockConfig, useValue: config },
                { provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true },
            ],
        };
    };
    /**
     * @return {?}
     */
    DelonMockModule.forChild = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DelonMockModule,
            providers: [
                { provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true },
            ],
        };
    };
    DelonMockModule.decorators = [
        { type: NgModule, args: [{},] }
    ];
    return DelonMockModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { MockStatusError, MockService, MockInterceptor, DelonMockConfig, DelonMockModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL21vY2svc3JjL3N0YXR1cy5lcnJvci50cyIsIm5nOi8vQGRlbG9uL21vY2svc3JjL21vY2suY29uZmlnLnRzIiwibmc6Ly9AZGVsb24vbW9jay9zcmMvbW9jay5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vbW9jay9zcmMvbW9jay5pbnRlcmNlcHRvci50cyIsIm5nOi8vQGRlbG9uL21vY2svc3JjL21vY2subW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBNb2NrU3RhdHVzRXJyb3Ige1xuICBzdGF0dXNUZXh0OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzdGF0dXM6IG51bWJlciwgcHVibGljIGVycm9yPzogYW55KSB7fVxufVxuIiwiZXhwb3J0IGNsYXNzIERlbG9uTW9ja0NvbmZpZyB7XG4gIC8qKiDDqMKnwoTDpcKIwpnDpcKuwprDpMK5wonDpsKVwrDDpsKNwq4gKi9cbiAgZGF0YTogYW55O1xuICAvKiogw6jCr8K3w6bCscKCw6XCu8K2w6jCv8Kfw6/CvMKMw6XCjcKVw6TCvcKNw6/CvMKaw6bCr8Krw6fCp8KSw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYDMwMGAgKi9cbiAgZGVsYXk/ID0gMzAwO1xuICAvKiogw6bCmMKvw6XCkMKmw6XCvMK6w6XCiMK2w6bCicKAw6bCnMKJw6jCr8K3w6bCscKCw6nCg8K9TW9ja8OvwrzCjGB0cnVlYCDDqMKhwqjDp8KkwrrDpcK9wpPDqMKvwrfDpsKxwoLDp8KawoRVUkzDpMK4wo3DpcKtwpjDpcKcwqjDpsKXwrbDp8KbwrTDpsKOwqXDqMK/wpTDpcKbwp4gNDA0IMOpwpTCmcOowq/Cr8OvwrzCjGBmYWxzZWAgw6jCocKow6fCpMK6w6bCnMKqw6XCkcK9w6TCuMKtw6bCl8K2w6XCj8KRw6nCgMKBw6fCnMKfw6XCrsKeSFRUUMOowq/Ct8OmwrHCgiAqL1xuICBmb3JjZT8gPSBmYWxzZTtcbiAgLyoqIMOmwpjCr8OlwpDCpsOmwonCk8Olwo3CsCBNb2NrIMOowq/Ct8OmwrHCgsOkwr/CocOmwoHCr8OvwrzCjMOlwrzCpcOowqHCpcOmwrXCj8OowqfCiMOlwpnCqMOmwpfCoE5ldHdvcmvDpMK/wqHDpsKBwq8gKi9cbiAgbG9nPyA9IHRydWU7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERlbG9uTW9ja0NvbmZpZyB9IGZyb20gJy4vbW9jay5jb25maWcnO1xuaW1wb3J0IHsgTW9ja0NhY2hlZFJ1bGUsIE1vY2tSdWxlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTW9ja1NlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGNhY2hlZDogTW9ja0NhY2hlZFJ1bGVbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnOiBEZWxvbk1vY2tDb25maWcpIHtcbiAgICB0aGlzLmFwcGx5TW9jaygpO1xuICAgIGRlbGV0ZSB0aGlzLmNvbmZpZy5kYXRhO1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBwYXJzZSBydWxlXG5cbiAgcHJpdmF0ZSBhcHBseU1vY2soKSB7XG4gICAgdGhpcy5jYWNoZWQgPSBbXTtcbiAgICB0cnkge1xuICAgICAgdGhpcy5yZWFsQXBwbHlNb2NrKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5vdXRwdXRFcnJvcihlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlYWxBcHBseU1vY2soKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29uZmlnLmRhdGE7XG4gICAgaWYgKCFkYXRhKSByZXR1cm47XG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHJ1bGVzID0gZGF0YVtrZXldO1xuICAgICAgaWYgKCFydWxlcykgcmV0dXJuO1xuICAgICAgT2JqZWN0LmtleXMocnVsZXMpLmZvckVhY2goKHJ1bGVLZXk6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1bGVzW3J1bGVLZXldO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIShcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyB8fFxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fFxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgICAgICBgbW9jayB2YWx1ZSBvZiBbJHtrZXl9LSR7cnVsZUtleX1dIHNob3VsZCBiZSBmdW5jdGlvbiBvciBvYmplY3Qgb3Igc3RyaW5nLCBidXQgZ290ICR7dHlwZW9mIHZhbHVlfWAsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBydWxlID0gdGhpcy5nZW5SdWxlKHJ1bGVLZXksIHZhbHVlKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIFsnR0VUJywgJ1BPU1QnLCAnUFVUJywgJ0hFQUQnLCAnREVMRVRFJywgJ1BBVENIJywgJ09QVElPTlMnXS5pbmRleE9mKFxuICAgICAgICAgICAgcnVsZS5tZXRob2QsXG4gICAgICAgICAgKSA9PT0gLTFcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoYG1ldGhvZCBvZiAke2tleX0tJHtydWxlS2V5fSBpcyBub3QgdmFsaWRgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5jYWNoZWQuZmluZChcbiAgICAgICAgICB3ID0+IHcudXJsID09PSBydWxlLnVybCAmJiB3Lm1ldGhvZCA9PT0gcnVsZS5tZXRob2QsXG4gICAgICAgICk7XG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgaXRlbS5jYWxsYmFjayA9IHJ1bGUuY2FsbGJhY2s7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jYWNoZWQucHVzaChydWxlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gcmVndWxhciBvcmRlcmluZ1xuICAgIHRoaXMuY2FjaGVkLnNvcnQoXG4gICAgICAoYSwgYikgPT5cbiAgICAgICAgKGIubWFydGNoZXIgfHwgJycpLnRvU3RyaW5nKCkubGVuZ3RoIC1cbiAgICAgICAgKGEubWFydGNoZXIgfHwgJycpLnRvU3RyaW5nKCkubGVuZ3RoLFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdlblJ1bGUoa2V5OiBzdHJpbmcsIGNhbGxiYWNrOiBhbnkpOiBNb2NrQ2FjaGVkUnVsZSB7XG4gICAgbGV0IG1ldGhvZCA9ICdHRVQnO1xuICAgIGxldCB1cmwgPSBrZXk7XG5cbiAgICBpZiAoa2V5LmluZGV4T2YoJyAnKSA+IC0xKSB7XG4gICAgICBjb25zdCBzcGxpdGVkID0ga2V5LnNwbGl0KCcgJyk7XG4gICAgICBtZXRob2QgPSBzcGxpdGVkWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICB1cmwgPSBzcGxpdGVkWzFdO1xuICAgIH1cblxuICAgIGxldCBtYXJ0Y2hlcjogUmVnRXhwID0gbnVsbDtcbiAgICBsZXQgc2VnbWVudHM6IHN0cmluZ1tdID0gW107XG4gICAgaWYgKH51cmwuaW5kZXhPZignOicpKSB7XG4gICAgICBzZWdtZW50cyA9IHVybCFcbiAgICAgICAgLnNwbGl0KCcvJylcbiAgICAgICAgLmZpbHRlcihzZWdtZW50ID0+IHNlZ21lbnQuc3RhcnRzV2l0aCgnOicpKVxuICAgICAgICAubWFwKHYgPT4gdi5zdWJzdHJpbmcoMSkpO1xuICAgICAgY29uc3QgcmVTdHIgPSB1cmwhXG4gICAgICAgIC5zcGxpdCgnLycpXG4gICAgICAgIC5tYXAoc2VnbWVudCA9PiAoc2VnbWVudC5zdGFydHNXaXRoKCc6JykgPyBgKFteL10rKWAgOiBzZWdtZW50KSlcbiAgICAgICAgLmpvaW4oJy8nKTtcbiAgICAgIG1hcnRjaGVyID0gbmV3IFJlZ0V4cChyZVN0ciwgJ2knKTtcbiAgICB9IGVsc2UgaWYgKC8oXFwoW14pXStcXCkpL2kudGVzdCh1cmwpKSB7XG4gICAgICBtYXJ0Y2hlciA9IG5ldyBSZWdFeHAodXJsLCAnaScpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB1cmwsXG4gICAgICBtYXJ0Y2hlcixcbiAgICAgIHNlZ21lbnRzLFxuICAgICAgY2FsbGJhY2ssXG4gICAgICBtZXRob2Q6IG1ldGhvZC50b1VwcGVyQ2FzZSgpLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIG91dHB1dEVycm9yKGVycm9yOiBhbnkpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGVycm9yLm1lc3NhZ2Uuc3BsaXQoJzogJylbMF07XG4gICAgY29uc3QgZXJyb3JzID0gZXJyb3Iuc3RhY2tcbiAgICAgIC5zcGxpdCgnXFxuJylcbiAgICAgIC5maWx0ZXIobGluZSA9PiBsaW5lLnRyaW0oKS5pbmRleE9mKCdhdCAnKSAhPT0gMClcbiAgICAgIC5tYXAobGluZSA9PiBsaW5lLnJlcGxhY2UoYCR7ZmlsZVBhdGh9OiBgLCAnJykpO1xuICAgIGVycm9ycy5zcGxpY2UoMSwgMCwgWycnXSk7XG5cbiAgICBjb25zb2xlLmdyb3VwKCk7XG4gICAgY29uc29sZS53YXJuKGA9PT09PT09PT09RmFpbGVkIHRvIHBhcnNlIG1vY2sgY29uZmlnLj09PT09PT09PT1gKTtcbiAgICBjb25zb2xlLmxvZyhlcnJvcnMuam9pbignXFxuJykpO1xuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcblxuICAgIHRocm93IGVycm9yO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGdldFJ1bGUobWV0aG9kOiBzdHJpbmcsIHVybDogc3RyaW5nKTogTW9ja1J1bGUge1xuICAgIG1ldGhvZCA9IChtZXRob2QgfHwgJ0dFVCcpLnRvVXBwZXJDYXNlKCk7XG4gICAgY29uc3QgcGFyYW1zOiBhbnkgPSB7fTtcbiAgICBjb25zdCBsaXN0ID1cbiAgICAgIHRoaXMuY2FjaGVkLmZpbHRlcihcbiAgICAgICAgdyA9PlxuICAgICAgICAgIHcubWV0aG9kID09PSBtZXRob2QgJiZcbiAgICAgICAgICAody5tYXJ0Y2hlciA/IHcubWFydGNoZXIudGVzdCh1cmwpIDogdy51cmwgPT09IHVybCksXG4gICAgICApO1xuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgcmV0ID0gbGlzdC5maW5kKHcgPT4gdy51cmwgPT09IHVybCkgfHwgbGlzdFswXTtcbiAgICBpZiAocmV0Lm1hcnRjaGVyKSB7XG4gICAgICBjb25zdCBleGVjQXJyID0gcmV0Lm1hcnRjaGVyLmV4ZWModXJsKTtcbiAgICAgIGV4ZWNBcnIuc2xpY2UoMSkubWFwKCh2YWx1ZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIHBhcmFtc1tyZXQuc2VnbWVudHNbaW5kZXhdXSA9IHZhbHVlO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB1cmwsXG4gICAgICBtZXRob2Q6IHJldC5tZXRob2QsXG4gICAgICBwYXJhbXMsXG4gICAgICBjYWxsYmFjazogcmV0LmNhbGxiYWNrLFxuICAgIH07XG4gIH1cblxuICBjbGVhckNhY2hlKCkge1xuICAgIHRoaXMuY2FjaGVkID0gW107XG4gIH1cblxuICBnZXQgcnVsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FjaGVkO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckNhY2hlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBSZXF1ZXN0LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cFNlbnRFdmVudCxcbiAgSHR0cEhlYWRlclJlc3BvbnNlLFxuICBIdHRwUHJvZ3Jlc3NFdmVudCxcbiAgSHR0cFJlc3BvbnNlLFxuICBIdHRwVXNlckV2ZW50LFxuICBIdHRwRXJyb3JSZXNwb25zZSxcbiAgSHR0cEV2ZW50LFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlbGF5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEZWxvbk1vY2tDb25maWcgfSBmcm9tICcuL21vY2suY29uZmlnJztcbmltcG9ydCB7IE1vY2tTZXJ2aWNlIH0gZnJvbSAnLi9tb2NrLnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9ja1N0YXR1c0Vycm9yIH0gZnJvbSAnLi9zdGF0dXMuZXJyb3InO1xuaW1wb3J0IHsgTW9ja1JlcXVlc3QgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNb2NrSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge31cblxuICBpbnRlcmNlcHQoXG4gICAgcmVxOiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyLFxuICApOiBPYnNlcnZhYmxlPFxuICAgIHwgSHR0cFNlbnRFdmVudFxuICAgIHwgSHR0cEhlYWRlclJlc3BvbnNlXG4gICAgfCBIdHRwUHJvZ3Jlc3NFdmVudFxuICAgIHwgSHR0cFJlc3BvbnNlPGFueT5cbiAgICB8IEh0dHBVc2VyRXZlbnQ8YW55PlxuICA+IHtcbiAgICBjb25zdCBzcmMgPSB0aGlzLmluamVjdG9yLmdldChNb2NrU2VydmljZSk7XG4gICAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHtcbiAgICAgICAgZGVsYXk6IDMwMCxcbiAgICAgICAgZm9yY2U6IGZhbHNlLFxuICAgICAgICBsb2c6IHRydWUsXG4gICAgICB9LFxuICAgICAgdGhpcy5pbmplY3Rvci5nZXQoRGVsb25Nb2NrQ29uZmlnLCBudWxsKSxcbiAgICApO1xuICAgIGNvbnN0IHJ1bGUgPSBzcmMuZ2V0UnVsZShyZXEubWV0aG9kLCByZXEudXJsLnNwbGl0KCc/JylbMF0pO1xuICAgIGlmICghcnVsZSAmJiAhY29uZmlnLmZvcmNlKSB7XG4gICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbiAgICB9XG5cbiAgICBsZXQgcmVzOiBhbnk7XG4gICAgc3dpdGNoICh0eXBlb2YgcnVsZS5jYWxsYmFjaykge1xuICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgICBjb25zdCBtb2NrUmVxdWVzdDogTW9ja1JlcXVlc3QgPSB7XG4gICAgICAgICAgb3JpZ2luYWw6IHJlcSxcbiAgICAgICAgICBib2R5OiByZXEuYm9keSxcbiAgICAgICAgICBxdWVyeVN0cmluZzoge30sXG4gICAgICAgICAgaGVhZGVyczoge30sXG4gICAgICAgICAgcGFyYW1zOiBydWxlLnBhcmFtcyxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgdXJsUGFyYW1zID0gcmVxLnVybC5zcGxpdCgnPycpO1xuICAgICAgICBpZiAodXJsUGFyYW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICB1cmxQYXJhbXNbMV0uc3BsaXQoJyYnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbUFyciA9IGl0ZW0uc3BsaXQoJz0nKTtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGl0ZW1BcnJbMF07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGl0ZW1BcnJbMV07XG4gICAgICAgICAgICAvLyBpcyBhcnJheVxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKG1vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nKS5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShtb2NrUmVxdWVzdC5xdWVyeVN0cmluZ1trZXldKSkge1xuICAgICAgICAgICAgICAgIG1vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nW2tleV0gPSBbIG1vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nW2tleV0gXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBtb2NrUmVxdWVzdC5xdWVyeVN0cmluZ1trZXldLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbW9ja1JlcXVlc3QucXVlcnlTdHJpbmdba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJlcS5wYXJhbXNcbiAgICAgICAgICAua2V5cygpXG4gICAgICAgICAgLmZvckVhY2goa2V5ID0+IChtb2NrUmVxdWVzdC5xdWVyeVN0cmluZ1trZXldID0gcmVxLnBhcmFtcy5nZXQoa2V5KSkpO1xuICAgICAgICByZXEuaGVhZGVyc1xuICAgICAgICAgIC5rZXlzKClcbiAgICAgICAgICAuZm9yRWFjaChrZXkgPT4gKG1vY2tSZXF1ZXN0LmhlYWRlcnNba2V5XSA9IHJlcS5oZWFkZXJzLmdldChrZXkpKSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXMgPSBydWxlLmNhbGxiYWNrLmNhbGwodGhpcywgbW9ja1JlcXVlc3QpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgbGV0IGVyclJlczogSHR0cEVycm9yUmVzcG9uc2U7XG4gICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBNb2NrU3RhdHVzRXJyb3IpIHtcbiAgICAgICAgICAgIGVyclJlcyA9IG5ldyBIdHRwRXJyb3JSZXNwb25zZSh7XG4gICAgICAgICAgICAgIHVybDogcmVxLnVybCxcbiAgICAgICAgICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXG4gICAgICAgICAgICAgIHN0YXR1czogZS5zdGF0dXMsXG4gICAgICAgICAgICAgIHN0YXR1c1RleHQ6IGUuc3RhdHVzVGV4dCB8fCAnVW5rbm93biBFcnJvcicsXG4gICAgICAgICAgICAgIGVycm9yOiBlLmVycm9yLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoY29uZmlnLmxvZylcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgYCVjIMOwwp/CkcK9TU9DSyAke2Uuc3RhdHVzfSBTVEFUVVMgYCxcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZDojMDAwO2NvbG9yOiNiYWRhNTUnLFxuICAgICAgICAgICAgICAgIHJlcS51cmwsXG4gICAgICAgICAgICAgICAgZXJyUmVzLFxuICAgICAgICAgICAgICAgIHJlcSxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgYFBsZWFzZSB1c2UgTW9ja1N0YXR1c0Vycm9yIHRvIHRocm93IHN0YXR1cyBlcnJvcmAsXG4gICAgICAgICAgICAgIGUsXG4gICAgICAgICAgICAgIHJlcSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPEh0dHBFdmVudDxhbnk+PikgPT4ge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyUmVzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJlcyA9IHJ1bGUuY2FsbGJhY2s7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3BvbnNlOiBIdHRwUmVzcG9uc2U8YW55PiA9IG5ldyBIdHRwUmVzcG9uc2Uoe1xuICAgICAgc3RhdHVzOiAyMDAsXG4gICAgICBib2R5OiByZXMsXG4gICAgICB1cmw6IHJlcS51cmwsXG4gICAgfSk7XG4gICAgaWYgKGNvbmZpZy5sb2cpXG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgJyVjIMOwwp/CkcK9TU9DSyAnLFxuICAgICAgICAnYmFja2dyb3VuZDojMDAwO2NvbG9yOiNiYWRhNTUnLFxuICAgICAgICByZXEudXJsLFxuICAgICAgICByZXNwb25zZSxcbiAgICAgICAgcmVxLFxuICAgICAgKTtcbiAgICByZXR1cm4gb2YocmVzcG9uc2UpLnBpcGUoZGVsYXkoY29uZmlnLmRlbGF5KSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgRGVsb25Nb2NrQ29uZmlnIH0gZnJvbSAnLi9tb2NrLmNvbmZpZyc7XG5pbXBvcnQgeyBNb2NrU2VydmljZSB9IGZyb20gJy4vbW9jay5zZXJ2aWNlJztcbmltcG9ydCB7IE1vY2tJbnRlcmNlcHRvciB9IGZyb20gJy4vbW9jay5pbnRlcmNlcHRvcic7XG5cbkBOZ01vZHVsZSh7fSlcbmV4cG9ydCBjbGFzcyBEZWxvbk1vY2tNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IERlbG9uTW9ja0NvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRGVsb25Nb2NrTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIE1vY2tTZXJ2aWNlLFxuICAgICAgICB7IHByb3ZpZGU6IERlbG9uTW9ja0NvbmZpZywgdXNlVmFsdWU6IGNvbmZpZyB9LFxuICAgICAgICB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogTW9ja0ludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZSB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZvckNoaWxkKCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRGVsb25Nb2NrTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBNb2NrSW50ZXJjZXB0b3IsIG11bHRpOiB0cnVlIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFBO0lBRUUseUJBQW1CLE1BQWMsRUFBUyxLQUFXO1FBQWxDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFNO0tBQUk7MEJBRjNEO0lBR0M7Ozs7OztBQ0hELElBQUE7Ozs7O3FCQUlXLEdBQUc7Ozs7cUJBRUgsS0FBSzs7OzttQkFFUCxJQUFJOzswQkFSYjtJQVNDOzs7Ozs7QUNURDtJQVFFLHFCQUFvQixNQUF1QjtRQUF2QixXQUFNLEdBQU4sTUFBTSxDQUFpQjtzQkFGUixFQUFFO1FBR25DLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0tBQ3pCOzs7O0lBSU8sK0JBQVM7Ozs7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJO1lBQ0YsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JCOzs7OztJQUdLLG1DQUFhOzs7Ozs7UUFDbkIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDOUIsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBVzs7WUFDcEMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxLQUFLO2dCQUFFLE9BQU87WUFDbkIsTUFBTSxDQUFDLElBQUks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