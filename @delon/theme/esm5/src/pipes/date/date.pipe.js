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
     * @param {?=} options
     * @return {?}
     */
    DatePipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    function (value, options) {
        if (options === void 0) { options = 'yyyy-MM-dd HH:mm'; }
        value = toDate(value, options);
        if (isNaN((/** @type {?} */ (value))))
            return '';
        /** @type {?} */
        var formatString = typeof options === 'string' ? options : (/** @type {?} */ (options.formatString));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3BpcGVzL2RhdGUvZGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLE1BQU0sRUFBaUIsTUFBTSxhQUFhLENBQUM7QUFDcEQsT0FBTyxNQUFNLE1BQU0saUJBQWlCLENBQUM7QUFDckMsT0FBTyxtQkFBbUIsTUFBTSw4QkFBOEIsQ0FBQztBQUUvRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkQ7SUFFRSxrQkFBb0IsTUFBcUI7UUFBckIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtJQUFHLENBQUM7Ozs7OztJQUU3Qyw0QkFBUzs7Ozs7SUFBVCxVQUFVLEtBQTZCLEVBQUUsT0FBMkM7UUFBM0Msd0JBQUEsRUFBQSw0QkFBMkM7UUFDbEYsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDL0IsSUFBSSxLQUFLLENBQUMsbUJBQUEsS0FBSyxFQUFhLENBQUM7WUFBRSxPQUFPLEVBQUUsQ0FBQzs7WUFFbkMsWUFBWSxHQUFHLE9BQU8sT0FBTyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxtQkFBQSxPQUFPLENBQUMsWUFBWSxFQUFDOztZQUM1RSxPQUFPLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsRUFBRTtRQUN2RCxPQUFPLFlBQVksS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUcsQ0FBQzs7Z0JBWEYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTs7OztnQkFGZCxhQUFhOztJQWN0QixlQUFDO0NBQUEsQUFaRCxJQVlDO1NBWFksUUFBUTs7Ozs7O0lBQ1AsMEJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdG9EYXRlLCBUb0RhdGVPcHRpb25zIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IGZvcm1hdCBmcm9tICdkYXRlLWZucy9mb3JtYXQnO1xuaW1wb3J0IGZvcm1hdERpc3RhbmNlVG9Ob3cgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0RGlzdGFuY2VUb05vdyc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5cbkBQaXBlKHsgbmFtZTogJ19kYXRlJyB9KVxuZXhwb3J0IGNsYXNzIERhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbnpJMThuOiBOekkxOG5TZXJ2aWNlKSB7fVxuXG4gIHRyYW5zZm9ybSh2YWx1ZTogRGF0ZSB8IHN0cmluZyB8IG51bWJlciwgb3B0aW9uczogVG9EYXRlT3B0aW9ucyA9ICd5eXl5LU1NLWRkIEhIOm1tJyk6IHN0cmluZyB7XG4gICAgdmFsdWUgPSB0b0RhdGUodmFsdWUsIG9wdGlvbnMpO1xuICAgIGlmIChpc05hTih2YWx1ZSBhcyBOelNhZmVBbnkpKSByZXR1cm4gJyc7XG5cbiAgICBjb25zdCBmb3JtYXRTdHJpbmcgPSB0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycgPyBvcHRpb25zIDogb3B0aW9ucy5mb3JtYXRTdHJpbmchO1xuICAgIGNvbnN0IGxhbmdPcHQgPSB7IGxvY2FsZTogdGhpcy5uekkxOG4uZ2V0RGF0ZUxvY2FsZSgpIH07XG4gICAgcmV0dXJuIGZvcm1hdFN0cmluZyA9PT0gJ2ZuJyA/IGZvcm1hdERpc3RhbmNlVG9Ob3codmFsdWUsIGxhbmdPcHQpIDogZm9ybWF0KHZhbHVlLCBmb3JtYXRTdHJpbmcsIGxhbmdPcHQpO1xuICB9XG59XG4iXX0=