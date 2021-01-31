/**
 * @fileoverview added by tsickle
 * Generated from: number-to-chinese.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { numberToChinese } from './number-to-chinese';
/**
 * @deprecated Will be removed in 12.0.0, Pls used `currencyCNY` instead
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXRvLWNoaW5lc2UucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9udW1iZXItdG8tY2hpbmVzZS9udW1iZXItdG8tY2hpbmVzZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBTXRELE1BQU0sT0FBTyxxQkFBcUI7Ozs7Ozs7SUFDaEMsU0FBUyxDQUFDLEtBQXNCLEVBQUUsTUFBZSxJQUFJLEVBQUUsY0FBc0IsR0FBRztRQUM5RSxPQUFPLGVBQWUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7WUFKRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbnVtYmVyVG9DaGluZXNlIH0gZnJvbSAnLi9udW1iZXItdG8tY2hpbmVzZSc7XG5cbi8qKlxuICogIEBkZXByZWNhdGVkIFdpbGwgYmUgcmVtb3ZlZCBpbiAxMi4wLjAsIFBscyB1c2VkIGBjdXJyZW5jeUNOWWAgaW5zdGVhZFxuICovXG5AUGlwZSh7IG5hbWU6ICduMmMnIH0pXG5leHBvcnQgY2xhc3MgTmFOdW1iZXJUb0NoaW5lc2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBybWI6IGJvb2xlYW4gPSB0cnVlLCBtaW51c1N5bWJvbDogc3RyaW5nID0gJ+i0nycpOiBzdHJpbmcge1xuICAgIHJldHVybiBudW1iZXJUb0NoaW5lc2UodmFsdWUsIHJtYiwgeyBtaW51c1N5bWJvbCB9KTtcbiAgfVxufVxuIl19