/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { forwardRef, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { deepMergeKey, InputBoolean } from '@delon/util';
import { DatePickerConfig, DateRangePickerConfig, } from './date-picker.config';
var RangePickerComponent = /** @class */ (function () {
    // #endregion
    function RangePickerComponent(cog) {
        this.value = [];
        this.ngModelEndChange = new EventEmitter();
        // #region Native properties
        this.nzAllowClear = true;
        this.nzAutoFocus = false;
        this.nzOnOpenChange = new EventEmitter();
        this.nzShowToday = true;
        this.nzOnPanelChange = new EventEmitter();
        this.nzOnOk = new EventEmitter();
        this._cog = deepMergeKey(new DateRangePickerConfig(), true, cog && cog.range);
        Object.assign(this, this._cog);
    }
    Object.defineProperty(RangePickerComponent.prototype, "shortcut", {
        get: /**
         * @return {?}
         */
        function () {
            return this._shortcut;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var item = (/** @type {?} */ (deepMergeKey({}, true, this._cog.shortcuts, val == null ? {} : val)));
            if (typeof val === 'boolean') {
                item.enabled = val;
            }
            this._shortcut = item;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} e
     * @return {?}
     */
    RangePickerComponent.prototype._nzOnOpenChange = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.nzOnOpenChange.emit(e);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    RangePickerComponent.prototype._nzOnPanelChange = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.nzOnPanelChange.emit(e);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    RangePickerComponent.prototype._nzOnOk = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.nzOnOk.emit(e);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    RangePickerComponent.prototype.valueChange = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.onChangeFn(e[0]);
        this.ngModelEnd = e[1];
        this.ngModelEndChange.emit(e[1]);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    RangePickerComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value && this.ngModelEnd ? [value, this.ngModelEnd] : [];
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RangePickerComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeFn = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RangePickerComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedFn = fn;
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    RangePickerComponent.prototype.setDisabledState = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        this.nzDisabled = disabled;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    RangePickerComponent.prototype.clickShortcut = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.value = item.fn(this.value);
        this.valueChange(this.value);
        if (this._shortcut.closed) {
            this.comp.closeOverlay();
        }
    };
    RangePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'range-picker',
                    template: "<nz-range-picker #comp\n                 [ngModel]=\"value\"\n                 (ngModelChange)=\"valueChange($event)\"\n                 [nzAllowClear]=\"nzAllowClear\"\n                 [nzAutoFocus]=\"nzAutoFocus\"\n                 [nzClassName]=\"nzClassName\"\n                 [nzDisabled]=\"nzDisabled\"\n                 [nzSize]=\"nzSize\"\n                 [nzDisabledDate]=\"nzDisabledDate\"\n                 [nzLocale]=\"nzLocale\"\n                 [nzPopupStyle]=\"nzPopupStyle\"\n                 [nzDropdownClassName]=\"nzDropdownClassName\"\n                 [nzStyle]=\"nzStyle\"\n                 [nzPlaceHolder]=\"nzPlaceHolder\"\n                 (nzOnOpenChange)=\"_nzOnOpenChange($event)\"\n                 [nzDateRender]=\"nzDateRender\"\n                 [nzDisabledTime]=\"nzDisabledTime\"\n                 [nzFormat]=\"nzFormat\"\n                 [nzRenderExtraFooter]=\"nzRenderExtraFooter || (shortcut?.enabled ? shortcutTpl : null)\"\n                 [nzShowTime]=\"nzShowTime\"\n                 [nzShowToday]=\"nzShowToday\"\n                 [nzMode]=\"nzMode\"\n                 [nzRanges]=\"nzRanges\"\n                 (nzOnPanelChange)=\"_nzOnPanelChange($event)\"\n                 (nzOnOk)=\"_nzOnOk($event)\"></nz-range-picker>\n<ng-template #shortcutTpl>\n  <a *ngFor=\"let i of shortcut.list;let first=first\"\n     (click)=\"clickShortcut(i)\"\n     [innerHTML]=\"i.text\"\n     [ngClass]=\"{'ml-sm': !first}\"></a>\n</ng-template>\n",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            multi: true,
                            useExisting: forwardRef(function () { return RangePickerComponent; }),
                        },
                    ]
                }] }
    ];
    /** @nocollapse */
    RangePickerComponent.ctorParameters = function () { return [
        { type: DatePickerConfig }
    ]; };
    RangePickerComponent.propDecorators = {
        comp: [{ type: ViewChild, args: ['comp',] }],
        ngModelEnd: [{ type: Input }],
        shortcut: [{ type: Input }],
        ngModelEndChange: [{ type: Output }],
        nzAllowClear: [{ type: Input }],
        nzAutoFocus: [{ type: Input }],
        nzClassName: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzStyle: [{ type: Input }],
        nzDisabledDate: [{ type: Input }],
        nzLocale: [{ type: Input }],
        nzPopupStyle: [{ type: Input }],
        nzDropdownClassName: [{ type: Input }],
        nzPlaceHolder: [{ type: Input }],
        nzOnOpenChange: [{ type: Output }],
        nzDateRender: [{ type: Input }],
        nzFormat: [{ type: Input }],
        nzDisabledTime: [{ type: Input }],
        nzRenderExtraFooter: [{ type: Input }],
        nzShowTime: [{ type: Input }],
        nzShowToday: [{ type: Input }],
        nzMode: [{ type: Input }],
        nzRanges: [{ type: Input }],
        nzOnPanelChange: [{ type: Output }],
        nzOnOk: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], RangePickerComponent.prototype, "nzShowToday", void 0);
    return RangePickerComponent;
}());
export { RangePickerComponent };
if (false) {
    /** @type {?} */
    RangePickerComponent.prototype.onChangeFn;
    /** @type {?} */
    RangePickerComponent.prototype.onTouchedFn;
    /** @type {?} */
    RangePickerComponent.prototype._shortcut;
    /** @type {?} */
    RangePickerComponent.prototype._cog;
    /** @type {?} */
    RangePickerComponent.prototype.comp;
    /** @type {?} */
    RangePickerComponent.prototype.value;
    /** @type {?} */
    RangePickerComponent.prototype.ngModelEnd;
    /** @type {?} */
    RangePickerComponent.prototype.ngModelEndChange;
    /** @type {?} */
    RangePickerComponent.prototype.nzAllowClear;
    /** @type {?} */
    RangePickerComponent.prototype.nzAutoFocus;
    /** @type {?} */
    RangePickerComponent.prototype.nzClassName;
    /** @type {?} */
    RangePickerComponent.prototype.nzDisabled;
    /** @type {?} */
    RangePickerComponent.prototype.nzSize;
    /** @type {?} */
    RangePickerComponent.prototype.nzStyle;
    /** @type {?} */
    RangePickerComponent.prototype.nzDisabledDate;
    /** @type {?} */
    RangePickerComponent.prototype.nzLocale;
    /** @type {?} */
    RangePickerComponent.prototype.nzPopupStyle;
    /** @type {?} */
    RangePickerComponent.prototype.nzDropdownClassName;
    /** @type {?} */
    RangePickerComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    RangePickerComponent.prototype.nzOnOpenChange;
    /** @type {?} */
    RangePickerComponent.prototype.nzDateRender;
    /** @type {?} */
    RangePickerComponent.prototype.nzFormat;
    /** @type {?} */
    RangePickerComponent.prototype.nzDisabledTime;
    /** @type {?} */
    RangePickerComponent.prototype.nzRenderExtraFooter;
    /** @type {?} */
    RangePickerComponent.prototype.nzShowTime;
    /** @type {?} */
    RangePickerComponent.prototype.nzShowToday;
    /** @type {?} */
    RangePickerComponent.prototype.nzMode;
    /** @type {?} */
    RangePickerComponent.prototype.nzRanges;
    /** @type {?} */
    RangePickerComponent.prototype.nzOnPanelChange;
    /** @type {?} */
    RangePickerComponent.prototype.nzOnOk;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbInJhbmdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDekQsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixxQkFBcUIsR0FHdEIsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QjtJQTRERSxhQUFhO0lBRWIsOEJBQVksR0FBcUI7UUE3Q2pDLFVBQUssR0FBVyxFQUFFLENBQUM7UUFjQSxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDOztRQUl0RCxpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQVVWLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQVF2QyxnQkFBVyxHQUFZLElBQUksQ0FBQztRQUdsQyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDMUMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFLbEQsSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUMsSUFBSSxxQkFBcUIsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlFLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBN0NELHNCQUNJLDBDQUFROzs7O1FBT1o7WUFDRSxPQUFPLElBQUksQ0FB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QUFLOzhCQUNMLEtBQUs7NkJBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7aUNBQ0wsS0FBSzsyQkFDTCxLQUFLOytCQUNMLEtBQUs7c0NBQ0wsS0FBSztnQ0FDTCxLQUFLO2lDQUNMLE1BQU07K0JBR04sS0FBSzsyQkFDTCxLQUFLO2lDQUNMLEtBQUs7c0NBQ0wsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7eUJBQ0wsS0FBSzsyQkFDTCxLQUFLO2tDQUNMLE1BQU07eUJBQ04sTUFBTTs7SUFKa0I7UUFBZixZQUFZLEVBQUU7OzZEQUE2QjtJQXNEdkQsMkJBQUM7Q0FBQSxBQTVHRCxJQTRHQztTQWpHWSxvQkFBb0I7OztJQUMvQiwwQ0FBd0M7O0lBQ3hDLDJDQUFnQzs7SUFDaEMseUNBQTJDOztJQUMzQyxvQ0FBb0M7O0lBQ3BDLG9DQUFxQzs7SUFDckMscUNBQW1COztJQUVuQiwwQ0FBMEI7O0lBWTFCLGdEQUErRDs7SUFJL0QsNENBQTZCOztJQUM3QiwyQ0FBNkI7O0lBQzdCLDJDQUE2Qjs7SUFDN0IsMENBQTZCOztJQUM3QixzQ0FBd0I7O0lBQ3hCLHVDQUF5Qjs7SUFDekIsOENBQThDOztJQUM5Qyx3Q0FBMEI7O0lBQzFCLDRDQUE4Qjs7SUFDOUIsbURBQXFDOztJQUNyQyw2Q0FBMEM7O0lBQzFDLDhDQUFnRTs7SUFHaEUsNENBQTJCOztJQUMzQix3Q0FBdUI7O0lBQ3ZCLDhDQUE2Qjs7SUFDN0IsbURBQWtDOztJQUNsQywwQ0FBeUI7O0lBQ3pCLDJDQUFxRDs7SUFDckQsc0NBQXFCOztJQUNyQix3Q0FBdUI7O0lBQ3ZCLCtDQUE2RDs7SUFDN0Qsc0NBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9yd2FyZFJlZiwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZGVlcE1lcmdlS2V5LCBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQge1xuICBEYXRlUGlja2VyQ29uZmlnLFxuICBEYXRlUmFuZ2VQaWNrZXJDb25maWcsXG4gIERhdGVSYW5nZVBpY2tlclNob3J0Y3V0LFxuICBEYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dEl0ZW0sXG59IGZyb20gJy4vZGF0ZS1waWNrZXIuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmFuZ2UtcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JhbmdlLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFJhbmdlUGlja2VyQ29tcG9uZW50KSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBSYW5nZVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgcHJpdmF0ZSBvbkNoYW5nZUZuOiAodmFsOiBEYXRlKSA9PiB2b2lkO1xuICBwcml2YXRlIG9uVG91Y2hlZEZuOiAoKSA9PiB2b2lkO1xuICBwcml2YXRlIF9zaG9ydGN1dDogRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXQ7XG4gIHByaXZhdGUgX2NvZzogRGF0ZVJhbmdlUGlja2VyQ29uZmlnO1xuICBAVmlld0NoaWxkKCdjb21wJykgcHJpdmF0ZSBjb21wOiBhbnk7XG4gIHZhbHVlOiBEYXRlW10gPSBbXTtcblxuICBASW5wdXQoKSBuZ01vZGVsRW5kOiBEYXRlO1xuICBASW5wdXQoKVxuICBzZXQgc2hvcnRjdXQodmFsOiBhbnkpIHtcbiAgICBjb25zdCBpdGVtID0gZGVlcE1lcmdlS2V5KHt9LCB0cnVlLCB0aGlzLl9jb2cuc2hvcnRjdXRzLCB2YWwgPT0gbnVsbCA/IHt9IDogdmFsKSBhcyBEYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dDtcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBpdGVtLmVuYWJsZWQgPSB2YWw7XG4gICAgfVxuICAgIHRoaXMuX3Nob3J0Y3V0ID0gaXRlbTtcbiAgfVxuICBnZXQgc2hvcnRjdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3J0Y3V0O1xuICB9XG4gIEBPdXRwdXQoKSByZWFkb25seSBuZ01vZGVsRW5kQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPigpO1xuXG4gIC8vICNyZWdpb24gTmF0aXZlIHByb3BlcnRpZXNcblxuICBASW5wdXQoKSBuekFsbG93Q2xlYXIgPSB0cnVlO1xuICBASW5wdXQoKSBuekF1dG9Gb2N1cyA9IGZhbHNlO1xuICBASW5wdXQoKSBuekNsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBuekRpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBuelNpemU6IHN0cmluZztcbiAgQElucHV0KCkgbnpTdHlsZTogc3RyaW5nO1xuICBASW5wdXQoKSBuekRpc2FibGVkRGF0ZTogKGQ6IERhdGUpID0+IGJvb2xlYW47XG4gIEBJbnB1dCgpIG56TG9jYWxlOiBvYmplY3Q7XG4gIEBJbnB1dCgpIG56UG9wdXBTdHlsZTogb2JqZWN0O1xuICBASW5wdXQoKSBuekRyb3Bkb3duQ2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56UGxhY2VIb2xkZXI6IHN0cmluZyB8IHN0cmluZ1tdO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbk9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgLy8gcmFuZ2VcbiAgQElucHV0KCkgbnpEYXRlUmVuZGVyOiBhbnk7XG4gIEBJbnB1dCgpIG56Rm9ybWF0OiBhbnk7XG4gIEBJbnB1dCgpIG56RGlzYWJsZWRUaW1lOiBhbnk7XG4gIEBJbnB1dCgpIG56UmVuZGVyRXh0cmFGb290ZXI6IGFueTtcbiAgQElucHV0KCkgbnpTaG93VGltZTogYW55O1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93VG9kYXk6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBuek1vZGU6IGFueTtcbiAgQElucHV0KCkgbnpSYW5nZXM6IGFueTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25QYW5lbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbk9rID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKGNvZzogRGF0ZVBpY2tlckNvbmZpZykge1xuICAgIHRoaXMuX2NvZyA9IGRlZXBNZXJnZUtleShuZXcgRGF0ZVJhbmdlUGlja2VyQ29uZmlnKCksIHRydWUsIGNvZyAmJiBjb2cucmFuZ2UpO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgdGhpcy5fY29nKTtcbiAgfVxuXG4gIF9uek9uT3BlbkNoYW5nZShlOiBhbnkpIHtcbiAgICB0aGlzLm56T25PcGVuQ2hhbmdlLmVtaXQoZSk7XG4gIH1cblxuICBfbnpPblBhbmVsQ2hhbmdlKGU6IGFueSkge1xuICAgIHRoaXMubnpPblBhbmVsQ2hhbmdlLmVtaXQoZSk7XG4gIH1cblxuICBfbnpPbk9rKGU6IGFueSkge1xuICAgIHRoaXMubnpPbk9rLmVtaXQoZSk7XG4gIH1cblxuICB2YWx1ZUNoYW5nZShlOiBEYXRlW10pIHtcbiAgICB0aGlzLm9uQ2hhbmdlRm4oZVswXSk7XG4gICAgdGhpcy5uZ01vZGVsRW5kID0gZVsxXTtcbiAgICB0aGlzLm5nTW9kZWxFbmRDaGFuZ2UuZW1pdChlWzFdKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IERhdGUpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWUgJiYgdGhpcy5uZ01vZGVsRW5kID8gW3ZhbHVlLCB0aGlzLm5nTW9kZWxFbmRdIDogW107XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsOiBEYXRlKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZUZuID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkRm4gPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm56RGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgfVxuXG4gIGNsaWNrU2hvcnRjdXQoaXRlbTogRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXRJdGVtKSB7XG4gICAgdGhpcy52YWx1ZSA9IGl0ZW0uZm4odGhpcy52YWx1ZSk7XG4gICAgdGhpcy52YWx1ZUNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICBpZiAodGhpcy5fc2hvcnRjdXQuY2xvc2VkKSB7XG4gICAgICB0aGlzLmNvbXAuY2xvc2VPdmVybGF5KCk7XG4gICAgfVxuICB9XG59XG4iXX0=