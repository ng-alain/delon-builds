/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
/** @nocollapse */ CacheService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CacheService_Factory() { return new CacheService(i0.ɵɵinject(i1.DelonCacheConfig), i0.ɵɵinject(i2.DC_STORE_STORAGE_TOKEN), i0.ɵɵinject(i3.HttpClient)); }, token: CacheService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jYWNoZS8iLCJzb3VyY2VzIjpbInNyYy9jYWNoZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxVQUFVLE1BQU0sc0JBQXNCLENBQUM7QUFDOUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7O0FBR3ZFLE1BQU0sT0FBTyxZQUFZOzs7Ozs7SUFRdkIsWUFBWSxDQUFtQixFQUEwQyxLQUFrQixFQUFVLElBQWdCO1FBQTVDLFVBQUssR0FBTCxLQUFLLENBQWE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBUHBHLFdBQU0sR0FBd0IsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFDeEQsaUJBQVksR0FBb0QsSUFBSSxHQUFHLEVBQThDLENBQUM7UUFDL0gsU0FBSSxHQUFnQixJQUFJLEdBQUcsRUFBVSxDQUFDO1FBQ3RDLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFFaEIsUUFBRyxHQUFxQixFQUFFLENBQUM7UUFHakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxvQkFBTyxJQUFJLGdCQUFnQixFQUFFLEVBQUssQ0FBQyxFQUFHLENBQUM7UUFDN0QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFD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d0I7Ozs7O0lBQ3hCLGdDQUFzQjs7Ozs7SUFDdEIsMkJBQW1DOzs7OztJQUVGLDZCQUEwRDs7Ozs7SUFBRSw0QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBhZGRTZWNvbmRzIGZyb20gJ2RhdGUtZm5zL2FkZF9zZWNvbmRzJztcbmltcG9ydCB7IG9mLCBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRGVsb25DYWNoZUNvbmZpZyB9IGZyb20gJy4vY2FjaGUuY29uZmlnJztcbmltcG9ydCB7IENhY2hlTm90aWZ5UmVzdWx0LCBDYWNoZU5vdGlmeVR5cGUsIElDYWNoZSwgSUNhY2hlU3RvcmUgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBEQ19TVE9SRV9TVE9SQUdFX1RPS0VOIH0gZnJvbSAnLi9sb2NhbC1zdG9yYWdlLWNhY2hlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIENhY2hlU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgbWVtb3J5OiBNYXA8c3RyaW5nLCBJQ2FjaGU+ID0gbmV3IE1hcDxzdHJpbmcsIElDYWNoZT4oKTtcbiAgcHJpdmF0ZSByZWFkb25seSBub3RpZnlCdWZmZXI6IE1hcDxzdHJpbmcsIEJlaGF2aW9yU3ViamVjdDxDYWNoZU5vdGlmeVJlc3VsdD4+ID0gbmV3IE1hcDxzdHJpbmcsIEJlaGF2aW9yU3ViamVjdDxDYWNoZU5vdGlmeVJlc3VsdD4+KCk7XG4gIHByaXZhdGUgbWV0YTogU2V0PHN0cmluZz4gPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgcHJpdmF0ZSBmcmVxVGljayA9IDMwMDA7XG4gIHByaXZhdGUgZnJlcVRpbWU6IGFueTtcbiAgcHJpdmF0ZSBjb2c6IERlbG9uQ2FjaGVDb25maWcgPSB7fTtcblxuICBjb25zdHJ1Y3RvcihfOiBEZWxvbkNhY2hlQ29uZmlnLCBASW5qZWN0KERDX1NUT1JFX1NUT1JBR0VfVE9LRU4pIHByaXZhdGUgc3RvcmU6IElDYWNoZVN0b3JlLCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuY29nLCB7IC4uLm5ldyBEZWxvbkNhY2hlQ29uZmlnKCksIC4uLl8gfSk7XG4gICAgdGhpcy5sb2FkTWV0YSgpO1xuICAgIHRoaXMuc3RhcnRFeHBpcmVOb3RpZnkoKTtcbiAgfVxuXG4gIHByaXZhdGUgZGVlcEdldChvYmo6IGFueSwgcGF0aDogc3RyaW5nW10sIGRlZmF1bHRWYWx1ZT86IGFueSkge1xuICAgIGlmICghb2JqKSByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIGlmIChwYXRoLmxlbmd0aCA8PSAxKSB7XG4gICAgICBjb25zdCBjaGVja09iaiA9IHBhdGgubGVuZ3RoID8gb2JqW3BhdGhbMF1dIDogb2JqO1xuICAgICAgcmV0dXJuIHR5cGVvZiBjaGVja09iaiA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0VmFsdWUgOiBjaGVja09iajtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGgucmVkdWNlKChvLCBrKSA9PiBvW2tdLCBvYmopIHx8IGRlZmF1bHRWYWx1ZTtcbiAgfVxuXG4gIC8vICNyZWdpb24gbWV0YVxuXG4gIHByaXZhdGUgcHVzaE1ldGEoa2V5OiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5tZXRhLmhhcyhrZXkpKSByZXR1cm47XG4gICAgdGhpcy5tZXRhLmFkZChrZXkpO1xuICAgIHRoaXMuc2F2ZU1ldGEoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlTWV0YShrZXk6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5tZXRhLmhhcyhrZXkpKSByZXR1cm47XG4gICAgdGhpcy5tZXRhLmRlbGV0ZShrZXkpO1xuICAgIHRoaXMuc2F2ZU1ldGEoKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZE1ldGEoKSB7XG4gICAgY29uc3QgcmV0ID0gdGhpcy5zdG9yZS5nZXQodGhpcy5jb2cubWV0YV9rZXkhKTtcbiAgICBpZiAocmV0ICYmIHJldC52KSB7XG4gICAgICAocmV0LnYgYXMgc3RyaW5nW10pLmZvckVhY2goa2V5ID0+IHRoaXMubWV0YS5hZGQoa2V5KSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzYXZlTWV0YSgpIHtcbiAgICBjb25zdCBtZXRhRGF0YTogc3RyaW5nW10gPSBbXTtcbiAgICB0aGlzLm1ldGEuZm9yRWFjaChrZXkgPT4gbWV0YURhdGEucHVzaChrZXkpKTtcbiAgICB0aGlzLnN0b3JlLnNldCh0aGlzLmNvZy5tZXRhX2tleSEsIHsgdjogbWV0YURhdGEsIGU6IDAgfSk7XG4gIH1cblxuICBnZXRNZXRhKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGE7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBzZXRcblxuICAvKipcbiAgICogUGVyc2lzdGVudCBjYWNoZWQgYE9ic2VydmFibGVgIG9iamVjdCwgZm9yIGV4YW1wbGU6XG4gICAqIC0gYHNldCgnZGF0YS8xJywgdGhpcy5odHRwLmdldCgnZGF0YS8xJykpLnN1YnNjcmliZSgpYFxuICAgKiAtIGBzZXQoJ2RhdGEvMScsIHRoaXMuaHR0cC5nZXQoJ2RhdGEvMScpLCB7IGV4cGlyZTogMTAgfSkuc3Vic2NyaWJlKClgXG4gICAqL1xuICBzZXQ8VD4oa2V5OiBzdHJpbmcsIGRhdGE6IE9ic2VydmFibGU8VD4sIG9wdGlvbnM/OiB7IHR5cGU/OiAncyc7IGV4cGlyZT86IG51bWJlciB9KTogT2JzZXJ2YWJsZTxUPjtcbiAgLyoqXG4gICAqIFBlcnNpc3RlbnQgY2FjaGVkIGBPYnNlcnZhYmxlYCBvYmplY3QsIGZvciBleGFtcGxlOlxuICAgKiAtIGBzZXQoJ2RhdGEvMScsIHRoaXMuaHR0cC5nZXQoJ2RhdGEvMScpKS5zdWJzY3JpYmUoKWBcbiAgICogLSBgc2V0KCdkYXRhLzEnLCB0aGlzLmh0dHAuZ2V0KCdkYXRhLzEnKSwgeyBleHBpcmU6IDEwIH0pLnN1YnNjcmliZSgpYFxuICAgKi9cbiAgc2V0KGtleTogc3RyaW5nLCBkYXRhOiBPYnNlcnZhYmxlPGFueT4sIG9wdGlvbnM/OiB7IHR5cGU/OiAncyc7IGV4cGlyZT86IG51bWJlciB9KTogT2JzZXJ2YWJsZTxhbnk+O1xuICAvKipcbiAgICogUGVyc2lzdGVudCBjYWNoZWQgc2ltcGxlIG9iamVjdCwgZm9yIGV4YW1wbGU6XG4gICAqIC0gYHNldCgnZGF0YS8xJywgMSlgXG4gICAqIC0gYHNldCgnZGF0YS8xJywgMSwgeyBleHBpcmU6IDEwIH0pYFxuICAgKi9cbiAgc2V0KGtleTogc3RyaW5nLCBkYXRhOiB7fSwgb3B0aW9ucz86IHsgdHlwZT86ICdzJzsgZXhwaXJlPzogbnVtYmVyIH0pOiB2b2lkO1xuICAvKipcbiAgICogUGVyc2lzdGVudCBjYWNoZWQgc2ltcGxlIG9iamVjdCBhbmQgc3BlY2lmeSBzdG9yYWdlIHR5cGUsIGZvciBleGFtcGxlIGNhY2hpbmcgaW4gbWVtb3J5OlxuICAgKiAtIGBzZXQoJ2RhdGEvMScsIDEsIHsgdHlwZTogJ20nIH0pYFxuICAgKiAtIGBzZXQoJ2RhdGEvMScsIDEsIHsgdHlwZTogJ20nLCBleHBpcmU6IDEwIH0pYFxuICAgKi9cbiAgc2V0KGtleTogc3RyaW5nLCBkYXRhOiB7fSwgb3B0aW9uczogeyB0eXBlOiAnbScgfCAncyc7IGV4cGlyZT86IG51bWJlciB9KTogdm9pZDtcbiAgLyoqXG4gICAqIOe8k+WtmOWvueixoVxuICAgKi9cbiAgc2V0KFxuICAgIGtleTogc3RyaW5nLFxuICAgIGRhdGE6IGFueSB8IE9ic2VydmFibGU8YW55PixcbiAgICBvcHRpb25zOiB7XG4gICAgICAvKiog5a2Y5YKo57G75Z6L77yMJ20nIOihqOekuuWGheWtmO+8jCdzJyDooajnpLrmjIHkuYUgKi9cbiAgICAgIHR5cGU/OiAnbScgfCAncyc7XG4gICAgICAvKipcbiAgICAgICAqIOi/h+acn+aXtumXtO+8jOWNleS9jSBg56eSYFxuICAgICAgICovXG4gICAgICBleHBpcmU/OiBudW1iZXI7XG4gICAgfSA9IHt9LFxuICApOiBhbnkge1xuICAgIGxldCBlID0gMDtcbiAgICBjb25zdCB7IHR5cGUsIGV4cGlyZSB9ID0gdGhpcy5jb2c7XG4gICAgb3B0aW9ucyA9IHtcbiAgICAgIHR5cGUsXG4gICAgICBleHBpcmUsXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH07XG4gICAgaWYgKG9wdGlvbnMuZXhwaXJlKSB7XG4gICAgICBlID0gYWRkU2Vjb25kcyhuZXcgRGF0ZSgpLCBvcHRpb25zLmV4cGlyZSkudmFsdWVPZigpO1xuICAgIH1cbiAgICBpZiAoIShkYXRhIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkpIHtcbiAgICAgIHRoaXMuc2F2ZShvcHRpb25zLnR5cGUhLCBrZXksIHsgdjogZGF0YSwgZSB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGEucGlwZShcbiAgICAgIHRhcCgodjogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuc2F2ZShvcHRpb25zLnR5cGUhLCBrZXksIHsgdiwgZSB9KTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHNhdmUodHlwZTogJ20nIHwgJ3MnLCBrZXk6IHN0cmluZywgdmFsdWU6IElDYWNoZSkge1xuICAgIGlmICh0eXBlID09PSAnbScpIHtcbiAgICAgIHRoaXMubWVtb3J5LnNldChrZXksIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9yZS5zZXQodGhpcy5jb2cucHJlZml4ICsga2V5LCB2YWx1ZSk7XG4gICAgICB0aGlzLnB1c2hNZXRhKGtleSk7XG4gICAgfVxuICAgIHRoaXMucnVuTm90aWZ5KGtleSwgJ3NldCcpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gZ2V0XG5cbiAgLyoqIOiOt+WPlue8k+WtmOaVsOaNru+8jOiLpSBga2V5YCDkuI3lrZjlnKjliJkgYGtleWAg5L2c5Li6SFRUUOivt+axgue8k+WtmOWQjui/lOWbniAqL1xuICBnZXQ8VD4oXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG1vZGU6ICdwcm9taXNlJztcbiAgICAgIHR5cGU/OiAnbScgfCAncyc7XG4gICAgICBleHBpcmU/OiBudW1iZXI7XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxUPjtcbiAgLyoqIOiOt+WPlue8k+WtmOaVsOaNru+8jOiLpSBga2V5YCDkuI3lrZjlnKjliJkgYGtleWAg5L2c5Li6SFRUUOivt+axgue8k+WtmOWQjui/lOWbniAqL1xuICBnZXQoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG1vZGU6ICdwcm9taXNlJztcbiAgICAgIHR5cGU/OiAnbScgfCAncyc7XG4gICAgICBleHBpcmU/OiBudW1iZXI7XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xuICAvKiog6I635Y+W57yT5a2Y5pWw5o2u77yM6IulIGBrZXlgIOS4jeWtmOWcqOaIluW3sui/h+acn+WImei/lOWbniBudWxsICovXG4gIGdldChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBtb2RlOiAnbm9uZSc7XG4gICAgICB0eXBlPzogJ20nIHwgJ3MnO1xuICAgICAgZXhwaXJlPzogbnVtYmVyO1xuICAgIH0sXG4gICk6IGFueTtcbiAgZ2V0KFxuICAgIGtleTogc3RyaW5nLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG1vZGU/OiAncHJvbWlzZScgfCAnbm9uZSc7XG4gICAgICB0eXBlPzogJ20nIHwgJ3MnO1xuICAgICAgZXhwaXJlPzogbnVtYmVyO1xuICAgIH0gPSB7fSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHwgYW55IHtcbiAgICBjb25zdCBpc1Byb21pc2UgPSBvcHRpb25zLm1vZGUgIT09ICdub25lJyAmJiB0aGlzLmNvZy5tb2RlID09PSAncHJvbWlzZSc7XG4gICAgY29uc3QgdmFsdWU6IElDYWNoZSA9IHRoaXMubWVtb3J5LmhhcyhrZXkpID8gKHRoaXMubWVtb3J5LmdldChrZXkpIGFzIElDYWNoZSkgOiB0aGlzLnN0b3JlLmdldCh0aGlzLmNvZy5wcmVmaXggKyBrZXkpO1xuICAgIGlmICghdmFsdWUgfHwgKHZhbHVlLmUgJiYgdmFsdWUuZSA+IDAgJiYgdmFsdWUuZSA8IG5ldyBEYXRlKCkudmFsdWVPZigpKSkge1xuICAgICAgaWYgKGlzUHJvbWlzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChrZXkpLnBpcGUoXG4gICAgICAgICAgbWFwKChyZXQ6IGFueSkgPT4gdGhpcy5kZWVwR2V0KHJldCwgdGhpcy5jb2cucmVOYW1lIGFzIHN0cmluZ1tdLCBudWxsKSksXG4gICAgICAgICAgdGFwKHYgPT4gdGhpcy5zZXQoa2V5LCB2LCB7IHR5cGU6IG9wdGlvbnMudHlwZSBhcyBhbnksIGV4cGlyZTogb3B0aW9ucy5leHBpcmUgfSkpLFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzUHJvbWlzZSA/IG9mKHZhbHVlLnYpIDogdmFsdWUudjtcbiAgfVxuXG4gIC8qKiDojrflj5bnvJPlrZjmlbDmja7vvIzoi6UgYGtleWAg5LiN5a2Y5Zyo5oiW5bey6L+H5pyf5YiZ6L+U5ZueIG51bGwgKi9cbiAgZ2V0Tm9uZTxUPihrZXk6IHN0cmluZyk6IFQ7XG4gIC8qKiDojrflj5bnvJPlrZjmlbDmja7vvIzoi6UgYGtleWAg5LiN5a2Y5Zyo5oiW5bey6L+H5pyf5YiZ6L+U5ZueIG51bGwgKi9cbiAgZ2V0Tm9uZShrZXk6IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGtleSwgeyBtb2RlOiAnbm9uZScgfSk7XG4gIH1cblxuICAvKipcbiAgICog6I635Y+W57yT5a2Y77yM6Iul5LiN5a2Y5Zyo5YiZ6K6+572u5oyB5LmF5YyW57yT5a2YIGBPYnNlcnZhYmxlYCDlr7nosaFcbiAgICovXG4gIHRyeUdldDxUPihrZXk6IHN0cmluZywgZGF0YTogT2JzZXJ2YWJsZTxUPiwgb3B0aW9ucz86IHsgdHlwZT86ICdzJzsgZXhwaXJlPzogbnVtYmVyIH0pOiBPYnNlcnZhYmxlPFQ+O1xuICAvKipcbiAgICog6I635Y+W57yT5a2Y77yM6Iul5LiN5a2Y5Zyo5YiZ6K6+572u5oyB5LmF5YyW57yT5a2YIGBPYnNlcnZhYmxlYCDlr7nosaFcbiAgICovXG4gIHRyeUdldChrZXk6IHN0cmluZywgZGF0YTogT2JzZXJ2YWJsZTxhbnk+LCBvcHRpb25zPzogeyB0eXBlPzogJ3MnOyBleHBpcmU/OiBudW1iZXIgfSk6IE9ic2VydmFibGU8YW55PjtcbiAgLyoqXG4gICAqIOiOt+WPlue8k+WtmO+8jOiLpeS4jeWtmOWcqOWImeiuvue9ruaMgeS5heWMlue8k+WtmOWfuuehgOWvueixoVxuICAgKi9cbiAgdHJ5R2V0KGtleTogc3RyaW5nLCBkYXRhOiB7fSwgb3B0aW9ucz86IHsgdHlwZT86ICdzJzsgZXhwaXJlPzogbnVtYmVyIH0pOiBhbnk7XG4gIC8qKlxuICAgKiDojrflj5bnvJPlrZjvvIzoi6XkuI3lrZjlnKjliJnorr7nva7mjIflrprnvJPlrZjnsbvlnovov5vooYznvJPlrZjlr7nosaFcbiAgICovXG4gIHRyeUdldChrZXk6IHN0cmluZywgZGF0YToge30sIG9wdGlvbnM6IHsgdHlwZTogJ20nIHwgJ3MnOyBleHBpcmU/OiBudW1iZXIgfSk6IGFueTtcblxuICAvKipcbiAgICog6I635Y+W57yT5a2Y77yM6Iul5LiN5a2Y5Zyo5YiZ6K6+572u57yT5a2Y5a+56LGhXG4gICAqL1xuICB0cnlHZXQoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgZGF0YTogYW55IHwgT2JzZXJ2YWJsZTxhbnk+LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIC8qKiDlrZjlgqjnsbvlnovvvIwnbScg6KGo56S65YaF5a2Y77yMJ3MnIOihqOekuuaMgeS5hSAqL1xuICAgICAgdHlwZT86ICdtJyB8ICdzJztcbiAgICAgIC8qKlxuICAgICAgICog6L+H5pyf5pe26Ze077yM5Y2V5L2NIGDnp5JgXG4gICAgICAgKi9cbiAgICAgIGV4cGlyZT86IG51bWJlcjtcbiAgICB9ID0ge30sXG4gICk6IGFueSB7XG4gICAgY29uc3QgcmV0ID0gdGhpcy5nZXROb25lKGtleSk7XG4gICAgaWYgKHJldCA9PT0gbnVsbCkge1xuICAgICAgaWYgKCEoZGF0YSBpbnN0YW5jZW9mIE9ic2VydmFibGUpKSB7XG4gICAgICAgIHRoaXMuc2V0KGtleSwgZGF0YSwgb3B0aW9ucyBhcyBhbnkpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuc2V0KGtleSwgZGF0YSBhcyBPYnNlcnZhYmxlPGFueT4sIG9wdGlvbnMgYXMgYW55KTtcbiAgICB9XG4gICAgcmV0dXJuIG9mKHJldCk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBoYXNcblxuICAvKiog5piv5ZCm57yT5a2YIGBrZXlgICovXG4gIGhhcyhrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1lbW9yeS5oYXMoa2V5KSB8fCB0aGlzLm1ldGEuaGFzKGtleSk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiByZW1vdmVcblxuICBwcml2YXRlIF9yZW1vdmUoa2V5OiBzdHJpbmcsIG5lZWROb3RpZnk6IGJvb2xlYW4pIHtcbiAgICBpZiAobmVlZE5vdGlmeSkgdGhpcy5ydW5Ob3RpZnkoa2V5LCAncmVtb3ZlJyk7XG4gICAgaWYgKHRoaXMubWVtb3J5LmhhcyhrZXkpKSB7XG4gICAgICB0aGlzLm1lbW9yeS5kZWxldGUoa2V5KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zdG9yZS5yZW1vdmUodGhpcy5jb2cucHJlZml4ICsga2V5KTtcbiAgICB0aGlzLnJlbW92ZU1ldGEoa2V5KTtcbiAgfVxuXG4gIC8qKiDnp7vpmaTnvJPlrZggKi9cbiAgcmVtb3ZlKGtleTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVtb3ZlKGtleSwgdHJ1ZSk7XG4gIH1cblxuICAvKiog5riF56m65omA5pyJ57yT5a2YICovXG4gIGNsZWFyKCkge1xuICAgIHRoaXMubm90aWZ5QnVmZmVyLmZvckVhY2goKF92LCBrKSA9PiB0aGlzLnJ1bk5vdGlmeShrLCAncmVtb3ZlJykpO1xuICAgIHRoaXMubWVtb3J5LmNsZWFyKCk7XG4gICAgdGhpcy5tZXRhLmZvckVhY2goa2V5ID0+IHRoaXMuc3RvcmUucmVtb3ZlKHRoaXMuY29nLnByZWZpeCArIGtleSkpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gbm90aWZ5XG5cbiAgLyoqXG4gICAqIOiuvue9ruebkeWQrOmikeeOh++8jOWNleS9je+8muavq+enkuS4lOacgOS9jiBgMjBtc2DvvIzpu5jorqTvvJpgMzAwMG1zYFxuICAgKi9cbiAgc2V0IGZyZXEodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuZnJlcVRpY2sgPSBNYXRoLm1heCgyMCwgdmFsdWUpO1xuICAgIHRoaXMuYWJvcnRFeHBpcmVOb3RpZnkoKTtcbiAgICB0aGlzLnN0YXJ0RXhwaXJlTm90aWZ5KCk7XG4gIH1cblxuICBwcml2YXRlIHN0YXJ0RXhwaXJlTm90aWZ5KCkge1xuICAgIHRoaXMuY2hlY2tFeHBpcmVOb3RpZnkoKTtcbiAgICB0aGlzLnJ1bkV4cGlyZU5vdGlmeSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBydW5FeHBpcmVOb3RpZnkoKSB7XG4gICAgdGhpcy5mcmVxVGltZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jaGVja0V4cGlyZU5vdGlmeSgpO1xuICAgICAgdGhpcy5ydW5FeHBpcmVOb3RpZnkoKTtcbiAgICB9LCB0aGlzLmZyZXFUaWNrKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tFeHBpcmVOb3RpZnkoKSB7XG4gICAgY29uc3QgcmVtb3ZlZDogc3RyaW5nW10gPSBbXTtcbiAgICB0aGlzLm5vdGlmeUJ1ZmZlci5mb3JFYWNoKChfdiwga2V5KSA9PiB7XG4gICAgICBpZiAodGhpcy5oYXMoa2V5KSAmJiB0aGlzLmdldE5vbmUoa2V5KSA9PT0gbnVsbCkgcmVtb3ZlZC5wdXNoKGtleSk7XG4gICAgfSk7XG4gICAgcmVtb3ZlZC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICB0aGlzLnJ1bk5vdGlmeShrZXksICdleHBpcmUnKTtcbiAgICAgIHRoaXMuX3JlbW92ZShrZXksIGZhbHNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYWJvcnRFeHBpcmVOb3RpZnkoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuZnJlcVRpbWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBydW5Ob3RpZnkoa2V5OiBzdHJpbmcsIHR5cGU6IENhY2hlTm90aWZ5VHlwZSkge1xuICAgIGlmICghdGhpcy5ub3RpZnlCdWZmZXIuaGFzKGtleSkpIHJldHVybjtcbiAgICB0aGlzLm5vdGlmeUJ1ZmZlci5nZXQoa2V5KSEubmV4dCh7IHR5cGUsIHZhbHVlOiB0aGlzLmdldE5vbmUoa2V5KSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBga2V5YCDnm5HlkKzvvIzlvZMgYGtleWAg5Y+Y5pu044CB6L+H5pyf44CB56e76Zmk5pe26YCa55+l77yM5rOo5oSP5Lul5LiL6Iul5bmy57uG6IqC77yaXG4gICAqXG4gICAqIC0g6LCD55So5ZCO6Zmk5YaN5qyh6LCD55SoIGBjYW5jZWxOb3RpZnlgIOWQpuWImeawuOi/nOS4jei/h+acn1xuICAgKiAtIOebkeWQrOWZqOavjyBgZnJlcWAgKOm7mOiupO+8mjPnp5IpIOaJp+ihjOS4gOasoei/h+acn+ajgOafpVxuICAgKi9cbiAgbm90aWZ5KGtleTogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYWNoZU5vdGlmeVJlc3VsdD4ge1xuICAgIGlmICghdGhpcy5ub3RpZnlCdWZmZXIuaGFzKGtleSkpIHtcbiAgICAgIGNvbnN0IGNoYW5nZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PENhY2hlTm90aWZ5UmVzdWx0Pih0aGlzLmdldE5vbmUoa2V5KSk7XG4gICAgICB0aGlzLm5vdGlmeUJ1ZmZlci5zZXQoa2V5LCBjaGFuZ2UkKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubm90aWZ5QnVmZmVyLmdldChrZXkpIS5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlj5bmtoggYGtleWAg55uR5ZCsXG4gICAqL1xuICBjYW5jZWxOb3RpZnkoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubm90aWZ5QnVmZmVyLmhhcyhrZXkpKSByZXR1cm47XG4gICAgdGhpcy5ub3RpZnlCdWZmZXIuZ2V0KGtleSkhLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5ub3RpZnlCdWZmZXIuZGVsZXRlKGtleSk7XG4gIH1cblxuICAvKiogYGtleWAg5piv5ZCm5bey57uP55uR5ZCsICovXG4gIGhhc05vdGlmeShrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm5vdGlmeUJ1ZmZlci5oYXMoa2V5KTtcbiAgfVxuXG4gIC8qKiDmuIXnqbrmiYDmnIkgYGtleWAg55qE55uR5ZCsICovXG4gIGNsZWFyTm90aWZ5KCk6IHZvaWQge1xuICAgIHRoaXMubm90aWZ5QnVmZmVyLmZvckVhY2godiA9PiB2LnVuc3Vic2NyaWJlKCkpO1xuICAgIHRoaXMubm90aWZ5QnVmZmVyLmNsZWFyKCk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5tZW1vcnkuY2xlYXIoKTtcbiAgICB0aGlzLmFib3J0RXhwaXJlTm90aWZ5KCk7XG4gICAgdGhpcy5jbGVhck5vdGlmeSgpO1xuICB9XG59XG4iXX0=