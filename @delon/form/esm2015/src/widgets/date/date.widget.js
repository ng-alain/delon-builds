/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import format from 'date-fns/format';
import { ControlWidget } from '../../widget';
import { toBool } from '../../utils';
export class DateWidget extends ControlWidget {
    constructor() {
        super(...arguments);
        this.displayValue = null;
        this.flatRange = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const ui = this.ui;
        this.mode = ui.mode || 'date';
        this.flatRange = ui.end != null;
        if (this.flatRange) {
            this.mode = 'range';
        }
        if (!ui.displayFormat) {
            switch (this.mode) {
                case 'month':
                    this.displayFormat = `yyyy-MM`;
                    break;
                case 'week':
                    this.displayFormat = `yyyy-ww`;
                    break;
            }
        }
        else {
            this.displayFormat = ui.displayFormat;
        }
        this.format = ui.format
            ? ui.format
            : this.schema.type === 'number'
                ? 'x'
                : 'YYYY-MM-DD HH:mm:ss';
        // 公共API
        this.i = {
            allowClear: toBool(ui.allowClear, true),
            // nz-date-picker
            showToday: toBool(ui.showToday, true),
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) {
        value = this.toDate(value);
        if (this.flatRange) {
            this.displayValue = value == null ? [] : [value, this.toDate(this.endProperty.formData)];
        }
        else {
            this.displayValue = value;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _change(value) {
        if (value == null) {
            this.setValue(null);
            this.setEnd(null);
            return;
        }
        /** @type {?} */
        const res = Array.isArray(value)
            ? value.map(d => format(d, this.format))
            : format(value, this.format);
        if (this.flatRange) {
            this.setEnd(res[1]);
            this.setValue(res[0]);
        }
        else {
            this.setValue(res);
        }
    }
    /**
     * @param {?} status
     * @return {?}
     */
    _openChange(status) {
        if (this.ui.onOpenChange)
            this.ui.onOpenChange(status);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _ok(value) {
        if (this.ui.onOk)
            this.ui.onOk(value);
    }
    /**
     * @return {?}
     */
    get endProperty() {
        return this.formProperty.parent.properties[this.ui.end];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setEnd(value) {
        this.endProperty.setValue(value, true);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    toDate(value) {
        if (typeof value === 'number' || (typeof value === 'string' && !isNaN(+value))) {
            value = new Date(+value);
        }
        return value;
    }
}
DateWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-date',
                template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">
    <ng-container [ngSwitch]="mode">

      <nz-month-picker *ngSwitchCase="'month'"
        [nzDisabled]="disabled"
        [nzSize]="ui.size"
        [nzFormat]="displayFormat"
        [(ngModel)]="displayValue"
        (ngModelChange)="_change($event)"
        [nzAllowClear]="i.allowClear"
        [nzClassName]="ui.className"
        [nzDisabledDate]="ui.disabledDate"
        [nzLocale]="ui.locale"
        [nzPlaceHolder]="ui.placeholder"
        [nzPopupStyle]="ui.popupStyle"
        [nzDropdownClassName]="ui.dropdownClassName"
        (nzOnOpenChange)="_openChange($event)"
        [nzRenderExtraFooter]="ui.renderExtraFooter"
      ></nz-month-picker>

      <nz-week-picker *ngSwitchCase="'week'"
        [nzDisabled]="disabled"
        [nzSize]="ui.size"
        [nzFormat]="displayFormat"
        [(ngModel)]="displayValue"
        (ngModelChange)="_change($event)"
        [nzAllowClear]="i.allowClear"
        [nzClassName]="ui.className"
        [nzDisabledDate]="ui.disabledDate"
        [nzLocale]="ui.locale"
        [nzPlaceHolder]="ui.placeholder"
        [nzPopupStyle]="ui.popupStyle"
        [nzDropdownClassName]="ui.dropdownClassName"
        (nzOnOpenChange)="_openChange($event)"
      ></nz-week-picker>

      <nz-range-picker *ngSwitchCase="'range'"
        [nzDisabled]="disabled"
        [nzSize]="ui.size"
        [nzFormat]="displayFormat"
        [(ngModel)]="displayValue"
        (ngModelChange)="_change($event)"
        [nzAllowClear]="i.allowClear"
        [nzClassName]="ui.className"
        [nzDisabledDate]="ui.disabledDate"
        [nzLocale]="ui.locale"
        [nzPlaceHolder]="ui.placeholder"
        [nzPopupStyle]="ui.popupStyle"
        [nzDropdownClassName]="ui.dropdownClassName"
        (nzOnOpenChange)="_openChange($event)"
        [nzDisabledTime]="ui.disabledTime"
        [nzRenderExtraFooter]="ui.renderExtraFooter"
        [nzRanges]="ui.ranges"
        [nzShowTime]="ui.showTime"
        (nzOnOk)="_ok($event)"
      ></nz-range-picker>

      <nz-date-picker *ngSwitchDefault
        [nzDisabled]="disabled"
        [nzSize]="ui.size"
        [nzFormat]="displayFormat"
        [(ngModel)]="displayValue"
        (ngModelChange)="_change($event)"
        [nzAllowClear]="i.allowClear"
        [nzClassName]="ui.className"
        [nzDisabledDate]="ui.disabledDate"
        [nzLocale]="ui.locale"
        [nzPlaceHolder]="ui.placeholder"
        [nzPopupStyle]="ui.popupStyle"
        [nzDropdownClassName]="ui.dropdownClassName"
        (nzOnOpenChange)="_openChange($event)"
        [nzDisabledTime]="ui.disabledTime"
        [nzRenderExtraFooter]="ui.renderExtraFooter"
        [nzShowTime]="ui.showTime"
        [nzShowToday]="i.showToday"
        (nzOnOk)="_ok($event)"
      ></nz-date-picker>
    </ng-container>

  </sf-item-wrap>
  `
            }] }
];
if (false) {
    /** @type {?} */
    DateWidget.prototype.mode;
    /** @type {?} */
    DateWidget.prototype.displayValue;
    /** @type {?} */
    DateWidget.prototype.displayFormat;
    /** @type {?} */
    DateWidget.prototype.format;
    /** @type {?} */
    DateWidget.prototype.i;
    /** @type {?} */
    DateWidget.prototype.flatRange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS53aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL2RhdGUvZGF0ZS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxNQUFNLE1BQU0saUJBQWlCLENBQUM7QUFDckMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM3QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBd0ZyQyxNQUFNLE9BQU8sVUFBVyxTQUFRLGFBQWE7SUFyRjdDOztRQXVGRSxpQkFBWSxHQUFrQixJQUFJLENBQUM7UUFJbkMsY0FBUyxHQUFHLEtBQUssQ0FBQztJQW9GcEIsQ0FBQzs7OztJQWxGQyxRQUFROztjQUNBLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRTtRQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUM7UUFDaEMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUU7WUFDckIsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNqQixLQUFLLE9BQU87b0JBQ1YsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7b0JBQy9CLE1BQU07Z0JBQ1IsS0FBSyxNQUFNO29CQUNULElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO29CQUMvQixNQUFNO2FBQ1Q7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO1NBQ3ZDO1FBQ0Qs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RTtZQUM5RSxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxQjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7O1lBOUtGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpRlQ7YUFDRjs7OztJQUVDLDBCQUFhOztJQUNiLGtDQUFtQzs7SUFDbkMsbUNBQXNCOztJQUN0Qiw0QkFBZTs7SUFDZix1QkFBTzs7SUFDUCwrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IGZvcm1hdCBmcm9tICdkYXRlLWZucy9mb3JtYXQnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuLi8uLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtZGF0ZScsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG4gICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwibW9kZVwiPlxuXG4gICAgICA8bnotbW9udGgtcGlja2VyICpuZ1N3aXRjaENhc2U9XCInbW9udGgnXCJcbiAgICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgICBbbnpGb3JtYXRdPVwiZGlzcGxheUZvcm1hdFwiXG4gICAgICAgIFsobmdNb2RlbCldPVwiZGlzcGxheVZhbHVlXCJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiX2NoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgW256QWxsb3dDbGVhcl09XCJpLmFsbG93Q2xlYXJcIlxuICAgICAgICBbbnpDbGFzc05hbWVdPVwidWkuY2xhc3NOYW1lXCJcbiAgICAgICAgW256RGlzYWJsZWREYXRlXT1cInVpLmRpc2FibGVkRGF0ZVwiXG4gICAgICAgIFtuekxvY2FsZV09XCJ1aS5sb2NhbGVcIlxuICAgICAgICBbbnpQbGFjZUhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXG4gICAgICAgIFtuelBvcHVwU3R5bGVdPVwidWkucG9wdXBTdHlsZVwiXG4gICAgICAgIFtuekRyb3Bkb3duQ2xhc3NOYW1lXT1cInVpLmRyb3Bkb3duQ2xhc3NOYW1lXCJcbiAgICAgICAgKG56T25PcGVuQ2hhbmdlKT1cIl9vcGVuQ2hhbmdlKCRldmVudClcIlxuICAgICAgICBbbnpSZW5kZXJFeHRyYUZvb3Rlcl09XCJ1aS5yZW5kZXJFeHRyYUZvb3RlclwiXG4gICAgICA+PC9uei1tb250aC1waWNrZXI+XG5cbiAgICAgIDxuei13ZWVrLXBpY2tlciAqbmdTd2l0Y2hDYXNlPVwiJ3dlZWsnXCJcbiAgICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgICBbbnpGb3JtYXRdPVwiZGlzcGxheUZvcm1hdFwiXG4gICAgICAgIFsobmdNb2RlbCldPVwiZGlzcGxheVZhbHVlXCJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiX2NoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgW256QWxsb3dDbGVhcl09XCJpLmFsbG93Q2xlYXJcIlxuICAgICAgICBbbnpDbGFzc05hbWVdPVwidWkuY2xhc3NOYW1lXCJcbiAgICAgICAgW256RGlzYWJsZWREYXRlXT1cInVpLmRpc2FibGVkRGF0ZVwiXG4gICAgICAgIFtuekxvY2FsZV09XCJ1aS5sb2NhbGVcIlxuICAgICAgICBbbnpQbGFjZUhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXG4gICAgICAgIFtuelBvcHVwU3R5bGVdPVwidWkucG9wdXBTdHlsZVwiXG4gICAgICAgIFtuekRyb3Bkb3duQ2xhc3NOYW1lXT1cInVpLmRyb3Bkb3duQ2xhc3NOYW1lXCJcbiAgICAgICAgKG56T25PcGVuQ2hhbmdlKT1cIl9vcGVuQ2hhbmdlKCRldmVudClcIlxuICAgICAgPjwvbnotd2Vlay1waWNrZXI+XG5cbiAgICAgIDxuei1yYW5nZS1waWNrZXIgKm5nU3dpdGNoQ2FzZT1cIidyYW5nZSdcIlxuICAgICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICAgIFtuekZvcm1hdF09XCJkaXNwbGF5Rm9ybWF0XCJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJkaXNwbGF5VmFsdWVcIlxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJfY2hhbmdlKCRldmVudClcIlxuICAgICAgICBbbnpBbGxvd0NsZWFyXT1cImkuYWxsb3dDbGVhclwiXG4gICAgICAgIFtuekNsYXNzTmFtZV09XCJ1aS5jbGFzc05hbWVcIlxuICAgICAgICBbbnpEaXNhYmxlZERhdGVdPVwidWkuZGlzYWJsZWREYXRlXCJcbiAgICAgICAgW256TG9jYWxlXT1cInVpLmxvY2FsZVwiXG4gICAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgW256UG9wdXBTdHlsZV09XCJ1aS5wb3B1cFN0eWxlXCJcbiAgICAgICAgW256RHJvcGRvd25DbGFzc05hbWVdPVwidWkuZHJvcGRvd25DbGFzc05hbWVcIlxuICAgICAgICAobnpPbk9wZW5DaGFuZ2UpPVwiX29wZW5DaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIFtuekRpc2FibGVkVGltZV09XCJ1aS5kaXNhYmxlZFRpbWVcIlxuICAgICAgICBbbnpSZW5kZXJFeHRyYUZvb3Rlcl09XCJ1aS5yZW5kZXJFeHRyYUZvb3RlclwiXG4gICAgICAgIFtuelJhbmdlc109XCJ1aS5yYW5nZXNcIlxuICAgICAgICBbbnpTaG93VGltZV09XCJ1aS5zaG93VGltZVwiXG4gICAgICAgIChuek9uT2spPVwiX29rKCRldmVudClcIlxuICAgICAgPjwvbnotcmFuZ2UtcGlja2VyPlxuXG4gICAgICA8bnotZGF0ZS1waWNrZXIgKm5nU3dpdGNoRGVmYXVsdFxuICAgICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICAgIFtuekZvcm1hdF09XCJkaXNwbGF5Rm9ybWF0XCJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJkaXNwbGF5VmFsdWVcIlxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJfY2hhbmdlKCRldmVudClcIlxuICAgICAgICBbbnpBbGxvd0NsZWFyXT1cImkuYWxsb3dDbGVhclwiXG4gICAgICAgIFtuekNsYXNzTmFtZV09XCJ1aS5jbGFzc05hbWVcIlxuICAgICAgICBbbnpEaXNhYmxlZERhdGVdPVwidWkuZGlzYWJsZWREYXRlXCJcbiAgICAgICAgW256TG9jYWxlXT1cInVpLmxvY2FsZVwiXG4gICAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgW256UG9wdXBTdHlsZV09XCJ1aS5wb3B1cFN0eWxlXCJcbiAgICAgICAgW256RHJvcGRvd25DbGFzc05hbWVdPVwidWkuZHJvcGRvd25DbGFzc05hbWVcIlxuICAgICAgICAobnpPbk9wZW5DaGFuZ2UpPVwiX29wZW5DaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIFtuekRpc2FibGVkVGltZV09XCJ1aS5kaXNhYmxlZFRpbWVcIlxuICAgICAgICBbbnpSZW5kZXJFeHRyYUZvb3Rlcl09XCJ1aS5yZW5kZXJFeHRyYUZvb3RlclwiXG4gICAgICAgIFtuelNob3dUaW1lXT1cInVpLnNob3dUaW1lXCJcbiAgICAgICAgW256U2hvd1RvZGF5XT1cImkuc2hvd1RvZGF5XCJcbiAgICAgICAgKG56T25Payk9XCJfb2soJGV2ZW50KVwiXG4gICAgICA+PC9uei1kYXRlLXBpY2tlcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICA8L3NmLWl0ZW0td3JhcD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBtb2RlOiBzdHJpbmc7XG4gIGRpc3BsYXlWYWx1ZTogRGF0ZSB8IERhdGVbXSA9IG51bGw7XG4gIGRpc3BsYXlGb3JtYXQ6IHN0cmluZztcbiAgZm9ybWF0OiBzdHJpbmc7XG4gIGk6IGFueTtcbiAgZmxhdFJhbmdlID0gZmFsc2U7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgdWkgPSB0aGlzLnVpO1xuICAgIHRoaXMubW9kZSA9IHVpLm1vZGUgfHwgJ2RhdGUnO1xuICAgIHRoaXMuZmxhdFJhbmdlID0gdWkuZW5kICE9IG51bGw7XG4gICAgaWYgKHRoaXMuZmxhdFJhbmdlKSB7XG4gICAgICB0aGlzLm1vZGUgPSAncmFuZ2UnO1xuICAgIH1cbiAgICBpZiAoIXVpLmRpc3BsYXlGb3JtYXQpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5tb2RlKSB7XG4gICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICB0aGlzLmRpc3BsYXlGb3JtYXQgPSBgeXl5eS1NTWA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3dlZWsnOlxuICAgICAgICAgIHRoaXMuZGlzcGxheUZvcm1hdCA9IGB5eXl5LXd3YDtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNwbGF5Rm9ybWF0ID0gdWkuZGlzcGxheUZvcm1hdDtcbiAgICB9XG4gICAgdGhpcy5mb3JtYXQgPSB1aS5mb3JtYXRcbiAgICAgID8gdWkuZm9ybWF0XG4gICAgICA6IHRoaXMuc2NoZW1hLnR5cGUgPT09ICdudW1iZXInXG4gICAgICAgID8gJ3gnXG4gICAgICAgIDogJ1lZWVktTU0tREQgSEg6bW06c3MnO1xuICAgIC8vIOWFrOWFsUFQSVxuICAgIHRoaXMuaSA9IHtcbiAgICAgIGFsbG93Q2xlYXI6IHRvQm9vbCh1aS5hbGxvd0NsZWFyLCB0cnVlKSxcbiAgICAgIC8vIG56LWRhdGUtcGlja2VyXG4gICAgICBzaG93VG9kYXk6IHRvQm9vbCh1aS5zaG93VG9kYXksIHRydWUpLFxuICAgIH07XG4gIH1cblxuICByZXNldCh2YWx1ZTogYW55KSB7XG4gICAgdmFsdWUgPSB0aGlzLnRvRGF0ZSh2YWx1ZSk7XG4gICAgaWYgKHRoaXMuZmxhdFJhbmdlKSB7XG4gICAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IHZhbHVlID09IG51bGwgPyBbXSA6IFt2YWx1ZSwgdGhpcy50b0RhdGUodGhpcy5lbmRQcm9wZXJ0eS5mb3JtRGF0YSldO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIF9jaGFuZ2UodmFsdWU6IERhdGUgfCBEYXRlW10pIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRWYWx1ZShudWxsKTtcbiAgICAgIHRoaXMuc2V0RW5kKG51bGwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlcyA9IEFycmF5LmlzQXJyYXkodmFsdWUpXG4gICAgICA/IHZhbHVlLm1hcChkID0+IGZvcm1hdChkLCB0aGlzLmZvcm1hdCkpXG4gICAgICA6IGZvcm1hdCh2YWx1ZSwgdGhpcy5mb3JtYXQpO1xuXG4gICAgaWYgKHRoaXMuZmxhdFJhbmdlKSB7XG4gICAgICB0aGlzLnNldEVuZChyZXNbMV0pO1xuICAgICAgdGhpcy5zZXRWYWx1ZShyZXNbMF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHJlcyk7XG4gICAgfVxuICB9XG5cbiAgX29wZW5DaGFuZ2Uoc3RhdHVzOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMudWkub25PcGVuQ2hhbmdlKSB0aGlzLnVpLm9uT3BlbkNoYW5nZShzdGF0dXMpO1xuICB9XG5cbiAgX29rKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy51aS5vbk9rKSB0aGlzLnVpLm9uT2sodmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgZW5kUHJvcGVydHkoKTogRm9ybVByb3BlcnR5IHtcbiAgICByZXR1cm4gdGhpcy5mb3JtUHJvcGVydHkucGFyZW50LnByb3BlcnRpZXNbdGhpcy51aS5lbmRdO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRFbmQodmFsdWU6IGFueSkge1xuICAgIHRoaXMuZW5kUHJvcGVydHkuc2V0VmFsdWUodmFsdWUsIHRydWUpO1xuICB9XG5cbiAgcHJpdmF0ZSB0b0RhdGUodmFsdWU6IGFueSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8ICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICFpc05hTigrdmFsdWUpKSkge1xuICAgICAgdmFsdWUgPSBuZXcgRGF0ZSgrdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cbiJdfQ==