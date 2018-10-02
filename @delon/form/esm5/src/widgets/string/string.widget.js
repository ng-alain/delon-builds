/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
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
        this.type = !!(this.ui["addOnAfter"] || this.ui["addOnBefore"] || this.ui["addOnAfterIcon"] || this.ui["addOnBeforeIcon"] || this.ui["prefix"] || this.ui["prefixIcon"] || this.ui["suffix"] || this.ui["suffixIcon"])
            ? 'addon'
            : '';
    };
    StringWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-string',
                    template: "\n  <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n\n    <ng-template #ipt>\n      <input nz-input\n        [attr.id]=\"id\"\n        [disabled]=\"disabled\"\n        [attr.disabled]=\"disabled\"\n        [nzSize]=\"ui.size\"\n        [ngModel]=\"value\"\n        (ngModelChange)=\"setValue($event)\"\n        [attr.maxLength]=\"schema.maxLength || null\"\n        [attr.type]=\"ui.type || 'text'\"\n        [attr.placeholder]=\"ui.placeholder\"\n        [attr.autocomplete]=\"ui.autocomplete\"\n        [attr.autoFocus]=\"ui.autofocus\">\n    </ng-template>\n\n    <ng-container *ngIf=\"type === 'addon'; else ipt\">\n      <nz-input-group\n        [nzAddOnBefore]=\"ui.addOnBefore\" [nzAddOnAfter]=\"ui.addOnAfter\"\n        [nzAddOnBeforeIcon]=\"ui.addOnBeforeIcon\" [nzAddOnAfterIcon]=\"ui.addOnAfterIcon\"\n        [nzPrefix]=\"ui.prefix\" [nzPrefixIcon]=\"ui.prefixIcon\"\n        [nzSuffix]=\"ui.suffix\" [nzSuffixIcon]=\"ui.suffixIcon\">\n        <ng-template [ngTemplateOutlet]=\"ipt\"></ng-template>\n      </nz-input-group>\n    </ng-container>\n  </sf-item-wrap>\n  ",
                    preserveWhitespaces: false
                }] }
    ];
    return StringWidget;
}(ControlWidget));
export { StringWidget };
if (false) {
    /** @type {?} */
    StringWidget.prototype.type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvc3RyaW5nL3N0cmluZy53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7O0lBbUNYLHdDQUFhOzs7Ozs7O0lBRzdDLCtCQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQ1osSUFBSSxDQUFDLEVBQUUsa0JBQ1AsSUFBSSxDQUFDLEVBQUUsZUFBWSxJQUNuQixJQUFJLENBQUMsRUFBRSxrQkFBZSxJQUN0QixJQUFJLENBQUMsRUFBRSxtQkFBZ0IsSUFDdkIsSUFBSSxDQUFDLEVBQUUsVUFBTyxJQUNkLElBQUksQ0FBQyxFQUFFLGNBQVcsSUFDbEIsSUFBSSxDQUFDLEVBQUUsVUFBTyxJQUNkLElBQUksQ0FBQyxFQUFFLGNBQVcsQ0FDbkI7WUFDQyxDQUFDLENBQUMsT0FBTztZQUNULENBQUMsQ0FBQyxFQUFFLENBQUM7S0FDUjs7Z0JBakRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLDhvQ0E0QlQ7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztpQkFDM0I7O3VCQW5DRDtFQW9Da0MsYUFBYTtTQUFsQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NmLXN0cmluZycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxyXG5cclxuICAgIDxuZy10ZW1wbGF0ZSAjaXB0PlxyXG4gICAgICA8aW5wdXQgbnotaW5wdXRcclxuICAgICAgICBbYXR0ci5pZF09XCJpZFwiXHJcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICBbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcclxuICAgICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXHJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0VmFsdWUoJGV2ZW50KVwiXHJcbiAgICAgICAgW2F0dHIubWF4TGVuZ3RoXT1cInNjaGVtYS5tYXhMZW5ndGggfHwgbnVsbFwiXHJcbiAgICAgICAgW2F0dHIudHlwZV09XCJ1aS50eXBlIHx8ICd0ZXh0J1wiXHJcbiAgICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxyXG4gICAgICAgIFthdHRyLmF1dG9jb21wbGV0ZV09XCJ1aS5hdXRvY29tcGxldGVcIlxyXG4gICAgICAgIFthdHRyLmF1dG9Gb2N1c109XCJ1aS5hdXRvZm9jdXNcIj5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInR5cGUgPT09ICdhZGRvbic7IGVsc2UgaXB0XCI+XHJcbiAgICAgIDxuei1pbnB1dC1ncm91cFxyXG4gICAgICAgIFtuekFkZE9uQmVmb3JlXT1cInVpLmFkZE9uQmVmb3JlXCIgW256QWRkT25BZnRlcl09XCJ1aS5hZGRPbkFmdGVyXCJcclxuICAgICAgICBbbnpBZGRPbkJlZm9yZUljb25dPVwidWkuYWRkT25CZWZvcmVJY29uXCIgW256QWRkT25BZnRlckljb25dPVwidWkuYWRkT25BZnRlckljb25cIlxyXG4gICAgICAgIFtuelByZWZpeF09XCJ1aS5wcmVmaXhcIiBbbnpQcmVmaXhJY29uXT1cInVpLnByZWZpeEljb25cIlxyXG4gICAgICAgIFtuelN1ZmZpeF09XCJ1aS5zdWZmaXhcIiBbbnpTdWZmaXhJY29uXT1cInVpLnN1ZmZpeEljb25cIj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaXB0XCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPC9uei1pbnB1dC1ncm91cD5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvc2YtaXRlbS13cmFwPlxyXG4gIGAsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdHJpbmdXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcclxuICB0eXBlOiBzdHJpbmc7XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy50eXBlID0gISEoXHJcbiAgICAgIHRoaXMudWkuYWRkT25BZnRlciB8fFxyXG4gICAgICB0aGlzLnVpLmFkZE9uQmVmb3JlIHx8XHJcbiAgICAgIHRoaXMudWkuYWRkT25BZnRlckljb24gfHxcclxuICAgICAgdGhpcy51aS5hZGRPbkJlZm9yZUljb24gfHxcclxuICAgICAgdGhpcy51aS5wcmVmaXggfHxcclxuICAgICAgdGhpcy51aS5wcmVmaXhJY29uIHx8XHJcbiAgICAgIHRoaXMudWkuc3VmZml4IHx8XHJcbiAgICAgIHRoaXMudWkuc3VmZml4SWNvblxyXG4gICAgKVxyXG4gICAgICA/ICdhZGRvbidcclxuICAgICAgOiAnJztcclxuICB9XHJcbn1cclxuIl19