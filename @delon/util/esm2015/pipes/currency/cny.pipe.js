/**
 * @fileoverview added by tsickle
 * Generated from: cny.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { CurrencyService } from '@delon/util/format';
export class CurrencyCNYPipe {
    /**
     * @param {?} srv
     */
    constructor(srv) {
        this.srv = srv;
    }
    /**
     * Converted into RMB notation.
     *
     * 转化成人民币表示法
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    transform(value, options) {
        return this.srv.cny(value, options);
    }
}
CurrencyCNYPipe.decorators = [
    { type: Pipe, args: [{ name: 'cny' },] }
];
/** @nocollapse */
CurrencyCNYPipe.ctorParameters = () => [
    { type: CurrencyService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CurrencyCNYPipe.prototype.srv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY255LnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL3BpcGVzL2N1cnJlbmN5L2NueS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFzQixlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUd6RSxNQUFNLE9BQU8sZUFBZTs7OztJQUMxQixZQUFvQixHQUFvQjtRQUFwQixRQUFHLEdBQUgsR0FBRyxDQUFpQjtJQUFHLENBQUM7Ozs7Ozs7OztJQU81QyxTQUFTLENBQUMsS0FBc0IsRUFBRSxPQUE0QjtRQUM1RCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7WUFYRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFOzs7O1lBRlEsZUFBZTs7Ozs7OztJQUk5Qiw4QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDdXJyZW5jeUNOWU9wdGlvbnMsIEN1cnJlbmN5U2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL2Zvcm1hdCc7XG5cbkBQaXBlKHsgbmFtZTogJ2NueScgfSlcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeUNOWVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IEN1cnJlbmN5U2VydmljZSkge31cblxuICAvKipcbiAgICogQ29udmVydGVkIGludG8gUk1CIG5vdGF0aW9uLlxuICAgKlxuICAgKiDovazljJbmiJDkurrmsJHluIHooajnpLrms5VcbiAgICovXG4gIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBvcHRpb25zPzogQ3VycmVuY3lDTllPcHRpb25zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zcnYuY255KHZhbHVlLCBvcHRpb25zKTtcbiAgfVxufVxuIl19