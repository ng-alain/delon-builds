/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, } from '@angular/core';
import { updateHostClass, InputNumber } from '@delon/util';
export class NumberInfoComponent {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        /**
         * 状态样式
         */
        this.theme = 'light';
        /**
         * 设置数字和描述直接的间距（像素）
         */
        this.gap = 8;
    }
    /**
     * @return {?}
     */
    setClass() {
        const { el, renderer, theme } = this;
        updateHostClass(el.nativeElement, renderer, {
            'number-info': true,
            [`number-info__${theme}`]: true,
        }, true);
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
                template: "<div *ngIf=\"title\" class=\"number-info__title\">\n  <ng-container *stringTemplateOutlet=\"title\">{{title}}</ng-container>\n</div>\n<div *ngIf=\"subTitle\" class=\"number-info__title-sub\">\n  <ng-container *stringTemplateOutlet=\"subTitle\">{{subTitle}}</ng-container>\n</div>\n<div class=\"number-info__value\" [ngStyle]=\"{'margin-top.px': gap}\">\n  <span class=\"number-info__value-text\">\n    <ng-container *stringTemplateOutlet=\"total\">{{total}}</ng-container>\n    <em class=\"number-info__value-suffix\" *ngIf=\"suffix\">{{suffix}}</em>\n  </span>\n  <span *ngIf=\"status || subTotal\" class=\"number-info__value-text number-info__value-sub\">\n    <ng-container *stringTemplateOutlet=\"subTotal\">{{subTotal}}</ng-container>\n    <i *ngIf=\"status\" nz-icon type=\"caret-{{status}}\"></i>\n  </span>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NumberInfoComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
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
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], NumberInfoComponent.prototype, "gap", void 0);
if (false) {
    /**
     * 标题
     * @type {?}
     */
    NumberInfoComponent.prototype.title;
    /**
     * 子标题
     * @type {?}
     */
    NumberInfoComponent.prototype.subTitle;
    /**
     * 总量
     * @type {?}
     */
    NumberInfoComponent.prototype.total;
    /**
     * 总量后缀
     * @type {?}
     */
    NumberInfoComponent.prototype.subTotal;
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
    /**
     * 设置数字和描述直接的间距（像素）
     * @type {?}
     */
    NumberInfoComponent.prototype.gap;
    /** @type {?} */
    NumberInfoComponent.prototype.el;
    /** @type {?} */
    NumberInfoComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWluZm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L251bWJlci1pbmZvLyIsInNvdXJjZXMiOlsibnVtYmVyLWluZm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFFTCxTQUFTLEdBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFPM0QsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFrQjlCLFlBQW9CLEVBQWMsRUFBVSxRQUFtQjtRQUEzQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVzs7OztRQUp0RCxVQUFLLEdBQXdCLE9BQU8sQ0FBQzs7OztRQUV0QixRQUFHLEdBQUcsQ0FBQyxDQUFDO0lBRWtDLENBQUM7Ozs7SUFFbkUsUUFBUTtjQUNBLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJO1FBQ3BDLGVBQWUsQ0FDYixFQUFFLENBQUMsYUFBYSxFQUNoQixRQUFRLEVBQ1I7WUFDRSxhQUFhLEVBQUUsSUFBSTtZQUNuQixDQUFDLGdCQUFnQixLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUk7U0FDaEMsRUFDRCxJQUFJLENBQ0wsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7OztZQXhDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLG8wQkFBMkM7Z0JBQzNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBWkMsVUFBVTtZQUdWLFNBQVM7OztvQkFZUixLQUFLO3VCQUVMLEtBQUs7b0JBRUwsS0FBSzt1QkFFTCxLQUFLO3FCQUVMLEtBQUs7cUJBRUwsS0FBSztvQkFFTCxLQUFLO2tCQUVMLEtBQUs7O0FBQWtCO0lBQWQsV0FBVyxFQUFFOztnREFBUzs7Ozs7O0lBZGhDLG9DQUEyQzs7Ozs7SUFFM0MsdUNBQThDOzs7OztJQUU5QyxvQ0FBMkM7Ozs7O0lBRTNDLHVDQUE4Qzs7Ozs7SUFFOUMscUNBQXdCOzs7OztJQUV4QixxQ0FBK0I7Ozs7O0lBRS9CLG9DQUE4Qzs7Ozs7SUFFOUMsa0NBQWdDOztJQUVwQixpQ0FBc0I7O0lBQUUsdUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB1cGRhdGVIb3N0Q2xhc3MsIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdudW1iZXItaW5mbycsXG4gIHRlbXBsYXRlVXJsOiAnLi9udW1iZXItaW5mby5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOdW1iZXJJbmZvQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgLyoqIOagh+mimCAqL1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIC8qKiDlrZDmoIfpopggKi9cbiAgQElucHV0KCkgc3ViVGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICAvKiog5oC76YePICovXG4gIEBJbnB1dCgpIHRvdGFsOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgLyoqIOaAu+mHj+WQjue8gCAqL1xuICBASW5wdXQoKSBzdWJUb3RhbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIC8qKiDlrZDmgLvph48gKi9cbiAgQElucHV0KCkgc3VmZml4OiBzdHJpbmc7XG4gIC8qKiDlop7liqDnirbmgIEgKi9cbiAgQElucHV0KCkgc3RhdHVzOiAndXAnIHwgJ2Rvd24nO1xuICAvKiog54q25oCB5qC35byPICovXG4gIEBJbnB1dCgpIHRoZW1lOiAnbGlnaHQnIHwgJ2RlZmF1bHQnID0gJ2xpZ2h0JztcbiAgLyoqIOiuvue9ruaVsOWtl+WSjOaPj+i/sOebtOaOpeeahOmXtOi3ne+8iOWDj+e0oO+8iSAqL1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBnYXAgPSA4O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge31cblxuICBzZXRDbGFzcygpIHtcbiAgICBjb25zdCB7IGVsLCByZW5kZXJlciwgdGhlbWUgfSA9IHRoaXM7XG4gICAgdXBkYXRlSG9zdENsYXNzKFxuICAgICAgZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIHJlbmRlcmVyLFxuICAgICAge1xuICAgICAgICAnbnVtYmVyLWluZm8nOiB0cnVlLFxuICAgICAgICBbYG51bWJlci1pbmZvX18ke3RoZW1lfWBdOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHRydWUsXG4gICAgKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgfVxufVxuIl19