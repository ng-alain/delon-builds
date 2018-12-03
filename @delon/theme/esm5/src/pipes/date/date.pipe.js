/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import format from 'date-fns/format';
var DatePipe = /** @class */ (function () {
    function DatePipe() {
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
        if (formatString === void 0) { formatString = 'YYYY-MM-DD HH:mm'; }
        if (value) {
            if (formatString === 'fn') {
                return distanceInWordsToNow(value, {
                    // tslint:disable-next-line:no-any
                    locale: ((/** @type {?} */ (window))).__locale__,
                });
            }
            if (typeof value === 'string' && !isNaN(+value)) {
                value = +value;
            }
            return format(value, formatString);
        }
        else {
            return '';
        }
    };
    DatePipe.decorators = [
        { type: Pipe, args: [{ name: '_date' },] }
    ];
    return DatePipe;
}());
export { DatePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3BpcGVzL2RhdGUvZGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLG9CQUFvQixNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sTUFBTSxNQUFNLGlCQUFpQixDQUFDO0FBRXJDO0lBQUE7SUFxQkEsQ0FBQzs7Ozs7O0lBbkJDLDRCQUFTOzs7OztJQUFULFVBQ0UsS0FBNkIsRUFDN0IsWUFBeUM7UUFBekMsNkJBQUEsRUFBQSxpQ0FBeUM7UUFFekMsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLFlBQVksS0FBSyxJQUFJLEVBQUU7Z0JBQ3pCLE9BQU8sb0JBQW9CLENBQUMsS0FBSyxFQUFFOztvQkFFakMsTUFBTSxFQUFFLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBQyxVQUFVO2lCQUNuQyxDQUFDLENBQUM7YUFDSjtZQUNELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQy9DLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQzthQUNoQjtZQUNELE9BQU8sTUFBTSxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztTQUNwQzthQUFNO1lBQ0wsT0FBTyxFQUFFLENBQUM7U0FDWDtJQUNILENBQUM7O2dCQXBCRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFOztJQXFCdkIsZUFBQztDQUFBLEFBckJELElBcUJDO1NBcEJZLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgZGlzdGFuY2VJbldvcmRzVG9Ob3cgZnJvbSAnZGF0ZS1mbnMvZGlzdGFuY2VfaW5fd29yZHNfdG9fbm93JztcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0JztcblxuQFBpcGUoeyBuYW1lOiAnX2RhdGUnIH0pXG5leHBvcnQgY2xhc3MgRGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKFxuICAgIHZhbHVlOiBEYXRlIHwgc3RyaW5nIHwgbnVtYmVyLFxuICAgIGZvcm1hdFN0cmluZzogc3RyaW5nID0gJ1lZWVktTU0tREQgSEg6bW0nLFxuICApOiBzdHJpbmcge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgaWYgKGZvcm1hdFN0cmluZyA9PT0gJ2ZuJykge1xuICAgICAgICByZXR1cm4gZGlzdGFuY2VJbldvcmRzVG9Ob3codmFsdWUsIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAgICAgbG9jYWxlOiAod2luZG93IGFzIGFueSkuX19sb2NhbGVfXyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhaXNOYU4oK3ZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9ICt2YWx1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmb3JtYXQodmFsdWUsIGZvcm1hdFN0cmluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cbn1cbiJdfQ==