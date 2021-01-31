/**
 * @fileoverview added by tsickle
 * Generated from: mega.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, LOCALE_ID, Pipe } from '@angular/core';
import { CurrencyService } from '@delon/util/format';
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
    { type: CurrencyService },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVnYS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9waXBlcy9jdXJyZW5jeS9tZWdhLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdyRCxNQUFNLE9BQU8sZ0JBQWdCOzs7OztJQUUzQixZQUFvQixHQUFvQixFQUFxQixNQUFjO1FBQXZELFFBQUcsR0FBSCxHQUFHLENBQWlCO1FBRGhDLFNBQUksR0FBRyxLQUFLLENBQUM7UUFFbkIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7Ozs7OztJQU9ELFNBQVMsQ0FBQyxLQUFzQixFQUFFLFlBQW9CLENBQUM7O2NBQy9DLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQztRQUMvQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7O1lBZkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRTs7OztZQUZyQixlQUFlO3lDQUtxQixNQUFNLFNBQUMsU0FBUzs7Ozs7OztJQUQzRCxnQ0FBcUI7Ozs7O0lBQ1QsK0JBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBMT0NBTEVfSUQsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEN1cnJlbmN5U2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL2Zvcm1hdCc7XG5cbkBQaXBlKHsgbmFtZTogJ2N1cnJlbmN5TWVnYScgfSlcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeU1lZ2FQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHByaXZhdGUgaXNDTiA9IGZhbHNlO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNydjogQ3VycmVuY3lTZXJ2aWNlLCBASW5qZWN0KExPQ0FMRV9JRCkgbG9jYWxlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmlzQ04gPSBsb2NhbGUuc3RhcnRzV2l0aCgnemgnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMYXJnZSBudW1iZXIgZm9ybWF0IGZpbHRlclxuICAgKlxuICAgKiDlpKfmlbDmja7moLzlvI/ljJZcbiAgICovXG4gIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBwcmVjaXNpb246IG51bWJlciA9IDIpOiBzdHJpbmcge1xuICAgIGNvbnN0IHJlcyA9IHRoaXMuc3J2Lm1lZ2EodmFsdWUsIHsgcHJlY2lzaW9uIH0pO1xuICAgIHJldHVybiByZXMudmFsdWUgKyAodGhpcy5pc0NOID8gcmVzLnVuaXRJMThuIDogcmVzLnVuaXQpO1xuICB9XG59XG4iXX0=