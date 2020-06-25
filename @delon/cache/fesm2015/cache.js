import { HttpClient } from '@angular/common/http';
import { InjectionToken, Injectable, Inject, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { AlainConfigService } from '@delon/util';
import addSeconds from 'date-fns/addSeconds';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { tap, map } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * Generated from: src/interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ICache() { }
if (false) {
    /** @type {?} */
    ICache.prototype.v;
    /**
     * 过期时间戳，`0` 表示不过期
     * @type {?}
     */
    ICache.prototype.e;
}
/**
 * @record
 */
function ICacheStore() { }
if (false) {
    /**
     * @param {?} key
     * @return {?}
     */
    ICacheStore.prototype.get = function (key) { };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    ICacheStore.prototype.set = function (key, value) { };
    /**
     * @param {?} key
     * @return {?}
     */
    ICacheStore.prototype.remove = function (key) { };
}
/**
 * @record
 */
function CacheNotifyResult() { }
if (false) {
    /** @type {?} */
    CacheNotifyResult.prototype.type;
    /** @type {?|undefined} */
    CacheNotifyResult.prototype.value;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/local-storage-cache.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DC_STORE_STORAGE_TOKEN = new InjectionToken('DC_STORE_STORAGE_TOKEN', {
    providedIn: 'root',
    factory: DC_STORE_STORAGE_TOKEN_FACTORY,
});
/**
 * @return {?}
 */
function DC_STORE_STORAGE_TOKEN_FACTORY() {
    return new LocalStorageCacheService();
}
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
 * Generated from: src/cache.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CacheService {
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
/** @nocollapse */ CacheService.ɵprov = ɵɵdefineInjectable({ factory: function CacheService_Factory() { return new CacheService(ɵɵinject(AlainConfigService), ɵɵinject(DC_STORE_STORAGE_TOKEN), ɵɵinject(HttpClient)); }, token: CacheService, providedIn: "root" });
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

/**
 * @fileoverview added by tsickle
 * Generated from: src/cache.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DelonCacheModule {
}
DelonCacheModule.decorators = [
    { type: NgModule, args: [{},] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: cache.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CacheService, DelonCacheModule, DC_STORE_STORAGE_TOKEN as ɵa, DC_STORE_STORAGE_TOKEN_FACTORY as ɵb, LocalStorageCacheService as ɵc };
//# sourceMappingURL=cache.js.map
