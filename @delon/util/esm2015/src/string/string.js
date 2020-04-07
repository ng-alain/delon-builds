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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3V0aWwvIiwic291cmNlcyI6WyJzcmMvc3RyaW5nL3N0cmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFXekMsTUFBTSxVQUFVLE1BQU0sQ0FDcEIsR0FBOEIsRUFDOUIsR0FBMEIsRUFDMUIsY0FBdUIsS0FBSztJQUU1QixPQUFPLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjOzs7OztJQUFFLENBQUMsS0FBYSxFQUFFLEdBQVcsRUFBRSxFQUFFLENBQ3hFLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQ3hFLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVlcEdldCB9IGZyb20gJy4uL290aGVyL290aGVyJztcblxuLyoqXG4gKiDlrZfnrKbkuLLmoLzlvI/ljJZcbiAqIGBgYFxuICogZm9ybWF0KCd0aGlzIGlzICR7bmFtZX0nLCB7IG5hbWU6ICdhc2RmJyB9KVxuICogLy8gb3V0cHV0OiB0aGlzIGlzIGFzZGZcbiAqIGZvcm1hdCgndGhpcyBpcyAke3VzZXIubmFtZX0nLCB7IHVzZXI6IHsgbmFtZTogJ2FzZGYnIH0gfSwgdHJ1ZSlcbiAqIC8vIG91dHB1dDogdGhpcyBpcyBhc2RmXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdChcbiAgc3RyOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLFxuICBvYmo6IHt9IHwgbnVsbCB8IHVuZGVmaW5lZCxcbiAgbmVlZERlZXBHZXQ6IGJvb2xlYW4gPSBmYWxzZSxcbik6IHN0cmluZyB7XG4gIHJldHVybiAoc3RyIHx8ICcnKS5yZXBsYWNlKC9cXCR7KFtefV0rKX0vZywgKF93b3JrOiBzdHJpbmcsIGtleTogc3RyaW5nKSA9PlxuICAgIG5lZWREZWVwR2V0ID8gZGVlcEdldChvYmosIGtleS5zcGxpdCgnLicpLCAnJykgOiAob2JqIHx8IHt9KVtrZXldIHx8ICcnLFxuICApO1xufVxuIl19