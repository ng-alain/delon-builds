import extend from 'extend';
/**
 * Gets the value at `path` of `object`, like `_.get` in lodash.
 *
 * 类似 `_.get`，根据 `path` 获取安全值
 */
export function deepGet(obj, path, defaultValue) {
    if (!obj || path == null || path.length === 0)
        return defaultValue;
    if (!Array.isArray(path)) {
        path = ~path.indexOf('.') ? path.split('.') : [path];
    }
    if (path.length === 1) {
        const checkObj = obj[path[0]];
        return typeof checkObj === 'undefined' ? defaultValue : checkObj;
    }
    const res = path.reduce((o, k) => (o || {})[k], obj);
    return typeof res === 'undefined' ? defaultValue : res;
}
/**
 * Base on [extend](https://github.com/justmoon/node-extend) deep copy.
 *
 * 基于 [extend](https://github.com/justmoon/node-extend) 的深度拷贝
 */
export function deepCopy(obj) {
    const result = extend(true, {}, { _: obj });
    return result._;
}
/**
 * Deep merge object.
 *
 * 深度合并对象
 *
 * @param original 原始对象
 * @param arrayProcessMethod 数组处理方式
 *  - `true` 表示替换新值，不管新值为哪种类型
 *  - `false` 表示会合并整个数组（将旧数据与新数据合并成新数组）
 * @param objects 要合并的对象
 */
export function deepMergeKey(original, arrayProcessMethod, ...objects) {
    if (Array.isArray(original) || typeof original !== 'object')
        return original;
    const isObject = (v) => typeof v === 'object';
    const merge = (target, obj) => {
        Object.keys(obj)
            .filter(key => key !== '__proto__' && Object.prototype.hasOwnProperty.call(obj, key))
            .forEach(key => {
            const fromValue = obj[key];
            const toValue = target[key];
            if (Array.isArray(toValue)) {
                target[key] = arrayProcessMethod ? fromValue : [...toValue, ...fromValue];
            }
            else if (typeof fromValue === 'function') {
                target[key] = fromValue;
            }
            else if (fromValue != null && isObject(fromValue) && toValue != null && isObject(toValue)) {
                target[key] = merge(toValue, fromValue);
            }
            else {
                target[key] = deepCopy(fromValue);
            }
        });
        return target;
    };
    objects.filter(v => v != null && isObject(v)).forEach(v => merge(original, v));
    return original;
}
/**
 * Deep merge object.
 *
 * 深度合并对象
 */
