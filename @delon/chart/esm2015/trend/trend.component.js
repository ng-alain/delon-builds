/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { toBoolean } from '@delon/util';
export class TrendComponent {
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
if (false) {
    /**
     * 上升下降标识
     * @type {?}
     */
    TrendComponent.prototype.flag;
    /** @type {?} */
    TrendComponent.prototype._colorful;
    /** @type {?} */
    TrendComponent.prototype._reverseColor;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlbmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L3RyZW5kLyIsInNvdXJjZXMiOlsidHJlbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBZXhDLE1BQU07O3lCQVlnQixJQUFJOzZCQVVBLEtBQUs7Ozs7OztJQWpCN0IsSUFDSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3ZCOzs7OztJQUNELElBQUksUUFBUSxDQUFDLEtBQVU7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkM7Ozs7O0lBSUQsSUFDSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0tBQzNCOzs7OztJQUNELElBQUksWUFBWSxDQUFDLEtBQVU7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdkM7OztZQWxDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFFBQVEsRUFBRTs7O0dBR1Q7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLGVBQWUsRUFBRSxNQUFNO29CQUN2QixxQkFBcUIsRUFBRSxXQUFXO29CQUNsQyx3QkFBd0IsRUFBRSwwQkFBMEI7aUJBQ3JEO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7YUFDM0I7OzttQkFHRSxLQUFLO3VCQUdMLEtBQUs7MkJBVUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0cmVuZCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgPHNwYW4gKm5nSWY9XCJmbGFnXCIgY2xhc3M9XCJ0cmVuZF9fe3tmbGFnfX1cIj48aSBjbGFzcz1cImFudGljb24gYW50aWNvbi1jYXJldC17e2ZsYWd9fVwiPjwvaT48L3NwYW4+XHJcbiAgYCxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLnRyZW5kXSc6ICd0cnVlJyxcclxuICAgICdbY2xhc3MudHJlbmRfX2dyZXldJzogJyFjb2xvcmZ1bCcsXHJcbiAgICAnW2NsYXNzLnRyZW5kX19yZXZlcnNlXSc6ICdjb2xvcmZ1bCAmJiByZXZlcnNlQ29sb3InLFxyXG4gIH0sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUcmVuZENvbXBvbmVudCB7XHJcbiAgLyoqIOS4iuWNh+S4i+mZjeagh+ivhiAqL1xyXG4gIEBJbnB1dCgpIGZsYWc6ICd1cCcgfCAnZG93bic7XHJcblxyXG4gIC8qKiDmmK/lkKblvanoibLmoIforrAgKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBjb2xvcmZ1bCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb2xvcmZ1bDtcclxuICB9XHJcbiAgc2V0IGNvbG9yZnVsKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuX2NvbG9yZnVsID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfY29sb3JmdWwgPSB0cnVlO1xyXG5cclxuICAvKiog6aKc6Imy5Y+N6L2sICovXHJcbiAgQElucHV0KClcclxuICBnZXQgcmV2ZXJzZUNvbG9yKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JldmVyc2VDb2xvcjtcclxuICB9XHJcbiAgc2V0IHJldmVyc2VDb2xvcih2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLl9yZXZlcnNlQ29sb3IgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuICBwcml2YXRlIF9yZXZlcnNlQ29sb3IgPSBmYWxzZTtcclxufVxyXG4iXX0=