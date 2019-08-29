/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9DLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUUzRCxNQUFNLE9BQU8sZ0JBQWdCLEdBQUcsSUFBSSxjQUFjLENBQWdCLGtCQUFrQixFQUFFO0lBQ3BGLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLE9BQU8sRUFBRSx3QkFBd0I7Q0FDbEMsQ0FBQzs7OztBQUdGLGlDQUlDOzs7SUFEQyw0QkFBaUM7Ozs7OztBQUduQyxrQ0FFQzs7O0lBREMsMkJBQWdDOzs7OztBQUlsQyxtQ0EwQkM7Ozs7OztJQXhCQyxrQ0FBdUM7Ozs7O0lBR3ZDLGlDQUFpQzs7Ozs7SUFFakMsa0RBQXVDOzs7Ozs7OztJQU92QyxrREFBb0M7Ozs7Ozs7OztJQU9wQyxrREFBMEM7Ozs7SUFFMUMsZ0RBQWM7Ozs7SUFFZCxpREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgREFfU0VSVklDRV9UT0tFTl9GQUNUT1JZIH0gZnJvbSAnLi90b2tlbi5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IERBX1NFUlZJQ0VfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48SVRva2VuU2VydmljZT4oJ0RBX1NFUlZJQ0VfVE9LRU4nLCB7XG4gIHByb3ZpZGVkSW46ICdyb290JyxcbiAgZmFjdG9yeTogREFfU0VSVklDRV9UT0tFTl9GQUNUT1JZLFxufSk7XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogaW50ZXJmYWNlLW5hbWVcbmV4cG9ydCBpbnRlcmZhY2UgSVRva2VuTW9kZWwge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG5cbiAgdG9rZW46IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXV0aFJlZmVycmVyIHtcbiAgdXJsPzogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZDtcbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBJVG9rZW5TZXJ2aWNlIHtcbiAgLyoqIOiOt+WPlueZu+W9leWcsOWdgCAqL1xuICByZWFkb25seSBsb2dpbl91cmw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAvKiog6I635Y+W5o6I5p2D5aSx6LSl5YmN6Lev55Sx5L+h5oGvICovXG4gIHJlYWRvbmx5IHJlZmVycmVyPzogQXV0aFJlZmVycmVyO1xuXG4gIHNldChkYXRhOiBJVG9rZW5Nb2RlbCB8IG51bGwpOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDojrflj5ZUb2tlbu+8jOW9ouW8j+WMheaLrO+8mlxuICAgKiAtIGBnZXQoKWAg6I635Y+WIFNpbXBsZSBUb2tlblxuICAgKiAtIGBnZXQ8SldUVG9rZW5Nb2RlbD4oSldUVG9rZW5Nb2RlbClgIOiOt+WPliBKV1QgVG9rZW5cbiAgICovXG4gIGdldCh0eXBlPzogYW55KTogSVRva2VuTW9kZWwgfCBudWxsO1xuXG4gIC8qKlxuICAgKiDojrflj5ZUb2tlbu+8jOW9ouW8j+WMheaLrO+8mlxuICAgKiAtIGBnZXQoKWAg6I635Y+WIFNpbXBsZSBUb2tlblxuICAgKiAtIGBnZXQ8SldUVG9rZW5Nb2RlbD4oSldUVG9rZW5Nb2RlbClgIOiOt+WPliBKV1QgVG9rZW5cbiAgICovXG4gIGdldDxUIGV4dGVuZHMgSVRva2VuTW9kZWw+KHR5cGU/OiBhbnkpOiBUO1xuXG4gIGNsZWFyKCk6IHZvaWQ7XG5cbiAgY2hhbmdlKCk6IE9ic2VydmFibGU8SVRva2VuTW9kZWwgfCBudWxsPjtcbn1cbiJdfQ==