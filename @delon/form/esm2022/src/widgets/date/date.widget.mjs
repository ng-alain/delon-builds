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
  </sf-item-wrap>`, isInline: true, dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i3.NzDatePickerComponent, selector: "nz-date-picker,nz-week-picker,nz-month-picker,nz-quarter-picker,nz-year-picker,nz-range-picker", inputs: ["nzAllowClear", "nzAutoFocus", "nzDisabled", "nzBorderless", "nzInputReadOnly", "nzInline", "nzOpen", "nzDisabledDate", "nzLocale", "nzPlaceHolder", "nzPopupStyle", "nzDropdownClassName", "nzSize", "nzStatus", "nzFormat", "nzDateRender", "nzDisabledTime", "nzRenderExtraFooter", "nzShowToday", "nzMode", "nzShowNow", "nzRanges", "nzDefaultPickerValue", "nzSeparator", "nzSuffixIcon", "nzBackdrop", "nzId", "nzPlacement", "nzShowWeekNumber", "nzShowTime"], outputs: ["nzOnPanelChange", "nzOnCalendarChange", "nzOnOk", "nzOnOpenChange"], exportAs: ["nzDatePicker"] }, { kind: "directive", type: i3.NzRangePickerComponent, selector: "nz-range-picker", exportAs: ["nzRangePicker"] }, { kind: "directive", type: i3.NzMonthPickerComponent, selector: "nz-month-picker", exportAs: ["nzMonthPicker"] }, { kind: "directive", type: i3.NzYearPickerComponent, selector: "nz-year-picker", exportAs: ["nzYearPicker"] }, { kind: "directive", type: i3.NzWeekPickerComponent, selector: "nz-week-picker", exportAs: ["nzWeekPicker"] }, { kind: "component", type: i4.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }], encapsulation: i0.ViewEncapsulation.None }); }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS53aWRnZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL2RhdGUvZGF0ZS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUsvQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7OztBQXVJL0MsTUFBTSxPQUFPLFVBQVcsU0FBUSxlQUFtQztJQXBJbkU7O1FBdUlVLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFMUIsaUJBQVksR0FBeUIsSUFBSSxDQUFDO0tBb0czQztJQWhHQyxRQUFRO1FBQ04sTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ3BFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUM7UUFDN0IsMkNBQTJDO1FBQzNDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFRLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7WUFDcEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUF3QixDQUFDO1lBQ3hELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxD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QUFDLEtBQW9CO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU87UUFFNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUM1QyxDQUFDOytHQXhHVSxVQUFVO21HQUFWLFVBQVUsc0VBbElYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBOEhNOzs0RkFJTCxVQUFVO2tCQXBJdEIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBOEhNO29CQUNoQixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tICdAZGVsb24vdXRpbC9kYXRlLXRpbWUnO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4uLy4uL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ29udHJvbFVJV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGRGF0ZVdpZGdldFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtZGF0ZScsXG4gIHRlbXBsYXRlOiBgPHNmLWl0ZW0td3JhcFxuICAgIFtpZF09XCJpZFwiXG4gICAgW3NjaGVtYV09XCJzY2hlbWFcIlxuICAgIFt1aV09XCJ1aVwiXG4gICAgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIlxuICAgIFtlcnJvcl09XCJlcnJvclwiXG4gICAgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIlxuICA+XG4gICAgQHN3aXRjaCAobW9kZSkge1xuICAgICAgQGNhc2UgKCd5ZWFyJykge1xuICAgICAgICA8bnoteWVhci1waWNrZXJcbiAgICAgICAgICBbbnpJZF09XCJpZFwiXG4gICAgICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgIFtuelNpemVdPVwidWkuc2l6ZSFcIlxuICAgICAgICAgIFtuekZvcm1hdF09XCJkaXNwbGF5Rm9ybWF0XCJcbiAgICAgICAgICBbKG5nTW9kZWwpXT1cImRpc3BsYXlWYWx1ZVwiXG4gICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiX2NoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICBbbnpBbGxvd0NsZWFyXT1cImkuYWxsb3dDbGVhclwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwidWkuY2xhc3NOYW1lIVwiXG4gICAgICAgICAgW256RGlzYWJsZWREYXRlXT1cInVpLmRpc2FibGVkRGF0ZVwiXG4gICAgICAgICAgW256TG9jYWxlXT1cInVpLmxvY2FsZSFcIlxuICAgICAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyIVwiXG4gICAgICAgICAgW256UG9wdXBTdHlsZV09XCJ1aS5wb3B1cFN0eWxlIVwiXG4gICAgICAgICAgW256RHJvcGRvd25DbGFzc05hbWVdPVwidWkuZHJvcGRvd25DbGFzc05hbWVcIlxuICAgICAgICAgIChuek9uT3BlbkNoYW5nZSk9XCJfb3BlbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICBbbnpSZW5kZXJFeHRyYUZvb3Rlcl09XCJ1aS5yZW5kZXJFeHRyYUZvb3RlclwiXG4gICAgICAgICAgW256SW5wdXRSZWFkT25seV09XCJ1aS5pbnB1dFJlYWRPbmx5XCJcbiAgICAgICAgICBbbnpJbmxpbmVdPVwidWkuaW5saW5lIVwiXG4gICAgICAgIC8+XG4gICAgICB9XG4gICAgICBAY2FzZSAoJ21vbnRoJykge1xuICAgICAgICA8bnotbW9udGgtcGlja2VyXG4gICAgICAgICAgW256SWRdPVwiaWRcIlxuICAgICAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICBbbnpTaXplXT1cInVpLnNpemUhXCJcbiAgICAgICAgICBbbnpGb3JtYXRdPVwiZGlzcGxheUZvcm1hdFwiXG4gICAgICAgICAgWyhuZ01vZGVsKV09XCJkaXNwbGF5VmFsdWVcIlxuICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIl9jaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgW256QWxsb3dDbGVhcl09XCJpLmFsbG93Q2xlYXJcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cInVpLmNsYXNzTmFtZSFcIlxuICAgICAgICAgIFtuekRpc2FibGVkRGF0ZV09XCJ1aS5kaXNhYmxlZERhdGVcIlxuICAgICAgICAgIFtuekxvY2FsZV09XCJ1aS5sb2NhbGUhXCJcbiAgICAgICAgICBbbnpQbGFjZUhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlciFcIlxuICAgICAgICAgIFtuelBvcHVwU3R5bGVdPVwidWkucG9wdXBTdHlsZSFcIlxuICAgICAgICAgIFtuekRyb3Bkb3duQ2xhc3NOYW1lXT1cInVpLmRyb3Bkb3duQ2xhc3NOYW1lXCJcbiAgICAgICAgICAobnpPbk9wZW5DaGFuZ2UpPVwiX29wZW5DaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgW256UmVuZGVyRXh0cmFGb290ZXJdPVwidWkucmVuZGVyRXh0cmFGb290ZXJcIlxuICAgICAgICAgIFtueklucHV0UmVhZE9ubHldPVwidWkuaW5wdXRSZWFkT25seVwiXG4gICAgICAgICAgW256SW5saW5lXT1cInVpLmlubGluZSFcIlxuICAgICAgICAvPlxuICAgICAgfVxuICAgICAgQGNhc2UgKCd3ZWVrJykge1xuICAgICAgICA8bnotd2Vlay1waWNrZXJcbiAgICAgICAgICBbbnpJZF09XCJpZFwiXG4gICAgICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgIFtuelNpemVdPVwidWkuc2l6ZSFcIlxuICAgICAgICAgIFtuekZvcm1hdF09XCJkaXNwbGF5Rm9ybWF0XCJcbiAgICAgICAgICBbKG5nTW9kZWwpXT1cImRpc3BsYXlWYWx1ZVwiXG4gICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiX2NoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICBbbnpBbGxvd0NsZWFyXT1cImkuYWxsb3dDbGVhclwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwidWkuY2xhc3NOYW1lIVwiXG4gICAgICAgICAgW256RGlzYWJsZWREYXRlXT1cInVpLmRpc2FibGVkRGF0ZVwiXG4gICAgICAgICAgW256TG9jYWxlXT1cInVpLmxvY2FsZSFcIlxuICAgICAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyIVwiXG4gICAgICAgICAgW256UG9wdXBTdHlsZV09XCJ1aS5wb3B1cFN0eWxlIVwiXG4gICAgICAgICAgW256RHJvcGRvd25DbGFzc05hbWVdPVwidWkuZHJvcGRvd25DbGFzc05hbWVcIlxuICAgICAgICAgIFtueklucHV0UmVhZE9ubHldPVwidWkuaW5wdXRSZWFkT25seVwiXG4gICAgICAgICAgW256SW5saW5lXT1cInVpLmlubGluZSFcIlxuICAgICAgICAgIChuek9uT3BlbkNoYW5nZSk9XCJfb3BlbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgLz5cbiAgICAgIH1cbiAgICAgIEBjYXNlICgncmFuZ2UnKSB7XG4gICAgICAgIDxuei1yYW5nZS1waWNrZXJcbiAgICAgICAgICBbbnpJZF09XCJpZFwiXG4gICAgICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgIFtuelNpemVdPVwidWkuc2l6ZSFcIlxuICAgICAgICAgIFtuekZvcm1hdF09XCJkaXNwbGF5Rm9ybWF0XCJcbiAgICAgICAgICBbKG5nTW9kZWwpXT1cImRpc3BsYXlWYWx1ZVwiXG4gICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiX2NoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICBbbnpBbGxvd0NsZWFyXT1cImkuYWxsb3dDbGVhclwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwidWkuY2xhc3NOYW1lIVwiXG4gICAgICAgICAgW256RGlzYWJsZWREYXRlXT1cInVpLmRpc2FibGVkRGF0ZVwiXG4gICAgICAgICAgW256TG9jYWxlXT1cInVpLmxvY2FsZSFcIlxuICAgICAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyIVwiXG4gICAgICAgICAgW256UG9wdXBTdHlsZV09XCJ1aS5wb3B1cFN0eWxlIVwiXG4gICAgICAgICAgW256RHJvcGRvd25DbGFzc05hbWVdPVwidWkuZHJvcGRvd25DbGFzc05hbWVcIlxuICAgICAgICAgIChuek9uT3BlbkNoYW5nZSk9XCJfb3BlbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICBbbnpEaXNhYmxlZFRpbWVdPVwidWkuZGlzYWJsZWRUaW1lXCJcbiAgICAgICAgICBbbnpSZW5kZXJFeHRyYUZvb3Rlcl09XCJ1aS5yZW5kZXJFeHRyYUZvb3RlclwiXG4gICAgICAgICAgW256UmFuZ2VzXT1cInVpLnJhbmdlc1wiXG4gICAgICAgICAgW256U2hvd1RpbWVdPVwidWkuc2hvd1RpbWVcIlxuICAgICAgICAgIFtuelNlcGFyYXRvcl09XCJ1aS5zZXBhcmF0b3JcIlxuICAgICAgICAgIFtuelNob3dXZWVrTnVtYmVyXT1cInVpLnNob3dXZWVrTnVtYmVyIHx8IGZhbHNlXCJcbiAgICAgICAgICBbbnpNb2RlXT1cIiRhbnkodWkucmFuZ2VNb2RlKVwiXG4gICAgICAgICAgW256SW5wdXRSZWFkT25seV09XCJ1aS5pbnB1dFJlYWRPbmx5XCJcbiAgICAgICAgICBbbnpJbmxpbmVdPVwidWkuaW5saW5lIVwiXG4gICAgICAgICAgKG56T25Payk9XCJfb2soJGV2ZW50KVwiXG4gICAgICAgIC8+XG4gICAgICB9XG4gICAgICBAZGVmYXVsdCB7XG4gICAgICAgIDxuei1kYXRlLXBpY2tlclxuICAgICAgICAgIFtueklkXT1cImlkXCJcbiAgICAgICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgW256U2l6ZV09XCJ1aS5zaXplIVwiXG4gICAgICAgICAgW256Rm9ybWF0XT1cImRpc3BsYXlGb3JtYXRcIlxuICAgICAgICAgIFsobmdNb2RlbCldPVwiZGlzcGxheVZhbHVlXCJcbiAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJfY2hhbmdlKCRldmVudClcIlxuICAgICAgICAgIFtuekFsbG93Q2xlYXJdPVwiaS5hbGxvd0NsZWFyXCJcbiAgICAgICAgICBbbmdDbGFzc109XCJ1aS5jbGFzc05hbWUhXCJcbiAgICAgICAgICBbbnpEaXNhYmxlZERhdGVdPVwidWkuZGlzYWJsZWREYXRlXCJcbiAgICAgICAgICBbbnpMb2NhbGVdPVwidWkubG9jYWxlIVwiXG4gICAgICAgICAgW256UGxhY2VIb2xkZXJdPVwidWkucGxhY2Vob2xkZXIhXCJcbiAgICAgICAgICBbbnpQb3B1cFN0eWxlXT1cInVpLnBvcHVwU3R5bGUhXCJcbiAgICAgICAgICBbbnpEcm9wZG93bkNsYXNzTmFtZV09XCJ1aS5kcm9wZG93bkNsYXNzTmFtZVwiXG4gICAgICAgICAgKG56T25PcGVuQ2hhbmdlKT1cIl9vcGVuQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAgIFtuekRpc2FibGVkVGltZV09XCJ1aS5kaXNhYmxlZFRpbWVcIlxuICAgICAgICAgIFtuelJlbmRlckV4dHJhRm9vdGVyXT1cInVpLnJlbmRlckV4dHJhRm9vdGVyXCJcbiAgICAgICAgICBbbnpTaG93VGltZV09XCJ1aS5zaG93VGltZVwiXG4gICAgICAgICAgW256U2hvd1RvZGF5XT1cImkuc2hvd1RvZGF5XCJcbiAgICAgICAgICBbbnpTaG93V2Vla051bWJlcl09XCJ1aS5zaG93V2Vla051bWJlciB8fCBmYWxzZVwiXG4gICAgICAgICAgW256SW5wdXRSZWFkT25seV09XCJ1aS5pbnB1dFJlYWRPbmx5XCJcbiAgICAgICAgICBbbnpJbmxpbmVdPVwidWkuaW5saW5lIVwiXG4gICAgICAgICAgKG56T25Payk9XCJfb2soJGV2ZW50KVwiXG4gICAgICAgIC8+XG4gICAgICB9XG4gICAgfVxuICA8L3NmLWl0ZW0td3JhcD5gLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBEYXRlV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFVJV2lkZ2V0PFNGRGF0ZVdpZGdldFNjaGVtYT4gaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIHN0YXJ0Rm9ybWF0ITogc3RyaW5nO1xuICBwcml2YXRlIGVuZEZvcm1hdD86IHN0cmluZztcbiAgcHJpdmF0ZSBmbGF0UmFuZ2UgPSBmYWxzZTtcbiAgbW9kZSE6IHN0cmluZztcbiAgZGlzcGxheVZhbHVlOiBEYXRlIHwgRGF0ZVtdIHwgbnVsbCA9IG51bGw7XG4gIGRpc3BsYXlGb3JtYXQhOiBzdHJpbmc7XG4gIGkhOiB7IGFsbG93Q2xlYXI6IGJvb2xlYW47IHNob3dUb2RheTogYm9vbGVhbiB9O1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgbW9kZSwgZW5kLCBkaXNwbGF5Rm9ybWF0LCBhbGxvd0NsZWFyLCBzaG93VG9kYXkgfSA9IHRoaXMudWk7XG4gICAgdGhpcy5tb2RlID0gbW9kZSB8fCAnZGF0ZSc7XG4gICAgdGhpcy5mbGF0UmFuZ2UgPSBlbmQgIT0gbnVsbDtcbiAgICAvLyDmnoTlu7rlsZ7mgKflr7nosaHml7bkvJrlr7npu5jorqTlgLzov5vooYzmoKHpqozvvIzlm6DmraTlj6/ku6Xnm7TmjqXkvb/nlKggZm9ybWF0IOS9nOS4uuagvOW8j+WMluWxnuaAp1xuICAgIHRoaXMuc3RhcnRGb3JtYXQgPSB0aGlzLnVpLl9mb3JtYXQhO1xuICAgIGlmICh0aGlzLmZsYXRSYW5nZSkge1xuICAgICAgdGhpcy5tb2RlID0gJ3JhbmdlJztcbiAgICAgIGNvbnN0IGVuZFVpID0gdGhpcy5lbmRQcm9wZXJ0eS51aSBhcyBTRkRhdGVXaWRnZXRTY2hlbWE7XG4gICAgICB0aGlzLmVuZEZvcm1hdCA9IGVuZFVpLmZvcm1hdCA/IGVuZFVpLl9mb3JtYXQgOiB0aGlzLnN0YXJ0Rm9ybWF0O1xuICAgIH1cbiAgICBpZiAoIWRpc3BsYXlGb3JtYXQpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5tb2RlKSB7XG4gICAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICAgIHRoaXMuZGlzcGxheUZvcm1hdCA9IGB5eXl5YDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgIHRoaXMuZGlzcGxheUZvcm1hdCA9IGB5eXl5LU1NYDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnd2Vlayc6XG4gICAgICAgICAgdGhpcy5kaXNwbGF5Rm9ybWF0ID0gYHl5eXktd3dgO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpc3BsYXlGb3JtYXQgPSBkaXNwbGF5Rm9ybWF0O1xuICAgIH1cbiAgICB0aGlzLmkgPSB7XG4gICAgICBhbGxvd0NsZWFyOiB0b0Jvb2woYWxsb3dDbGVhciwgdHJ1ZSksXG4gICAgICAvLyBuei1kYXRlLXBpY2tlclxuICAgICAgc2hvd1RvZGF5OiB0b0Jvb2woc2hvd1RvZGF5LCB0cnVlKVxuICAgIH07XG4gIH1cblxuICByZXNldCh2YWx1ZTogU0ZWYWx1ZSk6IHZvaWQge1xuICAgIGNvbnN0IHRvRGF0ZU9wdGlvbnMgPSB7IGZvcm1hdFN0cmluZzogdGhpcy5zdGFydEZvcm1hdCwgZGVmYXVsdFZhbHVlOiBudWxsIH07XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLm1hcCh2ID0+IHRvRGF0ZSh2LCB0b0RhdGVPcHRpb25zKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gdG9EYXRlKHZhbHVlLCB0b0RhdGVPcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZmxhdFJhbmdlKSB7XG4gICAgICBjb25zdCBlbmRWYWx1ZSA9IHRvRGF0ZSh0aGlzLmVuZFByb3BlcnR5LmZvcm1EYXRhIGFzIE56U2FmZUFueSwge1xuICAgICAgICBmb3JtYXRTdHJpbmc6IHRoaXMuZW5kRm9ybWF0IHx8IHRoaXMuc3RhcnRGb3JtYXQsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbFxuICAgICAgfSk7XG4gICAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IHZhbHVlID09IG51bGwgfHwgZW5kVmFsdWUgPT0gbnVsbCA/IFtdIDogW3ZhbHVlLCBlbmRWYWx1ZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGlzcGxheVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIC8vIFRPRE86IE5lZWQgdG8gd2FpdCBmb3IgdGhlIHJlbmRlcmluZyB0byBjb21wbGV0ZSwgb3RoZXJ3aXNlIGl0IHdpbGwgYmUgb3ZlcndyaXR0ZW4gb2YgZW5kIHdpZGdldFxuICAgIGlmICh0aGlzLmRpc3BsYXlWYWx1ZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9jaGFuZ2UodGhpcy5kaXNwbGF5VmFsdWUsIGZhbHNlKSk7XG4gICAgfVxuICB9XG5cbiAgX2NoYW5nZSh2YWx1ZTogRGF0ZSB8IERhdGVbXSB8IG51bGwsIGVtaXRNb2RlbENoYW5nZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICBpZiAoZW1pdE1vZGVsQ2hhbmdlICYmIHRoaXMudWkuY2hhbmdlKSB7XG4gICAgICB0aGlzLnVpLmNoYW5nZSh2YWx1ZSk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PSBudWxsIHx8IChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPCAyKSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZShudWxsKTtcbiAgICAgIHRoaXMuc2V0RW5kKG51bGwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlcyA9IEFycmF5LmlzQXJyYXkodmFsdWUpXG4gICAgICA/IFtmb3JtYXQodmFsdWVbMF0sIHRoaXMuc3RhcnRGb3JtYXQpLCBmb3JtYXQodmFsdWVbMV0sIHRoaXMuZW5kRm9ybWF0IHx8IHRoaXMuc3RhcnRGb3JtYXQpXVxuICAgICAgOiBmb3JtYXQodmFsdWUsIHRoaXMuc3RhcnRGb3JtYXQpO1xuXG4gICAgaWYgKHRoaXMuZmxhdFJhbmdlKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHJlc1swXSk7XG4gICAgICB0aGlzLnNldEVuZChyZXNbMV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHJlcyk7XG4gICAgfVxuICB9XG5cbiAgX29wZW5DaGFuZ2Uoc3RhdHVzOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkub25PcGVuQ2hhbmdlKSB0aGlzLnVpLm9uT3BlbkNoYW5nZShzdGF0dXMpO1xuICB9XG5cbiAgX29rKHZhbHVlOiBOelNhZmVBbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5vbk9rKSB0aGlzLnVpLm9uT2sodmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgZW5kUHJvcGVydHkoKTogRm9ybVByb3BlcnR5IHtcbiAgICByZXR1cm4gKHRoaXMuZm9ybVByb3BlcnR5LnBhcmVudCEucHJvcGVydGllcyBhcyB7IFtrZXk6IHN0cmluZ106IEZvcm1Qcm9wZXJ0eSB9KVt0aGlzLnVpLmVuZCFdO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRFbmQodmFsdWU6IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZmxhdFJhbmdlKSByZXR1cm47XG5cbiAgICB0aGlzLmVuZFByb3BlcnR5LnNldFZhbHVlKHZhbHVlLCB0cnVlKTtcbiAgICB0aGlzLmVuZFByb3BlcnR5LnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgfVxufVxuIl19