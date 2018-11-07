/**
 * @license ng-alain(cipchk@qq.com) v2.0.0-rc.2-b66d50e
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var MockService = /** @class */ (function () {
        function MockService(config) {
            this.config = config;
            this.cached = [];
            this.applyMock();
            delete this.config.data;
        }
        // #region parse rule
        // #region parse rule
        /**
         * @return {?}
         */
        MockService.prototype.applyMock =
            // #region parse rule
            /**
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
                    segments = ( /** @type {?} */(url)).split('/')
                        .filter(function (segment) { return segment.startsWith(':'); })
                        .map(function (v) { return v.substring(1); });
                    /** @type {?} */
                    var reStr = ( /** @type {?} */(url)).split('/')
                        .map(function (segment) { return (segment.startsWith(':') ? "([^/]+)" : segment); })
                        .join('/');
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
        // #endregion
        /**
         * @param {?} method
         * @param {?} url
         * @return {?}
         */
        MockService.prototype.getRule =
            // #endregion
            /**
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                            var errRes_1;
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.MockStatusError = MockStatusError;
    exports.MockService = MockService;
    exports.MockInterceptor = MockInterceptor;
    exports.DelonMockConfig = DelonMockConfig;
    exports.DelonMockModule = DelonMockModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9tb2NrL3NyYy9zdGF0dXMuZXJyb3IudHMiLCJuZzovL0BkZWxvbi9tb2NrL3NyYy9tb2NrLmNvbmZpZy50cyIsIm5nOi8vQGRlbG9uL21vY2svc3JjL21vY2suc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL21vY2svc3JjL21vY2suaW50ZXJjZXB0b3IudHMiLCJuZzovL0BkZWxvbi9tb2NrL3NyYy9tb2NrLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTW9ja1N0YXR1c0Vycm9yIHtcbiAgc3RhdHVzVGV4dDogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3RhdHVzOiBudW1iZXIsIHB1YmxpYyBlcnJvcj86IGFueSkge31cbn1cbiIsImV4cG9ydCBjbGFzcyBEZWxvbk1vY2tDb25maWcge1xuICAvKiogw6jCp8KEw6XCiMKZw6XCrsKaw6TCucKJw6bClcKww6bCjcKuICovXG4gIGRhdGE6IGFueTtcbiAgLyoqIMOowq/Ct8OmwrHCgsOlwrvCtsOowr/Cn8OvwrzCjMOlwo3ClcOkwr3CjcOvwrzCmsOmwq/Cq8OnwqfCksOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAzMDBgICovXG4gIGRlbGF5PyA9IDMwMDtcbiAgLyoqIMOmwpjCr8OlwpDCpsOlwrzCusOlwojCtsOmwonCgMOmwpzCicOowq/Ct8OmwrHCgsOpwoPCvU1vY2vDr8K8woxgdHJ1ZWAgw6jCocKow6fCpMK6w6XCvcKTw6jCr8K3w6bCscKCw6fCmsKEVVJMw6TCuMKNw6XCrcKYw6XCnMKow6bCl8K2w6fCm8K0w6bCjsKlw6jCv8KUw6XCm8KeIDQwNCDDqcKUwpnDqMKvwq/Dr8K8woxgZmFsc2VgIMOowqHCqMOnwqTCusOmwpzCqsOlwpHCvcOkwrjCrcOmwpfCtsOlwo/CkcOpwoDCgcOnwpzCn8Olwq7CnkhUVFDDqMKvwrfDpsKxwoIgKi9cbiAgZm9yY2U/ID0gZmFsc2U7XG4gIC8qKiDDpsKYwq/DpcKQwqbDpsKJwpPDpcKNwrAgTW9jayDDqMKvwrfDpsKxwoLDpMK/wqHDpsKBwq/Dr8K8wozDpcK8wqXDqMKhwqXDpsK1wo/DqMKnwojDpcKZwqjDpsKXwqBOZXR3b3Jrw6TCv8Khw6bCgcKvICovXG4gIGxvZz8gPSB0cnVlO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEZWxvbk1vY2tDb25maWcgfSBmcm9tICcuL21vY2suY29uZmlnJztcbmltcG9ydCB7IE1vY2tDYWNoZWRSdWxlLCBNb2NrUnVsZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1vY2tTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBjYWNoZWQ6IE1vY2tDYWNoZWRSdWxlW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZzogRGVsb25Nb2NrQ29uZmlnKSB7XG4gICAgdGhpcy5hcHBseU1vY2soKTtcbiAgICBkZWxldGUgdGhpcy5jb25maWcuZGF0YTtcbiAgfVxuXG4gIC8vICNyZWdpb24gcGFyc2UgcnVsZVxuXG4gIHByaXZhdGUgYXBwbHlNb2NrKCkge1xuICAgIHRoaXMuY2FjaGVkID0gW107XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMucmVhbEFwcGx5TW9jaygpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMub3V0cHV0RXJyb3IoZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZWFsQXBwbHlNb2NrKCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbmZpZy5kYXRhO1xuICAgIGlmICghZGF0YSkgcmV0dXJuO1xuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBydWxlcyA9IGRhdGFba2V5XTtcbiAgICAgIGlmICghcnVsZXMpIHJldHVybjtcbiAgICAgIE9iamVjdC5rZXlzKHJ1bGVzKS5mb3JFYWNoKChydWxlS2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydWxlc1tydWxlS2V5XTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICEoXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgfHxcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHxcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgICAgYG1vY2sgdmFsdWUgb2YgWyR7a2V5fS0ke3J1bGVLZXl9XSBzaG91bGQgYmUgZnVuY3Rpb24gb3Igb2JqZWN0IG9yIHN0cmluZywgYnV0IGdvdCAke3R5cGVvZiB2YWx1ZX1gLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcnVsZSA9IHRoaXMuZ2VuUnVsZShydWxlS2V5LCB2YWx1ZSk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBbJ0dFVCcsICdQT1NUJywgJ1BVVCcsICdIRUFEJywgJ0RFTEVURScsICdQQVRDSCcsICdPUFRJT05TJ10uaW5kZXhPZihcbiAgICAgICAgICAgIHJ1bGUubWV0aG9kLFxuICAgICAgICAgICkgPT09IC0xXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IEVycm9yKGBtZXRob2Qgb2YgJHtrZXl9LSR7cnVsZUtleX0gaXMgbm90IHZhbGlkYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuY2FjaGVkLmZpbmQoXG4gICAgICAgICAgdyA9PiB3LnVybCA9PT0gcnVsZS51cmwgJiYgdy5tZXRob2QgPT09IHJ1bGUubWV0aG9kLFxuICAgICAgICApO1xuICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgIGl0ZW0uY2FsbGJhY2sgPSBydWxlLmNhbGxiYWNrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2FjaGVkLnB1c2gocnVsZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIHJlZ3VsYXIgb3JkZXJpbmdcbiAgICB0aGlzLmNhY2hlZC5zb3J0KFxuICAgICAgKGEsIGIpID0+XG4gICAgICAgIChiLm1hcnRjaGVyIHx8ICcnKS50b1N0cmluZygpLmxlbmd0aCAtXG4gICAgICAgIChhLm1hcnRjaGVyIHx8ICcnKS50b1N0cmluZygpLmxlbmd0aCxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5SdWxlKGtleTogc3RyaW5nLCBjYWxsYmFjazogYW55KTogTW9ja0NhY2hlZFJ1bGUge1xuICAgIGxldCBtZXRob2QgPSAnR0VUJztcbiAgICBsZXQgdXJsID0ga2V5O1xuXG4gICAgaWYgKGtleS5pbmRleE9mKCcgJykgPiAtMSkge1xuICAgICAgY29uc3Qgc3BsaXRlZCA9IGtleS5zcGxpdCgnICcpO1xuICAgICAgbWV0aG9kID0gc3BsaXRlZFswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgdXJsID0gc3BsaXRlZFsxXTtcbiAgICB9XG5cbiAgICBsZXQgbWFydGNoZXI6IFJlZ0V4cCA9IG51bGw7XG4gICAgbGV0IHNlZ21lbnRzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGlmICh+dXJsLmluZGV4T2YoJzonKSkge1xuICAgICAgc2VnbWVudHMgPSB1cmwhXG4gICAgICAgIC5zcGxpdCgnLycpXG4gICAgICAgIC5maWx0ZXIoc2VnbWVudCA9PiBzZWdtZW50LnN0YXJ0c1dpdGgoJzonKSlcbiAgICAgICAgLm1hcCh2ID0+IHYuc3Vic3RyaW5nKDEpKTtcbiAgICAgIGNvbnN0IHJlU3RyID0gdXJsIVxuICAgICAgICAuc3BsaXQoJy8nKVxuICAgICAgICAubWFwKHNlZ21lbnQgPT4gKHNlZ21lbnQuc3RhcnRzV2l0aCgnOicpID8gYChbXi9dKylgIDogc2VnbWVudCkpXG4gICAgICAgIC5qb2luKCcvJyk7XG4gICAgICBtYXJ0Y2hlciA9IG5ldyBSZWdFeHAocmVTdHIsICdpJyk7XG4gICAgfSBlbHNlIGlmICgvKFxcKFteKV0rXFwpKS9pLnRlc3QodXJsKSkge1xuICAgICAgbWFydGNoZXIgPSBuZXcgUmVnRXhwKHVybCwgJ2knKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdXJsLFxuICAgICAgbWFydGNoZXIsXG4gICAgICBzZWdtZW50cyxcbiAgICAgIGNhbGxiYWNrLFxuICAgICAgbWV0aG9kOiBtZXRob2QudG9VcHBlckNhc2UoKSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBvdXRwdXRFcnJvcihlcnJvcjogYW55KSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBlcnJvci5tZXNzYWdlLnNwbGl0KCc6ICcpWzBdO1xuICAgIGNvbnN0IGVycm9ycyA9IGVycm9yLnN0YWNrXG4gICAgICAuc3BsaXQoJ1xcbicpXG4gICAgICAuZmlsdGVyKGxpbmUgPT4gbGluZS50cmltKCkuaW5kZXhPZignYXQgJykgIT09IDApXG4gICAgICAubWFwKGxpbmUgPT4gbGluZS5yZXBsYWNlKGAke2ZpbGVQYXRofTogYCwgJycpKTtcbiAgICBlcnJvcnMuc3BsaWNlKDEsIDAsIFsnJ10pO1xuXG4gICAgY29uc29sZS5ncm91cCgpO1xuICAgIGNvbnNvbGUud2FybihgPT09PT09PT09PUZhaWxlZCB0byBwYXJzZSBtb2NrIGNvbmZpZy49PT09PT09PT09YCk7XG4gICAgY29uc29sZS5sb2coZXJyb3JzLmpvaW4oJ1xcbicpKTtcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG5cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICBnZXRSdWxlKG1ldGhvZDogc3RyaW5nLCB1cmw6IHN0cmluZyk6IE1vY2tSdWxlIHtcbiAgICBtZXRob2QgPSAobWV0aG9kIHx8ICdHRVQnKS50b1VwcGVyQ2FzZSgpO1xuICAgIGNvbnN0IHBhcmFtczogYW55ID0ge307XG4gICAgY29uc3QgbGlzdCA9XG4gICAgICB0aGlzLmNhY2hlZC5maWx0ZXIoXG4gICAgICAgIHcgPT5cbiAgICAgICAgICB3Lm1ldGhvZCA9PT0gbWV0aG9kICYmXG4gICAgICAgICAgKHcubWFydGNoZXIgPyB3Lm1hcnRjaGVyLnRlc3QodXJsKSA6IHcudXJsID09PSB1cmwpLFxuICAgICAgKTtcbiAgICBpZiAobGlzdC5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHJldCA9IGxpc3QuZmluZCh3ID0+IHcudXJsID09PSB1cmwpIHx8IGxpc3RbMF07XG4gICAgaWYgKHJldC5tYXJ0Y2hlcikge1xuICAgICAgY29uc3QgZXhlY0FyciA9IHJldC5tYXJ0Y2hlci5leGVjKHVybCk7XG4gICAgICBleGVjQXJyLnNsaWNlKDEpLm1hcCgodmFsdWU6IHN0cmluZywgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBwYXJhbXNbcmV0LnNlZ21lbnRzW2luZGV4XV0gPSB2YWx1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdXJsLFxuICAgICAgbWV0aG9kOiByZXQubWV0aG9kLFxuICAgICAgcGFyYW1zLFxuICAgICAgY2FsbGJhY2s6IHJldC5jYWxsYmFjayxcbiAgICB9O1xuICB9XG5cbiAgY2xlYXJDYWNoZSgpIHtcbiAgICB0aGlzLmNhY2hlZCA9IFtdO1xuICB9XG5cbiAgZ2V0IHJ1bGVzKCkge1xuICAgIHJldHVybiB0aGlzLmNhY2hlZDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJDYWNoZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwUmVxdWVzdCxcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBTZW50RXZlbnQsXG4gIEh0dHBIZWFkZXJSZXNwb25zZSxcbiAgSHR0cFByb2dyZXNzRXZlbnQsXG4gIEh0dHBSZXNwb25zZSxcbiAgSHR0cFVzZXJFdmVudCxcbiAgSHR0cEVycm9yUmVzcG9uc2UsXG4gIEh0dHBFdmVudCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWxheSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRGVsb25Nb2NrQ29uZmlnIH0gZnJvbSAnLi9tb2NrLmNvbmZpZyc7XG5pbXBvcnQgeyBNb2NrU2VydmljZSB9IGZyb20gJy4vbW9jay5zZXJ2aWNlJztcbmltcG9ydCB7IE1vY2tTdGF0dXNFcnJvciB9IGZyb20gJy4vc3RhdHVzLmVycm9yJztcbmltcG9ydCB7IE1vY2tSZXF1ZXN0IH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTW9ja0ludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHt9XG5cbiAgaW50ZXJjZXB0KFxuICAgIHJlcTogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlcixcbiAgKTogT2JzZXJ2YWJsZTxcbiAgICB8IEh0dHBTZW50RXZlbnRcbiAgICB8IEh0dHBIZWFkZXJSZXNwb25zZVxuICAgIHwgSHR0cFByb2dyZXNzRXZlbnRcbiAgICB8IEh0dHBSZXNwb25zZTxhbnk+XG4gICAgfCBIdHRwVXNlckV2ZW50PGFueT5cbiAgPiB7XG4gICAgY29uc3Qgc3JjID0gdGhpcy5pbmplY3Rvci5nZXQoTW9ja1NlcnZpY2UpO1xuICAgIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7XG4gICAgICAgIGRlbGF5OiAzMDAsXG4gICAgICAgIGZvcmNlOiBmYWxzZSxcbiAgICAgICAgbG9nOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHRoaXMuaW5qZWN0b3IuZ2V0KERlbG9uTW9ja0NvbmZpZywgbnVsbCksXG4gICAgKTtcbiAgICBjb25zdCBydWxlID0gc3JjLmdldFJ1bGUocmVxLm1ldGhvZCwgcmVxLnVybC5zcGxpdCgnPycpWzBdKTtcbiAgICBpZiAoIXJ1bGUgJiYgIWNvbmZpZy5mb3JjZSkge1xuICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSk7XG4gICAgfVxuXG4gICAgbGV0IHJlczogYW55O1xuICAgIHN3aXRjaCAodHlwZW9mIHJ1bGUuY2FsbGJhY2spIHtcbiAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgICAgY29uc3QgbW9ja1JlcXVlc3Q6IE1vY2tSZXF1ZXN0ID0ge1xuICAgICAgICAgIG9yaWdpbmFsOiByZXEsXG4gICAgICAgICAgYm9keTogcmVxLmJvZHksXG4gICAgICAgICAgcXVlcnlTdHJpbmc6IHt9LFxuICAgICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICAgIHBhcmFtczogcnVsZS5wYXJhbXMsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHVybFBhcmFtcyA9IHJlcS51cmwuc3BsaXQoJz8nKTtcbiAgICAgICAgaWYgKHVybFBhcmFtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgdXJsUGFyYW1zWzFdLnNwbGl0KCcmJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1BcnIgPSBpdGVtLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBpdGVtQXJyWzBdO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBpdGVtQXJyWzFdO1xuICAgICAgICAgICAgLy8gaXMgYXJyYXlcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhtb2NrUmVxdWVzdC5xdWVyeVN0cmluZykuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobW9ja1JlcXVlc3QucXVlcnlTdHJpbmdba2V5XSkpIHtcbiAgICAgICAgICAgICAgICBtb2NrUmVxdWVzdC5xdWVyeVN0cmluZ1trZXldID0gWyBtb2NrUmVxdWVzdC5xdWVyeVN0cmluZ1trZXldIF07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbW9ja1JlcXVlc3QucXVlcnlTdHJpbmdba2V5XS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG1vY2tSZXF1ZXN0LnF1ZXJ5U3RyaW5nW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXEucGFyYW1zXG4gICAgICAgICAgLmtleXMoKVxuICAgICAgICAgIC5mb3JFYWNoKGtleSA9PiAobW9ja1JlcXVlc3QucXVlcnlTdHJpbmdba2V5XSA9IHJlcS5wYXJhbXMuZ2V0KGtleSkpKTtcbiAgICAgICAgcmVxLmhlYWRlcnNcbiAgICAgICAgICAua2V5cygpXG4gICAgICAgICAgLmZvckVhY2goa2V5ID0+IChtb2NrUmVxdWVzdC5oZWFkZXJzW2tleV0gPSByZXEuaGVhZGVycy5nZXQoa2V5KSkpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzID0gcnVsZS5jYWxsYmFjay5jYWxsKHRoaXMsIG1vY2tSZXF1ZXN0KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGxldCBlcnJSZXM6IEh0dHBFcnJvclJlc3BvbnNlO1xuICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgTW9ja1N0YXR1c0Vycm9yKSB7XG4gICAgICAgICAgICBlcnJSZXMgPSBuZXcgSHR0cEVycm9yUmVzcG9uc2Uoe1xuICAgICAgICAgICAgICB1cmw6IHJlcS51cmwsXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLFxuICAgICAgICAgICAgICBzdGF0dXM6IGUuc3RhdHVzLFxuICAgICAgICAgICAgICBzdGF0dXNUZXh0OiBlLnN0YXR1c1RleHQgfHwgJ1Vua25vd24gRXJyb3InLFxuICAgICAgICAgICAgICBlcnJvcjogZS5lcnJvcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGNvbmZpZy5sb2cpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgIGAlYyDDsMKfwpHCvU1PQ0sgJHtlLnN0YXR1c30gU1RBVFVTIGAsXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQ6IzAwMDtjb2xvcjojYmFkYTU1JyxcbiAgICAgICAgICAgICAgICByZXEudXJsLFxuICAgICAgICAgICAgICAgIGVyclJlcyxcbiAgICAgICAgICAgICAgICByZXEsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgIGBQbGVhc2UgdXNlIE1vY2tTdGF0dXNFcnJvciB0byB0aHJvdyBzdGF0dXMgZXJyb3JgLFxuICAgICAgICAgICAgICBlLFxuICAgICAgICAgICAgICByZXEsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxIdHRwRXZlbnQ8YW55Pj4pID0+IHtcbiAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVyclJlcyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXMgPSBydWxlLmNhbGxiYWNrO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCByZXNwb25zZTogSHR0cFJlc3BvbnNlPGFueT4gPSBuZXcgSHR0cFJlc3BvbnNlKHtcbiAgICAgIHN0YXR1czogMjAwLFxuICAgICAgYm9keTogcmVzLFxuICAgICAgdXJsOiByZXEudXJsLFxuICAgIH0pO1xuICAgIGlmIChjb25maWcubG9nKVxuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICclYyDDsMKfwpHCvU1PQ0sgJyxcbiAgICAgICAgJ2JhY2tncm91bmQ6IzAwMDtjb2xvcjojYmFkYTU1JyxcbiAgICAgICAgcmVxLnVybCxcbiAgICAgICAgcmVzcG9uc2UsXG4gICAgICAgIHJlcSxcbiAgICAgICk7XG4gICAgcmV0dXJuIG9mKHJlc3BvbnNlKS5waXBlKGRlbGF5KGNvbmZpZy5kZWxheSkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IERlbG9uTW9ja0NvbmZpZyB9IGZyb20gJy4vbW9jay5jb25maWcnO1xuaW1wb3J0IHsgTW9ja1NlcnZpY2UgfSBmcm9tICcuL21vY2suc2VydmljZSc7XG5pbXBvcnQgeyBNb2NrSW50ZXJjZXB0b3IgfSBmcm9tICcuL21vY2suaW50ZXJjZXB0b3InO1xuXG5ATmdNb2R1bGUoe30pXG5leHBvcnQgY2xhc3MgRGVsb25Nb2NrTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBEZWxvbk1vY2tDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERlbG9uTW9ja01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBNb2NrU2VydmljZSxcbiAgICAgICAgeyBwcm92aWRlOiBEZWxvbk1vY2tDb25maWcsIHVzZVZhbHVlOiBjb25maWcgfSxcbiAgICAgICAgeyBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUywgdXNlQ2xhc3M6IE1vY2tJbnRlcmNlcHRvciwgbXVsdGk6IHRydWUgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JDaGlsZCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERlbG9uTW9ja01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogTW9ja0ludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZSB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkh0dHBFcnJvclJlc3BvbnNlIiwiT2JzZXJ2YWJsZSIsIkh0dHBSZXNwb25zZSIsIm9mIiwiZGVsYXkiLCJJbmplY3RvciIsIkhUVFBfSU5URVJDRVBUT1JTIiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQUVFLHlCQUFtQixNQUFjLEVBQVMsS0FBVztZQUFsQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1lBQVMsVUFBSyxHQUFMLEtBQUssQ0FBTTtTQUFJO1FBQzNELHNCQUFDO0lBQUQsQ0FBQzs7Ozs7O0FDSEQ7UUFBQTs7OztZQUlFLFVBQUssR0FBSSxHQUFHLENBQUM7Ozs7WUFFYixVQUFLLEdBQUksS0FBSyxDQUFDOzs7O1lBRWYsUUFBRyxHQUFJLElBQUksQ0FBQztTQUNiO1FBQUQsc0JBQUM7SUFBRCxDQUFDOzs7Ozs7QUNURDtRQVFFLHFCQUFvQixNQUF1QjtZQUF2QixXQUFNLEdBQU4sTUFBTSxDQUFpQjtZQUZuQyxXQUFNLEdBQXFCLEVBQUUsQ0FBQztZQUdwQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDakIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztTQUN6Qjs7Ozs7O1FBSU8sK0JBQVM7Ozs7O1lBQWpCO2dCQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO2dCQUNqQixJQUFJO29CQUNGLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztpQkFDdEI7Z0JBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ1YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDckI7YUFDRjs7OztRQUVPLG1DQUFhOzs7WUFBckI7Z0JBQUEsaUJBMkNDOztvQkExQ08sSUFB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