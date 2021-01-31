/**
 * @fileoverview added by tsickle
 * Generated from: currency.types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /**
     * Throws an exception when the passed value is invalid. Default: `false`
     *
     * 当传递值无效数值时抛出异常，默认：`false`
     * @type {?|undefined}
     */
    CurrencyCNYOptions.prototype.validThrow;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kudHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL2Zvcm1hdC9jdXJyZW5jeS50eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHlDQVNDOzs7Ozs7SUFMQyx3Q0FBbUI7Ozs7O0lBSW5CLHVDQUFnQzs7Ozs7QUFHbEMsd0NBS0M7OztJQUpDLGlDQUFxQjs7SUFDckIsbUNBQWM7O0lBQ2Qsa0NBQWE7O0lBQ2Isc0NBQWlCOzs7QUFHbkIsTUFBTSxPQUFPLG1CQUFtQixHQUFHO0lBQ2pDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7SUFDdEMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTtJQUN0QyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFO0lBQ3JDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7SUFDckMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7Q0FDM0I7Ozs7QUFFRCwwQ0FNQzs7O0lBTEMsaUNBQVU7O0lBQ1YsaUNBQVU7O0lBQ1YsaUNBQVU7O0lBQ1YsaUNBQVU7O0lBQ1YsaUNBQVU7Ozs7O0FBR1osd0NBbUJDOzs7Ozs7OztJQWJDLHFDQUFrQjs7Ozs7OztJQU1sQix5Q0FBcUI7Ozs7Ozs7SUFNckIsd0NBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBDdXJyZW5jeU1lZ2FPcHRpb25zIHtcbiAgLyoqXG4gICAqIOeyvuW6pu+8jOm7mOiupO+8mmAyYFxuICAgKi9cbiAgcHJlY2lzaW9uPzogbnVtYmVyO1xuICAvKipcbiAgICog5Y2V5L2N5Zu96ZmF5YyW77yM6buY6K6k77yaYHtROiAn5LqsJywgVDogJ+WFhicsIEI6ICfkur8nLCBNOiAn5LiHJywgSzogJ+WNgycsfWBcbiAgICovXG4gIHVuaXRJMThuPzogQ3VycmVuY3lNZWdhVW5pdEkxOG47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VycmVuY3lNZWdhUmVzdWx0IHtcbiAgcmF3OiBudW1iZXIgfCBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIHVuaXQ6IHN0cmluZztcbiAgdW5pdEkxOG46IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IEN1cnJlbmN5TWVnYV9Qb3dlcnMgPSBbXG4gIHsgdW5pdDogJ1EnLCB2YWx1ZTogTWF0aC5wb3coMTAsIDE1KSB9LFxuICB7IHVuaXQ6ICdUJywgdmFsdWU6IE1hdGgucG93KDEwLCAxMikgfSxcbiAgeyB1bml0OiAnQicsIHZhbHVlOiBNYXRoLnBvdygxMCwgOSkgfSxcbiAgeyB1bml0OiAnTScsIHZhbHVlOiBNYXRoLnBvdygxMCwgNikgfSxcbiAgeyB1bml0OiAnSycsIHZhbHVlOiAxMDAwIH0sXG5dO1xuXG5leHBvcnQgaW50ZXJmYWNlIEN1cnJlbmN5TWVnYVVuaXRJMThuIHtcbiAgUTogc3RyaW5nO1xuICBUOiBzdHJpbmc7XG4gIEI6IHN0cmluZztcbiAgTTogc3RyaW5nO1xuICBLOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VycmVuY3lDTllPcHRpb25zIHtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gcmV0dXJuIHRvIHVwcGVyY2FzZSBub3RhdGlvbiwgZGVmYXVsdDogYHRydWVgXG4gICAqXG4gICAqIOaYr+WQpui/lOWbnuWkp+WGmeihqOekuuazle+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgaW5Xb3Jkcz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBTcGVjaWZ5IG5lZ2F0aXZlIHNpZ24sIGRlZmF1bHQ6IGBuZWdhdGl2ZWBcbiAgICpcbiAgICog5oyH5a6a6LSf5pWw56ym5Y+377yM6buY6K6k77yaYOi0n2BcbiAgICovXG4gIG1pbnVzU3ltYm9sPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhyb3dzIGFuIGV4Y2VwdGlvbiB3aGVuIHRoZSBwYXNzZWQgdmFsdWUgaXMgaW52YWxpZC4gRGVmYXVsdDogYGZhbHNlYFxuICAgKlxuICAgKiDlvZPkvKDpgJLlgLzml6DmlYjmlbDlgLzml7bmipvlh7rlvILluLjvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICB2YWxpZFRocm93PzogYm9vbGVhbjtcbn1cbiJdfQ==