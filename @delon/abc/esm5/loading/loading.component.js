/**
 * @fileoverview added by tsickle
 * Generated from: loading.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
var LoadingDefaultComponent = /** @class */ (function () {
    function LoadingDefaultComponent() {
    }
    Object.defineProperty(LoadingDefaultComponent.prototype, "icon", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.options.icon));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadingDefaultComponent.prototype, "custom", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.options.custom));
        },
        enumerable: true,
        configurable: true
    });
    LoadingDefaultComponent.decorators = [
        { type: Component, args: [{
                    selector: 'loading-default',
                    template: "<div class=\"loading-default__icon\" *ngIf=\"options.type !== 'text'\">\n  <ng-container [ngSwitch]=\"options.type\">\n    <nz-spin *ngSwitchCase=\"'spin'\" nzSimple></nz-spin>\n    <i *ngSwitchCase=\"'icon'\" nz-icon [nzType]=\"icon.type\" [nzTheme]=\"icon.theme\" [nzSpin]=\"icon.spin\"></i>\n    <div *ngSwitchDefault class=\"loading-default__custom\" [ngStyle]=\"custom.style\" [innerHTML]=\"custom.html\"></div>\n  </ng-container>\n</div>\n<div *ngIf=\"options.text\" class=\"loading-default__text\">{{ options.text }}</div>\n",
                    host: {
                        '[class.loading-default]': 'true',
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    return LoadingDefaultComponent;
}());
export { LoadingDefaultComponent };
if (false) {
    /** @type {?} */
    LoadingDefaultComponent.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2xvYWRpbmcvIiwic291cmNlcyI6WyJsb2FkaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdEY7SUFBQTtJQW9CQSxDQUFDO0lBUEMsc0JBQUkseUNBQUk7Ozs7UUFBUjtZQUNFLE9BQU8sbUJBQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUMsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJDQUFNOzs7O1FBQVY7WUFDRSxPQUFPLG1CQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFDLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7O2dCQW5CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsK2hCQUF1QztvQkFDdkMsSUFBSSxFQUFFO3dCQUNKLHlCQUF5QixFQUFFLE1BQU07cUJBQ2xDO29CQUNELG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7O0lBV0QsOEJBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQVZZLHVCQUF1Qjs7O0lBQ2xDLDBDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2FkaW5nU2hvd09wdGlvbnMgfSBmcm9tICcuL2xvYWRpbmcudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsb2FkaW5nLWRlZmF1bHQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9hZGluZy5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmxvYWRpbmctZGVmYXVsdF0nOiAndHJ1ZScsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ0RlZmF1bHRDb21wb25lbnQge1xuICBvcHRpb25zOiBMb2FkaW5nU2hvd09wdGlvbnM7XG5cbiAgZ2V0IGljb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5pY29uITtcbiAgfVxuXG4gIGdldCBjdXN0b20oKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jdXN0b20hO1xuICB9XG59XG4iXX0=