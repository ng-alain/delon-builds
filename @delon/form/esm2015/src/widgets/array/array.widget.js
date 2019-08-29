/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
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
        return this.disabled || (this.schema.maxItems && ((/** @type {?} */ (this.formProperty.properties))).length >= this.schema.maxItems);
    }
    /**
     * @return {?}
     */
    get showRemove() {
        return !this.disabled && this.removeTitle;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const { grid, addTitle, addType, removable, removeTitle } = this.ui;
        if (grid && grid.arraySpan) {
            this.arraySpan = grid.arraySpan;
        }
        this.addTitle = addTitle || this.l.addText;
        this.addType = addType || 'dashed';
        this.removeTitle = removable === false ? null : removeTitle || this.l.removeText;
    }
    /**
     * @return {?}
     */
    addItem() {
        this.formProperty.add({});
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
                template: "<nz-form-item [class.ant-form-item-with-help]=\"showError\">\n  <nz-col *ngIf=\"schema.title\" [nzSpan]=\"ui.spanLabel\" class=\"ant-form-item-label\">\n    <label>\n      {{ schema.title }}\n      <span class=\"sf__optional\">\n        {{ ui.optional }}\n        <i *ngIf=\"oh\" nz-tooltip\n          [nzTooltipTitle]=\"oh.text\" [nzTooltipTrigger]=\"oh.placement\" [nzTooltipTrigger]=\"oh.trigger\"\n          [nzOverlayClassName]=\"oh.overlayClassName\" [nzOverlayStyle]=\"oh.overlayStyle\"\n          [nzMouseEnterDelay]=\"oh.mouseEnterDelay\" [nzMouseLeaveDelay]=\"oh.mouseLeaveDelay\"\n          nz-icon [nzType]=\"oh.icon\"></i>\n      </span>\n    </label>\n    <div class=\"sf__array-add\">\n      <button type=\"button\"\n              nz-button\n              [nzType]=\"addType\"\n              [disabled]=\"addDisabled\"\n              (click)=\"addItem()\"\n              [innerHTML]=\"addTitle\"></button>\n    </div>\n  </nz-col>\n  <nz-col class=\"ant-form-item-control-wrapper\" [nzSpan]=\"ui.spanControl\" [nzOffset]=\"ui.offsetControl\">\n    <div class=\"ant-form-item-control\" [class.has-error]=\"showError\">\n      <nz-row class=\"sf__array-container\">\n        <ng-container *ngFor=\"let i of formProperty.properties; let idx=index\">\n          <nz-col *ngIf=\"i.visible && !i.ui.hidden\" [nzSpan]=\"arraySpan\" [attr.data-index]=\"idx\" class=\"sf-array-item\">\n            <nz-card>\n              <sf-item [formProperty]=\"i\"></sf-item>\n              <span *ngIf=\"showRemove\" class=\"sf__array-remove\" (click)=\"removeItem(idx)\" [attr.title]=\"removeTitle\">\n                <i nz-icon nzType=\"delete\"></i>\n              </span>\n            </nz-card>\n          </nz-col>\n        </ng-container>\n      </nz-row>\n      <div *ngIf=\"!ui.onlyVisual && showError\" class=\"ant-form-explain\">{{error}}</div>\n      <div *ngIf=\"schema.description\" [innerHTML]=\"schema.description\" class=\"ant-form-extra\"></div>\n    </div>\n  </nz-col>\n</nz-form-item>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9hcnJheS9hcnJheS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBUWpELE1BQU0sT0FBTyxXQUFZLFNBQVEsaUJBQWlCO0lBTmxEOztRQVVFLGNBQVMsR0FBRyxDQUFDLENBQUM7SUE0QmhCLENBQUM7Ozs7SUExQkMsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksQ0FBQyxtQkFBQSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBa0IsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BJLENBQUM7Ozs7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVDLENBQUM7Ozs7SUFFRCxRQUFRO2NBQ0EsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUU7UUFDbkUsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDakM7UUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUMzQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sSUFBSSxRQUFRLENBQUM7UUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUNuRixDQUFDOzs7O0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7O1lBckNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsODlEQUFrQztnQkFDbEMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7SUFFQywrQkFBaUI7O0lBQ2pCLDhCQUFnQjs7SUFDaEIsa0NBQTJCOztJQUMzQixnQ0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi4vLi4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBBcnJheUxheW91dFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWFycmF5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FycmF5LndpZGdldC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEFycmF5V2lkZ2V0IGV4dGVuZHMgQXJyYXlMYXlvdXRXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBhZGRUaXRsZTogc3RyaW5nO1xuICBhZGRUeXBlOiBzdHJpbmc7XG4gIHJlbW92ZVRpdGxlOiBzdHJpbmcgfCBudWxsO1xuICBhcnJheVNwYW4gPSA4O1xuXG4gIGdldCBhZGREaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZCB8fCAodGhpcy5zY2hlbWEubWF4SXRlbXMgJiYgKHRoaXMuZm9ybVByb3BlcnR5LnByb3BlcnRpZXMgYXMgRm9ybVByb3BlcnR5W10pLmxlbmd0aCA+PSB0aGlzLnNjaGVtYS5tYXhJdGVtcyk7XG4gIH1cblxuICBnZXQgc2hvd1JlbW92ZSgpIHtcbiAgICByZXR1cm4gIXRoaXMuZGlzYWJsZWQgJiYgdGhpcy5yZW1vdmVUaXRsZTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgZ3JpZCwgYWRkVGl0bGUsIGFkZFR5cGUsIHJlbW92YWJsZSwgcmVtb3ZlVGl0bGUgfSA9IHRoaXMudWk7XG4gICAgaWYgKGdyaWQgJiYgZ3JpZC5hcnJheVNwYW4pIHtcbiAgICAgIHRoaXMuYXJyYXlTcGFuID0gZ3JpZC5hcnJheVNwYW47XG4gICAgfVxuXG4gICAgdGhpcy5hZGRUaXRsZSA9IGFkZFRpdGxlIHx8IHRoaXMubC5hZGRUZXh0O1xuICAgIHRoaXMuYWRkVHlwZSA9IGFkZFR5cGUgfHwgJ2Rhc2hlZCc7XG4gICAgdGhpcy5yZW1vdmVUaXRsZSA9IHJlbW92YWJsZSA9PT0gZmFsc2UgPyBudWxsIDogcmVtb3ZlVGl0bGUgfHwgdGhpcy5sLnJlbW92ZVRleHQ7XG4gIH1cblxuICBhZGRJdGVtKCkge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LmFkZCh7fSk7XG4gIH1cblxuICByZW1vdmVJdGVtKGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5yZW1vdmUoaW5kZXgpO1xuICB9XG59XG4iXX0=