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
            const expired = item.expired || 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92c3RzL3dvcmsvMS9zL3BhY2thZ2VzL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vdG9rZW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RSxPQUFPLEVBQW1CLGtCQUFrQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFjLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDcEYsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQVUsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQUc1RCxNQUFNLFVBQVUsd0JBQXdCO0lBQ3RDLE9BQU8sSUFBSSxZQUFZLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7QUFDOUUsQ0FBQzs7OztBQU1ELE1BQU0sT0FBTyxZQUFZOzs7OztJQU92QixZQUFZLFNBQTZCLEVBQWtDLEtBQWE7UUFBYixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBTmhGLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBZSxDQUFDO1FBQ3RDLFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBcUIsSUFBSSxDQUFDLENBQUM7UUFFeEQsY0FBUyxHQUFpQixFQUFFLENBQUM7UUFJbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELElBQUksT0FBTztRQUNULElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixP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LElBQUksQ0FBQyxtQkFBQSxHQUFHLEVBQUMsQ0FBQyxFQUFDLENBQUM7SUFDaEQsQ0FBQzs7Ozs7SUFFTyxZQUFZO1FBQ2xCLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDOUI7SUFDSCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7WUFwRkYsVUFBVTs7OztZQWRlLGtCQUFrQjs0Q0FzQkUsTUFBTSxTQUFDLGNBQWM7Ozs7Ozs7SUFOakUsZ0NBQThDOzs7OztJQUM5QywrQkFBZ0U7Ozs7O0lBQ2hFLGlDQUFnQzs7Ozs7SUFDaEMsaUNBQXFDOzs7OztJQUNyQyxnQ0FBa0M7Ozs7O0lBRVMsNkJBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0LCBJbmplY3QsIEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxhaW5BdXRoQ29uZmlnLCBBbGFpbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGludGVydmFsLCBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG1lcmdlQ29uZmlnIH0gZnJvbSAnLi4vYXV0aC5jb25maWcnO1xuaW1wb3J0IHsgREFfU1RPUkVfVE9LRU4sIElTdG9yZSB9IGZyb20gJy4uL3N0b3JlL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBBdXRoUmVmZXJyZXIsIElUb2tlbk1vZGVsLCBJVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gREFfU0VSVklDRV9UT0tFTl9GQUNUT1JZKCk6IElUb2tlblNlcnZpY2Uge1xuICByZXR1cm4gbmV3IFRva2VuU2VydmljZShpbmplY3QoQWxhaW5Db25maWdTZXJ2aWNlKSwgaW5qZWN0KERBX1NUT1JFX1RPS0VOKSk7XG59XG5cbi8qKlxuICog57u05oqkVG9rZW7kv6Hmga/mnI3liqHvvIxb5Zyo57q/5paH5qGjXShodHRwczovL25nLWFsYWluLmNvbS9hdXRoKVxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVG9rZW5TZXJ2aWNlIGltcGxlbWVudHMgSVRva2VuU2VydmljZSwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSByZWZyZXNoJCA9IG5ldyBTdWJqZWN0PElUb2tlbk1vZGVsPigpO1xuICBwcml2YXRlIGNoYW5nZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PElUb2tlbk1vZGVsIHwgbnVsbD4obnVsbCk7XG4gIHByaXZhdGUgaW50ZXJ2YWwkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3JlZmVycmVyOiBBdXRoUmVmZXJyZXIgPSB7fTtcbiAgcHJpdmF0ZSBfb3B0aW9uczogQWxhaW5BdXRoQ29uZmlnO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLCBASW5qZWN0KERBX1NUT1JFX1RPS0VOKSBwcml2YXRlIHN0b3JlOiBJU3RvcmUpIHtcbiAgICB0aGlzLl9vcHRpb25zID0gbWVyZ2VDb25maWcoY29uZmlnU3J2KTtcbiAgfVxuXG4gIGdldCByZWZyZXNoKCk6IE9ic2VydmFibGU8SVRva2VuTW9kZWw+IHtcbiAgICB0aGlzLmJ1aWxkZXJSZWZyZXNoKCk7XG4gICAgcmV0dXJuIHRoaXMucmVmcmVzaCQucGlwZShzaGFyZSgpKTtcbiAgfVxuXG4gIGdldCBsb2dpbl91cmwoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucy5sb2dpbl91cmw7XG4gIH1cblxuICBnZXQgcmVmZXJyZXIoKTogQXV0aFJlZmVycmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcmVmZXJyZXI7XG4gIH1cblxuICBnZXQgb3B0aW9ucygpOiBBbGFpbkF1dGhDb25maWcge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICB9XG5cbiAgc2V0KGRhdGE6IElUb2tlbk1vZGVsKTogYm9vbGVhbiB7XG4gICAgdGhpcy5jaGFuZ2UkLm5leHQoZGF0YSk7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2V0KHRoaXMuX29wdGlvbnMuc3RvcmVfa2V5ISwgZGF0YSk7XG4gIH1cblxuICBnZXQodHlwZT86IGFueSk6IGFueTtcbiAgZ2V0PFQgZXh0ZW5kcyBJVG9rZW5Nb2RlbD4odHlwZT86IG5ldyAoKSA9PiBUKTogVCB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuc3RvcmUuZ2V0KHRoaXMuX29wdGlvbnMuc3RvcmVfa2V5ISk7XG4gICAgcmV0dXJuIHR5cGUgPyAoT2JqZWN0LmFzc2lnbihuZXcgdHlwZSgpLCBkYXRhKSBhcyBUKSA6IChkYXRhIGFzIFQpO1xuICB9XG5cbiAgY2xlYXIob3B0aW9uczogeyBvbmx5VG9rZW46IGJvb2xlYW4gfSA9IHsgb25seVRva2VuOiBmYWxzZSB9KTogdm9pZCB7XG4gICAgbGV0IGRhdGE6IElUb2tlbk1vZGVsIHwgbnVsbCA9IG51bGw7XG4gICAgaWYgKG9wdGlvbnMub25seVRva2VuID09PSB0cnVlKSB7XG4gICAgICBkYXRhID0gdGhpcy5nZXQoKSBhcyBJVG9rZW5Nb2RlbDtcbiAgICAgIGRhdGEudG9rZW4gPSBgYDtcbiAgICAgIHRoaXMuc2V0KGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3JlLnJlbW92ZSh0aGlzLl9vcHRpb25zLnN0b3JlX2tleSEpO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZSQubmV4dChkYXRhKTtcbiAgfVxuXG4gIGNoYW5nZSgpOiBPYnNlcnZhYmxlPElUb2tlbk1vZGVsIHwgbnVsbD4ge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSQucGlwZShzaGFyZSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRlclJlZnJlc2goKTogdm9pZCB7XG4gICAgY29uc3QgeyByZWZyZXNoVGltZSwgcmVmcmVzaE9mZnNldCB9ID0gdGhpcy5fb3B0aW9ucztcbiAgICB0aGlzLmNsZWFuUmVmcmVzaCgpO1xuICAgIHRoaXMuaW50ZXJ2YWwkID0gaW50ZXJ2YWwocmVmcmVzaFRpbWUpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5nZXQoKSBhcyBJVG9rZW5Nb2RlbDtcbiAgICAgICAgICBjb25zdCBleHBpcmVkID0gaXRlbS5leHBpcmVkIHx8IDA7XG4gICAgICAgICAgaWYgKGV4cGlyZWQgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgY3VyVGltZSA9IG5ldyBEYXRlKCkudmFsdWVPZigpICsgcmVmcmVzaE9mZnNldCE7XG4gICAgICAgICAgcmV0dXJuIGV4cGlyZWQgPD0gY3VyVGltZSA/IGl0ZW0gOiBudWxsO1xuICAgICAgICB9KSxcbiAgICAgICAgZmlsdGVyKHYgPT4gdiAhPSBudWxsKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHRoaXMucmVmcmVzaCQubmV4dChyZXMhKSk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFuUmVmcmVzaCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbnRlcnZhbCQgJiYgIXRoaXMuaW50ZXJ2YWwkLmNsb3NlZCkge1xuICAgICAgdGhpcy5pbnRlcnZhbCQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFuUmVmcmVzaCgpO1xuICB9XG59XG4iXX0=