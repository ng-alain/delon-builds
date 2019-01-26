/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// tslint:disable:no-any
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
        var copyTextArea = (/** @type {?} */ (null));
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
    var isObject = function (v) { return typeof v === 'object' || typeof v === 'function'; };
    /** @type {?} */
    var merge = function (target, obj) {
        Object
            .keys(obj)
            .filter(function (key) { return key !== '__proto__' && Object.prototype.hasOwnProperty.call(obj, key); })
            .forEach(function (key) {
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
        });
        return target;
    };
    objects.filter(function (v) { return isObject(v); }).forEach(function (v) { return merge(original, v); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdXRpbC8iLCJzb3VyY2VzIjpbInNyYy9vdGhlci9vdGhlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUM7Ozs7Ozs7Ozs7QUFVNUIsTUFBTSxVQUFVLE9BQU8sQ0FBQyxHQUFRLEVBQUUsSUFBdUIsRUFBRSxZQUFrQjtJQUMzRSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQUUsT0FBTyxZQUFZLENBQUM7SUFDbkUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDeEIsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN0RDtJQUNELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7O1lBQ2YsUUFBUSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsT0FBTyxPQUFPLFFBQVEsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0tBQ2xFO0lBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFaLENBQVksRUFBRSxHQUFHLENBQUMsSUFBSSxZQUFZLENBQUM7QUFDbEUsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsUUFBUSxDQUFDLEdBQVE7O1FBQ3pCLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFB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QyxFQUFYLENBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQztJQUVsRSxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsU0FBUyxDQUFDLFFBQWE7SUFBRSxpQkFBaUI7U0FBakIsVUFBaUIsRUFBakIscUJBQWlCLEVBQWpCLElBQWlCO1FBQWpCLGdDQUFpQjs7SUFDeEQsT0FBTyxZQUFZLGlDQUFDLFFBQVEsRUFBRSxLQUFLLEdBQUssT0FBTyxHQUFFO0FBQ25ELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpuby1hbnlcbmltcG9ydCBleHRlbmQgZnJvbSAnZXh0ZW5kJztcblxuLyoqXG4gKiDnsbvkvLwgYF8uZ2V0YO+8jOagueaNriBgcGF0aGAg6I635Y+W5a6J5YWo5YC8XG4gKiBqc3BlcmY6IGh0dHBzOi8vanNwZXJmLmNvbS9lcy1kZWVwLWdldHR0cHM6Ly9qc3BlcmYuY29tL2VzLWRlZXAtZ2V0XG4gKlxuICogQHBhcmFtIG9iaiDmlbDmja7mupDvvIzml6DmlYjml7bnm7TmjqXov5Tlm54gYGRlZmF1bHRWYWx1ZWAg5YC8XG4gKiBAcGFyYW0gcGF0aCDoi6UgYG51bGxg44CBYFtdYOOAgeacquWumuS5ieWPiuacquaJvuWIsOaXtui/lOWbniBgZGVmYXVsdFZhbHVlYCDlgLxcbiAqIEBwYXJhbSBkZWZhdWx0VmFsdWUg6buY6K6k5YC8XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWVwR2V0KG9iajogYW55LCBwYXRoOiBzdHJpbmcgfCBzdHJpbmdbXSwgZGVmYXVsdFZhbHVlPzogYW55KTogYW55IHtcbiAgaWYgKCFvYmogfHwgcGF0aCA9PSBudWxsIHx8IHBhdGgubGVuZ3RoID09PSAwKSByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICBpZiAoIUFycmF5LmlzQXJyYXkocGF0aCkpIHtcbiAgICBwYXRoID0gfnBhdGguaW5kZXhPZignLicpID8gcGF0aC5zcGxpdCgnLicpIDogW3BhdGhdO1xuICB9XG4gIGlmIChwYXRoLmxlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IGNoZWNrT2JqID0gb2JqW3BhdGhbMF1dO1xuICAgIHJldHVybiB0eXBlb2YgY2hlY2tPYmogPT09ICd1bmRlZmluZWQnID8gZGVmYXVsdFZhbHVlIDogY2hlY2tPYmo7XG4gIH1cbiAgcmV0dXJuIHBhdGgucmVkdWNlKChvLCBrKSA9PiAobyB8fCB7fSlba10sIG9iaikgfHwgZGVmYXVsdFZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVlcENvcHkob2JqOiBhbnkpOiBhbnkge1xuICBjb25zdCByZXN1bHQgPSBleHRlbmQodHJ1ZSwge30sIHsgXzogb2JqIH0pO1xuICByZXR1cm4gcmVzdWx0Ll87XG59XG5cbi8qKiDlpI3liLblhoXlrrnoh7PliarotLTmnb8gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KHZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KTogdm9pZCA9PiB7XG4gICAgbGV0IGNvcHlUZXh0QXJlYSA9IG51bGwgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcbiAgICB0cnkge1xuICAgICAgY29weVRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZS5oZWlnaHQgPSAnMHB4JztcbiAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgY29weVRleHRBcmVhLnN0eWxlLndpZHRoID0gJzBweCc7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvcHlUZXh0QXJlYSk7XG4gICAgICBjb3B5VGV4dEFyZWEudmFsdWUgPSB2YWx1ZTtcbiAgICAgIGNvcHlUZXh0QXJlYS5zZWxlY3QoKTtcbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XG4gICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKGNvcHlUZXh0QXJlYSAmJiBjb3B5VGV4dEFyZWEucGFyZW50Tm9kZSkge1xuICAgICAgICBjb3B5VGV4dEFyZWEucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjb3B5VGV4dEFyZWEpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWVwTWVyZ2VLZXkob3JpZ2luYWw6IGFueSwgaW5nb3JlQXJyYXk6IGJvb2xlYW4sIC4uLm9iamVjdHM6IGFueVtdKTogYW55IHtcbiAgaWYgKEFycmF5LmlzQXJyYXkob3JpZ2luYWwpIHx8IHR5cGVvZiBvcmlnaW5hbCAhPT0gJ29iamVjdCcpIHJldHVybiBvcmlnaW5hbDtcblxuICBjb25zdCBpc09iamVjdCA9ICh2OiBhbnkpID0+IHR5cGVvZiB2ID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdiA9PT0gJ2Z1bmN0aW9uJztcblxuICBjb25zdCBtZXJnZSA9ICh0YXJnZXQ6IGFueSwgb2JqOiB7fSkgPT4ge1xuICAgIE9iamVjdFxuICAgICAgLmtleXMob2JqKVxuICAgICAgLmZpbHRlcihrZXkgPT4ga2V5ICE9PSAnX19wcm90b19fJyAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKVxuICAgICAgLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSBvYmpba2V5XTtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB0YXJnZXRba2V5XTtcbiAgICAgICAgaWYgKCFpbmdvcmVBcnJheSAmJiBBcnJheS5pc0FycmF5KG5ld1ZhbHVlKSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gWyAuLi5uZXdWYWx1ZSwgLi4ub2xkVmFsdWUgXTtcbiAgICAgICAgfSBlbHNlIGlmIChvbGRWYWx1ZSAhPSBudWxsICYmIGlzT2JqZWN0KG9sZFZhbHVlKSAmJiBuZXdWYWx1ZSAhPSBudWxsICYmIGlzT2JqZWN0KG5ld1ZhbHVlKSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gbWVyZ2UobmV3VmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IGRlZXBDb3B5KG9sZFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICBvYmplY3RzLmZpbHRlcih2ID0+IGlzT2JqZWN0KHYpKS5mb3JFYWNoKHYgPT4gbWVyZ2Uob3JpZ2luYWwsIHYpKTtcblxuICByZXR1cm4gb3JpZ2luYWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWVwTWVyZ2Uob3JpZ2luYWw6IGFueSwgLi4ub2JqZWN0czogYW55W10pOiBhbnkge1xuICByZXR1cm4gZGVlcE1lcmdlS2V5KG9yaWdpbmFsLCBmYWxzZSwgLi4ub2JqZWN0cyk7XG59XG4iXX0=