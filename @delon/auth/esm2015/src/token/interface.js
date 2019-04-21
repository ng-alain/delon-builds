/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9DLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUUzRCxNQUFNLE9BQU8sZ0JBQWdCLEdBQUcsSUFBSSxjQUFjLENBQWdCLGtCQUFrQixFQUFFO0lBQ3BGLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLE9BQU8sRUFBRSx3QkFBd0I7Q0FDbEMsQ0FBQzs7OztBQUVGLGlDQUlDOzs7SUFEQyw0QkFBaUM7Ozs7OztBQUduQyxrQ0FFQzs7O0lBREMsMkJBQWdDOzs7OztBQUdsQyxtQ0EwQkM7Ozs7OztJQUpDLGtDQUF1Qzs7Ozs7SUFHdkMsaUNBQWlDOzs7OztJQXhCakMsa0RBQXVDOzs7Ozs7OztJQU92QyxrREFBb0M7Ozs7Ozs7OztJQU9wQyxrREFBMEM7Ozs7SUFFMUMsZ0RBQWM7Ozs7SUFFZCxpREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgREFfU0VSVklDRV9UT0tFTl9GQUNUT1JZIH0gZnJvbSAnLi90b2tlbi5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IERBX1NFUlZJQ0VfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48SVRva2VuU2VydmljZT4oJ0RBX1NFUlZJQ0VfVE9LRU4nLCB7XG4gIHByb3ZpZGVkSW46ICdyb290JyxcbiAgZmFjdG9yeTogREFfU0VSVklDRV9UT0tFTl9GQUNUT1JZLFxufSk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRva2VuTW9kZWwge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG5cbiAgdG9rZW46IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXV0aFJlZmVycmVyIHtcbiAgdXJsPzogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVG9rZW5TZXJ2aWNlIHtcbiAgc2V0KGRhdGE6IElUb2tlbk1vZGVsIHwgbnVsbCk6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOiOt+WPllRva2Vu77yM5b2i5byP5YyF5ous77yaXG4gICAqIC0gYGdldCgpYCDojrflj5YgU2ltcGxlIFRva2VuXG4gICAqIC0gYGdldDxKV1RUb2tlbk1vZGVsPihKV1RUb2tlbk1vZGVsKWAg6I635Y+WIEpXVCBUb2tlblxuICAgKi9cbiAgZ2V0KHR5cGU/OiBhbnkpOiBJVG9rZW5Nb2RlbCB8IG51bGw7XG5cbiAgLyoqXG4gICAqIOiOt+WPllRva2Vu77yM5b2i5byP5YyF5ous77yaXG4gICAqIC0gYGdldCgpYCDojrflj5YgU2ltcGxlIFRva2VuXG4gICAqIC0gYGdldDxKV1RUb2tlbk1vZGVsPihKV1RUb2tlbk1vZGVsKWAg6I635Y+WIEpXVCBUb2tlblxuICAgKi9cbiAgZ2V0PFQgZXh0ZW5kcyBJVG9rZW5Nb2RlbD4odHlwZT86IGFueSk6IFQ7XG5cbiAgY2xlYXIoKTogdm9pZDtcblxuICBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxJVG9rZW5Nb2RlbCB8IG51bGw+O1xuXG4gIC8qKiDojrflj5bnmbvlvZXlnLDlnYAgKi9cbiAgcmVhZG9ubHkgbG9naW5fdXJsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgLyoqIOiOt+WPluaOiOadg+Wksei0peWJjei3r+eUseS/oeaBryAqL1xuICByZWFkb25seSByZWZlcnJlcj86IEF1dGhSZWZlcnJlcjtcbn1cbiJdfQ==