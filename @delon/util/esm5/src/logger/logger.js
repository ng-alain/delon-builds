/**
 * @fileoverview added by tsickle
 * Generated from: src/logger/logger.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __read, __spread } from "tslib";
import { isDevMode } from '@angular/core';
import { environment } from 'ng-zorro-antd/core/environments';
/** @type {?} */
var record = {};
/** @type {?} */
export var PREFIX = '[@DELON]:';
/**
 * @param {...?} args
 * @return {?}
 */
function notRecorded() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    /** @type {?} */
    var asRecord = args.reduce((/**
     * @param {?} acc
     * @param {?} c
     * @return {?}
     */
    function (acc, c) { return acc + c.toString(); }), '');
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
function consoleCommonBehavior(consoleFunc) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (environment.isTestMode || (isDevMode() && notRecorded.apply(void 0, __spread(args)))) {
        consoleFunc.apply(void 0, __spread(args));
    }
}
// Warning should only be printed in dev mode and only once.
/** @type {?} */
export var warn = (/**
 * @param {...?} args
 * @return {?}
 */
function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return consoleCommonBehavior.apply(void 0, __spread([(/**
         * @param {...?} arg
         * @return {?}
         */
        function () {
            var arg = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                arg[_i] = arguments[_i];
            }
            return console.warn.apply(console, __spread([PREFIX], arg));
        })], args));
});
/** @type {?} */
export var deprecation10 = (/**
 * @param {?} comp
 * @param {?} from
 * @param {?=} to
 * @return {?}
 */
function (comp, from, to) {
    warnDeprecation(comp + " => '" + from + "' is going to be removed in 10.0.0" + (to ? ", Please use '" + to + "' instead" : "") + ".");
});
/** @type {?} */
export var warnDeprecation = (/**
 * @param {...?} args
 * @return {?}
 */
function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!environment.isTestMode) {
        /** @type {?} */
        var stack_1 = new Error().stack;
        return consoleCommonBehavior.apply(void 0, __spread([(/**
             * @param {...?} arg
             * @return {?}
             */
            function () {
                var arg = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    arg[_i] = arguments[_i];
                }
                return console.warn.apply(console, __spread([PREFIX, 'deprecated:'], arg, [stack_1]));
            })], args));
    }
    else {
        return (/**
         * @return {?}
         */
        function () { });
    }
});
// Log should only be printed in dev mode.
/** @type {?} */
export var log = (/**
 * @param {...?} args
 * @return {?}
 */
function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (isDevMode()) {
        console.log.apply(console, __spread([PREFIX], args));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3V0aWwvIiwic291cmNlcyI6WyJzcmMvbG9nZ2VyL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7SUFHeEQsTUFBTSxHQUE0QixFQUFFOztBQUUxQyxNQUFNLEtBQU8sTUFBTSxHQUFHLFdBQVc7Ozs7O0FBRWpDLFNBQVMsV0FBVztJQUFDLGNBQW9CO1NBQXBCLFVBQW9CLEVBQXBCLHFCQUFvQixFQUFwQixJQUFvQjtRQUFwQix5QkFBb0I7OztRQUNqQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU07Ozs7O0lBQUMsVUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFLLE9BQUEsR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBbEIsQ0FBa0IsR0FBRSxFQUFFLENBQUM7SUFFaEUsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDcEIsT0FBTyxLQUFLLENBQUM7S0FDZDtTQUFNO1FBQ0wsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN4QixPQUFPLElBQUksQ0FBQztLQUNiO0FBQ0gsQ0FBQzs7Ozs7O0FBRUQsU0FBUyxxQkFBcUIsQ0FBQyxXQUF5QztJQUFFLGNBQW9CO1NBQXBCLFVBQW9CLEVBQXBCLHFCQUFvQixFQUFwQixJQUFvQjtRQUFwQiw2QkFBb0I7O0lBQzVGLElBQUksV0FBVyxDQUFDLFVBQVUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLFdBQVcsd0JBQUksSUFBSSxFQUFDLENBQUMsRUFBRTtRQUNuRSxXQUFXLHdCQUFJLElBQUksR0FBRTtLQUN0QjtBQUNILENBQUM7OztBQUdELE1BQU0sS0FBTyxJQUFJOzs7O0FBQUc7SUFBQyxjQUFvQjtTQUFwQixVQUFvQixFQUFwQixxQkFBb0IsRUFBcEIsSUFBb0I7UUFBcEIseUJBQW9COztJQUFLLE9BQUEscUJBQXFCOzs7O1FBQUM7WUFBQyxhQUFtQjtpQkFBbkIsVUFBbUIsRUFBbkIscUJBQW1CLEVBQW5CLElBQW1CO2dCQUFuQix3QkFBbUI7O1lBQUssT0FBQSxPQUFPLENBQUMsSUFBSSxPQUFaLE9BQU8sWUFBTSxNQUFNLEdBQUssR0FBRztRQUEzQixDQUE0QixJQUFLLElBQUk7QUFBcEYsQ0FBcUYsQ0FBQTs7QUFFbkksTUFBTSxLQUFPLGFBQWE7Ozs7OztBQUFHLFVBQUMsSUFBWSxFQUFFLElBQVksRUFBRSxFQUFXO0lBQ25FLGVBQWUsQ0FBSSxJQUFJLGFBQVEsSUFBSSwyQ0FBcUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxtQkFBaUIsRUFBRSxjQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBRyxDQUFDLENBQUM7QUFDdkgsQ0FBQyxDQUFBOztBQUVELE1BQU0sS0FBTyxlQUFlOzs7O0FBQUc7SUFBQyxjQUFvQjtTQUFwQixVQUFvQixFQUFwQixxQkFBb0IsRUFBcEIsSUFBb0I7UUFBcEIseUJBQW9COztJQUNsRCxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRTs7WUFDckIsT0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUMsS0FBSztRQUMvQixPQUFPLHFCQUFxQjs7OztZQUFDO2dCQUFDLGFBQW1CO3FCQUFuQixVQUFtQixFQUFuQixxQkFBbUIsRUFBbkIsSUFBbUI7b0JBQW5CLHdCQUFtQjs7Z0JBQUssT0FBQSxPQUFPLENBQUMsSUFBSSxPQUFaLE9BQU8sWUFBTSxNQUFNLEVBQUUsYUFBYSxHQUFLLEdBQUcsR0FBRSxPQUFLO1lBQWpELENBQWtELElBQUssSUFBSSxHQUFFO0tBQ3BIO1NBQU07UUFDTDs7O1FBQU8sY0FBTyxDQUFDLEVBQUM7S0FDakI7QUFDSCxDQUFDLENBQUE7OztBQUdELE1BQU0sS0FBTyxHQUFHOzs7O0FBQUc7SUFBQyxjQUFvQjtTQUFwQixVQUFvQixFQUFwQixxQkFBb0IsRUFBcEIsSUFBb0I7UUFBcEIseUJBQW9COztJQUN0QyxJQUFJLFNBQVMsRUFBRSxFQUFFO1FBQ2YsT0FBTyxDQUFDLEdBQUcsT0FBWCxPQUFPLFlBQUssTUFBTSxHQUFLLElBQUksR0FBRTtLQUM5QjtBQUNILENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvZW52aXJvbm1lbnRzJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmNvbnN0IHJlY29yZDogUmVjb3JkPHN0cmluZywgYm9vbGVhbj4gPSB7fTtcblxuZXhwb3J0IGNvbnN0IFBSRUZJWCA9ICdbQERFTE9OXTonO1xuXG5mdW5jdGlvbiBub3RSZWNvcmRlZCguLi5hcmdzOiBOelNhZmVBbnlbXSk6IGJvb2xlYW4ge1xuICBjb25zdCBhc1JlY29yZCA9IGFyZ3MucmVkdWNlKChhY2MsIGMpID0+IGFjYyArIGMudG9TdHJpbmcoKSwgJycpO1xuXG4gIGlmIChyZWNvcmRbYXNSZWNvcmRdKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJlY29yZFthc1JlY29yZF0gPSB0cnVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbnNvbGVDb21tb25CZWhhdmlvcihjb25zb2xlRnVuYzogKC4uLmFyZ3M6IE56U2FmZUFueSkgPT4gdm9pZCwgLi4uYXJnczogTnpTYWZlQW55W10pOiB2b2lkIHtcbiAgaWYgKGVudmlyb25tZW50LmlzVGVzdE1vZGUgfHwgKGlzRGV2TW9kZSgpICYmIG5vdFJlY29yZGVkKC4uLmFyZ3MpKSkge1xuICAgIGNvbnNvbGVGdW5jKC4uLmFyZ3MpO1xuICB9XG59XG5cbi8vIFdhcm5pbmcgc2hvdWxkIG9ubHkgYmUgcHJpbnRlZCBpbiBkZXYgbW9kZSBhbmQgb25seSBvbmNlLlxuZXhwb3J0IGNvbnN0IHdhcm4gPSAoLi4uYXJnczogTnpTYWZlQW55W10pID0+IGNvbnNvbGVDb21tb25CZWhhdmlvcigoLi4uYXJnOiBOelNhZmVBbnlbXSkgPT4gY29uc29sZS53YXJuKFBSRUZJWCwgLi4uYXJnKSwgLi4uYXJncyk7XG5cbmV4cG9ydCBjb25zdCBkZXByZWNhdGlvbjEwID0gKGNvbXA6IHN0cmluZywgZnJvbTogc3RyaW5nLCB0bz86IHN0cmluZykgPT4ge1xuICB3YXJuRGVwcmVjYXRpb24oYCR7Y29tcH0gPT4gJyR7ZnJvbX0nIGlzIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gMTAuMC4wJHt0byA/IGAsIFBsZWFzZSB1c2UgJyR7dG99JyBpbnN0ZWFkYCA6IGBgfS5gKTtcbn07XG5cbmV4cG9ydCBjb25zdCB3YXJuRGVwcmVjYXRpb24gPSAoLi4uYXJnczogTnpTYWZlQW55W10pID0+IHtcbiAgaWYgKCFlbnZpcm9ubWVudC5pc1Rlc3RNb2RlKSB7XG4gICAgY29uc3Qgc3RhY2sgPSBuZXcgRXJyb3IoKS5zdGFjaztcbiAgICByZXR1cm4gY29uc29sZUNvbW1vbkJlaGF2aW9yKCguLi5hcmc6IE56U2FmZUFueVtdKSA9PiBjb25zb2xlLndhcm4oUFJFRklYLCAnZGVwcmVjYXRlZDonLCAuLi5hcmcsIHN0YWNrKSwgLi4uYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICgpID0+IHt9O1xuICB9XG59O1xuXG4vLyBMb2cgc2hvdWxkIG9ubHkgYmUgcHJpbnRlZCBpbiBkZXYgbW9kZS5cbmV4cG9ydCBjb25zdCBsb2cgPSAoLi4uYXJnczogTnpTYWZlQW55W10pID0+IHtcbiAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgY29uc29sZS5sb2coUFJFRklYLCAuLi5hcmdzKTtcbiAgfVxufTtcbiJdfQ==