/**
 * @fileoverview added by tsickle
 * Generated from: currency.types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function FormatCurrencyMegaOptions() { }
if (false) {
    /**
     * 精度，默认：`2`
     * @type {?|undefined}
     */
    FormatCurrencyMegaOptions.prototype.precision;
    /**
     * 单位国际化，默认：`{Q: '京', T: '兆', B: '亿', M: '万', K: '千',}`
     * @type {?|undefined}
     */
    FormatCurrencyMegaOptions.prototype.unitI18n;
}
/**
 * @record
 */
export function FormatCurrencyMegaResult() { }
if (false) {
    /** @type {?} */
    FormatCurrencyMegaResult.prototype.raw;
    /** @type {?} */
    FormatCurrencyMegaResult.prototype.value;
    /** @type {?} */
    FormatCurrencyMegaResult.prototype.unit;
    /** @type {?} */
    FormatCurrencyMegaResult.prototype.unitI18n;
}
/** @type {?} */
export const FormatCurrencyMega_Powers = [
    { unit: 'Q', value: Math.pow(10, 15) },
    { unit: 'T', value: Math.pow(10, 12) },
    { unit: 'B', value: Math.pow(10, 9) },
    { unit: 'M', value: Math.pow(10, 6) },
    { unit: 'K', value: 1000 },
];
/**
 * @record
 */
export function FormatCurrencyMegaUnitI18n() { }
if (false) {
    /** @type {?} */
    FormatCurrencyMegaUnitI18n.prototype.Q;
    /** @type {?} */
    FormatCurrencyMegaUnitI18n.prototype.T;
    /** @type {?} */
    FormatCurrencyMegaUnitI18n.prototype.B;
    /** @type {?} */
    FormatCurrencyMegaUnitI18n.prototype.M;
    /** @type {?} */
    FormatCurrencyMegaUnitI18n.prototype.K;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kudHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL2Zvcm1hdC9jdXJyZW5jeS50eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLCtDQVNDOzs7Ozs7SUFMQyw4Q0FBbUI7Ozs7O0lBSW5CLDZDQUFzQzs7Ozs7QUFHeEMsOENBS0M7OztJQUpDLHVDQUFxQjs7SUFDckIseUNBQWM7O0lBQ2Qsd0NBQWE7O0lBQ2IsNENBQWlCOzs7QUFHbkIsTUFBTSxPQUFPLHlCQUF5QixHQUFHO0lBQ3ZDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7SUFDdEMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTtJQUN0QyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFO0lBQ3JDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7SUFDckMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7Q0FDM0I7Ozs7QUFFRCxnREFNQzs7O0lBTEMsdUNBQVU7O0lBQ1YsdUNBQVU7O0lBQ1YsdUNBQVU7O0lBQ1YsdUNBQVU7O0lBQ1YsdUNBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIEZvcm1hdEN1cnJlbmN5TWVnYU9wdGlvbnMge1xuICAvKipcbiAgICog57K+5bqm77yM6buY6K6k77yaYDJgXG4gICAqL1xuICBwcmVjaXNpb24/OiBudW1iZXI7XG4gIC8qKlxuICAgKiDljZXkvY3lm73pmYXljJbvvIzpu5jorqTvvJpge1E6ICfkuqwnLCBUOiAn5YWGJywgQjogJ+S6vycsIE06ICfkuIcnLCBLOiAn5Y2DJyx9YFxuICAgKi9cbiAgdW5pdEkxOG4/OiBGb3JtYXRDdXJyZW5jeU1lZ2FVbml0STE4bjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb3JtYXRDdXJyZW5jeU1lZ2FSZXN1bHQge1xuICByYXc6IG51bWJlciB8IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbiAgdW5pdDogc3RyaW5nO1xuICB1bml0STE4bjogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgRm9ybWF0Q3VycmVuY3lNZWdhX1Bvd2VycyA9IFtcbiAgeyB1bml0OiAnUScsIHZhbHVlOiBNYXRoLnBvdygxMCwgMTUpIH0sXG4gIHsgdW5pdDogJ1QnLCB2YWx1ZTogTWF0aC5wb3coMTAsIDEyKSB9LFxuICB7IHVuaXQ6ICdCJywgdmFsdWU6IE1hdGgucG93KDEwLCA5KSB9LFxuICB7IHVuaXQ6ICdNJywgdmFsdWU6IE1hdGgucG93KDEwLCA2KSB9LFxuICB7IHVuaXQ6ICdLJywgdmFsdWU6IDEwMDAgfSxcbl07XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybWF0Q3VycmVuY3lNZWdhVW5pdEkxOG4ge1xuICBROiBzdHJpbmc7XG4gIFQ6IHN0cmluZztcbiAgQjogc3RyaW5nO1xuICBNOiBzdHJpbmc7XG4gIEs6IHN0cmluZztcbn1cbiJdfQ==