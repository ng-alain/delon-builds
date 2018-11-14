/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/** @type {?} */
export const DA_SERVICE_TOKEN = new InjectionToken('DELON_AUTH_TOKEN_SERVICE_TOKEN');
/**
 * @record
 */
export function ITokenModel() { }
/* TODO: handle strange member:
[key: string]: any;
*/
/** @type {?} */
ITokenModel.prototype.token;
/**
 * @record
 */
export function ITokenService() { }
/** @type {?} */
ITokenService.prototype.set;
/**
 * 获取Token，形式包括：
 * - `get()` 获取 Simple Token
 * - `get<JWTTokenModel>(JWTTokenModel)` 获取 JWT Token
 * @type {?}
 */
ITokenService.prototype.get;
/**
 * 获取Token，形式包括：
 * - `get()` 获取 Simple Token
 * - `get<JWTTokenModel>(JWTTokenModel)` 获取 JWT Token
 * @type {?}
 */
ITokenService.prototype.get;
/** @type {?} */
ITokenService.prototype.clear;
/** @type {?} */
ITokenService.prototype.change;
/**
 * 获取登录地址
 * @type {?}
 */
ITokenService.prototype.login_url;
/**
 * 登录后跳转地址，未指定时返回 `/`
 * @type {?}
 */
ITokenService.prototype.redirect;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUcvQyxhQUFhLGdCQUFnQixHQUFHLElBQUksY0FBYyxDQUNoRCxnQ0FBZ0MsQ0FDakMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjb25zdCBEQV9TRVJWSUNFX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPElUb2tlblNlcnZpY2U+KFxuICAnREVMT05fQVVUSF9UT0tFTl9TRVJWSUNFX1RPS0VOJyxcbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRva2VuTW9kZWwge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG5cbiAgdG9rZW46IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVG9rZW5TZXJ2aWNlIHtcbiAgc2V0KGRhdGE6IElUb2tlbk1vZGVsKTogYm9vbGVhbjtcblxuICAvKipcbiAgICog6I635Y+WVG9rZW7vvIzlvaLlvI/ljIXmi6zvvJpcbiAgICogLSBgZ2V0KClgIOiOt+WPliBTaW1wbGUgVG9rZW5cbiAgICogLSBgZ2V0PEpXVFRva2VuTW9kZWw+KEpXVFRva2VuTW9kZWwpYCDojrflj5YgSldUIFRva2VuXG4gICAqL1xuICBnZXQodHlwZT86IGFueSk6IElUb2tlbk1vZGVsO1xuXG4gIC8qKlxuICAgKiDojrflj5ZUb2tlbu+8jOW9ouW8j+WMheaLrO+8mlxuICAgKiAtIGBnZXQoKWAg6I635Y+WIFNpbXBsZSBUb2tlblxuICAgKiAtIGBnZXQ8SldUVG9rZW5Nb2RlbD4oSldUVG9rZW5Nb2RlbClgIOiOt+WPliBKV1QgVG9rZW5cbiAgICovXG4gIGdldDxUIGV4dGVuZHMgSVRva2VuTW9kZWw+KHR5cGU/OiBhbnkpOiBUO1xuXG4gIGNsZWFyKCk6IHZvaWQ7XG5cbiAgY2hhbmdlKCk6IE9ic2VydmFibGU8SVRva2VuTW9kZWw+O1xuXG4gIC8qKiDojrflj5bnmbvlvZXlnLDlnYAgKi9cbiAgcmVhZG9ubHkgbG9naW5fdXJsOiBzdHJpbmc7XG5cbiAgLyoqIOeZu+W9leWQjui3s+i9rOWcsOWdgO+8jOacquaMh+WumuaXtui/lOWbniBgL2AgKi9cbiAgcmVkaXJlY3Q6IHN0cmluZztcbn1cbiJdfQ==