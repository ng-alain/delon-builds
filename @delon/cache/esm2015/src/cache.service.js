/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        Object.assign(this.cog, Object.assign({}, new DelonCacheConfig(), _));
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
        // expire
        /** @type {?} */
        let e = 0;
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
        const value = this.memory.has(key)
            ? ((/** @type {?} */ (this.memory.get(key))))
            : this.store.get(this.cog.prefix + key);
        if (!value || (value.e && value.e > 0 && value.e < new Date().valueOf())) {
            if (isPromise) {
                return this.http.get(key).pipe(map((/**
                 * @param {?} ret
                 * @return {?}
                 */
                (ret) => this._deepGet(ret, (/** @type {?} */ (this.cog.reName)), null))), tap((/**
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
/** @nocollapse */ CacheService.ngInjectableDef = i0.defineInjectable({ factory: function CacheService_Factory() { return new CacheService(i0.inject(i1.DelonCacheConfig), i0.inject(i2.DC_STORE_STORAGE_TOKEN), i0.inject(i3.HttpClient)); }, token: CacheService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jYWNoZS8iLCJzb3VyY2VzIjpbInNyYy9jYWNoZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxVQUFVLE1BQU0sc0JBQXNCLENBQUM7QUFDOUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7O0FBR3ZFLE1BQU0sT0FBTyxZQUFZOzs7Ozs7SUFXdkIsWUFDRSxDQUFtQixFQUNxQixLQUFrQixFQUNsRCxJQUFnQjtRQURnQixVQUFLLEdBQUwsS0FBSyxDQUFhO1FBQ2xELFNBQUksR0FBSixJQUFJLENBQVk7UUFiVCxXQUFNLEdBQXdCLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQ3hELGlCQUFZLEdBQW9ELElBQUksR0FBRyxFQUdyRixDQUFDO1FBQ0ksU0FBSSxHQUFnQixJQUFJLEdBQUcsRUFBVSxDQUFDO1FBQ3RDLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFFaEIsUUFBRyxHQUFxQixFQUFFLENBQUM7UUFPakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxvQkFBTyxJQUFJLGdCQUFnQixFQUFFLEVBQUssQ0FBQyxFQUFHLENBQUM7UUFDN0QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFD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SHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgYWRkU2Vjb25kcyBmcm9tICdkYXRlLWZucy9hZGRfc2Vjb25kcyc7XG5pbXBvcnQgeyBvZiwgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRGVsb25DYWNoZUNvbmZpZyB9IGZyb20gJy4vY2FjaGUuY29uZmlnJztcbmltcG9ydCB7IENhY2hlTm90aWZ5UmVzdWx0LCBDYWNoZU5vdGlmeVR5cGUsIElDYWNoZSwgSUNhY2hlU3RvcmUgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBEQ19TVE9SRV9TVE9SQUdFX1RPS0VOIH0gZnJvbSAnLi9sb2NhbC1zdG9yYWdlLWNhY2hlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIENhY2hlU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgbWVtb3J5OiBNYXA8c3RyaW5nLCBJQ2FjaGU+ID0gbmV3IE1hcDxzdHJpbmcsIElDYWNoZT4oKTtcbiAgcHJpdmF0ZSByZWFkb25seSBub3RpZnlCdWZmZXI6IE1hcDxzdHJpbmcsIEJlaGF2aW9yU3ViamVjdDxDYWNoZU5vdGlmeVJlc3VsdD4+ID0gbmV3IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgQmVoYXZpb3JTdWJqZWN0PENhY2hlTm90aWZ5UmVzdWx0PlxuICA+KCk7XG4gIHByaXZhdGUgbWV0YTogU2V0PHN0cmluZz4gPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgcHJpdmF0ZSBmcmVxVGljayA9IDMwMDA7XG4gIHByaXZhdGUgZnJlcVRpbWU7XG4gIHByaXZhdGUgY29nOiBEZWxvbkNhY2hlQ29uZmlnID0ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgXzogRGVsb25DYWNoZUNvbmZpZyxcbiAgICBASW5qZWN0KERDX1NUT1JFX1NUT1JBR0VfVE9LRU4pIHByaXZhdGUgc3RvcmU6IElDYWNoZVN0b3JlLFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLmNvZywgeyAuLi5uZXcgRGVsb25DYWNoZUNvbmZpZygpLCAuLi5fIH0pO1xuICAgIHRoaXMubG9hZE1ldGEoKTtcbiAgICB0aGlzLnN0YXJ0RXhwaXJlTm90aWZ5KCk7XG4gIH1cblxuICBfZGVlcEdldChvYmo6IGFueSwgcGF0aDogc3RyaW5nW10sIGRlZmF1bHRWYWx1ZT86IGFueSkge1xuICAgIGlmICghb2JqKSByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIGlmIChwYXRoLmxlbmd0aCA8PSAxKSB7XG4gICAgICBjb25zdCBjaGVja09iaiA9IHBhdGgubGVuZ3RoID8gb2JqW3BhdGhbMF1dIDogb2JqO1xuICAgICAgcmV0dXJuIHR5cGVvZiBjaGVja09iaiA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0VmFsdWUgOiBjaGVja09iajtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGgucmVkdWNlKChvLCBrKSA9PiBvW2tdLCBvYmopIHx8IGRlZmF1bHRWYWx1ZTtcbiAgfVxuXG4gIC8vICNyZWdpb24gbWV0YVxuXG4gIHByaXZhdGUgcHVzaE1ldGEoa2V5OiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5tZXRhLmhhcyhrZXkpKSByZXR1cm47XG4gICAgdGhpcy5tZXRhLmFkZChrZXkpO1xuICAgIHRoaXMuc2F2ZU1ldGEoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlTWV0YShrZXk6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5tZXRhLmhhcyhrZXkpKSByZXR1cm47XG4gICAgdGhpcy5tZXRhLmRlbGV0ZShrZXkpO1xuICAgIHRoaXMuc2F2ZU1ldGEoKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZE1ldGEoKSB7XG4gICAgY29uc3QgcmV0ID0gdGhpcy5zdG9yZS5nZXQodGhpcy5jb2cubWV0YV9rZXkhKTtcbiAgICBpZiAocmV0ICYmIHJldC52KSB7XG4gICAgICAocmV0LnYgYXMgc3RyaW5nW10pLmZvckVhY2goa2V5ID0+IHRoaXMubWV0YS5hZGQoa2V5KSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzYXZlTWV0YSgpIHtcbiAgICBjb25zdCBtZXRhRGF0YTogc3RyaW5nW10gPSBbXTtcbiAgICB0aGlzLm1ldGEuZm9yRWFjaChrZXkgPT4gbWV0YURhdGEucHVzaChrZXkpKTtcbiAgICB0aGlzLnN0b3JlLnNldCh0aGlzLmNvZy5tZXRhX2tleSEsIHsgdjogbWV0YURhdGEsIGU6IDAgfSk7XG4gIH1cblxuICBnZXRNZXRhKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGE7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBzZXRcblxuICAvKipcbiAgICog5oyB5LmF5YyW57yT5a2YIGBPYnNlcnZhYmxlYCDlr7nosaHvvIzkvovlpoLvvJpcbiAgICogLSBgc2V0KCdkYXRhLzEnLCB0aGlzLmh0dHAuZ2V0KCdkYXRhLzEnKSkuc3Vic2NyaWJlKClgXG4gICAqIC0gYHNldCgnZGF0YS8xJywgdGhpcy5odHRwLmdldCgnZGF0YS8xJyksIHsgZXhwaXJlOiAxMCB9KS5zdWJzY3JpYmUoKWBcbiAgICovXG4gIHNldDxUPihrZXk6IHN0cmluZywgZGF0YTogT2JzZXJ2YWJsZTxUPiwgb3B0aW9ucz86IHsgdHlwZT86ICdzJzsgZXhwaXJlPzogbnVtYmVyIH0pOiBPYnNlcnZhYmxlPFQ+O1xuICAvKipcbiAgICog5oyB5LmF5YyW57yT5a2YIGBPYnNlcnZhYmxlYCDlr7nosaHvvIzkvovlpoLvvJpcbiAgICogLSBgc2V0KCdkYXRhLzEnLCB0aGlzLmh0dHAuZ2V0KCdkYXRhLzEnKSkuc3Vic2NyaWJlKClgXG4gICAqIC0gYHNldCgnZGF0YS8xJywgdGhpcy5odHRwLmdldCgnZGF0YS8xJyksIHsgZXhwaXJlOiAxMCB9KS5zdWJzY3JpYmUoKWBcbiAgICovXG4gIHNldChrZXk6IHN0cmluZywgZGF0YTogT2JzZXJ2YWJsZTxhbnk+LCBvcHRpb25zPzogeyB0eXBlPzogJ3MnOyBleHBpcmU/OiBudW1iZXIgfSk6IE9ic2VydmFibGU8YW55PjtcbiAgLyoqXG4gICAqIOaMgeS5heWMlue8k+WtmOWfuuehgOWvueixoe+8jOS+i+Wmgu+8mlxuICAgKiAtIGBzZXQoJ2RhdGEvMScsIDEpYFxuICAgKiAtIGBzZXQoJ2RhdGEvMScsIDEsIHsgZXhwaXJlOiAxMCB9KWBcbiAgICovXG4gIHNldChrZXk6IHN0cmluZywgZGF0YToge30sIG9wdGlvbnM/OiB7IHR5cGU/OiAncyc7IGV4cGlyZT86IG51bWJlciB9KTogdm9pZDtcbiAgLyoqXG4gICAqIOaMh+Wumue8k+WtmOexu+Wei+i/m+ihjOe8k+WtmOWvueixoe+8jOS+i+WmguWGheWtmOe8k+WtmO+8mlxuICAgKiAtIGBzZXQoJ2RhdGEvMScsIDEsIHsgdHlwZTogJ20nIH0pYFxuICAgKiAtIGBzZXQoJ2RhdGEvMScsIDEsIHsgdHlwZTogJ20nLCBleHBpcmU6IDEwIH0pYFxuICAgKi9cbiAgc2V0KGtleTogc3RyaW5nLCBkYXRhOiB7fSwgb3B0aW9uczogeyB0eXBlOiAnbScgfCAncyc7IGV4cGlyZT86IG51bWJlciB9KTogdm9pZDtcbiAgLyoqXG4gICAqIOe8k+WtmOWvueixoVxuICAgKi9cbiAgc2V0KFxuICAgIGtleTogc3RyaW5nLFxuICAgIGRhdGE6IGFueSB8IE9ic2VydmFibGU8YW55PixcbiAgICBvcHRpb25zOiB7XG4gICAgICAvKiog5a2Y5YKo57G75Z6L77yMJ20nIOihqOekuuWGheWtmO+8jCdzJyDooajnpLrmjIHkuYUgKi9cbiAgICAgIHR5cGU/OiAnbScgfCAncyc7XG4gICAgICAvKipcbiAgICAgICAqIOi/h+acn+aXtumXtO+8jOWNleS9jSBg56eSYFxuICAgICAgICovXG4gICAgICBleHBpcmU/OiBudW1iZXI7XG4gICAgfSA9IHt9LFxuICApOiBhbnkge1xuICAgIC8vIGV4cGlyZVxuICAgIGxldCBlID0gMDtcbiAgICBpZiAob3B0aW9ucy5leHBpcmUpIHtcbiAgICAgIGUgPSBhZGRTZWNvbmRzKG5ldyBEYXRlKCksIG9wdGlvbnMuZXhwaXJlKS52YWx1ZU9mKCk7XG4gICAgfVxuICAgIGlmICghKGRhdGEgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSkge1xuICAgICAgdGhpcy5zYXZlKG9wdGlvbnMudHlwZSEsIGtleSwgeyB2OiBkYXRhLCBlIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YS5waXBlKFxuICAgICAgdGFwKCh2OiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5zYXZlKG9wdGlvbnMudHlwZSEsIGtleSwgeyB2LCBlIH0pO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc2F2ZSh0eXBlOiAnbScgfCAncycsIGtleTogc3RyaW5nLCB2YWx1ZTogSUNhY2hlKSB7XG4gICAgaWYgKHR5cGUgPT09ICdtJykge1xuICAgICAgdGhpcy5tZW1vcnkuc2V0KGtleSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3JlLnNldCh0aGlzLmNvZy5wcmVmaXggKyBrZXksIHZhbHVlKTtcbiAgICAgIHRoaXMucHVzaE1ldGEoa2V5KTtcbiAgICB9XG4gICAgdGhpcy5ydW5Ob3RpZnkoa2V5LCAnc2V0Jyk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBnZXRcblxuICAvKiog6I635Y+W57yT5a2Y5pWw5o2u77yM6IulIGBrZXlgIOS4jeWtmOWcqOWImSBga2V5YCDkvZzkuLpIVFRQ6K+35rGC57yT5a2Y5ZCO6L+U5ZueICovXG4gIGdldDxUPihcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgbW9kZTogJ3Byb21pc2UnO1xuICAgICAgdHlwZT86ICdtJyB8ICdzJztcbiAgICAgIGV4cGlyZT86IG51bWJlcjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPFQ+O1xuICAvKiog6I635Y+W57yT5a2Y5pWw5o2u77yM6IulIGBrZXlgIOS4jeWtmOWcqOWImSBga2V5YCDkvZzkuLpIVFRQ6K+35rGC57yT5a2Y5ZCO6L+U5ZueICovXG4gIGdldChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgbW9kZTogJ3Byb21pc2UnO1xuICAgICAgdHlwZT86ICdtJyB8ICdzJztcbiAgICAgIGV4cGlyZT86IG51bWJlcjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPGFueT47XG4gIC8qKiDojrflj5bnvJPlrZjmlbDmja7vvIzoi6UgYGtleWAg5LiN5a2Y5Zyo5oiW5bey6L+H5pyf5YiZ6L+U5ZueIG51bGwgKi9cbiAgZ2V0KFxuICAgIGtleTogc3RyaW5nLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG1vZGU6ICdub25lJztcbiAgICAgIHR5cGU/OiAnbScgfCAncyc7XG4gICAgICBleHBpcmU/OiBudW1iZXI7XG4gICAgfSxcbiAgKTogYW55O1xuICBnZXQoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9uczoge1xuICAgICAgbW9kZT86ICdwcm9taXNlJyB8ICdub25lJztcbiAgICAgIHR5cGU/OiAnbScgfCAncyc7XG4gICAgICBleHBpcmU/OiBudW1iZXI7XG4gICAgfSA9IHt9LFxuICApOiBPYnNlcnZhYmxlPGFueT4gfCBhbnkge1xuICAgIGNvbnN0IGlzUHJvbWlzZSA9IG9wdGlvbnMubW9kZSAhPT0gJ25vbmUnICYmIHRoaXMuY29nLm1vZGUgPT09ICdwcm9taXNlJztcbiAgICBjb25zdCB2YWx1ZTogSUNhY2hlID0gdGhpcy5tZW1vcnkuaGFzKGtleSlcbiAgICAgID8gKHRoaXMubWVtb3J5LmdldChrZXkpIGFzIElDYWNoZSlcbiAgICAgIDogdGhpcy5zdG9yZS5nZXQodGhpcy5jb2cucHJlZml4ICsga2V5KTtcbiAgICBpZiAoIXZhbHVlIHx8ICh2YWx1ZS5lICYmIHZhbHVlLmUgPiAwICYmIHZhbHVlLmUgPCBuZXcgRGF0ZSgpLnZhbHVlT2YoKSkpIHtcbiAgICAgIGlmIChpc1Byb21pc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoa2V5KS5waXBlKFxuICAgICAgICAgIG1hcCgocmV0OiBhbnkpID0+IHRoaXMuX2RlZXBHZXQocmV0LCB0aGlzLmNvZy5yZU5hbWUgYXMgc3RyaW5nW10sIG51bGwpKSxcbiAgICAgICAgICB0YXAodiA9PiB0aGlzLnNldChrZXksIHYsIHsgdHlwZTogb3B0aW9ucy50eXBlIGFzIGFueSwgZXhwaXJlOiBvcHRpb25zLmV4cGlyZSB9KSksXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNQcm9taXNlID8gb2YodmFsdWUudikgOiB2YWx1ZS52O1xuICB9XG5cbiAgLyoqIOiOt+WPlue8k+WtmOaVsOaNru+8jOiLpSBga2V5YCDkuI3lrZjlnKjmiJblt7Lov4fmnJ/liJnov5Tlm54gbnVsbCAqL1xuICBnZXROb25lPFQ+KGtleTogc3RyaW5nKTogVDtcbiAgLyoqIOiOt+WPlue8k+WtmOaVsOaNru+8jOiLpSBga2V5YCDkuI3lrZjlnKjmiJblt7Lov4fmnJ/liJnov5Tlm54gbnVsbCAqL1xuICBnZXROb25lKGtleTogc3RyaW5nKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoa2V5LCB7IG1vZGU6ICdub25lJyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDojrflj5bnvJPlrZjvvIzoi6XkuI3lrZjlnKjliJnorr7nva7mjIHkuYXljJbnvJPlrZggYE9ic2VydmFibGVgIOWvueixoVxuICAgKi9cbiAgdHJ5R2V0PFQ+KGtleTogc3RyaW5nLCBkYXRhOiBPYnNlcnZhYmxlPFQ+LCBvcHRpb25zPzogeyB0eXBlPzogJ3MnOyBleHBpcmU/OiBudW1iZXIgfSk6IE9ic2VydmFibGU8VD47XG4gIC8qKlxuICAgKiDojrflj5bnvJPlrZjvvIzoi6XkuI3lrZjlnKjliJnorr7nva7mjIHkuYXljJbnvJPlrZggYE9ic2VydmFibGVgIOWvueixoVxuICAgKi9cbiAgdHJ5R2V0KGtleTogc3RyaW5nLCBkYXRhOiBPYnNlcnZhYmxlPGFueT4sIG9wdGlvbnM/OiB7IHR5cGU/OiAncyc7IGV4cGlyZT86IG51bWJlciB9KTogT2JzZXJ2YWJsZTxhbnk+O1xuICAvKipcbiAgICog6I635Y+W57yT5a2Y77yM6Iul5LiN5a2Y5Zyo5YiZ6K6+572u5oyB5LmF5YyW57yT5a2Y5Z+656GA5a+56LGhXG4gICAqL1xuICB0cnlHZXQoa2V5OiBzdHJpbmcsIGRhdGE6IHt9LCBvcHRpb25zPzogeyB0eXBlPzogJ3MnOyBleHBpcmU/OiBudW1iZXIgfSk6IGFueTtcbiAgLyoqXG4gICAqIOiOt+WPlue8k+WtmO+8jOiLpeS4jeWtmOWcqOWImeiuvue9ruaMh+Wumue8k+WtmOexu+Wei+i/m+ihjOe8k+WtmOWvueixoVxuICAgKi9cbiAgdHJ5R2V0KGtleTogc3RyaW5nLCBkYXRhOiB7fSwgb3B0aW9uczogeyB0eXBlOiAnbScgfCAncyc7IGV4cGlyZT86IG51bWJlciB9KTogYW55O1xuXG4gIC8qKlxuICAgKiDojrflj5bnvJPlrZjvvIzoi6XkuI3lrZjlnKjliJnorr7nva7nvJPlrZjlr7nosaFcbiAgICovXG4gIHRyeUdldChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBkYXRhOiBhbnkgfCBPYnNlcnZhYmxlPGFueT4sXG4gICAgb3B0aW9uczoge1xuICAgICAgLyoqIOWtmOWCqOexu+Wei++8jCdtJyDooajnpLrlhoXlrZjvvIwncycg6KGo56S65oyB5LmFICovXG4gICAgICB0eXBlPzogJ20nIHwgJ3MnO1xuICAgICAgLyoqXG4gICAgICAgKiDov4fmnJ/ml7bpl7TvvIzljZXkvY0gYOenkmBcbiAgICAgICAqL1xuICAgICAgZXhwaXJlPzogbnVtYmVyO1xuICAgIH0gPSB7fSxcbiAgKTogYW55IHtcbiAgICBjb25zdCByZXQgPSB0aGlzLmdldE5vbmUoa2V5KTtcbiAgICBpZiAocmV0ID09PSBudWxsKSB7XG4gICAgICBpZiAoIShkYXRhIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkpIHtcbiAgICAgICAgdGhpcy5zZXQoa2V5LCBkYXRhLCBvcHRpb25zIGFzIGFueSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5zZXQoa2V5LCBkYXRhIGFzIE9ic2VydmFibGU8YW55Piwgb3B0aW9ucyBhcyBhbnkpO1xuICAgIH1cbiAgICByZXR1cm4gb2YocmV0KTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIGhhc1xuXG4gIC8qKiDmmK/lkKbnvJPlrZggYGtleWAgKi9cbiAgaGFzKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubWVtb3J5LmhhcyhrZXkpIHx8IHRoaXMubWV0YS5oYXMoa2V5KTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHJlbW92ZVxuXG4gIHByaXZhdGUgX3JlbW92ZShrZXk6IHN0cmluZywgbmVlZE5vdGlmeTogYm9vbGVhbikge1xuICAgIGlmIChuZWVkTm90aWZ5KSB0aGlzLnJ1bk5vdGlmeShrZXksICdyZW1vdmUnKTtcbiAgICBpZiAodGhpcy5tZW1vcnkuaGFzKGtleSkpIHtcbiAgICAgIHRoaXMubWVtb3J5LmRlbGV0ZShrZXkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnN0b3JlLnJlbW92ZSh0aGlzLmNvZy5wcmVmaXggKyBrZXkpO1xuICAgIHRoaXMucmVtb3ZlTWV0YShrZXkpO1xuICB9XG5cbiAgLyoqIOenu+mZpOe8k+WtmCAqL1xuICByZW1vdmUoa2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZW1vdmUoa2V5LCB0cnVlKTtcbiAgfVxuXG4gIC8qKiDmuIXnqbrmiYDmnInnvJPlrZggKi9cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5ub3RpZnlCdWZmZXIuZm9yRWFjaCgoX3YsIGspID0+IHRoaXMucnVuTm90aWZ5KGssICdyZW1vdmUnKSk7XG4gICAgdGhpcy5tZW1vcnkuY2xlYXIoKTtcbiAgICB0aGlzLm1ldGEuZm9yRWFjaChrZXkgPT4gdGhpcy5zdG9yZS5yZW1vdmUodGhpcy5jb2cucHJlZml4ICsga2V5KSk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBub3RpZnlcblxuICAvKipcbiAgICog6K6+572u55uR5ZCs6aKR546H77yM5Y2V5L2N77ya5q+r56eS5LiU5pyA5L2OIGAyMG1zYO+8jOm7mOiupO+8mmAzMDAwbXNgXG4gICAqL1xuICBzZXQgZnJlcSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5mcmVxVGljayA9IE1hdGgubWF4KDIwLCB2YWx1ZSk7XG4gICAgdGhpcy5hYm9ydEV4cGlyZU5vdGlmeSgpO1xuICAgIHRoaXMuc3RhcnRFeHBpcmVOb3RpZnkoKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhcnRFeHBpcmVOb3RpZnkoKSB7XG4gICAgdGhpcy5jaGVja0V4cGlyZU5vdGlmeSgpO1xuICAgIHRoaXMucnVuRXhwaXJlTm90aWZ5KCk7XG4gIH1cblxuICBwcml2YXRlIHJ1bkV4cGlyZU5vdGlmeSgpIHtcbiAgICB0aGlzLmZyZXFUaW1lID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNoZWNrRXhwaXJlTm90aWZ5KCk7XG4gICAgICB0aGlzLnJ1bkV4cGlyZU5vdGlmeSgpO1xuICAgIH0sIHRoaXMuZnJlcVRpY2spO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0V4cGlyZU5vdGlmeSgpIHtcbiAgICBjb25zdCByZW1vdmVkOiBzdHJpbmdbXSA9IFtdO1xuICAgIHRoaXMubm90aWZ5QnVmZmVyLmZvckVhY2goKF92LCBrZXkpID0+IHtcbiAgICAgIGlmICh0aGlzLmhhcyhrZXkpICYmIHRoaXMuZ2V0Tm9uZShrZXkpID09PSBudWxsKSByZW1vdmVkLnB1c2goa2V5KTtcbiAgICB9KTtcbiAgICByZW1vdmVkLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIHRoaXMucnVuTm90aWZ5KGtleSwgJ2V4cGlyZScpO1xuICAgICAgdGhpcy5fcmVtb3ZlKGtleSwgZmFsc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhYm9ydEV4cGlyZU5vdGlmeSgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5mcmVxVGltZSk7XG4gIH1cblxuICBwcml2YXRlIHJ1bk5vdGlmeShrZXk6IHN0cmluZywgdHlwZTogQ2FjaGVOb3RpZnlUeXBlKSB7XG4gICAgaWYgKCF0aGlzLm5vdGlmeUJ1ZmZlci5oYXMoa2V5KSkgcmV0dXJuO1xuICAgIHRoaXMubm90aWZ5QnVmZmVyLmdldChrZXkpIS5uZXh0KHsgdHlwZSwgdmFsdWU6IHRoaXMuZ2V0Tm9uZShrZXkpIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGBrZXlgIOebkeWQrO+8jOW9kyBga2V5YCDlj5jmm7TjgIHov4fmnJ/jgIHnp7vpmaTml7bpgJrnn6XvvIzms6jmhI/ku6XkuIvoi6XlubLnu4boioLvvJpcbiAgICpcbiAgICogLSDosIPnlKjlkI7pmaTlho3mrKHosIPnlKggYGNhbmNlbE5vdGlmeWAg5ZCm5YiZ5rC46L+c5LiN6L+H5pyfXG4gICAqIC0g55uR5ZCs5Zmo5q+PIGBmcmVxYCAo6buY6K6k77yaM+enkikg5omn6KGM5LiA5qyh6L+H5pyf5qOA5p+lXG4gICAqL1xuICBub3RpZnkoa2V5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPENhY2hlTm90aWZ5UmVzdWx0PiB7XG4gICAgaWYgKCF0aGlzLm5vdGlmeUJ1ZmZlci5oYXMoa2V5KSkge1xuICAgICAgY29uc3QgY2hhbmdlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Q2FjaGVOb3RpZnlSZXN1bHQ+KHRoaXMuZ2V0Tm9uZShrZXkpKTtcbiAgICAgIHRoaXMubm90aWZ5QnVmZmVyLnNldChrZXksIGNoYW5nZSQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5ub3RpZnlCdWZmZXIuZ2V0KGtleSkhLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOWPlua2iCBga2V5YCDnm5HlkKxcbiAgICovXG4gIGNhbmNlbE5vdGlmeShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5ub3RpZnlCdWZmZXIuaGFzKGtleSkpIHJldHVybjtcbiAgICB0aGlzLm5vdGlmeUJ1ZmZlci5nZXQoa2V5KSEudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLm5vdGlmeUJ1ZmZlci5kZWxldGUoa2V5KTtcbiAgfVxuXG4gIC8qKiBga2V5YCDmmK/lkKblt7Lnu4/nm5HlkKwgKi9cbiAgaGFzTm90aWZ5KGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubm90aWZ5QnVmZmVyLmhhcyhrZXkpO1xuICB9XG5cbiAgLyoqIOa4heepuuaJgOaciSBga2V5YCDnmoTnm5HlkKwgKi9cbiAgY2xlYXJOb3RpZnkoKTogdm9pZCB7XG4gICAgdGhpcy5ub3RpZnlCdWZmZXIuZm9yRWFjaCh2ID0+IHYudW5zdWJzY3JpYmUoKSk7XG4gICAgdGhpcy5ub3RpZnlCdWZmZXIuY2xlYXIoKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm1lbW9yeS5jbGVhcigpO1xuICAgIHRoaXMuYWJvcnRFeHBpcmVOb3RpZnkoKTtcbiAgICB0aGlzLmNsZWFyTm90aWZ5KCk7XG4gIH1cbn1cbiJdfQ==