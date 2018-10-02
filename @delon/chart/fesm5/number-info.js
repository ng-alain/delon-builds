import { Component, TemplateRef, Input, ElementRef, Renderer2, ChangeDetectorRef, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { toNumber, updateHostClass, DelonUtilModule } from '@delon/util';
import { __spread } from 'tslib';
import { CommonModule } from '@angular/common';

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
                    template: "\n  <div *ngIf=\"_title || _titleTpl\" class=\"number-info__title\"><ng-container *ngIf=\"_title; else _titleTpl\">{{_title}}</ng-container></div>\n  <div *ngIf=\"_subTitle || _subTitleTpl\" class=\"number-info__title-sub\"><ng-container *ngIf=\"_subTitle; else _subTitleTpl\">{{_subTitle}}</ng-container></div>\n  <div class=\"number-info__value\" [ngStyle]=\"{'margin-top.px': gap}\">\n    <span class=\"number-info__value-text\"><ng-container *ngIf=\"_total; else _totalTpl\">{{_total}}</ng-container><em class=\"number-info__value-suffix\" *ngIf=\"suffix\">{{suffix}}</em></span>\n    <span *ngIf=\"status || _isSubTotal\" class=\"number-info__value-text number-info__value-sub\">\n      <ng-container *ngIf=\"_subTotal; else _subTotalTpl\">{{_subTotal}}</ng-container>\n      <i *ngIf=\"status\" class=\"anticon anticon-caret-{{status}}\"></i>\n    </span>\n  </div>\n  ",
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
                    imports: [CommonModule, DelonUtilModule],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWluZm8uanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9jaGFydC9udW1iZXItaW5mby9udW1iZXItaW5mby5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9jaGFydC9udW1iZXItaW5mby9udW1iZXItaW5mby5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgSW5wdXQsXHJcbiAgRWxlbWVudFJlZixcclxuICBSZW5kZXJlcjIsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0b051bWJlciwgdXBkYXRlSG9zdENsYXNzIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudW1iZXItaW5mbycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8ZGl2ICpuZ0lmPVwiX3RpdGxlIHx8IF90aXRsZVRwbFwiIGNsYXNzPVwibnVtYmVyLWluZm9fX3RpdGxlXCI+PG5nLWNvbnRhaW5lciAqbmdJZj1cIl90aXRsZTsgZWxzZSBfdGl0bGVUcGxcIj57e190aXRsZX19PC9uZy1jb250YWluZXI+PC9kaXY+XHJcbiAgPGRpdiAqbmdJZj1cIl9zdWJUaXRsZSB8fCBfc3ViVGl0bGVUcGxcIiBjbGFzcz1cIm51bWJlci1pbmZvX190aXRsZS1zdWJcIj48bmctY29udGFpbmVyICpuZ0lmPVwiX3N1YlRpdGxlOyBlbHNlIF9zdWJUaXRsZVRwbFwiPnt7X3N1YlRpdGxlfX08L25nLWNvbnRhaW5lcj48L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwibnVtYmVyLWluZm9fX3ZhbHVlXCIgW25nU3R5bGVdPVwieydtYXJnaW4tdG9wLnB4JzogZ2FwfVwiPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJudW1iZXItaW5mb19fdmFsdWUtdGV4dFwiPjxuZy1jb250YWluZXIgKm5nSWY9XCJfdG90YWw7IGVsc2UgX3RvdGFsVHBsXCI+e3tfdG90YWx9fTwvbmctY29udGFpbmVyPjxlbSBjbGFzcz1cIm51bWJlci1pbmZvX192YWx1ZS1zdWZmaXhcIiAqbmdJZj1cInN1ZmZpeFwiPnt7c3VmZml4fX08L2VtPjwvc3Bhbj5cclxuICAgIDxzcGFuICpuZ0lmPVwic3RhdHVzIHx8IF9pc1N1YlRvdGFsXCIgY2xhc3M9XCJudW1iZXItaW5mb19fdmFsdWUtdGV4dCBudW1iZXItaW5mb19fdmFsdWUtc3ViXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJfc3ViVG90YWw7IGVsc2UgX3N1YlRvdGFsVHBsXCI+e3tfc3ViVG90YWx9fTwvbmctY29udGFpbmVyPlxyXG4gICAgICA8aSAqbmdJZj1cInN0YXR1c1wiIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLWNhcmV0LXt7c3RhdHVzfX1cIj48L2k+XHJcbiAgICA8L3NwYW4+XHJcbiAgPC9kaXY+XHJcbiAgYCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIE51bWJlckluZm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIF90aXRsZSA9ICcnO1xyXG4gIF90aXRsZVRwbDogVGVtcGxhdGVSZWY8YW55PjtcclxuICAvKiogw6bCoMKHw6nCosKYICovXHJcbiAgQElucHV0KClcclxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMuX3RpdGxlID0gbnVsbDtcclxuICAgICAgdGhpcy5fdGl0bGVUcGwgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB0aGlzLl90aXRsZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgX3N1YlRpdGxlID0gJyc7XHJcbiAgX3N1YlRpdGxlVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIC8qKiDDpcKtwpDDpsKgwofDqcKiwpggKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBzdWJUaXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy5fc3ViVGl0bGUgPSBudWxsO1xyXG4gICAgICB0aGlzLl9zdWJUaXRsZVRwbCA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHRoaXMuX3N1YlRpdGxlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBfdG90YWwgPSAnJztcclxuICBfdG90YWxUcGw6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgLyoqIMOmwoDCu8OpwofCjyAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHRvdGFsKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLl90b3RhbCA9IG51bGw7XHJcbiAgICAgIHRoaXMuX3RvdGFsVHBsID0gdmFsdWU7XHJcbiAgICB9IGVsc2UgdGhpcy5fdG90YWwgPSAnJyArIHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgX2lzU3ViVG90YWwgPSBmYWxzZTtcclxuICBfc3ViVG90YWwgPSAnJztcclxuICBfc3ViVG90YWxUcGw6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgLyoqIMOmwoDCu8OpwofCj8OlwpDCjsOnwrzCgCAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHN1YlRvdGFsKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLl9zdWJUb3RhbCA9IG51bGw7XHJcbiAgICAgIHRoaXMuX3N1YlRvdGFsVHBsID0gdmFsdWU7XHJcbiAgICB9IGVsc2UgdGhpcy5fc3ViVG90YWwgPSB2YWx1ZTtcclxuXHJcbiAgICB0aGlzLl9pc1N1YlRvdGFsID0gISF2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKiDDpcKtwpDDpsKAwrvDqcKHwo8gKi9cclxuICBASW5wdXQoKVxyXG4gIHN1ZmZpeDogc3RyaW5nO1xyXG5cclxuICAvKiogw6XCosKew6XCisKgw6fCisK2w6bCgMKBICovXHJcbiAgQElucHV0KClcclxuICBzdGF0dXM6ICd1cCcgfCAnZG93bic7XHJcblxyXG4gIC8qKiDDp8KKwrbDpsKAwoHDpsKgwrfDpcK8wo8gKi9cclxuICBASW5wdXQoKVxyXG4gIHRoZW1lOiAnbGlnaHQnIHwgJ2RlZmF1bHQnID0gJ2xpZ2h0JztcclxuXHJcbiAgLyoqIMOowq7CvsOnwr3CrsOmwpXCsMOlwq3Cl8OlwpLCjMOmwo/Cj8Oowr/CsMOnwpvCtMOmwo7CpcOnwprChMOpwpfCtMOowrfCncOvwrzCiMOlwoPCj8OnwrTCoMOvwrzCiSAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGdhcCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9nYXA7XHJcbiAgfVxyXG4gIHNldCBnYXAodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5fZ2FwID0gdG9OdW1iZXIodmFsdWUpO1xyXG4gIH1cclxuICBwcml2YXRlIF9nYXAgPSA4O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICApIHt9XHJcblxyXG4gIF9jbGFzc01hcDogc3RyaW5nW10gPSBbXTtcclxuICBzZXRDbGFzcygpIHtcclxuICAgIHVwZGF0ZUhvc3RDbGFzcyhcclxuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICB0aGlzLnJlbmRlcmVyLFxyXG4gICAgICB7XHJcbiAgICAgICAgJ251bWJlci1pbmZvJzogdHJ1ZSxcclxuICAgICAgICBbYG51bWJlci1pbmZvX18ke3RoaXMudGhlbWV9YF06IHRydWVcclxuICAgICAgfSxcclxuICAgICAgdHJ1ZSxcclxuICAgICk7XHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzcygpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBEZWxvblV0aWxNb2R1bGUgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBOdW1iZXJJbmZvQ29tcG9uZW50IH0gZnJvbSAnLi9udW1iZXItaW5mby5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgQ09NUE9ORU5UUyA9IFtOdW1iZXJJbmZvQ29tcG9uZW50XTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRGVsb25VdGlsTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcclxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOdW1iZXJJbmZvTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7IG5nTW9kdWxlOiBOdW1iZXJJbmZvTW9kdWxlLCBwcm92aWRlcnM6IFtdIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtJQWtHRSw2QkFDVSxJQUNB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