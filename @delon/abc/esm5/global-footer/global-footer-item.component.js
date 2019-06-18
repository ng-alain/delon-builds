/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, ViewEncapsulation, } from '@angular/core';
import { InputBoolean } from '@delon/util';
var GlobalFooterItemComponent = /** @class */ (function () {
    function GlobalFooterItemComponent() {
    }
    GlobalFooterItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'global-footer-item',
                    exportAs: 'globalFooterItem',
                    template: "\n    <ng-template #host><ng-content></ng-content></ng-template>\n  ",
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    GlobalFooterItemComponent.propDecorators = {
        host: [{ type: ViewChild, args: ['host', { static: true },] }],
        href: [{ type: Input }],
        blankTarget: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], GlobalFooterItemComponent.prototype, "blankTarget", void 0);
    return GlobalFooterItemComponent;
}());
export { GlobalFooterItemComponent };
if (false) {
    /** @type {?} */
    GlobalFooterItemComponent.prototype.host;
    /** @type {?} */
    GlobalFooterItemComponent.prototype.href;
    /** @type {?} */
    GlobalFooterItemComponent.prototype.blankTarget;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWZvb3Rlci1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvZ2xvYmFsLWZvb3Rlci8iLCJzb3VyY2VzIjpbImdsb2JhbC1mb290ZXItaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUzQztJQUFBO0lBZUEsQ0FBQzs7Z0JBZkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSxzRUFFVDtvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzs7dUJBRUUsU0FBUyxTQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7dUJBRWxDLEtBQUs7OEJBQ0wsS0FBSzs7SUFBbUI7UUFBZixZQUFZLEVBQUU7O2tFQUFzQjtJQUNoRCxnQ0FBQztDQUFBLEFBZkQsSUFlQztTQUxZLHlCQUF5Qjs7O0lBQ3BDLHlDQUFzRDs7SUFFdEQseUNBQXNCOztJQUN0QixnREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsb2JhbC1mb290ZXItaXRlbScsXG4gIGV4cG9ydEFzOiAnZ2xvYmFsRm9vdGVySXRlbScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICNob3N0PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L25nLXRlbXBsYXRlPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEdsb2JhbEZvb3Rlckl0ZW1Db21wb25lbnQge1xuICBAVmlld0NoaWxkKCdob3N0JywgeyBzdGF0aWM6IHRydWUgfSkgaG9zdDogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKSBocmVmOiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBibGFua1RhcmdldDogYm9vbGVhbjtcbn1cbiJdfQ==