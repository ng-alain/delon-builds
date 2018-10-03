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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWluZm8uanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9jaGFydC9udW1iZXItaW5mby9udW1iZXItaW5mby5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9jaGFydC9udW1iZXItaW5mby9udW1iZXItaW5mby5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBUZW1wbGF0ZVJlZixcbiAgSW5wdXQsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbiAgT25DaGFuZ2VzLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdG9OdW1iZXIsIHVwZGF0ZUhvc3RDbGFzcyB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnVtYmVyLWluZm8nLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2ICpuZ0lmPVwiX3RpdGxlIHx8IF90aXRsZVRwbFwiIGNsYXNzPVwibnVtYmVyLWluZm9fX3RpdGxlXCI+PG5nLWNvbnRhaW5lciAqbmdJZj1cIl90aXRsZTsgZWxzZSBfdGl0bGVUcGxcIj57e190aXRsZX19PC9uZy1jb250YWluZXI+PC9kaXY+XG4gIDxkaXYgKm5nSWY9XCJfc3ViVGl0bGUgfHwgX3N1YlRpdGxlVHBsXCIgY2xhc3M9XCJudW1iZXItaW5mb19fdGl0bGUtc3ViXCI+PG5nLWNvbnRhaW5lciAqbmdJZj1cIl9zdWJUaXRsZTsgZWxzZSBfc3ViVGl0bGVUcGxcIj57e19zdWJUaXRsZX19PC9uZy1jb250YWluZXI+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJudW1iZXItaW5mb19fdmFsdWVcIiBbbmdTdHlsZV09XCJ7J21hcmdpbi10b3AucHgnOiBnYXB9XCI+XG4gICAgPHNwYW4gY2xhc3M9XCJudW1iZXItaW5mb19fdmFsdWUtdGV4dFwiPjxuZy1jb250YWluZXIgKm5nSWY9XCJfdG90YWw7IGVsc2UgX3RvdGFsVHBsXCI+e3tfdG90YWx9fTwvbmctY29udGFpbmVyPjxlbSBjbGFzcz1cIm51bWJlci1pbmZvX192YWx1ZS1zdWZmaXhcIiAqbmdJZj1cInN1ZmZpeFwiPnt7c3VmZml4fX08L2VtPjwvc3Bhbj5cbiAgICA8c3BhbiAqbmdJZj1cInN0YXR1cyB8fCBfaXNTdWJUb3RhbFwiIGNsYXNzPVwibnVtYmVyLWluZm9fX3ZhbHVlLXRleHQgbnVtYmVyLWluZm9fX3ZhbHVlLXN1YlwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIl9zdWJUb3RhbDsgZWxzZSBfc3ViVG90YWxUcGxcIj57e19zdWJUb3RhbH19PC9uZy1jb250YWluZXI+XG4gICAgICA8aSAqbmdJZj1cInN0YXR1c1wiIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLWNhcmV0LXt7c3RhdHVzfX1cIj48L2k+XG4gICAgPC9zcGFuPlxuICA8L2Rpdj5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOdW1iZXJJbmZvQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgX3RpdGxlID0gJyc7XG4gIF90aXRsZVRwbDogVGVtcGxhdGVSZWY8YW55PjtcbiAgLyoqIMOmwqDCh8OpwqLCmCAqL1xuICBASW5wdXQoKVxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5fdGl0bGUgPSBudWxsO1xuICAgICAgdGhpcy5fdGl0bGVUcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2UgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgfVxuXG4gIF9zdWJUaXRsZSA9ICcnO1xuICBfc3ViVGl0bGVUcGw6IFRlbXBsYXRlUmVmPGFueT47XG4gIC8qKiDDpcKtwpDDpsKgwofDqcKiwpggKi9cbiAgQElucHV0KClcbiAgc2V0IHN1YlRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX3N1YlRpdGxlID0gbnVsbDtcbiAgICAgIHRoaXMuX3N1YlRpdGxlVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHRoaXMuX3N1YlRpdGxlID0gdmFsdWU7XG4gIH1cblxuICBfdG90YWwgPSAnJztcbiAgX3RvdGFsVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvKiogw6bCgMK7w6nCh8KPICovXG4gIEBJbnB1dCgpXG4gIHNldCB0b3RhbCh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl90b3RhbCA9IG51bGw7XG4gICAgICB0aGlzLl90b3RhbFRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB0aGlzLl90b3RhbCA9ICcnICsgdmFsdWU7XG4gIH1cblxuICBfaXNTdWJUb3RhbCA9IGZhbHNlO1xuICBfc3ViVG90YWwgPSAnJztcbiAgX3N1YlRvdGFsVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvKiogw6bCgMK7w6nCh8KPw6XCkMKOw6fCvMKAICovXG4gIEBJbnB1dCgpXG4gIHNldCBzdWJUb3RhbCh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl9zdWJUb3RhbCA9IG51bGw7XG4gICAgICB0aGlzLl9zdWJUb3RhbFRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB0aGlzLl9zdWJUb3RhbCA9IHZhbHVlO1xuXG4gICAgdGhpcy5faXNTdWJUb3RhbCA9ICEhdmFsdWU7XG4gIH1cblxuICAvKiogw6XCrcKQw6bCgMK7w6nCh8KPICovXG4gIEBJbnB1dCgpXG4gIHN1ZmZpeDogc3RyaW5nO1xuXG4gIC8qKiDDpcKiwp7DpcKKwqDDp8KKwrbDpsKAwoEgKi9cbiAgQElucHV0KClcbiAgc3RhdHVzOiAndXAnIHwgJ2Rvd24nO1xuXG4gIC8qKiDDp8KKwrbDpsKAwoHDpsKgwrfDpcK8wo8gKi9cbiAgQElucHV0KClcbiAgdGhlbWU6ICdsaWdodCcgfCAnZGVmYXVsdCcgPSAnbGlnaHQnO1xuXG4gIC8qKiDDqMKuwr7Dp8K9wq7DpsKVwrDDpcKtwpfDpcKSwozDpsKPwo/DqMK/wrDDp8KbwrTDpsKOwqXDp8KawoTDqcKXwrTDqMK3wp3Dr8K8wojDpcKDwo/Dp8K0wqDDr8K8wokgKi9cbiAgQElucHV0KClcbiAgZ2V0IGdhcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2FwO1xuICB9XG4gIHNldCBnYXAodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX2dhcCA9IHRvTnVtYmVyKHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9nYXAgPSA4O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICApIHt9XG5cbiAgX2NsYXNzTWFwOiBzdHJpbmdbXSA9IFtdO1xuICBzZXRDbGFzcygpIHtcbiAgICB1cGRhdGVIb3N0Q2xhc3MoXG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLnJlbmRlcmVyLFxuICAgICAge1xuICAgICAgICAnbnVtYmVyLWluZm8nOiB0cnVlLFxuICAgICAgICBbYG51bWJlci1pbmZvX18ke3RoaXMudGhlbWV9YF06IHRydWVcbiAgICAgIH0sXG4gICAgICB0cnVlLFxuICAgICk7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQgeyBOdW1iZXJJbmZvQ29tcG9uZW50IH0gZnJvbSAnLi9udW1iZXItaW5mby5jb21wb25lbnQnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW051bWJlckluZm9Db21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBEZWxvblV0aWxNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxufSlcbmV4cG9ydCBjbGFzcyBOdW1iZXJJbmZvTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IE51bWJlckluZm9Nb2R1bGUsIHByb3ZpZGVyczogW10gfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0lBa0dFLDZCQUNVLElBQ0EsVUFDQTtRQUZBLE9BQUUsR0FBRixFQUFFO1FBQ0YsYUFBUSxHQUFSLFFBQVE7UUFDUixPQUFFLEdBQUYsRUFBRTtzQkF4RUgsRUFBRTt5QkFXQyxFQUFFO3NCQVdMLEVBQUU7MkJBV0csS0FBSzt5QkFDUCxFQUFFOzs7O3FCQXVCZSxPQUFPO29CQVVyQixDQUFDO3lCQVFNLEVBQUU7S0FGcEI7SUF0RUosc0JBQ0ksc0NBQUs7Ozs7Ozs7UUFEVCxVQUNVLEtBQWdDO1lBQ3hDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25C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