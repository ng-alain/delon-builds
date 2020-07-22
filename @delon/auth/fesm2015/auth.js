import { DOCUMENT } from '@angular/common';
import { InjectionToken, inject, Injectable, Inject, Injector, Optional, ɵɵdefineInjectable, ɵɵinject, INJECTOR, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, BehaviorSubject, interval, Observable } from 'rxjs';
import { AlainConfigService } from '@delon/util';
import { share, map, filter } from 'rxjs/operators';
import { HttpParams, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * Generated from: src/auth.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const AUTH_DEFAULT_CONFIG = {
    store_key: `_token`,
    token_invalid_redirect: true,
    token_exp_offset: 10,
    token_send_key: `token`,
    // tslint:disable-next-line: no-invalid-template-strings
    token_send_template: '${token}',
    token_send_place: 'header',
    login_url: '/login',
    ignores: [/\/login/, /assets\//, /passport\//],
    allow_anonymous_key: `_allow_anonymous`,
    executeOtherInterceptors: true,
    refreshTime: 3000,
    refreshOffset: 6000,
};
/**
 * @param {?} srv
 * @return {?}
 */
function mergeConfig(srv) {
    return (/** @type {?} */ (srv.merge('auth', AUTH_DEFAULT_CONFIG)));
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/store/local-storage.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function DA_STORE_TOKEN_LOCAL_FACTORY() {
    return new LocalStorageStore();
}
/**
 * `localStorage` storage, **not lost after closing the browser**.
 *
 * ```ts
 * // global-config.module.ts
 * { provide: DA_STORE_TOKEN, useClass: LocalStorageStore }
 * ```
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
 * Generated from: src/store/interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DA_STORE_TOKEN = new InjectionToken('AUTH_STORE_TOKEN', {
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
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
class TokenService {
    /**
     * @param {?} configSrv
     * @param {?} store
     */
    constructor(configSrv, store) {
        this.store = store;
        this.refresh$ = new Subject();
        this.change$ = new BehaviorSubject(null);
        this._referrer = {};
        this._options = mergeConfig(configSrv);
    }
    /**
     * @return {?}
     */
    get refresh() {
        this.builderRefresh();
        return this.refresh$.pipe(share());
    }
    /**
     * @return {?}
     */
    get login_url() {
        return this._options.login_url;
    }
    /**
     * @return {?}
     */
    get referrer() {
        return this._referrer;
    }
    /**
     * @return {?}
     */
    get options() {
        return this._options;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set(data) {
        this.change$.next(data);
        return this.store.set((/** @type {?} */ (this._options.store_key)), data);
    }
    /**
     * @template T
     * @param {?=} type
     * @return {?}
     */
    get(type) {
        /** @type {?} */
        const data = this.store.get((/** @type {?} */ (this._options.store_key)));
        return type ? ((/** @type {?} */ (Object.assign(new type(), data)))) : ((/** @type {?} */ (data)));
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    clear(options = { onlyToken: false }) {
        /** @type {?} */
        let data = null;
        if (options.onlyToken === true) {
            data = (/** @type {?} */ (this.get()));
            data.token = ``;
            this.set(data);
        }
        else {
            this.store.remove((/** @type {?} */ (this._options.store_key)));
        }
        this.change$.next(data);
    }
    /**
     * @return {?}
     */
    change() {
        return this.change$.pipe(share());
    }
    /**
     * @private
     * @return {?}
     */
    builderRefresh() {
        const { refreshTime, refreshOffset } = this._options;
        this.cleanRefresh();
        this.interval$ = interval(refreshTime)
            .pipe(map((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const item = (/** @type {?} */ (this.get()));
            /** @type {?} */
            const expired = item.expired || 0;
            if (expired <= 0) {
                return null;
            }
            /** @type {?} */
            const curTime = new Date().valueOf() + (/** @type {?} */ (refreshOffset));
            return expired <= curTime ? item : null;
        })), filter((/**
         * @param {?} v
         * @return {?}
         */
        v => v != null)))
            .subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => this.refresh$.next((/** @type {?} */ (res)))));
    }
    /**
     * @private
     * @return {?}
     */
    cleanRefresh() {
        if (this.interval$ && !this.interval$.closed) {
            this.interval$.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.cleanRefresh();
    }
}
TokenService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TokenService.ctorParameters = () => [
    { type: AlainConfigService },
    { type: undefined, decorators: [{ type: Inject, args: [DA_STORE_TOKEN,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    TokenService.prototype.refresh$;
    /**
     * @type {?}
     * @private
     */
    TokenService.prototype.change$;
    /**
     * @type {?}
     * @private
     */
    TokenService.prototype.interval$;
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
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DA_SERVICE_TOKEN = new InjectionToken('DA_SERVICE_TOKEN', {
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
    /**
     * 过期时间，单位：ms
     * - 不管Simple、JWT模式都必须指定
     * @type {?|undefined}
     */
    ITokenModel.prototype.expired;
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
     * 授权失败后跳转路由路径（支持外部链接地址），通过设置[全局配置](https://ng-alain.com/docs/global-config)来改变
     * @type {?}
     */
    ITokenService.prototype.login_url;
    /**
     * 当前请求页面的来源页面的地址
     * @type {?|undefined}
     */
    ITokenService.prototype.referrer;
    /** @type {?} */
    ITokenService.prototype.options;
    /**
     * 订阅刷新，订阅时会自动产生一个定时器，每隔一段时间进行一些校验
     * - **注意** 会多次触发，请务必做好业务判断
     * @type {?}
     */
    ITokenService.prototype.refresh;
    /**
     * 设置 Token 信息，当用户 Token 发生变动时都需要调用此方法重新刷新
     * - 如果需要监听过期，需要传递 `expired` 值
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
     * 清除 Token 信息，当用户退出登录时调用。
     * ```
     * // 清除所有 Token 信息
     * tokenService.clear();
     * // 只清除 token 字段
     * tokenService.clear({ onlyToken: true });
     * ```
     * @param {?=} options
     * @return {?}
     */
    ITokenService.prototype.clear = function (options) { };
    /**
     * 订阅 Token 对象变更通知
     * @return {?}
     */
    ITokenService.prototype.change = function () { };
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/social/social.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        options = Object.assign({ type: 'window', windowFeatures: 'location=yes,height=570,width=520,scrollbars=yes,status=yes' }, options);
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
        () => {
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
        }), 100);
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.observer = observer;
        }));
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
        // parse
        /** @type {?} */
        let data = { token: `` };
        if (typeof rawData === 'string') {
            /** @type {?} */
            const rightUrl = rawData.split('?')[1].split('#')[0];
            data = (/** @type {?} */ (this.router.parseUrl('./?' + rightUrl).queryParams));
        }
        else {
            data = (/** @type {?} */ (rawData));
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
        clearInterval(this._winTime);
        this._winTime = null;
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
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * 内存存储，关掉浏览器标签后**丢失**。
 *
 * ```ts
 * // global-config.module.ts
 * { provide: DA_STORE_TOKEN, useClass: MemoryStore }
 * ```
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
        return this.cache[key] || ((/** @type {?} */ ({})));
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
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * `sessionStorage` storage, **lost after closing the browser**.
 *
 * ```ts
 * // global-config.module.ts
 * { provide: DA_STORE_TOKEN, useClass: SessionStorageStore }
 * ```
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
 * Generated from: src/store/cookie-storage.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * `cookie` storage, muse be install [js-cookie](https://github.com/js-cookie/js-cookie) libary and import `"node_modules/js-cookie/dist/js.cookie.js"` in `angular.json`
 *
 * ```ts
 * // global-config.module.ts
 * { provide: DA_STORE_TOKEN, useClass: CookieStorageStore }
 * ```
 */
class CookieStorageStore {
    /**
     * @param {?} key
     * @return {?}
     */
    get(key) {
        return JSON.parse(Cookies.get(key) || '{}') || {};
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    set(key, value) {
        Cookies.set(key, JSON.stringify(value));
        return true;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    remove(key) {
        Cookies.remove(key);
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/token/helper.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    const router = injector.get(Router);
    (/** @type {?} */ (((/** @type {?} */ (injector.get(DA_SERVICE_TOKEN)))).referrer)).url = url || router.url;
    if (options.token_invalid_redirect === true) {
        setTimeout((/**
         * @return {?}
         */
        () => {
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
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HttpAuthInterceptorHandler {
    /**
     * @param {?} next
     * @param {?} interceptor
     */
    constructor(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    /**
     * @param {?} req
     * @return {?}
     */
    handle(req) {
        return this.interceptor.intercept(req, this.next);
    }
}
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
        const options = mergeConfig(this.injector.get(AlainConfigService));
        if (Array.isArray(options.ignores)) {
            for (const item of options.ignores) {
                if (item.test(req.url))
                    return next.handle(req);
            }
        }
        /** @type {?} */
        const ingoreKey = (/** @type {?} */ (options.allow_anonymous_key));
        /** @type {?} */
        let ingored = false;
        /** @type {?} */
        let params = req.params;
        /** @type {?} */
        let url = req.url;
        if (req.params.has(ingoreKey)) {
            params = req.params.delete(ingoreKey);
            ingored = true;
        }
        /** @type {?} */
        const urlArr = req.url.split('?');
        if (urlArr.length > 1) {
            /** @type {?} */
            const queryStringParams = new HttpParams({ fromString: urlArr[1] });
            if (queryStringParams.has(ingoreKey)) {
                /** @type {?} */
                const queryString = queryStringParams.delete(ingoreKey).toString();
                url = queryString.length > 0 ? `${urlArr[0]}?${queryString}` : urlArr[0];
                ingored = true;
            }
        }
        if (ingored) {
            return next.handle(req.clone({ params, url }));
        }
        if (this.isAuth(options)) {
            req = this.setReq(req, options);
        }
        else {
            ToLogin(options, this.injector);
            // Interrupt Http request, so need to generate a new Observable
            /** @type {?} */
            const err$ = new Observable((/**
             * @param {?} observer
             * @return {?}
             */
            (observer) => {
                /** @type {?} */
                const res = new HttpErrorResponse({
                    url: req.url,
                    headers: req.headers,
                    status: 401,
                    statusText: `来自 @delon/auth 的拦截，所请求URL未授权，若是登录API可加入 [url?_allow_anonymous=true] 来表示忽略校验，更多方法请参考： https://ng-alain.com/auth/getting-started#AlainAuthConfig\nThe interception from @delon/auth, the requested URL is not authorized. If the login API can add [url?_allow_anonymous=true] to ignore the check, please refer to: https://ng-alain.com/auth/getting-started#AlainAuthConfig`,
                });
                observer.error(res);
            }));
            if (options.executeOtherInterceptors) {
                /** @type {?} */
                const interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
                /** @type {?} */
                const lastInterceptors = interceptors.slice(interceptors.indexOf(this) + 1);
                if (lastInterceptors.length > 0) {
                    /** @type {?} */
                    const chain = lastInterceptors.reduceRight((/**
                     * @param {?} _next
                     * @param {?} _interceptor
                     * @return {?}
                     */
                    (_next, _interceptor) => new HttpAuthInterceptorHandler(_next, _interceptor)), {
                        handle: (/**
                         * @param {?} _
                         * @return {?}
                         */
                        (_) => err$),
                    });
                    return chain.handle(req);
                }
            }
            return err$;
        }
        return next.handle(req);
    }
}
BaseInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BaseInterceptor.ctorParameters = () => [
    { type: Injector, decorators: [{ type: Optional }] }
];
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
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    // tslint:disable:no-conditional-assignment binary-expression-operand-order
    let bc = 0, bs, buffer, idx = 0; 
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
    (c) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }))
        .join(''));
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/token/jwt/jwt.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function JWT() { }
if (false) {
    /**
     * Issuerd
     * @type {?}
     */
    JWT.prototype.iss;
    /**
     * Issued At
     * @type {?}
     */
    JWT.prototype.iat;
    /**
     * Subject
     * @type {?}
     */
    JWT.prototype.sub;
    /**
     * Expiration Time
     * @type {?}
     */
    JWT.prototype.exp;
    /**
     * Audience
     * @type {?}
     */
    JWT.prototype.aud;
    /**
     * Not Before
     * @type {?}
     */
    JWT.prototype.nbf;
    /**
     * JWT ID
     * @type {?}
     */
    JWT.prototype.jti;
    /* Skipping unhandled member: [key: string]: any;*/
    /* Skipping unhandled member: [key: number]: any;*/
}
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
     * 获取过期时间戳（单位：ms）
     * @return {?}
     */
    get exp() {
        /** @type {?} */
        const decoded = this.payload;
        if (!decoded.hasOwnProperty('exp'))
            return null;
        /** @type {?} */
        const date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date.valueOf();
    }
    /**
     * 检查Token是否过期，当`payload` 包含 `exp` 字段时有效，若无 `exp` 字段直接返回 `null`
     *
     * @param {?=} offsetSeconds 偏移量
     * @return {?}
     */
    isExpired(offsetSeconds = 0) {
        /** @type {?} */
        const exp = this.exp;
        if (exp == null)
            return null;
        return !(exp > new Date().valueOf() + offsetSeconds * 1000);
    }
}
if (false) {
    /** @type {?} */
    JWTTokenModel.prototype.token;
    /** @type {?} */
    JWTTokenModel.prototype.expired;
    /* Skipping unhandled member: [key: string]: NzSafeAny;*/
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/token/jwt/jwt.interceptor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * JWT 拦截器
 *
 * ```
 * // app.module.ts
 * { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true}
 * ```
 */
class JWTInterceptor extends BaseInterceptor {
    /**
     * @param {?} options
     * @return {?}
     */
    isAuth(options) {
        this.model = this.injector.get(DA_SERVICE_TOKEN).get(JWTTokenModel);
        return CheckJwt((/** @type {?} */ (this.model)), (/** @type {?} */ (options.token_exp_offset)));
    }
    /**
     * @param {?} req
     * @param {?} _options
     * @return {?}
     */
    setReq(req, _options) {
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
 * Generated from: src/token/jwt/jwt.guard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * JWT 路由守卫, [ACL Document](https://ng-alain.com/auth/guard).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivate: [ JWTGuard ]
 * },
 * {
 *   path: 'my',
 *   canActivateChild: [JWTGuard],
 *   children: [
 *     { path: 'profile', component: MockComponent }
 *   ],
 * },
 * ```
 */
class JWTGuard {
    /**
     * @param {?} srv
     * @param {?} injector
     */
    constructor(srv, injector) {
        this.srv = srv;
        this.injector = injector;
    }
    /**
     * @private
     * @return {?}
     */
    get cog() {
        return this.srv.options;
    }
    /**
     * @private
     * @return {?}
     */
    process() {
        /** @type {?} */
        const res = CheckJwt(this.srv.get(JWTTokenModel), (/** @type {?} */ (this.cog.token_exp_offset)));
        if (!res) {
            ToLogin(this.cog, this.injector, this.url);
        }
        return res;
    }
    // lazy loading
    /**
     * @param {?} route
     * @param {?} _segments
     * @return {?}
     */
    canLoad(route, _segments) {
        this.url = route.path;
        return this.process();
    }
    // all children route
    /**
     * @param {?} _childRoute
     * @param {?} state
     * @return {?}
     */
    canActivateChild(_childRoute, state) {
        this.url = state.url;
        return this.process();
    }
    // route
    /**
     * @param {?} _route
     * @param {?} state
     * @return {?}
     */
    canActivate(_route, state) {
        this.url = state.url;
        return this.process();
    }
}
JWTGuard.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
JWTGuard.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DA_SERVICE_TOKEN,] }] },
    { type: Injector }
];
/** @nocollapse */ JWTGuard.ɵprov = ɵɵdefineInjectable({ factory: function JWTGuard_Factory() { return new JWTGuard(ɵɵinject(DA_SERVICE_TOKEN), ɵɵinject(INJECTOR)); }, token: JWTGuard, providedIn: "root" });
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
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SimpleTokenModel {
}
if (false) {
    /** @type {?} */
    SimpleTokenModel.prototype.token;
    /** @type {?} */
    SimpleTokenModel.prototype.expired;
    /* Skipping unhandled member: [key: string]: NzSafeAny;*/
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/token/simple/simple.interceptor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Simple 拦截器
 *
 * ```
 * // app.module.ts
 * { provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true}
 * ```
 */
class SimpleInterceptor extends BaseInterceptor {
    /**
     * @param {?} _options
     * @return {?}
     */
    isAuth(_options) {
        this.model = (/** @type {?} */ (this.injector.get(DA_SERVICE_TOKEN).get()));
        return CheckSimple((/** @type {?} */ (this.model)));
    }
    /**
     * @param {?} req
     * @param {?} options
     * @return {?}
     */
    setReq(req, options) {
        const { token_send_template, token_send_key } = options;
        /** @type {?} */
        const token = (/** @type {?} */ (token_send_template)).replace(/\$\{([\w]+)\}/g, (/**
         * @param {?} _
         * @param {?} g
         * @return {?}
         */
        (_, g) => this.model[g]));
        switch (options.token_send_place) {
            case 'header':
                /** @type {?} */
                const obj = {};
                obj[(/** @type {?} */ (token_send_key))] = token;
                req = req.clone({
                    setHeaders: obj,
                });
                break;
            case 'body':
                /** @type {?} */
                const body = req.body || {};
                body[(/** @type {?} */ (token_send_key))] = token;
                req = req.clone({
                    body,
                });
                break;
            case 'url':
                req = req.clone({
                    params: req.params.append((/** @type {?} */ (token_send_key)), token),
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
 * Generated from: src/token/simple/simple.guard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Simple 路由守卫, [ACL Document](https://ng-alain.com/auth/guard).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivate: [ SimpleGuard ]
 * },
 * {
 *   path: 'my',
 *   canActivateChild: [SimpleGuard],
 *   children: [
 *     { path: 'profile', component: MockComponent }
 *   ],
 * },
 * ```
 */
class SimpleGuard {
    /**
     * @param {?} srv
     * @param {?} injector
     */
    constructor(srv, injector) {
        this.srv = srv;
        this.injector = injector;
    }
    /**
     * @private
     * @return {?}
     */
    get cog() {
        return this.srv.options;
    }
    /**
     * @private
     * @return {?}
     */
    process() {
        /** @type {?} */
        const res = CheckSimple((/** @type {?} */ (this.srv.get())));
        if (!res) {
            ToLogin(this.cog, this.injector, this.url);
        }
        return res;
    }
    // lazy loading
    /**
     * @param {?} route
     * @param {?} _segments
     * @return {?}
     */
    canLoad(route, _segments) {
        this.url = route.path;
        return this.process();
    }
    // all children route
    /**
     * @param {?} _childRoute
     * @param {?} state
     * @return {?}
     */
    canActivateChild(_childRoute, state) {
        this.url = state.url;
        return this.process();
    }
    // route
    /**
     * @param {?} _route
     * @param {?} state
     * @return {?}
     */
    canActivate(_route, state) {
        this.url = state.url;
        return this.process();
    }
}
SimpleGuard.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
SimpleGuard.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DA_SERVICE_TOKEN,] }] },
    { type: Injector }
];
/** @nocollapse */ SimpleGuard.ɵprov = ɵɵdefineInjectable({ factory: function SimpleGuard_Factory() { return new SimpleGuard(ɵɵinject(DA_SERVICE_TOKEN), ɵɵinject(INJECTOR)); }, token: SimpleGuard, providedIn: "root" });
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
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DelonAuthModule {
}
DelonAuthModule.decorators = [
    { type: NgModule, args: [{},] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: auth.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AUTH_DEFAULT_CONFIG, BaseInterceptor, CookieStorageStore, DA_SERVICE_TOKEN, DA_SERVICE_TOKEN_FACTORY, DA_STORE_TOKEN, DA_STORE_TOKEN_LOCAL_FACTORY, DelonAuthModule, JWTGuard, JWTInterceptor, JWTTokenModel, LocalStorageStore, MemoryStore, SessionStorageStore, SimpleGuard, SimpleInterceptor, SimpleTokenModel, SocialService, TokenService, mergeConfig, urlBase64Decode };
//# sourceMappingURL=auth.js.map
