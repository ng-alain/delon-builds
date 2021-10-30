/**
 * @license ng-alain(cipchk@qq.com) v12.3.0
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common/http'), require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('date-fns'), require('@delon/util/config'), require('@angular/cdk/platform')) :
    typeof define === 'function' && define.amd ? define('@delon/cache', ['exports', '@angular/common/http', '@angular/core', 'rxjs', 'rxjs/operators', 'date-fns', '@delon/util/config', '@angular/cdk/platform'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.cache = {}), global.ng.common.http, global.ng.core, global.rxjs, global.rxjs.operators, global.dateFns, global.i1, global.ng.cdk.platform));
})(this, (function (exports, i3, i0, rxjs, operators, dateFns, i1, platform) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

    var DC_STORE_STORAGE_TOKEN = new i0.InjectionToken('DC_STORE_STORAGE_TOKEN', {
        providedIn: 'root',
        factory: function () { return new LocalStorageCacheService(i0.inject(platform.Platform)); }
    });
    var LocalStorageCacheService = /** @class */ (function () {
        function LocalStorageCacheService(platform) {
            this.platform = platform;
        }
        LocalStorageCacheService.prototype.get = function (key) {
            if (!this.platform.isBrowser) {
                return null;
            }
            return JSON.parse(localStorage.getItem(key) || 'null') || null;
        };
        LocalStorageCacheService.prototype.set = function (key, value) {
            if (!this.platform.isBrowser) {
                return true;
            }
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        };
        LocalStorageCacheService.prototype.remove = function (key) {
            if (!this.platform.isBrowser) {
                return;
            }
            localStorage.removeItem(key);
        };
        return LocalStorageCacheService;
    }());

    var CacheService = /** @class */ (function () {
        function CacheService(cogSrv, store, http) {
            this.store = store;
            this.http = http;
            this.memory = new Map();
            this.notifyBuffer = new Map();
            this.meta = new Set();
            this.freqTick = 3000;
            this.cog = cogSrv.merge('cache', {
                mode: 'promise',
                reName: '',
                prefix: '',
                meta_key: '__cache_meta'
            });
            this.loadMeta();
            this.startExpireNotify();
        }
        CacheService.prototype.deepGet = function (obj, path, defaultValue) {
            if (!obj)
                return defaultValue;
            if (path.length <= 1) {
                var checkObj = path.length ? obj[path[0]] : obj;
                return typeof checkObj === 'undefined' ? defaultValue : checkObj;
            }
            return path.reduce(function (o, k) { return o[k]; }, obj) || defaultValue;
        };
        // #region meta
        CacheService.prototype.pushMeta = function (key) {
            if (this.meta.has(key))
                return;
            this.meta.add(key);
            this.saveMeta();
        };
        CacheService.prototype.removeMeta = function (key) {
            if (!this.meta.has(key))
                return;
            this.meta.delete(key);
            this.saveMeta();
        };
        CacheService.prototype.loadMeta = function () {
            var _this = this;
            var ret = this.store.get(this.cog.meta_key);
            if (ret && ret.v) {
                ret.v.forEach(function (key) { return _this.meta.add(key); });
            }
        };
        CacheService.prototype.saveMeta = function () {
            var metaData = [];
            this.meta.forEach(function (key) { return metaData.push(key); });
            this.store.set(this.cog.meta_key, { v: metaData, e: 0 });
        };
        CacheService.prototype.getMeta = function () {
            return this.meta;
        };
        /**
         * 缓存对象
         */
        CacheService.prototype.set = function (key, data, options) {
            var _this = this;
            if (options === void 0) { options = {}; }
            var e = 0;
            var _a = this.cog, type = _a.type, expire = _a.expire;
            options = Object.assign({ type: type, expire: expire }, options);
            if (options.expire) {
                e = dateFns.addSeconds(new Date(), options.expire).valueOf();
            }
            if (!(data instanceof rxjs.Observable)) {
                this.save(options.type, key, { v: data, e: e });
                return;
            }
            return data.pipe(operators.tap(function (v) {
                _this.save(options.type, key, { v: v, e: e });
            }));
        };
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
        CacheService.prototype.get = function (key, options) {
            var _this = this;
            if (options === void 0) { options = {}; }
            var isPromise = options.mode !== 'none' && this.cog.mode === 'promise';
            var value = this.memory.has(key) ? this.memory.get(key) : this.store.get(this.cog.prefix + key);
            if (!value || (value.e && value.e > 0 && value.e < new Date().valueOf())) {
                if (isPromise) {
                    return (this.cog.request ? this.cog.request(key) : this.http.get(key)).pipe(operators.map(function (ret) { return _this.deepGet(ret, _this.cog.reName, null); }), operators.tap(function (v) { return _this.set(key, v, { type: options.type, expire: options.expire }); }));
                }
                return null;
            }
            return isPromise ? rxjs.of(value.v) : value.v;
        };
        /** 获取缓存数据，若 `key` 不存在或已过期则返回 null */
        CacheService.prototype.getNone = function (key) {
            return this.get(key, { mode: 'none' });
        };
        /**
         * 获取缓存，若不存在则设置缓存对象
         */
        CacheService.prototype.tryGet = function (key, data, options) {
            if (options === void 0) { options = {}; }
            var ret = this.getNone(key);
            if (ret === null) {
                if (!(data instanceof rxjs.Observable)) {
                    this.set(key, data, options);
                    return data;
                }
                return this.set(key, data, options);
            }
            return rxjs.of(ret);
        };
        // #endregion
        // #region has
        /** 是否缓存 `key` */
        CacheService.prototype.has = function (key) {
            return this.memory.has(key) || this.meta.has(key);
        };
        // #endregion
        // #region remove
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
        /** 移除缓存 */
        CacheService.prototype.remove = function (key) {
            this._remove(key, true);
        };
        /** 清空所有缓存 */
        CacheService.prototype.clear = function () {
            var _this = this;
            this.notifyBuffer.forEach(function (_v, k) { return _this.runNotify(k, 'remove'); });
            this.memory.clear();
            this.meta.forEach(function (key) { return _this.store.remove(_this.cog.prefix + key); });
        };
        Object.defineProperty(CacheService.prototype, "freq", {
            // #endregion
            // #region notify
            /**
             * 设置监听频率，单位：毫秒且最低 `20ms`，默认：`3000ms`
             */
            set: function (value) {
                this.freqTick = Math.max(20, value);
                this.abortExpireNotify();
                this.startExpireNotify();
            },
            enumerable: false,
            configurable: true
        });
        CacheService.prototype.startExpireNotify = function () {
            this.checkExpireNotify();
            this.runExpireNotify();
        };
        CacheService.prototype.runExpireNotify = function () {
            var _this = this;
            this.freqTime = setTimeout(function () {
                _this.checkExpireNotify();
                _this.runExpireNotify();
            }, this.freqTick);
        };
        CacheService.prototype.checkExpireNotify = function () {
            var _this = this;
            var removed = [];
            this.notifyBuffer.forEach(function (_v, key) {
                if (_this.has(key) && _this.getNone(key) === null)
                    removed.push(key);
            });
            removed.forEach(function (key) {
                _this.runNotify(key, 'expire');
                _this._remove(key, false);
            });
        };
        CacheService.prototype.abortExpireNotify = function () {
            clearTimeout(this.freqTime);
        };
        CacheService.prototype.runNotify = function (key, type) {
            if (!this.notifyBuffer.has(key))
                return;
            this.notifyBuffer.get(key).next({ type: type, value: this.getNone(key) });
        };
        /**
         * `key` 监听，当 `key` 变更、过期、移除时通知，注意以下若干细节：
         *
         * - 调用后除再次调用 `cancelNotify` 否则永远不过期
         * - 监听器每 `freq` (默认：3秒) 执行一次过期检查
         */
        CacheService.prototype.notify = function (key) {
            if (!this.notifyBuffer.has(key)) {
                var change$ = new rxjs.BehaviorSubject(this.getNone(key));
                this.notifyBuffer.set(key, change$);
            }
            return this.notifyBuffer.get(key).asObservable();
        };
        /**
         * 取消 `key` 监听
         */
        CacheService.prototype.cancelNotify = function (key) {
            if (!this.notifyBuffer.has(key))
                return;
            this.notifyBuffer.get(key).unsubscribe();
            this.notifyBuffer.delete(key);
        };
        /** `key` 是否已经监听 */
        CacheService.prototype.hasNotify = function (key) {
            return this.notifyBuffer.has(key);
        };
        /** 清空所有 `key` 的监听 */
        CacheService.prototype.clearNotify = function () {
            this.notifyBuffer.forEach(function (v) { return v.unsubscribe(); });
            this.notifyBuffer.clear();
        };
        // #endregion
        CacheService.prototype.ngOnDestroy = function () {
            this.memory.clear();
            this.abortExpireNotify();
            this.clearNotify();
        };
        return CacheService;
    }());
    CacheService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function CacheService_Factory() { return new CacheService(i0__namespace.ɵɵinject(i1__namespace.AlainConfigService), i0__namespace.ɵɵinject(DC_STORE_STORAGE_TOKEN), i0__namespace.ɵɵinject(i3__namespace.HttpClient)); }, token: CacheService, providedIn: "root" });
    CacheService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    CacheService.ctorParameters = function () { return [
        { type: i1.AlainConfigService },
        { type: undefined, decorators: [{ type: i0.Inject, args: [DC_STORE_STORAGE_TOKEN,] }] },
        { type: i3.HttpClient }
    ]; };

    var DelonCacheModule = /** @class */ (function () {
        function DelonCacheModule() {
        }
        return DelonCacheModule;
    }());
    DelonCacheModule.decorators = [
        { type: i0.NgModule, args: [{},] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CacheService = CacheService;
    exports.DelonCacheModule = DelonCacheModule;
    exports["ɵa"] = DC_STORE_STORAGE_TOKEN;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=cache.umd.js.map
