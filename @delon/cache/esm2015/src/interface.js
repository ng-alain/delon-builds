/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/**
 * @record
 */
export function ICache() { }
if (false) {
    /** @type {?} */
    ICache.prototype.v;
    /**
     * 过期时间戳，`0` 表示不过期
     * @type {?}
     */
    ICache.prototype.e;
}
/** @type {?} */
export const DC_STORE_STORAGE_TOKEN = new InjectionToken('DC_STORE_STORAGE_TOKEN');
/**
 * @record
 */
export function ICacheStore() { }
if (false) {
    /**
     * @param {?} key
     * @return {?}
     */
    ICacheStore.prototype.get = function (key) { };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    ICacheStore.prototype.set = function (key, value) { };
    /**
     * @param {?} key
     * @return {?}
     */
    ICacheStore.prototype.remove = function (key) { };
}
/**
 * @record
 */
export function CacheNotifyResult() { }
if (false) {
    /** @type {?} */
    CacheNotifyResult.prototype.type;
    /** @type {?|undefined} */
    CacheNotifyResult.prototype.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NhY2hlLyIsInNvdXJjZXMiOlsic3JjL2ludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUUvQyw0QkFLQzs7O0lBSEMsbUJBQU87Ozs7O0lBRVAsbUJBQVU7OztBQUdaLE1BQU0sT0FBTyxzQkFBc0IsR0FBRyxJQUFJLGNBQWMsQ0FDdEQsd0JBQXdCLENBQ3pCOzs7O0FBRUQsaUNBTUM7Ozs7OztJQUxDLCtDQUF5Qjs7Ozs7O0lBRXpCLHNEQUF5Qzs7Ozs7SUFFekMsa0RBQW9COzs7OztBQUt0Qix1Q0FJQzs7O0lBSEMsaUNBQXNCOztJQUV0QixrQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNhY2hlIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICB2OiBhbnk7XG4gIC8qKiDov4fmnJ/ml7bpl7TmiLPvvIxgMGAg6KGo56S65LiN6L+H5pyfICovXG4gIGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IERDX1NUT1JFX1NUT1JBR0VfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48SUNhY2hlU3RvcmU+KFxuICAnRENfU1RPUkVfU1RPUkFHRV9UT0tFTicsXG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIElDYWNoZVN0b3JlIHtcbiAgZ2V0KGtleTogc3RyaW5nKTogSUNhY2hlO1xuXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IElDYWNoZSk6IGJvb2xlYW47XG5cbiAgcmVtb3ZlKGtleTogc3RyaW5nKTtcbn1cblxuZXhwb3J0IHR5cGUgQ2FjaGVOb3RpZnlUeXBlID0gJ3NldCcgfCAncmVtb3ZlJyB8ICdleHBpcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhY2hlTm90aWZ5UmVzdWx0IHtcbiAgdHlwZTogQ2FjaGVOb3RpZnlUeXBlO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHZhbHVlPzogYW55O1xufVxuIl19