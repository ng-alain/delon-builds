/**
 * @fileoverview added by tsickle
 * Generated from: src/store/session-storage.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * `sessionStorage` storage, **lost after closing the browser**.
 */
var /**
 * `sessionStorage` storage, **lost after closing the browser**.
 */
SessionStorageStore = /** @class */ (function () {
    function SessionStorageStore() {
    }
    /**
     * @param {?} key
     * @return {?}
     */
    SessionStorageStore.prototype.get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return JSON.parse(sessionStorage.getItem(key) || '{}') || {};
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    SessionStorageStore.prototype.set = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
        return true;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    SessionStorageStore.prototype.remove = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        sessionStorage.removeItem(key);
    };
    return SessionStorageStore;
}());
/**
 * `sessionStorage` storage, **lost after closing the browser**.
 */
export { SessionStorageStore };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi1zdG9yYWdlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYXV0aC8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS9zZXNzaW9uLXN0b3JhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQU1BOzs7O0lBQUE7SUFhQSxDQUFDOzs7OztJQVpDLGlDQUFHOzs7O0lBQUgsVUFBSSxHQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9ELENBQUM7Ozs7OztJQUVELGlDQUFHOzs7OztJQUFILFVBQUksR0FBVyxFQUFFLEtBQXlCO1FBQ3hDLGNBQWMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNuRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBRUQsb0NBQU07Ozs7SUFBTixVQUFPLEdBQVc7UUFDaEIsY0FBYyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElUb2tlbk1vZGVsIH0gZnJvbSAnLi4vdG9rZW4vaW50ZXJmYWNlJztcbmltcG9ydCB7IElTdG9yZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuLyoqXG4gKiBgc2Vzc2lvblN0b3JhZ2VgIHN0b3JhZ2UsICoqbG9zdCBhZnRlciBjbG9zaW5nIHRoZSBicm93c2VyKiouXG4gKi9cbmV4cG9ydCBjbGFzcyBTZXNzaW9uU3RvcmFnZVN0b3JlIGltcGxlbWVudHMgSVN0b3JlIHtcbiAgZ2V0KGtleTogc3RyaW5nKTogSVRva2VuTW9kZWwge1xuICAgIHJldHVybiBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oa2V5KSB8fCAne30nKSB8fCB7fTtcbiAgfVxuXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IElUb2tlbk1vZGVsIHwgbnVsbCk6IGJvb2xlYW4ge1xuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmVtb3ZlKGtleTogc3RyaW5nKSB7XG4gICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICB9XG59XG4iXX0=