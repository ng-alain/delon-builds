/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        return this.cache[key] || /** @type {?} */ ({});
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
    /** @type {?} */
    MemoryStore.prototype.cache;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtb3J5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYXV0aC8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS9tZW1vcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsSUFBQTs7cUJBQ2tELEVBQUU7Ozs7OztJQUVsRCx5QkFBRzs7OztJQUFILFVBQUksR0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsc0JBQVMsRUFBRSxDQUFBLENBQUM7S0FDbkM7Ozs7OztJQUVELHlCQUFHOzs7OztJQUFILFVBQUksR0FBVyxFQUFFLEtBQWtCO1FBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLE9BQU8sSUFBSSxDQUFDO0tBQ2I7Ozs7O0lBRUQsNEJBQU07Ozs7SUFBTixVQUFPLEdBQVc7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7S0FDeEI7c0JBakJIO0lBa0JDLENBQUE7QUFmRCx1QkFlQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElTdG9yZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgSVRva2VuTW9kZWwgfSBmcm9tICcuLi90b2tlbi9pbnRlcmZhY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lbW9yeVN0b3JlIGltcGxlbWVudHMgSVN0b3JlIHtcclxuICBwcml2YXRlIGNhY2hlOiB7IFtrZXk6IHN0cmluZ106IElUb2tlbk1vZGVsIH0gPSB7fTtcclxuXHJcbiAgZ2V0KGtleTogc3RyaW5nKTogSVRva2VuTW9kZWwge1xyXG4gICAgcmV0dXJuIHRoaXMuY2FjaGVba2V5XSB8fCA8YW55Pnt9O1xyXG4gIH1cclxuXHJcbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogSVRva2VuTW9kZWwpOiBib29sZWFuIHtcclxuICAgIHRoaXMuY2FjaGVba2V5XSA9IHZhbHVlO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICByZW1vdmUoa2V5OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY2FjaGVba2V5XSA9IG51bGw7XHJcbiAgfVxyXG59XHJcbiJdfQ==