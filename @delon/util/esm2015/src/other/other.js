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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdXRpbC8iLCJzb3VyY2VzIjpbInNyYy9vdGhlci9vdGhlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQzs7Ozs7Ozs7OztBQVU1QixNQUFNLFVBQVUsT0FBTyxDQUFDLEdBQWUsRUFBRSxJQUEwQyxFQUFFLFlBQWtCO0lBQ3JHLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUM7UUFBRSxPQUFPLFlBQVksQ0FBQztJQUNuRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN4QixJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3REO0lBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTs7Y0FDZixRQUFRLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QixPQUFPLE9BQU8sUUFBUSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7S0FDbEU7O1VBQ0ssR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNOzs7OztJQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUUsR0FBRyxDQUFDO0lBQ3BELE9BQU8sT0FBTyxHQUFHLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUN6RCxDQUFDOzs7Ozs7QUFLRCxNQUFN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QyxDQUFBO0lBRUQsT0FBTyxDQUFDLE1BQU07Ozs7SUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsT0FBTzs7OztJQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDO0lBRS9FLE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUM7Ozs7Ozs7O0FBUUQsTUFBTSxVQUFVLFNBQVMsQ0FBQyxRQUFhLEVBQUUsR0FBRyxPQUFjO0lBQ3hELE9BQU8sWUFBWSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQztBQUNuRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4dGVuZCBmcm9tICdleHRlbmQnO1xuXG4vKipcbiAqIOexu+S8vCBgXy5nZXRg77yM5qC55o2uIGBwYXRoYCDojrflj5blronlhajlgLxcbiAqIGpzcGVyZjogaHR0cHM6Ly9qc3BlcmYuY29tL2VzLWRlZXAtZ2V0dHRwczovL2pzcGVyZi5jb20vZXMtZGVlcC1nZXRcbiAqXG4gKiBAcGFyYW0gb2JqIOaVsOaNrua6kO+8jOaXoOaViOaXtuebtOaOpei/lOWbniBgZGVmYXVsdFZhbHVlYCDlgLxcbiAqIEBwYXJhbSBwYXRoIOiLpSBgbnVsbGDjgIFgW11g44CB5pyq5a6a5LmJ5Y+K5pyq5om+5Yiw5pe26L+U5ZueIGBkZWZhdWx0VmFsdWVgIOWAvFxuICogQHBhcmFtIGRlZmF1bHRWYWx1ZSDpu5jorqTlgLxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZXBHZXQob2JqOiBhbnkgfCBudWxsLCBwYXRoOiBzdHJpbmcgfCBzdHJpbmdbXSB8IG51bGwgfCB1bmRlZmluZWQsIGRlZmF1bHRWYWx1ZT86IGFueSk6IGFueSB7XG4gIGlmICghb2JqIHx8IHBhdGggPT0gbnVsbCB8fCBwYXRoLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHBhdGgpKSB7XG4gICAgcGF0aCA9IH5wYXRoLmluZGV4T2YoJy4nKSA/IHBhdGguc3BsaXQoJy4nKSA6IFtwYXRoXTtcbiAgfVxuICBpZiAocGF0aC5sZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBjaGVja09iaiA9IG9ialtwYXRoWzBdXTtcbiAgICByZXR1cm4gdHlwZW9mIGNoZWNrT2JqID09PSAndW5kZWZpbmVkJyA/IGRlZmF1bHRWYWx1ZSA6IGNoZWNrT2JqO1xuICB9XG4gIGNvbnN0IHJlcyA9IHBhdGgucmVkdWNlKChvLCBrKSA9PiAobyB8fCB7fSlba10sIG9iaik7XG4gIHJldHVybiB0eXBlb2YgcmVzID09PSAndW5kZWZpbmVkJyA/IGRlZmF1bHRWYWx1ZSA6IHJlcztcbn1cblxuLyoqXG4gKiDln7rkuo4gW2V4dGVuZF0oaHR0cHM6Ly9naXRodWIuY29tL2p1c3Rtb29uL25vZGUtZXh0ZW5kKSDnmoTmt7Hluqbmi7fotJ1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZXBDb3B5KG9iajogYW55KTogYW55IHtcbiAgY29uc3QgcmVzdWx0ID0gZXh0ZW5kKHRydWUsIHt9LCB7IF86IG9iaiB9KTtcbiAgcmV0dXJuIHJlc3VsdC5fO1xufVxuXG4vKipcbiAqIOWkjeWItuWtl+espuS4suaWh+aho+iHs+WJqui0tOadv1xuICovXG5leHBvcnQgZnVuY3Rpb24gY29weSh2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUpOiB2b2lkID0+IHtcbiAgICBsZXQgY29weVRleHRBcmVhOiBIVE1MVGV4dEFyZWFFbGVtZW50IHwgbnVsbCA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgIGNvcHlUZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICBjb3B5VGV4dEFyZWEuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG4gICAgICBjb3B5VGV4dEFyZWEuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZS53aWR0aCA9ICcwcHgnO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb3B5VGV4dEFyZWEpO1xuICAgICAgY29weVRleHRBcmVhLnZhbHVlID0gdmFsdWU7XG4gICAgICBjb3B5VGV4dEFyZWEuc2VsZWN0KCk7XG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChjb3B5VGV4dEFyZWEgJiYgY29weVRleHRBcmVhLnBhcmVudE5vZGUpIHtcbiAgICAgICAgY29weVRleHRBcmVhLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY29weVRleHRBcmVhKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIOa3seW6puWQiOW5tuWvueixoVxuICpcbiAqIEBwYXJhbSBvcmlnaW5hbCDljp/lp4vlr7nosaFcbiAqIEBwYXJhbSBpbmdvcmVBcnJheSDmmK/lkKblv73nlaXmlbDnu4TvvIxgdHJ1ZWAg6KGo56S65b+955Wl5pWw57uE55qE5ZCI5bm277yMYGZhbHNlYCDooajnpLrkvJrlkIjlubbmlbTkuKrmlbDnu4RcbiAqIEBwYXJhbSBvYmplY3RzIOimgeWQiOW5tueahOWvueixoVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVlcE1lcmdlS2V5KG9yaWdpbmFsOiBhbnksIGluZ29yZUFycmF5OiBib29sZWFuLCAuLi5vYmplY3RzOiBhbnlbXSk6IGFueSB7XG4gIGlmIChBcnJheS5pc0FycmF5KG9yaWdpbmFsKSB8fCB0eXBlb2Ygb3JpZ2luYWwgIT09ICdvYmplY3QnKSByZXR1cm4gb3JpZ2luYWw7XG5cbiAgY29uc3QgaXNPYmplY3QgPSAodjogYW55KSA9PiB0eXBlb2YgdiA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHYgPT09ICdmdW5jdGlvbic7XG5cbiAgY29uc3QgbWVyZ2UgPSAodGFyZ2V0OiBhbnksIG9iajoge30pID0+IHtcbiAgICBPYmplY3Qua2V5cyhvYmopXG4gICAgICAuZmlsdGVyKGtleSA9PiBrZXkgIT09ICdfX3Byb3RvX18nICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpXG4gICAgICAuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IG9ialtrZXldO1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHRhcmdldFtrZXldO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShuZXdWYWx1ZSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IGluZ29yZUFycmF5ID8gb2xkVmFsdWUgOiBbLi4ubmV3VmFsdWUsIC4uLm9sZFZhbHVlXTtcbiAgICAgICAgfSBlbHNlIGlmIChvbGRWYWx1ZSAhPSBudWxsICYmIGlzT2JqZWN0KG9sZFZhbHVlKSAmJiBuZXdWYWx1ZSAhPSBudWxsICYmIGlzT2JqZWN0KG5ld1ZhbHVlKSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gbWVyZ2UobmV3VmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IGRlZXBDb3B5KG9sZFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICBvYmplY3RzLmZpbHRlcih2ID0+IHYgIT0gbnVsbCAmJiBpc09iamVjdCh2KSkuZm9yRWFjaCh2ID0+IG1lcmdlKG9yaWdpbmFsLCB2KSk7XG5cbiAgcmV0dXJuIG9yaWdpbmFsO1xufVxuXG4vKipcbiAqIOa3seW6puWQiOW5tuWvueixoVxuICpcbiAqIEBwYXJhbSBvcmlnaW5hbCDljp/lp4vlr7nosaFcbiAqIEBwYXJhbSBvYmplY3RzIOimgeWQiOW5tueahOWvueixoVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVlcE1lcmdlKG9yaWdpbmFsOiBhbnksIC4uLm9iamVjdHM6IGFueVtdKTogYW55IHtcbiAgcmV0dXJuIGRlZXBNZXJnZUtleShvcmlnaW5hbCwgZmFsc2UsIC4uLm9iamVjdHMpO1xufVxuIl19