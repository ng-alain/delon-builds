/**
 * @license ng-alain(cipchk@qq.com) v11.3.1
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@delon/util/other')) :
    typeof define === 'function' && define.amd ? define('@delon/util/math', ['exports', '@delon/util/other'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.util = global.delon.util || {}, global.delon.util.math = {}), global.delon.util.other));
}(this, (function (exports, other) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: in-range.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Checks if `value` is between `start` and `end` to, but not including `end`. If `end` is not specified, it's set to start with `start` then set to `0`. If `start` is greater than `end` the params are swapped to support negative ranges.
     *
     * 检查 `value` 是否在 `start` 与 `end` 之间，但不包括 `end`。 如果 `end` 没有指定，那么 `start` 设置为 `0`。 如果 `start` 大于 `end`，那么参数会交换以便支持负范围。
     * ```ts
     * inRange(3, 2, 4); // true
     * inRange(4, 8); // true
     * inRange(4, 2); // false
     * inRange(2, 2); // false
     * inRange(1.2, 2); // true
     * inRange(-3, -2, -6); // true
     * ```
     * @param {?} value
     * @param {?} start
     * @param {?=} end
     * @return {?}
     */
    function inRange(value, start, end) {
        if (end === undefined) {
            end = start;
            start = 0;
        }
        other.assertNumber(value);
        other.assertNumber(start);
        other.assertNumber(end);
        return value >= Math.min(start, end) && value < Math.max(start, end);
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: round.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Computes `number` rounded up to `precision`.
     *
     * 根据 `precision`（精度） 向上舍入 `number`。
     * ```ts
     * ceil(4.006); // 5
     * ceil(6.004, 2); // 6.01
     * ceil(6040, -2); // 6100
     * ```
     * @param {?} number
     * @param {?=} precision
     * @return {?}
     */
    function ceil(number, precision) {
        if (precision === void 0) { precision = 0; }
        return createRound(number, precision, 'ceil');
    }
    /**
     * Computes `number` rounded down to `precision`.
     *
     * 根据 `precision`（精度） 向下舍入 `number`。
     * ```ts
     * floor(4.006); // 4
     * floor(0.046, 2); // 0.04
     * floor(4060, -2); // 4000
     * ```
     * @param {?} number
     * @param {?=} precision
     * @return {?}
     */
    function floor(number, precision) {
        if (precision === void 0) { precision = 0; }
        return createRound(number, precision, 'floor');
    }
    /**
     * Computes `number` rounded to `precision`.
     *
     * 根据 `precision`（精度） 四舍五入 `number`。
     * ```ts
     * round(4.006); // 4
     * round(4.006, 2); // 4.01
     * round(4060, -2); // 4100
     * ```
     * @param {?} number
     * @param {?=} precision
     * @return {?}
     */
    function round(number, precision) {
        if (precision === void 0) { precision = 0; }
        return createRound(number, precision, 'round');
    }
    /**
     * @param {?} number
     * @param {?} precision
     * @param {?} methodName
     * @return {?}
     */
    function createRound(number, precision, methodName) {
        /** @type {?} */
        var func = ( /** @type {?} */(Math[methodName]));
        precision = precision == null ? 0 : Math.min(precision, 292);
        if (!precision) {
            return func(number);
        }
        // Shift with exponential notation to avoid floating-point issues.
        // See [MDN](https://mdn.io/round#Examples) for more details.
        /** @type {?} */
        var pair = (number + "e").split('e');
        /** @type {?} */
        var value = func(Number(pair[0] + "e" + (Number(pair[1]) + precision)));
        pair = (value + "e").split('e');
        return Number(pair[0] + "e" + (Number(pair[1]) - precision));
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: delon-util-math.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.ceil = ceil;
    exports.floor = floor;
    exports.inRange = inRange;
    exports.round = round;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=delon-util-math.umd.js.map
