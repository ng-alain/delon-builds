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
    ip: /(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$)|(?:^(?:(?:[a-fA-F\d]{1,4}:){7}(?:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,2}|:)|(?:[a-fA-F\d]{1,4}:){4}(?:(?::[a-fA-F\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,3}|:)|(?:[a-fA-F\d]{1,4}:){3}(?:(?::[a-fA-F\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,4}|:)|(?:[a-fA-F\d]{1,4}:){2}(?:(?::[a-fA-F\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,5}|:)|(?:[a-fA-F\d]{1,4}:){1}(?:(?::[a-fA-F\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,6}|:)|(?::(?:(?::[a-fA-F\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,7}|:)))(?:%[0-9a-zA-Z]{1,})?$)/,
    color: /^(?:#|0x)(?:[a-f0-9]{3}|[a-f0-9]{6})\b|(?:rgb|hsl)a?\([^\)]*\)$/,
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
    return REGEX.idCard.test(value);
}
/**
 * Wheter is china mobile (China)
 *
 * 是否为手机号（中国）
 * @param {?} value
 * @return {?}
 */
export function isMobile(value) {
    return REGEX.mobile.test(value);
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
 * Wheter is IPv4 address (Support v4, v6)
 *
 * 是否IP4地址（支持v4、v6）
 * @param {?} ip
 * @return {?}
 */
export function isIp(ip) {
    return REGEX.ip.test(ip);
}
/**
 * Wheter is color
 *
 * 是否颜色代码值
 * @param {?} color
 * @return {?}
 */
export function isColor(color) {
    return REGEX.color.test(color);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL2Zvcm1hdC92YWxpZGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxNQUFNLE9BQU8sS0FBSyxHQUFHO0lBQ25CLEdBQUcsRUFBRSxvQ0FBb0M7SUFDekMsTUFBTSxFQUFFLGlDQUFpQztJQUN6QyxNQUFNLEVBQUUscUVBQXFFO0lBQzdFLEdBQUcsRUFBRSx1S0FBdUs7SUFDNUssRUFBRSxFQUFFLDR0Q0FBNHRDO0lBQ2h1QyxLQUFLLEVBQUUsaUVBQWlFO0NBQ3pFOzs7Ozs7OztBQU9ELE1BQU0sVUFBVSxLQUFLLENBQUMsS0FBc0I7SUFDMUMsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUMxQyxDQUFDOzs7Ozs7OztBQU9ELE1BQU0sVUFBVSxLQUFLLENBQUMsS0FBc0I7SUFDMUMsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDeEYsQ0FBQzs7Ozs7Ozs7QUFPRCxNQUFNLFVBQVUsU0FBUyxDQUFDLEtBQXNCO0lBQzlDLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7Ozs7Ozs7O0FBT0QsTUFBTSxVQUFVLFFBQVEsQ0FBQyxLQUFhO0lBQ3BDLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbEMsQ0FBQzs7Ozs7Ozs7QUFPRCxNQUFNLFVBQVUsUUFBUSxDQUFDLEtBQWE7SUFDcEMsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNsQyxDQUFDOzs7Ozs7OztBQU9ELE1BQU0sVUFBVSxLQUFLLENBQUMsR0FBVztJQUMvQixPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzdCLENBQUM7Ozs7Ozs7O0FBT0QsTUFBTSxVQUFVLElBQUksQ0FBQyxFQUFVO0lBQzdCLE9BQU8sS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDM0IsQ0FBQzs7Ozs7Ozs7QUFPRCxNQUFNLFVBQVUsT0FBTyxDQUFDLEtBQWE7SUFDbkMsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNqQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFJFR0VYID0ge1xuICBudW06IC9eKCgtP1xcZCtcXC5cXGQrKXwoLT9cXGQrKXwoLT9cXC5cXGQrKSkkLyxcbiAgaWRDYXJkOiAvKF5cXGR7MTV9JCl8KF5cXGR7MTd9KFswLTldfFgpJCkvaSxcbiAgbW9iaWxlOiAvXigwfFxcKz84NnwxNzk1MSk/KDEzWzAtOV18MTVbMC05XXwxN1swNjc4XXwxOFswLTldfDE0WzU3XSlbMC05XXs4fSQvLFxuICB1cmw6IC8oKCheaHR0cHM/Oig/OlxcL1xcLyk/KSg/OlstOzomPVxcK1xcJCxcXHddK0ApP1tBLVphLXowLTkuLV0rKD86OlxcZCspP3woPzp3d3cufFstOzomPVxcK1xcJCxcXHddK0ApW0EtWmEtejAtOS4tXSspKCg/OlxcL1tcXCt+JVxcLy5cXHctX10qKT9cXD8/KD86Wy1cXCs9JjslQC5cXHdfXSopIz8oPzpbXFx3XSopKT8pJC8sXG4gIGlwOiAvKD86Xig/OjI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV1cXGR8XFxkKSg/OlxcLig/OjI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV1cXGR8XFxkKSl7M30kKXwoPzpeKD86KD86W2EtZkEtRlxcZF17MSw0fTopezd9KD86W2EtZkEtRlxcZF17MSw0fXw6KXwoPzpbYS1mQS1GXFxkXXsxLDR9Oil7Nn0oPzooPzoyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldXFxkfFxcZCkoPzpcXC4oPzoyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldXFxkfFxcZCkpezN9fDpbYS1mQS1GXFxkXXsxLDR9fDopfCg/OlthLWZBLUZcXGRdezEsNH06KXs1fSg/OjooPzoyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldXFxkfFxcZCkoPzpcXC4oPzoyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldXFxkfFxcZCkpezN9fCg/OjpbYS1mQS1GXFxkXXsxLDR9KXsxLDJ9fDopfCg/OlthLWZBLUZcXGRdezEsNH06KXs0fSg/Oig/OjpbYS1mQS1GXFxkXXsxLDR9KXswLDF9Oig/OjI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV1cXGR8XFxkKSg/OlxcLig/OjI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV1cXGR8XFxkKSl7M318KD86OlthLWZBLUZcXGRdezEsNH0pezEsM318Oil8KD86W2EtZkEtRlxcZF17MSw0fTopezN9KD86KD86OlthLWZBLUZcXGRdezEsNH0pezAsMn06KD86MjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XVxcZHxcXGQpKD86XFwuKD86MjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XVxcZHxcXGQpKXszfXwoPzo6W2EtZkEtRlxcZF17MSw0fSl7MSw0fXw6KXwoPzpbYS1mQS1GXFxkXXsxLDR9Oil7Mn0oPzooPzo6W2EtZkEtRlxcZF17MSw0fSl7MCwzfTooPzoyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldXFxkfFxcZCkoPzpcXC4oPzoyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldXFxkfFxcZCkpezN9fCg/OjpbYS1mQS1GXFxkXXsxLDR9KXsxLDV9fDopfCg/OlthLWZBLUZcXGRdezEsNH06KXsxfSg/Oig/OjpbYS1mQS1GXFxkXXsxLDR9KXswLDR9Oig/OjI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV1cXGR8XFxkKSg/OlxcLig/OjI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV1cXGR8XFxkKSl7M318KD86OlthLWZBLUZcXGRdezEsNH0pezEsNn18Oil8KD86Oig/Oig/OjpbYS1mQS1GXFxkXXsxLDR9KXswLDV9Oig/OjI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV1cXGR8XFxkKSg/OlxcLig/OjI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV1cXGR8XFxkKSl7M318KD86OlthLWZBLUZcXGRdezEsNH0pezEsN318OikpKSg/OiVbMC05YS16QS1aXXsxLH0pPyQpLyxcbiAgY29sb3I6IC9eKD86I3wweCkoPzpbYS1mMC05XXszfXxbYS1mMC05XXs2fSlcXGJ8KD86cmdifGhzbClhP1xcKFteXFwpXSpcXCkkLyxcbn07XG5cbi8qKlxuICogV2hldGVyIGlzIG51bWJlclxuICpcbiAqIOaYr+WQpuS4uuaVsOWtl1xuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOdW0odmFsdWU6IHN0cmluZyB8IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gUkVHRVgubnVtLnRlc3QodmFsdWUudG9TdHJpbmcoKSk7XG59XG5cbi8qKlxuICogV2hldGVyIGlzIGludGVnZXJcbiAqXG4gKiDmmK/lkKbkuLrmlbTmlbBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSW50KHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGlzTnVtKHZhbHVlKSAmJiBwYXJzZUludCh2YWx1ZS50b1N0cmluZygpLCAxMCkudG9TdHJpbmcoKSA9PT0gdmFsdWUudG9TdHJpbmcoKTtcbn1cblxuLyoqXG4gKiBXaGV0ZXIgaXMgZGVjaW1hbFxuICpcbiAqIOaYr+WQpuS4uuWwj+aVsOeCueaVsOWAvFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNEZWNpbWFsKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGlzTnVtKHZhbHVlKSAmJiAhaXNJbnQodmFsdWUpO1xufVxuXG4vKipcbiAqIFdoZXRlciBpcyBQZW9wbGUncyBSZXB1YmxpYyBvZiBDaGluYSBpZGVudGl0eSBjYXJkXG4gKlxuICog5piv5ZCm5Li65Lit5Y2O5Lq65rCR5YWx5ZKM5Zu95bGF5rCR6Lqr5Lu96K+BXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0lkQ2FyZCh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBSRUdFWC5pZENhcmQudGVzdCh2YWx1ZSk7XG59XG5cbi8qKlxuICogV2hldGVyIGlzIGNoaW5hIG1vYmlsZSAoQ2hpbmEpXG4gKlxuICog5piv5ZCm5Li65omL5py65Y+377yI5Lit5Zu977yJXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc01vYmlsZSh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBSRUdFWC5tb2JpbGUudGVzdCh2YWx1ZSk7XG59XG5cbi8qKlxuICogV2hldGVyIGlzIHVybCBhZGRyZXNzXG4gKlxuICog5piv5ZCmVVJM5Zyw5Z2AXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1VybCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gUkVHRVgudXJsLnRlc3QodXJsKTtcbn1cblxuLyoqXG4gKiBXaGV0ZXIgaXMgSVB2NCBhZGRyZXNzIChTdXBwb3J0IHY0LCB2NilcbiAqXG4gKiDmmK/lkKZJUDTlnLDlnYDvvIjmlK/mjIF2NOOAgXY277yJXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0lwKGlwOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFJFR0VYLmlwLnRlc3QoaXApO1xufVxuXG4vKipcbiAqIFdoZXRlciBpcyBjb2xvclxuICpcbiAqIOaYr+WQpuminOiJsuS7o+eggeWAvFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNDb2xvcihjb2xvcjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBSRUdFWC5jb2xvci50ZXN0KGNvbG9yKTtcbn1cbiJdfQ==