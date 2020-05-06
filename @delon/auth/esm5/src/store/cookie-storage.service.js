/**
 * @fileoverview added by tsickle
 * Generated from: src/store/cookie-storage.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * `cookie` storage, muse be install [js-cookie](https://github.com/js-cookie/js-cookie) libary and import `"node_modules/js-cookie/src/js.cookie.js"` in `angular.json`
 *
 * ```ts
 * // global-config.module.ts
 * { provide: DA_STORE_TOKEN, useClass: CookieStorageStore }
 * ```
 */
var /**
 * `cookie` storage, muse be install [js-cookie](https://github.com/js-cookie/js-cookie) libary and import `"node_modules/js-cookie/src/js.cookie.js"` in `angular.json`
 *
 * ```ts
 * // global-config.module.ts
 * { provide: DA_STORE_TOKEN, useClass: CookieStorageStore }
 * ```
 */
CookieStorageStore = /** @class */ (function () {
    function CookieStorageStore() {
    }
    /**
     * @param {?} key
     * @return {?}
     */
    CookieStorageStore.prototype.get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return JSON.parse(Cookies.get(key) || '{}') || {};
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    CookieStorageStore.prototype.set = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        Cookies.set(key, JSON.stringify(value));
        return true;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    CookieStorageStore.prototype.remove = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        Cookies.remove(key);
    };
    return CookieStorageStore;
}());
/**
 * `cookie` storage, muse be install [js-cookie](https://github.com/js-cookie/js-cookie) libary and import `"node_modules/js-cookie/src/js.cookie.js"` in `angular.json`
 *
 * ```ts
 * // global-config.module.ts
 * { provide: DA_STORE_TOKEN, useClass: CookieStorageStore }
 * ```
 */
export { CookieStorageStore };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29va2llLXN0b3JhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hdXRoLyIsInNvdXJjZXMiOlsic3JjL3N0b3JlL2Nvb2tpZS1zdG9yYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQWFBOzs7Ozs7Ozs7SUFBQTtJQWFBLENBQUM7Ozs7O0lBWkMsZ0NBQUc7Ozs7SUFBSCxVQUFJLEdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEQsQ0FBQzs7Ozs7O0lBRUQsZ0NBQUc7Ozs7O0lBQUgsVUFBSSxHQUFXLEVBQUUsS0FBeUI7UUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFRCxtQ0FBTTs7OztJQUFOLFVBQU8sR0FBVztRQUNoQixPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUFiRCxJQWFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVRva2VuTW9kZWwgfSBmcm9tICcuLi90b2tlbi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSVN0b3JlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5kZWNsYXJlIHZhciBDb29raWVzOiBhbnk7XG5cbi8qKlxuICogYGNvb2tpZWAgc3RvcmFnZSwgbXVzZSBiZSBpbnN0YWxsIFtqcy1jb29raWVdKGh0dHBzOi8vZ2l0aHViLmNvbS9qcy1jb29raWUvanMtY29va2llKSBsaWJhcnkgYW5kIGltcG9ydCBgXCJub2RlX21vZHVsZXMvanMtY29va2llL3NyYy9qcy5jb29raWUuanNcImAgaW4gYGFuZ3VsYXIuanNvbmBcbiAqXG4gKiBgYGB0c1xuICogLy8gZ2xvYmFsLWNvbmZpZy5tb2R1bGUudHNcbiAqIHsgcHJvdmlkZTogREFfU1RPUkVfVE9LRU4sIHVzZUNsYXNzOiBDb29raWVTdG9yYWdlU3RvcmUgfVxuICogYGBgXG4gKi9cbmV4cG9ydCBjbGFzcyBDb29raWVTdG9yYWdlU3RvcmUgaW1wbGVtZW50cyBJU3RvcmUge1xuICBnZXQoa2V5OiBzdHJpbmcpOiBJVG9rZW5Nb2RlbCB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoQ29va2llcy5nZXQoa2V5KSB8fCAne30nKSB8fCB7fTtcbiAgfVxuXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IElUb2tlbk1vZGVsIHwgbnVsbCk6IGJvb2xlYW4ge1xuICAgIENvb2tpZXMuc2V0KGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJlbW92ZShrZXk6IHN0cmluZykge1xuICAgIENvb2tpZXMucmVtb3ZlKGtleSk7XG4gIH1cbn1cbiJdfQ==