import { isObservable } from 'rxjs';
function throwError(msg, actual, expected, comparison) {
    if (ngDevMode) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXJ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9vdGhlci9hc3NlcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQU1wQyxTQUFTLFVBQVUsQ0FBQyxHQUE4QixFQUFFLE1BQWdCLEVBQUUsUUFBa0IsRUFBRSxVQUFtQjtJQUMzRyxJQUFJLFNBQVMsRUFBRTtRQUNiLE1BQU0sSUFBSSxLQUFLLENBQ2Isb0JBQW9CLEdBQUcsR0FBRyxVQUFVLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixRQUFRLElBQUksVUFBVSxJQUFJLE1BQU0sWUFBWSxFQUFFLENBQ25ILENBQUM7S0FDSDtBQUNILENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLE1BQU0sQ0FBQyxVQUFtQixFQUFFLEdBQVk7SUFDdEQsSUFBSSxDQUFDLFVBQVUsRUFBRTtRQUNmLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNqQjtBQUNILENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLFdBQVcsQ0FBQyxNQUFlLEVBQUUsR0FBWTtJQUN2RCxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7UUFDbEIsVUFBVSxDQUFDLEdBQUcsRUFBRSxPQUFPLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDOUM7QUFDSCxDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxZQUFZLENBQUMsTUFBZSxFQUFFLEdBQVk7SUFDeEQsSUFBSSxDQUFDLENBQUMsT0FBTyxNQUFNLEtBQUssUUFBUSxDQUFDLEVBQUU7UUFDakMsVUFBVSxDQUFDLEdBQUcsRUFBRSxPQUFPLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDakQ7QUFDSCxDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxZQUFZLENBQUMsTUFBZSxFQUFFLEdBQVk7SUFDeEQsSUFBSSxDQUFDLENBQUMsT0FBTyxNQUFNLEtBQUssUUFBUSxDQUFDLEVBQUU7UUFDakMsVUFBVSxDQUFDLEdBQUcsRUFBRSxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUM1RTtBQUNILENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLFdBQVcsQ0FBQyxNQUFlLEVBQUUsR0FBWTtJQUN2RCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUMxQixVQUFVLENBQUMsR0FBRyxFQUFFLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQzNFO0FBQ0gsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsR0FBWSxFQUFFLEdBQVk7SUFDekQsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUN0QixVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLEVBQUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQzFFO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5kZWNsYXJlIGNvbnN0IG5nRGV2TW9kZTogYm9vbGVhbjtcblxuZnVuY3Rpb24gdGhyb3dFcnJvcihtc2c6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpOiB2b2lkO1xuZnVuY3Rpb24gdGhyb3dFcnJvcihtc2c6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIGFjdHVhbDogdW5rbm93biwgZXhwZWN0ZWQ6IHVua25vd24sIGNvbXBhcmlzb246IHN0cmluZyk6IHZvaWQ7XG5mdW5jdGlvbiB0aHJvd0Vycm9yKG1zZzogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgYWN0dWFsPzogdW5rbm93biwgZXhwZWN0ZWQ/OiB1bmtub3duLCBjb21wYXJpc29uPzogc3RyaW5nKTogdm9pZCB7XG4gIGlmIChuZ0Rldk1vZGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgQVNTRVJUSU9OIEVSUk9SOiAke21zZ30ke2NvbXBhcmlzb24gPT0gbnVsbCA/ICcnIDogYCBbRXhwZWN0ZWQ9PiAke2V4cGVjdGVkfSAke2NvbXBhcmlzb259ICR7YWN0dWFsfSA8PUFjdHVhbF1gfWBcbiAgICApO1xuICB9XG59XG5cbi8qKlxuICogQXNzZXJ0IHdoZXRoZXIgdGhlIGV4cHJlc3Npb24gYW5kIHRocm93IGFuIGVycm9yIGludG8gY29uc29sZSBpbiBkZXYgbW9kZVxuICpcbiAqIOaWreiogOihqOi+vuW8j+aYr+WQpuespuWQiOmihOacn++8jOW5tuWcqOW8gOWPkeaooeW8j+S4i+S8muWcqOaOp+WItuWPsOaKm+WHuuS4gOS4qumUmeivr1xuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0KGV4cHJlc3Npb246IGJvb2xlYW4sIG1zZz86IHN0cmluZyk6IHZvaWQge1xuICBpZiAoIWV4cHJlc3Npb24pIHtcbiAgICB0aHJvd0Vycm9yKG1zZyk7XG4gIH1cbn1cblxuLyoqXG4gKiBBc3NlcnQgd2hldGhlciBlbXB0eSAoYG51bGxgIG9yIGB1bmRlZmluZWRgKVxuICpcbiAqIOaWreiogOaYr+WQpuepuuWAvO+8iGBudWxsYCDmiJYgYHVuZGVmaW5lZGDvvIlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydEVtcHR5KGFjdHVhbDogdW5rbm93biwgbXNnPzogc3RyaW5nKTogdm9pZCB7XG4gIGlmIChhY3R1YWwgPT0gbnVsbCkge1xuICAgIHRocm93RXJyb3IobXNnLCB0eXBlb2YgYWN0dWFsLCAnTlVMTCcsICc9PScpO1xuICB9XG59XG5cbi8qKlxuICogQXNzZXJ0IHdoZXRoZXIgYG51bWJlcmAgdHlwZVxuICpcbiAqIOaWreiogOaYr+WQpiBgbnVtYmVyYCDnsbvlnotcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydE51bWJlcihhY3R1YWw6IHVua25vd24sIG1zZz86IHN0cmluZyk6IHZvaWQge1xuICBpZiAoISh0eXBlb2YgYWN0dWFsID09PSAnbnVtYmVyJykpIHtcbiAgICB0aHJvd0Vycm9yKG1zZywgdHlwZW9mIGFjdHVhbCwgJ251bWJlcicsICc9PT0nKTtcbiAgfVxufVxuXG4vKipcbiAqIEFzc2VydCB3aGV0aGVyIGBzdHJpbmdgIHR5cGVcbiAqXG4gKiDmlq3oqIDmmK/lkKYgYHN0cmluZ2Ag57G75Z6LXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRTdHJpbmcoYWN0dWFsOiB1bmtub3duLCBtc2c/OiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKCEodHlwZW9mIGFjdHVhbCA9PT0gJ3N0cmluZycpKSB7XG4gICAgdGhyb3dFcnJvcihtc2csIGFjdHVhbCA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBhY3R1YWwsICdzdHJpbmcnLCAnPT09Jyk7XG4gIH1cbn1cblxuLyoqXG4gKiBBc3NlcnQgd2hldGhlciBgYXJyYXlgIHR5cGVcbiAqXG4gKiDmlq3oqIDmmK/lkKYgYGFycmF5YCDnsbvlnotcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydEFycmF5KGFjdHVhbDogdW5rbm93biwgbXNnPzogc3RyaW5nKTogdm9pZCB7XG4gIGlmICghQXJyYXkuaXNBcnJheShhY3R1YWwpKSB7XG4gICAgdGhyb3dFcnJvcihtc2csIGFjdHVhbCA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBhY3R1YWwsICdhcnJheScsICc9PT0nKTtcbiAgfVxufVxuXG4vKipcbiAqIEFzc2VydCB3aGV0aGVyIGBPYnNlcnZhYmxlYCB0eXBlXG4gKlxuICog5pat6KiA5piv5ZCmIGBPYnNlcnZhYmxlYCDnsbvlnotcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydE9ic2VydmFibGUob2JqOiB1bmtub3duLCBtc2c/OiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKCFpc09ic2VydmFibGUob2JqKSkge1xuICAgIHRocm93RXJyb3IobXNnLCBvYmogPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2Ygb2JqLCAnT2JzZXJ2YWJsZScsICc9PT0nKTtcbiAgfVxufVxuIl19