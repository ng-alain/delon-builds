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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3V0aWwvIiwic291cmNlcyI6WyJzcmMvbG9nZ2VyL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7SUFHeEQsTUFBTSxHQUE0QixFQUFFOztBQUUxQyxNQUFNLEtBQU8sTUFBTSxHQUFHLFdBQVc7Ozs7O0FBRWpDLFNBQVMsV0FBVztJQUFDLGNBQW9CO1NBQXBCLFVBQW9CLEVBQXBCLHFCQUFvQixFQUFwQixJQUFvQjtRQUFwQix5QkFBb0I7OztRQUNqQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU07Ozs7O0lBQUMsVUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFLLE9BQUEsR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBbEIsQ0FBa0IsR0FBRSxFQUFFLENBQUM7SUFFaEUsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDcEIsT0FBTyxLQUFLLENBQUM7S0FDZDtTQUFNO1FBQ0wsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN4QixPQUFPLElBQUksQ0FBQztLQUNiO0FBQ0gsQ0FBQzs7Ozs7O0FBRUQsU0FBUyxxQkFBcUIsQ0FBQyxXQUF5QztJQUFFLGNBQW9CO1NBQXBCLFVBQW9CLEVBQXBCLHFCQUFvQixFQUFwQixJQUFvQjtRQUFwQiw2QkFBb0I7O0lBQzVGLElBQUksV0FBVyxDQUFDLFVBQVUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLFdBQVcsd0JBQUksSUFBSSxFQUFDLENBQUMsRUFBRTtRQUNuRSxXQUFXLHdCQUFJLElBQUksR0FBRTtLQUN0QjtBQUNILENBQUM7OztBQUdELE1BQU0sS0FBTyxJQUFJOzs7O0FBQUc7SUFBQyxjQUFvQjtTQUFwQixVQUFvQixFQUFwQixxQkFBb0IsRUFBcEIsSUFBb0I7UUFBcEIseUJBQW9COztJQUFLLE9BQUEscUJBQXFCOzs7O1FBQUM7WUFBQyxhQUFtQjtpQkFBbkIsVUFBbUIsRUFBbkIscUJBQW1CLEVBQW5CLElBQW1CO2dCQUFuQix3QkFBbUI7O1lBQUssT0FBQSxPQUFPLENBQUMsSUFBSSxPQUFaLE9BQU8sWUFBTSxNQUFNLEdBQUssR0FBRztRQUEzQixDQUE0QixJQUFLLElBQUk7QUFBcEYsQ0FBcUYsQ0FBQTs7QUFFbkksTUFBTSxLQUFPLGVBQWU7Ozs7QUFBRztJQUFDLGNBQW9CO1NBQXBCLFVBQW9CLEVBQXBCLHFCQUFvQixFQUFwQixJQUFvQjtRQUFwQix5QkFBb0I7O0lBQ2xELElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFOztZQUNyQixPQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQyxLQUFLO1FBQy9CLE9BQU8scUJBQXFCOzs7O1lBQUM7Z0JBQUMsYUFBbUI7cUJBQW5CLFVBQW1CLEVBQW5CLHFCQUFtQixFQUFuQixJQUFtQjtvQkFBbkIsd0JBQW1COztnQkFBSyxPQUFBLE9BQU8sQ0FBQyxJQUFJLE9BQVosT0FBTyxZQUFNLE1BQU0sRUFBRSxhQUFhLEdBQUssR0FBRyxHQUFFLE9BQUs7WUFBakQsQ0FBa0QsSUFBSyxJQUFJLEdBQUU7S0FDcEg7U0FBTTtRQUNMOzs7UUFBTyxjQUFPLENBQUMsRUFBQztLQUNqQjtBQUNILENBQUMsQ0FBQTs7O0FBR0QsTUFBTSxLQUFPLEdBQUc7Ozs7QUFBRztJQUFDLGNBQW9CO1NBQXBCLFVBQW9CLEVBQXBCLHFCQUFvQixFQUFwQixJQUFvQjtRQUFwQix5QkFBb0I7O0lBQ3RDLElBQUksU0FBUyxFQUFFLEVBQUU7UUFDZixPQUFPLENBQUMsR0FBRyxPQUFYLE9BQU8sWUFBSyxNQUFNLEdBQUssSUFBSSxHQUFFO0tBQzlCO0FBQ0gsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNEZXZNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9lbnZpcm9ubWVudHMnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuY29uc3QgcmVjb3JkOiBSZWNvcmQ8c3RyaW5nLCBib29sZWFuPiA9IHt9O1xuXG5leHBvcnQgY29uc3QgUFJFRklYID0gJ1tAREVMT05dOic7XG5cbmZ1bmN0aW9uIG5vdFJlY29yZGVkKC4uLmFyZ3M6IE56U2FmZUFueVtdKTogYm9vbGVhbiB7XG4gIGNvbnN0IGFzUmVjb3JkID0gYXJncy5yZWR1Y2UoKGFjYywgYykgPT4gYWNjICsgYy50b1N0cmluZygpLCAnJyk7XG5cbiAgaWYgKHJlY29yZFthc1JlY29yZF0pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgcmVjb3JkW2FzUmVjb3JkXSA9IHRydWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29uc29sZUNvbW1vbkJlaGF2aW9yKGNvbnNvbGVGdW5jOiAoLi4uYXJnczogTnpTYWZlQW55KSA9PiB2b2lkLCAuLi5hcmdzOiBOelNhZmVBbnlbXSk6IHZvaWQge1xuICBpZiAoZW52aXJvbm1lbnQuaXNUZXN0TW9kZSB8fCAoaXNEZXZNb2RlKCkgJiYgbm90UmVjb3JkZWQoLi4uYXJncykpKSB7XG4gICAgY29uc29sZUZ1bmMoLi4uYXJncyk7XG4gIH1cbn1cblxuLy8gV2FybmluZyBzaG91bGQgb25seSBiZSBwcmludGVkIGluIGRldiBtb2RlIGFuZCBvbmx5IG9uY2UuXG5leHBvcnQgY29uc3Qgd2FybiA9ICguLi5hcmdzOiBOelNhZmVBbnlbXSkgPT4gY29uc29sZUNvbW1vbkJlaGF2aW9yKCguLi5hcmc6IE56U2FmZUFueVtdKSA9PiBjb25zb2xlLndhcm4oUFJFRklYLCAuLi5hcmcpLCAuLi5hcmdzKTtcblxuZXhwb3J0IGNvbnN0IHdhcm5EZXByZWNhdGlvbiA9ICguLi5hcmdzOiBOelNhZmVBbnlbXSkgPT4ge1xuICBpZiAoIWVudmlyb25tZW50LmlzVGVzdE1vZGUpIHtcbiAgICBjb25zdCBzdGFjayA9IG5ldyBFcnJvcigpLnN0YWNrO1xuICAgIHJldHVybiBjb25zb2xlQ29tbW9uQmVoYXZpb3IoKC4uLmFyZzogTnpTYWZlQW55W10pID0+IGNvbnNvbGUud2FybihQUkVGSVgsICdkZXByZWNhdGVkOicsIC4uLmFyZywgc3RhY2spLCAuLi5hcmdzKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKCkgPT4ge307XG4gIH1cbn07XG5cbi8vIExvZyBzaG91bGQgb25seSBiZSBwcmludGVkIGluIGRldiBtb2RlLlxuZXhwb3J0IGNvbnN0IGxvZyA9ICguLi5hcmdzOiBOelNhZmVBbnlbXSkgPT4ge1xuICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICBjb25zb2xlLmxvZyhQUkVGSVgsIC4uLmFyZ3MpO1xuICB9XG59O1xuIl19