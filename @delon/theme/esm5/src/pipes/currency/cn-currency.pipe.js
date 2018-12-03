/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CurrencyPipe } from '@angular/common';
import { Pipe } from '@angular/core';
/**
 * @see https://ng-alain.com/docs/service-pipe#%E8%B4%A7%E5%B8%81-_currenty
 */
// tslint:disable-next-line:use-pipe-transform-interface
var CNCurrencyPipe = /** @class */ (function (_super) {
    tslib_1.__extends(CNCurrencyPipe, _super);
    function CNCurrencyPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} value
     * @param {?=} currencyCode
     * @param {?=} display
     * @param {?=} digits
     * @return {?}
     */
    CNCurrencyPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} currencyCode
     * @param {?=} display
     * @param {?=} digits
     * @return {?}
     */
    function (
    // tslint:disable-next-line:no-any
    value, currencyCode, display, digits) {
        if (currencyCode === void 0) { currencyCode = '￥'; }
        if (display === void 0) { display = 'code'; }
        // tslint:disable-next-line:no-any
        return _super.prototype.transform.call(this, value, currencyCode, (/** @type {?} */ (display)), digits);
    };
    CNCurrencyPipe.decorators = [
        { type: Pipe, args: [{ name: '_currency' },] }
    ];
    return CNCurrencyPipe;
}(CurrencyPipe));
export { CNCurrencyPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY24tY3VycmVuY3kucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9waXBlcy9jdXJyZW5jeS9jbi1jdXJyZW5jeS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBTXJDO0lBQ29DLDBDQUFZO0lBRGhEOztJQVlBLENBQUM7Ozs7Ozs7O0lBVkMsa0NBQVM7Ozs7Ozs7SUFBVDtJQUNFLGtDQUFrQztJQUNsQyxLQUFVLEVBQ1YsWUFBMEIsRUFDMUIsT0FBK0QsRUFDL0QsTUFBZTtRQUZmLDZCQUFBLEVBQUEsa0JBQTBCO1FBQzFCLHdCQUFBLEVBQUEsZ0JBQStEO1FBRy9ELGtDQUFrQztRQUNsQyxPQUFPLGlCQUFNLFNBQVMsWUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLG1CQUFBLE9BQU8sRUFBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3RFLENBQUM7O2dCQVhGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7O0lBWTNCLHFCQUFDO0NBQUEsQUFaRCxDQUNvQyxZQUFZLEdBVy9DO1NBWFksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEN1cnJlbmN5UGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHNlZSBodHRwczovL25nLWFsYWluLmNvbS9kb2NzL3NlcnZpY2UtcGlwZSMlRTglQjQlQTclRTUlQjglODEtX2N1cnJlbnR5XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1c2UtcGlwZS10cmFuc2Zvcm0taW50ZXJmYWNlXG5AUGlwZSh7IG5hbWU6ICdfY3VycmVuY3knIH0pXG5leHBvcnQgY2xhc3MgQ05DdXJyZW5jeVBpcGUgZXh0ZW5kcyBDdXJyZW5jeVBpcGUge1xuICB0cmFuc2Zvcm0oXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIHZhbHVlOiBhbnksXG4gICAgY3VycmVuY3lDb2RlOiBzdHJpbmcgPSAn77+lJyxcbiAgICBkaXNwbGF5OiAnY29kZScgfCAnc3ltYm9sJyB8ICdzeW1ib2wtbmFycm93JyB8IGJvb2xlYW4gPSAnY29kZScsXG4gICAgZGlnaXRzPzogc3RyaW5nLFxuICApOiBzdHJpbmcgfCBudWxsIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgcmV0dXJuIHN1cGVyLnRyYW5zZm9ybSh2YWx1ZSwgY3VycmVuY3lDb2RlLCBkaXNwbGF5IGFzIGFueSwgZGlnaXRzKTtcbiAgfVxufVxuIl19