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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var DA_SERVICE_TOKEN = new InjectionToken('DELON_AUTH_TOKEN_SERVICE_TOKEN');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var DA_STORE_TOKEN = new InjectionToken('AUTH_STORE_TOKEN');

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
var WINDOW = new InjectionToken('Window');

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
                injector.get(Router).navigate([options.login_url]);
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
            /** @type {?} */
            var hc = this.injector.get(_HttpClient, null);
            if (hc)
                hc.end();
            // Interrupt Http request, so need to generate a new Observable
            return new Observable(function (observer) {
                /** @type {?} */
                var res = new HttpErrorResponse({
                    url: req.url,
                    headers: req.headers,
                    status: 401,
                    statusText: "From Auth Intercept --> https://ng-alain.com/docs/auth",
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        return type ? (/** @type {?} */ (Object.assign(new type(), data))) : (/** @type {?} */ (data));
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
        { type: Injectable }
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
        { type: Injectable }
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
        { type: NgModule, args: [{},] }
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

export { SocialService, DA_STORE_TOKEN, LocalStorageStore, MemoryStore, SessionStorageStore, BaseInterceptor, DA_SERVICE_TOKEN, TokenService, urlBase64Decode, JWTTokenModel, JWTInterceptor, JWTGuard, SimpleTokenModel, SimpleInterceptor, SimpleGuard, DelonAuthConfig, DelonAuthModule, WINDOW as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3Rva2VuL2ludGVyZmFjZS50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3NvY2lhbC9zb2NpYWwuc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3N0b3JlL2ludGVyZmFjZS50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3N0b3JlL2xvY2FsLXN0b3JhZ2Uuc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3N0b3JlL21lbW9yeS5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vYXV0aC9zcmMvc3RvcmUvc2Vzc2lvbi1zdG9yYWdlLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi9hdXRoL3NyYy9hdXRoLmNvbmZpZy50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3dpbl90b2tlbnMudHMiLCJuZzovL0BkZWxvbi9hdXRoL3NyYy90b2tlbi9oZWxwZXIudHMiLCJuZzovL0BkZWxvbi9hdXRoL3NyYy90b2tlbi9iYXNlLmludGVyY2VwdG9yLnRzIiwibmc6Ly9AZGVsb24vYXV0aC9zcmMvdG9rZW4vdG9rZW4uc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3Rva2VuL2p3dC9qd3QuaGVscGVyLnRzIiwibmc6Ly9AZGVsb24vYXV0aC9zcmMvdG9rZW4vand0L2p3dC5tb2RlbC50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3Rva2VuL2p3dC9qd3QuaW50ZXJjZXB0b3IudHMiLCJuZzovL0BkZWxvbi9hdXRoL3NyYy90b2tlbi9qd3Qvand0Lmd1YXJkLnRzIiwibmc6Ly9AZGVsb24vYXV0aC9zcmMvdG9rZW4vc2ltcGxlL3NpbXBsZS5tb2RlbC50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3Rva2VuL3NpbXBsZS9zaW1wbGUuaW50ZXJjZXB0b3IudHMiLCJuZzovL0BkZWxvbi9hdXRoL3NyYy90b2tlbi9zaW1wbGUvc2ltcGxlLmd1YXJkLnRzIiwibmc6Ly9AZGVsb24vYXV0aC9zcmMvYXV0aC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNvbnN0IERBX1NFUlZJQ0VfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48SVRva2VuU2VydmljZT4oXG4gICdERUxPTl9BVVRIX1RPS0VOX1NFUlZJQ0VfVE9LRU4nLFxuKTtcblxuZXhwb3J0IGludGVyZmFjZSBJVG9rZW5Nb2RlbCB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcblxuICB0b2tlbjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUb2tlblNlcnZpY2Uge1xuICBzZXQoZGF0YTogSVRva2VuTW9kZWwpOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDDqMKOwrfDpcKPwpZUb2tlbsOvwrzCjMOlwr3CosOlwrzCj8OlwozChcOmwovCrMOvwrzCmlxuICAgKiAtIGBnZXQoKWAgw6jCjsK3w6XCj8KWIFNpbXBsZSBUb2tlblxuICAgKiAtIGBnZXQ8SldUVG9rZW5Nb2RlbD4oSldUVG9rZW5Nb2RlbClgIMOowo7Ct8Olwo/CliBKV1QgVG9rZW5cbiAgICovXG4gIGdldCh0eXBlPzogYW55KTogSVRva2VuTW9kZWw7XG5cbiAgLyoqXG4gICAqIMOowo7Ct8Olwo/CllRva2Vuw6/CvMKMw6XCvcKiw6XCvMKPw6XCjMKFw6bCi8Ksw6/CvMKaXG4gICAqIC0gYGdldCgpYCDDqMKOwrfDpcKPwpYgU2ltcGxlIFRva2VuXG4gICAqIC0gYGdldDxKV1RUb2tlbk1vZGVsPihKV1RUb2tlbk1vZGVsKWAgw6jCjsK3w6XCj8KWIEpXVCBUb2tlblxuICAgKi9cbiAgZ2V0PFQgZXh0ZW5kcyBJVG9rZW5Nb2RlbD4odHlwZT86IGFueSk6IFQ7XG5cbiAgY2xlYXIoKTogdm9pZDtcblxuICBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxJVG9rZW5Nb2RlbD47XG5cbiAgLyoqIMOowo7Ct8Olwo/ClsOnwpnCu8Olwr3ClcOlwpzCsMOlwp3CgCAqL1xuICByZWFkb25seSBsb2dpbl91cmw6IHN0cmluZztcblxuICAvKiogw6fCmcK7w6XCvcKVw6XCkMKOw6jCt8Kzw6jCvcKsw6XCnMKww6XCncKAw6/CvMKMw6bCnMKqw6bCjMKHw6XCrsKaw6bCl8K2w6jCv8KUw6XCm8KeIGAvYCAqL1xuICByZWRpcmVjdDogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBPYnNlcnZlciwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1xuICBJVG9rZW5Nb2RlbCxcbiAgSVRva2VuU2VydmljZSxcbiAgREFfU0VSVklDRV9UT0tFTixcbn0gZnJvbSAnLi4vdG9rZW4vaW50ZXJmYWNlJztcblxuY29uc3QgT1BFTlRZUEUgPSAnX2RlbG9uQXV0aFNvY2lhbFR5cGUnO1xuY29uc3QgSFJFRkNBTExCQUNLID0gJ19kZWxvbkF1dGhTb2NpYWxDYWxsYmFja0J5SHJlZic7XG5cbmV4cG9ydCB0eXBlIFNvY2lhbE9wZW5UeXBlID0gJ2hyZWYnIHwgJ3dpbmRvdyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTb2NpYWxTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfd2luOiBXaW5kb3c7XG4gIHByaXZhdGUgX3dpbiQ6IGFueTtcbiAgcHJpdmF0ZSBvYnNlcnZlcjogT2JzZXJ2ZXI8SVRva2VuTW9kZWw+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoREFfU0VSVklDRV9UT0tFTikgcHJpdmF0ZSB0b2tlblNlcnZpY2U6IElUb2tlblNlcnZpY2UsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICApIHt9XG5cbiAgLyoqXG4gICAqIMOkwr3Cv8OnwpTCqMOnwqrCl8Okwr3Ck8OmwonCk8OlwrzCgMOmwo7CiMOmwp3Cg8OpwqHCtcOvwrzCjMOowr/ClMOlwpvCnsOlwoDCvMOmwpjCryBgT2JzZXJ2YWJsZTxJVG9rZW5Nb2RlbD5gIMOnwpTCqMOkwrrCjsOowq7CosOpwpjChcOmwo7CiMOmwp3Cg8OlwpDCjsOowr/ClMOlwpvCnsOnwprChMOnwrvCk8Omwp7CnFxuICAgKiBAcGFyYW0gdXJsIMOowo7Ct8Olwo/ClsOmwo7CiMOmwp3Cg8OlwpzCsMOlwp3CgFxuICAgKiBAcGFyYW0gY2FsbGJhY2sgw6XCm8Kew6jCsMKDw6jCt8Kvw6fClMKxw6XCnMKww6XCncKAXG4gICAqIEBwYXJhbSBvcHRpb25zLndpbmRvd0ZlYXR1cmVzIMOnwq3CicOlwpDCjCBgd2luZG93Lm9wZW5gIMOnwprChCBgZmVhdHVyZXNgIMOlwo/CgsOmwpXCsMOlwoDCvFxuICAgKi9cbiAgbG9naW4oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgY2FsbGJhY2s/OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIHR5cGU/OiAnd2luZG93JztcbiAgICAgIHdpbmRvd0ZlYXR1cmVzPzogc3RyaW5nO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8SVRva2VuTW9kZWw+O1xuXG4gIC8qKlxuICAgKiDDqMK3wrPDqMK9wqzDqMKHwrPDpsKOwojDpsKdwoPDqcKhwrVcbiAgICogQHBhcmFtIHVybCDDqMKOwrfDpcKPwpbDpsKOwojDpsKdwoPDpcKcwrDDpcKdwoBcbiAgICogQHBhcmFtIGNhbGxiYWNrIMOlwpvCnsOowrDCg8OowrfCr8OnwpTCscOlwpzCsMOlwp3CgFxuICAgKi9cbiAgbG9naW4oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgY2FsbGJhY2s/OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIHR5cGU/OiAnaHJlZic7XG4gICAgfSxcbiAgKTogdm9pZDtcblxuICAvKipcbiAgICogw6jCt8Kzw6jCvcKsw6jCh8Kzw6fCmcK7w6XCvcKVw6nCocK1w6/CvMKMw6jCi8Klw6TCuMK6IGB0eXBlPXdpbmRvd2Agw6bCl8K2w6/CvMKMw6jCv8KUw6XCm8Kew6XCgMK8w6bCmMKvIGBPYnNlcnZhYmxlPElUb2tlbk1vZGVsPmBcbiAgICogQHBhcmFtIHVybCDDqMKOwrfDpcKPwpbDpsKOwojDpsKdwoPDpcKcwrDDpcKdwoBcbiAgICogQHBhcmFtIGNhbGxiYWNrIMOlwr3CkyBgdHlwZT1ocmVmYCDDpsKIwpDDpcKKwp/DpsKXwrbDp8KawoTDpcKbwp7DqMKwwoPDqMK3wq/Dp8KUwrHDpcKcwrDDpcKdwoBcbiAgICogQHBhcmFtIG9wdGlvbnMudHlwZSDDpsKJwpPDpcK8woDDpsKWwrnDpcK8wo/Dr8K8wozDqcK7wpjDqMKuwqQgYHdpbmRvd2BcbiAgICogQHBhcmFtIG9wdGlvbnMud2luZG93RmVhdHVyZXMgw6fCrcKJw6XCkMKMIGB3aW5kb3cub3BlbmAgw6fCmsKEIGBmZWF0dXJlc2Agw6XCj8KCw6bClcKww6XCgMK8XG4gICAqL1xuICBsb2dpbihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBjYWxsYmFjazogc3RyaW5nID0gJy8nLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIHR5cGU/OiBTb2NpYWxPcGVuVHlwZTtcbiAgICAgIHdpbmRvd0ZlYXR1cmVzPzogc3RyaW5nO1xuICAgIH0gPSB7fSxcbiAgKTogT2JzZXJ2YWJsZTxJVG9rZW5Nb2RlbD4gfCB2b2lkIHtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ3dpbmRvdycsXG4gICAgICAgIHdpbmRvd0ZlYXR1cmVzOlxuICAgICAgICAgICdsb2NhdGlvbj15ZXMsaGVpZ2h0PTU3MCx3aWR0aD01MjAsc2Nyb2xsYmFycz15ZXMsc3RhdHVzPXllcycsXG4gICAgICB9LFxuICAgICAgb3B0aW9ucyxcbiAgICApO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKE9QRU5UWVBFLCBvcHRpb25zLnR5cGUpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKEhSRUZDQUxMQkFDSywgY2FsbGJhY2spO1xuICAgIGlmIChvcHRpb25zLnR5cGUgPT09ICdocmVmJykge1xuICAgICAgdGhpcy5kb2MubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl93aW4gPSB3aW5kb3cub3Blbih1cmwsICdfYmxhbmsnLCBvcHRpb25zLndpbmRvd0ZlYXR1cmVzKTtcbiAgICB0aGlzLl93aW4kID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX3dpbiAmJiB0aGlzLl93aW4uY2xvc2VkKSB7XG4gICAgICAgIHRoaXMubmdPbkRlc3Ryb3koKTtcblxuICAgICAgICBsZXQgbW9kZWwgPSB0aGlzLnRva2VuU2VydmljZS5nZXQoKTtcbiAgICAgICAgaWYgKG1vZGVsICYmICFtb2RlbC50b2tlbikgbW9kZWwgPSBudWxsO1xuXG4gICAgICAgIC8vIMOowqfCpsOlwo/CkcOlwo/CmMOmwpvCtMOpwoDCmsOnwp/CpVxuICAgICAgICBpZiAobW9kZWwpIHtcbiAgICAgICAgICB0aGlzLnRva2VuU2VydmljZS5zZXQobW9kZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vYnNlcnZlci5uZXh0KG1vZGVsKTtcbiAgICAgICAgdGhpcy5vYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH0sIDEwMCk7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogT2JzZXJ2ZXI8SVRva2VuTW9kZWw+KSA9PiB7XG4gICAgICB0aGlzLm9ic2VydmVyID0gb2JzZXJ2ZXI7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogw6bCjsKIw6bCncKDw6bCiMKQw6XCisKfw6XCkMKOw6fCmsKEw6XCm8Kew6jCsMKDw6XCpMKEw6fCkMKGXG4gICAqXG4gICAqIEBwYXJhbSByYXdEYXRhIMOmwozCh8Olwq7CmsOlwpvCnsOowrDCg8Oowq7CpMOowq/CgcOkwr/CocOmwoHCr8OvwrzCjMOkwrjCusOnwqnCusOmwpfCtsOkwrvCjsOmwqDCucOmwo3CrsOlwr3Ck8OlwonCjVVSTMOowqfCo8Omwp7CkFxuICAgKi9cbiAgY2FsbGJhY2socmF3RGF0YT86IHN0cmluZyB8IElUb2tlbk1vZGVsKTogSVRva2VuTW9kZWwge1xuICAgIC8vIGZyb20gdXJpXG4gICAgaWYgKCFyYXdEYXRhICYmIHRoaXMucm91dGVyLnVybC5pbmRleE9mKCc/JykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHVybCBtdXNlIGNvbnRhaW4gYSA/YCk7XG4gICAgfVxuICAgIC8vIHBhcnNlXG4gICAgbGV0IGRhdGE6IElUb2tlbk1vZGVsID0geyB0b2tlbjogYGAgfTtcbiAgICBpZiAodHlwZW9mIHJhd0RhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCByaWdodFVybCA9IHJhd0RhdGEuc3BsaXQoJz8nKVsxXS5zcGxpdCgnIycpWzBdO1xuICAgICAgZGF0YSA9IDxhbnk+dGhpcy5yb3V0ZXIucGFyc2VVcmwoJy4vPycgKyByaWdodFVybCkucXVlcnlQYXJhbXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEgPSByYXdEYXRhO1xuICAgIH1cblxuICAgIGlmICghZGF0YSB8fCAhZGF0YS50b2tlbikgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkZSB0b2tlbiBkYXRhYCk7XG4gICAgdGhpcy50b2tlblNlcnZpY2Uuc2V0KGRhdGEpO1xuXG4gICAgY29uc3QgdXJsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oSFJFRkNBTExCQUNLKSB8fCAnLyc7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oSFJFRkNBTExCQUNLKTtcbiAgICBjb25zdCB0eXBlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oT1BFTlRZUEUpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKE9QRU5UWVBFKTtcbiAgICBpZiAodHlwZSA9PT0gJ3dpbmRvdycpIHtcbiAgICAgIHdpbmRvdy5jbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHVybCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuX3dpbiQpO1xuICAgIHRoaXMuX3dpbiQgPSBudWxsO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSVRva2VuTW9kZWwgfSBmcm9tICcuLi90b2tlbi9pbnRlcmZhY2UnO1xuXG5leHBvcnQgY29uc3QgREFfU1RPUkVfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48SVN0b3JlPignQVVUSF9TVE9SRV9UT0tFTicpO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTdG9yZSB7XG4gIGdldChrZXk6IHN0cmluZyk6IElUb2tlbk1vZGVsO1xuXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IElUb2tlbk1vZGVsKTogYm9vbGVhbjtcblxuICByZW1vdmUoa2V5OiBzdHJpbmcpO1xufVxuIiwiaW1wb3J0IHsgSVN0b3JlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSVRva2VuTW9kZWwgfSBmcm9tICcuLi90b2tlbi9pbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgTG9jYWxTdG9yYWdlU3RvcmUgaW1wbGVtZW50cyBJU3RvcmUge1xuICBnZXQoa2V5OiBzdHJpbmcpOiBJVG9rZW5Nb2RlbCB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSB8fCAne30nKSB8fCB7fTtcbiAgfVxuXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IElUb2tlbk1vZGVsKTogYm9vbGVhbiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmVtb3ZlKGtleTogc3RyaW5nKSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSVN0b3JlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSVRva2VuTW9kZWwgfSBmcm9tICcuLi90b2tlbi9pbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgTWVtb3J5U3RvcmUgaW1wbGVtZW50cyBJU3RvcmUge1xuICBwcml2YXRlIGNhY2hlOiB7IFtrZXk6IHN0cmluZ106IElUb2tlbk1vZGVsIH0gPSB7fTtcblxuICBnZXQoa2V5OiBzdHJpbmcpOiBJVG9rZW5Nb2RlbCB7XG4gICAgcmV0dXJuIHRoaXMuY2FjaGVba2V5XSB8fCA8YW55Pnt9O1xuICB9XG5cbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogSVRva2VuTW9kZWwpOiBib29sZWFuIHtcbiAgICB0aGlzLmNhY2hlW2tleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJlbW92ZShrZXk6IHN0cmluZykge1xuICAgIHRoaXMuY2FjaGVba2V5XSA9IG51bGw7XG4gIH1cbn1cbiIsImltcG9ydCB7IElTdG9yZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IElUb2tlbk1vZGVsIH0gZnJvbSAnLi4vdG9rZW4vaW50ZXJmYWNlJztcblxuZXhwb3J0IGNsYXNzIFNlc3Npb25TdG9yYWdlU3RvcmUgaW1wbGVtZW50cyBJU3RvcmUge1xuICBnZXQoa2V5OiBzdHJpbmcpOiBJVG9rZW5Nb2RlbCB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShrZXkpIHx8ICd7fScpIHx8IHt9O1xuICB9XG5cbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogSVRva2VuTW9kZWwpOiBib29sZWFuIHtcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJlbW92ZShrZXk6IHN0cmluZykge1xuICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIERlbG9uQXV0aENvbmZpZyB7XG4gIC8qKlxuICAgKiDDpcKtwpjDpcKCwqhLRVnDpcKAwrxcbiAgICovXG4gIHN0b3JlX2tleT8gPSAnX3Rva2VuJztcbiAgLyoqXG4gICAqIMOmwpfCoMOmwpXCiMOmwpfCtsOowrfCs8Oowr3CrMOowofCs8OnwpnCu8Olwr3ClcOpwqHCtcOvwrzCjMOlwozChcOmwovCrMOvwrzCmlxuICAgKiAtIMOmwpfCoMOmwpXCiHRva2Vuw6XCgMK8XG4gICAqIC0gdG9rZW7DpcK3wrLDqMK/wofDpsKcwp/Dr8K8wojDqcKZwpBKV1TDr8K8wolcbiAgICovXG4gIHRva2VuX2ludmFsaWRfcmVkaXJlY3Q/ID0gdHJ1ZTtcbiAgLyoqXG4gICAqIHRva2Vuw6jCv8KHw6bCnMKfw6bCl8K2w6nCl8K0w6XCgcKPw6fCp8K7w6XCgMK8w6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYDEwYCDDp8KnwpLDr8K8wojDpcKNwpXDpMK9wo3Dr8K8wprDp8KnwpLDr8K8wolcbiAgICovXG4gIHRva2VuX2V4cF9vZmZzZXQ/ID0gMTA7XG4gIC8qKlxuICAgKiDDpcKPwpHDqcKAwoF0b2tlbsOlwo/CgsOmwpXCsMOlwpDCjcOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmnRva2VuXG4gICAqL1xuICB0b2tlbl9zZW5kX2tleT8gPSAndG9rZW4nO1xuICAvKipcbiAgICogw6XCj8KRw6nCgMKBdG9rZW7DpsKowqHDpsKdwr/Dr8K8wojDqcK7wpjDqMKuwqTDpMK4wrrDr8K8wppgJHt0b2tlbn1gw6/CvMKJw6/CvMKMw6TCvcK/w6fClMKoIGAke3Rva2VufWAgw6jCocKow6fCpMK6dG9rZW7Dp8KCwrnDpMK9wo3Dp8KswqbDr8K8wozDpMK+wovDpcKmwoLDr8K8wppcbiAgICpcbiAgICogLSBgQmVhcmVyICR7dG9rZW59YFxuICAgKi9cbiAgdG9rZW5fc2VuZF90ZW1wbGF0ZT8gPSAnJHt0b2tlbn0nO1xuICAvKipcbiAgICogw6XCj8KRw6nCgMKBdG9rZW7DpcKPwoLDpsKVwrDDpMK9wo3Dp8K9wq7Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppoZWFkZXJcbiAgICovXG4gIHRva2VuX3NlbmRfcGxhY2U/OiAnaGVhZGVyJyB8ICdib2R5JyB8ICd1cmwnID0gJ2hlYWRlcic7XG4gIC8qKlxuICAgKiDDp8KZwrvDpcK9wpXDqcKhwrXDqMK3wq/Dp8KUwrHDpcKcwrDDpcKdwoBcbiAgICovXG4gIGxvZ2luX3VybD8gPSBgL2xvZ2luYDtcbiAgLyoqXG4gICAqIMOlwr/CvcOnwpXCpVRPS0VOw6fCmsKEVVJMw6XCnMKww6XCncKAw6XCiMKXw6jCocKow6/CvMKMw6nCu8KYw6jCrsKkw6XCgMK8w6TCuMK6w6/CvMKaWyAvXFwvbG9naW4vLCAvYXNzZXRzXFwvLywgL3Bhc3Nwb3J0XFwvLyBdXG4gICAqL1xuICBpZ25vcmVzPzogUmVnRXhwW10gPSBbL1xcL2xvZ2luLywgL2Fzc2V0c1xcLy8sIC9wYXNzcG9ydFxcLy9dO1xuICAvKipcbiAgICogw6XChcKBw6jCrsK4w6XCjMK/w6XCkMKNw6fCmcK7w6XCvcKVS0VZw6/CvMKMw6jCi8Klw6jCr8K3w6bCscKCw6XCj8KCw6bClcKww6TCuMKtw6XCuMKmw6bCnMKJw6jCr8KlS0VZw6jCocKow6fCpMK6w6XCv8K9w6fClcKlVE9LRU5cbiAgICovXG4gIGFsbG93X2Fub255bW91c19rZXk/ID0gYF9hbGxvd19hbm9ueW1vdXNgO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNvbnN0IFdJTkRPVyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxhbnk+KCdXaW5kb3cnKTtcbiIsImltcG9ydCB7IEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2ltcGxlVG9rZW5Nb2RlbCB9IGZyb20gJy4vc2ltcGxlL3NpbXBsZS5tb2RlbCc7XG5pbXBvcnQgeyBKV1RUb2tlbk1vZGVsIH0gZnJvbSAnLi9qd3Qvand0Lm1vZGVsJztcbmltcG9ydCB7IERlbG9uQXV0aENvbmZpZyB9IGZyb20gJy4uL2F1dGguY29uZmlnJztcbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJy4uL3dpbl90b2tlbnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gQ2hlY2tTaW1wbGUobW9kZWw6IFNpbXBsZVRva2VuTW9kZWwpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICBtb2RlbCAhPSBudWxsICYmIHR5cGVvZiBtb2RlbC50b2tlbiA9PT0gJ3N0cmluZycgJiYgbW9kZWwudG9rZW4ubGVuZ3RoID4gMFxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2hlY2tKd3QobW9kZWw6IEpXVFRva2VuTW9kZWwsIG9mZnNldDogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiBtb2RlbCAhPSBudWxsICYmIG1vZGVsLnRva2VuICYmICFtb2RlbC5pc0V4cGlyZWQob2Zmc2V0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRvTG9naW4ob3B0aW9uczogRGVsb25BdXRoQ29uZmlnLCBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgaWYgKG9wdGlvbnMudG9rZW5faW52YWxpZF9yZWRpcmVjdCA9PT0gdHJ1ZSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKC9eaHR0cHM/OlxcL1xcLy9nLnRlc3Qob3B0aW9ucy5sb2dpbl91cmwpKSB7XG4gICAgICAgIGluamVjdG9yLmdldChXSU5ET1cpLmxvY2F0aW9uLmhyZWYgPSBvcHRpb25zLmxvZ2luX3VybDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluamVjdG9yLmdldChSb3V0ZXIpLm5hdmlnYXRlKFtvcHRpb25zLmxvZ2luX3VybF0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RvciwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBSZXF1ZXN0LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cFNlbnRFdmVudCxcbiAgSHR0cEhlYWRlclJlc3BvbnNlLFxuICBIdHRwUHJvZ3Jlc3NFdmVudCxcbiAgSHR0cFJlc3BvbnNlLFxuICBIdHRwVXNlckV2ZW50LFxuICBIdHRwRXZlbnQsXG4gIEh0dHBFcnJvclJlc3BvbnNlLFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBfSHR0cENsaWVudCB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5cbmltcG9ydCB7IElUb2tlbk1vZGVsIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGVsb25BdXRoQ29uZmlnIH0gZnJvbSAnLi4vYXV0aC5jb25maWcnO1xuaW1wb3J0IHsgVG9Mb2dpbiB9IGZyb20gJy4vaGVscGVyJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IpIHt9XG5cbiAgcHJvdGVjdGVkIG1vZGVsOiBJVG9rZW5Nb2RlbDtcblxuICBhYnN0cmFjdCBpc0F1dGgob3B0aW9uczogRGVsb25BdXRoQ29uZmlnKTogYm9vbGVhbjtcblxuICBhYnN0cmFjdCBzZXRSZXEoXG4gICAgcmVxOiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG9wdGlvbnM6IERlbG9uQXV0aENvbmZpZyxcbiAgKTogSHR0cFJlcXVlc3Q8YW55PjtcblxuICBpbnRlcmNlcHQoXG4gICAgcmVxOiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyLFxuICApOiBPYnNlcnZhYmxlPFxuICAgIHwgSHR0cFNlbnRFdmVudFxuICAgIHwgSHR0cEhlYWRlclJlc3BvbnNlXG4gICAgfCBIdHRwUHJvZ3Jlc3NFdmVudFxuICAgIHwgSHR0cFJlc3BvbnNlPGFueT5cbiAgICB8IEh0dHBVc2VyRXZlbnQ8YW55PlxuICA+IHtcbiAgICBjb25zdCBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIG5ldyBEZWxvbkF1dGhDb25maWcoKSxcbiAgICAgIHRoaXMuaW5qZWN0b3IuZ2V0KERlbG9uQXV0aENvbmZpZywgbnVsbCksXG4gICAgKTtcbiAgICBpZiAob3B0aW9ucy5pZ25vcmVzKSB7XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygb3B0aW9ucy5pZ25vcmVzIGFzIFJlZ0V4cFtdKSB7XG4gICAgICAgIGlmIChpdGVtLnRlc3QocmVxLnVybCkpIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIG9wdGlvbnMuYWxsb3dfYW5vbnltb3VzX2tleSAmJlxuICAgICAgKHJlcS5wYXJhbXMuaGFzKG9wdGlvbnMuYWxsb3dfYW5vbnltb3VzX2tleSkgfHxcbiAgICAgICAgdGhpcy5pbmplY3RvclxuICAgICAgICAgIC5nZXQoUm91dGVyKVxuICAgICAgICAgIC5wYXJzZVVybChyZXEudXJsV2l0aFBhcmFtcylcbiAgICAgICAgICAucXVlcnlQYXJhbU1hcC5oYXMob3B0aW9ucy5hbGxvd19hbm9ueW1vdXNfa2V5KSlcbiAgICApIHtcbiAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQXV0aChvcHRpb25zKSkge1xuICAgICAgcmVxID0gdGhpcy5zZXRSZXEocmVxLCBvcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgVG9Mb2dpbihvcHRpb25zLCB0aGlzLmluamVjdG9yKTtcbiAgICAgIC8vIFVuYWJsZSB0byBndWFyYW50ZWUgaW50ZXJjZXB0b3IgZXhlY3V0aW9uIG9yZGVyXG4gICAgICAvLyBTbyBjYW5jZWwgdGhlIGxvYWRpbmcgc3RhdGUgYXMgbXVjaCBhcyBwb3NzaWJsZVxuICAgICAgY29uc3QgaGMgPSB0aGlzLmluamVjdG9yLmdldChfSHR0cENsaWVudCwgbnVsbCk7XG4gICAgICBpZiAoaGMpIGhjLmVuZCgpO1xuICAgICAgLy8gSW50ZXJydXB0IEh0dHAgcmVxdWVzdCwgc28gbmVlZCB0byBnZW5lcmF0ZSBhIG5ldyBPYnNlcnZhYmxlXG4gICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxIdHRwRXZlbnQ8YW55Pj4pID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0gbmV3IEh0dHBFcnJvclJlc3BvbnNlKHtcbiAgICAgICAgICB1cmw6IHJlcS51cmwsXG4gICAgICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXG4gICAgICAgICAgc3RhdHVzOiA0MDEsXG4gICAgICAgICAgc3RhdHVzVGV4dDogYEZyb20gQXV0aCBJbnRlcmNlcHQgLS0+IGh0dHBzOi8vbmctYWxhaW4uY29tL2RvY3MvYXV0aGAsXG4gICAgICAgIH0pO1xuICAgICAgICBvYnNlcnZlci5lcnJvcihyZXMpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJVG9rZW5TZXJ2aWNlLCBJVG9rZW5Nb2RlbCB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IERBX1NUT1JFX1RPS0VOLCBJU3RvcmUgfSBmcm9tICcuLi9zdG9yZS9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGVsb25BdXRoQ29uZmlnIH0gZnJvbSAnLi4vYXV0aC5jb25maWcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVG9rZW5TZXJ2aWNlIGltcGxlbWVudHMgSVRva2VuU2VydmljZSB7XG4gIHByaXZhdGUgY2hhbmdlJDogQmVoYXZpb3JTdWJqZWN0PElUb2tlbk1vZGVsPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8XG4gICAgSVRva2VuTW9kZWxcbiAgPihudWxsKTtcbiAgcHJpdmF0ZSBkYXRhOiBJVG9rZW5Nb2RlbDtcbiAgcHJpdmF0ZSBfcmVkaXJlY3Q6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG9wdGlvbnM6IERlbG9uQXV0aENvbmZpZyxcbiAgICBASW5qZWN0KERBX1NUT1JFX1RPS0VOKSBwcml2YXRlIHN0b3JlOiBJU3RvcmUsXG4gICkge31cblxuICBnZXQgbG9naW5fdXJsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5sb2dpbl91cmw7XG4gIH1cblxuICBzZXQgcmVkaXJlY3QodXJsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZWRpcmVjdCA9IHVybDtcbiAgfVxuXG4gIGdldCByZWRpcmVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVkaXJlY3QgfHwgJy8nO1xuICB9XG5cbiAgc2V0KGRhdGE6IElUb2tlbk1vZGVsKTogYm9vbGVhbiB7XG4gICAgdGhpcy5jaGFuZ2UkLm5leHQoZGF0YSk7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2V0KHRoaXMub3B0aW9ucy5zdG9yZV9rZXksIGRhdGEpO1xuICB9XG5cbiAgZ2V0KHR5cGU/OiBhbnkpO1xuICBnZXQ8VCBleHRlbmRzIElUb2tlbk1vZGVsPih0eXBlPzogeyBuZXcgKCk6IFQgfSk6IFQge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnN0b3JlLmdldCh0aGlzLm9wdGlvbnMuc3RvcmVfa2V5KTtcbiAgICByZXR1cm4gdHlwZSA/IChPYmplY3QuYXNzaWduKG5ldyB0eXBlKCksIGRhdGEpIGFzIFQpIDogKGRhdGEgYXMgVCk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmNoYW5nZSQubmV4dChudWxsKTtcbiAgICB0aGlzLnN0b3JlLnJlbW92ZSh0aGlzLm9wdGlvbnMuc3RvcmVfa2V5KTtcbiAgfVxuXG4gIGNoYW5nZSgpOiBPYnNlcnZhYmxlPElUb2tlbk1vZGVsPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlJC5waXBlKHNoYXJlKCkpO1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdXJsQmFzZTY0RGVjb2RlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IG91dHB1dCA9IHN0ci5yZXBsYWNlKC8tL2csICcrJykucmVwbGFjZSgvXy9nLCAnLycpO1xuICBzd2l0Y2ggKG91dHB1dC5sZW5ndGggJSA0KSB7XG4gICAgY2FzZSAwOiB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSAyOiB7XG4gICAgICBvdXRwdXQgKz0gJz09JztcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIDM6IHtcbiAgICAgIG91dHB1dCArPSAnPSc7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgZGVmYXVsdDoge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgJ2F0b2InIGZhaWxlZDogVGhlIHN0cmluZyB0byBiZSBkZWNvZGVkIGlzIG5vdCBjb3JyZWN0bHkgZW5jb2RlZC5gLFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGI2NERlY29kZVVuaWNvZGUob3V0cHV0KTtcbn1cblxuZnVuY3Rpb24gYjY0ZGVjb2RlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgY2hhcnMgPVxuICAgICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSc7XG4gIGxldCBvdXRwdXQ6IHN0cmluZyA9ICcnO1xuXG4gIHN0ciA9IFN0cmluZyhzdHIpLnJlcGxhY2UoLz0rJC8sICcnKTtcblxuICBmb3IgKFxuICAgIC8vIGluaXRpYWxpemUgcmVzdWx0IGFuZCBjb3VudGVyc1xuICAgIGxldCBiYzogbnVtYmVyID0gMCwgYnM6IGFueSwgYnVmZmVyOiBhbnksIGlkeDogbnVtYmVyID0gMDtcbiAgICAvLyBnZXQgbmV4dCBjaGFyYWN0ZXJcbiAgICAoYnVmZmVyID0gc3RyLmNoYXJBdChpZHgrKykpO1xuICAgIC8vIGNoYXJhY3RlciBmb3VuZCBpbiB0YWJsZT8gaW5pdGlhbGl6ZSBiaXQgc3RvcmFnZSBhbmQgYWRkIGl0cyBhc2NpaSB2YWx1ZTtcbiAgICB+YnVmZmVyICYmXG4gICAgKChicyA9IGJjICUgNCA/IGJzICogNjQgKyBidWZmZXIgOiBidWZmZXIpLFxuICAgIC8vIGFuZCBpZiBub3QgZmlyc3Qgb2YgZWFjaCA0IGNoYXJhY3RlcnMsXG4gICAgLy8gY29udmVydCB0aGUgZmlyc3QgOCBiaXRzIHRvIG9uZSBhc2NpaSBjaGFyYWN0ZXJcbiAgICBiYysrICUgNClcbiAgICAgID8gKG91dHB1dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDI1NSAmIChicyA+PiAoKC0yICogYmMpICYgNikpKSlcbiAgICAgIDogMFxuICApIHtcbiAgICAvLyB0cnkgdG8gZmluZCBjaGFyYWN0ZXIgaW4gdGFibGUgKDAtNjMsIG5vdCBmb3VuZCA9PiAtMSlcbiAgICBidWZmZXIgPSBjaGFycy5pbmRleE9mKGJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vZG9jcy9XZWIvQVBJL1dpbmRvd0Jhc2U2NC9CYXNlNjRfZW5jb2RpbmdfYW5kX2RlY29kaW5nI1RoZV9Vbmljb2RlX1Byb2JsZW1cbmZ1bmN0aW9uIGI2NERlY29kZVVuaWNvZGUoc3RyOiBhbnkpIHtcbiAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChcbiAgICBBcnJheS5wcm90b3R5cGUubWFwXG4gICAgICAuY2FsbChiNjRkZWNvZGUoc3RyKSwgKGM6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gJyUnICsgKCcwMCcgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMik7XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpLFxuICApO1xufVxuIiwiaW1wb3J0IHsgSVRva2VuTW9kZWwgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgdXJsQmFzZTY0RGVjb2RlIH0gZnJvbSAnLi9qd3QuaGVscGVyJztcblxuZXhwb3J0IGNsYXNzIEpXVFRva2VuTW9kZWwgaW1wbGVtZW50cyBJVG9rZW5Nb2RlbCB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcblxuICB0b2tlbjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDDqMKOwrfDpcKPwpbDqMK9wr3DqMKNwrfDpMK/wqHDpsKBwq9cbiAgICovXG4gIGdldCBwYXlsb2FkKCk6IGFueSB7XG4gICAgY29uc3QgcGFydHMgPSAodGhpcy50b2tlbiB8fCAnJykuc3BsaXQoJy4nKTtcbiAgICBpZiAocGFydHMubGVuZ3RoICE9PSAzKSB0aHJvdyBuZXcgRXJyb3IoJ0pXVCBtdXN0IGhhdmUgMyBwYXJ0cycpO1xuXG4gICAgY29uc3QgZGVjb2RlZCA9IHVybEJhc2U2NERlY29kZShwYXJ0c1sxXSk7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoZGVjb2RlZCk7XG4gIH1cblxuICAvKipcbiAgICogw6bCo8KAw6bCn8KlVG9rZW7DpsKYwq/DpcKQwqbDqMK/wofDpsKcwp/Dr8K8woxgcGF5bG9hZGAgw6XCv8KFw6nCocK7w6XCjMKFw6XCkMKrIGBleHBgIMOmwpfCtsOmwpzCicOmwpXCiFxuICAgKlxuICAgKiBAcGFyYW0gb2Zmc2V0U2Vjb25kcyDDpcKBwo/Dp8KnwrvDqcKHwo9cbiAgICovXG4gIGlzRXhwaXJlZChvZmZzZXRTZWNvbmRzOiBudW1iZXIgPSAwKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZGVjb2RlZCA9IHRoaXMucGF5bG9hZDtcbiAgICBpZiAoIWRlY29kZWQuaGFzT3duUHJvcGVydHkoJ2V4cCcpKSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgICBkYXRlLnNldFVUQ1NlY29uZHMoZGVjb2RlZC5leHApO1xuXG4gICAgcmV0dXJuICEoZGF0ZS52YWx1ZU9mKCkgPiBuZXcgRGF0ZSgpLnZhbHVlT2YoKSArIG9mZnNldFNlY29uZHMgKiAxMDAwKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IERlbG9uQXV0aENvbmZpZyB9IGZyb20gJy4uLy4uL2F1dGguY29uZmlnJztcbmltcG9ydCB7IEJhc2VJbnRlcmNlcHRvciB9IGZyb20gJy4uL2Jhc2UuaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgREFfU0VSVklDRV9UT0tFTiB9IGZyb20gJy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBKV1RUb2tlbk1vZGVsIH0gZnJvbSAnLi9qd3QubW9kZWwnO1xuaW1wb3J0IHsgQ2hlY2tKd3QgfSBmcm9tICcuLi9oZWxwZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSldUSW50ZXJjZXB0b3IgZXh0ZW5kcyBCYXNlSW50ZXJjZXB0b3Ige1xuICBpc0F1dGgob3B0aW9uczogRGVsb25BdXRoQ29uZmlnKTogYm9vbGVhbiB7XG4gICAgdGhpcy5tb2RlbCA9IHRoaXMuaW5qZWN0b3JcbiAgICAgIC5nZXQoREFfU0VSVklDRV9UT0tFTilcbiAgICAgIC5nZXQ8SldUVG9rZW5Nb2RlbD4oSldUVG9rZW5Nb2RlbCk7XG4gICAgcmV0dXJuIENoZWNrSnd0KHRoaXMubW9kZWwgYXMgSldUVG9rZW5Nb2RlbCwgb3B0aW9ucy50b2tlbl9leHBfb2Zmc2V0KTtcbiAgfVxuXG4gIHNldFJlcShyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG9wdGlvbnM6IERlbG9uQXV0aENvbmZpZyk6IEh0dHBSZXF1ZXN0PGFueT4ge1xuICAgIHJldHVybiByZXEuY2xvbmUoe1xuICAgICAgc2V0SGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dGhpcy5tb2RlbC50b2tlbn1gLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIENhbkFjdGl2YXRlQ2hpbGQsIENhbkxvYWQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgREFfU0VSVklDRV9UT0tFTiwgSVRva2VuU2VydmljZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBKV1RUb2tlbk1vZGVsIH0gZnJvbSAnLi9qd3QubW9kZWwnO1xuaW1wb3J0IHsgRGVsb25BdXRoQ29uZmlnIH0gZnJvbSAnLi4vLi4vYXV0aC5jb25maWcnO1xuaW1wb3J0IHsgQ2hlY2tKd3QsIFRvTG9naW4gfSBmcm9tICcuLi9oZWxwZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSldUR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSwgQ2FuQWN0aXZhdGVDaGlsZCwgQ2FuTG9hZCB7XG4gIHByaXZhdGUgY29nOiBEZWxvbkF1dGhDb25maWc7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoREFfU0VSVklDRV9UT0tFTikgcHJpdmF0ZSBzcnY6IElUb2tlblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgY29nOiBEZWxvbkF1dGhDb25maWcsXG4gICkge1xuICAgIHRoaXMuY29nID0gT2JqZWN0LmFzc2lnbihuZXcgRGVsb25BdXRoQ29uZmlnKCksIGNvZyk7XG4gIH1cblxuICBwcml2YXRlIHByb2Nlc3MoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcmVzID0gQ2hlY2tKd3QoXG4gICAgICB0aGlzLnNydi5nZXQ8SldUVG9rZW5Nb2RlbD4oSldUVG9rZW5Nb2RlbCksXG4gICAgICB0aGlzLmNvZy50b2tlbl9leHBfb2Zmc2V0LFxuICAgICk7XG4gICAgaWYgKCFyZXMpIHtcbiAgICAgIFRvTG9naW4odGhpcy5jb2csIHRoaXMuaW5qZWN0b3IpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgLy8gbGF6eSBsb2FkaW5nXG4gIGNhbkxvYWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VzcygpO1xuICB9XG4gIC8vIGFsbCBjaGlsZHJlbiByb3V0ZVxuICBjYW5BY3RpdmF0ZUNoaWxkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3MoKTtcbiAgfVxuICAvLyByb3V0ZVxuICBjYW5BY3RpdmF0ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IElUb2tlbk1vZGVsIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcblxuZXhwb3J0IGNsYXNzIFNpbXBsZVRva2VuTW9kZWwgaW1wbGVtZW50cyBJVG9rZW5Nb2RlbCB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcblxuICB0b2tlbjogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IERlbG9uQXV0aENvbmZpZyB9IGZyb20gJy4uLy4uL2F1dGguY29uZmlnJztcbmltcG9ydCB7IFNpbXBsZVRva2VuTW9kZWwgfSBmcm9tICcuL3NpbXBsZS5tb2RlbCc7XG5pbXBvcnQgeyBCYXNlSW50ZXJjZXB0b3IgfSBmcm9tICcuLi9iYXNlLmludGVyY2VwdG9yJztcbmltcG9ydCB7IERBX1NFUlZJQ0VfVE9LRU4gfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ2hlY2tTaW1wbGUgfSBmcm9tICcuLi9oZWxwZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2ltcGxlSW50ZXJjZXB0b3IgZXh0ZW5kcyBCYXNlSW50ZXJjZXB0b3Ige1xuICBpc0F1dGgob3B0aW9uczogRGVsb25BdXRoQ29uZmlnKTogYm9vbGVhbiB7XG4gICAgdGhpcy5tb2RlbCA9IHRoaXMuaW5qZWN0b3IuZ2V0KERBX1NFUlZJQ0VfVE9LRU4pLmdldCgpIGFzIFNpbXBsZVRva2VuTW9kZWw7XG4gICAgcmV0dXJuIENoZWNrU2ltcGxlKHRoaXMubW9kZWwgYXMgU2ltcGxlVG9rZW5Nb2RlbCk7XG4gIH1cblxuICBzZXRSZXEocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBvcHRpb25zOiBEZWxvbkF1dGhDb25maWcpOiBIdHRwUmVxdWVzdDxhbnk+IHtcbiAgICBjb25zdCB0b2tlbiA9IG9wdGlvbnMudG9rZW5fc2VuZF90ZW1wbGF0ZS5yZXBsYWNlKFxuICAgICAgL1xcJFxceyhbXFx3XSspXFx9L2csXG4gICAgICAoXzogc3RyaW5nLCBnKSA9PiB0aGlzLm1vZGVsW2ddLFxuICAgICk7XG4gICAgc3dpdGNoIChvcHRpb25zLnRva2VuX3NlbmRfcGxhY2UpIHtcbiAgICAgIGNhc2UgJ2hlYWRlcic6XG4gICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICBvYmpbb3B0aW9ucy50b2tlbl9zZW5kX2tleV0gPSB0b2tlbjtcbiAgICAgICAgcmVxID0gcmVxLmNsb25lKHtcbiAgICAgICAgICBzZXRIZWFkZXJzOiBvYmosXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JvZHknOlxuICAgICAgICBjb25zdCBib2R5ID0gcmVxLmJvZHkgfHwge307XG4gICAgICAgIGJvZHlbb3B0aW9ucy50b2tlbl9zZW5kX2tleV0gPSB0b2tlbjtcbiAgICAgICAgcmVxID0gcmVxLmNsb25lKHtcbiAgICAgICAgICBib2R5OiBib2R5LFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd1cmwnOlxuICAgICAgICByZXEgPSByZXEuY2xvbmUoe1xuICAgICAgICAgIHBhcmFtczogcmVxLnBhcmFtcy5hcHBlbmQob3B0aW9ucy50b2tlbl9zZW5kX2tleSwgdG9rZW4pLFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiByZXE7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBDYW5BY3RpdmF0ZUNoaWxkLCBDYW5Mb2FkIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IERBX1NFUlZJQ0VfVE9LRU4sIElUb2tlblNlcnZpY2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ2hlY2tTaW1wbGUsIFRvTG9naW4gfSBmcm9tICcuLi9oZWxwZXInO1xuaW1wb3J0IHsgRGVsb25BdXRoQ29uZmlnIH0gZnJvbSAnLi4vLi4vYXV0aC5jb25maWcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2ltcGxlR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSwgQ2FuQWN0aXZhdGVDaGlsZCwgQ2FuTG9hZCB7XG4gIHByaXZhdGUgY29nOiBEZWxvbkF1dGhDb25maWc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChEQV9TRVJWSUNFX1RPS0VOKSBwcml2YXRlIHNydjogSVRva2VuU2VydmljZSxcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBjb2c6IERlbG9uQXV0aENvbmZpZyxcbiAgKSB7XG4gICAgdGhpcy5jb2cgPSBPYmplY3QuYXNzaWduKG5ldyBEZWxvbkF1dGhDb25maWcoKSwgY29nKTtcbiAgfVxuXG4gIHByaXZhdGUgcHJvY2VzcygpOiBib29sZWFuIHtcbiAgICBjb25zdCByZXMgPSBDaGVja1NpbXBsZSh0aGlzLnNydi5nZXQoKSk7XG4gICAgaWYgKCFyZXMpIHtcbiAgICAgIFRvTG9naW4odGhpcy5jb2csIHRoaXMuaW5qZWN0b3IpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgLy8gbGF6eSBsb2FkaW5nXG4gIGNhbkxvYWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VzcygpO1xuICB9XG4gIC8vIGFsbCBjaGlsZHJlbiByb3V0ZVxuICBjYW5BY3RpdmF0ZUNoaWxkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3MoKTtcbiAgfVxuICAvLyByb3V0ZVxuICBjYW5BY3RpdmF0ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERlbG9uQXV0aENvbmZpZyB9IGZyb20gJy4vYXV0aC5jb25maWcnO1xuaW1wb3J0IHsgREFfU1RPUkVfVE9LRU4gfSBmcm9tICcuL3N0b3JlL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBEQV9TRVJWSUNFX1RPS0VOIH0gZnJvbSAnLi90b2tlbi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU3RvcmUgfSBmcm9tICcuL3N0b3JlL2xvY2FsLXN0b3JhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBUb2tlblNlcnZpY2UgfSBmcm9tICcuL3Rva2VuL3Rva2VuLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2ltcGxlR3VhcmQgfSBmcm9tICcuL3Rva2VuL3NpbXBsZS9zaW1wbGUuZ3VhcmQnO1xuaW1wb3J0IHsgSldUR3VhcmQgfSBmcm9tICcuL3Rva2VuL2p3dC9qd3QuZ3VhcmQnO1xuaW1wb3J0IHsgV0lORE9XIH0gZnJvbSAnLi93aW5fdG9rZW5zJztcblxuQE5nTW9kdWxlKHt9KVxuZXhwb3J0IGNsYXNzIERlbG9uQXV0aE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRGVsb25BdXRoTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogV0lORE9XLCB1c2VWYWx1ZTogd2luZG93IH0sXG4gICAgICAgIERlbG9uQXV0aENvbmZpZyxcbiAgICAgICAgU2ltcGxlR3VhcmQsXG4gICAgICAgIEpXVEd1YXJkLFxuICAgICAgICB7IHByb3ZpZGU6IERBX1NUT1JFX1RPS0VOLCB1c2VDbGFzczogTG9jYWxTdG9yYWdlU3RvcmUgfSxcbiAgICAgICAgeyBwcm92aWRlOiBEQV9TRVJWSUNFX1RPS0VOLCB1c2VDbGFzczogVG9rZW5TZXJ2aWNlIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0EsSUFBYSxnQkFBZ0IsR0FBRyxJQUFJLGNBQWMsQ0FDaEQsZ0NBQWdDLENBQ2pDOzs7Ozs7QUNMRDtBQVdBLElBQU0sUUFBUSxHQUFHLHNCQUFzQixDQUFDOztBQUN4QyxJQUFNLFlBQVksR0FBRyxnQ0FBZ0MsQ0FBQzs7SUFVcEQsdUJBQ29DLFlBQTJCLEVBQ25DLEdBQVEsRUFDMUI7UUFGMEIsaUJBQVksR0FBWixZQUFZLENBQWU7UUFDbkMsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUMxQixXQUFNLEdBQU4sTUFBTTtLQUNaOzs7Ozs7Ozs7Ozs7Ozs7SUFxQ0osNkJBQUs7Ozs7Ozs7SUFBTCxVQUNFLEdBQVcsRUFDWCxRQUFzQixFQUN0QixPQUdNO1FBTlIsaUJBMkNDO1FBekNDLHlCQUFBLEVBQUEsY0FBc0I7UUFDdEIsd0JBQUEsRUFBQSxZQUdNO1FBRU4sT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQ3JCO1lBQ0UsSUFBSSxFQUFFLFFBQVE7WUFDZCxjQUFjLEVBQ1osNkRBQTZEO1NBQ2hFLEVBQ0QsT0FBTyxDQUNSLENBQUM7UUFDRixZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDN0MsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtZQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQzdCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQztZQUN2QixJQUFJLEtBQUksQ0FBQyxJQUFJLElBQUksS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2pDLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7Z0JBRW5CLElBQUksS0FBSyxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ3BDLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7b0JBQUUsS0FBSyxHQUFHLElBQUksQ0FBQzs7Z0JBR3hDLElBQUksS0FBSyxFQUFFO29CQUNULEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUM5QjtnQkFFRCxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDMUIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUMxQjtTQUNGLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDUixPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQyxRQUErQjtZQUN2RCxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztTQUMxQixDQUFDLENBQUM7S0FDSjs7Ozs7Ozs7Ozs7O0lBT0QsZ0NBQVE7Ozs7OztJQUFSLFVBQVMsT0FBOEI7O1FBRXJDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ25ELE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztTQUN6Qzs7UUFFRCxJQUFJLElBQUksR0FBZ0IsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDdEMsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7O1lBQy9CLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JELElBQUkscUJBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQSxDQUFDO1NBQ2hFO2FBQU07WUFDTCxJQUFJLEdBQUcsT0FBTyxDQUFDO1NBQ2hCO1FBRUQsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDOztRQUU1QixJQUFNLEdBQUcsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsQ0FBQztRQUN0RCxZQUFZLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDOztRQUN0QyxJQUFNLElBQUksR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVDLFlBQVksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsSUFBSSxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ3JCLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoQjthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDaEM7UUFFRCxPQUFPLElBQUksQ0FBQztLQUNiOzs7O0lBRUQsbUNBQVc7OztJQUFYO1FBQ0UsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztLQUNuQjs7Z0JBbElGLFVBQVU7Ozs7Z0RBT04sTUFBTSxTQUFDLGdCQUFnQjtnREFDdkIsTUFBTSxTQUFDLFFBQVE7Z0JBdkJYLE1BQU07O3dCQURmOzs7Ozs7O0FDQUE7QUFHQSxJQUFhLGNBQWMsR0FBRyxJQUFJLGNBQWMsQ0FBUyxrQkFBa0IsQ0FBQzs7Ozs7O0FDQTVFLElBQUE7Ozs7Ozs7SUFDRSwrQkFBRzs7OztJQUFILFVBQUksR0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUM1RDs7Ozs7O0lBRUQsK0JBQUc7Ozs7O0lBQUgsVUFBSSxHQUFXLEVBQUUsS0FBa0I7UUFDakMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2pELE9BQU8sSUFBSSxDQUFDO0tBQ2I7Ozs7O0lBRUQsa0NBQU07Ozs7SUFBTixVQUFPLEdBQVc7UUFDaEIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUM5Qjs0QkFmSDtJQWdCQzs7Ozs7O0FDYkQsSUFBQTs7cUJBQ2tELEVBQUU7Ozs7OztJQUVsRCx5QkFBRzs7OztJQUFILFVBQUksR0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsc0JBQVMsRUFBRSxDQUFBLENBQUM7S0FDbkM7Ozs7OztJQUVELHlCQUFHOzs7OztJQUFILFVBQUksR0FBVyxFQUFFLEtBQWtCO1FBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLE9BQU8sSUFBSSxDQUFDO0tBQ2I7Ozs7O0lBRUQsNEJBQU07Ozs7SUFBTixVQUFPLEdBQVc7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7S0FDeEI7c0JBakJIO0lBa0JDOzs7Ozs7QUNmRCxJQUFBOzs7Ozs7O0lBQ0UsaUNBQUc7Ozs7SUFBSCxVQUFJLEdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDOUQ7Ozs7OztJQUVELGlDQUFHOzs7OztJQUFILFVBQUksR0FBVyxFQUFFLEtBQWtCO1FBQ2pDLGNBQWMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNuRCxPQUFPLElBQUksQ0FBQztLQUNiOzs7OztJQUVELG9DQUFNOzs7O0lBQU4sVUFBTyxHQUFXO1FBQ2hCLGNBQWMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDaEM7OEJBZkg7SUFnQkM7Ozs7OztBQ2hCRCxJQUFBOzs7Ozt5QkFJZSxRQUFROzs7Ozs7c0NBTUssSUFBSTs7OztnQ0FJVixFQUFFOzs7OzhCQUlKLE9BQU87Ozs7OzttQ0FNRixVQUFVOzs7O2dDQUljLFFBQVE7Ozs7eUJBSTFDLFFBQVE7Ozs7dUJBSUEsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksQ0FBQzs7OzttQ0FJbkMsa0JBQWtCOzswQkF4QzNDO0lBeUNDOzs7Ozs7QUN6Q0Q7QUFFQSxJQUFhLE1BQU0sR0FBRyxJQUFJLGNBQWMsQ0FBTSxRQUFRLENBQUM7Ozs7OztBQ0R2RDs7OztBQU1BLHFCQUE0QixLQUF1QjtJQUNqRCxRQUNFLEtBQUssSUFBSSxJQUFJLElBQUksT0FBTyxLQUFLLENBQUMsS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQzFFO0NBQ0g7Ozs7OztBQUVELGtCQUF5QixLQUFvQixFQUFFLE1BQWM7SUFDM0QsT0FBTyxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0NBQ2pFOzs7Ozs7QUFFRCxpQkFBd0IsT0FBd0IsRUFBRSxRQUFrQjtJQUNsRSxJQUFJLE9BQU8sQ0FBQyxzQkFBc0IsS0FBSyxJQUFJLEVBQUU7UUFDM0MsVUFBVSxDQUFDO1lBQ1QsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDM0MsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7YUFDeEQ7aUJBQU07Z0JBQ0wsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzthQUNwRDtTQUNGLENBQUMsQ0FBQztLQUNKO0NBQ0Y7Ozs7Ozs7Ozs7SUNKQyx5QkFBa0MsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtLQUFJOzs7Ozs7SUFXeEQsbUNBQVM7Ozs7O0lBQVQsVUFDRSxHQUFxQixFQUNyQixJQUFpQjs7O1FBUWpCLElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQzNCLElBQUksZUFBZSxFQUFFLEVBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FDekMsQ0FBQztRQUNGLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTs7Z0JBQ25CLHlDQUFtQixPQUFPLENBQUMsT0FBbUIsOENBQUU7b0JBQTNDLElBQU0sSUFBSSxXQUFBO29CQUNiLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO3dCQUFFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDakQ7Ozs7Ozs7OztTQUNGO1FBRUQsSUFDRSxPQUFPLENBQUMsbUJBQW1CO2FBQzFCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLFFBQVE7cUJBQ1YsR0FBRyxDQUFDLE1BQU0sQ0FBQztxQkFDWCxRQUFRLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztxQkFDM0IsYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUNwRDtZQUNBLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN6QjtRQUVELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN4QixHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDakM7YUFBTTtZQUNMLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztZQUdoQyxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDaEQsSUFBSSxFQUFFO2dCQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQzs7WUFFakIsT0FBTyxJQUFJLFVBQVUsQ0FBQyxVQUFDLFFBQWtDOztnQkFDdkQsSUFBTSxHQUFHLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQztvQkFDaEMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHO29CQUNaLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTztvQkFDcEIsTUFBTSxFQUFFLEdBQUc7b0JBQ1gsVUFBVSxFQUFFLHdEQUF3RDtpQkFDckUsQ0FBQyxDQUFDO2dCQUNILFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDckIsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDekI7OztnQkFyRk0sUUFBUSx1QkF1QkYsUUFBUTs7MEJBdkJ2Qjs7Ozs7OztBQ0FBO0lBZUUsc0JBQ1UsU0FDd0IsS0FBYTtRQURyQyxZQUFPLEdBQVAsT0FBTztRQUNpQixVQUFLLEdBQUwsS0FBSyxDQUFRO3VCQVJDLElBQUksZUFBZSxDQUVqRSxJQUFJLENBQUM7S0FPSDtJQUVKLHNCQUFJLG1DQUFTOzs7O1FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1NBQy9COzs7T0FBQTtJQUVELHNCQUFJLGtDQUFROzs7O1FBSVo7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLElBQUksR0FBRyxDQUFDO1NBQzlCOzs7OztRQU5ELFVBQWEsR0FBVztZQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztTQUN0Qjs7O09BQUE7Ozs7O0lBTUQsMEJBQUc7Ozs7SUFBSCxVQUFJLElBQWlCO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDckQ7Ozs7OztJQUdELDBCQUFHOzs7OztJQUFILFVBQTJCLElBQW9COztRQUM3QyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BELE9BQU8sSUFBSSxzQkFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFNLHdCQUFLLElBQVMsRUFBQyxDQUFDO0tBQ3BFOzs7O0lBRUQsNEJBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUMzQzs7OztJQUVELDZCQUFNOzs7SUFBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztLQUNuQzs7Z0JBM0NGLFVBQVU7Ozs7Z0JBRkYsZUFBZTtnREFZbkIsTUFBTSxTQUFDLGNBQWM7O3VCQWpCMUI7Ozs7Ozs7Ozs7O0FDQUEseUJBQWdDLEdBQVc7O0lBQ3pDLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdkQsUUFBUSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUM7UUFDdkIsS0FBSyxDQUFDLEVBQUU7WUFDTixNQUFNO1NBQ1A7UUFDRCxLQUFLLENBQUMsRUFBRTtZQUNOLE1BQU0sSUFBSSxJQUFJLENBQUM7WUFDZixNQUFNO1NBQ1A7UUFDRCxLQUFLLENBQUMsRUFBRTtZQUNOLE1BQU0sSUFBSSxHQUFHLENBQUM7WUFDZCxNQUFNO1NBQ1A7UUFDRCxTQUFTO1lBQ1AsTUFBTSxJQUFJLEtBQUssQ0FDYixtRUFBbUUsQ0FDcEUsQ0FBQztTQUNIO0tBQ0Y7SUFDRCxPQUFPLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0NBQ2pDOzs7OztBQUVELG1CQUFtQixHQUFXOztJQUM1QixJQUFNLEtBQUssR0FDVCxtRUFBbUUsQ0FBQzs7SUFDdEUsSUFBSSxNQUFNLEdBQVcsRUFBRSxDQUFDO0lBRXhCLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVyQzs7SUFFRSxJQUFJLEVBQUUsR0FBVyxDQUFDLEVBQUUsRUFBRSxTQUFLLEVBQUUsTUFBTSxTQUFLLEVBQUUsR0FBRyxHQUFXLENBQUM7O0tBRXhELE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDOztJQUUzQixDQUFDLE1BQU07U0FDTixDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsTUFBTSxHQUFHLE1BQU07OztZQUd6QyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7V0FDSixNQUFNLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDN0QsQ0FBQyxFQUNMOztRQUVBLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ2hDO0lBQ0QsT0FBTyxNQUFNLENBQUM7Q0FDZjs7Ozs7QUFHRCwwQkFBMEIsR0FBUTtJQUNoQyxPQUFPLGtCQUFrQixDQUN2QixLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUc7U0FDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxVQUFDLENBQU07UUFDM0IsT0FBTyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDOUQsQ0FBQztTQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FDWixDQUFDO0NBQ0g7Ozs7OztBQzFERCxJQUVBOzs7SUFRRSxzQkFBSSxrQ0FBTzs7Ozs7Ozs7UUFBWDs7WUFDRSxJQUFNLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM1QyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQztnQkFBRSxNQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7O1lBRWpFLElBQU0sT0FBTyxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDNUI7OztPQUFBOzs7Ozs7Ozs7Ozs7SUFPRCxpQ0FBUzs7Ozs7O0lBQVQsVUFBVSxhQUF5QjtRQUF6Qiw4QkFBQSxFQUFBLGlCQUF5Qjs7UUFDakMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQzs7UUFFaEQsSUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFaEMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLGFBQWEsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUN4RTt3QkFoQ0g7SUFpQ0M7Ozs7Ozs7SUN2Qm1DQSxrQ0FBZTs7Ozs7Ozs7SUFDakQsK0JBQU07Ozs7SUFBTixVQUFPLE9BQXdCO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVE7YUFDdkIsR0FBRyxDQUFDLGdCQUFnQixDQUFDO2FBQ3JCLEdBQUcsQ0FBZ0IsYUFBYSxDQUFDLENBQUM7UUFDckMsT0FBTyxRQUFRLG1CQUFDLElBQUksQ0FBQyxLQUFzQixHQUFFLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0tBQ3hFOzs7Ozs7SUFFRCwrQkFBTTs7Ozs7SUFBTixVQUFPLEdBQXFCLEVBQUUsT0FBd0I7UUFDcEQsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ2YsVUFBVSxFQUFFO2dCQUNWLGFBQWEsRUFBRSxZQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBTzthQUM1QztTQUNGLENBQUMsQ0FBQztLQUNKOztnQkFmRixVQUFVOzt5QkFUWDtFQVVvQyxlQUFlOzs7Ozs7QUNWbkQ7SUFVRSxrQkFDb0MsR0FBa0IsRUFDNUMsVUFDUixHQUFvQjtRQUZjLFFBQUcsR0FBSCxHQUFHLENBQWU7UUFDNUMsYUFBUSxHQUFSLFFBQVE7UUFHaEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksZUFBZSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDdEQ7Ozs7SUFFTywwQkFBTzs7Ozs7UUFDYixJQUFNLEdBQUcsR0FBRyxRQUFRLENBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFnQixhQUFhLENBQUMsRUFDMUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FDMUIsQ0FBQztRQUNGLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbEM7UUFDRCxPQUFPLEdBQUcsQ0FBQzs7Ozs7O0lBSWIsMEJBQU87OztJQUFQO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDdkI7Ozs7O0lBRUQsbUNBQWdCOzs7SUFBaEI7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUN2Qjs7Ozs7SUFFRCw4QkFBVzs7O0lBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUN2Qjs7Z0JBakNGLFVBQVU7Ozs7Z0RBSU4sTUFBTSxTQUFDLGdCQUFnQjtnQkFYQyxRQUFRO2dCQUk1QixlQUFlOzttQkFKeEI7Ozs7Ozs7QUNFQSxJQUFBOzs7MkJBRkE7SUFNQzs7Ozs7OztJQ0lzQ0EscUNBQWU7Ozs7Ozs7O0lBQ3BELGtDQUFNOzs7O0lBQU4sVUFBTyxPQUF3QjtRQUM3QixJQUFJLENBQUMsS0FBSyxxQkFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEdBQUcsRUFBc0IsQ0FBQSxDQUFDO1FBQzNFLE9BQU8sV0FBVyxtQkFBQyxJQUFJLENBQUMsS0FBeUIsRUFBQyxDQUFDO0tBQ3BEOzs7Ozs7SUFFRCxrQ0FBTTs7Ozs7SUFBTixVQUFPLEdBQXFCLEVBQUUsT0FBd0I7UUFBdEQsaUJBMkJDOztRQTFCQyxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUMvQyxnQkFBZ0IsRUFDaEIsVUFBQyxDQUFTLEVBQUUsQ0FBQyxJQUFLLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBQSxDQUNoQyxDQUFDO1FBQ0YsUUFBUSxPQUFPLENBQUMsZ0JBQWdCO1lBQzlCLEtBQUssUUFBUTs7Z0JBQ1gsSUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO2dCQUNmLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUNwQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztvQkFDZCxVQUFVLEVBQUUsR0FBRztpQkFDaEIsQ0FBQyxDQUFDO2dCQUNILE1BQU07WUFDUixLQUFLLE1BQU07O2dCQUNULElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO2dCQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLEtBQUssQ0FBQztnQkFDckMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7b0JBQ2QsSUFBSSxFQUFFLElBQUk7aUJBQ1gsQ0FBQyxDQUFDO2dCQUNILE1BQU07WUFDUixLQUFLLEtBQUs7Z0JBQ1IsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7b0JBQ2QsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDO2lCQUN6RCxDQUFDLENBQUM7Z0JBQ0gsTUFBTTtTQUNUO1FBQ0QsT0FBTyxHQUFHLENBQUM7S0FDWjs7Z0JBbENGLFVBQVU7OzRCQVRYO0VBVXVDLGVBQWU7Ozs7OztBQ1Z0RDtJQVVFLHFCQUNvQyxHQUFrQixFQUM1QyxVQUNSLEdBQW9CO1FBRmMsUUFBRyxHQUFILEdBQUcsQ0FBZTtRQUM1QyxhQUFRLEdBQVIsUUFBUTtRQUdoQixJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxlQUFlLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUN0RDs7OztJQUVPLDZCQUFPOzs7OztRQUNiLElBQU0sR0FBRyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNSLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNsQztRQUNELE9BQU8sR0FBRyxDQUFDOzs7Ozs7SUFJYiw2QkFBTzs7O0lBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUN2Qjs7Ozs7SUFFRCxzQ0FBZ0I7OztJQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ3ZCOzs7OztJQUVELGlDQUFXOzs7SUFBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ3ZCOztnQkEvQkYsVUFBVTs7OztnREFLTixNQUFNLFNBQUMsZ0JBQWdCO2dCQVhDLFFBQVE7Z0JBSTVCLGVBQWU7O3NCQUp4Qjs7Ozs7OztBQ0FBOzs7Ozs7SUFhUyx1QkFBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2dCQUNyQyxlQUFlO2dCQUNmLFdBQVc7Z0JBQ1gsUUFBUTtnQkFDUixFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFO2dCQUN4RCxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFO2FBQ3REO1NBQ0YsQ0FBQztLQUNIOztnQkFkRixRQUFRLFNBQUMsRUFBRTs7MEJBWFo7Ozs7Ozs7Ozs7Ozs7OzsifQ==