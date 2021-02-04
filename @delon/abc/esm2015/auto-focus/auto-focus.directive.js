/**
 * @fileoverview added by tsickle
 * Generated from: auto-focus.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectorRef, Directive, ElementRef, Input } from '@angular/core';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
export class AutoFocusDirective {
    /**
     * @param {?} el
     * @param {?} cdr
     */
    constructor(el, cdr) {
        this.el = el;
        this.cdr = cdr;
        this.enabled = true;
        this.delay = 300;
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
        }), this.delay);
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
    enabled: [{ type: Input }],
    delay: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], AutoFocusDirective.prototype, "enabled", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], AutoFocusDirective.prototype, "delay", void 0);
if (false) {
    /** @type {?} */
    AutoFocusDirective.ngAcceptInputType_enabled;
    /** @type {?} */
    AutoFocusDirective.ngAcceptInputType_delay;
    /** @type {?} */
    AutoFocusDirective.prototype.enabled;
    /** @type {?} */
    AutoFocusDirective.prototype.delay;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvYXV0by1mb2N1cy9hdXRvLWZvY3VzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQWlCLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9GLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxNQUFNLHVCQUF1QixDQUFDO0FBTTdGLE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBTzdCLFlBQW9CLEVBQTJCLEVBQVUsR0FBc0I7UUFBM0QsT0FBRSxHQUFGLEVBQUUsQ0FBeUI7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUh0RCxZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLFVBQUssR0FBRyxHQUFHLENBQUM7SUFFOEMsQ0FBQzs7OztJQUVuRixlQUFlOztjQUNQLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWE7UUFDaEMsSUFBSSxDQUFDLENBQUMsRUFBRSxZQUFZLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqRCxPQUFPO1NBQ1I7UUFDRCxVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDLEdBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pCLENBQUM7OztZQXRCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZFQUE2RTtnQkFDdkYsUUFBUSxFQUFFLFdBQVc7YUFDdEI7Ozs7WUFOcUQsVUFBVTtZQUF4QyxpQkFBaUI7OztzQkFXdEMsS0FBSztvQkFDTCxLQUFLOztBQURtQjtJQUFmLFlBQVksRUFBRTs7bURBQWdCO0FBQ2hCO0lBQWQsV0FBVyxFQUFFOztpREFBYTs7O0lBSnBDLDZDQUErQzs7SUFDL0MsMkNBQTRDOztJQUU1QyxxQ0FBd0M7O0lBQ3hDLG1DQUFvQzs7Ozs7SUFFeEIsZ0NBQW1DOzs7OztJQUFFLGlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIE51bWJlcklucHV0IH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2F1dG8tZm9jdXNdLCBpbnB1dFthdXRvZm9jdXM9XCJhdXRvZm9jdXNcIl0sIHRleHRhcmVhW2F1dG9mb2N1cz1cImF1dG9mb2N1c1wiXScsXG4gIGV4cG9ydEFzOiAnYXV0b0ZvY3VzJyxcbn0pXG5leHBvcnQgY2xhc3MgQXV0b0ZvY3VzRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9lbmFibGVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kZWxheTogTnVtYmVySW5wdXQ7XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGVuYWJsZWQgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBkZWxheSA9IDMwMDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBpZiAoIShlbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAhdGhpcy5lbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZWwuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiBmYWxzZSB9KTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0sIHRoaXMuZGVsYXkpO1xuICB9XG59XG4iXX0=