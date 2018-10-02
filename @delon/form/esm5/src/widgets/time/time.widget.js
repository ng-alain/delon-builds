/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
import format from 'date-fns/format';
import { toBool } from '../../utils';
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
        this.format = ui["format"] ? ui["format"] : this.schema.type === 'number'
            ? 'x'
            : 'HH:mm:ss';
        this.i = {
            displayFormat: ui["displayFormat"] || 'HH:mm:ss',
            allowEmpty: toBool(ui["allowEmpty"], true),
            clearText: ui["clearText"] || '清除',
            defaultOpenValue: ui["defaultOpenValue"] || new Date(),
            hideDisabledOptions: toBool(ui["hideDisabledOptions"], false),
            hourStep: ui["hourStep"] || 1,
            minuteStep: ui["nzMinuteStep"] || 1,
            secondStep: ui["secondStep"] || 1,
        };
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
        if (this.ui["utcEpoch"] === true) {
            this.setValue(Date.UTC(1970, 0, 1, value.getHours(), value.getMinutes(), value.getSeconds()));
            return;
        }
        this.setValue(format(value, this.format));
    };
    TimeWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-time',
                    template: "\n  <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n\n    <nz-time-picker\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size\"\n      [nzFormat]=\"i.displayFormat\"\n      [nzAllowEmpty]=\"i.allowEmpty\"\n      [nzClearText]=\"i.clearText\"\n      [nzDefaultOpenValue]=\"i.defaultOpenValue\"\n      [nzDisabledHours]=\"ui.disabledHours\"\n      [nzDisabledMinutes]=\"ui.disabledMinutes\"\n      [nzDisabledSeconds]=\"ui.disabledSeconds\"\n      [nzHideDisabledOptions]=\"i.hideDisabledOptions\"\n      [nzHourStep]=\"i.hourStep\"\n      [nzMinuteStep]=\"i.minuteStep\"\n      [nzSecondStep]=\"i.secondStep\"\n      [nzPopupClassName]=\"ui.popupClassName\"\n      >\n    </nz-time-picker>\n\n  </sf-item-wrap>\n  ",
                    preserveWhitespaces: false
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS53aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL3RpbWUvdGltZS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0MsT0FBTyxNQUFNLE1BQU0saUJBQWlCLENBQUM7QUFDckMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQzs7SUErQkwsc0NBQWE7Ozs2QkFDdEIsSUFBSTs7Ozs7O0lBSXpCLDZCQUFROzs7SUFBUjs7UUFDRSxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxXQUNkLENBQUMsQ0FBQyxFQUFFLFdBQ0osQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLFFBQVE7WUFDN0IsQ0FBQyxDQUFDLEdBQUc7WUFDTCxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxDQUFDLEdBQUc7WUFDUCxhQUFhLEVBQUUsRUFBRSxxQkFBa0IsVUFBVTtZQUM3QyxVQUFVLEVBQUUsTUFBTSxDQUFDLEVBQUUsZ0JBQWEsSUFBSSxDQUFDO1lBQ3ZDLFNBQVMsRUFBRSxFQUFFLGlCQUFjLElBQUk7WUFDL0IsZ0JBQWdCLEVBQUUsRUFBRSx3QkFBcUIsSUFBSSxJQUFJLEVBQUU7WUFDbkQsbUJBQW1CLEVBQUUsTUFBTSxDQUFDLEVBQUUseUJBQXNCLEtBQUssQ0FBQztZQUMxRCxRQUFRLEVBQUUsRUFBRSxnQkFBYSxDQUFDO1lBQzFCLFVBQVUsRUFBRSxFQUFFLG9CQUFpQixDQUFDO1lBQ2hDLFVBQVUsRUFBRSxFQUFFLGtCQUFlLENBQUM7U0FDL0IsQ0FBQztLQUNIOzs7OztJQUVELDBCQUFLOzs7O0lBQUwsVUFBTSxLQUFVO1FBQ2QsSUFBSSxLQUFLLFlBQVksSUFBSSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzFCLE9BQU87U0FDUjs7UUFDRCxJQUFJLENBQUMsR0FBRyxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7O1FBRzFFLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEtBQUssY0FBYyxFQUFFO1lBQ2hELElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQztnQkFBRSxLQUFLLElBQUksS0FBSyxDQUFDO1lBQzVELENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUM7U0FDbkM7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztLQUN2Qjs7Ozs7SUFFRCw0QkFBTzs7OztJQUFQLFVBQVEsS0FBVztRQUNqQixJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQixPQUFPO1NBQ1I7UUFDRCxJQUFJLElBQUksQ0FBQyxFQUFFLGlCQUFjLElBQUksRUFBRTtZQUM3QixJQUFJLENBQUMsUUFBUSxDQUNYLElBQUksQ0FBQyxHQUFHLENBQ04sSUFBSSxFQUNKLENBQUMsRUFDRCxDQUFDLEVBQ0QsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUNoQixLQUFLLENBQUMsVUFBVSxFQUFFLEVBQ2xCLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FDbkIsQ0FDRixDQUFDO1lBQ0YsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0tBQzNDOztnQkF2RkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQixRQUFRLEVBQUUsczNCQXdCVDtvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2lCQUMzQjs7cUJBakNEO0VBa0NnQyxhQUFhO1NBQWhDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcclxuaW1wb3J0IGZvcm1hdCBmcm9tICdkYXRlLWZucy9mb3JtYXQnO1xyXG5pbXBvcnQgeyB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NmLXRpbWUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cclxuXHJcbiAgICA8bnotdGltZS1waWNrZXJcclxuICAgICAgWyhuZ01vZGVsKV09XCJkaXNwbGF5VmFsdWVcIlxyXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJfY2hhbmdlKCRldmVudClcIlxyXG4gICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXHJcbiAgICAgIFtuekZvcm1hdF09XCJpLmRpc3BsYXlGb3JtYXRcIlxyXG4gICAgICBbbnpBbGxvd0VtcHR5XT1cImkuYWxsb3dFbXB0eVwiXHJcbiAgICAgIFtuekNsZWFyVGV4dF09XCJpLmNsZWFyVGV4dFwiXHJcbiAgICAgIFtuekRlZmF1bHRPcGVuVmFsdWVdPVwiaS5kZWZhdWx0T3BlblZhbHVlXCJcclxuICAgICAgW256RGlzYWJsZWRIb3Vyc109XCJ1aS5kaXNhYmxlZEhvdXJzXCJcclxuICAgICAgW256RGlzYWJsZWRNaW51dGVzXT1cInVpLmRpc2FibGVkTWludXRlc1wiXHJcbiAgICAgIFtuekRpc2FibGVkU2Vjb25kc109XCJ1aS5kaXNhYmxlZFNlY29uZHNcIlxyXG4gICAgICBbbnpIaWRlRGlzYWJsZWRPcHRpb25zXT1cImkuaGlkZURpc2FibGVkT3B0aW9uc1wiXHJcbiAgICAgIFtuekhvdXJTdGVwXT1cImkuaG91clN0ZXBcIlxyXG4gICAgICBbbnpNaW51dGVTdGVwXT1cImkubWludXRlU3RlcFwiXHJcbiAgICAgIFtuelNlY29uZFN0ZXBdPVwiaS5zZWNvbmRTdGVwXCJcclxuICAgICAgW256UG9wdXBDbGFzc05hbWVdPVwidWkucG9wdXBDbGFzc05hbWVcIlxyXG4gICAgICA+XHJcbiAgICA8L256LXRpbWUtcGlja2VyPlxyXG5cclxuICA8L3NmLWl0ZW0td3JhcD5cclxuICBgLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGltZVdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGRpc3BsYXlWYWx1ZTogRGF0ZSA9IG51bGw7XHJcbiAgZm9ybWF0OiBzdHJpbmc7XHJcbiAgaTogYW55O1xyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHVpID0gdGhpcy51aTtcclxuICAgIHRoaXMuZm9ybWF0ID0gdWkuZm9ybWF0XHJcbiAgICAgID8gdWkuZm9ybWF0XHJcbiAgICAgIDogdGhpcy5zY2hlbWEudHlwZSA9PT0gJ251bWJlcidcclxuICAgICAgICA/ICd4J1xyXG4gICAgICAgIDogJ0hIOm1tOnNzJztcclxuICAgIHRoaXMuaSA9IHtcclxuICAgICAgZGlzcGxheUZvcm1hdDogdWkuZGlzcGxheUZvcm1hdCB8fCAnSEg6bW06c3MnLFxyXG4gICAgICBhbGxvd0VtcHR5OiB0b0Jvb2wodWkuYWxsb3dFbXB0eSwgdHJ1ZSksXHJcbiAgICAgIGNsZWFyVGV4dDogdWkuY2xlYXJUZXh0IHx8ICfmuIXpmaQnLFxyXG4gICAgICBkZWZhdWx0T3BlblZhbHVlOiB1aS5kZWZhdWx0T3BlblZhbHVlIHx8IG5ldyBEYXRlKCksXHJcbiAgICAgIGhpZGVEaXNhYmxlZE9wdGlvbnM6IHRvQm9vbCh1aS5oaWRlRGlzYWJsZWRPcHRpb25zLCBmYWxzZSksXHJcbiAgICAgIGhvdXJTdGVwOiB1aS5ob3VyU3RlcCB8fCAxLFxyXG4gICAgICBtaW51dGVTdGVwOiB1aS5uek1pbnV0ZVN0ZXAgfHwgMSxcclxuICAgICAgc2Vjb25kU3RlcDogdWkuc2Vjb25kU3RlcCB8fCAxLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgdGhpcy5kaXNwbGF5VmFsdWUgPSB2YWx1ZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IHYgPSB2YWx1ZSAhPSBudWxsICYmIHZhbHVlLnRvU3RyaW5nKCkubGVuZ3RoID8gbmV3IERhdGUodmFsdWUpIDogbnVsbDtcclxuXHJcbiAgICAvLyB0cnlpbmcgcmVzdG9yZSBmdWxsIERhdGUgZm9ybWF0XHJcbiAgICBpZiAodiAhPSBudWxsICYmIHYudG9TdHJpbmcoKSA9PT0gJ0ludmFsaWQgRGF0ZScpIHtcclxuICAgICAgaWYgKHZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoJzonKS5sZW5ndGggPD0gMSkgdmFsdWUgKz0gJzowMCc7XHJcbiAgICAgIHYgPSBuZXcgRGF0ZShgMTk3MC0xLTEgYCArIHZhbHVlKTtcclxuICAgIH1cclxuICAgIHRoaXMuZGlzcGxheVZhbHVlID0gdjtcclxuICB9XHJcblxyXG4gIF9jaGFuZ2UodmFsdWU6IERhdGUpIHtcclxuICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuc2V0VmFsdWUobnVsbCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnVpLnV0Y0Vwb2NoID09PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMuc2V0VmFsdWUoXHJcbiAgICAgICAgRGF0ZS5VVEMoXHJcbiAgICAgICAgICAxOTcwLFxyXG4gICAgICAgICAgMCxcclxuICAgICAgICAgIDEsXHJcbiAgICAgICAgICB2YWx1ZS5nZXRIb3VycygpLFxyXG4gICAgICAgICAgdmFsdWUuZ2V0TWludXRlcygpLFxyXG4gICAgICAgICAgdmFsdWUuZ2V0U2Vjb25kcygpLFxyXG4gICAgICAgICksXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0VmFsdWUoZm9ybWF0KHZhbHVlLCB0aGlzLmZvcm1hdCkpO1xyXG4gIH1cclxufVxyXG4iXX0=