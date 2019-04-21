/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtb3J5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYXV0aC8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS9tZW1vcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0E7SUFBQTtRQUNVLFVBQUssR0FBMEMsRUFBRSxDQUFDO0lBYzVELENBQUM7Ozs7O0lBWkMseUJBQUc7Ozs7SUFBSCxVQUFJLEdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBQSxFQUFFLEVBQWUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7OztJQUVELHlCQUFHOzs7OztJQUFILFVBQUksR0FBVyxFQUFFLEtBQWtCO1FBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFRCw0QkFBTTs7OztJQUFOLFVBQU8sR0FBVztRQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQzs7Ozs7OztJQWRDLDRCQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElUb2tlbk1vZGVsIH0gZnJvbSAnLi4vdG9rZW4vaW50ZXJmYWNlJztcbmltcG9ydCB7IElTdG9yZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuZXhwb3J0IGNsYXNzIE1lbW9yeVN0b3JlIGltcGxlbWVudHMgSVN0b3JlIHtcbiAgcHJpdmF0ZSBjYWNoZTogeyBba2V5OiBzdHJpbmddOiBJVG9rZW5Nb2RlbCB8IG51bGwgfSA9IHt9O1xuXG4gIGdldChrZXk6IHN0cmluZyk6IElUb2tlbk1vZGVsIHtcbiAgICByZXR1cm4gdGhpcy5jYWNoZVtrZXldIHx8ICh7fSBhcyBJVG9rZW5Nb2RlbCk7XG4gIH1cblxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBJVG9rZW5Nb2RlbCk6IGJvb2xlYW4ge1xuICAgIHRoaXMuY2FjaGVba2V5XSA9IHZhbHVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmVtb3ZlKGtleTogc3RyaW5nKSB7XG4gICAgdGhpcy5jYWNoZVtrZXldID0gbnVsbDtcbiAgfVxufVxuIl19