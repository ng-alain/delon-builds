/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { share } from 'rxjs/operators';
import { DA_STORE_TOKEN } from '../store/interface';
import { DelonAuthConfig } from '../auth.config';
export class TokenService {
    /**
     * @param {?} options
     * @param {?} store
     */
    constructor(options, store) {
        this.options = options;
        this.store = store;
        this.change$ = new BehaviorSubject(null);
    }
    /**
     * @return {?}
     */
    get login_url() {
        return this.options.login_url;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    set redirect(url) {
        this._redirect = url;
    }
    /**
     * @return {?}
     */
    get redirect() {
        return this._redirect || '/';
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set(data) {
        this.change$.next(data);
        return this.store.set(this.options.store_key, data);
    }
    /**
     * @template T
     * @param {?=} type
     * @return {?}
     */
    get(type) {
        /** @type {?} */
        const data = this.store.get(this.options.store_key);
        return type ? (/** @type {?} */ (Object.assign(new type(), data))) : (/** @type {?} */ (data));
    }
    /**
     * @return {?}
     */
    clear() {
        this.change$.next(null);
        this.store.remove(this.options.store_key);
    }
    /**
     * @return {?}
     */
    change() {
        return this.change$.pipe(share());
    }
}
TokenService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TokenService.ctorParameters = () => [
    { type: DelonAuthConfig },
    { type: undefined, decorators: [{ type: Inject, args: [DA_STORE_TOKEN,] }] }
];
if (false) {
    /** @type {?} */
    TokenService.prototype.change$;
    /** @type {?} */
    TokenService.prototype.data;
    /** @type {?} */
    TokenService.prototype._redirect;
    /** @type {?} */
    TokenService.prototype.options;
    /** @type {?} */
    TokenService.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hdXRoLyIsInNvdXJjZXMiOlsic3JjL3Rva2VuL3Rva2VuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBYyxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXZDLE9BQU8sRUFBRSxjQUFjLEVBQVUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHakQsTUFBTTs7Ozs7SUFPSixZQUNVLFNBQ3dCLEtBQWE7UUFEckMsWUFBTyxHQUFQLE9BQU87UUFDaUIsVUFBSyxHQUFMLEtBQUssQ0FBUTt1QkFSQyxJQUFJLGVBQWUsQ0FFakUsSUFBSSxDQUFDO0tBT0g7Ozs7SUFFSixJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO0tBQy9COzs7OztJQUVELElBQUksUUFBUSxDQUFDLEdBQVc7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7S0FDdEI7Ozs7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLElBQUksR0FBRyxDQUFDO0tBQzlCOzs7OztJQUVELEdBQUcsQ0FBQyxJQUFpQjtRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ3JEOzs7Ozs7SUFHRCxHQUFHLENBQXdCLElBQW9COztRQUM3QyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BELE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxtQkFBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFNLEVBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQUMsSUFBUyxFQUFDLENBQUM7S0FDcEU7Ozs7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUMzQzs7OztJQUVELE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7S0FDbkM7OztZQTNDRixVQUFVOzs7O1lBRkYsZUFBZTs0Q0FZbkIsTUFBTSxTQUFDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJVG9rZW5TZXJ2aWNlLCBJVG9rZW5Nb2RlbCB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IERBX1NUT1JFX1RPS0VOLCBJU3RvcmUgfSBmcm9tICcuLi9zdG9yZS9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGVsb25BdXRoQ29uZmlnIH0gZnJvbSAnLi4vYXV0aC5jb25maWcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVG9rZW5TZXJ2aWNlIGltcGxlbWVudHMgSVRva2VuU2VydmljZSB7XG4gIHByaXZhdGUgY2hhbmdlJDogQmVoYXZpb3JTdWJqZWN0PElUb2tlbk1vZGVsPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8XG4gICAgSVRva2VuTW9kZWxcbiAgPihudWxsKTtcbiAgcHJpdmF0ZSBkYXRhOiBJVG9rZW5Nb2RlbDtcbiAgcHJpdmF0ZSBfcmVkaXJlY3Q6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG9wdGlvbnM6IERlbG9uQXV0aENvbmZpZyxcbiAgICBASW5qZWN0KERBX1NUT1JFX1RPS0VOKSBwcml2YXRlIHN0b3JlOiBJU3RvcmUsXG4gICkge31cblxuICBnZXQgbG9naW5fdXJsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5sb2dpbl91cmw7XG4gIH1cblxuICBzZXQgcmVkaXJlY3QodXJsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZWRpcmVjdCA9IHVybDtcbiAgfVxuXG4gIGdldCByZWRpcmVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVkaXJlY3QgfHwgJy8nO1xuICB9XG5cbiAgc2V0KGRhdGE6IElUb2tlbk1vZGVsKTogYm9vbGVhbiB7XG4gICAgdGhpcy5jaGFuZ2UkLm5leHQoZGF0YSk7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2V0KHRoaXMub3B0aW9ucy5zdG9yZV9rZXksIGRhdGEpO1xuICB9XG5cbiAgZ2V0KHR5cGU/OiBhbnkpO1xuICBnZXQ8VCBleHRlbmRzIElUb2tlbk1vZGVsPih0eXBlPzogeyBuZXcgKCk6IFQgfSk6IFQge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnN0b3JlLmdldCh0aGlzLm9wdGlvbnMuc3RvcmVfa2V5KTtcbiAgICByZXR1cm4gdHlwZSA/IChPYmplY3QuYXNzaWduKG5ldyB0eXBlKCksIGRhdGEpIGFzIFQpIDogKGRhdGEgYXMgVCk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmNoYW5nZSQubmV4dChudWxsKTtcbiAgICB0aGlzLnN0b3JlLnJlbW92ZSh0aGlzLm9wdGlvbnMuc3RvcmVfa2V5KTtcbiAgfVxuXG4gIGNoYW5nZSgpOiBPYnNlcnZhYmxlPElUb2tlbk1vZGVsPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlJC5waXBlKHNoYXJlKCkpO1xuICB9XG59XG4iXX0=