/**
 * @fileoverview added by tsickle
 * Generated from: se.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class SEConfig {
    constructor() {
        /**
         * 大小，默认：`default`
         * - `compact` 紧凑型，强制忽略 `error`、`extra` 展示
         */
        this.size = 'default';
        /**
         * 布局类型，等同 `nzLayout`
         * - `inline` 时强制大小为 `compact`
         */
        this.nzLayout = 'horizontal';
        /**
         * 间距，当 `nzLayout:horizontal` 时有效，默认：`32`
         */
        this.gutter = 32;
        /**
         * 列数，默认：`2`
         */
        this.col = 2;
        /**
         * 标签文本宽度，单位：`px`，默认：`150`
         */
        this.labelWidth = 150;
        /**
         * 是否立即呈现错误视觉
         */
        this.firstVisual = false;
    }
}
SEConfig.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ SEConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function SEConfig_Factory() { return new SEConfig(); }, token: SEConfig, providedIn: "root" });
if (false) {
    /**
     * 大小，默认：`default`
     * - `compact` 紧凑型，强制忽略 `error`、`extra` 展示
     * @type {?}
     */
    SEConfig.prototype.size;
    /**
     * 布局类型，等同 `nzLayout`
     * - `inline` 时强制大小为 `compact`
     * @type {?}
     */
    SEConfig.prototype.nzLayout;
    /**
     * 间距，当 `nzLayout:horizontal` 时有效，默认：`32`
     * @type {?}
     */
    SEConfig.prototype.gutter;
    /**
     * 列数，默认：`2`
     * @type {?}
     */
    SEConfig.prototype.col;
    /**
     * 标签文本宽度，单位：`px`，默认：`150`
     * @type {?}
     */
    SEConfig.prototype.labelWidth;
    /**
     * 是否立即呈现错误视觉
     * @type {?}
     */
    SEConfig.prototype.firstVisual;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2UuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9zZS8iLCJzb3VyY2VzIjpbInNlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzNDLE1BQU0sT0FBTyxRQUFRO0lBRHJCOzs7OztRQU1FLFNBQUksR0FBMEIsU0FBUyxDQUFDOzs7OztRQUt4QyxhQUFRLEdBQXlDLFlBQVksQ0FBQzs7OztRQUk5RCxXQUFNLEdBQVksRUFBRSxDQUFDOzs7O1FBSXJCLFFBQUcsR0FBWSxDQUFDLENBQUM7Ozs7UUFJakIsZUFBVSxHQUFZLEdBQUcsQ0FBQzs7OztRQUkxQixnQkFBVyxHQUFhLEtBQUssQ0FBQztLQUMvQjs7O1lBNUJBLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Ozs7OztJQU1oQyx3QkFBd0M7Ozs7OztJQUt4Qyw0QkFBOEQ7Ozs7O0lBSTlELDBCQUFxQjs7Ozs7SUFJckIsdUJBQWlCOzs7OztJQUlqQiw4QkFBMEI7Ozs7O0lBSTFCLCtCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBTRUNvbmZpZyB7XG4gIC8qKlxuICAgKiDlpKflsI/vvIzpu5jorqTvvJpgZGVmYXVsdGBcbiAgICogLSBgY29tcGFjdGAg57Sn5YeR5Z6L77yM5by65Yi25b+955WlIGBlcnJvcmDjgIFgZXh0cmFgIOWxleekulxuICAgKi9cbiAgc2l6ZTogJ2RlZmF1bHQnIHwgJ2NvbXBhY3QnID0gJ2RlZmF1bHQnO1xuICAvKipcbiAgICog5biD5bGA57G75Z6L77yM562J5ZCMIGBuekxheW91dGBcbiAgICogLSBgaW5saW5lYCDml7blvLrliLblpKflsI/kuLogYGNvbXBhY3RgXG4gICAqL1xuICBuekxheW91dDogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyB8ICdpbmxpbmUnID0gJ2hvcml6b250YWwnO1xuICAvKipcbiAgICog6Ze06Led77yM5b2TIGBuekxheW91dDpob3Jpem9udGFsYCDml7bmnInmlYjvvIzpu5jorqTvvJpgMzJgXG4gICAqL1xuICBndXR0ZXI/OiBudW1iZXIgPSAzMjtcbiAgLyoqXG4gICAqIOWIl+aVsO+8jOm7mOiupO+8mmAyYFxuICAgKi9cbiAgY29sPzogbnVtYmVyID0gMjtcbiAgLyoqXG4gICAqIOagh+etvuaWh+acrOWuveW6pu+8jOWNleS9je+8mmBweGDvvIzpu5jorqTvvJpgMTUwYFxuICAgKi9cbiAgbGFiZWxXaWR0aD86IG51bWJlciA9IDE1MDtcbiAgLyoqXG4gICAqIOaYr+WQpueri+WNs+WRiOeOsOmUmeivr+inhuiniVxuICAgKi9cbiAgZmlyc3RWaXN1YWw/OiBib29sZWFuID0gZmFsc2U7XG59XG4iXX0=