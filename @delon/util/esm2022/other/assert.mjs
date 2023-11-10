import { isObservable } from 'rxjs';
function throwError(msg, actual, expected, comparison) {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
        throw new Error(`ASSERTION ERROR: ${msg}${comparison == null ? '' : ` [Expected=> ${expected} ${comparison} ${actual} <=Actual]`}`);
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
    if (actual == null) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXJ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9vdGhlci9hc3NlcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQU1wQyxTQUFTLFVBQVUsQ0FBQyxHQUE4QixFQUFFLE1BQWdCLEVBQUUsUUFBa0IsRUFBRSxVQUFtQjtJQUMzRyxJQUFJLE9BQU8sU0FBUyxLQUFLLFdBQVcsSUFBSSxTQUFTLEVBQUU7UUFDakQsTUFBTSxJQUFJLEtBQUssQ0FDYixvQkFBb0IsR0FBRyxHQUFHLFVBQVUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLFFBQVEsSUFBSSxVQUFVLElBQUksTUFBTSxZQUFZLEVBQUUsQ0FDbkgsQ0FBQztLQUNIO0FBQ0gsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsTUFBTSxDQUFDLFVBQW1CLEVBQUUsR0FBWTtJQUN0RCxJQUFJLENBQUMsVUFBVSxFQUFFO1FBQ2YsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2pCO0FBQ0gsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsV0FBVyxDQUFDLE1BQWUsRUFBRSxHQUFZO0lBQ3ZELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtRQUNsQixVQUFVLENBQUMsR0FBRyxFQUFFLE9BQU8sTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM5QztBQUNILENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLFlBQVksQ0FBQyxNQUFlLEVBQUUsR0FBWTtJQUN4RCxJQUFJLENBQUMsQ0FBQyxPQUFPLE1BQU0sS0FBSyxRQUFRLENBQUMsRUFBRTtRQUNqQyxVQUFVLENBQUMsR0FBRyxFQUFFLE9BQU8sTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUNqRDtBQUNILENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLFlBQVksQ0FBQyxNQUFlLEVBQUUsR0FBWTtJQUN4RCxJQUFJLENBQUMsQ0FBQyxPQUFPLE1BQU0sS0FBSyxRQUFRLENBQUMsRUFBRTtRQUNqQyxVQUFVLENBQUMsR0FBRyxFQUFFLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQzVFO0FBQ0gsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsV0FBVyxDQUFDLE1BQWUsRUFBRSxHQUFZO0lBQ3ZELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQzFCLFVBQVUsQ0FBQyxHQUFHLEVBQUUsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDM0U7QUFDSCxDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxHQUFZLEVBQUUsR0FBWTtJQUN6RCxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ3RCLFVBQVUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDMUU7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmRlY2xhcmUgY29uc3QgbmdEZXZNb2RlOiBib29sZWFuO1xuXG5mdW5jdGlvbiB0aHJvd0Vycm9yKG1zZzogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCk6IHZvaWQ7XG5mdW5jdGlvbiB0aHJvd0Vycm9yKG1zZzogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgYWN0dWFsOiB1bmtub3duLCBleHBlY3RlZDogdW5rbm93biwgY29tcGFyaXNvbjogc3RyaW5nKTogdm9pZDtcbmZ1bmN0aW9uIHRocm93RXJyb3IobXNnOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBhY3R1YWw/OiB1bmtub3duLCBleHBlY3RlZD86IHVua25vd24sIGNvbXBhcmlzb24/OiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiBuZ0Rldk1vZGUgPT09ICd1bmRlZmluZWQnIHx8IG5nRGV2TW9kZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBBU1NFUlRJT04gRVJST1I6ICR7bXNnfSR7Y29tcGFyaXNvbiA9PSBudWxsID8gJycgOiBgIFtFeHBlY3RlZD0+ICR7ZXhwZWN0ZWR9ICR7Y29tcGFyaXNvbn0gJHthY3R1YWx9IDw9QWN0dWFsXWB9YFxuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKiBBc3NlcnQgd2hldGhlciB0aGUgZXhwcmVzc2lvbiBhbmQgdGhyb3cgYW4gZXJyb3IgaW50byBjb25zb2xlIGluIGRldiBtb2RlXG4gKlxuICog5pat6KiA6KGo6L6+5byP5piv5ZCm56ym5ZCI6aKE5pyf77yM5bm25Zyo5byA5Y+R5qih5byP5LiL5Lya5Zyo5o6n5Yi25Y+w5oqb5Ye65LiA5Liq6ZSZ6K+vXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnQoZXhwcmVzc2lvbjogYm9vbGVhbiwgbXNnPzogc3RyaW5nKTogdm9pZCB7XG4gIGlmICghZXhwcmVzc2lvbikge1xuICAgIHRocm93RXJyb3IobXNnKTtcbiAgfVxufVxuXG4vKipcbiAqIEFzc2VydCB3aGV0aGVyIGVtcHR5IChgbnVsbGAgb3IgYHVuZGVmaW5lZGApXG4gKlxuICog5pat6KiA5piv5ZCm56m65YC877yIYG51bGxgIOaIliBgdW5kZWZpbmVkYO+8iVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0RW1wdHkoYWN0dWFsOiB1bmtub3duLCBtc2c/OiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKGFjdHVhbCA9PSBudWxsKSB7XG4gICAgdGhyb3dFcnJvcihtc2csIHR5cGVvZiBhY3R1YWwsICdOVUxMJywgJz09Jyk7XG4gIH1cbn1cblxuLyoqXG4gKiBBc3NlcnQgd2hldGhlciBgbnVtYmVyYCB0eXBlXG4gKlxuICog5pat6KiA5piv5ZCmIGBudW1iZXJgIOexu+Wei1xuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0TnVtYmVyKGFjdHVhbDogdW5rbm93biwgbXNnPzogc3RyaW5nKTogdm9pZCB7XG4gIGlmICghKHR5cGVvZiBhY3R1YWwgPT09ICdudW1iZXInKSkge1xuICAgIHRocm93RXJyb3IobXNnLCB0eXBlb2YgYWN0dWFsLCAnbnVtYmVyJywgJz09PScpO1xuICB9XG59XG5cbi8qKlxuICogQXNzZXJ0IHdoZXRoZXIgYHN0cmluZ2AgdHlwZVxuICpcbiAqIOaWreiogOaYr+WQpiBgc3RyaW5nYCDnsbvlnotcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydFN0cmluZyhhY3R1YWw6IHVua25vd24sIG1zZz86IHN0cmluZyk6IHZvaWQge1xuICBpZiAoISh0eXBlb2YgYWN0dWFsID09PSAnc3RyaW5nJykpIHtcbiAgICB0aHJvd0Vycm9yKG1zZywgYWN0dWFsID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIGFjdHVhbCwgJ3N0cmluZycsICc9PT0nKTtcbiAgfVxufVxuXG4vKipcbiAqIEFzc2VydCB3aGV0aGVyIGBhcnJheWAgdHlwZVxuICpcbiAqIOaWreiogOaYr+WQpiBgYXJyYXlgIOexu+Wei1xuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0QXJyYXkoYWN0dWFsOiB1bmtub3duLCBtc2c/OiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGFjdHVhbCkpIHtcbiAgICB0aHJvd0Vycm9yKG1zZywgYWN0dWFsID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIGFjdHVhbCwgJ2FycmF5JywgJz09PScpO1xuICB9XG59XG5cbi8qKlxuICogQXNzZXJ0IHdoZXRoZXIgYE9ic2VydmFibGVgIHR5cGVcbiAqXG4gKiDmlq3oqIDmmK/lkKYgYE9ic2VydmFibGVgIOexu+Wei1xuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0T2JzZXJ2YWJsZShvYmo6IHVua25vd24sIG1zZz86IHN0cmluZyk6IHZvaWQge1xuICBpZiAoIWlzT2JzZXJ2YWJsZShvYmopKSB7XG4gICAgdGhyb3dFcnJvcihtc2csIG9iaiA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBvYmosICdPYnNlcnZhYmxlJywgJz09PScpO1xuICB9XG59XG4iXX0=