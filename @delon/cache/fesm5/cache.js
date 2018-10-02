import { InjectionToken, Injectable, Inject, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import addSeconds from 'date-fns/add_seconds';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { tap, map } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var DC_STORE_STORAGE_TOKEN = new InjectionToken('DC_STORE_STORAGE_TOKEN');

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
    function CacheService(options, store, http) {
        this.options = options;
        this.store = store;
        this.http = http;
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
            (/** @type {?} */ (ret.v)).forEach(function (key) { return _this.meta.add(key); });
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
        if (options === void 0) { options = {}; }
        /** @type {?} */
        var e = 0;
        if (options.expire) {
            e = addSeconds(new Date(), options.expire).valueOf();
        }
        if (!(data instanceof Observable)) {
            this.save(options.type, key, { v: data, e: e });
            return;
        }
        return data.pipe(tap(function (v) {
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
        if (options === void 0) { options = {}; }
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
                    .pipe(map(function (ret) {
                    return _this._deepGet(ret, /** @type {?} */ (_this.options.reName), null);
                }), tap(function (v) { return _this.set(key, v); }));
            }
            return null;
        }
        return isPromise ? of(value.v) : value.v;
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
            if (!(data instanceof Observable)) {
                this.set(key, data, /** @type {?} */ (options));
                return data;
            }
            return this.set(key, /** @type {?} */ (data), /** @type {?} */ (options));
        }
        return of(ret);
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
         */
        function (value) {
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
            var change$ = new BehaviorSubject(this.getNone(key));
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
        { type: Injectable }
    ];
    /** @nocollapse */
    CacheService.ctorParameters = function () { return [
        { type: DelonCacheConfig },
        { type: undefined, decorators: [{ type: Inject, args: [DC_STORE_STORAGE_TOKEN,] }] },
        { type: HttpClient }
    ]; };
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
        { type: NgModule, args: [{},] }
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

export { DC_STORE_STORAGE_TOKEN, CacheService, DelonCacheConfig, DelonCacheModule, LocalStorageCacheService as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9jYWNoZS9zcmMvaW50ZXJmYWNlLnRzIiwibmc6Ly9AZGVsb24vY2FjaGUvc3JjL2NhY2hlLmNvbmZpZy50cyIsIm5nOi8vQGRlbG9uL2NhY2hlL3NyYy9jYWNoZS5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vY2FjaGUvc3JjL2xvY2FsLXN0b3JhZ2UtY2FjaGUuc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL2NhY2hlL3NyYy9jYWNoZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNhY2hlIHtcclxuICB2OiBhbnk7XHJcbiAgLyoqIMOowr/Ch8OmwpzCn8OmwpfCtsOpwpfCtMOmwojCs8OvwrzCjGAwYCDDqMKhwqjDp8KkwrrDpMK4wo3DqMK/wofDpsKcwp8gKi9cclxuICBlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEQ19TVE9SRV9TVE9SQUdFX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPElDYWNoZVN0b3JlPihcclxuICAnRENfU1RPUkVfU1RPUkFHRV9UT0tFTicsXHJcbik7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDYWNoZVN0b3JlIHtcclxuICBnZXQoa2V5OiBzdHJpbmcpOiBJQ2FjaGU7XHJcblxyXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IElDYWNoZSk6IGJvb2xlYW47XHJcblxyXG4gIHJlbW92ZShrZXk6IHN0cmluZyk7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIENhY2hlTm90aWZ5VHlwZSA9ICdzZXQnIHwgJ3JlbW92ZScgfCAnZXhwaXJlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FjaGVOb3RpZnlSZXN1bHQge1xyXG4gIHR5cGU6IENhY2hlTm90aWZ5VHlwZTtcclxuICB2YWx1ZT86IGFueTtcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgRGVsb25DYWNoZUNvbmZpZyB7XHJcbiAgLyoqXHJcbiAgICogw6fCvMKTw6XCrcKYw6bCqMKhw6XCvMKPw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYHByb21pc2VgXHJcbiAgICogLSBgcHJvbWlzZWAgw6fCusKmw6XCrsKaw6bCqMKhw6XCvMKPw6/CvMKMw6XChcKBw6jCrsK4IGBrZXlgIMOkwr3CnMOkwrjCuiBodHRwIMOowo7Ct8Olwo/ClsOmwpXCsMOmwo3CrlxyXG4gICAqIC0gYG5vbmVgIMOmwq3Co8OlwrjCuMOmwqjCocOlwrzCj1xyXG4gICAqL1xyXG4gIG1vZGU/OiAncHJvbWlzZScgfCAnbm9uZScgPSAncHJvbWlzZSc7XHJcbiAgLyoqXHJcbiAgICogw6nCh8KNw6XCkcK9w6XCkMKNw6jCv8KUw6XCm8Kew6XCj8KCw6bClcKww6/CvMKMw6TCvsKLw6XCpsKCw6/CvMKaXHJcbiAgICogLSBgbnVsbGAgw6jCv8KUw6XCm8Kew6TCvcKTw6TCuMK6w6XChsKFw6XCrsK5XHJcbiAgICogLSBgbGlzdGAgw6jCv8KUw6XCm8Kew6TCvcKTw6XCusKUIGB7IGxpc3Q6IFtdIH1gXHJcbiAgICogLSBgcmVzdWx0Lmxpc3RgIMOowr/ClMOlwpvCnsOkwr3Ck8OlwrrClCBgeyByZXN1bHQ6IHsgbGlzdDogW10gfSB9YFxyXG4gICAqL1xyXG4gIHJlTmFtZT86IHN0cmluZyB8IHN0cmluZ1tdID0gJyc7XHJcbiAgLyoqXHJcbiAgICogw6bCjMKBw6TCucKFw6XCjMKWw6bClcKww6bCjcKuw6nClMKuw6XCgMK8w6XCicKNw6fCvMKAXHJcbiAgICovXHJcbiAgcHJlZml4Pzogc3RyaW5nID0gJyc7XHJcbiAgLyoqXHJcbiAgICogw6bCjMKBw6TCucKFw6XCjMKWw6bClcKww6bCjcKuw6XChcKDw6bClcKww6bCjcKuw6XCrcKYw6XCgsKow6nClMKuw6XCkMKNXHJcbiAgICovXHJcbiAgbWV0YV9rZXk/OiBzdHJpbmcgPSAnX19jYWNoZV9tZXRhJztcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3ksIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgYWRkU2Vjb25kcyBmcm9tICdkYXRlLWZucy9hZGRfc2Vjb25kcyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFwLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIERDX1NUT1JFX1NUT1JBR0VfVE9LRU4sXHJcbiAgSUNhY2hlU3RvcmUsXHJcbiAgSUNhY2hlLFxyXG4gIENhY2hlTm90aWZ5UmVzdWx0LFxyXG4gIENhY2hlTm90aWZ5VHlwZSxcclxufSBmcm9tICcuL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IERlbG9uQ2FjaGVDb25maWcgfSBmcm9tICcuL2NhY2hlLmNvbmZpZyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDYWNoZVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgbWVtb3J5OiBNYXA8c3RyaW5nLCBJQ2FjaGU+ID0gbmV3IE1hcDxzdHJpbmcsIElDYWNoZT4oKTtcclxuICBwcml2YXRlIHJlYWRvbmx5IG5vdGlmeUJ1ZmZlcjogTWFwPFxyXG4gICAgc3RyaW5nLFxyXG4gICAgQmVoYXZpb3JTdWJqZWN0PENhY2hlTm90aWZ5UmVzdWx0PlxyXG4gID4gPSBuZXcgTWFwPHN0cmluZywgQmVoYXZpb3JTdWJqZWN0PENhY2hlTm90aWZ5UmVzdWx0Pj4oKTtcclxuICBwcml2YXRlIG1ldGE6IFNldDxzdHJpbmc+ID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcbiAgcHJpdmF0ZSBmcmVxX3RpY2sgPSAzMDAwO1xyXG4gIHByaXZhdGUgZnJlcV90aW1lOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBvcHRpb25zOiBEZWxvbkNhY2hlQ29uZmlnLFxyXG4gICAgQEluamVjdChEQ19TVE9SRV9TVE9SQUdFX1RPS0VOKSBwcml2YXRlIHN0b3JlOiBJQ2FjaGVTdG9yZSxcclxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuICApIHtcclxuICAgIHRoaXMubG9hZE1ldGEoKTtcclxuICAgIHRoaXMuc3RhcnRFeHBpcmVOb3RpZnkoKTtcclxuICB9XHJcblxyXG4gIF9kZWVwR2V0KG9iajogYW55LCBwYXRoOiBzdHJpbmdbXSwgZGVmYXVsdFZhbHVlPzogYW55KSB7XHJcbiAgICBpZiAoIW9iaikgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuICAgIGlmIChwYXRoLmxlbmd0aCA8PSAxKSB7XHJcbiAgICAgIGNvbnN0IGNoZWNrT2JqID0gcGF0aC5sZW5ndGggPyBvYmpbcGF0aFswXV0gOiBvYmo7XHJcbiAgICAgIHJldHVybiB0eXBlb2YgY2hlY2tPYmogPT09ICd1bmRlZmluZWQnID8gZGVmYXVsdFZhbHVlIDogY2hlY2tPYmo7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGF0aC5yZWR1Y2UoKG8sIGspID0+IG9ba10sIG9iaikgfHwgZGVmYXVsdFZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLy8gcmVnaW9uOiBtZXRhXHJcblxyXG4gIHByaXZhdGUgcHVzaE1ldGEoa2V5OiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLm1ldGEuaGFzKGtleSkpIHJldHVybjtcclxuICAgIHRoaXMubWV0YS5hZGQoa2V5KTtcclxuICAgIHRoaXMuc2F2ZU1ldGEoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlTWV0YShrZXk6IHN0cmluZykge1xyXG4gICAgaWYgKCF0aGlzLm1ldGEuaGFzKGtleSkpIHJldHVybjtcclxuICAgIHRoaXMubWV0YS5kZWxldGUoa2V5KTtcclxuICAgIHRoaXMuc2F2ZU1ldGEoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZE1ldGEoKSB7XHJcbiAgICBjb25zdCByZXQgPSB0aGlzLnN0b3JlLmdldCh0aGlzLm9wdGlvbnMubWV0YV9rZXkpO1xyXG4gICAgaWYgKHJldCAmJiByZXQudikge1xyXG4gICAgICAocmV0LnYgYXMgc3RyaW5nW10pLmZvckVhY2goa2V5ID0+IHRoaXMubWV0YS5hZGQoa2V5KSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNhdmVNZXRhKCkge1xyXG4gICAgY29uc3QgbWV0YURhdGE6IHN0cmluZ1tdID0gW107XHJcbiAgICB0aGlzLm1ldGEuZm9yRWFjaChrZXkgPT4gbWV0YURhdGEucHVzaChrZXkpKTtcclxuICAgIHRoaXMuc3RvcmUuc2V0KHRoaXMub3B0aW9ucy5tZXRhX2tleSwgeyB2OiBtZXRhRGF0YSwgZTogMCB9KTtcclxuICB9XHJcblxyXG4gIGdldE1ldGEoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tZXRhO1xyXG4gIH1cclxuXHJcbiAgLy8gZW5kcmVnaW9uXHJcblxyXG4gIC8vIHJlZ2lvbjogc2V0XHJcblxyXG4gIC8qKlxyXG4gICAqIMOmwozCgcOkwrnChcOlwozClsOnwrzCk8Olwq3CmCBgT2JzZXJ2YWJsZWAgw6XCr8K5w6jCscKhw6/CvMKMw6TCvsKLw6XCpsKCw6/CvMKaXHJcbiAgICogLSBgc2V0KCdkYXRhLzEnLCB0aGlzLmh0dHAuZ2V0KCdkYXRhLzEnKSkuc3Vic2NyaWJlKClgXHJcbiAgICogLSBgc2V0KCdkYXRhLzEnLCB0aGlzLmh0dHAuZ2V0KCdkYXRhLzEnKSwgeyBleHBpcmU6IDEwIH0pLnN1YnNjcmliZSgpYFxyXG4gICAqL1xyXG4gIHNldDxUPihcclxuICAgIGtleTogc3RyaW5nLFxyXG4gICAgZGF0YTogT2JzZXJ2YWJsZTxUPixcclxuICAgIG9wdGlvbnM/OiB7IHR5cGU/OiAncyc7IGV4cGlyZT86IG51bWJlciB9LFxyXG4gICk6IE9ic2VydmFibGU8VD47XHJcbiAgLyoqXHJcbiAgICogw6bCjMKBw6TCucKFw6XCjMKWw6fCvMKTw6XCrcKYIGBPYnNlcnZhYmxlYCDDpcKvwrnDqMKxwqHDr8K8wozDpMK+wovDpcKmwoLDr8K8wppcclxuICAgKiAtIGBzZXQoJ2RhdGEvMScsIHRoaXMuaHR0cC5nZXQoJ2RhdGEvMScpKS5zdWJzY3JpYmUoKWBcclxuICAgKiAtIGBzZXQoJ2RhdGEvMScsIHRoaXMuaHR0cC5nZXQoJ2RhdGEvMScpLCB7IGV4cGlyZTogMTAgfSkuc3Vic2NyaWJlKClgXHJcbiAgICovXHJcbiAgc2V0KFxyXG4gICAga2V5OiBzdHJpbmcsXHJcbiAgICBkYXRhOiBPYnNlcnZhYmxlPGFueT4sXHJcbiAgICBvcHRpb25zPzogeyB0eXBlPzogJ3MnOyBleHBpcmU/OiBudW1iZXIgfSxcclxuICApOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgLyoqXHJcbiAgICogw6bCjMKBw6TCucKFw6XCjMKWw6fCvMKTw6XCrcKYw6XCn8K6w6fCocKAw6XCr8K5w6jCscKhw6/CvMKMw6TCvsKLw6XCpsKCw6/CvMKaXHJcbiAgICogLSBgc2V0KCdkYXRhLzEnLCAxKWBcclxuICAgKiAtIGBzZXQoJ2RhdGEvMScsIDEsIHsgZXhwaXJlOiAxMCB9KWBcclxuICAgKi9cclxuICBzZXQoXHJcbiAgICBrZXk6IHN0cmluZyxcclxuICAgIGRhdGE6IE9iamVjdCxcclxuICAgIG9wdGlvbnM/OiB7IHR5cGU/OiAncyc7IGV4cGlyZT86IG51bWJlciB9LFxyXG4gICk6IHZvaWQ7XHJcbiAgLyoqXHJcbiAgICogw6bCjMKHw6XCrsKaw6fCvMKTw6XCrcKYw6fCscK7w6XCnsKLw6jCv8Kbw6jCocKMw6fCvMKTw6XCrcKYw6XCr8K5w6jCscKhw6/CvMKMw6TCvsKLw6XCpsKCw6XChsKFw6XCrcKYw6fCvMKTw6XCrcKYw6/CvMKaXHJcbiAgICogLSBgc2V0KCdkYXRhLzEnLCAxLCB7IHR5cGU6ICdtJyB9KWBcclxuICAgKiAtIGBzZXQoJ2RhdGEvMScsIDEsIHsgdHlwZTogJ20nLCBleHBpcmU6IDEwIH0pYFxyXG4gICAqL1xyXG4gIHNldChcclxuICAgIGtleTogc3RyaW5nLFxyXG4gICAgZGF0YTogT2JqZWN0LFxyXG4gICAgb3B0aW9uczogeyB0eXBlOiAnbScgfCAncyc7IGV4cGlyZT86IG51bWJlciB9LFxyXG4gICk6IHZvaWQ7XHJcbiAgLyoqXHJcbiAgICogw6fCvMKTw6XCrcKYw6XCr8K5w6jCscKhXHJcbiAgICovXHJcbiAgc2V0KFxyXG4gICAga2V5OiBzdHJpbmcsXHJcbiAgICBkYXRhOiBhbnkgfCBPYnNlcnZhYmxlPGFueT4sXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIC8qKiDDpcKtwpjDpcKCwqjDp8KxwrvDpcKewovDr8K8wownbScgw6jCocKow6fCpMK6w6XChsKFw6XCrcKYw6/CvMKMJ3MnIMOowqHCqMOnwqTCusOmwozCgcOkwrnChSAqL1xyXG4gICAgICB0eXBlPzogJ20nIHwgJ3MnO1xyXG4gICAgICAvKipcclxuICAgICAgICogw6jCv8KHw6bCnMKfw6bCl8K2w6nCl8K0w6/CvMKMw6XCjcKVw6TCvcKNIGDDp8KnwpJgXHJcbiAgICAgICAqL1xyXG4gICAgICBleHBpcmU/OiBudW1iZXI7XHJcbiAgICB9ID0ge30sXHJcbiAgKTogYW55IHtcclxuICAgIC8vIGV4cGlyZVxyXG4gICAgbGV0IGUgPSAwO1xyXG4gICAgaWYgKG9wdGlvbnMuZXhwaXJlKSB7XHJcbiAgICAgIGUgPSBhZGRTZWNvbmRzKG5ldyBEYXRlKCksIG9wdGlvbnMuZXhwaXJlKS52YWx1ZU9mKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoIShkYXRhIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkpIHtcclxuICAgICAgdGhpcy5zYXZlKG9wdGlvbnMudHlwZSwga2V5LCB7IHY6IGRhdGEsIGUgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHJldHVybiBkYXRhLnBpcGUoXHJcbiAgICAgIHRhcCgodjogYW55KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zYXZlKG9wdGlvbnMudHlwZSwga2V5LCB7IHYsIGUgfSk7XHJcbiAgICAgIH0pLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2F2ZSh0eXBlOiAnbScgfCAncycsIGtleTogc3RyaW5nLCB2YWx1ZTogSUNhY2hlKSB7XHJcbiAgICBpZiAodHlwZSA9PT0gJ20nKSB7XHJcbiAgICAgIHRoaXMubWVtb3J5LnNldChrZXksIHZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RvcmUuc2V0KHRoaXMub3B0aW9ucy5wcmVmaXggKyBrZXksIHZhbHVlKTtcclxuICAgICAgdGhpcy5wdXNoTWV0YShrZXkpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5ydW5Ob3RpZnkoa2V5LCAnc2V0Jyk7XHJcbiAgfVxyXG5cclxuICAvLyBlbmRyZWdpb25cclxuXHJcbiAgLy8gcmVnaW9uOiBnZXRcclxuXHJcbiAgLyoqIMOowo7Ct8Olwo/ClsOnwrzCk8Olwq3CmMOmwpXCsMOmwo3CrsOvwrzCjMOowovCpSBga2V5YCDDpMK4wo3DpcKtwpjDpcKcwqjDpcKIwpkgYGtleWAgw6TCvcKcw6TCuMK6SFRUUMOowq/Ct8OmwrHCgsOnwrzCk8Olwq3CmMOlwpDCjsOowr/ClMOlwpvCniAqL1xyXG4gIGdldDxUPihcclxuICAgIGtleTogc3RyaW5nLFxyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgbW9kZTogJ3Byb21pc2UnO1xyXG4gICAgICB0eXBlPzogJ20nIHwgJ3MnO1xyXG4gICAgICBleHBpcmU/OiBudW1iZXI7XHJcbiAgICB9LFxyXG4gICk6IE9ic2VydmFibGU8VD47XHJcbiAgLyoqIMOowo7Ct8Olwo/ClsOnwrzCk8Olwq3CmMOmwpXCsMOmwo3CrsOvwrzCjMOowovCpSBga2V5YCDDpMK4wo3DpcKtwpjDpcKcwqjDpcKIwpkgYGtleWAgw6TCvcKcw6TCuMK6SFRUUMOowq/Ct8OmwrHCgsOnwrzCk8Olwq3CmMOlwpDCjsOowr/ClMOlwpvCniAqL1xyXG4gIGdldChcclxuICAgIGtleTogc3RyaW5nLFxyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgbW9kZTogJ3Byb21pc2UnO1xyXG4gICAgICB0eXBlPzogJ20nIHwgJ3MnO1xyXG4gICAgICBleHBpcmU/OiBudW1iZXI7XHJcbiAgICB9LFxyXG4gICk6IE9ic2VydmFibGU8YW55PjtcclxuICAvKiogw6jCjsK3w6XCj8KWw6fCvMKTw6XCrcKYw6bClcKww6bCjcKuw6/CvMKMw6jCi8KlIGBrZXlgIMOkwrjCjcOlwq3CmMOlwpzCqMOmwojClsOlwrfCssOowr/Ch8OmwpzCn8OlwojCmcOowr/ClMOlwpvCniBudWxsICovXHJcbiAgZ2V0KFxyXG4gICAga2V5OiBzdHJpbmcsXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIG1vZGU6ICdub25lJztcclxuICAgICAgdHlwZT86ICdtJyB8ICdzJztcclxuICAgICAgZXhwaXJlPzogbnVtYmVyO1xyXG4gICAgfSxcclxuICApOiBhbnk7XHJcbiAgZ2V0KFxyXG4gICAga2V5OiBzdHJpbmcsXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIG1vZGU/OiAncHJvbWlzZScgfCAnbm9uZSc7XHJcbiAgICAgIHR5cGU/OiAnbScgfCAncyc7XHJcbiAgICAgIGV4cGlyZT86IG51bWJlcjtcclxuICAgIH0gPSB7fSxcclxuICApOiBPYnNlcnZhYmxlPGFueT4gfCBhbnkge1xyXG4gICAgY29uc3QgaXNQcm9taXNlID1cclxuICAgICAgb3B0aW9ucy5tb2RlICE9PSAnbm9uZScgJiYgdGhpcy5vcHRpb25zLm1vZGUgPT09ICdwcm9taXNlJztcclxuICAgIGNvbnN0IHZhbHVlOiBJQ2FjaGUgPSB0aGlzLm1lbW9yeS5oYXMoa2V5KVxyXG4gICAgICA/IHRoaXMubWVtb3J5LmdldChrZXkpXHJcbiAgICAgIDogdGhpcy5zdG9yZS5nZXQodGhpcy5vcHRpb25zLnByZWZpeCArIGtleSk7XHJcbiAgICBpZiAoIXZhbHVlIHx8ICh2YWx1ZS5lICYmIHZhbHVlLmUgPiAwICYmIHZhbHVlLmUgPCBuZXcgRGF0ZSgpLnZhbHVlT2YoKSkpIHtcclxuICAgICAgaWYgKGlzUHJvbWlzZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgIC5nZXQoa2V5KVxyXG4gICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgIG1hcCgocmV0OiBhbnkpID0+XHJcbiAgICAgICAgICAgICAgdGhpcy5fZGVlcEdldChyZXQsIHRoaXMub3B0aW9ucy5yZU5hbWUgYXMgc3RyaW5nW10sIG51bGwpLFxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICB0YXAodiA9PiB0aGlzLnNldChrZXksIHYpKSxcclxuICAgICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGlzUHJvbWlzZSA/IG9mKHZhbHVlLnYpIDogdmFsdWUudjtcclxuICB9XHJcblxyXG4gIC8qKiDDqMKOwrfDpcKPwpbDp8K8wpPDpcKtwpjDpsKVwrDDpsKNwq7Dr8K8wozDqMKLwqUgYGtleWAgw6TCuMKNw6XCrcKYw6XCnMKow6bCiMKWw6XCt8Kyw6jCv8KHw6bCnMKfw6XCiMKZw6jCv8KUw6XCm8KeIG51bGwgKi9cclxuICBnZXROb25lPFQ+KGtleTogc3RyaW5nKTogVDtcclxuICAvKiogw6jCjsK3w6XCj8KWw6fCvMKTw6XCrcKYw6bClcKww6bCjcKuw6/CvMKMw6jCi8KlIGBrZXlgIMOkwrjCjcOlwq3CmMOlwpzCqMOmwojClsOlwrfCssOowr/Ch8OmwpzCn8OlwojCmcOowr/ClMOlwpvCniBudWxsICovXHJcbiAgZ2V0Tm9uZShrZXk6IHN0cmluZyk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXQoa2V5LCB7IG1vZGU6ICdub25lJyB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOowo7Ct8Olwo/ClsOnwrzCk8Olwq3CmMOvwrzCjMOowovCpcOkwrjCjcOlwq3CmMOlwpzCqMOlwojCmcOowq7CvsOnwr3CrsOmwozCgcOkwrnChcOlwozClsOnwrzCk8Olwq3CmCBgT2JzZXJ2YWJsZWAgw6XCr8K5w6jCscKhXHJcbiAgICovXHJcbiAgdHJ5R2V0PFQ+KFxyXG4gICAga2V5OiBzdHJpbmcsXHJcbiAgICBkYXRhOiBPYnNlcnZhYmxlPFQ+LFxyXG4gICAgb3B0aW9ucz86IHsgdHlwZT86ICdzJzsgZXhwaXJlPzogbnVtYmVyIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxUPjtcclxuICAvKipcclxuICAgKiDDqMKOwrfDpcKPwpbDp8K8wpPDpcKtwpjDr8K8wozDqMKLwqXDpMK4wo3DpcKtwpjDpcKcwqjDpcKIwpnDqMKuwr7Dp8K9wq7DpsKMwoHDpMK5woXDpcKMwpbDp8K8wpPDpcKtwpggYE9ic2VydmFibGVgIMOlwq/CucOowrHCoVxyXG4gICAqL1xyXG4gIHRyeUdldChcclxuICAgIGtleTogc3RyaW5nLFxyXG4gICAgZGF0YTogT2JzZXJ2YWJsZTxhbnk+LFxyXG4gICAgb3B0aW9ucz86IHsgdHlwZT86ICdzJzsgZXhwaXJlPzogbnVtYmVyIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gIC8qKlxyXG4gICAqIMOowo7Ct8Olwo/ClsOnwrzCk8Olwq3CmMOvwrzCjMOowovCpcOkwrjCjcOlwq3CmMOlwpzCqMOlwojCmcOowq7CvsOnwr3CrsOmwozCgcOkwrnChcOlwozClsOnwrzCk8Olwq3CmMOlwp/CusOnwqHCgMOlwq/CucOowrHCoVxyXG4gICAqL1xyXG4gIHRyeUdldChcclxuICAgIGtleTogc3RyaW5nLFxyXG4gICAgZGF0YTogT2JqZWN0LFxyXG4gICAgb3B0aW9ucz86IHsgdHlwZT86ICdzJzsgZXhwaXJlPzogbnVtYmVyIH0sXHJcbiAgKTogYW55O1xyXG4gIC8qKlxyXG4gICAqIMOowo7Ct8Olwo/ClsOnwrzCk8Olwq3CmMOvwrzCjMOowovCpcOkwrjCjcOlwq3CmMOlwpzCqMOlwojCmcOowq7CvsOnwr3CrsOmwozCh8Olwq7CmsOnwrzCk8Olwq3CmMOnwrHCu8Olwp7Ci8Oowr/Cm8OowqHCjMOnwrzCk8Olwq3CmMOlwq/CucOowrHCoVxyXG4gICAqL1xyXG4gIHRyeUdldChcclxuICAgIGtleTogc3RyaW5nLFxyXG4gICAgZGF0YTogT2JqZWN0LFxyXG4gICAgb3B0aW9uczogeyB0eXBlOiAnbScgfCAncyc7IGV4cGlyZT86IG51bWJlciB9LFxyXG4gICk6IGFueTtcclxuXHJcbiAgLyoqXHJcbiAgICogw6jCjsK3w6XCj8KWw6fCvMKTw6XCrcKYw6/CvMKMw6jCi8Klw6TCuMKNw6XCrcKYw6XCnMKow6XCiMKZw6jCrsK+w6fCvcKuw6fCvMKTw6XCrcKYw6XCr8K5w6jCscKhXHJcbiAgICovXHJcbiAgdHJ5R2V0KFxyXG4gICAga2V5OiBzdHJpbmcsXHJcbiAgICBkYXRhOiBhbnkgfCBPYnNlcnZhYmxlPGFueT4sXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIC8qKiDDpcKtwpjDpcKCwqjDp8KxwrvDpcKewovDr8K8wownbScgw6jCocKow6fCpMK6w6XChsKFw6XCrcKYw6/CvMKMJ3MnIMOowqHCqMOnwqTCusOmwozCgcOkwrnChSAqL1xyXG4gICAgICB0eXBlPzogJ20nIHwgJ3MnO1xyXG4gICAgICAvKipcclxuICAgICAgICogw6jCv8KHw6bCnMKfw6bCl8K2w6nCl8K0w6/CvMKMw6XCjcKVw6TCvcKNIGDDp8KnwpJgXHJcbiAgICAgICAqL1xyXG4gICAgICBleHBpcmU/OiBudW1iZXI7XHJcbiAgICB9ID0ge30sXHJcbiAgKTogYW55IHtcclxuICAgIGNvbnN0IHJldCA9IHRoaXMuZ2V0Tm9uZShrZXkpO1xyXG4gICAgaWYgKHJldCA9PT0gbnVsbCkge1xyXG4gICAgICBpZiAoIShkYXRhIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkpIHtcclxuICAgICAgICB0aGlzLnNldChrZXksIGRhdGEsIDxhbnk+b3B0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzLnNldChrZXksIGRhdGEgYXMgT2JzZXJ2YWJsZTxhbnk+LCA8YW55Pm9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9mKHJldCk7XHJcbiAgfVxyXG5cclxuICAvLyBlbmRyZWdpb25cclxuXHJcbiAgLy8gcmVnaW9uOiBoYXNcclxuXHJcbiAgLyoqIMOmwpjCr8OlwpDCpsOnwrzCk8Olwq3CmCBga2V5YCAqL1xyXG4gIGhhcyhrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubWVtb3J5LmhhcyhrZXkpIHx8IHRoaXMubWV0YS5oYXMoa2V5KTtcclxuICB9XHJcblxyXG4gIC8vIGVuZHJlZ2lvblxyXG5cclxuICAvLyByZWdpb246IHJlbW92ZVxyXG5cclxuICBwcml2YXRlIF9yZW1vdmUoa2V5OiBzdHJpbmcsIG5lZWROb3RpZnk6IGJvb2xlYW4pIHtcclxuICAgIGlmIChuZWVkTm90aWZ5KSB0aGlzLnJ1bk5vdGlmeShrZXksICdyZW1vdmUnKTtcclxuICAgIGlmICh0aGlzLm1lbW9yeS5oYXMoa2V5KSkge1xyXG4gICAgICB0aGlzLm1lbW9yeS5kZWxldGUoa2V5KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdG9yZS5yZW1vdmUodGhpcy5vcHRpb25zLnByZWZpeCArIGtleSk7XHJcbiAgICB0aGlzLnJlbW92ZU1ldGEoa2V5KTtcclxuICB9XHJcblxyXG4gIC8qKiDDp8KnwrvDqcKZwqTDp8K8wpPDpcKtwpggKi9cclxuICByZW1vdmUoa2V5OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3JlbW92ZShrZXksIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqIMOmwrjChcOnwqnCusOmwonCgMOmwpzCicOnwrzCk8Olwq3CmCAqL1xyXG4gIGNsZWFyKCkge1xyXG4gICAgdGhpcy5ub3RpZnlCdWZmZXIuZm9yRWFjaCgodiwgaykgPT4gdGhpcy5ydW5Ob3RpZnkoaywgJ3JlbW92ZScpKTtcclxuICAgIHRoaXMubWVtb3J5LmNsZWFyKCk7XHJcbiAgICB0aGlzLm1ldGEuZm9yRWFjaChrZXkgPT4gdGhpcy5zdG9yZS5yZW1vdmUodGhpcy5vcHRpb25zLnByZWZpeCArIGtleSkpO1xyXG4gIH1cclxuXHJcbiAgLy8gZW5kcmVnaW9uXHJcblxyXG4gIC8vIHJlZ2lvbjogbm90aWZ5XHJcblxyXG4gIC8qKlxyXG4gICAqIMOowq7CvsOnwr3CrsOnwpvCkcOlwpDCrMOpwqLCkcOnwo7Ch8OvwrzCjMOlwo3ClcOkwr3CjcOvwrzCmsOmwq/Cq8OnwqfCksOkwrjClMOmwpzCgMOkwr3CjiBgMjBtc2DDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgMzAwMG1zYFxyXG4gICAqL1xyXG4gIHNldCBmcmVxKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuZnJlcV90aWNrID0gTWF0aC5tYXgoMjAsIHZhbHVlKTtcclxuICAgIHRoaXMuYWJvcnRFeHBpcmVOb3RpZnkoKTtcclxuICAgIHRoaXMuc3RhcnRFeHBpcmVOb3RpZnkoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhcnRFeHBpcmVOb3RpZnkoKSB7XHJcbiAgICB0aGlzLmNoZWNrRXhwaXJlTm90aWZ5KCk7XHJcbiAgICB0aGlzLnJ1bkV4cGlyZU5vdGlmeSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBydW5FeHBpcmVOb3RpZnkoKSB7XHJcbiAgICB0aGlzLmZyZXFfdGltZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNoZWNrRXhwaXJlTm90aWZ5KCk7XHJcbiAgICAgIHRoaXMucnVuRXhwaXJlTm90aWZ5KCk7XHJcbiAgICB9LCB0aGlzLmZyZXFfdGljayk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoZWNrRXhwaXJlTm90aWZ5KCkge1xyXG4gICAgY29uc3QgcmVtb3ZlZDogc3RyaW5nW10gPSBbXTtcclxuICAgIHRoaXMubm90aWZ5QnVmZmVyLmZvckVhY2goKHYsIGtleSkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5oYXMoa2V5KSAmJiB0aGlzLmdldE5vbmUoa2V5KSA9PT0gbnVsbCkgcmVtb3ZlZC5wdXNoKGtleSk7XHJcbiAgICB9KTtcclxuICAgIHJlbW92ZWQuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICB0aGlzLnJ1bk5vdGlmeShrZXksICdleHBpcmUnKTtcclxuICAgICAgdGhpcy5fcmVtb3ZlKGtleSwgZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFib3J0RXhwaXJlTm90aWZ5KCkge1xyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuZnJlcV90aW1lKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcnVuTm90aWZ5KGtleTogc3RyaW5nLCB0eXBlOiBDYWNoZU5vdGlmeVR5cGUpIHtcclxuICAgIGlmICghdGhpcy5ub3RpZnlCdWZmZXIuaGFzKGtleSkpIHJldHVybjtcclxuICAgIHRoaXMubm90aWZ5QnVmZmVyLmdldChrZXkpLm5leHQoeyB0eXBlLCB2YWx1ZTogdGhpcy5nZXROb25lKGtleSkgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBga2V5YCDDp8KbwpHDpcKQwqzDr8K8wozDpcK9wpMgYGtleWAgw6XCj8KYw6bCm8K0w6PCgMKBw6jCv8KHw6bCnMKfw6PCgMKBw6fCp8K7w6nCmcKkw6bCl8K2w6nCgMKaw6fCn8Klw6/CvMKMw6bCs8Kow6bChMKPw6TCu8Klw6TCuMKLw6jCi8Klw6XCucKyw6fCu8KGw6jCisKCw6/CvMKaXHJcbiAgICpcclxuICAgKiAtIMOowrDCg8OnwpTCqMOlwpDCjsOpwpnCpMOlwobCjcOmwqzCocOowrDCg8OnwpTCqCBgY2FuY2VsTm90aWZ5YCDDpcKQwqbDpcKIwpnDpsKwwrjDqMK/wpzDpMK4wo3DqMK/wofDpsKcwp9cclxuICAgKiAtIMOnwpvCkcOlwpDCrMOlwpnCqMOmwq/CjyBgZnJlcWAgKMOpwrvCmMOowq7CpMOvwrzCmjPDp8KnwpIpIMOmwonCp8OowqHCjMOkwrjCgMOmwqzCocOowr/Ch8OmwpzCn8OmwqPCgMOmwp/CpVxyXG4gICAqL1xyXG4gIG5vdGlmeShrZXk6IHN0cmluZyk6IE9ic2VydmFibGU8Q2FjaGVOb3RpZnlSZXN1bHQ+IHtcclxuICAgIGlmICghdGhpcy5ub3RpZnlCdWZmZXIuaGFzKGtleSkpIHtcclxuICAgICAgY29uc3QgY2hhbmdlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Q2FjaGVOb3RpZnlSZXN1bHQ+KHRoaXMuZ2V0Tm9uZShrZXkpKTtcclxuICAgICAgdGhpcy5ub3RpZnlCdWZmZXIuc2V0KGtleSwgY2hhbmdlJCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5ub3RpZnlCdWZmZXIuZ2V0KGtleSkuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDpcKPwpbDpsK2woggYGtleWAgw6fCm8KRw6XCkMKsXHJcbiAgICovXHJcbiAgY2FuY2VsTm90aWZ5KGtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMubm90aWZ5QnVmZmVyLmhhcyhrZXkpKSByZXR1cm47XHJcbiAgICB0aGlzLm5vdGlmeUJ1ZmZlci5nZXQoa2V5KS51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5ub3RpZnlCdWZmZXIuZGVsZXRlKGtleSk7XHJcbiAgfVxyXG5cclxuICAvKiogYGtleWAgw6bCmMKvw6XCkMKmw6XCt8Kyw6fCu8KPw6fCm8KRw6XCkMKsICovXHJcbiAgaGFzTm90aWZ5KGtleTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5ub3RpZnlCdWZmZXIuaGFzKGtleSk7XHJcbiAgfVxyXG5cclxuICAvKiogw6bCuMKFw6fCqcK6w6bCicKAw6bCnMKJIGBrZXlgIMOnwprChMOnwpvCkcOlwpDCrCAqL1xyXG4gIGNsZWFyTm90aWZ5KCk6IHZvaWQge1xyXG4gICAgdGhpcy5ub3RpZnlCdWZmZXIuZm9yRWFjaCh2ID0+IHYudW5zdWJzY3JpYmUoKSk7XHJcbiAgICB0aGlzLm5vdGlmeUJ1ZmZlci5jbGVhcigpO1xyXG4gIH1cclxuXHJcbiAgLy8gZW5kcmVnaW9uXHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5tZW1vcnkuY2xlYXIoKTtcclxuICAgIHRoaXMuYWJvcnRFeHBpcmVOb3RpZnkoKTtcclxuICAgIHRoaXMuY2xlYXJOb3RpZnkoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSUNhY2hlU3RvcmUsIElDYWNoZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2VDYWNoZVNlcnZpY2UgaW1wbGVtZW50cyBJQ2FjaGVTdG9yZSB7XHJcbiAgZ2V0KGtleTogc3RyaW5nKTogSUNhY2hlIHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgfHwgJ251bGwnKSB8fCBudWxsO1xyXG4gIH1cclxuXHJcbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogSUNhY2hlKTogYm9vbGVhbiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHJlbW92ZShrZXk6IHN0cmluZykge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IERDX1NUT1JFX1NUT1JBR0VfVE9LRU4gfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IERlbG9uQ2FjaGVDb25maWcgfSBmcm9tICcuL2NhY2hlLmNvbmZpZyc7XHJcbmltcG9ydCB7IENhY2hlU2VydmljZSB9IGZyb20gJy4vY2FjaGUuc2VydmljZSc7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZUNhY2hlU2VydmljZSB9IGZyb20gJy4vbG9jYWwtc3RvcmFnZS1jYWNoZS5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7fSlcclxuZXhwb3J0IGNsYXNzIERlbG9uQ2FjaGVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IERlbG9uQ2FjaGVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIERlbG9uQ2FjaGVDb25maWcsXHJcbiAgICAgICAgQ2FjaGVTZXJ2aWNlLFxyXG4gICAgICAgIHsgcHJvdmlkZTogRENfU1RPUkVfU1RPUkFHRV9UT0tFTiwgdXNlQ2xhc3M6IExvY2FsU3RvcmFnZUNhY2hlU2VydmljZSB9LFxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQVFBLElBQWEsc0JBQXNCLEdBQUcsSUFBSSxjQUFjLENBQ3RELHdCQUF3QixDQUN6Qjs7Ozs7O0FDVkQsSUFBQTs7Ozs7OztvQkFNOEIsU0FBUzs7Ozs7OztzQkFPUixFQUFFOzs7O3NCQUliLEVBQUU7Ozs7d0JBSUEsY0FBYzs7MkJBckJwQztJQXNCQzs7Ozs7O0FDdEJEO0lBMEJFLHNCQUNVLFNBQ2dDLEtBQWtCLEVBQ2xEO1FBRkEsWUFBTyxHQUFQLE9BQU87UUFDeUIsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQUNsRCxTQUFJLEdBQUosSUFBSTtzQkFaaUMsSUFBSSxHQUFHLEVBQWtCOzRCQUlwRSxJQUFJLEdBQUcsRUFBOEM7b0JBQzdCLElBQUksR0FBRyxFQUFVO3lCQUN6QixJQUFJO1FBUXRCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztLQUMxQjs7Ozs7OztJQUVELCtCQUFROzs7Ozs7SUFBUixVQUFTLEdBQVEsRUFBRSxJQUFjLEVBQUUsWUFBa0I7UUFDbkQsSUFBSSxDQUFDLEdBQUc7WUFBRSxPQUFPLFlBQVksQ0FBQztRQUM5QixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFOztZQUNwQixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDbEQsT0FBTyxPQUFPLFFBQVEsS0FBSyxXQUFXLEdBQUcsWUFBWSxHQUFHLFFBQVEsQ0FBQztTQUNsRTtRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUEsRUFBRSxHQUFHLENBQUMsSUFBSSxZQUFZLENBQUM7S0FDekQ7Ozs7O0lBSU8sK0JBQVE7Ozs7Y0FBQyxHQUFXO1FBQzFCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1lBQUUsT0FBTztRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Ozs7OztJQUdWLGlDQUFVOzs7O2NBQUMsR0FBVztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1lBQUUsT0FBTztRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Ozs7O0lBR1YsK0JBQVE7Ozs7OztRQUNkLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEQsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNoQixtQkFBQyxHQUFHLENBQUMsQ0FBYSxHQUFFLE9BQU8sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFBLENBQUMsQ0FBQztTQUN4RDs7Ozs7SUFHSywrQkFBUTs7Ozs7UUFDZCxJQUFNLFFBQVEsR0FBYSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFBLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Ozs7O0lBRy9ELDhCQUFPOzs7SUFBUDtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztLQUNsQjs7Ozs7Ozs7Ozs7SUFpREQsMEJBQUc7Ozs7Ozs7SUFBSCxVQUNFLEdBQVcsRUFDWCxJQUEyQixFQUMzQixPQU9NO1FBVlIsaUJBMEJDO1FBdkJDLHdCQUFBLEVBQUEsWUFPTTs7UUFHTixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDVixJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDbEIsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN0RDtRQUNELElBQUksRUFBRSxJQUFJLFlBQVksVUFBVSxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFBLEVBQUUsQ0FBQyxDQUFDO1lBQzdDLE9BQU87U0FDUjtRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FDZCxHQUFHLENBQUMsVUFBQyxDQUFNO1lBQ1QsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBQSxFQUFFLENBQUMsR0FBQSxFQUFFLENBQUMsQ0FBQztTQUN4QyxDQUFDLENBQ0gsQ0FBQztLQUNIOzs7Ozs7O0lBRU8sMkJBQUk7Ozs7OztjQUFDLElBQWUsRUFBRSxHQUFXLEVBQUUsS0FBYTtRQUN0RCxJQUFJLElBQUksS0FBSyxHQUFHLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzdCO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwQjtRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDOzs7Ozs7O0lBa0M3QiwwQkFBRzs7Ozs7SUFBSCxVQUNFLEdBQVcsRUFDWCxPQUlNO1FBTlIsaUJBNEJDO1FBMUJDLHdCQUFBLEVBQUEsWUFJTTs7UUFFTixJQUFNLFNBQVMsR0FDYixPQUFPLENBQUMsSUFBSSxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUM7O1FBQzdELElBQU0sS0FBSyxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztjQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7Y0FDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFO1lBQ3hFLElBQUksU0FBUyxFQUFFO2dCQUNiLE9BQU8sSUFBSSxDQUFDLElBQUk7cUJBQ2IsR0FBRyxDQUFDLEdBQUcsQ0FBQztxQkFDUixJQUFJLENBQ0gsR0FBRyxDQUFDLFVBQUMsR0FBUTtvQkFDWCxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxvQkFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQWtCLEdBQUUsSUFBSSxDQUFDO2lCQUFBLENBQzFELEVBQ0QsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUMzQixDQUFDO2FBQ0w7WUFDRCxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsT0FBTyxTQUFTLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQzFDOzs7Ozs7O0lBS0QsOEJBQU87Ozs7O0lBQVAsVUFBUSxHQUFXO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztLQUN4Qzs7Ozs7Ozs7Ozs7SUFzQ0QsNkJBQU07Ozs7Ozs7SUFBTixVQUNFLEdBQVcsRUFDWCxJQUEyQixFQUMzQixPQU9NO1FBUE4sd0JBQUEsRUFBQSxZQU9NOztRQUVOLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO1lBQ2hCLElBQUksRUFBRSxJQUFJLFlBQVksVUFBVSxDQUFDLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksb0JBQU8sT0FBTyxFQUFDLENBQUM7Z0JBQ2xDLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFFRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxvQkFBRSxJQUF1QixxQkFBTyxPQUFPLEVBQUMsQ0FBQztTQUM3RDtRQUNELE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2hCOzs7Ozs7Ozs7SUFPRCwwQkFBRzs7Ozs7SUFBSCxVQUFJLEdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ25EOzs7Ozs7SUFNTyw4QkFBTzs7Ozs7Y0FBQyxHQUFXLEVBQUUsVUFBbUI7UUFDOUMsSUFBSSxVQUFVO1lBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDOUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4QixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7OztJQUl2Qiw2QkFBTTs7Ozs7SUFBTixVQUFPLEdBQVc7UUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDekI7Ozs7OztJQUdELDRCQUFLOzs7O0lBQUw7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxHQUFBLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEdBQUEsQ0FBQyxDQUFDO0tBQ3hFO0lBU0Qsc0JBQUksOEJBQUk7Ozs7Ozs7Ozs7O1FBQVIsVUFBUyxLQUFhO1lBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDMUI7OztPQUFBOzs7O0lBRU8sd0NBQWlCOzs7O1FBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzs7Ozs7SUFHakIsc0NBQWU7Ozs7O1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO1lBQzFCLEtBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN4QixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzs7Ozs7SUFHYix3Q0FBaUI7Ozs7OztRQUN2QixJQUFNLE9BQU8sR0FBYSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDLEVBQUUsR0FBRztZQUMvQixJQUFJLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJO2dCQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDcEUsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7WUFDakIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDOUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDMUIsQ0FBQyxDQUFDOzs7OztJQUdHLHdDQUFpQjs7OztRQUN2QixZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDOzs7Ozs7O0lBR3ZCLGdDQUFTOzs7OztjQUFDLEdBQVcsRUFBRSxJQUFxQjtRQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1lBQUUsT0FBTztRQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7SUFTdEUsNkJBQU07Ozs7Ozs7O0lBQU4sVUFBTyxHQUFXO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTs7WUFDL0IsSUFBTSxPQUFPLEdBQUcsSUFBSSxlQUFlLENBQW9CLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMxRSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDckM7UUFDRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ2xEOzs7Ozs7Ozs7SUFLRCxtQ0FBWTs7Ozs7SUFBWixVQUFhLEdBQVc7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztZQUFFLE9BQU87UUFDeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDL0I7Ozs7Ozs7SUFHRCxnQ0FBUzs7Ozs7SUFBVCxVQUFVLEdBQVc7UUFDbkIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNuQzs7Ozs7O0lBR0Qsa0NBQVc7Ozs7SUFBWDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFBLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQzNCOzs7OztJQUlELGtDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BCOztnQkF6WUYsVUFBVTs7OztnQkFGRixnQkFBZ0I7Z0RBZXBCLE1BQU0sU0FBQyxzQkFBc0I7Z0JBM0J6QixVQUFVOzt1QkFEbkI7Ozs7Ozs7QUNFQSxJQUFBOzs7Ozs7O0lBQ0Usc0NBQUc7Ozs7SUFBSCxVQUFJLEdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUM7S0FDaEU7Ozs7OztJQUVELHNDQUFHOzs7OztJQUFILFVBQUksR0FBVyxFQUFFLEtBQWE7UUFDNUIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2pELE9BQU8sSUFBSSxDQUFDO0tBQ2I7Ozs7O0lBRUQseUNBQU07Ozs7SUFBTixVQUFPLEdBQVc7UUFDaEIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUM5QjttQ0FkSDtJQWVDOzs7Ozs7QUNmRDs7Ozs7O0lBU1Msd0JBQU87OztJQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUyxFQUFFO2dCQUNULGdCQUFnQjtnQkFDaEIsWUFBWTtnQkFDWixFQUFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxRQUFRLEVBQUUsd0JBQXdCLEVBQUU7YUFDeEU7U0FDRixDQUFDO0tBQ0g7O2dCQVhGLFFBQVEsU0FBQyxFQUFFOzsyQkFQWjs7Ozs7Ozs7Ozs7Ozs7OyJ9