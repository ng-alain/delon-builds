/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, HostBinding, Input, } from '@angular/core';
import { InputNumber } from '@delon/util';
import { SGConfig } from './grid.config';
var SGContainerComponent = /** @class */ (function () {
    function SGContainerComponent(cog) {
        Object.assign(this, cog);
    }
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
                    template: "\n    <ng-content></ng-content>\n  ",
                    host: {
                        '[class.ant-row]': 'true',
                        '[class.sg__wrap]': 'true',
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    SGContainerComponent.ctorParameters = function () { return [
        { type: SGConfig }
    ]; };
    SGContainerComponent.propDecorators = {
        gutter: [{ type: Input }],
        colInCon: [{ type: Input, args: ['sg-container',] }],
        col: [{ type: Input }],
        marginLeft: [{ type: HostBinding, args: ['style.margin-left.px',] }],
        marginRight: [{ type: HostBinding, args: ['style.margin-right.px',] }]
    };
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Number)
    ], SGContainerComponent.prototype, "gutter", void 0);
    tslib_1.__decorate([
        InputNumber(null),
        tslib_1.__metadata("design:type", Number)
    ], SGContainerComponent.prototype, "colInCon", void 0);
    tslib_1.__decorate([
        InputNumber(null),
        tslib_1.__metadata("design:type", Number)
    ], SGContainerComponent.prototype, "col", void 0);
    return SGContainerComponent;
}());
export { SGContainerComponent };
if (false) {
    /** @type {?} */
    SGContainerComponent.prototype.gutter;
    /** @type {?} */
    SGContainerComponent.prototype.colInCon;
    /** @type {?} */
    SGContainerComponent.prototype.col;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9ncmlkLyIsInNvdXJjZXMiOlsiZ3JpZC1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsV0FBVyxFQUNYLEtBQUssR0FDTixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekM7SUE4QkUsOEJBQVksR0FBYTtRQUN2QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBWkQsc0JBQ0ksNENBQVU7UUFIZCxZQUFZOzs7Ozs7UUFFWjtZQUVFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSw2Q0FBVzs7OztRQURmO1lBRUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTs7Z0JBNUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsOEJBQThCO29CQUN4QyxRQUFRLEVBQUUscUNBRVQ7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLGlCQUFpQixFQUFFLE1BQU07d0JBQ3pCLGtCQUFrQixFQUFFLE1BQU07cUJBQzNCO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFaUSxRQUFROzs7eUJBZ0JkLEtBQUs7MkJBQ0wsS0FBSyxTQUFDLGNBQWM7c0JBQ3BCLEtBQUs7NkJBSUwsV0FBVyxTQUFDLHNCQUFzQjs4QkFLbEMsV0FBVyxTQUFDLHVCQUF1Qjs7SUFYWjtRQUFkLFdBQVcsRUFBRTs7d0RBQWdCO0lBQ0c7UUFBbEIsV0FBVyxDQUFDLElBQUksQ0FBQzs7MERBQW9CO0lBQ2pDO1FBQWxCLFdBQVcsQ0FBQyxJQUFJLENBQUM7O3FEQUFlO0lBaUI1QywyQkFBQztDQUFBLEFBakNELElBaUNDO1NBdEJZLG9CQUFvQjs7O0lBRy9CLHNDQUF1Qzs7SUFDdkMsd0NBQTZEOztJQUM3RCxtQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUkVQX1RZUEUgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBTR0NvbmZpZyB9IGZyb20gJy4vZ3JpZC5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZy1jb250YWluZXIsIFtzZy1jb250YWluZXJdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1yb3ddJzogJ3RydWUnLFxuICAgICdbY2xhc3Muc2dfX3dyYXBdJzogJ3RydWUnLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU0dDb250YWluZXJDb21wb25lbnQge1xuICAvLyNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZ3V0dGVyOiBudW1iZXI7XG4gIEBJbnB1dCgnc2ctY29udGFpbmVyJykgQElucHV0TnVtYmVyKG51bGwpIGNvbEluQ29uOiBSRVBfVFlQRTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKG51bGwpIGNvbDogUkVQX1RZUEU7XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5tYXJnaW4tbGVmdC5weCcpXG4gIGdldCBtYXJnaW5MZWZ0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIC0odGhpcy5ndXR0ZXIgLyAyKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUubWFyZ2luLXJpZ2h0LnB4JylcbiAgZ2V0IG1hcmdpblJpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIC0odGhpcy5ndXR0ZXIgLyAyKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGNvZzogU0dDb25maWcpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvZyk7XG4gIH1cbn1cbiJdfQ==