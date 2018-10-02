/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
import { getData } from '../../utils';
var TagWidget = /** @class */ (function (_super) {
    tslib_1.__extends(TagWidget, _super);
    function TagWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    TagWidget.prototype.reset = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        getData(this.schema, this.ui, this.formProperty.formData).subscribe(function (list) {
            _this.data = list;
            _this.detectChanges();
        });
    };
    /**
     * @param {?} item
     * @return {?}
     */
    TagWidget.prototype.onChange = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        item.checked = !item.checked;
        this.updateValue();
        if (this.ui["checkedChange"])
            this.ui["checkedChange"](item.checked);
    };
    /**
     * @return {?}
     */
    TagWidget.prototype._afterClose = /**
     * @return {?}
     */
    function () {
        if (this.ui["afterClose"])
            this.ui["afterClose"]();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    TagWidget.prototype._close = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.ui["onClose"])
            this.ui["onClose"](e);
    };
    /**
     * @return {?}
     */
    TagWidget.prototype.updateValue = /**
     * @return {?}
     */
    function () {
        this.formProperty.setValue(this.data.filter(function (w) { return w.checked; }).map(function (i) { return i.value; }), false);
    };
    TagWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-tag',
                    template: "\n  <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n\n    <nz-tag\n      *ngFor=\"let i of data\"\n      nzMode=\"checkable\"\n      [nzChecked]=\"i.checked\"\n      (nzAfterClose)=\"_afterClose()\"\n      (nzOnClose)=\"_close($event)\"\n      (nzCheckedChange)=\"onChange(i)\">\n      {{i.label}}\n    </nz-tag>\n\n  </sf-item-wrap>\n  ",
                    preserveWhitespaces: false
                }] }
    ];
    return TagWidget;
}(ControlWidget));
export { TagWidget };
if (false) {
    /** @type {?} */
    TagWidget.prototype.data;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvdGFnL3RhZy53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQzs7SUFxQlAscUNBQWE7Ozs7Ozs7O0lBRzFDLHlCQUFLOzs7O0lBQUwsVUFBTSxLQUFVO1FBQWhCLGlCQU9DO1FBTkMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FDakUsVUFBQSxJQUFJO1lBQ0YsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCLENBQ0YsQ0FBQztLQUNIOzs7OztJQUVELDRCQUFROzs7O0lBQVIsVUFBUyxJQUFrQjtRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsRUFBRTtZQUFnQixJQUFJLENBQUMsRUFBRSxrQkFBZSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDaEU7Ozs7SUFFRCwrQkFBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQWEsSUFBSSxDQUFDLEVBQUUsZ0JBQWEsQ0FBQztLQUM5Qzs7Ozs7SUFFRCwwQkFBTTs7OztJQUFOLFVBQU8sQ0FBTTtRQUNYLElBQUksSUFBSSxDQUFDLEVBQUU7WUFBVSxJQUFJLENBQUMsRUFBRSxZQUFTLENBQUMsQ0FBQyxDQUFDO0tBQ3pDOzs7O0lBRU8sK0JBQVc7Ozs7UUFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE9BQU8sRUFBVCxDQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxFQUFQLENBQU8sQ0FBQyxFQUNsRCxLQUFLLENBQ04sQ0FBQzs7O2dCQWpETCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLFFBQVEsRUFBRSx3YUFjVDtvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2lCQUMzQjs7b0JBdkJEO0VBd0IrQixhQUFhO1NBQS9CLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XHJcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XHJcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuLi8uLi91dGlscyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NmLXRhZycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxyXG5cclxuICAgIDxuei10YWdcclxuICAgICAgKm5nRm9yPVwibGV0IGkgb2YgZGF0YVwiXHJcbiAgICAgIG56TW9kZT1cImNoZWNrYWJsZVwiXHJcbiAgICAgIFtuekNoZWNrZWRdPVwiaS5jaGVja2VkXCJcclxuICAgICAgKG56QWZ0ZXJDbG9zZSk9XCJfYWZ0ZXJDbG9zZSgpXCJcclxuICAgICAgKG56T25DbG9zZSk9XCJfY2xvc2UoJGV2ZW50KVwiXHJcbiAgICAgIChuekNoZWNrZWRDaGFuZ2UpPVwib25DaGFuZ2UoaSlcIj5cclxuICAgICAge3tpLmxhYmVsfX1cclxuICAgIDwvbnotdGFnPlxyXG5cclxuICA8L3NmLWl0ZW0td3JhcD5cclxuICBgLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFnV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCB7XHJcbiAgZGF0YTogU0ZTY2hlbWFFbnVtW107XHJcblxyXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcclxuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIHRoaXMuZm9ybVByb3BlcnR5LmZvcm1EYXRhKS5zdWJzY3JpYmUoXHJcbiAgICAgIGxpc3QgPT4ge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XHJcbiAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UoaXRlbTogU0ZTY2hlbWFFbnVtKSB7XHJcbiAgICBpdGVtLmNoZWNrZWQgPSAhaXRlbS5jaGVja2VkO1xyXG4gICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xyXG4gICAgaWYgKHRoaXMudWkuY2hlY2tlZENoYW5nZSkgdGhpcy51aS5jaGVja2VkQ2hhbmdlKGl0ZW0uY2hlY2tlZCk7XHJcbiAgfVxyXG5cclxuICBfYWZ0ZXJDbG9zZSgpIHtcclxuICAgIGlmICh0aGlzLnVpLmFmdGVyQ2xvc2UpIHRoaXMudWkuYWZ0ZXJDbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgX2Nsb3NlKGU6IGFueSkge1xyXG4gICAgaWYgKHRoaXMudWkub25DbG9zZSkgdGhpcy51aS5vbkNsb3NlKGUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVWYWx1ZSgpIHtcclxuICAgIHRoaXMuZm9ybVByb3BlcnR5LnNldFZhbHVlKFxyXG4gICAgICB0aGlzLmRhdGEuZmlsdGVyKHcgPT4gdy5jaGVja2VkKS5tYXAoaSA9PiBpLnZhbHVlKSxcclxuICAgICAgZmFsc2UsXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=