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
import addSeconds from 'date-fns/addSeconds';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import format from 'date-fns/format';

/**
 * @fileoverview added by tsickle
 * Generated from: time.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Get the time range, return `[ Date, Date]` for the start and end dates
 *
 * 获取时间范围
 * @param {?} type 类型，带 `-` 表示过去一个时间，若指定 `number` 表示天数
 * @param {?=} time 开始时间
 * @return {?}
 */
function getTimeDistance(type, time) {
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
function fixEndTimeOfRange(dates) {
    return [startOfDay(dates[0]), endOfDay(dates[1])];
}
/**
 * Return the date parsed from string using the given format string
 * - If the argument is a number, it is treated as a timestamp.
 * @param {?} value
 * @param {?=} options
 * @return {?}
 */
function toDate(value, options) {
    if (typeof options === 'string')
        options = { formatString: options };
    const { formatString, defaultValue } = Object.assign({ formatString: 'yyyy-MM-dd HH:mm:ss', defaultValue: new Date(NaN) }, options);
    if (value == null) {
        return defaultValue;
    }
    if (value instanceof Date) {
        return value;
    }
    if (typeof value === 'number' || (typeof value === 'string' && /[0-9]{10,13}/.test(value))) {
        return new Date(+value);
    }
    /** @type {?} */
    let tryDate = parseISO(value);
    if (isNaN((/** @type {?} */ (tryDate)))) {
        tryDate = parse(value, (/** @type {?} */ (formatString)), new Date());
    }
    return isNaN((/** @type {?} */ (tryDate))) ? defaultValue : tryDate;
}

/**
 * @fileoverview added by tsickle
 * Generated from: picker.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// TODO: timezone process
class DateTimePickerUtil {
    /**
     * Current local time
     *
     * 当前本地时间
     * @return {?}
     */
    get now() {
        return new Date();
    }
    /**
     * Current local date (not including time part)
     *
     * 当前本地日期（不包含时间部分）
     * @return {?}
     */
    get date() {
        return this.removeTime(this.now);
    }
    /**
     * Remove the time part of the date
     *
     * 移除日期的时间部分
     * @param {?} d
     * @return {?}
     */
    removeTime(d) {
        return new Date(d.toDateString());
    }
    /**
     * Format date-time
     *
     * 格式化日期
     * @param {?} d
     * @param {?=} formatString
     * @return {?}
     */
    format(d, formatString = 'yyyy-MM-dd HH:mm:ss') {
        return format(d, formatString);
    }
    /**
     * @private
     * @param {?} count
     * @return {?}
     */
    genTick(count) {
        return new Array(count).fill(0).map((/**
         * @param {?} _
         * @param {?} idx
         * @return {?}
         */
        (_, idx) => idx));
    }
    /**
     * Calculate the number of days between two dates, `0` means the same day
     *
     * 计算两个日期相差天数，`0` 表示同一天
     * @param {?} dateLeft
     * @param {?=} dateRight
     * @return {?}
     */
    getDiffDays(dateLeft, dateRight) {
        return differenceInCalendarDays(dateLeft, typeof dateRight === 'number' ? addDays(this.date, dateRight) : dateRight || this.date);
    }
    /**
     * Disabled Before date (Default: today), Generally serves `nzDisabledDate`
     *
     * 禁用之前日期（默认：今天），一般服务于 `nzDisabledDate`
     * @param {?=} options
     * @return {?}
     */
    disabledBeforeDate(options) {
        return (/**
         * @param {?} d
         * @return {?}
         */
        (d) => this.getDiffDays(d, options === null || options === void 0 ? void 0 : options.offsetDays) < 0);
    }
    /**
     * Disabled After date (Default: today), Generally serves `nzDisabledDate`
     *
     * 禁用之后日期（默认：今天），一般服务于 `nzDisabledDate`
     * @param {?=} options
     * @return {?}
     */
    disabledAfterDate(options) {
        return (/**
         * @param {?} d
         * @return {?}
         */
        (d) => this.getDiffDays(d, options === null || options === void 0 ? void 0 : options.offsetDays) > 0);
    }
    /**
     * @private
     * @param {?} type
     * @param {?=} offsetSeconds
     * @return {?}
     */
    baseDisabledTime(type, offsetSeconds) {
        /** @type {?} */
        const tick24 = this.genTick(24);
        /** @type {?} */
        const tick60 = this.genTick(60);
        return (/**
         * @param {?} current
         * @return {?}
         */
        (current) => {
            /** @type {?} */
            const cur = (/** @type {?} */ (current));
            if (cur == null) {
                return (/** @type {?} */ ({}));
            }
            /** @type {?} */
            const now = addSeconds(this.now, offsetSeconds || 0);
            /** @type {?} */
            const nowHours = now.getHours();
            /** @type {?} */
            const nowMinutes = now.getMinutes();
            /** @type {?} */
            const curHours = cur.getHours();
            /** @type {?} */
            const isToday = this.getDiffDays(this.removeTime(cur)) === 0;
            return {
                nzDisabledHours: (/**
                 * @return {?}
                 */
                () => {
                    if (!isToday)
                        return [];
                    return type === 'before' ? tick24.slice(0, nowHours) : tick24.slice(nowHours + 1);
                }),
                nzDisabledMinutes: (/**
                 * @return {?}
                 */
                () => {
                    if (isToday && curHours === nowHours) {
                        return type === 'before' ? tick60.slice(0, nowMinutes) : tick60.slice(nowMinutes + 1);
                    }
                    return [];
                }),
                nzDisabledSeconds: (/**
                 * @return {?}
                 */
                () => {
                    if (isToday && curHours === nowHours && cur.getMinutes() === nowMinutes) {
                        /** @type {?} */
                        const nowSeconds = now.getSeconds();
                        return type === 'before' ? tick60.slice(0, nowSeconds) : tick60.slice(nowSeconds + 1);
                    }
                    return [];
                }),
            };
        });
    }
    /**
     * Disabled Before time (Default: now), Generally serves `nzDisabledTime`
     *
     * 禁用之前时间（默认：现在），一般服务于 `nzDisabledTime`
     * @param {?=} options
     * @return {?}
     */
    disabledBeforeTime(options) {
        return this.baseDisabledTime('before', options === null || options === void 0 ? void 0 : options.offsetSeconds);
    }
    /**
     * Disabled After time (Default: now), Generally serves `nzDisabledTime`
     *
     * 禁用之后时间（默认：现在），一般服务于 `nzDisabledTime`
     * @param {?=} options
     * @return {?}
     */
    disabledAfterTime(options) {
        return this.baseDisabledTime('after', options === null || options === void 0 ? void 0 : options.offsetSeconds);
    }
}
/** @type {?} */
const dateTimePickerUtil = new DateTimePickerUtil();

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: delon-util-date-time.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DateTimePickerUtil, dateTimePickerUtil, fixEndTimeOfRange, getTimeDistance, toDate };
//# sourceMappingURL=delon-util-date-time.js.map
