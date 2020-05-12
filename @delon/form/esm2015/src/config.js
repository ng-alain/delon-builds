/**
 * @fileoverview added by tsickle
 * Generated from: src/config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class DelonFormConfig {
    constructor() {
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
}
DelonFormConfig.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ DelonFormConfig.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DelonFormConfig_Factory() { return new DelonFormConfig(); }, token: DelonFormConfig, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0MsTUFBTSxPQUFPLGVBQWU7SUFENUI7Ozs7Ozs7UUFRRSxtQkFBYyxHQUFjLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7UUFVN0MsaUJBQVksR0FBYSxJQUFJLENBQUM7Ozs7UUFJOUIsaUJBQVksR0FBeUIsSUFBSSxDQUFDOzs7O1FBSTFDLGdCQUFXLEdBQWEsS0FBSyxDQUFDOzs7O1FBSTlCLGVBQVUsR0FBYSxLQUFLLENBQUM7Ozs7UUFJN0IsV0FBTSxHQUErQixFQUFFLENBQUM7Ozs7UUFZeEMsV0FBTSxHQUFjO1lBQ2xCLFdBQVcsRUFBRSxTQUFTO1lBQ3RCLFVBQVUsRUFBRSxTQUFTO1NBQ3RCLENBQUM7Ozs7UUFJRix1QkFBa0IsR0FBWSxxQkFBcUIsQ0FBQzs7OztRQUlwRCx1QkFBa0IsR0FBWSxHQUFHLENBQUM7Ozs7UUFJbEMsdUJBQWtCLEdBQVksVUFBVSxDQUFDOzs7O1FBSXpDLHVCQUFrQixHQUFZLEdBQUcsQ0FBQzs7OztRQUlsQyxvQkFBZSxHQUFjLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDO0tBQzFGOzs7WUF0RUEsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7Ozs7Ozs7Ozs7SUFRaEMseUNBQTZDOzs7OztJQUk3Qyw4QkFBVTs7Ozs7OztJQU1WLHVDQUE4Qjs7Ozs7SUFJOUIsdUNBQTBDOzs7OztJQUkxQyxzQ0FBOEI7Ozs7O0lBSTlCLHFDQUE2Qjs7Ozs7SUFJN0IsaUNBQXdDOzs7OztJQUl4Qyw2QkFBb0I7Ozs7O0lBSXBCLCtCQUFxQzs7Ozs7SUFJckMsaUNBR0U7Ozs7O0lBSUYsNkNBQW9EOzs7OztJQUlwRCw2Q0FBa0M7Ozs7O0lBSWxDLDZDQUF5Qzs7Ozs7SUFJekMsNkNBQWtDOzs7OztJQUlsQywwQ0FBeUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTRkJ1dHRvbiB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIERlbG9uRm9ybUNvbmZpZyB7XG4gIC8qKlxuICAgKiDmmK/lkKblv73nlaXmn5DkupvmlbDmja7nsbvlnovmoKHpqowgYEVSUk9SU0RFRkFVTFRg77yM6buY6K6k77yaYFsgJ3R5cGUnLCAnZW51bScgXWBcbiAgICpcbiAgICogLSBgdHlwZWAg6ZmQ5a6aIFNjaGVtYSDkuK0gYHR5cGVgIOexu+Wei1xuICAgKiAtIGBlbnVtYCDpmZDlrprlupTlvZPmmK/pooTorr7lrprnmoTmnprkuL7lgLzkuYvkuIBcbiAgICovXG4gIGluZ29yZUtleXdvcmRzPzogc3RyaW5nW10gPSBbJ3R5cGUnLCAnZW51bSddO1xuICAvKipcbiAgICogW2Fqdl0oaHR0cDovL2Vwb2JlcmV6a2luLmdpdGh1Yi5pby9hanYvI29wdGlvbnMpIOWPguaVsFxuICAgKi9cbiAgYWp2PzogYW55O1xuICAvKipcbiAgICog5piv5ZCm5a6e5pe25qCh6aqM77yM6buY6K6k77yaYHRydWVgXG4gICAqIC0gYHRydWVgIOavj+S4gOasoemDveagoemqjFxuICAgKiAtIGBmYWxzZWAg5o+Q5Lqk5pe25qCh6aqMXG4gICAqL1xuICBsaXZlVmFsaWRhdGU/OiBib29sZWFuID0gdHJ1ZTtcbiAgLyoqXG4gICAqIOaMh+WumuihqOWNlSBgYXV0b2NvbXBsZXRlYCDlgLzvvIzpu5jorqTvvJpgb25gXG4gICAqL1xuICBhdXRvY29tcGxldGU/OiAnb24nIHwgJ29mZicgfCBudWxsID0gbnVsbDtcbiAgLyoqXG4gICAqIOaYr+WQpueri+WNs+WRiOeOsOmUmeivr+inhuinie+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIGZpcnN0VmlzdWFsPzogYm9vbGVhbiA9IGZhbHNlO1xuICAvKipcbiAgICog5piv5ZCm5Y+q5bGV56S66ZSZ6K+v6KeG6KeJ5LiN5pi+56S66ZSZ6K+v5paH5pys77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgb25seVZpc3VhbD86IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIOiHquWumuS5iemAmueUqOmUmeivr+S/oeaBr1xuICAgKi9cbiAgZXJyb3JzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuICAvKipcbiAgICog6buY6K6k5YWo5bGA5biD5bGAXG4gICAqL1xuICB1aT86IFNGVUlTY2hlbWFJdGVtO1xuICAvKipcbiAgICog5YWD57Sg57uE5Lu25aSn5bCP77yM55So5LqOIGBuelNpemVgIOWAvFxuICAgKi9cbiAgc2l6ZT86ICdkZWZhdWx0JyB8ICdsYXJnZScgfCAnc21hbGwnO1xuICAvKipcbiAgICog5oyJ6ZKu6aOO5qC8XG4gICAqL1xuICBidXR0b24/OiBTRkJ1dHRvbiA9IHtcbiAgICBzdWJtaXRfdHlwZTogJ3ByaW1hcnknLFxuICAgIHJlc2V0X3R5cGU6ICdkZWZhdWx0JyxcbiAgfTtcbiAgLyoqXG4gICAqIGRhdGXlsI/pg6jku7bvvJpgdHlwZT1cInN0cmluZ1wiYCDkuJTkuI3mjIflrpogYHNjaGVtYS5mb3JtYXRgIOWSjCBgdWkuZm9ybWF0YCDml7bml6XmnJ/moLzlvI/vvIzpu5jorqTvvJpgWVlZWS1NTS1ERCBISDptbTpzc2BcbiAgICovXG4gIHVpRGF0ZVN0cmluZ0Zvcm1hdD86IHN0cmluZyA9ICdZWVlZLU1NLUREIEhIOm1tOnNzJztcbiAgLyoqXG4gICAqIGRhdGXlsI/pg6jku7bvvJpgdHlwZT1cIm51bWJlclwiYCDkuJTkuI3mjIflrpogYHNjaGVtYS5mb3JtYXRgIOWSjCBgdWkuZm9ybWF0YCDml7bml6XmnJ/moLzlvI/vvIzpu5jorqTvvJpgeGAgMTPkvY1Vbml4IFRpbWVzdGFtcFxuICAgKi9cbiAgdWlEYXRlTnVtYmVyRm9ybWF0Pzogc3RyaW5nID0gJ3gnO1xuICAvKipcbiAgICogdGltZeWwj+mDqOS7tu+8mmB0eXBlPVwic3RyaW5nXCJgIOS4lOS4jeaMh+WumiBgc2NoZW1hLmZvcm1hdGAg5ZKMIGB1aS5mb3JtYXRgIOaXtuaXpeacn+agvOW8j++8jOm7mOiupO+8mmBISDptbTpzc2BcbiAgICovXG4gIHVpVGltZVN0cmluZ0Zvcm1hdD86IHN0cmluZyA9ICdISDptbTpzcyc7XG4gIC8qKlxuICAgKiB0aW1l5bCP6YOo5Lu277yaYHR5cGU9XCJudW1iZXJcImAg5LiU5LiN5oyH5a6aIGBzY2hlbWEuZm9ybWF0YCDlkowgYHVpLmZvcm1hdGAg5pe25pel5pyf5qC85byP77yM6buY6K6k77yaYHhgIDEz5L2NVW5peCBUaW1lc3RhbXDvvIzml6XmnJ/nu5/kuIDkvb/nlKggYDE5NzAtMDEtMDFgXG4gICAqL1xuICB1aVRpbWVOdW1iZXJGb3JtYXQ/OiBzdHJpbmcgPSAneCc7XG4gIC8qKlxuICAgKiDmjIflrpogYGZvcm1hdDogJ2VtYWlsJ2Ag55qE6buY6K6kRW1haWzlkI7nvIBcbiAgICovXG4gIHVpRW1haWxTdWZmaXhlcz86IHN0cmluZ1tdID0gWydxcS5jb20nLCAnMTYzLmNvbScsICdnbWFpbC5jb20nLCAnMTI2LmNvbScsICdhbGl5dW4uY29tJ107XG59XG4iXX0=