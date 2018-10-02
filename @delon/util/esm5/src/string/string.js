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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3V0aWwvIiwic291cmNlcyI6WyJzcmMvc3RyaW5nL3N0cmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7OztBQVd6QyxNQUFNLGlCQUFpQixHQUFXLEVBQUUsR0FBTyxFQUFFLFdBQW1CO0lBQW5CLDRCQUFBLEVBQUEsbUJBQW1CO0lBQzlELE9BQU8sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUN4QixjQUFjLEVBQ2QsVUFBQyxJQUFZLEVBQUUsR0FBVztRQUN4QixPQUFBLFdBQVc7WUFDVCxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtJQUYxQixDQUUwQixDQUM3QixDQUFDO0NBQ0g7Ozs7Ozs7QUFNRCxNQUFNLGVBQWUsS0FBVSxFQUFFLE1BQWtCO0lBQWxCLHVCQUFBLEVBQUEsVUFBa0I7SUFDakQsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRO1FBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0QsT0FBTyxVQUFRLEtBQU8sQ0FBQztDQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZXBHZXQgfSBmcm9tICcuLi9vdGhlci9vdGhlcic7XHJcblxyXG4vKipcclxuICog5a2X56ym5Liy5qC85byP5YyWXHJcbiAqIGBgYFxyXG4gKiBmb3JtYXQoJ3RoaXMgaXMgJHtuYW1lfScsIHsgbmFtZTogJ2FzZGYnIH0pXHJcbiAqIC8vIG91dHB1dDogdGhpcyBpcyBhc2RmXHJcbiAqIGZvcm1hdCgndGhpcyBpcyAke3VzZXIubmFtZX0nLCB7IHVzZXI6IHsgbmFtZTogJ2FzZGYnIH0gfSwgdHJ1ZSlcclxuICogLy8gb3V0cHV0OiB0aGlzIGlzIGFzZGZcclxuICogYGBgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KHN0cjogc3RyaW5nLCBvYmo6IHt9LCBuZWVkRGVlcEdldCA9IGZhbHNlKTogc3RyaW5nIHtcclxuICByZXR1cm4gKHN0ciB8fCAnJykucmVwbGFjZShcclxuICAgIC9cXCR7KFtefV0rKX0vZyxcclxuICAgICh3b3JrOiBzdHJpbmcsIGtleTogc3RyaW5nKSA9PlxyXG4gICAgICBuZWVkRGVlcEdldFxyXG4gICAgICAgID8gZGVlcEdldChvYmosIGtleS5zcGxpdCgnLicpLCAnJylcclxuICAgICAgICA6IChvYmogfHwge30pW2tleV0gfHwgJycsXHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOi9rOWMluaIkFJNQuWFg+Wtl+espuS4slxyXG4gKiBAcGFyYW0gZGlnaXRzIOW9k+aVsOWtl+exu+Wei+aXtu+8jOWFgeiuuOaMh+WumuWwj+aVsOeCueWQjuaVsOWtl+eahOS4quaVsO+8jOm7mOiupDLkvY3lsI/mlbBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB5dWFuKHZhbHVlOiBhbnksIGRpZ2l0czogbnVtYmVyID0gMik6IHN0cmluZyB7XHJcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHZhbHVlID0gdmFsdWUudG9GaXhlZChkaWdpdHMpO1xyXG4gIHJldHVybiBgJnllbiAke3ZhbHVlfWA7XHJcbn1cclxuIl19