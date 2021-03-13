/**
 * @license ng-alain(cipchk@qq.com) v11.8.0
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/router'), require('rxjs'), require('@delon/util/config'), require('rxjs/operators'), require('@angular/common/http'), require('@delon/util')) :
    typeof define === 'function' && define.amd ? define('@delon/auth', ['exports', '@angular/common', '@angular/core', '@angular/router', 'rxjs', '@delon/util/config', 'rxjs/operators', '@angular/common/http', '@delon/util'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.auth = {}), global.ng.common, global.ng.core, global.ng.router, global.rxjs, global.config, global.rxjs.operators, global.ng.common.http, global.delon.util));
}(this, (function (exports, common, i0, router, rxjs, config, operators, http, util) { 'use strict';

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
        refreshTime: 3000,
        refreshOffset: 6000,
    };
    function mergeConfig(srv) {
        return srv.merge('auth', AUTH_DEFAULT_CONFIG);
    }

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
    var LocalStorageStore = /** @class */ (function () {
        function LocalStorageStore() {
        }
        LocalStorageStore.prototype.get = function (key) {
            return JSON.parse(localStorage.getItem(key) || '{}') || {};
        };
        LocalStorageStore.prototype.set = function (key, value) {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        };
        LocalStorageStore.prototype.remove = function (key) {
            localStorage.removeItem(key);
        };
        return LocalStorageStore;
    }());

    var DA_STORE_TOKEN = new i0.InjectionToken('AUTH_STORE_TOKEN', {
        providedIn: 'root',
        factory: DA_STORE_TOKEN_LOCAL_FACTORY,
    });

    function DA_SERVICE_TOKEN_FACTORY() {
        return new TokenService(i0.inject(config.AlainConfigService), i0.inject(DA_STORE_TOKEN));
    }
    /**
     * 维护Token信息服务，[在线文档](https://ng-alain.com/auth)
     */
    var TokenService = /** @class */ (function () {
        function TokenService(configSrv, store) {
            this.store = store;
            this.refresh$ = new rxjs.Subject();
            this.change$ = new rxjs.BehaviorSubject(null);
            this._referrer = {};
            this._options = mergeConfig(configSrv);
        }
        Object.defineProperty(TokenService.prototype, "refresh", {
            get: function () {
                this.builderRefresh();
                return this.refresh$.pipe(operators.share());
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TokenService.prototype, "login_url", {
            get: function () {
                return this._options.login_url;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TokenService.prototype, "referrer", {
            get: function () {
                return this._referrer;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TokenService.prototype, "options", {
            get: function () {
                return this._options;
            },
            enumerable: false,
            configurable: true
        });
        TokenService.prototype.set = function (data) {
            this.change$.next(data);
            return this.store.set(this._options.store_key, data);
        };
        TokenService.prototype.get = function (type) {
            var data = this.store.get(this._options.store_key);
            return type ? Object.assign(new type(), data) : data;
        };
        TokenService.prototype.clear = function (options) {
            if (options === void 0) { options = { onlyToken: false }; }
            var data = null;
            if (options.onlyToken === true) {
                data = this.get();
                data.token = "";
                this.set(data);
            }
            else {
                this.store.remove(this._options.store_key);
            }
            this.change$.next(data);
        };
        TokenService.prototype.change = function () {
            return this.change$.pipe(operators.share());
        };
        TokenService.prototype.builderRefresh = function () {
            var _this = this;
            var _a = this._options, refreshTime = _a.refreshTime, refreshOffset = _a.refreshOffset;
            this.cleanRefresh();
            this.interval$ = rxjs.interval(refreshTime)
                .pipe(operators.map(function () {
                var item = _this.get();
                var expired = item.expired || item.exp || 0;
                if (expired <= 0) {
                    return null;
                }
                var curTime = new Date().valueOf() + refreshOffset;
                return expired <= curTime ? item : null;
            }), operators.filter(function (v) { return v != null; }))
                .subscribe(function (res) { return _this.refresh$.next(res); });
        };
        TokenService.prototype.cleanRefresh = function () {
            if (this.interval$ && !this.interval$.closed) {
                this.interval$.unsubscribe();
            }
        };
        TokenService.prototype.ngOnDestroy = function () {
            this.cleanRefresh();
        };
        return TokenService;
    }());
    TokenService.decorators = [
        { type: i0.Injectable }
    ];
    /** @nocollapse */
    TokenService.ctorParameters = function () { return [
        { type: config.AlainConfigService },
        { type: undefined, decorators: [{ type: i0.Inject, args: [DA_STORE_TOKEN,] }] }
    ]; };

    var DA_SERVICE_TOKEN = new i0.InjectionToken('DA_SERVICE_TOKEN', {
        providedIn: 'root',
        factory: DA_SERVICE_TOKEN_FACTORY,
    });

    var OPENTYPE = '_delonAuthSocialType';
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
        SocialService.prototype.login = function (url, callback, options) {
            var _this = this;
            if (callback === void 0) { callback = '/'; }
            if (options === void 0) { options = {}; }
            options = Object.assign({ type: 'window', windowFeatures: 'location=yes,height=570,width=520,scrollbars=yes,status=yes' }, options);
            localStorage.setItem(OPENTYPE, options.type);
            localStorage.setItem(HREFCALLBACK, callback);
            if (options.type === 'href') {
                this.doc.location.href = url;
                return;
            }
            this._win = window.open(url, '_blank', options.windowFeatures);
            this._winTime = setInterval(function () {
                if (_this._win && _this._win.closed) {
                    _this.ngOnDestroy();
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
            return new rxjs.Observable(function (observer) {
                _this.observer = observer;
            });
        };
        /**
         * 授权成功后的回调处理
         *
         * @param rawData 指定回调认证信息，为空时从根据当前URL解析
         */
        SocialService.prototype.callback = function (rawData) {
            // from uri
            if (!rawData && this.router.url.indexOf('?') === -1) {
                throw new Error("url muse contain a ?");
            }
            // parse
            var data = { token: "" };
            if (typeof rawData === 'string') {
                var rightUrl = rawData.split('?')[1].split('#')[0];
                data = this.router.parseUrl('./?' + rightUrl).queryParams;
            }
            else {
                data = rawData;
            }
            if (!data || !data.token)
                throw new Error("invalide token data");
            this.tokenService.set(data);
            var url = localStorage.getItem(HREFCALLBACK) || '/';
            localStorage.removeItem(HREFCALLBACK);
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
        SocialService.prototype.ngOnDestroy = function () {
            clearInterval(this._winTime);
            this._winTime = null;
        };
        return SocialService;
    }());
    SocialService.decorators = [
        { type: i0.Injectable }
    ];
    /** @nocollapse */
    SocialService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Inject, args: [DA_SERVICE_TOKEN,] }] },
        { type: undefined, decorators: [{ type: i0.Inject, args: [common.DOCUMENT,] }] },
        { type: router.Router }
    ]; };

    /**
     * 内存存储，关掉浏览器标签后**丢失**。
     *
     * ```ts
     * // global-config.module.ts
     * { provide: DA_STORE_TOKEN, useClass: MemoryStore }
     * ```
     */
    var MemoryStore = /** @class */ (function () {
        function MemoryStore() {
            this.cache = {};
        }
        MemoryStore.prototype.get = function (key) {
            return this.cache[key] || {};
        };
        MemoryStore.prototype.set = function (key, value) {
            this.cache[key] = value;
            return true;
        };
        MemoryStore.prototype.remove = function (key) {
            this.cache[key] = null;
        };
        return MemoryStore;
    }());

    /**
     * `sessionStorage` storage, **lost after closing the browser**.
     *
     * ```ts
     * // global-config.module.ts
     * { provide: DA_STORE_TOKEN, useClass: SessionStorageStore }
     * ```
     */
    var SessionStorageStore = /** @class */ (function () {
        function SessionStorageStore() {
        }
        SessionStorageStore.prototype.get = function (key) {
            return JSON.parse(sessionStorage.getItem(key) || '{}') || {};
        };
        SessionStorageStore.prototype.set = function (key, value) {
            sessionStorage.setItem(key, JSON.stringify(value));
            return true;
        };
        SessionStorageStore.prototype.remove = function (key) {
            sessionStorage.removeItem(key);
        };
        return SessionStorageStore;
    }());

    /**
     * `cookie` storage
     *
     * ```ts
     * // global-config.module.ts
     * { provide: DA_STORE_TOKEN, useClass: CookieStorageStore }
     * ```
     */
    var CookieStorageStore = /** @class */ (function () {
        function CookieStorageStore(srv) {
            this.srv = srv;
        }
        CookieStorageStore.prototype.get = function (key) {
            return JSON.parse(this.srv.get(key) || '{}') || {};
        };
        CookieStorageStore.prototype.set = function (key, value) {
            this.srv.put(key, JSON.stringify(value));
            return true;
        };
        CookieStorageStore.prototype.remove = function (key) {
            this.srv.remove(key);
        };
        return CookieStorageStore;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    function CheckSimple(model) {
        return model != null && typeof model.token === 'string' && model.token.length > 0;
    }
    function CheckJwt(model, offset) {
        return model != null && !!model.token && !model.isExpired(offset);
    }
    function ToLogin(options, injector, url) {
        var router$1 = injector.get(router.Router);
        injector.get(DA_SERVICE_TOKEN).referrer.url = url || router$1.url;
        if (options.token_invalid_redirect === true) {
            setTimeout(function () {
                if (/^https?:\/\//g.test(options.login_url)) {
                    injector.get(common.DOCUMENT).location.href = options.login_url;
                }
                else {
                    router$1.navigate([options.login_url]);
                }
            });
        }
    }

    var HttpAuthInterceptorHandler = /** @class */ (function () {
        function HttpAuthInterceptorHandler(next, interceptor) {
            this.next = next;
            this.interceptor = interceptor;
        }
        HttpAuthInterceptorHandler.prototype.handle = function (req) {
            return this.interceptor.intercept(req, this.next);
        };
        return HttpAuthInterceptorHandler;
    }());
    var BaseInterceptor = /** @class */ (function () {
        function BaseInterceptor(injector) {
            this.injector = injector;
        }
        BaseInterceptor.prototype.intercept = function (req, next) {
            var e_1, _a;
            var options = mergeConfig(this.injector.get(util.AlainConfigService));
            if (Array.isArray(options.ignores)) {
                try {
                    for (var _b = __values(options.ignores), _c = _b.next(); !_c.done; _c = _b.next()) {
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
            var ingoreKey = options.allow_anonymous_key;
            var ingored = false;
            var params = req.params;
            var url = req.url;
            if (req.params.has(ingoreKey)) {
                params = req.params.delete(ingoreKey);
                ingored = true;
            }
            var urlArr = req.url.split('?');
            if (urlArr.length > 1) {
                var queryStringParams = new http.HttpParams({ fromString: urlArr[1] });
                if (queryStringParams.has(ingoreKey)) {
                    var queryString = queryStringParams.delete(ingoreKey).toString();
                    url = queryString.length > 0 ? urlArr[0] + "?" + queryString : urlArr[0];
                    ingored = true;
                }
            }
            if (ingored) {
                return next.handle(req.clone({ params: params, url: url }));
            }
            if (this.isAuth(options)) {
                req = this.setReq(req, options);
            }
            else {
                ToLogin(options, this.injector);
                // Interrupt Http request, so need to generate a new Observable
                var err$_1 = new rxjs.Observable(function (observer) {
                    var res = new http.HttpErrorResponse({
                        url: req.url,
                        headers: req.headers,
                        status: 401,
                        statusText: "\u6765\u81EA @delon/auth \u7684\u62E6\u622A\uFF0C\u6240\u8BF7\u6C42URL\u672A\u6388\u6743\uFF0C\u82E5\u662F\u767B\u5F55API\u53EF\u52A0\u5165 [url?_allow_anonymous=true] \u6765\u8868\u793A\u5FFD\u7565\u6821\u9A8C\uFF0C\u66F4\u591A\u65B9\u6CD5\u8BF7\u53C2\u8003\uFF1A https://ng-alain.com/auth/getting-started#AlainAuthConfig\nThe interception from @delon/auth, the requested URL is not authorized. If the login API can add [url?_allow_anonymous=true] to ignore the check, please refer to: https://ng-alain.com/auth/getting-started#AlainAuthConfig",
                    });
                    observer.error(res);
                });
                if (options.executeOtherInterceptors) {
                    var interceptors = this.injector.get(http.HTTP_INTERCEPTORS, []);
                    var lastInterceptors = interceptors.slice(interceptors.indexOf(this) + 1);
                    if (lastInterceptors.length > 0) {
                        var chain = lastInterceptors.reduceRight(function (_next, _interceptor) { return new HttpAuthInterceptorHandler(_next, _interceptor); }, {
                            handle: function (_) { return err$_1; },
                        });
                        return chain.handle(req);
                    }
                }
                return err$_1;
            }
            return next.handle(req);
        };
        return BaseInterceptor;
    }());
    BaseInterceptor.decorators = [
        { type: i0.Injectable }
    ];
    /** @nocollapse */
    BaseInterceptor.ctorParameters = function () { return [
        { type: i0.Injector, decorators: [{ type: i0.Optional }] }
    ]; };

    function urlBase64Decode(str) {
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
    function b64decode(str) {
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
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
    function b64DecodeUnicode(str) {
        return decodeURIComponent(Array.prototype.map
            .call(b64decode(str), function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
            .join(''));
    }

    var JWTTokenModel = /** @class */ (function () {
        function JWTTokenModel() {
        }
        Object.defineProperty(JWTTokenModel.prototype, "payload", {
            /**
             * 获取载荷信息
             */
            get: function () {
                var parts = (this.token || '').split('.');
                if (parts.length !== 3)
                    throw new Error('JWT must have 3 parts');
                var decoded = urlBase64Decode(parts[1]);
                return JSON.parse(decoded);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JWTTokenModel.prototype, "exp", {
            /**
             * 获取过期时间戳（单位：ms）
             */
            get: function () {
                var decoded = this.payload;
                if (!decoded.hasOwnProperty('exp'))
                    return null;
                var date = new Date(0);
                date.setUTCSeconds(decoded.exp);
                return date.valueOf();
            },
            enumerable: false,
            configurable: true
        });
        /**
         * 检查Token是否过期，当`payload` 包含 `exp` 字段时有效，若无 `exp` 字段直接返回 `null`
         *
         * @param offsetSeconds 偏移量
         */
        JWTTokenModel.prototype.isExpired = function (offsetSeconds) {
            if (offsetSeconds === void 0) { offsetSeconds = 0; }
            var exp = this.exp;
            if (exp == null)
                return null;
            return !(exp > new Date().valueOf() + offsetSeconds * 1000);
        };
        return JWTTokenModel;
    }());

    /**
     * JWT 拦截器
     *
     * ```
     * // app.module.ts
     * { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true}
     * ```
     */
    var JWTInterceptor = /** @class */ (function (_super) {
        __extends(JWTInterceptor, _super);
        function JWTInterceptor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        JWTInterceptor.prototype.isAuth = function (options) {
            this.model = this.injector.get(DA_SERVICE_TOKEN).get(JWTTokenModel);
            return CheckJwt(this.model, options.token_exp_offset);
        };
        JWTInterceptor.prototype.setReq = function (req, _options) {
            return req.clone({
                setHeaders: {
                    Authorization: "Bearer " + this.model.token,
                },
            });
        };
        return JWTInterceptor;
    }(BaseInterceptor));
    JWTInterceptor.decorators = [
        { type: i0.Injectable }
    ];

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
    var JWTGuard = /** @class */ (function () {
        function JWTGuard(srv, injector) {
            this.srv = srv;
            this.injector = injector;
        }
        Object.defineProperty(JWTGuard.prototype, "cog", {
            get: function () {
                return this.srv.options;
            },
            enumerable: false,
            configurable: true
        });
        JWTGuard.prototype.process = function () {
            var res = CheckJwt(this.srv.get(JWTTokenModel), this.cog.token_exp_offset);
            if (!res) {
                ToLogin(this.cog, this.injector, this.url);
            }
            return res;
        };
        // lazy loading
        JWTGuard.prototype.canLoad = function (route, _segments) {
            this.url = route.path;
            return this.process();
        };
        // all children route
        JWTGuard.prototype.canActivateChild = function (_childRoute, state) {
            this.url = state.url;
            return this.process();
        };
        // route
        JWTGuard.prototype.canActivate = function (_route, state) {
            this.url = state.url;
            return this.process();
        };
        return JWTGuard;
    }());
    /** @nocollapse */ JWTGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function JWTGuard_Factory() { return new JWTGuard(i0.ɵɵinject(DA_SERVICE_TOKEN), i0.ɵɵinject(i0.INJECTOR)); }, token: JWTGuard, providedIn: "root" });
    JWTGuard.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    JWTGuard.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Inject, args: [DA_SERVICE_TOKEN,] }] },
        { type: i0.Injector }
    ]; };

    var SimpleTokenModel = /** @class */ (function () {
        function SimpleTokenModel() {
        }
        return SimpleTokenModel;
    }());

    /**
     * Simple 拦截器
     *
     * ```
     * // app.module.ts
     * { provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true}
     * ```
     */
    var SimpleInterceptor = /** @class */ (function (_super) {
        __extends(SimpleInterceptor, _super);
        function SimpleInterceptor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SimpleInterceptor.prototype.isAuth = function (_options) {
            this.model = this.injector.get(DA_SERVICE_TOKEN).get();
            return CheckSimple(this.model);
        };
        SimpleInterceptor.prototype.setReq = function (req, options) {
            var _this = this;
            var token_send_template = options.token_send_template, token_send_key = options.token_send_key;
            var token = token_send_template.replace(/\$\{([\w]+)\}/g, function (_, g) { return _this.model[g]; });
            switch (options.token_send_place) {
                case 'header':
                    var obj = {};
                    obj[token_send_key] = token;
                    req = req.clone({
                        setHeaders: obj,
                    });
                    break;
                case 'body':
                    var body = req.body || {};
                    body[token_send_key] = token;
                    req = req.clone({
                        body: body,
                    });
                    break;
                case 'url':
                    req = req.clone({
                        params: req.params.append(token_send_key, token),
                    });
                    break;
            }
            return req;
        };
        return SimpleInterceptor;
    }(BaseInterceptor));
    SimpleInterceptor.decorators = [
        { type: i0.Injectable }
    ];

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
    var SimpleGuard = /** @class */ (function () {
        function SimpleGuard(srv, injector) {
            this.srv = srv;
            this.injector = injector;
        }
        Object.defineProperty(SimpleGuard.prototype, "cog", {
            get: function () {
                return this.srv.options;
            },
            enumerable: false,
            configurable: true
        });
        SimpleGuard.prototype.process = function () {
            var res = CheckSimple(this.srv.get());
            if (!res) {
                ToLogin(this.cog, this.injector, this.url);
            }
            return res;
        };
        // lazy loading
        SimpleGuard.prototype.canLoad = function (route, _segments) {
            this.url = route.path;
            return this.process();
        };
        // all children route
        SimpleGuard.prototype.canActivateChild = function (_childRoute, state) {
            this.url = state.url;
            return this.process();
        };
        // route
        SimpleGuard.prototype.canActivate = function (_route, state) {
            this.url = state.url;
            return this.process();
        };
        return SimpleGuard;
    }());
    /** @nocollapse */ SimpleGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function SimpleGuard_Factory() { return new SimpleGuard(i0.ɵɵinject(DA_SERVICE_TOKEN), i0.ɵɵinject(i0.INJECTOR)); }, token: SimpleGuard, providedIn: "root" });
    SimpleGuard.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    SimpleGuard.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Inject, args: [DA_SERVICE_TOKEN,] }] },
        { type: i0.Injector }
    ]; };

    var DelonAuthModule = /** @class */ (function () {
        function DelonAuthModule() {
        }
        return DelonAuthModule;
    }());
    DelonAuthModule.decorators = [
        { type: i0.NgModule, args: [{},] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AUTH_DEFAULT_CONFIG = AUTH_DEFAULT_CONFIG;
    exports.BaseInterceptor = BaseInterceptor;
    exports.CookieStorageStore = CookieStorageStore;
    exports.DA_SERVICE_TOKEN = DA_SERVICE_TOKEN;
    exports.DA_SERVICE_TOKEN_FACTORY = DA_SERVICE_TOKEN_FACTORY;
    exports.DA_STORE_TOKEN = DA_STORE_TOKEN;
    exports.DA_STORE_TOKEN_LOCAL_FACTORY = DA_STORE_TOKEN_LOCAL_FACTORY;
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
    exports.mergeConfig = mergeConfig;
    exports.urlBase64Decode = urlBase64Decode;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=auth.umd.js.map
