/**
 * @license ng-alain(cipchk@qq.com) v2.0.0-beta.3-ed90aa6
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
        // endregion
        // region: has
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
            // endregion
            // region: notify
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
        // endregion
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vY2FjaGUvc3JjL2ludGVyZmFjZS50cyIsIm5nOi8vQGRlbG9uL2NhY2hlL3NyYy9jYWNoZS5jb25maWcudHMiLCJuZzovL0BkZWxvbi9jYWNoZS9zcmMvY2FjaGUuc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL2NhY2hlL3NyYy9sb2NhbC1zdG9yYWdlLWNhY2hlLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi9jYWNoZS9zcmMvY2FjaGUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDYWNoZSB7XHJcbiAgdjogYW55O1xyXG4gIC8qKiDDqMK/wofDpsKcwp/DpsKXwrbDqcKXwrTDpsKIwrPDr8K8woxgMGAgw6jCocKow6fCpMK6w6TCuMKNw6jCv8KHw6bCnMKfICovXHJcbiAgZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRENfU1RPUkVfU1RPUkFHRV9UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxJQ2FjaGVTdG9yZT4oXHJcbiAgJ0RDX1NUT1JFX1NUT1JBR0VfVE9LRU4nLFxyXG4pO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ2FjaGVTdG9yZSB7XHJcbiAgZ2V0KGtleTogc3RyaW5nKTogSUNhY2hlO1xyXG5cclxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBJQ2FjaGUpOiBib29sZWFuO1xyXG5cclxuICByZW1vdmUoa2V5OiBzdHJpbmcpO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBDYWNoZU5vdGlmeVR5cGUgPSAnc2V0JyB8ICdyZW1vdmUnIHwgJ2V4cGlyZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENhY2hlTm90aWZ5UmVzdWx0IHtcclxuICB0eXBlOiBDYWNoZU5vdGlmeVR5cGU7XHJcbiAgdmFsdWU/OiBhbnk7XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIERlbG9uQ2FjaGVDb25maWcge1xyXG4gIC8qKlxyXG4gICAqIMOnwrzCk8Olwq3CmMOmwqjCocOlwrzCj8OvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBwcm9taXNlYFxyXG4gICAqIC0gYHByb21pc2VgIMOnwrrCpsOlwq7CmsOmwqjCocOlwrzCj8OvwrzCjMOlwoXCgcOowq7CuCBga2V5YCDDpMK9wpzDpMK4wrogaHR0cCDDqMKOwrfDpcKPwpbDpsKVwrDDpsKNwq5cclxuICAgKiAtIGBub25lYCDDpsKtwqPDpcK4wrjDpsKowqHDpcK8wo9cclxuICAgKi9cclxuICBtb2RlPzogJ3Byb21pc2UnIHwgJ25vbmUnID0gJ3Byb21pc2UnO1xyXG4gIC8qKlxyXG4gICAqIMOpwofCjcOlwpHCvcOlwpDCjcOowr/ClMOlwpvCnsOlwo/CgsOmwpXCsMOvwrzCjMOkwr7Ci8OlwqbCgsOvwrzCmlxyXG4gICAqIC0gYG51bGxgIMOowr/ClMOlwpvCnsOkwr3Ck8OkwrjCusOlwobChcOlwq7CuVxyXG4gICAqIC0gYGxpc3RgIMOowr/ClMOlwpvCnsOkwr3Ck8OlwrrClCBgeyBsaXN0OiBbXSB9YFxyXG4gICAqIC0gYHJlc3VsdC5saXN0YCDDqMK/wpTDpcKbwp7DpMK9wpPDpcK6wpQgYHsgcmVzdWx0OiB7IGxpc3Q6IFtdIH0gfWBcclxuICAgKi9cclxuICByZU5hbWU/OiBzdHJpbmcgfCBzdHJpbmdbXSA9ICcnO1xyXG4gIC8qKlxyXG4gICAqIMOmwozCgcOkwrnChcOlwozClsOmwpXCsMOmwo3CrsOpwpTCrsOlwoDCvMOlwonCjcOnwrzCgFxyXG4gICAqL1xyXG4gIHByZWZpeD86IHN0cmluZyA9ICcnO1xyXG4gIC8qKlxyXG4gICAqIMOmwozCgcOkwrnChcOlwozClsOmwpXCsMOmwo3CrsOlwoXCg8OmwpXCsMOmwo3CrsOlwq3CmMOlwoLCqMOpwpTCrsOlwpDCjVxyXG4gICAqL1xyXG4gIG1ldGFfa2V5Pzogc3RyaW5nID0gJ19fY2FjaGVfbWV0YSc7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IGFkZFNlY29uZHMgZnJvbSAnZGF0ZS1mbnMvYWRkX3NlY29uZHMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRhcCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBEQ19TVE9SRV9TVE9SQUdFX1RPS0VOLFxyXG4gIElDYWNoZVN0b3JlLFxyXG4gIElDYWNoZSxcclxuICBDYWNoZU5vdGlmeVJlc3VsdCxcclxuICBDYWNoZU5vdGlmeVR5cGUsXHJcbn0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBEZWxvbkNhY2hlQ29uZmlnIH0gZnJvbSAnLi9jYWNoZS5jb25maWcnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2FjaGVTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBwcml2YXRlIHJlYWRvbmx5IG1lbW9yeTogTWFwPHN0cmluZywgSUNhY2hlPiA9IG5ldyBNYXA8c3RyaW5nLCBJQ2FjaGU+KCk7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBub3RpZnlCdWZmZXI6IE1hcDxcclxuICAgIHN0cmluZyxcclxuICAgIEJlaGF2aW9yU3ViamVjdDxDYWNoZU5vdGlmeVJlc3VsdD5cclxuICA+ID0gbmV3IE1hcDxzdHJpbmcsIEJlaGF2aW9yU3ViamVjdDxDYWNoZU5vdGlmeVJlc3VsdD4+KCk7XHJcbiAgcHJpdmF0ZSBtZXRhOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG4gIHByaXZhdGUgZnJlcV90aWNrID0gMzAwMDtcclxuICBwcml2YXRlIGZyZXFfdGltZTogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgb3B0aW9uczogRGVsb25DYWNoZUNvbmZpZyxcclxuICAgIEBJbmplY3QoRENfU1RPUkVfU1RPUkFHRV9UT0tFTikgcHJpdmF0ZSBzdG9yZTogSUNhY2hlU3RvcmUsXHJcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgKSB7XHJcbiAgICB0aGlzLmxvYWRNZXRhKCk7XHJcbiAgICB0aGlzLnN0YXJ0RXhwaXJlTm90aWZ5KCk7XHJcbiAgfVxyXG5cclxuICBfZGVlcEdldChvYmo6IGFueSwgcGF0aDogc3RyaW5nW10sIGRlZmF1bHRWYWx1ZT86IGFueSkge1xyXG4gICAgaWYgKCFvYmopIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICBpZiAocGF0aC5sZW5ndGggPD0gMSkge1xyXG4gICAgICBjb25zdCBjaGVja09iaiA9IHBhdGgubGVuZ3RoID8gb2JqW3BhdGhbMF1dIDogb2JqO1xyXG4gICAgICByZXR1cm4gdHlwZW9mIGNoZWNrT2JqID09PSAndW5kZWZpbmVkJyA/IGRlZmF1bHRWYWx1ZSA6IGNoZWNrT2JqO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhdGgucmVkdWNlKChvLCBrKSA9PiBvW2tdLCBvYmopIHx8IGRlZmF1bHRWYWx1ZTtcclxuICB9XHJcblxyXG4gIC8vIHJlZ2lvbjogbWV0YVxyXG5cclxuICBwcml2YXRlIHB1c2hNZXRhKGtleTogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5tZXRhLmhhcyhrZXkpKSByZXR1cm47XHJcbiAgICB0aGlzLm1ldGEuYWRkKGtleSk7XHJcbiAgICB0aGlzLnNhdmVNZXRhKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZU1ldGEoa2V5OiBzdHJpbmcpIHtcclxuICAgIGlmICghdGhpcy5tZXRhLmhhcyhrZXkpKSByZXR1cm47XHJcbiAgICB0aGlzLm1ldGEuZGVsZXRlKGtleSk7XHJcbiAgICB0aGlzLnNhdmVNZXRhKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWRNZXRhKCkge1xyXG4gICAgY29uc3QgcmV0ID0gdGhpcy5zdG9yZS5nZXQodGhpcy5vcHRpb25zLm1ldGFfa2V5KTtcclxuICAgIGlmIChyZXQgJiYgcmV0LnYpIHtcclxuICAgICAgKHJldC52IGFzIHN0cmluZ1tdKS5mb3JFYWNoKGtleSA9PiB0aGlzLm1ldGEuYWRkKGtleSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzYXZlTWV0YSgpIHtcclxuICAgIGNvbnN0IG1ldGFEYXRhOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgdGhpcy5tZXRhLmZvckVhY2goa2V5ID0+IG1ldGFEYXRhLnB1c2goa2V5KSk7XHJcbiAgICB0aGlzLnN0b3JlLnNldCh0aGlzLm9wdGlvbnMubWV0YV9rZXksIHsgdjogbWV0YURhdGEsIGU6IDAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRNZXRhKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubWV0YTtcclxuICB9XHJcblxyXG4gIC8vIGVuZHJlZ2lvblxyXG5cclxuICAvLyByZWdpb246IHNldFxyXG5cclxuICAvKipcclxuICAgKiDDpsKMwoHDpMK5woXDpcKMwpbDp8K8wpPDpcKtwpggYE9ic2VydmFibGVgIMOlwq/CucOowrHCocOvwrzCjMOkwr7Ci8OlwqbCgsOvwrzCmlxyXG4gICAqIC0gYHNldCgnZGF0YS8xJywgdGhpcy5odHRwLmdldCgnZGF0YS8xJykpLnN1YnNjcmliZSgpYFxyXG4gICAqIC0gYHNldCgnZGF0YS8xJywgdGhpcy5odHRwLmdldCgnZGF0YS8xJyksIHsgZXhwaXJlOiAxMCB9KS5zdWJzY3JpYmUoKWBcclxuICAgKi9cclxuICBzZXQ8VD4oXHJcbiAgICBrZXk6IHN0cmluZyxcclxuICAgIGRhdGE6IE9ic2VydmFibGU8VD4sXHJcbiAgICBvcHRpb25zPzogeyB0eXBlPzogJ3MnOyBleHBpcmU/OiBudW1iZXIgfSxcclxuICApOiBPYnNlcnZhYmxlPFQ+O1xyXG4gIC8qKlxyXG4gICAqIMOmwozCgcOkwrnChcOlwozClsOnwrzCk8Olwq3CmCBgT2JzZXJ2YWJsZWAgw6XCr8K5w6jCscKhw6/CvMKMw6TCvsKLw6XCpsKCw6/CvMKaXHJcbiAgICogLSBgc2V0KCdkYXRhLzEnLCB0aGlzLmh0dHAuZ2V0KCdkYXRhLzEnKSkuc3Vic2NyaWJlKClgXHJcbiAgICogLSBgc2V0KCdkYXRhLzEnLCB0aGlzLmh0dHAuZ2V0KCdkYXRhLzEnKSwgeyBleHBpcmU6IDEwIH0pLnN1YnNjcmliZSgpYFxyXG4gICAqL1xyXG4gIHNldChcclxuICAgIGtleTogc3RyaW5nLFxyXG4gICAgZGF0YTogT2JzZXJ2YWJsZTxhbnk+LFxyXG4gICAgb3B0aW9ucz86IHsgdHlwZT86ICdzJzsgZXhwaXJlPzogbnVtYmVyIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gIC8qKlxyXG4gICAqIMOmwozCgcOkwrnChcOlwozClsOnwrzCk8Olwq3CmMOlwp/CusOnwqHCgMOlwq/CucOowrHCocOvwrzCjMOkwr7Ci8OlwqbCgsOvwrzCmlxyXG4gICAqIC0gYHNldCgnZGF0YS8xJywgMSlgXHJcbiAgICogLSBgc2V0KCdkYXRhLzEnLCAxLCB7IGV4cGlyZTogMTAgfSlgXHJcbiAgICovXHJcbiAgc2V0KFxyXG4gICAga2V5OiBzdHJpbmcsXHJcbiAgICBkYXRhOiBPYmplY3QsXHJcbiAgICBvcHRpb25zPzogeyB0eXBlPzogJ3MnOyBleHBpcmU/OiBudW1iZXIgfSxcclxuICApOiB2b2lkO1xyXG4gIC8qKlxyXG4gICAqIMOmwozCh8Olwq7CmsOnwrzCk8Olwq3CmMOnwrHCu8Olwp7Ci8Oowr/Cm8OowqHCjMOnwrzCk8Olwq3CmMOlwq/CucOowrHCocOvwrzCjMOkwr7Ci8OlwqbCgsOlwobChcOlwq3CmMOnwrzCk8Olwq3CmMOvwrzCmlxyXG4gICAqIC0gYHNldCgnZGF0YS8xJywgMSwgeyB0eXBlOiAnbScgfSlgXHJcbiAgICogLSBgc2V0KCdkYXRhLzEnLCAxLCB7IHR5cGU6ICdtJywgZXhwaXJlOiAxMCB9KWBcclxuICAgKi9cclxuICBzZXQoXHJcbiAgICBrZXk6IHN0cmluZyxcclxuICAgIGRhdGE6IE9iamVjdCxcclxuICAgIG9wdGlvbnM6IHsgdHlwZTogJ20nIHwgJ3MnOyBleHBpcmU/OiBudW1iZXIgfSxcclxuICApOiB2b2lkO1xyXG4gIC8qKlxyXG4gICAqIMOnwrzCk8Olwq3CmMOlwq/CucOowrHCoVxyXG4gICAqL1xyXG4gIHNldChcclxuICAgIGtleTogc3RyaW5nLFxyXG4gICAgZGF0YTogYW55IHwgT2JzZXJ2YWJsZTxhbnk+LFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICAvKiogw6XCrcKYw6XCgsKow6fCscK7w6XCnsKLw6/CvMKMJ20nIMOowqHCqMOnwqTCusOlwobChcOlwq3CmMOvwrzCjCdzJyDDqMKhwqjDp8KkwrrDpsKMwoHDpMK5woUgKi9cclxuICAgICAgdHlwZT86ICdtJyB8ICdzJztcclxuICAgICAgLyoqXHJcbiAgICAgICAqIMOowr/Ch8OmwpzCn8OmwpfCtsOpwpfCtMOvwrzCjMOlwo3ClcOkwr3CjSBgw6fCp8KSYFxyXG4gICAgICAgKi9cclxuICAgICAgZXhwaXJlPzogbnVtYmVyO1xyXG4gICAgfSA9IHt9LFxyXG4gICk6IGFueSB7XHJcbiAgICAvLyBleHBpcmVcclxuICAgIGxldCBlID0gMDtcclxuICAgIGlmIChvcHRpb25zLmV4cGlyZSkge1xyXG4gICAgICBlID0gYWRkU2Vjb25kcyhuZXcgRGF0ZSgpLCBvcHRpb25zLmV4cGlyZSkudmFsdWVPZigpO1xyXG4gICAgfVxyXG4gICAgaWYgKCEoZGF0YSBpbnN0YW5jZW9mIE9ic2VydmFibGUpKSB7XHJcbiAgICAgIHRoaXMuc2F2ZShvcHRpb25zLnR5cGUsIGtleSwgeyB2OiBkYXRhLCBlIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGF0YS5waXBlKFxyXG4gICAgICB0YXAoKHY6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2F2ZShvcHRpb25zLnR5cGUsIGtleSwgeyB2LCBlIH0pO1xyXG4gICAgICB9KSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNhdmUodHlwZTogJ20nIHwgJ3MnLCBrZXk6IHN0cmluZywgdmFsdWU6IElDYWNoZSkge1xyXG4gICAgaWYgKHR5cGUgPT09ICdtJykge1xyXG4gICAgICB0aGlzLm1lbW9yeS5zZXQoa2V5LCB2YWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnN0b3JlLnNldCh0aGlzLm9wdGlvbnMucHJlZml4ICsga2V5LCB2YWx1ZSk7XHJcbiAgICAgIHRoaXMucHVzaE1ldGEoa2V5KTtcclxuICAgIH1cclxuICAgIHRoaXMucnVuTm90aWZ5KGtleSwgJ3NldCcpO1xyXG4gIH1cclxuXHJcbiAgLy8gZW5kcmVnaW9uXHJcblxyXG4gIC8vIHJlZ2lvbjogZ2V0XHJcblxyXG4gIC8qKiDDqMKOwrfDpcKPwpbDp8K8wpPDpcKtwpjDpsKVwrDDpsKNwq7Dr8K8wozDqMKLwqUgYGtleWAgw6TCuMKNw6XCrcKYw6XCnMKow6XCiMKZIGBrZXlgIMOkwr3CnMOkwrjCukhUVFDDqMKvwrfDpsKxwoLDp8K8wpPDpcKtwpjDpcKQwo7DqMK/wpTDpcKbwp4gKi9cclxuICBnZXQ8VD4oXHJcbiAgICBrZXk6IHN0cmluZyxcclxuICAgIG9wdGlvbnM/OiB7XHJcbiAgICAgIG1vZGU6ICdwcm9taXNlJztcclxuICAgICAgdHlwZT86ICdtJyB8ICdzJztcclxuICAgICAgZXhwaXJlPzogbnVtYmVyO1xyXG4gICAgfSxcclxuICApOiBPYnNlcnZhYmxlPFQ+O1xyXG4gIC8qKiDDqMKOwrfDpcKPwpbDp8K8wpPDpcKtwpjDpsKVwrDDpsKNwq7Dr8K8wozDqMKLwqUgYGtleWAgw6TCuMKNw6XCrcKYw6XCnMKow6XCiMKZIGBrZXlgIMOkwr3CnMOkwrjCukhUVFDDqMKvwrfDpsKxwoLDp8K8wpPDpcKtwpjDpcKQwo7DqMK/wpTDpcKbwp4gKi9cclxuICBnZXQoXHJcbiAgICBrZXk6IHN0cmluZyxcclxuICAgIG9wdGlvbnM/OiB7XHJcbiAgICAgIG1vZGU6ICdwcm9taXNlJztcclxuICAgICAgdHlwZT86ICdtJyB8ICdzJztcclxuICAgICAgZXhwaXJlPzogbnVtYmVyO1xyXG4gICAgfSxcclxuICApOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgLyoqIMOowo7Ct8Olwo/ClsOnwrzCk8Olwq3CmMOmwpXCsMOmwo3CrsOvwrzCjMOowovCpSBga2V5YCDDpMK4wo3DpcKtwpjDpcKcwqjDpsKIwpbDpcK3wrLDqMK/wofDpsKcwp/DpcKIwpnDqMK/wpTDpcKbwp4gbnVsbCAqL1xyXG4gIGdldChcclxuICAgIGtleTogc3RyaW5nLFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBtb2RlOiAnbm9uZSc7XHJcbiAgICAgIHR5cGU/OiAnbScgfCAncyc7XHJcbiAgICAgIGV4cGlyZT86IG51bWJlcjtcclxuICAgIH0sXHJcbiAgKTogYW55O1xyXG4gIGdldChcclxuICAgIGtleTogc3RyaW5nLFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBtb2RlPzogJ3Byb21pc2UnIHwgJ25vbmUnO1xyXG4gICAgICB0eXBlPzogJ20nIHwgJ3MnO1xyXG4gICAgICBleHBpcmU/OiBudW1iZXI7XHJcbiAgICB9ID0ge30sXHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHwgYW55IHtcclxuICAgIGNvbnN0IGlzUHJvbWlzZSA9XHJcbiAgICAgIG9wdGlvbnMubW9kZSAhPT0gJ25vbmUnICYmIHRoaXMub3B0aW9ucy5tb2RlID09PSAncHJvbWlzZSc7XHJcbiAgICBjb25zdCB2YWx1ZTogSUNhY2hlID0gdGhpcy5tZW1vcnkuaGFzKGtleSlcclxuICAgICAgPyB0aGlzLm1lbW9yeS5nZXQoa2V5KVxyXG4gICAgICA6IHRoaXMuc3RvcmUuZ2V0KHRoaXMub3B0aW9ucy5wcmVmaXggKyBrZXkpO1xyXG4gICAgaWYgKCF2YWx1ZSB8fCAodmFsdWUuZSAmJiB2YWx1ZS5lID4gMCAmJiB2YWx1ZS5lIDwgbmV3IERhdGUoKS52YWx1ZU9mKCkpKSB7XHJcbiAgICAgIGlmIChpc1Byb21pc2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAuZ2V0KGtleSlcclxuICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICBtYXAoKHJldDogYW55KSA9PlxyXG4gICAgICAgICAgICAgIHRoaXMuX2RlZXBHZXQocmV0LCB0aGlzLm9wdGlvbnMucmVOYW1lIGFzIHN0cmluZ1tdLCBudWxsKSxcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgdGFwKHYgPT4gdGhpcy5zZXQoa2V5LCB2KSksXHJcbiAgICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpc1Byb21pc2UgPyBvZih2YWx1ZS52KSA6IHZhbHVlLnY7XHJcbiAgfVxyXG5cclxuICAvKiogw6jCjsK3w6XCj8KWw6fCvMKTw6XCrcKYw6bClcKww6bCjcKuw6/CvMKMw6jCi8KlIGBrZXlgIMOkwrjCjcOlwq3CmMOlwpzCqMOmwojClsOlwrfCssOowr/Ch8OmwpzCn8OlwojCmcOowr/ClMOlwpvCniBudWxsICovXHJcbiAgZ2V0Tm9uZTxUPihrZXk6IHN0cmluZyk6IFQ7XHJcbiAgLyoqIMOowo7Ct8Olwo/ClsOnwrzCk8Olwq3CmMOmwpXCsMOmwo3CrsOvwrzCjMOowovCpSBga2V5YCDDpMK4wo3DpcKtwpjDpcKcwqjDpsKIwpbDpcK3wrLDqMK/wofDpsKcwp/DpcKIwpnDqMK/wpTDpcKbwp4gbnVsbCAqL1xyXG4gIGdldE5vbmUoa2V5OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0KGtleSwgeyBtb2RlOiAnbm9uZScgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDqMKOwrfDpcKPwpbDp8K8wpPDpcKtwpjDr8K8wozDqMKLwqXDpMK4wo3DpcKtwpjDpcKcwqjDpcKIwpnDqMKuwr7Dp8K9wq7DpsKMwoHDpMK5woXDpcKMwpbDp8K8wpPDpcKtwpggYE9ic2VydmFibGVgIMOlwq/CucOowrHCoVxyXG4gICAqL1xyXG4gIHRyeUdldDxUPihcclxuICAgIGtleTogc3RyaW5nLFxyXG4gICAgZGF0YTogT2JzZXJ2YWJsZTxUPixcclxuICAgIG9wdGlvbnM/OiB7IHR5cGU/OiAncyc7IGV4cGlyZT86IG51bWJlciB9LFxyXG4gICk6IE9ic2VydmFibGU8VD47XHJcbiAgLyoqXHJcbiAgICogw6jCjsK3w6XCj8KWw6fCvMKTw6XCrcKYw6/CvMKMw6jCi8Klw6TCuMKNw6XCrcKYw6XCnMKow6XCiMKZw6jCrsK+w6fCvcKuw6bCjMKBw6TCucKFw6XCjMKWw6fCvMKTw6XCrcKYIGBPYnNlcnZhYmxlYCDDpcKvwrnDqMKxwqFcclxuICAgKi9cclxuICB0cnlHZXQoXHJcbiAgICBrZXk6IHN0cmluZyxcclxuICAgIGRhdGE6IE9ic2VydmFibGU8YW55PixcclxuICAgIG9wdGlvbnM/OiB7IHR5cGU/OiAncyc7IGV4cGlyZT86IG51bWJlciB9LFxyXG4gICk6IE9ic2VydmFibGU8YW55PjtcclxuICAvKipcclxuICAgKiDDqMKOwrfDpcKPwpbDp8K8wpPDpcKtwpjDr8K8wozDqMKLwqXDpMK4wo3DpcKtwpjDpcKcwqjDpcKIwpnDqMKuwr7Dp8K9wq7DpsKMwoHDpMK5woXDpcKMwpbDp8K8wpPDpcKtwpjDpcKfwrrDp8KhwoDDpcKvwrnDqMKxwqFcclxuICAgKi9cclxuICB0cnlHZXQoXHJcbiAgICBrZXk6IHN0cmluZyxcclxuICAgIGRhdGE6IE9iamVjdCxcclxuICAgIG9wdGlvbnM/OiB7IHR5cGU/OiAncyc7IGV4cGlyZT86IG51bWJlciB9LFxyXG4gICk6IGFueTtcclxuICAvKipcclxuICAgKiDDqMKOwrfDpcKPwpbDp8K8wpPDpcKtwpjDr8K8wozDqMKLwqXDpMK4wo3DpcKtwpjDpcKcwqjDpcKIwpnDqMKuwr7Dp8K9wq7DpsKMwofDpcKuwprDp8K8wpPDpcKtwpjDp8KxwrvDpcKewovDqMK/wpvDqMKhwozDp8K8wpPDpcKtwpjDpcKvwrnDqMKxwqFcclxuICAgKi9cclxuICB0cnlHZXQoXHJcbiAgICBrZXk6IHN0cmluZyxcclxuICAgIGRhdGE6IE9iamVjdCxcclxuICAgIG9wdGlvbnM6IHsgdHlwZTogJ20nIHwgJ3MnOyBleHBpcmU/OiBudW1iZXIgfSxcclxuICApOiBhbnk7XHJcblxyXG4gIC8qKlxyXG4gICAqIMOowo7Ct8Olwo/ClsOnwrzCk8Olwq3CmMOvwrzCjMOowovCpcOkwrjCjcOlwq3CmMOlwpzCqMOlwojCmcOowq7CvsOnwr3CrsOnwrzCk8Olwq3CmMOlwq/CucOowrHCoVxyXG4gICAqL1xyXG4gIHRyeUdldChcclxuICAgIGtleTogc3RyaW5nLFxyXG4gICAgZGF0YTogYW55IHwgT2JzZXJ2YWJsZTxhbnk+LFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICAvKiogw6XCrcKYw6XCgsKow6fCscK7w6XCnsKLw6/CvMKMJ20nIMOowqHCqMOnwqTCusOlwobChcOlwq3CmMOvwrzCjCdzJyDDqMKhwqjDp8KkwrrDpsKMwoHDpMK5woUgKi9cclxuICAgICAgdHlwZT86ICdtJyB8ICdzJztcclxuICAgICAgLyoqXHJcbiAgICAgICAqIMOowr/Ch8OmwpzCn8OmwpfCtsOpwpfCtMOvwrzCjMOlwo3ClcOkwr3CjSBgw6fCp8KSYFxyXG4gICAgICAgKi9cclxuICAgICAgZXhwaXJlPzogbnVtYmVyO1xyXG4gICAgfSA9IHt9LFxyXG4gICk6IGFueSB7XHJcbiAgICBjb25zdCByZXQgPSB0aGlzLmdldE5vbmUoa2V5KTtcclxuICAgIGlmIChyZXQgPT09IG51bGwpIHtcclxuICAgICAgaWYgKCEoZGF0YSBpbnN0YW5jZW9mIE9ic2VydmFibGUpKSB7XHJcbiAgICAgICAgdGhpcy5zZXQoa2V5LCBkYXRhLCA8YW55Pm9wdGlvbnMpO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5zZXQoa2V5LCBkYXRhIGFzIE9ic2VydmFibGU8YW55PiwgPGFueT5vcHRpb25zKTtcclxuICAgIH1cclxuICAgIHJldHVybiBvZihyZXQpO1xyXG4gIH1cclxuXHJcbiAgLy8gZW5kcmVnaW9uXHJcblxyXG4gIC8vIHJlZ2lvbjogaGFzXHJcblxyXG4gIC8qKiDDpsKYwq/DpcKQwqbDp8K8wpPDpcKtwpggYGtleWAgKi9cclxuICBoYXMoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm1lbW9yeS5oYXMoa2V5KSB8fCB0aGlzLm1ldGEuaGFzKGtleSk7XHJcbiAgfVxyXG5cclxuICAvLyBlbmRyZWdpb25cclxuXHJcbiAgLy8gcmVnaW9uOiByZW1vdmVcclxuXHJcbiAgcHJpdmF0ZSBfcmVtb3ZlKGtleTogc3RyaW5nLCBuZWVkTm90aWZ5OiBib29sZWFuKSB7XHJcbiAgICBpZiAobmVlZE5vdGlmeSkgdGhpcy5ydW5Ob3RpZnkoa2V5LCAncmVtb3ZlJyk7XHJcbiAgICBpZiAodGhpcy5tZW1vcnkuaGFzKGtleSkpIHtcclxuICAgICAgdGhpcy5tZW1vcnkuZGVsZXRlKGtleSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuc3RvcmUucmVtb3ZlKHRoaXMub3B0aW9ucy5wcmVmaXggKyBrZXkpO1xyXG4gICAgdGhpcy5yZW1vdmVNZXRhKGtleSk7XHJcbiAgfVxyXG5cclxuICAvKiogw6fCp8K7w6nCmcKkw6fCvMKTw6XCrcKYICovXHJcbiAgcmVtb3ZlKGtleTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9yZW1vdmUoa2V5LCB0cnVlKTtcclxuICB9XHJcblxyXG4gIC8qKiDDpsK4woXDp8KpwrrDpsKJwoDDpsKcwonDp8K8wpPDpcKtwpggKi9cclxuICBjbGVhcigpIHtcclxuICAgIHRoaXMubm90aWZ5QnVmZmVyLmZvckVhY2goKHYsIGspID0+IHRoaXMucnVuTm90aWZ5KGssICdyZW1vdmUnKSk7XHJcbiAgICB0aGlzLm1lbW9yeS5jbGVhcigpO1xyXG4gICAgdGhpcy5tZXRhLmZvckVhY2goa2V5ID0+IHRoaXMuc3RvcmUucmVtb3ZlKHRoaXMub3B0aW9ucy5wcmVmaXggKyBrZXkpKTtcclxuICB9XHJcblxyXG4gIC8vIGVuZHJlZ2lvblxyXG5cclxuICAvLyByZWdpb246IG5vdGlmeVxyXG5cclxuICAvKipcclxuICAgKiDDqMKuwr7Dp8K9wq7Dp8KbwpHDpcKQwqzDqcKiwpHDp8KOwofDr8K8wozDpcKNwpXDpMK9wo3Dr8K8wprDpsKvwqvDp8KnwpLDpMK4wpTDpsKcwoDDpMK9wo4gYDIwbXNgw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYDMwMDBtc2BcclxuICAgKi9cclxuICBzZXQgZnJlcSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmZyZXFfdGljayA9IE1hdGgubWF4KDIwLCB2YWx1ZSk7XHJcbiAgICB0aGlzLmFib3J0RXhwaXJlTm90aWZ5KCk7XHJcbiAgICB0aGlzLnN0YXJ0RXhwaXJlTm90aWZ5KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXJ0RXhwaXJlTm90aWZ5KCkge1xyXG4gICAgdGhpcy5jaGVja0V4cGlyZU5vdGlmeSgpO1xyXG4gICAgdGhpcy5ydW5FeHBpcmVOb3RpZnkoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcnVuRXhwaXJlTm90aWZ5KCkge1xyXG4gICAgdGhpcy5mcmVxX3RpbWUgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5jaGVja0V4cGlyZU5vdGlmeSgpO1xyXG4gICAgICB0aGlzLnJ1bkV4cGlyZU5vdGlmeSgpO1xyXG4gICAgfSwgdGhpcy5mcmVxX3RpY2spO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGVja0V4cGlyZU5vdGlmeSgpIHtcclxuICAgIGNvbnN0IHJlbW92ZWQ6IHN0cmluZ1tdID0gW107XHJcbiAgICB0aGlzLm5vdGlmeUJ1ZmZlci5mb3JFYWNoKCh2LCBrZXkpID0+IHtcclxuICAgICAgaWYgKHRoaXMuaGFzKGtleSkgJiYgdGhpcy5nZXROb25lKGtleSkgPT09IG51bGwpIHJlbW92ZWQucHVzaChrZXkpO1xyXG4gICAgfSk7XHJcbiAgICByZW1vdmVkLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgdGhpcy5ydW5Ob3RpZnkoa2V5LCAnZXhwaXJlJyk7XHJcbiAgICAgIHRoaXMuX3JlbW92ZShrZXksIGZhbHNlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhYm9ydEV4cGlyZU5vdGlmeSgpIHtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLmZyZXFfdGltZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJ1bk5vdGlmeShrZXk6IHN0cmluZywgdHlwZTogQ2FjaGVOb3RpZnlUeXBlKSB7XHJcbiAgICBpZiAoIXRoaXMubm90aWZ5QnVmZmVyLmhhcyhrZXkpKSByZXR1cm47XHJcbiAgICB0aGlzLm5vdGlmeUJ1ZmZlci5nZXQoa2V5KS5uZXh0KHsgdHlwZSwgdmFsdWU6IHRoaXMuZ2V0Tm9uZShrZXkpIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogYGtleWAgw6fCm8KRw6XCkMKsw6/CvMKMw6XCvcKTIGBrZXlgIMOlwo/CmMOmwpvCtMOjwoDCgcOowr/Ch8OmwpzCn8OjwoDCgcOnwqfCu8OpwpnCpMOmwpfCtsOpwoDCmsOnwp/CpcOvwrzCjMOmwrPCqMOmwoTCj8OkwrvCpcOkwrjCi8OowovCpcOlwrnCssOnwrvChsOoworCgsOvwrzCmlxyXG4gICAqXHJcbiAgICogLSDDqMKwwoPDp8KUwqjDpcKQwo7DqcKZwqTDpcKGwo3DpsKswqHDqMKwwoPDp8KUwqggYGNhbmNlbE5vdGlmeWAgw6XCkMKmw6XCiMKZw6bCsMK4w6jCv8Kcw6TCuMKNw6jCv8KHw6bCnMKfXHJcbiAgICogLSDDp8KbwpHDpcKQwqzDpcKZwqjDpsKvwo8gYGZyZXFgICjDqcK7wpjDqMKuwqTDr8K8wpozw6fCp8KSKSDDpsKJwqfDqMKhwozDpMK4woDDpsKswqHDqMK/wofDpsKcwp/DpsKjwoDDpsKfwqVcclxuICAgKi9cclxuICBub3RpZnkoa2V5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPENhY2hlTm90aWZ5UmVzdWx0PiB7XHJcbiAgICBpZiAoIXRoaXMubm90aWZ5QnVmZmVyLmhhcyhrZXkpKSB7XHJcbiAgICAgIGNvbnN0IGNoYW5nZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PENhY2hlTm90aWZ5UmVzdWx0Pih0aGlzLmdldE5vbmUoa2V5KSk7XHJcbiAgICAgIHRoaXMubm90aWZ5QnVmZmVyLnNldChrZXksIGNoYW5nZSQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5QnVmZmVyLmdldChrZXkpLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogw6XCj8KWw6bCtsKIIGBrZXlgIMOnwpvCkcOlwpDCrFxyXG4gICAqL1xyXG4gIGNhbmNlbE5vdGlmeShrZXk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLm5vdGlmeUJ1ZmZlci5oYXMoa2V5KSkgcmV0dXJuO1xyXG4gICAgdGhpcy5ub3RpZnlCdWZmZXIuZ2V0KGtleSkudW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMubm90aWZ5QnVmZmVyLmRlbGV0ZShrZXkpO1xyXG4gIH1cclxuXHJcbiAgLyoqIGBrZXlgIMOmwpjCr8OlwpDCpsOlwrfCssOnwrvCj8OnwpvCkcOlwpDCrCAqL1xyXG4gIGhhc05vdGlmeShrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5QnVmZmVyLmhhcyhrZXkpO1xyXG4gIH1cclxuXHJcbiAgLyoqIMOmwrjChcOnwqnCusOmwonCgMOmwpzCiSBga2V5YCDDp8KawoTDp8KbwpHDpcKQwqwgKi9cclxuICBjbGVhck5vdGlmeSgpOiB2b2lkIHtcclxuICAgIHRoaXMubm90aWZ5QnVmZmVyLmZvckVhY2godiA9PiB2LnVuc3Vic2NyaWJlKCkpO1xyXG4gICAgdGhpcy5ub3RpZnlCdWZmZXIuY2xlYXIoKTtcclxuICB9XHJcblxyXG4gIC8vIGVuZHJlZ2lvblxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMubWVtb3J5LmNsZWFyKCk7XHJcbiAgICB0aGlzLmFib3J0RXhwaXJlTm90aWZ5KCk7XHJcbiAgICB0aGlzLmNsZWFyTm90aWZ5KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElDYWNoZVN0b3JlLCBJQ2FjaGUgfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9jYWxTdG9yYWdlQ2FjaGVTZXJ2aWNlIGltcGxlbWVudHMgSUNhY2hlU3RvcmUge1xyXG4gIGdldChrZXk6IHN0cmluZyk6IElDYWNoZSB7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpIHx8ICdudWxsJykgfHwgbnVsbDtcclxuICB9XHJcblxyXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IElDYWNoZSk6IGJvb2xlYW4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICByZW1vdmUoa2V5OiBzdHJpbmcpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEQ19TVE9SRV9TVE9SQUdFX1RPS0VOIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBEZWxvbkNhY2hlQ29uZmlnIH0gZnJvbSAnLi9jYWNoZS5jb25maWcnO1xyXG5pbXBvcnQgeyBDYWNoZVNlcnZpY2UgfSBmcm9tICcuL2NhY2hlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VDYWNoZVNlcnZpY2UgfSBmcm9tICcuL2xvY2FsLXN0b3JhZ2UtY2FjaGUuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe30pXHJcbmV4cG9ydCBjbGFzcyBEZWxvbkNhY2hlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBEZWxvbkNhY2hlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBEZWxvbkNhY2hlQ29uZmlnLFxyXG4gICAgICAgIENhY2hlU2VydmljZSxcclxuICAgICAgICB7IHByb3ZpZGU6IERDX1NUT1JFX1NUT1JBR0VfVE9LRU4sIHVzZUNsYXNzOiBMb2NhbFN0b3JhZ2VDYWNoZVNlcnZpY2UgfSxcclxuICAgICAgXSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJJbmplY3Rpb25Ub2tlbiIsImh0dHAiLCJPYnNlcnZhYmxlIiwidGFwIiwibWFwIiwib2YiLCJCZWhhdmlvclN1YmplY3QiLCJJbmplY3RhYmxlIiwiSW5qZWN0IiwiSHR0cENsaWVudCIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQVFBLFFBQWEsc0JBQXNCLEdBQUcsSUFBSUEsbUJBQWMsQ0FDdEQsd0JBQXdCLENBQ3pCOzs7Ozs7QUNWRCxRQUFBOzs7Ozs7O3dCQU04QixTQUFTOzs7Ozs7OzBCQU9SLEVBQUU7Ozs7MEJBSWIsRUFBRTs7Ozs0QkFJQSxjQUFjOzsrQkFyQnBDO1FBc0JDOzs7Ozs7QUN0QkQ7UUEwQkUsc0JBQ1UsU0FDZ0MsS0FBa0IsRUFDbERDO1lBRkEsWUFBTyxHQUFQLE9BQU87WUFDeUIsVUFBSyxHQUFMLEtBQUssQ0FBYTtZQUNsRCxTQUFJLEdBQUpBLE9BQUk7MEJBWmlDLElBQUksR0FBRyxFQUFrQjtnQ0FJcEUsSUFBSSxHQUFHLEVBQThDO3dCQUM3QixJQUFJLEdBQUcsRUFBVTs2QkFDekIsSUFBSTtZQVF0QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDMUI7Ozs7Ozs7UUFFRCwrQkFBUTs7Ozs7O1lBQVIsVUFBUyxHQUFRLEVBQUUsSUFBYyxFQUFFLFlBQWtCO2dC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