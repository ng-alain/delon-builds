/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy90ZXh0YXJlYS90ZXh0YXJlYS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFHL0M7SUFNb0MsMENBQXVDO0lBTjNFO1FBQUEscUVBZUM7UUFSQyxjQUFRLEdBQTJCLElBQUksQ0FBQzs7SUFRMUMsQ0FBQzs7OztJQU5DLGlDQUFROzs7SUFBUjtRQUNVLElBQUEsMkJBQVE7UUFDaEIsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixncEJBQXFDO29CQUNyQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7O0lBVUQscUJBQUM7Q0FBQSxBQWZELENBTW9DLGVBQWUsR0FTbEQ7U0FUWSxjQUFjOzs7SUFDekIsa0NBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRvU2l6ZVR5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2lucHV0JztcbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBTRlRleHRhcmVhV2lkZ2V0U2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi10ZXh0YXJlYScsXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXh0YXJlYS53aWRnZXQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBUZXh0YXJlYVdpZGdldCBleHRlbmRzIENvbnRyb2xVSVdpZGdldDxTRlRleHRhcmVhV2lkZ2V0U2NoZW1hPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGF1dG9zaXplOiBib29sZWFuIHwgQXV0b1NpemVUeXBlID0gdHJ1ZTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGF1dG9zaXplIH0gPSB0aGlzLnVpO1xuICAgIGlmIChhdXRvc2l6ZSAhPSBudWxsKSB7XG4gICAgICB0aGlzLmF1dG9zaXplID0gYXV0b3NpemU7XG4gICAgfVxuICB9XG59XG4iXX0=