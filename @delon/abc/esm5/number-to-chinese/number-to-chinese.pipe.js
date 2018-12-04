/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { numberToChinese } from './number-to-chinese';
var NaNumberToChinesePipe = /** @class */ (function () {
    function NaNumberToChinesePipe() {
    }
    /**
     * @param {?} value
     * @param {?=} rmb
     * @param {?=} minusSymbol
     * @return {?}
     */
    NaNumberToChinesePipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} rmb
     * @param {?=} minusSymbol
     * @return {?}
     */
    function (value, rmb, minusSymbol) {
        if (rmb === void 0) { rmb = true; }
        if (minusSymbol === void 0) { minusSymbol = '负'; }
        return numberToChinese(value, rmb, { minusSymbol: minusSymbol });
    };
    NaNumberToChinesePipe.decorators = [
        { type: Pipe, args: [{ name: 'n2c' },] }
    ];
    return NaNumberToChinesePipe;
}());
export { NaNumberToChinesePipe };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXRvLWNoaW5lc2UucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvbnVtYmVyLXRvLWNoaW5lc2UvIiwic291cmNlcyI6WyJudW1iZXItdG8tY2hpbmVzZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7SUFJcEQseUNBQVM7Ozs7OztJQUFULFVBQ0UsS0FBc0IsRUFDdEIsR0FBbUIsRUFDbkIsV0FBeUI7UUFEekIsb0JBQUEsRUFBQSxVQUFtQjtRQUNuQiw0QkFBQSxFQUFBLGlCQUF5QjtRQUV6QixPQUFPLGVBQWUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUUsV0FBVyxhQUFBLEVBQUUsQ0FBQyxDQUFDO0tBQ3JEOztnQkFSRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFOztnQ0FIckI7O1NBSWEscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbnVtYmVyVG9DaGluZXNlIH0gZnJvbSAnLi9udW1iZXItdG8tY2hpbmVzZSc7XG5cbkBQaXBlKHsgbmFtZTogJ24yYycgfSlcbmV4cG9ydCBjbGFzcyBOYU51bWJlclRvQ2hpbmVzZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKFxuICAgIHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgcm1iOiBib29sZWFuID0gdHJ1ZSxcbiAgICBtaW51c1N5bWJvbDogc3RyaW5nID0gJ+i0nycsXG4gICk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG51bWJlclRvQ2hpbmVzZSh2YWx1ZSwgcm1iLCB7IG1pbnVzU3ltYm9sIH0pO1xuICB9XG59XG4iXX0=