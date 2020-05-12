/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/textarea/textarea.widget.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ControlUIWidget } from '../../widget';
var TextareaWidget = /** @class */ (function (_super) {
    tslib_1.__extends(TextareaWidget, _super);
    function TextareaWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.autosize = true;
        return _this;
    }
    /**
     * @return {?}
     */
    TextareaWidget.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var autosize = this.ui.autosize;
        if (autosize != null) {
            this.autosize = autosize;
        }
    };
    TextareaWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-textarea',
                    template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n\n  <textarea nz-input\n            [attr.id]=\"id\"\n            [disabled]=\"disabled\"\n            [attr.disabled]=\"disabled\"\n            [nzSize]=\"ui.size\"\n            [ngModel]=\"value\"\n            (ngModelChange)=\"setValue($event)\"\n            [attr.maxLength]=\"schema.maxLength || null\"\n            [attr.placeholder]=\"ui.placeholder\"\n            [nzAutosize]=\"autosize\">\n    </textarea>\n\n</sf-item-wrap>\n",
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    return TextareaWidget;
}(ControlUIWidget));
export { TextareaWidget };
if (false) {
    /** @type {?} */
    TextareaWidget.prototype.autosize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy90ZXh0YXJlYS90ZXh0YXJlYS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRy9DO0lBTW9DLDBDQUF1QztJQU4zRTtRQUFBLHFFQWVDO1FBUkMsY0FBUSxHQUEyQixJQUFJLENBQUM7O0lBUTFDLENBQUM7Ozs7SUFOQyxpQ0FBUTs7O0lBQVI7UUFDVSxJQUFBLDJCQUFRO1FBQ2hCLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztTQUMxQjtJQUNILENBQUM7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsZ3BCQUFxQztvQkFDckMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOztJQVVELHFCQUFDO0NBQUEsQUFmRCxDQU1vQyxlQUFlLEdBU2xEO1NBVFksY0FBYzs7O0lBQ3pCLGtDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0b1NpemVUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pbnB1dCc7XG5pbXBvcnQgeyBDb250cm9sVUlXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZUZXh0YXJlYVdpZGdldFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtdGV4dGFyZWEnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dGFyZWEud2lkZ2V0Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgVGV4dGFyZWFXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZUZXh0YXJlYVdpZGdldFNjaGVtYT4gaW1wbGVtZW50cyBPbkluaXQge1xuICBhdXRvc2l6ZTogYm9vbGVhbiB8IEF1dG9TaXplVHlwZSA9IHRydWU7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBhdXRvc2l6ZSB9ID0gdGhpcy51aTtcbiAgICBpZiAoYXV0b3NpemUgIT0gbnVsbCkge1xuICAgICAgdGhpcy5hdXRvc2l6ZSA9IGF1dG9zaXplO1xuICAgIH1cbiAgfVxufVxuIl19