/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var SEConfig = /** @class */ (function () {
    function SEConfig() {
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
    SEConfig.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ SEConfig.ngInjectableDef = i0.defineInjectable({ factory: function SEConfig_Factory() { return new SEConfig(); }, token: SEConfig, providedIn: "root" });
    return SEConfig;
}());
export { SEConfig };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2VkaXQvIiwic291cmNlcyI6WyJlZGl0LmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0M7SUFBQTs7Ozs7UUFNRSxTQUFJLEdBQTBCLFNBQVMsQ0FBQzs7Ozs7UUFLeEMsYUFBUSxHQUF5QyxZQUFZLENBQUM7Ozs7UUFJOUQsV0FBTSxHQUFJLEVBQUUsQ0FBQzs7OztRQUliLFFBQUcsR0FBSSxDQUFDLENBQUM7Ozs7UUFJVCxlQUFVLEdBQUksR0FBRyxDQUFDOzs7O1FBSWxCLGdCQUFXLEdBQUksS0FBSyxDQUFDO0tBQ3RCOztnQkE1QkEsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7O21CQUZsQztDQThCQyxBQTVCRCxJQTRCQztTQTNCWSxRQUFROzs7Ozs7O0lBS25CLHdCQUF3Qzs7Ozs7O0lBS3hDLDRCQUE4RDs7Ozs7SUFJOUQsMEJBQWE7Ozs7O0lBSWIsdUJBQVM7Ozs7O0lBSVQsOEJBQWtCOzs7OztJQUlsQiwrQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgU0VDb25maWcge1xuICAvKipcbiAgICog5aSn5bCP77yM6buY6K6k77yaYGRlZmF1bHRgXG4gICAqIC0gYGNvbXBhY3RgIOe0p+WHkeWei++8jOW8uuWItuW/veeVpSBgZXJyb3Jg44CBYGV4dHJhYCDlsZXnpLpcbiAgICovXG4gIHNpemU6ICdkZWZhdWx0JyB8ICdjb21wYWN0JyA9ICdkZWZhdWx0JztcbiAgLyoqXG4gICAqIOW4g+WxgOexu+Wei++8jOetieWQjCBgbnpMYXlvdXRgXG4gICAqIC0gYGlubGluZWAg5pe25by65Yi25aSn5bCP5Li6IGBjb21wYWN0YFxuICAgKi9cbiAgbnpMYXlvdXQ6ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgfCAnaW5saW5lJyA9ICdob3Jpem9udGFsJztcbiAgLyoqXG4gICAqIOmXtOi3ne+8jOW9kyBgbnpMYXlvdXQ6aG9yaXpvbnRhbGAg5pe25pyJ5pWI77yM6buY6K6k77yaYDMyYFxuICAgKi9cbiAgZ3V0dGVyID89IDMyO1xuICAvKipcbiAgICog5YiX5pWw77yM6buY6K6k77yaYDJgXG4gICAqL1xuICBjb2wgPz0gMjtcbiAgLyoqXG4gICAqIOagh+etvuaWh+acrOWuveW6pu+8jOWNleS9je+8mmBweGDvvIzpu5jorqTvvJpgMTUwYFxuICAgKi9cbiAgbGFiZWxXaWR0aCA/PSAxNTA7XG4gIC8qKlxuICAgKiDmmK/lkKbnq4vljbPlkYjnjrDplJnor6/op4bop4lcbiAgICovXG4gIGZpcnN0VmlzdWFsID89IGZhbHNlO1xufVxuIl19