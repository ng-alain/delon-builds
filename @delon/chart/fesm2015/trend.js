import { Component, Input, NgModule } from '@angular/core';
import { toBoolean, DelonUtilModule } from '@delon/util';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TrendComponent {
    constructor() {
        this._colorful = true;
        this._reverseColor = false;
    }
    /**
     * 是否彩色标记
     * @return {?}
     */
    get colorful() {
        return this._colorful;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set colorful(value) {
        this._colorful = toBoolean(value);
    }
    /**
     * 颜色反转
     * @return {?}
     */
    get reverseColor() {
        return this._reverseColor;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set reverseColor(value) {
        this._reverseColor = toBoolean(value);
    }
}
TrendComponent.decorators = [
    { type: Component, args: [{
                selector: 'trend',
                template: `
  <ng-content></ng-content>
  <span *ngIf="flag" class="trend__{{flag}}"><i class="anticon anticon-caret-{{flag}}"></i></span>
  `,
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [TrendComponent];
class TrendModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: TrendModule, providers: [] };
    }
}
TrendModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DelonUtilModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { TrendComponent, TrendModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlbmQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9jaGFydC90cmVuZC90cmVuZC5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9jaGFydC90cmVuZC90cmVuZC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cmVuZCcsXG4gIHRlbXBsYXRlOiBgXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPHNwYW4gKm5nSWY9XCJmbGFnXCIgY2xhc3M9XCJ0cmVuZF9fe3tmbGFnfX1cIj48aSBjbGFzcz1cImFudGljb24gYW50aWNvbi1jYXJldC17e2ZsYWd9fVwiPjwvaT48L3NwYW4+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnRyZW5kXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLnRyZW5kX19ncmV5XSc6ICchY29sb3JmdWwnLFxuICAgICdbY2xhc3MudHJlbmRfX3JldmVyc2VdJzogJ2NvbG9yZnVsICYmIHJldmVyc2VDb2xvcicsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBUcmVuZENvbXBvbmVudCB7XG4gIC8qKiDDpMK4worDpcKNwofDpMK4wovDqcKZwo3DpsKgwofDqMKvwoYgKi9cbiAgQElucHV0KCkgZmxhZzogJ3VwJyB8ICdkb3duJztcblxuICAvKiogw6bCmMKvw6XCkMKmw6XCvcKpw6jCicKyw6bCoMKHw6jCrsKwICovXG4gIEBJbnB1dCgpXG4gIGdldCBjb2xvcmZ1bCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3JmdWw7XG4gIH1cbiAgc2V0IGNvbG9yZnVsKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9jb2xvcmZ1bCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfY29sb3JmdWwgPSB0cnVlO1xuXG4gIC8qKiDDqcKiwpzDqMKJwrLDpcKPwo3DqMK9wqwgKi9cbiAgQElucHV0KClcbiAgZ2V0IHJldmVyc2VDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fcmV2ZXJzZUNvbG9yO1xuICB9XG4gIHNldCByZXZlcnNlQ29sb3IodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3JldmVyc2VDb2xvciA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfcmV2ZXJzZUNvbG9yID0gZmFsc2U7XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgVHJlbmRDb21wb25lbnQgfSBmcm9tICcuL3RyZW5kLmNvbXBvbmVudCc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbVHJlbmRDb21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBEZWxvblV0aWxNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxufSlcbmV4cG9ydCBjbGFzcyBUcmVuZE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7IG5nTW9kdWxlOiBUcmVuZE1vZHVsZSwgcHJvdmlkZXJzOiBbXSB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7eUJBNEJzQixJQUFJOzZCQVVBLEtBQUs7Ozs7OztJQWpCN0IsSUFDSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3ZCOzs7OztJQUNELElBQUksUUFBUSxDQUFDLEtBQVU7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkM7Ozs7O0lBSUQsSUFDSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0tBQzNCOzs7OztJQUNELElBQUksWUFBWSxDQUFDLEtBQVU7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdkM7OztZQWxDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFFBQVEsRUFBRTs7O0dBR1Q7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLGVBQWUsRUFBRSxNQUFNO29CQUN2QixxQkFBcUIsRUFBRSxXQUFXO29CQUNsQyx3QkFBd0IsRUFBRSwwQkFBMEI7aUJBQ3JEO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7YUFDM0I7OzttQkFHRSxLQUFLO3VCQUdMLEtBQUs7MkJBVUwsS0FBSzs7Ozs7OztBQy9CUjtBQU1BLE1BQU0sVUFBVSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7QUFPcEM7Ozs7SUFDRSxPQUFPLE9BQU87UUFDWixPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUM7S0FDakQ7OztZQVJGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDO2dCQUN4QyxZQUFZLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQztnQkFDN0IsT0FBTyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUM7YUFDekI7Ozs7Ozs7Ozs7Ozs7OzsifQ==