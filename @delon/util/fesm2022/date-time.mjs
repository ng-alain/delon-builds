import { parse, addDays, startOfYear, subYears, endOfYear, startOfMonth, subMonths, endOfMonth, startOfWeek, subWeeks, endOfWeek, startOfDay, endOfDay, parseISO, formatDistanceToNow, format, differenceInCalendarDays, addSeconds } from 'date-fns';

/**
 * Get the time range, return `[ Date, Date]` for the start and end dates
 *
 * 获取时间范围
 *
 * @param type 类型，带 `-` 表示过去一个时间，若指定 `number` 表示天数
 * @param time 开始时间
 * @param ignoreMaxTime 忽略追加结束日期的最大时间值
 */
function getTimeDistance(type, time, options) {
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
function fixEndTimeOfRange(dates) {
    return [startOfDay(dates[0]), endOfDay(dates[1])];
}
/**
 * Convert to `Date` format
 *
 * @param value When is a number, it is treated as a timestamp (Support seconds and milliseconds timestamp).
 */
function toDate(value, options) {
    const { formatString, defaultValue } = {
        formatString: 'yyyy-MM-dd HH:mm:ss',
        defaultValue: new Date(NaN),
        ...(typeof options === 'string' ? { formatString: options } : options)
    };
    if (value == null) {
        return defaultValue;
    }
    if (value instanceof Date) {
        return value;
    }
    if (typeof value === 'number' || (typeof value === 'string' && /[0-9]{10,13}/.test(value))) {
        const valueNumber = +value;
        return new Date(`${value}`.length === 10 ? valueNumber * 1000 : valueNumber);
    }
    let tryDate = parseISO(value);
    if (isNaN(tryDate)) {
        tryDate = parse(value, formatString, new Date());
    }
    return isNaN(tryDate) ? defaultValue : tryDate;
}
/**
 * Format date, supports `Date, number, string` types
 *
 * @param value When is a number, it is treated as a timestamp (Support seconds and milliseconds timestamp).
 * @param formatString Please refer to [date-fnd format](https://date-fns.org/v2.30.0/docs/format) for string format
 * @param dateLocale Recommended to be consistent with NG-ZORRO by using `inject(NZ_DATE_LOCALE)`
 */
function formatDate(value, formatString, dateLocale) {
    value = toDate(value);
    if (isNaN(value))
        return '';
    const langOpt = { locale: dateLocale };
    return formatString === 'fn' ? formatDistanceToNow(value, langOpt) : format(value, formatString, langOpt);
}

// TODO: timezone process
class DateTimePickerUtil {
    /**
     * Current local time
     *
     * 当前本地时间
     */
    get now() {
        return new Date();
    }
    /**
     * Current local date (not including time part)
     *
     * 当前本地日期（不包含时间部分）
     */
    get date() {
        return this.removeTime(this.now);
    }
    /**
     * Remove the time part of the date
     *
     * 移除日期的时间部分
     */
    removeTime(d) {
        return new Date(d.toDateString());
    }
    /**
     * Format date-time
     *
     * 格式化日期
     */
    format(d, formatString = 'yyyy-MM-dd HH:mm:ss') {
        return format(d, formatString);
    }
    genTick(count) {
        return new Array(count).fill(0).map((_, idx) => idx);
    }
    /**
     * Calculate the number of days between two dates, `0` means the same day
     *
     * 计算两个日期相差天数，`0` 表示同一天
     */
    getDiffDays(dateLeft, dateRight) {
        return differenceInCalendarDays(dateLeft, typeof dateRight === 'number' ? addDays(this.date, dateRight) : dateRight || this.date);
    }
    /**
     * Disabled Before date (Default: today), Generally serves `nzDisabledDate`
     *
     * 禁用之前日期（默认：今天），一般服务于 `nzDisabledDate`
     */
    disabledBeforeDate(options) {
        return (d) => this.getDiffDays(d, options?.offsetDays) < 0;
    }
    /**
     * Disabled After date (Default: today), Generally serves `nzDisabledDate`
     *
     * 禁用之后日期（默认：今天），一般服务于 `nzDisabledDate`
     */
    disabledAfterDate(options) {
        return (d) => this.getDiffDays(d, options?.offsetDays) > 0;
    }
    baseDisabledTime(type, offsetSeconds) {
        const tick24 = this.genTick(24);
        const tick60 = this.genTick(60);
        return (current) => {
            const cur = current;
            if (cur == null) {
                return {};
            }
            const now = addSeconds(this.now, offsetSeconds || 0);
            const nowHours = now.getHours();
            const nowMinutes = now.getMinutes();
            const curHours = cur.getHours();
            const isToday = this.getDiffDays(this.removeTime(cur)) === 0;
            return {
                nzDisabledHours: () => {
                    if (!isToday)
                        return [];
                    return type === 'before' ? tick24.slice(0, nowHours) : tick24.slice(nowHours + 1);
                },
                nzDisabledMinutes: () => {
                    if (isToday && curHours === nowHours) {
                        return type === 'before' ? tick60.slice(0, nowMinutes) : tick60.slice(nowMinutes + 1);
                    }
                    return [];
                },
                nzDisabledSeconds: () => {
                    if (isToday && curHours === nowHours && cur.getMinutes() === nowMinutes) {
                        const nowSeconds = now.getSeconds();
                        return type === 'before' ? tick60.slice(0, nowSeconds) : tick60.slice(nowSeconds + 1);
                    }
                    return [];
                }
            };
        };
    }
    /**
     * Disabled Before time (Default: now), Generally serves `nzDisabledTime`
     *
     * 禁用之前时间（默认：现在），一般服务于 `nzDisabledTime`
     */
    disabledBeforeTime(options) {
        return this.baseDisabledTime('before', options?.offsetSeconds);
    }
    /**
     * Disabled After time (Default: now), Generally serves `nzDisabledTime`
     *
     * 禁用之后时间（默认：现在），一般服务于 `nzDisabledTime`
     */
    disabledAfterTime(options) {
        return this.baseDisabledTime('after', options?.offsetSeconds);
    }
}
const dateTimePickerUtil = new DateTimePickerUtil();

/**
 * Generated bundle index. Do not edit.
 */

export { DateTimePickerUtil, dateTimePickerUtil, fixEndTimeOfRange, formatDate, getTimeDistance, toDate };
//# sourceMappingURL=date-time.mjs.map
