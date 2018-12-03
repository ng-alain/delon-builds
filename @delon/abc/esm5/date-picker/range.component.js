/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// tslint:disable:no-any
import { forwardRef, Component, EventEmitter, Input, Output, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBoolean } from '@delon/util';
import { DatePickerConfig, DateRangePickerConfig } from './date-picker.config';
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
        this.onChangeFn = function () { return void 0; };
        this.onTouchedFn = function () { return void 0; };
        Object.assign(this, new DateRangePickerConfig(), cog && cog.range);
    }
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
    RangePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'range-picker',
                    template: "<nz-range-picker\n  [ngModel]=\"value\"\n  (ngModelChange)=\"valueChange($event)\"\n\n  [nzAllowClear]=\"nzAllowClear\"\n  [nzAutoFocus]=\"nzAutoFocus\"\n  [nzClassName]=\"nzClassName\"\n  [nzDisabled]=\"nzDisabled\"\n  [nzSize]=\"nzSize\"\n  [nzDisabledDate]=\"nzDisabledDate\"\n  [nzLocale]=\"nzLocale\"\n  [nzPopupStyle]=\"nzPopupStyle\"\n  [nzDropdownClassName]=\"nzDropdownClassName\"\n  [nzStyle]=\"nzStyle\"\n  [nzPlaceHolder]=\"nzPlaceHolder\"\n  (nzOnOpenChange)=\"_nzOnOpenChange($event)\"\n\n  [nzDateRender]=\"nzDateRender\"\n  [nzDisabledTime]=\"nzDisabledTime\"\n  [nzFormat]=\"nzFormat\"\n  [nzRenderExtraFooter]=\"nzRenderExtraFooter\"\n  [nzShowTime]=\"nzShowTime\"\n  [nzShowToday]=\"nzShowToday\"\n  [nzMode]=\"nzMode\"\n  [nzRanges]=\"nzRanges\"\n  (nzOnPanelChange)=\"_nzOnPanelChange($event)\"\n\n  (nzOnOk)=\"_nzOnOk($event)\"\n></nz-range-picker>\n",
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
        ngModelEnd: [{ type: Input }],
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
    /** @type {?} */
    RangePickerComponent.prototype.onChangeFn;
    /** @type {?} */
    RangePickerComponent.prototype.onTouchedFn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbInJhbmdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUvRTtJQXFFRSxhQUFhO0lBRWIsOEJBQVksR0FBcUI7UUEzRGpDLFVBQUssR0FBVyxFQUFFLENBQUM7UUFLVixxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDOztRQUtyRCxpQkFBWSxHQUFHLElBQUksQ0FBQztRQUVwQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQW9CWCxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFldEQsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFNbkIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRTFDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBMEIxQyxlQUFVLEdBQXdCLGNBQU0sT0FBQSxLQUFLLENBQUMsRUFBTixDQUFNLENBQUM7UUFDL0MsZ0JBQVcsR0FBZSxjQUFNLE9BQUEsS0FBSyxDQUFDLEVBQU4sQ0FBTSxDQUFDO1FBdEJyQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLHFCQUFxQixFQUFFLEVBQUUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7OztJQUVELDhDQUFlOzs7O0lBQWYsVUFBZ0Is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MUMsMENBQStDOztJQUMvQywyQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpuby1hbnlcbmltcG9ydCB7XG4gIGZvcndhcmRSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IERhdGVQaWNrZXJDb25maWcsIERhdGVSYW5nZVBpY2tlckNvbmZpZyB9IGZyb20gJy4vZGF0ZS1waWNrZXIuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmFuZ2UtcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JhbmdlLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFJhbmdlUGlja2VyQ29tcG9uZW50KSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBSYW5nZVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgdmFsdWU6IERhdGVbXSA9IFtdO1xuXG4gIEBJbnB1dCgpXG4gIG5nTW9kZWxFbmQ6IERhdGU7XG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBuZ01vZGVsRW5kQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPigpO1xuXG4gIC8vICNyZWdpb24gTmF0aXZlIHByb3BlcnRpZXNcblxuICBASW5wdXQoKVxuICBuekFsbG93Q2xlYXIgPSB0cnVlO1xuICBASW5wdXQoKVxuICBuekF1dG9Gb2N1cyA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBuekNsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBuekRpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBuelNpemU6IHN0cmluZztcbiAgQElucHV0KClcbiAgbnpTdHlsZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBuekRpc2FibGVkRGF0ZTogYW55O1xuICBASW5wdXQoKVxuICBuekxvY2FsZTogYW55O1xuICBASW5wdXQoKVxuICBuelBvcHVwU3R5bGU6IGFueTtcbiAgQElucHV0KClcbiAgbnpEcm9wZG93bkNsYXNzTmFtZTogYW55O1xuICBASW5wdXQoKVxuICBuelBsYWNlSG9sZGVyOiBhbnk7XG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBuek9uT3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAvLyByYW5nZVxuICBASW5wdXQoKVxuICBuekRhdGVSZW5kZXI6IGFueTtcbiAgQElucHV0KClcbiAgbnpGb3JtYXQ6IGFueTtcbiAgQElucHV0KClcbiAgbnpEaXNhYmxlZFRpbWU6IGFueTtcbiAgQElucHV0KClcbiAgbnpSZW5kZXJFeHRyYUZvb3RlcjogYW55O1xuICBASW5wdXQoKVxuICBuelNob3dUaW1lOiBhbnk7XG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBuelNob3dUb2RheTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIG56TW9kZTogYW55O1xuICBASW5wdXQoKVxuICBuelJhbmdlczogYW55O1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgbnpPblBhbmVsQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBuek9uT2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IoY29nOiBEYXRlUGlja2VyQ29uZmlnKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBuZXcgRGF0ZVJhbmdlUGlja2VyQ29uZmlnKCksIGNvZyAmJiBjb2cucmFuZ2UpO1xuICB9XG5cbiAgX256T25PcGVuQ2hhbmdlKGU6IGFueSkge1xuICAgIHRoaXMubnpPbk9wZW5DaGFuZ2UuZW1pdChlKTtcbiAgfVxuXG4gIF9uek9uUGFuZWxDaGFuZ2UoZTogYW55KSB7XG4gICAgdGhpcy5uek9uUGFuZWxDaGFuZ2UuZW1pdChlKTtcbiAgfVxuXG4gIF9uek9uT2soZTogYW55KSB7XG4gICAgdGhpcy5uek9uT2suZW1pdChlKTtcbiAgfVxuXG4gIHZhbHVlQ2hhbmdlKGU6IERhdGVbXSkge1xuICAgIHRoaXMub25DaGFuZ2VGbihlWzBdKTtcbiAgICB0aGlzLm5nTW9kZWxFbmQgPSBlWzFdO1xuICAgIHRoaXMubmdNb2RlbEVuZENoYW5nZS5lbWl0KGVbMV0pO1xuICB9XG5cbiAgb25DaGFuZ2VGbjogKHZhbDogRGF0ZSkgPT4gdm9pZCA9ICgpID0+IHZvaWQgMDtcbiAgb25Ub3VjaGVkRm46ICgpID0+IHZvaWQgPSAoKSA9PiB2b2lkIDA7XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZSk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZSAmJiB0aGlzLm5nTW9kZWxFbmQgPyBbdmFsdWUsIHRoaXMubmdNb2RlbEVuZF0gOiBbXTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2VGbiA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkRm4gPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm56RGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgfVxufVxuIl19