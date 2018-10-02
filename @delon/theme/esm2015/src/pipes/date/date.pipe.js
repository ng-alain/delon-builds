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
export class DatePipe {
    /**
     * @param {?} value
     * @param {?=} formatString
     * @return {?}
     */
    transform(value, formatString = 'YYYY-MM-DD HH:mm') {
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
    }
}
DatePipe.decorators = [
    { type: Pipe, args: [{ name: '_date' },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3BpcGVzL2RhdGUvZGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQztBQUNyQyxPQUFPLG9CQUFvQixNQUFNLG1DQUFtQyxDQUFDOzs7O0FBTXJFLE1BQU07Ozs7OztJQUNKLFNBQVMsQ0FDUCxLQUE2QixFQUM3QixlQUF1QixrQkFBa0I7UUFFekMsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLFlBQVksS0FBSyxJQUFJLEVBQUU7Z0JBQ3pCLE9BQU8sb0JBQW9CLENBQUMsS0FBSyxFQUFFO29CQUNqQyxNQUFNLEVBQUUsbUJBQUMsTUFBYSxFQUFDLENBQUMsVUFBVTtpQkFDbkMsQ0FBQyxDQUFDO2FBQ0o7WUFDRCxPQUFPLE1BQU0sQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDcEM7YUFBTTtZQUNMLE9BQU8sRUFBRSxDQUFDO1NBQ1g7S0FDRjs7O1lBaEJGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0JztcclxuaW1wb3J0IGRpc3RhbmNlSW5Xb3Jkc1RvTm93IGZyb20gJ2RhdGUtZm5zL2Rpc3RhbmNlX2luX3dvcmRzX3RvX25vdyc7XHJcblxyXG4vKipcclxuICogQHNlZSBodHRwczovL25nLWFsYWluLmNvbS9kb2NzL3NlcnZpY2UtcGlwZSMlRTYlOTclQTUlRTYlOUMlOUYtX2RhdGVcclxuICovXHJcbkBQaXBlKHsgbmFtZTogJ19kYXRlJyB9KVxyXG5leHBvcnQgY2xhc3MgRGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0oXHJcbiAgICB2YWx1ZTogRGF0ZSB8IHN0cmluZyB8IG51bWJlcixcclxuICAgIGZvcm1hdFN0cmluZzogc3RyaW5nID0gJ1lZWVktTU0tREQgSEg6bW0nLFxyXG4gICk6IHN0cmluZyB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgaWYgKGZvcm1hdFN0cmluZyA9PT0gJ2ZuJykge1xyXG4gICAgICAgIHJldHVybiBkaXN0YW5jZUluV29yZHNUb05vdyh2YWx1ZSwge1xyXG4gICAgICAgICAgbG9jYWxlOiAod2luZG93IGFzIGFueSkuX19sb2NhbGVfXyxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZm9ybWF0KHZhbHVlLCBmb3JtYXRTdHJpbmcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=