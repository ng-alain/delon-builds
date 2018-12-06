/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { InputBoolean } from '@delon/util';
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
                template: "<ng-content></ng-content>\n<span *ngIf=\"flag\" class=\"trend__{{flag}}\"><i nz-icon type=\"caret-{{flag}}\"></i></span>\n",
                host: {
                    '[class.trend]': 'true',
                    '[class.trend__grey]': '!colorful',
                    '[class.trend__reverse]': 'colorful && reverseColor',
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
TrendComponent.propDecorators = {
    flag: [{ type: Input }],
    colorful: [{ type: Input }],
    reverseColor: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], TrendComponent.prototype, "colorful", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], TrendComponent.prototype, "reverseColor", void 0);
if (false) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlbmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L3RyZW5kLyIsInNvdXJjZXMiOlsidHJlbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQVkzQyxNQUFNLE9BQU8sY0FBYztJQVYzQjs7OztRQWMyQixhQUFRLEdBQUcsSUFBSSxDQUFDOzs7O1FBRWhCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0lBQ2hELENBQUM7OztZQWpCQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLHNJQUFxQztnQkFDckMsSUFBSSxFQUFFO29CQUNKLGVBQWUsRUFBRSxNQUFNO29CQUN2QixxQkFBcUIsRUFBRSxXQUFXO29CQUNsQyx3QkFBd0IsRUFBRSwwQkFBMEI7aUJBQ3JEO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7bUJBR0UsS0FBSzt1QkFFTCxLQUFLOzJCQUVMLEtBQUs7O0FBRm1CO0lBQWYsWUFBWSxFQUFFOztnREFBaUI7QUFFaEI7SUFBZixZQUFZLEVBQUU7O29EQUFzQjs7Ozs7O0lBSjlDLDhCQUE2Qjs7Ozs7SUFFN0Isa0NBQXlDOzs7OztJQUV6QyxzQ0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cmVuZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90cmVuZC5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnRyZW5kXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLnRyZW5kX19ncmV5XSc6ICchY29sb3JmdWwnLFxuICAgICdbY2xhc3MudHJlbmRfX3JldmVyc2VdJzogJ2NvbG9yZnVsICYmIHJldmVyc2VDb2xvcicsXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUcmVuZENvbXBvbmVudCB7XG4gIC8qKiDkuIrljYfkuIvpmY3moIfor4YgKi9cbiAgQElucHV0KCkgZmxhZzogJ3VwJyB8ICdkb3duJztcbiAgLyoqIOaYr+WQpuW9qeiJsuagh+iusCAqL1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY29sb3JmdWwgPSB0cnVlO1xuICAvKiog6aKc6Imy5Y+N6L2sICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByZXZlcnNlQ29sb3IgPSBmYWxzZTtcbn1cbiJdfQ==