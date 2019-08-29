/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var DelonCacheConfig = /** @class */ (function () {
    function DelonCacheConfig() {
        /**
         * Cache mode, default: `promise`
         * - `promise` Convention mode, allowing `key` to get data as http
         * - `none` Normal mode
         */
        this.mode = 'promise';
        /**
         * Rename the return parameters, for example:
         * - `null` The response body is content
         * - `list` The response body should be `{ list: [] }`
         * - `result.list` The response body should be `{ result: { list: [] } }`
         */
        this.reName = '';
        /**
         * Key prefix of persistent data
         */
        this.prefix = '';
        /**
         * Key name of persistent data metadata storage
         */
        this.meta_key = '__cache_meta';
    }
    DelonCacheConfig.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ DelonCacheConfig.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DelonCacheConfig_Factory() { return new DelonCacheConfig(); }, token: DelonCacheConfig, providedIn: "root" });
    return DelonCacheConfig;
}());
export { DelonCacheConfig };
if (false) {
    /**
     * Cache mode, default: `promise`
     * - `promise` Convention mode, allowing `key` to get data as http
     * - `none` Normal mode
     * @type {?}
     */
    DelonCacheConfig.prototype.mode;
    /**
     * Rename the return parameters, for example:
     * - `null` The response body is content
     * - `list` The response body should be `{ list: [] }`
     * - `result.list` The response body should be `{ result: { list: [] } }`
     * @type {?}
     */
    DelonCacheConfig.prototype.reName;
    /**
     * Set the default storage type
     * - `m` Storage via memory
     * - `s` Storage via `localStorage`
     * @type {?}
     */
    DelonCacheConfig.prototype.type;
    /**
     * Set the default expire time (Unit: second)
     * @type {?}
     */
    DelonCacheConfig.prototype.expire;
    /**
     * Key prefix of persistent data
     * @type {?}
     */
    DelonCacheConfig.prototype.prefix;
    /**
     * Key name of persistent data metadata storage
     * @type {?}
     */
    DelonCacheConfig.prototype.meta_key;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NhY2hlLyIsInNvdXJjZXMiOlsic3JjL2NhY2hlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0M7SUFBQTs7Ozs7O1FBT0UsU0FBSSxHQUF3QixTQUFTLENBQUM7Ozs7Ozs7UUFPdEMsV0FBTSxHQUF1QixFQUFFLENBQUM7Ozs7UUFjaEMsV0FBTSxHQUFZLEVBQUUsQ0FBQzs7OztRQUlyQixhQUFRLEdBQVksY0FBYyxDQUFDO0tBQ3BDOztnQkFqQ0EsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OzJCQUZsQztDQW1DQyxBQWpDRCxJQWlDQztTQWhDWSxnQkFBZ0I7Ozs7Ozs7O0lBTTNCLGdDQUFzQzs7Ozs7Ozs7SUFPdEMsa0NBQWdDOzs7Ozs7O0lBTWhDLGdDQUFpQjs7Ozs7SUFJakIsa0NBQWdCOzs7OztJQUloQixrQ0FBcUI7Ozs7O0lBSXJCLG9DQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBEZWxvbkNhY2hlQ29uZmlnIHtcbiAgLyoqXG4gICAqIENhY2hlIG1vZGUsIGRlZmF1bHQ6IGBwcm9taXNlYFxuICAgKiAtIGBwcm9taXNlYCBDb252ZW50aW9uIG1vZGUsIGFsbG93aW5nIGBrZXlgIHRvIGdldCBkYXRhIGFzIGh0dHBcbiAgICogLSBgbm9uZWAgTm9ybWFsIG1vZGVcbiAgICovXG4gIG1vZGU/OiAncHJvbWlzZScgfCAnbm9uZScgPSAncHJvbWlzZSc7XG4gIC8qKlxuICAgKiBSZW5hbWUgdGhlIHJldHVybiBwYXJhbWV0ZXJzLCBmb3IgZXhhbXBsZTpcbiAgICogLSBgbnVsbGAgVGhlIHJlc3BvbnNlIGJvZHkgaXMgY29udGVudFxuICAgKiAtIGBsaXN0YCBUaGUgcmVzcG9uc2UgYm9keSBzaG91bGQgYmUgYHsgbGlzdDogW10gfWBcbiAgICogLSBgcmVzdWx0Lmxpc3RgIFRoZSByZXNwb25zZSBib2R5IHNob3VsZCBiZSBgeyByZXN1bHQ6IHsgbGlzdDogW10gfSB9YFxuICAgKi9cbiAgcmVOYW1lPzogc3RyaW5nIHwgc3RyaW5nW10gPSAnJztcbiAgLyoqXG4gICAqIFNldCB0aGUgZGVmYXVsdCBzdG9yYWdlIHR5cGVcbiAgICogLSBgbWAgU3RvcmFnZSB2aWEgbWVtb3J5XG4gICAqIC0gYHNgIFN0b3JhZ2UgdmlhIGBsb2NhbFN0b3JhZ2VgXG4gICAqL1xuICB0eXBlPzogJ20nIHwgJ3MnO1xuICAvKipcbiAgICogU2V0IHRoZSBkZWZhdWx0IGV4cGlyZSB0aW1lIChVbml0OiBzZWNvbmQpXG4gICAqL1xuICBleHBpcmU/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBLZXkgcHJlZml4IG9mIHBlcnNpc3RlbnQgZGF0YVxuICAgKi9cbiAgcHJlZml4Pzogc3RyaW5nID0gJyc7XG4gIC8qKlxuICAgKiBLZXkgbmFtZSBvZiBwZXJzaXN0ZW50IGRhdGEgbWV0YWRhdGEgc3RvcmFnZVxuICAgKi9cbiAgbWV0YV9rZXk/OiBzdHJpbmcgPSAnX19jYWNoZV9tZXRhJztcbn1cbiJdfQ==