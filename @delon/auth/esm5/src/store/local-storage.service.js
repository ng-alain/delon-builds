/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LocalStorageStore = /** @class */ (function () {
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
export { LocalStorageStore };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvc3RvcmUvbG9jYWwtc3RvcmFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxJQUFBOzs7Ozs7O0lBQ0UsK0JBQUc7Ozs7SUFBSCxVQUFJLEdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDNUQ7Ozs7OztJQUVELCtCQUFHOzs7OztJQUFILFVBQUksR0FBVyxFQUFFLEtBQWtCO1FBQ2pDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNqRCxPQUFPLElBQUksQ0FBQztLQUNiOzs7OztJQUVELGtDQUFNOzs7O0lBQU4sVUFBTyxHQUFXO1FBQ2hCLFlBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDOUI7NEJBZkg7SUFnQkMsQ0FBQTtBQWJELDZCQWFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVN0b3JlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBJVG9rZW5Nb2RlbCB9IGZyb20gJy4uL3Rva2VuL2ludGVyZmFjZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9jYWxTdG9yYWdlU3RvcmUgaW1wbGVtZW50cyBJU3RvcmUge1xyXG4gIGdldChrZXk6IHN0cmluZyk6IElUb2tlbk1vZGVsIHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgfHwgJ3t9JykgfHwge307XHJcbiAgfVxyXG5cclxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBJVG9rZW5Nb2RlbCk6IGJvb2xlYW4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICByZW1vdmUoa2V5OiBzdHJpbmcpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==