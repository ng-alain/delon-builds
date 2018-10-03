/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, TemplateRef, Input, ElementRef, Renderer2, ChangeDetectorRef, ChangeDetectionStrategy, } from '@angular/core';
import { toNumber, updateHostClass } from '@delon/util';
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
export { NumberInfoComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWluZm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L251bWJlci1pbmZvLyIsInNvdXJjZXMiOlsibnVtYmVyLWluZm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEVBQ0wsVUFBVSxFQUNWLFNBQVMsRUFFVCxpQkFBaUIsRUFDakIsdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDOztJQXdGdEQsNkJBQ1UsSUFDQSxVQUNBO1FBRkEsT0FBRSxHQUFGLEVBQUU7UUFDRixhQUFRLEdBQVIsUUFBUTtRQUNSLE9BQUUsR0FBRixFQUFFO3NCQXhFSCxFQUFFO3lCQVdDLEVBQUU7c0JBV0wsRUFBRTsyQkFXRyxLQUFLO3lCQUNQLEVBQUU7Ozs7cUJBdUJlLE9BQU87b0JBVXJCLENBQUM7eUJBUU0sRUFBRTtLQUZwQjtJQXRFSixzQkFDSSxzQ0FBSztRQUZULFNBQVM7Ozs7OztRQUNULFVBQ1UsS0FBZ0M7WUFDeEMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDeEI7O2dCQUFNLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQzVCOzs7T0FBQTtJQUtELHNCQUNJLHlDQUFRO1FBRlosVUFBVTs7Ozs7O1FBQ1YsVUFDYSxLQUFnQztZQUMzQyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQzthQUMzQjs7Z0JBQU0sSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDL0I7OztPQUFBO0lBS0Qsc0JBQ0ksc0NBQUs7UUFGVCxTQUFTOzs7Ozs7UUFDVCxVQUNVLEtBQWdDO1lBQ3hDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2FBQ3hCOztnQkFBTSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUM7U0FDakM7OztPQUFBO0lBTUQsc0JBQ0kseUNBQVE7UUFGWixXQUFXOzs7Ozs7UUFDWCxVQUNhLEtBQWdDO1lBQzNDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2FBQzNCOztnQkFBTSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUU5QixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDNUI7OztPQUFBO0lBZUQsc0JBQ0ksb0NBQUc7UUFGUCx1QkFBdUI7Ozs7O1FBQ3ZCO1lBRUUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ2xCOzs7OztRQUNELFVBQVEsS0FBVTtZQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3Qjs7O09BSEE7Ozs7SUFhRCxzQ0FBUTs7O0lBQVI7O1FBQ0UsZUFBZSxDQUNiLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUNyQixJQUFJLENBQUMsUUFBUTtnQkFFWCxhQUFhLEVBQUUsSUFBSTs7WUFDbkIsR0FBQyxrQkFBZ0IsSUFBSSxDQUFDLEtBQU8sSUFBRyxJQUFJO2lCQUV0QyxJQUFJLENBQ0wsQ0FBQztRQUNGLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDekI7Ozs7SUFFRCx5Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDakI7O2dCQTVHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSw2MkJBVVQ7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQXZCQyxVQUFVO2dCQUNWLFNBQVM7Z0JBRVQsaUJBQWlCOzs7d0JBeUJoQixLQUFLOzJCQVdMLEtBQUs7d0JBV0wsS0FBSzsyQkFZTCxLQUFLO3lCQVdMLEtBQUs7eUJBSUwsS0FBSzt3QkFJTCxLQUFLO3NCQUlMLEtBQUs7OzhCQXpGUjs7U0E0QmEsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBUZW1wbGF0ZVJlZixcbiAgSW5wdXQsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbiAgT25DaGFuZ2VzLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdG9OdW1iZXIsIHVwZGF0ZUhvc3RDbGFzcyB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnVtYmVyLWluZm8nLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2ICpuZ0lmPVwiX3RpdGxlIHx8IF90aXRsZVRwbFwiIGNsYXNzPVwibnVtYmVyLWluZm9fX3RpdGxlXCI+PG5nLWNvbnRhaW5lciAqbmdJZj1cIl90aXRsZTsgZWxzZSBfdGl0bGVUcGxcIj57e190aXRsZX19PC9uZy1jb250YWluZXI+PC9kaXY+XG4gIDxkaXYgKm5nSWY9XCJfc3ViVGl0bGUgfHwgX3N1YlRpdGxlVHBsXCIgY2xhc3M9XCJudW1iZXItaW5mb19fdGl0bGUtc3ViXCI+PG5nLWNvbnRhaW5lciAqbmdJZj1cIl9zdWJUaXRsZTsgZWxzZSBfc3ViVGl0bGVUcGxcIj57e19zdWJUaXRsZX19PC9uZy1jb250YWluZXI+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJudW1iZXItaW5mb19fdmFsdWVcIiBbbmdTdHlsZV09XCJ7J21hcmdpbi10b3AucHgnOiBnYXB9XCI+XG4gICAgPHNwYW4gY2xhc3M9XCJudW1iZXItaW5mb19fdmFsdWUtdGV4dFwiPjxuZy1jb250YWluZXIgKm5nSWY9XCJfdG90YWw7IGVsc2UgX3RvdGFsVHBsXCI+e3tfdG90YWx9fTwvbmctY29udGFpbmVyPjxlbSBjbGFzcz1cIm51bWJlci1pbmZvX192YWx1ZS1zdWZmaXhcIiAqbmdJZj1cInN1ZmZpeFwiPnt7c3VmZml4fX08L2VtPjwvc3Bhbj5cbiAgICA8c3BhbiAqbmdJZj1cInN0YXR1cyB8fCBfaXNTdWJUb3RhbFwiIGNsYXNzPVwibnVtYmVyLWluZm9fX3ZhbHVlLXRleHQgbnVtYmVyLWluZm9fX3ZhbHVlLXN1YlwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIl9zdWJUb3RhbDsgZWxzZSBfc3ViVG90YWxUcGxcIj57e19zdWJUb3RhbH19PC9uZy1jb250YWluZXI+XG4gICAgICA8aSAqbmdJZj1cInN0YXR1c1wiIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLWNhcmV0LXt7c3RhdHVzfX1cIj48L2k+XG4gICAgPC9zcGFuPlxuICA8L2Rpdj5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOdW1iZXJJbmZvQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgX3RpdGxlID0gJyc7XG4gIF90aXRsZVRwbDogVGVtcGxhdGVSZWY8YW55PjtcbiAgLyoqIOagh+mimCAqL1xuICBASW5wdXQoKVxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5fdGl0bGUgPSBudWxsO1xuICAgICAgdGhpcy5fdGl0bGVUcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2UgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgfVxuXG4gIF9zdWJUaXRsZSA9ICcnO1xuICBfc3ViVGl0bGVUcGw6IFRlbXBsYXRlUmVmPGFueT47XG4gIC8qKiDlrZDmoIfpopggKi9cbiAgQElucHV0KClcbiAgc2V0IHN1YlRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX3N1YlRpdGxlID0gbnVsbDtcbiAgICAgIHRoaXMuX3N1YlRpdGxlVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHRoaXMuX3N1YlRpdGxlID0gdmFsdWU7XG4gIH1cblxuICBfdG90YWwgPSAnJztcbiAgX3RvdGFsVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvKiog5oC76YePICovXG4gIEBJbnB1dCgpXG4gIHNldCB0b3RhbCh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl90b3RhbCA9IG51bGw7XG4gICAgICB0aGlzLl90b3RhbFRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB0aGlzLl90b3RhbCA9ICcnICsgdmFsdWU7XG4gIH1cblxuICBfaXNTdWJUb3RhbCA9IGZhbHNlO1xuICBfc3ViVG90YWwgPSAnJztcbiAgX3N1YlRvdGFsVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvKiog5oC76YeP5ZCO57yAICovXG4gIEBJbnB1dCgpXG4gIHNldCBzdWJUb3RhbCh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl9zdWJUb3RhbCA9IG51bGw7XG4gICAgICB0aGlzLl9zdWJUb3RhbFRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB0aGlzLl9zdWJUb3RhbCA9IHZhbHVlO1xuXG4gICAgdGhpcy5faXNTdWJUb3RhbCA9ICEhdmFsdWU7XG4gIH1cblxuICAvKiog5a2Q5oC76YePICovXG4gIEBJbnB1dCgpXG4gIHN1ZmZpeDogc3RyaW5nO1xuXG4gIC8qKiDlop7liqDnirbmgIEgKi9cbiAgQElucHV0KClcbiAgc3RhdHVzOiAndXAnIHwgJ2Rvd24nO1xuXG4gIC8qKiDnirbmgIHmoLflvI8gKi9cbiAgQElucHV0KClcbiAgdGhlbWU6ICdsaWdodCcgfCAnZGVmYXVsdCcgPSAnbGlnaHQnO1xuXG4gIC8qKiDorr7nva7mlbDlrZflkozmj4/ov7Dnm7TmjqXnmoTpl7Tot53vvIjlg4/ntKDvvIkgKi9cbiAgQElucHV0KClcbiAgZ2V0IGdhcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2FwO1xuICB9XG4gIHNldCBnYXAodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX2dhcCA9IHRvTnVtYmVyKHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9nYXAgPSA4O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICApIHt9XG5cbiAgX2NsYXNzTWFwOiBzdHJpbmdbXSA9IFtdO1xuICBzZXRDbGFzcygpIHtcbiAgICB1cGRhdGVIb3N0Q2xhc3MoXG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLnJlbmRlcmVyLFxuICAgICAge1xuICAgICAgICAnbnVtYmVyLWluZm8nOiB0cnVlLFxuICAgICAgICBbYG51bWJlci1pbmZvX18ke3RoaXMudGhlbWV9YF06IHRydWVcbiAgICAgIH0sXG4gICAgICB0cnVlLFxuICAgICk7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzKCk7XG4gIH1cbn1cbiJdfQ==