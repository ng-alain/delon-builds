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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXJ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9vdGhlci9hc3NlcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQU1wQyxTQUFTLFVBQVUsQ0FBQyxHQUE4QixFQUFFLE1BQVksRUFBRSxRQUFjLEVBQUUsVUFBbUI7SUFDbkcsSUFBSSxTQUFTLEVBQUU7UUFDYixNQUFNLElBQUksS0FBSyxDQUFDLG9CQUFvQixHQUFHLEVBQUUsR0FBRyxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLFFBQVEsSUFBSSxVQUFVLElBQUksTUFBTSxZQUFZLENBQUMsQ0FBQyxDQUFDO0tBQ3ZJO0FBQ0gsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsTUFBTSxDQUFDLFVBQW1CLEVBQUUsR0FBWTtJQUN0RCxJQUFJLENBQUMsVUFBVSxFQUFFO1FBQ2YsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2pCO0FBQ0gsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsV0FBVyxDQUFDLE1BQVcsRUFBRSxHQUFZO0lBQ25ELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtRQUNsQixVQUFVLENBQUMsR0FBRyxFQUFFLE9BQU8sTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM5QztBQUNILENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLFlBQVksQ0FBQyxNQUFXLEVBQUUsR0FBWTtJQUNwRCxJQUFJLENBQUMsQ0FBQyxPQUFPLE1BQU0sS0FBSyxRQUFRLENBQUMsRUFBRTtRQUNqQyxVQUFVLENBQUMsR0FBRyxFQUFFLE9BQU8sTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUNqRDtBQUNILENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLFlBQVksQ0FBQyxNQUFXLEVBQUUsR0FBWTtJQUNwRCxJQUFJLENBQUMsQ0FBQyxPQUFPLE1BQU0sS0FBSyxRQUFRLENBQUMsRUFBRTtRQUNqQyxVQUFVLENBQUMsR0FBRyxFQUFFLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQzVFO0FBQ0gsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsV0FBVyxDQUFDLE1BQVcsRUFBRSxHQUFZO0lBQ25ELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQzFCLFVBQVUsQ0FBQyxHQUFHLEVBQUUsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDM0U7QUFDSCxDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxHQUFRLEVBQUUsR0FBWTtJQUNyRCxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ3RCLFVBQVUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDMUU7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmRlY2xhcmUgY29uc3QgbmdEZXZNb2RlOiBib29sZWFuO1xuXG5mdW5jdGlvbiB0aHJvd0Vycm9yKG1zZzogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCk6IHZvaWQ7XG5mdW5jdGlvbiB0aHJvd0Vycm9yKG1zZzogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgYWN0dWFsOiBhbnksIGV4cGVjdGVkOiBhbnksIGNvbXBhcmlzb246IHN0cmluZyk6IHZvaWQ7XG5mdW5jdGlvbiB0aHJvd0Vycm9yKG1zZzogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgYWN0dWFsPzogYW55LCBleHBlY3RlZD86IGFueSwgY29tcGFyaXNvbj86IHN0cmluZyk6IHZvaWQge1xuICBpZiAobmdEZXZNb2RlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBBU1NFUlRJT04gRVJST1I6ICR7bXNnfWAgKyAoY29tcGFyaXNvbiA9PSBudWxsID8gJycgOiBgIFtFeHBlY3RlZD0+ICR7ZXhwZWN0ZWR9ICR7Y29tcGFyaXNvbn0gJHthY3R1YWx9IDw9QWN0dWFsXWApKTtcbiAgfVxufVxuXG4vKipcbiAqIEFzc2VydCB3aGV0aGVyIHRoZSBleHByZXNzaW9uIGFuZCB0aHJvdyBhbiBlcnJvciBpbnRvIGNvbnNvbGUgaW4gZGV2IG1vZGVcbiAqXG4gKiDmlq3oqIDooajovr7lvI/mmK/lkKbnrKblkIjpooTmnJ/vvIzlubblnKjlvIDlj5HmqKHlvI/kuIvkvJrlnKjmjqfliLblj7Dmipvlh7rkuIDkuKrplJnor69cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydChleHByZXNzaW9uOiBib29sZWFuLCBtc2c/OiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKCFleHByZXNzaW9uKSB7XG4gICAgdGhyb3dFcnJvcihtc2cpO1xuICB9XG59XG5cbi8qKlxuICogQXNzZXJ0IHdoZXRoZXIgZW1wdHkgKGBudWxsYCBvciBgdW5kZWZpbmVkYClcbiAqXG4gKiDmlq3oqIDmmK/lkKbnqbrlgLzvvIhgbnVsbGAg5oiWIGB1bmRlZmluZWRg77yJXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRFbXB0eShhY3R1YWw6IGFueSwgbXNnPzogc3RyaW5nKTogdm9pZCB7XG4gIGlmIChhY3R1YWwgPT0gbnVsbCkge1xuICAgIHRocm93RXJyb3IobXNnLCB0eXBlb2YgYWN0dWFsLCAnTlVMTCcsICc9PScpO1xuICB9XG59XG5cbi8qKlxuICogQXNzZXJ0IHdoZXRoZXIgYG51bWJlcmAgdHlwZVxuICpcbiAqIOaWreiogOaYr+WQpiBgbnVtYmVyYCDnsbvlnotcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydE51bWJlcihhY3R1YWw6IGFueSwgbXNnPzogc3RyaW5nKTogdm9pZCB7XG4gIGlmICghKHR5cGVvZiBhY3R1YWwgPT09ICdudW1iZXInKSkge1xuICAgIHRocm93RXJyb3IobXNnLCB0eXBlb2YgYWN0dWFsLCAnbnVtYmVyJywgJz09PScpO1xuICB9XG59XG5cbi8qKlxuICogQXNzZXJ0IHdoZXRoZXIgYHN0cmluZ2AgdHlwZVxuICpcbiAqIOaWreiogOaYr+WQpiBgc3RyaW5nYCDnsbvlnotcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydFN0cmluZyhhY3R1YWw6IGFueSwgbXNnPzogc3RyaW5nKTogdm9pZCB7XG4gIGlmICghKHR5cGVvZiBhY3R1YWwgPT09ICdzdHJpbmcnKSkge1xuICAgIHRocm93RXJyb3IobXNnLCBhY3R1YWwgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgYWN0dWFsLCAnc3RyaW5nJywgJz09PScpO1xuICB9XG59XG5cbi8qKlxuICogQXNzZXJ0IHdoZXRoZXIgYGFycmF5YCB0eXBlXG4gKlxuICog5pat6KiA5piv5ZCmIGBhcnJheWAg57G75Z6LXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRBcnJheShhY3R1YWw6IGFueSwgbXNnPzogc3RyaW5nKTogdm9pZCB7XG4gIGlmICghQXJyYXkuaXNBcnJheShhY3R1YWwpKSB7XG4gICAgdGhyb3dFcnJvcihtc2csIGFjdHVhbCA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBhY3R1YWwsICdhcnJheScsICc9PT0nKTtcbiAgfVxufVxuXG4vKipcbiAqIEFzc2VydCB3aGV0aGVyIGBPYnNlcnZhYmxlYCB0eXBlXG4gKlxuICog5pat6KiA5piv5ZCmIGBPYnNlcnZhYmxlYCDnsbvlnotcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydE9ic2VydmFibGUob2JqOiBhbnksIG1zZz86IHN0cmluZyk6IHZvaWQge1xuICBpZiAoIWlzT2JzZXJ2YWJsZShvYmopKSB7XG4gICAgdGhyb3dFcnJvcihtc2csIG9iaiA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBvYmosICdPYnNlcnZhYmxlJywgJz09PScpO1xuICB9XG59XG4iXX0=