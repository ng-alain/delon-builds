/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * 是否为数字
 * @param {?} value
 * @return {?}
 */
export function isNum(value) {
    return /^((-?\d+\.\d+)|(-?\d+)|(-?\.\d+))$/.test(value.toString());
}
/**
 * 是否为整数
 * @param {?} value
 * @return {?}
 */
export function isInt(value) {
    // tslint:disable-next-line:triple-equals
    return isNum(value) && parseInt(value.toString(), 10) == value;
}
/**
 * 是否为小数
 * @param {?} value
 * @return {?}
 */
export function isDecimal(value) {
    return isNum(value) && !isInt(value);
}
/**
 * 是否为身份证
 * @param {?} value
 * @return {?}
 */
export function isIdCard(value) {
    return (typeof value === 'string' && /(^\d{15}$)|(^\d{17}([0-9]|X)$)/i.test(value));
}
/**
 * 是否为手机号
 * @param {?} value
 * @return {?}
 */
export function isMobile(value) {
    return (typeof value === 'string' &&
        /^(0|\+?86|17951)?(13[0-9]|15[0-9]|17[0678]|18[0-9]|14[57])[0-9]{8}$/.test(value));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdXRpbC8iLCJzb3VyY2VzIjpbInNyYy92YWxpZGF0ZS92YWxpZGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxNQUFNLFVBQVUsS0FBSyxDQUFDLEtBQXNCO0lBQzFDLE9BQU8sb0NBQW9DLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQ3JFLENBQUM7Ozs7OztBQUdELE1BQU0sVUFBVSxLQUFLLENBQUMsS0FBc0I7SUFDMUMseUNBQXlDO0lBQ3pDLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDO0FBQ2pFLENBQUM7Ozs7OztBQUdELE1BQU0sVUFBVSxTQUFTLENBQUMsS0FBc0I7SUFDOUMsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdkMsQ0FBQzs7Ozs7O0FBR0QsTUFBTSxVQUFVLFFBQVEsQ0FBQyxLQUFhO0lBQ3BDLE9BQU8sQ0FDTCxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksaUNBQWlDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUMzRSxDQUFDO0FBQ0osQ0FBQzs7Ozs7O0FBR0QsTUFBTSxVQUFVLFFBQVEsQ0FBQyxLQUFhO0lBQ3BDLE9BQU8sQ0FDTCxPQUFPLEtBQUssS0FBSyxRQUFRO1FBQ3pCLHFFQUFxRSxDQUFDLElBQUksQ0FDeEUsS0FBSyxDQUNOLENBQ0YsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiog5piv5ZCm5Li65pWw5a2XICovXG5leHBvcnQgZnVuY3Rpb24gaXNOdW0odmFsdWU6IHN0cmluZyB8IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gL14oKC0/XFxkK1xcLlxcZCspfCgtP1xcZCspfCgtP1xcLlxcZCspKSQvLnRlc3QodmFsdWUudG9TdHJpbmcoKSk7XG59XG5cbi8qKiDmmK/lkKbkuLrmlbTmlbAgKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0ludCh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogYm9vbGVhbiB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0cmlwbGUtZXF1YWxzXG4gIHJldHVybiBpc051bSh2YWx1ZSkgJiYgcGFyc2VJbnQodmFsdWUudG9TdHJpbmcoKSwgMTApID09IHZhbHVlO1xufVxuXG4vKiog5piv5ZCm5Li65bCP5pWwICovXG5leHBvcnQgZnVuY3Rpb24gaXNEZWNpbWFsKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGlzTnVtKHZhbHVlKSAmJiAhaXNJbnQodmFsdWUpO1xufVxuXG4vKiog5piv5ZCm5Li66Lqr5Lu96K+BICovXG5leHBvcnQgZnVuY3Rpb24gaXNJZENhcmQodmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgLyheXFxkezE1fSQpfCheXFxkezE3fShbMC05XXxYKSQpL2kudGVzdCh2YWx1ZSlcbiAgKTtcbn1cblxuLyoqIOaYr+WQpuS4uuaJi+acuuWPtyAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTW9iaWxlKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmXG4gICAgL14oMHxcXCs/ODZ8MTc5NTEpPygxM1swLTldfDE1WzAtOV18MTdbMDY3OF18MThbMC05XXwxNFs1N10pWzAtOV17OH0kLy50ZXN0KFxuICAgICAgdmFsdWUsXG4gICAgKVxuICApO1xufVxuIl19