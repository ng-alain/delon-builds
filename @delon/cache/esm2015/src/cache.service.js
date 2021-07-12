import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { addSeconds } from 'date-fns';
import { AlainConfigService } from '@delon/util/config';
import { DC_STORE_STORAGE_TOKEN } from './local-storage-cache.service';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
import * as i2 from "./local-storage-cache.service";
import * as i3 from "@angular/common/http";
export class CacheService {
    constructor(cogSrv, store, http) {
        this.store = store;
        this.http = http;
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
        let e = 0;
        const { type, expire } = this.cog;
        options = Object.assign({ type,
            expire }, options);
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
    get(key, options = {}) {
        const isPromise = options.mode !== 'none' && this.cog.mode === 'promise';
        const value = this.memory.has(key) ? this.memory.get(key) : this.store.get(this.cog.prefix + key);
        if (!value || (value.e && value.e > 0 && value.e < new Date().valueOf())) {
            if (isPromise) {
                return (this.cog.request ? this.cog.request(key) : this.http.get(key)).pipe(map((ret) => this.deepGet(ret, this.cog.reName, null)), tap(v => this.set(key, v, { type: options.type, expire: options.expire })));
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
        this._remove(key, true);
    }
    /** 清空所有缓存 */
    clear() {
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
CacheService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CacheService_Factory() { return new CacheService(i0.ɵɵinject(i1.AlainConfigService), i0.ɵɵinject(i2.DC_STORE_STORAGE_TOKEN), i0.ɵɵinject(i3.HttpClient)); }, token: CacheService, providedIn: "root" });
CacheService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
CacheService.ctorParameters = () => [
    { type: AlainConfigService },
    { type: undefined, decorators: [{ type: Inject, args: [DC_STORE_STORAGE_TOKEN,] }] },
    { type: HttpClient }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NhY2hlL3NyYy9jYWNoZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUxQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBSXRDLE9BQU8sRUFBb0Isa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUcxRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7QUFHdkUsTUFBTSxPQUFPLFlBQVk7SUFXdkIsWUFDRSxNQUEwQixFQUNjLEtBQWtCLEVBQ2xELElBQWdCO1FBRGdCLFVBQUssR0FBTCxLQUFLLENBQWE7UUFDbEQsU0FBSSxHQUFKLElBQUksQ0FBWTtRQWJULFdBQU0sR0FBd0IsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFDeEQsaUJBQVksR0FBb0QsSUFBSSxHQUFHLEVBR3JGLENBQUM7UUFDSSxTQUFJLEdBQWdCLElBQUksR0FBRyxFQUFVLENBQUM7UUFDdEMsYUFBUSxHQUFHLElBQUksQ0FBQztRQVN0QixJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQy9CLElBQUksRUFBRSxTQUFTO1lBQ2YsTUFBTSxFQUFFLEVBQUU7WUFDVixNQUFNLEVBQUUsRUFBRTtZQUNWLFFBQVEsRUFBRSxjQUFjO1NBQ3pCLENBQUUsQ0FBQztRQUNKLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU8sT0FBTyxDQUFDLEdBQWMsRUFBRSxJQUFjLEVBQUUsWUFBd0I7UUFDdEUsSUFBSSxDQUFDLEdBQUc7WUFBRSxPQUFPLFlBQVksQ0FBQztRQUM5QixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3BCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQ2xELE9BQU8sT0FBTyxRQUFRLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztTQUNsRTtRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxZQUFZLENBQUM7SUFDMUQsQ0FBQztJQUVELGVBQWU7SUFFUCxRQUFRLENBQUMsR0FBVztRQUMxQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztZQUFFLE9BQU87UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFTyxVQUFVLENBQUMsR0FBVztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1lBQUUsT0FBTztRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVPLFFBQVE7UUFDZCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVMsQ0FBQyxDQUFDO1FBQy9DLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDZixHQUFHLENBQUMsQ0FBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDeEQ7SUFDSCxDQUFDO0lBRU8sUUFBUTtRQUNkLE1BQU0sUUFBUSxHQUFhLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQThCRDs7T0FFRztJQUNILEdBQUcsQ0FDRCxHQUFXLEVBQ1gsSUFBdUMsRUFDdkMsVUFPSSxFQUFFO1FBRU4sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ2xDLE9BQU8sbUJBQ0wsSUFBSTtZQUNKLE1BQU0sSUFDSCxPQUFPLENBQ1gsQ0FBQztRQUNGLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQixDQUFDLEdBQUcsVUFBVSxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3REO1FBQ0QsSUFBSSxDQUFDLENBQUMsSUFBSSxZQUFZLFVBQVUsQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUMsT0FBTztTQUNSO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUNkLEdBQUcsQ0FBQyxDQUFDLENBQVksRUFBRSxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVPLElBQUksQ0FBQyxJQUFlLEVBQUUsR0FBVyxFQUFFLEtBQWE7UUFDdEQsSUFBSSxJQUFJLEtBQUssR0FBRyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM3QjthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDcEI7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBaUNELEdBQUcsQ0FDRCxHQUFXLEVBQ1gsVUFJSSxFQUFFO1FBRU4sTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLElBQUksS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDO1FBQ3pFLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDOUcsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUU7WUFDeEUsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQ3pFLEdBQUcsQ0FBQyxDQUFDLEdBQWMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDLEVBQzdFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBaUIsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FDeEYsQ0FBQzthQUNIO1lBQ0QsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFJRCxxQ0FBcUM7SUFDckMsT0FBTyxDQUFDLEdBQVc7UUFDakIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFtQkQ7O09BRUc7SUFDSCxNQUFNLENBQ0osR0FBVyxFQUNYLElBQXVDLEVBQ3ZDLFVBT0ksRUFBRTtRQUVOLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxDQUFDLElBQUksWUFBWSxVQUFVLENBQUMsRUFBRTtnQkFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQW9CLENBQUMsQ0FBQztnQkFDMUMsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUVELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBNkIsRUFBRSxPQUFvQixDQUFDLENBQUM7U0FDM0U7UUFDRCxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQsYUFBYTtJQUViLGNBQWM7SUFFZCxpQkFBaUI7SUFDakIsR0FBRyxDQUFDLEdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxhQUFhO0lBRWIsaUJBQWlCO0lBRVQsT0FBTyxDQUFDLEdBQVcsRUFBRSxVQUFtQjtRQUM5QyxJQUFJLFVBQVU7WUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM5QyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELFdBQVc7SUFDWCxNQUFNLENBQUMsR0FBVztRQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsYUFBYTtJQUNiLEtBQUs7UUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELGFBQWE7SUFFYixpQkFBaUI7SUFFakI7O09BRUc7SUFDSCxJQUFJLElBQUksQ0FBQyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVPLGlCQUFpQjtRQUN2QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVPLGVBQWU7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQzlCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN6QixDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFTyxpQkFBaUI7UUFDdkIsTUFBTSxPQUFPLEdBQWEsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ3BDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUk7Z0JBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyRSxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8saUJBQWlCO1FBQ3ZCLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVPLFNBQVMsQ0FBQyxHQUFXLEVBQUUsSUFBcUI7UUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztZQUFFLE9BQU87UUFDeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxNQUFNLENBQUMsR0FBVztRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDL0IsTUFBTSxPQUFPLEdBQUcsSUFBSSxlQUFlLENBQW9CLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMxRSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDckM7UUFDRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBRSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3BELENBQUM7SUFFRDs7T0FFRztJQUNILFlBQVksQ0FBQyxHQUFXO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7WUFBRSxPQUFPO1FBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxtQkFBbUI7SUFDbkIsU0FBUyxDQUFDLEdBQVc7UUFDbkIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQscUJBQXFCO0lBQ3JCLFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELGFBQWE7SUFFYixXQUFXO1FBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7OztZQTlXRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7WUFMUCxrQkFBa0I7NENBbUJ4QyxNQUFNLFNBQUMsc0JBQXNCO1lBNUJ6QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgYWRkU2Vjb25kcyB9IGZyb20gJ2RhdGUtZm5zJztcblxuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgQWxhaW5DYWNoZUNvbmZpZywgQWxhaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcblxuaW1wb3J0IHsgQ2FjaGVOb3RpZnlSZXN1bHQsIENhY2hlTm90aWZ5VHlwZSwgSUNhY2hlLCBJQ2FjaGVTdG9yZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IERDX1NUT1JFX1NUT1JBR0VfVE9LRU4gfSBmcm9tICcuL2xvY2FsLXN0b3JhZ2UtY2FjaGUuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ2FjaGVTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSByZWFkb25seSBtZW1vcnk6IE1hcDxzdHJpbmcsIElDYWNoZT4gPSBuZXcgTWFwPHN0cmluZywgSUNhY2hlPigpO1xuICBwcml2YXRlIHJlYWRvbmx5IG5vdGlmeUJ1ZmZlcjogTWFwPHN0cmluZywgQmVoYXZpb3JTdWJqZWN0PENhY2hlTm90aWZ5UmVzdWx0Pj4gPSBuZXcgTWFwPFxuICAgIHN0cmluZyxcbiAgICBCZWhhdmlvclN1YmplY3Q8Q2FjaGVOb3RpZnlSZXN1bHQ+XG4gID4oKTtcbiAgcHJpdmF0ZSBtZXRhOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBwcml2YXRlIGZyZXFUaWNrID0gMzAwMDtcbiAgcHJpdmF0ZSBmcmVxVGltZTogTnpTYWZlQW55O1xuICBwcml2YXRlIGNvZzogQWxhaW5DYWNoZUNvbmZpZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjb2dTcnY6IEFsYWluQ29uZmlnU2VydmljZSxcbiAgICBASW5qZWN0KERDX1NUT1JFX1NUT1JBR0VfVE9LRU4pIHByaXZhdGUgc3RvcmU6IElDYWNoZVN0b3JlLFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudFxuICApIHtcbiAgICB0aGlzLmNvZyA9IGNvZ1Nydi5tZXJnZSgnY2FjaGUnLCB7XG4gICAgICBtb2RlOiAncHJvbWlzZScsXG4gICAgICByZU5hbWU6ICcnLFxuICAgICAgcHJlZml4OiAnJyxcbiAgICAgIG1ldGFfa2V5OiAnX19jYWNoZV9tZXRhJ1xuICAgIH0pITtcbiAgICB0aGlzLmxvYWRNZXRhKCk7XG4gICAgdGhpcy5zdGFydEV4cGlyZU5vdGlmeSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBkZWVwR2V0KG9iajogTnpTYWZlQW55LCBwYXRoOiBzdHJpbmdbXSwgZGVmYXVsdFZhbHVlPzogTnpTYWZlQW55KTogTnpTYWZlQW55IHtcbiAgICBpZiAoIW9iaikgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICBpZiAocGF0aC5sZW5ndGggPD0gMSkge1xuICAgICAgY29uc3QgY2hlY2tPYmogPSBwYXRoLmxlbmd0aCA/IG9ialtwYXRoWzBdXSA6IG9iajtcbiAgICAgIHJldHVybiB0eXBlb2YgY2hlY2tPYmogPT09ICd1bmRlZmluZWQnID8gZGVmYXVsdFZhbHVlIDogY2hlY2tPYmo7XG4gICAgfVxuICAgIHJldHVybiBwYXRoLnJlZHVjZSgobywgaykgPT4gb1trXSwgb2JqKSB8fCBkZWZhdWx0VmFsdWU7XG4gIH1cblxuICAvLyAjcmVnaW9uIG1ldGFcblxuICBwcml2YXRlIHB1c2hNZXRhKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubWV0YS5oYXMoa2V5KSkgcmV0dXJuO1xuICAgIHRoaXMubWV0YS5hZGQoa2V5KTtcbiAgICB0aGlzLnNhdmVNZXRhKCk7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZU1ldGEoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubWV0YS5oYXMoa2V5KSkgcmV0dXJuO1xuICAgIHRoaXMubWV0YS5kZWxldGUoa2V5KTtcbiAgICB0aGlzLnNhdmVNZXRhKCk7XG4gIH1cblxuICBwcml2YXRlIGxvYWRNZXRhKCk6IHZvaWQge1xuICAgIGNvbnN0IHJldCA9IHRoaXMuc3RvcmUuZ2V0KHRoaXMuY29nLm1ldGFfa2V5ISk7XG4gICAgaWYgKHJldCAmJiByZXQudikge1xuICAgICAgKHJldC52IGFzIHN0cmluZ1tdKS5mb3JFYWNoKGtleSA9PiB0aGlzLm1ldGEuYWRkKGtleSkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2F2ZU1ldGEoKTogdm9pZCB7XG4gICAgY29uc3QgbWV0YURhdGE6IHN0cmluZ1tdID0gW107XG4gICAgdGhpcy5tZXRhLmZvckVhY2goa2V5ID0+IG1ldGFEYXRhLnB1c2goa2V5KSk7XG4gICAgdGhpcy5zdG9yZS5zZXQodGhpcy5jb2cubWV0YV9rZXkhLCB7IHY6IG1ldGFEYXRhLCBlOiAwIH0pO1xuICB9XG5cbiAgZ2V0TWV0YSgpOiBTZXQ8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMubWV0YTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHNldFxuXG4gIC8qKlxuICAgKiBQZXJzaXN0ZW50IGNhY2hlZCBgT2JzZXJ2YWJsZWAgb2JqZWN0LCBmb3IgZXhhbXBsZTpcbiAgICogLSBgc2V0KCdkYXRhLzEnLCB0aGlzLmh0dHAuZ2V0KCdkYXRhLzEnKSkuc3Vic2NyaWJlKClgXG4gICAqIC0gYHNldCgnZGF0YS8xJywgdGhpcy5odHRwLmdldCgnZGF0YS8xJyksIHsgZXhwaXJlOiAxMCB9KS5zdWJzY3JpYmUoKWBcbiAgICovXG4gIHNldDxUPihrZXk6IHN0cmluZywgZGF0YTogT2JzZXJ2YWJsZTxUPiwgb3B0aW9ucz86IHsgdHlwZT86ICdzJzsgZXhwaXJlPzogbnVtYmVyIH0pOiBPYnNlcnZhYmxlPFQ+O1xuICAvKipcbiAgICogUGVyc2lzdGVudCBjYWNoZWQgYE9ic2VydmFibGVgIG9iamVjdCwgZm9yIGV4YW1wbGU6XG4gICAqIC0gYHNldCgnZGF0YS8xJywgdGhpcy5odHRwLmdldCgnZGF0YS8xJykpLnN1YnNjcmliZSgpYFxuICAgKiAtIGBzZXQoJ2RhdGEvMScsIHRoaXMuaHR0cC5nZXQoJ2RhdGEvMScpLCB7IGV4cGlyZTogMTAgfSkuc3Vic2NyaWJlKClgXG4gICAqL1xuICBzZXQoa2V5OiBzdHJpbmcsIGRhdGE6IE9ic2VydmFibGU8TnpTYWZlQW55Piwgb3B0aW9ucz86IHsgdHlwZT86ICdzJzsgZXhwaXJlPzogbnVtYmVyIH0pOiBPYnNlcnZhYmxlPE56U2FmZUFueT47XG4gIC8qKlxuICAgKiBQZXJzaXN0ZW50IGNhY2hlZCBzaW1wbGUgb2JqZWN0LCBmb3IgZXhhbXBsZTpcbiAgICogLSBgc2V0KCdkYXRhLzEnLCAxKWBcbiAgICogLSBgc2V0KCdkYXRhLzEnLCAxLCB7IGV4cGlyZTogMTAgfSlgXG4gICAqL1xuICBzZXQoa2V5OiBzdHJpbmcsIGRhdGE6IHVua25vd24sIG9wdGlvbnM/OiB7IHR5cGU/OiAncyc7IGV4cGlyZT86IG51bWJlciB9KTogdm9pZDtcbiAgLyoqXG4gICAqIFBlcnNpc3RlbnQgY2FjaGVkIHNpbXBsZSBvYmplY3QgYW5kIHNwZWNpZnkgc3RvcmFnZSB0eXBlLCBmb3IgZXhhbXBsZSBjYWNoaW5nIGluIG1lbW9yeTpcbiAgICogLSBgc2V0KCdkYXRhLzEnLCAxLCB7IHR5cGU6ICdtJyB9KWBcbiAgICogLSBgc2V0KCdkYXRhLzEnLCAxLCB7IHR5cGU6ICdtJywgZXhwaXJlOiAxMCB9KWBcbiAgICovXG4gIHNldChrZXk6IHN0cmluZywgZGF0YTogdW5rbm93biwgb3B0aW9uczogeyB0eXBlOiAnbScgfCAncyc7IGV4cGlyZT86IG51bWJlciB9KTogdm9pZDtcbiAgLyoqXG4gICAqIOe8k+WtmOWvueixoVxuICAgKi9cbiAgc2V0KFxuICAgIGtleTogc3RyaW5nLFxuICAgIGRhdGE6IE56U2FmZUFueSB8IE9ic2VydmFibGU8TnpTYWZlQW55PixcbiAgICBvcHRpb25zOiB7XG4gICAgICAvKiog5a2Y5YKo57G75Z6L77yMJ20nIOihqOekuuWGheWtmO+8jCdzJyDooajnpLrmjIHkuYUgKi9cbiAgICAgIHR5cGU/OiAnbScgfCAncyc7XG4gICAgICAvKipcbiAgICAgICAqIOi/h+acn+aXtumXtO+8jOWNleS9jSBg56eSYFxuICAgICAgICovXG4gICAgICBleHBpcmU/OiBudW1iZXI7XG4gICAgfSA9IHt9XG4gICk6IE56U2FmZUFueSB7XG4gICAgbGV0IGUgPSAwO1xuICAgIGNvbnN0IHsgdHlwZSwgZXhwaXJlIH0gPSB0aGlzLmNvZztcbiAgICBvcHRpb25zID0ge1xuICAgICAgdHlwZSxcbiAgICAgIGV4cGlyZSxcbiAgICAgIC4uLm9wdGlvbnNcbiAgICB9O1xuICAgIGlmIChvcHRpb25zLmV4cGlyZSkge1xuICAgICAgZSA9IGFkZFNlY29uZHMobmV3IERhdGUoKSwgb3B0aW9ucy5leHBpcmUpLnZhbHVlT2YoKTtcbiAgICB9XG4gICAgaWYgKCEoZGF0YSBpbnN0YW5jZW9mIE9ic2VydmFibGUpKSB7XG4gICAgICB0aGlzLnNhdmUob3B0aW9ucy50eXBlISwga2V5LCB7IHY6IGRhdGEsIGUgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBkYXRhLnBpcGUoXG4gICAgICB0YXAoKHY6IE56U2FmZUFueSkgPT4ge1xuICAgICAgICB0aGlzLnNhdmUob3B0aW9ucy50eXBlISwga2V5LCB7IHYsIGUgfSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHNhdmUodHlwZTogJ20nIHwgJ3MnLCBrZXk6IHN0cmluZywgdmFsdWU6IElDYWNoZSk6IHZvaWQge1xuICAgIGlmICh0eXBlID09PSAnbScpIHtcbiAgICAgIHRoaXMubWVtb3J5LnNldChrZXksIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9yZS5zZXQodGhpcy5jb2cucHJlZml4ICsga2V5LCB2YWx1ZSk7XG4gICAgICB0aGlzLnB1c2hNZXRhKGtleSk7XG4gICAgfVxuICAgIHRoaXMucnVuTm90aWZ5KGtleSwgJ3NldCcpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gZ2V0XG5cbiAgLyoqIOiOt+WPlue8k+WtmOaVsOaNru+8jOiLpSBga2V5YCDkuI3lrZjlnKjliJkgYGtleWAg5L2c5Li6SFRUUOivt+axgue8k+WtmOWQjui/lOWbniAqL1xuICBnZXQ8VD4oXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG1vZGU6ICdwcm9taXNlJztcbiAgICAgIHR5cGU/OiAnbScgfCAncyc7XG4gICAgICBleHBpcmU/OiBudW1iZXI7XG4gICAgfVxuICApOiBPYnNlcnZhYmxlPFQ+O1xuICAvKiog6I635Y+W57yT5a2Y5pWw5o2u77yM6IulIGBrZXlgIOS4jeWtmOWcqOWImSBga2V5YCDkvZzkuLpIVFRQ6K+35rGC57yT5a2Y5ZCO6L+U5ZueICovXG4gIGdldChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgbW9kZTogJ3Byb21pc2UnO1xuICAgICAgdHlwZT86ICdtJyB8ICdzJztcbiAgICAgIGV4cGlyZT86IG51bWJlcjtcbiAgICB9XG4gICk6IE9ic2VydmFibGU8TnpTYWZlQW55PjtcbiAgLyoqIOiOt+WPlue8k+WtmOaVsOaNru+8jOiLpSBga2V5YCDkuI3lrZjlnKjmiJblt7Lov4fmnJ/liJnov5Tlm54gbnVsbCAqL1xuICBnZXQoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9uczoge1xuICAgICAgbW9kZTogJ25vbmUnO1xuICAgICAgdHlwZT86ICdtJyB8ICdzJztcbiAgICAgIGV4cGlyZT86IG51bWJlcjtcbiAgICB9XG4gICk6IE56U2FmZUFueTtcbiAgZ2V0KFxuICAgIGtleTogc3RyaW5nLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG1vZGU/OiAncHJvbWlzZScgfCAnbm9uZSc7XG4gICAgICB0eXBlPzogJ20nIHwgJ3MnO1xuICAgICAgZXhwaXJlPzogbnVtYmVyO1xuICAgIH0gPSB7fVxuICApOiBPYnNlcnZhYmxlPE56U2FmZUFueT4gfCBOelNhZmVBbnkge1xuICAgIGNvbnN0IGlzUHJvbWlzZSA9IG9wdGlvbnMubW9kZSAhPT0gJ25vbmUnICYmIHRoaXMuY29nLm1vZGUgPT09ICdwcm9taXNlJztcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMubWVtb3J5LmhhcyhrZXkpID8gKHRoaXMubWVtb3J5LmdldChrZXkpIGFzIElDYWNoZSkgOiB0aGlzLnN0b3JlLmdldCh0aGlzLmNvZy5wcmVmaXggKyBrZXkpO1xuICAgIGlmICghdmFsdWUgfHwgKHZhbHVlLmUgJiYgdmFsdWUuZSA+IDAgJiYgdmFsdWUuZSA8IG5ldyBEYXRlKCkudmFsdWVPZigpKSkge1xuICAgICAgaWYgKGlzUHJvbWlzZSkge1xuICAgICAgICByZXR1cm4gKHRoaXMuY29nLnJlcXVlc3QgPyB0aGlzLmNvZy5yZXF1ZXN0KGtleSkgOiB0aGlzLmh0dHAuZ2V0KGtleSkpLnBpcGUoXG4gICAgICAgICAgbWFwKChyZXQ6IE56U2FmZUFueSkgPT4gdGhpcy5kZWVwR2V0KHJldCwgdGhpcy5jb2cucmVOYW1lIGFzIHN0cmluZ1tdLCBudWxsKSksXG4gICAgICAgICAgdGFwKHYgPT4gdGhpcy5zZXQoa2V5LCB2LCB7IHR5cGU6IG9wdGlvbnMudHlwZSBhcyBOelNhZmVBbnksIGV4cGlyZTogb3B0aW9ucy5leHBpcmUgfSkpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNQcm9taXNlID8gb2YodmFsdWUudikgOiB2YWx1ZS52O1xuICB9XG5cbiAgLyoqIOiOt+WPlue8k+WtmOaVsOaNru+8jOiLpSBga2V5YCDkuI3lrZjlnKjmiJblt7Lov4fmnJ/liJnov5Tlm54gbnVsbCAqL1xuICBnZXROb25lPFQ+KGtleTogc3RyaW5nKTogVDtcbiAgLyoqIOiOt+WPlue8k+WtmOaVsOaNru+8jOiLpSBga2V5YCDkuI3lrZjlnKjmiJblt7Lov4fmnJ/liJnov5Tlm54gbnVsbCAqL1xuICBnZXROb25lKGtleTogc3RyaW5nKTogTnpTYWZlQW55IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoa2V5LCB7IG1vZGU6ICdub25lJyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDojrflj5bnvJPlrZjvvIzoi6XkuI3lrZjlnKjliJnorr7nva7mjIHkuYXljJbnvJPlrZggYE9ic2VydmFibGVgIOWvueixoVxuICAgKi9cbiAgdHJ5R2V0PFQ+KGtleTogc3RyaW5nLCBkYXRhOiBPYnNlcnZhYmxlPFQ+LCBvcHRpb25zPzogeyB0eXBlPzogJ3MnOyBleHBpcmU/OiBudW1iZXIgfSk6IE9ic2VydmFibGU8VD47XG4gIC8qKlxuICAgKiDojrflj5bnvJPlrZjvvIzoi6XkuI3lrZjlnKjliJnorr7nva7mjIHkuYXljJbnvJPlrZggYE9ic2VydmFibGVgIOWvueixoVxuICAgKi9cbiAgdHJ5R2V0KGtleTogc3RyaW5nLCBkYXRhOiBPYnNlcnZhYmxlPE56U2FmZUFueT4sIG9wdGlvbnM/OiB7IHR5cGU/OiAncyc7IGV4cGlyZT86IG51bWJlciB9KTogT2JzZXJ2YWJsZTxOelNhZmVBbnk+O1xuICAvKipcbiAgICog6I635Y+W57yT5a2Y77yM6Iul5LiN5a2Y5Zyo5YiZ6K6+572u5oyB5LmF5YyW57yT5a2Y5Z+656GA5a+56LGhXG4gICAqL1xuICB0cnlHZXQoa2V5OiBzdHJpbmcsIGRhdGE6IHVua25vd24sIG9wdGlvbnM/OiB7IHR5cGU/OiAncyc7IGV4cGlyZT86IG51bWJlciB9KTogTnpTYWZlQW55O1xuICAvKipcbiAgICog6I635Y+W57yT5a2Y77yM6Iul5LiN5a2Y5Zyo5YiZ6K6+572u5oyH5a6a57yT5a2Y57G75Z6L6L+b6KGM57yT5a2Y5a+56LGhXG4gICAqL1xuICB0cnlHZXQoa2V5OiBzdHJpbmcsIGRhdGE6IHVua25vd24sIG9wdGlvbnM6IHsgdHlwZTogJ20nIHwgJ3MnOyBleHBpcmU/OiBudW1iZXIgfSk6IE56U2FmZUFueTtcblxuICAvKipcbiAgICog6I635Y+W57yT5a2Y77yM6Iul5LiN5a2Y5Zyo5YiZ6K6+572u57yT5a2Y5a+56LGhXG4gICAqL1xuICB0cnlHZXQoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgZGF0YTogTnpTYWZlQW55IHwgT2JzZXJ2YWJsZTxOelNhZmVBbnk+LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIC8qKiDlrZjlgqjnsbvlnovvvIwnbScg6KGo56S65YaF5a2Y77yMJ3MnIOihqOekuuaMgeS5hSAqL1xuICAgICAgdHlwZT86ICdtJyB8ICdzJztcbiAgICAgIC8qKlxuICAgICAgICog6L+H5pyf5pe26Ze077yM5Y2V5L2NIGDnp5JgXG4gICAgICAgKi9cbiAgICAgIGV4cGlyZT86IG51bWJlcjtcbiAgICB9ID0ge31cbiAgKTogTnpTYWZlQW55IHtcbiAgICBjb25zdCByZXQgPSB0aGlzLmdldE5vbmUoa2V5KTtcbiAgICBpZiAocmV0ID09PSBudWxsKSB7XG4gICAgICBpZiAoIShkYXRhIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkpIHtcbiAgICAgICAgdGhpcy5zZXQoa2V5LCBkYXRhLCBvcHRpb25zIGFzIE56U2FmZUFueSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5zZXQoa2V5LCBkYXRhIGFzIE9ic2VydmFibGU8TnpTYWZlQW55Piwgb3B0aW9ucyBhcyBOelNhZmVBbnkpO1xuICAgIH1cbiAgICByZXR1cm4gb2YocmV0KTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIGhhc1xuXG4gIC8qKiDmmK/lkKbnvJPlrZggYGtleWAgKi9cbiAgaGFzKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubWVtb3J5LmhhcyhrZXkpIHx8IHRoaXMubWV0YS5oYXMoa2V5KTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHJlbW92ZVxuXG4gIHByaXZhdGUgX3JlbW92ZShrZXk6IHN0cmluZywgbmVlZE5vdGlmeTogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChuZWVkTm90aWZ5KSB0aGlzLnJ1bk5vdGlmeShrZXksICdyZW1vdmUnKTtcbiAgICBpZiAodGhpcy5tZW1vcnkuaGFzKGtleSkpIHtcbiAgICAgIHRoaXMubWVtb3J5LmRlbGV0ZShrZXkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnN0b3JlLnJlbW92ZSh0aGlzLmNvZy5wcmVmaXggKyBrZXkpO1xuICAgIHRoaXMucmVtb3ZlTWV0YShrZXkpO1xuICB9XG5cbiAgLyoqIOenu+mZpOe8k+WtmCAqL1xuICByZW1vdmUoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9yZW1vdmUoa2V5LCB0cnVlKTtcbiAgfVxuXG4gIC8qKiDmuIXnqbrmiYDmnInnvJPlrZggKi9cbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5ub3RpZnlCdWZmZXIuZm9yRWFjaCgoX3YsIGspID0+IHRoaXMucnVuTm90aWZ5KGssICdyZW1vdmUnKSk7XG4gICAgdGhpcy5tZW1vcnkuY2xlYXIoKTtcbiAgICB0aGlzLm1ldGEuZm9yRWFjaChrZXkgPT4gdGhpcy5zdG9yZS5yZW1vdmUodGhpcy5jb2cucHJlZml4ICsga2V5KSk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBub3RpZnlcblxuICAvKipcbiAgICog6K6+572u55uR5ZCs6aKR546H77yM5Y2V5L2N77ya5q+r56eS5LiU5pyA5L2OIGAyMG1zYO+8jOm7mOiupO+8mmAzMDAwbXNgXG4gICAqL1xuICBzZXQgZnJlcSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5mcmVxVGljayA9IE1hdGgubWF4KDIwLCB2YWx1ZSk7XG4gICAgdGhpcy5hYm9ydEV4cGlyZU5vdGlmeSgpO1xuICAgIHRoaXMuc3RhcnRFeHBpcmVOb3RpZnkoKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhcnRFeHBpcmVOb3RpZnkoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja0V4cGlyZU5vdGlmeSgpO1xuICAgIHRoaXMucnVuRXhwaXJlTm90aWZ5KCk7XG4gIH1cblxuICBwcml2YXRlIHJ1bkV4cGlyZU5vdGlmeSgpOiB2b2lkIHtcbiAgICB0aGlzLmZyZXFUaW1lID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNoZWNrRXhwaXJlTm90aWZ5KCk7XG4gICAgICB0aGlzLnJ1bkV4cGlyZU5vdGlmeSgpO1xuICAgIH0sIHRoaXMuZnJlcVRpY2spO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0V4cGlyZU5vdGlmeSgpOiB2b2lkIHtcbiAgICBjb25zdCByZW1vdmVkOiBzdHJpbmdbXSA9IFtdO1xuICAgIHRoaXMubm90aWZ5QnVmZmVyLmZvckVhY2goKF92LCBrZXkpID0+IHtcbiAgICAgIGlmICh0aGlzLmhhcyhrZXkpICYmIHRoaXMuZ2V0Tm9uZShrZXkpID09PSBudWxsKSByZW1vdmVkLnB1c2goa2V5KTtcbiAgICB9KTtcbiAgICByZW1vdmVkLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIHRoaXMucnVuTm90aWZ5KGtleSwgJ2V4cGlyZScpO1xuICAgICAgdGhpcy5fcmVtb3ZlKGtleSwgZmFsc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhYm9ydEV4cGlyZU5vdGlmeSgpOiB2b2lkIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5mcmVxVGltZSk7XG4gIH1cblxuICBwcml2YXRlIHJ1bk5vdGlmeShrZXk6IHN0cmluZywgdHlwZTogQ2FjaGVOb3RpZnlUeXBlKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm5vdGlmeUJ1ZmZlci5oYXMoa2V5KSkgcmV0dXJuO1xuICAgIHRoaXMubm90aWZ5QnVmZmVyLmdldChrZXkpIS5uZXh0KHsgdHlwZSwgdmFsdWU6IHRoaXMuZ2V0Tm9uZShrZXkpIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGBrZXlgIOebkeWQrO+8jOW9kyBga2V5YCDlj5jmm7TjgIHov4fmnJ/jgIHnp7vpmaTml7bpgJrnn6XvvIzms6jmhI/ku6XkuIvoi6XlubLnu4boioLvvJpcbiAgICpcbiAgICogLSDosIPnlKjlkI7pmaTlho3mrKHosIPnlKggYGNhbmNlbE5vdGlmeWAg5ZCm5YiZ5rC46L+c5LiN6L+H5pyfXG4gICAqIC0g55uR5ZCs5Zmo5q+PIGBmcmVxYCAo6buY6K6k77yaM+enkikg5omn6KGM5LiA5qyh6L+H5pyf5qOA5p+lXG4gICAqL1xuICBub3RpZnkoa2V5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPENhY2hlTm90aWZ5UmVzdWx0PiB7XG4gICAgaWYgKCF0aGlzLm5vdGlmeUJ1ZmZlci5oYXMoa2V5KSkge1xuICAgICAgY29uc3QgY2hhbmdlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Q2FjaGVOb3RpZnlSZXN1bHQ+KHRoaXMuZ2V0Tm9uZShrZXkpKTtcbiAgICAgIHRoaXMubm90aWZ5QnVmZmVyLnNldChrZXksIGNoYW5nZSQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5ub3RpZnlCdWZmZXIuZ2V0KGtleSkhLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOWPlua2iCBga2V5YCDnm5HlkKxcbiAgICovXG4gIGNhbmNlbE5vdGlmeShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5ub3RpZnlCdWZmZXIuaGFzKGtleSkpIHJldHVybjtcbiAgICB0aGlzLm5vdGlmeUJ1ZmZlci5nZXQoa2V5KSEudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLm5vdGlmeUJ1ZmZlci5kZWxldGUoa2V5KTtcbiAgfVxuXG4gIC8qKiBga2V5YCDmmK/lkKblt7Lnu4/nm5HlkKwgKi9cbiAgaGFzTm90aWZ5KGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubm90aWZ5QnVmZmVyLmhhcyhrZXkpO1xuICB9XG5cbiAgLyoqIOa4heepuuaJgOaciSBga2V5YCDnmoTnm5HlkKwgKi9cbiAgY2xlYXJOb3RpZnkoKTogdm9pZCB7XG4gICAgdGhpcy5ub3RpZnlCdWZmZXIuZm9yRWFjaCh2ID0+IHYudW5zdWJzY3JpYmUoKSk7XG4gICAgdGhpcy5ub3RpZnlCdWZmZXIuY2xlYXIoKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm1lbW9yeS5jbGVhcigpO1xuICAgIHRoaXMuYWJvcnRFeHBpcmVOb3RpZnkoKTtcbiAgICB0aGlzLmNsZWFyTm90aWZ5KCk7XG4gIH1cbn1cbiJdfQ==