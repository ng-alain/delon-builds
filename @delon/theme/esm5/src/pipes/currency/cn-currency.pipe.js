/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
/**
 * @see https://ng-alain.com/docs/service-pipe#%E8%B4%A7%E5%B8%81-_currenty
 */
// tslint:disable-next-line:use-pipe-transform-interface
var CNCurrencyPipe = /** @class */ (function (_super) {
    tslib_1.__extends(CNCurrencyPipe, _super);
    function CNCurrencyPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} value
     * @param {?=} currencyCode
     * @param {?=} display
     * @param {?=} digits
     * @return {?}
     */
    CNCurrencyPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} currencyCode
     * @param {?=} display
     * @param {?=} digits
     * @return {?}
     */
    function (value, currencyCode, display, digits) {
        if (currencyCode === void 0) { currencyCode = '￥'; }
        if (display === void 0) { display = 'code'; }
        return _super.prototype.transform.call(this, value, currencyCode, (/** @type {?} */ (display)), digits);
    };
    CNCurrencyPipe.decorators = [
        { type: Pipe, args: [{ name: '_currency' },] }
    ];
    return CNCurrencyPipe;
}(CurrencyPipe));
export { CNCurrencyPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY24tY3VycmVuY3kucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9waXBlcy9jdXJyZW5jeS9jbi1jdXJyZW5jeS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7O0FBTS9DO0lBQ29DLDBDQUFZO0lBRGhEOztJQVVBLENBQUM7Ozs7Ozs7O0lBUkMsa0NBQVM7Ozs7Ozs7SUFBVCxVQUNFLEtBQVUsRUFDVixZQUEwQixFQUMxQixPQUErRCxFQUMvRCxNQUFlO1FBRmYsNkJBQUEsRUFBQSxrQkFBMEI7UUFDMUIsd0JBQUEsRUFBQSxnQkFBK0Q7UUFHL0QsT0FBTyxpQkFBTSxTQUFTLFlBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxtQkFBSyxPQUFPLEVBQUEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNwRSxDQUFDOztnQkFURixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFOztJQVUzQixxQkFBQztDQUFBLEFBVkQsQ0FDb0MsWUFBWSxHQVMvQztTQVRZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDdXJyZW5jeVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG4vKipcbiAqIEBzZWUgaHR0cHM6Ly9uZy1hbGFpbi5jb20vZG9jcy9zZXJ2aWNlLXBpcGUjJUU4JUI0JUE3JUU1JUI4JTgxLV9jdXJyZW50eVxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dXNlLXBpcGUtdHJhbnNmb3JtLWludGVyZmFjZVxuQFBpcGUoeyBuYW1lOiAnX2N1cnJlbmN5JyB9KVxuZXhwb3J0IGNsYXNzIENOQ3VycmVuY3lQaXBlIGV4dGVuZHMgQ3VycmVuY3lQaXBlIHtcbiAgdHJhbnNmb3JtKFxuICAgIHZhbHVlOiBhbnksXG4gICAgY3VycmVuY3lDb2RlOiBzdHJpbmcgPSAn77+lJyxcbiAgICBkaXNwbGF5OiAnY29kZScgfCAnc3ltYm9sJyB8ICdzeW1ib2wtbmFycm93JyB8IGJvb2xlYW4gPSAnY29kZScsXG4gICAgZGlnaXRzPzogc3RyaW5nLFxuICApOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gc3VwZXIudHJhbnNmb3JtKHZhbHVlLCBjdXJyZW5jeUNvZGUsIDxhbnk+ZGlzcGxheSwgZGlnaXRzKTtcbiAgfVxufVxuIl19