/**
 * @fileoverview added by tsickle
 * Generated from: validate.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const REGEX = {
    num: /^((-?\d+\.\d+)|(-?\d+)|(-?\.\d+))$/,
    idCard: /(^\d{15}$)|(^\d{17}([0-9]|X)$)/i,
    mobile: /^(0|\+?86|17951)?(13[0-9]|15[0-9]|17[0678]|18[0-9]|14[57])[0-9]{8}$/,
    url: /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/,
    ip4: /(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}/,
};
/**
 * Wheter is number
 *
 * 是否为数字
 * @param {?} value
 * @return {?}
 */
export function isNum(value) {
    return REGEX.num.test(value.toString());
}
/**
 * Wheter is integer
 *
 * 是否为整数
 * @param {?} value
 * @return {?}
 */
export function isInt(value) {
    return isNum(value) && parseInt(value.toString(), 10).toString() === value.toString();
}
/**
 * Wheter is decimal
 *
 * 是否为小数点数值
 * @param {?} value
 * @return {?}
 */
export function isDecimal(value) {
    return isNum(value) && !isInt(value);
}
/**
 * Wheter is People's Republic of China identity card
 *
 * 是否为中华人民共和国居民身份证
 * @param {?} value
 * @return {?}
 */
export function isIdCard(value) {
    return typeof value === 'string' && REGEX.idCard.test(value);
}
/**
 * Wheter is china mobile (China)
 *
 * 是否为手机号（中国）
 * @param {?} value
 * @return {?}
 */
export function isMobile(value) {
    return typeof value === 'string' && REGEX.mobile.test(value);
}
/**
 * Wheter is url address
 *
 * 是否URL地址
 * @param {?} url
 * @return {?}
 */
export function isUrl(url) {
    return REGEX.url.test(url);
}
/**
 * Wheter is IPv4 address
 *
 * 是否IP4地址
 * @param {?} ip
 * @return {?}
 */
