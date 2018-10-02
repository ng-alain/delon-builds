/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
import format from 'date-fns/format';
import { toBool } from '../../utils';
var DateWidget = /** @class */ (function (_super) {
    tslib_1.__extends(DateWidget, _super);
    function DateWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.displayValue = null;
        _this.flatRange = false;
        return _this;
    }
    /**
     * @return {?}
     */
    DateWidget.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var ui = this.ui;
        this.mode = ui["mode"] || 'date';
        this.flatRange = ui["end"] != null;
        if (this.flatRange) {
            this.mode = 'range';
        }
        if (!ui["displayFormat"]) {
            switch (this.mode) {
                case 'month':
                    this.displayFormat = "yyyy-MM";
                    break;
                case 'week':
                    this.displayFormat = "yyyy-ww";
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
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DateWidget.prototype.reset = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.flatRange) {
            this.displayValue = value == null ? [] : [value, this.endProperty.formData];
        }
        else {
            this.displayValue = value;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DateWidget.prototype._change = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (value == null) {
            this.setValue(null);
            this.setEnd(null);
            return;
        }
        /** @type {?} */
        var res = Array.isArray(value)
            ? value.map(function (d) { return format(d, _this.format); })
            : format(value, this.format);
        if (this.flatRange) {
            this.setEnd(res[1]);
            this.setValue(res[0]);
        }
        else {
            this.setValue(res);
        }
    };
    /**
     * @param {?} status
     * @return {?}
     */
    DateWidget.prototype._openChange = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        if (this.ui["onOpenChange"])
            this.ui["onOpenChange"](status);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DateWidget.prototype._ok = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.ui["onOk"])
            this.ui["onOk"](value);
    };
    Object.defineProperty(DateWidget.prototype, "endProperty", {
        get: /**
         * @return {?}
         */
        function () {
            return this.formProperty.parent.properties[this.ui["end"]];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    DateWidget.prototype.setEnd = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.endProperty.setValue(value, true);
    };
    DateWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-date',
                    template: "\n  <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n    <ng-container [ngSwitch]=\"mode\">\n\n      <nz-month-picker *ngSwitchCase=\"'month'\"\n        [nzDisabled]=\"disabled\"\n        [nzSize]=\"ui.size\"\n        [nzFormat]=\"displayFormat\"\n        [(ngModel)]=\"displayValue\"\n        (ngModelChange)=\"_change($event)\"\n        [nzAllowClear]=\"i.allowClear\"\n        [nzClassName]=\"ui.className\"\n        [nzDisabledDate]=\"ui.disabledDate\"\n        [nzLocale]=\"ui.locale\"\n        [nzPlaceHolder]=\"ui.placeholder\"\n        [nzPopupStyle]=\"ui.popupStyle\"\n        [nzDropdownClassName]=\"ui.dropdownClassName\"\n        (nzOnOpenChange)=\"_openChange($event)\"\n        [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n      ></nz-month-picker>\n\n      <nz-week-picker *ngSwitchCase=\"'week'\"\n        [nzDisabled]=\"disabled\"\n        [nzSize]=\"ui.size\"\n        [nzFormat]=\"displayFormat\"\n        [(ngModel)]=\"displayValue\"\n        (ngModelChange)=\"_change($event)\"\n        [nzAllowClear]=\"i.allowClear\"\n        [nzClassName]=\"ui.className\"\n        [nzDisabledDate]=\"ui.disabledDate\"\n        [nzLocale]=\"ui.locale\"\n        [nzPlaceHolder]=\"ui.placeholder\"\n        [nzPopupStyle]=\"ui.popupStyle\"\n        [nzDropdownClassName]=\"ui.dropdownClassName\"\n        (nzOnOpenChange)=\"_openChange($event)\"\n      ></nz-week-picker>\n\n      <nz-range-picker *ngSwitchCase=\"'range'\"\n        [nzDisabled]=\"disabled\"\n        [nzSize]=\"ui.size\"\n        [nzFormat]=\"displayFormat\"\n        [(ngModel)]=\"displayValue\"\n        (ngModelChange)=\"_change($event)\"\n        [nzAllowClear]=\"i.allowClear\"\n        [nzClassName]=\"ui.className\"\n        [nzDisabledDate]=\"ui.disabledDate\"\n        [nzLocale]=\"ui.locale\"\n        [nzPlaceHolder]=\"ui.placeholder\"\n        [nzPopupStyle]=\"ui.popupStyle\"\n        [nzDropdownClassName]=\"ui.dropdownClassName\"\n        (nzOnOpenChange)=\"_openChange($event)\"\n        [nzDisabledTime]=\"ui.disabledTime\"\n        [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n        [nzRanges]=\"ui.ranges\"\n        (nzOnOk)=\"_ok($event)\"\n      ></nz-range-picker>\n\n      <nz-date-picker *ngSwitchDefault\n        [nzDisabled]=\"disabled\"\n        [nzSize]=\"ui.size\"\n        [nzFormat]=\"displayFormat\"\n        [(ngModel)]=\"displayValue\"\n        (ngModelChange)=\"_change($event)\"\n        [nzAllowClear]=\"i.allowClear\"\n        [nzClassName]=\"ui.className\"\n        [nzDisabledDate]=\"ui.disabledDate\"\n        [nzLocale]=\"ui.locale\"\n        [nzPlaceHolder]=\"ui.placeholder\"\n        [nzPopupStyle]=\"ui.popupStyle\"\n        [nzDropdownClassName]=\"ui.dropdownClassName\"\n        (nzOnOpenChange)=\"_openChange($event)\"\n        [nzDisabledTime]=\"ui.disabledTime\"\n        [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n        [nzShowTime]=\"ui.showTime\"\n        [nzShowToday]=\"i.showToday\"\n        (nzOnOk)=\"_ok($event)\"\n      ></nz-date-picker>\n    </ng-container>\n\n  </sf-item-wrap>\n  ",
                    preserveWhitespaces: false
                }] }
    ];
    return DateWidget;
}(ControlWidget));
export { DateWidget };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS53aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL2RhdGUvZGF0ZS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0MsT0FBTyxNQUFNLE1BQU0saUJBQWlCLENBQUM7QUFDckMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQzs7SUF3Rkwsc0NBQWE7Ozs2QkFFYixJQUFJOzBCQUl0QixLQUFLOzs7Ozs7SUFFakIsNkJBQVE7OztJQUFSOztRQUNFLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLFlBQVMsTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxXQUFRLElBQUksQ0FBQztRQUNoQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7U0FDckI7UUFDRCxJQUFJLENBQUMsRUFBRSxpQkFBYyxFQUFFO1lBQ3JCLFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDakIsS0FBSyxPQUFPO29CQUNWLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO29CQUMvQixNQUFNO2dCQUNSLEtBQUssTUFBTTtvQkFDVCxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztvQkFDL0IsTUFBTTthQUNUO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxpQkFBYyxDQUFDO1NBQ3ZDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLFdBQ2QsQ0FBQyxDQUFDLEVBQUUsV0FDSixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssUUFBUTtZQUM3QixDQUFDLENBQUMsR0FBRztZQUNMLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQzs7UUFFNUIsSUFBSSxDQUFDLENBQUMsR0FBRztZQUNQLFVBQVUsRUFBRSxNQUFNLENBQUMsRUFBRSxnQkFBYSxJQUFJLENBQUM7O1lBRXZDLFNBQVMsRUFBRSxNQUFNLENBQUMsRUFBRSxlQUFZLElBQUksQ0FBQztTQUN0QyxDQUFDO0tBQ0g7Ozs7O0lBRUQsMEJBQUs7Ozs7SUFBTCxVQUFNLEtBQVU7UUFDZCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDN0U7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQzNCO0tBQ0Y7Ozs7O0lBRUQsNEJBQU87Ozs7SUFBUCxVQUFRLEtBQW9CO1FBQTVCLGlCQWlCQztRQWhCQyxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLE9BQU87U0FDUjs7UUFFRCxJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUM5QixDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLE1BQU0sQ0FBQyxDQUFDLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUF0QixDQUFzQixDQUFDO1lBQ3hDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUvQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3BCO0tBQ0Y7Ozs7O0lBRUQsZ0NBQVc7Ozs7SUFBWCxVQUFZLE1BQWU7UUFDekIsSUFBSSxJQUFJLENBQUMsRUFBRTtZQUFlLElBQUksQ0FBQyxFQUFFLGlCQUFjLE1BQU0sQ0FBQyxDQUFDO0tBQ3hEOzs7OztJQUVELHdCQUFHOzs7O0lBQUgsVUFBSSxLQUFVO1FBQ1osSUFBSSxJQUFJLENBQUMsRUFBRTtZQUFPLElBQUksQ0FBQyxFQUFFLFNBQU0sS0FBSyxDQUFDLENBQUM7S0FDdkM7MEJBRVcsbUNBQVc7Ozs7O1lBQ3JCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQUssQ0FBQzs7Ozs7Ozs7O0lBR2xELDJCQUFNOzs7O2NBQUMsS0FBVTtRQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7OztnQkFySzFDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsUUFBUSxFQUFFLGdqR0FnRlQ7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztpQkFDM0I7O3FCQTFGRDtFQTJGZ0MsYUFBYTtTQUFoQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XHJcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0JztcclxuaW1wb3J0IHsgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuLi8uLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2YtZGF0ZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwibW9kZVwiPlxyXG5cclxuICAgICAgPG56LW1vbnRoLXBpY2tlciAqbmdTd2l0Y2hDYXNlPVwiJ21vbnRoJ1wiXHJcbiAgICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXHJcbiAgICAgICAgW256Rm9ybWF0XT1cImRpc3BsYXlGb3JtYXRcIlxyXG4gICAgICAgIFsobmdNb2RlbCldPVwiZGlzcGxheVZhbHVlXCJcclxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJfY2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIFtuekFsbG93Q2xlYXJdPVwiaS5hbGxvd0NsZWFyXCJcclxuICAgICAgICBbbnpDbGFzc05hbWVdPVwidWkuY2xhc3NOYW1lXCJcclxuICAgICAgICBbbnpEaXNhYmxlZERhdGVdPVwidWkuZGlzYWJsZWREYXRlXCJcclxuICAgICAgICBbbnpMb2NhbGVdPVwidWkubG9jYWxlXCJcclxuICAgICAgICBbbnpQbGFjZUhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXHJcbiAgICAgICAgW256UG9wdXBTdHlsZV09XCJ1aS5wb3B1cFN0eWxlXCJcclxuICAgICAgICBbbnpEcm9wZG93bkNsYXNzTmFtZV09XCJ1aS5kcm9wZG93bkNsYXNzTmFtZVwiXHJcbiAgICAgICAgKG56T25PcGVuQ2hhbmdlKT1cIl9vcGVuQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIFtuelJlbmRlckV4dHJhRm9vdGVyXT1cInVpLnJlbmRlckV4dHJhRm9vdGVyXCJcclxuICAgICAgPjwvbnotbW9udGgtcGlja2VyPlxyXG5cclxuICAgICAgPG56LXdlZWstcGlja2VyICpuZ1N3aXRjaENhc2U9XCInd2VlaydcIlxyXG4gICAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxyXG4gICAgICAgIFtuekZvcm1hdF09XCJkaXNwbGF5Rm9ybWF0XCJcclxuICAgICAgICBbKG5nTW9kZWwpXT1cImRpc3BsYXlWYWx1ZVwiXHJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiX2NoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICBbbnpBbGxvd0NsZWFyXT1cImkuYWxsb3dDbGVhclwiXHJcbiAgICAgICAgW256Q2xhc3NOYW1lXT1cInVpLmNsYXNzTmFtZVwiXHJcbiAgICAgICAgW256RGlzYWJsZWREYXRlXT1cInVpLmRpc2FibGVkRGF0ZVwiXHJcbiAgICAgICAgW256TG9jYWxlXT1cInVpLmxvY2FsZVwiXHJcbiAgICAgICAgW256UGxhY2VIb2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxyXG4gICAgICAgIFtuelBvcHVwU3R5bGVdPVwidWkucG9wdXBTdHlsZVwiXHJcbiAgICAgICAgW256RHJvcGRvd25DbGFzc05hbWVdPVwidWkuZHJvcGRvd25DbGFzc05hbWVcIlxyXG4gICAgICAgIChuek9uT3BlbkNoYW5nZSk9XCJfb3BlbkNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgPjwvbnotd2Vlay1waWNrZXI+XHJcblxyXG4gICAgICA8bnotcmFuZ2UtcGlja2VyICpuZ1N3aXRjaENhc2U9XCIncmFuZ2UnXCJcclxuICAgICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcclxuICAgICAgICBbbnpGb3JtYXRdPVwiZGlzcGxheUZvcm1hdFwiXHJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJkaXNwbGF5VmFsdWVcIlxyXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIl9jaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgW256QWxsb3dDbGVhcl09XCJpLmFsbG93Q2xlYXJcIlxyXG4gICAgICAgIFtuekNsYXNzTmFtZV09XCJ1aS5jbGFzc05hbWVcIlxyXG4gICAgICAgIFtuekRpc2FibGVkRGF0ZV09XCJ1aS5kaXNhYmxlZERhdGVcIlxyXG4gICAgICAgIFtuekxvY2FsZV09XCJ1aS5sb2NhbGVcIlxyXG4gICAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcclxuICAgICAgICBbbnpQb3B1cFN0eWxlXT1cInVpLnBvcHVwU3R5bGVcIlxyXG4gICAgICAgIFtuekRyb3Bkb3duQ2xhc3NOYW1lXT1cInVpLmRyb3Bkb3duQ2xhc3NOYW1lXCJcclxuICAgICAgICAobnpPbk9wZW5DaGFuZ2UpPVwiX29wZW5DaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgW256RGlzYWJsZWRUaW1lXT1cInVpLmRpc2FibGVkVGltZVwiXHJcbiAgICAgICAgW256UmVuZGVyRXh0cmFGb290ZXJdPVwidWkucmVuZGVyRXh0cmFGb290ZXJcIlxyXG4gICAgICAgIFtuelJhbmdlc109XCJ1aS5yYW5nZXNcIlxyXG4gICAgICAgIChuek9uT2spPVwiX29rKCRldmVudClcIlxyXG4gICAgICA+PC9uei1yYW5nZS1waWNrZXI+XHJcblxyXG4gICAgICA8bnotZGF0ZS1waWNrZXIgKm5nU3dpdGNoRGVmYXVsdFxyXG4gICAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxyXG4gICAgICAgIFtuekZvcm1hdF09XCJkaXNwbGF5Rm9ybWF0XCJcclxuICAgICAgICBbKG5nTW9kZWwpXT1cImRpc3BsYXlWYWx1ZVwiXHJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiX2NoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICBbbnpBbGxvd0NsZWFyXT1cImkuYWxsb3dDbGVhclwiXHJcbiAgICAgICAgW256Q2xhc3NOYW1lXT1cInVpLmNsYXNzTmFtZVwiXHJcbiAgICAgICAgW256RGlzYWJsZWREYXRlXT1cInVpLmRpc2FibGVkRGF0ZVwiXHJcbiAgICAgICAgW256TG9jYWxlXT1cInVpLmxvY2FsZVwiXHJcbiAgICAgICAgW256UGxhY2VIb2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxyXG4gICAgICAgIFtuelBvcHVwU3R5bGVdPVwidWkucG9wdXBTdHlsZVwiXHJcbiAgICAgICAgW256RHJvcGRvd25DbGFzc05hbWVdPVwidWkuZHJvcGRvd25DbGFzc05hbWVcIlxyXG4gICAgICAgIChuek9uT3BlbkNoYW5nZSk9XCJfb3BlbkNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICBbbnpEaXNhYmxlZFRpbWVdPVwidWkuZGlzYWJsZWRUaW1lXCJcclxuICAgICAgICBbbnpSZW5kZXJFeHRyYUZvb3Rlcl09XCJ1aS5yZW5kZXJFeHRyYUZvb3RlclwiXHJcbiAgICAgICAgW256U2hvd1RpbWVdPVwidWkuc2hvd1RpbWVcIlxyXG4gICAgICAgIFtuelNob3dUb2RheV09XCJpLnNob3dUb2RheVwiXHJcbiAgICAgICAgKG56T25Payk9XCJfb2soJGV2ZW50KVwiXHJcbiAgICAgID48L256LWRhdGUtcGlja2VyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gIDwvc2YtaXRlbS13cmFwPlxyXG4gIGAsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgbW9kZTogc3RyaW5nO1xyXG4gIGRpc3BsYXlWYWx1ZTogRGF0ZSB8IERhdGVbXSA9IG51bGw7XHJcbiAgZGlzcGxheUZvcm1hdDogc3RyaW5nO1xyXG4gIGZvcm1hdDogc3RyaW5nO1xyXG4gIGk6IGFueTtcclxuICBmbGF0UmFuZ2UgPSBmYWxzZTtcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCB1aSA9IHRoaXMudWk7XHJcbiAgICB0aGlzLm1vZGUgPSB1aS5tb2RlIHx8ICdkYXRlJztcclxuICAgIHRoaXMuZmxhdFJhbmdlID0gdWkuZW5kICE9IG51bGw7XHJcbiAgICBpZiAodGhpcy5mbGF0UmFuZ2UpIHtcclxuICAgICAgdGhpcy5tb2RlID0gJ3JhbmdlJztcclxuICAgIH1cclxuICAgIGlmICghdWkuZGlzcGxheUZvcm1hdCkge1xyXG4gICAgICBzd2l0Y2ggKHRoaXMubW9kZSkge1xyXG4gICAgICAgIGNhc2UgJ21vbnRoJzpcclxuICAgICAgICAgIHRoaXMuZGlzcGxheUZvcm1hdCA9IGB5eXl5LU1NYDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3dlZWsnOlxyXG4gICAgICAgICAgdGhpcy5kaXNwbGF5Rm9ybWF0ID0gYHl5eXktd3dgO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGlzcGxheUZvcm1hdCA9IHVpLmRpc3BsYXlGb3JtYXQ7XHJcbiAgICB9XHJcbiAgICB0aGlzLmZvcm1hdCA9IHVpLmZvcm1hdFxyXG4gICAgICA/IHVpLmZvcm1hdFxyXG4gICAgICA6IHRoaXMuc2NoZW1hLnR5cGUgPT09ICdudW1iZXInXHJcbiAgICAgICAgPyAneCdcclxuICAgICAgICA6ICdZWVlZLU1NLUREIEhIOm1tOnNzJztcclxuICAgIC8vIOWFrOWFsUFQSVxyXG4gICAgdGhpcy5pID0ge1xyXG4gICAgICBhbGxvd0NsZWFyOiB0b0Jvb2wodWkuYWxsb3dDbGVhciwgdHJ1ZSksXHJcbiAgICAgIC8vIG56LWRhdGUtcGlja2VyXHJcbiAgICAgIHNob3dUb2RheTogdG9Cb29sKHVpLnNob3dUb2RheSwgdHJ1ZSksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVzZXQodmFsdWU6IGFueSkge1xyXG4gICAgaWYgKHRoaXMuZmxhdFJhbmdlKSB7XHJcbiAgICAgIHRoaXMuZGlzcGxheVZhbHVlID0gdmFsdWUgPT0gbnVsbCA/IFtdIDogW3ZhbHVlLCB0aGlzLmVuZFByb3BlcnR5LmZvcm1EYXRhXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGlzcGxheVZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfY2hhbmdlKHZhbHVlOiBEYXRlIHwgRGF0ZVtdKSB7XHJcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnNldFZhbHVlKG51bGwpO1xyXG4gICAgICB0aGlzLnNldEVuZChudWxsKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlcyA9IEFycmF5LmlzQXJyYXkodmFsdWUpXHJcbiAgICAgID8gdmFsdWUubWFwKGQgPT4gZm9ybWF0KGQsIHRoaXMuZm9ybWF0KSlcclxuICAgICAgOiBmb3JtYXQodmFsdWUsIHRoaXMuZm9ybWF0KTtcclxuXHJcbiAgICBpZiAodGhpcy5mbGF0UmFuZ2UpIHtcclxuICAgICAgdGhpcy5zZXRFbmQocmVzWzFdKTtcclxuICAgICAgdGhpcy5zZXRWYWx1ZShyZXNbMF0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRWYWx1ZShyZXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX29wZW5DaGFuZ2Uoc3RhdHVzOiBib29sZWFuKSB7XHJcbiAgICBpZiAodGhpcy51aS5vbk9wZW5DaGFuZ2UpIHRoaXMudWkub25PcGVuQ2hhbmdlKHN0YXR1cyk7XHJcbiAgfVxyXG5cclxuICBfb2sodmFsdWU6IGFueSkge1xyXG4gICAgaWYgKHRoaXMudWkub25PaykgdGhpcy51aS5vbk9rKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0IGVuZFByb3BlcnR5KCk6IEZvcm1Qcm9wZXJ0eSB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtUHJvcGVydHkucGFyZW50LnByb3BlcnRpZXNbdGhpcy51aS5lbmRdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRFbmQodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5lbmRQcm9wZXJ0eS5zZXRWYWx1ZSh2YWx1ZSwgdHJ1ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==