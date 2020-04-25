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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3V0aWwvIiwic291cmNlcyI6WyJzcmMvbG9nZ2VyL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztNQUd4RCxNQUFNLEdBQTRCLEVBQUU7O0FBRTFDLE1BQU0sT0FBTyxNQUFNLEdBQUcsV0FBVzs7Ozs7QUFFakMsU0FBUyxXQUFXLENBQUMsR0FBRyxJQUFpQjs7VUFDakMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNOzs7OztJQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRSxFQUFFLENBQUM7SUFFaEUsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDcEIsT0FBTyxLQUFLLENBQUM7S0FDZDtTQUFNO1FBQ0wsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN4QixPQUFPLElBQUksQ0FBQztLQUNiO0FBQ0gsQ0FBQzs7Ozs7O0FBRUQsU0FBUyxxQkFBcUIsQ0FBQyxXQUF5QyxFQUFFLEdBQUcsSUFBaUI7SUFDNUYsSUFBSSxXQUFXLENBQUMsVUFBVSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRTtRQUNuRSxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUN0QjtBQUNILENBQUM7OztBQUdELE1BQU0sT0FBTyxJQUFJOzs7O0FBQUcsQ0FBQyxHQUFHLElBQWlCLEVBQUUsRUFBRSxDQUFDLHFCQUFxQjs7OztBQUFDLENBQUMsR0FBRyxHQUFnQixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFFLEdBQUcsSUFBSSxDQUFDLENBQUE7O0FBRW5JLE1BQU0sT0FBTyxhQUFhOzs7Ozs7QUFBRyxDQUFDLElBQVksRUFBRSxJQUFZLEVBQUUsRUFBVyxFQUFFLEVBQUU7SUFDdkUsZUFBZSxDQUFDLEdBQUcsSUFBSSxRQUFRLElBQUkscUNBQXFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZILENBQUMsQ0FBQTs7QUFFRCxNQUFNLE9BQU8sZUFBZTs7OztBQUFHLENBQUMsR0FBRyxJQUFpQixFQUFFLEVBQUU7SUFDdEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUU7O2NBQ3JCLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDLEtBQUs7UUFDL0IsT0FBTyxxQkFBcUI7Ozs7UUFBQyxDQUFDLEdBQUcsR0FBZ0IsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsYUFBYSxFQUFFLEdBQUcsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7S0FDcEg7U0FBTTtRQUNMOzs7UUFBTyxHQUFHLEVBQUUsR0FBRSxDQUFDLEVBQUM7S0FDakI7QUFDSCxDQUFDLENBQUE7OztBQUdELE1BQU0sT0FBTyxHQUFHOzs7O0FBQUcsQ0FBQyxHQUFHLElBQWlCLEVBQUUsRUFBRTtJQUMxQyxJQUFJLFNBQVMsRUFBRSxFQUFFO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUM5QjtBQUNILENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvZW52aXJvbm1lbnRzJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmNvbnN0IHJlY29yZDogUmVjb3JkPHN0cmluZywgYm9vbGVhbj4gPSB7fTtcblxuZXhwb3J0IGNvbnN0IFBSRUZJWCA9ICdbQERFTE9OXTonO1xuXG5mdW5jdGlvbiBub3RSZWNvcmRlZCguLi5hcmdzOiBOelNhZmVBbnlbXSk6IGJvb2xlYW4ge1xuICBjb25zdCBhc1JlY29yZCA9IGFyZ3MucmVkdWNlKChhY2MsIGMpID0+IGFjYyArIGMudG9TdHJpbmcoKSwgJycpO1xuXG4gIGlmIChyZWNvcmRbYXNSZWNvcmRdKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJlY29yZFthc1JlY29yZF0gPSB0cnVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbnNvbGVDb21tb25CZWhhdmlvcihjb25zb2xlRnVuYzogKC4uLmFyZ3M6IE56U2FmZUFueSkgPT4gdm9pZCwgLi4uYXJnczogTnpTYWZlQW55W10pOiB2b2lkIHtcbiAgaWYgKGVudmlyb25tZW50LmlzVGVzdE1vZGUgfHwgKGlzRGV2TW9kZSgpICYmIG5vdFJlY29yZGVkKC4uLmFyZ3MpKSkge1xuICAgIGNvbnNvbGVGdW5jKC4uLmFyZ3MpO1xuICB9XG59XG5cbi8vIFdhcm5pbmcgc2hvdWxkIG9ubHkgYmUgcHJpbnRlZCBpbiBkZXYgbW9kZSBhbmQgb25seSBvbmNlLlxuZXhwb3J0IGNvbnN0IHdhcm4gPSAoLi4uYXJnczogTnpTYWZlQW55W10pID0+IGNvbnNvbGVDb21tb25CZWhhdmlvcigoLi4uYXJnOiBOelNhZmVBbnlbXSkgPT4gY29uc29sZS53YXJuKFBSRUZJWCwgLi4uYXJnKSwgLi4uYXJncyk7XG5cbmV4cG9ydCBjb25zdCBkZXByZWNhdGlvbjEwID0gKGNvbXA6IHN0cmluZywgZnJvbTogc3RyaW5nLCB0bz86IHN0cmluZykgPT4ge1xuICB3YXJuRGVwcmVjYXRpb24oYCR7Y29tcH0gPT4gJyR7ZnJvbX0nIGlzIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gMTAuMC4wJHt0byA/IGAsIFBsZWFzZSB1c2UgJyR7dG99JyBpbnN0ZWFkYCA6IGBgfS5gKTtcbn07XG5cbmV4cG9ydCBjb25zdCB3YXJuRGVwcmVjYXRpb24gPSAoLi4uYXJnczogTnpTYWZlQW55W10pID0+IHtcbiAgaWYgKCFlbnZpcm9ubWVudC5pc1Rlc3RNb2RlKSB7XG4gICAgY29uc3Qgc3RhY2sgPSBuZXcgRXJyb3IoKS5zdGFjaztcbiAgICByZXR1cm4gY29uc29sZUNvbW1vbkJlaGF2aW9yKCguLi5hcmc6IE56U2FmZUFueVtdKSA9PiBjb25zb2xlLndhcm4oUFJFRklYLCAnZGVwcmVjYXRlZDonLCAuLi5hcmcsIHN0YWNrKSwgLi4uYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICgpID0+IHt9O1xuICB9XG59O1xuXG4vLyBMb2cgc2hvdWxkIG9ubHkgYmUgcHJpbnRlZCBpbiBkZXYgbW9kZS5cbmV4cG9ydCBjb25zdCBsb2cgPSAoLi4uYXJnczogTnpTYWZlQW55W10pID0+IHtcbiAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgY29uc29sZS5sb2coUFJFRklYLCAuLi5hcmdzKTtcbiAgfVxufTtcbiJdfQ==