export function isIp4(ip) {
    return REGEX.ip4.test(ip);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL2Zvcm1hdC92YWxpZGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxNQUFNLE9BQU8sS0FBSyxHQUFHO0lBQ25CLEdBQUcsRUFBRSxvQ0FBb0M7SUFDekMsTUFBTSxFQUFFLGlDQUFpQztJQUN6QyxNQUFNLEVBQUUscUVBQXFFO0lBQzdFLEdBQUcsRUFBRSx1S0FBdUs7SUFDNUssR0FBRyxFQUFFLGdHQUFnRztDQUN0Rzs7Ozs7Ozs7QUFPRCxNQUFNLFVBQVUsS0FBSyxDQUFDLEtBQXNCO0lBQzFDLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDMUMsQ0FBQzs7Ozs7Ozs7QUFPRCxNQUFNLFVBQVUsS0FBSyxDQUFDLEtBQXNCO0lBQzFDLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLEtBQUssS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3hGLENBQUM7Ozs7Ozs7O0FBT0QsTUFBTSxVQUFVLFNBQVMsQ0FBQyxLQUFzQjtJQUM5QyxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN2QyxDQUFDOzs7Ozs7OztBQU9ELE1BQU0sVUFBVSxRQUFRLENBQUMsS0FBYTtJQUNwQyxPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvRCxDQUFDOzs7Ozs7OztBQU9ELE1BQU0sVUFBVSxRQUFRLENBQUMsS0FBYTtJQUNwQyxPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvRCxDQUFDOzs7Ozs7OztBQU9ELE1BQU0sVUFBVSxLQUFLLENBQUMsR0FBVztJQUMvQixPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzdCLENBQUM7Ozs7Ozs7O0FBT0QsTUFBTSxVQUFVLEtBQUssQ0FBQyxFQUFVO0lBQzlCLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDNUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBSRUdFWCA9IHtcbiAgbnVtOiAvXigoLT9cXGQrXFwuXFxkKyl8KC0/XFxkKyl8KC0/XFwuXFxkKykpJC8sXG4gIGlkQ2FyZDogLyheXFxkezE1fSQpfCheXFxkezE3fShbMC05XXxYKSQpL2ksXG4gIG1vYmlsZTogL14oMHxcXCs/ODZ8MTc5NTEpPygxM1swLTldfDE1WzAtOV18MTdbMDY3OF18MThbMC05XXwxNFs1N10pWzAtOV17OH0kLyxcbiAgdXJsOiAvKCgoXmh0dHBzPzooPzpcXC9cXC8pPykoPzpbLTs6Jj1cXCtcXCQsXFx3XStAKT9bQS1aYS16MC05Li1dKyg/OjpcXGQrKT98KD86d3d3LnxbLTs6Jj1cXCtcXCQsXFx3XStAKVtBLVphLXowLTkuLV0rKSgoPzpcXC9bXFwrfiVcXC8uXFx3LV9dKik/XFw/Pyg/OlstXFwrPSY7JUAuXFx3X10qKSM/KD86W1xcd10qKSk/KSQvLFxuICBpcDQ6IC8oPzoyNVswLTVdfDJbMC00XVxcXFxkfDFcXFxcZFxcXFxkfFsxLTldXFxcXGR8XFxcXGQpKD86XFxcXC4oPzoyNVswLTVdfDJbMC00XVxcXFxkfDFcXFxcZFxcXFxkfFsxLTldXFxcXGR8XFxcXGQpKXszfS8sXG59O1xuXG4vKipcbiAqIFdoZXRlciBpcyBudW1iZXJcbiAqXG4gKiDmmK/lkKbkuLrmlbDlrZdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIFJFR0VYLm51bS50ZXN0KHZhbHVlLnRvU3RyaW5nKCkpO1xufVxuXG4vKipcbiAqIFdoZXRlciBpcyBpbnRlZ2VyXG4gKlxuICog5piv5ZCm5Li65pW05pWwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0ludCh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiBpc051bSh2YWx1ZSkgJiYgcGFyc2VJbnQodmFsdWUudG9TdHJpbmcoKSwgMTApLnRvU3RyaW5nKCkgPT09IHZhbHVlLnRvU3RyaW5nKCk7XG59XG5cbi8qKlxuICogV2hldGVyIGlzIGRlY2ltYWxcbiAqXG4gKiDmmK/lkKbkuLrlsI/mlbDngrnmlbDlgLxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRGVjaW1hbCh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiBpc051bSh2YWx1ZSkgJiYgIWlzSW50KHZhbHVlKTtcbn1cblxuLyoqXG4gKiBXaGV0ZXIgaXMgUGVvcGxlJ3MgUmVwdWJsaWMgb2YgQ2hpbmEgaWRlbnRpdHkgY2FyZFxuICpcbiAqIOaYr+WQpuS4uuS4reWNjuS6uuawkeWFseWSjOWbveWxheawkei6q+S7veivgVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNJZENhcmQodmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiBSRUdFWC5pZENhcmQudGVzdCh2YWx1ZSk7XG59XG5cbi8qKlxuICogV2hldGVyIGlzIGNoaW5hIG1vYmlsZSAoQ2hpbmEpXG4gKlxuICog5piv5ZCm5Li65omL5py65Y+377yI5Lit5Zu977yJXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc01vYmlsZSh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIFJFR0VYLm1vYmlsZS50ZXN0KHZhbHVlKTtcbn1cblxuLyoqXG4gKiBXaGV0ZXIgaXMgdXJsIGFkZHJlc3NcbiAqXG4gKiDmmK/lkKZVUkzlnLDlnYBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVXJsKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBSRUdFWC51cmwudGVzdCh1cmwpO1xufVxuXG4vKipcbiAqIFdoZXRlciBpcyBJUHY0IGFkZHJlc3NcbiAqXG4gKiDmmK/lkKZJUDTlnLDlnYBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSXA0KGlwOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFJFR0VYLmlwNC50ZXN0KGlwKTtcbn1cbiJdfQ==