import { Component, ViewEncapsulation } from '@angular/core';
import { format } from 'date-fns';
import { ControlUIWidget, toBool } from '@delon/form';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@delon/form";
import * as i3 from "ng-zorro-antd/time-picker";
export class TimeWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.displayValue = null;
    }
    static { this.KEY = 'time'; }
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TimeWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TimeWidget, selector: "sf-time", usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-time-picker
      [nzId]="id"
      [(ngModel)]="displayValue"
      (ngModelChange)="_change($event)"
      [nzDisabled]="disabled"
      [nzSize]="$any(ui.size)"
      [nzFormat]="i.displayFormat"
      [nzAllowEmpty]="i.allowEmpty"
      [nzClearText]="i.clearText"
      [nzDefaultOpenValue]="i.defaultOpenValue"
      [nzDisabledHours]="ui.disabledHours"
      [nzDisabledMinutes]="ui.disabledMinutes"
      [nzDisabledSeconds]="ui.disabledSeconds"
      [nzHideDisabledOptions]="i.hideDisabledOptions"
      [nzUse12Hours]="i.use12Hours"
      [nzHourStep]="i.hourStep"
      [nzMinuteStep]="i.minuteStep"
      [nzSecondStep]="i.secondStep"
      [nzPopupClassName]="ui.popupClassName!"
      [nzPlaceHolder]="ui.placeholder!"
      [nzNowText]="ui.nowText!"
      [nzOkText]="ui.okText!"
      (nzOpenChange)="_openChange($event)"
    />
  </sf-item-wrap>`, isInline: true, dependencies: [{ kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i2.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { kind: "component", type: i3.NzTimePickerComponent, selector: "nz-time-picker", inputs: ["nzId", "nzSize", "nzStatus", "nzHourStep", "nzMinuteStep", "nzSecondStep", "nzClearText", "nzNowText", "nzOkText", "nzPopupClassName", "nzPlaceHolder", "nzAddOn", "nzDefaultOpenValue", "nzDisabledHours", "nzDisabledMinutes", "nzDisabledSeconds", "nzFormat", "nzOpen", "nzUse12Hours", "nzSuffixIcon", "nzHideDisabledOptions", "nzAllowEmpty", "nzDisabled", "nzAutoFocus", "nzBackdrop", "nzBorderless", "nzInputReadOnly"], outputs: ["nzOpenChange"], exportAs: ["nzTimePicker"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TimeWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-time',
                    template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-time-picker
      [nzId]="id"
      [(ngModel)]="displayValue"
      (ngModelChange)="_change($event)"
      [nzDisabled]="disabled"
      [nzSize]="$any(ui.size)"
      [nzFormat]="i.displayFormat"
      [nzAllowEmpty]="i.allowEmpty"
      [nzClearText]="i.clearText"
      [nzDefaultOpenValue]="i.defaultOpenValue"
      [nzDisabledHours]="ui.disabledHours"
      [nzDisabledMinutes]="ui.disabledMinutes"
      [nzDisabledSeconds]="ui.disabledSeconds"
      [nzHideDisabledOptions]="i.hideDisabledOptions"
      [nzUse12Hours]="i.use12Hours"
      [nzHourStep]="i.hourStep"
      [nzMinuteStep]="i.minuteStep"
      [nzSecondStep]="i.secondStep"
      [nzPopupClassName]="ui.popupClassName!"
      [nzPlaceHolder]="ui.placeholder!"
      [nzNowText]="ui.nowText!"
      [nzOkText]="ui.okText!"
      (nzOpenChange)="_openChange($event)"
    />
  </sf-item-wrap>`,
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS93aWRnZXRzL3RpbWUvd2lkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVsQyxPQUFPLEVBQUUsZUFBZSxFQUFXLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQzs7Ozs7QUEyQy9ELE1BQU0sT0FBTyxVQUFXLFNBQVEsZUFBbUM7SUF0Q25FOztRQTBDRSxpQkFBWSxHQUFnQixJQUFJLENBQUM7S0E4RGxDO2FBakVpQixRQUFHLEdBQUcsTUFBTSxBQUFULENBQVU7SUFNN0IsUUFBUTtRQUNOLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDO1FBQzlCLE1BQU0sR0FBRyxHQUFHO1lBQ1YsYUFBYSxFQUFFLEVBQUUsQ0FBQyxhQUFhLElBQUksVUFBVTtZQUM3QyxVQUFVLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO1lBQ3ZDLFNBQVMsRUFBRSxFQUFFLENBQUMsU0FBUyxJQUFJLElBQUk7WUFDL0IsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLGdCQUFnQixJQUFJLElBQUksSUFBSSxFQUFFO1lBQ25ELG1CQUFtQixFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDO1lBQzFELFVBQVUsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7WUFDeEMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLElBQUksQ0FBQztZQUMxQixVQUFVLEVBQUUsRUFBRSxDQUFDLFVBQVUsSUFBSSxDQUFDO1lBQzlCLFVBQVUsRUFBRSxFQUFFLENBQUMsVUFBVSxJQUFJLENBQUM7U0FDL0IsQ0FBQztRQUNGLElBQUksR0FBRyxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUU7WUFDdkMsR0FBRyxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUM7U0FDakM7UUFDRCxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFRCxLQUFLLENBQUMsS0FBYztRQUNsQixJQUFJLEtBQUssWUFBWSxJQUFJLEVBQUU7WUFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDMUIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxHQUFHLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUUxRSxrQ0FBa0M7UUFDbEMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxjQUFjLEVBQUU7WUFDaEQsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQzNDLEtBQUssSUFBSSxLQUFLLENBQUM7YUFDaEI7WUFDRCxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxPQUFPLENBQUMsS0FBa0I7UUFDeEIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QjtRQUNELElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BCLE9BQU87U0FDUjtRQUNELElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLFVBQVUsRUFBRSxFQUFFLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUYsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxXQUFXLENBQUMsTUFBZTtRQUN6QixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVCO0lBQ0gsQ0FBQzsrR0FqRVUsVUFBVTttR0FBVixVQUFVLHNFQXBDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBZ0NNOzs0RkFJTCxVQUFVO2tCQXRDdEIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFnQ007b0JBQ2hCLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5cbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCwgU0ZWYWx1ZSwgdG9Cb29sIH0gZnJvbSAnQGRlbG9uL2Zvcm0nO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgdHlwZSB7IFNGVGltZVdpZGdldFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtdGltZScsXG4gIHRlbXBsYXRlOiBgPHNmLWl0ZW0td3JhcFxuICAgIFtpZF09XCJpZFwiXG4gICAgW3NjaGVtYV09XCJzY2hlbWFcIlxuICAgIFt1aV09XCJ1aVwiXG4gICAgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIlxuICAgIFtlcnJvcl09XCJlcnJvclwiXG4gICAgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIlxuICA+XG4gICAgPG56LXRpbWUtcGlja2VyXG4gICAgICBbbnpJZF09XCJpZFwiXG4gICAgICBbKG5nTW9kZWwpXT1cImRpc3BsYXlWYWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJfY2hhbmdlKCRldmVudClcIlxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW256U2l6ZV09XCIkYW55KHVpLnNpemUpXCJcbiAgICAgIFtuekZvcm1hdF09XCJpLmRpc3BsYXlGb3JtYXRcIlxuICAgICAgW256QWxsb3dFbXB0eV09XCJpLmFsbG93RW1wdHlcIlxuICAgICAgW256Q2xlYXJUZXh0XT1cImkuY2xlYXJUZXh0XCJcbiAgICAgIFtuekRlZmF1bHRPcGVuVmFsdWVdPVwiaS5kZWZhdWx0T3BlblZhbHVlXCJcbiAgICAgIFtuekRpc2FibGVkSG91cnNdPVwidWkuZGlzYWJsZWRIb3Vyc1wiXG4gICAgICBbbnpEaXNhYmxlZE1pbnV0ZXNdPVwidWkuZGlzYWJsZWRNaW51dGVzXCJcbiAgICAgIFtuekRpc2FibGVkU2Vjb25kc109XCJ1aS5kaXNhYmxlZFNlY29uZHNcIlxuICAgICAgW256SGlkZURpc2FibGVkT3B0aW9uc109XCJpLmhpZGVEaXNhYmxlZE9wdGlvbnNcIlxuICAgICAgW256VXNlMTJIb3Vyc109XCJpLnVzZTEySG91cnNcIlxuICAgICAgW256SG91clN0ZXBdPVwiaS5ob3VyU3RlcFwiXG4gICAgICBbbnpNaW51dGVTdGVwXT1cImkubWludXRlU3RlcFwiXG4gICAgICBbbnpTZWNvbmRTdGVwXT1cImkuc2Vjb25kU3RlcFwiXG4gICAgICBbbnpQb3B1cENsYXNzTmFtZV09XCJ1aS5wb3B1cENsYXNzTmFtZSFcIlxuICAgICAgW256UGxhY2VIb2xkZXJdPVwidWkucGxhY2Vob2xkZXIhXCJcbiAgICAgIFtuek5vd1RleHRdPVwidWkubm93VGV4dCFcIlxuICAgICAgW256T2tUZXh0XT1cInVpLm9rVGV4dCFcIlxuICAgICAgKG56T3BlbkNoYW5nZSk9XCJfb3BlbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAvPlxuICA8L3NmLWl0ZW0td3JhcD5gLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBUaW1lV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFVJV2lkZ2V0PFNGVGltZVdpZGdldFNjaGVtYT4gaW1wbGVtZW50cyBPbkluaXQge1xuICBzdGF0aWMgcmVhZG9ubHkgS0VZID0gJ3RpbWUnO1xuXG4gIHByaXZhdGUgdmFsdWVGb3JtYXQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZGlzcGxheVZhbHVlOiBEYXRlIHwgbnVsbCA9IG51bGw7XG4gIGk6IE56U2FmZUFueTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB1aSA9IHRoaXMudWk7XG4gICAgdGhpcy52YWx1ZUZvcm1hdCA9IHVpLl9mb3JtYXQ7XG4gICAgY29uc3Qgb3B0ID0ge1xuICAgICAgZGlzcGxheUZvcm1hdDogdWkuZGlzcGxheUZvcm1hdCB8fCAnSEg6bW06c3MnLFxuICAgICAgYWxsb3dFbXB0eTogdG9Cb29sKHVpLmFsbG93RW1wdHksIHRydWUpLFxuICAgICAgY2xlYXJUZXh0OiB1aS5jbGVhclRleHQgfHwgJ+a4hemZpCcsXG4gICAgICBkZWZhdWx0T3BlblZhbHVlOiB1aS5kZWZhdWx0T3BlblZhbHVlIHx8IG5ldyBEYXRlKCksXG4gICAgICBoaWRlRGlzYWJsZWRPcHRpb25zOiB0b0Jvb2wodWkuaGlkZURpc2FibGVkT3B0aW9ucywgZmFsc2UpLFxuICAgICAgdXNlMTJIb3VyczogdG9Cb29sKHVpLnVzZTEySG91cnMsIGZhbHNlKSxcbiAgICAgIGhvdXJTdGVwOiB1aS5ob3VyU3RlcCB8fCAxLFxuICAgICAgbWludXRlU3RlcDogdWkubWludXRlU3RlcCB8fCAxLFxuICAgICAgc2Vjb25kU3RlcDogdWkuc2Vjb25kU3RlcCB8fCAxXG4gICAgfTtcbiAgICBpZiAob3B0LnVzZTEySG91cnMgJiYgIXVpLmRpc3BsYXlGb3JtYXQpIHtcbiAgICAgIG9wdC5kaXNwbGF5Rm9ybWF0ID0gYGg6bW06c3MgYWA7XG4gICAgfVxuICAgIHRoaXMuaSA9IG9wdDtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKTogdm9pZCB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgdGhpcy5kaXNwbGF5VmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgdiA9IHZhbHVlICE9IG51bGwgJiYgdmFsdWUudG9TdHJpbmcoKS5sZW5ndGggPyBuZXcgRGF0ZSh2YWx1ZSkgOiBudWxsO1xuXG4gICAgLy8gdHJ5aW5nIHJlc3RvcmUgZnVsbCBEYXRlIGZvcm1hdFxuICAgIGlmICh2ICE9IG51bGwgJiYgdi50b1N0cmluZygpID09PSAnSW52YWxpZCBEYXRlJykge1xuICAgICAgaWYgKHZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoJzonKS5sZW5ndGggPD0gMSkge1xuICAgICAgICB2YWx1ZSArPSAnOjAwJztcbiAgICAgIH1cbiAgICAgIHYgPSBuZXcgRGF0ZShgMTk3MC0xLTEgJHt2YWx1ZX1gKTtcbiAgICB9XG4gICAgdGhpcy5kaXNwbGF5VmFsdWUgPSB2O1xuICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgX2NoYW5nZSh2YWx1ZTogRGF0ZSB8IG51bGwpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHtcbiAgICAgIHRoaXMudWkuY2hhbmdlKHZhbHVlKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUobnVsbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnVpLnV0Y0Vwb2NoID09PSB0cnVlKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKERhdGUuVVRDKDE5NzAsIDAsIDEsIHZhbHVlLmdldEhvdXJzKCksIHZhbHVlLmdldE1pbnV0ZXMoKSwgdmFsdWUuZ2V0U2Vjb25kcygpKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0VmFsdWUoZm9ybWF0KHZhbHVlLCB0aGlzLnZhbHVlRm9ybWF0ISkpO1xuICB9XG5cbiAgX29wZW5DaGFuZ2Uoc3RhdHVzOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkub3BlbkNoYW5nZSkge1xuICAgICAgdGhpcy51aS5vcGVuQ2hhbmdlKHN0YXR1cyk7XG4gICAgfVxuICB9XG59XG4iXX0=