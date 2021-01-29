/**
 * @fileoverview added by tsickle
 * Generated from: number.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Format a number with commas as thousands separators
 *
 * 用逗号将数字格式化为千位分隔符
 * ```ts
 * 10000 => `10,000`
 * ```
 * @param {?} value
 * @param {?=} separator
 * @return {?}
 */
export function commasNumber(value, separator = ',') {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}
/** @type {?} */
export const MEGA_POWERS = [
    { unit: 'Q', value: Math.pow(10, 15) },
    { unit: 'T', value: Math.pow(10, 12) },
    { unit: 'B', value: Math.pow(10, 9) },
    { unit: 'M', value: Math.pow(10, 6) },
    { unit: 'K', value: 1000 },
];
/**
 * @record
 */
export function MegaNumberUnitI18n() { }
if (false) {
    /** @type {?} */
    MegaNumberUnitI18n.prototype.Q;
    /** @type {?} */
    MegaNumberUnitI18n.prototype.T;
    /** @type {?} */
    MegaNumberUnitI18n.prototype.B;
    /** @type {?} */
    MegaNumberUnitI18n.prototype.M;
    /** @type {?} */
    MegaNumberUnitI18n.prototype.K;
}
/**
 * @record
 */
export function MegaNumberResult() { }
if (false) {
    /** @type {?} */
    MegaNumberResult.prototype.raw;
    /** @type {?} */
    MegaNumberResult.prototype.value;
    /** @type {?} */
    MegaNumberResult.prototype.unit;
    /** @type {?} */
    MegaNumberResult.prototype.unitI18n;
}
/**
 * Large number format filter
 *
 * 大数据格式化
 * ```ts
 * 1000 => { value: '1', unit: 'K', unitI18n: '千' }
 * 12456 => { value: '12.46', unit: 'K', unitI18n: '千' }
 * ```
 * @param {?} value
 * @param {?=} precision
 * @param {?=} unitI18n
 * @return {?}
 */
