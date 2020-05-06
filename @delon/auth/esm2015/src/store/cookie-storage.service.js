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
export class CookieStorageStore {
    /**
     * @param {?} key
     * @return {?}
     */
    get(key) {
        return JSON.parse(Cookies.get(key) || '{}') || {};
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    set(key, value) {
        Cookies.set(key, JSON.stringify(value));
        return true;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    remove(key) {
        Cookies.remove(key);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29va2llLXN0b3JhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hdXRoLyIsInNvdXJjZXMiOlsic3JjL3N0b3JlL2Nvb2tpZS1zdG9yYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQWFBLE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBQzdCLEdBQUcsQ0FBQyxHQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BELENBQUM7Ozs7OztJQUVELEdBQUcsQ0FBQyxHQUFXLEVBQUUsS0FBeUI7UUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsR0FBVztRQUNoQixPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElUb2tlbk1vZGVsIH0gZnJvbSAnLi4vdG9rZW4vaW50ZXJmYWNlJztcbmltcG9ydCB7IElTdG9yZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuZGVjbGFyZSB2YXIgQ29va2llczogYW55O1xuXG4vKipcbiAqIGBjb29raWVgIHN0b3JhZ2UsIG11c2UgYmUgaW5zdGFsbCBbanMtY29va2llXShodHRwczovL2dpdGh1Yi5jb20vanMtY29va2llL2pzLWNvb2tpZSkgbGliYXJ5IGFuZCBpbXBvcnQgYFwibm9kZV9tb2R1bGVzL2pzLWNvb2tpZS9zcmMvanMuY29va2llLmpzXCJgIGluIGBhbmd1bGFyLmpzb25gXG4gKlxuICogYGBgdHNcbiAqIC8vIGdsb2JhbC1jb25maWcubW9kdWxlLnRzXG4gKiB7IHByb3ZpZGU6IERBX1NUT1JFX1RPS0VOLCB1c2VDbGFzczogQ29va2llU3RvcmFnZVN0b3JlIH1cbiAqIGBgYFxuICovXG5leHBvcnQgY2xhc3MgQ29va2llU3RvcmFnZVN0b3JlIGltcGxlbWVudHMgSVN0b3JlIHtcbiAgZ2V0KGtleTogc3RyaW5nKTogSVRva2VuTW9kZWwge1xuICAgIHJldHVybiBKU09OLnBhcnNlKENvb2tpZXMuZ2V0KGtleSkgfHwgJ3t9JykgfHwge307XG4gIH1cblxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBJVG9rZW5Nb2RlbCB8IG51bGwpOiBib29sZWFuIHtcbiAgICBDb29raWVzLnNldChrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZW1vdmUoa2V5OiBzdHJpbmcpIHtcbiAgICBDb29raWVzLnJlbW92ZShrZXkpO1xuICB9XG59XG4iXX0=