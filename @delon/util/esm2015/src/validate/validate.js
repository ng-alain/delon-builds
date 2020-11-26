/**
 * @fileoverview added by tsickle
 * Generated from: src/validate/validate.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    return isNum(value) && parseInt(value.toString(), 10).toString() === value.toString();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdnN0cy93b3JrLzEvcy9wYWNrYWdlcy91dGlsLyIsInNvdXJjZXMiOlsic3JjL3ZhbGlkYXRlL3ZhbGlkYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxNQUFNLFVBQVUsS0FBSyxDQUFDLEtBQXNCO0lBQzFDLE9BQU8sb0NBQW9DLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQ3JFLENBQUM7Ozs7OztBQUdELE1BQU0sVUFBVSxLQUFLLENBQUMsS0FBc0I7SUFDMUMsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDeEYsQ0FBQzs7Ozs7O0FBR0QsTUFBTSxVQUFVLFNBQVMsQ0FBQyxLQUFzQjtJQUM5QyxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN2QyxDQUFDOzs7Ozs7QUFHRCxNQUFNLFVBQVUsUUFBUSxDQUFDLEtBQWE7SUFDcEMsT0FBTyxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksaUNBQWlDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BGLENBQUM7Ozs7OztBQUdELE1BQU0sVUFBVSxRQUFRLENBQUMsS0FBYTtJQUNwQyxPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxxRUFBcUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDeEgsQ0FBQzs7Ozs7O0FBR0QsTUFBTSxVQUFVLEtBQUssQ0FBQyxHQUFXO0lBQy9CLE9BQU8sdUtBQXVLLENBQUMsSUFBSSxDQUNqTCxHQUFHLENBQ0osQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiog5piv5ZCm5Li65pWw5a2XICovXG5leHBvcnQgZnVuY3Rpb24gaXNOdW0odmFsdWU6IHN0cmluZyB8IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gL14oKC0/XFxkK1xcLlxcZCspfCgtP1xcZCspfCgtP1xcLlxcZCspKSQvLnRlc3QodmFsdWUudG9TdHJpbmcoKSk7XG59XG5cbi8qKiDmmK/lkKbkuLrmlbTmlbAgKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0ludCh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiBpc051bSh2YWx1ZSkgJiYgcGFyc2VJbnQodmFsdWUudG9TdHJpbmcoKSwgMTApLnRvU3RyaW5nKCkgPT09IHZhbHVlLnRvU3RyaW5nKCk7XG59XG5cbi8qKiDmmK/lkKbkuLrlsI/mlbAgKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0RlY2ltYWwodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gaXNOdW0odmFsdWUpICYmICFpc0ludCh2YWx1ZSk7XG59XG5cbi8qKiDmmK/lkKbkuLrouqvku73or4EgKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0lkQ2FyZCh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIC8oXlxcZHsxNX0kKXwoXlxcZHsxN30oWzAtOV18WCkkKS9pLnRlc3QodmFsdWUpO1xufVxuXG4vKiog5piv5ZCm5Li65omL5py65Y+3ICovXG5leHBvcnQgZnVuY3Rpb24gaXNNb2JpbGUodmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAvXigwfFxcKz84NnwxNzk1MSk/KDEzWzAtOV18MTVbMC05XXwxN1swNjc4XXwxOFswLTldfDE0WzU3XSlbMC05XXs4fSQvLnRlc3QodmFsdWUpO1xufVxuXG4vKiog5piv5ZCmVVJM5Zyw5Z2AICovXG5leHBvcnQgZnVuY3Rpb24gaXNVcmwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIC8oKCheaHR0cHM/Oig/OlxcL1xcLyk/KSg/OlstOzomPVxcK1xcJCxcXHddK0ApP1tBLVphLXowLTkuLV0rKD86OlxcZCspP3woPzp3d3cufFstOzomPVxcK1xcJCxcXHddK0ApW0EtWmEtejAtOS4tXSspKCg/OlxcL1tcXCt+JVxcLy5cXHctX10qKT9cXD8/KD86Wy1cXCs9JjslQC5cXHdfXSopIz8oPzpbXFx3XSopKT8pJC8udGVzdChcbiAgICB1cmwsXG4gICk7XG59XG4iXX0=