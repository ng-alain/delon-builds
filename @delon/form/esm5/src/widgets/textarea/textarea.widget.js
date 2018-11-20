/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
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
        if (this.ui.autosize != null) {
            this.autosize = this.ui.autosize;
        }
    };
    TextareaWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-textarea',
                    template: "\n  <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n\n    <textarea nz-input\n      [attr.id]=\"id\"\n      [disabled]=\"disabled\"\n      [attr.disabled]=\"disabled\"\n      [nzSize]=\"ui.size\"\n      [ngModel]=\"value\"\n      (ngModelChange)=\"setValue($event)\"\n      [attr.maxLength]=\"schema.maxLength || null\"\n      [attr.placeholder]=\"ui.placeholder\"\n      [nzAutosize]=\"autosize\">\n    </textarea>\n\n  </sf-item-wrap>",
                    preserveWhitespaces: false
                }] }
    ];
    return TextareaWidget;
}(ControlWidget));
export { TextareaWidget };
if (false) {
    /** @type {?} */
    TextareaWidget.prototype.autosize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy90ZXh0YXJlYS90ZXh0YXJlYS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFHN0M7SUFvQm9DLDBDQUFhO0lBcEJqRDtRQUFBLHFFQTJCQztRQU5DLGNBQVEsR0FBUSxJQUFJLENBQUM7O0lBTXZCLENBQUM7Ozs7SUFMQyxpQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQzs7Z0JBMUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLDJnQkFlTTtvQkFDaEIsbUJBQW1CLEVBQUUsS0FBSztpQkFDM0I7O0lBUUQscUJBQUM7Q0FBQSxBQTNCRCxDQW9Cb0MsYUFBYSxHQU9oRDtTQVBZLGNBQWM7OztJQUN6QixrQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXRleHRhcmVhJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cblxuICAgIDx0ZXh0YXJlYSBuei1pbnB1dFxuICAgICAgW2F0dHIuaWRdPVwiaWRcIlxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFthdHRyLmRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQpXCJcbiAgICAgIFthdHRyLm1heExlbmd0aF09XCJzY2hlbWEubWF4TGVuZ3RoIHx8IG51bGxcIlxuICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxuICAgICAgW256QXV0b3NpemVdPVwiYXV0b3NpemVcIj5cbiAgICA8L3RleHRhcmVhPlxuXG4gIDwvc2YtaXRlbS13cmFwPmAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBUZXh0YXJlYVdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBhdXRvc2l6ZTogYW55ID0gdHJ1ZTtcbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkuYXV0b3NpemUgIT0gbnVsbCkge1xuICAgICAgdGhpcy5hdXRvc2l6ZSA9IHRoaXMudWkuYXV0b3NpemU7XG4gICAgfVxuICB9XG59XG4iXX0=