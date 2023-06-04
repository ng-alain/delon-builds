import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, map, tap } from 'rxjs';
import { addSeconds } from 'date-fns';
import { deepGet } from '@delon/util/other';
import { DC_STORE_STORAGE_TOKEN } from './local-storage-cache.service';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
import * as i2 from "@angular/common/http";
import * as i3 from "@angular/cdk/platform";
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
        options = {
            type,
            expire,
            ...options
        };
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
                return (this.cog.request ? this.cog.request(key) : this.http.get(key)).pipe(map((ret) => deepGet(ret, this.cog.reName, ret)), tap(v => this.set(key, v, {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: CacheService, deps: [{ token: i1.AlainConfigService }, { token: DC_STORE_STORAGE_TOKEN }, { token: i2.HttpClient }, { token: i3.Platform }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: CacheService, providedIn: 'root' }); }
}
export { CacheService };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: CacheService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.AlainConfigService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DC_STORE_STORAGE_TOKEN]
                }] }, { type: i2.HttpClient }, { type: i3.Platform }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NhY2hlL3NyYy9jYWNoZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWpFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFHdEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRzVDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7OztBQUV2RSxNQUNhLFlBQVk7SUFXdkIsWUFDRSxNQUEwQixFQUNjLEtBQWtCLEVBQ2xELElBQWdCLEVBQ2hCLFFBQWtCO1FBRmMsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQUNsRCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFkWCxXQUFNLEdBQXdCLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQ3hELGlCQUFZLEdBQW9ELElBQUksR0FBRyxFQUdyRixDQUFDO1FBQ0ksU0FBSSxHQUFnQixJQUFJLEdBQUcsRUFBVSxDQUFDO1FBQ3RDLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFVdEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUMvQixJQUFJLEVBQUUsU0FBUztZQUNmLE1BQU0sRUFBRSxFQUFFO1lBQ1YsTUFBTSxFQUFFLEVBQUU7WUFDVixRQUFRLEVBQUUsY0FBYztTQUN6QixDQUFFLENBQUM7UUFDSixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVM7WUFBRSxPQUFPO1FBQ2hDLElBQUksQ0FBQyxR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QVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzswQkFjN0IsTUFBTTsyQkFBQyxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgb2YsIG1hcCwgdGFwIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IGFkZFNlY29uZHMgfSBmcm9tICdkYXRlLWZucyc7XG5cbmltcG9ydCB7IEFsYWluQ2FjaGVDb25maWcsIEFsYWluQ29uZmlnU2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBkZWVwR2V0IH0gZnJvbSAnQGRlbG9uL3V0aWwvb3RoZXInO1xuXG5pbXBvcnQgeyBDYWNoZU5vdGlmeVJlc3VsdCwgQ2FjaGVOb3RpZnlUeXBlLCBJQ2FjaGUsIElDYWNoZVN0b3JlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRENfU1RPUkVfU1RPUkFHRV9UT0tFTiB9IGZyb20gJy4vbG9jYWwtc3RvcmFnZS1jYWNoZS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBDYWNoZVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHJlYWRvbmx5IG1lbW9yeTogTWFwPHN0cmluZywgSUNhY2hlPiA9IG5ldyBNYXA8c3RyaW5nLCBJQ2FjaGU+KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgbm90aWZ5QnVmZmVyOiBNYXA8c3RyaW5nLCBCZWhhdmlvclN1YmplY3Q8Q2FjaGVOb3RpZnlSZXN1bHQ+PiA9IG5ldyBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEJlaGF2aW9yU3ViamVjdDxDYWNoZU5vdGlmeVJlc3VsdD5cbiAgPigpO1xuICBwcml2YXRlIG1ldGE6IFNldDxzdHJpbmc+ID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIHByaXZhdGUgZnJlcVRpY2sgPSAzMDAwO1xuICBwcml2YXRlIGZyZXFUaW1lOiBhbnk7XG4gIHByaXZhdGUgY29nOiBBbGFpbkNhY2hlQ29uZmlnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNvZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLFxuICAgIEBJbmplY3QoRENfU1RPUkVfU1RPUkFHRV9UT0tFTikgcHJpdmF0ZSBzdG9yZTogSUNhY2hlU3RvcmUsXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtXG4gICkge1xuICAgIHRoaXMuY29nID0gY29nU3J2Lm1lcmdlKCdjYWNoZScsIHtcbiAgICAgIG1vZGU6ICdwcm9taXNlJyxcbiAgICAgIHJlTmFtZTogJycsXG4gICAgICBwcmVmaXg6ICcnLFxuICAgICAgbWV0YV9rZXk6ICdfX2NhY2hlX21ldGEnXG4gICAgfSkhO1xuICAgIGlmICghcGxhdGZvcm0uaXNCcm93c2VyKSByZXR1cm47XG4gICAgdGhpcy5sb2FkTWV0YSgpO1xuICAgIHRoaXMuc3RhcnRFeHBpcmVOb3RpZnkoKTtcbiAgfVxuXG4gIC8vICNyZWdpb24gbWV0YVxuXG4gIHByaXZhdGUgcHVzaE1ldGEoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5tZXRhLmhhcyhrZXkpKSByZXR1cm47XG4gICAgdGhpcy5tZXRhLmFkZChrZXkpO1xuICAgIHRoaXMuc2F2ZU1ldGEoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlTWV0YShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5tZXRhLmhhcyhrZXkpKSByZXR1cm47XG4gICAgdGhpcy5tZXRhLmRlbGV0ZShrZXkpO1xuICAgIHRoaXMuc2F2ZU1ldGEoKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZE1ldGEoKTogdm9pZCB7XG4gICAgY29uc3QgcmV0ID0gdGhpcy5zdG9yZS5nZXQodGhpcy5jb2cubWV0YV9rZXkhKTtcbiAgICBpZiAocmV0ICYmIHJldC52KSB7XG4gICAgICAocmV0LnYgYXMgc3RyaW5nW10pLmZvckVhY2goa2V5ID0+IHRoaXMubWV0YS5hZGQoa2V5KSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzYXZlTWV0YSgpOiB2b2lkIHtcbiAgICBjb25zdCBtZXRhRGF0YTogc3RyaW5nW10gPSBbXTtcbiAgICB0aGlzLm1ldGEuZm9yRWFjaChrZXkgPT4gbWV0YURhdGEucHVzaChrZXkpKTtcbiAgICB0aGlzLnN0b3JlLnNldCh0aGlzLmNvZy5tZXRhX2tleSEsIHsgdjogbWV0YURhdGEsIGU6IDAgfSk7XG4gIH1cblxuICBnZXRNZXRhKCk6IFNldDxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5tZXRhO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gc2V0XG5cbiAgLyoqXG4gICAqIFBlcnNpc3RlbnQgY2FjaGVkIGBPYnNlcnZhYmxlYCBvYmplY3QsIGZvciBleGFtcGxlOlxuICAgKiAtIGBzZXQoJ2RhdGEvMScsIHRoaXMuaHR0cC5nZXQoJ2RhdGEvMScpKS5zdWJzY3JpYmUoKWBcbiAgICogLSBgc2V0KCdkYXRhLzEnLCB0aGlzLmh0dHAuZ2V0KCdkYXRhLzEnKSwgeyBleHBpcmU6IDEwIH0pLnN1YnNjcmliZSgpYFxuICAgKi9cbiAgc2V0PFQ+KFxuICAgIGtleTogc3RyaW5nLFxuICAgIGRhdGE6IE9ic2VydmFibGU8VD4sXG4gICAgb3B0aW9ucz86IHsgdHlwZT86ICdzJzsgZXhwaXJlPzogbnVtYmVyOyBlbWl0Tm90aWZ5PzogYm9vbGVhbiB9XG4gICk6IE9ic2VydmFibGU8VD47XG4gIC8qKlxuICAgKiBQZXJzaXN0ZW50IGNhY2hlZCBgT2JzZXJ2YWJsZWAgb2JqZWN0LCBmb3IgZXhhbXBsZTpcbiAgICogLSBgc2V0KCdkYXRhLzEnLCB0aGlzLmh0dHAuZ2V0KCdkYXRhLzEnKSkuc3Vic2NyaWJlKClgXG4gICAqIC0gYHNldCgnZGF0YS8xJywgdGhpcy5odHRwLmdldCgnZGF0YS8xJyksIHsgZXhwaXJlOiAxMCB9KS5zdWJzY3JpYmUoKWBcbiAgICovXG4gIHNldChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBkYXRhOiBPYnNlcnZhYmxlPGFueT4sXG4gICAgb3B0aW9ucz86IHsgdHlwZT86ICdzJzsgZXhwaXJlPzogbnVtYmVyOyBlbWl0Tm90aWZ5PzogYm9vbGVhbiB9XG4gICk6IE9ic2VydmFibGU8YW55PjtcbiAgLyoqXG4gICAqIFBlcnNpc3RlbnQgY2FjaGVkIHNpbXBsZSBvYmplY3QsIGZvciBleGFtcGxlOlxuICAgKiAtIGBzZXQoJ2RhdGEvMScsIDEpYFxuICAgKiAtIGBzZXQoJ2RhdGEvMScsIDEsIHsgZXhwaXJlOiAxMCB9KWBcbiAgICovXG4gIHNldChrZXk6IHN0cmluZywgZGF0YTogdW5rbm93biwgb3B0aW9ucz86IHsgdHlwZT86ICdzJzsgZXhwaXJlPzogbnVtYmVyOyBlbWl0Tm90aWZ5PzogYm9vbGVhbiB9KTogdm9pZDtcbiAgLyoqXG4gICAqIFBlcnNpc3RlbnQgY2FjaGVkIHNpbXBsZSBvYmplY3QgYW5kIHNwZWNpZnkgc3RvcmFnZSB0eXBlLCBmb3IgZXhhbXBsZSBjYWNoaW5nIGluIG1lbW9yeTpcbiAgICogLSBgc2V0KCdkYXRhLzEnLCAxLCB7IHR5cGU6ICdtJyB9KWBcbiAgICogLSBgc2V0KCdkYXRhLzEnLCAxLCB7IHR5cGU6ICdtJywgZXhwaXJlOiAxMCB9KWBcbiAgICovXG4gIHNldChrZXk6IHN0cmluZywgZGF0YTogdW5rbm93biwgb3B0aW9uczogeyB0eXBlOiAnbScgfCAncyc7IGV4cGlyZT86IG51bWJlcjsgZW1pdE5vdGlmeT86IGJvb2xlYW4gfSk6IHZvaWQ7XG4gIC8qKlxuICAgKiDnvJPlrZjlr7nosaFcbiAgICovXG4gIHNldChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBkYXRhOiBhbnkgfCBPYnNlcnZhYmxlPGFueT4sXG4gICAgb3B0aW9uczoge1xuICAgICAgLyoqIOWtmOWCqOexu+Wei++8jCdtJyDooajnpLrlhoXlrZjvvIwncycg6KGo56S65oyB5LmFICovXG4gICAgICB0eXBlPzogJ20nIHwgJ3MnO1xuICAgICAgLyoqXG4gICAgICAgKiDov4fmnJ/ml7bpl7TvvIzljZXkvY0gYOenkmBcbiAgICAgICAqL1xuICAgICAgZXhwaXJlPzogbnVtYmVyO1xuICAgICAgLyoqXG4gICAgICAgKiDmmK/lkKbop6blj5HpgJrnn6XvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICAgICAqL1xuICAgICAgZW1pdE5vdGlmeT86IGJvb2xlYW47XG4gICAgfSA9IHt9XG4gICk6IGFueSB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3NlcikgcmV0dXJuO1xuXG4gICAgbGV0IGUgPSAwO1xuICAgIGNvbnN0IHsgdHlwZSwgZXhwaXJlIH0gPSB0aGlzLmNvZztcbiAgICBvcHRpb25zID0ge1xuICAgICAgdHlwZSxcbiAgICAgIGV4cGlyZSxcbiAgICAgIC4uLm9wdGlvbnNcbiAgICB9O1xuICAgIGlmIChvcHRpb25zLmV4cGlyZSkge1xuICAgICAgZSA9IGFkZFNlY29uZHMobmV3IERhdGUoKSwgb3B0aW9ucy5leHBpcmUpLnZhbHVlT2YoKTtcbiAgICB9XG4gICAgY29uc3QgZW1pdE5vdGlmeSA9IG9wdGlvbnMuZW1pdE5vdGlmeSAhPT0gZmFsc2U7XG4gICAgaWYgKCEoZGF0YSBpbnN0YW5jZW9mIE9ic2VydmFibGUpKSB7XG4gICAgICB0aGlzLnNhdmUob3B0aW9ucy50eXBlISwga2V5LCB7IHY6IGRhdGEsIGUgfSwgZW1pdE5vdGlmeSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBkYXRhLnBpcGUoXG4gICAgICB0YXAoKHY6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLnNhdmUob3B0aW9ucy50eXBlISwga2V5LCB7IHYsIGUgfSwgZW1pdE5vdGlmeSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHNhdmUodHlwZTogJ20nIHwgJ3MnLCBrZXk6IHN0cmluZywgdmFsdWU6IElDYWNoZSwgZW1pdE5vdGlmeTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICBpZiAodHlwZSA9PT0gJ20nKSB7XG4gICAgICB0aGlzLm1lbW9yeS5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RvcmUuc2V0KHRoaXMuY29nLnByZWZpeCArIGtleSwgdmFsdWUpO1xuICAgICAgdGhpcy5wdXNoTWV0YShrZXkpO1xuICAgIH1cbiAgICBpZiAoZW1pdE5vdGlmeSkge1xuICAgICAgdGhpcy5ydW5Ob3RpZnkoa2V5LCAnc2V0Jyk7XG4gICAgfVxuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gZ2V0XG5cbiAgLyoqIOiOt+WPlue8k+WtmOaVsOaNru+8jOiLpSBga2V5YCDkuI3lrZjlnKjliJkgYGtleWAg5L2c5Li6SFRUUOivt+axgue8k+WtmOWQjui/lOWbniAqL1xuICBnZXQ8VD4oXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG1vZGU6ICdwcm9taXNlJztcbiAgICAgIHR5cGU/OiAnbScgfCAncyc7XG4gICAgICBleHBpcmU/OiBudW1iZXI7XG4gICAgICBlbWl0Tm90aWZ5PzogYm9vbGVhbjtcbiAgICB9XG4gICk6IE9ic2VydmFibGU8VD47XG4gIC8qKiDojrflj5bnvJPlrZjmlbDmja7vvIzoi6UgYGtleWAg5LiN5a2Y5Zyo5YiZIGBrZXlgIOS9nOS4ukhUVFDor7fmsYLnvJPlrZjlkI7ov5Tlm54gKi9cbiAgZ2V0KFxuICAgIGtleTogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBtb2RlOiAncHJvbWlzZSc7XG4gICAgICB0eXBlPzogJ20nIHwgJ3MnO1xuICAgICAgZXhwaXJlPzogbnVtYmVyO1xuICAgICAgZW1pdE5vdGlmeT86IGJvb2xlYW47XG4gICAgfVxuICApOiBPYnNlcnZhYmxlPGFueT47XG4gIC8qKiDojrflj5bnvJPlrZjmlbDmja7vvIzoi6UgYGtleWAg5LiN5a2Y5Zyo5oiW5bey6L+H5pyf5YiZ6L+U5ZueIG51bGwgKi9cbiAgZ2V0KFxuICAgIGtleTogc3RyaW5nLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG1vZGU6ICdub25lJztcbiAgICAgIHR5cGU/OiAnbScgfCAncyc7XG4gICAgICBleHBpcmU/OiBudW1iZXI7XG4gICAgICBlbWl0Tm90aWZ5PzogYm9vbGVhbjtcbiAgICB9XG4gICk6IGFueTtcbiAgZ2V0KFxuICAgIGtleTogc3RyaW5nLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG1vZGU/OiAncHJvbWlzZScgfCAnbm9uZSc7XG4gICAgICB0eXBlPzogJ20nIHwgJ3MnO1xuICAgICAgZXhwaXJlPzogbnVtYmVyO1xuICAgICAgZW1pdE5vdGlmeT86IGJvb2xlYW47XG4gICAgfSA9IHt9XG4gICk6IE9ic2VydmFibGU8YW55PiB8IGFueSB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3NlcikgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBpc1Byb21pc2UgPSBvcHRpb25zLm1vZGUgIT09ICdub25lJyAmJiB0aGlzLmNvZy5tb2RlID09PSAncHJvbWlzZSc7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLm1lbW9yeS5oYXMoa2V5KSA/ICh0aGlzLm1lbW9yeS5nZXQoa2V5KSBhcyBJQ2FjaGUpIDogdGhpcy5zdG9yZS5nZXQodGhpcy5jb2cucHJlZml4ICsga2V5KTtcbiAgICBpZiAoIXZhbHVlIHx8ICh2YWx1ZS5lICYmIHZhbHVlLmUgPiAwICYmIHZhbHVlLmUgPCBuZXcgRGF0ZSgpLnZhbHVlT2YoKSkpIHtcbiAgICAgIGlmIChpc1Byb21pc2UpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmNvZy5yZXF1ZXN0ID8gdGhpcy5jb2cucmVxdWVzdChrZXkpIDogdGhpcy5odHRwLmdldChrZXkpKS5waXBlKFxuICAgICAgICAgIG1hcCgocmV0OiBhbnkpID0+IGRlZXBHZXQocmV0LCB0aGlzLmNvZy5yZU5hbWUgYXMgc3RyaW5nW10sIHJldCkpLFxuICAgICAgICAgIHRhcCh2ID0+XG4gICAgICAgICAgICB0aGlzLnNldChrZXksIHYsIHtcbiAgICAgICAgICAgICAgdHlwZTogb3B0aW9ucy50eXBlIGFzIGFueSxcbiAgICAgICAgICAgICAgZXhwaXJlOiBvcHRpb25zLmV4cGlyZSxcbiAgICAgICAgICAgICAgZW1pdE5vdGlmeTogb3B0aW9ucy5lbWl0Tm90aWZ5XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBpc1Byb21pc2UgPyBvZih2YWx1ZS52KSA6IHZhbHVlLnY7XG4gIH1cblxuICAvKiog6I635Y+W57yT5a2Y5pWw5o2u77yM6IulIGBrZXlgIOS4jeWtmOWcqOaIluW3sui/h+acn+WImei/lOWbniBudWxsICovXG4gIGdldE5vbmU8VD4oa2V5OiBzdHJpbmcpOiBUO1xuICAvKiog6I635Y+W57yT5a2Y5pWw5o2u77yM6IulIGBrZXlgIOS4jeWtmOWcqOaIluW3sui/h+acn+WImei/lOWbniBudWxsICovXG4gIGdldE5vbmUoa2V5OiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmdldChrZXksIHsgbW9kZTogJ25vbmUnIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOiOt+WPlue8k+WtmO+8jOiLpeS4jeWtmOWcqOWImeiuvue9ruaMgeS5heWMlue8k+WtmCBgT2JzZXJ2YWJsZWAg5a+56LGhXG4gICAqL1xuICB0cnlHZXQ8VD4oXG4gICAga2V5OiBzdHJpbmcsXG4gICAgZGF0YTogT2JzZXJ2YWJsZTxUPixcbiAgICBvcHRpb25zPzogeyB0eXBlPzogJ3MnOyBleHBpcmU/OiBudW1iZXI7IGVtaXROb3RpZnk/OiBib29sZWFuIH1cbiAgKTogT2JzZXJ2YWJsZTxUPjtcbiAgLyoqXG4gICAqIOiOt+WPlue8k+WtmO+8jOiLpeS4jeWtmOWcqOWImeiuvue9ruaMgeS5heWMlue8k+WtmCBgT2JzZXJ2YWJsZWAg5a+56LGhXG4gICAqL1xuICB0cnlHZXQoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgZGF0YTogT2JzZXJ2YWJsZTxhbnk+LFxuICAgIG9wdGlvbnM/OiB7IHR5cGU/OiAncyc7IGV4cGlyZT86IG51bWJlcjsgZW1pdE5vdGlmeT86IGJvb2xlYW4gfVxuICApOiBPYnNlcnZhYmxlPGFueT47XG4gIC8qKlxuICAgKiDojrflj5bnvJPlrZjvvIzoi6XkuI3lrZjlnKjliJnorr7nva7mjIHkuYXljJbnvJPlrZjln7rnoYDlr7nosaFcbiAgICovXG4gIHRyeUdldChrZXk6IHN0cmluZywgZGF0YTogdW5rbm93biwgb3B0aW9ucz86IHsgdHlwZT86ICdzJzsgZXhwaXJlPzogbnVtYmVyOyBlbWl0Tm90aWZ5PzogYm9vbGVhbiB9KTogYW55O1xuICAvKipcbiAgICog6I635Y+W57yT5a2Y77yM6Iul5LiN5a2Y5Zyo5YiZ6K6+572u5oyH5a6a57yT5a2Y57G75Z6L6L+b6KGM57yT5a2Y5a+56LGhXG4gICAqL1xuICB0cnlHZXQoa2V5OiBzdHJpbmcsIGRhdGE6IHVua25vd24sIG9wdGlvbnM6IHsgdHlwZTogJ20nIHwgJ3MnOyBleHBpcmU/OiBudW1iZXI7IGVtaXROb3RpZnk/OiBib29sZWFuIH0pOiBhbnk7XG5cbiAgLyoqXG4gICAqIOiOt+WPlue8k+WtmO+8jOiLpeS4jeWtmOWcqOWImeiuvue9rue8k+WtmOWvueixoVxuICAgKi9cbiAgdHJ5R2V0KFxuICAgIGtleTogc3RyaW5nLFxuICAgIGRhdGE6IGFueSB8IE9ic2VydmFibGU8YW55PixcbiAgICBvcHRpb25zOiB7XG4gICAgICAvKiog5a2Y5YKo57G75Z6L77yMJ20nIOihqOekuuWGheWtmO+8jCdzJyDooajnpLrmjIHkuYUgKi9cbiAgICAgIHR5cGU/OiAnbScgfCAncyc7XG4gICAgICAvKipcbiAgICAgICAqIOi/h+acn+aXtumXtO+8jOWNleS9jSBg56eSYFxuICAgICAgICovXG4gICAgICBleHBpcmU/OiBudW1iZXI7XG4gICAgICAvKipcbiAgICAgICAqIOaYr+WQpuinpuWPkemAmuefpe+8jOm7mOiupO+8mmB0cnVlYFxuICAgICAgICovXG4gICAgICBlbWl0Tm90aWZ5PzogYm9vbGVhbjtcbiAgICB9ID0ge31cbiAgKTogYW55IHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IHJldCA9IHRoaXMuZ2V0Tm9uZShrZXkpO1xuICAgIGlmIChyZXQgPT09IG51bGwpIHtcbiAgICAgIGlmICghKGRhdGEgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSkge1xuICAgICAgICB0aGlzLnNldChrZXksIGRhdGEsIG9wdGlvbnMgYXMgYW55KTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnNldChrZXksIGRhdGEgYXMgT2JzZXJ2YWJsZTxhbnk+LCBvcHRpb25zIGFzIGFueSk7XG4gICAgfVxuICAgIHJldHVybiBvZihyZXQpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gaGFzXG5cbiAgLyoqIOaYr+WQpue8k+WtmCBga2V5YCAqL1xuICBoYXMoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tZW1vcnkuaGFzKGtleSkgfHwgdGhpcy5tZXRhLmhhcyhrZXkpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gcmVtb3ZlXG5cbiAgcHJpdmF0ZSBfcmVtb3ZlKGtleTogc3RyaW5nLCBuZWVkTm90aWZ5OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKG5lZWROb3RpZnkpIHRoaXMucnVuTm90aWZ5KGtleSwgJ3JlbW92ZScpO1xuICAgIGlmICh0aGlzLm1lbW9yeS5oYXMoa2V5KSkge1xuICAgICAgdGhpcy5tZW1vcnkuZGVsZXRlKGtleSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc3RvcmUucmVtb3ZlKHRoaXMuY29nLnByZWZpeCArIGtleSk7XG4gICAgdGhpcy5yZW1vdmVNZXRhKGtleSk7XG4gIH1cblxuICAvKiog56e76Zmk57yT5a2YICovXG4gIHJlbW92ZShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHJldHVybjtcblxuICAgIHRoaXMuX3JlbW92ZShrZXksIHRydWUpO1xuICB9XG5cbiAgLyoqIOa4heepuuaJgOaciee8k+WtmCAqL1xuICBjbGVhcigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSByZXR1cm47XG5cbiAgICB0aGlzLm5vdGlmeUJ1ZmZlci5mb3JFYWNoKChfdiwgaykgPT4gdGhpcy5ydW5Ob3RpZnkoaywgJ3JlbW92ZScpKTtcbiAgICB0aGlzLm1lbW9yeS5jbGVhcigpO1xuICAgIHRoaXMubWV0YS5mb3JFYWNoKGtleSA9PiB0aGlzLnN0b3JlLnJlbW92ZSh0aGlzLmNvZy5wcmVmaXggKyBrZXkpKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIG5vdGlmeVxuXG4gIC8qKlxuICAgKiDorr7nva7nm5HlkKzpopHnjofvvIzljZXkvY3vvJrmr6vnp5LkuJTmnIDkvY4gYDIwbXNg77yM6buY6K6k77yaYDMwMDBtc2BcbiAgICovXG4gIHNldCBmcmVxKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLmZyZXFUaWNrID0gTWF0aC5tYXgoMjAsIHZhbHVlKTtcbiAgICB0aGlzLmFib3J0RXhwaXJlTm90aWZ5KCk7XG4gICAgdGhpcy5zdGFydEV4cGlyZU5vdGlmeSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGFydEV4cGlyZU5vdGlmeSgpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrRXhwaXJlTm90aWZ5KCk7XG4gICAgdGhpcy5ydW5FeHBpcmVOb3RpZnkoKTtcbiAgfVxuXG4gIHByaXZhdGUgcnVuRXhwaXJlTm90aWZ5KCk6IHZvaWQge1xuICAgIHRoaXMuZnJlcVRpbWUgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY2hlY2tFeHBpcmVOb3RpZnkoKTtcbiAgICAgIHRoaXMucnVuRXhwaXJlTm90aWZ5KCk7XG4gICAgfSwgdGhpcy5mcmVxVGljayk7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrRXhwaXJlTm90aWZ5KCk6IHZvaWQge1xuICAgIGNvbnN0IHJlbW92ZWQ6IHN0cmluZ1tdID0gW107XG4gICAgdGhpcy5ub3RpZnlCdWZmZXIuZm9yRWFjaCgoX3YsIGtleSkgPT4ge1xuICAgICAgaWYgKHRoaXMuaGFzKGtleSkgJiYgdGhpcy5nZXROb25lKGtleSkgPT09IG51bGwpIHJlbW92ZWQucHVzaChrZXkpO1xuICAgIH0pO1xuICAgIHJlbW92ZWQuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgdGhpcy5ydW5Ob3RpZnkoa2V5LCAnZXhwaXJlJyk7XG4gICAgICB0aGlzLl9yZW1vdmUoa2V5LCBmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFib3J0RXhwaXJlTm90aWZ5KCk6IHZvaWQge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmZyZXFUaW1lKTtcbiAgfVxuXG4gIHByaXZhdGUgcnVuTm90aWZ5KGtleTogc3RyaW5nLCB0eXBlOiBDYWNoZU5vdGlmeVR5cGUpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubm90aWZ5QnVmZmVyLmhhcyhrZXkpKSByZXR1cm47XG4gICAgdGhpcy5ub3RpZnlCdWZmZXIuZ2V0KGtleSkhLm5leHQoeyB0eXBlLCB2YWx1ZTogdGhpcy5nZXROb25lKGtleSkgfSk7XG4gIH1cblxuICAvKipcbiAgICogYGtleWAg55uR5ZCs77yM5b2TIGBrZXlgIOWPmOabtOOAgei/h+acn+OAgeenu+mZpOaXtumAmuefpe+8jOazqOaEj+S7peS4i+iLpeW5sue7huiKgu+8mlxuICAgKlxuICAgKiAtIOiwg+eUqOWQjumZpOWGjeasoeiwg+eUqCBgY2FuY2VsTm90aWZ5YCDlkKbliJnmsLjov5zkuI3ov4fmnJ9cbiAgICogLSDnm5HlkKzlmajmr48gYGZyZXFgICjpu5jorqTvvJoz56eSKSDmiafooYzkuIDmrKHov4fmnJ/mo4Dmn6VcbiAgICovXG4gIG5vdGlmeShrZXk6IHN0cmluZyk6IE9ic2VydmFibGU8Q2FjaGVOb3RpZnlSZXN1bHQ+IHtcbiAgICBpZiAoIXRoaXMubm90aWZ5QnVmZmVyLmhhcyhrZXkpKSB7XG4gICAgICBjb25zdCBjaGFuZ2UkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxDYWNoZU5vdGlmeVJlc3VsdD4odGhpcy5nZXROb25lKGtleSkpO1xuICAgICAgdGhpcy5ub3RpZnlCdWZmZXIuc2V0KGtleSwgY2hhbmdlJCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm5vdGlmeUJ1ZmZlci5nZXQoa2V5KSEuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICog5Y+W5raIIGBrZXlgIOebkeWQrFxuICAgKi9cbiAgY2FuY2VsTm90aWZ5KGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm5vdGlmeUJ1ZmZlci5oYXMoa2V5KSkgcmV0dXJuO1xuICAgIHRoaXMubm90aWZ5QnVmZmVyLmdldChrZXkpIS51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMubm90aWZ5QnVmZmVyLmRlbGV0ZShrZXkpO1xuICB9XG5cbiAgLyoqIGBrZXlgIOaYr+WQpuW3sue7j+ebkeWQrCAqL1xuICBoYXNOb3RpZnkoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5ub3RpZnlCdWZmZXIuaGFzKGtleSk7XG4gIH1cblxuICAvKiog5riF56m65omA5pyJIGBrZXlgIOeahOebkeWQrCAqL1xuICBjbGVhck5vdGlmeSgpOiB2b2lkIHtcbiAgICB0aGlzLm5vdGlmeUJ1ZmZlci5mb3JFYWNoKHYgPT4gdi51bnN1YnNjcmliZSgpKTtcbiAgICB0aGlzLm5vdGlmeUJ1ZmZlci5jbGVhcigpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMubWVtb3J5LmNsZWFyKCk7XG4gICAgdGhpcy5hYm9ydEV4cGlyZU5vdGlmeSgpO1xuICAgIHRoaXMuY2xlYXJOb3RpZnkoKTtcbiAgfVxufVxuIl19