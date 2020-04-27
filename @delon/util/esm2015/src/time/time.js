/**
 * @fileoverview added by tsickle
 * Generated from: src/time/time.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import addDays from 'date-fns/addDays';
import endOfDay from 'date-fns/endOfDay';
import endOfMonth from 'date-fns/endOfMonth';
import endOfWeek from 'date-fns/endOfWeek';
import endOfYear from 'date-fns/endOfYear';
import parse from 'date-fns/parse';
import parseISO from 'date-fns/parseISO';
import startOfDay from 'date-fns/startOfDay';
import startOfMonth from 'date-fns/startOfMonth';
import startOfWeek from 'date-fns/startOfWeek';
import startOfYear from 'date-fns/startOfYear';
import subMonths from 'date-fns/subMonths';
import subWeeks from 'date-fns/subWeeks';
import subYears from 'date-fns/subYears';
/**
 * 获取时间范围
 * @param {?} type 类型，带 `-` 表示过去一个时间，若指定 `number` 表示天数
 * @param {?=} time 开始时间
 * @return {?}
 */
export function getTimeDistance(type, time) {
    time = time ? (typeof time === 'string' ? parse(time, 'yyyy-MM-dd HH:mm:ss', new Date()) : new Date(time)) : new Date();
    /** @type {?} */
    const options = { weekStartsOn: 1 };
    /** @type {?} */
    let res;
    switch (type) {
        case 'today':
            res = [time, time];
            break;
        case '-today':
            res = [addDays(time, -1), time];
            break;
        case 'yesterday':
            res = [addDays(time, -1), addDays(time, -1)];
            break;
        case 'week':
            res = [startOfWeek(time, options), endOfWeek(time, options)];
            break;
        case '-week':
            res = [startOfWeek(subWeeks(time, 1), options), endOfWeek(subWeeks(time, 1), options)];
            break;
        case 'month':
            res = [startOfMonth(time), endOfMonth(time)];
            break;
        case '-month':
            res = [startOfMonth(subMonths(time, 1)), endOfMonth(subMonths(time, 1))];
            break;
        case 'year':
            res = [startOfYear(time), endOfYear(time)];
            break;
        case '-year':
            res = [startOfYear(subYears(time, 1)), endOfYear(subYears(time, 1))];
            break;
        default:
            res = type > 0 ? [time, addDays(time, type)] : [addDays(time, type), time];
            break;
    }
    return fixEndTimeOfRange(res);
}
/**
 * fix time is the most, big value
 * @param {?} dates
 * @return {?}
 */
export function fixEndTimeOfRange(dates) {
    return [startOfDay(dates[0]), endOfDay(dates[1])];
}
/**
 * Return the date parsed from string using the given format string
 * - If the argument is a number, it is treated as a timestamp.
 * @param {?} value
 * @param {?=} options
 * @return {?}
 */
