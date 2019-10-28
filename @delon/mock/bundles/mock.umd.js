/**
 * @license ng-alain(cipchk@qq.com) v8.5.1
 * (c) 2019 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@delon/mock', ['exports', '@angular/core', '@angular/common/http', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.mock = {}), global.ng.core, global.ng.common.http, global.rxjs, global.rxjs.operators));
}(this, (function (exports, core, http, rxjs, operators) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
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
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            /**
             * 是否拦截命中后继续调用后续拦截器的 `intercept` 方法，默认：`true`
             */
            this.executeOtherInterceptors = true;
        }
        return DelonMockConfig;
    }());
    if (false) {
        /**
         * 规则定义数据
         * @type {?}
         */
        DelonMockConfig.prototype.data;
        /**
         * 请求延迟，单位：毫秒，默认：`300`
         * @type {?}
         */
        DelonMockConfig.prototype.delay;
        /**
         * 是否强制所有请求都Mock，`true` 表示当请求的URL不存在时直接返回 404 错误，`false` 表示未命中时发送真实HTTP请求
         * @type {?}
         */
        DelonMockConfig.prototype.force;
        /**
         * 是否打印 Mock 请求信息，弥补浏览器无Network信息
         * @type {?}
         */
        DelonMockConfig.prototype.log;
        /**
         * 是否拦截命中后继续调用后续拦截器的 `intercept` 方法，默认：`true`
         * @type {?}
         */
        DelonMockConfig.prototype.executeOtherInterceptors;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            var errors = error.stack
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        MockService.ctorParameters = function () { return [
            { type: DelonMockConfig }
        ]; };
        return MockService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        MockService.prototype.cached;
        /**
         * @type {?}
         * @private
         */
        MockService.prototype.config;
    }

    /**
     * @fileoverview added by tsickle
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
            var config = __assign({ delay: 300, force: false, log: true, executeOtherInterceptors: true }, this.injector.get(DelonMockConfig));
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
                            status: 400,
                            statusText: e.statusText || 'Unknown Error',
                            error: e.error,
                        });
                        if (e instanceof MockStatusError) {
                            res.status = e.status;
                        }
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
                    return chain.handle(req).pipe(operators.delay(config.delay));
                }
            }
            return res$.pipe(operators.delay(config.delay));
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
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                providers: [{ provide: http.HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true }],
            };
        };
        DelonMockModule.decorators = [
            { type: core.NgModule, args: [{},] }
        ];
        return DelonMockModule;
    }());

    exports.DelonMockConfig = DelonMockConfig;
    exports.DelonMockModule = DelonMockModule;
    exports.MockInterceptor = MockInterceptor;
    exports.MockService = MockService;
    exports.MockStatusError = MockStatusError;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=mock.umd.js.map
