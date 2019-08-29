/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { ControlUIWidget } from '../../widget';
export class StringWidget extends ControlUIWidget {
    /**
     * @return {?}
     */
    ngOnInit() {
        const { addOnAfter, addOnAfterIcon, addOnBefore, addOnBeforeIcon, prefix, prefixIcon, suffix, suffixIcon } = this.ui;
        this.type = !!(addOnAfter || addOnBefore || addOnAfterIcon || addOnBeforeIcon || prefix || prefixIcon || suffix || suffixIcon)
            ? 'addon'
            : '';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) {
        if (!value && this.schema.format === 'color') {
            this.setValue('#000000');
        }
    }
}
StringWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-string',
                template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n\n  <ng-template #ipt>\n    <input nz-input\n           [attr.id]=\"id\"\n           [disabled]=\"disabled\"\n           [attr.disabled]=\"disabled\"\n           [nzSize]=\"ui.size\"\n           [ngModel]=\"value\"\n           (ngModelChange)=\"setValue($event)\"\n           [attr.maxLength]=\"schema.maxLength || null\"\n           [attr.type]=\"ui.type || 'text'\"\n           [attr.placeholder]=\"ui.placeholder\"\n           [attr.autocomplete]=\"ui.autocomplete\"\n           [attr.autoFocus]=\"ui.autofocus\">\n  </ng-template>\n\n  <ng-container *ngIf=\"type === 'addon'; else ipt\">\n    <nz-input-group [nzAddOnBefore]=\"ui.addOnBefore\"\n                    [nzAddOnAfter]=\"ui.addOnAfter\"\n                    [nzAddOnBeforeIcon]=\"ui.addOnBeforeIcon\"\n                    [nzAddOnAfterIcon]=\"ui.addOnAfterIcon\"\n                    [nzPrefix]=\"ui.prefix\"\n                    [nzPrefixIcon]=\"ui.prefixIcon\"\n                    [nzSuffix]=\"ui.suffix\"\n                    [nzSuffixIcon]=\"ui.suffixIcon\">\n      <ng-template [ngTemplateOutlet]=\"ipt\"></ng-template>\n    </nz-input-group>\n  </ng-container>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            }] }
];
if (false) {
    /** @type {?} */
    StringWidget.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvc3RyaW5nL3N0cmluZy53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQVMvQyxNQUFNLE9BQU8sWUFBYSxTQUFRLGVBQXFDOzs7O0lBR3JFLFFBQVE7Y0FDQSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRTtRQUNwSCxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsSUFBSSxXQUFXLElBQUksY0FBYyxJQUFJLGVBQWUsSUFBSSxNQUFNLElBQUksVUFBVSxJQUFJLE1BQU0sSUFBSSxVQUFVLENBQUM7WUFDNUgsQ0FBQyxDQUFDLE9BQU87WUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ1QsQ0FBQzs7Ozs7SUFFRCxLQUFLLENBQUMsS0FBYztRQUNsQixJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLE9BQU8sRUFBRTtZQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7O1lBcEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsMjFDQUFtQztnQkFDbkMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7SUFFQyw0QkFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBDb250cm9sVUlXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZTdHJpbmdXaWRnZXRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXN0cmluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdHJpbmcud2lkZ2V0Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgU3RyaW5nV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFVJV2lkZ2V0PFNGU3RyaW5nV2lkZ2V0U2NoZW1hPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHR5cGU6IHN0cmluZztcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGFkZE9uQWZ0ZXIsIGFkZE9uQWZ0ZXJJY29uLCBhZGRPbkJlZm9yZSwgYWRkT25CZWZvcmVJY29uLCBwcmVmaXgsIHByZWZpeEljb24sIHN1ZmZpeCwgc3VmZml4SWNvbiB9ID0gdGhpcy51aTtcbiAgICB0aGlzLnR5cGUgPSAhIShhZGRPbkFmdGVyIHx8IGFkZE9uQmVmb3JlIHx8IGFkZE9uQWZ0ZXJJY29uIHx8IGFkZE9uQmVmb3JlSWNvbiB8fCBwcmVmaXggfHwgcHJlZml4SWNvbiB8fCBzdWZmaXggfHwgc3VmZml4SWNvbilcbiAgICAgID8gJ2FkZG9uJ1xuICAgICAgOiAnJztcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKSB7XG4gICAgaWYgKCF2YWx1ZSAmJiB0aGlzLnNjaGVtYS5mb3JtYXQgPT09ICdjb2xvcicpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUoJyMwMDAwMDAnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==