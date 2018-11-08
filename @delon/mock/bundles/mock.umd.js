/**
 * @license ng-alain(cipchk@qq.com) v2.0.0-rc.2
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
                if (config.log) {
                    console.log("%c\uD83D\uDC7D" + req.method + "->" + req.url + "->request", 'background:#000;color:#bada55', req);
                    console.log("%c\uD83D\uDC7D" + req.method + "->" + req.url + "->response", 'background:#000;color:#bada55', response);
                }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9tb2NrL3NyYy9zdGF0dXMuZXJyb3IudHMiLCJuZzovL0BkZWxvbi9tb2NrL3NyYy9tb2NrLmNvbmZpZy50cyIsIm5nOi8vQGRlbG9uL21vY2svc3JjL21vY2suc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL21vY2svc3JjL21vY2suaW50ZXJjZXB0b3IudHMiLCJuZzovL0BkZWxvbi9tb2NrL3NyYy9tb2NrLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTW9ja1N0YXR1c0Vycm9yIHtcbiAgc3RhdHVzVGV4dDogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3RhdHVzOiBudW1iZXIsIHB1YmxpYyBlcnJvcj86IGFueSkge31cbn1cbiIsImV4cG9ydCBjbGFzcyBEZWxvbk1vY2tDb25maWcge1xuICAvKiogw6jCp8KEw6XCiMKZw6XCrsKaw6TCucKJw6bClcKww6bCjcKuICovXG4gIGRhdGE6IGFueTtcbiAgLyoqIMOowq/Ct8OmwrHCgsOlwrvCtsOowr/Cn8OvwrzCjMOlwo3ClcOkwr3CjcOvwrzCmsOmwq/Cq8OnwqfCksOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAzMDBgICovXG4gIGRlbGF5PyA9IDMwMDtcbiAgLyoqIMOmwpjCr8OlwpDCpsOlwrzCusOlwojCtsOmwonCgMOmwpzCicOowq/Ct8OmwrHCgsOpwoPCvU1vY2vDr8K8woxgdHJ1ZWAgw6jCocKow6fCpMK6w6XCvcKTw6jCr8K3w6bCscKCw6fCmsKEVVJMw6TCuMKNw6XCrcKYw6XCnMKow6bCl8K2w6fCm8K0w6bCjsKlw6jCv8KUw6XCm8KeIDQwNCDDqcKUwpnDqMKvwq/Dr8K8woxgZmFsc2VgIMOowqHCqMOnwqTCusOmwpzCqsOlwpHCvcOkwrjCrcOmwpfCtsOlwo/CkcOpwoDCgcOnwpzCn8Olwq7CnkhUVFDDqMKvwrfDpsKxwoIgKi9cbiAgZm9yY2U/ID0gZmFsc2U7XG4gIC8qKiDDpsKYwq/DpcKQwqbDpsKJwpPDpcKNwrAgTW9jayDDqMKvwrfDpsKxwoLDpMK/wqHDpsKBwq/Dr8K8wozDpcK8wqXDqMKhwqXDpsK1wo/DqMKnwojDpcKZwqjDpsKXwqBOZXR3b3Jrw6TCv8Khw6bCgcKvICovXG4gIGxvZz8gPSB0cnVlO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEZWxvbk1vY2tDb25maWcgfSBmcm9tICcuL21vY2suY29uZmlnJztcbmltcG9ydCB7IE1vY2tDYWNoZWRSdWxlLCBNb2NrUnVsZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1vY2tTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBjYWNoZWQ6IE1vY2tDYWNoZWRSdWxlW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZzogRGVsb25Nb2NrQ29uZmlnKSB7XG4gICAgdGhpcy5hcHBseU1vY2soKTtcbiAgICBkZWxldGUgdGhpcy5jb25maWcuZGF0YTtcbiAgfVxuXG4gIC8vICNyZWdpb24gcGFyc2UgcnVsZVxuXG4gIHByaXZhdGUgYXBwbHlNb2NrKCkge1xuICAgIHRoaXMuY2FjaGVkID0gW107XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMucmVhbEFwcGx5TW9jaygpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMub3V0cHV0RXJyb3IoZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZWFsQXBwbHlNb2NrKCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbmZpZy5kYXRhO1xuICAgIGlmICghZGF0YSkgcmV0dXJuO1xuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBydWxlcyA9IGRhdGFba2V5XTtcbiAgICAgIGlmICghcnVsZXMpIHJldHVybjtcbiAgICAgIE9iamVjdC5rZXlzKHJ1bGVzKS5mb3JFYWNoKChydWxlS2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydWxlc1tydWxlS2V5XTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICEoXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgfHxcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHxcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgICAgYG1vY2sgdmFsdWUgb2YgWyR7a2V5fS0ke3J1bGVLZXl9XSBzaG91bGQgYmUgZnVuY3Rpb24gb3Igb2JqZWN0IG9yIHN0cmluZywgYnV0IGdvdCAke3R5cGVvZiB2YWx1ZX1gLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcnVsZSA9IHRoaXMuZ2VuUnVsZShydWxlS2V5LCB2YWx1ZSk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBbJ0dFVCcsICdQT1NUJywgJ1BVVCcsICdIRUFEJywgJ0RFTEVURScsICdQQVRDSCcsICdPUFRJT05TJ10uaW5kZXhPZihcbiAgICAgICAgICAgIHJ1bGUubWV0aG9kLFxuICAgICAgICAgICkgPT09IC0xXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IEVycm9yKGBtZXRob2Qgb2YgJHtrZXl9LSR7cnVsZUtleX0gaXMgbm90IHZhbGlkYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuY2FjaGVkLmZpbmQoXG4gICAgICAgICAgdyA9PiB3LnVybCA9PT0gcnVsZS51cmwgJiYgdy5tZXRob2QgPT09IHJ1bGUubWV0aG9kLFxuICAgICAgICApO1xuICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgIGl0ZW0uY2FsbGJhY2sgPSBydWxlLmNhbGxiYWNrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2FjaGVkLnB1c2gocnVsZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIHJlZ3VsYXIgb3JkZXJpbmdcbiAgICB0aGlzLmNhY2hlZC5zb3J0KFxuICAgICAgKGEsIGIpID0+XG4gICAgICAgIChiLm1hcnRjaGVyIHx8ICcnKS50b1N0cmluZygpLmxlbmd0aCAtXG4gICAgICAgIChhLm1hcnRjaGVyIHx8ICcnKS50b1N0cmluZygpLmxlbmd0aCxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5SdWxlKGtleTogc3RyaW5nLCBjYWxsYmFjazogYW55KTogTW9ja0NhY2hlZFJ1bGUge1xuICAgIGxldCBtZXRob2QgPSAnR0VUJztcbiAgICBsZXQgdXJsID0ga2V5O1xuXG4gICAgaWYgKGtleS5pbmRleE9mKCcgJykgPiAtMSkge1xuICAgICAgY29uc3Qgc3BsaXRlZCA9IGtleS5zcGxpdCgnICcpO1xuICAgICAgbWV0aG9kID0gc3BsaXRlZFswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgdXJsID0gc3BsaXRlZFsxXTtcbiAgICB9XG5cbiAgICBsZXQgbWFydGNoZXI6IFJlZ0V4cCA9IG51bGw7XG4gICAgbGV0IHNlZ21lbnRzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGlmICh+dXJsLmluZGV4T2YoJzonKSkge1xuICAgICAgc2VnbWVudHMgPSB1cmwhXG4gICAgICAgIC5zcGxpdCgnLycpXG4gICAgICAgIC5maWx0ZXIoc2VnbWVudCA9PiBzZWdtZW50LnN0YXJ0c1dpdGgoJzonKSlcbiAgICAgICAgLm1hcCh2ID0+IHYuc3Vic3RyaW5nKDEpKTtcbiAgICAgIGNvbnN0IHJlU3RyID0gdXJsIVxuICAgICAgICAuc3BsaXQoJy8nKVxuICAgICAgICAubWFwKHNlZ21lbnQgPT4gKHNlZ21lbnQuc3RhcnRzV2l0aCgnOicpID8gYChbXi9dKylgIDogc2VnbWVudCkpXG4gICAgICAgIC5qb2luKCcvJyk7XG4gICAgICBtYXJ0Y2hlciA9IG5ldyBSZWdFeHAocmVTdHIsICdpJyk7XG4gICAgfSBlbHNlIGlmICgvKFxcKFteKV0rXFwpKS9pLnRlc3QodXJsKSkge1xuICAgICAgbWFydGNoZXIgPSBuZXcgUmVnRXhwKHVybCwgJ2knKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdXJsLFxuICAgICAgbWFydGNoZXIsXG4gICAgICBzZWdtZW50cyxcbiAgICAgIGNhbGxiYWNrLFxuICAgICAgbWV0aG9kOiBtZXRob2QudG9VcHBlckNhc2UoKSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBvdXRwdXRFcnJvcihlcnJvcjogYW55KSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBlcnJvci5tZXNzYWdlLnNwbGl0KCc6ICcpWzBdO1xuICAgIGNvbnN0IGVycm9ycyA9IGVycm9yLnN0YWNrXG4gICAgICAuc3BsaXQoJ1xcbicpXG4gICAgICAuZmlsdGVyKGxpbmUgPT4gbGluZS50cmltKCkuaW5kZXhPZignYXQgJykgIT09IDApXG4gICAgICAubWFwKGxpbmUgPT4gbGluZS5yZXBsYWNlKGAke2ZpbGVQYXRofTogYCwgJycpKTtcbiAgICBlcnJvcnMuc3BsaWNlKDEsIDAsIFsnJ10pO1xuXG4gICAgY29uc29sZS5ncm91cCgpO1xuICAgIGNvbnNvbGUud2FybihgPT09PT09PT09PUZhaWxlZCB0byBwYXJzZSBtb2NrIGNvbmZpZy49PT09PT09PT09YCk7XG4gICAgY29uc29sZS5sb2coZXJyb3JzLmpvaW4oJ1xcbicpKTtcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG5cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICBnZXRSdWxlKG1ldGhvZDogc3RyaW5nLCB1cmw6IHN0cmluZyk6IE1vY2tSdWxlIHtcbiAgICBtZXRob2QgPSAobWV0aG9kIHx8ICdHRVQnKS50b1VwcGVyQ2FzZSgpO1xuICAgIGNvbnN0IHBhcmFtczogYW55ID0ge307XG4gICAgY29uc3QgbGlzdCA9XG4gICAgICB0aGlzLmNhY2hlZC5maWx0ZXIoXG4gICAgICAgIHcgPT5cbiAgICAgICAgICB3Lm1ldGhvZCA9PT0gbWV0aG9kICYmXG4gICAgICAgICAgKHcubWFydGNoZXIgPyB3Lm1hcnRjaGVyLnRlc3QodXJsKSA6IHcudXJsID09PSB1cmwpLFxuICAgICAgKTtcbiAgICBpZiAobGlzdC5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHJldCA9IGxpc3QuZmluZCh3ID0+IHcudXJsID09PSB1cmwpIHx8IGxpc3RbMF07XG4gICAgaWYgKHJldC5tYXJ0Y2hlcikge1xuICAgICAgY29uc3QgZXhlY0FyciA9IHJldC5tYXJ0Y2hlci5leGVjKHVybCk7XG4gICAgICBleGVjQXJyLnNsaWNlKDEpLm1hcCgodmFsdWU6IHN0cmluZywgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBwYXJhbXNbcmV0LnNlZ21lbnRzW2luZGV4XV0gPSB2YWx1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdXJsLFxuICAgICAgbWV0aG9kOiByZXQubWV0aG9kLFxuICAgICAgcGFyYW1zLFxuICAgICAgY2FsbGJhY2s6IHJldC5jYWxsYmFjayxcbiAgICB9O1xuICB9XG5cbiAgY2xlYXJDYWNoZSgpIHtcbiAgICB0aGlzLmNhY2hlZCA9IFtdO1xuICB9XG5cbiAgZ2V0IHJ1bGVzKCkge1xuICAgIHJldHVybiB0aGlzLmNhY2hlZDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJDYWNoZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwUmVxdWVzdCxcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBTZW50RXZlbnQsXG4gIEh0dHBIZWFkZXJSZXNwb25zZSxcbiAgSHR0cFByb2dyZXNzRXZlbnQsXG4gIEh0dHBSZXNwb25zZSxcbiAgSHR0cFVzZXJFdmVudCxcbiAgSHR0cEVycm9yUmVzcG9uc2UsXG4gIEh0dHBFdmVudCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWxheSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRGVsb25Nb2NrQ29uZmlnIH0gZnJvbSAnLi9tb2NrLmNvbmZpZyc7XG5pbXBvcnQgeyBNb2NrU2VydmljZSB9IGZyb20gJy4vbW9jay5zZXJ2aWNlJztcbmltcG9ydCB7IE1vY2tTdGF0dXNFcnJvciB9IGZyb20gJy4vc3RhdHVzLmVycm9yJztcbmltcG9ydCB7IE1vY2tSZXF1ZXN0IH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTW9ja0ludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHt9XG5cbiAgaW50ZXJjZXB0KFxuICAgIHJlcTogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlcixcbiAgKTogT2JzZXJ2YWJsZTxcbiAgICB8IEh0dHBTZW50RXZlbnRcbiAgICB8IEh0dHBIZWFkZXJSZXNwb25zZVxuICAgIHwgSHR0cFByb2dyZXNzRXZlbnRcbiAgICB8IEh0dHBSZXNwb25zZTxhbnk+XG4gICAgfCBIdHRwVXNlckV2ZW50PGFueT5cbiAgPiB7XG4gICAgY29uc3Qgc3JjID0gdGhpcy5pbmplY3Rvci5nZXQoTW9ja1NlcnZpY2UpO1xuICAgIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7XG4gICAgICAgIGRlbGF5OiAzMDAsXG4gICAgICAgIGZvcmNlOiBmYWxzZSxcbiAgICAgICAgbG9nOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHRoaXMuaW5qZWN0b3IuZ2V0KERlbG9uTW9ja0NvbmZpZywgbnVsbCksXG4gICAgKTtcbiAgICBjb25zdCBydWxlID0gc3JjLmdldFJ1bGUocmVxLm1ldGhvZCwgcmVxLnVybC5zcGxpdCgnPycpWzBdKTtcbiAgICBpZiAoIXJ1bGUgJiYgIWNvbmZpZy5mb3JjZSkge1xuICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSk7XG4gICAgfVxuXG4gICAgbGV0IHJlczogYW55O1xuICAgIHN3aXRjaCAodHlwZW9mIHJ1bGUuY2FsbGJhY2spIHtcbiAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgICAgY29uc3QgbW9ja1JlcXVlc3Q6IE1vY2tSZXF1ZXN0ID0ge1xuICAgICAgICAgIG9yaWdpbmFsOiByZXEsXG4gICAgICAgICAgYm9keTogcmVxLmJvZHksXG4gICAgICAgICAgcXVlcnlTdHJpbmc6IHt9LFxuICAgICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICAgIHBhcmFtczogcnVsZS5wYXJhbXMsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHVybFBhcmFtcyA9IHJlcS51cmwuc3BsaXQoJz8nKTtcbiAgICAgICAgaWYgKHVybFBhcmFtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgdXJsUGFyYW1zWzFdLnNwbGl0KCcmJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1BcnIgPSBpdGVtLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBpdGVtQXJyWzBdO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBpdGVtQXJyWzFdO1xuICAgICAgICAgICAgLy8gaXMgYXJyYXlcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhtb2NrUmVxdWVzdC5xdWVyeVN0cmluZykuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobW9ja1JlcXVlc3QucXVlcnlTdHJpbmdba2V5XSkpIHtcbiAgICAgICAgICAgICAgICBtb2NrUmVxdWVzdC5xdWVyeVN0cmluZ1trZXldID0gW21vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nW2tleV1dO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG1vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nW2tleV0ucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBtb2NrUmVxdWVzdC5xdWVyeVN0cmluZ1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVxLnBhcmFtc1xuICAgICAgICAgIC5rZXlzKClcbiAgICAgICAgICAuZm9yRWFjaChrZXkgPT4gKG1vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nW2tleV0gPSByZXEucGFyYW1zLmdldChrZXkpKSk7XG4gICAgICAgIHJlcS5oZWFkZXJzXG4gICAgICAgICAgLmtleXMoKVxuICAgICAgICAgIC5mb3JFYWNoKGtleSA9PiAobW9ja1JlcXVlc3QuaGVhZGVyc1trZXldID0gcmVxLmhlYWRlcnMuZ2V0KGtleSkpKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlcyA9IHJ1bGUuY2FsbGJhY2suY2FsbCh0aGlzLCBtb2NrUmVxdWVzdCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBsZXQgZXJyUmVzOiBIdHRwRXJyb3JSZXNwb25zZTtcbiAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIE1vY2tTdGF0dXNFcnJvcikge1xuICAgICAgICAgICAgZXJyUmVzID0gbmV3IEh0dHBFcnJvclJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgdXJsOiByZXEudXJsLFxuICAgICAgICAgICAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcbiAgICAgICAgICAgICAgc3RhdHVzOiBlLnN0YXR1cyxcbiAgICAgICAgICAgICAgc3RhdHVzVGV4dDogZS5zdGF0dXNUZXh0IHx8ICdVbmtub3duIEVycm9yJyxcbiAgICAgICAgICAgICAgZXJyb3I6IGUuZXJyb3IsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChjb25maWcubG9nKVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICBgJWMgw7DCn8KRwr1NT0NLICR7ZS5zdGF0dXN9IFNUQVRVUyBgLFxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kOiMwMDA7Y29sb3I6I2JhZGE1NScsXG4gICAgICAgICAgICAgICAgcmVxLnVybCxcbiAgICAgICAgICAgICAgICBlcnJSZXMsXG4gICAgICAgICAgICAgICAgcmVxLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICBgUGxlYXNlIHVzZSBNb2NrU3RhdHVzRXJyb3IgdG8gdGhyb3cgc3RhdHVzIGVycm9yYCxcbiAgICAgICAgICAgICAgZSxcbiAgICAgICAgICAgICAgcmVxLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8SHR0cEV2ZW50PGFueT4+KSA9PiB7XG4gICAgICAgICAgICBvYnNlcnZlci5lcnJvcihlcnJSZXMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmVzID0gcnVsZS5jYWxsYmFjaztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzcG9uc2U6IEh0dHBSZXNwb25zZTxhbnk+ID0gbmV3IEh0dHBSZXNwb25zZSh7XG4gICAgICBzdGF0dXM6IDIwMCxcbiAgICAgIGJvZHk6IHJlcyxcbiAgICAgIHVybDogcmVxLnVybCxcbiAgICB9KTtcblxuICAgIGlmIChjb25maWcubG9nKSB7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgYCVjw7DCn8KRwr0ke3JlcS5tZXRob2R9LT4ke3JlcS51cmx9LT5yZXF1ZXN0YCxcbiAgICAgICAgJ2JhY2tncm91bmQ6IzAwMDtjb2xvcjojYmFkYTU1JyxcbiAgICAgICAgcmVxLFxuICAgICAgKTtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBgJWPDsMKfwpHCvSR7cmVxLm1ldGhvZH0tPiR7cmVxLnVybH0tPnJlc3BvbnNlYCxcbiAgICAgICAgJ2JhY2tncm91bmQ6IzAwMDtjb2xvcjojYmFkYTU1JyxcbiAgICAgICAgcmVzcG9uc2UsXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gb2YocmVzcG9uc2UpLnBpcGUoZGVsYXkoY29uZmlnLmRlbGF5KSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgRGVsb25Nb2NrQ29uZmlnIH0gZnJvbSAnLi9tb2NrLmNvbmZpZyc7XG5pbXBvcnQgeyBNb2NrU2VydmljZSB9IGZyb20gJy4vbW9jay5zZXJ2aWNlJztcbmltcG9ydCB7IE1vY2tJbnRlcmNlcHRvciB9IGZyb20gJy4vbW9jay5pbnRlcmNlcHRvcic7XG5cbkBOZ01vZHVsZSh7fSlcbmV4cG9ydCBjbGFzcyBEZWxvbk1vY2tNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IERlbG9uTW9ja0NvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRGVsb25Nb2NrTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIE1vY2tTZXJ2aWNlLFxuICAgICAgICB7IHByb3ZpZGU6IERlbG9uTW9ja0NvbmZpZywgdXNlVmFsdWU6IGNvbmZpZyB9LFxuICAgICAgICB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogTW9ja0ludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZSB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZvckNoaWxkKCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRGVsb25Nb2NrTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBNb2NrSW50ZXJjZXB0b3IsIG11bHRpOiB0cnVlIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiSHR0cEVycm9yUmVzcG9uc2UiLCJPYnNlcnZhYmxlIiwiSHR0cFJlc3BvbnNlIiwib2YiLCJkZWxheSIsIkluamVjdG9yIiwiSFRUUF9JTlRFUkNFUFRPUlMiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLFFBQUE7UUFFRSx5QkFBbUIsTUFBYyxFQUFTLEtBQVc7WUFBbEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtZQUFTLFVBQUssR0FBTCxLQUFLLENBQU07U0FBSTs4QkFGM0Q7UUFHQzs7Ozs7O0FDSEQsUUFBQTs7Ozs7eUJBSVcsR0FBRzs7Ozt5QkFFSCxLQUFLOzs7O3VCQUVQLElBQUk7OzhCQVJiO1FBU0M7Ozs7OztBQ1REO1FBUUUscUJBQW9CLE1BQXVCO1lBQXZCLFdBQU0sR0FBTixNQUFNLENBQWlCOzBCQUZSLEVBQUU7WUFHbkMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDekI7Ozs7UUFJTywrQkFBUzs7OztnQkFDZixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFDakIsSUFBSTtvQkFDRixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7aUJBQ3RCO2dCQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNWLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFD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