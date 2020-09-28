/**
 * @fileoverview added by tsickle
 * Generated from: src/config/sf/sf.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YudHlwZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92c3RzL3dvcmsvMS9zL3BhY2thZ2VzL3V0aWwvIiwic291cmNlcyI6WyJzcmMvY29uZmlnL3NmL3NmLnR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSw0Q0FZQzs7Ozs7SUFWQyxzQ0FBMkM7Ozs7SUFFM0Msc0NBQTJDOzs7O0lBRTNDLHNDQUEwRDs7SUFDMUQsdUNBQTJEOztJQUMzRCxxQ0FBeUI7O0lBQ3pCLHVDQUEwQzs7SUFDMUMsdUNBQTBDOzs7Ozs7O0FBSTVDLG1DQTJFQzs7O0lBMUVDLGtDQUFtQzs7Ozs7Ozs7SUFPbkMsdUNBQTBCOzs7OztJQUkxQiw0QkFBVTs7Ozs7OztJQU1WLHFDQUF1Qjs7Ozs7SUFJdkIscUNBQW1DOzs7OztJQUluQyxvQ0FBc0I7Ozs7O0lBSXRCLG1DQUFxQjs7Ozs7SUFJckIsK0JBQW1DOzs7Ozs7Ozs7SUFRbkMsMkJBQVM7Ozs7O0lBSVQsNkJBQXFDOzs7Ozs7Ozs7SUFRckMsK0JBQWE7Ozs7O0lBSWIsMkNBQTRCOzs7OztJQUk1QiwyQ0FBNEI7Ozs7O0lBSTVCLDJDQUE0Qjs7Ozs7SUFJNUIsMkNBQTRCOzs7OztJQUk1Qix3Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIEFsYWluU0ZDb25maWdGb3JtYXRNYXAge1xuICAnZGF0ZS10aW1lJzogeyB3aWRnZXQ/OiBzdHJpbmc7IHNob3dUaW1lPzogYm9vbGVhbjsgZm9ybWF0Pzogc3RyaW5nIH07XG4gIGRhdGU6IHsgd2lkZ2V0Pzogc3RyaW5nOyBmb3JtYXQ/OiBzdHJpbmcgfTtcbiAgJ2Z1bGwtZGF0ZSc6IHsgd2lkZ2V0Pzogc3RyaW5nOyBmb3JtYXQ/OiBzdHJpbmcgfTtcbiAgdGltZTogeyB3aWRnZXQ/OiBzdHJpbmc7IGZvcm1hdD86IHN0cmluZyB9O1xuICAnZnVsbC10aW1lJzogeyB3aWRnZXQ/OiBzdHJpbmc7IGZvcm1hdD86IHN0cmluZyB9O1xuICB3ZWVrOiB7IHdpZGdldD86IHN0cmluZzsgbW9kZT86IHN0cmluZzsgZm9ybWF0Pzogc3RyaW5nIH07XG4gIG1vbnRoOiB7IHdpZGdldD86IHN0cmluZzsgbW9kZT86IHN0cmluZzsgZm9ybWF0Pzogc3RyaW5nIH07XG4gIHVyaTogeyB3aWRnZXQ/OiBzdHJpbmcgfTtcbiAgZW1haWw6IHsgd2lkZ2V0Pzogc3RyaW5nOyB0eXBlPzogc3RyaW5nIH07XG4gIGNvbG9yOiB7IHdpZGdldD86IHN0cmluZzsgdHlwZT86IHN0cmluZyB9O1xuICAnJzogeyB3aWRnZXQ/OiBzdHJpbmcgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbGFpblNGQ29uZmlnIHtcbiAgZm9ybWF0TWFwPzogQWxhaW5TRkNvbmZpZ0Zvcm1hdE1hcDtcbiAgLyoqXG4gICAqIOaYr+WQpuW/veeVpeafkOS6m+aVsOaNruexu+Wei+agoemqjCBgRVJST1JTREVGQVVMVGDvvIzpu5jorqTvvJpgWyAndHlwZScsICdlbnVtJyBdYFxuICAgKlxuICAgKiAtIGB0eXBlYCDpmZDlrpogU2NoZW1hIOS4rSBgdHlwZWAg57G75Z6LXG4gICAqIC0gYGVudW1gIOmZkOWumuW6lOW9k+aYr+mihOiuvuWumueahOaemuS4vuWAvOS5i+S4gFxuICAgKi9cbiAgaW5nb3JlS2V5d29yZHM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICAqIFthanZdKGh0dHA6Ly9lcG9iZXJlemtpbi5naXRodWIuaW8vYWp2LyNvcHRpb25zKSDlj4LmlbBcbiAgICovXG4gIGFqdj86IGFueTtcbiAgLyoqXG4gICAqIOaYr+WQpuWunuaXtuagoemqjO+8jOm7mOiupO+8mmB0cnVlYFxuICAgKiAtIGB0cnVlYCDmr4/kuIDmrKHpg73moKHpqoxcbiAgICogLSBgZmFsc2VgIOaPkOS6pOaXtuagoemqjFxuICAgKi9cbiAgbGl2ZVZhbGlkYXRlPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaMh+WumuihqOWNlSBgYXV0b2NvbXBsZXRlYCDlgLzvvIzpu5jorqTvvJpgb25gXG4gICAqL1xuICBhdXRvY29tcGxldGU/OiAnb24nIHwgJ29mZicgfCBudWxsO1xuICAvKipcbiAgICog5piv5ZCm56uL5Y2z5ZGI546w6ZSZ6K+v6KeG6KeJ77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgZmlyc3RWaXN1YWw/OiBib29sZWFuO1xuICAvKipcbiAgICog5piv5ZCm5Y+q5bGV56S66ZSZ6K+v6KeG6KeJ5LiN5pi+56S66ZSZ6K+v5paH5pys77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgb25seVZpc3VhbD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDoh6rlrprkuYnpgJrnlKjplJnor6/kv6Hmga/vvIzpu5jorqTvvJpge31gXG4gICAqL1xuICBlcnJvcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgICog6buY6K6k5YWo5bGA5biD5bGA77yM57G75Z6L5Li677yaYFNGVUlTY2hlbWFJdGVtYO+8jOS9v+eUqOaXtuWKoOS4iuWPr+aZuuiDveaPkOekuu+8jOS+i+Wmgu+8mlxuICAgKlxuICAgKiBgYGB0c1xuICAgKiB1aToge30gYXMgU0ZVSVNjaGVtYUl0ZW1cbiAgICogYGBgXG4gICAqL1xuICB1aT86IGFueTtcbiAgLyoqXG4gICAqIOWFg+e0oOe7hOS7tuWkp+Wwj++8jOeUqOS6jiBgbnpTaXplYCDlgLxcbiAgICovXG4gIHNpemU/OiAnZGVmYXVsdCcgfCAnbGFyZ2UnIHwgJ3NtYWxsJztcbiAgLyoqXG4gICAqIOaMiemSrumjjuagvO+8jOexu+Wei+S4uu+8mmBTRkJ1dHRvbmDvvIzkvb/nlKjml7bliqDkuIrlj6/mmbrog73mj5DnpLrvvIzkvovlpoLvvJpcbiAgICpcbiAgICogYGBgdHNcbiAgICogYnV0dG9uOiB7fSBhcyBTRkJ1dHRvblxuICAgKiBgYGBcbiAgICovXG4gIGJ1dHRvbj86IGFueTtcbiAgLyoqXG4gICAqIGRhdGXlsI/pg6jku7bvvJpgdHlwZT1cInN0cmluZ1wiYCDkuJTkuI3mjIflrpogYHNjaGVtYS5mb3JtYXRgIOWSjCBgdWkuZm9ybWF0YCDml7bml6XmnJ/moLzlvI/vvIzpu5jorqTvvJpgeXl5eS1NTS1kZCBISDptbTpzc2BcbiAgICovXG4gIHVpRGF0ZVN0cmluZ0Zvcm1hdD86IHN0cmluZztcbiAgLyoqXG4gICAqIGRhdGXlsI/pg6jku7bvvJpgdHlwZT1cIm51bWJlclwiYCDkuJTkuI3mjIflrpogYHNjaGVtYS5mb3JtYXRgIOWSjCBgdWkuZm9ybWF0YCDml7bml6XmnJ/moLzlvI/vvIzpu5jorqTvvJpgVGAgMTPkvY0gVW5peCBUaW1lc3RhbXBcbiAgICovXG4gIHVpRGF0ZU51bWJlckZvcm1hdD86IHN0cmluZztcbiAgLyoqXG4gICAqIHRpbWXlsI/pg6jku7bvvJpgdHlwZT1cInN0cmluZ1wiYCDkuJTkuI3mjIflrpogYHNjaGVtYS5mb3JtYXRgIOWSjCBgdWkuZm9ybWF0YCDml7bml6XmnJ/moLzlvI/vvIzpu5jorqTvvJpgSEg6bW06c3NgXG4gICAqL1xuICB1aVRpbWVTdHJpbmdGb3JtYXQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiB0aW1l5bCP6YOo5Lu277yaYHR5cGU9XCJudW1iZXJcImAg5LiU5LiN5oyH5a6aIGBzY2hlbWEuZm9ybWF0YCDlkowgYHVpLmZvcm1hdGAg5pe25pel5pyf5qC85byP77yM6buY6K6k77yaYFRgIDEz5L2NIFVuaXggVGltZXN0YW1w77yM5pel5pyf57uf5LiA5L2/55SoIGAxOTcwLTAxLTAxYFxuICAgKi9cbiAgdWlUaW1lTnVtYmVyRm9ybWF0Pzogc3RyaW5nO1xuICAvKipcbiAgICog5oyH5a6aIGBmb3JtYXQ6ICdlbWFpbCdgIOeahOm7mOiupEVtYWls5ZCO57yA77yM6buY6K6k77yaYFsncXEuY29tJywgJzE2My5jb20nLCAnZ21haWwuY29tJywgJzEyNi5jb20nLCAnYWxpeXVuLmNvbSddYFxuICAgKi9cbiAgdWlFbWFpbFN1ZmZpeGVzPzogc3RyaW5nW107XG59XG4iXX0=