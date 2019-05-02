/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3V0aWwvIiwic291cmNlcyI6WyJzcmMvc3RyaW5nL3N0cmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7OztBQVd6QyxNQUFNLFVBQVUsTUFBTSxDQUNwQixHQUE4QixFQUM5QixHQUEwQixFQUMxQixjQUF1QixLQUFLO0lBRTVCLE9BQU8sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWM7Ozs7O0lBQUUsQ0FBQyxLQUFhLEVBQUUsR0FBVyxFQUFFLEVBQUUsQ0FDeEUsV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFDeEUsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWVwR2V0IH0gZnJvbSAnLi4vb3RoZXIvb3RoZXInO1xuXG4vKipcbiAqIOWtl+espuS4suagvOW8j+WMllxuICogYGBgXG4gKiBmb3JtYXQoJ3RoaXMgaXMgJHtuYW1lfScsIHsgbmFtZTogJ2FzZGYnIH0pXG4gKiAvLyBvdXRwdXQ6IHRoaXMgaXMgYXNkZlxuICogZm9ybWF0KCd0aGlzIGlzICR7dXNlci5uYW1lfScsIHsgdXNlcjogeyBuYW1lOiAnYXNkZicgfSB9LCB0cnVlKVxuICogLy8gb3V0cHV0OiB0aGlzIGlzIGFzZGZcbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KFxuICBzdHI6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsXG4gIG9iajoge30gfCBudWxsIHwgdW5kZWZpbmVkLFxuICBuZWVkRGVlcEdldDogYm9vbGVhbiA9IGZhbHNlLFxuKTogc3RyaW5nIHtcbiAgcmV0dXJuIChzdHIgfHwgJycpLnJlcGxhY2UoL1xcJHsoW159XSspfS9nLCAoX3dvcms6IHN0cmluZywga2V5OiBzdHJpbmcpID0+XG4gICAgbmVlZERlZXBHZXQgPyBkZWVwR2V0KG9iaiwga2V5LnNwbGl0KCcuJyksICcnKSA6IChvYmogfHwge30pW2tleV0gfHwgJycsXG4gICk7XG59XG4iXX0=