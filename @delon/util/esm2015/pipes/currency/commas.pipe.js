/**
 * @fileoverview added by tsickle
 * Generated from: commas.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { FormatCurrencyService } from '@delon/util/format';
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
    { type: FormatCurrencyService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CurrencyCommasPipe.prototype.srv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFzLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL3BpcGVzL2N1cnJlbmN5L2NvbW1hcy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHM0QsTUFBTSxPQUFPLGtCQUFrQjs7OztJQUM3QixZQUFvQixHQUEwQjtRQUExQixRQUFHLEdBQUgsR0FBRyxDQUF1QjtJQUFHLENBQUM7Ozs7Ozs7OztJQU1sRCxTQUFTLENBQUMsS0FBc0IsRUFBRSxZQUFvQixHQUFHO1FBQ3ZELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7WUFWRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7Ozs7WUFGdkIscUJBQXFCOzs7Ozs7O0lBSWhCLGlDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1hdEN1cnJlbmN5U2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL2Zvcm1hdCc7XG5cbkBQaXBlKHsgbmFtZTogJ2N1cnJlbmN5Q29tbWFzJyB9KVxuZXhwb3J0IGNsYXNzIEN1cnJlbmN5Q29tbWFzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNydjogRm9ybWF0Q3VycmVuY3lTZXJ2aWNlKSB7fVxuICAvKipcbiAgICogRm9ybWF0IGEgbnVtYmVyIHdpdGggY29tbWFzIGFzIHRob3VzYW5kcyBzZXBhcmF0b3JzXG4gICAqXG4gICAqIOeUqOmAl+WPt+WwhuaVsOWtl+agvOW8j+WMluS4uuWNg+S9jeWIhumalOesplxuICAgKi9cbiAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsIHNlcGFyYXRvcjogc3RyaW5nID0gJywnKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zcnYuY29tbWFzKHZhbHVlLCB7IHNlcGFyYXRvciB9KTtcbiAgfVxufVxuIl19