/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import format from 'date-fns/format';
import { toBool } from '../../utils';
import { ControlWidget } from '../../widget';
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
        this.mode = ui.mode || 'date';
        this.flatRange = ui.end != null;
        if (this.flatRange) {
            this.mode = 'range';
        }
        if (!ui.displayFormat) {
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
            this.displayFormat = ui.displayFormat;
        }
        this.format = ui.format ? ui.format : this.schema.type === 'number' ? 'x' : 'YYYY-MM-DD HH:mm:ss';
        // 公共API
        this.i = {
            allowClear: toBool(ui.allowClear, true),
            // nz-date-picker
            showToday: toBool(ui.showToday, true),
        };
    };
    /**
     * @return {?}
     */
    DateWidget.prototype.compCd = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // TODO: removed after nz-datepick support OnPush mode
        setTimeout(function () { return _this.detectChanges(); });
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
        value = this.toDate(value);
        if (this.flatRange) {
            this.displayValue = value == null ? [] : [value, this.toDate(this.endProperty.formData)];
        }
        else {
            this.displayValue = value;
        }
        this.compCd();
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
        var res = Array.isArray(value) ? value.map(function (d) { return format(d, _this.format); }) : format(value, this.format);
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
        if (this.ui.onOpenChange)
            this.ui.onOpenChange(status);
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    DateWidget.prototype._ok = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.ui.onOk)
            this.ui.onOk(value);
    };
    Object.defineProperty(DateWidget.prototype, "endProperty", {
        get: /**
         * @return {?}
         */
        function () {
            return this.formProperty.parent.properties[this.ui.end];
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
    /**
     * @param {?} value
     * @return {?}
     */
    DateWidget.prototype.toDate = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (typeof value === 'number' || (typeof value === 'string' && !isNaN(+value))) {
            value = new Date(+value);
        }
        return value;
    };
    DateWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-date',
                    template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <ng-container [ngSwitch]=\"mode\">\n\n    <nz-month-picker *ngSwitchCase=\"'month'\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [nzClassName]=\"ui.className\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale\"\n      [nzPlaceHolder]=\"ui.placeholder\"\n      [nzPopupStyle]=\"ui.popupStyle\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n      [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n    ></nz-month-picker>\n\n    <nz-week-picker *ngSwitchCase=\"'week'\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [nzClassName]=\"ui.className\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale\"\n      [nzPlaceHolder]=\"ui.placeholder\"\n      [nzPopupStyle]=\"ui.popupStyle\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n    ></nz-week-picker>\n\n    <nz-range-picker *ngSwitchCase=\"'range'\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [nzClassName]=\"ui.className\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale\"\n      [nzPlaceHolder]=\"ui.placeholder\"\n      [nzPopupStyle]=\"ui.popupStyle\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n      [nzDisabledTime]=\"ui.disabledTime\"\n      [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n      [nzRanges]=\"ui.ranges\"\n      [nzShowTime]=\"ui.showTime\"\n      (nzOnOk)=\"_ok($event)\"\n    ></nz-range-picker>\n\n    <nz-date-picker *ngSwitchDefault\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [nzClassName]=\"ui.className\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale\"\n      [nzPlaceHolder]=\"ui.placeholder\"\n      [nzPopupStyle]=\"ui.popupStyle\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n      [nzDisabledTime]=\"ui.disabledTime\"\n      [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n      [nzShowTime]=\"ui.showTime\"\n      [nzShowToday]=\"i.showToday\"\n      (nzOnOk)=\"_ok($event)\"\n    ></nz-date-picker>\n  </ng-container>\n\n</sf-item-wrap>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS53aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL2RhdGUvZGF0ZS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sTUFBTSxNQUFNLGlCQUFpQixDQUFDO0FBR3JDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDckMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUU3QztJQUlnQyxzQ0FBYTtJQUo3QztRQUFBLHFFQWdHQztRQTFGQyxrQkFBWSxHQUFrQixJQUFJLENBQUM7UUFLbkMsZUFBUyxHQUFHLEtBQUssQ0FBQzs7SUFxRnBCLENBQUM7Ozs7SUFuRkMsNkJBQVE7OztJQUFSOztZQUNRLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRTtRQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUM7UUFDaEMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUU7WUFDckIsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNqQixLQUFLLE9BQU87b0JBQ1YsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7b0JBQy9CLE1BQU07Z0JBQ1IsS0FBSyxNQUFNO29CQUNULElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO29CQUMvQixNQUFNO2FBQ1Q7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO1NBQ3ZD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QztRQUMxRCxDQUFDOzs7T0FBQTs7Ozs7SUFFTywyQkFBTTs7OztJQUFkLFVBQWUsS0FBYTtRQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFTywyQkFBTTs7OztJQUFkLFVBQWUsS0FBYztRQUMzQixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxDQUFDLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDOUUsS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDMUI7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7O2dCQS9GRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLG84RkFBaUM7aUJBQ2xDOztJQTZGRCxpQkFBQztDQUFBLEFBaEdELENBSWdDLGFBQWEsR0E0RjVDO1NBNUZZLFVBQVU7OztJQUNyQiwwQkFBYTs7SUFDYixrQ0FBbUM7O0lBQ25DLG1DQUFzQjs7SUFDdEIsNEJBQWU7O0lBRWYsdUJBQU87O0lBQ1AsK0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0JztcbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi4vLi4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtZGF0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlLndpZGdldC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBtb2RlOiBzdHJpbmc7XG4gIGRpc3BsYXlWYWx1ZTogRGF0ZSB8IERhdGVbXSA9IG51bGw7XG4gIGRpc3BsYXlGb3JtYXQ6IHN0cmluZztcbiAgZm9ybWF0OiBzdHJpbmc7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgaTogYW55O1xuICBmbGF0UmFuZ2UgPSBmYWxzZTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB1aSA9IHRoaXMudWk7XG4gICAgdGhpcy5tb2RlID0gdWkubW9kZSB8fCAnZGF0ZSc7XG4gICAgdGhpcy5mbGF0UmFuZ2UgPSB1aS5lbmQgIT0gbnVsbDtcbiAgICBpZiAodGhpcy5mbGF0UmFuZ2UpIHtcbiAgICAgIHRoaXMubW9kZSA9ICdyYW5nZSc7XG4gICAgfVxuICAgIGlmICghdWkuZGlzcGxheUZvcm1hdCkge1xuICAgICAgc3dpdGNoICh0aGlzLm1vZGUpIHtcbiAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgIHRoaXMuZGlzcGxheUZvcm1hdCA9IGB5eXl5LU1NYDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnd2Vlayc6XG4gICAgICAgICAgdGhpcy5kaXNwbGF5Rm9ybWF0ID0gYHl5eXktd3dgO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpc3BsYXlGb3JtYXQgPSB1aS5kaXNwbGF5Rm9ybWF0O1xuICAgIH1cbiAgICB0aGlzLmZvcm1hdCA9IHVpLmZvcm1hdCA/IHVpLmZvcm1hdCA6IHRoaXMuc2NoZW1hLnR5cGUgPT09ICdudW1iZXInID8gJ3gnIDogJ1lZWVktTU0tREQgSEg6bW06c3MnO1xuICAgIC8vIOWFrOWFsUFQSVxuICAgIHRoaXMuaSA9IHtcbiAgICAgIGFsbG93Q2xlYXI6IHRvQm9vbCh1aS5hbGxvd0NsZWFyLCB0cnVlKSxcbiAgICAgIC8vIG56LWRhdGUtcGlja2VyXG4gICAgICBzaG93VG9kYXk6IHRvQm9vbCh1aS5zaG93VG9kYXksIHRydWUpLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGNvbXBDZCgpIHtcbiAgICAvLyBUT0RPOiByZW1vdmVkIGFmdGVyIG56LWRhdGVwaWNrIHN1cHBvcnQgT25QdXNoIG1vZGVcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKSB7XG4gICAgdmFsdWUgPSB0aGlzLnRvRGF0ZSh2YWx1ZSk7XG4gICAgaWYgKHRoaXMuZmxhdFJhbmdlKSB7XG4gICAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IHZhbHVlID09IG51bGwgPyBbXSA6IFt2YWx1ZSwgdGhpcy50b0RhdGUodGhpcy5lbmRQcm9wZXJ0eS5mb3JtRGF0YSldO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICB0aGlzLmNvbXBDZCgpO1xuICB9XG5cbiAgX2NoYW5nZSh2YWx1ZTogRGF0ZSB8IERhdGVbXSkge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKG51bGwpO1xuICAgICAgdGhpcy5zZXRFbmQobnVsbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVzID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZS5tYXAoZCA9PiBmb3JtYXQoZCwgdGhpcy5mb3JtYXQpKSA6IGZvcm1hdCh2YWx1ZSwgdGhpcy5mb3JtYXQpO1xuXG4gICAgaWYgKHRoaXMuZmxhdFJhbmdlKSB7XG4gICAgICB0aGlzLnNldEVuZChyZXNbMV0pO1xuICAgICAgdGhpcy5zZXRWYWx1ZShyZXNbMF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHJlcyk7XG4gICAgfVxuICB9XG5cbiAgX29wZW5DaGFuZ2Uoc3RhdHVzOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMudWkub25PcGVuQ2hhbmdlKSB0aGlzLnVpLm9uT3BlbkNoYW5nZShzdGF0dXMpO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBfb2sodmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLnVpLm9uT2spIHRoaXMudWkub25Payh2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIGdldCBlbmRQcm9wZXJ0eSgpOiBGb3JtUHJvcGVydHkge1xuICAgIHJldHVybiB0aGlzLmZvcm1Qcm9wZXJ0eS5wYXJlbnQucHJvcGVydGllc1t0aGlzLnVpLmVuZF07XG4gIH1cblxuICBwcml2YXRlIHNldEVuZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5lbmRQcm9wZXJ0eS5zZXRWYWx1ZSh2YWx1ZSwgdHJ1ZSk7XG4gIH1cblxuICBwcml2YXRlIHRvRGF0ZSh2YWx1ZTogU0ZWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8ICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICFpc05hTigrdmFsdWUpKSkge1xuICAgICAgdmFsdWUgPSBuZXcgRGF0ZSgrdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cbiJdfQ==