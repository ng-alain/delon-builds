import { InjectionToken, Injectable, Inject, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import addSeconds from 'date-fns/add_seconds';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { tap, map } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const DC_STORE_STORAGE_TOKEN = new InjectionToken('DC_STORE_STORAGE_TOKEN');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class DelonCacheConfig {
    constructor() {
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
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class CacheService {
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
                    .pipe(map((ret) => this._deepGet(ret, (/** @type {?} */ (this.options.reName)), null)), tap(v => this.set(key, v)));
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
        this.freq_tick = Math.max(20, value);
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
        this.freq_time = setTimeout(() => {
            this.checkExpireNotify();
            this.runExpireNotify();
        }, this.freq_tick);
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
        clearTimeout(this.freq_time);
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
    { type: Injectable }
];
/** @nocollapse */
CacheService.ctorParameters = () => [
    { type: DelonCacheConfig },
    { type: undefined, decorators: [{ type: Inject, args: [DC_STORE_STORAGE_TOKEN,] }] },
    { type: HttpClient }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class LocalStorageCacheService {
    /**
     * @param {?} key
     * @return {?}
     */
    get(key) {
        return JSON.parse(localStorage.getItem(key) || 'null') || null;
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    remove(key) {
        localStorage.removeItem(key);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class DelonCacheModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DelonCacheModule,
            providers: [
                DelonCacheConfig,
                CacheService,
                { provide: DC_STORE_STORAGE_TOKEN, useClass: LocalStorageCacheService },
            ],
        };
    }
}
DelonCacheModule.decorators = [
    { type: NgModule, args: [{},] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { DC_STORE_STORAGE_TOKEN, CacheService, DelonCacheConfig, DelonCacheModule, LocalStorageCacheService as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9jYWNoZS9zcmMvaW50ZXJmYWNlLnRzIiwibmc6Ly9AZGVsb24vY2FjaGUvc3JjL2NhY2hlLmNvbmZpZy50cyIsIm5nOi8vQGRlbG9uL2NhY2hlL3NyYy9jYWNoZS5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vY2FjaGUvc3JjL2xvY2FsLXN0b3JhZ2UtY2FjaGUuc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL2NhY2hlL3NyYy9jYWNoZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJQ2FjaGUge1xuICB2OiBhbnk7XG4gIC8qKiDDqMK/wofDpsKcwp/DpsKXwrbDqcKXwrTDpsKIwrPDr8K8woxgMGAgw6jCocKow6fCpMK6w6TCuMKNw6jCv8KHw6bCnMKfICovXG4gIGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IERDX1NUT1JFX1NUT1JBR0VfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48SUNhY2hlU3RvcmU+KFxuICAnRENfU1RPUkVfU1RPUkFHRV9UT0tFTicsXG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIElDYWNoZVN0b3JlIHtcbiAgZ2V0KGtleTogc3RyaW5nKTogSUNhY2hlO1xuXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IElDYWNoZSk6IGJvb2xlYW47XG5cbiAgcmVtb3ZlKGtleTogc3RyaW5nKTtcbn1cblxuZXhwb3J0IHR5cGUgQ2FjaGVOb3RpZnlUeXBlID0gJ3NldCcgfCAncmVtb3ZlJyB8ICdleHBpcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhY2hlTm90aWZ5UmVzdWx0IHtcbiAgdHlwZTogQ2FjaGVOb3RpZnlUeXBlO1xuICB2YWx1ZT86IGFueTtcbn1cbiIsImV4cG9ydCBjbGFzcyBEZWxvbkNhY2hlQ29uZmlnIHtcbiAgLyoqXG4gICAqIMOnwrzCk8Olwq3CmMOmwqjCocOlwrzCj8OvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBwcm9taXNlYFxuICAgKiAtIGBwcm9taXNlYCDDp8K6wqbDpcKuwprDpsKowqHDpcK8wo/Dr8K8wozDpcKFwoHDqMKuwrggYGtleWAgw6TCvcKcw6TCuMK6IGh0dHAgw6jCjsK3w6XCj8KWw6bClcKww6bCjcKuXG4gICAqIC0gYG5vbmVgIMOmwq3Co8OlwrjCuMOmwqjCocOlwrzCj1xuICAgKi9cbiAgbW9kZT86ICdwcm9taXNlJyB8ICdub25lJyA9ICdwcm9taXNlJztcbiAgLyoqXG4gICAqIMOpwofCjcOlwpHCvcOlwpDCjcOowr/ClMOlwpvCnsOlwo/CgsOmwpXCsMOvwrzCjMOkwr7Ci8OlwqbCgsOvwrzCmlxuICAgKiAtIGBudWxsYCDDqMK/wpTDpcKbwp7DpMK9wpPDpMK4wrrDpcKGwoXDpcKuwrlcbiAgICogLSBgbGlzdGAgw6jCv8KUw6XCm8Kew6TCvcKTw6XCusKUIGB7IGxpc3Q6IFtdIH1gXG4gICAqIC0gYHJlc3VsdC5saXN0YCDDqMK/wpTDpcKbwp7DpMK9wpPDpcK6wpQgYHsgcmVzdWx0OiB7IGxpc3Q6IFtdIH0gfWBcbiAgICovXG4gIHJlTmFtZT86IHN0cmluZyB8IHN0cmluZ1tdID0gJyc7XG4gIC8qKlxuICAgKiDDpsKMwoHDpMK5woXDpcKMwpbDpsKVwrDDpsKNwq7DqcKUwq7DpcKAwrzDpcKJwo3Dp8K8woBcbiAgICovXG4gIHByZWZpeD86IHN0cmluZyA9ICcnO1xuICAvKipcbiAgICogw6bCjMKBw6TCucKFw6XCjMKWw6bClcKww6bCjcKuw6XChcKDw6bClcKww6bCjcKuw6XCrcKYw6XCgsKow6nClMKuw6XCkMKNXG4gICAqL1xuICBtZXRhX2tleT86IHN0cmluZyA9ICdfX2NhY2hlX21ldGEnO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgYWRkU2Vjb25kcyBmcm9tICdkYXRlLWZucy9hZGRfc2Vjb25kcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtcbiAgRENfU1RPUkVfU1RPUkFHRV9UT0tFTixcbiAgSUNhY2hlU3RvcmUsXG4gIElDYWNoZSxcbiAgQ2FjaGVOb3RpZnlSZXN1bHQsXG4gIENhY2hlTm90aWZ5VHlwZSxcbn0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGVsb25DYWNoZUNvbmZpZyB9IGZyb20gJy4vY2FjaGUuY29uZmlnJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhY2hlU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgbWVtb3J5OiBNYXA8c3RyaW5nLCBJQ2FjaGU+ID0gbmV3IE1hcDxzdHJpbmcsIElDYWNoZT4oKTtcbiAgcHJpdmF0ZSByZWFkb25seSBub3RpZnlCdWZmZXI6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgQmVoYXZpb3JTdWJqZWN0PENhY2hlTm90aWZ5UmVzdWx0PlxuICA+ID0gbmV3IE1hcDxzdHJpbmcsIEJlaGF2aW9yU3ViamVjdDxDYWNoZU5vdGlmeVJlc3VsdD4+KCk7XG4gIHByaXZhdGUgbWV0YTogU2V0PHN0cmluZz4gPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgcHJpdmF0ZSBmcmVxX3RpY2sgPSAzMDAwO1xuICBwcml2YXRlIGZyZXFfdGltZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgb3B0aW9uczogRGVsb25DYWNoZUNvbmZpZyxcbiAgICBASW5qZWN0KERDX1NUT1JFX1NUT1JBR0VfVE9LRU4pIHByaXZhdGUgc3RvcmU6IElDYWNoZVN0b3JlLFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgKSB7XG4gICAgdGhpcy5sb2FkTWV0YSgpO1xuICAgIHRoaXMuc3RhcnRFeHBpcmVOb3RpZnkoKTtcbiAgfVxuXG4gIF9kZWVwR2V0KG9iajogYW55LCBwYXRoOiBzdHJpbmdbXSwgZGVmYXVsdFZhbHVlPzogYW55KSB7XG4gICAgaWYgKCFvYmopIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgaWYgKHBhdGgubGVuZ3RoIDw9IDEpIHtcbiAgICAgIGNvbnN0IGNoZWNrT2JqID0gcGF0aC5sZW5ndGggPyBvYmpbcGF0aFswXV0gOiBvYmo7XG4gICAgICByZXR1cm4gdHlwZW9mIGNoZWNrT2JqID09PSAndW5kZWZpbmVkJyA/IGRlZmF1bHRWYWx1ZSA6IGNoZWNrT2JqO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aC5yZWR1Y2UoKG8sIGspID0+IG9ba10sIG9iaikgfHwgZGVmYXVsdFZhbHVlO1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBtZXRhXG5cbiAgcHJpdmF0ZSBwdXNoTWV0YShrZXk6IHN0cmluZykge1xuICAgIGlmICh0aGlzLm1ldGEuaGFzKGtleSkpIHJldHVybjtcbiAgICB0aGlzLm1ldGEuYWRkKGtleSk7XG4gICAgdGhpcy5zYXZlTWV0YSgpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVNZXRhKGtleTogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLm1ldGEuaGFzKGtleSkpIHJldHVybjtcbiAgICB0aGlzLm1ldGEuZGVsZXRlKGtleSk7XG4gICAgdGhpcy5zYXZlTWV0YSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkTWV0YSgpIHtcbiAgICBjb25zdCByZXQgPSB0aGlzLnN0b3JlLmdldCh0aGlzLm9wdGlvbnMubWV0YV9rZXkpO1xuICAgIGlmIChyZXQgJiYgcmV0LnYpIHtcbiAgICAgIChyZXQudiBhcyBzdHJpbmdbXSkuZm9yRWFjaChrZXkgPT4gdGhpcy5tZXRhLmFkZChrZXkpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNhdmVNZXRhKCkge1xuICAgIGNvbnN0IG1ldGFEYXRhOiBzdHJpbmdbXSA9IFtdO1xuICAgIHRoaXMubWV0YS5mb3JFYWNoKGtleSA9PiBtZXRhRGF0YS5wdXNoKGtleSkpO1xuICAgIHRoaXMuc3RvcmUuc2V0KHRoaXMub3B0aW9ucy5tZXRhX2tleSwgeyB2OiBtZXRhRGF0YSwgZTogMCB9KTtcbiAgfVxuXG4gIGdldE1ldGEoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHNldFxuXG4gIC8qKlxuICAgKiDDpsKMwoHDpMK5woXDpcKMwpbDp8K8wpPDpcKtwpggYE9ic2VydmFibGVgIMOlwq/CucOowrHCocOvwrzCjMOkwr7Ci8OlwqbCgsOvwrzCmlxuICAgKiAtIGBzZXQoJ2RhdGEvMScsIHRoaXMuaHR0cC5nZXQoJ2RhdGEvMScpKS5zdWJzY3JpYmUoKWBcbiAgICogLSBgc2V0KCdkYXRhLzEnLCB0aGlzLmh0dHAuZ2V0KCdkYXRhLzEnKSwgeyBleHBpcmU6IDEwIH0pLnN1YnNjcmliZSgpYFxuICAgKi9cbiAgc2V0PFQ+KFxuICAgIGtleTogc3RyaW5nLFxuICAgIGRhdGE6IE9ic2VydmFibGU8VD4sXG4gICAgb3B0aW9ucz86IHsgdHlwZT86ICdzJzsgZXhwaXJlPzogbnVtYmVyIH0sXG4gICk6IE9ic2VydmFibGU8VD47XG4gIC8qKlxuICAgKiDDpsKMwoHDpMK5woXDpcKMwpbDp8K8wpPDpcKtwpggYE9ic2VydmFibGVgIMOlwq/CucOowrHCocOvwrzCjMOkwr7Ci8OlwqbCgsOvwrzCmlxuICAgKiAtIGBzZXQoJ2RhdGEvMScsIHRoaXMuaHR0cC5nZXQoJ2RhdGEvMScpKS5zdWJzY3JpYmUoKWBcbiAgICogLSBgc2V0KCdkYXRhLzEnLCB0aGlzLmh0dHAuZ2V0KCdkYXRhLzEnKSwgeyBleHBpcmU6IDEwIH0pLnN1YnNjcmliZSgpYFxuICAgKi9cbiAgc2V0KFxuICAgIGtleTogc3RyaW5nLFxuICAgIGRhdGE6IE9ic2VydmFibGU8YW55PixcbiAgICBvcHRpb25zPzogeyB0eXBlPzogJ3MnOyBleHBpcmU/OiBudW1iZXIgfSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xuICAvKipcbiAgICogw6bCjMKBw6TCucKFw6XCjMKWw6fCvMKTw6XCrcKYw6XCn8K6w6fCocKAw6XCr8K5w6jCscKhw6/CvMKMw6TCvsKLw6XCpsKCw6/CvMKaXG4gICAqIC0gYHNldCgnZGF0YS8xJywgMSlgXG4gICAqIC0gYHNldCgnZGF0YS8xJywgMSwgeyBleHBpcmU6IDEwIH0pYFxuICAgKi9cbiAgc2V0KFxuICAgIGtleTogc3RyaW5nLFxuICAgIGRhdGE6IE9iamVjdCxcbiAgICBvcHRpb25zPzogeyB0eXBlPzogJ3MnOyBleHBpcmU/OiBudW1iZXIgfSxcbiAgKTogdm9pZDtcbiAgLyoqXG4gICAqIMOmwozCh8Olwq7CmsOnwrzCk8Olwq3CmMOnwrHCu8Olwp7Ci8Oowr/Cm8OowqHCjMOnwrzCk8Olwq3CmMOlwq/CucOowrHCocOvwrzCjMOkwr7Ci8OlwqbCgsOlwobChcOlwq3CmMOnwrzCk8Olwq3CmMOvwrzCmlxuICAgKiAtIGBzZXQoJ2RhdGEvMScsIDEsIHsgdHlwZTogJ20nIH0pYFxuICAgKiAtIGBzZXQoJ2RhdGEvMScsIDEsIHsgdHlwZTogJ20nLCBleHBpcmU6IDEwIH0pYFxuICAgKi9cbiAgc2V0KFxuICAgIGtleTogc3RyaW5nLFxuICAgIGRhdGE6IE9iamVjdCxcbiAgICBvcHRpb25zOiB7IHR5cGU6ICdtJyB8ICdzJzsgZXhwaXJlPzogbnVtYmVyIH0sXG4gICk6IHZvaWQ7XG4gIC8qKlxuICAgKiDDp8K8wpPDpcKtwpjDpcKvwrnDqMKxwqFcbiAgICovXG4gIHNldChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBkYXRhOiBhbnkgfCBPYnNlcnZhYmxlPGFueT4sXG4gICAgb3B0aW9uczoge1xuICAgICAgLyoqIMOlwq3CmMOlwoLCqMOnwrHCu8Olwp7Ci8OvwrzCjCdtJyDDqMKhwqjDp8KkwrrDpcKGwoXDpcKtwpjDr8K8wowncycgw6jCocKow6fCpMK6w6bCjMKBw6TCucKFICovXG4gICAgICB0eXBlPzogJ20nIHwgJ3MnO1xuICAgICAgLyoqXG4gICAgICAgKiDDqMK/wofDpsKcwp/DpsKXwrbDqcKXwrTDr8K8wozDpcKNwpXDpMK9wo0gYMOnwqfCkmBcbiAgICAgICAqL1xuICAgICAgZXhwaXJlPzogbnVtYmVyO1xuICAgIH0gPSB7fSxcbiAgKTogYW55IHtcbiAgICAvLyBleHBpcmVcbiAgICBsZXQgZSA9IDA7XG4gICAgaWYgKG9wdGlvbnMuZXhwaXJlKSB7XG4gICAgICBlID0gYWRkU2Vjb25kcyhuZXcgRGF0ZSgpLCBvcHRpb25zLmV4cGlyZSkudmFsdWVPZigpO1xuICAgIH1cbiAgICBpZiAoIShkYXRhIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkpIHtcbiAgICAgIHRoaXMuc2F2ZShvcHRpb25zLnR5cGUsIGtleSwgeyB2OiBkYXRhLCBlIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YS5waXBlKFxuICAgICAgdGFwKCh2OiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5zYXZlKG9wdGlvbnMudHlwZSwga2V5LCB7IHYsIGUgfSk7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBzYXZlKHR5cGU6ICdtJyB8ICdzJywga2V5OiBzdHJpbmcsIHZhbHVlOiBJQ2FjaGUpIHtcbiAgICBpZiAodHlwZSA9PT0gJ20nKSB7XG4gICAgICB0aGlzLm1lbW9yeS5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RvcmUuc2V0KHRoaXMub3B0aW9ucy5wcmVmaXggKyBrZXksIHZhbHVlKTtcbiAgICAgIHRoaXMucHVzaE1ldGEoa2V5KTtcbiAgICB9XG4gICAgdGhpcy5ydW5Ob3RpZnkoa2V5LCAnc2V0Jyk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBnZXRcblxuICAvKiogw6jCjsK3w6XCj8KWw6fCvMKTw6XCrcKYw6bClcKww6bCjcKuw6/CvMKMw6jCi8KlIGBrZXlgIMOkwrjCjcOlwq3CmMOlwpzCqMOlwojCmSBga2V5YCDDpMK9wpzDpMK4wrpIVFRQw6jCr8K3w6bCscKCw6fCvMKTw6XCrcKYw6XCkMKOw6jCv8KUw6XCm8KeICovXG4gIGdldDxUPihcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgbW9kZTogJ3Byb21pc2UnO1xuICAgICAgdHlwZT86ICdtJyB8ICdzJztcbiAgICAgIGV4cGlyZT86IG51bWJlcjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPFQ+O1xuICAvKiogw6jCjsK3w6XCj8KWw6fCvMKTw6XCrcKYw6bClcKww6bCjcKuw6/CvMKMw6jCi8KlIGBrZXlgIMOkwrjCjcOlwq3CmMOlwpzCqMOlwojCmSBga2V5YCDDpMK9wpzDpMK4wrpIVFRQw6jCr8K3w6bCscKCw6fCvMKTw6XCrcKYw6XCkMKOw6jCv8KUw6XCm8KeICovXG4gIGdldChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgbW9kZTogJ3Byb21pc2UnO1xuICAgICAgdHlwZT86ICdtJyB8ICdzJztcbiAgICAgIGV4cGlyZT86IG51bWJlcjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPGFueT47XG4gIC8qKiDDqMKOwrfDpcKPwpbDp8K8wpPDpcKtwpjDpsKVwrDDpsKNwq7Dr8K8wozDqMKLwqUgYGtleWAgw6TCuMKNw6XCrcKYw6XCnMKow6bCiMKWw6XCt8Kyw6jCv8KHw6bCnMKfw6XCiMKZw6jCv8KUw6XCm8KeIG51bGwgKi9cbiAgZ2V0KFxuICAgIGtleTogc3RyaW5nLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG1vZGU6ICdub25lJztcbiAgICAgIHR5cGU/OiAnbScgfCAncyc7XG4gICAgICBleHBpcmU/OiBudW1iZXI7XG4gICAgfSxcbiAgKTogYW55O1xuICBnZXQoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9uczoge1xuICAgICAgbW9kZT86ICdwcm9taXNlJyB8ICdub25lJztcbiAgICAgIHR5cGU/OiAnbScgfCAncyc7XG4gICAgICBleHBpcmU/OiBudW1iZXI7XG4gICAgfSA9IHt9LFxuICApOiBPYnNlcnZhYmxlPGFueT4gfCBhbnkge1xuICAgIGNvbnN0IGlzUHJvbWlzZSA9XG4gICAgICBvcHRpb25zLm1vZGUgIT09ICdub25lJyAmJiB0aGlzLm9wdGlvbnMubW9kZSA9PT0gJ3Byb21pc2UnO1xuICAgIGNvbnN0IHZhbHVlOiBJQ2FjaGUgPSB0aGlzLm1lbW9yeS5oYXMoa2V5KVxuICAgICAgPyB0aGlzLm1lbW9yeS5nZXQoa2V5KVxuICAgICAgOiB0aGlzLnN0b3JlLmdldCh0aGlzLm9wdGlvbnMucHJlZml4ICsga2V5KTtcbiAgICBpZiAoIXZhbHVlIHx8ICh2YWx1ZS5lICYmIHZhbHVlLmUgPiAwICYmIHZhbHVlLmUgPCBuZXcgRGF0ZSgpLnZhbHVlT2YoKSkpIHtcbiAgICAgIGlmIChpc1Byb21pc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgICAgIC5nZXQoa2V5KVxuICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgbWFwKChyZXQ6IGFueSkgPT5cbiAgICAgICAgICAgICAgdGhpcy5fZGVlcEdldChyZXQsIHRoaXMub3B0aW9ucy5yZU5hbWUgYXMgc3RyaW5nW10sIG51bGwpLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHRhcCh2ID0+IHRoaXMuc2V0KGtleSwgdikpLFxuICAgICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNQcm9taXNlID8gb2YodmFsdWUudikgOiB2YWx1ZS52O1xuICB9XG5cbiAgLyoqIMOowo7Ct8Olwo/ClsOnwrzCk8Olwq3CmMOmwpXCsMOmwo3CrsOvwrzCjMOowovCpSBga2V5YCDDpMK4wo3DpcKtwpjDpcKcwqjDpsKIwpbDpcK3wrLDqMK/wofDpsKcwp/DpcKIwpnDqMK/wpTDpcKbwp4gbnVsbCAqL1xuICBnZXROb25lPFQ+KGtleTogc3RyaW5nKTogVDtcbiAgLyoqIMOowo7Ct8Olwo/ClsOnwrzCk8Olwq3CmMOmwpXCsMOmwo3CrsOvwrzCjMOowovCpSBga2V5YCDDpMK4wo3DpcKtwpjDpcKcwqjDpsKIwpbDpcK3wrLDqMK/wofDpsKcwp/DpcKIwpnDqMK/wpTDpcKbwp4gbnVsbCAqL1xuICBnZXROb25lKGtleTogc3RyaW5nKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoa2V5LCB7IG1vZGU6ICdub25lJyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDqMKOwrfDpcKPwpbDp8K8wpPDpcKtwpjDr8K8wozDqMKLwqXDpMK4wo3DpcKtwpjDpcKcwqjDpcKIwpnDqMKuwr7Dp8K9wq7DpsKMwoHDpMK5woXDpcKMwpbDp8K8wpPDpcKtwpggYE9ic2VydmFibGVgIMOlwq/CucOowrHCoVxuICAgKi9cbiAgdHJ5R2V0PFQ+KFxuICAgIGtleTogc3RyaW5nLFxuICAgIGRhdGE6IE9ic2VydmFibGU8VD4sXG4gICAgb3B0aW9ucz86IHsgdHlwZT86ICdzJzsgZXhwaXJlPzogbnVtYmVyIH0sXG4gICk6IE9ic2VydmFibGU8VD47XG4gIC8qKlxuICAgKiDDqMKOwrfDpcKPwpbDp8K8wpPDpcKtwpjDr8K8wozDqMKLwqXDpMK4wo3DpcKtwpjDpcKcwqjDpcKIwpnDqMKuwr7Dp8K9wq7DpsKMwoHDpMK5woXDpcKMwpbDp8K8wpPDpcKtwpggYE9ic2VydmFibGVgIMOlwq/CucOowrHCoVxuICAgKi9cbiAgdHJ5R2V0KFxuICAgIGtleTogc3RyaW5nLFxuICAgIGRhdGE6IE9ic2VydmFibGU8YW55PixcbiAgICBvcHRpb25zPzogeyB0eXBlPzogJ3MnOyBleHBpcmU/OiBudW1iZXIgfSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xuICAvKipcbiAgICogw6jCjsK3w6XCj8KWw6fCvMKTw6XCrcKYw6/CvMKMw6jCi8Klw6TCuMKNw6XCrcKYw6XCnMKow6XCiMKZw6jCrsK+w6fCvcKuw6bCjMKBw6TCucKFw6XCjMKWw6fCvMKTw6XCrcKYw6XCn8K6w6fCocKAw6XCr8K5w6jCscKhXG4gICAqL1xuICB0cnlHZXQoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgZGF0YTogT2JqZWN0LFxuICAgIG9wdGlvbnM/OiB7IHR5cGU/OiAncyc7IGV4cGlyZT86IG51bWJlciB9LFxuICApOiBhbnk7XG4gIC8qKlxuICAgKiDDqMKOwrfDpcKPwpbDp8K8wpPDpcKtwpjDr8K8wozDqMKLwqXDpMK4wo3DpcKtwpjDpcKcwqjDpcKIwpnDqMKuwr7Dp8K9wq7DpsKMwofDpcKuwprDp8K8wpPDpcKtwpjDp8KxwrvDpcKewovDqMK/wpvDqMKhwozDp8K8wpPDpcKtwpjDpcKvwrnDqMKxwqFcbiAgICovXG4gIHRyeUdldChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBkYXRhOiBPYmplY3QsXG4gICAgb3B0aW9uczogeyB0eXBlOiAnbScgfCAncyc7IGV4cGlyZT86IG51bWJlciB9LFxuICApOiBhbnk7XG5cbiAgLyoqXG4gICAqIMOowo7Ct8Olwo/ClsOnwrzCk8Olwq3CmMOvwrzCjMOowovCpcOkwrjCjcOlwq3CmMOlwpzCqMOlwojCmcOowq7CvsOnwr3CrsOnwrzCk8Olwq3CmMOlwq/CucOowrHCoVxuICAgKi9cbiAgdHJ5R2V0KFxuICAgIGtleTogc3RyaW5nLFxuICAgIGRhdGE6IGFueSB8IE9ic2VydmFibGU8YW55PixcbiAgICBvcHRpb25zOiB7XG4gICAgICAvKiogw6XCrcKYw6XCgsKow6fCscK7w6XCnsKLw6/CvMKMJ20nIMOowqHCqMOnwqTCusOlwobChcOlwq3CmMOvwrzCjCdzJyDDqMKhwqjDp8KkwrrDpsKMwoHDpMK5woUgKi9cbiAgICAgIHR5cGU/OiAnbScgfCAncyc7XG4gICAgICAvKipcbiAgICAgICAqIMOowr/Ch8OmwpzCn8OmwpfCtsOpwpfCtMOvwrzCjMOlwo3ClcOkwr3CjSBgw6fCp8KSYFxuICAgICAgICovXG4gICAgICBleHBpcmU/OiBudW1iZXI7XG4gICAgfSA9IHt9LFxuICApOiBhbnkge1xuICAgIGNvbnN0IHJldCA9IHRoaXMuZ2V0Tm9uZShrZXkpO1xuICAgIGlmIChyZXQgPT09IG51bGwpIHtcbiAgICAgIGlmICghKGRhdGEgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSkge1xuICAgICAgICB0aGlzLnNldChrZXksIGRhdGEsIDxhbnk+b3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5zZXQoa2V5LCBkYXRhIGFzIE9ic2VydmFibGU8YW55PiwgPGFueT5vcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIG9mKHJldCk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBoYXNcblxuICAvKiogw6bCmMKvw6XCkMKmw6fCvMKTw6XCrcKYIGBrZXlgICovXG4gIGhhcyhrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1lbW9yeS5oYXMoa2V5KSB8fCB0aGlzLm1ldGEuaGFzKGtleSk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiByZW1vdmVcblxuICBwcml2YXRlIF9yZW1vdmUoa2V5OiBzdHJpbmcsIG5lZWROb3RpZnk6IGJvb2xlYW4pIHtcbiAgICBpZiAobmVlZE5vdGlmeSkgdGhpcy5ydW5Ob3RpZnkoa2V5LCAncmVtb3ZlJyk7XG4gICAgaWYgKHRoaXMubWVtb3J5LmhhcyhrZXkpKSB7XG4gICAgICB0aGlzLm1lbW9yeS5kZWxldGUoa2V5KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zdG9yZS5yZW1vdmUodGhpcy5vcHRpb25zLnByZWZpeCArIGtleSk7XG4gICAgdGhpcy5yZW1vdmVNZXRhKGtleSk7XG4gIH1cblxuICAvKiogw6fCp8K7w6nCmcKkw6fCvMKTw6XCrcKYICovXG4gIHJlbW92ZShrZXk6IHN0cmluZykge1xuICAgIHRoaXMuX3JlbW92ZShrZXksIHRydWUpO1xuICB9XG5cbiAgLyoqIMOmwrjChcOnwqnCusOmwonCgMOmwpzCicOnwrzCk8Olwq3CmCAqL1xuICBjbGVhcigpIHtcbiAgICB0aGlzLm5vdGlmeUJ1ZmZlci5mb3JFYWNoKCh2LCBrKSA9PiB0aGlzLnJ1bk5vdGlmeShrLCAncmVtb3ZlJykpO1xuICAgIHRoaXMubWVtb3J5LmNsZWFyKCk7XG4gICAgdGhpcy5tZXRhLmZvckVhY2goa2V5ID0+IHRoaXMuc3RvcmUucmVtb3ZlKHRoaXMub3B0aW9ucy5wcmVmaXggKyBrZXkpKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIG5vdGlmeVxuXG4gIC8qKlxuICAgKiDDqMKuwr7Dp8K9wq7Dp8KbwpHDpcKQwqzDqcKiwpHDp8KOwofDr8K8wozDpcKNwpXDpMK9wo3Dr8K8wprDpsKvwqvDp8KnwpLDpMK4wpTDpsKcwoDDpMK9wo4gYDIwbXNgw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYDMwMDBtc2BcbiAgICovXG4gIHNldCBmcmVxKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLmZyZXFfdGljayA9IE1hdGgubWF4KDIwLCB2YWx1ZSk7XG4gICAgdGhpcy5hYm9ydEV4cGlyZU5vdGlmeSgpO1xuICAgIHRoaXMuc3RhcnRFeHBpcmVOb3RpZnkoKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhcnRFeHBpcmVOb3RpZnkoKSB7XG4gICAgdGhpcy5jaGVja0V4cGlyZU5vdGlmeSgpO1xuICAgIHRoaXMucnVuRXhwaXJlTm90aWZ5KCk7XG4gIH1cblxuICBwcml2YXRlIHJ1bkV4cGlyZU5vdGlmeSgpIHtcbiAgICB0aGlzLmZyZXFfdGltZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jaGVja0V4cGlyZU5vdGlmeSgpO1xuICAgICAgdGhpcy5ydW5FeHBpcmVOb3RpZnkoKTtcbiAgICB9LCB0aGlzLmZyZXFfdGljayk7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrRXhwaXJlTm90aWZ5KCkge1xuICAgIGNvbnN0IHJlbW92ZWQ6IHN0cmluZ1tdID0gW107XG4gICAgdGhpcy5ub3RpZnlCdWZmZXIuZm9yRWFjaCgodiwga2V5KSA9PiB7XG4gICAgICBpZiAodGhpcy5oYXMoa2V5KSAmJiB0aGlzLmdldE5vbmUoa2V5KSA9PT0gbnVsbCkgcmVtb3ZlZC5wdXNoKGtleSk7XG4gICAgfSk7XG4gICAgcmVtb3ZlZC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICB0aGlzLnJ1bk5vdGlmeShrZXksICdleHBpcmUnKTtcbiAgICAgIHRoaXMuX3JlbW92ZShrZXksIGZhbHNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYWJvcnRFeHBpcmVOb3RpZnkoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuZnJlcV90aW1lKTtcbiAgfVxuXG4gIHByaXZhdGUgcnVuTm90aWZ5KGtleTogc3RyaW5nLCB0eXBlOiBDYWNoZU5vdGlmeVR5cGUpIHtcbiAgICBpZiAoIXRoaXMubm90aWZ5QnVmZmVyLmhhcyhrZXkpKSByZXR1cm47XG4gICAgdGhpcy5ub3RpZnlCdWZmZXIuZ2V0KGtleSkubmV4dCh7IHR5cGUsIHZhbHVlOiB0aGlzLmdldE5vbmUoa2V5KSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBga2V5YCDDp8KbwpHDpcKQwqzDr8K8wozDpcK9wpMgYGtleWAgw6XCj8KYw6bCm8K0w6PCgMKBw6jCv8KHw6bCnMKfw6PCgMKBw6fCp8K7w6nCmcKkw6bCl8K2w6nCgMKaw6fCn8Klw6/CvMKMw6bCs8Kow6bChMKPw6TCu8Klw6TCuMKLw6jCi8Klw6XCucKyw6fCu8KGw6jCisKCw6/CvMKaXG4gICAqXG4gICAqIC0gw6jCsMKDw6fClMKow6XCkMKOw6nCmcKkw6XChsKNw6bCrMKhw6jCsMKDw6fClMKoIGBjYW5jZWxOb3RpZnlgIMOlwpDCpsOlwojCmcOmwrDCuMOowr/CnMOkwrjCjcOowr/Ch8OmwpzCn1xuICAgKiAtIMOnwpvCkcOlwpDCrMOlwpnCqMOmwq/CjyBgZnJlcWAgKMOpwrvCmMOowq7CpMOvwrzCmjPDp8KnwpIpIMOmwonCp8OowqHCjMOkwrjCgMOmwqzCocOowr/Ch8OmwpzCn8OmwqPCgMOmwp/CpVxuICAgKi9cbiAgbm90aWZ5KGtleTogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYWNoZU5vdGlmeVJlc3VsdD4ge1xuICAgIGlmICghdGhpcy5ub3RpZnlCdWZmZXIuaGFzKGtleSkpIHtcbiAgICAgIGNvbnN0IGNoYW5nZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PENhY2hlTm90aWZ5UmVzdWx0Pih0aGlzLmdldE5vbmUoa2V5KSk7XG4gICAgICB0aGlzLm5vdGlmeUJ1ZmZlci5zZXQoa2V5LCBjaGFuZ2UkKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubm90aWZ5QnVmZmVyLmdldChrZXkpLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIMOlwo/ClsOmwrbCiCBga2V5YCDDp8KbwpHDpcKQwqxcbiAgICovXG4gIGNhbmNlbE5vdGlmeShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5ub3RpZnlCdWZmZXIuaGFzKGtleSkpIHJldHVybjtcbiAgICB0aGlzLm5vdGlmeUJ1ZmZlci5nZXQoa2V5KS51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMubm90aWZ5QnVmZmVyLmRlbGV0ZShrZXkpO1xuICB9XG5cbiAgLyoqIGBrZXlgIMOmwpjCr8OlwpDCpsOlwrfCssOnwrvCj8OnwpvCkcOlwpDCrCAqL1xuICBoYXNOb3RpZnkoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5ub3RpZnlCdWZmZXIuaGFzKGtleSk7XG4gIH1cblxuICAvKiogw6bCuMKFw6fCqcK6w6bCicKAw6bCnMKJIGBrZXlgIMOnwprChMOnwpvCkcOlwpDCrCAqL1xuICBjbGVhck5vdGlmeSgpOiB2b2lkIHtcbiAgICB0aGlzLm5vdGlmeUJ1ZmZlci5mb3JFYWNoKHYgPT4gdi51bnN1YnNjcmliZSgpKTtcbiAgICB0aGlzLm5vdGlmeUJ1ZmZlci5jbGVhcigpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMubWVtb3J5LmNsZWFyKCk7XG4gICAgdGhpcy5hYm9ydEV4cGlyZU5vdGlmeSgpO1xuICAgIHRoaXMuY2xlYXJOb3RpZnkoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSUNhY2hlU3RvcmUsIElDYWNoZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZUNhY2hlU2VydmljZSBpbXBsZW1lbnRzIElDYWNoZVN0b3JlIHtcbiAgZ2V0KGtleTogc3RyaW5nKTogSUNhY2hlIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpIHx8ICdudWxsJykgfHwgbnVsbDtcbiAgfVxuXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IElDYWNoZSk6IGJvb2xlYW4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJlbW92ZShrZXk6IHN0cmluZykge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERDX1NUT1JFX1NUT1JBR0VfVE9LRU4gfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBEZWxvbkNhY2hlQ29uZmlnIH0gZnJvbSAnLi9jYWNoZS5jb25maWcnO1xuaW1wb3J0IHsgQ2FjaGVTZXJ2aWNlIH0gZnJvbSAnLi9jYWNoZS5zZXJ2aWNlJztcbmltcG9ydCB7IExvY2FsU3RvcmFnZUNhY2hlU2VydmljZSB9IGZyb20gJy4vbG9jYWwtc3RvcmFnZS1jYWNoZS5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHt9KVxuZXhwb3J0IGNsYXNzIERlbG9uQ2FjaGVNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERlbG9uQ2FjaGVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgRGVsb25DYWNoZUNvbmZpZyxcbiAgICAgICAgQ2FjaGVTZXJ2aWNlLFxuICAgICAgICB7IHByb3ZpZGU6IERDX1NUT1JFX1NUT1JBR0VfVE9LRU4sIHVzZUNsYXNzOiBMb2NhbFN0b3JhZ2VDYWNoZVNlcnZpY2UgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQVFBLE1BQWEsc0JBQXNCLEdBQUcsSUFBSSxjQUFjLENBQ3RELHdCQUF3QixDQUN6Qjs7Ozs7O0FDVkQsTUFBYSxnQkFBZ0I7SUFBN0I7Ozs7OztRQU1FLFNBQUksR0FBd0IsU0FBUyxDQUFDOzs7Ozs7O1FBT3RDLFdBQU0sR0FBdUIsRUFBRSxDQUFDOzs7O1FBSWhDLFdBQU0sR0FBWSxFQUFFLENBQUM7Ozs7UUFJckIsYUFBUSxHQUFZLGNBQWMsQ0FBQztLQUNwQztDQUFBOzs7Ozs7QUN0QkQsTUFnQmEsWUFBWTs7Ozs7O0lBVXZCLFlBQ1UsT0FBeUIsRUFDTyxLQUFrQixFQUNsRCxJQUFnQjtRQUZoQixZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUNPLFVBQUssR0FBTCxLQUFLLENBQWE7UUFDbEQsU0FBSSxHQUFKLElBQUksQ0FBWTtRQVpULFdBQU0sR0FBd0IsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFDeEQsaUJBQVksR0FHekIsSUFBSSxHQUFHLEVBQThDLENBQUM7UUFDbEQsU0FBSSxHQUFnQixJQUFJLEdBQUcsRUFBVSxDQUFDO1FBQ3RDLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFRdkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0tBQzFCOzs7Ozs7O0lBRUQsUUFBUSxDQUFDLEdBQVEsRUFBRSxJQUFjLEVBQUUsWUFBa0I7UUFDbkQsSUFBSSxDQUFDLEdBQUc7WUFBRSxPQUFPLFlBQVksQ0FBQztRQUM5QixJQUFJLElBQUksQ0FB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