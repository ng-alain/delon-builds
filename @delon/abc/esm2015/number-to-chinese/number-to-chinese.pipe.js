/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { numberToChinese } from './number-to-chinese';
export class NaNumberToChinesePipe {
    /**
     * @param {?} value
     * @param {?=} rmb
     * @param {?=} minusSymbol
     * @return {?}
     */
    transform(value, rmb = true, minusSymbol = '负') {
        return numberToChinese(value, rmb, { minusSymbol });
    }
}
NaNumberToChinesePipe.decorators = [
    { type: Pipe, args: [{ name: 'n2c' },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXRvLWNoaW5lc2UucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvbnVtYmVyLXRvLWNoaW5lc2UvIiwic291cmNlcyI6WyJudW1iZXItdG8tY2hpbmVzZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHdEQsTUFBTTs7Ozs7OztJQUNKLFNBQVMsQ0FDUCxLQUFzQixFQUN0QixNQUFlLElBQUksRUFDbkIsY0FBc0IsR0FBRztRQUV6QixPQUFPLGVBQWUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztLQUNyRDs7O1lBUkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgbnVtYmVyVG9DaGluZXNlIH0gZnJvbSAnLi9udW1iZXItdG8tY2hpbmVzZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICduMmMnIH0pXHJcbmV4cG9ydCBjbGFzcyBOYU51bWJlclRvQ2hpbmVzZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0oXHJcbiAgICB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLFxyXG4gICAgcm1iOiBib29sZWFuID0gdHJ1ZSxcclxuICAgIG1pbnVzU3ltYm9sOiBzdHJpbmcgPSAn6LSfJyxcclxuICApOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIG51bWJlclRvQ2hpbmVzZSh2YWx1ZSwgcm1iLCB7IG1pbnVzU3ltYm9sIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=