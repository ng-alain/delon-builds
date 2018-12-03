/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvc3RvcmUvbG9jYWwtc3RvcmFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQTtJQUFBO0lBYUEsQ0FBQzs7Ozs7SUFaQywrQkFBRzs7OztJQUFILFVBQUksR0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3RCxDQUFDOzs7Ozs7SUFFRCwrQkFBRzs7Ozs7SUFBSCxVQUFJLEdBQVcsRUFBRSxLQUFrQjtRQUNqQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDakQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVELGtDQUFNOzs7O0lBQU4sVUFBTyxHQUFXO1FBQ2hCLFlBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQWJELElBYUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJVG9rZW5Nb2RlbCB9IGZyb20gJy4uL3Rva2VuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBJU3RvcmUgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbmV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2VTdG9yZSBpbXBsZW1lbnRzIElTdG9yZSB7XG4gIGdldChrZXk6IHN0cmluZyk6IElUb2tlbk1vZGVsIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpIHx8ICd7fScpIHx8IHt9O1xuICB9XG5cbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogSVRva2VuTW9kZWwpOiBib29sZWFuIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZW1vdmUoa2V5OiBzdHJpbmcpIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICB9XG59XG4iXX0=