/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/string/string.widget.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ControlUIWidget } from '../../widget';
var StringWidget = /** @class */ (function (_super) {
    tslib_1.__extends(StringWidget, _super);
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
    StringWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-string',
                    template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n\n  <ng-template #ipt>\n    <input nz-input\n           [attr.id]=\"id\"\n           [disabled]=\"disabled\"\n           [attr.disabled]=\"disabled\"\n           [nzSize]=\"ui.size\"\n           [ngModel]=\"value\"\n           (ngModelChange)=\"setValue($event)\"\n           [attr.maxLength]=\"schema.maxLength || null\"\n           [attr.type]=\"ui.type || 'text'\"\n           [attr.placeholder]=\"ui.placeholder\"\n           [attr.autocomplete]=\"ui.autocomplete\"\n           [attr.autoFocus]=\"ui.autofocus\">\n  </ng-template>\n\n  <ng-container *ngIf=\"type === 'addon'; else ipt\">\n    <nz-input-group [nzAddOnBefore]=\"ui.addOnBefore\"\n                    [nzAddOnAfter]=\"ui.addOnAfter\"\n                    [nzAddOnBeforeIcon]=\"ui.addOnBeforeIcon\"\n                    [nzAddOnAfterIcon]=\"ui.addOnAfterIcon\"\n                    [nzPrefix]=\"ui.prefix\"\n                    [nzPrefixIcon]=\"ui.prefixIcon\"\n                    [nzSuffix]=\"ui.suffix\"\n                    [nzSuffixIcon]=\"ui.suffixIcon\">\n      <ng-template [ngTemplateOutlet]=\"ipt\"></ng-template>\n    </nz-input-group>\n  </ng-container>\n</sf-item-wrap>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvc3RyaW5nL3N0cmluZy53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRy9DO0lBTWtDLHdDQUFxQztJQU52RTs7SUFxQkEsQ0FBQzs7OztJQVpDLCtCQUFROzs7SUFBUjtRQUNRLElBQUEsWUFBOEcsRUFBNUcsMEJBQVUsRUFBRSxrQ0FBYyxFQUFFLDRCQUFXLEVBQUUsb0NBQWUsRUFBRSxrQkFBTSxFQUFFLDBCQUFVLEVBQUUsa0JBQU0sRUFBRSwwQkFBc0I7UUFDcEgsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLElBQUksV0FBVyxJQUFJLGNBQWMsSUFBSSxlQUFlLElBQUksTUFBTSxJQUFJLFVBQVUsSUFBSSxNQUFNLElBQUksVUFBVSxDQUFDO1lBQzVILENBQUMsQ0FBQyxPQUFPO1lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNULENBQUM7Ozs7O0lBRUQsNEJBQUs7Ozs7SUFBTCxVQUFNLEtBQWM7UUFDbEIsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxPQUFPLEVBQUU7WUFDNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMxQjtJQUNILENBQUM7O2dCQXBCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLDIxQ0FBbUM7b0JBQ25DLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs7SUFnQkQsbUJBQUM7Q0FBQSxBQXJCRCxDQU1rQyxlQUFlLEdBZWhEO1NBZlksWUFBWTs7O0lBQ3ZCLDRCQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBTRlN0cmluZ1dpZGdldFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Ytc3RyaW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0cmluZy53aWRnZXQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBTdHJpbmdXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZTdHJpbmdXaWRnZXRTY2hlbWE+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdHlwZTogc3RyaW5nO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgYWRkT25BZnRlciwgYWRkT25BZnRlckljb24sIGFkZE9uQmVmb3JlLCBhZGRPbkJlZm9yZUljb24sIHByZWZpeCwgcHJlZml4SWNvbiwgc3VmZml4LCBzdWZmaXhJY29uIH0gPSB0aGlzLnVpO1xuICAgIHRoaXMudHlwZSA9ICEhKGFkZE9uQWZ0ZXIgfHwgYWRkT25CZWZvcmUgfHwgYWRkT25BZnRlckljb24gfHwgYWRkT25CZWZvcmVJY29uIHx8IHByZWZpeCB8fCBwcmVmaXhJY29uIHx8IHN1ZmZpeCB8fCBzdWZmaXhJY29uKVxuICAgICAgPyAnYWRkb24nXG4gICAgICA6ICcnO1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IFNGVmFsdWUpIHtcbiAgICBpZiAoIXZhbHVlICYmIHRoaXMuc2NoZW1hLmZvcm1hdCA9PT0gJ2NvbG9yJykge1xuICAgICAgdGhpcy5zZXRWYWx1ZSgnIzAwMDAwMCcpO1xuICAgIH1cbiAgfVxufVxuIl19