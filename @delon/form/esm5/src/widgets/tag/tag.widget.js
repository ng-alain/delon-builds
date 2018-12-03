/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        if (this.ui.checkedChange)
            this.ui.checkedChange(item.checked);
    };
    /**
     * @return {?}
     */
    TagWidget.prototype._afterClose = /**
     * @return {?}
     */
    function () {
        if (this.ui.afterClose)
            this.ui.afterClose();
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
        if (this.ui.onClose)
            this.ui.onClose(e);
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
                    template: "\n  <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n\n    <nz-tag\n      *ngFor=\"let i of data\"\n      nzMode=\"checkable\"\n      [nzChecked]=\"i.checked\"\n      (nzAfterClose)=\"_afterClose()\"\n      (nzOnClose)=\"_close($event)\"\n      (nzCheckedChange)=\"onChange(i)\">\n      {{i.label}}\n    </nz-tag>\n\n  </sf-item-wrap>\n  "
                }] }
    ];
    return TagWidget;
}(ControlWidget));
export { TagWidget };
if (false) {
    /** @type {?} */
    TagWidget.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvdGFnL3RhZy53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUV0QztJQWtCK0IscUNBQWE7SUFsQjVDOztJQWtEQSxDQUFDOzs7OztJQTdCQyx5QkFBSzs7OztJQUFMLFVBQU0sS0FBVTtRQUFoQixpQkFPQztRQU5DLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQ2pFLFVBQUEsSUFBSTtZQUNGLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsNEJBQVE7Ozs7SUFBUixVQUFTLElBQWtCO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYTtZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7O0lBRUQsK0JBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVU7WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRUQsMEJBQU07Ozs7SUFBTixVQUFPLENBQU07UUFDWCxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTztZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFTywrQkFBVzs7O0lBQW5CO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE9BQU8sRUFBVCxDQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxFQUFQLENBQU8sQ0FBQyxFQUNsRCxLQUFLLENBQ04sQ0FBQztJQUNKLENBQUM7O2dCQWpERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLFFBQVEsRUFBRSx3YUFjVDtpQkFDRjs7SUFpQ0QsZ0JBQUM7Q0FBQSxBQWxERCxDQWtCK0IsYUFBYSxHQWdDM0M7U0FoQ1ksU0FBUzs7O0lBQ3BCLHlCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtdGFnJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cblxuICAgIDxuei10YWdcbiAgICAgICpuZ0Zvcj1cImxldCBpIG9mIGRhdGFcIlxuICAgICAgbnpNb2RlPVwiY2hlY2thYmxlXCJcbiAgICAgIFtuekNoZWNrZWRdPVwiaS5jaGVja2VkXCJcbiAgICAgIChuekFmdGVyQ2xvc2UpPVwiX2FmdGVyQ2xvc2UoKVwiXG4gICAgICAobnpPbkNsb3NlKT1cIl9jbG9zZSgkZXZlbnQpXCJcbiAgICAgIChuekNoZWNrZWRDaGFuZ2UpPVwib25DaGFuZ2UoaSlcIj5cbiAgICAgIHt7aS5sYWJlbH19XG4gICAgPC9uei10YWc+XG5cbiAgPC9zZi1pdGVtLXdyYXA+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFRhZ1dpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQge1xuICBkYXRhOiBTRlNjaGVtYUVudW1bXTtcblxuICByZXNldCh2YWx1ZTogYW55KSB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGEpLnN1YnNjcmliZShcbiAgICAgIGxpc3QgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSBsaXN0O1xuICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGl0ZW06IFNGU2NoZW1hRW51bSkge1xuICAgIGl0ZW0uY2hlY2tlZCA9ICFpdGVtLmNoZWNrZWQ7XG4gICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xuICAgIGlmICh0aGlzLnVpLmNoZWNrZWRDaGFuZ2UpIHRoaXMudWkuY2hlY2tlZENoYW5nZShpdGVtLmNoZWNrZWQpO1xuICB9XG5cbiAgX2FmdGVyQ2xvc2UoKSB7XG4gICAgaWYgKHRoaXMudWkuYWZ0ZXJDbG9zZSkgdGhpcy51aS5hZnRlckNsb3NlKCk7XG4gIH1cblxuICBfY2xvc2UoZTogYW55KSB7XG4gICAgaWYgKHRoaXMudWkub25DbG9zZSkgdGhpcy51aS5vbkNsb3NlKGUpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVWYWx1ZSgpIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5zZXRWYWx1ZShcbiAgICAgIHRoaXMuZGF0YS5maWx0ZXIodyA9PiB3LmNoZWNrZWQpLm1hcChpID0+IGkudmFsdWUpLFxuICAgICAgZmFsc2UsXG4gICAgKTtcbiAgfVxufVxuIl19