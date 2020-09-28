/**
 * @fileoverview added by tsickle
 * Generated from: src/token/interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    /**
     * 过期时间，单位：ms
     * - 不管Simple、JWT模式都必须指定
     * @type {?|undefined}
     */
    ITokenModel.prototype.expired;
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
     * 授权失败后跳转路由路径（支持外部链接地址），通过设置[全局配置](https://ng-alain.com/docs/global-config)来改变
     * @type {?}
     */
    ITokenService.prototype.login_url;
    /**
     * 当前请求页面的来源页面的地址
     * @type {?|undefined}
     */
    ITokenService.prototype.referrer;
    /** @type {?} */
    ITokenService.prototype.options;
    /**
     * 订阅刷新，订阅时会自动产生一个定时器，每隔一段时间进行一些校验
     * - **注意** 会多次触发，请务必做好业务判断
     * @type {?}
     */
    ITokenService.prototype.refresh;
    /**
     * 设置 Token 信息，当用户 Token 发生变动时都需要调用此方法重新刷新
     * - 如果需要监听过期，需要传递 `expired` 值
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
     * 清除 Token 信息，当用户退出登录时调用。
     * ```
     * // 清除所有 Token 信息
     * tokenService.clear();
     * // 只清除 token 字段
     * tokenService.clear({ onlyToken: true });
     * ```
     * @param {?=} options
     * @return {?}
     */
    ITokenService.prototype.clear = function (options) { };
    /**
     * 订阅 Token 对象变更通知
     * @return {?}
     */
    ITokenService.prototype.change = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZzdHMvd29yay8xL3MvcGFja2FnZXMvYXV0aC8iLCJzb3VyY2VzIjpbInNyYy90b2tlbi9pbnRlcmZhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRy9DLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUUzRCxNQUFNLE9BQU8sZ0JBQWdCLEdBQUcsSUFBSSxjQUFjLENBQWdCLGtCQUFrQixFQUFFO0lBQ3BGLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLE9BQU8sRUFBRSx3QkFBd0I7Q0FDbEMsQ0FBQzs7OztBQUdGLGlDQVVDOzs7SUFQQyw0QkFBaUM7Ozs7OztJQU1qQyw4QkFBaUI7Ozs7OztBQUduQixrQ0FFQzs7O0lBREMsMkJBQWdDOzs7OztBQUlsQyxtQ0FzREM7Ozs7OztJQWxEQyxrQ0FBdUM7Ozs7O0lBS3ZDLGlDQUFpQzs7SUFFakMsZ0NBQWtDOzs7Ozs7SUFNbEMsZ0NBQTBDOzs7Ozs7O0lBTTFDLGtEQUF1Qzs7Ozs7Ozs7SUFPdkMsa0RBQW9DOzs7Ozs7Ozs7SUFPcEMsa0RBQTBDOzs7Ozs7Ozs7Ozs7SUFXMUMsdURBQThDOzs7OztJQUs5QyxpREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxhaW5BdXRoQ29uZmlnIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgREFfU0VSVklDRV9UT0tFTl9GQUNUT1JZIH0gZnJvbSAnLi90b2tlbi5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IERBX1NFUlZJQ0VfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48SVRva2VuU2VydmljZT4oJ0RBX1NFUlZJQ0VfVE9LRU4nLCB7XG4gIHByb3ZpZGVkSW46ICdyb290JyxcbiAgZmFjdG9yeTogREFfU0VSVklDRV9UT0tFTl9GQUNUT1JZLFxufSk7XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogaW50ZXJmYWNlLW5hbWVcbmV4cG9ydCBpbnRlcmZhY2UgSVRva2VuTW9kZWwge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG5cbiAgdG9rZW46IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIOi/h+acn+aXtumXtO+8jOWNleS9je+8mm1zXG4gICAqIC0g5LiN566hU2ltcGxl44CBSldU5qih5byP6YO95b+F6aG75oyH5a6aXG4gICAqL1xuICBleHBpcmVkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEF1dGhSZWZlcnJlciB7XG4gIHVybD86IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7XG59XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogaW50ZXJmYWNlLW5hbWVcbmV4cG9ydCBpbnRlcmZhY2UgSVRva2VuU2VydmljZSB7XG4gIC8qKlxuICAgKiDmjojmnYPlpLHotKXlkI7ot7Povazot6/nlLHot6/lvoTvvIjmlK/mjIHlpJbpg6jpk77mjqXlnLDlnYDvvInvvIzpgJrov4forr7nva5b5YWo5bGA6YWN572uXShodHRwczovL25nLWFsYWluLmNvbS9kb2NzL2dsb2JhbC1jb25maWcp5p2l5pS55Y+YXG4gICAqL1xuICByZWFkb25seSBsb2dpbl91cmw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICog5b2T5YmN6K+35rGC6aG16Z2i55qE5p2l5rqQ6aG16Z2i55qE5Zyw5Z2AXG4gICAqL1xuICByZWFkb25seSByZWZlcnJlcj86IEF1dGhSZWZlcnJlcjtcblxuICByZWFkb25seSBvcHRpb25zOiBBbGFpbkF1dGhDb25maWc7XG5cbiAgLyoqXG4gICAqIOiuoumYheWIt+aWsO+8jOiuoumYheaXtuS8muiHquWKqOS6p+eUn+S4gOS4quWumuaXtuWZqO+8jOavj+malOS4gOauteaXtumXtOi/m+ihjOS4gOS6m+agoemqjFxuICAgKiAtICoq5rOo5oSPKiog5Lya5aSa5qyh6Kem5Y+R77yM6K+35Yqh5b+F5YGa5aW95Lia5Yqh5Yik5patXG4gICAqL1xuICByZWFkb25seSByZWZyZXNoOiBPYnNlcnZhYmxlPElUb2tlbk1vZGVsPjtcblxuICAvKipcbiAgICog6K6+572uIFRva2VuIOS/oeaBr++8jOW9k+eUqOaItyBUb2tlbiDlj5HnlJ/lj5jliqjml7bpg73pnIDopoHosIPnlKjmraTmlrnms5Xph43mlrDliLfmlrBcbiAgICogLSDlpoLmnpzpnIDopoHnm5HlkKzov4fmnJ/vvIzpnIDopoHkvKDpgJIgYGV4cGlyZWRgIOWAvFxuICAgKi9cbiAgc2V0KGRhdGE6IElUb2tlbk1vZGVsIHwgbnVsbCk6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOiOt+WPllRva2Vu77yM5b2i5byP5YyF5ous77yaXG4gICAqIC0gYGdldCgpYCDojrflj5YgU2ltcGxlIFRva2VuXG4gICAqIC0gYGdldDxKV1RUb2tlbk1vZGVsPihKV1RUb2tlbk1vZGVsKWAg6I635Y+WIEpXVCBUb2tlblxuICAgKi9cbiAgZ2V0KHR5cGU/OiBhbnkpOiBJVG9rZW5Nb2RlbCB8IG51bGw7XG5cbiAgLyoqXG4gICAqIOiOt+WPllRva2Vu77yM5b2i5byP5YyF5ous77yaXG4gICAqIC0gYGdldCgpYCDojrflj5YgU2ltcGxlIFRva2VuXG4gICAqIC0gYGdldDxKV1RUb2tlbk1vZGVsPihKV1RUb2tlbk1vZGVsKWAg6I635Y+WIEpXVCBUb2tlblxuICAgKi9cbiAgZ2V0PFQgZXh0ZW5kcyBJVG9rZW5Nb2RlbD4odHlwZT86IGFueSk6IFQ7XG5cbiAgLyoqXG4gICAqIOa4hemZpCBUb2tlbiDkv6Hmga/vvIzlvZPnlKjmiLfpgIDlh7rnmbvlvZXml7bosIPnlKjjgIJcbiAgICogYGBgXG4gICAqIC8vIOa4hemZpOaJgOaciSBUb2tlbiDkv6Hmga9cbiAgICogdG9rZW5TZXJ2aWNlLmNsZWFyKCk7XG4gICAqIC8vIOWPqua4hemZpCB0b2tlbiDlrZfmrrVcbiAgICogdG9rZW5TZXJ2aWNlLmNsZWFyKHsgb25seVRva2VuOiB0cnVlIH0pO1xuICAgKiBgYGBcbiAgICovXG4gIGNsZWFyKG9wdGlvbnM/OiB7IG9ubHlUb2tlbjogYm9vbGVhbiB9KTogdm9pZDtcblxuICAvKipcbiAgICog6K6i6ZiFIFRva2VuIOWvueixoeWPmOabtOmAmuefpVxuICAgKi9cbiAgY2hhbmdlKCk6IE9ic2VydmFibGU8SVRva2VuTW9kZWwgfCBudWxsPjtcbn1cbiJdfQ==