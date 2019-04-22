/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, } from '@angular/core';
import { DelonLocaleService } from '@delon/theme';
import { toNumber, InputNumber } from '@delon/util';
export class G2MiniProgressComponent {
    /**
     * @param {?} i18n
     * @param {?} cdr
     */
    constructor(i18n, cdr) {
        this.i18n = i18n;
        this.cdr = cdr;
        this.color = '#1890FF';
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    fixNum(value) {
        return Math.min(Math.max(toNumber(value), 0), 100);
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.target = this.fixNum(this.target);
        this.percent = this.fixNum(this.percent);
        this.cdr.detectChanges();
    }
}
G2MiniProgressComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-mini-progress',
                exportAs: 'g2MiniProgress',
                template: "<nz-tooltip [nzTitle]=\"i18n.getData('miniProgress').target + target + '%'\">\n  <div nz-tooltip class=\"g2-mini-progress__target\" [ngStyle]=\"{'left.%': target}\">\n    <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{'background-color': color}\"></span>\n    <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{'background-color': color}\"></span>\n  </div>\n</nz-tooltip>\n<div class=\"g2-mini-progress__wrap\">\n  <div class=\"g2-mini-progress__value\" [ngStyle]=\"{'background-color': color, 'width.%': percent, 'height.px':strokeWidth}\"></div>\n</div>\n",
                host: { '[class.g2-mini-progress]': 'true' },
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
G2MiniProgressComponent.ctorParameters = () => [
    { type: DelonLocaleService },
    { type: ChangeDetectorRef }
];
G2MiniProgressComponent.propDecorators = {
    color: [{ type: Input }],
    target: [{ type: Input }],
    percent: [{ type: Input }],
    strokeWidth: [{ type: Input }]
};
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Number)
], G2MiniProgressComponent.prototype, "target", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Number)
], G2MiniProgressComponent.prototype, "percent", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Number)
], G2MiniProgressComponent.prototype, "strokeWidth", void 0);
if (false) {
    /** @type {?} */
    G2MiniProgressComponent.prototype.color;
    /** @type {?} */
    G2MiniProgressComponent.prototype.target;
    /** @type {?} */
    G2MiniProgressComponent.prototype.percent;
    /** @type {?} */
    G2MiniProgressComponent.prototype.strokeWidth;
    /** @type {?} */
    G2MiniProgressComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    G2MiniProgressComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1wcm9ncmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vY2hhcnQvbWluaS1wcm9ncmVzcy8iLCJzb3VyY2VzIjpbIm1pbmktcHJvZ3Jlc3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULEtBQUssR0FFTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFTcEQsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7SUFNbEMsWUFBbUIsSUFBd0IsRUFBVSxHQUFzQjtRQUF4RCxTQUFJLEdBQUosSUFBSSxDQUFvQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBTGxFLFVBQUssR0FBRyxTQUFTLENBQUM7SUFLbUQsQ0FBQzs7Ozs7O0lBRXZFLE1BQU0sQ0FBQyxLQUFhO1FBQzFCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7OztZQXZCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsOGtCQUE2QztnQkFDN0MsSUFBSSxFQUFFLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxFQUFFO2dCQUM1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQVRRLGtCQUFrQjtZQUx6QixpQkFBaUI7OztvQkFnQmhCLEtBQUs7cUJBQ0wsS0FBSztzQkFDTCxLQUFLOzBCQUNMLEtBQUs7O0FBRmtCO0lBQWQsV0FBVyxFQUFFOzt1REFBZ0I7QUFDZjtJQUFkLFdBQVcsRUFBRTs7d0RBQWlCO0FBQ2hCO0lBQWQsV0FBVyxFQUFFOzs0REFBcUI7OztJQUg1Qyx3Q0FBMkI7O0lBQzNCLHlDQUF1Qzs7SUFDdkMsMENBQXdDOztJQUN4Qyw4Q0FBNEM7O0lBRWhDLHVDQUErQjs7Ozs7SUFBRSxzQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEZWxvbkxvY2FsZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgdG9OdW1iZXIsIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi1taW5pLXByb2dyZXNzJyxcbiAgZXhwb3J0QXM6ICdnMk1pbmlQcm9ncmVzcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9taW5pLXByb2dyZXNzLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDogeyAnW2NsYXNzLmcyLW1pbmktcHJvZ3Jlc3NdJzogJ3RydWUnIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBHMk1pbmlQcm9ncmVzc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGNvbG9yID0gJyMxODkwRkYnO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB0YXJnZXQ6IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgcGVyY2VudDogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBzdHJva2VXaWR0aDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpMThuOiBEZWxvbkxvY2FsZVNlcnZpY2UsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBwcml2YXRlIGZpeE51bSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHRvTnVtYmVyKHZhbHVlKSwgMCksIDEwMCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnRhcmdldCA9IHRoaXMuZml4TnVtKHRoaXMudGFyZ2V0KTtcbiAgICB0aGlzLnBlcmNlbnQgPSB0aGlzLmZpeE51bSh0aGlzLnBlcmNlbnQpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxufVxuIl19