/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
import format from 'date-fns/format';
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
        this.mode = ui["mode"] || 'date';
        this.flatRange = ui["end"] != null;
        if (this.flatRange) {
            this.mode = 'range';
        }
        if (!ui["displayFormat"]) {
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
            this.displayFormat = ui["displayFormat"];
        }
        this.format = ui["format"] ? ui["format"] : this.schema.type === 'number'
            ? 'x'
            : 'YYYY-MM-DD HH:mm:ss';
        // 公共API
        this.i = {
            allowClear: toBool(ui["allowClear"], true),
            // nz-date-picker
            showToday: toBool(ui["showToday"], true),
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) {
        if (this.flatRange) {
            this.displayValue = value == null ? [] : [value, this.endProperty.formData];
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
        if (this.ui["onOpenChange"])
            this.ui["onOpenChange"](status);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _ok(value) {
        if (this.ui["onOk"])
            this.ui["onOk"](value);
    }
    /**
     * @return {?}
     */
    get endProperty() {
        return this.formProperty.parent.properties[this.ui["end"]];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setEnd(value) {
        this.endProperty.setValue(value, true);
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
  `,
                preserveWhitespaces: false
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS53aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL2RhdGUvZGF0ZS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM3QyxPQUFPLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQztBQUNyQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBd0ZyQyxNQUFNLGlCQUFrQixTQUFRLGFBQWE7Ozs0QkFFYixJQUFJO3lCQUl0QixLQUFLOzs7OztJQUVqQixRQUFROztRQUNOLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLFlBQVMsTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxXQUFRLElBQUksQ0FBQztRQUNoQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7U0FDckI7UUFDRCxJQUFJLENBQUMsRUFBRSxpQkFBYyxFQUFFO1lBQ3JCLFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDakIsS0FBSyxPQUFPO29CQUNWLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO29CQUMvQixNQUFNO2dCQUNSLEtBQUssTUFBTTtvQkFDVCxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztvQkFDL0IsTUFBTTthQUNUO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxpQkFBYyxDQUFDO1NBQ3ZDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLFdBQ2QsQ0FBQyxDQUFDLEVBQUUsV0FDSixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssUUFBUTtZQUM3QixDQUFDLENBQUMsR0FBRztZQUNMLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQzs7UUFFNUIsSUFBSSxDQUFDLENBQUMsR0FBRztZQUNQLFVBQVUsRUFBRSxNQUFNLENBQUMsRUFBRSxnQkFBYSxJQUFJLENBQUM7O1lBRXZDLFNBQVMsRUFBRSxNQUFNLENBQUMsRUFBRSxlQUFZLElBQUksQ0FBQztTQUN0QyxDQUFDO0tBQ0g7Ozs7O0lBRUQsS0FBSyxDQUFDLEtBQVU7UUFDZCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDN0U7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQzNCO0tBQ0Y7Ozs7O0lBRUQsT0FBTyxDQUFDLEtBQW9CO1FBQzFCLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsT0FBTztTQUNSOztRQUVELE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRS9CLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkI7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDcEI7S0FDRjs7Ozs7SUFFRCxXQUFXLENBQUMsTUFBZTtRQUN6QixJQUFJLElBQUksQ0FBQyxFQUFFO1lBQWUsSUFBSSxDQUFDLEVBQUUsaUJBQWMsTUFBTSxDQUFDLENBQUM7S0FDeEQ7Ozs7O0lBRUQsR0FBRyxDQUFDLEtBQVU7UUFDWixJQUFJLElBQUksQ0FBQyxFQUFFO1lBQU8sSUFBSSxDQUFDLEVBQUUsU0FBTSxLQUFLLENBQUMsQ0FBQztLQUN2Qzs7OztRQUVXLFdBQVc7UUFDckIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBSyxDQUFDOzs7Ozs7SUFHbEQsTUFBTSxDQUFDLEtBQVU7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDOzs7O1lBcksxQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnRlQ7Z0JBQ0QsbUJBQW1CLEVBQUUsS0FBSzthQUMzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xyXG5pbXBvcnQgZm9ybWF0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCc7XHJcbmltcG9ydCB7IHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcclxuaW1wb3J0IHsgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi4vLi4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NmLWRhdGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cclxuICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cIm1vZGVcIj5cclxuXHJcbiAgICAgIDxuei1tb250aC1waWNrZXIgKm5nU3dpdGNoQ2FzZT1cIidtb250aCdcIlxyXG4gICAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxyXG4gICAgICAgIFtuekZvcm1hdF09XCJkaXNwbGF5Rm9ybWF0XCJcclxuICAgICAgICBbKG5nTW9kZWwpXT1cImRpc3BsYXlWYWx1ZVwiXHJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiX2NoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICBbbnpBbGxvd0NsZWFyXT1cImkuYWxsb3dDbGVhclwiXHJcbiAgICAgICAgW256Q2xhc3NOYW1lXT1cInVpLmNsYXNzTmFtZVwiXHJcbiAgICAgICAgW256RGlzYWJsZWREYXRlXT1cInVpLmRpc2FibGVkRGF0ZVwiXHJcbiAgICAgICAgW256TG9jYWxlXT1cInVpLmxvY2FsZVwiXHJcbiAgICAgICAgW256UGxhY2VIb2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxyXG4gICAgICAgIFtuelBvcHVwU3R5bGVdPVwidWkucG9wdXBTdHlsZVwiXHJcbiAgICAgICAgW256RHJvcGRvd25DbGFzc05hbWVdPVwidWkuZHJvcGRvd25DbGFzc05hbWVcIlxyXG4gICAgICAgIChuek9uT3BlbkNoYW5nZSk9XCJfb3BlbkNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICBbbnpSZW5kZXJFeHRyYUZvb3Rlcl09XCJ1aS5yZW5kZXJFeHRyYUZvb3RlclwiXHJcbiAgICAgID48L256LW1vbnRoLXBpY2tlcj5cclxuXHJcbiAgICAgIDxuei13ZWVrLXBpY2tlciAqbmdTd2l0Y2hDYXNlPVwiJ3dlZWsnXCJcclxuICAgICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcclxuICAgICAgICBbbnpGb3JtYXRdPVwiZGlzcGxheUZvcm1hdFwiXHJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJkaXNwbGF5VmFsdWVcIlxyXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIl9jaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgW256QWxsb3dDbGVhcl09XCJpLmFsbG93Q2xlYXJcIlxyXG4gICAgICAgIFtuekNsYXNzTmFtZV09XCJ1aS5jbGFzc05hbWVcIlxyXG4gICAgICAgIFtuekRpc2FibGVkRGF0ZV09XCJ1aS5kaXNhYmxlZERhdGVcIlxyXG4gICAgICAgIFtuekxvY2FsZV09XCJ1aS5sb2NhbGVcIlxyXG4gICAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcclxuICAgICAgICBbbnpQb3B1cFN0eWxlXT1cInVpLnBvcHVwU3R5bGVcIlxyXG4gICAgICAgIFtuekRyb3Bkb3duQ2xhc3NOYW1lXT1cInVpLmRyb3Bkb3duQ2xhc3NOYW1lXCJcclxuICAgICAgICAobnpPbk9wZW5DaGFuZ2UpPVwiX29wZW5DaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgID48L256LXdlZWstcGlja2VyPlxyXG5cclxuICAgICAgPG56LXJhbmdlLXBpY2tlciAqbmdTd2l0Y2hDYXNlPVwiJ3JhbmdlJ1wiXHJcbiAgICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXHJcbiAgICAgICAgW256Rm9ybWF0XT1cImRpc3BsYXlGb3JtYXRcIlxyXG4gICAgICAgIFsobmdNb2RlbCldPVwiZGlzcGxheVZhbHVlXCJcclxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJfY2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIFtuekFsbG93Q2xlYXJdPVwiaS5hbGxvd0NsZWFyXCJcclxuICAgICAgICBbbnpDbGFzc05hbWVdPVwidWkuY2xhc3NOYW1lXCJcclxuICAgICAgICBbbnpEaXNhYmxlZERhdGVdPVwidWkuZGlzYWJsZWREYXRlXCJcclxuICAgICAgICBbbnpMb2NhbGVdPVwidWkubG9jYWxlXCJcclxuICAgICAgICBbbnpQbGFjZUhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXHJcbiAgICAgICAgW256UG9wdXBTdHlsZV09XCJ1aS5wb3B1cFN0eWxlXCJcclxuICAgICAgICBbbnpEcm9wZG93bkNsYXNzTmFtZV09XCJ1aS5kcm9wZG93bkNsYXNzTmFtZVwiXHJcbiAgICAgICAgKG56T25PcGVuQ2hhbmdlKT1cIl9vcGVuQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIFtuekRpc2FibGVkVGltZV09XCJ1aS5kaXNhYmxlZFRpbWVcIlxyXG4gICAgICAgIFtuelJlbmRlckV4dHJhRm9vdGVyXT1cInVpLnJlbmRlckV4dHJhRm9vdGVyXCJcclxuICAgICAgICBbbnpSYW5nZXNdPVwidWkucmFuZ2VzXCJcclxuICAgICAgICAobnpPbk9rKT1cIl9vaygkZXZlbnQpXCJcclxuICAgICAgPjwvbnotcmFuZ2UtcGlja2VyPlxyXG5cclxuICAgICAgPG56LWRhdGUtcGlja2VyICpuZ1N3aXRjaERlZmF1bHRcclxuICAgICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcclxuICAgICAgICBbbnpGb3JtYXRdPVwiZGlzcGxheUZvcm1hdFwiXHJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJkaXNwbGF5VmFsdWVcIlxyXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIl9jaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgW256QWxsb3dDbGVhcl09XCJpLmFsbG93Q2xlYXJcIlxyXG4gICAgICAgIFtuekNsYXNzTmFtZV09XCJ1aS5jbGFzc05hbWVcIlxyXG4gICAgICAgIFtuekRpc2FibGVkRGF0ZV09XCJ1aS5kaXNhYmxlZERhdGVcIlxyXG4gICAgICAgIFtuekxvY2FsZV09XCJ1aS5sb2NhbGVcIlxyXG4gICAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcclxuICAgICAgICBbbnpQb3B1cFN0eWxlXT1cInVpLnBvcHVwU3R5bGVcIlxyXG4gICAgICAgIFtuekRyb3Bkb3duQ2xhc3NOYW1lXT1cInVpLmRyb3Bkb3duQ2xhc3NOYW1lXCJcclxuICAgICAgICAobnpPbk9wZW5DaGFuZ2UpPVwiX29wZW5DaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgW256RGlzYWJsZWRUaW1lXT1cInVpLmRpc2FibGVkVGltZVwiXHJcbiAgICAgICAgW256UmVuZGVyRXh0cmFGb290ZXJdPVwidWkucmVuZGVyRXh0cmFGb290ZXJcIlxyXG4gICAgICAgIFtuelNob3dUaW1lXT1cInVpLnNob3dUaW1lXCJcclxuICAgICAgICBbbnpTaG93VG9kYXldPVwiaS5zaG93VG9kYXlcIlxyXG4gICAgICAgIChuek9uT2spPVwiX29rKCRldmVudClcIlxyXG4gICAgICA+PC9uei1kYXRlLXBpY2tlcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICA8L3NmLWl0ZW0td3JhcD5cclxuICBgLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZVdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIG1vZGU6IHN0cmluZztcclxuICBkaXNwbGF5VmFsdWU6IERhdGUgfCBEYXRlW10gPSBudWxsO1xyXG4gIGRpc3BsYXlGb3JtYXQ6IHN0cmluZztcclxuICBmb3JtYXQ6IHN0cmluZztcclxuICBpOiBhbnk7XHJcbiAgZmxhdFJhbmdlID0gZmFsc2U7XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgdWkgPSB0aGlzLnVpO1xyXG4gICAgdGhpcy5tb2RlID0gdWkubW9kZSB8fCAnZGF0ZSc7XHJcbiAgICB0aGlzLmZsYXRSYW5nZSA9IHVpLmVuZCAhPSBudWxsO1xyXG4gICAgaWYgKHRoaXMuZmxhdFJhbmdlKSB7XHJcbiAgICAgIHRoaXMubW9kZSA9ICdyYW5nZSc7XHJcbiAgICB9XHJcbiAgICBpZiAoIXVpLmRpc3BsYXlGb3JtYXQpIHtcclxuICAgICAgc3dpdGNoICh0aGlzLm1vZGUpIHtcclxuICAgICAgICBjYXNlICdtb250aCc6XHJcbiAgICAgICAgICB0aGlzLmRpc3BsYXlGb3JtYXQgPSBgeXl5eS1NTWA7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICd3ZWVrJzpcclxuICAgICAgICAgIHRoaXMuZGlzcGxheUZvcm1hdCA9IGB5eXl5LXd3YDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRpc3BsYXlGb3JtYXQgPSB1aS5kaXNwbGF5Rm9ybWF0O1xyXG4gICAgfVxyXG4gICAgdGhpcy5mb3JtYXQgPSB1aS5mb3JtYXRcclxuICAgICAgPyB1aS5mb3JtYXRcclxuICAgICAgOiB0aGlzLnNjaGVtYS50eXBlID09PSAnbnVtYmVyJ1xyXG4gICAgICAgID8gJ3gnXHJcbiAgICAgICAgOiAnWVlZWS1NTS1ERCBISDptbTpzcyc7XHJcbiAgICAvLyDlhazlhbFBUElcclxuICAgIHRoaXMuaSA9IHtcclxuICAgICAgYWxsb3dDbGVhcjogdG9Cb29sKHVpLmFsbG93Q2xlYXIsIHRydWUpLFxyXG4gICAgICAvLyBuei1kYXRlLXBpY2tlclxyXG4gICAgICBzaG93VG9kYXk6IHRvQm9vbCh1aS5zaG93VG9kYXksIHRydWUpLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcclxuICAgIGlmICh0aGlzLmZsYXRSYW5nZSkge1xyXG4gICAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IHZhbHVlID09IG51bGwgPyBbXSA6IFt2YWx1ZSwgdGhpcy5lbmRQcm9wZXJ0eS5mb3JtRGF0YV07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2NoYW5nZSh2YWx1ZTogRGF0ZSB8IERhdGVbXSkge1xyXG4gICAgaWYgKHZhbHVlID09IG51bGwpIHtcclxuICAgICAgdGhpcy5zZXRWYWx1ZShudWxsKTtcclxuICAgICAgdGhpcy5zZXRFbmQobnVsbCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXMgPSBBcnJheS5pc0FycmF5KHZhbHVlKVxyXG4gICAgICA/IHZhbHVlLm1hcChkID0+IGZvcm1hdChkLCB0aGlzLmZvcm1hdCkpXHJcbiAgICAgIDogZm9ybWF0KHZhbHVlLCB0aGlzLmZvcm1hdCk7XHJcblxyXG4gICAgaWYgKHRoaXMuZmxhdFJhbmdlKSB7XHJcbiAgICAgIHRoaXMuc2V0RW5kKHJlc1sxXSk7XHJcbiAgICAgIHRoaXMuc2V0VmFsdWUocmVzWzBdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0VmFsdWUocmVzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9vcGVuQ2hhbmdlKHN0YXR1czogYm9vbGVhbikge1xyXG4gICAgaWYgKHRoaXMudWkub25PcGVuQ2hhbmdlKSB0aGlzLnVpLm9uT3BlbkNoYW5nZShzdGF0dXMpO1xyXG4gIH1cclxuXHJcbiAgX29rKHZhbHVlOiBhbnkpIHtcclxuICAgIGlmICh0aGlzLnVpLm9uT2spIHRoaXMudWkub25Payh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldCBlbmRQcm9wZXJ0eSgpOiBGb3JtUHJvcGVydHkge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybVByb3BlcnR5LnBhcmVudC5wcm9wZXJ0aWVzW3RoaXMudWkuZW5kXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0RW5kKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuZW5kUHJvcGVydHkuc2V0VmFsdWUodmFsdWUsIHRydWUpO1xyXG4gIH1cclxufVxyXG4iXX0=