/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ArrayLayoutWidget } from '../../widget';
export class ArrayWidget extends ArrayLayoutWidget {
    constructor() {
        super(...arguments);
        this.arraySpan = 8;
    }
    /**
     * @return {?}
     */
    get addDisabled() {
        return (this.schema.maxItems &&
            ((/** @type {?} */ (this.formProperty.properties))).length >= this.schema.maxItems);
    }
    /**
     * @return {?}
     */
    get l() {
        return (/** @type {?} */ (this.formProperty.root.widget.sfComp)).locale;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.ui.grid && this.ui.grid.arraySpan) {
            this.arraySpan = this.ui.grid.arraySpan;
        }
        this.addTitle = this.ui.addTitle || this.l.addText;
        this.addType = this.ui.addType || 'dashed';
        this.removeTitle =
            this.ui.removable === false ? null : this.ui.removeTitle || this.l.removeText;
    }
    /**
     * @return {?}
     */
    addItem() {
        this.formProperty.add((/** @type {?} */ (null)));
    }
    /**
     * @param {?} index
     * @return {?}
     */
    removeItem(index) {
        this.formProperty.remove(index);
    }
}
ArrayWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-array',
                template: "<nz-form-item>\n  <nz-col *ngIf=\"schema.title\"\n          [nzSpan]=\"ui.spanLabel\"\n          class=\"ant-form-item-label\">\n    <label>\n      {{ schema.title }}\n      <span class=\"optional\">\n        {{ ui.optional }}\n        <nz-tooltip *ngIf=\"ui.optionalHelp\"\n                    [nzTitle]=\"ui.optionalHelp\">\n          <i nz-tooltip\n             nz-icon\n             type=\"question-circle\"></i>\n        </nz-tooltip>\n      </span>\n    </label>\n    <div class=\"sf__array-add\">\n      <button type=\"button\"\n              nz-button\n              [nzType]=\"addType\"\n              [disabled]=\"addDisabled\"\n              (click)=\"addItem()\"\n              [innerHTML]=\"addTitle\"></button>\n    </div>\n  </nz-col>\n  <nz-col class=\"ant-form-item-control-wrapper\"\n          [nzSpan]=\"ui.spanControl\"\n          [nzOffset]=\"ui.offsetControl\">\n    <div class=\"ant-form-item-control\"\n         [class.has-error]=\"showError\">\n\n      <nz-row class=\"sf__array-container\">\n        <ng-container *ngFor=\"let i of formProperty.properties; let idx=index\">\n          <nz-col *ngIf=\"i.visible && !i.ui.hidden\"\n                  [nzSpan]=\"arraySpan\"\n                  [attr.data-index]=\"idx\"\n                  class=\"sf-array-item\">\n            <nz-card>\n              <sf-item [formProperty]=\"i\"></sf-item>\n              <span *ngIf=\"removeTitle\"\n                    class=\"remove\"\n                    (click)=\"removeItem(idx)\"\n                    [attr.title]=\"removeTitle\">\n                <i nz-icon\n                   type=\"delete\"></i>\n              </span>\n            </nz-card>\n          </nz-col>\n        </ng-container>\n      </nz-row>\n\n      <nz-form-extra *ngIf=\"schema.description\"\n                     [innerHTML]=\"schema.description\"></nz-form-extra>\n      <nz-form-explain *ngIf=\"!ui.onlyVisual && showError\">{{error}}</nz-form-explain>\n\n    </div>\n  </nz-col>\n</nz-form-item>\n"
            }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9hcnJheS9hcnJheS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBTWpELE1BQU0sT0FBTyxXQUFZLFNBQVEsaUJBQWlCO0lBSmxEOztRQVFFLGNBQVMsR0FBRyxDQUFDLENBQUM7SUErQmhCLENBQUM7Ozs7SUE3QkMsSUFBSSxXQUFXO1FBQ2IsT0FBTyxDQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUNwQixDQUFDLG1CQUFBLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFrQixDQUFDLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUNoRixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELElBQUksQ0FBQztRQUNILE9BQU8sbUJBQUEsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBQyxDQUFDLE1BQU0sQ0FBQztJQUN0RCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3pDO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUNuRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxJQUFJLFFBQVEsQ0FBQztRQUMzQyxJQUFJLENBQUMsV0FBVztZQUNkLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUNsRixDQUFDOzs7O0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLG1CQUFBLElBQUksRUFBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7WUF0Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQiwrOERBQWtDO2FBQ25DOzs7O0lBRUMsK0JBQWlCOztJQUNqQiw4QkFBZ0I7O0lBQ2hCLGtDQUEyQjs7SUFDM0IsZ0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuLi8uLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB7IEFycmF5TGF5b3V0V2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtYXJyYXknLFxuICB0ZW1wbGF0ZVVybDogJy4vYXJyYXkud2lkZ2V0Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBcnJheVdpZGdldCBleHRlbmRzIEFycmF5TGF5b3V0V2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgYWRkVGl0bGU6IHN0cmluZztcbiAgYWRkVHlwZTogc3RyaW5nO1xuICByZW1vdmVUaXRsZTogc3RyaW5nIHwgbnVsbDtcbiAgYXJyYXlTcGFuID0gODtcblxuICBnZXQgYWRkRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuc2NoZW1hLm1heEl0ZW1zICYmXG4gICAgICAodGhpcy5mb3JtUHJvcGVydHkucHJvcGVydGllcyBhcyBGb3JtUHJvcGVydHlbXSkubGVuZ3RoID49IHRoaXMuc2NoZW1hLm1heEl0ZW1zXG4gICAgKTtcbiAgfVxuXG4gIGdldCBsKCk6IExvY2FsZURhdGEge1xuICAgIHJldHVybiB0aGlzLmZvcm1Qcm9wZXJ0eS5yb290LndpZGdldC5zZkNvbXAhLmxvY2FsZTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLmdyaWQgJiYgdGhpcy51aS5ncmlkLmFycmF5U3Bhbikge1xuICAgICAgdGhpcy5hcnJheVNwYW4gPSB0aGlzLnVpLmdyaWQuYXJyYXlTcGFuO1xuICAgIH1cblxuICAgIHRoaXMuYWRkVGl0bGUgPSB0aGlzLnVpLmFkZFRpdGxlIHx8IHRoaXMubC5hZGRUZXh0O1xuICAgIHRoaXMuYWRkVHlwZSA9IHRoaXMudWkuYWRkVHlwZSB8fCAnZGFzaGVkJztcbiAgICB0aGlzLnJlbW92ZVRpdGxlID1cbiAgICAgIHRoaXMudWkucmVtb3ZhYmxlID09PSBmYWxzZSA/IG51bGwgOiB0aGlzLnVpLnJlbW92ZVRpdGxlIHx8IHRoaXMubC5yZW1vdmVUZXh0O1xuICB9XG5cbiAgYWRkSXRlbSgpIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5hZGQobnVsbCEpO1xuICB9XG5cbiAgcmVtb3ZlSXRlbShpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkucmVtb3ZlKGluZGV4KTtcbiAgfVxufVxuIl19