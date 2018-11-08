/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NhY2hlLyIsInNvdXJjZXMiOlsic3JjL2NhY2hlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7SUFBQTs7Ozs7O1FBTUUsU0FBSSxHQUF3QixTQUFTLENBQUM7Ozs7Ozs7UUFPdEMsV0FBTSxHQUF1QixFQUFFLENBQUM7Ozs7UUFJaEMsV0FBTSxHQUFZLEVBQUUsQ0FBQzs7OztRQUlyQixhQUFRLEdBQVksY0FBYyxDQUFDO0lBQ3JDLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUF0QkQsSUFzQkM7Ozs7Ozs7OztJQWhCQyxnQ0FBc0M7Ozs7Ozs7O0lBT3RDLGtDQUFnQzs7Ozs7SUFJaEMsa0NBQXFCOzs7OztJQUlyQixvQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRGVsb25DYWNoZUNvbmZpZyB7XG4gIC8qKlxuICAgKiDnvJPlrZjmqKHlvI/vvIzpu5jorqTvvJpgcHJvbWlzZWBcbiAgICogLSBgcHJvbWlzZWAg57qm5a6a5qih5byP77yM5YWB6K64IGBrZXlgIOS9nOS4uiBodHRwIOiOt+WPluaVsOaNrlxuICAgKiAtIGBub25lYCDmraPluLjmqKHlvI9cbiAgICovXG4gIG1vZGU/OiAncHJvbWlzZScgfCAnbm9uZScgPSAncHJvbWlzZSc7XG4gIC8qKlxuICAgKiDph43lkb3lkI3ov5Tlm57lj4LmlbDvvIzkvovlpoLvvJpcbiAgICogLSBgbnVsbGAg6L+U5Zue5L2T5Li65YaF5a65XG4gICAqIC0gYGxpc3RgIOi/lOWbnuS9k+W6lCBgeyBsaXN0OiBbXSB9YFxuICAgKiAtIGByZXN1bHQubGlzdGAg6L+U5Zue5L2T5bqUIGB7IHJlc3VsdDogeyBsaXN0OiBbXSB9IH1gXG4gICAqL1xuICByZU5hbWU/OiBzdHJpbmcgfCBzdHJpbmdbXSA9ICcnO1xuICAvKipcbiAgICog5oyB5LmF5YyW5pWw5o2u6ZSu5YC85YmN57yAXG4gICAqL1xuICBwcmVmaXg/OiBzdHJpbmcgPSAnJztcbiAgLyoqXG4gICAqIOaMgeS5heWMluaVsOaNruWFg+aVsOaNruWtmOWCqOmUruWQjVxuICAgKi9cbiAgbWV0YV9rZXk/OiBzdHJpbmcgPSAnX19jYWNoZV9tZXRhJztcbn1cbiJdfQ==