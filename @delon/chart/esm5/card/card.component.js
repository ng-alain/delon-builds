/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { InputBoolean } from '@delon/util';
var G2CardComponent = /** @class */ (function () {
    function G2CardComponent(cdr) {
        this.cdr = cdr;
        /**
         * 是否显示边框
         */
        this.bordered = false;
        this.total = '';
        this._height = 'auto';
        /**
         * 是否显示Loading
         */
        this.loading = false;
    }
    Object.defineProperty(G2CardComponent.prototype, "contentHeight", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._orgHeight = value;
            this._height = typeof value === 'number' ? (this._height = value + "px") : value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    G2CardComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.cdr.detectChanges();
    };
    G2CardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-card',
                    exportAs: 'g2Card',
                    template: "<nz-card [nzBodyStyle]=\"{padding: '20px 24px 8px 24px'}\" [nzBordered]=\"bordered\">\n  <nz-spin [nzSpinning]=\"loading\">\n    <div class=\"g2-card__top\">\n      <div class=\"g2-card__avatar\">\n        <ng-container *stringTemplateOutlet=\"avatar\">{{avatar}}</ng-container>\n      </div>\n      <div class=\"g2-card__meta-wrap\">\n        <div class=\"g2-card__meta\">\n          <span class=\"g2-card__meta-title\" *ngIf=\"title\">\n            <ng-container *stringTemplateOutlet=\"title\">{{title}}</ng-container>\n          </span>\n          <span class=\"g2-card__meta-action\" *ngIf=\"action\">\n            <ng-container *stringTemplateOutlet=\"action\">{{action}}</ng-container>\n          </span>\n        </div>\n        <p *ngIf=\"total\" class=\"g2-card__total\" [innerHTML]=\"total\"></p>\n      </div>\n    </div>\n    <div class=\"g2-card__desc\" [ngStyle]=\"{'height':_height}\">\n      <div [ngClass]=\"{'g2-card__fixed': !!_orgHeight }\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n    <div class=\"g2-card__footer\" *ngIf=\"footer\">\n      <ng-container *stringTemplateOutlet=\"footer\">{{footer}}</ng-container>\n    </div>\n  </nz-spin>\n</nz-card>\n",
                    host: { '[class.g2-card]': 'true' },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    G2CardComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    G2CardComponent.propDecorators = {
        bordered: [{ type: Input }],
        avatar: [{ type: Input }],
        title: [{ type: Input }],
        action: [{ type: Input }],
        total: [{ type: Input }],
        contentHeight: [{ type: Input }],
        footer: [{ type: Input }],
        loading: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], G2CardComponent.prototype, "bordered", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], G2CardComponent.prototype, "loading", void 0);
    return G2CardComponent;
}());
export { G2CardComponent };
if (false) {
    /**
     * 是否显示边框
     * @type {?}
     */
    G2CardComponent.prototype.bordered;
    /** @type {?} */
    G2CardComponent.prototype.avatar;
    /** @type {?} */
    G2CardComponent.prototype.title;
    /** @type {?} */
    G2CardComponent.prototype.action;
    /** @type {?} */
    G2CardComponent.prototype.total;
    /** @type {?} */
    G2CardComponent.prototype._height;
    /** @type {?} */
    G2CardComponent.prototype._orgHeight;
    /** @type {?} */
    G2CardComponent.prototype.footer;
    /**
     * 是否显示Loading
     * @type {?}
     */
    G2CardComponent.prototype.loading;
    /**
     * @type {?}
     * @private
     */
    G2CardComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vY2hhcnQvY2FyZC8iLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTBCLE1BQU0sZUFBZSxDQUFDO0FBQ3JILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFM0M7SUF5QkUseUJBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1COzs7O1FBaEJqQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBSWpDLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDcEIsWUFBTyxHQUFHLE1BQU0sQ0FBQzs7OztRQVNRLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFFSSxDQUFDO0lBVDlDLHNCQUNJLDBDQUFhOzs7OztRQURqQixVQUNrQixLQUFzQjtZQUN0QyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFNLEtBQUssT0FBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNuRixDQUFDOzs7T0FBQTs7OztJQU9ELHFDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Z0JBN0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLHlyQ0FBb0M7b0JBQ3BDLElBQUksRUFBRSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRTtvQkFDbkMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQVRpQyxpQkFBaUI7OzsyQkFZaEQsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLO2dDQUdMLEtBQUs7eUJBS0wsS0FBSzswQkFFTCxLQUFLOztJQWRtQjtRQUFmLFlBQVksRUFBRTs7cURBQWtCO0lBY2pCO1FBQWYsWUFBWSxFQUFFOztvREFBaUI7SUFPM0Msc0JBQUM7Q0FBQSxBQTlCRCxJQThCQztTQXZCWSxlQUFlOzs7Ozs7SUFFMUIsbUNBQTBDOztJQUMxQyxpQ0FBNEM7O0lBQzVDLGdDQUEyQzs7SUFDM0MsaUNBQTRDOztJQUM1QyxnQ0FBb0I7O0lBQ3BCLGtDQUFpQjs7SUFDakIscUNBQTRCOztJQU01QixpQ0FBNEM7Ozs7O0lBRTVDLGtDQUF5Qzs7Ozs7SUFFN0IsOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLWNhcmQnLFxuICBleHBvcnRBczogJ2cyQ2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDogeyAnW2NsYXNzLmcyLWNhcmRdJzogJ3RydWUnIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBHMkNhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAvKiog5piv5ZCm5pi+56S66L655qGGICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBib3JkZXJlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBhdmF0YXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGFjdGlvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIHRvdGFsID0gJyc7XG4gIF9oZWlnaHQgPSAnYXV0byc7XG4gIF9vcmdIZWlnaHQ6IG51bWJlciB8IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IGNvbnRlbnRIZWlnaHQodmFsdWU6IG51bWJlciB8IHN0cmluZykge1xuICAgIHRoaXMuX29yZ0hlaWdodCA9IHZhbHVlO1xuICAgIHRoaXMuX2hlaWdodCA9IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgPyAodGhpcy5faGVpZ2h0ID0gYCR7dmFsdWV9cHhgKSA6IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpIGZvb3Rlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIC8qKiDmmK/lkKbmmL7npLpMb2FkaW5nICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsb2FkaW5nID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxufVxuIl19