/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBSXpDO0lBQUE7Ozs7Ozs7UUFPRSxtQkFBYyxHQUFjLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7UUFXN0MsaUJBQVksR0FBSSxJQUFJLENBQUM7Ozs7UUFJckIsaUJBQVksR0FBa0IsSUFBSSxDQUFDOzs7O1FBSW5DLGdCQUFXLEdBQUksS0FBSyxDQUFDOzs7O1FBSXJCLGVBQVUsR0FBSSxLQUFLLENBQUM7Ozs7UUFJcEIsV0FBTSxHQUErQixhQUFhLENBQUM7Ozs7UUFZbkQsV0FBTSxHQUFjO1lBQ2xCLFdBQVcsRUFBRSxTQUFTO1lBQ3RCLFVBQVUsRUFBRSxTQUFTO1NBQ3RCLENBQUM7Ozs7UUFJRix1QkFBa0IsR0FBSSxxQkFBcUIsQ0FBQzs7OztRQUk1Qyx1QkFBa0IsR0FBSSxHQUFHLENBQUM7Ozs7UUFJMUIsdUJBQWtCLEdBQUksVUFBVSxDQUFDOzs7O1FBSWpDLHVCQUFrQixHQUFJLEdBQUcsQ0FBQztJQUM1QixDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUFDLEFBbEVELElBa0VDOzs7Ozs7Ozs7O0lBM0RDLHlDQUE2Qzs7Ozs7SUFLN0MsOEJBQVU7Ozs7Ozs7SUFNVix1Q0FBcUI7Ozs7O0lBSXJCLHVDQUFtQzs7Ozs7SUFJbkMsc0NBQXFCOzs7OztJQUlyQixxQ0FBb0I7Ozs7O0lBSXBCLGlDQUFtRDs7Ozs7SUFJbkQsNkJBQW9COzs7OztJQUlwQiwrQkFBcUM7Ozs7O0lBSXJDLGlDQUdFOzs7OztJQUlGLDZDQUE0Qzs7Ozs7SUFJNUMsNkNBQTBCOzs7OztJQUkxQiw2Q0FBaUM7Ozs7O0lBSWpDLDZDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVSUk9SU0RFRkFVTFQgfSBmcm9tICcuL2Vycm9ycyc7XG5pbXBvcnQgeyBTRkJ1dHRvbiB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xuXG5leHBvcnQgY2xhc3MgRGVsb25Gb3JtQ29uZmlnIHtcbiAgLyoqXG4gICAqIOaYr+WQpuW/veeVpeafkOS6m+aVsOaNruexu+Wei+agoemqjCBgRVJST1JTREVGQVVMVGDvvIzpu5jorqTvvJpgWyAndHlwZScsICdlbnVtJyBdYFxuICAgKlxuICAgKiAtIGB0eXBlYCDpmZDlrpogU2NoZW1hIOS4rSBgdHlwZWAg57G75Z6LXG4gICAqIC0gYGVudW1gIOmZkOWumuW6lOW9k+aYr+mihOiuvuWumueahOaemuS4vuWAvOS5i+S4gFxuICAgKi9cbiAgaW5nb3JlS2V5d29yZHM/OiBzdHJpbmdbXSA9IFsndHlwZScsICdlbnVtJ107XG4gIC8qKlxuICAgKiBbYWp2XShodHRwOi8vZXBvYmVyZXpraW4uZ2l0aHViLmlvL2Fqdi8jb3B0aW9ucykg5Y+C5pWwXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGFqdj86IGFueTtcbiAgLyoqXG4gICAqIOaYr+WQpuWunuaXtuagoemqjO+8jOm7mOiupO+8mmB0cnVlYFxuICAgKiAtIGB0cnVlYCDmr4/kuIDmrKHpg73moKHpqoxcbiAgICogLSBgZmFsc2VgIOaPkOS6pOaXtuagoemqjFxuICAgKi9cbiAgbGl2ZVZhbGlkYXRlID89IHRydWU7XG4gIC8qKlxuICAgKiDmjIflrprooajljZUgYGF1dG9jb21wbGV0ZWAg5YC877yM6buY6K6k77yaYG9uYFxuICAgKi9cbiAgYXV0b2NvbXBsZXRlPzogJ29uJyB8ICdvZmYnID0gbnVsbDtcbiAgLyoqXG4gICAqIOaYr+WQpueri+WNs+WRiOeOsOmUmeivr+inhuinie+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIGZpcnN0VmlzdWFsID89IGZhbHNlO1xuICAvKipcbiAgICog5piv5ZCm5Y+q5bGV56S66ZSZ6K+v6KeG6KeJ5LiN5pi+56S66ZSZ6K+v5paH5pys77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgb25seVZpc3VhbCA/PSBmYWxzZTtcbiAgLyoqXG4gICAqIOiHquWumuS5iemAmueUqOmUmeivr+S/oeaBr1xuICAgKi9cbiAgZXJyb3JzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IEVSUk9SU0RFRkFVTFQ7XG4gIC8qKlxuICAgKiDpu5jorqTlhajlsYDluIPlsYBcbiAgICovXG4gIHVpPzogU0ZVSVNjaGVtYUl0ZW07XG4gIC8qKlxuICAgKiDlhYPntKDnu4Tku7blpKflsI/vvIznlKjkuo4gYG56U2l6ZWAg5YC8XG4gICAqL1xuICBzaXplPzogJ2RlZmF1bHQnIHwgJ2xhcmdlJyB8ICdzbWFsbCc7XG4gIC8qKlxuICAgKiDmjInpkq7po47moLxcbiAgICovXG4gIGJ1dHRvbj86IFNGQnV0dG9uID0ge1xuICAgIHN1Ym1pdF90eXBlOiAncHJpbWFyeScsXG4gICAgcmVzZXRfdHlwZTogJ2RlZmF1bHQnLFxuICB9O1xuICAvKipcbiAgICogZGF0ZeWwj+mDqOS7tu+8mmB0eXBlPVwic3RyaW5nXCJgIOS4lOS4jeaMh+WumiBgc2NoZW1hLmZvcm1hdGAg5ZKMIGB1aS5mb3JtYXRgIOaXtuaXpeacn+agvOW8j++8jOm7mOiupO+8mmBZWVlZLU1NLUREIEhIOm1tOnNzYFxuICAgKi9cbiAgdWlEYXRlU3RyaW5nRm9ybWF0ID89ICdZWVlZLU1NLUREIEhIOm1tOnNzJztcbiAgLyoqXG4gICAqIGRhdGXlsI/pg6jku7bvvJpgdHlwZT1cIm51bWJlclwiYCDkuJTkuI3mjIflrpogYHNjaGVtYS5mb3JtYXRgIOWSjCBgdWkuZm9ybWF0YCDml7bml6XmnJ/moLzlvI/vvIzpu5jorqTvvJpgeGAgMTPkvY1Vbml4IFRpbWVzdGFtcFxuICAgKi9cbiAgdWlEYXRlTnVtYmVyRm9ybWF0ID89ICd4JztcbiAgLyoqXG4gICAqIHRpbWXlsI/pg6jku7bvvJpgdHlwZT1cInN0cmluZ1wiYCDkuJTkuI3mjIflrpogYHNjaGVtYS5mb3JtYXRgIOWSjCBgdWkuZm9ybWF0YCDml7bml6XmnJ/moLzlvI/vvIzpu5jorqTvvJpgSEg6bW06c3NgXG4gICAqL1xuICB1aVRpbWVTdHJpbmdGb3JtYXQgPz0gJ0hIOm1tOnNzJztcbiAgLyoqXG4gICAqIHRpbWXlsI/pg6jku7bvvJpgdHlwZT1cIm51bWJlclwiYCDkuJTkuI3mjIflrpogYHNjaGVtYS5mb3JtYXRgIOWSjCBgdWkuZm9ybWF0YCDml7bml6XmnJ/moLzlvI/vvIzpu5jorqTvvJpgeGAgMTPkvY1Vbml4IFRpbWVzdGFtcO+8jOaXpeacn+e7n+S4gOS9v+eUqCBgMTk3MC0wMS0wMWBcbiAgICovXG4gIHVpVGltZU51bWJlckZvcm1hdCA/PSAneCc7XG59XG4iXX0=