/**
 * @fileoverview added by tsickle
 * Generated from: src/logger/logger.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isDevMode } from '@angular/core';
import { environment } from 'ng-zorro-antd/core/environments';
/** @type {?} */
const record = {};
/** @type {?} */
export const PREFIX = '[@DELON]:';
/**
 * @param {...?} args
 * @return {?}
 */
function notRecorded(...args) {
    /** @type {?} */
    const asRecord = args.reduce((/**
     * @param {?} acc
     * @param {?} c
     * @return {?}
     */
    (acc, c) => acc + c.toString()), '');
    if (record[asRecord]) {
        return false;
    }
    else {
        record[asRecord] = true;
        return true;
    }
}
/**
 * @param {?} consoleFunc
 * @param {...?} args
 * @return {?}
 */
function consoleCommonBehavior(consoleFunc, ...args) {
    if (environment.isTestMode || (isDevMode() && notRecorded(...args))) {
        consoleFunc(...args);
    }
}
// Warning should only be printed in dev mode and only once.
/** @type {?} */
export const warn = (/**
 * @param {...?} args
 * @return {?}
 */
(...args) => consoleCommonBehavior((/**
 * @param {...?} arg
 * @return {?}
 */
(...arg) => console.warn(PREFIX, ...arg)), ...args));
/** @type {?} */
export const deprecation11 = (/**
 * @param {?} comp
 * @param {?} from
 * @param {?=} to
 * @return {?}
 */
(comp, from, to) => {
    warnDeprecation(`${comp} => '${from}' is going to be removed in 11.0.0${to ? `, Please use '${to}' instead` : ``}.`);
});
/** @type {?} */
export const warnDeprecation = (/**
 * @param {...?} args
 * @return {?}
 */
(...args) => {
    if (!environment.isTestMode) {
        /** @type {?} */
        const stack = new Error().stack;
        return consoleCommonBehavior((/**
         * @param {...?} arg
         * @return {?}
         */
        (...arg) => console.warn(PREFIX, 'deprecated:', ...arg, stack)), ...args);
    }
    else {
        return (/**
         * @return {?}
         */
        () => { });
    }
});
// Log should only be printed in dev mode.
/** @type {?} */
export const log = (/**
 * @param {...?} args
 * @return {?}
 */
(...args) => {
    if (isDevMode()) {
        console.log(PREFIX, ...args);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZzdHMvd29yay8xL3MvcGFja2FnZXMvdXRpbC8iLCJzb3VyY2VzIjpbInNyYy9sb2dnZXIvbG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUNBQWlDLENBQUM7O01BR3hELE1BQU0sR0FBNEIsRUFBRTs7QUFFMUMsTUFBTSxPQUFPLE1BQU0sR0FBRyxXQUFXOzs7OztBQUVqQyxTQUFTLFdBQVcsQ0FBQyxHQUFHLElBQWlCOztVQUNqQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU07Ozs7O0lBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFFLEVBQUUsQ0FBQztJQUVoRSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUNwQixPQUFPLEtBQUssQ0FBQztLQUNkO1NBQU07UUFDTCxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLE9BQU8sSUFBSSxDQUFDO0tBQ2I7QUFDSCxDQUFDOzs7Ozs7QUFFRCxTQUFTLHFCQUFxQixDQUFDLFdBQXlDLEVBQUUsR0FBRyxJQUFpQjtJQUM1RixJQUFJLFdBQVcsQ0FBQyxVQUFVLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFO1FBQ25FLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0tBQ3RCO0FBQ0gsQ0FBQzs7O0FBR0QsTUFBTSxPQUFPLElBQUk7Ozs7QUFBRyxDQUFDLEdBQUcsSUFBaUIsRUFBRSxFQUFFLENBQUMscUJBQXFCOzs7O0FBQUMsQ0FBQyxHQUFHLEdBQWdCLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQTs7QUFFbkksTUFBTSxPQUFPLGFBQWE7Ozs7OztBQUFHLENBQUMsSUFBWSxFQUFFLElBQVksRUFBRSxFQUFXLEVBQUUsRUFBRTtJQUN2RSxlQUFlLENBQUMsR0FBRyxJQUFJLFFBQVEsSUFBSSxxQ0FBcUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDdkgsQ0FBQyxDQUFBOztBQUVELE1BQU0sT0FBTyxlQUFlOzs7O0FBQUcsQ0FBQyxHQUFHLElBQWlCLEVBQUUsRUFBRTtJQUN0RCxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRTs7Y0FDckIsS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUMsS0FBSztRQUMvQixPQUFPLHFCQUFxQjs7OztRQUFDLENBQUMsR0FBRyxHQUFnQixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUUsR0FBRyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUNwSDtTQUFNO1FBQ0w7OztRQUFPLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFBQztLQUNqQjtBQUNILENBQUMsQ0FBQTs7O0FBR0QsTUFBTSxPQUFPLEdBQUc7Ozs7QUFBRyxDQUFDLEdBQUcsSUFBaUIsRUFBRSxFQUFFO0lBQzFDLElBQUksU0FBUyxFQUFFLEVBQUU7UUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0tBQzlCO0FBQ0gsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNEZXZNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9lbnZpcm9ubWVudHMnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuY29uc3QgcmVjb3JkOiBSZWNvcmQ8c3RyaW5nLCBib29sZWFuPiA9IHt9O1xuXG5leHBvcnQgY29uc3QgUFJFRklYID0gJ1tAREVMT05dOic7XG5cbmZ1bmN0aW9uIG5vdFJlY29yZGVkKC4uLmFyZ3M6IE56U2FmZUFueVtdKTogYm9vbGVhbiB7XG4gIGNvbnN0IGFzUmVjb3JkID0gYXJncy5yZWR1Y2UoKGFjYywgYykgPT4gYWNjICsgYy50b1N0cmluZygpLCAnJyk7XG5cbiAgaWYgKHJlY29yZFthc1JlY29yZF0pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgcmVjb3JkW2FzUmVjb3JkXSA9IHRydWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29uc29sZUNvbW1vbkJlaGF2aW9yKGNvbnNvbGVGdW5jOiAoLi4uYXJnczogTnpTYWZlQW55KSA9PiB2b2lkLCAuLi5hcmdzOiBOelNhZmVBbnlbXSk6IHZvaWQge1xuICBpZiAoZW52aXJvbm1lbnQuaXNUZXN0TW9kZSB8fCAoaXNEZXZNb2RlKCkgJiYgbm90UmVjb3JkZWQoLi4uYXJncykpKSB7XG4gICAgY29uc29sZUZ1bmMoLi4uYXJncyk7XG4gIH1cbn1cblxuLy8gV2FybmluZyBzaG91bGQgb25seSBiZSBwcmludGVkIGluIGRldiBtb2RlIGFuZCBvbmx5IG9uY2UuXG5leHBvcnQgY29uc3Qgd2FybiA9ICguLi5hcmdzOiBOelNhZmVBbnlbXSkgPT4gY29uc29sZUNvbW1vbkJlaGF2aW9yKCguLi5hcmc6IE56U2FmZUFueVtdKSA9PiBjb25zb2xlLndhcm4oUFJFRklYLCAuLi5hcmcpLCAuLi5hcmdzKTtcblxuZXhwb3J0IGNvbnN0IGRlcHJlY2F0aW9uMTEgPSAoY29tcDogc3RyaW5nLCBmcm9tOiBzdHJpbmcsIHRvPzogc3RyaW5nKSA9PiB7XG4gIHdhcm5EZXByZWNhdGlvbihgJHtjb21wfSA9PiAnJHtmcm9tfScgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiAxMS4wLjAke3RvID8gYCwgUGxlYXNlIHVzZSAnJHt0b30nIGluc3RlYWRgIDogYGB9LmApO1xufTtcblxuZXhwb3J0IGNvbnN0IHdhcm5EZXByZWNhdGlvbiA9ICguLi5hcmdzOiBOelNhZmVBbnlbXSkgPT4ge1xuICBpZiAoIWVudmlyb25tZW50LmlzVGVzdE1vZGUpIHtcbiAgICBjb25zdCBzdGFjayA9IG5ldyBFcnJvcigpLnN0YWNrO1xuICAgIHJldHVybiBjb25zb2xlQ29tbW9uQmVoYXZpb3IoKC4uLmFyZzogTnpTYWZlQW55W10pID0+IGNvbnNvbGUud2FybihQUkVGSVgsICdkZXByZWNhdGVkOicsIC4uLmFyZywgc3RhY2spLCAuLi5hcmdzKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKCkgPT4ge307XG4gIH1cbn07XG5cbi8vIExvZyBzaG91bGQgb25seSBiZSBwcmludGVkIGluIGRldiBtb2RlLlxuZXhwb3J0IGNvbnN0IGxvZyA9ICguLi5hcmdzOiBOelNhZmVBbnlbXSkgPT4ge1xuICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICBjb25zb2xlLmxvZyhQUkVGSVgsIC4uLmFyZ3MpO1xuICB9XG59O1xuIl19