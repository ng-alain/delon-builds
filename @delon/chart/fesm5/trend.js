import { Component, Input, NgModule } from '@angular/core';
import { toBoolean, DelonUtilModule } from '@delon/util';
import { __spread } from 'tslib';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TrendComponent = /** @class */ (function () {
    function TrendComponent() {
        this._colorful = true;
        this._reverseColor = false;
    }
    Object.defineProperty(TrendComponent.prototype, "colorful", {
        /** 是否彩色标记 */
        get: /**
         * 是否彩色标记
         * @return {?}
         */
        function () {
            return this._colorful;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._colorful = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TrendComponent.prototype, "reverseColor", {
        /** 颜色反转 */
        get: /**
         * 颜色反转
         * @return {?}
         */
        function () {
            return this._reverseColor;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._reverseColor = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    TrendComponent.decorators = [
        { type: Component, args: [{
                    selector: 'trend',
                    template: "\n  <ng-content></ng-content>\n  <span *ngIf=\"flag\" class=\"trend__{{flag}}\"><i nz-icon type=\"caret-{{flag}}\"></i></span>\n  ",
                    host: {
                        '[class.trend]': 'true',
                        '[class.trend__grey]': '!colorful',
                        '[class.trend__reverse]': 'colorful && reverseColor',
                    },
                    preserveWhitespaces: false
                }] }
    ];
    TrendComponent.propDecorators = {
        flag: [{ type: Input }],
        colorful: [{ type: Input }],
        reverseColor: [{ type: Input }]
    };
    return TrendComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [TrendComponent];
var TrendModule = /** @class */ (function () {
    function TrendModule() {
    }
    /**
     * @return {?}
     */
    TrendModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: TrendModule, providers: [] };
    };
    TrendModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, NgZorroAntdModule, DelonUtilModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return TrendModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { TrendComponent, TrendModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlbmQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9jaGFydC90cmVuZC90cmVuZC5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9jaGFydC90cmVuZC90cmVuZC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cmVuZCcsXG4gIHRlbXBsYXRlOiBgXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPHNwYW4gKm5nSWY9XCJmbGFnXCIgY2xhc3M9XCJ0cmVuZF9fe3tmbGFnfX1cIj48aSBuei1pY29uIHR5cGU9XCJjYXJldC17e2ZsYWd9fVwiPjwvaT48L3NwYW4+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnRyZW5kXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLnRyZW5kX19ncmV5XSc6ICchY29sb3JmdWwnLFxuICAgICdbY2xhc3MudHJlbmRfX3JldmVyc2VdJzogJ2NvbG9yZnVsICYmIHJldmVyc2VDb2xvcicsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBUcmVuZENvbXBvbmVudCB7XG4gIC8qKiDDpMK4worDpcKNwofDpMK4wovDqcKZwo3DpsKgwofDqMKvwoYgKi9cbiAgQElucHV0KCkgZmxhZzogJ3VwJyB8ICdkb3duJztcblxuICAvKiogw6bCmMKvw6XCkMKmw6XCvcKpw6jCicKyw6bCoMKHw6jCrsKwICovXG4gIEBJbnB1dCgpXG4gIGdldCBjb2xvcmZ1bCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3JmdWw7XG4gIH1cbiAgc2V0IGNvbG9yZnVsKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9jb2xvcmZ1bCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfY29sb3JmdWwgPSB0cnVlO1xuXG4gIC8qKiDDqcKiwpzDqMKJwrLDpcKPwo3DqMK9wqwgKi9cbiAgQElucHV0KClcbiAgZ2V0IHJldmVyc2VDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fcmV2ZXJzZUNvbG9yO1xuICB9XG4gIHNldCByZXZlcnNlQ29sb3IodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3JldmVyc2VDb2xvciA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfcmV2ZXJzZUNvbG9yID0gZmFsc2U7XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdab3Jyb0FudGRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEZWxvblV0aWxNb2R1bGUgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IFRyZW5kQ29tcG9uZW50IH0gZnJvbSAnLi90cmVuZC5jb21wb25lbnQnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW1RyZW5kQ29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTmdab3Jyb0FudGRNb2R1bGUsIERlbG9uVXRpbE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFNdLFxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXG59KVxuZXhwb3J0IGNsYXNzIFRyZW5kTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IFRyZW5kTW9kdWxlLCBwcm92aWRlcnM6IFtdIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O3lCQTRCc0IsSUFBSTs2QkFVQSxLQUFLOztJQWpCN0Isc0JBQ0ksb0NBQVE7Ozs7OztRQURaO1lBRUUsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZCOzs7OztRQUNELFVBQWEsS0FBVTtZQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQzs7O09BSEE7SUFPRCxzQkFDSSx3Q0FBWTs7Ozs7O1FBRGhCO1lBRUUsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQzNCOzs7OztRQUNELFVBQWlCLEtBQVU7WUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkM7OztPQUhBOztnQkEvQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxPQUFPO29CQUNqQixRQUFRLEVBQUUsb0lBR1Q7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLGVBQWUsRUFBRSxNQUFNO3dCQUN2QixxQkFBcUIsRUFBRSxXQUFXO3dCQUNsQyx3QkFBd0IsRUFBRSwwQkFBMEI7cUJBQ3JEO29CQUNELG1CQUFtQixFQUFFLEtBQUs7aUJBQzNCOzs7dUJBR0UsS0FBSzsyQkFHTCxLQUFLOytCQVVMLEtBQUs7O3lCQS9CUjs7Ozs7Ozs7QUNPQSxJQUFNLFVBQVUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDOzs7Ozs7O0lBUTNCLG1CQUFPOzs7SUFBZDtRQUNFLE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQztLQUNqRDs7Z0JBUkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxlQUFlLENBQUM7b0JBQzNELFlBQVksV0FBTSxVQUFVLENBQUM7b0JBQzdCLE9BQU8sV0FBTSxVQUFVLENBQUM7aUJBQ3pCOztzQkFiRDs7Ozs7Ozs7Ozs7Ozs7OyJ9