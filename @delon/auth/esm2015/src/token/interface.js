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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYXV0aC9zcmMvdG9rZW4vaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcvQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFM0QsTUFBTSxPQUFPLGdCQUFnQixHQUFHLElBQUksY0FBYyxDQUFnQixrQkFBa0IsRUFBRTtJQUNwRixVQUFVLEVBQUUsTUFBTTtJQUNsQixPQUFPLEVBQUUsd0JBQXdCO0NBQ2xDLENBQUM7Ozs7QUFHRixpQ0FVQzs7O0lBUEMsNEJBQWlDOzs7Ozs7SUFNakMsOEJBQWlCOzs7Ozs7QUFHbkIsa0NBRUM7OztJQURDLDJCQUFnQzs7Ozs7QUFJbEMsbUNBc0RDOzs7Ozs7SUFsREMsa0NBQXVDOzs7OztJQUt2QyxpQ0FBaUM7O0lBRWpDLGdDQUFrQzs7Ozs7O0lBTWxDLGdDQUEwQzs7Ozs7OztJQU0xQyxrREFBdUM7Ozs7Ozs7O0lBT3ZDLGtEQUFvQzs7Ozs7Ozs7O0lBT3BDLGtEQUEwQzs7Ozs7Ozs7Ozs7O0lBVzFDLHVEQUE4Qzs7Ozs7SUFLOUMsaURBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsYWluQXV0aENvbmZpZyB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEQV9TRVJWSUNFX1RPS0VOX0ZBQ1RPUlkgfSBmcm9tICcuL3Rva2VuLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgREFfU0VSVklDRV9UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxJVG9rZW5TZXJ2aWNlPignREFfU0VSVklDRV9UT0tFTicsIHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxuICBmYWN0b3J5OiBEQV9TRVJWSUNFX1RPS0VOX0ZBQ1RPUlksXG59KTtcblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBJVG9rZW5Nb2RlbCB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcblxuICB0b2tlbjogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICog6L+H5pyf5pe26Ze077yM5Y2V5L2N77yabXNcbiAgICogLSDkuI3nrqFTaW1wbGXjgIFKV1TmqKHlvI/pg73lv4XpobvmjIflrppcbiAgICovXG4gIGV4cGlyZWQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXV0aFJlZmVycmVyIHtcbiAgdXJsPzogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZDtcbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBJVG9rZW5TZXJ2aWNlIHtcbiAgLyoqXG4gICAqIOaOiOadg+Wksei0peWQjui3s+i9rOi3r+eUsei3r+W+hO+8iOaUr+aMgeWklumDqOmTvuaOpeWcsOWdgO+8ie+8jOmAmui/h+iuvue9rlvlhajlsYDphY3nva5dKGh0dHBzOi8vbmctYWxhaW4uY29tL2RvY3MvZ2xvYmFsLWNvbmZpZynmnaXmlLnlj5hcbiAgICovXG4gIHJlYWRvbmx5IGxvZ2luX3VybDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiDlvZPliY3or7fmsYLpobXpnaLnmoTmnaXmupDpobXpnaLnmoTlnLDlnYBcbiAgICovXG4gIHJlYWRvbmx5IHJlZmVycmVyPzogQXV0aFJlZmVycmVyO1xuXG4gIHJlYWRvbmx5IG9wdGlvbnM6IEFsYWluQXV0aENvbmZpZztcblxuICAvKipcbiAgICog6K6i6ZiF5Yi35paw77yM6K6i6ZiF5pe25Lya6Ieq5Yqo5Lqn55Sf5LiA5Liq5a6a5pe25Zmo77yM5q+P6ZqU5LiA5q615pe26Ze06L+b6KGM5LiA5Lqb5qCh6aqMXG4gICAqIC0gKirms6jmhI8qKiDkvJrlpJrmrKHop6blj5HvvIzor7fliqHlv4XlgZrlpb3kuJrliqHliKTmlq1cbiAgICovXG4gIHJlYWRvbmx5IHJlZnJlc2g6IE9ic2VydmFibGU8SVRva2VuTW9kZWw+O1xuXG4gIC8qKlxuICAgKiDorr7nva4gVG9rZW4g5L+h5oGv77yM5b2T55So5oi3IFRva2VuIOWPkeeUn+WPmOWKqOaXtumDvemcgOimgeiwg+eUqOatpOaWueazlemHjeaWsOWIt+aWsFxuICAgKiAtIOWmguaenOmcgOimgeebkeWQrOi/h+acn++8jOmcgOimgeS8oOmAkiBgZXhwaXJlZGAg5YC8XG4gICAqL1xuICBzZXQoZGF0YTogSVRva2VuTW9kZWwgfCBudWxsKTogYm9vbGVhbjtcblxuICAvKipcbiAgICog6I635Y+WVG9rZW7vvIzlvaLlvI/ljIXmi6zvvJpcbiAgICogLSBgZ2V0KClgIOiOt+WPliBTaW1wbGUgVG9rZW5cbiAgICogLSBgZ2V0PEpXVFRva2VuTW9kZWw+KEpXVFRva2VuTW9kZWwpYCDojrflj5YgSldUIFRva2VuXG4gICAqL1xuICBnZXQodHlwZT86IGFueSk6IElUb2tlbk1vZGVsIHwgbnVsbDtcblxuICAvKipcbiAgICog6I635Y+WVG9rZW7vvIzlvaLlvI/ljIXmi6zvvJpcbiAgICogLSBgZ2V0KClgIOiOt+WPliBTaW1wbGUgVG9rZW5cbiAgICogLSBgZ2V0PEpXVFRva2VuTW9kZWw+KEpXVFRva2VuTW9kZWwpYCDojrflj5YgSldUIFRva2VuXG4gICAqL1xuICBnZXQ8VCBleHRlbmRzIElUb2tlbk1vZGVsPih0eXBlPzogYW55KTogVDtcblxuICAvKipcbiAgICog5riF6ZmkIFRva2VuIOS/oeaBr++8jOW9k+eUqOaIt+mAgOWHuueZu+W9leaXtuiwg+eUqOOAglxuICAgKiBgYGBcbiAgICogLy8g5riF6Zmk5omA5pyJIFRva2VuIOS/oeaBr1xuICAgKiB0b2tlblNlcnZpY2UuY2xlYXIoKTtcbiAgICogLy8g5Y+q5riF6ZmkIHRva2VuIOWtl+autVxuICAgKiB0b2tlblNlcnZpY2UuY2xlYXIoeyBvbmx5VG9rZW46IHRydWUgfSk7XG4gICAqIGBgYFxuICAgKi9cbiAgY2xlYXIob3B0aW9ucz86IHsgb25seVRva2VuOiBib29sZWFuIH0pOiB2b2lkO1xuXG4gIC8qKlxuICAgKiDorqLpmIUgVG9rZW4g5a+56LGh5Y+Y5pu06YCa55+lXG4gICAqL1xuICBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxJVG9rZW5Nb2RlbCB8IG51bGw+O1xufVxuIl19