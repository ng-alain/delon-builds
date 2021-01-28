/**
 * @fileoverview added by tsickle
 * Generated from: src/pipes/currency/cn-currency.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CurrencyPipe } from '@angular/common';
import { Inject, LOCALE_ID, Pipe } from '@angular/core';
/**
 * [Document](https://ng-alain.com/theme/currency)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY24tY3VycmVuY3kucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3NyYy9waXBlcy9jdXJyZW5jeS9jbi1jdXJyZW5jeS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFPeEQsTUFBTSxPQUFPLGNBQWM7Ozs7SUFHekIsWUFBK0IsTUFBYztRQUMzQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7Ozs7O0lBRUQsU0FBUyxDQUNQLEtBQVUsRUFDVixlQUF1QixHQUFHLEVBQzFCLFVBQXlELE1BQU0sRUFDL0QsTUFBZTtRQUVmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxtQkFBQSxPQUFPLEVBQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNwRixDQUFDOzs7WUFmRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFOzs7O3lDQUlaLE1BQU0sU0FBQyxTQUFTOzs7Ozs7O0lBRjdCLHdDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEN1cnJlbmN5UGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIExPQ0FMRV9JRCwgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFtEb2N1bWVudF0oaHR0cHM6Ly9uZy1hbGFpbi5jb20vdGhlbWUvY3VycmVuY3kpXG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1c2UtcGlwZS10cmFuc2Zvcm0taW50ZXJmYWNlXG5AUGlwZSh7IG5hbWU6ICdfY3VycmVuY3knIH0pXG5leHBvcnQgY2xhc3MgQ05DdXJyZW5jeVBpcGUge1xuICBwcml2YXRlIHJlYWRvbmx5IG5nQ3VycmVuY3lQaXBlOiBDdXJyZW5jeVBpcGU7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChMT0NBTEVfSUQpIGxvY2FsZTogc3RyaW5nKSB7XG4gICAgdGhpcy5uZ0N1cnJlbmN5UGlwZSA9IG5ldyBDdXJyZW5jeVBpcGUobG9jYWxlKTtcbiAgfVxuXG4gIHRyYW5zZm9ybShcbiAgICB2YWx1ZTogYW55LFxuICAgIGN1cnJlbmN5Q29kZTogc3RyaW5nID0gJ++/pScsXG4gICAgZGlzcGxheTogJ2NvZGUnIHwgJ3N5bWJvbCcgfCAnc3ltYm9sLW5hcnJvdycgfCBib29sZWFuID0gJ2NvZGUnLFxuICAgIGRpZ2l0cz86IHN0cmluZyxcbiAgKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMubmdDdXJyZW5jeVBpcGUudHJhbnNmb3JtKHZhbHVlLCBjdXJyZW5jeUNvZGUsIGRpc3BsYXkgYXMgYW55LCBkaWdpdHMpO1xuICB9XG59XG4iXX0=