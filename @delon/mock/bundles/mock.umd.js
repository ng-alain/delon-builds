/**
 * @license ng-alain(cipchk@qq.com) v9.3.2
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/util'), require('@angular/common/http'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@delon/mock', ['exports', '@angular/core', '@delon/util', '@angular/common/http', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.mock = {}), global.ng.core, global.delon.util, global.ng.common.http, global.rxjs, global.rxjs.operators));
}(this, (function (exports, core, util, http, rxjs, operators) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: src/interface.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function MockCachedRule() { }
    if (false) {
        /** @type {?} */
        MockCachedRule.prototype.method;
        /** @type {?} */
        MockCachedRule.prototype.url;
        /** @type {?} */
        MockCachedRule.prototype.martcher;
        /** @type {?} */
        MockCachedRule.prototype.segments;
        /* Skipping unhandled member: [key: string]: any;*/
        /**
         * @param {?} req
         * @return {?}
         */
        MockCachedRule.prototype.callback = function (req) { };
    }
    /**
     * @record
     */
    function MockRule() { }
    if (false) {
        /** @type {?} */
        MockRule.prototype.method;
        /** @type {?} */
        MockRule.prototype.url;
        /**
         * 路由参数
         * @type {?|undefined}
         */
        MockRule.prototype.params;
        /* Skipping unhandled member: [key: string]: any;*/
        /**
         * @param {?} req
         * @return {?}
         */
        MockRule.prototype.callback = function (req) { };
    }
    /**
     * @record
     */
    function MockRequest() { }
    if (false) {
        /**
         * 路由参数
         * @type {?|undefined}
         */
        MockRequest.prototype.params;
        /**
         * URL参数
         * @type {?|undefined}
         */
        MockRequest.prototype.queryString;
        /** @type {?|undefined} */
        MockRequest.prototype.headers;
        /** @type {?|undefined} */
        MockRequest.prototype.body;
        /**
         * 原始 `HttpRequest`
         * @type {?}
         */
        MockRequest.prototype.original;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/status.error.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MockStatusError = /** @class */ (function () {
        function MockStatusError(status, error) {
            this.status = status;
            this.error = error;
        }
        return MockStatusError;
    }());
    if (false) {
        /** @type {?} */
        MockStatusError.prototype.statusText;
        /** @type {?} */
        MockStatusError.prototype.status;
        /** @type {?} */
        MockStatusError.prototype.error;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/mock.config.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MOCK_DEFULAT_CONFIG = {
        data: null,
        delay: 300,
        force: false,
        log: true,
        executeOtherInterceptors: true,
    };

    /**
     * @fileoverview added by tsickle
     * Generated from: src/mock.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MockService = /** @class */ (function () {
        function MockService(cogSrv) {
            this.cached = [];
            this.config = (/** @type {?} */ (cogSrv.merge('mock', MOCK_DEFULAT_CONFIG)));
            this.applyMock();
            delete this.config.data;
        }
        // #region parse rule
        // #region parse rule
        /**
         * @private
         * @return {?}
         */
        MockService.prototype.applyMock = 
        // #region parse rule
        /**
         * @private
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
         * @private
         * @return {?}
         */
        MockService.prototype.realApplyMock = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var data = this.config.data;
            if (!data)
                return;
            Object.keys(data).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                /** @type {?} */
                var rules = data[key];
                if (!rules)
                    return;
                Object.keys(rules).forEach((/**
                 * @param {?} ruleKey
                 * @return {?}
                 */
                function (ruleKey) {
                    /** @type {?} */
                    var value = rules[ruleKey];
                    if (!(typeof value === 'function' || typeof value === 'object' || typeof value === 'string')) {
                        throw Error("mock value of [" + key + "-" + ruleKey + "] should be function or object or string, but got " + typeof value);
                    }
                    /** @type {?} */
                    var rule = _this.genRule(ruleKey, value);
                    if (['GET', 'POST', 'PUT', 'HEAD', 'DELETE', 'PATCH', 'OPTIONS'].indexOf(rule.method) === -1) {
                        throw Error("method of " + key + "-" + ruleKey + " is not valid");
                    }
                    /** @type {?} */
                    var item = _this.cached.find((/**
                     * @param {?} w
                     * @return {?}
                     */
                    function (w) { return w.url === rule.url && w.method === rule.method; }));
                    if (item) {
                        item.callback = rule.callback;
                    }
                    else {
                        _this.cached.push(rule);
                    }
                }));
            }));
            // regular ordering
            this.cached.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) { return (b.martcher || '').toString().length - (a.martcher || '').toString().length; }));
        };
        /**
         * @private
         * @param {?} key
         * @param {?} callback
         * @return {?}
         */
        MockService.prototype.genRule = /**
         * @private
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
                segments = (/** @type {?} */ (url)).split('/')
                    .filter((/**
                 * @param {?} segment
                 * @return {?}
                 */
                function (segment) { return segment.startsWith(':'); }))
                    .map((/**
                 * @param {?} v
                 * @return {?}
                 */
                function (v) { return v.substring(1); }));
                /** @type {?} */
                var reStr = (/** @type {?} */ (url)).split('/')
                    .map((/**
                 * @param {?} segment
                 * @return {?}
                 */
                function (segment) { return (segment.startsWith(':') ? "([^/]+)" : segment); }))
                    .join('/');
                martcher = new RegExp("^" + reStr, 'i');
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
         * @private
         * @param {?} error
         * @return {?}
         */
        MockService.prototype.outputError = /**
         * @private
         * @param {?} error
         * @return {?}
         */
        function (error) {
            /** @type {?} */
            var filePath = error.message.split(': ')[0];
            /** @type {?} */
            var errors = ((/** @type {?} */ (error.stack)))
                .split('\n')
                .filter((/**
             * @param {?} line
             * @return {?}
             */
            function (line) { return line.trim().indexOf('at ') !== 0; }))
                .map((/**
             * @param {?} line
             * @return {?}
             */
            function (line) { return line.replace(filePath + ": ", ''); }));
            errors.splice(1, 0, '');
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
            var list = this.cached.filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.method === method && (w.martcher ? w.martcher.test(url) : w.url === url); }));
            if (list.length === 0)
                return null;
            /** @type {?} */
            var ret = list.find((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.url === url; })) || list[0];
            if (ret.martcher) {
                /** @type {?} */
                var execArr = ret.martcher.exec(url);
                (/** @type {?} */ (execArr)).slice(1).map((/**
                 * @param {?} value
                 * @param {?} index
                 * @return {?}
                 */
                function (value, index) {
                    params[ret.segments[index]] = value;
                }));
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
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        MockService.ctorParameters = function () { return [
            { type: util.AlainConfigService }
        ]; };
        /** @nocollapse */ MockService.ɵprov = core.ɵɵdefineInjectable({ factory: function MockService_Factory() { return new MockService(core.ɵɵinject(util.AlainConfigService)); }, token: MockService, providedIn: "root" });
        return MockService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        MockService.prototype.cached;
        /** @type {?} */
        MockService.prototype.config;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/mock.interceptor.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HttpMockInterceptorHandler = /** @class */ (function () {
        function HttpMockInterceptorHandler(next, interceptor) {
            this.next = next;
            this.interceptor = interceptor;
        }
        /**
         * @param {?} req
         * @return {?}
         */
        HttpMockInterceptorHandler.prototype.handle = /**
         * @param {?} req
         * @return {?}
         */
        function (req) {
            return this.interceptor.intercept(req, this.next);
        };
        return HttpMockInterceptorHandler;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        HttpMockInterceptorHandler.prototype.next;
        /**
         * @type {?}
         * @private
         */
        HttpMockInterceptorHandler.prototype.interceptor;
    }
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
            var config = src.config;
            /** @type {?} */
            var rule = src.getRule(req.method, req.url.split('?')[0]);
            if (!rule && !config.force) {
                return next.handle(req);
            }
            /** @type {?} */
            var res;
            switch (typeof (/** @type {?} */ (rule)).callback) {
                case 'function':
                    /** @type {?} */
                    var mockRequest_1 = {
                        original: req,
                        body: req.body,
                        queryString: {},
                        headers: {},
                        params: (/** @type {?} */ (rule)).params,
                    };
                    /** @type {?} */
                    var urlParams = req.url.split('?');
                    if (urlParams.length > 1) {
                        urlParams[1].split('&').forEach((/**
                         * @param {?} item
                         * @return {?}
                         */
                        function (item) {
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
                        }));
                    }
                    req.params.keys().forEach((/**
                     * @param {?} key
                     * @return {?}
                     */
                    function (key) { return (mockRequest_1.queryString[key] = req.params.get(key)); }));
                    req.headers.keys().forEach((/**
                     * @param {?} key
                     * @return {?}
                     */
                    function (key) { return (mockRequest_1.headers[key] = req.headers.get(key)); }));
                    try {
                        res = (/** @type {?} */ (rule)).callback.call(this, mockRequest_1);
                    }
                    catch (e) {
                        res = new http.HttpErrorResponse({
                            url: req.url,
                            headers: req.headers,
                            status: e instanceof MockStatusError ? e.status : 400,
                            statusText: e.statusText || 'Unknown Error',
                            error: e.error,
                        });
                    }
                    break;
                default:
                    res = (/** @type {?} */ (rule)).callback;
                    break;
            }
            if (!(res instanceof http.HttpResponseBase)) {
                res = new http.HttpResponse({
                    status: 200,
                    url: req.url,
                    body: res,
                });
            }
            if (res.body) {
                res.body = util.deepCopy(res.body);
            }
            if (config.log) {
                console.log("%c\uD83D\uDC7D" + req.method + "->" + req.url + "->request", 'background:#000;color:#bada55', req);
                console.log("%c\uD83D\uDC7D" + req.method + "->" + req.url + "->response", 'background:#000;color:#bada55', res);
            }
            /** @type {?} */
            var res$ = res instanceof http.HttpErrorResponse ? rxjs.throwError(res) : rxjs.of(res);
            if (config.executeOtherInterceptors) {
                /** @type {?} */
                var interceptors = this.injector.get(http.HTTP_INTERCEPTORS, []);
                /** @type {?} */
                var lastInterceptors = interceptors.slice(interceptors.indexOf(this) + 1);
                if (lastInterceptors.length > 0) {
                    /** @type {?} */
                    var chain = lastInterceptors.reduceRight((/**
                     * @param {?} _next
                     * @param {?} _interceptor
                     * @return {?}
                     */
                    function (_next, _interceptor) { return new HttpMockInterceptorHandler(_next, _interceptor); }), (/** @type {?} */ ({
                        handle: (/**
                         * @return {?}
                         */
                        function () { return res$; }),
                    })));
                    return chain.handle(req).pipe(operators.delay((/** @type {?} */ (config.delay))));
                }
            }
            return res$.pipe(operators.delay((/** @type {?} */ (config.delay))));
        };
        MockInterceptor.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        MockInterceptor.ctorParameters = function () { return [
            { type: core.Injector }
        ]; };
        return MockInterceptor;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        MockInterceptor.prototype.injector;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/mock.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DelonMockModule = /** @class */ (function () {
        function DelonMockModule() {
        }
        /**
         * @return {?}
         */
        DelonMockModule.forRoot = /**
         * @return {?}
         */
        function () {
            return {
                ngModule: DelonMockModule,
                providers: [{ provide: http.HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true }],
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
                providers: [{ provide: http.HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true }],
            };
        };
        DelonMockModule.decorators = [
            { type: core.NgModule, args: [{},] }
        ];
        return DelonMockModule;
    }());

    exports.DelonMockModule = DelonMockModule;
    exports.MockInterceptor = MockInterceptor;
    exports.MockService = MockService;
    exports.MockStatusError = MockStatusError;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=mock.umd.js.map
