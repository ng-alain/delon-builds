/**
 * @license ng-alain(cipchk@qq.com) v11.7.0
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('date-fns/addDays'), require('date-fns/endOfDay'), require('date-fns/endOfMonth'), require('date-fns/endOfWeek'), require('date-fns/endOfYear'), require('date-fns/parse'), require('date-fns/parseISO'), require('date-fns/startOfDay'), require('date-fns/startOfMonth'), require('date-fns/startOfWeek'), require('date-fns/startOfYear'), require('date-fns/subMonths'), require('date-fns/subWeeks'), require('date-fns/subYears'), require('date-fns/addSeconds'), require('date-fns/differenceInCalendarDays'), require('date-fns/format')) :
    typeof define === 'function' && define.amd ? define('@delon/util/date-time', ['exports', 'date-fns/addDays', 'date-fns/endOfDay', 'date-fns/endOfMonth', 'date-fns/endOfWeek', 'date-fns/endOfYear', 'date-fns/parse', 'date-fns/parseISO', 'date-fns/startOfDay', 'date-fns/startOfMonth', 'date-fns/startOfWeek', 'date-fns/startOfYear', 'date-fns/subMonths', 'date-fns/subWeeks', 'date-fns/subYears', 'date-fns/addSeconds', 'date-fns/differenceInCalendarDays', 'date-fns/format'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.util = global.delon.util || {}, global.delon.util['date-time'] = {}), global.addDays, global.endOfDay, global.endOfMonth, global.endOfWeek, global.endOfYear, global.parse, global.parseISO, global.startOfDay, global.startOfMonth, global.startOfWeek, global.startOfYear, global.subMonths, global.subWeeks, global.subYears, global.addSeconds, global.differenceInCalendarDays, global.format));
}(this, (function (exports, addDays, endOfDay, endOfMonth, endOfWeek, endOfYear, parse, parseISO, startOfDay, startOfMonth, startOfWeek, startOfYear, subMonths, subWeeks, subYears, addSeconds, differenceInCalendarDays, format) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var addDays__default = /*#__PURE__*/_interopDefaultLegacy(addDays);
    var endOfDay__default = /*#__PURE__*/_interopDefaultLegacy(endOfDay);
    var endOfMonth__default = /*#__PURE__*/_interopDefaultLegacy(endOfMonth);
    var endOfWeek__default = /*#__PURE__*/_interopDefaultLegacy(endOfWeek);
    var endOfYear__default = /*#__PURE__*/_interopDefaultLegacy(endOfYear);
    var parse__default = /*#__PURE__*/_interopDefaultLegacy(parse);
    var parseISO__default = /*#__PURE__*/_interopDefaultLegacy(parseISO);
    var startOfDay__default = /*#__PURE__*/_interopDefaultLegacy(startOfDay);
    var startOfMonth__default = /*#__PURE__*/_interopDefaultLegacy(startOfMonth);
    var startOfWeek__default = /*#__PURE__*/_interopDefaultLegacy(startOfWeek);
    var startOfYear__default = /*#__PURE__*/_interopDefaultLegacy(startOfYear);
    var subMonths__default = /*#__PURE__*/_interopDefaultLegacy(subMonths);
    var subWeeks__default = /*#__PURE__*/_interopDefaultLegacy(subWeeks);
    var subYears__default = /*#__PURE__*/_interopDefaultLegacy(subYears);
    var addSeconds__default = /*#__PURE__*/_interopDefaultLegacy(addSeconds);
    var differenceInCalendarDays__default = /*#__PURE__*/_interopDefaultLegacy(differenceInCalendarDays);
    var format__default = /*#__PURE__*/_interopDefaultLegacy(format);

    /**
     * Get the time range, return `[ Date, Date]` for the start and end dates
     *
     * 获取时间范围
     * @param type 类型，带 `-` 表示过去一个时间，若指定 `number` 表示天数
     * @param time 开始时间
     */
    function getTimeDistance(type, time) {
        time = time ? (typeof time === 'string' ? parse__default['default'](time, 'yyyy-MM-dd HH:mm:ss', new Date()) : new Date(time)) : new Date();
        var options = { weekStartsOn: 1 };
        var res;
        switch (type) {
            case 'today':
                res = [time, time];
                break;
            case '-today':
                res = [addDays__default['default'](time, -1), time];
                break;
            case 'yesterday':
                res = [addDays__default['default'](time, -1), addDays__default['default'](time, -1)];
                break;
            case 'week':
                res = [startOfWeek__default['default'](time, options), endOfWeek__default['default'](time, options)];
                break;
            case '-week':
                res = [startOfWeek__default['default'](subWeeks__default['default'](time, 1), options), endOfWeek__default['default'](subWeeks__default['default'](time, 1), options)];
                break;
            case 'month':
                res = [startOfMonth__default['default'](time), endOfMonth__default['default'](time)];
                break;
            case '-month':
                res = [startOfMonth__default['default'](subMonths__default['default'](time, 1)), endOfMonth__default['default'](subMonths__default['default'](time, 1))];
                break;
            case 'year':
                res = [startOfYear__default['default'](time), endOfYear__default['default'](time)];
                break;
            case '-year':
                res = [startOfYear__default['default'](subYears__default['default'](time, 1)), endOfYear__default['default'](subYears__default['default'](time, 1))];
                break;
            default:
                res = type > 0 ? [time, addDays__default['default'](time, type)] : [addDays__default['default'](time, type), time];
                break;
        }
        return fixEndTimeOfRange(res);
    }
    /**
     * fix time is the most, big value
     */
    function fixEndTimeOfRange(dates) {
        return [startOfDay__default['default'](dates[0]), endOfDay__default['default'](dates[1])];
    }
    /**
     * Return the date parsed from string using the given format string
     * - If the argument is a number, it is treated as a timestamp.
     * @param formatString If parsing fails try to parse the date by pressing `formatString`
     * @param defaultValue If parsing fails returned default value, default: `new Date(NaN)`
     */
    function toDate(value, options) {
        if (typeof options === 'string')
            options = { formatString: options };
        var _a = Object.assign({ formatString: 'yyyy-MM-dd HH:mm:ss', defaultValue: new Date(NaN) }, options), formatString = _a.formatString, defaultValue = _a.defaultValue;
        if (value == null) {
            return defaultValue;
        }
        if (value instanceof Date) {
            return value;
        }
        if (typeof value === 'number' || (typeof value === 'string' && /[0-9]{10,13}/.test(value))) {
            return new Date(+value);
        }
        var tryDate = parseISO__default['default'](value);
        if (isNaN(tryDate)) {
            tryDate = parse__default['default'](value, formatString, new Date());
        }
        return isNaN(tryDate) ? defaultValue : tryDate;
    }

    // TODO: timezone process
    var DateTimePickerUtil = /** @class */ (function () {
        function DateTimePickerUtil() {
        }
        Object.defineProperty(DateTimePickerUtil.prototype, "now", {
            /**
             * Current local time
             *
             * 当前本地时间
             */
            get: function () {
                return new Date();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DateTimePickerUtil.prototype, "date", {
            /**
             * Current local date (not including time part)
             *
             * 当前本地日期（不包含时间部分）
             */
            get: function () {
                return this.removeTime(this.now);
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Remove the time part of the date
         *
         * 移除日期的时间部分
         */
        DateTimePickerUtil.prototype.removeTime = function (d) {
            return new Date(d.toDateString());
        };
        /**
         * Format date-time
         *
         * 格式化日期
         */
        DateTimePickerUtil.prototype.format = function (d, formatString) {
            if (formatString === void 0) { formatString = 'yyyy-MM-dd HH:mm:ss'; }
            return format__default['default'](d, formatString);
        };
        DateTimePickerUtil.prototype.genTick = function (count) {
            return new Array(count).fill(0).map(function (_, idx) { return idx; });
        };
        /**
         * Calculate the number of days between two dates, `0` means the same day
         *
         * 计算两个日期相差天数，`0` 表示同一天
         */
        DateTimePickerUtil.prototype.getDiffDays = function (dateLeft, dateRight) {
            return differenceInCalendarDays__default['default'](dateLeft, typeof dateRight === 'number' ? addDays__default['default'](this.date, dateRight) : dateRight || this.date);
        };
        /**
         * Disabled Before date (Default: today), Generally serves `nzDisabledDate`
         *
         * 禁用之前日期（默认：今天），一般服务于 `nzDisabledDate`
         */
        DateTimePickerUtil.prototype.disabledBeforeDate = function (options) {
            var _this = this;
            return function (d) { return _this.getDiffDays(d, options === null || options === void 0 ? void 0 : options.offsetDays) < 0; };
        };
        /**
         * Disabled After date (Default: today), Generally serves `nzDisabledDate`
         *
         * 禁用之后日期（默认：今天），一般服务于 `nzDisabledDate`
         */
        DateTimePickerUtil.prototype.disabledAfterDate = function (options) {
            var _this = this;
            return function (d) { return _this.getDiffDays(d, options === null || options === void 0 ? void 0 : options.offsetDays) > 0; };
        };
        DateTimePickerUtil.prototype.baseDisabledTime = function (type, offsetSeconds) {
            var _this = this;
            var tick24 = this.genTick(24);
            var tick60 = this.genTick(60);
            return function (current) {
                var cur = current;
                if (cur == null) {
                    return {};
                }
                var now = addSeconds__default['default'](_this.now, offsetSeconds || 0);
                var nowHours = now.getHours();
                var nowMinutes = now.getMinutes();
                var curHours = cur.getHours();
                var isToday = _this.getDiffDays(_this.removeTime(cur)) === 0;
                return {
                    nzDisabledHours: function () {
                        if (!isToday)
                            return [];
                        return type === 'before' ? tick24.slice(0, nowHours) : tick24.slice(nowHours + 1);
                    },
                    nzDisabledMinutes: function () {
                        if (isToday && curHours === nowHours) {
                            return type === 'before' ? tick60.slice(0, nowMinutes) : tick60.slice(nowMinutes + 1);
                        }
                        return [];
                    },
                    nzDisabledSeconds: function () {
                        if (isToday && curHours === nowHours && cur.getMinutes() === nowMinutes) {
                            var nowSeconds = now.getSeconds();
                            return type === 'before' ? tick60.slice(0, nowSeconds) : tick60.slice(nowSeconds + 1);
                        }
                        return [];
                    },
                };
            };
        };
        /**
         * Disabled Before time (Default: now), Generally serves `nzDisabledTime`
         *
         * 禁用之前时间（默认：现在），一般服务于 `nzDisabledTime`
         */
        DateTimePickerUtil.prototype.disabledBeforeTime = function (options) {
            return this.baseDisabledTime('before', options === null || options === void 0 ? void 0 : options.offsetSeconds);
        };
        /**
         * Disabled After time (Default: now), Generally serves `nzDisabledTime`
         *
         * 禁用之后时间（默认：现在），一般服务于 `nzDisabledTime`
         */
        DateTimePickerUtil.prototype.disabledAfterTime = function (options) {
            return this.baseDisabledTime('after', options === null || options === void 0 ? void 0 : options.offsetSeconds);
        };
        return DateTimePickerUtil;
    }());
    var dateTimePickerUtil = new DateTimePickerUtil();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.DateTimePickerUtil = DateTimePickerUtil;
    exports.dateTimePickerUtil = dateTimePickerUtil;
    exports.fixEndTimeOfRange = fixEndTimeOfRange;
    exports.getTimeDistance = getTimeDistance;
    exports.toDate = toDate;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=delon-util-date-time.umd.js.map
