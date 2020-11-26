/**
 * @fileoverview added by tsickle
 * Generated from: src/interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uL3BhY2thZ2VzL2NhY2hlLyIsInNvdXJjZXMiOlsic3JjL2ludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBLDRCQUlDOzs7SUFIQyxtQkFBTzs7Ozs7SUFFUCxtQkFBVTs7Ozs7QUFJWixpQ0FNQzs7Ozs7O0lBTEMsK0NBQWdDOzs7Ozs7SUFFaEMsc0RBQXlDOzs7OztJQUV6QyxrREFBMEI7Ozs7O0FBSzVCLHVDQUdDOzs7SUFGQyxpQ0FBc0I7O0lBQ3RCLGtDQUFZIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBJQ2FjaGUge1xuICB2OiBhbnk7XG4gIC8qKiDov4fmnJ/ml7bpl7TmiLPvvIxgMGAg6KGo56S65LiN6L+H5pyfICovXG4gIGU6IG51bWJlcjtcbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBJQ2FjaGVTdG9yZSB7XG4gIGdldChrZXk6IHN0cmluZyk6IElDYWNoZSB8IG51bGw7XG5cbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogSUNhY2hlKTogYm9vbGVhbjtcblxuICByZW1vdmUoa2V5OiBzdHJpbmcpOiB2b2lkO1xufVxuXG5leHBvcnQgdHlwZSBDYWNoZU5vdGlmeVR5cGUgPSAnc2V0JyB8ICdyZW1vdmUnIHwgJ2V4cGlyZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FjaGVOb3RpZnlSZXN1bHQge1xuICB0eXBlOiBDYWNoZU5vdGlmeVR5cGU7XG4gIHZhbHVlPzogYW55O1xufVxuIl19