export function megaNumber(value, precision = 2, unitI18n = { Q: '京', T: '兆', B: '亿', M: '万', K: '千' }) {
    /** @type {?} */
    const num = parseFloat(value.toString());
    /** @type {?} */
    const res = { raw: value, value: '', unit: '', unitI18n: '' };
    if (isNaN(num) || num === 0) {
        res.value = value.toString();
        return res;
    }
    /** @type {?} */
    let abs = Math.abs(+value);
    /** @type {?} */
    const rounder = Math.pow(10, (/** @type {?} */ (precision)));
    /** @type {?} */
    const isNegative = num < 0;
    for (const p of MEGA_POWERS) {
        /** @type {?} */
        let reduced = abs / p.value;
        reduced = Math.round(reduced * rounder) / rounder;
        if (reduced >= 1) {
            abs = reduced;
            res.unit = p.unit;
            break;
        }
    }
    res.value = (isNegative ? '-' : '') + abs;
    res.unitI18n = ((/** @type {?} */ (unitI18n)))[res.unit];
    return res;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9mb3JtYXQvbnVtYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSxNQUFNLFVBQVUsWUFBWSxDQUFDLEtBQXNCLEVBQUUsWUFBb0IsR0FBRztJQUMxRSxPQUFPLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDdEUsQ0FBQzs7QUFFRCxNQUFNLE9BQU8sV0FBVyxHQUFHO0lBQ3pCLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7SUFDdEMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTtJQUN0QyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFO0lBQ3JDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7SUFDckMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7Q0FDM0I7Ozs7QUFFRCx3Q0FNQzs7O0lBTEMsK0JBQVU7O0lBQ1YsK0JBQVU7O0lBQ1YsK0JBQVU7O0lBQ1YsK0JBQVU7O0lBQ1YsK0JBQVU7Ozs7O0FBR1osc0NBS0M7OztJQUpDLCtCQUFxQjs7SUFDckIsaUNBQWM7O0lBQ2QsZ0NBQWE7O0lBQ2Isb0NBQWlCOzs7Ozs7Ozs7Ozs7Ozs7QUFZbkIsTUFBTSxVQUFVLFVBQVUsQ0FDeEIsS0FBc0IsRUFDdEIsWUFBb0IsQ0FBQyxFQUNyQixXQUErQixFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRTs7VUFFbkUsR0FBRyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7O1VBQ2xDLEdBQUcsR0FBcUIsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO0lBQy9FLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLEVBQUU7UUFDM0IsR0FBRyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDN0IsT0FBTyxHQUFHLENBQUM7S0FDWjs7UUFDRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQzs7VUFDcEIsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLG1CQUFBLFNBQVMsRUFBQyxDQUFDOztVQUNsQyxVQUFVLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDMUIsS0FBSyxNQUFNLENBQUMsSUFBSSxXQUFXLEVBQUU7O1lBQ3ZCLE9BQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUs7UUFFM0IsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLE9BQU8sQ0FBQztRQUVsRCxJQUFJLE9BQU8sSUFBSSxDQUFDLEVBQUU7WUFDaEIsR0FBRyxHQUFHLE9BQU8sQ0FBQztZQUNkLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNsQixNQUFNO1NBQ1A7S0FDRjtJQUVELEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQzFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxtQkFBQSxRQUFRLEVBQTBCLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUQsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBGb3JtYXQgYSBudW1iZXIgd2l0aCBjb21tYXMgYXMgdGhvdXNhbmRzIHNlcGFyYXRvcnNcbiAqXG4gKiDnlKjpgJflj7flsIbmlbDlrZfmoLzlvI/ljJbkuLrljYPkvY3liIbpmpTnrKZcbiAqIGBgYHRzXG4gKiAxMDAwMCA9PiBgMTAsMDAwYFxuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21tYXNOdW1iZXIodmFsdWU6IG51bWJlciB8IHN0cmluZywgc2VwYXJhdG9yOiBzdHJpbmcgPSAnLCcpOiBzdHJpbmcge1xuICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBzZXBhcmF0b3IpO1xufVxuXG5leHBvcnQgY29uc3QgTUVHQV9QT1dFUlMgPSBbXG4gIHsgdW5pdDogJ1EnLCB2YWx1ZTogTWF0aC5wb3coMTAsIDE1KSB9LFxuICB7IHVuaXQ6ICdUJywgdmFsdWU6IE1hdGgucG93KDEwLCAxMikgfSxcbiAgeyB1bml0OiAnQicsIHZhbHVlOiBNYXRoLnBvdygxMCwgOSkgfSxcbiAgeyB1bml0OiAnTScsIHZhbHVlOiBNYXRoLnBvdygxMCwgNikgfSxcbiAgeyB1bml0OiAnSycsIHZhbHVlOiAxMDAwIH0sXG5dO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lZ2FOdW1iZXJVbml0STE4biB7XG4gIFE6IHN0cmluZztcbiAgVDogc3RyaW5nO1xuICBCOiBzdHJpbmc7XG4gIE06IHN0cmluZztcbiAgSzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lZ2FOdW1iZXJSZXN1bHQge1xuICByYXc6IG51bWJlciB8IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbiAgdW5pdDogc3RyaW5nO1xuICB1bml0STE4bjogc3RyaW5nO1xufVxuXG4vKipcbiAqIExhcmdlIG51bWJlciBmb3JtYXQgZmlsdGVyXG4gKlxuICog5aSn5pWw5o2u5qC85byP5YyWXG4gKiBgYGB0c1xuICogMTAwMCA9PiB7IHZhbHVlOiAnMScsIHVuaXQ6ICdLJywgdW5pdEkxOG46ICfljYMnIH1cbiAqIDEyNDU2ID0+IHsgdmFsdWU6ICcxMi40NicsIHVuaXQ6ICdLJywgdW5pdEkxOG46ICfljYMnIH1cbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVnYU51bWJlcihcbiAgdmFsdWU6IG51bWJlciB8IHN0cmluZyxcbiAgcHJlY2lzaW9uOiBudW1iZXIgPSAyLFxuICB1bml0STE4bjogTWVnYU51bWJlclVuaXRJMThuID0geyBROiAn5LqsJywgVDogJ+WFhicsIEI6ICfkur8nLCBNOiAn5LiHJywgSzogJ+WNgycgfSxcbik6IE1lZ2FOdW1iZXJSZXN1bHQge1xuICBjb25zdCBudW0gPSBwYXJzZUZsb2F0KHZhbHVlLnRvU3RyaW5nKCkpO1xuICBjb25zdCByZXM6IE1lZ2FOdW1iZXJSZXN1bHQgPSB7IHJhdzogdmFsdWUsIHZhbHVlOiAnJywgdW5pdDogJycsIHVuaXRJMThuOiAnJyB9O1xuICBpZiAoaXNOYU4obnVtKSB8fCBudW0gPT09IDApIHtcbiAgICByZXMudmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgIHJldHVybiByZXM7XG4gIH1cbiAgbGV0IGFicyA9IE1hdGguYWJzKCt2YWx1ZSk7XG4gIGNvbnN0IHJvdW5kZXIgPSBNYXRoLnBvdygxMCwgcHJlY2lzaW9uISk7XG4gIGNvbnN0IGlzTmVnYXRpdmUgPSBudW0gPCAwO1xuICBmb3IgKGNvbnN0IHAgb2YgTUVHQV9QT1dFUlMpIHtcbiAgICBsZXQgcmVkdWNlZCA9IGFicyAvIHAudmFsdWU7XG5cbiAgICByZWR1Y2VkID0gTWF0aC5yb3VuZChyZWR1Y2VkICogcm91bmRlcikgLyByb3VuZGVyO1xuXG4gICAgaWYgKHJlZHVjZWQgPj0gMSkge1xuICAgICAgYWJzID0gcmVkdWNlZDtcbiAgICAgIHJlcy51bml0ID0gcC51bml0O1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmVzLnZhbHVlID0gKGlzTmVnYXRpdmUgPyAnLScgOiAnJykgKyBhYnM7XG4gIHJlcy51bml0STE4biA9ICh1bml0STE4biBhcyB7IFtrZXk6IHN0cmluZ106IGFueSB9KVtyZXMudW5pdF07XG4gIHJldHVybiByZXM7XG59XG4iXX0=