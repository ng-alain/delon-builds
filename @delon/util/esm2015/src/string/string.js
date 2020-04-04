/**
 * @fileoverview added by tsickle
 * Generated from: src/string/string.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    return (str || '').replace(/\${([^}]+)}/g, (/**
     * @param {?} _work
     * @param {?} key
     * @return {?}
     */
    (_work, key) => needDeepGet ? deepGet(obj, key.split('.'), '') : (obj || {})[key] || ''));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3V0aWwvIiwic291cmNlcyI6WyJzcmMvc3RyaW5nL3N0cmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFXekMsTUFBTSxVQUFVLE1BQU0sQ0FBQyxHQUE4QixFQUFFLEdBQWlDLEVBQUUsY0FBdUIsS0FBSztJQUNwSCxPQUFPLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjOzs7OztJQUFFLENBQUMsS0FBYSxFQUFFLEdBQVcsRUFBRSxFQUFFLENBQ3hFLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQ3hFLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzL2FueSc7XG5pbXBvcnQgeyBkZWVwR2V0IH0gZnJvbSAnLi4vb3RoZXIvb3RoZXInO1xuXG4vKipcbiAqIOWtl+espuS4suagvOW8j+WMllxuICogYGBgXG4gKiBmb3JtYXQoJ3RoaXMgaXMgJHtuYW1lfScsIHsgbmFtZTogJ2FzZGYnIH0pXG4gKiAvLyBvdXRwdXQ6IHRoaXMgaXMgYXNkZlxuICogZm9ybWF0KCd0aGlzIGlzICR7dXNlci5uYW1lfScsIHsgdXNlcjogeyBuYW1lOiAnYXNkZicgfSB9LCB0cnVlKVxuICogLy8gb3V0cHV0OiB0aGlzIGlzIGFzZGZcbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KHN0cjogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgb2JqOiBOelNhZmVBbnkgfCBudWxsIHwgdW5kZWZpbmVkLCBuZWVkRGVlcEdldDogYm9vbGVhbiA9IGZhbHNlKTogc3RyaW5nIHtcbiAgcmV0dXJuIChzdHIgfHwgJycpLnJlcGxhY2UoL1xcJHsoW159XSspfS9nLCAoX3dvcms6IHN0cmluZywga2V5OiBzdHJpbmcpID0+XG4gICAgbmVlZERlZXBHZXQgPyBkZWVwR2V0KG9iaiwga2V5LnNwbGl0KCcuJyksICcnKSA6IChvYmogfHwge30pW2tleV0gfHwgJycsXG4gICk7XG59XG4iXX0=