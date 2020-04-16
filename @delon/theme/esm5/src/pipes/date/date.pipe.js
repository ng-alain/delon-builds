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
        value = typeof value === 'string' ? (!isNaN(+value) ? +value : parse(value, formatString, new Date(), options)) : value;
        if (!value)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3BpcGVzL2RhdGUvZGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxNQUFNLE1BQU0saUJBQWlCLENBQUM7QUFDckMsT0FBTyxtQkFBbUIsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEtBQUssTUFBTSxnQkFBZ0IsQ0FBQztBQUNuQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkQ7SUFFRSxrQkFBb0IsTUFBcUI7UUFBckIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtJQUFHLENBQUM7Ozs7OztJQUU3Qyw0QkFBUzs7Ozs7SUFBVCxVQUFVLEtBQTZCLEVBQUUsWUFBeUM7UUFBekMsNkJBQUEsRUFBQSxpQ0FBeUM7O1lBQzFFLE9BQU8sR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxFQUFFO1FBQ3ZELEtBQUssR0FBRyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3hILElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTyxFQUFFLENBQUM7UUFDdEIsT0FBTyxZQUFZLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVHLENBQUM7O2dCQVRGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7Ozs7Z0JBRmQsYUFBYTs7SUFZdEIsZUFBQztDQUFBLEFBVkQsSUFVQztTQVRZLFFBQVE7Ozs7OztJQUNQLDBCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0JztcbmltcG9ydCBmb3JtYXREaXN0YW5jZVRvTm93IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdERpc3RhbmNlVG9Ob3cnO1xuaW1wb3J0IHBhcnNlIGZyb20gJ2RhdGUtZm5zL3BhcnNlJztcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuXG5AUGlwZSh7IG5hbWU6ICdfZGF0ZScgfSlcbmV4cG9ydCBjbGFzcyBEYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG56STE4bjogTnpJMThuU2VydmljZSkge31cblxuICB0cmFuc2Zvcm0odmFsdWU6IERhdGUgfCBzdHJpbmcgfCBudW1iZXIsIGZvcm1hdFN0cmluZzogc3RyaW5nID0gJ3l5eXktTU0tZGQgSEg6bW0nKTogc3RyaW5nIHtcbiAgICBjb25zdCBvcHRpb25zID0geyBsb2NhbGU6IHRoaXMubnpJMThuLmdldERhdGVMb2NhbGUoKSB9O1xuICAgIHZhbHVlID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/ICghaXNOYU4oK3ZhbHVlKSA/ICt2YWx1ZSA6IHBhcnNlKHZhbHVlLCBmb3JtYXRTdHJpbmcsIG5ldyBEYXRlKCksIG9wdGlvbnMpKSA6IHZhbHVlO1xuICAgIGlmICghdmFsdWUpIHJldHVybiAnJztcbiAgICByZXR1cm4gZm9ybWF0U3RyaW5nID09PSAnZm4nID8gZm9ybWF0RGlzdGFuY2VUb05vdyh2YWx1ZSwgb3B0aW9ucykgOiBmb3JtYXQodmFsdWUsIGZvcm1hdFN0cmluZywgb3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==