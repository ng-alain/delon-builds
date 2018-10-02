/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DelonCacheConfig = /** @class */ (function () {
    function DelonCacheConfig() {
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
    return DelonCacheConfig;
}());
export { DelonCacheConfig };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NhY2hlLyIsInNvdXJjZXMiOlsic3JjL2NhY2hlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBQTs7Ozs7OztvQkFNOEIsU0FBUzs7Ozs7OztzQkFPUixFQUFFOzs7O3NCQUliLEVBQUU7Ozs7d0JBSUEsY0FBYzs7MkJBckJwQztJQXNCQyxDQUFBO0FBdEJELDRCQXNCQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBEZWxvbkNhY2hlQ29uZmlnIHtcclxuICAvKipcclxuICAgKiDnvJPlrZjmqKHlvI/vvIzpu5jorqTvvJpgcHJvbWlzZWBcclxuICAgKiAtIGBwcm9taXNlYCDnuqblrprmqKHlvI/vvIzlhYHorrggYGtleWAg5L2c5Li6IGh0dHAg6I635Y+W5pWw5o2uXHJcbiAgICogLSBgbm9uZWAg5q2j5bi45qih5byPXHJcbiAgICovXHJcbiAgbW9kZT86ICdwcm9taXNlJyB8ICdub25lJyA9ICdwcm9taXNlJztcclxuICAvKipcclxuICAgKiDph43lkb3lkI3ov5Tlm57lj4LmlbDvvIzkvovlpoLvvJpcclxuICAgKiAtIGBudWxsYCDov5Tlm57kvZPkuLrlhoXlrrlcclxuICAgKiAtIGBsaXN0YCDov5Tlm57kvZPlupQgYHsgbGlzdDogW10gfWBcclxuICAgKiAtIGByZXN1bHQubGlzdGAg6L+U5Zue5L2T5bqUIGB7IHJlc3VsdDogeyBsaXN0OiBbXSB9IH1gXHJcbiAgICovXHJcbiAgcmVOYW1lPzogc3RyaW5nIHwgc3RyaW5nW10gPSAnJztcclxuICAvKipcclxuICAgKiDmjIHkuYXljJbmlbDmja7plK7lgLzliY3nvIBcclxuICAgKi9cclxuICBwcmVmaXg/OiBzdHJpbmcgPSAnJztcclxuICAvKipcclxuICAgKiDmjIHkuYXljJbmlbDmja7lhYPmlbDmja7lrZjlgqjplK7lkI1cclxuICAgKi9cclxuICBtZXRhX2tleT86IHN0cmluZyA9ICdfX2NhY2hlX21ldGEnO1xyXG59XHJcbiJdfQ==