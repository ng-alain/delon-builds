/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { forwardRef, Component, Input, Output, EventEmitter, } from '@angular/core';
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
                    template: "<nz-range-picker\r\n  [ngModel]=\"value\"\r\n  (ngModelChange)=\"valueChange($event)\"\r\n\r\n  [nzAllowClear]=\"nzAllowClear\"\r\n  [nzAutoFocus]=\"nzAutoFocus\"\r\n  [nzClassName]=\"nzClassName\"\r\n  [nzDisabled]=\"nzDisabled\"\r\n  [nzSize]=\"nzSize\"\r\n  [nzDisabledDate]=\"nzDisabledDate\"\r\n  [nzLocale]=\"nzLocale\"\r\n  [nzPopupStyle]=\"nzPopupStyle\"\r\n  [nzDropdownClassName]=\"nzDropdownClassName\"\r\n  [nzStyle]=\"nzStyle\"\r\n  [nzPlaceHolder]=\"nzPlaceHolder\"\r\n  (nzOnOpenChange)=\"_nzOnOpenChange($event)\"\r\n\r\n  [nzDateRender]=\"nzDateRender\"\r\n  [nzDisabledTime]=\"nzDisabledTime\"\r\n  [nzFormat]=\"nzFormat\"\r\n  [nzRenderExtraFooter]=\"nzRenderExtraFooter\"\r\n  [nzShowTime]=\"nzShowTime\"\r\n  [nzShowToday]=\"nzShowToday\"\r\n  [nzMode]=\"nzMode\"\r\n  [nzRanges]=\"nzRanges\"\r\n  (nzOnPanelChange)=\"_nzOnPanelChange($event)\"\r\n\r\n  (nzOnOk)=\"_nzOnOk($event)\"\r\n></nz-range-picker>\r\n",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbInJhbmdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztJQXVFN0UsYUFBYTtJQUViLDhCQUFZLEdBQXFCO3FCQTNEakIsRUFBRTtnQ0FLQyxJQUFJLFlBQVksRUFBUTs7NEJBSzVCLElBQUk7MkJBRUwsS0FBSzs4QkFvQkYsSUFBSSxZQUFZLEVBQVc7MkJBZXJCLElBQUk7K0JBTVQsSUFBSSxZQUFZLEVBQU87c0JBRWhDLElBQUksWUFBWSxFQUFPOzBCQTBCRSxjQUFNLE9BQUEsS0FBSyxDQUFDLEVBQU4sQ0FBTTsyQkFDcEIsY0FBTSxPQUFBLEtBQUssQ0FBQyxFQUFOLENBQU07UUF0QnBDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUkscUJBQXFCLEVBQUUsRUFBRSxHQUFHLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3BFOzs7OztJQUVELDhDQUFlOzs7O0lBQWYsVUFBZ0IsQ0FBTTtRQUNwQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUM3Qjs7Ozs7SUFFRCwrQ0FBZ0I7Ozs7SUFBaEIsVUFBaUIsQ0FBTTtRQUNyQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUM5Qjs7Ozs7SUFFRCxzQ0FBTzs7OztJQUFQLFVBQVEsQ0FBTTtRQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3JCOzs7OztJQUVELDBDQUFXOzs7O0lBQVgsVUFBWSxDQUFTO1FBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNsQzs7Ozs7SUFLRCx5Q0FBVTs7OztJQUFWLFVBQVcsS0FBVztRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztLQUN2RTs7Ozs7SUFFRCwrQ0FBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBTztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztLQUN0Qjs7Ozs7SUFFRCxnREFBaUI7Ozs7SUFBakIsVUFBa0IsRUFBTztRQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztLQUN2Qjs7Ozs7SUFFRCwrQ0FBZ0I7Ozs7SUFBaEIsVUFBaUIsUUFBaUI7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7S0FDNUI7O2dCQTlHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLDg2QkFBcUM7b0JBQ3JDLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixLQUFLLEVBQUUsSUFBSTs0QkFDWCxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxvQkFBb0IsRUFBcEIsQ0FBb0IsQ0FBQzt5QkFDcEQ7cUJBQ0Y7aUJBQ0Y7Ozs7Z0JBWlEsZ0JBQWdCOzs7NkJBZ0J0QixLQUFLO21DQUVMLE1BQU07K0JBS04sS0FBSzs4QkFFTCxLQUFLOzhCQUVMLEtBQUs7NkJBRUwsS0FBSzt5QkFFTCxLQUFLOzBCQUVMLEtBQUs7aUNBRUwsS0FBSzsyQkFFTCxLQUFLOytCQUVMLEtBQUs7c0NBRUwsS0FBSztnQ0FFTCxLQUFLO2lDQUVMLE1BQU07K0JBSU4sS0FBSzsyQkFFTCxLQUFLO2lDQUVMLEtBQUs7c0NBRUwsS0FBSzs2QkFFTCxLQUFLOzhCQUVMLEtBQUs7eUJBR0wsS0FBSzsyQkFFTCxLQUFLO2tDQUVMLE1BQU07eUJBRU4sTUFBTTs7O1FBUk4sWUFBWSxFQUFFOzs7K0JBckVqQjs7U0FzQmEsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBmb3J3YXJkUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlckNvbmZpZywgRGF0ZVJhbmdlUGlja2VyQ29uZmlnIH0gZnJvbSAnLi9kYXRlLXBpY2tlci5jb25maWcnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdyYW5nZS1waWNrZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9yYW5nZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUmFuZ2VQaWNrZXJDb21wb25lbnQpLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmFuZ2VQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcbiAgdmFsdWU6IERhdGVbXSA9IFtdO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIG5nTW9kZWxFbmQ6IERhdGU7XHJcbiAgQE91dHB1dCgpXHJcbiAgbmdNb2RlbEVuZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcclxuXHJcbiAgLy8gI3JlZ2lvbiBOYXRpdmUgcHJvcGVydGllc1xyXG5cclxuICBASW5wdXQoKVxyXG4gIG56QWxsb3dDbGVhciA9IHRydWU7XHJcbiAgQElucHV0KClcclxuICBuekF1dG9Gb2N1cyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpXHJcbiAgbnpDbGFzc05hbWU6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIG56RGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBuelNpemU6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIG56U3R5bGU6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIG56RGlzYWJsZWREYXRlOiBhbnk7XHJcbiAgQElucHV0KClcclxuICBuekxvY2FsZTogYW55O1xyXG4gIEBJbnB1dCgpXHJcbiAgbnpQb3B1cFN0eWxlOiBhbnk7XHJcbiAgQElucHV0KClcclxuICBuekRyb3Bkb3duQ2xhc3NOYW1lOiBhbnk7XHJcbiAgQElucHV0KClcclxuICBuelBsYWNlSG9sZGVyOiBhbnk7XHJcbiAgQE91dHB1dCgpXHJcbiAgbnpPbk9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIC8vIHJhbmdlXHJcbiAgQElucHV0KClcclxuICBuekRhdGVSZW5kZXI6IGFueTtcclxuICBASW5wdXQoKVxyXG4gIG56Rm9ybWF0OiBhbnk7XHJcbiAgQElucHV0KClcclxuICBuekRpc2FibGVkVGltZTogYW55O1xyXG4gIEBJbnB1dCgpXHJcbiAgbnpSZW5kZXJFeHRyYUZvb3RlcjogYW55O1xyXG4gIEBJbnB1dCgpXHJcbiAgbnpTaG93VGltZTogYW55O1xyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0Qm9vbGVhbigpXHJcbiAgbnpTaG93VG9kYXk6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpXHJcbiAgbnpNb2RlOiBhbnk7XHJcbiAgQElucHV0KClcclxuICBuelJhbmdlczogYW55O1xyXG4gIEBPdXRwdXQoKVxyXG4gIG56T25QYW5lbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIG56T25PayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvZzogRGF0ZVBpY2tlckNvbmZpZykge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBuZXcgRGF0ZVJhbmdlUGlja2VyQ29uZmlnKCksIGNvZyAmJiBjb2cucmFuZ2UpO1xyXG4gIH1cclxuXHJcbiAgX256T25PcGVuQ2hhbmdlKGU6IGFueSkge1xyXG4gICAgdGhpcy5uek9uT3BlbkNoYW5nZS5lbWl0KGUpO1xyXG4gIH1cclxuXHJcbiAgX256T25QYW5lbENoYW5nZShlOiBhbnkpIHtcclxuICAgIHRoaXMubnpPblBhbmVsQ2hhbmdlLmVtaXQoZSk7XHJcbiAgfVxyXG5cclxuICBfbnpPbk9rKGU6IGFueSkge1xyXG4gICAgdGhpcy5uek9uT2suZW1pdChlKTtcclxuICB9XHJcblxyXG4gIHZhbHVlQ2hhbmdlKGU6IERhdGVbXSkge1xyXG4gICAgdGhpcy5vbkNoYW5nZUZuKGVbMF0pO1xyXG4gICAgdGhpcy5uZ01vZGVsRW5kID0gZVsxXTtcclxuICAgIHRoaXMubmdNb2RlbEVuZENoYW5nZS5lbWl0KGVbMV0pO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VGbjogKHZhbDogRGF0ZSkgPT4gdm9pZCA9ICgpID0+IHZvaWQgMDtcclxuICBvblRvdWNoZWRGbjogKCkgPT4gdm9pZCA9ICgpID0+IHZvaWQgMDtcclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZSk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlICYmIHRoaXMubmdNb2RlbEVuZCA/IFt2YWx1ZSwgdGhpcy5uZ01vZGVsRW5kXSA6IFtdO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlRm4gPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkRm4gPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMubnpEaXNhYmxlZCA9IGRpc2FibGVkO1xyXG4gIH1cclxufVxyXG4iXX0=