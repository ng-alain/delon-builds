/**
 * @fileoverview added by tsickle
 * Generated from: number-info.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputNumber } from '@delon/util';
export class NumberInfoComponent {
    constructor() {
        /**
         * 状态样式
         */
        this.theme = 'light';
        /**
         * 设置数字和描述直接的间距（像素）
         */
        this.gap = 8;
    }
}
NumberInfoComponent.decorators = [
    { type: Component, args: [{
                selector: 'number-info',
                exportAs: 'numberInfo',
                template: "<div *ngIf=\"title\" class=\"number-info__title\">\n  <ng-container *nzStringTemplateOutlet=\"title\">{{title}}</ng-container>\n</div>\n<div *ngIf=\"subTitle\" class=\"number-info__title-sub\">\n  <ng-container *nzStringTemplateOutlet=\"subTitle\">{{subTitle}}</ng-container>\n</div>\n<div class=\"number-info__value\" [ngStyle]=\"{'margin-top.px': gap}\">\n  <span class=\"number-info__value-text\">\n    <ng-container *nzStringTemplateOutlet=\"total\">{{total}}</ng-container>\n    <em class=\"number-info__value-suffix\" *ngIf=\"suffix\">{{suffix}}</em>\n  </span>\n  <span *ngIf=\"status || subTotal\" class=\"number-info__value-text number-info__value-sub\">\n    <ng-container *nzStringTemplateOutlet=\"subTotal\">{{subTotal}}</ng-container>\n    <i *ngIf=\"status\" nz-icon nzType=\"caret-{{status}}\"></i>\n  </span>\n</div>\n",
                host: {
                    '[class.number-info]': `true`,
                    '[class.number-info__light]': `theme === 'light'`,
                    '[class.number-info__default]': `theme === 'default'`,
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWluZm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L251bWJlci1pbmZvLyIsInNvdXJjZXMiOlsibnVtYmVyLWluZm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFlLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFlMUMsTUFBTSxPQUFPLG1CQUFtQjtJQWJoQzs7OztRQTJCVyxVQUFLLEdBQXdCLE9BQU8sQ0FBQzs7OztRQUV0QixRQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7OztZQTlCQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRSxZQUFZO2dCQUN0Qiw4MEJBQTJDO2dCQUMzQyxJQUFJLEVBQUU7b0JBQ0oscUJBQXFCLEVBQUUsTUFBTTtvQkFDN0IsNEJBQTRCLEVBQUUsbUJBQW1CO29CQUNqRCw4QkFBOEIsRUFBRSxxQkFBcUI7aUJBQ3REO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7O29CQUdFLEtBQUs7dUJBRUwsS0FBSztvQkFFTCxLQUFLO3VCQUVMLEtBQUs7cUJBRUwsS0FBSztxQkFFTCxLQUFLO29CQUVMLEtBQUs7a0JBRUwsS0FBSzs7QUFBa0I7SUFBZCxXQUFXLEVBQUU7O2dEQUFTOzs7Ozs7SUFkaEMsb0NBQTJDOzs7OztJQUUzQyx1Q0FBOEM7Ozs7O0lBRTlDLG9DQUEyQzs7Ozs7SUFFM0MsdUNBQThDOzs7OztJQUU5QyxxQ0FBd0I7Ozs7O0lBRXhCLHFDQUErQjs7Ozs7SUFFL0Isb0NBQThDOzs7OztJQUU5QyxrQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnVtYmVyLWluZm8nLFxuICBleHBvcnRBczogJ251bWJlckluZm8nLFxuICB0ZW1wbGF0ZVVybDogJy4vbnVtYmVyLWluZm8uY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5udW1iZXItaW5mb10nOiBgdHJ1ZWAsXG4gICAgJ1tjbGFzcy5udW1iZXItaW5mb19fbGlnaHRdJzogYHRoZW1lID09PSAnbGlnaHQnYCxcbiAgICAnW2NsYXNzLm51bWJlci1pbmZvX19kZWZhdWx0XSc6IGB0aGVtZSA9PT0gJ2RlZmF1bHQnYCxcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBOdW1iZXJJbmZvQ29tcG9uZW50IHtcbiAgLyoqIOagh+mimCAqL1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIC8qKiDlrZDmoIfpopggKi9cbiAgQElucHV0KCkgc3ViVGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICAvKiog5oC76YePICovXG4gIEBJbnB1dCgpIHRvdGFsOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgLyoqIOaAu+mHj+WQjue8gCAqL1xuICBASW5wdXQoKSBzdWJUb3RhbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIC8qKiDlrZDmgLvph48gKi9cbiAgQElucHV0KCkgc3VmZml4OiBzdHJpbmc7XG4gIC8qKiDlop7liqDnirbmgIEgKi9cbiAgQElucHV0KCkgc3RhdHVzOiAndXAnIHwgJ2Rvd24nO1xuICAvKiog54q25oCB5qC35byPICovXG4gIEBJbnB1dCgpIHRoZW1lOiAnbGlnaHQnIHwgJ2RlZmF1bHQnID0gJ2xpZ2h0JztcbiAgLyoqIOiuvue9ruaVsOWtl+WSjOaPj+i/sOebtOaOpeeahOmXtOi3ne+8iOWDj+e0oO+8iSAqL1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBnYXAgPSA4O1xufVxuIl19