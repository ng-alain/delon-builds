/**
 * @fileoverview added by tsickle
 * Generated from: loading.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
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
                    template: "<div class=\"loading-default__icon\" *ngIf=\"options.type !== 'text'\">\n  <ng-container [ngSwitch]=\"options.type\">\n    <nz-spin *ngSwitchCase=\"'spin'\" nzSimple></nz-spin>\n    <i *ngSwitchCase=\"'icon'\" nz-icon [nzType]=\"icon.type\" [nzTheme]=\"icon.theme\" [nzSpin]=\"icon.spin\"></i>\n    <div *ngSwitchDefault class=\"loading-default__custom\" [ngStyle]=\"custom.style\" [innerHTML]=\"custom.html\"></div>\n  </ng-container>\n</div>\n<div *ngIf=\"options.text\" class=\"loading-default__text\">{{ options.text }}</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2xvYWRpbmcvIiwic291cmNlcyI6WyJsb2FkaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdEY7SUFBQTtJQW9CQSxDQUFDO0lBUEMsc0JBQUkseUNBQUk7Ozs7UUFBUjtZQUNFLE9BQU8sbUJBQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUMsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJDQUFNOzs7O1FBQVY7WUFDRSxPQUFPLG1CQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFDLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7O2dCQW5CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsNmhCQUF1QztvQkFDdkMsSUFBSSxFQUFFO3dCQUNKLHlCQUF5QixFQUFFLE1BQU07cUJBQ2xDO29CQUNELG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7O0lBV0QsOEJBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQVZZLHVCQUF1Qjs7O0lBQ2xDLDBDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2FkaW5nU2hvd09wdGlvbnMgfSBmcm9tICcuL2xvYWRpbmcuaW50ZXJmYWNlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xvYWRpbmctZGVmYXVsdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2FkaW5nLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MubG9hZGluZy1kZWZhdWx0XSc6ICd0cnVlJyxcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nRGVmYXVsdENvbXBvbmVudCB7XG4gIG9wdGlvbnM6IExvYWRpbmdTaG93T3B0aW9ucztcblxuICBnZXQgaWNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmljb24hO1xuICB9XG5cbiAgZ2V0IGN1c3RvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmN1c3RvbSE7XG4gIH1cbn1cbiJdfQ==