/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { AvatarListComponent } from './avatar-list.component';
var AvatarListItemComponent = /** @class */ (function () {
    function AvatarListItemComponent(p) {
        this.p = p;
    }
    Object.defineProperty(AvatarListItemComponent.prototype, "size", {
        get: /**
         * @return {?}
         */
        function () {
            return this.p._avatarSize;
        },
        enumerable: true,
        configurable: true
    });
    AvatarListItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'avatar-list-item, [avatar-list-item]',
                    template: "<nz-tooltip *ngIf=\"tips\" [nzTitle]=\"tips\">\n  <nz-avatar nz-tooltip [nzSrc]=\"src\" [nzText]=\"text\" [nzIcon]=\"icon\" [nzSize]=\"size\"></nz-avatar>\n</nz-tooltip>\n<nz-avatar *ngIf=\"!tips\" [nzSrc]=\"src\" [nzText]=\"text\" [nzIcon]=\"icon\" [nzSize]=\"size\"></nz-avatar>\n<ng-content></ng-content>\n",
                    host: {
                        '[class.avatar-list__item]': 'true',
                    }
                }] }
    ];
    /** @nocollapse */
    AvatarListItemComponent.ctorParameters = function () { return [
        { type: AvatarListComponent }
    ]; };
    AvatarListItemComponent.propDecorators = {
        src: [{ type: Input }],
        text: [{ type: Input }],
        icon: [{ type: Input }],
        tips: [{ type: Input }]
    };
    return AvatarListItemComponent;
}());
export { AvatarListItemComponent };
if (false) {
    /** @type {?} */
    AvatarListItemComponent.prototype.src;
    /** @type {?} */
    AvatarListItemComponent.prototype.text;
    /** @type {?} */
    AvatarListItemComponent.prototype.icon;
    /** @type {?} */
    AvatarListItemComponent.prototype.tips;
    /** @type {?} */
    AvatarListItemComponent.prototype.p;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLWxpc3QtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2F2YXRhci1saXN0LyIsInNvdXJjZXMiOlsiYXZhdGFyLWxpc3QtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTlEO0lBaUJFLGlDQUFvQixDQUFzQjtRQUF0QixNQUFDLEdBQUQsQ0FBQyxDQUFxQjtJQUFHLENBQUM7SUFKOUMsc0JBQUkseUNBQUk7Ozs7UUFBUjtZQUNFLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7O2dCQWZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0NBQXNDO29CQUNoRCxpVUFBZ0Q7b0JBQ2hELElBQUksRUFBRTt3QkFDSiwyQkFBMkIsRUFBRSxNQUFNO3FCQUNwQztpQkFDRjs7OztnQkFSUSxtQkFBbUI7OztzQkFVekIsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzs7SUFPUiw4QkFBQztDQUFBLEFBbEJELElBa0JDO1NBWFksdUJBQXVCOzs7SUFDbEMsc0NBQXFCOztJQUNyQix1Q0FBc0I7O0lBQ3RCLHVDQUFzQjs7SUFDdEIsdUNBQXNCOztJQU1WLG9DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF2YXRhckxpc3RDb21wb25lbnQgfSBmcm9tICcuL2F2YXRhci1saXN0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F2YXRhci1saXN0LWl0ZW0sIFthdmF0YXItbGlzdC1pdGVtXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hdmF0YXItbGlzdC1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYXZhdGFyLWxpc3RfX2l0ZW1dJzogJ3RydWUnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBBdmF0YXJMaXN0SXRlbUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHNyYzogc3RyaW5nO1xuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgQElucHV0KCkgdGlwczogc3RyaW5nO1xuXG4gIGdldCBzaXplKCkge1xuICAgIHJldHVybiB0aGlzLnAuX2F2YXRhclNpemU7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHA6IEF2YXRhckxpc3RDb21wb25lbnQpIHt9XG59XG4iXX0=