/**
 * @fileoverview added by tsickle
 * Generated from: mega.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, LOCALE_ID, Pipe } from '@angular/core';
import { megaNumber } from '@delon/util/format';
export class MegaNumberPipe {
    /**
     * @param {?} locale
     */
    constructor(locale) {
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
        const res = megaNumber(value, precision);
        return res.value + (this.isCN ? res.unitI18n : res.unit);
    }
}
MegaNumberPipe.decorators = [
    { type: Pipe, args: [{ name: 'megaNumber' },] }
];
/** @nocollapse */
MegaNumberPipe.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    MegaNumberPipe.prototype.isCN;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVnYS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9waXBlcy9mb3JtYXQtbnVtYmVyL21lZ2EucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR2hELE1BQU0sT0FBTyxjQUFjOzs7O0lBRXpCLFlBQStCLE1BQWM7UUFEckMsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUVuQixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7Ozs7O0lBT0QsU0FBUyxDQUFDLEtBQXNCLEVBQUUsWUFBb0IsQ0FBQzs7Y0FDL0MsR0FBRyxHQUFHLFVBQVUsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDO1FBQ3hDLE9BQU8sR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7WUFmRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFOzs7O3lDQUdiLE1BQU0sU0FBQyxTQUFTOzs7Ozs7O0lBRDdCLDhCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgTE9DQUxFX0lELCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBtZWdhTnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwvZm9ybWF0JztcblxuQFBpcGUoeyBuYW1lOiAnbWVnYU51bWJlcicgfSlcbmV4cG9ydCBjbGFzcyBNZWdhTnVtYmVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBwcml2YXRlIGlzQ04gPSBmYWxzZTtcbiAgY29uc3RydWN0b3IoQEluamVjdChMT0NBTEVfSUQpIGxvY2FsZTogc3RyaW5nKSB7XG4gICAgdGhpcy5pc0NOID0gbG9jYWxlLnN0YXJ0c1dpdGgoJ3poJyk7XG4gIH1cblxuICAvKipcbiAgICogTGFyZ2UgbnVtYmVyIGZvcm1hdCBmaWx0ZXJcbiAgICpcbiAgICog5aSn5pWw5o2u5qC85byP5YyWXG4gICAqL1xuICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlciB8IHN0cmluZywgcHJlY2lzaW9uOiBudW1iZXIgPSAyKTogc3RyaW5nIHtcbiAgICBjb25zdCByZXMgPSBtZWdhTnVtYmVyKHZhbHVlLCBwcmVjaXNpb24pO1xuICAgIHJldHVybiByZXMudmFsdWUgKyAodGhpcy5pc0NOID8gcmVzLnVuaXRJMThuIDogcmVzLnVuaXQpO1xuICB9XG59XG4iXX0=