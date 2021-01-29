/**
 * @fileoverview added by tsickle
 * Generated from: sv-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { InputNumber } from '@delon/util/decorator';
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
    SVContainerComponent.ngAcceptInputType_gutter;
    /** @type {?} */
    SVContainerComponent.ngAcceptInputType_labelWidth;
    /** @type {?} */
    SVContainerComponent.ngAcceptInputType_col;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3YtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdi9zdi1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFlLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxXQUFXLEVBQWUsTUFBTSx1QkFBdUIsQ0FBQztBQWtCakUsTUFBTSxPQUFPLG9CQUFvQjs7OztJQWUvQixZQUFZLFNBQTZCO1FBQ3ZDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRTtZQUMzQixJQUFJLEVBQUUsT0FBTztZQUNiLE1BQU0sRUFBRSxFQUFFO1lBQ1YsTUFBTSxFQUFFLFlBQVk7WUFDcEIsR0FBRyxFQUFFLENBQUM7WUFDTixPQUFPLEVBQUUsSUFBSTtTQUNkLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQXZDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLDJSQUE0QztnQkFDNUMsSUFBSSxFQUFFO29CQUNKLHVCQUF1QixFQUFFLE1BQU07b0JBQy9CLHdCQUF3QixFQUFFLHlCQUF5QjtvQkFDbkQsc0JBQXNCLEVBQUUsdUJBQXVCO29CQUMvQyxtQkFBbUIsRUFBRSxrQkFBa0I7b0JBQ3ZDLG1CQUFtQixFQUFFLGtCQUFrQjtvQkFDdkMsa0JBQWtCLEVBQUUsTUFBTTtpQkFDM0I7Z0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7O1lBbEJRLGtCQUFrQjs7O29CQXdCeEIsS0FBSzttQkFDTCxLQUFLO3FCQUVMLEtBQUs7cUJBQ0wsS0FBSzt5QkFDTCxLQUFLO2tCQUVMLEtBQUs7c0JBQ0wsS0FBSzs7QUFMa0I7SUFBZCxXQUFXLEVBQUU7O29EQUFnQjtBQUVmO0lBQWQsV0FBVyxFQUFFOzt3REFBb0I7QUFFbkI7SUFBZCxXQUFXLEVBQUU7O2lEQUFhOzs7SUFYcEMsOENBQTZDOztJQUM3QyxrREFBaUQ7O0lBQ2pELDJDQUEwQzs7SUFFMUMscUNBQTJDOztJQUMzQyxvQ0FBaUM7Ozs7O0lBRWpDLHNDQUF1Qzs7SUFDdkMsc0NBQTJDOztJQUMzQywwQ0FBMkM7Ozs7O0lBRTNDLG1DQUFvQzs7SUFDcEMsdUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB7IElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N2LWNvbnRhaW5lciwgW3N2LWNvbnRhaW5lcl0nLFxuICBleHBvcnRBczogJ3N2Q29udGFpbmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N2LWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnN2X19jb250YWluZXJdJzogJ3RydWUnLFxuICAgICdbY2xhc3Muc3ZfX2hvcml6b250YWxdJzogYGxheW91dCA9PT0gJ2hvcml6b250YWwnYCxcbiAgICAnW2NsYXNzLnN2X192ZXJ0aWNhbF0nOiBgbGF5b3V0ID09PSAndmVydGljYWwnYCxcbiAgICAnW2NsYXNzLnN2X19zbWFsbF0nOiBgc2l6ZSA9PT0gJ3NtYWxsJ2AsXG4gICAgJ1tjbGFzcy5zdl9fbGFyZ2VdJzogYHNpemUgPT09ICdsYXJnZSdgLFxuICAgICdbY2xhc3MuY2xlYXJmaXhdJzogYHRydWVgLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFNWQ29udGFpbmVyQ29tcG9uZW50IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2d1dHRlcjogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9sYWJlbFdpZHRoOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2NvbDogTnVtYmVySW5wdXQ7XG5cbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBzaXplOiAnc21hbGwnIHwgJ2xhcmdlJztcbiAgLyoqIOWIl+ihqOmhuemXtOi3ne+8jOWNleS9jeS4uiBgcHhgICovXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGd1dHRlcjogbnVtYmVyO1xuICBASW5wdXQoKSBsYXlvdXQ6ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCc7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGxhYmVsV2lkdGg6IG51bWJlcjtcbiAgLyoqIOaMh+WumuS/oeaBr+acgOWkmuWIhuWHoOWIl+Wxleekuu+8jOacgOe7iOS4gOihjOWHoOWIl+eUsSBjb2wg6YWN572u57uT5ZCI5ZON5bqU5byP6KeE5YiZ5Yaz5a6aICovXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGNvbDogbnVtYmVyO1xuICBASW5wdXQoKSBkZWZhdWx0OiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlKSB7XG4gICAgY29uZmlnU3J2LmF0dGFjaCh0aGlzLCAnc3YnLCB7XG4gICAgICBzaXplOiAnbGFyZ2UnLFxuICAgICAgZ3V0dGVyOiAzMixcbiAgICAgIGxheW91dDogJ2hvcml6b250YWwnLFxuICAgICAgY29sOiAzLFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICB9KTtcbiAgfVxufVxuIl19