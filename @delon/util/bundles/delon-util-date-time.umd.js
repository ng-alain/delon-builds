/**
 * @license ng-alain(cipchk@qq.com) v12.0.3
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('date-fns')) :
    typeof define === 'function' && define.amd ? define('@delon/util/date-time', ['exports', 'date-fns'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.util = global.delon.util || {}, global.delon.util['date-time'] = {}), global.dateFns));
}(this, (function (exports, dateFns) { 'use strict';

    /**
     * Get the time range, return `[ Date, Date]` for the start and end dates
     *
     * 获取时间范围
     *
     * @param type 类型，带 `-` 表示过去一个时间，若指定 `number` 表示天数
     * @param time 开始时间
     */
    function getTimeDistance(type, time) {
        time = time
            ? typeof time === 'string'
                ? dateFns.parse(time, 'yyyy-MM-dd HH:mm:ss', new Date())
                : new Date(time)
            : new Date();
        var options = { weekStartsOn: 1 };
        var res;
        switch (type) {
            case 'today':
                res = [time, time];
                break;
            case '-today':
                res = [dateFns.addDays(time, -1), time];
                break;
            case 'yesterday':
                res = [dateFns.addDays(time, -1), dateFns.addDays(time, -1)];
                break;
            case 'week':
                res = [dateFns.startOfWeek(time, options), dateFns.endOfWeek(time, options)];
                break;
            case '-week':
                res = [dateFns.startOfWeek(dateFns.subWeeks(time, 1), options), dateFns.endOfWeek(dateFns.subWeeks(time, 1), options)];
                break;
            case 'month':
                res = [dateFns.startOfMonth(time), dateFns.endOfMonth(time)];
                break;
            case '-month':
                res = [dateFns.startOfMonth(dateFns.subMonths(time, 1)), dateFns.endOfMonth(dateFns.subMonths(time, 1))];
                break;
            case 'year':
                res = [dateFns.startOfYear(time), dateFns.endOfYear(time)];
                break;
            case '-year':
                res = [dateFns.startOfYear(dateFns.subYears(time, 1)), dateFns.endOfYear(dateFns.subYears(time, 1))];
                break;
            default:
                res = type > 0 ? [time, dateFns.addDays(time, type)] : [dateFns.addDays(time, type), time];
                break;
        }
        return fixEndTimeOfRange(res);
    }
    /**
     * fix time is the most, big value
     */
    function fixEndTimeOfRange(dates) {
        return [dateFns.startOfDay(dates[0]), dateFns.endOfDay(dates[1])];
    }
    /**
     * Return the date parsed from string using the given format string
     * - If the argument is a number, it is treated as a timestamp.
     *
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
        var tryDate = dateFns.parseISO(value);
        if (isNaN(tryDate)) {
            tryDate = dateFns.parse(value, formatString, new Date());
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
            return dateFns.format(d, formatString);
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
            return dateFns.differenceInCalendarDays(dateLeft, typeof dateRight === 'number' ? dateFns.addDays(this.date, dateRight) : dateRight || this.date);
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
                var now = dateFns.addSeconds(_this.now, offsetSeconds || 0);
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
                    }
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
