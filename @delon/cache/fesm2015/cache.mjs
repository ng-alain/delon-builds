import * as i0 from '@angular/core';
import { InjectionToken, inject, Injectable, Inject, NgModule } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { addSeconds } from 'date-fns';
import * as i3 from '@angular/cdk/platform';
import { Platform } from '@angular/cdk/platform';
import * as i1 from '@delon/util/config';
import * as i2 from '@angular/common/http';

const DC_STORE_STORAGE_TOKEN = new InjectionToken('DC_STORE_STORAGE_TOKEN', {
    providedIn: 'root',
    factory: () => new LocalStorageCacheService(inject(Platform))
});
class LocalStorageCacheService {
    constructor(platform) {
        this.platform = platform;
    }
    get(key) {
        if (!this.platform.isBrowser) {
            return null;
        }
        return JSON.parse(localStorage.getItem(key) || 'null') || null;
    }
    set(key, value) {
        if (!this.platform.isBrowser) {
            return true;
        }
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    }
    remove(key) {
        if (!this.platform.isBrowser) {
            return;
        }
        localStorage.removeItem(key);
    }
}

class CacheService {
    constructor(cogSrv, store, http, platform) {
        this.store = store;
        this.http = http;
        this.platform = platform;
        this.memory = new Map();
        this.notifyBuffer = new Map();
        this.meta = new Set();
        this.freqTick = 3000;
        this.cog = cogSrv.merge('cache', {
            mode: 'promise',
            reName: '',
            prefix: '',
            meta_key: '__cache_meta'
        });
        if (!platform.isBrowser)
            return;
        this.loadMeta();
        this.startExpireNotify();
    }
    deepGet(obj, path, defaultValue) {
        if (!obj)
            return defaultValue;
        if (path.length <= 1) {
            const checkObj = path.length ? obj[path[0]] : obj;
            return typeof checkObj === 'undefined' ? defaultValue : checkObj;
        }
        return path.reduce((o, k) => o[k], obj) || defaultValue;
    }
    // #region meta
    pushMeta(key) {
        if (this.meta.has(key))
            return;
        this.meta.add(key);
        this.saveMeta();
    }
    removeMeta(key) {
        if (!this.meta.has(key))
            return;
        this.meta.delete(key);
        this.saveMeta();
    }
    loadMeta() {
        const ret = this.store.get(this.cog.meta_key);
        if (ret && ret.v) {
            ret.v.forEach(key => this.meta.add(key));
        }
    }
    saveMeta() {
        const metaData = [];
        this.meta.forEach(key => metaData.push(key));
        this.store.set(this.cog.meta_key, { v: metaData, e: 0 });
    }
    getMeta() {
        return this.meta;
    }
    /**
     * 缓存对象
     */
    set(key, data, options = {}) {
        if (!this.platform.isBrowser)
            return;
        let e = 0;
        const { type, expire } = this.cog;
        options = Object.assign({ type,
            expire }, options);
        if (options.expire) {
            e = addSeconds(new Date(), options.expire).valueOf();
        }
        const emitNotify = options.emitNotify !== false;
        if (!(data instanceof Observable)) {
            this.save(options.type, key, { v: data, e }, emitNotify);
            return;
        }
        return data.pipe(tap((v) => {
            this.save(options.type, key, { v, e }, emitNotify);
        }));
    }
    save(type, key, value, emitNotify = true) {
        if (type === 'm') {
            this.memory.set(key, value);
        }
        else {
            this.store.set(this.cog.prefix + key, value);
            this.pushMeta(key);
        }
        if (emitNotify) {
            this.runNotify(key, 'set');
        }
    }
    get(key, options = {}) {
        if (!this.platform.isBrowser)
            return null;
        const isPromise = options.mode !== 'none' && this.cog.mode === 'promise';
        const value = this.memory.has(key) ? this.memory.get(key) : this.store.get(this.cog.prefix + key);
        if (!value || (value.e && value.e > 0 && value.e < new Date().valueOf())) {
            if (isPromise) {
                return (this.cog.request ? this.cog.request(key) : this.http.get(key)).pipe(map((ret) => this.deepGet(ret, this.cog.reName, null)), tap(v => this.set(key, v, {
                    type: options.type,
                    expire: options.expire,
                    emitNotify: options.emitNotify
                })));
            }
            return null;
        }
        return isPromise ? of(value.v) : value.v;
    }
    /** 获取缓存数据，若 `key` 不存在或已过期则返回 null */
    getNone(key) {
        return this.get(key, { mode: 'none' });
    }
    /**
     * 获取缓存，若不存在则设置缓存对象
     */
    tryGet(key, data, options = {}) {
        if (!this.platform.isBrowser)
            return null;
        const ret = this.getNone(key);
        if (ret === null) {
            if (!(data instanceof Observable)) {
                this.set(key, data, options);
                return data;
            }
            return this.set(key, data, options);
        }
        return of(ret);
    }
    // #endregion
    // #region has
    /** 是否缓存 `key` */
    has(key) {
        return this.memory.has(key) || this.meta.has(key);
    }
    // #endregion
    // #region remove
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
    /** 移除缓存 */
    remove(key) {
        if (!this.platform.isBrowser)
            return;
        this._remove(key, true);
    }
    /** 清空所有缓存 */
    clear() {
        if (!this.platform.isBrowser)
            return;
        this.notifyBuffer.forEach((_v, k) => this.runNotify(k, 'remove'));
        this.memory.clear();
        this.meta.forEach(key => this.store.remove(this.cog.prefix + key));
    }
    // #endregion
    // #region notify
    /**
     * 设置监听频率，单位：毫秒且最低 `20ms`，默认：`3000ms`
     */
    set freq(value) {
        this.freqTick = Math.max(20, value);
        this.abortExpireNotify();
        this.startExpireNotify();
    }
    startExpireNotify() {
        this.checkExpireNotify();
        this.runExpireNotify();
    }
    runExpireNotify() {
        this.freqTime = setTimeout(() => {
            this.checkExpireNotify();
            this.runExpireNotify();
        }, this.freqTick);
    }
    checkExpireNotify() {
        const removed = [];
        this.notifyBuffer.forEach((_v, key) => {
            if (this.has(key) && this.getNone(key) === null)
                removed.push(key);
        });
        removed.forEach(key => {
            this.runNotify(key, 'expire');
            this._remove(key, false);
        });
    }
    abortExpireNotify() {
        clearTimeout(this.freqTime);
    }
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
     */
    notify(key) {
        if (!this.notifyBuffer.has(key)) {
            const change$ = new BehaviorSubject(this.getNone(key));
            this.notifyBuffer.set(key, change$);
        }
        return this.notifyBuffer.get(key).asObservable();
    }
    /**
     * 取消 `key` 监听
     */
    cancelNotify(key) {
        if (!this.notifyBuffer.has(key))
            return;
        this.notifyBuffer.get(key).unsubscribe();
        this.notifyBuffer.delete(key);
    }
    /** `key` 是否已经监听 */
    hasNotify(key) {
        return this.notifyBuffer.has(key);
    }
    /** 清空所有 `key` 的监听 */
    clearNotify() {
        this.notifyBuffer.forEach(v => v.unsubscribe());
        this.notifyBuffer.clear();
    }
    // #endregion
    ngOnDestroy() {
        this.memory.clear();
        this.abortExpireNotify();
        this.clearNotify();
    }
}
CacheService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: CacheService, deps: [{ token: i1.AlainConfigService }, { token: DC_STORE_STORAGE_TOKEN }, { token: i2.HttpClient }, { token: i3.Platform }], target: i0.ɵɵFactoryTarget.Injectable });
CacheService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: CacheService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: CacheService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () {
        return [{ type: i1.AlainConfigService }, { type: undefined, decorators: [{
                        type: Inject,
                        args: [DC_STORE_STORAGE_TOKEN]
                    }] }, { type: i2.HttpClient }, { type: i3.Platform }];
    } });

class DelonCacheModule {
}
DelonCacheModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: DelonCacheModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DelonCacheModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: DelonCacheModule });
DelonCacheModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: DelonCacheModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: DelonCacheModule, decorators: [{
            type: NgModule,
            args: [{}]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { CacheService, DelonCacheModule };
//# sourceMappingURL=cache.mjs.map
