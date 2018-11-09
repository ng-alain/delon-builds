/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        var checkObj = obj[path[0]];
        return typeof checkObj === 'undefined' ? defaultValue : checkObj;
    }
    return path.reduce(function (o, k) { return (o || {})[k]; }, obj) || defaultValue;
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
    return new Promise(function (resolve, reject) {
        /** @type {?} */
        var copyTextArea = /** @type {?} */ (null);
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
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdXRpbC8iLCJzb3VyY2VzIjpbInNyYy9vdGhlci9vdGhlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDOzs7Ozs7Ozs7O0FBVTVCLE1BQU0sa0JBQWtCLEdBQVEsRUFBRSxJQUF1QixFQUFFLFlBQWtCO0lBQzNFLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUM7UUFBRSxPQUFPLFlBQVksQ0FBQztJQUNuRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN4QixJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFLElBQUksQ0FBRSxDQUFDO0tBQ3hEO0lBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTs7UUFDckIsSUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLE9BQU8sT0FBTyxRQUFRLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztLQUNsRTtJQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBWixDQUFZLEVBQUUsR0FBRyxDQUFDLElBQUksWUFBWSxDQUFDO0NBQ2pFOzs7OztBQUVELE1BQU0sbUJBQW1CLEdBQVE7O0lBQy9CLElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDN0MsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDO0NBQ2pCOzs7Ozs7QUFHRCxNQUFNLGVBQWUsS0FBYTtJQUNoQyxPQUFPLElBQUksT0FBTyxDQUFTLFVBQUMsT0FBTyxFQUFFLE1BQU07O1FBQ3pDLElBQUksWUFBWSxxQkFBRyxJQUEyQixFQUFDO1FBQy9DLElBQUk7WUFDRixZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNsRCxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDbEMsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQ2pDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNqQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN4QyxZQUFZLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUMzQixZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDdEIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3QixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEI7Z0JBQVM7WUFDUixJQUFJLFlBQVksSUFBSSxZQUFZLENBQUMsVUFBVSxFQUFFO2dCQUMzQyxZQUFZLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNuRDtTQUNGO0tBQ0YsQ0FBQyxDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXh0ZW5kIGZyb20gJ2V4dGVuZCc7XG5cbi8qKlxuICog57G75Ly8IGBfLmdldGDvvIzmoLnmja4gYHBhdGhgIOiOt+WPluWuieWFqOWAvFxuICoganNwZXJmOiBodHRwczovL2pzcGVyZi5jb20vZXMtZGVlcC1nZXR0dHBzOi8vanNwZXJmLmNvbS9lcy1kZWVwLWdldFxuICpcbiAqIEBwYXJhbSBvYmog5pWw5o2u5rqQ77yM5peg5pWI5pe255u05o6l6L+U5ZueIGBkZWZhdWx0VmFsdWVgIOWAvFxuICogQHBhcmFtIHBhdGgg6IulIGBudWxsYOOAgWBbXWDjgIHmnKrlrprkuYnlj4rmnKrmib7liLDml7bov5Tlm54gYGRlZmF1bHRWYWx1ZWAg5YC8XG4gKiBAcGFyYW0gZGVmYXVsdFZhbHVlIOm7mOiupOWAvFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVlcEdldChvYmo6IGFueSwgcGF0aDogc3RyaW5nIHwgc3RyaW5nW10sIGRlZmF1bHRWYWx1ZT86IGFueSkge1xuICBpZiAoIW9iaiB8fCBwYXRoID09IG51bGwgfHwgcGF0aC5sZW5ndGggPT09IDApIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gIGlmICghQXJyYXkuaXNBcnJheShwYXRoKSkge1xuICAgIHBhdGggPSB+cGF0aC5pbmRleE9mKCcuJykgPyBwYXRoLnNwbGl0KCcuJykgOiBbIHBhdGggXTtcbiAgfVxuICBpZiAocGF0aC5sZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBjaGVja09iaiA9IG9ialtwYXRoWzBdXTtcbiAgICByZXR1cm4gdHlwZW9mIGNoZWNrT2JqID09PSAndW5kZWZpbmVkJyA/IGRlZmF1bHRWYWx1ZSA6IGNoZWNrT2JqO1xuICB9XG4gIHJldHVybiBwYXRoLnJlZHVjZSgobywgaykgPT4gKG8gfHwge30pW2tdLCBvYmopIHx8IGRlZmF1bHRWYWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBDb3B5KG9iajogYW55KSB7XG4gIGNvbnN0IHJlc3VsdCA9IGV4dGVuZCh0cnVlLCB7IH0sIHsgXzogb2JqIH0pO1xuICByZXR1cm4gcmVzdWx0Ll87XG59XG5cbi8qKiDlpI3liLblhoXlrrnoh7PliarotLTmnb8gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KHZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KTogdm9pZCA9PiB7XG4gICAgbGV0IGNvcHlUZXh0QXJlYSA9IG51bGwgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcbiAgICB0cnkge1xuICAgICAgY29weVRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZS5oZWlnaHQgPSAnMHB4JztcbiAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgY29weVRleHRBcmVhLnN0eWxlLndpZHRoID0gJzBweCc7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvcHlUZXh0QXJlYSk7XG4gICAgICBjb3B5VGV4dEFyZWEudmFsdWUgPSB2YWx1ZTtcbiAgICAgIGNvcHlUZXh0QXJlYS5zZWxlY3QoKTtcbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XG4gICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKGNvcHlUZXh0QXJlYSAmJiBjb3B5VGV4dEFyZWEucGFyZW50Tm9kZSkge1xuICAgICAgICBjb3B5VGV4dEFyZWEucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjb3B5VGV4dEFyZWEpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iXX0=