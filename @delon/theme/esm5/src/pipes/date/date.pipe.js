/**
 * @fileoverview added by tsickle
 * Generated from: src/pipes/date/date.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import format from 'date-fns/format';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import parse from 'date-fns/parse';
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
        /** @type {?} */
        var options = { locale: this.nzI18n.getDateLocale() };
        value = typeof value === 'string' ? (!isNaN(+value) ? +value : parse(value, 'yyyy-MM-dd HH:mm:ss', new Date(), options)) : value;
        if (!value || value.toString() === 'Invalid Date')
            return '';
        return formatString === 'fn' ? formatDistanceToNow(value, options) : format(value, formatString, options);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3BpcGVzL2RhdGUvZGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxNQUFNLE1BQU0saUJBQWlCLENBQUM7QUFDckMsT0FBTyxtQkFBbUIsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEtBQUssTUFBTSxnQkFBZ0IsQ0FBQztBQUNuQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkQ7SUFFRSxrQkFBb0IsTUFBcUI7UUFBckIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtJQUFHLENBQUM7Ozs7OztJQUU3Qyw0QkFBUzs7Ozs7SUFBVCxVQUFVLEtBQTZCLEVBQUUsWUFBeUM7UUFBekMsNkJBQUEsRUFBQSxpQ0FBeUM7O1lBQzFFLE9BQU8sR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxFQUFFO1FBQ3ZELEtBQUssR0FBRyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDakksSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssY0FBYztZQUFFLE9BQU8sRUFBRSxDQUFDO1FBQzdELE9BQU8sWUFBWSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM1RyxDQUFDOztnQkFURixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFOzs7O2dCQUZkLGFBQWE7O0lBWXRCLGVBQUM7Q0FBQSxBQVZELElBVUM7U0FUWSxRQUFROzs7Ozs7SUFDUCwwQkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgZm9ybWF0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCc7XG5pbXBvcnQgZm9ybWF0RGlzdGFuY2VUb05vdyBmcm9tICdkYXRlLWZucy9mb3JtYXREaXN0YW5jZVRvTm93JztcbmltcG9ydCBwYXJzZSBmcm9tICdkYXRlLWZucy9wYXJzZSc7XG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcblxuQFBpcGUoeyBuYW1lOiAnX2RhdGUnIH0pXG5leHBvcnQgY2xhc3MgRGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuekkxOG46IE56STE4blNlcnZpY2UpIHt9XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBEYXRlIHwgc3RyaW5nIHwgbnVtYmVyLCBmb3JtYXRTdHJpbmc6IHN0cmluZyA9ICd5eXl5LU1NLWRkIEhIOm1tJyk6IHN0cmluZyB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHsgbG9jYWxlOiB0aGlzLm56STE4bi5nZXREYXRlTG9jYWxlKCkgfTtcbiAgICB2YWx1ZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyAoIWlzTmFOKCt2YWx1ZSkgPyArdmFsdWUgOiBwYXJzZSh2YWx1ZSwgJ3l5eXktTU0tZGQgSEg6bW06c3MnLCBuZXcgRGF0ZSgpLCBvcHRpb25zKSkgOiB2YWx1ZTtcbiAgICBpZiAoIXZhbHVlIHx8IHZhbHVlLnRvU3RyaW5nKCkgPT09ICdJbnZhbGlkIERhdGUnKSByZXR1cm4gJyc7XG4gICAgcmV0dXJuIGZvcm1hdFN0cmluZyA9PT0gJ2ZuJyA/IGZvcm1hdERpc3RhbmNlVG9Ob3codmFsdWUsIG9wdGlvbnMpIDogZm9ybWF0KHZhbHVlLCBmb3JtYXRTdHJpbmcsIG9wdGlvbnMpO1xuICB9XG59XG4iXX0=