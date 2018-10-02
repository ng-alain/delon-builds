/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, HostBinding } from '@angular/core';
import { toNumber, InputNumber } from '@delon/util';
import { SGConfig } from './grid.config';
var SGContainerComponent = /** @class */ (function () {
    function SGContainerComponent(cog) {
        Object.assign(this, cog);
    }
    Object.defineProperty(SGContainerComponent.prototype, "col", {
        get: /**
         * @return {?}
         */
        function () {
            return this._col;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var a = toNumber(value, 0);
            if (a <= 0)
                return;
            this._col = toNumber(value, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SGContainerComponent.prototype, "marginLeft", {
        //#endregion
        get: /**
         * @return {?}
         */
        function () {
            return -(this.gutter / 2);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SGContainerComponent.prototype, "marginRight", {
        get: /**
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
                    template: "<ng-content></ng-content>",
                    host: {
                        '[class.ant-row]': 'true',
                        '[class.sg__wrap]': 'true',
                    },
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    SGContainerComponent.ctorParameters = function () { return [
        { type: SGConfig }
    ]; };
    SGContainerComponent.propDecorators = {
        gutter: [{ type: Input }],
        col: [{ type: Input, args: ['sg-container',] }],
        marginLeft: [{ type: HostBinding, args: ['style.margin-left.px',] }],
        marginRight: [{ type: HostBinding, args: ['style.margin-right.px',] }]
    };
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Number)
    ], SGContainerComponent.prototype, "gutter", void 0);
    return SGContainerComponent;
}());
export { SGContainerComponent };
if (false) {
    /** @type {?} */
    SGContainerComponent.prototype.gutter;
    /** @type {?} */
    SGContainerComponent.prototype._col;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9ncmlkLyIsInNvdXJjZXMiOlsiZ3JpZC1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBeUN2Qyw4QkFBWSxHQUFhO1FBQ3ZCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQzFCO0lBekJELHNCQUNJLHFDQUFHOzs7O1FBS1A7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDbEI7Ozs7O1FBUkQsVUFDUSxLQUFVOztZQUNoQixJQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQUUsT0FBTztZQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDaEM7OztPQUFBO0lBUUQsc0JBQ0ksNENBQVU7UUFIZCxZQUFZOzs7O1FBRVo7WUFFRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzNCOzs7T0FBQTtJQUVELHNCQUNJLDZDQUFXOzs7O1FBRGY7WUFFRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzNCOzs7T0FBQTs7Z0JBckNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsOEJBQThCO29CQUN4QyxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxJQUFJLEVBQUU7d0JBQ0osaUJBQWlCLEVBQUUsTUFBTTt3QkFDekIsa0JBQWtCLEVBQUUsTUFBTTtxQkFDM0I7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztpQkFDM0I7Ozs7Z0JBVlEsUUFBUTs7O3lCQWNkLEtBQUs7c0JBSUwsS0FBSyxTQUFDLGNBQWM7NkJBYXBCLFdBQVcsU0FBQyxzQkFBc0I7OEJBS2xDLFdBQVcsU0FBQyx1QkFBdUI7OztRQXJCbkMsV0FBVyxFQUFFOzs7K0JBakJoQjs7U0FhYSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0b051bWJlciwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcbmltcG9ydCB7IFNHQ29uZmlnIH0gZnJvbSAnLi9ncmlkLmNvbmZpZyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NnLWNvbnRhaW5lciwgW3NnLWNvbnRhaW5lcl0nLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtcm93XSc6ICd0cnVlJyxcclxuICAgICdbY2xhc3Muc2dfX3dyYXBdJzogJ3RydWUnLFxyXG4gIH0sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTR0NvbnRhaW5lckNvbXBvbmVudCB7XHJcbiAgLy8jcmVnaW9uIGZpZWxkc1xyXG5cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dE51bWJlcigpXHJcbiAgZ3V0dGVyOiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgnc2ctY29udGFpbmVyJylcclxuICBzZXQgY29sKHZhbHVlOiBhbnkpIHtcclxuICAgIGNvbnN0IGEgPSB0b051bWJlcih2YWx1ZSwgMCk7XHJcbiAgICBpZiAoYSA8PSAwKSByZXR1cm47XHJcbiAgICB0aGlzLl9jb2wgPSB0b051bWJlcih2YWx1ZSwgMCk7XHJcbiAgfVxyXG4gIGdldCBjb2woKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29sO1xyXG4gIH1cclxuICBwcml2YXRlIF9jb2w6IG51bWJlcjtcclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUubWFyZ2luLWxlZnQucHgnKVxyXG4gIGdldCBtYXJnaW5MZWZ0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gLSh0aGlzLmd1dHRlciAvIDIpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5tYXJnaW4tcmlnaHQucHgnKVxyXG4gIGdldCBtYXJnaW5SaWdodCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIC0odGhpcy5ndXR0ZXIgLyAyKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvZzogU0dDb25maWcpIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29nKTtcclxuICB9XHJcbn1cclxuIl19