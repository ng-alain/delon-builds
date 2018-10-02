/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ReuseTabStrategy = /** @class */ (function () {
    function ReuseTabStrategy(srv) {
        this.srv = srv;
    }
    /**
     * @param {?} route
     * @return {?}
     */
    ReuseTabStrategy.prototype.shouldDetach = /**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        return this.srv.shouldDetach(route);
    };
    /**
     * @param {?} route
     * @param {?} handle
     * @return {?}
     */
    ReuseTabStrategy.prototype.store = /**
     * @param {?} route
     * @param {?} handle
     * @return {?}
     */
    function (route, handle) {
        this.srv.store(route, handle);
    };
    /**
     * @param {?} route
     * @return {?}
     */
    ReuseTabStrategy.prototype.shouldAttach = /**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        return this.srv.shouldAttach(route);
    };
    /**
     * @param {?} route
     * @return {?}
     */
    ReuseTabStrategy.prototype.retrieve = /**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        return this.srv.retrieve(route);
    };
    /**
     * @param {?} future
     * @param {?} curr
     * @return {?}
     */
    ReuseTabStrategy.prototype.shouldReuseRoute = /**
     * @param {?} future
     * @param {?} curr
     * @return {?}
     */
    function (future, curr) {
        return this.srv.shouldReuseRoute(future, curr);
    };
    return ReuseTabStrategy;
}());
export { ReuseTabStrategy };
if (false) {
    /** @type {?} */
    ReuseTabStrategy.prototype.srv;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLnN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9yZXVzZS10YWIvIiwic291cmNlcyI6WyJyZXVzZS10YWIuc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLElBQUE7SUFDRSwwQkFBb0IsR0FBb0I7UUFBcEIsUUFBRyxHQUFILEdBQUcsQ0FBaUI7S0FBSTs7Ozs7SUFFNUMsdUNBQVk7Ozs7SUFBWixVQUFhLEtBQTZCO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDckM7Ozs7OztJQUNELGdDQUFLOzs7OztJQUFMLFVBQU0sS0FBNkIsRUFBRSxNQUFVO1FBQzdDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztLQUMvQjs7Ozs7SUFDRCx1Q0FBWTs7OztJQUFaLFVBQWEsS0FBNkI7UUFDeEMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNyQzs7Ozs7SUFDRCxtQ0FBUTs7OztJQUFSLFVBQVMsS0FBNkI7UUFDcEMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNqQzs7Ozs7O0lBQ0QsMkNBQWdCOzs7OztJQUFoQixVQUNFLE1BQThCLEVBQzlCLElBQTRCO1FBRTVCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDaEQ7MkJBdkJIO0lBd0JDLENBQUE7QUFyQkQsNEJBcUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVSZXVzZVN0cmF0ZWd5LCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUmV1c2VUYWJTZXJ2aWNlIH0gZnJvbSAnLi9yZXVzZS10YWIuc2VydmljZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUmV1c2VUYWJTdHJhdGVneSBpbXBsZW1lbnRzIFJvdXRlUmV1c2VTdHJhdGVneSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IFJldXNlVGFiU2VydmljZSkge31cclxuXHJcbiAgc2hvdWxkRGV0YWNoKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zcnYuc2hvdWxkRGV0YWNoKHJvdXRlKTtcclxuICB9XHJcbiAgc3RvcmUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIGhhbmRsZToge30pOiB2b2lkIHtcclxuICAgIHRoaXMuc3J2LnN0b3JlKHJvdXRlLCBoYW5kbGUpO1xyXG4gIH1cclxuICBzaG91bGRBdHRhY2gocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnNydi5zaG91bGRBdHRhY2gocm91dGUpO1xyXG4gIH1cclxuICByZXRyaWV2ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IHt9IHtcclxuICAgIHJldHVybiB0aGlzLnNydi5yZXRyaWV2ZShyb3V0ZSk7XHJcbiAgfVxyXG4gIHNob3VsZFJldXNlUm91dGUoXHJcbiAgICBmdXR1cmU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXHJcbiAgICBjdXJyOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxyXG4gICk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3J2LnNob3VsZFJldXNlUm91dGUoZnV0dXJlLCBjdXJyKTtcclxuICB9XHJcbn1cclxuIl19