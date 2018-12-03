/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                template: "<ng-content></ng-content>\n<span *ngIf=\"flag\" class=\"trend__{{flag}}\"><i nz-icon type=\"caret-{{flag}}\"></i></span>\n",
                host: {
                    '[class.trend]': 'true',
                    '[class.trend__grey]': '!colorful',
                    '[class.trend__reverse]': 'colorful && reverseColor',
                }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlbmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L3RyZW5kLyIsInNvdXJjZXMiOlsidHJlbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBV3hDLE1BQU0sT0FBTyxjQUFjO0lBVDNCO1FBcUJVLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFVakIsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFsQkMsSUFDSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBVTtRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUlELElBQ0ksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDOzs7OztJQUNELElBQUksWUFBWSxDQUFDLEtBQVU7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7O1lBOUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsT0FBTztnQkFDakIsc0lBQXFDO2dCQUNyQyxJQUFJLEVBQUU7b0JBQ0osZUFBZSxFQUFFLE1BQU07b0JBQ3ZCLHFCQUFxQixFQUFFLFdBQVc7b0JBQ2xDLHdCQUF3QixFQUFFLDBCQUEwQjtpQkFDckQ7YUFDRjs7O21CQUdFLEtBQUs7dUJBR0wsS0FBSzsyQkFVTCxLQUFLOzs7Ozs7O0lBYk4sOEJBQTZCOztJQVU3QixtQ0FBeUI7O0lBVXpCLHVDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHJlbmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdHJlbmQuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy50cmVuZF0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy50cmVuZF9fZ3JleV0nOiAnIWNvbG9yZnVsJyxcbiAgICAnW2NsYXNzLnRyZW5kX19yZXZlcnNlXSc6ICdjb2xvcmZ1bCAmJiByZXZlcnNlQ29sb3InLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBUcmVuZENvbXBvbmVudCB7XG4gIC8qKiDkuIrljYfkuIvpmY3moIfor4YgKi9cbiAgQElucHV0KCkgZmxhZzogJ3VwJyB8ICdkb3duJztcblxuICAvKiog5piv5ZCm5b2p6Imy5qCH6K6wICovXG4gIEBJbnB1dCgpXG4gIGdldCBjb2xvcmZ1bCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3JmdWw7XG4gIH1cbiAgc2V0IGNvbG9yZnVsKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9jb2xvcmZ1bCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfY29sb3JmdWwgPSB0cnVlO1xuXG4gIC8qKiDpopzoibLlj43ovawgKi9cbiAgQElucHV0KClcbiAgZ2V0IHJldmVyc2VDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fcmV2ZXJzZUNvbG9yO1xuICB9XG4gIHNldCByZXZlcnNlQ29sb3IodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3JldmVyc2VDb2xvciA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfcmV2ZXJzZUNvbG9yID0gZmFsc2U7XG59XG4iXX0=