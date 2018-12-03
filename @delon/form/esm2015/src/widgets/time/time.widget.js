/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
import format from 'date-fns/format';
import { toBool } from '../../utils';
export class TimeWidget extends ControlWidget {
    constructor() {
        super(...arguments);
        this.displayValue = null;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const ui = this.ui;
        this.format = ui.format
            ? ui.format
            : this.schema.type === 'number'
                ? 'x'
                : 'HH:mm:ss';
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) {
        if (value instanceof Date) {
            this.displayValue = value;
            return;
        }
        /** @type {?} */
        let v = value != null && value.toString().length ? new Date(value) : null;
        // trying restore full Date format
        if (v != null && v.toString() === 'Invalid Date') {
            if (value.toString().split(':').length <= 1)
                value += ':00';
            v = new Date(`1970-1-1 ` + value);
        }
        this.displayValue = v;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _change(value) {
        if (value == null) {
            this.setValue(null);
            return;
        }
        if (this.ui.utcEpoch === true) {
            this.setValue(Date.UTC(1970, 0, 1, value.getHours(), value.getMinutes(), value.getSeconds()));
            return;
        }
        this.setValue(format(value, this.format));
    }
}
TimeWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-time',
                template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">

    <nz-time-picker
      [(ngModel)]="displayValue"
      (ngModelChange)="_change($event)"
      [nzDisabled]="disabled"
      [nzSize]="ui.size"
      [nzFormat]="i.displayFormat"
      [nzAllowEmpty]="i.allowEmpty"
      [nzClearText]="i.clearText"
      [nzDefaultOpenValue]="i.defaultOpenValue"
      [nzDisabledHours]="ui.disabledHours"
      [nzDisabledMinutes]="ui.disabledMinutes"
      [nzDisabledSeconds]="ui.disabledSeconds"
      [nzHideDisabledOptions]="i.hideDisabledOptions"
      [nzHourStep]="i.hourStep"
      [nzMinuteStep]="i.minuteStep"
      [nzSecondStep]="i.secondStep"
      [nzPopupClassName]="ui.popupClassName"
      >
    </nz-time-picker>

