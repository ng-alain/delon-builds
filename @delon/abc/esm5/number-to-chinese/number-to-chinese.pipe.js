/**
 * @fileoverview added by tsickle
 * Generated from: number-to-chinese.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXRvLWNoaW5lc2UucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvbnVtYmVyLXRvLWNoaW5lc2UvIiwic291cmNlcyI6WyJudW1iZXItdG8tY2hpbmVzZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXREO0lBQUE7SUFLQSxDQUFDOzs7Ozs7O0lBSEMseUNBQVM7Ozs7OztJQUFULFVBQVUsS0FBc0IsRUFBRSxHQUFtQixFQUFFLFdBQXlCO1FBQTlDLG9CQUFBLEVBQUEsVUFBbUI7UUFBRSw0QkFBQSxFQUFBLGlCQUF5QjtRQUM5RSxPQUFPLGVBQWUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUUsV0FBVyxhQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7O2dCQUpGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7O0lBS3JCLDRCQUFDO0NBQUEsQUFMRCxJQUtDO1NBSlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbnVtYmVyVG9DaGluZXNlIH0gZnJvbSAnLi9udW1iZXItdG8tY2hpbmVzZSc7XG5cbkBQaXBlKHsgbmFtZTogJ24yYycgfSlcbmV4cG9ydCBjbGFzcyBOYU51bWJlclRvQ2hpbmVzZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsIHJtYjogYm9vbGVhbiA9IHRydWUsIG1pbnVzU3ltYm9sOiBzdHJpbmcgPSAn6LSfJyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG51bWJlclRvQ2hpbmVzZSh2YWx1ZSwgcm1iLCB7IG1pbnVzU3ltYm9sIH0pO1xuICB9XG59XG4iXX0=