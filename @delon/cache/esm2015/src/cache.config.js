/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
export class DelonCacheConfig {
    constructor() {
        /**
         * 缓存模式，默认：`promise`
         * - `promise` 约定模式，允许 `key` 作为 http 获取数据
         * - `none` 正常模式
         */
        this.mode = 'promise';
        /**
         * 重命名返回参数，例如：
         * - `null` 返回体为内容
         * - `list` 返回体应 `{ list: [] }`
         * - `result.list` 返回体应 `{ result: { list: [] } }`
         */
        this.reName = '';
        /**
         * 持久化数据键值前缀
         */
        this.prefix = '';
        /**
         * 持久化数据元数据存储键名
         */
        this.meta_key = '__cache_meta';
    }
}
if (false) {
    /**
     * 缓存模式，默认：`promise`
     * - `promise` 约定模式，允许 `key` 作为 http 获取数据
     * - `none` 正常模式
     * @type {?}
     */
    DelonCacheConfig.prototype.mode;
    /**
     * 重命名返回参数，例如：
     * - `null` 返回体为内容
     * - `list` 返回体应 `{ list: [] }`
     * - `result.list` 返回体应 `{ result: { list: [] } }`
     * @type {?}
     */
    DelonCacheConfig.prototype.reName;
    /**
     * 持久化数据键值前缀
     * @type {?}
     */
    DelonCacheConfig.prototype.prefix;
    /**
     * 持久化数据元数据存储键名
     * @type {?}
     */
    DelonCacheConfig.prototype.meta_key;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NhY2hlLyIsInNvdXJjZXMiOlsic3JjL2NhY2hlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTTs7Ozs7OztvQkFNd0IsU0FBUzs7Ozs7OztzQkFPUixFQUFFOzs7O3NCQUliLEVBQUU7Ozs7d0JBSUEsY0FBYzs7Q0FDbkMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRGVsb25DYWNoZUNvbmZpZyB7XHJcbiAgLyoqXHJcbiAgICog57yT5a2Y5qih5byP77yM6buY6K6k77yaYHByb21pc2VgXHJcbiAgICogLSBgcHJvbWlzZWAg57qm5a6a5qih5byP77yM5YWB6K64IGBrZXlgIOS9nOS4uiBodHRwIOiOt+WPluaVsOaNrlxyXG4gICAqIC0gYG5vbmVgIOato+W4uOaooeW8j1xyXG4gICAqL1xyXG4gIG1vZGU/OiAncHJvbWlzZScgfCAnbm9uZScgPSAncHJvbWlzZSc7XHJcbiAgLyoqXHJcbiAgICog6YeN5ZG95ZCN6L+U5Zue5Y+C5pWw77yM5L6L5aaC77yaXHJcbiAgICogLSBgbnVsbGAg6L+U5Zue5L2T5Li65YaF5a65XHJcbiAgICogLSBgbGlzdGAg6L+U5Zue5L2T5bqUIGB7IGxpc3Q6IFtdIH1gXHJcbiAgICogLSBgcmVzdWx0Lmxpc3RgIOi/lOWbnuS9k+W6lCBgeyByZXN1bHQ6IHsgbGlzdDogW10gfSB9YFxyXG4gICAqL1xyXG4gIHJlTmFtZT86IHN0cmluZyB8IHN0cmluZ1tdID0gJyc7XHJcbiAgLyoqXHJcbiAgICog5oyB5LmF5YyW5pWw5o2u6ZSu5YC85YmN57yAXHJcbiAgICovXHJcbiAgcHJlZml4Pzogc3RyaW5nID0gJyc7XHJcbiAgLyoqXHJcbiAgICog5oyB5LmF5YyW5pWw5o2u5YWD5pWw5o2u5a2Y5YKo6ZSu5ZCNXHJcbiAgICovXHJcbiAgbWV0YV9rZXk/OiBzdHJpbmcgPSAnX19jYWNoZV9tZXRhJztcclxufVxyXG4iXX0=