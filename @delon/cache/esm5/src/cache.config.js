/**
 * @fileoverview added by tsickle
 * Generated from: src/cache.config.ts
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
    /** @nocollapse */ DelonCacheConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function DelonCacheConfig_Factory() { return new DelonCacheConfig(); }, token: DelonCacheConfig, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NhY2hlLyIsInNvdXJjZXMiOlsic3JjL2NhY2hlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDO0lBQUE7Ozs7OztRQU9FLFNBQUksR0FBd0IsU0FBUyxDQUFDOzs7Ozs7O1FBT3RDLFdBQU0sR0FBdUIsRUFBRSxDQUFDOzs7O1FBY2hDLFdBQU0sR0FBWSxFQUFFLENBQUM7Ozs7UUFJckIsYUFBUSxHQUFZLGNBQWMsQ0FBQztLQUNwQzs7Z0JBakNBLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OzsyQkFGbEM7Q0FtQ0MsQUFqQ0QsSUFpQ0M7U0FoQ1ksZ0JBQWdCOzs7Ozs7OztJQU0zQixnQ0FBc0M7Ozs7Ozs7O0lBT3RDLGtDQUFnQzs7Ozs7OztJQU1oQyxnQ0FBaUI7Ozs7O0lBSWpCLGtDQUFnQjs7Ozs7SUFJaEIsa0NBQXFCOzs7OztJQUlyQixvQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgRGVsb25DYWNoZUNvbmZpZyB7XG4gIC8qKlxuICAgKiBDYWNoZSBtb2RlLCBkZWZhdWx0OiBgcHJvbWlzZWBcbiAgICogLSBgcHJvbWlzZWAgQ29udmVudGlvbiBtb2RlLCBhbGxvd2luZyBga2V5YCB0byBnZXQgZGF0YSBhcyBodHRwXG4gICAqIC0gYG5vbmVgIE5vcm1hbCBtb2RlXG4gICAqL1xuICBtb2RlPzogJ3Byb21pc2UnIHwgJ25vbmUnID0gJ3Byb21pc2UnO1xuICAvKipcbiAgICogUmVuYW1lIHRoZSByZXR1cm4gcGFyYW1ldGVycywgZm9yIGV4YW1wbGU6XG4gICAqIC0gYG51bGxgIFRoZSByZXNwb25zZSBib2R5IGlzIGNvbnRlbnRcbiAgICogLSBgbGlzdGAgVGhlIHJlc3BvbnNlIGJvZHkgc2hvdWxkIGJlIGB7IGxpc3Q6IFtdIH1gXG4gICAqIC0gYHJlc3VsdC5saXN0YCBUaGUgcmVzcG9uc2UgYm9keSBzaG91bGQgYmUgYHsgcmVzdWx0OiB7IGxpc3Q6IFtdIH0gfWBcbiAgICovXG4gIHJlTmFtZT86IHN0cmluZyB8IHN0cmluZ1tdID0gJyc7XG4gIC8qKlxuICAgKiBTZXQgdGhlIGRlZmF1bHQgc3RvcmFnZSB0eXBlXG4gICAqIC0gYG1gIFN0b3JhZ2UgdmlhIG1lbW9yeVxuICAgKiAtIGBzYCBTdG9yYWdlIHZpYSBgbG9jYWxTdG9yYWdlYFxuICAgKi9cbiAgdHlwZT86ICdtJyB8ICdzJztcbiAgLyoqXG4gICAqIFNldCB0aGUgZGVmYXVsdCBleHBpcmUgdGltZSAoVW5pdDogc2Vjb25kKVxuICAgKi9cbiAgZXhwaXJlPzogbnVtYmVyO1xuICAvKipcbiAgICogS2V5IHByZWZpeCBvZiBwZXJzaXN0ZW50IGRhdGFcbiAgICovXG4gIHByZWZpeD86IHN0cmluZyA9ICcnO1xuICAvKipcbiAgICogS2V5IG5hbWUgb2YgcGVyc2lzdGVudCBkYXRhIG1ldGFkYXRhIHN0b3JhZ2VcbiAgICovXG4gIG1ldGFfa2V5Pzogc3RyaW5nID0gJ19fY2FjaGVfbWV0YSc7XG59XG4iXX0=