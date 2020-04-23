/**
 * @fileoverview added by tsickle
 * Generated from: sv.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { deprecation10Cog } from '@delon/util';
import * as i0 from "@angular/core";
/**
 * @deprecated `SVConfig` is going to be removed in 10.0.0. Please refer to https://ng-alain.com/docs/global-config
 */
export class SVConfig {
    constructor() {
        /**
         * 间距，默认：`32`
         */
        this.gutter = 32;
        /**
         * 布局，默认：`horizontal`
         */
        this.layout = 'horizontal';
        /**
         * 列数，默认：`3`
         */
        this.col = 3;
        /**
         * 是否显示默认值，当内容为空值时显示 `-`，默认：`true`
         */
        this.default = true;
        /**
         * `label` 固定宽度，若 `null` 或 `undefined` 表示非固定，默认：`null`
         */
        this.labelWidth = null;
        deprecation10Cog(`SVConfig`);
    }
}
SVConfig.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
SVConfig.ctorParameters = () => [];
/** @nocollapse */ SVConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function SVConfig_Factory() { return new SVConfig(); }, token: SVConfig, providedIn: "root" });
if (false) {
    /**
     * 大小
     * @type {?}
     */
    SVConfig.prototype.size;
    /**
     * 间距，默认：`32`
     * @type {?}
     */
    SVConfig.prototype.gutter;
    /**
     * 布局，默认：`horizontal`
     * @type {?}
     */
    SVConfig.prototype.layout;
    /**
     * 列数，默认：`3`
     * @type {?}
     */
    SVConfig.prototype.col;
    /**
     * 是否显示默认值，当内容为空值时显示 `-`，默认：`true`
     * @type {?}
     */
    SVConfig.prototype.default;
    /**
     * `label` 固定宽度，若 `null` 或 `undefined` 表示非固定，默认：`null`
     * @type {?}
     */
    SVConfig.prototype.labelWidth;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3YuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9zdi8iLCJzb3VyY2VzIjpbInN2LmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sYUFBYSxDQUFDOzs7OztBQU0vQyxNQUFNLE9BQU8sUUFBUTtJQUNuQjs7OztRQU1BLFdBQU0sR0FBRyxFQUFFLENBQUM7Ozs7UUFFWixXQUFNLEdBQUcsWUFBWSxDQUFDOzs7O1FBRXRCLFFBQUcsR0FBRyxDQUFDLENBQUM7Ozs7UUFFUixZQUFPLEdBQUcsSUFBSSxDQUFDOzs7O1FBRWYsZUFBVSxHQUFrQixJQUFJLENBQUM7UUFiL0IsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7O1lBSkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7Ozs7Ozs7OztJQU1oQyx3QkFBd0I7Ozs7O0lBRXhCLDBCQUFZOzs7OztJQUVaLDBCQUFzQjs7Ozs7SUFFdEIsdUJBQVE7Ozs7O0lBRVIsMkJBQWU7Ozs7O0lBRWYsOEJBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGVwcmVjYXRpb24xMENvZyB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBgU1ZDb25maWdgIGlzIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gMTAuMC4wLiBQbGVhc2UgcmVmZXIgdG8gaHR0cHM6Ly9uZy1hbGFpbi5jb20vZG9jcy9nbG9iYWwtY29uZmlnXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgU1ZDb25maWcge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBkZXByZWNhdGlvbjEwQ29nKGBTVkNvbmZpZ2ApO1xuICB9XG4gIC8qKiDlpKflsI8gKi9cbiAgc2l6ZTogJ3NtYWxsJyB8ICdsYXJnZSc7XG4gIC8qKiDpl7Tot53vvIzpu5jorqTvvJpgMzJgICovXG4gIGd1dHRlciA9IDMyO1xuICAvKiog5biD5bGA77yM6buY6K6k77yaYGhvcml6b250YWxgICovXG4gIGxheW91dCA9ICdob3Jpem9udGFsJztcbiAgLyoqIOWIl+aVsO+8jOm7mOiupO+8mmAzYCAqL1xuICBjb2wgPSAzO1xuICAvKiog5piv5ZCm5pi+56S66buY6K6k5YC877yM5b2T5YaF5a655Li656m65YC85pe25pi+56S6IGAtYO+8jOm7mOiupO+8mmB0cnVlYCAqL1xuICBkZWZhdWx0ID0gdHJ1ZTtcbiAgLyoqIGBsYWJlbGAg5Zu65a6a5a695bqm77yM6IulIGBudWxsYCDmiJYgYHVuZGVmaW5lZGAg6KGo56S66Z2e5Zu65a6a77yM6buY6K6k77yaYG51bGxgICovXG4gIGxhYmVsV2lkdGg6IG51bWJlciB8IG51bGwgPSBudWxsO1xufVxuIl19