/**
 * @fileoverview added by tsickle
 * Generated from: src/config/cache/cache.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function AlainCacheConfig() { }
if (false) {
    /**
     * Cache mode, default: `promise`
     * - `promise` Convention mode, allowing `key` to get data as http
     * - `none` Normal mode
     * @type {?|undefined}
     */
    AlainCacheConfig.prototype.mode;
    /**
     * Rename the return parameters, default: ``, for example:
     * - `null` The response body is content
     * - `list` The response body should be `{ list: [] }`
     * - `result.list` The response body should be `{ result: { list: [] } }`
     * @type {?|undefined}
     */
    AlainCacheConfig.prototype.reName;
    /**
     * Set the default storage type
     * - `m` Storage via memory
     * - `s` Storage via `localStorage`
     * @type {?|undefined}
     */
    AlainCacheConfig.prototype.type;
    /**
     * Set the default expire time (Unit: second)
     * @type {?|undefined}
     */
    AlainCacheConfig.prototype.expire;
    /**
     * Key prefix of persistent data, default: ``
     * @type {?|undefined}
     */
    AlainCacheConfig.prototype.prefix;
    /**
     * Key name of persistent data metadata storage, default: `__cache_meta`
     * @type {?|undefined}
     */
    AlainCacheConfig.prototype.meta_key;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUudHlwZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92c3RzL3dvcmsvMS9zL3BhY2thZ2VzL3V0aWwvIiwic291cmNlcyI6WyJzcmMvY29uZmlnL2NhY2hlL2NhY2hlLnR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FnQ0M7Ozs7Ozs7O0lBMUJDLGdDQUEwQjs7Ozs7Ozs7SUFPMUIsa0NBQTJCOzs7Ozs7O0lBTTNCLGdDQUFpQjs7Ozs7SUFJakIsa0NBQWdCOzs7OztJQUloQixrQ0FBZ0I7Ozs7O0lBSWhCLG9DQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgQWxhaW5DYWNoZUNvbmZpZyB7XG4gIC8qKlxuICAgKiBDYWNoZSBtb2RlLCBkZWZhdWx0OiBgcHJvbWlzZWBcbiAgICogLSBgcHJvbWlzZWAgQ29udmVudGlvbiBtb2RlLCBhbGxvd2luZyBga2V5YCB0byBnZXQgZGF0YSBhcyBodHRwXG4gICAqIC0gYG5vbmVgIE5vcm1hbCBtb2RlXG4gICAqL1xuICBtb2RlPzogJ3Byb21pc2UnIHwgJ25vbmUnO1xuICAvKipcbiAgICogUmVuYW1lIHRoZSByZXR1cm4gcGFyYW1ldGVycywgZGVmYXVsdDogYGAsIGZvciBleGFtcGxlOlxuICAgKiAtIGBudWxsYCBUaGUgcmVzcG9uc2UgYm9keSBpcyBjb250ZW50XG4gICAqIC0gYGxpc3RgIFRoZSByZXNwb25zZSBib2R5IHNob3VsZCBiZSBgeyBsaXN0OiBbXSB9YFxuICAgKiAtIGByZXN1bHQubGlzdGAgVGhlIHJlc3BvbnNlIGJvZHkgc2hvdWxkIGJlIGB7IHJlc3VsdDogeyBsaXN0OiBbXSB9IH1gXG4gICAqL1xuICByZU5hbWU/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgLyoqXG4gICAqIFNldCB0aGUgZGVmYXVsdCBzdG9yYWdlIHR5cGVcbiAgICogLSBgbWAgU3RvcmFnZSB2aWEgbWVtb3J5XG4gICAqIC0gYHNgIFN0b3JhZ2UgdmlhIGBsb2NhbFN0b3JhZ2VgXG4gICAqL1xuICB0eXBlPzogJ20nIHwgJ3MnO1xuICAvKipcbiAgICogU2V0IHRoZSBkZWZhdWx0IGV4cGlyZSB0aW1lIChVbml0OiBzZWNvbmQpXG4gICAqL1xuICBleHBpcmU/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBLZXkgcHJlZml4IG9mIHBlcnNpc3RlbnQgZGF0YSwgZGVmYXVsdDogYGBcbiAgICovXG4gIHByZWZpeD86IHN0cmluZztcbiAgLyoqXG4gICAqIEtleSBuYW1lIG9mIHBlcnNpc3RlbnQgZGF0YSBtZXRhZGF0YSBzdG9yYWdlLCBkZWZhdWx0OiBgX19jYWNoZV9tZXRhYFxuICAgKi9cbiAgbWV0YV9rZXk/OiBzdHJpbmc7XG59XG4iXX0=