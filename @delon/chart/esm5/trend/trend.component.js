/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from '@delon/util';
var TrendComponent = /** @class */ (function () {
    function TrendComponent() {
        /**
         * 是否彩色标记
         */
        this.colorful = true;
        /**
         * 颜色反转
         */
        this.reverseColor = false;
    }
    TrendComponent.decorators = [
        { type: Component, args: [{
                    selector: 'trend',
                    exportAs: 'trend',
                    template: "<ng-content></ng-content>\n<span *ngIf=\"flag\" class=\"trend__{{flag}}\"><i nz-icon nzType=\"caret-{{flag}}\"></i></span>\n",
                    host: {
                        '[class.trend]': 'true',
                        '[class.trend__grey]': '!colorful',
                        '[class.trend__reverse]': 'colorful && reverseColor',
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    TrendComponent.propDecorators = {
        flag: [{ type: Input }],
        colorful: [{ type: Input }],
        reverseColor: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], TrendComponent.prototype, "colorful", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], TrendComponent.prototype, "reverseColor", void 0);
    return TrendComponent;
}());
export { TrendComponent };
if (false) {
    /**
     * 上升下降标识
     * @type {?}
     */
    TrendComponent.prototype.flag;
    /**
     * 是否彩色标记
     * @type {?}
     */
    TrendComponent.prototype.colorful;
    /**
     * 颜色反转
     * @type {?}
     */
    TrendComponent.prototype.reverseColor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlbmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L3RyZW5kLyIsInNvdXJjZXMiOlsidHJlbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUzQztJQUFBOzs7O1FBaUIyQixhQUFRLEdBQUcsSUFBSSxDQUFDOzs7O1FBRWhCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0lBQ2hELENBQUM7O2dCQXBCQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLE9BQU87b0JBQ2pCLFFBQVEsRUFBRSxPQUFPO29CQUNqQix3SUFBcUM7b0JBQ3JDLElBQUksRUFBRTt3QkFDSixlQUFlLEVBQUUsTUFBTTt3QkFDdkIscUJBQXFCLEVBQUUsV0FBVzt3QkFDbEMsd0JBQXdCLEVBQUUsMEJBQTBCO3FCQUNyRDtvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzs7dUJBR0UsS0FBSzsyQkFFTCxLQUFLOytCQUVMLEtBQUs7O0lBRm1CO1FBQWYsWUFBWSxFQUFFOztvREFBaUI7SUFFaEI7UUFBZixZQUFZLEVBQUU7O3dEQUFzQjtJQUNoRCxxQkFBQztDQUFBLEFBcEJELElBb0JDO1NBUFksY0FBYzs7Ozs7O0lBRXpCLDhCQUE2Qjs7Ozs7SUFFN0Isa0NBQXlDOzs7OztJQUV6QyxzQ0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHJlbmQnLFxuICBleHBvcnRBczogJ3RyZW5kJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RyZW5kLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MudHJlbmRdJzogJ3RydWUnLFxuICAgICdbY2xhc3MudHJlbmRfX2dyZXldJzogJyFjb2xvcmZ1bCcsXG4gICAgJ1tjbGFzcy50cmVuZF9fcmV2ZXJzZV0nOiAnY29sb3JmdWwgJiYgcmV2ZXJzZUNvbG9yJyxcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBUcmVuZENvbXBvbmVudCB7XG4gIC8qKiDkuIrljYfkuIvpmY3moIfor4YgKi9cbiAgQElucHV0KCkgZmxhZzogJ3VwJyB8ICdkb3duJztcbiAgLyoqIOaYr+WQpuW9qeiJsuagh+iusCAqL1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY29sb3JmdWwgPSB0cnVlO1xuICAvKiog6aKc6Imy5Y+N6L2sICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByZXZlcnNlQ29sb3IgPSBmYWxzZTtcbn1cbiJdfQ==