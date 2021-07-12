import { __decorate } from "tslib";
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
    InputNumber()
], NumberInfoComponent.prototype, "gap", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWluZm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvbnVtYmVyLWluZm8vbnVtYmVyLWluZm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRyxPQUFPLEVBQUUsV0FBVyxFQUFlLE1BQU0sdUJBQXVCLENBQUM7QUFlakUsTUFBTSxPQUFPLG1CQUFtQjtJQWJoQztRQTRCRSxXQUFXO1FBQ0YsVUFBSyxHQUF3QixPQUFPLENBQUM7UUFDOUMsdUJBQXVCO1FBQ0MsUUFBRyxHQUFHLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7WUFoQ0EsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsNDFCQUEyQztnQkFDM0MsSUFBSSxFQUFFO29CQUNKLHFCQUFxQixFQUFFLE1BQU07b0JBQzdCLDRCQUE0QixFQUFFLG1CQUFtQjtvQkFDakQsOEJBQThCLEVBQUUscUJBQXFCO2lCQUN0RDtnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7OztvQkFLRSxLQUFLO3VCQUVMLEtBQUs7b0JBRUwsS0FBSzt1QkFFTCxLQUFLO3FCQUVMLEtBQUs7cUJBRUwsS0FBSztvQkFFTCxLQUFLO2tCQUVMLEtBQUs7O0FBQWtCO0lBQWQsV0FBVyxFQUFFO2dEQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIsIE51bWJlcklucHV0IH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnVtYmVyLWluZm8nLFxuICBleHBvcnRBczogJ251bWJlckluZm8nLFxuICB0ZW1wbGF0ZVVybDogJy4vbnVtYmVyLWluZm8uY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5udW1iZXItaW5mb10nOiBgdHJ1ZWAsXG4gICAgJ1tjbGFzcy5udW1iZXItaW5mb19fbGlnaHRdJzogYHRoZW1lID09PSAnbGlnaHQnYCxcbiAgICAnW2NsYXNzLm51bWJlci1pbmZvX19kZWZhdWx0XSc6IGB0aGVtZSA9PT0gJ2RlZmF1bHQnYCxcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBOdW1iZXJJbmZvQ29tcG9uZW50IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2dhcDogTnVtYmVySW5wdXQ7XG5cbiAgLyoqIOagh+mimCAqL1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIC8qKiDlrZDmoIfpopggKi9cbiAgQElucHV0KCkgc3ViVGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICAvKiog5oC76YePICovXG4gIEBJbnB1dCgpIHRvdGFsOiBzdHJpbmcgfCBudW1iZXIgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgLyoqIOaAu+mHj+WQjue8gCAqL1xuICBASW5wdXQoKSBzdWJUb3RhbDogc3RyaW5nIHwgbnVtYmVyIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIC8qKiDlrZDmgLvph48gKi9cbiAgQElucHV0KCkgc3VmZml4OiBzdHJpbmc7XG4gIC8qKiDlop7liqDnirbmgIEgKi9cbiAgQElucHV0KCkgc3RhdHVzOiAndXAnIHwgJ2Rvd24nO1xuICAvKiog54q25oCB5qC35byPICovXG4gIEBJbnB1dCgpIHRoZW1lOiAnbGlnaHQnIHwgJ2RlZmF1bHQnID0gJ2xpZ2h0JztcbiAgLyoqIOiuvue9ruaVsOWtl+WSjOaPj+i/sOebtOaOpeeahOmXtOi3ne+8iOWDj+e0oO+8iSAqL1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBnYXAgPSA4O1xufVxuIl19