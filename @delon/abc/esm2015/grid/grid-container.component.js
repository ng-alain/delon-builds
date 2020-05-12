/**
 * @fileoverview added by tsickle
 * Generated from: grid-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
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
    get marginValue() {
        return -(this.gutter / 2);
    }
}
SGContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'sg-container, [sg-container]',
                exportAs: 'sgContainer',
                template: `
    <ng-content></ng-content>
  `,
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
    { type: SGConfig }
];
SGContainerComponent.propDecorators = {
    gutter: [{ type: Input }],
    colInCon: [{ type: Input, args: ['sg-container',] }],
    col: [{ type: Input }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9ncmlkLyIsInNvdXJjZXMiOlsiZ3JpZC1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWtCekMsTUFBTSxPQUFPLG9CQUFvQjs7OztJQWEvQixZQUFZLEdBQWE7UUFDdkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLG9CQUFPLElBQUksUUFBUSxFQUFFLEVBQUssR0FBRyxFQUFHLENBQUM7SUFDckQsQ0FBQzs7Ozs7SUFORCxJQUFJLFdBQVc7UUFDYixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7OztZQTNCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRTs7R0FFVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osd0JBQXdCLEVBQUUsYUFBYTtvQkFDdkMseUJBQXlCLEVBQUUsYUFBYTtvQkFDeEMsaUJBQWlCLEVBQUUsTUFBTTtvQkFDekIsa0JBQWtCLEVBQUUsTUFBTTtpQkFDM0I7Z0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7O1lBakJRLFFBQVE7OztxQkFxQmQsS0FBSzt1QkFDTCxLQUFLLFNBQUMsY0FBYztrQkFDcEIsS0FBSzs7QUFGa0I7SUFBZCxXQUFXLEVBQUU7O29EQUFnQjtBQUNHO0lBQWxCLFdBQVcsQ0FBQyxJQUFJLENBQUM7O3NEQUFvQjtBQUNqQztJQUFsQixXQUFXLENBQUMsSUFBSSxDQUFDOztpREFBZTs7O0lBRjFDLHNDQUF1Qzs7SUFDdkMsd0NBQTZEOztJQUM3RCxtQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJFUF9UWVBFIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgU0dDb25maWcgfSBmcm9tICcuL2dyaWQuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2ctY29udGFpbmVyLCBbc2ctY29udGFpbmVyXScsXG4gIGV4cG9ydEFzOiAnc2dDb250YWluZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUubWFyZ2luLWxlZnQucHhdJzogJ21hcmdpblZhbHVlJyxcbiAgICAnW3N0eWxlLm1hcmdpbi1yaWdodC5weF0nOiAnbWFyZ2luVmFsdWUnLFxuICAgICdbY2xhc3MuYW50LXJvd10nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5zZ19fd3JhcF0nOiAndHJ1ZScsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgU0dDb250YWluZXJDb21wb25lbnQge1xuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGd1dHRlcjogbnVtYmVyO1xuICBASW5wdXQoJ3NnLWNvbnRhaW5lcicpIEBJbnB1dE51bWJlcihudWxsKSBjb2xJbkNvbjogUkVQX1RZUEU7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcihudWxsKSBjb2w6IFJFUF9UWVBFO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBnZXQgbWFyZ2luVmFsdWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gLSh0aGlzLmd1dHRlciAvIDIpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoY29nOiBTR0NvbmZpZykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgeyAuLi5uZXcgU0dDb25maWcoKSwgLi4uY29nIH0pO1xuICB9XG59XG4iXX0=