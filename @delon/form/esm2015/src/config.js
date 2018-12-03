/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBSXpDLE1BQU0sT0FBTyxlQUFlO0lBQTVCOzs7Ozs7O1FBT0UsbUJBQWMsR0FBYyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQzs7Ozs7O1FBVzdDLGlCQUFZLEdBQUksSUFBSSxDQUFDOzs7O1FBSXJCLGlCQUFZLEdBQWtCLElBQUksQ0FBQzs7OztRQUluQyxnQkFBVyxHQUFJLEtBQUssQ0FBQzs7OztRQUlyQixlQUFVLEdBQUksS0FBSyxDQUFDOzs7O1FBSXBCLFdBQU0sR0FBK0IsYUFBYSxDQUFDOzs7O1FBWW5ELFdBQU0sR0FBYztZQUNsQixXQUFXLEVBQUUsU0FBUztZQUN0QixVQUFVLEVBQUUsU0FBUztTQUN0QixDQUFDOzs7O1FBSUYsdUJBQWtCLEdBQUkscUJBQXFCLENBQUM7Ozs7UUFJNUMsdUJBQWtCLEdBQUksR0FBRyxDQUFDOzs7O1FBSTFCLHVCQUFrQixHQUFJLFVBQVUsQ0FBQzs7OztRQUlqQyx1QkFBa0IsR0FBSSxHQUFHLENBQUM7SUFDNUIsQ0FBQztDQUFBOzs7Ozs7Ozs7SUEzREMseUNBQTZDOzs7OztJQUs3Qyw4QkFBVTs7Ozs7OztJQU1WLHVDQUFxQjs7Ozs7SUFJckIsdUNBQW1DOzs7OztJQUluQyxzQ0FBcUI7Ozs7O0lBSXJCLHFDQUFvQjs7Ozs7SUFJcEIsaUNBQW1EOzs7OztJQUluRCw2QkFBb0I7Ozs7O0lBSXBCLCtCQUFxQzs7Ozs7SUFJckMsaUNBR0U7Ozs7O0lBSUYsNkNBQTRDOzs7OztJQUk1Qyw2Q0FBMEI7Ozs7O0lBSTFCLDZDQUFpQzs7Ozs7SUFJakMsNkNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRVJST1JTREVGQVVMVCB9IGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCB7IFNGQnV0dG9uIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuL3NjaGVtYS91aSc7XG5cbmV4cG9ydCBjbGFzcyBEZWxvbkZvcm1Db25maWcge1xuICAvKipcbiAgICog5piv5ZCm5b+955Wl5p+Q5Lqb5pWw5o2u57G75Z6L5qCh6aqMIGBFUlJPUlNERUZBVUxUYO+8jOm7mOiupO+8mmBbICd0eXBlJywgJ2VudW0nIF1gXG4gICAqXG4gICAqIC0gYHR5cGVgIOmZkOWumiBTY2hlbWEg5LitIGB0eXBlYCDnsbvlnotcbiAgICogLSBgZW51bWAg6ZmQ5a6a5bqU5b2T5piv6aKE6K6+5a6a55qE5p6a5Li+5YC85LmL5LiAXG4gICAqL1xuICBpbmdvcmVLZXl3b3Jkcz86IHN0cmluZ1tdID0gWyd0eXBlJywgJ2VudW0nXTtcbiAgLyoqXG4gICAqIFthanZdKGh0dHA6Ly9lcG9iZXJlemtpbi5naXRodWIuaW8vYWp2LyNvcHRpb25zKSDlj4LmlbBcbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgYWp2PzogYW55O1xuICAvKipcbiAgICog5piv5ZCm5a6e5pe25qCh6aqM77yM6buY6K6k77yaYHRydWVgXG4gICAqIC0gYHRydWVgIOavj+S4gOasoemDveagoemqjFxuICAgKiAtIGBmYWxzZWAg5o+Q5Lqk5pe25qCh6aqMXG4gICAqL1xuICBsaXZlVmFsaWRhdGUgPz0gdHJ1ZTtcbiAgLyoqXG4gICAqIOaMh+WumuihqOWNlSBgYXV0b2NvbXBsZXRlYCDlgLzvvIzpu5jorqTvvJpgb25gXG4gICAqL1xuICBhdXRvY29tcGxldGU/OiAnb24nIHwgJ29mZicgPSBudWxsO1xuICAvKipcbiAgICog5piv5ZCm56uL5Y2z5ZGI546w6ZSZ6K+v6KeG6KeJ77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgZmlyc3RWaXN1YWwgPz0gZmFsc2U7XG4gIC8qKlxuICAgKiDmmK/lkKblj6rlsZXnpLrplJnor6/op4bop4nkuI3mmL7npLrplJnor6/mlofmnKzvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBvbmx5VmlzdWFsID89IGZhbHNlO1xuICAvKipcbiAgICog6Ieq5a6a5LmJ6YCa55So6ZSZ6K+v5L+h5oGvXG4gICAqL1xuICBlcnJvcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0gRVJST1JTREVGQVVMVDtcbiAgLyoqXG4gICAqIOm7mOiupOWFqOWxgOW4g+WxgFxuICAgKi9cbiAgdWk/OiBTRlVJU2NoZW1hSXRlbTtcbiAgLyoqXG4gICAqIOWFg+e0oOe7hOS7tuWkp+Wwj++8jOeUqOS6jiBgbnpTaXplYCDlgLxcbiAgICovXG4gIHNpemU/OiAnZGVmYXVsdCcgfCAnbGFyZ2UnIHwgJ3NtYWxsJztcbiAgLyoqXG4gICAqIOaMiemSrumjjuagvFxuICAgKi9cbiAgYnV0dG9uPzogU0ZCdXR0b24gPSB7XG4gICAgc3VibWl0X3R5cGU6ICdwcmltYXJ5JyxcbiAgICByZXNldF90eXBlOiAnZGVmYXVsdCcsXG4gIH07XG4gIC8qKlxuICAgKiBkYXRl5bCP6YOo5Lu277yaYHR5cGU9XCJzdHJpbmdcImAg5LiU5LiN5oyH5a6aIGBzY2hlbWEuZm9ybWF0YCDlkowgYHVpLmZvcm1hdGAg5pe25pel5pyf5qC85byP77yM6buY6K6k77yaYFlZWVktTU0tREQgSEg6bW06c3NgXG4gICAqL1xuICB1aURhdGVTdHJpbmdGb3JtYXQgPz0gJ1lZWVktTU0tREQgSEg6bW06c3MnO1xuICAvKipcbiAgICogZGF0ZeWwj+mDqOS7tu+8mmB0eXBlPVwibnVtYmVyXCJgIOS4lOS4jeaMh+WumiBgc2NoZW1hLmZvcm1hdGAg5ZKMIGB1aS5mb3JtYXRgIOaXtuaXpeacn+agvOW8j++8jOm7mOiupO+8mmB4YCAxM+S9jVVuaXggVGltZXN0YW1wXG4gICAqL1xuICB1aURhdGVOdW1iZXJGb3JtYXQgPz0gJ3gnO1xuICAvKipcbiAgICogdGltZeWwj+mDqOS7tu+8mmB0eXBlPVwic3RyaW5nXCJgIOS4lOS4jeaMh+WumiBgc2NoZW1hLmZvcm1hdGAg5ZKMIGB1aS5mb3JtYXRgIOaXtuaXpeacn+agvOW8j++8jOm7mOiupO+8mmBISDptbTpzc2BcbiAgICovXG4gIHVpVGltZVN0cmluZ0Zvcm1hdCA/PSAnSEg6bW06c3MnO1xuICAvKipcbiAgICogdGltZeWwj+mDqOS7tu+8mmB0eXBlPVwibnVtYmVyXCJgIOS4lOS4jeaMh+WumiBgc2NoZW1hLmZvcm1hdGAg5ZKMIGB1aS5mb3JtYXRgIOaXtuaXpeacn+agvOW8j++8jOm7mOiupO+8mmB4YCAxM+S9jVVuaXggVGltZXN0YW1w77yM5pel5pyf57uf5LiA5L2/55SoIGAxOTcwLTAxLTAxYFxuICAgKi9cbiAgdWlUaW1lTnVtYmVyRm9ybWF0ID89ICd4Jztcbn1cbiJdfQ==