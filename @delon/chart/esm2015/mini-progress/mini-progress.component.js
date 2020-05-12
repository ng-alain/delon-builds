/**
 * @fileoverview added by tsickle
 * Generated from: mini-progress.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation, } from '@angular/core';
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
                template: "<div nz-tooltip [nzTooltipTitle]=\"i18n.getData('miniProgress').target + target + '%'\" class=\"g2-mini-progress__target\" [ngStyle]=\"{'left.%': target}\">\n  <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{'background-color': color}\"></span>\n  <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{'background-color': color}\"></span>\n</div>\n<div class=\"g2-mini-progress__wrap\">\n  <div class=\"g2-mini-progress__value\" [ngStyle]=\"{'background-color': color, 'width.%': percent, 'height.px':strokeWidth}\"></div>\n</div>\n",
                host: { '[class.g2-mini-progress]': 'true' },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1wcm9ncmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vY2hhcnQvbWluaS1wcm9ncmVzcy8iLCJzb3VyY2VzIjpbIm1pbmktcHJvZ3Jlc3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxLQUFLLEVBRUwsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNsRCxPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQVdwRCxNQUFNLE9BQU8sdUJBQXVCOzs7OztJQU1sQyxZQUFtQixJQUF3QixFQUFVLEdBQXNCO1FBQXhELFNBQUksR0FBSixJQUFJLENBQW9CO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFMbEUsVUFBSyxHQUFHLFNBQVMsQ0FBQztJQUttRCxDQUFDOzs7Ozs7SUFFdkUsTUFBTSxDQUFDLEtBQWE7UUFDMUIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7O1lBekJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixnakJBQTZDO2dCQUM3QyxJQUFJLEVBQUUsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLEVBQUU7Z0JBQzVDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7OztZQVhRLGtCQUFrQjtZQU56QixpQkFBaUI7OztvQkFtQmhCLEtBQUs7cUJBQ0wsS0FBSztzQkFDTCxLQUFLOzBCQUNMLEtBQUs7O0FBRmtCO0lBQWQsV0FBVyxFQUFFOzt1REFBZ0I7QUFDZjtJQUFkLFdBQVcsRUFBRTs7d0RBQWlCO0FBQ2hCO0lBQWQsV0FBVyxFQUFFOzs0REFBcUI7OztJQUg1Qyx3Q0FBMkI7O0lBQzNCLHlDQUF1Qzs7SUFDdkMsMENBQXdDOztJQUN4Qyw4Q0FBNEM7O0lBRWhDLHVDQUErQjs7Ozs7SUFBRSxzQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGVsb25Mb2NhbGVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IHRvTnVtYmVyLCBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItbWluaS1wcm9ncmVzcycsXG4gIGV4cG9ydEFzOiAnZzJNaW5pUHJvZ3Jlc3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWluaS1wcm9ncmVzcy5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHsgJ1tjbGFzcy5nMi1taW5pLXByb2dyZXNzXSc6ICd0cnVlJyB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEcyTWluaVByb2dyZXNzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgY29sb3IgPSAnIzE4OTBGRic7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHRhcmdldDogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBwZXJjZW50OiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHN0cm9rZVdpZHRoOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGkxOG46IERlbG9uTG9jYWxlU2VydmljZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIHByaXZhdGUgZml4TnVtKHZhbHVlOiBudW1iZXIpIHtcbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodG9OdW1iZXIodmFsdWUpLCAwKSwgMTAwKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5maXhOdW0odGhpcy50YXJnZXQpO1xuICAgIHRoaXMucGVyY2VudCA9IHRoaXMuZml4TnVtKHRoaXMucGVyY2VudCk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG59XG4iXX0=