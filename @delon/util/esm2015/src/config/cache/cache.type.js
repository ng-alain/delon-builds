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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUudHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3V0aWwvc3JjL2NvbmZpZy9jYWNoZS9jYWNoZS50eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBZ0NDOzs7Ozs7OztJQTFCQyxnQ0FBMEI7Ozs7Ozs7O0lBTzFCLGtDQUEyQjs7Ozs7OztJQU0zQixnQ0FBaUI7Ozs7O0lBSWpCLGtDQUFnQjs7Ozs7SUFJaEIsa0NBQWdCOzs7OztJQUloQixvQ0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIEFsYWluQ2FjaGVDb25maWcge1xuICAvKipcbiAgICogQ2FjaGUgbW9kZSwgZGVmYXVsdDogYHByb21pc2VgXG4gICAqIC0gYHByb21pc2VgIENvbnZlbnRpb24gbW9kZSwgYWxsb3dpbmcgYGtleWAgdG8gZ2V0IGRhdGEgYXMgaHR0cFxuICAgKiAtIGBub25lYCBOb3JtYWwgbW9kZVxuICAgKi9cbiAgbW9kZT86ICdwcm9taXNlJyB8ICdub25lJztcbiAgLyoqXG4gICAqIFJlbmFtZSB0aGUgcmV0dXJuIHBhcmFtZXRlcnMsIGRlZmF1bHQ6IGBgLCBmb3IgZXhhbXBsZTpcbiAgICogLSBgbnVsbGAgVGhlIHJlc3BvbnNlIGJvZHkgaXMgY29udGVudFxuICAgKiAtIGBsaXN0YCBUaGUgcmVzcG9uc2UgYm9keSBzaG91bGQgYmUgYHsgbGlzdDogW10gfWBcbiAgICogLSBgcmVzdWx0Lmxpc3RgIFRoZSByZXNwb25zZSBib2R5IHNob3VsZCBiZSBgeyByZXN1bHQ6IHsgbGlzdDogW10gfSB9YFxuICAgKi9cbiAgcmVOYW1lPzogc3RyaW5nIHwgc3RyaW5nW107XG4gIC8qKlxuICAgKiBTZXQgdGhlIGRlZmF1bHQgc3RvcmFnZSB0eXBlXG4gICAqIC0gYG1gIFN0b3JhZ2UgdmlhIG1lbW9yeVxuICAgKiAtIGBzYCBTdG9yYWdlIHZpYSBgbG9jYWxTdG9yYWdlYFxuICAgKi9cbiAgdHlwZT86ICdtJyB8ICdzJztcbiAgLyoqXG4gICAqIFNldCB0aGUgZGVmYXVsdCBleHBpcmUgdGltZSAoVW5pdDogc2Vjb25kKVxuICAgKi9cbiAgZXhwaXJlPzogbnVtYmVyO1xuICAvKipcbiAgICogS2V5IHByZWZpeCBvZiBwZXJzaXN0ZW50IGRhdGEsIGRlZmF1bHQ6IGBgXG4gICAqL1xuICBwcmVmaXg/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBLZXkgbmFtZSBvZiBwZXJzaXN0ZW50IGRhdGEgbWV0YWRhdGEgc3RvcmFnZSwgZGVmYXVsdDogYF9fY2FjaGVfbWV0YWBcbiAgICovXG4gIG1ldGFfa2V5Pzogc3RyaW5nO1xufVxuIl19