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
        const { mode, end, displayFormat, allowClear, showToday } = this.ui;
        this.mode = mode || 'date';
        this.flatRange = end != null;
        // 构建属性对象时会对默认值进行校验，因此可以直接使用 format 作为格式化属性
        this.startFormat = (/** @type {?} */ (this.ui._format));
        if (this.flatRange) {
            this.mode = 'range';
            /** @type {?} */
            const endUi = (/** @type {?} */ (this.endProperty.ui));
            this.endFormat = endUi.format ? endUi._format : this.startFormat;
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
        if (value == null || ((/** @type {?} */ (value))).length < 2) {
            this.setValue(null);
            this.setEnd(null);
            return;
        }
        /** @type {?} */
        const res = Array.isArray(value)
            ? [format(value[0], this.startFormat), format(value[1], this.endFormat || this.startFormat)]
            : format(value, this.startFormat);
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
        if (!this.flatRange)
            return;
        this.endProperty.setValue(value, true);
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
    DateWidget.prototype.startFormat;
    /**
     * @type {?}
     * @private
     */
    DateWidget.prototype.endFormat;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS53aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL2RhdGUvZGF0ZS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQztBQUdyQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBUy9DLE1BQU0sT0FBTyxVQUFXLFNBQVEsZUFBbUM7SUFObkU7O1FBU1UsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUUxQixpQkFBWSxHQUF5QixJQUFJLENBQUM7SUErRjVDLENBQUM7Ozs7O0lBM0ZDLElBQVksU0FBUztRQUNuQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFnQixhQUFhLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7O0lBRUQsUUFBUTtjQUNBLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFO1FBQ25FLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUM7UUFDN0IsMkNBQTJDO1FBQzNDLElBQUksQ0FBQyxXQUFXLEdBQUcsbUJBQUEsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUMsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7O2tCQUNkLEtBQUssR0FBRyxtQkFBQSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBc0I7WUFDdkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ2xFO1FBQ0QsSUFBSSxDQUFDLGFBQWEsRUFBRTs7a0JBQ1osWUFBWSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQzlDLFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDakIsS0FBSyxNQUFNO29CQUNULElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztvQkFDcEQsTUFBTTtnQkFDUixLQUFLLE9BQU87b0JBQ1YsSUFBSSxDQUFDLGFBQWEsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO29CQUMxRCxNQUFNO2dCQUNSLEtBQUssTUFBTTtvQkFDVCxJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7b0JBQzFELE1BQU07YUFDVDtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztTQUNwQztRQUNELElBQUksQ0FBQyxDQUFDLEdBQUc7WUFDUCxVQUFVLEVBQUUsTUFBTSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7O1lBRXBDLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQztTQUNuQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxLQUFLLENBQUMsS0FBYztRQUNsQixLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQzFGO2FBQU07WUFDTCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztTQUMzQjtRQUNELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxLQUEyQjtRQUNqQyxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxtQkFBUSxLQUFLLEVBQUEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDL0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLE9BQU87U0FDUjs7Y0FFSyxHQUFHLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDOUIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM1RixDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDO1FBRW5DLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkI7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDcEI7SUFDSCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxNQUFlO1FBQ3pCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFFRCxHQUFHLENBQUMsS0FBVTtRQUNaLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFFRCxJQUFZLFdBQVc7UUFDckIsT0FBTyxtQkFBQSxtQkFBQSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBQyxDQUFDLFVBQVUsRUFBQyxDQUFDLG1CQUFBLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7Ozs7SUFFTyxNQUFNLENBQUMsS0FBb0I7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztRQUU1QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Ozs7O0lBRU8sTUFBTSxDQUFDLEtBQWM7UUFDM0IsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksQ0FBQyxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzlFLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFCO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7WUF6R0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQix3c0pBQWlDO2dCQUNqQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7Ozs7OztJQUVDLGlDQUE0Qjs7Ozs7SUFDNUIsK0JBQTBCOzs7OztJQUMxQiwrQkFBMEI7O0lBQzFCLDBCQUFhOztJQUNiLGtDQUEwQzs7SUFDMUMsbUNBQXNCOztJQUN0Qix1QkFBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5pbXBvcnQgZm9ybWF0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4uLy4uL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgdG9Cb29sLCBpc0RhdGVGbnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBDb250cm9sVUlXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZEYXRlV2lkZ2V0U2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1kYXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGUud2lkZ2V0Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVdpZGdldCBleHRlbmRzIENvbnRyb2xVSVdpZGdldDxTRkRhdGVXaWRnZXRTY2hlbWE+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBzdGFydEZvcm1hdDogc3RyaW5nO1xuICBwcml2YXRlIGVuZEZvcm1hdDogc3RyaW5nO1xuICBwcml2YXRlIGZsYXRSYW5nZSA9IGZhbHNlO1xuICBtb2RlOiBzdHJpbmc7XG4gIGRpc3BsYXlWYWx1ZTogRGF0ZSB8IERhdGVbXSB8IG51bGwgPSBudWxsO1xuICBkaXNwbGF5Rm9ybWF0OiBzdHJpbmc7XG4gIGk6IGFueTtcblxuICBwcml2YXRlIGdldCB6b3Jyb0kxOG4oKTogTnpJMThuU2VydmljZSB7XG4gICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0PE56STE4blNlcnZpY2U+KE56STE4blNlcnZpY2UpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBtb2RlLCBlbmQsIGRpc3BsYXlGb3JtYXQsIGFsbG93Q2xlYXIsIHNob3dUb2RheSB9ID0gdGhpcy51aTtcbiAgICB0aGlzLm1vZGUgPSBtb2RlIHx8ICdkYXRlJztcbiAgICB0aGlzLmZsYXRSYW5nZSA9IGVuZCAhPSBudWxsO1xuICAgIC8vIOaehOW7uuWxnuaAp+WvueixoeaXtuS8muWvuem7mOiupOWAvOi/m+ihjOagoemqjO+8jOWboOatpOWPr+S7peebtOaOpeS9v+eUqCBmb3JtYXQg5L2c5Li65qC85byP5YyW5bGe5oCnXG4gICAgdGhpcy5zdGFydEZvcm1hdCA9IHRoaXMudWkuX2Zvcm1hdCE7XG4gICAgaWYgKHRoaXMuZmxhdFJhbmdlKSB7XG4gICAgICB0aGlzLm1vZGUgPSAncmFuZ2UnO1xuICAgICAgY29uc3QgZW5kVWkgPSB0aGlzLmVuZFByb3BlcnR5LnVpIGFzIFNGRGF0ZVdpZGdldFNjaGVtYTtcbiAgICAgIHRoaXMuZW5kRm9ybWF0ID0gZW5kVWkuZm9ybWF0ID8gZW5kVWkuX2Zvcm1hdCA6IHRoaXMuc3RhcnRGb3JtYXQ7XG4gICAgfVxuICAgIGlmICghZGlzcGxheUZvcm1hdCkge1xuICAgICAgY29uc3QgdXNpbmdEYXRlRm5zID0gaXNEYXRlRm5zKHRoaXMuem9ycm9JMThuKTtcbiAgICAgIHN3aXRjaCAodGhpcy5tb2RlKSB7XG4gICAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICAgIHRoaXMuZGlzcGxheUZvcm1hdCA9IHVzaW5nRGF0ZUZucyA/IGBZWVlZYCA6IGB5eXl5YDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgIHRoaXMuZGlzcGxheUZvcm1hdCA9IHVzaW5nRGF0ZUZucyA/IGBZWVlZLU1NYCA6IGB5eXl5LU1NYDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnd2Vlayc6XG4gICAgICAgICAgdGhpcy5kaXNwbGF5Rm9ybWF0ID0gdXNpbmdEYXRlRm5zID8gYFlZWVktV1dgIDogYHl5eXktd3dgO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpc3BsYXlGb3JtYXQgPSBkaXNwbGF5Rm9ybWF0O1xuICAgIH1cbiAgICB0aGlzLmkgPSB7XG4gICAgICBhbGxvd0NsZWFyOiB0b0Jvb2woYWxsb3dDbGVhciwgdHJ1ZSksXG4gICAgICAvLyBuei1kYXRlLXBpY2tlclxuICAgICAgc2hvd1RvZGF5OiB0b0Jvb2woc2hvd1RvZGF5LCB0cnVlKSxcbiAgICB9O1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IFNGVmFsdWUpIHtcbiAgICB2YWx1ZSA9IHRoaXMudG9EYXRlKHZhbHVlKTtcbiAgICBpZiAodGhpcy5mbGF0UmFuZ2UpIHtcbiAgICAgIHRoaXMuZGlzcGxheVZhbHVlID0gdmFsdWUgPT0gbnVsbCA/IFtdIDogW3ZhbHVlLCB0aGlzLnRvRGF0ZSh0aGlzLmVuZFByb3BlcnR5LmZvcm1EYXRhKV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGlzcGxheVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgX2NoYW5nZSh2YWx1ZTogRGF0ZSB8IERhdGVbXSB8IG51bGwpIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCAoPERhdGVbXT52YWx1ZSkubGVuZ3RoIDwgMikge1xuICAgICAgdGhpcy5zZXRWYWx1ZShudWxsKTtcbiAgICAgIHRoaXMuc2V0RW5kKG51bGwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlcyA9IEFycmF5LmlzQXJyYXkodmFsdWUpXG4gICAgICA/IFtmb3JtYXQodmFsdWVbMF0sIHRoaXMuc3RhcnRGb3JtYXQpLCBmb3JtYXQodmFsdWVbMV0sIHRoaXMuZW5kRm9ybWF0IHx8IHRoaXMuc3RhcnRGb3JtYXQpXVxuICAgICAgOiBmb3JtYXQodmFsdWUsIHRoaXMuc3RhcnRGb3JtYXQpO1xuXG4gICAgaWYgKHRoaXMuZmxhdFJhbmdlKSB7XG4gICAgICB0aGlzLnNldEVuZChyZXNbMV0pO1xuICAgICAgdGhpcy5zZXRWYWx1ZShyZXNbMF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHJlcyk7XG4gICAgfVxuICB9XG5cbiAgX29wZW5DaGFuZ2Uoc3RhdHVzOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMudWkub25PcGVuQ2hhbmdlKSB0aGlzLnVpLm9uT3BlbkNoYW5nZShzdGF0dXMpO1xuICB9XG5cbiAgX29rKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy51aS5vbk9rKSB0aGlzLnVpLm9uT2sodmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgZW5kUHJvcGVydHkoKTogRm9ybVByb3BlcnR5IHtcbiAgICByZXR1cm4gdGhpcy5mb3JtUHJvcGVydHkucGFyZW50IS5wcm9wZXJ0aWVzIVt0aGlzLnVpLmVuZCFdO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRFbmQodmFsdWU6IHN0cmluZyB8IG51bGwpIHtcbiAgICBpZiAoIXRoaXMuZmxhdFJhbmdlKSByZXR1cm47XG5cbiAgICB0aGlzLmVuZFByb3BlcnR5LnNldFZhbHVlKHZhbHVlLCB0cnVlKTtcbiAgfVxuXG4gIHByaXZhdGUgdG9EYXRlKHZhbHVlOiBTRlZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHwgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgIWlzTmFOKCt2YWx1ZSkpKSB7XG4gICAgICB2YWx1ZSA9IG5ldyBEYXRlKCt2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuIl19