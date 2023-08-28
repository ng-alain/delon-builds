import { addDays, endOfDay, endOfMonth, endOfWeek, endOfYear, parse, parseISO, startOfDay, startOfMonth, startOfWeek, startOfYear, subMonths, subWeeks, subYears, format, formatDistanceToNow } from 'date-fns';
/**
 * Get the time range, return `[ Date, Date]` for the start and end dates
 *
 * 获取时间范围
 *
 * @param type 类型，带 `-` 表示过去一个时间，若指定 `number` 表示天数
 * @param time 开始时间
 * @param ignoreMaxTime 忽略追加结束日期的最大时间值
 */
export function getTimeDistance(type, time, options) {
    time = time
        ? typeof time === 'string'
            ? parse(time, 'yyyy-MM-dd HH:mm:ss', new Date())
            : new Date(time)
        : new Date();
    const opt = { weekStartsOn: 1 };
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
            res = [startOfWeek(time, opt), endOfWeek(time, opt)];
            break;
        case '-week':
            res = [startOfWeek(subWeeks(time, 1), opt), endOfWeek(subWeeks(time, 1), opt)];
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
    return options?.ignoreMaxTime ? res : fixEndTimeOfRange(res);
}
/**
 * fix time is the most, big value
 */
export function fixEndTimeOfRange(dates) {
    return [startOfDay(dates[0]), endOfDay(dates[1])];
}
/**
 * Return the date parsed from string using the given format string
 * - If the argument is a number, it is treated as a timestamp.
 *
 * @param formatString If parsing fails try to parse the date by pressing `formatString`
 * @param defaultValue If parsing fails returned default value, default: `new Date(NaN)`
 */
