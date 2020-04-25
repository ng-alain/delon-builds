/**
 * @fileoverview added by tsickle
 * Generated from: src/cache.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import addSeconds from 'date-fns/addSeconds';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DelonCacheConfig } from './cache.config';
import { DC_STORE_STORAGE_TOKEN } from './local-storage-cache.service';
import * as i0 from "@angular/core";
import * as i1 from "./cache.config";
import * as i2 from "./local-storage-cache.service";
import * as i3 from "@angular/common/http";
export class CacheService {
    /**
     * @param {?} _
     * @param {?} store
     * @param {?} http
     */
    constructor(_, store, http) {
        this.store = store;
        this.http = http;
        this.memory = new Map();
        this.notifyBuffer = new Map();
        this.meta = new Set();
        this.freqTick = 3000;
        this.cog = {};
        Object.assign(this.cog, Object.assign(Object.assign({}, new DelonCacheConfig()), _));
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
    deepGet(obj, path, defaultValue) {
        if (!obj)
            return defaultValue;
        if (path.length <= 1) {
            /** @type {?} */
            const checkObj = path.length ? obj[path[0]] : obj;
            return typeof checkObj === 'undefined' ? defaultValue : checkObj;
        }
        return path.reduce((/**
         * @param {?} o
         * @param {?} k
         * @return {?}
         */
        (o, k) => o[k]), obj) || defaultValue;
    }
    // #region meta
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    pushMeta(key) {
        if (this.meta.has(key))
            return;
        this.meta.add(key);
        this.saveMeta();
    }
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    removeMeta(key) {
        if (!this.meta.has(key))
            return;
        this.meta.delete(key);
        this.saveMeta();
    }
    /**
     * @private
     * @return {?}
     */
    loadMeta() {
        /** @type {?} */
        const ret = this.store.get((/** @type {?} */ (this.cog.meta_key)));
        if (ret && ret.v) {
            ((/** @type {?} */ (ret.v))).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => this.meta.add(key)));
        }
    }
    /**
     * @private
     * @return {?}
     */
    saveMeta() {
        /** @type {?} */
        const metaData = [];
        this.meta.forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => metaData.push(key)));
        this.store.set((/** @type {?} */ (this.cog.meta_key)), { v: metaData, e: 0 });
    }
    /**
     * @return {?}
     */
    getMeta() {
        return this.meta;
    }
    /**
     * 缓存对象
     * @param {?} key
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    set(key, data, options = {}) {
        /** @type {?} */
        let e = 0;
        const { type, expire } = this.cog;
        options = Object.assign({ type,
            expire }, options);
        if (options.expire) {
            e = addSeconds(new Date(), options.expire).valueOf();
        }
        if (!(data instanceof Observable)) {
            this.save((/** @type {?} */ (options.type)), key, { v: data, e });
            return;
        }
        return data.pipe(tap((/**
         * @param {?} v
         * @return {?}
         */
        (v) => {
            this.save((/** @type {?} */ (options.type)), key, { v, e });
        })));
    }
    /**
     * @private
     * @param {?} type
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    save(type, key, value) {
        if (type === 'm') {
            this.memory.set(key, value);
        }
        else {
            this.store.set(this.cog.prefix + key, value);
            this.pushMeta(key);
        }
        this.runNotify(key, 'set');
    }
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    get(key, options = {}) {
        /** @type {?} */
        const isPromise = options.mode !== 'none' && this.cog.mode === 'promise';
        /** @type {?} */
        const value = this.memory.has(key) ? ((/** @type {?} */ (this.memory.get(key)))) : this.store.get(this.cog.prefix + key);
        if (!value || (value.e && value.e > 0 && value.e < new Date().valueOf())) {
            if (isPromise) {
                return this.http.get(key).pipe(map((/**
                 * @param {?} ret
                 * @return {?}
                 */
                (ret) => this.deepGet(ret, (/** @type {?} */ (this.cog.reName)), null))), tap((/**
                 * @param {?} v
                 * @return {?}
                 */
                v => this.set(key, v, { type: (/** @type {?} */ (options.type)), expire: options.expire }))));
            }
            return null;
        }
        return isPromise ? of(value.v) : value.v;
    }
    /**
     * 获取缓存数据，若 `key` 不存在或已过期则返回 null
     * @param {?} key
     * @return {?}
     */
    getNone(key) {
        return this.get(key, { mode: 'none' });
    }
    /**
     * 获取缓存，若不存在则设置缓存对象
     * @param {?} key
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    tryGet(key, data, options = {}) {
        /** @type {?} */
        const ret = this.getNone(key);
        if (ret === null) {
            if (!(data instanceof Observable)) {
                this.set(key, data, (/** @type {?} */ (options)));
                return data;
            }
            return this.set(key, (/** @type {?} */ (data)), (/** @type {?} */ (options)));
        }
        return of(ret);
    }
    // #endregion
    // #region has
    /**
     * 是否缓存 `key`
     * @param {?} key
     * @return {?}
     */
    has(key) {
        return this.memory.has(key) || this.meta.has(key);
    }
    // #endregion
    // #region remove
    /**
     * @private
     * @param {?} key
     * @param {?} needNotify
     * @return {?}
     */
    _remove(key, needNotify) {
        if (needNotify)
            this.runNotify(key, 'remove');
        if (this.memory.has(key)) {
            this.memory.delete(key);
            return;
        }
        this.store.remove(this.cog.prefix + key);
        this.removeMeta(key);
    }
    /**
     * 移除缓存
     * @param {?} key
     * @return {?}
     */
    remove(key) {
        this._remove(key, true);
    }
    /**
     * 清空所有缓存
     * @return {?}
     */
    clear() {
        this.notifyBuffer.forEach((/**
         * @param {?} _v
         * @param {?} k
         * @return {?}
         */
        (_v, k) => this.runNotify(k, 'remove')));
        this.memory.clear();
        this.meta.forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => this.store.remove(this.cog.prefix + key)));
    }
    // #endregion
    // #region notify
    /**
     * 设置监听频率，单位：毫秒且最低 `20ms`，默认：`3000ms`
     * @param {?} value
     * @return {?}
     */
    set freq(value) {
        this.freqTick = Math.max(20, value);
        this.abortExpireNotify();
        this.startExpireNotify();
    }
    /**
     * @private
     * @return {?}
     */
    startExpireNotify() {
        this.checkExpireNotify();
        this.runExpireNotify();
    }
    /**
     * @private
     * @return {?}
     */
    runExpireNotify() {
        this.freqTime = setTimeout((/**
         * @return {?}
         */
        () => {
            this.checkExpireNotify();
            this.runExpireNotify();
        }), this.freqTick);
    }
    /**
     * @private
     * @return {?}
     */
    checkExpireNotify() {
        /** @type {?} */
        const removed = [];
        this.notifyBuffer.forEach((/**
         * @param {?} _v
         * @param {?} key
         * @return {?}
         */
        (_v, key) => {
            if (this.has(key) && this.getNone(key) === null)
                removed.push(key);
        }));
        removed.forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            this.runNotify(key, 'expire');
            this._remove(key, false);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    abortExpireNotify() {
        clearTimeout(this.freqTime);
    }
    /**
     * @private
     * @param {?} key
     * @param {?} type
     * @return {?}
     */
    runNotify(key, type) {
        if (!this.notifyBuffer.has(key))
            return;
        (/** @type {?} */ (this.notifyBuffer.get(key))).next({ type, value: this.getNone(key) });
    }
    /**
     * `key` 监听，当 `key` 变更、过期、移除时通知，注意以下若干细节：
     *
     * - 调用后除再次调用 `cancelNotify` 否则永远不过期
     * - 监听器每 `freq` (默认：3秒) 执行一次过期检查
     * @param {?} key
     * @return {?}
     */
    notify(key) {
        if (!this.notifyBuffer.has(key)) {
            /** @type {?} */
            const change$ = new BehaviorSubject(this.getNone(key));
            this.notifyBuffer.set(key, change$);
        }
        return (/** @type {?} */ (this.notifyBuffer.get(key))).asObservable();
    }
    /**
     * 取消 `key` 监听
     * @param {?} key
     * @return {?}
     */
    cancelNotify(key) {
        if (!this.notifyBuffer.has(key))
            return;
        (/** @type {?} */ (this.notifyBuffer.get(key))).unsubscribe();
        this.notifyBuffer.delete(key);
    }
    /**
     * `key` 是否已经监听
     * @param {?} key
     * @return {?}
     */
    hasNotify(key) {
        return this.notifyBuffer.has(key);
    }
    /**
     * 清空所有 `key` 的监听
     * @return {?}
     */
    clearNotify() {
        this.notifyBuffer.forEach((/**
         * @param {?} v
         * @return {?}
         */
        v => v.unsubscribe()));
        this.notifyBuffer.clear();
    }
    // #endregion
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.memory.clear();
        this.abortExpireNotify();
        this.clearNotify();
    }
}
CacheService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
CacheService.ctorParameters = () => [
    { type: DelonCacheConfig },
    { type: undefined, decorators: [{ type: Inject, args: [DC_STORE_STORAGE_TOKEN,] }] },
    { type: HttpClient }
];
/** @nocollapse */ CacheService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CacheService_Factory() { return new CacheService(i0.ɵɵinject(i1.DelonCacheConfig), i0.ɵɵinject(i2.DC_STORE_STORAGE_TOKEN), i0.ɵɵinject(i3.HttpClient)); }, token: CacheService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jYWNoZS8iLCJzb3VyY2VzIjpbInNyYy9jYWNoZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sVUFBVSxNQUFNLHFCQUFxQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7OztBQUd2RSxNQUFNLE9BQU8sWUFBWTs7Ozs7O0lBUXZCLFlBQVksQ0FBbUIsRUFBMEMsS0FBa0IsRUFBVSxJQUFnQjtRQUE1QyxVQUFLLEdBQUwsS0FBSyxDQUFhO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBWTtRQVBwRyxXQUFNLEdBQXdCLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQ3hELGlCQUFZLEdBQW9ELElBQUksR0FBRyxFQUE4QyxDQUFDO1FBQy9ILFNBQUksR0FBZ0IsSUFBSSxHQUFHLEVBQVUsQ0FBQztRQUN0QyxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBRWhCLFFBQUcsR0FBcUIsRUFBRSxDQUFDO1FBR2pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsa0NBQU8sSUFBSSxnQkFBZ0IsRUFBRSxHQUFLLENBQUMsRUFBRyxDQUFDO1FBQzdELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FB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QUF3Qjs7Ozs7SUFDeEIsZ0NBQTRCOzs7OztJQUM1QiwyQkFBbUM7Ozs7O0lBRUYsNkJBQTBEOzs7OztJQUFFLDRCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IGFkZFNlY29uZHMgZnJvbSAnZGF0ZS1mbnMvYWRkU2Vjb25kcyc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBEZWxvbkNhY2hlQ29uZmlnIH0gZnJvbSAnLi9jYWNoZS5jb25maWcnO1xuaW1wb3J0IHsgQ2FjaGVOb3RpZnlSZXN1bHQsIENhY2hlTm90aWZ5VHlwZSwgSUNhY2hlLCBJQ2FjaGVTdG9yZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IERDX1NUT1JFX1NUT1JBR0VfVE9LRU4gfSBmcm9tICcuL2xvY2FsLXN0b3JhZ2UtY2FjaGUuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ2FjaGVTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSByZWFkb25seSBtZW1vcnk6IE1hcDxzdHJpbmcsIElDYWNoZT4gPSBuZXcgTWFwPHN0cmluZywgSUNhY2hlPigpO1xuICBwcml2YXRlIHJlYWRvbmx5IG5vdGlmeUJ1ZmZlcjogTWFwPHN0cmluZywgQmVoYXZpb3JTdWJqZWN0PENhY2hlTm90aWZ5UmVzdWx0Pj4gPSBuZXcgTWFwPHN0cmluZywgQmVoYXZpb3JTdWJqZWN0PENhY2hlTm90aWZ5UmVzdWx0Pj4oKTtcbiAgcHJpdmF0ZSBtZXRhOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBwcml2YXRlIGZyZXFUaWNrID0gMzAwMDtcbiAgcHJpdmF0ZSBmcmVxVGltZTogTnpTYWZlQW55O1xuICBwcml2YXRlIGNvZzogRGVsb25DYWNoZUNvbmZpZyA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKF86IERlbG9uQ2FjaGVDb25maWcsIEBJbmplY3QoRENfU1RPUkVfU1RPUkFHRV9UT0tFTikgcHJpdmF0ZSBzdG9yZTogSUNhY2hlU3RvcmUsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5jb2csIHsgLi4ubmV3IERlbG9uQ2FjaGVDb25maWcoKSwgLi4uXyB9KTtcbiAgICB0aGlzLmxvYWRNZXRhKCk7XG4gICAgdGhpcy5zdGFydEV4cGlyZU5vdGlmeSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBkZWVwR2V0KG9iajogTnpTYWZlQW55LCBwYXRoOiBzdHJpbmdbXSwgZGVmYXVsdFZhbHVlPzogTnpTYWZlQW55KSB7XG4gICAgaWYgKCFvYmopIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgaWYgKHBhdGgubGVuZ3RoIDw9IDEpIHtcbiAgICAgIGNvbnN0IGNoZWNrT2JqID0gcGF0aC5sZW5ndGggPyBvYmpbcGF0aFswXV0gOiBvYmo7XG4gICAgICByZXR1cm4gdHlwZW9mIGNoZWNrT2JqID09PSAndW5kZWZpbmVkJyA/IGRlZmF1bHRWYWx1ZSA6IGNoZWNrT2JqO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aC5yZWR1Y2UoKG8sIGspID0+IG9ba10sIG9iaikgfHwgZGVmYXVsdFZhbHVlO1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBtZXRhXG5cbiAgcHJpdmF0ZSBwdXNoTWV0YShrZXk6IHN0cmluZykge1xuICAgIGlmICh0aGlzLm1ldGEuaGFzKGtleSkpIHJldHVybjtcbiAgICB0aGlzLm1ldGEuYWRkKGtleSk7XG4gICAgdGhpcy5zYXZlTWV0YSgpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVNZXRhKGtleTogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLm1ldGEuaGFzKGtleSkpIHJldHVybjtcbiAgICB0aGlzLm1ldGEuZGVsZXRlKGtleSk7XG4gICAgdGhpcy5zYXZlTWV0YSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkTWV0YSgpIHtcbiAgICBjb25zdCByZXQgPSB0aGlzLnN0b3JlLmdldCh0aGlzLmNvZy5tZXRhX2tleSEpO1xuICAgIGlmIChyZXQgJiYgcmV0LnYpIHtcbiAgICAgIChyZXQudiBhcyBzdHJpbmdbXSkuZm9yRWFjaChrZXkgPT4gdGhpcy5tZXRhLmFkZChrZXkpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNhdmVNZXRhKCkge1xuICAgIGNvbnN0IG1ldGFEYXRhOiBzdHJpbmdbXSA9IFtdO1xuICAgIHRoaXMubWV0YS5mb3JFYWNoKGtleSA9PiBtZXRhRGF0YS5wdXNoKGtleSkpO1xuICAgIHRoaXMuc3RvcmUuc2V0KHRoaXMuY29nLm1ldGFfa2V5ISwgeyB2OiBtZXRhRGF0YSwgZTogMCB9KTtcbiAgfVxuXG4gIGdldE1ldGEoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHNldFxuXG4gIC8qKlxuICAgKiBQZXJzaXN0ZW50IGNhY2hlZCBgT2JzZXJ2YWJsZWAgb2JqZWN0LCBmb3IgZXhhbXBsZTpcbiAgICogLSBgc2V0KCdkYXRhLzEnLCB0aGlzLmh0dHAuZ2V0KCdkYXRhLzEnKSkuc3Vic2NyaWJlKClgXG4gICAqIC0gYHNldCgnZGF0YS8xJywgdGhpcy5odHRwLmdldCgnZGF0YS8xJyksIHsgZXhwaXJlOiAxMCB9KS5zdWJzY3JpYmUoKWBcbiAgICovXG4gIHNldDxUPihrZXk6IHN0cmluZywgZGF0YTogT2JzZXJ2YWJsZTxUPiwgb3B0aW9ucz86IHsgdHlwZT86ICdzJzsgZXhwaXJlPzogbnVtYmVyIH0pOiBPYnNlcnZhYmxlPFQ+O1xuICAvKipcbiAgICogUGVyc2lzdGVudCBjYWNoZWQgYE9ic2VydmFibGVgIG9iamVjdCwgZm9yIGV4YW1wbGU6XG4gICAqIC0gYHNldCgnZGF0YS8xJywgdGhpcy5odHRwLmdldCgnZGF0YS8xJykpLnN1YnNjcmliZSgpYFxuICAgKiAtIGBzZXQoJ2RhdGEvMScsIHRoaXMuaHR0cC5nZXQoJ2RhdGEvMScpLCB7IGV4cGlyZTogMTAgfSkuc3Vic2NyaWJlKClgXG4gICAqL1xuICBzZXQoa2V5OiBzdHJpbmcsIGRhdGE6IE9ic2VydmFibGU8TnpTYWZlQW55Piwgb3B0aW9ucz86IHsgdHlwZT86ICdzJzsgZXhwaXJlPzogbnVtYmVyIH0pOiBPYnNlcnZhYmxlPE56U2FmZUFueT47XG4gIC8qKlxuICAgKiBQZXJzaXN0ZW50IGNhY2hlZCBzaW1wbGUgb2JqZWN0LCBmb3IgZXhhbXBsZTpcbiAgICogLSBgc2V0KCdkYXRhLzEnLCAxKWBcbiAgICogLSBgc2V0KCdkYXRhLzEnLCAxLCB7IGV4cGlyZTogMTAgfSlgXG4gICAqL1xuICBzZXQoa2V5OiBzdHJpbmcsIGRhdGE6IHt9LCBvcHRpb25zPzogeyB0eXBlPzogJ3MnOyBleHBpcmU/OiBudW1iZXIgfSk6IHZvaWQ7XG4gIC8qKlxuICAgKiBQZXJzaXN0ZW50IGNhY2hlZCBzaW1wbGUgb2JqZWN0IGFuZCBzcGVjaWZ5IHN0b3JhZ2UgdHlwZSwgZm9yIGV4YW1wbGUgY2FjaGluZyBpbiBtZW1vcnk6XG4gICAqIC0gYHNldCgnZGF0YS8xJywgMSwgeyB0eXBlOiAnbScgfSlgXG4gICAqIC0gYHNldCgnZGF0YS8xJywgMSwgeyB0eXBlOiAnbScsIGV4cGlyZTogMTAgfSlgXG4gICAqL1xuICBzZXQoa2V5OiBzdHJpbmcsIGRhdGE6IHt9LCBvcHRpb25zOiB7IHR5cGU6ICdtJyB8ICdzJzsgZXhwaXJlPzogbnVtYmVyIH0pOiB2b2lkO1xuICAvKipcbiAgICog57yT5a2Y5a+56LGhXG4gICAqL1xuICBzZXQoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgZGF0YTogTnpTYWZlQW55IHwgT2JzZXJ2YWJsZTxOelNhZmVBbnk+LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIC8qKiDlrZjlgqjnsbvlnovvvIwnbScg6KGo56S65YaF5a2Y77yMJ3MnIOihqOekuuaMgeS5hSAqL1xuICAgICAgdHlwZT86ICdtJyB8ICdzJztcbiAgICAgIC8qKlxuICAgICAgICog6L+H5pyf5pe26Ze077yM5Y2V5L2NIGDnp5JgXG4gICAgICAgKi9cbiAgICAgIGV4cGlyZT86IG51bWJlcjtcbiAgICB9ID0ge30sXG4gICk6IE56U2FmZUFueSB7XG4gICAgbGV0IGUgPSAwO1xuICAgIGNvbnN0IHsgdHlwZSwgZXhwaXJlIH0gPSB0aGlzLmNvZztcbiAgICBvcHRpb25zID0ge1xuICAgICAgdHlwZSxcbiAgICAgIGV4cGlyZSxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfTtcbiAgICBpZiAob3B0aW9ucy5leHBpcmUpIHtcbiAgICAgIGUgPSBhZGRTZWNvbmRzKG5ldyBEYXRlKCksIG9wdGlvbnMuZXhwaXJlKS52YWx1ZU9mKCk7XG4gICAgfVxuICAgIGlmICghKGRhdGEgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSkge1xuICAgICAgdGhpcy5zYXZlKG9wdGlvbnMudHlwZSEsIGtleSwgeyB2OiBkYXRhLCBlIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YS5waXBlKFxuICAgICAgdGFwKCh2OiBOelNhZmVBbnkpID0+IHtcbiAgICAgICAgdGhpcy5zYXZlKG9wdGlvbnMudHlwZSEsIGtleSwgeyB2LCBlIH0pO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc2F2ZSh0eXBlOiAnbScgfCAncycsIGtleTogc3RyaW5nLCB2YWx1ZTogSUNhY2hlKSB7XG4gICAgaWYgKHR5cGUgPT09ICdtJykge1xuICAgICAgdGhpcy5tZW1vcnkuc2V0KGtleSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3JlLnNldCh0aGlzLmNvZy5wcmVmaXggKyBrZXksIHZhbHVlKTtcbiAgICAgIHRoaXMucHVzaE1ldGEoa2V5KTtcbiAgICB9XG4gICAgdGhpcy5ydW5Ob3RpZnkoa2V5LCAnc2V0Jyk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBnZXRcblxuICAvKiog6I635Y+W57yT5a2Y5pWw5o2u77yM6IulIGBrZXlgIOS4jeWtmOWcqOWImSBga2V5YCDkvZzkuLpIVFRQ6K+35rGC57yT5a2Y5ZCO6L+U5ZueICovXG4gIGdldDxUPihcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgbW9kZTogJ3Byb21pc2UnO1xuICAgICAgdHlwZT86ICdtJyB8ICdzJztcbiAgICAgIGV4cGlyZT86IG51bWJlcjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPFQ+O1xuICAvKiog6I635Y+W57yT5a2Y5pWw5o2u77yM6IulIGBrZXlgIOS4jeWtmOWcqOWImSBga2V5YCDkvZzkuLpIVFRQ6K+35rGC57yT5a2Y5ZCO6L+U5ZueICovXG4gIGdldChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgbW9kZTogJ3Byb21pc2UnO1xuICAgICAgdHlwZT86ICdtJyB8ICdzJztcbiAgICAgIGV4cGlyZT86IG51bWJlcjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPE56U2FmZUFueT47XG4gIC8qKiDojrflj5bnvJPlrZjmlbDmja7vvIzoi6UgYGtleWAg5LiN5a2Y5Zyo5oiW5bey6L+H5pyf5YiZ6L+U5ZueIG51bGwgKi9cbiAgZ2V0KFxuICAgIGtleTogc3RyaW5nLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG1vZGU6ICdub25lJztcbiAgICAgIHR5cGU/OiAnbScgfCAncyc7XG4gICAgICBleHBpcmU/OiBudW1iZXI7XG4gICAgfSxcbiAgKTogTnpTYWZlQW55O1xuICBnZXQoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9uczoge1xuICAgICAgbW9kZT86ICdwcm9taXNlJyB8ICdub25lJztcbiAgICAgIHR5cGU/OiAnbScgfCAncyc7XG4gICAgICBleHBpcmU/OiBudW1iZXI7XG4gICAgfSA9IHt9LFxuICApOiBPYnNlcnZhYmxlPE56U2FmZUFueT4gfCBOelNhZmVBbnkge1xuICAgIGNvbnN0IGlzUHJvbWlzZSA9IG9wdGlvbnMubW9kZSAhPT0gJ25vbmUnICYmIHRoaXMuY29nLm1vZGUgPT09ICdwcm9taXNlJztcbiAgICBjb25zdCB2YWx1ZTogSUNhY2hlID0gdGhpcy5tZW1vcnkuaGFzKGtleSkgPyAodGhpcy5tZW1vcnkuZ2V0KGtleSkgYXMgSUNhY2hlKSA6IHRoaXMuc3RvcmUuZ2V0KHRoaXMuY29nLnByZWZpeCArIGtleSk7XG4gICAgaWYgKCF2YWx1ZSB8fCAodmFsdWUuZSAmJiB2YWx1ZS5lID4gMCAmJiB2YWx1ZS5lIDwgbmV3IERhdGUoKS52YWx1ZU9mKCkpKSB7XG4gICAgICBpZiAoaXNQcm9taXNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGtleSkucGlwZShcbiAgICAgICAgICBtYXAoKHJldDogTnpTYWZlQW55KSA9PiB0aGlzLmRlZXBHZXQocmV0LCB0aGlzLmNvZy5yZU5hbWUgYXMgc3RyaW5nW10sIG51bGwpKSxcbiAgICAgICAgICB0YXAodiA9PiB0aGlzLnNldChrZXksIHYsIHsgdHlwZTogb3B0aW9ucy50eXBlIGFzIE56U2FmZUFueSwgZXhwaXJlOiBvcHRpb25zLmV4cGlyZSB9KSksXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNQcm9taXNlID8gb2YodmFsdWUudikgOiB2YWx1ZS52O1xuICB9XG5cbiAgLyoqIOiOt+WPlue8k+WtmOaVsOaNru+8jOiLpSBga2V5YCDkuI3lrZjlnKjmiJblt7Lov4fmnJ/liJnov5Tlm54gbnVsbCAqL1xuICBnZXROb25lPFQ+KGtleTogc3RyaW5nKTogVDtcbiAgLyoqIOiOt+WPlue8k+WtmOaVsOaNru+8jOiLpSBga2V5YCDkuI3lrZjlnKjmiJblt7Lov4fmnJ/liJnov5Tlm54gbnVsbCAqL1xuICBnZXROb25lKGtleTogc3RyaW5nKTogTnpTYWZlQW55IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoa2V5LCB7IG1vZGU6ICdub25lJyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDojrflj5bnvJPlrZjvvIzoi6XkuI3lrZjlnKjliJnorr7nva7mjIHkuYXljJbnvJPlrZggYE9ic2VydmFibGVgIOWvueixoVxuICAgKi9cbiAgdHJ5R2V0PFQ+KGtleTogc3RyaW5nLCBkYXRhOiBPYnNlcnZhYmxlPFQ+LCBvcHRpb25zPzogeyB0eXBlPzogJ3MnOyBleHBpcmU/OiBudW1iZXIgfSk6IE9ic2VydmFibGU8VD47XG4gIC8qKlxuICAgKiDojrflj5bnvJPlrZjvvIzoi6XkuI3lrZjlnKjliJnorr7nva7mjIHkuYXljJbnvJPlrZggYE9ic2VydmFibGVgIOWvueixoVxuICAgKi9cbiAgdHJ5R2V0KGtleTogc3RyaW5nLCBkYXRhOiBPYnNlcnZhYmxlPE56U2FmZUFueT4sIG9wdGlvbnM/OiB7IHR5cGU/OiAncyc7IGV4cGlyZT86IG51bWJlciB9KTogT2JzZXJ2YWJsZTxOelNhZmVBbnk+O1xuICAvKipcbiAgICog6I635Y+W57yT5a2Y77yM6Iul5LiN5a2Y5Zyo5YiZ6K6+572u5oyB5LmF5YyW57yT5a2Y5Z+656GA5a+56LGhXG4gICAqL1xuICB0cnlHZXQoa2V5OiBzdHJpbmcsIGRhdGE6IHt9LCBvcHRpb25zPzogeyB0eXBlPzogJ3MnOyBleHBpcmU/OiBudW1iZXIgfSk6IE56U2FmZUFueTtcbiAgLyoqXG4gICAqIOiOt+WPlue8k+WtmO+8jOiLpeS4jeWtmOWcqOWImeiuvue9ruaMh+Wumue8k+WtmOexu+Wei+i/m+ihjOe8k+WtmOWvueixoVxuICAgKi9cbiAgdHJ5R2V0KGtleTogc3RyaW5nLCBkYXRhOiB7fSwgb3B0aW9uczogeyB0eXBlOiAnbScgfCAncyc7IGV4cGlyZT86IG51bWJlciB9KTogTnpTYWZlQW55O1xuXG4gIC8qKlxuICAgKiDojrflj5bnvJPlrZjvvIzoi6XkuI3lrZjlnKjliJnorr7nva7nvJPlrZjlr7nosaFcbiAgICovXG4gIHRyeUdldChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBkYXRhOiBOelNhZmVBbnkgfCBPYnNlcnZhYmxlPE56U2FmZUFueT4sXG4gICAgb3B0aW9uczoge1xuICAgICAgLyoqIOWtmOWCqOexu+Wei++8jCdtJyDooajnpLrlhoXlrZjvvIwncycg6KGo56S65oyB5LmFICovXG4gICAgICB0eXBlPzogJ20nIHwgJ3MnO1xuICAgICAgLyoqXG4gICAgICAgKiDov4fmnJ/ml7bpl7TvvIzljZXkvY0gYOenkmBcbiAgICAgICAqL1xuICAgICAgZXhwaXJlPzogbnVtYmVyO1xuICAgIH0gPSB7fSxcbiAgKTogTnpTYWZlQW55IHtcbiAgICBjb25zdCByZXQgPSB0aGlzLmdldE5vbmUoa2V5KTtcbiAgICBpZiAocmV0ID09PSBudWxsKSB7XG4gICAgICBpZiAoIShkYXRhIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkpIHtcbiAgICAgICAgdGhpcy5zZXQoa2V5LCBkYXRhLCBvcHRpb25zIGFzIE56U2FmZUFueSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5zZXQoa2V5LCBkYXRhIGFzIE9ic2VydmFibGU8TnpTYWZlQW55Piwgb3B0aW9ucyBhcyBOelNhZmVBbnkpO1xuICAgIH1cbiAgICByZXR1cm4gb2YocmV0KTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIGhhc1xuXG4gIC8qKiDmmK/lkKbnvJPlrZggYGtleWAgKi9cbiAgaGFzKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubWVtb3J5LmhhcyhrZXkpIHx8IHRoaXMubWV0YS5oYXMoa2V5KTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHJlbW92ZVxuXG4gIHByaXZhdGUgX3JlbW92ZShrZXk6IHN0cmluZywgbmVlZE5vdGlmeTogYm9vbGVhbikge1xuICAgIGlmIChuZWVkTm90aWZ5KSB0aGlzLnJ1bk5vdGlmeShrZXksICdyZW1vdmUnKTtcbiAgICBpZiAodGhpcy5tZW1vcnkuaGFzKGtleSkpIHtcbiAgICAgIHRoaXMubWVtb3J5LmRlbGV0ZShrZXkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnN0b3JlLnJlbW92ZSh0aGlzLmNvZy5wcmVmaXggKyBrZXkpO1xuICAgIHRoaXMucmVtb3ZlTWV0YShrZXkpO1xuICB9XG5cbiAgLyoqIOenu+mZpOe8k+WtmCAqL1xuICByZW1vdmUoa2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZW1vdmUoa2V5LCB0cnVlKTtcbiAgfVxuXG4gIC8qKiDmuIXnqbrmiYDmnInnvJPlrZggKi9cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5ub3RpZnlCdWZmZXIuZm9yRWFjaCgoX3YsIGspID0+IHRoaXMucnVuTm90aWZ5KGssICdyZW1vdmUnKSk7XG4gICAgdGhpcy5tZW1vcnkuY2xlYXIoKTtcbiAgICB0aGlzLm1ldGEuZm9yRWFjaChrZXkgPT4gdGhpcy5zdG9yZS5yZW1vdmUodGhpcy5jb2cucHJlZml4ICsga2V5KSk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBub3RpZnlcblxuICAvKipcbiAgICog6K6+572u55uR5ZCs6aKR546H77yM5Y2V5L2N77ya5q+r56eS5LiU5pyA5L2OIGAyMG1zYO+8jOm7mOiupO+8mmAzMDAwbXNgXG4gICAqL1xuICBzZXQgZnJlcSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5mcmVxVGljayA9IE1hdGgubWF4KDIwLCB2YWx1ZSk7XG4gICAgdGhpcy5hYm9ydEV4cGlyZU5vdGlmeSgpO1xuICAgIHRoaXMuc3RhcnRFeHBpcmVOb3RpZnkoKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhcnRFeHBpcmVOb3RpZnkoKSB7XG4gICAgdGhpcy5jaGVja0V4cGlyZU5vdGlmeSgpO1xuICAgIHRoaXMucnVuRXhwaXJlTm90aWZ5KCk7XG4gIH1cblxuICBwcml2YXRlIHJ1bkV4cGlyZU5vdGlmeSgpIHtcbiAgICB0aGlzLmZyZXFUaW1lID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNoZWNrRXhwaXJlTm90aWZ5KCk7XG4gICAgICB0aGlzLnJ1bkV4cGlyZU5vdGlmeSgpO1xuICAgIH0sIHRoaXMuZnJlcVRpY2spO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0V4cGlyZU5vdGlmeSgpIHtcbiAgICBjb25zdCByZW1vdmVkOiBzdHJpbmdbXSA9IFtdO1xuICAgIHRoaXMubm90aWZ5QnVmZmVyLmZvckVhY2goKF92LCBrZXkpID0+IHtcbiAgICAgIGlmICh0aGlzLmhhcyhrZXkpICYmIHRoaXMuZ2V0Tm9uZShrZXkpID09PSBudWxsKSByZW1vdmVkLnB1c2goa2V5KTtcbiAgICB9KTtcbiAgICByZW1vdmVkLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIHRoaXMucnVuTm90aWZ5KGtleSwgJ2V4cGlyZScpO1xuICAgICAgdGhpcy5fcmVtb3ZlKGtleSwgZmFsc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhYm9ydEV4cGlyZU5vdGlmeSgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5mcmVxVGltZSk7XG4gIH1cblxuICBwcml2YXRlIHJ1bk5vdGlmeShrZXk6IHN0cmluZywgdHlwZTogQ2FjaGVOb3RpZnlUeXBlKSB7XG4gICAgaWYgKCF0aGlzLm5vdGlmeUJ1ZmZlci5oYXMoa2V5KSkgcmV0dXJuO1xuICAgIHRoaXMubm90aWZ5QnVmZmVyLmdldChrZXkpIS5uZXh0KHsgdHlwZSwgdmFsdWU6IHRoaXMuZ2V0Tm9uZShrZXkpIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGBrZXlgIOebkeWQrO+8jOW9kyBga2V5YCDlj5jmm7TjgIHov4fmnJ/jgIHnp7vpmaTml7bpgJrnn6XvvIzms6jmhI/ku6XkuIvoi6XlubLnu4boioLvvJpcbiAgICpcbiAgICogLSDosIPnlKjlkI7pmaTlho3mrKHosIPnlKggYGNhbmNlbE5vdGlmeWAg5ZCm5YiZ5rC46L+c5LiN6L+H5pyfXG4gICAqIC0g55uR5ZCs5Zmo5q+PIGBmcmVxYCAo6buY6K6k77yaM+enkikg5omn6KGM5LiA5qyh6L+H5pyf5qOA5p+lXG4gICAqL1xuICBub3RpZnkoa2V5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPENhY2hlTm90aWZ5UmVzdWx0PiB7XG4gICAgaWYgKCF0aGlzLm5vdGlmeUJ1ZmZlci5oYXMoa2V5KSkge1xuICAgICAgY29uc3QgY2hhbmdlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Q2FjaGVOb3RpZnlSZXN1bHQ+KHRoaXMuZ2V0Tm9uZShrZXkpKTtcbiAgICAgIHRoaXMubm90aWZ5QnVmZmVyLnNldChrZXksIGNoYW5nZSQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5ub3RpZnlCdWZmZXIuZ2V0KGtleSkhLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOWPlua2iCBga2V5YCDnm5HlkKxcbiAgICovXG4gIGNhbmNlbE5vdGlmeShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5ub3RpZnlCdWZmZXIuaGFzKGtleSkpIHJldHVybjtcbiAgICB0aGlzLm5vdGlmeUJ1ZmZlci5nZXQoa2V5KSEudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLm5vdGlmeUJ1ZmZlci5kZWxldGUoa2V5KTtcbiAgfVxuXG4gIC8qKiBga2V5YCDmmK/lkKblt7Lnu4/nm5HlkKwgKi9cbiAgaGFzTm90aWZ5KGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubm90aWZ5QnVmZmVyLmhhcyhrZXkpO1xuICB9XG5cbiAgLyoqIOa4heepuuaJgOaciSBga2V5YCDnmoTnm5HlkKwgKi9cbiAgY2xlYXJOb3RpZnkoKTogdm9pZCB7XG4gICAgdGhpcy5ub3RpZnlCdWZmZXIuZm9yRWFjaCh2ID0+IHYudW5zdWJzY3JpYmUoKSk7XG4gICAgdGhpcy5ub3RpZnlCdWZmZXIuY2xlYXIoKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm1lbW9yeS5jbGVhcigpO1xuICAgIHRoaXMuYWJvcnRFeHBpcmVOb3RpZnkoKTtcbiAgICB0aGlzLmNsZWFyTm90aWZ5KCk7XG4gIH1cbn1cbiJdfQ==