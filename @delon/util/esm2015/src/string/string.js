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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3V0aWwvIiwic291cmNlcyI6WyJzcmMvc3RyaW5nL3N0cmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7OztBQVd6QyxNQUFNLGlCQUFpQixHQUFXLEVBQUUsR0FBTyxFQUFFLFdBQVcsR0FBRyxLQUFLO0lBQzlELE9BQU8sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUN4QixjQUFjLEVBQ2QsQ0FBQyxJQUFZLEVBQUUsR0FBVyxFQUFFLEVBQUUsQ0FDNUIsV0FBVztRQUNULENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQzdCLENBQUM7Q0FDSDs7Ozs7OztBQU1ELE1BQU0sZUFBZSxLQUFVLEVBQUUsU0FBaUIsQ0FBQztJQUNqRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVE7UUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3RCxPQUFPLFFBQVEsS0FBSyxFQUFFLENBQUM7Q0FDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWVwR2V0IH0gZnJvbSAnLi4vb3RoZXIvb3RoZXInO1xyXG5cclxuLyoqXHJcbiAqIOWtl+espuS4suagvOW8j+WMllxyXG4gKiBgYGBcclxuICogZm9ybWF0KCd0aGlzIGlzICR7bmFtZX0nLCB7IG5hbWU6ICdhc2RmJyB9KVxyXG4gKiAvLyBvdXRwdXQ6IHRoaXMgaXMgYXNkZlxyXG4gKiBmb3JtYXQoJ3RoaXMgaXMgJHt1c2VyLm5hbWV9JywgeyB1c2VyOiB7IG5hbWU6ICdhc2RmJyB9IH0sIHRydWUpXHJcbiAqIC8vIG91dHB1dDogdGhpcyBpcyBhc2RmXHJcbiAqIGBgYFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdChzdHI6IHN0cmluZywgb2JqOiB7fSwgbmVlZERlZXBHZXQgPSBmYWxzZSk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIChzdHIgfHwgJycpLnJlcGxhY2UoXHJcbiAgICAvXFwkeyhbXn1dKyl9L2csXHJcbiAgICAod29yazogc3RyaW5nLCBrZXk6IHN0cmluZykgPT5cclxuICAgICAgbmVlZERlZXBHZXRcclxuICAgICAgICA/IGRlZXBHZXQob2JqLCBrZXkuc3BsaXQoJy4nKSwgJycpXHJcbiAgICAgICAgOiAob2JqIHx8IHt9KVtrZXldIHx8ICcnLFxyXG4gICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDovazljJbmiJBSTULlhYPlrZfnrKbkuLJcclxuICogQHBhcmFtIGRpZ2l0cyDlvZPmlbDlrZfnsbvlnovml7bvvIzlhYHorrjmjIflrprlsI/mlbDngrnlkI7mlbDlrZfnmoTkuKrmlbDvvIzpu5jorqQy5L2N5bCP5pWwXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24geXVhbih2YWx1ZTogYW55LCBkaWdpdHM6IG51bWJlciA9IDIpOiBzdHJpbmcge1xyXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB2YWx1ZSA9IHZhbHVlLnRvRml4ZWQoZGlnaXRzKTtcclxuICByZXR1cm4gYCZ5ZW4gJHt2YWx1ZX1gO1xyXG59XHJcbiJdfQ==