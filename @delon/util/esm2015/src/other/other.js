/**
 * @fileoverview added by tsickle
 * Generated from: src/other/other.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        const checkObj = obj[path[0]];
        return typeof checkObj === 'undefined' ? defaultValue : checkObj;
    }
    /** @type {?} */
    const res = path.reduce((/**
     * @param {?} o
     * @param {?} k
     * @return {?}
     */
    (o, k) => (o || {})[k]), obj);
    return typeof res === 'undefined' ? defaultValue : res;
}
/**
 * 基于 [extend](https://github.com/justmoon/node-extend) 的深度拷贝
 * @param {?} obj
 * @return {?}
 */
export function deepCopy(obj) {
    /** @type {?} */
    const result = extend(true, {}, { _: obj });
    return result._;
}
/**
 * 复制字符串文档至剪贴板
 * @param {?} value
 * @return {?}
 */
export function copy(value) {
    return new Promise((/**
     * @param {?} resolve
     * @return {?}
     */
    (resolve) => {
        /** @type {?} */
        let copyTextArea = null;
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
 * 深度合并对象
 *
 * @param {?} original 原始对象
 * @param {?} ingoreArray 是否忽略数组，`true` 表示忽略数组的合并，`false` 表示会合并整个数组
 * @param {...?} objects 要合并的对象
 * @return {?}
 */
export function deepMergeKey(original, ingoreArray, ...objects) {
    if (Array.isArray(original) || typeof original !== 'object')
        return original;
    /** @type {?} */
    const isObject = (/**
     * @param {?} v
     * @return {?}
     */
    (v) => typeof v === 'object' || typeof v === 'function');
    /** @type {?} */
    const merge = (/**
     * @param {?} target
     * @param {?} obj
     * @return {?}
     */
    (target, obj) => {
        Object.keys(obj)
            .filter((/**
         * @param {?} key
         * @return {?}
         */
        key => key !== '__proto__' && Object.prototype.hasOwnProperty.call(obj, key)))
            .forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            /** @type {?} */
            const oldValue = obj[key];
            /** @type {?} */
            const newValue = target[key];
            if (Array.isArray(newValue)) {
                target[key] = ingoreArray ? oldValue : [...newValue, ...oldValue];
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
    v => v != null && isObject(v))).forEach((/**
     * @param {?} v
     * @return {?}
     */
    v => merge(original, v)));
    return original;
}
/**
 * 深度合并对象
 *
 * @param {?} original 原始对象
 * @param {...?} objects 要合并的对象
 * @return {?}
 */
export function deepMerge(original, ...objects) {
    return deepMergeKey(original, false, ...objects);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdXRpbC8iLCJzb3VyY2VzIjpbInNyYy9vdGhlci9vdGhlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQzs7Ozs7Ozs7OztBQVc1QixNQUFNLFVBQVUsT0FBTyxDQUFDLEdBQXFCLEVBQUUsSUFBMEMsRUFBRSxZQUF3QjtJQUNqSCxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQUUsT0FBTyxZQUFZLENBQUM7SUFDbkUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDeEIsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN0RDtJQUNELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7O2NBQ2YsUUFBUSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsT0FBTyxPQUFPLFFBQVEsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0tBQ2xFOztVQUNLLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTTs7Ozs7SUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFFLEdBQUcsQ0FBQztJQUNwRCxPQUFPLE9BQU8sR0FBRyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFDekQsQ0FBQzs7Ozs7O0FBS0QsTUFB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QUMsQ0FBQTtJQUVELE9BQU8sQ0FBQyxNQUFNOzs7O0lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLE9BQU87Ozs7SUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQztJQUUvRSxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDOzs7Ozs7OztBQVFELE1BQU0sVUFBVSxTQUFTLENBQUMsUUFBYSxFQUFFLEdBQUcsT0FBYztJQUN4RCxPQUFPLFlBQVksQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUM7QUFDbkQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHRlbmQgZnJvbSAnZXh0ZW5kJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbi8qKlxuICog57G75Ly8IGBfLmdldGDvvIzmoLnmja4gYHBhdGhgIOiOt+WPluWuieWFqOWAvFxuICoganNwZXJmOiBodHRwczovL2pzcGVyZi5jb20vZXMtZGVlcC1nZXR0dHBzOi8vanNwZXJmLmNvbS9lcy1kZWVwLWdldFxuICpcbiAqIEBwYXJhbSBvYmog5pWw5o2u5rqQ77yM5peg5pWI5pe255u05o6l6L+U5ZueIGBkZWZhdWx0VmFsdWVgIOWAvFxuICogQHBhcmFtIHBhdGgg6IulIGBudWxsYOOAgWBbXWDjgIHmnKrlrprkuYnlj4rmnKrmib7liLDml7bov5Tlm54gYGRlZmF1bHRWYWx1ZWAg5YC8XG4gKiBAcGFyYW0gZGVmYXVsdFZhbHVlIOm7mOiupOWAvFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVlcEdldChvYmo6IE56U2FmZUFueSB8IG51bGwsIHBhdGg6IHN0cmluZyB8IHN0cmluZ1tdIHwgbnVsbCB8IHVuZGVmaW5lZCwgZGVmYXVsdFZhbHVlPzogTnpTYWZlQW55KTogTnpTYWZlQW55IHtcbiAgaWYgKCFvYmogfHwgcGF0aCA9PSBudWxsIHx8IHBhdGgubGVuZ3RoID09PSAwKSByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICBpZiAoIUFycmF5LmlzQXJyYXkocGF0aCkpIHtcbiAgICBwYXRoID0gfnBhdGguaW5kZXhPZignLicpID8gcGF0aC5zcGxpdCgnLicpIDogW3BhdGhdO1xuICB9XG4gIGlmIChwYXRoLmxlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IGNoZWNrT2JqID0gb2JqW3BhdGhbMF1dO1xuICAgIHJldHVybiB0eXBlb2YgY2hlY2tPYmogPT09ICd1bmRlZmluZWQnID8gZGVmYXVsdFZhbHVlIDogY2hlY2tPYmo7XG4gIH1cbiAgY29uc3QgcmVzID0gcGF0aC5yZWR1Y2UoKG8sIGspID0+IChvIHx8IHt9KVtrXSwgb2JqKTtcbiAgcmV0dXJuIHR5cGVvZiByZXMgPT09ICd1bmRlZmluZWQnID8gZGVmYXVsdFZhbHVlIDogcmVzO1xufVxuXG4vKipcbiAqIOWfuuS6jiBbZXh0ZW5kXShodHRwczovL2dpdGh1Yi5jb20vanVzdG1vb24vbm9kZS1leHRlbmQpIOeahOa3seW6puaLt+i0nVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVlcENvcHkob2JqOiBOelNhZmVBbnkpOiBOelNhZmVBbnkge1xuICBjb25zdCByZXN1bHQgPSBleHRlbmQodHJ1ZSwge30sIHsgXzogb2JqIH0pO1xuICByZXR1cm4gcmVzdWx0Ll87XG59XG5cbi8qKlxuICog5aSN5Yi25a2X56ym5Liy5paH5qGj6Iez5Ymq6LS05p2/XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KHZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSk6IHZvaWQgPT4ge1xuICAgIGxldCBjb3B5VGV4dEFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnQgfCBudWxsID0gbnVsbDtcbiAgICB0cnkge1xuICAgICAgY29weVRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZS5oZWlnaHQgPSAnMHB4JztcbiAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgY29weVRleHRBcmVhLnN0eWxlLndpZHRoID0gJzBweCc7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvcHlUZXh0QXJlYSk7XG4gICAgICBjb3B5VGV4dEFyZWEudmFsdWUgPSB2YWx1ZTtcbiAgICAgIGNvcHlUZXh0QXJlYS5zZWxlY3QoKTtcbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XG4gICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKGNvcHlUZXh0QXJlYSAmJiBjb3B5VGV4dEFyZWEucGFyZW50Tm9kZSkge1xuICAgICAgICBjb3B5VGV4dEFyZWEucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjb3B5VGV4dEFyZWEpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICog5rex5bqm5ZCI5bm25a+56LGhXG4gKlxuICogQHBhcmFtIG9yaWdpbmFsIOWOn+Wni+WvueixoVxuICogQHBhcmFtIGluZ29yZUFycmF5IOaYr+WQpuW/veeVpeaVsOe7hO+8jGB0cnVlYCDooajnpLrlv73nlaXmlbDnu4TnmoTlkIjlubbvvIxgZmFsc2VgIOihqOekuuS8muWQiOW5tuaVtOS4quaVsOe7hFxuICogQHBhcmFtIG9iamVjdHMg6KaB5ZCI5bm255qE5a+56LGhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWVwTWVyZ2VLZXkob3JpZ2luYWw6IGFueSwgaW5nb3JlQXJyYXk6IGJvb2xlYW4sIC4uLm9iamVjdHM6IGFueVtdKTogYW55IHtcbiAgaWYgKEFycmF5LmlzQXJyYXkob3JpZ2luYWwpIHx8IHR5cGVvZiBvcmlnaW5hbCAhPT0gJ29iamVjdCcpIHJldHVybiBvcmlnaW5hbDtcblxuICBjb25zdCBpc09iamVjdCA9ICh2OiBhbnkpID0+IHR5cGVvZiB2ID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdiA9PT0gJ2Z1bmN0aW9uJztcblxuICBjb25zdCBtZXJnZSA9ICh0YXJnZXQ6IGFueSwgb2JqOiBOelNhZmVBbnkpID0+IHtcbiAgICBPYmplY3Qua2V5cyhvYmopXG4gICAgICAuZmlsdGVyKGtleSA9PiBrZXkgIT09ICdfX3Byb3RvX18nICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpXG4gICAgICAuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IG9ialtrZXldO1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHRhcmdldFtrZXldO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShuZXdWYWx1ZSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IGluZ29yZUFycmF5ID8gb2xkVmFsdWUgOiBbLi4ubmV3VmFsdWUsIC4uLm9sZFZhbHVlXTtcbiAgICAgICAgfSBlbHNlIGlmIChvbGRWYWx1ZSAhPSBudWxsICYmIGlzT2JqZWN0KG9sZFZhbHVlKSAmJiBuZXdWYWx1ZSAhPSBudWxsICYmIGlzT2JqZWN0KG5ld1ZhbHVlKSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gbWVyZ2UobmV3VmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IGRlZXBDb3B5KG9sZFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICBvYmplY3RzLmZpbHRlcih2ID0+IHYgIT0gbnVsbCAmJiBpc09iamVjdCh2KSkuZm9yRWFjaCh2ID0+IG1lcmdlKG9yaWdpbmFsLCB2KSk7XG5cbiAgcmV0dXJuIG9yaWdpbmFsO1xufVxuXG4vKipcbiAqIOa3seW6puWQiOW5tuWvueixoVxuICpcbiAqIEBwYXJhbSBvcmlnaW5hbCDljp/lp4vlr7nosaFcbiAqIEBwYXJhbSBvYmplY3RzIOimgeWQiOW5tueahOWvueixoVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVlcE1lcmdlKG9yaWdpbmFsOiBhbnksIC4uLm9iamVjdHM6IGFueVtdKTogYW55IHtcbiAgcmV0dXJuIGRlZXBNZXJnZUtleShvcmlnaW5hbCwgZmFsc2UsIC4uLm9iamVjdHMpO1xufVxuIl19