import { __assign, __values, __extends } from 'tslib';
import { DOCUMENT } from '@angular/common';
import { InjectionToken, inject, Inject, Injectable, Injector, Optional, ɵɵdefineInjectable, ɵɵinject, INJECTOR, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AlainConfigService } from '@delon/util';
import { share } from 'rxjs/operators';
import { HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * Generated from: src/auth.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var AUTH_DEFAULT_CONFIG = {
    store_key: "_token",
    token_invalid_redirect: true,
    token_exp_offset: 10,
    token_send_key: "token",
    // tslint:disable-next-line: no-invalid-template-strings
    token_send_template: '${token}',
    token_send_place: 'header',
    login_url: '/login',
    ignores: [/\/login/, /assets\//, /passport\//],
    allow_anonymous_key: "_allow_anonymous",
    executeOtherInterceptors: true,
};
/**
 * @param {?} srv
 * @return {?}
 */
function mergeConfig(srv) {
    return srv.merge('auth', AUTH_DEFAULT_CONFIG);
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
/**
 * `localStorage` storage, **not lost after closing the browser**.
 */
var  /**
 * `localStorage` storage, **not lost after closing the browser**.
 */
LocalStorageStore = /** @class */ (function () {
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
var DA_STORE_TOKEN = new InjectionToken('AUTH_STORE_TOKEN', {
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
    return new TokenService(inject(AlainConfigService), inject(DA_STORE_TOKEN));
}
/**
 * 维护Token信息服务，[在线文档](https://ng-alain.com/auth)
 */
var TokenService = /** @class */ (function () {
    function TokenService(configSrv, store) {
        this.store = store;
        this.change$ = new BehaviorSubject(null);
        this._referrer = {};
        this._options = mergeConfig(configSrv);
    }
    Object.defineProperty(TokenService.prototype, "login_url", {
        /**
         * 授权失败后跳转路由路径（支持外部链接地址），通过设置[全局配置](https://ng-alain.com/docs/global-config)来改变
         */
        get: /**
         * 授权失败后跳转路由路径（支持外部链接地址），通过设置[全局配置](https://ng-alain.com/docs/global-config)来改变
         * @return {?}
         */
        function () {
            return this._options.login_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TokenService.prototype, "referrer", {
        /**
         * 当前请求页面的来源页面的地址
         */
        get: /**
         * 当前请求页面的来源页面的地址
         * @return {?}
         */
        function () {
            return this._referrer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TokenService.prototype, "options", {
        get: /**
         * @return {?}
         */
        function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 设置 Token 信息
     */
    /**
     * 设置 Token 信息
     * @param {?} data
     * @return {?}
     */
    TokenService.prototype.set = /**
     * 设置 Token 信息
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.change$.next(data);
        return this.store.set((/** @type {?} */ (this._options.store_key)), data);
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
        var data = this.store.get((/** @type {?} */ (this._options.store_key)));
        return type ? ((/** @type {?} */ (Object.assign(new type(), data)))) : ((/** @type {?} */ (data)));
    };
    /**
     * 清除 Token 信息，例如：
     * ```
     * // 清除所有 Token 信息
     * tokenService.clear();
     * // 只清除 token 字段
     * tokenService.clear({ onlyToken: true });
     * ```
     */
    /**
     * 清除 Token 信息，例如：
     * ```
     * // 清除所有 Token 信息
     * tokenService.clear();
     * // 只清除 token 字段
     * tokenService.clear({ onlyToken: true });
     * ```
     * @param {?=} options
     * @return {?}
     */
    TokenService.prototype.clear = /**
     * 清除 Token 信息，例如：
     * ```
     * // 清除所有 Token 信息
     * tokenService.clear();
     * // 只清除 token 字段
     * tokenService.clear({ onlyToken: true });
     * ```
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = { onlyToken: false }; }
        /** @type {?} */
        var data = null;
        if (options.onlyToken === true) {
            data = (/** @type {?} */ (this.get()));
            data.token = "";
            this.set(data);
        }
        else {
            this.store.remove((/** @type {?} */ (this._options.store_key)));
        }
        this.change$.next(data);
    };
    /**
     * 订阅 Token 对象变更通知
     */
    /**
     * 订阅 Token 对象变更通知
     * @return {?}
     */
    TokenService.prototype.change = /**
     * 订阅 Token 对象变更通知
     * @return {?}
     */
    function () {
        return this.change$.pipe(share());
    };
    /** @nocollapse */
    TokenService.ctorParameters = function () { return [
        { type: AlainConfigService },
        { type: undefined, decorators: [{ type: Inject, args: [DA_STORE_TOKEN,] }] }
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
    TokenService.prototype._options;
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
var DA_SERVICE_TOKEN = new InjectionToken('DA_SERVICE_TOKEN', {
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
    /** @type {?} */
    ITokenService.prototype.options;
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
     * Clean authorization data
     * @param {?=} options
     * @return {?}
     */
    ITokenService.prototype.clear = function (options) { };
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
        return new Observable((/**
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
        { type: Injectable }
    ];
    /** @nocollapse */
    SocialService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DA_SERVICE_TOKEN,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Router }
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
/**
 * 内存存储，关掉浏览器标签后**丢失**。
 */
var  /**
 * 内存存储，关掉浏览器标签后**丢失**。
 */
MemoryStore = /** @class */ (function () {
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
/**
 * `sessionStorage` storage, **lost after closing the browser**.
 */
var  /**
 * `sessionStorage` storage, **lost after closing the browser**.
 */
SessionStorageStore = /** @class */ (function () {
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
 * Generated from: src/store/cookie-storage.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * `cookie` storage, muse be install [js-cookie](https://github.com/js-cookie/js-cookie) libary and import `"node_modules/js-cookie/src/js.cookie.js"` in `angular.json`
 */
var  /**
 * `cookie` storage, muse be install [js-cookie](https://github.com/js-cookie/js-cookie) libary and import `"node_modules/js-cookie/src/js.cookie.js"` in `angular.json`
 */
CookieStorageStore = /** @class */ (function () {
    function CookieStorageStore() {
    }
    /**
     * @param {?} key
     * @return {?}
     */
    CookieStorageStore.prototype.get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return JSON.parse(Cookies.get(key) || '{}') || {};
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    CookieStorageStore.prototype.set = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        Cookies.set(key, JSON.stringify(value));
        return true;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    CookieStorageStore.prototype.remove = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        Cookies.remove(key);
    };
    return CookieStorageStore;
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
    var router = injector.get(Router);
    (/** @type {?} */ (((/** @type {?} */ (injector.get(DA_SERVICE_TOKEN)))).referrer)).url = url || router.url;
    if (options.token_invalid_redirect === true) {
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (/^https?:\/\//g.test((/** @type {?} */ (options.login_url)))) {
                injector.get(DOCUMENT).location.href = (/** @type {?} */ (options.login_url));
            }
            else {
                router.navigate([options.login_url]);
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
        var options = mergeConfig(this.injector.get(AlainConfigService));
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
            var err$_1 = new Observable((/**
             * @param {?} observer
             * @return {?}
             */
            function (observer) {
                /** @type {?} */
                var res = new HttpErrorResponse({
                    url: req.url,
                    headers: req.headers,
                    status: 401,
                    statusText: "\u6765\u81EA @delon/auth \u7684\u62E6\u622A\uFF0C\u6240\u8BF7\u6C42URL\u672A\u6388\u6743\uFF0C\u82E5\u662F\u767B\u5F55API\u53EF\u52A0\u5165 [url?_allow_anonymous=true] \u6765\u8868\u793A\u5FFD\u7565\u6821\u9A8C\uFF0C\u66F4\u591A\u65B9\u6CD5\u8BF7\u53C2\u8003\uFF1A https://ng-alain.com/auth/getting-started#AlainAuthConfig\nThe interception from @delon/auth, the requested URL is not authorized. If the login API can add [url?_allow_anonymous=true] to ignore the check, please refer to: https://ng-alain.com/auth/getting-started#AlainAuthConfig",
                });
                observer.error(res);
            }));
            if (options.executeOtherInterceptors) {
                /** @type {?} */
                var interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
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
    BaseInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    BaseInterceptor.ctorParameters = function () { return [
        { type: Injector, decorators: [{ type: Optional }] }
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
    /* Skipping unhandled member: [key: string]: NzSafeAny;*/
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/token/jwt/jwt.interceptor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * JWT 拦截器
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
        { type: Injectable }
    ];
    return JWTInterceptor;
}(BaseInterceptor));

/**
 * @fileoverview added by tsickle
 * Generated from: src/token/jwt/jwt.guard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * JWT 路由守卫, [ACL Document](https://ng-alain.com/auth/guard).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivate: [ JWTGuard ]
 * }
 * ```
 */
var JWTGuard = /** @class */ (function () {
    function JWTGuard(srv, injector) {
        this.srv = srv;
        this.injector = injector;
    }
    Object.defineProperty(JWTGuard.prototype, "cog", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.srv.options;
        },
        enumerable: true,
        configurable: true
    });
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
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    JWTGuard.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DA_SERVICE_TOKEN,] }] },
        { type: Injector }
    ]; };
    /** @nocollapse */ JWTGuard.ɵprov = ɵɵdefineInjectable({ factory: function JWTGuard_Factory() { return new JWTGuard(ɵɵinject(DA_SERVICE_TOKEN), ɵɵinject(INJECTOR)); }, token: JWTGuard, providedIn: "root" });
    return JWTGuard;
}());
if (false) {
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
    /* Skipping unhandled member: [key: string]: NzSafeAny;*/
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/token/simple/simple.interceptor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Simple 拦截器
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
        { type: Injectable }
    ];
    return SimpleInterceptor;
}(BaseInterceptor));

/**
 * @fileoverview added by tsickle
 * Generated from: src/token/simple/simple.guard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Simple 路由守卫, [ACL Document](https://ng-alain.com/auth/guard).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivate: [ SimpleGuard ]
 * }
 * ```
 */
var SimpleGuard = /** @class */ (function () {
    function SimpleGuard(srv, injector) {
        this.srv = srv;
        this.injector = injector;
    }
    Object.defineProperty(SimpleGuard.prototype, "cog", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.srv.options;
        },
        enumerable: true,
        configurable: true
    });
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
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    SimpleGuard.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DA_SERVICE_TOKEN,] }] },
        { type: Injector }
    ]; };
    /** @nocollapse */ SimpleGuard.ɵprov = ɵɵdefineInjectable({ factory: function SimpleGuard_Factory() { return new SimpleGuard(ɵɵinject(DA_SERVICE_TOKEN), ɵɵinject(INJECTOR)); }, token: SimpleGuard, providedIn: "root" });
    return SimpleGuard;
}());
if (false) {
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
        { type: NgModule, args: [{},] }
    ];
    return DelonAuthModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: auth.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AUTH_DEFAULT_CONFIG, BaseInterceptor, CookieStorageStore, DA_SERVICE_TOKEN, DA_SERVICE_TOKEN_FACTORY, DA_STORE_TOKEN, DA_STORE_TOKEN_LOCAL_FACTORY, DelonAuthModule, JWTGuard, JWTInterceptor, JWTTokenModel, LocalStorageStore, MemoryStore, SessionStorageStore, SimpleGuard, SimpleInterceptor, SimpleTokenModel, SocialService, TokenService, mergeConfig, urlBase64Decode };
//# sourceMappingURL=auth.js.map
