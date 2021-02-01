/**
 * @fileoverview added by tsickle
 * Generated from: currency.types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function CurrencyCommasOptions() { }
if (false) {
    /**
     * Thousands separator, default: `,`
     *
     * 千位分隔符，默认：`,`
     * @type {?|undefined}
     */
    CurrencyCommasOptions.prototype.separator;
    /**
     * Starting unit, default: `yuan`
     *
     * 起始单位，默认：`yuan`
     * @type {?|undefined}
     */
    CurrencyCommasOptions.prototype.startingUnit;
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
    /**
     * Starting unit, default: `yuan`
     *
     * 起始单位，默认：`yuan`
     * @type {?|undefined}
     */
    CurrencyMegaOptions.prototype.startingUnit;
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
    /**
     * Starting unit, default: `yuan`
     *
     * 起始单位，默认：`yuan`
     * @type {?|undefined}
     */
    CurrencyCNYOptions.prototype.startingUnit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kudHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL2Zvcm1hdC9jdXJyZW5jeS50eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLDJDQWNDOzs7Ozs7OztJQVJDLDBDQUFtQjs7Ozs7OztJQU9uQiw2Q0FBb0M7Ozs7O0FBR3RDLHlDQWlCQzs7Ozs7O0lBYkMsd0NBQW1COzs7OztJQUtuQix1Q0FBZ0M7Ozs7Ozs7SUFPaEMsMkNBQW9DOzs7OztBQUd0Qyx3Q0FLQzs7O0lBSkMsaUNBQXFCOztJQUNyQixtQ0FBYzs7SUFDZCxrQ0FBYTs7SUFDYixzQ0FBaUI7OztBQUduQixNQUFNLE9BQU8sbUJBQW1CLEdBQUc7SUFDakMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTtJQUN0QyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFO0lBQ3RDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7SUFDckMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRTtJQUNyQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtDQUMzQjs7OztBQUVELDBDQU1DOzs7SUFMQyxpQ0FBVTs7SUFDVixpQ0FBVTs7SUFDVixpQ0FBVTs7SUFDVixpQ0FBVTs7SUFDVixpQ0FBVTs7Ozs7QUFHWix3Q0FtQkM7Ozs7Ozs7O0lBYkMscUNBQWtCOzs7Ozs7O0lBTWxCLHlDQUFxQjs7Ozs7OztJQU1yQiwwQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdHlwZSBDdXJyZW5jeVN0YXJ0aW5nVW5pdCA9ICd5dWFuJyB8ICdjZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBDdXJyZW5jeUNvbW1hc09wdGlvbnMge1xuICAvKipcbiAgICogVGhvdXNhbmRzIHNlcGFyYXRvciwgZGVmYXVsdDogYCxgXG4gICAqXG4gICAqIOWNg+S9jeWIhumalOespu+8jOm7mOiupO+8mmAsYFxuICAgKi9cbiAgc2VwYXJhdG9yPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTdGFydGluZyB1bml0LCBkZWZhdWx0OiBgeXVhbmBcbiAgICpcbiAgICog6LW35aeL5Y2V5L2N77yM6buY6K6k77yaYHl1YW5gXG4gICAqL1xuICBzdGFydGluZ1VuaXQ/OiBDdXJyZW5jeVN0YXJ0aW5nVW5pdDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDdXJyZW5jeU1lZ2FPcHRpb25zIHtcbiAgLyoqXG4gICAqIOeyvuW6pu+8jOm7mOiupO+8mmAyYFxuICAgKi9cbiAgcHJlY2lzaW9uPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiDljZXkvY3lm73pmYXljJbvvIzpu5jorqTvvJpge1E6ICfkuqwnLCBUOiAn5YWGJywgQjogJ+S6vycsIE06ICfkuIcnLCBLOiAn5Y2DJyx9YFxuICAgKi9cbiAgdW5pdEkxOG4/OiBDdXJyZW5jeU1lZ2FVbml0STE4bjtcblxuICAvKipcbiAgICogU3RhcnRpbmcgdW5pdCwgZGVmYXVsdDogYHl1YW5gXG4gICAqXG4gICAqIOi1t+Wni+WNleS9je+8jOm7mOiupO+8mmB5dWFuYFxuICAgKi9cbiAgc3RhcnRpbmdVbml0PzogQ3VycmVuY3lTdGFydGluZ1VuaXQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VycmVuY3lNZWdhUmVzdWx0IHtcbiAgcmF3OiBudW1iZXIgfCBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIHVuaXQ6IHN0cmluZztcbiAgdW5pdEkxOG46IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IEN1cnJlbmN5TWVnYV9Qb3dlcnMgPSBbXG4gIHsgdW5pdDogJ1EnLCB2YWx1ZTogTWF0aC5wb3coMTAsIDE1KSB9LFxuICB7IHVuaXQ6ICdUJywgdmFsdWU6IE1hdGgucG93KDEwLCAxMikgfSxcbiAgeyB1bml0OiAnQicsIHZhbHVlOiBNYXRoLnBvdygxMCwgOSkgfSxcbiAgeyB1bml0OiAnTScsIHZhbHVlOiBNYXRoLnBvdygxMCwgNikgfSxcbiAgeyB1bml0OiAnSycsIHZhbHVlOiAxMDAwIH0sXG5dO1xuXG5leHBvcnQgaW50ZXJmYWNlIEN1cnJlbmN5TWVnYVVuaXRJMThuIHtcbiAgUTogc3RyaW5nO1xuICBUOiBzdHJpbmc7XG4gIEI6IHN0cmluZztcbiAgTTogc3RyaW5nO1xuICBLOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VycmVuY3lDTllPcHRpb25zIHtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gcmV0dXJuIHRvIHVwcGVyY2FzZSBub3RhdGlvbiwgZGVmYXVsdDogYHRydWVgXG4gICAqXG4gICAqIOaYr+WQpui/lOWbnuWkp+WGmeihqOekuuazle+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgaW5Xb3Jkcz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBTcGVjaWZ5IG5lZ2F0aXZlIHNpZ24sIGRlZmF1bHQ6IGBuZWdhdGl2ZWBcbiAgICpcbiAgICog5oyH5a6a6LSf5pWw56ym5Y+377yM6buY6K6k77yaYOi0n2BcbiAgICovXG4gIG1pbnVzU3ltYm9sPzogc3RyaW5nO1xuICAvKipcbiAgICogU3RhcnRpbmcgdW5pdCwgZGVmYXVsdDogYHl1YW5gXG4gICAqXG4gICAqIOi1t+Wni+WNleS9je+8jOm7mOiupO+8mmB5dWFuYFxuICAgKi9cbiAgc3RhcnRpbmdVbml0PzogQ3VycmVuY3lTdGFydGluZ1VuaXQ7XG59XG4iXX0=