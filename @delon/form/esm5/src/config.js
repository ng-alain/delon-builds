/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ERRORSDEFAULT } from './errors';
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBR3pDLElBQUE7Ozs7Ozs7OzhCQU84QixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7Ozs7Ozs0QkFVNUIsSUFBSTs7Ozs0QkFJVSxJQUFJOzs7OzJCQUluQixLQUFLOzs7OzBCQUlOLEtBQUs7Ozs7c0JBSWtCLGFBQWE7Ozs7c0JBWTlCO1lBQ2xCLFdBQVcsRUFBRSxTQUFTO1lBQ3RCLFVBQVUsRUFBRSxTQUFTO1NBQ3RCOzs7O2tDQUlxQixxQkFBcUI7Ozs7a0NBSXJCLEdBQUc7Ozs7a0NBSUgsVUFBVTs7OztrQ0FJVixHQUFHOzswQkFwRTNCO0lBcUVDLENBQUE7QUFqRUQsMkJBaUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuL3NjaGVtYS91aSc7XHJcbmltcG9ydCB7IEVSUk9SU0RFRkFVTFQgfSBmcm9tICcuL2Vycm9ycyc7XHJcbmltcG9ydCB7IFNGQnV0dG9uIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIERlbG9uRm9ybUNvbmZpZyB7XHJcbiAgLyoqXHJcbiAgICog5piv5ZCm5b+955Wl5p+Q5Lqb5pWw5o2u57G75Z6L5qCh6aqMIGBFUlJPUlNERUZBVUxUYO+8jOm7mOiupO+8mmBbICd0eXBlJywgJ2VudW0nIF1gXHJcbiAgICpcclxuICAgKiAtIGB0eXBlYCDpmZDlrpogU2NoZW1hIOS4rSBgdHlwZWAg57G75Z6LXHJcbiAgICogLSBgZW51bWAg6ZmQ5a6a5bqU5b2T5piv6aKE6K6+5a6a55qE5p6a5Li+5YC85LmL5LiAXHJcbiAgICovXHJcbiAgaW5nb3JlS2V5d29yZHM/OiBzdHJpbmdbXSA9IFsndHlwZScsICdlbnVtJ107XHJcbiAgLyoqXHJcbiAgICogW2Fqdl0oaHR0cDovL2Vwb2JlcmV6a2luLmdpdGh1Yi5pby9hanYvI29wdGlvbnMpIOWPguaVsFxyXG4gICAqL1xyXG4gIGFqdj86IGFueTtcclxuICAvKipcclxuICAgKiDmmK/lkKblrp7ml7bmoKHpqozvvIzpu5jorqTvvJpgdHJ1ZWBcclxuICAgKiAtIGB0cnVlYCDmr4/kuIDmrKHpg73moKHpqoxcclxuICAgKiAtIGBmYWxzZWAg5o+Q5Lqk5pe25qCh6aqMXHJcbiAgICovXHJcbiAgbGl2ZVZhbGlkYXRlPyA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICog5oyH5a6a6KGo5Y2VIGBhdXRvY29tcGxldGVgIOWAvO+8jOm7mOiupO+8mmBvbmBcclxuICAgKi9cclxuICBhdXRvY29tcGxldGU/OiAnb24nIHwgJ29mZicgPSBudWxsO1xyXG4gIC8qKlxyXG4gICAqIOaYr+WQpueri+WNs+WRiOeOsOmUmeivr+inhuinie+8jOm7mOiupO+8mmBmYWxzZWBcclxuICAgKi9cclxuICBmaXJzdFZpc3VhbD8gPSBmYWxzZTtcclxuICAvKipcclxuICAgKiDmmK/lkKblj6rlsZXnpLrplJnor6/op4bop4nkuI3mmL7npLrplJnor6/mlofmnKzvvIzpu5jorqTvvJpgZmFsc2VgXHJcbiAgICovXHJcbiAgb25seVZpc3VhbD8gPSBmYWxzZTtcclxuICAvKipcclxuICAgKiDoh6rlrprkuYnpgJrnlKjplJnor6/kv6Hmga9cclxuICAgKi9cclxuICBlcnJvcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0gRVJST1JTREVGQVVMVDtcclxuICAvKipcclxuICAgKiDpu5jorqTlhajlsYDluIPlsYBcclxuICAgKi9cclxuICB1aT86IFNGVUlTY2hlbWFJdGVtO1xyXG4gIC8qKlxyXG4gICAqIOWFg+e0oOe7hOS7tuWkp+Wwj++8jOeUqOS6jiBgbnpTaXplYCDlgLxcclxuICAgKi9cclxuICBzaXplPzogJ2RlZmF1bHQnIHwgJ2xhcmdlJyB8ICdzbWFsbCc7XHJcbiAgLyoqXHJcbiAgICog5oyJ6ZKu6aOO5qC8XHJcbiAgICovXHJcbiAgYnV0dG9uPzogU0ZCdXR0b24gPSB7XHJcbiAgICBzdWJtaXRfdHlwZTogJ3ByaW1hcnknLFxyXG4gICAgcmVzZXRfdHlwZTogJ2RlZmF1bHQnLFxyXG4gIH07XHJcbiAgLyoqXHJcbiAgICogZGF0ZeWwj+mDqOS7tu+8mmB0eXBlPVwic3RyaW5nXCJgIOS4lOS4jeaMh+WumiBgc2NoZW1hLmZvcm1hdGAg5ZKMIGB1aS5mb3JtYXRgIOaXtuaXpeacn+agvOW8j++8jOm7mOiupO+8mmBZWVlZLU1NLUREIEhIOm1tOnNzYFxyXG4gICAqL1xyXG4gIHVpRGF0ZVN0cmluZ0Zvcm1hdD8gPSAnWVlZWS1NTS1ERCBISDptbTpzcyc7XHJcbiAgLyoqXHJcbiAgICogZGF0ZeWwj+mDqOS7tu+8mmB0eXBlPVwibnVtYmVyXCJgIOS4lOS4jeaMh+WumiBgc2NoZW1hLmZvcm1hdGAg5ZKMIGB1aS5mb3JtYXRgIOaXtuaXpeacn+agvOW8j++8jOm7mOiupO+8mmB4YCAxM+S9jVVuaXggVGltZXN0YW1wXHJcbiAgICovXHJcbiAgdWlEYXRlTnVtYmVyRm9ybWF0PyA9ICd4JztcclxuICAvKipcclxuICAgKiB0aW1l5bCP6YOo5Lu277yaYHR5cGU9XCJzdHJpbmdcImAg5LiU5LiN5oyH5a6aIGBzY2hlbWEuZm9ybWF0YCDlkowgYHVpLmZvcm1hdGAg5pe25pel5pyf5qC85byP77yM6buY6K6k77yaYEhIOm1tOnNzYFxyXG4gICAqL1xyXG4gIHVpVGltZVN0cmluZ0Zvcm1hdD8gPSAnSEg6bW06c3MnO1xyXG4gIC8qKlxyXG4gICAqIHRpbWXlsI/pg6jku7bvvJpgdHlwZT1cIm51bWJlclwiYCDkuJTkuI3mjIflrpogYHNjaGVtYS5mb3JtYXRgIOWSjCBgdWkuZm9ybWF0YCDml7bml6XmnJ/moLzlvI/vvIzpu5jorqTvvJpgeGAgMTPkvY1Vbml4IFRpbWVzdGFtcO+8jOaXpeacn+e7n+S4gOS9v+eUqCBgMTk3MC0wMS0wMWBcclxuICAgKi9cclxuICB1aVRpbWVOdW1iZXJGb3JtYXQ/ID0gJ3gnO1xyXG59XHJcbiJdfQ==