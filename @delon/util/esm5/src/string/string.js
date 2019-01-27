/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
    return (str || '').replace(/\${([^}]+)}/g, function (work, key) {
        return needDeepGet ? deepGet(obj, key.split('.'), '') : (obj || {})[key] || '';
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3V0aWwvIiwic291cmNlcyI6WyJzcmMvc3RyaW5nL3N0cmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7OztBQVd6QyxNQUFNLFVBQVUsTUFBTSxDQUFDLEdBQVcsRUFBRSxHQUFPLEVBQUUsV0FBNEI7SUFBNUIsNEJBQUEsRUFBQSxtQkFBNEI7SUFDdkUsT0FBTyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLFVBQUMsSUFBWSxFQUFFLEdBQVc7UUFDbkUsT0FBQSxXQUFXLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtJQUF2RSxDQUF1RSxDQUN4RSxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZXBHZXQgfSBmcm9tICcuLi9vdGhlci9vdGhlcic7XG5cbi8qKlxuICog5a2X56ym5Liy5qC85byP5YyWXG4gKiBgYGBcbiAqIGZvcm1hdCgndGhpcyBpcyAke25hbWV9JywgeyBuYW1lOiAnYXNkZicgfSlcbiAqIC8vIG91dHB1dDogdGhpcyBpcyBhc2RmXG4gKiBmb3JtYXQoJ3RoaXMgaXMgJHt1c2VyLm5hbWV9JywgeyB1c2VyOiB7IG5hbWU6ICdhc2RmJyB9IH0sIHRydWUpXG4gKiAvLyBvdXRwdXQ6IHRoaXMgaXMgYXNkZlxuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQoc3RyOiBzdHJpbmcsIG9iajoge30sIG5lZWREZWVwR2V0OiBib29sZWFuID0gZmFsc2UpOiBzdHJpbmcge1xuICByZXR1cm4gKHN0ciB8fCAnJykucmVwbGFjZSgvXFwkeyhbXn1dKyl9L2csICh3b3JrOiBzdHJpbmcsIGtleTogc3RyaW5nKSA9PlxuICAgIG5lZWREZWVwR2V0ID8gZGVlcEdldChvYmosIGtleS5zcGxpdCgnLicpLCAnJykgOiAob2JqIHx8IHt9KVtrZXldIHx8ICcnLFxuICApO1xufVxuIl19