/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from '@delon/util';
export class GlobalFooterItemComponent {
}
GlobalFooterItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'global-footer-item',
                exportAs: 'globalFooterItem',
                template: `
    <ng-template #host><ng-content></ng-content></ng-template>
  `,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
GlobalFooterItemComponent.propDecorators = {
    host: [{ type: ViewChild, args: ['host', { static: false },] }],
    href: [{ type: Input }],
    blankTarget: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], GlobalFooterItemComponent.prototype, "blankTarget", void 0);
if (false) {
    /** @type {?} */
    GlobalFooterItemComponent.prototype.host;
    /** @type {?} */
    GlobalFooterItemComponent.prototype.href;
    /** @type {?} */
    GlobalFooterItemComponent.prototype.blankTarget;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWZvb3Rlci1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvZ2xvYmFsLWZvb3Rlci8iLCJzb3VyY2VzIjpbImdsb2JhbC1mb290ZXItaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFZM0MsTUFBTSxPQUFPLHlCQUF5Qjs7O1lBVnJDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7O0dBRVQ7Z0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7bUJBRUUsU0FBUyxTQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7bUJBRW5DLEtBQUs7MEJBQ0wsS0FBSzs7QUFBbUI7SUFBZixZQUFZLEVBQUU7OzhEQUFzQjs7O0lBSDlDLHlDQUF1RDs7SUFFdkQseUNBQXNCOztJQUN0QixnREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbG9iYWwtZm9vdGVyLWl0ZW0nLFxuICBleHBvcnRBczogJ2dsb2JhbEZvb3Rlckl0ZW0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjaG9zdD48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBHbG9iYWxGb290ZXJJdGVtQ29tcG9uZW50IHtcbiAgQFZpZXdDaGlsZCgnaG9zdCcsIHsgc3RhdGljOiBmYWxzZSB9KSBob3N0OiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpIGhyZWY6IHN0cmluZztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJsYW5rVGFyZ2V0OiBib29sZWFuO1xufVxuIl19