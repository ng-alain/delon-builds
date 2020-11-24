/**
 * @fileoverview added by tsickle
 * Generated from: number-info.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                template: "<div *ngIf=\"title\" class=\"number-info__title\">\n  <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n</div>\n<div *ngIf=\"subTitle\" class=\"number-info__title-sub\">\n  <ng-container *nzStringTemplateOutlet=\"subTitle\">{{ subTitle }}</ng-container>\n</div>\n<div class=\"number-info__value\" [ngStyle]=\"{ 'margin-top.px': gap }\">\n  <span class=\"number-info__value-text\">\n    <ng-container *nzStringTemplateOutlet=\"total\">{{ total }}</ng-container>\n    <em class=\"number-info__value-suffix\" *ngIf=\"suffix\">{{ suffix }}</em>\n  </span>\n  <span *ngIf=\"status || subTotal\" class=\"number-info__value-text number-info__value-sub\">\n    <ng-container *nzStringTemplateOutlet=\"subTotal\">{{ subTotal }}</ng-container>\n    <i *ngIf=\"status\" nz-icon nzType=\"caret-{{ status }}\"></i>\n  </span>\n</div>\n",
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
    /** @type {?} */
    NumberInfoComponent.ngAcceptInputType_gap;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWluZm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NoYXJ0L251bWJlci1pbmZvLyIsInNvdXJjZXMiOlsibnVtYmVyLWluZm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFlLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFHLE9BQU8sRUFBRSxXQUFXLEVBQWUsTUFBTSxhQUFhLENBQUM7QUFldkQsTUFBTSxPQUFPLG1CQUFtQjtJQWJoQzs7OztRQTZCVyxVQUFLLEdBQXdCLE9BQU8sQ0FBQzs7OztRQUV0QixRQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7OztZQWhDQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRSxZQUFZO2dCQUN0Qiw0MUJBQTJDO2dCQUMzQyxJQUFJLEVBQUU7b0JBQ0oscUJBQXFCLEVBQUUsTUFBTTtvQkFDN0IsNEJBQTRCLEVBQUUsbUJBQW1CO29CQUNqRCw4QkFBOEIsRUFBRSxxQkFBcUI7aUJBQ3REO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7O29CQUtFLEtBQUs7dUJBRUwsS0FBSztvQkFFTCxLQUFLO3VCQUVMLEtBQUs7cUJBRUwsS0FBSztxQkFFTCxLQUFLO29CQUVMLEtBQUs7a0JBRUwsS0FBSzs7QUFBa0I7SUFBZCxXQUFXLEVBQUU7O2dEQUFTOzs7SUFqQmhDLDBDQUEwQzs7Ozs7SUFHMUMsb0NBQTJDOzs7OztJQUUzQyx1Q0FBOEM7Ozs7O0lBRTlDLG9DQUEyQzs7Ozs7SUFFM0MsdUNBQThDOzs7OztJQUU5QyxxQ0FBd0I7Ozs7O0lBRXhCLHFDQUErQjs7Ozs7SUFFL0Isb0NBQThDOzs7OztJQUU5QyxrQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ251bWJlci1pbmZvJyxcbiAgZXhwb3J0QXM6ICdudW1iZXJJbmZvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL251bWJlci1pbmZvLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MubnVtYmVyLWluZm9dJzogYHRydWVgLFxuICAgICdbY2xhc3MubnVtYmVyLWluZm9fX2xpZ2h0XSc6IGB0aGVtZSA9PT0gJ2xpZ2h0J2AsXG4gICAgJ1tjbGFzcy5udW1iZXItaW5mb19fZGVmYXVsdF0nOiBgdGhlbWUgPT09ICdkZWZhdWx0J2AsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgTnVtYmVySW5mb0NvbXBvbmVudCB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9nYXA6IE51bWJlcklucHV0O1xuXG4gIC8qKiDmoIfpopggKi9cbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICAvKiog5a2Q5qCH6aKYICovXG4gIEBJbnB1dCgpIHN1YlRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgLyoqIOaAu+mHjyAqL1xuICBASW5wdXQoKSB0b3RhbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIC8qKiDmgLvph4/lkI7nvIAgKi9cbiAgQElucHV0KCkgc3ViVG90YWw6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICAvKiog5a2Q5oC76YePICovXG4gIEBJbnB1dCgpIHN1ZmZpeDogc3RyaW5nO1xuICAvKiog5aKe5Yqg54q25oCBICovXG4gIEBJbnB1dCgpIHN0YXR1czogJ3VwJyB8ICdkb3duJztcbiAgLyoqIOeKtuaAgeagt+W8jyAqL1xuICBASW5wdXQoKSB0aGVtZTogJ2xpZ2h0JyB8ICdkZWZhdWx0JyA9ICdsaWdodCc7XG4gIC8qKiDorr7nva7mlbDlrZflkozmj4/ov7Dnm7TmjqXnmoTpl7Tot53vvIjlg4/ntKDvvIkgKi9cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZ2FwID0gODtcbn1cbiJdfQ==