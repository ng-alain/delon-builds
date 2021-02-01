/**
 * @fileoverview added by tsickle
 * Generated from: currency.types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function CurrencyStartingUnitOptions() { }
if (false) {
    /**
     * Starting unit, default: `yuan`
     *
     * 起始单位，默认：`yuan`
     * @type {?|undefined}
     */
    CurrencyStartingUnitOptions.prototype.startingUnit;
}
/**
 * @record
 */
export function CurrencyFormatOptions() { }
if (false) {
    /**
     * 精度，默认：`2`
     * @type {?|undefined}
     */
    CurrencyFormatOptions.prototype.precision;
}
/**
 * @record
 */
export function CurrencyMegaOptions() { }
if (false) {
    /**
     * 精度，默认：`2`
     * @type {?|undefined}
     */
    CurrencyMegaOptions.prototype.precision;
    /**
     * 单位国际化，默认：`{Q: '京', T: '兆', B: '亿', M: '万', K: '千',}`
     * @type {?|undefined}
     */
    CurrencyMegaOptions.prototype.unitI18n;
}
/**
 * @record
 */
export function CurrencyMegaResult() { }
if (false) {
    /** @type {?} */
    CurrencyMegaResult.prototype.raw;
    /** @type {?} */
    CurrencyMegaResult.prototype.value;
    /** @type {?} */
    CurrencyMegaResult.prototype.unit;
    /** @type {?} */
    CurrencyMegaResult.prototype.unitI18n;
}
/** @type {?} */
export const CurrencyMega_Powers = [
    { unit: 'Q', value: Math.pow(10, 15) },
    { unit: 'T', value: Math.pow(10, 12) },
    { unit: 'B', value: Math.pow(10, 9) },
    { unit: 'M', value: Math.pow(10, 6) },
    { unit: 'K', value: 1000 },
];
/**
 * @record
 */
export function CurrencyMegaUnitI18n() { }
if (false) {
    /** @type {?} */
    CurrencyMegaUnitI18n.prototype.Q;
    /** @type {?} */
    CurrencyMegaUnitI18n.prototype.T;
    /** @type {?} */
    CurrencyMegaUnitI18n.prototype.B;
    /** @type {?} */
    CurrencyMegaUnitI18n.prototype.M;
    /** @type {?} */
    CurrencyMegaUnitI18n.prototype.K;
}
/**
 * @record
 */
