/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, TemplateRef, Input, ElementRef, Renderer2, ChangeDetectorRef, ChangeDetectionStrategy, } from '@angular/core';
import { toNumber, updateHostClass } from '@delon/util';
export class NumberInfoComponent {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} cd
     */
    constructor(el, renderer, cd) {
        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this._title = '';
        this._subTitle = '';
        this._total = '';
        this._isSubTotal = false;
        this._subTotal = '';
        /**
         * 状态样式
         */
        this.theme = 'light';
        this._gap = 8;
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
     * 设置数字和描述直接的间距（像素）
     * @return {?}
     */
    get gap() {
        return this._gap;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set gap(value) {
        this._gap = toNumber(value);
    }
    /**
     * @return {?}
     */
    setClass() {
        updateHostClass(this.el.nativeElement, this.renderer, {
            'number-info': true,
            [`number-info__${this.theme}`]: true
        }, true);
        this.cd.detectChanges();
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
                preserveWhitespaces: false,
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
    /** @type {?} */
    NumberInfoComponent.prototype._gap;
    /** @type {?} */
    NumberInfoComponent.prototype._classMap;
    /** @type {?} */
    NumberInfoComponent.prototype.el;
    /** @type {?} */
    NumberInfoComponent.prototype.renderer;
    /** @type {?} */
    NumberInfoComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWluZm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L251bWJlci1pbmZvLyIsInNvdXJjZXMiOlsibnVtYmVyLWluZm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEVBQ0wsVUFBVSxFQUNWLFNBQVMsRUFFVCxpQkFBaUIsRUFDakIsdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBUXhELE1BQU0sT0FBTyxtQkFBbUI7Ozs7OztJQXNFOUIsWUFDVSxFQUFjLEVBQ2QsUUFBbUIsRUFDbkIsRUFBcUI7UUFGckIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUF4RS9CLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFXWixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBV2YsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQVdaLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGNBQVMsR0FBRyxFQUFFLENBQUM7Ozs7UUF1QmYsVUFBSyxHQUF3QixPQUFPLENBQUM7UUFVN0IsU0FBSSxHQUFHLENBQUMsQ0FBQztRQVFqQixjQUFTLEdBQWEsRUFBRSxDQUFDO0lBRnRCLENBQUM7Ozs7OztJQXRFSixJQUNJLEtBQUssQ0FBQyxLQUFnQztRQUN4QyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDeEI7O1lBQU0sSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQzs7Ozs7O0lBS0QsSUFDSSxRQUFRLENBQUMsS0FBZ0M7UUFDM0MsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQzNCOztZQUFNLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7Ozs7OztJQUtELElBQ0ksS0FBSyxDQUFDLEtBQWdDO1FBQ3hDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtZQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUN4Qjs7WUFBTSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQzs7Ozs7O0lBTUQsSUFDSSxRQUFRLENBQUMsS0FBZ0M7UUFDM0MsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQzNCOztZQUFNLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBRTlCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUM3QixDQUFDOzs7OztJQWVELElBQ0ksR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDOzs7OztJQUNELElBQUksR0FBRyxDQUFDLEtBQVU7UUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7OztJQVVELFFBQVE7UUFDTixlQUFlLENBQ2IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQ3JCLElBQUksQ0FBQyxRQUFRLEVBQ2I7WUFDRSxhQUFhLEVBQUUsSUFBSTtZQUNuQixDQUFDLGdCQUFnQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJO1NBQ3JDLEVBQ0QsSUFBSSxDQUNMLENBQUM7UUFDRixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7OztZQWxHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLDgyQkFBMkM7Z0JBQzNDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBYkMsVUFBVTtZQUNWLFNBQVM7WUFFVCxpQkFBaUI7OztvQkFlaEIsS0FBSzt1QkFXTCxLQUFLO29CQVdMLEtBQUs7dUJBWUwsS0FBSztxQkFXTCxLQUFLO3FCQUlMLEtBQUs7b0JBSUwsS0FBSztrQkFJTCxLQUFLOzs7O0lBNUROLHFDQUFZOztJQUNaLHdDQUE0Qjs7SUFVNUIsd0NBQWU7O0lBQ2YsMkNBQStCOztJQVUvQixxQ0FBWTs7SUFDWix3Q0FBNEI7O0lBVTVCLDBDQUFvQjs7SUFDcEIsd0NBQWU7O0lBQ2YsMkNBQStCOzs7OztJQWEvQixxQ0FDZTs7Ozs7SUFHZixxQ0FDc0I7Ozs7O0lBR3RCLG9DQUNxQzs7SUFVckMsbUNBQWlCOztJQVFqQix3Q0FBeUI7O0lBTHZCLGlDQUFzQjs7SUFDdEIsdUNBQTJCOztJQUMzQixpQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIFRlbXBsYXRlUmVmLFxuICBJbnB1dCxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxuICBPbkNoYW5nZXMsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0b051bWJlciwgdXBkYXRlSG9zdENsYXNzIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdudW1iZXItaW5mbycsXG4gIHRlbXBsYXRlVXJsOiAnLi9udW1iZXItaW5mby5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTnVtYmVySW5mb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIF90aXRsZSA9ICcnO1xuICBfdGl0bGVUcGw6IFRlbXBsYXRlUmVmPGFueT47XG4gIC8qKiDmoIfpopggKi9cbiAgQElucHV0KClcbiAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX3RpdGxlID0gbnVsbDtcbiAgICAgIHRoaXMuX3RpdGxlVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gIH1cblxuICBfc3ViVGl0bGUgPSAnJztcbiAgX3N1YlRpdGxlVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvKiog5a2Q5qCH6aKYICovXG4gIEBJbnB1dCgpXG4gIHNldCBzdWJUaXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl9zdWJUaXRsZSA9IG51bGw7XG4gICAgICB0aGlzLl9zdWJUaXRsZVRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB0aGlzLl9zdWJUaXRsZSA9IHZhbHVlO1xuICB9XG5cbiAgX3RvdGFsID0gJyc7XG4gIF90b3RhbFRwbDogVGVtcGxhdGVSZWY8YW55PjtcbiAgLyoqIOaAu+mHjyAqL1xuICBASW5wdXQoKVxuICBzZXQgdG90YWwodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5fdG90YWwgPSBudWxsO1xuICAgICAgdGhpcy5fdG90YWxUcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2UgdGhpcy5fdG90YWwgPSAnJyArIHZhbHVlO1xuICB9XG5cbiAgX2lzU3ViVG90YWwgPSBmYWxzZTtcbiAgX3N1YlRvdGFsID0gJyc7XG4gIF9zdWJUb3RhbFRwbDogVGVtcGxhdGVSZWY8YW55PjtcbiAgLyoqIOaAu+mHj+WQjue8gCAqL1xuICBASW5wdXQoKVxuICBzZXQgc3ViVG90YWwodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5fc3ViVG90YWwgPSBudWxsO1xuICAgICAgdGhpcy5fc3ViVG90YWxUcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2UgdGhpcy5fc3ViVG90YWwgPSB2YWx1ZTtcblxuICAgIHRoaXMuX2lzU3ViVG90YWwgPSAhIXZhbHVlO1xuICB9XG5cbiAgLyoqIOWtkOaAu+mHjyAqL1xuICBASW5wdXQoKVxuICBzdWZmaXg6IHN0cmluZztcblxuICAvKiog5aKe5Yqg54q25oCBICovXG4gIEBJbnB1dCgpXG4gIHN0YXR1czogJ3VwJyB8ICdkb3duJztcblxuICAvKiog54q25oCB5qC35byPICovXG4gIEBJbnB1dCgpXG4gIHRoZW1lOiAnbGlnaHQnIHwgJ2RlZmF1bHQnID0gJ2xpZ2h0JztcblxuICAvKiog6K6+572u5pWw5a2X5ZKM5o+P6L+w55u05o6l55qE6Ze06Led77yI5YOP57Sg77yJICovXG4gIEBJbnB1dCgpXG4gIGdldCBnYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dhcDtcbiAgfVxuICBzZXQgZ2FwKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9nYXAgPSB0b051bWJlcih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfZ2FwID0gODtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgKSB7fVxuXG4gIF9jbGFzc01hcDogc3RyaW5nW10gPSBbXTtcbiAgc2V0Q2xhc3MoKSB7XG4gICAgdXBkYXRlSG9zdENsYXNzKFxuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5yZW5kZXJlcixcbiAgICAgIHtcbiAgICAgICAgJ251bWJlci1pbmZvJzogdHJ1ZSxcbiAgICAgICAgW2BudW1iZXItaW5mb19fJHt0aGlzLnRoZW1lfWBdOiB0cnVlXG4gICAgICB9LFxuICAgICAgdHJ1ZSxcbiAgICApO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzcygpO1xuICB9XG59XG4iXX0=