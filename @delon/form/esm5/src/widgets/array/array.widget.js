/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            return (this.schema.maxItems &&
                (/** @type {?} */ (this.formProperty.properties)).length >= this.schema.maxItems);
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
        if (this.ui.grid && this.ui.grid.arraySpan)
            this.arraySpan = this.ui.grid.arraySpan;
        this.addTitle = this.ui.addTitle || '添加';
        this.addType = this.ui.addType || 'dashed';
        this.removeTitle =
            this.ui.removable === false ? null : this.ui.removeTitle || '移除';
    };
    /**
     * @return {?}
     */
    ArrayWidget.prototype.addItem = /**
     * @return {?}
     */
    function () {
        this.formProperty.add(null);
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
                    template: "\n  <nz-form-item>\n    <nz-col *ngIf=\"schema.title\" [nzSpan]=\"ui.spanLabel\" class=\"ant-form-item-label\">\n      <label>\n        {{ schema.title }}\n        <span class=\"optional\">\n          {{ ui.optional }}\n          <nz-tooltip *ngIf=\"ui.optionalHelp\" [nzTitle]=\"ui.optionalHelp\">\n            <i nz-tooltip class=\"anticon anticon-question-circle-o\"></i>\n          </nz-tooltip>\n        </span>\n      </label>\n      <div class=\"add\">\n        <button nz-button [nzType]=\"addType\" [disabled]=\"addDisabled\" (click)=\"addItem()\" [innerHTML]=\"addTitle\"></button>\n      </div>\n    </nz-col>\n    <nz-col class=\"ant-form-item-control-wrapper\" [nzSpan]=\"ui.spanControl\" [nzOffset]=\"ui.offsetControl\">\n      <div class=\"ant-form-item-control\" [class.has-error]=\"showError\">\n\n        <nz-row class=\"sf-array-container\">\n          <ng-container *ngFor=\"let i of formProperty.properties; let idx=index\">\n            <nz-col *ngIf=\"i.visible && !i.ui.hidden\" [nzSpan]=\"arraySpan\" [attr.data-index]=\"idx\" class=\"sf-array-item\">\n              <nz-card>\n                <sf-item [formProperty]=\"i\"></sf-item>\n                <span *ngIf=\"removeTitle\" class=\"remove\" (click)=\"removeItem(idx)\" [attr.title]=\"removeTitle\">\n                  <i class=\"anticon anticon-delete\"></i>\n                </span>\n              </nz-card>\n            </nz-col>\n          </ng-container>\n        </nz-row>\n\n        <nz-form-extra *ngIf=\"schema.description\" [innerHTML]=\"schema.description\"></nz-form-extra>\n        <nz-form-explain *ngIf=\"!ui.onlyVisual && showError\">{{error}}</nz-form-explain>\n\n      </div>\n    </nz-col>\n  </nz-form-item>\n  "
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9hcnJheS9hcnJheS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7SUE0Q2hCLHVDQUFpQjs7OzBCQUlwQyxDQUFDOzs7SUFFYixzQkFBSSxvQ0FBVzs7OztRQUFmO1lBQ0UsT0FBTyxDQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUTtnQkFDcEIsbUJBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFtQixFQUFDLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUN2RSxDQUFDO1NBQ0g7OztPQUFBOzs7O0lBRUQsOEJBQVE7OztJQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBRTFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLElBQUksUUFBUSxDQUFDO1FBQzNDLElBQUksQ0FBQyxXQUFXO1lBQ2QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQztLQUNwRTs7OztJQUVELDZCQUFPOzs7SUFBUDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzdCOzs7OztJQUVELGdDQUFVOzs7O0lBQVYsVUFBVyxLQUFhO1FBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2pDOztnQkF2RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixRQUFRLEVBQUUsa3JEQXNDVDtpQkFDRjs7c0JBNUNEO0VBNkNpQyxpQkFBaUI7U0FBckMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcnJheUxheW91dFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWFycmF5JyxcbiAgdGVtcGxhdGU6IGBcbiAgPG56LWZvcm0taXRlbT5cbiAgICA8bnotY29sICpuZ0lmPVwic2NoZW1hLnRpdGxlXCIgW256U3Bhbl09XCJ1aS5zcGFuTGFiZWxcIiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tbGFiZWxcIj5cbiAgICAgIDxsYWJlbD5cbiAgICAgICAge3sgc2NoZW1hLnRpdGxlIH19XG4gICAgICAgIDxzcGFuIGNsYXNzPVwib3B0aW9uYWxcIj5cbiAgICAgICAgICB7eyB1aS5vcHRpb25hbCB9fVxuICAgICAgICAgIDxuei10b29sdGlwICpuZ0lmPVwidWkub3B0aW9uYWxIZWxwXCIgW256VGl0bGVdPVwidWkub3B0aW9uYWxIZWxwXCI+XG4gICAgICAgICAgICA8aSBuei10b29sdGlwIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLXF1ZXN0aW9uLWNpcmNsZS1vXCI+PC9pPlxuICAgICAgICAgIDwvbnotdG9vbHRpcD5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxkaXYgY2xhc3M9XCJhZGRcIj5cbiAgICAgICAgPGJ1dHRvbiBuei1idXR0b24gW256VHlwZV09XCJhZGRUeXBlXCIgW2Rpc2FibGVkXT1cImFkZERpc2FibGVkXCIgKGNsaWNrKT1cImFkZEl0ZW0oKVwiIFtpbm5lckhUTUxdPVwiYWRkVGl0bGVcIj48L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbnotY29sPlxuICAgIDxuei1jb2wgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNvbnRyb2wtd3JhcHBlclwiIFtuelNwYW5dPVwidWkuc3BhbkNvbnRyb2xcIiBbbnpPZmZzZXRdPVwidWkub2Zmc2V0Q29udHJvbFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY29udHJvbFwiIFtjbGFzcy5oYXMtZXJyb3JdPVwic2hvd0Vycm9yXCI+XG5cbiAgICAgICAgPG56LXJvdyBjbGFzcz1cInNmLWFycmF5LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGkgb2YgZm9ybVByb3BlcnR5LnByb3BlcnRpZXM7IGxldCBpZHg9aW5kZXhcIj5cbiAgICAgICAgICAgIDxuei1jb2wgKm5nSWY9XCJpLnZpc2libGUgJiYgIWkudWkuaGlkZGVuXCIgW256U3Bhbl09XCJhcnJheVNwYW5cIiBbYXR0ci5kYXRhLWluZGV4XT1cImlkeFwiIGNsYXNzPVwic2YtYXJyYXktaXRlbVwiPlxuICAgICAgICAgICAgICA8bnotY2FyZD5cbiAgICAgICAgICAgICAgICA8c2YtaXRlbSBbZm9ybVByb3BlcnR5XT1cImlcIj48L3NmLWl0ZW0+XG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJyZW1vdmVUaXRsZVwiIGNsYXNzPVwicmVtb3ZlXCIgKGNsaWNrKT1cInJlbW92ZUl0ZW0oaWR4KVwiIFthdHRyLnRpdGxlXT1cInJlbW92ZVRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImFudGljb24gYW50aWNvbi1kZWxldGVcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L256LWNhcmQ+XG4gICAgICAgICAgICA8L256LWNvbD5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uei1yb3c+XG5cbiAgICAgICAgPG56LWZvcm0tZXh0cmEgKm5nSWY9XCJzY2hlbWEuZGVzY3JpcHRpb25cIiBbaW5uZXJIVE1MXT1cInNjaGVtYS5kZXNjcmlwdGlvblwiPjwvbnotZm9ybS1leHRyYT5cbiAgICAgICAgPG56LWZvcm0tZXhwbGFpbiAqbmdJZj1cIiF1aS5vbmx5VmlzdWFsICYmIHNob3dFcnJvclwiPnt7ZXJyb3J9fTwvbnotZm9ybS1leHBsYWluPlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L256LWNvbD5cbiAgPC9uei1mb3JtLWl0ZW0+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIEFycmF5V2lkZ2V0IGV4dGVuZHMgQXJyYXlMYXlvdXRXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBhZGRUaXRsZTogc3RyaW5nO1xuICBhZGRUeXBlOiBzdHJpbmc7XG4gIHJlbW92ZVRpdGxlOiBzdHJpbmc7XG4gIGFycmF5U3BhbiA9IDg7XG5cbiAgZ2V0IGFkZERpc2FibGVkKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnNjaGVtYS5tYXhJdGVtcyAmJlxuICAgICAgKHRoaXMuZm9ybVByb3BlcnR5LnByb3BlcnRpZXMgYXMgYW55W10pLmxlbmd0aCA+PSB0aGlzLnNjaGVtYS5tYXhJdGVtc1xuICAgICk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5ncmlkICYmIHRoaXMudWkuZ3JpZC5hcnJheVNwYW4pXG4gICAgICB0aGlzLmFycmF5U3BhbiA9IHRoaXMudWkuZ3JpZC5hcnJheVNwYW47XG5cbiAgICB0aGlzLmFkZFRpdGxlID0gdGhpcy51aS5hZGRUaXRsZSB8fCAn5re75YqgJztcbiAgICB0aGlzLmFkZFR5cGUgPSB0aGlzLnVpLmFkZFR5cGUgfHwgJ2Rhc2hlZCc7XG4gICAgdGhpcy5yZW1vdmVUaXRsZSA9XG4gICAgICB0aGlzLnVpLnJlbW92YWJsZSA9PT0gZmFsc2UgPyBudWxsIDogdGhpcy51aS5yZW1vdmVUaXRsZSB8fCAn56e76ZmkJztcbiAgfVxuXG4gIGFkZEl0ZW0oKSB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuYWRkKG51bGwpO1xuICB9XG5cbiAgcmVtb3ZlSXRlbShpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkucmVtb3ZlKGluZGV4KTtcbiAgfVxufVxuIl19