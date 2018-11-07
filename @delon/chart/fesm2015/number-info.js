import { Component, TemplateRef, Input, ElementRef, Renderer2, ChangeDetectorRef, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { toNumber, updateHostClass, DelonUtilModule } from '@delon/util';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
      <i *ngIf="status" nz-icon type="caret-{{status}}"></i>
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                imports: [CommonModule, NgZorroAntdModule, DelonUtilModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { NumberInfoComponent, NumberInfoModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWluZm8uanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9jaGFydC9udW1iZXItaW5mby9udW1iZXItaW5mby5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9jaGFydC9udW1iZXItaW5mby9udW1iZXItaW5mby5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBUZW1wbGF0ZVJlZixcbiAgSW5wdXQsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbiAgT25DaGFuZ2VzLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdG9OdW1iZXIsIHVwZGF0ZUhvc3RDbGFzcyB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnVtYmVyLWluZm8nLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2ICpuZ0lmPVwiX3RpdGxlIHx8IF90aXRsZVRwbFwiIGNsYXNzPVwibnVtYmVyLWluZm9fX3RpdGxlXCI+PG5nLWNvbnRhaW5lciAqbmdJZj1cIl90aXRsZTsgZWxzZSBfdGl0bGVUcGxcIj57e190aXRsZX19PC9uZy1jb250YWluZXI+PC9kaXY+XG4gIDxkaXYgKm5nSWY9XCJfc3ViVGl0bGUgfHwgX3N1YlRpdGxlVHBsXCIgY2xhc3M9XCJudW1iZXItaW5mb19fdGl0bGUtc3ViXCI+PG5nLWNvbnRhaW5lciAqbmdJZj1cIl9zdWJUaXRsZTsgZWxzZSBfc3ViVGl0bGVUcGxcIj57e19zdWJUaXRsZX19PC9uZy1jb250YWluZXI+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJudW1iZXItaW5mb19fdmFsdWVcIiBbbmdTdHlsZV09XCJ7J21hcmdpbi10b3AucHgnOiBnYXB9XCI+XG4gICAgPHNwYW4gY2xhc3M9XCJudW1iZXItaW5mb19fdmFsdWUtdGV4dFwiPjxuZy1jb250YWluZXIgKm5nSWY9XCJfdG90YWw7IGVsc2UgX3RvdGFsVHBsXCI+e3tfdG90YWx9fTwvbmctY29udGFpbmVyPjxlbSBjbGFzcz1cIm51bWJlci1pbmZvX192YWx1ZS1zdWZmaXhcIiAqbmdJZj1cInN1ZmZpeFwiPnt7c3VmZml4fX08L2VtPjwvc3Bhbj5cbiAgICA8c3BhbiAqbmdJZj1cInN0YXR1cyB8fCBfaXNTdWJUb3RhbFwiIGNsYXNzPVwibnVtYmVyLWluZm9fX3ZhbHVlLXRleHQgbnVtYmVyLWluZm9fX3ZhbHVlLXN1YlwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIl9zdWJUb3RhbDsgZWxzZSBfc3ViVG90YWxUcGxcIj57e19zdWJUb3RhbH19PC9uZy1jb250YWluZXI+XG4gICAgICA8aSAqbmdJZj1cInN0YXR1c1wiIG56LWljb24gdHlwZT1cImNhcmV0LXt7c3RhdHVzfX1cIj48L2k+XG4gICAgPC9zcGFuPlxuICA8L2Rpdj5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOdW1iZXJJbmZvQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgX3RpdGxlID0gJyc7XG4gIF90aXRsZVRwbDogVGVtcGxhdGVSZWY8YW55PjtcbiAgLyoqIMOmwqDCh8OpwqLCmCAqL1xuICBASW5wdXQoKVxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5fdGl0bGUgPSBudWxsO1xuICAgICAgdGhpcy5fdGl0bGVUcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2UgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgfVxuXG4gIF9zdWJUaXRsZSA9ICcnO1xuICBfc3ViVGl0bGVUcGw6IFRlbXBsYXRlUmVmPGFueT47XG4gIC8qKiDDpcKtwpDDpsKgwofDqcKiwpggKi9cbiAgQElucHV0KClcbiAgc2V0IHN1YlRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX3N1YlRpdGxlID0gbnVsbDtcbiAgICAgIHRoaXMuX3N1YlRpdGxlVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHRoaXMuX3N1YlRpdGxlID0gdmFsdWU7XG4gIH1cblxuICBfdG90YWwgPSAnJztcbiAgX3RvdGFsVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvKiogw6bCgMK7w6nCh8KPICovXG4gIEBJbnB1dCgpXG4gIHNldCB0b3RhbCh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl90b3RhbCA9IG51bGw7XG4gICAgICB0aGlzLl90b3RhbFRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB0aGlzLl90b3RhbCA9ICcnICsgdmFsdWU7XG4gIH1cblxuICBfaXNTdWJUb3RhbCA9IGZhbHNlO1xuICBfc3ViVG90YWwgPSAnJztcbiAgX3N1YlRvdGFsVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvKiogw6bCgMK7w6nCh8KPw6XCkMKOw6fCvMKAICovXG4gIEBJbnB1dCgpXG4gIHNldCBzdWJUb3RhbCh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl9zdWJUb3RhbCA9IG51bGw7XG4gICAgICB0aGlzLl9zdWJUb3RhbFRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB0aGlzLl9zdWJUb3RhbCA9IHZhbHVlO1xuXG4gICAgdGhpcy5faXNTdWJUb3RhbCA9ICEhdmFsdWU7XG4gIH1cblxuICAvKiogw6XCrcKQw6bCgMK7w6nCh8KPICovXG4gIEBJbnB1dCgpXG4gIHN1ZmZpeDogc3RyaW5nO1xuXG4gIC8qKiDDpcKiwp7DpcKKwqDDp8KKwrbDpsKAwoEgKi9cbiAgQElucHV0KClcbiAgc3RhdHVzOiAndXAnIHwgJ2Rvd24nO1xuXG4gIC8qKiDDp8KKwrbDpsKAwoHDpsKgwrfDpcK8wo8gKi9cbiAgQElucHV0KClcbiAgdGhlbWU6ICdsaWdodCcgfCAnZGVmYXVsdCcgPSAnbGlnaHQnO1xuXG4gIC8qKiDDqMKuwr7Dp8K9wq7DpsKVwrDDpcKtwpfDpcKSwozDpsKPwo/DqMK/wrDDp8KbwrTDpsKOwqXDp8KawoTDqcKXwrTDqMK3wp3Dr8K8wojDpcKDwo/Dp8K0wqDDr8K8wokgKi9cbiAgQElucHV0KClcbiAgZ2V0IGdhcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2FwO1xuICB9XG4gIHNldCBnYXAodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX2dhcCA9IHRvTnVtYmVyKHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9nYXAgPSA4O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICApIHt9XG5cbiAgX2NsYXNzTWFwOiBzdHJpbmdbXSA9IFtdO1xuICBzZXRDbGFzcygpIHtcbiAgICB1cGRhdGVIb3N0Q2xhc3MoXG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLnJlbmRlcmVyLFxuICAgICAge1xuICAgICAgICAnbnVtYmVyLWluZm8nOiB0cnVlLFxuICAgICAgICBbYG51bWJlci1pbmZvX18ke3RoaXMudGhlbWV9YF06IHRydWVcbiAgICAgIH0sXG4gICAgICB0cnVlLFxuICAgICk7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdab3Jyb0FudGRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcbmltcG9ydCB7IERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgTnVtYmVySW5mb0NvbXBvbmVudCB9IGZyb20gJy4vbnVtYmVyLWluZm8uY29tcG9uZW50JztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtOdW1iZXJJbmZvQ29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTmdab3Jyb0FudGRNb2R1bGUsIERlbG9uVXRpbE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFNdLFxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXG59KVxuZXhwb3J0IGNsYXNzIE51bWJlckluZm9Nb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4geyBuZ01vZHVsZTogTnVtYmVySW5mb01vZHVsZSwgcHJvdmlkZXJzOiBbXSB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsTUE0QmEsbUJBQW1COzs7Ozs7SUFzRTlCLFlBQ1UsRUFBYyxFQUNkLFFBQW1CLEVBQ25CLEVBQXFCO1FBRnJCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBeEUvQixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBV1osY0FBUyxHQUFHLEVBQUUsQ0FBQztRQVdmLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFXWixnQkFBVyxHQUFHLEtBQUss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