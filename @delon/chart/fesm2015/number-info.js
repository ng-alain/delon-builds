import { Component, TemplateRef, Input, ElementRef, Renderer2, ChangeDetectorRef, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { toNumber, updateHostClass, DelonUtilModule } from '@delon/util';

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
                imports: [CommonModule, NgZorroAntdModule, DelonUtilModule],
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

//# sourceMappingURL=number-info.js.map