  </sf-item-wrap>
  `
            }] }
];
if (false) {
    /** @type {?} */
    TimeWidget.prototype.displayValue;
    /** @type {?} */
    TimeWidget.prototype.format;
    /** @type {?} */
    TimeWidget.prototype.i;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS53aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL3RpbWUvdGltZS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM3QyxPQUFPLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQztBQUNyQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBOEJyQyxNQUFNLE9BQU8sVUFBVyxTQUFRLGFBQWE7SUE1QjdDOztRQTZCRSxpQkFBWSxHQUFTLElBQUksQ0FBQztJQTBENUIsQ0FBQzs7OztJQXREQyxRQUFROztjQUNBLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRTtRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNO1lBQ3JCLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTTtZQUNYLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxRQUFRO2dCQUM3QixDQUFDLENBQUMsR0FBRztnQkFDTCxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxDQUFDLEdBQUc7WUFDUCxhQUFhLEVBQUUsRUFBRSxDQUFDLGFBQWEsSUFBSSxVQUFVO1lBQzdDLFVBQVUsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7WUFDdkMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxTQUFTLElBQUksSUFBSTtZQUMvQixnQkFBZ0IsRUFBRSxFQUFFLENBQUMsZ0JBQWdCLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDbkQsbUJBQW1CLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUM7WUFDMUQsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLElBQUksQ0FBQztZQUMxQixVQUFVLEVBQUUsRUFBRSxDQUFDLFlBQVksSUFBSSxDQUFDO1lBQ2hDLFVBQVUsRUFBRSxFQUFFLENBQUMsVUFBVSxJQUFJLENBQUM7U0FDL0IsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsS0FBSyxDQUFDLEtBQVU7UUFDZCxJQUFJLEtBQUssWUFBWSxJQUFJLEVBQUU7WUFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDMUIsT0FBTztTQUNSOztZQUNHLENBQUMsR0FBRyxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBRXpFLGtDQUFrQztRQUNsQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLGNBQWMsRUFBRTtZQUNoRCxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUM7Z0JBQUUsS0FBSyxJQUFJLEtBQUssQ0FBQztZQUM1RCxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsS0FBVztRQUNqQixJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQixPQUFPO1NBQ1I7UUFDRCxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtZQUM3QixJQUFJLENBQUMsUUFBUSxDQUNYLElBQUksQ0FBQyxHQUFHLENBQ04sSUFBSSxFQUNKLENBQUMsRUFDRCxDQUFDLEVBQ0QsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUNoQixLQUFLLENBQUMsVUFBVSxFQUFFLEVBQ2xCLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FDbkIsQ0FDRixDQUFDO1lBQ0YsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7OztZQXRGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JUO2FBQ0Y7Ozs7SUFFQyxrQ0FBMEI7O0lBQzFCLDRCQUFlOztJQUNmLHVCQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IGZvcm1hdCBmcm9tICdkYXRlLWZucy9mb3JtYXQnO1xuaW1wb3J0IHsgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi10aW1lJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cblxuICAgIDxuei10aW1lLXBpY2tlclxuICAgICAgWyhuZ01vZGVsKV09XCJkaXNwbGF5VmFsdWVcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiX2NoYW5nZSgkZXZlbnQpXCJcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICBbbnpGb3JtYXRdPVwiaS5kaXNwbGF5Rm9ybWF0XCJcbiAgICAgIFtuekFsbG93RW1wdHldPVwiaS5hbGxvd0VtcHR5XCJcbiAgICAgIFtuekNsZWFyVGV4dF09XCJpLmNsZWFyVGV4dFwiXG4gICAgICBbbnpEZWZhdWx0T3BlblZhbHVlXT1cImkuZGVmYXVsdE9wZW5WYWx1ZVwiXG4gICAgICBbbnpEaXNhYmxlZEhvdXJzXT1cInVpLmRpc2FibGVkSG91cnNcIlxuICAgICAgW256RGlzYWJsZWRNaW51dGVzXT1cInVpLmRpc2FibGVkTWludXRlc1wiXG4gICAgICBbbnpEaXNhYmxlZFNlY29uZHNdPVwidWkuZGlzYWJsZWRTZWNvbmRzXCJcbiAgICAgIFtuekhpZGVEaXNhYmxlZE9wdGlvbnNdPVwiaS5oaWRlRGlzYWJsZWRPcHRpb25zXCJcbiAgICAgIFtuekhvdXJTdGVwXT1cImkuaG91clN0ZXBcIlxuICAgICAgW256TWludXRlU3RlcF09XCJpLm1pbnV0ZVN0ZXBcIlxuICAgICAgW256U2Vjb25kU3RlcF09XCJpLnNlY29uZFN0ZXBcIlxuICAgICAgW256UG9wdXBDbGFzc05hbWVdPVwidWkucG9wdXBDbGFzc05hbWVcIlxuICAgICAgPlxuICAgIDwvbnotdGltZS1waWNrZXI+XG5cbiAgPC9zZi1pdGVtLXdyYXA+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZGlzcGxheVZhbHVlOiBEYXRlID0gbnVsbDtcbiAgZm9ybWF0OiBzdHJpbmc7XG4gIGk6IGFueTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB1aSA9IHRoaXMudWk7XG4gICAgdGhpcy5mb3JtYXQgPSB1aS5mb3JtYXRcbiAgICAgID8gdWkuZm9ybWF0XG4gICAgICA6IHRoaXMuc2NoZW1hLnR5cGUgPT09ICdudW1iZXInXG4gICAgICAgID8gJ3gnXG4gICAgICAgIDogJ0hIOm1tOnNzJztcbiAgICB0aGlzLmkgPSB7XG4gICAgICBkaXNwbGF5Rm9ybWF0OiB1aS5kaXNwbGF5Rm9ybWF0IHx8ICdISDptbTpzcycsXG4gICAgICBhbGxvd0VtcHR5OiB0b0Jvb2wodWkuYWxsb3dFbXB0eSwgdHJ1ZSksXG4gICAgICBjbGVhclRleHQ6IHVpLmNsZWFyVGV4dCB8fCAn5riF6ZmkJyxcbiAgICAgIGRlZmF1bHRPcGVuVmFsdWU6IHVpLmRlZmF1bHRPcGVuVmFsdWUgfHwgbmV3IERhdGUoKSxcbiAgICAgIGhpZGVEaXNhYmxlZE9wdGlvbnM6IHRvQm9vbCh1aS5oaWRlRGlzYWJsZWRPcHRpb25zLCBmYWxzZSksXG4gICAgICBob3VyU3RlcDogdWkuaG91clN0ZXAgfHwgMSxcbiAgICAgIG1pbnV0ZVN0ZXA6IHVpLm56TWludXRlU3RlcCB8fCAxLFxuICAgICAgc2Vjb25kU3RlcDogdWkuc2Vjb25kU3RlcCB8fCAxLFxuICAgIH07XG4gIH1cblxuICByZXNldCh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgdGhpcy5kaXNwbGF5VmFsdWUgPSB2YWx1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHYgPSB2YWx1ZSAhPSBudWxsICYmIHZhbHVlLnRvU3RyaW5nKCkubGVuZ3RoID8gbmV3IERhdGUodmFsdWUpIDogbnVsbDtcblxuICAgIC8vIHRyeWluZyByZXN0b3JlIGZ1bGwgRGF0ZSBmb3JtYXRcbiAgICBpZiAodiAhPSBudWxsICYmIHYudG9TdHJpbmcoKSA9PT0gJ0ludmFsaWQgRGF0ZScpIHtcbiAgICAgIGlmICh2YWx1ZS50b1N0cmluZygpLnNwbGl0KCc6JykubGVuZ3RoIDw9IDEpIHZhbHVlICs9ICc6MDAnO1xuICAgICAgdiA9IG5ldyBEYXRlKGAxOTcwLTEtMSBgICsgdmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IHY7XG4gIH1cblxuICBfY2hhbmdlKHZhbHVlOiBEYXRlKSB7XG4gICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUobnVsbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnVpLnV0Y0Vwb2NoID09PSB0cnVlKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKFxuICAgICAgICBEYXRlLlVUQyhcbiAgICAgICAgICAxOTcwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICB2YWx1ZS5nZXRIb3VycygpLFxuICAgICAgICAgIHZhbHVlLmdldE1pbnV0ZXMoKSxcbiAgICAgICAgICB2YWx1ZS5nZXRTZWNvbmRzKCksXG4gICAgICAgICksXG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldFZhbHVlKGZvcm1hdCh2YWx1ZSwgdGhpcy5mb3JtYXQpKTtcbiAgfVxufVxuIl19