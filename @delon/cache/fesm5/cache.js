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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9jYWNoZS9zcmMvaW50ZXJmYWNlLnRzIiwibmc6Ly9AZGVsb24vY2FjaGUvc3JjL2NhY2hlLmNvbmZpZy50cyIsIm5nOi8vQGRlbG9uL2NhY2hlL3NyYy9jYWNoZS5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vY2FjaGUvc3JjL2xvY2FsLXN0b3JhZ2UtY2FjaGUuc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL2NhY2hlL3NyYy9jYWNoZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJQ2FjaGUge1xuICB2OiBhbnk7XG4gIC8qKiDDqMK/wofDpsKcwp/DpsKXwrbDqcKXwrTDpsKIwrPDr8K8woxgMGAgw6jCocKow6fCpMK6w6TCuMKNw6jCv8KHw6bCnMKfICovXG4gIGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IERDX1NUT1JFX1NUT1JBR0VfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48SUNhY2hlU3RvcmU+KFxuICAnRENfU1RPUkVfU1RPUkFHRV9UT0tFTicsXG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIElDYWNoZVN0b3JlIHtcbiAgZ2V0KGtleTogc3RyaW5nKTogSUNhY2hlO1xuXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IElDYWNoZSk6IGJvb2xlYW47XG5cbiAgcmVtb3ZlKGtleTogc3RyaW5nKTtcbn1cblxuZXhwb3J0IHR5cGUgQ2FjaGVOb3RpZnlUeXBlID0gJ3NldCcgfCAncmVtb3ZlJyB8ICdleHBpcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhY2hlTm90aWZ5UmVzdWx0IHtcbiAgdHlwZTogQ2FjaGVOb3RpZnlUeXBlO1xuICB2YWx1ZT86IGFueTtcbn1cbiIsImV4cG9ydCBjbGFzcyBEZWxvbkNhY2hlQ29uZmlnIHtcbiAgLyoqXG4gICAqIMOnwrzCk8Olwq3CmMOmwqjCocOlwrzCj8OvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBwcm9taXNlYFxuICAgKiAtIGBwcm9taXNlYCDDp8K6wqbDpcKuwprDpsKowqHDpcK8wo/Dr8K8wozDpcKFwoHDqMKuwrggYGtleWAgw6TCvcKcw6TCuMK6IGh0dHAgw6jCjsK3w6XCj8KWw6bClcKww6bCjcKuXG4gICAqIC0gYG5vbmVgIMOmwq3Co8OlwrjCuMOmwqjCocOlwrzCj1xuICAgKi9cbiAgbW9kZT86ICdwcm9taXNlJyB8ICdub25lJyA9ICdwcm9taXNlJztcbiAgLyoqXG4gICAqIMOpwofCjcOlwpHCvcOlwpDCjcOowr/ClMOlwpvCnsOlwo/CgsOmwpXCsMOvwrzCjMOkwr7Ci8OlwqbCgsOvwrzCmlxuICAgKiAtIGBudWxsYCDDqMK/wpTDpcKbwp7DpMK9wpPDpMK4wrrDpcKGwoXDpcKuwrlcbiAgICogLSBgbGlzdGAgw6jCv8KUw6XCm8Kew6TCvcKTw6XCusKUIGB7IGxpc3Q6IFtdIH1gXG4gICAqIC0gYHJlc3VsdC5saXN0YCDDqMK/wpTDpcKbwp7DpMK9wpPDpcK6wpQgYHsgcmVzdWx0OiB7IGxpc3Q6IFtdIH0gfWBcbiAgICovXG4gIHJlTmFtZT86IHN0cmluZyB8IHN0cmluZ1tdID0gJyc7XG4gIC8qKlxuICAgKiDDpsKMwoHDpMK5woXDpcKMwpbDpsKVwrDDpsKNwq7DqcKUwq7DpcKAwrzDpcKJwo3Dp8K8woBcbiAgICovXG4gIHByZWZpeD86IHN0cmluZyA9ICcnO1xuICAvKipcbiAgICogw6bCjMKBw6TCucKFw6XCjMKWw6bClcKww6bCjcKuw6XChcKDw6bClcKww6bCjcKuw6XCrcKYw6XCgsKow6nClMKuw6XCkMKNXG4gICAqL1xuICBtZXRhX2tleT86IHN0cmluZyA9ICdfX2NhY2hlX21ldGEnO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgYWRkU2Vjb25kcyBmcm9tICdkYXRlLWZucy9hZGRfc2Vjb25kcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtcbiAgRENfU1RPUkVfU1RPUkFHRV9UT0tFTixcbiAgSUNhY2hlU3RvcmUsXG4gIElDYWNoZSxcbiAgQ2FjaGVOb3RpZnlSZXN1bHQsXG4gIENhY2hlTm90aWZ5VHlwZSxcbn0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGVsb25DYWNoZUNvbmZpZyB9IGZyb20gJy4vY2FjaGUuY29uZmlnJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhY2hlU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgbWVtb3J5OiBNYXA8c3RyaW5nLCBJQ2FjaGU+ID0gbmV3IE1hcDxzdHJpbmcsIElDYWNoZT4oKTtcbiAgcHJpdmF0ZSByZWFkb25seSBub3RpZnlCdWZmZXI6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgQmVoYXZpb3JTdWJqZWN0PENhY2hlTm90aWZ5UmVzdWx0PlxuICA+ID0gbmV3IE1hcDxzdHJpbmcsIEJlaGF2aW9yU3ViamVjdDxDYWNoZU5vdGlmeVJlc3VsdD4+KCk7XG4gIHByaXZhdGUgbWV0YTogU2V0PHN0cmluZz4gPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgcHJpdmF0ZSBmcmVxX3RpY2sgPSAzMDAwO1xuICBwcml2YXRlIGZyZXFfdGltZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgb3B0aW9uczogRGVsb25DYWNoZUNvbmZpZyxcbiAgICBASW5qZWN0KERDX1NUT1JFX1NUT1JBR0VfVE9LRU4pIHByaXZhdGUgc3RvcmU6IElDYWNoZVN0b3JlLFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgKSB7XG4gICAgdGhpcy5sb2FkTWV0YSgpO1xuICAgIHRoaXMuc3RhcnRFeHBpcmVOb3RpZnkoKTtcbiAgfVxuXG4gIF9kZWVwR2V0KG9iajogYW55LCBwYXRoOiBzdHJpbmdbXSwgZGVmYXVsdFZhbHVlPzogYW55KSB7XG4gICAgaWYgKCFvYmopIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgaWYgKHBhdGgubGVuZ3RoIDw9IDEpIHtcbiAgICAgIGNvbnN0IGNoZWNrT2JqID0gcGF0aC5sZW5ndGggPyBvYmpbcGF0aFswXV0gOiBvYmo7XG4gICAgICByZXR1cm4gdHlwZW9mIGNoZWNrT2JqID09PSAndW5kZWZpbmVkJyA/IGRlZmF1bHRWYWx1ZSA6IGNoZWNrT2JqO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aC5yZWR1Y2UoKG8sIGspID0+IG9ba10sIG9iaikgfHwgZGVmYXVsdFZhbHVlO1xuICB9XG5cbiAgLy8gcmVnaW9uOiBtZXRhXG5cbiAgcHJpdmF0ZSBwdXNoTWV0YShrZXk6IHN0cmluZykge1xuICAgIGlmICh0aGlzLm1ldGEuaGFzKGtleSkpIHJldHVybjtcbiAgICB0aGlzLm1ldGEuYWRkKGtleSk7XG4gICAgdGhpcy5zYXZlTWV0YSgpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVNZXRhKGtleTogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLm1ldGEuaGFzKGtleSkpIHJldHVybjtcbiAgICB0aGlzLm1ldGEuZGVsZXRlKGtleSk7XG4gICAgdGhpcy5zYXZlTWV0YSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkTWV0YSgpIHtcbiAgICBjb25zdCByZXQgPSB0aGlzLnN0b3JlLmdldCh0aGlzLm9wdGlvbnMubWV0YV9rZXkpO1xuICAgIGlmIChyZXQgJiYgcmV0LnYpIHtcbiAgICAgIChyZXQudiBhcyBzdHJpbmdbXSkuZm9yRWFjaChrZXkgPT4gdGhpcy5tZXRhLmFkZChrZXkpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNhdmVNZXRhKCkge1xuICAgIGNvbnN0IG1ldGFEYXRhOiBzdHJpbmdbXSA9IFtdO1xuICAgIHRoaXMubWV0YS5mb3JFYWNoKGtleSA9PiBtZXRhRGF0YS5wdXNoKGtleSkpO1xuICAgIHRoaXMuc3RvcmUuc2V0KHRoaXMub3B0aW9ucy5tZXRhX2tleSwgeyB2OiBtZXRhRGF0YSwgZTogMCB9KTtcbiAgfVxuXG4gIGdldE1ldGEoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YTtcbiAgfVxuXG4gIC8vIGVuZHJlZ2lvblxuXG4gIC8vIHJlZ2lvbjogc2V0XG5cbiAgLyoqXG4gICAqIMOmwozCgcOkwrnChcOlwozClsOnwrzCk8Olwq3CmCBgT2JzZXJ2YWJsZWAgw6XCr8K5w6jCscKhw6/CvMKMw6TCvsKLw6XCpsKCw6/CvMKaXG4gICAqIC0gYHNldCgnZGF0YS8xJywgdGhpcy5odHRwLmdldCgnZGF0YS8xJykpLnN1YnNjcmliZSgpYFxuICAgKiAtIGBzZXQoJ2RhdGEvMScsIHRoaXMuaHR0cC5nZXQoJ2RhdGEvMScpLCB7IGV4cGlyZTogMTAgfSkuc3Vic2NyaWJlKClgXG4gICAqL1xuICBzZXQ8VD4oXG4gICAga2V5OiBzdHJpbmcsXG4gICAgZGF0YTogT2JzZXJ2YWJsZTxUPixcbiAgICBvcHRpb25zPzogeyB0eXBlPzogJ3MnOyBleHBpcmU/OiBudW1iZXIgfSxcbiAgKTogT2JzZXJ2YWJsZTxUPjtcbiAgLyoqXG4gICAqIMOmwozCgcOkwrnChcOlwozClsOnwrzCk8Olwq3CmCBgT2JzZXJ2YWJsZWAgw6XCr8K5w6jCscKhw6/CvMKMw6TCvsKLw6XCpsKCw6/CvMKaXG4gICAqIC0gYHNldCgnZGF0YS8xJywgdGhpcy5odHRwLmdldCgnZGF0YS8xJykpLnN1YnNjcmliZSgpYFxuICAgKiAtIGBzZXQoJ2RhdGEvMScsIHRoaXMuaHR0cC5nZXQoJ2RhdGEvMScpLCB7IGV4cGlyZTogMTAgfSkuc3Vic2NyaWJlKClgXG4gICAqL1xuICBzZXQoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgZGF0YTogT2JzZXJ2YWJsZTxhbnk+LFxuICAgIG9wdGlvbnM/OiB7IHR5cGU/OiAncyc7IGV4cGlyZT86IG51bWJlciB9LFxuICApOiBPYnNlcnZhYmxlPGFueT47XG4gIC8qKlxuICAgKiDDpsKMwoHDpMK5woXDpcKMwpbDp8K8wpPDpcKtwpjDpcKfwrrDp8KhwoDDpcKvwrnDqMKxwqHDr8K8wozDpMK+wovDpcKmwoLDr8K8wppcbiAgICogLSBgc2V0KCdkYXRhLzEnLCAxKWBcbiAgICogLSBgc2V0KCdkYXRhLzEnLCAxLCB7IGV4cGlyZTogMTAgfSlgXG4gICAqL1xuICBzZXQoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgZGF0YTogT2JqZWN0LFxuICAgIG9wdGlvbnM/OiB7IHR5cGU/OiAncyc7IGV4cGlyZT86IG51bWJlciB9LFxuICApOiB2b2lkO1xuICAvKipcbiAgICogw6bCjMKHw6XCrsKaw6fCvMKTw6XCrcKYw6fCscK7w6XCnsKLw6jCv8Kbw6jCocKMw6fCvMKTw6XCrcKYw6XCr8K5w6jCscKhw6/CvMKMw6TCvsKLw6XCpsKCw6XChsKFw6XCrcKYw6fCvMKTw6XCrcKYw6/CvMKaXG4gICAqIC0gYHNldCgnZGF0YS8xJywgMSwgeyB0eXBlOiAnbScgfSlgXG4gICAqIC0gYHNldCgnZGF0YS8xJywgMSwgeyB0eXBlOiAnbScsIGV4cGlyZTogMTAgfSlgXG4gICAqL1xuICBzZXQoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgZGF0YTogT2JqZWN0LFxuICAgIG9wdGlvbnM6IHsgdHlwZTogJ20nIHwgJ3MnOyBleHBpcmU/OiBudW1iZXIgfSxcbiAgKTogdm9pZDtcbiAgLyoqXG4gICAqIMOnwrzCk8Olwq3CmMOlwq/CucOowrHCoVxuICAgKi9cbiAgc2V0KFxuICAgIGtleTogc3RyaW5nLFxuICAgIGRhdGE6IGFueSB8IE9ic2VydmFibGU8YW55PixcbiAgICBvcHRpb25zOiB7XG4gICAgICAvKiogw6XCrcKYw6XCgsKow6fCscK7w6XCnsKLw6/CvMKMJ20nIMOowqHCqMOnwqTCusOlwobChcOlwq3CmMOvwrzCjCdzJyDDqMKhwqjDp8KkwrrDpsKMwoHDpMK5woUgKi9cbiAgICAgIHR5cGU/OiAnbScgfCAncyc7XG4gICAgICAvKipcbiAgICAgICAqIMOowr/Ch8OmwpzCn8OmwpfCtsOpwpfCtMOvwrzCjMOlwo3ClcOkwr3CjSBgw6fCp8KSYFxuICAgICAgICovXG4gICAgICBleHBpcmU/OiBudW1iZXI7XG4gICAgfSA9IHt9LFxuICApOiBhbnkge1xuICAgIC8vIGV4cGlyZVxuICAgIGxldCBlID0gMDtcbiAgICBpZiAob3B0aW9ucy5leHBpcmUpIHtcbiAgICAgIGUgPSBhZGRTZWNvbmRzKG5ldyBEYXRlKCksIG9wdGlvbnMuZXhwaXJlKS52YWx1ZU9mKCk7XG4gICAgfVxuICAgIGlmICghKGRhdGEgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSkge1xuICAgICAgdGhpcy5zYXZlKG9wdGlvbnMudHlwZSwga2V5LCB7IHY6IGRhdGEsIGUgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBkYXRhLnBpcGUoXG4gICAgICB0YXAoKHY6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLnNhdmUob3B0aW9ucy50eXBlLCBrZXksIHsgdiwgZSB9KTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHNhdmUodHlwZTogJ20nIHwgJ3MnLCBrZXk6IHN0cmluZywgdmFsdWU6IElDYWNoZSkge1xuICAgIGlmICh0eXBlID09PSAnbScpIHtcbiAgICAgIHRoaXMubWVtb3J5LnNldChrZXksIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9yZS5zZXQodGhpcy5vcHRpb25zLnByZWZpeCArIGtleSwgdmFsdWUpO1xuICAgICAgdGhpcy5wdXNoTWV0YShrZXkpO1xuICAgIH1cbiAgICB0aGlzLnJ1bk5vdGlmeShrZXksICdzZXQnKTtcbiAgfVxuXG4gIC8vIGVuZHJlZ2lvblxuXG4gIC8vIHJlZ2lvbjogZ2V0XG5cbiAgLyoqIMOowo7Ct8Olwo/ClsOnwrzCk8Olwq3CmMOmwpXCsMOmwo3CrsOvwrzCjMOowovCpSBga2V5YCDDpMK4wo3DpcKtwpjDpcKcwqjDpcKIwpkgYGtleWAgw6TCvcKcw6TCuMK6SFRUUMOowq/Ct8OmwrHCgsOnwrzCk8Olwq3CmMOlwpDCjsOowr/ClMOlwpvCniAqL1xuICBnZXQ8VD4oXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG1vZGU6ICdwcm9taXNlJztcbiAgICAgIHR5cGU/OiAnbScgfCAncyc7XG4gICAgICBleHBpcmU/OiBudW1iZXI7XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxUPjtcbiAgLyoqIMOowo7Ct8Olwo/ClsOnwrzCk8Olwq3CmMOmwpXCsMOmwo3CrsOvwrzCjMOowovCpSBga2V5YCDDpMK4wo3DpcKtwpjDpcKcwqjDpcKIwpkgYGtleWAgw6TCvcKcw6TCuMK6SFRUUMOowq/Ct8OmwrHCgsOnwrzCk8Olwq3CmMOlwpDCjsOowr/ClMOlwpvCniAqL1xuICBnZXQoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG1vZGU6ICdwcm9taXNlJztcbiAgICAgIHR5cGU/OiAnbScgfCAncyc7XG4gICAgICBleHBpcmU/OiBudW1iZXI7XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xuICAvKiogw6jCjsK3w6XCj8KWw6fCvMKTw6XCrcKYw6bClcKww6bCjcKuw6/CvMKMw6jCi8KlIGBrZXlgIMOkwrjCjcOlwq3CmMOlwpzCqMOmwojClsOlwrfCssOowr/Ch8OmwpzCn8OlwojCmcOowr/ClMOlwpvCniBudWxsICovXG4gIGdldChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBtb2RlOiAnbm9uZSc7XG4gICAgICB0eXBlPzogJ20nIHwgJ3MnO1xuICAgICAgZXhwaXJlPzogbnVtYmVyO1xuICAgIH0sXG4gICk6IGFueTtcbiAgZ2V0KFxuICAgIGtleTogc3RyaW5nLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG1vZGU/OiAncHJvbWlzZScgfCAnbm9uZSc7XG4gICAgICB0eXBlPzogJ20nIHwgJ3MnO1xuICAgICAgZXhwaXJlPzogbnVtYmVyO1xuICAgIH0gPSB7fSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHwgYW55IHtcbiAgICBjb25zdCBpc1Byb21pc2UgPVxuICAgICAgb3B0aW9ucy5tb2RlICE9PSAnbm9uZScgJiYgdGhpcy5vcHRpb25zLm1vZGUgPT09ICdwcm9taXNlJztcbiAgICBjb25zdCB2YWx1ZTogSUNhY2hlID0gdGhpcy5tZW1vcnkuaGFzKGtleSlcbiAgICAgID8gdGhpcy5tZW1vcnkuZ2V0KGtleSlcbiAgICAgIDogdGhpcy5zdG9yZS5nZXQodGhpcy5vcHRpb25zLnByZWZpeCArIGtleSk7XG4gICAgaWYgKCF2YWx1ZSB8fCAodmFsdWUuZSAmJiB2YWx1ZS5lID4gMCAmJiB2YWx1ZS5lIDwgbmV3IERhdGUoKS52YWx1ZU9mKCkpKSB7XG4gICAgICBpZiAoaXNQcm9taXNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgICAgICAuZ2V0KGtleSlcbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgIG1hcCgocmV0OiBhbnkpID0+XG4gICAgICAgICAgICAgIHRoaXMuX2RlZXBHZXQocmV0LCB0aGlzLm9wdGlvbnMucmVOYW1lIGFzIHN0cmluZ1tdLCBudWxsKSxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICB0YXAodiA9PiB0aGlzLnNldChrZXksIHYpKSxcbiAgICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzUHJvbWlzZSA/IG9mKHZhbHVlLnYpIDogdmFsdWUudjtcbiAgfVxuXG4gIC8qKiDDqMKOwrfDpcKPwpbDp8K8wpPDpcKtwpjDpsKVwrDDpsKNwq7Dr8K8wozDqMKLwqUgYGtleWAgw6TCuMKNw6XCrcKYw6XCnMKow6bCiMKWw6XCt8Kyw6jCv8KHw6bCnMKfw6XCiMKZw6jCv8KUw6XCm8KeIG51bGwgKi9cbiAgZ2V0Tm9uZTxUPihrZXk6IHN0cmluZyk6IFQ7XG4gIC8qKiDDqMKOwrfDpcKPwpbDp8K8wpPDpcKtwpjDpsKVwrDDpsKNwq7Dr8K8wozDqMKLwqUgYGtleWAgw6TCuMKNw6XCrcKYw6XCnMKow6bCiMKWw6XCt8Kyw6jCv8KHw6bCnMKfw6XCiMKZw6jCv8KUw6XCm8KeIG51bGwgKi9cbiAgZ2V0Tm9uZShrZXk6IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGtleSwgeyBtb2RlOiAnbm9uZScgfSk7XG4gIH1cblxuICAvKipcbiAgICogw6jCjsK3w6XCj8KWw6fCvMKTw6XCrcKYw6/CvMKMw6jCi8Klw6TCuMKNw6XCrcKYw6XCnMKow6XCiMKZw6jCrsK+w6fCvcKuw6bCjMKBw6TCucKFw6XCjMKWw6fCvMKTw6XCrcKYIGBPYnNlcnZhYmxlYCDDpcKvwrnDqMKxwqFcbiAgICovXG4gIHRyeUdldDxUPihcbiAgICBrZXk6IHN0cmluZyxcbiAgICBkYXRhOiBPYnNlcnZhYmxlPFQ+LFxuICAgIG9wdGlvbnM/OiB7IHR5cGU/OiAncyc7IGV4cGlyZT86IG51bWJlciB9LFxuICApOiBPYnNlcnZhYmxlPFQ+O1xuICAvKipcbiAgICogw6jCjsK3w6XCj8KWw6fCvMKTw6XCrcKYw6/CvMKMw6jCi8Klw6TCuMKNw6XCrcKYw6XCnMKow6XCiMKZw6jCrsK+w6fCvcKuw6bCjMKBw6TCucKFw6XCjMKWw6fCvMKTw6XCrcKYIGBPYnNlcnZhYmxlYCDDpcKvwrnDqMKxwqFcbiAgICovXG4gIHRyeUdldChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBkYXRhOiBPYnNlcnZhYmxlPGFueT4sXG4gICAgb3B0aW9ucz86IHsgdHlwZT86ICdzJzsgZXhwaXJlPzogbnVtYmVyIH0sXG4gICk6IE9ic2VydmFibGU8YW55PjtcbiAgLyoqXG4gICAqIMOowo7Ct8Olwo/ClsOnwrzCk8Olwq3CmMOvwrzCjMOowovCpcOkwrjCjcOlwq3CmMOlwpzCqMOlwojCmcOowq7CvsOnwr3CrsOmwozCgcOkwrnChcOlwozClsOnwrzCk8Olwq3CmMOlwp/CusOnwqHCgMOlwq/CucOowrHCoVxuICAgKi9cbiAgdHJ5R2V0KFxuICAgIGtleTogc3RyaW5nLFxuICAgIGRhdGE6IE9iamVjdCxcbiAgICBvcHRpb25zPzogeyB0eXBlPzogJ3MnOyBleHBpcmU/OiBudW1iZXIgfSxcbiAgKTogYW55O1xuICAvKipcbiAgICogw6jCjsK3w6XCj8KWw6fCvMKTw6XCrcKYw6/CvMKMw6jCi8Klw6TCuMKNw6XCrcKYw6XCnMKow6XCiMKZw6jCrsK+w6fCvcKuw6bCjMKHw6XCrsKaw6fCvMKTw6XCrcKYw6fCscK7w6XCnsKLw6jCv8Kbw6jCocKMw6fCvMKTw6XCrcKYw6XCr8K5w6jCscKhXG4gICAqL1xuICB0cnlHZXQoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgZGF0YTogT2JqZWN0LFxuICAgIG9wdGlvbnM6IHsgdHlwZTogJ20nIHwgJ3MnOyBleHBpcmU/OiBudW1iZXIgfSxcbiAgKTogYW55O1xuXG4gIC8qKlxuICAgKiDDqMKOwrfDpcKPwpbDp8K8wpPDpcKtwpjDr8K8wozDqMKLwqXDpMK4wo3DpcKtwpjDpcKcwqjDpcKIwpnDqMKuwr7Dp8K9wq7Dp8K8wpPDpcKtwpjDpcKvwrnDqMKxwqFcbiAgICovXG4gIHRyeUdldChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBkYXRhOiBhbnkgfCBPYnNlcnZhYmxlPGFueT4sXG4gICAgb3B0aW9uczoge1xuICAgICAgLyoqIMOlwq3CmMOlwoLCqMOnwrHCu8Olwp7Ci8OvwrzCjCdtJyDDqMKhwqjDp8KkwrrDpcKGwoXDpcKtwpjDr8K8wowncycgw6jCocKow6fCpMK6w6bCjMKBw6TCucKFICovXG4gICAgICB0eXBlPzogJ20nIHwgJ3MnO1xuICAgICAgLyoqXG4gICAgICAgKiDDqMK/wofDpsKcwp/DpsKXwrbDqcKXwrTDr8K8wozDpcKNwpXDpMK9wo0gYMOnwqfCkmBcbiAgICAgICAqL1xuICAgICAgZXhwaXJlPzogbnVtYmVyO1xuICAgIH0gPSB7fSxcbiAgKTogYW55IHtcbiAgICBjb25zdCByZXQgPSB0aGlzLmdldE5vbmUoa2V5KTtcbiAgICBpZiAocmV0ID09PSBudWxsKSB7XG4gICAgICBpZiAoIShkYXRhIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkpIHtcbiAgICAgICAgdGhpcy5zZXQoa2V5LCBkYXRhLCA8YW55Pm9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuc2V0KGtleSwgZGF0YSBhcyBPYnNlcnZhYmxlPGFueT4sIDxhbnk+b3B0aW9ucyk7XG4gICAgfVxuICAgIHJldHVybiBvZihyZXQpO1xuICB9XG5cbiAgLy8gZW5kcmVnaW9uXG5cbiAgLy8gcmVnaW9uOiBoYXNcblxuICAvKiogw6bCmMKvw6XCkMKmw6fCvMKTw6XCrcKYIGBrZXlgICovXG4gIGhhcyhrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1lbW9yeS5oYXMoa2V5KSB8fCB0aGlzLm1ldGEuaGFzKGtleSk7XG4gIH1cblxuICAvLyBlbmRyZWdpb25cblxuICAvLyByZWdpb246IHJlbW92ZVxuXG4gIHByaXZhdGUgX3JlbW92ZShrZXk6IHN0cmluZywgbmVlZE5vdGlmeTogYm9vbGVhbikge1xuICAgIGlmIChuZWVkTm90aWZ5KSB0aGlzLnJ1bk5vdGlmeShrZXksICdyZW1vdmUnKTtcbiAgICBpZiAodGhpcy5tZW1vcnkuaGFzKGtleSkpIHtcbiAgICAgIHRoaXMubWVtb3J5LmRlbGV0ZShrZXkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnN0b3JlLnJlbW92ZSh0aGlzLm9wdGlvbnMucHJlZml4ICsga2V5KTtcbiAgICB0aGlzLnJlbW92ZU1ldGEoa2V5KTtcbiAgfVxuXG4gIC8qKiDDp8KnwrvDqcKZwqTDp8K8wpPDpcKtwpggKi9cbiAgcmVtb3ZlKGtleTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVtb3ZlKGtleSwgdHJ1ZSk7XG4gIH1cblxuICAvKiogw6bCuMKFw6fCqcK6w6bCicKAw6bCnMKJw6fCvMKTw6XCrcKYICovXG4gIGNsZWFyKCkge1xuICAgIHRoaXMubm90aWZ5QnVmZmVyLmZvckVhY2goKHYsIGspID0+IHRoaXMucnVuTm90aWZ5KGssICdyZW1vdmUnKSk7XG4gICAgdGhpcy5tZW1vcnkuY2xlYXIoKTtcbiAgICB0aGlzLm1ldGEuZm9yRWFjaChrZXkgPT4gdGhpcy5zdG9yZS5yZW1vdmUodGhpcy5vcHRpb25zLnByZWZpeCArIGtleSkpO1xuICB9XG5cbiAgLy8gZW5kcmVnaW9uXG5cbiAgLy8gcmVnaW9uOiBub3RpZnlcblxuICAvKipcbiAgICogw6jCrsK+w6fCvcKuw6fCm8KRw6XCkMKsw6nCosKRw6fCjsKHw6/CvMKMw6XCjcKVw6TCvcKNw6/CvMKaw6bCr8Krw6fCp8KSw6TCuMKUw6bCnMKAw6TCvcKOIGAyMG1zYMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAzMDAwbXNgXG4gICAqL1xuICBzZXQgZnJlcSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5mcmVxX3RpY2sgPSBNYXRoLm1heCgyMCwgdmFsdWUpO1xuICAgIHRoaXMuYWJvcnRFeHBpcmVOb3RpZnkoKTtcbiAgICB0aGlzLnN0YXJ0RXhwaXJlTm90aWZ5KCk7XG4gIH1cblxuICBwcml2YXRlIHN0YXJ0RXhwaXJlTm90aWZ5KCkge1xuICAgIHRoaXMuY2hlY2tFeHBpcmVOb3RpZnkoKTtcbiAgICB0aGlzLnJ1bkV4cGlyZU5vdGlmeSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBydW5FeHBpcmVOb3RpZnkoKSB7XG4gICAgdGhpcy5mcmVxX3RpbWUgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY2hlY2tFeHBpcmVOb3RpZnkoKTtcbiAgICAgIHRoaXMucnVuRXhwaXJlTm90aWZ5KCk7XG4gICAgfSwgdGhpcy5mcmVxX3RpY2spO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0V4cGlyZU5vdGlmeSgpIHtcbiAgICBjb25zdCByZW1vdmVkOiBzdHJpbmdbXSA9IFtdO1xuICAgIHRoaXMubm90aWZ5QnVmZmVyLmZvckVhY2goKHYsIGtleSkgPT4ge1xuICAgICAgaWYgKHRoaXMuaGFzKGtleSkgJiYgdGhpcy5nZXROb25lKGtleSkgPT09IG51bGwpIHJlbW92ZWQucHVzaChrZXkpO1xuICAgIH0pO1xuICAgIHJlbW92ZWQuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgdGhpcy5ydW5Ob3RpZnkoa2V5LCAnZXhwaXJlJyk7XG4gICAgICB0aGlzLl9yZW1vdmUoa2V5LCBmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFib3J0RXhwaXJlTm90aWZ5KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmZyZXFfdGltZSk7XG4gIH1cblxuICBwcml2YXRlIHJ1bk5vdGlmeShrZXk6IHN0cmluZywgdHlwZTogQ2FjaGVOb3RpZnlUeXBlKSB7XG4gICAgaWYgKCF0aGlzLm5vdGlmeUJ1ZmZlci5oYXMoa2V5KSkgcmV0dXJuO1xuICAgIHRoaXMubm90aWZ5QnVmZmVyLmdldChrZXkpLm5leHQoeyB0eXBlLCB2YWx1ZTogdGhpcy5nZXROb25lKGtleSkgfSk7XG4gIH1cblxuICAvKipcbiAgICogYGtleWAgw6fCm8KRw6XCkMKsw6/CvMKMw6XCvcKTIGBrZXlgIMOlwo/CmMOmwpvCtMOjwoDCgcOowr/Ch8OmwpzCn8OjwoDCgcOnwqfCu8OpwpnCpMOmwpfCtsOpwoDCmsOnwp/CpcOvwrzCjMOmwrPCqMOmwoTCj8OkwrvCpcOkwrjCi8OowovCpcOlwrnCssOnwrvChsOoworCgsOvwrzCmlxuICAgKlxuICAgKiAtIMOowrDCg8OnwpTCqMOlwpDCjsOpwpnCpMOlwobCjcOmwqzCocOowrDCg8OnwpTCqCBgY2FuY2VsTm90aWZ5YCDDpcKQwqbDpcKIwpnDpsKwwrjDqMK/wpzDpMK4wo3DqMK/wofDpsKcwp9cbiAgICogLSDDp8KbwpHDpcKQwqzDpcKZwqjDpsKvwo8gYGZyZXFgICjDqcK7wpjDqMKuwqTDr8K8wpozw6fCp8KSKSDDpsKJwqfDqMKhwozDpMK4woDDpsKswqHDqMK/wofDpsKcwp/DpsKjwoDDpsKfwqVcbiAgICovXG4gIG5vdGlmeShrZXk6IHN0cmluZyk6IE9ic2VydmFibGU8Q2FjaGVOb3RpZnlSZXN1bHQ+IHtcbiAgICBpZiAoIXRoaXMubm90aWZ5QnVmZmVyLmhhcyhrZXkpKSB7XG4gICAgICBjb25zdCBjaGFuZ2UkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxDYWNoZU5vdGlmeVJlc3VsdD4odGhpcy5nZXROb25lKGtleSkpO1xuICAgICAgdGhpcy5ub3RpZnlCdWZmZXIuc2V0KGtleSwgY2hhbmdlJCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm5vdGlmeUJ1ZmZlci5nZXQoa2V5KS5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpcKPwpbDpsK2woggYGtleWAgw6fCm8KRw6XCkMKsXG4gICAqL1xuICBjYW5jZWxOb3RpZnkoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubm90aWZ5QnVmZmVyLmhhcyhrZXkpKSByZXR1cm47XG4gICAgdGhpcy5ub3RpZnlCdWZmZXIuZ2V0KGtleSkudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLm5vdGlmeUJ1ZmZlci5kZWxldGUoa2V5KTtcbiAgfVxuXG4gIC8qKiBga2V5YCDDpsKYwq/DpcKQwqbDpcK3wrLDp8K7wo/Dp8KbwpHDpcKQwqwgKi9cbiAgaGFzTm90aWZ5KGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubm90aWZ5QnVmZmVyLmhhcyhrZXkpO1xuICB9XG5cbiAgLyoqIMOmwrjChcOnwqnCusOmwonCgMOmwpzCiSBga2V5YCDDp8KawoTDp8KbwpHDpcKQwqwgKi9cbiAgY2xlYXJOb3RpZnkoKTogdm9pZCB7XG4gICAgdGhpcy5ub3RpZnlCdWZmZXIuZm9yRWFjaCh2ID0+IHYudW5zdWJzY3JpYmUoKSk7XG4gICAgdGhpcy5ub3RpZnlCdWZmZXIuY2xlYXIoKTtcbiAgfVxuXG4gIC8vIGVuZHJlZ2lvblxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMubWVtb3J5LmNsZWFyKCk7XG4gICAgdGhpcy5hYm9ydEV4cGlyZU5vdGlmeSgpO1xuICAgIHRoaXMuY2xlYXJOb3RpZnkoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSUNhY2hlU3RvcmUsIElDYWNoZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZUNhY2hlU2VydmljZSBpbXBsZW1lbnRzIElDYWNoZVN0b3JlIHtcbiAgZ2V0KGtleTogc3RyaW5nKTogSUNhY2hlIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpIHx8ICdudWxsJykgfHwgbnVsbDtcbiAgfVxuXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IElDYWNoZSk6IGJvb2xlYW4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJlbW92ZShrZXk6IHN0cmluZykge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERDX1NUT1JFX1NUT1JBR0VfVE9LRU4gfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBEZWxvbkNhY2hlQ29uZmlnIH0gZnJvbSAnLi9jYWNoZS5jb25maWcnO1xuaW1wb3J0IHsgQ2FjaGVTZXJ2aWNlIH0gZnJvbSAnLi9jYWNoZS5zZXJ2aWNlJztcbmltcG9ydCB7IExvY2FsU3RvcmFnZUNhY2hlU2VydmljZSB9IGZyb20gJy4vbG9jYWwtc3RvcmFnZS1jYWNoZS5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHt9KVxuZXhwb3J0IGNsYXNzIERlbG9uQ2FjaGVNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERlbG9uQ2FjaGVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgRGVsb25DYWNoZUNvbmZpZyxcbiAgICAgICAgQ2FjaGVTZXJ2aWNlLFxuICAgICAgICB7IHByb3ZpZGU6IERDX1NUT1JFX1NUT1JBR0VfVE9LRU4sIHVzZUNsYXNzOiBMb2NhbFN0b3JhZ2VDYWNoZVNlcnZpY2UgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQVFBLElBQWEsc0JBQXNCLEdBQUcsSUFBSSxjQUFjLENBQ3RELHdCQUF3QixDQUN6Qjs7Ozs7O0FDVkQsSUFBQTs7Ozs7OztvQkFNOEIsU0FBUzs7Ozs7OztzQkFPUixFQUFFOzs7O3NCQUliLEVBQUU7Ozs7d0JBSUEsY0FBYzs7MkJBckJwQztJQXNCQzs7Ozs7O0FDdEJEO0lBMEJFLHNCQUNVLFNBQ2dDLEtBQWtCLEVBQ2xEO1FBRkEsWUFBTyxHQUFQLE9BQU87UUFDeUIsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQUNsRCxTQUFJLEdBQUosSUFBSTtzQkFaaUMsSUFBSSxHQUFHLEVBQWtCOzRCQUlwRSxJQUFJLEdBQUcsRUFBOEM7b0JBQzdCLElBQUksR0FBRyxFQUFVO3lCQUN6QixJQUFJO1FBUXRCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztLQUMxQjs7Ozs7OztJQUVELCtCQUFROzs7Ozs7SUFBUixVQUFTLEdBQVEsRUFBRSxJQUFjLEVBQUUsWUFBa0I7UUFDbkQsSUFBSSxDQUFDLEdBQUc7WUFBRSxPQUFPLFlBQVksQ0FBQztRQUM5QixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFOztZQUNwQixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDbEQsT0FBTyxPQUFPLFFBQVEsS0FBSyxXQUFXLEdBQUcsWUFBWSxHQUFH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