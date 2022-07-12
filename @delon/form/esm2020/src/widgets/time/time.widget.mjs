import { Component, ViewEncapsulation } from '@angular/core';
import { format } from 'date-fns';
import { toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';
import * as i0 from "@angular/core";
import * as i1 from "../../sf-item-wrap.component";
import * as i2 from "ng-zorro-antd/time-picker";
import * as i3 from "@angular/forms";
export class TimeWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.displayValue = null;
    }
    ngOnInit() {
        const ui = this.ui;
        this.valueFormat = ui._format;
        const opt = {
            displayFormat: ui.displayFormat || 'HH:mm:ss',
            allowEmpty: toBool(ui.allowEmpty, true),
            clearText: ui.clearText || '清除',
            defaultOpenValue: ui.defaultOpenValue || new Date(),
            hideDisabledOptions: toBool(ui.hideDisabledOptions, false),
            use12Hours: toBool(ui.use12Hours, false),
            hourStep: ui.hourStep || 1,
            minuteStep: ui.minuteStep || 1,
            secondStep: ui.secondStep || 1
        };
        if (opt.use12Hours && !ui.displayFormat) {
            opt.displayFormat = `h:mm:ss a`;
        }
        this.i = opt;
    }
    reset(value) {
        if (value instanceof Date) {
            this.displayValue = value;
            this.detectChanges();
            return;
        }
        let v = value != null && value.toString().length ? new Date(value) : null;
        // trying restore full Date format
        if (v != null && v.toString() === 'Invalid Date') {
            if (value.toString().split(':').length <= 1) {
                value += ':00';
            }
            v = new Date(`1970-1-1 ${value}`);
        }
        this.displayValue = v;
        this.detectChanges();
    }
    _change(value) {
        if (this.ui.change) {
            this.ui.change(value);
        }
        if (value == null) {
            this.setValue(null);
            return;
        }
        if (this.ui.utcEpoch === true) {
            this.setValue(Date.UTC(1970, 0, 1, value.getHours(), value.getMinutes(), value.getSeconds()));
            return;
        }
        this.setValue(format(value, this.valueFormat));
    }
    _openChange(status) {
        if (this.ui.openChange) {
            this.ui.openChange(status);
        }
    }
}
TimeWidget.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TimeWidget, deps: null, target: i0.ɵɵFactoryTarget.Component });
TimeWidget.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: TimeWidget, selector: "sf-time", usesInheritance: true, ngImport: i0, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-time-picker\n    [nzId]=\"id\"\n    [(ngModel)]=\"displayValue\"\n    (ngModelChange)=\"_change($event)\"\n    [nzDisabled]=\"disabled\"\n    [nzSize]=\"$any(ui.size)\"\n    [nzFormat]=\"i.displayFormat\"\n    [nzAllowEmpty]=\"i.allowEmpty\"\n    [nzClearText]=\"i.clearText\"\n    [nzDefaultOpenValue]=\"i.defaultOpenValue\"\n    [nzDisabledHours]=\"ui.disabledHours\"\n    [nzDisabledMinutes]=\"ui.disabledMinutes\"\n    [nzDisabledSeconds]=\"ui.disabledSeconds\"\n    [nzHideDisabledOptions]=\"i.hideDisabledOptions\"\n    [nzUse12Hours]=\"i.use12Hours\"\n    [nzHourStep]=\"i.hourStep\"\n    [nzMinuteStep]=\"i.minuteStep\"\n    [nzSecondStep]=\"i.secondStep\"\n    [nzPopupClassName]=\"ui.popupClassName!\"\n    [nzPlaceHolder]=\"ui.placeholder!\"\n    [nzNowText]=\"ui.nowText!\"\n    [nzOkText]=\"ui.okText!\"\n    (nzOpenChange)=\"_openChange($event)\"\n  >\n  </nz-time-picker>\n</sf-item-wrap>\n", components: [{ type: i1.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { type: i2.NzTimePickerComponent, selector: "nz-time-picker", inputs: ["nzId", "nzSize", "nzStatus", "nzHourStep", "nzMinuteStep", "nzSecondStep", "nzClearText", "nzNowText", "nzOkText", "nzPopupClassName", "nzPlaceHolder", "nzAddOn", "nzDefaultOpenValue", "nzDisabledHours", "nzDisabledMinutes", "nzDisabledSeconds", "nzFormat", "nzOpen", "nzUse12Hours", "nzSuffixIcon", "nzHideDisabledOptions", "nzAllowEmpty", "nzDisabled", "nzAutoFocus", "nzBackdrop"], outputs: ["nzOpenChange"], exportAs: ["nzTimePicker"] }], directives: [{ type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TimeWidget, decorators: [{
            type: Component,
            args: [{ selector: 'sf-time', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-time-picker\n    [nzId]=\"id\"\n    [(ngModel)]=\"displayValue\"\n    (ngModelChange)=\"_change($event)\"\n    [nzDisabled]=\"disabled\"\n    [nzSize]=\"$any(ui.size)\"\n    [nzFormat]=\"i.displayFormat\"\n    [nzAllowEmpty]=\"i.allowEmpty\"\n    [nzClearText]=\"i.clearText\"\n    [nzDefaultOpenValue]=\"i.defaultOpenValue\"\n    [nzDisabledHours]=\"ui.disabledHours\"\n    [nzDisabledMinutes]=\"ui.disabledMinutes\"\n    [nzDisabledSeconds]=\"ui.disabledSeconds\"\n    [nzHideDisabledOptions]=\"i.hideDisabledOptions\"\n    [nzUse12Hours]=\"i.use12Hours\"\n    [nzHourStep]=\"i.hourStep\"\n    [nzMinuteStep]=\"i.minuteStep\"\n    [nzSecondStep]=\"i.secondStep\"\n    [nzPopupClassName]=\"ui.popupClassName!\"\n    [nzPlaceHolder]=\"ui.placeholder!\"\n    [nzNowText]=\"ui.nowText!\"\n    [nzOkText]=\"ui.okText!\"\n    (nzOpenChange)=\"_openChange($event)\"\n  >\n  </nz-time-picker>\n</sf-item-wrap>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS53aWRnZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL3RpbWUvdGltZS53aWRnZXQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL3RpbWUvdGltZS53aWRnZXQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFLbEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNyQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7OztBQVMvQyxNQUFNLE9BQU8sVUFBVyxTQUFRLGVBQW1DO0lBTm5FOztRQVFFLGlCQUFZLEdBQWdCLElBQUksQ0FBQztLQThEbEM7SUEzREMsUUFBUTtRQUNOLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDO1FBQzlCLE1BQU0sR0FBRyxHQUFHO1lBQ1YsYUFBYSxFQUFFLEVBQUUsQ0FBQyxhQUFhLElBQUksVUFBVTtZQUM3QyxVQUFVLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO1lBQ3ZDLFNBQVMsRUFBRSxFQUFFLENBQUMsU0FBUyxJQUFJLElBQUk7WUFDL0IsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLGdCQUFnQixJQUFJLElBQUksSUFBSSxFQUFFO1lBQ25ELG1CQUFtQixFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDO1lBQzFELFVBQVUsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7WUFDeEMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLElBQUksQ0FBQztZQUMxQixVQUFVLEVBQUUsRUFBRSxDQUFDLFVBQVUsSUFBSSxDQUFDO1lBQzlCLFVBQVUsRUFBRSxFQUFFLENBQUMsVUFBVSxJQUFJLENBQUM7U0FDL0IsQ0FBQztRQUNGLElBQUksR0FBRyxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUU7WUFDdkMsR0FBRyxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUM7U0FDakM7UUFDRCxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFRCxLQUFLLENBQUMsS0FBYztRQUNsQixJQUFJLEtBQUssWUFBWSxJQUFJLEVBQUU7WUFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDMUIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxHQUFHLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUUxRSxrQ0FBa0M7UUFDbEMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxjQUFjLEVBQUU7WUFDaEQsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQzNDLEtBQUssSUFBSSxLQUFLLENBQUM7YUFDaEI7WUFDRCxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxPQUFPLENBQUMsS0FBa0I7UUFDeEIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QjtRQUNELElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BCLE9BQU87U0FDUjtRQUNELElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLFVBQVUsRUFBRSxFQUFFLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUYsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxXQUFXLENBQUMsTUFBZTtRQUN6QixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVCO0lBQ0gsQ0FBQzs7d0dBL0RVLFVBQVU7NEZBQVYsVUFBVSxzRUNqQnZCLHNoQ0EyQkE7NEZEVmEsVUFBVTtrQkFOdEIsU0FBUzsrQkFDRSxTQUFTLHVCQUVFLEtBQUssaUJBQ1gsaUJBQWlCLENBQUMsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5cbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBDb250cm9sVUlXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZUaW1lV2lkZ2V0U2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi10aW1lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RpbWUud2lkZ2V0Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBUaW1lV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFVJV2lkZ2V0PFNGVGltZVdpZGdldFNjaGVtYT4gaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIHZhbHVlRm9ybWF0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRpc3BsYXlWYWx1ZTogRGF0ZSB8IG51bGwgPSBudWxsO1xuICBpOiBOelNhZmVBbnk7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgdWkgPSB0aGlzLnVpO1xuICAgIHRoaXMudmFsdWVGb3JtYXQgPSB1aS5fZm9ybWF0O1xuICAgIGNvbnN0IG9wdCA9IHtcbiAgICAgIGRpc3BsYXlGb3JtYXQ6IHVpLmRpc3BsYXlGb3JtYXQgfHwgJ0hIOm1tOnNzJyxcbiAgICAgIGFsbG93RW1wdHk6IHRvQm9vbCh1aS5hbGxvd0VtcHR5LCB0cnVlKSxcbiAgICAgIGNsZWFyVGV4dDogdWkuY2xlYXJUZXh0IHx8ICfmuIXpmaQnLFxuICAgICAgZGVmYXVsdE9wZW5WYWx1ZTogdWkuZGVmYXVsdE9wZW5WYWx1ZSB8fCBuZXcgRGF0ZSgpLFxuICAgICAgaGlkZURpc2FibGVkT3B0aW9uczogdG9Cb29sKHVpLmhpZGVEaXNhYmxlZE9wdGlvbnMsIGZhbHNlKSxcbiAgICAgIHVzZTEySG91cnM6IHRvQm9vbCh1aS51c2UxMkhvdXJzLCBmYWxzZSksXG4gICAgICBob3VyU3RlcDogdWkuaG91clN0ZXAgfHwgMSxcbiAgICAgIG1pbnV0ZVN0ZXA6IHVpLm1pbnV0ZVN0ZXAgfHwgMSxcbiAgICAgIHNlY29uZFN0ZXA6IHVpLnNlY29uZFN0ZXAgfHwgMVxuICAgIH07XG4gICAgaWYgKG9wdC51c2UxMkhvdXJzICYmICF1aS5kaXNwbGF5Rm9ybWF0KSB7XG4gICAgICBvcHQuZGlzcGxheUZvcm1hdCA9IGBoOm1tOnNzIGFgO1xuICAgIH1cbiAgICB0aGlzLmkgPSBvcHQ7XG4gIH1cblxuICByZXNldCh2YWx1ZTogU0ZWYWx1ZSk6IHZvaWQge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgIHRoaXMuZGlzcGxheVZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHYgPSB2YWx1ZSAhPSBudWxsICYmIHZhbHVlLnRvU3RyaW5nKCkubGVuZ3RoID8gbmV3IERhdGUodmFsdWUpIDogbnVsbDtcblxuICAgIC8vIHRyeWluZyByZXN0b3JlIGZ1bGwgRGF0ZSBmb3JtYXRcbiAgICBpZiAodiAhPSBudWxsICYmIHYudG9TdHJpbmcoKSA9PT0gJ0ludmFsaWQgRGF0ZScpIHtcbiAgICAgIGlmICh2YWx1ZS50b1N0cmluZygpLnNwbGl0KCc6JykubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgdmFsdWUgKz0gJzowMCc7XG4gICAgICB9XG4gICAgICB2ID0gbmV3IERhdGUoYDE5NzAtMS0xICR7dmFsdWV9YCk7XG4gICAgfVxuICAgIHRoaXMuZGlzcGxheVZhbHVlID0gdjtcbiAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIF9jaGFuZ2UodmFsdWU6IERhdGUgfCBudWxsKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB7XG4gICAgICB0aGlzLnVpLmNoYW5nZSh2YWx1ZSk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKG51bGwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy51aS51dGNFcG9jaCA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZShEYXRlLlVUQygxOTcwLCAwLCAxLCB2YWx1ZS5nZXRIb3VycygpLCB2YWx1ZS5nZXRNaW51dGVzKCksIHZhbHVlLmdldFNlY29uZHMoKSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldFZhbHVlKGZvcm1hdCh2YWx1ZSwgdGhpcy52YWx1ZUZvcm1hdCEpKTtcbiAgfVxuXG4gIF9vcGVuQ2hhbmdlKHN0YXR1czogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLm9wZW5DaGFuZ2UpIHtcbiAgICAgIHRoaXMudWkub3BlbkNoYW5nZShzdGF0dXMpO1xuICAgIH1cbiAgfVxufVxuIiwiPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cbiAgPG56LXRpbWUtcGlja2VyXG4gICAgW256SWRdPVwiaWRcIlxuICAgIFsobmdNb2RlbCldPVwiZGlzcGxheVZhbHVlXCJcbiAgICAobmdNb2RlbENoYW5nZSk9XCJfY2hhbmdlKCRldmVudClcIlxuICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICBbbnpTaXplXT1cIiRhbnkodWkuc2l6ZSlcIlxuICAgIFtuekZvcm1hdF09XCJpLmRpc3BsYXlGb3JtYXRcIlxuICAgIFtuekFsbG93RW1wdHldPVwiaS5hbGxvd0VtcHR5XCJcbiAgICBbbnpDbGVhclRleHRdPVwiaS5jbGVhclRleHRcIlxuICAgIFtuekRlZmF1bHRPcGVuVmFsdWVdPVwiaS5kZWZhdWx0T3BlblZhbHVlXCJcbiAgICBbbnpEaXNhYmxlZEhvdXJzXT1cInVpLmRpc2FibGVkSG91cnNcIlxuICAgIFtuekRpc2FibGVkTWludXRlc109XCJ1aS5kaXNhYmxlZE1pbnV0ZXNcIlxuICAgIFtuekRpc2FibGVkU2Vjb25kc109XCJ1aS5kaXNhYmxlZFNlY29uZHNcIlxuICAgIFtuekhpZGVEaXNhYmxlZE9wdGlvbnNdPVwiaS5oaWRlRGlzYWJsZWRPcHRpb25zXCJcbiAgICBbbnpVc2UxMkhvdXJzXT1cImkudXNlMTJIb3Vyc1wiXG4gICAgW256SG91clN0ZXBdPVwiaS5ob3VyU3RlcFwiXG4gICAgW256TWludXRlU3RlcF09XCJpLm1pbnV0ZVN0ZXBcIlxuICAgIFtuelNlY29uZFN0ZXBdPVwiaS5zZWNvbmRTdGVwXCJcbiAgICBbbnpQb3B1cENsYXNzTmFtZV09XCJ1aS5wb3B1cENsYXNzTmFtZSFcIlxuICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyIVwiXG4gICAgW256Tm93VGV4dF09XCJ1aS5ub3dUZXh0IVwiXG4gICAgW256T2tUZXh0XT1cInVpLm9rVGV4dCFcIlxuICAgIChuek9wZW5DaGFuZ2UpPVwiX29wZW5DaGFuZ2UoJGV2ZW50KVwiXG4gID5cbiAgPC9uei10aW1lLXBpY2tlcj5cbjwvc2YtaXRlbS13cmFwPlxuIl19