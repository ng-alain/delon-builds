/**
 * @fileoverview added by tsickle
 * Generated from: src/pipes/currency/cn-currency.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CurrencyPipe } from '@angular/common';
import { Pipe } from '@angular/core';
/**
 * @see https://ng-alain.com/theme/currency
 */
// tslint:disable-next-line:use-pipe-transform-interface
export class CNCurrencyPipe extends CurrencyPipe {
    /**
     * @param {?} value
     * @param {?=} currencyCode
     * @param {?=} display
     * @param {?=} digits
     * @return {?}
     */
    transform(value, currencyCode = '￥', display = 'code', digits) {
        return super.transform(value, currencyCode, (/** @type {?} */ (display)), digits);
    }
}
CNCurrencyPipe.decorators = [
    { type: Pipe, args: [{ name: '_currency' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY24tY3VycmVuY3kucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3NyYy9waXBlcy9jdXJyZW5jeS9jbi1jdXJyZW5jeS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBT3JDLE1BQU0sT0FBTyxjQUFlLFNBQVEsWUFBWTs7Ozs7Ozs7SUFDOUMsU0FBUyxDQUNQLEtBQVUsRUFDVixlQUF1QixHQUFHLEVBQzFCLFVBQXlELE1BQU0sRUFDL0QsTUFBZTtRQUVmLE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLG1CQUFBLE9BQU8sRUFBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3RFLENBQUM7OztZQVRGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDdXJyZW5jeVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEBzZWUgaHR0cHM6Ly9uZy1hbGFpbi5jb20vdGhlbWUvY3VycmVuY3lcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVzZS1waXBlLXRyYW5zZm9ybS1pbnRlcmZhY2VcbkBQaXBlKHsgbmFtZTogJ19jdXJyZW5jeScgfSlcbmV4cG9ydCBjbGFzcyBDTkN1cnJlbmN5UGlwZSBleHRlbmRzIEN1cnJlbmN5UGlwZSB7XG4gIHRyYW5zZm9ybShcbiAgICB2YWx1ZTogYW55LFxuICAgIGN1cnJlbmN5Q29kZTogc3RyaW5nID0gJ++/pScsXG4gICAgZGlzcGxheTogJ2NvZGUnIHwgJ3N5bWJvbCcgfCAnc3ltYm9sLW5hcnJvdycgfCBib29sZWFuID0gJ2NvZGUnLFxuICAgIGRpZ2l0cz86IHN0cmluZyxcbiAgKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHN1cGVyLnRyYW5zZm9ybSh2YWx1ZSwgY3VycmVuY3lDb2RlLCBkaXNwbGF5IGFzIGFueSwgZGlnaXRzKTtcbiAgfVxufVxuIl19