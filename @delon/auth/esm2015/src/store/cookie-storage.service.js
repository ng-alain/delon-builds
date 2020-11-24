/**
 * @fileoverview added by tsickle
 * Generated from: src/store/cookie-storage.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * `cookie` storage, muse be install [js-cookie](https://github.com/js-cookie/js-cookie) libary and import `"node_modules/js-cookie/dist/js.cookie.js"` in `angular.json`
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29va2llLXN0b3JhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9wYWNrYWdlcy9hdXRoLyIsInNvdXJjZXMiOlsic3JjL3N0b3JlL2Nvb2tpZS1zdG9yYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQWFBLE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBQzdCLEdBQUcsQ0FBQyxHQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BELENBQUM7Ozs7OztJQUVELEdBQUcsQ0FBQyxHQUFXLEVBQUUsS0FBeUI7UUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsR0FBVztRQUNoQixPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElUb2tlbk1vZGVsIH0gZnJvbSAnLi4vdG9rZW4vaW50ZXJmYWNlJztcbmltcG9ydCB7IElTdG9yZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuZGVjbGFyZSB2YXIgQ29va2llczogYW55O1xuXG4vKipcbiAqIGBjb29raWVgIHN0b3JhZ2UsIG11c2UgYmUgaW5zdGFsbCBbanMtY29va2llXShodHRwczovL2dpdGh1Yi5jb20vanMtY29va2llL2pzLWNvb2tpZSkgbGliYXJ5IGFuZCBpbXBvcnQgYFwibm9kZV9tb2R1bGVzL2pzLWNvb2tpZS9kaXN0L2pzLmNvb2tpZS5qc1wiYCBpbiBgYW5ndWxhci5qc29uYFxuICpcbiAqIGBgYHRzXG4gKiAvLyBnbG9iYWwtY29uZmlnLm1vZHVsZS50c1xuICogeyBwcm92aWRlOiBEQV9TVE9SRV9UT0tFTiwgdXNlQ2xhc3M6IENvb2tpZVN0b3JhZ2VTdG9yZSB9XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNsYXNzIENvb2tpZVN0b3JhZ2VTdG9yZSBpbXBsZW1lbnRzIElTdG9yZSB7XG4gIGdldChrZXk6IHN0cmluZyk6IElUb2tlbk1vZGVsIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShDb29raWVzLmdldChrZXkpIHx8ICd7fScpIHx8IHt9O1xuICB9XG5cbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogSVRva2VuTW9kZWwgfCBudWxsKTogYm9vbGVhbiB7XG4gICAgQ29va2llcy5zZXQoa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmVtb3ZlKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgQ29va2llcy5yZW1vdmUoa2V5KTtcbiAgfVxufVxuIl19