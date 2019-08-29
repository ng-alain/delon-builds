/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import format from 'date-fns/format';
import { toBool, isDateFns } from '../../utils';
import { ControlUIWidget } from '../../widget';
var DateWidget = /** @class */ (function (_super) {
    tslib_1.__extends(DateWidget, _super);
    function DateWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.flatRange = false;
        _this.displayValue = null;
        return _this;
    }
    Object.defineProperty(DateWidget.prototype, "zorroI18n", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.injector.get(NzI18nService);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DateWidget.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // tslint:disable-next-line: no-shadowed-variable
        var _a = this.ui, mode = _a.mode, end = _a.end, displayFormat = _a.displayFormat, format = _a.format, allowClear = _a.allowClear, showToday = _a.showToday;
        this.mode = mode || 'date';
        this.flatRange = end != null;
        if (this.flatRange) {
            this.mode = 'range';
        }
        if (!displayFormat) {
            /** @type {?} */
            var usingDateFns = isDateFns(this.zorroI18n);
            switch (this.mode) {
                case 'year':
                    this.displayFormat = usingDateFns ? "YYYY" : "yyyy";
                    break;
                case 'month':
                    this.displayFormat = usingDateFns ? "YYYY-MM" : "yyyy-MM";
                    break;
                case 'week':
                    this.displayFormat = usingDateFns ? "YYYY-WW" : "yyyy-ww";
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
        this.detectChanges();
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
        var res = Array.isArray(value) ? value.map((/**
         * @param {?} d
         * @return {?}
         */
        function (d) { return format(d, _this.valueFormat); })) : format(value, this.valueFormat);
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
    /**
     * @param {?} value
     * @return {?}
     */
    DateWidget.prototype._ok = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.ui.onOk)
            this.ui.onOk(value);
    };
    Object.defineProperty(DateWidget.prototype, "endProperty", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return (/** @type {?} */ ((/** @type {?} */ (this.formProperty.parent)).properties))[(/** @type {?} */ (this.ui.end))];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    DateWidget.prototype.setEnd = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.flatRange) {
            this.endProperty.setValue(value, true);
        }
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    DateWidget.prototype.toDate = /**
     * @private
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
                    template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  <ng-container [ngSwitch]=\"mode\">\n\n    <nz-year-picker *ngSwitchCase=\"'year'\"\n                    [nzDisabled]=\"disabled\"\n                    [nzSize]=\"ui.size\"\n                    [nzFormat]=\"displayFormat\"\n                    [(ngModel)]=\"displayValue\"\n                    (ngModelChange)=\"_change($event)\"\n                    [nzAllowClear]=\"i.allowClear\"\n                    [nzClassName]=\"ui.className\"\n                    [nzDisabledDate]=\"ui.disabledDate\"\n                    [nzLocale]=\"ui.locale\"\n                    [nzPlaceHolder]=\"ui.placeholder\"\n                    [nzPopupStyle]=\"ui.popupStyle\"\n                    [nzDropdownClassName]=\"ui.dropdownClassName\"\n                    (nzOnOpenChange)=\"_openChange($event)\"\n                    [nzRenderExtraFooter]=\"ui.renderExtraFooter\"></nz-year-picker>\n\n    <nz-month-picker *ngSwitchCase=\"'month'\"\n                     [nzDisabled]=\"disabled\"\n                     [nzSize]=\"ui.size\"\n                     [nzFormat]=\"displayFormat\"\n                     [(ngModel)]=\"displayValue\"\n                     (ngModelChange)=\"_change($event)\"\n                     [nzAllowClear]=\"i.allowClear\"\n                     [nzClassName]=\"ui.className\"\n                     [nzDisabledDate]=\"ui.disabledDate\"\n                     [nzLocale]=\"ui.locale\"\n                     [nzPlaceHolder]=\"ui.placeholder\"\n                     [nzPopupStyle]=\"ui.popupStyle\"\n                     [nzDropdownClassName]=\"ui.dropdownClassName\"\n                     (nzOnOpenChange)=\"_openChange($event)\"\n                     [nzRenderExtraFooter]=\"ui.renderExtraFooter\"></nz-month-picker>\n\n    <nz-week-picker *ngSwitchCase=\"'week'\"\n                    [nzDisabled]=\"disabled\"\n                    [nzSize]=\"ui.size\"\n                    [nzFormat]=\"displayFormat\"\n                    [(ngModel)]=\"displayValue\"\n                    (ngModelChange)=\"_change($event)\"\n                    [nzAllowClear]=\"i.allowClear\"\n                    [nzClassName]=\"ui.className\"\n                    [nzDisabledDate]=\"ui.disabledDate\"\n                    [nzLocale]=\"ui.locale\"\n                    [nzPlaceHolder]=\"ui.placeholder\"\n                    [nzPopupStyle]=\"ui.popupStyle\"\n                    [nzDropdownClassName]=\"ui.dropdownClassName\"\n                    (nzOnOpenChange)=\"_openChange($event)\"></nz-week-picker>\n\n    <nz-range-picker *ngSwitchCase=\"'range'\"\n                     [nzDisabled]=\"disabled\"\n                     [nzSize]=\"ui.size\"\n                     [nzFormat]=\"displayFormat\"\n                     [(ngModel)]=\"displayValue\"\n                     (ngModelChange)=\"_change($event)\"\n                     [nzAllowClear]=\"i.allowClear\"\n                     [nzClassName]=\"ui.className\"\n                     [nzDisabledDate]=\"ui.disabledDate\"\n                     [nzLocale]=\"ui.locale\"\n                     [nzPlaceHolder]=\"ui.placeholder\"\n                     [nzPopupStyle]=\"ui.popupStyle\"\n                     [nzDropdownClassName]=\"ui.dropdownClassName\"\n                     (nzOnOpenChange)=\"_openChange($event)\"\n                     [nzDisabledTime]=\"ui.disabledTime\"\n                     [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n                     [nzRanges]=\"ui.ranges\"\n                     [nzShowTime]=\"ui.showTime\"\n                     (nzOnOk)=\"_ok($event)\"></nz-range-picker>\n\n    <nz-date-picker *ngSwitchDefault\n                    [nzDisabled]=\"disabled\"\n                    [nzSize]=\"ui.size\"\n                    [nzFormat]=\"displayFormat\"\n                    [(ngModel)]=\"displayValue\"\n                    (ngModelChange)=\"_change($event)\"\n                    [nzAllowClear]=\"i.allowClear\"\n                    [nzClassName]=\"ui.className\"\n                    [nzDisabledDate]=\"ui.disabledDate\"\n                    [nzLocale]=\"ui.locale\"\n                    [nzPlaceHolder]=\"ui.placeholder\"\n                    [nzPopupStyle]=\"ui.popupStyle\"\n                    [nzDropdownClassName]=\"ui.dropdownClassName\"\n                    (nzOnOpenChange)=\"_openChange($event)\"\n                    [nzDisabledTime]=\"ui.disabledTime\"\n                    [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n                    [nzShowTime]=\"ui.showTime\"\n                    [nzShowToday]=\"i.showToday\"\n                    (nzOnOk)=\"_ok($event)\"></nz-date-picker>\n  </ng-container>\n\n</sf-item-wrap>\n",
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    return DateWidget;
}(ControlUIWidget));
export { DateWidget };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS53aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL2RhdGUvZGF0ZS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQztBQUdyQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRy9DO0lBTWdDLHNDQUFtQztJQU5uRTtRQUFBLHFFQXNHQztRQTlGUyxlQUFTLEdBQUcsS0FBSyxDQUFDO1FBRTFCLGtCQUFZLEdBQXlCLElBQUksQ0FBQzs7SUE0RjVDLENBQUM7SUF4RkMsc0JBQVksaUNBQVM7Ozs7O1FBQXJCO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBZ0IsYUFBYSxDQUFDLENBQUM7UUFDekQsQ0FBQzs7O09BQUE7Ozs7SUFFRCw2QkFBUTs7O0lBQVI7O1FBRVEsSUFBQSxZQUFxRSxFQUFuRSxjQUFJLEVBQUUsWUFBRyxFQUFFLGdDQUFhLEVBQUUsa0JBQU0sRUFBRSwwQkFBVSxFQUFFLHdCQUFxQjtRQUMzRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDO1FBQzdCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztTQUNyQjtRQUNELElBQUksQ0FBQyxhQUFhLEVBQUU7O2dCQUNaLFlBQVksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFD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LEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxzQkFBWSxtQ0FBVzs7Ozs7UUFBdkI7WUFDRSxPQUFPLG1CQUFBLG1CQUFBLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFDLENBQUMsVUFBVSxFQUFDLENBQUMsbUJBQUEsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDO1FBQzdELENBQUM7OztPQUFBOzs7Ozs7SUFFTywyQkFBTTs7Ozs7SUFBZCxVQUFlLEtBQW9CO1FBQ2pDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDeEM7SUFDSCxDQUFDOzs7Ozs7SUFFTywyQkFBTTs7Ozs7SUFBZCxVQUFlLEtBQWM7UUFDM0IsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksQ0FBQyxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzlFLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFCO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztnQkFyR0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQix3c0pBQWlDO29CQUNqQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7O0lBaUdELGlCQUFDO0NBQUEsQUF0R0QsQ0FNZ0MsZUFBZSxHQWdHOUM7U0FoR1ksVUFBVTs7Ozs7O0lBQ3JCLGlDQUE0Qjs7Ozs7SUFDNUIsK0JBQTBCOztJQUMxQiwwQkFBYTs7SUFDYixrQ0FBMEM7O0lBQzFDLG1DQUFzQjs7SUFDdEIsdUJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuaW1wb3J0IGZvcm1hdCBmcm9tICdkYXRlLWZucy9mb3JtYXQnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuLi8uLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB7IHRvQm9vbCwgaXNEYXRlRm5zIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ29udHJvbFVJV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGRGF0ZVdpZGdldFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtZGF0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlLndpZGdldC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIERhdGVXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZEYXRlV2lkZ2V0U2NoZW1hPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgdmFsdWVGb3JtYXQ6IHN0cmluZztcbiAgcHJpdmF0ZSBmbGF0UmFuZ2UgPSBmYWxzZTtcbiAgbW9kZTogc3RyaW5nO1xuICBkaXNwbGF5VmFsdWU6IERhdGUgfCBEYXRlW10gfCBudWxsID0gbnVsbDtcbiAgZGlzcGxheUZvcm1hdDogc3RyaW5nO1xuICBpOiBhbnk7XG5cbiAgcHJpdmF0ZSBnZXQgem9ycm9JMThuKCk6IE56STE4blNlcnZpY2Uge1xuICAgIHJldHVybiB0aGlzLmluamVjdG9yLmdldDxOekkxOG5TZXJ2aWNlPihOekkxOG5TZXJ2aWNlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tc2hhZG93ZWQtdmFyaWFibGVcbiAgICBjb25zdCB7IG1vZGUsIGVuZCwgZGlzcGxheUZvcm1hdCwgZm9ybWF0LCBhbGxvd0NsZWFyLCBzaG93VG9kYXkgfSA9IHRoaXMudWk7XG4gICAgdGhpcy5tb2RlID0gbW9kZSB8fCAnZGF0ZSc7XG4gICAgdGhpcy5mbGF0UmFuZ2UgPSBlbmQgIT0gbnVsbDtcbiAgICBpZiAodGhpcy5mbGF0UmFuZ2UpIHtcbiAgICAgIHRoaXMubW9kZSA9ICdyYW5nZSc7XG4gICAgfVxuICAgIGlmICghZGlzcGxheUZvcm1hdCkge1xuICAgICAgY29uc3QgdXNpbmdEYXRlRm5zID0gaXNEYXRlRm5zKHRoaXMuem9ycm9JMThuKTtcbiAgICAgIHN3aXRjaCAodGhpcy5tb2RlKSB7XG4gICAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICAgIHRoaXMuZGlzcGxheUZvcm1hdCA9IHVzaW5nRGF0ZUZucyA/IGBZWVlZYCA6IGB5eXl5YDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgIHRoaXMuZGlzcGxheUZvcm1hdCA9IHVzaW5nRGF0ZUZucyA/IGBZWVlZLU1NYCA6IGB5eXl5LU1NYDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnd2Vlayc6XG4gICAgICAgICAgdGhpcy5kaXNwbGF5Rm9ybWF0ID0gdXNpbmdEYXRlRm5zID8gYFlZWVktV1dgIDogYHl5eXktd3dgO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpc3BsYXlGb3JtYXQgPSBkaXNwbGF5Rm9ybWF0O1xuICAgIH1cbiAgICAvLyDmnoTlu7rlsZ7mgKflr7nosaHml7bkvJrlr7npu5jorqTlgLzov5vooYzmoKHpqozvvIzlm6DmraTlj6/ku6Xnm7TmjqXkvb/nlKggZm9ybWF0IOS9nOS4uuagvOW8j+WMluWxnuaAp1xuICAgIHRoaXMudmFsdWVGb3JtYXQgPSBmb3JtYXQhO1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIGFsbG93Q2xlYXI6IHRvQm9vbChhbGxvd0NsZWFyLCB0cnVlKSxcbiAgICAgIC8vIG56LWRhdGUtcGlja2VyXG4gICAgICBzaG93VG9kYXk6IHRvQm9vbChzaG93VG9kYXksIHRydWUpLFxuICAgIH07XG4gIH1cblxuICByZXNldCh2YWx1ZTogU0ZWYWx1ZSkge1xuICAgIHZhbHVlID0gdGhpcy50b0RhdGUodmFsdWUpO1xuICAgIGlmICh0aGlzLmZsYXRSYW5nZSkge1xuICAgICAgdGhpcy5kaXNwbGF5VmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gW10gOiBbdmFsdWUsIHRoaXMudG9EYXRlKHRoaXMuZW5kUHJvcGVydHkuZm9ybURhdGEpXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNwbGF5VmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBfY2hhbmdlKHZhbHVlOiBEYXRlIHwgRGF0ZVtdIHwgbnVsbCkge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKG51bGwpO1xuICAgICAgdGhpcy5zZXRFbmQobnVsbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVzID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZS5tYXAoZCA9PiBmb3JtYXQoZCwgdGhpcy52YWx1ZUZvcm1hdCkpIDogZm9ybWF0KHZhbHVlLCB0aGlzLnZhbHVlRm9ybWF0KTtcblxuICAgIGlmICh0aGlzLmZsYXRSYW5nZSkge1xuICAgICAgdGhpcy5zZXRFbmQocmVzWzFdKTtcbiAgICAgIHRoaXMuc2V0VmFsdWUocmVzWzBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRWYWx1ZShyZXMpO1xuICAgIH1cbiAgfVxuXG4gIF9vcGVuQ2hhbmdlKHN0YXR1czogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLnVpLm9uT3BlbkNoYW5nZSkgdGhpcy51aS5vbk9wZW5DaGFuZ2Uoc3RhdHVzKTtcbiAgfVxuXG4gIF9vayh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMudWkub25PaykgdGhpcy51aS5vbk9rKHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGVuZFByb3BlcnR5KCk6IEZvcm1Qcm9wZXJ0eSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybVByb3BlcnR5LnBhcmVudCEucHJvcGVydGllcyFbdGhpcy51aS5lbmQhXTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0RW5kKHZhbHVlOiBzdHJpbmcgfCBudWxsKSB7XG4gICAgaWYgKHRoaXMuZmxhdFJhbmdlKSB7XG4gICAgICB0aGlzLmVuZFByb3BlcnR5LnNldFZhbHVlKHZhbHVlLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRvRGF0ZSh2YWx1ZTogU0ZWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8ICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICFpc05hTigrdmFsdWUpKSkge1xuICAgICAgdmFsdWUgPSBuZXcgRGF0ZSgrdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cbiJdfQ==