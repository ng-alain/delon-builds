/**
 * @fileoverview added by tsickle
 * Generated from: sv-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign, __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputNumber } from '@delon/util';
import { SVConfig } from './sv.config';
var SVContainerComponent = /** @class */ (function () {
    function SVContainerComponent(cog) {
        this.size = 'large';
        this.layout = 'horizontal';
        Object.assign(this, __assign(__assign({}, new SVConfig()), cog));
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
        { type: SVConfig }
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
        InputNumber(null),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3YtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvc3YvIiwic291cmNlcyI6WyJzdi1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFlLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUV2QztJQTJCRSw4QkFBWSxHQUFhO1FBVGhCLFNBQUksR0FBc0IsT0FBTyxDQUFDO1FBR2xDLFdBQU0sR0FBOEIsWUFBWSxDQUFDO1FBT3hELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSx3QkFBTyxJQUFJLFFBQVEsRUFBRSxHQUFLLEdBQUcsRUFBRyxDQUFDO0lBQ3JELENBQUM7O2dCQTdCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLDZSQUE0QztvQkFDNUMsSUFBSSxFQUFFO3dCQUNKLHVCQUF1QixFQUFFLE1BQU07d0JBQy9CLHdCQUF3QixFQUFFLHlCQUF5Qjt3QkFDbkQsc0JBQXNCLEVBQUUsdUJBQXVCO3dCQUMvQyxtQkFBbUIsRUFBRSxrQkFBa0I7d0JBQ3ZDLG1CQUFtQixFQUFFLGtCQUFrQjt3QkFDdkMsa0JBQWtCLEVBQUUsTUFBTTtxQkFDM0I7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs7OztnQkFqQlEsUUFBUTs7O3dCQW1CZCxLQUFLO3VCQUNMLEtBQUs7eUJBRUwsS0FBSzt5QkFDTCxLQUFLOzZCQUNMLEtBQUs7c0JBRUwsS0FBSzswQkFDTCxLQUFLOztJQUxrQjtRQUFkLFdBQVcsRUFBRTs7d0RBQWdCO0lBRVg7UUFBbEIsV0FBVyxDQUFDLElBQUksQ0FBQzs7NERBQW9CO0lBRXZCO1FBQWQsV0FBVyxFQUFFOztxREFBYTtJQU10QywyQkFBQztDQUFBLEFBOUJELElBOEJDO1NBZFksb0JBQW9COzs7SUFDL0IscUNBQTJDOztJQUMzQyxvQ0FBMkM7Ozs7O0lBRTNDLHNDQUF1Qzs7SUFDdkMsc0NBQTBEOztJQUMxRCwwQ0FBK0M7Ozs7O0lBRS9DLG1DQUFvQzs7SUFDcEMsdUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBTVkNvbmZpZyB9IGZyb20gJy4vc3YuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3YtY29udGFpbmVyLCBbc3YtY29udGFpbmVyXScsXG4gIGV4cG9ydEFzOiAnc3ZDb250YWluZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc3YtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Muc3ZfX2NvbnRhaW5lcl0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5zdl9faG9yaXpvbnRhbF0nOiBgbGF5b3V0ID09PSAnaG9yaXpvbnRhbCdgLFxuICAgICdbY2xhc3Muc3ZfX3ZlcnRpY2FsXSc6IGBsYXlvdXQgPT09ICd2ZXJ0aWNhbCdgLFxuICAgICdbY2xhc3Muc3ZfX3NtYWxsXSc6IGBzaXplID09PSAnc21hbGwnYCxcbiAgICAnW2NsYXNzLnN2X19sYXJnZV0nOiBgc2l6ZSA9PT0gJ2xhcmdlJ2AsXG4gICAgJ1tjbGFzcy5jbGVhcmZpeF0nOiBgdHJ1ZWAsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgU1ZDb250YWluZXJDb21wb25lbnQge1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIHNpemU6ICdzbWFsbCcgfCAnbGFyZ2UnID0gJ2xhcmdlJztcbiAgLyoqIOWIl+ihqOmhuemXtOi3ne+8jOWNleS9jeS4uiBgcHhgICovXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGd1dHRlcjogbnVtYmVyO1xuICBASW5wdXQoKSBsYXlvdXQ6ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgPSAnaG9yaXpvbnRhbCc7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcihudWxsKSBsYWJlbFdpZHRoOiBudW1iZXI7XG4gIC8qKiDmjIflrprkv6Hmga/mnIDlpJrliIblh6DliJflsZXnpLrvvIzmnIDnu4jkuIDooYzlh6DliJfnlLEgY29sIOmFjee9rue7k+WQiOWTjeW6lOW8j+inhOWImeWGs+WumiAqL1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBjb2w6IG51bWJlcjtcbiAgQElucHV0KCkgZGVmYXVsdDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihjb2c6IFNWQ29uZmlnKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7IC4uLm5ldyBTVkNvbmZpZygpLCAuLi5jb2cgfSk7XG4gIH1cbn1cbiJdfQ==