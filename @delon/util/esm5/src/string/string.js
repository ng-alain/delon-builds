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
export function format(str, obj, needDeepGet) {
    if (needDeepGet === void 0) { needDeepGet = false; }
    return (str || '').replace(/\${([^}]+)}/g, function (work, key) {
        return needDeepGet
            ? deepGet(obj, key.split('.'), '')
            : (obj || {})[key] || '';
    });
}
/**
 * 转化成RMB元字符串
 * @param {?} value
 * @param {?=} digits 当数字类型时，允许指定小数点后数字的个数，默认2位小数
 * @return {?}
 */
export function yuan(value, digits) {
    if (digits === void 0) { digits = 2; }
    if (typeof value === 'number')
        value = value.toFixed(digits);
    return "&yen " + value;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3V0aWwvIiwic291cmNlcyI6WyJzcmMvc3RyaW5nL3N0cmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7OztBQVd6QyxNQUFNLGlCQUFpQixHQUFXLEVBQUUsR0FBTyxFQUFFLFdBQW1CO0lBQW5CLDRCQUFBLEVBQUEsbUJBQW1CO0lBQzlELE9BQU8sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUN4QixjQUFjLEVBQ2QsVUFBQyxJQUFZLEVBQUUsR0FBVztRQUN4QixPQUFBLFdBQVc7WUFDVCxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtJQUYxQixDQUUwQixDQUM3QixDQUFDO0NBQ0g7Ozs7Ozs7QUFNRCxNQUFNLGVBQWUsS0FBVSxFQUFFLE1BQWtCO0lBQWxCLHVCQUFBLEVBQUEsVUFBa0I7SUFDakQsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRO1FBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0QsT0FBTyxVQUFRLEtBQU8sQ0FBQztDQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZXBHZXQgfSBmcm9tICcuLi9vdGhlci9vdGhlcic7XG5cbi8qKlxuICog5a2X56ym5Liy5qC85byP5YyWXG4gKiBgYGBcbiAqIGZvcm1hdCgndGhpcyBpcyAke25hbWV9JywgeyBuYW1lOiAnYXNkZicgfSlcbiAqIC8vIG91dHB1dDogdGhpcyBpcyBhc2RmXG4gKiBmb3JtYXQoJ3RoaXMgaXMgJHt1c2VyLm5hbWV9JywgeyB1c2VyOiB7IG5hbWU6ICdhc2RmJyB9IH0sIHRydWUpXG4gKiAvLyBvdXRwdXQ6IHRoaXMgaXMgYXNkZlxuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQoc3RyOiBzdHJpbmcsIG9iajoge30sIG5lZWREZWVwR2V0ID0gZmFsc2UpOiBzdHJpbmcge1xuICByZXR1cm4gKHN0ciB8fCAnJykucmVwbGFjZShcbiAgICAvXFwkeyhbXn1dKyl9L2csXG4gICAgKHdvcms6IHN0cmluZywga2V5OiBzdHJpbmcpID0+XG4gICAgICBuZWVkRGVlcEdldFxuICAgICAgICA/IGRlZXBHZXQob2JqLCBrZXkuc3BsaXQoJy4nKSwgJycpXG4gICAgICAgIDogKG9iaiB8fCB7fSlba2V5XSB8fCAnJyxcbiAgKTtcbn1cblxuLyoqXG4gKiDovazljJbmiJBSTULlhYPlrZfnrKbkuLJcbiAqIEBwYXJhbSBkaWdpdHMg5b2T5pWw5a2X57G75Z6L5pe277yM5YWB6K645oyH5a6a5bCP5pWw54K55ZCO5pWw5a2X55qE5Liq5pWw77yM6buY6K6kMuS9jeWwj+aVsFxuICovXG5leHBvcnQgZnVuY3Rpb24geXVhbih2YWx1ZTogYW55LCBkaWdpdHM6IG51bWJlciA9IDIpOiBzdHJpbmcge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykgdmFsdWUgPSB2YWx1ZS50b0ZpeGVkKGRpZ2l0cyk7XG4gIHJldHVybiBgJnllbiAke3ZhbHVlfWA7XG59XG4iXX0=