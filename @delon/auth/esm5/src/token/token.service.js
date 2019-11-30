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
        return this.store.set((/** @type {?} */ (this.options.store_key)), data);
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
        var data = this.store.get((/** @type {?} */ (this.options.store_key)));
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
        this.store.remove((/** @type {?} */ (this.options.store_key)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hdXRoLyIsInNvdXJjZXMiOlsic3JjL3Rva2VuL3Rva2VuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLGNBQWMsRUFBVSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBRzVELE1BQU0sVUFBVSx3QkFBd0I7SUFDdEMsT0FBTyxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7QUFDM0UsQ0FBQztBQUVEO0lBSUUsc0JBQW9CLE9BQXdCLEVBQWtDLEtBQWE7UUFBdkUsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFBa0MsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUhuRixZQUFPLEdBQUcsSUFBSSxlQUFlLENBQXFCLElBQUksQ0FBQyxDQUFDO1FBQ3hELGNBQVMsR0FBaUIsRUFBRSxDQUFDO0lBRXlELENBQUM7SUFFL0Ysc0JBQUksbUNBQVM7Ozs7UUFBYjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxrQ0FBUTs7OztRQUFaO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBOzs7OztJQUVELDBCQUFHOzs7O0lBQUgsVUFBSSxJQUFpQjtRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLG1CQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Ozs7O0lBR0QsMEJBQUc7Ozs7O0lBQUgsVUFBMkIsSUFBa0I7O1lBQ3JDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxtQkFBQSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBQyxDQUFDO1FBQ3BELE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQUEsSUFBSSxFQUFLLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7O0lBRUQsNEJBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsbUJBQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFFRCw2QkFBTTs7O0lBQU47UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7O2dCQXhDTSxlQUFlO2dEQVl5QixNQUFNLFNBQUMsY0FBYzs7SUE2QnRFLG1CQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7U0FqQ1ksWUFBWTs7Ozs7O0lBQ3ZCLCtCQUFnRTs7Ozs7SUFDaEUsaUNBQXFDOzs7OztJQUV6QiwrQkFBZ0M7Ozs7O0lBQUUsNkJBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBEZWxvbkF1dGhDb25maWcgfSBmcm9tICcuLi9hdXRoLmNvbmZpZyc7XG5pbXBvcnQgeyBEQV9TVE9SRV9UT0tFTiwgSVN0b3JlIH0gZnJvbSAnLi4vc3RvcmUvaW50ZXJmYWNlJztcbmltcG9ydCB7IEF1dGhSZWZlcnJlciwgSVRva2VuTW9kZWwsIElUb2tlblNlcnZpY2UgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBEQV9TRVJWSUNFX1RPS0VOX0ZBQ1RPUlkoKTogSVRva2VuU2VydmljZSB7XG4gIHJldHVybiBuZXcgVG9rZW5TZXJ2aWNlKGluamVjdChEZWxvbkF1dGhDb25maWcpLCBpbmplY3QoREFfU1RPUkVfVE9LRU4pKTtcbn1cblxuZXhwb3J0IGNsYXNzIFRva2VuU2VydmljZSBpbXBsZW1lbnRzIElUb2tlblNlcnZpY2Uge1xuICBwcml2YXRlIGNoYW5nZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PElUb2tlbk1vZGVsIHwgbnVsbD4obnVsbCk7XG4gIHByaXZhdGUgX3JlZmVycmVyOiBBdXRoUmVmZXJyZXIgPSB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG9wdGlvbnM6IERlbG9uQXV0aENvbmZpZywgQEluamVjdChEQV9TVE9SRV9UT0tFTikgcHJpdmF0ZSBzdG9yZTogSVN0b3JlKSB7fVxuXG4gIGdldCBsb2dpbl91cmwoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmxvZ2luX3VybDtcbiAgfVxuXG4gIGdldCByZWZlcnJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVmZXJyZXI7XG4gIH1cblxuICBzZXQoZGF0YTogSVRva2VuTW9kZWwpOiBib29sZWFuIHtcbiAgICB0aGlzLmNoYW5nZSQubmV4dChkYXRhKTtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZXQodGhpcy5vcHRpb25zLnN0b3JlX2tleSEsIGRhdGEpO1xuICB9XG5cbiAgZ2V0KHR5cGU/OiBhbnkpO1xuICBnZXQ8VCBleHRlbmRzIElUb2tlbk1vZGVsPih0eXBlPzogbmV3ICgpID0+IFQpOiBUIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5zdG9yZS5nZXQodGhpcy5vcHRpb25zLnN0b3JlX2tleSEpO1xuICAgIHJldHVybiB0eXBlID8gKE9iamVjdC5hc3NpZ24obmV3IHR5cGUoKSwgZGF0YSkgYXMgVCkgOiAoZGF0YSBhcyBUKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuY2hhbmdlJC5uZXh0KG51bGwpO1xuICAgIHRoaXMuc3RvcmUucmVtb3ZlKHRoaXMub3B0aW9ucy5zdG9yZV9rZXkhKTtcbiAgfVxuXG4gIGNoYW5nZSgpOiBPYnNlcnZhYmxlPElUb2tlbk1vZGVsIHwgbnVsbD4ge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSQucGlwZShzaGFyZSgpKTtcbiAgfVxufVxuIl19