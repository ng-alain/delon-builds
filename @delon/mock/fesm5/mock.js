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
        if (config.log) {
            console.log("%c\uD83D\uDC7D" + req.method + "->" + req.url + "->request", 'background:#000;color:#bada55', req);
            console.log("%c\uD83D\uDC7D" + req.method + "->" + req.url + "->response", 'background:#000;color:#bada55', response);
        }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL21vY2svc3JjL3N0YXR1cy5lcnJvci50cyIsIm5nOi8vQGRlbG9uL21vY2svc3JjL21vY2suY29uZmlnLnRzIiwibmc6Ly9AZGVsb24vbW9jay9zcmMvbW9jay5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vbW9jay9zcmMvbW9jay5pbnRlcmNlcHRvci50cyIsIm5nOi8vQGRlbG9uL21vY2svc3JjL21vY2subW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBNb2NrU3RhdHVzRXJyb3Ige1xuICBzdGF0dXNUZXh0OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzdGF0dXM6IG51bWJlciwgcHVibGljIGVycm9yPzogYW55KSB7fVxufVxuIiwiZXhwb3J0IGNsYXNzIERlbG9uTW9ja0NvbmZpZyB7XG4gIC8qKiDDqMKnwoTDpcKIwpnDpcKuwprDpMK5wonDpsKVwrDDpsKNwq4gKi9cbiAgZGF0YTogYW55O1xuICAvKiogw6jCr8K3w6bCscKCw6XCu8K2w6jCv8Kfw6/CvMKMw6XCjcKVw6TCvcKNw6/CvMKaw6bCr8Krw6fCp8KSw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYDMwMGAgKi9cbiAgZGVsYXk/ID0gMzAwO1xuICAvKiogw6bCmMKvw6XCkMKmw6XCvMK6w6XCiMK2w6bCicKAw6bCnMKJw6jCr8K3w6bCscKCw6nCg8K9TW9ja8OvwrzCjGB0cnVlYCDDqMKhwqjDp8KkwrrDpcK9wpPDqMKvwrfDpsKxwoLDp8KawoRVUkzDpMK4wo3DpcKtwpjDpcKcwqjDpsKXwrbDp8KbwrTDpsKOwqXDqMK/wpTDpcKbwp4gNDA0IMOpwpTCmcOowq/Cr8OvwrzCjGBmYWxzZWAgw6jCocKow6fCpMK6w6bCnMKqw6XCkcK9w6TCuMKtw6bCl8K2w6XCj8KRw6nCgMKBw6fCnMKfw6XCrsKeSFRUUMOowq/Ct8OmwrHCgiAqL1xuICBmb3JjZT8gPSBmYWxzZTtcbiAgLyoqIMOmwpjCr8OlwpDCpsOmwonCk8Olwo3CsCBNb2NrIMOowq/Ct8OmwrHCgsOkwr/CocOmwoHCr8OvwrzCjMOlwrzCpcOowqHCpcOmwrXCj8OowqfCiMOlwpnCqMOmwpfCoE5ldHdvcmvDpMK/wqHDpsKBwq8gKi9cbiAgbG9nPyA9IHRydWU7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERlbG9uTW9ja0NvbmZpZyB9IGZyb20gJy4vbW9jay5jb25maWcnO1xuaW1wb3J0IHsgTW9ja0NhY2hlZFJ1bGUsIE1vY2tSdWxlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTW9ja1NlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGNhY2hlZDogTW9ja0NhY2hlZFJ1bGVbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnOiBEZWxvbk1vY2tDb25maWcpIHtcbiAgICB0aGlzLmFwcGx5TW9jaygpO1xuICAgIGRlbGV0ZSB0aGlzLmNvbmZpZy5kYXRhO1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBwYXJzZSBydWxlXG5cbiAgcHJpdmF0ZSBhcHBseU1vY2soKSB7XG4gICAgdGhpcy5jYWNoZWQgPSBbXTtcbiAgICB0cnkge1xuICAgICAgdGhpcy5yZWFsQXBwbHlNb2NrKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5vdXRwdXRFcnJvcihlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlYWxBcHBseU1vY2soKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29uZmlnLmRhdGE7XG4gICAgaWYgKCFkYXRhKSByZXR1cm47XG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHJ1bGVzID0gZGF0YVtrZXldO1xuICAgICAgaWYgKCFydWxlcykgcmV0dXJuO1xuICAgICAgT2JqZWN0LmtleXMocnVsZXMpLmZvckVhY2goKHJ1bGVLZXk6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1bGVzW3J1bGVLZXldO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIShcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyB8fFxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fFxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgICAgICBgbW9jayB2YWx1ZSBvZiBbJHtrZXl9LSR7cnVsZUtleX1dIHNob3VsZCBiZSBmdW5jdGlvbiBvciBvYmplY3Qgb3Igc3RyaW5nLCBidXQgZ290ICR7dHlwZW9mIHZhbHVlfWAsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBydWxlID0gdGhpcy5nZW5SdWxlKHJ1bGVLZXksIHZhbHVlKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIFsnR0VUJywgJ1BPU1QnLCAnUFVUJywgJ0hFQUQnLCAnREVMRVRFJywgJ1BBVENIJywgJ09QVElPTlMnXS5pbmRleE9mKFxuICAgICAgICAgICAgcnVsZS5tZXRob2QsXG4gICAgICAgICAgKSA9PT0gLTFcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoYG1ldGhvZCBvZiAke2tleX0tJHtydWxlS2V5fSBpcyBub3QgdmFsaWRgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5jYWNoZWQuZmluZChcbiAgICAgICAgICB3ID0+IHcudXJsID09PSBydWxlLnVybCAmJiB3Lm1ldGhvZCA9PT0gcnVsZS5tZXRob2QsXG4gICAgICAgICk7XG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgaXRlbS5jYWxsYmFjayA9IHJ1bGUuY2FsbGJhY2s7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jYWNoZWQucHVzaChydWxlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gcmVndWxhciBvcmRlcmluZ1xuICAgIHRoaXMuY2FjaGVkLnNvcnQoXG4gICAgICAoYSwgYikgPT5cbiAgICAgICAgKGIubWFydGNoZXIgfHwgJycpLnRvU3RyaW5nKCkubGVuZ3RoIC1cbiAgICAgICAgKGEubWFydGNoZXIgfHwgJycpLnRvU3RyaW5nKCkubGVuZ3RoLFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdlblJ1bGUoa2V5OiBzdHJpbmcsIGNhbGxiYWNrOiBhbnkpOiBNb2NrQ2FjaGVkUnVsZSB7XG4gICAgbGV0IG1ldGhvZCA9ICdHRVQnO1xuICAgIGxldCB1cmwgPSBrZXk7XG5cbiAgICBpZiAoa2V5LmluZGV4T2YoJyAnKSA+IC0xKSB7XG4gICAgICBjb25zdCBzcGxpdGVkID0ga2V5LnNwbGl0KCcgJyk7XG4gICAgICBtZXRob2QgPSBzcGxpdGVkWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICB1cmwgPSBzcGxpdGVkWzFdO1xuICAgIH1cblxuICAgIGxldCBtYXJ0Y2hlcjogUmVnRXhwID0gbnVsbDtcbiAgICBsZXQgc2VnbWVudHM6IHN0cmluZ1tdID0gW107XG4gICAgaWYgKH51cmwuaW5kZXhPZignOicpKSB7XG4gICAgICBzZWdtZW50cyA9IHVybCFcbiAgICAgICAgLnNwbGl0KCcvJylcbiAgICAgICAgLmZpbHRlcihzZWdtZW50ID0+IHNlZ21lbnQuc3RhcnRzV2l0aCgnOicpKVxuICAgICAgICAubWFwKHYgPT4gdi5zdWJzdHJpbmcoMSkpO1xuICAgICAgY29uc3QgcmVTdHIgPSB1cmwhXG4gICAgICAgIC5zcGxpdCgnLycpXG4gICAgICAgIC5tYXAoc2VnbWVudCA9PiAoc2VnbWVudC5zdGFydHNXaXRoKCc6JykgPyBgKFteL10rKWAgOiBzZWdtZW50KSlcbiAgICAgICAgLmpvaW4oJy8nKTtcbiAgICAgIG1hcnRjaGVyID0gbmV3IFJlZ0V4cChyZVN0ciwgJ2knKTtcbiAgICB9IGVsc2UgaWYgKC8oXFwoW14pXStcXCkpL2kudGVzdCh1cmwpKSB7XG4gICAgICBtYXJ0Y2hlciA9IG5ldyBSZWdFeHAodXJsLCAnaScpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB1cmwsXG4gICAgICBtYXJ0Y2hlcixcbiAgICAgIHNlZ21lbnRzLFxuICAgICAgY2FsbGJhY2ssXG4gICAgICBtZXRob2Q6IG1ldGhvZC50b1VwcGVyQ2FzZSgpLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIG91dHB1dEVycm9yKGVycm9yOiBhbnkpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGVycm9yLm1lc3NhZ2Uuc3BsaXQoJzogJylbMF07XG4gICAgY29uc3QgZXJyb3JzID0gZXJyb3Iuc3RhY2tcbiAgICAgIC5zcGxpdCgnXFxuJylcbiAgICAgIC5maWx0ZXIobGluZSA9PiBsaW5lLnRyaW0oKS5pbmRleE9mKCdhdCAnKSAhPT0gMClcbiAgICAgIC5tYXAobGluZSA9PiBsaW5lLnJlcGxhY2UoYCR7ZmlsZVBhdGh9OiBgLCAnJykpO1xuICAgIGVycm9ycy5zcGxpY2UoMSwgMCwgWycnXSk7XG5cbiAgICBjb25zb2xlLmdyb3VwKCk7XG4gICAgY29uc29sZS53YXJuKGA9PT09PT09PT09RmFpbGVkIHRvIHBhcnNlIG1vY2sgY29uZmlnLj09PT09PT09PT1gKTtcbiAgICBjb25zb2xlLmxvZyhlcnJvcnMuam9pbignXFxuJykpO1xuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcblxuICAgIHRocm93IGVycm9yO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGdldFJ1bGUobWV0aG9kOiBzdHJpbmcsIHVybDogc3RyaW5nKTogTW9ja1J1bGUge1xuICAgIG1ldGhvZCA9IChtZXRob2QgfHwgJ0dFVCcpLnRvVXBwZXJDYXNlKCk7XG4gICAgY29uc3QgcGFyYW1zOiBhbnkgPSB7fTtcbiAgICBjb25zdCBsaXN0ID1cbiAgICAgIHRoaXMuY2FjaGVkLmZpbHRlcihcbiAgICAgICAgdyA9PlxuICAgICAgICAgIHcubWV0aG9kID09PSBtZXRob2QgJiZcbiAgICAgICAgICAody5tYXJ0Y2hlciA/IHcubWFydGNoZXIudGVzdCh1cmwpIDogdy51cmwgPT09IHVybCksXG4gICAgICApO1xuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgcmV0ID0gbGlzdC5maW5kKHcgPT4gdy51cmwgPT09IHVybCkgfHwgbGlzdFswXTtcbiAgICBpZiAocmV0Lm1hcnRjaGVyKSB7XG4gICAgICBjb25zdCBleGVjQXJyID0gcmV0Lm1hcnRjaGVyLmV4ZWModXJsKTtcbiAgICAgIGV4ZWNBcnIuc2xpY2UoMSkubWFwKCh2YWx1ZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIHBhcmFtc1tyZXQuc2VnbWVudHNbaW5kZXhdXSA9IHZhbHVlO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB1cmwsXG4gICAgICBtZXRob2Q6IHJldC5tZXRob2QsXG4gICAgICBwYXJhbXMsXG4gICAgICBjYWxsYmFjazogcmV0LmNhbGxiYWNrLFxuICAgIH07XG4gIH1cblxuICBjbGVhckNhY2hlKCkge1xuICAgIHRoaXMuY2FjaGVkID0gW107XG4gIH1cblxuICBnZXQgcnVsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FjaGVkO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckNhY2hlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBSZXF1ZXN0LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cFNlbnRFdmVudCxcbiAgSHR0cEhlYWRlclJlc3BvbnNlLFxuICBIdHRwUHJvZ3Jlc3NFdmVudCxcbiAgSHR0cFJlc3BvbnNlLFxuICBIdHRwVXNlckV2ZW50LFxuICBIdHRwRXJyb3JSZXNwb25zZSxcbiAgSHR0cEV2ZW50LFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlbGF5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEZWxvbk1vY2tDb25maWcgfSBmcm9tICcuL21vY2suY29uZmlnJztcbmltcG9ydCB7IE1vY2tTZXJ2aWNlIH0gZnJvbSAnLi9tb2NrLnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9ja1N0YXR1c0Vycm9yIH0gZnJvbSAnLi9zdGF0dXMuZXJyb3InO1xuaW1wb3J0IHsgTW9ja1JlcXVlc3QgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNb2NrSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge31cblxuICBpbnRlcmNlcHQoXG4gICAgcmVxOiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyLFxuICApOiBPYnNlcnZhYmxlPFxuICAgIHwgSHR0cFNlbnRFdmVudFxuICAgIHwgSHR0cEhlYWRlclJlc3BvbnNlXG4gICAgfCBIdHRwUHJvZ3Jlc3NFdmVudFxuICAgIHwgSHR0cFJlc3BvbnNlPGFueT5cbiAgICB8IEh0dHBVc2VyRXZlbnQ8YW55PlxuICA+IHtcbiAgICBjb25zdCBzcmMgPSB0aGlzLmluamVjdG9yLmdldChNb2NrU2VydmljZSk7XG4gICAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHtcbiAgICAgICAgZGVsYXk6IDMwMCxcbiAgICAgICAgZm9yY2U6IGZhbHNlLFxuICAgICAgICBsb2c6IHRydWUsXG4gICAgICB9LFxuICAgICAgdGhpcy5pbmplY3Rvci5nZXQoRGVsb25Nb2NrQ29uZmlnLCBudWxsKSxcbiAgICApO1xuICAgIGNvbnN0IHJ1bGUgPSBzcmMuZ2V0UnVsZShyZXEubWV0aG9kLCByZXEudXJsLnNwbGl0KCc/JylbMF0pO1xuICAgIGlmICghcnVsZSAmJiAhY29uZmlnLmZvcmNlKSB7XG4gICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbiAgICB9XG5cbiAgICBsZXQgcmVzOiBhbnk7XG4gICAgc3dpdGNoICh0eXBlb2YgcnVsZS5jYWxsYmFjaykge1xuICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgICBjb25zdCBtb2NrUmVxdWVzdDogTW9ja1JlcXVlc3QgPSB7XG4gICAgICAgICAgb3JpZ2luYWw6IHJlcSxcbiAgICAgICAgICBib2R5OiByZXEuYm9keSxcbiAgICAgICAgICBxdWVyeVN0cmluZzoge30sXG4gICAgICAgICAgaGVhZGVyczoge30sXG4gICAgICAgICAgcGFyYW1zOiBydWxlLnBhcmFtcyxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgdXJsUGFyYW1zID0gcmVxLnVybC5zcGxpdCgnPycpO1xuICAgICAgICBpZiAodXJsUGFyYW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICB1cmxQYXJhbXNbMV0uc3BsaXQoJyYnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbUFyciA9IGl0ZW0uc3BsaXQoJz0nKTtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGl0ZW1BcnJbMF07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGl0ZW1BcnJbMV07XG4gICAgICAgICAgICAvLyBpcyBhcnJheVxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKG1vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nKS5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShtb2NrUmVxdWVzdC5xdWVyeVN0cmluZ1trZXldKSkge1xuICAgICAgICAgICAgICAgIG1vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nW2tleV0gPSBbbW9ja1JlcXVlc3QucXVlcnlTdHJpbmdba2V5XV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbW9ja1JlcXVlc3QucXVlcnlTdHJpbmdba2V5XS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG1vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXEucGFyYW1zXG4gICAgICAgICAgLmtleXMoKVxuICAgICAgICAgIC5mb3JFYWNoKGtleSA9PiAobW9ja1JlcXVlc3QucXVlcnlTdHJpbmdba2V5XSA9IHJlcS5wYXJhbXMuZ2V0KGtleSkpKTtcbiAgICAgICAgcmVxLmhlYWRlcnNcbiAgICAgICAgICAua2V5cygpXG4gICAgICAgICAgLmZvckVhY2goa2V5ID0+IChtb2NrUmVxdWVzdC5oZWFkZXJzW2tleV0gPSByZXEuaGVhZGVycy5nZXQoa2V5KSkpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzID0gcnVsZS5jYWxsYmFjay5jYWxsKHRoaXMsIG1vY2tSZXF1ZXN0KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGxldCBlcnJSZXM6IEh0dHBFcnJvclJlc3BvbnNlO1xuICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgTW9ja1N0YXR1c0Vycm9yKSB7XG4gICAgICAgICAgICBlcnJSZXMgPSBuZXcgSHR0cEVycm9yUmVzcG9uc2Uoe1xuICAgICAgICAgICAgICB1cmw6IHJlcS51cmwsXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLFxuICAgICAgICAgICAgICBzdGF0dXM6IGUuc3RhdHVzLFxuICAgICAgICAgICAgICBzdGF0dXNUZXh0OiBlLnN0YXR1c1RleHQgfHwgJ1Vua25vd24gRXJyb3InLFxuICAgICAgICAgICAgICBlcnJvcjogZS5lcnJvcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGNvbmZpZy5sb2cpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgIGAlYyDDsMKfwpHCvU1PQ0sgJHtlLnN0YXR1c30gU1RBVFVTIGAsXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQ6IzAwMDtjb2xvcjojYmFkYTU1JyxcbiAgICAgICAgICAgICAgICByZXEudXJsLFxuICAgICAgICAgICAgICAgIGVyclJlcyxcbiAgICAgICAgICAgICAgICByZXEsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgIGBQbGVhc2UgdXNlIE1vY2tTdGF0dXNFcnJvciB0byB0aHJvdyBzdGF0dXMgZXJyb3JgLFxuICAgICAgICAgICAgICBlLFxuICAgICAgICAgICAgICByZXEsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxIdHRwRXZlbnQ8YW55Pj4pID0+IHtcbiAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVyclJlcyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXMgPSBydWxlLmNhbGxiYWNrO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCByZXNwb25zZTogSHR0cFJlc3BvbnNlPGFueT4gPSBuZXcgSHR0cFJlc3BvbnNlKHtcbiAgICAgIHN0YXR1czogMjAwLFxuICAgICAgYm9keTogcmVzLFxuICAgICAgdXJsOiByZXEudXJsLFxuICAgIH0pO1xuXG4gICAgaWYgKGNvbmZpZy5sb2cpIHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBgJWPDsMKfwpHCvSR7cmVxLm1ldGhvZH0tPiR7cmVxLnVybH0tPnJlcXVlc3RgLFxuICAgICAgICAnYmFja2dyb3VuZDojMDAwO2NvbG9yOiNiYWRhNTUnLFxuICAgICAgICByZXEsXG4gICAgICApO1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIGAlY8Owwp/CkcK9JHtyZXEubWV0aG9kfS0+JHtyZXEudXJsfS0+cmVzcG9uc2VgLFxuICAgICAgICAnYmFja2dyb3VuZDojMDAwO2NvbG9yOiNiYWRhNTUnLFxuICAgICAgICByZXNwb25zZSxcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBvZihyZXNwb25zZSkucGlwZShkZWxheShjb25maWcuZGVsYXkpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBEZWxvbk1vY2tDb25maWcgfSBmcm9tICcuL21vY2suY29uZmlnJztcbmltcG9ydCB7IE1vY2tTZXJ2aWNlIH0gZnJvbSAnLi9tb2NrLnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9ja0ludGVyY2VwdG9yIH0gZnJvbSAnLi9tb2NrLmludGVyY2VwdG9yJztcblxuQE5nTW9kdWxlKHt9KVxuZXhwb3J0IGNsYXNzIERlbG9uTW9ja01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogRGVsb25Nb2NrQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEZWxvbk1vY2tNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgTW9ja1NlcnZpY2UsXG4gICAgICAgIHsgcHJvdmlkZTogRGVsb25Nb2NrQ29uZmlnLCB1c2VWYWx1ZTogY29uZmlnIH0sXG4gICAgICAgIHsgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBNb2NrSW50ZXJjZXB0b3IsIG11bHRpOiB0cnVlIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZm9yQ2hpbGQoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEZWxvbk1vY2tNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUywgdXNlQ2xhc3M6IE1vY2tJbnRlcmNlcHRvciwgbXVsdGk6IHRydWUgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLElBQUE7SUFFRSx5QkFBbUIsTUFBYyxFQUFTLEtBQVc7UUFBbEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQU07S0FBSTswQkFGM0Q7SUFHQzs7Ozs7O0FDSEQsSUFBQTs7Ozs7cUJBSVcsR0FBRzs7OztxQkFFSCxLQUFLOzs7O21CQUVQLElBQUk7OzBCQVJiO0lBU0M7Ozs7OztBQ1REO0lBUUUscUJBQW9CLE1BQXVCO1FBQXZCLFdBQU0sR0FBTixNQUFNLENBQWlCO3NCQUZSLEVBQUU7UUFHbkMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7S0FDekI7Ozs7SUFJTywrQkFBUzs7OztRQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUk7WUFDRixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckI7Ozs7O0lBR0ssbUNBQWE7Ozs7OztRQUNuQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDbEIsTUFBTSxD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