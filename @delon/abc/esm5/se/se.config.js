/**
 * @fileoverview added by tsickle
 * Generated from: se.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { deprecation10Cog } from '@delon/util';
import * as i0 from "@angular/core";
/**
 * @deprecated `SEConfig` is going to be removed in 10.0.0. Please refer to https://ng-alain.com/docs/global-config
 */
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
        deprecation10Cog("SEConfig");
    }
    SEConfig.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    SEConfig.ctorParameters = function () { return []; };
    /** @nocollapse */ SEConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function SEConfig_Factory() { return new SEConfig(); }, token: SEConfig, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2UuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9zZS8iLCJzb3VyY2VzIjpbInNlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sYUFBYSxDQUFDOzs7OztBQUsvQztJQUVFOzs7OztRQU9BLFNBQUksR0FBMEIsU0FBUyxDQUFDOzs7OztRQUt4QyxhQUFRLEdBQXlDLFlBQVksQ0FBQzs7OztRQUk5RCxXQUFNLEdBQVksRUFBRSxDQUFDOzs7O1FBSXJCLFFBQUcsR0FBWSxDQUFDLENBQUM7Ozs7UUFJakIsZUFBVSxHQUFZLEdBQUcsQ0FBQzs7OztRQUkxQixnQkFBVyxHQUFhLEtBQUssQ0FBQztRQTNCNUIsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Z0JBSkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7Ozs7bUJBTmxDO0NBcUNDLEFBL0JELElBK0JDO1NBOUJZLFFBQVE7Ozs7Ozs7SUFRbkIsd0JBQXdDOzs7Ozs7SUFLeEMsNEJBQThEOzs7OztJQUk5RCwwQkFBcUI7Ozs7O0lBSXJCLHVCQUFpQjs7Ozs7SUFJakIsOEJBQTBCOzs7OztJQUkxQiwrQkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZXByZWNhdGlvbjEwQ29nIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIGBTRUNvbmZpZ2AgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiAxMC4wLjAuIFBsZWFzZSByZWZlciB0byBodHRwczovL25nLWFsYWluLmNvbS9kb2NzL2dsb2JhbC1jb25maWdcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBTRUNvbmZpZyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGRlcHJlY2F0aW9uMTBDb2coYFNFQ29uZmlnYCk7XG4gIH1cbiAgLyoqXG4gICAqIOWkp+Wwj++8jOm7mOiupO+8mmBkZWZhdWx0YFxuICAgKiAtIGBjb21wYWN0YCDntKflh5HlnovvvIzlvLrliLblv73nlaUgYGVycm9yYOOAgWBleHRyYWAg5bGV56S6XG4gICAqL1xuICBzaXplOiAnZGVmYXVsdCcgfCAnY29tcGFjdCcgPSAnZGVmYXVsdCc7XG4gIC8qKlxuICAgKiDluIPlsYDnsbvlnovvvIznrYnlkIwgYG56TGF5b3V0YFxuICAgKiAtIGBpbmxpbmVgIOaXtuW8uuWItuWkp+Wwj+S4uiBgY29tcGFjdGBcbiAgICovXG4gIG56TGF5b3V0OiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnIHwgJ2lubGluZScgPSAnaG9yaXpvbnRhbCc7XG4gIC8qKlxuICAgKiDpl7Tot53vvIzlvZMgYG56TGF5b3V0Omhvcml6b250YWxgIOaXtuacieaViO+8jOm7mOiupO+8mmAzMmBcbiAgICovXG4gIGd1dHRlcj86IG51bWJlciA9IDMyO1xuICAvKipcbiAgICog5YiX5pWw77yM6buY6K6k77yaYDJgXG4gICAqL1xuICBjb2w/OiBudW1iZXIgPSAyO1xuICAvKipcbiAgICog5qCH562+5paH5pys5a695bqm77yM5Y2V5L2N77yaYHB4YO+8jOm7mOiupO+8mmAxNTBgXG4gICAqL1xuICBsYWJlbFdpZHRoPzogbnVtYmVyID0gMTUwO1xuICAvKipcbiAgICog5piv5ZCm56uL5Y2z5ZGI546w6ZSZ6K+v6KeG6KeJXG4gICAqL1xuICBmaXJzdFZpc3VhbD86IGJvb2xlYW4gPSBmYWxzZTtcbn1cbiJdfQ==