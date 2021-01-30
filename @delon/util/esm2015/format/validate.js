/**
 * @fileoverview added by tsickle
 * Generated from: validate.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const REGEX_STR = {
    num: `((-?\\d+\\.\\d+)|(-?\\d+)|(-?\\.\\d+))`,
    idCard: `(^\\d{15}$)|(^\\d{17}(?:[0-9]|X)$)`,
    mobile: `(0|\\+?86|17951)?(13[0-9]|15[0-9]|17[0678]|18[0-9]|14[57])[0-9]{8}`,
    url: `(((^https?:(?:\/\/)?)(?:[-;:&=\\+\\$,\\w]+@)?[A-Za-z0-9.-]+(?::\\d+)?|(?:www.|[-;:&=\\+\\$,\\w]+@)[A-Za-z0-9.-]+)((?:\/[\\+~%\\/.\\w-_]*)?\\??(?:[-\\+=&;%@.\\w_]*)#?(?:[\\w]*))?)`,
    ip: `(?:^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$)|(?:^(?:(?:[a-fA-F\\d]{1,4}:){7}(?:[a-fA-F\\d]{1,4}|:)|(?:[a-fA-F\\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|:[a-fA-F\\d]{1,4}|:)|(?:[a-fA-F\\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,2}|:)|(?:[a-fA-F\\d]{1,4}:){4}(?:(?::[a-fA-F\\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,3}|:)|(?:[a-fA-F\\d]{1,4}:){3}(?:(?::[a-fA-F\\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,4}|:)|(?:[a-fA-F\\d]{1,4}:){2}(?:(?::[a-fA-F\\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,5}|:)|(?:[a-fA-F\\d]{1,4}:){1}(?:(?::[a-fA-F\\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,6}|:)|(?::(?:(?::[a-fA-F\\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,7}|:)))(?:%[0-9a-zA-Z]{1,})?$)`,
    color: `(?:#|0x)(?:[a-f0-9]{3}|[a-f0-9]{6})\\b|(?:rgb|hsl)a?\\([^\\)]*\\)`,
    chinese: `[\u4e00-\u9fa5]+`,
};
/**
 * @param {?} str
 * @param {?=} flags
 * @return {?}
 */
function genRegex(str, flags) {
    return new RegExp(`^${str}$`, flags);
}
/** @type {?} */
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
/**
 * Wheter is chinese
 *
 * 是否中文
 * @param {?} value
 * @return {?}
 */
