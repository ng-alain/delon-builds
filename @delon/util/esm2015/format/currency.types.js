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
     * The starting unit of the value, `yuan` means 元, `cent` means 分, default: `yuan`
     *
     * 值的起始单位，`yuan` 元，`cent` 分，默认：`yuan`
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kudHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL2Zvcm1hdC9jdXJyZW5jeS50eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLGlEQU9DOzs7Ozs7OztJQURDLG1EQUFvQzs7Ozs7QUFHdEMsMkNBS0M7Ozs7OztJQURDLDBDQUFtQjs7Ozs7QUFHckIseUNBVUM7Ozs7OztJQU5DLHdDQUFtQjs7Ozs7SUFLbkIsdUNBQWdDOzs7OztBQUdsQyx3Q0FLQzs7O0lBSkMsaUNBQXFCOztJQUNyQixtQ0FBYzs7SUFDZCxrQ0FBYTs7SUFDYixzQ0FBaUI7OztBQUduQixNQUFNLE9BQU8sbUJBQW1CLEdBQUc7SUFDakMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTtJQUN0QyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFO0lBQ3RDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7SUFDckMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRTtJQUNyQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtDQUMzQjs7OztBQUVELDBDQU1DOzs7SUFMQyxpQ0FBVTs7SUFDVixpQ0FBVTs7SUFDVixpQ0FBVTs7SUFDVixpQ0FBVTs7SUFDVixpQ0FBVTs7Ozs7QUFHWix3Q0FhQzs7Ozs7Ozs7SUFQQyxxQ0FBa0I7Ozs7Ozs7SUFNbEIseUNBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgQ3VycmVuY3lTdGFydGluZ1VuaXQgPSAneXVhbicgfCAnY2VudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VycmVuY3lTdGFydGluZ1VuaXRPcHRpb25zIHtcbiAgLyoqXG4gICAqIFRoZSBzdGFydGluZyB1bml0IG9mIHRoZSB2YWx1ZSwgYHl1YW5gIG1lYW5zIOWFgywgYGNlbnRgIG1lYW5zIOWIhiwgZGVmYXVsdDogYHl1YW5gXG4gICAqXG4gICAqIOWAvOeahOi1t+Wni+WNleS9je+8jGB5dWFuYCDlhYPvvIxgY2VudGAg5YiG77yM6buY6K6k77yaYHl1YW5gXG4gICAqL1xuICBzdGFydGluZ1VuaXQ/OiBDdXJyZW5jeVN0YXJ0aW5nVW5pdDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDdXJyZW5jeUZvcm1hdE9wdGlvbnMgZXh0ZW5kcyBDdXJyZW5jeVN0YXJ0aW5nVW5pdE9wdGlvbnMge1xuICAvKipcbiAgICog57K+5bqm77yM6buY6K6k77yaYDJgXG4gICAqL1xuICBwcmVjaXNpb24/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VycmVuY3lNZWdhT3B0aW9ucyBleHRlbmRzIEN1cnJlbmN5U3RhcnRpbmdVbml0T3B0aW9ucyB7XG4gIC8qKlxuICAgKiDnsr7luqbvvIzpu5jorqTvvJpgMmBcbiAgICovXG4gIHByZWNpc2lvbj86IG51bWJlcjtcblxuICAvKipcbiAgICog5Y2V5L2N5Zu96ZmF5YyW77yM6buY6K6k77yaYHtROiAn5LqsJywgVDogJ+WFhicsIEI6ICfkur8nLCBNOiAn5LiHJywgSzogJ+WNgycsfWBcbiAgICovXG4gIHVuaXRJMThuPzogQ3VycmVuY3lNZWdhVW5pdEkxOG47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VycmVuY3lNZWdhUmVzdWx0IHtcbiAgcmF3OiBudW1iZXIgfCBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIHVuaXQ6IHN0cmluZztcbiAgdW5pdEkxOG46IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IEN1cnJlbmN5TWVnYV9Qb3dlcnMgPSBbXG4gIHsgdW5pdDogJ1EnLCB2YWx1ZTogTWF0aC5wb3coMTAsIDE1KSB9LFxuICB7IHVuaXQ6ICdUJywgdmFsdWU6IE1hdGgucG93KDEwLCAxMikgfSxcbiAgeyB1bml0OiAnQicsIHZhbHVlOiBNYXRoLnBvdygxMCwgOSkgfSxcbiAgeyB1bml0OiAnTScsIHZhbHVlOiBNYXRoLnBvdygxMCwgNikgfSxcbiAgeyB1bml0OiAnSycsIHZhbHVlOiAxMDAwIH0sXG5dO1xuXG5leHBvcnQgaW50ZXJmYWNlIEN1cnJlbmN5TWVnYVVuaXRJMThuIHtcbiAgUTogc3RyaW5nO1xuICBUOiBzdHJpbmc7XG4gIEI6IHN0cmluZztcbiAgTTogc3RyaW5nO1xuICBLOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VycmVuY3lDTllPcHRpb25zIGV4dGVuZHMgQ3VycmVuY3lTdGFydGluZ1VuaXRPcHRpb25zIHtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gcmV0dXJuIHRvIHVwcGVyY2FzZSBub3RhdGlvbiwgZGVmYXVsdDogYHRydWVgXG4gICAqXG4gICAqIOaYr+WQpui/lOWbnuWkp+WGmeihqOekuuazle+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgaW5Xb3Jkcz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBTcGVjaWZ5IG5lZ2F0aXZlIHNpZ24sIGRlZmF1bHQ6IGBuZWdhdGl2ZWBcbiAgICpcbiAgICog5oyH5a6a6LSf5pWw56ym5Y+377yM6buY6K6k77yaYOi0n2BcbiAgICovXG4gIG1pbnVzU3ltYm9sPzogc3RyaW5nO1xufVxuIl19