/** 是否为数字 */
export function isNum(value) {
    return /^((-?\d+\.\d+)|(-?\d+)|(-?\.\d+))$/.test(value.toString());
}
/** 是否为整数 */
export function isInt(value) {
    return isNum(value) && parseInt(value.toString(), 10).toString() === value.toString();
}
/** 是否为小数 */
export function isDecimal(value) {
    return isNum(value) && !isInt(value);
}
/** 是否为身份证 */
export function isIdCard(value) {
    return typeof value === 'string' && /(^\d{15}$)|(^\d{17}([0-9]|X)$)/i.test(value);
}
/** 是否为手机号 */
export function isMobile(value) {
    return typeof value === 'string' && /^(0|\+?86|17951)?(13[0-9]|15[0-9]|17[0678]|18[0-9]|14[57])[0-9]{8}$/.test(value);
}
/** 是否URL地址 */
export function isUrl(url) {
    return /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/.test(url);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL3NyYy92YWxpZGF0ZS92YWxpZGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZO0FBQ1osTUFBTSxVQUFVLEtBQUssQ0FBQyxLQUFzQjtJQUMxQyxPQUFPLG9DQUFvQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUNyRSxDQUFDO0FBRUQsWUFBWTtBQUNaLE1BQU0sVUFBVSxLQUFLLENBQUMsS0FBc0I7SUFDMUMsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDeEYsQ0FBQztBQUVELFlBQVk7QUFDWixNQUFNLFVBQVUsU0FBUyxDQUFDLEtBQXNCO0lBQzlDLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7QUFFRCxhQUFhO0FBQ2IsTUFBTSxVQUFVLFFBQVEsQ0FBQyxLQUFhO0lBQ3BDLE9BQU8sT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLGlDQUFpQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwRixDQUFDO0FBRUQsYUFBYTtBQUNiLE1BQU0sVUFBVSxRQUFRLENBQUMsS0FBYTtJQUNwQyxPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxxRUFBcUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDeEgsQ0FBQztBQUVELGNBQWM7QUFDZCxNQUFNLFVBQVUsS0FBSyxDQUFDLEdBQVc7SUFDL0IsT0FBTyx1S0FBdUssQ0FBQyxJQUFJLENBQ2pMLEdBQUcsQ0FDSixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiDmmK/lkKbkuLrmlbDlrZcgKi9cbmV4cG9ydCBmdW5jdGlvbiBpc051bSh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiAvXigoLT9cXGQrXFwuXFxkKyl8KC0/XFxkKyl8KC0/XFwuXFxkKykpJC8udGVzdCh2YWx1ZS50b1N0cmluZygpKTtcbn1cblxuLyoqIOaYr+WQpuS4uuaVtOaVsCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSW50KHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGlzTnVtKHZhbHVlKSAmJiBwYXJzZUludCh2YWx1ZS50b1N0cmluZygpLCAxMCkudG9TdHJpbmcoKSA9PT0gdmFsdWUudG9TdHJpbmcoKTtcbn1cblxuLyoqIOaYr+WQpuS4uuWwj+aVsCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRGVjaW1hbCh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiBpc051bSh2YWx1ZSkgJiYgIWlzSW50KHZhbHVlKTtcbn1cblxuLyoqIOaYr+WQpuS4uui6q+S7veivgSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSWRDYXJkKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgLyheXFxkezE1fSQpfCheXFxkezE3fShbMC05XXxYKSQpL2kudGVzdCh2YWx1ZSk7XG59XG5cbi8qKiDmmK/lkKbkuLrmiYvmnLrlj7cgKi9cbmV4cG9ydCBmdW5jdGlvbiBpc01vYmlsZSh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIC9eKDB8XFwrPzg2fDE3OTUxKT8oMTNbMC05XXwxNVswLTldfDE3WzA2NzhdfDE4WzAtOV18MTRbNTddKVswLTldezh9JC8udGVzdCh2YWx1ZSk7XG59XG5cbi8qKiDmmK/lkKZVUkzlnLDlnYAgKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1VybCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gLygoKF5odHRwcz86KD86XFwvXFwvKT8pKD86Wy07OiY9XFwrXFwkLFxcd10rQCk/W0EtWmEtejAtOS4tXSsoPzo6XFxkKyk/fCg/Ond3dy58Wy07OiY9XFwrXFwkLFxcd10rQClbQS1aYS16MC05Li1dKykoKD86XFwvW1xcK34lXFwvLlxcdy1fXSopP1xcPz8oPzpbLVxcKz0mOyVALlxcd19dKikjPyg/OltcXHddKikpPykkLy50ZXN0KFxuICAgIHVybCxcbiAgKTtcbn1cbiJdfQ==