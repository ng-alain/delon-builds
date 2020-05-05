/**
 * @fileoverview added by tsickle
 * Generated from: card.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
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
                    template: "<nz-card [nzBodyStyle]=\"{ padding: '20px 24px 8px 24px' }\" [nzBordered]=\"bordered\">\n  <nz-spin [nzSpinning]=\"loading\">\n    <div class=\"g2-card__top\">\n      <div class=\"g2-card__avatar\">\n        <ng-container *nzStringTemplateOutlet=\"avatar\">{{ avatar }}</ng-container>\n      </div>\n      <div class=\"g2-card__meta-wrap\">\n        <div class=\"g2-card__meta\">\n          <span class=\"g2-card__meta-title\" *ngIf=\"title\">\n            <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n          </span>\n          <span class=\"g2-card__meta-action\" *ngIf=\"action\">\n            <ng-container *nzStringTemplateOutlet=\"action\">{{ action }}</ng-container>\n          </span>\n        </div>\n        <p *ngIf=\"total\" class=\"g2-card__total\">{{ total }}</p>\n      </div>\n    </div>\n    <div class=\"g2-card__desc\" [ngStyle]=\"{ height: _height }\">\n      <div [ngClass]=\"{ 'g2-card__fixed': !!_orgHeight }\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n    <div class=\"g2-card__footer\" *ngIf=\"footer\">\n      <ng-container *nzStringTemplateOutlet=\"footer\">{{ footer }}</ng-container>\n    </div>\n  </nz-spin>\n</nz-card>\n",
                    host: { '[class.g2-card]': 'true' },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
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
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], G2CardComponent.prototype, "bordered", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vY2hhcnQvY2FyZC8iLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUEwQixpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4SSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTNDO0lBMkJFLHlCQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjs7OztRQWhCakIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUlqQyxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLFlBQU8sR0FBRyxNQUFNLENBQUM7Ozs7UUFTUSxZQUFPLEdBQUcsS0FBSyxDQUFDO0lBRUksQ0FBQztJQVQ5QyxzQkFDSSwwQ0FBYTs7Ozs7UUFEakIsVUFDa0IsS0FBc0I7WUFDdEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBTSxLQUFLLE9BQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDbkYsQ0FBQzs7O09BQUE7Ozs7SUFPRCxxQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7O2dCQS9CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRSxRQUFRO29CQUNsQixrc0NBQW9DO29CQUNwQyxJQUFJLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUU7b0JBQ25DLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7Ozs7Z0JBWGlDLGlCQUFpQjs7OzJCQWNoRCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7Z0NBR0wsS0FBSzt5QkFLTCxLQUFLOzBCQUVMLEtBQUs7O0lBZG1CO1FBQWYsWUFBWSxFQUFFOztxREFBa0I7SUFjakI7UUFBZixZQUFZLEVBQUU7O29EQUFpQjtJQU8zQyxzQkFBQztDQUFBLEFBaENELElBZ0NDO1NBdkJZLGVBQWU7Ozs7OztJQUUxQixtQ0FBMEM7O0lBQzFDLGlDQUE0Qzs7SUFDNUMsZ0NBQTJDOztJQUMzQyxpQ0FBNEM7O0lBQzVDLGdDQUFvQjs7SUFDcEIsa0NBQWlCOztJQUNqQixxQ0FBNEI7O0lBTTVCLGlDQUE0Qzs7Ozs7SUFFNUMsa0NBQXlDOzs7OztJQUU3Qiw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLWNhcmQnLFxuICBleHBvcnRBczogJ2cyQ2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDogeyAnW2NsYXNzLmcyLWNhcmRdJzogJ3RydWUnIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRzJDYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgLyoqIOaYr+WQpuaYvuekuui+ueahhiAqL1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYm9yZGVyZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgYXZhdGFyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBhY3Rpb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSB0b3RhbCA9ICcnO1xuICBfaGVpZ2h0ID0gJ2F1dG8nO1xuICBfb3JnSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCBjb250ZW50SGVpZ2h0KHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpIHtcbiAgICB0aGlzLl9vcmdIZWlnaHQgPSB2YWx1ZTtcbiAgICB0aGlzLl9oZWlnaHQgPSB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInID8gKHRoaXMuX2hlaWdodCA9IGAke3ZhbHVlfXB4YCkgOiB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKSBmb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICAvKiog5piv5ZCm5pi+56S6TG9hZGluZyAqL1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbG9hZGluZyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cbn1cbiJdfQ==