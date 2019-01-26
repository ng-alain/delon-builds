/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
var TokenService = /** @class */ (function () {
    function TokenService(options, store) {
        this.options = options;
        this.store = store;
        this.change$ = new BehaviorSubject(null);
        this._referrer = {};
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
    Object.defineProperty(TokenService.prototype, "referrer", {
        get: /**
         * @return {?}
         */
        function () {
            return this._referrer;
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
        return type ? ((/** @type {?} */ (Object.assign(new type(), data)))) : ((/** @type {?} */ (data)));
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
    TokenService.prototype._referrer;
    /** @type {?} */
    TokenService.prototype.options;
    /** @type {?} */
    TokenService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hdXRoLyIsInNvdXJjZXMiOlsic3JjL3Rva2VuL3Rva2VuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFVLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFHNUQsTUFBTSxVQUFVLHdCQUF3QjtJQUN0QyxPQUFPLElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztBQUMzRSxDQUFDO0FBRUQ7SUFJRSxzQkFBb0IsT0FBd0IsRUFBa0MsS0FBYTtRQUF2RSxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUFrQyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBSG5GLFlBQU8sR0FBaUMsSUFBSSxlQUFlLENBQWMsSUFBSSxDQUFDLENBQUM7UUFDL0UsY0FBUyxHQUFpQixFQUFFLENBQUM7SUFFeUQsQ0FBQztJQUUvRixzQkFBSSxtQ0FBUzs7OztRQUFiO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGtDQUFROzs7O1FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7Ozs7O0lBRUQsMEJBQUc7Ozs7SUFBSCxVQUFJLElBQWlCO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7O0lBSUQsMEJBQUc7Ozs7O0lBQUgsVUFBMkIsSUFBb0I7O1lBQ3ZDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUNuRCxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBQSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFBLElBQUksRUFBSyxDQUFDLENBQUM7SUFDckUsQ0FBQzs7OztJQUVELDRCQUFLOzs7SUFBTDtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7OztJQUVELDZCQUFNOzs7SUFBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7Z0JBekNNLGVBQWU7Z0RBWXlCLE1BQU0sU0FBQyxjQUFjOztJQThCdEUsbUJBQUM7Q0FBQSxBQWxDRCxJQWtDQztTQWxDWSxZQUFZOzs7SUFDdkIsK0JBQXVGOztJQUN2RixpQ0FBcUM7O0lBRXpCLCtCQUFnQzs7SUFBRSw2QkFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERlbG9uQXV0aENvbmZpZyB9IGZyb20gJy4uL2F1dGguY29uZmlnJztcbmltcG9ydCB7IERBX1NUT1JFX1RPS0VOLCBJU3RvcmUgfSBmcm9tICcuLi9zdG9yZS9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQXV0aFJlZmVycmVyLCBJVG9rZW5Nb2RlbCwgSVRva2VuU2VydmljZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIERBX1NFUlZJQ0VfVE9LRU5fRkFDVE9SWSgpOiBJVG9rZW5TZXJ2aWNlIHtcbiAgcmV0dXJuIG5ldyBUb2tlblNlcnZpY2UoaW5qZWN0KERlbG9uQXV0aENvbmZpZyksIGluamVjdChEQV9TVE9SRV9UT0tFTikpO1xufVxuXG5leHBvcnQgY2xhc3MgVG9rZW5TZXJ2aWNlIGltcGxlbWVudHMgSVRva2VuU2VydmljZSB7XG4gIHByaXZhdGUgY2hhbmdlJDogQmVoYXZpb3JTdWJqZWN0PElUb2tlbk1vZGVsPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8SVRva2VuTW9kZWw+KG51bGwpO1xuICBwcml2YXRlIF9yZWZlcnJlcjogQXV0aFJlZmVycmVyID0ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvcHRpb25zOiBEZWxvbkF1dGhDb25maWcsIEBJbmplY3QoREFfU1RPUkVfVE9LRU4pIHByaXZhdGUgc3RvcmU6IElTdG9yZSkge31cblxuICBnZXQgbG9naW5fdXJsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5sb2dpbl91cmw7XG4gIH1cblxuICBnZXQgcmVmZXJyZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlZmVycmVyO1xuICB9XG5cbiAgc2V0KGRhdGE6IElUb2tlbk1vZGVsKTogYm9vbGVhbiB7XG4gICAgdGhpcy5jaGFuZ2UkLm5leHQoZGF0YSk7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2V0KHRoaXMub3B0aW9ucy5zdG9yZV9rZXksIGRhdGEpO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBnZXQodHlwZT86IGFueSk7XG4gIGdldDxUIGV4dGVuZHMgSVRva2VuTW9kZWw+KHR5cGU/OiB7IG5ldyAoKTogVCB9KTogVCB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuc3RvcmUuZ2V0KHRoaXMub3B0aW9ucy5zdG9yZV9rZXkpO1xuICAgIHJldHVybiB0eXBlID8gKE9iamVjdC5hc3NpZ24obmV3IHR5cGUoKSwgZGF0YSkgYXMgVCkgOiAoZGF0YSBhcyBUKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuY2hhbmdlJC5uZXh0KG51bGwpO1xuICAgIHRoaXMuc3RvcmUucmVtb3ZlKHRoaXMub3B0aW9ucy5zdG9yZV9rZXkpO1xuICB9XG5cbiAgY2hhbmdlKCk6IE9ic2VydmFibGU8SVRva2VuTW9kZWw+IHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UkLnBpcGUoc2hhcmUoKSk7XG4gIH1cbn1cbiJdfQ==