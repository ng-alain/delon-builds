/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { DelonLocaleService } from '@delon/theme';
import { toNumber, InputNumber } from '@delon/util';
var G2MiniProgressComponent = /** @class */ (function () {
    function G2MiniProgressComponent(i18n, cdr) {
        this.i18n = i18n;
        this.cdr = cdr;
        this.color = '#1890FF';
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    G2MiniProgressComponent.prototype.fixNum = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return Math.min(Math.max(toNumber(value), 0), 100);
    };
    /**
     * @return {?}
     */
    G2MiniProgressComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.target = this.fixNum(this.target);
        this.percent = this.fixNum(this.percent);
        this.cdr.detectChanges();
    };
    G2MiniProgressComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-mini-progress',
                    template: "<nz-tooltip [nzTitle]=\"i18n.getData('miniProgress').target + target + '%'\">\n  <div nz-tooltip class=\"g2-mini-progress__target\" [ngStyle]=\"{'left.%': target}\">\n    <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{'background-color': color}\"></span>\n    <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{'background-color': color}\"></span>\n  </div>\n</nz-tooltip>\n<div class=\"g2-mini-progress__wrap\">\n  <div class=\"g2-mini-progress__value\" [ngStyle]=\"{'background-color': color, 'width.%': percent, 'height.px':strokeWidth}\"></div>\n</div>\n",
                    host: { '[class.g2-mini-progress]': 'true' },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    G2MiniProgressComponent.ctorParameters = function () { return [
        { type: DelonLocaleService },
        { type: ChangeDetectorRef }
    ]; };
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
    return G2MiniProgressComponent;
}());
export { G2MiniProgressComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1wcm9ncmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vY2hhcnQvbWluaS1wcm9ncmVzcy8iLCJzb3VyY2VzIjpbIm1pbmktcHJvZ3Jlc3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2xELE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXBEO0lBWUUsaUNBQW1CLElBQXdCLEVBQVUsR0FBc0I7UUFBeEQsU0FBSSxHQUFKLElBQUksQ0FBb0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUxsRSxVQUFLLEdBQUcsU0FBUyxDQUFDO0lBS21ELENBQUM7Ozs7OztJQUV2RSx3Q0FBTTs7Ozs7SUFBZCxVQUFlLEtBQWE7UUFDMUIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7SUFFRCw2Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDOztnQkF0QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLDhrQkFBNkM7b0JBQzdDLElBQUksRUFBRSxFQUFFLDBCQUEwQixFQUFFLE1BQU0sRUFBRTtvQkFDNUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQVJRLGtCQUFrQjtnQkFETyxpQkFBaUI7Ozt3QkFXaEQsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7OEJBQ0wsS0FBSzs7SUFGa0I7UUFBZCxXQUFXLEVBQUU7OzJEQUFnQjtJQUNmO1FBQWQsV0FBVyxFQUFFOzs0REFBaUI7SUFDaEI7UUFBZCxXQUFXLEVBQUU7O2dFQUFxQjtJQWE5Qyw4QkFBQztDQUFBLEFBdkJELElBdUJDO1NBakJZLHVCQUF1Qjs7O0lBQ2xDLHdDQUEyQjs7SUFDM0IseUNBQXVDOztJQUN2QywwQ0FBd0M7O0lBQ3hDLDhDQUE0Qzs7SUFFaEMsdUNBQStCOzs7OztJQUFFLHNDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEZWxvbkxvY2FsZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgdG9OdW1iZXIsIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi1taW5pLXByb2dyZXNzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21pbmktcHJvZ3Jlc3MuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7ICdbY2xhc3MuZzItbWluaS1wcm9ncmVzc10nOiAndHJ1ZScgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEcyTWluaVByb2dyZXNzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgY29sb3IgPSAnIzE4OTBGRic7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHRhcmdldDogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBwZXJjZW50OiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHN0cm9rZVdpZHRoOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGkxOG46IERlbG9uTG9jYWxlU2VydmljZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIHByaXZhdGUgZml4TnVtKHZhbHVlOiBudW1iZXIpIHtcbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodG9OdW1iZXIodmFsdWUpLCAwKSwgMTAwKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5maXhOdW0odGhpcy50YXJnZXQpO1xuICAgIHRoaXMucGVyY2VudCA9IHRoaXMuZml4TnVtKHRoaXMucGVyY2VudCk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG59XG4iXX0=