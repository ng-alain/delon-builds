/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/string/string.widget.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { ControlUIWidget } from '../../widget';
export class StringWidget extends ControlUIWidget {
    /**
     * @return {?}
     */
    ngOnInit() {
        const { addOnAfter, addOnAfterIcon, addOnBefore, addOnBeforeIcon, prefix, prefixIcon, suffix, suffixIcon, autofocus } = this.ui;
        this.type = !!(addOnAfter || addOnBefore || addOnAfterIcon || addOnBeforeIcon || prefix || prefixIcon || suffix || suffixIcon)
            ? 'addon'
            : '';
        if (autofocus === true) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                ((/** @type {?} */ (((/** @type {?} */ (this.injector.get(ElementRef).nativeElement))).querySelector(`#${this.id}`)))).focus();
            }), 20);
        }
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
    /**
     * @param {?} val
     * @return {?}
     */
    change(val) {
        this.setValue(val);
        if (this.ui.change)
            this.ui.change(val);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    focus(e) {
        if (this.ui.focus)
            this.ui.focus(e);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    blur(e) {
        if (this.ui.blur)
            this.ui.blur(e);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    enter(e) {
        if (this.ui.enter)
            this.ui.enter(e);
    }
}
StringWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-string',
                template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <ng-template #ipt>\n    <input\n      nz-input\n      [attr.id]=\"id\"\n      [disabled]=\"disabled\"\n      [attr.disabled]=\"disabled\"\n      [nzSize]=\"ui.size\"\n      [nzBorderless]=\"ui.borderless\"\n      [ngModel]=\"value\"\n      (ngModelChange)=\"change($event)\"\n      [attr.maxLength]=\"schema.maxLength || null\"\n      [attr.type]=\"ui.type || 'text'\"\n      [attr.placeholder]=\"ui.placeholder\"\n      [attr.autocomplete]=\"ui.autocomplete\"\n      [attr.autoFocus]=\"ui.autofocus\"\n      (keyup.enter)=\"enter($event)\"\n      (focus)=\"focus($event)\"\n      (blur)=\"blur($event)\"\n    />\n  </ng-template>\n\n  <ng-container *ngIf=\"type === 'addon'; else ipt\">\n    <nz-input-group\n      [nzAddOnBefore]=\"ui.addOnBefore\"\n      [nzAddOnAfter]=\"ui.addOnAfter\"\n      [nzAddOnBeforeIcon]=\"ui.addOnBeforeIcon\"\n      [nzAddOnAfterIcon]=\"ui.addOnAfterIcon\"\n      [nzPrefix]=\"ui.prefix\"\n      [nzPrefixIcon]=\"ui.prefixIcon\"\n      [nzSuffix]=\"ui.suffix\"\n      [nzSuffixIcon]=\"ui.suffixIcon\"\n    >\n      <ng-template [ngTemplateOutlet]=\"ipt\"></ng-template>\n    </nz-input-group>\n  </ng-container>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            }] }
];
if (false) {
    /** @type {?} */
    StringWidget.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvc3RyaW5nL3N0cmluZy53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBUy9DLE1BQU0sT0FBTyxZQUFhLFNBQVEsZUFBcUM7Ozs7SUFHckUsUUFBUTtjQUNBLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRTtRQUMvSCxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsSUFBSSxXQUFXLElBQUksY0FBYyxJQUFJLGVBQWUsSUFBSSxNQUFNLElBQUksVUFBVSxJQUFJLE1BQU0sSUFBSSxVQUFVLENBQUM7WUFDNUgsQ0FBQyxDQUFDLE9BQU87WUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ1AsSUFBSSxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQ3RCLFVBQVU7OztZQUFDLEdBQUcsRUFBRTtnQkFDZCxDQUFDLG1CQUFBLENBQUMsbUJBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxFQUFlLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBZSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDckgsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ1I7SUFDSCxDQUFDOzs7OztJQUVELEtBQUssQ0FBQyxLQUFjO1FBQ2xCLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssT0FBTyxFQUFFO1lBQzVDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDMUI7SUFDSCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxHQUFXO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU07WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7OztJQUVELEtBQUssQ0FBQyxDQUFhO1FBQ2pCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsQ0FBYTtRQUNoQixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSTtZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRUQsS0FBSyxDQUFDLENBQWdCO1FBQ3BCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7O1lBMUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsNnhDQUFtQztnQkFDbkMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7SUFFQyw0QkFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBDb250cm9sVUlXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZTdHJpbmdXaWRnZXRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXN0cmluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdHJpbmcud2lkZ2V0Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgU3RyaW5nV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFVJV2lkZ2V0PFNGU3RyaW5nV2lkZ2V0U2NoZW1hPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHR5cGU6IHN0cmluZztcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGFkZE9uQWZ0ZXIsIGFkZE9uQWZ0ZXJJY29uLCBhZGRPbkJlZm9yZSwgYWRkT25CZWZvcmVJY29uLCBwcmVmaXgsIHByZWZpeEljb24sIHN1ZmZpeCwgc3VmZml4SWNvbiwgYXV0b2ZvY3VzIH0gPSB0aGlzLnVpO1xuICAgIHRoaXMudHlwZSA9ICEhKGFkZE9uQWZ0ZXIgfHwgYWRkT25CZWZvcmUgfHwgYWRkT25BZnRlckljb24gfHwgYWRkT25CZWZvcmVJY29uIHx8IHByZWZpeCB8fCBwcmVmaXhJY29uIHx8IHN1ZmZpeCB8fCBzdWZmaXhJY29uKVxuICAgICAgPyAnYWRkb24nXG4gICAgICA6ICcnO1xuICAgIGlmIChhdXRvZm9jdXMgPT09IHRydWUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAoKHRoaXMuaW5qZWN0b3IuZ2V0KEVsZW1lbnRSZWYpLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuaWR9YCkgYXMgSFRNTEVsZW1lbnQpLmZvY3VzKCk7XG4gICAgICB9LCAyMCk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXQodmFsdWU6IFNGVmFsdWUpOiB2b2lkIHtcbiAgICBpZiAoIXZhbHVlICYmIHRoaXMuc2NoZW1hLmZvcm1hdCA9PT0gJ2NvbG9yJykge1xuICAgICAgdGhpcy5zZXRWYWx1ZSgnIzAwMDAwMCcpO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZSh2YWw6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2V0VmFsdWUodmFsKTtcbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHRoaXMudWkuY2hhbmdlKHZhbCk7XG4gIH1cblxuICBmb2N1cyhlOiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkuZm9jdXMpIHRoaXMudWkuZm9jdXMoZSk7XG4gIH1cblxuICBibHVyKGU6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5ibHVyKSB0aGlzLnVpLmJsdXIoZSk7XG4gIH1cblxuICBlbnRlcihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkuZW50ZXIpIHRoaXMudWkuZW50ZXIoZSk7XG4gIH1cbn1cbiJdfQ==