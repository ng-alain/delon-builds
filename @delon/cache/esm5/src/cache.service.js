/**
 * @fileoverview added by tsickle
 * Generated from: src/cache.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import addSeconds from 'date-fns/add_seconds';
import { of, BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DelonCacheConfig } from './cache.config';
import { DC_STORE_STORAGE_TOKEN } from './local-storage-cache.service';
import * as i0 from "@angular/core";
import * as i1 from "./cache.config";
import * as i2 from "./local-storage-cache.service";
import * as i3 from "@angular/common/http";
var CacheService = /** @class */ (function () {
    function CacheService(_, store, http) {
        this.store = store;
        this.http = http;
        this.memory = new Map();
        this.notifyBuffer = new Map();
        this.meta = new Set();
        this.freqTick = 3000;
        this.cog = {};
        Object.assign(this.cog, tslib_1.__assign({}, new DelonCacheConfig(), _));
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
        options = tslib_1.__assign({ type: type,
            expire: expire }, options);
        if (options.expire) {
            e = addSeconds(new Date(), options.expire).valueOf();
        }
        if (!(data instanceof Observable)) {
            this.save((/** @type {?} */ (options.type)), key, { v: data, e: e });
            return;
        }
        return data.pipe(tap((/**
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
                return this.http.get(key).pipe(map((/**
                 * @param {?} ret
                 * @return {?}
                 */
                function (ret) { return _this.deepGet(ret, (/** @type {?} */ (_this.cog.reName)), null); })), tap((/**
                 * @param {?} v
                 * @return {?}
                 */
                function (v) { return _this.set(key, v, { type: (/** @type {?} */ (options.type)), expire: options.expire }); })));
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
            var change$ = new BehaviorSubject(this.getNone(key));
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
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    CacheService.ctorParameters = function () { return [
        { type: DelonCacheConfig },
        { type: undefined, decorators: [{ type: Inject, args: [DC_STORE_STORAGE_TOKEN,] }] },
        { type: HttpClient }
    ]; };
    /** @nocollapse */ CacheService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CacheService_Factory() { return new CacheService(i0.ɵɵinject(i1.DelonCacheConfig), i0.ɵɵinject(i2.DC_STORE_STORAGE_TOKEN), i0.ɵɵinject(i3.HttpClient)); }, token: CacheService, providedIn: "root" });
    return CacheService;
}());
export { CacheService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jYWNoZS8iLCJzb3VyY2VzIjpbInNyYy9jYWNoZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLFVBQVUsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7QUFFdkU7SUFTRSxzQkFBWSxDQUFtQixFQUEwQyxLQUFrQixFQUFVLElBQWdCO1FBQTVDLFVBQUssR0FBTCxLQUFLLENBQWE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBUHBHLFdBQU0sR0FBd0IsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFDeEQsaUJBQVksR0FBb0QsSUFBSSxHQUFHLEVBQThDLENBQUM7UUFDL0gsU0FBSSxHQUFnQixJQUFJLEdBQUcsRUFBVSxDQUFDO1FBQ3RDLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFFaEIsUUFBRyxHQUFxQixFQUFFLENBQUM7UUFHakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyx1QkFBTyxJQUFJLGdCQUFnQixFQUFFLEVBQUssQ0FBQyxFQUFHLENBQUM7UUFDN0QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7Ozs7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LFlBQVksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELG1CQUFtQjs7Ozs7O0lBQ25CLGdDQUFTOzs7OztJQUFULFVBQVUsR0FBVztRQUNuQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxxQkFBcUI7Ozs7O0lBQ3JCLGtDQUFXOzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBZixDQUFlLEVBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxhQUFhOzs7OztJQUViLGtDQUFXOzs7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Z0JBbFdGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBSnpCLGdCQUFnQjtnREFhVyxNQUFNLFNBQUMsc0JBQXNCO2dCQWxCeEQsVUFBVTs7O3VCQUFuQjtDQTRXQyxBQW5XRCxJQW1XQztTQWxXWSxZQUFZOzs7Ozs7SUFDdkIsOEJBQXlFOzs7OztJQUN6RSxvQ0FBdUk7Ozs7O0lBQ3ZJLDRCQUE4Qzs7Ozs7SUFDOUMsZ0NBQXdCOzs7OztJQUN4QixnQ0FBc0I7Ozs7O0lBQ3RCLDJCQUFtQzs7Ozs7SUFFRiw2QkFBMEQ7Ozs7O0lBQUUsNEJBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgYWRkU2Vjb25kcyBmcm9tICdkYXRlLWZucy9hZGRfc2Vjb25kcyc7XG5pbXBvcnQgeyBvZiwgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERlbG9uQ2FjaGVDb25maWcgfSBmcm9tICcuL2NhY2hlLmNvbmZpZyc7XG5pbXBvcnQgeyBDYWNoZU5vdGlmeVJlc3VsdCwgQ2FjaGVOb3RpZnlUeXBlLCBJQ2FjaGUsIElDYWNoZVN0b3JlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRENfU1RPUkVfU1RPUkFHRV9UT0tFTiB9IGZyb20gJy4vbG9jYWwtc3RvcmFnZS1jYWNoZS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBDYWNoZVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHJlYWRvbmx5IG1lbW9yeTogTWFwPHN0cmluZywgSUNhY2hlPiA9IG5ldyBNYXA8c3RyaW5nLCBJQ2FjaGU+KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgbm90aWZ5QnVmZmVyOiBNYXA8c3RyaW5nLCBCZWhhdmlvclN1YmplY3Q8Q2FjaGVOb3RpZnlSZXN1bHQ+PiA9IG5ldyBNYXA8c3RyaW5nLCBCZWhhdmlvclN1YmplY3Q8Q2FjaGVOb3RpZnlSZXN1bHQ+PigpO1xuICBwcml2YXRlIG1ldGE6IFNldDxzdHJpbmc+ID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIHByaXZhdGUgZnJlcVRpY2sgPSAzMDAwO1xuICBwcml2YXRlIGZyZXFUaW1lOiBhbnk7XG4gIHByaXZhdGUgY29nOiBEZWxvbkNhY2hlQ29uZmlnID0ge307XG5cbiAgY29uc3RydWN0b3IoXzogRGVsb25DYWNoZUNvbmZpZywgQEluamVjdChEQ19TVE9SRV9TVE9SQUdFX1RPS0VOKSBwcml2YXRlIHN0b3JlOiBJQ2FjaGVTdG9yZSwgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLmNvZywgeyAuLi5uZXcgRGVsb25DYWNoZUNvbmZpZygpLCAuLi5fIH0pO1xuICAgIHRoaXMubG9hZE1ldGEoKTtcbiAgICB0aGlzLnN0YXJ0RXhwaXJlTm90aWZ5KCk7XG4gIH1cblxuICBwcml2YXRlIGRlZXBHZXQob2JqOiBhbnksIHBhdGg6IHN0cmluZ1tdLCBkZWZhdWx0VmFsdWU/OiBhbnkpIHtcbiAgICBpZiAoIW9iaikgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICBpZiAocGF0aC5sZW5ndGggPD0gMSkge1xuICAgICAgY29uc3QgY2hlY2tPYmogPSBwYXRoLmxlbmd0aCA/IG9ialtwYXRoWzBdXSA6IG9iajtcbiAgICAgIHJldHVybiB0eXBlb2YgY2hlY2tPYmogPT09ICd1bmRlZmluZWQnID8gZGVmYXVsdFZhbHVlIDogY2hlY2tPYmo7XG4gICAgfVxuICAgIHJldHVybiBwYXRoLnJlZHVjZSgobywgaykgPT4gb1trXSwgb2JqKSB8fCBkZWZhdWx0VmFsdWU7XG4gIH1cblxuICAvLyAjcmVnaW9uIG1ldGFcblxuICBwcml2YXRlIHB1c2hNZXRhKGtleTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMubWV0YS5oYXMoa2V5KSkgcmV0dXJuO1xuICAgIHRoaXMubWV0YS5hZGQoa2V5KTtcbiAgICB0aGlzLnNhdmVNZXRhKCk7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZU1ldGEoa2V5OiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMubWV0YS5oYXMoa2V5KSkgcmV0dXJuO1xuICAgIHRoaXMubWV0YS5kZWxldGUoa2V5KTtcbiAgICB0aGlzLnNhdmVNZXRhKCk7XG4gIH1cblxuICBwcml2YXRlIGxvYWRNZXRhKCkge1xuICAgIGNvbnN0IHJldCA9IHRoaXMuc3RvcmUuZ2V0KHRoaXMuY29nLm1ldGFfa2V5ISk7XG4gICAgaWYgKHJldCAmJiByZXQudikge1xuICAgICAgKHJldC52IGFzIHN0cmluZ1tdKS5mb3JFYWNoKGtleSA9PiB0aGlzLm1ldGEuYWRkKGtleSkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2F2ZU1ldGEoKSB7XG4gICAgY29uc3QgbWV0YURhdGE6IHN0cmluZ1tdID0gW107XG4gICAgdGhpcy5tZXRhLmZvckVhY2goa2V5ID0+IG1ldGFEYXRhLnB1c2goa2V5KSk7XG4gICAgdGhpcy5zdG9yZS5zZXQodGhpcy5jb2cubWV0YV9rZXkhLCB7IHY6IG1ldGFEYXRhLCBlOiAwIH0pO1xuICB9XG5cbiAgZ2V0TWV0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gc2V0XG5cbiAgLyoqXG4gICAqIFBlcnNpc3RlbnQgY2FjaGVkIGBPYnNlcnZhYmxlYCBvYmplY3QsIGZvciBleGFtcGxlOlxuICAgKiAtIGBzZXQoJ2RhdGEvMScsIHRoaXMuaHR0cC5nZXQoJ2RhdGEvMScpKS5zdWJzY3JpYmUoKWBcbiAgICogLSBgc2V0KCdkYXRhLzEnLCB0aGlzLmh0dHAuZ2V0KCdkYXRhLzEnKSwgeyBleHBpcmU6IDEwIH0pLnN1YnNjcmliZSgpYFxuICAgKi9cbiAgc2V0PFQ+KGtleTogc3RyaW5nLCBkYXRhOiBPYnNlcnZhYmxlPFQ+LCBvcHRpb25zPzogeyB0eXBlPzogJ3MnOyBleHBpcmU/OiBudW1iZXIgfSk6IE9ic2VydmFibGU8VD47XG4gIC8qKlxuICAgKiBQZXJzaXN0ZW50IGNhY2hlZCBgT2JzZXJ2YWJsZWAgb2JqZWN0LCBmb3IgZXhhbXBsZTpcbiAgICogLSBgc2V0KCdkYXRhLzEnLCB0aGlzLmh0dHAuZ2V0KCdkYXRhLzEnKSkuc3Vic2NyaWJlKClgXG4gICAqIC0gYHNldCgnZGF0YS8xJywgdGhpcy5odHRwLmdldCgnZGF0YS8xJyksIHsgZXhwaXJlOiAxMCB9KS5zdWJzY3JpYmUoKWBcbiAgICovXG4gIHNldChrZXk6IHN0cmluZywgZGF0YTogT2JzZXJ2YWJsZTxhbnk+LCBvcHRpb25zPzogeyB0eXBlPzogJ3MnOyBleHBpcmU/OiBudW1iZXIgfSk6IE9ic2VydmFibGU8YW55PjtcbiAgLyoqXG4gICAqIFBlcnNpc3RlbnQgY2FjaGVkIHNpbXBsZSBvYmplY3QsIGZvciBleGFtcGxlOlxuICAgKiAtIGBzZXQoJ2RhdGEvMScsIDEpYFxuICAgKiAtIGBzZXQoJ2RhdGEvMScsIDEsIHsgZXhwaXJlOiAxMCB9KWBcbiAgICovXG4gIHNldChrZXk6IHN0cmluZywgZGF0YToge30sIG9wdGlvbnM/OiB7IHR5cGU/OiAncyc7IGV4cGlyZT86IG51bWJlciB9KTogdm9pZDtcbiAgLyoqXG4gICAqIFBlcnNpc3RlbnQgY2FjaGVkIHNpbXBsZSBvYmplY3QgYW5kIHNwZWNpZnkgc3RvcmFnZSB0eXBlLCBmb3IgZXhhbXBsZSBjYWNoaW5nIGluIG1lbW9yeTpcbiAgICogLSBgc2V0KCdkYXRhLzEnLCAxLCB7IHR5cGU6ICdtJyB9KWBcbiAgICogLSBgc2V0KCdkYXRhLzEnLCAxLCB7IHR5cGU6ICdtJywgZXhwaXJlOiAxMCB9KWBcbiAgICovXG4gIHNldChrZXk6IHN0cmluZywgZGF0YToge30sIG9wdGlvbnM6IHsgdHlwZTogJ20nIHwgJ3MnOyBleHBpcmU/OiBudW1iZXIgfSk6IHZvaWQ7XG4gIC8qKlxuICAgKiDnvJPlrZjlr7nosaFcbiAgICovXG4gIHNldChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBkYXRhOiBhbnkgfCBPYnNlcnZhYmxlPGFueT4sXG4gICAgb3B0aW9uczoge1xuICAgICAgLyoqIOWtmOWCqOexu+Wei++8jCdtJyDooajnpLrlhoXlrZjvvIwncycg6KGo56S65oyB5LmFICovXG4gICAgICB0eXBlPzogJ20nIHwgJ3MnO1xuICAgICAgLyoqXG4gICAgICAgKiDov4fmnJ/ml7bpl7TvvIzljZXkvY0gYOenkmBcbiAgICAgICAqL1xuICAgICAgZXhwaXJlPzogbnVtYmVyO1xuICAgIH0gPSB7fSxcbiAgKTogYW55IHtcbiAgICBsZXQgZSA9IDA7XG4gICAgY29uc3QgeyB0eXBlLCBleHBpcmUgfSA9IHRoaXMuY29nO1xuICAgIG9wdGlvbnMgPSB7XG4gICAgICB0eXBlLFxuICAgICAgZXhwaXJlLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9O1xuICAgIGlmIChvcHRpb25zLmV4cGlyZSkge1xuICAgICAgZSA9IGFkZFNlY29uZHMobmV3IERhdGUoKSwgb3B0aW9ucy5leHBpcmUpLnZhbHVlT2YoKTtcbiAgICB9XG4gICAgaWYgKCEoZGF0YSBpbnN0YW5jZW9mIE9ic2VydmFibGUpKSB7XG4gICAgICB0aGlzLnNhdmUob3B0aW9ucy50eXBlISwga2V5LCB7IHY6IGRhdGEsIGUgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBkYXRhLnBpcGUoXG4gICAgICB0YXAoKHY6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLnNhdmUob3B0aW9ucy50eXBlISwga2V5LCB7IHYsIGUgfSk7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBzYXZlKHR5cGU6ICdtJyB8ICdzJywga2V5OiBzdHJpbmcsIHZhbHVlOiBJQ2FjaGUpIHtcbiAgICBpZiAodHlwZSA9PT0gJ20nKSB7XG4gICAgICB0aGlzLm1lbW9yeS5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RvcmUuc2V0KHRoaXMuY29nLnByZWZpeCArIGtleSwgdmFsdWUpO1xuICAgICAgdGhpcy5wdXNoTWV0YShrZXkpO1xuICAgIH1cbiAgICB0aGlzLnJ1bk5vdGlmeShrZXksICdzZXQnKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIGdldFxuXG4gIC8qKiDojrflj5bnvJPlrZjmlbDmja7vvIzoi6UgYGtleWAg5LiN5a2Y5Zyo5YiZIGBrZXlgIOS9nOS4ukhUVFDor7fmsYLnvJPlrZjlkI7ov5Tlm54gKi9cbiAgZ2V0PFQ+KFxuICAgIGtleTogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBtb2RlOiAncHJvbWlzZSc7XG4gICAgICB0eXBlPzogJ20nIHwgJ3MnO1xuICAgICAgZXhwaXJlPzogbnVtYmVyO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8VD47XG4gIC8qKiDojrflj5bnvJPlrZjmlbDmja7vvIzoi6UgYGtleWAg5LiN5a2Y5Zyo5YiZIGBrZXlgIOS9nOS4ukhUVFDor7fmsYLnvJPlrZjlkI7ov5Tlm54gKi9cbiAgZ2V0KFxuICAgIGtleTogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBtb2RlOiAncHJvbWlzZSc7XG4gICAgICB0eXBlPzogJ20nIHwgJ3MnO1xuICAgICAgZXhwaXJlPzogbnVtYmVyO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8YW55PjtcbiAgLyoqIOiOt+WPlue8k+WtmOaVsOaNru+8jOiLpSBga2V5YCDkuI3lrZjlnKjmiJblt7Lov4fmnJ/liJnov5Tlm54gbnVsbCAqL1xuICBnZXQoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9uczoge1xuICAgICAgbW9kZTogJ25vbmUnO1xuICAgICAgdHlwZT86ICdtJyB8ICdzJztcbiAgICAgIGV4cGlyZT86IG51bWJlcjtcbiAgICB9LFxuICApOiBhbnk7XG4gIGdldChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBtb2RlPzogJ3Byb21pc2UnIHwgJ25vbmUnO1xuICAgICAgdHlwZT86ICdtJyB8ICdzJztcbiAgICAgIGV4cGlyZT86IG51bWJlcjtcbiAgICB9ID0ge30sXG4gICk6IE9ic2VydmFibGU8YW55PiB8IGFueSB7XG4gICAgY29uc3QgaXNQcm9taXNlID0gb3B0aW9ucy5tb2RlICE9PSAnbm9uZScgJiYgdGhpcy5jb2cubW9kZSA9PT0gJ3Byb21pc2UnO1xuICAgIGNvbnN0IHZhbHVlOiBJQ2FjaGUgPSB0aGlzLm1lbW9yeS5oYXMoa2V5KSA/ICh0aGlzLm1lbW9yeS5nZXQoa2V5KSBhcyBJQ2FjaGUpIDogdGhpcy5zdG9yZS5nZXQodGhpcy5jb2cucHJlZml4ICsga2V5KTtcbiAgICBpZiAoIXZhbHVlIHx8ICh2YWx1ZS5lICYmIHZhbHVlLmUgPiAwICYmIHZhbHVlLmUgPCBuZXcgRGF0ZSgpLnZhbHVlT2YoKSkpIHtcbiAgICAgIGlmIChpc1Byb21pc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoa2V5KS5waXBlKFxuICAgICAgICAgIG1hcCgocmV0OiBhbnkpID0+IHRoaXMuZGVlcEdldChyZXQsIHRoaXMuY29nLnJlTmFtZSBhcyBzdHJpbmdbXSwgbnVsbCkpLFxuICAgICAgICAgIHRhcCh2ID0+IHRoaXMuc2V0KGtleSwgdiwgeyB0eXBlOiBvcHRpb25zLnR5cGUgYXMgYW55LCBleHBpcmU6IG9wdGlvbnMuZXhwaXJlIH0pKSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBpc1Byb21pc2UgPyBvZih2YWx1ZS52KSA6IHZhbHVlLnY7XG4gIH1cblxuICAvKiog6I635Y+W57yT5a2Y5pWw5o2u77yM6IulIGBrZXlgIOS4jeWtmOWcqOaIluW3sui/h+acn+WImei/lOWbniBudWxsICovXG4gIGdldE5vbmU8VD4oa2V5OiBzdHJpbmcpOiBUO1xuICAvKiog6I635Y+W57yT5a2Y5pWw5o2u77yM6IulIGBrZXlgIOS4jeWtmOWcqOaIluW3sui/h+acn+WImei/lOWbniBudWxsICovXG4gIGdldE5vbmUoa2V5OiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmdldChrZXksIHsgbW9kZTogJ25vbmUnIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOiOt+WPlue8k+WtmO+8jOiLpeS4jeWtmOWcqOWImeiuvue9ruaMgeS5heWMlue8k+WtmCBgT2JzZXJ2YWJsZWAg5a+56LGhXG4gICAqL1xuICB0cnlHZXQ8VD4oa2V5OiBzdHJpbmcsIGRhdGE6IE9ic2VydmFibGU8VD4sIG9wdGlvbnM/OiB7IHR5cGU/OiAncyc7IGV4cGlyZT86IG51bWJlciB9KTogT2JzZXJ2YWJsZTxUPjtcbiAgLyoqXG4gICAqIOiOt+WPlue8k+WtmO+8jOiLpeS4jeWtmOWcqOWImeiuvue9ruaMgeS5heWMlue8k+WtmCBgT2JzZXJ2YWJsZWAg5a+56LGhXG4gICAqL1xuICB0cnlHZXQoa2V5OiBzdHJpbmcsIGRhdGE6IE9ic2VydmFibGU8YW55Piwgb3B0aW9ucz86IHsgdHlwZT86ICdzJzsgZXhwaXJlPzogbnVtYmVyIH0pOiBPYnNlcnZhYmxlPGFueT47XG4gIC8qKlxuICAgKiDojrflj5bnvJPlrZjvvIzoi6XkuI3lrZjlnKjliJnorr7nva7mjIHkuYXljJbnvJPlrZjln7rnoYDlr7nosaFcbiAgICovXG4gIHRyeUdldChrZXk6IHN0cmluZywgZGF0YToge30sIG9wdGlvbnM/OiB7IHR5cGU/OiAncyc7IGV4cGlyZT86IG51bWJlciB9KTogYW55O1xuICAvKipcbiAgICog6I635Y+W57yT5a2Y77yM6Iul5LiN5a2Y5Zyo5YiZ6K6+572u5oyH5a6a57yT5a2Y57G75Z6L6L+b6KGM57yT5a2Y5a+56LGhXG4gICAqL1xuICB0cnlHZXQoa2V5OiBzdHJpbmcsIGRhdGE6IHt9LCBvcHRpb25zOiB7IHR5cGU6ICdtJyB8ICdzJzsgZXhwaXJlPzogbnVtYmVyIH0pOiBhbnk7XG5cbiAgLyoqXG4gICAqIOiOt+WPlue8k+WtmO+8jOiLpeS4jeWtmOWcqOWImeiuvue9rue8k+WtmOWvueixoVxuICAgKi9cbiAgdHJ5R2V0KFxuICAgIGtleTogc3RyaW5nLFxuICAgIGRhdGE6IGFueSB8IE9ic2VydmFibGU8YW55PixcbiAgICBvcHRpb25zOiB7XG4gICAgICAvKiog5a2Y5YKo57G75Z6L77yMJ20nIOihqOekuuWGheWtmO+8jCdzJyDooajnpLrmjIHkuYUgKi9cbiAgICAgIHR5cGU/OiAnbScgfCAncyc7XG4gICAgICAvKipcbiAgICAgICAqIOi/h+acn+aXtumXtO+8jOWNleS9jSBg56eSYFxuICAgICAgICovXG4gICAgICBleHBpcmU/OiBudW1iZXI7XG4gICAgfSA9IHt9LFxuICApOiBhbnkge1xuICAgIGNvbnN0IHJldCA9IHRoaXMuZ2V0Tm9uZShrZXkpO1xuICAgIGlmIChyZXQgPT09IG51bGwpIHtcbiAgICAgIGlmICghKGRhdGEgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSkge1xuICAgICAgICB0aGlzLnNldChrZXksIGRhdGEsIG9wdGlvbnMgYXMgYW55KTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnNldChrZXksIGRhdGEgYXMgT2JzZXJ2YWJsZTxhbnk+LCBvcHRpb25zIGFzIGFueSk7XG4gICAgfVxuICAgIHJldHVybiBvZihyZXQpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gaGFzXG5cbiAgLyoqIOaYr+WQpue8k+WtmCBga2V5YCAqL1xuICBoYXMoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tZW1vcnkuaGFzKGtleSkgfHwgdGhpcy5tZXRhLmhhcyhrZXkpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gcmVtb3ZlXG5cbiAgcHJpdmF0ZSBfcmVtb3ZlKGtleTogc3RyaW5nLCBuZWVkTm90aWZ5OiBib29sZWFuKSB7XG4gICAgaWYgKG5lZWROb3RpZnkpIHRoaXMucnVuTm90aWZ5KGtleSwgJ3JlbW92ZScpO1xuICAgIGlmICh0aGlzLm1lbW9yeS5oYXMoa2V5KSkge1xuICAgICAgdGhpcy5tZW1vcnkuZGVsZXRlKGtleSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc3RvcmUucmVtb3ZlKHRoaXMuY29nLnByZWZpeCArIGtleSk7XG4gICAgdGhpcy5yZW1vdmVNZXRhKGtleSk7XG4gIH1cblxuICAvKiog56e76Zmk57yT5a2YICovXG4gIHJlbW92ZShrZXk6IHN0cmluZykge1xuICAgIHRoaXMuX3JlbW92ZShrZXksIHRydWUpO1xuICB9XG5cbiAgLyoqIOa4heepuuaJgOaciee8k+WtmCAqL1xuICBjbGVhcigpIHtcbiAgICB0aGlzLm5vdGlmeUJ1ZmZlci5mb3JFYWNoKChfdiwgaykgPT4gdGhpcy5ydW5Ob3RpZnkoaywgJ3JlbW92ZScpKTtcbiAgICB0aGlzLm1lbW9yeS5jbGVhcigpO1xuICAgIHRoaXMubWV0YS5mb3JFYWNoKGtleSA9PiB0aGlzLnN0b3JlLnJlbW92ZSh0aGlzLmNvZy5wcmVmaXggKyBrZXkpKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIG5vdGlmeVxuXG4gIC8qKlxuICAgKiDorr7nva7nm5HlkKzpopHnjofvvIzljZXkvY3vvJrmr6vnp5LkuJTmnIDkvY4gYDIwbXNg77yM6buY6K6k77yaYDMwMDBtc2BcbiAgICovXG4gIHNldCBmcmVxKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLmZyZXFUaWNrID0gTWF0aC5tYXgoMjAsIHZhbHVlKTtcbiAgICB0aGlzLmFib3J0RXhwaXJlTm90aWZ5KCk7XG4gICAgdGhpcy5zdGFydEV4cGlyZU5vdGlmeSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGFydEV4cGlyZU5vdGlmeSgpIHtcbiAgICB0aGlzLmNoZWNrRXhwaXJlTm90aWZ5KCk7XG4gICAgdGhpcy5ydW5FeHBpcmVOb3RpZnkoKTtcbiAgfVxuXG4gIHByaXZhdGUgcnVuRXhwaXJlTm90aWZ5KCkge1xuICAgIHRoaXMuZnJlcVRpbWUgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY2hlY2tFeHBpcmVOb3RpZnkoKTtcbiAgICAgIHRoaXMucnVuRXhwaXJlTm90aWZ5KCk7XG4gICAgfSwgdGhpcy5mcmVxVGljayk7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrRXhwaXJlTm90aWZ5KCkge1xuICAgIGNvbnN0IHJlbW92ZWQ6IHN0cmluZ1tdID0gW107XG4gICAgdGhpcy5ub3RpZnlCdWZmZXIuZm9yRWFjaCgoX3YsIGtleSkgPT4ge1xuICAgICAgaWYgKHRoaXMuaGFzKGtleSkgJiYgdGhpcy5nZXROb25lKGtleSkgPT09IG51bGwpIHJlbW92ZWQucHVzaChrZXkpO1xuICAgIH0pO1xuICAgIHJlbW92ZWQuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgdGhpcy5ydW5Ob3RpZnkoa2V5LCAnZXhwaXJlJyk7XG4gICAgICB0aGlzLl9yZW1vdmUoa2V5LCBmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFib3J0RXhwaXJlTm90aWZ5KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmZyZXFUaW1lKTtcbiAgfVxuXG4gIHByaXZhdGUgcnVuTm90aWZ5KGtleTogc3RyaW5nLCB0eXBlOiBDYWNoZU5vdGlmeVR5cGUpIHtcbiAgICBpZiAoIXRoaXMubm90aWZ5QnVmZmVyLmhhcyhrZXkpKSByZXR1cm47XG4gICAgdGhpcy5ub3RpZnlCdWZmZXIuZ2V0KGtleSkhLm5leHQoeyB0eXBlLCB2YWx1ZTogdGhpcy5nZXROb25lKGtleSkgfSk7XG4gIH1cblxuICAvKipcbiAgICogYGtleWAg55uR5ZCs77yM5b2TIGBrZXlgIOWPmOabtOOAgei/h+acn+OAgeenu+mZpOaXtumAmuefpe+8jOazqOaEj+S7peS4i+iLpeW5sue7huiKgu+8mlxuICAgKlxuICAgKiAtIOiwg+eUqOWQjumZpOWGjeasoeiwg+eUqCBgY2FuY2VsTm90aWZ5YCDlkKbliJnmsLjov5zkuI3ov4fmnJ9cbiAgICogLSDnm5HlkKzlmajmr48gYGZyZXFgICjpu5jorqTvvJoz56eSKSDmiafooYzkuIDmrKHov4fmnJ/mo4Dmn6VcbiAgICovXG4gIG5vdGlmeShrZXk6IHN0cmluZyk6IE9ic2VydmFibGU8Q2FjaGVOb3RpZnlSZXN1bHQ+IHtcbiAgICBpZiAoIXRoaXMubm90aWZ5QnVmZmVyLmhhcyhrZXkpKSB7XG4gICAgICBjb25zdCBjaGFuZ2UkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxDYWNoZU5vdGlmeVJlc3VsdD4odGhpcy5nZXROb25lKGtleSkpO1xuICAgICAgdGhpcy5ub3RpZnlCdWZmZXIuc2V0KGtleSwgY2hhbmdlJCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm5vdGlmeUJ1ZmZlci5nZXQoa2V5KSEuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICog5Y+W5raIIGBrZXlgIOebkeWQrFxuICAgKi9cbiAgY2FuY2VsTm90aWZ5KGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm5vdGlmeUJ1ZmZlci5oYXMoa2V5KSkgcmV0dXJuO1xuICAgIHRoaXMubm90aWZ5QnVmZmVyLmdldChrZXkpIS51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMubm90aWZ5QnVmZmVyLmRlbGV0ZShrZXkpO1xuICB9XG5cbiAgLyoqIGBrZXlgIOaYr+WQpuW3sue7j+ebkeWQrCAqL1xuICBoYXNOb3RpZnkoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5ub3RpZnlCdWZmZXIuaGFzKGtleSk7XG4gIH1cblxuICAvKiog5riF56m65omA5pyJIGBrZXlgIOeahOebkeWQrCAqL1xuICBjbGVhck5vdGlmeSgpOiB2b2lkIHtcbiAgICB0aGlzLm5vdGlmeUJ1ZmZlci5mb3JFYWNoKHYgPT4gdi51bnN1YnNjcmliZSgpKTtcbiAgICB0aGlzLm5vdGlmeUJ1ZmZlci5jbGVhcigpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMubWVtb3J5LmNsZWFyKCk7XG4gICAgdGhpcy5hYm9ydEV4cGlyZU5vdGlmeSgpO1xuICAgIHRoaXMuY2xlYXJOb3RpZnkoKTtcbiAgfVxufVxuIl19