/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, TemplateRef, } from '@angular/core';
import { updateHostClass, InputNumber } from '@delon/util';
export class NumberInfoComponent {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} cdr
     */
    constructor(el, renderer, cdr) {
        this.el = el;
        this.renderer = renderer;
        this.cdr = cdr;
        this._title = '';
        this._subTitle = '';
        this._total = '';
        this._isSubTotal = false;
        this._subTotal = '';
        /**
         * 状态样式
         */
        this.theme = 'light';
        /**
         * 设置数字和描述直接的间距（像素）
         */
        this.gap = 8;
        this._classMap = [];
    }
    /**
     * 标题
     * @param {?} value
     * @return {?}
     */
    set title(value) {
        if (value instanceof TemplateRef) {
            this._title = null;
            this._titleTpl = value;
        }
        else
            this._title = value;
    }
    /**
     * 子标题
     * @param {?} value
     * @return {?}
     */
    set subTitle(value) {
        if (value instanceof TemplateRef) {
            this._subTitle = null;
            this._subTitleTpl = value;
        }
        else
            this._subTitle = value;
    }
    /**
     * 总量
     * @param {?} value
     * @return {?}
     */
    set total(value) {
        if (value instanceof TemplateRef) {
            this._total = null;
            this._totalTpl = value;
        }
        else
            this._total = '' + value;
    }
    /**
     * 总量后缀
     * @param {?} value
     * @return {?}
     */
    set subTotal(value) {
        if (value instanceof TemplateRef) {
            this._subTotal = null;
            this._subTotalTpl = value;
        }
        else
            this._subTotal = value;
        this._isSubTotal = !!value;
    }
    /**
     * @return {?}
     */
    setClass() {
        updateHostClass(this.el.nativeElement, this.renderer, {
            'number-info': true,
            [`number-info__${this.theme}`]: true,
        }, true);
        this.cdr.detectChanges();
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
                template: "<div *ngIf=\"_title || _titleTpl\" class=\"number-info__title\">\n  <ng-container *ngIf=\"_title; else _titleTpl\">{{_title}}</ng-container>\n</div>\n<div *ngIf=\"_subTitle || _subTitleTpl\" class=\"number-info__title-sub\">\n  <ng-container *ngIf=\"_subTitle; else _subTitleTpl\">{{_subTitle}}</ng-container>\n</div>\n<div class=\"number-info__value\" [ngStyle]=\"{'margin-top.px': gap}\">\n  <span class=\"number-info__value-text\">\n    <ng-container *ngIf=\"_total; else _totalTpl\">{{_total}}</ng-container><em class=\"number-info__value-suffix\" *ngIf=\"suffix\">{{suffix}}</em>\n  </span>\n  <span *ngIf=\"status || _isSubTotal\" class=\"number-info__value-text number-info__value-sub\">\n    <ng-container *ngIf=\"_subTotal; else _subTotalTpl\">{{_subTotal}}</ng-container>\n    <i *ngIf=\"status\" nz-icon type=\"caret-{{status}}\"></i>\n  </span>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NumberInfoComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
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
    /** @type {?} */
    NumberInfoComponent.prototype._title;
    /** @type {?} */
    NumberInfoComponent.prototype._titleTpl;
    /** @type {?} */
    NumberInfoComponent.prototype._subTitle;
    /** @type {?} */
    NumberInfoComponent.prototype._subTitleTpl;
    /** @type {?} */
    NumberInfoComponent.prototype._total;
    /** @type {?} */
    NumberInfoComponent.prototype._totalTpl;
    /** @type {?} */
    NumberInfoComponent.prototype._isSubTotal;
    /** @type {?} */
    NumberInfoComponent.prototype._subTotal;
    /** @type {?} */
    NumberInfoComponent.prototype._subTotalTpl;
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
    /** @type {?} */
    NumberInfoComponent.prototype._classMap;
    /** @type {?} */
    NumberInfoComponent.prototype.el;
    /** @type {?} */
    NumberInfoComponent.prototype.renderer;
    /** @type {?} */
    NumberInfoComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWluZm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L251bWJlci1pbmZvLyIsInNvdXJjZXMiOlsibnVtYmVyLWluZm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBRUwsU0FBUyxFQUNULFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU8zRCxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7SUErRDlCLFlBQ1UsRUFBYyxFQUNkLFFBQW1CLEVBQ25CLEdBQXNCO1FBRnRCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBakVoQyxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBV1osY0FBUyxHQUFHLEVBQUUsQ0FBQztRQVdmLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFXWixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixjQUFTLEdBQUcsRUFBRSxDQUFDOzs7O1FBdUJmLFVBQUssR0FBd0IsT0FBTyxDQUFDOzs7O1FBR2IsUUFBRyxHQUFHLENBQUMsQ0FBQztRQVFoQyxjQUFTLEdBQWEsRUFBRSxDQUFDO0lBRnJCLENBQUM7Ozs7OztJQS9ETCxJQUNJLEtBQUssQ0FBQyxLQUFpQztRQUN6QyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDeEI7O1lBQU0sSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQzs7Ozs7O0lBS0QsSUFDSSxRQUFRLENBQUMsS0FBaUM7UUFDNUMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQzNCOztZQUFNLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7Ozs7OztJQUtELElBQ0ksS0FBSyxDQUFDLEtBQWlDO1FBQ3pDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtZQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUN4Qjs7WUFBTSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQzs7Ozs7O0lBTUQsSUFDSSxRQUFRLENBQUMsS0FBaUM7UUFDNUMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQzNCOztZQUFNLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBRTlCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUM3QixDQUFDOzs7O0lBd0JELFFBQVE7UUFDTixlQUFlLENBQ2IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQ3JCLElBQUksQ0FBQyxRQUFRLEVBQ2I7WUFDRSxhQUFhLEVBQUUsSUFBSTtZQUNuQixDQUFDLGdCQUFnQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJO1NBQ3JDLEVBQ0QsSUFBSSxDQUNMLENBQUM7UUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7OztZQTFGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLDgyQkFBMkM7Z0JBQzNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBWkMsVUFBVTtZQUdWLFNBQVM7WUFMVCxpQkFBaUI7OztvQkFtQmhCLEtBQUs7dUJBV0wsS0FBSztvQkFXTCxLQUFLO3VCQVlMLEtBQUs7cUJBV0wsS0FBSztxQkFJTCxLQUFLO29CQUlMLEtBQUs7a0JBSUwsS0FBSzs7QUFBa0I7SUFBZCxXQUFXLEVBQUU7O2dEQUFTOzs7SUE1RGhDLHFDQUFZOztJQUNaLHdDQUE2Qjs7SUFVN0Isd0NBQWU7O0lBQ2YsMkNBQWdDOztJQVVoQyxxQ0FBWTs7SUFDWix3Q0FBNkI7O0lBVTdCLDBDQUFvQjs7SUFDcEIsd0NBQWU7O0lBQ2YsMkNBQWdDOzs7OztJQWFoQyxxQ0FDZTs7Ozs7SUFHZixxQ0FDc0I7Ozs7O0lBR3RCLG9DQUNxQzs7Ozs7SUFHckMsa0NBQWdDOztJQVFoQyx3Q0FBeUI7O0lBTHZCLGlDQUFzQjs7SUFDdEIsdUNBQTJCOztJQUMzQixrQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB1cGRhdGVIb3N0Q2xhc3MsIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdudW1iZXItaW5mbycsXG4gIHRlbXBsYXRlVXJsOiAnLi9udW1iZXItaW5mby5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOdW1iZXJJbmZvQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgX3RpdGxlID0gJyc7XG4gIF90aXRsZVRwbDogVGVtcGxhdGVSZWY8dm9pZD47XG4gIC8qKiDmoIfpopggKi9cbiAgQElucHV0KClcbiAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl90aXRsZSA9IG51bGw7XG4gICAgICB0aGlzLl90aXRsZVRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICB9XG5cbiAgX3N1YlRpdGxlID0gJyc7XG4gIF9zdWJUaXRsZVRwbDogVGVtcGxhdGVSZWY8dm9pZD47XG4gIC8qKiDlrZDmoIfpopggKi9cbiAgQElucHV0KClcbiAgc2V0IHN1YlRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl9zdWJUaXRsZSA9IG51bGw7XG4gICAgICB0aGlzLl9zdWJUaXRsZVRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB0aGlzLl9zdWJUaXRsZSA9IHZhbHVlO1xuICB9XG5cbiAgX3RvdGFsID0gJyc7XG4gIF90b3RhbFRwbDogVGVtcGxhdGVSZWY8dm9pZD47XG4gIC8qKiDmgLvph48gKi9cbiAgQElucHV0KClcbiAgc2V0IHRvdGFsKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl90b3RhbCA9IG51bGw7XG4gICAgICB0aGlzLl90b3RhbFRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB0aGlzLl90b3RhbCA9ICcnICsgdmFsdWU7XG4gIH1cblxuICBfaXNTdWJUb3RhbCA9IGZhbHNlO1xuICBfc3ViVG90YWwgPSAnJztcbiAgX3N1YlRvdGFsVHBsOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgLyoqIOaAu+mHj+WQjue8gCAqL1xuICBASW5wdXQoKVxuICBzZXQgc3ViVG90YWwodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX3N1YlRvdGFsID0gbnVsbDtcbiAgICAgIHRoaXMuX3N1YlRvdGFsVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHRoaXMuX3N1YlRvdGFsID0gdmFsdWU7XG5cbiAgICB0aGlzLl9pc1N1YlRvdGFsID0gISF2YWx1ZTtcbiAgfVxuXG4gIC8qKiDlrZDmgLvph48gKi9cbiAgQElucHV0KClcbiAgc3VmZml4OiBzdHJpbmc7XG5cbiAgLyoqIOWinuWKoOeKtuaAgSAqL1xuICBASW5wdXQoKVxuICBzdGF0dXM6ICd1cCcgfCAnZG93bic7XG5cbiAgLyoqIOeKtuaAgeagt+W8jyAqL1xuICBASW5wdXQoKVxuICB0aGVtZTogJ2xpZ2h0JyB8ICdkZWZhdWx0JyA9ICdsaWdodCc7XG5cbiAgLyoqIOiuvue9ruaVsOWtl+WSjOaPj+i/sOebtOaOpeeahOmXtOi3ne+8iOWDj+e0oO+8iSAqL1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBnYXAgPSA4O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgKSB7IH1cblxuICBfY2xhc3NNYXA6IHN0cmluZ1tdID0gW107XG4gIHNldENsYXNzKCkge1xuICAgIHVwZGF0ZUhvc3RDbGFzcyhcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMucmVuZGVyZXIsXG4gICAgICB7XG4gICAgICAgICdudW1iZXItaW5mbyc6IHRydWUsXG4gICAgICAgIFtgbnVtYmVyLWluZm9fXyR7dGhpcy50aGVtZX1gXTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB0cnVlLFxuICAgICk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzcygpO1xuICB9XG59XG4iXX0=