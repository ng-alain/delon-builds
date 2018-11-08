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
                template: `
  <ng-content></ng-content>
  <span *ngIf="flag" class="trend__{{flag}}"><i nz-icon type="caret-{{flag}}"></i></span>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlbmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L3RyZW5kLyIsInNvdXJjZXMiOlsidHJlbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBZXhDLE1BQU0sT0FBTyxjQUFjO0lBYjNCO1FBeUJVLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFVakIsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFsQkMsSUFDSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBVTtRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUlELElBQ0ksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDOzs7OztJQUNELElBQUksWUFBWSxDQUFDLEtBQVU7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7O1lBbENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsT0FBTztnQkFDakIsUUFBUSxFQUFFOzs7R0FHVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osZUFBZSxFQUFFLE1BQU07b0JBQ3ZCLHFCQUFxQixFQUFFLFdBQVc7b0JBQ2xDLHdCQUF3QixFQUFFLDBCQUEwQjtpQkFDckQ7Z0JBQ0QsbUJBQW1CLEVBQUUsS0FBSzthQUMzQjs7O21CQUdFLEtBQUs7dUJBR0wsS0FBSzsyQkFVTCxLQUFLOzs7Ozs7O0lBYk4sOEJBQTZCOztJQVU3QixtQ0FBeUI7O0lBVXpCLHVDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHJlbmQnLFxuICB0ZW1wbGF0ZTogYFxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDxzcGFuICpuZ0lmPVwiZmxhZ1wiIGNsYXNzPVwidHJlbmRfX3t7ZmxhZ319XCI+PGkgbnotaWNvbiB0eXBlPVwiY2FyZXQte3tmbGFnfX1cIj48L2k+PC9zcGFuPlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy50cmVuZF0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy50cmVuZF9fZ3JleV0nOiAnIWNvbG9yZnVsJyxcbiAgICAnW2NsYXNzLnRyZW5kX19yZXZlcnNlXSc6ICdjb2xvcmZ1bCAmJiByZXZlcnNlQ29sb3InLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgVHJlbmRDb21wb25lbnQge1xuICAvKiog5LiK5Y2H5LiL6ZmN5qCH6K+GICovXG4gIEBJbnB1dCgpIGZsYWc6ICd1cCcgfCAnZG93bic7XG5cbiAgLyoqIOaYr+WQpuW9qeiJsuagh+iusCAqL1xuICBASW5wdXQoKVxuICBnZXQgY29sb3JmdWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yZnVsO1xuICB9XG4gIHNldCBjb2xvcmZ1bCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fY29sb3JmdWwgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2NvbG9yZnVsID0gdHJ1ZTtcblxuICAvKiog6aKc6Imy5Y+N6L2sICovXG4gIEBJbnB1dCgpXG4gIGdldCByZXZlcnNlQ29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JldmVyc2VDb2xvcjtcbiAgfVxuICBzZXQgcmV2ZXJzZUNvbG9yKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9yZXZlcnNlQ29sb3IgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX3JldmVyc2VDb2xvciA9IGZhbHNlO1xufVxuIl19