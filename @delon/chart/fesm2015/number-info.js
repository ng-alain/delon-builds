import { __decorate, __metadata } from 'tslib';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, TemplateRef, NgModule } from '@angular/core';
import { updateHostClass, InputNumber, DelonUtilModule } from '@delon/util';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class NumberInfoComponent {
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
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], NumberInfoComponent.prototype, "gap", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [NumberInfoComponent];
class NumberInfoModule {
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

//# sourceMappingURL=number-info.js.map