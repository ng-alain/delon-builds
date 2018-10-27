/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe, Inject } from '@angular/core';
import { ALAIN_I18N_TOKEN } from './i18n';
var I18nPipe = /** @class */ (function () {
    function I18nPipe(i18n) {
        this.i18n = i18n;
    }
    /**
     * @param {?} key
     * @param {?=} interpolateParams
     * @param {?=} isSafe
     * @return {?}
     */
    I18nPipe.prototype.transform = /**
     * @param {?} key
     * @param {?=} interpolateParams
     * @param {?=} isSafe
     * @return {?}
     */
    function (key, interpolateParams, isSafe) {
        return this.i18n.fanyi(key, interpolateParams, isSafe);
    };
    I18nPipe.decorators = [
        { type: Pipe, args: [{ name: 'i18n' },] }
    ];
    /** @nocollapse */
    I18nPipe.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [ALAIN_I18N_TOKEN,] }] }
    ]; };
    return I18nPipe;
}());
export { I18nPipe };
if (false) {
    /** @type {?} */
    I18nPipe.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3NlcnZpY2VzL2kxOG4vaTE4bi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFvQixNQUFNLFFBQVEsQ0FBQzs7SUFJMUQsa0JBQThDLElBQXNCO1FBQXRCLFNBQUksR0FBSixJQUFJLENBQWtCO0tBQUk7Ozs7Ozs7SUFFeEUsNEJBQVM7Ozs7OztJQUFULFVBQVUsR0FBVyxFQUFFLGlCQUEwQixFQUFFLE1BQWdCO1FBQ2pFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQ3hEOztnQkFORixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFOzs7O2dEQUVQLE1BQU0sU0FBQyxnQkFBZ0I7O21CQUx0Qzs7U0FJYSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBTEFJTl9JMThOX1RPS0VOLCBBbGFpbkkxOE5TZXJ2aWNlIH0gZnJvbSAnLi9pMThuJztcblxuQFBpcGUoeyBuYW1lOiAnaTE4bicgfSlcbmV4cG9ydCBjbGFzcyBJMThuUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pIHByaXZhdGUgaTE4bjogQWxhaW5JMThOU2VydmljZSkge31cblxuICB0cmFuc2Zvcm0oa2V5OiBzdHJpbmcsIGludGVycG9sYXRlUGFyYW1zPzogT2JqZWN0LCBpc1NhZmU/OiBib29sZWFuKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pMThuLmZhbnlpKGtleSwgaW50ZXJwb2xhdGVQYXJhbXMsIGlzU2FmZSk7XG4gIH1cbn1cbiJdfQ==