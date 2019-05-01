/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import extend from 'extend';
/**
 * 类似 `_.get`，根据 `path` 获取安全值
 * jsperf: https://jsperf.com/es-deep-getttps://jsperf.com/es-deep-get
 *
 * @param {?} obj 数据源，无效时直接返回 `defaultValue` 值
 * @param {?} path 若 `null`、`[]`、未定义及未找到时返回 `defaultValue` 值
 * @param {?=} defaultValue 默认值
 * @return {?}
 */
export function deepGet(obj, path, defaultValue) {
    if (!obj || path == null || path.length === 0)
        return defaultValue;
    if (!Array.isArray(path)) {
        path = ~path.indexOf('.') ? path.split('.') : [path];
    }
    if (path.length === 1) {
        /** @type {?} */
        var checkObj = obj[path[0]];
        return typeof checkObj === 'undefined' ? defaultValue : checkObj;
    }
    /** @type {?} */
    var res = path.reduce((/**
     * @param {?} o
     * @param {?} k
     * @return {?}
     */
    function (o, k) { return (o || {})[k]; }), obj);
    return typeof res === 'undefined' ? defaultValue : res;
}
/**
 * @param {?} obj
 * @return {?}
 */
export function deepCopy(obj) {
    /** @type {?} */
    var result = extend(true, {}, { _: obj });
    return result._;
}
/**
 * 复制内容至剪贴板
 * @param {?} value
 * @return {?}
 */
export function copy(value) {
    return new Promise((/**
     * @param {?} resolve
     * @return {?}
     */
    function (resolve) {
        /** @type {?} */
        var copyTextArea = null;
        try {
            copyTextArea = document.createElement('textarea');
            copyTextArea.style.height = '0px';
            copyTextArea.style.opacity = '0';
            copyTextArea.style.width = '0px';
            document.body.appendChild(copyTextArea);
            copyTextArea.value = value;
            copyTextArea.select();
            document.execCommand('copy');
            resolve(value);
        }
        finally {
            if (copyTextArea && copyTextArea.parentNode) {
                copyTextArea.parentNode.removeChild(copyTextArea);
            }
        }
    }));
}
/**
 * @param {?} original
 * @param {?} ingoreArray
 * @param {...?} objects
 * @return {?}
 */
export function deepMergeKey(original, ingoreArray) {
    var objects = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        objects[_i - 2] = arguments[_i];
    }
    if (Array.isArray(original) || typeof original !== 'object')
        return original;
    /** @type {?} */
    var isObject = (/**
     * @param {?} v
     * @return {?}
     */
    function (v) { return typeof v === 'object' || typeof v === 'function'; });
    /** @type {?} */
    var merge = (/**
     * @param {?} target
     * @param {?} obj
     * @return {?}
     */
    function (target, obj) {
        Object.keys(obj)
            .filter((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return key !== '__proto__' && Object.prototype.hasOwnProperty.call(obj, key); }))
            .forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            /** @type {?} */
            var oldValue = obj[key];
            /** @type {?} */
            var newValue = target[key];
            if (!ingoreArray && Array.isArray(newValue)) {
                target[key] = tslib_1.__spread(newValue, oldValue);
            }
            else if (oldValue != null && isObject(oldValue) && newValue != null && isObject(newValue)) {
                target[key] = merge(newValue, oldValue);
            }
            else {
                target[key] = deepCopy(oldValue);
            }
        }));
        return target;
    });
    objects.filter((/**
     * @param {?} v
     * @return {?}
     */
    function (v) { return isObject(v); })).forEach((/**
     * @param {?} v
     * @return {?}
     */
    function (v) { return merge(original, v); }));
    return original;
}
/**
 * @param {?} original
 * @param {...?} objects
 * @return {?}
 */
