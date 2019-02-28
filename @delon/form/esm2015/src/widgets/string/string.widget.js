/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
export class StringWidget extends ControlWidget {
    /**
     * @return {?}
     */
    ngOnInit() {
        this.type = !!(this.ui.addOnAfter ||
            this.ui.addOnBefore ||
            this.ui.addOnAfterIcon ||
            this.ui.addOnBeforeIcon ||
            this.ui.prefix ||
            this.ui.prefixIcon ||
            this.ui.suffix ||
            this.ui.suffixIcon)
            ? 'addon'
            : '';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) {
        if (this.schema.format === 'color' && !value) {
            this.setValue('#000000');
        }
    }
}
StringWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-string',
                template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n\n  <ng-template #ipt>\n    <input nz-input\n           [attr.id]=\"id\"\n           [disabled]=\"disabled\"\n           [attr.disabled]=\"disabled\"\n           [nzSize]=\"ui.size\"\n           [ngModel]=\"value\"\n           (ngModelChange)=\"setValue($event)\"\n           [attr.maxLength]=\"schema.maxLength || null\"\n           [attr.type]=\"ui.type || 'text'\"\n           [attr.placeholder]=\"ui.placeholder\"\n           [attr.autocomplete]=\"ui.autocomplete\"\n           [attr.autoFocus]=\"ui.autofocus\">\n  </ng-template>\n\n  <ng-container *ngIf=\"type === 'addon'; else ipt\">\n    <nz-input-group [nzAddOnBefore]=\"ui.addOnBefore\"\n                    [nzAddOnAfter]=\"ui.addOnAfter\"\n                    [nzAddOnBeforeIcon]=\"ui.addOnBeforeIcon\"\n                    [nzAddOnAfterIcon]=\"ui.addOnAfterIcon\"\n                    [nzPrefix]=\"ui.prefix\"\n                    [nzPrefixIcon]=\"ui.prefixIcon\"\n                    [nzSuffix]=\"ui.suffix\"\n                    [nzSuffixIcon]=\"ui.suffixIcon\">\n      <ng-template [ngTemplateOutlet]=\"ipt\"></ng-template>\n    </nz-input-group>\n  </ng-container>\n</sf-item-wrap>\n"
            }] }
];
if (false) {
    /** @type {?} */
    StringWidget.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvc3RyaW5nL3N0cmluZy53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQU03QyxNQUFNLE9BQU8sWUFBYSxTQUFRLGFBQWE7Ozs7SUFHN0MsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQ1osSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVO1lBQ2xCLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVztZQUNuQixJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWM7WUFDdEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFlO1lBQ3ZCLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTTtZQUNkLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVTtZQUNsQixJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU07WUFDZCxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FDbkI7WUFDQyxDQUFDLENBQUMsT0FBTztZQUNULENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDVCxDQUFDOzs7OztJQUVELEtBQUssQ0FBQyxLQUFjO1FBQ2xCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQzVDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDMUI7SUFDSCxDQUFDOzs7WUExQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQiwyMUNBQW1DO2FBQ3BDOzs7O0lBRUMsNEJBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Ytc3RyaW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0cmluZy53aWRnZXQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFN0cmluZ1dpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICB0eXBlOiBzdHJpbmc7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50eXBlID0gISEoXG4gICAgICB0aGlzLnVpLmFkZE9uQWZ0ZXIgfHxcbiAgICAgIHRoaXMudWkuYWRkT25CZWZvcmUgfHxcbiAgICAgIHRoaXMudWkuYWRkT25BZnRlckljb24gfHxcbiAgICAgIHRoaXMudWkuYWRkT25CZWZvcmVJY29uIHx8XG4gICAgICB0aGlzLnVpLnByZWZpeCB8fFxuICAgICAgdGhpcy51aS5wcmVmaXhJY29uIHx8XG4gICAgICB0aGlzLnVpLnN1ZmZpeCB8fFxuICAgICAgdGhpcy51aS5zdWZmaXhJY29uXG4gICAgKVxuICAgICAgPyAnYWRkb24nXG4gICAgICA6ICcnO1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IFNGVmFsdWUpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEuZm9ybWF0ID09PSAnY29sb3InICYmICF2YWx1ZSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZSgnIzAwMDAwMCcpO1xuICAgIH1cbiAgfVxufVxuIl19