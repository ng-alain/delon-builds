/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { AvatarListComponent } from './avatar-list.component';
export class AvatarListItemComponent {
    /**
     * @param {?} p
     */
    constructor(p) {
        this.p = p;
    }
    /**
     * @return {?}
     */
    get size() {
        return this.p._avatarSize;
    }
}
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
AvatarListItemComponent.ctorParameters = () => [
    { type: AvatarListComponent }
];
AvatarListItemComponent.propDecorators = {
    src: [{ type: Input }],
    text: [{ type: Input }],
    icon: [{ type: Input }],
    tips: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLWxpc3QtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2F2YXRhci1saXN0LyIsInNvdXJjZXMiOlsiYXZhdGFyLWxpc3QtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBUzlELE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFVbEMsWUFBb0IsQ0FBc0I7UUFBdEIsTUFBQyxHQUFELENBQUMsQ0FBcUI7SUFBRyxDQUFDOzs7O0lBSjlDLElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQzs7O1lBZkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQ0FBc0M7Z0JBQ2hELGlVQUFnRDtnQkFDaEQsSUFBSSxFQUFFO29CQUNKLDJCQUEyQixFQUFFLE1BQU07aUJBQ3BDO2FBQ0Y7Ozs7WUFSUSxtQkFBbUI7OztrQkFVekIsS0FBSzttQkFDTCxLQUFLO21CQUNMLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUhOLHNDQUFxQjs7SUFDckIsdUNBQXNCOztJQUN0Qix1Q0FBc0I7O0lBQ3RCLHVDQUFzQjs7SUFNVixvQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdmF0YXJMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9hdmF0YXItbGlzdC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdmF0YXItbGlzdC1pdGVtLCBbYXZhdGFyLWxpc3QtaXRlbV0nLFxuICB0ZW1wbGF0ZVVybDogJy4vYXZhdGFyLWxpc3QtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmF2YXRhci1saXN0X19pdGVtXSc6ICd0cnVlJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgQXZhdGFyTGlzdEl0ZW1Db21wb25lbnQge1xuICBASW5wdXQoKSBzcmM6IHN0cmluZztcbiAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRpcHM6IHN0cmluZztcblxuICBnZXQgc2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wLl9hdmF0YXJTaXplO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwOiBBdmF0YXJMaXN0Q29tcG9uZW50KSB7fVxufVxuIl19