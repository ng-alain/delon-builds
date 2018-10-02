/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
export class ReuseTabStrategy {
    /**
     * @param {?} srv
     */
    constructor(srv) {
        this.srv = srv;
    }
    /**
     * @param {?} route
     * @return {?}
     */
    shouldDetach(route) {
        return this.srv.shouldDetach(route);
    }
    /**
     * @param {?} route
     * @param {?} handle
     * @return {?}
     */
    store(route, handle) {
        this.srv.store(route, handle);
    }
    /**
     * @param {?} route
     * @return {?}
     */
    shouldAttach(route) {
        return this.srv.shouldAttach(route);
    }
    /**
     * @param {?} route
     * @return {?}
     */
    retrieve(route) {
        return this.srv.retrieve(route);
    }
    /**
     * @param {?} future
     * @param {?} curr
     * @return {?}
     */
    shouldReuseRoute(future, curr) {
        return this.srv.shouldReuseRoute(future, curr);
    }
}
if (false) {
    /** @type {?} */
    ReuseTabStrategy.prototype.srv;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLnN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9yZXVzZS10YWIvIiwic291cmNlcyI6WyJyZXVzZS10YWIuc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE1BQU07Ozs7SUFDSixZQUFvQixHQUFvQjtRQUFwQixRQUFHLEdBQUgsR0FBRyxDQUFpQjtLQUFJOzs7OztJQUU1QyxZQUFZLENBQUMsS0FBNkI7UUFDeEMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNyQzs7Ozs7O0lBQ0QsS0FBSyxDQUFDLEtBQTZCLEVBQUUsTUFBVTtRQUM3QyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDL0I7Ozs7O0lBQ0QsWUFBWSxDQUFDLEtBQTZCO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDckM7Ozs7O0lBQ0QsUUFBUSxDQUFDLEtBQTZCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDakM7Ozs7OztJQUNELGdCQUFnQixDQUNkLE1BQThCLEVBQzlCLElBQTRCO1FBRTVCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDaEQ7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlUmV1c2VTdHJhdGVneSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFJldXNlVGFiU2VydmljZSB9IGZyb20gJy4vcmV1c2UtdGFiLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJldXNlVGFiU3RyYXRlZ3kgaW1wbGVtZW50cyBSb3V0ZVJldXNlU3RyYXRlZ3kge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3J2OiBSZXVzZVRhYlNlcnZpY2UpIHt9XHJcblxyXG4gIHNob3VsZERldGFjaChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3J2LnNob3VsZERldGFjaChyb3V0ZSk7XHJcbiAgfVxyXG4gIHN0b3JlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBoYW5kbGU6IHt9KTogdm9pZCB7XHJcbiAgICB0aGlzLnNydi5zdG9yZShyb3V0ZSwgaGFuZGxlKTtcclxuICB9XHJcbiAgc2hvdWxkQXR0YWNoKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zcnYuc2hvdWxkQXR0YWNoKHJvdXRlKTtcclxuICB9XHJcbiAgcmV0cmlldmUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiB7fSB7XHJcbiAgICByZXR1cm4gdGhpcy5zcnYucmV0cmlldmUocm91dGUpO1xyXG4gIH1cclxuICBzaG91bGRSZXVzZVJvdXRlKFxyXG4gICAgZnV0dXJlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxyXG4gICAgY3VycjogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcclxuICApOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnNydi5zaG91bGRSZXVzZVJvdXRlKGZ1dHVyZSwgY3Vycik7XHJcbiAgfVxyXG59XHJcbiJdfQ==