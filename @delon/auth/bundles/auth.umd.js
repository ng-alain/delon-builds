/**
 * @license ng-alain(cipchk@qq.com) v2.0.0-beta.3-ed90aa6
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9hdXRoL3NyYy90b2tlbi9pbnRlcmZhY2UudHMiLCJuZzovL0BkZWxvbi9hdXRoL3NyYy9zb2NpYWwvc29jaWFsLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi9hdXRoL3NyYy9zdG9yZS9pbnRlcmZhY2UudHMiLCJuZzovL0BkZWxvbi9hdXRoL3NyYy9zdG9yZS9sb2NhbC1zdG9yYWdlLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi9hdXRoL3NyYy9zdG9yZS9tZW1vcnkuc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3N0b3JlL3Nlc3Npb24tc3RvcmFnZS5zZXJ2aWNlLnRzIiwibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL2F1dGguY29uZmlnLnRzIiwibmc6Ly9AZGVsb24vYXV0aC9zcmMvd2luX3Rva2Vucy50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3Rva2VuL2hlbHBlci50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3Rva2VuL2Jhc2UuaW50ZXJjZXB0b3IudHMiLCJuZzovL0BkZWxvbi9hdXRoL3NyYy90b2tlbi90b2tlbi5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vYXV0aC9zcmMvdG9rZW4vand0L2p3dC5oZWxwZXIudHMiLCJuZzovL0BkZWxvbi9hdXRoL3NyYy90b2tlbi9qd3Qvand0Lm1vZGVsLnRzIiwibmc6Ly9AZGVsb24vYXV0aC9zcmMvdG9rZW4vand0L2p3dC5pbnRlcmNlcHRvci50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3Rva2VuL2p3dC9qd3QuZ3VhcmQudHMiLCJuZzovL0BkZWxvbi9hdXRoL3NyYy90b2tlbi9zaW1wbGUvc2ltcGxlLm1vZGVsLnRzIiwibmc6Ly9AZGVsb24vYXV0aC9zcmMvdG9rZW4vc2ltcGxlL3NpbXBsZS5pbnRlcmNlcHRvci50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3Rva2VuL3NpbXBsZS9zaW1wbGUuZ3VhcmQudHMiLCJuZzovL0BkZWxvbi9hdXRoL3NyYy9hdXRoLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgY29uc3QgREFfU0VSVklDRV9UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxJVG9rZW5TZXJ2aWNlPihcclxuICAnREVMT05fQVVUSF9UT0tFTl9TRVJWSUNFX1RPS0VOJyxcclxuKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRva2VuTW9kZWwge1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxuXHJcbiAgdG9rZW46IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVG9rZW5TZXJ2aWNlIHtcclxuICBzZXQoZGF0YTogSVRva2VuTW9kZWwpOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiDDqMKOwrfDpcKPwpZUb2tlbsOvwrzCjMOlwr3CosOlwrzCj8OlwozChcOmwovCrMOvwrzCmlxyXG4gICAqIC0gYGdldCgpYCDDqMKOwrfDpcKPwpYgU2ltcGxlIFRva2VuXHJcbiAgICogLSBgZ2V0PEpXVFRva2VuTW9kZWw+KEpXVFRva2VuTW9kZWwpYCDDqMKOwrfDpcKPwpYgSldUIFRva2VuXHJcbiAgICovXHJcbiAgZ2V0KHR5cGU/OiBhbnkpOiBJVG9rZW5Nb2RlbDtcclxuXHJcbiAgLyoqXHJcbiAgICogw6jCjsK3w6XCj8KWVG9rZW7Dr8K8wozDpcK9wqLDpcK8wo/DpcKMwoXDpsKLwqzDr8K8wppcclxuICAgKiAtIGBnZXQoKWAgw6jCjsK3w6XCj8KWIFNpbXBsZSBUb2tlblxyXG4gICAqIC0gYGdldDxKV1RUb2tlbk1vZGVsPihKV1RUb2tlbk1vZGVsKWAgw6jCjsK3w6XCj8KWIEpXVCBUb2tlblxyXG4gICAqL1xyXG4gIGdldDxUIGV4dGVuZHMgSVRva2VuTW9kZWw+KHR5cGU/OiBhbnkpOiBUO1xyXG5cclxuICBjbGVhcigpOiB2b2lkO1xyXG5cclxuICBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxJVG9rZW5Nb2RlbD47XHJcblxyXG4gIC8qKiDDqMKOwrfDpcKPwpbDp8KZwrvDpcK9wpXDpcKcwrDDpcKdwoAgKi9cclxuICByZWFkb25seSBsb2dpbl91cmw6IHN0cmluZztcclxuXHJcbiAgLyoqIMOnwpnCu8Olwr3ClcOlwpDCjsOowrfCs8Oowr3CrMOlwpzCsMOlwp3CgMOvwrzCjMOmwpzCqsOmwozCh8Olwq7CmsOmwpfCtsOowr/ClMOlwpvCniBgL2AgKi9cclxuICByZWRpcmVjdDogc3RyaW5nO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgT2JzZXJ2ZXIsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgSVRva2VuTW9kZWwsXHJcbiAgSVRva2VuU2VydmljZSxcclxuICBEQV9TRVJWSUNFX1RPS0VOLFxyXG59IGZyb20gJy4uL3Rva2VuL2ludGVyZmFjZSc7XHJcblxyXG5jb25zdCBPUEVOVFlQRSA9ICdfZGVsb25BdXRoU29jaWFsVHlwZSc7XHJcbmNvbnN0IEhSRUZDQUxMQkFDSyA9ICdfZGVsb25BdXRoU29jaWFsQ2FsbGJhY2tCeUhyZWYnO1xyXG5cclxuZXhwb3J0IHR5cGUgU29jaWFsT3BlblR5cGUgPSAnaHJlZicgfCAnd2luZG93JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNvY2lhbFNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgX3dpbjogV2luZG93O1xyXG4gIHByaXZhdGUgX3dpbiQ6IGFueTtcclxuICBwcml2YXRlIG9ic2VydmVyOiBPYnNlcnZlcjxJVG9rZW5Nb2RlbD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdChEQV9TRVJWSUNFX1RPS0VOKSBwcml2YXRlIHRva2VuU2VydmljZTogSVRva2VuU2VydmljZSxcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICkge31cclxuXHJcbiAgLyoqXHJcbiAgICogw6TCvcK/w6fClMKow6fCqsKXw6TCvcKTw6bCicKTw6XCvMKAw6bCjsKIw6bCncKDw6nCocK1w6/CvMKMw6jCv8KUw6XCm8Kew6XCgMK8w6bCmMKvIGBPYnNlcnZhYmxlPElUb2tlbk1vZGVsPmAgw6fClMKow6TCusKOw6jCrsKiw6nCmMKFw6bCjsKIw6bCncKDw6XCkMKOw6jCv8KUw6XCm8Kew6fCmsKEw6fCu8KTw6bCnsKcXHJcbiAgICogQHBhcmFtIHVybCDDqMKOwrfDpcKPwpbDpsKOwojDpsKdwoPDpcKcwrDDpcKdwoBcclxuICAgKiBAcGFyYW0gY2FsbGJhY2sgw6XCm8Kew6jCsMKDw6jCt8Kvw6fClMKxw6XCnMKww6XCncKAXHJcbiAgICogQHBhcmFtIG9wdGlvbnMud2luZG93RmVhdHVyZXMgw6fCrcKJw6XCkMKMIGB3aW5kb3cub3BlbmAgw6fCmsKEIGBmZWF0dXJlc2Agw6XCj8KCw6bClcKww6XCgMK8XHJcbiAgICovXHJcbiAgbG9naW4oXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIGNhbGxiYWNrPzogc3RyaW5nLFxyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgdHlwZT86ICd3aW5kb3cnO1xyXG4gICAgICB3aW5kb3dGZWF0dXJlcz86IHN0cmluZztcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxJVG9rZW5Nb2RlbD47XHJcblxyXG4gIC8qKlxyXG4gICAqIMOowrfCs8Oowr3CrMOowofCs8Omwo7CiMOmwp3Cg8OpwqHCtVxyXG4gICAqIEBwYXJhbSB1cmwgw6jCjsK3w6XCj8KWw6bCjsKIw6bCncKDw6XCnMKww6XCncKAXHJcbiAgICogQHBhcmFtIGNhbGxiYWNrIMOlwpvCnsOowrDCg8OowrfCr8OnwpTCscOlwpzCsMOlwp3CgFxyXG4gICAqL1xyXG4gIGxvZ2luKFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBjYWxsYmFjaz86IHN0cmluZyxcclxuICAgIG9wdGlvbnM/OiB7XHJcbiAgICAgIHR5cGU/OiAnaHJlZic7XHJcbiAgICB9LFxyXG4gICk6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIMOowrfCs8Oowr3CrMOowofCs8OnwpnCu8Olwr3ClcOpwqHCtcOvwrzCjMOowovCpcOkwrjCuiBgdHlwZT13aW5kb3dgIMOmwpfCtsOvwrzCjMOowr/ClMOlwpvCnsOlwoDCvMOmwpjCryBgT2JzZXJ2YWJsZTxJVG9rZW5Nb2RlbD5gXHJcbiAgICogQHBhcmFtIHVybCDDqMKOwrfDpcKPwpbDpsKOwojDpsKdwoPDpcKcwrDDpcKdwoBcclxuICAgKiBAcGFyYW0gY2FsbGJhY2sgw6XCvcKTIGB0eXBlPWhyZWZgIMOmwojCkMOlworCn8OmwpfCtsOnwprChMOlwpvCnsOowrDCg8OowrfCr8OnwpTCscOlwpzCsMOlwp3CgFxyXG4gICAqIEBwYXJhbSBvcHRpb25zLnR5cGUgw6bCicKTw6XCvMKAw6bClsK5w6XCvMKPw6/CvMKMw6nCu8KYw6jCrsKkIGB3aW5kb3dgXHJcbiAgICogQHBhcmFtIG9wdGlvbnMud2luZG93RmVhdHVyZXMgw6fCrcKJw6XCkMKMIGB3aW5kb3cub3BlbmAgw6fCmsKEIGBmZWF0dXJlc2Agw6XCj8KCw6bClcKww6XCgMK8XHJcbiAgICovXHJcbiAgbG9naW4oXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIGNhbGxiYWNrOiBzdHJpbmcgPSAnLycsXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIHR5cGU/OiBTb2NpYWxPcGVuVHlwZTtcclxuICAgICAgd2luZG93RmVhdHVyZXM/OiBzdHJpbmc7XHJcbiAgICB9ID0ge30sXHJcbiAgKTogT2JzZXJ2YWJsZTxJVG9rZW5Nb2RlbD4gfCB2b2lkIHtcclxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogJ3dpbmRvdycsXHJcbiAgICAgICAgd2luZG93RmVhdHVyZXM6XHJcbiAgICAgICAgICAnbG9jYXRpb249eWVzLGhlaWdodD01NzAsd2lkdGg9NTIwLHNjcm9sbGJhcnM9eWVzLHN0YXR1cz15ZXMnLFxyXG4gICAgICB9LFxyXG4gICAgICBvcHRpb25zLFxyXG4gICAgKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKE9QRU5UWVBFLCBvcHRpb25zLnR5cGUpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oSFJFRkNBTExCQUNLLCBjYWxsYmFjayk7XHJcbiAgICBpZiAob3B0aW9ucy50eXBlID09PSAnaHJlZicpIHtcclxuICAgICAgdGhpcy5kb2MubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3dpbiA9IHdpbmRvdy5vcGVuKHVybCwgJ19ibGFuaycsIG9wdGlvbnMud2luZG93RmVhdHVyZXMpO1xyXG4gICAgdGhpcy5fd2luJCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuX3dpbiAmJiB0aGlzLl93aW4uY2xvc2VkKSB7XHJcbiAgICAgICAgdGhpcy5uZ09uRGVzdHJveSgpO1xyXG5cclxuICAgICAgICBsZXQgbW9kZWwgPSB0aGlzLnRva2VuU2VydmljZS5nZXQoKTtcclxuICAgICAgICBpZiAobW9kZWwgJiYgIW1vZGVsLnRva2VuKSBtb2RlbCA9IG51bGw7XHJcblxyXG4gICAgICAgIC8vIMOowqfCpsOlwo/CkcOlwo/CmMOmwpvCtMOpwoDCmsOnwp/CpVxyXG4gICAgICAgIGlmIChtb2RlbCkge1xyXG4gICAgICAgICAgdGhpcy50b2tlblNlcnZpY2Uuc2V0KG1vZGVsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIubmV4dChtb2RlbCk7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9LCAxMDApO1xyXG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogT2JzZXJ2ZXI8SVRva2VuTW9kZWw+KSA9PiB7XHJcbiAgICAgIHRoaXMub2JzZXJ2ZXIgPSBvYnNlcnZlcjtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogw6bCjsKIw6bCncKDw6bCiMKQw6XCisKfw6XCkMKOw6fCmsKEw6XCm8Kew6jCsMKDw6XCpMKEw6fCkMKGXHJcbiAgICpcclxuICAgKiBAcGFyYW0gcmF3RGF0YSDDpsKMwofDpcKuwprDpcKbwp7DqMKwwoPDqMKuwqTDqMKvwoHDpMK/wqHDpsKBwq/Dr8K8wozDpMK4wrrDp8KpwrrDpsKXwrbDpMK7wo7DpsKgwrnDpsKNwq7DpcK9wpPDpcKJwo1VUkzDqMKnwqPDpsKewpBcclxuICAgKi9cclxuICBjYWxsYmFjayhyYXdEYXRhPzogc3RyaW5nIHwgSVRva2VuTW9kZWwpOiBJVG9rZW5Nb2RlbCB7XHJcbiAgICAvLyBmcm9tIHVyaVxyXG4gICAgaWYgKCFyYXdEYXRhICYmIHRoaXMucm91dGVyLnVybC5pbmRleE9mKCc/JykgPT09IC0xKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdXJsIG11c2UgY29udGFpbiBhID9gKTtcclxuICAgIH1cclxuICAgIC8vIHBhcnNlXHJcbiAgICBsZXQgZGF0YTogSVRva2VuTW9kZWwgPSB7IHRva2VuOiBgYCB9O1xyXG4gICAgaWYgKHR5cGVvZiByYXdEYXRhID09PSAnc3RyaW5nJykge1xyXG4gICAgICBjb25zdCByaWdodFVybCA9IHJhd0RhdGEuc3BsaXQoJz8nKVsxXS5zcGxpdCgnIycpWzBdO1xyXG4gICAgICBkYXRhID0gPGFueT50aGlzLnJvdXRlci5wYXJzZVVybCgnLi8/JyArIHJpZ2h0VXJsKS5xdWVyeVBhcmFtcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRhdGEgPSByYXdEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghZGF0YSB8fCAhZGF0YS50b2tlbikgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkZSB0b2tlbiBkYXRhYCk7XHJcbiAgICB0aGlzLnRva2VuU2VydmljZS5zZXQoZGF0YSk7XHJcblxyXG4gICAgY29uc3QgdXJsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oSFJFRkNBTExCQUNLKSB8fCAnLyc7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShIUkVGQ0FMTEJBQ0spO1xyXG4gICAgY29uc3QgdHlwZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKE9QRU5UWVBFKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKE9QRU5UWVBFKTtcclxuICAgIGlmICh0eXBlID09PSAnd2luZG93Jykge1xyXG4gICAgICB3aW5kb3cuY2xvc2UoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodXJsKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl93aW4kKTtcclxuICAgIHRoaXMuX3dpbiQgPSBudWxsO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJVG9rZW5Nb2RlbCB9IGZyb20gJy4uL3Rva2VuL2ludGVyZmFjZSc7XHJcblxyXG5leHBvcnQgY29uc3QgREFfU1RPUkVfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48SVN0b3JlPignQVVUSF9TVE9SRV9UT0tFTicpO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU3RvcmUge1xyXG4gIGdldChrZXk6IHN0cmluZyk6IElUb2tlbk1vZGVsO1xyXG5cclxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBJVG9rZW5Nb2RlbCk6IGJvb2xlYW47XHJcblxyXG4gIHJlbW92ZShrZXk6IHN0cmluZyk7XHJcbn1cclxuIiwiaW1wb3J0IHsgSVN0b3JlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBJVG9rZW5Nb2RlbCB9IGZyb20gJy4uL3Rva2VuL2ludGVyZmFjZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9jYWxTdG9yYWdlU3RvcmUgaW1wbGVtZW50cyBJU3RvcmUge1xyXG4gIGdldChrZXk6IHN0cmluZyk6IElUb2tlbk1vZGVsIHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgfHwgJ3t9JykgfHwge307XHJcbiAgfVxyXG5cclxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBJVG9rZW5Nb2RlbCk6IGJvb2xlYW4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICByZW1vdmUoa2V5OiBzdHJpbmcpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElTdG9yZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgSVRva2VuTW9kZWwgfSBmcm9tICcuLi90b2tlbi9pbnRlcmZhY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lbW9yeVN0b3JlIGltcGxlbWVudHMgSVN0b3JlIHtcclxuICBwcml2YXRlIGNhY2hlOiB7IFtrZXk6IHN0cmluZ106IElUb2tlbk1vZGVsIH0gPSB7fTtcclxuXHJcbiAgZ2V0KGtleTogc3RyaW5nKTogSVRva2VuTW9kZWwge1xyXG4gICAgcmV0dXJuIHRoaXMuY2FjaGVba2V5XSB8fCA8YW55Pnt9O1xyXG4gIH1cclxuXHJcbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogSVRva2VuTW9kZWwpOiBib29sZWFuIHtcclxuICAgIHRoaXMuY2FjaGVba2V5XSA9IHZhbHVlO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICByZW1vdmUoa2V5OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY2FjaGVba2V5XSA9IG51bGw7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElTdG9yZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgSVRva2VuTW9kZWwgfSBmcm9tICcuLi90b2tlbi9pbnRlcmZhY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlc3Npb25TdG9yYWdlU3RvcmUgaW1wbGVtZW50cyBJU3RvcmUge1xyXG4gIGdldChrZXk6IHN0cmluZyk6IElUb2tlbk1vZGVsIHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oa2V5KSB8fCAne30nKSB8fCB7fTtcclxuICB9XHJcblxyXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IElUb2tlbk1vZGVsKTogYm9vbGVhbiB7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlKGtleTogc3RyaW5nKSB7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XHJcbiAgfVxyXG59XHJcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIERlbG9uQXV0aENvbmZpZyB7XHJcbiAgLyoqXHJcbiAgICogw6XCrcKYw6XCgsKoS0VZw6XCgMK8XHJcbiAgICovXHJcbiAgc3RvcmVfa2V5PyA9ICdfdG9rZW4nO1xyXG4gIC8qKlxyXG4gICAqIMOmwpfCoMOmwpXCiMOmwpfCtsOowrfCs8Oowr3CrMOowofCs8OnwpnCu8Olwr3ClcOpwqHCtcOvwrzCjMOlwozChcOmwovCrMOvwrzCmlxyXG4gICAqIC0gw6bCl8Kgw6bClcKIdG9rZW7DpcKAwrxcclxuICAgKiAtIHRva2Vuw6XCt8Kyw6jCv8KHw6bCnMKfw6/CvMKIw6nCmcKQSldUw6/CvMKJXHJcbiAgICovXHJcbiAgdG9rZW5faW52YWxpZF9yZWRpcmVjdD8gPSB0cnVlO1xyXG4gIC8qKlxyXG4gICAqIHRva2Vuw6jCv8KHw6bCnMKfw6bCl8K2w6nCl8K0w6XCgcKPw6fCp8K7w6XCgMK8w6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYDEwYCDDp8KnwpLDr8K8wojDpcKNwpXDpMK9wo3Dr8K8wprDp8KnwpLDr8K8wolcclxuICAgKi9cclxuICB0b2tlbl9leHBfb2Zmc2V0PyA9IDEwO1xyXG4gIC8qKlxyXG4gICAqIMOlwo/CkcOpwoDCgXRva2Vuw6XCj8KCw6bClcKww6XCkMKNw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKadG9rZW5cclxuICAgKi9cclxuICB0b2tlbl9zZW5kX2tleT8gPSAndG9rZW4nO1xyXG4gIC8qKlxyXG4gICAqIMOlwo/CkcOpwoDCgXRva2Vuw6bCqMKhw6bCncK/w6/CvMKIw6nCu8KYw6jCrsKkw6TCuMK6w6/CvMKaYCR7dG9rZW59YMOvwrzCicOvwrzCjMOkwr3Cv8OnwpTCqCBgJHt0b2tlbn1gIMOowqHCqMOnwqTCunRva2Vuw6fCgsK5w6TCvcKNw6fCrMKmw6/CvMKMw6TCvsKLw6XCpsKCw6/CvMKaXHJcbiAgICpcclxuICAgKiAtIGBCZWFyZXIgJHt0b2tlbn1gXHJcbiAgICovXHJcbiAgdG9rZW5fc2VuZF90ZW1wbGF0ZT8gPSAnJHt0b2tlbn0nO1xyXG4gIC8qKlxyXG4gICAqIMOlwo/CkcOpwoDCgXRva2Vuw6XCj8KCw6bClcKww6TCvcKNw6fCvcKuw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaaGVhZGVyXHJcbiAgICovXHJcbiAgdG9rZW5fc2VuZF9wbGFjZT86ICdoZWFkZXInIHwgJ2JvZHknIHwgJ3VybCcgPSAnaGVhZGVyJztcclxuICAvKipcclxuICAgKiDDp8KZwrvDpcK9wpXDqcKhwrXDqMK3wq/Dp8KUwrHDpcKcwrDDpcKdwoBcclxuICAgKi9cclxuICBsb2dpbl91cmw/ID0gYC9sb2dpbmA7XHJcbiAgLyoqXHJcbiAgICogw6XCv8K9w6fClcKlVE9LRU7Dp8KawoRVUkzDpcKcwrDDpcKdwoDDpcKIwpfDqMKhwqjDr8K8wozDqcK7wpjDqMKuwqTDpcKAwrzDpMK4wrrDr8K8wppbIC9cXC9sb2dpbi8sIC9hc3NldHNcXC8vLCAvcGFzc3BvcnRcXC8vIF1cclxuICAgKi9cclxuICBpZ25vcmVzPzogUmVnRXhwW10gPSBbL1xcL2xvZ2luLywgL2Fzc2V0c1xcLy8sIC9wYXNzcG9ydFxcLy9dO1xyXG4gIC8qKlxyXG4gICAqIMOlwoXCgcOowq7CuMOlwozCv8OlwpDCjcOnwpnCu8Olwr3ClUtFWcOvwrzCjMOowovCpcOowq/Ct8OmwrHCgsOlwo/CgsOmwpXCsMOkwrjCrcOlwrjCpsOmwpzCicOowq/CpUtFWcOowqHCqMOnwqTCusOlwr/CvcOnwpXCpVRPS0VOXHJcbiAgICovXHJcbiAgYWxsb3dfYW5vbnltb3VzX2tleT8gPSBgX2FsbG93X2Fub255bW91c2A7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBjb25zdCBXSU5ET1cgPSBuZXcgSW5qZWN0aW9uVG9rZW48YW55PignV2luZG93Jyk7XHJcbiIsImltcG9ydCB7IEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFNpbXBsZVRva2VuTW9kZWwgfSBmcm9tICcuL3NpbXBsZS9zaW1wbGUubW9kZWwnO1xyXG5pbXBvcnQgeyBKV1RUb2tlbk1vZGVsIH0gZnJvbSAnLi9qd3Qvand0Lm1vZGVsJztcclxuaW1wb3J0IHsgRGVsb25BdXRoQ29uZmlnIH0gZnJvbSAnLi4vYXV0aC5jb25maWcnO1xyXG5pbXBvcnQgeyBXSU5ET1cgfSBmcm9tICcuLi93aW5fdG9rZW5zJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDaGVja1NpbXBsZShtb2RlbDogU2ltcGxlVG9rZW5Nb2RlbCk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiAoXHJcbiAgICBtb2RlbCAhPSBudWxsICYmIHR5cGVvZiBtb2RlbC50b2tlbiA9PT0gJ3N0cmluZycgJiYgbW9kZWwudG9rZW4ubGVuZ3RoID4gMFxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDaGVja0p3dChtb2RlbDogSldUVG9rZW5Nb2RlbCwgb2Zmc2V0OiBudW1iZXIpOiBib29sZWFuIHtcclxuICByZXR1cm4gbW9kZWwgIT0gbnVsbCAmJiBtb2RlbC50b2tlbiAmJiAhbW9kZWwuaXNFeHBpcmVkKG9mZnNldCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUb0xvZ2luKG9wdGlvbnM6IERlbG9uQXV0aENvbmZpZywgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgaWYgKG9wdGlvbnMudG9rZW5faW52YWxpZF9yZWRpcmVjdCA9PT0gdHJ1ZSkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICgvXmh0dHBzPzpcXC9cXC8vZy50ZXN0KG9wdGlvbnMubG9naW5fdXJsKSkge1xyXG4gICAgICAgIGluamVjdG9yLmdldChXSU5ET1cpLmxvY2F0aW9uLmhyZWYgPSBvcHRpb25zLmxvZ2luX3VybDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpbmplY3Rvci5nZXQoUm91dGVyKS5uYXZpZ2F0ZShbb3B0aW9ucy5sb2dpbl91cmxdKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdG9yLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge1xyXG4gIEh0dHBJbnRlcmNlcHRvcixcclxuICBIdHRwUmVxdWVzdCxcclxuICBIdHRwSGFuZGxlcixcclxuICBIdHRwU2VudEV2ZW50LFxyXG4gIEh0dHBIZWFkZXJSZXNwb25zZSxcclxuICBIdHRwUHJvZ3Jlc3NFdmVudCxcclxuICBIdHRwUmVzcG9uc2UsXHJcbiAgSHR0cFVzZXJFdmVudCxcclxuICBIdHRwRXZlbnQsXHJcbiAgSHR0cEVycm9yUmVzcG9uc2UsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgX0h0dHBDbGllbnQgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xyXG5cclxuaW1wb3J0IHsgSVRva2VuTW9kZWwgfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IERlbG9uQXV0aENvbmZpZyB9IGZyb20gJy4uL2F1dGguY29uZmlnJztcclxuaW1wb3J0IHsgVG9Mb2dpbiB9IGZyb20gJy4vaGVscGVyJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IpIHt9XHJcblxyXG4gIHByb3RlY3RlZCBtb2RlbDogSVRva2VuTW9kZWw7XHJcblxyXG4gIGFic3RyYWN0IGlzQXV0aChvcHRpb25zOiBEZWxvbkF1dGhDb25maWcpOiBib29sZWFuO1xyXG5cclxuICBhYnN0cmFjdCBzZXRSZXEoXHJcbiAgICByZXE6IEh0dHBSZXF1ZXN0PGFueT4sXHJcbiAgICBvcHRpb25zOiBEZWxvbkF1dGhDb25maWcsXHJcbiAgKTogSHR0cFJlcXVlc3Q8YW55PjtcclxuXHJcbiAgaW50ZXJjZXB0KFxyXG4gICAgcmVxOiBIdHRwUmVxdWVzdDxhbnk+LFxyXG4gICAgbmV4dDogSHR0cEhhbmRsZXIsXHJcbiAgKTogT2JzZXJ2YWJsZTxcclxuICAgIHwgSHR0cFNlbnRFdmVudFxyXG4gICAgfCBIdHRwSGVhZGVyUmVzcG9uc2VcclxuICAgIHwgSHR0cFByb2dyZXNzRXZlbnRcclxuICAgIHwgSHR0cFJlc3BvbnNlPGFueT5cclxuICAgIHwgSHR0cFVzZXJFdmVudDxhbnk+XHJcbiAgPiB7XHJcbiAgICBjb25zdCBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAgbmV3IERlbG9uQXV0aENvbmZpZygpLFxyXG4gICAgICB0aGlzLmluamVjdG9yLmdldChEZWxvbkF1dGhDb25maWcsIG51bGwpLFxyXG4gICAgKTtcclxuICAgIGlmIChvcHRpb25zLmlnbm9yZXMpIHtcclxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIG9wdGlvbnMuaWdub3JlcyBhcyBSZWdFeHBbXSkge1xyXG4gICAgICAgIGlmIChpdGVtLnRlc3QocmVxLnVybCkpIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICBvcHRpb25zLmFsbG93X2Fub255bW91c19rZXkgJiZcclxuICAgICAgKHJlcS5wYXJhbXMuaGFzKG9wdGlvbnMuYWxsb3dfYW5vbnltb3VzX2tleSkgfHxcclxuICAgICAgICB0aGlzLmluamVjdG9yXHJcbiAgICAgICAgICAuZ2V0KFJvdXRlcilcclxuICAgICAgICAgIC5wYXJzZVVybChyZXEudXJsV2l0aFBhcmFtcylcclxuICAgICAgICAgIC5xdWVyeVBhcmFtTWFwLmhhcyhvcHRpb25zLmFsbG93X2Fub255bW91c19rZXkpKVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmlzQXV0aChvcHRpb25zKSkge1xyXG4gICAgICByZXEgPSB0aGlzLnNldFJlcShyZXEsIG9wdGlvbnMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgVG9Mb2dpbihvcHRpb25zLCB0aGlzLmluamVjdG9yKTtcclxuICAgICAgLy8gb2JzZXJ2ZXIuZXJyb3LDr8K8wprDpMK8wprDpcKvwrzDpcKAwpLDpcKQwo7Dp8K7wq3DpsKLwqbDpsKIwqrDpcKZwqjDpsKXwqDDpsKzwpXDqMKnwqbDpcKPwpHDr8K8wozDpcKbwqDDpsKtwqTDr8K8wozDqcKcwoDDqMKmwoHDpcKkwoTDp8KQwoYgYF9IdHRwQ2xpZW50YCDDp8KKwrbDpsKAwoHDqcKXwq7DqcKiwphcclxuICAgICAgY29uc3QgaGMgPSB0aGlzLmluamVjdG9yLmdldChfSHR0cENsaWVudCwgbnVsbCk7XHJcbiAgICAgIGlmIChoYykgaGMuZW5kKCk7XHJcbiAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPEh0dHBFdmVudDxhbnk+PikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IG5ldyBIdHRwRXJyb3JSZXNwb25zZSh7XHJcbiAgICAgICAgICBzdGF0dXM6IDQwMSxcclxuICAgICAgICAgIHN0YXR1c1RleHQ6IGBGcm9tIFNpbXBsZSBJbnRlcmNlcHQgLS0+IGh0dHBzOi8vbmctYWxhaW4uY29tL2RvY3MvYXV0aGAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgb2JzZXJ2ZXIuZXJyb3IocmVzKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgSVRva2VuU2VydmljZSwgSVRva2VuTW9kZWwgfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IERBX1NUT1JFX1RPS0VOLCBJU3RvcmUgfSBmcm9tICcuLi9zdG9yZS9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBEZWxvbkF1dGhDb25maWcgfSBmcm9tICcuLi9hdXRoLmNvbmZpZyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUb2tlblNlcnZpY2UgaW1wbGVtZW50cyBJVG9rZW5TZXJ2aWNlIHtcclxuICBwcml2YXRlIGNoYW5nZSQ6IEJlaGF2aW9yU3ViamVjdDxJVG9rZW5Nb2RlbD4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFxyXG4gICAgSVRva2VuTW9kZWxcclxuICA+KG51bGwpO1xyXG4gIHByaXZhdGUgZGF0YTogSVRva2VuTW9kZWw7XHJcbiAgcHJpdmF0ZSBfcmVkaXJlY3Q6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG9wdGlvbnM6IERlbG9uQXV0aENvbmZpZyxcclxuICAgIEBJbmplY3QoREFfU1RPUkVfVE9LRU4pIHByaXZhdGUgc3RvcmU6IElTdG9yZSxcclxuICApIHt9XHJcblxyXG4gIGdldCBsb2dpbl91cmwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMubG9naW5fdXJsO1xyXG4gIH1cclxuXHJcbiAgc2V0IHJlZGlyZWN0KHVybDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9yZWRpcmVjdCA9IHVybDtcclxuICB9XHJcblxyXG4gIGdldCByZWRpcmVjdCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9yZWRpcmVjdCB8fCAnLyc7XHJcbiAgfVxyXG5cclxuICBzZXQoZGF0YTogSVRva2VuTW9kZWwpOiBib29sZWFuIHtcclxuICAgIHRoaXMuY2hhbmdlJC5uZXh0KGRhdGEpO1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2V0KHRoaXMub3B0aW9ucy5zdG9yZV9rZXksIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0KHR5cGU/OiBhbnkpO1xyXG4gIGdldDxUIGV4dGVuZHMgSVRva2VuTW9kZWw+KHR5cGU/OiB7IG5ldyAoKTogVCB9KTogVCB7XHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5zdG9yZS5nZXQodGhpcy5vcHRpb25zLnN0b3JlX2tleSk7XHJcbiAgICByZXR1cm4gdHlwZSA/IChPYmplY3QuYXNzaWduKG5ldyB0eXBlKCksIGRhdGEpIGFzIFQpIDogKGRhdGEgYXMgVCk7XHJcbiAgfVxyXG5cclxuICBjbGVhcigpIHtcclxuICAgIHRoaXMuY2hhbmdlJC5uZXh0KG51bGwpO1xyXG4gICAgdGhpcy5zdG9yZS5yZW1vdmUodGhpcy5vcHRpb25zLnN0b3JlX2tleSk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxJVG9rZW5Nb2RlbD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlJC5waXBlKHNoYXJlKCkpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gdXJsQmFzZTY0RGVjb2RlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuICBsZXQgb3V0cHV0ID0gc3RyLnJlcGxhY2UoLy0vZywgJysnKS5yZXBsYWNlKC9fL2csICcvJyk7XHJcbiAgc3dpdGNoIChvdXRwdXQubGVuZ3RoICUgNCkge1xyXG4gICAgY2FzZSAwOiB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSAyOiB7XHJcbiAgICAgIG91dHB1dCArPSAnPT0nO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgMzoge1xyXG4gICAgICBvdXRwdXQgKz0gJz0nO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgIGAnYXRvYicgZmFpbGVkOiBUaGUgc3RyaW5nIHRvIGJlIGRlY29kZWQgaXMgbm90IGNvcnJlY3RseSBlbmNvZGVkLmAsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBiNjREZWNvZGVVbmljb2RlKG91dHB1dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGI2NGRlY29kZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgY29uc3QgY2hhcnMgPVxyXG4gICAgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JztcclxuICBsZXQgb3V0cHV0OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgc3RyID0gU3RyaW5nKHN0cikucmVwbGFjZSgvPSskLywgJycpO1xyXG5cclxuICBmb3IgKFxyXG4gICAgLy8gaW5pdGlhbGl6ZSByZXN1bHQgYW5kIGNvdW50ZXJzXHJcbiAgICBsZXQgYmM6IG51bWJlciA9IDAsIGJzOiBhbnksIGJ1ZmZlcjogYW55LCBpZHg6IG51bWJlciA9IDA7XHJcbiAgICAvLyBnZXQgbmV4dCBjaGFyYWN0ZXJcclxuICAgIChidWZmZXIgPSBzdHIuY2hhckF0KGlkeCsrKSk7XHJcbiAgICAvLyBjaGFyYWN0ZXIgZm91bmQgaW4gdGFibGU/IGluaXRpYWxpemUgYml0IHN0b3JhZ2UgYW5kIGFkZCBpdHMgYXNjaWkgdmFsdWU7XHJcbiAgICB+YnVmZmVyICYmXHJcbiAgICAoKGJzID0gYmMgJSA0ID8gYnMgKiA2NCArIGJ1ZmZlciA6IGJ1ZmZlciksXHJcbiAgICAvLyBhbmQgaWYgbm90IGZpcnN0IG9mIGVhY2ggNCBjaGFyYWN0ZXJzLFxyXG4gICAgLy8gY29udmVydCB0aGUgZmlyc3QgOCBiaXRzIHRvIG9uZSBhc2NpaSBjaGFyYWN0ZXJcclxuICAgIGJjKysgJSA0KVxyXG4gICAgICA/IChvdXRwdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgyNTUgJiAoYnMgPj4gKCgtMiAqIGJjKSAmIDYpKSkpXHJcbiAgICAgIDogMFxyXG4gICkge1xyXG4gICAgLy8gdHJ5IHRvIGZpbmQgY2hhcmFjdGVyIGluIHRhYmxlICgwLTYzLCBub3QgZm91bmQgPT4gLTEpXHJcbiAgICBidWZmZXIgPSBjaGFycy5pbmRleE9mKGJ1ZmZlcik7XHJcbiAgfVxyXG4gIHJldHVybiBvdXRwdXQ7XHJcbn1cclxuXHJcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL2RvY3MvV2ViL0FQSS9XaW5kb3dCYXNlNjQvQmFzZTY0X2VuY29kaW5nX2FuZF9kZWNvZGluZyNUaGVfVW5pY29kZV9Qcm9ibGVtXHJcbmZ1bmN0aW9uIGI2NERlY29kZVVuaWNvZGUoc3RyOiBhbnkpIHtcclxuICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KFxyXG4gICAgQXJyYXkucHJvdG90eXBlLm1hcFxyXG4gICAgICAuY2FsbChiNjRkZWNvZGUoc3RyKSwgKGM6IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAnJScgKyAoJzAwJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKTtcclxuICAgICAgfSlcclxuICAgICAgLmpvaW4oJycpLFxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgSVRva2VuTW9kZWwgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyB1cmxCYXNlNjREZWNvZGUgfSBmcm9tICcuL2p3dC5oZWxwZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIEpXVFRva2VuTW9kZWwgaW1wbGVtZW50cyBJVG9rZW5Nb2RlbCB7XHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG5cclxuICB0b2tlbjogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiDDqMKOwrfDpcKPwpbDqMK9wr3DqMKNwrfDpMK/wqHDpsKBwq9cclxuICAgKi9cclxuICBnZXQgcGF5bG9hZCgpOiBhbnkge1xyXG4gICAgY29uc3QgcGFydHMgPSAodGhpcy50b2tlbiB8fCAnJykuc3BsaXQoJy4nKTtcclxuICAgIGlmIChwYXJ0cy5sZW5ndGggIT09IDMpIHRocm93IG5ldyBFcnJvcignSldUIG11c3QgaGF2ZSAzIHBhcnRzJyk7XHJcblxyXG4gICAgY29uc3QgZGVjb2RlZCA9IHVybEJhc2U2NERlY29kZShwYXJ0c1sxXSk7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShkZWNvZGVkKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOmwqPCgMOmwp/CpVRva2Vuw6bCmMKvw6XCkMKmw6jCv8KHw6bCnMKfw6/CvMKMYHBheWxvYWRgIMOlwr/ChcOpwqHCu8OlwozChcOlwpDCqyBgZXhwYCDDpsKXwrbDpsKcwonDpsKVwohcclxuICAgKlxyXG4gICAqIEBwYXJhbSBvZmZzZXRTZWNvbmRzIMOlwoHCj8OnwqfCu8OpwofCj1xyXG4gICAqL1xyXG4gIGlzRXhwaXJlZChvZmZzZXRTZWNvbmRzOiBudW1iZXIgPSAwKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBkZWNvZGVkID0gdGhpcy5wYXlsb2FkO1xyXG4gICAgaWYgKCFkZWNvZGVkLmhhc093blByb3BlcnR5KCdleHAnKSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKDApO1xyXG4gICAgZGF0ZS5zZXRVVENTZWNvbmRzKGRlY29kZWQuZXhwKTtcclxuXHJcbiAgICByZXR1cm4gIShkYXRlLnZhbHVlT2YoKSA+IG5ldyBEYXRlKCkudmFsdWVPZigpICsgb2Zmc2V0U2Vjb25kcyAqIDEwMDApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgRGVsb25BdXRoQ29uZmlnIH0gZnJvbSAnLi4vLi4vYXV0aC5jb25maWcnO1xyXG5pbXBvcnQgeyBCYXNlSW50ZXJjZXB0b3IgfSBmcm9tICcuLi9iYXNlLmludGVyY2VwdG9yJztcclxuaW1wb3J0IHsgREFfU0VSVklDRV9UT0tFTiB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IEpXVFRva2VuTW9kZWwgfSBmcm9tICcuL2p3dC5tb2RlbCc7XHJcbmltcG9ydCB7IENoZWNrSnd0IH0gZnJvbSAnLi4vaGVscGVyJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEpXVEludGVyY2VwdG9yIGV4dGVuZHMgQmFzZUludGVyY2VwdG9yIHtcclxuICBpc0F1dGgob3B0aW9uczogRGVsb25BdXRoQ29uZmlnKTogYm9vbGVhbiB7XHJcbiAgICB0aGlzLm1vZGVsID0gdGhpcy5pbmplY3RvclxyXG4gICAgICAuZ2V0KERBX1NFUlZJQ0VfVE9LRU4pXHJcbiAgICAgIC5nZXQ8SldUVG9rZW5Nb2RlbD4oSldUVG9rZW5Nb2RlbCk7XHJcbiAgICByZXR1cm4gQ2hlY2tKd3QodGhpcy5tb2RlbCBhcyBKV1RUb2tlbk1vZGVsLCBvcHRpb25zLnRva2VuX2V4cF9vZmZzZXQpO1xyXG4gIH1cclxuXHJcbiAgc2V0UmVxKHJlcTogSHR0cFJlcXVlc3Q8YW55Piwgb3B0aW9uczogRGVsb25BdXRoQ29uZmlnKTogSHR0cFJlcXVlc3Q8YW55PiB7XHJcbiAgICByZXR1cm4gcmVxLmNsb25lKHtcclxuICAgICAgc2V0SGVhZGVyczoge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0aGlzLm1vZGVsLnRva2VufWAsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgQ2FuQWN0aXZhdGVDaGlsZCwgQ2FuTG9hZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IERBX1NFUlZJQ0VfVE9LRU4sIElUb2tlblNlcnZpY2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBKV1RUb2tlbk1vZGVsIH0gZnJvbSAnLi9qd3QubW9kZWwnO1xyXG5pbXBvcnQgeyBEZWxvbkF1dGhDb25maWcgfSBmcm9tICcuLi8uLi9hdXRoLmNvbmZpZyc7XHJcbmltcG9ydCB7IENoZWNrSnd0LCBUb0xvZ2luIH0gZnJvbSAnLi4vaGVscGVyJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEpXVEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUsIENhbkFjdGl2YXRlQ2hpbGQsIENhbkxvYWQge1xyXG4gIHByaXZhdGUgY29nOiBEZWxvbkF1dGhDb25maWc7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KERBX1NFUlZJQ0VfVE9LRU4pIHByaXZhdGUgc3J2OiBJVG9rZW5TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICBjb2c6IERlbG9uQXV0aENvbmZpZyxcclxuICApIHtcclxuICAgIHRoaXMuY29nID0gT2JqZWN0LmFzc2lnbihuZXcgRGVsb25BdXRoQ29uZmlnKCksIGNvZyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHByb2Nlc3MoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCByZXMgPSBDaGVja0p3dChcclxuICAgICAgdGhpcy5zcnYuZ2V0PEpXVFRva2VuTW9kZWw+KEpXVFRva2VuTW9kZWwpLFxyXG4gICAgICB0aGlzLmNvZy50b2tlbl9leHBfb2Zmc2V0LFxyXG4gICAgKTtcclxuICAgIGlmICghcmVzKSB7XHJcbiAgICAgIFRvTG9naW4odGhpcy5jb2csIHRoaXMuaW5qZWN0b3IpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIC8vIGxhenkgbG9hZGluZ1xyXG4gIGNhbkxvYWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKCk7XHJcbiAgfVxyXG4gIC8vIGFsbCBjaGlsZHJlbiByb3V0ZVxyXG4gIGNhbkFjdGl2YXRlQ2hpbGQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKCk7XHJcbiAgfVxyXG4gIC8vIHJvdXRlXHJcbiAgY2FuQWN0aXZhdGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElUb2tlbk1vZGVsIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTaW1wbGVUb2tlbk1vZGVsIGltcGxlbWVudHMgSVRva2VuTW9kZWwge1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxuXHJcbiAgdG9rZW46IHN0cmluZztcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgRGVsb25BdXRoQ29uZmlnIH0gZnJvbSAnLi4vLi4vYXV0aC5jb25maWcnO1xyXG5pbXBvcnQgeyBTaW1wbGVUb2tlbk1vZGVsIH0gZnJvbSAnLi9zaW1wbGUubW9kZWwnO1xyXG5pbXBvcnQgeyBCYXNlSW50ZXJjZXB0b3IgfSBmcm9tICcuLi9iYXNlLmludGVyY2VwdG9yJztcclxuaW1wb3J0IHsgREFfU0VSVklDRV9UT0tFTiB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IENoZWNrU2ltcGxlIH0gZnJvbSAnLi4vaGVscGVyJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNpbXBsZUludGVyY2VwdG9yIGV4dGVuZHMgQmFzZUludGVyY2VwdG9yIHtcclxuICBpc0F1dGgob3B0aW9uczogRGVsb25BdXRoQ29uZmlnKTogYm9vbGVhbiB7XHJcbiAgICB0aGlzLm1vZGVsID0gdGhpcy5pbmplY3Rvci5nZXQoREFfU0VSVklDRV9UT0tFTikuZ2V0KCkgYXMgU2ltcGxlVG9rZW5Nb2RlbDtcclxuICAgIHJldHVybiBDaGVja1NpbXBsZSh0aGlzLm1vZGVsIGFzIFNpbXBsZVRva2VuTW9kZWwpO1xyXG4gIH1cclxuXHJcbiAgc2V0UmVxKHJlcTogSHR0cFJlcXVlc3Q8YW55Piwgb3B0aW9uczogRGVsb25BdXRoQ29uZmlnKTogSHR0cFJlcXVlc3Q8YW55PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IG9wdGlvbnMudG9rZW5fc2VuZF90ZW1wbGF0ZS5yZXBsYWNlKFxyXG4gICAgICAvXFwkXFx7KFtcXHddKylcXH0vZyxcclxuICAgICAgKF86IHN0cmluZywgZykgPT4gdGhpcy5tb2RlbFtnXSxcclxuICAgICk7XHJcbiAgICBzd2l0Y2ggKG9wdGlvbnMudG9rZW5fc2VuZF9wbGFjZSkge1xyXG4gICAgICBjYXNlICdoZWFkZXInOlxyXG4gICAgICAgIGNvbnN0IG9iaiA9IHt9O1xyXG4gICAgICAgIG9ialtvcHRpb25zLnRva2VuX3NlbmRfa2V5XSA9IHRva2VuO1xyXG4gICAgICAgIHJlcSA9IHJlcS5jbG9uZSh7XHJcbiAgICAgICAgICBzZXRIZWFkZXJzOiBvYmosXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2JvZHknOlxyXG4gICAgICAgIGNvbnN0IGJvZHkgPSByZXEuYm9keSB8fCB7fTtcclxuICAgICAgICBib2R5W29wdGlvbnMudG9rZW5fc2VuZF9rZXldID0gdG9rZW47XHJcbiAgICAgICAgcmVxID0gcmVxLmNsb25lKHtcclxuICAgICAgICAgIGJvZHk6IGJvZHksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3VybCc6XHJcbiAgICAgICAgcmVxID0gcmVxLmNsb25lKHtcclxuICAgICAgICAgIHBhcmFtczogcmVxLnBhcmFtcy5hcHBlbmQob3B0aW9ucy50b2tlbl9zZW5kX2tleSwgdG9rZW4pLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgQ2FuQWN0aXZhdGVDaGlsZCwgQ2FuTG9hZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IERBX1NFUlZJQ0VfVE9LRU4sIElUb2tlblNlcnZpY2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBDaGVja1NpbXBsZSwgVG9Mb2dpbiB9IGZyb20gJy4uL2hlbHBlcic7XHJcbmltcG9ydCB7IERlbG9uQXV0aENvbmZpZyB9IGZyb20gJy4uLy4uL2F1dGguY29uZmlnJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNpbXBsZUd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUsIENhbkFjdGl2YXRlQ2hpbGQsIENhbkxvYWQge1xyXG4gIHByaXZhdGUgY29nOiBEZWxvbkF1dGhDb25maWc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdChEQV9TRVJWSUNFX1RPS0VOKSBwcml2YXRlIHNydjogSVRva2VuU2VydmljZSxcclxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgY29nOiBEZWxvbkF1dGhDb25maWcsXHJcbiAgKSB7XHJcbiAgICB0aGlzLmNvZyA9IE9iamVjdC5hc3NpZ24obmV3IERlbG9uQXV0aENvbmZpZygpLCBjb2cpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcm9jZXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgcmVzID0gQ2hlY2tTaW1wbGUodGhpcy5zcnYuZ2V0KCkpO1xyXG4gICAgaWYgKCFyZXMpIHtcclxuICAgICAgVG9Mb2dpbih0aGlzLmNvZywgdGhpcy5pbmplY3Rvcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH1cclxuXHJcbiAgLy8gbGF6eSBsb2FkaW5nXHJcbiAgY2FuTG9hZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnByb2Nlc3MoKTtcclxuICB9XHJcbiAgLy8gYWxsIGNoaWxkcmVuIHJvdXRlXHJcbiAgY2FuQWN0aXZhdGVDaGlsZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnByb2Nlc3MoKTtcclxuICB9XHJcbiAgLy8gcm91dGVcclxuICBjYW5BY3RpdmF0ZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnByb2Nlc3MoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IERlbG9uQXV0aENvbmZpZyB9IGZyb20gJy4vYXV0aC5jb25maWcnO1xyXG5pbXBvcnQgeyBEQV9TVE9SRV9UT0tFTiB9IGZyb20gJy4vc3RvcmUvaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgREFfU0VSVklDRV9UT0tFTiB9IGZyb20gJy4vdG9rZW4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU3RvcmUgfSBmcm9tICcuL3N0b3JlL2xvY2FsLXN0b3JhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFRva2VuU2VydmljZSB9IGZyb20gJy4vdG9rZW4vdG9rZW4uc2VydmljZSc7XHJcbmltcG9ydCB7IFNpbXBsZUd1YXJkIH0gZnJvbSAnLi90b2tlbi9zaW1wbGUvc2ltcGxlLmd1YXJkJztcclxuaW1wb3J0IHsgSldUR3VhcmQgfSBmcm9tICcuL3Rva2VuL2p3dC9qd3QuZ3VhcmQnO1xyXG5pbXBvcnQgeyBXSU5ET1cgfSBmcm9tICcuL3dpbl90b2tlbnMnO1xyXG5cclxuQE5nTW9kdWxlKHt9KVxyXG5leHBvcnQgY2xhc3MgRGVsb25BdXRoTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBEZWxvbkF1dGhNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHsgcHJvdmlkZTogV0lORE9XLCB1c2VWYWx1ZTogd2luZG93IH0sXHJcbiAgICAgICAgRGVsb25BdXRoQ29uZmlnLFxyXG4gICAgICAgIFNpbXBsZUd1YXJkLFxyXG4gICAgICAgIEpXVEd1YXJkLFxyXG4gICAgICAgIHsgcHJvdmlkZTogREFfU1RPUkVfVE9LRU4sIHVzZUNsYXNzOiBMb2NhbFN0b3JhZ2VTdG9yZSB9LFxyXG4gICAgICAgIHsgcHJvdmlkZTogREFfU0VSVklDRV9UT0tFTiwgdXNlQ2xhc3M6IFRva2VuU2VydmljZSB9LFxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkluamVjdGlvblRva2VuIiwicm91dGVyIiwiT2JzZXJ2YWJsZSIsIkluamVjdGFibGUiLCJJbmplY3QiLCJET0NVTUVOVCIsIlJvdXRlciIsIl9IdHRwQ2xpZW50IiwiSHR0cEVycm9yUmVzcG9uc2UiLCJJbmplY3RvciIsIk9wdGlvbmFsIiwiQmVoYXZpb3JTdWJqZWN0Iiwic2hhcmUiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFHQSxRQUFhLGdCQUFnQixHQUFHLElBQUlBLG1C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