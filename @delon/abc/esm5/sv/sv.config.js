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
var SVConfig = /** @class */ (function () {
    function SVConfig() {
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
        deprecation10Cog("SVConfig");
    }
    SVConfig.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    SVConfig.ctorParameters = function () { return []; };
    /** @nocollapse */ SVConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function SVConfig_Factory() { return new SVConfig(); }, token: SVConfig, providedIn: "root" });
    return SVConfig;
}());
export { SVConfig };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3YuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9zdi8iLCJzb3VyY2VzIjpbInN2LmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sYUFBYSxDQUFDOzs7OztBQUsvQztJQUVFOzs7O1FBTUEsV0FBTSxHQUFHLEVBQUUsQ0FBQzs7OztRQUVaLFdBQU0sR0FBRyxZQUFZLENBQUM7Ozs7UUFFdEIsUUFBRyxHQUFHLENBQUMsQ0FBQzs7OztRQUVSLFlBQU8sR0FBRyxJQUFJLENBQUM7Ozs7UUFFZixlQUFVLEdBQWtCLElBQUksQ0FBQztRQWIvQixnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvQixDQUFDOztnQkFKRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7OzttQkFObEM7Q0F1QkMsQUFqQkQsSUFpQkM7U0FoQlksUUFBUTs7Ozs7O0lBS25CLHdCQUF3Qjs7Ozs7SUFFeEIsMEJBQVk7Ozs7O0lBRVosMEJBQXNCOzs7OztJQUV0Qix1QkFBUTs7Ozs7SUFFUiwyQkFBZTs7Ozs7SUFFZiw4QkFBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZXByZWNhdGlvbjEwQ29nIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIGBTVkNvbmZpZ2AgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiAxMC4wLjAuIFBsZWFzZSByZWZlciB0byBodHRwczovL25nLWFsYWluLmNvbS9kb2NzL2dsb2JhbC1jb25maWdcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBTVkNvbmZpZyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGRlcHJlY2F0aW9uMTBDb2coYFNWQ29uZmlnYCk7XG4gIH1cbiAgLyoqIOWkp+WwjyAqL1xuICBzaXplOiAnc21hbGwnIHwgJ2xhcmdlJztcbiAgLyoqIOmXtOi3ne+8jOm7mOiupO+8mmAzMmAgKi9cbiAgZ3V0dGVyID0gMzI7XG4gIC8qKiDluIPlsYDvvIzpu5jorqTvvJpgaG9yaXpvbnRhbGAgKi9cbiAgbGF5b3V0ID0gJ2hvcml6b250YWwnO1xuICAvKiog5YiX5pWw77yM6buY6K6k77yaYDNgICovXG4gIGNvbCA9IDM7XG4gIC8qKiDmmK/lkKbmmL7npLrpu5jorqTlgLzvvIzlvZPlhoXlrrnkuLrnqbrlgLzml7bmmL7npLogYC1g77yM6buY6K6k77yaYHRydWVgICovXG4gIGRlZmF1bHQgPSB0cnVlO1xuICAvKiogYGxhYmVsYCDlm7rlrprlrr3luqbvvIzoi6UgYG51bGxgIOaIliBgdW5kZWZpbmVkYCDooajnpLrpnZ7lm7rlrprvvIzpu5jorqTvvJpgbnVsbGAgKi9cbiAgbGFiZWxXaWR0aDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG59XG4iXX0=