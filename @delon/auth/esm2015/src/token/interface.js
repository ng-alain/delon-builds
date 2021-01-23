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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYXV0aC9zcmMvdG9rZW4vaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcvQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFM0QsTUFBTSxPQUFPLGdCQUFnQixHQUFHLElBQUksY0FBYyxDQUFnQixrQkFBa0IsRUFBRTtJQUNwRixVQUFVLEVBQUUsTUFBTTtJQUNsQixPQUFPLEVBQUUsd0JBQXdCO0NBQ2xDLENBQUM7Ozs7QUFHRixpQ0FVQzs7O0lBUEMsNEJBQWlDOzs7Ozs7SUFNakMsOEJBQWlCOzs7Ozs7QUFHbkIsa0NBRUM7OztJQURDLDJCQUFnQzs7Ozs7QUFJbEMsbUNBc0RDOzs7Ozs7SUFsREMsa0NBQXVDOzs7OztJQUt2QyxpQ0FBaUM7O0lBRWpDLGdDQUFrQzs7Ozs7O0lBTWxDLGdDQUEwQzs7Ozs7OztJQU0xQyxrREFBdUM7Ozs7Ozs7O0lBT3ZDLGtEQUFvQzs7Ozs7Ozs7O0lBT3BDLGtEQUEwQzs7Ozs7Ozs7Ozs7O0lBVzFDLHVEQUE4Qzs7Ozs7SUFLOUMsaURBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsYWluQXV0aENvbmZpZyB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERBX1NFUlZJQ0VfVE9LRU5fRkFDVE9SWSB9IGZyb20gJy4vdG9rZW4uc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBEQV9TRVJWSUNFX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPElUb2tlblNlcnZpY2U+KCdEQV9TRVJWSUNFX1RPS0VOJywge1xuICBwcm92aWRlZEluOiAncm9vdCcsXG4gIGZhY3Rvcnk6IERBX1NFUlZJQ0VfVE9LRU5fRkFDVE9SWSxcbn0pO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGludGVyZmFjZS1uYW1lXG5leHBvcnQgaW50ZXJmYWNlIElUb2tlbk1vZGVsIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuXG4gIHRva2VuOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiDov4fmnJ/ml7bpl7TvvIzljZXkvY3vvJptc1xuICAgKiAtIOS4jeeuoVNpbXBsZeOAgUpXVOaooeW8j+mDveW/hemhu+aMh+WumlxuICAgKi9cbiAgZXhwaXJlZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBdXRoUmVmZXJyZXIge1xuICB1cmw/OiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkO1xufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGludGVyZmFjZS1uYW1lXG5leHBvcnQgaW50ZXJmYWNlIElUb2tlblNlcnZpY2Uge1xuICAvKipcbiAgICog5o6I5p2D5aSx6LSl5ZCO6Lez6L2s6Lev55Sx6Lev5b6E77yI5pSv5oyB5aSW6YOo6ZO+5o6l5Zyw5Z2A77yJ77yM6YCa6L+H6K6+572uW+WFqOWxgOmFjee9rl0oaHR0cHM6Ly9uZy1hbGFpbi5jb20vZG9jcy9nbG9iYWwtY29uZmlnKeadpeaUueWPmFxuICAgKi9cbiAgcmVhZG9ubHkgbG9naW5fdXJsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIOW9k+WJjeivt+axgumhtemdoueahOadpea6kOmhtemdoueahOWcsOWdgFxuICAgKi9cbiAgcmVhZG9ubHkgcmVmZXJyZXI/OiBBdXRoUmVmZXJyZXI7XG5cbiAgcmVhZG9ubHkgb3B0aW9uczogQWxhaW5BdXRoQ29uZmlnO1xuXG4gIC8qKlxuICAgKiDorqLpmIXliLfmlrDvvIzorqLpmIXml7bkvJroh6rliqjkuqfnlJ/kuIDkuKrlrprml7blmajvvIzmr4/pmpTkuIDmrrXml7bpl7Tov5vooYzkuIDkupvmoKHpqoxcbiAgICogLSAqKuazqOaEjyoqIOS8muWkmuasoeinpuWPke+8jOivt+WKoeW/heWBmuWlveS4muWKoeWIpOaWrVxuICAgKi9cbiAgcmVhZG9ubHkgcmVmcmVzaDogT2JzZXJ2YWJsZTxJVG9rZW5Nb2RlbD47XG5cbiAgLyoqXG4gICAqIOiuvue9riBUb2tlbiDkv6Hmga/vvIzlvZPnlKjmiLcgVG9rZW4g5Y+R55Sf5Y+Y5Yqo5pe26YO96ZyA6KaB6LCD55So5q2k5pa55rOV6YeN5paw5Yi35pawXG4gICAqIC0g5aaC5p6c6ZyA6KaB55uR5ZCs6L+H5pyf77yM6ZyA6KaB5Lyg6YCSIGBleHBpcmVkYCDlgLxcbiAgICovXG4gIHNldChkYXRhOiBJVG9rZW5Nb2RlbCB8IG51bGwpOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDojrflj5ZUb2tlbu+8jOW9ouW8j+WMheaLrO+8mlxuICAgKiAtIGBnZXQoKWAg6I635Y+WIFNpbXBsZSBUb2tlblxuICAgKiAtIGBnZXQ8SldUVG9rZW5Nb2RlbD4oSldUVG9rZW5Nb2RlbClgIOiOt+WPliBKV1QgVG9rZW5cbiAgICovXG4gIGdldCh0eXBlPzogYW55KTogSVRva2VuTW9kZWwgfCBudWxsO1xuXG4gIC8qKlxuICAgKiDojrflj5ZUb2tlbu+8jOW9ouW8j+WMheaLrO+8mlxuICAgKiAtIGBnZXQoKWAg6I635Y+WIFNpbXBsZSBUb2tlblxuICAgKiAtIGBnZXQ8SldUVG9rZW5Nb2RlbD4oSldUVG9rZW5Nb2RlbClgIOiOt+WPliBKV1QgVG9rZW5cbiAgICovXG4gIGdldDxUIGV4dGVuZHMgSVRva2VuTW9kZWw+KHR5cGU/OiBhbnkpOiBUO1xuXG4gIC8qKlxuICAgKiDmuIXpmaQgVG9rZW4g5L+h5oGv77yM5b2T55So5oi36YCA5Ye655m75b2V5pe26LCD55So44CCXG4gICAqIGBgYFxuICAgKiAvLyDmuIXpmaTmiYDmnIkgVG9rZW4g5L+h5oGvXG4gICAqIHRva2VuU2VydmljZS5jbGVhcigpO1xuICAgKiAvLyDlj6rmuIXpmaQgdG9rZW4g5a2X5q61XG4gICAqIHRva2VuU2VydmljZS5jbGVhcih7IG9ubHlUb2tlbjogdHJ1ZSB9KTtcbiAgICogYGBgXG4gICAqL1xuICBjbGVhcihvcHRpb25zPzogeyBvbmx5VG9rZW46IGJvb2xlYW4gfSk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIOiuoumYhSBUb2tlbiDlr7nosaHlj5jmm7TpgJrnn6VcbiAgICovXG4gIGNoYW5nZSgpOiBPYnNlcnZhYmxlPElUb2tlbk1vZGVsIHwgbnVsbD47XG59XG4iXX0=