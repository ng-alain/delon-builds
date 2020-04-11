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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdXRpbC8iLCJzb3VyY2VzIjpbInNyYy92YWxpZGF0ZS92YWxpZGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsTUFBTSxVQUFVLEtBQUssQ0FBQyxLQUFzQjtJQUMxQyxPQUFPLG9DQUFvQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUNyRSxDQUFDOzs7Ozs7QUFHRCxNQUFNLFVBQVUsS0FBSyxDQUFDLEtBQXNCO0lBQzFDLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLEtBQUssS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3hGLENBQUM7Ozs7OztBQUdELE1BQU0sVUFBVSxTQUFTLENBQUMsS0FBc0I7SUFDOUMsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdkMsQ0FBQzs7Ozs7O0FBR0QsTUFBTSxVQUFVLFFBQVEsQ0FBQyxLQUFhO0lBQ3BDLE9BQU8sT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLGlDQUFpQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwRixDQUFDOzs7Ozs7QUFHRCxNQUFNLFVBQVUsUUFBUSxDQUFDLEtBQWE7SUFDcEMsT0FBTyxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUkscUVBQXFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3hILENBQUM7Ozs7OztBQUdELE1BQU0sVUFBVSxLQUFLLENBQUMsR0FBVztJQUMvQixPQUFPLHVLQUF1SyxDQUFDLElBQUksQ0FDakwsR0FBRyxDQUNKLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIOaYr+WQpuS4uuaVsOWtlyAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIC9eKCgtP1xcZCtcXC5cXGQrKXwoLT9cXGQrKXwoLT9cXC5cXGQrKSkkLy50ZXN0KHZhbHVlLnRvU3RyaW5nKCkpO1xufVxuXG4vKiog5piv5ZCm5Li65pW05pWwICovXG5leHBvcnQgZnVuY3Rpb24gaXNJbnQodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gaXNOdW0odmFsdWUpICYmIHBhcnNlSW50KHZhbHVlLnRvU3RyaW5nKCksIDEwKS50b1N0cmluZygpID09PSB2YWx1ZS50b1N0cmluZygpO1xufVxuXG4vKiog5piv5ZCm5Li65bCP5pWwICovXG5leHBvcnQgZnVuY3Rpb24gaXNEZWNpbWFsKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGlzTnVtKHZhbHVlKSAmJiAhaXNJbnQodmFsdWUpO1xufVxuXG4vKiog5piv5ZCm5Li66Lqr5Lu96K+BICovXG5leHBvcnQgZnVuY3Rpb24gaXNJZENhcmQodmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAvKF5cXGR7MTV9JCl8KF5cXGR7MTd9KFswLTldfFgpJCkvaS50ZXN0KHZhbHVlKTtcbn1cblxuLyoqIOaYr+WQpuS4uuaJi+acuuWPtyAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTW9iaWxlKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgL14oMHxcXCs/ODZ8MTc5NTEpPygxM1swLTldfDE1WzAtOV18MTdbMDY3OF18MThbMC05XXwxNFs1N10pWzAtOV17OH0kLy50ZXN0KHZhbHVlKTtcbn1cblxuLyoqIOaYr+WQplVSTOWcsOWdgCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVXJsKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiAvKCgoXmh0dHBzPzooPzpcXC9cXC8pPykoPzpbLTs6Jj1cXCtcXCQsXFx3XStAKT9bQS1aYS16MC05Li1dKyg/OjpcXGQrKT98KD86d3d3LnxbLTs6Jj1cXCtcXCQsXFx3XStAKVtBLVphLXowLTkuLV0rKSgoPzpcXC9bXFwrfiVcXC8uXFx3LV9dKik/XFw/Pyg/OlstXFwrPSY7JUAuXFx3X10qKSM/KD86W1xcd10qKSk/KSQvLnRlc3QoXG4gICAgdXJsLFxuICApO1xufVxuIl19