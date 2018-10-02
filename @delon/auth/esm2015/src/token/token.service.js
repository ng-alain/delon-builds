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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hdXRoLyIsInNvdXJjZXMiOlsic3JjL3Rva2VuL3Rva2VuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBYyxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXZDLE9BQU8sRUFBRSxjQUFjLEVBQVUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHakQsTUFBTTs7Ozs7SUFPSixZQUNVLFNBQ3dCLEtBQWE7UUFEckMsWUFBTyxHQUFQLE9BQU87UUFDaUIsVUFBSyxHQUFMLEtBQUssQ0FBUTt1QkFSQyxJQUFJLGVBQWUsQ0FFakUsSUFBSSxDQUFDO0tBT0g7Ozs7SUFFSixJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO0tBQy9COzs7OztJQUVELElBQUksUUFBUSxDQUFDLEdBQVc7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7S0FDdEI7Ozs7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLElBQUksR0FBRyxDQUFDO0tBQzlCOzs7OztJQUVELEdBQUcsQ0FBQyxJQUFpQjtRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ3JEOzs7Ozs7SUFHRCxHQUFHLENBQXdCLElBQW9COztRQUM3QyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BELE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxtQkFBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFNLEVBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQUMsSUFBUyxFQUFDLENBQUM7S0FDcEU7Ozs7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUMzQzs7OztJQUVELE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7S0FDbkM7OztZQTNDRixVQUFVOzs7O1lBRkYsZUFBZTs0Q0FZbkIsTUFBTSxTQUFDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHNoYXJlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBJVG9rZW5TZXJ2aWNlLCBJVG9rZW5Nb2RlbCB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgREFfU1RPUkVfVE9LRU4sIElTdG9yZSB9IGZyb20gJy4uL3N0b3JlL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IERlbG9uQXV0aENvbmZpZyB9IGZyb20gJy4uL2F1dGguY29uZmlnJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRva2VuU2VydmljZSBpbXBsZW1lbnRzIElUb2tlblNlcnZpY2Uge1xyXG4gIHByaXZhdGUgY2hhbmdlJDogQmVoYXZpb3JTdWJqZWN0PElUb2tlbk1vZGVsPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8XHJcbiAgICBJVG9rZW5Nb2RlbFxyXG4gID4obnVsbCk7XHJcbiAgcHJpdmF0ZSBkYXRhOiBJVG9rZW5Nb2RlbDtcclxuICBwcml2YXRlIF9yZWRpcmVjdDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgb3B0aW9uczogRGVsb25BdXRoQ29uZmlnLFxyXG4gICAgQEluamVjdChEQV9TVE9SRV9UT0tFTikgcHJpdmF0ZSBzdG9yZTogSVN0b3JlLFxyXG4gICkge31cclxuXHJcbiAgZ2V0IGxvZ2luX3VybCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5sb2dpbl91cmw7XHJcbiAgfVxyXG5cclxuICBzZXQgcmVkaXJlY3QodXJsOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3JlZGlyZWN0ID0gdXJsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJlZGlyZWN0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JlZGlyZWN0IHx8ICcvJztcclxuICB9XHJcblxyXG4gIHNldChkYXRhOiBJVG9rZW5Nb2RlbCk6IGJvb2xlYW4ge1xyXG4gICAgdGhpcy5jaGFuZ2UkLm5leHQoZGF0YSk7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZXQodGhpcy5vcHRpb25zLnN0b3JlX2tleSwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXQodHlwZT86IGFueSk7XHJcbiAgZ2V0PFQgZXh0ZW5kcyBJVG9rZW5Nb2RlbD4odHlwZT86IHsgbmV3ICgpOiBUIH0pOiBUIHtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnN0b3JlLmdldCh0aGlzLm9wdGlvbnMuc3RvcmVfa2V5KTtcclxuICAgIHJldHVybiB0eXBlID8gKE9iamVjdC5hc3NpZ24obmV3IHR5cGUoKSwgZGF0YSkgYXMgVCkgOiAoZGF0YSBhcyBUKTtcclxuICB9XHJcblxyXG4gIGNsZWFyKCkge1xyXG4gICAgdGhpcy5jaGFuZ2UkLm5leHQobnVsbCk7XHJcbiAgICB0aGlzLnN0b3JlLnJlbW92ZSh0aGlzLm9wdGlvbnMuc3RvcmVfa2V5KTtcclxuICB9XHJcblxyXG4gIGNoYW5nZSgpOiBPYnNlcnZhYmxlPElUb2tlbk1vZGVsPiB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UkLnBpcGUoc2hhcmUoKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==