/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { InputBoolean } from '@delon/util';
var GlobalFooterItemComponent = /** @class */ (function () {
    function GlobalFooterItemComponent() {
    }
    GlobalFooterItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'global-footer-item',
                    template: "<ng-template #host><ng-content></ng-content></ng-template>"
                }] }
    ];
    GlobalFooterItemComponent.propDecorators = {
        host: [{ type: ViewChild, args: ['host',] }],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWZvb3Rlci1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvZ2xvYmFsLWZvb3Rlci8iLCJzb3VyY2VzIjpbImdsb2JhbC1mb290ZXItaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7O2dCQUUxQyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLDREQUE0RDtpQkFDdkU7Ozt1QkFFRSxTQUFTLFNBQUMsTUFBTTt1QkFHaEIsS0FBSzs4QkFHTCxLQUFLOzs7UUFDTCxZQUFZLEVBQUU7OztvQ0FmakI7O1NBT2EseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsb2JhbC1mb290ZXItaXRlbScsXG4gIHRlbXBsYXRlOiBgPG5nLXRlbXBsYXRlICNob3N0PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L25nLXRlbXBsYXRlPmAsXG59KVxuZXhwb3J0IGNsYXNzIEdsb2JhbEZvb3Rlckl0ZW1Db21wb25lbnQge1xuICBAVmlld0NoaWxkKCdob3N0JylcbiAgaG9zdDogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKVxuICBocmVmOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIGJsYW5rVGFyZ2V0OiBib29sZWFuO1xufVxuIl19