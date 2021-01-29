import { assertNumber } from '@delon/util/other';

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
    assertNumber(value);
    assertNumber(start);
    assertNumber(end);
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
function ceil(number, precision = 0) {
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
function floor(number, precision = 0) {
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
function round(number, precision = 0) {
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
    const func = (/** @type {?} */ (Math[methodName]));
    precision = precision == null ? 0 : Math.min(precision, 292);
    if (!precision) {
        return func(number);
    }
    // Shift with exponential notation to avoid floating-point issues.
    // See [MDN](https://mdn.io/round#Examples) for more details.
    /** @type {?} */
    let pair = `${number}e`.split('e');
    /** @type {?} */
    const value = func(Number(`${pair[0]}e${Number(pair[1]) + precision}`));
    pair = `${value}e`.split('e');
    return Number(`${pair[0]}e${Number(pair[1]) - precision}`);
}

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: browser.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ceil, floor, inRange, round };
//# sourceMappingURL=browser.js.map
