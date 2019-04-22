/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import format from 'date-fns/format';
import { toBool } from '../../utils';
import { ControlWidget } from '../../widget';
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
        // 构建属性对象时会对默认值进行校验，因此可以直接使用 format 作为格式化属性
        this.format = ui.format;
        // 公共API
        this.i = {
            allowClear: toBool(ui.allowClear, true),
            // nz-date-picker
            showToday: toBool(ui.showToday, true),
        };
    }
    /**
     * @private
     * @return {?}
     */
    compCd() {
        // TODO: removed after nz-datepick support OnPush mode
        setTimeout((/**
         * @return {?}
         */
        () => this.detectChanges()));
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
        this.compCd();
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
            ? value.map((/**
             * @param {?} d
             * @return {?}
             */
            d => format(d, this.format)))
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
     * @private
     * @return {?}
     */
    get endProperty() {
        return (/** @type {?} */ ((/** @type {?} */ (this.formProperty.parent)).properties))[this.ui.end];
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    setEnd(value) {
        if (this.flatRange) {
            this.endProperty.setValue(value, true);
        }
    }
    /**
     * @private
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
                template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  <ng-container [ngSwitch]=\"mode\">\n\n    <nz-month-picker *ngSwitchCase=\"'month'\"\n                     [nzDisabled]=\"disabled\"\n                     [nzSize]=\"ui.size\"\n                     [nzFormat]=\"displayFormat\"\n                     [(ngModel)]=\"displayValue\"\n                     (ngModelChange)=\"_change($event)\"\n                     [nzAllowClear]=\"i.allowClear\"\n                     [nzClassName]=\"ui.className\"\n                     [nzDisabledDate]=\"ui.disabledDate\"\n                     [nzLocale]=\"ui.locale\"\n                     [nzPlaceHolder]=\"ui.placeholder\"\n                     [nzPopupStyle]=\"ui.popupStyle\"\n                     [nzDropdownClassName]=\"ui.dropdownClassName\"\n                     (nzOnOpenChange)=\"_openChange($event)\"\n                     [nzRenderExtraFooter]=\"ui.renderExtraFooter\"></nz-month-picker>\n\n    <nz-week-picker *ngSwitchCase=\"'week'\"\n                    [nzDisabled]=\"disabled\"\n                    [nzSize]=\"ui.size\"\n                    [nzFormat]=\"displayFormat\"\n                    [(ngModel)]=\"displayValue\"\n                    (ngModelChange)=\"_change($event)\"\n                    [nzAllowClear]=\"i.allowClear\"\n                    [nzClassName]=\"ui.className\"\n                    [nzDisabledDate]=\"ui.disabledDate\"\n                    [nzLocale]=\"ui.locale\"\n                    [nzPlaceHolder]=\"ui.placeholder\"\n                    [nzPopupStyle]=\"ui.popupStyle\"\n                    [nzDropdownClassName]=\"ui.dropdownClassName\"\n                    (nzOnOpenChange)=\"_openChange($event)\"></nz-week-picker>\n\n    <nz-range-picker *ngSwitchCase=\"'range'\"\n                     [nzDisabled]=\"disabled\"\n                     [nzSize]=\"ui.size\"\n                     [nzFormat]=\"displayFormat\"\n                     [(ngModel)]=\"displayValue\"\n                     (ngModelChange)=\"_change($event)\"\n                     [nzAllowClear]=\"i.allowClear\"\n                     [nzClassName]=\"ui.className\"\n                     [nzDisabledDate]=\"ui.disabledDate\"\n                     [nzLocale]=\"ui.locale\"\n                     [nzPlaceHolder]=\"ui.placeholder\"\n                     [nzPopupStyle]=\"ui.popupStyle\"\n                     [nzDropdownClassName]=\"ui.dropdownClassName\"\n                     (nzOnOpenChange)=\"_openChange($event)\"\n                     [nzDisabledTime]=\"ui.disabledTime\"\n                     [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n                     [nzRanges]=\"ui.ranges\"\n                     [nzShowTime]=\"ui.showTime\"\n                     (nzOnOk)=\"_ok($event)\"></nz-range-picker>\n\n    <nz-date-picker *ngSwitchDefault\n                    [nzDisabled]=\"disabled\"\n                    [nzSize]=\"ui.size\"\n                    [nzFormat]=\"displayFormat\"\n                    [(ngModel)]=\"displayValue\"\n                    (ngModelChange)=\"_change($event)\"\n                    [nzAllowClear]=\"i.allowClear\"\n                    [nzClassName]=\"ui.className\"\n                    [nzDisabledDate]=\"ui.disabledDate\"\n                    [nzLocale]=\"ui.locale\"\n                    [nzPlaceHolder]=\"ui.placeholder\"\n                    [nzPopupStyle]=\"ui.popupStyle\"\n                    [nzDropdownClassName]=\"ui.dropdownClassName\"\n                    (nzOnOpenChange)=\"_openChange($event)\"\n                    [nzDisabledTime]=\"ui.disabledTime\"\n                    [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n                    [nzShowTime]=\"ui.showTime\"\n                    [nzShowToday]=\"i.showToday\"\n                    (nzOnOk)=\"_ok($event)\"></nz-date-picker>\n  </ng-container>\n\n</sf-item-wrap>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS53aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL2RhdGUvZGF0ZS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxNQUFNLE1BQU0saUJBQWlCLENBQUM7QUFHckMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNyQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBTTdDLE1BQU0sT0FBTyxVQUFXLFNBQVEsYUFBYTtJQUo3Qzs7UUFNRSxpQkFBWSxHQUF5QixJQUFJLENBQUM7UUFJMUMsY0FBUyxHQUFHLEtBQUssQ0FBQztJQXlGcEIsQ0FBQzs7OztJQXZGQyxRQUFROztjQUNBLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRTtRQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUM7UUFDaEMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUU7WUFDckIsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNqQixLQUFLLE9BQU87b0JBQ1YsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7b0JBQy9CLE1BQU07Z0JBQ1IsS0FBSyxNQUFNO29CQUNULElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO29CQUMvQixNQUFNO2FBQ1Q7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO1NBQ3ZDO1FBQ0QsMkNB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QUssUUFBUSxJQUFJLENBQUMsT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUM5RSxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxQjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7O1lBbEdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsMjRIQUFpQzthQUNsQzs7OztJQUVDLDBCQUFhOztJQUNiLGtDQUEwQzs7SUFDMUMsbUNBQXNCOztJQUN0Qiw0QkFBZTs7SUFDZix1QkFBTzs7SUFDUCwrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IGZvcm1hdCBmcm9tICdkYXRlLWZucy9mb3JtYXQnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuLi8uLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB7IHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1kYXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGUud2lkZ2V0Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG1vZGU6IHN0cmluZztcbiAgZGlzcGxheVZhbHVlOiBEYXRlIHwgRGF0ZVtdIHwgbnVsbCA9IG51bGw7XG4gIGRpc3BsYXlGb3JtYXQ6IHN0cmluZztcbiAgZm9ybWF0OiBzdHJpbmc7XG4gIGk6IGFueTtcbiAgZmxhdFJhbmdlID0gZmFsc2U7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgdWkgPSB0aGlzLnVpO1xuICAgIHRoaXMubW9kZSA9IHVpLm1vZGUgfHwgJ2RhdGUnO1xuICAgIHRoaXMuZmxhdFJhbmdlID0gdWkuZW5kICE9IG51bGw7XG4gICAgaWYgKHRoaXMuZmxhdFJhbmdlKSB7XG4gICAgICB0aGlzLm1vZGUgPSAncmFuZ2UnO1xuICAgIH1cbiAgICBpZiAoIXVpLmRpc3BsYXlGb3JtYXQpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5tb2RlKSB7XG4gICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICB0aGlzLmRpc3BsYXlGb3JtYXQgPSBgeXl5eS1NTWA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3dlZWsnOlxuICAgICAgICAgIHRoaXMuZGlzcGxheUZvcm1hdCA9IGB5eXl5LXd3YDtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNwbGF5Rm9ybWF0ID0gdWkuZGlzcGxheUZvcm1hdDtcbiAgICB9XG4gICAgLy8g5p6E5bu65bGe5oCn5a+56LGh5pe25Lya5a+56buY6K6k5YC86L+b6KGM5qCh6aqM77yM5Zug5q2k5Y+v5Lul55u05o6l5L2/55SoIGZvcm1hdCDkvZzkuLrmoLzlvI/ljJblsZ7mgKdcbiAgICB0aGlzLmZvcm1hdCA9IHVpLmZvcm1hdDtcbiAgICAvLyDlhazlhbFBUElcbiAgICB0aGlzLmkgPSB7XG4gICAgICBhbGxvd0NsZWFyOiB0b0Jvb2wodWkuYWxsb3dDbGVhciwgdHJ1ZSksXG4gICAgICAvLyBuei1kYXRlLXBpY2tlclxuICAgICAgc2hvd1RvZGF5OiB0b0Jvb2wodWkuc2hvd1RvZGF5LCB0cnVlKSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBjb21wQ2QoKSB7XG4gICAgLy8gVE9ETzogcmVtb3ZlZCBhZnRlciBuei1kYXRlcGljayBzdXBwb3J0IE9uUHVzaCBtb2RlXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmRldGVjdENoYW5nZXMoKSk7XG4gIH1cblxuICByZXNldCh2YWx1ZTogU0ZWYWx1ZSkge1xuICAgIHZhbHVlID0gdGhpcy50b0RhdGUodmFsdWUpO1xuICAgIGlmICh0aGlzLmZsYXRSYW5nZSkge1xuICAgICAgdGhpcy5kaXNwbGF5VmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gW10gOiBbdmFsdWUsIHRoaXMudG9EYXRlKHRoaXMuZW5kUHJvcGVydHkuZm9ybURhdGEpXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNwbGF5VmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5jb21wQ2QoKTtcbiAgfVxuXG4gIF9jaGFuZ2UodmFsdWU6IERhdGUgfCBEYXRlW10gfCBudWxsKSB7XG4gICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUobnVsbCk7XG4gICAgICB0aGlzLnNldEVuZChudWxsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZXMgPSBBcnJheS5pc0FycmF5KHZhbHVlKVxuICAgICAgPyB2YWx1ZS5tYXAoZCA9PiBmb3JtYXQoZCwgdGhpcy5mb3JtYXQpKVxuICAgICAgOiBmb3JtYXQodmFsdWUsIHRoaXMuZm9ybWF0KTtcblxuICAgIGlmICh0aGlzLmZsYXRSYW5nZSkge1xuICAgICAgdGhpcy5zZXRFbmQocmVzWzFdKTtcbiAgICAgIHRoaXMuc2V0VmFsdWUocmVzWzBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRWYWx1ZShyZXMpO1xuICAgIH1cbiAgfVxuXG4gIF9vcGVuQ2hhbmdlKHN0YXR1czogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLnVpLm9uT3BlbkNoYW5nZSkgdGhpcy51aS5vbk9wZW5DaGFuZ2Uoc3RhdHVzKTtcbiAgfVxuXG4gIF9vayh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMudWkub25PaykgdGhpcy51aS5vbk9rKHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGVuZFByb3BlcnR5KCk6IEZvcm1Qcm9wZXJ0eSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybVByb3BlcnR5LnBhcmVudCEucHJvcGVydGllcyFbdGhpcy51aS5lbmRdO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRFbmQodmFsdWU6IHN0cmluZyB8IG51bGwpIHtcbiAgICBpZiAodGhpcy5mbGF0UmFuZ2UpIHtcbiAgICAgIHRoaXMuZW5kUHJvcGVydHkuc2V0VmFsdWUodmFsdWUsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdG9EYXRlKHZhbHVlOiBTRlZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHwgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgIWlzTmFOKCt2YWx1ZSkpKSB7XG4gICAgICB2YWx1ZSA9IG5ldyBEYXRlKCt2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuIl19