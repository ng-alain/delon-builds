/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { toBoolean } from '@delon/util';
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
    return TrendComponent;
}());
export { TrendComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlbmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L3RyZW5kLyIsInNvdXJjZXMiOlsidHJlbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXhDO0lBQUE7UUFxQlUsY0FBUyxHQUFHLElBQUksQ0FBQztRQVVqQixrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBbEJDLHNCQUNJLG9DQUFRO1FBRlosYUFBYTs7Ozs7UUFDYjtZQUVFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDOzs7OztRQUNELFVBQWEsS0FBVTtZQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQyxDQUFDOzs7T0FIQTtJQU9ELHNCQUNJLHdDQUFZO1FBRmhCLFdBQVc7Ozs7O1FBQ1g7WUFFRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDNUIsQ0FBQzs7Ozs7UUFDRCxVQUFpQixLQUFVO1lBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLENBQUM7OztPQUhBOztnQkEzQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxPQUFPO29CQUNqQixzSUFBcUM7b0JBQ3JDLElBQUksRUFBRTt3QkFDSixlQUFlLEVBQUUsTUFBTTt3QkFDdkIscUJBQXFCLEVBQUUsV0FBVzt3QkFDbEMsd0JBQXdCLEVBQUUsMEJBQTBCO3FCQUNyRDtpQkFDRjs7O3VCQUdFLEtBQUs7MkJBR0wsS0FBSzsrQkFVTCxLQUFLOztJQVFSLHFCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7U0F2QlksY0FBYzs7Ozs7O0lBRXpCLDhCQUE2Qjs7SUFVN0IsbUNBQXlCOztJQVV6Qix1Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RyZW5kJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RyZW5kLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MudHJlbmRdJzogJ3RydWUnLFxuICAgICdbY2xhc3MudHJlbmRfX2dyZXldJzogJyFjb2xvcmZ1bCcsXG4gICAgJ1tjbGFzcy50cmVuZF9fcmV2ZXJzZV0nOiAnY29sb3JmdWwgJiYgcmV2ZXJzZUNvbG9yJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVHJlbmRDb21wb25lbnQge1xuICAvKiog5LiK5Y2H5LiL6ZmN5qCH6K+GICovXG4gIEBJbnB1dCgpIGZsYWc6ICd1cCcgfCAnZG93bic7XG5cbiAgLyoqIOaYr+WQpuW9qeiJsuagh+iusCAqL1xuICBASW5wdXQoKVxuICBnZXQgY29sb3JmdWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yZnVsO1xuICB9XG4gIHNldCBjb2xvcmZ1bCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fY29sb3JmdWwgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2NvbG9yZnVsID0gdHJ1ZTtcblxuICAvKiog6aKc6Imy5Y+N6L2sICovXG4gIEBJbnB1dCgpXG4gIGdldCByZXZlcnNlQ29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JldmVyc2VDb2xvcjtcbiAgfVxuICBzZXQgcmV2ZXJzZUNvbG9yKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9yZXZlcnNlQ29sb3IgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX3JldmVyc2VDb2xvciA9IGZhbHNlO1xufVxuIl19