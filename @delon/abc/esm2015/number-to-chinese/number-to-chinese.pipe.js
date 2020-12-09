/**
 * @fileoverview added by tsickle
 * Generated from: number-to-chinese.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXRvLWNoaW5lc2UucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92c3RzL3dvcmsvMS9zL3BhY2thZ2VzL2FiYy9udW1iZXItdG8tY2hpbmVzZS8iLCJzb3VyY2VzIjpbIm51bWJlci10by1jaGluZXNlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHdEQsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7OztJQUNoQyxTQUFTLENBQUMsS0FBc0IsRUFBRSxNQUFlLElBQUksRUFBRSxjQUFzQixHQUFHO1FBQzlFLE9BQU8sZUFBZSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7OztZQUpGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBudW1iZXJUb0NoaW5lc2UgfSBmcm9tICcuL251bWJlci10by1jaGluZXNlJztcblxuQFBpcGUoeyBuYW1lOiAnbjJjJyB9KVxuZXhwb3J0IGNsYXNzIE5hTnVtYmVyVG9DaGluZXNlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlciB8IHN0cmluZywgcm1iOiBib29sZWFuID0gdHJ1ZSwgbWludXNTeW1ib2w6IHN0cmluZyA9ICfotJ8nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbnVtYmVyVG9DaGluZXNlKHZhbHVlLCBybWIsIHsgbWludXNTeW1ib2wgfSk7XG4gIH1cbn1cbiJdfQ==