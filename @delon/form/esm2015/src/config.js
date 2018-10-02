/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ERRORSDEFAULT } from './errors';
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
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBR3pDLE1BQU07Ozs7Ozs7OzhCQU93QixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7Ozs7Ozs0QkFVNUIsSUFBSTs7Ozs0QkFJVSxJQUFJOzs7OzJCQUluQixLQUFLOzs7OzBCQUlOLEtBQUs7Ozs7c0JBSWtCLGFBQWE7Ozs7c0JBWTlCO1lBQ2xCLFdBQVcsRUFBRSxTQUFTO1lBQ3RCLFVBQVUsRUFBRSxTQUFTO1NBQ3RCOzs7O2tDQUlxQixxQkFBcUI7Ozs7a0NBSXJCLEdBQUc7Ozs7a0NBSUgsVUFBVTs7OztrQ0FJVixHQUFHOztDQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xyXG5pbXBvcnQgeyBFUlJPUlNERUZBVUxUIH0gZnJvbSAnLi9lcnJvcnMnO1xyXG5pbXBvcnQgeyBTRkJ1dHRvbiB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEZWxvbkZvcm1Db25maWcge1xyXG4gIC8qKlxyXG4gICAqIOaYr+WQpuW/veeVpeafkOS6m+aVsOaNruexu+Wei+agoemqjCBgRVJST1JTREVGQVVMVGDvvIzpu5jorqTvvJpgWyAndHlwZScsICdlbnVtJyBdYFxyXG4gICAqXHJcbiAgICogLSBgdHlwZWAg6ZmQ5a6aIFNjaGVtYSDkuK0gYHR5cGVgIOexu+Wei1xyXG4gICAqIC0gYGVudW1gIOmZkOWumuW6lOW9k+aYr+mihOiuvuWumueahOaemuS4vuWAvOS5i+S4gFxyXG4gICAqL1xyXG4gIGluZ29yZUtleXdvcmRzPzogc3RyaW5nW10gPSBbJ3R5cGUnLCAnZW51bSddO1xyXG4gIC8qKlxyXG4gICAqIFthanZdKGh0dHA6Ly9lcG9iZXJlemtpbi5naXRodWIuaW8vYWp2LyNvcHRpb25zKSDlj4LmlbBcclxuICAgKi9cclxuICBhanY/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICog5piv5ZCm5a6e5pe25qCh6aqM77yM6buY6K6k77yaYHRydWVgXHJcbiAgICogLSBgdHJ1ZWAg5q+P5LiA5qyh6YO95qCh6aqMXHJcbiAgICogLSBgZmFsc2VgIOaPkOS6pOaXtuagoemqjFxyXG4gICAqL1xyXG4gIGxpdmVWYWxpZGF0ZT8gPSB0cnVlO1xyXG4gIC8qKlxyXG4gICAqIOaMh+WumuihqOWNlSBgYXV0b2NvbXBsZXRlYCDlgLzvvIzpu5jorqTvvJpgb25gXHJcbiAgICovXHJcbiAgYXV0b2NvbXBsZXRlPzogJ29uJyB8ICdvZmYnID0gbnVsbDtcclxuICAvKipcclxuICAgKiDmmK/lkKbnq4vljbPlkYjnjrDplJnor6/op4bop4nvvIzpu5jorqTvvJpgZmFsc2VgXHJcbiAgICovXHJcbiAgZmlyc3RWaXN1YWw/ID0gZmFsc2U7XHJcbiAgLyoqXHJcbiAgICog5piv5ZCm5Y+q5bGV56S66ZSZ6K+v6KeG6KeJ5LiN5pi+56S66ZSZ6K+v5paH5pys77yM6buY6K6k77yaYGZhbHNlYFxyXG4gICAqL1xyXG4gIG9ubHlWaXN1YWw/ID0gZmFsc2U7XHJcbiAgLyoqXHJcbiAgICog6Ieq5a6a5LmJ6YCa55So6ZSZ6K+v5L+h5oGvXHJcbiAgICovXHJcbiAgZXJyb3JzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IEVSUk9SU0RFRkFVTFQ7XHJcbiAgLyoqXHJcbiAgICog6buY6K6k5YWo5bGA5biD5bGAXHJcbiAgICovXHJcbiAgdWk/OiBTRlVJU2NoZW1hSXRlbTtcclxuICAvKipcclxuICAgKiDlhYPntKDnu4Tku7blpKflsI/vvIznlKjkuo4gYG56U2l6ZWAg5YC8XHJcbiAgICovXHJcbiAgc2l6ZT86ICdkZWZhdWx0JyB8ICdsYXJnZScgfCAnc21hbGwnO1xyXG4gIC8qKlxyXG4gICAqIOaMiemSrumjjuagvFxyXG4gICAqL1xyXG4gIGJ1dHRvbj86IFNGQnV0dG9uID0ge1xyXG4gICAgc3VibWl0X3R5cGU6ICdwcmltYXJ5JyxcclxuICAgIHJlc2V0X3R5cGU6ICdkZWZhdWx0JyxcclxuICB9O1xyXG4gIC8qKlxyXG4gICAqIGRhdGXlsI/pg6jku7bvvJpgdHlwZT1cInN0cmluZ1wiYCDkuJTkuI3mjIflrpogYHNjaGVtYS5mb3JtYXRgIOWSjCBgdWkuZm9ybWF0YCDml7bml6XmnJ/moLzlvI/vvIzpu5jorqTvvJpgWVlZWS1NTS1ERCBISDptbTpzc2BcclxuICAgKi9cclxuICB1aURhdGVTdHJpbmdGb3JtYXQ/ID0gJ1lZWVktTU0tREQgSEg6bW06c3MnO1xyXG4gIC8qKlxyXG4gICAqIGRhdGXlsI/pg6jku7bvvJpgdHlwZT1cIm51bWJlclwiYCDkuJTkuI3mjIflrpogYHNjaGVtYS5mb3JtYXRgIOWSjCBgdWkuZm9ybWF0YCDml7bml6XmnJ/moLzlvI/vvIzpu5jorqTvvJpgeGAgMTPkvY1Vbml4IFRpbWVzdGFtcFxyXG4gICAqL1xyXG4gIHVpRGF0ZU51bWJlckZvcm1hdD8gPSAneCc7XHJcbiAgLyoqXHJcbiAgICogdGltZeWwj+mDqOS7tu+8mmB0eXBlPVwic3RyaW5nXCJgIOS4lOS4jeaMh+WumiBgc2NoZW1hLmZvcm1hdGAg5ZKMIGB1aS5mb3JtYXRgIOaXtuaXpeacn+agvOW8j++8jOm7mOiupO+8mmBISDptbTpzc2BcclxuICAgKi9cclxuICB1aVRpbWVTdHJpbmdGb3JtYXQ/ID0gJ0hIOm1tOnNzJztcclxuICAvKipcclxuICAgKiB0aW1l5bCP6YOo5Lu277yaYHR5cGU9XCJudW1iZXJcImAg5LiU5LiN5oyH5a6aIGBzY2hlbWEuZm9ybWF0YCDlkowgYHVpLmZvcm1hdGAg5pe25pel5pyf5qC85byP77yM6buY6K6k77yaYHhgIDEz5L2NVW5peCBUaW1lc3RhbXDvvIzml6XmnJ/nu5/kuIDkvb/nlKggYDE5NzAtMDEtMDFgXHJcbiAgICovXHJcbiAgdWlUaW1lTnVtYmVyRm9ybWF0PyA9ICd4JztcclxufVxyXG4iXX0=