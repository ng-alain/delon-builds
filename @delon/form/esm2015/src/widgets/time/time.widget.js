/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import format from 'date-fns/format';
import { toBool } from '../../utils';
import { ControlWidget } from '../../widget';
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
        // 构建属性对象时会对默认值进行校验，因此可以直接使用 format 作为格式化属性
        this.format = ui.format;
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
     * @return {?}
     */
    compCd() {
        // TODO: removed after nz-datepick support OnPush mode
        setTimeout(() => this.detectChanges());
    }
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) {
        if (value instanceof Date) {
            this.displayValue = value;
            this.compCd();
            return;
        }
        /** @type {?} */
        let v = value != null && value.toString().length ? new Date(value) : null;
        // trying restore full Date format
        if (v != null && v.toString() === 'Invalid Date') {
            if (value.toString().split(':').length <= 1) {
                value += ':00';
            }
            v = new Date(`1970-1-1 ` + value);
        }
        this.displayValue = v;
        this.compCd();
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
                template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n\n  <nz-time-picker [(ngModel)]=\"displayValue\"\n                  (ngModelChange)=\"_change($event)\"\n                  [nzDisabled]=\"disabled\"\n                  [nzSize]=\"ui.size\"\n                  [nzFormat]=\"i.displayFormat\"\n                  [nzAllowEmpty]=\"i.allowEmpty\"\n                  [nzClearText]=\"i.clearText\"\n                  [nzDefaultOpenValue]=\"i.defaultOpenValue\"\n                  [nzDisabledHours]=\"ui.disabledHours\"\n                  [nzDisabledMinutes]=\"ui.disabledMinutes\"\n                  [nzDisabledSeconds]=\"ui.disabledSeconds\"\n                  [nzHideDisabledOptions]=\"i.hideDisabledOptions\"\n                  [nzHourStep]=\"i.hourStep\"\n                  [nzMinuteStep]=\"i.minuteStep\"\n                  [nzSecondStep]=\"i.secondStep\"\n                  [nzPopupClassName]=\"ui.popupClassName\">\n  </nz-time-picker>\n\n</sf-item-wrap>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS53aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL3RpbWUvdGltZS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxNQUFNLE1BQU0saUJBQWlCLENBQUM7QUFFckMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNyQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBTTdDLE1BQU0sT0FBTyxVQUFXLFNBQVEsYUFBYTtJQUo3Qzs7UUFLRSxpQkFBWSxHQUFTLElBQUksQ0FBQztJQXdENUIsQ0FBQzs7OztJQW5EQyxRQUFROztjQUNBLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRTtRQUNsQiwyQ0FBMkM7UUFDM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxDQUFDLEdBQUc7WUFDUCxhQUFhLEVBQUUsRUFBRSxDQUFDLGFBQWEsSUFBSSxVQUFVO1lBQzdDLFVBQVUsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7WUFDdkMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxTQUFTLElBQUksSUFBSTtZQUMvQixnQkFBZ0IsRUFBRSxFQUFFLENBQUMsZ0JBQWdCLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDbkQsbUJBQW1CLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUM7WUFDMUQsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLElBQUksQ0FBQztZQUMxQixVQUFVLEVBQUUsRUFBRSxDQUFDLFlBQVksSUFBSSxDQUFDO1lBQ2hDLFVBQVUsRUFBRSxFQUFFLENBQUMsVUFBVSxJQUFJLENBQUM7U0FDL0IsQ0FBQztJQUNKLENBQUM7Ozs7SUFFTyxNQUFNO1FBQ1osc0RBQXNEO1FBQ3RELFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVELEtBQUssQ0FBQyxLQUFjO1FBQ2xCLElBQUksS0FBSyxZQUFZLElBQUksRUFBRTtZQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDZCxPQUFPO1NBQ1I7O1lBQ0csQ0FBQyxHQUFHLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7UUFFekUsa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEtBQUssY0FBYyxFQUFFO1lBQ2hELElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUMzQyxLQUFLLElBQUksS0FBSyxDQUFDO2FBQ2hCO1lBQ0QsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQztTQUNuQztRQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxLQUFXO1FBQ2pCLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BCLE9BQU87U0FDUjtRQUNELElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLFVBQVUsRUFBRSxFQUFFLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUYsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7OztZQTVERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLG9tQ0FBaUM7YUFDbEM7Ozs7SUFFQyxrQ0FBMEI7O0lBQzFCLDRCQUFlOztJQUVmLHVCQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0JztcbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXRpbWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGltZS53aWRnZXQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZGlzcGxheVZhbHVlOiBEYXRlID0gbnVsbDtcbiAgZm9ybWF0OiBzdHJpbmc7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgaTogYW55O1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHVpID0gdGhpcy51aTtcbiAgICAvLyDmnoTlu7rlsZ7mgKflr7nosaHml7bkvJrlr7npu5jorqTlgLzov5vooYzmoKHpqozvvIzlm6DmraTlj6/ku6Xnm7TmjqXkvb/nlKggZm9ybWF0IOS9nOS4uuagvOW8j+WMluWxnuaAp1xuICAgIHRoaXMuZm9ybWF0ID0gdWkuZm9ybWF0O1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIGRpc3BsYXlGb3JtYXQ6IHVpLmRpc3BsYXlGb3JtYXQgfHwgJ0hIOm1tOnNzJyxcbiAgICAgIGFsbG93RW1wdHk6IHRvQm9vbCh1aS5hbGxvd0VtcHR5LCB0cnVlKSxcbiAgICAgIGNsZWFyVGV4dDogdWkuY2xlYXJUZXh0IHx8ICfmuIXpmaQnLFxuICAgICAgZGVmYXVsdE9wZW5WYWx1ZTogdWkuZGVmYXVsdE9wZW5WYWx1ZSB8fCBuZXcgRGF0ZSgpLFxuICAgICAgaGlkZURpc2FibGVkT3B0aW9uczogdG9Cb29sKHVpLmhpZGVEaXNhYmxlZE9wdGlvbnMsIGZhbHNlKSxcbiAgICAgIGhvdXJTdGVwOiB1aS5ob3VyU3RlcCB8fCAxLFxuICAgICAgbWludXRlU3RlcDogdWkubnpNaW51dGVTdGVwIHx8IDEsXG4gICAgICBzZWNvbmRTdGVwOiB1aS5zZWNvbmRTdGVwIHx8IDEsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgY29tcENkKCkge1xuICAgIC8vIFRPRE86IHJlbW92ZWQgYWZ0ZXIgbnotZGF0ZXBpY2sgc3VwcG9ydCBPblB1c2ggbW9kZVxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5kZXRlY3RDaGFuZ2VzKCkpO1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IFNGVmFsdWUpIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5jb21wQ2QoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHYgPSB2YWx1ZSAhPSBudWxsICYmIHZhbHVlLnRvU3RyaW5nKCkubGVuZ3RoID8gbmV3IERhdGUodmFsdWUpIDogbnVsbDtcblxuICAgIC8vIHRyeWluZyByZXN0b3JlIGZ1bGwgRGF0ZSBmb3JtYXRcbiAgICBpZiAodiAhPSBudWxsICYmIHYudG9TdHJpbmcoKSA9PT0gJ0ludmFsaWQgRGF0ZScpIHtcbiAgICAgIGlmICh2YWx1ZS50b1N0cmluZygpLnNwbGl0KCc6JykubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgdmFsdWUgKz0gJzowMCc7XG4gICAgICB9XG4gICAgICB2ID0gbmV3IERhdGUoYDE5NzAtMS0xIGAgKyB2YWx1ZSk7XG4gICAgfVxuICAgIHRoaXMuZGlzcGxheVZhbHVlID0gdjtcbiAgICB0aGlzLmNvbXBDZCgpO1xuICB9XG5cbiAgX2NoYW5nZSh2YWx1ZTogRGF0ZSkge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKG51bGwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy51aS51dGNFcG9jaCA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZShEYXRlLlVUQygxOTcwLCAwLCAxLCB2YWx1ZS5nZXRIb3VycygpLCB2YWx1ZS5nZXRNaW51dGVzKCksIHZhbHVlLmdldFNlY29uZHMoKSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldFZhbHVlKGZvcm1hdCh2YWx1ZSwgdGhpcy5mb3JtYXQpKTtcbiAgfVxufVxuIl19