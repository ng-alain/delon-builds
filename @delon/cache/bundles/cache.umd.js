/**
 * @license ng-alain(cipchk@qq.com) v2.0.0-rc.1-d6a33d4
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('date-fns/add_seconds'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@delon/cache', ['exports', '@angular/core', '@angular/common/http', 'date-fns/add_seconds', 'rxjs', 'rxjs/operators'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.cache = {}),global.ng.core,global.ng.common.http,global.addSeconds,global.rxjs,global.rxjs.operators));
}(this, (function (exports,core,http,addSeconds,rxjs,operators) { 'use strict';

    addSeconds = addSeconds && addSeconds.hasOwnProperty('default') ? addSeconds['default'] : addSeconds;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DC_STORE_STORAGE_TOKEN = new core.InjectionToken('DC_STORE_STORAGE_TOKEN');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DelonCacheConfig = /** @class */ (function () {
        function DelonCacheConfig() {
            /**
             * 缓存模式，默认：`promise`
             * - `promise` 约定模式，允许 `key` 作为 http 获取数据
             * - `none` 正常模式
             */
            this.mode = 'promise';
            /**
             * 重命名返回参数，例如：
             * - `null` 返回体为内容
             * - `list` 返回体应 `{ list: [] }`
             * - `result.list` 返回体应 `{ result: { list: [] } }`
             */
            this.reName = '';
            /**
             * 持久化数据键值前缀
             */
            this.prefix = '';
            /**
             * 持久化数据元数据存储键名
             */
            this.meta_key = '__cache_meta';
        }
        return DelonCacheConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CacheService = /** @class */ (function () {
        function CacheService(options, store, http$$1) {
            this.options = options;
            this.store = store;
            this.http = http$$1;
            this.memory = new Map();
            this.notifyBuffer = new Map();
            this.meta = new Set();
            this.freq_tick = 3000;
            this.loadMeta();
            this.startExpireNotify();
        }
        /**
         * @param {?} obj
         * @param {?} path
         * @param {?=} defaultValue
         * @return {?}
         */
        CacheService.prototype._deepGet = /**
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
                return path.reduce(function (o, k) { return o[k]; }, obj) || defaultValue;
            };
        /**
         * @param {?} key
         * @return {?}
         */
        CacheService.prototype.pushMeta = /**
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
         * @param {?} key
         * @return {?}
         */
        CacheService.prototype.removeMeta = /**
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
         * @return {?}
         */
        CacheService.prototype.loadMeta = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var ret = this.store.get(this.options.meta_key);
                if (ret && ret.v) {
                    ( /** @type {?} */(ret.v)).forEach(function (key) { return _this.meta.add(key); });
                }
            };
        /**
         * @return {?}
         */
        CacheService.prototype.saveMeta = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var metaData = [];
                this.meta.forEach(function (key) { return metaData.push(key); });
                this.store.set(this.options.meta_key, { v: metaData, e: 0 });
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
                if (options === void 0) {
                    options = {};
                }
                /** @type {?} */
                var e = 0;
                if (options.expire) {
                    e = addSeconds(new Date(), options.expire).valueOf();
                }
                if (!(data instanceof rxjs.Observable)) {
                    this.save(options.type, key, { v: data, e: e });
                    return;
                }
                return data.pipe(operators.tap(function (v) {
                    _this.save(options.type, key, { v: v, e: e });
                }));
            };
        /**
         * @param {?} type
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        CacheService.prototype.save = /**
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
                    this.store.set(this.options.prefix + key, value);
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
                if (options === void 0) {
                    options = {};
                }
                /** @type {?} */
                var isPromise = options.mode !== 'none' && this.options.mode === 'promise';
                /** @type {?} */
                var value = this.memory.has(key)
                    ? this.memory.get(key)
                    : this.store.get(this.options.prefix + key);
                if (!value || (value.e && value.e > 0 && value.e < new Date().valueOf())) {
                    if (isPromise) {
                        return this.http
                            .get(key)
                            .pipe(operators.map(function (ret) {
                            return _this._deepGet(ret, /** @type {?} */ (_this.options.reName), null);
                        }), operators.tap(function (v) { return _this.set(key, v); }));
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
                if (options === void 0) {
                    options = {};
                }
                /** @type {?} */
                var ret = this.getNone(key);
                if (ret === null) {
                    if (!(data instanceof rxjs.Observable)) {
                        this.set(key, data, /** @type {?} */ (options));
                        return data;
                    }
                    return this.set(key, /** @type {?} */ (data), /** @type {?} */ (options));
                }
                return rxjs.of(ret);
            };
        // #endregion
        // #region has
        /** 是否缓存 `key` */
        /**
         * 是否缓存 `key`
         * @param {?} key
         * @return {?}
         */
        CacheService.prototype.has = /**
         * 是否缓存 `key`
         * @param {?} key
         * @return {?}
         */
            function (key) {
                return this.memory.has(key) || this.meta.has(key);
            };
        /**
         * @param {?} key
         * @param {?} needNotify
         * @return {?}
         */
        CacheService.prototype._remove = /**
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
                this.store.remove(this.options.prefix + key);
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
                this.notifyBuffer.forEach(function (v, k) { return _this.runNotify(k, 'remove'); });
                this.memory.clear();
                this.meta.forEach(function (key) { return _this.store.remove(_this.options.prefix + key); });
            };
        Object.defineProperty(CacheService.prototype, "freq", {
            // #endregion
            // #region notify
            /**
             * 设置监听频率，单位：毫秒且最低 `20ms`，默认：`3000ms`
             */
            set: /**
             * 设置监听频率，单位：毫秒且最低 `20ms`，默认：`3000ms`
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.freq_tick = Math.max(20, value);
                this.abortExpireNotify();
                this.startExpireNotify();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        CacheService.prototype.startExpireNotify = /**
         * @return {?}
         */
            function () {
                this.checkExpireNotify();
                this.runExpireNotify();
            };
        /**
         * @return {?}
         */
        CacheService.prototype.runExpireNotify = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.freq_time = setTimeout(function () {
                    _this.checkExpireNotify();
                    _this.runExpireNotify();
                }, this.freq_tick);
            };
        /**
         * @return {?}
         */
        CacheService.prototype.checkExpireNotify = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var removed = [];
                this.notifyBuffer.forEach(function (v, key) {
                    if (_this.has(key) && _this.getNone(key) === null)
                        removed.push(key);
                });
                removed.forEach(function (key) {
                    _this.runNotify(key, 'expire');
                    _this._remove(key, false);
                });
            };
        /**
         * @return {?}
         */
        CacheService.prototype.abortExpireNotify = /**
         * @return {?}
         */
            function () {
                clearTimeout(this.freq_time);
            };
        /**
         * @param {?} key
         * @param {?} type
         * @return {?}
         */
        CacheService.prototype.runNotify = /**
         * @param {?} key
         * @param {?} type
         * @return {?}
         */
            function (key, type) {
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
                return this.notifyBuffer.get(key).asObservable();
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
                this.notifyBuffer.get(key).unsubscribe();
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
                this.notifyBuffer.forEach(function (v) { return v.unsubscribe(); });
                this.notifyBuffer.clear();
            };
        // #endregion
        /**
         * @return {?}
         */
        CacheService.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.memory.clear();
                this.abortExpireNotify();
                this.clearNotify();
            };
        CacheService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        CacheService.ctorParameters = function () {
            return [
                { type: DelonCacheConfig },
                { type: undefined, decorators: [{ type: core.Inject, args: [DC_STORE_STORAGE_TOKEN,] }] },
                { type: http.HttpClient }
            ];
        };
        return CacheService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LocalStorageCacheService = /** @class */ (function () {
        function LocalStorageCacheService() {
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
                localStorage.removeItem(key);
            };
        return LocalStorageCacheService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DelonCacheModule = /** @class */ (function () {
        function DelonCacheModule() {
        }
        /**
         * @return {?}
         */
        DelonCacheModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: DelonCacheModule,
                    providers: [
                        DelonCacheConfig,
                        CacheService,
                        { provide: DC_STORE_STORAGE_TOKEN, useClass: LocalStorageCacheService },
                    ],
                };
            };
        DelonCacheModule.decorators = [
            { type: core.NgModule, args: [{},] }
        ];
        return DelonCacheModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.DC_STORE_STORAGE_TOKEN = DC_STORE_STORAGE_TOKEN;
    exports.CacheService = CacheService;
    exports.DelonCacheConfig = DelonCacheConfig;
    exports.DelonCacheModule = DelonCacheModule;
    exports.ɵa = LocalStorageCacheService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vY2FjaGUvc3JjL2ludGVyZmFjZS50cyIsIm5nOi8vQGRlbG9uL2NhY2hlL3NyYy9jYWNoZS5jb25maWcudHMiLCJuZzovL0BkZWxvbi9jYWNoZS9zcmMvY2FjaGUuc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL2NhY2hlL3NyYy9sb2NhbC1zdG9yYWdlLWNhY2hlLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi9jYWNoZS9zcmMvY2FjaGUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNhY2hlIHtcbiAgdjogYW55O1xuICAvKiogw6jCv8KHw6bCnMKfw6bCl8K2w6nCl8K0w6bCiMKzw6/CvMKMYDBgIMOowqHCqMOnwqTCusOkwrjCjcOowr/Ch8OmwpzCnyAqL1xuICBlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBEQ19TVE9SRV9TVE9SQUdFX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPElDYWNoZVN0b3JlPihcbiAgJ0RDX1NUT1JFX1NUT1JBR0VfVE9LRU4nLFxuKTtcblxuZXhwb3J0IGludGVyZmFjZSBJQ2FjaGVTdG9yZSB7XG4gIGdldChrZXk6IHN0cmluZyk6IElDYWNoZTtcblxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBJQ2FjaGUpOiBib29sZWFuO1xuXG4gIHJlbW92ZShrZXk6IHN0cmluZyk7XG59XG5cbmV4cG9ydCB0eXBlIENhY2hlTm90aWZ5VHlwZSA9ICdzZXQnIHwgJ3JlbW92ZScgfCAnZXhwaXJlJztcblxuZXhwb3J0IGludGVyZmFjZSBDYWNoZU5vdGlmeVJlc3VsdCB7XG4gIHR5cGU6IENhY2hlTm90aWZ5VHlwZTtcbiAgdmFsdWU/OiBhbnk7XG59XG4iLCJleHBvcnQgY2xhc3MgRGVsb25DYWNoZUNvbmZpZyB7XG4gIC8qKlxuICAgKiDDp8K8wpPDpcKtwpjDpsKowqHDpcK8wo/Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgcHJvbWlzZWBcbiAgICogLSBgcHJvbWlzZWAgw6fCusKmw6XCrsKaw6bCqMKhw6XCvMKPw6/CvMKMw6XChcKBw6jCrsK4IGBrZXlgIMOkwr3CnMOkwrjCuiBodHRwIMOowo7Ct8Olwo/ClsOmwpXCsMOmwo3CrlxuICAgKiAtIGBub25lYCDDpsKtwqPDpcK4wrjDpsKowqHDpcK8wo9cbiAgICovXG4gIG1vZGU/OiAncHJvbWlzZScgfCAnbm9uZScgPSAncHJvbWlzZSc7XG4gIC8qKlxuICAgKiDDqcKHwo3DpcKRwr3DpcKQwo3DqMK/wpTDpcKbwp7DpcKPwoLDpsKVwrDDr8K8wozDpMK+wovDpcKmwoLDr8K8wppcbiAgICogLSBgbnVsbGAgw6jCv8KUw6XCm8Kew6TCvcKTw6TCuMK6w6XChsKFw6XCrsK5XG4gICAqIC0gYGxpc3RgIMOowr/ClMOlwpvCnsOkwr3Ck8OlwrrClCBgeyBsaXN0OiBbXSB9YFxuICAgKiAtIGByZXN1bHQubGlzdGAgw6jCv8KUw6XCm8Kew6TCvcKTw6XCusKUIGB7IHJlc3VsdDogeyBsaXN0OiBbXSB9IH1gXG4gICAqL1xuICByZU5hbWU/OiBzdHJpbmcgfCBzdHJpbmdbXSA9ICcnO1xuICAvKipcbiAgICogw6bCjMKBw6TCucKFw6XCjMKWw6bClcKww6bCjcKuw6nClMKuw6XCgMK8w6XCicKNw6fCvMKAXG4gICAqL1xuICBwcmVmaXg/OiBzdHJpbmcgPSAnJztcbiAgLyoqXG4gICAqIMOmwozCgcOkwrnChcOlwozClsOmwpXCsMOmwo3CrsOlwoXCg8OmwpXCsMOmwo3CrsOlwq3CmMOlwoLCqMOpwpTCrsOlwpDCjVxuICAgKi9cbiAgbWV0YV9rZXk/OiBzdHJpbmcgPSAnX19jYWNoZV9tZXRhJztcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IGFkZFNlY29uZHMgZnJvbSAnZGF0ZS1mbnMvYWRkX3NlY29uZHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gIERDX1NUT1JFX1NUT1JBR0VfVE9LRU4sXG4gIElDYWNoZVN0b3JlLFxuICBJQ2FjaGUsXG4gIENhY2hlTm90aWZ5UmVzdWx0LFxuICBDYWNoZU5vdGlmeVR5cGUsXG59IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IERlbG9uQ2FjaGVDb25maWcgfSBmcm9tICcuL2NhY2hlLmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYWNoZVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHJlYWRvbmx5IG1lbW9yeTogTWFwPHN0cmluZywgSUNhY2hlPiA9IG5ldyBNYXA8c3RyaW5nLCBJQ2FjaGU+KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgbm90aWZ5QnVmZmVyOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEJlaGF2aW9yU3ViamVjdDxDYWNoZU5vdGlmeVJlc3VsdD5cbiAgPiA9IG5ldyBNYXA8c3RyaW5nLCBCZWhhdmlvclN1YmplY3Q8Q2FjaGVOb3RpZnlSZXN1bHQ+PigpO1xuICBwcml2YXRlIG1ldGE6IFNldDxzdHJpbmc+ID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIHByaXZhdGUgZnJlcV90aWNrID0gMzAwMDtcbiAgcHJpdmF0ZSBmcmVxX3RpbWU6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG9wdGlvbnM6IERlbG9uQ2FjaGVDb25maWcsXG4gICAgQEluamVjdChEQ19TVE9SRV9TVE9SQUdFX1RPS0VOKSBwcml2YXRlIHN0b3JlOiBJQ2FjaGVTdG9yZSxcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICkge1xuICAgIHRoaXMubG9hZE1ldGEoKTtcbiAgICB0aGlzLnN0YXJ0RXhwaXJlTm90aWZ5KCk7XG4gIH1cblxuICBfZGVlcEdldChvYmo6IGFueSwgcGF0aDogc3RyaW5nW10sIGRlZmF1bHRWYWx1ZT86IGFueSkge1xuICAgIGlmICghb2JqKSByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIGlmIChwYXRoLmxlbmd0aCA8PSAxKSB7XG4gICAgICBjb25zdCBjaGVja09iaiA9IHBhdGgubGVuZ3RoID8gb2JqW3BhdGhbMF1dIDogb2JqO1xuICAgICAgcmV0dXJuIHR5cGVvZiBjaGVja09iaiA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0VmFsdWUgOiBjaGVja09iajtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGgucmVkdWNlKChvLCBrKSA9PiBvW2tdLCBvYmopIHx8IGRlZmF1bHRWYWx1ZTtcbiAgfVxuXG4gIC8vICNyZWdpb24gbWV0YVxuXG4gIHByaXZhdGUgcHVzaE1ldGEoa2V5OiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5tZXRhLmhhcyhrZXkpKSByZXR1cm47XG4gICAgdGhpcy5tZXRhLmFkZChrZXkpO1xuICAgIHRoaXMuc2F2ZU1ldGEoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlTWV0YShrZXk6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5tZXRhLmhhcyhrZXkpKSByZXR1cm47XG4gICAgdGhpcy5tZXRhLmRlbGV0ZShrZXkpO1xuICAgIHRoaXMuc2F2ZU1ldGEoKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZE1ldGEoKSB7XG4gICAgY29uc3QgcmV0ID0gdGhpcy5zdG9yZS5nZXQodGhpcy5vcHRpb25zLm1ldGFfa2V5KTtcbiAgICBpZiAocmV0ICYmIHJldC52KSB7XG4gICAgICAocmV0LnYgYXMgc3RyaW5nW10pLmZvckVhY2goa2V5ID0+IHRoaXMubWV0YS5hZGQoa2V5KSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzYXZlTWV0YSgpIHtcbiAgICBjb25zdCBtZXRhRGF0YTogc3RyaW5nW10gPSBbXTtcbiAgICB0aGlzLm1ldGEuZm9yRWFjaChrZXkgPT4gbWV0YURhdGEucHVzaChrZXkpKTtcbiAgICB0aGlzLnN0b3JlLnNldCh0aGlzLm9wdGlvbnMubWV0YV9rZXksIHsgdjogbWV0YURhdGEsIGU6IDAgfSk7XG4gIH1cblxuICBnZXRNZXRhKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGE7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBzZXRcblxuICAvKipcbiAgICogw6bCjMKBw6TCucKFw6XCjMKWw6fCvMKTw6XCrcKYIGBPYnNlcnZhYmxlYCDDpcKvwrnDqMKxwqHDr8K8wozDpMK+wovDpcKmwoLDr8K8wppcbiAgICogLSBgc2V0KCdkYXRhLzEnLCB0aGlzLmh0dHAuZ2V0KCdkYXRhLzEnKSkuc3Vic2NyaWJlKClgXG4gICAqIC0gYHNldCgnZGF0YS8xJywgdGhpcy5odHRwLmdldCgnZGF0YS8xJyksIHsgZXhwaXJlOiAxMCB9KS5zdWJzY3JpYmUoKWBcbiAgICovXG4gIHNldDxUPihcbiAgICBrZXk6IHN0cmluZyxcbiAgICBkYXRhOiBPYnNlcnZhYmxlPFQ+LFxuICAgIG9wdGlvbnM/OiB7IHR5cGU/OiAncyc7IGV4cGlyZT86IG51bWJlciB9LFxuICApOiBPYnNlcnZhYmxlPFQ+O1xuICAvKipcbiAgICogw6bCjMKBw6TCucKFw6XCjMKWw6fCvMKTw6XCrcKYIGBPYnNlcnZhYmxlYCDDpcKvwrnDqMKxwqHDr8K8wozDpMK+wovDpcKmwoLDr8K8wppcbiAgICogLSBgc2V0KCdkYXRhLzEnLCB0aGlzLmh0dHAuZ2V0KCdkYXRhLzEnKSkuc3Vic2NyaWJlKClgXG4gICAqIC0gYHNldCgnZGF0YS8xJywgdGhpcy5odHRwLmdldCgnZGF0YS8xJyksIHsgZXhwaXJlOiAxMCB9KS5zdWJzY3JpYmUoKWBcbiAgICovXG4gIHNldChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBkYXRhOiBPYnNlcnZhYmxlPGFueT4sXG4gICAgb3B0aW9ucz86IHsgdHlwZT86ICdzJzsgZXhwaXJlPzogbnVtYmVyIH0sXG4gICk6IE9ic2VydmFibGU8YW55PjtcbiAgLyoqXG4gICAqIMOmwozCgcOkwrnChcOlwozClsOnwrzCk8Olwq3CmMOlwp/CusOnwqHCgMOlwq/CucOowrHCocOvwrzCjMOkwr7Ci8OlwqbCgsOvwrzCmlxuICAgKiAtIGBzZXQoJ2RhdGEvMScsIDEpYFxuICAgKiAtIGBzZXQoJ2RhdGEvMScsIDEsIHsgZXhwaXJlOiAxMCB9KWBcbiAgICovXG4gIHNldChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBkYXRhOiBPYmplY3QsXG4gICAgb3B0aW9ucz86IHsgdHlwZT86ICdzJzsgZXhwaXJlPzogbnVtYmVyIH0sXG4gICk6IHZvaWQ7XG4gIC8qKlxuICAgKiDDpsKMwofDpcKuwprDp8K8wpPDpcKtwpjDp8KxwrvDpcKewovDqMK/wpvDqMKhwozDp8K8wpPDpcKtwpjDpcKvwrnDqMKxwqHDr8K8wozDpMK+wovDpcKmwoLDpcKGwoXDpcKtwpjDp8K8wpPDpcKtwpjDr8K8wppcbiAgICogLSBgc2V0KCdkYXRhLzEnLCAxLCB7IHR5cGU6ICdtJyB9KWBcbiAgICogLSBgc2V0KCdkYXRhLzEnLCAxLCB7IHR5cGU6ICdtJywgZXhwaXJlOiAxMCB9KWBcbiAgICovXG4gIHNldChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBkYXRhOiBPYmplY3QsXG4gICAgb3B0aW9uczogeyB0eXBlOiAnbScgfCAncyc7IGV4cGlyZT86IG51bWJlciB9LFxuICApOiB2b2lkO1xuICAvKipcbiAgICogw6fCvMKTw6XCrcKYw6XCr8K5w6jCscKhXG4gICAqL1xuICBzZXQoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgZGF0YTogYW55IHwgT2JzZXJ2YWJsZTxhbnk+LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIC8qKiDDpcKtwpjDpcKCwqjDp8KxwrvDpcKewovDr8K8wownbScgw6jCocKow6fCpMK6w6XChsKFw6XCrcKYw6/CvMKMJ3MnIMOowqHCqMOnwqTCusOmwozCgcOkwrnChSAqL1xuICAgICAgdHlwZT86ICdtJyB8ICdzJztcbiAgICAgIC8qKlxuICAgICAgICogw6jCv8KHw6bCnMKfw6bCl8K2w6nCl8K0w6/CvMKMw6XCjcKVw6TCvcKNIGDDp8KnwpJgXG4gICAgICAgKi9cbiAgICAgIGV4cGlyZT86IG51bWJlcjtcbiAgICB9ID0ge30sXG4gICk6IGFueSB7XG4gICAgLy8gZXhwaXJlXG4gICAgbGV0IGUgPSAwO1xuICAgIGlmIChvcHRpb25zLmV4cGlyZSkge1xuICAgICAgZSA9IGFkZFNlY29uZHMobmV3IERhdGUoKSwgb3B0aW9ucy5leHBpcmUpLnZhbHVlT2YoKTtcbiAgICB9XG4gICAgaWYgKCEoZGF0YSBpbnN0YW5jZW9mIE9ic2VydmFibGUpKSB7XG4gICAgICB0aGlzLnNhdmUob3B0aW9ucy50eXBlLCBrZXksIHsgdjogZGF0YSwgZSB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGEucGlwZShcbiAgICAgIHRhcCgodjogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuc2F2ZShvcHRpb25zLnR5cGUsIGtleSwgeyB2LCBlIH0pO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc2F2ZSh0eXBlOiAnbScgfCAncycsIGtleTogc3RyaW5nLCB2YWx1ZTogSUNhY2hlKSB7XG4gICAgaWYgKHR5cGUgPT09ICdtJykge1xuICAgICAgdGhpcy5tZW1vcnkuc2V0KGtleSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3JlLnNldCh0aGlzLm9wdGlvbnMucHJlZml4ICsga2V5LCB2YWx1ZSk7XG4gICAgICB0aGlzLnB1c2hNZXRhKGtleSk7XG4gICAgfVxuICAgIHRoaXMucnVuTm90aWZ5KGtleSwgJ3NldCcpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gZ2V0XG5cbiAgLyoqIMOowo7Ct8Olwo/ClsOnwrzCk8Olwq3CmMOmwpXCsMOmwo3CrsOvwrzCjMOowovCpSBga2V5YCDDpMK4wo3DpcKtwpjDpcKcwqjDpcKIwpkgYGtleWAgw6TCvcKcw6TCuMK6SFRUUMOowq/Ct8OmwrHCgsOnwrzCk8Olwq3CmMOlwpDCjsOowr/ClMOlwpvCniAqL1xuICBnZXQ8VD4oXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG1vZGU6ICdwcm9taXNlJztcbiAgICAgIHR5cGU/OiAnbScgfCAncyc7XG4gICAgICBleHBpcmU/OiBudW1iZXI7XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxUPjtcbiAgLyoqIMOowo7Ct8Olwo/ClsOnwrzCk8Olwq3CmMOmwpXCsMOmwo3CrsOvwrzCjMOowovCpSBga2V5YCDDpMK4wo3DpcKtwpjDpcKcwqjDpcKIwpkgYGtleWAgw6TCvcKcw6TCuMK6SFRUUMOowq/Ct8OmwrHCgsOnwrzCk8Olwq3CmMOlwpDCjsOowr/ClMOlwpvCniAqL1xuICBnZXQoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG1vZGU6ICdwcm9taXNlJztcbiAgICAgIHR5cGU/OiAnbScgfCAncyc7XG4gICAgICBleHBpcmU/OiBudW1iZXI7XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xuICAvKiogw6jCjsK3w6XCj8KWw6fCvMKTw6XCrcKYw6bClcKww6bCjcKuw6/CvMKMw6jCi8KlIGBrZXlgIMOkwrjCjcOlwq3CmMOlwpzCqMOmwojClsOlwrfCssOowr/Ch8OmwpzCn8OlwojCmcOowr/ClMOlwpvCniBudWxsICovXG4gIGdldChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBtb2RlOiAnbm9uZSc7XG4gICAgICB0eXBlPzogJ20nIHwgJ3MnO1xuICAgICAgZXhwaXJlPzogbnVtYmVyO1xuICAgIH0sXG4gICk6IGFueTtcbiAgZ2V0KFxuICAgIGtleTogc3RyaW5nLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG1vZGU/OiAncHJvbWlzZScgfCAnbm9uZSc7XG4gICAgICB0eXBlPzogJ20nIHwgJ3MnO1xuICAgICAgZXhwaXJlPzogbnVtYmVyO1xuICAgIH0gPSB7fSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHwgYW55IHtcbiAgICBjb25zdCBpc1Byb21pc2UgPVxuICAgICAgb3B0aW9ucy5tb2RlICE9PSAnbm9uZScgJiYgdGhpcy5vcHRpb25zLm1vZGUgPT09ICdwcm9taXNlJztcbiAgICBjb25zdCB2YWx1ZTogSUNhY2hlID0gdGhpcy5tZW1vcnkuaGFzKGtleSlcbiAgICAgID8gdGhpcy5tZW1vcnkuZ2V0KGtleSlcbiAgICAgIDogdGhpcy5zdG9yZS5nZXQodGhpcy5vcHRpb25zLnByZWZpeCArIGtleSk7XG4gICAgaWYgKCF2YWx1ZSB8fCAodmFsdWUuZSAmJiB2YWx1ZS5lID4gMCAmJiB2YWx1ZS5lIDwgbmV3IERhdGUoKS52YWx1ZU9mKCkpKSB7XG4gICAgICBpZiAoaXNQcm9taXNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgICAgICAuZ2V0KGtleSlcbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgIG1hcCgocmV0OiBhbnkpID0+XG4gICAgICAgICAgICAgIHRoaXMuX2RlZXBHZXQocmV0LCB0aGlzLm9wdGlvbnMucmVOYW1lIGFzIHN0cmluZ1tdLCBudWxsKSxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICB0YXAodiA9PiB0aGlzLnNldChrZXksIHYpKSxcbiAgICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzUHJvbWlzZSA/IG9mKHZhbHVlLnYpIDogdmFsdWUudjtcbiAgfVxuXG4gIC8qKiDDqMKOwrfDpcKPwpbDp8K8wpPDpcKtwpjDpsKVwrDDpsKNwq7Dr8K8wozDqMKLwqUgYGtleWAgw6TCuMKNw6XCrcKYw6XCnMKow6bCiMKWw6XCt8Kyw6jCv8KHw6bCnMKfw6XCiMKZw6jCv8KUw6XCm8KeIG51bGwgKi9cbiAgZ2V0Tm9uZTxUPihrZXk6IHN0cmluZyk6IFQ7XG4gIC8qKiDDqMKOwrfDpcKPwpbDp8K8wpPDpcKtwpjDpsKVwrDDpsKNwq7Dr8K8wozDqMKLwqUgYGtleWAgw6TCuMKNw6XCrcKYw6XCnMKow6bCiMKWw6XCt8Kyw6jCv8KHw6bCnMKfw6XCiMKZw6jCv8KUw6XCm8KeIG51bGwgKi9cbiAgZ2V0Tm9uZShrZXk6IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGtleSwgeyBtb2RlOiAnbm9uZScgfSk7XG4gIH1cblxuICAvKipcbiAgICogw6jCjsK3w6XCj8KWw6fCvMKTw6XCrcKYw6/CvMKMw6jCi8Klw6TCuMKNw6XCrcKYw6XCnMKow6XCiMKZw6jCrsK+w6fCvcKuw6bCjMKBw6TCucKFw6XCjMKWw6fCvMKTw6XCrcKYIGBPYnNlcnZhYmxlYCDDpcKvwrnDqMKxwqFcbiAgICovXG4gIHRyeUdldDxUPihcbiAgICBrZXk6IHN0cmluZyxcbiAgICBkYXRhOiBPYnNlcnZhYmxlPFQ+LFxuICAgIG9wdGlvbnM/OiB7IHR5cGU/OiAncyc7IGV4cGlyZT86IG51bWJlciB9LFxuICApOiBPYnNlcnZhYmxlPFQ+O1xuICAvKipcbiAgICogw6jCjsK3w6XCj8KWw6fCvMKTw6XCrcKYw6/CvMKMw6jCi8Klw6TCuMKNw6XCrcKYw6XCnMKow6XCiMKZw6jCrsK+w6fCvcKuw6bCjMKBw6TCucKFw6XCjMKWw6fCvMKTw6XCrcKYIGBPYnNlcnZhYmxlYCDDpcKvwrnDqMKxwqFcbiAgICovXG4gIHRyeUdldChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBkYXRhOiBPYnNlcnZhYmxlPGFueT4sXG4gICAgb3B0aW9ucz86IHsgdHlwZT86ICdzJzsgZXhwaXJlPzogbnVtYmVyIH0sXG4gICk6IE9ic2VydmFibGU8YW55PjtcbiAgLyoqXG4gICAqIMOowo7Ct8Olwo/ClsOnwrzCk8Olwq3CmMOvwrzCjMOowovCpcOkwrjCjcOlwq3CmMOlwpzCqMOlwojCmcOowq7CvsOnwr3CrsOmwozCgcOkwrnChcOlwozClsOnwrzCk8Olwq3CmMOlwp/CusOnwqHCgMOlwq/CucOowrHCoVxuICAgKi9cbiAgdHJ5R2V0KFxuICAgIGtleTogc3RyaW5nLFxuICAgIGRhdGE6IE9iamVjdCxcbiAgICBvcHRpb25zPzogeyB0eXBlPzogJ3MnOyBleHBpcmU/OiBudW1iZXIgfSxcbiAgKTogYW55O1xuICAvKipcbiAgICogw6jCjsK3w6XCj8KWw6fCvMKTw6XCrcKYw6/CvMKMw6jCi8Klw6TCuMKNw6XCrcKYw6XCnMKow6XCiMKZw6jCrsK+w6fCvcKuw6bCjMKHw6XCrsKaw6fCvMKTw6XCrcKYw6fCscK7w6XCnsKLw6jCv8Kbw6jCocKMw6fCvMKTw6XCrcKYw6XCr8K5w6jCscKhXG4gICAqL1xuICB0cnlHZXQoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgZGF0YTogT2JqZWN0LFxuICAgIG9wdGlvbnM6IHsgdHlwZTogJ20nIHwgJ3MnOyBleHBpcmU/OiBudW1iZXIgfSxcbiAgKTogYW55O1xuXG4gIC8qKlxuICAgKiDDqMKOwrfDpcKPwpbDp8K8wpPDpcKtwpjDr8K8wozDqMKLwqXDpMK4wo3DpcKtwpjDpcKcwqjDpcKIwpnDqMKuwr7Dp8K9wq7Dp8K8wpPDpcKtwpjDpcKvwrnDqMKxwqFcbiAgICovXG4gIHRyeUdldChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBkYXRhOiBhbnkgfCBPYnNlcnZhYmxlPGFueT4sXG4gICAgb3B0aW9uczoge1xuICAgICAgLyoqIMOlwq3CmMOlwoLCqMOnwrHCu8Olwp7Ci8OvwrzCjCdtJyDDqMKhwqjDp8KkwrrDpcKGwoXDpcKtwpjDr8K8wowncycgw6jCocKow6fCpMK6w6bCjMKBw6TCucKFICovXG4gICAgICB0eXBlPzogJ20nIHwgJ3MnO1xuICAgICAgLyoqXG4gICAgICAgKiDDqMK/wofDpsKcwp/DpsKXwrbDqcKXwrTDr8K8wozDpcKNwpXDpMK9wo0gYMOnwqfCkmBcbiAgICAgICAqL1xuICAgICAgZXhwaXJlPzogbnVtYmVyO1xuICAgIH0gPSB7fSxcbiAgKTogYW55IHtcbiAgICBjb25zdCByZXQgPSB0aGlzLmdldE5vbmUoa2V5KTtcbiAgICBpZiAocmV0ID09PSBudWxsKSB7XG4gICAgICBpZiAoIShkYXRhIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkpIHtcbiAgICAgICAgdGhpcy5zZXQoa2V5LCBkYXRhLCA8YW55Pm9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuc2V0KGtleSwgZGF0YSBhcyBPYnNlcnZhYmxlPGFueT4sIDxhbnk+b3B0aW9ucyk7XG4gICAgfVxuICAgIHJldHVybiBvZihyZXQpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gaGFzXG5cbiAgLyoqIMOmwpjCr8OlwpDCpsOnwrzCk8Olwq3CmCBga2V5YCAqL1xuICBoYXMoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tZW1vcnkuaGFzKGtleSkgfHwgdGhpcy5tZXRhLmhhcyhrZXkpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gcmVtb3ZlXG5cbiAgcHJpdmF0ZSBfcmVtb3ZlKGtleTogc3RyaW5nLCBuZWVkTm90aWZ5OiBib29sZWFuKSB7XG4gICAgaWYgKG5lZWROb3RpZnkpIHRoaXMucnVuTm90aWZ5KGtleSwgJ3JlbW92ZScpO1xuICAgIGlmICh0aGlzLm1lbW9yeS5oYXMoa2V5KSkge1xuICAgICAgdGhpcy5tZW1vcnkuZGVsZXRlKGtleSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc3RvcmUucmVtb3ZlKHRoaXMub3B0aW9ucy5wcmVmaXggKyBrZXkpO1xuICAgIHRoaXMucmVtb3ZlTWV0YShrZXkpO1xuICB9XG5cbiAgLyoqIMOnwqfCu8OpwpnCpMOnwrzCk8Olwq3CmCAqL1xuICByZW1vdmUoa2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZW1vdmUoa2V5LCB0cnVlKTtcbiAgfVxuXG4gIC8qKiDDpsK4woXDp8KpwrrDpsKJwoDDpsKcwonDp8K8wpPDpcKtwpggKi9cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5ub3RpZnlCdWZmZXIuZm9yRWFjaCgodiwgaykgPT4gdGhpcy5ydW5Ob3RpZnkoaywgJ3JlbW92ZScpKTtcbiAgICB0aGlzLm1lbW9yeS5jbGVhcigpO1xuICAgIHRoaXMubWV0YS5mb3JFYWNoKGtleSA9PiB0aGlzLnN0b3JlLnJlbW92ZSh0aGlzLm9wdGlvbnMucHJlZml4ICsga2V5KSk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBub3RpZnlcblxuICAvKipcbiAgICogw6jCrsK+w6fCvcKuw6fCm8KRw6XCkMKsw6nCosKRw6fCjsKHw6/CvMKMw6XCjcKVw6TCvcKNw6/CvMKaw6bCr8Krw6fCp8KSw6TCuMKUw6bCnMKAw6TCvcKOIGAyMG1zYMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAzMDAwbXNgXG4gICAqL1xuICBzZXQgZnJlcSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5mcmVxX3RpY2sgPSBNYXRoLm1heCgyMCwgdmFsdWUpO1xuICAgIHRoaXMuYWJvcnRFeHBpcmVOb3RpZnkoKTtcbiAgICB0aGlzLnN0YXJ0RXhwaXJlTm90aWZ5KCk7XG4gIH1cblxuICBwcml2YXRlIHN0YXJ0RXhwaXJlTm90aWZ5KCkge1xuICAgIHRoaXMuY2hlY2tFeHBpcmVOb3RpZnkoKTtcbiAgICB0aGlzLnJ1bkV4cGlyZU5vdGlmeSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBydW5FeHBpcmVOb3RpZnkoKSB7XG4gICAgdGhpcy5mcmVxX3RpbWUgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY2hlY2tFeHBpcmVOb3RpZnkoKTtcbiAgICAgIHRoaXMucnVuRXhwaXJlTm90aWZ5KCk7XG4gICAgfSwgdGhpcy5mcmVxX3RpY2spO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0V4cGlyZU5vdGlmeSgpIHtcbiAgICBjb25zdCByZW1vdmVkOiBzdHJpbmdbXSA9IFtdO1xuICAgIHRoaXMubm90aWZ5QnVmZmVyLmZvckVhY2goKHYsIGtleSkgPT4ge1xuICAgICAgaWYgKHRoaXMuaGFzKGtleSkgJiYgdGhpcy5nZXROb25lKGtleSkgPT09IG51bGwpIHJlbW92ZWQucHVzaChrZXkpO1xuICAgIH0pO1xuICAgIHJlbW92ZWQuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgdGhpcy5ydW5Ob3RpZnkoa2V5LCAnZXhwaXJlJyk7XG4gICAgICB0aGlzLl9yZW1vdmUoa2V5LCBmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFib3J0RXhwaXJlTm90aWZ5KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmZyZXFfdGltZSk7XG4gIH1cblxuICBwcml2YXRlIHJ1bk5vdGlmeShrZXk6IHN0cmluZywgdHlwZTogQ2FjaGVOb3RpZnlUeXBlKSB7XG4gICAgaWYgKCF0aGlzLm5vdGlmeUJ1ZmZlci5oYXMoa2V5KSkgcmV0dXJuO1xuICAgIHRoaXMubm90aWZ5QnVmZmVyLmdldChrZXkpLm5leHQoeyB0eXBlLCB2YWx1ZTogdGhpcy5nZXROb25lKGtleSkgfSk7XG4gIH1cblxuICAvKipcbiAgICogYGtleWAgw6fCm8KRw6XCkMKsw6/CvMKMw6XCvcKTIGBrZXlgIMOlwo/CmMOmwpvCtMOjwoDCgcOowr/Ch8OmwpzCn8OjwoDCgcOnwqfCu8OpwpnCpMOmwpfCtsOpwoDCmsOnwp/CpcOvwrzCjMOmwrPCqMOmwoTCj8OkwrvCpcOkwrjCi8OowovCpcOlwrnCssOnwrvChsOoworCgsOvwrzCmlxuICAgKlxuICAgKiAtIMOowrDCg8OnwpTCqMOlwpDCjsOpwpnCpMOlwobCjcOmwqzCocOowrDCg8OnwpTCqCBgY2FuY2VsTm90aWZ5YCDDpcKQwqbDpcKIwpnDpsKwwrjDqMK/wpzDpMK4wo3DqMK/wofDpsKcwp9cbiAgICogLSDDp8KbwpHDpcKQwqzDpcKZwqjDpsKvwo8gYGZyZXFgICjDqcK7wpjDqMKuwqTDr8K8wpozw6fCp8KSKSDDpsKJwqfDqMKhwozDpMK4woDDpsKswqHDqMK/wofDpsKcwp/DpsKjwoDDpsKfwqVcbiAgICovXG4gIG5vdGlmeShrZXk6IHN0cmluZyk6IE9ic2VydmFibGU8Q2FjaGVOb3RpZnlSZXN1bHQ+IHtcbiAgICBpZiAoIXRoaXMubm90aWZ5QnVmZmVyLmhhcyhrZXkpKSB7XG4gICAgICBjb25zdCBjaGFuZ2UkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxDYWNoZU5vdGlmeVJlc3VsdD4odGhpcy5nZXROb25lKGtleSkpO1xuICAgICAgdGhpcy5ub3RpZnlCdWZmZXIuc2V0KGtleSwgY2hhbmdlJCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm5vdGlmeUJ1ZmZlci5nZXQoa2V5KS5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpcKPwpbDpsK2woggYGtleWAgw6fCm8KRw6XCkMKsXG4gICAqL1xuICBjYW5jZWxOb3RpZnkoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubm90aWZ5QnVmZmVyLmhhcyhrZXkpKSByZXR1cm47XG4gICAgdGhpcy5ub3RpZnlCdWZmZXIuZ2V0KGtleSkudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLm5vdGlmeUJ1ZmZlci5kZWxldGUoa2V5KTtcbiAgfVxuXG4gIC8qKiBga2V5YCDDpsKYwq/DpcKQwqbDpcK3wrLDp8K7wo/Dp8KbwpHDpcKQwqwgKi9cbiAgaGFzTm90aWZ5KGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubm90aWZ5QnVmZmVyLmhhcyhrZXkpO1xuICB9XG5cbiAgLyoqIMOmwrjChcOnwqnCusOmwonCgMOmwpzCiSBga2V5YCDDp8KawoTDp8KbwpHDpcKQwqwgKi9cbiAgY2xlYXJOb3RpZnkoKTogdm9pZCB7XG4gICAgdGhpcy5ub3RpZnlCdWZmZXIuZm9yRWFjaCh2ID0+IHYudW5zdWJzY3JpYmUoKSk7XG4gICAgdGhpcy5ub3RpZnlCdWZmZXIuY2xlYXIoKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm1lbW9yeS5jbGVhcigpO1xuICAgIHRoaXMuYWJvcnRFeHBpcmVOb3RpZnkoKTtcbiAgICB0aGlzLmNsZWFyTm90aWZ5KCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IElDYWNoZVN0b3JlLCBJQ2FjaGUgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbmV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2VDYWNoZVNlcnZpY2UgaW1wbGVtZW50cyBJQ2FjaGVTdG9yZSB7XG4gIGdldChrZXk6IHN0cmluZyk6IElDYWNoZSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSB8fCAnbnVsbCcpIHx8IG51bGw7XG4gIH1cblxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBJQ2FjaGUpOiBib29sZWFuIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZW1vdmUoa2V5OiBzdHJpbmcpIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEQ19TVE9SRV9TVE9SQUdFX1RPS0VOIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGVsb25DYWNoZUNvbmZpZyB9IGZyb20gJy4vY2FjaGUuY29uZmlnJztcbmltcG9ydCB7IENhY2hlU2VydmljZSB9IGZyb20gJy4vY2FjaGUuc2VydmljZSc7XG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VDYWNoZVNlcnZpY2UgfSBmcm9tICcuL2xvY2FsLXN0b3JhZ2UtY2FjaGUuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7fSlcbmV4cG9ydCBjbGFzcyBEZWxvbkNhY2hlTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEZWxvbkNhY2hlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIERlbG9uQ2FjaGVDb25maWcsXG4gICAgICAgIENhY2hlU2VydmljZSxcbiAgICAgICAgeyBwcm92aWRlOiBEQ19TVE9SRV9TVE9SQUdFX1RPS0VOLCB1c2VDbGFzczogTG9jYWxTdG9yYWdlQ2FjaGVTZXJ2aWNlIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmplY3Rpb25Ub2tlbiIsImh0dHAiLCJPYnNlcnZhYmxlIiwidGFwIiwibWFwIiwib2YiLCJCZWhhdmlvclN1YmplY3QiLCJJbmplY3RhYmxlIiwiSW5qZWN0IiwiSHR0cENsaWVudCIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQVFBLFFBQWEsc0JBQXNCLEdBQUcsSUFBSUEsbUJBQWMsQ0FDdEQsd0JBQXdCLENBQ3pCOzs7Ozs7QUNWRCxRQUFBOzs7Ozs7O3dCQU04QixTQUFTOzs7Ozs7OzBCQU9SLEVBQUU7Ozs7MEJBSWIsRUFBRTs7Ozs0QkFJQSxjQUFjOzsrQkFyQnBDO1FBc0JDOzs7Ozs7QUN0QkQ7UUEwQkUsc0JBQ1UsU0FDZ0MsS0FBa0IsRUFDbERDO1lBRkEsWUFBTyxHQUFQLE9BQU87WUFDeUIsVUFBSyxHQUFMLEtBQUssQ0FBYTtZQUNsRCxTQUFJLEdBQUpBLE9BQUk7MEJBWmlDLElBQUksR0FBRyxFQUFrQjtnQ0FJcEUsSUFBSSxHQUFHLEVBQThDO3dCQUM3QixJQUFJLEdBQUcsRUFBVTs2QkFDekIsSUFBSTtZQVF0QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDMUI7Ozs7Ozs7UUFFRCwrQkFBUTs7Ozs7O1lBQVIsVUFBUyxHQUFRLEVBQUUsSUFBYyxFQUFFLFlBQWtCO2dCQUNuRCxJQUFJLENBQUMsR0FBRztvQkFBRSxPQUFPLFlBQVksQ0FBQztnQkFDOUIsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTs7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