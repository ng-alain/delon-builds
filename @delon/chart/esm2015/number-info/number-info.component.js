/**
 * @fileoverview added by tsickle
 * Generated from: number-info.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { InputNumber, updateHostClass } from '@delon/util';
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
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWluZm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L251bWJlci1pbmZvLyIsInNvdXJjZXMiOlsibnVtYmVyLWluZm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBYSxTQUFTLEVBQWUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUksT0FBTyxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFVM0QsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFrQjlCLFlBQW9CLEVBQWMsRUFBVSxRQUFtQjtRQUEzQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVzs7OztRQUp0RCxVQUFLLEdBQXdCLE9BQU8sQ0FBQzs7OztRQUV0QixRQUFHLEdBQUcsQ0FBQyxDQUFDO0lBRWtDLENBQUM7Ozs7SUFFbkUsUUFBUTtjQUNBLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJO1FBQ3BDLGVBQWUsQ0FDYixFQUFFLENBQUMsYUFBYSxFQUNoQixRQUFRLEVBQ1I7WUFDRSxhQUFhLEVBQUUsSUFBSTtZQUNuQixDQUFDLGdCQUFnQixLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUk7U0FDaEMsRUFDRCxJQUFJLENBQ0wsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7OztZQTNDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixzMEJBQTJDO2dCQUMzQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7WUFWNEMsVUFBVTtZQUFvQixTQUFTOzs7b0JBYWpGLEtBQUs7dUJBRUwsS0FBSztvQkFFTCxLQUFLO3VCQUVMLEtBQUs7cUJBRUwsS0FBSztxQkFFTCxLQUFLO29CQUVMLEtBQUs7a0JBRUwsS0FBSzs7QUFBa0I7SUFBZCxXQUFXLEVBQUU7O2dEQUFTOzs7Ozs7SUFkaEMsb0NBQTJDOzs7OztJQUUzQyx1Q0FBOEM7Ozs7O0lBRTlDLG9DQUEyQzs7Ozs7SUFFM0MsdUNBQThDOzs7OztJQUU5QyxxQ0FBd0I7Ozs7O0lBRXhCLHFDQUErQjs7Ozs7SUFFL0Isb0NBQThDOzs7OztJQUU5QyxrQ0FBZ0M7Ozs7O0lBRXBCLGlDQUFzQjs7Ozs7SUFBRSx1Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBSZW5kZXJlcjIsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIsIHVwZGF0ZUhvc3RDbGFzcyB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnVtYmVyLWluZm8nLFxuICBleHBvcnRBczogJ251bWJlckluZm8nLFxuICB0ZW1wbGF0ZVVybDogJy4vbnVtYmVyLWluZm8uY29tcG9uZW50Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIE51bWJlckluZm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAvKiog5qCH6aKYICovXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgLyoqIOWtkOagh+mimCAqL1xuICBASW5wdXQoKSBzdWJUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIC8qKiDmgLvph48gKi9cbiAgQElucHV0KCkgdG90YWw6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICAvKiog5oC76YeP5ZCO57yAICovXG4gIEBJbnB1dCgpIHN1YlRvdGFsOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgLyoqIOWtkOaAu+mHjyAqL1xuICBASW5wdXQoKSBzdWZmaXg6IHN0cmluZztcbiAgLyoqIOWinuWKoOeKtuaAgSAqL1xuICBASW5wdXQoKSBzdGF0dXM6ICd1cCcgfCAnZG93bic7XG4gIC8qKiDnirbmgIHmoLflvI8gKi9cbiAgQElucHV0KCkgdGhlbWU6ICdsaWdodCcgfCAnZGVmYXVsdCcgPSAnbGlnaHQnO1xuICAvKiog6K6+572u5pWw5a2X5ZKM5o+P6L+w55u05o6l55qE6Ze06Led77yI5YOP57Sg77yJICovXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGdhcCA9IDg7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxuXG4gIHNldENsYXNzKCkge1xuICAgIGNvbnN0IHsgZWwsIHJlbmRlcmVyLCB0aGVtZSB9ID0gdGhpcztcbiAgICB1cGRhdGVIb3N0Q2xhc3MoXG4gICAgICBlbC5uYXRpdmVFbGVtZW50LFxuICAgICAgcmVuZGVyZXIsXG4gICAgICB7XG4gICAgICAgICdudW1iZXItaW5mbyc6IHRydWUsXG4gICAgICAgIFtgbnVtYmVyLWluZm9fXyR7dGhlbWV9YF06IHRydWUsXG4gICAgICB9LFxuICAgICAgdHJ1ZSxcbiAgICApO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzcygpO1xuICB9XG59XG4iXX0=