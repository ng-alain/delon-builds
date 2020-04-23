/**
 * @fileoverview added by tsickle
 * Generated from: src/config/config.types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/**
 * @record
 */
export function AlainConfig() { }
if (false) {
    /** @type {?|undefined} */
    AlainConfig.prototype.dataRange;
    /** @type {?|undefined} */
    AlainConfig.prototype.errorCollect;
    /** @type {?|undefined} */
    AlainConfig.prototype.image;
    /** @type {?|undefined} */
    AlainConfig.prototype.loading;
    /** @type {?|undefined} */
    AlainConfig.prototype.chart;
}
/**
 * @record
 */
export function AlainErrorCollectConfig() { }
if (false) {
    /**
     * 监听频率，默认：`500`
     * @type {?|undefined}
     */
    AlainErrorCollectConfig.prototype.freq;
    /**
     * 顶部偏移值，默认：`145`
     * @type {?|undefined}
     */
    AlainErrorCollectConfig.prototype.offsetTop;
}
/**
 * @record
 */
export function AlainImageConfig() { }
if (false) {
    /**
     * 默认大小，默认值：`64`，单位：px
     * @type {?|undefined}
     */
    AlainImageConfig.prototype.size;
    /**
     * 错误图片，默认：`./assets/img/logo.svg`
     * @type {?|undefined}
     */
    AlainImageConfig.prototype.error;
}
/**
 * @record
 */
export function AlainLoadingConfig() { }
if (false) {
    /**
     * 类型，默认：`spin`
     * @type {?|undefined}
     */
    AlainLoadingConfig.prototype.type;
    /**
     * 显示文本，默认：`加载中...`
     * @type {?|undefined}
     */
    AlainLoadingConfig.prototype.text;
    /** @type {?|undefined} */
    AlainLoadingConfig.prototype.icon;
    /** @type {?|undefined} */
    AlainLoadingConfig.prototype.custom;
    /**
     * 延迟，默认：`0`
     * @type {?|undefined}
     */
    AlainLoadingConfig.prototype.delay;
}
/**
 * @record
 */
export function AlainChartConfig() { }
if (false) {
    /** @type {?|undefined} */
    AlainChartConfig.prototype.theme;
}
/** @type {?} */
export var ALAIN_CONFIG = new InjectionToken('alain-config');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnR5cGVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL2NvbmZpZy9jb25maWcudHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBSy9DLGlDQU1DOzs7SUFMQyxnQ0FBdUM7O0lBQ3ZDLG1DQUF1Qzs7SUFDdkMsNEJBQXlCOztJQUN6Qiw4QkFBNkI7O0lBQzdCLDRCQUF5Qjs7Ozs7QUFHM0IsNkNBU0M7Ozs7OztJQUxDLHVDQUFjOzs7OztJQUlkLDRDQUFtQjs7Ozs7QUFHckIsc0NBVUM7Ozs7OztJQU5DLGdDQUFjOzs7OztJQUtkLGlDQUFlOzs7OztBQUdqQix3Q0F5QkM7Ozs7OztJQXJCQyxrQ0FBMkM7Ozs7O0lBSTNDLGtDQUFjOztJQUNkLGtDQU9FOztJQUNGLG9DQUdFOzs7OztJQUlGLG1DQUFlOzs7OztBQUdqQixzQ0FFQzs7O0lBREMsaUNBQThDOzs7QUFLaEQsTUFBTSxLQUFPLFlBQVksR0FBRyxJQUFJLGNBQWMsQ0FBYyxjQUFjLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IEFsYWluRGF0ZVJhbmdlUGlja2VyQ29uZmlnIH0gZnJvbSAnLi90eXBlcy9kYXRlLXBpY2tlci50eXBlJztcbmltcG9ydCB7IFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxhaW5Db25maWcge1xuICBkYXRhUmFuZ2U/OiBBbGFpbkRhdGVSYW5nZVBpY2tlckNvbmZpZztcbiAgZXJyb3JDb2xsZWN0PzogQWxhaW5FcnJvckNvbGxlY3RDb25maWc7XG4gIGltYWdlPzogQWxhaW5JbWFnZUNvbmZpZztcbiAgbG9hZGluZz86IEFsYWluTG9hZGluZ0NvbmZpZztcbiAgY2hhcnQ/OiBBbGFpbkNoYXJ0Q29uZmlnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFsYWluRXJyb3JDb2xsZWN0Q29uZmlnIHtcbiAgLyoqXG4gICAqIOebkeWQrOmikeeOh++8jOm7mOiupO+8mmA1MDBgXG4gICAqL1xuICBmcmVxPzogbnVtYmVyO1xuICAvKipcbiAgICog6aG26YOo5YGP56e75YC877yM6buY6K6k77yaYDE0NWBcbiAgICovXG4gIG9mZnNldFRvcD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbGFpbkltYWdlQ29uZmlnIHtcbiAgLyoqXG4gICAqIOm7mOiupOWkp+Wwj++8jOm7mOiupOWAvO+8mmA2NGDvvIzljZXkvY3vvJpweFxuICAgKi9cbiAgc2l6ZT86IG51bWJlcjtcblxuICAvKipcbiAgICog6ZSZ6K+v5Zu+54mH77yM6buY6K6k77yaYC4vYXNzZXRzL2ltZy9sb2dvLnN2Z2BcbiAgICovXG4gIGVycm9yPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFsYWluTG9hZGluZ0NvbmZpZyB7XG4gIC8qKlxuICAgKiDnsbvlnovvvIzpu5jorqTvvJpgc3BpbmBcbiAgICovXG4gIHR5cGU/OiAndGV4dCcgfCAnaWNvbicgfCAnc3BpbicgfCAnY3VzdG9tJztcbiAgLyoqXG4gICAqIOaYvuekuuaWh+acrO+8jOm7mOiupO+8mmDliqDovb3kuK0uLi5gXG4gICAqL1xuICB0ZXh0Pzogc3RyaW5nO1xuICBpY29uPzoge1xuICAgIC8qKiBgbnotaWNvbi5uelR5cGVg77yM6buY6K6k77yaYGxvYWRpbmdgICovXG4gICAgdHlwZT86IHN0cmluZztcbiAgICAvKiogYG56LWljb24ubnpUaGVtZWDvvIzpu5jorqTvvJpgb3V0bGluZWAgKi9cbiAgICB0aGVtZT86ICdmaWxsJyB8ICdvdXRsaW5lJyB8ICd0d290b25lJztcbiAgICAvKiogYG56LWljb24ubnpTcGluYO+8jOm7mOiupO+8mmB0cnVlYCAqL1xuICAgIHNwaW4/OiBib29sZWFuO1xuICB9O1xuICBjdXN0b20/OiB7XG4gICAgaHRtbD86IHN0cmluZyB8IFNhZmVIdG1sO1xuICAgIHN0eWxlPzogb2JqZWN0O1xuICB9O1xuICAvKipcbiAgICog5bu26L+f77yM6buY6K6k77yaYDBgXG4gICAqL1xuICBkZWxheT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbGFpbkNoYXJ0Q29uZmlnIHtcbiAgdGhlbWU/OiBzdHJpbmcgfCB7IFtrZXk6IHN0cmluZ106IE56U2FmZUFueSB9O1xufVxuXG5leHBvcnQgdHlwZSBBbGFpbkNvbmZpZ0tleSA9IGtleW9mIEFsYWluQ29uZmlnO1xuXG5leHBvcnQgY29uc3QgQUxBSU5fQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPEFsYWluQ29uZmlnPignYWxhaW4tY29uZmlnJyk7XG4iXX0=