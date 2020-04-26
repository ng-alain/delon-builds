/**
 * @fileoverview added by tsickle
 * Generated from: src/config/sf/sf.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function AlainSFConfig() { }
if (false) {
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
     * date小部件：`type="number"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`x` 13位Unix Timestamp
     * @type {?|undefined}
     */
    AlainSFConfig.prototype.uiDateNumberFormat;
    /**
     * time小部件：`type="string"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`HH:mm:ss`
     * @type {?|undefined}
     */
    AlainSFConfig.prototype.uiTimeStringFormat;
    /**
     * time小部件：`type="number"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`x` 13位Unix Timestamp，日期统一使用 `1970-01-01`
     * @type {?|undefined}
     */
    AlainSFConfig.prototype.uiTimeNumberFormat;
    /**
     * 指定 `format: 'email'` 的默认Email后缀，默认：`['qq.com', '163.com', 'gmail.com', '126.com', 'aliyun.com']`
     * @type {?|undefined}
     */
    AlainSFConfig.prototype.uiEmailSuffixes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YudHlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi91dGlsLyIsInNvdXJjZXMiOlsic3JjL2NvbmZpZy9zZi9zZi50eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsbUNBMEVDOzs7Ozs7Ozs7SUFuRUMsdUNBQTBCOzs7OztJQUkxQiw0QkFBVTs7Ozs7OztJQU1WLHFDQUF1Qjs7Ozs7SUFJdkIscUNBQW1DOzs7OztJQUluQyxvQ0FBc0I7Ozs7O0lBSXRCLG1DQUFxQjs7Ozs7SUFJckIsK0JBQW1DOzs7Ozs7Ozs7SUFRbkMsMkJBQVM7Ozs7O0lBSVQsNkJBQXFDOzs7Ozs7Ozs7SUFRckMsK0JBQWE7Ozs7O0lBSWIsMkNBQTRCOzs7OztJQUk1QiwyQ0FBNEI7Ozs7O0lBSTVCLDJDQUE0Qjs7Ozs7SUFJNUIsMkNBQTRCOzs7OztJQUk1Qix3Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIEFsYWluU0ZDb25maWcge1xuICAvKipcbiAgICog5piv5ZCm5b+955Wl5p+Q5Lqb5pWw5o2u57G75Z6L5qCh6aqMIGBFUlJPUlNERUZBVUxUYO+8jOm7mOiupO+8mmBbICd0eXBlJywgJ2VudW0nIF1gXG4gICAqXG4gICAqIC0gYHR5cGVgIOmZkOWumiBTY2hlbWEg5LitIGB0eXBlYCDnsbvlnotcbiAgICogLSBgZW51bWAg6ZmQ5a6a5bqU5b2T5piv6aKE6K6+5a6a55qE5p6a5Li+5YC85LmL5LiAXG4gICAqL1xuICBpbmdvcmVLZXl3b3Jkcz86IHN0cmluZ1tdO1xuICAvKipcbiAgICogW2Fqdl0oaHR0cDovL2Vwb2JlcmV6a2luLmdpdGh1Yi5pby9hanYvI29wdGlvbnMpIOWPguaVsFxuICAgKi9cbiAgYWp2PzogYW55O1xuICAvKipcbiAgICog5piv5ZCm5a6e5pe25qCh6aqM77yM6buY6K6k77yaYHRydWVgXG4gICAqIC0gYHRydWVgIOavj+S4gOasoemDveagoemqjFxuICAgKiAtIGBmYWxzZWAg5o+Q5Lqk5pe25qCh6aqMXG4gICAqL1xuICBsaXZlVmFsaWRhdGU/OiBib29sZWFuO1xuICAvKipcbiAgICog5oyH5a6a6KGo5Y2VIGBhdXRvY29tcGxldGVgIOWAvO+8jOm7mOiupO+8mmBvbmBcbiAgICovXG4gIGF1dG9jb21wbGV0ZT86ICdvbicgfCAnb2ZmJyB8IG51bGw7XG4gIC8qKlxuICAgKiDmmK/lkKbnq4vljbPlkYjnjrDplJnor6/op4bop4nvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBmaXJzdFZpc3VhbD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKblj6rlsZXnpLrplJnor6/op4bop4nkuI3mmL7npLrplJnor6/mlofmnKzvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBvbmx5VmlzdWFsPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOiHquWumuS5iemAmueUqOmUmeivr+S/oeaBr++8jOm7mOiupO+8mmB7fWBcbiAgICovXG4gIGVycm9ycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIC8qKlxuICAgKiDpu5jorqTlhajlsYDluIPlsYDvvIznsbvlnovkuLrvvJpgU0ZVSVNjaGVtYUl0ZW1g77yM5L2/55So5pe25Yqg5LiK5Y+v5pm66IO95o+Q56S677yM5L6L5aaC77yaXG4gICAqXG4gICAqIGBgYHRzXG4gICAqIHVpOiB7fSBhcyBTRlVJU2NoZW1hSXRlbVxuICAgKiBgYGBcbiAgICovXG4gIHVpPzogYW55O1xuICAvKipcbiAgICog5YWD57Sg57uE5Lu25aSn5bCP77yM55So5LqOIGBuelNpemVgIOWAvFxuICAgKi9cbiAgc2l6ZT86ICdkZWZhdWx0JyB8ICdsYXJnZScgfCAnc21hbGwnO1xuICAvKipcbiAgICog5oyJ6ZKu6aOO5qC877yM57G75Z6L5Li677yaYFNGQnV0dG9uYO+8jOS9v+eUqOaXtuWKoOS4iuWPr+aZuuiDveaPkOekuu+8jOS+i+Wmgu+8mlxuICAgKlxuICAgKiBgYGB0c1xuICAgKiBidXR0b246IHt9IGFzIFNGQnV0dG9uXG4gICAqIGBgYFxuICAgKi9cbiAgYnV0dG9uPzogYW55O1xuICAvKipcbiAgICogZGF0ZeWwj+mDqOS7tu+8mmB0eXBlPVwic3RyaW5nXCJgIOS4lOS4jeaMh+WumiBgc2NoZW1hLmZvcm1hdGAg5ZKMIGB1aS5mb3JtYXRgIOaXtuaXpeacn+agvOW8j++8jOm7mOiupO+8mmB5eXl5LU1NLWRkIEhIOm1tOnNzYFxuICAgKi9cbiAgdWlEYXRlU3RyaW5nRm9ybWF0Pzogc3RyaW5nO1xuICAvKipcbiAgICogZGF0ZeWwj+mDqOS7tu+8mmB0eXBlPVwibnVtYmVyXCJgIOS4lOS4jeaMh+WumiBgc2NoZW1hLmZvcm1hdGAg5ZKMIGB1aS5mb3JtYXRgIOaXtuaXpeacn+agvOW8j++8jOm7mOiupO+8mmB4YCAxM+S9jVVuaXggVGltZXN0YW1wXG4gICAqL1xuICB1aURhdGVOdW1iZXJGb3JtYXQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiB0aW1l5bCP6YOo5Lu277yaYHR5cGU9XCJzdHJpbmdcImAg5LiU5LiN5oyH5a6aIGBzY2hlbWEuZm9ybWF0YCDlkowgYHVpLmZvcm1hdGAg5pe25pel5pyf5qC85byP77yM6buY6K6k77yaYEhIOm1tOnNzYFxuICAgKi9cbiAgdWlUaW1lU3RyaW5nRm9ybWF0Pzogc3RyaW5nO1xuICAvKipcbiAgICogdGltZeWwj+mDqOS7tu+8mmB0eXBlPVwibnVtYmVyXCJgIOS4lOS4jeaMh+WumiBgc2NoZW1hLmZvcm1hdGAg5ZKMIGB1aS5mb3JtYXRgIOaXtuaXpeacn+agvOW8j++8jOm7mOiupO+8mmB4YCAxM+S9jVVuaXggVGltZXN0YW1w77yM5pel5pyf57uf5LiA5L2/55SoIGAxOTcwLTAxLTAxYFxuICAgKi9cbiAgdWlUaW1lTnVtYmVyRm9ybWF0Pzogc3RyaW5nO1xuICAvKipcbiAgICog5oyH5a6aIGBmb3JtYXQ6ICdlbWFpbCdgIOeahOm7mOiupEVtYWls5ZCO57yA77yM6buY6K6k77yaYFsncXEuY29tJywgJzE2My5jb20nLCAnZ21haWwuY29tJywgJzEyNi5jb20nLCAnYWxpeXVuLmNvbSddYFxuICAgKi9cbiAgdWlFbWFpbFN1ZmZpeGVzPzogc3RyaW5nW107XG59XG4iXX0=