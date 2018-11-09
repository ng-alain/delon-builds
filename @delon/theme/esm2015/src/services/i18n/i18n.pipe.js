/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe, Inject } from '@angular/core';
import { ALAIN_I18N_TOKEN } from './i18n';
export class I18nPipe {
    /**
     * @param {?} i18n
     */
    constructor(i18n) {
        this.i18n = i18n;
    }
    /**
     * @param {?} key
     * @param {?=} interpolateParams
     * @param {?=} isSafe
     * @return {?}
     */
    transform(key, interpolateParams, isSafe) {
        return this.i18n.fanyi(key, interpolateParams, isSafe);
    }
}
I18nPipe.decorators = [
    { type: Pipe, args: [{ name: 'i18n' },] }
];
/** @nocollapse */
I18nPipe.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [ALAIN_I18N_TOKEN,] }] }
];
if (false) {
    /** @type {?} */
    I18nPipe.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3NlcnZpY2VzL2kxOG4vaTE4bi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFvQixNQUFNLFFBQVEsQ0FBQztBQUc1RCxNQUFNOzs7O0lBQ0osWUFBOEMsSUFBc0I7UUFBdEIsU0FBSSxHQUFKLElBQUksQ0FBa0I7S0FBSTs7Ozs7OztJQUV4RSxTQUFTLENBQUMsR0FBVyxFQUFFLGlCQUEwQixFQUFFLE1BQWdCO1FBQ2pFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQ3hEOzs7WUFORixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFOzs7OzRDQUVQLE1BQU0sU0FBQyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFMQUlOX0kxOE5fVE9LRU4sIEFsYWluSTE4TlNlcnZpY2UgfSBmcm9tICcuL2kxOG4nO1xuXG5AUGlwZSh7IG5hbWU6ICdpMThuJyB9KVxuZXhwb3J0IGNsYXNzIEkxOG5QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTikgcHJpdmF0ZSBpMThuOiBBbGFpbkkxOE5TZXJ2aWNlKSB7fVxuXG4gIHRyYW5zZm9ybShrZXk6IHN0cmluZywgaW50ZXJwb2xhdGVQYXJhbXM/OiBPYmplY3QsIGlzU2FmZT86IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmkxOG4uZmFueWkoa2V5LCBpbnRlcnBvbGF0ZVBhcmFtcywgaXNTYWZlKTtcbiAgfVxufVxuIl19