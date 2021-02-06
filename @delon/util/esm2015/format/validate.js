export const REGEX_STR = {
    num: `((-?\\d+\\.\\d+)|(-?\\d+)|(-?\\.\\d+))`,
    idCard: `(^\\d{15}$)|(^\\d{17}(?:[0-9]|X)$)`,
    mobile: `(0|\\+?86|17951)?(13[0-9]|15[0-9]|17[0678]|18[0-9]|14[57])[0-9]{8}`,
    url: `(((^https?:(?:\/\/)?)(?:[-;:&=\\+\\$,\\w]+@)?[A-Za-z0-9.-]+(?::\\d+)?|(?:www.|[-;:&=\\+\\$,\\w]+@)[A-Za-z0-9.-]+)((?:\/[\\+~%\\/.\\w-_]*)?\\??(?:[-\\+=&;%@.\\w_]*)#?(?:[\\w]*))?)`,
    ip: `(?:^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$)|(?:^(?:(?:[a-fA-F\\d]{1,4}:){7}(?:[a-fA-F\\d]{1,4}|:)|(?:[a-fA-F\\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|:[a-fA-F\\d]{1,4}|:)|(?:[a-fA-F\\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,2}|:)|(?:[a-fA-F\\d]{1,4}:){4}(?:(?::[a-fA-F\\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,3}|:)|(?:[a-fA-F\\d]{1,4}:){3}(?:(?::[a-fA-F\\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,4}|:)|(?:[a-fA-F\\d]{1,4}:){2}(?:(?::[a-fA-F\\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,5}|:)|(?:[a-fA-F\\d]{1,4}:){1}(?:(?::[a-fA-F\\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,6}|:)|(?::(?:(?::[a-fA-F\\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,7}|:)))(?:%[0-9a-zA-Z]{1,})?$)`,
    color: `(?:#|0x)(?:[a-f0-9]{3}|[a-f0-9]{6})\\b|(?:rgb|hsl)a?\\([^\\)]*\\)`,
    chinese: `[\u4e00-\u9fa5]+`,
};
function genRegex(str, flags) {
    return new RegExp(`^${str}$`, flags);
}
export const REGEX = {
    num: genRegex(REGEX_STR.num),
    idCard: genRegex(REGEX_STR.idCard, 'i'),
    mobile: genRegex(REGEX_STR.mobile),
    url: genRegex(REGEX_STR.url),
    ip: genRegex(REGEX_STR.ip),
    color: genRegex(REGEX_STR.color),
    chinese: genRegex(REGEX_STR.chinese),
};
/**
 * Wheter is number
 *
 * 是否为数字
 */
export function isNum(value) {
    return REGEX.num.test(value.toString());
}
/**
 * Wheter is integer
 *
 * 是否为整数
 */
export function isInt(value) {
    return isNum(value) && parseInt(value.toString(), 10).toString() === value.toString();
}
/**
 * Wheter is decimal
 *
 * 是否为小数点数值
 */
export function isDecimal(value) {
    return isNum(value) && !isInt(value);
}
/**
 * Wheter is People's Republic of China identity card
 *
 * 是否为中华人民共和国居民身份证
 */
export function isIdCard(value) {
    return REGEX.idCard.test(value);
}
/**
 * Wheter is china mobile (China)
 *
 * 是否为手机号（中国）
 */
export function isMobile(value) {
    return REGEX.mobile.test(value);
}
/**
 * Wheter is url address
 *
 * 是否URL地址
 */
export function isUrl(url) {
    return REGEX.url.test(url);
}
/**
 * Wheter is IPv4 address (Support v4, v6)
 *
 * 是否IP4地址（支持v4、v6）
 */
export function isIp(ip) {
    return REGEX.ip.test(ip);
}
/**
 * Wheter is color
 *
 * 是否颜色代码值
 */
export function isColor(color) {
    return REGEX.color.test(color);
}
/**
 * Wheter is chinese
 *
 * 是否中文
 */
