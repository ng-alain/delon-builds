/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                    template: "\n  <ng-content></ng-content>\n  <span *ngIf=\"flag\" class=\"trend__{{flag}}\"><i class=\"anticon anticon-caret-{{flag}}\"></i></span>\n  ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlbmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L3RyZW5kLyIsInNvdXJjZXMiOlsidHJlbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7eUJBMkJsQixJQUFJOzZCQVVBLEtBQUs7O0lBakI3QixzQkFDSSxvQ0FBUTtRQUZaLGFBQWE7Ozs7O1FBQ2I7WUFFRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDdkI7Ozs7O1FBQ0QsVUFBYSxLQUFVO1lBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DOzs7T0FIQTtJQU9ELHNCQUNJLHdDQUFZO1FBRmhCLFdBQVc7Ozs7O1FBQ1g7WUFFRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDM0I7Ozs7O1FBQ0QsVUFBaUIsS0FBVTtZQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2Qzs7O09BSEE7O2dCQS9CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLE9BQU87b0JBQ2pCLFFBQVEsRUFBRSw2SUFHVDtvQkFDRCxJQUFJLEVBQUU7d0JBQ0osZUFBZSxFQUFFLE1BQU07d0JBQ3ZCLHFCQUFxQixFQUFFLFdBQVc7d0JBQ2xDLHdCQUF3QixFQUFFLDBCQUEwQjtxQkFDckQ7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztpQkFDM0I7Ozt1QkFHRSxLQUFLOzJCQUdMLEtBQUs7K0JBVUwsS0FBSzs7eUJBL0JSOztTQWdCYSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RyZW5kJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICA8c3BhbiAqbmdJZj1cImZsYWdcIiBjbGFzcz1cInRyZW5kX197e2ZsYWd9fVwiPjxpIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLWNhcmV0LXt7ZmxhZ319XCI+PC9pPjwvc3Bhbj5cclxuICBgLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MudHJlbmRdJzogJ3RydWUnLFxyXG4gICAgJ1tjbGFzcy50cmVuZF9fZ3JleV0nOiAnIWNvbG9yZnVsJyxcclxuICAgICdbY2xhc3MudHJlbmRfX3JldmVyc2VdJzogJ2NvbG9yZnVsICYmIHJldmVyc2VDb2xvcicsXHJcbiAgfSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRyZW5kQ29tcG9uZW50IHtcclxuICAvKiog5LiK5Y2H5LiL6ZmN5qCH6K+GICovXHJcbiAgQElucHV0KCkgZmxhZzogJ3VwJyB8ICdkb3duJztcclxuXHJcbiAgLyoqIOaYr+WQpuW9qeiJsuagh+iusCAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGNvbG9yZnVsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yZnVsO1xyXG4gIH1cclxuICBzZXQgY29sb3JmdWwodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5fY29sb3JmdWwgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuICBwcml2YXRlIF9jb2xvcmZ1bCA9IHRydWU7XHJcblxyXG4gIC8qKiDpopzoibLlj43ovawgKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCByZXZlcnNlQ29sb3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmV2ZXJzZUNvbG9yO1xyXG4gIH1cclxuICBzZXQgcmV2ZXJzZUNvbG9yKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuX3JldmVyc2VDb2xvciA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX3JldmVyc2VDb2xvciA9IGZhbHNlO1xyXG59XHJcbiJdfQ==