import { Component, ViewEncapsulation } from '@angular/core';
import { format } from 'date-fns';
import { toDate } from '@delon/util/date-time';
import { toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "ng-zorro-antd/date-picker";
import * as i4 from "../../sf-item-wrap.component";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: DateWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.6", type: DateWidget, selector: "sf-date", usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
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
          [ngClass]="ui.className!"
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
          [ngClass]="ui.className!"
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
          [ngClass]="ui.className!"
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
          [ngClass]="ui.className!"
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
          [nzMode]="ui.rangeMode"
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
          [ngClass]="ui.className!"
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
  </sf-item-wrap>`, isInline: true, dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i3.NzDatePickerComponent, selector: "nz-date-picker,nz-week-picker,nz-month-picker,nz-year-picker,nz-range-picker", inputs: ["nzAllowClear", "nzAutoFocus", "nzDisabled", "nzBorderless", "nzInputReadOnly", "nzInline", "nzOpen", "nzDisabledDate", "nzLocale", "nzPlaceHolder", "nzPopupStyle", "nzDropdownClassName", "nzSize", "nzStatus", "nzFormat", "nzDateRender", "nzDisabledTime", "nzRenderExtraFooter", "nzShowToday", "nzMode", "nzShowNow", "nzRanges", "nzDefaultPickerValue", "nzSeparator", "nzSuffixIcon", "nzBackdrop", "nzId", "nzPlacement", "nzShowWeekNumber", "nzShowTime"], outputs: ["nzOnPanelChange", "nzOnCalendarChange", "nzOnOk", "nzOnOpenChange"], exportAs: ["nzDatePicker"] }, { kind: "directive", type: i3.NzRangePickerComponent, selector: "nz-range-picker", exportAs: ["nzRangePicker"] }, { kind: "directive", type: i3.NzMonthPickerComponent, selector: "nz-month-picker", exportAs: ["nzMonthPicker"] }, { kind: "directive", type: i3.NzYearPickerComponent, selector: "nz-year-picker", exportAs: ["nzYearPicker"] }, { kind: "directive", type: i3.NzWeekPickerComponent, selector: "nz-week-picker", exportAs: ["nzWeekPicker"] }, { kind: "component", type: i4.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: DateWidget, decorators: [{
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
          [ngClass]="ui.className!"
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
          [ngClass]="ui.className!"
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
          [ngClass]="ui.className!"
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
          [ngClass]="ui.className!"
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
          [nzMode]="ui.rangeMode"
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
          [ngClass]="ui.className!"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS53aWRnZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL2RhdGUvZGF0ZS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQU0vQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7OztBQXNJL0MsTUFBTSxPQUFPLFVBQVcsU0FBUSxlQUFtQztJQXBJbkU7O1FBdUlVLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFMUIsaUJBQVksR0FBeUIsSUFBSSxDQUFDO0tBb0czQztJQWhHQyxRQUFRO1FBQ04sTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ3BFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUM7UUFDN0IsMkNBQTJDO1FBQzNDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFRLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1lBQ3BCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBd0IsQ0FBQztZQUN4RCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxN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QVcsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQzVDLENBQUM7OEdBeEdVLFVBQVU7a0dBQVYsVUFBVSxzRUFsSVg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkE4SE07OzJGQUlMLFVBQVU7a0JBcEl0QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkE4SE07b0JBQ2hCLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5cbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gJ0BkZWxvbi91dGlsL2RhdGUtdGltZSc7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IFNGRGF0ZVdpZGdldFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi4vLi4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBDb250cm9sVUlXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1kYXRlJyxcbiAgdGVtcGxhdGU6IGA8c2YtaXRlbS13cmFwXG4gICAgW2lkXT1cImlkXCJcbiAgICBbc2NoZW1hXT1cInNjaGVtYVwiXG4gICAgW3VpXT1cInVpXCJcbiAgICBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiXG4gICAgW2Vycm9yXT1cImVycm9yXCJcbiAgICBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiXG4gID5cbiAgICBAc3dpdGNoIChtb2RlKSB7XG4gICAgICBAY2FzZSAoJ3llYXInKSB7XG4gICAgICAgIDxuei15ZWFyLXBpY2tlclxuICAgICAgICAgIFtueklkXT1cImlkXCJcbiAgICAgICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgW256U2l6ZV09XCJ1aS5zaXplIVwiXG4gICAgICAgICAgW256Rm9ybWF0XT1cImRpc3BsYXlGb3JtYXRcIlxuICAgICAgICAgIFsobmdNb2RlbCldPVwiZGlzcGxheVZhbHVlXCJcbiAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJfY2hhbmdlKCRldmVudClcIlxuICAgICAgICAgIFtuekFsbG93Q2xlYXJdPVwiaS5hbGxvd0NsZWFyXCJcbiAgICAgICAgICBbbmdDbGFzc109XCJ1aS5jbGFzc05hbWUhXCJcbiAgICAgICAgICBbbnpEaXNhYmxlZERhdGVdPVwidWkuZGlzYWJsZWREYXRlXCJcbiAgICAgICAgICBbbnpMb2NhbGVdPVwidWkubG9jYWxlIVwiXG4gICAgICAgICAgW256UGxhY2VIb2xkZXJdPVwidWkucGxhY2Vob2xkZXIhXCJcbiAgICAgICAgICBbbnpQb3B1cFN0eWxlXT1cInVpLnBvcHVwU3R5bGUhXCJcbiAgICAgICAgICBbbnpEcm9wZG93bkNsYXNzTmFtZV09XCJ1aS5kcm9wZG93bkNsYXNzTmFtZVwiXG4gICAgICAgICAgKG56T25PcGVuQ2hhbmdlKT1cIl9vcGVuQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAgIFtuelJlbmRlckV4dHJhRm9vdGVyXT1cInVpLnJlbmRlckV4dHJhRm9vdGVyXCJcbiAgICAgICAgICBbbnpJbnB1dFJlYWRPbmx5XT1cInVpLmlucHV0UmVhZE9ubHlcIlxuICAgICAgICAgIFtueklubGluZV09XCJ1aS5pbmxpbmUhXCJcbiAgICAgICAgLz5cbiAgICAgIH1cbiAgICAgIEBjYXNlICgnbW9udGgnKSB7XG4gICAgICAgIDxuei1tb250aC1waWNrZXJcbiAgICAgICAgICBbbnpJZF09XCJpZFwiXG4gICAgICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgIFtuelNpemVdPVwidWkuc2l6ZSFcIlxuICAgICAgICAgIFtuekZvcm1hdF09XCJkaXNwbGF5Rm9ybWF0XCJcbiAgICAgICAgICBbKG5nTW9kZWwpXT1cImRpc3BsYXlWYWx1ZVwiXG4gICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiX2NoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICBbbnpBbGxvd0NsZWFyXT1cImkuYWxsb3dDbGVhclwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwidWkuY2xhc3NOYW1lIVwiXG4gICAgICAgICAgW256RGlzYWJsZWREYXRlXT1cInVpLmRpc2FibGVkRGF0ZVwiXG4gICAgICAgICAgW256TG9jYWxlXT1cInVpLmxvY2FsZSFcIlxuICAgICAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyIVwiXG4gICAgICAgICAgW256UG9wdXBTdHlsZV09XCJ1aS5wb3B1cFN0eWxlIVwiXG4gICAgICAgICAgW256RHJvcGRvd25DbGFzc05hbWVdPVwidWkuZHJvcGRvd25DbGFzc05hbWVcIlxuICAgICAgICAgIChuek9uT3BlbkNoYW5nZSk9XCJfb3BlbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICBbbnpSZW5kZXJFeHRyYUZvb3Rlcl09XCJ1aS5yZW5kZXJFeHRyYUZvb3RlclwiXG4gICAgICAgICAgW256SW5wdXRSZWFkT25seV09XCJ1aS5pbnB1dFJlYWRPbmx5XCJcbiAgICAgICAgICBbbnpJbmxpbmVdPVwidWkuaW5saW5lIVwiXG4gICAgICAgIC8+XG4gICAgICB9XG4gICAgICBAY2FzZSAoJ3dlZWsnKSB7XG4gICAgICAgIDxuei13ZWVrLXBpY2tlclxuICAgICAgICAgIFtueklkXT1cImlkXCJcbiAgICAgICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgW256U2l6ZV09XCJ1aS5zaXplIVwiXG4gICAgICAgICAgW256Rm9ybWF0XT1cImRpc3BsYXlGb3JtYXRcIlxuICAgICAgICAgIFsobmdNb2RlbCldPVwiZGlzcGxheVZhbHVlXCJcbiAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJfY2hhbmdlKCRldmVudClcIlxuICAgICAgICAgIFtuekFsbG93Q2xlYXJdPVwiaS5hbGxvd0NsZWFyXCJcbiAgICAgICAgICBbbmdDbGFzc109XCJ1aS5jbGFzc05hbWUhXCJcbiAgICAgICAgICBbbnpEaXNhYmxlZERhdGVdPVwidWkuZGlzYWJsZWREYXRlXCJcbiAgICAgICAgICBbbnpMb2NhbGVdPVwidWkubG9jYWxlIVwiXG4gICAgICAgICAgW256UGxhY2VIb2xkZXJdPVwidWkucGxhY2Vob2xkZXIhXCJcbiAgICAgICAgICBbbnpQb3B1cFN0eWxlXT1cInVpLnBvcHVwU3R5bGUhXCJcbiAgICAgICAgICBbbnpEcm9wZG93bkNsYXNzTmFtZV09XCJ1aS5kcm9wZG93bkNsYXNzTmFtZVwiXG4gICAgICAgICAgW256SW5wdXRSZWFkT25seV09XCJ1aS5pbnB1dFJlYWRPbmx5XCJcbiAgICAgICAgICBbbnpJbmxpbmVdPVwidWkuaW5saW5lIVwiXG4gICAgICAgICAgKG56T25PcGVuQ2hhbmdlKT1cIl9vcGVuQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAvPlxuICAgICAgfVxuICAgICAgQGNhc2UgKCdyYW5nZScpIHtcbiAgICAgICAgPG56LXJhbmdlLXBpY2tlclxuICAgICAgICAgIFtueklkXT1cImlkXCJcbiAgICAgICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgW256U2l6ZV09XCJ1aS5zaXplIVwiXG4gICAgICAgICAgW256Rm9ybWF0XT1cImRpc3BsYXlGb3JtYXRcIlxuICAgICAgICAgIFsobmdNb2RlbCldPVwiZGlzcGxheVZhbHVlXCJcbiAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJfY2hhbmdlKCRldmVudClcIlxuICAgICAgICAgIFtuekFsbG93Q2xlYXJdPVwiaS5hbGxvd0NsZWFyXCJcbiAgICAgICAgICBbbmdDbGFzc109XCJ1aS5jbGFzc05hbWUhXCJcbiAgICAgICAgICBbbnpEaXNhYmxlZERhdGVdPVwidWkuZGlzYWJsZWREYXRlXCJcbiAgICAgICAgICBbbnpMb2NhbGVdPVwidWkubG9jYWxlIVwiXG4gICAgICAgICAgW256UGxhY2VIb2xkZXJdPVwidWkucGxhY2Vob2xkZXIhXCJcbiAgICAgICAgICBbbnpQb3B1cFN0eWxlXT1cInVpLnBvcHVwU3R5bGUhXCJcbiAgICAgICAgICBbbnpEcm9wZG93bkNsYXNzTmFtZV09XCJ1aS5kcm9wZG93bkNsYXNzTmFtZVwiXG4gICAgICAgICAgKG56T25PcGVuQ2hhbmdlKT1cIl9vcGVuQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAgIFtuekRpc2FibGVkVGltZV09XCJ1aS5kaXNhYmxlZFRpbWVcIlxuICAgICAgICAgIFtuelJlbmRlckV4dHJhRm9vdGVyXT1cInVpLnJlbmRlckV4dHJhRm9vdGVyXCJcbiAgICAgICAgICBbbnpSYW5nZXNdPVwidWkucmFuZ2VzXCJcbiAgICAgICAgICBbbnpTaG93VGltZV09XCJ1aS5zaG93VGltZVwiXG4gICAgICAgICAgW256U2VwYXJhdG9yXT1cInVpLnNlcGFyYXRvclwiXG4gICAgICAgICAgW256U2hvd1dlZWtOdW1iZXJdPVwidWkuc2hvd1dlZWtOdW1iZXIgfHwgZmFsc2VcIlxuICAgICAgICAgIFtuek1vZGVdPVwidWkucmFuZ2VNb2RlXCJcbiAgICAgICAgICBbbnpJbnB1dFJlYWRPbmx5XT1cInVpLmlucHV0UmVhZE9ubHlcIlxuICAgICAgICAgIFtueklubGluZV09XCJ1aS5pbmxpbmUhXCJcbiAgICAgICAgICAobnpPbk9rKT1cIl9vaygkZXZlbnQpXCJcbiAgICAgICAgLz5cbiAgICAgIH1cbiAgICAgIEBkZWZhdWx0IHtcbiAgICAgICAgPG56LWRhdGUtcGlja2VyXG4gICAgICAgICAgW256SWRdPVwiaWRcIlxuICAgICAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICBbbnpTaXplXT1cInVpLnNpemUhXCJcbiAgICAgICAgICBbbnpGb3JtYXRdPVwiZGlzcGxheUZvcm1hdFwiXG4gICAgICAgICAgWyhuZ01vZGVsKV09XCJkaXNwbGF5VmFsdWVcIlxuICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIl9jaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgW256QWxsb3dDbGVhcl09XCJpLmFsbG93Q2xlYXJcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cInVpLmNsYXNzTmFtZSFcIlxuICAgICAgICAgIFtuekRpc2FibGVkRGF0ZV09XCJ1aS5kaXNhYmxlZERhdGVcIlxuICAgICAgICAgIFtuekxvY2FsZV09XCJ1aS5sb2NhbGUhXCJcbiAgICAgICAgICBbbnpQbGFjZUhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlciFcIlxuICAgICAgICAgIFtuelBvcHVwU3R5bGVdPVwidWkucG9wdXBTdHlsZSFcIlxuICAgICAgICAgIFtuekRyb3Bkb3duQ2xhc3NOYW1lXT1cInVpLmRyb3Bkb3duQ2xhc3NOYW1lXCJcbiAgICAgICAgICAobnpPbk9wZW5DaGFuZ2UpPVwiX29wZW5DaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgW256RGlzYWJsZWRUaW1lXT1cInVpLmRpc2FibGVkVGltZVwiXG4gICAgICAgICAgW256UmVuZGVyRXh0cmFGb290ZXJdPVwidWkucmVuZGVyRXh0cmFGb290ZXJcIlxuICAgICAgICAgIFtuelNob3dUaW1lXT1cInVpLnNob3dUaW1lXCJcbiAgICAgICAgICBbbnpTaG93VG9kYXldPVwiaS5zaG93VG9kYXlcIlxuICAgICAgICAgIFtuelNob3dXZWVrTnVtYmVyXT1cInVpLnNob3dXZWVrTnVtYmVyIHx8IGZhbHNlXCJcbiAgICAgICAgICBbbnpJbnB1dFJlYWRPbmx5XT1cInVpLmlucHV0UmVhZE9ubHlcIlxuICAgICAgICAgIFtueklubGluZV09XCJ1aS5pbmxpbmUhXCJcbiAgICAgICAgICAobnpPbk9rKT1cIl9vaygkZXZlbnQpXCJcbiAgICAgICAgLz5cbiAgICAgIH1cbiAgICB9XG4gIDwvc2YtaXRlbS13cmFwPmAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIERhdGVXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZEYXRlV2lkZ2V0U2NoZW1hPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgc3RhcnRGb3JtYXQhOiBzdHJpbmc7XG4gIHByaXZhdGUgZW5kRm9ybWF0Pzogc3RyaW5nO1xuICBwcml2YXRlIGZsYXRSYW5nZSA9IGZhbHNlO1xuICBtb2RlITogc3RyaW5nO1xuICBkaXNwbGF5VmFsdWU6IERhdGUgfCBEYXRlW10gfCBudWxsID0gbnVsbDtcbiAgZGlzcGxheUZvcm1hdCE6IHN0cmluZztcbiAgaSE6IHsgYWxsb3dDbGVhcjogYm9vbGVhbjsgc2hvd1RvZGF5OiBib29sZWFuIH07XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBtb2RlLCBlbmQsIGRpc3BsYXlGb3JtYXQsIGFsbG93Q2xlYXIsIHNob3dUb2RheSB9ID0gdGhpcy51aTtcbiAgICB0aGlzLm1vZGUgPSBtb2RlIHx8ICdkYXRlJztcbiAgICB0aGlzLmZsYXRSYW5nZSA9IGVuZCAhPSBudWxsO1xuICAgIC8vIOaehOW7uuWxnuaAp+WvueixoeaXtuS8muWvuem7mOiupOWAvOi/m+ihjOagoemqjO+8jOWboOatpOWPr+S7peebtOaOpeS9v+eUqCBmb3JtYXQg5L2c5Li65qC85byP5YyW5bGe5oCnXG4gICAgdGhpcy5zdGFydEZvcm1hdCA9IHRoaXMudWkuX2Zvcm1hdCE7XG4gICAgaWYgKHRoaXMuZmxhdFJhbmdlKSB7XG4gICAgICB0aGlzLm1vZGUgPSAncmFuZ2UnO1xuICAgICAgY29uc3QgZW5kVWkgPSB0aGlzLmVuZFByb3BlcnR5LnVpIGFzIFNGRGF0ZVdpZGdldFNjaGVtYTtcbiAgICAgIHRoaXMuZW5kRm9ybWF0ID0gZW5kVWkuZm9ybWF0ID8gZW5kVWkuX2Zvcm1hdCA6IHRoaXMuc3RhcnRGb3JtYXQ7XG4gICAgfVxuICAgIGlmICghZGlzcGxheUZvcm1hdCkge1xuICAgICAgc3dpdGNoICh0aGlzLm1vZGUpIHtcbiAgICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgICAgdGhpcy5kaXNwbGF5Rm9ybWF0ID0gYHl5eXlgO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtb250aCc6XG4gICAgICAgICAgdGhpcy5kaXNwbGF5Rm9ybWF0ID0gYHl5eXktTU1gO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd3ZWVrJzpcbiAgICAgICAgICB0aGlzLmRpc3BsYXlGb3JtYXQgPSBgeXl5eS13d2A7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGlzcGxheUZvcm1hdCA9IGRpc3BsYXlGb3JtYXQ7XG4gICAgfVxuICAgIHRoaXMuaSA9IHtcbiAgICAgIGFsbG93Q2xlYXI6IHRvQm9vbChhbGxvd0NsZWFyLCB0cnVlKSxcbiAgICAgIC8vIG56LWRhdGUtcGlja2VyXG4gICAgICBzaG93VG9kYXk6IHRvQm9vbChzaG93VG9kYXksIHRydWUpXG4gICAgfTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKTogdm9pZCB7XG4gICAgY29uc3QgdG9EYXRlT3B0aW9ucyA9IHsgZm9ybWF0U3RyaW5nOiB0aGlzLnN0YXJ0Rm9ybWF0LCBkZWZhdWx0VmFsdWU6IG51bGwgfTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUubWFwKHYgPT4gdG9EYXRlKHYsIHRvRGF0ZU9wdGlvbnMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSB0b0RhdGUodmFsdWUsIHRvRGF0ZU9wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAodGhpcy5mbGF0UmFuZ2UpIHtcbiAgICAgIGNvbnN0IGVuZFZhbHVlID0gdG9EYXRlKHRoaXMuZW5kUHJvcGVydHkuZm9ybURhdGEgYXMgTnpTYWZlQW55LCB7XG4gICAgICAgIGZvcm1hdFN0cmluZzogdGhpcy5lbmRGb3JtYXQgfHwgdGhpcy5zdGFydEZvcm1hdCxcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZGlzcGxheVZhbHVlID0gdmFsdWUgPT0gbnVsbCB8fCBlbmRWYWx1ZSA9PSBudWxsID8gW10gOiBbdmFsdWUsIGVuZFZhbHVlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNwbGF5VmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgLy8gVE9ETzogTmVlZCB0byB3YWl0IGZvciB0aGUgcmVuZGVyaW5nIHRvIGNvbXBsZXRlLCBvdGhlcndpc2UgaXQgd2lsbCBiZSBvdmVyd3JpdHRlbiBvZiBlbmQgd2lkZ2V0XG4gICAgaWYgKHRoaXMuZGlzcGxheVZhbHVlKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX2NoYW5nZSh0aGlzLmRpc3BsYXlWYWx1ZSwgZmFsc2UpKTtcbiAgICB9XG4gIH1cblxuICBfY2hhbmdlKHZhbHVlOiBEYXRlIHwgRGF0ZVtdIHwgbnVsbCwgZW1pdE1vZGVsQ2hhbmdlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIGlmIChlbWl0TW9kZWxDaGFuZ2UgJiYgdGhpcy51aS5jaGFuZ2UpIHtcbiAgICAgIHRoaXMudWkuY2hhbmdlKHZhbHVlKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09IG51bGwgfHwgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA8IDIpKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKG51bGwpO1xuICAgICAgdGhpcy5zZXRFbmQobnVsbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVzID0gQXJyYXkuaXNBcnJheSh2YWx1ZSlcbiAgICAgID8gW2Zvcm1hdCh2YWx1ZVswXSwgdGhpcy5zdGFydEZvcm1hdCksIGZvcm1hdCh2YWx1ZVsxXSwgdGhpcy5lbmRGb3JtYXQgfHwgdGhpcy5zdGFydEZvcm1hdCldXG4gICAgICA6IGZvcm1hdCh2YWx1ZSwgdGhpcy5zdGFydEZvcm1hdCk7XG5cbiAgICBpZiAodGhpcy5mbGF0UmFuZ2UpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUocmVzWzBdKTtcbiAgICAgIHRoaXMuc2V0RW5kKHJlc1sxXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUocmVzKTtcbiAgICB9XG4gIH1cblxuICBfb3BlbkNoYW5nZShzdGF0dXM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5vbk9wZW5DaGFuZ2UpIHRoaXMudWkub25PcGVuQ2hhbmdlKHN0YXR1cyk7XG4gIH1cblxuICBfb2sodmFsdWU6IE56U2FmZUFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLm9uT2spIHRoaXMudWkub25Payh2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIGdldCBlbmRQcm9wZXJ0eSgpOiBGb3JtUHJvcGVydHkge1xuICAgIHJldHVybiAodGhpcy5mb3JtUHJvcGVydHkucGFyZW50IS5wcm9wZXJ0aWVzIGFzIHsgW2tleTogc3RyaW5nXTogRm9ybVByb3BlcnR5IH0pW3RoaXMudWkuZW5kIV07XG4gIH1cblxuICBwcml2YXRlIHNldEVuZCh2YWx1ZTogc3RyaW5nIHwgbnVsbCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5mbGF0UmFuZ2UpIHJldHVybjtcblxuICAgIHRoaXMuZW5kUHJvcGVydHkuc2V0VmFsdWUodmFsdWUsIHRydWUpO1xuICAgIHRoaXMuZW5kUHJvcGVydHkudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICB9XG59XG4iXX0=