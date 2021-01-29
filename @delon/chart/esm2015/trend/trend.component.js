/**
 * @fileoverview added by tsickle
 * Generated from: trend.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from '@delon/util/other';
export class TrendComponent {
    constructor() {
        /**
         * 是否彩色标记
         */
        this.colorful = true;
        /**
         * 颜色反转
         */
        this.reverseColor = false;
    }
}
TrendComponent.decorators = [
    { type: Component, args: [{
                selector: 'trend',
                exportAs: 'trend',
                template: "<ng-content></ng-content>\n<span *ngIf=\"flag\" class=\"trend__{{ flag }}\"><i nz-icon nzType=\"caret-{{ flag }}\"></i></span>\n",
                host: {
                    '[class.trend]': 'true',
                    '[class.trend__grey]': '!colorful',
                    '[class.trend__reverse]': 'colorful && reverseColor',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
TrendComponent.propDecorators = {
    flag: [{ type: Input }],
    colorful: [{ type: Input }],
    reverseColor: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], TrendComponent.prototype, "colorful", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], TrendComponent.prototype, "reverseColor", void 0);
if (false) {
    /** @type {?} */
    TrendComponent.ngAcceptInputType_colorful;
    /** @type {?} */
    TrendComponent.ngAcceptInputType_reverseColor;
    /**
     * 上升下降标识
     * @type {?}
     */
    TrendComponent.prototype.flag;
    /**
     * 是否彩色标记
     * @type {?}
     */
    TrendComponent.prototype.colorful;
    /**
     * 颜色反转
     * @type {?}
     */
    TrendComponent.prototype.reverseColor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlbmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvdHJlbmQvdHJlbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFlL0QsTUFBTSxPQUFPLGNBQWM7SUFiM0I7Ozs7UUFvQjJCLGFBQVEsR0FBRyxJQUFJLENBQUM7Ozs7UUFFaEIsaUJBQVksR0FBRyxLQUFLLENBQUM7SUFDaEQsQ0FBQzs7O1lBdkJBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsT0FBTztnQkFDakIsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLDRJQUFxQztnQkFDckMsSUFBSSxFQUFFO29CQUNKLGVBQWUsRUFBRSxNQUFNO29CQUN2QixxQkFBcUIsRUFBRSxXQUFXO29CQUNsQyx3QkFBd0IsRUFBRSwwQkFBMEI7aUJBQ3JEO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7O21CQU1FLEtBQUs7dUJBRUwsS0FBSzsyQkFFTCxLQUFLOztBQUZtQjtJQUFmLFlBQVksRUFBRTs7Z0RBQWlCO0FBRWhCO0lBQWYsWUFBWSxFQUFFOztvREFBc0I7OztJQVI5QywwQ0FBZ0Q7O0lBQ2hELDhDQUFvRDs7Ozs7SUFHcEQsOEJBQTZCOzs7OztJQUU3QixrQ0FBeUM7Ozs7O0lBRXpDLHNDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbC9vdGhlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RyZW5kJyxcbiAgZXhwb3J0QXM6ICd0cmVuZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90cmVuZC5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnRyZW5kXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLnRyZW5kX19ncmV5XSc6ICchY29sb3JmdWwnLFxuICAgICdbY2xhc3MudHJlbmRfX3JldmVyc2VdJzogJ2NvbG9yZnVsICYmIHJldmVyc2VDb2xvcicsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgVHJlbmRDb21wb25lbnQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfY29sb3JmdWw6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3JldmVyc2VDb2xvcjogQm9vbGVhbklucHV0O1xuXG4gIC8qKiDkuIrljYfkuIvpmY3moIfor4YgKi9cbiAgQElucHV0KCkgZmxhZzogJ3VwJyB8ICdkb3duJztcbiAgLyoqIOaYr+WQpuW9qeiJsuagh+iusCAqL1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY29sb3JmdWwgPSB0cnVlO1xuICAvKiog6aKc6Imy5Y+N6L2sICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByZXZlcnNlQ29sb3IgPSBmYWxzZTtcbn1cbiJdfQ==