/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        get: 
        //#endregion
        /**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9ncmlkLyIsInNvdXJjZXMiOlsiZ3JpZC1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekM7SUF1Q0UsOEJBQVksR0FBYTtRQUN2QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBekJELHNCQUNJLHFDQUFHOzs7O1FBS1A7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkIsQ0FBQzs7Ozs7UUFSRCxVQUNRLEtBQVU7O2dCQUNWLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUFFLE9BQU87WUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7OztPQUFBO0lBUUQsc0JBQ0ksNENBQVU7UUFIZCxZQUFZOzs7Ozs7UUFFWjtZQUVFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSw2Q0FBVzs7OztRQURmO1lBRUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTs7Z0JBckNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsOEJBQThCO29CQUN4QyxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxJQUFJLEVBQUU7d0JBQ0osaUJBQWlCLEVBQUUsTUFBTTt3QkFDekIsa0JBQWtCLEVBQUUsTUFBTTtxQkFDM0I7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztpQkFDM0I7Ozs7Z0JBVlEsUUFBUTs7O3lCQWNkLEtBQUs7c0JBSUwsS0FBSyxTQUFDLGNBQWM7NkJBYXBCLFdBQVcsU0FBQyxzQkFBc0I7OEJBS2xDLFdBQVcsU0FBQyx1QkFBdUI7O0lBcEJwQztRQURDLFdBQVcsRUFBRTs7d0RBQ0M7SUE0QmpCLDJCQUFDO0NBQUEsQUExQ0QsSUEwQ0M7U0FqQ1ksb0JBQW9COzs7SUFHL0Isc0NBRWU7O0lBV2Ysb0NBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRvTnVtYmVyLCBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IFNHQ29uZmlnIH0gZnJvbSAnLi9ncmlkLmNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NnLWNvbnRhaW5lciwgW3NnLWNvbnRhaW5lcl0nLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtcm93XSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLnNnX193cmFwXSc6ICd0cnVlJyxcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFNHQ29udGFpbmVyQ29tcG9uZW50IHtcbiAgLy8jcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcigpXG4gIGd1dHRlcjogbnVtYmVyO1xuXG4gIEBJbnB1dCgnc2ctY29udGFpbmVyJylcbiAgc2V0IGNvbCh2YWx1ZTogYW55KSB7XG4gICAgY29uc3QgYSA9IHRvTnVtYmVyKHZhbHVlLCAwKTtcbiAgICBpZiAoYSA8PSAwKSByZXR1cm47XG4gICAgdGhpcy5fY29sID0gdG9OdW1iZXIodmFsdWUsIDApO1xuICB9XG4gIGdldCBjb2woKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbDtcbiAgfVxuICBwcml2YXRlIF9jb2w6IG51bWJlcjtcblxuICAvLyNlbmRyZWdpb25cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLm1hcmdpbi1sZWZ0LnB4JylcbiAgZ2V0IG1hcmdpbkxlZnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gLSh0aGlzLmd1dHRlciAvIDIpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5tYXJnaW4tcmlnaHQucHgnKVxuICBnZXQgbWFyZ2luUmlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gLSh0aGlzLmd1dHRlciAvIDIpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoY29nOiBTR0NvbmZpZykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29nKTtcbiAgfVxufVxuIl19