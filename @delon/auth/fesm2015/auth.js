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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3Rva2VuL2ludGVyZmFjZS50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3NvY2lhbC9zb2NpYWwuc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3N0b3JlL2ludGVyZmFjZS50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3N0b3JlL2xvY2FsLXN0b3JhZ2Uuc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3N0b3JlL21lbW9yeS5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vYXV0aC9zcmMvc3RvcmUvc2Vzc2lvbi1zdG9yYWdlLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi9hdXRoL3NyYy9hdXRoLmNvbmZpZy50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3dpbl90b2tlbnMudHMiLCJuZzovL0BkZWxvbi9hdXRoL3NyYy90b2tlbi9oZWxwZXIudHMiLCJuZzovL0BkZWxvbi9hdXRoL3NyYy90b2tlbi9iYXNlLmludGVyY2VwdG9yLnRzIiwibmc6Ly9AZGVsb24vYXV0aC9zcmMvdG9rZW4vdG9rZW4uc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3Rva2VuL2p3dC9qd3QuaGVscGVyLnRzIiwibmc6Ly9AZGVsb24vYXV0aC9zcmMvdG9rZW4vand0L2p3dC5tb2RlbC50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3Rva2VuL2p3dC9qd3QuaW50ZXJjZXB0b3IudHMiLCJuZzovL0BkZWxvbi9hdXRoL3NyYy90b2tlbi9qd3Qvand0Lmd1YXJkLnRzIiwibmc6Ly9AZGVsb24vYXV0aC9zcmMvdG9rZW4vc2ltcGxlL3NpbXBsZS5tb2RlbC50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3Rva2VuL3NpbXBsZS9zaW1wbGUuaW50ZXJjZXB0b3IudHMiLCJuZzovL0BkZWxvbi9hdXRoL3NyYy90b2tlbi9zaW1wbGUvc2ltcGxlLmd1YXJkLnRzIiwibmc6Ly9AZGVsb24vYXV0aC9zcmMvYXV0aC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNvbnN0IERBX1NFUlZJQ0VfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48SVRva2VuU2VydmljZT4oXG4gICdERUxPTl9BVVRIX1RPS0VOX1NFUlZJQ0VfVE9LRU4nLFxuKTtcblxuZXhwb3J0IGludGVyZmFjZSBJVG9rZW5Nb2RlbCB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcblxuICB0b2tlbjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUb2tlblNlcnZpY2Uge1xuICBzZXQoZGF0YTogSVRva2VuTW9kZWwpOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDDqMKOwrfDpcKPwpZUb2tlbsOvwrzCjMOlwr3CosOlwrzCj8OlwozChcOmwovCrMOvwrzCmlxuICAgKiAtIGBnZXQoKWAgw6jCjsK3w6XCj8KWIFNpbXBsZSBUb2tlblxuICAgKiAtIGBnZXQ8SldUVG9rZW5Nb2RlbD4oSldUVG9rZW5Nb2RlbClgIMOowo7Ct8Olwo/CliBKV1QgVG9rZW5cbiAgICovXG4gIGdldCh0eXBlPzogYW55KTogSVRva2VuTW9kZWw7XG5cbiAgLyoqXG4gICAqIMOowo7Ct8Olwo/CllRva2Vuw6/CvMKMw6XCvcKiw6XCvMKPw6XCjMKFw6bCi8Ksw6/CvMKaXG4gICAqIC0gYGdldCgpYCDDqMKOwrfDpcKPwpYgU2ltcGxlIFRva2VuXG4gICAqIC0gYGdldDxKV1RUb2tlbk1vZGVsPihKV1RUb2tlbk1vZGVsKWAgw6jCjsK3w6XCj8KWIEpXVCBUb2tlblxuICAgKi9cbiAgZ2V0PFQgZXh0ZW5kcyBJVG9rZW5Nb2RlbD4odHlwZT86IGFueSk6IFQ7XG5cbiAgY2xlYXIoKTogdm9pZDtcblxuICBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxJVG9rZW5Nb2RlbD47XG5cbiAgLyoqIMOowo7Ct8Olwo/ClsOnwpnCu8Olwr3ClcOlwpzCsMOlwp3CgCAqL1xuICByZWFkb25seSBsb2dpbl91cmw6IHN0cmluZztcblxuICAvKiogw6fCmcK7w6XCvcKVw6XCkMKOw6jCt8Kzw6jCvcKsw6XCnMKww6XCncKAw6/CvMKMw6bCnMKqw6bCjMKHw6XCrsKaw6bCl8K2w6jCv8KUw6XCm8KeIGAvYCAqL1xuICByZWRpcmVjdDogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBPYnNlcnZlciwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1xuICBJVG9rZW5Nb2RlbCxcbiAgSVRva2VuU2VydmljZSxcbiAgREFfU0VSVklDRV9UT0tFTixcbn0gZnJvbSAnLi4vdG9rZW4vaW50ZXJmYWNlJztcblxuY29uc3QgT1BFTlRZUEUgPSAnX2RlbG9uQXV0aFNvY2lhbFR5cGUnO1xuY29uc3QgSFJFRkNBTExCQUNLID0gJ19kZWxvbkF1dGhTb2NpYWxDYWxsYmFja0J5SHJlZic7XG5cbmV4cG9ydCB0eXBlIFNvY2lhbE9wZW5UeXBlID0gJ2hyZWYnIHwgJ3dpbmRvdyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTb2NpYWxTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfd2luOiBXaW5kb3c7XG4gIHByaXZhdGUgX3dpbiQ6IGFueTtcbiAgcHJpdmF0ZSBvYnNlcnZlcjogT2JzZXJ2ZXI8SVRva2VuTW9kZWw+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoREFfU0VSVklDRV9UT0tFTikgcHJpdmF0ZSB0b2tlblNlcnZpY2U6IElUb2tlblNlcnZpY2UsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICApIHt9XG5cbiAgLyoqXG4gICAqIMOkwr3Cv8OnwpTCqMOnwqrCl8Okwr3Ck8OmwonCk8OlwrzCgMOmwo7CiMOmwp3Cg8OpwqHCtcOvwrzCjMOowr/ClMOlwpvCnsOlwoDCvMOmwpjCryBgT2JzZXJ2YWJsZTxJVG9rZW5Nb2RlbD5gIMOnwpTCqMOkwrrCjsOowq7CosOpwpjChcOmwo7CiMOmwp3Cg8OlwpDCjsOowr/ClMOlwpvCnsOnwprChMOnwrvCk8Omwp7CnFxuICAgKiBAcGFyYW0gdXJsIMOowo7Ct8Olwo/ClsOmwo7CiMOmwp3Cg8OlwpzCsMOlwp3CgFxuICAgKiBAcGFyYW0gY2FsbGJhY2sgw6XCm8Kew6jCsMKDw6jCt8Kvw6fClMKxw6XCnMKww6XCncKAXG4gICAqIEBwYXJhbSBvcHRpb25zLndpbmRvd0ZlYXR1cmVzIMOnwq3CicOlwpDCjCBgd2luZG93Lm9wZW5gIMOnwprChCBgZmVhdHVyZXNgIMOlwo/CgsOmwpXCsMOlwoDCvFxuICAgKi9cbiAgbG9naW4oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgY2FsbGJhY2s/OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIHR5cGU/OiAnd2luZG93JztcbiAgICAgIHdpbmRvd0ZlYXR1cmVzPzogc3RyaW5nO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8SVRva2VuTW9kZWw+O1xuXG4gIC8qKlxuICAgKiDDqMK3wrPDqMK9wqzDqMKHwrPDpsKOwojDpsKdwoPDqcKhwrVcbiAgICogQHBhcmFtIHVybCDDqMKOwrfDpcKPwpbDpsKOwojDpsKdwoPDpcKcwrDDpcKdwoBcbiAgICogQHBhcmFtIGNhbGxiYWNrIMOlwpvCnsOowrDCg8OowrfCr8OnwpTCscOlwpzCsMOlwp3CgFxuICAgKi9cbiAgbG9naW4oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgY2FsbGJhY2s/OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIHR5cGU/OiAnaHJlZic7XG4gICAgfSxcbiAgKTogdm9pZDtcblxuICAvKipcbiAgICogw6jCt8Kzw6jCvcKsw6jCh8Kzw6fCmcK7w6XCvcKVw6nCocK1w6/CvMKMw6jCi8Klw6TCuMK6IGB0eXBlPXdpbmRvd2Agw6bCl8K2w6/CvMKMw6jCv8KUw6XCm8Kew6XCgMK8w6bCmMKvIGBPYnNlcnZhYmxlPElUb2tlbk1vZGVsPmBcbiAgICogQHBhcmFtIHVybCDDqMKOwrfDpcKPwpbDpsKOwojDpsKdwoPDpcKcwrDDpcKdwoBcbiAgICogQHBhcmFtIGNhbGxiYWNrIMOlwr3CkyBgdHlwZT1ocmVmYCDDpsKIwpDDpcKKwp/DpsKXwrbDp8KawoTDpcKbwp7DqMKwwoPDqMK3wq/Dp8KUwrHDpcKcwrDDpcKdwoBcbiAgICogQHBhcmFtIG9wdGlvbnMudHlwZSDDpsKJwpPDpcK8woDDpsKWwrnDpcK8wo/Dr8K8wozDqcK7wpjDqMKuwqQgYHdpbmRvd2BcbiAgICogQHBhcmFtIG9wdGlvbnMud2luZG93RmVhdHVyZXMgw6fCrcKJw6XCkMKMIGB3aW5kb3cub3BlbmAgw6fCmsKEIGBmZWF0dXJlc2Agw6XCj8KCw6bClcKww6XCgMK8XG4gICAqL1xuICBsb2dpbihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBjYWxsYmFjazogc3RyaW5nID0gJy8nLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIHR5cGU/OiBTb2NpYWxPcGVuVHlwZTtcbiAgICAgIHdpbmRvd0ZlYXR1cmVzPzogc3RyaW5nO1xuICAgIH0gPSB7fSxcbiAgKTogT2JzZXJ2YWJsZTxJVG9rZW5Nb2RlbD4gfCB2b2lkIHtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ3dpbmRvdycsXG4gICAgICAgIHdpbmRvd0ZlYXR1cmVzOlxuICAgICAgICAgICdsb2NhdGlvbj15ZXMsaGVpZ2h0PTU3MCx3aWR0aD01MjAsc2Nyb2xsYmFycz15ZXMsc3RhdHVzPXllcycsXG4gICAgICB9LFxuICAgICAgb3B0aW9ucyxcbiAgICApO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKE9QRU5UWVBFLCBvcHRpb25zLnR5cGUpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKEhSRUZDQUxMQkFDSywgY2FsbGJhY2spO1xuICAgIGlmIChvcHRpb25zLnR5cGUgPT09ICdocmVmJykge1xuICAgICAgdGhpcy5kb2MubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl93aW4gPSB3aW5kb3cub3Blbih1cmwsICdfYmxhbmsnLCBvcHRpb25zLndpbmRvd0ZlYXR1cmVzKTtcbiAgICB0aGlzLl93aW4kID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX3dpbiAmJiB0aGlzLl93aW4uY2xvc2VkKSB7XG4gICAgICAgIHRoaXMubmdPbkRlc3Ryb3koKTtcblxuICAgICAgICBsZXQgbW9kZWwgPSB0aGlzLnRva2VuU2VydmljZS5nZXQoKTtcbiAgICAgICAgaWYgKG1vZGVsICYmICFtb2RlbC50b2tlbikgbW9kZWwgPSBudWxsO1xuXG4gICAgICAgIC8vIMOowqfCpsOlwo/CkcOlwo/CmMOmwpvCtMOpwoDCmsOnwp/CpVxuICAgICAgICBpZiAobW9kZWwpIHtcbiAgICAgICAgICB0aGlzLnRva2VuU2VydmljZS5zZXQobW9kZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vYnNlcnZlci5uZXh0KG1vZGVsKTtcbiAgICAgICAgdGhpcy5vYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH0sIDEwMCk7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogT2JzZXJ2ZXI8SVRva2VuTW9kZWw+KSA9PiB7XG4gICAgICB0aGlzLm9ic2VydmVyID0gb2JzZXJ2ZXI7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogw6bCjsKIw6bCncKDw6bCiMKQw6XCisKfw6XCkMKOw6fCmsKEw6XCm8Kew6jCsMKDw6XCpMKEw6fCkMKGXG4gICAqXG4gICAqIEBwYXJhbSByYXdEYXRhIMOmwozCh8Olwq7CmsOlwpvCnsOowrDCg8Oowq7CpMOowq/CgcOkwr/CocOmwoHCr8OvwrzCjMOkwrjCusOnwqnCusOmwpfCtsOkwrvCjsOmwqDCucOmwo3CrsOlwr3Ck8OlwonCjVVSTMOowqfCo8Omwp7CkFxuICAgKi9cbiAgY2FsbGJhY2socmF3RGF0YT86IHN0cmluZyB8IElUb2tlbk1vZGVsKTogSVRva2VuTW9kZWwge1xuICAgIC8vIGZyb20gdXJpXG4gICAgaWYgKCFyYXdEYXRhICYmIHRoaXMucm91dGVyLnVybC5pbmRleE9mKCc/JykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHVybCBtdXNlIGNvbnRhaW4gYSA/YCk7XG4gICAgfVxuICAgIC8vIHBhcnNlXG4gICAgbGV0IGRhdGE6IElUb2tlbk1vZGVsID0geyB0b2tlbjogYGAgfTtcbiAgICBpZiAodHlwZW9mIHJhd0RhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCByaWdodFVybCA9IHJhd0RhdGEuc3BsaXQoJz8nKVsxXS5zcGxpdCgnIycpWzBdO1xuICAgICAgZGF0YSA9IDxhbnk+dGhpcy5yb3V0ZXIucGFyc2VVcmwoJy4vPycgKyByaWdodFVybCkucXVlcnlQYXJhbXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEgPSByYXdEYXRhO1xuICAgIH1cblxuICAgIGlmICghZGF0YSB8fCAhZGF0YS50b2tlbikgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkZSB0b2tlbiBkYXRhYCk7XG4gICAgdGhpcy50b2tlblNlcnZpY2Uuc2V0KGRhdGEpO1xuXG4gICAgY29uc3QgdXJsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oSFJFRkNBTExCQUNLKSB8fCAnLyc7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oSFJFRkNBTExCQUNLKTtcbiAgICBjb25zdCB0eXBlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oT1BFTlRZUEUpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKE9QRU5UWVBFKTtcbiAgICBpZiAodHlwZSA9PT0gJ3dpbmRvdycpIHtcbiAgICAgIHdpbmRvdy5jbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHVybCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuX3dpbiQpO1xuICAgIHRoaXMuX3dpbiQgPSBudWxsO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSVRva2VuTW9kZWwgfSBmcm9tICcuLi90b2tlbi9pbnRlcmZhY2UnO1xuXG5leHBvcnQgY29uc3QgREFfU1RPUkVfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48SVN0b3JlPignQVVUSF9TVE9SRV9UT0tFTicpO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTdG9yZSB7XG4gIGdldChrZXk6IHN0cmluZyk6IElUb2tlbk1vZGVsO1xuXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IElUb2tlbk1vZGVsKTogYm9vbGVhbjtcblxuICByZW1vdmUoa2V5OiBzdHJpbmcpO1xufVxuIiwiaW1wb3J0IHsgSVN0b3JlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSVRva2VuTW9kZWwgfSBmcm9tICcuLi90b2tlbi9pbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgTG9jYWxTdG9yYWdlU3RvcmUgaW1wbGVtZW50cyBJU3RvcmUge1xuICBnZXQoa2V5OiBzdHJpbmcpOiBJVG9rZW5Nb2RlbCB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSB8fCAne30nKSB8fCB7fTtcbiAgfVxuXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IElUb2tlbk1vZGVsKTogYm9vbGVhbiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmVtb3ZlKGtleTogc3RyaW5nKSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSVN0b3JlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSVRva2VuTW9kZWwgfSBmcm9tICcuLi90b2tlbi9pbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgTWVtb3J5U3RvcmUgaW1wbGVtZW50cyBJU3RvcmUge1xuICBwcml2YXRlIGNhY2hlOiB7IFtrZXk6IHN0cmluZ106IElUb2tlbk1vZGVsIH0gPSB7fTtcblxuICBnZXQoa2V5OiBzdHJpbmcpOiBJVG9rZW5Nb2RlbCB7XG4gICAgcmV0dXJuIHRoaXMuY2FjaGVba2V5XSB8fCA8YW55Pnt9O1xuICB9XG5cbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogSVRva2VuTW9kZWwpOiBib29sZWFuIHtcbiAgICB0aGlzLmNhY2hlW2tleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJlbW92ZShrZXk6IHN0cmluZykge1xuICAgIHRoaXMuY2FjaGVba2V5XSA9IG51bGw7XG4gIH1cbn1cbiIsImltcG9ydCB7IElTdG9yZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IElUb2tlbk1vZGVsIH0gZnJvbSAnLi4vdG9rZW4vaW50ZXJmYWNlJztcblxuZXhwb3J0IGNsYXNzIFNlc3Npb25TdG9yYWdlU3RvcmUgaW1wbGVtZW50cyBJU3RvcmUge1xuICBnZXQoa2V5OiBzdHJpbmcpOiBJVG9rZW5Nb2RlbCB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShrZXkpIHx8ICd7fScpIHx8IHt9O1xuICB9XG5cbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogSVRva2VuTW9kZWwpOiBib29sZWFuIHtcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJlbW92ZShrZXk6IHN0cmluZykge1xuICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIERlbG9uQXV0aENvbmZpZyB7XG4gIC8qKlxuICAgKiDDpcKtwpjDpcKCwqhLRVnDpcKAwrxcbiAgICovXG4gIHN0b3JlX2tleT8gPSAnX3Rva2VuJztcbiAgLyoqXG4gICAqIMOmwpfCoMOmwpXCiMOmwpfCtsOowrfCs8Oowr3CrMOowofCs8OnwpnCu8Olwr3ClcOpwqHCtcOvwrzCjMOlwozChcOmwovCrMOvwrzCmlxuICAgKiAtIMOmwpfCoMOmwpXCiHRva2Vuw6XCgMK8XG4gICAqIC0gdG9rZW7DpcK3wrLDqMK/wofDpsKcwp/Dr8K8wojDqcKZwpBKV1TDr8K8wolcbiAgICovXG4gIHRva2VuX2ludmFsaWRfcmVkaXJlY3Q/ID0gdHJ1ZTtcbiAgLyoqXG4gICAqIHRva2Vuw6jCv8KHw6bCnMKfw6bCl8K2w6nCl8K0w6XCgcKPw6fCp8K7w6XCgMK8w6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYDEwYCDDp8KnwpLDr8K8wojDpcKNwpXDpMK9wo3Dr8K8wprDp8KnwpLDr8K8wolcbiAgICovXG4gIHRva2VuX2V4cF9vZmZzZXQ/ID0gMTA7XG4gIC8qKlxuICAgKiDDpcKPwpHDqcKAwoF0b2tlbsOlwo/CgsOmwpXCsMOlwpDCjcOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmnRva2VuXG4gICAqL1xuICB0b2tlbl9zZW5kX2tleT8gPSAndG9rZW4nO1xuICAvKipcbiAgICogw6XCj8KRw6nCgMKBdG9rZW7DpsKowqHDpsKdwr/Dr8K8wojDqcK7wpjDqMKuwqTDpMK4wrrDr8K8wppgJHt0b2tlbn1gw6/CvMKJw6/CvMKMw6TCvcK/w6fClMKoIGAke3Rva2VufWAgw6jCocKow6fCpMK6dG9rZW7Dp8KCwrnDpMK9wo3Dp8KswqbDr8K8wozDpMK+wovDpcKmwoLDr8K8wppcbiAgICpcbiAgICogLSBgQmVhcmVyICR7dG9rZW59YFxuICAgKi9cbiAgdG9rZW5fc2VuZF90ZW1wbGF0ZT8gPSAnJHt0b2tlbn0nO1xuICAvKipcbiAgICogw6XCj8KRw6nCgMKBdG9rZW7DpcKPwoLDpsKVwrDDpMK9wo3Dp8K9wq7Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppoZWFkZXJcbiAgICovXG4gIHRva2VuX3NlbmRfcGxhY2U/OiAnaGVhZGVyJyB8ICdib2R5JyB8ICd1cmwnID0gJ2hlYWRlcic7XG4gIC8qKlxuICAgKiDDp8KZwrvDpcK9wpXDqcKhwrXDqMK3wq/Dp8KUwrHDpcKcwrDDpcKdwoBcbiAgICovXG4gIGxvZ2luX3VybD8gPSBgL2xvZ2luYDtcbiAgLyoqXG4gICAqIMOlwr/CvcOnwpXCpVRPS0VOw6fCmsKEVVJMw6XCnMKww6XCncKAw6XCiMKXw6jCocKow6/CvMKMw6nCu8KYw6jCrsKkw6XCgMK8w6TCuMK6w6/CvMKaWyAvXFwvbG9naW4vLCAvYXNzZXRzXFwvLywgL3Bhc3Nwb3J0XFwvLyBdXG4gICAqL1xuICBpZ25vcmVzPzogUmVnRXhwW10gPSBbL1xcL2xvZ2luLywgL2Fzc2V0c1xcLy8sIC9wYXNzcG9ydFxcLy9dO1xuICAvKipcbiAgICogw6XChcKBw6jCrsK4w6XCjMK/w6XCkMKNw6fCmcK7w6XCvcKVS0VZw6/CvMKMw6jCi8Klw6jCr8K3w6bCscKCw6XCj8KCw6bClcKww6TCuMKtw6XCuMKmw6bCnMKJw6jCr8KlS0VZw6jCocKow6fCpMK6w6XCv8K9w6fClcKlVE9LRU5cbiAgICovXG4gIGFsbG93X2Fub255bW91c19rZXk/ID0gYF9hbGxvd19hbm9ueW1vdXNgO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNvbnN0IFdJTkRPVyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxhbnk+KCdXaW5kb3cnKTtcbiIsImltcG9ydCB7IEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2ltcGxlVG9rZW5Nb2RlbCB9IGZyb20gJy4vc2ltcGxlL3NpbXBsZS5tb2RlbCc7XG5pbXBvcnQgeyBKV1RUb2tlbk1vZGVsIH0gZnJvbSAnLi9qd3Qvand0Lm1vZGVsJztcbmltcG9ydCB7IERlbG9uQXV0aENvbmZpZyB9IGZyb20gJy4uL2F1dGguY29uZmlnJztcbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJy4uL3dpbl90b2tlbnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gQ2hlY2tTaW1wbGUobW9kZWw6IFNpbXBsZVRva2VuTW9kZWwpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICBtb2RlbCAhPSBudWxsICYmIHR5cGVvZiBtb2RlbC50b2tlbiA9PT0gJ3N0cmluZycgJiYgbW9kZWwudG9rZW4ubGVuZ3RoID4gMFxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2hlY2tKd3QobW9kZWw6IEpXVFRva2VuTW9kZWwsIG9mZnNldDogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiBtb2RlbCAhPSBudWxsICYmIG1vZGVsLnRva2VuICYmICFtb2RlbC5pc0V4cGlyZWQob2Zmc2V0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRvTG9naW4ob3B0aW9uczogRGVsb25BdXRoQ29uZmlnLCBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgaWYgKG9wdGlvbnMudG9rZW5faW52YWxpZF9yZWRpcmVjdCA9PT0gdHJ1ZSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKC9eaHR0cHM/OlxcL1xcLy9nLnRlc3Qob3B0aW9ucy5sb2dpbl91cmwpKSB7XG4gICAgICAgIGluamVjdG9yLmdldChXSU5ET1cpLmxvY2F0aW9uLmhyZWYgPSBvcHRpb25zLmxvZ2luX3VybDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluamVjdG9yLmdldChSb3V0ZXIpLm5hdmlnYXRlKFtvcHRpb25zLmxvZ2luX3VybF0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RvciwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBSZXF1ZXN0LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cFNlbnRFdmVudCxcbiAgSHR0cEhlYWRlclJlc3BvbnNlLFxuICBIdHRwUHJvZ3Jlc3NFdmVudCxcbiAgSHR0cFJlc3BvbnNlLFxuICBIdHRwVXNlckV2ZW50LFxuICBIdHRwRXZlbnQsXG4gIEh0dHBFcnJvclJlc3BvbnNlLFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBfSHR0cENsaWVudCB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5cbmltcG9ydCB7IElUb2tlbk1vZGVsIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGVsb25BdXRoQ29uZmlnIH0gZnJvbSAnLi4vYXV0aC5jb25maWcnO1xuaW1wb3J0IHsgVG9Mb2dpbiB9IGZyb20gJy4vaGVscGVyJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IpIHt9XG5cbiAgcHJvdGVjdGVkIG1vZGVsOiBJVG9rZW5Nb2RlbDtcblxuICBhYnN0cmFjdCBpc0F1dGgob3B0aW9uczogRGVsb25BdXRoQ29uZmlnKTogYm9vbGVhbjtcblxuICBhYnN0cmFjdCBzZXRSZXEoXG4gICAgcmVxOiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG9wdGlvbnM6IERlbG9uQXV0aENvbmZpZyxcbiAgKTogSHR0cFJlcXVlc3Q8YW55PjtcblxuICBpbnRlcmNlcHQoXG4gICAgcmVxOiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyLFxuICApOiBPYnNlcnZhYmxlPFxuICAgIHwgSHR0cFNlbnRFdmVudFxuICAgIHwgSHR0cEhlYWRlclJlc3BvbnNlXG4gICAgfCBIdHRwUHJvZ3Jlc3NFdmVudFxuICAgIHwgSHR0cFJlc3BvbnNlPGFueT5cbiAgICB8IEh0dHBVc2VyRXZlbnQ8YW55PlxuICA+IHtcbiAgICBjb25zdCBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIG5ldyBEZWxvbkF1dGhDb25maWcoKSxcbiAgICAgIHRoaXMuaW5qZWN0b3IuZ2V0KERlbG9uQXV0aENvbmZpZywgbnVsbCksXG4gICAgKTtcbiAgICBpZiAob3B0aW9ucy5pZ25vcmVzKSB7XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygb3B0aW9ucy5pZ25vcmVzIGFzIFJlZ0V4cFtdKSB7XG4gICAgICAgIGlmIChpdGVtLnRlc3QocmVxLnVybCkpIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIG9wdGlvbnMuYWxsb3dfYW5vbnltb3VzX2tleSAmJlxuICAgICAgKHJlcS5wYXJhbXMuaGFzKG9wdGlvbnMuYWxsb3dfYW5vbnltb3VzX2tleSkgfHxcbiAgICAgICAgdGhpcy5pbmplY3RvclxuICAgICAgICAgIC5nZXQoUm91dGVyKVxuICAgICAgICAgIC5wYXJzZVVybChyZXEudXJsV2l0aFBhcmFtcylcbiAgICAgICAgICAucXVlcnlQYXJhbU1hcC5oYXMob3B0aW9ucy5hbGxvd19hbm9ueW1vdXNfa2V5KSlcbiAgICApIHtcbiAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQXV0aChvcHRpb25zKSkge1xuICAgICAgcmVxID0gdGhpcy5zZXRSZXEocmVxLCBvcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgVG9Mb2dpbihvcHRpb25zLCB0aGlzLmluamVjdG9yKTtcbiAgICAgIC8vIG9ic2VydmVyLmVycm9yw6/CvMKaw6TCvMKaw6XCr8K8w6XCgMKSw6XCkMKOw6fCu8Ktw6bCi8Kmw6bCiMKqw6XCmcKow6bCl8Kgw6bCs8KVw6jCp8Kmw6XCj8KRw6/CvMKMw6XCm8Kgw6bCrcKkw6/CvMKMw6nCnMKAw6jCpsKBw6XCpMKEw6fCkMKGIGBfSHR0cENsaWVudGAgw6fCisK2w6bCgMKBw6nCl8Kuw6nCosKYXG4gICAgICBjb25zdCBoYyA9IHRoaXMuaW5qZWN0b3IuZ2V0KF9IdHRwQ2xpZW50LCBudWxsKTtcbiAgICAgIGlmIChoYykgaGMuZW5kKCk7XG4gICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxIdHRwRXZlbnQ8YW55Pj4pID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0gbmV3IEh0dHBFcnJvclJlc3BvbnNlKHtcbiAgICAgICAgICBzdGF0dXM6IDQwMSxcbiAgICAgICAgICBzdGF0dXNUZXh0OiBgRnJvbSBTaW1wbGUgSW50ZXJjZXB0IC0tPiBodHRwczovL25nLWFsYWluLmNvbS9kb2NzL2F1dGhgLFxuICAgICAgICB9KTtcbiAgICAgICAgb2JzZXJ2ZXIuZXJyb3IocmVzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHNoYXJlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSVRva2VuU2VydmljZSwgSVRva2VuTW9kZWwgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBEQV9TVE9SRV9UT0tFTiwgSVN0b3JlIH0gZnJvbSAnLi4vc3RvcmUvaW50ZXJmYWNlJztcbmltcG9ydCB7IERlbG9uQXV0aENvbmZpZyB9IGZyb20gJy4uL2F1dGguY29uZmlnJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRva2VuU2VydmljZSBpbXBsZW1lbnRzIElUb2tlblNlcnZpY2Uge1xuICBwcml2YXRlIGNoYW5nZSQ6IEJlaGF2aW9yU3ViamVjdDxJVG9rZW5Nb2RlbD4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFxuICAgIElUb2tlbk1vZGVsXG4gID4obnVsbCk7XG4gIHByaXZhdGUgZGF0YTogSVRva2VuTW9kZWw7XG4gIHByaXZhdGUgX3JlZGlyZWN0OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBvcHRpb25zOiBEZWxvbkF1dGhDb25maWcsXG4gICAgQEluamVjdChEQV9TVE9SRV9UT0tFTikgcHJpdmF0ZSBzdG9yZTogSVN0b3JlLFxuICApIHt9XG5cbiAgZ2V0IGxvZ2luX3VybCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMubG9naW5fdXJsO1xuICB9XG5cbiAgc2V0IHJlZGlyZWN0KHVybDogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVkaXJlY3QgPSB1cmw7XG4gIH1cblxuICBnZXQgcmVkaXJlY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlZGlyZWN0IHx8ICcvJztcbiAgfVxuXG4gIHNldChkYXRhOiBJVG9rZW5Nb2RlbCk6IGJvb2xlYW4ge1xuICAgIHRoaXMuY2hhbmdlJC5uZXh0KGRhdGEpO1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnNldCh0aGlzLm9wdGlvbnMuc3RvcmVfa2V5LCBkYXRhKTtcbiAgfVxuXG4gIGdldCh0eXBlPzogYW55KTtcbiAgZ2V0PFQgZXh0ZW5kcyBJVG9rZW5Nb2RlbD4odHlwZT86IHsgbmV3ICgpOiBUIH0pOiBUIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5zdG9yZS5nZXQodGhpcy5vcHRpb25zLnN0b3JlX2tleSk7XG4gICAgcmV0dXJuIHR5cGUgPyAoT2JqZWN0LmFzc2lnbihuZXcgdHlwZSgpLCBkYXRhKSBhcyBUKSA6IChkYXRhIGFzIFQpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5jaGFuZ2UkLm5leHQobnVsbCk7XG4gICAgdGhpcy5zdG9yZS5yZW1vdmUodGhpcy5vcHRpb25zLnN0b3JlX2tleSk7XG4gIH1cblxuICBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxJVG9rZW5Nb2RlbD4ge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSQucGlwZShzaGFyZSgpKTtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHVybEJhc2U2NERlY29kZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIGxldCBvdXRwdXQgPSBzdHIucmVwbGFjZSgvLS9nLCAnKycpLnJlcGxhY2UoL18vZywgJy8nKTtcbiAgc3dpdGNoIChvdXRwdXQubGVuZ3RoICUgNCkge1xuICAgIGNhc2UgMDoge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgMjoge1xuICAgICAgb3V0cHV0ICs9ICc9PSc7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSAzOiB7XG4gICAgICBvdXRwdXQgKz0gJz0nO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYCdhdG9iJyBmYWlsZWQ6IFRoZSBzdHJpbmcgdG8gYmUgZGVjb2RlZCBpcyBub3QgY29ycmVjdGx5IGVuY29kZWQuYCxcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHJldHVybiBiNjREZWNvZGVVbmljb2RlKG91dHB1dCk7XG59XG5cbmZ1bmN0aW9uIGI2NGRlY29kZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IGNoYXJzID1cbiAgICAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuICBsZXQgb3V0cHV0OiBzdHJpbmcgPSAnJztcblxuICBzdHIgPSBTdHJpbmcoc3RyKS5yZXBsYWNlKC89KyQvLCAnJyk7XG5cbiAgZm9yIChcbiAgICAvLyBpbml0aWFsaXplIHJlc3VsdCBhbmQgY291bnRlcnNcbiAgICBsZXQgYmM6IG51bWJlciA9IDAsIGJzOiBhbnksIGJ1ZmZlcjogYW55LCBpZHg6IG51bWJlciA9IDA7XG4gICAgLy8gZ2V0IG5leHQgY2hhcmFjdGVyXG4gICAgKGJ1ZmZlciA9IHN0ci5jaGFyQXQoaWR4KyspKTtcbiAgICAvLyBjaGFyYWN0ZXIgZm91bmQgaW4gdGFibGU/IGluaXRpYWxpemUgYml0IHN0b3JhZ2UgYW5kIGFkZCBpdHMgYXNjaWkgdmFsdWU7XG4gICAgfmJ1ZmZlciAmJlxuICAgICgoYnMgPSBiYyAlIDQgPyBicyAqIDY0ICsgYnVmZmVyIDogYnVmZmVyKSxcbiAgICAvLyBhbmQgaWYgbm90IGZpcnN0IG9mIGVhY2ggNCBjaGFyYWN0ZXJzLFxuICAgIC8vIGNvbnZlcnQgdGhlIGZpcnN0IDggYml0cyB0byBvbmUgYXNjaWkgY2hhcmFjdGVyXG4gICAgYmMrKyAlIDQpXG4gICAgICA/IChvdXRwdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgyNTUgJiAoYnMgPj4gKCgtMiAqIGJjKSAmIDYpKSkpXG4gICAgICA6IDBcbiAgKSB7XG4gICAgLy8gdHJ5IHRvIGZpbmQgY2hhcmFjdGVyIGluIHRhYmxlICgwLTYzLCBub3QgZm91bmQgPT4gLTEpXG4gICAgYnVmZmVyID0gY2hhcnMuaW5kZXhPZihidWZmZXIpO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL2RvY3MvV2ViL0FQSS9XaW5kb3dCYXNlNjQvQmFzZTY0X2VuY29kaW5nX2FuZF9kZWNvZGluZyNUaGVfVW5pY29kZV9Qcm9ibGVtXG5mdW5jdGlvbiBiNjREZWNvZGVVbmljb2RlKHN0cjogYW55KSB7XG4gIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoXG4gICAgQXJyYXkucHJvdG90eXBlLm1hcFxuICAgICAgLmNhbGwoYjY0ZGVjb2RlKHN0ciksIChjOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuICclJyArICgnMDAnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpO1xuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKSxcbiAgKTtcbn1cbiIsImltcG9ydCB7IElUb2tlbk1vZGVsIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IHVybEJhc2U2NERlY29kZSB9IGZyb20gJy4vand0LmhlbHBlcic7XG5cbmV4cG9ydCBjbGFzcyBKV1RUb2tlbk1vZGVsIGltcGxlbWVudHMgSVRva2VuTW9kZWwge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG5cbiAgdG9rZW46IHN0cmluZztcblxuICAvKipcbiAgICogw6jCjsK3w6XCj8KWw6jCvcK9w6jCjcK3w6TCv8Khw6bCgcKvXG4gICAqL1xuICBnZXQgcGF5bG9hZCgpOiBhbnkge1xuICAgIGNvbnN0IHBhcnRzID0gKHRoaXMudG9rZW4gfHwgJycpLnNwbGl0KCcuJyk7XG4gICAgaWYgKHBhcnRzLmxlbmd0aCAhPT0gMykgdGhyb3cgbmV3IEVycm9yKCdKV1QgbXVzdCBoYXZlIDMgcGFydHMnKTtcblxuICAgIGNvbnN0IGRlY29kZWQgPSB1cmxCYXNlNjREZWNvZGUocGFydHNbMV0pO1xuICAgIHJldHVybiBKU09OLnBhcnNlKGRlY29kZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIMOmwqPCgMOmwp/CpVRva2Vuw6bCmMKvw6XCkMKmw6jCv8KHw6bCnMKfw6/CvMKMYHBheWxvYWRgIMOlwr/ChcOpwqHCu8OlwozChcOlwpDCqyBgZXhwYCDDpsKXwrbDpsKcwonDpsKVwohcbiAgICpcbiAgICogQHBhcmFtIG9mZnNldFNlY29uZHMgw6XCgcKPw6fCp8K7w6nCh8KPXG4gICAqL1xuICBpc0V4cGlyZWQob2Zmc2V0U2Vjb25kczogbnVtYmVyID0gMCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGRlY29kZWQgPSB0aGlzLnBheWxvYWQ7XG4gICAgaWYgKCFkZWNvZGVkLmhhc093blByb3BlcnR5KCdleHAnKSkgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoMCk7XG4gICAgZGF0ZS5zZXRVVENTZWNvbmRzKGRlY29kZWQuZXhwKTtcblxuICAgIHJldHVybiAhKGRhdGUudmFsdWVPZigpID4gbmV3IERhdGUoKS52YWx1ZU9mKCkgKyBvZmZzZXRTZWNvbmRzICogMTAwMCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBEZWxvbkF1dGhDb25maWcgfSBmcm9tICcuLi8uLi9hdXRoLmNvbmZpZyc7XG5pbXBvcnQgeyBCYXNlSW50ZXJjZXB0b3IgfSBmcm9tICcuLi9iYXNlLmludGVyY2VwdG9yJztcbmltcG9ydCB7IERBX1NFUlZJQ0VfVE9LRU4gfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSldUVG9rZW5Nb2RlbCB9IGZyb20gJy4vand0Lm1vZGVsJztcbmltcG9ydCB7IENoZWNrSnd0IH0gZnJvbSAnLi4vaGVscGVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEpXVEludGVyY2VwdG9yIGV4dGVuZHMgQmFzZUludGVyY2VwdG9yIHtcbiAgaXNBdXRoKG9wdGlvbnM6IERlbG9uQXV0aENvbmZpZyk6IGJvb2xlYW4ge1xuICAgIHRoaXMubW9kZWwgPSB0aGlzLmluamVjdG9yXG4gICAgICAuZ2V0KERBX1NFUlZJQ0VfVE9LRU4pXG4gICAgICAuZ2V0PEpXVFRva2VuTW9kZWw+KEpXVFRva2VuTW9kZWwpO1xuICAgIHJldHVybiBDaGVja0p3dCh0aGlzLm1vZGVsIGFzIEpXVFRva2VuTW9kZWwsIG9wdGlvbnMudG9rZW5fZXhwX29mZnNldCk7XG4gIH1cblxuICBzZXRSZXEocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBvcHRpb25zOiBEZWxvbkF1dGhDb25maWcpOiBIdHRwUmVxdWVzdDxhbnk+IHtcbiAgICByZXR1cm4gcmVxLmNsb25lKHtcbiAgICAgIHNldEhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3RoaXMubW9kZWwudG9rZW59YCxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBDYW5BY3RpdmF0ZUNoaWxkLCBDYW5Mb2FkIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IERBX1NFUlZJQ0VfVE9LRU4sIElUb2tlblNlcnZpY2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSldUVG9rZW5Nb2RlbCB9IGZyb20gJy4vand0Lm1vZGVsJztcbmltcG9ydCB7IERlbG9uQXV0aENvbmZpZyB9IGZyb20gJy4uLy4uL2F1dGguY29uZmlnJztcbmltcG9ydCB7IENoZWNrSnd0LCBUb0xvZ2luIH0gZnJvbSAnLi4vaGVscGVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEpXVEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUsIENhbkFjdGl2YXRlQ2hpbGQsIENhbkxvYWQge1xuICBwcml2YXRlIGNvZzogRGVsb25BdXRoQ29uZmlnO1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERBX1NFUlZJQ0VfVE9LRU4pIHByaXZhdGUgc3J2OiBJVG9rZW5TZXJ2aWNlLFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIGNvZzogRGVsb25BdXRoQ29uZmlnLFxuICApIHtcbiAgICB0aGlzLmNvZyA9IE9iamVjdC5hc3NpZ24obmV3IERlbG9uQXV0aENvbmZpZygpLCBjb2cpO1xuICB9XG5cbiAgcHJpdmF0ZSBwcm9jZXNzKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJlcyA9IENoZWNrSnd0KFxuICAgICAgdGhpcy5zcnYuZ2V0PEpXVFRva2VuTW9kZWw+KEpXVFRva2VuTW9kZWwpLFxuICAgICAgdGhpcy5jb2cudG9rZW5fZXhwX29mZnNldCxcbiAgICApO1xuICAgIGlmICghcmVzKSB7XG4gICAgICBUb0xvZ2luKHRoaXMuY29nLCB0aGlzLmluamVjdG9yKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIC8vIGxhenkgbG9hZGluZ1xuICBjYW5Mb2FkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3MoKTtcbiAgfVxuICAvLyBhbGwgY2hpbGRyZW4gcm91dGVcbiAgY2FuQWN0aXZhdGVDaGlsZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKCk7XG4gIH1cbiAgLy8gcm91dGVcbiAgY2FuQWN0aXZhdGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VzcygpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJVG9rZW5Nb2RlbCB9IGZyb20gJy4uL2ludGVyZmFjZSc7XG5cbmV4cG9ydCBjbGFzcyBTaW1wbGVUb2tlbk1vZGVsIGltcGxlbWVudHMgSVRva2VuTW9kZWwge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG5cbiAgdG9rZW46IHN0cmluZztcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBEZWxvbkF1dGhDb25maWcgfSBmcm9tICcuLi8uLi9hdXRoLmNvbmZpZyc7XG5pbXBvcnQgeyBTaW1wbGVUb2tlbk1vZGVsIH0gZnJvbSAnLi9zaW1wbGUubW9kZWwnO1xuaW1wb3J0IHsgQmFzZUludGVyY2VwdG9yIH0gZnJvbSAnLi4vYmFzZS5pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBEQV9TRVJWSUNFX1RPS0VOIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IENoZWNrU2ltcGxlIH0gZnJvbSAnLi4vaGVscGVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNpbXBsZUludGVyY2VwdG9yIGV4dGVuZHMgQmFzZUludGVyY2VwdG9yIHtcbiAgaXNBdXRoKG9wdGlvbnM6IERlbG9uQXV0aENvbmZpZyk6IGJvb2xlYW4ge1xuICAgIHRoaXMubW9kZWwgPSB0aGlzLmluamVjdG9yLmdldChEQV9TRVJWSUNFX1RPS0VOKS5nZXQoKSBhcyBTaW1wbGVUb2tlbk1vZGVsO1xuICAgIHJldHVybiBDaGVja1NpbXBsZSh0aGlzLm1vZGVsIGFzIFNpbXBsZVRva2VuTW9kZWwpO1xuICB9XG5cbiAgc2V0UmVxKHJlcTogSHR0cFJlcXVlc3Q8YW55Piwgb3B0aW9uczogRGVsb25BdXRoQ29uZmlnKTogSHR0cFJlcXVlc3Q8YW55PiB7XG4gICAgY29uc3QgdG9rZW4gPSBvcHRpb25zLnRva2VuX3NlbmRfdGVtcGxhdGUucmVwbGFjZShcbiAgICAgIC9cXCRcXHsoW1xcd10rKVxcfS9nLFxuICAgICAgKF86IHN0cmluZywgZykgPT4gdGhpcy5tb2RlbFtnXSxcbiAgICApO1xuICAgIHN3aXRjaCAob3B0aW9ucy50b2tlbl9zZW5kX3BsYWNlKSB7XG4gICAgICBjYXNlICdoZWFkZXInOlxuICAgICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgICAgb2JqW29wdGlvbnMudG9rZW5fc2VuZF9rZXldID0gdG9rZW47XG4gICAgICAgIHJlcSA9IHJlcS5jbG9uZSh7XG4gICAgICAgICAgc2V0SGVhZGVyczogb2JqLFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib2R5JzpcbiAgICAgICAgY29uc3QgYm9keSA9IHJlcS5ib2R5IHx8IHt9O1xuICAgICAgICBib2R5W29wdGlvbnMudG9rZW5fc2VuZF9rZXldID0gdG9rZW47XG4gICAgICAgIHJlcSA9IHJlcS5jbG9uZSh7XG4gICAgICAgICAgYm9keTogYm9keSxcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndXJsJzpcbiAgICAgICAgcmVxID0gcmVxLmNsb25lKHtcbiAgICAgICAgICBwYXJhbXM6IHJlcS5wYXJhbXMuYXBwZW5kKG9wdGlvbnMudG9rZW5fc2VuZF9rZXksIHRva2VuKSxcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gcmVxO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgQ2FuQWN0aXZhdGVDaGlsZCwgQ2FuTG9hZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEQV9TRVJWSUNFX1RPS0VOLCBJVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IENoZWNrU2ltcGxlLCBUb0xvZ2luIH0gZnJvbSAnLi4vaGVscGVyJztcbmltcG9ydCB7IERlbG9uQXV0aENvbmZpZyB9IGZyb20gJy4uLy4uL2F1dGguY29uZmlnJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNpbXBsZUd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUsIENhbkFjdGl2YXRlQ2hpbGQsIENhbkxvYWQge1xuICBwcml2YXRlIGNvZzogRGVsb25BdXRoQ29uZmlnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoREFfU0VSVklDRV9UT0tFTikgcHJpdmF0ZSBzcnY6IElUb2tlblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgY29nOiBEZWxvbkF1dGhDb25maWcsXG4gICkge1xuICAgIHRoaXMuY29nID0gT2JqZWN0LmFzc2lnbihuZXcgRGVsb25BdXRoQ29uZmlnKCksIGNvZyk7XG4gIH1cblxuICBwcml2YXRlIHByb2Nlc3MoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcmVzID0gQ2hlY2tTaW1wbGUodGhpcy5zcnYuZ2V0KCkpO1xuICAgIGlmICghcmVzKSB7XG4gICAgICBUb0xvZ2luKHRoaXMuY29nLCB0aGlzLmluamVjdG9yKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIC8vIGxhenkgbG9hZGluZ1xuICBjYW5Mb2FkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3MoKTtcbiAgfVxuICAvLyBhbGwgY2hpbGRyZW4gcm91dGVcbiAgY2FuQWN0aXZhdGVDaGlsZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKCk7XG4gIH1cbiAgLy8gcm91dGVcbiAgY2FuQWN0aXZhdGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VzcygpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEZWxvbkF1dGhDb25maWcgfSBmcm9tICcuL2F1dGguY29uZmlnJztcbmltcG9ydCB7IERBX1NUT1JFX1RPS0VOIH0gZnJvbSAnLi9zdG9yZS9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgREFfU0VSVklDRV9UT0tFTiB9IGZyb20gJy4vdG9rZW4vaW50ZXJmYWNlJztcbmltcG9ydCB7IExvY2FsU3RvcmFnZVN0b3JlIH0gZnJvbSAnLi9zdG9yZS9sb2NhbC1zdG9yYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi90b2tlbi90b2tlbi5zZXJ2aWNlJztcbmltcG9ydCB7IFNpbXBsZUd1YXJkIH0gZnJvbSAnLi90b2tlbi9zaW1wbGUvc2ltcGxlLmd1YXJkJztcbmltcG9ydCB7IEpXVEd1YXJkIH0gZnJvbSAnLi90b2tlbi9qd3Qvand0Lmd1YXJkJztcbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJy4vd2luX3Rva2Vucyc7XG5cbkBOZ01vZHVsZSh7fSlcbmV4cG9ydCBjbGFzcyBEZWxvbkF1dGhNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERlbG9uQXV0aE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IFdJTkRPVywgdXNlVmFsdWU6IHdpbmRvdyB9LFxuICAgICAgICBEZWxvbkF1dGhDb25maWcsXG4gICAgICAgIFNpbXBsZUd1YXJkLFxuICAgICAgICBKV1RHdWFyZCxcbiAgICAgICAgeyBwcm92aWRlOiBEQV9TVE9SRV9UT0tFTiwgdXNlQ2xhc3M6IExvY2FsU3RvcmFnZVN0b3JlIH0sXG4gICAgICAgIHsgcHJvdmlkZTogREFfU0VSVklDRV9UT0tFTiwgdXNlQ2xhc3M6IFRva2VuU2VydmljZSB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQSxNQUFhLGdCQUFnQixHQUFHLElBQUksY0FBYyxDQUNoRCxnQ0FBZ0MsQ0FDakM7Ozs7OztBQ0xEO0FBV0EsTUFBTSxRQUFRLEdBQUcsc0JBQXNCLENBQUM7O0FBQ3hDLE1BQU0sWUFBWSxHQUFHLGdDQUFnQyxDQUFDOzs7Ozs7O0lBVXBELFlBQ29DLFlBQTJCLEVBQ25DLEdBQVEsRUFDMUI7UUFGMEIsaUJBQVksR0FBWixZQUFZLENBQWU7UUFDbkMsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUMxQixXQUFNLEdBQU4sTUFBTTtLQUNaOzs7Ozs7OztJQXFDSixLQUFLLENBQ0gsR0FBVyxFQUNYLFdBQW1CLEdBQUcsRUFDdEIsVUFHSSxFQUFFO1FBRU4sT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQ3JCO1lBQ0UsSUFBSSxFQUFFLFFBQVE7WUFDZCxjQUFjLEVBQ1osNkRBQTZEO1NBQ2hFLEVBQ0QsT0FBTyxDQUNSLENBQUM7UUFDRixZQUFZLENBQUMsT0FB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