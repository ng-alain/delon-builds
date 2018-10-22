/**
 * @license ng-alain(cipchk@qq.com) v2.0.0-beta.5-785f9ad
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/common'), require('rxjs'), require('@angular/common/http'), require('@delon/theme'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@delon/auth', ['exports', '@angular/core', '@angular/router', '@angular/common', 'rxjs', '@angular/common/http', '@delon/theme', 'rxjs/operators'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.auth = {}),global.ng.core,global.ng.router,global.ng.common,global.rxjs,global.ng.common.http,global.delon.theme,global.rxjs.operators));
}(this, (function (exports,core,router,common,rxjs,http,theme,operators) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DA_SERVICE_TOKEN = new core.InjectionToken('DELON_AUTH_TOKEN_SERVICE_TOKEN');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var OPENTYPE = '_delonAuthSocialType';
    /** @type {?} */
    var HREFCALLBACK = '_delonAuthSocialCallbackByHref';
    var SocialService = /** @class */ (function () {
        function SocialService(tokenService, doc, router$$1) {
            this.tokenService = tokenService;
            this.doc = doc;
            this.router = router$$1;
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
                if (callback === void 0) {
                    callback = '/';
                }
                if (options === void 0) {
                    options = {};
                }
                options = Object.assign({
                    type: 'window',
                    windowFeatures: 'location=yes,height=570,width=520,scrollbars=yes,status=yes',
                }, options);
                localStorage.setItem(OPENTYPE, options.type);
                localStorage.setItem(HREFCALLBACK, callback);
                if (options.type === 'href') {
                    this.doc.location.href = url;
                    return;
                }
                this._win = window.open(url, '_blank', options.windowFeatures);
                this._win$ = setInterval(function () {
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
                }, 100);
                return rxjs.Observable.create(function (observer) {
                    _this.observer = observer;
                });
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
                /** @type {?} */
                var data = { token: "" };
                if (typeof rawData === 'string') {
                    /** @type {?} */
                    var rightUrl = rawData.split('?')[1].split('#')[0];
                    data = /** @type {?} */ (this.router.parseUrl('./?' + rightUrl).queryParams);
                }
                else {
                    data = rawData;
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
                clearInterval(this._win$);
                this._win$ = null;
            };
        SocialService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        SocialService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [DA_SERVICE_TOKEN,] }] },
                { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
                { type: router.Router }
            ];
        };
        return SocialService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DA_STORE_TOKEN = new core.InjectionToken('AUTH_STORE_TOKEN');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                return this.cache[key] || /** @type {?} */ ({});
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        }
        return DelonAuthConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var WINDOW = new core.InjectionToken('Window');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * @param {?} model
     * @return {?}
     */
    function CheckSimple(model) {
        return (model != null && typeof model.token === 'string' && model.token.length > 0);
    }
    /**
     * @param {?} model
     * @param {?} offset
     * @return {?}
     */
    function CheckJwt(model, offset) {
        return model != null && model.token && !model.isExpired(offset);
    }
    /**
     * @param {?} options
     * @param {?} injector
     * @return {?}
     */
    function ToLogin(options, injector) {
        if (options.token_invalid_redirect === true) {
            setTimeout(function () {
                if (/^https?:\/\//g.test(options.login_url)) {
                    injector.get(WINDOW).location.href = options.login_url;
                }
                else {
                    injector.get(router.Router).navigate([options.login_url]);
                }
            });
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
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
                var options = Object.assign(new DelonAuthConfig(), this.injector.get(DelonAuthConfig, null));
                if (options.ignores) {
                    try {
                        for (var _b = __values(/** @type {?} */ (options.ignores)), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var item = _c.value;
                            if (item.test(req.url))
                                return next.handle(req);
                        }
                    }
                    catch (e_1_1) {
                        e_1 = { error: e_1_1 };
                    }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return))
                                _a.call(_b);
                        }
                        finally {
                            if (e_1)
                                throw e_1.error;
                        }
                    }
                }
                if (options.allow_anonymous_key &&
                    (req.params.has(options.allow_anonymous_key) ||
                        this.injector
                            .get(router.Router)
                            .parseUrl(req.urlWithParams)
                            .queryParamMap.has(options.allow_anonymous_key))) {
                    return next.handle(req);
                }
                if (this.isAuth(options)) {
                    req = this.setReq(req, options);
                }
                else {
                    ToLogin(options, this.injector);
                    /** @type {?} */
                    var hc = this.injector.get(theme._HttpClient, null);
                    if (hc)
                        hc.end();
                    return new rxjs.Observable(function (observer) {
                        /** @type {?} */
                        var res = new http.HttpErrorResponse({
                            status: 401,
                            statusText: "From Simple Intercept --> https://ng-alain.com/docs/auth",
                        });
                        observer.error(res);
                    });
                }
                return next.handle(req);
            };
        /** @nocollapse */
        BaseInterceptor.ctorParameters = function () {
            return [
                { type: core.Injector, decorators: [{ type: core.Optional }] }
            ];
        };
        return BaseInterceptor;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var TokenService = /** @class */ (function () {
        function TokenService(options, store) {
            this.options = options;
            this.store = store;
            this.change$ = new rxjs.BehaviorSubject(null);
        }
        Object.defineProperty(TokenService.prototype, "login_url", {
            get: /**
             * @return {?}
             */ function () {
                return this.options.login_url;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TokenService.prototype, "redirect", {
            get: /**
             * @return {?}
             */ function () {
                return this._redirect || '/';
            },
            set: /**
             * @param {?} url
             * @return {?}
             */ function (url) {
                this._redirect = url;
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
                return this.store.set(this.options.store_key, data);
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
                var data = this.store.get(this.options.store_key);
                return type ? ( /** @type {?} */(Object.assign(new type(), data))) : ( /** @type {?} */(data));
            };
        /**
         * @return {?}
         */
        TokenService.prototype.clear = /**
         * @return {?}
         */
            function () {
                this.change$.next(null);
                this.store.remove(this.options.store_key);
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
        TokenService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        TokenService.ctorParameters = function () {
            return [
                { type: DelonAuthConfig },
                { type: undefined, decorators: [{ type: core.Inject, args: [DA_STORE_TOKEN,] }] }
            ];
        };
        return TokenService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        var bc = 0, bs = void 0, buffer = void 0, idx = 0; 
        // get next character
        (buffer = str.charAt(idx++)); 
        // character found in table? initialize bit storage and add its ascii value;
        ~buffer &&
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
    /**
     * @param {?} str
     * @return {?}
     */
    function b64DecodeUnicode(str) {
        return decodeURIComponent(Array.prototype.map
            .call(b64decode(str), function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
            .join(''));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
             */ function () {
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
                if (offsetSeconds === void 0) {
                    offsetSeconds = 0;
                }
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                this.model = this.injector
                    .get(DA_SERVICE_TOKEN)
                    .get(JWTTokenModel);
                return CheckJwt(/** @type {?} */ (this.model), options.token_exp_offset);
            };
        /**
         * @param {?} req
         * @param {?} options
         * @return {?}
         */
        JWTInterceptor.prototype.setReq = /**
         * @param {?} req
         * @param {?} options
         * @return {?}
         */
            function (req, options) {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var JWTGuard = /** @class */ (function () {
        function JWTGuard(srv, injector, cog) {
            this.srv = srv;
            this.injector = injector;
            this.cog = Object.assign(new DelonAuthConfig(), cog);
        }
        /**
         * @return {?}
         */
        JWTGuard.prototype.process = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var res = CheckJwt(this.srv.get(JWTTokenModel), this.cog.token_exp_offset);
                if (!res) {
                    ToLogin(this.cog, this.injector);
                }
                return res;
            };
        // lazy loading
        /**
         * @return {?}
         */
        JWTGuard.prototype.canLoad = /**
         * @return {?}
         */
            function () {
                return this.process();
            };
        // all children route
        /**
         * @return {?}
         */
        JWTGuard.prototype.canActivateChild = /**
         * @return {?}
         */
            function () {
                return this.process();
            };
        // route
        /**
         * @return {?}
         */
        JWTGuard.prototype.canActivate = /**
         * @return {?}
         */
            function () {
                return this.process();
            };
        JWTGuard.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        JWTGuard.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [DA_SERVICE_TOKEN,] }] },
                { type: core.Injector },
                { type: DelonAuthConfig }
            ];
        };
        return JWTGuard;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SimpleTokenModel = /** @class */ (function () {
        function SimpleTokenModel() {
        }
        return SimpleTokenModel;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SimpleInterceptor = /** @class */ (function (_super) {
        __extends(SimpleInterceptor, _super);
        function SimpleInterceptor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} options
         * @return {?}
         */
        SimpleInterceptor.prototype.isAuth = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.model = /** @type {?} */ (this.injector.get(DA_SERVICE_TOKEN).get());
                return CheckSimple(/** @type {?} */ (this.model));
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
                /** @type {?} */
                var token = options.token_send_template.replace(/\$\{([\w]+)\}/g, function (_, g) { return _this.model[g]; });
                switch (options.token_send_place) {
                    case 'header':
                        /** @type {?} */
                        var obj = {};
                        obj[options.token_send_key] = token;
                        req = req.clone({
                            setHeaders: obj,
                        });
                        break;
                    case 'body':
                        /** @type {?} */
                        var body = req.body || {};
                        body[options.token_send_key] = token;
                        req = req.clone({
                            body: body,
                        });
                        break;
                    case 'url':
                        req = req.clone({
                            params: req.params.append(options.token_send_key, token),
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SimpleGuard = /** @class */ (function () {
        function SimpleGuard(srv, injector, cog) {
            this.srv = srv;
            this.injector = injector;
            this.cog = Object.assign(new DelonAuthConfig(), cog);
        }
        /**
         * @return {?}
         */
        SimpleGuard.prototype.process = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var res = CheckSimple(this.srv.get());
                if (!res) {
                    ToLogin(this.cog, this.injector);
                }
                return res;
            };
        // lazy loading
        /**
         * @return {?}
         */
        SimpleGuard.prototype.canLoad = /**
         * @return {?}
         */
            function () {
                return this.process();
            };
        // all children route
        /**
         * @return {?}
         */
        SimpleGuard.prototype.canActivateChild = /**
         * @return {?}
         */
            function () {
                return this.process();
            };
        // route
        /**
         * @return {?}
         */
        SimpleGuard.prototype.canActivate = /**
         * @return {?}
         */
            function () {
                return this.process();
            };
        SimpleGuard.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        SimpleGuard.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [DA_SERVICE_TOKEN,] }] },
                { type: core.Injector },
                { type: DelonAuthConfig }
            ];
        };
        return SimpleGuard;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DelonAuthModule = /** @class */ (function () {
        function DelonAuthModule() {
        }
        /**
         * @return {?}
         */
        DelonAuthModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: DelonAuthModule,
                    providers: [
                        { provide: WINDOW, useValue: window },
                        DelonAuthConfig,
                        SimpleGuard,
                        JWTGuard,
                        { provide: DA_STORE_TOKEN, useClass: LocalStorageStore },
                        { provide: DA_SERVICE_TOKEN, useClass: TokenService },
                    ],
                };
            };
        DelonAuthModule.decorators = [
            { type: core.NgModule, args: [{},] }
        ];
        return DelonAuthModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.SocialService = SocialService;
    exports.DA_STORE_TOKEN = DA_STORE_TOKEN;
    exports.LocalStorageStore = LocalStorageStore;
    exports.MemoryStore = MemoryStore;
    exports.SessionStorageStore = SessionStorageStore;
    exports.BaseInterceptor = BaseInterceptor;
    exports.DA_SERVICE_TOKEN = DA_SERVICE_TOKEN;
    exports.TokenService = TokenService;
    exports.urlBase64Decode = urlBase64Decode;
    exports.JWTTokenModel = JWTTokenModel;
    exports.JWTInterceptor = JWTInterceptor;
    exports.JWTGuard = JWTGuard;
    exports.SimpleTokenModel = SimpleTokenModel;
    exports.SimpleInterceptor = SimpleInterceptor;
    exports.SimpleGuard = SimpleGuard;
    exports.DelonAuthConfig = DelonAuthConfig;
    exports.DelonAuthModule = DelonAuthModule;
    exports.ɵa = WINDOW;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9hdXRoL3NyYy90b2tlbi9pbnRlcmZhY2UudHMiLCJuZzovL0BkZWxvbi9hdXRoL3NyYy9zb2NpYWwvc29jaWFsLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi9hdXRoL3NyYy9zdG9yZS9pbnRlcmZhY2UudHMiLCJuZzovL0BkZWxvbi9hdXRoL3NyYy9zdG9yZS9sb2NhbC1zdG9yYWdlLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi9hdXRoL3NyYy9zdG9yZS9tZW1vcnkuc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3N0b3JlL3Nlc3Npb24tc3RvcmFnZS5zZXJ2aWNlLnRzIiwibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL2F1dGguY29uZmlnLnRzIiwibmc6Ly9AZGVsb24vYXV0aC9zcmMvd2luX3Rva2Vucy50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3Rva2VuL2hlbHBlci50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3Rva2VuL2Jhc2UuaW50ZXJjZXB0b3IudHMiLCJuZzovL0BkZWxvbi9hdXRoL3NyYy90b2tlbi90b2tlbi5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vYXV0aC9zcmMvdG9rZW4vand0L2p3dC5oZWxwZXIudHMiLCJuZzovL0BkZWxvbi9hdXRoL3NyYy90b2tlbi9qd3Qvand0Lm1vZGVsLnRzIiwibmc6Ly9AZGVsb24vYXV0aC9zcmMvdG9rZW4vand0L2p3dC5pbnRlcmNlcHRvci50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3Rva2VuL2p3dC9qd3QuZ3VhcmQudHMiLCJuZzovL0BkZWxvbi9hdXRoL3NyYy90b2tlbi9zaW1wbGUvc2ltcGxlLm1vZGVsLnRzIiwibmc6Ly9AZGVsb24vYXV0aC9zcmMvdG9rZW4vc2ltcGxlL3NpbXBsZS5pbnRlcmNlcHRvci50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3Rva2VuL3NpbXBsZS9zaW1wbGUuZ3VhcmQudHMiLCJuZzovL0BkZWxvbi9hdXRoL3NyYy9hdXRoLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY29uc3QgREFfU0VSVklDRV9UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxJVG9rZW5TZXJ2aWNlPihcbiAgJ0RFTE9OX0FVVEhfVE9LRU5fU0VSVklDRV9UT0tFTicsXG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUb2tlbk1vZGVsIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuXG4gIHRva2VuOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRva2VuU2VydmljZSB7XG4gIHNldChkYXRhOiBJVG9rZW5Nb2RlbCk6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIMOowo7Ct8Olwo/CllRva2Vuw6/CvMKMw6XCvcKiw6XCvMKPw6XCjMKFw6bCi8Ksw6/CvMKaXG4gICAqIC0gYGdldCgpYCDDqMKOwrfDpcKPwpYgU2ltcGxlIFRva2VuXG4gICAqIC0gYGdldDxKV1RUb2tlbk1vZGVsPihKV1RUb2tlbk1vZGVsKWAgw6jCjsK3w6XCj8KWIEpXVCBUb2tlblxuICAgKi9cbiAgZ2V0KHR5cGU/OiBhbnkpOiBJVG9rZW5Nb2RlbDtcblxuICAvKipcbiAgICogw6jCjsK3w6XCj8KWVG9rZW7Dr8K8wozDpcK9wqLDpcK8wo/DpcKMwoXDpsKLwqzDr8K8wppcbiAgICogLSBgZ2V0KClgIMOowo7Ct8Olwo/CliBTaW1wbGUgVG9rZW5cbiAgICogLSBgZ2V0PEpXVFRva2VuTW9kZWw+KEpXVFRva2VuTW9kZWwpYCDDqMKOwrfDpcKPwpYgSldUIFRva2VuXG4gICAqL1xuICBnZXQ8VCBleHRlbmRzIElUb2tlbk1vZGVsPih0eXBlPzogYW55KTogVDtcblxuICBjbGVhcigpOiB2b2lkO1xuXG4gIGNoYW5nZSgpOiBPYnNlcnZhYmxlPElUb2tlbk1vZGVsPjtcblxuICAvKiogw6jCjsK3w6XCj8KWw6fCmcK7w6XCvcKVw6XCnMKww6XCncKAICovXG4gIHJlYWRvbmx5IGxvZ2luX3VybDogc3RyaW5nO1xuXG4gIC8qKiDDp8KZwrvDpcK9wpXDpcKQwo7DqMK3wrPDqMK9wqzDpcKcwrDDpcKdwoDDr8K8wozDpsKcwqrDpsKMwofDpcKuwprDpsKXwrbDqMK/wpTDpcKbwp4gYC9gICovXG4gIHJlZGlyZWN0OiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE9ic2VydmVyLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7XG4gIElUb2tlbk1vZGVsLFxuICBJVG9rZW5TZXJ2aWNlLFxuICBEQV9TRVJWSUNFX1RPS0VOLFxufSBmcm9tICcuLi90b2tlbi9pbnRlcmZhY2UnO1xuXG5jb25zdCBPUEVOVFlQRSA9ICdfZGVsb25BdXRoU29jaWFsVHlwZSc7XG5jb25zdCBIUkVGQ0FMTEJBQ0sgPSAnX2RlbG9uQXV0aFNvY2lhbENhbGxiYWNrQnlIcmVmJztcblxuZXhwb3J0IHR5cGUgU29jaWFsT3BlblR5cGUgPSAnaHJlZicgfCAnd2luZG93JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNvY2lhbFNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF93aW46IFdpbmRvdztcbiAgcHJpdmF0ZSBfd2luJDogYW55O1xuICBwcml2YXRlIG9ic2VydmVyOiBPYnNlcnZlcjxJVG9rZW5Nb2RlbD47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChEQV9TRVJWSUNFX1RPS0VOKSBwcml2YXRlIHRva2VuU2VydmljZTogSVRva2VuU2VydmljZSxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICkge31cblxuICAvKipcbiAgICogw6TCvcK/w6fClMKow6fCqsKXw6TCvcKTw6bCicKTw6XCvMKAw6bCjsKIw6bCncKDw6nCocK1w6/CvMKMw6jCv8KUw6XCm8Kew6XCgMK8w6bCmMKvIGBPYnNlcnZhYmxlPElUb2tlbk1vZGVsPmAgw6fClMKow6TCusKOw6jCrsKiw6nCmMKFw6bCjsKIw6bCncKDw6XCkMKOw6jCv8KUw6XCm8Kew6fCmsKEw6fCu8KTw6bCnsKcXG4gICAqIEBwYXJhbSB1cmwgw6jCjsK3w6XCj8KWw6bCjsKIw6bCncKDw6XCnMKww6XCncKAXG4gICAqIEBwYXJhbSBjYWxsYmFjayDDpcKbwp7DqMKwwoPDqMK3wq/Dp8KUwrHDpcKcwrDDpcKdwoBcbiAgICogQHBhcmFtIG9wdGlvbnMud2luZG93RmVhdHVyZXMgw6fCrcKJw6XCkMKMIGB3aW5kb3cub3BlbmAgw6fCmsKEIGBmZWF0dXJlc2Agw6XCj8KCw6bClcKww6XCgMK8XG4gICAqL1xuICBsb2dpbihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBjYWxsYmFjaz86IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgdHlwZT86ICd3aW5kb3cnO1xuICAgICAgd2luZG93RmVhdHVyZXM/OiBzdHJpbmc7XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxJVG9rZW5Nb2RlbD47XG5cbiAgLyoqXG4gICAqIMOowrfCs8Oowr3CrMOowofCs8Omwo7CiMOmwp3Cg8OpwqHCtVxuICAgKiBAcGFyYW0gdXJsIMOowo7Ct8Olwo/ClsOmwo7CiMOmwp3Cg8OlwpzCsMOlwp3CgFxuICAgKiBAcGFyYW0gY2FsbGJhY2sgw6XCm8Kew6jCsMKDw6jCt8Kvw6fClMKxw6XCnMKww6XCncKAXG4gICAqL1xuICBsb2dpbihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBjYWxsYmFjaz86IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgdHlwZT86ICdocmVmJztcbiAgICB9LFxuICApOiB2b2lkO1xuXG4gIC8qKlxuICAgKiDDqMK3wrPDqMK9wqzDqMKHwrPDp8KZwrvDpcK9wpXDqcKhwrXDr8K8wozDqMKLwqXDpMK4wrogYHR5cGU9d2luZG93YCDDpsKXwrbDr8K8wozDqMK/wpTDpcKbwp7DpcKAwrzDpsKYwq8gYE9ic2VydmFibGU8SVRva2VuTW9kZWw+YFxuICAgKiBAcGFyYW0gdXJsIMOowo7Ct8Olwo/ClsOmwo7CiMOmwp3Cg8OlwpzCsMOlwp3CgFxuICAgKiBAcGFyYW0gY2FsbGJhY2sgw6XCvcKTIGB0eXBlPWhyZWZgIMOmwojCkMOlworCn8OmwpfCtsOnwprChMOlwpvCnsOowrDCg8OowrfCr8OnwpTCscOlwpzCsMOlwp3CgFxuICAgKiBAcGFyYW0gb3B0aW9ucy50eXBlIMOmwonCk8OlwrzCgMOmwpbCucOlwrzCj8OvwrzCjMOpwrvCmMOowq7CpCBgd2luZG93YFxuICAgKiBAcGFyYW0gb3B0aW9ucy53aW5kb3dGZWF0dXJlcyDDp8KtwonDpcKQwowgYHdpbmRvdy5vcGVuYCDDp8KawoQgYGZlYXR1cmVzYCDDpcKPwoLDpsKVwrDDpcKAwrxcbiAgICovXG4gIGxvZ2luKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGNhbGxiYWNrOiBzdHJpbmcgPSAnLycsXG4gICAgb3B0aW9uczoge1xuICAgICAgdHlwZT86IFNvY2lhbE9wZW5UeXBlO1xuICAgICAgd2luZG93RmVhdHVyZXM/OiBzdHJpbmc7XG4gICAgfSA9IHt9LFxuICApOiBPYnNlcnZhYmxlPElUb2tlbk1vZGVsPiB8IHZvaWQge1xuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge1xuICAgICAgICB0eXBlOiAnd2luZG93JyxcbiAgICAgICAgd2luZG93RmVhdHVyZXM6XG4gICAgICAgICAgJ2xvY2F0aW9uPXllcyxoZWlnaHQ9NTcwLHdpZHRoPTUyMCxzY3JvbGxiYXJzPXllcyxzdGF0dXM9eWVzJyxcbiAgICAgIH0sXG4gICAgICBvcHRpb25zLFxuICAgICk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oT1BFTlRZUEUsIG9wdGlvbnMudHlwZSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oSFJFRkNBTExCQUNLLCBjYWxsYmFjayk7XG4gICAgaWYgKG9wdGlvbnMudHlwZSA9PT0gJ2hyZWYnKSB7XG4gICAgICB0aGlzLmRvYy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3dpbiA9IHdpbmRvdy5vcGVuKHVybCwgJ19ibGFuaycsIG9wdGlvbnMud2luZG93RmVhdHVyZXMpO1xuICAgIHRoaXMuX3dpbiQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fd2luICYmIHRoaXMuX3dpbi5jbG9zZWQpIHtcbiAgICAgICAgdGhpcy5uZ09uRGVzdHJveSgpO1xuXG4gICAgICAgIGxldCBtb2RlbCA9IHRoaXMudG9rZW5TZXJ2aWNlLmdldCgpO1xuICAgICAgICBpZiAobW9kZWwgJiYgIW1vZGVsLnRva2VuKSBtb2RlbCA9IG51bGw7XG5cbiAgICAgICAgLy8gw6jCp8Kmw6XCj8KRw6XCj8KYw6bCm8K0w6nCgMKaw6fCn8KlXG4gICAgICAgIGlmIChtb2RlbCkge1xuICAgICAgICAgIHRoaXMudG9rZW5TZXJ2aWNlLnNldChtb2RlbCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9ic2VydmVyLm5leHQobW9kZWwpO1xuICAgICAgICB0aGlzLm9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfSwgMTAwKTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyOiBPYnNlcnZlcjxJVG9rZW5Nb2RlbD4pID0+IHtcbiAgICAgIHRoaXMub2JzZXJ2ZXIgPSBvYnNlcnZlcjtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpsKOwojDpsKdwoPDpsKIwpDDpcKKwp/DpcKQwo7Dp8KawoTDpcKbwp7DqMKwwoPDpcKkwoTDp8KQwoZcbiAgICpcbiAgICogQHBhcmFtIHJhd0RhdGEgw6bCjMKHw6XCrsKaw6XCm8Kew6jCsMKDw6jCrsKkw6jCr8KBw6TCv8Khw6bCgcKvw6/CvMKMw6TCuMK6w6fCqcK6w6bCl8K2w6TCu8KOw6bCoMK5w6bCjcKuw6XCvcKTw6XCicKNVVJMw6jCp8Kjw6bCnsKQXG4gICAqL1xuICBjYWxsYmFjayhyYXdEYXRhPzogc3RyaW5nIHwgSVRva2VuTW9kZWwpOiBJVG9rZW5Nb2RlbCB7XG4gICAgLy8gZnJvbSB1cmlcbiAgICBpZiAoIXJhd0RhdGEgJiYgdGhpcy5yb3V0ZXIudXJsLmluZGV4T2YoJz8nKSA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdXJsIG11c2UgY29udGFpbiBhID9gKTtcbiAgICB9XG4gICAgLy8gcGFyc2VcbiAgICBsZXQgZGF0YTogSVRva2VuTW9kZWwgPSB7IHRva2VuOiBgYCB9O1xuICAgIGlmICh0eXBlb2YgcmF3RGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IHJpZ2h0VXJsID0gcmF3RGF0YS5zcGxpdCgnPycpWzFdLnNwbGl0KCcjJylbMF07XG4gICAgICBkYXRhID0gPGFueT50aGlzLnJvdXRlci5wYXJzZVVybCgnLi8/JyArIHJpZ2h0VXJsKS5xdWVyeVBhcmFtcztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YSA9IHJhd0RhdGE7XG4gICAgfVxuXG4gICAgaWYgKCFkYXRhIHx8ICFkYXRhLnRva2VuKSB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWRlIHRva2VuIGRhdGFgKTtcbiAgICB0aGlzLnRva2VuU2VydmljZS5zZXQoZGF0YSk7XG5cbiAgICBjb25zdCB1cmwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShIUkVGQ0FMTEJBQ0spIHx8ICcvJztcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShIUkVGQ0FMTEJBQ0spO1xuICAgIGNvbnN0IHR5cGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShPUEVOVFlQRSk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oT1BFTlRZUEUpO1xuICAgIGlmICh0eXBlID09PSAnd2luZG93Jykge1xuICAgICAgd2luZG93LmNsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodXJsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fd2luJCk7XG4gICAgdGhpcy5fd2luJCA9IG51bGw7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJVG9rZW5Nb2RlbCB9IGZyb20gJy4uL3Rva2VuL2ludGVyZmFjZSc7XG5cbmV4cG9ydCBjb25zdCBEQV9TVE9SRV9UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxJU3RvcmU+KCdBVVRIX1NUT1JFX1RPS0VOJyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0b3JlIHtcbiAgZ2V0KGtleTogc3RyaW5nKTogSVRva2VuTW9kZWw7XG5cbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogSVRva2VuTW9kZWwpOiBib29sZWFuO1xuXG4gIHJlbW92ZShrZXk6IHN0cmluZyk7XG59XG4iLCJpbXBvcnQgeyBJU3RvcmUgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBJVG9rZW5Nb2RlbCB9IGZyb20gJy4uL3Rva2VuL2ludGVyZmFjZSc7XG5cbmV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2VTdG9yZSBpbXBsZW1lbnRzIElTdG9yZSB7XG4gIGdldChrZXk6IHN0cmluZyk6IElUb2tlbk1vZGVsIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpIHx8ICd7fScpIHx8IHt9O1xuICB9XG5cbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogSVRva2VuTW9kZWwpOiBib29sZWFuIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZW1vdmUoa2V5OiBzdHJpbmcpIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJU3RvcmUgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBJVG9rZW5Nb2RlbCB9IGZyb20gJy4uL3Rva2VuL2ludGVyZmFjZSc7XG5cbmV4cG9ydCBjbGFzcyBNZW1vcnlTdG9yZSBpbXBsZW1lbnRzIElTdG9yZSB7XG4gIHByaXZhdGUgY2FjaGU6IHsgW2tleTogc3RyaW5nXTogSVRva2VuTW9kZWwgfSA9IHt9O1xuXG4gIGdldChrZXk6IHN0cmluZyk6IElUb2tlbk1vZGVsIHtcbiAgICByZXR1cm4gdGhpcy5jYWNoZVtrZXldIHx8IDxhbnk+e307XG4gIH1cblxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBJVG9rZW5Nb2RlbCk6IGJvb2xlYW4ge1xuICAgIHRoaXMuY2FjaGVba2V5XSA9IHZhbHVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmVtb3ZlKGtleTogc3RyaW5nKSB7XG4gICAgdGhpcy5jYWNoZVtrZXldID0gbnVsbDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSVN0b3JlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSVRva2VuTW9kZWwgfSBmcm9tICcuLi90b2tlbi9pbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgU2Vzc2lvblN0b3JhZ2VTdG9yZSBpbXBsZW1lbnRzIElTdG9yZSB7XG4gIGdldChrZXk6IHN0cmluZyk6IElUb2tlbk1vZGVsIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGtleSkgfHwgJ3t9JykgfHwge307XG4gIH1cblxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBJVG9rZW5Nb2RlbCk6IGJvb2xlYW4ge1xuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmVtb3ZlKGtleTogc3RyaW5nKSB7XG4gICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICB9XG59XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBEZWxvbkF1dGhDb25maWcge1xuICAvKipcbiAgICogw6XCrcKYw6XCgsKoS0VZw6XCgMK8XG4gICAqL1xuICBzdG9yZV9rZXk/ID0gJ190b2tlbic7XG4gIC8qKlxuICAgKiDDpsKXwqDDpsKVwojDpsKXwrbDqMK3wrPDqMK9wqzDqMKHwrPDp8KZwrvDpcK9wpXDqcKhwrXDr8K8wozDpcKMwoXDpsKLwqzDr8K8wppcbiAgICogLSDDpsKXwqDDpsKVwoh0b2tlbsOlwoDCvFxuICAgKiAtIHRva2Vuw6XCt8Kyw6jCv8KHw6bCnMKfw6/CvMKIw6nCmcKQSldUw6/CvMKJXG4gICAqL1xuICB0b2tlbl9pbnZhbGlkX3JlZGlyZWN0PyA9IHRydWU7XG4gIC8qKlxuICAgKiB0b2tlbsOowr/Ch8OmwpzCn8OmwpfCtsOpwpfCtMOlwoHCj8OnwqfCu8OlwoDCvMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAxMGAgw6fCp8KSw6/CvMKIw6XCjcKVw6TCvcKNw6/CvMKaw6fCp8KSw6/CvMKJXG4gICAqL1xuICB0b2tlbl9leHBfb2Zmc2V0PyA9IDEwO1xuICAvKipcbiAgICogw6XCj8KRw6nCgMKBdG9rZW7DpcKPwoLDpsKVwrDDpcKQwo3Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wpp0b2tlblxuICAgKi9cbiAgdG9rZW5fc2VuZF9rZXk/ID0gJ3Rva2VuJztcbiAgLyoqXG4gICAqIMOlwo/CkcOpwoDCgXRva2Vuw6bCqMKhw6bCncK/w6/CvMKIw6nCu8KYw6jCrsKkw6TCuMK6w6/CvMKaYCR7dG9rZW59YMOvwrzCicOvwrzCjMOkwr3Cv8OnwpTCqCBgJHt0b2tlbn1gIMOowqHCqMOnwqTCunRva2Vuw6fCgsK5w6TCvcKNw6fCrMKmw6/CvMKMw6TCvsKLw6XCpsKCw6/CvMKaXG4gICAqXG4gICAqIC0gYEJlYXJlciAke3Rva2VufWBcbiAgICovXG4gIHRva2VuX3NlbmRfdGVtcGxhdGU/ID0gJyR7dG9rZW59JztcbiAgLyoqXG4gICAqIMOlwo/CkcOpwoDCgXRva2Vuw6XCj8KCw6bClcKww6TCvcKNw6fCvcKuw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaaGVhZGVyXG4gICAqL1xuICB0b2tlbl9zZW5kX3BsYWNlPzogJ2hlYWRlcicgfCAnYm9keScgfCAndXJsJyA9ICdoZWFkZXInO1xuICAvKipcbiAgICogw6fCmcK7w6XCvcKVw6nCocK1w6jCt8Kvw6fClMKxw6XCnMKww6XCncKAXG4gICAqL1xuICBsb2dpbl91cmw/ID0gYC9sb2dpbmA7XG4gIC8qKlxuICAgKiDDpcK/wr3Dp8KVwqVUT0tFTsOnwprChFVSTMOlwpzCsMOlwp3CgMOlwojCl8OowqHCqMOvwrzCjMOpwrvCmMOowq7CpMOlwoDCvMOkwrjCusOvwrzCmlsgL1xcL2xvZ2luLywgL2Fzc2V0c1xcLy8sIC9wYXNzcG9ydFxcLy8gXVxuICAgKi9cbiAgaWdub3Jlcz86IFJlZ0V4cFtdID0gWy9cXC9sb2dpbi8sIC9hc3NldHNcXC8vLCAvcGFzc3BvcnRcXC8vXTtcbiAgLyoqXG4gICAqIMOlwoXCgcOowq7CuMOlwozCv8OlwpDCjcOnwpnCu8Olwr3ClUtFWcOvwrzCjMOowovCpcOowq/Ct8OmwrHCgsOlwo/CgsOmwpXCsMOkwrjCrcOlwrjCpsOmwpzCicOowq/CpUtFWcOowqHCqMOnwqTCusOlwr/CvcOnwpXCpVRPS0VOXG4gICAqL1xuICBhbGxvd19hbm9ueW1vdXNfa2V5PyA9IGBfYWxsb3dfYW5vbnltb3VzYDtcbn1cbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBXSU5ET1cgPSBuZXcgSW5qZWN0aW9uVG9rZW48YW55PignV2luZG93Jyk7XG4iLCJpbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNpbXBsZVRva2VuTW9kZWwgfSBmcm9tICcuL3NpbXBsZS9zaW1wbGUubW9kZWwnO1xuaW1wb3J0IHsgSldUVG9rZW5Nb2RlbCB9IGZyb20gJy4vand0L2p3dC5tb2RlbCc7XG5pbXBvcnQgeyBEZWxvbkF1dGhDb25maWcgfSBmcm9tICcuLi9hdXRoLmNvbmZpZyc7XG5pbXBvcnQgeyBXSU5ET1cgfSBmcm9tICcuLi93aW5fdG9rZW5zJztcblxuZXhwb3J0IGZ1bmN0aW9uIENoZWNrU2ltcGxlKG1vZGVsOiBTaW1wbGVUb2tlbk1vZGVsKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgbW9kZWwgIT0gbnVsbCAmJiB0eXBlb2YgbW9kZWwudG9rZW4gPT09ICdzdHJpbmcnICYmIG1vZGVsLnRva2VuLmxlbmd0aCA+IDBcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENoZWNrSnd0KG1vZGVsOiBKV1RUb2tlbk1vZGVsLCBvZmZzZXQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gbW9kZWwgIT0gbnVsbCAmJiBtb2RlbC50b2tlbiAmJiAhbW9kZWwuaXNFeHBpcmVkKG9mZnNldCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUb0xvZ2luKG9wdGlvbnM6IERlbG9uQXV0aENvbmZpZywgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gIGlmIChvcHRpb25zLnRva2VuX2ludmFsaWRfcmVkaXJlY3QgPT09IHRydWUpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICgvXmh0dHBzPzpcXC9cXC8vZy50ZXN0KG9wdGlvbnMubG9naW5fdXJsKSkge1xuICAgICAgICBpbmplY3Rvci5nZXQoV0lORE9XKS5sb2NhdGlvbi5ocmVmID0gb3B0aW9ucy5sb2dpbl91cmw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmplY3Rvci5nZXQoUm91dGVyKS5uYXZpZ2F0ZShbb3B0aW9ucy5sb2dpbl91cmxdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0b3IsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwUmVxdWVzdCxcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBTZW50RXZlbnQsXG4gIEh0dHBIZWFkZXJSZXNwb25zZSxcbiAgSHR0cFByb2dyZXNzRXZlbnQsXG4gIEh0dHBSZXNwb25zZSxcbiAgSHR0cFVzZXJFdmVudCxcbiAgSHR0cEV2ZW50LFxuICBIdHRwRXJyb3JSZXNwb25zZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgX0h0dHBDbGllbnQgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuXG5pbXBvcnQgeyBJVG9rZW5Nb2RlbCB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IERlbG9uQXV0aENvbmZpZyB9IGZyb20gJy4uL2F1dGguY29uZmlnJztcbmltcG9ydCB7IFRvTG9naW4gfSBmcm9tICcuL2hlbHBlcic7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yKSB7fVxuXG4gIHByb3RlY3RlZCBtb2RlbDogSVRva2VuTW9kZWw7XG5cbiAgYWJzdHJhY3QgaXNBdXRoKG9wdGlvbnM6IERlbG9uQXV0aENvbmZpZyk6IGJvb2xlYW47XG5cbiAgYWJzdHJhY3Qgc2V0UmVxKFxuICAgIHJlcTogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBvcHRpb25zOiBEZWxvbkF1dGhDb25maWcsXG4gICk6IEh0dHBSZXF1ZXN0PGFueT47XG5cbiAgaW50ZXJjZXB0KFxuICAgIHJlcTogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlcixcbiAgKTogT2JzZXJ2YWJsZTxcbiAgICB8IEh0dHBTZW50RXZlbnRcbiAgICB8IEh0dHBIZWFkZXJSZXNwb25zZVxuICAgIHwgSHR0cFByb2dyZXNzRXZlbnRcbiAgICB8IEh0dHBSZXNwb25zZTxhbnk+XG4gICAgfCBIdHRwVXNlckV2ZW50PGFueT5cbiAgPiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICBuZXcgRGVsb25BdXRoQ29uZmlnKCksXG4gICAgICB0aGlzLmluamVjdG9yLmdldChEZWxvbkF1dGhDb25maWcsIG51bGwpLFxuICAgICk7XG4gICAgaWYgKG9wdGlvbnMuaWdub3Jlcykge1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIG9wdGlvbnMuaWdub3JlcyBhcyBSZWdFeHBbXSkge1xuICAgICAgICBpZiAoaXRlbS50ZXN0KHJlcS51cmwpKSByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBvcHRpb25zLmFsbG93X2Fub255bW91c19rZXkgJiZcbiAgICAgIChyZXEucGFyYW1zLmhhcyhvcHRpb25zLmFsbG93X2Fub255bW91c19rZXkpIHx8XG4gICAgICAgIHRoaXMuaW5qZWN0b3JcbiAgICAgICAgICAuZ2V0KFJvdXRlcilcbiAgICAgICAgICAucGFyc2VVcmwocmVxLnVybFdpdGhQYXJhbXMpXG4gICAgICAgICAgLnF1ZXJ5UGFyYW1NYXAuaGFzKG9wdGlvbnMuYWxsb3dfYW5vbnltb3VzX2tleSkpXG4gICAgKSB7XG4gICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0F1dGgob3B0aW9ucykpIHtcbiAgICAgIHJlcSA9IHRoaXMuc2V0UmVxKHJlcSwgb3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFRvTG9naW4ob3B0aW9ucywgdGhpcy5pbmplY3Rvcik7XG4gICAgICAvLyBvYnNlcnZlci5lcnJvcsOvwrzCmsOkwrzCmsOlwq/CvMOlwoDCksOlwpDCjsOnwrvCrcOmwovCpsOmwojCqsOlwpnCqMOmwpfCoMOmwrPClcOowqfCpsOlwo/CkcOvwrzCjMOlwpvCoMOmwq3CpMOvwrzCjMOpwpzCgMOowqbCgcOlwqTChMOnwpDChiBgX0h0dHBDbGllbnRgIMOnworCtsOmwoDCgcOpwpfCrsOpwqLCmFxuICAgICAgY29uc3QgaGMgPSB0aGlzLmluamVjdG9yLmdldChfSHR0cENsaWVudCwgbnVsbCk7XG4gICAgICBpZiAoaGMpIGhjLmVuZCgpO1xuICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8SHR0cEV2ZW50PGFueT4+KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcyA9IG5ldyBIdHRwRXJyb3JSZXNwb25zZSh7XG4gICAgICAgICAgc3RhdHVzOiA0MDEsXG4gICAgICAgICAgc3RhdHVzVGV4dDogYEZyb20gU2ltcGxlIEludGVyY2VwdCAtLT4gaHR0cHM6Ly9uZy1hbGFpbi5jb20vZG9jcy9hdXRoYCxcbiAgICAgICAgfSk7XG4gICAgICAgIG9ic2VydmVyLmVycm9yKHJlcyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElUb2tlblNlcnZpY2UsIElUb2tlbk1vZGVsIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgREFfU1RPUkVfVE9LRU4sIElTdG9yZSB9IGZyb20gJy4uL3N0b3JlL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBEZWxvbkF1dGhDb25maWcgfSBmcm9tICcuLi9hdXRoLmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUb2tlblNlcnZpY2UgaW1wbGVtZW50cyBJVG9rZW5TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjaGFuZ2UkOiBCZWhhdmlvclN1YmplY3Q8SVRva2VuTW9kZWw+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxcbiAgICBJVG9rZW5Nb2RlbFxuICA+KG51bGwpO1xuICBwcml2YXRlIGRhdGE6IElUb2tlbk1vZGVsO1xuICBwcml2YXRlIF9yZWRpcmVjdDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgb3B0aW9uczogRGVsb25BdXRoQ29uZmlnLFxuICAgIEBJbmplY3QoREFfU1RPUkVfVE9LRU4pIHByaXZhdGUgc3RvcmU6IElTdG9yZSxcbiAgKSB7fVxuXG4gIGdldCBsb2dpbl91cmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmxvZ2luX3VybDtcbiAgfVxuXG4gIHNldCByZWRpcmVjdCh1cmw6IHN0cmluZykge1xuICAgIHRoaXMuX3JlZGlyZWN0ID0gdXJsO1xuICB9XG5cbiAgZ2V0IHJlZGlyZWN0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWRpcmVjdCB8fCAnLyc7XG4gIH1cblxuICBzZXQoZGF0YTogSVRva2VuTW9kZWwpOiBib29sZWFuIHtcbiAgICB0aGlzLmNoYW5nZSQubmV4dChkYXRhKTtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZXQodGhpcy5vcHRpb25zLnN0b3JlX2tleSwgZGF0YSk7XG4gIH1cblxuICBnZXQodHlwZT86IGFueSk7XG4gIGdldDxUIGV4dGVuZHMgSVRva2VuTW9kZWw+KHR5cGU/OiB7IG5ldyAoKTogVCB9KTogVCB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuc3RvcmUuZ2V0KHRoaXMub3B0aW9ucy5zdG9yZV9rZXkpO1xuICAgIHJldHVybiB0eXBlID8gKE9iamVjdC5hc3NpZ24obmV3IHR5cGUoKSwgZGF0YSkgYXMgVCkgOiAoZGF0YSBhcyBUKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuY2hhbmdlJC5uZXh0KG51bGwpO1xuICAgIHRoaXMuc3RvcmUucmVtb3ZlKHRoaXMub3B0aW9ucy5zdG9yZV9rZXkpO1xuICB9XG5cbiAgY2hhbmdlKCk6IE9ic2VydmFibGU8SVRva2VuTW9kZWw+IHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UkLnBpcGUoc2hhcmUoKSk7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB1cmxCYXNlNjREZWNvZGUoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICBsZXQgb3V0cHV0ID0gc3RyLnJlcGxhY2UoLy0vZywgJysnKS5yZXBsYWNlKC9fL2csICcvJyk7XG4gIHN3aXRjaCAob3V0cHV0Lmxlbmd0aCAlIDQpIHtcbiAgICBjYXNlIDA6IHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIDI6IHtcbiAgICAgIG91dHB1dCArPSAnPT0nO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgMzoge1xuICAgICAgb3V0cHV0ICs9ICc9JztcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGAnYXRvYicgZmFpbGVkOiBUaGUgc3RyaW5nIHRvIGJlIGRlY29kZWQgaXMgbm90IGNvcnJlY3RseSBlbmNvZGVkLmAsXG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYjY0RGVjb2RlVW5pY29kZShvdXRwdXQpO1xufVxuXG5mdW5jdGlvbiBiNjRkZWNvZGUoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBjaGFycyA9XG4gICAgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JztcbiAgbGV0IG91dHB1dDogc3RyaW5nID0gJyc7XG5cbiAgc3RyID0gU3RyaW5nKHN0cikucmVwbGFjZSgvPSskLywgJycpO1xuXG4gIGZvciAoXG4gICAgLy8gaW5pdGlhbGl6ZSByZXN1bHQgYW5kIGNvdW50ZXJzXG4gICAgbGV0IGJjOiBudW1iZXIgPSAwLCBiczogYW55LCBidWZmZXI6IGFueSwgaWR4OiBudW1iZXIgPSAwO1xuICAgIC8vIGdldCBuZXh0IGNoYXJhY3RlclxuICAgIChidWZmZXIgPSBzdHIuY2hhckF0KGlkeCsrKSk7XG4gICAgLy8gY2hhcmFjdGVyIGZvdW5kIGluIHRhYmxlPyBpbml0aWFsaXplIGJpdCBzdG9yYWdlIGFuZCBhZGQgaXRzIGFzY2lpIHZhbHVlO1xuICAgIH5idWZmZXIgJiZcbiAgICAoKGJzID0gYmMgJSA0ID8gYnMgKiA2NCArIGJ1ZmZlciA6IGJ1ZmZlciksXG4gICAgLy8gYW5kIGlmIG5vdCBmaXJzdCBvZiBlYWNoIDQgY2hhcmFjdGVycyxcbiAgICAvLyBjb252ZXJ0IHRoZSBmaXJzdCA4IGJpdHMgdG8gb25lIGFzY2lpIGNoYXJhY3RlclxuICAgIGJjKysgJSA0KVxuICAgICAgPyAob3V0cHV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoMjU1ICYgKGJzID4+ICgoLTIgKiBiYykgJiA2KSkpKVxuICAgICAgOiAwXG4gICkge1xuICAgIC8vIHRyeSB0byBmaW5kIGNoYXJhY3RlciBpbiB0YWJsZSAoMC02Mywgbm90IGZvdW5kID0+IC0xKVxuICAgIGJ1ZmZlciA9IGNoYXJzLmluZGV4T2YoYnVmZmVyKTtcbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufVxuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9BUEkvV2luZG93QmFzZTY0L0Jhc2U2NF9lbmNvZGluZ19hbmRfZGVjb2RpbmcjVGhlX1VuaWNvZGVfUHJvYmxlbVxuZnVuY3Rpb24gYjY0RGVjb2RlVW5pY29kZShzdHI6IGFueSkge1xuICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KFxuICAgIEFycmF5LnByb3RvdHlwZS5tYXBcbiAgICAgIC5jYWxsKGI2NGRlY29kZShzdHIpLCAoYzogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiAnJScgKyAoJzAwJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKTtcbiAgICAgIH0pXG4gICAgICAuam9pbignJyksXG4gICk7XG59XG4iLCJpbXBvcnQgeyBJVG9rZW5Nb2RlbCB9IGZyb20gJy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyB1cmxCYXNlNjREZWNvZGUgfSBmcm9tICcuL2p3dC5oZWxwZXInO1xuXG5leHBvcnQgY2xhc3MgSldUVG9rZW5Nb2RlbCBpbXBsZW1lbnRzIElUb2tlbk1vZGVsIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuXG4gIHRva2VuOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIMOowo7Ct8Olwo/ClsOowr3CvcOowo3Ct8Okwr/CocOmwoHCr1xuICAgKi9cbiAgZ2V0IHBheWxvYWQoKTogYW55IHtcbiAgICBjb25zdCBwYXJ0cyA9ICh0aGlzLnRva2VuIHx8ICcnKS5zcGxpdCgnLicpO1xuICAgIGlmIChwYXJ0cy5sZW5ndGggIT09IDMpIHRocm93IG5ldyBFcnJvcignSldUIG11c3QgaGF2ZSAzIHBhcnRzJyk7XG5cbiAgICBjb25zdCBkZWNvZGVkID0gdXJsQmFzZTY0RGVjb2RlKHBhcnRzWzFdKTtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShkZWNvZGVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpsKjwoDDpsKfwqVUb2tlbsOmwpjCr8OlwpDCpsOowr/Ch8OmwpzCn8OvwrzCjGBwYXlsb2FkYCDDpcK/woXDqcKhwrvDpcKMwoXDpcKQwqsgYGV4cGAgw6bCl8K2w6bCnMKJw6bClcKIXG4gICAqXG4gICAqIEBwYXJhbSBvZmZzZXRTZWNvbmRzIMOlwoHCj8OnwqfCu8OpwofCj1xuICAgKi9cbiAgaXNFeHBpcmVkKG9mZnNldFNlY29uZHM6IG51bWJlciA9IDApOiBib29sZWFuIHtcbiAgICBjb25zdCBkZWNvZGVkID0gdGhpcy5wYXlsb2FkO1xuICAgIGlmICghZGVjb2RlZC5oYXNPd25Qcm9wZXJ0eSgnZXhwJykpIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICAgIGRhdGUuc2V0VVRDU2Vjb25kcyhkZWNvZGVkLmV4cCk7XG5cbiAgICByZXR1cm4gIShkYXRlLnZhbHVlT2YoKSA+IG5ldyBEYXRlKCkudmFsdWVPZigpICsgb2Zmc2V0U2Vjb25kcyAqIDEwMDApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgRGVsb25BdXRoQ29uZmlnIH0gZnJvbSAnLi4vLi4vYXV0aC5jb25maWcnO1xuaW1wb3J0IHsgQmFzZUludGVyY2VwdG9yIH0gZnJvbSAnLi4vYmFzZS5pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBEQV9TRVJWSUNFX1RPS0VOIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IEpXVFRva2VuTW9kZWwgfSBmcm9tICcuL2p3dC5tb2RlbCc7XG5pbXBvcnQgeyBDaGVja0p3dCB9IGZyb20gJy4uL2hlbHBlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKV1RJbnRlcmNlcHRvciBleHRlbmRzIEJhc2VJbnRlcmNlcHRvciB7XG4gIGlzQXV0aChvcHRpb25zOiBEZWxvbkF1dGhDb25maWcpOiBib29sZWFuIHtcbiAgICB0aGlzLm1vZGVsID0gdGhpcy5pbmplY3RvclxuICAgICAgLmdldChEQV9TRVJWSUNFX1RPS0VOKVxuICAgICAgLmdldDxKV1RUb2tlbk1vZGVsPihKV1RUb2tlbk1vZGVsKTtcbiAgICByZXR1cm4gQ2hlY2tKd3QodGhpcy5tb2RlbCBhcyBKV1RUb2tlbk1vZGVsLCBvcHRpb25zLnRva2VuX2V4cF9vZmZzZXQpO1xuICB9XG5cbiAgc2V0UmVxKHJlcTogSHR0cFJlcXVlc3Q8YW55Piwgb3B0aW9uczogRGVsb25BdXRoQ29uZmlnKTogSHR0cFJlcXVlc3Q8YW55PiB7XG4gICAgcmV0dXJuIHJlcS5jbG9uZSh7XG4gICAgICBzZXRIZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0aGlzLm1vZGVsLnRva2VufWAsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgQ2FuQWN0aXZhdGVDaGlsZCwgQ2FuTG9hZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEQV9TRVJWSUNFX1RPS0VOLCBJVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IEpXVFRva2VuTW9kZWwgfSBmcm9tICcuL2p3dC5tb2RlbCc7XG5pbXBvcnQgeyBEZWxvbkF1dGhDb25maWcgfSBmcm9tICcuLi8uLi9hdXRoLmNvbmZpZyc7XG5pbXBvcnQgeyBDaGVja0p3dCwgVG9Mb2dpbiB9IGZyb20gJy4uL2hlbHBlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKV1RHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlLCBDYW5BY3RpdmF0ZUNoaWxkLCBDYW5Mb2FkIHtcbiAgcHJpdmF0ZSBjb2c6IERlbG9uQXV0aENvbmZpZztcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChEQV9TRVJWSUNFX1RPS0VOKSBwcml2YXRlIHNydjogSVRva2VuU2VydmljZSxcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBjb2c6IERlbG9uQXV0aENvbmZpZyxcbiAgKSB7XG4gICAgdGhpcy5jb2cgPSBPYmplY3QuYXNzaWduKG5ldyBEZWxvbkF1dGhDb25maWcoKSwgY29nKTtcbiAgfVxuXG4gIHByaXZhdGUgcHJvY2VzcygpOiBib29sZWFuIHtcbiAgICBjb25zdCByZXMgPSBDaGVja0p3dChcbiAgICAgIHRoaXMuc3J2LmdldDxKV1RUb2tlbk1vZGVsPihKV1RUb2tlbk1vZGVsKSxcbiAgICAgIHRoaXMuY29nLnRva2VuX2V4cF9vZmZzZXQsXG4gICAgKTtcbiAgICBpZiAoIXJlcykge1xuICAgICAgVG9Mb2dpbih0aGlzLmNvZywgdGhpcy5pbmplY3Rvcik7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvLyBsYXp5IGxvYWRpbmdcbiAgY2FuTG9hZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKCk7XG4gIH1cbiAgLy8gYWxsIGNoaWxkcmVuIHJvdXRlXG4gIGNhbkFjdGl2YXRlQ2hpbGQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VzcygpO1xuICB9XG4gIC8vIHJvdXRlXG4gIGNhbkFjdGl2YXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3MoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSVRva2VuTW9kZWwgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgU2ltcGxlVG9rZW5Nb2RlbCBpbXBsZW1lbnRzIElUb2tlbk1vZGVsIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuXG4gIHRva2VuOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgRGVsb25BdXRoQ29uZmlnIH0gZnJvbSAnLi4vLi4vYXV0aC5jb25maWcnO1xuaW1wb3J0IHsgU2ltcGxlVG9rZW5Nb2RlbCB9IGZyb20gJy4vc2ltcGxlLm1vZGVsJztcbmltcG9ydCB7IEJhc2VJbnRlcmNlcHRvciB9IGZyb20gJy4uL2Jhc2UuaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgREFfU0VSVklDRV9UT0tFTiB9IGZyb20gJy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBDaGVja1NpbXBsZSB9IGZyb20gJy4uL2hlbHBlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaW1wbGVJbnRlcmNlcHRvciBleHRlbmRzIEJhc2VJbnRlcmNlcHRvciB7XG4gIGlzQXV0aChvcHRpb25zOiBEZWxvbkF1dGhDb25maWcpOiBib29sZWFuIHtcbiAgICB0aGlzLm1vZGVsID0gdGhpcy5pbmplY3Rvci5nZXQoREFfU0VSVklDRV9UT0tFTikuZ2V0KCkgYXMgU2ltcGxlVG9rZW5Nb2RlbDtcbiAgICByZXR1cm4gQ2hlY2tTaW1wbGUodGhpcy5tb2RlbCBhcyBTaW1wbGVUb2tlbk1vZGVsKTtcbiAgfVxuXG4gIHNldFJlcShyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG9wdGlvbnM6IERlbG9uQXV0aENvbmZpZyk6IEh0dHBSZXF1ZXN0PGFueT4ge1xuICAgIGNvbnN0IHRva2VuID0gb3B0aW9ucy50b2tlbl9zZW5kX3RlbXBsYXRlLnJlcGxhY2UoXG4gICAgICAvXFwkXFx7KFtcXHddKylcXH0vZyxcbiAgICAgIChfOiBzdHJpbmcsIGcpID0+IHRoaXMubW9kZWxbZ10sXG4gICAgKTtcbiAgICBzd2l0Y2ggKG9wdGlvbnMudG9rZW5fc2VuZF9wbGFjZSkge1xuICAgICAgY2FzZSAnaGVhZGVyJzpcbiAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICAgIG9ialtvcHRpb25zLnRva2VuX3NlbmRfa2V5XSA9IHRva2VuO1xuICAgICAgICByZXEgPSByZXEuY2xvbmUoe1xuICAgICAgICAgIHNldEhlYWRlcnM6IG9iaixcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYm9keSc6XG4gICAgICAgIGNvbnN0IGJvZHkgPSByZXEuYm9keSB8fCB7fTtcbiAgICAgICAgYm9keVtvcHRpb25zLnRva2VuX3NlbmRfa2V5XSA9IHRva2VuO1xuICAgICAgICByZXEgPSByZXEuY2xvbmUoe1xuICAgICAgICAgIGJvZHk6IGJvZHksXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3VybCc6XG4gICAgICAgIHJlcSA9IHJlcS5jbG9uZSh7XG4gICAgICAgICAgcGFyYW1zOiByZXEucGFyYW1zLmFwcGVuZChvcHRpb25zLnRva2VuX3NlbmRfa2V5LCB0b2tlbiksXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHJlcTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIENhbkFjdGl2YXRlQ2hpbGQsIENhbkxvYWQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgREFfU0VSVklDRV9UT0tFTiwgSVRva2VuU2VydmljZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBDaGVja1NpbXBsZSwgVG9Mb2dpbiB9IGZyb20gJy4uL2hlbHBlcic7XG5pbXBvcnQgeyBEZWxvbkF1dGhDb25maWcgfSBmcm9tICcuLi8uLi9hdXRoLmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaW1wbGVHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlLCBDYW5BY3RpdmF0ZUNoaWxkLCBDYW5Mb2FkIHtcbiAgcHJpdmF0ZSBjb2c6IERlbG9uQXV0aENvbmZpZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERBX1NFUlZJQ0VfVE9LRU4pIHByaXZhdGUgc3J2OiBJVG9rZW5TZXJ2aWNlLFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIGNvZzogRGVsb25BdXRoQ29uZmlnLFxuICApIHtcbiAgICB0aGlzLmNvZyA9IE9iamVjdC5hc3NpZ24obmV3IERlbG9uQXV0aENvbmZpZygpLCBjb2cpO1xuICB9XG5cbiAgcHJpdmF0ZSBwcm9jZXNzKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJlcyA9IENoZWNrU2ltcGxlKHRoaXMuc3J2LmdldCgpKTtcbiAgICBpZiAoIXJlcykge1xuICAgICAgVG9Mb2dpbih0aGlzLmNvZywgdGhpcy5pbmplY3Rvcik7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvLyBsYXp5IGxvYWRpbmdcbiAgY2FuTG9hZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKCk7XG4gIH1cbiAgLy8gYWxsIGNoaWxkcmVuIHJvdXRlXG4gIGNhbkFjdGl2YXRlQ2hpbGQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VzcygpO1xuICB9XG4gIC8vIHJvdXRlXG4gIGNhbkFjdGl2YXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3MoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGVsb25BdXRoQ29uZmlnIH0gZnJvbSAnLi9hdXRoLmNvbmZpZyc7XG5pbXBvcnQgeyBEQV9TVE9SRV9UT0tFTiB9IGZyb20gJy4vc3RvcmUvaW50ZXJmYWNlJztcbmltcG9ydCB7IERBX1NFUlZJQ0VfVE9LRU4gfSBmcm9tICcuL3Rva2VuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTdG9yZSB9IGZyb20gJy4vc3RvcmUvbG9jYWwtc3RvcmFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IFRva2VuU2VydmljZSB9IGZyb20gJy4vdG9rZW4vdG9rZW4uc2VydmljZSc7XG5pbXBvcnQgeyBTaW1wbGVHdWFyZCB9IGZyb20gJy4vdG9rZW4vc2ltcGxlL3NpbXBsZS5ndWFyZCc7XG5pbXBvcnQgeyBKV1RHdWFyZCB9IGZyb20gJy4vdG9rZW4vand0L2p3dC5ndWFyZCc7XG5pbXBvcnQgeyBXSU5ET1cgfSBmcm9tICcuL3dpbl90b2tlbnMnO1xuXG5ATmdNb2R1bGUoe30pXG5leHBvcnQgY2xhc3MgRGVsb25BdXRoTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEZWxvbkF1dGhNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBXSU5ET1csIHVzZVZhbHVlOiB3aW5kb3cgfSxcbiAgICAgICAgRGVsb25BdXRoQ29uZmlnLFxuICAgICAgICBTaW1wbGVHdWFyZCxcbiAgICAgICAgSldUR3VhcmQsXG4gICAgICAgIHsgcHJvdmlkZTogREFfU1RPUkVfVE9LRU4sIHVzZUNsYXNzOiBMb2NhbFN0b3JhZ2VTdG9yZSB9LFxuICAgICAgICB7IHByb3ZpZGU6IERBX1NFUlZJQ0VfVE9LRU4sIHVzZUNsYXNzOiBUb2tlblNlcnZpY2UgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkluamVjdGlvblRva2VuIiwicm91dGVyIiwiT2JzZXJ2YWJsZSIsIkluamVjdGFibGUiLCJJbmplY3QiLCJET0NVTUVOVCIsIlJvdXRlciIsIl9IdHRwQ2xpZW50IiwiSHR0cEVycm9yUmVzcG9uc2UiLCJJbmplY3RvciIsIk9wdGlvbmFsIiwiQmVoYXZpb3JTdWJqZWN0Iiwic2hhcmUiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFHQSxRQUFhLGdCQUFnQixHQUFHLElBQUlBLG1CQUFjLENBQ2hELGdDQUFnQyxDQUNqQzs7Ozs7O0FDTEQ7SUFXQSxJQUFNLFFBQVEsR0FBRyxzQkFBc0IsQ0FBQzs7SUFDeEMsSUFBTSxZQUFZLEdBQUcsZ0NBQWdDLENBQUM7O1FBVXBELHVCQUNvQyxZQUEyQixFQUNuQyxHQUFRLEVBQzFCQztZQUYwQixpQkFBWSxHQUFaLFlBQVksQ0FBZTtZQUNuQyxRQUFHLEdBQUgsR0FBRyxDQUFLO1lBQzFCLFdBQU0sR0FBTkEsU0FBTTtTQUNaOzs7Ozs7Ozs7Ozs7Ozs7UUFxQ0osNkJBQUs7Ozs7Ozs7WUFBTCxVQUNFLEdBQVcsRUFDWCxRQUFzQixFQUN0QixPQUdNO2dCQU5SLGlCQTJDQztnQkF6Q0MseUJBQUE7b0JBQUEsY0FBc0I7O2dCQUN0Qix3QkFBQTtvQkFBQSxZQUdNOztnQkFFTixPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FDckI7b0JBQ0UsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsY0FBYyxFQUNaLDZEQUE2RDtpQkFDaEUsRUFDRCxPQUFPLENBQ1IsQ0FBQztnQkFDRixZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdDLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUM3QyxJQUFJ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