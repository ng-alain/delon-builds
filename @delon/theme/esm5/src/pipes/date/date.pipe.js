/**
 * @fileoverview added by tsickle
 * Generated from: src/pipes/date/date.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { toDate } from '@delon/util';
import format from 'date-fns/format';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { NzI18nService } from 'ng-zorro-antd/i18n';
var DatePipe = /** @class */ (function () {
    function DatePipe(nzI18n) {
        this.nzI18n = nzI18n;
    }
    /**
     * @param {?} value
     * @param {?=} formatString
     * @return {?}
     */
    DatePipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} formatString
     * @return {?}
     */
    function (value, formatString) {
        if (formatString === void 0) { formatString = 'yyyy-MM-dd HH:mm'; }
        value = toDate(value);
        if (isNaN((/** @type {?} */ (value))))
            return '';
        /** @type {?} */
        var langOpt = { locale: this.nzI18n.getDateLocale() };
        return formatString === 'fn' ? formatDistanceToNow(value, langOpt) : format(value, formatString, langOpt);
    };
    DatePipe.decorators = [
        { type: Pipe, args: [{ name: '_date' },] }
    ];
    /** @nocollapse */
    DatePipe.ctorParameters = function () { return [
        { type: NzI18nService }
    ]; };
    return DatePipe;
}());
export { DatePipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DatePipe.prototype.nzI18n;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3BpcGVzL2RhdGUvZGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNyQyxPQUFPLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQztBQUNyQyxPQUFPLG1CQUFtQixNQUFNLDhCQUE4QixDQUFDO0FBRS9ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVuRDtJQUVFLGtCQUFvQixNQUFxQjtRQUFyQixXQUFNLEdBQU4sTUFBTSxDQUFlO0lBQUcsQ0FBQzs7Ozs7O0lBRTdDLDRCQUFTOzs7OztJQUFULFVBQVUsS0FBNkIsRUFBRSxZQUFpQztRQUFqQyw2QkFBQSxFQUFBLGlDQUFpQztRQUN4RSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLElBQUksS0FBSyxDQUFDLG1CQUFBLEtBQUssRUFBYSxDQUFDO1lBQUUsT0FBTyxFQUFFLENBQUM7O1lBRW5DLE9BQU8sR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxFQUFFO1FBQ3ZELE9BQU8sWUFBWSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM1RyxDQUFDOztnQkFWRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFOzs7O2dCQUZkLGFBQWE7O0lBYXRCLGVBQUM7Q0FBQSxBQVhELElBV0M7U0FWWSxRQUFROzs7Ozs7SUFDUCwwQkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgZm9ybWF0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCc7XG5pbXBvcnQgZm9ybWF0RGlzdGFuY2VUb05vdyBmcm9tICdkYXRlLWZucy9mb3JtYXREaXN0YW5jZVRvTm93JztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcblxuQFBpcGUoeyBuYW1lOiAnX2RhdGUnIH0pXG5leHBvcnQgY2xhc3MgRGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuekkxOG46IE56STE4blNlcnZpY2UpIHt9XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBEYXRlIHwgc3RyaW5nIHwgbnVtYmVyLCBmb3JtYXRTdHJpbmcgPSAneXl5eS1NTS1kZCBISDptbScpOiBzdHJpbmcge1xuICAgIHZhbHVlID0gdG9EYXRlKHZhbHVlKTtcbiAgICBpZiAoaXNOYU4odmFsdWUgYXMgTnpTYWZlQW55KSkgcmV0dXJuICcnO1xuXG4gICAgY29uc3QgbGFuZ09wdCA9IHsgbG9jYWxlOiB0aGlzLm56STE4bi5nZXREYXRlTG9jYWxlKCkgfTtcbiAgICByZXR1cm4gZm9ybWF0U3RyaW5nID09PSAnZm4nID8gZm9ybWF0RGlzdGFuY2VUb05vdyh2YWx1ZSwgbGFuZ09wdCkgOiBmb3JtYXQodmFsdWUsIGZvcm1hdFN0cmluZywgbGFuZ09wdCk7XG4gIH1cbn1cbiJdfQ==