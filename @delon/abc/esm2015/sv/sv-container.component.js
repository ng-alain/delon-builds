import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { InputNumber } from '@delon/util/decorator';
export class SVContainerComponent {
    constructor(configSrv) {
        configSrv.attach(this, 'sv', {
            size: 'large',
            gutter: 32,
            layout: 'horizontal',
            col: 3,
            default: true,
        });
    }
}
SVContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'sv-container, [sv-container]',
                exportAs: 'svContainer',
                template: "<div class=\"ant-row\" [ngStyle]=\"{ 'margin-left.px': -(gutter / 2), 'margin-right.px': -(gutter / 2) }\">\n  <sv-title *ngIf=\"title\">\n    <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n  </sv-title>\n  <ng-content></ng-content>\n</div>\n",
                host: {
                    '[class.sv__container]': 'true',
                    '[class.sv__horizontal]': `layout === 'horizontal'`,
                    '[class.sv__vertical]': `layout === 'vertical'`,
                    '[class.sv__small]': `size === 'small'`,
                    '[class.sv__large]': `size === 'large'`,
                    '[class.clearfix]': `true`,
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
/** @nocollapse */
SVContainerComponent.ctorParameters = () => [
    { type: AlainConfigService }
];
SVContainerComponent.propDecorators = {
    title: [{ type: Input }],
    size: [{ type: Input }],
    gutter: [{ type: Input }],
    layout: [{ type: Input }],
    labelWidth: [{ type: Input }],
    col: [{ type: Input }],
    default: [{ type: Input }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], SVContainerComponent.prototype, "gutter", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], SVContainerComponent.prototype, "labelWidth", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], SVContainerComponent.prototype, "col", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3YtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdi9zdi1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFlLE1BQU0sdUJBQXVCLENBQUM7QUFrQmpFLE1BQU0sT0FBTyxvQkFBb0I7SUFlL0IsWUFBWSxTQUE2QjtRQUN2QyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7WUFDM0IsSUFBSSxFQUFFLE9BQU87WUFDYixNQUFNLEVBQUUsRUFBRTtZQUNWLE1BQU0sRUFBRSxZQUFZO1lBQ3BCLEdBQUcsRUFBRSxDQUFDO1lBQ04sT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUF2Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLFFBQVEsRUFBRSxhQUFhO2dCQUN2QiwyUkFBNEM7Z0JBQzVDLElBQUksRUFBRTtvQkFDSix1QkFBdUIsRUFBRSxNQUFNO29CQUMvQix3QkFBd0IsRUFBRSx5QkFBeUI7b0JBQ25ELHNCQUFzQixFQUFFLHVCQUF1QjtvQkFDL0MsbUJBQW1CLEVBQUUsa0JBQWtCO29CQUN2QyxtQkFBbUIsRUFBRSxrQkFBa0I7b0JBQ3ZDLGtCQUFrQixFQUFFLE1BQU07aUJBQzNCO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7OztZQWxCUSxrQkFBa0I7OztvQkF3QnhCLEtBQUs7bUJBQ0wsS0FBSztxQkFFTCxLQUFLO3FCQUNMLEtBQUs7eUJBQ0wsS0FBSztrQkFFTCxLQUFLO3NCQUNMLEtBQUs7O0FBTGtCO0lBQWQsV0FBVyxFQUFFOztvREFBZ0I7QUFFZjtJQUFkLFdBQVcsRUFBRTs7d0RBQW9CO0FBRW5CO0lBQWQsV0FBVyxFQUFFOztpREFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdi1jb250YWluZXIsIFtzdi1jb250YWluZXJdJyxcbiAgZXhwb3J0QXM6ICdzdkNvbnRhaW5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdi1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5zdl9fY29udGFpbmVyXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLnN2X19ob3Jpem9udGFsXSc6IGBsYXlvdXQgPT09ICdob3Jpem9udGFsJ2AsXG4gICAgJ1tjbGFzcy5zdl9fdmVydGljYWxdJzogYGxheW91dCA9PT0gJ3ZlcnRpY2FsJ2AsXG4gICAgJ1tjbGFzcy5zdl9fc21hbGxdJzogYHNpemUgPT09ICdzbWFsbCdgLFxuICAgICdbY2xhc3Muc3ZfX2xhcmdlXSc6IGBzaXplID09PSAnbGFyZ2UnYCxcbiAgICAnW2NsYXNzLmNsZWFyZml4XSc6IGB0cnVlYCxcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBTVkNvbnRhaW5lckNvbXBvbmVudCB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9ndXR0ZXI6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbGFiZWxXaWR0aDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9jb2w6IE51bWJlcklucHV0O1xuXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgc2l6ZTogJ3NtYWxsJyB8ICdsYXJnZSc7XG4gIC8qKiDliJfooajpobnpl7Tot53vvIzljZXkvY3kuLogYHB4YCAqL1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBndXR0ZXI6IG51bWJlcjtcbiAgQElucHV0KCkgbGF5b3V0OiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBsYWJlbFdpZHRoOiBudW1iZXI7XG4gIC8qKiDmjIflrprkv6Hmga/mnIDlpJrliIblh6DliJflsZXnpLrvvIzmnIDnu4jkuIDooYzlh6DliJfnlLEgY29sIOmFjee9rue7k+WQiOWTjeW6lOW8j+inhOWImeWGs+WumiAqL1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBjb2w6IG51bWJlcjtcbiAgQElucHV0KCkgZGVmYXVsdDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSkge1xuICAgIGNvbmZpZ1Nydi5hdHRhY2godGhpcywgJ3N2Jywge1xuICAgICAgc2l6ZTogJ2xhcmdlJyxcbiAgICAgIGd1dHRlcjogMzIsXG4gICAgICBsYXlvdXQ6ICdob3Jpem9udGFsJyxcbiAgICAgIGNvbDogMyxcbiAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==