/**
 * @fileoverview added by tsickle
 * Generated from: assert.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isDevMode } from '@angular/core';
import { isObservable } from 'rxjs';
/**
 * @param {?} msg
 * @param {?=} actual
 * @param {?=} expected
 * @param {?=} comparison
 * @return {?}
 */
function throwError(msg, actual, expected, comparison) {
    if (isDevMode()) {
        throw new Error(`ASSERTION ERROR: ${msg}` + (comparison == null ? '' : ` [Expected=> ${expected} ${comparison} ${actual} <=Actual]`));
    }
}
/**
 * Assert whether the expression and throw an error into console in dev mode
 *
 * 断言表达式是否符合预期，并在开发模式下会在控制台抛出一个错误
 * @param {?} expression
 * @param {?=} msg
 * @return {?}
 */
export function assert(expression, msg) {
    if (!expression) {
        throwError(msg);
    }
}
/**
 * Assert whether empty (`null` or `undefined`)
 *
 * 断言是否空值（`null` 或 `undefined`）
 * @param {?} actual
 * @param {?=} msg
 * @return {?}
 */
export function assertEmpty(actual, msg) {
    if (actual == null) {
        throwError(msg, typeof actual, 'NULL', '==');
    }
}
/**
 * Assert whether `number` type
 *
 * 断言是否 `number` 类型
 * @param {?} actual
 * @param {?=} msg
 * @return {?}
 */
export function assertNumber(actual, msg) {
    if (!(typeof actual === 'number')) {
        throwError(msg, typeof actual, 'number', '===');
    }
}
/**
 * Assert whether `string` type
 *
 * 断言是否 `string` 类型
 * @param {?} actual
 * @param {?=} msg
 * @return {?}
 */
export function assertString(actual, msg) {
    if (!(typeof actual === 'string')) {
        throwError(msg, actual === null ? 'null' : typeof actual, 'string', '===');
    }
}
/**
 * Assert whether `array` type
 *
 * 断言是否 `array` 类型
 * @param {?} actual
 * @param {?=} msg
 * @return {?}
 */
export function assertArray(actual, msg) {
    if (!Array.isArray(actual)) {
        throwError(msg, actual === null ? 'null' : typeof actual, 'array', '===');
    }
}
/**
 * Assert whether `Observable` type
 *
 * 断言是否 `Observable` 类型
 * @param {?} obj
 * @param {?=} msg
 * @return {?}
 */
