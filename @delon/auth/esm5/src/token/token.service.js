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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hdXRoLyIsInNvdXJjZXMiOlsic3JjL3Rva2VuL3Rva2VuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBYyxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXZDLE9BQU8sRUFBRSxjQUFjLEVBQVUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBVS9DLHNCQUNVLFNBQ3dCLEtBQWE7UUFEckMsWUFBTyxHQUFQLE9BQU87UUFDaUIsVUFBSyxHQUFMLEtBQUssQ0FBUTt1QkFSQyxJQUFJLGVBQWUsQ0FFakUsSUFBSSxDQUFDO0tBT0g7SUFFSixzQkFBSSxtQ0FBUzs7OztRQUFiO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztTQUMvQjs7O09BQUE7SUFFRCxzQkFBSSxrQ0FBUTs7OztRQUlaO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxJQUFJLEdBQUcsQ0FBQztTQUM5Qjs7Ozs7UUFORCxVQUFhLEdBQVc7WUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7U0FDdEI7OztPQUFBOzs7OztJQU1ELDBCQUFHOzs7O0lBQUgsVUFBSSxJQUFpQjtRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ3JEOzs7Ozs7SUFHRCwwQkFBRzs7Ozs7SUFBSCxVQUEyQixJQUFvQjs7UUFDN0MsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwRCxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsbUJBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLElBQUksQ0FBTSxFQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFDLElBQVMsRUFBQyxDQUFDO0tBQ3BFOzs7O0lBRUQsNEJBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUMzQzs7OztJQUVELDZCQUFNOzs7SUFBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztLQUNuQzs7Z0JBM0NGLFVBQVU7Ozs7Z0JBRkYsZUFBZTtnREFZbkIsTUFBTSxTQUFDLGNBQWM7O3VCQWpCMUI7O1NBUWEsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IElUb2tlblNlcnZpY2UsIElUb2tlbk1vZGVsIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBEQV9TVE9SRV9UT0tFTiwgSVN0b3JlIH0gZnJvbSAnLi4vc3RvcmUvaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgRGVsb25BdXRoQ29uZmlnIH0gZnJvbSAnLi4vYXV0aC5jb25maWcnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVG9rZW5TZXJ2aWNlIGltcGxlbWVudHMgSVRva2VuU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBjaGFuZ2UkOiBCZWhhdmlvclN1YmplY3Q8SVRva2VuTW9kZWw+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxcclxuICAgIElUb2tlbk1vZGVsXHJcbiAgPihudWxsKTtcclxuICBwcml2YXRlIGRhdGE6IElUb2tlbk1vZGVsO1xyXG4gIHByaXZhdGUgX3JlZGlyZWN0OiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBvcHRpb25zOiBEZWxvbkF1dGhDb25maWcsXHJcbiAgICBASW5qZWN0KERBX1NUT1JFX1RPS0VOKSBwcml2YXRlIHN0b3JlOiBJU3RvcmUsXHJcbiAgKSB7fVxyXG5cclxuICBnZXQgbG9naW5fdXJsKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmxvZ2luX3VybDtcclxuICB9XHJcblxyXG4gIHNldCByZWRpcmVjdCh1cmw6IHN0cmluZykge1xyXG4gICAgdGhpcy5fcmVkaXJlY3QgPSB1cmw7XHJcbiAgfVxyXG5cclxuICBnZXQgcmVkaXJlY3QoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmVkaXJlY3QgfHwgJy8nO1xyXG4gIH1cclxuXHJcbiAgc2V0KGRhdGE6IElUb2tlbk1vZGVsKTogYm9vbGVhbiB7XHJcbiAgICB0aGlzLmNoYW5nZSQubmV4dChkYXRhKTtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLnNldCh0aGlzLm9wdGlvbnMuc3RvcmVfa2V5LCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGdldCh0eXBlPzogYW55KTtcclxuICBnZXQ8VCBleHRlbmRzIElUb2tlbk1vZGVsPih0eXBlPzogeyBuZXcgKCk6IFQgfSk6IFQge1xyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuc3RvcmUuZ2V0KHRoaXMub3B0aW9ucy5zdG9yZV9rZXkpO1xyXG4gICAgcmV0dXJuIHR5cGUgPyAoT2JqZWN0LmFzc2lnbihuZXcgdHlwZSgpLCBkYXRhKSBhcyBUKSA6IChkYXRhIGFzIFQpO1xyXG4gIH1cclxuXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLmNoYW5nZSQubmV4dChudWxsKTtcclxuICAgIHRoaXMuc3RvcmUucmVtb3ZlKHRoaXMub3B0aW9ucy5zdG9yZV9rZXkpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlKCk6IE9ic2VydmFibGU8SVRva2VuTW9kZWw+IHtcclxuICAgIHJldHVybiB0aGlzLmNoYW5nZSQucGlwZShzaGFyZSgpKTtcclxuICB9XHJcbn1cclxuIl19