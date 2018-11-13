/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/** @type {?} */
export var DA_SERVICE_TOKEN = new InjectionToken('DA_SERVICE_TOKEN');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUcvQyxXQUFhLGdCQUFnQixHQUFHLElBQUksY0FBYyxDQUNoRCxrQkFBa0IsQ0FDbkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjb25zdCBEQV9TRVJWSUNFX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPElUb2tlblNlcnZpY2U+KFxuICAnREFfU0VSVklDRV9UT0tFTicsXG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUb2tlbk1vZGVsIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuXG4gIHRva2VuOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRva2VuU2VydmljZSB7XG4gIHNldChkYXRhOiBJVG9rZW5Nb2RlbCk6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOiOt+WPllRva2Vu77yM5b2i5byP5YyF5ous77yaXG4gICAqIC0gYGdldCgpYCDojrflj5YgU2ltcGxlIFRva2VuXG4gICAqIC0gYGdldDxKV1RUb2tlbk1vZGVsPihKV1RUb2tlbk1vZGVsKWAg6I635Y+WIEpXVCBUb2tlblxuICAgKi9cbiAgZ2V0KHR5cGU/OiBhbnkpOiBJVG9rZW5Nb2RlbDtcblxuICAvKipcbiAgICog6I635Y+WVG9rZW7vvIzlvaLlvI/ljIXmi6zvvJpcbiAgICogLSBgZ2V0KClgIOiOt+WPliBTaW1wbGUgVG9rZW5cbiAgICogLSBgZ2V0PEpXVFRva2VuTW9kZWw+KEpXVFRva2VuTW9kZWwpYCDojrflj5YgSldUIFRva2VuXG4gICAqL1xuICBnZXQ8VCBleHRlbmRzIElUb2tlbk1vZGVsPih0eXBlPzogYW55KTogVDtcblxuICBjbGVhcigpOiB2b2lkO1xuXG4gIGNoYW5nZSgpOiBPYnNlcnZhYmxlPElUb2tlbk1vZGVsPjtcblxuICAvKiog6I635Y+W55m75b2V5Zyw5Z2AICovXG4gIHJlYWRvbmx5IGxvZ2luX3VybDogc3RyaW5nO1xuXG4gIC8qKiDnmbvlvZXlkI7ot7PovazlnLDlnYDvvIzmnKrmjIflrprml7bov5Tlm54gYC9gICovXG4gIHJlZGlyZWN0OiBzdHJpbmc7XG59XG4iXX0=