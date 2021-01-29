/**
 * @license ng-alain(cipchk@qq.com) v11.3.1
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('date-fns/addDays'), require('date-fns/endOfDay'), require('date-fns/endOfMonth'), require('date-fns/endOfWeek'), require('date-fns/endOfYear'), require('date-fns/parse'), require('date-fns/parseISO'), require('date-fns/startOfDay'), require('date-fns/startOfMonth'), require('date-fns/startOfWeek'), require('date-fns/startOfYear'), require('date-fns/subMonths'), require('date-fns/subWeeks'), require('date-fns/subYears')) :
    typeof define === 'function' && define.amd ? define('@delon/util/date-time', ['exports', 'date-fns/addDays', 'date-fns/endOfDay', 'date-fns/endOfMonth', 'date-fns/endOfWeek', 'date-fns/endOfYear', 'date-fns/parse', 'date-fns/parseISO', 'date-fns/startOfDay', 'date-fns/startOfMonth', 'date-fns/startOfWeek', 'date-fns/startOfYear', 'date-fns/subMonths', 'date-fns/subWeeks', 'date-fns/subYears'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.util = global.delon.util || {}, global.delon.util['date-time'] = {}), global.addDays, global.endOfDay, global.endOfMonth, global.endOfWeek, global.endOfYear, global.parse, global.parseISO, global.startOfDay, global.startOfMonth, global.startOfWeek, global.startOfYear, global.subMonths, global.subWeeks, global.subYears));
}(this, (function (exports, addDays, endOfDay, endOfMonth, endOfWeek, endOfYear, parse, parseISO, startOfDay, startOfMonth, startOfWeek, startOfYear, subMonths, subWeeks, subYears) { 'use strict';

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
        time = time ? (typeof time === 'string' ? parse__default['default'](time, 'yyyy-MM-dd HH:mm:ss', new Date()) : new Date(time)) : new Date();
        /** @type {?} */
        var options = { weekStartsOn: 1 };
        /** @type {?} */
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
     * @param {?} dates
     * @return {?}
     */
    function fixEndTimeOfRange(dates) {
        return [startOfDay__default['default'](dates[0]), endOfDay__default['default'](dates[1])];
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
        /** @type {?} */
        var tryDate = parseISO__default['default'](value);
        if (isNaN(( /** @type {?} */(tryDate)))) {
            tryDate = parse__default['default'](value, ( /** @type {?} */(formatString)), new Date());
        }
        return isNaN(( /** @type {?} */(tryDate))) ? defaultValue : tryDate;
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

    exports.fixEndTimeOfRange = fixEndTimeOfRange;
    exports.getTimeDistance = getTimeDistance;
    exports.toDate = toDate;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=date-time.umd.js.map
