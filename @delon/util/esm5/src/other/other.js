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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdXRpbC8iLCJzb3VyY2VzIjpbInNyYy9vdGhlci9vdGhlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDOzs7Ozs7Ozs7O0FBVTVCLE1BQU0sa0JBQWtCLEdBQVEsRUFBRSxJQUF1QixFQUFFLFlBQWtCO0lBQzNFLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUM7UUFBRSxPQUFPLFlBQVksQ0FBQztJQUNuRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN4QixJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFLElBQUksQ0FBRSxDQUFDO0tBQ3hEO0lBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTs7UUFDckIsSUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLE9BQU8sT0FBTyxRQUFRLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztLQUNsRTtJQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBWixDQUFZLEVBQUUsR0FBRyxDQUFDLElBQUksWUFBWSxDQUFDO0NBQ2pFOzs7OztBQUVELE1BQU0sbUJBQW1CLEdBQVE7O0lBQy9CLElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDN0MsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDO0NBQ2pCOzs7Ozs7QUFHRCxNQUFNLGVBQWUsS0FBYTtJQUNoQyxPQUFPLElBQUksT0FBTyxDQUFTLFVBQUMsT0FBTyxFQUFFLE1BQU07O1FBQ3pDLElBQUksWUFBWSxxQkFBRyxJQUEyQixFQUFDO1FBQy9DLElBQUk7WUFDRixZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNsRCxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDbEMsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQ2pDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNqQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN4QyxZQUFZLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUMzQixZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDdEIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3QixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEI7Z0JBQVM7WUFDUixJQUFJLFlBQVksSUFBSSxZQUFZLENBQUMsVUFBVSxFQUFFO2dCQUMzQyxZQUFZLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNuRDtTQUNGO0tBQ0YsQ0FBQyxDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXh0ZW5kIGZyb20gJ2V4dGVuZCc7XHJcblxyXG4vKipcclxuICog57G75Ly8IGBfLmdldGDvvIzmoLnmja4gYHBhdGhgIOiOt+WPluWuieWFqOWAvFxyXG4gKiBqc3BlcmY6IGh0dHBzOi8vanNwZXJmLmNvbS9lcy1kZWVwLWdldHR0cHM6Ly9qc3BlcmYuY29tL2VzLWRlZXAtZ2V0XHJcbiAqXHJcbiAqIEBwYXJhbSBvYmog5pWw5o2u5rqQ77yM5peg5pWI5pe255u05o6l6L+U5ZueIGBkZWZhdWx0VmFsdWVgIOWAvFxyXG4gKiBAcGFyYW0gcGF0aCDoi6UgYG51bGxg44CBYFtdYOOAgeacquWumuS5ieWPiuacquaJvuWIsOaXtui/lOWbniBgZGVmYXVsdFZhbHVlYCDlgLxcclxuICogQHBhcmFtIGRlZmF1bHRWYWx1ZSDpu5jorqTlgLxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWVwR2V0KG9iajogYW55LCBwYXRoOiBzdHJpbmcgfCBzdHJpbmdbXSwgZGVmYXVsdFZhbHVlPzogYW55KSB7XHJcbiAgaWYgKCFvYmogfHwgcGF0aCA9PSBudWxsIHx8IHBhdGgubGVuZ3RoID09PSAwKSByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG4gIGlmICghQXJyYXkuaXNBcnJheShwYXRoKSkge1xyXG4gICAgcGF0aCA9IH5wYXRoLmluZGV4T2YoJy4nKSA/IHBhdGguc3BsaXQoJy4nKSA6IFsgcGF0aCBdO1xyXG4gIH1cclxuICBpZiAocGF0aC5sZW5ndGggPT09IDEpIHtcclxuICAgIGNvbnN0IGNoZWNrT2JqID0gb2JqW3BhdGhbMF1dO1xyXG4gICAgcmV0dXJuIHR5cGVvZiBjaGVja09iaiA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0VmFsdWUgOiBjaGVja09iajtcclxuICB9XHJcbiAgcmV0dXJuIHBhdGgucmVkdWNlKChvLCBrKSA9PiAobyB8fCB7fSlba10sIG9iaikgfHwgZGVmYXVsdFZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVlcENvcHkob2JqOiBhbnkpIHtcclxuICBjb25zdCByZXN1bHQgPSBleHRlbmQodHJ1ZSwgeyB9LCB7IF86IG9iaiB9KTtcclxuICByZXR1cm4gcmVzdWx0Ll87XHJcbn1cclxuXHJcbi8qKiDlpI3liLblhoXlrrnoh7PliarotLTmnb8gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvcHkodmFsdWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCk6IHZvaWQgPT4ge1xyXG4gICAgbGV0IGNvcHlUZXh0QXJlYSA9IG51bGwgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvcHlUZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZS5oZWlnaHQgPSAnMHB4JztcclxuICAgICAgY29weVRleHRBcmVhLnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZS53aWR0aCA9ICcwcHgnO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvcHlUZXh0QXJlYSk7XHJcbiAgICAgIGNvcHlUZXh0QXJlYS52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICBjb3B5VGV4dEFyZWEuc2VsZWN0KCk7XHJcbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XHJcbiAgICAgIHJlc29sdmUodmFsdWUpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgaWYgKGNvcHlUZXh0QXJlYSAmJiBjb3B5VGV4dEFyZWEucGFyZW50Tm9kZSkge1xyXG4gICAgICAgIGNvcHlUZXh0QXJlYS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNvcHlUZXh0QXJlYSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iXX0=