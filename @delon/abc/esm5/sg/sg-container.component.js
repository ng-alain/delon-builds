/**
 * @fileoverview added by tsickle
 * Generated from: sg-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign, __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputNumber } from '@delon/util';
import { SGConfig } from './sg.config';
var SGContainerComponent = /** @class */ (function () {
    function SGContainerComponent(cog) {
        Object.assign(this, __assign(__assign({}, new SGConfig()), cog));
    }
    Object.defineProperty(SGContainerComponent.prototype, "marginValue", {
        // #endregion
        get: 
        // #endregion
        /**
         * @return {?}
         */
        function () {
            return -(this.gutter / 2);
        },
        enumerable: true,
        configurable: true
    });
    SGContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sg-container, [sg-container]',
                    exportAs: 'sgContainer',
                    template: " <ng-content></ng-content> ",
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
    SGContainerComponent.ctorParameters = function () { return [
        { type: SGConfig }
    ]; };
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
    return SGContainerComponent;
}());
export { SGContainerComponent };
if (false) {
    /** @type {?} */
    SGContainerComponent.prototype.gutter;
    /** @type {?} */
    SGContainerComponent.prototype.colInCon;
    /** @type {?} */
    SGContainerComponent.prototype.col;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ctY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvc2cvIiwic291cmNlcyI6WyJzZy1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUV2QztJQTJCRSw4QkFBWSxHQUFhO1FBQ3ZCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSx3QkFBTyxJQUFJLFFBQVEsRUFBRSxHQUFLLEdBQUcsRUFBRyxDQUFDO0lBQ3JELENBQUM7SUFORCxzQkFBSSw2Q0FBVztRQUZmLGFBQWE7Ozs7OztRQUViO1lBQ0UsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTs7Z0JBekJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsOEJBQThCO29CQUN4QyxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLDZCQUE2QjtvQkFDdkMsSUFBSSxFQUFFO3dCQUNKLHdCQUF3QixFQUFFLGFBQWE7d0JBQ3ZDLHlCQUF5QixFQUFFLGFBQWE7d0JBQ3hDLGlCQUFpQixFQUFFLE1BQU07d0JBQ3pCLGtCQUFrQixFQUFFLE1BQU07cUJBQzNCO29CQUNELG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7Ozs7Z0JBZlEsUUFBUTs7O3lCQW1CZCxLQUFLOzJCQUNMLEtBQUssU0FBQyxjQUFjO3NCQUNwQixLQUFLOztJQUZrQjtRQUFkLFdBQVcsRUFBRTs7d0RBQWdCO0lBQ0c7UUFBbEIsV0FBVyxDQUFDLElBQUksQ0FBQzs7MERBQW9CO0lBQ2pDO1FBQWxCLFdBQVcsQ0FBQyxJQUFJLENBQUM7O3FEQUFlO0lBVzVDLDJCQUFDO0NBQUEsQUE5QkQsSUE4QkM7U0FoQlksb0JBQW9COzs7SUFHL0Isc0NBQXVDOztJQUN2Qyx3Q0FBNkQ7O0lBQzdELG1DQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUkVQX1RZUEUgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBTR0NvbmZpZyB9IGZyb20gJy4vc2cuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2ctY29udGFpbmVyLCBbc2ctY29udGFpbmVyXScsXG4gIGV4cG9ydEFzOiAnc2dDb250YWluZXInLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG4gIGhvc3Q6IHtcbiAgICAnW3N0eWxlLm1hcmdpbi1sZWZ0LnB4XSc6ICdtYXJnaW5WYWx1ZScsXG4gICAgJ1tzdHlsZS5tYXJnaW4tcmlnaHQucHhdJzogJ21hcmdpblZhbHVlJyxcbiAgICAnW2NsYXNzLmFudC1yb3ddJzogJ3RydWUnLFxuICAgICdbY2xhc3Muc2dfX3dyYXBdJzogJ3RydWUnLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFNHQ29udGFpbmVyQ29tcG9uZW50IHtcbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBndXR0ZXI6IG51bWJlcjtcbiAgQElucHV0KCdzZy1jb250YWluZXInKSBASW5wdXROdW1iZXIobnVsbCkgY29sSW5Db246IFJFUF9UWVBFO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIobnVsbCkgY29sOiBSRVBfVFlQRTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgZ2V0IG1hcmdpblZhbHVlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIC0odGhpcy5ndXR0ZXIgLyAyKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGNvZzogU0dDb25maWcpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHsgLi4ubmV3IFNHQ29uZmlnKCksIC4uLmNvZyB9KTtcbiAgfVxufVxuIl19