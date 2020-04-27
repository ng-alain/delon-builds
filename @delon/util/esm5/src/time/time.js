/**
 * @fileoverview added by tsickle
 * Generated from: src/time/time.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign } from "tslib";
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
    var options = { weekStartsOn: 1 };
    /** @type {?} */
    var res;
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
    var _a = __assign({ formatString: 'yyyy-MM-dd HH:mm:ss', defaultValue: new Date(NaN) }, options), formatString = _a.formatString, defaultValue = _a.defaultValue;
    if (value == null)
        return defaultValue;
    if (value instanceof Date)
        return value;
    if (typeof value === 'number')
        return defaultValue;
    /** @type {?} */
    var tryDate = !isNaN(+value) ? new Date(+value) : parseISO(value);
    if (isNaN((/** @type {?} */ (tryDate)))) {
        tryDate = parse(value, (/** @type {?} */ (formatString)), defaultValue);
    }
    return isNaN((/** @type {?} */ (tryDate))) ? defaultValue : tryDate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi91dGlsLyIsInNvdXJjZXMiOlsic3JjL3RpbWUvdGltZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLE9BQU8sTUFBTSxrQkFBa0IsQ0FBQztBQUN2QyxPQUFPLFFBQVEsTUFBTSxtQkFBbUIsQ0FBQztBQUN6QyxPQUFPLFVBQVUsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QyxPQUFPLFNBQVMsTUFBTSxvQkFBb0IsQ0FBQztBQUMzQyxPQUFPLFNBQVMsTUFBTSxvQkFBb0IsQ0FBQztBQUMzQyxPQUFPLEtBQUssTUFBTSxnQkFBZ0IsQ0FBQztBQUNuQyxPQUFPLFFBQVEsTUFBTSxtQkFBbUIsQ0FBQztBQUN6QyxPQUFPLFVBQVUsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QyxPQUFPLFlBQVksTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLFdBQVcsTUFBTSxzQkFBc0IsQ0FBQztBQUMvQyxPQUFPLFdBQVcsTUFBTSxzQkFBc0IsQ0FBQztBQUMvQyxPQUFPLFNBQVMsTUFBTSxvQkFBb0IsQ0FBQztBQUMzQyxPQUFPLFFBQVEsTUFBTSxtQkFBbUIsQ0FBQztBQUN6QyxPQUFPLFFBQVEsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7OztBQVF6QyxNQUFNLFVBQVUsZUFBZSxDQUM3QixJQUEwRyxFQUMxRyxJQUE2QjtJQUU3QixJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxxQkFBcUIsRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7O1FBQ2xILE9BQU8sR0FBd0IsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFOztRQUVwRCxHQUFpQjtJ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QU8sWUFBWSxDQUFDOztRQUUvQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztJQUNqRSxJQUFJLEtBQUssQ0FBQyxtQkFBQSxPQUFPLEVBQWEsQ0FBQyxFQUFFO1FBQy9CLE9BQU8sR0FBRyxLQUFLLENBQUMsS0FBSyxFQUFFLG1CQUFBLFlBQVksRUFBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO0tBQ3JEO0lBRUQsT0FBTyxLQUFLLENBQUMsbUJBQUEsT0FBTyxFQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDOUQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhZGREYXlzIGZyb20gJ2RhdGUtZm5zL2FkZERheXMnO1xuaW1wb3J0IGVuZE9mRGF5IGZyb20gJ2RhdGUtZm5zL2VuZE9mRGF5JztcbmltcG9ydCBlbmRPZk1vbnRoIGZyb20gJ2RhdGUtZm5zL2VuZE9mTW9udGgnO1xuaW1wb3J0IGVuZE9mV2VlayBmcm9tICdkYXRlLWZucy9lbmRPZldlZWsnO1xuaW1wb3J0IGVuZE9mWWVhciBmcm9tICdkYXRlLWZucy9lbmRPZlllYXInO1xuaW1wb3J0IHBhcnNlIGZyb20gJ2RhdGUtZm5zL3BhcnNlJztcbmltcG9ydCBwYXJzZUlTTyBmcm9tICdkYXRlLWZucy9wYXJzZUlTTyc7XG5pbXBvcnQgc3RhcnRPZkRheSBmcm9tICdkYXRlLWZucy9zdGFydE9mRGF5JztcbmltcG9ydCBzdGFydE9mTW9udGggZnJvbSAnZGF0ZS1mbnMvc3RhcnRPZk1vbnRoJztcbmltcG9ydCBzdGFydE9mV2VlayBmcm9tICdkYXRlLWZucy9zdGFydE9mV2Vlayc7XG5pbXBvcnQgc3RhcnRPZlllYXIgZnJvbSAnZGF0ZS1mbnMvc3RhcnRPZlllYXInO1xuaW1wb3J0IHN1Yk1vbnRocyBmcm9tICdkYXRlLWZucy9zdWJNb250aHMnO1xuaW1wb3J0IHN1YldlZWtzIGZyb20gJ2RhdGUtZm5zL3N1YldlZWtzJztcbmltcG9ydCBzdWJZZWFycyBmcm9tICdkYXRlLWZucy9zdWJZZWFycyc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG4vKipcbiAqIOiOt+WPluaXtumXtOiMg+WbtFxuICogQHBhcmFtIHR5cGUg57G75Z6L77yM5bimIGAtYCDooajnpLrov4fljrvkuIDkuKrml7bpl7TvvIzoi6XmjIflrpogYG51bWJlcmAg6KGo56S65aSp5pWwXG4gKiBAcGFyYW0gdGltZSDlvIDlp4vml7bpl7RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWVEaXN0YW5jZShcbiAgdHlwZTogJ3RvZGF5JyB8ICctdG9kYXknIHwgJ3llc3RlcmRheScgfCAnd2VlaycgfCAnLXdlZWsnIHwgJ21vbnRoJyB8ICctbW9udGgnIHwgJ3llYXInIHwgJy15ZWFyJyB8IG51bWJlcixcbiAgdGltZT86IERhdGUgfCBzdHJpbmcgfCBudW1iZXIsXG4pOiBbRGF0ZSwgRGF0ZV0ge1xuICB0aW1lID0gdGltZSA/ICh0eXBlb2YgdGltZSA9PT0gJ3N0cmluZycgPyBwYXJzZSh0aW1lLCAneXl5eS1NTS1kZCBISDptbTpzcycsIG5ldyBEYXRlKCkpIDogbmV3IERhdGUodGltZSkpIDogbmV3IERhdGUoKTtcbiAgY29uc3Qgb3B0aW9uczogeyB3ZWVrU3RhcnRzT246IDEgfSA9IHsgd2Vla1N0YXJ0c09uOiAxIH07XG5cbiAgbGV0IHJlczogW0RhdGUsIERhdGVdO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICd0b2RheSc6XG4gICAgICByZXMgPSBbdGltZSwgdGltZV07XG4gICAgICBicmVhaztcbiAgICBjYXNlICctdG9kYXknOlxuICAgICAgcmVzID0gW2FkZERheXModGltZSwgLTEpLCB0aW1lXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3llc3RlcmRheSc6XG4gICAgICByZXMgPSBbYWRkRGF5cyh0aW1lLCAtMSksIGFkZERheXModGltZSwgLTEpXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3dlZWsnOlxuICAgICAgcmVzID0gW3N0YXJ0T2ZXZWVrKHRpbWUsIG9wdGlvbnMpLCBlbmRPZldlZWsodGltZSwgb3B0aW9ucyldO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnLXdlZWsnOlxuICAgICAgcmVzID0gW3N0YXJ0T2ZXZWVrKHN1YldlZWtzKHRpbWUsIDEpLCBvcHRpb25zKSwgZW5kT2ZXZWVrKHN1YldlZWtzKHRpbWUsIDEpLCBvcHRpb25zKV07XG4gICAgICBicmVhaztcbiAgICBjYXNlICdtb250aCc6XG4gICAgICByZXMgPSBbc3RhcnRPZk1vbnRoKHRpbWUpLCBlbmRPZk1vbnRoKHRpbWUpXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJy1tb250aCc6XG4gICAgICByZXMgPSBbc3RhcnRPZk1vbnRoKHN1Yk1vbnRocyh0aW1lLCAxKSksIGVuZE9mTW9udGgoc3ViTW9udGhzKHRpbWUsIDEpKV07XG4gICAgICBicmVhaztcbiAgICBjYXNlICd5ZWFyJzpcbiAgICAgIHJlcyA9IFtzdGFydE9mWWVhcih0aW1lKSwgZW5kT2ZZZWFyKHRpbWUpXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJy15ZWFyJzpcbiAgICAgIHJlcyA9IFtzdGFydE9mWWVhcihzdWJZZWFycyh0aW1lLCAxKSksIGVuZE9mWWVhcihzdWJZZWFycyh0aW1lLCAxKSldO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlcyA9IHR5cGUgPiAwID8gW3RpbWUsIGFkZERheXModGltZSwgdHlwZSldIDogW2FkZERheXModGltZSwgdHlwZSksIHRpbWVdO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIGZpeEVuZFRpbWVPZlJhbmdlKHJlcyk7XG59XG5cbi8qKlxuICogZml4IHRpbWUgaXMgdGhlIG1vc3QsIGJpZyB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZml4RW5kVGltZU9mUmFuZ2UoZGF0ZXM6IFtEYXRlLCBEYXRlXSk6IFtEYXRlLCBEYXRlXSB7XG4gIHJldHVybiBbc3RhcnRPZkRheShkYXRlc1swXSksIGVuZE9mRGF5KGRhdGVzWzFdKV07XG59XG5cbmV4cG9ydCB0eXBlIFRvRGF0ZU9wdGlvbnMgPSBzdHJpbmcgfCB7IGZvcm1hdFN0cmluZz86IHN0cmluZzsgZGVmYXVsdFZhbHVlPzogTnpTYWZlQW55IH07XG5cbi8qKlxuICogUmV0dXJuIHRoZSBkYXRlIHBhcnNlZCBmcm9tIHN0cmluZyB1c2luZyB0aGUgZ2l2ZW4gZm9ybWF0IHN0cmluZ1xuICogLSBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKiBAcGFyYW0gZm9ybWF0U3RyaW5nIElmIHBhcnNpbmcgZmFpbHMgdHJ5IHRvIHBhcnNlIHRoZSBkYXRlIGJ5IHByZXNzaW5nIGBmb3JtYXRTdHJpbmdgXG4gKiBAcGFyYW0gZGVmYXVsdFZhbHVlIElmIHBhcnNpbmcgZmFpbHMgcmV0dXJuZWQgZGVmYXVsdCB2YWx1ZSwgZGVmYXVsdDogYG5ldyBEYXRlKE5hTilgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0RhdGUodmFsdWU6IERhdGUgfCBzdHJpbmcgfCBudW1iZXIsIG9wdGlvbnM/OiBUb0RhdGVPcHRpb25zKTogRGF0ZSB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIG9wdGlvbnMgPSB7IGZvcm1hdFN0cmluZzogb3B0aW9ucyB9O1xuICBjb25zdCB7IGZvcm1hdFN0cmluZywgZGVmYXVsdFZhbHVlIH0gPSB7IGZvcm1hdFN0cmluZzogJ3l5eXktTU0tZGQgSEg6bW06c3MnLCBkZWZhdWx0VmFsdWU6IG5ldyBEYXRlKE5hTiksIC4uLm9wdGlvbnMgfTtcbiAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHJldHVybiB2YWx1ZTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHJldHVybiBkZWZhdWx0VmFsdWU7XG5cbiAgbGV0IHRyeURhdGUgPSAhaXNOYU4oK3ZhbHVlKSA/IG5ldyBEYXRlKCt2YWx1ZSkgOiBwYXJzZUlTTyh2YWx1ZSk7XG4gIGlmIChpc05hTih0cnlEYXRlIGFzIE56U2FmZUFueSkpIHtcbiAgICB0cnlEYXRlID0gcGFyc2UodmFsdWUsIGZvcm1hdFN0cmluZyEsIGRlZmF1bHRWYWx1ZSk7XG4gIH1cblxuICByZXR1cm4gaXNOYU4odHJ5RGF0ZSBhcyBOelNhZmVBbnkpID8gZGVmYXVsdFZhbHVlIDogdHJ5RGF0ZTtcbn1cbiJdfQ==