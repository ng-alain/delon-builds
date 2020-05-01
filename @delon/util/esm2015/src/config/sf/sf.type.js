/**
 * @fileoverview added by tsickle
 * Generated from: src/config/sf/sf.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function AlainSFConfigFormatMap() { }
if (false) {
    /* Skipping unnamed member:
    'date-time': { widget?: string; showTime?: boolean; format?: string };*/
    /** @type {?} */
    AlainSFConfigFormatMap.prototype.date;
    /* Skipping unnamed member:
    'full-date': { widget?: string; format?: string };*/
    /** @type {?} */
    AlainSFConfigFormatMap.prototype.time;
    /* Skipping unnamed member:
    'full-time': { widget?: string; format?: string };*/
    /** @type {?} */
    AlainSFConfigFormatMap.prototype.week;
    /** @type {?} */
    AlainSFConfigFormatMap.prototype.month;
    /** @type {?} */
    AlainSFConfigFormatMap.prototype.uri;
    /** @type {?} */
    AlainSFConfigFormatMap.prototype.email;
    /** @type {?} */
    AlainSFConfigFormatMap.prototype.color;
    /* Skipping unnamed member:
    '': { widget?: string };*/
}
/**
 * @record
 */
export function AlainSFConfig() { }
if (false) {
    /** @type {?|undefined} */
    AlainSFConfig.prototype.formatMap;
    /**
     * 是否忽略某些数据类型校验 `ERRORSDEFAULT`，默认：`[ 'type', 'enum' ]`
     *
     * - `type` 限定 Schema 中 `type` 类型
     * - `enum` 限定应当是预设定的枚举值之一
     * @type {?|undefined}
     */
    AlainSFConfig.prototype.ingoreKeywords;
    /**
     * [ajv](http://epoberezkin.github.io/ajv/#options) 参数
     * @type {?|undefined}
     */
    AlainSFConfig.prototype.ajv;
    /**
     * 是否实时校验，默认：`true`
     * - `true` 每一次都校验
     * - `false` 提交时校验
     * @type {?|undefined}
     */
    AlainSFConfig.prototype.liveValidate;
    /**
     * 指定表单 `autocomplete` 值，默认：`on`
     * @type {?|undefined}
     */
    AlainSFConfig.prototype.autocomplete;
    /**
     * 是否立即呈现错误视觉，默认：`false`
     * @type {?|undefined}
     */
    AlainSFConfig.prototype.firstVisual;
    /**
     * 是否只展示错误视觉不显示错误文本，默认：`false`
     * @type {?|undefined}
     */
    AlainSFConfig.prototype.onlyVisual;
    /**
     * 自定义通用错误信息，默认：`{}`
     * @type {?|undefined}
     */
    AlainSFConfig.prototype.errors;
    /**
     * 默认全局布局，类型为：`SFUISchemaItem`，使用时加上可智能提示，例如：
     *
     * ```ts
     * ui: {} as SFUISchemaItem
     * ```
     * @type {?|undefined}
     */
    AlainSFConfig.prototype.ui;
    /**
     * 元素组件大小，用于 `nzSize` 值
     * @type {?|undefined}
     */
    AlainSFConfig.prototype.size;
    /**
     * 按钮风格，类型为：`SFButton`，使用时加上可智能提示，例如：
     *
     * ```ts
     * button: {} as SFButton
     * ```
     * @type {?|undefined}
     */
    AlainSFConfig.prototype.button;
    /**
     * date小部件：`type="string"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`yyyy-MM-dd HH:mm:ss`
     * @type {?|undefined}
     */
    AlainSFConfig.prototype.uiDateStringFormat;
    /**
     * date小部件：`type="number"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`T` 13位 Unix Timestamp
     * @type {?|undefined}
     */
    AlainSFConfig.prototype.uiDateNumberFormat;
    /**
     * time小部件：`type="string"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`HH:mm:ss`
     * @type {?|undefined}
     */
    AlainSFConfig.prototype.uiTimeStringFormat;
    /**
     * time小部件：`type="number"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`T` 13位 Unix Timestamp，日期统一使用 `1970-01-01`
     * @type {?|undefined}
     */
    AlainSFConfig.prototype.uiTimeNumberFormat;
    /**
     * 指定 `format: 'email'` 的默认Email后缀，默认：`['qq.com', '163.com', 'gmail.com', '126.com', 'aliyun.com']`
     * @type {?|undefined}
     */
    AlainSFConfig.prototype.uiEmailSuffixes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YudHlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi91dGlsLyIsInNvdXJjZXMiOlsic3JjL2NvbmZpZy9zZi9zZi50eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsNENBWUM7Ozs7O0lBVkMsc0NBQTJDOzs7O0lBRTNDLHNDQUEyQzs7OztJQUUzQyxzQ0FBMEQ7O0lBQzFELHVDQUEyRDs7SUFDM0QscUNBQXlCOztJQUN6Qix1Q0FBMEM7O0lBQzFDLHVDQUEwQzs7Ozs7OztBQUk1QyxtQ0EyRUM7OztJQTFFQyxrQ0FBbUM7Ozs7Ozs7O0lBT25DLHVDQUEwQjs7Ozs7SUFJMUIsNEJBQVU7Ozs7Ozs7SUFNVixxQ0FBdUI7Ozs7O0lBSXZCLHFDQUFtQzs7Ozs7SUFJbkMsb0NBQXNCOzs7OztJQUl0QixtQ0FBcUI7Ozs7O0lBSXJCLCtCQUFtQzs7Ozs7Ozs7O0lBUW5DLDJCQUFTOzs7OztJQUlULDZCQUFxQzs7Ozs7Ozs7O0lBUXJDLCtCQUFhOzs7OztJQUliLDJDQUE0Qjs7Ozs7SUFJNUIsMkNBQTRCOzs7OztJQUk1QiwyQ0FBNEI7Ozs7O0lBSTVCLDJDQUE0Qjs7Ozs7SUFJNUIsd0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBBbGFpblNGQ29uZmlnRm9ybWF0TWFwIHtcbiAgJ2RhdGUtdGltZSc6IHsgd2lkZ2V0Pzogc3RyaW5nOyBzaG93VGltZT86IGJvb2xlYW47IGZvcm1hdD86IHN0cmluZyB9O1xuICBkYXRlOiB7IHdpZGdldD86IHN0cmluZzsgZm9ybWF0Pzogc3RyaW5nIH07XG4gICdmdWxsLWRhdGUnOiB7IHdpZGdldD86IHN0cmluZzsgZm9ybWF0Pzogc3RyaW5nIH07XG4gIHRpbWU6IHsgd2lkZ2V0Pzogc3RyaW5nOyBmb3JtYXQ/OiBzdHJpbmcgfTtcbiAgJ2Z1bGwtdGltZSc6IHsgd2lkZ2V0Pzogc3RyaW5nOyBmb3JtYXQ/OiBzdHJpbmcgfTtcbiAgd2VlazogeyB3aWRnZXQ/OiBzdHJpbmc7IG1vZGU/OiBzdHJpbmc7IGZvcm1hdD86IHN0cmluZyB9O1xuICBtb250aDogeyB3aWRnZXQ/OiBzdHJpbmc7IG1vZGU/OiBzdHJpbmc7IGZvcm1hdD86IHN0cmluZyB9O1xuICB1cmk6IHsgd2lkZ2V0Pzogc3RyaW5nIH07XG4gIGVtYWlsOiB7IHdpZGdldD86IHN0cmluZzsgdHlwZT86IHN0cmluZyB9O1xuICBjb2xvcjogeyB3aWRnZXQ/OiBzdHJpbmc7IHR5cGU/OiBzdHJpbmcgfTtcbiAgJyc6IHsgd2lkZ2V0Pzogc3RyaW5nIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxhaW5TRkNvbmZpZyB7XG4gIGZvcm1hdE1hcD86IEFsYWluU0ZDb25maWdGb3JtYXRNYXA7XG4gIC8qKlxuICAgKiDmmK/lkKblv73nlaXmn5DkupvmlbDmja7nsbvlnovmoKHpqowgYEVSUk9SU0RFRkFVTFRg77yM6buY6K6k77yaYFsgJ3R5cGUnLCAnZW51bScgXWBcbiAgICpcbiAgICogLSBgdHlwZWAg6ZmQ5a6aIFNjaGVtYSDkuK0gYHR5cGVgIOexu+Wei1xuICAgKiAtIGBlbnVtYCDpmZDlrprlupTlvZPmmK/pooTorr7lrprnmoTmnprkuL7lgLzkuYvkuIBcbiAgICovXG4gIGluZ29yZUtleXdvcmRzPzogc3RyaW5nW107XG4gIC8qKlxuICAgKiBbYWp2XShodHRwOi8vZXBvYmVyZXpraW4uZ2l0aHViLmlvL2Fqdi8jb3B0aW9ucykg5Y+C5pWwXG4gICAqL1xuICBhanY/OiBhbnk7XG4gIC8qKlxuICAgKiDmmK/lkKblrp7ml7bmoKHpqozvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICogLSBgdHJ1ZWAg5q+P5LiA5qyh6YO95qCh6aqMXG4gICAqIC0gYGZhbHNlYCDmj5DkuqTml7bmoKHpqoxcbiAgICovXG4gIGxpdmVWYWxpZGF0ZT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmjIflrprooajljZUgYGF1dG9jb21wbGV0ZWAg5YC877yM6buY6K6k77yaYG9uYFxuICAgKi9cbiAgYXV0b2NvbXBsZXRlPzogJ29uJyB8ICdvZmYnIHwgbnVsbDtcbiAgLyoqXG4gICAqIOaYr+WQpueri+WNs+WRiOeOsOmUmeivr+inhuinie+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIGZpcnN0VmlzdWFsPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaYr+WQpuWPquWxleekuumUmeivr+inhuinieS4jeaYvuekuumUmeivr+aWh+acrO+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIG9ubHlWaXN1YWw/OiBib29sZWFuO1xuICAvKipcbiAgICog6Ieq5a6a5LmJ6YCa55So6ZSZ6K+v5L+h5oGv77yM6buY6K6k77yaYHt9YFxuICAgKi9cbiAgZXJyb3JzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgLyoqXG4gICAqIOm7mOiupOWFqOWxgOW4g+WxgO+8jOexu+Wei+S4uu+8mmBTRlVJU2NoZW1hSXRlbWDvvIzkvb/nlKjml7bliqDkuIrlj6/mmbrog73mj5DnpLrvvIzkvovlpoLvvJpcbiAgICpcbiAgICogYGBgdHNcbiAgICogdWk6IHt9IGFzIFNGVUlTY2hlbWFJdGVtXG4gICAqIGBgYFxuICAgKi9cbiAgdWk/OiBhbnk7XG4gIC8qKlxuICAgKiDlhYPntKDnu4Tku7blpKflsI/vvIznlKjkuo4gYG56U2l6ZWAg5YC8XG4gICAqL1xuICBzaXplPzogJ2RlZmF1bHQnIHwgJ2xhcmdlJyB8ICdzbWFsbCc7XG4gIC8qKlxuICAgKiDmjInpkq7po47moLzvvIznsbvlnovkuLrvvJpgU0ZCdXR0b25g77yM5L2/55So5pe25Yqg5LiK5Y+v5pm66IO95o+Q56S677yM5L6L5aaC77yaXG4gICAqXG4gICAqIGBgYHRzXG4gICAqIGJ1dHRvbjoge30gYXMgU0ZCdXR0b25cbiAgICogYGBgXG4gICAqL1xuICBidXR0b24/OiBhbnk7XG4gIC8qKlxuICAgKiBkYXRl5bCP6YOo5Lu277yaYHR5cGU9XCJzdHJpbmdcImAg5LiU5LiN5oyH5a6aIGBzY2hlbWEuZm9ybWF0YCDlkowgYHVpLmZvcm1hdGAg5pe25pel5pyf5qC85byP77yM6buY6K6k77yaYHl5eXktTU0tZGQgSEg6bW06c3NgXG4gICAqL1xuICB1aURhdGVTdHJpbmdGb3JtYXQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBkYXRl5bCP6YOo5Lu277yaYHR5cGU9XCJudW1iZXJcImAg5LiU5LiN5oyH5a6aIGBzY2hlbWEuZm9ybWF0YCDlkowgYHVpLmZvcm1hdGAg5pe25pel5pyf5qC85byP77yM6buY6K6k77yaYFRgIDEz5L2NIFVuaXggVGltZXN0YW1wXG4gICAqL1xuICB1aURhdGVOdW1iZXJGb3JtYXQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiB0aW1l5bCP6YOo5Lu277yaYHR5cGU9XCJzdHJpbmdcImAg5LiU5LiN5oyH5a6aIGBzY2hlbWEuZm9ybWF0YCDlkowgYHVpLmZvcm1hdGAg5pe25pel5pyf5qC85byP77yM6buY6K6k77yaYEhIOm1tOnNzYFxuICAgKi9cbiAgdWlUaW1lU3RyaW5nRm9ybWF0Pzogc3RyaW5nO1xuICAvKipcbiAgICogdGltZeWwj+mDqOS7tu+8mmB0eXBlPVwibnVtYmVyXCJgIOS4lOS4jeaMh+WumiBgc2NoZW1hLmZvcm1hdGAg5ZKMIGB1aS5mb3JtYXRgIOaXtuaXpeacn+agvOW8j++8jOm7mOiupO+8mmBUYCAxM+S9jSBVbml4IFRpbWVzdGFtcO+8jOaXpeacn+e7n+S4gOS9v+eUqCBgMTk3MC0wMS0wMWBcbiAgICovXG4gIHVpVGltZU51bWJlckZvcm1hdD86IHN0cmluZztcbiAgLyoqXG4gICAqIOaMh+WumiBgZm9ybWF0OiAnZW1haWwnYCDnmoTpu5jorqRFbWFpbOWQjue8gO+8jOm7mOiupO+8mmBbJ3FxLmNvbScsICcxNjMuY29tJywgJ2dtYWlsLmNvbScsICcxMjYuY29tJywgJ2FsaXl1bi5jb20nXWBcbiAgICovXG4gIHVpRW1haWxTdWZmaXhlcz86IHN0cmluZ1tdO1xufVxuIl19