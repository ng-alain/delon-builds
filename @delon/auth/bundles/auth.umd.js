/**
 * @license ng-alain(cipchk@qq.com) v8.6.0
 * (c) 2019 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/router'), require('rxjs'), require('rxjs/operators'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('@delon/auth', ['exports', '@angular/common', '@angular/core', '@angular/router', 'rxjs', 'rxjs/operators', '@angular/common/http'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.auth = {}), global.ng.common, global.ng.core, global.ng.router, global.rxjs, global.rxjs.operators, global.ng.common.http));
}(this, (function (exports, common, core, router, rxjs, operators, http) { 'use strict';

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
     * Generated from: src/auth.config.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DelonAuthConfig = /** @class */ (function () {
        function DelonAuthConfig() {
            /**
             * 存储KEY值
             */
            this.store_key = '_token';
            /**
             * 无效时跳转至登录页，包括：
             * - 无效token值
             * - token已过期（限JWT）
             */
            this.token_invalid_redirect = true;
            /**
             * token过期时间偏移值，默认：`10` 秒（单位：秒）
             */
            this.token_exp_offset = 10;
            /**
             * 发送token参数名，默认：token
             */
            this.token_send_key = 'token';
            /**
             * 发送token模板（默认为：`${token}`），使用 `${token}` 表示token点位符，例如：
             *
             * - `Bearer ${token}`
             */
            // tslint:disable-next-line:no-invalid-template-strings
            this.token_send_template = '${token}';
            /**
             * 发送token参数位置，默认：header
             */
            this.token_send_place = 'header';
            /**
             * 登录页路由地址
             */
            this.login_url = "/login";
            /**
             * 忽略TOKEN的URL地址列表，默认值为：[ /\/login/, /assets\//, /passport\// ]
             */
            this.ignores = [/\/login/, /assets\//, /passport\//];
            /**
             * 允许匿名登录KEY，若请求参数中带有该KEY表示忽略TOKEN
             */
            this.allow_anonymous_key = "_allow_anonymous";
            /**
             * 是否校验失效时命中后继续调用后续拦截器的 `intercept` 方法，默认：`true`
             */
            this.executeOtherInterceptors = true;
        }
        DelonAuthConfig.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ DelonAuthConfig.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DelonAuthConfig_Factory() { return new DelonAuthConfig(); }, token: DelonAuthConfig, providedIn: "root" });
        return DelonAuthConfig;
    }());
    if (false) {
        /**
         * 存储KEY值
         * @type {?}
         */
        DelonAuthConfig.prototype.store_key;
        /**
         * 无效时跳转至登录页，包括：
         * - 无效token值
         * - token已过期（限JWT）
         * @type {?}
         */
        DelonAuthConfig.prototype.token_invalid_redirect;
        /**
         * token过期时间偏移值，默认：`10` 秒（单位：秒）
         * @type {?}
         */
        DelonAuthConfig.prototype.token_exp_offset;
        /**
         * 发送token参数名，默认：token
         * @type {?}
         */
        DelonAuthConfig.prototype.token_send_key;
        /**
         * 发送token模板（默认为：`${token}`），使用 `${token}` 表示token点位符，例如：
         *
         * - `Bearer ${token}`
         * @type {?}
         */
        DelonAuthConfig.prototype.token_send_template;
        /**
         * 发送token参数位置，默认：header
         * @type {?}
         */
        DelonAuthConfig.prototype.token_send_place;
        /**
         * 登录页路由地址
         * @type {?}
         */
        DelonAuthConfig.prototype.login_url;
        /**
         * 忽略TOKEN的URL地址列表，默认值为：[ /\/login/, /assets\//, /passport\// ]
         * @type {?}
         */
        DelonAuthConfig.prototype.ignores;
        /**
         * 允许匿名登录KEY，若请求参数中带有该KEY表示忽略TOKEN
         * @type {?}
         */
        DelonAuthConfig.prototype.allow_anonymous_key;
        /**
         * 是否校验失效时命中后继续调用后续拦截器的 `intercept` 方法，默认：`true`
         * @type {?}
         */
        DelonAuthConfig.prototype.executeOtherInterceptors;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/store/local-storage.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function DA_STORE_TOKEN_LOCAL_FACTORY() {
        return new LocalStorageStore();
    }
    var LocalStorageStore = /** @class */ (function () {
        function LocalStorageStore() {
        }
        /**
         * @param {?} key
         * @return {?}
         */
        LocalStorageStore.prototype.get = /**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            return JSON.parse(localStorage.getItem(key) || '{}') || {};
        };
        /**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        LocalStorageStore.prototype.set = /**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        function (key, value) {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        };
        /**
         * @param {?} key
         * @return {?}
         */
        LocalStorageStore.prototype.remove = /**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            localStorage.removeItem(key);
        };
        return LocalStorageStore;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: src/store/interface.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DA_STORE_TOKEN = new core.InjectionToken('AUTH_STORE_TOKEN', {
        providedIn: 'root',
        factory: DA_STORE_TOKEN_LOCAL_FACTORY,
    });
    /**
     * @record
     */
    function IStore() { }
    if (false) {
        /**
         * @param {?} key
         * @return {?}
         */
        IStore.prototype.get = function (key) { };
        /**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        IStore.prototype.set = function (key, value) { };
        /**
         * @param {?} key
         * @return {?}
         */
        IStore.prototype.remove = function (key) { };
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/token/token.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function DA_SERVICE_TOKEN_FACTORY() {
        return new TokenService(core.inject(DelonAuthConfig), core.inject(DA_STORE_TOKEN));
    }
    var TokenService = /** @class */ (function () {
        function TokenService(options, store) {
            this.options = options;
            this.store = store;
            this.change$ = new rxjs.BehaviorSubject(null);
            this._referrer = {};
        }
        Object.defineProperty(TokenService.prototype, "login_url", {
            get: /**
             * @return {?}
             */
            function () {
                return this.options.login_url;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TokenService.prototype, "referrer", {
            get: /**
             * @return {?}
             */
            function () {
                return this._referrer;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} data
         * @return {?}
         */
        TokenService.prototype.set = /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            this.change$.next(data);
            return this.store.set((/** @type {?} */ (this.options.store_key)), data);
        };
        /**
         * @template T
         * @param {?=} type
         * @return {?}
         */
        TokenService.prototype.get = /**
         * @template T
         * @param {?=} type
         * @return {?}
         */
        function (type) {
            /** @type {?} */
            var data = this.store.get((/** @type {?} */ (this.options.store_key)));
            return type ? ((/** @type {?} */ (Object.assign(new type(), data)))) : ((/** @type {?} */ (data)));
        };
        /**
         * @return {?}
         */
        TokenService.prototype.clear = /**
         * @return {?}
         */
        function () {
            this.change$.next(null);
            this.store.remove((/** @type {?} */ (this.options.store_key)));
        };
        /**
         * @return {?}
         */
        TokenService.prototype.change = /**
         * @return {?}
         */
        function () {
            return this.change$.pipe(operators.share());
        };
        /** @nocollapse */
        TokenService.ctorParameters = function () { return [
            { type: DelonAuthConfig },
            { type: undefined, decorators: [{ type: core.Inject, args: [DA_STORE_TOKEN,] }] }
        ]; };
        return TokenService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TokenService.prototype.change$;
        /**
         * @type {?}
         * @private
         */
        TokenService.prototype._referrer;
        /**
         * @type {?}
         * @private
         */
        TokenService.prototype.options;
        /**
         * @type {?}
         * @private
         */
        TokenService.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/token/interface.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DA_SERVICE_TOKEN = new core.InjectionToken('DA_SERVICE_TOKEN', {
        providedIn: 'root',
        factory: DA_SERVICE_TOKEN_FACTORY,
    });
    /**
     * @record
     */
    function ITokenModel() { }
    if (false) {
        /** @type {?} */
        ITokenModel.prototype.token;
        /* Skipping unhandled member: [key: string]: any;*/
    }
    /**
     * @record
     */
    function AuthReferrer() { }
    if (false) {
        /** @type {?|undefined} */
        AuthReferrer.prototype.url;
    }
    /**
     * @record
     */
    function ITokenService() { }
    if (false) {
        /**
         * 获取登录地址
         * @type {?}
         */
        ITokenService.prototype.login_url;
        /**
         * 获取授权失败前路由信息
         * @type {?|undefined}
         */
        ITokenService.prototype.referrer;
        /**
         * @param {?} data
         * @return {?}
         */
        ITokenService.prototype.set = function (data) { };
        /**
         * 获取Token，形式包括：
         * - `get()` 获取 Simple Token
         * - `get<JWTTokenModel>(JWTTokenModel)` 获取 JWT Token
         * @param {?=} type
         * @return {?}
         */
        ITokenService.prototype.get = function (type) { };
        /**
         * 获取Token，形式包括：
         * - `get()` 获取 Simple Token
         * - `get<JWTTokenModel>(JWTTokenModel)` 获取 JWT Token
         * @template T
         * @param {?=} type
         * @return {?}
         */
        ITokenService.prototype.get = function (type) { };
        /**
         * @return {?}
         */
        ITokenService.prototype.clear = function () { };
        /**
         * @return {?}
         */
        ITokenService.prototype.change = function () { };
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/social/social.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var OPENTYPE = '_delonAuthSocialType';
    /** @type {?} */
    var HREFCALLBACK = '_delonAuthSocialCallbackByHref';
    var SocialService = /** @class */ (function () {
        function SocialService(tokenService, doc, router) {
            this.tokenService = tokenService;
            this.doc = doc;
            this.router = router;
        }
        /**
         * 跳转至登录页，若为 `type=window` 时，返回值是 `Observable<ITokenModel>`
         * @param url 获取授权地址
         * @param callback 当 `type=href` 成功时的回调路由地址
         * @param options.type 打开方式，默认 `window`
         * @param options.windowFeatures 等同 `window.open` 的 `features` 参数值
         */
        /**
         * 跳转至登录页，若为 `type=window` 时，返回值是 `Observable<ITokenModel>`
         * @param {?} url 获取授权地址
         * @param {?=} callback 当 `type=href` 成功时的回调路由地址
         * @param {?=} options
         * @return {?}
         */
        SocialService.prototype.login = /**
         * 跳转至登录页，若为 `type=window` 时，返回值是 `Observable<ITokenModel>`
         * @param {?} url 获取授权地址
         * @param {?=} callback 当 `type=href` 成功时的回调路由地址
         * @param {?=} options
         * @return {?}
         */
        function (url, callback, options) {
            var _this = this;
            if (callback === void 0) { callback = '/'; }
            if (options === void 0) { options = {}; }
            options = __assign({ type: 'window', windowFeatures: 'location=yes,height=570,width=520,scrollbars=yes,status=yes' }, options);
            localStorage.setItem(OPENTYPE, (/** @type {?} */ (options.type)));
            localStorage.setItem(HREFCALLBACK, callback);
            if (options.type === 'href') {
                this.doc.location.href = url;
                return;
            }
            this._win = window.open(url, '_blank', options.windowFeatures);
            this._winTime = setInterval((/**
             * @return {?}
             */
            function () {
                if (_this._win && _this._win.closed) {
                    _this.ngOnDestroy();
                    /** @type {?} */
                    var model = _this.tokenService.get();
                    if (model && !model.token)
                        model = null;
                    // 触发变更通知
                    if (model) {
                        _this.tokenService.set(model);
                    }
                    _this.observer.next(model);
                    _this.observer.complete();
                }
            }), 100);
            return new rxjs.Observable((/**
             * @param {?} observer
             * @return {?}
             */
            function (observer) {
                _this.observer = observer;
            }));
        };
        /**
         * 授权成功后的回调处理
         *
         * @param rawData 指定回调认证信息，为空时从根据当前URL解析
         */
        /**
         * 授权成功后的回调处理
         *
         * @param {?=} rawData 指定回调认证信息，为空时从根据当前URL解析
         * @return {?}
         */
        SocialService.prototype.callback = /**
         * 授权成功后的回调处理
         *
         * @param {?=} rawData 指定回调认证信息，为空时从根据当前URL解析
         * @return {?}
         */
        function (rawData) {
            // from uri
            if (!rawData && this.router.url.indexOf('?') === -1) {
                throw new Error("url muse contain a ?");
            }
            // parse
            /** @type {?} */
            var data = { token: "" };
            if (typeof rawData === 'string') {
                /** @type {?} */
                var rightUrl = rawData.split('?')[1].split('#')[0];
                data = (/** @type {?} */ (this.router.parseUrl('./?' + rightUrl).queryParams));
            }
            else {
                data = (/** @type {?} */ (rawData));
            }
            if (!data || !data.token)
                throw new Error("invalide token data");
            this.tokenService.set(data);
            /** @type {?} */
            var url = localStorage.getItem(HREFCALLBACK) || '/';
            localStorage.removeItem(HREFCALLBACK);
            /** @type {?} */
            var type = localStorage.getItem(OPENTYPE);
            localStorage.removeItem(OPENTYPE);
            if (type === 'window') {
                window.close();
            }
            else {
                this.router.navigateByUrl(url);
            }
            return data;
        };
        /**
         * @return {?}
         */
        SocialService.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            clearInterval(this._winTime);
            this._winTime = null;
        };
        SocialService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        SocialService.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [DA_SERVICE_TOKEN,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: router.Router }
        ]; };
        return SocialService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        SocialService.prototype._win;
        /**
         * @type {?}
         * @private
         */
        SocialService.prototype._winTime;
        /**
         * @type {?}
         * @private
         */
        SocialService.prototype.observer;
        /**
         * @type {?}
         * @private
         */
        SocialService.prototype.tokenService;
        /**
         * @type {?}
         * @private
         */
        SocialService.prototype.doc;
        /**
         * @type {?}
         * @private
         */
        SocialService.prototype.router;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/store/memory.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MemoryStore = /** @class */ (function () {
        function MemoryStore() {
            this.cache = {};
        }
        /**
         * @param {?} key
         * @return {?}
         */
        MemoryStore.prototype.get = /**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            return this.cache[key] || ((/** @type {?} */ ({})));
        };
        /**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        MemoryStore.prototype.set = /**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        function (key, value) {
            this.cache[key] = value;
            return true;
        };
        /**
         * @param {?} key
         * @return {?}
         */
        MemoryStore.prototype.remove = /**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            this.cache[key] = null;
        };
        return MemoryStore;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        MemoryStore.prototype.cache;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/store/session-storage.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SessionStorageStore = /** @class */ (function () {
        function SessionStorageStore() {
        }
        /**
         * @param {?} key
         * @return {?}
         */
        SessionStorageStore.prototype.get = /**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            return JSON.parse(sessionStorage.getItem(key) || '{}') || {};
        };
        /**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        SessionStorageStore.prototype.set = /**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        function (key, value) {
            sessionStorage.setItem(key, JSON.stringify(value));
            return true;
        };
        /**
         * @param {?} key
         * @return {?}
         */
        SessionStorageStore.prototype.remove = /**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            sessionStorage.removeItem(key);
        };
        return SessionStorageStore;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: src/token/helper.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} model
     * @return {?}
     */
    function CheckSimple(model) {
        return model != null && typeof model.token === 'string' && model.token.length > 0;
    }
    /**
     * @param {?} model
     * @param {?} offset
     * @return {?}
     */
    function CheckJwt(model, offset) {
        return model != null && !!model.token && !model.isExpired(offset);
    }
    /**
     * @param {?} options
     * @param {?} injector
     * @param {?=} url
     * @return {?}
     */
    function ToLogin(options, injector, url) {
        /** @type {?} */
        var router$1 = injector.get(router.Router);
        (/** @type {?} */ (((/** @type {?} */ (injector.get(DA_SERVICE_TOKEN)))).referrer)).url = url || router$1.url;
        if (options.token_invalid_redirect === true) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                if (/^https?:\/\//g.test((/** @type {?} */ (options.login_url)))) {
                    injector.get(common.DOCUMENT).location.href = (/** @type {?} */ (options.login_url));
                }
                else {
                    router$1.navigate([options.login_url]);
                }
            }));
        }
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/token/base.interceptor.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HttpAuthInterceptorHandler = /** @class */ (function () {
        function HttpAuthInterceptorHandler(next, interceptor) {
            this.next = next;
            this.interceptor = interceptor;
        }
        /**
         * @param {?} req
         * @return {?}
         */
        HttpAuthInterceptorHandler.prototype.handle = /**
         * @param {?} req
         * @return {?}
         */
        function (req) {
            return this.interceptor.intercept(req, this.next);
        };
        return HttpAuthInterceptorHandler;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        HttpAuthInterceptorHandler.prototype.next;
        /**
         * @type {?}
         * @private
         */
        HttpAuthInterceptorHandler.prototype.interceptor;
    }
    /**
     * @abstract
     */
    var BaseInterceptor = /** @class */ (function () {
        function BaseInterceptor(injector) {
            this.injector = injector;
        }
        /**
         * @param {?} req
         * @param {?} next
         * @return {?}
         */
        BaseInterceptor.prototype.intercept = /**
         * @param {?} req
         * @param {?} next
         * @return {?}
         */
        function (req, next) {
            var e_1, _a;
            /** @type {?} */
            var options = __assign({}, new DelonAuthConfig(), this.injector.get(DelonAuthConfig, undefined));
            if (options.ignores) {
                try {
                    for (var _b = __values((/** @type {?} */ (options.ignores))), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var item = _c.value;
                        if (item.test(req.url))
                            return next.handle(req);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            if (options.allow_anonymous_key &&
                (req.params.has(options.allow_anonymous_key) || new RegExp("[?|&]" + options.allow_anonymous_key + "=[^&]+").test(req.urlWithParams))) {
                return next.handle(req);
            }
            if (this.isAuth(options)) {
                req = this.setReq(req, options);
            }
            else {
                ToLogin(options, this.injector);
                // Interrupt Http request, so need to generate a new Observable
                /** @type {?} */
                var err$_1 = new rxjs.Observable((/**
                 * @param {?} observer
                 * @return {?}
                 */
                function (observer) {
                    /** @type {?} */
                    var res = new http.HttpErrorResponse({
                        url: req.url,
                        headers: req.headers,
                        status: 401,
                        statusText: "\u6765\u81EA @delon/auth \u7684\u62E6\u622A\uFF0C\u6240\u8BF7\u6C42URL\u672A\u6388\u6743\uFF0C\u82E5\u662F\u767B\u5F55API\u53EF\u52A0\u5165 [url?_allow_anonymous=true] \u6765\u8868\u793A\u5FFD\u7565\u6821\u9A8C\uFF0C\u66F4\u591A\u65B9\u6CD5\u8BF7\u53C2\u8003\uFF1A https://ng-alain.com/auth/getting-started#DelonAuthConfig\nThe interception from @delon/auth, the requested URL is not authorized. If the login API can add [url?_allow_anonymous=true] to ignore the check, please refer to: https://ng-alain.com/auth/getting-started#DelonAuthConfig",
                    });
                    observer.error(res);
                }));
                if (options.executeOtherInterceptors) {
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
                        function (_next, _interceptor) { return new HttpAuthInterceptorHandler(_next, _interceptor); }), {
                            handle: (/**
                             * @param {?} _
                             * @return {?}
                             */
                            function (_) { return err$_1; }),
                        });
                        return chain.handle(req);
                    }
                }
                return err$_1;
            }
            return next.handle(req);
        };
        /** @nocollapse */
        BaseInterceptor.ctorParameters = function () { return [
            { type: core.Injector, decorators: [{ type: core.Optional }] }
        ]; };
        return BaseInterceptor;
    }());
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        BaseInterceptor.prototype.model;
        /**
         * @type {?}
         * @protected
         */
        BaseInterceptor.prototype.injector;
        /**
         * @abstract
         * @param {?} options
         * @return {?}
         */
        BaseInterceptor.prototype.isAuth = function (options) { };
        /**
         * @abstract
         * @param {?} req
         * @param {?} options
         * @return {?}
         */
        BaseInterceptor.prototype.setReq = function (req, options) { };
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/token/jwt/jwt.helper.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} str
     * @return {?}
     */
    function urlBase64Decode(str) {
        /** @type {?} */
        var output = str.replace(/-/g, '+').replace(/_/g, '/');
        switch (output.length % 4) {
            case 0: {
                break;
            }
            case 2: {
                output += '==';
                break;
            }
            case 3: {
                output += '=';
                break;
            }
            default: {
                throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
            }
        }
        return b64DecodeUnicode(output);
    }
    /**
     * @param {?} str
     * @return {?}
     */
    function b64decode(str) {
        /** @type {?} */
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        /** @type {?} */
        var output = '';
        str = String(str).replace(/=+$/, '');
        for (
        // initialize result and counters
        // tslint:disable:no-conditional-assignment binary-expression-operand-order
        var bc = 0, bs = void 0, buffer = void 0, idx = 0; 
        // get next character
        (buffer = str.charAt(idx++)); 
        // character found in table? initialize bit storage and add its ascii value;
        ~buffer &&
            // tslint:disable-next-line: ban-comma-operator
            ((bs = bc % 4 ? bs * 64 + buffer : buffer),
                // and if not first of each 4 characters,
                // convert the first 8 bits to one ascii character
                bc++ % 4)
            ? (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6))))
            : 0) {
            // try to find character in table (0-63, not found => -1)
            buffer = chars.indexOf(buffer);
        }
        return output;
    }
    // https://developer.mozilla.org/en/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
    /**
     * @param {?} str
     * @return {?}
     */
    function b64DecodeUnicode(str) {
        return decodeURIComponent(Array.prototype.map
            .call(b64decode(str), (/**
         * @param {?} c
         * @return {?}
         */
        function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }))
            .join(''));
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/token/jwt/jwt.model.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var JWTTokenModel = /** @class */ (function () {
        function JWTTokenModel() {
        }
        Object.defineProperty(JWTTokenModel.prototype, "payload", {
            /**
             * 获取载荷信息
             */
            get: /**
             * 获取载荷信息
             * @return {?}
             */
            function () {
                /** @type {?} */
                var parts = (this.token || '').split('.');
                if (parts.length !== 3)
                    throw new Error('JWT must have 3 parts');
                /** @type {?} */
                var decoded = urlBase64Decode(parts[1]);
                return JSON.parse(decoded);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 检查Token是否过期，`payload` 必须包含 `exp` 时有效
         *
         * @param offsetSeconds 偏移量
         */
        /**
         * 检查Token是否过期，`payload` 必须包含 `exp` 时有效
         *
         * @param {?=} offsetSeconds 偏移量
         * @return {?}
         */
        JWTTokenModel.prototype.isExpired = /**
         * 检查Token是否过期，`payload` 必须包含 `exp` 时有效
         *
         * @param {?=} offsetSeconds 偏移量
         * @return {?}
         */
        function (offsetSeconds) {
            if (offsetSeconds === void 0) { offsetSeconds = 0; }
            /** @type {?} */
            var decoded = this.payload;
            if (!decoded.hasOwnProperty('exp'))
                return null;
            /** @type {?} */
            var date = new Date(0);
            date.setUTCSeconds(decoded.exp);
            return !(date.valueOf() > new Date().valueOf() + offsetSeconds * 1000);
        };
        return JWTTokenModel;
    }());
    if (false) {
        /** @type {?} */
        JWTTokenModel.prototype.token;
        /* Skipping unhandled member: [key: string]: any;*/
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/token/jwt/jwt.interceptor.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var JWTInterceptor = /** @class */ (function (_super) {
        __extends(JWTInterceptor, _super);
        function JWTInterceptor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} options
         * @return {?}
         */
        JWTInterceptor.prototype.isAuth = /**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            this.model = this.injector.get(DA_SERVICE_TOKEN).get(JWTTokenModel);
            return CheckJwt((/** @type {?} */ (this.model)), (/** @type {?} */ (options.token_exp_offset)));
        };
        /**
         * @param {?} req
         * @param {?} _options
         * @return {?}
         */
        JWTInterceptor.prototype.setReq = /**
         * @param {?} req
         * @param {?} _options
         * @return {?}
         */
        function (req, _options) {
            return req.clone({
                setHeaders: {
                    Authorization: "Bearer " + this.model.token,
                },
            });
        };
        JWTInterceptor.decorators = [
            { type: core.Injectable }
        ];
        return JWTInterceptor;
    }(BaseInterceptor));

    /**
     * @fileoverview added by tsickle
     * Generated from: src/token/jwt/jwt.guard.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var JWTGuard = /** @class */ (function () {
        function JWTGuard(srv, injector, cog) {
            this.srv = srv;
            this.injector = injector;
            this.cog = __assign({}, new DelonAuthConfig(), cog);
        }
        /**
         * @private
         * @return {?}
         */
        JWTGuard.prototype.process = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var res = CheckJwt(this.srv.get(JWTTokenModel), (/** @type {?} */ (this.cog.token_exp_offset)));
            if (!res) {
                ToLogin(this.cog, this.injector, this.url);
            }
            return res;
        };
        // lazy loading
        // lazy loading
        /**
         * @param {?} route
         * @param {?} _segments
         * @return {?}
         */
        JWTGuard.prototype.canLoad = 
        // lazy loading
        /**
         * @param {?} route
         * @param {?} _segments
         * @return {?}
         */
        function (route, _segments) {
            this.url = route.path;
            return this.process();
        };
        // all children route
        // all children route
        /**
         * @param {?} _childRoute
         * @param {?} state
         * @return {?}
         */
        JWTGuard.prototype.canActivateChild = 
        // all children route
        /**
         * @param {?} _childRoute
         * @param {?} state
         * @return {?}
         */
        function (_childRoute, state) {
            this.url = state.url;
            return this.process();
        };
        // route
        // route
        /**
         * @param {?} _route
         * @param {?} state
         * @return {?}
         */
        JWTGuard.prototype.canActivate = 
        // route
        /**
         * @param {?} _route
         * @param {?} state
         * @return {?}
         */
        function (_route, state) {
            this.url = state.url;
            return this.process();
        };
        JWTGuard.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        JWTGuard.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [DA_SERVICE_TOKEN,] }] },
            { type: core.Injector },
            { type: DelonAuthConfig }
        ]; };
        /** @nocollapse */ JWTGuard.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function JWTGuard_Factory() { return new JWTGuard(core.ɵɵinject(DA_SERVICE_TOKEN), core.ɵɵinject(core.INJECTOR), core.ɵɵinject(DelonAuthConfig)); }, token: JWTGuard, providedIn: "root" });
        return JWTGuard;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        JWTGuard.prototype.cog;
        /**
         * @type {?}
         * @private
         */
        JWTGuard.prototype.url;
        /**
         * @type {?}
         * @private
         */
        JWTGuard.prototype.srv;
        /**
         * @type {?}
         * @private
         */
        JWTGuard.prototype.injector;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/token/simple/simple.model.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SimpleTokenModel = /** @class */ (function () {
        function SimpleTokenModel() {
        }
        return SimpleTokenModel;
    }());
    if (false) {
        /** @type {?} */
        SimpleTokenModel.prototype.token;
        /* Skipping unhandled member: [key: string]: any;*/
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/token/simple/simple.interceptor.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SimpleInterceptor = /** @class */ (function (_super) {
        __extends(SimpleInterceptor, _super);
        function SimpleInterceptor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} _options
         * @return {?}
         */
        SimpleInterceptor.prototype.isAuth = /**
         * @param {?} _options
         * @return {?}
         */
        function (_options) {
            this.model = (/** @type {?} */ (this.injector.get(DA_SERVICE_TOKEN).get()));
            return CheckSimple((/** @type {?} */ (this.model)));
        };
        /**
         * @param {?} req
         * @param {?} options
         * @return {?}
         */
        SimpleInterceptor.prototype.setReq = /**
         * @param {?} req
         * @param {?} options
         * @return {?}
         */
        function (req, options) {
            var _this = this;
            var token_send_template = options.token_send_template, token_send_key = options.token_send_key;
            /** @type {?} */
            var token = (/** @type {?} */ (token_send_template)).replace(/\$\{([\w]+)\}/g, (/**
             * @param {?} _
             * @param {?} g
             * @return {?}
             */
            function (_, g) { return _this.model[g]; }));
            switch (options.token_send_place) {
                case 'header':
                    /** @type {?} */
                    var obj = {};
                    obj[(/** @type {?} */ (token_send_key))] = token;
                    req = req.clone({
                        setHeaders: obj,
                    });
                    break;
                case 'body':
                    /** @type {?} */
                    var body = req.body || {};
                    body[(/** @type {?} */ (token_send_key))] = token;
                    req = req.clone({
                        body: body,
                    });
                    break;
                case 'url':
                    req = req.clone({
                        params: req.params.append((/** @type {?} */ (token_send_key)), token),
                    });
                    break;
            }
            return req;
        };
        SimpleInterceptor.decorators = [
            { type: core.Injectable }
        ];
        return SimpleInterceptor;
    }(BaseInterceptor));

    /**
     * @fileoverview added by tsickle
     * Generated from: src/token/simple/simple.guard.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SimpleGuard = /** @class */ (function () {
        function SimpleGuard(srv, injector, cog) {
            this.srv = srv;
            this.injector = injector;
            this.cog = __assign({}, new DelonAuthConfig(), cog);
        }
        /**
         * @private
         * @return {?}
         */
        SimpleGuard.prototype.process = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var res = CheckSimple((/** @type {?} */ (this.srv.get())));
            if (!res) {
                ToLogin(this.cog, this.injector, this.url);
            }
            return res;
        };
        // lazy loading
        // lazy loading
        /**
         * @param {?} route
         * @param {?} _segments
         * @return {?}
         */
        SimpleGuard.prototype.canLoad = 
        // lazy loading
        /**
         * @param {?} route
         * @param {?} _segments
         * @return {?}
         */
        function (route, _segments) {
            this.url = route.path;
            return this.process();
        };
        // all children route
        // all children route
        /**
         * @param {?} _childRoute
         * @param {?} state
         * @return {?}
         */
        SimpleGuard.prototype.canActivateChild = 
        // all children route
        /**
         * @param {?} _childRoute
         * @param {?} state
         * @return {?}
         */
        function (_childRoute, state) {
            this.url = state.url;
            return this.process();
        };
        // route
        // route
        /**
         * @param {?} _route
         * @param {?} state
         * @return {?}
         */
        SimpleGuard.prototype.canActivate = 
        // route
        /**
         * @param {?} _route
         * @param {?} state
         * @return {?}
         */
        function (_route, state) {
            this.url = state.url;
            return this.process();
        };
        SimpleGuard.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        SimpleGuard.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [DA_SERVICE_TOKEN,] }] },
            { type: core.Injector },
            { type: DelonAuthConfig }
        ]; };
        /** @nocollapse */ SimpleGuard.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function SimpleGuard_Factory() { return new SimpleGuard(core.ɵɵinject(DA_SERVICE_TOKEN), core.ɵɵinject(core.INJECTOR), core.ɵɵinject(DelonAuthConfig)); }, token: SimpleGuard, providedIn: "root" });
        return SimpleGuard;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        SimpleGuard.prototype.cog;
        /**
         * @type {?}
         * @private
         */
        SimpleGuard.prototype.url;
        /**
         * @type {?}
         * @private
         */
        SimpleGuard.prototype.srv;
        /**
         * @type {?}
         * @private
         */
        SimpleGuard.prototype.injector;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/auth.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DelonAuthModule = /** @class */ (function () {
        function DelonAuthModule() {
        }
        DelonAuthModule.decorators = [
            { type: core.NgModule, args: [{},] }
        ];
        return DelonAuthModule;
    }());

    exports.BaseInterceptor = BaseInterceptor;
    exports.DA_SERVICE_TOKEN = DA_SERVICE_TOKEN;
    exports.DA_SERVICE_TOKEN_FACTORY = DA_SERVICE_TOKEN_FACTORY;
    exports.DA_STORE_TOKEN = DA_STORE_TOKEN;
    exports.DA_STORE_TOKEN_LOCAL_FACTORY = DA_STORE_TOKEN_LOCAL_FACTORY;
    exports.DelonAuthConfig = DelonAuthConfig;
    exports.DelonAuthModule = DelonAuthModule;
    exports.JWTGuard = JWTGuard;
    exports.JWTInterceptor = JWTInterceptor;
    exports.JWTTokenModel = JWTTokenModel;
    exports.LocalStorageStore = LocalStorageStore;
    exports.MemoryStore = MemoryStore;
    exports.SessionStorageStore = SessionStorageStore;
    exports.SimpleGuard = SimpleGuard;
    exports.SimpleInterceptor = SimpleInterceptor;
    exports.SimpleTokenModel = SimpleTokenModel;
    exports.SocialService = SocialService;
    exports.TokenService = TokenService;
    exports.urlBase64Decode = urlBase64Decode;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=auth.umd.js.map
