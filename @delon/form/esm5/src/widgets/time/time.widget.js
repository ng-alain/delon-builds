/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import format from 'date-fns/format';
import { toBool } from '../../utils';
import { ControlWidget } from '../../widget';
var TimeWidget = /** @class */ (function (_super) {
    tslib_1.__extends(TimeWidget, _super);
    function TimeWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.displayValue = null;
        return _this;
    }
    /**
     * @return {?}
     */
    TimeWidget.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var ui = this.ui;
        this.format = ui.format ? ui.format : this.schema.type === 'number' ? 'x' : 'HH:mm:ss';
        this.i = {
            displayFormat: ui.displayFormat || 'HH:mm:ss',
            allowEmpty: toBool(ui.allowEmpty, true),
            clearText: ui.clearText || '清除',
            defaultOpenValue: ui.defaultOpenValue || new Date(),
            hideDisabledOptions: toBool(ui.hideDisabledOptions, false),
            hourStep: ui.hourStep || 1,
            minuteStep: ui.nzMinuteStep || 1,
            secondStep: ui.secondStep || 1,
        };
    };
    /**
     * @return {?}
     */
    TimeWidget.prototype.compCd = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // TODO: removed after nz-datepick support OnPush mode
        setTimeout(function () { return _this.detectChanges(); });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TimeWidget.prototype.reset = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value instanceof Date) {
            this.displayValue = value;
            this.compCd();
            return;
        }
        /** @type {?} */
        var v = value != null && value.toString().length ? new Date(value) : null;
        // trying restore full Date format
        if (v != null && v.toString() === 'Invalid Date') {
            if (value.toString().split(':').length <= 1)
                value += ':00';
            v = new Date("1970-1-1 " + value);
        }
        this.displayValue = v;
        this.compCd();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TimeWidget.prototype._change = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value == null) {
            this.setValue(null);
            return;
        }
        if (this.ui.utcEpoch === true) {
            this.setValue(Date.UTC(1970, 0, 1, value.getHours(), value.getMinutes(), value.getSeconds()));
            return;
        }
        this.setValue(format(value, this.format));
    };
    TimeWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-time',
                    template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n\n  <nz-time-picker [(ngModel)]=\"displayValue\"\n                  (ngModelChange)=\"_change($event)\"\n                  [nzDisabled]=\"disabled\"\n                  [nzSize]=\"ui.size\"\n                  [nzFormat]=\"i.displayFormat\"\n                  [nzAllowEmpty]=\"i.allowEmpty\"\n                  [nzClearText]=\"i.clearText\"\n                  [nzDefaultOpenValue]=\"i.defaultOpenValue\"\n                  [nzDisabledHours]=\"ui.disabledHours\"\n                  [nzDisabledMinutes]=\"ui.disabledMinutes\"\n                  [nzDisabledSeconds]=\"ui.disabledSeconds\"\n                  [nzHideDisabledOptions]=\"i.hideDisabledOptions\"\n                  [nzHourStep]=\"i.hourStep\"\n                  [nzMinuteStep]=\"i.minuteStep\"\n                  [nzSecondStep]=\"i.secondStep\"\n                  [nzPopupClassName]=\"ui.popupClassName\">\n  </nz-time-picker>\n\n</sf-item-wrap>\n"
                }] }
    ];
    return TimeWidget;
}(ControlWidget));
export { TimeWidget };
if (false) {
    /** @type {?} */
    TimeWidget.prototype.displayValue;
    /** @type {?} */
    TimeWidget.prototype.format;
    /** @type {?} */
    TimeWidget.prototype.i;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS53aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL3RpbWUvdGltZS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sTUFBTSxNQUFNLGlCQUFpQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDckMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUU3QztJQUlnQyxzQ0FBYTtJQUo3QztRQUFBLHFFQTBEQztRQXJEQyxrQkFBWSxHQUFTLElBQUksQ0FBQzs7SUFxRDVCLENBQUM7Ozs7SUFoREMsNkJBQVE7OztJQUFSOztZQUNRLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRTtRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDdkYsSUFBSSxDQUFDLENBQUMsR0FBRztZQUNQLGFBQWEsRUFBRSxFQUFFLENBQUMsYUFBYSxJQUFJLFVBQVU7WUFDN0MsVUFBVSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztZQUN2QyxTQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsSUFBSSxJQUFJO1lBQy9CLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLElBQUksRUFBRTtZQUNuRCxtQkFBbUIsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQztZQUMxRCxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsSUFBSSxDQUFDO1lBQzFCLFVBQVUsRUFBRSxFQUFFLENBQUMsWUFBWSxJQUFJLENBQUM7WUFDaEMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxVQUFVLElBQUksQ0FBQztTQUMvQixDQUFDO0lBQ0osQ0FBQzs7OztJQUVPLDJCQUFNOzs7SUFBZDtRQUFBLGlCQUdDO1FBRkMsc0RBQXNEO1FBQ3RELFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGFBQWEsRUFBRSxFQUFwQixDQUFvQixDQUFDLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFRCwwQkFBSzs7OztJQUFMLFVBQU0sS0FBYztRQUNsQixJQUFJLEtBQUssWUFBWSxJQUFJLEVBQUU7WUFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDMUIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2QsT0FBTztTQUNSOztZQUNHLENBQUMsR0FBRyxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBRXpFLGtDQUFrQztRQUNsQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLGNBQWMsRUFBRTtZQUNoRCxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUM7Z0JBQUUsS0FBSyxJQUFJLEtBQUssQ0FBQztZQUM1RCxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBRUQsNEJBQU87Ozs7SUFBUCxVQUFRLEtBQVc7UUFDakIsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLENBQUMsVUFBVSxFQUFFLEVBQUUsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM5RixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Z0JBekRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsb21DQUFpQztpQkFDbEM7O0lBdURELGlCQUFDO0NBQUEsQUExREQsQ0FJZ0MsYUFBYSxHQXNENUM7U0F0RFksVUFBVTs7O0lBQ3JCLGtDQUEwQjs7SUFDMUIsNEJBQWU7O0lBRWYsdUJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IGZvcm1hdCBmcm9tICdkYXRlLWZucy9mb3JtYXQnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtdGltZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lLndpZGdldC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGltZVdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBkaXNwbGF5VmFsdWU6IERhdGUgPSBudWxsO1xuICBmb3JtYXQ6IHN0cmluZztcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBpOiBhbnk7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgdWkgPSB0aGlzLnVpO1xuICAgIHRoaXMuZm9ybWF0ID0gdWkuZm9ybWF0ID8gdWkuZm9ybWF0IDogdGhpcy5zY2hlbWEudHlwZSA9PT0gJ251bWJlcicgPyAneCcgOiAnSEg6bW06c3MnO1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIGRpc3BsYXlGb3JtYXQ6IHVpLmRpc3BsYXlGb3JtYXQgfHwgJ0hIOm1tOnNzJyxcbiAgICAgIGFsbG93RW1wdHk6IHRvQm9vbCh1aS5hbGxvd0VtcHR5LCB0cnVlKSxcbiAgICAgIGNsZWFyVGV4dDogdWkuY2xlYXJUZXh0IHx8ICfmuIXpmaQnLFxuICAgICAgZGVmYXVsdE9wZW5WYWx1ZTogdWkuZGVmYXVsdE9wZW5WYWx1ZSB8fCBuZXcgRGF0ZSgpLFxuICAgICAgaGlkZURpc2FibGVkT3B0aW9uczogdG9Cb29sKHVpLmhpZGVEaXNhYmxlZE9wdGlvbnMsIGZhbHNlKSxcbiAgICAgIGhvdXJTdGVwOiB1aS5ob3VyU3RlcCB8fCAxLFxuICAgICAgbWludXRlU3RlcDogdWkubnpNaW51dGVTdGVwIHx8IDEsXG4gICAgICBzZWNvbmRTdGVwOiB1aS5zZWNvbmRTdGVwIHx8IDEsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgY29tcENkKCkge1xuICAgIC8vIFRPRE86IHJlbW92ZWQgYWZ0ZXIgbnotZGF0ZXBpY2sgc3VwcG9ydCBPblB1c2ggbW9kZVxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5kZXRlY3RDaGFuZ2VzKCkpO1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IFNGVmFsdWUpIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5jb21wQ2QoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHYgPSB2YWx1ZSAhPSBudWxsICYmIHZhbHVlLnRvU3RyaW5nKCkubGVuZ3RoID8gbmV3IERhdGUodmFsdWUpIDogbnVsbDtcblxuICAgIC8vIHRyeWluZyByZXN0b3JlIGZ1bGwgRGF0ZSBmb3JtYXRcbiAgICBpZiAodiAhPSBudWxsICYmIHYudG9TdHJpbmcoKSA9PT0gJ0ludmFsaWQgRGF0ZScpIHtcbiAgICAgIGlmICh2YWx1ZS50b1N0cmluZygpLnNwbGl0KCc6JykubGVuZ3RoIDw9IDEpIHZhbHVlICs9ICc6MDAnO1xuICAgICAgdiA9IG5ldyBEYXRlKGAxOTcwLTEtMSBgICsgdmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IHY7XG4gICAgdGhpcy5jb21wQ2QoKTtcbiAgfVxuXG4gIF9jaGFuZ2UodmFsdWU6IERhdGUpIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRWYWx1ZShudWxsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMudWkudXRjRXBvY2ggPT09IHRydWUpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUoRGF0ZS5VVEMoMTk3MCwgMCwgMSwgdmFsdWUuZ2V0SG91cnMoKSwgdmFsdWUuZ2V0TWludXRlcygpLCB2YWx1ZS5nZXRTZWNvbmRzKCkpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRWYWx1ZShmb3JtYXQodmFsdWUsIHRoaXMuZm9ybWF0KSk7XG4gIH1cbn1cbiJdfQ==