export function assertObservable(obj, msg) {
    if (!isObservable(obj)) {
        throwError(msg, obj === null ? 'null' : typeof obj, 'Observable', '===');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXJ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9vdGhlci9hc3NlcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7O0FBSXBDLFNBQVMsVUFBVSxDQUFDLEdBQThCLEVBQUUsTUFBWSxFQUFFLFFBQWMsRUFBRSxVQUFtQjtJQUNuRyxJQUFJLFNBQVMsRUFBRSxFQUFFO1FBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsR0FBRyxFQUFFLEdBQUcsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixRQUFRLElBQUksVUFBVSxJQUFJLE1BQU0sWUFBWSxDQUFDLENBQUMsQ0FBQztLQUN2STtBQUNILENBQUM7Ozs7Ozs7OztBQU9ELE1BQU0sVUFBVSxNQUFNLENBQUMsVUFBbUIsRUFBRSxHQUFZO0lBQ3RELElBQUksQ0FBQyxVQUFVLEVBQUU7UUFDZixVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDakI7QUFDSCxDQUFDOzs7Ozs7Ozs7QUFPRCxNQUFNLFVBQVUsV0FBVyxDQUFDLE1BQVcsRUFBRSxHQUFZO0lBQ25ELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtRQUNsQixVQUFVLENBQUMsR0FBRyxFQUFFLE9BQU8sTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM5QztBQUNILENBQUM7Ozs7Ozs7OztBQU9ELE1BQU0sVUFBVSxZQUFZLENBQUMsTUFBVyxFQUFFLEdBQVk7SUFDcEQsSUFBSSxDQUFDLENBQUMsT0FBTyxNQUFNLEtBQUssUUFBUSxDQUFDLEVBQUU7UUFDakMsVUFBVSxDQUFDLEdBQUcsRUFBRSxPQUFPLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDakQ7QUFDSCxDQUFDOzs7Ozs7Ozs7QUFPRCxNQUFNLFVBQVUsWUFBWSxDQUFDLE1BQVcsRUFBRSxHQUFZO0lBQ3BELElBQUksQ0FBQyxDQUFDLE9BQU8sTUFBTSxLQUFLLFFBQVEsQ0FBQyxFQUFFO1FBQ2pDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDNUU7QUFDSCxDQUFDOzs7Ozs7Ozs7QUFPRCxNQUFNLFVBQVUsV0FBVyxDQUFDLE1BQVcsRUFBRSxHQUFZO0lBQ25ELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQzFCLFVBQVUsQ0FBQyxHQUFHLEVBQUUsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDM0U7QUFDSCxDQUFDOzs7Ozs7Ozs7QUFPRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsR0FBUSxFQUFFLEdBQVk7SUFDckQsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUN0QixVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLEVBQUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQzFFO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmZ1bmN0aW9uIHRocm93RXJyb3IobXNnOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKTogdm9pZDtcbmZ1bmN0aW9uIHRocm93RXJyb3IobXNnOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBhY3R1YWw6IGFueSwgZXhwZWN0ZWQ6IGFueSwgY29tcGFyaXNvbjogc3RyaW5nKTogdm9pZDtcbmZ1bmN0aW9uIHRocm93RXJyb3IobXNnOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBhY3R1YWw/OiBhbnksIGV4cGVjdGVkPzogYW55LCBjb21wYXJpc29uPzogc3RyaW5nKTogdm9pZCB7XG4gIGlmIChpc0Rldk1vZGUoKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgQVNTRVJUSU9OIEVSUk9SOiAke21zZ31gICsgKGNvbXBhcmlzb24gPT0gbnVsbCA/ICcnIDogYCBbRXhwZWN0ZWQ9PiAke2V4cGVjdGVkfSAke2NvbXBhcmlzb259ICR7YWN0dWFsfSA8PUFjdHVhbF1gKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBc3NlcnQgd2hldGhlciB0aGUgZXhwcmVzc2lvbiBhbmQgdGhyb3cgYW4gZXJyb3IgaW50byBjb25zb2xlIGluIGRldiBtb2RlXG4gKlxuICog5pat6KiA6KGo6L6+5byP5piv5ZCm56ym5ZCI6aKE5pyf77yM5bm25Zyo5byA5Y+R5qih5byP5LiL5Lya5Zyo5o6n5Yi25Y+w5oqb5Ye65LiA5Liq6ZSZ6K+vXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnQoZXhwcmVzc2lvbjogYm9vbGVhbiwgbXNnPzogc3RyaW5nKTogdm9pZCB7XG4gIGlmICghZXhwcmVzc2lvbikge1xuICAgIHRocm93RXJyb3IobXNnKTtcbiAgfVxufVxuXG4vKipcbiAqIEFzc2VydCB3aGV0aGVyIGVtcHR5IChgbnVsbGAgb3IgYHVuZGVmaW5lZGApXG4gKlxuICog5pat6KiA5piv5ZCm56m65YC877yIYG51bGxgIOaIliBgdW5kZWZpbmVkYO+8iVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0RW1wdHkoYWN0dWFsOiBhbnksIG1zZz86IHN0cmluZyk6IHZvaWQge1xuICBpZiAoYWN0dWFsID09IG51bGwpIHtcbiAgICB0aHJvd0Vycm9yKG1zZywgdHlwZW9mIGFjdHVhbCwgJ05VTEwnLCAnPT0nKTtcbiAgfVxufVxuXG4vKipcbiAqIEFzc2VydCB3aGV0aGVyIGBudW1iZXJgIHR5cGVcbiAqXG4gKiDmlq3oqIDmmK/lkKYgYG51bWJlcmAg57G75Z6LXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnROdW1iZXIoYWN0dWFsOiBhbnksIG1zZz86IHN0cmluZyk6IHZvaWQge1xuICBpZiAoISh0eXBlb2YgYWN0dWFsID09PSAnbnVtYmVyJykpIHtcbiAgICB0aHJvd0Vycm9yKG1zZywgdHlwZW9mIGFjdHVhbCwgJ251bWJlcicsICc9PT0nKTtcbiAgfVxufVxuXG4vKipcbiAqIEFzc2VydCB3aGV0aGVyIGBzdHJpbmdgIHR5cGVcbiAqXG4gKiDmlq3oqIDmmK/lkKYgYHN0cmluZ2Ag57G75Z6LXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRTdHJpbmcoYWN0dWFsOiBhbnksIG1zZz86IHN0cmluZyk6IHZvaWQge1xuICBpZiAoISh0eXBlb2YgYWN0dWFsID09PSAnc3RyaW5nJykpIHtcbiAgICB0aHJvd0Vycm9yKG1zZywgYWN0dWFsID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIGFjdHVhbCwgJ3N0cmluZycsICc9PT0nKTtcbiAgfVxufVxuXG4vKipcbiAqIEFzc2VydCB3aGV0aGVyIGBhcnJheWAgdHlwZVxuICpcbiAqIOaWreiogOaYr+WQpiBgYXJyYXlgIOexu+Wei1xuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0QXJyYXkoYWN0dWFsOiBhbnksIG1zZz86IHN0cmluZyk6IHZvaWQge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoYWN0dWFsKSkge1xuICAgIHRocm93RXJyb3IobXNnLCBhY3R1YWwgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgYWN0dWFsLCAnYXJyYXknLCAnPT09Jyk7XG4gIH1cbn1cblxuLyoqXG4gKiBBc3NlcnQgd2hldGhlciBgT2JzZXJ2YWJsZWAgdHlwZVxuICpcbiAqIOaWreiogOaYr+WQpiBgT2JzZXJ2YWJsZWAg57G75Z6LXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRPYnNlcnZhYmxlKG9iajogYW55LCBtc2c/OiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKCFpc09ic2VydmFibGUob2JqKSkge1xuICAgIHRocm93RXJyb3IobXNnLCBvYmogPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2Ygb2JqLCAnT2JzZXJ2YWJsZScsICc9PT0nKTtcbiAgfVxufVxuIl19