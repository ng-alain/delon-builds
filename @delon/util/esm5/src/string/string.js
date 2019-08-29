/**
 * @fileoverview added by tsickle
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
export function format(str, obj, needDeepGet) {
    if (needDeepGet === void 0) { needDeepGet = false; }
    return (str || '').replace(/\${([^}]+)}/g, (/**
     * @param {?} _work
     * @param {?} key
     * @return {?}
     */
    function (_work, key) {
        return needDeepGet ? deepGet(obj, key.split('.'), '') : (obj || {})[key] || '';
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3V0aWwvIiwic291cmNlcyI6WyJzcmMvc3RyaW5nL3N0cmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7OztBQVd6QyxNQUFNLFVBQVUsTUFBTSxDQUNwQixHQUE4QixFQUM5QixHQUEwQixFQUMxQixXQUE0QjtJQUE1Qiw0QkFBQSxFQUFBLG1CQUE0QjtJQUU1QixPQUFPLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjOzs7OztJQUFFLFVBQUMsS0FBYSxFQUFFLEdBQVc7UUFDcEUsT0FBQSxXQUFXLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtJQUF2RSxDQUF1RSxFQUN4RSxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZXBHZXQgfSBmcm9tICcuLi9vdGhlci9vdGhlcic7XG5cbi8qKlxuICog5a2X56ym5Liy5qC85byP5YyWXG4gKiBgYGBcbiAqIGZvcm1hdCgndGhpcyBpcyAke25hbWV9JywgeyBuYW1lOiAnYXNkZicgfSlcbiAqIC8vIG91dHB1dDogdGhpcyBpcyBhc2RmXG4gKiBmb3JtYXQoJ3RoaXMgaXMgJHt1c2VyLm5hbWV9JywgeyB1c2VyOiB7IG5hbWU6ICdhc2RmJyB9IH0sIHRydWUpXG4gKiAvLyBvdXRwdXQ6IHRoaXMgaXMgYXNkZlxuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQoXG4gIHN0cjogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCxcbiAgb2JqOiB7fSB8IG51bGwgfCB1bmRlZmluZWQsXG4gIG5lZWREZWVwR2V0OiBib29sZWFuID0gZmFsc2UsXG4pOiBzdHJpbmcge1xuICByZXR1cm4gKHN0ciB8fCAnJykucmVwbGFjZSgvXFwkeyhbXn1dKyl9L2csIChfd29yazogc3RyaW5nLCBrZXk6IHN0cmluZykgPT5cbiAgICBuZWVkRGVlcEdldCA/IGRlZXBHZXQob2JqLCBrZXkuc3BsaXQoJy4nKSwgJycpIDogKG9iaiB8fCB7fSlba2V5XSB8fCAnJyxcbiAgKTtcbn1cbiJdfQ==