/**
 * @fileoverview added by tsickle
 * Generated from: src/token/interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
import { DA_SERVICE_TOKEN_FACTORY } from './token.service';
/** @type {?} */
export const DA_SERVICE_TOKEN = new InjectionToken('DA_SERVICE_TOKEN', {
    providedIn: 'root',
    factory: DA_SERVICE_TOKEN_FACTORY,
});
/**
 * @record
 */
export function ITokenModel() { }
if (false) {
    /** @type {?} */
    ITokenModel.prototype.token;
    /* Skipping unhandled member: [key: string]: any;*/
}
/**
 * @record
 */
export function AuthReferrer() { }
if (false) {
    /** @type {?|undefined} */
    AuthReferrer.prototype.url;
}
/**
 * @record
 */
export function ITokenService() { }
if (false) {
    /**
     * 获取登录地址
     * @type {?}
     */
    ITokenService.prototype.login_url;
    /**
     * 获取授权失败前路由信息
     * @type {?|undefined}
     */
    ITokenService.prototype.referrer;
    /** @type {?} */
    ITokenService.prototype.options;
    /**
     * @param {?} data
     * @return {?}
     */
    ITokenService.prototype.set = function (data) { };
    /**
     * 获取Token，形式包括：
     * - `get()` 获取 Simple Token
     * - `get<JWTTokenModel>(JWTTokenModel)` 获取 JWT Token
     * @param {?=} type
     * @return {?}
     */
    ITokenService.prototype.get = function (type) { };
    /**
     * 获取Token，形式包括：
     * - `get()` 获取 Simple Token
     * - `get<JWTTokenModel>(JWTTokenModel)` 获取 JWT Token
     * @template T
     * @param {?=} type
     * @return {?}
     */
    ITokenService.prototype.get = function (type) { };
    /**
     * Clean authorization data
     * @param {?=} options
     * @return {?}
     */
    ITokenService.prototype.clear = function (options) { };
    /**
     * @return {?}
     */
    ITokenService.prototype.change = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcvQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFM0QsTUFBTSxPQUFPLGdCQUFnQixHQUFHLElBQUksY0FBYyxDQUFnQixrQkFBa0IsRUFBRTtJQUNwRixVQUFVLEVBQUUsTUFBTTtJQUNsQixPQUFPLEVBQUUsd0JBQXdCO0NBQ2xDLENBQUM7Ozs7QUFHRixpQ0FJQzs7O0lBREMsNEJBQWlDOzs7Ozs7QUFHbkMsa0NBRUM7OztJQURDLDJCQUFnQzs7Ozs7QUFJbEMsbUNBK0JDOzs7Ozs7SUE3QkMsa0NBQXVDOzs7OztJQUd2QyxpQ0FBaUM7O0lBRWpDLGdDQUFrQzs7Ozs7SUFFbEMsa0RBQXVDOzs7Ozs7OztJQU92QyxrREFBb0M7Ozs7Ozs7OztJQU9wQyxrREFBMEM7Ozs7OztJQUsxQyx1REFBOEM7Ozs7SUFFOUMsaURBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsYWluQXV0aENvbmZpZyB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERBX1NFUlZJQ0VfVE9LRU5fRkFDVE9SWSB9IGZyb20gJy4vdG9rZW4uc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBEQV9TRVJWSUNFX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPElUb2tlblNlcnZpY2U+KCdEQV9TRVJWSUNFX1RPS0VOJywge1xuICBwcm92aWRlZEluOiAncm9vdCcsXG4gIGZhY3Rvcnk6IERBX1NFUlZJQ0VfVE9LRU5fRkFDVE9SWSxcbn0pO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGludGVyZmFjZS1uYW1lXG5leHBvcnQgaW50ZXJmYWNlIElUb2tlbk1vZGVsIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuXG4gIHRva2VuOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEF1dGhSZWZlcnJlciB7XG4gIHVybD86IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7XG59XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogaW50ZXJmYWNlLW5hbWVcbmV4cG9ydCBpbnRlcmZhY2UgSVRva2VuU2VydmljZSB7XG4gIC8qKiDojrflj5bnmbvlvZXlnLDlnYAgKi9cbiAgcmVhZG9ubHkgbG9naW5fdXJsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgLyoqIOiOt+WPluaOiOadg+Wksei0peWJjei3r+eUseS/oeaBryAqL1xuICByZWFkb25seSByZWZlcnJlcj86IEF1dGhSZWZlcnJlcjtcblxuICByZWFkb25seSBvcHRpb25zOiBBbGFpbkF1dGhDb25maWc7XG5cbiAgc2V0KGRhdGE6IElUb2tlbk1vZGVsIHwgbnVsbCk6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOiOt+WPllRva2Vu77yM5b2i5byP5YyF5ous77yaXG4gICAqIC0gYGdldCgpYCDojrflj5YgU2ltcGxlIFRva2VuXG4gICAqIC0gYGdldDxKV1RUb2tlbk1vZGVsPihKV1RUb2tlbk1vZGVsKWAg6I635Y+WIEpXVCBUb2tlblxuICAgKi9cbiAgZ2V0KHR5cGU/OiBhbnkpOiBJVG9rZW5Nb2RlbCB8IG51bGw7XG5cbiAgLyoqXG4gICAqIOiOt+WPllRva2Vu77yM5b2i5byP5YyF5ous77yaXG4gICAqIC0gYGdldCgpYCDojrflj5YgU2ltcGxlIFRva2VuXG4gICAqIC0gYGdldDxKV1RUb2tlbk1vZGVsPihKV1RUb2tlbk1vZGVsKWAg6I635Y+WIEpXVCBUb2tlblxuICAgKi9cbiAgZ2V0PFQgZXh0ZW5kcyBJVG9rZW5Nb2RlbD4odHlwZT86IGFueSk6IFQ7XG5cbiAgLyoqXG4gICAqIENsZWFuIGF1dGhvcml6YXRpb24gZGF0YVxuICAgKi9cbiAgY2xlYXIob3B0aW9ucz86IHsgb25seVRva2VuOiBib29sZWFuIH0pOiB2b2lkO1xuXG4gIGNoYW5nZSgpOiBPYnNlcnZhYmxlPElUb2tlbk1vZGVsIHwgbnVsbD47XG59XG4iXX0=