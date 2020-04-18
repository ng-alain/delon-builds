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
export const warnDeprecation10 = (/**
 * @param {?} from
 * @param {?} to
 * @return {?}
 */
(from, to) => {
    warnDeprecation(`'${from}' is going to be removed in 10.0.0. Please use '${to}' instead.`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3V0aWwvIiwic291cmNlcyI6WyJzcmMvbG9nZ2VyL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztNQUd4RCxNQUFNLEdBQTRCLEVBQUU7O0FBRTFDLE1BQU0sT0FBTyxNQUFNLEdBQUcsV0FBVzs7Ozs7QUFFakMsU0FBUyxXQUFXLENBQUMsR0FBRyxJQUFpQjs7VUFDakMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNOzs7OztJQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRSxFQUFFLENBQUM7SUFFaEUsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDcEIsT0FBTyxLQUFLLENBQUM7S0FDZDtTQUFNO1FBQ0wsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN4QixPQUFPLElBQUksQ0FBQztLQUNiO0FBQ0gsQ0FBQzs7Ozs7O0FBRUQsU0FBUyxxQkFBcUIsQ0FBQyxXQUF5QyxFQUFFLEdBQUcsSUFBaUI7SUFDNUYsSUFBSSxXQUFXLENBQUMsVUFBVSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRTtRQUNuRSxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUN0QjtBQUNILENBQUM7OztBQUdELE1BQU0sT0FBTyxJQUFJOzs7O0FBQUcsQ0FBQyxHQUFHLElBQWlCLEVBQUUsRUFBRSxDQUFDLHFCQUFxQjs7OztBQUFDLENBQUMsR0FBRyxHQUFnQixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFFLEdBQUcsSUFBSSxDQUFDLENBQUE7O0FBRW5JLE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0FBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBVSxFQUFFLEVBQUU7SUFDNUQsZUFBZSxDQUFDLElBQUksSUFBSSxtREFBbUQsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUM3RixDQUFDLENBQUE7O0FBRUQsTUFBTSxPQUFPLGVBQWU7Ozs7QUFBRyxDQUFDLEdBQUcsSUFBaUIsRUFBRSxFQUFFO0lBQ3RELElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFOztjQUNyQixLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQyxLQUFLO1FBQy9CLE9BQU8scUJBQXFCOzs7O1FBQUMsQ0FBQyxHQUFHLEdBQWdCLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLGFBQWEsRUFBRSxHQUFHLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0tBQ3BIO1NBQU07UUFDTDs7O1FBQU8sR0FBRyxFQUFFLEdBQUUsQ0FBQyxFQUFDO0tBQ2pCO0FBQ0gsQ0FBQyxDQUFBOzs7QUFHRCxNQUFNLE9BQU8sR0FBRzs7OztBQUFHLENBQUMsR0FBRyxJQUFpQixFQUFFLEVBQUU7SUFDMUMsSUFBSSxTQUFTLEVBQUUsRUFBRTtRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7S0FDOUI7QUFDSCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc0Rldk1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2Vudmlyb25tZW50cyc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5jb25zdCByZWNvcmQ6IFJlY29yZDxzdHJpbmcsIGJvb2xlYW4+ID0ge307XG5cbmV4cG9ydCBjb25zdCBQUkVGSVggPSAnW0BERUxPTl06JztcblxuZnVuY3Rpb24gbm90UmVjb3JkZWQoLi4uYXJnczogTnpTYWZlQW55W10pOiBib29sZWFuIHtcbiAgY29uc3QgYXNSZWNvcmQgPSBhcmdzLnJlZHVjZSgoYWNjLCBjKSA9PiBhY2MgKyBjLnRvU3RyaW5nKCksICcnKTtcblxuICBpZiAocmVjb3JkW2FzUmVjb3JkXSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZWNvcmRbYXNSZWNvcmRdID0gdHJ1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb25zb2xlQ29tbW9uQmVoYXZpb3IoY29uc29sZUZ1bmM6ICguLi5hcmdzOiBOelNhZmVBbnkpID0+IHZvaWQsIC4uLmFyZ3M6IE56U2FmZUFueVtdKTogdm9pZCB7XG4gIGlmIChlbnZpcm9ubWVudC5pc1Rlc3RNb2RlIHx8IChpc0Rldk1vZGUoKSAmJiBub3RSZWNvcmRlZCguLi5hcmdzKSkpIHtcbiAgICBjb25zb2xlRnVuYyguLi5hcmdzKTtcbiAgfVxufVxuXG4vLyBXYXJuaW5nIHNob3VsZCBvbmx5IGJlIHByaW50ZWQgaW4gZGV2IG1vZGUgYW5kIG9ubHkgb25jZS5cbmV4cG9ydCBjb25zdCB3YXJuID0gKC4uLmFyZ3M6IE56U2FmZUFueVtdKSA9PiBjb25zb2xlQ29tbW9uQmVoYXZpb3IoKC4uLmFyZzogTnpTYWZlQW55W10pID0+IGNvbnNvbGUud2FybihQUkVGSVgsIC4uLmFyZyksIC4uLmFyZ3MpO1xuXG5leHBvcnQgY29uc3Qgd2FybkRlcHJlY2F0aW9uMTAgPSAoZnJvbTogc3RyaW5nLCB0bzogc3RyaW5nKSA9PiB7XG4gIHdhcm5EZXByZWNhdGlvbihgJyR7ZnJvbX0nIGlzIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gMTAuMC4wLiBQbGVhc2UgdXNlICcke3RvfScgaW5zdGVhZC5gKTtcbn07XG5cbmV4cG9ydCBjb25zdCB3YXJuRGVwcmVjYXRpb24gPSAoLi4uYXJnczogTnpTYWZlQW55W10pID0+IHtcbiAgaWYgKCFlbnZpcm9ubWVudC5pc1Rlc3RNb2RlKSB7XG4gICAgY29uc3Qgc3RhY2sgPSBuZXcgRXJyb3IoKS5zdGFjaztcbiAgICByZXR1cm4gY29uc29sZUNvbW1vbkJlaGF2aW9yKCguLi5hcmc6IE56U2FmZUFueVtdKSA9PiBjb25zb2xlLndhcm4oUFJFRklYLCAnZGVwcmVjYXRlZDonLCAuLi5hcmcsIHN0YWNrKSwgLi4uYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICgpID0+IHt9O1xuICB9XG59O1xuXG4vLyBMb2cgc2hvdWxkIG9ubHkgYmUgcHJpbnRlZCBpbiBkZXYgbW9kZS5cbmV4cG9ydCBjb25zdCBsb2cgPSAoLi4uYXJnczogTnpTYWZlQW55W10pID0+IHtcbiAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgY29uc29sZS5sb2coUFJFRklYLCAuLi5hcmdzKTtcbiAgfVxufTtcbiJdfQ==