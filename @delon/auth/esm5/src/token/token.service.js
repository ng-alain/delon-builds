/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { share } from 'rxjs/operators';
import { DA_STORE_TOKEN } from '../store/interface';
import { DelonAuthConfig } from '../auth.config';
var TokenService = /** @class */ (function () {
    function TokenService(options, store) {
        this.options = options;
        this.store = store;
        this.change$ = new BehaviorSubject(null);
    }
    Object.defineProperty(TokenService.prototype, "login_url", {
        get: /**
         * @return {?}
         */
        function () {
            return this.options.login_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TokenService.prototype, "redirect", {
        get: /**
         * @return {?}
         */
        function () {
            return this._redirect || '/';
        },
        set: /**
         * @param {?} url
         * @return {?}
         */
        function (url) {
            this._redirect = url;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} data
     * @return {?}
     */
    TokenService.prototype.set = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.change$.next(data);
        return this.store.set(this.options.store_key, data);
    };
    /**
     * @template T
     * @param {?=} type
     * @return {?}
     */
    TokenService.prototype.get = /**
     * @template T
     * @param {?=} type
     * @return {?}
     */
    function (type) {
        /** @type {?} */
        var data = this.store.get(this.options.store_key);
        return type ? (/** @type {?} */ (Object.assign(new type(), data))) : (/** @type {?} */ (data));
    };
    /**
     * @return {?}
     */
    TokenService.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.change$.next(null);
        this.store.remove(this.options.store_key);
    };
    /**
     * @return {?}
     */
    TokenService.prototype.change = /**
     * @return {?}
     */
    function () {
        return this.change$.pipe(share());
    };
    TokenService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TokenService.ctorParameters = function () { return [
        { type: DelonAuthConfig },
        { type: undefined, decorators: [{ type: Inject, args: [DA_STORE_TOKEN,] }] }
    ]; };
    return TokenService;
}());
export { TokenService };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hdXRoLyIsInNvdXJjZXMiOlsic3JjL3Rva2VuL3Rva2VuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBYyxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXZDLE9BQU8sRUFBRSxjQUFjLEVBQVUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBVS9DLHNCQUNVLFNBQ3dCLEtBQWE7UUFEckMsWUFBTyxHQUFQLE9BQU87UUFDaUIsVUFBSyxHQUFMLEtBQUssQ0FBUTt1QkFSQyxJQUFJLGVBQWUsQ0FFakUsSUFBSSxDQUFDO0tBT0g7SUFFSixzQkFBSSxtQ0FBUzs7OztRQUFiO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztTQUMvQjs7O09BQUE7SUFFRCxzQkFBSSxrQ0FBUTs7OztRQUlaO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxJQUFJLEdBQUcsQ0FBQztTQUM5Qjs7Ozs7UUFORCxVQUFhLEdBQVc7WUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7U0FDdEI7OztPQUFBOzs7OztJQU1ELDBCQUFHOzs7O0lBQUgsVUFBSSxJQUFpQjtRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ3JEOzs7Ozs7SUFHRCwwQkFBRzs7Ozs7SUFBSCxVQUEyQixJQUFvQjs7UUFDN0MsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwRCxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsbUJBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLElBQUksQ0FBTSxFQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFDLElBQVMsRUFBQyxDQUFDO0tBQ3BFOzs7O0lBRUQsNEJBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUMzQzs7OztJQUVELDZCQUFNOzs7SUFBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztLQUNuQzs7Z0JBM0NGLFVBQVU7Ozs7Z0JBRkYsZUFBZTtnREFZbkIsTUFBTSxTQUFDLGNBQWM7O3VCQWpCMUI7O1NBUWEsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElUb2tlblNlcnZpY2UsIElUb2tlbk1vZGVsIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgREFfU1RPUkVfVE9LRU4sIElTdG9yZSB9IGZyb20gJy4uL3N0b3JlL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBEZWxvbkF1dGhDb25maWcgfSBmcm9tICcuLi9hdXRoLmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUb2tlblNlcnZpY2UgaW1wbGVtZW50cyBJVG9rZW5TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjaGFuZ2UkOiBCZWhhdmlvclN1YmplY3Q8SVRva2VuTW9kZWw+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxcbiAgICBJVG9rZW5Nb2RlbFxuICA+KG51bGwpO1xuICBwcml2YXRlIGRhdGE6IElUb2tlbk1vZGVsO1xuICBwcml2YXRlIF9yZWRpcmVjdDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgb3B0aW9uczogRGVsb25BdXRoQ29uZmlnLFxuICAgIEBJbmplY3QoREFfU1RPUkVfVE9LRU4pIHByaXZhdGUgc3RvcmU6IElTdG9yZSxcbiAgKSB7fVxuXG4gIGdldCBsb2dpbl91cmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmxvZ2luX3VybDtcbiAgfVxuXG4gIHNldCByZWRpcmVjdCh1cmw6IHN0cmluZykge1xuICAgIHRoaXMuX3JlZGlyZWN0ID0gdXJsO1xuICB9XG5cbiAgZ2V0IHJlZGlyZWN0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWRpcmVjdCB8fCAnLyc7XG4gIH1cblxuICBzZXQoZGF0YTogSVRva2VuTW9kZWwpOiBib29sZWFuIHtcbiAgICB0aGlzLmNoYW5nZSQubmV4dChkYXRhKTtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZXQodGhpcy5vcHRpb25zLnN0b3JlX2tleSwgZGF0YSk7XG4gIH1cblxuICBnZXQodHlwZT86IGFueSk7XG4gIGdldDxUIGV4dGVuZHMgSVRva2VuTW9kZWw+KHR5cGU/OiB7IG5ldyAoKTogVCB9KTogVCB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuc3RvcmUuZ2V0KHRoaXMub3B0aW9ucy5zdG9yZV9rZXkpO1xuICAgIHJldHVybiB0eXBlID8gKE9iamVjdC5hc3NpZ24obmV3IHR5cGUoKSwgZGF0YSkgYXMgVCkgOiAoZGF0YSBhcyBUKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuY2hhbmdlJC5uZXh0KG51bGwpO1xuICAgIHRoaXMuc3RvcmUucmVtb3ZlKHRoaXMub3B0aW9ucy5zdG9yZV9rZXkpO1xuICB9XG5cbiAgY2hhbmdlKCk6IE9ic2VydmFibGU8SVRva2VuTW9kZWw+IHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UkLnBpcGUoc2hhcmUoKSk7XG4gIH1cbn1cbiJdfQ==