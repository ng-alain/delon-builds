/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, HostBinding } from '@angular/core';
import { toNumber, InputNumber } from '@delon/util';
import { SGConfig } from './grid.config';
export class SGContainerComponent {
    /**
     * @param {?} cog
     */
    constructor(cog) {
        Object.assign(this, cog);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set col(value) {
        /** @type {?} */
        const a = toNumber(value, 0);
        if (a <= 0)
            return;
        this._col = toNumber(value, 0);
    }
    /**
     * @return {?}
     */
    get col() {
        return this._col;
    }
    /**
     * @return {?}
     */
    get marginLeft() {
        return -(this.gutter / 2);
    }
    /**
     * @return {?}
     */
    get marginRight() {
        return -(this.gutter / 2);
    }
}
SGContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'sg-container, [sg-container]',
                template: `<ng-content></ng-content>`,
                host: {
                    '[class.ant-row]': 'true',
                    '[class.sg__wrap]': 'true',
                },
                preserveWhitespaces: false
            }] }
];
/** @nocollapse */
SGContainerComponent.ctorParameters = () => [
    { type: SGConfig }
];
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
if (false) {
    /** @type {?} */
    SGContainerComponent.prototype.gutter;
    /** @type {?} */
    SGContainerComponent.prototype._col;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9ncmlkLyIsInNvdXJjZXMiOlsiZ3JpZC1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFXekMsTUFBTTs7OztJQThCSixZQUFZLEdBQWE7UUFDdkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDMUI7Ozs7O0lBekJELElBQ0ksR0FBRyxDQUFDLEtBQVU7O1FBQ2hCLE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQztZQUFFLE9BQU87UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ2hDOzs7O0lBQ0QsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0tBQ2xCOzs7O0lBS0QsSUFDSSxVQUFVO1FBQ1osT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztLQUMzQjs7OztJQUVELElBQ0ksV0FBVztRQUNiLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDM0I7OztZQXJDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsSUFBSSxFQUFFO29CQUNKLGlCQUFpQixFQUFFLE1BQU07b0JBQ3pCLGtCQUFrQixFQUFFLE1BQU07aUJBQzNCO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7YUFDM0I7Ozs7WUFWUSxRQUFROzs7cUJBY2QsS0FBSztrQkFJTCxLQUFLLFNBQUMsY0FBYzt5QkFhcEIsV0FBVyxTQUFDLHNCQUFzQjswQkFLbEMsV0FBVyxTQUFDLHVCQUF1Qjs7O0lBckJuQyxXQUFXLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0b051bWJlciwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcbmltcG9ydCB7IFNHQ29uZmlnIH0gZnJvbSAnLi9ncmlkLmNvbmZpZyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NnLWNvbnRhaW5lciwgW3NnLWNvbnRhaW5lcl0nLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtcm93XSc6ICd0cnVlJyxcclxuICAgICdbY2xhc3Muc2dfX3dyYXBdJzogJ3RydWUnLFxyXG4gIH0sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTR0NvbnRhaW5lckNvbXBvbmVudCB7XHJcbiAgLy8jcmVnaW9uIGZpZWxkc1xyXG5cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dE51bWJlcigpXHJcbiAgZ3V0dGVyOiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgnc2ctY29udGFpbmVyJylcclxuICBzZXQgY29sKHZhbHVlOiBhbnkpIHtcclxuICAgIGNvbnN0IGEgPSB0b051bWJlcih2YWx1ZSwgMCk7XHJcbiAgICBpZiAoYSA8PSAwKSByZXR1cm47XHJcbiAgICB0aGlzLl9jb2wgPSB0b051bWJlcih2YWx1ZSwgMCk7XHJcbiAgfVxyXG4gIGdldCBjb2woKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29sO1xyXG4gIH1cclxuICBwcml2YXRlIF9jb2w6IG51bWJlcjtcclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUubWFyZ2luLWxlZnQucHgnKVxyXG4gIGdldCBtYXJnaW5MZWZ0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gLSh0aGlzLmd1dHRlciAvIDIpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5tYXJnaW4tcmlnaHQucHgnKVxyXG4gIGdldCBtYXJnaW5SaWdodCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIC0odGhpcy5ndXR0ZXIgLyAyKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvZzogU0dDb25maWcpIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29nKTtcclxuICB9XHJcbn1cclxuIl19