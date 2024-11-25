import { Component, ViewEncapsulation } from '@angular/core';
import { format } from 'date-fns';
import { toDate } from '@delon/util/date-time';
import { toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "ng-zorro-antd/date-picker";
import * as i3 from "../../sf-item-wrap.component";
export class DateWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.flatRange = false;
        this.displayValue = null;
    }
    ngOnInit() {
        const { mode, end, displayFormat, allowClear, showToday } = this.ui;
        this.mode = mode || 'date';
        this.flatRange = end != null;
        // 构建属性对象时会对默认值进行校验，因此可以直接使用 format 作为格式化属性
        this.startFormat = this.ui._format;
        if (this.flatRange) {
            this.mode = 'range';
            const endUi = this.endProperty.ui;
            this.endFormat = endUi.format ? endUi._format : this.startFormat;
        }
        if (!displayFormat) {
            switch (this.mode) {
                case 'year':
                    this.displayFormat = `yyyy`;
                    break;
                case 'month':
                    this.displayFormat = `yyyy-MM`;
                    break;
                case 'week':
                    this.displayFormat = `yyyy-ww`;
                    break;
            }
        }
        else {
            this.displayFormat = displayFormat;
        }
        this.i = {
            allowClear: toBool(allowClear, true),
            // nz-date-picker
            showToday: toBool(showToday, true)
        };
    }
    reset(value) {
        const toDateOptions = { formatString: this.startFormat, defaultValue: null };
        if (Array.isArray(value)) {
            value = value.map(v => toDate(v, toDateOptions));
        }
        else {
            value = toDate(value, toDateOptions);
        }
        if (this.flatRange) {
            const endValue = toDate(this.endProperty.formData, {
                formatString: this.endFormat || this.startFormat,
                defaultValue: null
            });
            this.displayValue = value == null || endValue == null ? [] : [value, endValue];
        }
        else {
            this.displayValue = value;
        }
        this.detectChanges();
        // TODO: Need to wait for the rendering to complete, otherwise it will be overwritten of end widget
        if (this.displayValue) {
            setTimeout(() => this._change(this.displayValue, false));
        }
    }
    _change(value, emitModelChange = true) {
        if (emitModelChange && this.ui.change) {
            this.ui.change(value);
        }
        if (value == null || (Array.isArray(value) && value.length < 2)) {
            this.setValue(null);
            this.setEnd(null);
            return;
        }
        const res = Array.isArray(value)
            ? [format(value[0], this.startFormat), format(value[1], this.endFormat || this.startFormat)]
            : format(value, this.startFormat);
        if (this.flatRange) {
            this.setValue(res[0]);
            this.setEnd(res[1]);
        }
        else {
            this.setValue(res);
        }
    }
    _openChange(status) {
        if (this.ui.onOpenChange)
            this.ui.onOpenChange(status);
    }
    _ok(value) {
        if (this.ui.onOk)
            this.ui.onOk(value);
    }
    get endProperty() {
        return this.formProperty.parent.properties[this.ui.end];
    }
    setEnd(value) {
        if (!this.flatRange)
            return;
        this.endProperty.setValue(value, true);
        this.endProperty.updateValueAndValidity();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: DateWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.11", type: DateWidget, selector: "sf-date", usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    @switch (mode) {
      @case ('year') {
        <nz-year-picker
          [nzId]="id"
          [nzDisabled]="disabled"
          [nzSize]="ui.size!"
          [nzFormat]="displayFormat"
          [(ngModel)]="displayValue"
          (ngModelChange)="_change($event)"
          [nzAllowClear]="i.allowClear"
          [class]="ui.className!"
          [nzDisabledDate]="ui.disabledDate"
          [nzLocale]="ui.locale!"
          [nzPlaceHolder]="ui.placeholder!"
          [nzPopupStyle]="ui.popupStyle!"
          [nzDropdownClassName]="ui.dropdownClassName"
          (nzOnOpenChange)="_openChange($event)"
          [nzRenderExtraFooter]="ui.renderExtraFooter"
          [nzInputReadOnly]="ui.inputReadOnly"
          [nzInline]="ui.inline!"
        />
      }
      @case ('month') {
        <nz-month-picker
          [nzId]="id"
          [nzDisabled]="disabled"
          [nzSize]="ui.size!"
          [nzFormat]="displayFormat"
          [(ngModel)]="displayValue"
          (ngModelChange)="_change($event)"
          [nzAllowClear]="i.allowClear"
          [class]="ui.className!"
          [nzDisabledDate]="ui.disabledDate"
          [nzLocale]="ui.locale!"
          [nzPlaceHolder]="ui.placeholder!"
          [nzPopupStyle]="ui.popupStyle!"
          [nzDropdownClassName]="ui.dropdownClassName"
          (nzOnOpenChange)="_openChange($event)"
          [nzRenderExtraFooter]="ui.renderExtraFooter"
          [nzInputReadOnly]="ui.inputReadOnly"
          [nzInline]="ui.inline!"
        />
      }
      @case ('week') {
        <nz-week-picker
          [nzId]="id"
          [nzDisabled]="disabled"
          [nzSize]="ui.size!"
          [nzFormat]="displayFormat"
          [(ngModel)]="displayValue"
          (ngModelChange)="_change($event)"
          [nzAllowClear]="i.allowClear"
          [class]="ui.className!"
          [nzDisabledDate]="ui.disabledDate"
          [nzLocale]="ui.locale!"
          [nzPlaceHolder]="ui.placeholder!"
          [nzPopupStyle]="ui.popupStyle!"
          [nzDropdownClassName]="ui.dropdownClassName"
          [nzInputReadOnly]="ui.inputReadOnly"
          [nzInline]="ui.inline!"
          (nzOnOpenChange)="_openChange($event)"
        />
      }
      @case ('range') {
        <nz-range-picker
          [nzId]="id"
          [nzDisabled]="disabled"
          [nzSize]="ui.size!"
          [nzFormat]="displayFormat"
          [(ngModel)]="displayValue"
          (ngModelChange)="_change($event)"
          [nzAllowClear]="i.allowClear"
          [class]="ui.className!"
          [nzDisabledDate]="ui.disabledDate"
          [nzLocale]="ui.locale!"
          [nzPlaceHolder]="ui.placeholder!"
          [nzPopupStyle]="ui.popupStyle!"
          [nzDropdownClassName]="ui.dropdownClassName"
          (nzOnOpenChange)="_openChange($event)"
          [nzDisabledTime]="ui.disabledTime"
          [nzRenderExtraFooter]="ui.renderExtraFooter"
          [nzRanges]="ui.ranges"
          [nzShowTime]="ui.showTime"
          [nzSeparator]="ui.separator"
          [nzShowWeekNumber]="ui.showWeekNumber || false"
          [nzMode]="$any(ui.rangeMode)"
          [nzInputReadOnly]="ui.inputReadOnly"
          [nzInline]="ui.inline!"
          (nzOnOk)="_ok($event)"
        />
      }
      @default {
        <nz-date-picker
          [nzId]="id"
          [nzDisabled]="disabled"
          [nzSize]="ui.size!"
          [nzFormat]="displayFormat"
          [(ngModel)]="displayValue"
          (ngModelChange)="_change($event)"
          [nzAllowClear]="i.allowClear"
          [class]="ui.className!"
          [nzDisabledDate]="ui.disabledDate"
          [nzLocale]="ui.locale!"
          [nzPlaceHolder]="ui.placeholder!"
          [nzPopupStyle]="ui.popupStyle!"
          [nzDropdownClassName]="ui.dropdownClassName"
          (nzOnOpenChange)="_openChange($event)"
          [nzDisabledTime]="ui.disabledTime"
          [nzRenderExtraFooter]="ui.renderExtraFooter"
          [nzShowTime]="ui.showTime"
          [nzShowToday]="i.showToday"
          [nzShowWeekNumber]="ui.showWeekNumber || false"
          [nzInputReadOnly]="ui.inputReadOnly"
          [nzInline]="ui.inline!"
          (nzOnOk)="_ok($event)"
        />
      }
    }
  </sf-item-wrap>`, isInline: true, dependencies: [{ kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i2.NzDatePickerComponent, selector: "nz-date-picker,nz-week-picker,nz-month-picker,nz-quarter-picker,nz-year-picker,nz-range-picker", inputs: ["nzAllowClear", "nzAutoFocus", "nzDisabled", "nzBorderless", "nzInputReadOnly", "nzInline", "nzOpen", "nzDisabledDate", "nzLocale", "nzPlaceHolder", "nzPopupStyle", "nzDropdownClassName", "nzSize", "nzStatus", "nzFormat", "nzDateRender", "nzDisabledTime", "nzRenderExtraFooter", "nzShowToday", "nzMode", "nzShowNow", "nzRanges", "nzDefaultPickerValue", "nzSeparator", "nzSuffixIcon", "nzBackdrop", "nzId", "nzPlacement", "nzShowWeekNumber", "nzShowTime"], outputs: ["nzOnPanelChange", "nzOnCalendarChange", "nzOnOk", "nzOnOpenChange"], exportAs: ["nzDatePicker"] }, { kind: "directive", type: i2.NzRangePickerComponent, selector: "nz-range-picker", exportAs: ["nzRangePicker"] }, { kind: "directive", type: i2.NzMonthPickerComponent, selector: "nz-month-picker", exportAs: ["nzMonthPicker"] }, { kind: "directive", type: i2.NzYearPickerComponent, selector: "nz-year-picker", exportAs: ["nzYearPicker"] }, { kind: "directive", type: i2.NzWeekPickerComponent, selector: "nz-week-picker", exportAs: ["nzWeekPicker"] }, { kind: "component", type: i3.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: DateWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-date',
                    template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    @switch (mode) {
      @case ('year') {
        <nz-year-picker
          [nzId]="id"
          [nzDisabled]="disabled"
          [nzSize]="ui.size!"
          [nzFormat]="displayFormat"
          [(ngModel)]="displayValue"
          (ngModelChange)="_change($event)"
          [nzAllowClear]="i.allowClear"
          [class]="ui.className!"
          [nzDisabledDate]="ui.disabledDate"
          [nzLocale]="ui.locale!"
          [nzPlaceHolder]="ui.placeholder!"
          [nzPopupStyle]="ui.popupStyle!"
          [nzDropdownClassName]="ui.dropdownClassName"
          (nzOnOpenChange)="_openChange($event)"
          [nzRenderExtraFooter]="ui.renderExtraFooter"
          [nzInputReadOnly]="ui.inputReadOnly"
          [nzInline]="ui.inline!"
        />
      }
      @case ('month') {
        <nz-month-picker
          [nzId]="id"
          [nzDisabled]="disabled"
          [nzSize]="ui.size!"
          [nzFormat]="displayFormat"
          [(ngModel)]="displayValue"
          (ngModelChange)="_change($event)"
          [nzAllowClear]="i.allowClear"
          [class]="ui.className!"
          [nzDisabledDate]="ui.disabledDate"
          [nzLocale]="ui.locale!"
          [nzPlaceHolder]="ui.placeholder!"
          [nzPopupStyle]="ui.popupStyle!"
          [nzDropdownClassName]="ui.dropdownClassName"
          (nzOnOpenChange)="_openChange($event)"
          [nzRenderExtraFooter]="ui.renderExtraFooter"
          [nzInputReadOnly]="ui.inputReadOnly"
          [nzInline]="ui.inline!"
        />
      }
      @case ('week') {
        <nz-week-picker
          [nzId]="id"
          [nzDisabled]="disabled"
          [nzSize]="ui.size!"
          [nzFormat]="displayFormat"
          [(ngModel)]="displayValue"
          (ngModelChange)="_change($event)"
          [nzAllowClear]="i.allowClear"
          [class]="ui.className!"
          [nzDisabledDate]="ui.disabledDate"
          [nzLocale]="ui.locale!"
          [nzPlaceHolder]="ui.placeholder!"
          [nzPopupStyle]="ui.popupStyle!"
          [nzDropdownClassName]="ui.dropdownClassName"
          [nzInputReadOnly]="ui.inputReadOnly"
          [nzInline]="ui.inline!"
          (nzOnOpenChange)="_openChange($event)"
        />
      }
      @case ('range') {
        <nz-range-picker
          [nzId]="id"
          [nzDisabled]="disabled"
          [nzSize]="ui.size!"
          [nzFormat]="displayFormat"
          [(ngModel)]="displayValue"
          (ngModelChange)="_change($event)"
          [nzAllowClear]="i.allowClear"
          [class]="ui.className!"
          [nzDisabledDate]="ui.disabledDate"
          [nzLocale]="ui.locale!"
          [nzPlaceHolder]="ui.placeholder!"
          [nzPopupStyle]="ui.popupStyle!"
          [nzDropdownClassName]="ui.dropdownClassName"
          (nzOnOpenChange)="_openChange($event)"
          [nzDisabledTime]="ui.disabledTime"
          [nzRenderExtraFooter]="ui.renderExtraFooter"
          [nzRanges]="ui.ranges"
          [nzShowTime]="ui.showTime"
          [nzSeparator]="ui.separator"
          [nzShowWeekNumber]="ui.showWeekNumber || false"
          [nzMode]="$any(ui.rangeMode)"
          [nzInputReadOnly]="ui.inputReadOnly"
          [nzInline]="ui.inline!"
          (nzOnOk)="_ok($event)"
        />
      }
      @default {
        <nz-date-picker
          [nzId]="id"
          [nzDisabled]="disabled"
          [nzSize]="ui.size!"
          [nzFormat]="displayFormat"
          [(ngModel)]="displayValue"
          (ngModelChange)="_change($event)"
          [nzAllowClear]="i.allowClear"
          [class]="ui.className!"
          [nzDisabledDate]="ui.disabledDate"
          [nzLocale]="ui.locale!"
          [nzPlaceHolder]="ui.placeholder!"
          [nzPopupStyle]="ui.popupStyle!"
          [nzDropdownClassName]="ui.dropdownClassName"
          (nzOnOpenChange)="_openChange($event)"
          [nzDisabledTime]="ui.disabledTime"
          [nzRenderExtraFooter]="ui.renderExtraFooter"
          [nzShowTime]="ui.showTime"
          [nzShowToday]="i.showToday"
          [nzShowWeekNumber]="ui.showWeekNumber || false"
          [nzInputReadOnly]="ui.inputReadOnly"
          [nzInline]="ui.inline!"
          (nzOnOk)="_ok($event)"
        />
      }
    }
  </sf-item-wrap>`,
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS53aWRnZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL2RhdGUvZGF0ZS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUsvQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7O0FBdUkvQyxNQUFNLE9BQU8sVUFBVyxTQUFRLGVBQW1DO0lBcEluRTs7UUF1SVUsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUUxQixpQkFBWSxHQUF5QixJQUFJLENBQUM7S0FvRzNDO0lBaEdDLFFBQVE7UUFDTixNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDcEUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQztRQUM3QiwyQ0FBMkM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQVEsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztZQUNwQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQXdCLENBQUM7WUFDeEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENB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QUMsS0FBb0I7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztRQUU1QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQzVDLENBQUM7K0dBeEdVLFVBQVU7bUdBQVYsVUFBVSxzRUFsSVg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkE4SE07OzRGQUlMLFVBQVU7a0JBcEl0QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkE4SE07b0JBQ2hCLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5cbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gJ0BkZWxvbi91dGlsL2RhdGUtdGltZSc7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi4vLi4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBDb250cm9sVUlXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZEYXRlV2lkZ2V0U2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1kYXRlJyxcbiAgdGVtcGxhdGU6IGA8c2YtaXRlbS13cmFwXG4gICAgW2lkXT1cImlkXCJcbiAgICBbc2NoZW1hXT1cInNjaGVtYVwiXG4gICAgW3VpXT1cInVpXCJcbiAgICBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiXG4gICAgW2Vycm9yXT1cImVycm9yXCJcbiAgICBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiXG4gID5cbiAgICBAc3dpdGNoIChtb2RlKSB7XG4gICAgICBAY2FzZSAoJ3llYXInKSB7XG4gICAgICAgIDxuei15ZWFyLXBpY2tlclxuICAgICAgICAgIFtueklkXT1cImlkXCJcbiAgICAgICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgW256U2l6ZV09XCJ1aS5zaXplIVwiXG4gICAgICAgICAgW256Rm9ybWF0XT1cImRpc3BsYXlGb3JtYXRcIlxuICAgICAgICAgIFsobmdNb2RlbCldPVwiZGlzcGxheVZhbHVlXCJcbiAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJfY2hhbmdlKCRldmVudClcIlxuICAgICAgICAgIFtuekFsbG93Q2xlYXJdPVwiaS5hbGxvd0NsZWFyXCJcbiAgICAgICAgICBbY2xhc3NdPVwidWkuY2xhc3NOYW1lIVwiXG4gICAgICAgICAgW256RGlzYWJsZWREYXRlXT1cInVpLmRpc2FibGVkRGF0ZVwiXG4gICAgICAgICAgW256TG9jYWxlXT1cInVpLmxvY2FsZSFcIlxuICAgICAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyIVwiXG4gICAgICAgICAgW256UG9wdXBTdHlsZV09XCJ1aS5wb3B1cFN0eWxlIVwiXG4gICAgICAgICAgW256RHJvcGRvd25DbGFzc05hbWVdPVwidWkuZHJvcGRvd25DbGFzc05hbWVcIlxuICAgICAgICAgIChuek9uT3BlbkNoYW5nZSk9XCJfb3BlbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICBbbnpSZW5kZXJFeHRyYUZvb3Rlcl09XCJ1aS5yZW5kZXJFeHRyYUZvb3RlclwiXG4gICAgICAgICAgW256SW5wdXRSZWFkT25seV09XCJ1aS5pbnB1dFJlYWRPbmx5XCJcbiAgICAgICAgICBbbnpJbmxpbmVdPVwidWkuaW5saW5lIVwiXG4gICAgICAgIC8+XG4gICAgICB9XG4gICAgICBAY2FzZSAoJ21vbnRoJykge1xuICAgICAgICA8bnotbW9udGgtcGlja2VyXG4gICAgICAgICAgW256SWRdPVwiaWRcIlxuICAgICAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICBbbnpTaXplXT1cInVpLnNpemUhXCJcbiAgICAgICAgICBbbnpGb3JtYXRdPVwiZGlzcGxheUZvcm1hdFwiXG4gICAgICAgICAgWyhuZ01vZGVsKV09XCJkaXNwbGF5VmFsdWVcIlxuICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIl9jaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgW256QWxsb3dDbGVhcl09XCJpLmFsbG93Q2xlYXJcIlxuICAgICAgICAgIFtjbGFzc109XCJ1aS5jbGFzc05hbWUhXCJcbiAgICAgICAgICBbbnpEaXNhYmxlZERhdGVdPVwidWkuZGlzYWJsZWREYXRlXCJcbiAgICAgICAgICBbbnpMb2NhbGVdPVwidWkubG9jYWxlIVwiXG4gICAgICAgICAgW256UGxhY2VIb2xkZXJdPVwidWkucGxhY2Vob2xkZXIhXCJcbiAgICAgICAgICBbbnpQb3B1cFN0eWxlXT1cInVpLnBvcHVwU3R5bGUhXCJcbiAgICAgICAgICBbbnpEcm9wZG93bkNsYXNzTmFtZV09XCJ1aS5kcm9wZG93bkNsYXNzTmFtZVwiXG4gICAgICAgICAgKG56T25PcGVuQ2hhbmdlKT1cIl9vcGVuQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAgIFtuelJlbmRlckV4dHJhRm9vdGVyXT1cInVpLnJlbmRlckV4dHJhRm9vdGVyXCJcbiAgICAgICAgICBbbnpJbnB1dFJlYWRPbmx5XT1cInVpLmlucHV0UmVhZE9ubHlcIlxuICAgICAgICAgIFtueklubGluZV09XCJ1aS5pbmxpbmUhXCJcbiAgICAgICAgLz5cbiAgICAgIH1cbiAgICAgIEBjYXNlICgnd2VlaycpIHtcbiAgICAgICAgPG56LXdlZWstcGlja2VyXG4gICAgICAgICAgW256SWRdPVwiaWRcIlxuICAgICAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICBbbnpTaXplXT1cInVpLnNpemUhXCJcbiAgICAgICAgICBbbnpGb3JtYXRdPVwiZGlzcGxheUZvcm1hdFwiXG4gICAgICAgICAgWyhuZ01vZGVsKV09XCJkaXNwbGF5VmFsdWVcIlxuICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIl9jaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgW256QWxsb3dDbGVhcl09XCJpLmFsbG93Q2xlYXJcIlxuICAgICAgICAgIFtjbGFzc109XCJ1aS5jbGFzc05hbWUhXCJcbiAgICAgICAgICBbbnpEaXNhYmxlZERhdGVdPVwidWkuZGlzYWJsZWREYXRlXCJcbiAgICAgICAgICBbbnpMb2NhbGVdPVwidWkubG9jYWxlIVwiXG4gICAgICAgICAgW256UGxhY2VIb2xkZXJdPVwidWkucGxhY2Vob2xkZXIhXCJcbiAgICAgICAgICBbbnpQb3B1cFN0eWxlXT1cInVpLnBvcHVwU3R5bGUhXCJcbiAgICAgICAgICBbbnpEcm9wZG93bkNsYXNzTmFtZV09XCJ1aS5kcm9wZG93bkNsYXNzTmFtZVwiXG4gICAgICAgICAgW256SW5wdXRSZWFkT25seV09XCJ1aS5pbnB1dFJlYWRPbmx5XCJcbiAgICAgICAgICBbbnpJbmxpbmVdPVwidWkuaW5saW5lIVwiXG4gICAgICAgICAgKG56T25PcGVuQ2hhbmdlKT1cIl9vcGVuQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAvPlxuICAgICAgfVxuICAgICAgQGNhc2UgKCdyYW5nZScpIHtcbiAgICAgICAgPG56LXJhbmdlLXBpY2tlclxuICAgICAgICAgIFtueklkXT1cImlkXCJcbiAgICAgICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgW256U2l6ZV09XCJ1aS5zaXplIVwiXG4gICAgICAgICAgW256Rm9ybWF0XT1cImRpc3BsYXlGb3JtYXRcIlxuICAgICAgICAgIFsobmdNb2RlbCldPVwiZGlzcGxheVZhbHVlXCJcbiAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJfY2hhbmdlKCRldmVudClcIlxuICAgICAgICAgIFtuekFsbG93Q2xlYXJdPVwiaS5hbGxvd0NsZWFyXCJcbiAgICAgICAgICBbY2xhc3NdPVwidWkuY2xhc3NOYW1lIVwiXG4gICAgICAgICAgW256RGlzYWJsZWREYXRlXT1cInVpLmRpc2FibGVkRGF0ZVwiXG4gICAgICAgICAgW256TG9jYWxlXT1cInVpLmxvY2FsZSFcIlxuICAgICAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyIVwiXG4gICAgICAgICAgW256UG9wdXBTdHlsZV09XCJ1aS5wb3B1cFN0eWxlIVwiXG4gICAgICAgICAgW256RHJvcGRvd25DbGFzc05hbWVdPVwidWkuZHJvcGRvd25DbGFzc05hbWVcIlxuICAgICAgICAgIChuek9uT3BlbkNoYW5nZSk9XCJfb3BlbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICBbbnpEaXNhYmxlZFRpbWVdPVwidWkuZGlzYWJsZWRUaW1lXCJcbiAgICAgICAgICBbbnpSZW5kZXJFeHRyYUZvb3Rlcl09XCJ1aS5yZW5kZXJFeHRyYUZvb3RlclwiXG4gICAgICAgICAgW256UmFuZ2VzXT1cInVpLnJhbmdlc1wiXG4gICAgICAgICAgW256U2hvd1RpbWVdPVwidWkuc2hvd1RpbWVcIlxuICAgICAgICAgIFtuelNlcGFyYXRvcl09XCJ1aS5zZXBhcmF0b3JcIlxuICAgICAgICAgIFtuelNob3dXZWVrTnVtYmVyXT1cInVpLnNob3dXZWVrTnVtYmVyIHx8IGZhbHNlXCJcbiAgICAgICAgICBbbnpNb2RlXT1cIiRhbnkodWkucmFuZ2VNb2RlKVwiXG4gICAgICAgICAgW256SW5wdXRSZWFkT25seV09XCJ1aS5pbnB1dFJlYWRPbmx5XCJcbiAgICAgICAgICBbbnpJbmxpbmVdPVwidWkuaW5saW5lIVwiXG4gICAgICAgICAgKG56T25Payk9XCJfb2soJGV2ZW50KVwiXG4gICAgICAgIC8+XG4gICAgICB9XG4gICAgICBAZGVmYXVsdCB7XG4gICAgICAgIDxuei1kYXRlLXBpY2tlclxuICAgICAgICAgIFtueklkXT1cImlkXCJcbiAgICAgICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgW256U2l6ZV09XCJ1aS5zaXplIVwiXG4gICAgICAgICAgW256Rm9ybWF0XT1cImRpc3BsYXlGb3JtYXRcIlxuICAgICAgICAgIFsobmdNb2RlbCldPVwiZGlzcGxheVZhbHVlXCJcbiAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJfY2hhbmdlKCRldmVudClcIlxuICAgICAgICAgIFtuekFsbG93Q2xlYXJdPVwiaS5hbGxvd0NsZWFyXCJcbiAgICAgICAgICBbY2xhc3NdPVwidWkuY2xhc3NOYW1lIVwiXG4gICAgICAgICAgW256RGlzYWJsZWREYXRlXT1cInVpLmRpc2FibGVkRGF0ZVwiXG4gICAgICAgICAgW256TG9jYWxlXT1cInVpLmxvY2FsZSFcIlxuICAgICAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyIVwiXG4gICAgICAgICAgW256UG9wdXBTdHlsZV09XCJ1aS5wb3B1cFN0eWxlIVwiXG4gICAgICAgICAgW256RHJvcGRvd25DbGFzc05hbWVdPVwidWkuZHJvcGRvd25DbGFzc05hbWVcIlxuICAgICAgICAgIChuek9uT3BlbkNoYW5nZSk9XCJfb3BlbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICBbbnpEaXNhYmxlZFRpbWVdPVwidWkuZGlzYWJsZWRUaW1lXCJcbiAgICAgICAgICBbbnpSZW5kZXJFeHRyYUZvb3Rlcl09XCJ1aS5yZW5kZXJFeHRyYUZvb3RlclwiXG4gICAgICAgICAgW256U2hvd1RpbWVdPVwidWkuc2hvd1RpbWVcIlxuICAgICAgICAgIFtuelNob3dUb2RheV09XCJpLnNob3dUb2RheVwiXG4gICAgICAgICAgW256U2hvd1dlZWtOdW1iZXJdPVwidWkuc2hvd1dlZWtOdW1iZXIgfHwgZmFsc2VcIlxuICAgICAgICAgIFtueklucHV0UmVhZE9ubHldPVwidWkuaW5wdXRSZWFkT25seVwiXG4gICAgICAgICAgW256SW5saW5lXT1cInVpLmlubGluZSFcIlxuICAgICAgICAgIChuek9uT2spPVwiX29rKCRldmVudClcIlxuICAgICAgICAvPlxuICAgICAgfVxuICAgIH1cbiAgPC9zZi1pdGVtLXdyYXA+YCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVdpZGdldCBleHRlbmRzIENvbnRyb2xVSVdpZGdldDxTRkRhdGVXaWRnZXRTY2hlbWE+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBzdGFydEZvcm1hdCE6IHN0cmluZztcbiAgcHJpdmF0ZSBlbmRGb3JtYXQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgZmxhdFJhbmdlID0gZmFsc2U7XG4gIG1vZGUhOiBzdHJpbmc7XG4gIGRpc3BsYXlWYWx1ZTogRGF0ZSB8IERhdGVbXSB8IG51bGwgPSBudWxsO1xuICBkaXNwbGF5Rm9ybWF0ITogc3RyaW5nO1xuICBpITogeyBhbGxvd0NsZWFyOiBib29sZWFuOyBzaG93VG9kYXk6IGJvb2xlYW4gfTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IG1vZGUsIGVuZCwgZGlzcGxheUZvcm1hdCwgYWxsb3dDbGVhciwgc2hvd1RvZGF5IH0gPSB0aGlzLnVpO1xuICAgIHRoaXMubW9kZSA9IG1vZGUgfHwgJ2RhdGUnO1xuICAgIHRoaXMuZmxhdFJhbmdlID0gZW5kICE9IG51bGw7XG4gICAgLy8g5p6E5bu65bGe5oCn5a+56LGh5pe25Lya5a+56buY6K6k5YC86L+b6KGM5qCh6aqM77yM5Zug5q2k5Y+v5Lul55u05o6l5L2/55SoIGZvcm1hdCDkvZzkuLrmoLzlvI/ljJblsZ7mgKdcbiAgICB0aGlzLnN0YXJ0Rm9ybWF0ID0gdGhpcy51aS5fZm9ybWF0ITtcbiAgICBpZiAodGhpcy5mbGF0UmFuZ2UpIHtcbiAgICAgIHRoaXMubW9kZSA9ICdyYW5nZSc7XG4gICAgICBjb25zdCBlbmRVaSA9IHRoaXMuZW5kUHJvcGVydHkudWkgYXMgU0ZEYXRlV2lkZ2V0U2NoZW1hO1xuICAgICAgdGhpcy5lbmRGb3JtYXQgPSBlbmRVaS5mb3JtYXQgPyBlbmRVaS5fZm9ybWF0IDogdGhpcy5zdGFydEZvcm1hdDtcbiAgICB9XG4gICAgaWYgKCFkaXNwbGF5Rm9ybWF0KSB7XG4gICAgICBzd2l0Y2ggKHRoaXMubW9kZSkge1xuICAgICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgICB0aGlzLmRpc3BsYXlGb3JtYXQgPSBgeXl5eWA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICB0aGlzLmRpc3BsYXlGb3JtYXQgPSBgeXl5eS1NTWA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3dlZWsnOlxuICAgICAgICAgIHRoaXMuZGlzcGxheUZvcm1hdCA9IGB5eXl5LXd3YDtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNwbGF5Rm9ybWF0ID0gZGlzcGxheUZvcm1hdDtcbiAgICB9XG4gICAgdGhpcy5pID0ge1xuICAgICAgYWxsb3dDbGVhcjogdG9Cb29sKGFsbG93Q2xlYXIsIHRydWUpLFxuICAgICAgLy8gbnotZGF0ZS1waWNrZXJcbiAgICAgIHNob3dUb2RheTogdG9Cb29sKHNob3dUb2RheSwgdHJ1ZSlcbiAgICB9O1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IFNGVmFsdWUpOiB2b2lkIHtcbiAgICBjb25zdCB0b0RhdGVPcHRpb25zID0geyBmb3JtYXRTdHJpbmc6IHRoaXMuc3RhcnRGb3JtYXQsIGRlZmF1bHRWYWx1ZTogbnVsbCB9O1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZS5tYXAodiA9PiB0b0RhdGUodiwgdG9EYXRlT3B0aW9ucykpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IHRvRGF0ZSh2YWx1ZSwgdG9EYXRlT3B0aW9ucyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmZsYXRSYW5nZSkge1xuICAgICAgY29uc3QgZW5kVmFsdWUgPSB0b0RhdGUodGhpcy5lbmRQcm9wZXJ0eS5mb3JtRGF0YSBhcyBOelNhZmVBbnksIHtcbiAgICAgICAgZm9ybWF0U3RyaW5nOiB0aGlzLmVuZEZvcm1hdCB8fCB0aGlzLnN0YXJ0Rm9ybWF0LFxuICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5kaXNwbGF5VmFsdWUgPSB2YWx1ZSA9PSBudWxsIHx8IGVuZFZhbHVlID09IG51bGwgPyBbXSA6IFt2YWx1ZSwgZW5kVmFsdWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICAvLyBUT0RPOiBOZWVkIHRvIHdhaXQgZm9yIHRoZSByZW5kZXJpbmcgdG8gY29tcGxldGUsIG90aGVyd2lzZSBpdCB3aWxsIGJlIG92ZXJ3cml0dGVuIG9mIGVuZCB3aWRnZXRcbiAgICBpZiAodGhpcy5kaXNwbGF5VmFsdWUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fY2hhbmdlKHRoaXMuZGlzcGxheVZhbHVlLCBmYWxzZSkpO1xuICAgIH1cbiAgfVxuXG4gIF9jaGFuZ2UodmFsdWU6IERhdGUgfCBEYXRlW10gfCBudWxsLCBlbWl0TW9kZWxDaGFuZ2U6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgaWYgKGVtaXRNb2RlbENoYW5nZSAmJiB0aGlzLnVpLmNoYW5nZSkge1xuICAgICAgdGhpcy51aS5jaGFuZ2UodmFsdWUpO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoIDwgMikpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUobnVsbCk7XG4gICAgICB0aGlzLnNldEVuZChudWxsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZXMgPSBBcnJheS5pc0FycmF5KHZhbHVlKVxuICAgICAgPyBbZm9ybWF0KHZhbHVlWzBdLCB0aGlzLnN0YXJ0Rm9ybWF0KSwgZm9ybWF0KHZhbHVlWzFdLCB0aGlzLmVuZEZvcm1hdCB8fCB0aGlzLnN0YXJ0Rm9ybWF0KV1cbiAgICAgIDogZm9ybWF0KHZhbHVlLCB0aGlzLnN0YXJ0Rm9ybWF0KTtcblxuICAgIGlmICh0aGlzLmZsYXRSYW5nZSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZShyZXNbMF0pO1xuICAgICAgdGhpcy5zZXRFbmQocmVzWzFdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRWYWx1ZShyZXMpO1xuICAgIH1cbiAgfVxuXG4gIF9vcGVuQ2hhbmdlKHN0YXR1czogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLm9uT3BlbkNoYW5nZSkgdGhpcy51aS5vbk9wZW5DaGFuZ2Uoc3RhdHVzKTtcbiAgfVxuXG4gIF9vayh2YWx1ZTogTnpTYWZlQW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkub25PaykgdGhpcy51aS5vbk9rKHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGVuZFByb3BlcnR5KCk6IEZvcm1Qcm9wZXJ0eSB7XG4gICAgcmV0dXJuICh0aGlzLmZvcm1Qcm9wZXJ0eS5wYXJlbnQhLnByb3BlcnRpZXMgYXMgeyBba2V5OiBzdHJpbmddOiBGb3JtUHJvcGVydHkgfSlbdGhpcy51aS5lbmQhXTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0RW5kKHZhbHVlOiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmZsYXRSYW5nZSkgcmV0dXJuO1xuXG4gICAgdGhpcy5lbmRQcm9wZXJ0eS5zZXRWYWx1ZSh2YWx1ZSwgdHJ1ZSk7XG4gICAgdGhpcy5lbmRQcm9wZXJ0eS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gIH1cbn1cbiJdfQ==