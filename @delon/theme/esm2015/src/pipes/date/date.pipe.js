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
export class DatePipe {
    /**
     * @param {?} nzI18n
     */
    constructor(nzI18n) {
        this.nzI18n = nzI18n;
    }
    /**
     * @param {?} value
     * @param {?=} formatString
     * @return {?}
     */
    transform(value, formatString = 'yyyy-MM-dd HH:mm') {
        value = toDate(value);
        if (isNaN((/** @type {?} */ (value))))
            return '';
        /** @type {?} */
        const langOpt = { locale: this.nzI18n.getDateLocale() };
        return formatString === 'fn' ? formatDistanceToNow(value, langOpt) : format(value, formatString, langOpt);
    }
}
DatePipe.decorators = [
    { type: Pipe, args: [{ name: '_date' },] }
];
/** @nocollapse */
DatePipe.ctorParameters = () => [
    { type: NzI18nService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DatePipe.prototype.nzI18n;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3BpcGVzL2RhdGUvZGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNyQyxPQUFPLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQztBQUNyQyxPQUFPLG1CQUFtQixNQUFNLDhCQUE4QixDQUFDO0FBRS9ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUduRCxNQUFNLE9BQU8sUUFBUTs7OztJQUNuQixZQUFvQixNQUFxQjtRQUFyQixXQUFNLEdBQU4sTUFBTSxDQUFlO0lBQUcsQ0FBQzs7Ozs7O0lBRTdDLFNBQVMsQ0FBQyxLQUE2QixFQUFFLFlBQVksR0FBRyxrQkFBa0I7UUFDeEUsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QixJQUFJLEtBQUssQ0FBQyxtQkFBQSxLQUFLLEVBQWEsQ0FBQztZQUFFLE9BQU8sRUFBRSxDQUFDOztjQUVuQyxPQUFPLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsRUFBRTtRQUN2RCxPQUFPLFlBQVksS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUcsQ0FBQzs7O1lBVkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTs7OztZQUZkLGFBQWE7Ozs7Ozs7SUFJUiwwQkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgZm9ybWF0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCc7XG5pbXBvcnQgZm9ybWF0RGlzdGFuY2VUb05vdyBmcm9tICdkYXRlLWZucy9mb3JtYXREaXN0YW5jZVRvTm93JztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcblxuQFBpcGUoeyBuYW1lOiAnX2RhdGUnIH0pXG5leHBvcnQgY2xhc3MgRGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuekkxOG46IE56STE4blNlcnZpY2UpIHt9XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBEYXRlIHwgc3RyaW5nIHwgbnVtYmVyLCBmb3JtYXRTdHJpbmcgPSAneXl5eS1NTS1kZCBISDptbScpOiBzdHJpbmcge1xuICAgIHZhbHVlID0gdG9EYXRlKHZhbHVlKTtcbiAgICBpZiAoaXNOYU4odmFsdWUgYXMgTnpTYWZlQW55KSkgcmV0dXJuICcnO1xuXG4gICAgY29uc3QgbGFuZ09wdCA9IHsgbG9jYWxlOiB0aGlzLm56STE4bi5nZXREYXRlTG9jYWxlKCkgfTtcbiAgICByZXR1cm4gZm9ybWF0U3RyaW5nID09PSAnZm4nID8gZm9ybWF0RGlzdGFuY2VUb05vdyh2YWx1ZSwgbGFuZ09wdCkgOiBmb3JtYXQodmFsdWUsIGZvcm1hdFN0cmluZywgbGFuZ09wdCk7XG4gIH1cbn1cbiJdfQ==