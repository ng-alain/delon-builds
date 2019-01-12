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
        Object.assign(this, tslib_1.__assign({}, new SGConfig(), cog));
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
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    exportAs: 'sgContainer'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9ncmlkLyIsInNvdXJjZXMiOlsiZ3JpZC1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsV0FBVyxFQUNYLEtBQUssR0FDTixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekM7SUErQkUsOEJBQVksR0FBYTtRQUN2QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksdUJBQU8sSUFBSSxRQUFRLEVBQUUsRUFBSyxHQUFHLEVBQUUsQ0FBQztJQUNwRCxDQUFDO0lBWkQsc0JBQ0ksNENBQVU7UUFIZCxZQUFZOzs7Ozs7UUFFWjtZQUVFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSw2Q0FBVzs7OztRQURmO1lBRUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTs7Z0JBN0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsOEJBQThCO29CQUN4QyxRQUFRLEVBQUUscUNBRVQ7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLGlCQUFpQixFQUFFLE1BQU07d0JBQ3pCLGtCQUFrQixFQUFFLE1BQU07cUJBQzNCO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxRQUFRLEVBQUUsYUFBYTtpQkFDeEI7Ozs7Z0JBYlEsUUFBUTs7O3lCQWlCZCxLQUFLOzJCQUNMLEtBQUssU0FBQyxjQUFjO3NCQUNwQixLQUFLOzZCQUlMLFdBQVcsU0FBQyxzQkFBc0I7OEJBS2xDLFdBQVcsU0FBQyx1QkFBdUI7O0lBWFo7UUFBZCxXQUFXLEVBQUU7O3dEQUFnQjtJQUNHO1FBQWxCLFdBQVcsQ0FBQyxJQUFJLENBQUM7OzBEQUFvQjtJQUNqQztRQUFsQixXQUFXLENBQUMsSUFBSSxDQUFDOztxREFBZTtJQWlCNUMsMkJBQUM7Q0FBQSxBQWxDRCxJQWtDQztTQXRCWSxvQkFBb0I7OztJQUcvQixzQ0FBdUM7O0lBQ3ZDLHdDQUE2RDs7SUFDN0QsbUNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJFUF9UWVBFIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgU0dDb25maWcgfSBmcm9tICcuL2dyaWQuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2ctY29udGFpbmVyLCBbc2ctY29udGFpbmVyXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtcm93XSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLnNnX193cmFwXSc6ICd0cnVlJyxcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGV4cG9ydEFzOiAnc2dDb250YWluZXInLFxufSlcbmV4cG9ydCBjbGFzcyBTR0NvbnRhaW5lckNvbXBvbmVudCB7XG4gIC8vI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBndXR0ZXI6IG51bWJlcjtcbiAgQElucHV0KCdzZy1jb250YWluZXInKSBASW5wdXROdW1iZXIobnVsbCkgY29sSW5Db246IFJFUF9UWVBFO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIobnVsbCkgY29sOiBSRVBfVFlQRTtcblxuICAvLyNlbmRyZWdpb25cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLm1hcmdpbi1sZWZ0LnB4JylcbiAgZ2V0IG1hcmdpbkxlZnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gLSh0aGlzLmd1dHRlciAvIDIpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5tYXJnaW4tcmlnaHQucHgnKVxuICBnZXQgbWFyZ2luUmlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gLSh0aGlzLmd1dHRlciAvIDIpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoY29nOiBTR0NvbmZpZykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgeyAuLi5uZXcgU0dDb25maWcoKSwgLi4uY29nfSk7XG4gIH1cbn1cbiJdfQ==