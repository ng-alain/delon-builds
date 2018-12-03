/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        if (this.schema.format === 'color' && !value) {
            this.setValue('#000000');
        }
    };
    StringWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-string',
                    template: "\n  <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n\n    <ng-template #ipt>\n      <input nz-input\n        [attr.id]=\"id\"\n        [disabled]=\"disabled\"\n        [attr.disabled]=\"disabled\"\n        [nzSize]=\"ui.size\"\n        [ngModel]=\"value\"\n        (ngModelChange)=\"setValue($event)\"\n        [attr.maxLength]=\"schema.maxLength || null\"\n        [attr.type]=\"ui.type || 'text'\"\n        [attr.placeholder]=\"ui.placeholder\"\n        [attr.autocomplete]=\"ui.autocomplete\"\n        [attr.autoFocus]=\"ui.autofocus\">\n    </ng-template>\n\n    <ng-container *ngIf=\"type === 'addon'; else ipt\">\n      <nz-input-group\n        [nzAddOnBefore]=\"ui.addOnBefore\" [nzAddOnAfter]=\"ui.addOnAfter\"\n        [nzAddOnBeforeIcon]=\"ui.addOnBeforeIcon\" [nzAddOnAfterIcon]=\"ui.addOnAfterIcon\"\n        [nzPrefix]=\"ui.prefix\" [nzPrefixIcon]=\"ui.prefixIcon\"\n        [nzSuffix]=\"ui.suffix\" [nzSuffixIcon]=\"ui.suffixIcon\">\n        <ng-template [ngTemplateOutlet]=\"ipt\"></ng-template>\n      </nz-input-group>\n    </ng-container>\n  </sf-item-wrap>\n  "
                }] }
    ];
    return StringWidget;
}(ControlWidget));
export { StringWidget };
if (false) {
    /** @type {?} */
    StringWidget.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvc3RyaW5nL3N0cmluZy53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFN0M7SUFnQ2tDLHdDQUFhO0lBaEMvQzs7SUF1REEsQ0FBQzs7OztJQXBCQywrQkFBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUNaLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVTtZQUNsQixJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVc7WUFDbkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjO1lBQ3RCLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZTtZQUN2QixJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU07WUFDZCxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVU7WUFDbEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNO1lBQ2QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQ25CO1lBQ0MsQ0FBQyxDQUFDLE9BQU87WUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ1QsQ0FBQzs7Ozs7SUFFRCw0QkFBSzs7OztJQUFMLFVBQU0sS0FBYztRQUNsQixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLE9BQU8sSUFBSSxDQUFDLEtBQUssRUFBRTtZQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7Z0JBdERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLDhvQ0E0QlQ7aUJBQ0Y7O0lBd0JELG1CQUFDO0NBQUEsQUF2REQsQ0FnQ2tDLGFBQWEsR0F1QjlDO1NBdkJZLFlBQVk7OztJQUN2Qiw0QkFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1zdHJpbmcnLFxuICB0ZW1wbGF0ZTogYFxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuXG4gICAgPG5nLXRlbXBsYXRlICNpcHQ+XG4gICAgICA8aW5wdXQgbnotaW5wdXRcbiAgICAgICAgW2F0dHIuaWRdPVwiaWRcIlxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICBbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0VmFsdWUoJGV2ZW50KVwiXG4gICAgICAgIFthdHRyLm1heExlbmd0aF09XCJzY2hlbWEubWF4TGVuZ3RoIHx8IG51bGxcIlxuICAgICAgICBbYXR0ci50eXBlXT1cInVpLnR5cGUgfHwgJ3RleHQnXCJcbiAgICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxuICAgICAgICBbYXR0ci5hdXRvY29tcGxldGVdPVwidWkuYXV0b2NvbXBsZXRlXCJcbiAgICAgICAgW2F0dHIuYXV0b0ZvY3VzXT1cInVpLmF1dG9mb2N1c1wiPlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidHlwZSA9PT0gJ2FkZG9uJzsgZWxzZSBpcHRcIj5cbiAgICAgIDxuei1pbnB1dC1ncm91cFxuICAgICAgICBbbnpBZGRPbkJlZm9yZV09XCJ1aS5hZGRPbkJlZm9yZVwiIFtuekFkZE9uQWZ0ZXJdPVwidWkuYWRkT25BZnRlclwiXG4gICAgICAgIFtuekFkZE9uQmVmb3JlSWNvbl09XCJ1aS5hZGRPbkJlZm9yZUljb25cIiBbbnpBZGRPbkFmdGVySWNvbl09XCJ1aS5hZGRPbkFmdGVySWNvblwiXG4gICAgICAgIFtuelByZWZpeF09XCJ1aS5wcmVmaXhcIiBbbnpQcmVmaXhJY29uXT1cInVpLnByZWZpeEljb25cIlxuICAgICAgICBbbnpTdWZmaXhdPVwidWkuc3VmZml4XCIgW256U3VmZml4SWNvbl09XCJ1aS5zdWZmaXhJY29uXCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJpcHRcIj48L25nLXRlbXBsYXRlPlxuICAgICAgPC9uei1pbnB1dC1ncm91cD5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9zZi1pdGVtLXdyYXA+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFN0cmluZ1dpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICB0eXBlOiBzdHJpbmc7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50eXBlID0gISEoXG4gICAgICB0aGlzLnVpLmFkZE9uQWZ0ZXIgfHxcbiAgICAgIHRoaXMudWkuYWRkT25CZWZvcmUgfHxcbiAgICAgIHRoaXMudWkuYWRkT25BZnRlckljb24gfHxcbiAgICAgIHRoaXMudWkuYWRkT25CZWZvcmVJY29uIHx8XG4gICAgICB0aGlzLnVpLnByZWZpeCB8fFxuICAgICAgdGhpcy51aS5wcmVmaXhJY29uIHx8XG4gICAgICB0aGlzLnVpLnN1ZmZpeCB8fFxuICAgICAgdGhpcy51aS5zdWZmaXhJY29uXG4gICAgKVxuICAgICAgPyAnYWRkb24nXG4gICAgICA6ICcnO1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IFNGVmFsdWUpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEuZm9ybWF0ID09PSAnY29sb3InICYmICF2YWx1ZSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZSgnIzAwMDAwMCcpO1xuICAgIH1cbiAgfVxufVxuIl19