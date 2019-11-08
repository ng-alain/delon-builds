/**
 * @fileoverview added by tsickle
 * Generated from: src/store/memory.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MemoryStore = /** @class */ (function () {
    function MemoryStore() {
        this.cache = {};
    }
    /**
     * @param {?} key
     * @return {?}
     */
    MemoryStore.prototype.get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.cache[key] || ((/** @type {?} */ ({})));
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    MemoryStore.prototype.set = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        this.cache[key] = value;
        return true;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    MemoryStore.prototype.remove = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        this.cache[key] = null;
    };
    return MemoryStore;
}());
export { MemoryStore };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MemoryStore.prototype.cache;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtb3J5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYXV0aC8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS9tZW1vcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBO0lBQUE7UUFDVSxVQUFLLEdBQTBDLEVBQUUsQ0FBQztJQWM1RCxDQUFDOzs7OztJQVpDLHlCQUFHOzs7O0lBQUgsVUFBSSxHQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQUEsRUFBRSxFQUFlLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7Ozs7SUFFRCx5QkFBRzs7Ozs7SUFBSCxVQUFJLEdBQVcsRUFBRSxLQUFrQjtRQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUN4QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBRUQsNEJBQU07Ozs7SUFBTixVQUFPLEdBQVc7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7Ozs7Ozs7SUFkQyw0QkFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJVG9rZW5Nb2RlbCB9IGZyb20gJy4uL3Rva2VuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBJU3RvcmUgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbmV4cG9ydCBjbGFzcyBNZW1vcnlTdG9yZSBpbXBsZW1lbnRzIElTdG9yZSB7XG4gIHByaXZhdGUgY2FjaGU6IHsgW2tleTogc3RyaW5nXTogSVRva2VuTW9kZWwgfCBudWxsIH0gPSB7fTtcblxuICBnZXQoa2V5OiBzdHJpbmcpOiBJVG9rZW5Nb2RlbCB7XG4gICAgcmV0dXJuIHRoaXMuY2FjaGVba2V5XSB8fCAoe30gYXMgSVRva2VuTW9kZWwpO1xuICB9XG5cbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogSVRva2VuTW9kZWwpOiBib29sZWFuIHtcbiAgICB0aGlzLmNhY2hlW2tleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJlbW92ZShrZXk6IHN0cmluZykge1xuICAgIHRoaXMuY2FjaGVba2V5XSA9IG51bGw7XG4gIH1cbn1cbiJdfQ==