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
     * @param {?=} separator
     * @return {?}
     */
    transform(value, separator = ',') {
        return this.srv.commas(value, { separator });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFzLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL3BpcGVzL2N1cnJlbmN5L2NvbW1hcy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3JELE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFDN0IsWUFBb0IsR0FBb0I7UUFBcEIsUUFBRyxHQUFILEdBQUcsQ0FBaUI7SUFBRyxDQUFDOzs7Ozs7Ozs7SUFNNUMsU0FBUyxDQUFDLEtBQXNCLEVBQUUsWUFBb0IsR0FBRztRQUN2RCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7O1lBVkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFOzs7O1lBRnZCLGVBQWU7Ozs7Ozs7SUFJVixpQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDdXJyZW5jeVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9mb3JtYXQnO1xuXG5AUGlwZSh7IG5hbWU6ICdjdXJyZW5jeUNvbW1hcycgfSlcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeUNvbW1hc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IEN1cnJlbmN5U2VydmljZSkge31cbiAgLyoqXG4gICAqIEZvcm1hdCBhIG51bWJlciB3aXRoIGNvbW1hcyBhcyB0aG91c2FuZHMgc2VwYXJhdG9yc1xuICAgKlxuICAgKiDnlKjpgJflj7flsIbmlbDlrZfmoLzlvI/ljJbkuLrljYPkvY3liIbpmpTnrKZcbiAgICovXG4gIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBzZXBhcmF0b3I6IHN0cmluZyA9ICcsJyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc3J2LmNvbW1hcyh2YWx1ZSwgeyBzZXBhcmF0b3IgfSk7XG4gIH1cbn1cbiJdfQ==