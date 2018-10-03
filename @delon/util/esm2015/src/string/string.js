/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { deepGet } from '../other/other';
/**
 * 字符串格式化
 * ```
 * format('this is ${name}', { name: 'asdf' })
 * // output: this is asdf
 * format('this is ${user.name}', { user: { name: 'asdf' } }, true)
 * // output: this is asdf
 * ```
 * @param {?} str
 * @param {?} obj
 * @param {?=} needDeepGet
 * @return {?}
 */
export function format(str, obj, needDeepGet = false) {
    return (str || '').replace(/\${([^}]+)}/g, (work, key) => needDeepGet
        ? deepGet(obj, key.split('.'), '')
        : (obj || {})[key] || '');
}
/**
 * 转化成RMB元字符串
 * @param {?} value
 * @param {?=} digits 当数字类型时，允许指定小数点后数字的个数，默认2位小数
 * @return {?}
 */
export function yuan(value, digits = 2) {
    if (typeof value === 'number')
        value = value.toFixed(digits);
    return `&yen ${value}`;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3V0aWwvIiwic291cmNlcyI6WyJzcmMvc3RyaW5nL3N0cmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7OztBQVd6QyxNQUFNLGlCQUFpQixHQUFXLEVBQUUsR0FBTyxFQUFFLFdBQVcsR0FBRyxLQUFLO0lBQzlELE9BQU8sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUN4QixjQUFjLEVBQ2QsQ0FBQyxJQUFZLEVBQUUsR0FBVyxFQUFFLEVBQUUsQ0FDNUIsV0FBVztRQUNULENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQzdCLENBQUM7Q0FDSDs7Ozs7OztBQU1ELE1BQU0sZUFBZSxLQUFVLEVBQUUsU0FBaUIsQ0FBQztJQUNqRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVE7UUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3RCxPQUFPLFFBQVEsS0FBSyxFQUFFLENBQUM7Q0FDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWVwR2V0IH0gZnJvbSAnLi4vb3RoZXIvb3RoZXInO1xuXG4vKipcbiAqIOWtl+espuS4suagvOW8j+WMllxuICogYGBgXG4gKiBmb3JtYXQoJ3RoaXMgaXMgJHtuYW1lfScsIHsgbmFtZTogJ2FzZGYnIH0pXG4gKiAvLyBvdXRwdXQ6IHRoaXMgaXMgYXNkZlxuICogZm9ybWF0KCd0aGlzIGlzICR7dXNlci5uYW1lfScsIHsgdXNlcjogeyBuYW1lOiAnYXNkZicgfSB9LCB0cnVlKVxuICogLy8gb3V0cHV0OiB0aGlzIGlzIGFzZGZcbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KHN0cjogc3RyaW5nLCBvYmo6IHt9LCBuZWVkRGVlcEdldCA9IGZhbHNlKTogc3RyaW5nIHtcbiAgcmV0dXJuIChzdHIgfHwgJycpLnJlcGxhY2UoXG4gICAgL1xcJHsoW159XSspfS9nLFxuICAgICh3b3JrOiBzdHJpbmcsIGtleTogc3RyaW5nKSA9PlxuICAgICAgbmVlZERlZXBHZXRcbiAgICAgICAgPyBkZWVwR2V0KG9iaiwga2V5LnNwbGl0KCcuJyksICcnKVxuICAgICAgICA6IChvYmogfHwge30pW2tleV0gfHwgJycsXG4gICk7XG59XG5cbi8qKlxuICog6L2s5YyW5oiQUk1C5YWD5a2X56ym5LiyXG4gKiBAcGFyYW0gZGlnaXRzIOW9k+aVsOWtl+exu+Wei+aXtu+8jOWFgeiuuOaMh+WumuWwj+aVsOeCueWQjuaVsOWtl+eahOS4quaVsO+8jOm7mOiupDLkvY3lsI/mlbBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHl1YW4odmFsdWU6IGFueSwgZGlnaXRzOiBudW1iZXIgPSAyKTogc3RyaW5nIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHZhbHVlID0gdmFsdWUudG9GaXhlZChkaWdpdHMpO1xuICByZXR1cm4gYCZ5ZW4gJHt2YWx1ZX1gO1xufVxuIl19