export function CurrencyCNYOptions() { }
if (false) {
    /**
     * Whether to return to uppercase notation, default: `true`
     *
     * 是否返回大写表示法，默认：`true`
     * @type {?|undefined}
     */
    CurrencyCNYOptions.prototype.inWords;
    /**
     * Specify negative sign, default: `negative`
     *
     * 指定负数符号，默认：`负`
     * @type {?|undefined}
     */
    CurrencyCNYOptions.prototype.minusSymbol;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kudHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL2Zvcm1hdC9jdXJyZW5jeS50eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLGlEQU9DOzs7Ozs7OztJQURDLG1EQUFvQzs7Ozs7QUFHdEMsMkNBS0M7Ozs7OztJQURDLDBDQUFtQjs7Ozs7QUFHckIseUNBVUM7Ozs7OztJQU5DLHdDQUFtQjs7Ozs7SUFLbkIsdUNBQWdDOzs7OztBQUdsQyx3Q0FLQzs7O0lBSkMsaUNBQXFCOztJQUNyQixtQ0FBYzs7SUFDZCxrQ0FBYTs7SUFDYixzQ0FBaUI7OztBQUduQixNQUFNLE9BQU8sbUJBQW1CLEdBQUc7SUFDakMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTtJQUN0QyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFO0lBQ3RDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7SUFDckMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRTtJQUNyQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtDQUMzQjs7OztBQUVELDBDQU1DOzs7SUFMQyxpQ0FBVTs7SUFDVixpQ0FBVTs7SUFDVixpQ0FBVTs7SUFDVixpQ0FBVTs7SUFDVixpQ0FBVTs7Ozs7QUFHWix3Q0FhQzs7Ozs7Ozs7SUFQQyxxQ0FBa0I7Ozs7Ozs7SUFNbEIseUNBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgQ3VycmVuY3lTdGFydGluZ1VuaXQgPSAneXVhbicgfCAnY2VudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VycmVuY3lTdGFydGluZ1VuaXRPcHRpb25zIHtcbiAgLyoqXG4gICAqIFN0YXJ0aW5nIHVuaXQsIGRlZmF1bHQ6IGB5dWFuYFxuICAgKlxuICAgKiDotbflp4vljZXkvY3vvIzpu5jorqTvvJpgeXVhbmBcbiAgICovXG4gIHN0YXJ0aW5nVW5pdD86IEN1cnJlbmN5U3RhcnRpbmdVbml0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEN1cnJlbmN5Rm9ybWF0T3B0aW9ucyBleHRlbmRzIEN1cnJlbmN5U3RhcnRpbmdVbml0T3B0aW9ucyB7XG4gIC8qKlxuICAgKiDnsr7luqbvvIzpu5jorqTvvJpgMmBcbiAgICovXG4gIHByZWNpc2lvbj86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDdXJyZW5jeU1lZ2FPcHRpb25zIGV4dGVuZHMgQ3VycmVuY3lTdGFydGluZ1VuaXRPcHRpb25zIHtcbiAgLyoqXG4gICAqIOeyvuW6pu+8jOm7mOiupO+8mmAyYFxuICAgKi9cbiAgcHJlY2lzaW9uPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiDljZXkvY3lm73pmYXljJbvvIzpu5jorqTvvJpge1E6ICfkuqwnLCBUOiAn5YWGJywgQjogJ+S6vycsIE06ICfkuIcnLCBLOiAn5Y2DJyx9YFxuICAgKi9cbiAgdW5pdEkxOG4/OiBDdXJyZW5jeU1lZ2FVbml0STE4bjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDdXJyZW5jeU1lZ2FSZXN1bHQge1xuICByYXc6IG51bWJlciB8IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbiAgdW5pdDogc3RyaW5nO1xuICB1bml0STE4bjogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgQ3VycmVuY3lNZWdhX1Bvd2VycyA9IFtcbiAgeyB1bml0OiAnUScsIHZhbHVlOiBNYXRoLnBvdygxMCwgMTUpIH0sXG4gIHsgdW5pdDogJ1QnLCB2YWx1ZTogTWF0aC5wb3coMTAsIDEyKSB9LFxuICB7IHVuaXQ6ICdCJywgdmFsdWU6IE1hdGgucG93KDEwLCA5KSB9LFxuICB7IHVuaXQ6ICdNJywgdmFsdWU6IE1hdGgucG93KDEwLCA2KSB9LFxuICB7IHVuaXQ6ICdLJywgdmFsdWU6IDEwMDAgfSxcbl07XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VycmVuY3lNZWdhVW5pdEkxOG4ge1xuICBROiBzdHJpbmc7XG4gIFQ6IHN0cmluZztcbiAgQjogc3RyaW5nO1xuICBNOiBzdHJpbmc7XG4gIEs6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDdXJyZW5jeUNOWU9wdGlvbnMgZXh0ZW5kcyBDdXJyZW5jeVN0YXJ0aW5nVW5pdE9wdGlvbnMge1xuICAvKipcbiAgICogV2hldGhlciB0byByZXR1cm4gdG8gdXBwZXJjYXNlIG5vdGF0aW9uLCBkZWZhdWx0OiBgdHJ1ZWBcbiAgICpcbiAgICog5piv5ZCm6L+U5Zue5aSn5YaZ6KGo56S65rOV77yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICBpbldvcmRzPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFNwZWNpZnkgbmVnYXRpdmUgc2lnbiwgZGVmYXVsdDogYG5lZ2F0aXZlYFxuICAgKlxuICAgKiDmjIflrprotJ/mlbDnrKblj7fvvIzpu5jorqTvvJpg6LSfYFxuICAgKi9cbiAgbWludXNTeW1ib2w/OiBzdHJpbmc7XG59XG4iXX0=