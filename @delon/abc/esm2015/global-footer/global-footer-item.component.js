/**
 * @fileoverview added by tsickle
 * Generated from: global-footer-item.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from '@delon/util';
export class GlobalFooterItemComponent {
}
GlobalFooterItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'global-footer-item',
                exportAs: 'globalFooterItem',
                template: ` <ng-template #host><ng-content></ng-content></ng-template> `,
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
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], GlobalFooterItemComponent.prototype, "blankTarget", void 0);
if (false) {
    /** @type {?} */
    GlobalFooterItemComponent.ngAcceptInputType_blankTarget;
    /** @type {?} */
    GlobalFooterItemComponent.prototype.host;
    /** @type {?} */
    GlobalFooterItemComponent.prototype.href;
    /** @type {?} */
    GlobalFooterItemComponent.prototype.blankTarget;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWZvb3Rlci1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9nbG9iYWwtZm9vdGVyL2dsb2JhbC1mb290ZXItaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwSCxPQUFPLEVBQWdCLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQVV6RCxNQUFNLE9BQU8seUJBQXlCOzs7WUFSckMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRSw4REFBOEQ7Z0JBQ3hFLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7O21CQUlFLFNBQVMsU0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO21CQUVsQyxLQUFLOzBCQUNMLEtBQUs7O0FBQW1CO0lBQWYsWUFBWSxFQUFFOzs4REFBc0I7OztJQUw5Qyx3REFBbUQ7O0lBRW5ELHlDQUFzRDs7SUFFdEQseUNBQXNCOztJQUN0QixnREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsb2JhbC1mb290ZXItaXRlbScsXG4gIGV4cG9ydEFzOiAnZ2xvYmFsRm9vdGVySXRlbScsXG4gIHRlbXBsYXRlOiBgIDxuZy10ZW1wbGF0ZSAjaG9zdD48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT4gYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBHbG9iYWxGb290ZXJJdGVtQ29tcG9uZW50IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2JsYW5rVGFyZ2V0OiBCb29sZWFuSW5wdXQ7XG5cbiAgQFZpZXdDaGlsZCgnaG9zdCcsIHsgc3RhdGljOiB0cnVlIH0pIGhvc3Q6IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KCkgaHJlZjogc3RyaW5nO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYmxhbmtUYXJnZXQ6IGJvb2xlYW47XG59XG4iXX0=