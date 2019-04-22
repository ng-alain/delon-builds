/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, } from '@angular/core';
import { InputBoolean } from '@delon/util';
export class G2CardComponent {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
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
    /**
     * @param {?} value
     * @return {?}
     */
    set contentHeight(value) {
        this._orgHeight = value;
        this._height = typeof value === 'number' ? (this._height = `${value}px`) : value;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.cdr.detectChanges();
    }
}
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
G2CardComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vY2hhcnQvY2FyZC8iLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULEtBQUssR0FHTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBUzNDLE1BQU0sT0FBTyxlQUFlOzs7O0lBa0IxQixZQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjs7OztRQWhCakIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUlqQyxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLFlBQU8sR0FBRyxNQUFNLENBQUM7Ozs7UUFTUSxZQUFPLEdBQUcsS0FBSyxDQUFDO0lBRUksQ0FBQzs7Ozs7SUFUOUMsSUFDSSxhQUFhLENBQUMsS0FBc0I7UUFDdEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNuRixDQUFDOzs7O0lBT0QsV0FBVztRQUNULElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7O1lBN0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLHlyQ0FBb0M7Z0JBQ3BDLElBQUksRUFBRSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRTtnQkFDbkMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFkQyxpQkFBaUI7Ozt1QkFpQmhCLEtBQUs7cUJBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7b0JBQ0wsS0FBSzs0QkFHTCxLQUFLO3FCQUtMLEtBQUs7c0JBRUwsS0FBSzs7QUFkbUI7SUFBZixZQUFZLEVBQUU7O2lEQUFrQjtBQWNqQjtJQUFmLFlBQVksRUFBRTs7Z0RBQWlCOzs7Ozs7SUFkekMsbUNBQTBDOztJQUMxQyxpQ0FBNEM7O0lBQzVDLGdDQUEyQzs7SUFDM0MsaUNBQTRDOztJQUM1QyxnQ0FBb0I7O0lBQ3BCLGtDQUFpQjs7SUFDakIscUNBQTRCOztJQU01QixpQ0FBNEM7Ozs7O0lBRTVDLGtDQUF5Qzs7Ozs7SUFFN0IsOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItY2FyZCcsXG4gIGV4cG9ydEFzOiAnZzJDYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7ICdbY2xhc3MuZzItY2FyZF0nOiAndHJ1ZScgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEcyQ2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIC8qKiDmmK/lkKbmmL7npLrovrnmoYYgKi9cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJvcmRlcmVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGF2YXRhcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgYWN0aW9uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgdG90YWwgPSAnJztcbiAgX2hlaWdodCA9ICdhdXRvJztcbiAgX29yZ0hlaWdodDogbnVtYmVyIHwgc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgY29udGVudEhlaWdodCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKSB7XG4gICAgdGhpcy5fb3JnSGVpZ2h0ID0gdmFsdWU7XG4gICAgdGhpcy5faGVpZ2h0ID0gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyA/ICh0aGlzLl9oZWlnaHQgPSBgJHt2YWx1ZX1weGApIDogdmFsdWU7XG4gIH1cbiAgQElucHV0KCkgZm9vdGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgLyoqIOaYr+WQpuaYvuekukxvYWRpbmcgKi9cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxvYWRpbmcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG59XG4iXX0=