/**
 * @fileoverview added by tsickle
 * Generated from: sv-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { AlainConfigService } from '@delon/theme';
import { InputNumber } from '@delon/util';
export class SVContainerComponent {
    /**
     * @param {?} configSrv
     */
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
                template: "<div class=\"ant-row\"\n     [ngStyle]=\"{'margin-left.px': -(gutter / 2), 'margin-right.px': -(gutter / 2)}\">\n  <sv-title *ngIf=\"title\">\n    <ng-container *nzStringTemplateOutlet=\"title\">{{title}}</ng-container>\n  </sv-title>\n  <ng-content></ng-content>\n</div>\n",
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
            }] }
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
if (false) {
    /** @type {?} */
    SVContainerComponent.prototype.title;
    /** @type {?} */
    SVContainerComponent.prototype.size;
    /**
     * 列表项间距，单位为 `px`
     * @type {?}
     */
    SVContainerComponent.prototype.gutter;
    /** @type {?} */
    SVContainerComponent.prototype.layout;
    /** @type {?} */
    SVContainerComponent.prototype.labelWidth;
    /**
     * 指定信息最多分几列展示，最终一行几列由 col 配置结合响应式规则决定
     * @type {?}
     */
    SVContainerComponent.prototype.col;
    /** @type {?} */
    SVContainerComponent.prototype.default;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3YtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvc3YvIiwic291cmNlcyI6WyJzdi1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFlLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFHLE9BQU8sRUFBRSxrQkFBa0IsRUFBaUIsTUFBTSxjQUFjLENBQUM7QUFDakUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQWtCMUMsTUFBTSxPQUFPLG9CQUFvQjs7OztJQVcvQixZQUFZLFNBQTZCO1FBQ3ZDLFNBQVMsQ0FBQyxNQUFNLENBQXNCLElBQUksRUFBRSxJQUFJLEVBQUU7WUFDaEQsSUFBSSxFQUFFLE9BQU87WUFDYixNQUFNLEVBQUUsRUFBRTtZQUNWLE1BQU0sRUFBRSxZQUFZO1lBQ3BCLEdBQUcsRUFBRSxDQUFDO1lBQ04sT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFuQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLFFBQVEsRUFBRSxhQUFhO2dCQUN2Qiw2UkFBNEM7Z0JBQzVDLElBQUksRUFBRTtvQkFDSix1QkFBdUIsRUFBRSxNQUFNO29CQUMvQix3QkFBd0IsRUFBRSx5QkFBeUI7b0JBQ25ELHNCQUFzQixFQUFFLHVCQUF1QjtvQkFDL0MsbUJBQW1CLEVBQUUsa0JBQWtCO29CQUN2QyxtQkFBbUIsRUFBRSxrQkFBa0I7b0JBQ3ZDLGtCQUFrQixFQUFFLE1BQU07aUJBQzNCO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7OztZQWxCUSxrQkFBa0I7OztvQkFvQnhCLEtBQUs7bUJBQ0wsS0FBSztxQkFFTCxLQUFLO3FCQUNMLEtBQUs7eUJBQ0wsS0FBSztrQkFFTCxLQUFLO3NCQUNMLEtBQUs7O0FBTGtCO0lBQWQsV0FBVyxFQUFFOztvREFBZ0I7QUFFZjtJQUFkLFdBQVcsRUFBRTs7d0RBQW9CO0FBRW5CO0lBQWQsV0FBVyxFQUFFOztpREFBYTs7O0lBUHBDLHFDQUEyQzs7SUFDM0Msb0NBQWlDOzs7OztJQUVqQyxzQ0FBdUM7O0lBQ3ZDLHNDQUEyQzs7SUFDM0MsMENBQTJDOzs7OztJQUUzQyxtQ0FBb0M7O0lBQ3BDLHVDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgQWxhaW5TVkNvbmZpZyB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3YtY29udGFpbmVyLCBbc3YtY29udGFpbmVyXScsXG4gIGV4cG9ydEFzOiAnc3ZDb250YWluZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc3YtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Muc3ZfX2NvbnRhaW5lcl0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5zdl9faG9yaXpvbnRhbF0nOiBgbGF5b3V0ID09PSAnaG9yaXpvbnRhbCdgLFxuICAgICdbY2xhc3Muc3ZfX3ZlcnRpY2FsXSc6IGBsYXlvdXQgPT09ICd2ZXJ0aWNhbCdgLFxuICAgICdbY2xhc3Muc3ZfX3NtYWxsXSc6IGBzaXplID09PSAnc21hbGwnYCxcbiAgICAnW2NsYXNzLnN2X19sYXJnZV0nOiBgc2l6ZSA9PT0gJ2xhcmdlJ2AsXG4gICAgJ1tjbGFzcy5jbGVhcmZpeF0nOiBgdHJ1ZWAsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgU1ZDb250YWluZXJDb21wb25lbnQge1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIHNpemU6ICdzbWFsbCcgfCAnbGFyZ2UnO1xuICAvKiog5YiX6KGo6aG56Ze06Led77yM5Y2V5L2N5Li6IGBweGAgKi9cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZ3V0dGVyOiBudW1iZXI7XG4gIEBJbnB1dCgpIGxheW91dDogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbGFiZWxXaWR0aDogbnVtYmVyO1xuICAvKiog5oyH5a6a5L+h5oGv5pyA5aSa5YiG5Yeg5YiX5bGV56S677yM5pyA57uI5LiA6KGM5Yeg5YiX55SxIGNvbCDphY3nva7nu5PlkIjlk43lupTlvI/op4TliJnlhrPlrpogKi9cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgY29sOiBudW1iZXI7XG4gIEBJbnB1dCgpIGRlZmF1bHQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UpIHtcbiAgICBjb25maWdTcnYuYXR0YWNoPEFsYWluU1ZDb25maWcsICdzdic+KHRoaXMsICdzdicsIHtcbiAgICAgIHNpemU6ICdsYXJnZScsXG4gICAgICBndXR0ZXI6IDMyLFxuICAgICAgbGF5b3V0OiAnaG9yaXpvbnRhbCcsXG4gICAgICBjb2w6IDMsXG4gICAgICBkZWZhdWx0OiB0cnVlLFxuICAgIH0pO1xuICB9XG59XG4iXX0=