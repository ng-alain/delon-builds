/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
// tslint:disable:no-any
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
export class CacheService {
    /**
     * @param {?} options
     * @param {?} store
     * @param {?} http
     */
    constructor(options, store, http) {
        this.options = options;
        this.store = store;
        this.http = http;
        this.memory = new Map();
        this.notifyBuffer = new Map();
        this.meta = new Set();
        this.freqTick = 3000;
        this.loadMeta();
        this.startExpireNotify();
    }
    /**
     * @param {?} obj
     * @param {?} path
     * @param {?=} defaultValue
     * @return {?}
     */
    _deepGet(obj, path, defaultValue) {
        if (!obj)
            return defaultValue;
        if (path.length <= 1) {
            /** @type {?} */
            const checkObj = path.length ? obj[path[0]] : obj;
            return typeof checkObj === 'undefined' ? defaultValue : checkObj;
        }
        return path.reduce((o, k) => o[k], obj) || defaultValue;
    }
    // #region meta
    /**
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
     * @return {?}
     */
    loadMeta() {
        /** @type {?} */
        const ret = this.store.get(this.options.meta_key);
        if (ret && ret.v) {
            ((/** @type {?} */ (ret.v))).forEach(key => this.meta.add(key));
        }
    }
    /**
     * @return {?}
     */
    saveMeta() {
        /** @type {?} */
        const metaData = [];
        this.meta.forEach(key => metaData.push(key));
        this.store.set(this.options.meta_key, { v: metaData, e: 0 });
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
        // expire
        /** @type {?} */
        let e = 0;
        if (options.expire) {
            e = addSeconds(new Date(), options.expire).valueOf();
        }
        if (!(data instanceof Observable)) {
            this.save(options.type, key, { v: data, e });
            return;
        }
        return data.pipe(tap((v) => {
            this.save(options.type, key, { v, e });
        }));
    }
    /**
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
            this.store.set(this.options.prefix + key, value);
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
        const isPromise = options.mode !== 'none' && this.options.mode === 'promise';
        /** @type {?} */
        const value = this.memory.has(key)
            ? this.memory.get(key)
            : this.store.get(this.options.prefix + key);
        if (!value || (value.e && value.e > 0 && value.e < new Date().valueOf())) {
            if (isPromise) {
                return this.http
                    .get(key)
                    .pipe(
                // tslint:disable-next-line:no-any
                map((ret) => this._deepGet(ret, (/** @type {?} */ (this.options.reName)), null)), tap(v => this.set(key, v)));
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
        this.store.remove(this.options.prefix + key);
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
        this.notifyBuffer.forEach((v, k) => this.runNotify(k, 'remove'));
        this.memory.clear();
        this.meta.forEach(key => this.store.remove(this.options.prefix + key));
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
     * @return {?}
     */
    startExpireNotify() {
        this.checkExpireNotify();
        this.runExpireNotify();
    }
    /**
     * @return {?}
     */
    runExpireNotify() {
        this.freqTime = setTimeout(() => {
            this.checkExpireNotify();
            this.runExpireNotify();
        }, this.freqTick);
    }
    /**
     * @return {?}
     */
    checkExpireNotify() {
        /** @type {?} */
        const removed = [];
        this.notifyBuffer.forEach((v, key) => {
            if (this.has(key) && this.getNone(key) === null)
                removed.push(key);
        });
        removed.forEach(key => {
            this.runNotify(key, 'expire');
            this._remove(key, false);
        });
    }
    /**
     * @return {?}
     */
    abortExpireNotify() {
        clearTimeout(this.freqTime);
    }
    /**
     * @param {?} key
     * @param {?} type
     * @return {?}
     */
    runNotify(key, type) {
        if (!this.notifyBuffer.has(key))
            return;
        this.notifyBuffer.get(key).next({ type, value: this.getNone(key) });
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
        return this.notifyBuffer.get(key).asObservable();
    }
    /**
     * 取消 `key` 监听
     * @param {?} key
     * @return {?}
     */
    cancelNotify(key) {
        if (!this.notifyBuffer.has(key))
            return;
        this.notifyBuffer.get(key).unsubscribe();
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
        this.notifyBuffer.forEach(v => v.unsubscribe());
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
/** @nocollapse */ CacheService.ngInjectableDef = i0.defineInjectable({ factory: function CacheService_Factory() { return new CacheService(i0.inject(i1.DelonCacheConfig), i0.inject(i2.DC_STORE_STORAGE_TOKEN), i0.inject(i3.HttpClient)); }, token: CacheService, providedIn: "root" });
if (false) {
    /** @type {?} */
    CacheService.prototype.memory;
    /** @type {?} */
    CacheService.prototype.notifyBuffer;
    /** @type {?} */
    CacheService.prototype.meta;
    /** @type {?} */
    CacheService.prototype.freqTick;
    /** @type {?} */
    CacheService.prototype.freqTime;
    /** @type {?} */
    CacheService.prototype.options;
    /** @type {?} */
    CacheService.prototype.store;
    /** @type {?} */
    CacheService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jYWNoZS8iLCJzb3VyY2VzIjpbInNyYy9jYWNoZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sVUFBVSxNQUFNLHNCQUFzQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxFQUFFLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBT2xELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7OztBQUd2RSxNQUFNLE9BQU8sWUFBWTs7Ozs7O0lBT3ZCLFlBQ1UsT0FBeUIsRUFDTyxLQUFrQixFQUNsRCxJQUFnQjtRQUZoQixZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUNPLFVBQUssR0FBTCxLQUFLLENBQWE7UUFDbEQsU0FBSSxHQUFKLElBQUksQ0FBWTtRQVRULFdBQU0sR0FBd0IsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFDeEQsaUJBQVksR0FBb0QsSUFBSSxHQUFHLEVBQThDLENBQUM7UUFDL0gsU0FBSSxHQUFnQixJQUFJLEdBQUcsRUFBVSxDQUFDO1FBQ3RDLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFRdEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7Ozs7SUFFRCxRQUFRLENBQUMsR0FBUSxFQUFFLElBQWMsRUFBRSxZQUFrQjtRQUNuRCxJQUFJLENBQUMsR0FBRztZQUFF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QUFPLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBR0QsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7OztJQUlELFdBQVc7UUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7WUFyWUYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztZQVR6QixnQkFBZ0I7NENBbUJwQixNQUFNLFNBQUMsc0JBQXNCO1lBekJ6QixVQUFVOzs7OztJQWlCakIsOEJBQXlFOztJQUN6RSxvQ0FBdUk7O0lBQ3ZJLDRCQUE4Qzs7SUFDOUMsZ0NBQXdCOztJQUN4QixnQ0FBaUI7O0lBR2YsK0JBQWlDOztJQUNqQyw2QkFBMEQ7O0lBQzFELDRCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm5vLWFueVxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgYWRkU2Vjb25kcyBmcm9tICdkYXRlLWZucy9hZGRfc2Vjb25kcyc7XG5pbXBvcnQgeyBvZiwgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRGVsb25DYWNoZUNvbmZpZyB9IGZyb20gJy4vY2FjaGUuY29uZmlnJztcbmltcG9ydCB7XG4gIENhY2hlTm90aWZ5UmVzdWx0LFxuICBDYWNoZU5vdGlmeVR5cGUsXG4gIElDYWNoZSxcbiAgSUNhY2hlU3RvcmUsXG59IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IERDX1NUT1JFX1NUT1JBR0VfVE9LRU4gfSBmcm9tICcuL2xvY2FsLXN0b3JhZ2UtY2FjaGUuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ2FjaGVTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSByZWFkb25seSBtZW1vcnk6IE1hcDxzdHJpbmcsIElDYWNoZT4gPSBuZXcgTWFwPHN0cmluZywgSUNhY2hlPigpO1xuICBwcml2YXRlIHJlYWRvbmx5IG5vdGlmeUJ1ZmZlcjogTWFwPHN0cmluZywgQmVoYXZpb3JTdWJqZWN0PENhY2hlTm90aWZ5UmVzdWx0Pj4gPSBuZXcgTWFwPHN0cmluZywgQmVoYXZpb3JTdWJqZWN0PENhY2hlTm90aWZ5UmVzdWx0Pj4oKTtcbiAgcHJpdmF0ZSBtZXRhOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBwcml2YXRlIGZyZXFUaWNrID0gMzAwMDtcbiAgcHJpdmF0ZSBmcmVxVGltZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG9wdGlvbnM6IERlbG9uQ2FjaGVDb25maWcsXG4gICAgQEluamVjdChEQ19TVE9SRV9TVE9SQUdFX1RPS0VOKSBwcml2YXRlIHN0b3JlOiBJQ2FjaGVTdG9yZSxcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICkge1xuICAgIHRoaXMubG9hZE1ldGEoKTtcbiAgICB0aGlzLnN0YXJ0RXhwaXJlTm90aWZ5KCk7XG4gIH1cblxuICBfZGVlcEdldChvYmo6IGFueSwgcGF0aDogc3RyaW5nW10sIGRlZmF1bHRWYWx1ZT86IGFueSkge1xuICAgIGlmICghb2JqKSByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIGlmIChwYXRoLmxlbmd0aCA8PSAxKSB7XG4gICAgICBjb25zdCBjaGVja09iaiA9IHBhdGgubGVuZ3RoID8gb2JqW3BhdGhbMF1dIDogb2JqO1xuICAgICAgcmV0dXJuIHR5cGVvZiBjaGVja09iaiA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0VmFsdWUgOiBjaGVja09iajtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGgucmVkdWNlKChvLCBrKSA9PiBvW2tdLCBvYmopIHx8IGRlZmF1bHRWYWx1ZTtcbiAgfVxuXG4gIC8vICNyZWdpb24gbWV0YVxuXG4gIHByaXZhdGUgcHVzaE1ldGEoa2V5OiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5tZXRhLmhhcyhrZXkpKSByZXR1cm47XG4gICAgdGhpcy5tZXRhLmFkZChrZXkpO1xuICAgIHRoaXMuc2F2ZU1ldGEoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlTWV0YShrZXk6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5tZXRhLmhhcyhrZXkpKSByZXR1cm47XG4gICAgdGhpcy5tZXRhLmRlbGV0ZShrZXkpO1xuICAgIHRoaXMuc2F2ZU1ldGEoKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZE1ldGEoKSB7XG4gICAgY29uc3QgcmV0ID0gdGhpcy5zdG9yZS5nZXQodGhpcy5vcHRpb25zLm1ldGFfa2V5KTtcbiAgICBpZiAocmV0ICYmIHJldC52KSB7XG4gICAgICAocmV0LnYgYXMgc3RyaW5nW10pLmZvckVhY2goa2V5ID0+IHRoaXMubWV0YS5hZGQoa2V5KSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzYXZlTWV0YSgpIHtcbiAgICBjb25zdCBtZXRhRGF0YTogc3RyaW5nW10gPSBbXTtcbiAgICB0aGlzLm1ldGEuZm9yRWFjaChrZXkgPT4gbWV0YURhdGEucHVzaChrZXkpKTtcbiAgICB0aGlzLnN0b3JlLnNldCh0aGlzLm9wdGlvbnMubWV0YV9rZXksIHsgdjogbWV0YURhdGEsIGU6IDAgfSk7XG4gIH1cblxuICBnZXRNZXRhKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGE7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBzZXRcblxuICAvKipcbiAgICog5oyB5LmF5YyW57yT5a2YIGBPYnNlcnZhYmxlYCDlr7nosaHvvIzkvovlpoLvvJpcbiAgICogLSBgc2V0KCdkYXRhLzEnLCB0aGlzLmh0dHAuZ2V0KCdkYXRhLzEnKSkuc3Vic2NyaWJlKClgXG4gICAqIC0gYHNldCgnZGF0YS8xJywgdGhpcy5odHRwLmdldCgnZGF0YS8xJyksIHsgZXhwaXJlOiAxMCB9KS5zdWJzY3JpYmUoKWBcbiAgICovXG4gIHNldDxUPihcbiAgICBrZXk6IHN0cmluZyxcbiAgICBkYXRhOiBPYnNlcnZhYmxlPFQ+LFxuICAgIG9wdGlvbnM/OiB7IHR5cGU/OiAncyc7IGV4cGlyZT86IG51bWJlciB9LFxuICApOiBPYnNlcnZhYmxlPFQ+O1xuICAvKipcbiAgICog5oyB5LmF5YyW57yT5a2YIGBPYnNlcnZhYmxlYCDlr7nosaHvvIzkvovlpoLvvJpcbiAgICogLSBgc2V0KCdkYXRhLzEnLCB0aGlzLmh0dHAuZ2V0KCdkYXRhLzEnKSkuc3Vic2NyaWJlKClgXG4gICAqIC0gYHNldCgnZGF0YS8xJywgdGhpcy5odHRwLmdldCgnZGF0YS8xJyksIHsgZXhwaXJlOiAxMCB9KS5zdWJzY3JpYmUoKWBcbiAgICovXG4gIHNldChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBkYXRhOiBPYnNlcnZhYmxlPGFueT4sXG4gICAgb3B0aW9ucz86IHsgdHlwZT86ICdzJzsgZXhwaXJlPzogbnVtYmVyIH0sXG4gICk6IE9ic2VydmFibGU8YW55PjtcbiAgLyoqXG4gICAqIOaMgeS5heWMlue8k+WtmOWfuuehgOWvueixoe+8jOS+i+Wmgu+8mlxuICAgKiAtIGBzZXQoJ2RhdGEvMScsIDEpYFxuICAgKiAtIGBzZXQoJ2RhdGEvMScsIDEsIHsgZXhwaXJlOiAxMCB9KWBcbiAgICovXG4gIHNldChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBkYXRhOiB7fSxcbiAgICBvcHRpb25zPzogeyB0eXBlPzogJ3MnOyBleHBpcmU/OiBudW1iZXIgfSxcbiAgKTogdm9pZDtcbiAgLyoqXG4gICAqIOaMh+Wumue8k+WtmOexu+Wei+i/m+ihjOe8k+WtmOWvueixoe+8jOS+i+WmguWGheWtmOe8k+WtmO+8mlxuICAgKiAtIGBzZXQoJ2RhdGEvMScsIDEsIHsgdHlwZTogJ20nIH0pYFxuICAgKiAtIGBzZXQoJ2RhdGEvMScsIDEsIHsgdHlwZTogJ20nLCBleHBpcmU6IDEwIH0pYFxuICAgKi9cbiAgc2V0KFxuICAgIGtleTogc3RyaW5nLFxuICAgIGRhdGE6IHt9LFxuICAgIG9wdGlvbnM6IHsgdHlwZTogJ20nIHwgJ3MnOyBleHBpcmU/OiBudW1iZXIgfSxcbiAgKTogdm9pZDtcbiAgLyoqXG4gICAqIOe8k+WtmOWvueixoVxuICAgKi9cbiAgc2V0KFxuICAgIGtleTogc3RyaW5nLFxuICAgIGRhdGE6IGFueSB8IE9ic2VydmFibGU8YW55PixcbiAgICBvcHRpb25zOiB7XG4gICAgICAvKiog5a2Y5YKo57G75Z6L77yMJ20nIOihqOekuuWGheWtmO+8jCdzJyDooajnpLrmjIHkuYUgKi9cbiAgICAgIHR5cGU/OiAnbScgfCAncyc7XG4gICAgICAvKipcbiAgICAgICAqIOi/h+acn+aXtumXtO+8jOWNleS9jSBg56eSYFxuICAgICAgICovXG4gICAgICBleHBpcmU/OiBudW1iZXI7XG4gICAgfSA9IHt9LFxuICApOiBhbnkge1xuICAgIC8vIGV4cGlyZVxuICAgIGxldCBlID0gMDtcbiAgICBpZiAob3B0aW9ucy5leHBpcmUpIHtcbiAgICAgIGUgPSBhZGRTZWNvbmRzKG5ldyBEYXRlKCksIG9wdGlvbnMuZXhwaXJlKS52YWx1ZU9mKCk7XG4gICAgfVxuICAgIGlmICghKGRhdGEgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSkge1xuICAgICAgdGhpcy5zYXZlKG9wdGlvbnMudHlwZSwga2V5LCB7IHY6IGRhdGEsIGUgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBkYXRhLnBpcGUoXG4gICAgICB0YXAoKHY6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLnNhdmUob3B0aW9ucy50eXBlLCBrZXksIHsgdiwgZSB9KTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHNhdmUodHlwZTogJ20nIHwgJ3MnLCBrZXk6IHN0cmluZywgdmFsdWU6IElDYWNoZSkge1xuICAgIGlmICh0eXBlID09PSAnbScpIHtcbiAgICAgIHRoaXMubWVtb3J5LnNldChrZXksIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9yZS5zZXQodGhpcy5vcHRpb25zLnByZWZpeCArIGtleSwgdmFsdWUpO1xuICAgICAgdGhpcy5wdXNoTWV0YShrZXkpO1xuICAgIH1cbiAgICB0aGlzLnJ1bk5vdGlmeShrZXksICdzZXQnKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIGdldFxuXG4gIC8qKiDojrflj5bnvJPlrZjmlbDmja7vvIzoi6UgYGtleWAg5LiN5a2Y5Zyo5YiZIGBrZXlgIOS9nOS4ukhUVFDor7fmsYLnvJPlrZjlkI7ov5Tlm54gKi9cbiAgZ2V0PFQ+KFxuICAgIGtleTogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBtb2RlOiAncHJvbWlzZSc7XG4gICAgICB0eXBlPzogJ20nIHwgJ3MnO1xuICAgICAgZXhwaXJlPzogbnVtYmVyO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8VD47XG4gIC8qKiDojrflj5bnvJPlrZjmlbDmja7vvIzoi6UgYGtleWAg5LiN5a2Y5Zyo5YiZIGBrZXlgIOS9nOS4ukhUVFDor7fmsYLnvJPlrZjlkI7ov5Tlm54gKi9cbiAgZ2V0KFxuICAgIGtleTogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBtb2RlOiAncHJvbWlzZSc7XG4gICAgICB0eXBlPzogJ20nIHwgJ3MnO1xuICAgICAgZXhwaXJlPzogbnVtYmVyO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8YW55PjtcbiAgLyoqIOiOt+WPlue8k+WtmOaVsOaNru+8jOiLpSBga2V5YCDkuI3lrZjlnKjmiJblt7Lov4fmnJ/liJnov5Tlm54gbnVsbCAqL1xuICBnZXQoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9uczoge1xuICAgICAgbW9kZTogJ25vbmUnO1xuICAgICAgdHlwZT86ICdtJyB8ICdzJztcbiAgICAgIGV4cGlyZT86IG51bWJlcjtcbiAgICB9LFxuICApOiBhbnk7XG4gIGdldChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBtb2RlPzogJ3Byb21pc2UnIHwgJ25vbmUnO1xuICAgICAgdHlwZT86ICdtJyB8ICdzJztcbiAgICAgIGV4cGlyZT86IG51bWJlcjtcbiAgICB9ID0ge30sXG4gICk6IE9ic2VydmFibGU8YW55PiB8IGFueSB7XG4gICAgY29uc3QgaXNQcm9taXNlID1cbiAgICAgIG9wdGlvbnMubW9kZSAhPT0gJ25vbmUnICYmIHRoaXMub3B0aW9ucy5tb2RlID09PSAncHJvbWlzZSc7XG4gICAgY29uc3QgdmFsdWU6IElDYWNoZSA9IHRoaXMubWVtb3J5LmhhcyhrZXkpXG4gICAgICA/IHRoaXMubWVtb3J5LmdldChrZXkpXG4gICAgICA6IHRoaXMuc3RvcmUuZ2V0KHRoaXMub3B0aW9ucy5wcmVmaXggKyBrZXkpO1xuICAgIGlmICghdmFsdWUgfHwgKHZhbHVlLmUgJiYgdmFsdWUuZSA+IDAgJiYgdmFsdWUuZSA8IG5ldyBEYXRlKCkudmFsdWVPZigpKSkge1xuICAgICAgaWYgKGlzUHJvbWlzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAgICAgLmdldChrZXkpXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAgICAgICBtYXAoKHJldDogYW55KSA9PiB0aGlzLl9kZWVwR2V0KHJldCwgdGhpcy5vcHRpb25zLnJlTmFtZSBhcyBzdHJpbmdbXSwgbnVsbCkpLFxuICAgICAgICAgICAgdGFwKHYgPT4gdGhpcy5zZXQoa2V5LCB2KSksXG4gICAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBpc1Byb21pc2UgPyBvZih2YWx1ZS52KSA6IHZhbHVlLnY7XG4gIH1cblxuICAvKiog6I635Y+W57yT5a2Y5pWw5o2u77yM6IulIGBrZXlgIOS4jeWtmOWcqOaIluW3sui/h+acn+WImei/lOWbniBudWxsICovXG4gIGdldE5vbmU8VD4oa2V5OiBzdHJpbmcpOiBUO1xuICAvKiog6I635Y+W57yT5a2Y5pWw5o2u77yM6IulIGBrZXlgIOS4jeWtmOWcqOaIluW3sui/h+acn+WImei/lOWbniBudWxsICovXG4gIGdldE5vbmUoa2V5OiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmdldChrZXksIHsgbW9kZTogJ25vbmUnIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOiOt+WPlue8k+WtmO+8jOiLpeS4jeWtmOWcqOWImeiuvue9ruaMgeS5heWMlue8k+WtmCBgT2JzZXJ2YWJsZWAg5a+56LGhXG4gICAqL1xuICB0cnlHZXQ8VD4oXG4gICAga2V5OiBzdHJpbmcsXG4gICAgZGF0YTogT2JzZXJ2YWJsZTxUPixcbiAgICBvcHRpb25zPzogeyB0eXBlPzogJ3MnOyBleHBpcmU/OiBudW1iZXIgfSxcbiAgKTogT2JzZXJ2YWJsZTxUPjtcbiAgLyoqXG4gICAqIOiOt+WPlue8k+WtmO+8jOiLpeS4jeWtmOWcqOWImeiuvue9ruaMgeS5heWMlue8k+WtmCBgT2JzZXJ2YWJsZWAg5a+56LGhXG4gICAqL1xuICB0cnlHZXQoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgZGF0YTogT2JzZXJ2YWJsZTxhbnk+LFxuICAgIG9wdGlvbnM/OiB7IHR5cGU/OiAncyc7IGV4cGlyZT86IG51bWJlciB9LFxuICApOiBPYnNlcnZhYmxlPGFueT47XG4gIC8qKlxuICAgKiDojrflj5bnvJPlrZjvvIzoi6XkuI3lrZjlnKjliJnorr7nva7mjIHkuYXljJbnvJPlrZjln7rnoYDlr7nosaFcbiAgICovXG4gIHRyeUdldChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBkYXRhOiB7fSxcbiAgICBvcHRpb25zPzogeyB0eXBlPzogJ3MnOyBleHBpcmU/OiBudW1iZXIgfSxcbiAgKTogYW55O1xuICAvKipcbiAgICog6I635Y+W57yT5a2Y77yM6Iul5LiN5a2Y5Zyo5YiZ6K6+572u5oyH5a6a57yT5a2Y57G75Z6L6L+b6KGM57yT5a2Y5a+56LGhXG4gICAqL1xuICB0cnlHZXQoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgZGF0YToge30sXG4gICAgb3B0aW9uczogeyB0eXBlOiAnbScgfCAncyc7IGV4cGlyZT86IG51bWJlciB9LFxuICApOiBhbnk7XG5cbiAgLyoqXG4gICAqIOiOt+WPlue8k+WtmO+8jOiLpeS4jeWtmOWcqOWImeiuvue9rue8k+WtmOWvueixoVxuICAgKi9cbiAgdHJ5R2V0KFxuICAgIGtleTogc3RyaW5nLFxuICAgIGRhdGE6IGFueSB8IE9ic2VydmFibGU8YW55PixcbiAgICBvcHRpb25zOiB7XG4gICAgICAvKiog5a2Y5YKo57G75Z6L77yMJ20nIOihqOekuuWGheWtmO+8jCdzJyDooajnpLrmjIHkuYUgKi9cbiAgICAgIHR5cGU/OiAnbScgfCAncyc7XG4gICAgICAvKipcbiAgICAgICAqIOi/h+acn+aXtumXtO+8jOWNleS9jSBg56eSYFxuICAgICAgICovXG4gICAgICBleHBpcmU/OiBudW1iZXI7XG4gICAgfSA9IHt9LFxuICApOiBhbnkge1xuICAgIGNvbnN0IHJldCA9IHRoaXMuZ2V0Tm9uZShrZXkpO1xuICAgIGlmIChyZXQgPT09IG51bGwpIHtcbiAgICAgIGlmICghKGRhdGEgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSkge1xuICAgICAgICB0aGlzLnNldChrZXksIGRhdGEsIG9wdGlvbnMgYXMgYW55KTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnNldChrZXksIGRhdGEgYXMgT2JzZXJ2YWJsZTxhbnk+LCBvcHRpb25zIGFzIGFueSk7XG4gICAgfVxuICAgIHJldHVybiBvZihyZXQpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gaGFzXG5cbiAgLyoqIOaYr+WQpue8k+WtmCBga2V5YCAqL1xuICBoYXMoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tZW1vcnkuaGFzKGtleSkgfHwgdGhpcy5tZXRhLmhhcyhrZXkpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gcmVtb3ZlXG5cbiAgcHJpdmF0ZSBfcmVtb3ZlKGtleTogc3RyaW5nLCBuZWVkTm90aWZ5OiBib29sZWFuKSB7XG4gICAgaWYgKG5lZWROb3RpZnkpIHRoaXMucnVuTm90aWZ5KGtleSwgJ3JlbW92ZScpO1xuICAgIGlmICh0aGlzLm1lbW9yeS5oYXMoa2V5KSkge1xuICAgICAgdGhpcy5tZW1vcnkuZGVsZXRlKGtleSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc3RvcmUucmVtb3ZlKHRoaXMub3B0aW9ucy5wcmVmaXggKyBrZXkpO1xuICAgIHRoaXMucmVtb3ZlTWV0YShrZXkpO1xuICB9XG5cbiAgLyoqIOenu+mZpOe8k+WtmCAqL1xuICByZW1vdmUoa2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZW1vdmUoa2V5LCB0cnVlKTtcbiAgfVxuXG4gIC8qKiDmuIXnqbrmiYDmnInnvJPlrZggKi9cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5ub3RpZnlCdWZmZXIuZm9yRWFjaCgodiwgaykgPT4gdGhpcy5ydW5Ob3RpZnkoaywgJ3JlbW92ZScpKTtcbiAgICB0aGlzLm1lbW9yeS5jbGVhcigpO1xuICAgIHRoaXMubWV0YS5mb3JFYWNoKGtleSA9PiB0aGlzLnN0b3JlLnJlbW92ZSh0aGlzLm9wdGlvbnMucHJlZml4ICsga2V5KSk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBub3RpZnlcblxuICAvKipcbiAgICog6K6+572u55uR5ZCs6aKR546H77yM5Y2V5L2N77ya5q+r56eS5LiU5pyA5L2OIGAyMG1zYO+8jOm7mOiupO+8mmAzMDAwbXNgXG4gICAqL1xuICBzZXQgZnJlcSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5mcmVxVGljayA9IE1hdGgubWF4KDIwLCB2YWx1ZSk7XG4gICAgdGhpcy5hYm9ydEV4cGlyZU5vdGlmeSgpO1xuICAgIHRoaXMuc3RhcnRFeHBpcmVOb3RpZnkoKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhcnRFeHBpcmVOb3RpZnkoKSB7XG4gICAgdGhpcy5jaGVja0V4cGlyZU5vdGlmeSgpO1xuICAgIHRoaXMucnVuRXhwaXJlTm90aWZ5KCk7XG4gIH1cblxuICBwcml2YXRlIHJ1bkV4cGlyZU5vdGlmeSgpIHtcbiAgICB0aGlzLmZyZXFUaW1lID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNoZWNrRXhwaXJlTm90aWZ5KCk7XG4gICAgICB0aGlzLnJ1bkV4cGlyZU5vdGlmeSgpO1xuICAgIH0sIHRoaXMuZnJlcVRpY2spO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0V4cGlyZU5vdGlmeSgpIHtcbiAgICBjb25zdCByZW1vdmVkOiBzdHJpbmdbXSA9IFtdO1xuICAgIHRoaXMubm90aWZ5QnVmZmVyLmZvckVhY2goKHYsIGtleSkgPT4ge1xuICAgICAgaWYgKHRoaXMuaGFzKGtleSkgJiYgdGhpcy5nZXROb25lKGtleSkgPT09IG51bGwpIHJlbW92ZWQucHVzaChrZXkpO1xuICAgIH0pO1xuICAgIHJlbW92ZWQuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgdGhpcy5ydW5Ob3RpZnkoa2V5LCAnZXhwaXJlJyk7XG4gICAgICB0aGlzLl9yZW1vdmUoa2V5LCBmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFib3J0RXhwaXJlTm90aWZ5KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmZyZXFUaW1lKTtcbiAgfVxuXG4gIHByaXZhdGUgcnVuTm90aWZ5KGtleTogc3RyaW5nLCB0eXBlOiBDYWNoZU5vdGlmeVR5cGUpIHtcbiAgICBpZiAoIXRoaXMubm90aWZ5QnVmZmVyLmhhcyhrZXkpKSByZXR1cm47XG4gICAgdGhpcy5ub3RpZnlCdWZmZXIuZ2V0KGtleSkubmV4dCh7IHR5cGUsIHZhbHVlOiB0aGlzLmdldE5vbmUoa2V5KSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBga2V5YCDnm5HlkKzvvIzlvZMgYGtleWAg5Y+Y5pu044CB6L+H5pyf44CB56e76Zmk5pe26YCa55+l77yM5rOo5oSP5Lul5LiL6Iul5bmy57uG6IqC77yaXG4gICAqXG4gICAqIC0g6LCD55So5ZCO6Zmk5YaN5qyh6LCD55SoIGBjYW5jZWxOb3RpZnlgIOWQpuWImeawuOi/nOS4jei/h+acn1xuICAgKiAtIOebkeWQrOWZqOavjyBgZnJlcWAgKOm7mOiupO+8mjPnp5IpIOaJp+ihjOS4gOasoei/h+acn+ajgOafpVxuICAgKi9cbiAgbm90aWZ5KGtleTogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYWNoZU5vdGlmeVJlc3VsdD4ge1xuICAgIGlmICghdGhpcy5ub3RpZnlCdWZmZXIuaGFzKGtleSkpIHtcbiAgICAgIGNvbnN0IGNoYW5nZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PENhY2hlTm90aWZ5UmVzdWx0Pih0aGlzLmdldE5vbmUoa2V5KSk7XG4gICAgICB0aGlzLm5vdGlmeUJ1ZmZlci5zZXQoa2V5LCBjaGFuZ2UkKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubm90aWZ5QnVmZmVyLmdldChrZXkpLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOWPlua2iCBga2V5YCDnm5HlkKxcbiAgICovXG4gIGNhbmNlbE5vdGlmeShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5ub3RpZnlCdWZmZXIuaGFzKGtleSkpIHJldHVybjtcbiAgICB0aGlzLm5vdGlmeUJ1ZmZlci5nZXQoa2V5KS51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMubm90aWZ5QnVmZmVyLmRlbGV0ZShrZXkpO1xuICB9XG5cbiAgLyoqIGBrZXlgIOaYr+WQpuW3sue7j+ebkeWQrCAqL1xuICBoYXNOb3RpZnkoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5ub3RpZnlCdWZmZXIuaGFzKGtleSk7XG4gIH1cblxuICAvKiog5riF56m65omA5pyJIGBrZXlgIOeahOebkeWQrCAqL1xuICBjbGVhck5vdGlmeSgpOiB2b2lkIHtcbiAgICB0aGlzLm5vdGlmeUJ1ZmZlci5mb3JFYWNoKHYgPT4gdi51bnN1YnNjcmliZSgpKTtcbiAgICB0aGlzLm5vdGlmeUJ1ZmZlci5jbGVhcigpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMubWVtb3J5LmNsZWFyKCk7XG4gICAgdGhpcy5hYm9ydEV4cGlyZU5vdGlmeSgpO1xuICAgIHRoaXMuY2xlYXJOb3RpZnkoKTtcbiAgfVxufVxuIl19