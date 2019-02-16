/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ERRORSDEFAULT } from './errors';
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
        this.errors = ERRORSDEFAULT;
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
    }
    DelonFormConfig.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ DelonFormConfig.ngInjectableDef = i0.defineInjectable({ factory: function DelonFormConfig_Factory() { return new DelonFormConfig(); }, token: DelonFormConfig, providedIn: "root" });
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxVQUFVLENBQUM7O0FBSXpDO0lBQUE7Ozs7Ozs7UUFRRSxtQkFBYyxHQUFjLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7UUFVN0MsaUJBQVksR0FBYSxJQUFJLENBQUM7Ozs7UUFJOUIsaUJBQVksR0FBa0IsSUFBSSxDQUFDOzs7O1FBSW5DLGdCQUFXLEdBQWEsS0FBSyxDQUFDOzs7O1FBSTlCLGVBQVUsR0FBYSxLQUFLLENBQUM7Ozs7UUFJN0IsV0FBTSxHQUErQixhQUFhLENBQUM7Ozs7UUFZbkQsV0FBTSxHQUFjO1lBQ2xCLFdBQVcsRUFBRSxTQUFTO1lBQ3RCLFVBQVUsRUFBRSxTQUFTO1NBQ3RCLENBQUM7Ozs7UUFJRix1QkFBa0IsR0FBWSxxQkFBcUIsQ0FBQzs7OztRQUlwRCx1QkFBa0IsR0FBWSxHQUFHLENBQUM7Ozs7UUFJbEMsdUJBQWtCLEdBQVksVUFBVSxDQUFDOzs7O1FBSXpDLHVCQUFrQixHQUFZLEdBQUcsQ0FBQztLQUNuQzs7Z0JBbEVBLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OzswQkFMbEM7Q0F1RUMsQUFsRUQsSUFrRUM7U0FqRVksZUFBZTs7Ozs7Ozs7O0lBTzFCLHlDQUE2Qzs7Ozs7SUFJN0MsOEJBQVU7Ozs7Ozs7SUFNVix1Q0FBOEI7Ozs7O0lBSTlCLHVDQUFtQzs7Ozs7SUFJbkMsc0NBQThCOzs7OztJQUk5QixxQ0FBNkI7Ozs7O0lBSTdCLGlDQUFtRDs7Ozs7SUFJbkQsNkJBQW9COzs7OztJQUlwQiwrQkFBcUM7Ozs7O0lBSXJDLGlDQUdFOzs7OztJQUlGLDZDQUFvRDs7Ozs7SUFJcEQsNkNBQWtDOzs7OztJQUlsQyw2Q0FBeUM7Ozs7O0lBSXpDLDZDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVSUk9SU0RFRkFVTFQgfSBmcm9tICcuL2Vycm9ycyc7XG5pbXBvcnQgeyBTRkJ1dHRvbiB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIERlbG9uRm9ybUNvbmZpZyB7XG4gIC8qKlxuICAgKiDmmK/lkKblv73nlaXmn5DkupvmlbDmja7nsbvlnovmoKHpqowgYEVSUk9SU0RFRkFVTFRg77yM6buY6K6k77yaYFsgJ3R5cGUnLCAnZW51bScgXWBcbiAgICpcbiAgICogLSBgdHlwZWAg6ZmQ5a6aIFNjaGVtYSDkuK0gYHR5cGVgIOexu+Wei1xuICAgKiAtIGBlbnVtYCDpmZDlrprlupTlvZPmmK/pooTorr7lrprnmoTmnprkuL7lgLzkuYvkuIBcbiAgICovXG4gIGluZ29yZUtleXdvcmRzPzogc3RyaW5nW10gPSBbJ3R5cGUnLCAnZW51bSddO1xuICAvKipcbiAgICogW2Fqdl0oaHR0cDovL2Vwb2JlcmV6a2luLmdpdGh1Yi5pby9hanYvI29wdGlvbnMpIOWPguaVsFxuICAgKi9cbiAgYWp2PzogYW55O1xuICAvKipcbiAgICog5piv5ZCm5a6e5pe25qCh6aqM77yM6buY6K6k77yaYHRydWVgXG4gICAqIC0gYHRydWVgIOavj+S4gOasoemDveagoemqjFxuICAgKiAtIGBmYWxzZWAg5o+Q5Lqk5pe25qCh6aqMXG4gICAqL1xuICBsaXZlVmFsaWRhdGU/OiBib29sZWFuID0gdHJ1ZTtcbiAgLyoqXG4gICAqIOaMh+WumuihqOWNlSBgYXV0b2NvbXBsZXRlYCDlgLzvvIzpu5jorqTvvJpgb25gXG4gICAqL1xuICBhdXRvY29tcGxldGU/OiAnb24nIHwgJ29mZicgPSBudWxsO1xuICAvKipcbiAgICog5piv5ZCm56uL5Y2z5ZGI546w6ZSZ6K+v6KeG6KeJ77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgZmlyc3RWaXN1YWw/OiBib29sZWFuID0gZmFsc2U7XG4gIC8qKlxuICAgKiDmmK/lkKblj6rlsZXnpLrplJnor6/op4bop4nkuI3mmL7npLrplJnor6/mlofmnKzvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBvbmx5VmlzdWFsPzogYm9vbGVhbiA9IGZhbHNlO1xuICAvKipcbiAgICog6Ieq5a6a5LmJ6YCa55So6ZSZ6K+v5L+h5oGvXG4gICAqL1xuICBlcnJvcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0gRVJST1JTREVGQVVMVDtcbiAgLyoqXG4gICAqIOm7mOiupOWFqOWxgOW4g+WxgFxuICAgKi9cbiAgdWk/OiBTRlVJU2NoZW1hSXRlbTtcbiAgLyoqXG4gICAqIOWFg+e0oOe7hOS7tuWkp+Wwj++8jOeUqOS6jiBgbnpTaXplYCDlgLxcbiAgICovXG4gIHNpemU/OiAnZGVmYXVsdCcgfCAnbGFyZ2UnIHwgJ3NtYWxsJztcbiAgLyoqXG4gICAqIOaMiemSrumjjuagvFxuICAgKi9cbiAgYnV0dG9uPzogU0ZCdXR0b24gPSB7XG4gICAgc3VibWl0X3R5cGU6ICdwcmltYXJ5JyxcbiAgICByZXNldF90eXBlOiAnZGVmYXVsdCcsXG4gIH07XG4gIC8qKlxuICAgKiBkYXRl5bCP6YOo5Lu277yaYHR5cGU9XCJzdHJpbmdcImAg5LiU5LiN5oyH5a6aIGBzY2hlbWEuZm9ybWF0YCDlkowgYHVpLmZvcm1hdGAg5pe25pel5pyf5qC85byP77yM6buY6K6k77yaYFlZWVktTU0tREQgSEg6bW06c3NgXG4gICAqL1xuICB1aURhdGVTdHJpbmdGb3JtYXQ/OiBzdHJpbmcgPSAnWVlZWS1NTS1ERCBISDptbTpzcyc7XG4gIC8qKlxuICAgKiBkYXRl5bCP6YOo5Lu277yaYHR5cGU9XCJudW1iZXJcImAg5LiU5LiN5oyH5a6aIGBzY2hlbWEuZm9ybWF0YCDlkowgYHVpLmZvcm1hdGAg5pe25pel5pyf5qC85byP77yM6buY6K6k77yaYHhgIDEz5L2NVW5peCBUaW1lc3RhbXBcbiAgICovXG4gIHVpRGF0ZU51bWJlckZvcm1hdD86IHN0cmluZyA9ICd4JztcbiAgLyoqXG4gICAqIHRpbWXlsI/pg6jku7bvvJpgdHlwZT1cInN0cmluZ1wiYCDkuJTkuI3mjIflrpogYHNjaGVtYS5mb3JtYXRgIOWSjCBgdWkuZm9ybWF0YCDml7bml6XmnJ/moLzlvI/vvIzpu5jorqTvvJpgSEg6bW06c3NgXG4gICAqL1xuICB1aVRpbWVTdHJpbmdGb3JtYXQ/OiBzdHJpbmcgPSAnSEg6bW06c3MnO1xuICAvKipcbiAgICogdGltZeWwj+mDqOS7tu+8mmB0eXBlPVwibnVtYmVyXCJgIOS4lOS4jeaMh+WumiBgc2NoZW1hLmZvcm1hdGAg5ZKMIGB1aS5mb3JtYXRgIOaXtuaXpeacn+agvOW8j++8jOm7mOiupO+8mmB4YCAxM+S9jVVuaXggVGltZXN0YW1w77yM5pel5pyf57uf5LiA5L2/55SoIGAxOTcwLTAxLTAxYFxuICAgKi9cbiAgdWlUaW1lTnVtYmVyRm9ybWF0Pzogc3RyaW5nID0gJ3gnO1xufVxuIl19