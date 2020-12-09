/**
 * @fileoverview added by tsickle
 * Generated from: src/cache.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AlainConfigService } from '@delon/util';
import addSeconds from 'date-fns/addSeconds';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DC_STORE_STORAGE_TOKEN } from './local-storage-cache.service';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util";
import * as i2 from "./local-storage-cache.service";
import * as i3 from "@angular/common/http";
export class CacheService {
    /**
     * @param {?} cogSrv
     * @param {?} store
     * @param {?} http
     */
    constructor(cogSrv, store, http) {
        this.store = store;
        this.http = http;
        this.memory = new Map();
        this.notifyBuffer = new Map();
        this.meta = new Set();
        this.freqTick = 3000;
        this.cog = (/** @type {?} */ (cogSrv.merge('cache', {
            mode: 'promise',
            reName: '',
            prefix: '',
            meta_key: '__cache_meta',
        })));
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
    { type: AlainConfigService },
    { type: undefined, decorators: [{ type: Inject, args: [DC_STORE_STORAGE_TOKEN,] }] },
    { type: HttpClient }
];
/** @nocollapse */ CacheService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CacheService_Factory() { return new CacheService(i0.ɵɵinject(i1.AlainConfigService), i0.ɵɵinject(i2.DC_STORE_STORAGE_TOKEN), i0.ɵɵinject(i3.HttpClient)); }, token: CacheService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92c3RzL3dvcmsvMS9zL3BhY2thZ2VzL2NhY2hlLyIsInNvdXJjZXMiOlsic3JjL2NhY2hlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFvQixrQkFBa0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNuRSxPQUFPLFVBQVUsTUFBTSxxQkFBcUIsQ0FBQztBQUU3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUxQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7QUFHdkUsTUFBTSxPQUFPLFlBQVk7Ozs7OztJQVF2QixZQUFZLE1BQTBCLEVBQTBDLEtBQWtCLEVBQVUsSUFBZ0I7UUFBNUMsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVk7UUFQM0csV0FBTSxHQUF3QixJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUN4RCxpQkFBWSxHQUFvRCxJQUFJLEdBQUcsRUFBOEMsQ0FBQztRQUMvSCxTQUFJLEdBQWdCLElBQUksR0FBRyxFQUFVLENBQUM7UUFDdEMsYUFBUSxHQUFHLElBQUksQ0FBQztRQUt0QixJQUFJLENBQUMsR0FBRyxHQUFHLG1CQUFBLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQy9CLElBQUksRUFBRSxTQUFTO1lBQ2YsTUFBTSxFQUFFLEVBQUU7WUFDVixNQUFNLEVBQUUsRUFBRTtZQUNWLFFBQVEsRUFBRSxjQUFjO1NBQ3pCLENBQUMsRUFB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VTs7Ozs7Ozs7SUFZakIsOEJBQXlFOzs7OztJQUN6RSxvQ0FBdUk7Ozs7O0lBQ3ZJLDRCQUE4Qzs7Ozs7SUFDOUMsZ0NBQXdCOzs7OztJQUN4QixnQ0FBNEI7Ozs7O0lBQzVCLDJCQUE4Qjs7Ozs7SUFFVSw2QkFBMEQ7Ozs7O0lBQUUsNEJBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGFpbkNhY2hlQ29uZmlnLCBBbGFpbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgYWRkU2Vjb25kcyBmcm9tICdkYXRlLWZucy9hZGRTZWNvbmRzJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENhY2hlTm90aWZ5UmVzdWx0LCBDYWNoZU5vdGlmeVR5cGUsIElDYWNoZSwgSUNhY2hlU3RvcmUgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBEQ19TVE9SRV9TVE9SQUdFX1RPS0VOIH0gZnJvbSAnLi9sb2NhbC1zdG9yYWdlLWNhY2hlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIENhY2hlU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgbWVtb3J5OiBNYXA8c3RyaW5nLCBJQ2FjaGU+ID0gbmV3IE1hcDxzdHJpbmcsIElDYWNoZT4oKTtcbiAgcHJpdmF0ZSByZWFkb25seSBub3RpZnlCdWZmZXI6IE1hcDxzdHJpbmcsIEJlaGF2aW9yU3ViamVjdDxDYWNoZU5vdGlmeVJlc3VsdD4+ID0gbmV3IE1hcDxzdHJpbmcsIEJlaGF2aW9yU3ViamVjdDxDYWNoZU5vdGlmeVJlc3VsdD4+KCk7XG4gIHByaXZhdGUgbWV0YTogU2V0PHN0cmluZz4gPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgcHJpdmF0ZSBmcmVxVGljayA9IDMwMDA7XG4gIHByaXZhdGUgZnJlcVRpbWU6IE56U2FmZUFueTtcbiAgcHJpdmF0ZSBjb2c6IEFsYWluQ2FjaGVDb25maWc7XG5cbiAgY29uc3RydWN0b3IoY29nU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsIEBJbmplY3QoRENfU1RPUkVfU1RPUkFHRV9UT0tFTikgcHJpdmF0ZSBzdG9yZTogSUNhY2hlU3RvcmUsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xuICAgIHRoaXMuY29nID0gY29nU3J2Lm1lcmdlKCdjYWNoZScsIHtcbiAgICAgIG1vZGU6ICdwcm9taXNlJyxcbiAgICAgIHJlTmFtZTogJycsXG4gICAgICBwcmVmaXg6ICcnLFxuICAgICAgbWV0YV9rZXk6ICdfX2NhY2hlX21ldGEnLFxuICAgIH0pITtcbiAgICB0aGlzLmxvYWRNZXRhKCk7XG4gICAgdGhpcy5zdGFydEV4cGlyZU5vdGlmeSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBkZWVwR2V0KG9iajogTnpTYWZlQW55LCBwYXRoOiBzdHJpbmdbXSwgZGVmYXVsdFZhbHVlPzogTnpTYWZlQW55KTogTnpTYWZlQW55IHtcbiAgICBpZiAoIW9iaikgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICBpZiAocGF0aC5sZW5ndGggPD0gMSkge1xuICAgICAgY29uc3QgY2hlY2tPYmogPSBwYXRoLmxlbmd0aCA/IG9ialtwYXRoWzBdXSA6IG9iajtcbiAgICAgIHJldHVybiB0eXBlb2YgY2hlY2tPYmogPT09ICd1bmRlZmluZWQnID8gZGVmYXVsdFZhbHVlIDogY2hlY2tPYmo7XG4gICAgfVxuICAgIHJldHVybiBwYXRoLnJlZHVjZSgobywgaykgPT4gb1trXSwgb2JqKSB8fCBkZWZhdWx0VmFsdWU7XG4gIH1cblxuICAvLyAjcmVnaW9uIG1ldGFcblxuICBwcml2YXRlIHB1c2hNZXRhKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubWV0YS5oYXMoa2V5KSkgcmV0dXJuO1xuICAgIHRoaXMubWV0YS5hZGQoa2V5KTtcbiAgICB0aGlzLnNhdmVNZXRhKCk7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZU1ldGEoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubWV0YS5oYXMoa2V5KSkgcmV0dXJuO1xuICAgIHRoaXMubWV0YS5kZWxldGUoa2V5KTtcbiAgICB0aGlzLnNhdmVNZXRhKCk7XG4gIH1cblxuICBwcml2YXRlIGxvYWRNZXRhKCk6IHZvaWQge1xuICAgIGNvbnN0IHJldCA9IHRoaXMuc3RvcmUuZ2V0KHRoaXMuY29nLm1ldGFfa2V5ISk7XG4gICAgaWYgKHJldCAmJiByZXQudikge1xuICAgICAgKHJldC52IGFzIHN0cmluZ1tdKS5mb3JFYWNoKGtleSA9PiB0aGlzLm1ldGEuYWRkKGtleSkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2F2ZU1ldGEoKTogdm9pZCB7XG4gICAgY29uc3QgbWV0YURhdGE6IHN0cmluZ1tdID0gW107XG4gICAgdGhpcy5tZXRhLmZvckVhY2goa2V5ID0+IG1ldGFEYXRhLnB1c2goa2V5KSk7XG4gICAgdGhpcy5zdG9yZS5zZXQodGhpcy5jb2cubWV0YV9rZXkhLCB7IHY6IG1ldGFEYXRhLCBlOiAwIH0pO1xuICB9XG5cbiAgZ2V0TWV0YSgpOiBTZXQ8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMubWV0YTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHNldFxuXG4gIC8qKlxuICAgKiBQZXJzaXN0ZW50IGNhY2hlZCBgT2JzZXJ2YWJsZWAgb2JqZWN0LCBmb3IgZXhhbXBsZTpcbiAgICogLSBgc2V0KCdkYXRhLzEnLCB0aGlzLmh0dHAuZ2V0KCdkYXRhLzEnKSkuc3Vic2NyaWJlKClgXG4gICAqIC0gYHNldCgnZGF0YS8xJywgdGhpcy5odHRwLmdldCgnZGF0YS8xJyksIHsgZXhwaXJlOiAxMCB9KS5zdWJzY3JpYmUoKWBcbiAgICovXG4gIHNldDxUPihrZXk6IHN0cmluZywgZGF0YTogT2JzZXJ2YWJsZTxUPiwgb3B0aW9ucz86IHsgdHlwZT86ICdzJzsgZXhwaXJlPzogbnVtYmVyIH0pOiBPYnNlcnZhYmxlPFQ+O1xuICAvKipcbiAgICogUGVyc2lzdGVudCBjYWNoZWQgYE9ic2VydmFibGVgIG9iamVjdCwgZm9yIGV4YW1wbGU6XG4gICAqIC0gYHNldCgnZGF0YS8xJywgdGhpcy5odHRwLmdldCgnZGF0YS8xJykpLnN1YnNjcmliZSgpYFxuICAgKiAtIGBzZXQoJ2RhdGEvMScsIHRoaXMuaHR0cC5nZXQoJ2RhdGEvMScpLCB7IGV4cGlyZTogMTAgfSkuc3Vic2NyaWJlKClgXG4gICAqL1xuICBzZXQoa2V5OiBzdHJpbmcsIGRhdGE6IE9ic2VydmFibGU8TnpTYWZlQW55Piwgb3B0aW9ucz86IHsgdHlwZT86ICdzJzsgZXhwaXJlPzogbnVtYmVyIH0pOiBPYnNlcnZhYmxlPE56U2FmZUFueT47XG4gIC8qKlxuICAgKiBQZXJzaXN0ZW50IGNhY2hlZCBzaW1wbGUgb2JqZWN0LCBmb3IgZXhhbXBsZTpcbiAgICogLSBgc2V0KCdkYXRhLzEnLCAxKWBcbiAgICogLSBgc2V0KCdkYXRhLzEnLCAxLCB7IGV4cGlyZTogMTAgfSlgXG4gICAqL1xuICBzZXQoa2V5OiBzdHJpbmcsIGRhdGE6IHt9LCBvcHRpb25zPzogeyB0eXBlPzogJ3MnOyBleHBpcmU/OiBudW1iZXIgfSk6IHZvaWQ7XG4gIC8qKlxuICAgKiBQZXJzaXN0ZW50IGNhY2hlZCBzaW1wbGUgb2JqZWN0IGFuZCBzcGVjaWZ5IHN0b3JhZ2UgdHlwZSwgZm9yIGV4YW1wbGUgY2FjaGluZyBpbiBtZW1vcnk6XG4gICAqIC0gYHNldCgnZGF0YS8xJywgMSwgeyB0eXBlOiAnbScgfSlgXG4gICAqIC0gYHNldCgnZGF0YS8xJywgMSwgeyB0eXBlOiAnbScsIGV4cGlyZTogMTAgfSlgXG4gICAqL1xuICBzZXQoa2V5OiBzdHJpbmcsIGRhdGE6IHt9LCBvcHRpb25zOiB7IHR5cGU6ICdtJyB8ICdzJzsgZXhwaXJlPzogbnVtYmVyIH0pOiB2b2lkO1xuICAvKipcbiAgICog57yT5a2Y5a+56LGhXG4gICAqL1xuICBzZXQoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgZGF0YTogTnpTYWZlQW55IHwgT2JzZXJ2YWJsZTxOelNhZmVBbnk+LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIC8qKiDlrZjlgqjnsbvlnovvvIwnbScg6KGo56S65YaF5a2Y77yMJ3MnIOihqOekuuaMgeS5hSAqL1xuICAgICAgdHlwZT86ICdtJyB8ICdzJztcbiAgICAgIC8qKlxuICAgICAgICog6L+H5pyf5pe26Ze077yM5Y2V5L2NIGDnp5JgXG4gICAgICAgKi9cbiAgICAgIGV4cGlyZT86IG51bWJlcjtcbiAgICB9ID0ge30sXG4gICk6IE56U2FmZUFueSB7XG4gICAgbGV0IGUgPSAwO1xuICAgIGNvbnN0IHsgdHlwZSwgZXhwaXJlIH0gPSB0aGlzLmNvZztcbiAgICBvcHRpb25zID0ge1xuICAgICAgdHlwZSxcbiAgICAgIGV4cGlyZSxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfTtcbiAgICBpZiAob3B0aW9ucy5leHBpcmUpIHtcbiAgICAgIGUgPSBhZGRTZWNvbmRzKG5ldyBEYXRlKCksIG9wdGlvbnMuZXhwaXJlKS52YWx1ZU9mKCk7XG4gICAgfVxuICAgIGlmICghKGRhdGEgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSkge1xuICAgICAgdGhpcy5zYXZlKG9wdGlvbnMudHlwZSEsIGtleSwgeyB2OiBkYXRhLCBlIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YS5waXBlKFxuICAgICAgdGFwKCh2OiBOelNhZmVBbnkpID0+IHtcbiAgICAgICAgdGhpcy5zYXZlKG9wdGlvbnMudHlwZSEsIGtleSwgeyB2LCBlIH0pO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc2F2ZSh0eXBlOiAnbScgfCAncycsIGtleTogc3RyaW5nLCB2YWx1ZTogSUNhY2hlKTogdm9pZCB7XG4gICAgaWYgKHR5cGUgPT09ICdtJykge1xuICAgICAgdGhpcy5tZW1vcnkuc2V0KGtleSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3JlLnNldCh0aGlzLmNvZy5wcmVmaXggKyBrZXksIHZhbHVlKTtcbiAgICAgIHRoaXMucHVzaE1ldGEoa2V5KTtcbiAgICB9XG4gICAgdGhpcy5ydW5Ob3RpZnkoa2V5LCAnc2V0Jyk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBnZXRcblxuICAvKiog6I635Y+W57yT5a2Y5pWw5o2u77yM6IulIGBrZXlgIOS4jeWtmOWcqOWImSBga2V5YCDkvZzkuLpIVFRQ6K+35rGC57yT5a2Y5ZCO6L+U5ZueICovXG4gIGdldDxUPihcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgbW9kZTogJ3Byb21pc2UnO1xuICAgICAgdHlwZT86ICdtJyB8ICdzJztcbiAgICAgIGV4cGlyZT86IG51bWJlcjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPFQ+O1xuICAvKiog6I635Y+W57yT5a2Y5pWw5o2u77yM6IulIGBrZXlgIOS4jeWtmOWcqOWImSBga2V5YCDkvZzkuLpIVFRQ6K+35rGC57yT5a2Y5ZCO6L+U5ZueICovXG4gIGdldChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgbW9kZTogJ3Byb21pc2UnO1xuICAgICAgdHlwZT86ICdtJyB8ICdzJztcbiAgICAgIGV4cGlyZT86IG51bWJlcjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPE56U2FmZUFueT47XG4gIC8qKiDojrflj5bnvJPlrZjmlbDmja7vvIzoi6UgYGtleWAg5LiN5a2Y5Zyo5oiW5bey6L+H5pyf5YiZ6L+U5ZueIG51bGwgKi9cbiAgZ2V0KFxuICAgIGtleTogc3RyaW5nLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG1vZGU6ICdub25lJztcbiAgICAgIHR5cGU/OiAnbScgfCAncyc7XG4gICAgICBleHBpcmU/OiBudW1iZXI7XG4gICAgfSxcbiAgKTogTnpTYWZlQW55O1xuICBnZXQoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9uczoge1xuICAgICAgbW9kZT86ICdwcm9taXNlJyB8ICdub25lJztcbiAgICAgIHR5cGU/OiAnbScgfCAncyc7XG4gICAgICBleHBpcmU/OiBudW1iZXI7XG4gICAgfSA9IHt9LFxuICApOiBPYnNlcnZhYmxlPE56U2FmZUFueT4gfCBOelNhZmVBbnkge1xuICAgIGNvbnN0IGlzUHJvbWlzZSA9IG9wdGlvbnMubW9kZSAhPT0gJ25vbmUnICYmIHRoaXMuY29nLm1vZGUgPT09ICdwcm9taXNlJztcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMubWVtb3J5LmhhcyhrZXkpID8gKHRoaXMubWVtb3J5LmdldChrZXkpIGFzIElDYWNoZSkgOiB0aGlzLnN0b3JlLmdldCh0aGlzLmNvZy5wcmVmaXggKyBrZXkpO1xuICAgIGlmICghdmFsdWUgfHwgKHZhbHVlLmUgJiYgdmFsdWUuZSA+IDAgJiYgdmFsdWUuZSA8IG5ldyBEYXRlKCkudmFsdWVPZigpKSkge1xuICAgICAgaWYgKGlzUHJvbWlzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChrZXkpLnBpcGUoXG4gICAgICAgICAgbWFwKChyZXQ6IE56U2FmZUFueSkgPT4gdGhpcy5kZWVwR2V0KHJldCwgdGhpcy5jb2cucmVOYW1lIGFzIHN0cmluZ1tdLCBudWxsKSksXG4gICAgICAgICAgdGFwKHYgPT4gdGhpcy5zZXQoa2V5LCB2LCB7IHR5cGU6IG9wdGlvbnMudHlwZSBhcyBOelNhZmVBbnksIGV4cGlyZTogb3B0aW9ucy5leHBpcmUgfSkpLFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzUHJvbWlzZSA/IG9mKHZhbHVlLnYpIDogdmFsdWUudjtcbiAgfVxuXG4gIC8qKiDojrflj5bnvJPlrZjmlbDmja7vvIzoi6UgYGtleWAg5LiN5a2Y5Zyo5oiW5bey6L+H5pyf5YiZ6L+U5ZueIG51bGwgKi9cbiAgZ2V0Tm9uZTxUPihrZXk6IHN0cmluZyk6IFQ7XG4gIC8qKiDojrflj5bnvJPlrZjmlbDmja7vvIzoi6UgYGtleWAg5LiN5a2Y5Zyo5oiW5bey6L+H5pyf5YiZ6L+U5ZueIG51bGwgKi9cbiAgZ2V0Tm9uZShrZXk6IHN0cmluZyk6IE56U2FmZUFueSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGtleSwgeyBtb2RlOiAnbm9uZScgfSk7XG4gIH1cblxuICAvKipcbiAgICog6I635Y+W57yT5a2Y77yM6Iul5LiN5a2Y5Zyo5YiZ6K6+572u5oyB5LmF5YyW57yT5a2YIGBPYnNlcnZhYmxlYCDlr7nosaFcbiAgICovXG4gIHRyeUdldDxUPihrZXk6IHN0cmluZywgZGF0YTogT2JzZXJ2YWJsZTxUPiwgb3B0aW9ucz86IHsgdHlwZT86ICdzJzsgZXhwaXJlPzogbnVtYmVyIH0pOiBPYnNlcnZhYmxlPFQ+O1xuICAvKipcbiAgICog6I635Y+W57yT5a2Y77yM6Iul5LiN5a2Y5Zyo5YiZ6K6+572u5oyB5LmF5YyW57yT5a2YIGBPYnNlcnZhYmxlYCDlr7nosaFcbiAgICovXG4gIHRyeUdldChrZXk6IHN0cmluZywgZGF0YTogT2JzZXJ2YWJsZTxOelNhZmVBbnk+LCBvcHRpb25zPzogeyB0eXBlPzogJ3MnOyBleHBpcmU/OiBudW1iZXIgfSk6IE9ic2VydmFibGU8TnpTYWZlQW55PjtcbiAgLyoqXG4gICAqIOiOt+WPlue8k+WtmO+8jOiLpeS4jeWtmOWcqOWImeiuvue9ruaMgeS5heWMlue8k+WtmOWfuuehgOWvueixoVxuICAgKi9cbiAgdHJ5R2V0KGtleTogc3RyaW5nLCBkYXRhOiB7fSwgb3B0aW9ucz86IHsgdHlwZT86ICdzJzsgZXhwaXJlPzogbnVtYmVyIH0pOiBOelNhZmVBbnk7XG4gIC8qKlxuICAgKiDojrflj5bnvJPlrZjvvIzoi6XkuI3lrZjlnKjliJnorr7nva7mjIflrprnvJPlrZjnsbvlnovov5vooYznvJPlrZjlr7nosaFcbiAgICovXG4gIHRyeUdldChrZXk6IHN0cmluZywgZGF0YToge30sIG9wdGlvbnM6IHsgdHlwZTogJ20nIHwgJ3MnOyBleHBpcmU/OiBudW1iZXIgfSk6IE56U2FmZUFueTtcblxuICAvKipcbiAgICog6I635Y+W57yT5a2Y77yM6Iul5LiN5a2Y5Zyo5YiZ6K6+572u57yT5a2Y5a+56LGhXG4gICAqL1xuICB0cnlHZXQoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgZGF0YTogTnpTYWZlQW55IHwgT2JzZXJ2YWJsZTxOelNhZmVBbnk+LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIC8qKiDlrZjlgqjnsbvlnovvvIwnbScg6KGo56S65YaF5a2Y77yMJ3MnIOihqOekuuaMgeS5hSAqL1xuICAgICAgdHlwZT86ICdtJyB8ICdzJztcbiAgICAgIC8qKlxuICAgICAgICog6L+H5pyf5pe26Ze077yM5Y2V5L2NIGDnp5JgXG4gICAgICAgKi9cbiAgICAgIGV4cGlyZT86IG51bWJlcjtcbiAgICB9ID0ge30sXG4gICk6IE56U2FmZUFueSB7XG4gICAgY29uc3QgcmV0ID0gdGhpcy5nZXROb25lKGtleSk7XG4gICAgaWYgKHJldCA9PT0gbnVsbCkge1xuICAgICAgaWYgKCEoZGF0YSBpbnN0YW5jZW9mIE9ic2VydmFibGUpKSB7XG4gICAgICAgIHRoaXMuc2V0KGtleSwgZGF0YSwgb3B0aW9ucyBhcyBOelNhZmVBbnkpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuc2V0KGtleSwgZGF0YSBhcyBPYnNlcnZhYmxlPE56U2FmZUFueT4sIG9wdGlvbnMgYXMgTnpTYWZlQW55KTtcbiAgICB9XG4gICAgcmV0dXJuIG9mKHJldCk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBoYXNcblxuICAvKiog5piv5ZCm57yT5a2YIGBrZXlgICovXG4gIGhhcyhrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1lbW9yeS5oYXMoa2V5KSB8fCB0aGlzLm1ldGEuaGFzKGtleSk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiByZW1vdmVcblxuICBwcml2YXRlIF9yZW1vdmUoa2V5OiBzdHJpbmcsIG5lZWROb3RpZnk6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAobmVlZE5vdGlmeSkgdGhpcy5ydW5Ob3RpZnkoa2V5LCAncmVtb3ZlJyk7XG4gICAgaWYgKHRoaXMubWVtb3J5LmhhcyhrZXkpKSB7XG4gICAgICB0aGlzLm1lbW9yeS5kZWxldGUoa2V5KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zdG9yZS5yZW1vdmUodGhpcy5jb2cucHJlZml4ICsga2V5KTtcbiAgICB0aGlzLnJlbW92ZU1ldGEoa2V5KTtcbiAgfVxuXG4gIC8qKiDnp7vpmaTnvJPlrZggKi9cbiAgcmVtb3ZlKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fcmVtb3ZlKGtleSwgdHJ1ZSk7XG4gIH1cblxuICAvKiog5riF56m65omA5pyJ57yT5a2YICovXG4gIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMubm90aWZ5QnVmZmVyLmZvckVhY2goKF92LCBrKSA9PiB0aGlzLnJ1bk5vdGlmeShrLCAncmVtb3ZlJykpO1xuICAgIHRoaXMubWVtb3J5LmNsZWFyKCk7XG4gICAgdGhpcy5tZXRhLmZvckVhY2goa2V5ID0+IHRoaXMuc3RvcmUucmVtb3ZlKHRoaXMuY29nLnByZWZpeCArIGtleSkpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gbm90aWZ5XG5cbiAgLyoqXG4gICAqIOiuvue9ruebkeWQrOmikeeOh++8jOWNleS9je+8muavq+enkuS4lOacgOS9jiBgMjBtc2DvvIzpu5jorqTvvJpgMzAwMG1zYFxuICAgKi9cbiAgc2V0IGZyZXEodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuZnJlcVRpY2sgPSBNYXRoLm1heCgyMCwgdmFsdWUpO1xuICAgIHRoaXMuYWJvcnRFeHBpcmVOb3RpZnkoKTtcbiAgICB0aGlzLnN0YXJ0RXhwaXJlTm90aWZ5KCk7XG4gIH1cblxuICBwcml2YXRlIHN0YXJ0RXhwaXJlTm90aWZ5KCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tFeHBpcmVOb3RpZnkoKTtcbiAgICB0aGlzLnJ1bkV4cGlyZU5vdGlmeSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBydW5FeHBpcmVOb3RpZnkoKTogdm9pZCB7XG4gICAgdGhpcy5mcmVxVGltZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jaGVja0V4cGlyZU5vdGlmeSgpO1xuICAgICAgdGhpcy5ydW5FeHBpcmVOb3RpZnkoKTtcbiAgICB9LCB0aGlzLmZyZXFUaWNrKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tFeHBpcmVOb3RpZnkoKTogdm9pZCB7XG4gICAgY29uc3QgcmVtb3ZlZDogc3RyaW5nW10gPSBbXTtcbiAgICB0aGlzLm5vdGlmeUJ1ZmZlci5mb3JFYWNoKChfdiwga2V5KSA9PiB7XG4gICAgICBpZiAodGhpcy5oYXMoa2V5KSAmJiB0aGlzLmdldE5vbmUoa2V5KSA9PT0gbnVsbCkgcmVtb3ZlZC5wdXNoKGtleSk7XG4gICAgfSk7XG4gICAgcmVtb3ZlZC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICB0aGlzLnJ1bk5vdGlmeShrZXksICdleHBpcmUnKTtcbiAgICAgIHRoaXMuX3JlbW92ZShrZXksIGZhbHNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYWJvcnRFeHBpcmVOb3RpZnkoKTogdm9pZCB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuZnJlcVRpbWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBydW5Ob3RpZnkoa2V5OiBzdHJpbmcsIHR5cGU6IENhY2hlTm90aWZ5VHlwZSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5ub3RpZnlCdWZmZXIuaGFzKGtleSkpIHJldHVybjtcbiAgICB0aGlzLm5vdGlmeUJ1ZmZlci5nZXQoa2V5KSEubmV4dCh7IHR5cGUsIHZhbHVlOiB0aGlzLmdldE5vbmUoa2V5KSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBga2V5YCDnm5HlkKzvvIzlvZMgYGtleWAg5Y+Y5pu044CB6L+H5pyf44CB56e76Zmk5pe26YCa55+l77yM5rOo5oSP5Lul5LiL6Iul5bmy57uG6IqC77yaXG4gICAqXG4gICAqIC0g6LCD55So5ZCO6Zmk5YaN5qyh6LCD55SoIGBjYW5jZWxOb3RpZnlgIOWQpuWImeawuOi/nOS4jei/h+acn1xuICAgKiAtIOebkeWQrOWZqOavjyBgZnJlcWAgKOm7mOiupO+8mjPnp5IpIOaJp+ihjOS4gOasoei/h+acn+ajgOafpVxuICAgKi9cbiAgbm90aWZ5KGtleTogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYWNoZU5vdGlmeVJlc3VsdD4ge1xuICAgIGlmICghdGhpcy5ub3RpZnlCdWZmZXIuaGFzKGtleSkpIHtcbiAgICAgIGNvbnN0IGNoYW5nZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PENhY2hlTm90aWZ5UmVzdWx0Pih0aGlzLmdldE5vbmUoa2V5KSk7XG4gICAgICB0aGlzLm5vdGlmeUJ1ZmZlci5zZXQoa2V5LCBjaGFuZ2UkKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubm90aWZ5QnVmZmVyLmdldChrZXkpIS5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlj5bmtoggYGtleWAg55uR5ZCsXG4gICAqL1xuICBjYW5jZWxOb3RpZnkoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubm90aWZ5QnVmZmVyLmhhcyhrZXkpKSByZXR1cm47XG4gICAgdGhpcy5ub3RpZnlCdWZmZXIuZ2V0KGtleSkhLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5ub3RpZnlCdWZmZXIuZGVsZXRlKGtleSk7XG4gIH1cblxuICAvKiogYGtleWAg5piv5ZCm5bey57uP55uR5ZCsICovXG4gIGhhc05vdGlmeShrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm5vdGlmeUJ1ZmZlci5oYXMoa2V5KTtcbiAgfVxuXG4gIC8qKiDmuIXnqbrmiYDmnIkgYGtleWAg55qE55uR5ZCsICovXG4gIGNsZWFyTm90aWZ5KCk6IHZvaWQge1xuICAgIHRoaXMubm90aWZ5QnVmZmVyLmZvckVhY2godiA9PiB2LnVuc3Vic2NyaWJlKCkpO1xuICAgIHRoaXMubm90aWZ5QnVmZmVyLmNsZWFyKCk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5tZW1vcnkuY2xlYXIoKTtcbiAgICB0aGlzLmFib3J0RXhwaXJlTm90aWZ5KCk7XG4gICAgdGhpcy5jbGVhck5vdGlmeSgpO1xuICB9XG59XG4iXX0=