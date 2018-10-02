/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/** @type {?} */
export var DA_SERVICE_TOKEN = new InjectionToken('DELON_AUTH_TOKEN_SERVICE_TOKEN');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUcvQyxXQUFhLGdCQUFnQixHQUFHLElBQUksY0FBYyxDQUNoRCxnQ0FBZ0MsQ0FDakMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBEQV9TRVJWSUNFX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPElUb2tlblNlcnZpY2U+KFxyXG4gICdERUxPTl9BVVRIX1RPS0VOX1NFUlZJQ0VfVE9LRU4nLFxyXG4pO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVG9rZW5Nb2RlbCB7XHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG5cclxuICB0b2tlbjogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUb2tlblNlcnZpY2Uge1xyXG4gIHNldChkYXRhOiBJVG9rZW5Nb2RlbCk6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPllRva2Vu77yM5b2i5byP5YyF5ous77yaXHJcbiAgICogLSBgZ2V0KClgIOiOt+WPliBTaW1wbGUgVG9rZW5cclxuICAgKiAtIGBnZXQ8SldUVG9rZW5Nb2RlbD4oSldUVG9rZW5Nb2RlbClgIOiOt+WPliBKV1QgVG9rZW5cclxuICAgKi9cclxuICBnZXQodHlwZT86IGFueSk6IElUb2tlbk1vZGVsO1xyXG5cclxuICAvKipcclxuICAgKiDojrflj5ZUb2tlbu+8jOW9ouW8j+WMheaLrO+8mlxyXG4gICAqIC0gYGdldCgpYCDojrflj5YgU2ltcGxlIFRva2VuXHJcbiAgICogLSBgZ2V0PEpXVFRva2VuTW9kZWw+KEpXVFRva2VuTW9kZWwpYCDojrflj5YgSldUIFRva2VuXHJcbiAgICovXHJcbiAgZ2V0PFQgZXh0ZW5kcyBJVG9rZW5Nb2RlbD4odHlwZT86IGFueSk6IFQ7XHJcblxyXG4gIGNsZWFyKCk6IHZvaWQ7XHJcblxyXG4gIGNoYW5nZSgpOiBPYnNlcnZhYmxlPElUb2tlbk1vZGVsPjtcclxuXHJcbiAgLyoqIOiOt+WPlueZu+W9leWcsOWdgCAqL1xyXG4gIHJlYWRvbmx5IGxvZ2luX3VybDogc3RyaW5nO1xyXG5cclxuICAvKiog55m75b2V5ZCO6Lez6L2s5Zyw5Z2A77yM5pyq5oyH5a6a5pe26L+U5ZueIGAvYCAqL1xyXG4gIHJlZGlyZWN0OiBzdHJpbmc7XHJcbn1cclxuIl19