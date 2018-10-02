/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import format from 'date-fns/format';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
/**
 * @see https://ng-alain.com/docs/service-pipe#%E6%97%A5%E6%9C%9F-_date
 */
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
                    locale: (/** @type {?} */ (window)).__locale__,
                });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3BpcGVzL2RhdGUvZGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQztBQUNyQyxPQUFPLG9CQUFvQixNQUFNLG1DQUFtQyxDQUFDOzs7Ozs7Ozs7Ozs7SUFPbkUsNEJBQVM7Ozs7O0lBQVQsVUFDRSxLQUE2QixFQUM3QixZQUF5QztRQUF6Qyw2QkFBQSxFQUFBLGlDQUF5QztRQUV6QyxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksWUFBWSxLQUFLLElBQUksRUFBRTtnQkFDekIsT0FBTyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUU7b0JBQ2pDLE1BQU0sRUFBRSxtQkFBQyxNQUFhLEVBQUMsQ0FBQyxVQUFVO2lCQUNuQyxDQUFDLENBQUM7YUFDSjtZQUNELE9BQU8sTUFBTSxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztTQUNwQzthQUFNO1lBQ0wsT0FBTyxFQUFFLENBQUM7U0FDWDtLQUNGOztnQkFoQkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTs7bUJBUHZCOztTQVFhLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0JztcclxuaW1wb3J0IGRpc3RhbmNlSW5Xb3Jkc1RvTm93IGZyb20gJ2RhdGUtZm5zL2Rpc3RhbmNlX2luX3dvcmRzX3RvX25vdyc7XHJcblxyXG4vKipcclxuICogQHNlZSBodHRwczovL25nLWFsYWluLmNvbS9kb2NzL3NlcnZpY2UtcGlwZSMlRTYlOTclQTUlRTYlOUMlOUYtX2RhdGVcclxuICovXHJcbkBQaXBlKHsgbmFtZTogJ19kYXRlJyB9KVxyXG5leHBvcnQgY2xhc3MgRGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0oXHJcbiAgICB2YWx1ZTogRGF0ZSB8IHN0cmluZyB8IG51bWJlcixcclxuICAgIGZvcm1hdFN0cmluZzogc3RyaW5nID0gJ1lZWVktTU0tREQgSEg6bW0nLFxyXG4gICk6IHN0cmluZyB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgaWYgKGZvcm1hdFN0cmluZyA9PT0gJ2ZuJykge1xyXG4gICAgICAgIHJldHVybiBkaXN0YW5jZUluV29yZHNUb05vdyh2YWx1ZSwge1xyXG4gICAgICAgICAgbG9jYWxlOiAod2luZG93IGFzIGFueSkuX19sb2NhbGVfXyxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZm9ybWF0KHZhbHVlLCBmb3JtYXRTdHJpbmcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=