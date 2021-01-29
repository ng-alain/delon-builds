/**
 * @fileoverview added by tsickle
 * Generated from: assert.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isDevMode } from '@angular/core';
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
 * @param {?} assertion
 * @param {?=} msg
 * @return {?}
 */
export function assert(assertion, msg) {
    if (!assertion) {
        throwError(msg);
    }
}
/**
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
 * @param {?} actual
 * @param {?=} msg
 * @return {?}
 */
export function assertString(actual, msg) {
    if (!(typeof actual === 'string')) {
        throwError(msg, actual === null ? 'null' : typeof actual, 'string', '===');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXJ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9vdGhlci9hc3NlcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztBQUkxQyxTQUFTLFVBQVUsQ0FBQyxHQUE4QixFQUFFLE1BQVksRUFBRSxRQUFjLEVBQUUsVUFBbUI7SUFDbkcsSUFBSSxTQUFTLEVBQUUsRUFBRTtRQUNmLE1BQU0sSUFBSSxLQUFLLENBQUMsb0JBQW9CLEdBQUcsRUFBRSxHQUFHLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsUUFBUSxJQUFJLFVBQVUsSUFBSSxNQUFNLFlBQVksQ0FBQyxDQUFDLENBQUM7S0FDdkk7QUFDSCxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsTUFBTSxDQUFDLFNBQWtCLEVBQUUsR0FBWTtJQUNyRCxJQUFJLENBQUMsU0FBUyxFQUFFO1FBQ2QsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2pCO0FBQ0gsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLFlBQVksQ0FBQyxNQUFXLEVBQUUsR0FBWTtJQUNwRCxJQUFJLENBQUMsQ0FBQyxPQUFPLE1BQU0sS0FBSyxRQUFRLENBQUMsRUFBRTtRQUNqQyxVQUFVLENBQUMsR0FBRyxFQUFFLE9BQU8sTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUNqRDtBQUNILENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxZQUFZLENBQUMsTUFBVyxFQUFFLEdBQVk7SUFDcEQsSUFBSSxDQUFDLENBQUMsT0FBTyxNQUFNLEtBQUssUUFBUSxDQUFDLEVBQUU7UUFDakMsVUFBVSxDQUFDLEdBQUcsRUFBRSxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUM1RTtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc0Rldk1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZnVuY3Rpb24gdGhyb3dFcnJvcihtc2c6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpOiB2b2lkO1xuZnVuY3Rpb24gdGhyb3dFcnJvcihtc2c6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIGFjdHVhbDogYW55LCBleHBlY3RlZDogYW55LCBjb21wYXJpc29uOiBzdHJpbmcpOiB2b2lkO1xuZnVuY3Rpb24gdGhyb3dFcnJvcihtc2c6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIGFjdHVhbD86IGFueSwgZXhwZWN0ZWQ/OiBhbnksIGNvbXBhcmlzb24/OiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBBU1NFUlRJT04gRVJST1I6ICR7bXNnfWAgKyAoY29tcGFyaXNvbiA9PSBudWxsID8gJycgOiBgIFtFeHBlY3RlZD0+ICR7ZXhwZWN0ZWR9ICR7Y29tcGFyaXNvbn0gJHthY3R1YWx9IDw9QWN0dWFsXWApKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0KGFzc2VydGlvbjogYm9vbGVhbiwgbXNnPzogc3RyaW5nKTogdm9pZCB7XG4gIGlmICghYXNzZXJ0aW9uKSB7XG4gICAgdGhyb3dFcnJvcihtc2cpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnROdW1iZXIoYWN0dWFsOiBhbnksIG1zZz86IHN0cmluZyk6IHZvaWQge1xuICBpZiAoISh0eXBlb2YgYWN0dWFsID09PSAnbnVtYmVyJykpIHtcbiAgICB0aHJvd0Vycm9yKG1zZywgdHlwZW9mIGFjdHVhbCwgJ251bWJlcicsICc9PT0nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0U3RyaW5nKGFjdHVhbDogYW55LCBtc2c/OiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKCEodHlwZW9mIGFjdHVhbCA9PT0gJ3N0cmluZycpKSB7XG4gICAgdGhyb3dFcnJvcihtc2csIGFjdHVhbCA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBhY3R1YWwsICdzdHJpbmcnLCAnPT09Jyk7XG4gIH1cbn1cbiJdfQ==