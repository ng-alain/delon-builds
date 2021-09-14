import { deepGet } from '@delon/util/other';
/**
 * String formatting
 *
 * 字符串格式化
 * ```
 * format('this is ${name}', { name: 'asdf' })
 * // output: this is asdf
 * format('this is ${user.name}', { user: { name: 'asdf' } }, true)
 * // output: this is asdf
 * ```
 */
export function format(str, obj, needDeepGet = false) {
    return (str || '').replace(/\${([^}]+)}/g, (_work, key) => needDeepGet ? deepGet(obj, key.split('.'), '') : (obj || {})[key] || '');
}
/**
 * Format mask
 *
 * 格式化掩码
 * ```ts
 * formatMask('123', '(###)') => (123)
 * ```
 */
export function formatMask(value, mask) {
    if (!value) {
        return '';
    }
    const splitValue = value.split('');
    return mask
        .split('')
        .reduce((res, cur) => {
        if (cur === '#') {
            if (splitValue.length > 0) {
                res.push(splitValue.shift());
            }
        }
        else {
            res.push(cur);
        }
        return res;
    }, [])
        .join('');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9mb3JtYXQvc3RyaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUc1Qzs7Ozs7Ozs7OztHQVVHO0FBQ0gsTUFBTSxVQUFVLE1BQU0sQ0FDcEIsR0FBOEIsRUFDOUIsR0FBaUMsRUFDakMsY0FBdUIsS0FBSztJQUU1QixPQUFPLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUFhLEVBQUUsR0FBVyxFQUFFLEVBQUUsQ0FDeEUsV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FDeEUsQ0FBQztBQUNKLENBQUM7QUFFRDs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxVQUFVLFVBQVUsQ0FBQyxLQUFhLEVBQUUsSUFBWTtJQUNwRCxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ1YsT0FBTyxFQUFFLENBQUM7S0FDWDtJQUVELE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkMsT0FBTyxJQUFJO1NBQ1IsS0FBSyxDQUFDLEVBQUUsQ0FBQztTQUNULE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUNuQixJQUFJLEdBQUcsS0FBSyxHQUFHLEVBQUU7WUFDZixJQUFJLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN6QixHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUcsQ0FBQyxDQUFDO2FBQy9CO1NBQ0Y7YUFBTTtZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDZjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQyxFQUFFLEVBQWMsQ0FBQztTQUNqQixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVlcEdldCB9IGZyb20gJ0BkZWxvbi91dGlsL290aGVyJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuLyoqXG4gKiBTdHJpbmcgZm9ybWF0dGluZ1xuICpcbiAqIOWtl+espuS4suagvOW8j+WMllxuICogYGBgXG4gKiBmb3JtYXQoJ3RoaXMgaXMgJHtuYW1lfScsIHsgbmFtZTogJ2FzZGYnIH0pXG4gKiAvLyBvdXRwdXQ6IHRoaXMgaXMgYXNkZlxuICogZm9ybWF0KCd0aGlzIGlzICR7dXNlci5uYW1lfScsIHsgdXNlcjogeyBuYW1lOiAnYXNkZicgfSB9LCB0cnVlKVxuICogLy8gb3V0cHV0OiB0aGlzIGlzIGFzZGZcbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KFxuICBzdHI6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsXG4gIG9iajogTnpTYWZlQW55IHwgbnVsbCB8IHVuZGVmaW5lZCxcbiAgbmVlZERlZXBHZXQ6IGJvb2xlYW4gPSBmYWxzZVxuKTogc3RyaW5nIHtcbiAgcmV0dXJuIChzdHIgfHwgJycpLnJlcGxhY2UoL1xcJHsoW159XSspfS9nLCAoX3dvcms6IHN0cmluZywga2V5OiBzdHJpbmcpID0+XG4gICAgbmVlZERlZXBHZXQgPyBkZWVwR2V0KG9iaiwga2V5LnNwbGl0KCcuJyksICcnKSA6IChvYmogfHwge30pW2tleV0gfHwgJydcbiAgKTtcbn1cblxuLyoqXG4gKiBGb3JtYXQgbWFza1xuICpcbiAqIOagvOW8j+WMluaOqeeggVxuICogYGBgdHNcbiAqIGZvcm1hdE1hc2soJzEyMycsICcoIyMjKScpID0+ICgxMjMpXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdE1hc2sodmFsdWU6IHN0cmluZywgbWFzazogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGNvbnN0IHNwbGl0VmFsdWUgPSB2YWx1ZS5zcGxpdCgnJyk7XG4gIHJldHVybiBtYXNrXG4gICAgLnNwbGl0KCcnKVxuICAgIC5yZWR1Y2UoKHJlcywgY3VyKSA9PiB7XG4gICAgICBpZiAoY3VyID09PSAnIycpIHtcbiAgICAgICAgaWYgKHNwbGl0VmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHJlcy5wdXNoKHNwbGl0VmFsdWUuc2hpZnQoKSEpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXMucHVzaChjdXIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcztcbiAgICB9LCBbXSBhcyBzdHJpbmdbXSlcbiAgICAuam9pbignJyk7XG59XG4iXX0=