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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFM0QsTUFBTSxPQUFPLGdCQUFnQixHQUFHLElBQUksY0FBYyxDQUFnQixrQkFBa0IsRUFBRTtJQUNwRixVQUFVLEVBQUUsTUFBTTtJQUNsQixPQUFPLEVBQUUsd0JBQXdCO0NBQ2xDLENBQUM7Ozs7QUFHRixpQ0FJQzs7O0lBREMsNEJBQWlDOzs7Ozs7QUFHbkMsa0NBRUM7OztJQURDLDJCQUFnQzs7Ozs7QUFJbEMsbUNBNkJDOzs7Ozs7SUEzQkMsa0NBQXVDOzs7OztJQUd2QyxpQ0FBaUM7Ozs7O0lBRWpDLGtEQUF1Qzs7Ozs7Ozs7SUFPdkMsa0RBQW9DOzs7Ozs7Ozs7SUFPcEMsa0RBQTBDOzs7Ozs7SUFLMUMsdURBQThDOzs7O0lBRTlDLGlEQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEQV9TRVJWSUNFX1RPS0VOX0ZBQ1RPUlkgfSBmcm9tICcuL3Rva2VuLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgREFfU0VSVklDRV9UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxJVG9rZW5TZXJ2aWNlPignREFfU0VSVklDRV9UT0tFTicsIHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxuICBmYWN0b3J5OiBEQV9TRVJWSUNFX1RPS0VOX0ZBQ1RPUlksXG59KTtcblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBJVG9rZW5Nb2RlbCB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcblxuICB0b2tlbjogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBdXRoUmVmZXJyZXIge1xuICB1cmw/OiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkO1xufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGludGVyZmFjZS1uYW1lXG5leHBvcnQgaW50ZXJmYWNlIElUb2tlblNlcnZpY2Uge1xuICAvKiog6I635Y+W55m75b2V5Zyw5Z2AICovXG4gIHJlYWRvbmx5IGxvZ2luX3VybDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gIC8qKiDojrflj5bmjojmnYPlpLHotKXliY3ot6/nlLHkv6Hmga8gKi9cbiAgcmVhZG9ubHkgcmVmZXJyZXI/OiBBdXRoUmVmZXJyZXI7XG5cbiAgc2V0KGRhdGE6IElUb2tlbk1vZGVsIHwgbnVsbCk6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOiOt+WPllRva2Vu77yM5b2i5byP5YyF5ous77yaXG4gICAqIC0gYGdldCgpYCDojrflj5YgU2ltcGxlIFRva2VuXG4gICAqIC0gYGdldDxKV1RUb2tlbk1vZGVsPihKV1RUb2tlbk1vZGVsKWAg6I635Y+WIEpXVCBUb2tlblxuICAgKi9cbiAgZ2V0KHR5cGU/OiBhbnkpOiBJVG9rZW5Nb2RlbCB8IG51bGw7XG5cbiAgLyoqXG4gICAqIOiOt+WPllRva2Vu77yM5b2i5byP5YyF5ous77yaXG4gICAqIC0gYGdldCgpYCDojrflj5YgU2ltcGxlIFRva2VuXG4gICAqIC0gYGdldDxKV1RUb2tlbk1vZGVsPihKV1RUb2tlbk1vZGVsKWAg6I635Y+WIEpXVCBUb2tlblxuICAgKi9cbiAgZ2V0PFQgZXh0ZW5kcyBJVG9rZW5Nb2RlbD4odHlwZT86IGFueSk6IFQ7XG5cbiAgLyoqXG4gICAqIENsZWFuIGF1dGhvcml6YXRpb24gZGF0YVxuICAgKi9cbiAgY2xlYXIob3B0aW9ucz86IHsgb25seVRva2VuOiBib29sZWFuIH0pOiB2b2lkO1xuXG4gIGNoYW5nZSgpOiBPYnNlcnZhYmxlPElUb2tlbk1vZGVsIHwgbnVsbD47XG59XG4iXX0=