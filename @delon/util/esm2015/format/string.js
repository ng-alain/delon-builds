/**
 * @fileoverview added by tsickle
 * Generated from: string.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { deepGet } from '@delon/util/other';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9mb3JtYXQvc3RyaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7Ozs7Ozs7OztBQVk1QyxNQUFNLFVBQVUsTUFBTSxDQUFDLEdBQThCLEVBQUUsR0FBaUMsRUFBRSxjQUF1QixLQUFLO0lBQ3BILE9BQU8sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWM7Ozs7O0lBQUUsQ0FBQyxLQUFhLEVBQUUsR0FBVyxFQUFFLEVBQUUsQ0FDeEUsV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFDeEUsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWVwR2V0IH0gZnJvbSAnQGRlbG9uL3V0aWwvb3RoZXInO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuLyoqXG4gKiDlrZfnrKbkuLLmoLzlvI/ljJZcbiAqIGBgYFxuICogZm9ybWF0KCd0aGlzIGlzICR7bmFtZX0nLCB7IG5hbWU6ICdhc2RmJyB9KVxuICogLy8gb3V0cHV0OiB0aGlzIGlzIGFzZGZcbiAqIGZvcm1hdCgndGhpcyBpcyAke3VzZXIubmFtZX0nLCB7IHVzZXI6IHsgbmFtZTogJ2FzZGYnIH0gfSwgdHJ1ZSlcbiAqIC8vIG91dHB1dDogdGhpcyBpcyBhc2RmXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdChzdHI6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIG9iajogTnpTYWZlQW55IHwgbnVsbCB8IHVuZGVmaW5lZCwgbmVlZERlZXBHZXQ6IGJvb2xlYW4gPSBmYWxzZSk6IHN0cmluZyB7XG4gIHJldHVybiAoc3RyIHx8ICcnKS5yZXBsYWNlKC9cXCR7KFtefV0rKX0vZywgKF93b3JrOiBzdHJpbmcsIGtleTogc3RyaW5nKSA9PlxuICAgIG5lZWREZWVwR2V0ID8gZGVlcEdldChvYmosIGtleS5zcGxpdCgnLicpLCAnJykgOiAob2JqIHx8IHt9KVtrZXldIHx8ICcnLFxuICApO1xufVxuIl19