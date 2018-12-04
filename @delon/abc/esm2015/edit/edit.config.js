/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
/** @nocollapse */ SEConfig.ngInjectableDef = i0.defineInjectable({ factory: function SEConfig_Factory() { return new SEConfig(); }, token: SEConfig, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2VkaXQvIiwic291cmNlcyI6WyJlZGl0LmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHM0MsTUFBTSxPQUFPLFFBQVE7SUFEckI7Ozs7O1FBTUUsU0FBSSxHQUEwQixTQUFTLENBQUM7Ozs7O1FBS3hDLGFBQVEsR0FBeUMsWUFBWSxDQUFDOzs7O1FBSTlELFdBQU0sR0FBSSxFQUFFLENBQUM7Ozs7UUFJYixRQUFHLEdBQUksQ0FBQyxDQUFDOzs7O1FBSVQsZUFBVSxHQUFJLEdBQUcsQ0FBQzs7OztRQUlsQixnQkFBVyxHQUFJLEtBQUssQ0FBQztLQUN0Qjs7O1lBNUJBLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Ozs7OztJQU1oQyx3QkFBd0M7Ozs7OztJQUt4Qyw0QkFBOEQ7Ozs7O0lBSTlELDBCQUFhOzs7OztJQUliLHVCQUFTOzs7OztJQUlULDhCQUFrQjs7Ozs7SUFJbEIsK0JBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFNFQ29uZmlnIHtcbiAgLyoqXG4gICAqIOWkp+Wwj++8jOm7mOiupO+8mmBkZWZhdWx0YFxuICAgKiAtIGBjb21wYWN0YCDntKflh5HlnovvvIzlvLrliLblv73nlaUgYGVycm9yYOOAgWBleHRyYWAg5bGV56S6XG4gICAqL1xuICBzaXplOiAnZGVmYXVsdCcgfCAnY29tcGFjdCcgPSAnZGVmYXVsdCc7XG4gIC8qKlxuICAgKiDluIPlsYDnsbvlnovvvIznrYnlkIwgYG56TGF5b3V0YFxuICAgKiAtIGBpbmxpbmVgIOaXtuW8uuWItuWkp+Wwj+S4uiBgY29tcGFjdGBcbiAgICovXG4gIG56TGF5b3V0OiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnIHwgJ2lubGluZScgPSAnaG9yaXpvbnRhbCc7XG4gIC8qKlxuICAgKiDpl7Tot53vvIzlvZMgYG56TGF5b3V0Omhvcml6b250YWxgIOaXtuacieaViO+8jOm7mOiupO+8mmAzMmBcbiAgICovXG4gIGd1dHRlciA/PSAzMjtcbiAgLyoqXG4gICAqIOWIl+aVsO+8jOm7mOiupO+8mmAyYFxuICAgKi9cbiAgY29sID89IDI7XG4gIC8qKlxuICAgKiDmoIfnrb7mlofmnKzlrr3luqbvvIzljZXkvY3vvJpgcHhg77yM6buY6K6k77yaYDE1MGBcbiAgICovXG4gIGxhYmVsV2lkdGggPz0gMTUwO1xuICAvKipcbiAgICog5piv5ZCm56uL5Y2z5ZGI546w6ZSZ6K+v6KeG6KeJXG4gICAqL1xuICBmaXJzdFZpc3VhbCA/PSBmYWxzZTtcbn1cbiJdfQ==