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
     * @private
     * @return {?}
     */
    reValid() {
        this.formProperty.updateValueAndValidity({ onlySelf: false, emitValueEvent: false, emitValidator: true });
    }
    /**
     * @return {?}
     */
    addItem() {
        /** @type {?} */
        const property = this.formProperty.add({});
        this.reValid();
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
        this.reValid();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvd2lkZ2V0cy9hcnJheS9hcnJheS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3JFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQVNqRCxNQUFNLE9BQU8sV0FBWSxTQUFRLGlCQUFpQjtJQVBsRDs7UUFXRSxjQUFTLEdBQUcsQ0FBQyxDQUFDO0lBMENoQixDQUFDOzs7O0lBeENDLElBQUksV0FBVztRQUNiLE9BQU8sQ0FDTCxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLENBQUMsbUJBQUEsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQWtCLENBQUMsQ0FBQyxNQUFNLElBQUksbUJBQUEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUNwSSxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzlDLENBQUM7Ozs7SUFFRCxRQUFRO2NBQ0EsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUU7UUFDbkUsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDakM7UUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLElBQUksUUFBUSxDQUFDO1FBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDbkYsQ0FBQzs7Ozs7SUFFTyxPQUFPO1FBQ2IsSUFBSSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM1RyxDQUFDOzs7O0lBRUQsT0FBTzs7Y0FDQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUU7WUFDZixJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN2QjtJQUNILENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QjtJQUNILENBQUM7OztZQXBERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLDRnRUFBa0M7Z0JBQ2xDLElBQUksRUFBRSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sRUFBRTtnQkFDckMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7SUFFQywrQkFBbUI7O0lBQ25CLDhCQUFnQjs7SUFDaEIsa0NBQTJCOztJQUMzQixnQ0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4uLy4uL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgQXJyYXlMYXlvdXRXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1hcnJheScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hcnJheS53aWRnZXQuaHRtbCcsXG4gIGhvc3Q6IHsgJ1tjbGFzcy5zZl9fYXJyYXldJzogJ3RydWUnIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBBcnJheVdpZGdldCBleHRlbmRzIEFycmF5TGF5b3V0V2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgYWRkVGl0bGU6IFNhZmVIdG1sO1xuICBhZGRUeXBlOiBzdHJpbmc7XG4gIHJlbW92ZVRpdGxlOiBzdHJpbmcgfCBudWxsO1xuICBhcnJheVNwYW4gPSA4O1xuXG4gIGdldCBhZGREaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5kaXNhYmxlZCB8fCAodGhpcy5zY2hlbWEubWF4SXRlbXMgIT0gbnVsbCAmJiAodGhpcy5mb3JtUHJvcGVydHkucHJvcGVydGllcyBhcyBGb3JtUHJvcGVydHlbXSkubGVuZ3RoID49IHRoaXMuc2NoZW1hLm1heEl0ZW1zISlcbiAgICApO1xuICB9XG5cbiAgZ2V0IHNob3dSZW1vdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLmRpc2FibGVkICYmICEhdGhpcy5yZW1vdmVUaXRsZTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgZ3JpZCwgYWRkVGl0bGUsIGFkZFR5cGUsIHJlbW92YWJsZSwgcmVtb3ZlVGl0bGUgfSA9IHRoaXMudWk7XG4gICAgaWYgKGdyaWQgJiYgZ3JpZC5hcnJheVNwYW4pIHtcbiAgICAgIHRoaXMuYXJyYXlTcGFuID0gZ3JpZC5hcnJheVNwYW47XG4gICAgfVxuXG4gICAgdGhpcy5hZGRUaXRsZSA9IHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGFkZFRpdGxlIHx8IHRoaXMubC5hZGRUZXh0KTtcbiAgICB0aGlzLmFkZFR5cGUgPSBhZGRUeXBlIHx8ICdkYXNoZWQnO1xuICAgIHRoaXMucmVtb3ZlVGl0bGUgPSByZW1vdmFibGUgPT09IGZhbHNlID8gbnVsbCA6IHJlbW92ZVRpdGxlIHx8IHRoaXMubC5yZW1vdmVUZXh0O1xuICB9XG5cbiAgcHJpdmF0ZSByZVZhbGlkKCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBvbmx5U2VsZjogZmFsc2UsIGVtaXRWYWx1ZUV2ZW50OiBmYWxzZSwgZW1pdFZhbGlkYXRvcjogdHJ1ZSB9KTtcbiAgfVxuXG4gIGFkZEl0ZW0oKTogdm9pZCB7XG4gICAgY29uc3QgcHJvcGVydHkgPSB0aGlzLmZvcm1Qcm9wZXJ0eS5hZGQoe30pO1xuICAgIHRoaXMucmVWYWxpZCgpO1xuICAgIGlmICh0aGlzLnVpLmFkZCkge1xuICAgICAgdGhpcy51aS5hZGQocHJvcGVydHkpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUl0ZW0oaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LnJlbW92ZShpbmRleCk7XG4gICAgdGhpcy5yZVZhbGlkKCk7XG4gICAgaWYgKHRoaXMudWkucmVtb3ZlKSB7XG4gICAgICB0aGlzLnVpLnJlbW92ZShpbmRleCk7XG4gICAgfVxuICB9XG59XG4iXX0=