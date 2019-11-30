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
     * @return {?}
     */
    ITokenService.prototype.clear = function () { };
    /**
     * @return {?}
     */
    ITokenService.prototype.change = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFM0QsTUFBTSxPQUFPLGdCQUFnQixHQUFHLElBQUksY0FBYyxDQUFnQixrQkFBa0IsRUFBRTtJQUNwRixVQUFVLEVBQUUsTUFBTTtJQUNsQixPQUFPLEVBQUUsd0JBQXdCO0NBQ2xDLENBQUM7Ozs7QUFHRixpQ0FJQzs7O0lBREMsNEJBQWlDOzs7Ozs7QUFHbkMsa0NBRUM7OztJQURDLDJCQUFnQzs7Ozs7QUFJbEMsbUNBMEJDOzs7Ozs7SUF4QkMsa0NBQXVDOzs7OztJQUd2QyxpQ0FBaUM7Ozs7O0lBRWpDLGtEQUF1Qzs7Ozs7Ozs7SUFPdkMsa0RBQW9DOzs7Ozs7Ozs7SUFPcEMsa0RBQTBDOzs7O0lBRTFDLGdEQUFjOzs7O0lBRWQsaURBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERBX1NFUlZJQ0VfVE9LRU5fRkFDVE9SWSB9IGZyb20gJy4vdG9rZW4uc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBEQV9TRVJWSUNFX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPElUb2tlblNlcnZpY2U+KCdEQV9TRVJWSUNFX1RPS0VOJywge1xuICBwcm92aWRlZEluOiAncm9vdCcsXG4gIGZhY3Rvcnk6IERBX1NFUlZJQ0VfVE9LRU5fRkFDVE9SWSxcbn0pO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGludGVyZmFjZS1uYW1lXG5leHBvcnQgaW50ZXJmYWNlIElUb2tlbk1vZGVsIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuXG4gIHRva2VuOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEF1dGhSZWZlcnJlciB7XG4gIHVybD86IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7XG59XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogaW50ZXJmYWNlLW5hbWVcbmV4cG9ydCBpbnRlcmZhY2UgSVRva2VuU2VydmljZSB7XG4gIC8qKiDojrflj5bnmbvlvZXlnLDlnYAgKi9cbiAgcmVhZG9ubHkgbG9naW5fdXJsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgLyoqIOiOt+WPluaOiOadg+Wksei0peWJjei3r+eUseS/oeaBryAqL1xuICByZWFkb25seSByZWZlcnJlcj86IEF1dGhSZWZlcnJlcjtcblxuICBzZXQoZGF0YTogSVRva2VuTW9kZWwgfCBudWxsKTogYm9vbGVhbjtcblxuICAvKipcbiAgICog6I635Y+WVG9rZW7vvIzlvaLlvI/ljIXmi6zvvJpcbiAgICogLSBgZ2V0KClgIOiOt+WPliBTaW1wbGUgVG9rZW5cbiAgICogLSBgZ2V0PEpXVFRva2VuTW9kZWw+KEpXVFRva2VuTW9kZWwpYCDojrflj5YgSldUIFRva2VuXG4gICAqL1xuICBnZXQodHlwZT86IGFueSk6IElUb2tlbk1vZGVsIHwgbnVsbDtcblxuICAvKipcbiAgICog6I635Y+WVG9rZW7vvIzlvaLlvI/ljIXmi6zvvJpcbiAgICogLSBgZ2V0KClgIOiOt+WPliBTaW1wbGUgVG9rZW5cbiAgICogLSBgZ2V0PEpXVFRva2VuTW9kZWw+KEpXVFRva2VuTW9kZWwpYCDojrflj5YgSldUIFRva2VuXG4gICAqL1xuICBnZXQ8VCBleHRlbmRzIElUb2tlbk1vZGVsPih0eXBlPzogYW55KTogVDtcblxuICBjbGVhcigpOiB2b2lkO1xuXG4gIGNoYW5nZSgpOiBPYnNlcnZhYmxlPElUb2tlbk1vZGVsIHwgbnVsbD47XG59XG4iXX0=