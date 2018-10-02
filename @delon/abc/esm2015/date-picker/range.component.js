/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { forwardRef, Component, Input, Output, EventEmitter, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBoolean } from '@delon/util';
import { DatePickerConfig, DateRangePickerConfig } from './date-picker.config';
export class RangePickerComponent {
    /**
     * @param {?} cog
     */
    constructor(cog) {
        this.value = [];
        this.ngModelEndChange = new EventEmitter();
        // #region Native properties
        this.nzAllowClear = true;
        this.nzAutoFocus = false;
        this.nzOnOpenChange = new EventEmitter();
        this.nzShowToday = true;
        this.nzOnPanelChange = new EventEmitter();
        this.nzOnOk = new EventEmitter();
        this.onChangeFn = () => void 0;
        this.onTouchedFn = () => void 0;
        Object.assign(this, new DateRangePickerConfig(), cog && cog.range);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    _nzOnOpenChange(e) {
        this.nzOnOpenChange.emit(e);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    _nzOnPanelChange(e) {
        this.nzOnPanelChange.emit(e);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    _nzOnOk(e) {
        this.nzOnOk.emit(e);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    valueChange(e) {
        this.onChangeFn(e[0]);
        this.ngModelEnd = e[1];
        this.ngModelEndChange.emit(e[1]);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value && this.ngModelEnd ? [value, this.ngModelEnd] : [];
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeFn = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedFn = fn;
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
        this.nzDisabled = disabled;
    }
}
RangePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'range-picker',
                template: "<nz-range-picker\r\n  [ngModel]=\"value\"\r\n  (ngModelChange)=\"valueChange($event)\"\r\n\r\n  [nzAllowClear]=\"nzAllowClear\"\r\n  [nzAutoFocus]=\"nzAutoFocus\"\r\n  [nzClassName]=\"nzClassName\"\r\n  [nzDisabled]=\"nzDisabled\"\r\n  [nzSize]=\"nzSize\"\r\n  [nzDisabledDate]=\"nzDisabledDate\"\r\n  [nzLocale]=\"nzLocale\"\r\n  [nzPopupStyle]=\"nzPopupStyle\"\r\n  [nzDropdownClassName]=\"nzDropdownClassName\"\r\n  [nzStyle]=\"nzStyle\"\r\n  [nzPlaceHolder]=\"nzPlaceHolder\"\r\n  (nzOnOpenChange)=\"_nzOnOpenChange($event)\"\r\n\r\n  [nzDateRender]=\"nzDateRender\"\r\n  [nzDisabledTime]=\"nzDisabledTime\"\r\n  [nzFormat]=\"nzFormat\"\r\n  [nzRenderExtraFooter]=\"nzRenderExtraFooter\"\r\n  [nzShowTime]=\"nzShowTime\"\r\n  [nzShowToday]=\"nzShowToday\"\r\n  [nzMode]=\"nzMode\"\r\n  [nzRanges]=\"nzRanges\"\r\n  (nzOnPanelChange)=\"_nzOnPanelChange($event)\"\r\n\r\n  (nzOnOk)=\"_nzOnOk($event)\"\r\n></nz-range-picker>\r\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: forwardRef(() => RangePickerComponent),
                    },
                ]
            }] }
];
/** @nocollapse */
RangePickerComponent.ctorParameters = () => [
    { type: DatePickerConfig }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbInJhbmdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBYS9FLE1BQU07Ozs7SUE0REosWUFBWSxHQUFxQjtxQkEzRGpCLEVBQUU7Z0NBS0MsSUFBSSxZQUFZLEVBQVE7OzRCQUs1QixJQUFJOzJCQUVMLEtBQUs7OEJBb0JGLElBQUksWUFBWSxFQUFXOzJCQWVyQixJQUFJOytCQU1ULElBQUksWUFBWSxFQUFPO3NCQUVoQyxJQUFJLFlBQVksRUFBTzswQkEwQkUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDOzJCQUNwQixHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUF0QnBDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUkscUJBQXFCLEVBQUUsRUFBRSxHQUFHLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3BFOzs7OztJQUVELGVBQWUsQ0FBQyxDQUFNO1FBQ3BCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzdCOzs7OztJQUVELGdCQUFnQixDQUFDLENBQU07UUFDckIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDOUI7Ozs7O0lBRUQsT0FBTyxDQUFDLENBQU07UUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNyQjs7Ozs7SUFFRCxXQUFXLENBQUMsQ0FBUztRQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbEM7Ozs7O0lBS0QsVUFBVSxDQUFDLEtBQVc7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7S0FDdkU7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsRUFBTztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztLQUN0Qjs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0tBQ3ZCOzs7OztJQUVELGdCQUFnQixDQUFDLFFBQWlCO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO0tBQzVCOzs7WUE5R0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4Qiw4NkJBQXFDO2dCQUNyQyxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsS0FBSyxFQUFFLElBQUk7d0JBQ1gsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztxQkFDcEQ7aUJBQ0Y7YUFDRjs7OztZQVpRLGdCQUFnQjs7O3lCQWdCdEIsS0FBSzsrQkFFTCxNQUFNOzJCQUtOLEtBQUs7MEJBRUwsS0FBSzswQkFFTCxLQUFLO3lCQUVMLEtBQUs7cUJBRUwsS0FBSztzQkFFTCxLQUFLOzZCQUVMLEtBQUs7dUJBRUwsS0FBSzsyQkFFTCxLQUFLO2tDQUVMLEtBQUs7NEJBRUwsS0FBSzs2QkFFTCxNQUFNOzJCQUlOLEtBQUs7dUJBRUwsS0FBSzs2QkFFTCxLQUFLO2tDQUVMLEtBQUs7eUJBRUwsS0FBSzswQkFFTCxLQUFLO3FCQUdMLEtBQUs7dUJBRUwsS0FBSzs4QkFFTCxNQUFNO3FCQUVOLE1BQU07OztJQVJOLFlBQVksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgZm9yd2FyZFJlZixcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcbmltcG9ydCB7IERhdGVQaWNrZXJDb25maWcsIERhdGVSYW5nZVBpY2tlckNvbmZpZyB9IGZyb20gJy4vZGF0ZS1waWNrZXIuY29uZmlnJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncmFuZ2UtcGlja2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcmFuZ2UuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFJhbmdlUGlja2VyQ29tcG9uZW50KSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJhbmdlUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gIHZhbHVlOiBEYXRlW10gPSBbXTtcclxuXHJcbiAgQElucHV0KClcclxuICBuZ01vZGVsRW5kOiBEYXRlO1xyXG4gIEBPdXRwdXQoKVxyXG4gIG5nTW9kZWxFbmRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XHJcblxyXG4gIC8vICNyZWdpb24gTmF0aXZlIHByb3BlcnRpZXNcclxuXHJcbiAgQElucHV0KClcclxuICBuekFsbG93Q2xlYXIgPSB0cnVlO1xyXG4gIEBJbnB1dCgpXHJcbiAgbnpBdXRvRm9jdXMgPSBmYWxzZTtcclxuICBASW5wdXQoKVxyXG4gIG56Q2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBuekRpc2FibGVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgbnpTaXplOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBuelN0eWxlOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBuekRpc2FibGVkRGF0ZTogYW55O1xyXG4gIEBJbnB1dCgpXHJcbiAgbnpMb2NhbGU6IGFueTtcclxuICBASW5wdXQoKVxyXG4gIG56UG9wdXBTdHlsZTogYW55O1xyXG4gIEBJbnB1dCgpXHJcbiAgbnpEcm9wZG93bkNsYXNzTmFtZTogYW55O1xyXG4gIEBJbnB1dCgpXHJcbiAgbnpQbGFjZUhvbGRlcjogYW55O1xyXG4gIEBPdXRwdXQoKVxyXG4gIG56T25PcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICAvLyByYW5nZVxyXG4gIEBJbnB1dCgpXHJcbiAgbnpEYXRlUmVuZGVyOiBhbnk7XHJcbiAgQElucHV0KClcclxuICBuekZvcm1hdDogYW55O1xyXG4gIEBJbnB1dCgpXHJcbiAgbnpEaXNhYmxlZFRpbWU6IGFueTtcclxuICBASW5wdXQoKVxyXG4gIG56UmVuZGVyRXh0cmFGb290ZXI6IGFueTtcclxuICBASW5wdXQoKVxyXG4gIG56U2hvd1RpbWU6IGFueTtcclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dEJvb2xlYW4oKVxyXG4gIG56U2hvd1RvZGF5OiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKVxyXG4gIG56TW9kZTogYW55O1xyXG4gIEBJbnB1dCgpXHJcbiAgbnpSYW5nZXM6IGFueTtcclxuICBAT3V0cHV0KClcclxuICBuek9uUGFuZWxDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KClcclxuICBuek9uT2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICBjb25zdHJ1Y3Rvcihjb2c6IERhdGVQaWNrZXJDb25maWcpIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgbmV3IERhdGVSYW5nZVBpY2tlckNvbmZpZygpLCBjb2cgJiYgY29nLnJhbmdlKTtcclxuICB9XHJcblxyXG4gIF9uek9uT3BlbkNoYW5nZShlOiBhbnkpIHtcclxuICAgIHRoaXMubnpPbk9wZW5DaGFuZ2UuZW1pdChlKTtcclxuICB9XHJcblxyXG4gIF9uek9uUGFuZWxDaGFuZ2UoZTogYW55KSB7XHJcbiAgICB0aGlzLm56T25QYW5lbENoYW5nZS5lbWl0KGUpO1xyXG4gIH1cclxuXHJcbiAgX256T25PayhlOiBhbnkpIHtcclxuICAgIHRoaXMubnpPbk9rLmVtaXQoZSk7XHJcbiAgfVxyXG5cclxuICB2YWx1ZUNoYW5nZShlOiBEYXRlW10pIHtcclxuICAgIHRoaXMub25DaGFuZ2VGbihlWzBdKTtcclxuICAgIHRoaXMubmdNb2RlbEVuZCA9IGVbMV07XHJcbiAgICB0aGlzLm5nTW9kZWxFbmRDaGFuZ2UuZW1pdChlWzFdKTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlRm46ICh2YWw6IERhdGUpID0+IHZvaWQgPSAoKSA9PiB2b2lkIDA7XHJcbiAgb25Ub3VjaGVkRm46ICgpID0+IHZvaWQgPSAoKSA9PiB2b2lkIDA7XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IERhdGUpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZSAmJiB0aGlzLm5nTW9kZWxFbmQgPyBbdmFsdWUsIHRoaXMubmdNb2RlbEVuZF0gOiBbXTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZUZuID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZEZuID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLm56RGlzYWJsZWQgPSBkaXNhYmxlZDtcclxuICB9XHJcbn1cclxuIl19