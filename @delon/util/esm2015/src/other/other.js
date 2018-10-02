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
        const checkObj = obj[path[0]];
        return typeof checkObj === 'undefined' ? defaultValue : checkObj;
    }
    return path.reduce((o, k) => (o || {})[k], obj) || defaultValue;
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
    return new Promise((resolve, reject) => {
        /** @type {?} */
        let copyTextArea = /** @type {?} */ (null);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdXRpbC8iLCJzb3VyY2VzIjpbInNyYy9vdGhlci9vdGhlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDOzs7Ozs7Ozs7O0FBVTVCLE1BQU0sa0JBQWtCLEdBQVEsRUFBRSxJQUF1QixFQUFFLFlBQWtCO0lBQzNFLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUM7UUFBRSxPQUFPLFlBQVksQ0FBQztJQUNuRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN4QixJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFLElBQUksQ0FBRSxDQUFDO0tBQ3hEO0lBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTs7UUFDckIsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLE9BQU8sT0FBTyxRQUFRLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztLQUNsRTtJQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLFlBQVksQ0FBQztDQUNqRTs7Ozs7QUFFRCxNQUFNLG1CQUFtQixHQUFROztJQUMvQixNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzdDLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQztDQUNqQjs7Ozs7O0FBR0QsTUFBTSxlQUFlLEtBQWE7SUFDaEMsT0FBTyxJQUFJLE9BQU8sQ0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQVEsRUFBRTs7UUFDbkQsSUFBSSxZQUFZLHFCQUFHLElBQTJCLEVBQUM7UUFDL0MsSUFBSTtZQUNGLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2xELFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNsQyxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7WUFDakMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ2pDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3hDLFlBQVksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQzNCLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN0QixRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQjtnQkFBUztZQUNSLElBQUksWUFBWSxJQUFJLFlBQVksQ0FBQyxVQUFVLEVBQUU7Z0JBQzNDLFlBQVksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ25EO1NBQ0Y7S0FDRixDQUFDLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHRlbmQgZnJvbSAnZXh0ZW5kJztcclxuXHJcbi8qKlxyXG4gKiDnsbvkvLwgYF8uZ2V0YO+8jOagueaNriBgcGF0aGAg6I635Y+W5a6J5YWo5YC8XHJcbiAqIGpzcGVyZjogaHR0cHM6Ly9qc3BlcmYuY29tL2VzLWRlZXAtZ2V0dHRwczovL2pzcGVyZi5jb20vZXMtZGVlcC1nZXRcclxuICpcclxuICogQHBhcmFtIG9iaiDmlbDmja7mupDvvIzml6DmlYjml7bnm7TmjqXov5Tlm54gYGRlZmF1bHRWYWx1ZWAg5YC8XHJcbiAqIEBwYXJhbSBwYXRoIOiLpSBgbnVsbGDjgIFgW11g44CB5pyq5a6a5LmJ5Y+K5pyq5om+5Yiw5pe26L+U5ZueIGBkZWZhdWx0VmFsdWVgIOWAvFxyXG4gKiBAcGFyYW0gZGVmYXVsdFZhbHVlIOm7mOiupOWAvFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBHZXQob2JqOiBhbnksIHBhdGg6IHN0cmluZyB8IHN0cmluZ1tdLCBkZWZhdWx0VmFsdWU/OiBhbnkpIHtcclxuICBpZiAoIW9iaiB8fCBwYXRoID09IG51bGwgfHwgcGF0aC5sZW5ndGggPT09IDApIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgaWYgKCFBcnJheS5pc0FycmF5KHBhdGgpKSB7XHJcbiAgICBwYXRoID0gfnBhdGguaW5kZXhPZignLicpID8gcGF0aC5zcGxpdCgnLicpIDogWyBwYXRoIF07XHJcbiAgfVxyXG4gIGlmIChwYXRoLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgY29uc3QgY2hlY2tPYmogPSBvYmpbcGF0aFswXV07XHJcbiAgICByZXR1cm4gdHlwZW9mIGNoZWNrT2JqID09PSAndW5kZWZpbmVkJyA/IGRlZmF1bHRWYWx1ZSA6IGNoZWNrT2JqO1xyXG4gIH1cclxuICByZXR1cm4gcGF0aC5yZWR1Y2UoKG8sIGspID0+IChvIHx8IHt9KVtrXSwgb2JqKSB8fCBkZWZhdWx0VmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWVwQ29weShvYmo6IGFueSkge1xyXG4gIGNvbnN0IHJlc3VsdCA9IGV4dGVuZCh0cnVlLCB7IH0sIHsgXzogb2JqIH0pO1xyXG4gIHJldHVybiByZXN1bHQuXztcclxufVxyXG5cclxuLyoqIOWkjeWItuWGheWuueiHs+WJqui0tOadvyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29weSh2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KTogdm9pZCA9PiB7XHJcbiAgICBsZXQgY29weVRleHRBcmVhID0gbnVsbCBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29weVRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgICAgY29weVRleHRBcmVhLnN0eWxlLmhlaWdodCA9ICcwcHgnO1xyXG4gICAgICBjb3B5VGV4dEFyZWEuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgICAgY29weVRleHRBcmVhLnN0eWxlLndpZHRoID0gJzBweCc7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29weVRleHRBcmVhKTtcclxuICAgICAgY29weVRleHRBcmVhLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgIGNvcHlUZXh0QXJlYS5zZWxlY3QoKTtcclxuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcclxuICAgICAgcmVzb2x2ZSh2YWx1ZSk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBpZiAoY29weVRleHRBcmVhICYmIGNvcHlUZXh0QXJlYS5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgY29weVRleHRBcmVhLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY29weVRleHRBcmVhKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiJdfQ==