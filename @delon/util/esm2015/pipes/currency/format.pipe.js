/**
 * @fileoverview added by tsickle
 * Generated from: format.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { CurrencyService } from '@delon/util/format';
export class CurrencyFormatPipe {
    /**
     * @param {?} srv
     */
    constructor(srv) {
        this.srv = srv;
    }
    /**
     * Format a number with commas as thousands separators
     *
     * 格式化货币，用逗号将数字格式化为千位分隔符
     * ```ts
     * 10000 => `10,000`
     * 10000.567 => `10,000.57`
     * ```
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    transform(value, options) {
        return this.srv.format(value, options);
    }
}
CurrencyFormatPipe.decorators = [
    { type: Pipe, args: [{ name: '_currency2' },] }
];
/** @nocollapse */
CurrencyFormatPipe.ctorParameters = () => [
    { type: CurrencyService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CurrencyFormatPipe.prototype.srv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL3BpcGVzL2N1cnJlbmN5L2Zvcm1hdC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUF5QixlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUc1RSxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBQzdCLFlBQW9CLEdBQW9CO1FBQXBCLFFBQUcsR0FBSCxHQUFHLENBQWlCO0lBQUcsQ0FBQzs7Ozs7Ozs7Ozs7OztJQVU1QyxTQUFTLENBQUMsS0FBc0IsRUFBRSxPQUErQjtRQUMvRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7WUFkRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFOzs7O1lBRkksZUFBZTs7Ozs7OztJQUlqQyxpQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDdXJyZW5jeUZvcm1hdE9wdGlvbnMsIEN1cnJlbmN5U2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL2Zvcm1hdCc7XG5cbkBQaXBlKHsgbmFtZTogJ19jdXJyZW5jeTInIH0pXG5leHBvcnQgY2xhc3MgQ3VycmVuY3lGb3JtYXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3J2OiBDdXJyZW5jeVNlcnZpY2UpIHt9XG4gIC8qKlxuICAgKiBGb3JtYXQgYSBudW1iZXIgd2l0aCBjb21tYXMgYXMgdGhvdXNhbmRzIHNlcGFyYXRvcnNcbiAgICpcbiAgICog5qC85byP5YyW6LSn5biB77yM55So6YCX5Y+35bCG5pWw5a2X5qC85byP5YyW5Li65Y2D5L2N5YiG6ZqU56ymXG4gICAqIGBgYHRzXG4gICAqIDEwMDAwID0+IGAxMCwwMDBgXG4gICAqIDEwMDAwLjU2NyA9PiBgMTAsMDAwLjU3YFxuICAgKiBgYGBcbiAgICovXG4gIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBvcHRpb25zPzogQ3VycmVuY3lGb3JtYXRPcHRpb25zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zcnYuZm9ybWF0KHZhbHVlLCBvcHRpb25zKTtcbiAgfVxufVxuIl19