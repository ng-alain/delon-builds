/**
 * @fileoverview added by tsickle
 * Generated from: sg-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { AlainConfigService } from '@delon/theme';
import { InputNumber } from '@delon/util';
export class SGContainerComponent {
    /**
     * @param {?} configSrv
     */
    constructor(configSrv) {
        configSrv.attach(this, 'sg', {
            gutter: 32,
            col: 2,
        });
    }
    // #endregion
    /**
     * @return {?}
     */
    get marginValue() {
        return -(this.gutter / 2);
    }
}
SGContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'sg-container, [sg-container]',
                exportAs: 'sgContainer',
                template: ` <ng-content></ng-content> `,
                host: {
                    '[style.margin-left.px]': 'marginValue',
                    '[style.margin-right.px]': 'marginValue',
                    '[class.ant-row]': 'true',
                    '[class.sg__wrap]': 'true',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
SGContainerComponent.ctorParameters = () => [
    { type: AlainConfigService }
];
SGContainerComponent.propDecorators = {
    gutter: [{ type: Input }],
    colInCon: [{ type: Input, args: ['sg-container',] }],
    col: [{ type: Input }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], SGContainerComponent.prototype, "gutter", void 0);
__decorate([
    InputNumber(null),
    __metadata("design:type", Number)
], SGContainerComponent.prototype, "colInCon", void 0);
__decorate([
    InputNumber(null),
    __metadata("design:type", Number)
], SGContainerComponent.prototype, "col", void 0);
if (false) {
    /** @type {?} */
    SGContainerComponent.prototype.gutter;
    /** @type {?} */
    SGContainerComponent.prototype.colInCon;
    /** @type {?} */
    SGContainerComponent.prototype.col;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ctY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvc2cvIiwic291cmNlcyI6WyJzZy1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxrQkFBa0IsRUFBMkIsTUFBTSxjQUFjLENBQUM7QUFDM0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQWdCMUMsTUFBTSxPQUFPLG9CQUFvQjs7OztJQWEvQixZQUFZLFNBQTZCO1FBQ3ZDLFNBQVMsQ0FBQyxNQUFNLENBQXNCLElBQUksRUFBRSxJQUFJLEVBQUU7WUFDaEQsTUFBTSxFQUFFLEVBQUU7WUFDVixHQUFHLEVBQUUsQ0FBQztTQUNQLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBVEQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7WUF6QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxJQUFJLEVBQUU7b0JBQ0osd0JBQXdCLEVBQUUsYUFBYTtvQkFDdkMseUJBQXlCLEVBQUUsYUFBYTtvQkFDeEMsaUJBQWlCLEVBQUUsTUFBTTtvQkFDekIsa0JBQWtCLEVBQUUsTUFBTTtpQkFDM0I7Z0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7O1lBaEJRLGtCQUFrQjs7O3FCQW9CeEIsS0FBSzt1QkFDTCxLQUFLLFNBQUMsY0FBYztrQkFDcEIsS0FBSzs7QUFGa0I7SUFBZCxXQUFXLEVBQUU7O29EQUFnQjtBQUNHO0lBQWxCLFdBQVcsQ0FBQyxJQUFJLENBQUM7O3NEQUFvQjtBQUNqQztJQUFsQixXQUFXLENBQUMsSUFBSSxDQUFDOztpREFBZTs7O0lBRjFDLHNDQUF1Qzs7SUFDdkMsd0NBQTZEOztJQUM3RCxtQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgQWxhaW5TR0NvbmZpZywgUkVQX1RZUEUgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NnLWNvbnRhaW5lciwgW3NnLWNvbnRhaW5lcl0nLFxuICBleHBvcnRBczogJ3NnQ29udGFpbmVyJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS5tYXJnaW4tbGVmdC5weF0nOiAnbWFyZ2luVmFsdWUnLFxuICAgICdbc3R5bGUubWFyZ2luLXJpZ2h0LnB4XSc6ICdtYXJnaW5WYWx1ZScsXG4gICAgJ1tjbGFzcy5hbnQtcm93XSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLnNnX193cmFwXSc6ICd0cnVlJyxcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBTR0NvbnRhaW5lckNvbXBvbmVudCB7XG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZ3V0dGVyOiBudW1iZXI7XG4gIEBJbnB1dCgnc2ctY29udGFpbmVyJykgQElucHV0TnVtYmVyKG51bGwpIGNvbEluQ29uOiBSRVBfVFlQRTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKG51bGwpIGNvbDogUkVQX1RZUEU7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGdldCBtYXJnaW5WYWx1ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiAtKHRoaXMuZ3V0dGVyIC8gMik7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSkge1xuICAgIGNvbmZpZ1Nydi5hdHRhY2g8QWxhaW5TR0NvbmZpZywgJ3NnJz4odGhpcywgJ3NnJywge1xuICAgICAgZ3V0dGVyOiAzMixcbiAgICAgIGNvbDogMixcbiAgICB9KTtcbiAgfVxufVxuIl19