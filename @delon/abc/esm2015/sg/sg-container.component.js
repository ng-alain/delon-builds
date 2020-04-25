/**
 * @fileoverview added by tsickle
 * Generated from: sg-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { AlainConfigService, InputNumber } from '@delon/util';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ctY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvc2cvIiwic291cmNlcyI6WyJzZy1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdGLE9BQU8sRUFBRSxrQkFBa0IsRUFBaUIsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBZ0I3RSxNQUFNLE9BQU8sb0JBQW9COzs7O0lBYS9CLFlBQVksU0FBNkI7UUFDdkMsU0FBUyxDQUFDLE1BQU0sQ0FBc0IsSUFBSSxFQUFFLElBQUksRUFBRTtZQUNoRCxNQUFNLEVBQUUsRUFBRTtZQUNWLEdBQUcsRUFBRSxDQUFDO1NBQ1AsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFURCxJQUFJLFdBQVc7UUFDYixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7OztZQXpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLElBQUksRUFBRTtvQkFDSix3QkFBd0IsRUFBRSxhQUFhO29CQUN2Qyx5QkFBeUIsRUFBRSxhQUFhO29CQUN4QyxpQkFBaUIsRUFBRSxNQUFNO29CQUN6QixrQkFBa0IsRUFBRSxNQUFNO2lCQUMzQjtnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7WUFmUSxrQkFBa0I7OztxQkFtQnhCLEtBQUs7dUJBQ0wsS0FBSyxTQUFDLGNBQWM7a0JBQ3BCLEtBQUs7O0FBRmtCO0lBQWQsV0FBVyxFQUFFOztvREFBZ0I7QUFDRztJQUFsQixXQUFXLENBQUMsSUFBSSxDQUFDOztzREFBb0I7QUFDakM7SUFBbEIsV0FBVyxDQUFDLElBQUksQ0FBQzs7aURBQWU7OztJQUYxQyxzQ0FBdUM7O0lBQ3ZDLHdDQUE2RDs7SUFDN0QsbUNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSRVBfVFlQRSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluU0dDb25maWcsIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZy1jb250YWluZXIsIFtzZy1jb250YWluZXJdJyxcbiAgZXhwb3J0QXM6ICdzZ0NvbnRhaW5lcicsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUubWFyZ2luLWxlZnQucHhdJzogJ21hcmdpblZhbHVlJyxcbiAgICAnW3N0eWxlLm1hcmdpbi1yaWdodC5weF0nOiAnbWFyZ2luVmFsdWUnLFxuICAgICdbY2xhc3MuYW50LXJvd10nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5zZ19fd3JhcF0nOiAndHJ1ZScsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgU0dDb250YWluZXJDb21wb25lbnQge1xuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGd1dHRlcjogbnVtYmVyO1xuICBASW5wdXQoJ3NnLWNvbnRhaW5lcicpIEBJbnB1dE51bWJlcihudWxsKSBjb2xJbkNvbjogUkVQX1RZUEU7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcihudWxsKSBjb2w6IFJFUF9UWVBFO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBnZXQgbWFyZ2luVmFsdWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gLSh0aGlzLmd1dHRlciAvIDIpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UpIHtcbiAgICBjb25maWdTcnYuYXR0YWNoPEFsYWluU0dDb25maWcsICdzZyc+KHRoaXMsICdzZycsIHtcbiAgICAgIGd1dHRlcjogMzIsXG4gICAgICBjb2w6IDIsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==