/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/date/date.widget.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import { toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';
var DateWidget = /** @class */ (function (_super) {
    __extends(DateWidget, _super);
    function DateWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.flatRange = false;
        _this.displayValue = null;
        return _this;
    }
    /**
     * @return {?}
     */
    DateWidget.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _a = this.ui, mode = _a.mode, end = _a.end, displayFormat = _a.displayFormat, allowClear = _a.allowClear, showToday = _a.showToday;
        this.mode = mode || 'date';
        this.flatRange = end != null;
        // 构建属性对象时会对默认值进行校验，因此可以直接使用 format 作为格式化属性
        this.startFormat = (/** @type {?} */ (this.ui._format));
        if (this.flatRange) {
            this.mode = 'range';
            /** @type {?} */
            var endUi = (/** @type {?} */ (this.endProperty.ui));
            this.endFormat = endUi.format ? endUi._format : this.startFormat;
        }
        if (!displayFormat) {
            switch (this.mode) {
                case 'year':
                    this.displayFormat = "yyyy";
                    break;
                case 'month':
                    this.displayFormat = "yyyy-MM";
                    break;
                case 'week':
                    this.displayFormat = "yyyy-ww";
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
        value = this.toDate(value, this.startFormat);
        if (this.flatRange) {
            this.displayValue = value == null ? [] : [value, this.toDate(this.endProperty.formData, this.endFormat || this.startFormat)];
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
        if (value == null || ((/** @type {?} */ (value))).length < 2) {
            this.setValue(null);
            this.setEnd(null);
            return;
        }
        /** @type {?} */
        var res = Array.isArray(value)
            ? [format(value[0], this.startFormat), format(value[1], this.endFormat || this.startFormat)]
            : format(value, this.startFormat);
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
            return ((/** @type {?} */ ((/** @type {?} */ (this.formProperty.parent)).properties)))[(/** @type {?} */ (this.ui.end))];
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
        if (!this.flatRange)
            return;
        this.endProperty.setValue(value, true);
    };
    /**
     * @private
     * @param {?} value
     * @param {?} formatString
     * @return {?}
     */
    DateWidget.prototype.toDate = /**
     * @private
     * @param {?} value
     * @param {?} formatString
     * @return {?}
     */
    function (value, formatString) {
        if (value instanceof Date) {
            return value;
        }
        if (typeof value === 'number' || (typeof value === 'string' && !isNaN(+value))) {
            value = new Date(+value);
        }
        /** @type {?} */
        var res = value ? parse(value, formatString, new Date()) : null;
        return res != null && res.toString() === 'Invalid Date' ? new Date(value) : res;
    };
    DateWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-date',
                    template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  <ng-container [ngSwitch]=\"mode\">\n\n    <nz-year-picker *ngSwitchCase=\"'year'\"\n                    [nzDisabled]=\"disabled\"\n                    [nzSize]=\"ui.size\"\n                    [nzFormat]=\"displayFormat\"\n                    [(ngModel)]=\"displayValue\"\n                    (ngModelChange)=\"_change($event)\"\n                    [nzAllowClear]=\"i.allowClear\"\n                    [ngClass]=\"ui.className\"\n                    [nzDisabledDate]=\"ui.disabledDate\"\n                    [nzLocale]=\"ui.locale\"\n                    [nzPlaceHolder]=\"ui.placeholder\"\n                    [nzPopupStyle]=\"ui.popupStyle\"\n                    [nzDropdownClassName]=\"ui.dropdownClassName\"\n                    (nzOnOpenChange)=\"_openChange($event)\"\n                    [nzRenderExtraFooter]=\"ui.renderExtraFooter\"></nz-year-picker>\n\n    <nz-month-picker *ngSwitchCase=\"'month'\"\n                     [nzDisabled]=\"disabled\"\n                     [nzSize]=\"ui.size\"\n                     [nzFormat]=\"displayFormat\"\n                     [(ngModel)]=\"displayValue\"\n                     (ngModelChange)=\"_change($event)\"\n                     [nzAllowClear]=\"i.allowClear\"\n                     [ngClass]=\"ui.className\"\n                     [nzDisabledDate]=\"ui.disabledDate\"\n                     [nzLocale]=\"ui.locale\"\n                     [nzPlaceHolder]=\"ui.placeholder\"\n                     [nzPopupStyle]=\"ui.popupStyle\"\n                     [nzDropdownClassName]=\"ui.dropdownClassName\"\n                     (nzOnOpenChange)=\"_openChange($event)\"\n                     [nzRenderExtraFooter]=\"ui.renderExtraFooter\"></nz-month-picker>\n\n    <nz-week-picker *ngSwitchCase=\"'week'\"\n                    [nzDisabled]=\"disabled\"\n                    [nzSize]=\"ui.size\"\n                    [nzFormat]=\"displayFormat\"\n                    [(ngModel)]=\"displayValue\"\n                    (ngModelChange)=\"_change($event)\"\n                    [nzAllowClear]=\"i.allowClear\"\n                    [ngClass]=\"ui.className\"\n                    [nzDisabledDate]=\"ui.disabledDate\"\n                    [nzLocale]=\"ui.locale\"\n                    [nzPlaceHolder]=\"ui.placeholder\"\n                    [nzPopupStyle]=\"ui.popupStyle\"\n                    [nzDropdownClassName]=\"ui.dropdownClassName\"\n                    (nzOnOpenChange)=\"_openChange($event)\"></nz-week-picker>\n\n    <nz-range-picker *ngSwitchCase=\"'range'\"\n                     [nzDisabled]=\"disabled\"\n                     [nzSize]=\"ui.size\"\n                     [nzFormat]=\"displayFormat\"\n                     [(ngModel)]=\"displayValue\"\n                     (ngModelChange)=\"_change($event)\"\n                     [nzAllowClear]=\"i.allowClear\"\n                     [ngClass]=\"ui.className\"\n                     [nzDisabledDate]=\"ui.disabledDate\"\n                     [nzLocale]=\"ui.locale\"\n                     [nzPlaceHolder]=\"ui.placeholder\"\n                     [nzPopupStyle]=\"ui.popupStyle\"\n                     [nzDropdownClassName]=\"ui.dropdownClassName\"\n                     (nzOnOpenChange)=\"_openChange($event)\"\n                     [nzDisabledTime]=\"ui.disabledTime\"\n                     [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n                     [nzRanges]=\"ui.ranges\"\n                     [nzShowTime]=\"ui.showTime\"\n                     (nzOnOk)=\"_ok($event)\"></nz-range-picker>\n\n    <nz-date-picker *ngSwitchDefault\n                    [nzDisabled]=\"disabled\"\n                    [nzSize]=\"ui.size\"\n                    [nzFormat]=\"displayFormat\"\n                    [(ngModel)]=\"displayValue\"\n                    (ngModelChange)=\"_change($event)\"\n                    [nzAllowClear]=\"i.allowClear\"\n                    [ngClass]=\"ui.className\"\n                    [nzDisabledDate]=\"ui.disabledDate\"\n                    [nzLocale]=\"ui.locale\"\n                    [nzPlaceHolder]=\"ui.placeholder\"\n                    [nzPopupStyle]=\"ui.popupStyle\"\n                    [nzDropdownClassName]=\"ui.dropdownClassName\"\n                    (nzOnOpenChange)=\"_openChange($event)\"\n                    [nzDisabledTime]=\"ui.disabledTime\"\n                    [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n                    [nzShowTime]=\"ui.showTime\"\n                    [nzShowToday]=\"i.showToday\"\n                    (nzOnOk)=\"_ok($event)\"></nz-date-picker>\n  </ng-container>\n\n</sf-item-wrap>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS53aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL2RhdGUvZGF0ZS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQztBQUNyQyxPQUFPLEtBQUssTUFBTSxnQkFBZ0IsQ0FBQztBQUduQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFHL0M7SUFNZ0MsOEJBQW1DO0lBTm5FO1FBQUEscUVBeUdDO1FBaEdTLGVBQVMsR0FBRyxLQUFLLENBQUM7UUFFMUIsa0JBQVksR0FBeUIsSUFBSSxDQUFDOztJQThGNUMsQ0FBQzs7OztJQTFGQyw2QkFBUTs7O0lBQVI7UUFDUSxJQUFBLFlBQTZELEVBQTNELGNBQUksRUFBRSxZQUFHLEVBQUUsZ0NBQWEsRUFBRSwwQkFBVSxFQUFFLHdCQUFxQjtRQUNuRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDO1FBQzdCLDJDQUEyQztRQUMzQyxJQUFJLENBQUMsV0FBVyxHQUFHLG1CQUFBLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFDLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDOztnQkFDZCxLQUFLLEdBQUcsbUJBQUEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQXNCO1lBQ3ZELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFD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LFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLG9ySkFBaUM7b0JBQ2pDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs7SUFvR0QsaUJBQUM7Q0FBQSxBQXpHRCxDQU1nQyxlQUFlLEdBbUc5QztTQW5HWSxVQUFVOzs7Ozs7SUFDckIsaUNBQTRCOzs7OztJQUM1QiwrQkFBMEI7Ozs7O0lBQzFCLCtCQUEwQjs7SUFDMUIsMEJBQWE7O0lBQ2Isa0NBQTBDOztJQUMxQyxtQ0FBc0I7O0lBQ3RCLHVCQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgZm9ybWF0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCc7XG5pbXBvcnQgcGFyc2UgZnJvbSAnZGF0ZS1mbnMvcGFyc2UnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuLi8uLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB7IHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBTRkRhdGVXaWRnZXRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWRhdGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS53aWRnZXQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFVJV2lkZ2V0PFNGRGF0ZVdpZGdldFNjaGVtYT4gaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIHN0YXJ0Rm9ybWF0OiBzdHJpbmc7XG4gIHByaXZhdGUgZW5kRm9ybWF0OiBzdHJpbmc7XG4gIHByaXZhdGUgZmxhdFJhbmdlID0gZmFsc2U7XG4gIG1vZGU6IHN0cmluZztcbiAgZGlzcGxheVZhbHVlOiBEYXRlIHwgRGF0ZVtdIHwgbnVsbCA9IG51bGw7XG4gIGRpc3BsYXlGb3JtYXQ6IHN0cmluZztcbiAgaTogYW55O1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgbW9kZSwgZW5kLCBkaXNwbGF5Rm9ybWF0LCBhbGxvd0NsZWFyLCBzaG93VG9kYXkgfSA9IHRoaXMudWk7XG4gICAgdGhpcy5tb2RlID0gbW9kZSB8fCAnZGF0ZSc7XG4gICAgdGhpcy5mbGF0UmFuZ2UgPSBlbmQgIT0gbnVsbDtcbiAgICAvLyDmnoTlu7rlsZ7mgKflr7nosaHml7bkvJrlr7npu5jorqTlgLzov5vooYzmoKHpqozvvIzlm6DmraTlj6/ku6Xnm7TmjqXkvb/nlKggZm9ybWF0IOS9nOS4uuagvOW8j+WMluWxnuaAp1xuICAgIHRoaXMuc3RhcnRGb3JtYXQgPSB0aGlzLnVpLl9mb3JtYXQhO1xuICAgIGlmICh0aGlzLmZsYXRSYW5nZSkge1xuICAgICAgdGhpcy5tb2RlID0gJ3JhbmdlJztcbiAgICAgIGNvbnN0IGVuZFVpID0gdGhpcy5lbmRQcm9wZXJ0eS51aSBhcyBTRkRhdGVXaWRnZXRTY2hlbWE7XG4gICAgICB0aGlzLmVuZEZvcm1hdCA9IGVuZFVpLmZvcm1hdCA/IGVuZFVpLl9mb3JtYXQgOiB0aGlzLnN0YXJ0Rm9ybWF0O1xuICAgIH1cbiAgICBpZiAoIWRpc3BsYXlGb3JtYXQpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5tb2RlKSB7XG4gICAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICAgIHRoaXMuZGlzcGxheUZvcm1hdCA9IGB5eXl5YDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgIHRoaXMuZGlzcGxheUZvcm1hdCA9IGB5eXl5LU1NYDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnd2Vlayc6XG4gICAgICAgICAgdGhpcy5kaXNwbGF5Rm9ybWF0ID0gYHl5eXktd3dgO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpc3BsYXlGb3JtYXQgPSBkaXNwbGF5Rm9ybWF0O1xuICAgIH1cbiAgICB0aGlzLmkgPSB7XG4gICAgICBhbGxvd0NsZWFyOiB0b0Jvb2woYWxsb3dDbGVhciwgdHJ1ZSksXG4gICAgICAvLyBuei1kYXRlLXBpY2tlclxuICAgICAgc2hvd1RvZGF5OiB0b0Jvb2woc2hvd1RvZGF5LCB0cnVlKSxcbiAgICB9O1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IFNGVmFsdWUpIHtcbiAgICB2YWx1ZSA9IHRoaXMudG9EYXRlKHZhbHVlLCB0aGlzLnN0YXJ0Rm9ybWF0KTtcbiAgICBpZiAodGhpcy5mbGF0UmFuZ2UpIHtcbiAgICAgIHRoaXMuZGlzcGxheVZhbHVlID0gdmFsdWUgPT0gbnVsbCA/IFtdIDogW3ZhbHVlLCB0aGlzLnRvRGF0ZSh0aGlzLmVuZFByb3BlcnR5LmZvcm1EYXRhLCB0aGlzLmVuZEZvcm1hdCB8fCB0aGlzLnN0YXJ0Rm9ybWF0KV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGlzcGxheVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgX2NoYW5nZSh2YWx1ZTogRGF0ZSB8IERhdGVbXSB8IG51bGwpIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCAodmFsdWUgYXMgRGF0ZVtdKS5sZW5ndGggPCAyKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKG51bGwpO1xuICAgICAgdGhpcy5zZXRFbmQobnVsbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVzID0gQXJyYXkuaXNBcnJheSh2YWx1ZSlcbiAgICAgID8gW2Zvcm1hdCh2YWx1ZVswXSwgdGhpcy5zdGFydEZvcm1hdCksIGZvcm1hdCh2YWx1ZVsxXSwgdGhpcy5lbmRGb3JtYXQgfHwgdGhpcy5zdGFydEZvcm1hdCldXG4gICAgICA6IGZvcm1hdCh2YWx1ZSwgdGhpcy5zdGFydEZvcm1hdCk7XG5cbiAgICBpZiAodGhpcy5mbGF0UmFuZ2UpIHtcbiAgICAgIHRoaXMuc2V0RW5kKHJlc1sxXSk7XG4gICAgICB0aGlzLnNldFZhbHVlKHJlc1swXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUocmVzKTtcbiAgICB9XG4gIH1cblxuICBfb3BlbkNoYW5nZShzdGF0dXM6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy51aS5vbk9wZW5DaGFuZ2UpIHRoaXMudWkub25PcGVuQ2hhbmdlKHN0YXR1cyk7XG4gIH1cblxuICBfb2sodmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLnVpLm9uT2spIHRoaXMudWkub25Payh2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIGdldCBlbmRQcm9wZXJ0eSgpOiBGb3JtUHJvcGVydHkge1xuICAgIHJldHVybiAodGhpcy5mb3JtUHJvcGVydHkucGFyZW50IS5wcm9wZXJ0aWVzIGFzIHsgW2tleTogc3RyaW5nXTogRm9ybVByb3BlcnR5IH0pW3RoaXMudWkuZW5kIV07XG4gIH1cblxuICBwcml2YXRlIHNldEVuZCh2YWx1ZTogc3RyaW5nIHwgbnVsbCkge1xuICAgIGlmICghdGhpcy5mbGF0UmFuZ2UpIHJldHVybjtcblxuICAgIHRoaXMuZW5kUHJvcGVydHkuc2V0VmFsdWUodmFsdWUsIHRydWUpO1xuICB9XG5cbiAgcHJpdmF0ZSB0b0RhdGUodmFsdWU6IFNGVmFsdWUsIGZvcm1hdFN0cmluZzogc3RyaW5nKTogRGF0ZSB8IG51bGwge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHwgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgIWlzTmFOKCt2YWx1ZSkpKSB7XG4gICAgICB2YWx1ZSA9IG5ldyBEYXRlKCt2YWx1ZSk7XG4gICAgfVxuICAgIGNvbnN0IHJlcyA9IHZhbHVlID8gcGFyc2UodmFsdWUsIGZvcm1hdFN0cmluZywgbmV3IERhdGUoKSkgOiBudWxsO1xuICAgIHJldHVybiByZXMgIT0gbnVsbCAmJiByZXMudG9TdHJpbmcoKSA9PT0gJ0ludmFsaWQgRGF0ZScgPyBuZXcgRGF0ZSh2YWx1ZSkgOiByZXM7XG4gIH1cbn1cbiJdfQ==