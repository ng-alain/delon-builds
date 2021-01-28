/**
 * @fileoverview added by tsickle
 * Generated from: src/pipes/currency/cn-currency.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CurrencyPipe } from '@angular/common';
import { Inject, LOCALE_ID, Pipe } from '@angular/core';
/**
 * @see https://ng-alain.com/theme/currency
 */
// tslint:disable-next-line:use-pipe-transform-interface
export class CNCurrencyPipe {
    /**
     * @param {?} locale
     */
    constructor(locale) {
        this.ngCurrencyPipe = new CurrencyPipe(locale);
    }
    /**
     * @param {?} value
     * @param {?=} currencyCode
     * @param {?=} display
     * @param {?=} digits
     * @return {?}
     */
    transform(value, currencyCode = '￥', display = 'code', digits) {
        return this.ngCurrencyPipe.transform(value, currencyCode, (/** @type {?} */ (display)), digits);
    }
}
CNCurrencyPipe.decorators = [
    { type: Pipe, args: [{ name: '_currency' },] }
];
/** @nocollapse */
CNCurrencyPipe.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CNCurrencyPipe.prototype.ngCurrencyPipe;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY24tY3VycmVuY3kucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3NyYy9waXBlcy9jdXJyZW5jeS9jbi1jdXJyZW5jeS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFPeEQsTUFBTSxPQUFPLGNBQWM7Ozs7SUFHekIsWUFBK0IsTUFBYztRQUN6QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7Ozs7O0lBRUQsU0FBUyxDQUNQLEtBQVUsRUFDVixlQUF1QixHQUFHLEVBQzFCLFVBQXlELE1BQU0sRUFDL0QsTUFBZTtRQUVmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxtQkFBQSxPQUFPLEVBQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNwRixDQUFDOzs7WUFmRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFOzs7O3lDQUlaLE1BQU0sU0FBQyxTQUFTOzs7Ozs7O0lBRjdCLHdDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEN1cnJlbmN5UGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIExPQ0FMRV9JRCwgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEBzZWUgaHR0cHM6Ly9uZy1hbGFpbi5jb20vdGhlbWUvY3VycmVuY3lcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVzZS1waXBlLXRyYW5zZm9ybS1pbnRlcmZhY2VcbkBQaXBlKHsgbmFtZTogJ19jdXJyZW5jeScgfSlcbmV4cG9ydCBjbGFzcyBDTkN1cnJlbmN5UGlwZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgbmdDdXJyZW5jeVBpcGU6IEN1cnJlbmN5UGlwZTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KExPQ0FMRV9JRCkgbG9jYWxlOiBzdHJpbmcpIHtcbiAgICAgIHRoaXMubmdDdXJyZW5jeVBpcGUgPSBuZXcgQ3VycmVuY3lQaXBlKGxvY2FsZSk7XG4gIH1cblxuICB0cmFuc2Zvcm0oXG4gICAgdmFsdWU6IGFueSxcbiAgICBjdXJyZW5jeUNvZGU6IHN0cmluZyA9ICfvv6UnLFxuICAgIGRpc3BsYXk6ICdjb2RlJyB8ICdzeW1ib2wnIHwgJ3N5bWJvbC1uYXJyb3cnIHwgYm9vbGVhbiA9ICdjb2RlJyxcbiAgICBkaWdpdHM/OiBzdHJpbmcsXG4gICk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLm5nQ3VycmVuY3lQaXBlLnRyYW5zZm9ybSh2YWx1ZSwgY3VycmVuY3lDb2RlLCBkaXNwbGF5IGFzIGFueSwgZGlnaXRzKTtcbiAgfVxufVxuIl19