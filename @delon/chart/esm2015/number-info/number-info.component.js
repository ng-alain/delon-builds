import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputNumber } from '@delon/util/decorator';
export class NumberInfoComponent {
    constructor() {
        /** 状态样式 */
        this.theme = 'light';
        /** 设置数字和描述直接的间距（像素） */
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
            },] }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWluZm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvbnVtYmVyLWluZm8vbnVtYmVyLWluZm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRyxPQUFPLEVBQUUsV0FBVyxFQUFlLE1BQU0sdUJBQXVCLENBQUM7QUFlakUsTUFBTSxPQUFPLG1CQUFtQjtJQWJoQztRQTRCRSxXQUFXO1FBQ0YsVUFBSyxHQUF3QixPQUFPLENBQUM7UUFDOUMsdUJBQXVCO1FBQ0MsUUFBRyxHQUFHLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7WUFoQ0EsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsNDFCQUEyQztnQkFDM0MsSUFBSSxFQUFFO29CQUNKLHFCQUFxQixFQUFFLE1BQU07b0JBQzdCLDRCQUE0QixFQUFFLG1CQUFtQjtvQkFDakQsOEJBQThCLEVBQUUscUJBQXFCO2lCQUN0RDtnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7OztvQkFLRSxLQUFLO3VCQUVMLEtBQUs7b0JBRUwsS0FBSzt1QkFFTCxLQUFLO3FCQUVMLEtBQUs7cUJBRUwsS0FBSztvQkFFTCxLQUFLO2tCQUVMLEtBQUs7O0FBQWtCO0lBQWQsV0FBVyxFQUFFOztnREFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ251bWJlci1pbmZvJyxcbiAgZXhwb3J0QXM6ICdudW1iZXJJbmZvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL251bWJlci1pbmZvLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MubnVtYmVyLWluZm9dJzogYHRydWVgLFxuICAgICdbY2xhc3MubnVtYmVyLWluZm9fX2xpZ2h0XSc6IGB0aGVtZSA9PT0gJ2xpZ2h0J2AsXG4gICAgJ1tjbGFzcy5udW1iZXItaW5mb19fZGVmYXVsdF0nOiBgdGhlbWUgPT09ICdkZWZhdWx0J2AsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgTnVtYmVySW5mb0NvbXBvbmVudCB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9nYXA6IE51bWJlcklucHV0O1xuXG4gIC8qKiDmoIfpopggKi9cbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICAvKiog5a2Q5qCH6aKYICovXG4gIEBJbnB1dCgpIHN1YlRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgLyoqIOaAu+mHjyAqL1xuICBASW5wdXQoKSB0b3RhbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIC8qKiDmgLvph4/lkI7nvIAgKi9cbiAgQElucHV0KCkgc3ViVG90YWw6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICAvKiog5a2Q5oC76YePICovXG4gIEBJbnB1dCgpIHN1ZmZpeDogc3RyaW5nO1xuICAvKiog5aKe5Yqg54q25oCBICovXG4gIEBJbnB1dCgpIHN0YXR1czogJ3VwJyB8ICdkb3duJztcbiAgLyoqIOeKtuaAgeagt+W8jyAqL1xuICBASW5wdXQoKSB0aGVtZTogJ2xpZ2h0JyB8ICdkZWZhdWx0JyA9ICdsaWdodCc7XG4gIC8qKiDorr7nva7mlbDlrZflkozmj4/ov7Dnm7TmjqXnmoTpl7Tot53vvIjlg4/ntKDvvIkgKi9cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZ2FwID0gODtcbn1cbiJdfQ==