export function isChinese(value) {
    return REGEX.chinese.test(value);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL2Zvcm1hdC92YWxpZGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsTUFBTSxTQUFTLEdBQUc7SUFDdkIsR0FBRyxFQUFFLHdDQUF3QztJQUM3QyxNQUFNLEVBQUUsb0NBQW9DO0lBQzVDLE1BQU0sRUFBRSxvRUFBb0U7SUFDNUUsR0FBRyxFQUFFLG9MQUFvTDtJQUN6TCxFQUFFLEVBQUUsdzBDQUF3MEM7SUFDNTBDLEtBQUssRUFBRSxtRUFBbUU7SUFDMUUsT0FBTyxFQUFFLGtCQUFrQjtDQUM1QixDQUFDO0FBRUYsU0FBUyxRQUFRLENBQUMsR0FBVyxFQUFFLEtBQWM7SUFDM0MsT0FBTyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7QUFFRCxNQUFNLENBQUMsTUFBTSxLQUFLLEdBQUc7SUFDbkIsR0FBRyxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO0lBQzVCLE1BQU0sRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUM7SUFDdkMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO0lBQ2xDLEdBQUcsRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztJQUM1QixFQUFFLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7SUFDMUIsS0FBSyxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO0lBQ2hDLE9BQU8sRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztDQUNyQyxDQUFDO0FBRUY7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxLQUFLLENBQUMsS0FBc0I7SUFDMUMsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUMxQyxDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxLQUFLLENBQUMsS0FBc0I7SUFDMUMsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDeEYsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsU0FBUyxDQUFDLEtBQXNCO0lBQzlDLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLFFBQVEsQ0FBQyxLQUFhO0lBQ3BDLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbEMsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsUUFBUSxDQUFDLEtBQWE7SUFDcEMsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNsQyxDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxLQUFLLENBQUMsR0FBVztJQUMvQixPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzdCLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLElBQUksQ0FBQyxFQUFVO0lBQzdCLE9BQU8sS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDM0IsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsT0FBTyxDQUFDLEtBQWE7SUFDbkMsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxTQUFTLENBQUMsS0FBYTtJQUNyQyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgUkVHRVhfU1RSID0ge1xuICBudW06IGAoKC0/XFxcXGQrXFxcXC5cXFxcZCspfCgtP1xcXFxkKyl8KC0/XFxcXC5cXFxcZCspKWAsXG4gIGlkQ2FyZDogYCheXFxcXGR7MTV9JCl8KF5cXFxcZHsxN30oPzpbMC05XXxYKSQpYCxcbiAgbW9iaWxlOiBgKDB8XFxcXCs/ODZ8MTc5NTEpPygxM1swLTldfDE1WzAtOV18MTdbMDY3OF18MThbMC05XXwxNFs1N10pWzAtOV17OH1gLFxuICB1cmw6IGAoKCheaHR0cHM/Oig/OlxcL1xcLyk/KSg/OlstOzomPVxcXFwrXFxcXCQsXFxcXHddK0ApP1tBLVphLXowLTkuLV0rKD86OlxcXFxkKyk/fCg/Ond3dy58Wy07OiY9XFxcXCtcXFxcJCxcXFxcd10rQClbQS1aYS16MC05Li1dKykoKD86XFwvW1xcXFwrfiVcXFxcLy5cXFxcdy1fXSopP1xcXFw/Pyg/OlstXFxcXCs9JjslQC5cXFxcd19dKikjPyg/OltcXFxcd10qKSk/KWAsXG4gIGlwOiBgKD86Xig/OjI1WzAtNV18MlswLTRdXFxcXGR8MVxcXFxkXFxcXGR8WzEtOV1cXFxcZHxcXFxcZCkoPzpcXFxcLig/OjI1WzAtNV18MlswLTRdXFxcXGR8MVxcXFxkXFxcXGR8WzEtOV1cXFxcZHxcXFxcZCkpezN9JCl8KD86Xig/Oig/OlthLWZBLUZcXFxcZF17MSw0fTopezd9KD86W2EtZkEtRlxcXFxkXXsxLDR9fDopfCg/OlthLWZBLUZcXFxcZF17MSw0fTopezZ9KD86KD86MjVbMC01XXwyWzAtNF1cXFxcZHwxXFxcXGRcXFxcZHxbMS05XVxcXFxkfFxcXFxkKSg/OlxcXFwuKD86MjVbMC01XXwyWzAtNF1cXFxcZHwxXFxcXGRcXFxcZHxbMS05XVxcXFxkfFxcXFxkKSl7M318OlthLWZBLUZcXFxcZF17MSw0fXw6KXwoPzpbYS1mQS1GXFxcXGRdezEsNH06KXs1fSg/OjooPzoyNVswLTVdfDJbMC00XVxcXFxkfDFcXFxcZFxcXFxkfFsxLTldXFxcXGR8XFxcXGQpKD86XFxcXC4oPzoyNVswLTVdfDJbMC00XVxcXFxkfDFcXFxcZFxcXFxkfFsxLTldXFxcXGR8XFxcXGQpKXszfXwoPzo6W2EtZkEtRlxcXFxkXXsxLDR9KXsxLDJ9fDopfCg/OlthLWZBLUZcXFxcZF17MSw0fTopezR9KD86KD86OlthLWZBLUZcXFxcZF17MSw0fSl7MCwxfTooPzoyNVswLTVdfDJbMC00XVxcXFxkfDFcXFxcZFxcXFxkfFsxLTldXFxcXGR8XFxcXGQpKD86XFxcXC4oPzoyNVswLTVdfDJbMC00XVxcXFxkfDFcXFxcZFxcXFxkfFsxLTldXFxcXGR8XFxcXGQpKXszfXwoPzo6W2EtZkEtRlxcXFxkXXsxLDR9KXsxLDN9fDopfCg/OlthLWZBLUZcXFxcZF17MSw0fTopezN9KD86KD86OlthLWZBLUZcXFxcZF17MSw0fSl7MCwyfTooPzoyNVswLTVdfDJbMC00XVxcXFxkfDFcXFxcZFxcXFxkfFsxLTldXFxcXGR8XFxcXGQpKD86XFxcXC4oPzoyNVswLTVdfDJbMC00XVxcXFxkfDFcXFxcZFxcXFxkfFsxLTldXFxcXGR8XFxcXGQpKXszfXwoPzo6W2EtZkEtRlxcXFxkXXsxLDR9KXsxLDR9fDopfCg/OlthLWZBLUZcXFxcZF17MSw0fTopezJ9KD86KD86OlthLWZBLUZcXFxcZF17MSw0fSl7MCwzfTooPzoyNVswLTVdfDJbMC00XVxcXFxkfDFcXFxcZFxcXFxkfFsxLTldXFxcXGR8XFxcXGQpKD86XFxcXC4oPzoyNVswLTVdfDJbMC00XVxcXFxkfDFcXFxcZFxcXFxkfFsxLTldXFxcXGR8XFxcXGQpKXszfXwoPzo6W2EtZkEtRlxcXFxkXXsxLDR9KXsxLDV9fDopfCg/OlthLWZBLUZcXFxcZF17MSw0fTopezF9KD86KD86OlthLWZBLUZcXFxcZF17MSw0fSl7MCw0fTooPzoyNVswLTVdfDJbMC00XVxcXFxkfDFcXFxcZFxcXFxkfFsxLTldXFxcXGR8XFxcXGQpKD86XFxcXC4oPzoyNVswLTVdfDJbMC00XVxcXFxkfDFcXFxcZFxcXFxkfFsxLTldXFxcXGR8XFxcXGQpKXszfXwoPzo6W2EtZkEtRlxcXFxkXXsxLDR9KXsxLDZ9fDopfCg/OjooPzooPzo6W2EtZkEtRlxcXFxkXXsxLDR9KXswLDV9Oig/OjI1WzAtNV18MlswLTRdXFxcXGR8MVxcXFxkXFxcXGR8WzEtOV1cXFxcZHxcXFxcZCkoPzpcXFxcLig/OjI1WzAtNV18MlswLTRdXFxcXGR8MVxcXFxkXFxcXGR8WzEtOV1cXFxcZHxcXFxcZCkpezN9fCg/OjpbYS1mQS1GXFxcXGRdezEsNH0pezEsN318OikpKSg/OiVbMC05YS16QS1aXXsxLH0pPyQpYCxcbiAgY29sb3I6IGAoPzojfDB4KSg/OlthLWYwLTldezN9fFthLWYwLTldezZ9KVxcXFxifCg/OnJnYnxoc2wpYT9cXFxcKFteXFxcXCldKlxcXFwpYCxcbiAgY2hpbmVzZTogYFtcXHU0ZTAwLVxcdTlmYTVdK2AsXG59O1xuXG5mdW5jdGlvbiBnZW5SZWdleChzdHI6IHN0cmluZywgZmxhZ3M/OiBzdHJpbmcpOiBSZWdFeHAge1xuICByZXR1cm4gbmV3IFJlZ0V4cChgXiR7c3RyfSRgLCBmbGFncyk7XG59XG5cbmV4cG9ydCBjb25zdCBSRUdFWCA9IHtcbiAgbnVtOiBnZW5SZWdleChSRUdFWF9TVFIubnVtKSxcbiAgaWRDYXJkOiBnZW5SZWdleChSRUdFWF9TVFIuaWRDYXJkLCAnaScpLFxuICBtb2JpbGU6IGdlblJlZ2V4KFJFR0VYX1NUUi5tb2JpbGUpLFxuICB1cmw6IGdlblJlZ2V4KFJFR0VYX1NUUi51cmwpLFxuICBpcDogZ2VuUmVnZXgoUkVHRVhfU1RSLmlwKSxcbiAgY29sb3I6IGdlblJlZ2V4KFJFR0VYX1NUUi5jb2xvciksXG4gIGNoaW5lc2U6IGdlblJlZ2V4KFJFR0VYX1NUUi5jaGluZXNlKSxcbn07XG5cbi8qKlxuICogV2hldGVyIGlzIG51bWJlclxuICpcbiAqIOaYr+WQpuS4uuaVsOWtl1xuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOdW0odmFsdWU6IHN0cmluZyB8IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gUkVHRVgubnVtLnRlc3QodmFsdWUudG9TdHJpbmcoKSk7XG59XG5cbi8qKlxuICogV2hldGVyIGlzIGludGVnZXJcbiAqXG4gKiDmmK/lkKbkuLrmlbTmlbBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSW50KHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGlzTnVtKHZhbHVlKSAmJiBwYXJzZUludCh2YWx1ZS50b1N0cmluZygpLCAxMCkudG9TdHJpbmcoKSA9PT0gdmFsdWUudG9TdHJpbmcoKTtcbn1cblxuLyoqXG4gKiBXaGV0ZXIgaXMgZGVjaW1hbFxuICpcbiAqIOaYr+WQpuS4uuWwj+aVsOeCueaVsOWAvFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNEZWNpbWFsKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGlzTnVtKHZhbHVlKSAmJiAhaXNJbnQodmFsdWUpO1xufVxuXG4vKipcbiAqIFdoZXRlciBpcyBQZW9wbGUncyBSZXB1YmxpYyBvZiBDaGluYSBpZGVudGl0eSBjYXJkXG4gKlxuICog5piv5ZCm5Li65Lit5Y2O5Lq65rCR5YWx5ZKM5Zu95bGF5rCR6Lqr5Lu96K+BXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0lkQ2FyZCh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBSRUdFWC5pZENhcmQudGVzdCh2YWx1ZSk7XG59XG5cbi8qKlxuICogV2hldGVyIGlzIGNoaW5hIG1vYmlsZSAoQ2hpbmEpXG4gKlxuICog5piv5ZCm5Li65omL5py65Y+377yI5Lit5Zu977yJXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc01vYmlsZSh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBSRUdFWC5tb2JpbGUudGVzdCh2YWx1ZSk7XG59XG5cbi8qKlxuICogV2hldGVyIGlzIHVybCBhZGRyZXNzXG4gKlxuICog5piv5ZCmVVJM5Zyw5Z2AXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1VybCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gUkVHRVgudXJsLnRlc3QodXJsKTtcbn1cblxuLyoqXG4gKiBXaGV0ZXIgaXMgSVB2NCBhZGRyZXNzIChTdXBwb3J0IHY0LCB2NilcbiAqXG4gKiDmmK/lkKZJUDTlnLDlnYDvvIjmlK/mjIF2NOOAgXY277yJXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0lwKGlwOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFJFR0VYLmlwLnRlc3QoaXApO1xufVxuXG4vKipcbiAqIFdoZXRlciBpcyBjb2xvclxuICpcbiAqIOaYr+WQpuminOiJsuS7o+eggeWAvFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNDb2xvcihjb2xvcjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBSRUdFWC5jb2xvci50ZXN0KGNvbG9yKTtcbn1cblxuLyoqXG4gKiBXaGV0ZXIgaXMgY2hpbmVzZVxuICpcbiAqIOaYr+WQpuS4reaWh1xuICovXG5leHBvcnQgZnVuY3Rpb24gaXNDaGluZXNlKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFJFR0VYLmNoaW5lc2UudGVzdCh2YWx1ZSk7XG59XG4iXX0=