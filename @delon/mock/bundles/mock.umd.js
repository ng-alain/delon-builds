/**
 * @license ng-alain(cipchk@qq.com) v11.10.4
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/util/config'), require('@angular/common/http'), require('rxjs'), require('rxjs/operators'), require('@delon/util/other')) :
    typeof define === 'function' && define.amd ? define('@delon/mock', ['exports', '@angular/core', '@delon/util/config', '@angular/common/http', 'rxjs', 'rxjs/operators', '@delon/util/other'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.mock = {}), global.ng.core, global.i1, global.ng.common.http, global.rxjs, global.rxjs.operators, global.other));
}(this, (function (exports, i0, i1, http, rxjs, operators, other) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

    var MockOptions = /** @class */ (function () {
        function MockOptions() {
        }
        return MockOptions;
    }());

    var MockStatusError = /** @class */ (function () {
        function MockStatusError(status, error) {
            this.status = status;
            this.error = error;
        }
        return MockStatusError;
    }());

    var MOCK_DEFULAT_CONFIG = {
        delay: 300,
        force: false,
        log: true,
        executeOtherInterceptors: true
    };

    var MockService = /** @class */ (function () {
        function MockService(cogSrv, options) {
            this.cached = [];
            this.config = cogSrv.merge('mock', MOCK_DEFULAT_CONFIG);
            this.setData(options === null || options === void 0 ? void 0 : options.data);
        }
        /**
         * Reset request data
         *
         * 重新设置请求数据
         */
        MockService.prototype.setData = function (data) {
            this.applyMock(data);
        };
        // #region parse rule
        MockService.prototype.applyMock = function (data) {
            this.cached = [];
            try {
                this.realApplyMock(data);
            }
            catch (e) {
                this.outputError(e);
            }
        };
        MockService.prototype.realApplyMock = function (data) {
            var _this = this;
            if (!data)
                return;
            Object.keys(data).forEach(function (key) {
                var rules = data[key];
                if (!rules)
                    return;
                Object.keys(rules).forEach(function (ruleKey) {
                    var value = rules[ruleKey];
                    if (!(typeof value === 'function' || typeof value === 'object' || typeof value === 'string')) {
                        throw Error("mock value of [" + key + "-" + ruleKey + "] should be function or object or string, but got " + typeof value);
                    }
                    var rule = _this.genRule(ruleKey, value);
                    if (['GET', 'POST', 'PUT', 'HEAD', 'DELETE', 'PATCH', 'OPTIONS'].indexOf(rule.method) === -1) {
                        throw Error("method of " + key + "-" + ruleKey + " is not valid");
                    }
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
            this.cached.sort(function (a, b) { return (b.martcher || '').toString().length - (a.martcher || '').toString().length; });
        };
        MockService.prototype.genRule = function (key, callback) {
            var method = 'GET';
            var url = key;
            if (key.indexOf(' ') > -1) {
                var splited = key.split(' ');
                method = splited[0].toLowerCase();
                url = splited[1];
            }
            var martcher = null;
            var segments = [];
            if (~url.indexOf(':')) {
                segments = url
                    .split('/')
                    .filter(function (segment) { return segment.startsWith(':'); })
                    .map(function (v) { return v.substring(1); });
                var reStr = url
                    .split('/')
                    .map(function (segment) { return (segment.startsWith(':') ? "([^/]+)" : segment); })
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
                method: method.toUpperCase()
            };
        };
        MockService.prototype.outputError = function (error) {
            var filePath = error.message.split(': ')[0];
            var errors = error.stack
                .split('\n')
                .filter(function (line) { return line.trim().indexOf('at ') !== 0; })
                .map(function (line) { return line.replace(filePath + ": ", ''); });
            errors.splice(1, 0, '');
            console.group();
            console.warn("==========Failed to parse mock config.==========");
            console.log(errors.join('\n'));
            console.groupEnd();
            throw error;
        };
        // #endregion
        MockService.prototype.getRule = function (method, url) {
            method = (method || 'GET').toUpperCase();
            var params = {};
            var list = this.cached.filter(function (w) { return w.method === method && (w.martcher ? w.martcher.test(url) : w.url === url); });
            if (list.length === 0)
                return null;
            var ret = list.find(function (w) { return w.url === url; }) || list[0];
            if (ret.martcher) {
                var execArr = ret.martcher.exec(url);
                execArr.slice(1).map(function (value, index) {
                    params[ret.segments[index]] = value;
                });
            }
            return {
                url: url,
                method: ret.method,
                params: params,
                callback: ret.callback
            };
        };
        MockService.prototype.clearCache = function () {
            this.cached = [];
        };
        Object.defineProperty(MockService.prototype, "rules", {
            get: function () {
                return this.cached;
            },
            enumerable: false,
            configurable: true
        });
        MockService.prototype.ngOnDestroy = function () {
            this.clearCache();
        };
        return MockService;
    }());
    MockService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function MockService_Factory() { return new MockService(i0__namespace.ɵɵinject(i1__namespace.AlainConfigService), i0__namespace.ɵɵinject(MockOptions)); }, token: MockService, providedIn: "root" });
    MockService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    MockService.ctorParameters = function () { return [
        { type: i1.AlainConfigService },
        { type: MockOptions }
    ]; };

    var HttpMockInterceptorHandler = /** @class */ (function () {
        function HttpMockInterceptorHandler(next, interceptor) {
            this.next = next;
            this.interceptor = interceptor;
        }
        HttpMockInterceptorHandler.prototype.handle = function (req) {
            return this.interceptor.intercept(req, this.next);
        };
        return HttpMockInterceptorHandler;
    }());
    var MockInterceptor = /** @class */ (function () {
        function MockInterceptor(injector) {
            this.injector = injector;
        }
        MockInterceptor.prototype.intercept = function (req, next) {
            var src = this.injector.get(MockService);
            var config = src.config;
            var rule = src.getRule(req.method, req.url.split('?')[0]);
            if (!rule && !config.force) {
                return next.handle(req);
            }
            var res;
            switch (typeof rule.callback) {
                case 'function':
                    var mockRequest_1 = {
                        original: req,
                        body: req.body,
                        queryString: {},
                        headers: {},
                        params: rule.params
                    };
                    var urlParams = req.url.split('?');
                    if (urlParams.length > 1) {
                        urlParams[1].split('&').forEach(function (item) {
                            var itemArr = item.split('=');
                            var key = itemArr[0];
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
                    req.params.keys().forEach(function (key) { return (mockRequest_1.queryString[key] = req.params.get(key)); });
                    req.headers.keys().forEach(function (key) { return (mockRequest_1.headers[key] = req.headers.get(key)); });
                    try {
                        res = rule.callback.call(this, mockRequest_1);
                    }
                    catch (e) {
                        res = new http.HttpErrorResponse({
                            url: req.url,
                            headers: req.headers,
                            status: e instanceof MockStatusError ? e.status : 400,
                            statusText: e.statusText || 'Unknown Error',
                            error: e.error
                        });
                    }
                    break;
                default:
                    res = rule.callback;
                    break;
            }
            if (!(res instanceof http.HttpResponseBase)) {
                res = new http.HttpResponse({
                    status: 200,
                    url: req.url,
                    body: res
                });
            }
            if (res.body) {
                res.body = other.deepCopy(res.body);
            }
            if (config.log) {
                console.log("%c\uD83D\uDC7D" + req.method + "->" + req.urlWithParams + "->request", 'background:#000;color:#bada55', req);
                console.log("%c\uD83D\uDC7D" + req.method + "->" + req.urlWithParams + "->response", 'background:#000;color:#bada55', res);
            }
            var res$ = res instanceof http.HttpErrorResponse ? rxjs.throwError(res) : rxjs.of(res);
            if (config.executeOtherInterceptors) {
                var interceptors = this.injector.get(http.HTTP_INTERCEPTORS, []);
                var lastInterceptors = interceptors.slice(interceptors.indexOf(this) + 1);
                if (lastInterceptors.length > 0) {
                    var chain = lastInterceptors.reduceRight(function (_next, _interceptor) { return new HttpMockInterceptorHandler(_next, _interceptor); }, {
                        handle: function () { return res$; }
                    });
                    return chain.handle(req).pipe(operators.delay(config.delay));
                }
            }
            return res$.pipe(operators.delay(config.delay));
        };
        return MockInterceptor;
    }());
    MockInterceptor.decorators = [
        { type: i0.Injectable }
    ];
    MockInterceptor.ctorParameters = function () { return [
        { type: i0.Injector }
    ]; };

    var DelonMockModule = /** @class */ (function () {
        function DelonMockModule() {
        }
        DelonMockModule.forRoot = function (options) {
            return {
                ngModule: DelonMockModule,
                providers: [
                    { provide: MockOptions, useValue: options },
                    { provide: http.HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true }
                ]
            };
        };
        DelonMockModule.forChild = function () {
            return {
                ngModule: DelonMockModule,
                providers: [{ provide: http.HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true }]
            };
        };
        return DelonMockModule;
    }());
    DelonMockModule.decorators = [
        { type: i0.NgModule, args: [{},] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.DelonMockModule = DelonMockModule;
    exports.MockInterceptor = MockInterceptor;
    exports.MockOptions = MockOptions;
    exports.MockService = MockService;
    exports.MockStatusError = MockStatusError;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=mock.umd.js.map