export function deepMerge(original, ...objects) {
    return deepMergeKey(original, false, ...objects);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVlcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3V0aWwvb3RoZXIvZGVlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFJNUI7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxPQUFPLENBQUMsR0FBYyxFQUFFLElBQTBDLEVBQUUsWUFBc0I7SUFDeEcsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLE9BQU8sWUFBWSxDQUFDO0lBQ25FLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3hCLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDdEQ7SUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3JCLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixPQUFPLE9BQU8sUUFBUSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7S0FDbEU7SUFDRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDckQsT0FBTyxPQUFPLEdBQUcsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQ3pELENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLFFBQVEsQ0FBcUQsR0FBeUI7SUFDcEcsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUM1QyxPQUFPLE1BQU0sQ0FBQyxDQUFNLENBQUM7QUFDdkIsQ0FBQztBQUVEOzs7Ozs7Ozs7O0dBVUc7QUFDSCxNQUFNLFVBQVUsWUFBWSxDQUFDLFFBQWlCLEVBQUUsa0JBQTJCLEVBQUUsR0FBRyxPQUFvQjtJQUNsRyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksT0FBTyxRQUFRLEtBQUssUUFBUTtRQUFFLE9BQU8sUUFBUSxDQUFDO0lBRTdFLE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBVSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxRQUFRLENBQUM7SUFFdkQsTUFBTSxLQUFLLEdBQUcsQ0FBQyxNQUFpQixFQUFFLEdBQWMsRUFBRSxFQUFFO1FBQ2xELE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2FBQ2IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLFdBQVcsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ3BGLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNiLE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMzQixNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUMxQixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sRUFBRSxHQUFHLFNBQVMsQ0FBQyxDQUFDO2FBQzNFO2lCQUFNLElBQUksT0FBTyxTQUFTLEtBQUssVUFBVSxFQUFFO2dCQUMxQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDO2FBQ3pCO2lCQUFNLElBQUksU0FBUyxJQUFJLElBQUksSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksT0FBTyxJQUFJLElBQUksSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQzNGLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQ3pDO2lCQUFNO2dCQUNMLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDbkM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUMsQ0FBQztJQUVGLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUUvRSxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxTQUFTLENBQUMsUUFBaUIsRUFBRSxHQUFHLE9BQWtCO0lBQ2hFLE9BQU8sWUFBWSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQztBQUNuRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4dGVuZCBmcm9tICdleHRlbmQnO1xuXG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYHBhdGhgIG9mIGBvYmplY3RgLCBsaWtlIGBfLmdldGAgaW4gbG9kYXNoLlxuICpcbiAqIOexu+S8vCBgXy5nZXRg77yM5qC55o2uIGBwYXRoYCDojrflj5blronlhajlgLxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZXBHZXQob2JqOiBOelNhZmVBbnksIHBhdGg6IHN0cmluZyB8IHN0cmluZ1tdIHwgbnVsbCB8IHVuZGVmaW5lZCwgZGVmYXVsdFZhbHVlPzogdW5rbm93bik6IE56U2FmZUFueSB7XG4gIGlmICghb2JqIHx8IHBhdGggPT0gbnVsbCB8fCBwYXRoLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHBhdGgpKSB7XG4gICAgcGF0aCA9IH5wYXRoLmluZGV4T2YoJy4nKSA/IHBhdGguc3BsaXQoJy4nKSA6IFtwYXRoXTtcbiAgfVxuICBpZiAocGF0aC5sZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBjaGVja09iaiA9IG9ialtwYXRoWzBdXTtcbiAgICByZXR1cm4gdHlwZW9mIGNoZWNrT2JqID09PSAndW5kZWZpbmVkJyA/IGRlZmF1bHRWYWx1ZSA6IGNoZWNrT2JqO1xuICB9XG4gIGNvbnN0IHJlcyA9IHBhdGgucmVkdWNlKChvLCBrKSA9PiAobyB8fCB7fSlba10sIG9iaik7XG4gIHJldHVybiB0eXBlb2YgcmVzID09PSAndW5kZWZpbmVkJyA/IGRlZmF1bHRWYWx1ZSA6IHJlcztcbn1cblxuLyoqXG4gKiBCYXNlIG9uIFtleHRlbmRdKGh0dHBzOi8vZ2l0aHViLmNvbS9qdXN0bW9vbi9ub2RlLWV4dGVuZCkgZGVlcCBjb3B5LlxuICpcbiAqIOWfuuS6jiBbZXh0ZW5kXShodHRwczovL2dpdGh1Yi5jb20vanVzdG1vb24vbm9kZS1leHRlbmQpIOeahOa3seW6puaLt+i0nVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVlcENvcHk8VCBleHRlbmRzIHsgW2tleTogc3RyaW5nXTogTnpTYWZlQW55IH0gPSBOelNhZmVBbnk+KG9iajogVCB8IG51bGwgfCB1bmRlZmluZWQpOiBUIHtcbiAgY29uc3QgcmVzdWx0ID0gZXh0ZW5kKHRydWUsIHt9LCB7IF86IG9iaiB9KTtcbiAgcmV0dXJuIHJlc3VsdC5fIGFzIFQ7XG59XG5cbi8qKlxuICogRGVlcCBtZXJnZSBvYmplY3QuXG4gKlxuICog5rex5bqm5ZCI5bm25a+56LGhXG4gKlxuICogQHBhcmFtIG9yaWdpbmFsIOWOn+Wni+WvueixoVxuICogQHBhcmFtIGFycmF5UHJvY2Vzc01ldGhvZCDmlbDnu4TlpITnkIbmlrnlvI9cbiAqICAtIGB0cnVlYCDooajnpLrmm7/mjaLmlrDlgLzvvIzkuI3nrqHmlrDlgLzkuLrlk6rnp43nsbvlnotcbiAqICAtIGBmYWxzZWAg6KGo56S65Lya5ZCI5bm25pW05Liq5pWw57uE77yI5bCG5pen5pWw5o2u5LiO5paw5pWw5o2u5ZCI5bm25oiQ5paw5pWw57uE77yJXG4gKiBAcGFyYW0gb2JqZWN0cyDopoHlkIjlubbnmoTlr7nosaFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZXBNZXJnZUtleShvcmlnaW5hbDogdW5rbm93biwgYXJyYXlQcm9jZXNzTWV0aG9kOiBib29sZWFuLCAuLi5vYmplY3RzOiBOelNhZmVBbnlbXSk6IE56U2FmZUFueSB7XG4gIGlmIChBcnJheS5pc0FycmF5KG9yaWdpbmFsKSB8fCB0eXBlb2Ygb3JpZ2luYWwgIT09ICdvYmplY3QnKSByZXR1cm4gb3JpZ2luYWw7XG5cbiAgY29uc3QgaXNPYmplY3QgPSAodjogdW5rbm93bikgPT4gdHlwZW9mIHYgPT09ICdvYmplY3QnO1xuXG4gIGNvbnN0IG1lcmdlID0gKHRhcmdldDogTnpTYWZlQW55LCBvYmo6IE56U2FmZUFueSkgPT4ge1xuICAgIE9iamVjdC5rZXlzKG9iailcbiAgICAgIC5maWx0ZXIoa2V5ID0+IGtleSAhPT0gJ19fcHJvdG9fXycgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSlcbiAgICAgIC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGNvbnN0IGZyb21WYWx1ZSA9IG9ialtrZXldO1xuICAgICAgICBjb25zdCB0b1ZhbHVlID0gdGFyZ2V0W2tleV07XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRvVmFsdWUpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBhcnJheVByb2Nlc3NNZXRob2QgPyBmcm9tVmFsdWUgOiBbLi4udG9WYWx1ZSwgLi4uZnJvbVZhbHVlXTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZnJvbVZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBmcm9tVmFsdWU7XG4gICAgICAgIH0gZWxzZSBpZiAoZnJvbVZhbHVlICE9IG51bGwgJiYgaXNPYmplY3QoZnJvbVZhbHVlKSAmJiB0b1ZhbHVlICE9IG51bGwgJiYgaXNPYmplY3QodG9WYWx1ZSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IG1lcmdlKHRvVmFsdWUsIGZyb21WYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBkZWVwQ29weShmcm9tVmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIG9iamVjdHMuZmlsdGVyKHYgPT4gdiAhPSBudWxsICYmIGlzT2JqZWN0KHYpKS5mb3JFYWNoKHYgPT4gbWVyZ2Uob3JpZ2luYWwsIHYpKTtcblxuICByZXR1cm4gb3JpZ2luYWw7XG59XG5cbi8qKlxuICogRGVlcCBtZXJnZSBvYmplY3QuXG4gKlxuICog5rex5bqm5ZCI5bm25a+56LGhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWVwTWVyZ2Uob3JpZ2luYWw6IHVua25vd24sIC4uLm9iamVjdHM6IHVua25vd25bXSk6IE56U2FmZUFueSB7XG4gIHJldHVybiBkZWVwTWVyZ2VLZXkob3JpZ2luYWwsIGZhbHNlLCAuLi5vYmplY3RzKTtcbn1cbiJdfQ==