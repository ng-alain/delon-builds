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
 * @fileoverview added by tsickle
 * Generated from: time.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
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
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: date-time.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { fixEndTimeOfRange, getTimeDistance, toDate };
//# sourceMappingURL=date-time.js.map
