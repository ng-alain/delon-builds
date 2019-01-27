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
            if (value.toString().split(':').length <= 1)
                value += ':00';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS53aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL3RpbWUvdGltZS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxNQUFNLE1BQU0saUJBQWlCLENBQUM7QUFFckMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNyQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBTTdDLE1BQU0sT0FBTyxVQUFXLFNBQVEsYUFBYTtJQUo3Qzs7UUFLRSxpQkFBWSxHQUFTLElBQUksQ0FBQztJQXFENUIsQ0FBQzs7OztJQWhEQyxRQUFROztjQUNBLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRTtRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDdkYsSUFBSSxDQUFDLENBQUMsR0FBRztZQUNQLGFBQWEsRUFBRSxFQUFFLENBQUMsYUFBYSxJQUFJLFVBQVU7WUFDN0MsVUFBVSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztZQUN2QyxTQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsSUFBSSxJQUFJO1lBQy9CLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLElBQUksRUFBRTtZQUNuRCxtQkFBbUIsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQztZQUMxRCxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsSUFBSSxDQUFDO1lBQzFCLFVBQVUsRUFBRSxFQUFFLENBQUMsWUFBWSxJQUFJLENBQUM7WUFDaEMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxVQUFVLElBQUksQ0FBQztTQUMvQixDQUFDO0lBQ0osQ0FBQzs7OztJQUVPLE1BQU07UUFDWixzREFBc0Q7UUFDdEQsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7O0lBRUQsS0FBSyxDQUFDLEtBQWM7UUFDbEIsSUFBSSxLQUFLLFlBQVksSUFBSSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzFCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNkLE9BQU87U0FDUjs7WUFDRyxDQUFDLEdBQUcsS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUV6RSxrQ0FBa0M7UUFDbEMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxjQUFjLEVBQUU7WUFDaEQsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDO2dCQUFFLEtBQUssSUFBSSxLQUFLLENBQUM7WUFDNUQsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQztTQUNuQztRQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxLQUFXO1FBQ2pCLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BCLE9BQU87U0FDUjtRQUNELElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLFVBQVUsRUFBRSxFQUFFLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUYsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7OztZQXpERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLG9tQ0FBaUM7YUFDbEM7Ozs7SUFFQyxrQ0FBMEI7O0lBQzFCLDRCQUFlOztJQUVmLHVCQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0JztcbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXRpbWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGltZS53aWRnZXQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZGlzcGxheVZhbHVlOiBEYXRlID0gbnVsbDtcbiAgZm9ybWF0OiBzdHJpbmc7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgaTogYW55O1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHVpID0gdGhpcy51aTtcbiAgICB0aGlzLmZvcm1hdCA9IHVpLmZvcm1hdCA/IHVpLmZvcm1hdCA6IHRoaXMuc2NoZW1hLnR5cGUgPT09ICdudW1iZXInID8gJ3gnIDogJ0hIOm1tOnNzJztcbiAgICB0aGlzLmkgPSB7XG4gICAgICBkaXNwbGF5Rm9ybWF0OiB1aS5kaXNwbGF5Rm9ybWF0IHx8ICdISDptbTpzcycsXG4gICAgICBhbGxvd0VtcHR5OiB0b0Jvb2wodWkuYWxsb3dFbXB0eSwgdHJ1ZSksXG4gICAgICBjbGVhclRleHQ6IHVpLmNsZWFyVGV4dCB8fCAn5riF6ZmkJyxcbiAgICAgIGRlZmF1bHRPcGVuVmFsdWU6IHVpLmRlZmF1bHRPcGVuVmFsdWUgfHwgbmV3IERhdGUoKSxcbiAgICAgIGhpZGVEaXNhYmxlZE9wdGlvbnM6IHRvQm9vbCh1aS5oaWRlRGlzYWJsZWRPcHRpb25zLCBmYWxzZSksXG4gICAgICBob3VyU3RlcDogdWkuaG91clN0ZXAgfHwgMSxcbiAgICAgIG1pbnV0ZVN0ZXA6IHVpLm56TWludXRlU3RlcCB8fCAxLFxuICAgICAgc2Vjb25kU3RlcDogdWkuc2Vjb25kU3RlcCB8fCAxLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGNvbXBDZCgpIHtcbiAgICAvLyBUT0RPOiByZW1vdmVkIGFmdGVyIG56LWRhdGVwaWNrIHN1cHBvcnQgT25QdXNoIG1vZGVcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgdGhpcy5kaXNwbGF5VmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuY29tcENkKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCB2ID0gdmFsdWUgIT0gbnVsbCAmJiB2YWx1ZS50b1N0cmluZygpLmxlbmd0aCA/IG5ldyBEYXRlKHZhbHVlKSA6IG51bGw7XG5cbiAgICAvLyB0cnlpbmcgcmVzdG9yZSBmdWxsIERhdGUgZm9ybWF0XG4gICAgaWYgKHYgIT0gbnVsbCAmJiB2LnRvU3RyaW5nKCkgPT09ICdJbnZhbGlkIERhdGUnKSB7XG4gICAgICBpZiAodmFsdWUudG9TdHJpbmcoKS5zcGxpdCgnOicpLmxlbmd0aCA8PSAxKSB2YWx1ZSArPSAnOjAwJztcbiAgICAgIHYgPSBuZXcgRGF0ZShgMTk3MC0xLTEgYCArIHZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy5kaXNwbGF5VmFsdWUgPSB2O1xuICAgIHRoaXMuY29tcENkKCk7XG4gIH1cblxuICBfY2hhbmdlKHZhbHVlOiBEYXRlKSB7XG4gICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUobnVsbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnVpLnV0Y0Vwb2NoID09PSB0cnVlKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKERhdGUuVVRDKDE5NzAsIDAsIDEsIHZhbHVlLmdldEhvdXJzKCksIHZhbHVlLmdldE1pbnV0ZXMoKSwgdmFsdWUuZ2V0U2Vjb25kcygpKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0VmFsdWUoZm9ybWF0KHZhbHVlLCB0aGlzLmZvcm1hdCkpO1xuICB9XG59XG4iXX0=