/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var LocalStorageCacheService = /** @class */ (function () {
    function LocalStorageCacheService() {
    }
    /**
     * @param {?} key
     * @return {?}
     */
    LocalStorageCacheService.prototype.get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return JSON.parse(localStorage.getItem(key) || 'null') || null;
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    LocalStorageCacheService.prototype.set = /**
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
    LocalStorageCacheService.prototype.remove = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        localStorage.removeItem(key);
    };
    return LocalStorageCacheService;
}());
export { LocalStorageCacheService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RvcmFnZS1jYWNoZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NhY2hlLyIsInNvdXJjZXMiOlsic3JjL2xvY2FsLXN0b3JhZ2UtY2FjaGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUE7SUFBQTtJQWFBLENBQUM7Ozs7O0lBWkMsc0NBQUc7Ozs7SUFBSCxVQUFJLEdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDakUsQ0FBQzs7Ozs7O0lBRUQsc0NBQUc7Ozs7O0lBQUgsVUFBSSxHQUFXLEVBQUUsS0FBYTtRQUM1QixZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDakQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVELHlDQUFNOzs7O0lBQU4sVUFBTyxHQUFXO1FBQ2hCLFlBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNILCtCQUFDO0FBQUQsQ0FBQyxBQWJELElBYUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQ2FjaGUsIElDYWNoZVN0b3JlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgTG9jYWxTdG9yYWdlQ2FjaGVTZXJ2aWNlIGltcGxlbWVudHMgSUNhY2hlU3RvcmUge1xuICBnZXQoa2V5OiBzdHJpbmcpOiBJQ2FjaGUge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgfHwgJ251bGwnKSB8fCBudWxsO1xuICB9XG5cbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogSUNhY2hlKTogYm9vbGVhbiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmVtb3ZlKGtleTogc3RyaW5nKSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgfVxufVxuIl19