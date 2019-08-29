/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszQyxNQUFNLE9BQU8sZUFBZTtJQUQ1Qjs7Ozs7OztRQVFFLG1CQUFjLEdBQWMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7Ozs7OztRQVU3QyxpQkFBWSxHQUFhLElBQUksQ0FBQzs7OztRQUk5QixpQkFBWSxHQUF5QixJQUFJLENBQUM7Ozs7UUFJMUMsZ0JBQVcsR0FBYSxLQUFLLENBQUM7Ozs7UUFJOUIsZUFBVSxHQUFhLEtBQUssQ0FBQzs7OztRQUk3QixXQUFNLEdBQStCLEVBQUUsQ0FBQzs7OztRQVl4QyxXQUFNLEdBQWM7WUFDbEIsV0FBVyxFQUFFLFNBQVM7WUFDdEIsVUFBVSxFQUFFLFNBQVM7U0FDdEIsQ0FBQzs7OztRQUlGLHVCQUFrQixHQUFZLHFCQUFxQixDQUFDOzs7O1FBSXBELHVCQUFrQixHQUFZLEdBQUcsQ0FBQzs7OztRQUlsQyx1QkFBa0IsR0FBWSxVQUFVLENBQUM7Ozs7UUFJekMsdUJBQWtCLEdBQVksR0FBRyxDQUFDOzs7O1FBSWxDLG9CQUFlLEdBQWMsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUM7S0FDMUY7OztZQXRFQSxVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7Ozs7Ozs7OztJQVFoQyx5Q0FBNkM7Ozs7O0lBSTdDLDhCQUFVOzs7Ozs7O0lBTVYsdUNBQThCOzs7OztJQUk5Qix1Q0FBMEM7Ozs7O0lBSTFDLHNDQUE4Qjs7Ozs7SUFJOUIscUNBQTZCOzs7OztJQUk3QixpQ0FBd0M7Ozs7O0lBSXhDLDZCQUFvQjs7Ozs7SUFJcEIsK0JBQXFDOzs7OztJQUlyQyxpQ0FHRTs7Ozs7SUFJRiw2Q0FBb0Q7Ozs7O0lBSXBELDZDQUFrQzs7Ozs7SUFJbEMsNkNBQXlDOzs7OztJQUl6Qyw2Q0FBa0M7Ozs7O0lBSWxDLDBDQUF5RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNGQnV0dG9uIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuL3NjaGVtYS91aSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgRGVsb25Gb3JtQ29uZmlnIHtcbiAgLyoqXG4gICAqIOaYr+WQpuW/veeVpeafkOS6m+aVsOaNruexu+Wei+agoemqjCBgRVJST1JTREVGQVVMVGDvvIzpu5jorqTvvJpgWyAndHlwZScsICdlbnVtJyBdYFxuICAgKlxuICAgKiAtIGB0eXBlYCDpmZDlrpogU2NoZW1hIOS4rSBgdHlwZWAg57G75Z6LXG4gICAqIC0gYGVudW1gIOmZkOWumuW6lOW9k+aYr+mihOiuvuWumueahOaemuS4vuWAvOS5i+S4gFxuICAgKi9cbiAgaW5nb3JlS2V5d29yZHM/OiBzdHJpbmdbXSA9IFsndHlwZScsICdlbnVtJ107XG4gIC8qKlxuICAgKiBbYWp2XShodHRwOi8vZXBvYmVyZXpraW4uZ2l0aHViLmlvL2Fqdi8jb3B0aW9ucykg5Y+C5pWwXG4gICAqL1xuICBhanY/OiBhbnk7XG4gIC8qKlxuICAgKiDmmK/lkKblrp7ml7bmoKHpqozvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICogLSBgdHJ1ZWAg5q+P5LiA5qyh6YO95qCh6aqMXG4gICAqIC0gYGZhbHNlYCDmj5DkuqTml7bmoKHpqoxcbiAgICovXG4gIGxpdmVWYWxpZGF0ZT86IGJvb2xlYW4gPSB0cnVlO1xuICAvKipcbiAgICog5oyH5a6a6KGo5Y2VIGBhdXRvY29tcGxldGVgIOWAvO+8jOm7mOiupO+8mmBvbmBcbiAgICovXG4gIGF1dG9jb21wbGV0ZT86ICdvbicgfCAnb2ZmJyB8IG51bGwgPSBudWxsO1xuICAvKipcbiAgICog5piv5ZCm56uL5Y2z5ZGI546w6ZSZ6K+v6KeG6KeJ77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgZmlyc3RWaXN1YWw/OiBib29sZWFuID0gZmFsc2U7XG4gIC8qKlxuICAgKiDmmK/lkKblj6rlsZXnpLrplJnor6/op4bop4nkuI3mmL7npLrplJnor6/mlofmnKzvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBvbmx5VmlzdWFsPzogYm9vbGVhbiA9IGZhbHNlO1xuICAvKipcbiAgICog6Ieq5a6a5LmJ6YCa55So6ZSZ6K+v5L+h5oGvXG4gICAqL1xuICBlcnJvcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gIC8qKlxuICAgKiDpu5jorqTlhajlsYDluIPlsYBcbiAgICovXG4gIHVpPzogU0ZVSVNjaGVtYUl0ZW07XG4gIC8qKlxuICAgKiDlhYPntKDnu4Tku7blpKflsI/vvIznlKjkuo4gYG56U2l6ZWAg5YC8XG4gICAqL1xuICBzaXplPzogJ2RlZmF1bHQnIHwgJ2xhcmdlJyB8ICdzbWFsbCc7XG4gIC8qKlxuICAgKiDmjInpkq7po47moLxcbiAgICovXG4gIGJ1dHRvbj86IFNGQnV0dG9uID0ge1xuICAgIHN1Ym1pdF90eXBlOiAncHJpbWFyeScsXG4gICAgcmVzZXRfdHlwZTogJ2RlZmF1bHQnLFxuICB9O1xuICAvKipcbiAgICogZGF0ZeWwj+mDqOS7tu+8mmB0eXBlPVwic3RyaW5nXCJgIOS4lOS4jeaMh+WumiBgc2NoZW1hLmZvcm1hdGAg5ZKMIGB1aS5mb3JtYXRgIOaXtuaXpeacn+agvOW8j++8jOm7mOiupO+8mmBZWVlZLU1NLUREIEhIOm1tOnNzYFxuICAgKi9cbiAgdWlEYXRlU3RyaW5nRm9ybWF0Pzogc3RyaW5nID0gJ1lZWVktTU0tREQgSEg6bW06c3MnO1xuICAvKipcbiAgICogZGF0ZeWwj+mDqOS7tu+8mmB0eXBlPVwibnVtYmVyXCJgIOS4lOS4jeaMh+WumiBgc2NoZW1hLmZvcm1hdGAg5ZKMIGB1aS5mb3JtYXRgIOaXtuaXpeacn+agvOW8j++8jOm7mOiupO+8mmB4YCAxM+S9jVVuaXggVGltZXN0YW1wXG4gICAqL1xuICB1aURhdGVOdW1iZXJGb3JtYXQ/OiBzdHJpbmcgPSAneCc7XG4gIC8qKlxuICAgKiB0aW1l5bCP6YOo5Lu277yaYHR5cGU9XCJzdHJpbmdcImAg5LiU5LiN5oyH5a6aIGBzY2hlbWEuZm9ybWF0YCDlkowgYHVpLmZvcm1hdGAg5pe25pel5pyf5qC85byP77yM6buY6K6k77yaYEhIOm1tOnNzYFxuICAgKi9cbiAgdWlUaW1lU3RyaW5nRm9ybWF0Pzogc3RyaW5nID0gJ0hIOm1tOnNzJztcbiAgLyoqXG4gICAqIHRpbWXlsI/pg6jku7bvvJpgdHlwZT1cIm51bWJlclwiYCDkuJTkuI3mjIflrpogYHNjaGVtYS5mb3JtYXRgIOWSjCBgdWkuZm9ybWF0YCDml7bml6XmnJ/moLzlvI/vvIzpu5jorqTvvJpgeGAgMTPkvY1Vbml4IFRpbWVzdGFtcO+8jOaXpeacn+e7n+S4gOS9v+eUqCBgMTk3MC0wMS0wMWBcbiAgICovXG4gIHVpVGltZU51bWJlckZvcm1hdD86IHN0cmluZyA9ICd4JztcbiAgLyoqXG4gICAqIOaMh+WumiBgZm9ybWF0OiAnZW1haWwnYCDnmoTpu5jorqRFbWFpbOWQjue8gFxuICAgKi9cbiAgdWlFbWFpbFN1ZmZpeGVzPzogc3RyaW5nW10gPSBbJ3FxLmNvbScsICcxNjMuY29tJywgJ2dtYWlsLmNvbScsICcxMjYuY29tJywgJ2FsaXl1bi5jb20nXTtcbn1cbiJdfQ==