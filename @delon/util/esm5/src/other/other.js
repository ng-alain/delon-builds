/**
 * @fileoverview added by tsickle
 * Generated from: src/other/other.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __read, __spread } from "tslib";
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
 * @param {?} arrayProcessMethod 数组处理方式
 *  - `true` 表示替换新值，不管新值为哪种类型
 *  - `false` 表示会合并整个数组（将旧数据与新数据合并成新数组）
 * @param {...?} objects 要合并的对象
 * @return {?}
 */
export function deepMergeKey(original, arrayProcessMethod) {
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
            var fromValue = obj[key];
            /** @type {?} */
            var toValue = target[key];
            if (Array.isArray(toValue)) {
                target[key] = arrayProcessMethod ? fromValue : __spread(toValue, fromValue);
            }
            else if (fromValue != null && isObject(fromValue) && toValue != null && isObject(toValue)) {
                target[key] = merge(toValue, fromValue);
            }
            else {
                target[key] = deepCopy(fromValue);
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
    return deepMergeKey.apply(void 0, __spread([original, false], objects));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdXRpbC8iLCJzb3VyY2VzIjpbInNyYy9vdGhlci9vdGhlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUM7Ozs7Ozs7Ozs7QUFXNUIsTUFBTSxVQUFVLE9BQU8sQ0FBQyxHQUFxQixFQUFFLElBQTBDLEVBQUUsWUFBd0I7SUFDakgsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLE9BQU8sWUFBWSxDQUFDO0lBQ25FLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3hCLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDdEQ7SUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFOztZQUNmLFFBQVEsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdCLE9BQU8sT0FBTyxRQUFRLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztLQUNsRTs7UUFDSyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU07Ozs7O0lBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQVosQ0FBWSxHQUFFLEdBQUcsQ0FBQztJQUNwRCxPQUFPLE9BQU8sR0FBRyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFDekQsQ0FBQzs7Ozs7O0FBS0QsTUFBTSxVQUFVLFFBQVEsQ0FBQyxHQUFjOztRQUMvQixNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDM0MsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLENBQUM7Ozs7OztBQUtELE1BQU0sVUFBVSxJQUFJLENBQUMsS0FBYTtJQUNoQyxPQUFPLElBQUksT0FBTzs7OztJQUFTLFVBQUMsT0FBTzs7WUFDN0IsWUFBWSxHQUErQixJQUFJO1FBQ25ELElBQUk7WUFDRixZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNsRCxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDbEMsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQ2pDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNqQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN4QyxZQUFZLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUMzQixZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDdEIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3QixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEI7Z0JBQVM7WUFDUixJQUFJLFlBQVksSUFBSSxZQUFZLENBQUMsVUFBVSxFQUFFO2dCQUMzQyxZQUFZLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNuRDtTQUNGO0lBQ0gsQ0FBQyxFQUFDLENBQUM7QUFDTCxDQUFDOzs7Ozs7Ozs7OztBQVdELE1BQU0sVUFBVSxZQUFZLENBQUMsUUFBYSxFQUFFLGtCQUEyQjtJQUFFLGlCQUFpQjtTQUFqQixVQUFpQixFQUFqQixxQkFBaUIsRUFBakIsSUFBaUI7UUFBakIsZ0NBQWlCOztJQUN4RixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksT0FBTyxRQUFRLEtBQUssUUFBUTtRQUFFLE9BQU8sUUFBUSxDQUFDOztRQUV2RSxRQUFROzs7O0lBQUcsVUFBQyxDQUFNLElBQUssT0FBQSxPQUFPLENBQUMsS0FBSyxRQUFRLElBQUksT0FBTyxDQUFDLEtBQUssVUFBVSxFQUFoRCxDQUFnRCxDQUFBOztRQUV2RSxLQUFLOzs7OztJQUFHLFVBQUMsTUFBVyxFQUFFLEdBQWM7UUFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7YUFDYixNQUFNOzs7O1FBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLEtBQUssV0FBVyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQXJFLENBQXFFLEVBQUM7YUFDcEYsT0FBTzs7OztRQUFDLFVBQUEsR0FBRzs7Z0JBQ0osU0FBUyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUM7O2dCQUNwQixPQUFPLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUMzQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQzFCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBSyxPQUFPLEVBQUssU0FBUyxDQUFDLENBQUM7YUFDM0U7aUJBQU0sSUFBSSxTQUFTLElBQUksSUFBSSxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxPQUFPLElBQUksSUFBSSxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDM0YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFDekM7aUJBQU07Z0JBQ0wsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNuQztRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0wsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQyxDQUFBO0lBRUQsT0FBTyxDQUFDLE1BQU07Ozs7SUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsSUFBSSxJQUFJLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUF4QixDQUF3QixFQUFDLENBQUMsT0FBTzs7OztJQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBbEIsQ0FBa0IsRUFBQyxDQUFDO0lBRS9FLE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUM7Ozs7Ozs7O0FBUUQsTUFBTSxVQUFVLFNBQVMsQ0FBQyxRQUFhO0lBQUUsaUJBQWlCO1NBQWpCLFVBQWlCLEVBQWpCLHFCQUFpQixFQUFqQixJQUFpQjtRQUFqQixnQ0FBaUI7O0lBQ3hELE9BQU8sWUFBWSx5QkFBQyxRQUFRLEVBQUUsS0FBSyxHQUFLLE9BQU8sR0FBRTtBQUNuRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4dGVuZCBmcm9tICdleHRlbmQnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuLyoqXG4gKiDnsbvkvLwgYF8uZ2V0YO+8jOagueaNriBgcGF0aGAg6I635Y+W5a6J5YWo5YC8XG4gKiBqc3BlcmY6IGh0dHBzOi8vanNwZXJmLmNvbS9lcy1kZWVwLWdldHR0cHM6Ly9qc3BlcmYuY29tL2VzLWRlZXAtZ2V0XG4gKlxuICogQHBhcmFtIG9iaiDmlbDmja7mupDvvIzml6DmlYjml7bnm7TmjqXov5Tlm54gYGRlZmF1bHRWYWx1ZWAg5YC8XG4gKiBAcGFyYW0gcGF0aCDoi6UgYG51bGxg44CBYFtdYOOAgeacquWumuS5ieWPiuacquaJvuWIsOaXtui/lOWbniBgZGVmYXVsdFZhbHVlYCDlgLxcbiAqIEBwYXJhbSBkZWZhdWx0VmFsdWUg6buY6K6k5YC8XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWVwR2V0KG9iajogTnpTYWZlQW55IHwgbnVsbCwgcGF0aDogc3RyaW5nIHwgc3RyaW5nW10gfCBudWxsIHwgdW5kZWZpbmVkLCBkZWZhdWx0VmFsdWU/OiBOelNhZmVBbnkpOiBOelNhZmVBbnkge1xuICBpZiAoIW9iaiB8fCBwYXRoID09IG51bGwgfHwgcGF0aC5sZW5ndGggPT09IDApIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gIGlmICghQXJyYXkuaXNBcnJheShwYXRoKSkge1xuICAgIHBhdGggPSB+cGF0aC5pbmRleE9mKCcuJykgPyBwYXRoLnNwbGl0KCcuJykgOiBbcGF0aF07XG4gIH1cbiAgaWYgKHBhdGgubGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3QgY2hlY2tPYmogPSBvYmpbcGF0aFswXV07XG4gICAgcmV0dXJuIHR5cGVvZiBjaGVja09iaiA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0VmFsdWUgOiBjaGVja09iajtcbiAgfVxuICBjb25zdCByZXMgPSBwYXRoLnJlZHVjZSgobywgaykgPT4gKG8gfHwge30pW2tdLCBvYmopO1xuICByZXR1cm4gdHlwZW9mIHJlcyA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0VmFsdWUgOiByZXM7XG59XG5cbi8qKlxuICog5Z+65LqOIFtleHRlbmRdKGh0dHBzOi8vZ2l0aHViLmNvbS9qdXN0bW9vbi9ub2RlLWV4dGVuZCkg55qE5rex5bqm5ou36LSdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWVwQ29weShvYmo6IE56U2FmZUFueSk6IE56U2FmZUFueSB7XG4gIGNvbnN0IHJlc3VsdCA9IGV4dGVuZCh0cnVlLCB7fSwgeyBfOiBvYmogfSk7XG4gIHJldHVybiByZXN1bHQuXztcbn1cblxuLyoqXG4gKiDlpI3liLblrZfnrKbkuLLmlofmoaPoh7PliarotLTmnb9cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHkodmFsdWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlKTogdm9pZCA9PiB7XG4gICAgbGV0IGNvcHlUZXh0QXJlYTogSFRNTFRleHRBcmVhRWxlbWVudCB8IG51bGwgPSBudWxsO1xuICAgIHRyeSB7XG4gICAgICBjb3B5VGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgY29weVRleHRBcmVhLnN0eWxlLmhlaWdodCA9ICcwcHgnO1xuICAgICAgY29weVRleHRBcmVhLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICBjb3B5VGV4dEFyZWEuc3R5bGUud2lkdGggPSAnMHB4JztcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29weVRleHRBcmVhKTtcbiAgICAgIGNvcHlUZXh0QXJlYS52YWx1ZSA9IHZhbHVlO1xuICAgICAgY29weVRleHRBcmVhLnNlbGVjdCgpO1xuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoY29weVRleHRBcmVhICYmIGNvcHlUZXh0QXJlYS5wYXJlbnROb2RlKSB7XG4gICAgICAgIGNvcHlUZXh0QXJlYS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNvcHlUZXh0QXJlYSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiDmt7HluqblkIjlubblr7nosaFcbiAqXG4gKiBAcGFyYW0gb3JpZ2luYWwg5Y6f5aeL5a+56LGhXG4gKiBAcGFyYW0gYXJyYXlQcm9jZXNzTWV0aG9kIOaVsOe7hOWkhOeQhuaWueW8j1xuICogIC0gYHRydWVgIOihqOekuuabv+aNouaWsOWAvO+8jOS4jeeuoeaWsOWAvOS4uuWTquenjeexu+Wei1xuICogIC0gYGZhbHNlYCDooajnpLrkvJrlkIjlubbmlbTkuKrmlbDnu4TvvIjlsIbml6fmlbDmja7kuI7mlrDmlbDmja7lkIjlubbmiJDmlrDmlbDnu4TvvIlcbiAqIEBwYXJhbSBvYmplY3RzIOimgeWQiOW5tueahOWvueixoVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVlcE1lcmdlS2V5KG9yaWdpbmFsOiBhbnksIGFycmF5UHJvY2Vzc01ldGhvZDogYm9vbGVhbiwgLi4ub2JqZWN0czogYW55W10pOiBhbnkge1xuICBpZiAoQXJyYXkuaXNBcnJheShvcmlnaW5hbCkgfHwgdHlwZW9mIG9yaWdpbmFsICE9PSAnb2JqZWN0JykgcmV0dXJuIG9yaWdpbmFsO1xuXG4gIGNvbnN0IGlzT2JqZWN0ID0gKHY6IGFueSkgPT4gdHlwZW9mIHYgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2ID09PSAnZnVuY3Rpb24nO1xuXG4gIGNvbnN0IG1lcmdlID0gKHRhcmdldDogYW55LCBvYmo6IE56U2FmZUFueSkgPT4ge1xuICAgIE9iamVjdC5rZXlzKG9iailcbiAgICAgIC5maWx0ZXIoa2V5ID0+IGtleSAhPT0gJ19fcHJvdG9fXycgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSlcbiAgICAgIC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGNvbnN0IGZyb21WYWx1ZSA9IG9ialtrZXldO1xuICAgICAgICBjb25zdCB0b1ZhbHVlID0gdGFyZ2V0W2tleV07XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRvVmFsdWUpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBhcnJheVByb2Nlc3NNZXRob2QgPyBmcm9tVmFsdWUgOiBbLi4udG9WYWx1ZSwgLi4uZnJvbVZhbHVlXTtcbiAgICAgICAgfSBlbHNlIGlmIChmcm9tVmFsdWUgIT0gbnVsbCAmJiBpc09iamVjdChmcm9tVmFsdWUpICYmIHRvVmFsdWUgIT0gbnVsbCAmJiBpc09iamVjdCh0b1ZhbHVlKSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gbWVyZ2UodG9WYWx1ZSwgZnJvbVZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IGRlZXBDb3B5KGZyb21WYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgb2JqZWN0cy5maWx0ZXIodiA9PiB2ICE9IG51bGwgJiYgaXNPYmplY3QodikpLmZvckVhY2godiA9PiBtZXJnZShvcmlnaW5hbCwgdikpO1xuXG4gIHJldHVybiBvcmlnaW5hbDtcbn1cblxuLyoqXG4gKiDmt7HluqblkIjlubblr7nosaFcbiAqXG4gKiBAcGFyYW0gb3JpZ2luYWwg5Y6f5aeL5a+56LGhXG4gKiBAcGFyYW0gb2JqZWN0cyDopoHlkIjlubbnmoTlr7nosaFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZXBNZXJnZShvcmlnaW5hbDogYW55LCAuLi5vYmplY3RzOiBhbnlbXSk6IGFueSB7XG4gIHJldHVybiBkZWVwTWVyZ2VLZXkob3JpZ2luYWwsIGZhbHNlLCAuLi5vYmplY3RzKTtcbn1cbiJdfQ==