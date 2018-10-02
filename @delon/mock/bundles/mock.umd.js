/**
 * @license ng-alain(cipchk@qq.com) v2.0.0-beta.3-ed90aa6
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@delon/mock', ['exports', '@angular/core', '@angular/common/http', 'rxjs', 'rxjs/operators'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.mock = {}),global.ng.core,global.ng.common.http,global.rxjs,global.rxjs.operators));
}(this, (function (exports,core,http,rxjs,operators) { 'use strict';

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
        // endregion
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
             */ function () {
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        MockService.ctorParameters = function () {
            return [
                { type: DelonMockConfig }
            ];
        };
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
                                mockRequest_1.queryString[itemArr[0]] = itemArr[1];
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
                                errRes_1 = new http.HttpErrorResponse({
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
                            return new rxjs.Observable(function (observer) {
                                observer.error(errRes_1);
                            });
                        }
                        break;
                    default:
                        res = rule.callback;
                        break;
                }
                /** @type {?} */
                var response = new http.HttpResponse({
                    status: 200,
                    body: res,
                    url: req.url,
                });
                if (config.log)
                    console.log('%c 👽MOCK ', 'background:#000;color:#bada55', req.url, response, req);
                return rxjs.of(response).pipe(operators.delay(config.delay));
            };
        MockInterceptor.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        MockInterceptor.ctorParameters = function () {
            return [
                { type: core.Injector }
            ];
        };
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
                        { provide: http.HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true },
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
                        { provide: http.HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true },
                    ],
                };
            };
        DelonMockModule.decorators = [
            { type: core.NgModule, args: [{},] }
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

    exports.MockStatusError = MockStatusError;
    exports.MockService = MockService;
    exports.MockInterceptor = MockInterceptor;
    exports.DelonMockConfig = DelonMockConfig;
    exports.DelonMockModule = DelonMockModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9tb2NrL3NyYy9zdGF0dXMuZXJyb3IudHMiLCJuZzovL0BkZWxvbi9tb2NrL3NyYy9tb2NrLmNvbmZpZy50cyIsIm5nOi8vQGRlbG9uL21vY2svc3JjL21vY2suc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL21vY2svc3JjL21vY2suaW50ZXJjZXB0b3IudHMiLCJuZzovL0BkZWxvbi9tb2NrL3NyYy9tb2NrLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTW9ja1N0YXR1c0Vycm9yIHtcclxuICBzdGF0dXNUZXh0OiBzdHJpbmc7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHN0YXR1czogbnVtYmVyLCBwdWJsaWMgZXJyb3I/OiBhbnkpIHt9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIERlbG9uTW9ja0NvbmZpZyB7XHJcbiAgLyoqIMOowqfChMOlwojCmcOlwq7CmsOkwrnCicOmwpXCsMOmwo3CriAqL1xyXG4gIGRhdGE6IGFueTtcclxuICAvKiogw6jCr8K3w6bCscKCw6XCu8K2w6jCv8Kfw6/CvMKMw6XCjcKVw6TCvcKNw6/CvMKaw6bCr8Krw6fCp8KSw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYDMwMGAgKi9cclxuICBkZWxheT8gPSAzMDA7XHJcbiAgLyoqIMOmwpjCr8OlwpDCpsOlwrzCusOlwojCtsOmwonCgMOmwpzCicOowq/Ct8OmwrHCgsOpwoPCvU1vY2vDr8K8woxgdHJ1ZWAgw6jCocKow6fCpMK6w6XCvcKTw6jCr8K3w6bCscKCw6fCmsKEVVJMw6TCuMKNw6XCrcKYw6XCnMKow6bCl8K2w6fCm8K0w6bCjsKlw6jCv8KUw6XCm8KeIDQwNCDDqcKUwpnDqMKvwq/Dr8K8woxgZmFsc2VgIMOowqHCqMOnwqTCusOmwpzCqsOlwpHCvcOkwrjCrcOmwpfCtsOlwo/CkcOpwoDCgcOnwpzCn8Olwq7CnkhUVFDDqMKvwrfDpsKxwoIgKi9cclxuICBmb3JjZT8gPSBmYWxzZTtcclxuICAvKiogw6bCmMKvw6XCkMKmw6bCicKTw6XCjcKwIE1vY2sgw6jCr8K3w6bCscKCw6TCv8Khw6bCgcKvw6/CvMKMw6XCvMKlw6jCocKlw6bCtcKPw6jCp8KIw6XCmcKow6bCl8KgTmV0d29ya8Okwr/CocOmwoHCryAqL1xyXG4gIGxvZz8gPSB0cnVlO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEZWxvbk1vY2tDb25maWcgfSBmcm9tICcuL21vY2suY29uZmlnJztcclxuaW1wb3J0IHsgTW9ja0NhY2hlZFJ1bGUsIE1vY2tSdWxlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTW9ja1NlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgY2FjaGVkOiBNb2NrQ2FjaGVkUnVsZVtdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnOiBEZWxvbk1vY2tDb25maWcpIHtcclxuICAgIHRoaXMuYXBwbHlNb2NrKCk7XHJcbiAgICBkZWxldGUgdGhpcy5jb25maWcuZGF0YTtcclxuICB9XHJcblxyXG4gIC8vIHJlZ2lvbjogcGFyc2UgcnVsZVxyXG5cclxuICBwcml2YXRlIGFwcGx5TW9jaygpIHtcclxuICAgIHRoaXMuY2FjaGVkID0gW107XHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLnJlYWxBcHBseU1vY2soKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdGhpcy5vdXRwdXRFcnJvcihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVhbEFwcGx5TW9jaygpIHtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbmZpZy5kYXRhO1xyXG4gICAgaWYgKCFkYXRhKSByZXR1cm47XHJcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICBjb25zdCBydWxlcyA9IGRhdGFba2V5XTtcclxuICAgICAgaWYgKCFydWxlcykgcmV0dXJuO1xyXG4gICAgICBPYmplY3Qua2V5cyhydWxlcykuZm9yRWFjaCgocnVsZUtleTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydWxlc1tydWxlS2V5XTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAhKFxyXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgfHxcclxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fFxyXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aHJvdyBFcnJvcihcclxuICAgICAgICAgICAgYG1vY2sgdmFsdWUgb2YgWyR7a2V5fS0ke3J1bGVLZXl9XSBzaG91bGQgYmUgZnVuY3Rpb24gb3Igb2JqZWN0IG9yIHN0cmluZywgYnV0IGdvdCAke3R5cGVvZiB2YWx1ZX1gLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcnVsZSA9IHRoaXMuZ2VuUnVsZShydWxlS2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgWydHRVQnLCAnUE9TVCcsICdQVVQnLCAnSEVBRCcsICdERUxFVEUnLCAnUEFUQ0gnLCAnT1BUSU9OUyddLmluZGV4T2YoXHJcbiAgICAgICAgICAgIHJ1bGUubWV0aG9kLFxyXG4gICAgICAgICAgKSA9PT0gLTFcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRocm93IEVycm9yKGBtZXRob2Qgb2YgJHtrZXl9LSR7cnVsZUtleX0gaXMgbm90IHZhbGlkYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmNhY2hlZC5maW5kKFxyXG4gICAgICAgICAgdyA9PiB3LnVybCA9PT0gcnVsZS51cmwgJiYgdy5tZXRob2QgPT09IHJ1bGUubWV0aG9kLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAgIGl0ZW0uY2FsbGJhY2sgPSBydWxlLmNhbGxiYWNrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmNhY2hlZC5wdXNoKHJ1bGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIC8vIHJlZ3VsYXIgb3JkZXJpbmdcclxuICAgIHRoaXMuY2FjaGVkLnNvcnQoXHJcbiAgICAgIChhLCBiKSA9PlxyXG4gICAgICAgIChiLm1hcnRjaGVyIHx8ICcnKS50b1N0cmluZygpLmxlbmd0aCAtXHJcbiAgICAgICAgKGEubWFydGNoZXIgfHwgJycpLnRvU3RyaW5nKCkubGVuZ3RoLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2VuUnVsZShrZXk6IHN0cmluZywgY2FsbGJhY2s6IGFueSk6IE1vY2tDYWNoZWRSdWxlIHtcclxuICAgIGxldCBtZXRob2QgPSAnR0VUJztcclxuICAgIGxldCB1cmwgPSBrZXk7XHJcblxyXG4gICAgaWYgKGtleS5pbmRleE9mKCcgJykgPiAtMSkge1xyXG4gICAgICBjb25zdCBzcGxpdGVkID0ga2V5LnNwbGl0KCcgJyk7XHJcbiAgICAgIG1ldGhvZCA9IHNwbGl0ZWRbMF0udG9Mb3dlckNhc2UoKTtcclxuICAgICAgdXJsID0gc3BsaXRlZFsxXTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbWFydGNoZXI6IFJlZ0V4cCA9IG51bGw7XHJcbiAgICBsZXQgc2VnbWVudHM6IHN0cmluZ1tdID0gW107XHJcbiAgICBpZiAofnVybC5pbmRleE9mKCc6JykpIHtcclxuICAgICAgc2VnbWVudHMgPSB1cmwhXHJcbiAgICAgICAgLnNwbGl0KCcvJylcclxuICAgICAgICAuZmlsdGVyKHNlZ21lbnQgPT4gc2VnbWVudC5zdGFydHNXaXRoKCc6JykpXHJcbiAgICAgICAgLm1hcCh2ID0+IHYuc3Vic3RyaW5nKDEpKTtcclxuICAgICAgY29uc3QgcmVTdHIgPSB1cmwhXHJcbiAgICAgICAgLnNwbGl0KCcvJylcclxuICAgICAgICAubWFwKHNlZ21lbnQgPT4gKHNlZ21lbnQuc3RhcnRzV2l0aCgnOicpID8gYChbXi9dKylgIDogc2VnbWVudCkpXHJcbiAgICAgICAgLmpvaW4oJy8nKTtcclxuICAgICAgbWFydGNoZXIgPSBuZXcgUmVnRXhwKHJlU3RyLCAnaScpO1xyXG4gICAgfSBlbHNlIGlmICgvKFxcKFteKV0rXFwpKS9pLnRlc3QodXJsKSkge1xyXG4gICAgICBtYXJ0Y2hlciA9IG5ldyBSZWdFeHAodXJsLCAnaScpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVybCxcclxuICAgICAgbWFydGNoZXIsXHJcbiAgICAgIHNlZ21lbnRzLFxyXG4gICAgICBjYWxsYmFjayxcclxuICAgICAgbWV0aG9kOiBtZXRob2QudG9VcHBlckNhc2UoKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG91dHB1dEVycm9yKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnN0IGZpbGVQYXRoID0gZXJyb3IubWVzc2FnZS5zcGxpdCgnOiAnKVswXTtcclxuICAgIGNvbnN0IGVycm9ycyA9IGVycm9yLnN0YWNrXHJcbiAgICAgIC5zcGxpdCgnXFxuJylcclxuICAgICAgLmZpbHRlcihsaW5lID0+IGxpbmUudHJpbSgpLmluZGV4T2YoJ2F0ICcpICE9PSAwKVxyXG4gICAgICAubWFwKGxpbmUgPT4gbGluZS5yZXBsYWNlKGAke2ZpbGVQYXRofTogYCwgJycpKTtcclxuICAgIGVycm9ycy5zcGxpY2UoMSwgMCwgWycnXSk7XHJcblxyXG4gICAgY29uc29sZS5ncm91cCgpO1xyXG4gICAgY29uc29sZS53YXJuKGA9PT09PT09PT09RmFpbGVkIHRvIHBhcnNlIG1vY2sgY29uZmlnLj09PT09PT09PT1gKTtcclxuICAgIGNvbnNvbGUubG9nKGVycm9ycy5qb2luKCdcXG4nKSk7XHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcblxyXG4gICAgdGhyb3cgZXJyb3I7XHJcbiAgfVxyXG5cclxuICAvLyBlbmRyZWdpb25cclxuXHJcbiAgZ2V0UnVsZShtZXRob2Q6IHN0cmluZywgdXJsOiBzdHJpbmcpOiBNb2NrUnVsZSB7XHJcbiAgICBtZXRob2QgPSAobWV0aG9kIHx8ICdHRVQnKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgY29uc3QgcGFyYW1zOiBhbnkgPSB7fTtcclxuICAgIGNvbnN0IGxpc3QgPVxyXG4gICAgICB0aGlzLmNhY2hlZC5maWx0ZXIoXHJcbiAgICAgICAgdyA9PlxyXG4gICAgICAgICAgdy5tZXRob2QgPT09IG1ldGhvZCAmJlxyXG4gICAgICAgICAgKHcubWFydGNoZXIgPyB3Lm1hcnRjaGVyLnRlc3QodXJsKSA6IHcudXJsID09PSB1cmwpLFxyXG4gICAgICApO1xyXG4gICAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcclxuICAgIGNvbnN0IHJldCA9IGxpc3QuZmluZCh3ID0+IHcudXJsID09PSB1cmwpIHx8IGxpc3RbMF07XHJcbiAgICBpZiAocmV0Lm1hcnRjaGVyKSB7XHJcbiAgICAgIGNvbnN0IGV4ZWNBcnIgPSByZXQubWFydGNoZXIuZXhlYyh1cmwpO1xyXG4gICAgICBleGVjQXJyLnNsaWNlKDEpLm1hcCgodmFsdWU6IHN0cmluZywgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHBhcmFtc1tyZXQuc2VnbWVudHNbaW5kZXhdXSA9IHZhbHVlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVybCxcclxuICAgICAgbWV0aG9kOiByZXQubWV0aG9kLFxyXG4gICAgICBwYXJhbXMsXHJcbiAgICAgIGNhbGxiYWNrOiByZXQuY2FsbGJhY2ssXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY2xlYXJDYWNoZSgpIHtcclxuICAgIHRoaXMuY2FjaGVkID0gW107XHJcbiAgfVxyXG5cclxuICBnZXQgcnVsZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jYWNoZWQ7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xlYXJDYWNoZSgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEh0dHBJbnRlcmNlcHRvcixcclxuICBIdHRwUmVxdWVzdCxcclxuICBIdHRwSGFuZGxlcixcclxuICBIdHRwU2VudEV2ZW50LFxyXG4gIEh0dHBIZWFkZXJSZXNwb25zZSxcclxuICBIdHRwUHJvZ3Jlc3NFdmVudCxcclxuICBIdHRwUmVzcG9uc2UsXHJcbiAgSHR0cFVzZXJFdmVudCxcclxuICBIdHRwRXJyb3JSZXNwb25zZSxcclxuICBIdHRwRXZlbnQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVsYXkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBEZWxvbk1vY2tDb25maWcgfSBmcm9tICcuL21vY2suY29uZmlnJztcclxuaW1wb3J0IHsgTW9ja1NlcnZpY2UgfSBmcm9tICcuL21vY2suc2VydmljZSc7XHJcbmltcG9ydCB7IE1vY2tTdGF0dXNFcnJvciB9IGZyb20gJy4vc3RhdHVzLmVycm9yJztcclxuaW1wb3J0IHsgTW9ja1JlcXVlc3QgfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNb2NrSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7fVxyXG5cclxuICBpbnRlcmNlcHQoXHJcbiAgICByZXE6IEh0dHBSZXF1ZXN0PGFueT4sXHJcbiAgICBuZXh0OiBIdHRwSGFuZGxlcixcclxuICApOiBPYnNlcnZhYmxlPFxyXG4gICAgfCBIdHRwU2VudEV2ZW50XHJcbiAgICB8IEh0dHBIZWFkZXJSZXNwb25zZVxyXG4gICAgfCBIdHRwUHJvZ3Jlc3NFdmVudFxyXG4gICAgfCBIdHRwUmVzcG9uc2U8YW55PlxyXG4gICAgfCBIdHRwVXNlckV2ZW50PGFueT5cclxuICA+IHtcclxuICAgIGNvbnN0IHNyYyA9IHRoaXMuaW5qZWN0b3IuZ2V0KE1vY2tTZXJ2aWNlKTtcclxuICAgIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oXHJcbiAgICAgIHtcclxuICAgICAgICBkZWxheTogMzAwLFxyXG4gICAgICAgIGZvcmNlOiBmYWxzZSxcclxuICAgICAgICBsb2c6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHRoaXMuaW5qZWN0b3IuZ2V0KERlbG9uTW9ja0NvbmZpZywgbnVsbCksXHJcbiAgICApO1xyXG4gICAgY29uc3QgcnVsZSA9IHNyYy5nZXRSdWxlKHJlcS5tZXRob2QsIHJlcS51cmwuc3BsaXQoJz8nKVswXSk7XHJcbiAgICBpZiAoIXJ1bGUgJiYgIWNvbmZpZy5mb3JjZSkge1xyXG4gICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcmVzOiBhbnk7XHJcbiAgICBzd2l0Y2ggKHR5cGVvZiBydWxlLmNhbGxiYWNrKSB7XHJcbiAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcclxuICAgICAgICBjb25zdCBtb2NrUmVxdWVzdDogTW9ja1JlcXVlc3QgPSB7XHJcbiAgICAgICAgICBvcmlnaW5hbDogcmVxLFxyXG4gICAgICAgICAgYm9keTogcmVxLmJvZHksXHJcbiAgICAgICAgICBxdWVyeVN0cmluZzoge30sXHJcbiAgICAgICAgICBoZWFkZXJzOiB7fSxcclxuICAgICAgICAgIHBhcmFtczogcnVsZS5wYXJhbXMsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSByZXEudXJsLnNwbGl0KCc/Jyk7XHJcbiAgICAgICAgaWYgKHVybFBhcmFtcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICB1cmxQYXJhbXNbMV0uc3BsaXQoJyYnKS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtQXJyID0gaXRlbS5zcGxpdCgnPScpO1xyXG4gICAgICAgICAgICBtb2NrUmVxdWVzdC5xdWVyeVN0cmluZ1tpdGVtQXJyWzBdXSA9IGl0ZW1BcnJbMV07XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVxLnBhcmFtc1xyXG4gICAgICAgICAgLmtleXMoKVxyXG4gICAgICAgICAgLmZvckVhY2goa2V5ID0+IChtb2NrUmVxdWVzdC5xdWVyeVN0cmluZ1trZXldID0gcmVxLnBhcmFtcy5nZXQoa2V5KSkpO1xyXG4gICAgICAgIHJlcS5oZWFkZXJzXHJcbiAgICAgICAgICAua2V5cygpXHJcbiAgICAgICAgICAuZm9yRWFjaChrZXkgPT4gKG1vY2tSZXF1ZXN0LmhlYWRlcnNba2V5XSA9IHJlcS5oZWFkZXJzLmdldChrZXkpKSk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICByZXMgPSBydWxlLmNhbGxiYWNrLmNhbGwodGhpcywgbW9ja1JlcXVlc3QpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIGxldCBlcnJSZXM6IEh0dHBFcnJvclJlc3BvbnNlO1xyXG4gICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBNb2NrU3RhdHVzRXJyb3IpIHtcclxuICAgICAgICAgICAgZXJyUmVzID0gbmV3IEh0dHBFcnJvclJlc3BvbnNlKHtcclxuICAgICAgICAgICAgICB1cmw6IHJlcS51cmwsXHJcbiAgICAgICAgICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgc3RhdHVzOiBlLnN0YXR1cyxcclxuICAgICAgICAgICAgICBzdGF0dXNUZXh0OiBlLnN0YXR1c1RleHQgfHwgJ1Vua25vd24gRXJyb3InLFxyXG4gICAgICAgICAgICAgIGVycm9yOiBlLmVycm9yLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5sb2cpXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICBgJWMgw7DCn8KRwr1NT0NLICR7ZS5zdGF0dXN9IFNUQVRVUyBgLFxyXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQ6IzAwMDtjb2xvcjojYmFkYTU1JyxcclxuICAgICAgICAgICAgICAgIHJlcS51cmwsXHJcbiAgICAgICAgICAgICAgICBlcnJSZXMsXHJcbiAgICAgICAgICAgICAgICByZXEsXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICAgICAgICAgYFBsZWFzZSB1c2UgTW9ja1N0YXR1c0Vycm9yIHRvIHRocm93IHN0YXR1cyBlcnJvcmAsXHJcbiAgICAgICAgICAgICAgZSxcclxuICAgICAgICAgICAgICByZXEsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxIdHRwRXZlbnQ8YW55Pj4pID0+IHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyUmVzKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXMgPSBydWxlLmNhbGxiYWNrO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlOiBIdHRwUmVzcG9uc2U8YW55PiA9IG5ldyBIdHRwUmVzcG9uc2Uoe1xyXG4gICAgICBzdGF0dXM6IDIwMCxcclxuICAgICAgYm9keTogcmVzLFxyXG4gICAgICB1cmw6IHJlcS51cmwsXHJcbiAgICB9KTtcclxuICAgIGlmIChjb25maWcubG9nKVxyXG4gICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAnJWMgw7DCn8KRwr1NT0NLICcsXHJcbiAgICAgICAgJ2JhY2tncm91bmQ6IzAwMDtjb2xvcjojYmFkYTU1JyxcclxuICAgICAgICByZXEudXJsLFxyXG4gICAgICAgIHJlc3BvbnNlLFxyXG4gICAgICAgIHJlcSxcclxuICAgICAgKTtcclxuICAgIHJldHVybiBvZihyZXNwb25zZSkucGlwZShkZWxheShjb25maWcuZGVsYXkpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5pbXBvcnQgeyBEZWxvbk1vY2tDb25maWcgfSBmcm9tICcuL21vY2suY29uZmlnJztcclxuaW1wb3J0IHsgTW9ja1NlcnZpY2UgfSBmcm9tICcuL21vY2suc2VydmljZSc7XHJcbmltcG9ydCB7IE1vY2tJbnRlcmNlcHRvciB9IGZyb20gJy4vbW9jay5pbnRlcmNlcHRvcic7XHJcblxyXG5ATmdNb2R1bGUoe30pXHJcbmV4cG9ydCBjbGFzcyBEZWxvbk1vY2tNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogRGVsb25Nb2NrQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogRGVsb25Nb2NrTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBNb2NrU2VydmljZSxcclxuICAgICAgICB7IHByb3ZpZGU6IERlbG9uTW9ja0NvbmZpZywgdXNlVmFsdWU6IGNvbmZpZyB9LFxyXG4gICAgICAgIHsgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBNb2NrSW50ZXJjZXB0b3IsIG11bHRpOiB0cnVlIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZvckNoaWxkKCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IERlbG9uTW9ja01vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgeyBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUywgdXNlQ2xhc3M6IE1vY2tJbnRlcmNlcHRvciwgbXVsdGk6IHRydWUgfSxcclxuICAgICAgXSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiSHR0cEVycm9yUmVzcG9uc2UiLCJPYnNlcnZhYmxlIiwiSHR0cFJlc3BvbnNlIiwib2YiLCJkZWxheSIsIkluamVjdG9yIiwiSFRUUF9JTlRFUkNFUFRPUlMiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLFFBQUE7UUFFRSx5QkFBbUIsTUFBYyxFQUFTLEtBQVc7WUFBbEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtZQUFTLFVBQUssR0FBTCxLQUFLLENBQU07U0FBSTs4QkFGM0Q7UUFHQzs7Ozs7O0FDSEQsUUFBQTs7Ozs7eUJBSVcsR0FBRzs7Ozt5QkFFSCxLQUFLOzs7O3VCQUVQLElBQUk7OzhCQVJiO1FBU0M7Ozs7OztBQ1REO1FBUUUscUJBQW9CLE1BQXVCO1lBQXZCLFdBQU0sR0FBTixNQUFNLENBQWlCOzBCQUZSLEVBQUU7WUFHbkMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDekI7Ozs7UUFJTywrQkFBUzs7OztnQkFDZixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFDakIsSUFBSTtvQkFDRixJQUFJ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