/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ArrayLayoutWidget } from '../../widget';
var ArrayWidget = /** @class */ (function (_super) {
    tslib_1.__extends(ArrayWidget, _super);
    function ArrayWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.arraySpan = 8;
        return _this;
    }
    Object.defineProperty(ArrayWidget.prototype, "addDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.schema.maxItems && ((/** @type {?} */ (this.formProperty.properties))).length >= this.schema.maxItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayWidget.prototype, "l", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.formProperty.root.widget.sfComp)).locale;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ArrayWidget.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.ui.grid && this.ui.grid.arraySpan) {
            this.arraySpan = this.ui.grid.arraySpan;
        }
        this.addTitle = this.ui.addTitle || this.l.addText;
        this.addType = this.ui.addType || 'dashed';
        this.removeTitle = this.ui.removable === false ? null : this.ui.removeTitle || this.l.removeText;
    };
    /**
     * @return {?}
     */
    ArrayWidget.prototype.addItem = /**
     * @return {?}
     */
    function () {
        this.formProperty.add((/** @type {?} */ (null)));
    };
    /**
     * @param {?} index
     * @return {?}
     */
    ArrayWidget.prototype.removeItem = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.formProperty.remove(index);
    };
    ArrayWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-array',
                    template: "<nz-form-item>\n  <nz-col *ngIf=\"schema.title\"\n          [nzSpan]=\"ui.spanLabel\"\n          class=\"ant-form-item-label\">\n    <label>\n      {{ schema.title }}\n      <span class=\"optional\">\n        {{ ui.optional }}\n        <nz-tooltip *ngIf=\"ui.optionalHelp\"\n                    [nzTitle]=\"ui.optionalHelp\">\n          <i nz-tooltip\n             nz-icon\n             nzType=\"question-circle\"></i>\n        </nz-tooltip>\n      </span>\n    </label>\n    <div class=\"sf__array-add\">\n      <button type=\"button\"\n              nz-button\n              [nzType]=\"addType\"\n              [disabled]=\"addDisabled\"\n              (click)=\"addItem()\"\n              [innerHTML]=\"addTitle\"></button>\n    </div>\n  </nz-col>\n  <nz-col class=\"ant-form-item-control-wrapper\"\n          [nzSpan]=\"ui.spanControl\"\n          [nzOffset]=\"ui.offsetControl\">\n    <div class=\"ant-form-item-control\"\n         [class.has-error]=\"showError\">\n\n      <nz-row class=\"sf__array-container\">\n        <ng-container *ngFor=\"let i of formProperty.properties; let idx=index\">\n          <nz-col *ngIf=\"i.visible && !i.ui.hidden\"\n                  [nzSpan]=\"arraySpan\"\n                  [attr.data-index]=\"idx\"\n                  class=\"sf-array-item\">\n            <nz-card>\n              <sf-item [formProperty]=\"i\"></sf-item>\n              <span *ngIf=\"removeTitle\"\n                    class=\"remove\"\n                    (click)=\"removeItem(idx)\"\n                    [attr.title]=\"removeTitle\">\n                <i nz-icon nzType=\"delete\"></i>\n              </span>\n            </nz-card>\n          </nz-col>\n        </ng-container>\n      </nz-row>\n\n      <nz-form-extra *ngIf=\"schema.description\"\n                     [innerHTML]=\"schema.description\"></nz-form-extra>\n      <nz-form-explain *ngIf=\"!ui.onlyVisual && showError\">{{error}}</nz-form-explain>\n\n    </div>\n  </nz-col>\n</nz-form-item>\n"
                }] }
    ];
    return ArrayWidget;
}(ArrayLayoutWidget));
export { ArrayWidget };
if (false) {
    /** @type {?} */
    ArrayWidget.prototype.addTitle;
    /** @type {?} */
    ArrayWidget.prototype.addType;
    /** @type {?} */
    ArrayWidget.prototype.removeTitle;
    /** @type {?} */
    ArrayWidget.prototype.arraySpan;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9hcnJheS9hcnJheS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBR2xELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUVqRDtJQUlpQyx1Q0FBaUI7SUFKbEQ7UUFBQSxxRUFtQ0M7UUEzQkMsZUFBUyxHQUFHLENBQUMsQ0FBQzs7SUEyQmhCLENBQUM7SUF6QkMsc0JBQUksb0NBQVc7Ozs7UUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksQ0FBQyxtQkFBQSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBa0IsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNqSCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDBCQUFDOzs7O1FBQUw7WUFDRSxPQUFPLG1CQUFBLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxNQUFNLENBQUM7UUFDdEQsQ0FBQzs7O09BQUE7Ozs7SUFFRCw4QkFBUTs7O0lBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN6QztRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDbkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sSUFBSSxRQUFRLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDbkcsQ0FBQzs7OztJQUVELDZCQUFPOzs7SUFBUDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLG1CQUFBLElBQUksRUFBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCxnQ0FBVTs7OztJQUFWLFVBQVcsS0FBYTtRQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDOztnQkFsQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQiwrN0RBQWtDO2lCQUNuQzs7SUFnQ0Qsa0JBQUM7Q0FBQSxBQW5DRCxDQUlpQyxpQkFBaUIsR0ErQmpEO1NBL0JZLFdBQVc7OztJQUN0QiwrQkFBaUI7O0lBQ2pCLDhCQUFnQjs7SUFDaEIsa0NBQTJCOztJQUMzQixnQ0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4uLy4uL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgQXJyYXlMYXlvdXRXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1hcnJheScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hcnJheS53aWRnZXQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEFycmF5V2lkZ2V0IGV4dGVuZHMgQXJyYXlMYXlvdXRXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBhZGRUaXRsZTogc3RyaW5nO1xuICBhZGRUeXBlOiBzdHJpbmc7XG4gIHJlbW92ZVRpdGxlOiBzdHJpbmcgfCBudWxsO1xuICBhcnJheVNwYW4gPSA4O1xuXG4gIGdldCBhZGREaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4SXRlbXMgJiYgKHRoaXMuZm9ybVByb3BlcnR5LnByb3BlcnRpZXMgYXMgRm9ybVByb3BlcnR5W10pLmxlbmd0aCA+PSB0aGlzLnNjaGVtYS5tYXhJdGVtcztcbiAgfVxuXG4gIGdldCBsKCk6IExvY2FsZURhdGEge1xuICAgIHJldHVybiB0aGlzLmZvcm1Qcm9wZXJ0eS5yb290LndpZGdldC5zZkNvbXAhLmxvY2FsZTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLmdyaWQgJiYgdGhpcy51aS5ncmlkLmFycmF5U3Bhbikge1xuICAgICAgdGhpcy5hcnJheVNwYW4gPSB0aGlzLnVpLmdyaWQuYXJyYXlTcGFuO1xuICAgIH1cblxuICAgIHRoaXMuYWRkVGl0bGUgPSB0aGlzLnVpLmFkZFRpdGxlIHx8IHRoaXMubC5hZGRUZXh0O1xuICAgIHRoaXMuYWRkVHlwZSA9IHRoaXMudWkuYWRkVHlwZSB8fCAnZGFzaGVkJztcbiAgICB0aGlzLnJlbW92ZVRpdGxlID0gdGhpcy51aS5yZW1vdmFibGUgPT09IGZhbHNlID8gbnVsbCA6IHRoaXMudWkucmVtb3ZlVGl0bGUgfHwgdGhpcy5sLnJlbW92ZVRleHQ7XG4gIH1cblxuICBhZGRJdGVtKCkge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LmFkZChudWxsISk7XG4gIH1cblxuICByZW1vdmVJdGVtKGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5yZW1vdmUoaW5kZXgpO1xuICB9XG59XG4iXX0=