export function toDate(value, options) {
    if (typeof options === 'string')
        options = { formatString: options };
    const { formatString, defaultValue } = Object.assign({ formatString: 'yyyy-MM-dd HH:mm:ss', defaultValue: new Date(NaN) }, options);
    if (value == null)
        return defaultValue;
    if (value instanceof Date)
        return value;
    if (typeof value === 'number')
        return new Date(value);
    /** @type {?} */
    let tryDate = !isNaN(+value) ? new Date(+value) : parseISO(value);
    if (isNaN((/** @type {?} */ (tryDate)))) {
        tryDate = parse(value, (/** @type {?} */ (formatString)), defaultValue);
    }
    return isNaN((/** @type {?} */ (tryDate))) ? defaultValue : tryDate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi91dGlsLyIsInNvdXJjZXMiOlsic3JjL3RpbWUvdGltZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sT0FBTyxNQUFNLGtCQUFrQixDQUFDO0FBQ3ZDLE9BQU8sUUFBUSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pDLE9BQU8sVUFBVSxNQUFNLHFCQUFxQixDQUFDO0FBQzdDLE9BQU8sU0FBUyxNQUFNLG9CQUFvQixDQUFDO0FBQzNDLE9BQU8sU0FBUyxNQUFNLG9CQUFvQixDQUFDO0FBQzNDLE9BQU8sS0FBSyxNQUFNLGdCQUFnQixDQUFDO0FBQ25DLE9BQU8sUUFBUSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pDLE9BQU8sVUFBVSxNQUFNLHFCQUFxQixDQUFDO0FBQzdDLE9BQU8sWUFBWSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sV0FBVyxNQUFNLHNCQUFzQixDQUFDO0FBQy9DLE9BQU8sV0FBVyxNQUFNLHNCQUFzQixDQUFDO0FBQy9DLE9BQU8sU0FBUyxNQUFNLG9CQUFvQixDQUFDO0FBQzNDLE9BQU8sUUFBUSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pDLE9BQU8sUUFBUSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7O0FBUXpDLE1BQU0sVUFBVSxlQUFlLENBQzdCLElBQTBHLEVBQzFHLElBQTZCO0lBRTdCLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLHFCQUFxQixFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQzs7VUFDbEgsT0FBTyxHQUF3QixFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUU7O1FBRXBELEdBQWlCO0lB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QVksSUFBSTtRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQ3hDLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUTtRQUFFLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7O1FBRWxELE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO0lBQ2pFLElBQUksS0FBSyxDQUFDLG1CQUFBLE9BQU8sRUFBYSxDQUFDLEVBQUU7UUFDL0IsT0FBTyxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsbUJBQUEsWUFBWSxFQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7S0FDckQ7SUFFRCxPQUFPLEtBQUssQ0FBQyxtQkFBQSxPQUFPLEVBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUM5RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFkZERheXMgZnJvbSAnZGF0ZS1mbnMvYWRkRGF5cyc7XG5pbXBvcnQgZW5kT2ZEYXkgZnJvbSAnZGF0ZS1mbnMvZW5kT2ZEYXknO1xuaW1wb3J0IGVuZE9mTW9udGggZnJvbSAnZGF0ZS1mbnMvZW5kT2ZNb250aCc7XG5pbXBvcnQgZW5kT2ZXZWVrIGZyb20gJ2RhdGUtZm5zL2VuZE9mV2Vlayc7XG5pbXBvcnQgZW5kT2ZZZWFyIGZyb20gJ2RhdGUtZm5zL2VuZE9mWWVhcic7XG5pbXBvcnQgcGFyc2UgZnJvbSAnZGF0ZS1mbnMvcGFyc2UnO1xuaW1wb3J0IHBhcnNlSVNPIGZyb20gJ2RhdGUtZm5zL3BhcnNlSVNPJztcbmltcG9ydCBzdGFydE9mRGF5IGZyb20gJ2RhdGUtZm5zL3N0YXJ0T2ZEYXknO1xuaW1wb3J0IHN0YXJ0T2ZNb250aCBmcm9tICdkYXRlLWZucy9zdGFydE9mTW9udGgnO1xuaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gJ2RhdGUtZm5zL3N0YXJ0T2ZXZWVrJztcbmltcG9ydCBzdGFydE9mWWVhciBmcm9tICdkYXRlLWZucy9zdGFydE9mWWVhcic7XG5pbXBvcnQgc3ViTW9udGhzIGZyb20gJ2RhdGUtZm5zL3N1Yk1vbnRocyc7XG5pbXBvcnQgc3ViV2Vla3MgZnJvbSAnZGF0ZS1mbnMvc3ViV2Vla3MnO1xuaW1wb3J0IHN1YlllYXJzIGZyb20gJ2RhdGUtZm5zL3N1YlllYXJzJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbi8qKlxuICog6I635Y+W5pe26Ze06IyD5Zu0XG4gKiBAcGFyYW0gdHlwZSDnsbvlnovvvIzluKYgYC1gIOihqOekuui/h+WOu+S4gOS4quaXtumXtO+8jOiLpeaMh+WumiBgbnVtYmVyYCDooajnpLrlpKnmlbBcbiAqIEBwYXJhbSB0aW1lIOW8gOWni+aXtumXtFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZURpc3RhbmNlKFxuICB0eXBlOiAndG9kYXknIHwgJy10b2RheScgfCAneWVzdGVyZGF5JyB8ICd3ZWVrJyB8ICctd2VlaycgfCAnbW9udGgnIHwgJy1tb250aCcgfCAneWVhcicgfCAnLXllYXInIHwgbnVtYmVyLFxuICB0aW1lPzogRGF0ZSB8IHN0cmluZyB8IG51bWJlcixcbik6IFtEYXRlLCBEYXRlXSB7XG4gIHRpbWUgPSB0aW1lID8gKHR5cGVvZiB0aW1lID09PSAnc3RyaW5nJyA/IHBhcnNlKHRpbWUsICd5eXl5LU1NLWRkIEhIOm1tOnNzJywgbmV3IERhdGUoKSkgOiBuZXcgRGF0ZSh0aW1lKSkgOiBuZXcgRGF0ZSgpO1xuICBjb25zdCBvcHRpb25zOiB7IHdlZWtTdGFydHNPbjogMSB9ID0geyB3ZWVrU3RhcnRzT246IDEgfTtcblxuICBsZXQgcmVzOiBbRGF0ZSwgRGF0ZV07XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3RvZGF5JzpcbiAgICAgIHJlcyA9IFt0aW1lLCB0aW1lXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJy10b2RheSc6XG4gICAgICByZXMgPSBbYWRkRGF5cyh0aW1lLCAtMSksIHRpbWVdO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAneWVzdGVyZGF5JzpcbiAgICAgIHJlcyA9IFthZGREYXlzKHRpbWUsIC0xKSwgYWRkRGF5cyh0aW1lLCAtMSldO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnd2Vlayc6XG4gICAgICByZXMgPSBbc3RhcnRPZldlZWsodGltZSwgb3B0aW9ucyksIGVuZE9mV2Vlayh0aW1lLCBvcHRpb25zKV07XG4gICAgICBicmVhaztcbiAgICBjYXNlICctd2Vlayc6XG4gICAgICByZXMgPSBbc3RhcnRPZldlZWsoc3ViV2Vla3ModGltZSwgMSksIG9wdGlvbnMpLCBlbmRPZldlZWsoc3ViV2Vla3ModGltZSwgMSksIG9wdGlvbnMpXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgIHJlcyA9IFtzdGFydE9mTW9udGgodGltZSksIGVuZE9mTW9udGgodGltZSldO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnLW1vbnRoJzpcbiAgICAgIHJlcyA9IFtzdGFydE9mTW9udGgoc3ViTW9udGhzKHRpbWUsIDEpKSwgZW5kT2ZNb250aChzdWJNb250aHModGltZSwgMSkpXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3llYXInOlxuICAgICAgcmVzID0gW3N0YXJ0T2ZZZWFyKHRpbWUpLCBlbmRPZlllYXIodGltZSldO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnLXllYXInOlxuICAgICAgcmVzID0gW3N0YXJ0T2ZZZWFyKHN1YlllYXJzKHRpbWUsIDEpKSwgZW5kT2ZZZWFyKHN1YlllYXJzKHRpbWUsIDEpKV07XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmVzID0gdHlwZSA+IDAgPyBbdGltZSwgYWRkRGF5cyh0aW1lLCB0eXBlKV0gOiBbYWRkRGF5cyh0aW1lLCB0eXBlKSwgdGltZV07XG4gICAgICBicmVhaztcbiAgfVxuICByZXR1cm4gZml4RW5kVGltZU9mUmFuZ2UocmVzKTtcbn1cblxuLyoqXG4gKiBmaXggdGltZSBpcyB0aGUgbW9zdCwgYmlnIHZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaXhFbmRUaW1lT2ZSYW5nZShkYXRlczogW0RhdGUsIERhdGVdKTogW0RhdGUsIERhdGVdIHtcbiAgcmV0dXJuIFtzdGFydE9mRGF5KGRhdGVzWzBdKSwgZW5kT2ZEYXkoZGF0ZXNbMV0pXTtcbn1cblxuZXhwb3J0IHR5cGUgVG9EYXRlT3B0aW9ucyA9IHN0cmluZyB8IHsgZm9ybWF0U3RyaW5nPzogc3RyaW5nOyBkZWZhdWx0VmFsdWU/OiBOelNhZmVBbnkgfTtcblxuLyoqXG4gKiBSZXR1cm4gdGhlIGRhdGUgcGFyc2VkIGZyb20gc3RyaW5nIHVzaW5nIHRoZSBnaXZlbiBmb3JtYXQgc3RyaW5nXG4gKiAtIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqIEBwYXJhbSBmb3JtYXRTdHJpbmcgSWYgcGFyc2luZyBmYWlscyB0cnkgdG8gcGFyc2UgdGhlIGRhdGUgYnkgcHJlc3NpbmcgYGZvcm1hdFN0cmluZ2BcbiAqIEBwYXJhbSBkZWZhdWx0VmFsdWUgSWYgcGFyc2luZyBmYWlscyByZXR1cm5lZCBkZWZhdWx0IHZhbHVlLCBkZWZhdWx0OiBgbmV3IERhdGUoTmFOKWBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRGF0ZSh2YWx1ZTogRGF0ZSB8IHN0cmluZyB8IG51bWJlciwgb3B0aW9ucz86IFRvRGF0ZU9wdGlvbnMpOiBEYXRlIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykgb3B0aW9ucyA9IHsgZm9ybWF0U3RyaW5nOiBvcHRpb25zIH07XG4gIGNvbnN0IHsgZm9ybWF0U3RyaW5nLCBkZWZhdWx0VmFsdWUgfSA9IHsgZm9ybWF0U3RyaW5nOiAneXl5eS1NTS1kZCBISDptbTpzcycsIGRlZmF1bHRWYWx1ZTogbmV3IERhdGUoTmFOKSwgLi4ub3B0aW9ucyB9O1xuICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkgcmV0dXJuIHZhbHVlO1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykgcmV0dXJuIG5ldyBEYXRlKHZhbHVlKTtcblxuICBsZXQgdHJ5RGF0ZSA9ICFpc05hTigrdmFsdWUpID8gbmV3IERhdGUoK3ZhbHVlKSA6IHBhcnNlSVNPKHZhbHVlKTtcbiAgaWYgKGlzTmFOKHRyeURhdGUgYXMgTnpTYWZlQW55KSkge1xuICAgIHRyeURhdGUgPSBwYXJzZSh2YWx1ZSwgZm9ybWF0U3RyaW5nISwgZGVmYXVsdFZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiBpc05hTih0cnlEYXRlIGFzIE56U2FmZUFueSkgPyBkZWZhdWx0VmFsdWUgOiB0cnlEYXRlO1xufVxuIl19