export function isChinese(value) {
    return REGEX.chinese.test(value);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL2Zvcm1hdC92YWxpZGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxNQUFNLE9BQU8sU0FBUyxHQUFHO0lBQ3ZCLEdBQUcsRUFBRSx3Q0FBd0M7SUFDN0MsTUFBTSxFQUFFLG9DQUFvQztJQUM1QyxNQUFNLEVBQUUsb0VBQW9FO0lBQzVFLEdBQUcsRUFBRSxvTEFBb0w7SUFDekwsRUFBRSxFQUFFLHcwQ0FBdzBDO0lBQzUwQyxLQUFLLEVBQUUsbUVBQW1FO0lBQzFFLE9BQU8sRUFBRSxrQkFBa0I7Q0FDNUI7Ozs7OztBQUVELFNBQVMsUUFBUSxDQUFDLEdBQVcsRUFBRSxLQUFjO0lBQzNDLE9BQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUN2QyxDQUFDOztBQUVELE1BQU0sT0FBTyxLQUFLLEdBQUc7SUFDbkIsR0FBRyxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO0lBQzVCLE1BQU0sRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUM7SUFDdkMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO0lBQ2xDLEdBQUcsRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztJQUM1QixFQUFFLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7SUFDMUIsS0FBSyxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO0lBQ2hDLE9BQU8sRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztDQUNyQzs7Ozs7Ozs7QUFPRCxNQUFNLFVBQVUsS0FBSyxDQUFDLEtBQXNCO0lBQzFDLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDMUMsQ0FBQzs7Ozs7Ozs7QUFPRCxNQUFNLFVBQVUsS0FBSyxDQUFDLEtBQXNCO0lBQzFDLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLEtBQUssS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3hGLENBQUM7Ozs7Ozs7O0FBT0QsTUFBTSxVQUFVLFNBQVMsQ0FBQyxLQUFzQjtJQUM5QyxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN2QyxDQUFDOzs7Ozs7OztBQU9ELE1BQU0sVUFBVSxRQUFRLENBQUMsS0FBYTtJQUNwQyxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2xDLENBQUM7Ozs7Ozs7O0FBT0QsTUFBTSxVQUFVLFFBQVEsQ0FBQyxLQUFhO0lBQ3BDLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbEMsQ0FBQzs7Ozs7Ozs7QUFPRCxNQUFNLFVBQVUsS0FBSyxDQUFDLEdBQVc7SUFDL0IsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM3QixDQUFDOzs7Ozs7OztBQU9ELE1BQU0sVUFBVSxJQUFJLENBQUMsRUFBVTtJQUM3QixPQUFPLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzNCLENBQUM7Ozs7Ozs7O0FBT0QsTUFBTSxVQUFVLE9BQU8sQ0FBQyxLQUFhO0lBQ25DLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDakMsQ0FBQzs7Ozs7Ozs7QUFPRCxNQUFNLFVBQVUsU0FBUyxDQUFDLEtBQWE7SUFDckMsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFJFR0VYX1NUUiA9IHtcbiAgbnVtOiBgKCgtP1xcXFxkK1xcXFwuXFxcXGQrKXwoLT9cXFxcZCspfCgtP1xcXFwuXFxcXGQrKSlgLFxuICBpZENhcmQ6IGAoXlxcXFxkezE1fSQpfCheXFxcXGR7MTd9KD86WzAtOV18WCkkKWAsXG4gIG1vYmlsZTogYCgwfFxcXFwrPzg2fDE3OTUxKT8oMTNbMC05XXwxNVswLTldfDE3WzA2NzhdfDE4WzAtOV18MTRbNTddKVswLTldezh9YCxcbiAgdXJsOiBgKCgoXmh0dHBzPzooPzpcXC9cXC8pPykoPzpbLTs6Jj1cXFxcK1xcXFwkLFxcXFx3XStAKT9bQS1aYS16MC05Li1dKyg/OjpcXFxcZCspP3woPzp3d3cufFstOzomPVxcXFwrXFxcXCQsXFxcXHddK0ApW0EtWmEtejAtOS4tXSspKCg/OlxcL1tcXFxcK34lXFxcXC8uXFxcXHctX10qKT9cXFxcPz8oPzpbLVxcXFwrPSY7JUAuXFxcXHdfXSopIz8oPzpbXFxcXHddKikpPylgLFxuICBpcDogYCg/Ol4oPzoyNVswLTVdfDJbMC00XVxcXFxkfDFcXFxcZFxcXFxkfFsxLTldXFxcXGR8XFxcXGQpKD86XFxcXC4oPzoyNVswLTVdfDJbMC00XVxcXFxkfDFcXFxcZFxcXFxkfFsxLTldXFxcXGR8XFxcXGQpKXszfSQpfCg/Ol4oPzooPzpbYS1mQS1GXFxcXGRdezEsNH06KXs3fSg/OlthLWZBLUZcXFxcZF17MSw0fXw6KXwoPzpbYS1mQS1GXFxcXGRdezEsNH06KXs2fSg/Oig/OjI1WzAtNV18MlswLTRdXFxcXGR8MVxcXFxkXFxcXGR8WzEtOV1cXFxcZHxcXFxcZCkoPzpcXFxcLig/OjI1WzAtNV18MlswLTRdXFxcXGR8MVxcXFxkXFxcXGR8WzEtOV1cXFxcZHxcXFxcZCkpezN9fDpbYS1mQS1GXFxcXGRdezEsNH18Oil8KD86W2EtZkEtRlxcXFxkXXsxLDR9Oil7NX0oPzo6KD86MjVbMC01XXwyWzAtNF1cXFxcZHwxXFxcXGRcXFxcZHxbMS05XVxcXFxkfFxcXFxkKSg/OlxcXFwuKD86MjVbMC01XXwyWzAtNF1cXFxcZHwxXFxcXGRcXFxcZHxbMS05XVxcXFxkfFxcXFxkKSl7M318KD86OlthLWZBLUZcXFxcZF17MSw0fSl7MSwyfXw6KXwoPzpbYS1mQS1GXFxcXGRdezEsNH06KXs0fSg/Oig/OjpbYS1mQS1GXFxcXGRdezEsNH0pezAsMX06KD86MjVbMC01XXwyWzAtNF1cXFxcZHwxXFxcXGRcXFxcZHxbMS05XVxcXFxkfFxcXFxkKSg/OlxcXFwuKD86MjVbMC01XXwyWzAtNF1cXFxcZHwxXFxcXGRcXFxcZHxbMS05XVxcXFxkfFxcXFxkKSl7M318KD86OlthLWZBLUZcXFxcZF17MSw0fSl7MSwzfXw6KXwoPzpbYS1mQS1GXFxcXGRdezEsNH06KXszfSg/Oig/OjpbYS1mQS1GXFxcXGRdezEsNH0pezAsMn06KD86MjVbMC01XXwyWzAtNF1cXFxcZHwxXFxcXGRcXFxcZHxbMS05XVxcXFxkfFxcXFxkKSg/OlxcXFwuKD86MjVbMC01XXwyWzAtNF1cXFxcZHwxXFxcXGRcXFxcZHxbMS05XVxcXFxkfFxcXFxkKSl7M318KD86OlthLWZBLUZcXFxcZF17MSw0fSl7MSw0fXw6KXwoPzpbYS1mQS1GXFxcXGRdezEsNH06KXsyfSg/Oig/OjpbYS1mQS1GXFxcXGRdezEsNH0pezAsM306KD86MjVbMC01XXwyWzAtNF1cXFxcZHwxXFxcXGRcXFxcZHxbMS05XVxcXFxkfFxcXFxkKSg/OlxcXFwuKD86MjVbMC01XXwyWzAtNF1cXFxcZHwxXFxcXGRcXFxcZHxbMS05XVxcXFxkfFxcXFxkKSl7M318KD86OlthLWZBLUZcXFxcZF17MSw0fSl7MSw1fXw6KXwoPzpbYS1mQS1GXFxcXGRdezEsNH06KXsxfSg/Oig/OjpbYS1mQS1GXFxcXGRdezEsNH0pezAsNH06KD86MjVbMC01XXwyWzAtNF1cXFxcZHwxXFxcXGRcXFxcZHxbMS05XVxcXFxkfFxcXFxkKSg/OlxcXFwuKD86MjVbMC01XXwyWzAtNF1cXFxcZHwxXFxcXGRcXFxcZHxbMS05XVxcXFxkfFxcXFxkKSl7M318KD86OlthLWZBLUZcXFxcZF17MSw0fSl7MSw2fXw6KXwoPzo6KD86KD86OlthLWZBLUZcXFxcZF17MSw0fSl7MCw1fTooPzoyNVswLTVdfDJbMC00XVxcXFxkfDFcXFxcZFxcXFxkfFsxLTldXFxcXGR8XFxcXGQpKD86XFxcXC4oPzoyNVswLTVdfDJbMC00XVxcXFxkfDFcXFxcZFxcXFxkfFsxLTldXFxcXGR8XFxcXGQpKXszfXwoPzo6W2EtZkEtRlxcXFxkXXsxLDR9KXsxLDd9fDopKSkoPzolWzAtOWEtekEtWl17MSx9KT8kKWAsXG4gIGNvbG9yOiBgKD86I3wweCkoPzpbYS1mMC05XXszfXxbYS1mMC05XXs2fSlcXFxcYnwoPzpyZ2J8aHNsKWE/XFxcXChbXlxcXFwpXSpcXFxcKWAsXG4gIGNoaW5lc2U6IGBbXFx1NGUwMC1cXHU5ZmE1XStgLFxufTtcblxuZnVuY3Rpb24gZ2VuUmVnZXgoc3RyOiBzdHJpbmcsIGZsYWdzPzogc3RyaW5nKTogUmVnRXhwIHtcbiAgcmV0dXJuIG5ldyBSZWdFeHAoYF4ke3N0cn0kYCwgZmxhZ3MpO1xufVxuXG5leHBvcnQgY29uc3QgUkVHRVggPSB7XG4gIG51bTogZ2VuUmVnZXgoUkVHRVhfU1RSLm51bSksXG4gIGlkQ2FyZDogZ2VuUmVnZXgoUkVHRVhfU1RSLmlkQ2FyZCwgJ2knKSxcbiAgbW9iaWxlOiBnZW5SZWdleChSRUdFWF9TVFIubW9iaWxlKSxcbiAgdXJsOiBnZW5SZWdleChSRUdFWF9TVFIudXJsKSxcbiAgaXA6IGdlblJlZ2V4KFJFR0VYX1NUUi5pcCksXG4gIGNvbG9yOiBnZW5SZWdleChSRUdFWF9TVFIuY29sb3IpLFxuICBjaGluZXNlOiBnZW5SZWdleChSRUdFWF9TVFIuY2hpbmVzZSksXG59O1xuXG4vKipcbiAqIFdoZXRlciBpcyBudW1iZXJcbiAqXG4gKiDmmK/lkKbkuLrmlbDlrZdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIFJFR0VYLm51bS50ZXN0KHZhbHVlLnRvU3RyaW5nKCkpO1xufVxuXG4vKipcbiAqIFdoZXRlciBpcyBpbnRlZ2VyXG4gKlxuICog5piv5ZCm5Li65pW05pWwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0ludCh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiBpc051bSh2YWx1ZSkgJiYgcGFyc2VJbnQodmFsdWUudG9TdHJpbmcoKSwgMTApLnRvU3RyaW5nKCkgPT09IHZhbHVlLnRvU3RyaW5nKCk7XG59XG5cbi8qKlxuICogV2hldGVyIGlzIGRlY2ltYWxcbiAqXG4gKiDmmK/lkKbkuLrlsI/mlbDngrnmlbDlgLxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRGVjaW1hbCh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiBpc051bSh2YWx1ZSkgJiYgIWlzSW50KHZhbHVlKTtcbn1cblxuLyoqXG4gKiBXaGV0ZXIgaXMgUGVvcGxlJ3MgUmVwdWJsaWMgb2YgQ2hpbmEgaWRlbnRpdHkgY2FyZFxuICpcbiAqIOaYr+WQpuS4uuS4reWNjuS6uuawkeWFseWSjOWbveWxheawkei6q+S7veivgVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNJZENhcmQodmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gUkVHRVguaWRDYXJkLnRlc3QodmFsdWUpO1xufVxuXG4vKipcbiAqIFdoZXRlciBpcyBjaGluYSBtb2JpbGUgKENoaW5hKVxuICpcbiAqIOaYr+WQpuS4uuaJi+acuuWPt++8iOS4reWbve+8iVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNNb2JpbGUodmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gUkVHRVgubW9iaWxlLnRlc3QodmFsdWUpO1xufVxuXG4vKipcbiAqIFdoZXRlciBpcyB1cmwgYWRkcmVzc1xuICpcbiAqIOaYr+WQplVSTOWcsOWdgFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNVcmwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFJFR0VYLnVybC50ZXN0KHVybCk7XG59XG5cbi8qKlxuICogV2hldGVyIGlzIElQdjQgYWRkcmVzcyAoU3VwcG9ydCB2NCwgdjYpXG4gKlxuICog5piv5ZCmSVA05Zyw5Z2A77yI5pSv5oyBdjTjgIF2Nu+8iVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNJcChpcDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBSRUdFWC5pcC50ZXN0KGlwKTtcbn1cblxuLyoqXG4gKiBXaGV0ZXIgaXMgY29sb3JcbiAqXG4gKiDmmK/lkKbpopzoibLku6PnoIHlgLxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQ29sb3IoY29sb3I6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gUkVHRVguY29sb3IudGVzdChjb2xvcik7XG59XG5cbi8qKlxuICogV2hldGVyIGlzIGNoaW5lc2VcbiAqXG4gKiDmmK/lkKbkuK3mlodcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQ2hpbmVzZSh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBSRUdFWC5jaGluZXNlLnRlc3QodmFsdWUpO1xufVxuIl19