/**
 * @fileoverview added by tsickle
 * Generated from: src/interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function MockCachedRule() { }
if (false) {
    /** @type {?} */
    MockCachedRule.prototype.method;
    /** @type {?} */
    MockCachedRule.prototype.url;
    /** @type {?} */
    MockCachedRule.prototype.martcher;
    /** @type {?} */
    MockCachedRule.prototype.segments;
    /* Skipping unhandled member: [key: string]: any;*/
    /**
     * @param {?} req
     * @return {?}
     */
    MockCachedRule.prototype.callback = function (req) { };
}
/**
 * @record
 */
export function MockRule() { }
if (false) {
    /** @type {?} */
    MockRule.prototype.method;
    /** @type {?} */
    MockRule.prototype.url;
    /**
     * 路由参数
     * @type {?|undefined}
     */
    MockRule.prototype.params;
    /* Skipping unhandled member: [key: string]: any;*/
    /**
     * @param {?} req
     * @return {?}
     */
    MockRule.prototype.callback = function (req) { };
}
/**
 * @record
 */
export function MockRequest() { }
if (false) {
    /**
     * 路由参数
     * @type {?|undefined}
     */
    MockRequest.prototype.params;
    /**
     * URL参数
     * @type {?|undefined}
     */
    MockRequest.prototype.queryString;
    /** @type {?|undefined} */
    MockRequest.prototype.headers;
    /** @type {?|undefined} */
    MockRequest.prototype.body;
    /**
     * 原始 `HttpRequest`
     * @type {?}
     */
    MockRequest.prototype.original;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZzdHMvd29yay8xL3MvcGFja2FnZXMvbW9jay8iLCJzb3VyY2VzIjpbInNyYy9pbnRlcmZhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSxvQ0FZQzs7O0lBVEMsZ0NBQWU7O0lBRWYsNkJBQVk7O0lBRVosa0NBQXdCOztJQUV4QixrQ0FBbUI7Ozs7OztJQUVuQix1REFBZ0M7Ozs7O0FBR2xDLDhCQVdDOzs7SUFSQywwQkFBZTs7SUFFZix1QkFBWTs7Ozs7SUFHWiwwQkFBYTs7Ozs7O0lBRWIsaURBQWdDOzs7OztBQUdsQyxpQ0FTQzs7Ozs7O0lBUEMsNkJBQWE7Ozs7O0lBRWIsa0NBQWtCOztJQUNsQiw4QkFBYzs7SUFDZCwyQkFBVzs7Ozs7SUFFWCwrQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuZXhwb3J0IGludGVyZmFjZSBNb2NrQ2FjaGVkUnVsZSB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcblxuICBtZXRob2Q6IHN0cmluZztcblxuICB1cmw6IHN0cmluZztcblxuICBtYXJ0Y2hlcjogUmVnRXhwIHwgbnVsbDtcblxuICBzZWdtZW50czogc3RyaW5nW107XG5cbiAgY2FsbGJhY2socmVxOiBNb2NrUmVxdWVzdCk6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNb2NrUnVsZSB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcblxuICBtZXRob2Q6IHN0cmluZztcblxuICB1cmw6IHN0cmluZztcblxuICAvKiog6Lev55Sx5Y+C5pWwICovXG4gIHBhcmFtcz86IGFueTtcblxuICBjYWxsYmFjayhyZXE6IE1vY2tSZXF1ZXN0KTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1vY2tSZXF1ZXN0IHtcbiAgLyoqIOi3r+eUseWPguaVsCAqL1xuICBwYXJhbXM/OiBhbnk7XG4gIC8qKiBVUkzlj4LmlbAgKi9cbiAgcXVlcnlTdHJpbmc/OiBhbnk7XG4gIGhlYWRlcnM/OiBhbnk7XG4gIGJvZHk/OiBhbnk7XG4gIC8qKiDljp/lp4sgYEh0dHBSZXF1ZXN0YCAqL1xuICBvcmlnaW5hbDogSHR0cFJlcXVlc3Q8YW55Pjtcbn1cbiJdfQ==