/**
 * @fileoverview added by tsickle
 * Generated from: src/validate/validate.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    return typeof value === 'string' && /(^\d{15}$)|(^\d{17}([0-9]|X)$)/i.test(value);
}
/**
 * 是否为手机号
 * @param {?} value
 * @return {?}
 */
export function isMobile(value) {
    return typeof value === 'string' && /^(0|\+?86|17951)?(13[0-9]|15[0-9]|17[0678]|18[0-9]|14[57])[0-9]{8}$/.test(value);
}
/**
 * 是否URL地址
 * @param {?} url
 * @return {?}
 */
export function isUrl(url) {
    return /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/.test(url);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdXRpbC8iLCJzb3VyY2VzIjpbInNyYy92YWxpZGF0ZS92YWxpZGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsTUFBTSxVQUFVLEtBQUssQ0FBQyxLQUFzQjtJQUMxQyxPQUFPLG9DQUFvQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUNyRSxDQUFDOzs7Ozs7QUFHRCxNQUFNLFVBQVUsS0FBSyxDQUFDLEtBQXNCO0lBQzFDLHlDQUF5QztJQUN6QyxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQztBQUNqRSxDQUFDOzs7Ozs7QUFHRCxNQUFNLFVBQVUsU0FBUyxDQUFDLEtBQXNCO0lBQzlDLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7Ozs7OztBQUdELE1BQU0sVUFBVSxRQUFRLENBQUMsS0FBYTtJQUNwQyxPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxpQ0FBaUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEYsQ0FBQzs7Ozs7O0FBR0QsTUFBTSxVQUFVLFFBQVEsQ0FBQyxLQUFhO0lBQ3BDLE9BQU8sT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLHFFQUFxRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN4SCxDQUFDOzs7Ozs7QUFHRCxNQUFNLFVBQVUsS0FBSyxDQUFDLEdBQVc7SUFDL0IsT0FBTyx1S0FBdUssQ0FBQyxJQUFJLENBQ2pMLEdBQUcsQ0FDSixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiDmmK/lkKbkuLrmlbDlrZcgKi9cbmV4cG9ydCBmdW5jdGlvbiBpc051bSh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiAvXigoLT9cXGQrXFwuXFxkKyl8KC0/XFxkKyl8KC0/XFwuXFxkKykpJC8udGVzdCh2YWx1ZS50b1N0cmluZygpKTtcbn1cblxuLyoqIOaYr+WQpuS4uuaVtOaVsCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSW50KHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBib29sZWFuIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcbiAgcmV0dXJuIGlzTnVtKHZhbHVlKSAmJiBwYXJzZUludCh2YWx1ZS50b1N0cmluZygpLCAxMCkgPT0gdmFsdWU7XG59XG5cbi8qKiDmmK/lkKbkuLrlsI/mlbAgKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0RlY2ltYWwodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gaXNOdW0odmFsdWUpICYmICFpc0ludCh2YWx1ZSk7XG59XG5cbi8qKiDmmK/lkKbkuLrouqvku73or4EgKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0lkQ2FyZCh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIC8oXlxcZHsxNX0kKXwoXlxcZHsxN30oWzAtOV18WCkkKS9pLnRlc3QodmFsdWUpO1xufVxuXG4vKiog5piv5ZCm5Li65omL5py65Y+3ICovXG5leHBvcnQgZnVuY3Rpb24gaXNNb2JpbGUodmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAvXigwfFxcKz84NnwxNzk1MSk/KDEzWzAtOV18MTVbMC05XXwxN1swNjc4XXwxOFswLTldfDE0WzU3XSlbMC05XXs4fSQvLnRlc3QodmFsdWUpO1xufVxuXG4vKiog5piv5ZCmVVJM5Zyw5Z2AICovXG5leHBvcnQgZnVuY3Rpb24gaXNVcmwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIC8oKCheaHR0cHM/Oig/OlxcL1xcLyk/KSg/OlstOzomPVxcK1xcJCxcXHddK0ApP1tBLVphLXowLTkuLV0rKD86OlxcZCspP3woPzp3d3cufFstOzomPVxcK1xcJCxcXHddK0ApW0EtWmEtejAtOS4tXSspKCg/OlxcL1tcXCt+JVxcLy5cXHctX10qKT9cXD8/KD86Wy1cXCs9JjslQC5cXHdfXSopIz8oPzpbXFx3XSopKT8pJC8udGVzdChcbiAgICB1cmwsXG4gICk7XG59XG4iXX0=