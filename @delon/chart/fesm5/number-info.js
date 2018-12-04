import { __spread } from 'tslib';
import { Component, TemplateRef, Input, ElementRef, Renderer2, ChangeDetectorRef, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { toNumber, updateHostClass, DelonUtilModule } from '@delon/util';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NumberInfoComponent = /** @class */ (function () {
    function NumberInfoComponent(el, renderer, cd) {
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
    Object.defineProperty(NumberInfoComponent.prototype, "title", {
        /** 标题 */
        set: /**
         * 标题
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this._title = null;
                this._titleTpl = value;
            }
            else
                this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberInfoComponent.prototype, "subTitle", {
        /** 子标题 */
        set: /**
         * 子标题
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this._subTitle = null;
                this._subTitleTpl = value;
            }
            else
                this._subTitle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberInfoComponent.prototype, "total", {
        /** 总量 */
        set: /**
         * 总量
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this._total = null;
                this._totalTpl = value;
            }
            else
                this._total = '' + value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberInfoComponent.prototype, "subTotal", {
        /** 总量后缀 */
        set: /**
         * 总量后缀
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this._subTotal = null;
                this._subTotalTpl = value;
            }
            else
                this._subTotal = value;
            this._isSubTotal = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberInfoComponent.prototype, "gap", {
        /** 设置数字和描述直接的间距（像素） */
        get: /**
         * 设置数字和描述直接的间距（像素）
         * @return {?}
         */
        function () {
            return this._gap;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._gap = toNumber(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NumberInfoComponent.prototype.setClass = /**
     * @return {?}
     */
    function () {
        var _a;
        updateHostClass(this.el.nativeElement, this.renderer, (_a = {
                'number-info': true
            },
            _a["number-info__" + this.theme] = true,
            _a), true);
        this.cd.detectChanges();
    };
    /**
     * @return {?}
     */
    NumberInfoComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.setClass();
    };
    NumberInfoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'number-info',
                    template: "\n  <div *ngIf=\"_title || _titleTpl\" class=\"number-info__title\"><ng-container *ngIf=\"_title; else _titleTpl\">{{_title}}</ng-container></div>\n  <div *ngIf=\"_subTitle || _subTitleTpl\" class=\"number-info__title-sub\"><ng-container *ngIf=\"_subTitle; else _subTitleTpl\">{{_subTitle}}</ng-container></div>\n  <div class=\"number-info__value\" [ngStyle]=\"{'margin-top.px': gap}\">\n    <span class=\"number-info__value-text\"><ng-container *ngIf=\"_total; else _totalTpl\">{{_total}}</ng-container><em class=\"number-info__value-suffix\" *ngIf=\"suffix\">{{suffix}}</em></span>\n    <span *ngIf=\"status || _isSubTotal\" class=\"number-info__value-text number-info__value-sub\">\n      <ng-container *ngIf=\"_subTotal; else _subTotalTpl\">{{_subTotal}}</ng-container>\n      <i *ngIf=\"status\" nz-icon type=\"caret-{{status}}\"></i>\n    </span>\n  </div>\n  ",
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NumberInfoComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
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
    return NumberInfoComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [NumberInfoComponent];
var NumberInfoModule = /** @class */ (function () {
    function NumberInfoModule() {
    }
    /**
     * @return {?}
     */
    NumberInfoModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: NumberInfoModule, providers: [] };
    };
    NumberInfoModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, NgZorroAntdModule, DelonUtilModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return NumberInfoModule;
}());

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