/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { InputNumber } from '@delon/util';
import { SGConfig } from './grid.config';
export class SGContainerComponent {
    /**
     * @param {?} cog
     */
    constructor(cog) {
        Object.assign(this, Object.assign({}, new SGConfig(), cog));
    }
    // #endregion
    /**
     * @return {?}
     */
    get marginLeft() {
        return -(this.gutter / 2);
    }
    /**
     * @return {?}
     */
    get marginRight() {
        return -(this.gutter / 2);
    }
}
SGContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'sg-container, [sg-container]',
                template: `
    <ng-content></ng-content>
  `,
                host: {
                    '[class.ant-row]': 'true',
                    '[class.sg__wrap]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                exportAs: 'sgContainer'
            }] }
];
/** @nocollapse */
SGContainerComponent.ctorParameters = () => [
    { type: SGConfig }
];
SGContainerComponent.propDecorators = {
    gutter: [{ type: Input }],
    colInCon: [{ type: Input, args: ['sg-container',] }],
    col: [{ type: Input }],
    marginLeft: [{ type: HostBinding, args: ['style.margin-left.px',] }],
    marginRight: [{ type: HostBinding, args: ['style.margin-right.px',] }]
};
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Number)
], SGContainerComponent.prototype, "gutter", void 0);
tslib_1.__decorate([
    InputNumber(null),
    tslib_1.__metadata("design:type", Number)
], SGContainerComponent.prototype, "colInCon", void 0);
tslib_1.__decorate([
    InputNumber(null),
    tslib_1.__metadata("design:type", Number)
], SGContainerComponent.prototype, "col", void 0);
if (false) {
    /** @type {?} */
    SGContainerComponent.prototype.gutter;
    /** @type {?} */
    SGContainerComponent.prototype.colInCon;
    /** @type {?} */
    SGContainerComponent.prototype.col;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9ncmlkLyIsInNvdXJjZXMiOlsiZ3JpZC1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWN6QyxNQUFNLE9BQU8sb0JBQW9COzs7O0lBbUIvQixZQUFZLEdBQWE7UUFDdkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLG9CQUFPLElBQUksUUFBUSxFQUFFLEVBQUssR0FBRyxFQUFHLENBQUM7SUFDckQsQ0FBQzs7Ozs7SUFaRCxJQUNJLFVBQVU7UUFDWixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxJQUNJLFdBQVc7UUFDYixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7OztZQTdCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsUUFBUSxFQUFFOztHQUVUO2dCQUNELElBQUksRUFBRTtvQkFDSixpQkFBaUIsRUFBRSxNQUFNO29CQUN6QixrQkFBa0IsRUFBRSxNQUFNO2lCQUMzQjtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFLGFBQWE7YUFDeEI7Ozs7WUFiUSxRQUFROzs7cUJBaUJkLEtBQUs7dUJBQ0wsS0FBSyxTQUFDLGNBQWM7a0JBQ3BCLEtBQUs7eUJBSUwsV0FBVyxTQUFDLHNCQUFzQjswQkFLbEMsV0FBVyxTQUFDLHVCQUF1Qjs7QUFYWjtJQUFkLFdBQVcsRUFBRTs7b0RBQWdCO0FBQ0c7SUFBbEIsV0FBVyxDQUFDLElBQUksQ0FBQzs7c0RBQW9CO0FBQ2pDO0lBQWxCLFdBQVcsQ0FBQyxJQUFJLENBQUM7O2lEQUFlOzs7SUFGMUMsc0NBQXVDOztJQUN2Qyx3Q0FBNkQ7O0lBQzdELG1DQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUkVQX1RZUEUgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBTR0NvbmZpZyB9IGZyb20gJy4vZ3JpZC5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZy1jb250YWluZXIsIFtzZy1jb250YWluZXJdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1yb3ddJzogJ3RydWUnLFxuICAgICdbY2xhc3Muc2dfX3dyYXBdJzogJ3RydWUnLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZXhwb3J0QXM6ICdzZ0NvbnRhaW5lcicsXG59KVxuZXhwb3J0IGNsYXNzIFNHQ29udGFpbmVyQ29tcG9uZW50IHtcbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBndXR0ZXI6IG51bWJlcjtcbiAgQElucHV0KCdzZy1jb250YWluZXInKSBASW5wdXROdW1iZXIobnVsbCkgY29sSW5Db246IFJFUF9UWVBFO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIobnVsbCkgY29sOiBSRVBfVFlQRTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5tYXJnaW4tbGVmdC5weCcpXG4gIGdldCBtYXJnaW5MZWZ0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIC0odGhpcy5ndXR0ZXIgLyAyKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUubWFyZ2luLXJpZ2h0LnB4JylcbiAgZ2V0IG1hcmdpblJpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIC0odGhpcy5ndXR0ZXIgLyAyKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGNvZzogU0dDb25maWcpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHsgLi4ubmV3IFNHQ29uZmlnKCksIC4uLmNvZyB9KTtcbiAgfVxufVxuIl19