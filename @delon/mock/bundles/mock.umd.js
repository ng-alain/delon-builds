/**
 * @license ng-alain(cipchk@qq.com) v2.0.0-beta.3-ef341e8
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9tb2NrL3NyYy9zdGF0dXMuZXJyb3IudHMiLCJuZzovL0BkZWxvbi9tb2NrL3NyYy9tb2NrLmNvbmZpZy50cyIsIm5nOi8vQGRlbG9uL21vY2svc3JjL21vY2suc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL21vY2svc3JjL21vY2suaW50ZXJjZXB0b3IudHMiLCJuZzovL0BkZWxvbi9tb2NrL3NyYy9tb2NrLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTW9ja1N0YXR1c0Vycm9yIHtcbiAgc3RhdHVzVGV4dDogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3RhdHVzOiBudW1iZXIsIHB1YmxpYyBlcnJvcj86IGFueSkge31cbn1cbiIsImV4cG9ydCBjbGFzcyBEZWxvbk1vY2tDb25maWcge1xuICAvKiogw6jCp8KEw6XCiMKZw6XCrsKaw6TCucKJw6bClcKww6bCjcKuICovXG4gIGRhdGE6IGFueTtcbiAgLyoqIMOowq/Ct8OmwrHCgsOlwrvCtsOowr/Cn8OvwrzCjMOlwo3ClcOkwr3CjcOvwrzCmsOmwq/Cq8OnwqfCksOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAzMDBgICovXG4gIGRlbGF5PyA9IDMwMDtcbiAgLyoqIMOmwpjCr8OlwpDCpsOlwrzCusOlwojCtsOmwonCgMOmwpzCicOowq/Ct8OmwrHCgsOpwoPCvU1vY2vDr8K8woxgdHJ1ZWAgw6jCocKow6fCpMK6w6XCvcKTw6jCr8K3w6bCscKCw6fCmsKEVVJMw6TCuMKNw6XCrcKYw6XCnMKow6bCl8K2w6fCm8K0w6bCjsKlw6jCv8KUw6XCm8KeIDQwNCDDqcKUwpnDqMKvwq/Dr8K8woxgZmFsc2VgIMOowqHCqMOnwqTCusOmwpzCqsOlwpHCvcOkwrjCrcOmwpfCtsOlwo/CkcOpwoDCgcOnwpzCn8Olwq7CnkhUVFDDqMKvwrfDpsKxwoIgKi9cbiAgZm9yY2U/ID0gZmFsc2U7XG4gIC8qKiDDpsKYwq/DpcKQwqbDpsKJwpPDpcKNwrAgTW9jayDDqMKvwrfDpsKxwoLDpMK/wqHDpsKBwq/Dr8K8wozDpcK8wqXDqMKhwqXDpsK1wo/DqMKnwojDpcKZwqjDpsKXwqBOZXR3b3Jrw6TCv8Khw6bCgcKvICovXG4gIGxvZz8gPSB0cnVlO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEZWxvbk1vY2tDb25maWcgfSBmcm9tICcuL21vY2suY29uZmlnJztcbmltcG9ydCB7IE1vY2tDYWNoZWRSdWxlLCBNb2NrUnVsZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1vY2tTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBjYWNoZWQ6IE1vY2tDYWNoZWRSdWxlW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZzogRGVsb25Nb2NrQ29uZmlnKSB7XG4gICAgdGhpcy5hcHBseU1vY2soKTtcbiAgICBkZWxldGUgdGhpcy5jb25maWcuZGF0YTtcbiAgfVxuXG4gIC8vIHJlZ2lvbjogcGFyc2UgcnVsZVxuXG4gIHByaXZhdGUgYXBwbHlNb2NrKCkge1xuICAgIHRoaXMuY2FjaGVkID0gW107XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMucmVhbEFwcGx5TW9jaygpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMub3V0cHV0RXJyb3IoZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZWFsQXBwbHlNb2NrKCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbmZpZy5kYXRhO1xuICAgIGlmICghZGF0YSkgcmV0dXJuO1xuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBydWxlcyA9IGRhdGFba2V5XTtcbiAgICAgIGlmICghcnVsZXMpIHJldHVybjtcbiAgICAgIE9iamVjdC5rZXlzKHJ1bGVzKS5mb3JFYWNoKChydWxlS2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydWxlc1tydWxlS2V5XTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICEoXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgfHxcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHxcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgICAgYG1vY2sgdmFsdWUgb2YgWyR7a2V5fS0ke3J1bGVLZXl9XSBzaG91bGQgYmUgZnVuY3Rpb24gb3Igb2JqZWN0IG9yIHN0cmluZywgYnV0IGdvdCAke3R5cGVvZiB2YWx1ZX1gLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcnVsZSA9IHRoaXMuZ2VuUnVsZShydWxlS2V5LCB2YWx1ZSk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBbJ0dFVCcsICdQT1NUJywgJ1BVVCcsICdIRUFEJywgJ0RFTEVURScsICdQQVRDSCcsICdPUFRJT05TJ10uaW5kZXhPZihcbiAgICAgICAgICAgIHJ1bGUubWV0aG9kLFxuICAgICAgICAgICkgPT09IC0xXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IEVycm9yKGBtZXRob2Qgb2YgJHtrZXl9LSR7cnVsZUtleX0gaXMgbm90IHZhbGlkYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuY2FjaGVkLmZpbmQoXG4gICAgICAgICAgdyA9PiB3LnVybCA9PT0gcnVsZS51cmwgJiYgdy5tZXRob2QgPT09IHJ1bGUubWV0aG9kLFxuICAgICAgICApO1xuICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgIGl0ZW0uY2FsbGJhY2sgPSBydWxlLmNhbGxiYWNrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2FjaGVkLnB1c2gocnVsZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIHJlZ3VsYXIgb3JkZXJpbmdcbiAgICB0aGlzLmNhY2hlZC5zb3J0KFxuICAgICAgKGEsIGIpID0+XG4gICAgICAgIChiLm1hcnRjaGVyIHx8ICcnKS50b1N0cmluZygpLmxlbmd0aCAtXG4gICAgICAgIChhLm1hcnRjaGVyIHx8ICcnKS50b1N0cmluZygpLmxlbmd0aCxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5SdWxlKGtleTogc3RyaW5nLCBjYWxsYmFjazogYW55KTogTW9ja0NhY2hlZFJ1bGUge1xuICAgIGxldCBtZXRob2QgPSAnR0VUJztcbiAgICBsZXQgdXJsID0ga2V5O1xuXG4gICAgaWYgKGtleS5pbmRleE9mKCcgJykgPiAtMSkge1xuICAgICAgY29uc3Qgc3BsaXRlZCA9IGtleS5zcGxpdCgnICcpO1xuICAgICAgbWV0aG9kID0gc3BsaXRlZFswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgdXJsID0gc3BsaXRlZFsxXTtcbiAgICB9XG5cbiAgICBsZXQgbWFydGNoZXI6IFJlZ0V4cCA9IG51bGw7XG4gICAgbGV0IHNlZ21lbnRzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGlmICh+dXJsLmluZGV4T2YoJzonKSkge1xuICAgICAgc2VnbWVudHMgPSB1cmwhXG4gICAgICAgIC5zcGxpdCgnLycpXG4gICAgICAgIC5maWx0ZXIoc2VnbWVudCA9PiBzZWdtZW50LnN0YXJ0c1dpdGgoJzonKSlcbiAgICAgICAgLm1hcCh2ID0+IHYuc3Vic3RyaW5nKDEpKTtcbiAgICAgIGNvbnN0IHJlU3RyID0gdXJsIVxuICAgICAgICAuc3BsaXQoJy8nKVxuICAgICAgICAubWFwKHNlZ21lbnQgPT4gKHNlZ21lbnQuc3RhcnRzV2l0aCgnOicpID8gYChbXi9dKylgIDogc2VnbWVudCkpXG4gICAgICAgIC5qb2luKCcvJyk7XG4gICAgICBtYXJ0Y2hlciA9IG5ldyBSZWdFeHAocmVTdHIsICdpJyk7XG4gICAgfSBlbHNlIGlmICgvKFxcKFteKV0rXFwpKS9pLnRlc3QodXJsKSkge1xuICAgICAgbWFydGNoZXIgPSBuZXcgUmVnRXhwKHVybCwgJ2knKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdXJsLFxuICAgICAgbWFydGNoZXIsXG4gICAgICBzZWdtZW50cyxcbiAgICAgIGNhbGxiYWNrLFxuICAgICAgbWV0aG9kOiBtZXRob2QudG9VcHBlckNhc2UoKSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBvdXRwdXRFcnJvcihlcnJvcjogYW55KSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBlcnJvci5tZXNzYWdlLnNwbGl0KCc6ICcpWzBdO1xuICAgIGNvbnN0IGVycm9ycyA9IGVycm9yLnN0YWNrXG4gICAgICAuc3BsaXQoJ1xcbicpXG4gICAgICAuZmlsdGVyKGxpbmUgPT4gbGluZS50cmltKCkuaW5kZXhPZignYXQgJykgIT09IDApXG4gICAgICAubWFwKGxpbmUgPT4gbGluZS5yZXBsYWNlKGAke2ZpbGVQYXRofTogYCwgJycpKTtcbiAgICBlcnJvcnMuc3BsaWNlKDEsIDAsIFsnJ10pO1xuXG4gICAgY29uc29sZS5ncm91cCgpO1xuICAgIGNvbnNvbGUud2FybihgPT09PT09PT09PUZhaWxlZCB0byBwYXJzZSBtb2NrIGNvbmZpZy49PT09PT09PT09YCk7XG4gICAgY29uc29sZS5sb2coZXJyb3JzLmpvaW4oJ1xcbicpKTtcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG5cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxuXG4gIC8vIGVuZHJlZ2lvblxuXG4gIGdldFJ1bGUobWV0aG9kOiBzdHJpbmcsIHVybDogc3RyaW5nKTogTW9ja1J1bGUge1xuICAgIG1ldGhvZCA9IChtZXRob2QgfHwgJ0dFVCcpLnRvVXBwZXJDYXNlKCk7XG4gICAgY29uc3QgcGFyYW1zOiBhbnkgPSB7fTtcbiAgICBjb25zdCBsaXN0ID1cbiAgICAgIHRoaXMuY2FjaGVkLmZpbHRlcihcbiAgICAgICAgdyA9PlxuICAgICAgICAgIHcubWV0aG9kID09PSBtZXRob2QgJiZcbiAgICAgICAgICAody5tYXJ0Y2hlciA/IHcubWFydGNoZXIudGVzdCh1cmwpIDogdy51cmwgPT09IHVybCksXG4gICAgICApO1xuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgcmV0ID0gbGlzdC5maW5kKHcgPT4gdy51cmwgPT09IHVybCkgfHwgbGlzdFswXTtcbiAgICBpZiAocmV0Lm1hcnRjaGVyKSB7XG4gICAgICBjb25zdCBleGVjQXJyID0gcmV0Lm1hcnRjaGVyLmV4ZWModXJsKTtcbiAgICAgIGV4ZWNBcnIuc2xpY2UoMSkubWFwKCh2YWx1ZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIHBhcmFtc1tyZXQuc2VnbWVudHNbaW5kZXhdXSA9IHZhbHVlO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB1cmwsXG4gICAgICBtZXRob2Q6IHJldC5tZXRob2QsXG4gICAgICBwYXJhbXMsXG4gICAgICBjYWxsYmFjazogcmV0LmNhbGxiYWNrLFxuICAgIH07XG4gIH1cblxuICBjbGVhckNhY2hlKCkge1xuICAgIHRoaXMuY2FjaGVkID0gW107XG4gIH1cblxuICBnZXQgcnVsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FjaGVkO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckNhY2hlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBSZXF1ZXN0LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cFNlbnRFdmVudCxcbiAgSHR0cEhlYWRlclJlc3BvbnNlLFxuICBIdHRwUHJvZ3Jlc3NFdmVudCxcbiAgSHR0cFJlc3BvbnNlLFxuICBIdHRwVXNlckV2ZW50LFxuICBIdHRwRXJyb3JSZXNwb25zZSxcbiAgSHR0cEV2ZW50LFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlbGF5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEZWxvbk1vY2tDb25maWcgfSBmcm9tICcuL21vY2suY29uZmlnJztcbmltcG9ydCB7IE1vY2tTZXJ2aWNlIH0gZnJvbSAnLi9tb2NrLnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9ja1N0YXR1c0Vycm9yIH0gZnJvbSAnLi9zdGF0dXMuZXJyb3InO1xuaW1wb3J0IHsgTW9ja1JlcXVlc3QgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNb2NrSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge31cblxuICBpbnRlcmNlcHQoXG4gICAgcmVxOiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyLFxuICApOiBPYnNlcnZhYmxlPFxuICAgIHwgSHR0cFNlbnRFdmVudFxuICAgIHwgSHR0cEhlYWRlclJlc3BvbnNlXG4gICAgfCBIdHRwUHJvZ3Jlc3NFdmVudFxuICAgIHwgSHR0cFJlc3BvbnNlPGFueT5cbiAgICB8IEh0dHBVc2VyRXZlbnQ8YW55PlxuICA+IHtcbiAgICBjb25zdCBzcmMgPSB0aGlzLmluamVjdG9yLmdldChNb2NrU2VydmljZSk7XG4gICAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHtcbiAgICAgICAgZGVsYXk6IDMwMCxcbiAgICAgICAgZm9yY2U6IGZhbHNlLFxuICAgICAgICBsb2c6IHRydWUsXG4gICAgICB9LFxuICAgICAgdGhpcy5pbmplY3Rvci5nZXQoRGVsb25Nb2NrQ29uZmlnLCBudWxsKSxcbiAgICApO1xuICAgIGNvbnN0IHJ1bGUgPSBzcmMuZ2V0UnVsZShyZXEubWV0aG9kLCByZXEudXJsLnNwbGl0KCc/JylbMF0pO1xuICAgIGlmICghcnVsZSAmJiAhY29uZmlnLmZvcmNlKSB7XG4gICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbiAgICB9XG5cbiAgICBsZXQgcmVzOiBhbnk7XG4gICAgc3dpdGNoICh0eXBlb2YgcnVsZS5jYWxsYmFjaykge1xuICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgICBjb25zdCBtb2NrUmVxdWVzdDogTW9ja1JlcXVlc3QgPSB7XG4gICAgICAgICAgb3JpZ2luYWw6IHJlcSxcbiAgICAgICAgICBib2R5OiByZXEuYm9keSxcbiAgICAgICAgICBxdWVyeVN0cmluZzoge30sXG4gICAgICAgICAgaGVhZGVyczoge30sXG4gICAgICAgICAgcGFyYW1zOiBydWxlLnBhcmFtcyxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgdXJsUGFyYW1zID0gcmVxLnVybC5zcGxpdCgnPycpO1xuICAgICAgICBpZiAodXJsUGFyYW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICB1cmxQYXJhbXNbMV0uc3BsaXQoJyYnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbUFyciA9IGl0ZW0uc3BsaXQoJz0nKTtcbiAgICAgICAgICAgIG1vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nW2l0ZW1BcnJbMF1dID0gaXRlbUFyclsxXTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXEucGFyYW1zXG4gICAgICAgICAgLmtleXMoKVxuICAgICAgICAgIC5mb3JFYWNoKGtleSA9PiAobW9ja1JlcXVlc3QucXVlcnlTdHJpbmdba2V5XSA9IHJlcS5wYXJhbXMuZ2V0KGtleSkpKTtcbiAgICAgICAgcmVxLmhlYWRlcnNcbiAgICAgICAgICAua2V5cygpXG4gICAgICAgICAgLmZvckVhY2goa2V5ID0+IChtb2NrUmVxdWVzdC5oZWFkZXJzW2tleV0gPSByZXEuaGVhZGVycy5nZXQoa2V5KSkpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzID0gcnVsZS5jYWxsYmFjay5jYWxsKHRoaXMsIG1vY2tSZXF1ZXN0KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGxldCBlcnJSZXM6IEh0dHBFcnJvclJlc3BvbnNlO1xuICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgTW9ja1N0YXR1c0Vycm9yKSB7XG4gICAgICAgICAgICBlcnJSZXMgPSBuZXcgSHR0cEVycm9yUmVzcG9uc2Uoe1xuICAgICAgICAgICAgICB1cmw6IHJlcS51cmwsXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLFxuICAgICAgICAgICAgICBzdGF0dXM6IGUuc3RhdHVzLFxuICAgICAgICAgICAgICBzdGF0dXNUZXh0OiBlLnN0YXR1c1RleHQgfHwgJ1Vua25vd24gRXJyb3InLFxuICAgICAgICAgICAgICBlcnJvcjogZS5lcnJvcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGNvbmZpZy5sb2cpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgIGAlYyDDsMKfwpHCvU1PQ0sgJHtlLnN0YXR1c30gU1RBVFVTIGAsXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQ6IzAwMDtjb2xvcjojYmFkYTU1JyxcbiAgICAgICAgICAgICAgICByZXEudXJsLFxuICAgICAgICAgICAgICAgIGVyclJlcyxcbiAgICAgICAgICAgICAgICByZXEsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgIGBQbGVhc2UgdXNlIE1vY2tTdGF0dXNFcnJvciB0byB0aHJvdyBzdGF0dXMgZXJyb3JgLFxuICAgICAgICAgICAgICBlLFxuICAgICAgICAgICAgICByZXEsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxIdHRwRXZlbnQ8YW55Pj4pID0+IHtcbiAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVyclJlcyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXMgPSBydWxlLmNhbGxiYWNrO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCByZXNwb25zZTogSHR0cFJlc3BvbnNlPGFueT4gPSBuZXcgSHR0cFJlc3BvbnNlKHtcbiAgICAgIHN0YXR1czogMjAwLFxuICAgICAgYm9keTogcmVzLFxuICAgICAgdXJsOiByZXEudXJsLFxuICAgIH0pO1xuICAgIGlmIChjb25maWcubG9nKVxuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICclYyDDsMKfwpHCvU1PQ0sgJyxcbiAgICAgICAgJ2JhY2tncm91bmQ6IzAwMDtjb2xvcjojYmFkYTU1JyxcbiAgICAgICAgcmVxLnVybCxcbiAgICAgICAgcmVzcG9uc2UsXG4gICAgICAgIHJlcSxcbiAgICAgICk7XG4gICAgcmV0dXJuIG9mKHJlc3BvbnNlKS5waXBlKGRlbGF5KGNvbmZpZy5kZWxheSkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IERlbG9uTW9ja0NvbmZpZyB9IGZyb20gJy4vbW9jay5jb25maWcnO1xuaW1wb3J0IHsgTW9ja1NlcnZpY2UgfSBmcm9tICcuL21vY2suc2VydmljZSc7XG5pbXBvcnQgeyBNb2NrSW50ZXJjZXB0b3IgfSBmcm9tICcuL21vY2suaW50ZXJjZXB0b3InO1xuXG5ATmdNb2R1bGUoe30pXG5leHBvcnQgY2xhc3MgRGVsb25Nb2NrTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBEZWxvbk1vY2tDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERlbG9uTW9ja01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBNb2NrU2VydmljZSxcbiAgICAgICAgeyBwcm92aWRlOiBEZWxvbk1vY2tDb25maWcsIHVzZVZhbHVlOiBjb25maWcgfSxcbiAgICAgICAgeyBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUywgdXNlQ2xhc3M6IE1vY2tJbnRlcmNlcHRvciwgbXVsdGk6IHRydWUgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JDaGlsZCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERlbG9uTW9ja01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogTW9ja0ludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZSB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkh0dHBFcnJvclJlc3BvbnNlIiwiT2JzZXJ2YWJsZSIsIkh0dHBSZXNwb25zZSIsIm9mIiwiZGVsYXkiLCJJbmplY3RvciIsIkhUVFBfSU5URVJDRVBUT1JTIiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxRQUFBO1FBRUUseUJBQW1CLE1BQWMsRUFBUyxLQUFXO1lBQWxDLFdBQU0sR0FBTixNQUFNLENBQVE7WUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFNO1NBQUk7OEJBRjNEO1FBR0M7Ozs7OztBQ0hELFFBQUE7Ozs7O3lCQUlXLEdBQUc7Ozs7eUJBRUgsS0FBSzs7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