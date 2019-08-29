/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var DelonFormConfig = /** @class */ (function () {
    function DelonFormConfig() {
        /**
         * 是否忽略某些数据类型校验 `ERRORSDEFAULT`，默认：`[ 'type', 'enum' ]`
         *
         * - `type` 限定 Schema 中 `type` 类型
         * - `enum` 限定应当是预设定的枚举值之一
         */
        this.ingoreKeywords = ['type', 'enum'];
        /**
         * 是否实时校验，默认：`true`
         * - `true` 每一次都校验
         * - `false` 提交时校验
         */
        this.liveValidate = true;
        /**
         * 指定表单 `autocomplete` 值，默认：`on`
         */
        this.autocomplete = null;
        /**
         * 是否立即呈现错误视觉，默认：`false`
         */
        this.firstVisual = false;
        /**
         * 是否只展示错误视觉不显示错误文本，默认：`false`
         */
        this.onlyVisual = false;
        /**
         * 自定义通用错误信息
         */
        this.errors = {};
        /**
         * 按钮风格
         */
        this.button = {
            submit_type: 'primary',
            reset_type: 'default',
        };
        /**
         * date小部件：`type="string"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`YYYY-MM-DD HH:mm:ss`
         */
        this.uiDateStringFormat = 'YYYY-MM-DD HH:mm:ss';
        /**
         * date小部件：`type="number"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`x` 13位Unix Timestamp
         */
        this.uiDateNumberFormat = 'x';
        /**
         * time小部件：`type="string"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`HH:mm:ss`
         */
        this.uiTimeStringFormat = 'HH:mm:ss';
        /**
         * time小部件：`type="number"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`x` 13位Unix Timestamp，日期统一使用 `1970-01-01`
         */
        this.uiTimeNumberFormat = 'x';
        /**
         * 指定 `format: 'email'` 的默认Email后缀
         */
        this.uiEmailSuffixes = ['qq.com', '163.com', 'gmail.com', '126.com', 'aliyun.com'];
    }
    DelonFormConfig.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ DelonFormConfig.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DelonFormConfig_Factory() { return new DelonFormConfig(); }, token: DelonFormConfig, providedIn: "root" });
    return DelonFormConfig;
}());
export { DelonFormConfig };
if (false) {
    /**
     * 是否忽略某些数据类型校验 `ERRORSDEFAULT`，默认：`[ 'type', 'enum' ]`
     *
     * - `type` 限定 Schema 中 `type` 类型
     * - `enum` 限定应当是预设定的枚举值之一
     * @type {?}
     */
    DelonFormConfig.prototype.ingoreKeywords;
    /**
     * [ajv](http://epoberezkin.github.io/ajv/#options) 参数
     * @type {?}
     */
    DelonFormConfig.prototype.ajv;
    /**
     * 是否实时校验，默认：`true`
     * - `true` 每一次都校验
     * - `false` 提交时校验
     * @type {?}
     */
    DelonFormConfig.prototype.liveValidate;
    /**
     * 指定表单 `autocomplete` 值，默认：`on`
     * @type {?}
     */
    DelonFormConfig.prototype.autocomplete;
    /**
     * 是否立即呈现错误视觉，默认：`false`
     * @type {?}
     */
    DelonFormConfig.prototype.firstVisual;
    /**
     * 是否只展示错误视觉不显示错误文本，默认：`false`
     * @type {?}
     */
    DelonFormConfig.prototype.onlyVisual;
    /**
     * 自定义通用错误信息
     * @type {?}
     */
    DelonFormConfig.prototype.errors;
    /**
     * 默认全局布局
     * @type {?}
     */
    DelonFormConfig.prototype.ui;
    /**
     * 元素组件大小，用于 `nzSize` 值
     * @type {?}
     */
    DelonFormConfig.prototype.size;
    /**
     * 按钮风格
     * @type {?}
     */
    DelonFormConfig.prototype.button;
    /**
     * date小部件：`type="string"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`YYYY-MM-DD HH:mm:ss`
     * @type {?}
     */
    DelonFormConfig.prototype.uiDateStringFormat;
    /**
     * date小部件：`type="number"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`x` 13位Unix Timestamp
     * @type {?}
     */
    DelonFormConfig.prototype.uiDateNumberFormat;
    /**
     * time小部件：`type="string"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`HH:mm:ss`
     * @type {?}
     */
    DelonFormConfig.prototype.uiTimeStringFormat;
    /**
     * time小部件：`type="number"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`x` 13位Unix Timestamp，日期统一使用 `1970-01-01`
     * @type {?}
     */
    DelonFormConfig.prototype.uiTimeNumberFormat;
    /**
     * 指定 `format: 'email'` 的默认Email后缀
     * @type {?}
     */
    DelonFormConfig.prototype.uiEmailSuffixes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUkzQztJQUFBOzs7Ozs7O1FBUUUsbUJBQWMsR0FBYyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQzs7Ozs7O1FBVTdDLGlCQUFZLEdBQWEsSUFBSSxDQUFDOzs7O1FBSTlCLGlCQUFZLEdBQXlCLElBQUksQ0FBQzs7OztRQUkxQyxnQkFBVyxHQUFhLEtBQUssQ0FBQzs7OztRQUk5QixlQUFVLEdBQWEsS0FBSyxDQUFDOzs7O1FBSTdCLFdBQU0sR0FBK0IsRUFBRSxDQUFDOzs7O1FBWXhDLFdBQU0sR0FBYztZQUNsQixXQUFXLEVBQUUsU0FBUztZQUN0QixVQUFVLEVBQUUsU0FBUztTQUN0QixDQUFDOzs7O1FBSUYsdUJBQWtCLEdBQVkscUJBQXFCLENBQUM7Ozs7UUFJcEQsdUJBQWtCLEdBQVksR0FBRyxDQUFDOzs7O1FBSWxDLHVCQUFrQixHQUFZLFVBQVUsQ0FBQzs7OztRQUl6Qyx1QkFBa0IsR0FBWSxHQUFHLENBQUM7Ozs7UUFJbEMsb0JBQWUsR0FBYyxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQztLQUMxRjs7Z0JBdEVBLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OzswQkFKbEM7Q0EwRUMsQUF0RUQsSUFzRUM7U0FyRVksZUFBZTs7Ozs7Ozs7O0lBTzFCLHlDQUE2Qzs7Ozs7SUFJN0MsOEJBQVU7Ozs7Ozs7SUFNVix1Q0FBOEI7Ozs7O0lBSTlCLHVDQUEwQzs7Ozs7SUFJMUMsc0NBQThCOzs7OztJQUk5QixxQ0FBNkI7Ozs7O0lBSTdCLGlDQUF3Qzs7Ozs7SUFJeEMsNkJBQW9COzs7OztJQUlwQiwrQkFBcUM7Ozs7O0lBSXJDLGlDQUdFOzs7OztJQUlGLDZDQUFvRDs7Ozs7SUFJcEQsNkNBQWtDOzs7OztJQUlsQyw2Q0FBeUM7Ozs7O0lBSXpDLDZDQUFrQzs7Ozs7SUFJbEMsMENBQXlGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU0ZCdXR0b24gfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4vc2NoZW1hL3VpJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBEZWxvbkZvcm1Db25maWcge1xuICAvKipcbiAgICog5piv5ZCm5b+955Wl5p+Q5Lqb5pWw5o2u57G75Z6L5qCh6aqMIGBFUlJPUlNERUZBVUxUYO+8jOm7mOiupO+8mmBbICd0eXBlJywgJ2VudW0nIF1gXG4gICAqXG4gICAqIC0gYHR5cGVgIOmZkOWumiBTY2hlbWEg5LitIGB0eXBlYCDnsbvlnotcbiAgICogLSBgZW51bWAg6ZmQ5a6a5bqU5b2T5piv6aKE6K6+5a6a55qE5p6a5Li+5YC85LmL5LiAXG4gICAqL1xuICBpbmdvcmVLZXl3b3Jkcz86IHN0cmluZ1tdID0gWyd0eXBlJywgJ2VudW0nXTtcbiAgLyoqXG4gICAqIFthanZdKGh0dHA6Ly9lcG9iZXJlemtpbi5naXRodWIuaW8vYWp2LyNvcHRpb25zKSDlj4LmlbBcbiAgICovXG4gIGFqdj86IGFueTtcbiAgLyoqXG4gICAqIOaYr+WQpuWunuaXtuagoemqjO+8jOm7mOiupO+8mmB0cnVlYFxuICAgKiAtIGB0cnVlYCDmr4/kuIDmrKHpg73moKHpqoxcbiAgICogLSBgZmFsc2VgIOaPkOS6pOaXtuagoemqjFxuICAgKi9cbiAgbGl2ZVZhbGlkYXRlPzogYm9vbGVhbiA9IHRydWU7XG4gIC8qKlxuICAgKiDmjIflrprooajljZUgYGF1dG9jb21wbGV0ZWAg5YC877yM6buY6K6k77yaYG9uYFxuICAgKi9cbiAgYXV0b2NvbXBsZXRlPzogJ29uJyB8ICdvZmYnIHwgbnVsbCA9IG51bGw7XG4gIC8qKlxuICAgKiDmmK/lkKbnq4vljbPlkYjnjrDplJnor6/op4bop4nvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBmaXJzdFZpc3VhbD86IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIOaYr+WQpuWPquWxleekuumUmeivr+inhuinieS4jeaYvuekuumUmeivr+aWh+acrO+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIG9ubHlWaXN1YWw/OiBib29sZWFuID0gZmFsc2U7XG4gIC8qKlxuICAgKiDoh6rlrprkuYnpgJrnlKjplJnor6/kv6Hmga9cbiAgICovXG4gIGVycm9ycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcbiAgLyoqXG4gICAqIOm7mOiupOWFqOWxgOW4g+WxgFxuICAgKi9cbiAgdWk/OiBTRlVJU2NoZW1hSXRlbTtcbiAgLyoqXG4gICAqIOWFg+e0oOe7hOS7tuWkp+Wwj++8jOeUqOS6jiBgbnpTaXplYCDlgLxcbiAgICovXG4gIHNpemU/OiAnZGVmYXVsdCcgfCAnbGFyZ2UnIHwgJ3NtYWxsJztcbiAgLyoqXG4gICAqIOaMiemSrumjjuagvFxuICAgKi9cbiAgYnV0dG9uPzogU0ZCdXR0b24gPSB7XG4gICAgc3VibWl0X3R5cGU6ICdwcmltYXJ5JyxcbiAgICByZXNldF90eXBlOiAnZGVmYXVsdCcsXG4gIH07XG4gIC8qKlxuICAgKiBkYXRl5bCP6YOo5Lu277yaYHR5cGU9XCJzdHJpbmdcImAg5LiU5LiN5oyH5a6aIGBzY2hlbWEuZm9ybWF0YCDlkowgYHVpLmZvcm1hdGAg5pe25pel5pyf5qC85byP77yM6buY6K6k77yaYFlZWVktTU0tREQgSEg6bW06c3NgXG4gICAqL1xuICB1aURhdGVTdHJpbmdGb3JtYXQ/OiBzdHJpbmcgPSAnWVlZWS1NTS1ERCBISDptbTpzcyc7XG4gIC8qKlxuICAgKiBkYXRl5bCP6YOo5Lu277yaYHR5cGU9XCJudW1iZXJcImAg5LiU5LiN5oyH5a6aIGBzY2hlbWEuZm9ybWF0YCDlkowgYHVpLmZvcm1hdGAg5pe25pel5pyf5qC85byP77yM6buY6K6k77yaYHhgIDEz5L2NVW5peCBUaW1lc3RhbXBcbiAgICovXG4gIHVpRGF0ZU51bWJlckZvcm1hdD86IHN0cmluZyA9ICd4JztcbiAgLyoqXG4gICAqIHRpbWXlsI/pg6jku7bvvJpgdHlwZT1cInN0cmluZ1wiYCDkuJTkuI3mjIflrpogYHNjaGVtYS5mb3JtYXRgIOWSjCBgdWkuZm9ybWF0YCDml7bml6XmnJ/moLzlvI/vvIzpu5jorqTvvJpgSEg6bW06c3NgXG4gICAqL1xuICB1aVRpbWVTdHJpbmdGb3JtYXQ/OiBzdHJpbmcgPSAnSEg6bW06c3MnO1xuICAvKipcbiAgICogdGltZeWwj+mDqOS7tu+8mmB0eXBlPVwibnVtYmVyXCJgIOS4lOS4jeaMh+WumiBgc2NoZW1hLmZvcm1hdGAg5ZKMIGB1aS5mb3JtYXRgIOaXtuaXpeacn+agvOW8j++8jOm7mOiupO+8mmB4YCAxM+S9jVVuaXggVGltZXN0YW1w77yM5pel5pyf57uf5LiA5L2/55SoIGAxOTcwLTAxLTAxYFxuICAgKi9cbiAgdWlUaW1lTnVtYmVyRm9ybWF0Pzogc3RyaW5nID0gJ3gnO1xuICAvKipcbiAgICog5oyH5a6aIGBmb3JtYXQ6ICdlbWFpbCdgIOeahOm7mOiupEVtYWls5ZCO57yAXG4gICAqL1xuICB1aUVtYWlsU3VmZml4ZXM/OiBzdHJpbmdbXSA9IFsncXEuY29tJywgJzE2My5jb20nLCAnZ21haWwuY29tJywgJzEyNi5jb20nLCAnYWxpeXVuLmNvbSddO1xufVxuIl19