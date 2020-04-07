/**
 * @fileoverview added by tsickle
 * Generated from: src/cache.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class DelonCacheConfig {
    constructor() {
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
}
DelonCacheConfig.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ DelonCacheConfig.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DelonCacheConfig_Factory() { return new DelonCacheConfig(); }, token: DelonCacheConfig, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NhY2hlLyIsInNvdXJjZXMiOlsic3JjL2NhY2hlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzNDLE1BQU0sT0FBTyxnQkFBZ0I7SUFEN0I7Ozs7OztRQU9FLFNBQUksR0FBd0IsU0FBUyxDQUFDOzs7Ozs7O1FBT3RDLFdBQU0sR0FBdUIsRUFBRSxDQUFDOzs7O1FBY2hDLFdBQU0sR0FBWSxFQUFFLENBQUM7Ozs7UUFJckIsYUFBUSxHQUFZLGNBQWMsQ0FBQztLQUNwQzs7O1lBakNBLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Ozs7Ozs7SUFPaEMsZ0NBQXNDOzs7Ozs7OztJQU90QyxrQ0FBZ0M7Ozs7Ozs7SUFNaEMsZ0NBQWlCOzs7OztJQUlqQixrQ0FBZ0I7Ozs7O0lBSWhCLGtDQUFxQjs7Ozs7SUFJckIsb0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIERlbG9uQ2FjaGVDb25maWcge1xuICAvKipcbiAgICogQ2FjaGUgbW9kZSwgZGVmYXVsdDogYHByb21pc2VgXG4gICAqIC0gYHByb21pc2VgIENvbnZlbnRpb24gbW9kZSwgYWxsb3dpbmcgYGtleWAgdG8gZ2V0IGRhdGEgYXMgaHR0cFxuICAgKiAtIGBub25lYCBOb3JtYWwgbW9kZVxuICAgKi9cbiAgbW9kZT86ICdwcm9taXNlJyB8ICdub25lJyA9ICdwcm9taXNlJztcbiAgLyoqXG4gICAqIFJlbmFtZSB0aGUgcmV0dXJuIHBhcmFtZXRlcnMsIGZvciBleGFtcGxlOlxuICAgKiAtIGBudWxsYCBUaGUgcmVzcG9uc2UgYm9keSBpcyBjb250ZW50XG4gICAqIC0gYGxpc3RgIFRoZSByZXNwb25zZSBib2R5IHNob3VsZCBiZSBgeyBsaXN0OiBbXSB9YFxuICAgKiAtIGByZXN1bHQubGlzdGAgVGhlIHJlc3BvbnNlIGJvZHkgc2hvdWxkIGJlIGB7IHJlc3VsdDogeyBsaXN0OiBbXSB9IH1gXG4gICAqL1xuICByZU5hbWU/OiBzdHJpbmcgfCBzdHJpbmdbXSA9ICcnO1xuICAvKipcbiAgICogU2V0IHRoZSBkZWZhdWx0IHN0b3JhZ2UgdHlwZVxuICAgKiAtIGBtYCBTdG9yYWdlIHZpYSBtZW1vcnlcbiAgICogLSBgc2AgU3RvcmFnZSB2aWEgYGxvY2FsU3RvcmFnZWBcbiAgICovXG4gIHR5cGU/OiAnbScgfCAncyc7XG4gIC8qKlxuICAgKiBTZXQgdGhlIGRlZmF1bHQgZXhwaXJlIHRpbWUgKFVuaXQ6IHNlY29uZClcbiAgICovXG4gIGV4cGlyZT86IG51bWJlcjtcbiAgLyoqXG4gICAqIEtleSBwcmVmaXggb2YgcGVyc2lzdGVudCBkYXRhXG4gICAqL1xuICBwcmVmaXg/OiBzdHJpbmcgPSAnJztcbiAgLyoqXG4gICAqIEtleSBuYW1lIG9mIHBlcnNpc3RlbnQgZGF0YSBtZXRhZGF0YSBzdG9yYWdlXG4gICAqL1xuICBtZXRhX2tleT86IHN0cmluZyA9ICdfX2NhY2hlX21ldGEnO1xufVxuIl19