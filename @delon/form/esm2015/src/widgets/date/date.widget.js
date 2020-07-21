/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/date/date.widget.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { toDate } from '@delon/util';
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
            this.displayValue =
                value == null
                    ? []
                    : [
                        value,
                        toDate((/** @type {?} */ (this.endProperty.formData)), { formatString: this.endFormat || this.startFormat, defaultValue: null }),
                    ];
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
                template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <ng-container [ngSwitch]=\"mode\">\n    <nz-year-picker\n      *ngSwitchCase=\"'year'\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [ngClass]=\"ui.className\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale\"\n      [nzPlaceHolder]=\"ui.placeholder\"\n      [nzPopupStyle]=\"ui.popupStyle\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n      [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n    ></nz-year-picker>\n\n    <nz-month-picker\n      *ngSwitchCase=\"'month'\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [ngClass]=\"ui.className\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale\"\n      [nzPlaceHolder]=\"ui.placeholder\"\n      [nzPopupStyle]=\"ui.popupStyle\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n      [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n    ></nz-month-picker>\n\n    <nz-week-picker\n      *ngSwitchCase=\"'week'\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [ngClass]=\"ui.className\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale\"\n      [nzPlaceHolder]=\"ui.placeholder\"\n      [nzPopupStyle]=\"ui.popupStyle\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n    ></nz-week-picker>\n\n    <nz-range-picker\n      *ngSwitchCase=\"'range'\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [ngClass]=\"ui.className\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale\"\n      [nzPlaceHolder]=\"ui.placeholder\"\n      [nzPopupStyle]=\"ui.popupStyle\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n      [nzDisabledTime]=\"ui.disabledTime\"\n      [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n      [nzRanges]=\"ui.ranges\"\n      [nzShowTime]=\"ui.showTime\"\n      (nzOnOk)=\"_ok($event)\"\n    ></nz-range-picker>\n\n    <nz-date-picker\n      *ngSwitchDefault\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [ngClass]=\"ui.className\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale\"\n      [nzPlaceHolder]=\"ui.placeholder\"\n      [nzPopupStyle]=\"ui.popupStyle\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n      [nzDisabledTime]=\"ui.disabledTime\"\n      [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n      [nzShowTime]=\"ui.showTime\"\n      [nzShowToday]=\"i.showToday\"\n      (nzOnOk)=\"_ok($event)\"\n    ></nz-date-picker>\n  </ng-container>\n</sf-item-wrap>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS53aWRnZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL2RhdGUvZGF0ZS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDckMsT0FBTyxNQUFNLE1BQU0saUJBQWlCLENBQUM7QUFJckMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNyQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBUy9DLE1BQU0sT0FBTyxVQUFXLFNBQVEsZUFBbUM7SUFObkU7O1FBU1UsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUUxQixpQkFBWSxHQUF5QixJQUFJLENBQUM7SUFpRzVDLENBQUM7Ozs7SUE3RkMsUUFBUTtjQUNBLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFO1FBQ25FLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUM7UUFDN0IsMkNBQTJDO1FBQzNDLElBQUksQ0FBQyxXQUFXLEdBQUcsbUJBQUEsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUMsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7O2tCQUNkLEtBQUssR0FBRyxtQkFBQSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBc0I7WUFDdkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFB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QzVCLCtCQUEwQjs7Ozs7SUFDMUIsK0JBQTBCOztJQUMxQiwwQkFBYTs7SUFDYixrQ0FBMEM7O0lBQzFDLG1DQUFzQjs7SUFDdEIsdUJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0JztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4uLy4uL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ29udHJvbFVJV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGRGF0ZVdpZGdldFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtZGF0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlLndpZGdldC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIERhdGVXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZEYXRlV2lkZ2V0U2NoZW1hPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgc3RhcnRGb3JtYXQ6IHN0cmluZztcbiAgcHJpdmF0ZSBlbmRGb3JtYXQ6IHN0cmluZztcbiAgcHJpdmF0ZSBmbGF0UmFuZ2UgPSBmYWxzZTtcbiAgbW9kZTogc3RyaW5nO1xuICBkaXNwbGF5VmFsdWU6IERhdGUgfCBEYXRlW10gfCBudWxsID0gbnVsbDtcbiAgZGlzcGxheUZvcm1hdDogc3RyaW5nO1xuICBpOiBhbnk7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBtb2RlLCBlbmQsIGRpc3BsYXlGb3JtYXQsIGFsbG93Q2xlYXIsIHNob3dUb2RheSB9ID0gdGhpcy51aTtcbiAgICB0aGlzLm1vZGUgPSBtb2RlIHx8ICdkYXRlJztcbiAgICB0aGlzLmZsYXRSYW5nZSA9IGVuZCAhPSBudWxsO1xuICAgIC8vIOaehOW7uuWxnuaAp+WvueixoeaXtuS8muWvuem7mOiupOWAvOi/m+ihjOagoemqjO+8jOWboOatpOWPr+S7peebtOaOpeS9v+eUqCBmb3JtYXQg5L2c5Li65qC85byP5YyW5bGe5oCnXG4gICAgdGhpcy5zdGFydEZvcm1hdCA9IHRoaXMudWkuX2Zvcm1hdCE7XG4gICAgaWYgKHRoaXMuZmxhdFJhbmdlKSB7XG4gICAgICB0aGlzLm1vZGUgPSAncmFuZ2UnO1xuICAgICAgY29uc3QgZW5kVWkgPSB0aGlzLmVuZFByb3BlcnR5LnVpIGFzIFNGRGF0ZVdpZGdldFNjaGVtYTtcbiAgICAgIHRoaXMuZW5kRm9ybWF0ID0gZW5kVWkuZm9ybWF0ID8gZW5kVWkuX2Zvcm1hdCA6IHRoaXMuc3RhcnRGb3JtYXQ7XG4gICAgfVxuICAgIGlmICghZGlzcGxheUZvcm1hdCkge1xuICAgICAgc3dpdGNoICh0aGlzLm1vZGUpIHtcbiAgICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgICAgdGhpcy5kaXNwbGF5Rm9ybWF0ID0gYHl5eXlgO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtb250aCc6XG4gICAgICAgICAgdGhpcy5kaXNwbGF5Rm9ybWF0ID0gYHl5eXktTU1gO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd3ZWVrJzpcbiAgICAgICAgICB0aGlzLmRpc3BsYXlGb3JtYXQgPSBgeXl5eS13d2A7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGlzcGxheUZvcm1hdCA9IGRpc3BsYXlGb3JtYXQ7XG4gICAgfVxuICAgIHRoaXMuaSA9IHtcbiAgICAgIGFsbG93Q2xlYXI6IHRvQm9vbChhbGxvd0NsZWFyLCB0cnVlKSxcbiAgICAgIC8vIG56LWRhdGUtcGlja2VyXG4gICAgICBzaG93VG9kYXk6IHRvQm9vbChzaG93VG9kYXksIHRydWUpLFxuICAgIH07XG4gIH1cblxuICByZXNldCh2YWx1ZTogU0ZWYWx1ZSkge1xuICAgIHZhbHVlID0gdG9EYXRlKHZhbHVlLCB7IGZvcm1hdFN0cmluZzogdGhpcy5zdGFydEZvcm1hdCwgZGVmYXVsdFZhbHVlOiBudWxsIH0pO1xuICAgIGlmICh0aGlzLmZsYXRSYW5nZSkge1xuICAgICAgdGhpcy5kaXNwbGF5VmFsdWUgPVxuICAgICAgICB2YWx1ZSA9PSBudWxsXG4gICAgICAgICAgPyBbXVxuICAgICAgICAgIDogW1xuICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgdG9EYXRlKHRoaXMuZW5kUHJvcGVydHkuZm9ybURhdGEgYXMgTnpTYWZlQW55LCB7IGZvcm1hdFN0cmluZzogdGhpcy5lbmRGb3JtYXQgfHwgdGhpcy5zdGFydEZvcm1hdCwgZGVmYXVsdFZhbHVlOiBudWxsIH0pLFxuICAgICAgICAgICAgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNwbGF5VmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgLy8gVE9ETzogTmVlZCB0byB3YWl0IGZvciB0aGUgcmVuZGVyaW5nIHRvIGNvbXBsZXRlLCBvdGhlcndpc2UgaXQgd2lsbCBiZSBvdmVyd3JpdHRlbiBvZiBlbmQgd2lkZ2V0XG4gICAgaWYgKHRoaXMuZGlzcGxheVZhbHVlKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX2NoYW5nZSh0aGlzLmRpc3BsYXlWYWx1ZSwgZmFsc2UpKTtcbiAgICB9XG4gIH1cblxuICBfY2hhbmdlKHZhbHVlOiBEYXRlIHwgRGF0ZVtdIHwgbnVsbCwgZW1pdE1vZGVsQ2hhbmdlID0gdHJ1ZSkge1xuICAgIGlmIChlbWl0TW9kZWxDaGFuZ2UgJiYgdGhpcy51aS5jaGFuZ2UpIHtcbiAgICAgIHRoaXMudWkuY2hhbmdlKHZhbHVlKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09IG51bGwgfHwgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA8IDIpKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKG51bGwpO1xuICAgICAgdGhpcy5zZXRFbmQobnVsbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVzID0gQXJyYXkuaXNBcnJheSh2YWx1ZSlcbiAgICAgID8gW2Zvcm1hdCh2YWx1ZVswXSwgdGhpcy5zdGFydEZvcm1hdCksIGZvcm1hdCh2YWx1ZVsxXSwgdGhpcy5lbmRGb3JtYXQgfHwgdGhpcy5zdGFydEZvcm1hdCldXG4gICAgICA6IGZvcm1hdCh2YWx1ZSwgdGhpcy5zdGFydEZvcm1hdCk7XG5cbiAgICBpZiAodGhpcy5mbGF0UmFuZ2UpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUocmVzWzBdKTtcbiAgICAgIHRoaXMuc2V0RW5kKHJlc1sxXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUocmVzKTtcbiAgICB9XG4gIH1cblxuICBfb3BlbkNoYW5nZShzdGF0dXM6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy51aS5vbk9wZW5DaGFuZ2UpIHRoaXMudWkub25PcGVuQ2hhbmdlKHN0YXR1cyk7XG4gIH1cblxuICBfb2sodmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLnVpLm9uT2spIHRoaXMudWkub25Payh2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIGdldCBlbmRQcm9wZXJ0eSgpOiBGb3JtUHJvcGVydHkge1xuICAgIHJldHVybiAodGhpcy5mb3JtUHJvcGVydHkucGFyZW50IS5wcm9wZXJ0aWVzIGFzIHsgW2tleTogc3RyaW5nXTogRm9ybVByb3BlcnR5IH0pW3RoaXMudWkuZW5kIV07XG4gIH1cblxuICBwcml2YXRlIHNldEVuZCh2YWx1ZTogc3RyaW5nIHwgbnVsbCkge1xuICAgIGlmICghdGhpcy5mbGF0UmFuZ2UpIHJldHVybjtcblxuICAgIHRoaXMuZW5kUHJvcGVydHkuc2V0VmFsdWUodmFsdWUsIHRydWUpO1xuICAgIHRoaXMuZW5kUHJvcGVydHkudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICB9XG59XG4iXX0=