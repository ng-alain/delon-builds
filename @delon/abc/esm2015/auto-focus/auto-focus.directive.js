/**
 * @fileoverview added by tsickle
 * Generated from: auto-focus.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectorRef, Directive, ElementRef, Input } from '@angular/core';
import { InputBoolean } from '@delon/util/decorator';
export class AutoFocusDirective {
    /**
     * @param {?} el
     * @param {?} cdr
     */
    constructor(el, cdr) {
        this.el = el;
        this.cdr = cdr;
        this.enabled = true;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const el = this.el.nativeElement;
        if (!(el instanceof HTMLElement) || !this.enabled) {
            return;
        }
        setTimeout((/**
         * @return {?}
         */
        () => {
            el.focus({ preventScroll: false });
            this.cdr.markForCheck();
        }), 50);
    }
}
AutoFocusDirective.decorators = [
    { type: Directive, args: [{
                selector: '[auto-focus], input[autofocus="autofocus"], textarea[autofocus="autofocus"]',
                exportAs: 'autoFocus',
            },] }
];
/** @nocollapse */
AutoFocusDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
AutoFocusDirective.propDecorators = {
    enabled: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], AutoFocusDirective.prototype, "enabled", void 0);
if (false) {
    /** @type {?} */
    AutoFocusDirective.ngAcceptInputType_enabled;
    /** @type {?} */
    AutoFocusDirective.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    AutoFocusDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    AutoFocusDirective.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvYXV0by1mb2N1cy9hdXRvLWZvY3VzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQWlCLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9GLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFNbkUsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7SUFLN0IsWUFBb0IsRUFBMkIsRUFBVSxHQUFzQjtRQUEzRCxPQUFFLEdBQUYsRUFBRSxDQUF5QjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBRnRELFlBQU8sR0FBRyxJQUFJLENBQUM7SUFFMEMsQ0FBQzs7OztJQUVuRixlQUFlOztjQUNQLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWE7UUFDaEMsSUFBSSxDQUFDLENBQUMsRUFBRSxZQUFZLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqRCxPQUFPO1NBQ1I7UUFDRCxVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDOzs7WUFwQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw2RUFBNkU7Z0JBQ3ZGLFFBQVEsRUFBRSxXQUFXO2FBQ3RCOzs7O1lBTnFELFVBQVU7WUFBeEMsaUJBQWlCOzs7c0JBVXRDLEtBQUs7O0FBQW1CO0lBQWYsWUFBWSxFQUFFOzttREFBZ0I7OztJQUZ4Qyw2Q0FBK0M7O0lBRS9DLHFDQUF3Qzs7Ozs7SUFFNUIsZ0NBQW1DOzs7OztJQUFFLGlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thdXRvLWZvY3VzXSwgaW5wdXRbYXV0b2ZvY3VzPVwiYXV0b2ZvY3VzXCJdLCB0ZXh0YXJlYVthdXRvZm9jdXM9XCJhdXRvZm9jdXNcIl0nLFxuICBleHBvcnRBczogJ2F1dG9Gb2N1cycsXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9Gb2N1c0RpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZW5hYmxlZDogQm9vbGVhbklucHV0O1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBlbmFibGVkID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBpZiAoIShlbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAhdGhpcy5lbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZWwuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiBmYWxzZSB9KTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0sIDUwKTtcbiAgfVxufVxuIl19