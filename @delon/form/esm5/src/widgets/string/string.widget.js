/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/string/string.widget.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ControlUIWidget } from '../../widget';
var StringWidget = /** @class */ (function (_super) {
    __extends(StringWidget, _super);
    function StringWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    StringWidget.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _a = this.ui, addOnAfter = _a.addOnAfter, addOnAfterIcon = _a.addOnAfterIcon, addOnBefore = _a.addOnBefore, addOnBeforeIcon = _a.addOnBeforeIcon, prefix = _a.prefix, prefixIcon = _a.prefixIcon, suffix = _a.suffix, suffixIcon = _a.suffixIcon;
        this.type = !!(addOnAfter || addOnBefore || addOnAfterIcon || addOnBeforeIcon || prefix || prefixIcon || suffix || suffixIcon)
            ? 'addon'
            : '';
    };
    /**
     * @param {?} value
     * @return {?}
     */
    StringWidget.prototype.reset = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!value && this.schema.format === 'color') {
            this.setValue('#000000');
        }
    };
    /**
     * @param {?} val
     * @return {?}
     */
    StringWidget.prototype.change = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.setValue(val);
        if (this.ui.change)
            this.ui.change(val);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    StringWidget.prototype.focus = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.ui.focus)
            this.ui.focus(e);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    StringWidget.prototype.blur = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.ui.blur)
            this.ui.blur(e);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    StringWidget.prototype.enter = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.ui.enter)
            this.ui.enter(e);
    };
    StringWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-string',
                    template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <ng-template #ipt>\n    <input\n      nz-input\n      [attr.id]=\"id\"\n      [disabled]=\"disabled\"\n      [attr.disabled]=\"disabled\"\n      [nzSize]=\"ui.size\"\n      [ngModel]=\"value\"\n      (ngModelChange)=\"change($event)\"\n      [attr.maxLength]=\"schema.maxLength || null\"\n      [attr.type]=\"ui.type || 'text'\"\n      [attr.placeholder]=\"ui.placeholder\"\n      [attr.autocomplete]=\"ui.autocomplete\"\n      [attr.autoFocus]=\"ui.autofocus\"\n      (keyup.enter)=\"enter($event)\"\n      (focus)=\"focus($event)\"\n      (blur)=\"blur($event)\"\n    />\n  </ng-template>\n\n  <ng-container *ngIf=\"type === 'addon'; else ipt\">\n    <nz-input-group\n      [nzAddOnBefore]=\"ui.addOnBefore\"\n      [nzAddOnAfter]=\"ui.addOnAfter\"\n      [nzAddOnBeforeIcon]=\"ui.addOnBeforeIcon\"\n      [nzAddOnAfterIcon]=\"ui.addOnAfterIcon\"\n      [nzPrefix]=\"ui.prefix\"\n      [nzPrefixIcon]=\"ui.prefixIcon\"\n      [nzSuffix]=\"ui.suffix\"\n      [nzSuffixIcon]=\"ui.suffixIcon\"\n    >\n      <ng-template [ngTemplateOutlet]=\"ipt\"></ng-template>\n    </nz-input-group>\n  </ng-container>\n</sf-item-wrap>\n",
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    return StringWidget;
}(ControlUIWidget));
export { StringWidget };
if (false) {
    /** @type {?} */
    StringWidget.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvc3RyaW5nL3N0cmluZy53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRy9DO0lBTWtDLGdDQUFxQztJQU52RTs7SUFzQ0EsQ0FBQzs7OztJQTdCQywrQkFBUTs7O0lBQVI7UUFDUSxJQUFBLFlBQThHLEVBQTVHLDBCQUFVLEVBQUUsa0NBQWMsRUFBRSw0QkFBVyxFQUFFLG9DQUFlLEVBQUUsa0JBQU0sRUFBRSwwQkFBVSxFQUFFLGtCQUFNLEVBQUUsMEJBQXNCO1FBQ3BILElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxJQUFJLFdBQVcsSUFBSSxjQUFjLElBQUksZUFBZSxJQUFJLE1BQU0sSUFBSSxVQUFVLElBQUksTUFBTSxJQUFJLFVBQVUsQ0FBQztZQUM1SCxDQUFDLENBQUMsT0FBTztZQUNULENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDVCxDQUFDOzs7OztJQUVELDRCQUFLOzs7O0lBQUwsVUFBTSxLQUFjO1FBQ2xCLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssT0FBTyxFQUFFO1lBQzVDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDMUI7SUFDSCxDQUFDOzs7OztJQUVELDZCQUFNOzs7O0lBQU4sVUFBTyxHQUFXO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU07WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7OztJQUVELDRCQUFLOzs7O0lBQUwsVUFBTSxDQUFhO1FBQ2pCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFRCwyQkFBSTs7OztJQUFKLFVBQUssQ0FBYTtRQUNoQixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSTtZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRUQsNEJBQUs7Ozs7SUFBTCxVQUFNLENBQWdCO1FBQ3BCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Z0JBckNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIscXZDQUFtQztvQkFDbkMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOztJQWlDRCxtQkFBQztDQUFBLEFBdENELENBTWtDLGVBQWUsR0FnQ2hEO1NBaENZLFlBQVk7OztJQUN2Qiw0QkFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBDb250cm9sVUlXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZTdHJpbmdXaWRnZXRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXN0cmluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdHJpbmcud2lkZ2V0Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgU3RyaW5nV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFVJV2lkZ2V0PFNGU3RyaW5nV2lkZ2V0U2NoZW1hPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHR5cGU6IHN0cmluZztcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGFkZE9uQWZ0ZXIsIGFkZE9uQWZ0ZXJJY29uLCBhZGRPbkJlZm9yZSwgYWRkT25CZWZvcmVJY29uLCBwcmVmaXgsIHByZWZpeEljb24sIHN1ZmZpeCwgc3VmZml4SWNvbiB9ID0gdGhpcy51aTtcbiAgICB0aGlzLnR5cGUgPSAhIShhZGRPbkFmdGVyIHx8IGFkZE9uQmVmb3JlIHx8IGFkZE9uQWZ0ZXJJY29uIHx8IGFkZE9uQmVmb3JlSWNvbiB8fCBwcmVmaXggfHwgcHJlZml4SWNvbiB8fCBzdWZmaXggfHwgc3VmZml4SWNvbilcbiAgICAgID8gJ2FkZG9uJ1xuICAgICAgOiAnJztcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKSB7XG4gICAgaWYgKCF2YWx1ZSAmJiB0aGlzLnNjaGVtYS5mb3JtYXQgPT09ICdjb2xvcicpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUoJyMwMDAwMDAnKTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2UodmFsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbCk7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZSh2YWwpO1xuICB9XG5cbiAgZm9jdXMoZTogRm9jdXNFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLmZvY3VzKSB0aGlzLnVpLmZvY3VzKGUpO1xuICB9XG5cbiAgYmx1cihlOiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkuYmx1cikgdGhpcy51aS5ibHVyKGUpO1xuICB9XG5cbiAgZW50ZXIoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLmVudGVyKSB0aGlzLnVpLmVudGVyKGUpO1xuICB9XG59XG4iXX0=