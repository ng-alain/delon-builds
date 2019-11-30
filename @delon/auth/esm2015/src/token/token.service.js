/**
 * @fileoverview added by tsickle
 * Generated from: src/token/token.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { inject, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { share } from 'rxjs/operators';
import { DelonAuthConfig } from '../auth.config';
import { DA_STORE_TOKEN } from '../store/interface';
/**
 * @return {?}
 */
export function DA_SERVICE_TOKEN_FACTORY() {
    return new TokenService(inject(DelonAuthConfig), inject(DA_STORE_TOKEN));
}
export class TokenService {
    /**
     * @param {?} options
     * @param {?} store
     */
    constructor(options, store) {
        this.options = options;
        this.store = store;
        this.change$ = new BehaviorSubject(null);
        this._referrer = {};
    }
    /**
     * @return {?}
     */
    get login_url() {
        return this.options.login_url;
    }
    /**
     * @return {?}
     */
    get referrer() {
        return this._referrer;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set(data) {
        this.change$.next(data);
        return this.store.set((/** @type {?} */ (this.options.store_key)), data);
    }
    /**
     * @template T
     * @param {?=} type
     * @return {?}
     */
    get(type) {
        /** @type {?} */
        const data = this.store.get((/** @type {?} */ (this.options.store_key)));
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
            this.store.remove((/** @type {?} */ (this.options.store_key)));
        }
        this.change$.next(data);
    }
    /**
     * @return {?}
     */
    change() {
        return this.change$.pipe(share());
    }
}
/** @nocollapse */
TokenService.ctorParameters = () => [
    { type: DelonAuthConfig },
    { type: undefined, decorators: [{ type: Inject, args: [DA_STORE_TOKEN,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    TokenService.prototype.change$;
    /**
     * @type {?}
     * @private
     */
    TokenService.prototype._referrer;
    /**
     * @type {?}
     * @private
     */
    TokenService.prototype.options;
    /**
     * @type {?}
     * @private
     */
    TokenService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hdXRoLyIsInNvdXJjZXMiOlsic3JjL3Rva2VuL3Rva2VuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLGNBQWMsRUFBVSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBRzVELE1BQU0sVUFBVSx3QkFBd0I7SUFDdEMsT0FBTyxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7QUFDM0UsQ0FBQztBQUVELE1BQU0sT0FBTyxZQUFZOzs7OztJQUl2QixZQUFvQixPQUF3QixFQUFrQyxLQUFhO1FBQXZFLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQWtDLFVBQUssR0FBTCxLQUFLLENBQVE7UUFIbkYsWUFBTyxHQUFHLElBQUksZUFBZSxDQUFxQixJQUFJLENBQUMsQ0FBQztRQUN4RCxjQUFTLEdBQWlCLEVBQUUsQ0FBQztJQUV5RCxDQUFDOzs7O0lBRS9GLElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELEdBQUcsQ0FBQyxJQUFpQjtRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLG1CQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Ozs7O0lBR0QsR0FBRyxDQUF3QixJQUFrQjs7Y0FDckMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLG1CQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFDLENBQUM7UUFDcEQsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQUEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBQSxJQUFJLEVBQUssQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Ozs7O0lBRUQsS0FBSyxDQUFDLFVBQWtDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRTs7WUFDdEQsSUFBSSxHQUF1QixJQUFJO1FBQ25DLElBQUksT0FBTyxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDOUIsSUFBSSxHQUFHLG1CQUFBLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBZSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEI7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLG1CQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQztTQUM1QztRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7WUEvQ00sZUFBZTs0Q0FZeUIsTUFBTSxTQUFDLGNBQWM7Ozs7Ozs7SUFIcEUsK0JBQWdFOzs7OztJQUNoRSxpQ0FBcUM7Ozs7O0lBRXpCLCtCQUFnQzs7Ozs7SUFBRSw2QkFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERlbG9uQXV0aENvbmZpZyB9IGZyb20gJy4uL2F1dGguY29uZmlnJztcbmltcG9ydCB7IERBX1NUT1JFX1RPS0VOLCBJU3RvcmUgfSBmcm9tICcuLi9zdG9yZS9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQXV0aFJlZmVycmVyLCBJVG9rZW5Nb2RlbCwgSVRva2VuU2VydmljZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIERBX1NFUlZJQ0VfVE9LRU5fRkFDVE9SWSgpOiBJVG9rZW5TZXJ2aWNlIHtcbiAgcmV0dXJuIG5ldyBUb2tlblNlcnZpY2UoaW5qZWN0KERlbG9uQXV0aENvbmZpZyksIGluamVjdChEQV9TVE9SRV9UT0tFTikpO1xufVxuXG5leHBvcnQgY2xhc3MgVG9rZW5TZXJ2aWNlIGltcGxlbWVudHMgSVRva2VuU2VydmljZSB7XG4gIHByaXZhdGUgY2hhbmdlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8SVRva2VuTW9kZWwgfCBudWxsPihudWxsKTtcbiAgcHJpdmF0ZSBfcmVmZXJyZXI6IEF1dGhSZWZlcnJlciA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3B0aW9uczogRGVsb25BdXRoQ29uZmlnLCBASW5qZWN0KERBX1NUT1JFX1RPS0VOKSBwcml2YXRlIHN0b3JlOiBJU3RvcmUpIHt9XG5cbiAgZ2V0IGxvZ2luX3VybCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMubG9naW5fdXJsO1xuICB9XG5cbiAgZ2V0IHJlZmVycmVyKCkge1xuICAgIHJldHVybiB0aGlzLl9yZWZlcnJlcjtcbiAgfVxuXG4gIHNldChkYXRhOiBJVG9rZW5Nb2RlbCk6IGJvb2xlYW4ge1xuICAgIHRoaXMuY2hhbmdlJC5uZXh0KGRhdGEpO1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnNldCh0aGlzLm9wdGlvbnMuc3RvcmVfa2V5ISwgZGF0YSk7XG4gIH1cblxuICBnZXQodHlwZT86IGFueSk7XG4gIGdldDxUIGV4dGVuZHMgSVRva2VuTW9kZWw+KHR5cGU/OiBuZXcgKCkgPT4gVCk6IFQge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnN0b3JlLmdldCh0aGlzLm9wdGlvbnMuc3RvcmVfa2V5ISk7XG4gICAgcmV0dXJuIHR5cGUgPyAoT2JqZWN0LmFzc2lnbihuZXcgdHlwZSgpLCBkYXRhKSBhcyBUKSA6IChkYXRhIGFzIFQpO1xuICB9XG5cbiAgY2xlYXIob3B0aW9uczogeyBvbmx5VG9rZW46IGJvb2xlYW4gfSA9IHsgb25seVRva2VuOiBmYWxzZSB9KSB7XG4gICAgbGV0IGRhdGE6IElUb2tlbk1vZGVsIHwgbnVsbCA9IG51bGw7XG4gICAgaWYgKG9wdGlvbnMub25seVRva2VuID09PSB0cnVlKSB7XG4gICAgICBkYXRhID0gdGhpcy5nZXQoKSBhcyBJVG9rZW5Nb2RlbDtcbiAgICAgIGRhdGEudG9rZW4gPSBgYDtcbiAgICAgIHRoaXMuc2V0KGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3JlLnJlbW92ZSh0aGlzLm9wdGlvbnMuc3RvcmVfa2V5ISk7XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlJC5uZXh0KGRhdGEpO1xuICB9XG5cbiAgY2hhbmdlKCk6IE9ic2VydmFibGU8SVRva2VuTW9kZWwgfCBudWxsPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlJC5waXBlKHNoYXJlKCkpO1xuICB9XG59XG4iXX0=