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
        return needDeepGet
            ? deepGet(obj, key.split('.'), '')
            : (obj || {})[key] || '';
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3V0aWwvIiwic291cmNlcyI6WyJzcmMvc3RyaW5nL3N0cmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7OztBQVd6QyxNQUFNLFVBQVUsTUFBTSxDQUFDLEdBQVcsRUFBRSxHQUFPLEVBQUUsV0FBNEI7SUFBNUIsNEJBQUEsRUFBQSxtQkFBNEI7SUFDdkUsT0FBTyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQ3hCLGNBQWMsRUFDZCxVQUFDLElBQVksRUFBRSxHQUFXO1FBQ3hCLE9BQUEsV0FBVztZQUNULENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFO0lBRjFCLENBRTBCLENBQzdCLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVlcEdldCB9IGZyb20gJy4uL290aGVyL290aGVyJztcblxuLyoqXG4gKiDlrZfnrKbkuLLmoLzlvI/ljJZcbiAqIGBgYFxuICogZm9ybWF0KCd0aGlzIGlzICR7bmFtZX0nLCB7IG5hbWU6ICdhc2RmJyB9KVxuICogLy8gb3V0cHV0OiB0aGlzIGlzIGFzZGZcbiAqIGZvcm1hdCgndGhpcyBpcyAke3VzZXIubmFtZX0nLCB7IHVzZXI6IHsgbmFtZTogJ2FzZGYnIH0gfSwgdHJ1ZSlcbiAqIC8vIG91dHB1dDogdGhpcyBpcyBhc2RmXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdChzdHI6IHN0cmluZywgb2JqOiB7fSwgbmVlZERlZXBHZXQ6IGJvb2xlYW4gPSBmYWxzZSk6IHN0cmluZyB7XG4gIHJldHVybiAoc3RyIHx8ICcnKS5yZXBsYWNlKFxuICAgIC9cXCR7KFtefV0rKX0vZyxcbiAgICAod29yazogc3RyaW5nLCBrZXk6IHN0cmluZykgPT5cbiAgICAgIG5lZWREZWVwR2V0XG4gICAgICAgID8gZGVlcEdldChvYmosIGtleS5zcGxpdCgnLicpLCAnJylcbiAgICAgICAgOiAob2JqIHx8IHt9KVtrZXldIHx8ICcnLFxuICApO1xufVxuIl19