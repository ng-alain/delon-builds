/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import addSeconds from 'date-fns/add_seconds';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { DC_STORE_STORAGE_TOKEN, } from './interface';
import { DelonCacheConfig } from './cache.config';
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
    // #region meta
    // #region meta
    /**
     * @param {?} key
     * @return {?}
     */
    CacheService.prototype.pushMeta = 
    // #region meta
    /**
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
            ((/** @type {?} */ (ret.v))).forEach(function (key) { return _this.meta.add(key); });
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
        // expire
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
                    return _this._deepGet(ret, (/** @type {?} */ (_this.options.reName)), null);
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
                this.set(key, data, (/** @type {?} */ (options)));
                return data;
            }
            return this.set(key, (/** @type {?} */ (data)), (/** @type {?} */ (options)));
        }
        return of(ret);
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
     * @param {?} key
     * @param {?} needNotify
     * @return {?}
     */
    CacheService.prototype._remove = 
    // #endregion
    // #region remove
    /**
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
        set: 
        // #endregion
        // #region notify
        /**
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
export { CacheService };
if (false) {
    /** @type {?} */
    CacheService.prototype.memory;
    /** @type {?} */
    CacheService.prototype.notifyBuffer;
    /** @type {?} */
    CacheService.prototype.meta;
    /** @type {?} */
    CacheService.prototype.freq_tick;
    /** @type {?} */
    CacheService.prototype.freq_time;
    /** @type {?} */
    CacheService.prototype.options;
    /** @type {?} */
    CacheService.prototype.store;
    /** @type {?} */
    CacheService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jYWNoZS8iLCJzb3VyY2VzIjpbInNyYy9jYWNoZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxVQUFVLE1BQU0sc0JBQXNCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUMsT0FBTyxFQUNMLHNCQUFzQixHQUt2QixNQUFNLGFBQWEsQ0FBQztBQUNyQixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRDtJQVdFLHNCQUNVLE9BQXlCLEVBQ08sS0FBa0IsRUFDbEQsSUFBZ0I7UUFGaEIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFDTyxVQUFLLEdBQUwsS0FBSyxDQUFhO1FBQ2xELFNBQUksR0FBSixJQUFJLENBQVk7UUFaVCxXQUFNLEdBQXdCLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQ3hELGlCQUFZLEdBR3pCLElBQUksR0FBRyxFQUE4QyxDQUFDO1FBQ2xELFNBQUksR0FBZ0IsSUFBSSxHQUFHLEVBQVUsQ0FBQztRQUN0QyxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBUXZCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7Ozs7O0lBRUQsK0JBQVE7Ozs7OztJQUFSLFVBQVMsR0FBUSxFQUFFLElBQWMsRUFBRSxZQUFrQjtRQUNuRCxJQUFJLENBQUMsR0FBRztZQUFFLE9BQU8sWUFBWSxDQUFD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SSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7O2dCQXpZRixVQUFVOzs7O2dCQUZGLGdCQUFnQjtnREFlcEIsTUFBTSxTQUFDLHNCQUFzQjtnQkEzQnpCLFVBQVU7O0lBd1puQixtQkFBQztDQUFBLEFBMVlELElBMFlDO1NBellZLFlBQVk7OztJQUN2Qiw4QkFBeUU7O0lBQ3pFLG9DQUcwRDs7SUFDMUQsNEJBQThDOztJQUM5QyxpQ0FBeUI7O0lBQ3pCLGlDQUF1Qjs7SUFHckIsK0JBQWlDOztJQUNqQyw2QkFBMEQ7O0lBQzFELDRCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IGFkZFNlY29uZHMgZnJvbSAnZGF0ZS1mbnMvYWRkX3NlY29uZHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gIERDX1NUT1JFX1NUT1JBR0VfVE9LRU4sXG4gIElDYWNoZVN0b3JlLFxuICBJQ2FjaGUsXG4gIENhY2hlTm90aWZ5UmVzdWx0LFxuICBDYWNoZU5vdGlmeVR5cGUsXG59IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IERlbG9uQ2FjaGVDb25maWcgfSBmcm9tICcuL2NhY2hlLmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYWNoZVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHJlYWRvbmx5IG1lbW9yeTogTWFwPHN0cmluZywgSUNhY2hlPiA9IG5ldyBNYXA8c3RyaW5nLCBJQ2FjaGU+KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgbm90aWZ5QnVmZmVyOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEJlaGF2aW9yU3ViamVjdDxDYWNoZU5vdGlmeVJlc3VsdD5cbiAgPiA9IG5ldyBNYXA8c3RyaW5nLCBCZWhhdmlvclN1YmplY3Q8Q2FjaGVOb3RpZnlSZXN1bHQ+PigpO1xuICBwcml2YXRlIG1ldGE6IFNldDxzdHJpbmc+ID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIHByaXZhdGUgZnJlcV90aWNrID0gMzAwMDtcbiAgcHJpdmF0ZSBmcmVxX3RpbWU6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG9wdGlvbnM6IERlbG9uQ2FjaGVDb25maWcsXG4gICAgQEluamVjdChEQ19TVE9SRV9TVE9SQUdFX1RPS0VOKSBwcml2YXRlIHN0b3JlOiBJQ2FjaGVTdG9yZSxcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICkge1xuICAgIHRoaXMubG9hZE1ldGEoKTtcbiAgICB0aGlzLnN0YXJ0RXhwaXJlTm90aWZ5KCk7XG4gIH1cblxuICBfZGVlcEdldChvYmo6IGFueSwgcGF0aDogc3RyaW5nW10sIGRlZmF1bHRWYWx1ZT86IGFueSkge1xuICAgIGlmICghb2JqKSByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIGlmIChwYXRoLmxlbmd0aCA8PSAxKSB7XG4gICAgICBjb25zdCBjaGVja09iaiA9IHBhdGgubGVuZ3RoID8gb2JqW3BhdGhbMF1dIDogb2JqO1xuICAgICAgcmV0dXJuIHR5cGVvZiBjaGVja09iaiA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0VmFsdWUgOiBjaGVja09iajtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGgucmVkdWNlKChvLCBrKSA9PiBvW2tdLCBvYmopIHx8IGRlZmF1bHRWYWx1ZTtcbiAgfVxuXG4gIC8vICNyZWdpb24gbWV0YVxuXG4gIHByaXZhdGUgcHVzaE1ldGEoa2V5OiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5tZXRhLmhhcyhrZXkpKSByZXR1cm47XG4gICAgdGhpcy5tZXRhLmFkZChrZXkpO1xuICAgIHRoaXMuc2F2ZU1ldGEoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlTWV0YShrZXk6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5tZXRhLmhhcyhrZXkpKSByZXR1cm47XG4gICAgdGhpcy5tZXRhLmRlbGV0ZShrZXkpO1xuICAgIHRoaXMuc2F2ZU1ldGEoKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZE1ldGEoKSB7XG4gICAgY29uc3QgcmV0ID0gdGhpcy5zdG9yZS5nZXQodGhpcy5vcHRpb25zLm1ldGFfa2V5KTtcbiAgICBpZiAocmV0ICYmIHJldC52KSB7XG4gICAgICAocmV0LnYgYXMgc3RyaW5nW10pLmZvckVhY2goa2V5ID0+IHRoaXMubWV0YS5hZGQoa2V5KSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzYXZlTWV0YSgpIHtcbiAgICBjb25zdCBtZXRhRGF0YTogc3RyaW5nW10gPSBbXTtcbiAgICB0aGlzLm1ldGEuZm9yRWFjaChrZXkgPT4gbWV0YURhdGEucHVzaChrZXkpKTtcbiAgICB0aGlzLnN0b3JlLnNldCh0aGlzLm9wdGlvbnMubWV0YV9rZXksIHsgdjogbWV0YURhdGEsIGU6IDAgfSk7XG4gIH1cblxuICBnZXRNZXRhKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGE7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBzZXRcblxuICAvKipcbiAgICog5oyB5LmF5YyW57yT5a2YIGBPYnNlcnZhYmxlYCDlr7nosaHvvIzkvovlpoLvvJpcbiAgICogLSBgc2V0KCdkYXRhLzEnLCB0aGlzLmh0dHAuZ2V0KCdkYXRhLzEnKSkuc3Vic2NyaWJlKClgXG4gICAqIC0gYHNldCgnZGF0YS8xJywgdGhpcy5odHRwLmdldCgnZGF0YS8xJyksIHsgZXhwaXJlOiAxMCB9KS5zdWJzY3JpYmUoKWBcbiAgICovXG4gIHNldDxUPihcbiAgICBrZXk6IHN0cmluZyxcbiAgICBkYXRhOiBPYnNlcnZhYmxlPFQ+LFxuICAgIG9wdGlvbnM/OiB7IHR5cGU/OiAncyc7IGV4cGlyZT86IG51bWJlciB9LFxuICApOiBPYnNlcnZhYmxlPFQ+O1xuICAvKipcbiAgICog5oyB5LmF5YyW57yT5a2YIGBPYnNlcnZhYmxlYCDlr7nosaHvvIzkvovlpoLvvJpcbiAgICogLSBgc2V0KCdkYXRhLzEnLCB0aGlzLmh0dHAuZ2V0KCdkYXRhLzEnKSkuc3Vic2NyaWJlKClgXG4gICAqIC0gYHNldCgnZGF0YS8xJywgdGhpcy5odHRwLmdldCgnZGF0YS8xJyksIHsgZXhwaXJlOiAxMCB9KS5zdWJzY3JpYmUoKWBcbiAgICovXG4gIHNldChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBkYXRhOiBPYnNlcnZhYmxlPGFueT4sXG4gICAgb3B0aW9ucz86IHsgdHlwZT86ICdzJzsgZXhwaXJlPzogbnVtYmVyIH0sXG4gICk6IE9ic2VydmFibGU8YW55PjtcbiAgLyoqXG4gICAqIOaMgeS5heWMlue8k+WtmOWfuuehgOWvueixoe+8jOS+i+Wmgu+8mlxuICAgKiAtIGBzZXQoJ2RhdGEvMScsIDEpYFxuICAgKiAtIGBzZXQoJ2RhdGEvMScsIDEsIHsgZXhwaXJlOiAxMCB9KWBcbiAgICovXG4gIHNldChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBkYXRhOiBPYmplY3QsXG4gICAgb3B0aW9ucz86IHsgdHlwZT86ICdzJzsgZXhwaXJlPzogbnVtYmVyIH0sXG4gICk6IHZvaWQ7XG4gIC8qKlxuICAgKiDmjIflrprnvJPlrZjnsbvlnovov5vooYznvJPlrZjlr7nosaHvvIzkvovlpoLlhoXlrZjnvJPlrZjvvJpcbiAgICogLSBgc2V0KCdkYXRhLzEnLCAxLCB7IHR5cGU6ICdtJyB9KWBcbiAgICogLSBgc2V0KCdkYXRhLzEnLCAxLCB7IHR5cGU6ICdtJywgZXhwaXJlOiAxMCB9KWBcbiAgICovXG4gIHNldChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBkYXRhOiBPYmplY3QsXG4gICAgb3B0aW9uczogeyB0eXBlOiAnbScgfCAncyc7IGV4cGlyZT86IG51bWJlciB9LFxuICApOiB2b2lkO1xuICAvKipcbiAgICog57yT5a2Y5a+56LGhXG4gICAqL1xuICBzZXQoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgZGF0YTogYW55IHwgT2JzZXJ2YWJsZTxhbnk+LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIC8qKiDlrZjlgqjnsbvlnovvvIwnbScg6KGo56S65YaF5a2Y77yMJ3MnIOihqOekuuaMgeS5hSAqL1xuICAgICAgdHlwZT86ICdtJyB8ICdzJztcbiAgICAgIC8qKlxuICAgICAgICog6L+H5pyf5pe26Ze077yM5Y2V5L2NIGDnp5JgXG4gICAgICAgKi9cbiAgICAgIGV4cGlyZT86IG51bWJlcjtcbiAgICB9ID0ge30sXG4gICk6IGFueSB7XG4gICAgLy8gZXhwaXJlXG4gICAgbGV0IGUgPSAwO1xuICAgIGlmIChvcHRpb25zLmV4cGlyZSkge1xuICAgICAgZSA9IGFkZFNlY29uZHMobmV3IERhdGUoKSwgb3B0aW9ucy5leHBpcmUpLnZhbHVlT2YoKTtcbiAgICB9XG4gICAgaWYgKCEoZGF0YSBpbnN0YW5jZW9mIE9ic2VydmFibGUpKSB7XG4gICAgICB0aGlzLnNhdmUob3B0aW9ucy50eXBlLCBrZXksIHsgdjogZGF0YSwgZSB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGEucGlwZShcbiAgICAgIHRhcCgodjogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuc2F2ZShvcHRpb25zLnR5cGUsIGtleSwgeyB2LCBlIH0pO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc2F2ZSh0eXBlOiAnbScgfCAncycsIGtleTogc3RyaW5nLCB2YWx1ZTogSUNhY2hlKSB7XG4gICAgaWYgKHR5cGUgPT09ICdtJykge1xuICAgICAgdGhpcy5tZW1vcnkuc2V0KGtleSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3JlLnNldCh0aGlzLm9wdGlvbnMucHJlZml4ICsga2V5LCB2YWx1ZSk7XG4gICAgICB0aGlzLnB1c2hNZXRhKGtleSk7XG4gICAgfVxuICAgIHRoaXMucnVuTm90aWZ5KGtleSwgJ3NldCcpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gZ2V0XG5cbiAgLyoqIOiOt+WPlue8k+WtmOaVsOaNru+8jOiLpSBga2V5YCDkuI3lrZjlnKjliJkgYGtleWAg5L2c5Li6SFRUUOivt+axgue8k+WtmOWQjui/lOWbniAqL1xuICBnZXQ8VD4oXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG1vZGU6ICdwcm9taXNlJztcbiAgICAgIHR5cGU/OiAnbScgfCAncyc7XG4gICAgICBleHBpcmU/OiBudW1iZXI7XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxUPjtcbiAgLyoqIOiOt+WPlue8k+WtmOaVsOaNru+8jOiLpSBga2V5YCDkuI3lrZjlnKjliJkgYGtleWAg5L2c5Li6SFRUUOivt+axgue8k+WtmOWQjui/lOWbniAqL1xuICBnZXQoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG1vZGU6ICdwcm9taXNlJztcbiAgICAgIHR5cGU/OiAnbScgfCAncyc7XG4gICAgICBleHBpcmU/OiBudW1iZXI7XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xuICAvKiog6I635Y+W57yT5a2Y5pWw5o2u77yM6IulIGBrZXlgIOS4jeWtmOWcqOaIluW3sui/h+acn+WImei/lOWbniBudWxsICovXG4gIGdldChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBtb2RlOiAnbm9uZSc7XG4gICAgICB0eXBlPzogJ20nIHwgJ3MnO1xuICAgICAgZXhwaXJlPzogbnVtYmVyO1xuICAgIH0sXG4gICk6IGFueTtcbiAgZ2V0KFxuICAgIGtleTogc3RyaW5nLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG1vZGU/OiAncHJvbWlzZScgfCAnbm9uZSc7XG4gICAgICB0eXBlPzogJ20nIHwgJ3MnO1xuICAgICAgZXhwaXJlPzogbnVtYmVyO1xuICAgIH0gPSB7fSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHwgYW55IHtcbiAgICBjb25zdCBpc1Byb21pc2UgPVxuICAgICAgb3B0aW9ucy5tb2RlICE9PSAnbm9uZScgJiYgdGhpcy5vcHRpb25zLm1vZGUgPT09ICdwcm9taXNlJztcbiAgICBjb25zdCB2YWx1ZTogSUNhY2hlID0gdGhpcy5tZW1vcnkuaGFzKGtleSlcbiAgICAgID8gdGhpcy5tZW1vcnkuZ2V0KGtleSlcbiAgICAgIDogdGhpcy5zdG9yZS5nZXQodGhpcy5vcHRpb25zLnByZWZpeCArIGtleSk7XG4gICAgaWYgKCF2YWx1ZSB8fCAodmFsdWUuZSAmJiB2YWx1ZS5lID4gMCAmJiB2YWx1ZS5lIDwgbmV3IERhdGUoKS52YWx1ZU9mKCkpKSB7XG4gICAgICBpZiAoaXNQcm9taXNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgICAgICAuZ2V0KGtleSlcbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgIG1hcCgocmV0OiBhbnkpID0+XG4gICAgICAgICAgICAgIHRoaXMuX2RlZXBHZXQocmV0LCB0aGlzLm9wdGlvbnMucmVOYW1lIGFzIHN0cmluZ1tdLCBudWxsKSxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICB0YXAodiA9PiB0aGlzLnNldChrZXksIHYpKSxcbiAgICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzUHJvbWlzZSA/IG9mKHZhbHVlLnYpIDogdmFsdWUudjtcbiAgfVxuXG4gIC8qKiDojrflj5bnvJPlrZjmlbDmja7vvIzoi6UgYGtleWAg5LiN5a2Y5Zyo5oiW5bey6L+H5pyf5YiZ6L+U5ZueIG51bGwgKi9cbiAgZ2V0Tm9uZTxUPihrZXk6IHN0cmluZyk6IFQ7XG4gIC8qKiDojrflj5bnvJPlrZjmlbDmja7vvIzoi6UgYGtleWAg5LiN5a2Y5Zyo5oiW5bey6L+H5pyf5YiZ6L+U5ZueIG51bGwgKi9cbiAgZ2V0Tm9uZShrZXk6IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGtleSwgeyBtb2RlOiAnbm9uZScgfSk7XG4gIH1cblxuICAvKipcbiAgICog6I635Y+W57yT5a2Y77yM6Iul5LiN5a2Y5Zyo5YiZ6K6+572u5oyB5LmF5YyW57yT5a2YIGBPYnNlcnZhYmxlYCDlr7nosaFcbiAgICovXG4gIHRyeUdldDxUPihcbiAgICBrZXk6IHN0cmluZyxcbiAgICBkYXRhOiBPYnNlcnZhYmxlPFQ+LFxuICAgIG9wdGlvbnM/OiB7IHR5cGU/OiAncyc7IGV4cGlyZT86IG51bWJlciB9LFxuICApOiBPYnNlcnZhYmxlPFQ+O1xuICAvKipcbiAgICog6I635Y+W57yT5a2Y77yM6Iul5LiN5a2Y5Zyo5YiZ6K6+572u5oyB5LmF5YyW57yT5a2YIGBPYnNlcnZhYmxlYCDlr7nosaFcbiAgICovXG4gIHRyeUdldChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBkYXRhOiBPYnNlcnZhYmxlPGFueT4sXG4gICAgb3B0aW9ucz86IHsgdHlwZT86ICdzJzsgZXhwaXJlPzogbnVtYmVyIH0sXG4gICk6IE9ic2VydmFibGU8YW55PjtcbiAgLyoqXG4gICAqIOiOt+WPlue8k+WtmO+8jOiLpeS4jeWtmOWcqOWImeiuvue9ruaMgeS5heWMlue8k+WtmOWfuuehgOWvueixoVxuICAgKi9cbiAgdHJ5R2V0KFxuICAgIGtleTogc3RyaW5nLFxuICAgIGRhdGE6IE9iamVjdCxcbiAgICBvcHRpb25zPzogeyB0eXBlPzogJ3MnOyBleHBpcmU/OiBudW1iZXIgfSxcbiAgKTogYW55O1xuICAvKipcbiAgICog6I635Y+W57yT5a2Y77yM6Iul5LiN5a2Y5Zyo5YiZ6K6+572u5oyH5a6a57yT5a2Y57G75Z6L6L+b6KGM57yT5a2Y5a+56LGhXG4gICAqL1xuICB0cnlHZXQoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgZGF0YTogT2JqZWN0LFxuICAgIG9wdGlvbnM6IHsgdHlwZTogJ20nIHwgJ3MnOyBleHBpcmU/OiBudW1iZXIgfSxcbiAgKTogYW55O1xuXG4gIC8qKlxuICAgKiDojrflj5bnvJPlrZjvvIzoi6XkuI3lrZjlnKjliJnorr7nva7nvJPlrZjlr7nosaFcbiAgICovXG4gIHRyeUdldChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBkYXRhOiBhbnkgfCBPYnNlcnZhYmxlPGFueT4sXG4gICAgb3B0aW9uczoge1xuICAgICAgLyoqIOWtmOWCqOexu+Wei++8jCdtJyDooajnpLrlhoXlrZjvvIwncycg6KGo56S65oyB5LmFICovXG4gICAgICB0eXBlPzogJ20nIHwgJ3MnO1xuICAgICAgLyoqXG4gICAgICAgKiDov4fmnJ/ml7bpl7TvvIzljZXkvY0gYOenkmBcbiAgICAgICAqL1xuICAgICAgZXhwaXJlPzogbnVtYmVyO1xuICAgIH0gPSB7fSxcbiAgKTogYW55IHtcbiAgICBjb25zdCByZXQgPSB0aGlzLmdldE5vbmUoa2V5KTtcbiAgICBpZiAocmV0ID09PSBudWxsKSB7XG4gICAgICBpZiAoIShkYXRhIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkpIHtcbiAgICAgICAgdGhpcy5zZXQoa2V5LCBkYXRhLCA8YW55Pm9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuc2V0KGtleSwgZGF0YSBhcyBPYnNlcnZhYmxlPGFueT4sIDxhbnk+b3B0aW9ucyk7XG4gICAgfVxuICAgIHJldHVybiBvZihyZXQpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gaGFzXG5cbiAgLyoqIOaYr+WQpue8k+WtmCBga2V5YCAqL1xuICBoYXMoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tZW1vcnkuaGFzKGtleSkgfHwgdGhpcy5tZXRhLmhhcyhrZXkpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gcmVtb3ZlXG5cbiAgcHJpdmF0ZSBfcmVtb3ZlKGtleTogc3RyaW5nLCBuZWVkTm90aWZ5OiBib29sZWFuKSB7XG4gICAgaWYgKG5lZWROb3RpZnkpIHRoaXMucnVuTm90aWZ5KGtleSwgJ3JlbW92ZScpO1xuICAgIGlmICh0aGlzLm1lbW9yeS5oYXMoa2V5KSkge1xuICAgICAgdGhpcy5tZW1vcnkuZGVsZXRlKGtleSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc3RvcmUucmVtb3ZlKHRoaXMub3B0aW9ucy5wcmVmaXggKyBrZXkpO1xuICAgIHRoaXMucmVtb3ZlTWV0YShrZXkpO1xuICB9XG5cbiAgLyoqIOenu+mZpOe8k+WtmCAqL1xuICByZW1vdmUoa2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZW1vdmUoa2V5LCB0cnVlKTtcbiAgfVxuXG4gIC8qKiDmuIXnqbrmiYDmnInnvJPlrZggKi9cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5ub3RpZnlCdWZmZXIuZm9yRWFjaCgodiwgaykgPT4gdGhpcy5ydW5Ob3RpZnkoaywgJ3JlbW92ZScpKTtcbiAgICB0aGlzLm1lbW9yeS5jbGVhcigpO1xuICAgIHRoaXMubWV0YS5mb3JFYWNoKGtleSA9PiB0aGlzLnN0b3JlLnJlbW92ZSh0aGlzLm9wdGlvbnMucHJlZml4ICsga2V5KSk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBub3RpZnlcblxuICAvKipcbiAgICog6K6+572u55uR5ZCs6aKR546H77yM5Y2V5L2N77ya5q+r56eS5LiU5pyA5L2OIGAyMG1zYO+8jOm7mOiupO+8mmAzMDAwbXNgXG4gICAqL1xuICBzZXQgZnJlcSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5mcmVxX3RpY2sgPSBNYXRoLm1heCgyMCwgdmFsdWUpO1xuICAgIHRoaXMuYWJvcnRFeHBpcmVOb3RpZnkoKTtcbiAgICB0aGlzLnN0YXJ0RXhwaXJlTm90aWZ5KCk7XG4gIH1cblxuICBwcml2YXRlIHN0YXJ0RXhwaXJlTm90aWZ5KCkge1xuICAgIHRoaXMuY2hlY2tFeHBpcmVOb3RpZnkoKTtcbiAgICB0aGlzLnJ1bkV4cGlyZU5vdGlmeSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBydW5FeHBpcmVOb3RpZnkoKSB7XG4gICAgdGhpcy5mcmVxX3RpbWUgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY2hlY2tFeHBpcmVOb3RpZnkoKTtcbiAgICAgIHRoaXMucnVuRXhwaXJlTm90aWZ5KCk7XG4gICAgfSwgdGhpcy5mcmVxX3RpY2spO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0V4cGlyZU5vdGlmeSgpIHtcbiAgICBjb25zdCByZW1vdmVkOiBzdHJpbmdbXSA9IFtdO1xuICAgIHRoaXMubm90aWZ5QnVmZmVyLmZvckVhY2goKHYsIGtleSkgPT4ge1xuICAgICAgaWYgKHRoaXMuaGFzKGtleSkgJiYgdGhpcy5nZXROb25lKGtleSkgPT09IG51bGwpIHJlbW92ZWQucHVzaChrZXkpO1xuICAgIH0pO1xuICAgIHJlbW92ZWQuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgdGhpcy5ydW5Ob3RpZnkoa2V5LCAnZXhwaXJlJyk7XG4gICAgICB0aGlzLl9yZW1vdmUoa2V5LCBmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFib3J0RXhwaXJlTm90aWZ5KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmZyZXFfdGltZSk7XG4gIH1cblxuICBwcml2YXRlIHJ1bk5vdGlmeShrZXk6IHN0cmluZywgdHlwZTogQ2FjaGVOb3RpZnlUeXBlKSB7XG4gICAgaWYgKCF0aGlzLm5vdGlmeUJ1ZmZlci5oYXMoa2V5KSkgcmV0dXJuO1xuICAgIHRoaXMubm90aWZ5QnVmZmVyLmdldChrZXkpLm5leHQoeyB0eXBlLCB2YWx1ZTogdGhpcy5nZXROb25lKGtleSkgfSk7XG4gIH1cblxuICAvKipcbiAgICogYGtleWAg55uR5ZCs77yM5b2TIGBrZXlgIOWPmOabtOOAgei/h+acn+OAgeenu+mZpOaXtumAmuefpe+8jOazqOaEj+S7peS4i+iLpeW5sue7huiKgu+8mlxuICAgKlxuICAgKiAtIOiwg+eUqOWQjumZpOWGjeasoeiwg+eUqCBgY2FuY2VsTm90aWZ5YCDlkKbliJnmsLjov5zkuI3ov4fmnJ9cbiAgICogLSDnm5HlkKzlmajmr48gYGZyZXFgICjpu5jorqTvvJoz56eSKSDmiafooYzkuIDmrKHov4fmnJ/mo4Dmn6VcbiAgICovXG4gIG5vdGlmeShrZXk6IHN0cmluZyk6IE9ic2VydmFibGU8Q2FjaGVOb3RpZnlSZXN1bHQ+IHtcbiAgICBpZiAoIXRoaXMubm90aWZ5QnVmZmVyLmhhcyhrZXkpKSB7XG4gICAgICBjb25zdCBjaGFuZ2UkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxDYWNoZU5vdGlmeVJlc3VsdD4odGhpcy5nZXROb25lKGtleSkpO1xuICAgICAgdGhpcy5ub3RpZnlCdWZmZXIuc2V0KGtleSwgY2hhbmdlJCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm5vdGlmeUJ1ZmZlci5nZXQoa2V5KS5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlj5bmtoggYGtleWAg55uR5ZCsXG4gICAqL1xuICBjYW5jZWxOb3RpZnkoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubm90aWZ5QnVmZmVyLmhhcyhrZXkpKSByZXR1cm47XG4gICAgdGhpcy5ub3RpZnlCdWZmZXIuZ2V0KGtleSkudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLm5vdGlmeUJ1ZmZlci5kZWxldGUoa2V5KTtcbiAgfVxuXG4gIC8qKiBga2V5YCDmmK/lkKblt7Lnu4/nm5HlkKwgKi9cbiAgaGFzTm90aWZ5KGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubm90aWZ5QnVmZmVyLmhhcyhrZXkpO1xuICB9XG5cbiAgLyoqIOa4heepuuaJgOaciSBga2V5YCDnmoTnm5HlkKwgKi9cbiAgY2xlYXJOb3RpZnkoKTogdm9pZCB7XG4gICAgdGhpcy5ub3RpZnlCdWZmZXIuZm9yRWFjaCh2ID0+IHYudW5zdWJzY3JpYmUoKSk7XG4gICAgdGhpcy5ub3RpZnlCdWZmZXIuY2xlYXIoKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm1lbW9yeS5jbGVhcigpO1xuICAgIHRoaXMuYWJvcnRFeHBpcmVOb3RpZnkoKTtcbiAgICB0aGlzLmNsZWFyTm90aWZ5KCk7XG4gIH1cbn1cbiJdfQ==