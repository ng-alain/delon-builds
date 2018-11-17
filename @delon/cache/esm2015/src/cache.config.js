/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NhY2hlLyIsInNvdXJjZXMiOlsic3JjL2NhY2hlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxPQUFPLGdCQUFnQjtJQUE3Qjs7Ozs7O1FBTUUsU0FBSSxHQUF3QixTQUFTLENBQUM7Ozs7Ozs7UUFPdEMsV0FBTSxHQUF1QixFQUFFLENBQUM7Ozs7UUFJaEMsV0FBTSxHQUFZLEVBQUUsQ0FBQzs7OztRQUlyQixhQUFRLEdBQVksY0FBYyxDQUFDO0lBQ3JDLENBQUM7Q0FBQTs7Ozs7Ozs7SUFoQkMsZ0NBQXNDOzs7Ozs7OztJQU90QyxrQ0FBZ0M7Ozs7O0lBSWhDLGtDQUFxQjs7Ozs7SUFJckIsb0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIERlbG9uQ2FjaGVDb25maWcge1xuICAvKipcbiAgICog57yT5a2Y5qih5byP77yM6buY6K6k77yaYHByb21pc2VgXG4gICAqIC0gYHByb21pc2VgIOe6puWumuaooeW8j++8jOWFgeiuuCBga2V5YCDkvZzkuLogaHR0cCDojrflj5bmlbDmja5cbiAgICogLSBgbm9uZWAg5q2j5bi45qih5byPXG4gICAqL1xuICBtb2RlPzogJ3Byb21pc2UnIHwgJ25vbmUnID0gJ3Byb21pc2UnO1xuICAvKipcbiAgICog6YeN5ZG95ZCN6L+U5Zue5Y+C5pWw77yM5L6L5aaC77yaXG4gICAqIC0gYG51bGxgIOi/lOWbnuS9k+S4uuWGheWuuVxuICAgKiAtIGBsaXN0YCDov5Tlm57kvZPlupQgYHsgbGlzdDogW10gfWBcbiAgICogLSBgcmVzdWx0Lmxpc3RgIOi/lOWbnuS9k+W6lCBgeyByZXN1bHQ6IHsgbGlzdDogW10gfSB9YFxuICAgKi9cbiAgcmVOYW1lPzogc3RyaW5nIHwgc3RyaW5nW10gPSAnJztcbiAgLyoqXG4gICAqIOaMgeS5heWMluaVsOaNrumUruWAvOWJjee8gFxuICAgKi9cbiAgcHJlZml4Pzogc3RyaW5nID0gJyc7XG4gIC8qKlxuICAgKiDmjIHkuYXljJbmlbDmja7lhYPmlbDmja7lrZjlgqjplK7lkI1cbiAgICovXG4gIG1ldGFfa2V5Pzogc3RyaW5nID0gJ19fY2FjaGVfbWV0YSc7XG59XG4iXX0=