export function toDate(value, options) {
    if (typeof options === 'string')
        options = { formatString: options };
    const { formatString, defaultValue } = {
        formatString: 'yyyy-MM-dd HH:mm:ss',
        defaultValue: new Date(NaN),
        ...options
    };
    if (value == null) {
        return defaultValue;
    }
    if (value instanceof Date) {
        return value;
    }
    if (typeof value === 'number' || (typeof value === 'string' && /[0-9]{10,13}/.test(value))) {
        return new Date(+value);
    }
    let tryDate = parseISO(value);
    if (isNaN(tryDate)) {
        tryDate = parse(value, formatString, new Date());
    }
    return isNaN(tryDate) ? defaultValue : tryDate;
}
export function formatDate(value, formatString, dateLocale) {
    value = toDate(value);
    if (isNaN(value))
        return '';
    const langOpt = { locale: dateLocale };
    return formatString === 'fn' ? formatDistanceToNow(value, langOpt) : format(value, formatString, langOpt);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3V0aWwvZGF0ZS10aW1lL3RpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxRQUFRLEVBQ1IsVUFBVSxFQUNWLFNBQVMsRUFDVCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFFBQVEsRUFDUixVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxXQUFXLEVBQ1gsU0FBUyxFQUNULFFBQVEsRUFDUixRQUFRLEVBQ1IsTUFBTSxFQUNOLG1CQUFtQixFQUNwQixNQUFNLFVBQVUsQ0FBQztBQUtsQjs7Ozs7Ozs7R0FRRztBQUNILE1BQU0sVUFBVSxlQUFlLENBQzdCLElBQTBHLEVBQzFHLElBQTZCLEVBQzdCLE9BQXFDO0lBRXJDLElBQUksR0FBRyxJQUFJO1FBQ1QsQ0FBQyxDQUFDLE9BQU8sSUFBSSxLQUFLLFFBQVE7WUFDeEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUNoRCxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ2YsTUFBTSxHQUFHLEdBQXdCLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxDQUFDO0lBRXJELElBQUksR0FBaUIsQ0FBQztJQUN0QixRQUFRLElBQUksRUFBRTtRQUNaLEtBQUssT0FBTztZQUNWLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNuQixNQUFNO1FBQ1IsS0FBSyxRQUFRO1lBQ1gsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2hDLE1BQU07UUFDUixLQUFLLFdBQVc7WUFDZCxHQUFHLEdBQUcsQ0FBQyxP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QUMsQ0FBQyxFQUFFO1FBQzFGLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN6QjtJQUNELElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixJQUFJLEtBQUssQ0FBQyxPQUFvQixDQUFDLEVBQUU7UUFDL0IsT0FBTyxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsWUFBYSxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztLQUNuRDtJQUVELE9BQU8sS0FBSyxDQUFDLE9BQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDOUQsQ0FBQztBQUVELE1BQU0sVUFBVSxVQUFVLENBQUMsS0FBNkIsRUFBRSxZQUFvQixFQUFFLFVBQXVCO0lBQ3JHLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEIsSUFBSSxLQUFLLENBQUMsS0FBa0IsQ0FBQztRQUFFLE9BQU8sRUFBRSxDQUFDO0lBRXpDLE1BQU0sT0FBTyxHQUFHLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxDQUFDO0lBQ3ZDLE9BQU8sWUFBWSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM1RyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgYWRkRGF5cyxcbiAgZW5kT2ZEYXksXG4gIGVuZE9mTW9udGgsXG4gIGVuZE9mV2VlayxcbiAgZW5kT2ZZZWFyLFxuICBwYXJzZSxcbiAgcGFyc2VJU08sXG4gIHN0YXJ0T2ZEYXksXG4gIHN0YXJ0T2ZNb250aCxcbiAgc3RhcnRPZldlZWssXG4gIHN0YXJ0T2ZZZWFyLFxuICBzdWJNb250aHMsXG4gIHN1YldlZWtzLFxuICBzdWJZZWFycyxcbiAgZm9ybWF0LFxuICBmb3JtYXREaXN0YW5jZVRvTm93XG59IGZyb20gJ2RhdGUtZm5zJztcblxuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBEYXRlTG9jYWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcblxuLyoqXG4gKiBHZXQgdGhlIHRpbWUgcmFuZ2UsIHJldHVybiBgWyBEYXRlLCBEYXRlXWAgZm9yIHRoZSBzdGFydCBhbmQgZW5kIGRhdGVzXG4gKlxuICog6I635Y+W5pe26Ze06IyD5Zu0XG4gKlxuICogQHBhcmFtIHR5cGUg57G75Z6L77yM5bimIGAtYCDooajnpLrov4fljrvkuIDkuKrml7bpl7TvvIzoi6XmjIflrpogYG51bWJlcmAg6KGo56S65aSp5pWwXG4gKiBAcGFyYW0gdGltZSDlvIDlp4vml7bpl7RcbiAqIEBwYXJhbSBpZ25vcmVNYXhUaW1lIOW/veeVpei/veWKoOe7k+adn+aXpeacn+eahOacgOWkp+aXtumXtOWAvFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZURpc3RhbmNlKFxuICB0eXBlOiAndG9kYXknIHwgJy10b2RheScgfCAneWVzdGVyZGF5JyB8ICd3ZWVrJyB8ICctd2VlaycgfCAnbW9udGgnIHwgJy1tb250aCcgfCAneWVhcicgfCAnLXllYXInIHwgbnVtYmVyLFxuICB0aW1lPzogRGF0ZSB8IHN0cmluZyB8IG51bWJlcixcbiAgb3B0aW9ucz86IHsgaWdub3JlTWF4VGltZT86IGJvb2xlYW4gfVxuKTogW0RhdGUsIERhdGVdIHtcbiAgdGltZSA9IHRpbWVcbiAgICA/IHR5cGVvZiB0aW1lID09PSAnc3RyaW5nJ1xuICAgICAgPyBwYXJzZSh0aW1lLCAneXl5eS1NTS1kZCBISDptbTpzcycsIG5ldyBEYXRlKCkpXG4gICAgICA6IG5ldyBEYXRlKHRpbWUpXG4gICAgOiBuZXcgRGF0ZSgpO1xuICBjb25zdCBvcHQ6IHsgd2Vla1N0YXJ0c09uOiAxIH0gPSB7IHdlZWtTdGFydHNPbjogMSB9O1xuXG4gIGxldCByZXM6IFtEYXRlLCBEYXRlXTtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAndG9kYXknOlxuICAgICAgcmVzID0gW3RpbWUsIHRpbWVdO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnLXRvZGF5JzpcbiAgICAgIHJlcyA9IFthZGREYXlzKHRpbWUsIC0xKSwgdGltZV07XG4gICAgICBicmVhaztcbiAgICBjYXNlICd5ZXN0ZXJkYXknOlxuICAgICAgcmVzID0gW2FkZERheXModGltZSwgLTEpLCBhZGREYXlzKHRpbWUsIC0xKV07XG4gICAgICBicmVhaztcbiAgICBjYXNlICd3ZWVrJzpcbiAgICAgIHJlcyA9IFtzdGFydE9mV2Vlayh0aW1lLCBvcHQpLCBlbmRPZldlZWsodGltZSwgb3B0KV07XG4gICAgICBicmVhaztcbiAgICBjYXNlICctd2Vlayc6XG4gICAgICByZXMgPSBbc3RhcnRPZldlZWsoc3ViV2Vla3ModGltZSwgMSksIG9wdCksIGVuZE9mV2VlayhzdWJXZWVrcyh0aW1lLCAxKSwgb3B0KV07XG4gICAgICBicmVhaztcbiAgICBjYXNlICdtb250aCc6XG4gICAgICByZXMgPSBbc3RhcnRPZk1vbnRoKHRpbWUpLCBlbmRPZk1vbnRoKHRpbWUpXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJy1tb250aCc6XG4gICAgICByZXMgPSBbc3RhcnRPZk1vbnRoKHN1Yk1vbnRocyh0aW1lLCAxKSksIGVuZE9mTW9udGgoc3ViTW9udGhzKHRpbWUsIDEpKV07XG4gICAgICBicmVhaztcbiAgICBjYXNlICd5ZWFyJzpcbiAgICAgIHJlcyA9IFtzdGFydE9mWWVhcih0aW1lKSwgZW5kT2ZZZWFyKHRpbWUpXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJy15ZWFyJzpcbiAgICAgIHJlcyA9IFtzdGFydE9mWWVhcihzdWJZZWFycyh0aW1lLCAxKSksIGVuZE9mWWVhcihzdWJZZWFycyh0aW1lLCAxKSldO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlcyA9IHR5cGUgPiAwID8gW3RpbWUsIGFkZERheXModGltZSwgdHlwZSldIDogW2FkZERheXModGltZSwgdHlwZSksIHRpbWVdO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIG9wdGlvbnM/Lmlnbm9yZU1heFRpbWUgPyByZXMgOiBmaXhFbmRUaW1lT2ZSYW5nZShyZXMpO1xufVxuXG4vKipcbiAqIGZpeCB0aW1lIGlzIHRoZSBtb3N0LCBiaWcgdmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpeEVuZFRpbWVPZlJhbmdlKGRhdGVzOiBbRGF0ZSwgRGF0ZV0pOiBbRGF0ZSwgRGF0ZV0ge1xuICByZXR1cm4gW3N0YXJ0T2ZEYXkoZGF0ZXNbMF0pLCBlbmRPZkRheShkYXRlc1sxXSldO1xufVxuXG5leHBvcnQgdHlwZSBUb0RhdGVPcHRpb25zID0gc3RyaW5nIHwgeyBmb3JtYXRTdHJpbmc/OiBzdHJpbmc7IGRlZmF1bHRWYWx1ZT86IE56U2FmZUFueSB9O1xuXG4vKipcbiAqIFJldHVybiB0aGUgZGF0ZSBwYXJzZWQgZnJvbSBzdHJpbmcgdXNpbmcgdGhlIGdpdmVuIGZvcm1hdCBzdHJpbmdcbiAqIC0gSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIEBwYXJhbSBmb3JtYXRTdHJpbmcgSWYgcGFyc2luZyBmYWlscyB0cnkgdG8gcGFyc2UgdGhlIGRhdGUgYnkgcHJlc3NpbmcgYGZvcm1hdFN0cmluZ2BcbiAqIEBwYXJhbSBkZWZhdWx0VmFsdWUgSWYgcGFyc2luZyBmYWlscyByZXR1cm5lZCBkZWZhdWx0IHZhbHVlLCBkZWZhdWx0OiBgbmV3IERhdGUoTmFOKWBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRGF0ZSh2YWx1ZT86IERhdGUgfCBzdHJpbmcgfCBudW1iZXIgfCBudWxsLCBvcHRpb25zPzogVG9EYXRlT3B0aW9ucyk6IERhdGUge1xuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKSBvcHRpb25zID0geyBmb3JtYXRTdHJpbmc6IG9wdGlvbnMgfTtcbiAgY29uc3QgeyBmb3JtYXRTdHJpbmcsIGRlZmF1bHRWYWx1ZSB9ID0ge1xuICAgIGZvcm1hdFN0cmluZzogJ3l5eXktTU0tZGQgSEg6bW06c3MnLFxuICAgIGRlZmF1bHRWYWx1ZTogbmV3IERhdGUoTmFOKSxcbiAgICAuLi5vcHRpb25zXG4gIH07XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgfVxuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8ICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIC9bMC05XXsxMCwxM30vLnRlc3QodmFsdWUpKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZSgrdmFsdWUpO1xuICB9XG4gIGxldCB0cnlEYXRlID0gcGFyc2VJU08odmFsdWUpO1xuICBpZiAoaXNOYU4odHJ5RGF0ZSBhcyBOelNhZmVBbnkpKSB7XG4gICAgdHJ5RGF0ZSA9IHBhcnNlKHZhbHVlLCBmb3JtYXRTdHJpbmchLCBuZXcgRGF0ZSgpKTtcbiAgfVxuXG4gIHJldHVybiBpc05hTih0cnlEYXRlIGFzIE56U2FmZUFueSkgPyBkZWZhdWx0VmFsdWUgOiB0cnlEYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZSh2YWx1ZTogRGF0ZSB8IHN0cmluZyB8IG51bWJlciwgZm9ybWF0U3RyaW5nOiBzdHJpbmcsIGRhdGVMb2NhbGU/OiBEYXRlTG9jYWxlKTogc3RyaW5nIHtcbiAgdmFsdWUgPSB0b0RhdGUodmFsdWUpO1xuICBpZiAoaXNOYU4odmFsdWUgYXMgTnpTYWZlQW55KSkgcmV0dXJuICcnO1xuXG4gIGNvbnN0IGxhbmdPcHQgPSB7IGxvY2FsZTogZGF0ZUxvY2FsZSB9O1xuICByZXR1cm4gZm9ybWF0U3RyaW5nID09PSAnZm4nID8gZm9ybWF0RGlzdGFuY2VUb05vdyh2YWx1ZSwgbGFuZ09wdCkgOiBmb3JtYXQodmFsdWUsIGZvcm1hdFN0cmluZywgbGFuZ09wdCk7XG59XG4iXX0=