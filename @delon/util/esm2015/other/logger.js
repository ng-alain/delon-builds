/**
 * @fileoverview added by tsickle
 * Generated from: logger.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9vdGhlci9sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7TUFHeEQsTUFBTSxHQUE0QixFQUFFOztBQUUxQyxNQUFNLE9BQU8sTUFBTSxHQUFHLFdBQVc7Ozs7O0FBRWpDLFNBQVMsV0FBVyxDQUFDLEdBQUcsSUFBaUI7O1VBQ2pDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTTs7Ozs7SUFBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUUsRUFBRSxDQUFDO0lBRWhFLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3BCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7U0FBTTtRQUNMLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDeEIsT0FBTyxJQUFJLENBQUM7S0FDYjtBQUNILENBQUM7Ozs7OztBQUVELFNBQVMscUJBQXFCLENBQUMsV0FBeUMsRUFBRSxHQUFHLElBQWlCO0lBQzVGLElBQUksV0FBVyxDQUFDLFVBQVUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFDbkUsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7S0FDdEI7QUFDSCxDQUFDOzs7QUFHRCxNQUFNLE9BQU8sSUFBSTs7OztBQUFHLENBQUMsR0FBRyxJQUFpQixFQUFFLEVBQUUsQ0FBQyxxQkFBcUI7Ozs7QUFBQyxDQUFDLEdBQUcsR0FBZ0IsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRSxHQUFHLElBQUksQ0FBQyxDQUFBOztBQUVuSSxNQUFNLE9BQU8sYUFBYTs7Ozs7O0FBQUcsQ0FBQyxJQUFZLEVBQUUsSUFBWSxFQUFFLEVBQVcsRUFBRSxFQUFFO0lBQ3ZFLGVBQWUsQ0FBQyxHQUFHLElBQUksUUFBUSxJQUFJLHFDQUFxQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN2SCxDQUFDLENBQUE7O0FBRUQsTUFBTSxPQUFPLGVBQWU7Ozs7QUFBRyxDQUFDLEdBQUcsSUFBaUIsRUFBRSxFQUFFO0lBQ3RELElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFOztjQUNyQixLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQyxLQUFLO1FBQy9CLE9BQU8scUJBQXFCOzs7O1FBQUMsQ0FBQyxHQUFHLEdBQWdCLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLGFBQWEsRUFBRSxHQUFHLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0tBQ3BIO1NBQU07UUFDTDs7O1FBQU8sR0FBRyxFQUFFLEdBQUUsQ0FBQyxFQUFDO0tBQ2pCO0FBQ0gsQ0FBQyxDQUFBOzs7QUFHRCxNQUFNLE9BQU8sR0FBRzs7OztBQUFHLENBQUMsR0FBRyxJQUFpQixFQUFFLEVBQUU7SUFDMUMsSUFBSSxTQUFTLEVBQUUsRUFBRTtRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7S0FDOUI7QUFDSCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc0Rldk1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2Vudmlyb25tZW50cyc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5jb25zdCByZWNvcmQ6IFJlY29yZDxzdHJpbmcsIGJvb2xlYW4+ID0ge307XG5cbmV4cG9ydCBjb25zdCBQUkVGSVggPSAnW0BERUxPTl06JztcblxuZnVuY3Rpb24gbm90UmVjb3JkZWQoLi4uYXJnczogTnpTYWZlQW55W10pOiBib29sZWFuIHtcbiAgY29uc3QgYXNSZWNvcmQgPSBhcmdzLnJlZHVjZSgoYWNjLCBjKSA9PiBhY2MgKyBjLnRvU3RyaW5nKCksICcnKTtcblxuICBpZiAocmVjb3JkW2FzUmVjb3JkXSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZWNvcmRbYXNSZWNvcmRdID0gdHJ1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb25zb2xlQ29tbW9uQmVoYXZpb3IoY29uc29sZUZ1bmM6ICguLi5hcmdzOiBOelNhZmVBbnkpID0+IHZvaWQsIC4uLmFyZ3M6IE56U2FmZUFueVtdKTogdm9pZCB7XG4gIGlmIChlbnZpcm9ubWVudC5pc1Rlc3RNb2RlIHx8IChpc0Rldk1vZGUoKSAmJiBub3RSZWNvcmRlZCguLi5hcmdzKSkpIHtcbiAgICBjb25zb2xlRnVuYyguLi5hcmdzKTtcbiAgfVxufVxuXG4vLyBXYXJuaW5nIHNob3VsZCBvbmx5IGJlIHByaW50ZWQgaW4gZGV2IG1vZGUgYW5kIG9ubHkgb25jZS5cbmV4cG9ydCBjb25zdCB3YXJuID0gKC4uLmFyZ3M6IE56U2FmZUFueVtdKSA9PiBjb25zb2xlQ29tbW9uQmVoYXZpb3IoKC4uLmFyZzogTnpTYWZlQW55W10pID0+IGNvbnNvbGUud2FybihQUkVGSVgsIC4uLmFyZyksIC4uLmFyZ3MpO1xuXG5leHBvcnQgY29uc3QgZGVwcmVjYXRpb24xMSA9IChjb21wOiBzdHJpbmcsIGZyb206IHN0cmluZywgdG8/OiBzdHJpbmcpID0+IHtcbiAgd2FybkRlcHJlY2F0aW9uKGAke2NvbXB9ID0+ICcke2Zyb219JyBpcyBnb2luZyB0byBiZSByZW1vdmVkIGluIDExLjAuMCR7dG8gPyBgLCBQbGVhc2UgdXNlICcke3RvfScgaW5zdGVhZGAgOiBgYH0uYCk7XG59O1xuXG5leHBvcnQgY29uc3Qgd2FybkRlcHJlY2F0aW9uID0gKC4uLmFyZ3M6IE56U2FmZUFueVtdKSA9PiB7XG4gIGlmICghZW52aXJvbm1lbnQuaXNUZXN0TW9kZSkge1xuICAgIGNvbnN0IHN0YWNrID0gbmV3IEVycm9yKCkuc3RhY2s7XG4gICAgcmV0dXJuIGNvbnNvbGVDb21tb25CZWhhdmlvcigoLi4uYXJnOiBOelNhZmVBbnlbXSkgPT4gY29uc29sZS53YXJuKFBSRUZJWCwgJ2RlcHJlY2F0ZWQ6JywgLi4uYXJnLCBzdGFjayksIC4uLmFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoKSA9PiB7fTtcbiAgfVxufTtcblxuLy8gTG9nIHNob3VsZCBvbmx5IGJlIHByaW50ZWQgaW4gZGV2IG1vZGUuXG5leHBvcnQgY29uc3QgbG9nID0gKC4uLmFyZ3M6IE56U2FmZUFueVtdKSA9PiB7XG4gIGlmIChpc0Rldk1vZGUoKSkge1xuICAgIGNvbnNvbGUubG9nKFBSRUZJWCwgLi4uYXJncyk7XG4gIH1cbn07XG4iXX0=