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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: DateWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.11", type: DateWidget, selector: "sf-date", usesInheritance: true, ngImport: i0, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <ng-container [ngSwitch]=\"mode\">\n    <nz-year-picker\n      *ngSwitchCase=\"'year'\"\n      [nzId]=\"id\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size!\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [ngClass]=\"ui.className!\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale!\"\n      [nzPlaceHolder]=\"ui.placeholder!\"\n      [nzPopupStyle]=\"ui.popupStyle!\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n      [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n      [nzInputReadOnly]=\"ui.inputReadOnly\"\n      [nzInline]=\"ui.inline!\"\n    />\n\n    <nz-month-picker\n      *ngSwitchCase=\"'month'\"\n      [nzId]=\"id\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size!\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [ngClass]=\"ui.className!\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale!\"\n      [nzPlaceHolder]=\"ui.placeholder!\"\n      [nzPopupStyle]=\"ui.popupStyle!\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n      [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n      [nzInputReadOnly]=\"ui.inputReadOnly\"\n      [nzInline]=\"ui.inline!\"\n    />\n\n    <nz-week-picker\n      *ngSwitchCase=\"'week'\"\n      [nzId]=\"id\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size!\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [ngClass]=\"ui.className!\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale!\"\n      [nzPlaceHolder]=\"ui.placeholder!\"\n      [nzPopupStyle]=\"ui.popupStyle!\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      [nzInputReadOnly]=\"ui.inputReadOnly\"\n      [nzInline]=\"ui.inline!\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n    />\n\n    <nz-range-picker\n      *ngSwitchCase=\"'range'\"\n      [nzId]=\"id\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size!\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [ngClass]=\"ui.className!\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale!\"\n      [nzPlaceHolder]=\"ui.placeholder!\"\n      [nzPopupStyle]=\"ui.popupStyle!\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n      [nzDisabledTime]=\"ui.disabledTime\"\n      [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n      [nzRanges]=\"ui.ranges\"\n      [nzShowTime]=\"ui.showTime\"\n      [nzSeparator]=\"ui.separator\"\n      [nzShowWeekNumber]=\"ui.showWeekNumber || false\"\n      [nzMode]=\"ui.rangeMode\"\n      [nzInputReadOnly]=\"ui.inputReadOnly\"\n      [nzInline]=\"ui.inline!\"\n      (nzOnOk)=\"_ok($event)\"\n    />\n\n    <nz-date-picker\n      *ngSwitchDefault\n      [nzId]=\"id\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size!\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [ngClass]=\"ui.className!\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale!\"\n      [nzPlaceHolder]=\"ui.placeholder!\"\n      [nzPopupStyle]=\"ui.popupStyle!\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n      [nzDisabledTime]=\"ui.disabledTime\"\n      [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n      [nzShowTime]=\"ui.showTime\"\n      [nzShowToday]=\"i.showToday\"\n      [nzShowWeekNumber]=\"ui.showWeekNumber || false\"\n      [nzInputReadOnly]=\"ui.inputReadOnly\"\n      [nzInline]=\"ui.inline!\"\n      (nzOnOk)=\"_ok($event)\"\n    />\n  </ng-container>\n</sf-item-wrap>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i1.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i3.NzDatePickerComponent, selector: "nz-date-picker,nz-week-picker,nz-month-picker,nz-year-picker,nz-range-picker", inputs: ["nzAllowClear", "nzAutoFocus", "nzDisabled", "nzBorderless", "nzInputReadOnly", "nzInline", "nzOpen", "nzDisabledDate", "nzLocale", "nzPlaceHolder", "nzPopupStyle", "nzDropdownClassName", "nzSize", "nzStatus", "nzFormat", "nzDateRender", "nzDisabledTime", "nzRenderExtraFooter", "nzShowToday", "nzMode", "nzShowNow", "nzRanges", "nzDefaultPickerValue", "nzSeparator", "nzSuffixIcon", "nzBackdrop", "nzId", "nzPlacement", "nzShowWeekNumber", "nzShowTime"], outputs: ["nzOnPanelChange", "nzOnCalendarChange", "nzOnOk", "nzOnOpenChange"], exportAs: ["nzDatePicker"] }, { kind: "directive", type: i3.NzRangePickerComponent, selector: "nz-range-picker", exportAs: ["nzRangePicker"] }, { kind: "directive", type: i3.NzMonthPickerComponent, selector: "nz-month-picker", exportAs: ["nzMonthPicker"] }, { kind: "directive", type: i3.NzYearPickerComponent, selector: "nz-year-picker", exportAs: ["nzYearPicker"] }, { kind: "directive", type: i3.NzWeekPickerComponent, selector: "nz-week-picker", exportAs: ["nzWeekPicker"] }, { kind: "component", type: i4.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: DateWidget, decorators: [{
            type: Component,
            args: [{ selector: 'sf-date', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <ng-container [ngSwitch]=\"mode\">\n    <nz-year-picker\n      *ngSwitchCase=\"'year'\"\n      [nzId]=\"id\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size!\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [ngClass]=\"ui.className!\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale!\"\n      [nzPlaceHolder]=\"ui.placeholder!\"\n      [nzPopupStyle]=\"ui.popupStyle!\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n      [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n      [nzInputReadOnly]=\"ui.inputReadOnly\"\n      [nzInline]=\"ui.inline!\"\n    />\n\n    <nz-month-picker\n      *ngSwitchCase=\"'month'\"\n      [nzId]=\"id\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size!\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [ngClass]=\"ui.className!\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale!\"\n      [nzPlaceHolder]=\"ui.placeholder!\"\n      [nzPopupStyle]=\"ui.popupStyle!\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n      [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n      [nzInputReadOnly]=\"ui.inputReadOnly\"\n      [nzInline]=\"ui.inline!\"\n    />\n\n    <nz-week-picker\n      *ngSwitchCase=\"'week'\"\n      [nzId]=\"id\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size!\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [ngClass]=\"ui.className!\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale!\"\n      [nzPlaceHolder]=\"ui.placeholder!\"\n      [nzPopupStyle]=\"ui.popupStyle!\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      [nzInputReadOnly]=\"ui.inputReadOnly\"\n      [nzInline]=\"ui.inline!\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n    />\n\n    <nz-range-picker\n      *ngSwitchCase=\"'range'\"\n      [nzId]=\"id\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size!\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [ngClass]=\"ui.className!\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale!\"\n      [nzPlaceHolder]=\"ui.placeholder!\"\n      [nzPopupStyle]=\"ui.popupStyle!\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n      [nzDisabledTime]=\"ui.disabledTime\"\n      [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n      [nzRanges]=\"ui.ranges\"\n      [nzShowTime]=\"ui.showTime\"\n      [nzSeparator]=\"ui.separator\"\n      [nzShowWeekNumber]=\"ui.showWeekNumber || false\"\n      [nzMode]=\"ui.rangeMode\"\n      [nzInputReadOnly]=\"ui.inputReadOnly\"\n      [nzInline]=\"ui.inline!\"\n      (nzOnOk)=\"_ok($event)\"\n    />\n\n    <nz-date-picker\n      *ngSwitchDefault\n      [nzId]=\"id\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size!\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [ngClass]=\"ui.className!\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale!\"\n      [nzPlaceHolder]=\"ui.placeholder!\"\n      [nzPopupStyle]=\"ui.popupStyle!\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n      [nzDisabledTime]=\"ui.disabledTime\"\n      [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n      [nzShowTime]=\"ui.showTime\"\n      [nzShowToday]=\"i.showToday\"\n      [nzShowWeekNumber]=\"ui.showWeekNumber || false\"\n      [nzInputReadOnly]=\"ui.inputReadOnly\"\n      [nzInline]=\"ui.inline!\"\n      (nzOnOk)=\"_ok($event)\"\n    />\n  </ng-container>\n</sf-item-wrap>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS53aWRnZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL2RhdGUvZGF0ZS53aWRnZXQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL2RhdGUvZGF0ZS53aWRnZXQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFbEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBTS9DLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDckMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7O0FBUS9DLE1BQU0sT0FBTyxVQUFXLFNBQVEsZUFBbUM7SUFObkU7O1FBU1UsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUUxQixpQkFBWSxHQUF5QixJQUFJLENBQUM7S0FvRzNDO0lBaEdDLFFBQVE7UUFDTixNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDcEUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQztRQUM3QiwyQ0FBMkM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQVEsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7WUFDcEIsTUFBTSxLQUFLLEdBQUcs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Q0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDNUMsQ0FBQzsrR0F4R1UsVUFBVTttR0FBVixVQUFVLHNFQ25CdkIsMHJJQXVIQTs7NEZEcEdhLFVBQVU7a0JBTnRCLFNBQVM7K0JBQ0UsU0FBUyx1QkFFRSxLQUFLLGlCQUNYLGlCQUFpQixDQUFDLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tICdAZGVsb24vdXRpbC9kYXRlLXRpbWUnO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBTRkRhdGVXaWRnZXRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4uLy4uL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ29udHJvbFVJV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtZGF0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlLndpZGdldC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVdpZGdldCBleHRlbmRzIENvbnRyb2xVSVdpZGdldDxTRkRhdGVXaWRnZXRTY2hlbWE+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBzdGFydEZvcm1hdCE6IHN0cmluZztcbiAgcHJpdmF0ZSBlbmRGb3JtYXQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgZmxhdFJhbmdlID0gZmFsc2U7XG4gIG1vZGUhOiBzdHJpbmc7XG4gIGRpc3BsYXlWYWx1ZTogRGF0ZSB8IERhdGVbXSB8IG51bGwgPSBudWxsO1xuICBkaXNwbGF5Rm9ybWF0ITogc3RyaW5nO1xuICBpITogeyBhbGxvd0NsZWFyOiBib29sZWFuOyBzaG93VG9kYXk6IGJvb2xlYW4gfTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IG1vZGUsIGVuZCwgZGlzcGxheUZvcm1hdCwgYWxsb3dDbGVhciwgc2hvd1RvZGF5IH0gPSB0aGlzLnVpO1xuICAgIHRoaXMubW9kZSA9IG1vZGUgfHwgJ2RhdGUnO1xuICAgIHRoaXMuZmxhdFJhbmdlID0gZW5kICE9IG51bGw7XG4gICAgLy8g5p6E5bu65bGe5oCn5a+56LGh5pe25Lya5a+56buY6K6k5YC86L+b6KGM5qCh6aqM77yM5Zug5q2k5Y+v5Lul55u05o6l5L2/55SoIGZvcm1hdCDkvZzkuLrmoLzlvI/ljJblsZ7mgKdcbiAgICB0aGlzLnN0YXJ0Rm9ybWF0ID0gdGhpcy51aS5fZm9ybWF0ITtcbiAgICBpZiAodGhpcy5mbGF0UmFuZ2UpIHtcbiAgICAgIHRoaXMubW9kZSA9ICdyYW5nZSc7XG4gICAgICBjb25zdCBlbmRVaSA9IHRoaXMuZW5kUHJvcGVydHkudWkgYXMgU0ZEYXRlV2lkZ2V0U2NoZW1hO1xuICAgICAgdGhpcy5lbmRGb3JtYXQgPSBlbmRVaS5mb3JtYXQgPyBlbmRVaS5fZm9ybWF0IDogdGhpcy5zdGFydEZvcm1hdDtcbiAgICB9XG4gICAgaWYgKCFkaXNwbGF5Rm9ybWF0KSB7XG4gICAgICBzd2l0Y2ggKHRoaXMubW9kZSkge1xuICAgICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgICB0aGlzLmRpc3BsYXlGb3JtYXQgPSBgeXl5eWA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICB0aGlzLmRpc3BsYXlGb3JtYXQgPSBgeXl5eS1NTWA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3dlZWsnOlxuICAgICAgICAgIHRoaXMuZGlzcGxheUZvcm1hdCA9IGB5eXl5LXd3YDtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNwbGF5Rm9ybWF0ID0gZGlzcGxheUZvcm1hdDtcbiAgICB9XG4gICAgdGhpcy5pID0ge1xuICAgICAgYWxsb3dDbGVhcjogdG9Cb29sKGFsbG93Q2xlYXIsIHRydWUpLFxuICAgICAgLy8gbnotZGF0ZS1waWNrZXJcbiAgICAgIHNob3dUb2RheTogdG9Cb29sKHNob3dUb2RheSwgdHJ1ZSlcbiAgICB9O1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IFNGVmFsdWUpOiB2b2lkIHtcbiAgICBjb25zdCB0b0RhdGVPcHRpb25zID0geyBmb3JtYXRTdHJpbmc6IHRoaXMuc3RhcnRGb3JtYXQsIGRlZmF1bHRWYWx1ZTogbnVsbCB9O1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZS5tYXAodiA9PiB0b0RhdGUodiwgdG9EYXRlT3B0aW9ucykpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IHRvRGF0ZSh2YWx1ZSwgdG9EYXRlT3B0aW9ucyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmZsYXRSYW5nZSkge1xuICAgICAgY29uc3QgZW5kVmFsdWUgPSB0b0RhdGUodGhpcy5lbmRQcm9wZXJ0eS5mb3JtRGF0YSBhcyBOelNhZmVBbnksIHtcbiAgICAgICAgZm9ybWF0U3RyaW5nOiB0aGlzLmVuZEZvcm1hdCB8fCB0aGlzLnN0YXJ0Rm9ybWF0LFxuICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5kaXNwbGF5VmFsdWUgPSB2YWx1ZSA9PSBudWxsIHx8IGVuZFZhbHVlID09IG51bGwgPyBbXSA6IFt2YWx1ZSwgZW5kVmFsdWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICAvLyBUT0RPOiBOZWVkIHRvIHdhaXQgZm9yIHRoZSByZW5kZXJpbmcgdG8gY29tcGxldGUsIG90aGVyd2lzZSBpdCB3aWxsIGJlIG92ZXJ3cml0dGVuIG9mIGVuZCB3aWRnZXRcbiAgICBpZiAodGhpcy5kaXNwbGF5VmFsdWUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fY2hhbmdlKHRoaXMuZGlzcGxheVZhbHVlLCBmYWxzZSkpO1xuICAgIH1cbiAgfVxuXG4gIF9jaGFuZ2UodmFsdWU6IERhdGUgfCBEYXRlW10gfCBudWxsLCBlbWl0TW9kZWxDaGFuZ2U6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgaWYgKGVtaXRNb2RlbENoYW5nZSAmJiB0aGlzLnVpLmNoYW5nZSkge1xuICAgICAgdGhpcy51aS5jaGFuZ2UodmFsdWUpO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoIDwgMikpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUobnVsbCk7XG4gICAgICB0aGlzLnNldEVuZChudWxsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZXMgPSBBcnJheS5pc0FycmF5KHZhbHVlKVxuICAgICAgPyBbZm9ybWF0KHZhbHVlWzBdLCB0aGlzLnN0YXJ0Rm9ybWF0KSwgZm9ybWF0KHZhbHVlWzFdLCB0aGlzLmVuZEZvcm1hdCB8fCB0aGlzLnN0YXJ0Rm9ybWF0KV1cbiAgICAgIDogZm9ybWF0KHZhbHVlLCB0aGlzLnN0YXJ0Rm9ybWF0KTtcblxuICAgIGlmICh0aGlzLmZsYXRSYW5nZSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZShyZXNbMF0pO1xuICAgICAgdGhpcy5zZXRFbmQocmVzWzFdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRWYWx1ZShyZXMpO1xuICAgIH1cbiAgfVxuXG4gIF9vcGVuQ2hhbmdlKHN0YXR1czogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLm9uT3BlbkNoYW5nZSkgdGhpcy51aS5vbk9wZW5DaGFuZ2Uoc3RhdHVzKTtcbiAgfVxuXG4gIF9vayh2YWx1ZTogTnpTYWZlQW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkub25PaykgdGhpcy51aS5vbk9rKHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGVuZFByb3BlcnR5KCk6IEZvcm1Qcm9wZXJ0eSB7XG4gICAgcmV0dXJuICh0aGlzLmZvcm1Qcm9wZXJ0eS5wYXJlbnQhLnByb3BlcnRpZXMgYXMgeyBba2V5OiBzdHJpbmddOiBGb3JtUHJvcGVydHkgfSlbdGhpcy51aS5lbmQhXTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0RW5kKHZhbHVlOiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmZsYXRSYW5nZSkgcmV0dXJuO1xuXG4gICAgdGhpcy5lbmRQcm9wZXJ0eS5zZXRWYWx1ZSh2YWx1ZSwgdHJ1ZSk7XG4gICAgdGhpcy5lbmRQcm9wZXJ0eS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gIH1cbn1cbiIsIjxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG4gIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cIm1vZGVcIj5cbiAgICA8bnoteWVhci1waWNrZXJcbiAgICAgICpuZ1N3aXRjaENhc2U9XCIneWVhcidcIlxuICAgICAgW256SWRdPVwiaWRcIlxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW256U2l6ZV09XCJ1aS5zaXplIVwiXG4gICAgICBbbnpGb3JtYXRdPVwiZGlzcGxheUZvcm1hdFwiXG4gICAgICBbKG5nTW9kZWwpXT1cImRpc3BsYXlWYWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJfY2hhbmdlKCRldmVudClcIlxuICAgICAgW256QWxsb3dDbGVhcl09XCJpLmFsbG93Q2xlYXJcIlxuICAgICAgW25nQ2xhc3NdPVwidWkuY2xhc3NOYW1lIVwiXG4gICAgICBbbnpEaXNhYmxlZERhdGVdPVwidWkuZGlzYWJsZWREYXRlXCJcbiAgICAgIFtuekxvY2FsZV09XCJ1aS5sb2NhbGUhXCJcbiAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyIVwiXG4gICAgICBbbnpQb3B1cFN0eWxlXT1cInVpLnBvcHVwU3R5bGUhXCJcbiAgICAgIFtuekRyb3Bkb3duQ2xhc3NOYW1lXT1cInVpLmRyb3Bkb3duQ2xhc3NOYW1lXCJcbiAgICAgIChuek9uT3BlbkNoYW5nZSk9XCJfb3BlbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAgIFtuelJlbmRlckV4dHJhRm9vdGVyXT1cInVpLnJlbmRlckV4dHJhRm9vdGVyXCJcbiAgICAgIFtueklucHV0UmVhZE9ubHldPVwidWkuaW5wdXRSZWFkT25seVwiXG4gICAgICBbbnpJbmxpbmVdPVwidWkuaW5saW5lIVwiXG4gICAgLz5cblxuICAgIDxuei1tb250aC1waWNrZXJcbiAgICAgICpuZ1N3aXRjaENhc2U9XCInbW9udGgnXCJcbiAgICAgIFtueklkXT1cImlkXCJcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFtuelNpemVdPVwidWkuc2l6ZSFcIlxuICAgICAgW256Rm9ybWF0XT1cImRpc3BsYXlGb3JtYXRcIlxuICAgICAgWyhuZ01vZGVsKV09XCJkaXNwbGF5VmFsdWVcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiX2NoYW5nZSgkZXZlbnQpXCJcbiAgICAgIFtuekFsbG93Q2xlYXJdPVwiaS5hbGxvd0NsZWFyXCJcbiAgICAgIFtuZ0NsYXNzXT1cInVpLmNsYXNzTmFtZSFcIlxuICAgICAgW256RGlzYWJsZWREYXRlXT1cInVpLmRpc2FibGVkRGF0ZVwiXG4gICAgICBbbnpMb2NhbGVdPVwidWkubG9jYWxlIVwiXG4gICAgICBbbnpQbGFjZUhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlciFcIlxuICAgICAgW256UG9wdXBTdHlsZV09XCJ1aS5wb3B1cFN0eWxlIVwiXG4gICAgICBbbnpEcm9wZG93bkNsYXNzTmFtZV09XCJ1aS5kcm9wZG93bkNsYXNzTmFtZVwiXG4gICAgICAobnpPbk9wZW5DaGFuZ2UpPVwiX29wZW5DaGFuZ2UoJGV2ZW50KVwiXG4gICAgICBbbnpSZW5kZXJFeHRyYUZvb3Rlcl09XCJ1aS5yZW5kZXJFeHRyYUZvb3RlclwiXG4gICAgICBbbnpJbnB1dFJlYWRPbmx5XT1cInVpLmlucHV0UmVhZE9ubHlcIlxuICAgICAgW256SW5saW5lXT1cInVpLmlubGluZSFcIlxuICAgIC8+XG5cbiAgICA8bnotd2Vlay1waWNrZXJcbiAgICAgICpuZ1N3aXRjaENhc2U9XCInd2VlaydcIlxuICAgICAgW256SWRdPVwiaWRcIlxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW256U2l6ZV09XCJ1aS5zaXplIVwiXG4gICAgICBbbnpGb3JtYXRdPVwiZGlzcGxheUZvcm1hdFwiXG4gICAgICBbKG5nTW9kZWwpXT1cImRpc3BsYXlWYWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJfY2hhbmdlKCRldmVudClcIlxuICAgICAgW256QWxsb3dDbGVhcl09XCJpLmFsbG93Q2xlYXJcIlxuICAgICAgW25nQ2xhc3NdPVwidWkuY2xhc3NOYW1lIVwiXG4gICAgICBbbnpEaXNhYmxlZERhdGVdPVwidWkuZGlzYWJsZWREYXRlXCJcbiAgICAgIFtuekxvY2FsZV09XCJ1aS5sb2NhbGUhXCJcbiAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyIVwiXG4gICAgICBbbnpQb3B1cFN0eWxlXT1cInVpLnBvcHVwU3R5bGUhXCJcbiAgICAgIFtuekRyb3Bkb3duQ2xhc3NOYW1lXT1cInVpLmRyb3Bkb3duQ2xhc3NOYW1lXCJcbiAgICAgIFtueklucHV0UmVhZE9ubHldPVwidWkuaW5wdXRSZWFkT25seVwiXG4gICAgICBbbnpJbmxpbmVdPVwidWkuaW5saW5lIVwiXG4gICAgICAobnpPbk9wZW5DaGFuZ2UpPVwiX29wZW5DaGFuZ2UoJGV2ZW50KVwiXG4gICAgLz5cblxuICAgIDxuei1yYW5nZS1waWNrZXJcbiAgICAgICpuZ1N3aXRjaENhc2U9XCIncmFuZ2UnXCJcbiAgICAgIFtueklkXT1cImlkXCJcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFtuelNpemVdPVwidWkuc2l6ZSFcIlxuICAgICAgW256Rm9ybWF0XT1cImRpc3BsYXlGb3JtYXRcIlxuICAgICAgWyhuZ01vZGVsKV09XCJkaXNwbGF5VmFsdWVcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiX2NoYW5nZSgkZXZlbnQpXCJcbiAgICAgIFtuekFsbG93Q2xlYXJdPVwiaS5hbGxvd0NsZWFyXCJcbiAgICAgIFtuZ0NsYXNzXT1cInVpLmNsYXNzTmFtZSFcIlxuICAgICAgW256RGlzYWJsZWREYXRlXT1cInVpLmRpc2FibGVkRGF0ZVwiXG4gICAgICBbbnpMb2NhbGVdPVwidWkubG9jYWxlIVwiXG4gICAgICBbbnpQbGFjZUhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlciFcIlxuICAgICAgW256UG9wdXBTdHlsZV09XCJ1aS5wb3B1cFN0eWxlIVwiXG4gICAgICBbbnpEcm9wZG93bkNsYXNzTmFtZV09XCJ1aS5kcm9wZG93bkNsYXNzTmFtZVwiXG4gICAgICAobnpPbk9wZW5DaGFuZ2UpPVwiX29wZW5DaGFuZ2UoJGV2ZW50KVwiXG4gICAgICBbbnpEaXNhYmxlZFRpbWVdPVwidWkuZGlzYWJsZWRUaW1lXCJcbiAgICAgIFtuelJlbmRlckV4dHJhRm9vdGVyXT1cInVpLnJlbmRlckV4dHJhRm9vdGVyXCJcbiAgICAgIFtuelJhbmdlc109XCJ1aS5yYW5nZXNcIlxuICAgICAgW256U2hvd1RpbWVdPVwidWkuc2hvd1RpbWVcIlxuICAgICAgW256U2VwYXJhdG9yXT1cInVpLnNlcGFyYXRvclwiXG4gICAgICBbbnpTaG93V2Vla051bWJlcl09XCJ1aS5zaG93V2Vla051bWJlciB8fCBmYWxzZVwiXG4gICAgICBbbnpNb2RlXT1cInVpLnJhbmdlTW9kZVwiXG4gICAgICBbbnpJbnB1dFJlYWRPbmx5XT1cInVpLmlucHV0UmVhZE9ubHlcIlxuICAgICAgW256SW5saW5lXT1cInVpLmlubGluZSFcIlxuICAgICAgKG56T25Payk9XCJfb2soJGV2ZW50KVwiXG4gICAgLz5cblxuICAgIDxuei1kYXRlLXBpY2tlclxuICAgICAgKm5nU3dpdGNoRGVmYXVsdFxuICAgICAgW256SWRdPVwiaWRcIlxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW256U2l6ZV09XCJ1aS5zaXplIVwiXG4gICAgICBbbnpGb3JtYXRdPVwiZGlzcGxheUZvcm1hdFwiXG4gICAgICBbKG5nTW9kZWwpXT1cImRpc3BsYXlWYWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJfY2hhbmdlKCRldmVudClcIlxuICAgICAgW256QWxsb3dDbGVhcl09XCJpLmFsbG93Q2xlYXJcIlxuICAgICAgW25nQ2xhc3NdPVwidWkuY2xhc3NOYW1lIVwiXG4gICAgICBbbnpEaXNhYmxlZERhdGVdPVwidWkuZGlzYWJsZWREYXRlXCJcbiAgICAgIFtuekxvY2FsZV09XCJ1aS5sb2NhbGUhXCJcbiAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyIVwiXG4gICAgICBbbnpQb3B1cFN0eWxlXT1cInVpLnBvcHVwU3R5bGUhXCJcbiAgICAgIFtuekRyb3Bkb3duQ2xhc3NOYW1lXT1cInVpLmRyb3Bkb3duQ2xhc3NOYW1lXCJcbiAgICAgIChuek9uT3BlbkNoYW5nZSk9XCJfb3BlbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAgIFtuekRpc2FibGVkVGltZV09XCJ1aS5kaXNhYmxlZFRpbWVcIlxuICAgICAgW256UmVuZGVyRXh0cmFGb290ZXJdPVwidWkucmVuZGVyRXh0cmFGb290ZXJcIlxuICAgICAgW256U2hvd1RpbWVdPVwidWkuc2hvd1RpbWVcIlxuICAgICAgW256U2hvd1RvZGF5XT1cImkuc2hvd1RvZGF5XCJcbiAgICAgIFtuelNob3dXZWVrTnVtYmVyXT1cInVpLnNob3dXZWVrTnVtYmVyIHx8IGZhbHNlXCJcbiAgICAgIFtueklucHV0UmVhZE9ubHldPVwidWkuaW5wdXRSZWFkT25seVwiXG4gICAgICBbbnpJbmxpbmVdPVwidWkuaW5saW5lIVwiXG4gICAgICAobnpPbk9rKT1cIl9vaygkZXZlbnQpXCJcbiAgICAvPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvc2YtaXRlbS13cmFwPlxuIl19