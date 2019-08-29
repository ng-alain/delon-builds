/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewEncapsulation, } from '@angular/core';
import { updateHostClass, InputNumber } from '@delon/util';
export class NumberInfoComponent {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        /**
         * 状态样式
         */
        this.theme = 'light';
        /**
         * 设置数字和描述直接的间距（像素）
         */
        this.gap = 8;
    }
    /**
     * @return {?}
     */
    setClass() {
        const { el, renderer, theme } = this;
        updateHostClass(el.nativeElement, renderer, {
            'number-info': true,
            [`number-info__${theme}`]: true,
        }, true);
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.setClass();
    }
}
NumberInfoComponent.decorators = [
    { type: Component, args: [{
                selector: 'number-info',
                exportAs: 'numberInfo',
                template: "<div *ngIf=\"title\" class=\"number-info__title\">\n  <ng-container *stringTemplateOutlet=\"title\">{{title}}</ng-container>\n</div>\n<div *ngIf=\"subTitle\" class=\"number-info__title-sub\">\n  <ng-container *stringTemplateOutlet=\"subTitle\">{{subTitle}}</ng-container>\n</div>\n<div class=\"number-info__value\" [ngStyle]=\"{'margin-top.px': gap}\">\n  <span class=\"number-info__value-text\">\n    <ng-container *stringTemplateOutlet=\"total\">{{total}}</ng-container>\n    <em class=\"number-info__value-suffix\" *ngIf=\"suffix\">{{suffix}}</em>\n  </span>\n  <span *ngIf=\"status || subTotal\" class=\"number-info__value-text number-info__value-sub\">\n    <ng-container *stringTemplateOutlet=\"subTotal\">{{subTotal}}</ng-container>\n    <i *ngIf=\"status\" nz-icon nzType=\"caret-{{status}}\"></i>\n  </span>\n</div>\n",
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
NumberInfoComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NumberInfoComponent.propDecorators = {
    title: [{ type: Input }],
    subTitle: [{ type: Input }],
    total: [{ type: Input }],
    subTotal: [{ type: Input }],
    suffix: [{ type: Input }],
    status: [{ type: Input }],
    theme: [{ type: Input }],
    gap: [{ type: Input }]
};
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], NumberInfoComponent.prototype, "gap", void 0);
if (false) {
    /**
     * 标题
     * @type {?}
     */
    NumberInfoComponent.prototype.title;
    /**
     * 子标题
     * @type {?}
     */
    NumberInfoComponent.prototype.subTitle;
    /**
     * 总量
     * @type {?}
     */
    NumberInfoComponent.prototype.total;
    /**
     * 总量后缀
     * @type {?}
     */
    NumberInfoComponent.prototype.subTotal;
    /**
     * 子总量
     * @type {?}
     */
    NumberInfoComponent.prototype.suffix;
    /**
     * 增加状态
     * @type {?}
     */
    NumberInfoComponent.prototype.status;
    /**
     * 状态样式
     * @type {?}
     */
    NumberInfoComponent.prototype.theme;
    /**
     * 设置数字和描述直接的间距（像素）
     * @type {?}
     */
    NumberInfoComponent.prototype.gap;
    /**
     * @type {?}
     * @private
     */
    NumberInfoComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NumberInfoComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWluZm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L251bWJlci1pbmZvLyIsInNvdXJjZXMiOlsibnVtYmVyLWluZm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFFTCxTQUFTLEVBRVQsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBVTNELE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBa0I5QixZQUFvQixFQUFjLEVBQVUsUUFBbUI7UUFBM0MsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7Ozs7UUFKdEQsVUFBSyxHQUF3QixPQUFPLENBQUM7Ozs7UUFFdEIsUUFBRyxHQUFHLENBQUMsQ0FBQztJQUVrQyxDQUFDOzs7O0lBRW5FLFFBQVE7Y0FDQSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSTtRQUNwQyxlQUFlLENBQ2IsRUFBRSxDQUFDLGFBQWEsRUFDaEIsUUFBUSxFQUNSO1lBQ0UsYUFBYSxFQUFFLElBQUk7WUFDbkIsQ0FBQyxnQkFBZ0IsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJO1NBQ2hDLEVBQ0QsSUFBSSxDQUNMLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7WUEzQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsczBCQUEyQztnQkFDM0MsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7O1lBaEJDLFVBQVU7WUFHVixTQUFTOzs7b0JBZ0JSLEtBQUs7dUJBRUwsS0FBSztvQkFFTCxLQUFLO3VCQUVMLEtBQUs7cUJBRUwsS0FBSztxQkFFTCxLQUFLO29CQUVMLEtBQUs7a0JBRUwsS0FBSzs7QUFBa0I7SUFBZCxXQUFXLEVBQUU7O2dEQUFTOzs7Ozs7SUFkaEMsb0NBQTJDOzs7OztJQUUzQyx1Q0FBOEM7Ozs7O0lBRTlDLG9DQUEyQzs7Ozs7SUFFM0MsdUNBQThDOzs7OztJQUU5QyxxQ0FBd0I7Ozs7O0lBRXhCLHFDQUErQjs7Ozs7SUFFL0Isb0NBQThDOzs7OztJQUU5QyxrQ0FBZ0M7Ozs7O0lBRXBCLGlDQUFzQjs7Ozs7SUFBRSx1Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB1cGRhdGVIb3N0Q2xhc3MsIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdudW1iZXItaW5mbycsXG4gIGV4cG9ydEFzOiAnbnVtYmVySW5mbycsXG4gIHRlbXBsYXRlVXJsOiAnLi9udW1iZXItaW5mby5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgTnVtYmVySW5mb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIC8qKiDmoIfpopggKi9cbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICAvKiog5a2Q5qCH6aKYICovXG4gIEBJbnB1dCgpIHN1YlRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgLyoqIOaAu+mHjyAqL1xuICBASW5wdXQoKSB0b3RhbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIC8qKiDmgLvph4/lkI7nvIAgKi9cbiAgQElucHV0KCkgc3ViVG90YWw6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICAvKiog5a2Q5oC76YePICovXG4gIEBJbnB1dCgpIHN1ZmZpeDogc3RyaW5nO1xuICAvKiog5aKe5Yqg54q25oCBICovXG4gIEBJbnB1dCgpIHN0YXR1czogJ3VwJyB8ICdkb3duJztcbiAgLyoqIOeKtuaAgeagt+W8jyAqL1xuICBASW5wdXQoKSB0aGVtZTogJ2xpZ2h0JyB8ICdkZWZhdWx0JyA9ICdsaWdodCc7XG4gIC8qKiDorr7nva7mlbDlrZflkozmj4/ov7Dnm7TmjqXnmoTpl7Tot53vvIjlg4/ntKDvvIkgKi9cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZ2FwID0gODtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgc2V0Q2xhc3MoKSB7XG4gICAgY29uc3QgeyBlbCwgcmVuZGVyZXIsIHRoZW1lIH0gPSB0aGlzO1xuICAgIHVwZGF0ZUhvc3RDbGFzcyhcbiAgICAgIGVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICByZW5kZXJlcixcbiAgICAgIHtcbiAgICAgICAgJ251bWJlci1pbmZvJzogdHJ1ZSxcbiAgICAgICAgW2BudW1iZXItaW5mb19fJHt0aGVtZX1gXTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB0cnVlLFxuICAgICk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzKCk7XG4gIH1cbn1cbiJdfQ==