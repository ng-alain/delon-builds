/**
 * @fileoverview added by tsickle
 * Generated from: number-info.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputNumber } from '@delon/util';
var NumberInfoComponent = /** @class */ (function () {
    function NumberInfoComponent() {
        /**
         * 状态样式
         */
        this.theme = 'light';
        /**
         * 设置数字和描述直接的间距（像素）
         */
        this.gap = 8;
    }
    NumberInfoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'number-info',
                    exportAs: 'numberInfo',
                    template: "<div *ngIf=\"title\" class=\"number-info__title\">\n  <ng-container *nzStringTemplateOutlet=\"title\">{{title}}</ng-container>\n</div>\n<div *ngIf=\"subTitle\" class=\"number-info__title-sub\">\n  <ng-container *nzStringTemplateOutlet=\"subTitle\">{{subTitle}}</ng-container>\n</div>\n<div class=\"number-info__value\" [ngStyle]=\"{'margin-top.px': gap}\">\n  <span class=\"number-info__value-text\">\n    <ng-container *nzStringTemplateOutlet=\"total\">{{total}}</ng-container>\n    <em class=\"number-info__value-suffix\" *ngIf=\"suffix\">{{suffix}}</em>\n  </span>\n  <span *ngIf=\"status || subTotal\" class=\"number-info__value-text number-info__value-sub\">\n    <ng-container *nzStringTemplateOutlet=\"subTotal\">{{subTotal}}</ng-container>\n    <i *ngIf=\"status\" nz-icon nzType=\"caret-{{status}}\"></i>\n  </span>\n</div>\n",
                    host: {
                        '[class.number-info]': "true",
                        '[class.number-info__light]': "theme === 'light'",
                        '[class.number-info__default]': "theme === 'default'",
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
    return NumberInfoComponent;
}());
export { NumberInfoComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWluZm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L251bWJlci1pbmZvLyIsInNvdXJjZXMiOlsibnVtYmVyLWluZm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFlLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFMUM7SUFBQTs7OztRQTJCVyxVQUFLLEdBQXdCLE9BQU8sQ0FBQzs7OztRQUV0QixRQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7O2dCQTlCQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSxZQUFZO29CQUN0Qiw4MEJBQTJDO29CQUMzQyxJQUFJLEVBQUU7d0JBQ0oscUJBQXFCLEVBQUUsTUFBTTt3QkFDN0IsNEJBQTRCLEVBQUUsbUJBQW1CO3dCQUNqRCw4QkFBOEIsRUFBRSxxQkFBcUI7cUJBQ3REO29CQUNELG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7Ozt3QkFHRSxLQUFLOzJCQUVMLEtBQUs7d0JBRUwsS0FBSzsyQkFFTCxLQUFLO3lCQUVMLEtBQUs7eUJBRUwsS0FBSzt3QkFFTCxLQUFLO3NCQUVMLEtBQUs7O0lBQWtCO1FBQWQsV0FBVyxFQUFFOztvREFBUztJQUNsQywwQkFBQztDQUFBLEFBOUJELElBOEJDO1NBakJZLG1CQUFtQjs7Ozs7O0lBRTlCLG9DQUEyQzs7Ozs7SUFFM0MsdUNBQThDOzs7OztJQUU5QyxvQ0FBMkM7Ozs7O0lBRTNDLHVDQUE4Qzs7Ozs7SUFFOUMscUNBQXdCOzs7OztJQUV4QixxQ0FBK0I7Ozs7O0lBRS9CLG9DQUE4Qzs7Ozs7SUFFOUMsa0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ251bWJlci1pbmZvJyxcbiAgZXhwb3J0QXM6ICdudW1iZXJJbmZvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL251bWJlci1pbmZvLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MubnVtYmVyLWluZm9dJzogYHRydWVgLFxuICAgICdbY2xhc3MubnVtYmVyLWluZm9fX2xpZ2h0XSc6IGB0aGVtZSA9PT0gJ2xpZ2h0J2AsXG4gICAgJ1tjbGFzcy5udW1iZXItaW5mb19fZGVmYXVsdF0nOiBgdGhlbWUgPT09ICdkZWZhdWx0J2AsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgTnVtYmVySW5mb0NvbXBvbmVudCB7XG4gIC8qKiDmoIfpopggKi9cbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICAvKiog5a2Q5qCH6aKYICovXG4gIEBJbnB1dCgpIHN1YlRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgLyoqIOaAu+mHjyAqL1xuICBASW5wdXQoKSB0b3RhbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIC8qKiDmgLvph4/lkI7nvIAgKi9cbiAgQElucHV0KCkgc3ViVG90YWw6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICAvKiog5a2Q5oC76YePICovXG4gIEBJbnB1dCgpIHN1ZmZpeDogc3RyaW5nO1xuICAvKiog5aKe5Yqg54q25oCBICovXG4gIEBJbnB1dCgpIHN0YXR1czogJ3VwJyB8ICdkb3duJztcbiAgLyoqIOeKtuaAgeagt+W8jyAqL1xuICBASW5wdXQoKSB0aGVtZTogJ2xpZ2h0JyB8ICdkZWZhdWx0JyA9ICdsaWdodCc7XG4gIC8qKiDorr7nva7mlbDlrZflkozmj4/ov7Dnm7TmjqXnmoTpl7Tot53vvIjlg4/ntKDvvIkgKi9cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZ2FwID0gODtcbn1cbiJdfQ==