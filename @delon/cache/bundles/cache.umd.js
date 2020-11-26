/**
 * @license ng-alain(cipchk@qq.com) v10.1.2
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common/http'), require('@angular/core'), require('@delon/util'), require('date-fns/addSeconds'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/platform')) :
    typeof define === 'function' && define.amd ? define('@delon/cache', ['exports', '@angular/common/http', '@angular/core', '@delon/util', 'date-fns/addSeconds', 'rxjs', 'rxjs/operators', '@angular/cdk/platform'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.cache = {}), global.ng.common.http, global.ng.core, global.delon.util, global.addSeconds, global.rxjs, global.rxjs.operators, global.ng.cdk.platform));
}(this, (function (exports, i3, i0, i1, addSeconds, rxjs, operators, platform) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var addSeconds__default = /*#__PURE__*/_interopDefaultLegacy(addSeconds);

    /**
     * @fileoverview added by tsickle
     * Generated from: src/local-storage-cache.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DC_STORE_STORAGE_TOKEN = new i0.InjectionToken('DC_STORE_STORAGE_TOKEN', {
        providedIn: 'root',
        factory: ( /**
         * @return {?}
         */function () { return new LocalStorageCacheService(i0.inject(platform.Platform)); }),
    });
    var LocalStorageCacheService = /** @class */ (function () {
        /**
         * @param {?} platform
         */
        function LocalStorageCacheService(platform) {
            this.platform = platform;
        }
        /**
         * @param {?} key
         * @return {?}
         */
        LocalStorageCacheService.prototype.get = function (key) {
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
        LocalStorageCacheService.prototype.set = function (key, value) {
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
        LocalStorageCacheService.prototype.remove = function (key) {
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
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CacheService = /** @class */ (function () {
        /**
         * @param {?} cogSrv
         * @param {?} store
         * @param {?} http
         */
        function CacheService(cogSrv, store, http) {
            this.store = store;
            this.http = http;
            this.memory = new Map();
            this.notifyBuffer = new Map();
            this.meta = new Set();
            this.freqTick = 3000;
            this.cog = ( /** @type {?} */(cogSrv.merge('cache', {
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
        CacheService.prototype.deepGet = function (obj, path, defaultValue) {
            if (!obj)
                return defaultValue;
            if (path.length <= 1) {
                /** @type {?} */
                var checkObj = path.length ? obj[path[0]] : obj;
                return typeof checkObj === 'undefined' ? defaultValue : checkObj;
            }
            return path.reduce(( /**
             * @param {?} o
             * @param {?} k
             * @return {?}
             */function (o, k) { return o[k]; }), obj) || defaultValue;
        };
        // #region meta
        /**
         * @private
         * @param {?} key
         * @return {?}
         */
        CacheService.prototype.pushMeta = function (key) {
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
        CacheService.prototype.removeMeta = function (key) {
            if (!this.meta.has(key))
                return;
            this.meta.delete(key);
            this.saveMeta();
        };
        /**
         * @private
         * @return {?}
         */
        CacheService.prototype.loadMeta = function () {
            var _this = this;
            /** @type {?} */
            var ret = this.store.get(( /** @type {?} */(this.cog.meta_key)));
            if (ret && ret.v) {
                (( /** @type {?} */(ret.v))).forEach(( /**
                 * @param {?} key
                 * @return {?}
                 */function (/**
                 * @param {?} key
                 * @return {?}
                 */ key) { return _this.meta.add(key); }));
            }
        };
        /**
         * @private
         * @return {?}
         */
        CacheService.prototype.saveMeta = function () {
            /** @type {?} */
            var metaData = [];
            this.meta.forEach(( /**
             * @param {?} key
             * @return {?}
             */function (/**
             * @param {?} key
             * @return {?}
             */ key) { return metaData.push(key); }));
            this.store.set(( /** @type {?} */(this.cog.meta_key)), { v: metaData, e: 0 });
        };
        /**
         * @return {?}
         */
        CacheService.prototype.getMeta = function () {
            return this.meta;
        };
        /**
         * 缓存对象
         * @param {?} key
         * @param {?} data
         * @param {?=} options
         * @return {?}
         */
        CacheService.prototype.set = function (key, data, options) {
            var _this = this;
            if (options === void 0) { options = {}; }
            /** @type {?} */
            var e = 0;
            var _a = this.cog, type = _a.type, expire = _a.expire;
            options = Object.assign({ type: type,
                expire: expire }, options);
            if (options.expire) {
                e = addSeconds__default['default'](new Date(), options.expire).valueOf();
            }
            if (!(data instanceof rxjs.Observable)) {
                this.save(( /** @type {?} */(options.type)), key, { v: data, e: e });
                return;
            }
            return data.pipe(operators.tap(( /**
             * @param {?} v
             * @return {?}
             */function (v) {
                _this.save(( /** @type {?} */(options.type)), key, { v: v, e: e });
            })));
        };
        /**
         * @private
         * @param {?} type
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        CacheService.prototype.save = function (type, key, value) {
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
        CacheService.prototype.get = function (key, options) {
            var _this = this;
            if (options === void 0) { options = {}; }
            /** @type {?} */
            var isPromise = options.mode !== 'none' && this.cog.mode === 'promise';
            /** @type {?} */
            var value = this.memory.has(key) ? (( /** @type {?} */(this.memory.get(key)))) : this.store.get(this.cog.prefix + key);
            if (!value || (value.e && value.e > 0 && value.e < new Date().valueOf())) {
                if (isPromise) {
                    return this.http.get(key).pipe(operators.map(( /**
                     * @param {?} ret
                     * @return {?}
                     */function (ret) { return _this.deepGet(ret, ( /** @type {?} */(_this.cog.reName)), null); })), operators.tap(( /**
                     * @param {?} v
                     * @return {?}
                     */function (/**
                     * @param {?} v
                     * @return {?}
                     */ v) { return _this.set(key, v, { type: ( /** @type {?} */(options.type)), expire: options.expire }); })));
                }
                return null;
            }
            return isPromise ? rxjs.of(value.v) : value.v;
        };
        /**
         * 获取缓存数据，若 `key` 不存在或已过期则返回 null
         * @param {?} key
         * @return {?}
         */
        CacheService.prototype.getNone = function (key) {
            return this.get(key, { mode: 'none' });
        };
        /**
         * 获取缓存，若不存在则设置缓存对象
         * @param {?} key
         * @param {?} data
         * @param {?=} options
         * @return {?}
         */
        CacheService.prototype.tryGet = function (key, data, options) {
            if (options === void 0) { options = {}; }
            /** @type {?} */
            var ret = this.getNone(key);
            if (ret === null) {
                if (!(data instanceof rxjs.Observable)) {
                    this.set(key, data, ( /** @type {?} */(options)));
                    return data;
                }
                return this.set(key, ( /** @type {?} */(data)), ( /** @type {?} */(options)));
            }
            return rxjs.of(ret);
        };
        // #endregion
        // #region has
        /**
         * 是否缓存 `key`
         * @param {?} key
         * @return {?}
         */
        CacheService.prototype.has = function (key) {
            return this.memory.has(key) || this.meta.has(key);
        };
        // #endregion
        // #region remove
        /**
         * @private
         * @param {?} key
         * @param {?} needNotify
         * @return {?}
         */
        CacheService.prototype._remove = function (key, needNotify) {
            if (needNotify)
                this.runNotify(key, 'remove');
            if (this.memory.has(key)) {
                this.memory.delete(key);
                return;
            }
            this.store.remove(this.cog.prefix + key);
            this.removeMeta(key);
        };
        /**
         * 移除缓存
         * @param {?} key
         * @return {?}
         */
        CacheService.prototype.remove = function (key) {
            this._remove(key, true);
        };
        /**
         * 清空所有缓存
         * @return {?}
         */
        CacheService.prototype.clear = function () {
            var _this = this;
            this.notifyBuffer.forEach(( /**
             * @param {?} _v
             * @param {?} k
             * @return {?}
             */function (_v, k) { return _this.runNotify(k, 'remove'); }));
            this.memory.clear();
            this.meta.forEach(( /**
             * @param {?} key
             * @return {?}
             */function (/**
             * @param {?} key
             * @return {?}
             */ key) { return _this.store.remove(_this.cog.prefix + key); }));
        };
        Object.defineProperty(CacheService.prototype, "freq", {
            // #endregion
            // #region notify
            /**
             * 设置监听频率，单位：毫秒且最低 `20ms`，默认：`3000ms`
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this.freqTick = Math.max(20, value);
                this.abortExpireNotify();
                this.startExpireNotify();
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @private
         * @return {?}
         */
        CacheService.prototype.startExpireNotify = function () {
            this.checkExpireNotify();
            this.runExpireNotify();
        };
        /**
         * @private
         * @return {?}
         */
        CacheService.prototype.runExpireNotify = function () {
            var _this = this;
            this.freqTime = setTimeout(( /**
             * @return {?}
             */function () {
                _this.checkExpireNotify();
                _this.runExpireNotify();
            }), this.freqTick);
        };
        /**
         * @private
         * @return {?}
         */
        CacheService.prototype.checkExpireNotify = function () {
            var _this = this;
            /** @type {?} */
            var removed = [];
            this.notifyBuffer.forEach(( /**
             * @param {?} _v
             * @param {?} key
             * @return {?}
             */function (_v, key) {
                if (_this.has(key) && _this.getNone(key) === null)
                    removed.push(key);
            }));
            removed.forEach(( /**
             * @param {?} key
             * @return {?}
             */function (/**
             * @param {?} key
             * @return {?}
             */ key) {
                _this.runNotify(key, 'expire');
                _this._remove(key, false);
            }));
        };
        /**
         * @private
         * @return {?}
         */
        CacheService.prototype.abortExpireNotify = function () {
            clearTimeout(this.freqTime);
        };
        /**
         * @private
         * @param {?} key
         * @param {?} type
         * @return {?}
         */
        CacheService.prototype.runNotify = function (key, type) {
            if (!this.notifyBuffer.has(key))
                return;
            ( /** @type {?} */(this.notifyBuffer.get(key))).next({ type: type, value: this.getNone(key) });
        };
        /**
         * `key` 监听，当 `key` 变更、过期、移除时通知，注意以下若干细节：
         *
         * - 调用后除再次调用 `cancelNotify` 否则永远不过期
         * - 监听器每 `freq` (默认：3秒) 执行一次过期检查
         * @param {?} key
         * @return {?}
         */
        CacheService.prototype.notify = function (key) {
            if (!this.notifyBuffer.has(key)) {
                /** @type {?} */
                var change$ = new rxjs.BehaviorSubject(this.getNone(key));
                this.notifyBuffer.set(key, change$);
            }
            return ( /** @type {?} */(this.notifyBuffer.get(key))).asObservable();
        };
        /**
         * 取消 `key` 监听
         * @param {?} key
         * @return {?}
         */
        CacheService.prototype.cancelNotify = function (key) {
            if (!this.notifyBuffer.has(key))
                return;
            ( /** @type {?} */(this.notifyBuffer.get(key))).unsubscribe();
            this.notifyBuffer.delete(key);
        };
        /**
         * `key` 是否已经监听
         * @param {?} key
         * @return {?}
         */
        CacheService.prototype.hasNotify = function (key) {
            return this.notifyBuffer.has(key);
        };
        /**
         * 清空所有 `key` 的监听
         * @return {?}
         */
        CacheService.prototype.clearNotify = function () {
            this.notifyBuffer.forEach(( /**
             * @param {?} v
             * @return {?}
             */function (/**
             * @param {?} v
             * @return {?}
             */ v) { return v.unsubscribe(); }));
            this.notifyBuffer.clear();
        };
        // #endregion
        /**
         * @return {?}
         */
        CacheService.prototype.ngOnDestroy = function () {
            this.memory.clear();
            this.abortExpireNotify();
            this.clearNotify();
        };
        return CacheService;
    }());
    CacheService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    CacheService.ctorParameters = function () { return [
        { type: i1.AlainConfigService },
        { type: undefined, decorators: [{ type: i0.Inject, args: [DC_STORE_STORAGE_TOKEN,] }] },
        { type: i3.HttpClient }
    ]; };
    /** @nocollapse */ CacheService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CacheService_Factory() { return new CacheService(i0.ɵɵinject(i1.AlainConfigService), i0.ɵɵinject(DC_STORE_STORAGE_TOKEN), i0.ɵɵinject(i3.HttpClient)); }, token: CacheService, providedIn: "root" });
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
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DelonCacheModule = /** @class */ (function () {
        function DelonCacheModule() {
        }
        return DelonCacheModule;
    }());
    DelonCacheModule.decorators = [
        { type: i0.NgModule, args: [{},] }
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: cache.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.CacheService = CacheService;
    exports.DelonCacheModule = DelonCacheModule;
    exports.ɵa = DC_STORE_STORAGE_TOKEN;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=cache.umd.js.map
