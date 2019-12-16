/**
 * @fileoverview added by tsickle
 * Generated from: src/other/other.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * 基于 [extend](https://github.com/justmoon/node-extend) 的深度拷贝
 * @param {?} obj
 * @return {?}
 */
export function deepCopy(obj) {
    /** @type {?} */
    var result = extend(true, {}, { _: obj });
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
 * 深度合并对象
 *
 * @param {?} original 原始对象
 * @param {?} ingoreArray 是否忽略数组，`true` 表示忽略数组的合并，`false` 表示会合并整个数组
 * @param {...?} objects 要合并的对象
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
            if (Array.isArray(newValue)) {
                target[key] = ingoreArray ? oldValue : tslib_1.__spread(newValue, oldValue);
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
    function (v) { return v != null && isObject(v); })).forEach((/**
     * @param {?} v
     * @return {?}
     */
    function (v) { return merge(original, v); }));
    return original;
}
/**
 * 深度合并对象
 *
 * @param {?} original 原始对象
 * @param {...?} objects 要合并的对象
 * @return {?}
 */
export function deepMerge(original) {
    var objects = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        objects[_i - 1] = arguments[_i];
    }
    return deepMergeKey.apply(void 0, tslib_1.__spread([original, false], objects));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdXRpbC8iLCJzb3VyY2VzIjpbInNyYy9vdGhlci9vdGhlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUM7Ozs7Ozs7Ozs7QUFVNUIsTUFBTSxVQUFVLE9BQU8sQ0FBQyxHQUFlLEVBQUUsSUFBMEMsRUFBRSxZQUFrQjtJQUNyRyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQUUsT0FBTyxZQUFZLENBQUM7SUFDbkUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDeEIsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN0RDtJQUNELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7O1lBQ2YsUUFBUSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsT0FBTyxPQUFPLFFBQVEsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0tBQ2xFOztRQUNLLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTTs7Ozs7SUFBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBWixDQUFZLEdBQUUsR0FBRyxDQUFDO0lBQ3BELE9BQU8sT0FBTyxHQUFHLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUN6RCxDQUFDOzs7Ozs7QUFL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Q0FBQztRQUNMLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUMsQ0FBQTtJQUVELE9BQU8sQ0FBQyxNQUFNOzs7O0lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLElBQUksSUFBSSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBeEIsQ0FBd0IsRUFBQyxDQUFDLE9BQU87Ozs7SUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQWxCLENBQWtCLEVBQUMsQ0FBQztJQUUvRSxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDOzs7Ozs7OztBQVFELE1BQU0sVUFBVSxTQUFTLENBQUMsUUFBYTtJQUFFLGlCQUFpQjtTQUFqQixVQUFpQixFQUFqQixxQkFBaUIsRUFBakIsSUFBaUI7UUFBakIsZ0NBQWlCOztJQUN4RCxPQUFPLFlBQVksaUNBQUMsUUFBUSxFQUFFLEtBQUssR0FBSyxPQUFPLEdBQUU7QUFDbkQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHRlbmQgZnJvbSAnZXh0ZW5kJztcblxuLyoqXG4gKiDnsbvkvLwgYF8uZ2V0YO+8jOagueaNriBgcGF0aGAg6I635Y+W5a6J5YWo5YC8XG4gKiBqc3BlcmY6IGh0dHBzOi8vanNwZXJmLmNvbS9lcy1kZWVwLWdldHR0cHM6Ly9qc3BlcmYuY29tL2VzLWRlZXAtZ2V0XG4gKlxuICogQHBhcmFtIG9iaiDmlbDmja7mupDvvIzml6DmlYjml7bnm7TmjqXov5Tlm54gYGRlZmF1bHRWYWx1ZWAg5YC8XG4gKiBAcGFyYW0gcGF0aCDoi6UgYG51bGxg44CBYFtdYOOAgeacquWumuS5ieWPiuacquaJvuWIsOaXtui/lOWbniBgZGVmYXVsdFZhbHVlYCDlgLxcbiAqIEBwYXJhbSBkZWZhdWx0VmFsdWUg6buY6K6k5YC8XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWVwR2V0KG9iajogYW55IHwgbnVsbCwgcGF0aDogc3RyaW5nIHwgc3RyaW5nW10gfCBudWxsIHwgdW5kZWZpbmVkLCBkZWZhdWx0VmFsdWU/OiBhbnkpOiBhbnkge1xuICBpZiAoIW9iaiB8fCBwYXRoID09IG51bGwgfHwgcGF0aC5sZW5ndGggPT09IDApIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gIGlmICghQXJyYXkuaXNBcnJheShwYXRoKSkge1xuICAgIHBhdGggPSB+cGF0aC5pbmRleE9mKCcuJykgPyBwYXRoLnNwbGl0KCcuJykgOiBbcGF0aF07XG4gIH1cbiAgaWYgKHBhdGgubGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3QgY2hlY2tPYmogPSBvYmpbcGF0aFswXV07XG4gICAgcmV0dXJuIHR5cGVvZiBjaGVja09iaiA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0VmFsdWUgOiBjaGVja09iajtcbiAgfVxuICBjb25zdCByZXMgPSBwYXRoLnJlZHVjZSgobywgaykgPT4gKG8gfHwge30pW2tdLCBvYmopO1xuICByZXR1cm4gdHlwZW9mIHJlcyA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0VmFsdWUgOiByZXM7XG59XG5cbi8qKlxuICog5Z+65LqOIFtleHRlbmRdKGh0dHBzOi8vZ2l0aHViLmNvbS9qdXN0bW9vbi9ub2RlLWV4dGVuZCkg55qE5rex5bqm5ou36LSdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWVwQ29weShvYmo6IGFueSk6IGFueSB7XG4gIGNvbnN0IHJlc3VsdCA9IGV4dGVuZCh0cnVlLCB7fSwgeyBfOiBvYmogfSk7XG4gIHJldHVybiByZXN1bHQuXztcbn1cblxuLyoqXG4gKiDlpI3liLblrZfnrKbkuLLmlofmoaPoh7PliarotLTmnb9cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHkodmFsdWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlKTogdm9pZCA9PiB7XG4gICAgbGV0IGNvcHlUZXh0QXJlYTogSFRNTFRleHRBcmVhRWxlbWVudCB8IG51bGwgPSBudWxsO1xuICAgIHRyeSB7XG4gICAgICBjb3B5VGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgY29weVRleHRBcmVhLnN0eWxlLmhlaWdodCA9ICcwcHgnO1xuICAgICAgY29weVRleHRBcmVhLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICBjb3B5VGV4dEFyZWEuc3R5bGUud2lkdGggPSAnMHB4JztcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29weVRleHRBcmVhKTtcbiAgICAgIGNvcHlUZXh0QXJlYS52YWx1ZSA9IHZhbHVlO1xuICAgICAgY29weVRleHRBcmVhLnNlbGVjdCgpO1xuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoY29weVRleHRBcmVhICYmIGNvcHlUZXh0QXJlYS5wYXJlbnROb2RlKSB7XG4gICAgICAgIGNvcHlUZXh0QXJlYS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNvcHlUZXh0QXJlYSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiDmt7HluqblkIjlubblr7nosaFcbiAqXG4gKiBAcGFyYW0gb3JpZ2luYWwg5Y6f5aeL5a+56LGhXG4gKiBAcGFyYW0gaW5nb3JlQXJyYXkg5piv5ZCm5b+955Wl5pWw57uE77yMYHRydWVgIOihqOekuuW/veeVpeaVsOe7hOeahOWQiOW5tu+8jGBmYWxzZWAg6KGo56S65Lya5ZCI5bm25pW05Liq5pWw57uEXG4gKiBAcGFyYW0gb2JqZWN0cyDopoHlkIjlubbnmoTlr7nosaFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZXBNZXJnZUtleShvcmlnaW5hbDogYW55LCBpbmdvcmVBcnJheTogYm9vbGVhbiwgLi4ub2JqZWN0czogYW55W10pOiBhbnkge1xuICBpZiAoQXJyYXkuaXNBcnJheShvcmlnaW5hbCkgfHwgdHlwZW9mIG9yaWdpbmFsICE9PSAnb2JqZWN0JykgcmV0dXJuIG9yaWdpbmFsO1xuXG4gIGNvbnN0IGlzT2JqZWN0ID0gKHY6IGFueSkgPT4gdHlwZW9mIHYgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2ID09PSAnZnVuY3Rpb24nO1xuXG4gIGNvbnN0IG1lcmdlID0gKHRhcmdldDogYW55LCBvYmo6IHt9KSA9PiB7XG4gICAgT2JqZWN0LmtleXMob2JqKVxuICAgICAgLmZpbHRlcihrZXkgPT4ga2V5ICE9PSAnX19wcm90b19fJyAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKVxuICAgICAgLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSBvYmpba2V5XTtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB0YXJnZXRba2V5XTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobmV3VmFsdWUpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBpbmdvcmVBcnJheSA/IG9sZFZhbHVlIDogWy4uLm5ld1ZhbHVlLCAuLi5vbGRWYWx1ZV07XG4gICAgICAgIH0gZWxzZSBpZiAob2xkVmFsdWUgIT0gbnVsbCAmJiBpc09iamVjdChvbGRWYWx1ZSkgJiYgbmV3VmFsdWUgIT0gbnVsbCAmJiBpc09iamVjdChuZXdWYWx1ZSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IG1lcmdlKG5ld1ZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBkZWVwQ29weShvbGRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgb2JqZWN0cy5maWx0ZXIodiA9PiB2ICE9IG51bGwgJiYgaXNPYmplY3QodikpLmZvckVhY2godiA9PiBtZXJnZShvcmlnaW5hbCwgdikpO1xuXG4gIHJldHVybiBvcmlnaW5hbDtcbn1cblxuLyoqXG4gKiDmt7HluqblkIjlubblr7nosaFcbiAqXG4gKiBAcGFyYW0gb3JpZ2luYWwg5Y6f5aeL5a+56LGhXG4gKiBAcGFyYW0gb2JqZWN0cyDopoHlkIjlubbnmoTlr7nosaFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZXBNZXJnZShvcmlnaW5hbDogYW55LCAuLi5vYmplY3RzOiBhbnlbXSk6IGFueSB7XG4gIHJldHVybiBkZWVwTWVyZ2VLZXkob3JpZ2luYWwsIGZhbHNlLCAuLi5vYmplY3RzKTtcbn1cbiJdfQ==