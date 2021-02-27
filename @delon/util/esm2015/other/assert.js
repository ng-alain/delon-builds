import { isObservable } from 'rxjs';
function throwError(msg, actual, expected, comparison) {
    if (ngDevMode) {
        throw new Error(`ASSERTION ERROR: ${msg}` + (comparison == null ? '' : ` [Expected=> ${expected} ${comparison} ${actual} <=Actual]`));
    }
}
/**
 * Assert whether the expression and throw an error into console in dev mode
 *
 * 断言表达式是否符合预期，并在开发模式下会在控制台抛出一个错误
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
 */
export function assertEmpty(actual, msg) {
    if (ngDevMode || actual == null) {
        throwError(msg, typeof actual, 'NULL', '==');
    }
}
/**
 * Assert whether `number` type
 *
 * 断言是否 `number` 类型
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
 */
export function assertObservable(obj, msg) {
    if (!isObservable(obj)) {
        throwError(msg, obj === null ? 'null' : typeof obj, 'Observable', '===');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXJ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9vdGhlci9hc3NlcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQU1wQyxTQUFTLFVBQVUsQ0FBQyxHQUE4QixFQUFFLE1BQVksRUFBRSxRQUFjLEVBQUUsVUFBbUI7SUFDbkcsSUFBSSxTQUFTLEVBQUU7UUFDYixNQUFNLElBQUksS0FBSyxDQUFDLG9CQUFvQixHQUFHLEVBQUUsR0FBRyxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLFFBQVEsSUFBSSxVQUFVLElBQUksTUFBTSxZQUFZLENBQUMsQ0FBQyxDQUFDO0tBQ3ZJO0FBQ0gsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsTUFBTSxDQUFDLFVBQW1CLEVBQUUsR0FBWTtJQUN0RCxJQUFJLENBQUMsVUFBVSxFQUFFO1FBQ2YsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2pCO0FBQ0gsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsV0FBVyxDQUFDLE1BQVcsRUFBRSxHQUFZO0lBQ25ELElBQUksU0FBUyxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7UUFDL0IsVUFBVSxDQUFDLEdBQUcsRUFBRSxPQUFPLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDOUM7QUFDSCxDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxZQUFZLENBQUMsTUFBVyxFQUFFLEdBQVk7SUFDcEQsSUFBSSxDQUFDLENBQUMsT0FBTyxNQUFNLEtBQUssUUFBUSxDQUFDLEVBQUU7UUFDakMsVUFBVSxDQUFDLEdBQUcsRUFBRSxPQUFPLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDakQ7QUFDSCxDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxZQUFZLENBQUMsTUFBVyxFQUFFLEdBQVk7SUFDcEQsSUFBSSxDQUFDLENBQUMsT0FBTyxNQUFNLEtBQUssUUFBUSxDQUFDLEVBQUU7UUFDakMsVUFBVSxDQUFDLEdBQUcsRUFBRSxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUM1RTtBQUNILENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLFdBQVcsQ0FBQyxNQUFXLEVBQUUsR0FBWTtJQUNuRCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUMxQixVQUFVLENBQUMsR0FBRyxFQUFFLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQzNFO0FBQ0gsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsR0FBUSxFQUFFLEdBQVk7SUFDckQsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUN0QixVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLEVBQUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQzFFO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5kZWNsYXJlIGNvbnN0IG5nRGV2TW9kZTogYm9vbGVhbjtcblxuZnVuY3Rpb24gdGhyb3dFcnJvcihtc2c6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpOiB2b2lkO1xuZnVuY3Rpb24gdGhyb3dFcnJvcihtc2c6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIGFjdHVhbDogYW55LCBleHBlY3RlZDogYW55LCBjb21wYXJpc29uOiBzdHJpbmcpOiB2b2lkO1xuZnVuY3Rpb24gdGhyb3dFcnJvcihtc2c6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIGFjdHVhbD86IGFueSwgZXhwZWN0ZWQ/OiBhbnksIGNvbXBhcmlzb24/OiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKG5nRGV2TW9kZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgQVNTRVJUSU9OIEVSUk9SOiAke21zZ31gICsgKGNvbXBhcmlzb24gPT0gbnVsbCA/ICcnIDogYCBbRXhwZWN0ZWQ9PiAke2V4cGVjdGVkfSAke2NvbXBhcmlzb259ICR7YWN0dWFsfSA8PUFjdHVhbF1gKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBc3NlcnQgd2hldGhlciB0aGUgZXhwcmVzc2lvbiBhbmQgdGhyb3cgYW4gZXJyb3IgaW50byBjb25zb2xlIGluIGRldiBtb2RlXG4gKlxuICog5pat6KiA6KGo6L6+5byP5piv5ZCm56ym5ZCI6aKE5pyf77yM5bm25Zyo5byA5Y+R5qih5byP5LiL5Lya5Zyo5o6n5Yi25Y+w5oqb5Ye65LiA5Liq6ZSZ6K+vXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnQoZXhwcmVzc2lvbjogYm9vbGVhbiwgbXNnPzogc3RyaW5nKTogdm9pZCB7XG4gIGlmICghZXhwcmVzc2lvbikge1xuICAgIHRocm93RXJyb3IobXNnKTtcbiAgfVxufVxuXG4vKipcbiAqIEFzc2VydCB3aGV0aGVyIGVtcHR5IChgbnVsbGAgb3IgYHVuZGVmaW5lZGApXG4gKlxuICog5pat6KiA5piv5ZCm56m65YC877yIYG51bGxgIOaIliBgdW5kZWZpbmVkYO+8iVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0RW1wdHkoYWN0dWFsOiBhbnksIG1zZz86IHN0cmluZyk6IHZvaWQge1xuICBpZiAobmdEZXZNb2RlIHx8IGFjdHVhbCA9PSBudWxsKSB7XG4gICAgdGhyb3dFcnJvcihtc2csIHR5cGVvZiBhY3R1YWwsICdOVUxMJywgJz09Jyk7XG4gIH1cbn1cblxuLyoqXG4gKiBBc3NlcnQgd2hldGhlciBgbnVtYmVyYCB0eXBlXG4gKlxuICog5pat6KiA5piv5ZCmIGBudW1iZXJgIOexu+Wei1xuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0TnVtYmVyKGFjdHVhbDogYW55LCBtc2c/OiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKCEodHlwZW9mIGFjdHVhbCA9PT0gJ251bWJlcicpKSB7XG4gICAgdGhyb3dFcnJvcihtc2csIHR5cGVvZiBhY3R1YWwsICdudW1iZXInLCAnPT09Jyk7XG4gIH1cbn1cblxuLyoqXG4gKiBBc3NlcnQgd2hldGhlciBgc3RyaW5nYCB0eXBlXG4gKlxuICog5pat6KiA5piv5ZCmIGBzdHJpbmdgIOexu+Wei1xuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0U3RyaW5nKGFjdHVhbDogYW55LCBtc2c/OiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKCEodHlwZW9mIGFjdHVhbCA9PT0gJ3N0cmluZycpKSB7XG4gICAgdGhyb3dFcnJvcihtc2csIGFjdHVhbCA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBhY3R1YWwsICdzdHJpbmcnLCAnPT09Jyk7XG4gIH1cbn1cblxuLyoqXG4gKiBBc3NlcnQgd2hldGhlciBgYXJyYXlgIHR5cGVcbiAqXG4gKiDmlq3oqIDmmK/lkKYgYGFycmF5YCDnsbvlnotcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydEFycmF5KGFjdHVhbDogYW55LCBtc2c/OiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGFjdHVhbCkpIHtcbiAgICB0aHJvd0Vycm9yKG1zZywgYWN0dWFsID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIGFjdHVhbCwgJ2FycmF5JywgJz09PScpO1xuICB9XG59XG5cbi8qKlxuICogQXNzZXJ0IHdoZXRoZXIgYE9ic2VydmFibGVgIHR5cGVcbiAqXG4gKiDmlq3oqIDmmK/lkKYgYE9ic2VydmFibGVgIOexu+Wei1xuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0T2JzZXJ2YWJsZShvYmo6IGFueSwgbXNnPzogc3RyaW5nKTogdm9pZCB7XG4gIGlmICghaXNPYnNlcnZhYmxlKG9iaikpIHtcbiAgICB0aHJvd0Vycm9yKG1zZywgb2JqID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIG9iaiwgJ09ic2VydmFibGUnLCAnPT09Jyk7XG4gIH1cbn1cbiJdfQ==