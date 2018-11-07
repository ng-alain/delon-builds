/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                ((/** @type {?} */ (this.formProperty.properties))).length >= this.schema.maxItems);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayWidget.prototype, "l", {
        get: /**
         * @return {?}
         */
        function () {
            return this.formProperty.root.widget.sfComp.locale;
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
        this.addTitle = this.ui.addTitle || this.l['addText'];
        this.addType = this.ui.addType || 'dashed';
        this.removeTitle =
            this.ui.removable === false ? null : this.ui.removeTitle || this.l['removeText'];
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
                    template: "\n  <nz-form-item>\n    <nz-col *ngIf=\"schema.title\" [nzSpan]=\"ui.spanLabel\" class=\"ant-form-item-label\">\n      <label>\n        {{ schema.title }}\n        <span class=\"optional\">\n          {{ ui.optional }}\n          <nz-tooltip *ngIf=\"ui.optionalHelp\" [nzTitle]=\"ui.optionalHelp\">\n            <i nz-tooltip nz-icon type=\"question-circle\"></i>\n          </nz-tooltip>\n        </span>\n      </label>\n      <div class=\"add\">\n        <button nz-button [nzType]=\"addType\" [disabled]=\"addDisabled\" (click)=\"addItem()\" [innerHTML]=\"addTitle\"></button>\n      </div>\n    </nz-col>\n    <nz-col class=\"ant-form-item-control-wrapper\" [nzSpan]=\"ui.spanControl\" [nzOffset]=\"ui.offsetControl\">\n      <div class=\"ant-form-item-control\" [class.has-error]=\"showError\">\n\n        <nz-row class=\"sf-array-container\">\n          <ng-container *ngFor=\"let i of formProperty.properties; let idx=index\">\n            <nz-col *ngIf=\"i.visible && !i.ui.hidden\" [nzSpan]=\"arraySpan\" [attr.data-index]=\"idx\" class=\"sf-array-item\">\n              <nz-card>\n                <sf-item [formProperty]=\"i\"></sf-item>\n                <span *ngIf=\"removeTitle\" class=\"remove\" (click)=\"removeItem(idx)\" [attr.title]=\"removeTitle\">\n                  <i nz-icon type=\"delete\"></i>\n                </span>\n              </nz-card>\n            </nz-col>\n          </ng-container>\n        </nz-row>\n\n        <nz-form-extra *ngIf=\"schema.description\" [innerHTML]=\"schema.description\"></nz-form-extra>\n        <nz-form-explain *ngIf=\"!ui.onlyVisual && showError\">{{error}}</nz-form-explain>\n\n      </div>\n    </nz-col>\n  </nz-form-item>\n  "
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9hcnJheS9hcnJheS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUVqRDtJQTBDaUMsdUNBQWlCO0lBMUNsRDtRQUFBLHFFQTRFQztRQTlCQyxlQUFTLEdBQUcsQ0FBQyxDQUFDOztJQThCaEIsQ0FBQztJQTVCQyxzQkFBSSxvQ0FBVzs7OztRQUFmO1lBQ0UsT0FBTyxDQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUTtnQkFDcEIsQ0FBQyxtQkFBQSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBUyxDQUFDLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUN2RSxDQUFDO1FBQ0osQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwwQkFBQzs7OztRQUFMO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNyRCxDQUFDOzs7T0FBQTs7OztJQUVELDhCQUFROzs7SUFBUjtRQUNFLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUztZQUN4QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUUxQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sSUFBSSxRQUFRLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVc7WUFDZCxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNyRixDQUFDOzs7O0lBRUQsNkJBQU87OztJQUFQO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxnQ0FBVTs7OztJQUFWLFVBQVcsS0FBYTtRQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDOztnQkEzRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixRQUFRLEVBQUUsOHBEQXNDVDtpQkFDRjs7SUFtQ0Qsa0JBQUM7Q0FBQSxBQTVFRCxDQTBDaUMsaUJBQWlCLEdBa0NqRDtTQWxDWSxXQUFXOzs7SUFDdEIsK0JBQWlCOztJQUNqQiw4QkFBZ0I7O0lBQ2hCLGtDQUFvQjs7SUFDcEIsZ0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXJyYXlMYXlvdXRXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1hcnJheScsXG4gIHRlbXBsYXRlOiBgXG4gIDxuei1mb3JtLWl0ZW0+XG4gICAgPG56LWNvbCAqbmdJZj1cInNjaGVtYS50aXRsZVwiIFtuelNwYW5dPVwidWkuc3BhbkxhYmVsXCIgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWxhYmVsXCI+XG4gICAgICA8bGFiZWw+XG4gICAgICAgIHt7IHNjaGVtYS50aXRsZSB9fVxuICAgICAgICA8c3BhbiBjbGFzcz1cIm9wdGlvbmFsXCI+XG4gICAgICAgICAge3sgdWkub3B0aW9uYWwgfX1cbiAgICAgICAgICA8bnotdG9vbHRpcCAqbmdJZj1cInVpLm9wdGlvbmFsSGVscFwiIFtuelRpdGxlXT1cInVpLm9wdGlvbmFsSGVscFwiPlxuICAgICAgICAgICAgPGkgbnotdG9vbHRpcCBuei1pY29uIHR5cGU9XCJxdWVzdGlvbi1jaXJjbGVcIj48L2k+XG4gICAgICAgICAgPC9uei10b29sdGlwPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGRpdiBjbGFzcz1cImFkZFwiPlxuICAgICAgICA8YnV0dG9uIG56LWJ1dHRvbiBbbnpUeXBlXT1cImFkZFR5cGVcIiBbZGlzYWJsZWRdPVwiYWRkRGlzYWJsZWRcIiAoY2xpY2spPVwiYWRkSXRlbSgpXCIgW2lubmVySFRNTF09XCJhZGRUaXRsZVwiPjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9uei1jb2w+XG4gICAgPG56LWNvbCBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY29udHJvbC13cmFwcGVyXCIgW256U3Bhbl09XCJ1aS5zcGFuQ29udHJvbFwiIFtuek9mZnNldF09XCJ1aS5vZmZzZXRDb250cm9sXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sXCIgW2NsYXNzLmhhcy1lcnJvcl09XCJzaG93RXJyb3JcIj5cblxuICAgICAgICA8bnotcm93IGNsYXNzPVwic2YtYXJyYXktY29udGFpbmVyXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaSBvZiBmb3JtUHJvcGVydHkucHJvcGVydGllczsgbGV0IGlkeD1pbmRleFwiPlxuICAgICAgICAgICAgPG56LWNvbCAqbmdJZj1cImkudmlzaWJsZSAmJiAhaS51aS5oaWRkZW5cIiBbbnpTcGFuXT1cImFycmF5U3BhblwiIFthdHRyLmRhdGEtaW5kZXhdPVwiaWR4XCIgY2xhc3M9XCJzZi1hcnJheS1pdGVtXCI+XG4gICAgICAgICAgICAgIDxuei1jYXJkPlxuICAgICAgICAgICAgICAgIDxzZi1pdGVtIFtmb3JtUHJvcGVydHldPVwiaVwiPjwvc2YtaXRlbT5cbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInJlbW92ZVRpdGxlXCIgY2xhc3M9XCJyZW1vdmVcIiAoY2xpY2spPVwicmVtb3ZlSXRlbShpZHgpXCIgW2F0dHIudGl0bGVdPVwicmVtb3ZlVGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIDxpIG56LWljb24gdHlwZT1cImRlbGV0ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvbnotY2FyZD5cbiAgICAgICAgICAgIDwvbnotY29sPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L256LXJvdz5cblxuICAgICAgICA8bnotZm9ybS1leHRyYSAqbmdJZj1cInNjaGVtYS5kZXNjcmlwdGlvblwiIFtpbm5lckhUTUxdPVwic2NoZW1hLmRlc2NyaXB0aW9uXCI+PC9uei1mb3JtLWV4dHJhPlxuICAgICAgICA8bnotZm9ybS1leHBsYWluICpuZ0lmPVwiIXVpLm9ubHlWaXN1YWwgJiYgc2hvd0Vycm9yXCI+e3tlcnJvcn19PC9uei1mb3JtLWV4cGxhaW4+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvbnotY29sPlxuICA8L256LWZvcm0taXRlbT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQXJyYXlXaWRnZXQgZXh0ZW5kcyBBcnJheUxheW91dFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGFkZFRpdGxlOiBzdHJpbmc7XG4gIGFkZFR5cGU6IHN0cmluZztcbiAgcmVtb3ZlVGl0bGU6IHN0cmluZztcbiAgYXJyYXlTcGFuID0gODtcblxuICBnZXQgYWRkRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuc2NoZW1hLm1heEl0ZW1zICYmXG4gICAgICAodGhpcy5mb3JtUHJvcGVydHkucHJvcGVydGllcyBhcyBhbnlbXSkubGVuZ3RoID49IHRoaXMuc2NoZW1hLm1heEl0ZW1zXG4gICAgKTtcbiAgfVxuXG4gIGdldCBsKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm1Qcm9wZXJ0eS5yb290LndpZGdldC5zZkNvbXAubG9jYWxlO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkuZ3JpZCAmJiB0aGlzLnVpLmdyaWQuYXJyYXlTcGFuKVxuICAgICAgdGhpcy5hcnJheVNwYW4gPSB0aGlzLnVpLmdyaWQuYXJyYXlTcGFuO1xuXG4gICAgdGhpcy5hZGRUaXRsZSA9IHRoaXMudWkuYWRkVGl0bGUgfHwgdGhpcy5sWydhZGRUZXh0J107XG4gICAgdGhpcy5hZGRUeXBlID0gdGhpcy51aS5hZGRUeXBlIHx8ICdkYXNoZWQnO1xuICAgIHRoaXMucmVtb3ZlVGl0bGUgPVxuICAgICAgdGhpcy51aS5yZW1vdmFibGUgPT09IGZhbHNlID8gbnVsbCA6IHRoaXMudWkucmVtb3ZlVGl0bGUgfHwgdGhpcy5sWydyZW1vdmVUZXh0J107XG4gIH1cblxuICBhZGRJdGVtKCkge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LmFkZChudWxsKTtcbiAgfVxuXG4gIHJlbW92ZUl0ZW0oaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LnJlbW92ZShpbmRleCk7XG4gIH1cbn1cbiJdfQ==