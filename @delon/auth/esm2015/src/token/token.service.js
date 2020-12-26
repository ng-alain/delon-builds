/**
 * @fileoverview added by tsickle
 * Generated from: src/token/token.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { inject, Inject, Injectable } from '@angular/core';
import { AlainConfigService } from '@delon/util';
import { BehaviorSubject, interval, Subject } from 'rxjs';
import { filter, map, share } from 'rxjs/operators';
import { mergeConfig } from '../auth.config';
import { DA_STORE_TOKEN } from '../store/interface';
/**
 * @return {?}
 */
export function DA_SERVICE_TOKEN_FACTORY() {
    return new TokenService(inject(AlainConfigService), inject(DA_STORE_TOKEN));
}
/**
 * 维护Token信息服务，[在线文档](https://ng-alain.com/auth)
 */
export class TokenService {
    /**
     * @param {?} configSrv
     * @param {?} store
     */
    constructor(configSrv, store) {
        this.store = store;
        this.refresh$ = new Subject();
        this.change$ = new BehaviorSubject(null);
        this._referrer = {};
        this._options = mergeConfig(configSrv);
    }
    /**
     * @return {?}
     */
    get refresh() {
        this.builderRefresh();
        return this.refresh$.pipe(share());
    }
    /**
     * @return {?}
     */
    get login_url() {
        return this._options.login_url;
    }
    /**
     * @return {?}
     */
    get referrer() {
        return this._referrer;
    }
    /**
     * @return {?}
     */
    get options() {
        return this._options;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set(data) {
        this.change$.next(data);
        return this.store.set((/** @type {?} */ (this._options.store_key)), data);
    }
    /**
     * @template T
     * @param {?=} type
     * @return {?}
     */
    get(type) {
        /** @type {?} */
        const data = this.store.get((/** @type {?} */ (this._options.store_key)));
        return type ? ((/** @type {?} */ (Object.assign(new type(), data)))) : ((/** @type {?} */ (data)));
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    clear(options = { onlyToken: false }) {
        /** @type {?} */
        let data = null;
        if (options.onlyToken === true) {
            data = (/** @type {?} */ (this.get()));
            data.token = ``;
            this.set(data);
        }
        else {
            this.store.remove((/** @type {?} */ (this._options.store_key)));
        }
        this.change$.next(data);
    }
    /**
     * @return {?}
     */
    change() {
        return this.change$.pipe(share());
    }
    /**
     * @private
     * @return {?}
     */
    builderRefresh() {
        const { refreshTime, refreshOffset } = this._options;
        this.cleanRefresh();
        this.interval$ = interval(refreshTime)
            .pipe(map((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const item = (/** @type {?} */ (this.get()));
            /** @type {?} */
            const expired = item.expired || item.exp || 0;
            if (expired <= 0) {
                return null;
            }
            /** @type {?} */
            const curTime = new Date().valueOf() + (/** @type {?} */ (refreshOffset));
            return expired <= curTime ? item : null;
        })), filter((/**
         * @param {?} v
         * @return {?}
         */
        v => v != null)))
            .subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => this.refresh$.next((/** @type {?} */ (res)))));
    }
    /**
     * @private
     * @return {?}
     */
    cleanRefresh() {
        if (this.interval$ && !this.interval$.closed) {
            this.interval$.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.cleanRefresh();
    }
}
TokenService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TokenService.ctorParameters = () => [
    { type: AlainConfigService },
    { type: undefined, decorators: [{ type: Inject, args: [DA_STORE_TOKEN,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    TokenService.prototype.refresh$;
    /**
     * @type {?}
     * @private
     */
    TokenService.prototype.change$;
    /**
     * @type {?}
     * @private
     */
    TokenService.prototype.interval$;
    /**
     * @type {?}
     * @private
     */
    TokenService.prototype._referrer;
    /**
     * @type {?}
     * @private
     */
    TokenService.prototype._options;
    /**
     * @type {?}
     * @private
     */
    TokenService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9wYWNrYWdlcy9hdXRoLyIsInNvdXJjZXMiOlsic3JjL3Rva2VuL3Rva2VuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFtQixrQkFBa0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBYyxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFVLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFHNUQsTUFBTSxVQUFVLHdCQUF3QjtJQUN0QyxPQUFPLElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0FBQzlFLENBQUM7Ozs7QUFNRCxNQUFNLE9BQU8sWUFBWTs7Ozs7SUFPdkIsWUFBWSxTQUE2QixFQUFrQyxLQUFhO1FBQWIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQU5oRixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQWUsQ0FBQztRQUN0QyxZQUFPLEdBQUcsSUFBSSxlQUFlLENBQXFCLElBQUksQ0FBQyxDQUFDO1FBRXhELGNBQVMsR0FBaUIsRUFBRSxDQUFDO1FBSW5DLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDVCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsT0FBTyxJQUFJ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QUMsUUFBUSxDQUFDLElBQUksQ0FBQyxtQkFBQSxHQUFHLEVBQUMsQ0FBQyxFQUFDLENBQUM7SUFDaEQsQ0FBQzs7Ozs7SUFFTyxZQUFZO1FBQ2xCLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDOUI7SUFDSCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7WUFwRkYsVUFBVTs7OztZQWRlLGtCQUFrQjs0Q0FzQkUsTUFBTSxTQUFDLGNBQWM7Ozs7Ozs7SUFOakUsZ0NBQThDOzs7OztJQUM5QywrQkFBZ0U7Ozs7O0lBQ2hFLGlDQUFnQzs7Ozs7SUFDaEMsaUNBQXFDOzs7OztJQUNyQyxnQ0FBa0M7Ozs7O0lBRVMsNkJBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0LCBJbmplY3QsIEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxhaW5BdXRoQ29uZmlnLCBBbGFpbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGludGVydmFsLCBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG1lcmdlQ29uZmlnIH0gZnJvbSAnLi4vYXV0aC5jb25maWcnO1xuaW1wb3J0IHsgREFfU1RPUkVfVE9LRU4sIElTdG9yZSB9IGZyb20gJy4uL3N0b3JlL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBBdXRoUmVmZXJyZXIsIElUb2tlbk1vZGVsLCBJVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gREFfU0VSVklDRV9UT0tFTl9GQUNUT1JZKCk6IElUb2tlblNlcnZpY2Uge1xuICByZXR1cm4gbmV3IFRva2VuU2VydmljZShpbmplY3QoQWxhaW5Db25maWdTZXJ2aWNlKSwgaW5qZWN0KERBX1NUT1JFX1RPS0VOKSk7XG59XG5cbi8qKlxuICog57u05oqkVG9rZW7kv6Hmga/mnI3liqHvvIxb5Zyo57q/5paH5qGjXShodHRwczovL25nLWFsYWluLmNvbS9hdXRoKVxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVG9rZW5TZXJ2aWNlIGltcGxlbWVudHMgSVRva2VuU2VydmljZSwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSByZWZyZXNoJCA9IG5ldyBTdWJqZWN0PElUb2tlbk1vZGVsPigpO1xuICBwcml2YXRlIGNoYW5nZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PElUb2tlbk1vZGVsIHwgbnVsbD4obnVsbCk7XG4gIHByaXZhdGUgaW50ZXJ2YWwkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3JlZmVycmVyOiBBdXRoUmVmZXJyZXIgPSB7fTtcbiAgcHJpdmF0ZSBfb3B0aW9uczogQWxhaW5BdXRoQ29uZmlnO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLCBASW5qZWN0KERBX1NUT1JFX1RPS0VOKSBwcml2YXRlIHN0b3JlOiBJU3RvcmUpIHtcbiAgICB0aGlzLl9vcHRpb25zID0gbWVyZ2VDb25maWcoY29uZmlnU3J2KTtcbiAgfVxuXG4gIGdldCByZWZyZXNoKCk6IE9ic2VydmFibGU8SVRva2VuTW9kZWw+IHtcbiAgICB0aGlzLmJ1aWxkZXJSZWZyZXNoKCk7XG4gICAgcmV0dXJuIHRoaXMucmVmcmVzaCQucGlwZShzaGFyZSgpKTtcbiAgfVxuXG4gIGdldCBsb2dpbl91cmwoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucy5sb2dpbl91cmw7XG4gIH1cblxuICBnZXQgcmVmZXJyZXIoKTogQXV0aFJlZmVycmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcmVmZXJyZXI7XG4gIH1cblxuICBnZXQgb3B0aW9ucygpOiBBbGFpbkF1dGhDb25maWcge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICB9XG5cbiAgc2V0KGRhdGE6IElUb2tlbk1vZGVsKTogYm9vbGVhbiB7XG4gICAgdGhpcy5jaGFuZ2UkLm5leHQoZGF0YSk7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2V0KHRoaXMuX29wdGlvbnMuc3RvcmVfa2V5ISwgZGF0YSk7XG4gIH1cblxuICBnZXQodHlwZT86IGFueSk6IGFueTtcbiAgZ2V0PFQgZXh0ZW5kcyBJVG9rZW5Nb2RlbD4odHlwZT86IG5ldyAoKSA9PiBUKTogVCB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuc3RvcmUuZ2V0KHRoaXMuX29wdGlvbnMuc3RvcmVfa2V5ISk7XG4gICAgcmV0dXJuIHR5cGUgPyAoT2JqZWN0LmFzc2lnbihuZXcgdHlwZSgpLCBkYXRhKSBhcyBUKSA6IChkYXRhIGFzIFQpO1xuICB9XG5cbiAgY2xlYXIob3B0aW9uczogeyBvbmx5VG9rZW46IGJvb2xlYW4gfSA9IHsgb25seVRva2VuOiBmYWxzZSB9KTogdm9pZCB7XG4gICAgbGV0IGRhdGE6IElUb2tlbk1vZGVsIHwgbnVsbCA9IG51bGw7XG4gICAgaWYgKG9wdGlvbnMub25seVRva2VuID09PSB0cnVlKSB7XG4gICAgICBkYXRhID0gdGhpcy5nZXQoKSBhcyBJVG9rZW5Nb2RlbDtcbiAgICAgIGRhdGEudG9rZW4gPSBgYDtcbiAgICAgIHRoaXMuc2V0KGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3JlLnJlbW92ZSh0aGlzLl9vcHRpb25zLnN0b3JlX2tleSEpO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZSQubmV4dChkYXRhKTtcbiAgfVxuXG4gIGNoYW5nZSgpOiBPYnNlcnZhYmxlPElUb2tlbk1vZGVsIHwgbnVsbD4ge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSQucGlwZShzaGFyZSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRlclJlZnJlc2goKTogdm9pZCB7XG4gICAgY29uc3QgeyByZWZyZXNoVGltZSwgcmVmcmVzaE9mZnNldCB9ID0gdGhpcy5fb3B0aW9ucztcbiAgICB0aGlzLmNsZWFuUmVmcmVzaCgpO1xuICAgIHRoaXMuaW50ZXJ2YWwkID0gaW50ZXJ2YWwocmVmcmVzaFRpbWUpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5nZXQoKSBhcyBJVG9rZW5Nb2RlbDtcbiAgICAgICAgICBjb25zdCBleHBpcmVkID0gaXRlbS5leHBpcmVkIHx8IGl0ZW0uZXhwIHx8IDA7XG4gICAgICAgICAgaWYgKGV4cGlyZWQgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgY3VyVGltZSA9IG5ldyBEYXRlKCkudmFsdWVPZigpICsgcmVmcmVzaE9mZnNldCE7XG4gICAgICAgICAgcmV0dXJuIGV4cGlyZWQgPD0gY3VyVGltZSA/IGl0ZW0gOiBudWxsO1xuICAgICAgICB9KSxcbiAgICAgICAgZmlsdGVyKHYgPT4gdiAhPSBudWxsKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHRoaXMucmVmcmVzaCQubmV4dChyZXMhKSk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFuUmVmcmVzaCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbnRlcnZhbCQgJiYgIXRoaXMuaW50ZXJ2YWwkLmNsb3NlZCkge1xuICAgICAgdGhpcy5pbnRlcnZhbCQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFuUmVmcmVzaCgpO1xuICB9XG59XG4iXX0=