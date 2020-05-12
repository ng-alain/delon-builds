/**
 * @fileoverview added by tsickle
 * Generated from: src/store/local-storage.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
export function DA_STORE_TOKEN_LOCAL_FACTORY() {
    return new LocalStorageStore();
}
/**
 * `localStorage` storage, **not lost after closing the browser**.
 */
var /**
 * `localStorage` storage, **not lost after closing the browser**.
 */
LocalStorageStore = /** @class */ (function () {
    function LocalStorageStore() {
    }
    /**
     * @param {?} key
     * @return {?}
     */
    LocalStorageStore.prototype.get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return JSON.parse(localStorage.getItem(key) || '{}') || {};
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    LocalStorageStore.prototype.set = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    LocalStorageStore.prototype.remove = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        localStorage.removeItem(key);
    };
    return LocalStorageStore;
}());
/**
 * `localStorage` storage, **not lost after closing the browser**.
 */
export { LocalStorageStore };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvc3RvcmUvbG9jYWwtc3RvcmFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBR0EsTUFBTSxVQUFVLDRCQUE0QjtJQUMxQyxPQUFPLElBQUksaUJBQWlCLEVBQUUsQ0FBQztBQUNqQyxDQUFDOzs7O0FBS0Q7Ozs7SUFBQTtJQWFBLENBQUM7Ozs7O0lBWkMsK0JBQUc7Ozs7SUFBSCxVQUFJLEdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDN0QsQ0FBQzs7Ozs7O0lBRUQsK0JBQUc7Ozs7O0lBQUgsVUFBSSxHQUFXLEVBQUUsS0FBeUI7UUFDeEMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2pELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFRCxrQ0FBTTs7OztJQUFOLFVBQU8sR0FBVztRQUNoQixZQUFZLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUFiRCxJQWFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVRva2VuTW9kZWwgfSBmcm9tICcuLi90b2tlbi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSVN0b3JlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gREFfU1RPUkVfVE9LRU5fTE9DQUxfRkFDVE9SWSgpOiBJU3RvcmUge1xuICByZXR1cm4gbmV3IExvY2FsU3RvcmFnZVN0b3JlKCk7XG59XG5cbi8qKlxuICogYGxvY2FsU3RvcmFnZWAgc3RvcmFnZSwgKipub3QgbG9zdCBhZnRlciBjbG9zaW5nIHRoZSBicm93c2VyKiouXG4gKi9cbmV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2VTdG9yZSBpbXBsZW1lbnRzIElTdG9yZSB7XG4gIGdldChrZXk6IHN0cmluZyk6IElUb2tlbk1vZGVsIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpIHx8ICd7fScpIHx8IHt9O1xuICB9XG5cbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogSVRva2VuTW9kZWwgfCBudWxsKTogYm9vbGVhbiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmVtb3ZlKGtleTogc3RyaW5nKSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgfVxufVxuIl19