/**
 * @license ng-alain(cipchk@qq.com) v9.4.1
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common/http'), require('@angular/core'), require('@delon/util'), require('date-fns/addSeconds'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/platform')) :
    typeof define === 'function' && define.amd ? define('@delon/cache', ['exports', '@angular/common/http', '@angular/core', '@delon/util', 'date-fns/addSeconds', 'rxjs', 'rxjs/operators', '@angular/cdk/platform'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.cache = {}), global.ng.common.http, global.ng.core, global.delon.util, global.addSeconds, global.rxjs, global.rxjs.operators, global.ng.cdk.platform));
}(this, (function (exports, http, core, util, addSeconds, rxjs, operators, platform) { 'use strict';

    addSeconds = addSeconds && Object.prototype.hasOwnProperty.call(addSeconds, 'default') ? addSeconds['default'] : addSeconds;

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

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
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

    /**
     * @fileoverview added by tsickle
     * Generated from: src/interface.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function ICache() { }
    if (false) {
        /** @type {?} */
        ICache.prototype.v;
        /**
         * 过期时间戳，`0` 表示不过期
         * @type {?}
         */
        ICache.prototype.e;
    }
    /**
     * @record
     */
    function ICacheStore() { }
    if (false) {
        /**
         * @param {?} key
         * @return {?}
         */
        ICacheStore.prototype.get = function (key) { };
        /**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        ICacheStore.prototype.set = function (key, value) { };
        /**
         * @param {?} key
         * @return {?}
         */
        ICacheStore.prototype.remove = function (key) { };
    }
    /**
     * @record
     */
    function CacheNotifyResult() { }
    if (false) {
        /** @type {?} */
        CacheNotifyResult.prototype.type;
        /** @type {?|undefined} */
        CacheNotifyResult.prototype.value;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/local-storage-cache.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DC_STORE_STORAGE_TOKEN = new core.InjectionToken('DC_STORE_STORAGE_TOKEN', {
        providedIn: 'root',
        factory: (/**
         * @return {?}
         */
        function () { return new LocalStorageCacheService(core.inject(platform.Platform)); }),
    });
    var LocalStorageCacheService = /** @class */ (function () {
        function LocalStorageCacheService(platform) {
            this.platform = platform;
        }
        /**
         * @param {?} key
         * @return {?}
         */
        LocalStorageCacheService.prototype.get = /**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            if (!this.platform.isBrowser) {
                return null;
            }
            return JSON.parse(localStorage.getItem(key) || 'null') || null;
        };
        /**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        LocalStorageCacheService.prototype.set = /**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        function (key, value) {
            if (!this.platform.isBrowser) {
                return true;
            }
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        };
        /**
         * @param {?} key
         * @return {?}
         */
        LocalStorageCacheService.prototype.remove = /**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            if (!this.platform.isBrowser) {
                return;
            }
            localStorage.removeItem(key);
        };
        return LocalStorageCacheService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        LocalStorageCacheService.prototype.platform;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/cache.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CacheService = /** @class */ (function () {
        function CacheService(cogSrv, store, http) {
            this.store = store;
            this.http = http;
            this.memory = new Map();
            this.notifyBuffer = new Map();
            this.meta = new Set();
            this.freqTick = 3000;
            this.cog = (/** @type {?} */ (cogSrv.merge('cache', {
                mode: 'promise',
                reName: '',
                prefix: '',
                meta_key: '__cache_meta',
            })));
            this.loadMeta();
            this.startExpireNotify();
        }
        /**
         * @private
         * @param {?} obj
         * @param {?} path
         * @param {?=} defaultValue
         * @return {?}
         */
        CacheService.prototype.deepGet = /**
         * @private
         * @param {?} obj
         * @param {?} path
         * @param {?=} defaultValue
         * @return {?}
         */
        function (obj, path, defaultValue) {
            if (!obj)
                return defaultValue;
            if (path.length <= 1) {
                /** @type {?} */
                var checkObj = path.length ? obj[path[0]] : obj;
                return typeof checkObj === 'undefined' ? defaultValue : checkObj;
            }
            return path.reduce((/**
             * @param {?} o
             * @param {?} k
             * @return {?}
             */
            function (o, k) { return o[k]; }), obj) || defaultValue;
        };
        // #region meta
        // #region meta
        /**
         * @private
         * @param {?} key
         * @return {?}
         */
        CacheService.prototype.pushMeta = 
        // #region meta
        /**
         * @private
         * @param {?} key
         * @return {?}
         */
        function (key) {
            if (this.meta.has(key))
                return;
            this.meta.add(key);
            this.saveMeta();
        };
        /**
         * @private
         * @param {?} key
         * @return {?}
         */
        CacheService.prototype.removeMeta = /**
         * @private
         * @param {?} key
         * @return {?}
         */
        function (key) {
            if (!this.meta.has(key))
                return;
            this.meta.delete(key);
            this.saveMeta();
        };
        /**
         * @private
         * @return {?}
         */
        CacheService.prototype.loadMeta = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var ret = this.store.get((/** @type {?} */ (this.cog.meta_key)));
            if (ret && ret.v) {
                ((/** @type {?} */ (ret.v))).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) { return _this.meta.add(key); }));
            }
        };
        /**
         * @private
         * @return {?}
         */
        CacheService.prototype.saveMeta = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var metaData = [];
            this.meta.forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return metaData.push(key); }));
            this.store.set((/** @type {?} */ (this.cog.meta_key)), { v: metaData, e: 0 });
        };
        /**
         * @return {?}
         */
        CacheService.prototype.getMeta = /**
         * @return {?}
         */
        function () {
            return this.meta;
        };
        /**
         * 缓存对象
         */
        /**
         * 缓存对象
         * @param {?} key
         * @param {?} data
         * @param {?=} options
         * @return {?}
         */
        CacheService.prototype.set = /**
         * 缓存对象
         * @param {?} key
         * @param {?} data
         * @param {?=} options
         * @return {?}
         */
        function (key, data, options) {
            var _this = this;
            if (options === void 0) { options = {}; }
            /** @type {?} */
            var e = 0;
            var _a = this.cog, type = _a.type, expire = _a.expire;
            options = __assign({ type: type,
                expire: expire }, options);
            if (options.expire) {
                e = addSeconds(new Date(), options.expire).valueOf();
            }
            if (!(data instanceof rxjs.Observable)) {
                this.save((/** @type {?} */ (options.type)), key, { v: data, e: e });
                return;
            }
            return data.pipe(operators.tap((/**
             * @param {?} v
             * @return {?}
             */
            function (v) {
                _this.save((/** @type {?} */ (options.type)), key, { v: v, e: e });
            })));
        };
        /**
         * @private
         * @param {?} type
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        CacheService.prototype.save = /**
         * @private
         * @param {?} type
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        function (type, key, value) {
            if (type === 'm') {
                this.memory.set(key, value);
            }
            else {
                this.store.set(this.cog.prefix + key, value);
                this.pushMeta(key);
            }
            this.runNotify(key, 'set');
        };
        /**
         * @param {?} key
         * @param {?=} options
         * @return {?}
         */
        CacheService.prototype.get = /**
         * @param {?} key
         * @param {?=} options
         * @return {?}
         */
        function (key, options) {
            var _this = this;
            if (options === void 0) { options = {}; }
            /** @type {?} */
            var isPromise = options.mode !== 'none' && this.cog.mode === 'promise';
            /** @type {?} */
            var value = this.memory.has(key) ? ((/** @type {?} */ (this.memory.get(key)))) : this.store.get(this.cog.prefix + key);
            if (!value || (value.e && value.e > 0 && value.e < new Date().valueOf())) {
                if (isPromise) {
                    return this.http.get(key).pipe(operators.map((/**
                     * @param {?} ret
                     * @return {?}
                     */
                    function (ret) { return _this.deepGet(ret, (/** @type {?} */ (_this.cog.reName)), null); })), operators.tap((/**
                     * @param {?} v
                     * @return {?}
                     */
                    function (v) { return _this.set(key, v, { type: (/** @type {?} */ (options.type)), expire: options.expire }); })));
                }
                return null;
            }
            return isPromise ? rxjs.of(value.v) : value.v;
        };
        /** 获取缓存数据，若 `key` 不存在或已过期则返回 null */
        /**
         * 获取缓存数据，若 `key` 不存在或已过期则返回 null
         * @param {?} key
         * @return {?}
         */
        CacheService.prototype.getNone = /**
         * 获取缓存数据，若 `key` 不存在或已过期则返回 null
         * @param {?} key
         * @return {?}
         */
        function (key) {
            return this.get(key, { mode: 'none' });
        };
        /**
         * 获取缓存，若不存在则设置缓存对象
         */
        /**
         * 获取缓存，若不存在则设置缓存对象
         * @param {?} key
         * @param {?} data
         * @param {?=} options
         * @return {?}
         */
        CacheService.prototype.tryGet = /**
         * 获取缓存，若不存在则设置缓存对象
         * @param {?} key
         * @param {?} data
         * @param {?=} options
         * @return {?}
         */
        function (key, data, options) {
            if (options === void 0) { options = {}; }
            /** @type {?} */
            var ret = this.getNone(key);
            if (ret === null) {
                if (!(data instanceof rxjs.Observable)) {
                    this.set(key, data, (/** @type {?} */ (options)));
                    return data;
                }
                return this.set(key, (/** @type {?} */ (data)), (/** @type {?} */ (options)));
            }
            return rxjs.of(ret);
        };
        // #endregion
        // #region has
        /** 是否缓存 `key` */
        // #endregion
        // #region has
        /**
         * 是否缓存 `key`
         * @param {?} key
         * @return {?}
         */
        CacheService.prototype.has = 
        // #endregion
        // #region has
        /**
         * 是否缓存 `key`
         * @param {?} key
         * @return {?}
         */
        function (key) {
            return this.memory.has(key) || this.meta.has(key);
        };
        // #endregion
        // #region remove
        // #endregion
        // #region remove
        /**
         * @private
         * @param {?} key
         * @param {?} needNotify
         * @return {?}
         */
        CacheService.prototype._remove = 
        // #endregion
        // #region remove
        /**
         * @private
         * @param {?} key
         * @param {?} needNotify
         * @return {?}
         */
        function (key, needNotify) {
            if (needNotify)
                this.runNotify(key, 'remove');
            if (this.memory.has(key)) {
                this.memory.delete(key);
                return;
            }
            this.store.remove(this.cog.prefix + key);
            this.removeMeta(key);
        };
        /** 移除缓存 */
        /**
         * 移除缓存
         * @param {?} key
         * @return {?}
         */
        CacheService.prototype.remove = /**
         * 移除缓存
         * @param {?} key
         * @return {?}
         */
        function (key) {
            this._remove(key, true);
        };
        /** 清空所有缓存 */
        /**
         * 清空所有缓存
         * @return {?}
         */
        CacheService.prototype.clear = /**
         * 清空所有缓存
         * @return {?}
         */
        function () {
            var _this = this;
            this.notifyBuffer.forEach((/**
             * @param {?} _v
             * @param {?} k
             * @return {?}
             */
            function (_v, k) { return _this.runNotify(k, 'remove'); }));
            this.memory.clear();
            this.meta.forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return _this.store.remove(_this.cog.prefix + key); }));
        };
        Object.defineProperty(CacheService.prototype, "freq", {
            // #endregion
            // #region notify
            /**
             * 设置监听频率，单位：毫秒且最低 `20ms`，默认：`3000ms`
             */
            set: 
            // #endregion
            // #region notify
            /**
             * 设置监听频率，单位：毫秒且最低 `20ms`，默认：`3000ms`
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.freqTick = Math.max(20, value);
                this.abortExpireNotify();
                this.startExpireNotify();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * @return {?}
         */
        CacheService.prototype.startExpireNotify = /**
         * @private
         * @return {?}
         */
        function () {
            this.checkExpireNotify();
            this.runExpireNotify();
        };
        /**
         * @private
         * @return {?}
         */
        CacheService.prototype.runExpireNotify = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this.freqTime = setTimeout((/**
             * @return {?}
             */
            function () {
                _this.checkExpireNotify();
                _this.runExpireNotify();
            }), this.freqTick);
        };
        /**
         * @private
         * @return {?}
         */
        CacheService.prototype.checkExpireNotify = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var removed = [];
            this.notifyBuffer.forEach((/**
             * @param {?} _v
             * @param {?} key
             * @return {?}
             */
            function (_v, key) {
                if (_this.has(key) && _this.getNone(key) === null)
                    removed.push(key);
            }));
            removed.forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                _this.runNotify(key, 'expire');
                _this._remove(key, false);
            }));
        };
        /**
         * @private
         * @return {?}
         */
        CacheService.prototype.abortExpireNotify = /**
         * @private
         * @return {?}
         */
        function () {
            clearTimeout(this.freqTime);
        };
        /**
         * @private
         * @param {?} key
         * @param {?} type
         * @return {?}
         */
        CacheService.prototype.runNotify = /**
         * @private
         * @param {?} key
         * @param {?} type
         * @return {?}
         */
        function (key, type) {
            if (!this.notifyBuffer.has(key))
                return;
            (/** @type {?} */ (this.notifyBuffer.get(key))).next({ type: type, value: this.getNone(key) });
        };
        /**
         * `key` 监听，当 `key` 变更、过期、移除时通知，注意以下若干细节：
         *
         * - 调用后除再次调用 `cancelNotify` 否则永远不过期
         * - 监听器每 `freq` (默认：3秒) 执行一次过期检查
         */
        /**
         * `key` 监听，当 `key` 变更、过期、移除时通知，注意以下若干细节：
         *
         * - 调用后除再次调用 `cancelNotify` 否则永远不过期
         * - 监听器每 `freq` (默认：3秒) 执行一次过期检查
         * @param {?} key
         * @return {?}
         */
        CacheService.prototype.notify = /**
         * `key` 监听，当 `key` 变更、过期、移除时通知，注意以下若干细节：
         *
         * - 调用后除再次调用 `cancelNotify` 否则永远不过期
         * - 监听器每 `freq` (默认：3秒) 执行一次过期检查
         * @param {?} key
         * @return {?}
         */
        function (key) {
            if (!this.notifyBuffer.has(key)) {
                /** @type {?} */
                var change$ = new rxjs.BehaviorSubject(this.getNone(key));
                this.notifyBuffer.set(key, change$);
            }
            return (/** @type {?} */ (this.notifyBuffer.get(key))).asObservable();
        };
        /**
         * 取消 `key` 监听
         */
        /**
         * 取消 `key` 监听
         * @param {?} key
         * @return {?}
         */
        CacheService.prototype.cancelNotify = /**
         * 取消 `key` 监听
         * @param {?} key
         * @return {?}
         */
        function (key) {
            if (!this.notifyBuffer.has(key))
                return;
            (/** @type {?} */ (this.notifyBuffer.get(key))).unsubscribe();
            this.notifyBuffer.delete(key);
        };
        /** `key` 是否已经监听 */
        /**
         * `key` 是否已经监听
         * @param {?} key
         * @return {?}
         */
        CacheService.prototype.hasNotify = /**
         * `key` 是否已经监听
         * @param {?} key
         * @return {?}
         */
        function (key) {
            return this.notifyBuffer.has(key);
        };
        /** 清空所有 `key` 的监听 */
        /**
         * 清空所有 `key` 的监听
         * @return {?}
         */
        CacheService.prototype.clearNotify = /**
         * 清空所有 `key` 的监听
         * @return {?}
         */
        function () {
            this.notifyBuffer.forEach((/**
             * @param {?} v
             * @return {?}
             */
            function (v) { return v.unsubscribe(); }));
            this.notifyBuffer.clear();
        };
        // #endregion
        // #endregion
        /**
         * @return {?}
         */
        CacheService.prototype.ngOnDestroy = 
        // #endregion
        /**
         * @return {?}
         */
        function () {
            this.memory.clear();
            this.abortExpireNotify();
            this.clearNotify();
        };
        CacheService.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        CacheService.ctorParameters = function () { return [
            { type: util.AlainConfigService },
            { type: undefined, decorators: [{ type: core.Inject, args: [DC_STORE_STORAGE_TOKEN,] }] },
            { type: http.HttpClient }
        ]; };
        /** @nocollapse */ CacheService.ɵprov = core.ɵɵdefineInjectable({ factory: function CacheService_Factory() { return new CacheService(core.ɵɵinject(util.AlainConfigService), core.ɵɵinject(DC_STORE_STORAGE_TOKEN), core.ɵɵinject(http.HttpClient)); }, token: CacheService, providedIn: "root" });
        return CacheService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        CacheService.prototype.memory;
        /**
         * @type {?}
         * @private
         */
        CacheService.prototype.notifyBuffer;
        /**
         * @type {?}
         * @private
         */
        CacheService.prototype.meta;
        /**
         * @type {?}
         * @private
         */
        CacheService.prototype.freqTick;
        /**
         * @type {?}
         * @private
         */
        CacheService.prototype.freqTime;
        /**
         * @type {?}
         * @private
         */
        CacheService.prototype.cog;
        /**
         * @type {?}
         * @private
         */
        CacheService.prototype.store;
        /**
         * @type {?}
         * @private
         */
        CacheService.prototype.http;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/cache.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DelonCacheModule = /** @class */ (function () {
        function DelonCacheModule() {
        }
        DelonCacheModule.decorators = [
            { type: core.NgModule, args: [{},] }
        ];
        return DelonCacheModule;
    }());

    exports.CacheService = CacheService;
    exports.DelonCacheModule = DelonCacheModule;
    exports.ɵa = DC_STORE_STORAGE_TOKEN;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=cache.umd.js.map
