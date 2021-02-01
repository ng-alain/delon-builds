/**
 * @fileoverview added by tsickle
 * Generated from: src/pipes/currency/cn-currency.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CurrencyPipe } from '@angular/common';
import { Inject, LOCALE_ID, Pipe } from '@angular/core';
/**
 * [Document](https://ng-alain.com/theme/currency)
 * @deprecated Will be removed in 12.0.0, Pls used `_currency2` instead
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY24tY3VycmVuY3kucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3NyYy9waXBlcy9jdXJyZW5jeS9jbi1jdXJyZW5jeS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBUXhELE1BQU0sT0FBTyxjQUFjOzs7O0lBR3pCLFlBQStCLE1BQWM7UUFDM0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7Ozs7OztJQUVELFNBQVMsQ0FDUCxLQUFVLEVBQ1YsZUFBdUIsR0FBRyxFQUMxQixVQUF5RCxNQUFNLEVBQy9ELE1BQWU7UUFFZixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsbUJBQUEsT0FBTyxFQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDcEYsQ0FBQzs7O1lBZkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTs7Ozt5Q0FJWixNQUFNLFNBQUMsU0FBUzs7Ozs7OztJQUY3Qix3Q0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDdXJyZW5jeVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBMT0NBTEVfSUQsIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBbRG9jdW1lbnRdKGh0dHBzOi8vbmctYWxhaW4uY29tL3RoZW1lL2N1cnJlbmN5KVxuICogQGRlcHJlY2F0ZWQgV2lsbCBiZSByZW1vdmVkIGluIDEyLjAuMCwgUGxzIHVzZWQgYF9jdXJyZW5jeTJgIGluc3RlYWRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVzZS1waXBlLXRyYW5zZm9ybS1pbnRlcmZhY2VcbkBQaXBlKHsgbmFtZTogJ19jdXJyZW5jeScgfSlcbmV4cG9ydCBjbGFzcyBDTkN1cnJlbmN5UGlwZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgbmdDdXJyZW5jeVBpcGU6IEN1cnJlbmN5UGlwZTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KExPQ0FMRV9JRCkgbG9jYWxlOiBzdHJpbmcpIHtcbiAgICB0aGlzLm5nQ3VycmVuY3lQaXBlID0gbmV3IEN1cnJlbmN5UGlwZShsb2NhbGUpO1xuICB9XG5cbiAgdHJhbnNmb3JtKFxuICAgIHZhbHVlOiBhbnksXG4gICAgY3VycmVuY3lDb2RlOiBzdHJpbmcgPSAn77+lJyxcbiAgICBkaXNwbGF5OiAnY29kZScgfCAnc3ltYm9sJyB8ICdzeW1ib2wtbmFycm93JyB8IGJvb2xlYW4gPSAnY29kZScsXG4gICAgZGlnaXRzPzogc3RyaW5nLFxuICApOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5uZ0N1cnJlbmN5UGlwZS50cmFuc2Zvcm0odmFsdWUsIGN1cnJlbmN5Q29kZSwgZGlzcGxheSBhcyBhbnksIGRpZ2l0cyk7XG4gIH1cbn1cbiJdfQ==