export function deepMerge(original) {
    var objects = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        objects[_i - 1] = arguments[_i];
    }
    return deepMergeKey.apply(void 0, tslib_1.__spread([original, false], objects));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdXRpbC8iLCJzb3VyY2VzIjpbInNyYy9vdGhlci9vdGhlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQzs7Ozs7Ozs7OztBQVU1QixNQUFNLFVBQVUsT0FBTyxDQUFDLEdBQWUsRUFBRSxJQUEwQyxFQUFFLFlBQWtCO0lBQ3JHLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUM7UUFBRSxPQUFPLFlBQVksQ0FBQztJQUNuRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN4QixJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3REO0lBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTs7WUFDZixRQUFRLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QixPQUFPLE9BQU8sUUFBUSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7S0FDbEU7O1FBQ0ssR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNOzs7OztJQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFaLENBQVksR0FBRSxHQUFHLENBQUM7SUFDcEQsT0FBTyxPQUFPLEdBQUcsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQ3pELENBQUM7Ozs7O0FBRUQs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QixDQUFDLENBQUE7SUFFRCxPQUFPLENBQUMsTUFBTTs7OztJQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFYLENBQVcsRUFBQyxDQUFDLE9BQU87Ozs7SUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQWxCLENBQWtCLEVBQUMsQ0FBQztJQUVsRSxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsU0FBUyxDQUFDLFFBQWE7SUFBRSxpQkFBaUI7U0FBakIsVUFBaUIsRUFBakIscUJBQWlCLEVBQWpCLElBQWlCO1FBQWpCLGdDQUFpQjs7SUFDeEQsT0FBTyxZQUFZLGlDQUFDLFFBQVEsRUFBRSxLQUFLLEdBQUssT0FBTyxHQUFFO0FBQ25ELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXh0ZW5kIGZyb20gJ2V4dGVuZCc7XG5cbi8qKlxuICog57G75Ly8IGBfLmdldGDvvIzmoLnmja4gYHBhdGhgIOiOt+WPluWuieWFqOWAvFxuICoganNwZXJmOiBodHRwczovL2pzcGVyZi5jb20vZXMtZGVlcC1nZXR0dHBzOi8vanNwZXJmLmNvbS9lcy1kZWVwLWdldFxuICpcbiAqIEBwYXJhbSBvYmog5pWw5o2u5rqQ77yM5peg5pWI5pe255u05o6l6L+U5ZueIGBkZWZhdWx0VmFsdWVgIOWAvFxuICogQHBhcmFtIHBhdGgg6IulIGBudWxsYOOAgWBbXWDjgIHmnKrlrprkuYnlj4rmnKrmib7liLDml7bov5Tlm54gYGRlZmF1bHRWYWx1ZWAg5YC8XG4gKiBAcGFyYW0gZGVmYXVsdFZhbHVlIOm7mOiupOWAvFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVlcEdldChvYmo6IGFueSB8IG51bGwsIHBhdGg6IHN0cmluZyB8IHN0cmluZ1tdIHwgbnVsbCB8IHVuZGVmaW5lZCwgZGVmYXVsdFZhbHVlPzogYW55KTogYW55IHtcbiAgaWYgKCFvYmogfHwgcGF0aCA9PSBudWxsIHx8IHBhdGgubGVuZ3RoID09PSAwKSByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICBpZiAoIUFycmF5LmlzQXJyYXkocGF0aCkpIHtcbiAgICBwYXRoID0gfnBhdGguaW5kZXhPZignLicpID8gcGF0aC5zcGxpdCgnLicpIDogW3BhdGhdO1xuICB9XG4gIGlmIChwYXRoLmxlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IGNoZWNrT2JqID0gb2JqW3BhdGhbMF1dO1xuICAgIHJldHVybiB0eXBlb2YgY2hlY2tPYmogPT09ICd1bmRlZmluZWQnID8gZGVmYXVsdFZhbHVlIDogY2hlY2tPYmo7XG4gIH1cbiAgY29uc3QgcmVzID0gcGF0aC5yZWR1Y2UoKG8sIGspID0+IChvIHx8IHt9KVtrXSwgb2JqKTtcbiAgcmV0dXJuIHR5cGVvZiByZXMgPT09ICd1bmRlZmluZWQnID8gZGVmYXVsdFZhbHVlIDogcmVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVlcENvcHkob2JqOiBhbnkpOiBhbnkge1xuICBjb25zdCByZXN1bHQgPSBleHRlbmQodHJ1ZSwge30sIHsgXzogb2JqIH0pO1xuICByZXR1cm4gcmVzdWx0Ll87XG59XG5cbi8qKiDlpI3liLblhoXlrrnoh7PliarotLTmnb8gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KHZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPihcbiAgICAocmVzb2x2ZSk6IHZvaWQgPT4ge1xuICAgICAgbGV0IGNvcHlUZXh0QXJlYTogSFRNTFRleHRBcmVhRWxlbWVudCB8IG51bGwgPSBudWxsO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29weVRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgY29weVRleHRBcmVhLnN0eWxlLmhlaWdodCA9ICcwcHgnO1xuICAgICAgICBjb3B5VGV4dEFyZWEuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgICAgY29weVRleHRBcmVhLnN0eWxlLndpZHRoID0gJzBweCc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29weVRleHRBcmVhKTtcbiAgICAgICAgY29weVRleHRBcmVhLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIGNvcHlUZXh0QXJlYS5zZWxlY3QoKTtcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoY29weVRleHRBcmVhICYmIGNvcHlUZXh0QXJlYS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgY29weVRleHRBcmVhLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY29weVRleHRBcmVhKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWVwTWVyZ2VLZXkob3JpZ2luYWw6IGFueSwgaW5nb3JlQXJyYXk6IGJvb2xlYW4sIC4uLm9iamVjdHM6IGFueVtdKTogYW55IHtcbiAgaWYgKEFycmF5LmlzQXJyYXkob3JpZ2luYWwpIHx8IHR5cGVvZiBvcmlnaW5hbCAhPT0gJ29iamVjdCcpIHJldHVybiBvcmlnaW5hbDtcblxuICBjb25zdCBpc09iamVjdCA9ICh2OiBhbnkpID0+IHR5cGVvZiB2ID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdiA9PT0gJ2Z1bmN0aW9uJztcblxuICBjb25zdCBtZXJnZSA9ICh0YXJnZXQ6IGFueSwgb2JqOiB7fSkgPT4ge1xuICAgIE9iamVjdC5rZXlzKG9iailcbiAgICAgIC5maWx0ZXIoa2V5ID0+IGtleSAhPT0gJ19fcHJvdG9fXycgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSlcbiAgICAgIC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGNvbnN0IG9sZFZhbHVlID0gb2JqW2tleV07XG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdGFyZ2V0W2tleV07XG4gICAgICAgIGlmICghaW5nb3JlQXJyYXkgJiYgQXJyYXkuaXNBcnJheShuZXdWYWx1ZSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IFsuLi5uZXdWYWx1ZSwgLi4ub2xkVmFsdWVdO1xuICAgICAgICB9IGVsc2UgaWYgKG9sZFZhbHVlICE9IG51bGwgJiYgaXNPYmplY3Qob2xkVmFsdWUpICYmIG5ld1ZhbHVlICE9IG51bGwgJiYgaXNPYmplY3QobmV3VmFsdWUpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBtZXJnZShuZXdWYWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gZGVlcENvcHkob2xkVmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIG9iamVjdHMuZmlsdGVyKHYgPT4gaXNPYmplY3QodikpLmZvckVhY2godiA9PiBtZXJnZShvcmlnaW5hbCwgdikpO1xuXG4gIHJldHVybiBvcmlnaW5hbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBNZXJnZShvcmlnaW5hbDogYW55LCAuLi5vYmplY3RzOiBhbnlbXSk6IGFueSB7XG4gIHJldHVybiBkZWVwTWVyZ2VLZXkob3JpZ2luYWwsIGZhbHNlLCAuLi5vYmplY3RzKTtcbn1cbiJdfQ==