import { InjectionToken, Injectable, Inject, Injector, Optional, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { _HttpClient } from '@delon/theme';
import { share } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const DA_SERVICE_TOKEN = new InjectionToken('DELON_AUTH_TOKEN_SERVICE_TOKEN');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const OPENTYPE = '_delonAuthSocialType';
/** @type {?} */
const HREFCALLBACK = '_delonAuthSocialCallbackByHref';
class SocialService {
    /**
     * @param {?} tokenService
     * @param {?} doc
     * @param {?} router
     */
    constructor(tokenService, doc, router) {
        this.tokenService = tokenService;
        this.doc = doc;
        this.router = router;
    }
    /**
     * 跳转至登录页，若为 `type=window` 时，返回值是 `Observable<ITokenModel>`
     * @param {?} url 获取授权地址
     * @param {?=} callback 当 `type=href` 成功时的回调路由地址
     * @param {?=} options
     * @return {?}
     */
    login(url, callback = '/', options = {}) {
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
        this._win$ = setInterval(() => {
            if (this._win && this._win.closed) {
                this.ngOnDestroy();
                /** @type {?} */
                let model = this.tokenService.get();
                if (model && !model.token)
                    model = null;
                // 触发变更通知
                if (model) {
                    this.tokenService.set(model);
                }
                this.observer.next(model);
                this.observer.complete();
            }
        }, 100);
        return Observable.create((observer) => {
            this.observer = observer;
        });
    }
    /**
     * 授权成功后的回调处理
     *
     * @param {?=} rawData 指定回调认证信息，为空时从根据当前URL解析
     * @return {?}
     */
    callback(rawData) {
        // from uri
        if (!rawData && this.router.url.indexOf('?') === -1) {
            throw new Error(`url muse contain a ?`);
        }
        /** @type {?} */
        let data = { token: `` };
        if (typeof rawData === 'string') {
            /** @type {?} */
            const rightUrl = rawData.split('?')[1].split('#')[0];
            data = /** @type {?} */ (this.router.parseUrl('./?' + rightUrl).queryParams);
        }
        else {
            data = rawData;
        }
        if (!data || !data.token)
            throw new Error(`invalide token data`);
        this.tokenService.set(data);
        /** @type {?} */
        const url = localStorage.getItem(HREFCALLBACK) || '/';
        localStorage.removeItem(HREFCALLBACK);
        /** @type {?} */
        const type = localStorage.getItem(OPENTYPE);
        localStorage.removeItem(OPENTYPE);
        if (type === 'window') {
            window.close();
        }
        else {
            this.router.navigateByUrl(url);
        }
        return data;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        clearInterval(this._win$);
        this._win$ = null;
    }
}
SocialService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SocialService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DA_SERVICE_TOKEN,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Router }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const DA_STORE_TOKEN = new InjectionToken('AUTH_STORE_TOKEN');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LocalStorageStore {
    /**
     * @param {?} key
     * @return {?}
     */
    get(key) {
        return JSON.parse(localStorage.getItem(key) || '{}') || {};
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    remove(key) {
        localStorage.removeItem(key);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MemoryStore {
    constructor() {
        this.cache = {};
    }
    /**
     * @param {?} key
     * @return {?}
     */
    get(key) {
        return this.cache[key] || /** @type {?} */ ({});
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    set(key, value) {
        this.cache[key] = value;
        return true;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    remove(key) {
        this.cache[key] = null;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SessionStorageStore {
    /**
     * @param {?} key
     * @return {?}
     */
    get(key) {
        return JSON.parse(sessionStorage.getItem(key) || '{}') || {};
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    set(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
        return true;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    remove(key) {
        sessionStorage.removeItem(key);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DelonAuthConfig {
    constructor() {
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
        this.login_url = `/login`;
        /**
         * 忽略TOKEN的URL地址列表，默认值为：[ /\/login/, /assets\//, /passport\// ]
         */
        this.ignores = [/\/login/, /assets\//, /passport\//];
        /**
         * 允许匿名登录KEY，若请求参数中带有该KEY表示忽略TOKEN
         */
        this.allow_anonymous_key = `_allow_anonymous`;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const WINDOW = new InjectionToken('Window');

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
        setTimeout(() => {
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
class BaseInterceptor {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        /** @type {?} */
        const options = Object.assign(new DelonAuthConfig(), this.injector.get(DelonAuthConfig, null));
        if (options.ignores) {
            for (const item of /** @type {?} */ (options.ignores)) {
                if (item.test(req.url))
                    return next.handle(req);
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
            const hc = this.injector.get(_HttpClient, null);
            if (hc)
                hc.end();
            return new Observable((observer) => {
                /** @type {?} */
                const res = new HttpErrorResponse({
                    status: 401,
                    statusText: `From Simple Intercept --> https://ng-alain.com/docs/auth`,
                });
                observer.error(res);
            });
        }
        return next.handle(req);
    }
}
/** @nocollapse */
BaseInterceptor.ctorParameters = () => [
    { type: Injector, decorators: [{ type: Optional }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TokenService {
    /**
     * @param {?} options
     * @param {?} store
     */
    constructor(options, store) {
        this.options = options;
        this.store = store;
        this.change$ = new BehaviorSubject(null);
    }
    /**
     * @return {?}
     */
    get login_url() {
        return this.options.login_url;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    set redirect(url) {
        this._redirect = url;
    }
    /**
     * @return {?}
     */
    get redirect() {
        return this._redirect || '/';
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set(data) {
        this.change$.next(data);
        return this.store.set(this.options.store_key, data);
    }
    /**
     * @template T
     * @param {?=} type
     * @return {?}
     */
    get(type) {
        /** @type {?} */
        const data = this.store.get(this.options.store_key);
        return type ? (/** @type {?} */ (Object.assign(new type(), data))) : (/** @type {?} */ (data));
    }
    /**
     * @return {?}
     */
    clear() {
        this.change$.next(null);
        this.store.remove(this.options.store_key);
    }
    /**
     * @return {?}
     */
    change() {
        return this.change$.pipe(share());
    }
}
TokenService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TokenService.ctorParameters = () => [
    { type: DelonAuthConfig },
    { type: undefined, decorators: [{ type: Inject, args: [DA_STORE_TOKEN,] }] }
];

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
    let output = str.replace(/-/g, '+').replace(/_/g, '/');
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
            throw new Error(`'atob' failed: The string to be decoded is not correctly encoded.`);
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
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    /** @type {?} */
    let output = '';
    str = String(str).replace(/=+$/, '');
    for (
    // initialize result and counters
    let bc = 0, bs, buffer, idx = 0; 
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
        .call(b64decode(str), (c) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    })
        .join(''));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class JWTTokenModel {
    /**
     * 获取载荷信息
     * @return {?}
     */
    get payload() {
        /** @type {?} */
        const parts = (this.token || '').split('.');
        if (parts.length !== 3)
            throw new Error('JWT must have 3 parts');
        /** @type {?} */
        const decoded = urlBase64Decode(parts[1]);
        return JSON.parse(decoded);
    }
    /**
     * 检查Token是否过期，`payload` 必须包含 `exp` 时有效
     *
     * @param {?=} offsetSeconds 偏移量
     * @return {?}
     */
    isExpired(offsetSeconds = 0) {
        /** @type {?} */
        const decoded = this.payload;
        if (!decoded.hasOwnProperty('exp'))
            return null;
        /** @type {?} */
        const date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return !(date.valueOf() > new Date().valueOf() + offsetSeconds * 1000);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class JWTInterceptor extends BaseInterceptor {
    /**
     * @param {?} options
     * @return {?}
     */
    isAuth(options) {
        this.model = this.injector
            .get(DA_SERVICE_TOKEN)
            .get(JWTTokenModel);
        return CheckJwt(/** @type {?} */ (this.model), options.token_exp_offset);
    }
    /**
     * @param {?} req
     * @param {?} options
     * @return {?}
     */
    setReq(req, options) {
        return req.clone({
            setHeaders: {
                Authorization: `Bearer ${this.model.token}`,
            },
        });
    }
}
JWTInterceptor.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class JWTGuard {
    /**
     * @param {?} srv
     * @param {?} injector
     * @param {?} cog
     */
    constructor(srv, injector, cog) {
        this.srv = srv;
        this.injector = injector;
        this.cog = Object.assign(new DelonAuthConfig(), cog);
    }
    /**
     * @return {?}
     */
    process() {
        /** @type {?} */
        const res = CheckJwt(this.srv.get(JWTTokenModel), this.cog.token_exp_offset);
        if (!res) {
            ToLogin(this.cog, this.injector);
        }
        return res;
    }
    /**
     * @return {?}
     */
    canLoad() {
        return this.process();
    }
    /**
     * @return {?}
     */
    canActivateChild() {
        return this.process();
    }
    /**
     * @return {?}
     */
    canActivate() {
        return this.process();
    }
}
JWTGuard.decorators = [
    { type: Injectable }
];
/** @nocollapse */
JWTGuard.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DA_SERVICE_TOKEN,] }] },
    { type: Injector },
    { type: DelonAuthConfig }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SimpleTokenModel {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SimpleInterceptor extends BaseInterceptor {
    /**
     * @param {?} options
     * @return {?}
     */
    isAuth(options) {
        this.model = /** @type {?} */ (this.injector.get(DA_SERVICE_TOKEN).get());
        return CheckSimple(/** @type {?} */ (this.model));
    }
    /**
     * @param {?} req
     * @param {?} options
     * @return {?}
     */
    setReq(req, options) {
        /** @type {?} */
        const token = options.token_send_template.replace(/\$\{([\w]+)\}/g, (_, g) => this.model[g]);
        switch (options.token_send_place) {
            case 'header':
                /** @type {?} */
                const obj = {};
                obj[options.token_send_key] = token;
                req = req.clone({
                    setHeaders: obj,
                });
                break;
            case 'body':
                /** @type {?} */
                const body = req.body || {};
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
    }
}
SimpleInterceptor.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SimpleGuard {
    /**
     * @param {?} srv
     * @param {?} injector
     * @param {?} cog
     */
    constructor(srv, injector, cog) {
        this.srv = srv;
        this.injector = injector;
        this.cog = Object.assign(new DelonAuthConfig(), cog);
    }
    /**
     * @return {?}
     */
    process() {
        /** @type {?} */
        const res = CheckSimple(this.srv.get());
        if (!res) {
            ToLogin(this.cog, this.injector);
        }
        return res;
    }
    /**
     * @return {?}
     */
    canLoad() {
        return this.process();
    }
    /**
     * @return {?}
     */
    canActivateChild() {
        return this.process();
    }
    /**
     * @return {?}
     */
    canActivate() {
        return this.process();
    }
}
SimpleGuard.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SimpleGuard.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DA_SERVICE_TOKEN,] }] },
    { type: Injector },
    { type: DelonAuthConfig }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DelonAuthModule {
    /**
     * @return {?}
     */
    static forRoot() {
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
    }
}
DelonAuthModule.decorators = [
    { type: NgModule, args: [{},] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { SocialService, DA_STORE_TOKEN, LocalStorageStore, MemoryStore, SessionStorageStore, BaseInterceptor, DA_SERVICE_TOKEN, TokenService, urlBase64Decode, JWTTokenModel, JWTInterceptor, JWTGuard, SimpleTokenModel, SimpleInterceptor, SimpleGuard, DelonAuthConfig, DelonAuthModule, WINDOW as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3Rva2VuL2ludGVyZmFjZS50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3NvY2lhbC9zb2NpYWwuc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3N0b3JlL2ludGVyZmFjZS50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3N0b3JlL2xvY2FsLXN0b3JhZ2Uuc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3N0b3JlL21lbW9yeS5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vYXV0aC9zcmMvc3RvcmUvc2Vzc2lvbi1zdG9yYWdlLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi9hdXRoL3NyYy9hdXRoLmNvbmZpZy50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3dpbl90b2tlbnMudHMiLCJuZzovL0BkZWxvbi9hdXRoL3NyYy90b2tlbi9oZWxwZXIudHMiLCJuZzovL0BkZWxvbi9hdXRoL3NyYy90b2tlbi9iYXNlLmludGVyY2VwdG9yLnRzIiwibmc6Ly9AZGVsb24vYXV0aC9zcmMvdG9rZW4vdG9rZW4uc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3Rva2VuL2p3dC9qd3QuaGVscGVyLnRzIiwibmc6Ly9AZGVsb24vYXV0aC9zcmMvdG9rZW4vand0L2p3dC5tb2RlbC50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3Rva2VuL2p3dC9qd3QuaW50ZXJjZXB0b3IudHMiLCJuZzovL0BkZWxvbi9hdXRoL3NyYy90b2tlbi9qd3Qvand0Lmd1YXJkLnRzIiwibmc6Ly9AZGVsb24vYXV0aC9zcmMvdG9rZW4vc2ltcGxlL3NpbXBsZS5tb2RlbC50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3Rva2VuL3NpbXBsZS9zaW1wbGUuaW50ZXJjZXB0b3IudHMiLCJuZzovL0BkZWxvbi9hdXRoL3NyYy90b2tlbi9zaW1wbGUvc2ltcGxlLmd1YXJkLnRzIiwibmc6Ly9AZGVsb24vYXV0aC9zcmMvYXV0aC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERBX1NFUlZJQ0VfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48SVRva2VuU2VydmljZT4oXHJcbiAgJ0RFTE9OX0FVVEhfVE9LRU5fU0VSVklDRV9UT0tFTicsXHJcbik7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUb2tlbk1vZGVsIHtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcblxyXG4gIHRva2VuOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRva2VuU2VydmljZSB7XHJcbiAgc2V0KGRhdGE6IElUb2tlbk1vZGVsKTogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogw6jCjsK3w6XCj8KWVG9rZW7Dr8K8wozDpcK9wqLDpcK8wo/DpcKMwoXDpsKLwqzDr8K8wppcclxuICAgKiAtIGBnZXQoKWAgw6jCjsK3w6XCj8KWIFNpbXBsZSBUb2tlblxyXG4gICAqIC0gYGdldDxKV1RUb2tlbk1vZGVsPihKV1RUb2tlbk1vZGVsKWAgw6jCjsK3w6XCj8KWIEpXVCBUb2tlblxyXG4gICAqL1xyXG4gIGdldCh0eXBlPzogYW55KTogSVRva2VuTW9kZWw7XHJcblxyXG4gIC8qKlxyXG4gICAqIMOowo7Ct8Olwo/CllRva2Vuw6/CvMKMw6XCvcKiw6XCvMKPw6XCjMKFw6bCi8Ksw6/CvMKaXHJcbiAgICogLSBgZ2V0KClgIMOowo7Ct8Olwo/CliBTaW1wbGUgVG9rZW5cclxuICAgKiAtIGBnZXQ8SldUVG9rZW5Nb2RlbD4oSldUVG9rZW5Nb2RlbClgIMOowo7Ct8Olwo/CliBKV1QgVG9rZW5cclxuICAgKi9cclxuICBnZXQ8VCBleHRlbmRzIElUb2tlbk1vZGVsPih0eXBlPzogYW55KTogVDtcclxuXHJcbiAgY2xlYXIoKTogdm9pZDtcclxuXHJcbiAgY2hhbmdlKCk6IE9ic2VydmFibGU8SVRva2VuTW9kZWw+O1xyXG5cclxuICAvKiogw6jCjsK3w6XCj8KWw6fCmcK7w6XCvcKVw6XCnMKww6XCncKAICovXHJcbiAgcmVhZG9ubHkgbG9naW5fdXJsOiBzdHJpbmc7XHJcblxyXG4gIC8qKiDDp8KZwrvDpcK9wpXDpcKQwo7DqMK3wrPDqMK9wqzDpcKcwrDDpcKdwoDDr8K8wozDpsKcwqrDpsKMwofDpcKuwprDpsKXwrbDqMK/wpTDpcKbwp4gYC9gICovXHJcbiAgcmVkaXJlY3Q6IHN0cmluZztcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE9ic2VydmVyLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIElUb2tlbk1vZGVsLFxyXG4gIElUb2tlblNlcnZpY2UsXHJcbiAgREFfU0VSVklDRV9UT0tFTixcclxufSBmcm9tICcuLi90b2tlbi9pbnRlcmZhY2UnO1xyXG5cclxuY29uc3QgT1BFTlRZUEUgPSAnX2RlbG9uQXV0aFNvY2lhbFR5cGUnO1xyXG5jb25zdCBIUkVGQ0FMTEJBQ0sgPSAnX2RlbG9uQXV0aFNvY2lhbENhbGxiYWNrQnlIcmVmJztcclxuXHJcbmV4cG9ydCB0eXBlIFNvY2lhbE9wZW5UeXBlID0gJ2hyZWYnIHwgJ3dpbmRvdyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTb2NpYWxTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBwcml2YXRlIF93aW46IFdpbmRvdztcclxuICBwcml2YXRlIF93aW4kOiBhbnk7XHJcbiAgcHJpdmF0ZSBvYnNlcnZlcjogT2JzZXJ2ZXI8SVRva2VuTW9kZWw+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoREFfU0VSVklDRV9UT0tFTikgcHJpdmF0ZSB0b2tlblNlcnZpY2U6IElUb2tlblNlcnZpY2UsXHJcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICApIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOkwr3Cv8OnwpTCqMOnwqrCl8Okwr3Ck8OmwonCk8OlwrzCgMOmwo7CiMOmwp3Cg8OpwqHCtcOvwrzCjMOowr/ClMOlwpvCnsOlwoDCvMOmwpjCryBgT2JzZXJ2YWJsZTxJVG9rZW5Nb2RlbD5gIMOnwpTCqMOkwrrCjsOowq7CosOpwpjChcOmwo7CiMOmwp3Cg8OlwpDCjsOowr/ClMOlwpvCnsOnwprChMOnwrvCk8Omwp7CnFxyXG4gICAqIEBwYXJhbSB1cmwgw6jCjsK3w6XCj8KWw6bCjsKIw6bCncKDw6XCnMKww6XCncKAXHJcbiAgICogQHBhcmFtIGNhbGxiYWNrIMOlwpvCnsOowrDCg8OowrfCr8OnwpTCscOlwpzCsMOlwp3CgFxyXG4gICAqIEBwYXJhbSBvcHRpb25zLndpbmRvd0ZlYXR1cmVzIMOnwq3CicOlwpDCjCBgd2luZG93Lm9wZW5gIMOnwprChCBgZmVhdHVyZXNgIMOlwo/CgsOmwpXCsMOlwoDCvFxyXG4gICAqL1xyXG4gIGxvZ2luKFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBjYWxsYmFjaz86IHN0cmluZyxcclxuICAgIG9wdGlvbnM/OiB7XHJcbiAgICAgIHR5cGU/OiAnd2luZG93JztcclxuICAgICAgd2luZG93RmVhdHVyZXM/OiBzdHJpbmc7XHJcbiAgICB9LFxyXG4gICk6IE9ic2VydmFibGU8SVRva2VuTW9kZWw+O1xyXG5cclxuICAvKipcclxuICAgKiDDqMK3wrPDqMK9wqzDqMKHwrPDpsKOwojDpsKdwoPDqcKhwrVcclxuICAgKiBAcGFyYW0gdXJsIMOowo7Ct8Olwo/ClsOmwo7CiMOmwp3Cg8OlwpzCsMOlwp3CgFxyXG4gICAqIEBwYXJhbSBjYWxsYmFjayDDpcKbwp7DqMKwwoPDqMK3wq/Dp8KUwrHDpcKcwrDDpcKdwoBcclxuICAgKi9cclxuICBsb2dpbihcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgY2FsbGJhY2s/OiBzdHJpbmcsXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICB0eXBlPzogJ2hyZWYnO1xyXG4gICAgfSxcclxuICApOiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiDDqMK3wrPDqMK9wqzDqMKHwrPDp8KZwrvDpcK9wpXDqcKhwrXDr8K8wozDqMKLwqXDpMK4wrogYHR5cGU9d2luZG93YCDDpsKXwrbDr8K8wozDqMK/wpTDpcKbwp7DpcKAwrzDpsKYwq8gYE9ic2VydmFibGU8SVRva2VuTW9kZWw+YFxyXG4gICAqIEBwYXJhbSB1cmwgw6jCjsK3w6XCj8KWw6bCjsKIw6bCncKDw6XCnMKww6XCncKAXHJcbiAgICogQHBhcmFtIGNhbGxiYWNrIMOlwr3CkyBgdHlwZT1ocmVmYCDDpsKIwpDDpcKKwp/DpsKXwrbDp8KawoTDpcKbwp7DqMKwwoPDqMK3wq/Dp8KUwrHDpcKcwrDDpcKdwoBcclxuICAgKiBAcGFyYW0gb3B0aW9ucy50eXBlIMOmwonCk8OlwrzCgMOmwpbCucOlwrzCj8OvwrzCjMOpwrvCmMOowq7CpCBgd2luZG93YFxyXG4gICAqIEBwYXJhbSBvcHRpb25zLndpbmRvd0ZlYXR1cmVzIMOnwq3CicOlwpDCjCBgd2luZG93Lm9wZW5gIMOnwprChCBgZmVhdHVyZXNgIMOlwo/CgsOmwpXCsMOlwoDCvFxyXG4gICAqL1xyXG4gIGxvZ2luKFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBjYWxsYmFjazogc3RyaW5nID0gJy8nLFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICB0eXBlPzogU29jaWFsT3BlblR5cGU7XHJcbiAgICAgIHdpbmRvd0ZlYXR1cmVzPzogc3RyaW5nO1xyXG4gICAgfSA9IHt9LFxyXG4gICk6IE9ic2VydmFibGU8SVRva2VuTW9kZWw+IHwgdm9pZCB7XHJcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6ICd3aW5kb3cnLFxyXG4gICAgICAgIHdpbmRvd0ZlYXR1cmVzOlxyXG4gICAgICAgICAgJ2xvY2F0aW9uPXllcyxoZWlnaHQ9NTcwLHdpZHRoPTUyMCxzY3JvbGxiYXJzPXllcyxzdGF0dXM9eWVzJyxcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9ucyxcclxuICAgICk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShPUEVOVFlQRSwgb3B0aW9ucy50eXBlKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKEhSRUZDQUxMQkFDSywgY2FsbGJhY2spO1xyXG4gICAgaWYgKG9wdGlvbnMudHlwZSA9PT0gJ2hyZWYnKSB7XHJcbiAgICAgIHRoaXMuZG9jLmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl93aW4gPSB3aW5kb3cub3Blbih1cmwsICdfYmxhbmsnLCBvcHRpb25zLndpbmRvd0ZlYXR1cmVzKTtcclxuICAgIHRoaXMuX3dpbiQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLl93aW4gJiYgdGhpcy5fd2luLmNsb3NlZCkge1xyXG4gICAgICAgIHRoaXMubmdPbkRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgbGV0IG1vZGVsID0gdGhpcy50b2tlblNlcnZpY2UuZ2V0KCk7XHJcbiAgICAgICAgaWYgKG1vZGVsICYmICFtb2RlbC50b2tlbikgbW9kZWwgPSBudWxsO1xyXG5cclxuICAgICAgICAvLyDDqMKnwqbDpcKPwpHDpcKPwpjDpsKbwrTDqcKAwprDp8KfwqVcclxuICAgICAgICBpZiAobW9kZWwpIHtcclxuICAgICAgICAgIHRoaXMudG9rZW5TZXJ2aWNlLnNldChtb2RlbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm9ic2VydmVyLm5leHQobW9kZWwpO1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgICAgfVxyXG4gICAgfSwgMTAwKTtcclxuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXI6IE9ic2VydmVyPElUb2tlbk1vZGVsPikgPT4ge1xyXG4gICAgICB0aGlzLm9ic2VydmVyID0gb2JzZXJ2ZXI7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOmwo7CiMOmwp3Cg8OmwojCkMOlworCn8OlwpDCjsOnwprChMOlwpvCnsOowrDCg8OlwqTChMOnwpDChlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHJhd0RhdGEgw6bCjMKHw6XCrsKaw6XCm8Kew6jCsMKDw6jCrsKkw6jCr8KBw6TCv8Khw6bCgcKvw6/CvMKMw6TCuMK6w6fCqcK6w6bCl8K2w6TCu8KOw6bCoMK5w6bCjcKuw6XCvcKTw6XCicKNVVJMw6jCp8Kjw6bCnsKQXHJcbiAgICovXHJcbiAgY2FsbGJhY2socmF3RGF0YT86IHN0cmluZyB8IElUb2tlbk1vZGVsKTogSVRva2VuTW9kZWwge1xyXG4gICAgLy8gZnJvbSB1cmlcclxuICAgIGlmICghcmF3RGF0YSAmJiB0aGlzLnJvdXRlci51cmwuaW5kZXhPZignPycpID09PSAtMSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHVybCBtdXNlIGNvbnRhaW4gYSA/YCk7XHJcbiAgICB9XHJcbiAgICAvLyBwYXJzZVxyXG4gICAgbGV0IGRhdGE6IElUb2tlbk1vZGVsID0geyB0b2tlbjogYGAgfTtcclxuICAgIGlmICh0eXBlb2YgcmF3RGF0YSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgY29uc3QgcmlnaHRVcmwgPSByYXdEYXRhLnNwbGl0KCc/JylbMV0uc3BsaXQoJyMnKVswXTtcclxuICAgICAgZGF0YSA9IDxhbnk+dGhpcy5yb3V0ZXIucGFyc2VVcmwoJy4vPycgKyByaWdodFVybCkucXVlcnlQYXJhbXM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkYXRhID0gcmF3RGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWRhdGEgfHwgIWRhdGEudG9rZW4pIHRocm93IG5ldyBFcnJvcihgaW52YWxpZGUgdG9rZW4gZGF0YWApO1xyXG4gICAgdGhpcy50b2tlblNlcnZpY2Uuc2V0KGRhdGEpO1xyXG5cclxuICAgIGNvbnN0IHVybCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKEhSRUZDQUxMQkFDSykgfHwgJy8nO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oSFJFRkNBTExCQUNLKTtcclxuICAgIGNvbnN0IHR5cGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShPUEVOVFlQRSk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShPUEVOVFlQRSk7XHJcbiAgICBpZiAodHlwZSA9PT0gJ3dpbmRvdycpIHtcclxuICAgICAgd2luZG93LmNsb3NlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fd2luJCk7XHJcbiAgICB0aGlzLl93aW4kID0gbnVsbDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSVRva2VuTW9kZWwgfSBmcm9tICcuLi90b2tlbi9pbnRlcmZhY2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERBX1NUT1JFX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPElTdG9yZT4oJ0FVVEhfU1RPUkVfVE9LRU4nKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN0b3JlIHtcclxuICBnZXQoa2V5OiBzdHJpbmcpOiBJVG9rZW5Nb2RlbDtcclxuXHJcbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogSVRva2VuTW9kZWwpOiBib29sZWFuO1xyXG5cclxuICByZW1vdmUoa2V5OiBzdHJpbmcpO1xyXG59XHJcbiIsImltcG9ydCB7IElTdG9yZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgSVRva2VuTW9kZWwgfSBmcm9tICcuLi90b2tlbi9pbnRlcmZhY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZVN0b3JlIGltcGxlbWVudHMgSVN0b3JlIHtcclxuICBnZXQoa2V5OiBzdHJpbmcpOiBJVG9rZW5Nb2RlbCB7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpIHx8ICd7fScpIHx8IHt9O1xyXG4gIH1cclxuXHJcbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogSVRva2VuTW9kZWwpOiBib29sZWFuIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlKGtleTogc3RyaW5nKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJU3RvcmUgfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IElUb2tlbk1vZGVsIH0gZnJvbSAnLi4vdG9rZW4vaW50ZXJmYWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNZW1vcnlTdG9yZSBpbXBsZW1lbnRzIElTdG9yZSB7XHJcbiAgcHJpdmF0ZSBjYWNoZTogeyBba2V5OiBzdHJpbmddOiBJVG9rZW5Nb2RlbCB9ID0ge307XHJcblxyXG4gIGdldChrZXk6IHN0cmluZyk6IElUb2tlbk1vZGVsIHtcclxuICAgIHJldHVybiB0aGlzLmNhY2hlW2tleV0gfHwgPGFueT57fTtcclxuICB9XHJcblxyXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IElUb2tlbk1vZGVsKTogYm9vbGVhbiB7XHJcbiAgICB0aGlzLmNhY2hlW2tleV0gPSB2YWx1ZTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlKGtleTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmNhY2hlW2tleV0gPSBudWxsO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJU3RvcmUgfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IElUb2tlbk1vZGVsIH0gZnJvbSAnLi4vdG9rZW4vaW50ZXJmYWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTZXNzaW9uU3RvcmFnZVN0b3JlIGltcGxlbWVudHMgSVN0b3JlIHtcclxuICBnZXQoa2V5OiBzdHJpbmcpOiBJVG9rZW5Nb2RlbCB7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGtleSkgfHwgJ3t9JykgfHwge307XHJcbiAgfVxyXG5cclxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBJVG9rZW5Nb2RlbCk6IGJvb2xlYW4ge1xyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHJlbW92ZShrZXk6IHN0cmluZykge1xyXG4gICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgRGVsb25BdXRoQ29uZmlnIHtcclxuICAvKipcclxuICAgKiDDpcKtwpjDpcKCwqhLRVnDpcKAwrxcclxuICAgKi9cclxuICBzdG9yZV9rZXk/ID0gJ190b2tlbic7XHJcbiAgLyoqXHJcbiAgICogw6bCl8Kgw6bClcKIw6bCl8K2w6jCt8Kzw6jCvcKsw6jCh8Kzw6fCmcK7w6XCvcKVw6nCocK1w6/CvMKMw6XCjMKFw6bCi8Ksw6/CvMKaXHJcbiAgICogLSDDpsKXwqDDpsKVwoh0b2tlbsOlwoDCvFxyXG4gICAqIC0gdG9rZW7DpcK3wrLDqMK/wofDpsKcwp/Dr8K8wojDqcKZwpBKV1TDr8K8wolcclxuICAgKi9cclxuICB0b2tlbl9pbnZhbGlkX3JlZGlyZWN0PyA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogdG9rZW7DqMK/wofDpsKcwp/DpsKXwrbDqcKXwrTDpcKBwo/Dp8KnwrvDpcKAwrzDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgMTBgIMOnwqfCksOvwrzCiMOlwo3ClcOkwr3CjcOvwrzCmsOnwqfCksOvwrzCiVxyXG4gICAqL1xyXG4gIHRva2VuX2V4cF9vZmZzZXQ/ID0gMTA7XHJcbiAgLyoqXHJcbiAgICogw6XCj8KRw6nCgMKBdG9rZW7DpcKPwoLDpsKVwrDDpcKQwo3Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wpp0b2tlblxyXG4gICAqL1xyXG4gIHRva2VuX3NlbmRfa2V5PyA9ICd0b2tlbic7XHJcbiAgLyoqXHJcbiAgICogw6XCj8KRw6nCgMKBdG9rZW7DpsKowqHDpsKdwr/Dr8K8wojDqcK7wpjDqMKuwqTDpMK4wrrDr8K8wppgJHt0b2tlbn1gw6/CvMKJw6/CvMKMw6TCvcK/w6fClMKoIGAke3Rva2VufWAgw6jCocKow6fCpMK6dG9rZW7Dp8KCwrnDpMK9wo3Dp8KswqbDr8K8wozDpMK+wovDpcKmwoLDr8K8wppcclxuICAgKlxyXG4gICAqIC0gYEJlYXJlciAke3Rva2VufWBcclxuICAgKi9cclxuICB0b2tlbl9zZW5kX3RlbXBsYXRlPyA9ICcke3Rva2VufSc7XHJcbiAgLyoqXHJcbiAgICogw6XCj8KRw6nCgMKBdG9rZW7DpcKPwoLDpsKVwrDDpMK9wo3Dp8K9wq7Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppoZWFkZXJcclxuICAgKi9cclxuICB0b2tlbl9zZW5kX3BsYWNlPzogJ2hlYWRlcicgfCAnYm9keScgfCAndXJsJyA9ICdoZWFkZXInO1xyXG4gIC8qKlxyXG4gICAqIMOnwpnCu8Olwr3ClcOpwqHCtcOowrfCr8OnwpTCscOlwpzCsMOlwp3CgFxyXG4gICAqL1xyXG4gIGxvZ2luX3VybD8gPSBgL2xvZ2luYDtcclxuICAvKipcclxuICAgKiDDpcK/wr3Dp8KVwqVUT0tFTsOnwprChFVSTMOlwpzCsMOlwp3CgMOlwojCl8OowqHCqMOvwrzCjMOpwrvCmMOowq7CpMOlwoDCvMOkwrjCusOvwrzCmlsgL1xcL2xvZ2luLywgL2Fzc2V0c1xcLy8sIC9wYXNzcG9ydFxcLy8gXVxyXG4gICAqL1xyXG4gIGlnbm9yZXM/OiBSZWdFeHBbXSA9IFsvXFwvbG9naW4vLCAvYXNzZXRzXFwvLywgL3Bhc3Nwb3J0XFwvL107XHJcbiAgLyoqXHJcbiAgICogw6XChcKBw6jCrsK4w6XCjMK/w6XCkMKNw6fCmcK7w6XCvcKVS0VZw6/CvMKMw6jCi8Klw6jCr8K3w6bCscKCw6XCj8KCw6bClcKww6TCuMKtw6XCuMKmw6bCnMKJw6jCr8KlS0VZw6jCocKow6fCpMK6w6XCv8K9w6fClcKlVE9LRU5cclxuICAgKi9cclxuICBhbGxvd19hbm9ueW1vdXNfa2V5PyA9IGBfYWxsb3dfYW5vbnltb3VzYDtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdJTkRPVyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxhbnk+KCdXaW5kb3cnKTtcclxuIiwiaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU2ltcGxlVG9rZW5Nb2RlbCB9IGZyb20gJy4vc2ltcGxlL3NpbXBsZS5tb2RlbCc7XHJcbmltcG9ydCB7IEpXVFRva2VuTW9kZWwgfSBmcm9tICcuL2p3dC9qd3QubW9kZWwnO1xyXG5pbXBvcnQgeyBEZWxvbkF1dGhDb25maWcgfSBmcm9tICcuLi9hdXRoLmNvbmZpZyc7XHJcbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJy4uL3dpbl90b2tlbnMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENoZWNrU2ltcGxlKG1vZGVsOiBTaW1wbGVUb2tlbk1vZGVsKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIChcclxuICAgIG1vZGVsICE9IG51bGwgJiYgdHlwZW9mIG1vZGVsLnRva2VuID09PSAnc3RyaW5nJyAmJiBtb2RlbC50b2tlbi5sZW5ndGggPiAwXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENoZWNrSnd0KG1vZGVsOiBKV1RUb2tlbk1vZGVsLCBvZmZzZXQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gIHJldHVybiBtb2RlbCAhPSBudWxsICYmIG1vZGVsLnRva2VuICYmICFtb2RlbC5pc0V4cGlyZWQob2Zmc2V0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRvTG9naW4ob3B0aW9uczogRGVsb25BdXRoQ29uZmlnLCBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICBpZiAob3B0aW9ucy50b2tlbl9pbnZhbGlkX3JlZGlyZWN0ID09PSB0cnVlKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKC9eaHR0cHM/OlxcL1xcLy9nLnRlc3Qob3B0aW9ucy5sb2dpbl91cmwpKSB7XHJcbiAgICAgICAgaW5qZWN0b3IuZ2V0KFdJTkRPVykubG9jYXRpb24uaHJlZiA9IG9wdGlvbnMubG9naW5fdXJsO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGluamVjdG9yLmdldChSb3V0ZXIpLm5hdmlnYXRlKFtvcHRpb25zLmxvZ2luX3VybF0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0b3IsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7XHJcbiAgSHR0cEludGVyY2VwdG9yLFxyXG4gIEh0dHBSZXF1ZXN0LFxyXG4gIEh0dHBIYW5kbGVyLFxyXG4gIEh0dHBTZW50RXZlbnQsXHJcbiAgSHR0cEhlYWRlclJlc3BvbnNlLFxyXG4gIEh0dHBQcm9ncmVzc0V2ZW50LFxyXG4gIEh0dHBSZXNwb25zZSxcclxuICBIdHRwVXNlckV2ZW50LFxyXG4gIEh0dHBFdmVudCxcclxuICBIdHRwRXJyb3JSZXNwb25zZSxcclxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBfSHR0cENsaWVudCB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcblxyXG5pbXBvcnQgeyBJVG9rZW5Nb2RlbCB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgRGVsb25BdXRoQ29uZmlnIH0gZnJvbSAnLi4vYXV0aC5jb25maWcnO1xyXG5pbXBvcnQgeyBUb0xvZ2luIH0gZnJvbSAnLi9oZWxwZXInO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3Rvcikge31cclxuXHJcbiAgcHJvdGVjdGVkIG1vZGVsOiBJVG9rZW5Nb2RlbDtcclxuXHJcbiAgYWJzdHJhY3QgaXNBdXRoKG9wdGlvbnM6IERlbG9uQXV0aENvbmZpZyk6IGJvb2xlYW47XHJcblxyXG4gIGFic3RyYWN0IHNldFJlcShcclxuICAgIHJlcTogSHR0cFJlcXVlc3Q8YW55PixcclxuICAgIG9wdGlvbnM6IERlbG9uQXV0aENvbmZpZyxcclxuICApOiBIdHRwUmVxdWVzdDxhbnk+O1xyXG5cclxuICBpbnRlcmNlcHQoXHJcbiAgICByZXE6IEh0dHBSZXF1ZXN0PGFueT4sXHJcbiAgICBuZXh0OiBIdHRwSGFuZGxlcixcclxuICApOiBPYnNlcnZhYmxlPFxyXG4gICAgfCBIdHRwU2VudEV2ZW50XHJcbiAgICB8IEh0dHBIZWFkZXJSZXNwb25zZVxyXG4gICAgfCBIdHRwUHJvZ3Jlc3NFdmVudFxyXG4gICAgfCBIdHRwUmVzcG9uc2U8YW55PlxyXG4gICAgfCBIdHRwVXNlckV2ZW50PGFueT5cclxuICA+IHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICBuZXcgRGVsb25BdXRoQ29uZmlnKCksXHJcbiAgICAgIHRoaXMuaW5qZWN0b3IuZ2V0KERlbG9uQXV0aENvbmZpZywgbnVsbCksXHJcbiAgICApO1xyXG4gICAgaWYgKG9wdGlvbnMuaWdub3Jlcykge1xyXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygb3B0aW9ucy5pZ25vcmVzIGFzIFJlZ0V4cFtdKSB7XHJcbiAgICAgICAgaWYgKGl0ZW0udGVzdChyZXEudXJsKSkgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIG9wdGlvbnMuYWxsb3dfYW5vbnltb3VzX2tleSAmJlxyXG4gICAgICAocmVxLnBhcmFtcy5oYXMob3B0aW9ucy5hbGxvd19hbm9ueW1vdXNfa2V5KSB8fFxyXG4gICAgICAgIHRoaXMuaW5qZWN0b3JcclxuICAgICAgICAgIC5nZXQoUm91dGVyKVxyXG4gICAgICAgICAgLnBhcnNlVXJsKHJlcS51cmxXaXRoUGFyYW1zKVxyXG4gICAgICAgICAgLnF1ZXJ5UGFyYW1NYXAuaGFzKG9wdGlvbnMuYWxsb3dfYW5vbnltb3VzX2tleSkpXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNBdXRoKG9wdGlvbnMpKSB7XHJcbiAgICAgIHJlcSA9IHRoaXMuc2V0UmVxKHJlcSwgb3B0aW9ucyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBUb0xvZ2luKG9wdGlvbnMsIHRoaXMuaW5qZWN0b3IpO1xyXG4gICAgICAvLyBvYnNlcnZlci5lcnJvcsOvwrzCmsOkwrzCmsOlwq/CvMOlwoDCksOlwpDCjsOnwrvCrcOmwovCpsOmwojCqsOlwpnCqMOmwpfCoMOmwrPClcOowqfCpsOlwo/CkcOvwrzCjMOlwpvCoMOmwq3CpMOvwrzCjMOpwpzCgMOowqbCgcOlwqTChMOnwpDChiBgX0h0dHBDbGllbnRgIMOnworCtsOmwoDCgcOpwpfCrsOpwqLCmFxyXG4gICAgICBjb25zdCBoYyA9IHRoaXMuaW5qZWN0b3IuZ2V0KF9IdHRwQ2xpZW50LCBudWxsKTtcclxuICAgICAgaWYgKGhjKSBoYy5lbmQoKTtcclxuICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8SHR0cEV2ZW50PGFueT4+KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gbmV3IEh0dHBFcnJvclJlc3BvbnNlKHtcclxuICAgICAgICAgIHN0YXR1czogNDAxLFxyXG4gICAgICAgICAgc3RhdHVzVGV4dDogYEZyb20gU2ltcGxlIEludGVyY2VwdCAtLT4gaHR0cHM6Ly9uZy1hbGFpbi5jb20vZG9jcy9hdXRoYCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBvYnNlcnZlci5lcnJvcihyZXMpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHNoYXJlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBJVG9rZW5TZXJ2aWNlLCBJVG9rZW5Nb2RlbCB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgREFfU1RPUkVfVE9LRU4sIElTdG9yZSB9IGZyb20gJy4uL3N0b3JlL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IERlbG9uQXV0aENvbmZpZyB9IGZyb20gJy4uL2F1dGguY29uZmlnJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRva2VuU2VydmljZSBpbXBsZW1lbnRzIElUb2tlblNlcnZpY2Uge1xyXG4gIHByaXZhdGUgY2hhbmdlJDogQmVoYXZpb3JTdWJqZWN0PElUb2tlbk1vZGVsPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8XHJcbiAgICBJVG9rZW5Nb2RlbFxyXG4gID4obnVsbCk7XHJcbiAgcHJpdmF0ZSBkYXRhOiBJVG9rZW5Nb2RlbDtcclxuICBwcml2YXRlIF9yZWRpcmVjdDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgb3B0aW9uczogRGVsb25BdXRoQ29uZmlnLFxyXG4gICAgQEluamVjdChEQV9TVE9SRV9UT0tFTikgcHJpdmF0ZSBzdG9yZTogSVN0b3JlLFxyXG4gICkge31cclxuXHJcbiAgZ2V0IGxvZ2luX3VybCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5sb2dpbl91cmw7XHJcbiAgfVxyXG5cclxuICBzZXQgcmVkaXJlY3QodXJsOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3JlZGlyZWN0ID0gdXJsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJlZGlyZWN0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JlZGlyZWN0IHx8ICcvJztcclxuICB9XHJcblxyXG4gIHNldChkYXRhOiBJVG9rZW5Nb2RlbCk6IGJvb2xlYW4ge1xyXG4gICAgdGhpcy5jaGFuZ2UkLm5leHQoZGF0YSk7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZXQodGhpcy5vcHRpb25zLnN0b3JlX2tleSwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXQodHlwZT86IGFueSk7XHJcbiAgZ2V0PFQgZXh0ZW5kcyBJVG9rZW5Nb2RlbD4odHlwZT86IHsgbmV3ICgpOiBUIH0pOiBUIHtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnN0b3JlLmdldCh0aGlzLm9wdGlvbnMuc3RvcmVfa2V5KTtcclxuICAgIHJldHVybiB0eXBlID8gKE9iamVjdC5hc3NpZ24obmV3IHR5cGUoKSwgZGF0YSkgYXMgVCkgOiAoZGF0YSBhcyBUKTtcclxuICB9XHJcblxyXG4gIGNsZWFyKCkge1xyXG4gICAgdGhpcy5jaGFuZ2UkLm5leHQobnVsbCk7XHJcbiAgICB0aGlzLnN0b3JlLnJlbW92ZSh0aGlzLm9wdGlvbnMuc3RvcmVfa2V5KTtcclxuICB9XHJcblxyXG4gIGNoYW5nZSgpOiBPYnNlcnZhYmxlPElUb2tlbk1vZGVsPiB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UkLnBpcGUoc2hhcmUoKSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiB1cmxCYXNlNjREZWNvZGUoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIGxldCBvdXRwdXQgPSBzdHIucmVwbGFjZSgvLS9nLCAnKycpLnJlcGxhY2UoL18vZywgJy8nKTtcclxuICBzd2l0Y2ggKG91dHB1dC5sZW5ndGggJSA0KSB7XHJcbiAgICBjYXNlIDA6IHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIDI6IHtcclxuICAgICAgb3V0cHV0ICs9ICc9PSc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSAzOiB7XHJcbiAgICAgIG91dHB1dCArPSAnPSc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgYCdhdG9iJyBmYWlsZWQ6IFRoZSBzdHJpbmcgdG8gYmUgZGVjb2RlZCBpcyBub3QgY29ycmVjdGx5IGVuY29kZWQuYCxcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGI2NERlY29kZVVuaWNvZGUob3V0cHV0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYjY0ZGVjb2RlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuICBjb25zdCBjaGFycyA9XHJcbiAgICAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xyXG4gIGxldCBvdXRwdXQ6IHN0cmluZyA9ICcnO1xyXG5cclxuICBzdHIgPSBTdHJpbmcoc3RyKS5yZXBsYWNlKC89KyQvLCAnJyk7XHJcblxyXG4gIGZvciAoXHJcbiAgICAvLyBpbml0aWFsaXplIHJlc3VsdCBhbmQgY291bnRlcnNcclxuICAgIGxldCBiYzogbnVtYmVyID0gMCwgYnM6IGFueSwgYnVmZmVyOiBhbnksIGlkeDogbnVtYmVyID0gMDtcclxuICAgIC8vIGdldCBuZXh0IGNoYXJhY3RlclxyXG4gICAgKGJ1ZmZlciA9IHN0ci5jaGFyQXQoaWR4KyspKTtcclxuICAgIC8vIGNoYXJhY3RlciBmb3VuZCBpbiB0YWJsZT8gaW5pdGlhbGl6ZSBiaXQgc3RvcmFnZSBhbmQgYWRkIGl0cyBhc2NpaSB2YWx1ZTtcclxuICAgIH5idWZmZXIgJiZcclxuICAgICgoYnMgPSBiYyAlIDQgPyBicyAqIDY0ICsgYnVmZmVyIDogYnVmZmVyKSxcclxuICAgIC8vIGFuZCBpZiBub3QgZmlyc3Qgb2YgZWFjaCA0IGNoYXJhY3RlcnMsXHJcbiAgICAvLyBjb252ZXJ0IHRoZSBmaXJzdCA4IGJpdHMgdG8gb25lIGFzY2lpIGNoYXJhY3RlclxyXG4gICAgYmMrKyAlIDQpXHJcbiAgICAgID8gKG91dHB1dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDI1NSAmIChicyA+PiAoKC0yICogYmMpICYgNikpKSlcclxuICAgICAgOiAwXHJcbiAgKSB7XHJcbiAgICAvLyB0cnkgdG8gZmluZCBjaGFyYWN0ZXIgaW4gdGFibGUgKDAtNjMsIG5vdCBmb3VuZCA9PiAtMSlcclxuICAgIGJ1ZmZlciA9IGNoYXJzLmluZGV4T2YoYnVmZmVyKTtcclxuICB9XHJcbiAgcmV0dXJuIG91dHB1dDtcclxufVxyXG5cclxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vZG9jcy9XZWIvQVBJL1dpbmRvd0Jhc2U2NC9CYXNlNjRfZW5jb2RpbmdfYW5kX2RlY29kaW5nI1RoZV9Vbmljb2RlX1Byb2JsZW1cclxuZnVuY3Rpb24gYjY0RGVjb2RlVW5pY29kZShzdHI6IGFueSkge1xyXG4gIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoXHJcbiAgICBBcnJheS5wcm90b3R5cGUubWFwXHJcbiAgICAgIC5jYWxsKGI2NGRlY29kZShzdHIpLCAoYzogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuICclJyArICgnMDAnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuam9pbignJyksXHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBJVG9rZW5Nb2RlbCB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IHVybEJhc2U2NERlY29kZSB9IGZyb20gJy4vand0LmhlbHBlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgSldUVG9rZW5Nb2RlbCBpbXBsZW1lbnRzIElUb2tlbk1vZGVsIHtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcblxyXG4gIHRva2VuOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIMOowo7Ct8Olwo/ClsOowr3CvcOowo3Ct8Okwr/CocOmwoHCr1xyXG4gICAqL1xyXG4gIGdldCBwYXlsb2FkKCk6IGFueSB7XHJcbiAgICBjb25zdCBwYXJ0cyA9ICh0aGlzLnRva2VuIHx8ICcnKS5zcGxpdCgnLicpO1xyXG4gICAgaWYgKHBhcnRzLmxlbmd0aCAhPT0gMykgdGhyb3cgbmV3IEVycm9yKCdKV1QgbXVzdCBoYXZlIDMgcGFydHMnKTtcclxuXHJcbiAgICBjb25zdCBkZWNvZGVkID0gdXJsQmFzZTY0RGVjb2RlKHBhcnRzWzFdKTtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKGRlY29kZWQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogw6bCo8KAw6bCn8KlVG9rZW7DpsKYwq/DpcKQwqbDqMK/wofDpsKcwp/Dr8K8woxgcGF5bG9hZGAgw6XCv8KFw6nCocK7w6XCjMKFw6XCkMKrIGBleHBgIMOmwpfCtsOmwpzCicOmwpXCiFxyXG4gICAqXHJcbiAgICogQHBhcmFtIG9mZnNldFNlY29uZHMgw6XCgcKPw6fCp8K7w6nCh8KPXHJcbiAgICovXHJcbiAgaXNFeHBpcmVkKG9mZnNldFNlY29uZHM6IG51bWJlciA9IDApOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGRlY29kZWQgPSB0aGlzLnBheWxvYWQ7XHJcbiAgICBpZiAoIWRlY29kZWQuaGFzT3duUHJvcGVydHkoJ2V4cCcpKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoMCk7XHJcbiAgICBkYXRlLnNldFVUQ1NlY29uZHMoZGVjb2RlZC5leHApO1xyXG5cclxuICAgIHJldHVybiAhKGRhdGUudmFsdWVPZigpID4gbmV3IERhdGUoKS52YWx1ZU9mKCkgKyBvZmZzZXRTZWNvbmRzICogMTAwMCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5pbXBvcnQgeyBEZWxvbkF1dGhDb25maWcgfSBmcm9tICcuLi8uLi9hdXRoLmNvbmZpZyc7XHJcbmltcG9ydCB7IEJhc2VJbnRlcmNlcHRvciB9IGZyb20gJy4uL2Jhc2UuaW50ZXJjZXB0b3InO1xyXG5pbXBvcnQgeyBEQV9TRVJWSUNFX1RPS0VOIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgSldUVG9rZW5Nb2RlbCB9IGZyb20gJy4vand0Lm1vZGVsJztcclxuaW1wb3J0IHsgQ2hlY2tKd3QgfSBmcm9tICcuLi9oZWxwZXInO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSldUSW50ZXJjZXB0b3IgZXh0ZW5kcyBCYXNlSW50ZXJjZXB0b3Ige1xyXG4gIGlzQXV0aChvcHRpb25zOiBEZWxvbkF1dGhDb25maWcpOiBib29sZWFuIHtcclxuICAgIHRoaXMubW9kZWwgPSB0aGlzLmluamVjdG9yXHJcbiAgICAgIC5nZXQoREFfU0VSVklDRV9UT0tFTilcclxuICAgICAgLmdldDxKV1RUb2tlbk1vZGVsPihKV1RUb2tlbk1vZGVsKTtcclxuICAgIHJldHVybiBDaGVja0p3dCh0aGlzLm1vZGVsIGFzIEpXVFRva2VuTW9kZWwsIG9wdGlvbnMudG9rZW5fZXhwX29mZnNldCk7XHJcbiAgfVxyXG5cclxuICBzZXRSZXEocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBvcHRpb25zOiBEZWxvbkF1dGhDb25maWcpOiBIdHRwUmVxdWVzdDxhbnk+IHtcclxuICAgIHJldHVybiByZXEuY2xvbmUoe1xyXG4gICAgICBzZXRIZWFkZXJzOiB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3RoaXMubW9kZWwudG9rZW59YCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBDYW5BY3RpdmF0ZUNoaWxkLCBDYW5Mb2FkIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgREFfU0VSVklDRV9UT0tFTiwgSVRva2VuU2VydmljZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IEpXVFRva2VuTW9kZWwgfSBmcm9tICcuL2p3dC5tb2RlbCc7XHJcbmltcG9ydCB7IERlbG9uQXV0aENvbmZpZyB9IGZyb20gJy4uLy4uL2F1dGguY29uZmlnJztcclxuaW1wb3J0IHsgQ2hlY2tKd3QsIFRvTG9naW4gfSBmcm9tICcuLi9oZWxwZXInO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSldUR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSwgQ2FuQWN0aXZhdGVDaGlsZCwgQ2FuTG9hZCB7XHJcbiAgcHJpdmF0ZSBjb2c6IERlbG9uQXV0aENvbmZpZztcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoREFfU0VSVklDRV9UT0tFTikgcHJpdmF0ZSBzcnY6IElUb2tlblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcclxuICAgIGNvZzogRGVsb25BdXRoQ29uZmlnLFxyXG4gICkge1xyXG4gICAgdGhpcy5jb2cgPSBPYmplY3QuYXNzaWduKG5ldyBEZWxvbkF1dGhDb25maWcoKSwgY29nKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHJvY2VzcygpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHJlcyA9IENoZWNrSnd0KFxyXG4gICAgICB0aGlzLnNydi5nZXQ8SldUVG9rZW5Nb2RlbD4oSldUVG9rZW5Nb2RlbCksXHJcbiAgICAgIHRoaXMuY29nLnRva2VuX2V4cF9vZmZzZXQsXHJcbiAgICApO1xyXG4gICAgaWYgKCFyZXMpIHtcclxuICAgICAgVG9Mb2dpbih0aGlzLmNvZywgdGhpcy5pbmplY3Rvcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH1cclxuXHJcbiAgLy8gbGF6eSBsb2FkaW5nXHJcbiAgY2FuTG9hZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnByb2Nlc3MoKTtcclxuICB9XHJcbiAgLy8gYWxsIGNoaWxkcmVuIHJvdXRlXHJcbiAgY2FuQWN0aXZhdGVDaGlsZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnByb2Nlc3MoKTtcclxuICB9XHJcbiAgLy8gcm91dGVcclxuICBjYW5BY3RpdmF0ZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnByb2Nlc3MoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSVRva2VuTW9kZWwgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNpbXBsZVRva2VuTW9kZWwgaW1wbGVtZW50cyBJVG9rZW5Nb2RlbCB7XHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG5cclxuICB0b2tlbjogc3RyaW5nO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5pbXBvcnQgeyBEZWxvbkF1dGhDb25maWcgfSBmcm9tICcuLi8uLi9hdXRoLmNvbmZpZyc7XHJcbmltcG9ydCB7IFNpbXBsZVRva2VuTW9kZWwgfSBmcm9tICcuL3NpbXBsZS5tb2RlbCc7XHJcbmltcG9ydCB7IEJhc2VJbnRlcmNlcHRvciB9IGZyb20gJy4uL2Jhc2UuaW50ZXJjZXB0b3InO1xyXG5pbXBvcnQgeyBEQV9TRVJWSUNFX1RPS0VOIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgQ2hlY2tTaW1wbGUgfSBmcm9tICcuLi9oZWxwZXInO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2ltcGxlSW50ZXJjZXB0b3IgZXh0ZW5kcyBCYXNlSW50ZXJjZXB0b3Ige1xyXG4gIGlzQXV0aChvcHRpb25zOiBEZWxvbkF1dGhDb25maWcpOiBib29sZWFuIHtcclxuICAgIHRoaXMubW9kZWwgPSB0aGlzLmluamVjdG9yLmdldChEQV9TRVJWSUNFX1RPS0VOKS5nZXQoKSBhcyBTaW1wbGVUb2tlbk1vZGVsO1xyXG4gICAgcmV0dXJuIENoZWNrU2ltcGxlKHRoaXMubW9kZWwgYXMgU2ltcGxlVG9rZW5Nb2RlbCk7XHJcbiAgfVxyXG5cclxuICBzZXRSZXEocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBvcHRpb25zOiBEZWxvbkF1dGhDb25maWcpOiBIdHRwUmVxdWVzdDxhbnk+IHtcclxuICAgIGNvbnN0IHRva2VuID0gb3B0aW9ucy50b2tlbl9zZW5kX3RlbXBsYXRlLnJlcGxhY2UoXHJcbiAgICAgIC9cXCRcXHsoW1xcd10rKVxcfS9nLFxyXG4gICAgICAoXzogc3RyaW5nLCBnKSA9PiB0aGlzLm1vZGVsW2ddLFxyXG4gICAgKTtcclxuICAgIHN3aXRjaCAob3B0aW9ucy50b2tlbl9zZW5kX3BsYWNlKSB7XHJcbiAgICAgIGNhc2UgJ2hlYWRlcic6XHJcbiAgICAgICAgY29uc3Qgb2JqID0ge307XHJcbiAgICAgICAgb2JqW29wdGlvbnMudG9rZW5fc2VuZF9rZXldID0gdG9rZW47XHJcbiAgICAgICAgcmVxID0gcmVxLmNsb25lKHtcclxuICAgICAgICAgIHNldEhlYWRlcnM6IG9iaixcclxuICAgICAgICB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnYm9keSc6XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHJlcS5ib2R5IHx8IHt9O1xyXG4gICAgICAgIGJvZHlbb3B0aW9ucy50b2tlbl9zZW5kX2tleV0gPSB0b2tlbjtcclxuICAgICAgICByZXEgPSByZXEuY2xvbmUoe1xyXG4gICAgICAgICAgYm9keTogYm9keSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAndXJsJzpcclxuICAgICAgICByZXEgPSByZXEuY2xvbmUoe1xyXG4gICAgICAgICAgcGFyYW1zOiByZXEucGFyYW1zLmFwcGVuZChvcHRpb25zLnRva2VuX3NlbmRfa2V5LCB0b2tlbiksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVxO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBDYW5BY3RpdmF0ZUNoaWxkLCBDYW5Mb2FkIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgREFfU0VSVklDRV9UT0tFTiwgSVRva2VuU2VydmljZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IENoZWNrU2ltcGxlLCBUb0xvZ2luIH0gZnJvbSAnLi4vaGVscGVyJztcclxuaW1wb3J0IHsgRGVsb25BdXRoQ29uZmlnIH0gZnJvbSAnLi4vLi4vYXV0aC5jb25maWcnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2ltcGxlR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSwgQ2FuQWN0aXZhdGVDaGlsZCwgQ2FuTG9hZCB7XHJcbiAgcHJpdmF0ZSBjb2c6IERlbG9uQXV0aENvbmZpZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KERBX1NFUlZJQ0VfVE9LRU4pIHByaXZhdGUgc3J2OiBJVG9rZW5TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICBjb2c6IERlbG9uQXV0aENvbmZpZyxcclxuICApIHtcclxuICAgIHRoaXMuY29nID0gT2JqZWN0LmFzc2lnbihuZXcgRGVsb25BdXRoQ29uZmlnKCksIGNvZyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHByb2Nlc3MoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCByZXMgPSBDaGVja1NpbXBsZSh0aGlzLnNydi5nZXQoKSk7XHJcbiAgICBpZiAoIXJlcykge1xyXG4gICAgICBUb0xvZ2luKHRoaXMuY29nLCB0aGlzLmluamVjdG9yKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG5cclxuICAvLyBsYXp5IGxvYWRpbmdcclxuICBjYW5Mb2FkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvY2VzcygpO1xyXG4gIH1cclxuICAvLyBhbGwgY2hpbGRyZW4gcm91dGVcclxuICBjYW5BY3RpdmF0ZUNoaWxkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvY2VzcygpO1xyXG4gIH1cclxuICAvLyByb3V0ZVxyXG4gIGNhbkFjdGl2YXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvY2VzcygpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRGVsb25BdXRoQ29uZmlnIH0gZnJvbSAnLi9hdXRoLmNvbmZpZyc7XHJcbmltcG9ydCB7IERBX1NUT1JFX1RPS0VOIH0gZnJvbSAnLi9zdG9yZS9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBEQV9TRVJWSUNFX1RPS0VOIH0gZnJvbSAnLi90b2tlbi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTdG9yZSB9IGZyb20gJy4vc3RvcmUvbG9jYWwtc3RvcmFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi90b2tlbi90b2tlbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2ltcGxlR3VhcmQgfSBmcm9tICcuL3Rva2VuL3NpbXBsZS9zaW1wbGUuZ3VhcmQnO1xyXG5pbXBvcnQgeyBKV1RHdWFyZCB9IGZyb20gJy4vdG9rZW4vand0L2p3dC5ndWFyZCc7XHJcbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJy4vd2luX3Rva2Vucyc7XHJcblxyXG5ATmdNb2R1bGUoe30pXHJcbmV4cG9ydCBjbGFzcyBEZWxvbkF1dGhNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IERlbG9uQXV0aE1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgeyBwcm92aWRlOiBXSU5ET1csIHVzZVZhbHVlOiB3aW5kb3cgfSxcclxuICAgICAgICBEZWxvbkF1dGhDb25maWcsXHJcbiAgICAgICAgU2ltcGxlR3VhcmQsXHJcbiAgICAgICAgSldUR3VhcmQsXHJcbiAgICAgICAgeyBwcm92aWRlOiBEQV9TVE9SRV9UT0tFTiwgdXNlQ2xhc3M6IExvY2FsU3RvcmFnZVN0b3JlIH0sXHJcbiAgICAgICAgeyBwcm92aWRlOiBEQV9TRVJWSUNFX1RPS0VOLCB1c2VDbGFzczogVG9rZW5TZXJ2aWNlIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQSxNQUFhLGdCQUFnQixHQUFHLElBQUksY0FBYyxDQUNoRCxnQ0FBZ0MsQ0FDakM7Ozs7OztBQ0xEO0FBV0EsTUFBTSxRQUFRLEdBQUcsc0JBQXNCLENBQUM7O0FBQ3hDLE1BQU0sWUFBWSxHQUFHLGdDQUFnQyxDQUFDOzs7Ozs7O0lBVXBELFlBQ29DLFlBQTJCLEVBQ25DLEdBQVEsRUFDMUI7UUFGMEIsaUJBQVksR0FBWixZQUFZLENBQWU7UUFDbkMsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUMxQixXQUFNLEdBQU4sTUFBTTtLQUNaOzs7Ozs7OztJQXFDSixLQUFLLENBQ0gsR0FBVyxFQUNYLFdBQW1CLEdBQUcsRUFDdEIsVUFHSSxFQUFFO1FBRU4sT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQ3JCO1lBQ0UsSUFBSSxFQUFFLFFBQVE7WUFDZCxjQUFjLEVBQ1osNkRBQTZEO1NBQ2hFLEVBQ0QsT0FBTyxDQUNSLENBQUM7UUFDRixZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDN0MsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtZQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQzdCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsS0FBSyxH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