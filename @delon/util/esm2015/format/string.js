/**
 * @fileoverview added by tsickle
 * Generated from: string.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { deepGet } from '@delon/util/other';
/**
 * String formatting
 *
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
    return (str || '').replace(/\${([^}]+)}/g, (/**
     * @param {?} _work
     * @param {?} key
     * @return {?}
     */
    (_work, key) => needDeepGet ? deepGet(obj, key.split('.'), '') : (obj || {})[key] || ''));
}
/**
 * Format mask
 *
 * 格式化掩码
 * ```ts
 * formatMask('123', '(###)') => (123)
 * ```
 * @param {?} value
 * @param {?} mask
 * @return {?}
 */
export function formatMask(value, mask) {
    if (!value) {
        return '';
    }
    /** @type {?} */
    const splitValue = value.split('');
    return mask
        .split('')
        .reduce((/**
     * @param {?} res
     * @param {?} cur
     * @return {?}
     */
    (res, cur) => {
        if (cur === '#') {
            if (splitValue.length > 0) {
                res.push((/** @type {?} */ (splitValue.shift())));
            }
        }
        else {
            res.push(cur);
        }
        return res;
    }), (/** @type {?} */ ([])))
        .join('');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9mb3JtYXQvc3RyaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FBYzVDLE1BQU0sVUFBVSxNQUFNLENBQUMsR0FBOEIsRUFBRSxHQUFpQyxFQUFFLGNBQXVCLEtBQUs7SUFDcEgsT0FBTyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYzs7Ozs7SUFBRSxDQUFDLEtBQWEsRUFBRSxHQUFXLEVBQUUsRUFBRSxDQUN4RSxXQUFXLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUN4RSxDQUFDO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7O0FBVUQsTUFBTSxVQUFVLFVBQVUsQ0FBQyxLQUFhLEVBQUUsSUFBWTtJQUNwRCxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ1YsT0FBTyxFQUFFLENBQUM7S0FDWDs7VUFFSyxVQUFVLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7SUFDbEMsT0FBTyxJQUFJO1NBQ1IsS0FBSyxDQUFDLEVBQUUsQ0FBQztTQUNULE1BQU07Ozs7O0lBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7UUFDbkIsSUFBSSxHQUFHLEtBQUssR0FBRyxFQUFFO1lBQ2YsSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDekIsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBQSxVQUFVLENBQUMsS0FBSyxFQUFFLEVBQUMsQ0FBQyxDQUFDO2FBQy9CO1NBQ0Y7YUFBTTtZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDZjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQyxHQUFFLG1CQUFBLEVBQUUsRUFBWSxDQUFDO1NBQ2pCLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWVwR2V0IH0gZnJvbSAnQGRlbG9uL3V0aWwvb3RoZXInO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuLyoqXG4gKiBTdHJpbmcgZm9ybWF0dGluZ1xuICpcbiAqIOWtl+espuS4suagvOW8j+WMllxuICogYGBgXG4gKiBmb3JtYXQoJ3RoaXMgaXMgJHtuYW1lfScsIHsgbmFtZTogJ2FzZGYnIH0pXG4gKiAvLyBvdXRwdXQ6IHRoaXMgaXMgYXNkZlxuICogZm9ybWF0KCd0aGlzIGlzICR7dXNlci5uYW1lfScsIHsgdXNlcjogeyBuYW1lOiAnYXNkZicgfSB9LCB0cnVlKVxuICogLy8gb3V0cHV0OiB0aGlzIGlzIGFzZGZcbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KHN0cjogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgb2JqOiBOelNhZmVBbnkgfCBudWxsIHwgdW5kZWZpbmVkLCBuZWVkRGVlcEdldDogYm9vbGVhbiA9IGZhbHNlKTogc3RyaW5nIHtcbiAgcmV0dXJuIChzdHIgfHwgJycpLnJlcGxhY2UoL1xcJHsoW159XSspfS9nLCAoX3dvcms6IHN0cmluZywga2V5OiBzdHJpbmcpID0+XG4gICAgbmVlZERlZXBHZXQgPyBkZWVwR2V0KG9iaiwga2V5LnNwbGl0KCcuJyksICcnKSA6IChvYmogfHwge30pW2tleV0gfHwgJycsXG4gICk7XG59XG5cbi8qKlxuICogRm9ybWF0IG1hc2tcbiAqXG4gKiDmoLzlvI/ljJbmjqnnoIFcbiAqIGBgYHRzXG4gKiBmb3JtYXRNYXNrKCcxMjMnLCAnKCMjIyknKSA9PiAoMTIzKVxuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRNYXNrKHZhbHVlOiBzdHJpbmcsIG1hc2s6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBjb25zdCBzcGxpdFZhbHVlID0gdmFsdWUuc3BsaXQoJycpO1xuICByZXR1cm4gbWFza1xuICAgIC5zcGxpdCgnJylcbiAgICAucmVkdWNlKChyZXMsIGN1cikgPT4ge1xuICAgICAgaWYgKGN1ciA9PT0gJyMnKSB7XG4gICAgICAgIGlmIChzcGxpdFZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICByZXMucHVzaChzcGxpdFZhbHVlLnNoaWZ0KCkhKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzLnB1c2goY3VyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXM7XG4gICAgfSwgW10gYXMgc3RyaW5nW10pXG4gICAgLmpvaW4oJycpO1xufVxuIl19