/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/array/array.widget.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        return (this.disabled || (this.schema.maxItems != null && ((/** @type {?} */ (this.formProperty.properties))).length >= (/** @type {?} */ (this.schema.maxItems))));
    }
    /**
     * @return {?}
     */
    get showRemove() {
        return !this.disabled && !!this.removeTitle;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const { grid, addTitle, addType, removable, removeTitle } = this.ui;
        if (grid && grid.arraySpan) {
            this.arraySpan = grid.arraySpan;
        }
        this.addTitle = this.dom.bypassSecurityTrustHtml(addTitle || this.l.addText);
        this.addType = addType || 'dashed';
        this.removeTitle = removable === false ? null : removeTitle || this.l.removeText;
    }
    /**
     * @return {?}
     */
    addItem() {
        /** @type {?} */
        const property = this.formProperty.add({});
        if (this.ui.add) {
            this.ui.add(property);
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    removeItem(index) {
        this.formProperty.remove(index);
        if (this.ui.remove) {
            this.ui.remove(index);
        }
    }
}
ArrayWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-array',
                template: "<nz-form-item [class.ant-form-item-with-help]=\"showError\">\n  <nz-col *ngIf=\"schema.title\" [nzSpan]=\"ui.spanLabel\" class=\"ant-form-item-label\">\n    <label>\n      {{ schema.title }}\n      <span class=\"sf__optional\">\n        {{ ui.optional }}\n        <i\n          *ngIf=\"oh\"\n          nz-tooltip\n          [nzTooltipTitle]=\"oh.text\"\n          [nzTooltipPlacement]=\"oh.placement\"\n          [nzTooltipTrigger]=\"oh.trigger\"\n          [nzTooltipOverlayClassName]=\"oh.overlayClassName\"\n          [nzTooltipOverlayStyle]=\"oh.overlayStyle\"\n          [nzTooltipMouseEnterDelay]=\"oh.mouseEnterDelay\"\n          [nzTooltipMouseLeaveDelay]=\"oh.mouseLeaveDelay\"\n          nz-icon\n          [nzType]=\"oh.icon\"\n        ></i>\n      </span>\n    </label>\n    <div class=\"sf__array-add\">\n      <button type=\"button\" nz-button [nzType]=\"addType\" [disabled]=\"addDisabled\" (click)=\"addItem()\" [innerHTML]=\"addTitle\"></button>\n    </div>\n  </nz-col>\n  <nz-col class=\"ant-form-item-control-wrapper\" [nzSpan]=\"ui.spanControl\" [nzOffset]=\"ui.offsetControl\">\n    <div class=\"ant-form-item-control\" [class.has-error]=\"showError\">\n      <div nz-row class=\"sf__array-container\">\n        <ng-container *ngFor=\"let i of formProperty.properties; let idx=index\">\n          <div nz-col *ngIf=\"i.visible && !i.ui.hidden\" [nzSpan]=\"arraySpan\" [attr.data-index]=\"idx\" class=\"sf__array-item\">\n            <nz-card>\n              <sf-item [formProperty]=\"i\"></sf-item>\n              <span *ngIf=\"showRemove\" class=\"sf__array-remove\" (click)=\"removeItem(idx)\" [attr.title]=\"removeTitle\">\n                <i nz-icon nzType=\"delete\"></i>\n              </span>\n            </nz-card>\n          </div>\n        </ng-container>\n      </div>\n      <div *ngIf=\"!ui.onlyVisual && showError\" class=\"ant-form-explain\">{{error}}</div>\n      <div *ngIf=\"schema.description\" [innerHTML]=\"schema._description\" class=\"ant-form-extra\"></div>\n    </div>\n  </nz-col>\n</nz-form-item>\n",
                host: { '[class.sf__array]': 'true' },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZzdHMvd29yay8xL3MvcGFja2FnZXMvZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL2FycmF5L2FycmF5LndpZGdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBU2pELE1BQU0sT0FBTyxXQUFZLFNBQVEsaUJBQWlCO0lBUGxEOztRQVdFLGNBQVMsR0FBRyxDQUFDLENBQUM7SUFvQ2hCLENBQUM7Ozs7SUFsQ0MsSUFBSSxXQUFXO1FBQ2IsT0FBTyxDQUNMLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUksQ0FBQyxtQkFBQSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBa0IsQ0FBQyxDQUFDLE1BQU0sSUFBSSxtQkFBQSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBQyxDQUFDLENBQ3BJLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDOUMsQ0FBQzs7OztJQUVELFFBQVE7Y0FDQSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRTtRQUNuRSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUNqQztRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sSUFBSSxRQUFRLENBQUM7UUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUNuRixDQUFDOzs7O0lBRUQsT0FBTzs7Y0FDQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQzFDLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUU7WUFDZixJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN2QjtJQUNILENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QjtJQUNILENBQUM7OztZQTlDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLDRnRUFBa0M7Z0JBQ2xDLElBQUksRUFBRSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sRUFBRTtnQkFDckMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7SUFFQywrQkFBbUI7O0lBQ25CLDhCQUFnQjs7SUFDaEIsa0NBQTJCOztJQUMzQixnQ0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4uLy4uL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgQXJyYXlMYXlvdXRXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1hcnJheScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hcnJheS53aWRnZXQuaHRtbCcsXG4gIGhvc3Q6IHsgJ1tjbGFzcy5zZl9fYXJyYXldJzogJ3RydWUnIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBBcnJheVdpZGdldCBleHRlbmRzIEFycmF5TGF5b3V0V2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgYWRkVGl0bGU6IFNhZmVIdG1sO1xuICBhZGRUeXBlOiBzdHJpbmc7XG4gIHJlbW92ZVRpdGxlOiBzdHJpbmcgfCBudWxsO1xuICBhcnJheVNwYW4gPSA4O1xuXG4gIGdldCBhZGREaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5kaXNhYmxlZCB8fCAodGhpcy5zY2hlbWEubWF4SXRlbXMgIT0gbnVsbCAmJiAodGhpcy5mb3JtUHJvcGVydHkucHJvcGVydGllcyBhcyBGb3JtUHJvcGVydHlbXSkubGVuZ3RoID49IHRoaXMuc2NoZW1hLm1heEl0ZW1zISlcbiAgICApO1xuICB9XG5cbiAgZ2V0IHNob3dSZW1vdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLmRpc2FibGVkICYmICEhdGhpcy5yZW1vdmVUaXRsZTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgZ3JpZCwgYWRkVGl0bGUsIGFkZFR5cGUsIHJlbW92YWJsZSwgcmVtb3ZlVGl0bGUgfSA9IHRoaXMudWk7XG4gICAgaWYgKGdyaWQgJiYgZ3JpZC5hcnJheVNwYW4pIHtcbiAgICAgIHRoaXMuYXJyYXlTcGFuID0gZ3JpZC5hcnJheVNwYW47XG4gICAgfVxuXG4gICAgdGhpcy5hZGRUaXRsZSA9IHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGFkZFRpdGxlIHx8IHRoaXMubC5hZGRUZXh0KTtcbiAgICB0aGlzLmFkZFR5cGUgPSBhZGRUeXBlIHx8ICdkYXNoZWQnO1xuICAgIHRoaXMucmVtb3ZlVGl0bGUgPSByZW1vdmFibGUgPT09IGZhbHNlID8gbnVsbCA6IHJlbW92ZVRpdGxlIHx8IHRoaXMubC5yZW1vdmVUZXh0O1xuICB9XG5cbiAgYWRkSXRlbSgpOiB2b2lkIHtcbiAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMuZm9ybVByb3BlcnR5LmFkZCh7fSk7XG4gICAgaWYgKHRoaXMudWkuYWRkKSB7XG4gICAgICB0aGlzLnVpLmFkZChwcm9wZXJ0eSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlSXRlbShpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkucmVtb3ZlKGluZGV4KTtcbiAgICBpZiAodGhpcy51aS5yZW1vdmUpIHtcbiAgICAgIHRoaXMudWkucmVtb3ZlKGluZGV4KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==