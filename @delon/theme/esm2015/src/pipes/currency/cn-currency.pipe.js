/**
 * @fileoverview added by tsickle
 * Generated from: src/pipes/currency/cn-currency.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CurrencyPipe } from '@angular/common';
import { Inject, LOCALE_ID, Pipe } from '@angular/core';
/**
 * @see https://ng-alain.com/theme/currency
 */
// tslint:disable-next-line:use-pipe-transform-interface
export class CNCurrencyPipe {
    /**
     * @param {?} locale
     */
    constructor(locale) {
        this.ngCurrencyPipe = new CurrencyPipe(locale);
    }
    /**
     * @param {?} value
     * @param {?=} currencyCode
     * @param {?=} display
     * @param {?=} digits
     * @return {?}
     */
    transform(value, currencyCode = '￥', display = 'code', digits) {
        return this.ngCurrencyPipe.transform(value, currencyCode, (/** @type {?} */ (display)), digits);
    }
}
CNCurrencyPipe.decorators = [
    { type: Pipe, args: [{ name: '_currency' },] }
];
/** @nocollapse */
CNCurrencyPipe.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CNCurrencyPipe.prototype.ngCurrencyPipe;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY24tY3VycmVuY3kucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92c3RzL3dvcmsvMS9zL3BhY2thZ2VzL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3BpcGVzL2N1cnJlbmN5L2NuLWN1cnJlbmN5LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQU94RCxNQUFNLE9BQU8sY0FBYzs7OztJQUd6QixZQUErQixNQUFjO1FBQ3pDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Ozs7Ozs7SUFFRCxTQUFTLENBQ1AsS0FBVSxFQUNWLGVBQXVCLEdBQUcsRUFDMUIsVUFBeUQsTUFBTSxFQUMvRCxNQUFlO1FBRWYsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLG1CQUFBLE9BQU8sRUFBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3BGLENBQUM7OztZQWZGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7Ozs7eUNBSVosTUFBTSxTQUFDLFNBQVM7Ozs7Ozs7SUFGN0Isd0NBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3VycmVuY3lQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgTE9DQUxFX0lELCBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHNlZSBodHRwczovL25nLWFsYWluLmNvbS90aGVtZS9jdXJyZW5jeVxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dXNlLXBpcGUtdHJhbnNmb3JtLWludGVyZmFjZVxuQFBpcGUoeyBuYW1lOiAnX2N1cnJlbmN5JyB9KVxuZXhwb3J0IGNsYXNzIENOQ3VycmVuY3lQaXBlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBuZ0N1cnJlbmN5UGlwZTogQ3VycmVuY3lQaXBlO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTE9DQUxFX0lEKSBsb2NhbGU6IHN0cmluZykge1xuICAgICAgdGhpcy5uZ0N1cnJlbmN5UGlwZSA9IG5ldyBDdXJyZW5jeVBpcGUobG9jYWxlKTtcbiAgfVxuXG4gIHRyYW5zZm9ybShcbiAgICB2YWx1ZTogYW55LFxuICAgIGN1cnJlbmN5Q29kZTogc3RyaW5nID0gJ++/pScsXG4gICAgZGlzcGxheTogJ2NvZGUnIHwgJ3N5bWJvbCcgfCAnc3ltYm9sLW5hcnJvdycgfCBib29sZWFuID0gJ2NvZGUnLFxuICAgIGRpZ2l0cz86IHN0cmluZyxcbiAgKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMubmdDdXJyZW5jeVBpcGUudHJhbnNmb3JtKHZhbHVlLCBjdXJyZW5jeUNvZGUsIGRpc3BsYXkgYXMgYW55LCBkaWdpdHMpO1xuICB9XG59XG4iXX0=