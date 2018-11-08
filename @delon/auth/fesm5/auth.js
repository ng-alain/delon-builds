import { InjectionToken, Injectable, Inject, Injector, Optional, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Observable, BehaviorSubject } from 'rxjs';
import { __values, __extends } from 'tslib';
import { HttpErrorResponse } from '@angular/common/http';
import { _HttpClient } from '@delon/theme';
import { share } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var DA_SERVICE_TOKEN = new InjectionToken('DELON_AUTH_TOKEN_SERVICE_TOKEN');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        return Observable.create(function (observer) {
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
        // parse
        /** @type {?} */
        var data = { token: "" };
        if (typeof rawData === 'string') {
            /** @type {?} */
            var rightUrl = rawData.split('?')[1].split('#')[0];
            data = (/** @type {?} */ (this.router.parseUrl('./?' + rightUrl).queryParams));
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var DA_STORE_TOKEN = new InjectionToken('AUTH_STORE_TOKEN');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        return this.cache[key] || (/** @type {?} */ ({}));
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var WINDOW = new InjectionToken('Window');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                injector.get(Router).navigate([options.login_url]);
            }
        });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
            (req.params.has(options.allow_anonymous_key) ||
                this.injector
                    .get(Router)
                    .parseUrl(req.urlWithParams)
                    .queryParamMap.has(options.allow_anonymous_key))) {
            return next.handle(req);
        }
        if (this.isAuth(options)) {
            req = this.setReq(req, options);
        }
        else {
            ToLogin(options, this.injector);
            // observer.error：会导倒后续拦截器无法触发，因此，需要处理 `_HttpClient` 状态问题
            /** @type {?} */
            var hc = this.injector.get(_HttpClient, null);
            if (hc)
                hc.end();
            return new Observable(function (observer) {
                /** @type {?} */
                var res = new HttpErrorResponse({
                    url: req.url,
                    status: 401,
                    statusText: "From Simple Intercept --> https://ng-alain.com/docs/auth",
                });
                observer.error(res);
            });
        }
        return next.handle(req);
    };
    /** @nocollapse */
    BaseInterceptor.ctorParameters = function () { return [
        { type: Injector, decorators: [{ type: Optional }] }
    ]; };
    return BaseInterceptor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TokenService = /** @class */ (function () {
    function TokenService(options, store) {
        this.options = options;
        this.store = store;
        this.change$ = new BehaviorSubject(null);
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
    Object.defineProperty(TokenService.prototype, "redirect", {
        get: /**
         * @return {?}
         */
        function () {
            return this._redirect || '/';
        },
        set: /**
         * @param {?} url
         * @return {?}
         */
        function (url) {
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
        this.store.remove(this.options.store_key);
    };
    /**
     * @return {?}
     */
    TokenService.prototype.change = /**
     * @return {?}
     */
    function () {
        return this.change$.pipe(share());
    };
    TokenService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TokenService.ctorParameters = function () { return [
        { type: DelonAuthConfig },
        { type: undefined, decorators: [{ type: Inject, args: [DA_STORE_TOKEN,] }] }
    ]; };
    return TokenService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
// https://developer.mozilla.org/en/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        return CheckJwt((/** @type {?} */ (this.model)), options.token_exp_offset);
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
        { type: Injectable }
    ];
    return JWTInterceptor;
}(BaseInterceptor));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
    // lazy loading
    /**
     * @return {?}
     */
    JWTGuard.prototype.canLoad = 
    // lazy loading
    /**
     * @return {?}
     */
    function () {
        return this.process();
    };
    // all children route
    // all children route
    /**
     * @return {?}
     */
    JWTGuard.prototype.canActivateChild = 
    // all children route
    /**
     * @return {?}
     */
    function () {
        return this.process();
    };
    // route
    // route
    /**
     * @return {?}
     */
    JWTGuard.prototype.canActivate = 
    // route
    /**
     * @return {?}
     */
    function () {
        return this.process();
    };
    JWTGuard.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    JWTGuard.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DA_SERVICE_TOKEN,] }] },
        { type: Injector },
        { type: DelonAuthConfig }
    ]; };
    return JWTGuard;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var SimpleTokenModel = /** @class */ (function () {
    function SimpleTokenModel() {
    }
    return SimpleTokenModel;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        { type: Injectable }
    ];
    return SimpleInterceptor;
}(BaseInterceptor));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
    // lazy loading
    /**
     * @return {?}
     */
    SimpleGuard.prototype.canLoad = 
    // lazy loading
    /**
     * @return {?}
     */
    function () {
        return this.process();
    };
    // all children route
    // all children route
    /**
     * @return {?}
     */
    SimpleGuard.prototype.canActivateChild = 
    // all children route
    /**
     * @return {?}
     */
    function () {
        return this.process();
    };
    // route
    // route
    /**
     * @return {?}
     */
    SimpleGuard.prototype.canActivate = 
    // route
    /**
     * @return {?}
     */
    function () {
        return this.process();
    };
    SimpleGuard.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SimpleGuard.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DA_SERVICE_TOKEN,] }] },
        { type: Injector },
        { type: DelonAuthConfig }
    ]; };
    return SimpleGuard;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        { type: NgModule, args: [{},] }
    ];
    return DelonAuthModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { SocialService, DA_STORE_TOKEN, LocalStorageStore, MemoryStore, SessionStorageStore, BaseInterceptor, DA_SERVICE_TOKEN, TokenService, urlBase64Decode, JWTTokenModel, JWTInterceptor, JWTGuard, SimpleTokenModel, SimpleInterceptor, SimpleGuard, DelonAuthConfig, DelonAuthModule, WINDOW as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3Rva2VuL2ludGVyZmFjZS50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3NvY2lhbC9zb2NpYWwuc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3N0b3JlL2ludGVyZmFjZS50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3N0b3JlL2xvY2FsLXN0b3JhZ2Uuc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3N0b3JlL21lbW9yeS5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vYXV0aC9zcmMvc3RvcmUvc2Vzc2lvbi1zdG9yYWdlLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi9hdXRoL3NyYy9hdXRoLmNvbmZpZy50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3dpbl90b2tlbnMudHMiLCJuZzovL0BkZWxvbi9hdXRoL3NyYy90b2tlbi9oZWxwZXIudHMiLCJuZzovL0BkZWxvbi9hdXRoL3NyYy90b2tlbi9iYXNlLmludGVyY2VwdG9yLnRzIiwibmc6Ly9AZGVsb24vYXV0aC9zcmMvdG9rZW4vdG9rZW4uc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3Rva2VuL2p3dC9qd3QuaGVscGVyLnRzIiwibmc6Ly9AZGVsb24vYXV0aC9zcmMvdG9rZW4vand0L2p3dC5tb2RlbC50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3Rva2VuL2p3dC9qd3QuaW50ZXJjZXB0b3IudHMiLCJuZzovL0BkZWxvbi9hdXRoL3NyYy90b2tlbi9qd3Qvand0Lmd1YXJkLnRzIiwibmc6Ly9AZGVsb24vYXV0aC9zcmMvdG9rZW4vc2ltcGxlL3NpbXBsZS5tb2RlbC50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3Rva2VuL3NpbXBsZS9zaW1wbGUuaW50ZXJjZXB0b3IudHMiLCJuZzovL0BkZWxvbi9hdXRoL3NyYy90b2tlbi9zaW1wbGUvc2ltcGxlLmd1YXJkLnRzIiwibmc6Ly9AZGVsb24vYXV0aC9zcmMvYXV0aC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNvbnN0IERBX1NFUlZJQ0VfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48SVRva2VuU2VydmljZT4oXG4gICdERUxPTl9BVVRIX1RPS0VOX1NFUlZJQ0VfVE9LRU4nLFxuKTtcblxuZXhwb3J0IGludGVyZmFjZSBJVG9rZW5Nb2RlbCB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcblxuICB0b2tlbjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUb2tlblNlcnZpY2Uge1xuICBzZXQoZGF0YTogSVRva2VuTW9kZWwpOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDDqMKOwrfDpcKPwpZUb2tlbsOvwrzCjMOlwr3CosOlwrzCj8OlwozChcOmwovCrMOvwrzCmlxuICAgKiAtIGBnZXQoKWAgw6jCjsK3w6XCj8KWIFNpbXBsZSBUb2tlblxuICAgKiAtIGBnZXQ8SldUVG9rZW5Nb2RlbD4oSldUVG9rZW5Nb2RlbClgIMOowo7Ct8Olwo/CliBKV1QgVG9rZW5cbiAgICovXG4gIGdldCh0eXBlPzogYW55KTogSVRva2VuTW9kZWw7XG5cbiAgLyoqXG4gICAqIMOowo7Ct8Olwo/CllRva2Vuw6/CvMKMw6XCvcKiw6XCvMKPw6XCjMKFw6bCi8Ksw6/CvMKaXG4gICAqIC0gYGdldCgpYCDDqMKOwrfDpcKPwpYgU2ltcGxlIFRva2VuXG4gICAqIC0gYGdldDxKV1RUb2tlbk1vZGVsPihKV1RUb2tlbk1vZGVsKWAgw6jCjsK3w6XCj8KWIEpXVCBUb2tlblxuICAgKi9cbiAgZ2V0PFQgZXh0ZW5kcyBJVG9rZW5Nb2RlbD4odHlwZT86IGFueSk6IFQ7XG5cbiAgY2xlYXIoKTogdm9pZDtcblxuICBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxJVG9rZW5Nb2RlbD47XG5cbiAgLyoqIMOowo7Ct8Olwo/ClsOnwpnCu8Olwr3ClcOlwpzCsMOlwp3CgCAqL1xuICByZWFkb25seSBsb2dpbl91cmw6IHN0cmluZztcblxuICAvKiogw6fCmcK7w6XCvcKVw6XCkMKOw6jCt8Kzw6jCvcKsw6XCnMKww6XCncKAw6/CvMKMw6bCnMKqw6bCjMKHw6XCrsKaw6bCl8K2w6jCv8KUw6XCm8KeIGAvYCAqL1xuICByZWRpcmVjdDogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBPYnNlcnZlciwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1xuICBJVG9rZW5Nb2RlbCxcbiAgSVRva2VuU2VydmljZSxcbiAgREFfU0VSVklDRV9UT0tFTixcbn0gZnJvbSAnLi4vdG9rZW4vaW50ZXJmYWNlJztcblxuY29uc3QgT1BFTlRZUEUgPSAnX2RlbG9uQXV0aFNvY2lhbFR5cGUnO1xuY29uc3QgSFJFRkNBTExCQUNLID0gJ19kZWxvbkF1dGhTb2NpYWxDYWxsYmFja0J5SHJlZic7XG5cbmV4cG9ydCB0eXBlIFNvY2lhbE9wZW5UeXBlID0gJ2hyZWYnIHwgJ3dpbmRvdyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTb2NpYWxTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfd2luOiBXaW5kb3c7XG4gIHByaXZhdGUgX3dpbiQ6IGFueTtcbiAgcHJpdmF0ZSBvYnNlcnZlcjogT2JzZXJ2ZXI8SVRva2VuTW9kZWw+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoREFfU0VSVklDRV9UT0tFTikgcHJpdmF0ZSB0b2tlblNlcnZpY2U6IElUb2tlblNlcnZpY2UsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICApIHt9XG5cbiAgLyoqXG4gICAqIMOkwr3Cv8OnwpTCqMOnwqrCl8Okwr3Ck8OmwonCk8OlwrzCgMOmwo7CiMOmwp3Cg8OpwqHCtcOvwrzCjMOowr/ClMOlwpvCnsOlwoDCvMOmwpjCryBgT2JzZXJ2YWJsZTxJVG9rZW5Nb2RlbD5gIMOnwpTCqMOkwrrCjsOowq7CosOpwpjChcOmwo7CiMOmwp3Cg8OlwpDCjsOowr/ClMOlwpvCnsOnwprChMOnwrvCk8Omwp7CnFxuICAgKiBAcGFyYW0gdXJsIMOowo7Ct8Olwo/ClsOmwo7CiMOmwp3Cg8OlwpzCsMOlwp3CgFxuICAgKiBAcGFyYW0gY2FsbGJhY2sgw6XCm8Kew6jCsMKDw6jCt8Kvw6fClMKxw6XCnMKww6XCncKAXG4gICAqIEBwYXJhbSBvcHRpb25zLndpbmRvd0ZlYXR1cmVzIMOnwq3CicOlwpDCjCBgd2luZG93Lm9wZW5gIMOnwprChCBgZmVhdHVyZXNgIMOlwo/CgsOmwpXCsMOlwoDCvFxuICAgKi9cbiAgbG9naW4oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgY2FsbGJhY2s/OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIHR5cGU/OiAnd2luZG93JztcbiAgICAgIHdpbmRvd0ZlYXR1cmVzPzogc3RyaW5nO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8SVRva2VuTW9kZWw+O1xuXG4gIC8qKlxuICAgKiDDqMK3wrPDqMK9wqzDqMKHwrPDpsKOwojDpsKdwoPDqcKhwrVcbiAgICogQHBhcmFtIHVybCDDqMKOwrfDpcKPwpbDpsKOwojDpsKdwoPDpcKcwrDDpcKdwoBcbiAgICogQHBhcmFtIGNhbGxiYWNrIMOlwpvCnsOowrDCg8OowrfCr8OnwpTCscOlwpzCsMOlwp3CgFxuICAgKi9cbiAgbG9naW4oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgY2FsbGJhY2s/OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIHR5cGU/OiAnaHJlZic7XG4gICAgfSxcbiAgKTogdm9pZDtcblxuICAvKipcbiAgICogw6jCt8Kzw6jCvcKsw6jCh8Kzw6fCmcK7w6XCvcKVw6nCocK1w6/CvMKMw6jCi8Klw6TCuMK6IGB0eXBlPXdpbmRvd2Agw6bCl8K2w6/CvMKMw6jCv8KUw6XCm8Kew6XCgMK8w6bCmMKvIGBPYnNlcnZhYmxlPElUb2tlbk1vZGVsPmBcbiAgICogQHBhcmFtIHVybCDDqMKOwrfDpcKPwpbDpsKOwojDpsKdwoPDpcKcwrDDpcKdwoBcbiAgICogQHBhcmFtIGNhbGxiYWNrIMOlwr3CkyBgdHlwZT1ocmVmYCDDpsKIwpDDpcKKwp/DpsKXwrbDp8KawoTDpcKbwp7DqMKwwoPDqMK3wq/Dp8KUwrHDpcKcwrDDpcKdwoBcbiAgICogQHBhcmFtIG9wdGlvbnMudHlwZSDDpsKJwpPDpcK8woDDpsKWwrnDpcK8wo/Dr8K8wozDqcK7wpjDqMKuwqQgYHdpbmRvd2BcbiAgICogQHBhcmFtIG9wdGlvbnMud2luZG93RmVhdHVyZXMgw6fCrcKJw6XCkMKMIGB3aW5kb3cub3BlbmAgw6fCmsKEIGBmZWF0dXJlc2Agw6XCj8KCw6bClcKww6XCgMK8XG4gICAqL1xuICBsb2dpbihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBjYWxsYmFjazogc3RyaW5nID0gJy8nLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIHR5cGU/OiBTb2NpYWxPcGVuVHlwZTtcbiAgICAgIHdpbmRvd0ZlYXR1cmVzPzogc3RyaW5nO1xuICAgIH0gPSB7fSxcbiAgKTogT2JzZXJ2YWJsZTxJVG9rZW5Nb2RlbD4gfCB2b2lkIHtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ3dpbmRvdycsXG4gICAgICAgIHdpbmRvd0ZlYXR1cmVzOlxuICAgICAgICAgICdsb2NhdGlvbj15ZXMsaGVpZ2h0PTU3MCx3aWR0aD01MjAsc2Nyb2xsYmFycz15ZXMsc3RhdHVzPXllcycsXG4gICAgICB9LFxuICAgICAgb3B0aW9ucyxcbiAgICApO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKE9QRU5UWVBFLCBvcHRpb25zLnR5cGUpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKEhSRUZDQUxMQkFDSywgY2FsbGJhY2spO1xuICAgIGlmIChvcHRpb25zLnR5cGUgPT09ICdocmVmJykge1xuICAgICAgdGhpcy5kb2MubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl93aW4gPSB3aW5kb3cub3Blbih1cmwsICdfYmxhbmsnLCBvcHRpb25zLndpbmRvd0ZlYXR1cmVzKTtcbiAgICB0aGlzLl93aW4kID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX3dpbiAmJiB0aGlzLl93aW4uY2xvc2VkKSB7XG4gICAgICAgIHRoaXMubmdPbkRlc3Ryb3koKTtcblxuICAgICAgICBsZXQgbW9kZWwgPSB0aGlzLnRva2VuU2VydmljZS5nZXQoKTtcbiAgICAgICAgaWYgKG1vZGVsICYmICFtb2RlbC50b2tlbikgbW9kZWwgPSBudWxsO1xuXG4gICAgICAgIC8vIMOowqfCpsOlwo/CkcOlwo/CmMOmwpvCtMOpwoDCmsOnwp/CpVxuICAgICAgICBpZiAobW9kZWwpIHtcbiAgICAgICAgICB0aGlzLnRva2VuU2VydmljZS5zZXQobW9kZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vYnNlcnZlci5uZXh0KG1vZGVsKTtcbiAgICAgICAgdGhpcy5vYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH0sIDEwMCk7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogT2JzZXJ2ZXI8SVRva2VuTW9kZWw+KSA9PiB7XG4gICAgICB0aGlzLm9ic2VydmVyID0gb2JzZXJ2ZXI7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogw6bCjsKIw6bCncKDw6bCiMKQw6XCisKfw6XCkMKOw6fCmsKEw6XCm8Kew6jCsMKDw6XCpMKEw6fCkMKGXG4gICAqXG4gICAqIEBwYXJhbSByYXdEYXRhIMOmwozCh8Olwq7CmsOlwpvCnsOowrDCg8Oowq7CpMOowq/CgcOkwr/CocOmwoHCr8OvwrzCjMOkwrjCusOnwqnCusOmwpfCtsOkwrvCjsOmwqDCucOmwo3CrsOlwr3Ck8OlwonCjVVSTMOowqfCo8Omwp7CkFxuICAgKi9cbiAgY2FsbGJhY2socmF3RGF0YT86IHN0cmluZyB8IElUb2tlbk1vZGVsKTogSVRva2VuTW9kZWwge1xuICAgIC8vIGZyb20gdXJpXG4gICAgaWYgKCFyYXdEYXRhICYmIHRoaXMucm91dGVyLnVybC5pbmRleE9mKCc/JykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHVybCBtdXNlIGNvbnRhaW4gYSA/YCk7XG4gICAgfVxuICAgIC8vIHBhcnNlXG4gICAgbGV0IGRhdGE6IElUb2tlbk1vZGVsID0geyB0b2tlbjogYGAgfTtcbiAgICBpZiAodHlwZW9mIHJhd0RhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCByaWdodFVybCA9IHJhd0RhdGEuc3BsaXQoJz8nKVsxXS5zcGxpdCgnIycpWzBdO1xuICAgICAgZGF0YSA9IDxhbnk+dGhpcy5yb3V0ZXIucGFyc2VVcmwoJy4vPycgKyByaWdodFVybCkucXVlcnlQYXJhbXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEgPSByYXdEYXRhO1xuICAgIH1cblxuICAgIGlmICghZGF0YSB8fCAhZGF0YS50b2tlbikgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkZSB0b2tlbiBkYXRhYCk7XG4gICAgdGhpcy50b2tlblNlcnZpY2Uuc2V0KGRhdGEpO1xuXG4gICAgY29uc3QgdXJsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oSFJFRkNBTExCQUNLKSB8fCAnLyc7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oSFJFRkNBTExCQUNLKTtcbiAgICBjb25zdCB0eXBlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oT1BFTlRZUEUpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKE9QRU5UWVBFKTtcbiAgICBpZiAodHlwZSA9PT0gJ3dpbmRvdycpIHtcbiAgICAgIHdpbmRvdy5jbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHVybCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuX3dpbiQpO1xuICAgIHRoaXMuX3dpbiQgPSBudWxsO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSVRva2VuTW9kZWwgfSBmcm9tICcuLi90b2tlbi9pbnRlcmZhY2UnO1xuXG5leHBvcnQgY29uc3QgREFfU1RPUkVfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48SVN0b3JlPignQVVUSF9TVE9SRV9UT0tFTicpO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTdG9yZSB7XG4gIGdldChrZXk6IHN0cmluZyk6IElUb2tlbk1vZGVsO1xuXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IElUb2tlbk1vZGVsKTogYm9vbGVhbjtcblxuICByZW1vdmUoa2V5OiBzdHJpbmcpO1xufVxuIiwiaW1wb3J0IHsgSVN0b3JlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSVRva2VuTW9kZWwgfSBmcm9tICcuLi90b2tlbi9pbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgTG9jYWxTdG9yYWdlU3RvcmUgaW1wbGVtZW50cyBJU3RvcmUge1xuICBnZXQoa2V5OiBzdHJpbmcpOiBJVG9rZW5Nb2RlbCB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSB8fCAne30nKSB8fCB7fTtcbiAgfVxuXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IElUb2tlbk1vZGVsKTogYm9vbGVhbiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmVtb3ZlKGtleTogc3RyaW5nKSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSVN0b3JlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSVRva2VuTW9kZWwgfSBmcm9tICcuLi90b2tlbi9pbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgTWVtb3J5U3RvcmUgaW1wbGVtZW50cyBJU3RvcmUge1xuICBwcml2YXRlIGNhY2hlOiB7IFtrZXk6IHN0cmluZ106IElUb2tlbk1vZGVsIH0gPSB7fTtcblxuICBnZXQoa2V5OiBzdHJpbmcpOiBJVG9rZW5Nb2RlbCB7XG4gICAgcmV0dXJuIHRoaXMuY2FjaGVba2V5XSB8fCA8YW55Pnt9O1xuICB9XG5cbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogSVRva2VuTW9kZWwpOiBib29sZWFuIHtcbiAgICB0aGlzLmNhY2hlW2tleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJlbW92ZShrZXk6IHN0cmluZykge1xuICAgIHRoaXMuY2FjaGVba2V5XSA9IG51bGw7XG4gIH1cbn1cbiIsImltcG9ydCB7IElTdG9yZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IElUb2tlbk1vZGVsIH0gZnJvbSAnLi4vdG9rZW4vaW50ZXJmYWNlJztcblxuZXhwb3J0IGNsYXNzIFNlc3Npb25TdG9yYWdlU3RvcmUgaW1wbGVtZW50cyBJU3RvcmUge1xuICBnZXQoa2V5OiBzdHJpbmcpOiBJVG9rZW5Nb2RlbCB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShrZXkpIHx8ICd7fScpIHx8IHt9O1xuICB9XG5cbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogSVRva2VuTW9kZWwpOiBib29sZWFuIHtcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJlbW92ZShrZXk6IHN0cmluZykge1xuICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIERlbG9uQXV0aENvbmZpZyB7XG4gIC8qKlxuICAgKiDDpcKtwpjDpcKCwqhLRVnDpcKAwrxcbiAgICovXG4gIHN0b3JlX2tleT8gPSAnX3Rva2VuJztcbiAgLyoqXG4gICAqIMOmwpfCoMOmwpXCiMOmwpfCtsOowrfCs8Oowr3CrMOowofCs8OnwpnCu8Olwr3ClcOpwqHCtcOvwrzCjMOlwozChcOmwovCrMOvwrzCmlxuICAgKiAtIMOmwpfCoMOmwpXCiHRva2Vuw6XCgMK8XG4gICAqIC0gdG9rZW7DpcK3wrLDqMK/wofDpsKcwp/Dr8K8wojDqcKZwpBKV1TDr8K8wolcbiAgICovXG4gIHRva2VuX2ludmFsaWRfcmVkaXJlY3Q/ID0gdHJ1ZTtcbiAgLyoqXG4gICAqIHRva2Vuw6jCv8KHw6bCnMKfw6bCl8K2w6nCl8K0w6XCgcKPw6fCp8K7w6XCgMK8w6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYDEwYCDDp8KnwpLDr8K8wojDpcKNwpXDpMK9wo3Dr8K8wprDp8KnwpLDr8K8wolcbiAgICovXG4gIHRva2VuX2V4cF9vZmZzZXQ/ID0gMTA7XG4gIC8qKlxuICAgKiDDpcKPwpHDqcKAwoF0b2tlbsOlwo/CgsOmwpXCsMOlwpDCjcOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmnRva2VuXG4gICAqL1xuICB0b2tlbl9zZW5kX2tleT8gPSAndG9rZW4nO1xuICAvKipcbiAgICogw6XCj8KRw6nCgMKBdG9rZW7DpsKowqHDpsKdwr/Dr8K8wojDqcK7wpjDqMKuwqTDpMK4wrrDr8K8wppgJHt0b2tlbn1gw6/CvMKJw6/CvMKMw6TCvcK/w6fClMKoIGAke3Rva2VufWAgw6jCocKow6fCpMK6dG9rZW7Dp8KCwrnDpMK9wo3Dp8KswqbDr8K8wozDpMK+wovDpcKmwoLDr8K8wppcbiAgICpcbiAgICogLSBgQmVhcmVyICR7dG9rZW59YFxuICAgKi9cbiAgdG9rZW5fc2VuZF90ZW1wbGF0ZT8gPSAnJHt0b2tlbn0nO1xuICAvKipcbiAgICogw6XCj8KRw6nCgMKBdG9rZW7DpcKPwoLDpsKVwrDDpMK9wo3Dp8K9wq7Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppoZWFkZXJcbiAgICovXG4gIHRva2VuX3NlbmRfcGxhY2U/OiAnaGVhZGVyJyB8ICdib2R5JyB8ICd1cmwnID0gJ2hlYWRlcic7XG4gIC8qKlxuICAgKiDDp8KZwrvDpcK9wpXDqcKhwrXDqMK3wq/Dp8KUwrHDpcKcwrDDpcKdwoBcbiAgICovXG4gIGxvZ2luX3VybD8gPSBgL2xvZ2luYDtcbiAgLyoqXG4gICAqIMOlwr/CvcOnwpXCpVRPS0VOw6fCmsKEVVJMw6XCnMKww6XCncKAw6XCiMKXw6jCocKow6/CvMKMw6nCu8KYw6jCrsKkw6XCgMK8w6TCuMK6w6/CvMKaWyAvXFwvbG9naW4vLCAvYXNzZXRzXFwvLywgL3Bhc3Nwb3J0XFwvLyBdXG4gICAqL1xuICBpZ25vcmVzPzogUmVnRXhwW10gPSBbL1xcL2xvZ2luLywgL2Fzc2V0c1xcLy8sIC9wYXNzcG9ydFxcLy9dO1xuICAvKipcbiAgICogw6XChcKBw6jCrsK4w6XCjMK/w6XCkMKNw6fCmcK7w6XCvcKVS0VZw6/CvMKMw6jCi8Klw6jCr8K3w6bCscKCw6XCj8KCw6bClcKww6TCuMKtw6XCuMKmw6bCnMKJw6jCr8KlS0VZw6jCocKow6fCpMK6w6XCv8K9w6fClcKlVE9LRU5cbiAgICovXG4gIGFsbG93X2Fub255bW91c19rZXk/ID0gYF9hbGxvd19hbm9ueW1vdXNgO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNvbnN0IFdJTkRPVyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxhbnk+KCdXaW5kb3cnKTtcbiIsImltcG9ydCB7IEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2ltcGxlVG9rZW5Nb2RlbCB9IGZyb20gJy4vc2ltcGxlL3NpbXBsZS5tb2RlbCc7XG5pbXBvcnQgeyBKV1RUb2tlbk1vZGVsIH0gZnJvbSAnLi9qd3Qvand0Lm1vZGVsJztcbmltcG9ydCB7IERlbG9uQXV0aENvbmZpZyB9IGZyb20gJy4uL2F1dGguY29uZmlnJztcbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJy4uL3dpbl90b2tlbnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gQ2hlY2tTaW1wbGUobW9kZWw6IFNpbXBsZVRva2VuTW9kZWwpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICBtb2RlbCAhPSBudWxsICYmIHR5cGVvZiBtb2RlbC50b2tlbiA9PT0gJ3N0cmluZycgJiYgbW9kZWwudG9rZW4ubGVuZ3RoID4gMFxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2hlY2tKd3QobW9kZWw6IEpXVFRva2VuTW9kZWwsIG9mZnNldDogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiBtb2RlbCAhPSBudWxsICYmIG1vZGVsLnRva2VuICYmICFtb2RlbC5pc0V4cGlyZWQob2Zmc2V0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRvTG9naW4ob3B0aW9uczogRGVsb25BdXRoQ29uZmlnLCBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgaWYgKG9wdGlvbnMudG9rZW5faW52YWxpZF9yZWRpcmVjdCA9PT0gdHJ1ZSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKC9eaHR0cHM/OlxcL1xcLy9nLnRlc3Qob3B0aW9ucy5sb2dpbl91cmwpKSB7XG4gICAgICAgIGluamVjdG9yLmdldChXSU5ET1cpLmxvY2F0aW9uLmhyZWYgPSBvcHRpb25zLmxvZ2luX3VybDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluamVjdG9yLmdldChSb3V0ZXIpLm5hdmlnYXRlKFtvcHRpb25zLmxvZ2luX3VybF0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RvciwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBSZXF1ZXN0LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cFNlbnRFdmVudCxcbiAgSHR0cEhlYWRlclJlc3BvbnNlLFxuICBIdHRwUHJvZ3Jlc3NFdmVudCxcbiAgSHR0cFJlc3BvbnNlLFxuICBIdHRwVXNlckV2ZW50LFxuICBIdHRwRXZlbnQsXG4gIEh0dHBFcnJvclJlc3BvbnNlLFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBfSHR0cENsaWVudCB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5cbmltcG9ydCB7IElUb2tlbk1vZGVsIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGVsb25BdXRoQ29uZmlnIH0gZnJvbSAnLi4vYXV0aC5jb25maWcnO1xuaW1wb3J0IHsgVG9Mb2dpbiB9IGZyb20gJy4vaGVscGVyJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IpIHt9XG5cbiAgcHJvdGVjdGVkIG1vZGVsOiBJVG9rZW5Nb2RlbDtcblxuICBhYnN0cmFjdCBpc0F1dGgob3B0aW9uczogRGVsb25BdXRoQ29uZmlnKTogYm9vbGVhbjtcblxuICBhYnN0cmFjdCBzZXRSZXEoXG4gICAgcmVxOiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG9wdGlvbnM6IERlbG9uQXV0aENvbmZpZyxcbiAgKTogSHR0cFJlcXVlc3Q8YW55PjtcblxuICBpbnRlcmNlcHQoXG4gICAgcmVxOiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyLFxuICApOiBPYnNlcnZhYmxlPFxuICAgIHwgSHR0cFNlbnRFdmVudFxuICAgIHwgSHR0cEhlYWRlclJlc3BvbnNlXG4gICAgfCBIdHRwUHJvZ3Jlc3NFdmVudFxuICAgIHwgSHR0cFJlc3BvbnNlPGFueT5cbiAgICB8IEh0dHBVc2VyRXZlbnQ8YW55PlxuICA+IHtcbiAgICBjb25zdCBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIG5ldyBEZWxvbkF1dGhDb25maWcoKSxcbiAgICAgIHRoaXMuaW5qZWN0b3IuZ2V0KERlbG9uQXV0aENvbmZpZywgbnVsbCksXG4gICAgKTtcbiAgICBpZiAob3B0aW9ucy5pZ25vcmVzKSB7XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygb3B0aW9ucy5pZ25vcmVzIGFzIFJlZ0V4cFtdKSB7XG4gICAgICAgIGlmIChpdGVtLnRlc3QocmVxLnVybCkpIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIG9wdGlvbnMuYWxsb3dfYW5vbnltb3VzX2tleSAmJlxuICAgICAgKHJlcS5wYXJhbXMuaGFzKG9wdGlvbnMuYWxsb3dfYW5vbnltb3VzX2tleSkgfHxcbiAgICAgICAgdGhpcy5pbmplY3RvclxuICAgICAgICAgIC5nZXQoUm91dGVyKVxuICAgICAgICAgIC5wYXJzZVVybChyZXEudXJsV2l0aFBhcmFtcylcbiAgICAgICAgICAucXVlcnlQYXJhbU1hcC5oYXMob3B0aW9ucy5hbGxvd19hbm9ueW1vdXNfa2V5KSlcbiAgICApIHtcbiAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQXV0aChvcHRpb25zKSkge1xuICAgICAgcmVxID0gdGhpcy5zZXRSZXEocmVxLCBvcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgVG9Mb2dpbihvcHRpb25zLCB0aGlzLmluamVjdG9yKTtcbiAgICAgIC8vIG9ic2VydmVyLmVycm9yw6/CvMKaw6TCvMKaw6XCr8K8w6XCgMKSw6XCkMKOw6fCu8Ktw6bCi8Kmw6bCiMKqw6XCmcKow6bCl8Kgw6bCs8KVw6jCp8Kmw6XCj8KRw6/CvMKMw6XCm8Kgw6bCrcKkw6/CvMKMw6nCnMKAw6jCpsKBw6XCpMKEw6fCkMKGIGBfSHR0cENsaWVudGAgw6fCisK2w6bCgMKBw6nCl8Kuw6nCosKYXG4gICAgICBjb25zdCBoYyA9IHRoaXMuaW5qZWN0b3IuZ2V0KF9IdHRwQ2xpZW50LCBudWxsKTtcbiAgICAgIGlmIChoYykgaGMuZW5kKCk7XG4gICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxIdHRwRXZlbnQ8YW55Pj4pID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0gbmV3IEh0dHBFcnJvclJlc3BvbnNlKHtcbiAgICAgICAgICB1cmw6IHJlcS51cmwsXG4gICAgICAgICAgc3RhdHVzOiA0MDEsXG4gICAgICAgICAgc3RhdHVzVGV4dDogYEZyb20gU2ltcGxlIEludGVyY2VwdCAtLT4gaHR0cHM6Ly9uZy1hbGFpbi5jb20vZG9jcy9hdXRoYCxcbiAgICAgICAgfSk7XG4gICAgICAgIG9ic2VydmVyLmVycm9yKHJlcyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElUb2tlblNlcnZpY2UsIElUb2tlbk1vZGVsIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgREFfU1RPUkVfVE9LRU4sIElTdG9yZSB9IGZyb20gJy4uL3N0b3JlL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBEZWxvbkF1dGhDb25maWcgfSBmcm9tICcuLi9hdXRoLmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUb2tlblNlcnZpY2UgaW1wbGVtZW50cyBJVG9rZW5TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjaGFuZ2UkOiBCZWhhdmlvclN1YmplY3Q8SVRva2VuTW9kZWw+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxcbiAgICBJVG9rZW5Nb2RlbFxuICA+KG51bGwpO1xuICBwcml2YXRlIGRhdGE6IElUb2tlbk1vZGVsO1xuICBwcml2YXRlIF9yZWRpcmVjdDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgb3B0aW9uczogRGVsb25BdXRoQ29uZmlnLFxuICAgIEBJbmplY3QoREFfU1RPUkVfVE9LRU4pIHByaXZhdGUgc3RvcmU6IElTdG9yZSxcbiAgKSB7fVxuXG4gIGdldCBsb2dpbl91cmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmxvZ2luX3VybDtcbiAgfVxuXG4gIHNldCByZWRpcmVjdCh1cmw6IHN0cmluZykge1xuICAgIHRoaXMuX3JlZGlyZWN0ID0gdXJsO1xuICB9XG5cbiAgZ2V0IHJlZGlyZWN0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWRpcmVjdCB8fCAnLyc7XG4gIH1cblxuICBzZXQoZGF0YTogSVRva2VuTW9kZWwpOiBib29sZWFuIHtcbiAgICB0aGlzLmNoYW5nZSQubmV4dChkYXRhKTtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZXQodGhpcy5vcHRpb25zLnN0b3JlX2tleSwgZGF0YSk7XG4gIH1cblxuICBnZXQodHlwZT86IGFueSk7XG4gIGdldDxUIGV4dGVuZHMgSVRva2VuTW9kZWw+KHR5cGU/OiB7IG5ldyAoKTogVCB9KTogVCB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuc3RvcmUuZ2V0KHRoaXMub3B0aW9ucy5zdG9yZV9rZXkpO1xuICAgIHJldHVybiB0eXBlID8gKE9iamVjdC5hc3NpZ24obmV3IHR5cGUoKSwgZGF0YSkgYXMgVCkgOiAoZGF0YSBhcyBUKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuY2hhbmdlJC5uZXh0KG51bGwpO1xuICAgIHRoaXMuc3RvcmUucmVtb3ZlKHRoaXMub3B0aW9ucy5zdG9yZV9rZXkpO1xuICB9XG5cbiAgY2hhbmdlKCk6IE9ic2VydmFibGU8SVRva2VuTW9kZWw+IHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UkLnBpcGUoc2hhcmUoKSk7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB1cmxCYXNlNjREZWNvZGUoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICBsZXQgb3V0cHV0ID0gc3RyLnJlcGxhY2UoLy0vZywgJysnKS5yZXBsYWNlKC9fL2csICcvJyk7XG4gIHN3aXRjaCAob3V0cHV0Lmxlbmd0aCAlIDQpIHtcbiAgICBjYXNlIDA6IHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIDI6IHtcbiAgICAgIG91dHB1dCArPSAnPT0nO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgMzoge1xuICAgICAgb3V0cHV0ICs9ICc9JztcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGAnYXRvYicgZmFpbGVkOiBUaGUgc3RyaW5nIHRvIGJlIGRlY29kZWQgaXMgbm90IGNvcnJlY3RseSBlbmNvZGVkLmAsXG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYjY0RGVjb2RlVW5pY29kZShvdXRwdXQpO1xufVxuXG5mdW5jdGlvbiBiNjRkZWNvZGUoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBjaGFycyA9XG4gICAgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JztcbiAgbGV0IG91dHB1dDogc3RyaW5nID0gJyc7XG5cbiAgc3RyID0gU3RyaW5nKHN0cikucmVwbGFjZSgvPSskLywgJycpO1xuXG4gIGZvciAoXG4gICAgLy8gaW5pdGlhbGl6ZSByZXN1bHQgYW5kIGNvdW50ZXJzXG4gICAgbGV0IGJjOiBudW1iZXIgPSAwLCBiczogYW55LCBidWZmZXI6IGFueSwgaWR4OiBudW1iZXIgPSAwO1xuICAgIC8vIGdldCBuZXh0IGNoYXJhY3RlclxuICAgIChidWZmZXIgPSBzdHIuY2hhckF0KGlkeCsrKSk7XG4gICAgLy8gY2hhcmFjdGVyIGZvdW5kIGluIHRhYmxlPyBpbml0aWFsaXplIGJpdCBzdG9yYWdlIGFuZCBhZGQgaXRzIGFzY2lpIHZhbHVlO1xuICAgIH5idWZmZXIgJiZcbiAgICAoKGJzID0gYmMgJSA0ID8gYnMgKiA2NCArIGJ1ZmZlciA6IGJ1ZmZlciksXG4gICAgLy8gYW5kIGlmIG5vdCBmaXJzdCBvZiBlYWNoIDQgY2hhcmFjdGVycyxcbiAgICAvLyBjb252ZXJ0IHRoZSBmaXJzdCA4IGJpdHMgdG8gb25lIGFzY2lpIGNoYXJhY3RlclxuICAgIGJjKysgJSA0KVxuICAgICAgPyAob3V0cHV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoMjU1ICYgKGJzID4+ICgoLTIgKiBiYykgJiA2KSkpKVxuICAgICAgOiAwXG4gICkge1xuICAgIC8vIHRyeSB0byBmaW5kIGNoYXJhY3RlciBpbiB0YWJsZSAoMC02Mywgbm90IGZvdW5kID0+IC0xKVxuICAgIGJ1ZmZlciA9IGNoYXJzLmluZGV4T2YoYnVmZmVyKTtcbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufVxuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9BUEkvV2luZG93QmFzZTY0L0Jhc2U2NF9lbmNvZGluZ19hbmRfZGVjb2RpbmcjVGhlX1VuaWNvZGVfUHJvYmxlbVxuZnVuY3Rpb24gYjY0RGVjb2RlVW5pY29kZShzdHI6IGFueSkge1xuICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KFxuICAgIEFycmF5LnByb3RvdHlwZS5tYXBcbiAgICAgIC5jYWxsKGI2NGRlY29kZShzdHIpLCAoYzogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiAnJScgKyAoJzAwJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKTtcbiAgICAgIH0pXG4gICAgICAuam9pbignJyksXG4gICk7XG59XG4iLCJpbXBvcnQgeyBJVG9rZW5Nb2RlbCB9IGZyb20gJy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyB1cmxCYXNlNjREZWNvZGUgfSBmcm9tICcuL2p3dC5oZWxwZXInO1xuXG5leHBvcnQgY2xhc3MgSldUVG9rZW5Nb2RlbCBpbXBsZW1lbnRzIElUb2tlbk1vZGVsIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuXG4gIHRva2VuOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIMOowo7Ct8Olwo/ClsOowr3CvcOowo3Ct8Okwr/CocOmwoHCr1xuICAgKi9cbiAgZ2V0IHBheWxvYWQoKTogYW55IHtcbiAgICBjb25zdCBwYXJ0cyA9ICh0aGlzLnRva2VuIHx8ICcnKS5zcGxpdCgnLicpO1xuICAgIGlmIChwYXJ0cy5sZW5ndGggIT09IDMpIHRocm93IG5ldyBFcnJvcignSldUIG11c3QgaGF2ZSAzIHBhcnRzJyk7XG5cbiAgICBjb25zdCBkZWNvZGVkID0gdXJsQmFzZTY0RGVjb2RlKHBhcnRzWzFdKTtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShkZWNvZGVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpsKjwoDDpsKfwqVUb2tlbsOmwpjCr8OlwpDCpsOowr/Ch8OmwpzCn8OvwrzCjGBwYXlsb2FkYCDDpcK/woXDqcKhwrvDpcKMwoXDpcKQwqsgYGV4cGAgw6bCl8K2w6bCnMKJw6bClcKIXG4gICAqXG4gICAqIEBwYXJhbSBvZmZzZXRTZWNvbmRzIMOlwoHCj8OnwqfCu8OpwofCj1xuICAgKi9cbiAgaXNFeHBpcmVkKG9mZnNldFNlY29uZHM6IG51bWJlciA9IDApOiBib29sZWFuIHtcbiAgICBjb25zdCBkZWNvZGVkID0gdGhpcy5wYXlsb2FkO1xuICAgIGlmICghZGVjb2RlZC5oYXNPd25Qcm9wZXJ0eSgnZXhwJykpIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICAgIGRhdGUuc2V0VVRDU2Vjb25kcyhkZWNvZGVkLmV4cCk7XG5cbiAgICByZXR1cm4gIShkYXRlLnZhbHVlT2YoKSA+IG5ldyBEYXRlKCkudmFsdWVPZigpICsgb2Zmc2V0U2Vjb25kcyAqIDEwMDApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgRGVsb25BdXRoQ29uZmlnIH0gZnJvbSAnLi4vLi4vYXV0aC5jb25maWcnO1xuaW1wb3J0IHsgQmFzZUludGVyY2VwdG9yIH0gZnJvbSAnLi4vYmFzZS5pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBEQV9TRVJWSUNFX1RPS0VOIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IEpXVFRva2VuTW9kZWwgfSBmcm9tICcuL2p3dC5tb2RlbCc7XG5pbXBvcnQgeyBDaGVja0p3dCB9IGZyb20gJy4uL2hlbHBlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKV1RJbnRlcmNlcHRvciBleHRlbmRzIEJhc2VJbnRlcmNlcHRvciB7XG4gIGlzQXV0aChvcHRpb25zOiBEZWxvbkF1dGhDb25maWcpOiBib29sZWFuIHtcbiAgICB0aGlzLm1vZGVsID0gdGhpcy5pbmplY3RvclxuICAgICAgLmdldChEQV9TRVJWSUNFX1RPS0VOKVxuICAgICAgLmdldDxKV1RUb2tlbk1vZGVsPihKV1RUb2tlbk1vZGVsKTtcbiAgICByZXR1cm4gQ2hlY2tKd3QodGhpcy5tb2RlbCBhcyBKV1RUb2tlbk1vZGVsLCBvcHRpb25zLnRva2VuX2V4cF9vZmZzZXQpO1xuICB9XG5cbiAgc2V0UmVxKHJlcTogSHR0cFJlcXVlc3Q8YW55Piwgb3B0aW9uczogRGVsb25BdXRoQ29uZmlnKTogSHR0cFJlcXVlc3Q8YW55PiB7XG4gICAgcmV0dXJuIHJlcS5jbG9uZSh7XG4gICAgICBzZXRIZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0aGlzLm1vZGVsLnRva2VufWAsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgQ2FuQWN0aXZhdGVDaGlsZCwgQ2FuTG9hZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEQV9TRVJWSUNFX1RPS0VOLCBJVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IEpXVFRva2VuTW9kZWwgfSBmcm9tICcuL2p3dC5tb2RlbCc7XG5pbXBvcnQgeyBEZWxvbkF1dGhDb25maWcgfSBmcm9tICcuLi8uLi9hdXRoLmNvbmZpZyc7XG5pbXBvcnQgeyBDaGVja0p3dCwgVG9Mb2dpbiB9IGZyb20gJy4uL2hlbHBlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKV1RHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlLCBDYW5BY3RpdmF0ZUNoaWxkLCBDYW5Mb2FkIHtcbiAgcHJpdmF0ZSBjb2c6IERlbG9uQXV0aENvbmZpZztcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChEQV9TRVJWSUNFX1RPS0VOKSBwcml2YXRlIHNydjogSVRva2VuU2VydmljZSxcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBjb2c6IERlbG9uQXV0aENvbmZpZyxcbiAgKSB7XG4gICAgdGhpcy5jb2cgPSBPYmplY3QuYXNzaWduKG5ldyBEZWxvbkF1dGhDb25maWcoKSwgY29nKTtcbiAgfVxuXG4gIHByaXZhdGUgcHJvY2VzcygpOiBib29sZWFuIHtcbiAgICBjb25zdCByZXMgPSBDaGVja0p3dChcbiAgICAgIHRoaXMuc3J2LmdldDxKV1RUb2tlbk1vZGVsPihKV1RUb2tlbk1vZGVsKSxcbiAgICAgIHRoaXMuY29nLnRva2VuX2V4cF9vZmZzZXQsXG4gICAgKTtcbiAgICBpZiAoIXJlcykge1xuICAgICAgVG9Mb2dpbih0aGlzLmNvZywgdGhpcy5pbmplY3Rvcik7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvLyBsYXp5IGxvYWRpbmdcbiAgY2FuTG9hZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKCk7XG4gIH1cbiAgLy8gYWxsIGNoaWxkcmVuIHJvdXRlXG4gIGNhbkFjdGl2YXRlQ2hpbGQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VzcygpO1xuICB9XG4gIC8vIHJvdXRlXG4gIGNhbkFjdGl2YXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3MoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSVRva2VuTW9kZWwgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgU2ltcGxlVG9rZW5Nb2RlbCBpbXBsZW1lbnRzIElUb2tlbk1vZGVsIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuXG4gIHRva2VuOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgRGVsb25BdXRoQ29uZmlnIH0gZnJvbSAnLi4vLi4vYXV0aC5jb25maWcnO1xuaW1wb3J0IHsgU2ltcGxlVG9rZW5Nb2RlbCB9IGZyb20gJy4vc2ltcGxlLm1vZGVsJztcbmltcG9ydCB7IEJhc2VJbnRlcmNlcHRvciB9IGZyb20gJy4uL2Jhc2UuaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgREFfU0VSVklDRV9UT0tFTiB9IGZyb20gJy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBDaGVja1NpbXBsZSB9IGZyb20gJy4uL2hlbHBlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaW1wbGVJbnRlcmNlcHRvciBleHRlbmRzIEJhc2VJbnRlcmNlcHRvciB7XG4gIGlzQXV0aChvcHRpb25zOiBEZWxvbkF1dGhDb25maWcpOiBib29sZWFuIHtcbiAgICB0aGlzLm1vZGVsID0gdGhpcy5pbmplY3Rvci5nZXQoREFfU0VSVklDRV9UT0tFTikuZ2V0KCkgYXMgU2ltcGxlVG9rZW5Nb2RlbDtcbiAgICByZXR1cm4gQ2hlY2tTaW1wbGUodGhpcy5tb2RlbCBhcyBTaW1wbGVUb2tlbk1vZGVsKTtcbiAgfVxuXG4gIHNldFJlcShyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG9wdGlvbnM6IERlbG9uQXV0aENvbmZpZyk6IEh0dHBSZXF1ZXN0PGFueT4ge1xuICAgIGNvbnN0IHRva2VuID0gb3B0aW9ucy50b2tlbl9zZW5kX3RlbXBsYXRlLnJlcGxhY2UoXG4gICAgICAvXFwkXFx7KFtcXHddKylcXH0vZyxcbiAgICAgIChfOiBzdHJpbmcsIGcpID0+IHRoaXMubW9kZWxbZ10sXG4gICAgKTtcbiAgICBzd2l0Y2ggKG9wdGlvbnMudG9rZW5fc2VuZF9wbGFjZSkge1xuICAgICAgY2FzZSAnaGVhZGVyJzpcbiAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICAgIG9ialtvcHRpb25zLnRva2VuX3NlbmRfa2V5XSA9IHRva2VuO1xuICAgICAgICByZXEgPSByZXEuY2xvbmUoe1xuICAgICAgICAgIHNldEhlYWRlcnM6IG9iaixcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYm9keSc6XG4gICAgICAgIGNvbnN0IGJvZHkgPSByZXEuYm9keSB8fCB7fTtcbiAgICAgICAgYm9keVtvcHRpb25zLnRva2VuX3NlbmRfa2V5XSA9IHRva2VuO1xuICAgICAgICByZXEgPSByZXEuY2xvbmUoe1xuICAgICAgICAgIGJvZHk6IGJvZHksXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3VybCc6XG4gICAgICAgIHJlcSA9IHJlcS5jbG9uZSh7XG4gICAgICAgICAgcGFyYW1zOiByZXEucGFyYW1zLmFwcGVuZChvcHRpb25zLnRva2VuX3NlbmRfa2V5LCB0b2tlbiksXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHJlcTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIENhbkFjdGl2YXRlQ2hpbGQsIENhbkxvYWQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgREFfU0VSVklDRV9UT0tFTiwgSVRva2VuU2VydmljZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBDaGVja1NpbXBsZSwgVG9Mb2dpbiB9IGZyb20gJy4uL2hlbHBlcic7XG5pbXBvcnQgeyBEZWxvbkF1dGhDb25maWcgfSBmcm9tICcuLi8uLi9hdXRoLmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaW1wbGVHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlLCBDYW5BY3RpdmF0ZUNoaWxkLCBDYW5Mb2FkIHtcbiAgcHJpdmF0ZSBjb2c6IERlbG9uQXV0aENvbmZpZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERBX1NFUlZJQ0VfVE9LRU4pIHByaXZhdGUgc3J2OiBJVG9rZW5TZXJ2aWNlLFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIGNvZzogRGVsb25BdXRoQ29uZmlnLFxuICApIHtcbiAgICB0aGlzLmNvZyA9IE9iamVjdC5hc3NpZ24obmV3IERlbG9uQXV0aENvbmZpZygpLCBjb2cpO1xuICB9XG5cbiAgcHJpdmF0ZSBwcm9jZXNzKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJlcyA9IENoZWNrU2ltcGxlKHRoaXMuc3J2LmdldCgpKTtcbiAgICBpZiAoIXJlcykge1xuICAgICAgVG9Mb2dpbih0aGlzLmNvZywgdGhpcy5pbmplY3Rvcik7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvLyBsYXp5IGxvYWRpbmdcbiAgY2FuTG9hZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKCk7XG4gIH1cbiAgLy8gYWxsIGNoaWxkcmVuIHJvdXRlXG4gIGNhbkFjdGl2YXRlQ2hpbGQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VzcygpO1xuICB9XG4gIC8vIHJvdXRlXG4gIGNhbkFjdGl2YXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3MoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGVsb25BdXRoQ29uZmlnIH0gZnJvbSAnLi9hdXRoLmNvbmZpZyc7XG5pbXBvcnQgeyBEQV9TVE9SRV9UT0tFTiB9IGZyb20gJy4vc3RvcmUvaW50ZXJmYWNlJztcbmltcG9ydCB7IERBX1NFUlZJQ0VfVE9LRU4gfSBmcm9tICcuL3Rva2VuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTdG9yZSB9IGZyb20gJy4vc3RvcmUvbG9jYWwtc3RvcmFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IFRva2VuU2VydmljZSB9IGZyb20gJy4vdG9rZW4vdG9rZW4uc2VydmljZSc7XG5pbXBvcnQgeyBTaW1wbGVHdWFyZCB9IGZyb20gJy4vdG9rZW4vc2ltcGxlL3NpbXBsZS5ndWFyZCc7XG5pbXBvcnQgeyBKV1RHdWFyZCB9IGZyb20gJy4vdG9rZW4vand0L2p3dC5ndWFyZCc7XG5pbXBvcnQgeyBXSU5ET1cgfSBmcm9tICcuL3dpbl90b2tlbnMnO1xuXG5ATmdNb2R1bGUoe30pXG5leHBvcnQgY2xhc3MgRGVsb25BdXRoTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEZWxvbkF1dGhNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBXSU5ET1csIHVzZVZhbHVlOiB3aW5kb3cgfSxcbiAgICAgICAgRGVsb25BdXRoQ29uZmlnLFxuICAgICAgICBTaW1wbGVHdWFyZCxcbiAgICAgICAgSldUR3VhcmQsXG4gICAgICAgIHsgcHJvdmlkZTogREFfU1RPUkVfVE9LRU4sIHVzZUNsYXNzOiBMb2NhbFN0b3JhZ2VTdG9yZSB9LFxuICAgICAgICB7IHByb3ZpZGU6IERBX1NFUlZJQ0VfVE9LRU4sIHVzZUNsYXNzOiBUb2tlblNlcnZpY2UgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInRzbGliXzEuX19leHRlbmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQSxJQUFhLGdCQUFnQixHQUFHLElBQUksY0FBYyxDQUNoRCxnQ0FBZ0MsQ0FDakM7Ozs7OztBQ0xEO0lBV00sUUFBUSxHQUFHLHNCQUFzQjs7SUFDakMsWUFBWSxHQUFHLGdDQUFnQztBQUlyRDtJQU1FLHVCQUNvQyxZQUEyQixFQUNuQyxHQUFRLEVBQzFCLE1BQWM7UUFGWSxpQkFBWSxHQUFaLFlBQVksQ0FBZTtRQUNuQyxRQUFHLEdBQUgsR0FBRyxDQUFLO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQVE7S0FDcEI7Ozs7Ozs7Ozs7Ozs7OztJQXFDSiw2QkFBSzs7Ozs7OztJQUFMLFVBQ0UsR0FBVyxFQUNYLFFBQXNCLEVBQ3RCLE9BR007UUFOUixpQkEyQ0M7UUF6Q0MseUJBQUEsRUFBQSxjQUFzQjtRQUN0Qix3QkFBQSxFQUFBLFlBR007UUFFTixPQUFPLEdBQUcsTUFBTSxD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