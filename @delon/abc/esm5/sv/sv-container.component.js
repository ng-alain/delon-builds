/**
 * @fileoverview added by tsickle
 * Generated from: sv-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { AlainConfigService, InputNumber } from '@delon/util';
var SVContainerComponent = /** @class */ (function () {
    function SVContainerComponent(configSrv) {
        configSrv.attach(this, 'sv', {
            size: 'large',
            gutter: 32,
            layout: 'horizontal',
            col: 3,
            default: true,
        });
    }
    SVContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sv-container, [sv-container]',
                    exportAs: 'svContainer',
                    template: "<div class=\"ant-row\"\n     [ngStyle]=\"{'margin-left.px': -(gutter / 2), 'margin-right.px': -(gutter / 2)}\">\n  <sv-title *ngIf=\"title\">\n    <ng-container *nzStringTemplateOutlet=\"title\">{{title}}</ng-container>\n  </sv-title>\n  <ng-content></ng-content>\n</div>\n",
                    host: {
                        '[class.sv__container]': 'true',
                        '[class.sv__horizontal]': "layout === 'horizontal'",
                        '[class.sv__vertical]': "layout === 'vertical'",
                        '[class.sv__small]': "size === 'small'",
                        '[class.sv__large]': "size === 'large'",
                        '[class.clearfix]': "true",
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    SVContainerComponent.ctorParameters = function () { return [
        { type: AlainConfigService }
    ]; };
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
    return SVContainerComponent;
}());
export { SVContainerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3YtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvc3YvIiwic291cmNlcyI6WyJzdi1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFlLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFHLE9BQU8sRUFBRSxrQkFBa0IsRUFBaUIsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTdFO0lBMkJFLDhCQUFZLFNBQTZCO1FBQ3ZDLFNBQVMsQ0FBQyxNQUFNLENBQXNCLElBQUksRUFBRSxJQUFJLEVBQUU7WUFDaEQsSUFBSSxFQUFFLE9BQU87WUFDYixNQUFNLEVBQUUsRUFBRTtZQUNWLE1BQU0sRUFBRSxZQUFZO1lBQ3BCLEdBQUcsRUFBRSxDQUFDO1lBQ04sT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUM7SUFDTCxDQUFDOztnQkFuQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw4QkFBOEI7b0JBQ3hDLFFBQVEsRUFBRSxhQUFhO29CQUN2Qiw2UkFBNEM7b0JBQzVDLElBQUksRUFBRTt3QkFDSix1QkFBdUIsRUFBRSxNQUFNO3dCQUMvQix3QkFBd0IsRUFBRSx5QkFBeUI7d0JBQ25ELHNCQUFzQixFQUFFLHVCQUF1Qjt3QkFDL0MsbUJBQW1CLEVBQUUsa0JBQWtCO3dCQUN2QyxtQkFBbUIsRUFBRSxrQkFBa0I7d0JBQ3ZDLGtCQUFrQixFQUFFLE1BQU07cUJBQzNCO29CQUNELG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7Ozs7Z0JBakJRLGtCQUFrQjs7O3dCQW1CeEIsS0FBSzt1QkFDTCxLQUFLO3lCQUVMLEtBQUs7eUJBQ0wsS0FBSzs2QkFDTCxLQUFLO3NCQUVMLEtBQUs7MEJBQ0wsS0FBSzs7SUFMa0I7UUFBZCxXQUFXLEVBQUU7O3dEQUFnQjtJQUVmO1FBQWQsV0FBVyxFQUFFOzs0REFBb0I7SUFFbkI7UUFBZCxXQUFXLEVBQUU7O3FEQUFhO0lBWXRDLDJCQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7U0FwQlksb0JBQW9COzs7SUFDL0IscUNBQTJDOztJQUMzQyxvQ0FBaUM7Ozs7O0lBRWpDLHNDQUF1Qzs7SUFDdkMsc0NBQTJDOztJQUMzQywwQ0FBMkM7Ozs7O0lBRTNDLG1DQUFvQzs7SUFDcEMsdUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBBbGFpblNWQ29uZmlnLCBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3YtY29udGFpbmVyLCBbc3YtY29udGFpbmVyXScsXG4gIGV4cG9ydEFzOiAnc3ZDb250YWluZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc3YtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Muc3ZfX2NvbnRhaW5lcl0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5zdl9faG9yaXpvbnRhbF0nOiBgbGF5b3V0ID09PSAnaG9yaXpvbnRhbCdgLFxuICAgICdbY2xhc3Muc3ZfX3ZlcnRpY2FsXSc6IGBsYXlvdXQgPT09ICd2ZXJ0aWNhbCdgLFxuICAgICdbY2xhc3Muc3ZfX3NtYWxsXSc6IGBzaXplID09PSAnc21hbGwnYCxcbiAgICAnW2NsYXNzLnN2X19sYXJnZV0nOiBgc2l6ZSA9PT0gJ2xhcmdlJ2AsXG4gICAgJ1tjbGFzcy5jbGVhcmZpeF0nOiBgdHJ1ZWAsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgU1ZDb250YWluZXJDb21wb25lbnQge1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIHNpemU6ICdzbWFsbCcgfCAnbGFyZ2UnO1xuICAvKiog5YiX6KGo6aG56Ze06Led77yM5Y2V5L2N5Li6IGBweGAgKi9cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZ3V0dGVyOiBudW1iZXI7XG4gIEBJbnB1dCgpIGxheW91dDogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbGFiZWxXaWR0aDogbnVtYmVyO1xuICAvKiog5oyH5a6a5L+h5oGv5pyA5aSa5YiG5Yeg5YiX5bGV56S677yM5pyA57uI5LiA6KGM5Yeg5YiX55SxIGNvbCDphY3nva7nu5PlkIjlk43lupTlvI/op4TliJnlhrPlrpogKi9cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgY29sOiBudW1iZXI7XG4gIEBJbnB1dCgpIGRlZmF1bHQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UpIHtcbiAgICBjb25maWdTcnYuYXR0YWNoPEFsYWluU1ZDb25maWcsICdzdic+KHRoaXMsICdzdicsIHtcbiAgICAgIHNpemU6ICdsYXJnZScsXG4gICAgICBndXR0ZXI6IDMyLFxuICAgICAgbGF5b3V0OiAnaG9yaXpvbnRhbCcsXG4gICAgICBjb2w6IDMsXG4gICAgICBkZWZhdWx0OiB0cnVlLFxuICAgIH0pO1xuICB9XG59XG4iXX0=