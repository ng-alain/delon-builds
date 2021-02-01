/**
 * @fileoverview added by tsickle
 * Generated from: commas.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { CurrencyService } from '@delon/util/format';
export class CurrencyCommasPipe {
    /**
     * @param {?} srv
     */
    constructor(srv) {
        this.srv = srv;
    }
    /**
     * Format a number with commas as thousands separators
     *
     * 用逗号将数字格式化为千位分隔符
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    transform(value, options) {
        return this.srv.commas(value, options);
    }
}
CurrencyCommasPipe.decorators = [
    { type: Pipe, args: [{ name: 'currencyCommas' },] }
];
/** @nocollapse */
CurrencyCommasPipe.ctorParameters = () => [
    { type: CurrencyService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CurrencyCommasPipe.prototype.srv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFzLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL3BpcGVzL2N1cnJlbmN5L2NvbW1hcy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUF5QixlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUc1RSxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBQzdCLFlBQW9CLEdBQW9CO1FBQXBCLFFBQUcsR0FBSCxHQUFHLENBQWlCO0lBQUcsQ0FBQzs7Ozs7Ozs7O0lBTTVDLFNBQVMsQ0FBQyxLQUFzQixFQUFFLE9BQStCO1FBQy9ELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7OztZQVZGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTs7OztZQUZBLGVBQWU7Ozs7Ozs7SUFJakMsaUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ3VycmVuY3lDb21tYXNPcHRpb25zLCBDdXJyZW5jeVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9mb3JtYXQnO1xuXG5AUGlwZSh7IG5hbWU6ICdjdXJyZW5jeUNvbW1hcycgfSlcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeUNvbW1hc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IEN1cnJlbmN5U2VydmljZSkge31cbiAgLyoqXG4gICAqIEZvcm1hdCBhIG51bWJlciB3aXRoIGNvbW1hcyBhcyB0aG91c2FuZHMgc2VwYXJhdG9yc1xuICAgKlxuICAgKiDnlKjpgJflj7flsIbmlbDlrZfmoLzlvI/ljJbkuLrljYPkvY3liIbpmpTnrKZcbiAgICovXG4gIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBvcHRpb25zPzogQ3VycmVuY3lDb21tYXNPcHRpb25zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zcnYuY29tbWFzKHZhbHVlLCBvcHRpb25zKTtcbiAgfVxufVxuIl19