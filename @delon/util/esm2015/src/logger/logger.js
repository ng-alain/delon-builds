/**
 * @fileoverview added by tsickle
 * Generated from: src/logger/logger.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
export const deprecation10 = (/**
 * @param {?} comp
 * @param {?} from
 * @param {?=} to
 * @return {?}
 */
(comp, from, to) => {
    warnDeprecation(`${comp} => '${from}' is going to be removed in 10.0.0${to ? `, Please use '${to}' instead` : ``}.`);
});
/** @type {?} */
export const deprecation10Cog = (/**
 * @param {?} cogName
 * @return {?}
 */
(cogName) => {
    warnDeprecation(`${cogName} is going to be removed in 10.0.0. Please refer to https://ng-alain.com/docs/global-config`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3V0aWwvIiwic291cmNlcyI6WyJzcmMvbG9nZ2VyL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztNQUd4RCxNQUFNLEdBQTRCLEVBQUU7O0FBRTFDLE1BQU0sT0FBTyxNQUFNLEdBQUcsV0FBVzs7Ozs7QUFFakMsU0FBUyxXQUFXLENBQUMsR0FBRyxJQUFpQjs7VUFDakMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNOzs7OztJQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRSxFQUFFLENBQUM7SUFFaEUsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDcEIsT0FBTyxLQUFLLENBQUM7S0FDZDtTQUFNO1FBQ0wsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN4QixPQUFPLElBQUksQ0FBQztLQUNiO0FBQ0gsQ0FBQzs7Ozs7O0FBRUQsU0FBUyxxQkFBcUIsQ0FBQyxXQUF5QyxFQUFFLEdBQUcsSUFBaUI7SUFDNUYsSUFBSSxXQUFXLENBQUMsVUFBVSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRTtRQUNuRSxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUN0QjtBQUNILENBQUM7OztBQUdELE1BQU0sT0FBTyxJQUFJOzs7O0FBQUcsQ0FBQyxHQUFHLElBQWlCLEVBQUUsRUFBRSxDQUFDLHFCQUFxQjs7OztBQUFDLENBQUMsR0FBRyxHQUFnQixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFFLEdBQUcsSUFBSSxDQUFDLENBQUE7O0FBRW5JLE1BQU0sT0FBTyxhQUFhOzs7Ozs7QUFBRyxDQUFDLElBQVksRUFBRSxJQUFZLEVBQUUsRUFBVyxFQUFFLEVBQUU7SUFDdkUsZUFBZSxDQUFDLEdBQUcsSUFBSSxRQUFRLElBQUkscUNBQXFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZILENBQUMsQ0FBQTs7QUFFRCxNQUFNLE9BQU8sZ0JBQWdCOzs7O0FBQUcsQ0FBQyxPQUFlLEVBQUUsRUFBRTtJQUNsRCxlQUFlLENBQUMsR0FBRyxPQUFPLDRGQUE0RixDQUFDLENBQUM7QUFDMUgsQ0FBQyxDQUFBOztBQUVELE1BQU0sT0FBTyxlQUFlOzs7O0FBQUcsQ0FBQyxHQUFHLElBQWlCLEVBQUUsRUFBRTtJQUN0RCxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRTs7Y0FDckIsS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUMsS0FBSztRQUMvQixPQUFPLHFCQUFxQjs7OztRQUFDLENBQUMsR0FBRyxHQUFnQixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUUsR0FBRyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUNwSDtTQUFNO1FBQ0w7OztRQUFPLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFBQztLQUNqQjtBQUNILENBQUMsQ0FBQTs7O0FBR0QsTUFBTSxPQUFPLEdBQUc7Ozs7QUFBRyxDQUFDLEdBQUcsSUFBaUIsRUFBRSxFQUFFO0lBQzFDLElBQUksU0FBUyxFQUFFLEVBQUU7UUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0tBQzlCO0FBQ0gsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNEZXZNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9lbnZpcm9ubWVudHMnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuY29uc3QgcmVjb3JkOiBSZWNvcmQ8c3RyaW5nLCBib29sZWFuPiA9IHt9O1xuXG5leHBvcnQgY29uc3QgUFJFRklYID0gJ1tAREVMT05dOic7XG5cbmZ1bmN0aW9uIG5vdFJlY29yZGVkKC4uLmFyZ3M6IE56U2FmZUFueVtdKTogYm9vbGVhbiB7XG4gIGNvbnN0IGFzUmVjb3JkID0gYXJncy5yZWR1Y2UoKGFjYywgYykgPT4gYWNjICsgYy50b1N0cmluZygpLCAnJyk7XG5cbiAgaWYgKHJlY29yZFthc1JlY29yZF0pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgcmVjb3JkW2FzUmVjb3JkXSA9IHRydWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29uc29sZUNvbW1vbkJlaGF2aW9yKGNvbnNvbGVGdW5jOiAoLi4uYXJnczogTnpTYWZlQW55KSA9PiB2b2lkLCAuLi5hcmdzOiBOelNhZmVBbnlbXSk6IHZvaWQge1xuICBpZiAoZW52aXJvbm1lbnQuaXNUZXN0TW9kZSB8fCAoaXNEZXZNb2RlKCkgJiYgbm90UmVjb3JkZWQoLi4uYXJncykpKSB7XG4gICAgY29uc29sZUZ1bmMoLi4uYXJncyk7XG4gIH1cbn1cblxuLy8gV2FybmluZyBzaG91bGQgb25seSBiZSBwcmludGVkIGluIGRldiBtb2RlIGFuZCBvbmx5IG9uY2UuXG5leHBvcnQgY29uc3Qgd2FybiA9ICguLi5hcmdzOiBOelNhZmVBbnlbXSkgPT4gY29uc29sZUNvbW1vbkJlaGF2aW9yKCguLi5hcmc6IE56U2FmZUFueVtdKSA9PiBjb25zb2xlLndhcm4oUFJFRklYLCAuLi5hcmcpLCAuLi5hcmdzKTtcblxuZXhwb3J0IGNvbnN0IGRlcHJlY2F0aW9uMTAgPSAoY29tcDogc3RyaW5nLCBmcm9tOiBzdHJpbmcsIHRvPzogc3RyaW5nKSA9PiB7XG4gIHdhcm5EZXByZWNhdGlvbihgJHtjb21wfSA9PiAnJHtmcm9tfScgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiAxMC4wLjAke3RvID8gYCwgUGxlYXNlIHVzZSAnJHt0b30nIGluc3RlYWRgIDogYGB9LmApO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlcHJlY2F0aW9uMTBDb2cgPSAoY29nTmFtZTogc3RyaW5nKSA9PiB7XG4gIHdhcm5EZXByZWNhdGlvbihgJHtjb2dOYW1lfSBpcyBnb2luZyB0byBiZSByZW1vdmVkIGluIDEwLjAuMC4gUGxlYXNlIHJlZmVyIHRvIGh0dHBzOi8vbmctYWxhaW4uY29tL2RvY3MvZ2xvYmFsLWNvbmZpZ2ApO1xufTtcblxuZXhwb3J0IGNvbnN0IHdhcm5EZXByZWNhdGlvbiA9ICguLi5hcmdzOiBOelNhZmVBbnlbXSkgPT4ge1xuICBpZiAoIWVudmlyb25tZW50LmlzVGVzdE1vZGUpIHtcbiAgICBjb25zdCBzdGFjayA9IG5ldyBFcnJvcigpLnN0YWNrO1xuICAgIHJldHVybiBjb25zb2xlQ29tbW9uQmVoYXZpb3IoKC4uLmFyZzogTnpTYWZlQW55W10pID0+IGNvbnNvbGUud2FybihQUkVGSVgsICdkZXByZWNhdGVkOicsIC4uLmFyZywgc3RhY2spLCAuLi5hcmdzKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKCkgPT4ge307XG4gIH1cbn07XG5cbi8vIExvZyBzaG91bGQgb25seSBiZSBwcmludGVkIGluIGRldiBtb2RlLlxuZXhwb3J0IGNvbnN0IGxvZyA9ICguLi5hcmdzOiBOelNhZmVBbnlbXSkgPT4ge1xuICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICBjb25zb2xlLmxvZyhQUkVGSVgsIC4uLmFyZ3MpO1xuICB9XG59O1xuIl19