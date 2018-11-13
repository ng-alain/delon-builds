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
const DA_SERVICE_TOKEN = new InjectionToken('DA_SERVICE_TOKEN');

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
            // Interrupt Http request, so need to generate a new Observable
            return new Observable((observer) => {
                /** @type {?} */
                const res = new HttpErrorResponse({
                    url: req.url,
                    headers: req.headers,
                    status: 401,
                    statusText: `From Auth Intercept --> https://ng-alain.com/docs/auth`,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3Rva2VuL2ludGVyZmFjZS50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3NvY2lhbC9zb2NpYWwuc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3N0b3JlL2ludGVyZmFjZS50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3N0b3JlL2xvY2FsLXN0b3JhZ2Uuc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3N0b3JlL21lbW9yeS5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vYXV0aC9zcmMvc3RvcmUvc2Vzc2lvbi1zdG9yYWdlLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi9hdXRoL3NyYy9hdXRoLmNvbmZpZy50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3dpbl90b2tlbnMudHMiLCJuZzovL0BkZWxvbi9hdXRoL3NyYy90b2tlbi9oZWxwZXIudHMiLCJuZzovL0BkZWxvbi9hdXRoL3NyYy90b2tlbi9iYXNlLmludGVyY2VwdG9yLnRzIiwibmc6Ly9AZGVsb24vYXV0aC9zcmMvdG9rZW4vdG9rZW4uc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3Rva2VuL2p3dC9qd3QuaGVscGVyLnRzIiwibmc6Ly9AZGVsb24vYXV0aC9zcmMvdG9rZW4vand0L2p3dC5tb2RlbC50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3Rva2VuL2p3dC9qd3QuaW50ZXJjZXB0b3IudHMiLCJuZzovL0BkZWxvbi9hdXRoL3NyYy90b2tlbi9qd3Qvand0Lmd1YXJkLnRzIiwibmc6Ly9AZGVsb24vYXV0aC9zcmMvdG9rZW4vc2ltcGxlL3NpbXBsZS5tb2RlbC50cyIsIm5nOi8vQGRlbG9uL2F1dGgvc3JjL3Rva2VuL3NpbXBsZS9zaW1wbGUuaW50ZXJjZXB0b3IudHMiLCJuZzovL0BkZWxvbi9hdXRoL3NyYy90b2tlbi9zaW1wbGUvc2ltcGxlLmd1YXJkLnRzIiwibmc6Ly9AZGVsb24vYXV0aC9zcmMvYXV0aC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNvbnN0IERBX1NFUlZJQ0VfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48SVRva2VuU2VydmljZT4oXG4gICdEQV9TRVJWSUNFX1RPS0VOJyxcbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRva2VuTW9kZWwge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG5cbiAgdG9rZW46IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVG9rZW5TZXJ2aWNlIHtcbiAgc2V0KGRhdGE6IElUb2tlbk1vZGVsKTogYm9vbGVhbjtcblxuICAvKipcbiAgICogw6jCjsK3w6XCj8KWVG9rZW7Dr8K8wozDpcK9wqLDpcK8wo/DpcKMwoXDpsKLwqzDr8K8wppcbiAgICogLSBgZ2V0KClgIMOowo7Ct8Olwo/CliBTaW1wbGUgVG9rZW5cbiAgICogLSBgZ2V0PEpXVFRva2VuTW9kZWw+KEpXVFRva2VuTW9kZWwpYCDDqMKOwrfDpcKPwpYgSldUIFRva2VuXG4gICAqL1xuICBnZXQodHlwZT86IGFueSk6IElUb2tlbk1vZGVsO1xuXG4gIC8qKlxuICAgKiDDqMKOwrfDpcKPwpZUb2tlbsOvwrzCjMOlwr3CosOlwrzCj8OlwozChcOmwovCrMOvwrzCmlxuICAgKiAtIGBnZXQoKWAgw6jCjsK3w6XCj8KWIFNpbXBsZSBUb2tlblxuICAgKiAtIGBnZXQ8SldUVG9rZW5Nb2RlbD4oSldUVG9rZW5Nb2RlbClgIMOowo7Ct8Olwo/CliBKV1QgVG9rZW5cbiAgICovXG4gIGdldDxUIGV4dGVuZHMgSVRva2VuTW9kZWw+KHR5cGU/OiBhbnkpOiBUO1xuXG4gIGNsZWFyKCk6IHZvaWQ7XG5cbiAgY2hhbmdlKCk6IE9ic2VydmFibGU8SVRva2VuTW9kZWw+O1xuXG4gIC8qKiDDqMKOwrfDpcKPwpbDp8KZwrvDpcK9wpXDpcKcwrDDpcKdwoAgKi9cbiAgcmVhZG9ubHkgbG9naW5fdXJsOiBzdHJpbmc7XG5cbiAgLyoqIMOnwpnCu8Olwr3ClcOlwpDCjsOowrfCs8Oowr3CrMOlwpzCsMOlwp3CgMOvwrzCjMOmwpzCqsOmwozCh8Olwq7CmsOmwpfCtsOowr/ClMOlwpvCniBgL2AgKi9cbiAgcmVkaXJlY3Q6IHN0cmluZztcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgT2JzZXJ2ZXIsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtcbiAgSVRva2VuTW9kZWwsXG4gIElUb2tlblNlcnZpY2UsXG4gIERBX1NFUlZJQ0VfVE9LRU4sXG59IGZyb20gJy4uL3Rva2VuL2ludGVyZmFjZSc7XG5cbmNvbnN0IE9QRU5UWVBFID0gJ19kZWxvbkF1dGhTb2NpYWxUeXBlJztcbmNvbnN0IEhSRUZDQUxMQkFDSyA9ICdfZGVsb25BdXRoU29jaWFsQ2FsbGJhY2tCeUhyZWYnO1xuXG5leHBvcnQgdHlwZSBTb2NpYWxPcGVuVHlwZSA9ICdocmVmJyB8ICd3aW5kb3cnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU29jaWFsU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX3dpbjogV2luZG93O1xuICBwcml2YXRlIF93aW4kOiBhbnk7XG4gIHByaXZhdGUgb2JzZXJ2ZXI6IE9ic2VydmVyPElUb2tlbk1vZGVsPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERBX1NFUlZJQ0VfVE9LRU4pIHByaXZhdGUgdG9rZW5TZXJ2aWNlOiBJVG9rZW5TZXJ2aWNlLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiDDpMK9wr/Dp8KUwqjDp8KqwpfDpMK9wpPDpsKJwpPDpcK8woDDpsKOwojDpsKdwoPDqcKhwrXDr8K8wozDqMK/wpTDpcKbwp7DpcKAwrzDpsKYwq8gYE9ic2VydmFibGU8SVRva2VuTW9kZWw+YCDDp8KUwqjDpMK6wo7DqMKuwqLDqcKYwoXDpsKOwojDpsKdwoPDpcKQwo7DqMK/wpTDpcKbwp7Dp8KawoTDp8K7wpPDpsKewpxcbiAgICogQHBhcmFtIHVybCDDqMKOwrfDpcKPwpbDpsKOwojDpsKdwoPDpcKcwrDDpcKdwoBcbiAgICogQHBhcmFtIGNhbGxiYWNrIMOlwpvCnsOowrDCg8OowrfCr8OnwpTCscOlwpzCsMOlwp3CgFxuICAgKiBAcGFyYW0gb3B0aW9ucy53aW5kb3dGZWF0dXJlcyDDp8KtwonDpcKQwowgYHdpbmRvdy5vcGVuYCDDp8KawoQgYGZlYXR1cmVzYCDDpcKPwoLDpsKVwrDDpcKAwrxcbiAgICovXG4gIGxvZ2luKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGNhbGxiYWNrPzogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICB0eXBlPzogJ3dpbmRvdyc7XG4gICAgICB3aW5kb3dGZWF0dXJlcz86IHN0cmluZztcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPElUb2tlbk1vZGVsPjtcblxuICAvKipcbiAgICogw6jCt8Kzw6jCvcKsw6jCh8Kzw6bCjsKIw6bCncKDw6nCocK1XG4gICAqIEBwYXJhbSB1cmwgw6jCjsK3w6XCj8KWw6bCjsKIw6bCncKDw6XCnMKww6XCncKAXG4gICAqIEBwYXJhbSBjYWxsYmFjayDDpcKbwp7DqMKwwoPDqMK3wq/Dp8KUwrHDpcKcwrDDpcKdwoBcbiAgICovXG4gIGxvZ2luKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGNhbGxiYWNrPzogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICB0eXBlPzogJ2hyZWYnO1xuICAgIH0sXG4gICk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIMOowrfCs8Oowr3CrMOowofCs8OnwpnCu8Olwr3ClcOpwqHCtcOvwrzCjMOowovCpcOkwrjCuiBgdHlwZT13aW5kb3dgIMOmwpfCtsOvwrzCjMOowr/ClMOlwpvCnsOlwoDCvMOmwpjCryBgT2JzZXJ2YWJsZTxJVG9rZW5Nb2RlbD5gXG4gICAqIEBwYXJhbSB1cmwgw6jCjsK3w6XCj8KWw6bCjsKIw6bCncKDw6XCnMKww6XCncKAXG4gICAqIEBwYXJhbSBjYWxsYmFjayDDpcK9wpMgYHR5cGU9aHJlZmAgw6bCiMKQw6XCisKfw6bCl8K2w6fCmsKEw6XCm8Kew6jCsMKDw6jCt8Kvw6fClMKxw6XCnMKww6XCncKAXG4gICAqIEBwYXJhbSBvcHRpb25zLnR5cGUgw6bCicKTw6XCvMKAw6bClsK5w6XCvMKPw6/CvMKMw6nCu8KYw6jCrsKkIGB3aW5kb3dgXG4gICAqIEBwYXJhbSBvcHRpb25zLndpbmRvd0ZlYXR1cmVzIMOnwq3CicOlwpDCjCBgd2luZG93Lm9wZW5gIMOnwprChCBgZmVhdHVyZXNgIMOlwo/CgsOmwpXCsMOlwoDCvFxuICAgKi9cbiAgbG9naW4oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgY2FsbGJhY2s6IHN0cmluZyA9ICcvJyxcbiAgICBvcHRpb25zOiB7XG4gICAgICB0eXBlPzogU29jaWFsT3BlblR5cGU7XG4gICAgICB3aW5kb3dGZWF0dXJlcz86IHN0cmluZztcbiAgICB9ID0ge30sXG4gICk6IE9ic2VydmFibGU8SVRva2VuTW9kZWw+IHwgdm9pZCB7XG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICd3aW5kb3cnLFxuICAgICAgICB3aW5kb3dGZWF0dXJlczpcbiAgICAgICAgICAnbG9jYXRpb249eWVzLGhlaWdodD01NzAsd2lkdGg9NTIwLHNjcm9sbGJhcnM9eWVzLHN0YXR1cz15ZXMnLFxuICAgICAgfSxcbiAgICAgIG9wdGlvbnMsXG4gICAgKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShPUEVOVFlQRSwgb3B0aW9ucy50eXBlKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShIUkVGQ0FMTEJBQ0ssIGNhbGxiYWNrKTtcbiAgICBpZiAob3B0aW9ucy50eXBlID09PSAnaHJlZicpIHtcbiAgICAgIHRoaXMuZG9jLmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fd2luID0gd2luZG93Lm9wZW4odXJsLCAnX2JsYW5rJywgb3B0aW9ucy53aW5kb3dGZWF0dXJlcyk7XG4gICAgdGhpcy5fd2luJCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl93aW4gJiYgdGhpcy5fd2luLmNsb3NlZCkge1xuICAgICAgICB0aGlzLm5nT25EZXN0cm95KCk7XG5cbiAgICAgICAgbGV0IG1vZGVsID0gdGhpcy50b2tlblNlcnZpY2UuZ2V0KCk7XG4gICAgICAgIGlmIChtb2RlbCAmJiAhbW9kZWwudG9rZW4pIG1vZGVsID0gbnVsbDtcblxuICAgICAgICAvLyDDqMKnwqbDpcKPwpHDpcKPwpjDpsKbwrTDqcKAwprDp8KfwqVcbiAgICAgICAgaWYgKG1vZGVsKSB7XG4gICAgICAgICAgdGhpcy50b2tlblNlcnZpY2Uuc2V0KG1vZGVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIubmV4dChtb2RlbCk7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9LCAxMDApO1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXI6IE9ic2VydmVyPElUb2tlbk1vZGVsPikgPT4ge1xuICAgICAgdGhpcy5vYnNlcnZlciA9IG9ic2VydmVyO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIMOmwo7CiMOmwp3Cg8OmwojCkMOlworCn8OlwpDCjsOnwprChMOlwpvCnsOowrDCg8OlwqTChMOnwpDChlxuICAgKlxuICAgKiBAcGFyYW0gcmF3RGF0YSDDpsKMwofDpcKuwprDpcKbwp7DqMKwwoPDqMKuwqTDqMKvwoHDpMK/wqHDpsKBwq/Dr8K8wozDpMK4wrrDp8KpwrrDpsKXwrbDpMK7wo7DpsKgwrnDpsKNwq7DpcK9wpPDpcKJwo1VUkzDqMKnwqPDpsKewpBcbiAgICovXG4gIGNhbGxiYWNrKHJhd0RhdGE/OiBzdHJpbmcgfCBJVG9rZW5Nb2RlbCk6IElUb2tlbk1vZGVsIHtcbiAgICAvLyBmcm9tIHVyaVxuICAgIGlmICghcmF3RGF0YSAmJiB0aGlzLnJvdXRlci51cmwuaW5kZXhPZignPycpID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB1cmwgbXVzZSBjb250YWluIGEgP2ApO1xuICAgIH1cbiAgICAvLyBwYXJzZVxuICAgIGxldCBkYXRhOiBJVG9rZW5Nb2RlbCA9IHsgdG9rZW46IGBgIH07XG4gICAgaWYgKHR5cGVvZiByYXdEYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgcmlnaHRVcmwgPSByYXdEYXRhLnNwbGl0KCc/JylbMV0uc3BsaXQoJyMnKVswXTtcbiAgICAgIGRhdGEgPSA8YW55PnRoaXMucm91dGVyLnBhcnNlVXJsKCcuLz8nICsgcmlnaHRVcmwpLnF1ZXJ5UGFyYW1zO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhID0gcmF3RGF0YTtcbiAgICB9XG5cbiAgICBpZiAoIWRhdGEgfHwgIWRhdGEudG9rZW4pIHRocm93IG5ldyBFcnJvcihgaW52YWxpZGUgdG9rZW4gZGF0YWApO1xuICAgIHRoaXMudG9rZW5TZXJ2aWNlLnNldChkYXRhKTtcblxuICAgIGNvbnN0IHVybCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKEhSRUZDQUxMQkFDSykgfHwgJy8nO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKEhSRUZDQUxMQkFDSyk7XG4gICAgY29uc3QgdHlwZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKE9QRU5UWVBFKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShPUEVOVFlQRSk7XG4gICAgaWYgKHR5cGUgPT09ICd3aW5kb3cnKSB7XG4gICAgICB3aW5kb3cuY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCh1cmwpO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl93aW4kKTtcbiAgICB0aGlzLl93aW4kID0gbnVsbDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElUb2tlbk1vZGVsIH0gZnJvbSAnLi4vdG9rZW4vaW50ZXJmYWNlJztcblxuZXhwb3J0IGNvbnN0IERBX1NUT1JFX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPElTdG9yZT4oJ0FVVEhfU1RPUkVfVE9LRU4nKTtcblxuZXhwb3J0IGludGVyZmFjZSBJU3RvcmUge1xuICBnZXQoa2V5OiBzdHJpbmcpOiBJVG9rZW5Nb2RlbDtcblxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBJVG9rZW5Nb2RlbCk6IGJvb2xlYW47XG5cbiAgcmVtb3ZlKGtleTogc3RyaW5nKTtcbn1cbiIsImltcG9ydCB7IElTdG9yZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IElUb2tlbk1vZGVsIH0gZnJvbSAnLi4vdG9rZW4vaW50ZXJmYWNlJztcblxuZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZVN0b3JlIGltcGxlbWVudHMgSVN0b3JlIHtcbiAgZ2V0KGtleTogc3RyaW5nKTogSVRva2VuTW9kZWwge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgfHwgJ3t9JykgfHwge307XG4gIH1cblxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBJVG9rZW5Nb2RlbCk6IGJvb2xlYW4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJlbW92ZShrZXk6IHN0cmluZykge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IElTdG9yZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IElUb2tlbk1vZGVsIH0gZnJvbSAnLi4vdG9rZW4vaW50ZXJmYWNlJztcblxuZXhwb3J0IGNsYXNzIE1lbW9yeVN0b3JlIGltcGxlbWVudHMgSVN0b3JlIHtcbiAgcHJpdmF0ZSBjYWNoZTogeyBba2V5OiBzdHJpbmddOiBJVG9rZW5Nb2RlbCB9ID0ge307XG5cbiAgZ2V0KGtleTogc3RyaW5nKTogSVRva2VuTW9kZWwge1xuICAgIHJldHVybiB0aGlzLmNhY2hlW2tleV0gfHwgPGFueT57fTtcbiAgfVxuXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IElUb2tlbk1vZGVsKTogYm9vbGVhbiB7XG4gICAgdGhpcy5jYWNoZVtrZXldID0gdmFsdWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZW1vdmUoa2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLmNhY2hlW2tleV0gPSBudWxsO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJU3RvcmUgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBJVG9rZW5Nb2RlbCB9IGZyb20gJy4uL3Rva2VuL2ludGVyZmFjZSc7XG5cbmV4cG9ydCBjbGFzcyBTZXNzaW9uU3RvcmFnZVN0b3JlIGltcGxlbWVudHMgSVN0b3JlIHtcbiAgZ2V0KGtleTogc3RyaW5nKTogSVRva2VuTW9kZWwge1xuICAgIHJldHVybiBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oa2V5KSB8fCAne30nKSB8fCB7fTtcbiAgfVxuXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IElUb2tlbk1vZGVsKTogYm9vbGVhbiB7XG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZW1vdmUoa2V5OiBzdHJpbmcpIHtcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBEZWxvbkF1dGhDb25maWcge1xuICAvKipcbiAgICogw6XCrcKYw6XCgsKoS0VZw6XCgMK8XG4gICAqL1xuICBzdG9yZV9rZXk/ID0gJ190b2tlbic7XG4gIC8qKlxuICAgKiDDpsKXwqDDpsKVwojDpsKXwrbDqMK3wrPDqMK9wqzDqMKHwrPDp8KZwrvDpcK9wpXDqcKhwrXDr8K8wozDpcKMwoXDpsKLwqzDr8K8wppcbiAgICogLSDDpsKXwqDDpsKVwoh0b2tlbsOlwoDCvFxuICAgKiAtIHRva2Vuw6XCt8Kyw6jCv8KHw6bCnMKfw6/CvMKIw6nCmcKQSldUw6/CvMKJXG4gICAqL1xuICB0b2tlbl9pbnZhbGlkX3JlZGlyZWN0PyA9IHRydWU7XG4gIC8qKlxuICAgKiB0b2tlbsOowr/Ch8OmwpzCn8OmwpfCtsOpwpfCtMOlwoHCj8OnwqfCu8OlwoDCvMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAxMGAgw6fCp8KSw6/CvMKIw6XCjcKVw6TCvcKNw6/CvMKaw6fCp8KSw6/CvMKJXG4gICAqL1xuICB0b2tlbl9leHBfb2Zmc2V0PyA9IDEwO1xuICAvKipcbiAgICogw6XCj8KRw6nCgMKBdG9rZW7DpcKPwoLDpsKVwrDDpcKQwo3Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wpp0b2tlblxuICAgKi9cbiAgdG9rZW5fc2VuZF9rZXk/ID0gJ3Rva2VuJztcbiAgLyoqXG4gICAqIMOlwo/CkcOpwoDCgXRva2Vuw6bCqMKhw6bCncK/w6/CvMKIw6nCu8KYw6jCrsKkw6TCuMK6w6/CvMKaYCR7dG9rZW59YMOvwrzCicOvwrzCjMOkwr3Cv8OnwpTCqCBgJHt0b2tlbn1gIMOowqHCqMOnwqTCunRva2Vuw6fCgsK5w6TCvcKNw6fCrMKmw6/CvMKMw6TCvsKLw6XCpsKCw6/CvMKaXG4gICAqXG4gICAqIC0gYEJlYXJlciAke3Rva2VufWBcbiAgICovXG4gIHRva2VuX3NlbmRfdGVtcGxhdGU/ID0gJyR7dG9rZW59JztcbiAgLyoqXG4gICAqIMOlwo/CkcOpwoDCgXRva2Vuw6XCj8KCw6bClcKww6TCvcKNw6fCvcKuw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaaGVhZGVyXG4gICAqL1xuICB0b2tlbl9zZW5kX3BsYWNlPzogJ2hlYWRlcicgfCAnYm9keScgfCAndXJsJyA9ICdoZWFkZXInO1xuICAvKipcbiAgICogw6fCmcK7w6XCvcKVw6nCocK1w6jCt8Kvw6fClMKxw6XCnMKww6XCncKAXG4gICAqL1xuICBsb2dpbl91cmw/ID0gYC9sb2dpbmA7XG4gIC8qKlxuICAgKiDDpcK/wr3Dp8KVwqVUT0tFTsOnwprChFVSTMOlwpzCsMOlwp3CgMOlwojCl8OowqHCqMOvwrzCjMOpwrvCmMOowq7CpMOlwoDCvMOkwrjCusOvwrzCmlsgL1xcL2xvZ2luLywgL2Fzc2V0c1xcLy8sIC9wYXNzcG9ydFxcLy8gXVxuICAgKi9cbiAgaWdub3Jlcz86IFJlZ0V4cFtdID0gWy9cXC9sb2dpbi8sIC9hc3NldHNcXC8vLCAvcGFzc3BvcnRcXC8vXTtcbiAgLyoqXG4gICAqIMOlwoXCgcOowq7CuMOlwozCv8OlwpDCjcOnwpnCu8Olwr3ClUtFWcOvwrzCjMOowovCpcOowq/Ct8OmwrHCgsOlwo/CgsOmwpXCsMOkwrjCrcOlwrjCpsOmwpzCicOowq/CpUtFWcOowqHCqMOnwqTCusOlwr/CvcOnwpXCpVRPS0VOXG4gICAqL1xuICBhbGxvd19hbm9ueW1vdXNfa2V5PyA9IGBfYWxsb3dfYW5vbnltb3VzYDtcbn1cbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBXSU5ET1cgPSBuZXcgSW5qZWN0aW9uVG9rZW48YW55PignV2luZG93Jyk7XG4iLCJpbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNpbXBsZVRva2VuTW9kZWwgfSBmcm9tICcuL3NpbXBsZS9zaW1wbGUubW9kZWwnO1xuaW1wb3J0IHsgSldUVG9rZW5Nb2RlbCB9IGZyb20gJy4vand0L2p3dC5tb2RlbCc7XG5pbXBvcnQgeyBEZWxvbkF1dGhDb25maWcgfSBmcm9tICcuLi9hdXRoLmNvbmZpZyc7XG5pbXBvcnQgeyBXSU5ET1cgfSBmcm9tICcuLi93aW5fdG9rZW5zJztcblxuZXhwb3J0IGZ1bmN0aW9uIENoZWNrU2ltcGxlKG1vZGVsOiBTaW1wbGVUb2tlbk1vZGVsKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgbW9kZWwgIT0gbnVsbCAmJiB0eXBlb2YgbW9kZWwudG9rZW4gPT09ICdzdHJpbmcnICYmIG1vZGVsLnRva2VuLmxlbmd0aCA+IDBcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENoZWNrSnd0KG1vZGVsOiBKV1RUb2tlbk1vZGVsLCBvZmZzZXQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gbW9kZWwgIT0gbnVsbCAmJiBtb2RlbC50b2tlbiAmJiAhbW9kZWwuaXNFeHBpcmVkKG9mZnNldCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUb0xvZ2luKG9wdGlvbnM6IERlbG9uQXV0aENvbmZpZywgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gIGlmIChvcHRpb25zLnRva2VuX2ludmFsaWRfcmVkaXJlY3QgPT09IHRydWUpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICgvXmh0dHBzPzpcXC9cXC8vZy50ZXN0KG9wdGlvbnMubG9naW5fdXJsKSkge1xuICAgICAgICBpbmplY3Rvci5nZXQoV0lORE9XKS5sb2NhdGlvbi5ocmVmID0gb3B0aW9ucy5sb2dpbl91cmw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmplY3Rvci5nZXQoUm91dGVyKS5uYXZpZ2F0ZShbb3B0aW9ucy5sb2dpbl91cmxdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0b3IsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwUmVxdWVzdCxcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBTZW50RXZlbnQsXG4gIEh0dHBIZWFkZXJSZXNwb25zZSxcbiAgSHR0cFByb2dyZXNzRXZlbnQsXG4gIEh0dHBSZXNwb25zZSxcbiAgSHR0cFVzZXJFdmVudCxcbiAgSHR0cEV2ZW50LFxuICBIdHRwRXJyb3JSZXNwb25zZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgX0h0dHBDbGllbnQgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuXG5pbXBvcnQgeyBJVG9rZW5Nb2RlbCB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IERlbG9uQXV0aENvbmZpZyB9IGZyb20gJy4uL2F1dGguY29uZmlnJztcbmltcG9ydCB7IFRvTG9naW4gfSBmcm9tICcuL2hlbHBlcic7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yKSB7fVxuXG4gIHByb3RlY3RlZCBtb2RlbDogSVRva2VuTW9kZWw7XG5cbiAgYWJzdHJhY3QgaXNBdXRoKG9wdGlvbnM6IERlbG9uQXV0aENvbmZpZyk6IGJvb2xlYW47XG5cbiAgYWJzdHJhY3Qgc2V0UmVxKFxuICAgIHJlcTogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBvcHRpb25zOiBEZWxvbkF1dGhDb25maWcsXG4gICk6IEh0dHBSZXF1ZXN0PGFueT47XG5cbiAgaW50ZXJjZXB0KFxuICAgIHJlcTogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlcixcbiAgKTogT2JzZXJ2YWJsZTxcbiAgICB8IEh0dHBTZW50RXZlbnRcbiAgICB8IEh0dHBIZWFkZXJSZXNwb25zZVxuICAgIHwgSHR0cFByb2dyZXNzRXZlbnRcbiAgICB8IEh0dHBSZXNwb25zZTxhbnk+XG4gICAgfCBIdHRwVXNlckV2ZW50PGFueT5cbiAgPiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICBuZXcgRGVsb25BdXRoQ29uZmlnKCksXG4gICAgICB0aGlzLmluamVjdG9yLmdldChEZWxvbkF1dGhDb25maWcsIG51bGwpLFxuICAgICk7XG4gICAgaWYgKG9wdGlvbnMuaWdub3Jlcykge1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIG9wdGlvbnMuaWdub3JlcyBhcyBSZWdFeHBbXSkge1xuICAgICAgICBpZiAoaXRlbS50ZXN0KHJlcS51cmwpKSByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBvcHRpb25zLmFsbG93X2Fub255bW91c19rZXkgJiZcbiAgICAgIChyZXEucGFyYW1zLmhhcyhvcHRpb25zLmFsbG93X2Fub255bW91c19rZXkpIHx8XG4gICAgICAgIHRoaXMuaW5qZWN0b3JcbiAgICAgICAgICAuZ2V0KFJvdXRlcilcbiAgICAgICAgICAucGFyc2VVcmwocmVxLnVybFdpdGhQYXJhbXMpXG4gICAgICAgICAgLnF1ZXJ5UGFyYW1NYXAuaGFzKG9wdGlvbnMuYWxsb3dfYW5vbnltb3VzX2tleSkpXG4gICAgKSB7XG4gICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0F1dGgob3B0aW9ucykpIHtcbiAgICAgIHJlcSA9IHRoaXMuc2V0UmVxKHJlcSwgb3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFRvTG9naW4ob3B0aW9ucywgdGhpcy5pbmplY3Rvcik7XG4gICAgICAvLyBVbmFibGUgdG8gZ3VhcmFudGVlIGludGVyY2VwdG9yIGV4ZWN1dGlvbiBvcmRlclxuICAgICAgLy8gU28gY2FuY2VsIHRoZSBsb2FkaW5nIHN0YXRlIGFzIG11Y2ggYXMgcG9zc2libGVcbiAgICAgIGNvbnN0IGhjID0gdGhpcy5pbmplY3Rvci5nZXQoX0h0dHBDbGllbnQsIG51bGwpO1xuICAgICAgaWYgKGhjKSBoYy5lbmQoKTtcbiAgICAgIC8vIEludGVycnVwdCBIdHRwIHJlcXVlc3QsIHNvIG5lZWQgdG8gZ2VuZXJhdGUgYSBuZXcgT2JzZXJ2YWJsZVxuICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8SHR0cEV2ZW50PGFueT4+KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcyA9IG5ldyBIdHRwRXJyb3JSZXNwb25zZSh7XG4gICAgICAgICAgdXJsOiByZXEudXJsLFxuICAgICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLFxuICAgICAgICAgIHN0YXR1czogNDAxLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IGBGcm9tIEF1dGggSW50ZXJjZXB0IC0tPiBodHRwczovL25nLWFsYWluLmNvbS9kb2NzL2F1dGhgLFxuICAgICAgICB9KTtcbiAgICAgICAgb2JzZXJ2ZXIuZXJyb3IocmVzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHNoYXJlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSVRva2VuU2VydmljZSwgSVRva2VuTW9kZWwgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBEQV9TVE9SRV9UT0tFTiwgSVN0b3JlIH0gZnJvbSAnLi4vc3RvcmUvaW50ZXJmYWNlJztcbmltcG9ydCB7IERlbG9uQXV0aENvbmZpZyB9IGZyb20gJy4uL2F1dGguY29uZmlnJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRva2VuU2VydmljZSBpbXBsZW1lbnRzIElUb2tlblNlcnZpY2Uge1xuICBwcml2YXRlIGNoYW5nZSQ6IEJlaGF2aW9yU3ViamVjdDxJVG9rZW5Nb2RlbD4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFxuICAgIElUb2tlbk1vZGVsXG4gID4obnVsbCk7XG4gIHByaXZhdGUgZGF0YTogSVRva2VuTW9kZWw7XG4gIHByaXZhdGUgX3JlZGlyZWN0OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBvcHRpb25zOiBEZWxvbkF1dGhDb25maWcsXG4gICAgQEluamVjdChEQV9TVE9SRV9UT0tFTikgcHJpdmF0ZSBzdG9yZTogSVN0b3JlLFxuICApIHt9XG5cbiAgZ2V0IGxvZ2luX3VybCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMubG9naW5fdXJsO1xuICB9XG5cbiAgc2V0IHJlZGlyZWN0KHVybDogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVkaXJlY3QgPSB1cmw7XG4gIH1cblxuICBnZXQgcmVkaXJlY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlZGlyZWN0IHx8ICcvJztcbiAgfVxuXG4gIHNldChkYXRhOiBJVG9rZW5Nb2RlbCk6IGJvb2xlYW4ge1xuICAgIHRoaXMuY2hhbmdlJC5uZXh0KGRhdGEpO1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnNldCh0aGlzLm9wdGlvbnMuc3RvcmVfa2V5LCBkYXRhKTtcbiAgfVxuXG4gIGdldCh0eXBlPzogYW55KTtcbiAgZ2V0PFQgZXh0ZW5kcyBJVG9rZW5Nb2RlbD4odHlwZT86IHsgbmV3ICgpOiBUIH0pOiBUIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5zdG9yZS5nZXQodGhpcy5vcHRpb25zLnN0b3JlX2tleSk7XG4gICAgcmV0dXJuIHR5cGUgPyAoT2JqZWN0LmFzc2lnbihuZXcgdHlwZSgpLCBkYXRhKSBhcyBUKSA6IChkYXRhIGFzIFQpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5jaGFuZ2UkLm5leHQobnVsbCk7XG4gICAgdGhpcy5zdG9yZS5yZW1vdmUodGhpcy5vcHRpb25zLnN0b3JlX2tleSk7XG4gIH1cblxuICBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxJVG9rZW5Nb2RlbD4ge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSQucGlwZShzaGFyZSgpKTtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHVybEJhc2U2NERlY29kZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIGxldCBvdXRwdXQgPSBzdHIucmVwbGFjZSgvLS9nLCAnKycpLnJlcGxhY2UoL18vZywgJy8nKTtcbiAgc3dpdGNoIChvdXRwdXQubGVuZ3RoICUgNCkge1xuICAgIGNhc2UgMDoge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgMjoge1xuICAgICAgb3V0cHV0ICs9ICc9PSc7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSAzOiB7XG4gICAgICBvdXRwdXQgKz0gJz0nO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYCdhdG9iJyBmYWlsZWQ6IFRoZSBzdHJpbmcgdG8gYmUgZGVjb2RlZCBpcyBub3QgY29ycmVjdGx5IGVuY29kZWQuYCxcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHJldHVybiBiNjREZWNvZGVVbmljb2RlKG91dHB1dCk7XG59XG5cbmZ1bmN0aW9uIGI2NGRlY29kZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IGNoYXJzID1cbiAgICAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuICBsZXQgb3V0cHV0OiBzdHJpbmcgPSAnJztcblxuICBzdHIgPSBTdHJpbmcoc3RyKS5yZXBsYWNlKC89KyQvLCAnJyk7XG5cbiAgZm9yIChcbiAgICAvLyBpbml0aWFsaXplIHJlc3VsdCBhbmQgY291bnRlcnNcbiAgICBsZXQgYmM6IG51bWJlciA9IDAsIGJzOiBhbnksIGJ1ZmZlcjogYW55LCBpZHg6IG51bWJlciA9IDA7XG4gICAgLy8gZ2V0IG5leHQgY2hhcmFjdGVyXG4gICAgKGJ1ZmZlciA9IHN0ci5jaGFyQXQoaWR4KyspKTtcbiAgICAvLyBjaGFyYWN0ZXIgZm91bmQgaW4gdGFibGU/IGluaXRpYWxpemUgYml0IHN0b3JhZ2UgYW5kIGFkZCBpdHMgYXNjaWkgdmFsdWU7XG4gICAgfmJ1ZmZlciAmJlxuICAgICgoYnMgPSBiYyAlIDQgPyBicyAqIDY0ICsgYnVmZmVyIDogYnVmZmVyKSxcbiAgICAvLyBhbmQgaWYgbm90IGZpcnN0IG9mIGVhY2ggNCBjaGFyYWN0ZXJzLFxuICAgIC8vIGNvbnZlcnQgdGhlIGZpcnN0IDggYml0cyB0byBvbmUgYXNjaWkgY2hhcmFjdGVyXG4gICAgYmMrKyAlIDQpXG4gICAgICA/IChvdXRwdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgyNTUgJiAoYnMgPj4gKCgtMiAqIGJjKSAmIDYpKSkpXG4gICAgICA6IDBcbiAgKSB7XG4gICAgLy8gdHJ5IHRvIGZpbmQgY2hhcmFjdGVyIGluIHRhYmxlICgwLTYzLCBub3QgZm91bmQgPT4gLTEpXG4gICAgYnVmZmVyID0gY2hhcnMuaW5kZXhPZihidWZmZXIpO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL2RvY3MvV2ViL0FQSS9XaW5kb3dCYXNlNjQvQmFzZTY0X2VuY29kaW5nX2FuZF9kZWNvZGluZyNUaGVfVW5pY29kZV9Qcm9ibGVtXG5mdW5jdGlvbiBiNjREZWNvZGVVbmljb2RlKHN0cjogYW55KSB7XG4gIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoXG4gICAgQXJyYXkucHJvdG90eXBlLm1hcFxuICAgICAgLmNhbGwoYjY0ZGVjb2RlKHN0ciksIChjOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuICclJyArICgnMDAnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpO1xuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKSxcbiAgKTtcbn1cbiIsImltcG9ydCB7IElUb2tlbk1vZGVsIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IHVybEJhc2U2NERlY29kZSB9IGZyb20gJy4vand0LmhlbHBlcic7XG5cbmV4cG9ydCBjbGFzcyBKV1RUb2tlbk1vZGVsIGltcGxlbWVudHMgSVRva2VuTW9kZWwge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG5cbiAgdG9rZW46IHN0cmluZztcblxuICAvKipcbiAgICogw6jCjsK3w6XCj8KWw6jCvcK9w6jCjcK3w6TCv8Khw6bCgcKvXG4gICAqL1xuICBnZXQgcGF5bG9hZCgpOiBhbnkge1xuICAgIGNvbnN0IHBhcnRzID0gKHRoaXMudG9rZW4gfHwgJycpLnNwbGl0KCcuJyk7XG4gICAgaWYgKHBhcnRzLmxlbmd0aCAhPT0gMykgdGhyb3cgbmV3IEVycm9yKCdKV1QgbXVzdCBoYXZlIDMgcGFydHMnKTtcblxuICAgIGNvbnN0IGRlY29kZWQgPSB1cmxCYXNlNjREZWNvZGUocGFydHNbMV0pO1xuICAgIHJldHVybiBKU09OLnBhcnNlKGRlY29kZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIMOmwqPCgMOmwp/CpVRva2Vuw6bCmMKvw6XCkMKmw6jCv8KHw6bCnMKfw6/CvMKMYHBheWxvYWRgIMOlwr/ChcOpwqHCu8OlwozChcOlwpDCqyBgZXhwYCDDpsKXwrbDpsKcwonDpsKVwohcbiAgICpcbiAgICogQHBhcmFtIG9mZnNldFNlY29uZHMgw6XCgcKPw6fCp8K7w6nCh8KPXG4gICAqL1xuICBpc0V4cGlyZWQob2Zmc2V0U2Vjb25kczogbnVtYmVyID0gMCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGRlY29kZWQgPSB0aGlzLnBheWxvYWQ7XG4gICAgaWYgKCFkZWNvZGVkLmhhc093blByb3BlcnR5KCdleHAnKSkgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoMCk7XG4gICAgZGF0ZS5zZXRVVENTZWNvbmRzKGRlY29kZWQuZXhwKTtcblxuICAgIHJldHVybiAhKGRhdGUudmFsdWVPZigpID4gbmV3IERhdGUoKS52YWx1ZU9mKCkgKyBvZmZzZXRTZWNvbmRzICogMTAwMCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBEZWxvbkF1dGhDb25maWcgfSBmcm9tICcuLi8uLi9hdXRoLmNvbmZpZyc7XG5pbXBvcnQgeyBCYXNlSW50ZXJjZXB0b3IgfSBmcm9tICcuLi9iYXNlLmludGVyY2VwdG9yJztcbmltcG9ydCB7IERBX1NFUlZJQ0VfVE9LRU4gfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSldUVG9rZW5Nb2RlbCB9IGZyb20gJy4vand0Lm1vZGVsJztcbmltcG9ydCB7IENoZWNrSnd0IH0gZnJvbSAnLi4vaGVscGVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEpXVEludGVyY2VwdG9yIGV4dGVuZHMgQmFzZUludGVyY2VwdG9yIHtcbiAgaXNBdXRoKG9wdGlvbnM6IERlbG9uQXV0aENvbmZpZyk6IGJvb2xlYW4ge1xuICAgIHRoaXMubW9kZWwgPSB0aGlzLmluamVjdG9yXG4gICAgICAuZ2V0KERBX1NFUlZJQ0VfVE9LRU4pXG4gICAgICAuZ2V0PEpXVFRva2VuTW9kZWw+KEpXVFRva2VuTW9kZWwpO1xuICAgIHJldHVybiBDaGVja0p3dCh0aGlzLm1vZGVsIGFzIEpXVFRva2VuTW9kZWwsIG9wdGlvbnMudG9rZW5fZXhwX29mZnNldCk7XG4gIH1cblxuICBzZXRSZXEocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBvcHRpb25zOiBEZWxvbkF1dGhDb25maWcpOiBIdHRwUmVxdWVzdDxhbnk+IHtcbiAgICByZXR1cm4gcmVxLmNsb25lKHtcbiAgICAgIHNldEhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3RoaXMubW9kZWwudG9rZW59YCxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBDYW5BY3RpdmF0ZUNoaWxkLCBDYW5Mb2FkIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IERBX1NFUlZJQ0VfVE9LRU4sIElUb2tlblNlcnZpY2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSldUVG9rZW5Nb2RlbCB9IGZyb20gJy4vand0Lm1vZGVsJztcbmltcG9ydCB7IERlbG9uQXV0aENvbmZpZyB9IGZyb20gJy4uLy4uL2F1dGguY29uZmlnJztcbmltcG9ydCB7IENoZWNrSnd0LCBUb0xvZ2luIH0gZnJvbSAnLi4vaGVscGVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEpXVEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUsIENhbkFjdGl2YXRlQ2hpbGQsIENhbkxvYWQge1xuICBwcml2YXRlIGNvZzogRGVsb25BdXRoQ29uZmlnO1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERBX1NFUlZJQ0VfVE9LRU4pIHByaXZhdGUgc3J2OiBJVG9rZW5TZXJ2aWNlLFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIGNvZzogRGVsb25BdXRoQ29uZmlnLFxuICApIHtcbiAgICB0aGlzLmNvZyA9IE9iamVjdC5hc3NpZ24obmV3IERlbG9uQXV0aENvbmZpZygpLCBjb2cpO1xuICB9XG5cbiAgcHJpdmF0ZSBwcm9jZXNzKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJlcyA9IENoZWNrSnd0KFxuICAgICAgdGhpcy5zcnYuZ2V0PEpXVFRva2VuTW9kZWw+KEpXVFRva2VuTW9kZWwpLFxuICAgICAgdGhpcy5jb2cudG9rZW5fZXhwX29mZnNldCxcbiAgICApO1xuICAgIGlmICghcmVzKSB7XG4gICAgICBUb0xvZ2luKHRoaXMuY29nLCB0aGlzLmluamVjdG9yKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIC8vIGxhenkgbG9hZGluZ1xuICBjYW5Mb2FkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3MoKTtcbiAgfVxuICAvLyBhbGwgY2hpbGRyZW4gcm91dGVcbiAgY2FuQWN0aXZhdGVDaGlsZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKCk7XG4gIH1cbiAgLy8gcm91dGVcbiAgY2FuQWN0aXZhdGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VzcygpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJVG9rZW5Nb2RlbCB9IGZyb20gJy4uL2ludGVyZmFjZSc7XG5cbmV4cG9ydCBjbGFzcyBTaW1wbGVUb2tlbk1vZGVsIGltcGxlbWVudHMgSVRva2VuTW9kZWwge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG5cbiAgdG9rZW46IHN0cmluZztcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBEZWxvbkF1dGhDb25maWcgfSBmcm9tICcuLi8uLi9hdXRoLmNvbmZpZyc7XG5pbXBvcnQgeyBTaW1wbGVUb2tlbk1vZGVsIH0gZnJvbSAnLi9zaW1wbGUubW9kZWwnO1xuaW1wb3J0IHsgQmFzZUludGVyY2VwdG9yIH0gZnJvbSAnLi4vYmFzZS5pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBEQV9TRVJWSUNFX1RPS0VOIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IENoZWNrU2ltcGxlIH0gZnJvbSAnLi4vaGVscGVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNpbXBsZUludGVyY2VwdG9yIGV4dGVuZHMgQmFzZUludGVyY2VwdG9yIHtcbiAgaXNBdXRoKG9wdGlvbnM6IERlbG9uQXV0aENvbmZpZyk6IGJvb2xlYW4ge1xuICAgIHRoaXMubW9kZWwgPSB0aGlzLmluamVjdG9yLmdldChEQV9TRVJWSUNFX1RPS0VOKS5nZXQoKSBhcyBTaW1wbGVUb2tlbk1vZGVsO1xuICAgIHJldHVybiBDaGVja1NpbXBsZSh0aGlzLm1vZGVsIGFzIFNpbXBsZVRva2VuTW9kZWwpO1xuICB9XG5cbiAgc2V0UmVxKHJlcTogSHR0cFJlcXVlc3Q8YW55Piwgb3B0aW9uczogRGVsb25BdXRoQ29uZmlnKTogSHR0cFJlcXVlc3Q8YW55PiB7XG4gICAgY29uc3QgdG9rZW4gPSBvcHRpb25zLnRva2VuX3NlbmRfdGVtcGxhdGUucmVwbGFjZShcbiAgICAgIC9cXCRcXHsoW1xcd10rKVxcfS9nLFxuICAgICAgKF86IHN0cmluZywgZykgPT4gdGhpcy5tb2RlbFtnXSxcbiAgICApO1xuICAgIHN3aXRjaCAob3B0aW9ucy50b2tlbl9zZW5kX3BsYWNlKSB7XG4gICAgICBjYXNlICdoZWFkZXInOlxuICAgICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgICAgb2JqW29wdGlvbnMudG9rZW5fc2VuZF9rZXldID0gdG9rZW47XG4gICAgICAgIHJlcSA9IHJlcS5jbG9uZSh7XG4gICAgICAgICAgc2V0SGVhZGVyczogb2JqLFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib2R5JzpcbiAgICAgICAgY29uc3QgYm9keSA9IHJlcS5ib2R5IHx8IHt9O1xuICAgICAgICBib2R5W29wdGlvbnMudG9rZW5fc2VuZF9rZXldID0gdG9rZW47XG4gICAgICAgIHJlcSA9IHJlcS5jbG9uZSh7XG4gICAgICAgICAgYm9keTogYm9keSxcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndXJsJzpcbiAgICAgICAgcmVxID0gcmVxLmNsb25lKHtcbiAgICAgICAgICBwYXJhbXM6IHJlcS5wYXJhbXMuYXBwZW5kKG9wdGlvbnMudG9rZW5fc2VuZF9rZXksIHRva2VuKSxcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gcmVxO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgQ2FuQWN0aXZhdGVDaGlsZCwgQ2FuTG9hZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEQV9TRVJWSUNFX1RPS0VOLCBJVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IENoZWNrU2ltcGxlLCBUb0xvZ2luIH0gZnJvbSAnLi4vaGVscGVyJztcbmltcG9ydCB7IERlbG9uQXV0aENvbmZpZyB9IGZyb20gJy4uLy4uL2F1dGguY29uZmlnJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNpbXBsZUd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUsIENhbkFjdGl2YXRlQ2hpbGQsIENhbkxvYWQge1xuICBwcml2YXRlIGNvZzogRGVsb25BdXRoQ29uZmlnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoREFfU0VSVklDRV9UT0tFTikgcHJpdmF0ZSBzcnY6IElUb2tlblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgY29nOiBEZWxvbkF1dGhDb25maWcsXG4gICkge1xuICAgIHRoaXMuY29nID0gT2JqZWN0LmFzc2lnbihuZXcgRGVsb25BdXRoQ29uZmlnKCksIGNvZyk7XG4gIH1cblxuICBwcml2YXRlIHByb2Nlc3MoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcmVzID0gQ2hlY2tTaW1wbGUodGhpcy5zcnYuZ2V0KCkpO1xuICAgIGlmICghcmVzKSB7XG4gICAgICBUb0xvZ2luKHRoaXMuY29nLCB0aGlzLmluamVjdG9yKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIC8vIGxhenkgbG9hZGluZ1xuICBjYW5Mb2FkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3MoKTtcbiAgfVxuICAvLyBhbGwgY2hpbGRyZW4gcm91dGVcbiAgY2FuQWN0aXZhdGVDaGlsZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKCk7XG4gIH1cbiAgLy8gcm91dGVcbiAgY2FuQWN0aXZhdGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VzcygpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEZWxvbkF1dGhDb25maWcgfSBmcm9tICcuL2F1dGguY29uZmlnJztcbmltcG9ydCB7IERBX1NUT1JFX1RPS0VOIH0gZnJvbSAnLi9zdG9yZS9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgREFfU0VSVklDRV9UT0tFTiB9IGZyb20gJy4vdG9rZW4vaW50ZXJmYWNlJztcbmltcG9ydCB7IExvY2FsU3RvcmFnZVN0b3JlIH0gZnJvbSAnLi9zdG9yZS9sb2NhbC1zdG9yYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi90b2tlbi90b2tlbi5zZXJ2aWNlJztcbmltcG9ydCB7IFNpbXBsZUd1YXJkIH0gZnJvbSAnLi90b2tlbi9zaW1wbGUvc2ltcGxlLmd1YXJkJztcbmltcG9ydCB7IEpXVEd1YXJkIH0gZnJvbSAnLi90b2tlbi9qd3Qvand0Lmd1YXJkJztcbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJy4vd2luX3Rva2Vucyc7XG5cbkBOZ01vZHVsZSh7fSlcbmV4cG9ydCBjbGFzcyBEZWxvbkF1dGhNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERlbG9uQXV0aE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IFdJTkRPVywgdXNlVmFsdWU6IHdpbmRvdyB9LFxuICAgICAgICBEZWxvbkF1dGhDb25maWcsXG4gICAgICAgIFNpbXBsZUd1YXJkLFxuICAgICAgICBKV1RHdWFyZCxcbiAgICAgICAgeyBwcm92aWRlOiBEQV9TVE9SRV9UT0tFTiwgdXNlQ2xhc3M6IExvY2FsU3RvcmFnZVN0b3JlIH0sXG4gICAgICAgIHsgcHJvdmlkZTogREFfU0VSVklDRV9UT0tFTiwgdXNlQ2xhc3M6IFRva2VuU2VydmljZSB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQSxNQUFhLGdCQUFnQixHQUFHLElBQUksY0FBYyxDQUNoRCxrQkFBa0IsQ0FDbkI7Ozs7OztBQ0xEO0FBV0EsTUFBTSxRQUFRLEdBQUcsc0JBQXNCLENBQUM7O0FBQ3hDLE1BQU0sWUFBWSxHQUFHLGdDQUFnQyxDQUFDOzs7Ozs7O0lBVXBELFlBQ29DLFlBQTJCLEVBQ25DLEdBQVEsRUFDMUI7UUFGMEIsaUJBQVksR0FBWixZQUFZLENBQWU7UUFDbkMsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUMxQixXQUFNLEdBQU4sTUFBTTtLQUNaOzs7Ozs7OztJQXFDSixLQUFLLENBQ0gsR0FBVyxFQUNYLFdBQW1CLEdBQUcsRUFDdEIsVUFHSSxFQUFFO1FBRU4sT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQ3JCO1lBQ0UsSUFBSSxFQUFFLFFBQVE7WUFDZCxjQUFjLEVBQ1osNkRBQTZEO1NBQ2hF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