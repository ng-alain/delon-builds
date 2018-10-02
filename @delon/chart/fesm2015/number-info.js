import { Component, TemplateRef, Input, ElementRef, Renderer2, ChangeDetectorRef, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { toNumber, updateHostClass, DelonUtilModule } from '@delon/util';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NumberInfoComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [NumberInfoComponent];
class NumberInfoModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: NumberInfoModule, providers: [] };
    }
}
NumberInfoModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DelonUtilModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NumberInfoComponent, NumberInfoModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWluZm8uanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9jaGFydC9udW1iZXItaW5mby9udW1iZXItaW5mby5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9jaGFydC9udW1iZXItaW5mby9udW1iZXItaW5mby5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgSW5wdXQsXHJcbiAgRWxlbWVudFJlZixcclxuICBSZW5kZXJlcjIsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0b051bWJlciwgdXBkYXRlSG9zdENsYXNzIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudW1iZXItaW5mbycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8ZGl2ICpuZ0lmPVwiX3RpdGxlIHx8IF90aXRsZVRwbFwiIGNsYXNzPVwibnVtYmVyLWluZm9fX3RpdGxlXCI+PG5nLWNvbnRhaW5lciAqbmdJZj1cIl90aXRsZTsgZWxzZSBfdGl0bGVUcGxcIj57e190aXRsZX19PC9uZy1jb250YWluZXI+PC9kaXY+XHJcbiAgPGRpdiAqbmdJZj1cIl9zdWJUaXRsZSB8fCBfc3ViVGl0bGVUcGxcIiBjbGFzcz1cIm51bWJlci1pbmZvX190aXRsZS1zdWJcIj48bmctY29udGFpbmVyICpuZ0lmPVwiX3N1YlRpdGxlOyBlbHNlIF9zdWJUaXRsZVRwbFwiPnt7X3N1YlRpdGxlfX08L25nLWNvbnRhaW5lcj48L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwibnVtYmVyLWluZm9fX3ZhbHVlXCIgW25nU3R5bGVdPVwieydtYXJnaW4tdG9wLnB4JzogZ2FwfVwiPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJudW1iZXItaW5mb19fdmFsdWUtdGV4dFwiPjxuZy1jb250YWluZXIgKm5nSWY9XCJfdG90YWw7IGVsc2UgX3RvdGFsVHBsXCI+e3tfdG90YWx9fTwvbmctY29udGFpbmVyPjxlbSBjbGFzcz1cIm51bWJlci1pbmZvX192YWx1ZS1zdWZmaXhcIiAqbmdJZj1cInN1ZmZpeFwiPnt7c3VmZml4fX08L2VtPjwvc3Bhbj5cclxuICAgIDxzcGFuICpuZ0lmPVwic3RhdHVzIHx8IF9pc1N1YlRvdGFsXCIgY2xhc3M9XCJudW1iZXItaW5mb19fdmFsdWUtdGV4dCBudW1iZXItaW5mb19fdmFsdWUtc3ViXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJfc3ViVG90YWw7IGVsc2UgX3N1YlRvdGFsVHBsXCI+e3tfc3ViVG90YWx9fTwvbmctY29udGFpbmVyPlxyXG4gICAgICA8aSAqbmdJZj1cInN0YXR1c1wiIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLWNhcmV0LXt7c3RhdHVzfX1cIj48L2k+XHJcbiAgICA8L3NwYW4+XHJcbiAgPC9kaXY+XHJcbiAgYCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIE51bWJlckluZm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIF90aXRsZSA9ICcnO1xyXG4gIF90aXRsZVRwbDogVGVtcGxhdGVSZWY8YW55PjtcclxuICAvKiogw6bCoMKHw6nCosKYICovXHJcbiAgQElucHV0KClcclxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMuX3RpdGxlID0gbnVsbDtcclxuICAgICAgdGhpcy5fdGl0bGVUcGwgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB0aGlzLl90aXRsZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgX3N1YlRpdGxlID0gJyc7XHJcbiAgX3N1YlRpdGxlVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIC8qKiDDpcKtwpDDpsKgwofDqcKiwpggKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBzdWJUaXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy5fc3ViVGl0bGUgPSBudWxsO1xyXG4gICAgICB0aGlzLl9zdWJUaXRsZVRwbCA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHRoaXMuX3N1YlRpdGxlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBfdG90YWwgPSAnJztcclxuICBfdG90YWxUcGw6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgLyoqIMOmwoDCu8OpwofCjyAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHRvdGFsKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLl90b3RhbCA9IG51bGw7XHJcbiAgICAgIHRoaXMuX3RvdGFsVHBsID0gdmFsdWU7XHJcbiAgICB9IGVsc2UgdGhpcy5fdG90YWwgPSAnJyArIHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgX2lzU3ViVG90YWwgPSBmYWxzZTtcclxuICBfc3ViVG90YWwgPSAnJztcclxuICBfc3ViVG90YWxUcGw6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgLyoqIMOmwoDCu8OpwofCj8OlwpDCjsOnwrzCgCAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHN1YlRvdGFsKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLl9zdWJUb3RhbCA9IG51bGw7XHJcbiAgICAgIHRoaXMuX3N1YlRvdGFsVHBsID0gdmFsdWU7XHJcbiAgICB9IGVsc2UgdGhpcy5fc3ViVG90YWwgPSB2YWx1ZTtcclxuXHJcbiAgICB0aGlzLl9pc1N1YlRvdGFsID0gISF2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKiDDpcKtwpDDpsKAwrvDqcKHwo8gKi9cclxuICBASW5wdXQoKVxyXG4gIHN1ZmZpeDogc3RyaW5nO1xyXG5cclxuICAvKiogw6XCosKew6XCisKgw6fCisK2w6bCgMKBICovXHJcbiAgQElucHV0KClcclxuICBzdGF0dXM6ICd1cCcgfCAnZG93bic7XHJcblxyXG4gIC8qKiDDp8KKwrbDpsKAwoHDpsKgwrfDpcK8wo8gKi9cclxuICBASW5wdXQoKVxyXG4gIHRoZW1lOiAnbGlnaHQnIHwgJ2RlZmF1bHQnID0gJ2xpZ2h0JztcclxuXHJcbiAgLyoqIMOowq7CvsOnwr3CrsOmwpXCsMOlwq3Cl8OlwpLCjMOmwo/Cj8Oowr/CsMOnwpvCtMOmwo7CpcOnwprChMOpwpfCtMOowrfCncOvwrzCiMOlwoPCj8OnwrTCoMOvwrzCiSAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGdhcCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9nYXA7XHJcbiAgfVxyXG4gIHNldCBnYXAodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5fZ2FwID0gdG9OdW1iZXIodmFsdWUpO1xyXG4gIH1cclxuICBwcml2YXRlIF9nYXAgPSA4O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICApIHt9XHJcblxyXG4gIF9jbGFzc01hcDogc3RyaW5nW10gPSBbXTtcclxuICBzZXRDbGFzcygpIHtcclxuICAgIHVwZGF0ZUhvc3RDbGFzcyhcclxuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICB0aGlzLnJlbmRlcmVyLFxyXG4gICAgICB7XHJcbiAgICAgICAgJ251bWJlci1pbmZvJzogdHJ1ZSxcclxuICAgICAgICBbYG51bWJlci1pbmZvX18ke3RoaXMudGhlbWV9YF06IHRydWVcclxuICAgICAgfSxcclxuICAgICAgdHJ1ZSxcclxuICAgICk7XHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzcygpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBEZWxvblV0aWxNb2R1bGUgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBOdW1iZXJJbmZvQ29tcG9uZW50IH0gZnJvbSAnLi9udW1iZXItaW5mby5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgQ09NUE9ORU5UUyA9IFtOdW1iZXJJbmZvQ29tcG9uZW50XTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRGVsb25VdGlsTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcclxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOdW1iZXJJbmZvTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7IG5nTW9kdWxlOiBOdW1iZXJJbmZvTW9kdWxlLCBwcm92aWRlcnM6IFtdIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7SUFrR0UsWUFDVSxJ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