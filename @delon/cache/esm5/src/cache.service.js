/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jYWNoZS8iLCJzb3VyY2VzIjpbInNyYy9jYWNoZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxVQUFVLE1BQU0sc0JBQXNCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUMsT0FBTyxFQUNMLHNCQUFzQixHQUt2QixNQUFNLGFBQWEsQ0FBQztBQUNyQixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7SUFhaEQsc0JBQ1UsU0FDZ0MsS0FBa0IsRUFDbEQ7UUFGQSxZQUFPLEdBQVAsT0FBTztRQUN5QixVQUFLLEdBQUwsS0FBSyxDQUFhO1FBQ2xELFNBQUksR0FBSixJQUFJO3NCQVppQyxJQUFJLEdBQUcsRUFBa0I7NEJBSXBFLElBQUksR0FBRyxFQUE4QztvQkFDN0IsSUFBSSxHQUFHLEVBQVU7eUJBQ3pCLElBQUk7UUFRdEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0tBQzFCOzs7Ozs7O0lBRUQsK0JBQVE7Ozs7OztJQUFSLFVBQVMsR0FBUSxFQUFFLElBQWMsRUFBRSxZQUFrQjtRQUNuRCxJQUFJLENBQUMsR0FBRztZQUFFLE9BQU8sWUFBWSxDQUFDO1FBQzlCLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7O1lBQ3BCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxD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RyxDQUFDLEdBQUcsQ0FBQztZQUFFLE9BQU87UUFDeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDL0I7SUFFRCxtQkFBbUI7Ozs7OztJQUNuQixnQ0FBUzs7Ozs7SUFBVCxVQUFVLEdBQVc7UUFDbkIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNuQztJQUVELHFCQUFxQjs7Ozs7SUFDckIsa0NBQVc7Ozs7SUFBWDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDM0I7SUFFRCxZQUFZOzs7O0lBRVosa0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDcEI7O2dCQXpZRixVQUFVOzs7O2dCQUZGLGdCQUFnQjtnREFlcEIsTUFBTSxTQUFDLHNCQUFzQjtnQkEzQnpCLFVBQVU7O3VCQURuQjs7U0FnQmEsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCBhZGRTZWNvbmRzIGZyb20gJ2RhdGUtZm5zL2FkZF9zZWNvbmRzJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YXAsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgRENfU1RPUkVfU1RPUkFHRV9UT0tFTixcclxuICBJQ2FjaGVTdG9yZSxcclxuICBJQ2FjaGUsXHJcbiAgQ2FjaGVOb3RpZnlSZXN1bHQsXHJcbiAgQ2FjaGVOb3RpZnlUeXBlLFxyXG59IGZyb20gJy4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgRGVsb25DYWNoZUNvbmZpZyB9IGZyb20gJy4vY2FjaGUuY29uZmlnJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENhY2hlU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBtZW1vcnk6IE1hcDxzdHJpbmcsIElDYWNoZT4gPSBuZXcgTWFwPHN0cmluZywgSUNhY2hlPigpO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgbm90aWZ5QnVmZmVyOiBNYXA8XHJcbiAgICBzdHJpbmcsXHJcbiAgICBCZWhhdmlvclN1YmplY3Q8Q2FjaGVOb3RpZnlSZXN1bHQ+XHJcbiAgPiA9IG5ldyBNYXA8c3RyaW5nLCBCZWhhdmlvclN1YmplY3Q8Q2FjaGVOb3RpZnlSZXN1bHQ+PigpO1xyXG4gIHByaXZhdGUgbWV0YTogU2V0PHN0cmluZz4gPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuICBwcml2YXRlIGZyZXFfdGljayA9IDMwMDA7XHJcbiAgcHJpdmF0ZSBmcmVxX3RpbWU6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG9wdGlvbnM6IERlbG9uQ2FjaGVDb25maWcsXHJcbiAgICBASW5qZWN0KERDX1NUT1JFX1NUT1JBR0VfVE9LRU4pIHByaXZhdGUgc3RvcmU6IElDYWNoZVN0b3JlLFxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICkge1xyXG4gICAgdGhpcy5sb2FkTWV0YSgpO1xyXG4gICAgdGhpcy5zdGFydEV4cGlyZU5vdGlmeSgpO1xyXG4gIH1cclxuXHJcbiAgX2RlZXBHZXQob2JqOiBhbnksIHBhdGg6IHN0cmluZ1tdLCBkZWZhdWx0VmFsdWU/OiBhbnkpIHtcclxuICAgIGlmICghb2JqKSByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG4gICAgaWYgKHBhdGgubGVuZ3RoIDw9IDEpIHtcclxuICAgICAgY29uc3QgY2hlY2tPYmogPSBwYXRoLmxlbmd0aCA/IG9ialtwYXRoWzBdXSA6IG9iajtcclxuICAgICAgcmV0dXJuIHR5cGVvZiBjaGVja09iaiA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0VmFsdWUgOiBjaGVja09iajtcclxuICAgIH1cclxuICAgIHJldHVybiBwYXRoLnJlZHVjZSgobywgaykgPT4gb1trXSwgb2JqKSB8fCBkZWZhdWx0VmFsdWU7XHJcbiAgfVxyXG5cclxuICAvLyByZWdpb246IG1ldGFcclxuXHJcbiAgcHJpdmF0ZSBwdXNoTWV0YShrZXk6IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMubWV0YS5oYXMoa2V5KSkgcmV0dXJuO1xyXG4gICAgdGhpcy5tZXRhLmFkZChrZXkpO1xyXG4gICAgdGhpcy5zYXZlTWV0YSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVNZXRhKGtleTogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXRoaXMubWV0YS5oYXMoa2V5KSkgcmV0dXJuO1xyXG4gICAgdGhpcy5tZXRhLmRlbGV0ZShrZXkpO1xyXG4gICAgdGhpcy5zYXZlTWV0YSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2FkTWV0YSgpIHtcclxuICAgIGNvbnN0IHJldCA9IHRoaXMuc3RvcmUuZ2V0KHRoaXMub3B0aW9ucy5tZXRhX2tleSk7XHJcbiAgICBpZiAocmV0ICYmIHJldC52KSB7XHJcbiAgICAgIChyZXQudiBhcyBzdHJpbmdbXSkuZm9yRWFjaChrZXkgPT4gdGhpcy5tZXRhLmFkZChrZXkpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2F2ZU1ldGEoKSB7XHJcbiAgICBjb25zdCBtZXRhRGF0YTogc3RyaW5nW10gPSBbXTtcclxuICAgIHRoaXMubWV0YS5mb3JFYWNoKGtleSA9PiBtZXRhRGF0YS5wdXNoKGtleSkpO1xyXG4gICAgdGhpcy5zdG9yZS5zZXQodGhpcy5vcHRpb25zLm1ldGFfa2V5LCB7IHY6IG1ldGFEYXRhLCBlOiAwIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0TWV0YSgpIHtcclxuICAgIHJldHVybiB0aGlzLm1ldGE7XHJcbiAgfVxyXG5cclxuICAvLyBlbmRyZWdpb25cclxuXHJcbiAgLy8gcmVnaW9uOiBzZXRcclxuXHJcbiAgLyoqXHJcbiAgICog5oyB5LmF5YyW57yT5a2YIGBPYnNlcnZhYmxlYCDlr7nosaHvvIzkvovlpoLvvJpcclxuICAgKiAtIGBzZXQoJ2RhdGEvMScsIHRoaXMuaHR0cC5nZXQoJ2RhdGEvMScpKS5zdWJzY3JpYmUoKWBcclxuICAgKiAtIGBzZXQoJ2RhdGEvMScsIHRoaXMuaHR0cC5nZXQoJ2RhdGEvMScpLCB7IGV4cGlyZTogMTAgfSkuc3Vic2NyaWJlKClgXHJcbiAgICovXHJcbiAgc2V0PFQ+KFxyXG4gICAga2V5OiBzdHJpbmcsXHJcbiAgICBkYXRhOiBPYnNlcnZhYmxlPFQ+LFxyXG4gICAgb3B0aW9ucz86IHsgdHlwZT86ICdzJzsgZXhwaXJlPzogbnVtYmVyIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxUPjtcclxuICAvKipcclxuICAgKiDmjIHkuYXljJbnvJPlrZggYE9ic2VydmFibGVgIOWvueixoe+8jOS+i+Wmgu+8mlxyXG4gICAqIC0gYHNldCgnZGF0YS8xJywgdGhpcy5odHRwLmdldCgnZGF0YS8xJykpLnN1YnNjcmliZSgpYFxyXG4gICAqIC0gYHNldCgnZGF0YS8xJywgdGhpcy5odHRwLmdldCgnZGF0YS8xJyksIHsgZXhwaXJlOiAxMCB9KS5zdWJzY3JpYmUoKWBcclxuICAgKi9cclxuICBzZXQoXHJcbiAgICBrZXk6IHN0cmluZyxcclxuICAgIGRhdGE6IE9ic2VydmFibGU8YW55PixcclxuICAgIG9wdGlvbnM/OiB7IHR5cGU/OiAncyc7IGV4cGlyZT86IG51bWJlciB9LFxyXG4gICk6IE9ic2VydmFibGU8YW55PjtcclxuICAvKipcclxuICAgKiDmjIHkuYXljJbnvJPlrZjln7rnoYDlr7nosaHvvIzkvovlpoLvvJpcclxuICAgKiAtIGBzZXQoJ2RhdGEvMScsIDEpYFxyXG4gICAqIC0gYHNldCgnZGF0YS8xJywgMSwgeyBleHBpcmU6IDEwIH0pYFxyXG4gICAqL1xyXG4gIHNldChcclxuICAgIGtleTogc3RyaW5nLFxyXG4gICAgZGF0YTogT2JqZWN0LFxyXG4gICAgb3B0aW9ucz86IHsgdHlwZT86ICdzJzsgZXhwaXJlPzogbnVtYmVyIH0sXHJcbiAgKTogdm9pZDtcclxuICAvKipcclxuICAgKiDmjIflrprnvJPlrZjnsbvlnovov5vooYznvJPlrZjlr7nosaHvvIzkvovlpoLlhoXlrZjnvJPlrZjvvJpcclxuICAgKiAtIGBzZXQoJ2RhdGEvMScsIDEsIHsgdHlwZTogJ20nIH0pYFxyXG4gICAqIC0gYHNldCgnZGF0YS8xJywgMSwgeyB0eXBlOiAnbScsIGV4cGlyZTogMTAgfSlgXHJcbiAgICovXHJcbiAgc2V0KFxyXG4gICAga2V5OiBzdHJpbmcsXHJcbiAgICBkYXRhOiBPYmplY3QsXHJcbiAgICBvcHRpb25zOiB7IHR5cGU6ICdtJyB8ICdzJzsgZXhwaXJlPzogbnVtYmVyIH0sXHJcbiAgKTogdm9pZDtcclxuICAvKipcclxuICAgKiDnvJPlrZjlr7nosaFcclxuICAgKi9cclxuICBzZXQoXHJcbiAgICBrZXk6IHN0cmluZyxcclxuICAgIGRhdGE6IGFueSB8IE9ic2VydmFibGU8YW55PixcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgLyoqIOWtmOWCqOexu+Wei++8jCdtJyDooajnpLrlhoXlrZjvvIwncycg6KGo56S65oyB5LmFICovXHJcbiAgICAgIHR5cGU/OiAnbScgfCAncyc7XHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiDov4fmnJ/ml7bpl7TvvIzljZXkvY0gYOenkmBcclxuICAgICAgICovXHJcbiAgICAgIGV4cGlyZT86IG51bWJlcjtcclxuICAgIH0gPSB7fSxcclxuICApOiBhbnkge1xyXG4gICAgLy8gZXhwaXJlXHJcbiAgICBsZXQgZSA9IDA7XHJcbiAgICBpZiAob3B0aW9ucy5leHBpcmUpIHtcclxuICAgICAgZSA9IGFkZFNlY29uZHMobmV3IERhdGUoKSwgb3B0aW9ucy5leHBpcmUpLnZhbHVlT2YoKTtcclxuICAgIH1cclxuICAgIGlmICghKGRhdGEgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSkge1xyXG4gICAgICB0aGlzLnNhdmUob3B0aW9ucy50eXBlLCBrZXksIHsgdjogZGF0YSwgZSB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhdGEucGlwZShcclxuICAgICAgdGFwKCh2OiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLnNhdmUob3B0aW9ucy50eXBlLCBrZXksIHsgdiwgZSB9KTtcclxuICAgICAgfSksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzYXZlKHR5cGU6ICdtJyB8ICdzJywga2V5OiBzdHJpbmcsIHZhbHVlOiBJQ2FjaGUpIHtcclxuICAgIGlmICh0eXBlID09PSAnbScpIHtcclxuICAgICAgdGhpcy5tZW1vcnkuc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zdG9yZS5zZXQodGhpcy5vcHRpb25zLnByZWZpeCArIGtleSwgdmFsdWUpO1xyXG4gICAgICB0aGlzLnB1c2hNZXRhKGtleSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJ1bk5vdGlmeShrZXksICdzZXQnKTtcclxuICB9XHJcblxyXG4gIC8vIGVuZHJlZ2lvblxyXG5cclxuICAvLyByZWdpb246IGdldFxyXG5cclxuICAvKiog6I635Y+W57yT5a2Y5pWw5o2u77yM6IulIGBrZXlgIOS4jeWtmOWcqOWImSBga2V5YCDkvZzkuLpIVFRQ6K+35rGC57yT5a2Y5ZCO6L+U5ZueICovXHJcbiAgZ2V0PFQ+KFxyXG4gICAga2V5OiBzdHJpbmcsXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICBtb2RlOiAncHJvbWlzZSc7XHJcbiAgICAgIHR5cGU/OiAnbScgfCAncyc7XHJcbiAgICAgIGV4cGlyZT86IG51bWJlcjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxUPjtcclxuICAvKiog6I635Y+W57yT5a2Y5pWw5o2u77yM6IulIGBrZXlgIOS4jeWtmOWcqOWImSBga2V5YCDkvZzkuLpIVFRQ6K+35rGC57yT5a2Y5ZCO6L+U5ZueICovXHJcbiAgZ2V0KFxyXG4gICAga2V5OiBzdHJpbmcsXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICBtb2RlOiAncHJvbWlzZSc7XHJcbiAgICAgIHR5cGU/OiAnbScgfCAncyc7XHJcbiAgICAgIGV4cGlyZT86IG51bWJlcjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gIC8qKiDojrflj5bnvJPlrZjmlbDmja7vvIzoi6UgYGtleWAg5LiN5a2Y5Zyo5oiW5bey6L+H5pyf5YiZ6L+U5ZueIG51bGwgKi9cclxuICBnZXQoXHJcbiAgICBrZXk6IHN0cmluZyxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgbW9kZTogJ25vbmUnO1xyXG4gICAgICB0eXBlPzogJ20nIHwgJ3MnO1xyXG4gICAgICBleHBpcmU/OiBudW1iZXI7XHJcbiAgICB9LFxyXG4gICk6IGFueTtcclxuICBnZXQoXHJcbiAgICBrZXk6IHN0cmluZyxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgbW9kZT86ICdwcm9taXNlJyB8ICdub25lJztcclxuICAgICAgdHlwZT86ICdtJyB8ICdzJztcclxuICAgICAgZXhwaXJlPzogbnVtYmVyO1xyXG4gICAgfSA9IHt9LFxyXG4gICk6IE9ic2VydmFibGU8YW55PiB8IGFueSB7XHJcbiAgICBjb25zdCBpc1Byb21pc2UgPVxyXG4gICAgICBvcHRpb25zLm1vZGUgIT09ICdub25lJyAmJiB0aGlzLm9wdGlvbnMubW9kZSA9PT0gJ3Byb21pc2UnO1xyXG4gICAgY29uc3QgdmFsdWU6IElDYWNoZSA9IHRoaXMubWVtb3J5LmhhcyhrZXkpXHJcbiAgICAgID8gdGhpcy5tZW1vcnkuZ2V0KGtleSlcclxuICAgICAgOiB0aGlzLnN0b3JlLmdldCh0aGlzLm9wdGlvbnMucHJlZml4ICsga2V5KTtcclxuICAgIGlmICghdmFsdWUgfHwgKHZhbHVlLmUgJiYgdmFsdWUuZSA+IDAgJiYgdmFsdWUuZSA8IG5ldyBEYXRlKCkudmFsdWVPZigpKSkge1xyXG4gICAgICBpZiAoaXNQcm9taXNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgICAgLmdldChrZXkpXHJcbiAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgbWFwKChyZXQ6IGFueSkgPT5cclxuICAgICAgICAgICAgICB0aGlzLl9kZWVwR2V0KHJldCwgdGhpcy5vcHRpb25zLnJlTmFtZSBhcyBzdHJpbmdbXSwgbnVsbCksXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIHRhcCh2ID0+IHRoaXMuc2V0KGtleSwgdikpLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXNQcm9taXNlID8gb2YodmFsdWUudikgOiB2YWx1ZS52O1xyXG4gIH1cclxuXHJcbiAgLyoqIOiOt+WPlue8k+WtmOaVsOaNru+8jOiLpSBga2V5YCDkuI3lrZjlnKjmiJblt7Lov4fmnJ/liJnov5Tlm54gbnVsbCAqL1xyXG4gIGdldE5vbmU8VD4oa2V5OiBzdHJpbmcpOiBUO1xyXG4gIC8qKiDojrflj5bnvJPlrZjmlbDmja7vvIzoi6UgYGtleWAg5LiN5a2Y5Zyo5oiW5bey6L+H5pyf5YiZ6L+U5ZueIG51bGwgKi9cclxuICBnZXROb25lKGtleTogc3RyaW5nKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLmdldChrZXksIHsgbW9kZTogJ25vbmUnIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6I635Y+W57yT5a2Y77yM6Iul5LiN5a2Y5Zyo5YiZ6K6+572u5oyB5LmF5YyW57yT5a2YIGBPYnNlcnZhYmxlYCDlr7nosaFcclxuICAgKi9cclxuICB0cnlHZXQ8VD4oXHJcbiAgICBrZXk6IHN0cmluZyxcclxuICAgIGRhdGE6IE9ic2VydmFibGU8VD4sXHJcbiAgICBvcHRpb25zPzogeyB0eXBlPzogJ3MnOyBleHBpcmU/OiBudW1iZXIgfSxcclxuICApOiBPYnNlcnZhYmxlPFQ+O1xyXG4gIC8qKlxyXG4gICAqIOiOt+WPlue8k+WtmO+8jOiLpeS4jeWtmOWcqOWImeiuvue9ruaMgeS5heWMlue8k+WtmCBgT2JzZXJ2YWJsZWAg5a+56LGhXHJcbiAgICovXHJcbiAgdHJ5R2V0KFxyXG4gICAga2V5OiBzdHJpbmcsXHJcbiAgICBkYXRhOiBPYnNlcnZhYmxlPGFueT4sXHJcbiAgICBvcHRpb25zPzogeyB0eXBlPzogJ3MnOyBleHBpcmU/OiBudW1iZXIgfSxcclxuICApOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgLyoqXHJcbiAgICog6I635Y+W57yT5a2Y77yM6Iul5LiN5a2Y5Zyo5YiZ6K6+572u5oyB5LmF5YyW57yT5a2Y5Z+656GA5a+56LGhXHJcbiAgICovXHJcbiAgdHJ5R2V0KFxyXG4gICAga2V5OiBzdHJpbmcsXHJcbiAgICBkYXRhOiBPYmplY3QsXHJcbiAgICBvcHRpb25zPzogeyB0eXBlPzogJ3MnOyBleHBpcmU/OiBudW1iZXIgfSxcclxuICApOiBhbnk7XHJcbiAgLyoqXHJcbiAgICog6I635Y+W57yT5a2Y77yM6Iul5LiN5a2Y5Zyo5YiZ6K6+572u5oyH5a6a57yT5a2Y57G75Z6L6L+b6KGM57yT5a2Y5a+56LGhXHJcbiAgICovXHJcbiAgdHJ5R2V0KFxyXG4gICAga2V5OiBzdHJpbmcsXHJcbiAgICBkYXRhOiBPYmplY3QsXHJcbiAgICBvcHRpb25zOiB7IHR5cGU6ICdtJyB8ICdzJzsgZXhwaXJlPzogbnVtYmVyIH0sXHJcbiAgKTogYW55O1xyXG5cclxuICAvKipcclxuICAgKiDojrflj5bnvJPlrZjvvIzoi6XkuI3lrZjlnKjliJnorr7nva7nvJPlrZjlr7nosaFcclxuICAgKi9cclxuICB0cnlHZXQoXHJcbiAgICBrZXk6IHN0cmluZyxcclxuICAgIGRhdGE6IGFueSB8IE9ic2VydmFibGU8YW55PixcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgLyoqIOWtmOWCqOexu+Wei++8jCdtJyDooajnpLrlhoXlrZjvvIwncycg6KGo56S65oyB5LmFICovXHJcbiAgICAgIHR5cGU/OiAnbScgfCAncyc7XHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiDov4fmnJ/ml7bpl7TvvIzljZXkvY0gYOenkmBcclxuICAgICAgICovXHJcbiAgICAgIGV4cGlyZT86IG51bWJlcjtcclxuICAgIH0gPSB7fSxcclxuICApOiBhbnkge1xyXG4gICAgY29uc3QgcmV0ID0gdGhpcy5nZXROb25lKGtleSk7XHJcbiAgICBpZiAocmV0ID09PSBudWxsKSB7XHJcbiAgICAgIGlmICghKGRhdGEgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSkge1xyXG4gICAgICAgIHRoaXMuc2V0KGtleSwgZGF0YSwgPGFueT5vcHRpb25zKTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuc2V0KGtleSwgZGF0YSBhcyBPYnNlcnZhYmxlPGFueT4sIDxhbnk+b3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2YocmV0KTtcclxuICB9XHJcblxyXG4gIC8vIGVuZHJlZ2lvblxyXG5cclxuICAvLyByZWdpb246IGhhc1xyXG5cclxuICAvKiog5piv5ZCm57yT5a2YIGBrZXlgICovXHJcbiAgaGFzKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5tZW1vcnkuaGFzKGtleSkgfHwgdGhpcy5tZXRhLmhhcyhrZXkpO1xyXG4gIH1cclxuXHJcbiAgLy8gZW5kcmVnaW9uXHJcblxyXG4gIC8vIHJlZ2lvbjogcmVtb3ZlXHJcblxyXG4gIHByaXZhdGUgX3JlbW92ZShrZXk6IHN0cmluZywgbmVlZE5vdGlmeTogYm9vbGVhbikge1xyXG4gICAgaWYgKG5lZWROb3RpZnkpIHRoaXMucnVuTm90aWZ5KGtleSwgJ3JlbW92ZScpO1xyXG4gICAgaWYgKHRoaXMubWVtb3J5LmhhcyhrZXkpKSB7XHJcbiAgICAgIHRoaXMubWVtb3J5LmRlbGV0ZShrZXkpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0b3JlLnJlbW92ZSh0aGlzLm9wdGlvbnMucHJlZml4ICsga2V5KTtcclxuICAgIHRoaXMucmVtb3ZlTWV0YShrZXkpO1xyXG4gIH1cclxuXHJcbiAgLyoqIOenu+mZpOe8k+WtmCAqL1xyXG4gIHJlbW92ZShrZXk6IHN0cmluZykge1xyXG4gICAgdGhpcy5fcmVtb3ZlKGtleSwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICAvKiog5riF56m65omA5pyJ57yT5a2YICovXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLm5vdGlmeUJ1ZmZlci5mb3JFYWNoKCh2LCBrKSA9PiB0aGlzLnJ1bk5vdGlmeShrLCAncmVtb3ZlJykpO1xyXG4gICAgdGhpcy5tZW1vcnkuY2xlYXIoKTtcclxuICAgIHRoaXMubWV0YS5mb3JFYWNoKGtleSA9PiB0aGlzLnN0b3JlLnJlbW92ZSh0aGlzLm9wdGlvbnMucHJlZml4ICsga2V5KSk7XHJcbiAgfVxyXG5cclxuICAvLyBlbmRyZWdpb25cclxuXHJcbiAgLy8gcmVnaW9uOiBub3RpZnlcclxuXHJcbiAgLyoqXHJcbiAgICog6K6+572u55uR5ZCs6aKR546H77yM5Y2V5L2N77ya5q+r56eS5LiU5pyA5L2OIGAyMG1zYO+8jOm7mOiupO+8mmAzMDAwbXNgXHJcbiAgICovXHJcbiAgc2V0IGZyZXEodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5mcmVxX3RpY2sgPSBNYXRoLm1heCgyMCwgdmFsdWUpO1xyXG4gICAgdGhpcy5hYm9ydEV4cGlyZU5vdGlmeSgpO1xyXG4gICAgdGhpcy5zdGFydEV4cGlyZU5vdGlmeSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGFydEV4cGlyZU5vdGlmeSgpIHtcclxuICAgIHRoaXMuY2hlY2tFeHBpcmVOb3RpZnkoKTtcclxuICAgIHRoaXMucnVuRXhwaXJlTm90aWZ5KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJ1bkV4cGlyZU5vdGlmeSgpIHtcclxuICAgIHRoaXMuZnJlcV90aW1lID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2hlY2tFeHBpcmVOb3RpZnkoKTtcclxuICAgICAgdGhpcy5ydW5FeHBpcmVOb3RpZnkoKTtcclxuICAgIH0sIHRoaXMuZnJlcV90aWNrKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hlY2tFeHBpcmVOb3RpZnkoKSB7XHJcbiAgICBjb25zdCByZW1vdmVkOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgdGhpcy5ub3RpZnlCdWZmZXIuZm9yRWFjaCgodiwga2V5KSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmhhcyhrZXkpICYmIHRoaXMuZ2V0Tm9uZShrZXkpID09PSBudWxsKSByZW1vdmVkLnB1c2goa2V5KTtcclxuICAgIH0pO1xyXG4gICAgcmVtb3ZlZC5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgIHRoaXMucnVuTm90aWZ5KGtleSwgJ2V4cGlyZScpO1xyXG4gICAgICB0aGlzLl9yZW1vdmUoa2V5LCBmYWxzZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWJvcnRFeHBpcmVOb3RpZnkoKSB7XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy5mcmVxX3RpbWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBydW5Ob3RpZnkoa2V5OiBzdHJpbmcsIHR5cGU6IENhY2hlTm90aWZ5VHlwZSkge1xyXG4gICAgaWYgKCF0aGlzLm5vdGlmeUJ1ZmZlci5oYXMoa2V5KSkgcmV0dXJuO1xyXG4gICAgdGhpcy5ub3RpZnlCdWZmZXIuZ2V0KGtleSkubmV4dCh7IHR5cGUsIHZhbHVlOiB0aGlzLmdldE5vbmUoa2V5KSB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGBrZXlgIOebkeWQrO+8jOW9kyBga2V5YCDlj5jmm7TjgIHov4fmnJ/jgIHnp7vpmaTml7bpgJrnn6XvvIzms6jmhI/ku6XkuIvoi6XlubLnu4boioLvvJpcclxuICAgKlxyXG4gICAqIC0g6LCD55So5ZCO6Zmk5YaN5qyh6LCD55SoIGBjYW5jZWxOb3RpZnlgIOWQpuWImeawuOi/nOS4jei/h+acn1xyXG4gICAqIC0g55uR5ZCs5Zmo5q+PIGBmcmVxYCAo6buY6K6k77yaM+enkikg5omn6KGM5LiA5qyh6L+H5pyf5qOA5p+lXHJcbiAgICovXHJcbiAgbm90aWZ5KGtleTogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYWNoZU5vdGlmeVJlc3VsdD4ge1xyXG4gICAgaWYgKCF0aGlzLm5vdGlmeUJ1ZmZlci5oYXMoa2V5KSkge1xyXG4gICAgICBjb25zdCBjaGFuZ2UkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxDYWNoZU5vdGlmeVJlc3VsdD4odGhpcy5nZXROb25lKGtleSkpO1xyXG4gICAgICB0aGlzLm5vdGlmeUJ1ZmZlci5zZXQoa2V5LCBjaGFuZ2UkKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLm5vdGlmeUJ1ZmZlci5nZXQoa2V5KS5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWPlua2iCBga2V5YCDnm5HlkKxcclxuICAgKi9cclxuICBjYW5jZWxOb3RpZnkoa2V5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5ub3RpZnlCdWZmZXIuaGFzKGtleSkpIHJldHVybjtcclxuICAgIHRoaXMubm90aWZ5QnVmZmVyLmdldChrZXkpLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLm5vdGlmeUJ1ZmZlci5kZWxldGUoa2V5KTtcclxuICB9XHJcblxyXG4gIC8qKiBga2V5YCDmmK/lkKblt7Lnu4/nm5HlkKwgKi9cclxuICBoYXNOb3RpZnkoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm5vdGlmeUJ1ZmZlci5oYXMoa2V5KTtcclxuICB9XHJcblxyXG4gIC8qKiDmuIXnqbrmiYDmnIkgYGtleWAg55qE55uR5ZCsICovXHJcbiAgY2xlYXJOb3RpZnkoKTogdm9pZCB7XHJcbiAgICB0aGlzLm5vdGlmeUJ1ZmZlci5mb3JFYWNoKHYgPT4gdi51bnN1YnNjcmliZSgpKTtcclxuICAgIHRoaXMubm90aWZ5QnVmZmVyLmNsZWFyKCk7XHJcbiAgfVxyXG5cclxuICAvLyBlbmRyZWdpb25cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLm1lbW9yeS5jbGVhcigpO1xyXG4gICAgdGhpcy5hYm9ydEV4cGlyZU5vdGlmeSgpO1xyXG4gICAgdGhpcy5jbGVhck5vdGlmeSgpO1xyXG4gIH1cclxufVxyXG4iXX0=