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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWluZm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L251bWJlci1pbmZvLyIsInNvdXJjZXMiOlsibnVtYmVyLWluZm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEVBQ0wsVUFBVSxFQUNWLFNBQVMsRUFFVCxpQkFBaUIsRUFDakIsdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBa0J4RCxNQUFNOzs7Ozs7SUFzRUosWUFDVSxJQUNBLFVBQ0E7UUFGQSxPQUFFLEdBQUYsRUFBRTtRQUNGLGFBQVEsR0FBUixRQUFRO1FBQ1IsT0FBRSxHQUFGLEVBQUU7c0JBeEVILEVBQUU7eUJBV0MsRUFBRTtzQkFXTCxFQUFFOzJCQVdHLEtBQUs7eUJBQ1AsRUFBRTs7OztxQkF1QmUsT0FBTztvQkFVckIsQ0FBQzt5QkFRTSxFQUFFO0tBRnBCOzs7Ozs7SUF0RUosSUFDSSxLQUFLLENBQUMsS0FBZ0M7UUFDeEMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQ3hCOztZQUFNLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0tBQzVCOzs7Ozs7SUFLRCxJQUNJLFFBQVEsQ0FBQyxLQUFnQztRQUMzQyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7U0FDM0I7O1lBQU0sSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7S0FDL0I7Ozs7OztJQUtELElBQ0ksS0FBSyxDQUFDLEtBQWdDO1FBQ3hDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtZQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUN4Qjs7WUFBTSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUM7S0FDakM7Ozs7OztJQU1ELElBQ0ksUUFBUSxDQUFDLEtBQWdDO1FBQzNDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtZQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztTQUMzQjs7WUFBTSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUU5QixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7S0FDNUI7Ozs7O0lBZUQsSUFDSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0tBQ2xCOzs7OztJQUNELElBQUksR0FBRyxDQUFDLEtBQVU7UUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDN0I7Ozs7SUFVRCxRQUFRO1FBQ04sZUFBZSxDQUNiLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUNyQixJQUFJLENBQUMsUUFBUSxFQUNiO1lBQ0UsYUFBYSxFQUFFLElBQUk7WUFDbkIsQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSTtTQUNyQyxFQUNELElBQUksQ0FDTCxDQUFDO1FBQ0YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUN6Qjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDakI7OztZQTVHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRTs7Ozs7Ozs7OztHQVVUO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBdkJDLFVBQVU7WUFDVixTQUFTO1lBRVQsaUJBQWlCOzs7b0JBeUJoQixLQUFLO3VCQVdMLEtBQUs7b0JBV0wsS0FBSzt1QkFZTCxLQUFLO3FCQVdMLEtBQUs7cUJBSUwsS0FBSztvQkFJTCxLQUFLO2tCQUlMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIFRlbXBsYXRlUmVmLFxuICBJbnB1dCxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxuICBPbkNoYW5nZXMsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0b051bWJlciwgdXBkYXRlSG9zdENsYXNzIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdudW1iZXItaW5mbycsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgKm5nSWY9XCJfdGl0bGUgfHwgX3RpdGxlVHBsXCIgY2xhc3M9XCJudW1iZXItaW5mb19fdGl0bGVcIj48bmctY29udGFpbmVyICpuZ0lmPVwiX3RpdGxlOyBlbHNlIF90aXRsZVRwbFwiPnt7X3RpdGxlfX08L25nLWNvbnRhaW5lcj48L2Rpdj5cbiAgPGRpdiAqbmdJZj1cIl9zdWJUaXRsZSB8fCBfc3ViVGl0bGVUcGxcIiBjbGFzcz1cIm51bWJlci1pbmZvX190aXRsZS1zdWJcIj48bmctY29udGFpbmVyICpuZ0lmPVwiX3N1YlRpdGxlOyBlbHNlIF9zdWJUaXRsZVRwbFwiPnt7X3N1YlRpdGxlfX08L25nLWNvbnRhaW5lcj48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIm51bWJlci1pbmZvX192YWx1ZVwiIFtuZ1N0eWxlXT1cInsnbWFyZ2luLXRvcC5weCc6IGdhcH1cIj5cbiAgICA8c3BhbiBjbGFzcz1cIm51bWJlci1pbmZvX192YWx1ZS10ZXh0XCI+PG5nLWNvbnRhaW5lciAqbmdJZj1cIl90b3RhbDsgZWxzZSBfdG90YWxUcGxcIj57e190b3RhbH19PC9uZy1jb250YWluZXI+PGVtIGNsYXNzPVwibnVtYmVyLWluZm9fX3ZhbHVlLXN1ZmZpeFwiICpuZ0lmPVwic3VmZml4XCI+e3tzdWZmaXh9fTwvZW0+PC9zcGFuPlxuICAgIDxzcGFuICpuZ0lmPVwic3RhdHVzIHx8IF9pc1N1YlRvdGFsXCIgY2xhc3M9XCJudW1iZXItaW5mb19fdmFsdWUtdGV4dCBudW1iZXItaW5mb19fdmFsdWUtc3ViXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiX3N1YlRvdGFsOyBlbHNlIF9zdWJUb3RhbFRwbFwiPnt7X3N1YlRvdGFsfX08L25nLWNvbnRhaW5lcj5cbiAgICAgIDxpICpuZ0lmPVwic3RhdHVzXCIgY2xhc3M9XCJhbnRpY29uIGFudGljb24tY2FyZXQte3tzdGF0dXN9fVwiPjwvaT5cbiAgICA8L3NwYW4+XG4gIDwvZGl2PlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE51bWJlckluZm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBfdGl0bGUgPSAnJztcbiAgX3RpdGxlVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvKiog5qCH6aKYICovXG4gIEBJbnB1dCgpXG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl90aXRsZSA9IG51bGw7XG4gICAgICB0aGlzLl90aXRsZVRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICB9XG5cbiAgX3N1YlRpdGxlID0gJyc7XG4gIF9zdWJUaXRsZVRwbDogVGVtcGxhdGVSZWY8YW55PjtcbiAgLyoqIOWtkOagh+mimCAqL1xuICBASW5wdXQoKVxuICBzZXQgc3ViVGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5fc3ViVGl0bGUgPSBudWxsO1xuICAgICAgdGhpcy5fc3ViVGl0bGVUcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2UgdGhpcy5fc3ViVGl0bGUgPSB2YWx1ZTtcbiAgfVxuXG4gIF90b3RhbCA9ICcnO1xuICBfdG90YWxUcGw6IFRlbXBsYXRlUmVmPGFueT47XG4gIC8qKiDmgLvph48gKi9cbiAgQElucHV0KClcbiAgc2V0IHRvdGFsKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX3RvdGFsID0gbnVsbDtcbiAgICAgIHRoaXMuX3RvdGFsVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHRoaXMuX3RvdGFsID0gJycgKyB2YWx1ZTtcbiAgfVxuXG4gIF9pc1N1YlRvdGFsID0gZmFsc2U7XG4gIF9zdWJUb3RhbCA9ICcnO1xuICBfc3ViVG90YWxUcGw6IFRlbXBsYXRlUmVmPGFueT47XG4gIC8qKiDmgLvph4/lkI7nvIAgKi9cbiAgQElucHV0KClcbiAgc2V0IHN1YlRvdGFsKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX3N1YlRvdGFsID0gbnVsbDtcbiAgICAgIHRoaXMuX3N1YlRvdGFsVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHRoaXMuX3N1YlRvdGFsID0gdmFsdWU7XG5cbiAgICB0aGlzLl9pc1N1YlRvdGFsID0gISF2YWx1ZTtcbiAgfVxuXG4gIC8qKiDlrZDmgLvph48gKi9cbiAgQElucHV0KClcbiAgc3VmZml4OiBzdHJpbmc7XG5cbiAgLyoqIOWinuWKoOeKtuaAgSAqL1xuICBASW5wdXQoKVxuICBzdGF0dXM6ICd1cCcgfCAnZG93bic7XG5cbiAgLyoqIOeKtuaAgeagt+W8jyAqL1xuICBASW5wdXQoKVxuICB0aGVtZTogJ2xpZ2h0JyB8ICdkZWZhdWx0JyA9ICdsaWdodCc7XG5cbiAgLyoqIOiuvue9ruaVsOWtl+WSjOaPj+i/sOebtOaOpeeahOmXtOi3ne+8iOWDj+e0oO+8iSAqL1xuICBASW5wdXQoKVxuICBnZXQgZ2FwKCkge1xuICAgIHJldHVybiB0aGlzLl9nYXA7XG4gIH1cbiAgc2V0IGdhcCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fZ2FwID0gdG9OdW1iZXIodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2dhcCA9IDg7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge31cblxuICBfY2xhc3NNYXA6IHN0cmluZ1tdID0gW107XG4gIHNldENsYXNzKCkge1xuICAgIHVwZGF0ZUhvc3RDbGFzcyhcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMucmVuZGVyZXIsXG4gICAgICB7XG4gICAgICAgICdudW1iZXItaW5mbyc6IHRydWUsXG4gICAgICAgIFtgbnVtYmVyLWluZm9fXyR7dGhpcy50aGVtZX1gXTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHRydWUsXG4gICAgKTtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgfVxufVxuIl19