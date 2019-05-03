/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @param {?} obj
 * @return {?}
 */
export function deepCopy(obj) {
    /** @type {?} */
    const result = extend(true, {}, { _: obj });
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
 * @param {?} original
 * @param {?} ingoreArray
 * @param {...?} objects
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
    v => isObject(v))).forEach((/**
     * @param {?} v
     * @return {?}
     */
    v => merge(original, v)));
    return original;
}
/**
 * @param {?} original
 * @param {...?} objects
 * @return {?}
 */
export function deepMerge(original, ...objects) {
    return deepMergeKey(original, false, ...objects);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdXRpbC8iLCJzb3VyY2VzIjpbInNyYy9vdGhlci9vdGhlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDOzs7Ozs7Ozs7O0FBVTVCLE1BQU0sVUFBVSxPQUFPLENBQUMsR0FBZSxFQUFFLElBQTBDLEVBQUUsWUFBa0I7SUFDckcsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLE9BQU8sWUFBWSxDQUFDO0lBQ25FLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3hCLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDdEQ7SUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFOztjQUNmLFFBQVEsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdCLE9BQU8sT0FBTyxRQUFRLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztLQUNsRTs7VUFDSyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU07Ozs7O0lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRSxHQUFHLENBQUM7SUFDcEQsT0FBTyxPQUFPLEdBQUcsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQ3pELENBQUM7Ozs7O0FBRUQsTUFBTSxV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QUE7SUFFRCxPQUFPLENBQUMsTUFBTTs7OztJQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsT0FBTzs7OztJQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDO0lBRWxFLE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxTQUFTLENBQUMsUUFBYSxFQUFFLEdBQUcsT0FBYztJQUN4RCxPQUFPLFlBQVksQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUM7QUFDbkQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHRlbmQgZnJvbSAnZXh0ZW5kJztcblxuLyoqXG4gKiDnsbvkvLwgYF8uZ2V0YO+8jOagueaNriBgcGF0aGAg6I635Y+W5a6J5YWo5YC8XG4gKiBqc3BlcmY6IGh0dHBzOi8vanNwZXJmLmNvbS9lcy1kZWVwLWdldHR0cHM6Ly9qc3BlcmYuY29tL2VzLWRlZXAtZ2V0XG4gKlxuICogQHBhcmFtIG9iaiDmlbDmja7mupDvvIzml6DmlYjml7bnm7TmjqXov5Tlm54gYGRlZmF1bHRWYWx1ZWAg5YC8XG4gKiBAcGFyYW0gcGF0aCDoi6UgYG51bGxg44CBYFtdYOOAgeacquWumuS5ieWPiuacquaJvuWIsOaXtui/lOWbniBgZGVmYXVsdFZhbHVlYCDlgLxcbiAqIEBwYXJhbSBkZWZhdWx0VmFsdWUg6buY6K6k5YC8XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWVwR2V0KG9iajogYW55IHwgbnVsbCwgcGF0aDogc3RyaW5nIHwgc3RyaW5nW10gfCBudWxsIHwgdW5kZWZpbmVkLCBkZWZhdWx0VmFsdWU/OiBhbnkpOiBhbnkge1xuICBpZiAoIW9iaiB8fCBwYXRoID09IG51bGwgfHwgcGF0aC5sZW5ndGggPT09IDApIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gIGlmICghQXJyYXkuaXNBcnJheShwYXRoKSkge1xuICAgIHBhdGggPSB+cGF0aC5pbmRleE9mKCcuJykgPyBwYXRoLnNwbGl0KCcuJykgOiBbcGF0aF07XG4gIH1cbiAgaWYgKHBhdGgubGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3QgY2hlY2tPYmogPSBvYmpbcGF0aFswXV07XG4gICAgcmV0dXJuIHR5cGVvZiBjaGVja09iaiA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0VmFsdWUgOiBjaGVja09iajtcbiAgfVxuICBjb25zdCByZXMgPSBwYXRoLnJlZHVjZSgobywgaykgPT4gKG8gfHwge30pW2tdLCBvYmopO1xuICByZXR1cm4gdHlwZW9mIHJlcyA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0VmFsdWUgOiByZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWVwQ29weShvYmo6IGFueSk6IGFueSB7XG4gIGNvbnN0IHJlc3VsdCA9IGV4dGVuZCh0cnVlLCB7fSwgeyBfOiBvYmogfSk7XG4gIHJldHVybiByZXN1bHQuXztcbn1cblxuLyoqIOWkjeWItuWGheWuueiHs+WJqui0tOadvyAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHkodmFsdWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KFxuICAgIChyZXNvbHZlKTogdm9pZCA9PiB7XG4gICAgICBsZXQgY29weVRleHRBcmVhOiBIVE1MVGV4dEFyZWFFbGVtZW50IHwgbnVsbCA9IG51bGw7XG4gICAgICB0cnkge1xuICAgICAgICBjb3B5VGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICBjb3B5VGV4dEFyZWEuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG4gICAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICBjb3B5VGV4dEFyZWEuc3R5bGUud2lkdGggPSAnMHB4JztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb3B5VGV4dEFyZWEpO1xuICAgICAgICBjb3B5VGV4dEFyZWEudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgY29weVRleHRBcmVhLnNlbGVjdCgpO1xuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChjb3B5VGV4dEFyZWEgJiYgY29weVRleHRBcmVhLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICBjb3B5VGV4dEFyZWEucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjb3B5VGV4dEFyZWEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBNZXJnZUtleShvcmlnaW5hbDogYW55LCBpbmdvcmVBcnJheTogYm9vbGVhbiwgLi4ub2JqZWN0czogYW55W10pOiBhbnkge1xuICBpZiAoQXJyYXkuaXNBcnJheShvcmlnaW5hbCkgfHwgdHlwZW9mIG9yaWdpbmFsICE9PSAnb2JqZWN0JykgcmV0dXJuIG9yaWdpbmFsO1xuXG4gIGNvbnN0IGlzT2JqZWN0ID0gKHY6IGFueSkgPT4gdHlwZW9mIHYgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2ID09PSAnZnVuY3Rpb24nO1xuXG4gIGNvbnN0IG1lcmdlID0gKHRhcmdldDogYW55LCBvYmo6IHt9KSA9PiB7XG4gICAgT2JqZWN0LmtleXMob2JqKVxuICAgICAgLmZpbHRlcihrZXkgPT4ga2V5ICE9PSAnX19wcm90b19fJyAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKVxuICAgICAgLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSBvYmpba2V5XTtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB0YXJnZXRba2V5XTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobmV3VmFsdWUpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBpbmdvcmVBcnJheSA/IG9sZFZhbHVlIDogWy4uLm5ld1ZhbHVlLCAuLi5vbGRWYWx1ZV07XG4gICAgICAgIH0gZWxzZSBpZiAob2xkVmFsdWUgIT0gbnVsbCAmJiBpc09iamVjdChvbGRWYWx1ZSkgJiYgbmV3VmFsdWUgIT0gbnVsbCAmJiBpc09iamVjdChuZXdWYWx1ZSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IG1lcmdlKG5ld1ZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBkZWVwQ29weShvbGRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgb2JqZWN0cy5maWx0ZXIodiA9PiBpc09iamVjdCh2KSkuZm9yRWFjaCh2ID0+IG1lcmdlKG9yaWdpbmFsLCB2KSk7XG5cbiAgcmV0dXJuIG9yaWdpbmFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVlcE1lcmdlKG9yaWdpbmFsOiBhbnksIC4uLm9iamVjdHM6IGFueVtdKTogYW55IHtcbiAgcmV0dXJuIGRlZXBNZXJnZUtleShvcmlnaW5hbCwgZmFsc2UsIC4uLm9iamVjdHMpO1xufVxuIl19