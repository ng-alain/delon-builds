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
export function format(str, obj, needDeepGet = false) {
    return (str || '').replace(/\${([^}]+)}/g, (work, key) => needDeepGet
        ? deepGet(obj, key.split('.'), '')
        : (obj || {})[key] || '');
}
/**
 * 转化成RMB元字符串
 * @param {?} value
 * @param {?=} digits 当数字类型时，允许指定小数点后数字的个数，默认2位小数
 * @return {?}
 */
// tslint:disable-next-line:no-any
export function yuan(value, digits = 2) {
    if (typeof value === 'number')
        value = value.toFixed(digits);
    return `&yen ${value}`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3V0aWwvIiwic291cmNlcyI6WyJzcmMvc3RyaW5nL3N0cmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7OztBQVd6QyxNQUFNLFVBQVUsTUFBTSxDQUFDLEdBQVcsRUFBRSxHQUFPLEVBQUUsY0FBdUIsS0FBSztJQUN2RSxPQUFPLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FDeEIsY0FBYyxFQUNkLENBQUMsSUFBWSxFQUFFLEdBQVcsRUFBRSxFQUFFLENBQzVCLFdBQVc7UUFDVCxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUM3QixDQUFDO0FBQ0osQ0FBQzs7Ozs7Ozs7QUFPRCxNQUFNLFVBQVUsSUFBSSxDQUFDLEtBQVUsRUFBRSxTQUFpQixDQUFDO0lBQ2pELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUTtRQUFFLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdELE9BQU8sUUFBUSxLQUFLLEVBQUUsQ0FBQztBQUN6QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVlcEdldCB9IGZyb20gJy4uL290aGVyL290aGVyJztcblxuLyoqXG4gKiDlrZfnrKbkuLLmoLzlvI/ljJZcbiAqIGBgYFxuICogZm9ybWF0KCd0aGlzIGlzICR7bmFtZX0nLCB7IG5hbWU6ICdhc2RmJyB9KVxuICogLy8gb3V0cHV0OiB0aGlzIGlzIGFzZGZcbiAqIGZvcm1hdCgndGhpcyBpcyAke3VzZXIubmFtZX0nLCB7IHVzZXI6IHsgbmFtZTogJ2FzZGYnIH0gfSwgdHJ1ZSlcbiAqIC8vIG91dHB1dDogdGhpcyBpcyBhc2RmXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdChzdHI6IHN0cmluZywgb2JqOiB7fSwgbmVlZERlZXBHZXQ6IGJvb2xlYW4gPSBmYWxzZSk6IHN0cmluZyB7XG4gIHJldHVybiAoc3RyIHx8ICcnKS5yZXBsYWNlKFxuICAgIC9cXCR7KFtefV0rKX0vZyxcbiAgICAod29yazogc3RyaW5nLCBrZXk6IHN0cmluZykgPT5cbiAgICAgIG5lZWREZWVwR2V0XG4gICAgICAgID8gZGVlcEdldChvYmosIGtleS5zcGxpdCgnLicpLCAnJylcbiAgICAgICAgOiAob2JqIHx8IHt9KVtrZXldIHx8ICcnLFxuICApO1xufVxuXG4vKipcbiAqIOi9rOWMluaIkFJNQuWFg+Wtl+espuS4slxuICogQHBhcmFtIGRpZ2l0cyDlvZPmlbDlrZfnsbvlnovml7bvvIzlhYHorrjmjIflrprlsI/mlbDngrnlkI7mlbDlrZfnmoTkuKrmlbDvvIzpu5jorqQy5L2N5bCP5pWwXG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbmV4cG9ydCBmdW5jdGlvbiB5dWFuKHZhbHVlOiBhbnksIGRpZ2l0czogbnVtYmVyID0gMik6IHN0cmluZyB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB2YWx1ZSA9IHZhbHVlLnRvRml4ZWQoZGlnaXRzKTtcbiAgcmV0dXJuIGAmeWVuICR7dmFsdWV9YDtcbn1cbiJdfQ==