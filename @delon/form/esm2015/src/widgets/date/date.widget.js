/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/date/date.widget.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import format from 'date-fns/format';
import { toBool, isDateFns } from '../../utils';
import { ControlUIWidget } from '../../widget';
export class DateWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.flatRange = false;
        this.displayValue = null;
    }
    /**
     * @private
     * @return {?}
     */
    get zorroI18n() {
        return this.injector.get(NzI18nService);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // tslint:disable-next-line: no-shadowed-variable
        const { mode, end, displayFormat, format, allowClear, showToday } = this.ui;
        this.mode = mode || 'date';
        this.flatRange = end != null;
        if (this.flatRange) {
            this.mode = 'range';
        }
        if (!displayFormat) {
            /** @type {?} */
            const usingDateFns = isDateFns(this.zorroI18n);
            switch (this.mode) {
                case 'year':
                    this.displayFormat = usingDateFns ? `YYYY` : `yyyy`;
                    break;
                case 'month':
                    this.displayFormat = usingDateFns ? `YYYY-MM` : `yyyy-MM`;
                    break;
                case 'week':
                    this.displayFormat = usingDateFns ? `YYYY-WW` : `yyyy-ww`;
                    break;
            }
        }
        else {
            this.displayFormat = displayFormat;
        }
        // 构建属性对象时会对默认值进行校验，因此可以直接使用 format 作为格式化属性
        this.valueFormat = (/** @type {?} */ (format));
        this.i = {
            allowClear: toBool(allowClear, true),
            // nz-date-picker
            showToday: toBool(showToday, true),
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
        this.detectChanges();
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
        const res = Array.isArray(value) ? value.map((/**
         * @param {?} d
         * @return {?}
         */
        d => format(d, this.valueFormat))) : format(value, this.valueFormat);
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
        return (/** @type {?} */ ((/** @type {?} */ (this.formProperty.parent)).properties))[(/** @type {?} */ (this.ui.end))];
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
                template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  <ng-container [ngSwitch]=\"mode\">\n\n    <nz-year-picker *ngSwitchCase=\"'year'\"\n                    [nzDisabled]=\"disabled\"\n                    [nzSize]=\"ui.size\"\n                    [nzFormat]=\"displayFormat\"\n                    [(ngModel)]=\"displayValue\"\n                    (ngModelChange)=\"_change($event)\"\n                    [nzAllowClear]=\"i.allowClear\"\n                    [nzClassName]=\"ui.className\"\n                    [nzDisabledDate]=\"ui.disabledDate\"\n                    [nzLocale]=\"ui.locale\"\n                    [nzPlaceHolder]=\"ui.placeholder\"\n                    [nzPopupStyle]=\"ui.popupStyle\"\n                    [nzDropdownClassName]=\"ui.dropdownClassName\"\n                    (nzOnOpenChange)=\"_openChange($event)\"\n                    [nzRenderExtraFooter]=\"ui.renderExtraFooter\"></nz-year-picker>\n\n    <nz-month-picker *ngSwitchCase=\"'month'\"\n                     [nzDisabled]=\"disabled\"\n                     [nzSize]=\"ui.size\"\n                     [nzFormat]=\"displayFormat\"\n                     [(ngModel)]=\"displayValue\"\n                     (ngModelChange)=\"_change($event)\"\n                     [nzAllowClear]=\"i.allowClear\"\n                     [nzClassName]=\"ui.className\"\n                     [nzDisabledDate]=\"ui.disabledDate\"\n                     [nzLocale]=\"ui.locale\"\n                     [nzPlaceHolder]=\"ui.placeholder\"\n                     [nzPopupStyle]=\"ui.popupStyle\"\n                     [nzDropdownClassName]=\"ui.dropdownClassName\"\n                     (nzOnOpenChange)=\"_openChange($event)\"\n                     [nzRenderExtraFooter]=\"ui.renderExtraFooter\"></nz-month-picker>\n\n    <nz-week-picker *ngSwitchCase=\"'week'\"\n                    [nzDisabled]=\"disabled\"\n                    [nzSize]=\"ui.size\"\n                    [nzFormat]=\"displayFormat\"\n                    [(ngModel)]=\"displayValue\"\n                    (ngModelChange)=\"_change($event)\"\n                    [nzAllowClear]=\"i.allowClear\"\n                    [nzClassName]=\"ui.className\"\n                    [nzDisabledDate]=\"ui.disabledDate\"\n                    [nzLocale]=\"ui.locale\"\n                    [nzPlaceHolder]=\"ui.placeholder\"\n                    [nzPopupStyle]=\"ui.popupStyle\"\n                    [nzDropdownClassName]=\"ui.dropdownClassName\"\n                    (nzOnOpenChange)=\"_openChange($event)\"></nz-week-picker>\n\n    <nz-range-picker *ngSwitchCase=\"'range'\"\n                     [nzDisabled]=\"disabled\"\n                     [nzSize]=\"ui.size\"\n                     [nzFormat]=\"displayFormat\"\n                     [(ngModel)]=\"displayValue\"\n                     (ngModelChange)=\"_change($event)\"\n                     [nzAllowClear]=\"i.allowClear\"\n                     [nzClassName]=\"ui.className\"\n                     [nzDisabledDate]=\"ui.disabledDate\"\n                     [nzLocale]=\"ui.locale\"\n                     [nzPlaceHolder]=\"ui.placeholder\"\n                     [nzPopupStyle]=\"ui.popupStyle\"\n                     [nzDropdownClassName]=\"ui.dropdownClassName\"\n                     (nzOnOpenChange)=\"_openChange($event)\"\n                     [nzDisabledTime]=\"ui.disabledTime\"\n                     [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n                     [nzRanges]=\"ui.ranges\"\n                     [nzShowTime]=\"ui.showTime\"\n                     (nzOnOk)=\"_ok($event)\"></nz-range-picker>\n\n    <nz-date-picker *ngSwitchDefault\n                    [nzDisabled]=\"disabled\"\n                    [nzSize]=\"ui.size\"\n                    [nzFormat]=\"displayFormat\"\n                    [(ngModel)]=\"displayValue\"\n                    (ngModelChange)=\"_change($event)\"\n                    [nzAllowClear]=\"i.allowClear\"\n                    [nzClassName]=\"ui.className\"\n                    [nzDisabledDate]=\"ui.disabledDate\"\n                    [nzLocale]=\"ui.locale\"\n                    [nzPlaceHolder]=\"ui.placeholder\"\n                    [nzPopupStyle]=\"ui.popupStyle\"\n                    [nzDropdownClassName]=\"ui.dropdownClassName\"\n                    (nzOnOpenChange)=\"_openChange($event)\"\n                    [nzDisabledTime]=\"ui.disabledTime\"\n                    [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n                    [nzShowTime]=\"ui.showTime\"\n                    [nzShowToday]=\"i.showToday\"\n                    (nzOnOk)=\"_ok($event)\"></nz-date-picker>\n  </ng-container>\n\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DateWidget.prototype.valueFormat;
    /**
     * @type {?}
     * @private
     */
    DateWidget.prototype.flatRange;
    /** @type {?} */
    DateWidget.prototype.mode;
    /** @type {?} */
    DateWidget.prototype.displayValue;
    /** @type {?} */
    DateWidget.prototype.displayFormat;
    /** @type {?} */
    DateWidget.prototype.i;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS53aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL2RhdGUvZGF0ZS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQztBQUdyQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBUy9DLE1BQU0sT0FBTyxVQUFXLFNBQVEsZUFBbUM7SUFObkU7O1FBUVUsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUUxQixpQkFBWSxHQUF5QixJQUFJLENBQUM7SUE0RjVDLENBQUM7Ozs7O0lBeEZDLElBQVksU0FBUztRQUNuQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFnQixhQUFhLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7O0lBRUQsUUFBUTs7Y0FFQSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUU7UUFDM0UsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQztRQUM3QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7U0FDckI7UUFDRCxJQUFJLENBQUMsYUFBYSxFQUFFOztrQkFDWixZQUFZLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFD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LENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBQyxDQUFDLFVBQVUsRUFBQyxDQUFDLG1CQUFBLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7Ozs7SUFFTyxNQUFNLENBQUMsS0FBb0I7UUFDakMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUM7Ozs7OztJQUVPLE1BQU0sQ0FBQyxLQUFjO1FBQzNCLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLENBQUMsT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUM5RSxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxQjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7O1lBckdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsd3NKQUFpQztnQkFDakMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7Ozs7SUFFQyxpQ0FBNEI7Ozs7O0lBQzVCLCtCQUEwQjs7SUFDMUIsMEJBQWE7O0lBQ2Isa0NBQTBDOztJQUMxQyxtQ0FBc0I7O0lBQ3RCLHVCQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0JztcbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi4vLi4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyB0b0Jvb2wsIGlzRGF0ZUZucyB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBTRkRhdGVXaWRnZXRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWRhdGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS53aWRnZXQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFVJV2lkZ2V0PFNGRGF0ZVdpZGdldFNjaGVtYT4gaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIHZhbHVlRm9ybWF0OiBzdHJpbmc7XG4gIHByaXZhdGUgZmxhdFJhbmdlID0gZmFsc2U7XG4gIG1vZGU6IHN0cmluZztcbiAgZGlzcGxheVZhbHVlOiBEYXRlIHwgRGF0ZVtdIHwgbnVsbCA9IG51bGw7XG4gIGRpc3BsYXlGb3JtYXQ6IHN0cmluZztcbiAgaTogYW55O1xuXG4gIHByaXZhdGUgZ2V0IHpvcnJvSTE4bigpOiBOekkxOG5TZXJ2aWNlIHtcbiAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQ8TnpJMThuU2VydmljZT4oTnpJMThuU2VydmljZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXNoYWRvd2VkLXZhcmlhYmxlXG4gICAgY29uc3QgeyBtb2RlLCBlbmQsIGRpc3BsYXlGb3JtYXQsIGZvcm1hdCwgYWxsb3dDbGVhciwgc2hvd1RvZGF5IH0gPSB0aGlzLnVpO1xuICAgIHRoaXMubW9kZSA9IG1vZGUgfHwgJ2RhdGUnO1xuICAgIHRoaXMuZmxhdFJhbmdlID0gZW5kICE9IG51bGw7XG4gICAgaWYgKHRoaXMuZmxhdFJhbmdlKSB7XG4gICAgICB0aGlzLm1vZGUgPSAncmFuZ2UnO1xuICAgIH1cbiAgICBpZiAoIWRpc3BsYXlGb3JtYXQpIHtcbiAgICAgIGNvbnN0IHVzaW5nRGF0ZUZucyA9IGlzRGF0ZUZucyh0aGlzLnpvcnJvSTE4bik7XG4gICAgICBzd2l0Y2ggKHRoaXMubW9kZSkge1xuICAgICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgICB0aGlzLmRpc3BsYXlGb3JtYXQgPSB1c2luZ0RhdGVGbnMgPyBgWVlZWWAgOiBgeXl5eWA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICB0aGlzLmRpc3BsYXlGb3JtYXQgPSB1c2luZ0RhdGVGbnMgPyBgWVlZWS1NTWAgOiBgeXl5eS1NTWA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3dlZWsnOlxuICAgICAgICAgIHRoaXMuZGlzcGxheUZvcm1hdCA9IHVzaW5nRGF0ZUZucyA/IGBZWVlZLVdXYCA6IGB5eXl5LXd3YDtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNwbGF5Rm9ybWF0ID0gZGlzcGxheUZvcm1hdDtcbiAgICB9XG4gICAgLy8g5p6E5bu65bGe5oCn5a+56LGh5pe25Lya5a+56buY6K6k5YC86L+b6KGM5qCh6aqM77yM5Zug5q2k5Y+v5Lul55u05o6l5L2/55SoIGZvcm1hdCDkvZzkuLrmoLzlvI/ljJblsZ7mgKdcbiAgICB0aGlzLnZhbHVlRm9ybWF0ID0gZm9ybWF0ITtcbiAgICB0aGlzLmkgPSB7XG4gICAgICBhbGxvd0NsZWFyOiB0b0Jvb2woYWxsb3dDbGVhciwgdHJ1ZSksXG4gICAgICAvLyBuei1kYXRlLXBpY2tlclxuICAgICAgc2hvd1RvZGF5OiB0b0Jvb2woc2hvd1RvZGF5LCB0cnVlKSxcbiAgICB9O1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IFNGVmFsdWUpIHtcbiAgICB2YWx1ZSA9IHRoaXMudG9EYXRlKHZhbHVlKTtcbiAgICBpZiAodGhpcy5mbGF0UmFuZ2UpIHtcbiAgICAgIHRoaXMuZGlzcGxheVZhbHVlID0gdmFsdWUgPT0gbnVsbCA/IFtdIDogW3ZhbHVlLCB0aGlzLnRvRGF0ZSh0aGlzLmVuZFByb3BlcnR5LmZvcm1EYXRhKV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGlzcGxheVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgX2NoYW5nZSh2YWx1ZTogRGF0ZSB8IERhdGVbXSB8IG51bGwpIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRWYWx1ZShudWxsKTtcbiAgICAgIHRoaXMuc2V0RW5kKG51bGwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlcyA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUubWFwKGQgPT4gZm9ybWF0KGQsIHRoaXMudmFsdWVGb3JtYXQpKSA6IGZvcm1hdCh2YWx1ZSwgdGhpcy52YWx1ZUZvcm1hdCk7XG5cbiAgICBpZiAodGhpcy5mbGF0UmFuZ2UpIHtcbiAgICAgIHRoaXMuc2V0RW5kKHJlc1sxXSk7XG4gICAgICB0aGlzLnNldFZhbHVlKHJlc1swXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUocmVzKTtcbiAgICB9XG4gIH1cblxuICBfb3BlbkNoYW5nZShzdGF0dXM6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy51aS5vbk9wZW5DaGFuZ2UpIHRoaXMudWkub25PcGVuQ2hhbmdlKHN0YXR1cyk7XG4gIH1cblxuICBfb2sodmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLnVpLm9uT2spIHRoaXMudWkub25Payh2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIGdldCBlbmRQcm9wZXJ0eSgpOiBGb3JtUHJvcGVydHkge1xuICAgIHJldHVybiB0aGlzLmZvcm1Qcm9wZXJ0eS5wYXJlbnQhLnByb3BlcnRpZXMhW3RoaXMudWkuZW5kIV07XG4gIH1cblxuICBwcml2YXRlIHNldEVuZCh2YWx1ZTogc3RyaW5nIHwgbnVsbCkge1xuICAgIGlmICh0aGlzLmZsYXRSYW5nZSkge1xuICAgICAgdGhpcy5lbmRQcm9wZXJ0eS5zZXRWYWx1ZSh2YWx1ZSwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0b0RhdGUodmFsdWU6IFNGVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyB8fCAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhaXNOYU4oK3ZhbHVlKSkpIHtcbiAgICAgIHZhbHVlID0gbmV3IERhdGUoK3ZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59XG4iXX0=