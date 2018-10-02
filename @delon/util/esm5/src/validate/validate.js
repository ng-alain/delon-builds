/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdXRpbC8iLCJzb3VyY2VzIjpbInNyYy92YWxpZGF0ZS92YWxpZGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxNQUFNLGdCQUFnQixLQUFzQjtJQUMxQyxPQUFPLG9DQUFvQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztDQUNwRTs7Ozs7O0FBR0QsTUFBTSxnQkFBZ0IsS0FBc0I7O0lBRTFDLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDO0NBQ2hFOzs7Ozs7QUFHRCxNQUFNLG9CQUFvQixLQUFzQjtJQUM5QyxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztDQUN0Qzs7Ozs7O0FBR0QsTUFBTSxtQkFBbUIsS0FBVTtJQUNqQyxPQUFPLENBQ0wsT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLGlDQUFpQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FDM0UsQ0FBQztDQUNIOzs7Ozs7QUFHRCxNQUFNLG1CQUFtQixLQUFVO0lBQ2pDLE9BQU8sQ0FDTCxPQUFPLEtBQUssS0FBSyxRQUFRO1FBQ3pCLHFFQUFxRSxDQUFDLElBQUksQ0FDeEUsS0FBSyxDQUNOLENBQ0YsQ0FBQztDQUNIIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIOaYr+WQpuS4uuaVsOWtlyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNOdW0odmFsdWU6IHN0cmluZyB8IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gIHJldHVybiAvXigoLT9cXGQrXFwuXFxkKyl8KC0/XFxkKyl8KC0/XFwuXFxkKykpJC8udGVzdCh2YWx1ZS50b1N0cmluZygpKTtcclxufVxyXG5cclxuLyoqIOaYr+WQpuS4uuaVtOaVsCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNJbnQodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0cmlwbGUtZXF1YWxzXHJcbiAgcmV0dXJuIGlzTnVtKHZhbHVlKSAmJiBwYXJzZUludCh2YWx1ZS50b1N0cmluZygpLCAxMCkgPT0gdmFsdWU7XHJcbn1cclxuXHJcbi8qKiDmmK/lkKbkuLrlsI/mlbAgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRGVjaW1hbCh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIGlzTnVtKHZhbHVlKSAmJiAhaXNJbnQodmFsdWUpO1xyXG59XHJcblxyXG4vKiog5piv5ZCm5Li66Lqr5Lu96K+BICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0lkQ2FyZCh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIChcclxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgLyheXFxkezE1fSQpfCheXFxkezE3fShbMC05XXxYKSQpL2kudGVzdCh2YWx1ZSlcclxuICApO1xyXG59XHJcblxyXG4vKiog5piv5ZCm5Li65omL5py65Y+3ICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc01vYmlsZSh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIChcclxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiZcclxuICAgIC9eKDB8XFwrPzg2fDE3OTUxKT8oMTNbMC05XXwxNVswLTldfDE3WzA2NzhdfDE4WzAtOV18MTRbNTddKVswLTldezh9JC8udGVzdChcclxuICAgICAgdmFsdWUsXHJcbiAgICApXHJcbiAgKTtcclxufVxyXG4iXX0=