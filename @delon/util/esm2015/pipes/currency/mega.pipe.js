/**
 * @fileoverview added by tsickle
 * Generated from: mega.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, LOCALE_ID, Pipe } from '@angular/core';
import { FormatCurrencyService } from '@delon/util/format';
export class CurrencyMegaPipe {
    /**
     * @param {?} srv
     * @param {?} locale
     */
    constructor(srv, locale) {
        this.srv = srv;
        this.isCN = false;
        this.isCN = locale.startsWith('zh');
    }
    /**
     * Large number format filter
     *
     * 大数据格式化
     * @param {?} value
     * @param {?=} precision
     * @return {?}
     */
    transform(value, precision = 2) {
        /** @type {?} */
        const res = this.srv.mega(value, { precision });
        return res.value + (this.isCN ? res.unitI18n : res.unit);
    }
}
CurrencyMegaPipe.decorators = [
    { type: Pipe, args: [{ name: 'currencyMega' },] }
];
/** @nocollapse */
CurrencyMegaPipe.ctorParameters = () => [
    { type: FormatCurrencyService },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CurrencyMegaPipe.prototype.isCN;
    /**
     * @type {?}
     * @private
     */
    CurrencyMegaPipe.prototype.srv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVnYS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9waXBlcy9jdXJyZW5jeS9tZWdhLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRzNELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBRTNCLFlBQW9CLEdBQTBCLEVBQXFCLE1BQWM7UUFBN0QsUUFBRyxHQUFILEdBQUcsQ0FBdUI7UUFEdEMsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUVuQixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7Ozs7O0lBT0QsU0FBUyxDQUFDLEtBQXNCLEVBQUUsWUFBb0IsQ0FBQzs7Y0FDL0MsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDO1FBQy9DLE9BQU8sR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7WUFmRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFOzs7O1lBRnJCLHFCQUFxQjt5Q0FLcUIsTUFBTSxTQUFDLFNBQVM7Ozs7Ozs7SUFEakUsZ0NBQXFCOzs7OztJQUNULCtCQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgTE9DQUxFX0lELCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtYXRDdXJyZW5jeVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9mb3JtYXQnO1xuXG5AUGlwZSh7IG5hbWU6ICdjdXJyZW5jeU1lZ2EnIH0pXG5leHBvcnQgY2xhc3MgQ3VycmVuY3lNZWdhUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBwcml2YXRlIGlzQ04gPSBmYWxzZTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IEZvcm1hdEN1cnJlbmN5U2VydmljZSwgQEluamVjdChMT0NBTEVfSUQpIGxvY2FsZTogc3RyaW5nKSB7XG4gICAgdGhpcy5pc0NOID0gbG9jYWxlLnN0YXJ0c1dpdGgoJ3poJyk7XG4gIH1cblxuICAvKipcbiAgICogTGFyZ2UgbnVtYmVyIGZvcm1hdCBmaWx0ZXJcbiAgICpcbiAgICog5aSn5pWw5o2u5qC85byP5YyWXG4gICAqL1xuICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlciB8IHN0cmluZywgcHJlY2lzaW9uOiBudW1iZXIgPSAyKTogc3RyaW5nIHtcbiAgICBjb25zdCByZXMgPSB0aGlzLnNydi5tZWdhKHZhbHVlLCB7IHByZWNpc2lvbiB9KTtcbiAgICByZXR1cm4gcmVzLnZhbHVlICsgKHRoaXMuaXNDTiA/IHJlcy51bml0STE4biA6IHJlcy51bml0KTtcbiAgfVxufVxuIl19