/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/date/date.widget.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { toDate } from '@delon/util/date-time';
import format from 'date-fns/format';
import { toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';
export class DateWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.flatRange = false;
        this.displayValue = null;
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
            showToday: toBool(showToday, true),
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) {
        value = toDate(value, { formatString: this.startFormat, defaultValue: null });
        if (this.flatRange) {
            /** @type {?} */
            const endValue = toDate((/** @type {?} */ (this.endProperty.formData)), {
                formatString: this.endFormat || this.startFormat,
                defaultValue: null,
            });
            this.displayValue = value == null || endValue == null ? [] : [value, endValue];
        }
        else {
            this.displayValue = value;
        }
        this.detectChanges();
        // TODO: Need to wait for the rendering to complete, otherwise it will be overwritten of end widget
        if (this.displayValue) {
            setTimeout((/**
             * @return {?}
             */
            () => this._change(this.displayValue, false)));
        }
    }
    /**
     * @param {?} value
     * @param {?=} emitModelChange
     * @return {?}
     */
    _change(value, emitModelChange = true) {
        if (emitModelChange && this.ui.change) {
            this.ui.change(value);
        }
        if (value == null || (Array.isArray(value) && value.length < 2)) {
            this.setValue(null);
            this.setEnd(null);
            return;
        }
        /** @type {?} */
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
        return ((/** @type {?} */ ((/** @type {?} */ (this.formProperty.parent)).properties)))[(/** @type {?} */ (this.ui.end))];
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
        this.endProperty.updateValueAndValidity();
    }
}
DateWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-date',
                template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <ng-container [ngSwitch]=\"mode\">\n    <nz-year-picker\n      *ngSwitchCase=\"'year'\"\n      [nzId]=\"id\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [ngClass]=\"ui.className\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale\"\n      [nzPlaceHolder]=\"ui.placeholder\"\n      [nzPopupStyle]=\"ui.popupStyle\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n      [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n      [nzInputReadOnly]=\"ui.inputReadOnly\"\n    ></nz-year-picker>\n\n    <nz-month-picker\n      *ngSwitchCase=\"'month'\"\n      [nzId]=\"id\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [ngClass]=\"ui.className\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale\"\n      [nzPlaceHolder]=\"ui.placeholder\"\n      [nzPopupStyle]=\"ui.popupStyle\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n      [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n      [nzInputReadOnly]=\"ui.inputReadOnly\"\n    ></nz-month-picker>\n\n    <nz-week-picker\n      *ngSwitchCase=\"'week'\"\n      [nzId]=\"id\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [ngClass]=\"ui.className\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale\"\n      [nzPlaceHolder]=\"ui.placeholder\"\n      [nzPopupStyle]=\"ui.popupStyle\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      [nzInputReadOnly]=\"ui.inputReadOnly\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n    ></nz-week-picker>\n\n    <nz-range-picker\n      *ngSwitchCase=\"'range'\"\n      [nzId]=\"id\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [ngClass]=\"ui.className\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale\"\n      [nzPlaceHolder]=\"ui.placeholder\"\n      [nzPopupStyle]=\"ui.popupStyle\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n      [nzDisabledTime]=\"ui.disabledTime\"\n      [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n      [nzRanges]=\"ui.ranges\"\n      [nzShowTime]=\"ui.showTime\"\n      [nzMode]=\"ui.rangeMode\"\n      [nzInputReadOnly]=\"ui.inputReadOnly\"\n      (nzOnOk)=\"_ok($event)\"\n    ></nz-range-picker>\n\n    <nz-date-picker\n      *ngSwitchDefault\n      [nzId]=\"id\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [ngClass]=\"ui.className\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale\"\n      [nzPlaceHolder]=\"ui.placeholder\"\n      [nzPopupStyle]=\"ui.popupStyle\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n      [nzDisabledTime]=\"ui.disabledTime\"\n      [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n      [nzShowTime]=\"ui.showTime\"\n      [nzShowToday]=\"i.showToday\"\n      [nzInputReadOnly]=\"ui.inputReadOnly\"\n      (nzOnOk)=\"_ok($event)\"\n    ></nz-date-picker>\n  </ng-container>\n</sf-item-wrap>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS53aWRnZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL2RhdGUvZGF0ZS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQyxPQUFPLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQztBQUlyQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFTL0MsTUFBTSxPQUFPLFVBQVcsU0FBUSxlQUFtQztJQU5uRTs7UUFTVSxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRTFCLGlCQUFZLEdBQXlCLElBQUksQ0FBQztJQStGNUMsQ0FBQzs7OztJQTNGQyxRQUFRO2NBQ0EsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUU7UUFDbkUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQztRQUM3QiwyQ0FBMkM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxtQkFBQSxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBQyxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQzs7a0JBQ2QsS0FBSyxHQUFHLG1CQUFBLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFzQjtZQUN2RCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxN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QUFDLElBQUk7YUFDdEM7Ozs7Ozs7SUFFQyxpQ0FBNEI7Ozs7O0lBQzVCLCtCQUEwQjs7Ozs7SUFDMUIsK0JBQTBCOztJQUMxQiwwQkFBYTs7SUFDYixrQ0FBMEM7O0lBQzFDLG1DQUFzQjs7SUFDdEIsdUJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gJ0BkZWxvbi91dGlsL2RhdGUtdGltZSc7XG5pbXBvcnQgZm9ybWF0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuLi8uLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB7IHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBTRkRhdGVXaWRnZXRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWRhdGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS53aWRnZXQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFVJV2lkZ2V0PFNGRGF0ZVdpZGdldFNjaGVtYT4gaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIHN0YXJ0Rm9ybWF0OiBzdHJpbmc7XG4gIHByaXZhdGUgZW5kRm9ybWF0OiBzdHJpbmc7XG4gIHByaXZhdGUgZmxhdFJhbmdlID0gZmFsc2U7XG4gIG1vZGU6IHN0cmluZztcbiAgZGlzcGxheVZhbHVlOiBEYXRlIHwgRGF0ZVtdIHwgbnVsbCA9IG51bGw7XG4gIGRpc3BsYXlGb3JtYXQ6IHN0cmluZztcbiAgaTogYW55O1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgbW9kZSwgZW5kLCBkaXNwbGF5Rm9ybWF0LCBhbGxvd0NsZWFyLCBzaG93VG9kYXkgfSA9IHRoaXMudWk7XG4gICAgdGhpcy5tb2RlID0gbW9kZSB8fCAnZGF0ZSc7XG4gICAgdGhpcy5mbGF0UmFuZ2UgPSBlbmQgIT0gbnVsbDtcbiAgICAvLyDmnoTlu7rlsZ7mgKflr7nosaHml7bkvJrlr7npu5jorqTlgLzov5vooYzmoKHpqozvvIzlm6DmraTlj6/ku6Xnm7TmjqXkvb/nlKggZm9ybWF0IOS9nOS4uuagvOW8j+WMluWxnuaAp1xuICAgIHRoaXMuc3RhcnRGb3JtYXQgPSB0aGlzLnVpLl9mb3JtYXQhO1xuICAgIGlmICh0aGlzLmZsYXRSYW5nZSkge1xuICAgICAgdGhpcy5tb2RlID0gJ3JhbmdlJztcbiAgICAgIGNvbnN0IGVuZFVpID0gdGhpcy5lbmRQcm9wZXJ0eS51aSBhcyBTRkRhdGVXaWRnZXRTY2hlbWE7XG4gICAgICB0aGlzLmVuZEZvcm1hdCA9IGVuZFVpLmZvcm1hdCA/IGVuZFVpLl9mb3JtYXQgOiB0aGlzLnN0YXJ0Rm9ybWF0O1xuICAgIH1cbiAgICBpZiAoIWRpc3BsYXlGb3JtYXQpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5tb2RlKSB7XG4gICAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICAgIHRoaXMuZGlzcGxheUZvcm1hdCA9IGB5eXl5YDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgIHRoaXMuZGlzcGxheUZvcm1hdCA9IGB5eXl5LU1NYDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnd2Vlayc6XG4gICAgICAgICAgdGhpcy5kaXNwbGF5Rm9ybWF0ID0gYHl5eXktd3dgO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpc3BsYXlGb3JtYXQgPSBkaXNwbGF5Rm9ybWF0O1xuICAgIH1cbiAgICB0aGlzLmkgPSB7XG4gICAgICBhbGxvd0NsZWFyOiB0b0Jvb2woYWxsb3dDbGVhciwgdHJ1ZSksXG4gICAgICAvLyBuei1kYXRlLXBpY2tlclxuICAgICAgc2hvd1RvZGF5OiB0b0Jvb2woc2hvd1RvZGF5LCB0cnVlKSxcbiAgICB9O1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IFNGVmFsdWUpOiB2b2lkIHtcbiAgICB2YWx1ZSA9IHRvRGF0ZSh2YWx1ZSwgeyBmb3JtYXRTdHJpbmc6IHRoaXMuc3RhcnRGb3JtYXQsIGRlZmF1bHRWYWx1ZTogbnVsbCB9KTtcbiAgICBpZiAodGhpcy5mbGF0UmFuZ2UpIHtcbiAgICAgIGNvbnN0IGVuZFZhbHVlID0gdG9EYXRlKHRoaXMuZW5kUHJvcGVydHkuZm9ybURhdGEgYXMgTnpTYWZlQW55LCB7XG4gICAgICAgIGZvcm1hdFN0cmluZzogdGhpcy5lbmRGb3JtYXQgfHwgdGhpcy5zdGFydEZvcm1hdCxcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IHZhbHVlID09IG51bGwgfHwgZW5kVmFsdWUgPT0gbnVsbCA/IFtdIDogW3ZhbHVlLCBlbmRWYWx1ZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGlzcGxheVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIC8vIFRPRE86IE5lZWQgdG8gd2FpdCBmb3IgdGhlIHJlbmRlcmluZyB0byBjb21wbGV0ZSwgb3RoZXJ3aXNlIGl0IHdpbGwgYmUgb3ZlcndyaXR0ZW4gb2YgZW5kIHdpZGdldFxuICAgIGlmICh0aGlzLmRpc3BsYXlWYWx1ZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9jaGFuZ2UodGhpcy5kaXNwbGF5VmFsdWUsIGZhbHNlKSk7XG4gICAgfVxuICB9XG5cbiAgX2NoYW5nZSh2YWx1ZTogRGF0ZSB8IERhdGVbXSB8IG51bGwsIGVtaXRNb2RlbENoYW5nZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICBpZiAoZW1pdE1vZGVsQ2hhbmdlICYmIHRoaXMudWkuY2hhbmdlKSB7XG4gICAgICB0aGlzLnVpLmNoYW5nZSh2YWx1ZSk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PSBudWxsIHx8IChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPCAyKSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZShudWxsKTtcbiAgICAgIHRoaXMuc2V0RW5kKG51bGwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlcyA9IEFycmF5LmlzQXJyYXkodmFsdWUpXG4gICAgICA/IFtmb3JtYXQodmFsdWVbMF0sIHRoaXMuc3RhcnRGb3JtYXQpLCBmb3JtYXQodmFsdWVbMV0sIHRoaXMuZW5kRm9ybWF0IHx8IHRoaXMuc3RhcnRGb3JtYXQpXVxuICAgICAgOiBmb3JtYXQodmFsdWUsIHRoaXMuc3RhcnRGb3JtYXQpO1xuXG4gICAgaWYgKHRoaXMuZmxhdFJhbmdlKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHJlc1swXSk7XG4gICAgICB0aGlzLnNldEVuZChyZXNbMV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHJlcyk7XG4gICAgfVxuICB9XG5cbiAgX29wZW5DaGFuZ2Uoc3RhdHVzOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkub25PcGVuQ2hhbmdlKSB0aGlzLnVpLm9uT3BlbkNoYW5nZShzdGF0dXMpO1xuICB9XG5cbiAgX29rKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5vbk9rKSB0aGlzLnVpLm9uT2sodmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgZW5kUHJvcGVydHkoKTogRm9ybVByb3BlcnR5IHtcbiAgICByZXR1cm4gKHRoaXMuZm9ybVByb3BlcnR5LnBhcmVudCEucHJvcGVydGllcyBhcyB7IFtrZXk6IHN0cmluZ106IEZvcm1Qcm9wZXJ0eSB9KVt0aGlzLnVpLmVuZCFdO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRFbmQodmFsdWU6IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZmxhdFJhbmdlKSByZXR1cm47XG5cbiAgICB0aGlzLmVuZFByb3BlcnR5LnNldFZhbHVlKHZhbHVlLCB0cnVlKTtcbiAgICB0aGlzLmVuZFByb3BlcnR5LnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgfVxufVxuIl19