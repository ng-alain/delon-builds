/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                template: `
  <div *ngIf="_title || _titleTpl" class="number-info__title"><ng-container *ngIf="_title; else _titleTpl">{{_title}}</ng-container></div>
  <div *ngIf="_subTitle || _subTitleTpl" class="number-info__title-sub"><ng-container *ngIf="_subTitle; else _subTitleTpl">{{_subTitle}}</ng-container></div>
  <div class="number-info__value" [ngStyle]="{'margin-top.px': gap}">
    <span class="number-info__value-text"><ng-container *ngIf="_total; else _totalTpl">{{_total}}</ng-container><em class="number-info__value-suffix" *ngIf="suffix">{{suffix}}</em></span>
    <span *ngIf="status || _isSubTotal" class="number-info__value-text number-info__value-sub">
      <ng-container *ngIf="_subTotal; else _subTotalTpl">{{_subTotal}}</ng-container>
      <i *ngIf="status" class="anticon anticon-caret-{{status}}"></i>
    </span>
  </div>
  `,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWluZm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L251bWJlci1pbmZvLyIsInNvdXJjZXMiOlsibnVtYmVyLWluZm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEVBQ0wsVUFBVSxFQUNWLFNBQVMsRUFFVCxpQkFBaUIsRUFDakIsdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBa0J4RCxNQUFNOzs7Ozs7SUFzRUosWUFDVSxJQUNBLFVBQ0E7UUFGQSxPQUFFLEdBQUYsRUFBRTtRQUNGLGFBQVEsR0FBUixRQUFRO1FBQ1IsT0FBRSxHQUFGLEVBQUU7c0JBeEVILEVBQUU7eUJBV0MsRUFBRTtzQkFXTCxFQUFFOzJCQVdHLEtBQUs7eUJBQ1AsRUFBRTs7OztxQkF1QmUsT0FBTztvQkFVckIsQ0FBQzt5QkFRTSxFQUFFO0tBRnBCOzs7Ozs7SUF0RUosSUFDSSxLQUFLLENBQUMsS0FBZ0M7UUFDeEMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQ3hCOztZQUFNLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0tBQzVCOzs7Ozs7SUFLRCxJQUNJLFFBQVEsQ0FBQyxLQUFnQztRQUMzQyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7U0FDM0I7O1lBQU0sSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7S0FDL0I7Ozs7OztJQUtELElBQ0ksS0FBSyxDQUFDLEtBQWdDO1FBQ3hDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtZQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUN4Qjs7WUFBTSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUM7S0FDakM7Ozs7OztJQU1ELElBQ0ksUUFBUSxDQUFDLEtBQWdDO1FBQzNDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtZQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztTQUMzQjs7WUFBTSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUU5QixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7S0FDNUI7Ozs7O0lBZUQsSUFDSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0tBQ2xCOzs7OztJQUNELElBQUksR0FBRyxDQUFDLEtBQVU7UUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDN0I7Ozs7SUFVRCxRQUFRO1FBQ04sZUFBZSxDQUNiLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUNyQixJQUFJLENBQUMsUUFBUSxFQUNiO1lBQ0UsYUFBYSxFQUFFLElBQUk7WUFDbkIsQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSTtTQUNyQyxFQUNELElBQUksQ0FDTCxDQUFDO1FBQ0YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUN6Qjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDakI7OztZQTVHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRTs7Ozs7Ozs7OztHQVVUO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBdkJDLFVBQVU7WUFDVixTQUFTO1lBRVQsaUJBQWlCOzs7b0JBeUJoQixLQUFLO3VCQVdMLEtBQUs7b0JBV0wsS0FBSzt1QkFZTCxLQUFLO3FCQVdMLEtBQUs7cUJBSUwsS0FBSztvQkFJTCxLQUFLO2tCQUlMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBJbnB1dCxcclxuICBFbGVtZW50UmVmLFxyXG4gIFJlbmRlcmVyMixcclxuICBPbkNoYW5nZXMsXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHRvTnVtYmVyLCB1cGRhdGVIb3N0Q2xhc3MgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ251bWJlci1pbmZvJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXYgKm5nSWY9XCJfdGl0bGUgfHwgX3RpdGxlVHBsXCIgY2xhc3M9XCJudW1iZXItaW5mb19fdGl0bGVcIj48bmctY29udGFpbmVyICpuZ0lmPVwiX3RpdGxlOyBlbHNlIF90aXRsZVRwbFwiPnt7X3RpdGxlfX08L25nLWNvbnRhaW5lcj48L2Rpdj5cclxuICA8ZGl2ICpuZ0lmPVwiX3N1YlRpdGxlIHx8IF9zdWJUaXRsZVRwbFwiIGNsYXNzPVwibnVtYmVyLWluZm9fX3RpdGxlLXN1YlwiPjxuZy1jb250YWluZXIgKm5nSWY9XCJfc3ViVGl0bGU7IGVsc2UgX3N1YlRpdGxlVHBsXCI+e3tfc3ViVGl0bGV9fTwvbmctY29udGFpbmVyPjwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJudW1iZXItaW5mb19fdmFsdWVcIiBbbmdTdHlsZV09XCJ7J21hcmdpbi10b3AucHgnOiBnYXB9XCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cIm51bWJlci1pbmZvX192YWx1ZS10ZXh0XCI+PG5nLWNvbnRhaW5lciAqbmdJZj1cIl90b3RhbDsgZWxzZSBfdG90YWxUcGxcIj57e190b3RhbH19PC9uZy1jb250YWluZXI+PGVtIGNsYXNzPVwibnVtYmVyLWluZm9fX3ZhbHVlLXN1ZmZpeFwiICpuZ0lmPVwic3VmZml4XCI+e3tzdWZmaXh9fTwvZW0+PC9zcGFuPlxyXG4gICAgPHNwYW4gKm5nSWY9XCJzdGF0dXMgfHwgX2lzU3ViVG90YWxcIiBjbGFzcz1cIm51bWJlci1pbmZvX192YWx1ZS10ZXh0IG51bWJlci1pbmZvX192YWx1ZS1zdWJcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIl9zdWJUb3RhbDsgZWxzZSBfc3ViVG90YWxUcGxcIj57e19zdWJUb3RhbH19PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxpICpuZ0lmPVwic3RhdHVzXCIgY2xhc3M9XCJhbnRpY29uIGFudGljb24tY2FyZXQte3tzdGF0dXN9fVwiPjwvaT5cclxuICAgIDwvc3Bhbj5cclxuICA8L2Rpdj5cclxuICBgLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnVtYmVySW5mb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgX3RpdGxlID0gJyc7XHJcbiAgX3RpdGxlVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIC8qKiDmoIfpopggKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy5fdGl0bGUgPSBudWxsO1xyXG4gICAgICB0aGlzLl90aXRsZVRwbCA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHRoaXMuX3RpdGxlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBfc3ViVGl0bGUgPSAnJztcclxuICBfc3ViVGl0bGVUcGw6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgLyoqIOWtkOagh+mimCAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHN1YlRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLl9zdWJUaXRsZSA9IG51bGw7XHJcbiAgICAgIHRoaXMuX3N1YlRpdGxlVHBsID0gdmFsdWU7XHJcbiAgICB9IGVsc2UgdGhpcy5fc3ViVGl0bGUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIF90b3RhbCA9ICcnO1xyXG4gIF90b3RhbFRwbDogVGVtcGxhdGVSZWY8YW55PjtcclxuICAvKiog5oC76YePICovXHJcbiAgQElucHV0KClcclxuICBzZXQgdG90YWwodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMuX3RvdGFsID0gbnVsbDtcclxuICAgICAgdGhpcy5fdG90YWxUcGwgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB0aGlzLl90b3RhbCA9ICcnICsgdmFsdWU7XHJcbiAgfVxyXG5cclxuICBfaXNTdWJUb3RhbCA9IGZhbHNlO1xyXG4gIF9zdWJUb3RhbCA9ICcnO1xyXG4gIF9zdWJUb3RhbFRwbDogVGVtcGxhdGVSZWY8YW55PjtcclxuICAvKiog5oC76YeP5ZCO57yAICovXHJcbiAgQElucHV0KClcclxuICBzZXQgc3ViVG90YWwodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMuX3N1YlRvdGFsID0gbnVsbDtcclxuICAgICAgdGhpcy5fc3ViVG90YWxUcGwgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB0aGlzLl9zdWJUb3RhbCA9IHZhbHVlO1xyXG5cclxuICAgIHRoaXMuX2lzU3ViVG90YWwgPSAhIXZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqIOWtkOaAu+mHjyAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc3VmZml4OiBzdHJpbmc7XHJcblxyXG4gIC8qKiDlop7liqDnirbmgIEgKi9cclxuICBASW5wdXQoKVxyXG4gIHN0YXR1czogJ3VwJyB8ICdkb3duJztcclxuXHJcbiAgLyoqIOeKtuaAgeagt+W8jyAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgdGhlbWU6ICdsaWdodCcgfCAnZGVmYXVsdCcgPSAnbGlnaHQnO1xyXG5cclxuICAvKiog6K6+572u5pWw5a2X5ZKM5o+P6L+w55u05o6l55qE6Ze06Led77yI5YOP57Sg77yJICovXHJcbiAgQElucHV0KClcclxuICBnZXQgZ2FwKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2dhcDtcclxuICB9XHJcbiAgc2V0IGdhcCh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLl9nYXAgPSB0b051bWJlcih2YWx1ZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2dhcCA9IDg7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICkge31cclxuXHJcbiAgX2NsYXNzTWFwOiBzdHJpbmdbXSA9IFtdO1xyXG4gIHNldENsYXNzKCkge1xyXG4gICAgdXBkYXRlSG9zdENsYXNzKFxyXG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgIHRoaXMucmVuZGVyZXIsXHJcbiAgICAgIHtcclxuICAgICAgICAnbnVtYmVyLWluZm8nOiB0cnVlLFxyXG4gICAgICAgIFtgbnVtYmVyLWluZm9fXyR7dGhpcy50aGVtZX1gXTogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICB0cnVlLFxyXG4gICAgKTtcclxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==