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
        value = toDate(value, formatString);
        if (isNaN((/** @type {?} */ (value))))
            return '';
        /** @type {?} */
        var options = { locale: this.nzI18n.getDateLocale() };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3BpcGVzL2RhdGUvZGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNyQyxPQUFPLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQztBQUNyQyxPQUFPLG1CQUFtQixNQUFNLDhCQUE4QixDQUFDO0FBRS9ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVuRDtJQUVFLGtCQUFvQixNQUFxQjtRQUFyQixXQUFNLEdBQU4sTUFBTSxDQUFlO0lBQUcsQ0FBQzs7Ozs7O0lBRTdDLDRCQUFTOzs7OztJQUFULFVBQVUsS0FBNkIsRUFBRSxZQUF5QztRQUF6Qyw2QkFBQSxFQUFBLGlDQUF5QztRQUNoRixLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztRQUNwQyxJQUFJLEtBQUssQ0FBQyxtQkFBQSxLQUFLLEVBQWEsQ0FBQztZQUFFLE9BQU8sRUFBRSxDQUFDOztZQUVuQyxPQUFPLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsRUFBRTtRQUN2RCxPQUFPLFlBQVksS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUcsQ0FBQzs7Z0JBVkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTs7OztnQkFGZCxhQUFhOztJQWF0QixlQUFDO0NBQUEsQUFYRCxJQVdDO1NBVlksUUFBUTs7Ozs7O0lBQ1AsMEJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IGZvcm1hdCBmcm9tICdkYXRlLWZucy9mb3JtYXQnO1xuaW1wb3J0IGZvcm1hdERpc3RhbmNlVG9Ob3cgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0RGlzdGFuY2VUb05vdyc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5cbkBQaXBlKHsgbmFtZTogJ19kYXRlJyB9KVxuZXhwb3J0IGNsYXNzIERhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbnpJMThuOiBOekkxOG5TZXJ2aWNlKSB7fVxuXG4gIHRyYW5zZm9ybSh2YWx1ZTogRGF0ZSB8IHN0cmluZyB8IG51bWJlciwgZm9ybWF0U3RyaW5nOiBzdHJpbmcgPSAneXl5eS1NTS1kZCBISDptbScpOiBzdHJpbmcge1xuICAgIHZhbHVlID0gdG9EYXRlKHZhbHVlLCBmb3JtYXRTdHJpbmcpO1xuICAgIGlmIChpc05hTih2YWx1ZSBhcyBOelNhZmVBbnkpKSByZXR1cm4gJyc7XG5cbiAgICBjb25zdCBvcHRpb25zID0geyBsb2NhbGU6IHRoaXMubnpJMThuLmdldERhdGVMb2NhbGUoKSB9O1xuICAgIHJldHVybiBmb3JtYXRTdHJpbmcgPT09ICdmbicgPyBmb3JtYXREaXN0YW5jZVRvTm93KHZhbHVlLCBvcHRpb25zKSA6IGZvcm1hdCh2YWx1ZSwgZm9ybWF0U3RyaW5nLCBvcHRpb25zKTtcbiAgfVxufVxuIl19