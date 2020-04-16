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
        /** @type {?} */
        const options = { locale: this.nzI18n.getDateLocale() };
        value = typeof value === 'string' ? (!isNaN(+value) ? +value : parse(value, formatString, new Date(), options)) : value;
        if (!value)
            return '';
        return formatString === 'fn' ? formatDistanceToNow(value, options) : format(value, formatString, options);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3BpcGVzL2RhdGUvZGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxNQUFNLE1BQU0saUJBQWlCLENBQUM7QUFDckMsT0FBTyxtQkFBbUIsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEtBQUssTUFBTSxnQkFBZ0IsQ0FBQztBQUNuQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHbkQsTUFBTSxPQUFPLFFBQVE7Ozs7SUFDbkIsWUFBb0IsTUFBcUI7UUFBckIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtJQUFHLENBQUM7Ozs7OztJQUU3QyxTQUFTLENBQUMsS0FBNkIsRUFBRSxlQUF1QixrQkFBa0I7O2NBQzFFLE9BQU8sR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxFQUFFO1FBQ3ZELEtBQUssR0FBRyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3hILElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTyxFQUFFLENBQUM7UUFDdEIsT0FBTyxZQUFZLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVHLENBQUM7OztZQVRGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7Ozs7WUFGZCxhQUFhOzs7Ozs7O0lBSVIsMEJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IGZvcm1hdCBmcm9tICdkYXRlLWZucy9mb3JtYXQnO1xuaW1wb3J0IGZvcm1hdERpc3RhbmNlVG9Ob3cgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0RGlzdGFuY2VUb05vdyc7XG5pbXBvcnQgcGFyc2UgZnJvbSAnZGF0ZS1mbnMvcGFyc2UnO1xuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5cbkBQaXBlKHsgbmFtZTogJ19kYXRlJyB9KVxuZXhwb3J0IGNsYXNzIERhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbnpJMThuOiBOekkxOG5TZXJ2aWNlKSB7fVxuXG4gIHRyYW5zZm9ybSh2YWx1ZTogRGF0ZSB8IHN0cmluZyB8IG51bWJlciwgZm9ybWF0U3RyaW5nOiBzdHJpbmcgPSAneXl5eS1NTS1kZCBISDptbScpOiBzdHJpbmcge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7IGxvY2FsZTogdGhpcy5uekkxOG4uZ2V0RGF0ZUxvY2FsZSgpIH07XG4gICAgdmFsdWUgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gKCFpc05hTigrdmFsdWUpID8gK3ZhbHVlIDogcGFyc2UodmFsdWUsIGZvcm1hdFN0cmluZywgbmV3IERhdGUoKSwgb3B0aW9ucykpIDogdmFsdWU7XG4gICAgaWYgKCF2YWx1ZSkgcmV0dXJuICcnO1xuICAgIHJldHVybiBmb3JtYXRTdHJpbmcgPT09ICdmbicgPyBmb3JtYXREaXN0YW5jZVRvTm93KHZhbHVlLCBvcHRpb25zKSA6IGZvcm1hdCh2YWx1ZSwgZm9ybWF0U3RyaW5nLCBvcHRpb25zKTtcbiAgfVxufVxuIl19