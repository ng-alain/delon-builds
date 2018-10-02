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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWluZm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L251bWJlci1pbmZvLyIsInNvdXJjZXMiOlsibnVtYmVyLWluZm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEVBQ0wsVUFBVSxFQUNWLFNBQVMsRUFFVCxpQkFBaUIsRUFDakIsdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDOztJQXdGdEQsNkJBQ1UsSUFDQSxVQUNBO1FBRkEsT0FBRSxHQUFGLEVBQUU7UUFDRixhQUFRLEdBQVIsUUFBUTtRQUNSLE9BQUUsR0FBRixFQUFFO3NCQXhFSCxFQUFFO3lCQVdDLEVBQUU7c0JBV0wsRUFBRTsyQkFXRyxLQUFLO3lCQUNQLEVBQUU7Ozs7cUJBdUJlLE9BQU87b0JBVXJCLENBQUM7eUJBUU0sRUFBRTtLQUZwQjtJQXRFSixzQkFDSSxzQ0FBSztRQUZULFNBQVM7Ozs7OztRQUNULFVBQ1UsS0FBZ0M7WUFDeEMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDeEI7O2dCQUFNLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQzVCOzs7T0FBQTtJQUtELHNCQUNJLHlDQUFRO1FBRlosVUFBVTs7Ozs7O1FBQ1YsVUFDYSxLQUFnQztZQUMzQyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQzthQUMzQjs7Z0JBQU0sSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDL0I7OztPQUFBO0lBS0Qsc0JBQ0ksc0NBQUs7UUFGVCxTQUFTOzs7Ozs7UUFDVCxVQUNVLEtBQWdDO1lBQ3hDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2FBQ3hCOztnQkFBTSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUM7U0FDakM7OztPQUFBO0lBTUQsc0JBQ0kseUNBQVE7UUFGWixXQUFXOzs7Ozs7UUFDWCxVQUNhLEtBQWdDO1lBQzNDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2FBQzNCOztnQkFBTSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUU5QixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDNUI7OztPQUFBO0lBZUQsc0JBQ0ksb0NBQUc7UUFGUCx1QkFBdUI7Ozs7O1FBQ3ZCO1lBRUUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ2xCOzs7OztRQUNELFVBQVEsS0FBVTtZQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3Qjs7O09BSEE7Ozs7SUFhRCxzQ0FBUTs7O0lBQVI7O1FBQ0UsZUFBZSxDQUNiLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUNyQixJQUFJLENBQUMsUUFBUTtnQkFFWCxhQUFhLEVBQUUsSUFBSTs7WUFDbkIsR0FBQyxrQkFBZ0IsSUFBSSxDQUFDLEtBQU8sSUFBRyxJQUFJO2lCQUV0QyxJQUFJLENBQ0wsQ0FBQztRQUNGLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDekI7Ozs7SUFFRCx5Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDakI7O2dCQTVHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSw2MkJBVVQ7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQXZCQyxVQUFVO2dCQUNWLFNBQVM7Z0JBRVQsaUJBQWlCOzs7d0JBeUJoQixLQUFLOzJCQVdMLEtBQUs7d0JBV0wsS0FBSzsyQkFZTCxLQUFLO3lCQVdMLEtBQUs7eUJBSUwsS0FBSzt3QkFJTCxLQUFLO3NCQUlMLEtBQUs7OzhCQXpGUjs7U0E0QmEsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgSW5wdXQsXHJcbiAgRWxlbWVudFJlZixcclxuICBSZW5kZXJlcjIsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0b051bWJlciwgdXBkYXRlSG9zdENsYXNzIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudW1iZXItaW5mbycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8ZGl2ICpuZ0lmPVwiX3RpdGxlIHx8IF90aXRsZVRwbFwiIGNsYXNzPVwibnVtYmVyLWluZm9fX3RpdGxlXCI+PG5nLWNvbnRhaW5lciAqbmdJZj1cIl90aXRsZTsgZWxzZSBfdGl0bGVUcGxcIj57e190aXRsZX19PC9uZy1jb250YWluZXI+PC9kaXY+XHJcbiAgPGRpdiAqbmdJZj1cIl9zdWJUaXRsZSB8fCBfc3ViVGl0bGVUcGxcIiBjbGFzcz1cIm51bWJlci1pbmZvX190aXRsZS1zdWJcIj48bmctY29udGFpbmVyICpuZ0lmPVwiX3N1YlRpdGxlOyBlbHNlIF9zdWJUaXRsZVRwbFwiPnt7X3N1YlRpdGxlfX08L25nLWNvbnRhaW5lcj48L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwibnVtYmVyLWluZm9fX3ZhbHVlXCIgW25nU3R5bGVdPVwieydtYXJnaW4tdG9wLnB4JzogZ2FwfVwiPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJudW1iZXItaW5mb19fdmFsdWUtdGV4dFwiPjxuZy1jb250YWluZXIgKm5nSWY9XCJfdG90YWw7IGVsc2UgX3RvdGFsVHBsXCI+e3tfdG90YWx9fTwvbmctY29udGFpbmVyPjxlbSBjbGFzcz1cIm51bWJlci1pbmZvX192YWx1ZS1zdWZmaXhcIiAqbmdJZj1cInN1ZmZpeFwiPnt7c3VmZml4fX08L2VtPjwvc3Bhbj5cclxuICAgIDxzcGFuICpuZ0lmPVwic3RhdHVzIHx8IF9pc1N1YlRvdGFsXCIgY2xhc3M9XCJudW1iZXItaW5mb19fdmFsdWUtdGV4dCBudW1iZXItaW5mb19fdmFsdWUtc3ViXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJfc3ViVG90YWw7IGVsc2UgX3N1YlRvdGFsVHBsXCI+e3tfc3ViVG90YWx9fTwvbmctY29udGFpbmVyPlxyXG4gICAgICA8aSAqbmdJZj1cInN0YXR1c1wiIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLWNhcmV0LXt7c3RhdHVzfX1cIj48L2k+XHJcbiAgICA8L3NwYW4+XHJcbiAgPC9kaXY+XHJcbiAgYCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIE51bWJlckluZm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIF90aXRsZSA9ICcnO1xyXG4gIF90aXRsZVRwbDogVGVtcGxhdGVSZWY8YW55PjtcclxuICAvKiog5qCH6aKYICovXHJcbiAgQElucHV0KClcclxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMuX3RpdGxlID0gbnVsbDtcclxuICAgICAgdGhpcy5fdGl0bGVUcGwgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB0aGlzLl90aXRsZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgX3N1YlRpdGxlID0gJyc7XHJcbiAgX3N1YlRpdGxlVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIC8qKiDlrZDmoIfpopggKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBzdWJUaXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy5fc3ViVGl0bGUgPSBudWxsO1xyXG4gICAgICB0aGlzLl9zdWJUaXRsZVRwbCA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHRoaXMuX3N1YlRpdGxlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBfdG90YWwgPSAnJztcclxuICBfdG90YWxUcGw6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgLyoqIOaAu+mHjyAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHRvdGFsKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLl90b3RhbCA9IG51bGw7XHJcbiAgICAgIHRoaXMuX3RvdGFsVHBsID0gdmFsdWU7XHJcbiAgICB9IGVsc2UgdGhpcy5fdG90YWwgPSAnJyArIHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgX2lzU3ViVG90YWwgPSBmYWxzZTtcclxuICBfc3ViVG90YWwgPSAnJztcclxuICBfc3ViVG90YWxUcGw6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgLyoqIOaAu+mHj+WQjue8gCAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHN1YlRvdGFsKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLl9zdWJUb3RhbCA9IG51bGw7XHJcbiAgICAgIHRoaXMuX3N1YlRvdGFsVHBsID0gdmFsdWU7XHJcbiAgICB9IGVsc2UgdGhpcy5fc3ViVG90YWwgPSB2YWx1ZTtcclxuXHJcbiAgICB0aGlzLl9pc1N1YlRvdGFsID0gISF2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKiDlrZDmgLvph48gKi9cclxuICBASW5wdXQoKVxyXG4gIHN1ZmZpeDogc3RyaW5nO1xyXG5cclxuICAvKiog5aKe5Yqg54q25oCBICovXHJcbiAgQElucHV0KClcclxuICBzdGF0dXM6ICd1cCcgfCAnZG93bic7XHJcblxyXG4gIC8qKiDnirbmgIHmoLflvI8gKi9cclxuICBASW5wdXQoKVxyXG4gIHRoZW1lOiAnbGlnaHQnIHwgJ2RlZmF1bHQnID0gJ2xpZ2h0JztcclxuXHJcbiAgLyoqIOiuvue9ruaVsOWtl+WSjOaPj+i/sOebtOaOpeeahOmXtOi3ne+8iOWDj+e0oO+8iSAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGdhcCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9nYXA7XHJcbiAgfVxyXG4gIHNldCBnYXAodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5fZ2FwID0gdG9OdW1iZXIodmFsdWUpO1xyXG4gIH1cclxuICBwcml2YXRlIF9nYXAgPSA4O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICApIHt9XHJcblxyXG4gIF9jbGFzc01hcDogc3RyaW5nW10gPSBbXTtcclxuICBzZXRDbGFzcygpIHtcclxuICAgIHVwZGF0ZUhvc3RDbGFzcyhcclxuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICB0aGlzLnJlbmRlcmVyLFxyXG4gICAgICB7XHJcbiAgICAgICAgJ251bWJlci1pbmZvJzogdHJ1ZSxcclxuICAgICAgICBbYG51bWJlci1pbmZvX18ke3RoaXMudGhlbWV9YF06IHRydWVcclxuICAgICAgfSxcclxuICAgICAgdHJ1ZSxcclxuICAgICk7XHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzcygpO1xyXG4gIH1cclxufVxyXG4iXX0=